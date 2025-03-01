import { HeaderComponent } from '../components/layout/Header';
import { FooterComponent } from '../components/layout/Footer';
import { PromptCard } from '../components/ui/PromptCard';
import { Category } from '../lib/api/types';

export default function PromptsPage() {
  // 仮のプロンプトデータ
  const prompts = [
    {
      id: 1,
      title: '四半期レポート要約プロンプト',
      description: '四半期決算資料から重要ポイントを抽出し、簡潔な要約を生成するプロンプト',
      content: '以下の四半期決算資料から最も重要な財務指標と前年比較、業績のハイライト、将来見通しについて300字以内で簡潔に要約してください。特に売上高、営業利益、純利益、主力製品・サービスの状況に注目し、経営陣向けの概要となるようにまとめてください。\n\n[四半期決算資料をここに貼り付け]',
      categoryId: 4,
      category: { id: 4, name: '財務・経理', icon: '💰' } as Category,
      userId: 1,
      published: true,
      createdAt: new Date('2025-02-10'),
      updatedAt: new Date('2025-02-10'),
    },
    {
      id: 2,
      title: '営業提案書テンプレート生成プロンプト',
      description: '顧客の業界と課題に合わせた提案書の構成と内容を生成するプロンプト',
      content: '私は[業界名]向けの営業提案書を作成しています。お客様の課題は[課題の具体的内容]です。以下のポイントを含む提案書の構成と各セクションの要点を作成してください。\n\n1. 現状分析\n2. 課題と解決策\n3. 当社製品・サービスの特徴\n4. 導入メリット\n5. 導入事例\n6. 費用対効果\n7. 導入スケジュール',
      categoryId: 1,
      category: { id: 1, name: '営業・マーケティング', icon: '📊' } as Category,
      userId: 2,
      published: true,
      createdAt: new Date('2025-02-15'),
      updatedAt: new Date('2025-02-15'),
    },
    {
      id: 3,
      title: '社内FAQ自動応答プロンプト',
      description: '人事関連の質問に自動応答するためのプロンプト',
      content: 'あなたは当社の人事部AI支援アシスタントです。社内規則、手続き、福利厚生に関する従業員からの質問に正確かつ簡潔に回答してください。以下の情報を参考にしてください。\n\n就業規則: [URL]\n福利厚生制度: [URL]\n各種申請手順: [URL]\n\n回答は簡潔に、必要なリンクや連絡先を含め、複雑な質問には人事部への問い合わせを案内してください。',
      categoryId: 3,
      category: { id: 3, name: '人事・労務', icon: '👥' } as Category,
      userId: 3,
      published: true,
      createdAt: new Date('2025-02-20'),
      updatedAt: new Date('2025-02-20'),
    },
    {
      id: 4,
      title: 'コードレビュー支援プロンプト',
      description: 'ソースコードの問題点を自動分析するプロンプト',
      content: '以下のソースコードをレビューし、以下の観点からフィードバックを提供してください：\n\n1. コーディング規約違反\n2. バグや潜在的問題\n3. パフォーマンス最適化の余地\n4. セキュリティリスク\n5. リファクタリングの提案\n\n各問題点について、どこに問題があるか、なぜ問題なのか、どう修正すべきかを具体的に説明してください。\n\n```[言語名]\n[コードをここに貼り付け]\n```',
      categoryId: 5,
      category: { id: 5, name: 'IT・システム', icon: '💻' } as Category,
      userId: 4,
      published: true,
      createdAt: new Date('2025-02-25'),
      updatedAt: new Date('2025-02-25'),
    },
    {
      id: 5,
      title: '研究論文要約プロンプト',
      description: '学術論文から重要ポイントを抽出するプロンプト',
      content: '以下の学術論文を要約し、以下の項目について簡潔にまとめてください：\n\n1. 研究目的と背景\n2. 使用された方法論\n3. 主要な結果と発見\n4. 結論と意義\n5. 業界への応用可能性\n\n専門用語は必要に応じて平易な言葉で説明し、全体で800字以内にまとめてください。\n\n[論文のテキストをここに貼り付け]',
      categoryId: 6,
      category: { id: 6, name: '研究開発', icon: '🔬' } as Category,
      userId: 5,
      published: true,
      createdAt: new Date('2025-03-01'),
      updatedAt: new Date('2025-03-01'),
    },
  ];

  // 仮のカテゴリデータ
  const categories = [
    { id: 1, name: '営業・マーケティング', icon: '📊', count: 8 },
    { id: 2, name: '経営企画', icon: '📈', count: 5 },
    { id: 3, name: '人事・労務', icon: '👥', count: 7 },
    { id: 4, name: '財務・経理', icon: '💰', count: 6 },
    { id: 5, name: 'IT・システム', icon: '💻', count: 10 },
    { id: 6, name: '研究開発', icon: '🔬', count: 4 },
  ];

  const handleCopy = (content: string) => {
    // 実際の実装では navigator.clipboard.writeText(content) を使用
    console.log('Copied:', content);
    // トースト通知などを表示
  };

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
                      href={`/prompts?category=${category.id}`}
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
            
            <div className="bg-white rounded-lg shadow-md p-5 mt-6">
              <h2 className="text-xl font-semibold mb-4">プロンプト作成ヒント</h2>
              <div className="text-sm text-gray-600 space-y-3">
                <p>
                  <span className="font-medium block text-gray-800">1. 目的を明確に</span>
                  何を達成したいのかを具体的に記述しましょう
                </p>
                <p>
                  <span className="font-medium block text-gray-800">2. コンテキストを提供</span>
                  背景情報や関連する文脈を詳しく説明しましょう
                </p>
                <p>
                  <span className="font-medium block text-gray-800">3. 出力形式を指定</span>
                  結果をどのような形で受け取りたいか明示しましょう
                </p>
                <a href="/guides/prompts" className="text-blue-600 hover:text-blue-800 inline-block mt-2">
                  詳しいガイドを見る →
                </a>
              </div>
            </div>
          </div>
          
          {/* メインコンテンツ */}
          <div className="md:w-3/4">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">プロンプト例</h1>
              <p className="text-gray-600">
                業務別に最適化されたプロンプトテンプレートを活用して、AIの能力を最大限に引き出しましょう。
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
            
            {/* プロンプト例一覧 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prompts.map((prompt) => (
                <PromptCard 
                  key={prompt.id} 
                  prompt={prompt} 
                  onCopy={handleCopy}
                  showPreview={true}
                />
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
