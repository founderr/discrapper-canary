n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    l = n(789978),
    o = n(748780),
    c = n(91192),
    d = n(906732),
    _ = n(171368),
    E = n(981631),
    u = n(823120);
t.Z = (e) => {
    let { userId: t, children: n, isLast: r, className: T } = e,
        [I, R] = a.useState(!1),
        { analyticsLocations: g } = (0, d.ZP)(),
        N = a.useCallback(() => {
            (0, _.openUserProfileModal)({
                userId: t,
                sourceAnalyticsLocations: g,
                analyticsLocation: { section: E.jXE.FAMILY_CENTER }
            });
        }, [t, g]),
        m = () => {
            R(!0);
        },
        C = () => {
            R(!1);
        };
    return (0, s.jsx)(c.mh, {
        id: t,
        children: (e) =>
            (0, s.jsx)(l.tE, {
                offset: {
                    left: -8,
                    right: -8
                },
                children: (0, s.jsx)(o.Z.div, {
                    style: { opacity: 1 },
                    className: i()(u.rowItem, T, {
                        [u.last]: r,
                        [u.active]: I
                    }),
                    onMouseEnter: m,
                    onMouseLeave: C,
                    onClick: N,
                    ...e,
                    children: n(I)
                })
            })
    });
};
