## 2025-03-05 - Expensive inline template calculations in Vue 3
**Learning:** In Vue 3, complex inline template expressions like `string.split('\n').filter().length` are evaluated on every re-render (which happens on every keystroke in a form). If this expression is used multiple times (e.g., inside a `v-for` and multiple interpolation tags), the performance penalty is multiplied by the number of usages.
**Action:** Always move complex derived state from templates into `computed` properties. Vue will cache the computed result based on its reactive dependencies, preventing redundant calculations on every render cycle.

## 2025-03-05 - Synchronous layout thrashing on user input
**Learning:** For forms with auto-resizing textareas, setting `style.height = 'auto'` and immediately reading `scrollHeight` on every keystroke (`@input` event) forces the browser to perform synchronous layout recalculation. This blocks the main thread and can make continuous typing sluggish.
**Action:** Always wrap DOM reads/writes (like measuring `scrollHeight`) that trigger layout recalculation within a `requestAnimationFrame`. If triggered by frequent events like typing, ensure you cancel the previous frame to prevent queuing multiple layout recalculations.
