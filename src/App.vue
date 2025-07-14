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
          <p class="app-description">
            XMLタグを自動生成して、より効果的なプロンプトを作成
          </p>
        </div>
        
        <!-- バージョン情報 -->
        <div class="version-info">
          <div class="version-number">Version 1.0.0</div>
          <div class="tech-stack">Built with Vue 3 + TypeScript</div>
        </div>
      </div>
    </header>

    <!-- メインコンテンツ -->
    <main class="main-content">
      <!-- タブナビゲーション -->
      <TabNavigation />
      
      <!-- 現在のページコンテンツ -->
      <RouterView />
    </main>

    <!-- フッター -->
    <footer class="app-footer">
      <div class="footer-content">
        <div class="footer-info">
          © 2025 Claude Prompt Builder. 効果的なプロンプト作成をサポート
        </div>
        <div class="footer-links">
          <a 
            href="https://docs.anthropic.com/ja/docs/build-with-claude/prompt-engineering/overview" 
            target="_blank"
            class="footer-link"
          >
            📚 Anthropic公式ドキュメント
          </a>
          <a 
            href="https://github.com" 
            target="_blank"
            class="footer-link"
          >
            💻 GitHub
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.app-header {
  background: white;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  border-bottom: 1px solid #e5e7eb;
}

.header-content {
  max-width: 1536px;
  margin: 0 auto;
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-info {
  flex: 1;
}

.app-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 8px 0;
  display: flex;
  align-items: center;
}

.app-icon {
  margin-right: 12px;
  font-size: 2.5rem;
}

.app-description {
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
}

.version-info {
  text-align: right;
}

.version-number {
  font-size: 0.75rem;
  color: #6b7280;
  font-weight: 500;
}

.tech-stack {
  font-size: 0.75rem;
  color: #9ca3af;
}

.main-content {
  max-width: 1536px;
  margin: 0 auto;
  padding: 32px 24px;
}

.app-footer {
  background: white;
  border-top: 1px solid #e5e7eb;
  margin-top: 48px;
}

.footer-content {
  max-width: 1536px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.footer-info {
  font-size: 0.875rem;
  color: #6b7280;
  text-align: center;
}

.footer-links {
  display: flex;
  gap: 24px;
}

.footer-link {
  font-size: 0.875rem;
  color: #3b82f6;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: #1d4ed8;
}

/* レスポンシブ対応 */
@media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
  }
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
  
  .version-info {
    text-align: center;
  }
  
  .app-title {
    font-size: 1.75rem;
    justify-content: center;
  }
  
  .main-content {
    padding: 24px 16px;
  }
  
  .footer-links {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
}
</style>
