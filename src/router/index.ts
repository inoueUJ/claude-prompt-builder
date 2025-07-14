import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    redirect: '/business',
  },
  {
    path: '/business',
    name: 'business',
    component: () => import('@/views/PromptBuilderView.vue'),
    meta: {
      title: 'ビジネス分析・戦略',
      icon: '📊',
      description: '市場分析、競合調査、事業計画、SWOT分析',
    },
  },
  {
    path: '/writing',
    name: 'writing',
    component: () => import('@/views/PromptBuilderView.vue'),
    meta: {
      title: '文章・コンテンツ作成',
      icon: '✍️',
      description: '記事、メール、プレゼン、提案書、SNS投稿',
    },
  },
  {
    path: '/tech',
    name: 'tech',
    component: () => import('@/views/PromptBuilderView.vue'),
    meta: {
      title: '技術・プログラミング',
      icon: '💻',
      description: 'コード生成、デバッグ、技術文書、システム設計',
    },
  },
  {
    path: '/education',
    name: 'education',
    component: () => import('@/views/PromptBuilderView.vue'),
    meta: {
      title: '教育・説明',
      icon: '🎓',
      description: '解説、チュートリアル、研修資料、FAQ',
    },
  },
  {
    path: '/creative',
    name: 'creative',
    component: () => import('@/views/PromptBuilderView.vue'),
    meta: {
      title: 'クリエイティブ・企画',
      icon: '🎨',
      description: 'アイデア発想、企画書、キャンペーン、ネーミング',
    },
  },
  {
    path: '/decision',
    name: 'decision',
    component: () => import('@/views/PromptBuilderView.vue'),
    meta: {
      title: '意思決定・評価',
      icon: '⚖️',
      description: '選択肢比較、リスク評価、優先順位付け',
    },
  },

  {
    path: '/code-review',
    name: 'code_review',
    component: () => import('@/views/PromptBuilderView.vue'),
    meta: {
      title: 'コードレビュー・品質向上',
      icon: '🔍',
      description: 'コード品質分析、リファクタリング提案、ベストプラクティス適用',
    },
  },
  {
    path: '/system-design',
    name: 'system_design',
    component: () => import('@/views/PromptBuilderView.vue'),
    meta: {
      title: 'システム設計・アーキテクチャ',
      icon: '🏗️',
      description: '大規模システム設計、マイクロサービス、インフラ構成',
    },
  },
  {
    path: '/learning',
    name: 'learning',
    component: () => import('@/views/PromptBuilderView.vue'),
    meta: {
      title: '学習・技術調査',
      icon: '📚',
      description: '新技術調査、学習ロードマップ、技術選定支援',
    },
  },
  {
    path: '/dev-process',
    name: 'dev_process',
    component: () => import('@/views/PromptBuilderView.vue'),
    meta: {
      title: '開発プロセス改善',
      icon: '⚡',
      description: 'CI/CD最適化、自動化、開発効率向上、ワークフロー改善',
    },
  },
  {
    path: '/troubleshooting',
    name: 'troubleshooting',
    component: () => import('@/views/PromptBuilderView.vue'),
    meta: {
      title: 'トラブルシューティング・デバッグ',
      icon: '🐛',
      description: 'バグ調査、障害対応、パフォーマンス問題解決',
    },
  },
  {
    path: '/ux-optimization',
    name: 'ux_optimization',
    component: () => import('@/views/PromptBuilderView.vue'),
    meta: {
      title: 'プロダクト改善・UX最適化',
      icon: '🎨',
      description: 'ユーザビリティ向上、コンバージョン改善、UI/UX最適化',
    },
  },
  {
    path: '/ai-prompt',
    name: 'ai_prompt',
    component: () => import('@/views/PromptBuilderView.vue'),
    meta: {
      title: 'AI・プロンプトエンジニアリング',
      icon: '🤖',
      description: 'プロンプト設計、AI活用最適化、LLM活用戦略',
    },
  },
  {
    path: '/tool-development',
    name: 'tool_development',
    component: () => import('@/views/PromptBuilderView.vue'),
    meta: {
      title: 'ツール・ユーティリティ開発',
      icon: '🔧',
      description: 'CLI作成、自動化ツール、業務効率化スクリプト',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
