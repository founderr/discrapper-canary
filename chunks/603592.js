n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(91192),
    s = n(481060),
    c = n(276952),
    u = n(682662),
    d = n(662146),
    h = n(69517);
let p = l.forwardRef(function (e, t) {
    let { id: n, onClick: r, onContextMenu: p, icon: f, selected: m, tooltip: g, upperBadge: C, lowerBadge: _, lowerBadgeSize: v, showPill: x = !0, className: I, 'aria-label': b, children: S, onMouseEnter: Z, onMouseLeave: N, onMouseDown: E } = e,
        y = (0, o.Ie)(n),
        [j, T] = l.useState(!1),
        P = 'string' == typeof g && null == b ? g : b;
    return (0, i.jsxs)(u.H, {
        children: [
            x
                ? (0, i.jsx)('div', {
                      className: h.pill,
                      children: (0, i.jsx)(c.Z, {
                          hovered: j,
                          selected: m
                      })
                  })
                : null,
            (0, i.jsx)(d.Z, {
                text: g,
                selected: m,
                children: (0, i.jsx)(s.BlobMask, {
                    className: h.__invalid_circleButtonMask,
                    selected: m || j,
                    upperBadge: C,
                    lowerBadge: _,
                    lowerBadgeSize: v,
                    children: (0, i.jsx)(s.Clickable, {
                        innerRef: t,
                        onMouseEnter: () => {
                            null == Z || Z(), T(!0);
                        },
                        onMouseLeave: () => {
                            null == N || N(), T(!1);
                        },
                        onMouseDown: E,
                        className: a()(h.circleIconButton, I, { [h.selected]: m || j }),
                        onClick: r,
                        'aria-label': P,
                        onContextMenu: p,
                        focusProps: { enabled: !1 },
                        ...y,
                        children:
                            null != f &&
                            (0, i.jsx)(f, {
                                className: h.circleIcon,
                                color: 'currentColor'
                            })
                    })
                })
            }),
            S
        ]
    });
});
t.Z = p;
