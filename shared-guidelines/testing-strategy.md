# Testing Instructions 🧪

As an AI assistant, you are required to write effective tests for the code you generate. A well-tested codebase is reliable and easy to maintain. Follow these instructions whenever you are asked to create or modify tests.

---

## ✅ **Core Instructions for AI**

1.  **Testing Philosophy: Test User Behavior, Not Implementation Details**:
    *   Your primary goal is to write tests that simulate how a user interacts with the application.
    *   **Do not** test internal component state or private methods.
    *   **Do** test that the correct UI is displayed, that buttons can be clicked, and that data is handled as the user would expect.

2.  **What to Test**:
    *   **Unit Tests**: Write unit tests for pure business logic, utility functions, and complex algorithms. These should be fast and have no external dependencies.
    *   **Component/Integration Tests**: This is your main focus. For a UI component, you must test:
        *   It renders correctly with different props.
        *   It handles user interactions (e.g., clicks, input changes) correctly.
        *   It is fully accessible (use `jest-axe` to verify).
    *   **E2E Tests**: For critical user flows (e.g., login, checkout), write E2E tests using Cypress or Playwright that simulate a complete user journey.

3.  **How to Write Tests**:
    *   Use the testing libraries established in the project (e.g., **Jest** with **React Testing Library** or **Vue Test Utils**).
    *   Query the DOM as a user would: use accessible queries like `getByRole`, `getByLabelText`, or `getByText`.
    *   Mock all external dependencies, especially API calls. Use **Mock Service Worker (MSW)** to intercept network requests and provide consistent mock data.
    *   Write clear, descriptive test names using the `it should...` format (e.g., `it should render a disabled button when isLoading is true`).

4.  **Accessibility Testing**:
    *   For every component test, you **must** include an accessibility check using `jest-axe`.

    ```typescript
    import { render } from '@testing-library/react';
    import { axe } from 'jest-axe';
    import MyComponent from './MyComponent';

    it('should have no accessibility violations', async () => {
      const { container } = render(<MyComponent />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
    ```

---

## Summary

Writing good tests is as important as writing the feature code itself. Your tests must be meaningful, robust, and focused on providing confidence that the application works for our users.
