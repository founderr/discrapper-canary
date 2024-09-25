n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(9636);
function l(e) {
    let { icon: t, title: n, titleVariant: i = 'text-md/semibold', description: l, descriptionVariant: u = 'text-xs/medium', iconClassName: c, color: d, buttonText: _, buttonColor: E = o.Button.Colors.PRIMARY, buttonSize: f = o.Button.Sizes.SMALL, buttonDisabled: h, onButtonPress: p } = e,
        m =
            null != _
                ? (0, r.jsx)(o.Button, {
                      className: s.button,
                      size: f,
                      color: E,
                      disabled: h,
                      'aria-label': _,
                      onClick: p,
                      children: _
                  })
                : void 0;
    return (0, r.jsxs)('div', {
        className: s.row,
        children: [
            null != t &&
                (0, r.jsx)('div', {
                    className: s.iconContainer,
                    children: (0, r.jsx)(t, {
                        color: null != d ? d : 'currentColor',
                        className: a()(s.icon, c)
                    })
                }),
            (0, r.jsxs)('div', {
                className: s.textContainer,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: i,
                        color: 'header-primary',
                        children: n
                    }),
                    null != l &&
                        (0, r.jsx)(o.Text, {
                            variant: u,
                            color: 'header-secondary',
                            children: l
                        })
                ]
            }),
            null != m && m
        ]
    });
}
