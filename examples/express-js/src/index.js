const { createJsonResponse, errorRequestHandler } = require("@jderstd/express");
const express = require("express");

const app = express();

app.get("/", (_req, res) => {
    createJsonResponse(res);
});

app.use(
    errorRequestHandler({
        verbose: true,
    }),
);

app.listen(3000);
