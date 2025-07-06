# Security Best Practices

Follow these guidelines to secure the Node.js application.

## ✅ **Instructions**

1.  **Use Helmet**: Use the `helmet` middleware to set various HTTP headers that
    help protect against common attacks.

    ```javascript
    const helmet = require('helmet');
    app.use(helmet());
    ```

2.  **Prevent SQL Injection**: Use an ORM (like Sequelize or Mongoose) or
    parameterized queries to prevent SQL injection attacks. Never use string
    concatenation to build queries.

3.  **Prevent XSS**: Sanitize user input to prevent Cross-Site Scripting (XSS)
    attacks. Use a library like `dompurify`.

4.  **Rate Limiting**: Implement rate limiting to protect against brute-force
    attacks.

    ```javascript
    const rateLimit = require('express-rate-limit');

    const limiter = rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    });

    app.use('/api', limiter);
    ```

5.  **Secure Dependencies**: Regularly audit your dependencies for known
    vulnerabilities using `npm audit`.
