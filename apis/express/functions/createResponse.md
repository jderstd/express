[@jderstd/express](../README.md) / createResponse

# Function: createResponse()

```ts
function createResponse<B>(res, options?): Response<any, Record<string, any>>;
```

Defined in: [packages/express/src/response/common/index.ts:75](https://github.com/jderstd/express/blob/952851c3a78271c3a9f672e3b1c957e81ef217cb/packages/express/src/response/common/index.ts#L75)

Create a response.

### Examples

Example for creating a basic response:

```js
// JavaScript

import { createResponse } from "@jderstd/express";

const route = (req, res) => {
    createResponse(res);
};
```

```ts
// TypeScript

import type { Request, Response } from "express";

import { createResponse } from "@jderstd/express";

const route = (req: Request, res: Response): void => {
    createResponse(res);
};
```

Example for creating a response with status, headers, and body:

```js
// JavaScript

import { createResponse } from "@jderstd/express";

const route = (req, res) => {
    createResponse(res, {
        status: 404,
        headers: [
            ["Content-Type", "text/plain"],
        ],
        body: "Not Found",
    });
};
```

```ts
// TypeScript

import type { Request, Response } from "express";

import { createResponse } from "@jderstd/express";

const route = (req: Request, res: Response): void => {
    createResponse(res, {
        status: 404,
        headers: [
            ["Content-Type", "text/plain"],
        ],
        body: "Not Found",
    });
};
```

## Type Parameters

### B

`B` *extends* `BodyInit`

## Parameters

### res

`Response`

### options?

[`CreateResponseOptions`](../type-aliases/CreateResponseOptions.md)\<`B`\>

## Returns

`Response`\<`any`, `Record`\<`string`, `any`\>\>
