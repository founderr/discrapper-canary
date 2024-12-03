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
    let { icon: t, title: n, titleVariant: i = 'text-md/semibold', description: l, descriptionVariant: u = 'text-xs/medium', iconClassName: c, color: d, buttonText: f, buttonColor: _ = s.Button.Colors.PRIMARY, buttonSize: p = s.Button.Sizes.SMALL, buttonLook: h = s.Button.Looks.FILLED, buttonDisabled: m, onButtonPress: g, listType: E = 'icon', index: v } = e,
        I =
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
            'numbered' === E && null != v
                ? (0, r.jsx)(s.Heading, {
                      variant: 'heading-md/semibold',
                      color: 'text-brand',
                      className: o.number,
                      children: v + 1
                  })
                : null != t &&
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
            null != I && I
        ]
    });
}
