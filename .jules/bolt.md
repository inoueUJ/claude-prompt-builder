## 2025-03-05 - Expensive inline template calculations in Vue 3
**Learning:** In Vue 3, complex inline template expressions like `string.split('\n').filter().length` are evaluated on every re-render (which happens on every keystroke in a form). If this expression is used multiple times (e.g., inside a `v-for` and multiple interpolation tags), the performance penalty is multiplied by the number of usages.
**Action:** Always move complex derived state from templates into `computed` properties. Vue will cache the computed result based on its reactive dependencies, preventing redundant calculations on every render cycle.
## 2025-04-15 - Unnecessary reactivity in static components
**Learning:** In Vue 3, computing static arrays that never change wastes reactivity overhead. `computed` is useful for tracking reactive dependency changes, but using it with static data imports from a router file only adds overhead without any benefit. Also, typing must strictly be updated whenever an interface expects newly referenced props (e.g. `title`, `icon`).
**Action:** Replace `computed` functions with simple variable assignments (e.g., `const tabs = promptRoutes.map(...)`) when dealing with statically configured values that do not rely on reactive Vue state.
## 2023-10-27 - Vue 3 Template v-model vs Inline Handlers
**Learning:** In Vue 3 templates, especially inside `v-for` loops, using inline arrow functions for `@input` (e.g., `@input="(e) => updateField(field.key, e.target.value)"`) prevents Vue's compiler from hoisting the event handler. This means a new function is allocated in memory on every re-render of the component (which happens on every keystroke in a form), causing unnecessary Garbage Collection overhead.
**Action:** When updating Pinia state from form inputs, use `v-model` directly bound to the store state (e.g., `v-model="store.formData[key]"`) instead of custom handler functions, as Pinia fully supports direct state mutation tracking.

## 2023-10-27 - Re-allocating Static Data in Pinia Actions
**Learning:** When generating sample data or presets inside Pinia store actions, defining large static objects or arrays inside the action function body causes those objects to be re-created and garbage collected every time the action is called.
**Action:** Move static data structures (like presets or configuration maps) outside of action functions, preferably as module-level constants, to prevent unnecessary memory allocations during execution.
