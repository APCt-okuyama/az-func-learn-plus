# FunctionsでCI/CD環境を構築してみる

CI/CDツールにはJenkins, CircleCI, GitLab, AzureDevOps, GitHubActionなど様々なツールがあるが、基本的にはどれでも利用可能。

## CI/CD フローの例

### Functions(node)の開発からデプロイについての理解
基本的な流れは

0. Azureリソースの準備(必要なリソースグループ、Functions、Storageなど)
1. ローカルでコーディング
2. ローカルでテスト (`func start`, `npm start`)
3. Azureへのデプロイ (`func azure functionapp publish`)
4. Azureでの動作確認
※開発フロー 1～4　を繰り返す
※開発のフロー自体はチームや環境に合わせて変更していく。

### 実践的な例

前提条件：開発環境/本番環境など複数扱う

![Functions+CICD](./Functions-CICD.png) 

## GitHub Actionの利用

https://docs.microsoft.com/ja-jp/azure/azure-functions/functions-how-to-github-actions?tabs=dotnet

有効/無効を設定可能  
GitHubのActionsタブからワークフローを有効/無効にすることができます。デプロイが不要な場合は無効にしておく。  
`.github/workflowsフォルダ` の名前を`.github/workflows_disable`などと変更して対応しても良い。

