// util.js
// Error Handler
class ErrorHandler extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
        console.error(this.stack);
    }
}

export default ErrorHandler;