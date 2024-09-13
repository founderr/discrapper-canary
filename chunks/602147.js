n.d(t, {
    o: function () {
        return N;
    }
});
var i = n(735250),
    l = n(470079),
    r = n(636977),
    a = n(481060),
    s = n(212093),
    o = n(963202),
    c = n(831565),
    u = n(571457),
    d = n(836768),
    h = n(341907),
    p = n(703656),
    _ = n(683301),
    f = n(603592),
    m = n(981631),
    g = n(731455),
    C = n(49898),
    I = n(46140),
    E = n(689938);
function N(e, t) {
    let n = (0, c.a)({ location: 'discovery_button' }),
        i = window.location.pathname.startsWith(m.Z5c.GUILD_DISCOVERY),
        l = _.ZP.getCurrentCategoryId() === g.Gj.Clans;
    if (n) {
        if (e === C.F$.QUESTS) {
            (0, h.navigateToQuestHome)(I.dr.DISCOVERY_COMPASS, r.j.DISCOVERY_COMPASS);
            return;
        }
        if (e === C.F$.SERVERS) {
            (0, p.uL)(m.Z5c.GLOBAL_DISCOVERY_SERVERS);
            return;
        }
        (0, p.uL)(m.Z5c.GLOBAL_DISCOVERY);
        return;
    }
    i && !l && ((0, s.AQ)(), (0, s.uY)(t, !0));
    let a = (0, p.s1)().location.search;
    (0, p.uL)(m.Z5c.GUILD_DISCOVERY, { search: a });
}
let x = l.forwardRef(function (e, t) {
    let { selected: n, className: r, onClick: s } = e,
        { clanDiscoveryEnabled: h } = (0, o.nk)('guild_discovery'),
        p = (0, c.v)({ location: 'guild_discovery_button' }) ? E.Z.Messages.DISCOVER : E.Z.Messages.GUILD_DISCOVERY_TOOLTIP,
        _ = d.d.getState().selectedTab,
        m = h ? g.Gj.Clans : g.Hk,
        I = l.useCallback(() => {
            null == s || s(), (0, u.k5)({ source: C.JU.GUILDS_BAR_ICON }), N(_, m);
        }, [s, _, m]);
    return (0, i.jsx)(f.Z, {
        id: 'guild-discover-button',
        ref: t,
        className: r,
        onClick: I,
        selected: n,
        tooltip: p,
        icon: a.CompassIcon
    });
});
t.Z = x;
