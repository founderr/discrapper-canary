E.d(_, {
    Z: function () {
        return r;
    }
});
var s = E(399606),
    n = E(339085),
    t = E(633302);
function r(e, _) {
    let E = (0, s.e7)([n.ZP], () => (null != e ? n.ZP.getCustomEmojiById(e) : null), [e]);
    return {
        customEmoji: E,
        unicodeEmoji: null != _ ? t.ZP.getByName(t.ZP.convertSurrogateToName(_, !1)) : null
    };
}
