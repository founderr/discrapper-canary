n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(782690),
    l = n(442837),
    u = n(114101),
    c = n(481060),
    d = n(28546),
    f = n(581883),
    _ = n(459273),
    h = n(443603),
    p = n(981631),
    m = n(957825),
    g = n(388032),
    E = n(482133);
t.Z = i.memo(
    i.forwardRef(function (e, t) {
        let { disabled: n, type: a } = e,
            [v, I] = i.useState(!1),
            S = (0, l.e7)([f.Z], () => {
                var e, t;
                return v && Object.values(null !== (t = null === (e = f.Z.frecencyWithoutFetchingLatest.favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : {}).length <= 2;
            }),
            [b, T, y] = (0, d.Iu)((e) => [e.activeView, e.activeViewType, e.pickerId], o.Z),
            A = i.useRef(0),
            N = i.useCallback(() => {
                I(!0),
                    clearTimeout(A.current),
                    (A.current = setTimeout(() => {
                        I(!1), (A.current = 0);
                    }, 2000));
            }, []);
        (0, _.yp)({
            event: p.CkL.FAVORITE_GIF,
            handler: N
        });
        let C = i.useCallback(() => {
                (0, d.RO)(m.X1.GIF, a);
            }, [a]),
            { Component: R, events: O, play: D } = (0, u.V)();
        if (n) return null;
        let L = b === m.X1.GIF && T === a;
        return (0, r.jsx)(c.Tooltip, {
            text: S ? g.intl.string(g.t.mE2e8P) : null,
            forceOpen: !0,
            children: (e) =>
                (0, r.jsx)('div', {
                    ref: t,
                    className: s()(m.CT, E.buttonContainer),
                    ...e,
                    children: (0, r.jsx)(h.Z, {
                        innerClassName: E.button,
                        onMouseEnter: O.onMouseEnter,
                        onMouseLeave: O.onMouseLeave,
                        onClick: () => {
                            C(), D();
                        },
                        isActive: L,
                        pulse: v,
                        'aria-label': g.intl.string(g.t.PtVpk5),
                        'aria-expanded': L,
                        'aria-haspopup': 'dialog',
                        'aria-controls': y,
                        children: (0, r.jsx)(R, { color: 'currentColor' })
                    })
                })
        });
    })
);
