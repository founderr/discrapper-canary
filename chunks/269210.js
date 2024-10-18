t.d(e, {
    G: function () {
        return m;
    },
    U: function () {
        return f;
    }
});
var l = t(735250);
t(470079);
var i = t(557533),
    r = t.n(i),
    a = t(789978),
    o = t(368072),
    s = t(777207),
    u = t(692547),
    c = t(330711),
    d = t(56273),
    p = t(103077);
function f(n) {
    let { description: e, imgSrc: t, renderPurchaseButton: i, onPurchase: f, title: m, onDetails: v, benefitItems: h, benefitsSummary: I, subtitle: S } = n;
    return (0, l.jsx)(a.tE, {
        children: (0, l.jsxs)('div', {
            className: r()(d.container, p.hoverCard),
            tabIndex: 0,
            onClick: () => {
                null != v ? v() : null != f && f();
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
                                children: m
                            }),
                            (0, l.jsx)('div', {
                                className: d.image,
                                children:
                                    null != t
                                        ? (0, l.jsx)('img', {
                                              src: t.toString(),
                                              alt: ''
                                          })
                                        : (0, l.jsx)(o.V, {
                                              color: u.Z.colors.ICON_PRIMARY,
                                              size: 'custom',
                                              height: 48,
                                              width: 48
                                          })
                            }),
                            null != i
                                ? i({
                                      className: d.purchaseBtn,
                                      onClick: (n) => {
                                          n.stopPropagation(), null == f || f();
                                      }
                                  })
                                : null,
                            S,
                            null != e &&
                                '' !== e &&
                                (0, l.jsx)(s.x, {
                                    className: d.description,
                                    color: 'text-normal',
                                    variant: 'text-sm/medium',
                                    children: e
                                })
                        ]
                    })
                }),
                null != I &&
                    (0, l.jsx)('div', {
                        className: d.benefitsSummary,
                        children: (0, l.jsx)(s.x, {
                            color: 'interactive-normal',
                            variant: 'text-sm/medium',
                            children: c.Z.Messages.STOREFRONT_BENEFITS_SUMMARY.format({ count: I })
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
                                    (0, l.jsx)(s.x, {
                                        color: 'header-secondary',
                                        variant: 'eyebrow',
                                        children: c.Z.Messages.STOREFRONT_BENEFITS_TITLE
                                    }),
                                    h.length > 3
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  h.slice(0, 3),
                                                  (0, l.jsx)(s.x, {
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
function m(n) {
    let { icon: e, name: t, description: i } = n;
    return (0, l.jsxs)('div', {
        className: d.cardBenefit,
        children: [
            (0, l.jsx)('div', {
                className: d.cardBenefitIcon,
                children: e
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
