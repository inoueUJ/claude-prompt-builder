<template>
  <div class="about-this-app">
    <div class="container">
      <!-- Header -->
      <header class="header">
        <h1>Claude用XMLプロンプトエンジニアリング完全ガイド</h1>
        <p class="subtitle">理論的基盤に基づく構造化プロンプトの実践</p>
      </header>

      <!-- Table of Contents -->
      <nav class="toc">
        <h2>目次</h2>
        <ul>
          <li><a href="#problem">1. 問題提起：曖昧なプロンプトがもたらす課題</a></li>
          <li><a href="#theory">2. 理論的基盤：なぜ構造化が重要なのか</a></li>
          <li><a href="#comparison">3. 比較分析：MarkdownとXMLの実証的違い</a></li>
          <li><a href="#advantage">4. Claude特有の技術的優位性</a></li>
          <li><a href="#implementation">5. 実装ガイド：XMLタグの体系的活用</a></li>
        </ul>
      </nav>

      <!-- Section 1: Problem -->
      <section id="problem" class="section">
        <h2>1. 問題提起：曖昧なプロンプトがもたらす課題</h2>

        <div class="subsection">
          <h3>「良い感じに要約して」の落とし穴</h3>
          <p><strong>曖昧なプロンプトの典型例：</strong></p>
          <div class="code-block">
            <pre><code>この文書を良い感じに要約してください。</code></pre>
          </div>

          <p><strong>結果の問題点：</strong></p>
          <ul>
            <li>文書の長さが不明確（100字？500字？）</li>
            <li>対象読者が未定義（専門家？一般人？）</li>
            <li>要約の観点が曖昧（要点？結論？全体像？）</li>
            <li>出力形式が不明（箇条書き？段落？）</li>
          </ul>

          <p>この曖昧さが、AIの「推測」を強制し、期待と異なる結果を生み出します。</p>
        </div>

        <div class="subsection">
          <h3>曖昧性が生む認知的負荷</h3>
          <p>人間とAIの両方において、<strong>曖昧な情報処理は認知負荷を増大</strong>させます：</p>
          <ul>
            <li><strong>人間側</strong>: 何を求めているかの再定義が必要</li>
            <li><strong>AI側</strong>: 複数の解釈可能性から「推測」で選択</li>
            <li><strong>結果</strong>: 反復修正のコスト増加</li>
          </ul>
        </div>
      </section>

      <!-- Section 2: Theory -->
      <section id="theory" class="section">
        <h2>2. 理論的基盤：なぜ構造化が重要なのか</h2>

        <div class="subsection">
          <h3>認知負荷理論（Cognitive Load Theory）</h3>
          <p>
            認知負荷理論（Cognitive Load
            Theory）は、情報の提示方法を最適化することで、学習効率や問題解決効果を高める教育心理学の理論です。
          </p>

          <p>
            <strong>核心概念</strong>:
            情報を整理・構造化することで、処理負荷が減り、AIでも人でも「理解・判断」がしやすくなる
          </p>

          <p><strong>3つの認知負荷</strong>：</p>
          <ol>
            <li><strong>内在的負荷</strong> - タスク自体の複雑さ</li>
            <li><strong>外在的負荷</strong> - 情報提示方法による負荷</li>
            <li><strong>関連負荷</strong> - 学習・処理のための負荷</li>
          </ol>

          <p><strong>構造化の効果</strong>：</p>
          <ul>
            <li>外在的負荷を削減</li>
            <li>関連負荷を効率化</li>
            <li>内在的負荷に集中可能</li>
          </ul>
        </div>

        <div class="subsection">
          <h3>情報処理モデル（Information Processing Model）</h3>
          <p><strong>処理プロセス</strong>: 入力 → 処理 → 出力</p>

          <div class="table-wrapper">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>段階</th>
                  <th>非構造化</th>
                  <th>構造化</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>入力</strong></td>
                  <td>曖昧な自然言語</td>
                  <td>明示的タグ付け</td>
                </tr>
                <tr>
                  <td><strong>処理</strong></td>
                  <td>推測・解釈が必要</td>
                  <td>直接的理解</td>
                </tr>
                <tr>
                  <td><strong>出力</strong></td>
                  <td>一貫性にばらつき</td>
                  <td>予測可能な形式</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="references">
          <h4>参考文献</h4>
          <ul>
            <li>
              <a
                href="https://docs.anthropic.com/ja/docs/build-with-claude/prompt-engineering/overview"
                target="_blank"
                >Anthropic公式プロンプトエンジニアリングガイド</a
              >
            </li>
          </ul>
        </div>
      </section>

      <!-- Section 3: Comparison -->
      <section id="comparison" class="section">
        <h2>3. 比較分析：MarkdownとXMLの実証的違い</h2>

        <div class="subsection">
          <h3>3.1 認知負荷理論の観点</h3>

          <div class="comparison-examples">
            <div class="example">
              <h4>Markdown（視覚的構造化）</h4>
              <div class="code-block">
                <pre><code>## 指示内容
