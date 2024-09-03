_.d(E, {
    i: function () {
        return t;
    }
});
var n = _(689938);
function t(e) {
    let { username: E, usernameOnClickHandler: _, productName: t } = e;
    return n.Z.Messages.SYSTEM_MESSAGE_GUILD_PRODUCT_PURCHASE_MOBILE.astFormat({
        username: E,
        usernameHook: _,
        productName: t
    });
}
