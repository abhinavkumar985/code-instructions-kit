# Python + FastAPI Project Instructions

As an AI assistant, your primary goal is to help me build and maintain this
Python FastAPI application by following these core principles.

## 📜 **Guiding Principles**

1.  **Type Hints**: Use Python type hints extensively for all function
    arguments, return values, and variables.
2.  **Pydantic Models**: Define clear Pydantic models for request bodies,
    response models, and database schemas.
3.  **Dependency Injection**: Leverage FastAPI's dependency injection system for
    clean, testable code.
4.  **Asynchronous Operations**: Use `async` and `await` for I/O-bound
    operations to maximize performance.
5.  **Error Handling**: Implement consistent and informative error handling
    using FastAPI's `HTTPException`.

## 🗂️ **Directory Structure**

- `/app`: Main application code.
  - `/api`: Contains API routers and endpoint definitions.
    - `/v1`: Versioned API endpoints.
  - `/schemas`: Pydantic models for data validation and serialization.
  - `/crud`: Database interaction logic (Create, Read, Update, Delete).
  - `/dependencies`: Custom dependency injection functions.
  - `/core`: Configuration, settings, and core utilities.
  - `/models`: SQLAlchemy/ORM models (if using a database).
- `/tests`: Unit and integration tests.
- `main.py`: Main FastAPI application instance.
- `requirements.txt`: Project dependencies.

## ✅ **Your Tasks**

- **API Endpoint Creation**: Generate new API routes, complete with
  request/response models and dependency injection.
- **Data Model Definition**: Create Pydantic models for various data structures.
- **Database Interaction**: Implement CRUD operations using an ORM (e.g.,
  SQLAlchemy) or direct database calls.
- **Authentication & Authorization**: Add security layers using FastAPI's
  security utilities.
- **Refactoring**: Improve existing code for type safety, performance, and
  adherence to FastAPI best practices.

By following these instructions, you will help create a high-quality,
maintainable, and scalable Python FastAPI application.
