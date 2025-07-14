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
    ]
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
        placeholder: 'フルスタック開発エンジニア（React/Node.js専門、AWS認定ソリューションアーキテクト、開発経験8年）',
        type: 'text',
        required: true,
        group: '🎭 基本設定'
      },
      {
        key: 'instructions',
        label: 'メイン指示',
        placeholder: 'ユーザー認証機能付きのタスク管理アプリをTypeScript + React + Express + MongoDBで構築してください。JWT認証、CRUD操作、リアルタイム更新機能を含めてください',
        type: 'textarea',
        required: true,
        group: '🎭 基本設定'
      },
      {
        key: 'context',
        label: '背景・状況',
        placeholder: 'チーム開発プロジェクト（5名）、アジャイル開発、2週間スプリント、Docker環境での開発、CI/CDパイプライン構築も必要',
        type: 'textarea',
        group: '🎭 基本設定'
      },

      // 技術設定グループ
      {
        key: 'programming_language',
        label: 'プログラミング言語',
        placeholder: 'TypeScript（厳密な型定義）、JavaScript ES2022+、HTML5、CSS3（Tailwind CSS使用）',
        type: 'text',
        group: '💻 技術設定'
      },
      {
        key: 'framework',
        label: 'フレームワーク・ライブラリ',
        placeholder: 'React 18 + Vite、Express.js、Mongoose、Socket.io（リアルタイム）、React Query（状態管理）、React Hook Form（フォーム）',
        type: 'textarea',
        group: '💻 技術設定'
      },
      {
        key: 'technical_requirements',
        label: '技術要件',
        placeholder: 'レスポンシブデザイン、PWA対応、オフライン機能、SEO最適化、アクセシビリティ（WCAG 2.1 AA準拠）、TypeScript厳密モード',
        type: 'textarea',
        group: '💻 技術設定'
      },
      {
        key: 'environment',
        label: '環境・制約',
        placeholder: 'Docker Compose、Node.js 18+、MongoDB 6.0、Redis（セッション管理）、AWS ECR/ECS（本番）、GitHub Actions（CI/CD）',
        type: 'text',
        group: '💻 技術設定'
      },
      {
        key: 'performance_requirements',
        label: 'パフォーマンス要件',
        placeholder: 'First Contentful Paint < 1.5秒、Core Web Vitals全項目Good、API応答時間 < 200ms、同時接続ユーザー1000人対応',
        type: 'text',
        group: '💻 技術設定'
      },
      {
        key: 'security_requirements',
        label: 'セキュリティ要件',
        placeholder: 'HTTPS強制、CSPヘッダー設定、XSS/CSRF対策、SQL インジェクション対策、JWT有効期限管理、パスワードハッシュ化（bcrypt）',
        type: 'textarea',
        group: '💻 技術設定'
      },

      // 制約・出力設定グループ
      {
        key: 'constraints',
        label: '制約条件',
        placeholder: '開発期間6週間、予算制限あり、既存APIとの互換性維持、IE11サポート不要、モバイルファースト設計',
        type: 'textarea',
        group: '⚙️ 制約・出力設定'
      },
      {
        key: 'output_format',
        label: '出力形式',
        placeholder: '詳細なコード例、ディレクトリ構成、package.json、README.md、デプロイ手順、テストコード例を含む完全なプロジェクト構成',
        type: 'text',
        group: '⚙️ 制約・出力設定'
      }
    ]
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
  }
}
