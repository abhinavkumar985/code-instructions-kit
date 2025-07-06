
# Asynchronous Programming

Follow these best practices for writing clean and efficient asynchronous code.

## ✅ **Instructions**

1.  **Use `async/await`**: Always prefer `async/await` over callbacks or `.then()` chains for better readability and error handling.

    ```javascript
    // Good
    async function fetchData() {
      try {
        const data = await someAsyncOperation();
        return data;
      } catch (error) {
        console.error(error);
      }
    }

    // Bad
    function fetchData() {
      someAsyncOperation()
        .then(data => {
          return data;
        })
        .catch(error => {
          console.error(error);
        });
    }
    ```

2.  **Parallel Execution**: When you need to run multiple asynchronous operations concurrently, use `Promise.all`.

    ```javascript
    async function getParallelData() {
      const [users, products] = await Promise.all([
        fetch('/api/users'),
        fetch('/api/products'),
      ]);
      // ...
    }
    ```

3.  **Avoid Mixing Styles**: Do not mix `async/await` with `.then()` in the same function. Be consistent.
