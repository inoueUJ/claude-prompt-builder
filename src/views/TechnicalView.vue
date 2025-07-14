<script setup lang="ts">
import PromptForm from '@/components/PromptForm.vue'
import PromptDisplay from '@/components/PromptDisplay.vue'
import type { PromptFormData } from '@/stores/promptStore'

interface FormField {
  key: keyof PromptFormData
  label: string
  placeholder: string
  type?: 'text' | 'textarea'
  required?: boolean
  group?: string
}

const technicalFields: FormField[] = [
  // 基本設定グループ
  {
    key: 'role',
    label: '役割',
    placeholder: 'フルスタック開発エンジニア（React/Node.js専門、AWS認定ソリューションアーキテクト、開発経験8年）',
    type: 'text',
    required: true,
    group: '🎭 基本設定'
  },
  {
    key: 'instructions',
    label: 'メイン指示',
    placeholder: 'ユーザー認証機能付きのタスク管理アプリをTypeScript + React + Express + MongoDBで構築してください。JWT認証、CRUD操作、リアルタイム更新機能を含めてください',
    type: 'textarea',
    required: true,
    group: '🎭 基本設定'
  },
  {
    key: 'context',
    label: '背景・状況',
    placeholder: 'チーム開発プロジェクト（5名）、アジャイル開発、2週間スプリント、Docker環境での開発、CI/CDパイプライン構築も必要',
    type: 'textarea',
    group: '🎭 基本設定'
  },

  // 技術設定グループ
  {
    key: 'programming_language',
    label: 'プログラミング言語',
    placeholder: 'TypeScript（厳密な型定義）、JavaScript ES2022+、HTML5、CSS3（Tailwind CSS使用）',
    type: 'text',
    group: '💻 技術設定'
  },
  {
    key: 'framework',
    label: 'フレームワーク・ライブラリ',
    placeholder: 'React 18 + Vite、Express.js、Mongoose、Socket.io（リアルタイム）、React Query（状態管理）、React Hook Form（フォーム）',
    type: 'textarea',
    group: '💻 技術設定'
  },
  {
    key: 'technical_requirements',
    label: '技術要件',
    placeholder: 'レスポンシブデザイン、PWA対応、オフライン機能、SEO最適化、アクセシビリティ（WCAG 2.1 AA準拠）、TypeScript厳密モード',
    type: 'textarea',
    group: '💻 技術設定'
  },
  {
    key: 'environment',
    label: '環境・制約',
    placeholder: 'Docker Compose、Node.js 18+、MongoDB 6.0、Redis（セッション管理）、AWS ECR/ECS（本番）、GitHub Actions（CI/CD）',
    type: 'text',
    group: '💻 技術設定'
  },
  {
    key: 'performance_requirements',
    label: 'パフォーマンス要件',
    placeholder: 'First Contentful Paint < 1.5秒、Core Web Vitals全項目Good、API応答時間 < 200ms、同時接続ユーザー1000人対応',
    type: 'text',
    group: '💻 技術設定'
  },
  {
    key: 'security_requirements',
    label: 'セキュリティ要件',
    placeholder: 'HTTPS強制、CSPヘッダー設定、XSS/CSRF対策、SQL インジェクション対策、JWT有効期限管理、パスワードハッシュ化（bcrypt）',
    type: 'textarea',
    group: '💻 技術設定'
  },

  // 制約・出力設定グループ
  {
    key: 'constraints',
    label: '制約条件',
    placeholder: '開発期間6週間、予算制限あり、既存APIとの互換性維持、IE11サポート不要、モバイルファースト設計',
    type: 'textarea',
    group: '⚙️ 制約・出力設定'
  },
  {
    key: 'output_format',
    label: '出力形式',
    placeholder: '詳細なコード例、ディレクトリ構成、package.json、README.md、デプロイ手順、テストコード例を含む完全なプロジェクト構成',
    type: 'text',
    group: '⚙️ 制約・出力設定'
  }
]
</script>

<template>
  <div class="view-container">
    <!-- 入力フォーム -->
    <PromptForm 
      :fields="technicalFields"
      title="技術・プログラミング"
      icon="💻"
    />

    <!-- 生成されたプロンプト -->
    <PromptDisplay />
  </div>
</template>

<style scoped>
.view-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 1024px) {
  .view-container {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
}

@media (min-width: 1440px) {
  .view-container {
    gap: 40px;
  }
}
</style>
