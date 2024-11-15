n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(481060),
    s = n(388032),
    o = n(136680);
function c(e) {
    let { className: t, iconContainerClassName: n, icon: l, color: c, title: d, description: u, userCount: h, onClick: p, highlight: m } = e;
    return (0, i.jsxs)(r.Clickable, {
        className: a()(o.container, t, null != m && { [o.pulse]: m }),
        onClick: p,
        children: [
            (0, i.jsx)('div', {
                style: { backgroundColor: c },
                className: a()(o.icon, n),
                children: l
            }),
            (0, i.jsxs)('div', {
                className: o.textContainer,
                children: [
                    (0, i.jsx)(r.Heading, {
                        variant: 'heading-md/semibold',
                        children: d
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-xs/normal',
                        color: 'header-secondary',
                        className: o.inline,
                        children: u
                    }),
                    null != h && h > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(r.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      className: o.dot,
                                      children: '\u2022'
                                  }),
                                  (0, i.jsx)(r.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      className: o.inline,
                                      children: s.intl.format(s.t.NywdIi, { count: h })
                                  })
                              ]
                          })
                        : null
                ]
            }),
            (0, i.jsx)(r.ChevronSmallRightIcon, {
                size: 'xs',
                color: 'currentColor',
                className: o.caret
            })
        ]
    });
}
