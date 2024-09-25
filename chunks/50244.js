n.d(t, {
    P: function () {
        return E;
    }
});
var r = n(789020);
var i = n(592125),
    a = n(271383),
    o = n(430824),
    s = n(630388),
    l = n(563534),
    u = n(846121),
    c = n(199689),
    d = n(981631),
    _ = n(372897);
function E(e, t) {
    var n, r;
    let E = o.Z.getGuild(e),
        f = i.Z.getChannel(t);
    return null != E && null != f && (0, c.Z)(E) && E.hasFeature(d.oNc.GUILD_SERVER_GUIDE) && !s.yE(null !== (r = null === (n = a.ZP.getSelfMember(E.id)) || void 0 === n ? void 0 : n.flags) && void 0 !== r ? r : 0, _.q.COMPLETED_HOME_ACTIONS) && l.Z.hasMemberAction(E.id, f.id) && !u.Z.hasCompletedActionForChannel(E.id, f.id);
}
