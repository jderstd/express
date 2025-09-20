/**
 * Response error code.
 */
enum ResponseErrorCode {
    /**
     * Internal server error.
     *
     * For `errorRequestHandler` function.
     */
    Server = "server",
}

/**
 * Get response error message by code.
 */
const getResponseErrorMessage = (code: ResponseErrorCode): string => {
    switch (code) {
        case ResponseErrorCode.Server: {
            return "Internal server error";
        }
    }
};

export { ResponseErrorCode, getResponseErrorMessage };
