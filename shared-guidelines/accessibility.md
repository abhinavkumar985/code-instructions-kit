# Accessibility Guidelines ♿️

Building accessible web applications is essential to ensure everyone, including users with disabilities, can effectively use your product. These guidelines outline best practices and standards to help create inclusive, usable, and compliant frontend experiences.

---

## 1. Semantic HTML

- Use native HTML elements appropriately (e.g., `<button>`, `<nav>`, `<main>`, `<header>`, `<form>`) to leverage built-in accessibility.
- Avoid using `<div>` or `<span>` for interactive elements without proper ARIA roles.
- Structure content logically with headings (`<h1>`–`<h6>`) to provide clear document hierarchy.

---

## 2. ARIA Roles & Attributes

- Use ARIA (Accessible Rich Internet Applications) roles and properties **only when native HTML is insufficient**.
- Keep ARIA roles simple and correct to avoid confusing assistive technologies.
- Manage `aria-live`, `aria-hidden`, and `aria-expanded` states to communicate dynamic content changes.

---

## 3. Keyboard Navigation

- Ensure all interactive elements are reachable and operable with keyboard (Tab, Enter, Space, Arrow keys).
- Maintain a logical tab order matching the visual layout.
- Use focus styles (e.g., `:focus-visible`) that are visible and clear for keyboard users.
- Avoid keyboard traps by ensuring focus can move freely within modals or dialogs.

---

## 4. Color & Contrast

- Use sufficient contrast between text and background to meet WCAG AA standards (minimum contrast ratio 4.5:1 for normal text).
- Avoid conveying information using color alone; supplement with text or icons.
- Consider users with color blindness by using patterns, shapes, or text labels.

---

## 5. Images & Media

- Provide descriptive `alt` text for images that convey information or function.
- For decorative images, use empty `alt=""` to avoid distracting screen readers.
- Caption videos and provide transcripts for audio content.
- Avoid auto-playing media or provide clear controls to pause/stop.

---

## 6. Forms & Inputs

- Label all form controls clearly using `<label>` or `aria-label`.
- Provide error messages and instructions accessible to screen readers.
- Use fieldsets and legends for grouped form elements.
- Ensure form controls have appropriate keyboard focus and state feedback.

---

## 7. Dynamic Content & Announcements

- Use ARIA live regions (`aria-live`) to notify users of important dynamic changes.
- Ensure updates don’t disrupt the user experience or keyboard focus.
- Test dynamic widgets like modals, dropdowns, accordions for accessibility.

---

## 8. Testing & Validation

- Regularly test with screen readers (NVDA, VoiceOver), keyboard-only navigation, and other assistive technologies.
- Use automated accessibility testing tools (axe, Lighthouse, pa11y) to catch common issues.
- Conduct manual audits and user testing with people who have disabilities.

---

## Summary

Accessibility is a fundamental part of frontend development. Writing semantic, keyboard-friendly, and screen reader compatible code improves UX for all users and meets legal and ethical standards.

> Build inclusively from the start to create products that everyone can enjoy.

