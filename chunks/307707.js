r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(399606),
    a = r(339085),
    s = r(633302);
function o(e, n) {
    let r = (0, i.e7)([a.ZP], () => (null != e ? a.ZP.getCustomEmojiById(e) : null), [e]);
    return {
        customEmoji: r,
        unicodeEmoji: null != n ? s.ZP.getByName(s.ZP.convertSurrogateToName(n, !1)) : null
    };
}
