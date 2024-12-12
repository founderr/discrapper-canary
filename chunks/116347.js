r.d(n, {
    dg: function () {
        return u;
    },
    tX: function () {
        return d;
    },
    uu: function () {
        return c;
    }
});
var i = r(581883),
    a = r(594174),
    s = r(359119),
    o = r(473092);
function l(e) {
    return s.ZP.getChannelSafetyWarnings(e).filter((e) => e.type === s.pj.INAPPROPRIATE_CONVERSATION_TIER_1);
}
function u() {
    var e, n, r, s;
    let l = (null === (e = a.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) === !0,
        u = null === (s = null === (r = i.Z.settings.privacy) || void 0 === r ? void 0 : null === (n = r.inappropriateConversationWarnings) || void 0 === n ? void 0 : n.value) || void 0 === s || s;
    return ((0, o.Lm)() || l) && u;
}
function c(e) {
    let n = l(e);
    if (n.filter((e) => null != e.dismiss_timestamp).length > 0) return null;
    let r = n.filter((e) => null == e.dismiss_timestamp);
    return 1 === r.length ? r[0] : null;
}
function d(e) {
    let n = e.filter((e) => e.type === s.pj.INAPPROPRIATE_CONVERSATION_TIER_1);
    return n.length > 0 && n.every((e) => null == e.dismiss_timestamp);
}
