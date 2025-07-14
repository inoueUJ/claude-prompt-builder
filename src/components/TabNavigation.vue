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
    description: '市場分析・競合調査',
  },
  {
    id: 'writing',
    icon: '✍️',
    label: '文章作成',
    description: '記事・メール・提案書',
  },
  {
    id: 'tech',
    icon: '💻',
    label: '技術',
    description: 'コード・技術文書',
  },
  {
    id: 'education',
    icon: '🎓',
    label: '教育・説明',
    description: '解説・チュートリアル',
  },
  {
    id: 'creative',
    icon: '🎨',
    label: 'クリエイティブ',
    description: '企画・アイデア発想',
  },
  {
    id: 'decision',
    icon: '⚖️',
    label: '意思決定',
    description: '選択肢比較・評価',
  },
  {
    id: 'code_review',
    icon: '🔍',
    label: 'コードレビュー',
    description: '品質向上・リファクタリング',
  },
  {
    id: 'system_design',
    icon: '🏗️',
    label: 'システム設計',
    description: 'アーキテクチャ・設計',
  },
  {
    id: 'learning',
    icon: '📚',
    label: '学習・技術調査',
    description: '新技術・スキルアップ',
  },
  {
    id: 'dev_process',
    icon: '⚡',
    label: 'プロセス改善',
    description: 'CI/CD・効率化',
  },
  {
    id: 'troubleshooting',
    icon: '🐛',
    label: 'トラブルシューティング',
    description: 'デバッグ・障害対応',
  },
  {
    id: 'ux_optimization',
    icon: '🎨',
    label: 'UX最適化',
    description: 'ユーザビリティ向上',
  },
  {
    id: 'ai_prompt',
    icon: '🤖',
    label: 'AIプロンプト',
    description: 'プロンプト設計・最適化',
  },
  {
    id: 'tool_development',
    icon: '🔧',
    label: 'ツール開発',
    description: 'ユーティリティ・自動化',
  },
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
            currentTab === tab.id ? 'category-tab-active' : 'category-tab-inactive',
          ]"
        >
          <div class="category-tab-content">
            <span class="category-icon">{{ tab.icon }}</span>
            <span class="category-label">{{ tab.label }}</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.category-navigation {
  margin-bottom: 12px;
  padding: 2px 0;
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
  padding: 0 2px; /* コンテナの端に少し余白 */
}

.category-tab {
  padding: 6px 14px;
  border: 1px solid #d1d5db;
  border-radius: 9999px; /* ピル型 */
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: white;
  flex-shrink: 0;
}

.category-tab-active {
  background-color: #3b82f6;
  color: white;
  border-color: #3b82f6;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.2);
}

.category-tab-inactive {
  color: #374151;
}

.category-tab-inactive:hover {
  background-color: #f3f4f6;
  border-color: #9ca3af;
}

.category-tab-content {
  display: flex;
  align-items: center;
  gap: 6px;
  line-height: 1;
}

.category-icon {
  font-size: 0.9rem;
}

.category-label {
  font-weight: 500;
  font-size: 0.8rem;
  white-space: nowrap;
}
</style>
