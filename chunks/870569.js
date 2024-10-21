n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    s = n(686546),
    o = n(904297);
function c(e) {
    let { tooltipText: t, children: n, onContextMenu: l, onClick: c, disabled: u, icon: d, iconForeground: h, innerClassName: p, tooltipClassName: f, onMouseEnter: _, onMouseLeave: m, 'aria-label': g, 'aria-checked': C, role: I, tooltipColor: E, tooltipForceOpen: N } = e,
        x =
            'function' == typeof d
                ? (0, i.jsx)(d, {
                      width: 20,
                      height: 20,
                      size: 'custom',
                      colorClass: null != h ? h : '',
                      color: 'currentColor'
                  })
                : d;
    return (0, i.jsx)(a.Tooltip, {
        tooltipClassName: f,
        text: t,
        'aria-label': g,
        color: E,
        forceOpen: N,
        children: (e) => {
            let { onClick: t, onMouseEnter: d, onMouseLeave: h, ...f } = e;
            return (0, i.jsxs)(a.Button, {
                ...f,
                look: a.Button.Looks.BLANK,
                size: a.Button.Sizes.NONE,
                disabled: u,
                innerClassName: p,
                wrapperClassName: o.button,
                className: r()(o.button, {
                    [o.disabled]: u,
                    [o.enabled]: !u
                }),
                onClick: (e) => {
                    null != t && t(), null != c && c(e);
                },
                onMouseEnter: () => {
                    null == d || d(), null == _ || _();
                },
                onMouseLeave: () => {
                    null == h || h(), null == m || m();
                },
                onContextMenu: l,
                role: I,
                'aria-checked': C,
                children: [
                    null != n
                        ? (0, i.jsx)(s.ZP, {
                              width: 20,
                              height: 20,
                              mask: s.ZP.Masks.PANEL_BUTTON,
                              children: x
                          })
                        : x,
                    n
                ]
            });
        }
    });
}
