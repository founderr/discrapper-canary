n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var o = n(120356),
    l = n.n(o),
    r = n(481060),
    s = n(809357),
    a = n(163752);
function u(e) {
    let { onClick: t, keybind: n, className: o, IconComponent: u } = e,
        c = (0, s.o)();
    return (0, i.jsxs)('div', {
        className: l()(a.buttonContainer, o),
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
            null != n && c
                ? (0, i.jsx)(r.Text, {
                      className: l()(a.keybind),
                      'aria-hidden': !0,
                      variant: 'text-xxs/bold',
                      color: 'interactive-normal',
                      children: n
                  })
                : null
        ]
    });
}
