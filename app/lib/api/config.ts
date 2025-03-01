// 環境変数のインターフェース定義
interface EnvConfig {
  ANTHROPIC_API_KEY: string;
  DATABASE_URL: string;
  NODE_ENV: 'development' | 'production' | 'test';
  API_TIMEOUT_MS: number;
}

// デフォルト値を含む設定
export const config: EnvConfig = {
  ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY || '',
  DATABASE_URL: process.env.DATABASE_URL || 'file:./dev.db',
  NODE_ENV: (process.env.NODE_ENV as 'development' | 'production' | 'test') || 'development',
  API_TIMEOUT_MS: parseInt(process.env.API_TIMEOUT_MS || '30000', 10),
};

// 設定の検証（開発環境でのみ実行）
if (config.NODE_ENV === 'development') {
  const missingEnvVars = Object.entries(config)
    .filter(([key, value]) => {
      // DATABASE_URL と NODE_ENV はデフォルト値があるので除外
      if (key === 'DATABASE_URL' || key === 'NODE_ENV') return false;
      return !value;
    })
    .map(([key]) => key);

  if (missingEnvVars.length > 0) {
    console.warn(`⚠️ 不足している環境変数: ${missingEnvVars.join(', ')}`);
  }
}

// システムプロンプトの設定
export const SYSTEM_PROMPTS = {
  GENERAL: `あなたは企業グループのAI活用を支援するアシスタントです。
生成AIの活用事例やプロンプト例について、分かりやすく簡潔に説明してください。
専門用語は極力避け、具体的な例を交えて説明するようにしてください。`,

  PROMPT_GENERATOR: `あなたは企業向けの優れたプロンプト作成の専門家です。
以下のガイドラインに従ってプロンプトを生成してください：
1. 目的を明確に: 何を達成したいかを具体的に
2. コンテキストを提供: 背景情報や参考資料を含める
3. 出力フォーマットを指定: 必要な形式を明示する
4. 制約条件を設定: 文字数や範囲などの制限を設ける
5. 例示を含める: 期待する出力の例を示す

プロンプトは業務活用に特化し、実用的かつ具体的なものにしてください。`,

  USE_CASE_ANALYZER: `あなたは企業のAI活用事例を分析する専門家です。
事例を分析する際は、以下の観点で評価してください：
1. 業務効率化の度合い: 時間短縮、コスト削減など
2. 創造性・革新性: 新しいアイデアや手法の導入
3. 実現可能性: 技術的な障壁、必要なリソース
4. 拡張性: 他部門や他企業への応用可能性
5. リスク: 倫理的・法的・社会的影響

分析は客観的で建設的なものにし、改善点も提案してください。`,
};
