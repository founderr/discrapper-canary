n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(91192),
    s = n(481060),
    c = n(540059),
    u = n(276952),
    d = n(682662),
    h = n(662146),
    p = n(187643);
let m = l.forwardRef(function (e, t) {
    let { id: n, onClick: r, onContextMenu: m, icon: f, selected: g, tooltip: C, upperBadge: _, lowerBadge: v, lowerBadgeSize: x, showPill: I = !0, className: b, 'aria-label': E, children: S, onMouseEnter: Z, onMouseLeave: N, onMouseDown: y } = e,
        T = (0, c.Q3)('ButtonListItem'),
        j = (0, o.Ie)(n),
        [A, P] = l.useState(!1),
        R = 'string' == typeof C && null == E ? C : E;
    return (0, i.jsxs)(d.H, {
        children: [
            I
                ? (0, i.jsx)('div', {
                      className: p.pill,
                      children: (0, i.jsx)(u.Z, {
                          hovered: A,
                          selected: g
                      })
                  })
                : null,
            (0, i.jsx)(h.Z, {
                text: C,
                selected: g,
                children: (0, i.jsx)(s.BlobMask, {
                    selected: !!T || g || A,
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
                        className: a()(p.circleIconButton, b, { [p.selected]: g || A }),
                        onClick: r,
                        'aria-label': R,
                        onContextMenu: m,
                        focusProps: { enabled: !1 },
                        ...j,
                        children:
                            null != f &&
                            (0, i.jsx)(f, {
                                className: p.circleIcon,
                                color: 'currentColor'
                            })
                    })
                })
            }),
            S
        ]
    });
});
t.Z = m;
