
# TypeScript Types Best Practices

Follow these best practices for creating and using types in TypeScript.

## ✅ **Instructions**

1.  **`interface` vs. `type`**: 
    -   Use `interface` when defining the shape of an object or a class.
    -   Use `type` for creating aliases for primitive types, unions, tuples, or more complex types.

2.  **Don't Use `any`**: Avoid using the `any` type. If you have data of an unknown type, use the `unknown` type and perform type checking before using it.

3.  **Use Utility Types**: Leverage TypeScript's built-in utility types like `Partial`, `Required`, `Pick`, `Omit`, and `Record` to create new types from existing ones.

    ```typescript
    interface User {
      id: number;
      name: string;
      email: string;
    }

    // A user with only id and name
    type UserPreview = Pick<User, 'id' | 'name'>;
    ```

4.  **Use `const` Assertions**: Use `as const` to create read-only values and prevent type widening.

    ```typescript
    const colors = ['red', 'green', 'blue'] as const;
    // Type of colors is readonly ["red", "green", "blue"]
    ```

5.  **Enums**: Use string enums over numeric enums for better readability and debugging.

    ```typescript
    enum Status {
      Pending = 'PENDING',
      Completed = 'COMPLETED',
      Failed = 'FAILED',
    }
    ```
