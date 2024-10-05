n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(735250);
n(470079);
var s = n(120356),
    a = n.n(s),
    l = n(481060),
    r = n(689938),
    o = n(702414);
function c(e) {
    let { className: t, iconContainerClassName: n, icon: s, color: c, title: u, description: d, userCount: h, onClick: p, highlight: m } = e;
    return (0, i.jsxs)(l.Clickable, {
        className: a()(o.container, t, null != m && { [o.pulse]: m }),
        onClick: p,
        children: [
            (0, i.jsx)('div', {
                style: { backgroundColor: c },
                className: a()(o.icon, n),
                children: s
            }),
            (0, i.jsxs)('div', {
                className: o.textContainer,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: 'heading-md/semibold',
                        children: u
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-xs/normal',
                        color: 'header-secondary',
                        className: o.inline,
                        children: d
                    }),
                    null != h && h > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(l.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      className: o.dot,
                                      children: '\u2022'
                                  }),
                                  (0, i.jsx)(l.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      className: o.inline,
                                      children: r.Z.Messages.GUILD_EVENT_INTERESTED.format({ count: h })
                                  })
                              ]
                          })
                        : null
                ]
            }),
            (0, i.jsx)(l.ChevronSmallRightIcon, {
                size: 'xs',
                color: 'currentColor',
                className: o.caret
            })
        ]
    });
}
