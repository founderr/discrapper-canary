r.d(n, {
    K_: function () {
        return _;
    },
    P3: function () {
        return f;
    },
    PE: function () {
        return h;
    }
});
var i = r(789020);
var a = r(399606),
    s = r(271383),
    o = r(630388),
    l = r(563534),
    u = r(846121),
    c = r(460347),
    d = r(372897);
function f(e, n) {
    var r;
    let i = (0, c.Z)(e),
        s = (0, a.e7)([l.Z], () => l.Z.getNewMemberActions(e), [e]),
        o = (0, a.e7)([u.Z], () => u.Z.getCompletedActions(e));
    if (!i) return {};
    let d = null !== (r = null == s ? void 0 : s.findIndex((e) => e.channelId === n.id)) && void 0 !== r ? r : 0,
        f = d >= 0 && null != s ? s[d] : null,
        _ = null != f && (null == o ? void 0 : o[f.channelId]) === !0;
    return {
        channelAction: f,
        completed: _
    };
}
function _(e, n) {
    let r = (0, a.e7)([l.Z], () => l.Z.getNewMemberActions(e)),
        i = (0, a.e7)([u.Z], () => u.Z.getCompletedActions(e));
    return null == r ? void 0 : r.find((e) => (null == i ? void 0 : i[e.channelId]) !== !0 && e.channelId !== n);
}
function h(e) {
    var n;
    let r = (0, a.e7)([s.ZP], () => s.ZP.getSelfMember(e));
    return (0, o.yE)(null !== (n = null == r ? void 0 : r.flags) && void 0 !== n ? n : 0, d.q.COMPLETED_HOME_ACTIONS);
}
