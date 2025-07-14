import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    redirect: '/business'
  },
  {
    path: '/business',
    name: 'business',
    component: () => import('@/views/BusinessAnalysisView.vue'),
    meta: {
      title: 'ビジネス分析・戦略',
      icon: '📊',
      description: '市場分析、競合調査、事業計画、SWOT分析'
    }
  },
  {
    path: '/writing',
    name: 'writing',
    component: () => import('@/views/WritingView.vue'),
    meta: {
      title: '文章・コンテンツ作成',
      icon: '✍️',
      description: '記事、メール、プレゼン、提案書、SNS投稿'
    }
  },
  {
    path: '/tech',
    name: 'tech',
    component: () => import('@/views/TechnicalView.vue'),
    meta: {
      title: '技術・プログラミング',
      icon: '💻',
      description: 'コード生成、デバッグ、技術文書、システム設計'
    }
  },
  {
    path: '/education',
    name: 'education',
    component: () => import('@/views/EducationView.vue'),
    meta: {
      title: '教育・説明',
      icon: '🎓',
      description: '解説、チュートリアル、研修資料、FAQ'
    }
  },
  {
    path: '/creative',
    name: 'creative',
    component: () => import('@/views/CreativeView.vue'),
    meta: {
      title: 'クリエイティブ・企画',
      icon: '🎨',
      description: 'アイデア発想、企画書、キャンペーン、ネーミング'
    }
  },
  {
    path: '/decision',
    name: 'decision',
    component: () => import('@/views/DecisionView.vue'),
    meta: {
      title: '意思決定・評価',
      icon: '⚖️',
      description: '選択肢比較、リスク評価、優先順位付け'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
