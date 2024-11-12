n.d(t, {
    o: function () {
        return I;
    }
}),
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
    f = n(603592),
    m = n(921944),
    g = n(49898),
    C = n(128449),
    _ = n(46140),
    v = n(388032),
    x = n(55869);
function I(e) {
    switch (e) {
        case g.F$.QUESTS:
            return (0, h.transitionToGlobalDiscovery)({
                tab: g.F$.QUESTS,
                location: _.dr.DISCOVERY_COMPASS,
                questContent: r.j.DISCOVERY_COMPASS
            });
        case g.F$.SERVERS:
            return (0, h.transitionToGlobalDiscovery)({
                tab: g.F$.SERVERS,
                entrypoint: C.Qq.GUILDS_BAR
            });
        default:
            return (0, h.transitionToGlobalDiscovery)({ tab: e });
    }
}
let b = l.forwardRef(function (e, t) {
    let { selected: n, className: r, onClick: h } = e,
        C = (0, s.Z)('discovery_button'),
        b = (0, p.Ws)({ location: _.dr.CONFLICT_CHECKS }),
        [S, E] = (0, c.US)(C && b ? [a.z.RAPIDASH_MORE_GUILDS_UPSELL] : [], m.R.SIDEBAR, !0),
        N = S === a.z.RAPIDASH_MORE_GUILDS_UPSELL,
        Z = l.useCallback(() => {
            null == h || h(), (0, u.k5)({ source: g.JU.GUILDS_BAR_ICON }), I(d.Z.getField('selectedTab')), N && E(m.L.DISMISS);
        }, [h, E, N]),
        y = l.useMemo(
            () => ({
                lowerBadgeSize: {
                    width: 12,
                    height: 12
                },
                lowerBadge: N ? (0, i.jsx)('div', { className: x.guildNotif }) : void 0
            }),
            [N]
        );
    return (0, i.jsx)(f.Z, {
        id: 'guild-discover-button',
        ref: t,
        className: r,
        onClick: Z,
        selected: n,
        tooltip: v.intl.string(v.t['4nEZLi']),
        icon: o.CompassIcon,
        ...y
    });
});
t.Z = b;
