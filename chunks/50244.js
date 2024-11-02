n.d(t, {
    P: function () {
        return f;
    }
}),
    n(789020);
var r = n(592125),
    i = n(271383),
    a = n(430824),
    s = n(630388),
    o = n(563534),
    l = n(846121),
    u = n(199689),
    c = n(981631),
    d = n(372897);
function f(e, t) {
    var n, f;
    let _ = a.Z.getGuild(e),
        h = r.Z.getChannel(t);
    return null != _ && null != h && (0, u.Z)(_) && _.hasFeature(c.oNc.GUILD_SERVER_GUIDE) && !s.yE(null !== (f = null === (n = i.ZP.getSelfMember(_.id)) || void 0 === n ? void 0 : n.flags) && void 0 !== f ? f : 0, d.q.COMPLETED_HOME_ACTIONS) && o.Z.hasMemberAction(_.id, h.id) && !l.Z.hasCompletedActionForChannel(_.id, h.id);
}
