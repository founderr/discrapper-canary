n.d(t, {
    g: function () {
        return m;
    },
    s: function () {
        return g;
    }
}),
    n(47120);
var r = n(392711),
    i = n.n(r),
    a = n(399606),
    s = n(637853),
    o = n(160404),
    l = n(592125),
    u = n(430824),
    c = n(563534),
    d = n(199689),
    f = n(460347),
    _ = n(981631),
    p = n(176505);
function h(e) {
    var t;
    let n = e.id,
        r = (null !== (t = c.Z.getNewMemberActions(n)) && void 0 !== t ? t : []).length > 0,
        i = c.Z.getEnabled(n);
    return r && e.hasFeature(_.oNc.COMMUNITY) && !(e.hasFeature(_.oNc.GUILD_ONBOARDING) && !i);
}
function m(e) {
    let t = (0, f.Z)(e),
        n = l.Z.getMutableGuildChannelsForGuild(e);
    return (0, a.e7)(
        [u.Z, o.Z],
        () => {
            let r = u.Z.getGuild(e);
            if (__OVERLAY__ || e === _.ME || e === _.I_8 || null == r) return !1;
            if (o.Z.isFullServerPreview(e)) return h(r);
            let a = (0, d.Z)(r),
                l = (0, s.wC)(e) && r.hasFeature(_.oNc.GUILD_ONBOARDING) && r.hasFeature(_.oNc.GUILD_SERVER_GUIDE),
                c = i().some(i().values(n), (e) => e.hasFlag(p.zZ.IS_GUILD_RESOURCE_CHANNEL));
            return !(!t && !c) && ((a && r.hasFeature(_.oNc.GUILD_ONBOARDING) && r.hasFeature(_.oNc.GUILD_SERVER_GUIDE)) || l) && r.hasFeature(_.oNc.COMMUNITY);
        },
        [e, t, n]
    );
}
function g(e) {
    let t = u.Z.getGuild(e),
        n = o.Z.isFullServerPreview(e);
    if (null == t || __OVERLAY__ || e === _.ME || e === _.I_8) return !1;
    if (n) return h(t);
    let r = (0, s.wC)(e) && t.hasFeature(_.oNc.GUILD_ONBOARDING) && t.hasFeature(_.oNc.GUILD_SERVER_GUIDE);
    return ((t.hasFeature(_.oNc.GUILD_ONBOARDING) && t.hasFeature(_.oNc.GUILD_SERVER_GUIDE)) || r) && t.hasFeature(_.oNc.COMMUNITY);
}
