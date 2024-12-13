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
    let { tooltipText: t, children: n, onContextMenu: l, onClick: c, disabled: d, icon: u, iconForeground: h, innerClassName: p, tooltipClassName: m, onMouseEnter: f, onMouseLeave: g, 'aria-label': C, 'aria-checked': v, role: _, tooltipColor: x, tooltipForceOpen: I, tooltipContentClassName: b } = e,
        E =
            'function' == typeof u
                ? (0, i.jsx)(u, {
                      width: 20,
                      height: 20,
                      size: 'custom',
                      colorClass: null != h ? h : '',
                      color: 'currentColor'
                  })
                : u;
    return (0, i.jsx)(o.Tooltip, {
        tooltipClassName: m,
        text: t,
        'aria-label': C,
        color: x,
        tooltipContentClassName: b,
        forceOpen: I,
        children: (e) => {
            let { onClick: t, onMouseEnter: u, onMouseLeave: h, ...m } = e;
            return (0, i.jsxs)(o.Button, {
                ...m,
                look: o.Button.Looks.BLANK,
                size: o.Button.Sizes.NONE,
                disabled: d,
                innerClassName: p,
                wrapperClassName: s.button,
                className: r()(s.button, {
                    [s.disabled]: d,
                    [s.enabled]: !d
                }),
                onClick: (e) => {
                    null != t && t(), null != c && c(e);
                },
                onMouseEnter: () => {
                    null == u || u(), null == f || f();
                },
                onMouseLeave: () => {
                    null == h || h(), null == g || g();
                },
                onContextMenu: l,
                role: _,
                'aria-checked': v,
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
