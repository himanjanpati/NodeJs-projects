### Chalk module Error
    ```
    chalk - Error [ERR_REQUIRE_ESM]: require not supported
    ```

The chalk error "[ERR_REQUIRE_ESM]: require() not supported" occurs because the chalk package has been converted to be an ESM only package in version 5, which means that the package cannot be imported with require() anymore.

[Error details](https://bobbyhadz.com/blog/javascript-chalk-error-err-require-esm-of-es-module)