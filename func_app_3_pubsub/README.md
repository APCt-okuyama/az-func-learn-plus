# FunctionsでPubSub を利用してみる

## SignalRとの違い
websocketをそのまま利用するので、SignalRのようにライブラリを利用する必要がない。
接続できるクライアントに制限がない。
.NETを利用している場合はSignalRのが
## 用途
SignalRとほぼ同じ。

## PubSub インスタンス作成
```
az webpubsub create --name "az-func-pubsub-example" --resource-group "az-func-example-rg" --location "japaneast" --sku Free_F1
az webpubsub key show --name az-func-pubsub-example --resource-group az-func-example-rg
```