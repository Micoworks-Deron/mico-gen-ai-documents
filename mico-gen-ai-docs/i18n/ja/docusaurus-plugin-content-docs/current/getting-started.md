# はじめに

Mico Gen AI API へようこそ！このガイドでは、画像処理と生成のための包括的な AI Vision API を使い始めるためのサポートを行います。

## クイックスタート

### 1. API キーを取得する

まず、リクエストを認証するための API キーを取得する必要があります：

1. [Mico Gen AI](/) で無料アカウントにサインアップ
2. ダッシュボードに移動
3. 新しい API キーを生成
4. API キーをコピーして安全に保存

### 2. 認証

すべての `/aivision/*` エンドポイントには、Bearer トークン形式での認証が必要です：

```bash
Authorization: Bearer YOUR_API_KEY
```

**注意**: `/health` と `/documentation` エンドポイントは公開アクセス可能で、認証は不要です。

### 3. 最初の API 呼び出し

シンプルな背景除去リクエストから始めましょう：

```bash
curl -X POST "https://api.mico.ai/aivision/background-removal" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: multipart/form-data" \
  -F "image=@your-image.jpg"
```

### 4. レスポンス形式

すべての API レスポンスは、一貫した JSON 形式に従います：

```json
{
  "success": true,
  "data": {
    "result_url": "https://storage.mico.ai/processed/image.png",
    "processing_time": 2.3
  },
  "message": "背景が正常に除去されました"
}
```

## サポートされているサービス

Mico Gen AI は 3 つの強力な AI プラットフォームをサポートしています：

- **Mico (ComfyICU)**: ほとんどの操作における主要な AI サービス
- **Flux**: インペインティングとアウトペインティングのための代替サービス
- **OpenAI**: インペインティングとアウトペインティングのための高度なサービス

## ファイルアップロード制限

- **最大ファイルサイズ**: 35MB
- **サポート形式**: JPEG、PNG、WebP
- **リクエストあたりの最大ファイル数**: 10

## レート制限

- すべてのエンドポイントに標準的なレート制限が適用されます
- GPU アクセラレーターオプション: low、medium、high
- レート制限はサブスクリプションプランによって異なります

## 次のステップ

- 詳細なエンドポイント情報については [API ドキュメント](/docs/developers/mico-gen-ai/introduction) をご覧ください
- 包括的な API リファレンスで具体的な使用例を参照してください
- サポートやディスカッションのためにコミュニティに参加してください

## ヘルプが必要ですか？

- [FAQ セクション](#faq) を確認してください
- support@mico.ai にサポートをお問い合わせください
- リアルタイムヘルプのために Discord コミュニティに参加してください
