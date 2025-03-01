/**
 * 日付を日本語形式にフォーマットする
 * @param date フォーマットする日付
 * @returns 'YYYY年MM月DD日' 形式の文字列
 */
export function formatDateJP(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

/**
 * 日付を相対時間でフォーマットする
 * @param date フォーマットする日付
 * @returns '〇分前'、'〇時間前'、'〇日前' などの相対時間
 */
export function formatRelativeTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  
  // 分単位（60秒未満は「今」と表示）
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  if (diffMinutes < 1) return '今';
  if (diffMinutes < 60) return `${diffMinutes}分前`;
  
  // 時間単位
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  if (diffHours < 24) return `${diffHours}時間前`;
  
  // 日単位
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays < 7) return `${diffDays}日前`;
  
  // 週単位
  const diffWeeks = Math.floor(diffDays / 7);
  if (diffWeeks < 5) return `${diffWeeks}週間前`;
  
  // 月単位
  const diffMonths = (now.getFullYear() - d.getFullYear()) * 12 + now.getMonth() - d.getMonth();
  if (diffMonths < 12) return `${diffMonths}ヶ月前`;
  
  // 年単位
  const diffYears = Math.floor(diffMonths / 12);
  return `${diffYears}年前`;
}

/**
 * テキストを指定された長さで切り詰め、省略記号を追加する
 * @param text 切り詰めるテキスト
 * @param maxLength 最大長
 * @returns 切り詰められたテキスト
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

/**
 * 数値を日本語の桁区切りでフォーマットする
 * @param num フォーマットする数値
 * @returns 桁区切りされた文字列
 */
export function formatNumber(num: number): string {
  return num.toLocaleString('ja-JP');
}

/**
 * マークダウンテキストをプレーンテキストに変換する
 * @param markdown マークダウンテキスト
 * @returns プレーンテキスト
 */
export function markdownToPlainText(markdown: string): string {
  // 見出し、リスト、強調、リンクなどの基本的なマークダウン記法を削除
  return markdown
    .replace(/#{1,6}\s+/g, '') // 見出し
    .replace(/\*\*(.*?)\*\*/g, '$1') // 太字
    .replace(/\*(.*?)\*/g, '$1') // 斜体
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // リンク
    .replace(/^>+\s+/gm, '') // 引用
    .replace(/^[*+-]\s+/gm, '') // 箇条書き
    .replace(/^(\d+)\.\s+/gm, '$1. ') // 番号付きリスト
    .replace(/`{1,3}(.*?)`{1,3}/g, '$1') // インラインコード、コードブロック
    .replace(/\n{2,}/g, '\n'); // 複数の改行を1つにまとめる
}
