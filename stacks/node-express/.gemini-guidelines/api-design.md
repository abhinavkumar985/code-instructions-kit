# Node.js + Express API Design Guidelines

## ✅ Instructions

1.  **RESTful Principles**: Design APIs following REST principles (resources,
    HTTP methods, statelessness).
2.  **Clear Naming**: Use clear, consistent, and plural nouns for resource
    endpoints (e.g., `/users`, `/products`).
3.  **Versioning**: Implement API versioning (e.g., `/api/v1/users`) to manage
    changes gracefully.
4.  **Status Codes**: Use appropriate HTTP status codes for responses (e.g., 200
    OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Internal Server Error).
5.  **Payloads**: Use JSON for request and response bodies.
6.  **Filtering, Sorting, Pagination**: Support common query parameters for data
    manipulation (e.g., `?limit=10&offset=20`, `?sort=createdAt:desc`).
