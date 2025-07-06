
# Vue Composition API

Follow these best practices for using the Vue Composition API.

## ✅ **Instructions**

1.  **Use `<script setup>`**: This is the recommended syntax for using the Composition API. It's more concise and efficient.

2.  **Reactivity with `ref` and `reactive`**:
    -   Use `ref` for primitive values (string, number, boolean).
    -   Use `reactive` for objects.

3.  **Computed Properties**: Use `computed` for derived state.

4.  **Lifecycle Hooks**: Use the `onMounted`, `onUpdated`, `onUnmounted`, etc., hooks for lifecycle events.

5.  **Props and Emits**: Use `defineProps` and `defineEmits` to declare props and events.

    ```vue
    <script setup lang="ts">
    import { ref } from 'vue';

    const props = defineProps<{ 
      initialValue: number;
    }>();

    const emit = defineEmits(['change']);

    const count = ref(props.initialValue);

    function increment() {
      count.value++;
      emit('change', count.value);
    }
    </script>
    ```

6.  **Composables**: Extract reusable logic into composable functions (e.g., `useMouse.ts`).
