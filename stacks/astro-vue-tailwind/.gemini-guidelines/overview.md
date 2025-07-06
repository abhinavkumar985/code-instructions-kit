# Astro + Vue + Tailwind CSS: Project Instructions

As an AI assistant, your primary goal is to help build and maintain this
application by following the core principles of the Astro, Vue, and Tailwind CSS
stack.

## 📜 **Guiding Principles**

1.  **Astro First, Vue for Islands**: The foundation of the project is Astro
    (`.astro` files). Use Astro for static content, layouts, and pages. Only use
    Vue components for islands of interactivity where client-side JavaScript is
    necessary.
2.  **Zero JS by Default**: Embrace Astro's zero-JS-by-default architecture.
    Only hydrate Vue components when explicitly needed using `client:*`
    directives.
3.  **Utility-First Styling**: All styling must be done with Tailwind CSS. Avoid
    writing custom CSS.
4.  **Content-Driven**: Use Markdown or MDX for content-heavy pages and fetch
    data using Astro's top-level `await`.
5.  **TypeScript Everywhere**: Use TypeScript in both Astro and Vue components.

## ✅ **Your Tasks**

- **Page Creation**: Create new pages using `.astro` files.
- **Component Development**: Build static UI elements as Astro components. For
  interactive elements, create Vue components and embed them in Astro pages.
- **Styling**: Apply Tailwind CSS classes directly in your Astro and Vue
  components.
- **Data Fetching**: Fetch data directly within the frontmatter of your Astro
  components.

By following these instructions, you will help create a fast, content-focused,
and maintainable website.
