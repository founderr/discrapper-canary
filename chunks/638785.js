n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    r = n(481060),
    o = n(566898),
    c = n(785717),
    u = n(46560);
function d(e) {
    let { section: t, header: n, items: a, minItems: d = 0, isLoading: h, listClassName: m } = e,
        { trackUserProfileAction: p } = (0, c.KZ)(),
        _ = s.useId(),
        [f, E] = s.useState(!1),
        g = f ? r.ChevronSmallDownIcon : r.ChevronSmallRightIcon;
    return (0, i.jsxs)('section', {
        className: u.section,
        children: [
            h
                ? (0, i.jsxs)('div', {
                      className: l()(u.header, u.loading),
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
                : a.length <= d
                  ? (0, i.jsxs)(r.Heading, {
                        variant: 'text-sm/medium',
                        color: 'text-normal',
                        className: u.header,
                        children: [n, ' \u2014 ', a.length]
                    })
                  : (0, i.jsxs)(r.Clickable, {
                        className: l()(u.header, u.clickable),
                        'aria-controls': _,
                        'aria-expanded': f,
                        onClick: () => {
                            E(!f),
                                !f &&
                                    p({
                                        action: 'PRESS_SECTION',
                                        section: t
                                    });
                        },
                        children: [
                            (0, i.jsxs)(r.Heading, {
                                variant: 'text-sm/medium',
                                color: 'text-normal',
                                children: [n, ' \u2014 ', a.length]
                            }),
                            (0, i.jsx)(g, { size: 'md' })
                        ]
                    }),
            a.length > 0 &&
                (0, i.jsx)('ul', {
                    id: _,
                    hidden: !f && d <= 0,
                    className: l()(u.list, m),
                    children: f || a.length <= d ? a : a.slice(0, d)
                })
        ]
    });
}
