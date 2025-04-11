# ts-package-boilerplate

## Setup

Use this repository as a template. 
*Sed* package name 

```
sed -i '' 's/ts-package-boilerplate/am-i-online/' package.json
sed -i '' 's/fullpipe/your-github-username/' package.json
```

Also fix other stuff in `package.json`

That's it. Use it

```
npm i
npm run test
```

## What's inside?

**gts** with some tweaks  
**mocha + chai** for tests  
**build/** dir not ignored by default  
**npm publish** automation   

## Publish

### Login

In order to publish your package, you need to create an NPM account.  
If you don’t have an account run command `npm adduser`
If you already have an account, run `npm login` to login to you NPM account.

### Publish

To publish your package run

```
npm publish
```

### Versioning

To patch

```
npm version patch
npm publish
```

`version` command executes `git add ...` and `git push`, see `package.json`


## Todo

- [ ] add github actions for tests and build?
