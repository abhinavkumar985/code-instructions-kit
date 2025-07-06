
# Testing Strategy

Follow this testing strategy to ensure the application is reliable and bug-free.

## 🧪 **Tools**

-   **Jest**: For unit testing.
-   **React Testing Library**: For testing components.
-   **Cypress**: For end-to-end testing.

## ✅ **Instructions**

1.  **Unit Tests**: Write unit tests for individual functions and utilities in the `/lib` directory. Keep them short, focused, and fast.

2.  **Component Tests**: Test React components in isolation. Use React Testing Library to simulate user interactions and verify the component's behavior.

    ```typescript
    // /components/Button.test.tsx
    import { render, screen } from '@testing-library/react';
    import Button from './Button';

    it('should render a button with the correct text', () => {
      render(<Button>Click Me</Button>);
      expect(screen.getByRole('button', { name: /Click Me/i })).toBeInTheDocument();
    });
    ```

3.  **End-to-End (E2E) Tests**: Use Cypress to test critical user flows from start to finish. For example, a full sign-up or checkout process.

    ```javascript
    // /cypress/e2e/auth.cy.js
    it('should allow a user to sign up', () => {
      cy.visit('/signup');
      cy.get('input[name="email"]').type('test@example.com');
      cy.get('input[name="password"]').type('password123');
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/dashboard');
    });
    ```

4.  **Test Coverage**: Aim for a reasonable level of test coverage, but prioritize testing critical paths and complex logic over simple, static components.
