t.d(n, {
    u: function () {
        return a;
    }
});
var i = t(735250);
t(470079);
var l = t(777207),
    r = t(541822),
    s = t(330711),
    o = t(770561);
function a(e) {
    let { benefits: n, description: t, imgSrc: a, title: u, tag: c, FallbackIcon: d } = e,
        f = null != a ? { '--custom-background-url': 'url('.concat(a.toString(), ')') } : void 0,
        p = null != t && '' !== t,
        m = p || null != n;
    return (0, i.jsxs)('div', {
        className: o.container,
        children: [
            (0, i.jsxs)('div', {
                className: o.header,
                children: [
                    (0, i.jsx)('div', {
                        className: o.headerBackground,
                        style: f
                    }),
                    (0, i.jsx)('div', {
                        className: o.headerTop,
                        children: (0, i.jsx)('div', { children: c })
                    }),
                    (0, i.jsx)('div', {
                        className: o.headerImage,
                        children:
                            null != a
                                ? (0, i.jsx)('img', {
                                      src: a.toString(),
                                      alt: ''
                                  })
                                : (0, i.jsx)(d, {
                                      size: 'custom',
                                      color: 'var(--text-muted)',
                                      height: 96,
                                      width: 96
                                  })
                    })
                ]
            }),
            (0, i.jsxs)(r.Z, {
                className: o.scroll,
                children: [
                    (0, i.jsx)('br', {}),
                    (0, i.jsxs)('div', {
                        className: o.scrollContent,
                        children: [
                            (0, i.jsx)(l.x, {
                                color: 'header-primary',
                                tag: 'div',
                                variant: 'heading-xl/semibold',
                                children: u
                            }),
                            m &&
                                (0, i.jsxs)('div', {
                                    className: o.details,
                                    children: [
                                        (0, i.jsx)(l.x, {
                                            color: 'header-primary',
                                            tag: 'div',
                                            variant: 'heading-lg/semibold',
                                            children: s.Z.Messages.Storefront.PRODUCT_DETAILS
                                        }),
                                        p &&
                                            (0, i.jsx)(l.x, {
                                                color: 'text-muted',
                                                variant: 'text-md/normal',
                                                className: o.description,
                                                children: t
                                            }),
                                        null != n &&
                                            (0, i.jsxs)('div', {
                                                className: o.benefits,
                                                children: [
                                                    (0, i.jsx)(l.x, {
                                                        color: 'header-secondary',
                                                        variant: 'eyebrow',
                                                        children: s.Z.Messages.Storefront.BENEFITS_TITLE
                                                    }),
                                                    n
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
