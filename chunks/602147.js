var i = n(200651),
    l = n(192379),
    r = n(636977),
    a = n(481060),
    o = n(571457),
    s = n(836768),
    c = n(749681),
    u = n(133743),
    d = n(603592),
    h = n(49898),
    p = n(128449),
    m = n(46140),
    f = n(388032);
let g = l.forwardRef(function (e, t) {
    let { selected: n, className: g } = e,
        C = l.useCallback(() => {
            (0, o.k5)({ source: h.JU.GUILDS_BAR_ICON });
            let e = s.Z.getField('selectedTab');
            switch (e) {
                case h.F$.QUESTS:
                    return (0, c.u)({
                        tab: h.F$.QUESTS,
                        location: m.dr.DISCOVERY_COMPASS,
                        questContent: r.j.DISCOVERY_COMPASS
                    });
                case h.F$.SERVERS:
                    return (0, c.u)({
                        tab: h.F$.SERVERS,
                        entrypoint: p.Qq.GUILDS_BAR
                    });
                case h.F$.APPS:
                    return (0, u.Wv)();
                default:
                    return (0, c.u)({ tab: e });
            }
        }, []);
    return (0, i.jsx)(d.Z, {
        id: 'guild-discover-button',
        ref: t,
        className: g,
        onClick: C,
        selected: n,
        tooltip: f.intl.string(f.t['4nEZLi']),
        icon: a.CompassIcon
    });
});
t.Z = g;
