# 🚀 Code Instructions Kit

A curated collection of high-quality instruction templates and prompt guides to
help developers write better code prompts — especially for AI-powered coding
assistants like Gemini CLI, GitHub Copilot, and more.

## ✨ Introduction

Welcome to Code Instructions Kit — your go-to repository for well-crafted
instruction templates aimed at improving developer workflows with AI coding
tools. Whether you're using Gemini CLI or GitHub Copilot, writing clear and
effective prompts can drastically enhance your productivity and code quality.

This repo provides framework-specific, best-practice instruction files that help
you define coding style, component design patterns, testing strategies, and
repository conventions — so your AI coding assistant understands exactly what
you expect.

## 🎯 Motivation & Purpose

The rise of AI-assisted coding is reshaping software development, but the
quality of output depends heavily on the quality of instructions and context
provided. Unfortunately, crafting these prompts and instructions from scratch
can be tedious and inconsistent across teams.

This project aims to:

- Provide ready-to-use, standardized instruction templates for popular frontend
  frameworks and tooling combinations (React, Next.js, Tailwind, Vue, Vite,
  etc.)

- Share best practices distilled from industry experience for component design,
  testing, accessibility, and code style

- Enable developers at all levels to accelerate their AI-assisted coding
  workflows with minimal setup

- Foster a community-driven collection where contributors can share their own
  templates, improvements, and ideas

## 💡 Use Cases: How This Kit Empowers Your Development Workflow

This kit is designed to seamlessly integrate into your projects, offering
tangible benefits:

- **Rapid AI Assistant Setup**: Quickly configure your AI coding assistant with
  battle-tested instruction files, ensuring it understands your project's
  specific conventions from day one.
- **Enforce Best Practices**: Leverage pre-defined templates to guide your AI in
  generating code that adheres to industry-standard component design, testing,
  and accessibility principles.
- **Tailored Code Generation**: Customize prompts and guidelines to precisely
  match your team's unique coding style, architectural patterns, and
  project-specific requirements, leading to more accurate and idiomatic
  AI-generated code.
- **Standardized Collaboration**: Establish a shared understanding of coding
  standards across your team, fostering consistency and reducing friction in
  open-source or enterprise projects.

## 🚀 Getting Started: Integrate This Kit into Your Project

Follow these steps to empower your AI coding assistant with project-specific
guidelines:

1.  **Clone the Repository**:

    ```bash
    git clone https://github.com/abhinavkumar985/code-instructions-kit.git
    cd code-instructions-kit
    ```

2.  **Identify Your Stack**: Browse the folders (e.g., `react/`, `node/`,
    `stacks/react-next-tailwind/`) to find the `GEMINI.md` and
    `.gemini-guidelines/` directory that best matches your project's technology
    stack.

3.  **Integrate into Your Project**:
    - **For New Projects**: Copy the entire `GEMINI.md` file and its
      corresponding `.gemini-guidelines/` directory directly into your new
      project's root folder.
    - **For Existing Projects**:
      - Copy the `GEMINI.md` file and the `.gemini-guidelines/` directory into
        your project's root.
      - If you already have a `GEMINI.md` or similar configuration, merge the
        relevant sections from this kit's `GEMINI.md` into your existing one.
        Ensure the `.gemini-guidelines/` directory is placed alongside your
        `GEMINI.md` file.

    _Example Structure in Your Project Root:_

```
your-project/
├── GEMINI.md
├── .gemini-guidelines/
│   ├── overview.md
│   └── component-design.md
└── src/
        └── components
```


1.  **Customize and Extend**:
    - Open the copied `GEMINI.md` and the files within `.gemini-guidelines/`.
    - Modify their content to reflect your project's unique coding standards,
      architectural decisions, and team preferences. This is crucial for
      tailoring the AI's output.
    - Add new guideline files to `.gemini-guidelines/` as needed, and remember
      to reference them in your `GEMINI.md`.

2.  **Leverage with Your AI Assistant**:
    - **For Gemini CLI**: The CLI automatically detects `GEMINI.md` and its
      referenced guidelines in your project root. Simply start interacting with
      the CLI, and it will use these instructions to inform its responses and
      code generation.
    - **For Other AI Assistants (e.g., GitHub Copilot)**: Copy the relevant
      content from the `.gemini-guidelines/` files into your assistant's
      configuration or prompt context.

## 🛠️ Recommendations for Maximizing Value

To get the most out of this kit and your AI coding assistant:

- **Adapt, Don't Just Adopt**: Treat these templates as robust starting points.
  Actively customize them to precisely fit your project's unique context, team
  culture, and technical requirements.
- **Maintain as a Living Document**: Your codebase evolves, and so should your
  guidelines. Regularly review and update your `GEMINI.md` and
  `.gemini-guidelines/` files to reflect changes in your project's architecture,
  dependencies, or best practices.
- **Contribute Back**: Your improvements and new templates are invaluable! Share
  them with the community via Pull Requests to help this resource grow and
  benefit others.
- **Stay Updated**: Follow this repository to receive notifications on new
  additions, updated best practices, and enhancements to the kit.

## 🤝 Contributing

We welcome and encourage contributions from the community! Your insights and
additions are vital to making this kit a comprehensive and invaluable resource
for developers.

If you have:

- Instruction templates for other frameworks, libraries, or tooling
  combinations.
- Improvements or refinements for existing files.
- Suggestions for new sections, topics, or best practices.

Please open an issue or submit a pull request. Let's collaborate to build the
ultimate resource for AI-assisted coding!

## 📄 License

This project is open source under the MIT License.

## 🔗 Connect & Follow

If you find this repo helpful, please ⭐ star it and share it with your
developer network. Follow me for more insights on frontend development, AI
tools, and open source contributions.

🐙 GitHub: [https://github.com/abhinavkumar985](https://github.com/abhinavkumar985)

🐦 Twitter: [https://x.com/abhinav985](https://x.com/abhinav985)

💼 LinkedIn: [https://www.linkedin.com/in/abhinavkumar985/](https://www.linkedin.com/in/abhinavkumar985/)

🌐 Portfolio: [https://abhinavkumar985.github.io/portfolio/about](https://abhinavkumar985.github.io/portfolio/about)

✍️ Medium: [https://medium.com/@abhinavkumar985](https://medium.com/@abhinavkumar985)

Thank you for visiting Code Instructions Kit — happy coding! 🎉
