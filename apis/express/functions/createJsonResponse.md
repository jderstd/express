[@jderstd/express](../README.md) / createJsonResponse

# Function: createJsonResponse()

```ts
function createJsonResponse<D>(res, options?): Response<any, Record<string, any>>;
```

Defined in: [packages/express/src/response/json/index.ts:105](https://github.com/jderstd/express/blob/dc8e23ecb252a7c584d782d1594902f4da1ae110/packages/express/src/response/json/index.ts#L105)

Create a JSON response with context.

### Examples

Example for creating a successful JSON response without data:

```js
// JavaScript

import { createJsonResponse } from "@jderstd/express";

const route = (req, res) => {
    createJsonResponse(res);
};
```

```ts
// TypeScript

import type { Request, Response } from "express";

import { createJsonResponse } from "@jderstd/express";

const route = (req: Request, res: Response): void => {
    createJsonResponse(res);
};
```

Example for creating a successful JSON response with data:

```js
// JavaScript

import { createJsonResponse } from "@jderstd/express";

const route = (req, res) => {
    return createJsonResponse(res, {
        data: "Hello, World!",
    });
};
```

```ts
// TypeScript

import type { Request, Response } from "express";

import { createJsonResponse } from "@jderstd/express";

const route = (req: Request, res: Response): void => {
    return createJsonResponse(res, {
        data: "Hello, World!",
    });
};
```

Example for creating a failed JSON response:

```js
// JavaScript

import { createJsonResponse } from "@jderstd/express";

const route = (req, res) => {
    return createJsonResponse(res, {
        errors: [
            {
                code: "server",
                message: "Internal server error",
            },
        ],
    });
};
```

```ts
// TypeScript

import type { Request, Response } from "express";

import { createJsonResponse } from "@jderstd/express";

const route = (req: Request, res: Response): void => {
    return createJsonResponse(res, {
        errors: [
            {
                code: "server",
                message: "Internal server error",
            },
        ],
    });
};
```

## Type Parameters

### D

`D` = `unknown`

## Parameters

### res

`Response`

### options?

[`CreateJsonResponseOptions`](../type-aliases/CreateJsonResponseOptions.md)\<`D`\>

## Returns

`Response`\<`any`, `Record`\<`string`, `any`\>\>
