import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// === 改善版: 統合されたプロンプトフォーム構造 ===
export interface PromptFormData {
  // === 6つの基本カテゴリー ===
  role: string // 役割・背景
  context: string // 背景・状況
  goals: string // 目的・目標
  constraints: string // 制約・条件
  thinking: string // 思考・分析枠組み
  instructions: string // 具体的指示
  references: string // 参考・例
  style: string // スタイル・トーン
  output_format: string // 出力形式
  deliverables: string // 成果物

  // === 技術特化フィールド ===
  tech_stack: string // 技術スタック統合

  // === 特化情報統合フィールド ===
  specialization: string // カテゴリー特化情報

  // === メタ情報 ===
  category: string // 選択中のカテゴリー
  template_type: string // テンプレートタイプ
}

// カテゴリー定義
export const CATEGORIES = {
  business: 'ビジネス戦略・意思決定',
  writing: '文章校正',
  tech: '技術開発・実装',
  education: '教育・説明',
  creative: 'クリエイティブ',
  code_review: 'コードレビュー',
  system_design: 'システム設計',
  learning: '学習・技術調査',
  process: 'プロセス改善',
  troubleshooting: 'トラブルシューティング',
  ux: 'UX最適化',
  ai_prompt: 'AIプロンプト',
  data_analysis: 'データ分析・可視化',
} as const

export type CategoryKey = keyof typeof CATEGORIES

// カテゴリー別特化タグ名マッピング
const CATEGORY_SPECIALIZATION_TAGS: Record<CategoryKey, string> = {
  business: 'business_analysis',
  writing: 'writing_details',
  tech: 'technical_details',
  education: 'learning_design',
  creative: 'creative_direction',
  code_review: 'review_criteria',
  system_design: 'architecture_details',
  learning: 'learning_context',
  process: 'process_details',
  troubleshooting: 'problem_context',
  ux: 'ux_requirements',
  ai_prompt: 'prompt_design',
  data_analysis: 'analysis_requirements',
}

// カテゴリー別表示フィールド定義
const CATEGORY_VISIBLE_FIELDS: Record<CategoryKey, string[]> = {
  business: [
    'role',
    'context',
    'goals',
    'thinking',
    'instructions',
    'references',
    'output_format',
    'deliverables',
  ],
  writing: ['role', 'context', 'goals', 'style', 'instructions', 'references', 'output_format'],
  tech: [
    'role',
    'context',
    'goals',
    'tech_stack',
    'constraints',
    'thinking',
    'instructions',
    'output_format',
    'deliverables',
  ],
  education: [
    'role',
    'context',
    'goals',
    'thinking',
    'instructions',
    'references',
    'style',
    'output_format',
  ],
  creative: [
    'role',
    'context',
    'goals',
    'style',
    'instructions',
    'references',
    'output_format',
    'deliverables',
  ],
  code_review: [
    'role',
    'context',
    'goals',
    'tech_stack',
    'constraints',
    'thinking',
    'instructions',
    'output_format',
  ],
  system_design: [
    'role',
    'context',
    'goals',
    'tech_stack',
    'constraints',
    'thinking',
    'instructions',
    'output_format',
    'deliverables',
  ],
  learning: ['role', 'context', 'goals', 'thinking', 'instructions', 'references', 'output_format'],
  process: [
    'role',
    'context',
    'goals',
    'constraints',
    'thinking',
    'instructions',
    'output_format',
    'deliverables',
  ],
  troubleshooting: [
    'role',
    'context',
    'goals',
    'constraints',
    'thinking',
    'instructions',
    'output_format',
  ],
  ux: [
    'role',
    'context',
    'goals',
    'constraints',
    'thinking',
    'instructions',
    'references',
    'output_format',
    'deliverables',
  ],
  ai_prompt: [
    'role',
    'context',
    'goals',
    'thinking',
    'instructions',
    'references',
    'output_format',
  ],
  data_analysis: [
    'role',
    'context',
    'goals',
    'tech_stack',
    'constraints',
    'thinking',
    'instructions',
    'output_format',
    'deliverables',
  ],
}

