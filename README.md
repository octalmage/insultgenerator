# insultgenerator [![](https://img.shields.io/npm/v/insultgenerator.svg)](https://www.npmjs.com/package/insultgenerator)
> Node.js module that pulls random insults from [insultgenerator.org](http://insultgenerator.org).

WARNING: These insults are NSFW and very offensive.

## Installation

    npm install insultgenerator

## Usage

This module exports a single function that accepts a callback.

```
var insultgenerator = require('insultgenerator');

insultgenerator(function(insult)
{
        console.log(insult);
})
```

## License

MIT
