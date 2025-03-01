import { HeaderComponent } from '../../components/layout/Header';
import { FooterComponent } from '../../components/layout/Footer';
import Link from 'next/link';
import { BookmarkIcon, Share2Icon, ThumbsUpIcon, ArrowLeftIcon } from 'lucide-react';
import { formatDateJP } from '@/app/lib/utils/formatters';
import { Category } from '@/app/lib/api/types';

export default function UseCaseDetailPage({ params }: { params: { id: string } }) {
  // 仮の活用事例データ（実際はIDに基づいてデータを取得）
  const useCase = {
    id: parseInt(params.id),
    title: 'コードレビュー支援ツール',
    description: 'ソースコードを自動分析し、潜在的なバグやパフォーマンス問題、セキュリティリスクを指摘するAIツール。開発チームの生産性向上とコード品質の維持に貢献しています。',
    content: `
# コードレビュー支援ツールの概要

## 背景と課題

当社のシステム開発部では、新規開発や保守作業において日々大量のコードレビューが発生しています。しかし、以下の課題がありました。

- レビュー担当者の負担が大きく、開発の遅延が発生
- 担当者によってレビュー品質にバラつきがある
- 細かいコーディング規約違反や単純なバグの見落としが発生
- セキュリティ上の問題の早期発見が難しい

## 解決策

生成AIを活用したコードレビュー支援ツールを開発し、以下の機能を実現しました。

1. **自動コード分析**：コミットされたコードを自動的に分析し、問題点を指摘
2. **規約チェック**：社内コーディング規約への準拠を自動評価
3. **セキュリティ診断**：一般的なセキュリティ脆弱性の検出
4. **改善提案**：コードの最適化や保守性向上のための具体的な修正案を提示
5. **レビュー優先度付け**：問題の重要度に基づいて、人間のレビュアーが優先すべき箇所を明示

## 実装方法

### 使用技術

- フロントエンド：React, TypeScript
- バックエンド：Node.js, Express
- AI技術：Claude API（コードレビュー）, OpenAI API（コード生成）
- バージョン管理：GitHub Actions（CI/CD連携）

### システム構成

1. GitHub リポジトリとの連携
   - プルリクエスト作成時に自動的にレビュープロセスを開始
   - コードの差分を抽出し、AI分析エンジンに送信

2. AI分析エンジン
   - 専用プロンプトを用いて、コードを多角的に分析
   - 言語ごとの特性や社内規約を考慮した評価
   - 検出された問題をカテゴリ別に整理

3. レビュー結果表示
   - GitHub PRコメントとして自動投稿
   - 社内ダッシュボードでの可視化
   - Slack通知による即時フィードバック

### プロンプト最適化

コードレビューの精度向上のため、以下の工夫を行いました。

- 言語別の専用プロンプトの用意
- 社内コーディング規約のプロンプトへの組み込み
- 過去の指摘事例からの学習データ追加
- フィードバックに基づくプロンプトの定期的な改善

## 導入効果

当ツールを導入して3ヶ月後、以下の効果が確認されました。

- レビュー時間の平均30%削減
- コーディング規約違反の検出率98%向上
- セキュリティ脆弱性の早期発見事例が12件
- リリース後のバグ発生率が16%減少
- 開発者の満足度向上（社内アンケートで85%が「とても役立つ」と回答）

## 今後の展開

- 他部署・グループ企業への展開
- コード自動修正機能の追加
- ドキュメント生成機能の実装
- AIモデルの定期的な再トレーニングによる精度向上

## 導入のポイント

- 導入初期は人間のレビューと並行して実施し、AIの判断を検証
- 開発者へのツール使用方法の丁寧な説明
- フィードバックループの構築（AIの誤判断を報告する仕組み）
- プライバシーとセキュリティへの配慮（社外秘コードの取り扱い）
    `,
    categoryId: 5,
    category: { id: 5, name: 'IT・システム', icon: '💻' } as Category,
    companyId: 4,
    company: { id: 4, name: 'D社 システム開発部' },
    userId: 4,
    user: { id: 4, name: '鈴木 一郎', email: 'suzuki@example.com', companyId: 4 },
    published: true,
    createdAt: new Date('2025-02-28'),
    updatedAt: new Date('2025-02-28'),
    likes: 42,
    views: 320,
  };

  // 仮の関連活用事例
  const relatedUseCases = [
    {
      id: 6,
      title: 'CI/CD自動化ツール',
      description: 'テスト自動化とデプロイプロセスの最適化を行うCI/CD支援ツール',
      categoryId: 5,
      category: { id: 5, name: 'IT・システム', icon: '💻' } as Category,
      companyId: 4,
      company: { id: 4, name: 'D社 システム開発部' },
      createdAt: new Date('2025-02-20'),
    },
    {
      id: 7,
      title: 'バグ予測システム',
      description: 'コードパターン分析によるバグ発生リスクを予測するAIシステム',
      categoryId: 5,
      category: { id: 5, name: 'IT・システム', icon: '💻' } as Category,
      companyId: 6,
      company: { id: 6, name: 'F社 品質保証部' },
      createdAt: new Date('2025-02-15'),
    },
    {
      id: 8,
      title: '技術文書自動生成',
      description: 'ソースコードからAPIドキュメントやマニュアルを自動生成するツール',
      categoryId: 5,
      category: { id: 5, name: 'IT・システム', icon: '💻' } as Category,
      companyId: 4,
      company: { id: 4, name: 'D社 システム開発部' },
      createdAt: new Date('2025-02-10'),
    }
  ];

  return (
    <main>
      <HeaderComponent />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/use-cases" className="inline-flex items-center text-gray-600 hover:text-blue-600">
            <ArrowLeftIcon size={16} className="mr-1" />
            <span>活用事例一覧に戻る</span>
          </Link>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* メインコンテンツ */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-2xl font-bold text-gray-800">{useCase.title}</h1>
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-blue-500 p-1" aria-label="ブックマークに追加">
                    <BookmarkIcon size={20} />
                  </button>
                  <button className="text-gray-400 hover:text-purple-500 p-1" aria-label="共有する">
                    <Share2Icon size={20} />
                  </button>
                </div>
              </div>
              
              {useCase.description && (
                <p className="text-gray-600 mb-6">{useCase.description}</p>
              )}
              
              <div className="flex flex-wrap gap-2 mb-6">
                {useCase.category && (
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {useCase.category.icon} {useCase.category.name}
                  </span>
                )}
                <span className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                  閲覧数: {useCase.views}
                </span>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <div className="prose max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: useCase.content.replace(/\n/g, '<br />') }} />
                </div>
                
                <div className="flex justify-between items-center mt-8">
                  <button className="inline-flex items-center text-gray-600 hover:text-blue-600">
                    <ThumbsUpIcon size={18} className="mr-1" />
                    <span>役に立った ({useCase.likes})</span>
                  </button>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                    自社でも導入する
                  </button>
                </div>
              </div>
            </div>
            
            {/* 活用のポイント */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">活用のポイント</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-lg mb-2 text-blue-700">導入ステップ</h3>
                  <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                    <li>既存レビュープロセスの分析と課題特定</li>
                    <li>プロトタイプ開発と小規模テスト</li>
                    <li>フィードバックに基づく改良</li>
                    <li>社内規約とのすり合わせ</li>
                    <li>段階的な本番導入</li>
                  </ol>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-lg mb-2 text-blue-700">成功の秘訣</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>開発者が自分の判断を優先できる余地を残す</li>
                    <li>AIの判断基準を明確に示す</li>
                    <li>ツールの使い方と限界についての教育</li>
                    <li>改善のためのフィードバック収集を継続</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* 使用リソース */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">使用リソース</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">使用AIモデル</h3>
                  <div className="bg-gray-50 p-3 rounded-md text-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-gray-600">コードレビュー</span>
                      </div>
                      <div>
                        <span className="font-medium">Claude-3-Sonnet-20241022</span>
                      </div>
                      <div>
                        <span className="text-gray-600">コード生成</span>
                      </div>
                      <div>
                        <span className="font-medium">GPT-4</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">開発工数</h3>
                  <div className="bg-gray-50 p-3 rounded-md text-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-gray-600">初期開発</span>
                      </div>
                      <div>
                        <span className="font-medium">約3人月</span>
                      </div>
                      <div>
                        <span className="text-gray-600">継続改善</span>
                      </div>
                      <div>
                        <span className="font-medium">月間約0.5人月</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">関連資料</h3>
                  <div className="space-y-2">
                    <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
                      </svg>
                      コードレビュー支援ツール導入ガイド
                    </a>
                    <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
                      </svg>
                      コードレビュー用プロンプト集
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* サイドバー */}
          <div className="lg:w-1/3">
            {/* 事例情報 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">事例情報</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">投稿者</span>
                  <span className="font-medium text-gray-800">{useCase.user?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">所属</span>
                  <span className="font-medium text-gray-800">{useCase.company?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">投稿日</span>
                  <span className="font-medium text-gray-800">{formatDateJP(useCase.createdAt)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">更新日</span>
                  <span className="font-medium text-gray-800">{formatDateJP(useCase.updatedAt)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">いいね数</span>
                  <span className="font-medium text-gray-800">{useCase.likes}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">閲覧数</span>
                  <span className="font-medium text-gray-800">{useCase.views}</span>
                </div>
              </div>
            </div>
            
            {/* 導入効果 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">導入効果</h2>
              <div className="space-y-3">
                <div className="bg-green-50 p-3 rounded-md border border-green-100">
                  <div className="flex items-center mb-1">
                    <span className="font-medium text-green-800">レビュー時間削減</span>
                    <span className="ml-auto font-bold text-green-800">30%</span>
                  </div>
                  <div className="w-full bg-green-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
                  <div className="flex items-center mb-1">
                    <span className="font-medium text-blue-800">バグ発生率減少</span>
                    <span className="ml-auto font-bold text-blue-800">16%</span>
                  </div>
                  <div className="w-full bg-blue-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '16%' }}></div>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-3 rounded-md border border-purple-100">
                  <div className="flex items-center mb-1">
                    <span className="font-medium text-purple-800">開発者満足度</span>
                    <span className="ml-auto font-bold text-purple-800">85%</span>
                  </div>
                  <div className="w-full bg-purple-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 関連事例 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">関連事例</h2>
              <div className="space-y-4">
                {relatedUseCases.map((relatedUseCase) => (
                  <Link href={`/use-cases/${relatedUseCase.id}`} key={relatedUseCase.id}>
                    <div className="border border-gray-200 rounded-md p-3 hover:bg-gray-50 transition-colors">
                      <h3 className="font-medium text-gray-800 mb-1">{relatedUseCase.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{relatedUseCase.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {relatedUseCase.category?.icon} {relatedUseCase.category?.name}
                        </span>
                        <span className="text-xs text-gray-500">{relatedUseCase.company?.name}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* ヘルプボックス */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">お困りですか？</h2>
              <p className="text-sm text-gray-700 mb-4">
                この事例の導入についてさらに詳しく知りたい場合や、自社への適用についてご相談がある場合は、お気軽にお問い合わせください。
              </p>
              <Link href="/contact" className="btn-primary inline-block">
                専門家に相談する
              </Link>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </main>
  );
}
