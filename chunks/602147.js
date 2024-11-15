var i = n(200651),
    l = n(192379),
    r = n(636977),
    a = n(481060),
    o = n(571457),
    s = n(836768),
    c = n(749681),
    u = n(603592),
    d = n(49898),
    h = n(128449),
    p = n(46140),
    m = n(388032);
let f = l.forwardRef(function (e, t) {
    let { selected: n, className: f } = e,
        g = l.useCallback(() => {
            (0, o.k5)({ source: d.JU.GUILDS_BAR_ICON });
            let e = s.Z.getField('selectedTab');
            switch (e) {
                case d.F$.QUESTS:
                    return (0, c.u)({
                        tab: d.F$.QUESTS,
                        location: p.dr.DISCOVERY_COMPASS,
                        questContent: r.j.DISCOVERY_COMPASS
                    });
                case d.F$.SERVERS:
                    return (0, c.u)({
                        tab: d.F$.SERVERS,
                        entrypoint: h.Qq.GUILDS_BAR
                    });
                default:
                    return (0, c.u)({ tab: e });
            }
        }, []);
    return (0, i.jsx)(u.Z, {
        id: 'guild-discover-button',
        ref: t,
        className: f,
        onClick: g,
        selected: n,
        tooltip: m.intl.string(m.t['4nEZLi']),
        icon: a.CompassIcon
    });
});
t.Z = f;
