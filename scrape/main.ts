import { parse, HTMLElement } from 'npm:node-html-parser';
import TurndownService from 'npm:turndown';
import { FunctionSigs, parseFunctionSig } from './function.ts';
import { EventCallbackArgs } from './event.ts';

const turndownService = new TurndownService();
turndownService.addRule('mark', {
  filter: ['mark'],
  replacement: (content: string) => {
    return '`' + content + '`';
  },
});

if (!import.meta.main) {
  throw 'Not main!';
}

const SCALARS = new Map<string, string>([
  ['String', 'string'],
  ['Boolean', 'boolean'],
  ['True', 'boolean'],
  ['Float', 'number'],
  ['Integer', 'number'],
]);

const rawHtml = await fetch('https://core.telegram.org/bots/webapps');
const html = parse(await rawHtml.text());

function nexTable(el: HTMLElement | null): HTMLElement | null {
  while (el !== null && el?.tagName !== 'TABLE') {
    el = el.nextElementSibling;
  }

  return el;
}

const WebAppTable = nexTable(
  html
    .getElementsByTagName('h3')
    .find(e => e.text === 'Initializing Mini Apps') || null,
);

const TYPES = new Map<string, boolean>([
  // this Params described if functions description, need to add them manualy
  ['BiometricRequestAccessParams', true],
  ['BiometricAuthenticateParams', true],
  ['AccelerometerStartParams', true],
  ['DeviceOrientationStartParams', true],
  ['GyroscopeStartParams', true],
  ['LocationData', true],
  ['StoryShareParams', true],
  ['EmojiStatusParams', true],
  ['DownloadFileParams', true],
  ['PopupButton', true],
  ['PopupParams', true],
  ['ScanQrPopupParams', true],
]);

WebAppTable!.querySelectorAll('tbody > tr').forEach(tr => {
  const type = tr.children[1].text.trim();

  if (SCALARS.has(type) || type == 'Function') {
    return;
  }

  TYPES.set(type, true);
});

const file = await Deno.create('./src/index.ts');
await file.truncate();

file.writeSync(
  new TextEncoder().encode('export interface Telegram { WebApp: WebApp }\n'),
);

file.writeSync(
  new TextEncoder().encode(
    buildType(
      'WebApp',
      '',
      'https://core.telegram.org/bots/webapps#initializing-mini-apps',
      WebAppTable!,
    ),
  ),
);

// build events
const EventsHeader = nexTable(
  html
    .getElementsByTagName('h4')
    .find(e => e.text === 'Events Available for Mini Apps') || null,
);

const EventsDesciption = EventsHeader?.nextElementSibling?.innerHTML;
const EventsTable = nexTable(EventsHeader);
const eventEnum = [
  `
/**
 * ${md_description(EventsDesciption!)}
 *
 * @see https://core.telegram.org/bots/webapps#events-available-for-mini-apps
 */`,
  'const enum EventType {',
];
const eventCallbacks = ['interface EventCallbacks {'];

EventsTable!.querySelectorAll('tbody > tr').forEach(tr => {
  const eventType = tr.children[0].text.replace(' NEW', '').trim();
  const description = tr.children[1].innerHTML;

  eventEnum.push(`
/**
 * ${md_description(description!)}
 */
${eventType} = '${eventType}',`);

  if (description.includes('receives no parameters')) {
    eventCallbacks.push(`[EventType.${eventType}]: () => void;`);
  } else {
    if (!EventCallbackArgs[eventType]) {
      throw new Error(
        `define callback args for '${eventType}' in EventCallbacks`,
      );
    }

    eventCallbacks.push(
      `[EventType.${eventType}]: (e: ${EventCallbackArgs[eventType]}) => void;`,
    );
  }
});

eventEnum.push('}');
eventCallbacks.push('}');

file.writeSync(new TextEncoder().encode(eventEnum.join('\n')));
file.writeSync(new TextEncoder().encode(eventCallbacks.join('\n')));

// build types
while (TYPES.values().find(e => e === true)) {
  html.querySelectorAll('h4').forEach(el => {
    if (!TYPES.has(el.text) || !TYPES.get(el.text)) {
      return;
    }

    const hash = el.querySelector('a')?.getAttribute('href');
    const docLink = `https://core.telegram.org/bots/webapps${hash}`;
    const description = el.nextElementSibling?.innerHTML;

    file.writeSync(
      new TextEncoder().encode(
        buildType(el.text, description || '', docLink, nexTable(el)!),
      ),
    );

    TYPES.set(el.text, false);
  });
}

