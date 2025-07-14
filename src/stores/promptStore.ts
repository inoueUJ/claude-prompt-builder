import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface PromptFormData {
  // 共通フィールド
  role: string
  instructions: string
  context: string
  constraints: string
  output_format: string
  
  // ビジネス分析特化
  analysis_target: string
  analysis_framework: string
  data_sources: string
  stakeholders: string
  timeframe: string
  budget_resources: string
  
  // 文章作成特化
  target_audience: string
  purpose: string
  word_count: string
  tone: string
  structure: string
  call_to_action: string

  // 技術特化
  programming_language: string
  framework: string
  technical_requirements: string
  environment: string
  performance_requirements: string
  security_requirements: string

  // 教育特化
  audience_level: string
  learning_objectives: string
  prerequisites: string
  explanation_method: string
  check_points: string
  additional_resources: string

  // クリエイティブ特化
  creative_direction: string
  target_demographic: string
  brand_tone: string
  creative_constraints: string
  inspiration_sources: string
  evaluation_criteria: string

  // 意思決定特化
  options: string
  alternatives: string
  evaluation_criteria_decision: string
  weightings: string
  risk_factors: string
  decision_deadline: string

  // === 新カテゴリ専用フィールド ===

  // コードレビュー・品質向上
  code_target: string
  review_focus: string
  coding_standards: string
  team_context: string

  // システム設計・アーキテクチャ
  system_requirements: string
  technology_stack: string
  scalability_needs: string
  security_architecture: string
  integration_requirements: string
  operational_requirements: string

  // 学習・技術調査
  learning_target: string
  current_skill_level: string
  learning_goals: string
  time_constraints: string
  practical_application: string

  // 開発プロセス改善
  current_process: string
  pain_points: string
  team_structure: string
  technology_environment: string
  quality_metrics: string
  business_requirements: string

  // トラブルシューティング・デバッグ
  problem_description: string
  error_logs: string
  system_environment: string
  recent_changes: string
  monitoring_data: string
  business_impact: string

  // プロダクト改善・UX最適化
  current_metrics: string
  user_pain_points: string
  target_users: string
  competitive_analysis: string
  technical_constraints: string
  business_goals: string

  // AI・プロンプトエンジニアリング
  ai_model_target: string
  prompt_objectives: string
  output_structure: string
  edge_cases: string

  // ツール・ユーティリティ開発
  tool_purpose: string
  target_workflows: string
  user_personas: string
  technical_stack: string
  integration_needs: string
  usability_requirements: string
}

