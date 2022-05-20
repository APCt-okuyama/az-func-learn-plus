module.exports = function (context, req, connection) {
    context.log('negotiate start... connection:' + JSON.stringify(connection));

    //connectionにはwebpubsubへの接続に必要な情報(url,access_tokenなど)が含まれる
    /**
     * functions.jsonの設定
        {
            "type": "webPubSubConnection",
            "name": "connection",
            "hub": "simplechat",
            "userId": "{headers.x-ms-client-principal-name}",
            "direction": "in"
        }
     */

    context.res = { body: connection };
    context.done();
};