n.d(t, {
    g: function () {
        return I;
    },
    s: function () {
        return T;
    }
});
var r = n(47120);
var i = n(392711),
    a = n.n(i),
    o = n(399606),
    s = n(637853),
    l = n(160404),
    u = n(592125),
    c = n(430824),
    d = n(563534),
    _ = n(621923),
    E = n(199689),
    f = n(460347),
    h = n(981631),
    p = n(176505);
function m(e) {
    var t;
    let n = e.id,
        { homeSettingsEnabled: r } = _.ZP.getCurrentConfig(
            {
                guildId: n,
                location: '61eef9_1'
            },
            { autoTrackExposure: !1 }
        ),
        i = (null !== (t = d.Z.getNewMemberActions(n)) && void 0 !== t ? t : []).length > 0,
        a = d.Z.getEnabled(n);
    return r && i && e.hasFeature(h.oNc.COMMUNITY) && !(e.hasFeature(h.oNc.GUILD_ONBOARDING) && !a);
}
function I(e) {
    let { homeSettingsEnabled: t } = _.ZP.useExperiment(
            {
                guildId: e,
                location: '61eef9_2'
            },
            { autoTrackExposure: !1 }
        ),
        n = (0, f.Z)(e),
        r = u.Z.getMutableGuildChannelsForGuild(e);
    return (0, o.e7)(
        [c.Z, l.Z],
        () => {
            let i = c.Z.getGuild(e);
            if (__OVERLAY__ || e === h.ME || e === h.I_8 || null == i) return !1;
            if (l.Z.isFullServerPreview(e)) return m(i);
            let o = (0, E.Z)(i),
                u = t && (0, s.wC)(e) && i.hasFeature(h.oNc.GUILD_ONBOARDING) && i.hasFeature(h.oNc.GUILD_SERVER_GUIDE),
                d = a().some(a().values(r), (e) => e.hasFlag(p.zZ.IS_GUILD_RESOURCE_CHANNEL));
            return !(!n && !d) && ((o && i.hasFeature(h.oNc.GUILD_ONBOARDING) && i.hasFeature(h.oNc.GUILD_SERVER_GUIDE)) || u) && i.hasFeature(h.oNc.COMMUNITY);
        },
        [e, t, n, r]
    );
}
function T(e) {
    let t = c.Z.getGuild(e),
        { homeSettingsEnabled: n } = _.ZP.getCurrentConfig({
            guildId: e,
            location: '61eef9_4'
        }),
        r = l.Z.isFullServerPreview(e);
    if (null == t || __OVERLAY__ || e === h.ME || e === h.I_8) return !1;
    if (r) return m(t);
    let i = n && (0, s.wC)(e) && t.hasFeature(h.oNc.GUILD_ONBOARDING) && t.hasFeature(h.oNc.GUILD_SERVER_GUIDE);
    return ((t.hasFeature(h.oNc.GUILD_ONBOARDING) && t.hasFeature(h.oNc.GUILD_SERVER_GUIDE)) || i) && t.hasFeature(h.oNc.COMMUNITY);
}
