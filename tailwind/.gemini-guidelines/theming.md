# Theming with Tailwind CSS

Follow these guidelines for theming your application using the
`tailwind.config.js` file.

## ✅ **Instructions**

1.  **Centralized Configuration**: All design tokens (colors, spacing, fonts,
    etc.) should be defined in the `theme` object of your `tailwind.config.js`
    file.

2.  **Extending the Default Theme**: Use the `extend` key to add new values to
    the default theme without overriding the existing ones.

    ```javascript
    // tailwind.config.js
    module.exports = {
      theme: {
        extend: {
          colors: {
            primary: '#FF6347',
            secondary: '#4682B4',
          },
          spacing: {
            128: '32rem',
          },
        },
      },
    };
    ```

3.  **Using Theme Values in CSS**: Use the `theme()` function to access your
    theme values in custom CSS.

    ```css
    .my-custom-class {
      background-color: theme('colors.primary');
    }
    ```

4.  **Dark Mode**: Use the `dark` variant to apply different styles in dark
    mode.

    ```html
    <div class="bg-white dark:bg-gray-800">
      <h1 class="text-gray-900 dark:text-white">...</h1>
    </div>
    ```
