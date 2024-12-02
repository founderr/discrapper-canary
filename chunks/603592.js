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
    h = n(187643);
let p = l.forwardRef(function (e, t) {
    let { id: n, onClick: r, onContextMenu: p, icon: m, selected: f, tooltip: g, upperBadge: C, lowerBadge: _, lowerBadgeSize: v, showPill: x = !0, className: I, 'aria-label': b, children: E, onMouseEnter: S, onMouseLeave: Z, onMouseDown: N } = e,
        y = (0, o.Ie)(n),
        [T, A] = l.useState(!1),
        j = 'string' == typeof g && null == b ? g : b;
    return (0, i.jsxs)(u.H, {
        children: [
            x
                ? (0, i.jsx)('div', {
                      className: h.pill,
                      children: (0, i.jsx)(c.Z, {
                          hovered: T,
                          selected: f
                      })
                  })
                : null,
            (0, i.jsx)(d.Z, {
                text: g,
                selected: f,
                children: (0, i.jsx)(s.BlobMask, {
                    className: h.__invalid_circleButtonMask,
                    selected: f || T,
                    upperBadge: C,
                    lowerBadge: _,
                    lowerBadgeSize: v,
                    children: (0, i.jsx)(s.Clickable, {
                        innerRef: t,
                        onMouseEnter: () => {
                            null == S || S(), A(!0);
                        },
                        onMouseLeave: () => {
                            null == Z || Z(), A(!1);
                        },
                        onMouseDown: N,
                        className: a()(h.circleIconButton, I, { [h.selected]: f || T }),
                        onClick: r,
                        'aria-label': j,
                        onContextMenu: p,
                        focusProps: { enabled: !1 },
                        ...y,
                        children:
                            null != m &&
                            (0, i.jsx)(m, {
                                className: h.circleIcon,
                                color: 'currentColor'
                            })
                    })
                })
            }),
            E
        ]
    });
});
t.Z = p;
