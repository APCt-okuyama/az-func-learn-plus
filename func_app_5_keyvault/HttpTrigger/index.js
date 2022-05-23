module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.log("TestKeyVaultValue1: " + process.env["TestKeyVaultValue1"]);
    context.log("TestKeyVaultValue2: " + process.env["TestKeyVaultValue2"]);
    context.log("TestKeyVaultValue3: " + process.env["TestKeyVaultValue3"]);

    const bodyString = "im working" +
                        "\nTestKeyVaultValue1 :" + process.env["TestKeyVaultValue1"] +
                        "\nTestKeyVaultValue2 :" + process.env["TestKeyVaultValue2"] +
                        "\nTestKeyVaultValue3 :" + process.env["TestKeyVaultValue3"];                                                

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: bodyString
    };
}