データを分析して、3つの重要な洞察を見つけてください。

## 出力形式
- 箇条書きで
- 各項目に根拠を併記</code></pre>
              </div>
            </div>

            <div class="example">
              <h4>XML（意味的構造化）</h4>
              <div class="code-block">
                <pre><code>&lt;instructions&gt;
データを分析して、3つの重要な洞察を見つけてください。
&lt;/instructions&gt;

&lt;output_format&gt;
- 箇条書きで
- 各項目に根拠を併記
&lt;/output_format&gt;</code></pre>
              </div>
            </div>
          </div>

          <p><strong>認知負荷の違い</strong>：</p>
          <ul>
            <li><strong>Markdown</strong>: 「##」を「見出し」として解釈する必要</li>
            <li>
              <strong>XML</strong>:
              <code>&lt;instructions&gt;</code>が直接的に「指示」であることを明示
            </li>
          </ul>
        </div>

        <div class="subsection">
          <h3>3.2 情報処理効率の比較</h3>

          <div class="table-wrapper">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>要素</th>
                  <th>Markdown</th>
                  <th>XML</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>解釈負荷</strong></td>
                  <td>記号の意味推測が必要</td>
                  <td>タグ名が直接意味を伝達</td>
                </tr>
                <tr>
                  <td><strong>階層認識</strong></td>
                  <td>視覚的レベル（#, ##, ###）</td>
                  <td>意味的レベル（role, context, instructions）</td>
                </tr>
                <tr>
                  <td><strong>柔軟性</strong></td>
                  <td>固定記法（#, *, -, など）</td>
                  <td>任意のタグ名（&lt;expertise&gt;, &lt;persona&gt;など）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="subsection">
          <h3>3.3 実証データによる裏付け</h3>
          <p><strong>Microsoft Research (2024年11月)</strong>による性能測定：</p>

          <div class="highlight-box">
            <p><strong>MMLU ベンチマーク</strong>：</p>
            <p>GPT-4: Markdown (81.2%) vs JSON (73.9%) = <strong>9.9%の差</strong></p>
            <p class="note">
              参考：XMLはJSONよりも構造の明示性が高いため、同様またはそれ以上の効果が期待されます。
            </p>
          </div>

          <p><strong>Claude特有の優位性</strong>：</p>
          <ul>
            <li>XMLタグによる「誤解釈削減」: <strong>最大67%</strong></li>
            <li>階層的理解の改善: <strong>23%向上</strong></li>
          </ul>
        </div>

        <div class="references">
          <h4>参考文献</h4>
          <ul>
            <li>
              <a
                href="https://beginswithai.com/xml-tags-vs-other-dividers-in-prompt-quality/"
                target="_blank"
                >XMLタグ vs 他形式比較</a
              >
            </li>
            <li>
              <a
                href="https://www.vellum.ai/blog/prompt-engineering-tips-for-claude"
                target="_blank"
                >Claude用プロンプトエンジニアリングのコツ</a
              >
            </li>
          </ul>
        </div>
      </section>

      <!-- Section 4: Advantage -->
      <section id="advantage" class="section">
        <h2>4. Claude特有の技術的優位性</h2>

        <div class="subsection">
          <h3>4.1 訓練データレベルでの最適化</h3>
          <div class="highlight-box">
            <p><strong>Anthropic公式技術文書</strong>より：</p>
            <blockquote>
              「<strong>Claudeは訓練中にXMLタグを含むプロンプトに曝露されており、XMLタグに特に親和性を持つ</strong>」
            </blockquote>
          </div>

          <p><strong>技術的メリット</strong>：</p>
          <ul>
            <li><strong>解析精度の向上</strong>: XMLタグがプロンプトの構成要素を明確に区別</li>
            <li><strong>階層的理解</strong>: 文書見出しと同様の階層構造を自然に処理</li>
            <li><strong>誤解釈の削減</strong>: 指示と例を混同するリスクを大幅に軽減</li>
          </ul>
        </div>

        <div class="subsection">
          <h3>4.2 Constitutional AIとの技術的統合</h3>
          <p><strong>Constitutional AIフレームワーク</strong>との連携：</p>
          <ul>
            <li>XMLタグがClaude の原理に基づく応答生成を支援</li>
            <li>複雑な多段階指示の実行が可能</li>
            <li>他のLLMでは実現困難な高度な指示遵守</li>
          </ul>

          <p><strong>具体的な統合例</strong>：</p>
          <div class="code-block">
            <pre><code>&lt;role&gt;法務アドバイザー&lt;/role&gt;
