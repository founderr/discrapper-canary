var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(143927),
    u = n(442837),
    c = n(114101),
    d = n(481060),
    _ = n(28546),
    E = n(581883),
    f = n(459273),
    h = n(443603),
    p = n(981631),
    m = n(957825),
    I = n(689938),
    T = n(933283);
function g(e, t) {
    let { disabled: n, type: r } = e,
        [o, g] = a.useState(!1),
        S = (0, u.e7)([E.Z], () => {
            var e, t;
            return o && Object.values(null !== (t = null === (e = E.Z.frecencyWithoutFetchingLatest.favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : {}).length <= 2;
        }),
        [A, v, N] = (0, _.Iu)((e) => [e.activeView, e.activeViewType, e.pickerId], l.Z),
        O = a.useRef(0),
        R = a.useCallback(() => {
            g(!0),
                clearTimeout(O.current),
                (O.current = setTimeout(() => {
                    g(!1), (O.current = 0);
                }, 2000));
        }, []);
    (0, f.yp)({
        event: p.CkL.FAVORITE_GIF,
        handler: R
    });
    let C = a.useCallback(() => {
            (0, _.RO)(m.X1.GIF, r);
        }, [r]),
        { Component: y, events: b, play: L } = (0, c.V)();
    if (n) return null;
    let D = A === m.X1.GIF && v === r;
    return (0, i.jsx)(d.Tooltip, {
        text: S ? I.Z.Messages.GIF_TOOLTIP_FAVORITED_PICKER_BUTTON : null,
        forceOpen: !0,
        children: (e) =>
            (0, i.jsx)('div', {
                ref: t,
                className: s()(m.CT, T.buttonContainer),
                ...e,
                children: (0, i.jsx)(h.Z, {
                    innerClassName: T.button,
                    onMouseEnter: b.onMouseEnter,
                    onMouseLeave: b.onMouseLeave,
                    onClick: () => {
                        C(), L();
                    },
                    isActive: D,
                    pulse: o,
                    'aria-label': I.Z.Messages.GIF_BUTTON_LABEL,
                    'aria-expanded': D,
                    'aria-haspopup': 'dialog',
                    'aria-controls': N,
                    children: (0, i.jsx)(y, { color: 'currentColor' })
                })
            })
    });
}
t.Z = a.memo(a.forwardRef(g));
