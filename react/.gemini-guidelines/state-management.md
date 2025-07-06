
# State Management

Choose the right state management tool for the job.

## ✅ **Instructions**

1.  **Local State (`useState`)**: For state that is local to a single component, always use the `useState` Hook.

2.  **Shared State (`React Context`)**: For state that needs to be shared between a few components, use React Context with the `useContext` Hook. This is suitable for simple to moderately complex state.

    ```typescript
    // context/AuthContext.tsx
    import { createContext, useContext, useState } from 'react';

    const AuthContext = createContext(null);

    export const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      // ...
      return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
    };

    export const useAuth = () => useContext(AuthContext);
    ```

3.  **Complex Global State (`Zustand` or `Redux Toolkit`)**: For complex, application-wide state, use a dedicated state management library.
    -   **Zustand**: A lightweight, simple, and unopinionated choice.
    -   **Redux Toolkit**: A more structured and powerful option for large-scale applications.

4.  **Server State (`React Query` or `SWR`)**: For managing server state (data fetching, caching, etc.), use a library like React Query or SWR. Do not store server state in your global client-side store.