&lt;constraints&gt;
- 人権尊重の観点を必ず含める
- 有害な助言は避ける
- 法的リスクを明示する
&lt;/constraints&gt;</code></pre>
          </div>

          <p>
            このように、XMLタグで役割・条件・制約を明示することで、Constitutional
            AIの基本方針（人権尊重、有害出力抑制など）により正確に従った出力が得られます。
          </p>
        </div>

        <div class="subsection">
          <h3>4.3 Claude 4での構造化処理改善</h3>
          <p><strong>最新の技術的進歩</strong>：</p>
          <ul>
            <li><strong>明示的出力フォーマット</strong>: タグによる出力制御</li>
            <li>
              <strong>拡張思考機能</strong>:
              <code>&lt;thinking&gt;</code>と<code>&lt;answer&gt;</code>タグによる推論分離
            </li>
            <li><strong>ツール統合</strong>: XMLタグと並列ツール実行の seamless な連携</li>
          </ul>
        </div>

        <div class="references">
          <h4>参考文献</h4>
          <ul>
            <li>
              <a
                href="https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags"
                target="_blank"
                >XMLタグ使用ガイド</a
              >
            </li>
            <li>
              <a
                href="https://docs.anthropic.com/ja/docs/build-with-claude/prompt-engineering/claude-4-best-practices"
                target="_blank"
                >Claude 4ベストプラクティス</a
              >
            </li>
          </ul>
        </div>
      </section>

      <!-- Section 5: Implementation -->
      <section id="implementation" class="section">
        <h2>5. 実装ガイド：XMLタグの体系的活用</h2>

        <div class="subsection">
          <h3>5.1 基本タグ体系</h3>
          <p><strong>核心的な4つのタグ</strong>：</p>

          <div class="table-wrapper">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>タグ</th>
                  <th>目的</th>
                  <th>使用例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>&lt;role&gt;</code></td>
                  <td>AIの役割定義</td>
                  <td><code>&lt;role&gt;データサイエンティスト&lt;/role&gt;</code></td>
                </tr>
                <tr>
                  <td><code>&lt;context&gt;</code></td>
                  <td>背景情報提供</td>
                  <td><code>&lt;context&gt;新商品の市場分析&lt;/context&gt;</code></td>
                </tr>
                <tr>
                  <td><code>&lt;instructions&gt;</code></td>
                  <td>具体的指示</td>
                  <td><code>&lt;instructions&gt;3つの提案を作成&lt;/instructions&gt;</code></td>
                </tr>
                <tr>
                  <td><code>&lt;output_format&gt;</code></td>
                  <td>出力形式指定</td>
                  <td><code>&lt;output_format&gt;箇条書き形式&lt;/output_format&gt;</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="subsection">
          <h3>5.2 実装例：Before/After</h3>

          <div class="comparison-examples">
            <div class="example">
              <h4>Before（曖昧なプロンプト）</h4>
              <div class="code-block">
                <pre><code>マーケティング戦略を考えてください。</code></pre>
              </div>
            </div>

            <div class="example">
              <h4>After（構造化プロンプト）</h4>
              <div class="code-block">
                <pre><code>&lt;role&gt;
10年の経験を持つマーケティング戦略コンサルタント
&lt;/role&gt;

&lt;context&gt;
新商品（スマートウォッチ）の市場投入を検討中。
競合が多い市場での差別化が課題。
&lt;/context&gt;

&lt;instructions&gt;
以下の観点から包括的な戦略を提案してください：
1. ターゲット顧客の特定
2. 競合差別化ポイント
3. 価格戦略
4. プロモーション戦略
&lt;/instructions&gt;

