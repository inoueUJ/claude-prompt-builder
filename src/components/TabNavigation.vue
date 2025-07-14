<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const tabs = [
  { 
    id: 'business', 
    icon: '📊', 
    label: 'ビジネス分析',
    description: '市場分析・競合調査' 
  },
  { 
    id: 'writing', 
    icon: '✍️', 
    label: '文章作成',
    description: '記事・メール・提案書' 
  },
  { 
    id: 'tech', 
    icon: '💻', 
    label: '技術',
    description: 'コード・技術文書' 
  },
  { 
    id: 'education', 
    icon: '🎓', 
    label: '教育・説明',
    description: '解説・チュートリアル' 
  },
  { 
    id: 'creative', 
    icon: '🎨', 
    label: 'クリエイティブ',
    description: '企画・アイデア発想' 
  },
  { 
    id: 'decision', 
    icon: '⚖️', 
    label: '意思決定',
    description: '選択肢比較・評価' 
  }
]

const currentTab = computed(() => route.name as string)

const navigateToTab = (tabId: string) => {
  router.push({ name: tabId })
}
</script>

<template>
  <div class="category-navigation">
    <!-- デスクトップ版 - 横並びタブ -->
    <div class="hidden md:block">
      <div class="category-tabs">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="navigateToTab(tab.id)"
          :class="[
            'category-tab',
            currentTab === tab.id ? 'category-tab-active' : 'category-tab-inactive'
          ]"
        >
          <div class="category-tab-content">
            <div class="category-icon">{{ tab.icon }}</div>
            <div class="category-label">{{ tab.label }}</div>
            <div class="category-description">{{ tab.description }}</div>
          </div>
        </button>
      </div>
    </div>

    <!-- モバイル版 - ドロップダウン -->
    <div class="md:hidden">
      <select
        :value="currentTab"
        @change="navigateToTab(($event.target as HTMLSelectElement).value)"
        class="category-select"
      >
        <option
          v-for="tab in tabs"
          :key="tab.id"
          :value="tab.id"
        >
          {{ tab.icon }} {{ tab.label }} - {{ tab.description }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.category-navigation {
  margin-bottom: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  padding: 8px;
}

.category-tabs {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
}

.category-tab {
  padding: 16px 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: transparent;
  position: relative;
  overflow: hidden;
}

.category-tab-active {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
}

.category-tab-inactive {
  background: #f8fafc;
  color: #64748b;
}

.category-tab-inactive:hover {
  background: #e2e8f0;
  color: #475569;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.category-tab-content {
  text-align: center;
}

.category-icon {
  font-size: 2rem;
  margin-bottom: 8px;
  display: block;
}

.category-label {
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 4px;
  line-height: 1.2;
}

.category-description {
  font-size: 0.75rem;
  opacity: 0.8;
  line-height: 1.3;
}

.category-select {
  width: 100%;
  padding: 12px 16px;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.875rem;
  color: #475569;
  cursor: pointer;
}

.category-select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* レスポンシブ調整 */
@media (max-width: 1200px) {
  .category-tabs {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .category-tabs {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .category-icon {
    font-size: 1.5rem;
  }
  
  .category-label {
    font-size: 0.75rem;
  }
  
  .category-description {
    font-size: 0.625rem;
  }
}

@media (min-width: 768px) {
  .md\\:block {
    display: block !important;
  }
  
  .md\\:hidden {
    display: none !important;
  }
}

.hidden {
  display: none;
}
</style>
