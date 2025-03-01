import Link from 'next/link';
import { HeaderComponent } from './components/layout/Header';
import { FooterComponent } from './components/layout/Footer';
import { CategoryCard } from './components/ui/CategoryCard';

export default function Home() {
  // 仮のカテゴリデータ
  const categories = [
    { id: 1, name: '営業・マーケティング', icon: '📊', description: '営業資料作成、市場分析など' },
    { id: 2, name: '経営企画', icon: '📈', description: '事業計画、戦略立案支援など' },
    { id: 3, name: '人事・労務', icon: '👥', description: '採用支援、研修資料作成など' },
    { id: 4, name: '財務・経理', icon: '💰', description: 'レポート作成、データ分析など' },
    { id: 5, name: 'IT・システム', icon: '💻', description: 'コード生成、技術文書作成など' },
    { id: 6, name: '研究開発', icon: '🔬', description: '論文要約、アイデア発想など' },
  ];

  return (
    <main>
      <HeaderComponent />
      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4">企業グループAI活用ポータル</h1>
            <p className="text-xl text-gray-600 mb-6">
              グループ企業70社向けの生成AI活用事例・プロンプト集
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/use-cases" className="btn-primary">
                活用事例を見る
              </Link>
              <Link href="/prompts" className="btn-secondary">
                プロンプト例を見る
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">AI活用カテゴリ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="bg-blue-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">最近の活用事例</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">四半期レポート自動要約ツール</h3>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">財務・経理</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  四半期決算資料から重要ポイントを自動抽出し、要約レポートを生成
                </p>
                <div className="text-xs text-gray-500">A社グループ 経理部</div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">営業提案書テンプレート生成</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">営業・マーケティング</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  顧客業界と課題に合わせた提案書の構成と内容を自動生成
                </p>
                <div className="text-xs text-gray-500">B社 営業推進部</div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Link href="/use-cases" className="text-blue-600 hover:text-blue-800">
                すべての事例を見る →
              </Link>
            </div>
          </div>
        </section>
        
        <section>
          <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">活用法ガイド</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg shadow">
                <h3 className="font-medium mb-2">はじめての方へ</h3>
                <p className="text-gray-600 text-sm">
                  生成AIの基本的な使い方と、効果的なプロンプト作成のコツを学べます。
                </p>
                <Link href="/guides/beginners" className="text-blue-600 hover:text-blue-800 text-sm block mt-2">
                  ガイドを見る →
                </Link>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow">
                <h3 className="font-medium mb-2">プロンプトライブラリ</h3>
                <p className="text-gray-600 text-sm">
                  業務別に整理された実用的なプロンプトテンプレートを活用できます。
                </p>
                <Link href="/prompts" className="text-blue-600 hover:text-blue-800 text-sm block mt-2">
                  ライブラリを見る →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterComponent />
    </main>
  );
}
