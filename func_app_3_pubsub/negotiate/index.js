module.exports = function (context, req, connection) {
    context.log('negotiate start...');
    context.res = { body: connection };
    context.done();
};