export const usePromptStore = defineStore('prompt', () => {
  // State
  const currentTab = ref<string>('business')
  const formData = ref<PromptFormData>({
    // 基本カテゴリー
    role: '',
    context: '',
    goals: '',
    constraints: '',
    thinking: '',
    instructions: '',
    references: '',
    style: '',
    output_format: '',
    deliverables: '',

    // 技術特化
    tech_stack: '',

    // 特化情報統合
    specialization: '',

    // メタ情報
    category: 'business',
    template_type: 'standard',
  })

  // ⚡ Bolt Optimization: Extract static array to avoid allocation on every computed recalculation
  const OUTPUT_ORDER: (keyof PromptFormData)[] = [
    'role',
    'context',
    'goals',
    'tech_stack',
    'constraints',
    'thinking',
    'instructions',
    'references',
    'style',
    'output_format',
    'deliverables',
  ]

  // Getters
  const generatedPrompt = computed(() => {
    const parts: string[] = []
    const category = formData.value.category as CategoryKey

    // 基本フィールドの出力
    for (let i = 0; i < OUTPUT_ORDER.length; i++) {
      const field = OUTPUT_ORDER[i]
      const value = formData.value[field]
      if (value && typeof value === 'string' && value.trim()) {
        parts.push(`<${field}>\n${value.trim()}\n</${field}>`)
      }
    }

    // 特化情報の出力
    if (formData.value.specialization && formData.value.specialization.trim()) {
      const specializationTag = CATEGORY_SPECIALIZATION_TAGS[category]
      parts.push(
        `<${specializationTag}>\n${formData.value.specialization.trim()}\n</${specializationTag}>`,
      )
    }

    return parts.join('\n\n')
  })

  // 現在のカテゴリーで表示すべきフィールドを取得
  const visibleFields = computed(() => {
    const category = formData.value.category as CategoryKey
    return CATEGORY_VISIBLE_FIELDS[category] || ['role', 'context', 'instructions', 'output_format']
  })

  // ⚡ Bolt Optimization: Extract static presets to avoid recreating the object on every function call
  const CATEGORY_PRESETS: Record<CategoryKey, string> = {
    business: `分析対象：\n分析手法：SWOT分析、3C分析\nステークホルダー：\n期間：\n予算：`,
    writing: `対象読者：\n文章の目的：\n文字数：\nトーン：\n構成：`,
    tech: `プログラミング言語：\nフレームワーク：\n技術要件：\n環境：\nパフォーマンス要件：\nセキュリティ要件：`,
    education: `受講者レベル：\n学習目標：\n前提知識：\n説明方法：\nチェックポイント：`,
    creative: `クリエイティブ方向性：\n対象層：\nブランドトーン：\n制約条件：\nインスピレーション源：`,
    code_review: `レビュー対象：\nレビュー観点：\nコーディング標準：\nチーム状況：`,
    system_design: `システム要件：\nスケーラビリティ要件：\nセキュリティ要件：\n運用要件：`,
    learning: `学習対象：\n現在のスキルレベル：\n学習目標：\n時間制約：\n実践応用：`,
    process: `現在のプロセス：\n問題点：\nチーム構成：\n技術環境：\n品質指標：`,
    troubleshooting: `問題の概要：\nエラーログ：\nシステム環境：\n最近の変更：\nビジネスインパクト：`,
    ux: `現在の指標：\nユーザーの課題：\n対象ユーザー：\n競合分析：\n技術制約：`,
    ai_prompt: `対象AIモデル：\nプロンプト目的：\n出力構造：\nエッジケース：`,
    data_analysis: `分析対象データ：\n分析目的：\n使用ツール：\n出力形式：\n対象読者：`,
  }

  // カテゴリー別のプリセット特化情報を取得
  const getPresetSpecialization = (category: CategoryKey): string => {
    return CATEGORY_PRESETS[category] || ''
  }

  // Actions
  const updateField = (field: keyof PromptFormData, value: string) => {
    formData.value[field] = value
  }

  const setCurrentTab = (tab: string) => {
    currentTab.value = tab
    // カテゴリー変更時にcategoryフィールドも更新
    if (tab in CATEGORIES) {
      formData.value.category = tab
    }
  }

  const resetForm = () => {
    Object.keys(formData.value).forEach((key) => {
      formData.value[key as keyof PromptFormData] = ''
    })
    // カテゴリーとテンプレートタイプは保持
    formData.value.category = currentTab.value
    formData.value.template_type = 'standard'
  }

  const copyToClipboard = async (): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(generatedPrompt.value)
      return true
    } catch (error) {
      console.error('コピーに失敗しました:', error)
      return false
    }
  }

  // プリセット特化情報を設定
  const setPresetSpecialization = () => {
    const category = formData.value.category as CategoryKey
    const preset = getPresetSpecialization(category)
    updateField('specialization', preset)
  }

  // マークダウン形式のサンプルテキストを生成する関数
  const generateSampleMarkdown = () => {
    const sampleContent = `以下の手順で進めてください：

**Phase 1: 準備**
- 要件の整理を行ってください
- ステークホルダーとの合意形成を図ってください
- リソースの確保を行ってください

**Phase 2: 実行**
1. プロトタイプの作成
2. テスト実行とフィードバック収集
3. 改善と最適化

\`重要\`: 各フェーズで必ず進捗報告を行ってください

\`\`\`
// 実装例
function executePhase(phase) {
  console.log(\`Phase \${phase} を実行中...\`);
}
\`\`\``

    updateField('instructions', sampleContent)
  }

  // ⚡ Bolt Optimization: Extract static sample data to avoid object allocation on every call
  const COMMON_SAMPLES = {
    role: '経験豊富な専門家として',
    context: '現在の状況や背景を説明してください',
    goals: '達成したい目標を明確に設定してください',
    instructions: '具体的な指示や手順を記載してください',
    output_format: 'マークダウン形式で構造化された回答',
  }

  const CATEGORY_SAMPLES: Partial<Record<CategoryKey, Partial<PromptFormData>>> = {
    business: {
      role: '戦略コンサルタント（経験10年）',
      context: '新規事業参入を検討している中小企業',
      goals: '市場分析を行い、参入戦略を策定する',
      thinking: 'SWOT分析と3C分析を実施し、リスク評価を含める',
      instructions: '分析結果に基づいて、具体的な参入戦略を3つ提案してください',
    },
    writing: {
      role: '経験豊富な編集者・ライター',
      context: '企業のオウンドメディア記事作成',
      goals: 'SEOに配慮した読みやすい記事の執筆',
      style: '専門的だが親しみやすい文体',
      instructions: '指定したテーマで1500字程度の記事を作成してください',
    },
    tech: {
      role: 'シニアエンジニア（Python/FastAPI専門）',
      context: 'レガシーシステムのマイクロサービス化プロジェクト',
      goals: 'スケーラブルなAPI設計と実装',
      tech_stack: 'Python 3.11, FastAPI, PostgreSQL, Docker, AWS',
      constraints: 'レスポンス時間1秒以内、既存DB構造変更不可',
      thinking: 'Clean Architectureを採用し、段階的移行を計画',
    },
    education: {
      role: '技術教育の専門家',
      context: '新入社員向けプログラミング研修',
      goals: '基礎から実践まで体系的に学習できる教材作成',
      thinking: '段階的学習と実践演習を組み合わせたカリキュラム',
      instructions: '初心者でも理解できるよう、具体例を交えて説明してください',
    },
    creative: {
      role: 'シニアクリエイティブディレクター',
      context: '新ブランドのローンチキャンペーン',
      goals: 'ブランドアイデンティティの確立と認知度向上',
      style: 'モダンで親しみやすく、革新的なトーン',
      references: '成功事例：Apple、Nike、Airbnbのブランディング戦略',
    },
    code_review: {
      role: 'シニアソフトウェアエンジニア',
      context: 'チームのコードレビュー実施',
      goals: 'コード品質向上とチームのスキルアップ',
      tech_stack: 'TypeScript, React, Node.js',
      thinking: 'セキュリティ、パフォーマンス、保守性の観点で評価',
      instructions: 'コードの改善点と具体的な修正案を提示してください',
    },
    system_design: {
      role: 'システムアーキテクト',
      context: '大規模Webアプリケーションの設計',
      goals: 'スケーラブルで保守性の高いシステム設計',
      tech_stack: 'マイクロサービス、Kubernetes、AWS',
      constraints: '100万PV/日対応、99.9%可用性',
      thinking: 'ドメイン駆動設計とイベント駆動アーキテクチャを採用',
    },
  }

  // カテゴリー別のサンプルデータを生成
  const generateSampleData = () => {
    const category = formData.value.category as CategoryKey

    // 共通フィールドを設定
    Object.entries(COMMON_SAMPLES).forEach(([key, value]) => {
      if (visibleFields.value.includes(key)) {
        updateField(key as keyof PromptFormData, value)
      }
    })

    // カテゴリー特化フィールドを設定
    if (CATEGORY_SAMPLES[category]) {
      Object.entries(CATEGORY_SAMPLES[category]!).forEach(([key, value]) => {
        if (value && visibleFields.value.includes(key)) {
          updateField(key as keyof PromptFormData, value)
        }
      })
    }

    // 特化情報を設定
    setPresetSpecialization()
  }

  return {
    // State
    currentTab,
    formData,
    // Getters
    generatedPrompt,
    visibleFields,
    // Actions
    updateField,
    setCurrentTab,
    resetForm,
    copyToClipboard,
    setPresetSpecialization,
    generateSampleMarkdown,
    generateSampleData,
    // Constants
    CATEGORIES,
    CATEGORY_SPECIALIZATION_TAGS,
  }
})
