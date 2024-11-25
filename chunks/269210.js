e.d(t, {
    Gm: function () {
        return m;
    },
    Uj: function () {
        return v;
    },
    ZI: function () {
        return p;
    }
});
var l = e(200651);
e(192379);
var i = e(557533),
    r = e.n(i),
    u = e(489948),
    a = e(368072),
    o = e(777207),
    s = e(692547),
    c = e(330711),
    d = e(789864),
    f = e(717729);
let p = 5;
function v(n) {
    let { description: t, imgSrc: e, renderPurchaseButton: i, onPurchase: v, title: m, onDetails: h, benefitItems: I, benefitsSummary: S, subtitle: g, maxBenefits: E = p } = n;
    return (0, l.jsx)(u.tE, {
        children: (0, l.jsxs)('div', {
            className: r()(d.container, f.hoverCard),
            tabIndex: 0,
            onClick: () => {
                null != h ? h() : null != v && v();
            },
            children: [
                (0, l.jsx)('div', {
                    className: d.card,
                    children: (0, l.jsxs)('div', {
                        className: d.body,
                        children: [
                            (0, l.jsx)(o.x, {
                                tag: 'div',
                                variant: 'heading-lg/semibold',
                                children: m
                            }),
                            (0, l.jsx)('div', {
                                className: d.image,
                                children:
                                    null != e
                                        ? (0, l.jsx)('img', {
                                              src: e.toString(),
                                              alt: ''
                                          })
                                        : (0, l.jsx)(a.V, {
                                              color: s.Z.colors.ICON_PRIMARY,
                                              size: 'custom',
                                              height: 48,
                                              width: 48
                                          })
                            }),
                            null != i
                                ? i({
                                      className: d.purchaseBtn,
                                      onClick: (n) => {
                                          n.stopPropagation(), null == v || v();
                                      }
                                  })
                                : null,
                            g,
                            null != t &&
                                '' !== t &&
                                (0, l.jsx)(o.x, {
                                    className: d.description,
                                    color: 'text-normal',
                                    variant: 'text-sm/medium',
                                    children: t
                                })
                        ]
                    })
                }),
                null != S &&
                    (0, l.jsx)('div', {
                        className: d.benefitsSummary,
                        children: (0, l.jsx)(o.x, {
                            color: 'interactive-normal',
                            variant: 'text-sm/medium',
                            children: c.Z.Messages.STOREFRONT_BENEFITS_SUMMARY.format({ count: S })
                        })
                    }),
                null != I &&
                    I.length > 0 &&
                    (0, l.jsx)('div', {
                        className: d.benefits,
                        children: (0, l.jsx)('div', {
                            className: d.benefitsContainer,
                            children: (0, l.jsxs)('div', {
                                className: d.benefitsList,
                                children: [
                                    (0, l.jsx)(o.x, {
                                        color: 'header-secondary',
                                        variant: 'eyebrow',
                                        children: c.Z.Messages.STOREFRONT_BENEFITS_TITLE
                                    }),
                                    I.length > E
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  I.slice(0, E),
                                                  (0, l.jsx)(o.x, {
                                                      variant: 'text-md/semibold',
                                                      color: 'text-secondary',
                                                      children: c.Z.Messages.STOREFRONT_MORE_BENEFITS.format({ count: I.length - E })
                                                  })
                                              ]
                                          })
                                        : I
                                ]
                            })
                        })
                    })
            ]
        })
    });
}
function m(n) {
    let { icon: t, header: e, description: i } = n;
    return (0, l.jsxs)('div', {
        className: d.cardBenefit,
        children: [
            (0, l.jsx)('div', {
                className: d.cardBenefitIcon,
                children: t
            }),
            (0, l.jsxs)('div', {
                children: [
                    null != e &&
                        (0, l.jsx)(o.x, {
                            variant: 'text-md/normal',
                            color: 'header-primary',
                            children: e
                        }),
                    (0, l.jsx)(o.x, {
                        variant: 'text-sm/normal',
                        children: i
                    })
                ]
            })
        ]
    });
}
