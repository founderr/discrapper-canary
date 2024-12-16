t.d(n, {
    u: function () {
        return c;
    }
});
var l = t(200651);
t(192379);
var o = t(409794),
    i = t(777207),
    a = t(541822),
    r = t(330711),
    s = t(189090);
function c(e) {
    let { benefits: n, description: t, imgSrc: c, title: d, tag: u, FallbackIcon: m } = e,
        x = null != c ? { '--custom-background-url': 'url('.concat(c.toString(), ')') } : void 0;
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
                                style: x
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
                                    null != u && (0, l.jsx)('div', { children: u }),
                                    (0, l.jsx)(o.X, {
                                        color: 'header-primary',
                                        variant: 'heading-xl/semibold',
                                        children: d
                                    }),
                                    null != t &&
                                        '' !== t &&
                                        (0, l.jsx)(i.x, {
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
                                        (0, l.jsx)(i.x, {
                                            color: 'header-secondary',
                                            variant: 'eyebrow',
                                            children: r.Z.Messages.STOREFRONT_BENEFITS_TITLE
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
