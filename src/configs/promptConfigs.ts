import type { PromptFormData } from '@/stores/promptStore'

export interface FormField {
  key: keyof PromptFormData
  label: string
  placeholder: string
  type?: 'text' | 'textarea'
  required?: boolean
  group?: string
}

export interface PromptConfig {
  title: string
  icon: string
  fields: FormField[]
}

export const promptConfigs: Record<string, PromptConfig> = {
  // ビジネス戦略・意思決定
  business: {
    title: 'ビジネス戦略・意思決定',
    icon: '📊',
    fields: [
      // 基本設定グループ
      {
        key: 'role',
        label: '役割',
        placeholder: 'データ分析に精通した経営コンサルタント（MBA取得、戦略立案15年の実績）',
        type: 'text',
        required: true,
        group: '🎭 基本設定',
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
        group: '🎭 基本設定',
      },
      {
        key: 'goals',
        label: '目標・目的',
        placeholder: `市場分析を行い、我が社の最適な参入戦略を策定する
- 競合優位性の確立
- 収益化までの具体的ロードマップ作成
- リスク評価と対策の明確化`,
        type: 'textarea',
        group: '🎭 基本設定',
      },
      {
        key: 'thinking',
        label: '分析手法・思考枠組み',
        placeholder: `以下のフレームワークを組み合わせ:
- 3C分析（Company/Competitor/Customer）
- SWOT分析（内部・外部環境の評価）
- ポーターの5フォース分析
- 定量・定性データの両面評価`,
        type: 'textarea',
        group: '📊 分析設定',
      },
      {
        key: 'instructions',
        label: 'メイン指示',
        placeholder: `競合3社（A社、B社、C社）の市場シェアと差別化戦略を詳細に比較分析し、我が社のSaaS事業参入における最適なポジショニングと具体的な戦略を提案してください。

**重点ポイント**:
- 数値データに基づく定量分析
- 参入機会の特定
- 具体的な戦略オプション3つ
- 実行可能性の評価`,
        type: 'textarea',
        required: true,
        group: '📊 分析設定',
      },
      {
        key: 'specialization',
        label: '特化情報',
        placeholder: `分析対象：中小企業向けSaaSサービス市場
データソース：業界レポート、競合IR資料、顧客アンケート
ステークホルダー：代表取締役、事業企画、プロダクト開発チーム
時間軸：調査期間4週間、戦略実行期間18ヶ月
予算・リソース：調査予算300万円、専任2名体制`,
        type: 'textarea',
        group: '📊 分析設定',
      },
      {
        key: 'constraints',
        label: '制約条件',
        placeholder: `必須条件:
- 既存事業との相乗効果必須
- 初期投資は5000万円以内
- 12ヶ月以内でのβ版リリース必須
- 法的コンプライアンス完全遵守`,
        type: 'textarea',
        group: '⚙️ 制約・出力設定',
      },
      {
        key: 'output_format',
        label: '出力形式',
        placeholder: 'エグゼクティブサマリー（A4 1ページ）+ 詳細分析（10-15ページ）+ 具体的アクションプラン（ガントチャート形式）+ リスク評価マトリックス',
        type: 'text',
        group: '⚙️ 制約・出力設定',
      },
      {
        key: 'deliverables',
        label: '成果物',
        placeholder: '戦略提案書、実行計画書、リスク分析レポート、ROI予測シート',
        type: 'text',
        group: '⚙️ 制約・出力設定',
      },
    ],
  },

  // 文章・コンテンツ作成
  writing: {
    title: '文章・コンテンツ作成',
    icon: '✍️',
    fields: [
      {
        key: 'role',
        label: '役割',
        placeholder: '経験豊富なコピーライター兼コンテンツマーケター（広告代理店勤務10年、受賞歴多数）',
        type: 'text',
        required: true,
        group: '🎭 基本設定',
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
        group: '🎭 基本設定',
      },
      {
        key: 'goals',
        label: '目標・目的',
        placeholder: `主要目的:
- メディア露出による認知度向上
- 潜在顧客の獲得
- 業界専門家からの信頼獲得
- 投資家へのアピール`,
        type: 'textarea',
        group: '🎭 基本設定',
      },
      {
        key: 'style',
        label: 'スタイル・トーン',
        placeholder: 'プロフェッショナルで信頼性があり、かつ親しみやすい。専門用語は使用するが分かりやすく説明。前向きで革新的な印象',
        type: 'text',
        group: '✍️ 文章設定',
      },
      {
        key: 'instructions',
        label: 'メイン指示',
        placeholder: `新商品発表用のプレスリリースを作成してください。読者の興味を引き、メディアに取り上げられやすい魅力的な内容で構成してください。

**求める要素**:
- インパクトのある見出し
- 具体的なメリットと数値
- 読者の関心を引く構成

構成：見出し→課題提起→ソリューション→メリット→実績→展望→問い合わせ`,
        type: 'textarea',
        required: true,
        group: '✍️ 文章設定',
      },
      {
        key: 'specialization',
        label: '特化情報',
        placeholder: `対象読者：IT業界記者、中小企業経営者、DX推進担当者
文字数：1200-1500文字（A4用紙1枚程度）
構成：見出し5-7個、各セクション200-300文字
行動喚起：無料体験版申し込み、資料ダウンロード、説明会参加`,
        type: 'textarea',
        group: '✍️ 文章設定',
      },
      {
        key: 'constraints',
        label: '制約条件',
        placeholder: `遵守事項:
- 薬機法・景表法遵守
- 競合他社の誹謗中傷禁止
- 誇大表現回避
- データの根拠明記`,
        type: 'textarea',
        group: '⚙️ 制約・出力設定',
      },
      {
        key: 'output_format',
        label: '出力形式',
        placeholder: 'プレスリリース形式（ヘッダー、日付、見出し、本文、企業情報、お問い合わせ先）、HTML版とテキスト版両方',
        type: 'text',
        group: '⚙️ 制約・出力設定',
      },
    ],
  },

  // 技術開発・実装
  tech: {
    title: '技術開発・実装',
    icon: '💻',
    fields: [
      {
        key: 'role',
        label: '役割',
        placeholder: 'フルスタック開発エンジニア（React/Node.js専門、AWS認定ソリューションアーキテクト、開発経験8年）',
        type: 'text',
        required: true,
        group: '🎭 基本設定',
      },
      {
        key: 'context',
        label: '背景・状況',
        placeholder: 'チーム開発プロジェクト（5名）、アジャイル開発、2週間スプリント、Docker環境での開発、CI/CDパイプライン構築も必要',
        type: 'textarea',
        group: '🎭 基本設定',
      },
      {
        key: 'goals',
        label: '目標・目的',
        placeholder: `主要目標:
- スケーラブルなアプリケーション構築
- 保守性の高いコード作成
- パフォーマンス最適化
- セキュリティ強化`,
        type: 'textarea',
        group: '🎭 基本設定',
      },
      {
        key: 'tech_stack',
        label: '技術スタック',
        placeholder: `言語・フレームワーク：
- フロントエンド：React 18 + TypeScript + Vite
- バックエンド：Node.js + Express.js + TypeScript
- データベース：PostgreSQL + Redis
- インフラ：AWS (ECS, RDS, ElastiCache)
- ツール：Docker, GitHub Actions`,
        type: 'textarea',
        group: '💻 技術設定',
      },
      {
        key: 'constraints',
        label: '制約条件',
        placeholder: `技術制約：
- TypeScript厳密モード必須
- レスポンス時間 < 200ms
- 同時接続ユーザー1000人対応
- PWA対応、オフライン機能
- セキュリティ：HTTPS強制、JWT認証、CSRF対策`,
        type: 'textarea',
        group: '💻 技術設定',
      },
      {
        key: 'thinking',
        label: '技術的アプローチ',
        placeholder: `設計方針：
- Clean Architecture採用
- DDD（ドメイン駆動設計）
- テスト駆動開発（TDD）
- CI/CDパイプライン構築
- 段階的リリース戦略`,
        type: 'textarea',
        group: '💻 技術設定',
      },
      {
        key: 'instructions',
        label: 'メイン指示',
        placeholder: `ユーザー認証機能付きのタスク管理アプリをTypeScript + React + Express + PostgreSQLで構築してください。

**必要機能**:
- JWT認証・認可
- CRUD操作（タスク管理）
- リアルタイム更新（WebSocket）
- レスポンシブデザイン
- 単体・統合テスト`,
        type: 'textarea',
        required: true,
        group: '💻 技術設定',
      },
      {
        key: 'output_format',
        label: '出力形式',
        placeholder: '詳細なコード例、ディレクトリ構成、package.json、README.md、デプロイ手順、テストコード例を含む完全なプロジェクト構成',
        type: 'text',
        group: '⚙️ 制約・出力設定',
      },
      {
        key: 'deliverables',
        label: '成果物',
        placeholder: '動作するアプリケーション、ソースコード、設計書、テストケース、デプロイ手順書',
        type: 'text',
        group: '⚙️ 制約・出力設定',
      },
    ],
  },

  // 教育・説明
  education: {
    title: '教育・説明',
    icon: '🎓',
    fields: [
      {
        key: 'role',
        label: '役割',
        placeholder: '教育コンサルタント兼研修講師（企業研修15年、インストラクショナルデザイン修士、認定ファシリテーター）',
        type: 'text',
        required: true,
        group: '🎭 基本設定',
      },
      {
        key: 'context',
        label: '背景・状況',
        placeholder: '社内研修プログラム（非エンジニア向け）、参加者20名、IT知識はメール・Excel程度、3時間のワークショップ形式',
        type: 'textarea',
        group: '🎭 基本設定',
      },
      {
        key: 'goals',
        label: '学習目標',
        placeholder: `到達目標:
1) 関数の概念と役割を理解
2) 簡単な関数を読める
3) 基本的な関数を書ける
4) デバッグの基本を身につける
5) エンジニアとのコミュニケーション向上`,
        type: 'textarea',
        group: '🎓 教育設定',
      },
      {
        key: 'thinking',
        label: '教育手法・アプローチ',
        placeholder: `説明方法：
- 日常生活の例え話から開始
- Excel関数との類推
- プログラミング関数へ発展
- 実習重視、ペアワーク
- 小さな成功体験を積み重ね`,
        type: 'textarea',
        group: '🎓 教育設定',
      },
      {
        key: 'instructions',
        label: 'メイン指示',
        placeholder: `プログラミング初心者向けに「関数」の概念を分かりやすく解説してください。実践的な例を交えながら、段階的に理解を深める教材を作成してください。

**教材要件**:
- 段階的な学習構成
- 実践的な演習問題
- 理解度チェック
- 復習用まとめ`,
        type: 'textarea',
        required: true,
        group: '🎓 教育設定',
      },
      {
        key: 'specialization',
        label: '特化情報',
        placeholder: `対象者：完全初心者（プログラミング経験なし）、Excel関数経験あり
前提知識：パソコン基本操作、Excel基本関数、論理的思考力
確認事項：各章末理解度チェック、実践課題、復習クイズ
補足資料：参考書籍、オンライン学習サイト、チートシート`,
        type: 'textarea',
        group: '🎓 教育設定',
      },
      {
        key: 'constraints',
        label: '制約条件',
        placeholder: '3時間の研修時間、PCは各自持参、インターネット接続あり、専門用語は最小限、挫折させない配慮必須',
        type: 'textarea',
        group: '⚙️ 制約・出力設定',
      },
      {
        key: 'output_format',
        label: '出力形式',
        placeholder: '講師用ガイド + 受講者用テキスト + スライド資料 + 実習用コード + 評価シート + 持ち帰り用まとめ資料',
        type: 'text',
        group: '⚙️ 制約・出力設定',
      },
    ],
  },

  // クリエイティブ・企画
  creative: {
    title: 'クリエイティブ・企画',
    icon: '🎨',
    fields: [
      {
        key: 'role',
        label: '役割',
        placeholder: 'クリエイティブディレクター（広告代理店勤務12年、カンヌライオンズ受賞歴、ブランド戦略&キャンペーン企画専門）',
        type: 'text',
        required: true,
        group: '🎭 基本設定',
      },
      {
        key: 'context',
        label: '背景・状況',
        placeholder: '持続可能性にこだわる新興コーヒーブランド、競合は大手チェーン店、予算は中規模、SNSでのバイラル効果を狙いたい、3ヶ月のキャンペーン期間',
        type: 'textarea',
        group: '🎭 基本設定',
      },
      {
        key: 'goals',
        label: '目標・目的',
        placeholder: `キャンペーン目標:
- ブランド認知度向上
- 環境意識の高いミレニアル世代の獲得
- SNSでのバイラル効果
- 売上目標達成`,
        type: 'textarea',
        group: '🎭 基本設定',
      },
      {
        key: 'style',
        label: 'スタイル・トーン',
        placeholder: 'ナチュラル・サステナブル・革新的・親しみやすい。アースカラー基調、手作り感のあるビジュアル、本物志向、ライフスタイル提案型',
        type: 'text',
        group: '🎨 クリエイティブ設定',
      },
      {
        key: 'instructions',
        label: 'メイン指示',
        placeholder: `新商品「エコフレンドリー・コーヒーカップ」の統合マーケティングキャンペーンを企画してください。環境意識の高いミレニアル世代をターゲットとした革新的なアイデアを提案してください。

**キャンペーン要素**:
- メインビジュアル・コピー
- SNS展開戦略
- 体験型イベント企画
- インフルエンサー連携`,
        type: 'textarea',
        required: true,
        group: '🎨 クリエイティブ設定',
      },
      {
        key: 'specialization',
        label: '特化情報',
        placeholder: `ターゲット：ミレニアル世代（25-40歳）、環境意識高い、都市部在住
ブランドトーン：誠実で温かみがあり、教育的だが説教臭くない
制作制約：予算2000万円、制作期間6週間、複数チャネル展開
参考事例：パタゴニア環境キャンペーン、スターバックス限定戦略`,
        type: 'textarea',
        group: '🎨 クリエイティブ設定',
      },
      {
        key: 'constraints',
        label: '制約条件',
        placeholder: 'グリーンウォッシュ回避、データ根拠明記、多様性配慮、アクセシビリティ対応、炎上リスク回避',
        type: 'textarea',
        group: '⚙️ 制約・出力設定',
      },
      {
        key: 'output_format',
        label: '出力形式',
        placeholder: 'キャンペーン概要書 + クリエイティブ案 + 実施スケジュール + 予算配分 + KPI設定 + リスク評価',
        type: 'text',
        group: '⚙️ 制約・出力設定',
      },
      {
        key: 'deliverables',
        label: '成果物',
        placeholder: 'キャンペーン企画書、ビジュアル案、実施計画書、効果測定プラン',
        type: 'text',
        group: '⚙️ 制約・出力設定',
      },
    ],
  },

  // 他のカテゴリーも同様に新しいフィールド構造に更新...
  // 以下、簡略化して主要なフィールドのみ定義

  code_review: {
    title: 'コードレビュー',
    icon: '🔍',
    fields: [
      { key: 'role', label: '役割', placeholder: 'シニアソフトウェアエンジニア（コードレビュー専門）', type: 'text', required: true, group: '🎭 基本設定' },
      { key: 'context', label: '背景・状況', placeholder: 'チーム開発、品質改善、新人教育', type: 'textarea', group: '🎭 基本設定' },
      { key: 'goals', label: '目標', placeholder: 'コード品質向上、チームスキルアップ', type: 'textarea', group: '🎭 基本設定' },
      { key: 'tech_stack', label: '技術スタック', placeholder: 'TypeScript, React, Node.js', type: 'text', group: '🔍 レビュー設定' },
      { key: 'thinking', label: 'レビュー観点', placeholder: 'パフォーマンス、保守性、セキュリティ', type: 'textarea', group: '🔍 レビュー設定' },
      { key: 'instructions', label: 'メイン指示', placeholder: 'コードレビューを実施し、改善提案をしてください', type: 'textarea', required: true, group: '🔍 レビュー設定' },
      { key: 'constraints', label: '制約条件', placeholder: '既存API変更不可、段階的改善', type: 'textarea', group: '⚙️ 制約・出力設定' },
      { key: 'output_format', label: '出力形式', placeholder: 'コード比較、修正案、改善理由', type: 'text', group: '⚙️ 制約・出力設定' },
    ],
  },

  system_design: {
    title: 'システム設計',
    icon: '🏗️',
    fields: [
      { key: 'role', label: '役割', placeholder: 'ソリューションアーキテクト（大規模システム設計専門）', type: 'text', required: true, group: '🎭 基本設定' },
      { key: 'context', label: '背景・状況', placeholder: '大規模システム、マイクロサービス化', type: 'textarea', group: '🎭 基本設定' },
      { key: 'goals', label: '目標', placeholder: '高可用性、スケーラビリティ、保守性', type: 'textarea', group: '🎭 基本設定' },
      { key: 'tech_stack', label: '技術スタック', placeholder: 'AWS、Kubernetes、PostgreSQL', type: 'text', group: '🏗️ 設計設定' },
      { key: 'thinking', label: '設計アプローチ', placeholder: 'マイクロサービス、DDD、イベント駆動', type: 'textarea', group: '🏗️ 設計設定' },
      { key: 'instructions', label: 'メイン指示', placeholder: 'システムアーキテクチャを設計してください', type: 'textarea', required: true, group: '🏗️ 設計設定' },
      { key: 'constraints', label: '制約条件', placeholder: '予算制限、移行期間、ダウンタイム制限', type: 'textarea', group: '⚙️ 制約・出力設定' },
      { key: 'output_format', label: '出力形式', placeholder: 'アーキテクチャ図、技術選定理由、移行計画', type: 'text', group: '⚙️ 制約・出力設定' },
      { key: 'deliverables', label: '成果物', placeholder: '設計書、移行計画、コスト見積もり', type: 'text', group: '⚙️ 制約・出力設定' },
    ],
  },

  learning: {
    title: '学習・技術調査',
    icon: '📚',
    fields: [
      { key: 'role', label: '役割', placeholder: 'テックリード兼メンター（技術調査専門）', type: 'text', required: true, group: '🎭 基本設定' },
      { key: 'context', label: '背景・状況', placeholder: 'チーム学習、新技術評価', type: 'textarea', group: '🎭 基本設定' },
      { key: 'goals', label: '学習目標', placeholder: '新技術習得、実践応用、チーム共有', type: 'textarea', group: '🎭 基本設定' },
      { key: 'thinking', label: '学習アプローチ', placeholder: '段階的学習、実践重視、理論と実践の組み合わせ', type: 'textarea', group: '📚 学習設定' },
      { key: 'instructions', label: 'メイン指示', placeholder: '技術調査と学習ロードマップを作成してください', type: 'textarea', required: true, group: '📚 学習設定' },
      { key: 'specialization', label: '特化情報', placeholder: '学習対象、現在スキル、時間制約、実践応用目標', type: 'textarea', group: '📚 学習設定' },
      { key: 'constraints', label: '制約条件', placeholder: '学習時間、無料リソース優先、業務並行', type: 'textarea', group: '⚙️ 制約・出力設定' },
      { key: 'output_format', label: '出力形式', placeholder: '学習ロードマップ、技術調査レポート、実践課題', type: 'text', group: '⚙️ 制約・出力設定' },
    ],
  },

  // 残りのカテゴリーも同様に追加...
  decision: {
    title: '意思決定・評価',
    icon: '⚖️',
    fields: [
      { key: 'role', label: '役割', placeholder: '意思決定分析家', type: 'text', required: true, group: '🎭 基本設定' },
      { key: 'context', label: '背景・状況', placeholder: '複数の選択肢、複雑な要因', type: 'textarea', group: '🎭 基本設定' },
      { key: 'goals', label: '目標', placeholder: '最適な選択肢の決定、リスク評価', type: 'textarea', group: '🎭 基本設定' },
      { key: 'instructions', label: 'メイン指示', placeholder: '意思決定を支援してください', type: 'textarea', required: true, group: '⚖️ 評価設定' },
      { key: 'specialization', label: '特化情報', placeholder: '評価基準、選択肢、重要度', type: 'textarea', group: '⚖️ 評価設定' },
      { key: 'output_format', label: '出力形式', placeholder: '評価マトリクス、推奨事項、根拠', type: 'text', group: '⚙️ 制約・出力設定' },
    ],
  },
  dev_process: {
    title: 'プロセス改善',
    icon: '⚡',
    fields: [
      { key: 'role', label: '役割', placeholder: 'DevOpsエンジニア（プロセス改善専門）', type: 'text', required: true, group: '🎭 基本設定' },
      { key: 'context', label: '背景・状況', placeholder: '開発プロセス、生産性向上', type: 'textarea', group: '🎭 基本設定' },
      { key: 'goals', label: '目標', placeholder: '生産性30%向上、品質向上', type: 'textarea', group: '🎭 基本設定' },
      { key: 'instructions', label: 'メイン指示', placeholder: 'プロセス改善案を提案してください', type: 'textarea', required: true, group: '⚡ プロセス設定' },
      { key: 'specialization', label: '特化情報', placeholder: '現在プロセス、課題、チーム構成、技術環境', type: 'textarea', group: '⚡ プロセス設定' },
      { key: 'output_format', label: '出力形式', placeholder: '改善案、実施計画、効果測定', type: 'text', group: '⚙️ 制約・出力設定' },
    ],
  },

  troubleshooting: {
    title: 'トラブルシューティング',
    icon: '🐛',
    fields: [
      { key: 'role', label: '役割', placeholder: 'シニアデバッグエンジニア（障害対応専門）', type: 'text', required: true, group: '🎭 基本設定' },
      { key: 'context', label: '背景・状況', placeholder: '本番障害、緊急対応', type: 'textarea', group: '🎭 基本設定' },
      { key: 'goals', label: '目標', placeholder: '障害原因特定、迅速復旧', type: 'textarea', group: '🎭 基本設定' },
      { key: 'instructions', label: 'メイン指示', placeholder: '障害原因を分析し、解決策を提案してください', type: 'textarea', required: true, group: '🐛 デバッグ設定' },
      { key: 'specialization', label: '特化情報', placeholder: '問題詳細、エラーログ、システム環境、最近の変更', type: 'textarea', group: '🐛 デバッグ設定' },
      { key: 'constraints', label: '制約条件', placeholder: 'サービス停止不可、緊急対応', type: 'textarea', group: '⚙️ 制約・出力設定' },
      { key: 'output_format', label: '出力形式', placeholder: '緊急対応手順、原因分析、根本対策', type: 'text', group: '⚙️ 制約・出力設定' },
    ],
  },

  ux_optimization: {
    title: 'UX最適化',
    icon: '🎨',
    fields: [
      { key: 'role', label: '役割', placeholder: 'UXデザイナー（ユーザビリティ改善専門）', type: 'text', required: true, group: '🎭 基本設定' },
      { key: 'context', label: '背景・状況', placeholder: 'ECサイト、コンバージョン率改善', type: 'textarea', group: '🎭 基本設定' },
      { key: 'goals', label: '目標', placeholder: 'CV率向上、UX改善', type: 'textarea', group: '🎭 基本設定' },
      { key: 'instructions', label: 'メイン指示', placeholder: 'UX改善案を提案してください', type: 'textarea', required: true, group: '🎨 UX設定' },
      { key: 'specialization', label: '特化情報', placeholder: '現在指標、ユーザー課題、ターゲット、競合分析', type: 'textarea', group: '🎨 UX設定' },
      { key: 'constraints', label: '制約条件', placeholder: '予算制限、段階的改善', type: 'textarea', group: '⚙️ 制約・出力設定' },
      { key: 'output_format', label: '出力形式', placeholder: 'ユーザージャーニー、改善案、A/Bテスト計画', type: 'text', group: '⚙️ 制約・出力設定' },
    ],
  },

  ai_prompt: {
    title: 'AIプロンプト',
    icon: '🤖',
    fields: [
      { key: 'role', label: '役割', placeholder: 'AIプロンプトエンジニア（LLM最適化専門）', type: 'text', required: true, group: '🎭 基本設定' },
      { key: 'context', label: '背景・状況', placeholder: 'プロンプト設計、AI活用', type: 'textarea', group: '🎭 基本設定' },
      { key: 'goals', label: '目標', placeholder: 'プロンプト品質向上、一貫性確保', type: 'textarea', group: '🎭 基本設定' },
      { key: 'instructions', label: 'メイン指示', placeholder: 'プロンプトを設計してください', type: 'textarea', required: true, group: '🤖 AI設定' },
      { key: 'specialization', label: '特化情報', placeholder: '対象AIモデル、プロンプト目標、評価基準、出力構造', type: 'textarea', group: '🤖 AI設定' },
      { key: 'constraints', label: '制約条件', placeholder: 'コスト制限、レスポンス時間', type: 'textarea', group: '⚙️ 制約・出力設定' },
      { key: 'output_format', label: '出力形式', placeholder: '完成プロンプト、テストケース、統合手順', type: 'text', group: '⚙️ 制約・出力設定' },
    ],
  },
  tool_development: {
    title: 'ツール・ユーティリティ開発',
    icon: '🔧',
    fields: [
        { key: 'role', label: '役割', placeholder: 'ソフトウェアエンジニア', type: 'text', required: true, group: '🎭 基本設定' },
        { key: 'context', label: '背景・状況', placeholder: '開発効率化、手作業の自動化', type: 'textarea', group: '🎭 基本設定' },
        { key: 'goals', label: '目標', placeholder: '特定のタスクを自動化するツールの開発', type: 'textarea', group: '🎭 基本設定' },
        { key: 'instructions', label: 'メイン指示', placeholder: 'ツールを開発してください', type: 'textarea', required: true, group: '🔧 開発設定' },
        { key: 'specialization', label: '特化情報', placeholder: 'ツールの要件、プログラミング言語、ライブラリ', type: 'textarea', group: '🔧 開発設定' },
        { key: 'output_format', label: '出力形式', placeholder: 'ソースコード、README.md、使用方法', type: 'text', group: '⚙️ 制約・出力設定' },
    ],
  },
  data_analysis: {
    title: 'データ分析・可視化',
    icon: '📊',
    fields: [
      { key: 'role', label: '役割', placeholder: 'データサイエンティスト（分析・可視化専門）', type: 'text', required: true, group: '🎭 基本設定' },
      { key: 'context', label: '背景・状況', placeholder: 'データ分析、ビジネス洞察', type: 'textarea', group: '🎭 基本設定' },
      { key: 'goals', label: '目標', placeholder: 'データ洞察、可視化、意思決定支援', type: 'textarea', group: '🎭 基本設定' },
      { key: 'tech_stack', label: '技術スタック', placeholder: 'Python, Pandas, Plotly, Jupyter', type: 'text', group: '📊 分析設定' },
      { key: 'thinking', label: '分析アプローチ', placeholder: '統計分析、機械学習、可視化戦略', type: 'textarea', group: '📊 分析設定' },
      { key: 'instructions', label: 'メイン指示', placeholder: 'データ分析と可視化を実施してください', type: 'textarea', required: true, group: '📊 分析設定' },
      { key: 'output_format', label: '出力形式', placeholder: '分析レポート、ダッシュボード、予測モデル', type: 'text', group: '⚙️ 制約・出力設定' },
      { key: 'deliverables', label: '成果物', placeholder: '分析結果、可視化、推奨事項', type: 'text', group: '⚙️ 制約・出力設定' },
    ],
  },
}
