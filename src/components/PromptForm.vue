<script setup lang="ts">
import { computed } from 'vue'
import { usePromptStore } from '@/stores/promptStore'
import type { PromptFormData } from '@/stores/promptStore'

interface FormField {
  key: keyof PromptFormData
  label: string
  placeholder: string
  type?: 'text' | 'textarea'
  required?: boolean
  group?: string
}

interface Props {
  fields: FormField[]
  title: string
  icon: string
}

const props = defineProps<Props>()
const promptStore = usePromptStore()

const updateField = (field: keyof PromptFormData, value: string) => {
  promptStore.updateField(field, value)
}

const getFieldValue = (field: keyof PromptFormData) => {
  return promptStore.formData[field]
}

// フィールドをグループ別に分類
const groupedFields = computed(() => {
  const groups: Record<string, FormField[]> = {}

  props.fields.forEach((field) => {
    const groupName = field.group || 'default'
    if (!groups[groupName]) {
      groups[groupName] = []
    }
    groups[groupName].push(field)
  })

  return groups
})

// テキストエリアのサイズを自動調整
const autoResize = (event: Event) => {
  const textarea = event.target as HTMLTextAreaElement
  textarea.style.height = 'auto'
  textarea.style.height = textarea.scrollHeight + 'px'
}
</script>

<template>
  <div class="form-card">
    <h2 class="form-title">
      <span class="form-icon">{{ icon }}</span>
      {{ title }}
    </h2>

    <div class="form-content">
      <div v-for="(groupFields, groupName) in groupedFields" :key="groupName" class="form-group">
        <!-- グループヘッダー -->
        <h3 v-if="groupName !== 'default'" class="group-header">
          {{ groupName }}
        </h3>

        <!-- フィールド群 -->
        <div class="field-container">
          <div v-for="field in groupFields" :key="field.key" class="field-wrapper">
            <label class="field-label">
              {{ field.label }}
              <span v-if="field.required" class="required-indicator">*</span>
            </label>

            <textarea
              v-if="field.type === 'textarea'"
              :value="getFieldValue(field.key)"
              @input="
                (e) => {
                  updateField(field.key, (e.target as HTMLTextAreaElement).value)
                  autoResize(e)
                }
              "
              @keydown.enter.stop
              :placeholder="field.placeholder"
              class="form-textarea auto-resize"
              rows="3"
            />

            <input
              v-else
              type="text"
              :value="getFieldValue(field.key)"
              @input="updateField(field.key, ($event.target as HTMLInputElement).value)"
              :placeholder="field.placeholder"
              class="form-input"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  padding: 24px;
  height: fit-content;
}

.form-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
}

.form-icon {
  margin-right: 8px;
  font-size: 1.5rem;
}

.form-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.group-header {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 12px;
  padding-bottom: 4px;
  border-bottom: 1px solid #e5e7eb;
}

.field-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.field-wrapper {
  display: flex;
  flex-direction: column;
}

.field-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 4px;
}

.required-indicator {
  color: #ef4444;
  margin-left: 4px;
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  background: white;
}

.form-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  background: white;
  resize: vertical;
  min-height: 80px;
  font-family: inherit;
  line-height: 1.5;
}

.form-textarea:placeholder-shown {
  overflow-y: auto;
  height: 120px;
}

.form-textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.auto-resize {
  resize: none;
  overflow: hidden;
}

/* プレースホルダーのスタイル */
.form-input::placeholder,
.form-textarea::placeholder {
  color: #9ca3af;
  opacity: 1;
}

/* ホバー効果 */
.form-input:hover,
.form-textarea:hover {
  border-color: #d1d5db;
}
</style>
