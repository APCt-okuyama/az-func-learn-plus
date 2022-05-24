# Application Insights (ロギング/モニタリング)

監視と診断

FunctionsはApplication Insightsとのビルトイン統合が容易されており、簡単にログ、パフォーマンス、エラーデータを収集できる。  

C#、JavaScript、および Python では、Application Insights SDK を使用してカスタム利用統計情報を書き込むことができます。

## Application Insightsの作成
Classicモードとワークスペースベースがあります。

Classicモードで作成
```
az monitor app-insights component create --app my-example-appi --location japaneast --kind web -g az-func-example-rg --application-type web
az monitor app-insights component show --app my-example-appi -g az-func-example-rg --query "connectionString"
az monitor app-insights component show --app my-example-appi -g az-func-example-rg --query "instrumentationKey"
```

## Functionsの設定
```
az functionapp create -h
  --app-insights
  --app-insights-key
  --disable-app-insights
```
※`--disable-app-insights`を指定しない場合、functionsと同じ名前で自動的にapp-insightsが作成される

## ストリーミングログ

Azure CLI
```
az webapp log tail --name appname --resource-group myResourceGroup
```

Core Tools
```
func azure functionapp logstream my-example-func
```

Live Metrics Stream
※ブラウザでLive Metricsを確認する
```
func azure functionapp logstream my-example-func --browser
```
## Log Analyticsワークスペース

## KQL