# Python + FastAPI Dependency Injection Guidelines

## ✅ Instructions

1.  **`Depends` Function**: Use FastAPI's `Depends` function to declare
    dependencies for path operations, dependencies, and sub-dependencies.
2.  **Single Responsibility**: Design dependencies to have a single
    responsibility (e.g., `get_db_session`, `get_current_user`).
3.  **Yield Dependencies**: For dependencies that require cleanup (e.g.,
    database sessions), use `yield` in an `async` generator function.
4.  **Global vs. Local**: Prefer local dependencies for specific routes; use
    global dependencies for application-wide concerns (e.g., database
    connection).
5.  **Testability**: Ensure dependencies are easily mockable for unit and
    integration testing.
