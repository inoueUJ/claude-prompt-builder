# Claude Prompt Builder

Vue.js + TypeScript + Pinia + Vue Router + Vitest + 普通のCSS で構築されたClaudeプロンプト生成ツール

## 🎉 TailwindCSS → 通常CSS 移行完了！

TailwindCSSが効いていない問題を解決し、すべて通常のCSSに置き換えました。

### ✅ 実装済み機能
- **6つのシチュエーション別ページ**
  - 📊 ビジネス分析・戦略
  - ✍️ 文章・コンテンツ作成  
  - 💻 技術・プログラミング
  - 🎓 教育・説明
  - 🎨 クリエイティブ・企画
  - ⚖️ 意思決定・評価

- **充実したフィールド設計**
  - 共通フィールド + 各シチュエーション特化フィールド
  - 具体的で分かりやすいプレースホルダー
  - グループ化による視覚的整理

- **高品質なUI/UX（通常CSS実装）**
  - レスポンシブデザイン
  - タブナビゲーション (デスクトップ・モバイル対応)
  - リアルタイムプロンプト生成
  - ワンクリックコピー機能
  - プロンプト品質インジケーター

- **技術的品質**
  - TypeScript + Composition API
  - Pinia (状態管理)
  - Vue Router (ルーティング)
  - Unit Test (Vitest)
  - コンポーネント分割設計

## 🚀 開発サーバー起動

```bash
# 依存関係の再インストール（TailwindCSS削除のため）
npm install

# 開発サーバー起動
npm run dev
```

ブラウザで http://localhost:5173 にアクセス

## 🧪 テスト実行

```bash
npm run test:unit
```

## 🏗️ ビルド

```bash
npm run build
```

## 🚀 Cloudflare Pages デプロイ

```bash
npm run build
wrangler pages deploy dist
```

## 📁 主要な変更点

### CSS移行の内容
- **削除**: TailwindCSS、PostCSS、Autoprefixer依存関係
- **追加**: `/src/assets/main.css` に必要なスタイルを実装
- **置き換え**: 全コンポーネントのTailwindクラス → 通常CSSクラス
- **カスタムスタイル**: `.btn`, `.form-input`, `.card`などの実用的なクラス

### 主要CSSクラス
```css
/* レイアウト */
.container, .container-lg
.flex, .grid, .space-x-*, .space-y-*

/* ボタン */
.btn, .btn-primary, .btn-secondary, .btn-success

/* フォーム */
.form-input, .form-textarea

/* カード */
.card

/* レスポンシブ */
@media (min-width: 768px), @media (min-width: 1024px)
```

## 📁 プロジェクト構成

```
src/
├── assets/
│   └── main.css             # メインCSS（TailwindCSS置き換え）
├── components/
│   ├── PromptForm.vue       # フォーム共通コンポーネント
│   ├── PromptDisplay.vue    # プロンプト表示
│   └── TabNavigation.vue    # ナビゲーション
├── views/
│   ├── BusinessAnalysisView.vue
│   ├── WritingView.vue
│   ├── TechnicalView.vue
│   ├── EducationView.vue
│   ├── CreativeView.vue
│   └── DecisionView.vue
├── stores/
│   ├── promptStore.ts       # Pinia ストア
│   └── __tests__/
│       └── promptStore.test.ts
└── router/
    └── index.ts             # Vue Router設定
```

## 🎯 Vue.js学習ポイント

このプロジェクトで学習できる技術：
- **Composition API** の実践的な使用
- **Pinia** での状態管理パターン
- **TypeScript** でのVue開発
- **Vue Router** を使ったSPA構築
- **Vitest** でのテスト駆動開発
- **通常CSS** でのレスポンシブデザイン

プロンプトビルダーの実装が完了しました！🎉

TailwindCSSの問題も解決し、すべて通常のCSSで動作するようになりました。
