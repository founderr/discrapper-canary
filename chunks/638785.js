n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(481060),
    o = n(566898),
    c = n(785717),
    u = n(46560);
function d(e) {
    let { section: t, header: n, items: r, minItems: d = 0, isLoading: h, listClassName: m } = e,
        { trackUserProfileAction: p } = (0, c.KZ)(),
        f = l.useId(),
        [g, C] = l.useState(!1),
        x = g ? a.ChevronSmallDownIcon : a.ChevronSmallRightIcon;
    return (0, i.jsxs)('section', {
        className: u.section,
        children: [
            h
                ? (0, i.jsxs)('div', {
                      className: s()(u.header, u.loading),
                      children: [
                          (0, i.jsx)(o.ZT, {
                              width: 135,
                              opacity: 0.08
                          }),
                          (0, i.jsx)(o.ZT, {
                              width: 34,
                              opacity: 0.08
                          })
                      ]
                  })
                : r.length <= d
                  ? (0, i.jsxs)(a.Heading, {
                        variant: 'text-sm/medium',
                        color: 'text-normal',
                        className: u.header,
                        children: [n, ' \u2014 ', r.length]
                    })
                  : (0, i.jsxs)(a.Clickable, {
                        className: s()(u.header, u.clickable),
                        'aria-controls': f,
                        'aria-expanded': g,
                        onClick: () => {
                            C(!g),
                                !g &&
                                    p({
                                        action: 'PRESS_SECTION',
                                        section: t
                                    });
                        },
                        children: [
                            (0, i.jsxs)(a.Heading, {
                                variant: 'text-sm/medium',
                                color: 'text-normal',
                                children: [n, ' \u2014 ', r.length]
                            }),
                            (0, i.jsx)(x, { size: 'md' })
                        ]
                    }),
            r.length > 0 &&
                (0, i.jsx)('ul', {
                    id: f,
                    hidden: !g && d <= 0,
                    className: s()(u.list, m),
                    children: g || r.length <= d ? r : r.slice(0, d)
                })
        ]
    });
}
