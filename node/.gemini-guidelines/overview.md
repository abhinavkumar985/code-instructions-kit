# Node.js Project Instructions

As an AI assistant, your role is to help build and maintain this Node.js
application by adhering to the following principles.

## 📜 **Guiding Principles**

1.  **Asynchronous by Default**: Use `async/await` for all asynchronous
    operations. Avoid callbacks and raw Promises where possible.
2.  **Modular Structure**: Keep the codebase modular. Separate concerns into
    different files and directories (e.g., `routes`, `controllers`, `services`).
3.  **Error Handling is Crucial**: Implement robust error handling for all API
    routes and services. Use a centralized error-handling middleware.
4.  **Security First**: Follow security best practices to protect against common
    vulnerabilities (e.g., XSS, SQL injection).
5.  **Use Environment Variables**: Store all configuration and secrets in
    environment variables. Never hard-code them.

## 🗂️ **Directory Structure**

- `/src`: Main application code.
  - `/api`: API routes.
  - `/config`: Configuration files.
  - `/controllers`: Route handlers.
  - `/middleware`: Custom middleware.
  - `/models`: Database models.
  - `/services`: Business logic.
  - `/utils`: Utility functions.
- `/tests`: Testing files.

## ✅ **Your Tasks**

- **API Endpoint Creation**: Build RESTful API endpoints that are clean,
  well-structured, and follow the defined patterns.
- **Database Interaction**: Write efficient and secure database queries.
- **Middleware Implementation**: Create middleware for tasks like
  authentication, validation, and logging.
- **Code Refactoring**: Improve existing code by making it more modular,
  performant, and readable.

By following these instructions, you will help create a robust, secure, and
scalable Node.js application.
