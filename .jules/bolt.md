## 2025-03-05 - Expensive inline template calculations in Vue 3
**Learning:** In Vue 3, complex inline template expressions like `string.split('\n').filter().length` are evaluated on every re-render (which happens on every keystroke in a form). If this expression is used multiple times (e.g., inside a `v-for` and multiple interpolation tags), the performance penalty is multiplied by the number of usages.
**Action:** Always move complex derived state from templates into `computed` properties. Vue will cache the computed result based on its reactive dependencies, preventing redundant calculations on every render cycle.
## 2025-04-15 - Unnecessary reactivity in static components
**Learning:** In Vue 3, computing static arrays that never change wastes reactivity overhead. `computed` is useful for tracking reactive dependency changes, but using it with static data imports from a router file only adds overhead without any benefit. Also, typing must strictly be updated whenever an interface expects newly referenced props (e.g. `title`, `icon`).
**Action:** Replace `computed` functions with simple variable assignments (e.g., `const tabs = promptRoutes.map(...)`) when dealing with statically configured values that do not rely on reactive Vue state.
## 2026-06-18 - Method Calls in Vue Templates
**Learning:** Calling methods like `getFieldValue()` directly within Vue template bindings (like `:value`) causes the method to execute on *every* component re-render. Since form components re-render on every keystroke, this causes unnecessary overhead.
**Action:** Always prefer direct property access (e.g., `store.formData[field.key]`) over method calls in templates. This allows Vue's compiler to statically analyze dependencies and avoids redundant execution.
