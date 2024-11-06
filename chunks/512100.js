n.d(t, {
    u: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var a = n(409794),
    r = n(777207),
    l = n(541822),
    o = n(330711),
    s = n(770561);
function c(e) {
    let { benefits: t, description: n, imgSrc: c, title: d, tag: u, FallbackIcon: p } = e,
        m = null != c ? { '--custom-background-url': 'url('.concat(c.toString(), ')') } : void 0;
    return (0, i.jsx)('div', {
        className: s.container,
        children: (0, i.jsx)(l.Z, {
            className: s.scroller,
            children: (0, i.jsxs)('div', {
                className: s.scrollContent,
                children: [
                    (0, i.jsxs)('div', {
                        className: s.header,
                        children: [
                            (0, i.jsx)('div', {
                                className: s.headerBackground,
                                style: m
                            }),
                            (0, i.jsx)('div', {
                                className: s.headerImage,
                                children:
                                    null != c
                                        ? (0, i.jsx)('img', {
                                              src: c.toString(),
                                              alt: ''
                                          })
                                        : (0, i.jsx)(p, {
                                              size: 'custom',
                                              color: 'var(--text-muted)',
                                              height: 96,
                                              width: 96
                                          })
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: s.content,
                        children: [
                            (0, i.jsxs)('div', {
                                className: s.details,
                                children: [
                                    null != u && (0, i.jsx)('div', { children: u }),
                                    (0, i.jsx)(a.X, {
                                        color: 'header-primary',
                                        variant: 'heading-xl/semibold',
                                        children: d
                                    }),
                                    null != n &&
                                        '' !== n &&
                                        (0, i.jsx)(r.x, {
                                            color: 'text-normal',
                                            variant: 'text-md/normal',
                                            className: s.description,
                                            children: n
                                        })
                                ]
                            }),
                            null != t &&
                                (0, i.jsxs)('div', {
                                    className: s.benefits,
                                    children: [
                                        (0, i.jsx)(r.x, {
                                            color: 'header-secondary',
                                            variant: 'eyebrow',
                                            children: o.Z.Messages.STOREFRONT_BENEFITS_TITLE
                                        }),
                                        t
                                    ]
                                })
                        ]
                    })
                ]
            })
        })
    });
}
