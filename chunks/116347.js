n.d(t, {
    dg: function () {
        return s;
    },
    tX: function () {
        return u;
    },
    uu: function () {
        return l;
    }
});
var r = n(581883),
    i = n(359119),
    a = n(473092);
function o(e) {
    return i.ZP.getChannelSafetyWarnings(e).filter((e) => e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1);
}
function s() {
    var e, t, n;
    let i = null === (n = null === (t = r.Z.settings.privacy) || void 0 === t ? void 0 : null === (e = t.inappropriateConversationWarnings) || void 0 === e ? void 0 : e.value) || void 0 === n || n;
    return (0, a.Lm)() && i;
}
function l(e) {
    let t = o(e);
    if (t.filter((e) => null != e.dismiss_timestamp).length > 0) return null;
    let n = t.filter((e) => null == e.dismiss_timestamp);
    return 1 === n.length ? n[0] : null;
}
function u(e) {
    let t = e.filter((e) => e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1);
    return t.length > 0 && t.every((e) => null == e.dismiss_timestamp);
}
