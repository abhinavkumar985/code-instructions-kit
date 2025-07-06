
# Svelte Reactivity Guide

Leverage Svelte's reactivity system for clean and efficient state management.

## ✅ **Instructions**

1.  **Reactive Assignments**: Svelte's reactivity is triggered by assignments. To update the DOM, you must assign a new value to a variable.

    ```svelte
    <script>
      let count = 0;

      function increment() {
        count += 1; // This assignment triggers a re-render
      }
    </script>
    ```

2.  **Reactive Statements (`$:`)**: Use the `$: ` prefix for reactive statements that depend on other reactive values. They will re-run whenever the referenced values change.

    ```svelte
    <script>
      let count = 0;
      $: doubled = count * 2;
    </script>

    <p>{count} * 2 = {doubled}</p>
    ```

3.  **Updating Arrays and Objects**: To trigger reactivity for arrays and objects, you must assign a new value. Mutating methods like `.push()` will not work on their own.

    ```svelte
    <script>
      let numbers = [1, 2, 3];

      function addNumber() {
        // Good: triggers reactivity
        numbers = [...numbers, numbers.length + 1];

        // Bad: does not trigger reactivity
        // numbers.push(numbers.length + 1);
      }
    </script>
    ```

4.  **Stores for Shared State**: For state that needs to be shared between components, use Svelte stores (`writable`, `readable`, `derived`).
