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

const businessFields: FormField[] = [
  // 基本設定グループ
  {
    key: 'role',
    label: '役割',
    placeholder: 'データ分析に精通した経営コンサルタント（MBA取得、戦略立案15年の実績）',
    type: 'text',
    required: true,
    group: '🎭 基本設定'
  },
  {
    key: 'instructions',
    label: 'メイン指示',
    placeholder: `競合3社（A社、B社、C社）の市場シェアと差別化戦略を詳細に比較分析し、我が社のSaaS事業参入における最適なポジショニングと具体的な戦略を提案してください。

以下の観点で分析してください：
- 市場規模と成長性
- 競合の強み・弱み
- 参入機会の特定

**重要**: 数値データに基づく定量分析を重視してください`,
    type: 'textarea',
    required: true,
    group: '🎭 基本設定'
  },
  {
    key: 'context',
    label: '背景・状況',
    placeholder: `当社は従業員50名のIT企業。既存事業は受託開発中心（年商3億円）。中小企業向けSaaSサービス参入を検討中。

**市場概況**:
- 市場規模: 年間1000億円
- 成長率: 15%
- 主要プレイヤー: 大手3社が60%のシェア`,
    type: 'textarea',
    group: '🎭 基本設定'
  },

  // 分析設定グループ
  {
    key: 'analysis_target',
    label: '分析対象',
    placeholder: '中小企業向けSaaSサービス市場（HR、会計、営業支援分野）における競合企業とそのビジネスモデル',
    type: 'text',
    group: '📊 分析設定'
  },
  {
    key: 'analysis_framework',
    label: '分析手法',
    placeholder: `以下のフレームワークを組み合わせ:
- 3C分析（Company/Competitor/Customer）
- PEST分析（Political/Economic/Social/Technical）
- ポーターの5フォース分析`,
    type: 'textarea',
    group: '📊 分析設定'
  },
  {
    key: 'data_sources',
    label: 'データソース',
    placeholder: `利用可能なデータソース:
- 業界レポート（ITR、ガートナー）
- 競合他社のIR資料
- 顧客アンケート結果（n=500）
- 業界専門誌の分析記事
- 公開財務データ`,
    type: 'textarea',
    group: '📊 分析設定'
  },
  {
    key: 'stakeholders',
    label: 'ステークホルダー',
    placeholder: '代表取締役、事業企画部門（3名）、プロダクト開発チーム（8名）、営業部門（5名）、マーケティング部門（2名）',
    type: 'text',
    group: '📊 分析設定'
  },
  {
    key: 'timeframe',
    label: '時間軸',
    placeholder: '調査期間4週間、分析結果の有効期間6ヶ月、戦略実行期間18ヶ月を想定',
    type: 'text',
    group: '📊 分析設定'
  },
  {
    key: 'budget_resources',
    label: '予算・リソース',
    placeholder: '調査予算300万円、専任アサイン2名、外部コンサル活用可、開発リソース5名体制で並行検討',
    type: 'text',
    group: '📊 分析設定'
  },

  // 制約・出力設定グループ
  {
    key: 'constraints',
    label: '制約条件',
    placeholder: `必須条件:
- 既存事業との相乗効果必須
- 初期投資は5000万円以内
- 12ヶ月以内でのβ版リリース必須
- 法的コンプライアンス完全遵守`,
    type: 'textarea',
    group: '⚙️ 制約・出力設定'
  },
  {
    key: 'output_format',
    label: '出力形式',
    placeholder: 'エグゼクティブサマリー（A4 1ページ）+ 詳細分析（10-15ページ）+ 具体的アクションプラン（ガントチャート形式）+ リスク評価マトリックス',
    type: 'text',
    group: '⚙️ 制約・出力設定'
  }
]
</script>

<template>
  <div class="view-container">
    <!-- 入力フォーム -->
    <PromptForm 
      :fields="businessFields"
      title="ビジネス分析・戦略"
      icon="📊"
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