function buildField(
  field: string,
  type: string,
  parent: string,
  description: string,
  selfReturn?: boolean,
): string {
  if (SCALARS.has(type)) {
    const optional = description.includes('Optional');
    if (description.includes('#RRGGBB')) {
      type = '`#${string}`';
    }

    return `
/**
 * ${md_description(description)}
 *
 * @type {${SCALARS.get(type)}}
 * @readonly
 */
readonly ${field}${optional ? '?' : ''}: ${SCALARS.get(type)};`;
  }

  if (type.startsWith('Array of')) {
    type = type.replace('Array of', '').trim() + [];
    return `
/**
 * ${md_description(description)}
 *
 * @type {${SCALARS.get(type)}}
 * @readonly
 */
readonly ${field}: ${SCALARS.get(type)};`;
  }

  if (type == 'Function') {
    return buildFunction(field, parent, description, selfReturn);
  }

  if (!TYPES.has(type)) {
    TYPES.set(type, true);
  }

  return `
/**
 * ${md_description(description)}
 *
 * @type {${type}}
 * @readonly
 */
readonly ${field}: ${type};`;
}

function buildFunction(
  field: string,
  parent: string,
  description: string,
  selfReturn?: boolean,
): string {
  const sig = parseFunctionSig(field);

  // full function signature replacement
  if (
    FunctionSigs[parent] &&
    FunctionSigs[parent][sig.name] &&
    FunctionSigs[parent][sig.name].full
  ) {
    return `
/**
 * ${md_description(description)}
 */
${FunctionSigs[parent][sig.name].full}`;
  }

  if (
    sig.args.length > 0 &&
    (!FunctionSigs[parent] || !FunctionSigs[parent][sig.name])
  ) {
    throw new Error(`${parent}.${sig.name}. Define them in FunctionSigs`);
  }

  if (sig.args.length > 0 && !FunctionSigs[parent][sig.name].args) {
    throw new Error(
      `${parent}.${sig.name} has arguments. Define them in FunctionSigs`,
    );
  }

  if (
    sig.args.length > 0 &&
    sig.args.length !== FunctionSigs[parent][sig.name].args.length
  ) {
    throw new Error(
      `Invalid number of argument defenitions in FunctionSigs for ${parent}.${sig.name}`,
    );
  }

  const funcSig = [sig.name, '('];

  sig.args.forEach((a, idx) => {
    if (idx > 0) {
      funcSig.push(', ');
    }

    funcSig.push(a.name);
    if (a.optional) {
      funcSig.push('?');
    }
    funcSig.push(': ');
    funcSig.push(FunctionSigs[parent][sig.name].args[idx]);
  });

  funcSig.push(`): `);
  if (selfReturn) {
    funcSig.push(parent);
  } else if (FunctionSigs[parent][sig.name]) {
    funcSig.push(FunctionSigs[parent][sig.name].return ?? 'void');
  } else {
    funcSig.push('void');
  }
  funcSig.push(`;`);

  return `
/**
 * ${md_description(description)}
 */
${funcSig.join('')}`;
}

function buildType(
  name: string,
  description: string,
  docLink: string,
  table: HTMLElement,
): string {
  const res: string[] = [];

  res.push(`
/**
 * ${md_description(description)}
 *
 * @see ${docLink}
 */`);
  res.push(`export interface ${name} {`);

  let hasSelfReturn = false;

  const p = table.nextElementSibling;
  if (p && p.tagName == 'P' && p.text.includes('so they can be chained')) {
    hasSelfReturn = true;
  }

  table.querySelectorAll('tbody > tr').forEach(tr => {
    const field = tr.children[0].text.replace(' NEW', '').trim();
    const type = tr.children[1].text.trim();
    const description = tr.children[2].innerHTML;

    res.push(buildField(field, type, name, description, hasSelfReturn));
  });

  res.push(`}`);

  return res.join('\n');
}

function md_description(description: string): string {
  return turndownService.turndown(description).replaceAll('\n', '\n * ');
}
