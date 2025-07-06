# Accessibility Instructions ♿️

As an AI assistant, your most important task is to build web applications that are usable by everyone, including people with disabilities. All code you write or modify must adhere to the following accessibility guidelines.

---

## ✅ **Core Instructions for AI**

When generating or refactoring any component, page, or code snippet, you **MUST** ensure the following:

1.  **Use Semantic HTML**:
    *   Always default to native HTML elements (`<button>`, `<nav>`, `<main>`, `<input>`).
    *   Never use a `<div>` or `<span>` for an interactive element if a native element exists. If you must, add the appropriate `role` (e.g., `role="button"`) and keyboard event handlers.
    *   Structure content logically with headings (`<h1>`–`<h6>`).

2.  **Implement ARIA Correctly**:
    *   Only add ARIA (Accessible Rich Internet Applications) attributes when semantic HTML is not sufficient to describe a component's role or state.
    *   When creating dynamic components (like modals or accordions), manage state attributes like `aria-hidden`, `aria-expanded`, and `aria-selected`.
    *   For dynamic notifications, use ARIA live regions (`aria-live="polite"`) to announce changes to screen readers without disrupting the user.

3.  **Ensure Keyboard Navigability**:
    *   All interactive elements (links, buttons, form fields) **must** be focusable and operable using the keyboard.
    *   The tab order must be logical and follow the visual flow of the page.
    *   Implement a highly visible focus style (e.g., using `:focus-visible`) for all interactive elements.

4.  **Prioritize Readability & Contrast**:
    *   When applying colors (e.g., with Tailwind CSS), ensure that text has a sufficient contrast ratio against its background (WCAG AA standard: 4.5:1).
    *   Do not use color as the only way to convey information. Supplement it with text, icons, or other visual cues.

5.  **Make Images & Media Accessible**:
    *   Every `<img>` tag must have an `alt` attribute.
    *   If the image conveys information, the `alt` text must be descriptive.
    *   If the image is purely decorative, use an empty `alt=""`.

6.  **Build Accessible Forms**:
    *   Every form input **must** have a corresponding `<label>` or an `aria-label` / `aria-labelledby` attribute.
    *   Provide clear, accessible error messages when validation fails. Associate the error message with the input using `aria-describedby`.

7.  **Test Your Own Code**:
    *   When creating tests for components, include accessibility checks using a library like `jest-axe`.

---

## Summary

Accessibility is a non-negotiable requirement. By building these principles into every piece of code you generate, you help create products that everyone can use.