export const usePromptStore = defineStore('prompt', () => {
  // State
  const currentTab = ref<string>('business')
  const formData = ref<PromptFormData>({
    // 共通フィールド
    role: '',
    instructions: '',
    context: '',
    constraints: '',
    output_format: '',
    
    // ビジネス分析特化
    analysis_target: '',
    analysis_framework: '',
    data_sources: '',
    stakeholders: '',
    timeframe: '',
    budget_resources: '',
    
    // 文章作成特化
    target_audience: '',
    purpose: '',
    word_count: '',
    tone: '',
    structure: '',
    call_to_action: '',

    // 技術特化
    programming_language: '',
    framework: '',
    technical_requirements: '',
    environment: '',
    performance_requirements: '',
    security_requirements: '',

    // 教育特化
    audience_level: '',
    learning_objectives: '',
    prerequisites: '',
    explanation_method: '',
    check_points: '',
    additional_resources: '',

    // クリエイティブ特化
    creative_direction: '',
    target_demographic: '',
    brand_tone: '',
    creative_constraints: '',
    inspiration_sources: '',
    evaluation_criteria: '',

    // 意思決定特化
    options: '',
    alternatives: '',
    evaluation_criteria_decision: '',
    weightings: '',
    risk_factors: '',
    decision_deadline: '',

    // === 新カテゴリ専用フィールド ===

    // コードレビュー・品質向上
    code_target: '',
    review_focus: '',
    coding_standards: '',
    team_context: '',

    // システム設計・アーキテクチャ
    system_requirements: '',
    technology_stack: '',
    scalability_needs: '',
    security_architecture: '',
    integration_requirements: '',
    operational_requirements: '',

    // 学習・技術調査
    learning_target: '',
    current_skill_level: '',
    learning_goals: '',
    time_constraints: '',
    practical_application: '',

    // 開発プロセス改善
    current_process: '',
    pain_points: '',
    team_structure: '',
    technology_environment: '',
    quality_metrics: '',
    business_requirements: '',

    // トラブルシューティング・デバッグ
    problem_description: '',
    error_logs: '',
    system_environment: '',
    recent_changes: '',
    monitoring_data: '',
    business_impact: '',

    // プロダクト改善・UX最適化
    current_metrics: '',
    user_pain_points: '',
    target_users: '',
    competitive_analysis: '',
    technical_constraints: '',
    business_goals: '',

    // AI・プロンプトエンジニアリング
    ai_model_target: '',
    prompt_objectives: '',
    output_structure: '',
    edge_cases: '',

    // ツール・ユーティリティ開発
    tool_purpose: '',
    target_workflows: '',
    user_personas: '',
    technical_stack: '',
    integration_needs: '',
    usability_requirements: ''
  })

  // Getters
  const generatedPrompt = computed(() => {
    let prompt = ''
    const fieldMapping: Record<keyof PromptFormData, string> = {
      // 共通フィールド
      role: 'role',
      instructions: 'instructions',
      context: 'context',
      constraints: 'constraints',
      output_format: 'output_format',
      
      // ビジネス分析特化
      analysis_target: 'analysis_target',
      analysis_framework: 'analysis_framework',
      data_sources: 'data_sources',
      stakeholders: 'stakeholders',
      timeframe: 'timeframe',
      budget_resources: 'budget_resources',
      
      // 文章作成特化
      target_audience: 'target_audience',
      purpose: 'purpose',
      word_count: 'word_count',
      tone: 'tone',
      structure: 'structure',
      call_to_action: 'call_to_action',

      // 技術特化
      programming_language: 'programming_language',
      framework: 'framework',
      technical_requirements: 'technical_requirements',
      environment: 'environment',
      performance_requirements: 'performance_requirements',
      security_requirements: 'security_requirements',

      // 教育特化
      audience_level: 'audience_level',
      learning_objectives: 'learning_objectives',
      prerequisites: 'prerequisites',
      explanation_method: 'explanation_method',
      check_points: 'check_points',
      additional_resources: 'additional_resources',

      // クリエイティブ特化
      creative_direction: 'creative_direction',
      target_demographic: 'target_demographic',
      brand_tone: 'brand_tone',
      creative_constraints: 'creative_constraints',
      inspiration_sources: 'inspiration_sources',
      evaluation_criteria: 'evaluation_criteria',

      // 意思決定特化
      options: 'options',
      alternatives: 'alternatives',
      evaluation_criteria_decision: 'evaluation_criteria',
      weightings: 'weightings',
      risk_factors: 'risk_factors',
      decision_deadline: 'decision_deadline',

      // === 新カテゴリ専用フィールド ===

      // コードレビュー・品質向上
      code_target: 'code_target',
      review_focus: 'review_focus',
      coding_standards: 'coding_standards',
      team_context: 'team_context',

      // システム設計・アーキテクチャ
      system_requirements: 'system_requirements',
      technology_stack: 'technology_stack',
      scalability_needs: 'scalability_needs',
      security_architecture: 'security_architecture',
      integration_requirements: 'integration_requirements',
      operational_requirements: 'operational_requirements',

      // 学習・技術調査
      learning_target: 'learning_target',
      current_skill_level: 'current_skill_level',
      learning_goals: 'learning_goals',
      time_constraints: 'time_constraints',
      practical_application: 'practical_application',

      // 開発プロセス改善
      current_process: 'current_process',
      pain_points: 'pain_points',
      team_structure: 'team_structure',
      technology_environment: 'technology_environment',
      quality_metrics: 'quality_metrics',
      business_requirements: 'business_requirements',

      // トラブルシューティング・デバッグ
      problem_description: 'problem_description',
      error_logs: 'error_logs',
      system_environment: 'system_environment',
      recent_changes: 'recent_changes',
      monitoring_data: 'monitoring_data',
      business_impact: 'business_impact',

      // プロダクト改善・UX最適化
      current_metrics: 'current_metrics',
      user_pain_points: 'user_pain_points',
      target_users: 'target_users',
      competitive_analysis: 'competitive_analysis',
      technical_constraints: 'technical_constraints',
      business_goals: 'business_goals',

      // AI・プロンプトエンジニアリング
      ai_model_target: 'ai_model_target',
      prompt_objectives: 'prompt_objectives',
      output_structure: 'output_structure',
      edge_cases: 'edge_cases',

      // ツール・ユーティリティ開発
      tool_purpose: 'tool_purpose',
      target_workflows: 'target_workflows',
      user_personas: 'user_personas',
      technical_stack: 'technical_stack',
      integration_needs: 'integration_needs',
      usability_requirements: 'usability_requirements'
    }

    // XMLプロンプト生成（改行を保持）
    Object.entries(formData.value).forEach(([key, value]) => {
      if (value && value.trim()) {
        const tagName = fieldMapping[key as keyof PromptFormData] || key
        // 改行を保持したまま処理
        const content = value.trim()
        prompt += `<${tagName}>\n${content}\n</${tagName}>\n\n`
      }
    })

    return prompt.trim()
  })

  // Actions
  const updateField = (field: keyof PromptFormData, value: string) => {
    formData.value[field] = value
  }

  const setCurrentTab = (tab: string) => {
    currentTab.value = tab
  }

  const resetForm = () => {
    Object.keys(formData.value).forEach(key => {
      formData.value[key as keyof PromptFormData] = ''
    })
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

  return {
    // State
    currentTab,
    formData,
    // Getters
    generatedPrompt,
    // Actions
    updateField,
    setCurrentTab,
    resetForm,
    copyToClipboard,
    generateSampleMarkdown
  }
})
