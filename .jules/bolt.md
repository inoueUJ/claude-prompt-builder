## 2025-03-05 - Expensive inline template calculations in Vue 3
**Learning:** In Vue 3, complex inline template expressions like `string.split('\n').filter().length` are evaluated on every re-render (which happens on every keystroke in a form). If this expression is used multiple times (e.g., inside a `v-for` and multiple interpolation tags), the performance penalty is multiplied by the number of usages.
**Action:** Always move complex derived state from templates into `computed` properties. Vue will cache the computed result based on its reactive dependencies, preventing redundant calculations on every render cycle.

## 2025-04-14 - requestAnimationFrame in input handlers
**Learning:** Utilizing `requestAnimationFrame` for DOM writes and reads (`style.height` and `scrollHeight`) during high-frequency input events like textarea typing prevents layout thrashing. However, it's critical to store the rAF ID and cancel the previously queued frame (`cancelAnimationFrame`) before requesting a new one. Otherwise, rapid inputs may queue multiple frames that will execute sequentially, triggering multiple reflows in a single frame.
**Action:** When debouncing layout operations with `requestAnimationFrame`, always use the `cancelAnimationFrame` pattern to avoid duplicate callbacks executing in the next frame.
