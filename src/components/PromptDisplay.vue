<script setup lang="ts">
import { ref, computed } from 'vue'
import { usePromptStore } from '@/stores/promptStore'
import { Copy, RotateCcw, CheckCircle } from 'lucide-vue-next'

const promptStore = usePromptStore()
const copySuccess = ref(false)

// ⚡ Bolt Optimization: Memoize expensive quality score calculation
// Previously, the string split/filter logic was duplicated 7 times in the template
// and evaluated on every keystroke. Using computed caches the result.
// ⚡ Bolt Optimization: Replace allocation-heavy split/filter with O(N) allocation-free loop
const promptQualityScore = computed(() => {
  const prompt = promptStore.generatedPrompt
  if (!prompt) return 0

  let tagCount = 0
  let searchStart = 0

  while (searchStart < prompt.length) {
    const targetIdx = prompt.indexOf('<', searchStart)
    if (targetIdx === -1) break

    tagCount++

    const nextNewline = prompt.indexOf('\n', targetIdx)
    if (nextNewline === -1) break

    searchStart = nextNewline + 1
  }

  return Math.min(5, Math.floor(tagCount / 2))
})

const handleCopy = async () => {
  const success = await promptStore.copyToClipboard()
  if (success) {
    copySuccess.value = true
    setTimeout(() => {
      copySuccess.value = false
    }, 2000)
  }
}

const handleReset = () => {
  if (confirm('すべてのフィールドをリセットしますか？')) {
    promptStore.resetForm()
  }
}
</script>

<template>
  <div class="prompt-display">
    <!-- ヘッダー -->
    <div class="prompt-header">
      <h2 class="prompt-title">生成されたプロンプト</h2>
      <div class="prompt-actions">
        <button @click="handleReset" class="btn btn-secondary">
          <RotateCcw :size="16" class="btn-icon" />
          リセット
        </button>
        <button @click="handleCopy" :class="['btn', copySuccess ? 'btn-success' : 'btn-primary']">
          <CheckCircle v-if="copySuccess" :size="16" class="btn-icon" />
          <Copy v-else :size="16" class="btn-icon" />
          {{ copySuccess ? 'コピー完了！' : 'コピー' }}
        </button>
      </div>
    </div>

    <!-- プロンプト表示エリア -->
    <div class="prompt-content">
      <textarea
        v-if="promptStore.generatedPrompt"
        :value="promptStore.generatedPrompt"
        readonly
        class="prompt-textarea"
        rows="15"
        placeholder="生成されたプロンプトがここに表示されます"
      />
      <div v-else class="prompt-empty">
        <div class="empty-icon">📝</div>
        <p class="empty-text">
          ↑ 上のフォームに入力すると、<br />
          XMLタグ付きプロンプトが自動生成されます
        </p>
      </div>
    </div>

    <!-- プロンプト品質インジケーター -->
    <div v-if="promptStore.generatedPrompt" class="quality-indicator">
      <div class="quality-header">
        <span class="quality-label">プロンプト品質</span>
        <div class="quality-dots">
          <div
            v-for="i in 5"
            :key="i"
            :class="[
              'quality-dot',
              i <= promptQualityScore ? 'quality-dot-active' : 'quality-dot-inactive',
            ]"
          />
        </div>
      </div>
      <p class="quality-description">
        {{ promptQualityScore }}/5 -
        {{ promptQualityScore >= 3 ? '良好' : '基本的' }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.prompt-display {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  padding: 24px;
  height: fit-content; /* デフォルトの高さをコンテンツに合わせる */
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

/* PC表示では高さを100%にする */
@media (min-width: 768px) {
  .prompt-display {
    height: 100%;
  }
}

.prompt-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.prompt-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
}

.prompt-actions {
  display: flex;
  gap: 12px;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.875rem;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
  border: none;
}

.btn-icon {
  margin-right: 6px;
}

.btn-primary {
  background-color: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background-color: #2563eb;
}

.btn-secondary {
  background-color: white;
  color: #6b7280;
  border: 2px solid #e5e7eb;
}

.btn-secondary:hover {
  background-color: #f9fafb;
}

.btn-success {
  background-color: #10b981;
  color: white;
}

.prompt-content {
  flex: 1;
  background: #f8fafc;
  border-radius: 8px;
  padding: 20px;
  min-height: 300px;
  overflow: auto;
  margin-bottom: 20px;
  border: 2px solid #e2e8f0;
}

.prompt-textarea {
  width: 100%;
  height: 100%;
  min-height: 300px;
  /* max-height: 500px; */ /* 最大の高さを削除 */
  font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  color: #1f2937;
  background: transparent;
  border: none;
  outline: none;
  resize: vertical;
  padding: 0;
  overflow-y: auto;
  overflow-x: auto;
  white-space: pre;
}

.prompt-empty {
  text-align: center;
  padding: 40px 20px;
  color: #6b7280;
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 16px;
}

.empty-text {
  line-height: 1.5;
}

.usage-guide {
  padding: 16px;
  background: #eff6ff;
  border-radius: 8px;
  margin-bottom: 16px;
}

.usage-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: #1e40af;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}

.usage-icon {
  margin-right: 6px;
}

.usage-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.usage-step {
  font-size: 0.875rem;
  color: #1d4ed8;
}

.quality-indicator {
  padding: 16px;
  background: #f0fdf4;
  border-radius: 8px;
}

.quality-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.quality-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #166534;
}

.quality-dots {
  display: flex;
  align-items: center;
  gap: 4px;
}

.quality-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.quality-dot-active {
  background-color: #10b981;
}

.quality-dot-inactive {
  background-color: #d1d5db;
}

.quality-description {
  font-size: 0.75rem;
  color: #059669;
  margin: 0;
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
  .prompt-display {
    padding: 16px;
  }

  .prompt-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 16px;
  }

  .prompt-title {
    font-size: 1.1rem;
  }

  .prompt-actions {
    width: 100%;
    gap: 8px;
  }

  .btn {
    flex-grow: 1; /* ボタンの幅を均等に広げる */
    justify-content: center; /* ボタン内のテキストとアイコンを中央揃え */
    padding: 12px 10px;
    font-size: 0.8rem;
  }

  .prompt-content {
    padding: 16px;
    min-height: 250px;
  }

  .prompt-textarea {
    font-size: 0.8rem;
  }

  .quality-indicator {
    padding: 12px;
  }

  .quality-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .quality-label {
    font-size: 0.8rem;
  }

  .quality-description {
    font-size: 0.7rem;
  }
}
</style>
