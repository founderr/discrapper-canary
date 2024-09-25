n.d(t, {
    u: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(777207),
    a = n(541822),
    o = n(330711),
    s = n(770561);
let l = 96;
function u(e) {
    let { benefits: t, description: n, imgSrc: u, title: c, tag: d, FallbackIcon: _ } = e,
        E = null != u ? { '--custom-background-url': 'url('.concat(u.toString(), ')') } : void 0,
        f = null != n && '' !== n,
        h = f || null != t;
    return (0, r.jsxs)('div', {
        className: s.container,
        children: [
            (0, r.jsxs)('div', {
                className: s.header,
                children: [
                    (0, r.jsx)('div', {
                        className: s.headerBackground,
                        style: E
                    }),
                    (0, r.jsx)('div', {
                        className: s.headerTop,
                        children: (0, r.jsx)('div', { children: d })
                    }),
                    (0, r.jsx)('div', {
                        className: s.headerImage,
                        children:
                            null != u
                                ? (0, r.jsx)('img', {
                                      src: u.toString(),
                                      alt: ''
                                  })
                                : (0, r.jsx)(_, {
                                      size: 'custom',
                                      color: 'var(--text-muted)',
                                      height: l,
                                      width: l
                                  })
                    })
                ]
            }),
            (0, r.jsxs)(a.Z, {
                className: s.scroll,
                children: [
                    (0, r.jsx)('br', {}),
                    (0, r.jsxs)('div', {
                        className: s.scrollContent,
                        children: [
                            (0, r.jsx)(i.x, {
                                color: 'header-primary',
                                tag: 'div',
                                variant: 'heading-xl/semibold',
                                children: c
                            }),
                            h &&
                                (0, r.jsxs)('div', {
                                    className: s.details,
                                    children: [
                                        (0, r.jsx)(i.x, {
                                            color: 'header-primary',
                                            tag: 'div',
                                            variant: 'heading-lg/semibold',
                                            children: o.Z.Messages.Storefront.PRODUCT_DETAILS
                                        }),
                                        f &&
                                            (0, r.jsx)(i.x, {
                                                color: 'text-muted',
                                                variant: 'text-md/normal',
                                                className: s.description,
                                                children: n
                                            }),
                                        null != t &&
                                            (0, r.jsxs)('div', {
                                                className: s.benefits,
                                                children: [
                                                    (0, r.jsx)(i.x, {
                                                        color: 'header-secondary',
                                                        variant: 'eyebrow',
                                                        children: o.Z.Messages.Storefront.BENEFITS_TITLE
                                                    }),
                                                    t
                                                ]
                                            })
                                    ]
                                })
                        ]
                    })
                ]
            })
        ]
    });
}
