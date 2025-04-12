# Types for Telegram Web Apps (TWA) SDK

## Usage

Install

```sh
npm install twa-sdk-types
```

Declare in `global.d.ts`

```ts
import { Telegram } from 'twa-sdk-types';

declare global {
  interface Window {
    Telegram: Telegram;
  }
}
window.Telegram.WebApp.HapticFeedback.notificationOccurred('success');
```

## Versioning and Updates

Major and minor versions of the package will be synchronized with the SDK.

For example:

- `SDK v9.0` => `twa-sdk-types@9.0.*`

All fixes within a specific SDK version (e.g., `v9.0`) will be published as patch updates.

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
