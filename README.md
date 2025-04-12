# ts-package-boilerplate

## Usage

Install

```sh
npm install @telegram-webapps/types
```

Declare in `global.d.ts`

```ts
import { Telegram } from '@telegram-webapps/types';

declare global {
  interface Window {
    Telegram: Telegram;
  }
}
window.Telegram.WebApp.HapticFeedback.notificationOccurred('success');
```

## Versioning and updates

Major and minor versions of a package will be sync with SDK.

`SDK v9.0` => `@telegram-webapps/types@9.0.*`

So all fixes within SDK v9.0 would be published as patches.

## Update and generate

rebuild types

```sh
deno --allow-env --allow-read --allow-net --allow-write scrape/main.ts
```

Build

```sh
npm run build
```

Publish or patch

```sh
npm publish
npm version patch
```

## Todo

- [ ] Update and generate with github cron actions
