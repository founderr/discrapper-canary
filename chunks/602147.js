n.d(t, {
    o: function () {
        return S;
    }
}),
    n(47120);
var i = n(735250),
    l = n(470079),
    r = n(636977),
    a = n(704215),
    s = n(481060),
    o = n(169559),
    c = n(243778),
    u = n(571457),
    d = n(836768),
    h = n(667105),
    p = n(341907),
    f = n(703656),
    _ = n(603592),
    m = n(981631),
    g = n(921944),
    C = n(49898),
    I = n(46140),
    E = n(689938),
    N = n(55869);
function S(e) {
    switch (e) {
        case C.F$.QUESTS:
            return (0, p.navigateToQuestHome)(I.dr.DISCOVERY_COMPASS, r.j.DISCOVERY_COMPASS);
        case C.F$.APPS:
            return (0, f.uL)(m.Z5c.GLOBAL_DISCOVERY_APPS);
        case C.F$.SERVERS:
            return (0, f.uL)(m.Z5c.GLOBAL_DISCOVERY_SERVERS);
        default:
            return (0, f.uL)(m.Z5c.GLOBAL_DISCOVERY);
    }
}
let x = l.forwardRef(function (e, t) {
    let { selected: n, className: r, onClick: p } = e,
        f = d.d.getState().selectedTab,
        m = (0, o.Z)('discovery_button'),
        x = (0, h.Ws)({ location: I.dr.CONFLICT_CHECKS }),
        [v, T] = (0, c.US)([a.z.RAPIDASH_MORE_GUILDS_UPSELL], g.R.SIDEBAR, !0),
        Z = v === a.z.RAPIDASH_MORE_GUILDS_UPSELL && m && x,
        b = l.useCallback(() => {
            null == p || p(), (0, u.k5)({ source: C.JU.GUILDS_BAR_ICON }), S(f), Z && T(g.L.DISMISS);
        }, [p, f, T, Z]),
        A = l.useMemo(
            () => ({
                lowerBadgeSize: {
                    width: 12,
                    height: 12
                },
                lowerBadge: Z ? (0, i.jsx)('div', { className: N.guildNotif }) : void 0
            }),
            [Z]
        );
    return (0, i.jsx)(_.Z, {
        id: 'guild-discover-button',
        ref: t,
        className: r,
        onClick: b,
        selected: n,
        tooltip: E.Z.Messages.DISCOVER,
        icon: s.CompassIcon,
        ...A
    });
});
t.Z = x;
