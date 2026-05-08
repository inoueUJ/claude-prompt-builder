## 2025-03-05 - Expensive inline template calculations in Vue 3
**Learning:** In Vue 3, complex inline template expressions like `string.split('\n').filter().length` are evaluated on every re-render (which happens on every keystroke in a form). If this expression is used multiple times (e.g., inside a `v-for` and multiple interpolation tags), the performance penalty is multiplied by the number of usages.
**Action:** Always move complex derived state from templates into `computed` properties. Vue will cache the computed result based on its reactive dependencies, preventing redundant calculations on every render cycle.
## 2025-04-15 - Unnecessary reactivity in static components
**Learning:** In Vue 3, computing static arrays that never change wastes reactivity overhead. `computed` is useful for tracking reactive dependency changes, but using it with static data imports from a router file only adds overhead without any benefit. Also, typing must strictly be updated whenever an interface expects newly referenced props (e.g. `title`, `icon`).
**Action:** Replace `computed` functions with simple variable assignments (e.g., `const tabs = promptRoutes.map(...)`) when dealing with statically configured values that do not rely on reactive Vue state.

## 2025-05-08 - O(N) allocations in computed properties tracking text inputs
**Learning:** Moving expensive operations like `string.split().filter()` to `computed` properties is not enough to prevent lag when the dependency (e.g., a form text input) changes on every keystroke. For large text inputs, this still causes O(N) memory allocations on every keystroke, leading to significant garbage collection overhead and typing lag.
**Action:** Replace array-allocating string operations (like `split`, `filter`, or regex `match` returning arrays) with zero-allocation alternatives (like `indexOf` loops) when processing large text inputs in frequently updated reactive contexts.
