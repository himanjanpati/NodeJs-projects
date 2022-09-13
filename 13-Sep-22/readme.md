two types of modules
    1- global modules (core modules)
    2- non-global modules

We should import only the required module rather importing the whole set of the global module
```
const fs = require('fs') // will import all filesystem module

const fs = require('fs').writeFileSync // only imports writeFileSync
```
