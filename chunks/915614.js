n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    o = n(481060),
    a = n(78561);
function s(e) {
    let { onClick: t, keybind: n, className: l, IconComponent: s } = e;
    return (0, i.jsxs)('div', {
        className: r()(a.buttonContainer, l),
        children: [
            (0, i.jsx)(o.Clickable, {
                className: a.button,
                onClick: t,
                'aria-hidden': !0,
                children: (0, i.jsx)(s, {
                    size: 'md',
                    color: 'currentColor',
                    'aria-hidden': !0
                })
            }),
            null != n
                ? (0, i.jsx)(o.Text, {
                      className: r()(a.keybind),
                      'aria-hidden': !0,
                      variant: 'text-xxs/bold',
                      color: 'interactive-normal',
                      children: n
                  })
                : null
        ]
    });
}
