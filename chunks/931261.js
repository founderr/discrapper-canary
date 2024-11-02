n.d(t, {
    g: function () {
        return g;
    },
    s: function () {
        return E;
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
    d = n(621923),
    f = n(199689),
    _ = n(460347),
    h = n(981631),
    p = n(176505);
function m(e) {
    var t;
    let n = e.id,
        { homeSettingsEnabled: r } = d.ZP.getCurrentConfig(
            {
                guildId: n,
                location: '61eef9_1'
            },
            { autoTrackExposure: !1 }
        ),
        i = (null !== (t = c.Z.getNewMemberActions(n)) && void 0 !== t ? t : []).length > 0,
        a = c.Z.getEnabled(n);
    return r && i && e.hasFeature(h.oNc.COMMUNITY) && !(e.hasFeature(h.oNc.GUILD_ONBOARDING) && !a);
}
function g(e) {
    let { homeSettingsEnabled: t } = d.ZP.useExperiment(
            {
                guildId: e,
                location: '61eef9_2'
            },
            { autoTrackExposure: !1 }
        ),
        n = (0, _.Z)(e),
        r = l.Z.getMutableGuildChannelsForGuild(e);
    return (0, a.e7)(
        [u.Z, o.Z],
        () => {
            let a = u.Z.getGuild(e);
            if (__OVERLAY__ || e === h.ME || e === h.I_8 || null == a) return !1;
            if (o.Z.isFullServerPreview(e)) return m(a);
            let l = (0, f.Z)(a),
                c = t && (0, s.wC)(e) && a.hasFeature(h.oNc.GUILD_ONBOARDING) && a.hasFeature(h.oNc.GUILD_SERVER_GUIDE),
                d = i().some(i().values(r), (e) => e.hasFlag(p.zZ.IS_GUILD_RESOURCE_CHANNEL));
            return !(!n && !d) && ((l && a.hasFeature(h.oNc.GUILD_ONBOARDING) && a.hasFeature(h.oNc.GUILD_SERVER_GUIDE)) || c) && a.hasFeature(h.oNc.COMMUNITY);
        },
        [e, t, n, r]
    );
}
function E(e) {
    let t = u.Z.getGuild(e),
        { homeSettingsEnabled: n } = d.ZP.getCurrentConfig({
            guildId: e,
            location: '61eef9_4'
        }),
        r = o.Z.isFullServerPreview(e);
    if (null == t || __OVERLAY__ || e === h.ME || e === h.I_8) return !1;
    if (r) return m(t);
    let i = n && (0, s.wC)(e) && t.hasFeature(h.oNc.GUILD_ONBOARDING) && t.hasFeature(h.oNc.GUILD_SERVER_GUIDE);
    return ((t.hasFeature(h.oNc.GUILD_ONBOARDING) && t.hasFeature(h.oNc.GUILD_SERVER_GUIDE)) || i) && t.hasFeature(h.oNc.COMMUNITY);
}
