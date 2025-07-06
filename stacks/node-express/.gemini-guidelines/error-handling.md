# Node.js + Express Error Handling Guidelines

## ✅ Instructions

1.  **Centralized Error Middleware**: Implement a single, centralized error-handling middleware at the end of the Express middleware chain.
2.  **Custom Error Classes**: Define custom error classes for specific application errors (e.g., `NotFoundError`, `ValidationError`) to provide more context.
3.  **Consistent Error Responses**: Return consistent JSON error responses that include a clear message, a unique error code (if applicable), and relevant details.
4.  **Logging**: Log detailed error information (stack traces, request details) to a logging service, but avoid exposing sensitive information to the client.
5.  **Asynchronous Error Handling**: Ensure all asynchronous operations (Promises, `async/await`) are properly caught to prevent unhandled promise rejections from crashing the application.
