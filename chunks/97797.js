_.d(E, {
    i: function () {
        return n;
    }
});
var t = _(689938);
function n(e) {
    let { username: E, usernameOnClickHandler: _, productName: n } = e;
    return t.Z.Messages.SYSTEM_MESSAGE_GUILD_PRODUCT_PURCHASE_MOBILE.astFormat({
        username: E,
        usernameHook: _,
        productName: n
    });
}
