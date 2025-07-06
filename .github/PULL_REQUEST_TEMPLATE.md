---
name: Pull Request
about: Propose changes to the Code Instructions Kit
title: "[TYPE]: Short description of changes"
<!--
Thank you for contributing! Please prefix your PR title with one of the following:
- [DOCS] for documentation changes
- [FEAT] for new features or guidelines
- [FIX] for bug fixes
- [CHORE] for maintenance tasks (e.g., updating templates)
-->
labels: ''
assignees: ''

---

## Pull Request Checklist

Please ensure you have completed the following steps before submitting your pull request. This helps us review and merge your changes efficiently.

### General Checks
- [ ] I have read the [CONTRIBUTING.md](https://github.com/abhinavkumar985/code-instructions-kit/blob/main/CONTRIBUTING.md) guidelines.
- [ ] My changes are clearly described below.
- [ ] My changes are focused on a single concern (e.g., one feature, one bug fix, one set of related documentation updates).

### Content & Documentation Checks
- [ ] My changes are accurate and up-to-date.
- [ ] The language used is clear, concise, and professional.
- [ ] I have checked for any typos, grammatical errors, or spelling mistakes.
- [ ] All new or modified Markdown files (`.md`) adhere to consistent formatting (e.g., heading levels, list styles, code block formatting).
- [ ] If I added new guideline files (e.g., in `.gemini-guidelines/`), I have updated the corresponding `GEMINI.md` file to reference them.
- [ ] If I modified existing guideline files, I have ensured that any references to them in `GEMINI.md` are still accurate.
- [ ] All internal and external links within the modified content are valid and working.

### Specific to `GEMINI.md` and `.gemini-guidelines`
- [ ] If adding a new stack/framework, I have created both the `GEMINI.md` and the `.gemini-guidelines/` directory with at least an `overview.md`.
- [ ] I have ensured that the `GEMINI.md` file correctly references all files within its `.gemini-guidelines/` directory using the `.gemini-guidelines/filename.md` format.

### Self-Review
- [ ] I have reviewed my own code/content changes.
- [ ] I have tested any instructions or examples I've added to ensure they work as described.

---

## Description of Changes

Please provide a detailed description of your changes here. Explain the problem you're solving, the feature you're adding, or the documentation you're improving.

*(Example: "This PR adds new guidelines for Python FastAPI, including API design and data validation. It also updates the main README to reflect the new stack.")*

---

## Related Issues (Optional)

If this PR addresses any open issues, please link them here (e.g., `Closes #123`).

---