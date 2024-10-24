t.d(e, {
    u: function () {
        return u;
    }
});
var l = t(200651);
t(192379);
var i = t(409794),
    r = t(777207),
    s = t(541822),
    a = t(330711),
    o = t(770561);
function u(n) {
    let { benefits: e, description: t, imgSrc: u, title: c, tag: d, FallbackIcon: f } = n,
        p = null != u ? { '--custom-background-url': 'url('.concat(u.toString(), ')') } : void 0;
    return (0, l.jsx)('div', {
        className: o.container,
        children: (0, l.jsx)(s.Z, {
            className: o.scroller,
            children: (0, l.jsxs)('div', {
                className: o.scrollContent,
                children: [
                    (0, l.jsxs)('div', {
                        className: o.header,
                        children: [
                            (0, l.jsx)('div', {
                                className: o.headerBackground,
                                style: p
                            }),
                            (0, l.jsx)('div', {
                                className: o.headerImage,
                                children:
                                    null != u
                                        ? (0, l.jsx)('img', {
                                              src: u.toString(),
                                              alt: ''
                                          })
                                        : (0, l.jsx)(f, {
                                              size: 'custom',
                                              color: 'var(--text-muted)',
                                              height: 96,
                                              width: 96
                                          })
                            })
                        ]
                    }),
                    (0, l.jsxs)('div', {
                        className: o.content,
                        children: [
                            (0, l.jsxs)('div', {
                                className: o.details,
                                children: [
                                    null != d && (0, l.jsx)('div', { children: d }),
                                    (0, l.jsx)(i.X, {
                                        color: 'header-primary',
                                        variant: 'heading-xl/semibold',
                                        children: c
                                    }),
                                    null != t &&
                                        '' !== t &&
                                        (0, l.jsx)(r.x, {
                                            color: 'text-normal',
                                            variant: 'text-md/normal',
                                            className: o.description,
                                            children: t
                                        })
                                ]
                            }),
                            null != e &&
                                (0, l.jsxs)('div', {
                                    className: o.benefits,
                                    children: [
                                        (0, l.jsx)(r.x, {
                                            color: 'header-secondary',
                                            variant: 'eyebrow',
                                            children: a.Z.Messages.STOREFRONT_BENEFITS_TITLE
                                        }),
                                        e
                                    ]
                                })
                        ]
                    })
                ]
            })
        })
    });
}
