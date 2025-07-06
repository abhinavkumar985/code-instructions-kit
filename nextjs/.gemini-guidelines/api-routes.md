
# API Routes (Route Handlers)

Use Route Handlers for creating API endpoints within the App Router.

## ✅ **Instructions**

1.  **File Location**: Create a `route.ts` file inside the desired API path (e.g., `/app/api/users/route.ts`).
2.  **HTTP Methods**: Export named functions for each HTTP method (`GET`, `POST`, `PUT`, `DELETE`).

    ```typescript
    // /app/api/users/route.ts
    import { NextResponse } from 'next/server';

    export async function GET(request: Request) {
      // Handle GET request
      return NextResponse.json({ message: 'Hello from GET' });
    }

    export async function POST(request: Request) {
      // Handle POST request
      const data = await request.json();
      return NextResponse.json({ received: data });
    }
    ```

3.  **Dynamic Routes**: Use square brackets `[folderName]` to create dynamic API routes.

    ```
    /app/api/users/[id]/route.ts
    ```

4.  **Error Handling**: Wrap your logic in `try...catch` blocks to handle potential errors and return appropriate error responses.

    ```typescript
    export async function GET(request: Request) {
      try {
        // Your logic here
        return NextResponse.json({ success: true });
      } catch (error) {
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
      }
    }
    ```
