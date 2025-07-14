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

const educationFields: FormField[] = [
  // 基本設定グループ
  {
    key: 'role',
    label: '役割',
    placeholder: '教育コンサルタント兼研修講師（企業研修15年、インストラクショナルデザイン修士、認定ファシリテーター）',
    type: 'text',
    required: true,
    group: '🎭 基本設定'
  },
  {
    key: 'instructions',
    label: 'メイン指示',
    placeholder: 'プログラミング初心者向けに「関数」の概念を分かりやすく解説してください。実践的な例を交えながら、段階的に理解を深める教材を作成してください',
    type: 'textarea',
    required: true,
    group: '🎭 基本設定'
  },
  {
    key: 'context',
    label: '背景・状況',
    placeholder: '社内研修プログラム（非エンジニア向け）、参加者20名、IT知識はメール・Excel程度、3時間のワークショップ形式',
    type: 'textarea',
    group: '🎭 基本設定'
  },

  // 教育設定グループ
  {
    key: 'audience_level',
    label: '対象者レベル',
    placeholder: '完全初心者（プログラミング経験なし）、但しExcel関数は使用経験あり、論理的思考力は高め（営業・企画職）',
    type: 'text',
    group: '🎓 教育設定'
  },
  {
    key: 'learning_objectives',
    label: '学習目標',
    placeholder: '1) 関数の概念と役割を理解 2) 簡単な関数を読める 3) 基本的な関数を書ける 4) デバッグの基本を身につける 5) エンジニアとのコミュニケーション向上',
    type: 'textarea',
    group: '🎓 教育設定'
  },
  {
    key: 'prerequisites',
    label: '前提知識',
    placeholder: 'パソコン基本操作、Excel基本関数（SUM、IF等）、基本的な数学知識（四則演算、論理演算）、問題解決への意欲',
    type: 'text',
    group: '🎓 教育設定'
  },
  {
    key: 'explanation_method',
    label: '説明方法',
    placeholder: '日常生活の例え話から開始→Excel関数との類推→プログラミング関数へ発展。実習重視、ペアワーク取り入れ、小さな成功体験を積み重ね',
    type: 'textarea',
    group: '🎓 教育設定'
  },
  {
    key: 'check_points',
    label: '確認事項・練習問題',
    placeholder: '各章末に理解度チェック、実践的なコーディング課題、エラー修正問題、復習クイズ（選択式・記述式）、グループディスカッション',
    type: 'textarea',
    group: '🎓 教育設定'
  },
  {
    key: 'additional_resources',
    label: '補足資料',
    placeholder: '参考書籍リスト、オンライン学習サイト、復習用動画、チートシート、よくある質問集、次ステップへの学習ロードマップ',
    type: 'text',
    group: '🎓 教育設定'
  },

  // 制約・出力設定グループ
  {
    key: 'constraints',
    label: '制約条件',
    placeholder: '3時間の研修時間、PCは各自持参、インターネット接続あり、専門用語は最小限、挫折させない配慮必須',
    type: 'textarea',
    group: '⚙️ 制約・出力設定'
  },
  {
    key: 'output_format',
    label: '出力形式',
    placeholder: '講師用ガイド + 受講者用テキスト + スライド資料 + 実習用コード + 評価シート + 持ち帰り用まとめ資料',
    type: 'text',
    group: '⚙️ 制約・出力設定'
  }
]
</script>

<template>
  <div class="view-container">
    <!-- 入力フォーム -->
    <PromptForm 
      :fields="educationFields"
      title="教育・説明"
      icon="🎓"
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
