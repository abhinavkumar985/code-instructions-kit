
# Tailwind CSS Utility Class Patterns

Follow these patterns for writing clean and maintainable utility classes.

## ✅ **Instructions**

1.  **Keep Class Lists Organized**: Use a consistent order for your utility classes. A common approach is:
    1.  Layout (display, position, etc.)
    2.  Box Model (width, height, margin, padding)
    3.  Typography (font size, color, etc.)
    4.  Backgrounds
    5.  Borders
    6.  Effects (box shadow, opacity)
    7.  Interactivity (hover, focus)

2.  **Use `@apply` for Reusable Styles**: If you find yourself repeating the same set of utilities, you can extract them into a component class using the `@apply` directive in your CSS.

    ```css
    .btn-primary {
      @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
    }
    ```

    **Note**: Use `@apply` sparingly. It can be a sign that you should create a reusable component instead.

3.  **Conditional Classes**: Use a library like `clsx` or `classnames` to conditionally apply classes in your components.

    ```javascript
    import clsx from 'clsx';

    function Button({ primary, children }) {
      const buttonClasses = clsx(
        'py-2 px-4 rounded',
        {
          'bg-blue-500 text-white': primary,
          'bg-gray-200 text-gray-800': !primary,
        }
      );

      return <button className={buttonClasses}>{children}</button>;
    }
    ```
