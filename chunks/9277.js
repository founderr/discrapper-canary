n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(232713),
    l = n(442837),
    u = n(114101),
    c = n(481060),
    d = n(540059),
    f = n(28546),
    _ = n(581883),
    p = n(459273),
    h = n(443603),
    m = n(981631),
    g = n(957825),
    E = n(388032),
    v = n(553796);
t.Z = i.memo(
    i.forwardRef(function (e, t) {
        let { disabled: n, type: a } = e,
            [I, T] = i.useState(!1),
            b = (0, l.e7)([_.Z], () => {
                var e, t;
                return I && Object.values(null !== (t = null === (e = _.Z.frecencyWithoutFetchingLatest.favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : {}).length <= 2;
            }),
            [S, y, A] = (0, f.Iu)((e) => [e.activeView, e.activeViewType, e.pickerId], o.X),
            N = i.useRef(0),
            C = i.useCallback(() => {
                T(!0),
                    clearTimeout(N.current),
                    (N.current = setTimeout(() => {
                        T(!1), (N.current = 0);
                    }, 2000));
            }, []);
        (0, p.yp)({
            event: m.CkL.FAVORITE_GIF,
            handler: C
        });
        let R = i.useCallback(() => {
                (0, f.RO)(g.X1.GIF, a);
            }, [a]),
            { Component: O, events: D, play: L } = (0, u.V)(),
            x = (0, d.Q3)('ChannelGIFPickerButton');
        if (n) return null;
        let w = S === g.X1.GIF && y === a;
        return (0, r.jsx)(c.Tooltip, {
            text: b ? E.intl.string(E.t.mE2e8P) : null,
            forceOpen: !0,
            children: (e) =>
                (0, r.jsx)('div', {
                    ref: t,
                    className: s()(g.CT, v.buttonContainer),
                    ...e,
                    children: (0, r.jsx)(h.Z, {
                        innerClassName: v.button,
                        onMouseEnter: D.onMouseEnter,
                        onMouseLeave: D.onMouseLeave,
                        onClick: () => {
                            R(), L();
                        },
                        isActive: w,
                        pulse: I,
                        'aria-label': E.intl.string(E.t.PtVpk5),
                        'aria-expanded': w,
                        'aria-haspopup': 'dialog',
                        'aria-controls': A,
                        children: (0, r.jsx)(O, {
                            size: x ? 'refresh_sm' : void 0,
                            color: 'currentColor'
                        })
                    })
                })
        });
    })
);
