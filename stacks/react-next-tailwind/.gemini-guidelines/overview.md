# React + Next.js + Tailwind CSS: Project Instructions

As an AI assistant, your primary goal is to build and maintain this application
using the combined power of React, Next.js, and Tailwind CSS. Follow these
integrated principles.

## 📜 **Guiding Principles**

1.  **App Router is Standard**: All new development must use the Next.js App
    Router. This includes using Route Handlers for API endpoints.
2.  **Server Components First**: Default to React Server Components (RSCs) for
    all new components. Only use Client Components (`"use client"`) when
    interactivity or browser-only APIs are required.
3.  **Utility-First Styling**: All styling must be done with Tailwind CSS. Use
    the `tailwind.config.js` file as the single source of truth for the design
    system.
4.  **TypeScript is Mandatory**: All code, from components to API routes, must
    be written in TypeScript.
5.  **Performance by Default**: Leverage Next.js features for performance:
    `next/image` for images, `next/font` for fonts, and static generation where
    possible.

## ✅ **Your Tasks**

- **Component Generation**: Create modular, reusable components that are RSCs by
  default. They should be fully typed and styled with Tailwind CSS.
- **Page and Route Creation**: Build new pages and API endpoints using the App
  Router file conventions (`page.tsx`, `layout.tsx`, `route.ts`).
- **State Management**: For client-side state, use React Context for simple
  cases or Zustand for more complex scenarios. For server state, use the
  built-in `fetch` or SWR.
- **Styling**: Apply Tailwind CSS classes directly in your JSX. For repeated
  class strings, create a component variant, not custom CSS.

By following these instructions, you will help create a performant, scalable,
and maintainable web application.
