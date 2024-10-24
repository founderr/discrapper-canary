n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(399606),
    i = n(339085),
    a = n(633302);
function s(e, t) {
    let n = (0, r.e7)([i.ZP], () => (null != e ? i.ZP.getCustomEmojiById(e) : null), [e]);
    return {
        customEmoji: n,
        unicodeEmoji: null != t ? a.ZP.getByName(a.ZP.convertSurrogateToName(t, !1)) : null
    };
}
