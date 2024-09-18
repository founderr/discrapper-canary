t.d(n, {
    U: function () {
        return M;
    },
    o: function () {
        return g;
    }
}),
    t(47120);
var i = t(275726),
    a = t(442837),
    s = t(71619),
    l = t(665906),
    r = t(496675),
    o = t(594174),
    u = t(981631),
    d = t(231338);
function c(e, n, t) {
    let a;
    return (a = e.isPrivate() ? !e.isSystemDM() : t.can(d.Pl.SEND_MESSAGES, e) && t.can(d.Pl.READ_MESSAGE_HISTORY, e)) && i.V.REPLYABLE.has(n.type);
}
function E(e, n, t, i, a) {
    let s = n.hasFlag(u.iLy.EPHEMERAL),
        l = n.state === u.yb.SENT,
        r = !e.isArchivedThread() || a;
    return t && l && !s && !i && r;
}
function M(e, n) {
    var t;
    let i = (0, l.tc)(e),
        [, o] = (0, s.AB)(null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t ? t : void 0),
        u = (0, a.e7)([r.Z], () => null != e && null != n && c(e, n, r.Z));
    return null != e && null != n && E(e, n, u, o, i);
}
function g(e, n) {
    var t;
    let i = (0, l.kn)(e),
        a = c(e, n, r.Z),
        u = o.default.getCurrentUser(),
        [, d] = (0, s.s5)(null == u ? void 0 : u.id, null !== (t = e.getGuildId()) && void 0 !== t ? t : void 0);
    return E(e, n, a, d, i);
}
