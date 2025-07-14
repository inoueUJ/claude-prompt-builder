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

const decisionFields: FormField[] = [
  // 基本設定グループ
  {
    key: 'role',
    label: '役割',
    placeholder: '経営コンサルタント（意思決定分析専門、MBA取得、ロジカルシンキング研修講師、大手企業の戦略立案支援20年）',
    type: 'text',
    required: true,
    group: '🎭 基本設定'
  },
  {
    key: 'instructions',
    label: 'メイン指示',
    placeholder: '新オフィス移転について3つの候補地から最適な選択肢を決定してください。定量・定性両面から分析し、リスクも考慮した意思決定プロセスを提示してください',
    type: 'textarea',
    required: true,
    group: '🎭 基本設定'
  },
  {
    key: 'context',
    label: '背景・状況',
    placeholder: '従業員100名のIT企業、現オフィスの賃貸契約満了、リモートワーク併用、クライアント訪問頻度は月10回程度、予算制約あり',
    type: 'textarea',
    group: '🎭 基本設定'
  },

  // 意思決定設定グループ
  {
    key: 'options',
    label: '選択肢',
    placeholder: 'A案:渋谷（家賃月500万円、駅徒歩3分、面積800㎡）B案:品川（家賃月350万円、駅徒歩7分、面積900㎡）C案:大手町（家賃月800万円、駅徒歩1分、面積700㎡）',
    type: 'textarea',
    group: '⚖️ 意思決定設定'
  },
  {
    key: 'alternatives',
    label: '代替案・補足選択肢',
    placeholder: 'サテライトオフィス併用、完全リモート移行、現オフィス契約延長、共有オフィス（WeWork等）活用、郊外オフィス+都心サテライト',
    type: 'text',
    group: '⚖️ 意思決定設定'
  },
  {
    key: 'evaluation_criteria_decision',
    label: '評価基準・観点',
    placeholder: 'コスト（30%）、アクセス性（25%）、従業員満足度（20%）、クライアント利便性（15%）、将来拡張性（10%）',
    type: 'textarea',
    group: '⚖️ 意思決定設定'
  },
  {
    key: 'weightings',
    label: '重み付け・優先順位',
    placeholder: '最重要:コスト効率、重要:従業員通勤利便性、やや重要:ブランドイメージ、参考程度:近隣施設充実度、最低条件:法的コンプライアンス',
    type: 'text',
    group: '⚖️ 意思決定設定'
  },
  {
    key: 'risk_factors',
    label: 'リスク要因',
    placeholder: '賃料上昇リスク、地震等災害リスク、交通機関停止リスク、人材採用への影響、競合他社との距離、経済状況変化への対応',
    type: 'textarea',
    group: '⚖️ 意思決定設定'
  },
  {
    key: 'decision_deadline',
    label: '決定期限・タイムライン',
    placeholder: '最終決定:3週間後、契約手続き:1ヶ月、引越作業:2ヶ月、業務開始:現契約満了の1週間前までに完了必須',
    type: 'text',
    group: '⚖️ 意思決定設定'
  },

  // 制約・出力設定グループ
  {
    key: 'constraints',
    label: '制約条件',
    placeholder: '予算上限月700万円、最低面積600㎡以上、駅徒歩10分以内、セキュリティレベル確保、バリアフリー対応、駐車場10台以上',
    type: 'textarea',
    group: '⚙️ 制約・出力設定'
  },
  {
    key: 'output_format',
    label: '出力形式',
    placeholder: 'エグゼクティブサマリー + 詳細比較表 + スコアリング結果 + リスク分析マトリックス + 推奨案と根拠 + 実行計画 + 意思決定フレームワーク',
    type: 'text',
    group: '⚙️ 制約・出力設定'
  }
]
</script>

<template>
  <div class="view-container">
    <!-- 入力フォーム -->
    <PromptForm 
      :fields="decisionFields"
      title="意思決定・評価"
      icon="⚖️"
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
