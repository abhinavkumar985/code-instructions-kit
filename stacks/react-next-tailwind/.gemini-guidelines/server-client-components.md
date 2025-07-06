# Server Components vs. Client Components

Understanding the distinction between Server Components (RSCs) and Client
Components is crucial for building performant Next.js applications.

## ✅ **Instructions**

1.  **Default to Server Components**: All new components should be Server
    Components by default. They run on the server, have zero bundle size, and
    can directly access server resources (e.g., databases, file system).

    ```typescript
    // app/page.tsx (Server Component by default)
    import { getUserData } from '../lib/server-utils';

    export default async function HomePage() {
      const user = await getUserData();
      return (
        <div>
          <h1>Welcome, {user.name}</h1>
          <ClientButton /> {/* This is a Client Component */}
        </div>
      );
    }
    ```

2.  **Use `"use client"` for Interactivity**: Only mark a component with
    `"use client"` at the top of the file if it needs:
    - React Hooks (`useState`, `useEffect`, etc.)
    - Browser APIs (e.g., `window`, `localStorage`)
    - Event listeners (e.g., `onClick`)

    ```typescript
    // components/ClientButton.tsx
    'use client';

    import { useState } from 'react';

    export default function ClientButton() {
      const [count, setCount] = useState(0);
      return (
        <button onClick={() => setCount(count + 1)}>
          Clicked {count} times
        </button>
      );
    }
    ```

3.  **Pass Data from Server to Client**: Server Components can pass serializable
    data to Client Components as props.

4.  **Colocation**: You can colocate Server and Client Components in the same
    directory. Next.js will automatically determine their rendering environment
    based on the `"use client"` directive.
