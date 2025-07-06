# Python + FastAPI API Design Guidelines

## ✅ Instructions

1.  **RESTful Principles**: Design APIs following REST principles (resources,
    HTTP methods, statelessness).
2.  **Clear Naming**: Use clear, consistent, and plural nouns for resource
    endpoints (e.g., `/users`, `/products`).
3.  **Path Operations**: Define API endpoints using FastAPI's path operation
    decorators (`@app.get`, `@app.post`, etc.).
4.  **Status Codes**: Use appropriate HTTP status codes for responses (e.g.,
    `status_code=201` for creation).
5.  **Response Models**: Define explicit `response_model` using Pydantic for all
    API endpoints to ensure consistent output and automatic documentation.
6.  **Payloads**: Use Pydantic models for request bodies, ensuring automatic
    data validation and serialization.
7.  **Versioning**: Implement API versioning (e.g., `/api/v1/users`) using
    FastAPI's APIRouter prefix.
