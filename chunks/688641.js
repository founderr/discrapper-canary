n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    s = n(481060),
    a = n(388032),
    o = n(702414);
function c(e) {
    let { className: t, iconContainerClassName: n, icon: l, color: c, title: u, description: d, userCount: h, onClick: m, highlight: p } = e;
    return (0, i.jsxs)(s.Clickable, {
        className: r()(o.container, t, null != p && { [o.pulse]: p }),
        onClick: m,
        children: [
            (0, i.jsx)('div', {
                style: { backgroundColor: c },
                className: r()(o.icon, n),
                children: l
            }),
            (0, i.jsxs)('div', {
                className: o.textContainer,
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: 'heading-md/semibold',
                        children: u
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        color: 'header-secondary',
                        className: o.inline,
                        children: d
                    }),
                    null != h && h > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(s.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      className: o.dot,
                                      children: '\u2022'
                                  }),
                                  (0, i.jsx)(s.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      className: o.inline,
                                      children: a.intl.format(a.t.NywdIi, { count: h })
                                  })
                              ]
                          })
                        : null
                ]
            }),
            (0, i.jsx)(s.ChevronSmallRightIcon, {
                size: 'xs',
                color: 'currentColor',
                className: o.caret
            })
        ]
    });
}
