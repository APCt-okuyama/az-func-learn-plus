module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.log("context: " + JSON.stringify(context.bindings.req.headers, null , "\t"));
    //context.log("req: " + JSON.stringify(req, null , "\t") );

    const myheaders = context.bindings.req.headers;

    context.res = {
        // status: 200, /* Defaults to 200 */
        //body: responseMessage
        body: 'This is test for 組み込みの認証(Azure AD) \n myheaders: ' + JSON.stringify(myheaders, null, "\t")
    };
}