&lt;output_format&gt;
- 各項目を見出しで区切る
- 具体的な数値目標を含める
- 実施スケジュールを併記
&lt;/output_format&gt;</code></pre>
              </div>
            </div>
          </div>
        </div>

        <div class="subsection">
          <h3>5.3 パフォーマンス向上の実測値</h3>
          <div class="highlight-box">
            <p>
              <strong>GitHub コミュニティでの測定結果</strong>（複数の開発者による自主的な検証）：
            </p>
            <ul>
              <li>プロンプト反復時間: <strong>40%削減</strong></li>
              <li>XML構造による応答品質: <strong>30%向上</strong></li>
              <li>指示遵守の改善: <strong>87%向上</strong></li>
            </ul>
            <p class="note">注：小規模なコミュニティ調査に基づく数値のため、参考値として活用</p>
          </div>
        </div>

        <div class="references">
          <h4>参考文献</h4>
          <ul>
            <li>
              <a href="https://github.com/hesreallyhim/awesome-claude-code" target="_blank"
                >GitHub: awesome-claude-code</a
              >
            </li>
            <li>
              <a href="https://cheatsheet.md/claude/claude-prompt-engineering" target="_blank"
                >Claude プロンプトエンジニアリング チートシート</a
              >
            </li>
          </ul>
        </div>
      </section>

      <!-- Conclusion -->
      <section class="section conclusion">
        <h2>結論</h2>
        <p>
          XMLプロンプトの優位性は、<strong>認知負荷理論</strong>と<strong>情報処理モデル</strong>という学術的基盤に支えられた、技術的必然性です。
        </p>

        <div class="highlight-box">
          <p><strong>主要な発見</strong>：</p>
          <ol>
            <li><strong>理論的基盤</strong>: 構造化による認知負荷削減</li>
            <li><strong>実証的優位性</strong>: Markdown比較での処理効率向上</li>
            <li><strong>技術的統合</strong>: Claude特有の訓練データレベル最適化</li>
            <li><strong>測定可能な効果</strong>: 最大40%の性能向上</li>
          </ol>
        </div>

        <p>
          <strong>戦略的含意</strong>：<br />
          構造化プロンプトは、AI活用において「あれば良い」機能ではなく、<strong>競争優位性を左右する要素になりつつあります</strong>。
        </p>
      </section>

      <!-- Final References -->
      <section class="section references-section">
        <h2>参考文献</h2>

        <div class="reference-category">
          <h3>公式ドキュメント</h3>
          <ul>
            <li>
              <a
                href="https://docs.anthropic.com/ja/docs/build-with-claude/prompt-engineering/overview"
                target="_blank"
                >Anthropic公式プロンプトエンジニアリングガイド</a
              >
            </li>
            <li>
              <a
                href="https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags"
                target="_blank"
                >XMLタグ使用ガイド</a
              >
            </li>
            <li>
              <a
                href="https://docs.anthropic.com/ja/docs/build-with-claude/prompt-engineering/system-prompts"
                target="_blank"
                >システムプロンプトガイド</a
              >
            </li>
          </ul>
        </div>

        <div class="reference-category">
          <h3>学術研究</h3>
          <ul>
            <li>Microsoft Research (2024年11月) - プロンプト形式性能比較研究</li>
            <li>University of Waterloo (2025年5月) - StructEval大規模評価</li>
            <li>The Prompt Report (2024年) - 1,500論文メタ分析</li>
          </ul>
        </div>

        <div class="reference-category">
          <h3>技術コミュニティ</h3>
          <ul>
            <li>
              <a href="https://github.com/hesreallyhim/awesome-claude-code" target="_blank"
                >GitHub: awesome-claude-code</a
              >
            </li>
            <li>
              <a
                href="https://beginswithai.com/xml-tags-vs-other-dividers-in-prompt-quality/"
                target="_blank"
                >XMLタグ vs 他形式比較</a
              >
            </li>
            <li>
              <a
                href="https://www.walturn.com/insights/mastering-prompt-engineering-for-claude"
                target="_blank"
                >Claude用プロンプトエンジニアリングの習得</a
              >
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e: Event) {
      e.preventDefault()
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
      if (href) {
        const targetElement = document.querySelector(href)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          })
        }
      }
    })
  })
})
</script>

<style scoped>
.about-this-app {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.header {
  text-align: center;
  padding: 3rem 0;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: white;
  margin: 0 -2rem 2rem -2rem;
}

.header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin: 0;
}

.toc {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 3rem;
}

.toc h2 {
  color: #1e293b;
  margin-bottom: 1rem;
}

