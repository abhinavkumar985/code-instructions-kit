# Node.js + Express Database Interaction Guidelines

## ✅ Instructions

1.  **ORM/ODM Usage**: Use an Object-Relational Mapper (ORM) like Sequelize (for
    SQL) or an Object-Document Mapper (ODM) like Mongoose (for MongoDB) for
    database interactions.
2.  **Separate Concerns**: Keep database logic (models, queries) separate from
    business logic (services) and route handlers (controllers).
3.  **Connection Management**: Ensure proper database connection management,
    including connection pooling and graceful disconnection.
4.  **Error Handling**: Implement robust error handling for database operations,
    translating database errors into application-specific errors.
5.  **Data Validation**: Perform data validation at the model level before
    saving to the database.
6.  **Transactions**: Use transactions for operations that require atomicity
    across multiple database operations.
