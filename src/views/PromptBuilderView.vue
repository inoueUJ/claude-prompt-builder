<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PromptForm from '@/components/PromptForm.vue'
import PromptDisplay from '@/components/PromptDisplay.vue'
import { promptConfigs } from '@/configs/promptConfigs'

const route = useRoute()

// 現在のルートに基づいて設定を取得
const currentConfig = computed(() => {
  const routeName = route.name as string
  return promptConfigs[routeName] || promptConfigs.business // デフォルトはbusiness
})

// 設定が見つからない場合のフォールバック
const configExists = computed(() => {
  const routeName = route.name as string
  return Boolean(promptConfigs[routeName])
})
</script>

<template>
  <div class="view-container">
    <!-- 設定が存在する場合 -->
    <template v-if="configExists">
      <!-- 入力フォーム -->
      <div class="form-panel">
        <PromptForm 
          :fields="currentConfig.fields"
          :title="currentConfig.title"
          :icon="currentConfig.icon"
        />
      </div>

      <!-- 生成されたプロンプト -->
      <div class="display-panel">
        <PromptDisplay />
      </div>
    </template>

    <!-- 設定が存在しない場合のエラー表示 -->
    <template v-else>
      <div class="error-container">
        <div class="error-content">
          <h2>❌ ページが見つかりません</h2>
          <p>指定されたカテゴリ「{{ route.name }}」の設定が見つかりません。</p>
          <p>利用可能なカテゴリ:</p>
          <ul>
            <li v-for="(config, key) in promptConfigs" :key="key">
              <router-link :to="{ name: key }" class="error-link">
                {{ config.icon }} {{ config.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.view-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow: hidden;
}

.form-panel,
.display-panel {
  overflow-y: auto;
  flex: 1;
  min-height: 0; /* flexアイテムが縮小できるようにする */
}

/* カスタムスクロールバー */
.form-panel::-webkit-scrollbar,
.display-panel::-webkit-scrollbar {
  width: 8px;
}

.form-panel::-webkit-scrollbar-track,
.display-panel::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 4px;
}

.form-panel::-webkit-scrollbar-thumb,
.display-panel::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

.form-panel::-webkit-scrollbar-thumb:hover,
.display-panel::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

@media (min-width: 1024px) {
  .view-container {
    flex-direction: row;
    gap: 32px;
  }
  
  .form-panel,
  .display-panel {
    width: 50%;
    height: 100%;
  }
}

@media (min-width: 1440px) {
  .view-container {
    gap: 40px;
  }
}

/* エラーページスタイル */
.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 2rem;
}

.error-content {
  text-align: center;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  max-width: 500px;
}

.error-content h2 {
  color: #dc2626;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.error-content p {
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.error-content ul {
  text-align: left;
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.error-content li {
  margin-bottom: 0.5rem;
}

.error-link {
  color: #3b82f6;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 6px;
  display: block;
  transition: background-color 0.2s ease;
}

.error-link:hover {
  background-color: #eff6ff;
  color: #1d4ed8;
}
</style>
