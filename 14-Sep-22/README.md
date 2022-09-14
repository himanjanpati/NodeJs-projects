### Chalk module Error
    ```
    chalk - Error [ERR_REQUIRE_ESM]: require not supported
    ```

The chalk error "[ERR_REQUIRE_ESM]: require() not supported" occurs because the chalk package has been converted to be an ESM only package in version 5, which means that the package cannot be imported with require() anymore.

[Error details](https://bobbyhadz.com/blog/javascript-chalk-error-err-require-esm-of-es-module)

### ESM syntax change starting from Node14

[Link here](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c#how-can-i-move-my-commonjs-project-to-esm)

### How can I move my CommonJS project to ESM?

- Add `"type": "module"` to your package.json.
- Replace `"main": "index.js"` with `"exports": "./index.js"` in your package.json.
- Update the `"engines"` field in package.json to Node.js 14: `"node": ">=14.16"`. (Excluding Node.js 12 as it's no longer supported)
- Remove `'use strict';` from all JavaScript files.
- Replace all `require()`/`module.export` with `import`/`export`.
- Use only full relative file paths for imports: `import x from '.';` → `import x from './index.js';`.
- If you have a TypeScript type definition (for example, `index.d.ts`), update it to use ESM imports/exports.
- Optional but recommended, use the [`node:` protocol](https://nodejs.org/api/esm.html#esm_node_imports) for imports.