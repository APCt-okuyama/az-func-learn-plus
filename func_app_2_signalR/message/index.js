module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.log('signalRMessages binding... mytime:' + req.query.mytime);

    context.bindings.signalRMessages = [{
        "target": "newMessage2",
        "arguments": [ req.query.mytime ]
    }];

    context.done();    
}