# Performance Instructions 🚀

As an AI assistant, you must generate code that is highly performant by default. A fast, responsive user experience is a primary requirement. Follow these instructions when creating or modifying any part of the application.

---

## ✅ **Core Instructions for AI**

1.  **Optimize Asset Loading**:
    *   When adding images, use performant formats like **WebP** or **AVIF** where possible.
    *   For frameworks like Next.js or Gatsby, always use the built-in Image component (e.g., `<Image>`) to get automatic optimization, lazy loading, and responsive `srcset` attributes.
    *   For non-critical scripts or components, use **dynamic imports** (`import()`) to code-split and reduce the initial bundle size.

2.  **Write Efficient Components (React/Vue/Svelte)**:
    *   Avoid expensive calculations or data transformations directly in the render function. Use **memoization** (`useMemo`, `computed` properties) to cache the results.
    *   When passing functions as props to child components, wrap them in `useCallback` (React) to prevent unnecessary re-renders.
    *   Keep components small and focused on a single responsibility.

3.  **Implement Efficient Data Fetching**:
    *   Fetch only the data you need for a given view.
    *   Use libraries like **React Query** or **SWR** to handle caching, revalidation, and de-duplication of requests.
    *   On the server (e.g., in Next.js App Router), fetch data in Server Components to avoid client-side waterfalls.

4.  **Write Performant CSS**:
    *   When using Tailwind CSS, compose styles from existing utilities. Do not create custom CSS that could be achieved with utilities.
    *   Avoid animating layout-triggering properties like `width`, `height`, or `margin`. Animate `transform` and `opacity` instead for smoother, hardware-accelerated animations.

5.  **Handle User Events Efficiently**:
    *   For high-frequency events like `scroll`, `resize`, or `mousemove`, **debounce** or **throttle** the event handlers to prevent performance bottlenecks.

---

## Summary

Performance is not an afterthought; it is a core part of the development process. Your generated code must be optimized to ensure the application is fast, efficient, and provides an excellent user experience.