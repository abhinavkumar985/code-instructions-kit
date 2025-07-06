# Code Style Instructions 🧹

As an AI assistant, you must adhere to the following code style guidelines to ensure consistency, readability, and maintainability across the entire project. These rules are not optional.

---

## ✅ **Core Instructions for AI**

1.  **Formatting (Handled by Prettier)**:
    *   You don't need to worry about most formatting rules, as **Prettier** will handle them automatically. However, your generated code should be clean and readable before formatting.
    *   **Key Rules**: 2-space indentation, trailing commas, and semicolons at the end of statements.

2.  **Naming Conventions**:
    *   **Variables & Functions**: `camelCase`
    *   **Components & Classes**: `PascalCase` (e.g., `UserProfile`, `class DataProcessor`)
    *   **Files**: `kebab-case` for general files (`api-helpers.ts`), `PascalCase` for component files (`UserProfile.tsx`).
    *   **Constants**: `UPPER_SNAKE_CASE` for static, unchanging values (e.g., `const API_KEY = '...'`).

3.  **JavaScript / TypeScript Best Practices**:
    *   **Always** use `const` by default. Only use `let` if a variable must be reassigned.
    *   **Never** use `var`.
    *   **Always** use arrow functions (`=>`) for callbacks and anonymous functions.
    *   In TypeScript, provide explicit types for function parameters and return values unless the inferred type is trivial and obvious.
    *   Utilize modern JavaScript features: destructuring, optional chaining (`?.`), and nullish coalescing (`??`).

4.  **Styling (CSS)**:
    *   **Prioritize utility-first classes** (Tailwind CSS) for all styling.
    *   **Avoid inline styles** (`style="..."`) unless the style is dynamic and cannot be achieved with classes.
    *   **Do not write custom CSS files** unless absolutely necessary for a complex, non-reusable component. If you must, keep selectors simple.

5.  **Comments**:
    *   Do not add comments that explain *what* the code is doing. The code should be self-explanatory.
    *   Only add comments to explain *why* a piece of complex or non-obvious logic exists.
    *   **Never** leave commented-out code in your final output.

---

## Summary

Following these rules is mandatory. Your adherence to this style guide ensures the project remains clean and easy for human developers to maintain.
