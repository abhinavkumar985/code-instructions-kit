
# Error Handling

Follow these guidelines for consistent and effective error handling.

## ✅ **Instructions**

1.  **Centralized Error Middleware**: Use a single, centralized error-handling middleware in your Express application. This should be the last middleware added.

    ```javascript
    // server.js
    const errorHandler = require('./middleware/errorHandler');
    // ...
    app.use(errorHandler);
    ```

2.  **Custom Error Class**: Create a custom `AppError` class to standardize operational errors.

    ```javascript
    // utils/AppError.js
    class AppError extends Error {
      constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
      }
    }
    module.exports = AppError;
    ```

3.  **Catching Async Errors**: Wrap your async route handlers in a `catchAsync` utility to avoid repetitive `try...catch` blocks.

    ```javascript
    // utils/catchAsync.js
    const catchAsync = (fn) => {
      return (req, res, next) => {
        fn(req, res, next).catch(next);
      };
    };
    module.exports = catchAsync;
    ```

    ```javascript
    // controllers/userController.js
    const catchAsync = require('../utils/catchAsync');
    const AppError = require('../utils/AppError');

    exports.getUser = catchAsync(async (req, res, next) => {
      const user = await User.findById(req.params.id);
      if (!user) {
        return next(new AppError('No user found with that ID', 404));
      }
      res.status(200).json({ status: 'success', data: { user } });
    });
    ```
