import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { usePromptStore } from '../promptStore'

describe('PromptStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('初期状態が正しく設定される', () => {
    const store = usePromptStore()
    
    expect(store.currentTab).toBe('business')
    expect(store.formData.role).toBe('')
    expect(store.formData.instructions).toBe('')
  })

  it('フィールドの更新ができる', () => {
    const store = usePromptStore()
    
    store.updateField('role', 'テストコンサルタント')
    store.updateField('instructions', '市場分析を実施')
    
    expect(store.formData.role).toBe('テストコンサルタント')
    expect(store.formData.instructions).toBe('市場分析を実施')
  })

  it('XMLプロンプトが正しく生成される', () => {
    const store = usePromptStore()
    
    store.updateField('role', 'マーケティングコンサルタント')
    store.updateField('instructions', '市場分析を実施してください')
    store.updateField('context', 'SaaS業界での競合分析')
    
    const prompt = store.generatedPrompt
    
    expect(prompt).toContain('<role>\nマーケティングコンサルタント\n</role>')
    expect(prompt).toContain('<instructions>\n市場分析を実施してください\n</instructions>')
    expect(prompt).toContain('<context>\nSaaS業界での競合分析\n</context>')
  })

  it('空のフィールドはXMLに含まれない', () => {
    const store = usePromptStore()
    
    store.updateField('role', 'コンサルタント')
    store.updateField('instructions', '') // 空文字
    store.updateField('context', '背景情報')
    
    const prompt = store.generatedPrompt
    
    expect(prompt).toContain('<role>')
    expect(prompt).not.toContain('<instructions>')
    expect(prompt).toContain('<context>')
  })

  it('フォームリセットが正しく動作する', () => {
    const store = usePromptStore()
    
    // データを設定
    store.updateField('role', 'テスト')
    store.updateField('instructions', 'テスト指示')
    store.updateField('context', 'テスト背景')
    
    // リセット実行
    store.resetForm()
    
    // 全フィールドが空になることを確認
    expect(store.formData.role).toBe('')
    expect(store.formData.instructions).toBe('')
    expect(store.formData.context).toBe('')
    expect(store.generatedPrompt).toBe('')
  })

  it('タブの切り替えが正しく動作する', () => {
    const store = usePromptStore()
    
    expect(store.currentTab).toBe('business')
    
    store.setCurrentTab('writing')
    expect(store.currentTab).toBe('writing')
    
    store.setCurrentTab('tech')
    expect(store.currentTab).toBe('tech')
  })

  it('複数フィールドでのXML生成テスト', () => {
    const store = usePromptStore()
    
    store.updateField('role', 'データサイエンティスト')
    store.updateField('analysis_target', 'ユーザー行動データ')
    store.updateField('analysis_framework', '統計的手法')
    store.updateField('constraints', '個人情報保護')
    
    const prompt = store.generatedPrompt
    
    expect(prompt.split('\n').filter(line => line.includes('<') && line.includes('>'))).toHaveLength(8) // 開始・終了タグ
  })
})
