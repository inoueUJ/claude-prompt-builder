## 2025-03-05 - Expensive inline template calculations in Vue 3
**Learning:** In Vue 3, complex inline template expressions like `string.split('\n').filter().length` are evaluated on every re-render (which happens on every keystroke in a form). If this expression is used multiple times (e.g., inside a `v-for` and multiple interpolation tags), the performance penalty is multiplied by the number of usages.
**Action:** Always move complex derived state from templates into `computed` properties. Vue will cache the computed result based on its reactive dependencies, preventing redundant calculations on every render cycle.

## 2025-03-05 - String splitting vs Regex for counting occurrences
**Learning:** Using `.split('\n').filter(line => line.includes('<')).length` to count occurrences of a string/character is an O(N) operation but has a high constant factor because it allocates memory for an array of N substrings. For large strings, a simple regex match `(str.match(/</g) || []).length` is significantly faster (measured ~60x faster for 5000 lines).
**Action:** Always prefer regex matching over string splitting when counting occurrences of a pattern in a large string, especially inside reactive computations that run frequently (like Vue computed properties).
