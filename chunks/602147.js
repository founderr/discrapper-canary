n(47120);
var i = n(200651),
    l = n(192379),
    r = n(636977),
    a = n(704215),
    o = n(481060),
    s = n(169559),
    c = n(243778),
    u = n(571457),
    d = n(836768),
    h = n(749681),
    p = n(667105),
    m = n(603592),
    f = n(921944),
    g = n(49898),
    C = n(128449),
    _ = n(46140),
    v = n(388032),
    x = n(55869);
let I = l.forwardRef(function (e, t) {
    let { selected: n, className: I, onClick: b } = e,
        E = (0, s.Z)('discovery_button'),
        S = (0, p.Ws)({ location: _.dr.CONFLICT_CHECKS }),
        [Z, N] = (0, c.US)(E && S ? [a.z.RAPIDASH_MORE_GUILDS_UPSELL] : [], f.R.SIDEBAR, !0),
        y = Z === a.z.RAPIDASH_MORE_GUILDS_UPSELL,
        T = l.useCallback(() => {
            null == b || b(),
                (0, u.k5)({ source: g.JU.GUILDS_BAR_ICON }),
                !(function (e) {
                    switch (e) {
                        case g.F$.QUESTS:
                            return (0, h.u)({
                                tab: g.F$.QUESTS,
                                location: _.dr.DISCOVERY_COMPASS,
                                questContent: r.j.DISCOVERY_COMPASS
                            });
                        case g.F$.SERVERS:
                            return (0, h.u)({
                                tab: g.F$.SERVERS,
                                entrypoint: C.Qq.GUILDS_BAR
                            });
                        default:
                            return (0, h.u)({ tab: e });
                    }
                })(d.Z.getField('selectedTab')),
                y && N(f.L.DISMISS);
        }, [b, N, y]),
        j = l.useMemo(
            () => ({
                lowerBadgeSize: {
                    width: 12,
                    height: 12
                },
                lowerBadge: y ? (0, i.jsx)('div', { className: x.guildNotif }) : void 0
            }),
            [y]
        );
    return (0, i.jsx)(m.Z, {
        id: 'guild-discover-button',
        ref: t,
        className: I,
        onClick: T,
        selected: n,
        tooltip: v.intl.string(v.t['4nEZLi']),
        icon: o.CompassIcon,
        ...j
    });
});
t.Z = I;
