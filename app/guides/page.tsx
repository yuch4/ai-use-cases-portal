import Link from 'next/link';
import { HeaderComponent } from '../components/layout/Header';
import { FooterComponent } from '../components/layout/Footer';

export default function GuidesPage() {
  const guides = [
    {
      id: 1,
      title: 'はじめての生成AI活用',
      description: '生成AIの基本概念と、ビジネスでの活用方法の基礎を学びます。AIの得意・不得意を理解し、効果的な活用方法を見つけましょう。',
      icon: '🚀',
      level: '初級',
      category: '基礎知識',
      readTime: '10分',
      slug: 'beginners',
    },
    {
      id: 2,
      title: '効果的なプロンプト作成法',
      description: 'AIから質の高い回答を得るための、プロンプト設計の原則とテクニックを解説。具体例と演習で実践力を身につけます。',
      icon: '✏️',
      level: '中級',
      category: 'プロンプト設計',
      readTime: '15分',
      slug: 'prompt-techniques',
    },
    {
      id: 3,
      title: '業務別活用シナリオ',
      description: '営業、マーケティング、人事、経理など、部門別の具体的な活用事例と実装方法を紹介。すぐに業務に取り入れられるアイデア集。',
      icon: '💼',
      level: '中級',
      category: '業務活用',
      readTime: '20分',
      slug: 'business-scenarios',
    },
    {
      id: 4,
      title: 'システム連携の基礎知識',
      description: '生成AIをアプリケーションやシステムに組み込む方法。APIの基本から、セキュリティ対策、コスト管理まで解説します。',
      icon: '🔌',
      level: '上級',
      category: 'システム開発',
      readTime: '25分',
      slug: 'api-integration',
    },
    {
      id: 5,
      title: 'AIプロジェクト管理術',
      description: 'AIプロジェクトの立ち上げから運用までのプロセスとノウハウ。予算設定、人材確保、ROI計測、リスク管理などを解説。',
      icon: '📊',
      level: '上級',
      category: 'プロジェクト管理',
      readTime: '30分',
      slug: 'project-management',
    },
    {
      id: 6,
      title: 'プロンプトライブラリの使い方',
      description: '当サイトのプロンプトライブラリを最大限活用するための方法と、自社に合わせたカスタマイズのコツを紹介します。',
      icon: '📚',
      level: '初級',
      category: 'サイト活用',
      readTime: '8分',
      slug: 'prompt-library',
    },
  ];

  return (
    <main>
      <HeaderComponent />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-3">AI活用ガイド</h1>
          <p className="text-gray-600 max-w-3xl">
            生成AIを効果的に業務活用するための知識やテクニックを、初心者から上級者まで段階的に学べるガイド集です。
            実践的な例を交えながら、AIを活用したビジネス改革の方法を解説します。
          </p>
        </div>
        
        {/* ガイド一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <Link href={`/guides/${guide.slug}`} key={guide.id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <div className="p-6 flex-grow">
                  <div className="text-4xl mb-4">{guide.icon}</div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">{guide.title}</h2>
                  <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {guide.level}
                    </span>
                    <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      {guide.category}
                    </span>
                    <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      読了時間: {guide.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* その他のリソース */}
        <div className="mt-12 bg-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">その他の学習リソース</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow">
              <h3 className="font-medium mb-2 flex items-center">
                <span className="mr-2">📽️</span> オンラインセミナー
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                毎月開催される生成AI活用のオンラインセミナー。各回のテーマに沿って専門家が解説します。
              </p>
              <Link href="/seminars" className="text-blue-600 hover:text-blue-800 text-sm block mt-2">
                セミナー情報を見る →
              </Link>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow">
              <h3 className="font-medium mb-2 flex items-center">
                <span className="mr-2">👨‍👩‍👧‍👦</span> コミュニティ
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                グループ企業のAI実践者コミュニティ。事例や課題をディスカッションし、ノウハウを共有します。
              </p>
              <Link href="/community" className="text-blue-600 hover:text-blue-800 text-sm block mt-2">
                コミュニティに参加する →
              </Link>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow">
              <h3 className="font-medium mb-2 flex items-center">
                <span className="mr-2">📋</span> 実践ワークショップ
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                少人数制のハンズオン形式ワークショップ。実際に手を動かしながら生成AIの活用スキルを習得します。
              </p>
              <Link href="/workshops" className="text-blue-600 hover:text-blue-800 text-sm block mt-2">
                ワークショップ日程を見る →
              </Link>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow">
              <h3 className="font-medium mb-2 flex items-center">
                <span className="mr-2">🎓</span> eラーニング
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                自分のペースで学べるオンラインコース。基礎から応用まで体系的に学習できるカリキュラムを提供。
              </p>
              <Link href="/e-learning" className="text-blue-600 hover:text-blue-800 text-sm block mt-2">
                コース一覧を見る →
              </Link>
            </div>
          </div>
        </div>
        
        {/* サポート情報 */}
        <div className="mt-12 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">サポート</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <h3 className="font-medium mb-3">お問い合わせ</h3>
              <p className="text-gray-600 text-sm mb-4">
                AI活用に関するご質問や相談は、以下のフォームからお気軽にお問い合わせください。
                専門スタッフが丁寧にサポートいたします。
              </p>
              <Link href="/contact" className="btn-primary inline-block">
                お問い合わせフォーム
              </Link>
            </div>
            <div className="md:w-1/2">
              <h3 className="font-medium mb-3">FAQ</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/faq#access" className="hover:text-blue-600">
                    サイトへのアクセス方法と利用条件
                  </Link>
                </li>
                <li>
                  <Link href="/faq#prompt" className="hover:text-blue-600">
                    プロンプトの使い方と注意点
                  </Link>
                </li>
                <li>
                  <Link href="/faq#security" className="hover:text-blue-600">
                    セキュリティとデータ保護について
                  </Link>
                </li>
                <li>
                  <Link href="/faq#all" className="text-blue-600 hover:text-blue-800 block mt-2">
                    すべてのFAQを見る →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </main>
  );
}
