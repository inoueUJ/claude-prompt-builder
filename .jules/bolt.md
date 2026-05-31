## 2025-03-05 - Expensive inline template calculations in Vue 3
**Learning:** In Vue 3, complex inline template expressions like `string.split('\n').filter().length` are evaluated on every re-render (which happens on every keystroke in a form). If this expression is used multiple times (e.g., inside a `v-for` and multiple interpolation tags), the performance penalty is multiplied by the number of usages.
**Action:** Always move complex derived state from templates into `computed` properties. Vue will cache the computed result based on its reactive dependencies, preventing redundant calculations on every render cycle.

## 2025-04-15 - Unnecessary reactivity in static components
**Learning:** In Vue 3, computing static arrays that never change wastes reactivity overhead. `computed` is useful for tracking reactive dependency changes, but using it with static data imports from a router file only adds overhead without any benefit. Also, typing must strictly be updated whenever an interface expects newly referenced props (e.g. `title`, `icon`).
**Action:** Replace `computed` functions with simple variable assignments (e.g., `const tabs = promptRoutes.map(...)`) when dealing with statically configured values that do not rely on reactive Vue state.

## 2025-05-31 - IME Composition Events and Vue reactivity
**Learning:** For users relying on IMEs (like Japanese), using `@input` event listeners for manual state updates causes the store to update on every single keystroke during composition. This triggers unnecessary Pinia store mutations, computed property re-evaluations, and component re-renders. While `v-model` handles composition natively, manual event handling requires explicit `@compositionstart` and `@compositionend` listeners to defer updates until the word is fully formed.
**Action:** Always track `isComposing` state when manually binding inputs with `@input` in applications that support IME languages to avoid excessive reactivity triggers.
