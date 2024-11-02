n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(442837),
    l = n(358221),
    r = n(430824),
    a = n(496675),
    s = n(431328),
    o = n(501655),
    c = n(146085),
    u = n(71275),
    d = n(981631);
function h(e) {
    var t;
    let n = (0, i.e7)([l.Z], () => l.Z.getStageVideoLimitBoostUpsellDismissed(e.id), [e.id]),
        h = (0, s.Io)(e.id),
        m = (0, s.Rk)(e.id, o.pV.AUDIENCE),
        p = (0, u.PK)(e.id),
        f = (0, i.e7)([r.Z], () => r.Z.getGuild(e.guild_id), [e.guild_id]),
        g = (0, i.e7)([a.Z], () => a.Z.can(c.yP, e), [e]),
        C = null !== (t = null == f ? void 0 : f.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
        x = !(null == f ? void 0 : f.isCommunity()) && C > d.RcX;
    return p && !n && g && !x && h + m >= C;
}
