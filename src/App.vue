<script setup lang="ts">
import { RouterView } from 'vue-router'
import TabNavigation from '@/components/TabNavigation.vue'
</script>

<template>
  <div id="app" class="app-container">
    <!-- ヘッダー -->
    <header class="app-header">
      <div class="header-content">
        <div class="header-info">
          <h1 class="app-title">
            <span class="app-icon">🤖</span>
            Claude Prompt Builder
          </h1>
          <p class="app-description visually-hidden">
            XMLタグを自動生成して、より効果的なプロンプトを作成
          </p>
        </div>
      </div>
    </header>

    <!-- メインコンテンツ -->
    <main class="main-content">
      <!-- タブナビゲーション -->
      <TabNavigation />

      <!-- 現在のページコンテンツ（高さ制限付き） -->
      <div class="content-area">
        <RouterView />
      </div>
    </main>

    <!-- フッター -->
    <footer class="app-footer">
      <div class="footer-content">
        <div class="footer-info">© 2025 Claude Prompt Builder</div>
        <div class="footer-links">
          <a
            href="https://docs.anthropic.com/ja/docs/build-with-claude/prompt-engineering/overview"
            target="_blank"
            class="footer-link"
          >
            公式ドキュメント
          </a>
          <a href="https://github.com" target="_blank" class="footer-link">GitHub</a>
          <router-link to="/about-this-app" class="footer-link">このアプリについて</router-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.app-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f3f4f6;
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    sans-serif;
}

.app-header {
  background: white;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border-bottom: 1px solid #e5e7eb;
  flex-shrink: 0;
}

.header-content {
  max-width: 1536px;
  margin: 0 auto;
  padding: 6px 20px; /* 上下パディングを極限まで縮小 */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app-title {
  font-size: 1.25rem; /* フォントサイズをさらに縮小 */
  font-weight: 600;
  color: #1f2937;
  margin: 0;
  display: flex;
  align-items: center;
}

.app-icon {
  margin-right: 8px;
  font-size: 1.6rem; /* アイコンサイズをさらに縮小 */
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 1536px;
  margin: 0 auto;
  padding: 12px 16px 0;
  width: 100%;
  overflow: hidden;
}

.content-area {
  flex: 1;
  overflow-y: auto; /* 垂直方向のスクロールを有効にする */
  min-height: 0;
}

.app-footer {
  background: #f9fafb;
  border-top: 1px solid #e5e7eb;
  flex-shrink: 0;
}

.footer-content {
  max-width: 1536px;
  margin: 0 auto;
  padding: 12px 20px; /* パディングを縮小 */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-info {
  font-size: 0.75rem; /* フォントサイズを縮小 */
  color: #6b7280;
}

.footer-links {
  display: flex;
  gap: 16px; /* ギャップを縮小 */
}

.footer-link {
  font-size: 0.75rem; /* フォントサイズを縮小 */
  color: #3b82f6;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: #1d4ed8;
}

@media (max-width: 768px) {
  .header-content {
    padding: 8px 16px;
  }

  .app-title {
    font-size: 1.1rem;
  }

  .app-icon {
    font-size: 1.5rem;
  }

  .main-content {
    padding: 8px 12px 0;
  }

  .footer-content {
    flex-direction: column;
    gap: 8px;
    padding: 10px;
  }
}
</style>
