n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(9636);
function l(e) {
    let { icon: t, title: n, titleVariant: i = 'text-md/semibold', description: l, descriptionVariant: u = 'text-xs/medium', iconClassName: c, color: d, buttonText: f, buttonColor: _ = s.Button.Colors.PRIMARY, buttonSize: h = s.Button.Sizes.SMALL, buttonDisabled: p, onButtonPress: m } = e,
        g =
            null != f
                ? (0, r.jsx)(s.Button, {
                      className: o.button,
                      size: h,
                      color: _,
                      disabled: p,
                      'aria-label': f,
                      onClick: m,
                      children: f
                  })
                : void 0;
    return (0, r.jsxs)('div', {
        className: o.row,
        children: [
            null != t &&
                (0, r.jsx)('div', {
                    className: o.iconContainer,
                    children: (0, r.jsx)(t, {
                        color: null != d ? d : 'currentColor',
                        className: a()(o.icon, c)
                    })
                }),
            (0, r.jsxs)('div', {
                className: o.textContainer,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: i,
                        color: 'header-primary',
                        children: n
                    }),
                    null != l &&
                        (0, r.jsx)(s.Text, {
                            variant: u,
                            color: 'header-secondary',
                            children: l
                        })
                ]
            }),
            null != g && g
        ]
    });
}
