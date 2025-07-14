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
    <div class="category-tabs-container">
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
            <div class="category-description visually-hidden">{{ tab.description }}</div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.category-navigation {
  margin-bottom: 12px;
  background: transparent;
  box-shadow: none;
  padding: 0;
}

.category-tabs-container {
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
}

.category-tabs-container::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

.category-tabs {
  display: flex;
  gap: 8px;
  min-width: max-content;
}

.category-tab {
  padding: 6px 14px;
  border: 1px solid #d1d5db;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: white;
}

.category-tab-active {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

.category-tab-inactive {
  color: #374151;
}

.category-tab-inactive:hover {
  background: #f3f4f6;
  border-color: #9ca3af;
}

.category-tab-content {
  display: flex;
  align-items: center;
  gap: 6px;
}

.category-icon {
  font-size: 0.9rem;
}

.category-label {
  font-weight: 500;
  font-size: 0.8rem;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .category-tabs {
    gap: 6px;
  }

  .category-tab {
    padding: 5px 12px;
  }

  .category-icon {
    font-size: 0.8rem;
  }

  .category-label {
    font-size: 0.75rem;
  }

  .category-description {
    display: none;
  }
}
</style>