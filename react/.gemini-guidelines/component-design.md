
# Component Design

Follow these principles for designing clean, reusable, and maintainable React components.

## ✅ **Instructions**

1.  **Single Responsibility Principle**: A component should do one thing and do it well. If a component becomes too complex, break it down into smaller components.

2.  **Container vs. Presentational Components**: Separate logic (container) from UI (presentational).
    -   **Container Components**: Manage state and data fetching.
    -   **Presentational Components**: Receive data via props and render UI. They are often pure functions.

3.  **Props Typing**: Use TypeScript interfaces or types to define the props for every component.

    ```typescript
    interface ButtonProps {
      children: React.ReactNode;
      onClick: () => void;
      disabled?: boolean;
    }

    const Button: React.FC<ButtonProps> = ({ children, onClick, disabled }) => {
      // ...
    };
    ```

4.  **Composition over Inheritance**: Use composition to share code between components. Avoid component inheritance.

5.  **Consistent Naming**: Name components clearly and consistently. Use PascalCase for component files and names (e.g., `UserProfile.tsx`).
