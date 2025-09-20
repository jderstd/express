[< Back](./../../README.md)

# JDER Express

A response builder for Express.

## Installation

Install this package as a dependency in the project:

> This package requires `express` to be installed.

```sh
# npm
npm i @jderstd/express

# Yarn
yarn add @jderstd/express

# pnpm
pnpm add @jderstd/express

# Deno
deno add npm:@jderstd/express

# Bun
bun add @jderstd/express
```

## Functions

For core response functions,
please refer to the [Core Documentation](https://github.com/jderstd/javascript/blob/main/docs/README.md).

This package extends the response functions by adding the context to the response.

```js
// JavaScript

import { createJsonResponse } from "@jderstd/express";

const route = (req, res) => {
    return createJsonResponse(res);
};
```

```ts
// TypeScript

import type { Request, Response } from "express";

import { createJsonResponse } from "@jderstd/express";

const route = (req: Request, res: Response): Response => {
    return createJsonResponse(res);
};
```

## Error Request Handler Middleware

The `errorRequestHandler` return JSON response when an error occurs.

```js
// JavaScript

import express from "express";
import { errorRequestHandler } from "@jderstd/express";

const app = express();

app.onError(onErrorHandler());
```

```ts
// TypeScript

import type { Express } from "express";

import express from "express";
import { errorRequestHandler } from "@jderstd/express";

const app: Express = express();

app.onError(onErrorHandler());
```
