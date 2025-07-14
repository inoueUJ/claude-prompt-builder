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
  // ビジネス分析・戦略
  business: {
    title: 'ビジネス分析・戦略',
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

      // 分析設定グループ
      {
        key: 'analysis_target',
        label: '分析対象',
        placeholder:
          '中小企業向けSaaSサービス市場（HR、会計、営業支援分野）における競合企業とそのビジネスモデル',
        type: 'text',
        group: '📊 分析設定',
      },
      {
        key: 'analysis_framework',
        label: '分析手法',
        placeholder: `以下のフレームワークを組み合わせ:
- 3C分析（Company/Competitor/Customer）
- PEST分析（Political/Economic/Social/Technical）
- ポーターの5フォース分析`,
        type: 'textarea',
        group: '📊 分析設定',
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
        group: '📊 分析設定',
      },
      {
        key: 'stakeholders',
        label: 'ステークホルダー',
        placeholder:
          '代表取締役、事業企画部門（3名）、プロダクト開発チーム（8名）、営業部門（5名）、マーケティング部門（2名）',
        type: 'text',
        group: '📊 分析設定',
      },
      {
        key: 'timeframe',
        label: '時間軸',
        placeholder: '調査期間4週間、分析結果の有効期間6ヶ月、戦略実行期間18ヶ月を想定',
        type: 'text',
        group: '📊 分析設定',
      },
      {
        key: 'budget_resources',
        label: '予算・リソース',
        placeholder:
          '調査予算300万円、専任アサイン2名、外部コンサル活用可、開発リソース5名体制で並行検討',
        type: 'text',
        group: '📊 分析設定',
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
        group: '⚙️ 制約・出力設定',
      },
      {
        key: 'output_format',
        label: '出力形式',
        placeholder:
          'エグゼクティブサマリー（A4 1ページ）+ 詳細分析（10-15ページ）+ 具体的アクションプラン（ガントチャート形式）+ リスク評価マトリックス',
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
      // 基本設定グループ
      {
        key: 'role',
        label: '役割',
        placeholder:
          '経験豊富なコピーライター兼コンテンツマーケター（広告代理店勤務10年、受賞歴多数）',
        type: 'text',
        required: true,
        group: '🎭 基本設定',
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

      // 文章設定グループ
      {
        key: 'target_audience',
        label: '対象読者',
        placeholder:
          'IT業界記者、中小企業経営者、人事・総務担当者、DX推進担当者（30-50代、IT知識は中級レベル）',
        type: 'text',
        group: '✍️ 文章設定',
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
        group: '✍️ 文章設定',
      },
      {
        key: 'word_count',
        label: '文字数・長さ',
        placeholder: '1200-1500文字（A4用紙1枚程度）、見出し5-7個、各セクション200-300文字',
        type: 'text',
        group: '✍️ 文章設定',
      },
      {
        key: 'tone',
        label: '文体・トーン',
        placeholder:
          'プロフェッショナルで信頼性があり、かつ親しみやすい。専門用語は使用するが分かりやすく説明。前向きで革新的な印象',
        type: 'text',
        group: '✍️ 文章設定',
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
        group: '✍️ 文章設定',
      },
      {
        key: 'call_to_action',
        label: '行動喚起',
        placeholder:
          '無料体験版の申し込み、デモンストレーション予約、資料ダウンロード、メディア関係者向け説明会への参加',
        type: 'text',
        group: '✍️ 文章設定',
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
        group: '⚙️ 制約・出力設定',
      },
      {
        key: 'output_format',
        label: '出力形式',
        placeholder:
          'プレスリリース形式（ヘッダー、日付、見出し、本文、企業情報、お問い合わせ先）、HTML版とテキスト版両方',
        type: 'text',
        group: '⚙️ 制約・出力設定',
      },
    ],
  },

  // 技術・プログラミング
  tech: {
    title: '技術・プログラミング',
    icon: '💻',
    fields: [
      // 基本設定グループ
      {
        key: 'role',
        label: '役割',
        placeholder:
          'フルスタック開発エンジニア（React/Node.js専門、AWS認定ソリューションアーキテクト、開発経験8年）',
        type: 'text',
        required: true,
        group: '🎭 基本設定',
      },
      {
        key: 'instructions',
        label: 'メイン指示',
        placeholder:
          'ユーザー認証機能付きのタスク管理アプリをTypeScript + React + Express + MongoDBで構築してください。JWT認証、CRUD操作、リアルタイム更新機能を含めてください',
        type: 'textarea',
        required: true,
        group: '🎭 基本設定',
      },
      {
        key: 'context',
        label: '背景・状況',
        placeholder:
          'チーム開発プロジェクト（5名）、アジャイル開発、2週間スプリント、Docker環境での開発、CI/CDパイプライン構築も必要',
        type: 'textarea',
        group: '🎭 基本設定',
      },

      // 技術設定グループ
      {
        key: 'programming_language',
        label: 'プログラミング言語',
        placeholder:
          'TypeScript（厳密な型定義）、JavaScript ES2022+、HTML5、CSS3（Tailwind CSS使用）',
        type: 'text',
        group: '💻 技術設定',
      },
      {
        key: 'framework',
        label: 'フレームワーク・ライブラリ',
        placeholder:
          'React 18 + Vite、Express.js、Mongoose、Socket.io（リアルタイム）、React Query（状態管理）、React Hook Form（フォーム）',
        type: 'textarea',
        group: '💻 技術設定',
      },
      {
        key: 'technical_requirements',
        label: '技術要件',
        placeholder:
          'レスポンシブデザイン、PWA対応、オフライン機能、SEO最適化、アクセシビリティ（WCAG 2.1 AA準拠）、TypeScript厳密モード',
        type: 'textarea',
        group: '💻 技術設定',
      },
      {
        key: 'environment',
        label: '環境・制約',
        placeholder:
          'Docker Compose、Node.js 18+、MongoDB 6.0、Redis（セッション管理）、AWS ECR/ECS（本番）、GitHub Actions（CI/CD）',
        type: 'text',
        group: '💻 技術設定',
      },
      {
        key: 'performance_requirements',
        label: 'パフォーマンス要件',
        placeholder:
          'First Contentful Paint < 1.5秒、Core Web Vitals全項目Good、API応答時間 < 200ms、同時接続ユーザー1000人対応',
        type: 'text',
        group: '💻 技術設定',
      },
      {
        key: 'security_requirements',
        label: 'セキュリティ要件',
        placeholder:
          'HTTPS強制、CSPヘッダー設定、XSS/CSRF対策、SQL インジェクション対策、JWT有効期限管理、パスワードハッシュ化（bcrypt）',
        type: 'textarea',
        group: '💻 技術設定',
      },

      // 制約・出力設定グループ
      {
        key: 'constraints',
        label: '制約条件',
        placeholder:
          '開発期間6週間、予算制限あり、既存APIとの互換性維持、IE11サポート不要、モバイルファースト設計',
        type: 'textarea',
        group: '⚙️ 制約・出力設定',
      },
      {
        key: 'output_format',
        label: '出力形式',
        placeholder:
          '詳細なコード例、ディレクトリ構成、package.json、README.md、デプロイ手順、テストコード例を含む完全なプロジェクト構成',
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
      // 基本設定グループ
      {
        key: 'role',
        label: '役割',
        placeholder:
          '教育コンサルタント兼研修講師（企業研修15年、インストラクショナルデザイン修士、認定ファシリテーター）',
        type: 'text',
        required: true,
        group: '🎭 基本設定',
      },
      {
        key: 'instructions',
        label: 'メイン指示',
        placeholder:
          'プログラミング初心者向けに「関数」の概念を分かりやすく解説してください。実践的な例を交えながら、段階的に理解を深める教材を作成してください',
        type: 'textarea',
        required: true,
        group: '🎭 基本設定',
      },
      {
        key: 'context',
        label: '背景・状況',
        placeholder:
          '社内研修プログラム（非エンジニア向け）、参加者20名、IT知識はメール・Excel程度、3時間のワークショップ形式',
        type: 'textarea',
        group: '🎭 基本設定',
      },

      // 教育設定グループ
      {
        key: 'audience_level',
        label: '対象者レベル',
        placeholder:
          '完全初心者（プログラミング経験なし）、但しExcel関数は使用経験あり、論理的思考力は高め（営業・企画職）',
        type: 'text',
        group: '🎓 教育設定',
      },
      {
        key: 'learning_objectives',
        label: '学習目標',
        placeholder:
          '1) 関数の概念と役割を理解 2) 簡単な関数を読める 3) 基本的な関数を書ける 4) デバッグの基本を身につける 5) エンジニアとのコミュニケーション向上',
        type: 'textarea',
        group: '🎓 教育設定',
      },
      {
        key: 'prerequisites',
        label: '前提知識',
        placeholder:
          'パソコン基本操作、Excel基本関数（SUM、IF等）、基本的な数学知識（四則演算、論理演算）、問題解決への意欲',
        type: 'text',
        group: '🎓 教育設定',
      },
      {
        key: 'explanation_method',
        label: '説明方法',
        placeholder:
          '日常生活の例え話から開始→Excel関数との類推→プログラミング関数へ発展。実習重視、ペアワーク取り入れ、小さな成功体験を積み重ね',
        type: 'textarea',
        group: '🎓 教育設定',
      },
      {
        key: 'check_points',
        label: '確認事項・練習問題',
        placeholder:
          '各章末に理解度チェック、実践的なコーディング課題、エラー修正問題、復習クイズ（選択式・記述式）、グループディスカッション',
        type: 'textarea',
        group: '🎓 教育設定',
      },
      {
        key: 'additional_resources',
        label: '補足資料',
        placeholder:
          '参考書籍リスト、オンライン学習サイト、復習用動画、チートシート、よくある質問集、次ステップへの学習ロードマップ',
        type: 'text',
        group: '🎓 教育設定',
      },

      // 制約・出力設定グループ
      {
        key: 'constraints',
        label: '制約条件',
        placeholder:
          '3時間の研修時間、PCは各自持参、インターネット接続あり、専門用語は最小限、挫折させない配慮必須',
        type: 'textarea',
        group: '⚙️ 制約・出力設定',
      },
      {
        key: 'output_format',
        label: '出力形式',
        placeholder:
          '講師用ガイド + 受講者用テキスト + スライド資料 + 実習用コード + 評価シート + 持ち帰り用まとめ資料',
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
      // 基本設定グループ
      {
        key: 'role',
        label: '役割',
        placeholder:
          'クリエイティブディレクター（広告代理店勤務12年、カンヌライオンズ受賞歴、ブランド戦略&キャンペーン企画専門）',
        type: 'text',
        required: true,
        group: '🎭 基本設定',
      },
      {
        key: 'instructions',
        label: 'メイン指示',
        placeholder:
          '新商品「エコフレンドリー・コーヒーカップ」の統合マーケティングキャンペーンを企画してください。環境意識の高いミレニアル世代をターゲットとした革新的なアイデアを提案してください',
        type: 'textarea',
        required: true,
        group: '🎭 基本設定',
      },
      {
        key: 'context',
        label: '背景・状況',
        placeholder:
          '持続可能性にこだわる新興コーヒーブランド、競合は大手チェーン店、予算は中規模、SNSでのバイラル効果を狙いたい、3ヶ月のキャンペーン期間',
        type: 'textarea',
        group: '🎭 基本設定',
      },

      // クリエイティブ設定グループ
      {
        key: 'creative_direction',
        label: 'クリエイティブ方向性',
        placeholder:
          'ナチュラル・サステナブル・革新的・親しみやすい。アースカラー基調、手作り感のあるビジュアル、本物志向、ライフスタイル提案型',
        type: 'text',
        group: '🎨 クリエイティブ設定',
      },
      {
        key: 'target_demographic',
        label: 'ターゲット',
        placeholder:
          'ミレニアル世代（25-40歳）、環境意識が高い、都市部在住、年収400-800万円、SNSアクティブユーザー、サードウェーブコーヒー愛好家',
        type: 'text',
        group: '🎨 クリエイティブ設定',
      },
      {
        key: 'brand_tone',
        label: 'ブランドトーン',
        placeholder:
          '誠実で温かみがあり、教育的だが説教臭くない。専門性を感じさせつつフレンドリー。環境への愛情と責任感を表現',
        type: 'text',
        group: '🎨 クリエイティブ設定',
      },
      {
        key: 'creative_constraints',
        label: '制作制約',
        placeholder:
          '予算2000万円、制作期間6週間、複数チャネル展開必須、測定可能なKPI設定、法的コンプライアンス遵守、競合との差別化明確',
        type: 'textarea',
        group: '🎨 クリエイティブ設定',
      },
      {
        key: 'inspiration_sources',
        label: 'インスピレーション・参考事例',
        placeholder:
          'パタゴニアの環境キャンペーン、アイスランドの観光プロモーション、スターバックスの限定商品戦略、無印良品のライフスタイル提案',
        type: 'text',
        group: '🎨 クリエイティブ設定',
      },
      {
        key: 'evaluation_criteria',
        label: '評価基準',
        placeholder:
          'ブランド認知度向上（30%）、売上目標達成（25%）、エンゲージメント率（20%）、話題性・PR効果（15%）、持続可能性メッセージ浸透（10%）',
        type: 'textarea',
        group: '🎨 クリエイティブ設定',
      },

      // 制約・出力設定グループ
      {
        key: 'constraints',
        label: '制約条件',
        placeholder:
          'グリーンウォッシュ回避、データ根拠明記、多様性配慮、アクセシビリティ対応、炎上リスク回避、競合の知的財産権侵害回避',
        type: 'textarea',
        group: '⚙️ 制約・出力設定',
      },
      {
        key: 'output_format',
        label: '出力形式',
        placeholder:
          'キャンペーン概要書 + クリエイティブ案 + 実施スケジュール + 予算配分 + KPI設定 + リスク評価 + 次フェーズ提案',
        type: 'text',
        group: '⚙️ 制約・出力設定',
      },
    ],
  },

  // 意思決定・評価
  decision: {
    title: '意思決定・評価',
    icon: '⚖️',
    fields: [
      // 基本設定グループ
      {
        key: 'role',
        label: '役割',
        placeholder:
          '経営コンサルタント（意思決定分析専門、MBA取得、ロジカルシンキング研修講師、大手企業の戦略立案支援20年）',
        type: 'text',
        required: true,
        group: '🎭 基本設定',
      },
      {
        key: 'instructions',
        label: 'メイン指示',
        placeholder:
          '新オフィス移転について3つの候補地から最適な選択肢を決定してください。定量・定性両面から分析し、リスクも考慮した意思決定プロセスを提示してください',
        type: 'textarea',
        required: true,
        group: '🎭 基本設定',
      },
      {
        key: 'context',
        label: '背景・状況',
        placeholder:
          '従業員100名のIT企業、現オフィスの賃貸契約満了、リモートワーク併用、クライアント訪問頻度は月10回程度、予算制約あり',
        type: 'textarea',
        group: '🎭 基本設定',
      },

      // 意思決定設定グループ
      {
        key: 'options',
        label: '選択肢',
        placeholder:
          'A案:渋谷（家賃月500万円、駅徒歩3分、面積800㎡）B案:品川（家賃月350万円、駅徒歩7分、面積900㎡）C案:大手町（家賃月800万円、駅徒歩1分、面積700㎡）',
        type: 'textarea',
        group: '⚖️ 意思決定設定',
      },
      {
        key: 'alternatives',
        label: '代替案・補足選択肢',
        placeholder:
          'サテライトオフィス併用、完全リモート移行、現オフィス契約延長、共有オフィス（WeWork等）活用、郊外オフィス+都心サテライト',
        type: 'text',
        group: '⚖️ 意思決定設定',
      },
      {
        key: 'evaluation_criteria_decision',
        label: '評価基準・観点',
        placeholder:
          'コスト（30%）、アクセス性（25%）、従業員満足度（20%）、クライアント利便性（15%）、将来拡張性（10%）',
        type: 'textarea',
        group: '⚖️ 意思決定設定',
      },
      {
        key: 'weightings',
        label: '重み付け・優先順位',
        placeholder:
          '最重要:コスト効率、重要:従業員通勤利便性、やや重要:ブランドイメージ、参考程度:近隣施設充実度、最低条件:法的コンプライアンス',
        type: 'text',
        group: '⚖️ 意思決定設定',
      },
      {
        key: 'risk_factors',
        label: 'リスク要因',
        placeholder:
          '賃料上昇リスク、地震等災害リスク、交通機関停止リスク、人材採用への影響、競合他社との距離、経済状況変化への対応',
        type: 'textarea',
        group: '⚖️ 意思決定設定',
      },
      {
        key: 'decision_deadline',
        label: '決定期限・タイムライン',
        placeholder:
          '最終決定:3週間後、契約手続き:1ヶ月、引越作業:2ヶ月、業務開始:現契約満了の1週間前までに完了必須',
        type: 'text',
        group: '⚖️ 意思決定設定',
      },

      // 制約・出力設定グループ
      {
        key: 'constraints',
        label: '制約条件',
        placeholder:
          '予算上限月700万円、最低面積600㎡以上、駅徒歩10分以内、セキュリティレベル確保、バリアフリー対応、駐車場10台以上',
        type: 'textarea',
        group: '⚙️ 制約・出力設定',
      },
      {
        key: 'output_format',
        label: '出力形式',
        placeholder:
          'エグゼクティブサマリー + 詳細比較表 + スコアリング結果 + リスク分析マトリックス + 推奨案と根拠 + 実行計画 + 意思決定フレームワーク',
        type: 'text',
        group: '⚙️ 制約・出力設定',
      },
    ],
  },

  // === 新カテゴリ群 ===

  // コードレビュー・品質向上
  code_review: {
    title: 'コードレビュー・品質向上',
    icon: '🔍',
    fields: [
      // 基本設定グループ
      {
        key: 'role',
        label: '役割',
        placeholder:
          'シニアソフトウェアエンジニア（コードレビュー専門、Clean Code著者、技術リード10年、品質改善エキスパート）',
        type: 'text',
        required: true,
        group: '🎭 基本設定',
      },
      {
        key: 'instructions',
        label: 'メイン指示',
        placeholder: `以下のReactコンポーネントをレビューし、品質改善提案をしてください。特にパフォーマンス、保守性、可読性の観点から具体的な改善案を提示してください。

**重点ポイント**:
- DRY原則の適用
- パフォーマンス最適化
- TypeScript活用
- テスタビリティ向上`,
        type: 'textarea',
        required: true,
        group: '🎭 基本設定',
      },
      {
        key: 'context',
        label: '背景・状況',
        placeholder:
          'チーム開発プロジェクト、レガシーコードの改善中、新人エンジニア含む5名体制、TypeScript移行作業並行実施',
        type: 'textarea',
        group: '🎭 基本設定',
      },

      // レビュー設定グループ
      {
        key: 'code_target',
        label: 'レビュー対象コード',
        placeholder:
          '```typescript\n// ここにレビュー対象のコードを貼り付け\nconst Component = () => {\n  // 実際のコード\n}\n```',
        type: 'textarea',
        group: '🔍 レビュー設定',
      },
      {
        key: 'review_focus',
        label: 'レビュー観点',
        placeholder:
          'パフォーマンス（30%）、保守性・可読性（30%）、セキュリティ（20%）、型安全性（15%）、テスタビリティ（5%）',
        type: 'text',
        group: '🔍 レビュー設定',
      },
      {
        key: 'coding_standards',
        label: 'コーディング規約',
        placeholder:
          'ESLint + Prettier、Airbnb スタイルガイド、TypeScript strict mode、関数型プログラミング推奨、命名規則：camelCase',
        type: 'textarea',
        group: '🔍 レビュー設定',
      },
      {
        key: 'performance_requirements',
        label: 'パフォーマンス要件',
        placeholder:
          'レンダリング時間 < 16ms、メモリ使用量最適化、bundle size削減、不要な再レンダリング防止、lazy loading適用',
        type: 'text',
        group: '🔍 レビュー設定',
      },
      {
        key: 'security_requirements',
        label: 'セキュリティ要件',
        placeholder:
          'XSS対策、CSRF防止、入力値検証、秘密情報の漏洩防止、依存関係の脆弱性チェック、ログ出力の適正化',
        type: 'textarea',
        group: '🔍 レビュー設定',
      },
      {
        key: 'team_context',
        label: 'チーム状況',
        placeholder:
          '新人エンジニア2名、中堅3名、技術スタック：React18+TypeScript+Vite、コードレビュー文化醸成中',
        type: 'text',
        group: '🔍 レビュー設定',
      },

      // 制約・出力設定グループ
      {
        key: 'constraints',
        label: '制約条件',
        placeholder:
          '既存API変更不可、互換性維持必須、大幅なリファクタリングは段階的実施、本番影響を最小化',
        type: 'textarea',
        group: '⚙️ 制約・出力設定',
      },
      {
        key: 'output_format',
        label: '出力形式',
        placeholder:
          '改善前後のコード比較 + 具体的修正案 + 改善理由の詳細説明 + 実装優先度 + 学習リソース + チェックリスト',
        type: 'text',
        group: '⚙️ 制約・出力設定',
      },
    ],
  },

  // システム設計・アーキテクチャ
  system_design: {
    title: 'システム設計・アーキテクチャ',
    icon: '🏗️',
    fields: [
      // 基本設定グループ
      {
        key: 'role',
        label: '役割',
        placeholder:
          'ソリューションアーキテクト（大規模システム設計15年、マイクロサービス専門、AWS/Azure認定、DDD実践者）',
        type: 'text',
        required: true,
        group: '🎭 基本設定',
      },
      {
        key: 'instructions',
        label: 'メイン指示',
        placeholder: `月間1000万PVのECサイトのアーキテクチャを設計してください。スケーラビリティ、可用性、保守性を重視し、マイクロサービス化を検討してください。

**要求事項**:
- 高可用性（99.9%以上）
- 自動スケーリング対応
- 将来の機能拡張を考慮
- コスト効率性`,
        type: 'textarea',
        required: true,
        group: '🎭 基本設定',
      },
      {
        key: 'context',
        label: '背景・状況',
        placeholder:
          '既存モノリシック構成から移行、開発チーム20名、予算制約あり、段階的移行が必要、レガシーシステムとの連携必須',
        type: 'textarea',
        group: '🎭 基本設定',
      },

      // 設計設定グループ
      {
        key: 'system_requirements',
        label: 'システム要件',
        placeholder:
          'ユーザー数：100万人、同時接続：10,000、レスポンス時間：< 200ms、可用性：99.9%、データ保持：10年',
        type: 'textarea',
        group: '🏗️ 設計設定',
      },
      {
        key: 'technology_stack',
        label: '技術スタック制約',
        placeholder:
          'クラウド：AWS優先、言語：TypeScript/Python、DB：PostgreSQL/Redis、コンテナ：Docker+Kubernetes',
        type: 'text',
        group: '🏗️ 設計設定',
      },
      {
        key: 'scalability_needs',
        label: 'スケーラビリティ要件',
        placeholder:
          '水平スケーリング必須、トラフィック急増対応（10倍まで）、リージョン展開予定（アジア・欧州）、CDN活用',
        type: 'textarea',
        group: '🏗️ 設計設定',
      },
      {
        key: 'security_architecture',
        label: 'セキュリティ要件',
        placeholder:
          'ゼロトラスト、多要素認証、暗号化（保存時・転送時）、監査ログ、PCI DSS準拠、GDPR対応',
        type: 'text',
        group: '🏗️ 設計設定',
      },
      {
        key: 'integration_requirements',
        label: '連携要件',
        placeholder:
          '既存CRM、在庫管理システム、決済代行、物流システム、マーケティングツール、外部API（20+）',
        type: 'textarea',
        group: '🏗️ 設計設定',
      },
      {
        key: 'operational_requirements',
        label: '運用要件',
        placeholder:
          '24時間監視、自動復旧、ログ分析、メトリクス収集、A/Bテスト基盤、デプロイ自動化',
        type: 'text',
        group: '🏗️ 設計設定',
      },

      // 制約・出力設定グループ
      {
        key: 'constraints',
        label: '制約条件',
        placeholder:
          '予算上限：年間5000万円、移行期間：12ヶ月、ダウンタイム：最大2時間/月、既存データ移行必須',
        type: 'textarea',
        group: '⚙️ 制約・出力設定',
      },
      {
        key: 'output_format',
        label: '出力形式',
        placeholder:
          'アーキテクチャ図 + 技術選定理由 + 移行ロードマップ + コスト見積もり + リスク評価 + 運用手順書',
        type: 'text',
        group: '⚙️ 制約・出力設定',
      },
    ],
  },

  // 学習・技術調査
  learning: {
    title: '学習・技術調査',
    icon: '📚',
    fields: [
      // 基本設定グループ
      {
        key: 'role',
        label: '役割',
        placeholder:
          'テックリード兼メンター（技術トレンド調査専門、新技術評価エキスパート、開発者向け教育コンテンツ作成12年）',
        type: 'text',
        required: true,
        group: '🎭 基本設定',
      },
      {
        key: 'instructions',
        label: 'メイン指示',
        placeholder: `Next.js 14の新機能について包括的に調査し、実践的な学習ロードマップを作成してください。実際のプロジェクトで活用できるレベルまで習得するための具体的なプランを提示してください。

**調査ポイント**:
- 新機能の詳細と使用例
- 既存プロジェクトへの適用方法
- ベストプラクティス
- 注意点・制約事項`,
        type: 'textarea',
        required: true,
        group: '🎭 基本設定',
      },
      {
        key: 'context',
        label: '背景・状況',
        placeholder:
          'フロントエンドチーム5名、現在Next.js 13使用中、新プロジェクトでの採用検討、学習時間は業務時間の20%確保可能',
        type: 'textarea',
        group: '🎭 基本設定',
      },

      // 学習設定グループ
      {
        key: 'learning_target',
        label: '学習対象',
        placeholder:
          'Next.js 14の App Router、Server Components、Streaming、TypeScript統合、パフォーマンス最適化',
        type: 'text',
        group: '📚 学習設定',
      },
      {
        key: 'current_skill_level',
        label: '現在のスキルレベル',
        placeholder:
          'Next.js 13習熟、React 18経験豊富、TypeScript中級、SSR/SSG理解済み、モダンフロントエンド開発3年',
        type: 'text',
        group: '📚 学習設定',
      },
      {
        key: 'learning_goals',
        label: '学習目標',
        placeholder:
          '新機能の実践的活用、パフォーマンス改善の実現、チーム内技術共有、プロジェクトへの適用判断力向上',
        type: 'textarea',
        group: '📚 学習設定',
      },
      {
        key: 'time_constraints',
        label: '時間制約',
        placeholder:
          '学習期間：6週間、週10時間確保可能、ハンズオン重視、実務並行での学習、チーム勉強会月2回',
        type: 'text',
        group: '📚 学習設定',
      },
      {
        key: 'practical_application',
        label: '実践適用目標',
        placeholder:
          'PoC作成、既存プロジェクトの一部移行、新機能の技術検証、チームメンバーへの技術伝達',
        type: 'textarea',
        group: '📚 学習設定',
      },
      {
        key: 'evaluation_criteria',
        label: '習得評価基準',
        placeholder:
          '実際のアプリケーション構築、パフォーマンス改善の実現、技術選定判断力、チームへの技術共有能力',
        type: 'text',
        group: '📚 学習設定',
      },

      // 制約・出力設定グループ
      {
        key: 'constraints',
        label: '制約条件',
        placeholder:
          '業務時間での学習、無料リソース優先、英語資料OK、実務に直結する内容重視、段階的習得',
        type: 'textarea',
        group: '⚙️ 制約・出力設定',
      },
      {
        key: 'output_format',
        label: '出力形式',
        placeholder:
          '学習ロードマップ + 技術調査レポート + 実践課題リスト + 参考資料一覧 + 進捗評価指標 + チーム共有資料',
        type: 'text',
        group: '⚙️ 制約・出力設定',
      },
    ],
  },

  // 開発プロセス改善
  dev_process: {
    title: '開発プロセス改善',
    icon: '⚡',
    fields: [
      // 基本設定グループ
      {
        key: 'role',
        label: '役割',
        placeholder:
          'DevOpsエンジニア兼プロセス改善スペシャリスト（CI/CD構築専門、アジャイル実践者、開発効率化コンサルタント8年）',
        type: 'text',
        required: true,
        group: '🎭 基本設定',
      },
      {
        key: 'instructions',
        label: 'メイン指示',
        placeholder: `現在の開発プロセスを分析し、生産性を30%向上させる改善案を提案してください。CI/CD、コードレビュー、テスト自動化、デプロイフローの最適化を含めてください。

**改善目標**:
- デプロイ頻度の向上
- バグ発見・修正の早期化
- 開発者体験(DX)の向上
- 手作業の自動化`,
        type: 'textarea',
        required: true,
        group: '🎭 基本設定',
      },
      {
        key: 'context',
        label: '背景・状況',
        placeholder:
          '開発チーム8名、スプリント2週間、手動デプロイが多い、テストカバレッジ60%、コードレビュー時間が長い',
        type: 'textarea',
        group: '🎭 基本設定',
      },

      // プロセス設定グループ
      {
        key: 'current_process',
        label: '現在のプロセス',
        placeholder:
          'Git flow、手動テスト多用、週1回デプロイ、コードレビュー平均2日、本番不具合月3-5件',
        type: 'textarea',
        group: '⚡ プロセス設定',
      },
      {
        key: 'pain_points',
        label: '課題・ボトルネック',
        placeholder:
          'デプロイ時間長い（2時間）、テスト実行遅い（30分）、環境差異によるバグ、レビュー待ち時間、手作業ミス',
        type: 'text',
        group: '⚡ プロセス設定',
      },
      {
        key: 'team_structure',
        label: 'チーム構成',
        placeholder:
          'フロントエンド3名、バックエンド3名、フルスタック2名、スキルレベル：初級2名・中級4名・上級2名',
        type: 'text',
        group: '⚡ プロセス設定',
      },
      {
        key: 'technology_environment',
        label: '技術環境',
        placeholder:
          'React+TypeScript、Node.js、PostgreSQL、AWS、Docker、GitHub、現在のCI/CD：GitHub Actions基本設定',
        type: 'textarea',
        group: '⚡ プロセス設定',
      },
      {
        key: 'quality_metrics',
        label: '品質指標',
        placeholder:
          'テストカバレッジ：60%、バグ密度：3件/1000行、MTTR：2時間、デプロイ成功率：85%',
        type: 'text',
        group: '⚡ プロセス設定',
      },
      {
        key: 'business_requirements',
        label: 'ビジネス要件',
        placeholder:
          '機能リリース頻度向上、品質向上、開発コスト削減、市場投入時間短縮、顧客満足度向上',
        type: 'textarea',
        group: '⚡ プロセス設定',
      },

      // 制約・出力設定グループ
      {
        key: 'constraints',
        label: '制約条件',
        placeholder:
          '予算制限：月50万円、移行期間：3ヶ月、業務停止不可、既存システム活用、段階的導入',
        type: 'textarea',
        group: '⚙️ 制約・出力設定',
      },
      {
        key: 'output_format',
        label: '出力形式',
        placeholder:
          '現状分析レポート + 改善ロードマップ + CI/CD設定例 + KPI設定 + 導入手順書 + 効果測定方法',
        type: 'text',
        group: '⚙️ 制約・出力設定',
      },
    ],
  },

  // トラブルシューティング・デバッグ
  troubleshooting: {
    title: 'トラブルシューティング・デバッグ',
    icon: '🐛',
    fields: [
      // 基本設定グループ
      {
        key: 'role',
        label: '役割',
        placeholder:
          'シニアデバッグエンジニア（障害対応専門、ログ解析エキスパート、パフォーマンス診断10年、根本原因分析専門）',
        type: 'text',
        required: true,
        group: '🎭 基本設定',
      },
      {
        key: 'instructions',
        label: 'メイン指示',
        placeholder: `本番環境でAPIレスポンスが急激に遅くなる問題が発生しています。レスポンス時間が通常の50msから2000msに悪化。原因を特定し、即効性のある対策と根本的な解決策を提案してください。

**緊急度**: 高（ユーザー影響大）
**調査ポイント**:
- データベースパフォーマンス
- サーバーリソース使用状況
- アプリケーションログ分析
- ネットワーク関連`,
        type: 'textarea',
        required: true,
        group: '🎭 基本設定',
      },
      {
        key: 'context',
        label: '背景・状況',
        placeholder:
          'Node.js API、PostgreSQL、AWS ECS、監視ツール：CloudWatch、問題発生：3時間前、影響ユーザー：約5000名',
        type: 'textarea',
        group: '🎭 基本設定',
      },

      // デバッグ設定グループ
      {
        key: 'problem_description',
        label: '問題の詳細',
        placeholder:
          'APIレスポンス時間：50ms→2000ms、エラー率：1%→15%、CPU使用率：70%、メモリ使用率：85%',
        type: 'textarea',
        group: '🐛 デバッグ設定',
      },
      {
        key: 'error_logs',
        label: 'エラーログ・症状',
        placeholder:
          '```\n[ERROR] Database connection timeout\n[WARN] Connection pool exhausted\n[INFO] High memory usage detected\n```',
        type: 'textarea',
        group: '🐛 デバッグ設定',
      },
      {
        key: 'system_environment',
        label: 'システム環境',
        placeholder:
          'AWS ECS (4vCPU, 8GB RAM)、PostgreSQL RDS (db.r5.large)、Redis ElastiCache、ALB、CloudFront',
        type: 'text',
        group: '🐛 デバッグ設定',
      },
      {
        key: 'recent_changes',
        label: '最近の変更',
        placeholder:
          '昨日：新機能デプロイ（ユーザー検索機能）、DBインデックス追加、キャッシュ設定変更、依存関係更新',
        type: 'textarea',
        group: '🐛 デバッグ設定',
      },
      {
        key: 'monitoring_data',
        label: '監視データ',
        placeholder: 'CPU: 70%、メモリ: 85%、DB接続数: 95/100、キューサイズ: 500件、エラー率: 15%',
        type: 'text',
        group: '🐛 デバッグ設定',
      },
      {
        key: 'business_impact',
        label: 'ビジネス影響',
        placeholder:
          'ユーザー離脱率増加、売上機会損失、カスタマーサポート問い合わせ急増、ブランドイメージへの影響',
        type: 'textarea',
        group: '🐛 デバッグ設定',
      },

      // 制約・出力設定グループ
      {
        key: 'constraints',
        label: '制約条件',
        placeholder:
          'サービス停止不可、データ整合性維持必須、調査時間：2時間以内、緊急対応要員：2名',
        type: 'textarea',
        group: '⚙️ 制約・出力設定',
      },
      {
        key: 'output_format',
        label: '出力形式',
        placeholder:
          '緊急対応手順 + 原因分析レポート + 根本対策案 + 再発防止策 + 監視強化項目 + エスカレーション基準',
        type: 'text',
        group: '⚙️ 制約・出力設定',
      },
    ],
  },

  // プロダクト改善・UX最適化
  ux_optimization: {
    title: 'プロダクト改善・UX最適化',
    icon: '🎨',
    fields: [
      // 基本設定グループ
      {
        key: 'role',
        label: '役割',
        placeholder:
          'UXデザイナー兼プロダクトマネージャー（ユーザビリティ改善専門、A/Bテスト実践者、データドリブン設計8年）',
        type: 'text',
        required: true,
        group: '🎭 基本設定',
      },
      {
        key: 'instructions',
        label: 'メイン指示',
        placeholder: `ECサイトの購入完了率が業界平均を下回っています（現在：1.8%、業界平均：2.4%）。ユーザージャーニー全体を分析し、コンバージョン率を向上させる具体的な改善案を提案してください。

**重点領域**:
- カート離脱の削減
- 決済フロー最適化
- UI/UXの改善
- モバイル体験向上`,
        type: 'textarea',
        required: true,
        group: '🎭 基本設定',
      },
      {
        key: 'context',
        label: '背景・状況',
        placeholder:
          'ファッションEC、月間PV：500万、新規/既存：6:4、モバイル比率：70%、主要ユーザー：20-40代女性',
        type: 'textarea',
        group: '🎭 基本設定',
      },

      // UX設定グループ
      {
        key: 'current_metrics',
        label: '現在の指標',
        placeholder:
          'CV率：1.8%、カート離脱率：75%、決済完了率：60%、ページ滞在時間：3分、直帰率：65%',
        type: 'text',
        group: '🎨 UX設定',
      },
      {
        key: 'user_pain_points',
        label: 'ユーザーの課題',
        placeholder:
          '決済手順が複雑、送料が分からない、サイズ不安、決済方法限定、モバイルでの操作性、ページ表示遅い',
        type: 'textarea',
        group: '🎨 UX設定',
      },
      {
        key: 'target_users',
        label: 'ターゲットユーザー',
        placeholder:
          '20-40代女性、ファッション感度高、スマホ中心、時間ない、価格意識、ブランド重視、SNS活用',
        type: 'text',
        group: '🎨 UX設定',
      },
      {
        key: 'competitive_analysis',
        label: '競合分析',
        placeholder:
          'ZARA：シンプル決済、UNIQLO：サイズガイド充実、H&M：SNS連携強い、Amazon：ワンクリック購入',
        type: 'textarea',
        group: '🎨 UX設定',
      },
      {
        key: 'technical_constraints',
        label: '技術的制約',
        placeholder:
          'レガシーシステム一部残存、決済代行変更困難、リニューアル予算限定、段階的改善必要',
        type: 'text',
        group: '🎨 UX設定',
      },
      {
        key: 'business_goals',
        label: 'ビジネス目標',
        placeholder:
          'CV率：1.8%→2.5%、AOV：8000円→9000円、LTV向上、顧客満足度向上、ブランド価値向上',
        type: 'textarea',
        group: '🎨 UX設定',
      },

      // 制約・出力設定グループ
      {
        key: 'constraints',
        label: '制約条件',
        placeholder:
          '予算：500万円、期間：6ヶ月、A/Bテスト必須、段階的リリース、モバイルファースト',
        type: 'textarea',
        group: '⚙️ 制約・出力設定',
      },
      {
        key: 'output_format',
        label: '出力形式',
        placeholder:
          'ユーザージャーニーマップ + 改善案優先度リスト + ワイヤーフレーム + A/Bテスト計画 + KPI設定 + 実装ロードマップ',
        type: 'text',
        group: '⚙️ 制約・出力設定',
      },
    ],
  },

  // AI・プロンプトエンジニアリング専門
  ai_prompt: {
    title: 'AI・プロンプトエンジニアリング',
    icon: '🤖',
    fields: [
      // 基本設定グループ
      {
        key: 'role',
        label: '役割',
        placeholder:
          'AIプロンプトエンジニアリング専門家（LLM最適化エキスパート、プロンプト設計コンサルタント、AI活用戦略立案5年）',
        type: 'text',
        required: true,
        group: '🎭 基本設定',
      },
      {
        key: 'instructions',
        label: 'メイン指示',
        placeholder: `コードレビューを自動化するAIプロンプトを設計してください。TypeScriptコードの品質、保守性、パフォーマンスを評価し、具体的な改善提案を出力するプロンプトを作成してください。

**プロンプト要件**:
- 一貫性のある評価基準
- 具体的な改善案提示
- 学習効果のあるフィードバック
- 実装可能な提案`,
        type: 'textarea',
        required: true,
        group: '🎭 基本設定',
      },
      {
        key: 'context',
        label: '背景・状況',
        placeholder:
          '開発チーム10名、コードレビュー負荷軽減、品質標準化、新人教育効果も期待、Claude API使用予定',
        type: 'textarea',
        group: '🎭 基本設定',
      },

      // AI設定グループ
      {
        key: 'ai_model_target',
        label: '対象AIモデル',
        placeholder:
          'Claude 3.5 Sonnet、GPT-4、API経由利用、レスポンス時間：< 10秒、コスト効率重視',
        type: 'text',
        group: '🤖 AI設定',
      },
      {
        key: 'prompt_objectives',
        label: 'プロンプト目標',
        placeholder:
          'コード品質評価の自動化、一貫したレビュー基準、教育的フィードバック、実装可能な改善案提示',
        type: 'textarea',
        group: '🤖 AI設定',
      },
      {
        key: 'evaluation_criteria',
        label: '評価基準',
        placeholder:
          '可読性（25%）、保守性（25%）、パフォーマンス（20%）、セキュリティ（15%）、型安全性（15%）',
        type: 'text',
        group: '🤖 AI設定',
      },
      {
        key: 'output_structure',
        label: '出力構造',
        placeholder:
          'JSON形式、評価スコア、具体的コメント、改善案、サンプルコード、学習リソース、重要度レベル',
        type: 'textarea',
        group: '🤖 AI設定',
      },
      {
        key: 'edge_cases',
        label: 'エッジケース対応',
        placeholder:
          '不完全なコード、外部ライブラリ使用、レガシーコード、コメント不足、実験的なコード',
        type: 'text',
        group: '🤖 AI設定',
      },
      {
        key: 'integration_requirements',
        label: '統合要件',
        placeholder:
          'GitHub Actions統合、Slack通知、コメント自動投稿、スコア管理DB連携、レポート生成',
        type: 'textarea',
        group: '🤖 AI設定',
      },

      // 制約・出力設定グループ
      {
        key: 'constraints',
        label: '制約条件',
        placeholder:
          'API利用コスト月10万円以内、レスポンス時間10秒以内、誤判定率5%以下、日本語対応',
        type: 'textarea',
        group: '⚙️ 制約・出力設定',
      },
      {
        key: 'output_format',
        label: '出力形式',
        placeholder:
          '完成プロンプト + テストケース + 評価指標 + 統合手順書 + チューニングガイド + 運用マニュアル',
        type: 'text',
        group: '⚙️ 制約・出力設定',
      },
    ],
  },

  // ツール・ユーティリティ開発
  tool_development: {
    title: 'ツール・ユーティリティ開発',
    icon: '🔧',
    fields: [
      // 基本設定グループ
      {
        key: 'role',
        label: '役割',
        placeholder:
          'ツール開発スペシャリスト（業務効率化ツール作成専門、CLI/GUI開発エキスパート、自動化ソリューション設計8年）',
        type: 'text',
        required: true,
        group: '🎭 基本設定',
      },
      {
        key: 'instructions',
        label: 'メイン指示',
        placeholder: `開発チームの作業効率を向上させるCLIツールを開発してください。プロジェクトの初期化、コード生成、環境構築、デプロイなどを自動化する統合ツールを作成してください。

**主要機能**:
- プロジェクト雛形生成
- 環境設定の自動化
- コード品質チェック
- デプロイメント支援`,
        type: 'textarea',
        required: true,
        group: '🎭 基本設定',
      },
      {
        key: 'context',
        label: '背景・状況',
        placeholder:
          '開発チーム15名、プロジェクト立ち上げ月3-5件、手作業多い、設定ミス頻発、新人のオンボーディング時間短縮希望',
        type: 'textarea',
        group: '🎭 基本設定',
      },

      // ツール設定グループ
      {
        key: 'tool_purpose',
        label: 'ツールの目的',
        placeholder:
          'プロジェクト立ち上げ時間50%短縮、設定ミスゼロ、標準化推進、新人教育効率化、運用負荷軽減',
        type: 'text',
        group: '🔧 ツール設定',
      },
      {
        key: 'target_workflows',
        label: '対象ワークフロー',
        placeholder:
          'React+TypeScript初期化、Docker環境構築、CI/CD設定、テスト環境準備、本番デプロイ準備',
        type: 'textarea',
        group: '🔧 ツール設定',
      },
      {
        key: 'user_personas',
        label: 'ユーザーペルソナ',
        placeholder:
          '新人エンジニア、プロジェクトリード、DevOpsエンジニア、スキルレベル：初級〜上級、CLI経験：基本〜熟練',
        type: 'text',
        group: '🔧 ツール設定',
      },
      {
        key: 'technical_stack',
        label: '技術スタック',
        placeholder:
          'Node.js/TypeScript、React、Docker、AWS、GitHub Actions、主要言語：JavaScript/TypeScript',
        type: 'text',
        group: '🔧 ツール設定',
      },
      {
        key: 'integration_needs',
        label: '統合要件',
        placeholder: 'Git連携、GitHub API、AWS CLI、Docker CLI、npm/yarn、VSCode拡張、Slack通知',
        type: 'textarea',
        group: '🔧 ツール設定',
      },
      {
        key: 'usability_requirements',
        label: 'ユーザビリティ要件',
        placeholder:
          '直感的なコマンド、ヘルプ充実、エラーメッセージ分かりやすく、プログレス表示、設定ファイル対応',
        type: 'text',
        group: '🔧 ツール設定',
      },

      // 制約・出力設定グループ
      {
        key: 'constraints',
        label: '制約条件',
        placeholder:
          'クロスプラットフォーム対応、インストール簡単、依存関係最小限、アップデート機能、設定移行対応',
        type: 'textarea',
        group: '⚙️ 制約・出力設定',
      },
      {
        key: 'output_format',
        label: '出力形式',
        placeholder:
          '完成ツールコード + CLI設計書 + ユーザーマニュアル + インストール手順 + 拡張ガイド + テストスイート',
        type: 'text',
        group: '⚙️ 制約・出力設定',
      },
    ],
  },
}
