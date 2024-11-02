t.d(l, {
    Z: function () {
        return r;
    }
});
var n = t(512722),
    i = t.n(n),
    s = t(442837),
    a = t(339085),
    o = t(633302);
function r(e) {
    let { emojiId: l, emojiName: t } = e,
        n = (0, s.e7)([a.ZP], () => (null != l ? a.ZP.getCustomEmojiById(l) : null));
    if (null != n || null != t) {
        if (null == l) return i()(null != t, 'emojiName must be defined if emojiId is not defined'), o.ZP.convertSurrogateToName(t, !1);
        else return null == n ? void 0 : n.name;
    }
}
