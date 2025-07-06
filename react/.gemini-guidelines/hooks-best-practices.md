
# React Hooks Best Practices

Follow these guidelines for using React Hooks effectively.

## ✅ **Instructions**

1.  **Only Call Hooks at the Top Level**: Do not call Hooks inside loops, conditions, or nested functions.

2.  **Only Call Hooks from React Functions**: Call Hooks from React functional components or custom Hooks.

3.  **Custom Hooks for Reusable Logic**: Extract component logic into reusable custom Hooks. Name custom Hooks with the `use` prefix (e.g., `useFetchData`).

    ```typescript
    // hooks/useFetchData.ts
    import { useState, useEffect } from 'react';

    function useFetchData(url: string) {
      const [data, setData] = useState(null);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        // Fetch logic here
      }, [url]);

      return { data, loading };
    }
    ```

4.  **`useEffect` Dependencies**: Be mindful of the dependency array in `useEffect`. Include all values that the effect depends on. An empty array `[]` means the effect runs only once.

5.  **Use `useCallback` and `useMemo` for Optimization**: Use `useCallback` to memoize functions and `useMemo` to memoize values to prevent unnecessary re-renders, but don't overuse them.
