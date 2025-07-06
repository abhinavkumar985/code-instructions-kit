# Vue Composables

Composables are a powerful pattern in the Vue Composition API for extracting and
reusing stateful logic. Use them to keep your components clean and focused.

## ✅ **Instructions**

1.  **Definition**: A composable is a function that leverages Vue's Composition
    API to encapsulate reusable stateful logic.

2.  **Naming Convention**: Name composable files and functions with the `use`
    prefix (e.g., `useMouse.ts`, `useCounter.ts`).

3.  **Location**: Store composables in the `/src/composables` directory.

4.  **Example**: A simple `useCounter` composable:

    ```typescript
    // src/composables/useCounter.ts
    import { ref, computed } from 'vue';

    export function useCounter(initialValue = 0) {
      const count = ref(initialValue);
      const doubled = computed(() => count.value * 2);

      function increment() {
        count.value++;
      }

      function decrement() {
        count.value--;
      }

      return { count, doubled, increment, decrement };
    }
    ```

5.  **Usage in Component**:

    ```vue
    <script setup lang="ts">
    import { useCounter } from '@/composables/useCounter';

    const { count, doubled, increment, decrement } = useCounter(10);
    </script>

    <template>
      <div>
        <p>Count: {{ count }}</p>
        <p>Doubled: {{ doubled }}</p>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
      </div>
    </template>
    ```

6.  **Purpose**: Use composables to abstract away complex logic, making
    components more readable and testable. They are ideal for features like form
    handling, API calls, or managing global state.
