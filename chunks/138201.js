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
    o = n(829820);
function l(e) {
    let { icon: t, title: n, titleVariant: i = 'text-md/semibold', description: l, descriptionVariant: u = 'text-xs/medium', iconClassName: c, color: d, buttonText: f, buttonColor: _ = s.Button.Colors.PRIMARY, buttonSize: p = s.Button.Sizes.SMALL, buttonLook: h = s.Button.Looks.FILLED, buttonDisabled: m, onButtonPress: g } = e,
        E =
            null != f
                ? (0, r.jsx)(s.Button, {
                      className: o.button,
                      size: p,
                      color: _,
                      look: h,
                      disabled: m,
                      'aria-label': f,
                      onClick: g,
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
            null != E && E
        ]
    });
}
