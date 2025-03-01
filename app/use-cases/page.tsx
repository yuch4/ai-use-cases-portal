import { HeaderComponent } from '../components/layout/Header';
import { FooterComponent } from '../components/layout/Footer';
import { UseCaseCard } from '../components/ui/UseCaseCard';
import { Category } from '../lib/api/types';

export default function UseCasesPage() {
  // 仮の活用事例データ
  const useCases = [
    {
      id: 1,
      title: '四半期レポート自動要約ツール',
      description: '四半期決算資料から重要ポイントを自動抽出し、簡潔な要約レポートを生成するツール。情報量の多い資料から重要な指標や変化点を抽出し、経営陣が素早く状況を把握できるよう支援します。',
      categoryId: 4,
      category: { id: 4, name: '財務・経理', icon: '💰' } as Category,
      companyId: 1,
      company: { id: 1, name: 'A社グループ 経理部' },
      userId: 1,
      published: true,
      createdAt: new Date('2025-02-15'),
      updatedAt: new Date('2025-02-15'),
    },
    {
      id: 2,
      title: '営業提案書テンプレート生成',
      description: '顧客企業の業界と課題に合わせた提案書の構成と内容を自動生成するシステム。過去の成功事例や業界特有の課題を学習し、効果的な営業資料をAIが素早く作成します。',
      categoryId: 1,
      category: { id: 1, name: '営業・マーケティング', icon: '📊' } as Category,
      companyId: 2,
      company: { id: 2, name: 'B社 営業推進部' },
      userId: 2,
      published: true,
      createdAt: new Date('2025-02-20'),
      updatedAt: new Date('2025-02-20'),
    },
    {
      id: 3,
      title: '社内FAQ自動応答システム',
      description: '社内規則や手続きに関する従業員からの質問に自動応答するAIシステム。人事部への問い合わせ削減と、従業員の疑問解決の迅速化を実現しました。',
      categoryId: 3,
      category: { id: 3, name: '人事・労務', icon: '👥' } as Category,
      companyId: 3,
      company: { id: 3, name: 'C社 人事部' },
      userId: 3,
      published: true,
      createdAt: new Date('2025-02-25'),
      updatedAt: new Date('2025-02-25'),
    },
    {
      id: 4,
      title: 'コードレビュー支援ツール',
      description: 'ソースコードを自動分析し、潜在的なバグやパフォーマンス問題、セキュリティリスクを指摘するAIツール。開発チームの生産性向上とコード品質の維持に貢献しています。',
      categoryId: 5,
      category: { id: 5, name: 'IT・システム', icon: '💻' } as Category,
      companyId: 4,
      company: { id: 4, name: 'D社 システム開発部' },
      userId: 4,
      published: true,
      createdAt: new Date('2025-02-28'),
      updatedAt: new Date('2025-02-28'),
    },
    {
      id: 5,
      title: '研究論文要約・分析ツール',
      description: '膨大な研究論文から関連情報を抽出し、要約や比較分析を行うAIツール。最新の研究動向把握や競合分析の時間を大幅に削減できます。',
      categoryId: 6,
      category: { id: 6, name: '研究開発', icon: '🔬' } as Category,
      companyId: 5,
      company: { id: 5, name: 'E社 研究開発部' },
      userId: 5,
      published: true,
      createdAt: new Date('2025-03-01'),
      updatedAt: new Date('2025-03-01'),
    },
  ];

  // 仮のカテゴリデータ
  const categories = [
    { id: 1, name: '営業・マーケティング', icon: '📊', count: 5 },
    { id: 2, name: '経営企画', icon: '📈', count: 3 },
    { id: 3, name: '人事・労務', icon: '👥', count: 4 },
    { id: 4, name: '財務・経理', icon: '💰', count: 6 },
    { id: 5, name: 'IT・システム', icon: '💻', count: 7 },
    { id: 6, name: '研究開発', icon: '🔬', count: 2 },
  ];

  return (
    <main>
      <HeaderComponent />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* サイドバー（フィルタリング） */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-5">
              <h2 className="text-xl font-semibold mb-4">カテゴリ</h2>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <a
                      href={`/use-cases?category=${category.id}`}
                      className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-100"
                    >
                      <span className="flex items-center">
                        <span className="mr-2">{category.icon}</span>
                        <span>{category.name}</span>
                      </span>
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* メインコンテンツ */}
          <div className="md:w-3/4">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">AI活用事例</h1>
              <p className="text-gray-600">
                グループ企業のAI活用成功事例を業種・業務別にご紹介します。
              </p>
            </div>
            
            {/* 検索・フィルターバー */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="キーワードで検索..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <span className="absolute right-3 top-2.5 text-gray-400">
                  🔍
                </span>
              </div>
              <div className="flex gap-2 self-end">
                <select className="bg-gray-50 border border-gray-200 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>最新順</option>
                  <option>人気順</option>
                </select>
              </div>
            </div>
            
            {/* 活用事例一覧 */}
            <div className="grid grid-cols-1 gap-6">
              {useCases.map((useCase) => (
                <UseCaseCard key={useCase.id} useCase={useCase} />
              ))}
            </div>
            
            {/* ページネーション */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200">
                  前へ
                </button>
                <button className="px-3 py-1 rounded-md bg-blue-600 text-white">
                  1
                </button>
                <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200">
                  2
                </button>
                <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200">
                  3
                </button>
                <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200">
                  次へ
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </main>
  );
}
