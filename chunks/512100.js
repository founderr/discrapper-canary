t.d(n, {
    u: function () {
        return u;
    }
});
var l = t(735250);
t(470079);
var i = t(409794),
    a = t(777207),
    r = t(541822),
    o = t(330711),
    s = t(770561);
function u(e) {
    let { benefits: n, description: t, imgSrc: u, title: c, tag: d, FallbackIcon: p } = e,
        f = null != u ? { '--custom-background-url': 'url('.concat(u.toString(), ')') } : void 0;
    return (0, l.jsx)('div', {
        className: s.container,
        children: (0, l.jsx)(r.Z, {
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
                                    null != u
                                        ? (0, l.jsx)('img', {
                                              src: u.toString(),
                                              alt: ''
                                          })
                                        : (0, l.jsx)(p, {
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
                                        children: c
                                    }),
                                    null != t &&
                                        '' !== t &&
                                        (0, l.jsx)(a.x, {
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
                                        (0, l.jsx)(a.x, {
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
