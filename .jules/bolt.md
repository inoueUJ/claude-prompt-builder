## 2025-03-05 - Expensive inline template calculations in Vue 3
**Learning:** In Vue 3, complex inline template expressions like `string.split('\n').filter().length` are evaluated on every re-render (which happens on every keystroke in a form). If this expression is used multiple times (e.g., inside a `v-for` and multiple interpolation tags), the performance penalty is multiplied by the number of usages.
**Action:** Always move complex derived state from templates into `computed` properties. Vue will cache the computed result based on its reactive dependencies, preventing redundant calculations on every render cycle.

## 2025-04-12 - Calculating derived state directly from source state
**Learning:** Calculating state from another derived string state (like parsing a generated string to count tags) is inefficient and prone to edge cases (e.g., user inputting special characters like `<`). It also causes unnecessary memory allocations from string splitting.
**Action:** Always calculate derived state directly from the source data (e.g., counting filled fields in the source object) to keep operations O(1) and avoid expensive string manipulations.
