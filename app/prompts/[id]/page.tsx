import { HeaderComponent } from '../../components/layout/Header';
import { FooterComponent } from '../../components/layout/Footer';
import Link from 'next/link';
import { BookmarkIcon, CopyIcon, Share2Icon, ThumbsUpIcon, ArrowLeftIcon } from 'lucide-react';
import { formatDateJP } from '@/app/lib/utils/formatters';
import { Category } from '@/app/lib/api/types';

export default function PromptDetailPage({ params }: { params: { id: string } }) {
  // 仮のプロンプトデータ（実際はIDに基づいてデータを取得）
  const prompt = {
    id: parseInt(params.id),
    title: 'コードレビュー支援プロンプト',
    description: 'ソースコードの問題点を自動分析し、改善点を提案するプロンプト',
    content: `以下のソースコードをレビューし、以下の観点からフィードバックを提供してください：

1. コーディング規約違反
2. バグや潜在的問題
3. パフォーマンス最適化の余地
4. セキュリティリスク
5. リファクタリングの提案

各問題点について、どこに問題があるか、なぜ問題なのか、どう修正すべきかを具体的に説明してください。

\`\`\`[言語名]
[コードをここに貼り付け]
\`\`\`

レビュー結果は以下の形式でまとめてください：

## 概要
[コード全体の簡単な評価]

## 詳細フィードバック
### 1. [問題のカテゴリ]
- **問題箇所**: [コードの場所]
- **問題点**: [問題の説明]
- **改善案**: [具体的な修正案]
- **重要度**: [高/中/低]

### 2. [問題のカテゴリ]
...

## 良い点
- [コードの良い点1]
- [コードの良い点2]
...

## まとめと推奨事項
[全体のまとめと優先的に対応すべき項目]`,
    categoryId: 5,
    category: { id: 5, name: 'IT・システム', icon: '💻' } as Category,
    userId: 4,
    user: { id: 4, name: '田中 太郎', email: 'tanaka@example.com', companyId: 4 },
    company: { id: 4, name: 'D社 システム開発部' },
    published: true,
    createdAt: new Date('2025-02-25'),
    updatedAt: new Date('2025-02-25'),
    likes: 24,
    usageCount: 156,
  };

  // 仮の関連プロンプト
  const relatedPrompts = [
    {
      id: 7,
      title: 'コード最適化プロンプト',
      description: 'パフォーマンスを向上させるためのコード最適化提案を生成',
      categoryId: 5,
      category: { id: 5, name: 'IT・システム', icon: '💻' } as Category,
      createdAt: new Date('2025-02-28'),
    },
    {
      id: 8,
      title: 'ユニットテスト生成プロンプト',
      description: '与えられたコードに対する網羅的なユニットテストを自動生成',
      categoryId: 5,
      category: { id: 5, name: 'IT・システム', icon: '💻' } as Category,
      createdAt: new Date('2025-02-26'),
    },
    {
      id: 9,
      title: 'コードドキュメント作成プロンプト',
      description: 'ソースコードの機能や使い方を説明するドキュメントを生成',
      categoryId: 5,
      category: { id: 5, name: 'IT・システム', icon: '💻' } as Category,
      createdAt: new Date('2025-02-24'),
    }
  ];

  return (
    <main>
      <HeaderComponent />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/prompts" className="inline-flex items-center text-gray-600 hover:text-blue-600">
            <ArrowLeftIcon size={16} className="mr-1" />
            <span>プロンプト一覧に戻る</span>
          </Link>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* メインコンテンツ */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-2xl font-bold text-gray-800">{prompt.title}</h1>
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-blue-500 p-1" aria-label="ブックマークに追加">
                    <BookmarkIcon size={20} />
                  </button>
                  <button className="text-gray-400 hover:text-green-500 p-1" aria-label="プロンプトをコピー">
                    <CopyIcon size={20} />
                  </button>
                  <button className="text-gray-400 hover:text-purple-500 p-1" aria-label="プロンプトを共有">
                    <Share2Icon size={20} />
                  </button>
                </div>
              </div>
              
              {prompt.description && (
                <p className="text-gray-600 mb-6">{prompt.description}</p>
              )}
              
              <div className="flex flex-wrap gap-2 mb-6">
                {prompt.category && (
                  <span className="inline-block bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                    {prompt.category.icon} {prompt.category.name}
                  </span>
                )}
                <span className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                  利用回数: {prompt.usageCount}
                </span>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-xl font-semibold mb-4">プロンプト内容</h2>
                <div className="bg-gray-50 rounded-lg p-5 mb-6 font-mono text-sm whitespace-pre-wrap">
                  {prompt.content}
                </div>
                
                <div className="flex justify-between items-center mt-8">
                  <button className="inline-flex items-center text-gray-600 hover:text-blue-600">
                    <ThumbsUpIcon size={18} className="mr-1" />
                    <span>役に立った ({prompt.likes})</span>
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    このプロンプトを使う
                  </button>
                </div>
              </div>
            </div>
            
            {/* 使用例 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">使用例</h2>
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-50 p-4 border-b">
                  <h3 className="font-medium">入力例</h3>
                </div>
                <div className="p-4 text-sm">
                  <p className="mb-2">以下のJavaScriptコードをレビューしてください：</p>
                  <pre className="bg-gray-50 p-3 rounded">{`function calculateTotal(items) {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    total = total + items[i].price;
  }
  return total;
}`}</pre>
                </div>
                <div className="bg-gray-50 p-4 border-t border-b">
                  <h3 className="font-medium">出力例</h3>
                </div>
                <div className="p-4 text-sm">
                  <h4 className="font-medium mb-2">概要</h4>
                  <p className="mb-4">このコードは基本的な機能を果たしていますが、いくつかの改善点があります。特にモダンなJavaScript機能の活用とエラーハンドリングが必要です。</p>
                  
                  <h4 className="font-medium mb-2">詳細フィードバック</h4>
                  <div className="mb-4">
                    <p className="font-medium">1. 言語機能の活用</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>問題箇所</strong>: varキーワードの使用</li>
                      <li><strong>問題点</strong>: varはブロックスコープを持たず、意図しない動作の原因となる可能性があります</li>
                      <li><strong>改善案</strong>: constとletを使用する</li>
                      <li><strong>重要度</strong>: 中</li>
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <p className="font-medium">2. コードの簡潔さ</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>問題箇所</strong>: forループと加算処理</li>
                      <li><strong>問題点</strong>: 冗長なコードになっている</li>
                      <li><strong>改善案</strong>: Array.reduceを使用する</li>
                      <li><strong>重要度</strong>: 低</li>
                    </ul>
                  </div>
                  
                  <h4 className="font-medium mb-2">まとめと推奨事項</h4>
                  <p>以下のようにコードを改善することを推奨します：</p>
                  <pre className="bg-gray-50 p-3 rounded mt-2">{`function calculateTotal(items) {
  if (!Array.isArray(items)) {
    throw new Error('Items must be an array');
  }
  return items.reduce((total, item) => total + (item.price || 0), 0);
}`}</pre>
                </div>
              </div>
            </div>
            
            {/* 応用のヒント */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">応用のヒント</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>言語を明示することで、その言語特有のベストプラクティスに基づくフィードバックが得られます。</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>特定の観点（セキュリティやパフォーマンスなど）に焦点を当てたい場合は、プロンプトの評価観点部分を編集してください。</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>チーム固有のコーディング規約がある場合は、プロンプトに追記することで、より適切なフィードバックが得られます。</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>コードの目的や背景情報を追加すると、コンテキストに応じた有用なアドバイスが期待できます。</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* サイドバー */}
          <div className="lg:w-1/3">
            {/* プロンプト情報 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">プロンプト情報</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">投稿者</span>
                  <span className="font-medium text-gray-800">{prompt.user?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">所属</span>
                  <span className="font-medium text-gray-800">{prompt.company?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">投稿日</span>
                  <span className="font-medium text-gray-800">{formatDateJP(prompt.createdAt)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">更新日</span>
                  <span className="font-medium text-gray-800">{formatDateJP(prompt.updatedAt)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">いいね数</span>
                  <span className="font-medium text-gray-800">{prompt.likes}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">利用回数</span>
                  <span className="font-medium text-gray-800">{prompt.usageCount}</span>
                </div>
              </div>
            </div>
            
            {/* 関連プロンプト */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">関連プロンプト</h2>
              <div className="space-y-4">
                {relatedPrompts.map((relatedPrompt) => (
                  <Link href={`/prompts/${relatedPrompt.id}`} key={relatedPrompt.id}>
                    <div className="border border-gray-200 rounded-md p-3 hover:bg-gray-50 transition-colors">
                      <h3 className="font-medium text-gray-800 mb-1">{relatedPrompt.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{relatedPrompt.description}</p>
                      {relatedPrompt.category && (
                        <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                          {relatedPrompt.category.icon} {relatedPrompt.category.name}
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* プロンプト作成ヒント */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">プロンプト作成のヒント</h2>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <span className="font-medium block">目的を明確に</span>
                  AIに何をしてほしいのかを具体的に指示しましょう。
                </p>
                <p>
                  <span className="font-medium block">コンテキストを提供</span>
                  背景情報や関連する文脈を詳しく説明しましょう。
                </p>
                <p>
                  <span className="font-medium block">出力形式を指定</span>
                  結果をどのような形で受け取りたいか明示しましょう。
                </p>
                <Link href="/guides/prompt-techniques" className="text-blue-600 hover:text-blue-800 block mt-3">
                  詳しいガイドを見る →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </main>
  );
}
