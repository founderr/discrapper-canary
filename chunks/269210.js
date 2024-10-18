t.d(n, {
    G: function () {
        return v;
    },
    U: function () {
        return m;
    }
});
var l = t(735250);
t(470079);
var i = t(557533),
    r = t.n(i),
    o = t(789978),
    a = t(368072),
    s = t(777207),
    u = t(692547),
    c = t(330711),
    d = t(56273),
    p = t(103077);
function m(e) {
    let { description: n, imgSrc: t, renderPurchaseButton: i, onPurchase: m, title: v, onDetails: f, benefitItems: I, benefitsSummary: h, subtitle: S } = e;
    return (0, l.jsx)(o.tE, {
        children: (0, l.jsxs)('div', {
            className: r()(d.container, p.hoverCard),
            tabIndex: 0,
            onClick: () => {
                null != f ? f() : null != m && m();
            },
            children: [
                (0, l.jsx)('div', {
                    className: d.card,
                    children: (0, l.jsxs)('div', {
                        className: d.body,
                        children: [
                            (0, l.jsx)(s.x, {
                                tag: 'div',
                                variant: 'heading-lg/semibold',
                                children: v
                            }),
                            (0, l.jsx)('div', {
                                className: d.image,
                                children:
                                    null != t
                                        ? (0, l.jsx)('img', {
                                              src: t.toString(),
                                              alt: ''
                                          })
                                        : (0, l.jsx)(a.V, {
                                              color: u.Z.colors.ICON_PRIMARY,
                                              size: 'custom',
                                              height: 48,
                                              width: 48
                                          })
                            }),
                            null != i
                                ? i({
                                      className: d.purchaseBtn,
                                      onClick: (e) => {
                                          e.stopPropagation(), null == m || m();
                                      }
                                  })
                                : null,
                            S,
                            null != n &&
                                '' !== n &&
                                (0, l.jsx)(s.x, {
                                    className: d.description,
                                    color: 'text-normal',
                                    variant: 'text-sm/medium',
                                    children: n
                                })
                        ]
                    })
                }),
                null != h &&
                    (0, l.jsx)('div', {
                        className: d.benefitsSummary,
                        children: (0, l.jsx)(s.x, {
                            color: 'interactive-normal',
                            variant: 'text-sm/medium',
                            children: c.Z.Messages.STOREFRONT_BENEFITS_SUMMARY.format({ count: h })
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
                                    (0, l.jsx)(s.x, {
                                        color: 'header-secondary',
                                        variant: 'eyebrow',
                                        children: c.Z.Messages.STOREFRONT_BENEFITS_TITLE
                                    }),
                                    I.length > 3
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  I.slice(0, 3),
                                                  (0, l.jsx)(s.x, {
                                                      variant: 'text-md/semibold',
                                                      color: 'text-secondary',
                                                      children: c.Z.Messages.STOREFRONT_MORE_BENEFITS.format({ count: I.length - 3 })
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
function v(e) {
    let { icon: n, name: t, description: i } = e;
    return (0, l.jsxs)('div', {
        className: d.cardBenefit,
        children: [
            (0, l.jsx)('div', {
                className: d.cardBenefitIcon,
                children: n
            }),
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsx)(s.x, {
                        variant: 'text-sm/semibold',
                        children: t
                    }),
                    null != i &&
                        (0, l.jsx)(s.x, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: i
                        })
                ]
            })
        ]
    });
}
