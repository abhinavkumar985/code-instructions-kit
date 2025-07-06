
# Svelte Component Structure

Follow this structure for creating well-organized and maintainable Svelte components.

## ✅ **Instructions**

1.  **Single-File Components**: Each component should be in its own `.svelte` file.

2.  **Order of Blocks**: Use the following order inside your `.svelte` files:
    1.  `<script lang="ts">`
    2.  `<style>`
    3.  Markup (HTML)

3.  **Props**: Define component props using the `export let` syntax.

    ```svelte
    <script lang="ts">
      export let name: string;
      export let disabled: boolean = false;
    </script>
    ```

4.  **Scoped Styles**: Styles are scoped to the component by default. Write your CSS directly in the `<style>` block.

5.  **Events**: Dispatch events using `createEventDispatcher`.

    ```svelte
    <script lang="ts">
      import { createEventDispatcher } from 'svelte';

      const dispatch = createEventDispatcher();

      function handleClick() {
        dispatch('click');
      }
    </script>

    <button on:click={handleClick}>Click Me</button>
    ```