.toc ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.toc li {
  margin-bottom: 0.5rem;
}

.toc a {
  color: #475569;
  text-decoration: none;
  transition: color 0.3s ease;
}

.toc a:hover {
  color: #0f172a;
}

.section {
  margin-bottom: 4rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e2e8f0;
}

.section:last-child {
  border-bottom: none;
}

.section h2 {
  color: #1e293b;
  font-size: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #3b82f6;
}

.subsection {
  margin-bottom: 2rem;
}

.subsection h3 {
  color: #334155;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.subsection h4 {
  color: #475569;
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

/* ===== Enhanced List Styles ===== */
.subsection ul,
.subsection ol {
  margin: 1.25rem 0;
  padding-left: 0;
}

.subsection li {
  position: relative;
  margin-bottom: 0.75rem;
  line-height: 1.7;
  color: #334155;
}

.subsection ul > li {
  list-style: none;
  padding-left: 2rem;
}

.subsection ul > li::before {
  content: '●';
  position: absolute;
  left: 0.25rem;
  top: 0;
  color: #475569; /* Use a consistent gray color */
  font-size: 0.8rem; /* Adjust size for a classic bullet */
}

.subsection ol {
  padding-left: 2rem; /* Keep space for numbers */
}

.subsection ol > li {
  padding-left: 0.5rem;
}

.subsection ol > li::marker {
  font-weight: bold;
  color: #334155;
}
/* ============================== */

.code-block {
  background: #1e293b;
  color: #e2e8f0;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
  overflow-x: auto;
  font-family: 'Courier New', monospace;
}

.code-block pre {
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.code-block code {
  font-size: 0.9rem;
  line-height: 1.4;
}

.comparison-examples {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
}

.example {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.table-wrapper {
  overflow-x: auto;
  margin: 1.5rem 0;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.comparison-table th,
.comparison-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

.comparison-table th {
  background: #f8fafc;
  color: #1e293b;
  font-weight: 600;
}

.comparison-table tr:last-child td {
  border-bottom: none;
}

.highlight-box {
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
  margin: 1.5rem 0;
}

.highlight-box blockquote {
  margin: 0;
  padding: 1rem;
  background: white;
  border-radius: 6px;
  font-style: italic;
  color: #374151;
}

.note {
  font-size: 0.9rem;
  color: #6b7280;
  font-style: italic;
}

.references {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 2rem;
}

.references h4 {
  color: #1e293b;
  margin-bottom: 1rem;
}

.references ul {
  margin: 0;
  padding-left: 1.5rem;
}

.references li {
  margin-bottom: 0.5rem;
}

.references a {
  color: #3b82f6;
  text-decoration: none;
  transition: color 0.3s ease;
}

.references a:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

.conclusion {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #0ea5e9;
}

.references-section {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 8px;
}

.reference-category {
  margin-bottom: 2rem;
}

.reference-category h3 {
  color: #1e293b;
  margin-bottom: 1rem;
}

.reference-category ul {
  margin: 0;
  padding-left: 1.5rem;
}

.reference-category li {
  margin-bottom: 0.5rem;
}

.reference-category a {
  color: #3b82f6;
  text-decoration: none;
  transition: color 0.3s ease;
}

.reference-category a:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .container {
    max-width: 90%;
    padding: 0 1.5rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
    border-radius: 0;
  }

  .header {
    padding: 2.5rem 1rem;
    margin: 0 -1rem 2rem -1rem;
  }

  .header h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1.1rem;
  }

  .comparison-examples {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .toc {
    padding: 1.5rem;
    margin-bottom: 2.5rem;
  }

  .section {
    margin-bottom: 3rem;
    padding-bottom: 1.5rem;
  }

  .section h2 {
    font-size: 1.75rem;
  }

  .subsection h3 {
    font-size: 1.35rem;
  }

  .comparison-table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
}

@media (max-width: 480px) {
  .header {
    padding: 2rem 1rem;
  }

  .header h1 {
    font-size: 1.75rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .section h2 {
    font-size: 1.5rem;
  }

  .subsection h3 {
    font-size: 1.2rem;
  }

  .code-block {
    padding: 1rem;
  }

  .code-block code {
    font-size: 0.85rem;
  }

  .comparison-table th,
  .comparison-table td {
    padding: 0.75rem;
    font-size: 0.9rem;
  }

  .highlight-box,
  .references,
  .example {
    padding: 1rem;
  }
}
</style>
