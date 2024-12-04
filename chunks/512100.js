t.d(n, {
    u: function () {
        return c;
    }
});
var o = t(200651);
t(192379);
var l = t(409794),
    i = t(777207),
    r = t(541822),
    s = t(330711),
    a = t(189090);
function c(e) {
    let { benefits: n, description: t, imgSrc: c, title: d, tag: u, FallbackIcon: m } = e,
        x = null != c ? { '--custom-background-url': 'url('.concat(c.toString(), ')') } : void 0;
    return (0, o.jsx)('div', {
        className: a.container,
        children: (0, o.jsx)(r.Z, {
            className: a.scroller,
            children: (0, o.jsxs)('div', {
                className: a.scrollContent,
                children: [
                    (0, o.jsxs)('div', {
                        className: a.header,
                        children: [
                            (0, o.jsx)('div', {
                                className: a.headerBackground,
                                style: x
                            }),
                            (0, o.jsx)('div', {
                                className: a.headerImage,
                                children:
                                    null != c
                                        ? (0, o.jsx)('img', {
                                              src: c.toString(),
                                              alt: ''
                                          })
                                        : (0, o.jsx)(m, {
                                              size: 'custom',
                                              color: 'var(--text-muted)',
                                              height: 96,
                                              width: 96
                                          })
                            })
                        ]
                    }),
                    (0, o.jsxs)('div', {
                        className: a.content,
                        children: [
                            (0, o.jsxs)('div', {
                                className: a.details,
                                children: [
                                    null != u && (0, o.jsx)('div', { children: u }),
                                    (0, o.jsx)(l.X, {
                                        color: 'header-primary',
                                        variant: 'heading-xl/semibold',
                                        children: d
                                    }),
                                    null != t &&
                                        '' !== t &&
                                        (0, o.jsx)(i.x, {
                                            color: 'text-normal',
                                            variant: 'text-md/normal',
                                            className: a.description,
                                            children: t
                                        })
                                ]
                            }),
                            null != n &&
                                (0, o.jsxs)('div', {
                                    className: a.benefits,
                                    children: [
                                        (0, o.jsx)(i.x, {
                                            color: 'header-secondary',
                                            variant: 'eyebrow',
                                            children: s.Z.Messages.STOREFRONT_BENEFITS_TITLE
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
