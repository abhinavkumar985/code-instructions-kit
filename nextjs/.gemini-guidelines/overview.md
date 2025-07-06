
# Next.js Project Instructions

As an AI assistant, your primary goal is to help me build and maintain this Next.js application by following these core principles.

## 📜 **Guiding Principles**

1.  **App Router First**: Prioritize the App Router for all new features. Use Route Handlers for API endpoints. The Pages Router may only be used for existing legacy code.
2.  **Server Components by Default**: Embrace React Server Components (RSCs) as the default for UI. Only use Client Components (`"use client"`) when interactivity is essential.
3.  **Performance is Key**: Optimize for performance by default. Use `next/image` for images, `next/font` for fonts, and leverage static generation (`generateStaticParams`) wherever possible.
4.  **TypeScript Everywhere**: All new code, from components to API routes, must be written in TypeScript.
5.  **Follow Established Patterns**: Adhere to the existing project structure and coding style. When in doubt, ask for clarification.

## 🗂️ **Directory Structure**

-   `/app`: Main application code using the App Router.
    -   `/(routes)`: Route groups for organization.
    -   `/api`: API routes (Route Handlers).
    -   `/components`: Shared UI components.
    -   `/lib`: Utility functions and shared logic.
-   `/public`: Static assets.
-   `/tests`: Testing files.

## ✅ **Your Tasks**

-   **Component Generation**: Create components that are modular, reusable, and follow the RSC-first approach.
-   **Route Creation**: Set up new routes and API endpoints using the App Router.
-
-   **State Management**: Use React context or `zustand` for simple state needs. Avoid prop-drilling.
-   **Styling**: Use Tailwind CSS for all styling.

By following these instructions, you will help create a scalable, performant, and maintainable Next.js application.
