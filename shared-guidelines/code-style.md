# Code Style Guidelines 🧹

Consistent code style is crucial for readability, maintainability, and collaboration in any project. This document outlines the recommended code style conventions to follow across all frontend projects.

---

## 1. Formatting & Indentation

- Use **2 spaces** per indentation level (no tabs).
- Keep line length under **80-100 characters** where possible.
- Use trailing commas in multiline objects and arrays.
- Always include semicolons to avoid automatic semicolon insertion pitfalls.

---

## 2. Naming Conventions

- Use **camelCase** for variables and functions.
- Use **PascalCase** for React/Vue components and classes.
- File names should be **kebab-case** or **PascalCase**, but be consistent within your project.
- Constants (environment variables, config values) in **UPPER_SNAKE_CASE**.

---

## 3. JavaScript / TypeScript

- Prefer **const** by default, use **let** only if variable reassignments needed.
- Avoid using **var**.
- Use **arrow functions** for anonymous functions and callbacks.
- Use **explicit return types** in TypeScript whenever possible.
- Use modern ES6+ features such as destructuring, template literals, and optional chaining.

---

## 4. CSS / Styling

- Prefer **BEM** or utility-first (Tailwind) class naming conventions.
- Use CSS variables for theme colors and reusable values.
- Avoid inline styles unless dynamically necessary.
- Keep selectors simple and avoid deeply nested rules.

---

## 5. Comments & Documentation

- Write clear, concise comments where logic is complex.
- Use JSDoc/TSDoc style for functions and modules.
- Remove commented-out or dead code before commits.

---

## 6. Code Reviews & Linting

- Use **ESLint** with your preferred config (Airbnb, Standard, etc.).
- Configure **Prettier** for automated formatting.
- Fix linting issues before submitting PRs.
- Code reviews should verify adherence to these style guidelines.

---

## 7. Accessibility & Best Practices

- Follow semantic HTML and ARIA practices.
- Ensure components and UI elements are keyboard and screen reader friendly.
- Use descriptive variable and function names to improve clarity.