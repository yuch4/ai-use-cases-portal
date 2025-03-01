import Link from 'next/link';
import { Search } from 'lucide-react';

export function HeaderComponent() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-blue-600 text-xl font-bold">AI活用ポータル</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
              ホーム
            </Link>
            <Link href="/use-cases" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
              活用事例
            </Link>
            <Link href="/prompts" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
              プロンプト例
            </Link>
            <Link href="/guides" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
              ガイド
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="検索..."
                className="bg-gray-100 px-4 py-2 pr-10 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-40"
              />
              <button className="absolute right-3 top-2 text-gray-500">
                <Search size={18} />
              </button>
            </div>
            <Link href="/login" className="hidden md:block text-sm text-blue-600 hover:text-blue-800">
              ログイン
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
