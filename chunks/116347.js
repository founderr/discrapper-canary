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
    i = n(359119),
    a = n(473092),
    s = n(237292);
function o() {
    var e, t, n;
    let { enabled: i } = s.gr.getCurrentConfig({ location: 'safety_alerts_setting' }, { autoTrackExposure: !1 }),
        o = null === (n = null === (t = r.Z.settings.privacy) || void 0 === t ? void 0 : null === (e = t.inappropriateConversationWarnings) || void 0 === e ? void 0 : e.value) || void 0 === n || n,
        l = (0, a.Lm)();
    return (i || l) && o;
}
function l(e) {
    var t;
    let n = ((t = e), i.ZP.getChannelSafetyWarnings(t).filter((e) => e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1));
    if (n.filter((e) => null != e.dismiss_timestamp).length > 0) return null;
    let r = n.filter((e) => null == e.dismiss_timestamp);
    return 1 === r.length ? r[0] : null;
}
function u(e) {
    let t = e.filter((e) => e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1);
    return t.length > 0 && t.every((e) => null == e.dismiss_timestamp);
}
