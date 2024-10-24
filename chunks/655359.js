n.d(t, {
    K_: function () {
        return d;
    },
    P3: function () {
        return c;
    },
    PE: function () {
        return _;
    }
}),
    n(789020);
var r = n(399606),
    i = n(271383),
    a = n(630388),
    s = n(563534),
    o = n(846121),
    l = n(460347),
    u = n(372897);
function c(e, t) {
    var n;
    let i = (0, l.Z)(e),
        a = (0, r.e7)([s.Z], () => s.Z.getNewMemberActions(e), [e]),
        u = (0, r.e7)([o.Z], () => o.Z.getCompletedActions(e));
    if (!i) return {};
    let c = null !== (n = null == a ? void 0 : a.findIndex((e) => e.channelId === t.id)) && void 0 !== n ? n : 0,
        d = c >= 0 && null != a ? a[c] : null,
        _ = null != d && (null == u ? void 0 : u[d.channelId]) === !0;
    return {
        channelAction: d,
        completed: _
    };
}
function d(e, t) {
    let n = (0, r.e7)([s.Z], () => s.Z.getNewMemberActions(e)),
        i = (0, r.e7)([o.Z], () => o.Z.getCompletedActions(e));
    return null == n ? void 0 : n.find((e) => (null == i ? void 0 : i[e.channelId]) !== !0 && e.channelId !== t);
}
function _(e) {
    var t;
    let n = (0, r.e7)([i.ZP], () => i.ZP.getSelfMember(e));
    return (0, a.yE)(null !== (t = null == n ? void 0 : n.flags) && void 0 !== t ? t : 0, u.q.COMPLETED_HOME_ACTIONS);
}
