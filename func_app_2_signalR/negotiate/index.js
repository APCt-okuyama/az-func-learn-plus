module.exports = async function (context, req, connectionInfo) {
    context.log('negotiate func start ...');
    context.res.body = connectionInfo;
};