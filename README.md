# AI活用事例・プロンプトポータル

グループ企業70社向けの生成AI活用事例やプロンプト例を掲載するウェブポータルサイトです。

## 概要

このプロジェクトは、グループ企業内での生成AIの活用促進を目的としたポータルサイトです。各企業での成功事例や効果的なプロンプトを共有し、知見の横展開を図ります。

### 主な機能

- **AI活用事例の共有**: 業種・業務別に整理された成功事例を閲覧
- **プロンプトライブラリ**: 業務で使える実用的なプロンプト集
- **AIガイド**: 初心者から上級者向けの活用方法解説
- **AIと連携した機能**: プロンプトの分析・改善提案機能

## 技術スタック

### フロントエンド
- Next.js 15.1.3
- React 19.0.0
- TypeScript 5.0.0
- Tailwind CSS 3.4.17
- shadcn/ui 2.1.8

### バックエンド
- Node.js 20.0.0
- SQLite / Prisma 5.0.0

### AI連携
- Claude-3-Sonnet-20241022 (Anthropic Messages API)

## インストール方法

```bash
# リポジトリのクローン
git clone https://github.com/yuch4/ai-use-cases-portal.git
cd ai-use-cases-portal

# 依存パッケージのインストール
npm install

# 開発サーバーの起動
npm run dev
```

## 環境変数の設定

`.env` ファイルを作成し、以下の環境変数を設定してください：

```
# データベース接続情報
DATABASE_URL="file:./dev.db"

# Anthropic API Key
ANTHROPIC_API_KEY="your_api_key_here"
```

## 使用方法

- `/`: ホームページ（活用カテゴリ一覧、最新事例など）
- `/use-cases`: 活用事例一覧ページ
- `/prompts`: プロンプト例一覧ページ
- `/guides`: AIガイドページ

## ディレクトリ構造

```
my-next-app/
├── app/
│   ├── api/                          # APIエンドポイント
│   │   └── [endpoint]/
│   │       └── route.ts
│   ├── components/                   # アプリケーションコンポーネント
│   │   ├── ui/                       # 基本UI（button, card等）
│   │   └── layout/                   # レイアウト関連
│   ├── hooks/                        # カスタムフック
│   ├── lib/                          # ユーティリティ
│   │   ├── api/                      # API関連処理
│   │   │   ├── client.ts             # AIモデル設定
│   │   │   ├── types.ts              # 型定義
│   │   │   └── config.ts             # 環境設定
│   │   └── utils/                    # 共通関数
│   └── styles/                       # スタイル定義
```

## 貢献方法

1. このリポジトリをフォークします
2. 機能追加用のブランチを作成します (`git checkout -b feature/amazing-feature`)
3. 変更をコミットします (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュします (`git push origin feature/amazing-feature`)
5. プルリクエストを作成します

## 今後の展望

- ユーザー認証機能の実装
- 企業別ダッシュボードの追加
- リアルタイム協同編集機能
- 多言語対応

## ライセンス

社内利用限定

## 連絡先

グループIT企業株式会社 AI推進部
