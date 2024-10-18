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
    h = n(749681),
    p = n(667105),
    f = n(603592),
    m = n(921944),
    _ = n(49898),
    g = n(46140),
    C = n(689938),
    I = n(55869);
let E = l.forwardRef(function (e, t) {
    let { selected: n, className: E, onClick: N } = e,
        x = (0, o.Z)('discovery_button'),
        S = (0, p.Ws)({ location: g.dr.CONFLICT_CHECKS }),
        [v, Z] = (0, c.US)([a.z.RAPIDASH_MORE_GUILDS_UPSELL], m.R.SIDEBAR, !0),
        T = v === a.z.RAPIDASH_MORE_GUILDS_UPSELL && x && S,
        b = l.useCallback(() => {
            null == N || N(),
                (0, u.k5)({ source: _.JU.GUILDS_BAR_ICON }),
                !(function (e) {
                    if (e === _.F$.QUESTS)
                        return (0, h.transitionToGlobalDiscovery)({
                            tab: _.F$.QUESTS,
                            location: g.dr.DISCOVERY_COMPASS,
                            questContent: r.j.DISCOVERY_COMPASS
                        });
                    (0, h.transitionToGlobalDiscovery)({ tab: e });
                })((0, d.qe)()),
                T && Z(m.L.DISMISS);
        }, [N, Z, T]),
        A = l.useMemo(
            () => ({
                lowerBadgeSize: {
                    width: 12,
                    height: 12
                },
                lowerBadge: T ? (0, i.jsx)('div', { className: I.guildNotif }) : void 0
            }),
            [T]
        );
    return (0, i.jsx)(f.Z, {
        id: 'guild-discover-button',
        ref: t,
        className: E,
        onClick: b,
        selected: n,
        tooltip: C.Z.Messages.DISCOVER,
        icon: s.CompassIcon,
        ...A
    });
});
t.Z = E;
