## 2025-03-05 - Expensive inline template calculations in Vue 3
**Learning:** In Vue 3, complex inline template expressions like `string.split('\n').filter().length` are evaluated on every re-render (which happens on every keystroke in a form). If this expression is used multiple times (e.g., inside a `v-for` and multiple interpolation tags), the performance penalty is multiplied by the number of usages.
**Action:** Always move complex derived state from templates into `computed` properties. Vue will cache the computed result based on its reactive dependencies, preventing redundant calculations on every render cycle.
## 2025-04-15 - Unnecessary reactivity in static components
**Learning:** In Vue 3, computing static arrays that never change wastes reactivity overhead. `computed` is useful for tracking reactive dependency changes, but using it with static data imports from a router file only adds overhead without any benefit. Also, typing must strictly be updated whenever an interface expects newly referenced props (e.g. `title`, `icon`).
**Action:** Replace `computed` functions with simple variable assignments (e.g., `const tabs = promptRoutes.map(...)`) when dealing with statically configured values that do not rely on reactive Vue state.

## 2024-05-23 - Optimizing Vue component inputs with v-model instead of @input event
**Learning:** Using manual `:value` binding and `@input` event listeners inside Vue forms with rapid input (like Japanese IME composition) can result in excessive re-renders and glitchy input handling. `v-model` is explicitly designed by Vue to handle these scenarios gracefully by deferring reactive state updates during IME composition phases.
**Action:** Always prefer `v-model` over manual `:value`/`@input` combinations for text-based form inputs in Vue 3 applications, especially when anticipating heavy usage by non-alphanumeric typists (e.g., Japanese/IME users), unless custom input interception logic strictly requires the manual approach.
