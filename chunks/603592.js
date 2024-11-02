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
    h = n(322459);
let p = l.forwardRef(function (e, t) {
    let { id: n, onClick: r, onContextMenu: p, icon: f, selected: m, tooltip: g, upperBadge: C, lowerBadge: _, lowerBadgeSize: x, showPill: v = !0, className: I, 'aria-label': b, children: N, onMouseEnter: E, onMouseLeave: S, onMouseDown: Z } = e,
        y = (0, o.Ie)(n),
        [T, j] = l.useState(!1),
        A = 'string' == typeof g && null == b ? g : b;
    return (0, i.jsxs)(u.H, {
        children: [
            v
                ? (0, i.jsx)('div', {
                      className: h.pill,
                      children: (0, i.jsx)(c.Z, {
                          hovered: T,
                          selected: m
                      })
                  })
                : null,
            (0, i.jsx)(d.Z, {
                text: g,
                selected: m,
                children: (0, i.jsx)(s.BlobMask, {
                    className: h.__invalid_circleButtonMask,
                    selected: m || T,
                    upperBadge: C,
                    lowerBadge: _,
                    lowerBadgeSize: x,
                    children: (0, i.jsx)(s.Clickable, {
                        innerRef: t,
                        onMouseEnter: () => {
                            null == E || E(), j(!0);
                        },
                        onMouseLeave: () => {
                            null == S || S(), j(!1);
                        },
                        onMouseDown: Z,
                        className: a()(h.circleIconButton, I, { [h.selected]: m || T }),
                        onClick: r,
                        'aria-label': A,
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
            N
        ]
    });
});
t.Z = p;
