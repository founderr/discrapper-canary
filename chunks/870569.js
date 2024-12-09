n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    o = n(481060),
    a = n(686546),
    s = n(32986);
function c(e) {
    let { tooltipText: t, children: n, onContextMenu: l, onClick: c, disabled: u, icon: d, iconForeground: h, innerClassName: p, tooltipClassName: m, onMouseEnter: f, onMouseLeave: g, 'aria-label': C, 'aria-checked': _, role: v, tooltipColor: x, tooltipForceOpen: I, tooltipContentClassName: b } = e,
        E =
            'function' == typeof d
                ? (0, i.jsx)(d, {
                      width: 20,
                      height: 20,
                      size: 'custom',
                      colorClass: null != h ? h : '',
                      color: 'currentColor'
                  })
                : d;
    return (0, i.jsx)(o.Tooltip, {
        tooltipClassName: m,
        text: t,
        'aria-label': C,
        color: x,
        tooltipContentClassName: b,
        forceOpen: I,
        children: (e) => {
            let { onClick: t, onMouseEnter: d, onMouseLeave: h, ...m } = e;
            return (0, i.jsxs)(o.Button, {
                ...m,
                look: o.Button.Looks.BLANK,
                size: o.Button.Sizes.NONE,
                disabled: u,
                innerClassName: p,
                wrapperClassName: s.button,
                className: r()(s.button, {
                    [s.disabled]: u,
                    [s.enabled]: !u
                }),
                onClick: (e) => {
                    null != t && t(), null != c && c(e);
                },
                onMouseEnter: () => {
                    null == d || d(), null == f || f();
                },
                onMouseLeave: () => {
                    null == h || h(), null == g || g();
                },
                onContextMenu: l,
                role: v,
                'aria-checked': _,
                children: [
                    null != n
                        ? (0, i.jsx)(a.ZP, {
                              width: 20,
                              height: 20,
                              mask: a.ZP.Masks.PANEL_BUTTON,
                              children: E
                          })
                        : E,
                    n
                ]
            });
        }
    });
}
