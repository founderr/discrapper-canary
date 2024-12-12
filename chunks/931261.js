r.d(n, {
    g: function () {
        return E;
    },
    s: function () {
        return v;
    }
});
var i = r(47120);
var a = r(392711),
    s = r.n(a),
    o = r(399606),
    l = r(637853),
    u = r(160404),
    c = r(592125),
    d = r(430824),
    f = r(563534),
    _ = r(199689),
    h = r(460347),
    p = r(981631),
    m = r(176505);
function g(e) {
    var n;
    let r = e.id,
        i = (null !== (n = f.Z.getNewMemberActions(r)) && void 0 !== n ? n : []).length > 0,
        a = f.Z.getEnabled(r);
    return i && e.hasFeature(p.oNc.COMMUNITY) && !(e.hasFeature(p.oNc.GUILD_ONBOARDING) && !a);
}
function E(e) {
    let n = (0, h.Z)(e),
        r = c.Z.getMutableGuildChannelsForGuild(e);
    return (0, o.e7)(
        [d.Z, u.Z],
        () => {
            let i = d.Z.getGuild(e);
            if (__OVERLAY__ || e === p.ME || e === p.I_8 || null == i) return !1;
            if (u.Z.isFullServerPreview(e)) return g(i);
            let a = (0, _.Z)(i),
                o = (0, l.wC)(e) && i.hasFeature(p.oNc.GUILD_ONBOARDING) && i.hasFeature(p.oNc.GUILD_SERVER_GUIDE),
                c = s().some(s().values(r), (e) => e.hasFlag(m.zZ.IS_GUILD_RESOURCE_CHANNEL));
            return !(!n && !c) && ((a && i.hasFeature(p.oNc.GUILD_ONBOARDING) && i.hasFeature(p.oNc.GUILD_SERVER_GUIDE)) || o) && i.hasFeature(p.oNc.COMMUNITY);
        },
        [e, n, r]
    );
}
function v(e) {
    let n = d.Z.getGuild(e),
        r = u.Z.isFullServerPreview(e);
    if (null == n || __OVERLAY__ || e === p.ME || e === p.I_8) return !1;
    if (r) return g(n);
    let i = (0, l.wC)(e) && n.hasFeature(p.oNc.GUILD_ONBOARDING) && n.hasFeature(p.oNc.GUILD_SERVER_GUIDE);
    return ((n.hasFeature(p.oNc.GUILD_ONBOARDING) && n.hasFeature(p.oNc.GUILD_SERVER_GUIDE)) || i) && n.hasFeature(p.oNc.COMMUNITY);
}
