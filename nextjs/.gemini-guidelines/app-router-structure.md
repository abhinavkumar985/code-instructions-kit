# App Router Structure

Follow this structure for organizing files within the `/app` directory.

## 📂 **File Naming and Colocation**

- **`page.tsx`**: The main UI for a route.
- **`layout.tsx`**: The UI shell shared across multiple routes.
- **`loading.tsx`**: A loading indicator for the route.
- **`error.tsx`**: An error boundary for the route.
- **`template.tsx`**: A re-rendering layout on navigation.
- **`route.ts`**: API endpoint (Route Handler).

## Example: Blog Post Route

```text
/app
  /blog
    /[slug]
      page.tsx       // Server Component to fetch and display post
      layout.tsx     // Shared layout for all blog posts
      loading.tsx    // Loading UI while post is fetching
      error.tsx      // Error UI if post fails to load
```

## ✅ **Instructions**

- **Colocate Components**: Place route-specific components, such as a
  `<PostHeader />`, in the same directory as the `page.tsx` file.
- **Use Route Groups**: Group related routes using parentheses `(groupName)` to
  keep the project organized without affecting the URL.
- **Private Folders**: Use an underscore `_folderName` to prevent a folder from
  becoming a route segment. This is useful for storing private components or
  utilities.
