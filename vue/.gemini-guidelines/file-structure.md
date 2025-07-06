# Vue File Structure

Follow this structure for organizing your Vue project.

## 🗂️ **Directory Layout**

- **`/src/components`**: Shared, reusable components.
  - **`/common`**: Generic components like buttons, inputs.
  - **`/layout`**: Layout components like headers, footers.
- **`/src/views`**: Page-level components, each corresponding to a route.
- **`/src/composables`**: Reusable Composition API functions.
- **`/src/router`**: Vue Router configuration.
- **`/src/store`**: Pinia store modules.
- **`/src/assets`**: Static assets like images and fonts.

## ✅ **Instructions**

- **Component Naming**: Use PascalCase for component file names (e.g.,
  `UserProfile.vue`).
- **Keep Views and Components Separate**: Views are for pages, and components
  are for reusable UI elements.
- **Group by Feature**: For larger applications, consider grouping files by
  feature instead of by type.
