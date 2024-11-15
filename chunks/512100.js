t.d(n, {
    u: function () {
        return c;
    }
});
var l = t(200651);
t(192379);
var i = t(409794),
    r = t(777207),
    a = t(541822),
    o = t(330711),
    s = t(476818);
function c(e) {
    let { benefits: n, description: t, imgSrc: c, title: u, tag: d, FallbackIcon: m } = e,
        f = null != c ? { '--custom-background-url': 'url('.concat(c.toString(), ')') } : void 0;
    return (0, l.jsx)('div', {
        className: s.container,
        children: (0, l.jsx)(a.Z, {
            className: s.scroller,
            children: (0, l.jsxs)('div', {
                className: s.scrollContent,
                children: [
                    (0, l.jsxs)('div', {
                        className: s.header,
                        children: [
                            (0, l.jsx)('div', {
                                className: s.headerBackground,
                                style: f
                            }),
                            (0, l.jsx)('div', {
                                className: s.headerImage,
                                children:
                                    null != c
                                        ? (0, l.jsx)('img', {
                                              src: c.toString(),
                                              alt: ''
                                          })
                                        : (0, l.jsx)(m, {
                                              size: 'custom',
                                              color: 'var(--text-muted)',
                                              height: 96,
                                              width: 96
                                          })
                            })
                        ]
                    }),
                    (0, l.jsxs)('div', {
                        className: s.content,
                        children: [
                            (0, l.jsxs)('div', {
                                className: s.details,
                                children: [
                                    null != d && (0, l.jsx)('div', { children: d }),
                                    (0, l.jsx)(i.X, {
                                        color: 'header-primary',
                                        variant: 'heading-xl/semibold',
                                        children: u
                                    }),
                                    null != t &&
                                        '' !== t &&
                                        (0, l.jsx)(r.x, {
                                            color: 'text-normal',
                                            variant: 'text-md/normal',
                                            className: s.description,
                                            children: t
                                        })
                                ]
                            }),
                            null != n &&
                                (0, l.jsxs)('div', {
                                    className: s.benefits,
                                    children: [
                                        (0, l.jsx)(r.x, {
                                            color: 'header-secondary',
                                            variant: 'eyebrow',
                                            children: o.Z.Messages.STOREFRONT_BENEFITS_TITLE
                                        }),
                                        n
                                    ]
                                })
                        ]
                    })
                ]
            })
        })
    });
}
