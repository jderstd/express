[@jderstd/express](../README.md) / errorRequestHandler

# Function: errorRequestHandler()

```ts
function errorRequestHandler(options?): ErrorRequestHandler;
```

Defined in: [packages/express/src/middlewares/error.ts:86](https://github.com/jderstd/express/blob/952851c3a78271c3a9f672e3b1c957e81ef217cb/packages/express/src/middlewares/error.ts#L86)

Error request handler.

Following response could be returned on error:

```jsonc
// Status: 500
{
    "success": false,
    "errors": [
        {
            "code": "server"
        }
    ]
}
```

### Examples

Basic example of using `errorRequestHandler` handler:

```js
// JavaScript

import express from "express";
import { errorRequestHandler } from "@jderstd/express";

const app = express();

app.use(errorRequestHandler());
```

```ts
// TypeScript

import type { Express } from "express";

import express from "express";
import { errorRequestHandler } from "@jderstd/express";

const app: Express = express();

app.use(errorRequestHandler());
```

Show more information with `verbose` option:

```js
// JavaScript

import express from "express";
import { errorRequestHandler } from "@jderstd/express";

const app = express();

app.use(errorRequestHandler({ verbose: true }));
```

```ts
// TypeScript

import type { Express } from "express";

import express from "express";
import { errorRequestHandler } from "@jderstd/express";

const app: Express = express();

app.use(errorRequestHandler({ verbose: true }));
```

## Parameters

### options?

[`ErrorRequestHandlerOptions`](../type-aliases/ErrorRequestHandlerOptions.md)

## Returns

`ErrorRequestHandler`
