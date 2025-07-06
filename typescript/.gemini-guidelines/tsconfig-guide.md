
# tsconfig.json Guide

Follow these guidelines for configuring the `tsconfig.json` file.

## ✅ **Instructions**

1.  **Enable `strict` Mode**: The `strict` option should always be set to `true`. This enables a wide range of type-checking behavior that results in more robust programs.

    ```json
    {
      "compilerOptions": {
        "strict": true
      }
    }
    ```

2.  **`noImplicitAny`**: This is part of `strict` mode, but it's worth calling out. Do not allow implicit `any` types. Always be explicit if you need to use `any` (which should be rare).

3.  **`esModuleInterop`**: Set `esModuleInterop` to `true` to allow for better interoperability between CommonJS and ES modules.

4.  **`target` and `module`**: Choose the appropriate `target` (e.g., `ES2020`) and `module` (e.g., `ESNext`) settings for your project's environment.

5.  **`paths` for Aliases**: Use the `paths` option to create aliases for your project's directories. This makes imports cleaner.

    ```json
    {
      "compilerOptions": {
        "baseUrl": ".",
        "paths": {
          "@/*": ["src/*"]
        }
      }
    }
    ```
