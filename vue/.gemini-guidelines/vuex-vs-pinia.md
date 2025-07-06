
# State Management: Vuex vs. Pinia

This project uses Pinia for state management. Here's why and how to use it.

## 🍍 **Why Pinia?**

-   **Simpler API**: Pinia has a much simpler and more intuitive API than Vuex.
-   **Type-Safe**: Pinia is fully type-safe, which works great with TypeScript.
-   **Modular**: Stores are modular by default.
-   **Lighter**: Pinia is significantly lighter than Vuex.

## ✅ **Instructions**

1.  **Define a Store**: Create a new file in the `/src/store` directory to define a store.

    ```typescript
    // /src/store/user.ts
    import { defineStore } from 'pinia';

    export const useUserStore = defineStore('user', {
      state: () => ({
        name: 'John Doe',
        email: 'john.doe@example.com',
      }),
      getters: {
        firstName: (state) => state.name.split(' ')[0],
      },
      actions: {
        setName(newName: string) {
          this.name = newName;
        },
      },
    });
    ```

2.  **Use the Store in a Component**:

    ```vue
    <script setup lang="ts">
    import { useUserStore } from '@/store/user';

    const userStore = useUserStore();
    </script>

    <template>
      <div>
        <p>Name: {{ userStore.name }}</p>
        <button @click="userStore.setName('Jane Doe')">Change Name</button>
      </div>
    </template>
    ```
