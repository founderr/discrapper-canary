n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(91192),
    s = n(481060),
    c = n(540059),
    u = n(276952),
    d = n(682662),
    h = n(662146),
    p = n(187643);
let m = l.forwardRef(function (e, t) {
    let { id: n, onClick: r, onContextMenu: m, icon: f, selected: g, tooltip: C, upperBadge: _, lowerBadge: v, lowerBadgeSize: x, showPill: I = !0, className: b, 'aria-label': S, children: E, onMouseEnter: Z, onMouseLeave: N, onMouseDown: y } = e,
        T = (0, c.Q3)('ButtonListItem'),
        A = (0, a.Ie)(n),
        [j, P] = l.useState(!1),
        R = 'string' == typeof C && null == S ? C : S;
    return (0, i.jsxs)(d.H, {
        children: [
            I
                ? (0, i.jsx)('div', {
                      className: p.pill,
                      children: (0, i.jsx)(u.Z, {
                          hovered: j,
                          selected: g
                      })
                  })
                : null,
            (0, i.jsx)(h.Z, {
                text: C,
                selected: g,
                children: (0, i.jsx)(s.BlobMask, {
                    selected: !!T || g || j,
                    upperBadge: _,
                    lowerBadge: v,
                    lowerBadgeSize: x,
                    children: (0, i.jsx)(s.Clickable, {
                        innerRef: t,
                        onMouseEnter: () => {
                            null == Z || Z(), P(!0);
                        },
                        onMouseLeave: () => {
                            null == N || N(), P(!1);
                        },
                        onMouseDown: y,
                        className: o()(p.circleIconButton, b, { [p.selected]: g || j }),
                        onClick: r,
                        'aria-label': R,
                        onContextMenu: m,
                        focusProps: { enabled: !1 },
                        ...A,
                        children:
                            null != f &&
                            (0, i.jsx)(f, {
                                className: p.circleIcon,
                                color: 'currentColor'
                            })
                    })
                })
            }),
            E
        ]
    });
});
t.Z = m;
