n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    o = n.n(l),
    r = n(481060),
    s = n(809357),
    a = n(163752);
function u(e) {
    let { onClick: t, keybind: n, className: l, IconComponent: u } = e,
        d = (0, s.o)();
    return (0, i.jsxs)('div', {
        className: o()(a.buttonContainer, l),
        children: [
            (0, i.jsx)(r.Clickable, {
                className: a.button,
                onClick: t,
                'aria-hidden': !0,
                children: (0, i.jsx)(u, {
                    size: 'md',
                    color: 'currentColor',
                    'aria-hidden': !0
                })
            }),
            null != n && d
                ? (0, i.jsx)(r.Text, {
                      className: o()(a.keybind),
                      'aria-hidden': !0,
                      variant: 'text-xxs/bold',
                      color: 'interactive-normal',
                      children: n
                  })
                : null
        ]
    });
}
