# Island Architecture & Client Directives

Understanding Astro's island architecture is critical for performance. Most of
the site should be static HTML, with islands of interactivity powered by Vue.

## ✅ **Instructions**

1.  **Default to Static**: Assume components are static. Do not add a `client:*`
    directive unless you need client-side JavaScript.

2.  **Choose the Right Directive**: When you do need to hydrate a Vue component,
    choose the most efficient directive:
    - `client:load`: Hydrates the component immediately on page load. Use this
      only for components that are immediately visible and interactive (e.g., a
      header with a search bar).
    - `client:idle`: Hydrates the component as soon as the main thread is free.
      Use this for lower-priority components.
    - `client:visible`: Hydrates the component when it enters the viewport. This
      is the best option for most components below the fold.
    - `client:media`: Hydrates the component based on a media query.
    - `client:only`: Skips server-side rendering and renders only on the client.
      Use this if the component relies on browser-specific APIs.

3.  **Example**:

    ```astro
    ---
    import MyInteractiveComponent from '../components/MyInteractiveComponent.vue';
    ---

    <!-- This component will only load and hydrate when it becomes visible -->
    <MyInteractiveComponent client:visible />
    ```

4.  **Passing Props**: You can pass props from Astro to Vue components, but they
    must be serializable.
