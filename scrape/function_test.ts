import { assertEquals } from '@std/assert';
import { parseFunctionSig } from './function.ts';

Deno.test(function addTest() {
  assertEquals(
    parseFunctionSig('switchInlineQuery(query[, choose_chat_types, asd])'),
    {
      name: 'switchInlineQuery',
      args: [
        { name: 'query', optional: false },
        { name: 'choose_chat_types', optional: true },
        { name: 'asd', optional: true },
      ],
    },
  );
  assertEquals(parseFunctionSig('onEvent(eventType, eventHandler)'), {
    name: 'onEvent',
    args: [
      { name: 'eventType', optional: false },
      { name: 'eventHandler', optional: false },
    ],
  });
  assertEquals(parseFunctionSig('updateBiometricToken(token, [callback])'), {
    name: 'updateBiometricToken',
    args: [
      { name: 'token', optional: false },
      { name: 'callback', optional: true },
    ],
  });
  assertEquals(parseFunctionSig('closeScanQrPopup()'), {
    name: 'closeScanQrPopup',
    args: [],
  });
});
