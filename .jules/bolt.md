## 2025-03-05 - Expensive inline template calculations in Vue 3
**Learning:** In Vue 3, complex inline template expressions like `string.split('\n').filter().length` are evaluated on every re-render (which happens on every keystroke in a form). If this expression is used multiple times (e.g., inside a `v-for` and multiple interpolation tags), the performance penalty is multiplied by the number of usages.
**Action:** Always move complex derived state from templates into `computed` properties. Vue will cache the computed result based on its reactive dependencies, preventing redundant calculations on every render cycle.

## 2025-04-12 - Inefficient string splitting for simple counting
**Learning:** Using `string.split('\n').filter(...)` just to count occurrences of a substring is inefficient, as it allocates new arrays and string copies on every evaluation, causing garbage collection pressure. This is especially bad in reactive properties evaluated on keystrokes.
**Action:** Use a simple `for` loop to iterate over the string's characters to count occurrences without allocating any memory.
