n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    o = n(481060),
    a = n(96685);
function s(e) {
    let { onClick: t, keybind: n, className: r, IconComponent: s } = e;
    return (0, i.jsxs)('div', {
        className: l()(a.buttonContainer, r),
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
