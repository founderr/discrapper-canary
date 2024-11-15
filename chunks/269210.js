e.d(t, {
    G: function () {
        return v;
    },
    U: function () {
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
    d = e(377199),
    f = e(847987);
function p(n) {
    let { description: t, imgSrc: e, renderPurchaseButton: i, onPurchase: p, title: v, onDetails: m, benefitItems: h, benefitsSummary: S, subtitle: g } = n;
    return (0, l.jsx)(u.tE, {
        children: (0, l.jsxs)('div', {
            className: r()(d.container, f.hoverCard),
            tabIndex: 0,
            onClick: () => {
                null != m ? m() : null != p && p();
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
                                children: v
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
                                          n.stopPropagation(), null == p || p();
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
                null != h &&
                    h.length > 0 &&
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
                                    h.length > 3
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  h.slice(0, 3),
                                                  (0, l.jsx)(o.x, {
                                                      variant: 'text-md/semibold',
                                                      color: 'text-secondary',
                                                      children: c.Z.Messages.STOREFRONT_MORE_BENEFITS.format({ count: h.length - 3 })
                                                  })
                                              ]
                                          })
                                        : h
                                ]
                            })
                        })
                    })
            ]
        })
    });
}
function v(n) {
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
