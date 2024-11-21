n.d(t, {
    dg: function () {
        return o;
    },
    tX: function () {
        return u;
    },
    uu: function () {
        return l;
    }
});
var r = n(581883),
    i = n(594174),
    a = n(359119),
    s = n(473092);
function o() {
    var e, t, n, a;
    let o = (null === (e = i.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) === !0,
        l = null === (a = null === (n = r.Z.settings.privacy) || void 0 === n ? void 0 : null === (t = n.inappropriateConversationWarnings) || void 0 === t ? void 0 : t.value) || void 0 === a || a;
    return ((0, s.Lm)() || o) && l;
}
function l(e) {
    var t;
    let n = ((t = e), a.ZP.getChannelSafetyWarnings(t).filter((e) => e.type === a.pj.INAPPROPRIATE_CONVERSATION_TIER_1));
    if (n.filter((e) => null != e.dismiss_timestamp).length > 0) return null;
    let r = n.filter((e) => null == e.dismiss_timestamp);
    return 1 === r.length ? r[0] : null;
}
function u(e) {
    let t = e.filter((e) => e.type === a.pj.INAPPROPRIATE_CONVERSATION_TIER_1);
    return t.length > 0 && t.every((e) => null == e.dismiss_timestamp);
}
