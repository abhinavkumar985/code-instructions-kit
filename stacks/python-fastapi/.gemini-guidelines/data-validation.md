# Python + FastAPI Data Validation Guidelines

## ✅ Instructions

1.  **Pydantic Models**: Use Pydantic `BaseModel` for all data validation,
    serialization, and deserialization.
2.  **Type Hints**: Leverage Python type hints within Pydantic models for clear
    and concise schema definitions.
3.  **Field Validation**: Use Pydantic's `Field` function for advanced
    validation rules (e.g., `min_length`, `max_length`, `ge`, `le`, `regex`).
4.  **Optional Fields**: Clearly mark optional fields using `Optional` from
    `typing` or `Union[Type, None]`.
5.  **Nested Models**: Use nested Pydantic models for complex data structures.
6.  **Error Handling**: Rely on FastAPI's automatic validation error handling,
    which returns detailed error messages for invalid data.
