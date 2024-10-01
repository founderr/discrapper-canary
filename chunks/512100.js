n.d(t, {
    u: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(409794),
    a = n(777207),
    o = n(541822),
    s = n(330711),
    l = n(770561);
let u = 96;
function c(e) {
    let { benefits: t, description: n, imgSrc: c, title: d, tag: _, FallbackIcon: E } = e,
        f = null != c ? { '--custom-background-url': 'url('.concat(c.toString(), ')') } : void 0,
        h = null != n && '' !== n,
        p = h || null != t;
    return (0, r.jsx)('div', {
        className: l.container,
        children: (0, r.jsx)(o.Z, {
            className: l.scroller,
            children: (0, r.jsxs)('div', {
                className: l.scrollContent,
                children: [
                    (0, r.jsxs)('div', {
                        className: l.header,
                        children: [
                            (0, r.jsx)('div', {
                                className: l.headerBackground,
                                style: f
                            }),
                            (0, r.jsx)('div', {
                                className: l.headerImage,
                                children:
                                    null != c
                                        ? (0, r.jsx)('img', {
                                              src: c.toString(),
                                              alt: ''
                                          })
                                        : (0, r.jsx)(E, {
                                              size: 'custom',
                                              color: 'var(--text-muted)',
                                              height: u,
                                              width: u
                                          })
                            })
                        ]
                    }),
                    (0, r.jsx)('div', { children: _ }),
                    (0, r.jsx)(i.X, {
                        color: 'header-primary',
                        variant: 'heading-xl/semibold',
                        children: d
                    }),
                    h &&
                        (0, r.jsx)(a.x, {
                            color: 'text-normal',
                            variant: 'text-md/normal',
                            className: l.description,
                            children: n
                        }),
                    p &&
                        (0, r.jsx)('div', {
                            className: l.details,
                            children:
                                null != t &&
                                (0, r.jsxs)('div', {
                                    className: l.benefits,
                                    children: [
                                        (0, r.jsx)(a.x, {
                                            color: 'header-secondary',
                                            variant: 'eyebrow',
                                            children: s.Z.Messages.Storefront.BENEFITS_TITLE
                                        }),
                                        t
                                    ]
                                })
                        })
                ]
            })
        })
    });
}
