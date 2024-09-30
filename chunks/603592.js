n(47120);
var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(91192),
    o = n(481060),
    c = n(276952),
    u = n(682662),
    d = n(662146),
    h = n(322459);
let p = l.forwardRef(function (e, t) {
    let { id: n, onClick: r, onContextMenu: p, icon: f, selected: _, tooltip: m, upperBadge: g, lowerBadge: C, lowerBadgeSize: I, showPill: E = !0, className: N, 'aria-label': S, children: x, onMouseEnter: v, onMouseLeave: Z, onMouseDown: T } = e,
        b = (0, s.Ie)(n),
        [A, M] = l.useState(!1),
        R = 'string' == typeof m && null == S ? m : S;
    return (0, i.jsxs)(u.H, {
        children: [
            E
                ? (0, i.jsx)('div', {
                      className: h.pill,
                      children: (0, i.jsx)(c.Z, {
                          hovered: A,
                          selected: _
                      })
                  })
                : null,
            (0, i.jsx)(d.Z, {
                text: m,
                selected: _,
                children: (0, i.jsx)(o.BlobMask, {
                    className: h.__invalid_circleButtonMask,
                    selected: _ || A,
                    upperBadge: g,
                    lowerBadge: C,
                    lowerBadgeSize: I,
                    children: (0, i.jsx)(o.Clickable, {
                        innerRef: t,
                        onMouseEnter: () => {
                            null == v || v(), M(!0);
                        },
                        onMouseLeave: () => {
                            null == Z || Z(), M(!1);
                        },
                        onMouseDown: T,
                        className: a()(h.circleIconButton, N, { [h.selected]: _ || A }),
                        onClick: r,
                        'aria-label': R,
                        onContextMenu: p,
                        focusProps: { enabled: !1 },
                        ...b,
                        children:
                            null != f &&
                            (0, i.jsx)(f, {
                                className: h.circleIcon,
                                color: 'currentColor'
                            })
                    })
                })
            }),
            x
        ]
    });
});
t.Z = p;
