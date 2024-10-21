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
    _ = n(581883),
    E = n(459273),
    f = n(443603),
    h = n(981631),
    p = n(957825),
    I = n(689938),
    m = n(933283);
t.Z = i.memo(
    i.forwardRef(function (e, t) {
        let { disabled: n, type: a } = e,
            [T, S] = i.useState(!1),
            g = (0, l.e7)([_.Z], () => {
                var e, t;
                return T && Object.values(null !== (t = null === (e = _.Z.frecencyWithoutFetchingLatest.favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : {}).length <= 2;
            }),
            [A, N, R] = (0, d.Iu)((e) => [e.activeView, e.activeViewType, e.pickerId], o.Z),
            O = i.useRef(0),
            v = i.useCallback(() => {
                S(!0),
                    clearTimeout(O.current),
                    (O.current = setTimeout(() => {
                        S(!1), (O.current = 0);
                    }, 2000));
            }, []);
        (0, E.yp)({
            event: h.CkL.FAVORITE_GIF,
            handler: v
        });
        let C = i.useCallback(() => {
                (0, d.RO)(p.X1.GIF, a);
            }, [a]),
            { Component: L, events: D, play: y } = (0, u.V)();
        if (n) return null;
        let b = A === p.X1.GIF && N === a;
        return (0, r.jsx)(c.Tooltip, {
            text: g ? I.Z.Messages.GIF_TOOLTIP_FAVORITED_PICKER_BUTTON : null,
            forceOpen: !0,
            children: (e) =>
                (0, r.jsx)('div', {
                    ref: t,
                    className: s()(p.CT, m.buttonContainer),
                    ...e,
                    children: (0, r.jsx)(f.Z, {
                        innerClassName: m.button,
                        onMouseEnter: D.onMouseEnter,
                        onMouseLeave: D.onMouseLeave,
                        onClick: () => {
                            C(), y();
                        },
                        isActive: b,
                        pulse: T,
                        'aria-label': I.Z.Messages.GIF_BUTTON_LABEL,
                        'aria-expanded': b,
                        'aria-haspopup': 'dialog',
                        'aria-controls': R,
                        children: (0, r.jsx)(L, { color: 'currentColor' })
                    })
                })
        });
    })
);
