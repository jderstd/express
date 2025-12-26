[@jderstd/express](../README.md) / createJsonResponse

# Function: createJsonResponse()

```ts
function createJsonResponse<D>(res, options?): Response<JsonResponse<D>, Record<string, any>>;
```

Defined in: [packages/express/src/response/json/index.ts:106](https://github.com/jderstd/express/blob/50e254af7196cadb4280164f2cdb86c97b55ba12/packages/express/src/response/json/index.ts#L106)

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

`Response`\<[`JsonResponse`](../type-aliases/JsonResponse.md)\<`D`\>, `Record`\<`string`, `any`\>\>
