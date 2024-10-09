n.d(t, {
    o: function () {
        return x;
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
    h = n(906899),
    p = n(667105),
    f = n(341907),
    m = n(703656),
    _ = n(603592),
    g = n(981631),
    C = n(921944),
    I = n(49898),
    E = n(46140),
    N = n(689938),
    S = n(55869);
function x(e) {
    switch (e) {
        case I.F$.QUESTS:
            return (0, f.navigateToQuestHome)(E.dr.DISCOVERY_COMPASS, r.j.DISCOVERY_COMPASS);
        case I.F$.APPS:
            return (0, m.uL)(g.Z5c.GLOBAL_DISCOVERY_APPS);
        case I.F$.SERVERS:
            return (0, h.R)();
        default:
            return (0, m.uL)(g.Z5c.GLOBAL_DISCOVERY);
    }
}
let v = l.forwardRef(function (e, t) {
    let { selected: n, className: r, onClick: h } = e,
        f = d.d.getState().selectedTab,
        m = (0, o.Z)('discovery_button'),
        g = (0, p.Ws)({ location: E.dr.CONFLICT_CHECKS }),
        [v, T] = (0, c.US)([a.z.RAPIDASH_MORE_GUILDS_UPSELL], C.R.SIDEBAR, !0),
        Z = v === a.z.RAPIDASH_MORE_GUILDS_UPSELL && m && g,
        A = l.useCallback(() => {
            null == h || h(), (0, u.k5)({ source: I.JU.GUILDS_BAR_ICON }), x(f), Z && T(C.L.DISMISS);
        }, [h, f, T, Z]),
        b = l.useMemo(
            () => ({
                lowerBadgeSize: {
                    width: 12,
                    height: 12
                },
                lowerBadge: Z ? (0, i.jsx)('div', { className: S.guildNotif }) : void 0
            }),
            [Z]
        );
    return (0, i.jsx)(_.Z, {
        id: 'guild-discover-button',
        ref: t,
        className: r,
        onClick: A,
        selected: n,
        tooltip: N.Z.Messages.DISCOVER,
        icon: s.CompassIcon,
        ...b
    });
});
t.Z = v;
