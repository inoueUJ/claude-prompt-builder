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

const creativeFields: FormField[] = [
  // 基本設定グループ
  {
    key: 'role',
    label: '役割',
    placeholder: 'クリエイティブディレクター（広告代理店勤務12年、カンヌライオンズ受賞歴、ブランド戦略&キャンペーン企画専門）',
    type: 'text',
    required: true,
    group: '🎭 基本設定'
  },
  {
    key: 'instructions',
    label: 'メイン指示',
    placeholder: '新商品「エコフレンドリー・コーヒーカップ」の統合マーケティングキャンペーンを企画してください。環境意識の高いミレニアル世代をターゲットとした革新的なアイデアを提案してください',
    type: 'textarea',
    required: true,
    group: '🎭 基本設定'
  },
  {
    key: 'context',
    label: '背景・状況',
    placeholder: '持続可能性にこだわる新興コーヒーブランド、競合は大手チェーン店、予算は中規模、SNSでのバイラル効果を狙いたい、3ヶ月のキャンペーン期間',
    type: 'textarea',
    group: '🎭 基本設定'
  },

  // クリエイティブ設定グループ
  {
    key: 'creative_direction',
    label: 'クリエイティブ方向性',
    placeholder: 'ナチュラル・サステナブル・革新的・親しみやすい。アースカラー基調、手作り感のあるビジュアル、本物志向、ライフスタイル提案型',
    type: 'text',
    group: '🎨 クリエイティブ設定'
  },
  {
    key: 'target_demographic',
    label: 'ターゲット',
    placeholder: 'ミレニアル世代（25-40歳）、環境意識が高い、都市部在住、年収400-800万円、SNSアクティブユーザー、サードウェーブコーヒー愛好家',
    type: 'text',
    group: '🎨 クリエイティブ設定'
  },
  {
    key: 'brand_tone',
    label: 'ブランドトーン',
    placeholder: '誠実で温かみがあり、教育的だが説教臭くない。専門性を感じさせつつフレンドリー。環境への愛情と責任感を表現',
    type: 'text',
    group: '🎨 クリエイティブ設定'
  },
  {
    key: 'creative_constraints',
    label: '制作制約',
    placeholder: '予算2000万円、制作期間6週間、複数チャネル展開必須、測定可能なKPI設定、法的コンプライアンス遵守、競合との差別化明確',
    type: 'textarea',
    group: '🎨 クリエイティブ設定'
  },
  {
    key: 'inspiration_sources',
    label: 'インスピレーション・参考事例',
    placeholder: 'パタゴニアの環境キャンペーン、アイスランドの観光プロモーション、スターバックスの限定商品戦略、無印良品のライフスタイル提案',
    type: 'text',
    group: '🎨 クリエイティブ設定'
  },
  {
    key: 'evaluation_criteria',
    label: '評価基準',
    placeholder: 'ブランド認知度向上（30%）、売上目標達成（25%）、エンゲージメント率（20%）、話題性・PR効果（15%）、持続可能性メッセージ浸透（10%）',
    type: 'textarea',
    group: '🎨 クリエイティブ設定'
  },

  // 制約・出力設定グループ
  {
    key: 'constraints',
    label: '制約条件',
    placeholder: 'グリーンウォッシュ回避、データ根拠明記、多様性配慮、アクセシビリティ対応、炎上リスク回避、競合の知的財産権侵害回避',
    type: 'textarea',
    group: '⚙️ 制約・出力設定'
  },
  {
    key: 'output_format',
    label: '出力形式',
    placeholder: 'キャンペーン概要書 + クリエイティブ案 + 実施スケジュール + 予算配分 + KPI設定 + リスク評価 + 次フェーズ提案',
    type: 'text',
    group: '⚙️ 制約・出力設定'
  }
]
</script>

<template>
  <div class="view-container">
    <!-- 入力フォーム -->
    <PromptForm 
      :fields="creativeFields"
      title="クリエイティブ・企画"
      icon="🎨"
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
