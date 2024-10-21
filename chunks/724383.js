var i = n(200651),
    a = n(192379),
    s = n(512969),
    r = n(252618),
    l = n(352057),
    o = n(319443),
    c = n(106075),
    d = n(121711),
    u = n(823379),
    _ = n(571457),
    E = n(836768),
    h = n(766219),
    m = n(49898),
    I = n(909482);
t.Z = function () {
    let e = (0, l.h)({ location: 'DiscoveryUISelectedTab' }),
        t = (0, E.OA)(),
        n = (function (e) {
            switch (e) {
                case m.F$.SERVERS:
                    return (0, i.jsx)(c.Z, {});
                case m.F$.APPS:
                    return (0, i.jsx)(o.Z, {});
                case m.F$.QUESTS:
                    return (0, i.jsx)(d.Z, {});
                default:
                    (0, u.vE)(e);
            }
        })(t),
        p = (0, s.TH)();
    return (
        a.useEffect(() => {
            let t = p.pathname,
                n = (0, h.IE)(t, e);
            n !== (0, E.qe)() && (0, E.Sx)({ selectedTab: n });
        }, [e, p.pathname]),
        a.useEffect(() => {
            (0, _.RI)({ selectedTab: t });
        }, [t]),
        (0, i.jsxs)('section', {
            className: I.container,
            children: [(0, i.jsx)(r.yY, { location: (0, h.sm)(t) }), (0, i.jsx)('div', { className: I.dragRegion }), n]
        })
    );
};
