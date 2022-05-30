# Front Door

コンテンツ配信ネットワーク(CDN)  
コンテンツとファイルを配信する場合やAPIを公開する為に利用

## 作成手順

https://docs.microsoft.com/ja-jp/azure/frontdoor/create-front-door-portal
https://techblog.ap-com.co.jp/entry/2022/05/19/165118


作成後に有効になるまでに数分かかる。１０分くらいはまってからアクセスする。

```
Functionsへ直接アクセス
curl https://my-example-func.azurewebsites.net/api/HttpTrigger?code=KQpIvNb16TOxIMd2uJdTvBLb3zEpFePPcSLu39BAGva7AzFuoC79eQ==

Front Door経由でアクセス
curl https://example-frontdoor-test-fzdnhxh7h8ddama7.z01.azurefd.net/api/HttpTrigger?code=KQpIvNb16TOxIMd2uJdTvBLb3zEpFePPcSLu39BAGva7AzFuoC79eQ==
```
