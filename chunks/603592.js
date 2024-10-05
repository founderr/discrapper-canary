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
    let { id: n, onClick: r, onContextMenu: p, icon: f, selected: _, tooltip: m, upperBadge: g, lowerBadge: C, lowerBadgeSize: I, showPill: E = !0, className: N, 'aria-label': S, children: x, onMouseEnter: v, onMouseLeave: T, onMouseDown: Z } = e,
        A = (0, s.Ie)(n),
        [b, R] = l.useState(!1),
        M = 'string' == typeof m && null == S ? m : S;
    return (0, i.jsxs)(u.H, {
        children: [
            E
                ? (0, i.jsx)('div', {
                      className: h.pill,
                      children: (0, i.jsx)(c.Z, {
                          hovered: b,
                          selected: _
                      })
                  })
                : null,
            (0, i.jsx)(d.Z, {
                text: m,
                selected: _,
                children: (0, i.jsx)(o.BlobMask, {
                    className: h.__invalid_circleButtonMask,
                    selected: _ || b,
                    upperBadge: g,
                    lowerBadge: C,
                    lowerBadgeSize: I,
                    children: (0, i.jsx)(o.Clickable, {
                        innerRef: t,
                        onMouseEnter: () => {
                            null == v || v(), R(!0);
                        },
                        onMouseLeave: () => {
                            null == T || T(), R(!1);
                        },
                        onMouseDown: Z,
                        className: a()(h.circleIconButton, N, { [h.selected]: _ || b }),
                        onClick: r,
                        'aria-label': M,
                        onContextMenu: p,
                        focusProps: { enabled: !1 },
                        ...A,
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
