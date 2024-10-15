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
    _ = n(703656),
    m = n(603592),
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
            return (0, _.uL)(g.Z5c.GLOBAL_DISCOVERY_APPS);
        case I.F$.SERVERS:
            return (0, h.R)();
        default:
            return (0, _.uL)(g.Z5c.GLOBAL_DISCOVERY);
    }
}
let v = l.forwardRef(function (e, t) {
    let { selected: n, className: r, onClick: h } = e,
        f = d.d.getState().selectedTab,
        _ = (0, o.Z)('discovery_button'),
        g = (0, p.Ws)({ location: E.dr.CONFLICT_CHECKS }),
        [v, Z] = (0, c.US)([a.z.RAPIDASH_MORE_GUILDS_UPSELL], C.R.SIDEBAR, !0),
        T = v === a.z.RAPIDASH_MORE_GUILDS_UPSELL && _ && g,
        b = l.useCallback(() => {
            null == h || h(), (0, u.k5)({ source: I.JU.GUILDS_BAR_ICON }), x(f), T && Z(C.L.DISMISS);
        }, [h, f, Z, T]),
        A = l.useMemo(
            () => ({
                lowerBadgeSize: {
                    width: 12,
                    height: 12
                },
                lowerBadge: T ? (0, i.jsx)('div', { className: S.guildNotif }) : void 0
            }),
            [T]
        );
    return (0, i.jsx)(m.Z, {
        id: 'guild-discover-button',
        ref: t,
        className: r,
        onClick: b,
        selected: n,
        tooltip: N.Z.Messages.DISCOVER,
        icon: s.CompassIcon,
        ...A
    });
});
t.Z = v;
