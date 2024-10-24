n(47120);
var i = n(200651),
    l = n(192379),
    r = n(636977),
    a = n(704215),
    s = n(481060),
    o = n(169559),
    c = n(243778),
    u = n(571457),
    d = n(836768),
    h = n(749681),
    p = n(667105),
    f = n(603592),
    _ = n(921944),
    m = n(49898),
    g = n(128449),
    C = n(46140),
    I = n(689938),
    E = n(55869);
let N = l.forwardRef(function (e, t) {
    let { selected: n, className: N, onClick: x } = e,
        S = (0, o.Z)('discovery_button'),
        v = (0, p.Ws)({ location: C.dr.CONFLICT_CHECKS }),
        [Z, T] = (0, c.US)(S && v ? [a.z.RAPIDASH_MORE_GUILDS_UPSELL] : [], _.R.SIDEBAR, !0),
        b = Z === a.z.RAPIDASH_MORE_GUILDS_UPSELL,
        A = l.useCallback(() => {
            null == x || x(),
                (0, u.k5)({ source: m.JU.GUILDS_BAR_ICON }),
                !(function (e) {
                    switch (e) {
                        case m.F$.QUESTS:
                            return (0, h.transitionToGlobalDiscovery)({
                                tab: m.F$.QUESTS,
                                location: C.dr.DISCOVERY_COMPASS,
                                questContent: r.j.DISCOVERY_COMPASS
                            });
                        case m.F$.SERVERS:
                            return (0, h.transitionToGlobalDiscovery)({
                                tab: m.F$.SERVERS,
                                entrypoint: g.Qq.GUILDS_BAR
                            });
                        default:
                            return (0, h.transitionToGlobalDiscovery)({ tab: e });
                    }
                })((0, d.qe)()),
                b && T(_.L.DISMISS);
        }, [x, T, b]),
        M = l.useMemo(
            () => ({
                lowerBadgeSize: {
                    width: 12,
                    height: 12
                },
                lowerBadge: b ? (0, i.jsx)('div', { className: E.guildNotif }) : void 0
            }),
            [b]
        );
    return (0, i.jsx)(f.Z, {
        id: 'guild-discover-button',
        ref: t,
        className: N,
        onClick: A,
        selected: n,
        tooltip: I.Z.Messages.DISCOVER,
        icon: s.CompassIcon,
        ...M
    });
});
t.Z = N;
