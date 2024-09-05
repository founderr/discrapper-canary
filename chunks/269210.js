t.d(n, {
    G: function () {
        return f;
    },
    U: function () {
        return m;
    }
});
var i = t(735250);
t(470079);
var l = t(557533),
    r = t.n(l),
    o = t(789978),
    s = t(368072),
    a = t(777207),
    c = t(752843),
    u = t(330711),
    d = t(772421),
    S = t(778342);
function m(e) {
    let { description: n, imgSrc: t, renderPurchaseButton: l, onPurchase: m, subscriptionType: f, title: I, onDetails: x, benefitItems: _, benefitsSummary: p } = e;
    return (0, i.jsx)(o.tE, {
        children: (0, i.jsxs)('div', {
            className: r()(d.container, S.hoverCard),
            tabIndex: 0,
            onClick: () => {
                null != x ? x() : null != m && m();
            },
            children: [
                (0, i.jsxs)('div', {
                    className: d.card,
                    children: [
                        null != f && (0, i.jsx)(c.Z, { type: f }),
                        (0, i.jsxs)('div', {
                            className: d.body,
                            children: [
                                (0, i.jsx)(a.x, {
                                    tag: 'div',
                                    variant: 'heading-lg/semibold',
                                    children: I
                                }),
                                (0, i.jsx)('div', {
                                    className: d.image,
                                    children:
                                        null != t
                                            ? (0, i.jsx)('img', {
                                                  src: t.toString(),
                                                  alt: ''
                                              })
                                            : (0, i.jsx)(s.V, {
                                                  color: 'white',
                                                  size: 'custom',
                                                  height: 48,
                                                  width: 48
                                              })
                                }),
                                null != l
                                    ? l({
                                          className: d.purchaseBtn,
                                          onClick: (e) => {
                                              e.stopPropagation(), null == m || m();
                                          }
                                      })
                                    : null,
                                null != n &&
                                    '' !== n &&
                                    (0, i.jsx)(a.x, {
                                        className: d.description,
                                        color: 'text-normal',
                                        variant: 'text-sm/medium',
                                        children: n
                                    })
                            ]
                        })
                    ]
                }),
                null != p &&
                    (0, i.jsx)('div', {
                        className: d.benefitsSummary,
                        children: (0, i.jsx)(a.x, {
                            color: 'interactive-normal',
                            variant: 'text-sm/medium',
                            children: u.Z.Messages.Storefront.BENEFITS_SUMMARY.format({ count: p })
                        })
                    }),
                null != _ &&
                    (0, i.jsx)('div', {
                        className: d.benefits,
                        children: (0, i.jsx)('div', {
                            className: d.benefitsContainer,
                            children: (0, i.jsxs)('div', {
                                className: d.benefitsList,
                                children: [
                                    (0, i.jsx)(a.x, {
                                        color: 'header-secondary',
                                        variant: 'eyebrow',
                                        children: u.Z.Messages.Storefront.BENEFITS_TITLE
                                    }),
                                    _.length > 3
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  _.slice(0, 3),
                                                  (0, i.jsx)(a.x, {
                                                      variant: 'text-md/semibold',
                                                      color: 'text-secondary',
                                                      children: u.Z.Messages.Storefront.MORE_BENEFITS.format({ count: _.length - 3 })
                                                  })
                                              ]
                                          })
                                        : _
                                ]
                            })
                        })
                    })
            ]
        })
    });
}
function f(e) {
    let { icon: n, name: t, description: l } = e;
    return (0, i.jsxs)('div', {
        className: d.cardBenefit,
        children: [
            (0, i.jsx)('div', {
                className: d.cardBenefitIcon,
                children: n
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(a.x, {
                        variant: 'text-md/semibold',
                        children: t
                    }),
                    null != l &&
                        (0, i.jsx)(a.x, {
                            variant: 'text-sm/medium',
                            color: 'text-muted',
                            children: l
                        })
                ]
            })
        ]
    });
}
