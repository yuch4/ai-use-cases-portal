import Link from 'next/link';

export function FooterComponent() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AI活用ポータル</h3>
            <p className="text-gray-400 text-sm">
              グループ企業70社向けの生成AI活用事例・プロンプト集
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">コンテンツ</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/use-cases" className="hover:text-white transition-colors">
                  活用事例
                </Link>
              </li>
              <li>
                <Link href="/prompts" className="hover:text-white transition-colors">
                  プロンプト例
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-white transition-colors">
                  活用ガイド
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">カテゴリ</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/category/marketing" className="hover:text-white transition-colors">
                  営業・マーケティング
                </Link>
              </li>
              <li>
                <Link href="/category/hr" className="hover:text-white transition-colors">
                  人事・労務
                </Link>
              </li>
              <li>
                <Link href="/category/finance" className="hover:text-white transition-colors">
                  財務・経理
                </Link>
              </li>
              <li>
                <Link href="/category/it" className="hover:text-white transition-colors">
                  IT・システム
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">リンク</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  このサイトについて
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} グループIT企業株式会社. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
