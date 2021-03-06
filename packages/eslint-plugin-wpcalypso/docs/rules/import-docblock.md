# Enforce external, internal, WordPress dependencies docblocks

When importing modules, you should distinguish external dependencies from internal or WordPress dependencies using DocBlock multi-line comments. Because Calypso modifies the `NODE_PATH` to allow importing modules directly from the root `client/` directory, it can be otherwise unclear whether an imported module is an internal, external, or WordPress dependency.

## Rule Details

The following patterns are considered warnings:

```js
import React from 'react';
```

The following patterns are not warnings:

```js
/**
 * External dependencies
 */
import React from 'react';
```
