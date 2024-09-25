n.d(t, {
    i: function () {
        return i;
    }
});
var r = n(689938);
function i(e) {
    let { username: t, usernameOnClickHandler: n, productName: i } = e;
    return r.Z.Messages.SYSTEM_MESSAGE_GUILD_PRODUCT_PURCHASE_MOBILE.astFormat({
        username: t,
        usernameHook: n,
        productName: i
    });
}
