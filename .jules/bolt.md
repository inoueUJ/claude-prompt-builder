## 2025-05-18 - Vue Template Expression Cost Multiplication
**Learning:** Placing expensive operations like string manipulation (`split`, `filter`) directly inside Vue templates is a significant performance anti-pattern. If the expression is used multiple times (e.g., duplicated for different interpolations or inside a `v-for` loop), the expensive operation will be re-evaluated on every render for every instance, multiplying the cost.
**Action:** Always extract complex or expensive template expressions into Vue `computed` properties. `computed` properties are cached based on their dependencies, so the expensive operation is only executed once when the underlying data changes, regardless of how many times it's used in the template.

## 2025-03-05 - Expensive inline template calculations in Vue 3
**Learning:** In Vue 3, complex inline template expressions like `string.split('\n').filter().length` are evaluated on every re-render (which happens on every keystroke in a form). If this expression is used multiple times (e.g., inside a `v-for` and multiple interpolation tags), the performance penalty is multiplied by the number of usages.
**Action:** Always move complex derived state from templates into `computed` properties. Vue will cache the computed result based on its reactive dependencies, preventing redundant calculations on every render cycle.
