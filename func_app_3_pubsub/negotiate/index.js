module.exports = function (context, req, connection) {
    context.log('negotiate start... connection:' + connection);
    context.res = { body: connection };
    context.done();
};