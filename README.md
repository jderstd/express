# JDER Express

A response builder for Express.

This package includes different response builders based on the JSON response structure specified in [JSON Data Errors Response (JDER)](https://github.com/jder-std/spec). With the builders, various kinds of responses can be created easily instead of sending plain text responses.

## Quick Start

To create a JSON response, use the following code:

```ts
import type { Request, Response } from "express";

import { createJsonResponse } from "@jderstd/express";

const route = (req: Request, res: Response): Response => {
    return createJsonResponse(res);
}
```

And the response will be shown as below:

```json
{
    "success": true
}
```

## Documentation

For the documentation,
please refer to the [documentation](./docs/express/README.md).

## APIs

For the package APIs, 
please refer to the [APIs](./apis/express/README.md).

## License

This project is licensed under the terms of the MIT license.
