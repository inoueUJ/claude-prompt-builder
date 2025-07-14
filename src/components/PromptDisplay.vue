<script setup lang="ts">
import { ref } from 'vue'
import { usePromptStore } from '@/stores/promptStore'
import { Copy, RotateCcw, CheckCircle } from 'lucide-vue-next'

const promptStore = usePromptStore()
const copySuccess = ref(false)

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

    <!-- 使用方法 -->
    <div class="usage-guide">
      <h4 class="usage-title">
        <span class="usage-icon">💡</span>
        使用方法
      </h4>
      <div class="usage-content">
        <div class="usage-step">1. 必要なフィールドを入力（改行もサポート）</div>
        <div class="usage-step">2. 「コピー」ボタンでプロンプトをコピー</div>
        <div class="usage-step">3. ClaudeのチャットにペーストしてEnter</div>
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
              i <=
              Math.min(
                5,
                Math.floor(
                  promptStore.generatedPrompt.split('\n').filter((line) => line.includes('<'))
                    .length / 2,
                ),
              )
                ? 'quality-dot-active'
                : 'quality-dot-inactive',
            ]"
          />
        </div>
      </div>
      <p class="quality-description">
        {{
          Math.min(
            5,
            Math.floor(
              promptStore.generatedPrompt.split('\n').filter((line) => line.includes('<')).length /
                2,
            ),
          )
        }}/5 -
        {{
          Math.min(
            5,
            Math.floor(
              promptStore.generatedPrompt.split('\n').filter((line) => line.includes('<')).length /
                2,
            ),
          ) >= 3
            ? '良好'
            : '基本的'
        }}
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
  height: fit-content;
  display: flex;
  flex-direction: column;
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
  max-height: 500px;
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
</style>
