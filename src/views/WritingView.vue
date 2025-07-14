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

const writingFields: FormField[] = [
  // 基本設定グループ
  {
    key: 'role',
    label: '役割',
    placeholder: '経験豊富なコピーライター兼コンテンツマーケター（広告代理店勤務10年、受賞歴多数）',
    type: 'text',
    required: true,
    group: '🎭 基本設定'
  },
  {
    key: 'instructions',
    label: 'メイン指示',
    placeholder: `新商品発表用のプレスリリースを作成してください。読者の興味を引き、メディアに取り上げられやすい魅力的な内容で構成してください。

**求める要素**:
- インパクトのある見出し
- 具体的なメリットと数値
- 読者の関心を引く構成

以下の手順で作成してください：
1. 注目を集める見出しの作成
2. 課題とソリューションの明確化
3. 具体的なベネフィットの提示`,
    type: 'textarea',
    required: true,
    group: '🎭 基本設定'
  },
  {
    key: 'context',
    label: '背景・状況',
    placeholder: `**商品概要**:
AI搭載の業務効率化ツールを開発
- 従来比50%の作業時間短縮を実現
- 中小企業のDX推進支援が目的
- 競合他社との差別化ポイントは直感的UI

**市場状況**: DX需要が急拡大中`,
    type: 'textarea',
    group: '🎭 基本設定'
  },

  // 文章設定グループ
  {
    key: 'target_audience',
    label: '対象読者',
    placeholder: 'IT業界記者、中小企業経営者、人事・総務担当者、DX推進担当者（30-50代、IT知識は中級レベル）',
    type: 'text',
    group: '✍️ 文章設定'
  },
  {
    key: 'purpose',
    label: '文章の目的',
    placeholder: `主要目的:
- メディア露出による認知度向上
- 潜在顧客の獲得
- 業界専門家からの信頼獲得
- 投資家へのアピール`,
    type: 'textarea',
    group: '✍️ 文章設定'
  },
  {
    key: 'word_count',
    label: '文字数・長さ',
    placeholder: '1200-1500文字（A4用紙1枚程度）、見出し5-7個、各セクション200-300文字',
    type: 'text',
    group: '✍️ 文章設定'
  },
  {
    key: 'tone',
    label: '文体・トーン',
    placeholder: 'プロフェッショナルで信頼性があり、かつ親しみやすい。専門用語は使用するが分かりやすく説明。前向きで革新的な印象',
    type: 'text',
    group: '✍️ 文章設定'
  },
  {
    key: 'structure',
    label: '構成・流れ',
    placeholder: `推奨構成:
1. **インパクトのある見出し**
2. **課題提起** - 現在の問題点
3. **ソリューション紹介** - 商品の特徴
4. **具体的メリット** - 数値での効果
5. **実績・データ** - 導入事例
6. **今後の展望** - ロードマップ
7. **問い合わせ先** - CTA`,
    type: 'textarea',
    group: '✍️ 文章設定'
  },
  {
    key: 'call_to_action',
    label: '行動喚起',
    placeholder: '無料体験版の申し込み、デモンストレーション予約、資料ダウンロード、メディア関係者向け説明会への参加',
    type: 'text',
    group: '✍️ 文章設定'
  },

  // 制約・出力設定グループ
  {
    key: 'constraints',
    label: '制約条件',
    placeholder: `遵守事項:
- 薬機法・景表法遵守
- 競合他社の誹謗中傷禁止
- 誇大表現回避
- データの根拠明記
- 著作権侵害回避`,
    type: 'textarea',
    group: '⚙️ 制約・出力設定'
  },
  {
    key: 'output_format',
    label: '出力形式',
    placeholder: 'プレスリリース形式（ヘッダー、日付、見出し、本文、企業情報、お問い合わせ先）、HTML版とテキスト版両方',
    type: 'text',
    group: '⚙️ 制約・出力設定'
  }
]
</script>

<template>
  <div class="view-container">
    <!-- 入力フォーム -->
    <PromptForm 
      :fields="writingFields"
      title="文章・コンテンツ作成"
      icon="✍️"
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
