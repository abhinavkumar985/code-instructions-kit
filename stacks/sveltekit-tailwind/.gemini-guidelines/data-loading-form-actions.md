# SvelteKit Data Loading & Form Actions

SvelteKit provides powerful mechanisms for data loading and form handling. Use
these features to build robust and efficient applications.

## ✅ **Instructions**

1.  **Data Loading (`+page.ts` or `+page.server.ts`)**:
    - Use a `load` function in a `+page.ts` file for data that can be fetched on
      both the client and server.
    - Use a `load` function in a `+page.server.ts` file for data that _must_ be
      fetched on the server (e.g., database access, API keys).

    ```typescript
    // src/routes/blog/[slug]/+page.server.ts
    import type { PageServerLoad } from './$types';

    export const load: PageServerLoad = async ({ params }) => {
      const post = await db.posts.findUnique({ where: { slug: params.slug } });
      return { post };
    };
    ```

2.  **Form Actions (`+page.server.ts`)**:
    - Use form actions for handling form submissions. They run on the server and
      provide a secure way to handle data.
    - Define actions in a `+page.server.ts` file.

    ```typescript
    // src/routes/contact/+page.server.ts
    import type { Actions } from './$types';

    export const actions: Actions = {
      default: async ({ request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const message = data.get('message');

        // Process form data (e.g., save to DB, send email)
        console.log({ email, message });

        return { success: true };
      },
    };
    ```

3.  **Progressive Enhancement**: SvelteKit's form actions provide progressive
    enhancement out of the box. Forms will work even if JavaScript is disabled.
