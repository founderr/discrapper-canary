n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(489948),
    o = n(748780),
    c = n(91192),
    d = n(906732),
    u = n(171368),
    g = n(981631),
    m = n(44888);
t.Z = (e) => {
    let { userId: t, children: n, isLast: a, className: f } = e,
        [_, p] = r.useState(!1),
        { analyticsLocations: h } = (0, d.ZP)(),
        E = r.useCallback(() => {
            (0, u.openUserProfileModal)({
                userId: t,
                sourceAnalyticsLocations: h,
                analyticsLocation: { section: g.jXE.FAMILY_CENTER }
            });
        }, [t, h]),
        b = () => {
            p(!0);
        },
        x = () => {
            p(!1);
        };
    return (0, i.jsx)(c.mh, {
        id: t,
        children: (e) =>
            (0, i.jsx)(l.tE, {
                offset: {
                    left: -8,
                    right: -8
                },
                children: (0, i.jsx)(o.Z.div, {
                    style: { opacity: 1 },
                    className: s()(m.rowItem, f, {
                        [m.last]: a,
                        [m.active]: _
                    }),
                    onMouseEnter: b,
                    onMouseLeave: x,
                    onClick: E,
                    ...e,
                    children: n(_)
                })
            })
    });
};
