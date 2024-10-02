n.d(t, {
    G: function () {
        return p;
    },
    U: function () {
        return h;
    }
});
var r = n(735250);
n(470079);
var i = n(557533),
    a = n.n(i),
    o = n(789978),
    s = n(368072),
    l = n(777207),
    u = n(330711),
    c = n(56273),
    d = n(103077),
    _ = n(692547);
let E = 48,
    f = 3;
function h(e) {
    let { description: t, imgSrc: n, renderPurchaseButton: i, onPurchase: h, title: p, onDetails: m, benefitItems: I, benefitsSummary: T } = e;
    return (0, r.jsx)(o.tE, {
        children: (0, r.jsxs)('div', {
            className: a()(c.container, d.hoverCard),
            tabIndex: 0,
            onClick: () => {
                null != m ? m() : null != h && h();
            },
            children: [
                (0, r.jsx)('div', {
                    className: c.card,
                    children: (0, r.jsxs)('div', {
                        className: c.body,
                        children: [
                            (0, r.jsx)(l.x, {
                                tag: 'div',
                                variant: 'heading-lg/semibold',
                                children: p
                            }),
                            (0, r.jsx)('div', {
                                className: c.image,
                                children:
                                    null != n
                                        ? (0, r.jsx)('img', {
                                              src: n.toString(),
                                              alt: ''
                                          })
                                        : (0, r.jsx)(s.V, {
                                              color: _.Z.colors.ICON_PRIMARY,
                                              size: 'custom',
                                              height: E,
                                              width: E
                                          })
                            }),
                            null != i
                                ? i({
                                      className: c.purchaseBtn,
                                      onClick: (e) => {
                                          e.stopPropagation(), null == h || h();
                                      }
                                  })
                                : null,
                            null != t &&
                                '' !== t &&
                                (0, r.jsx)(l.x, {
                                    className: c.description,
                                    color: 'text-normal',
                                    variant: 'text-sm/medium',
                                    children: t
                                })
                        ]
                    })
                }),
                null != T &&
                    (0, r.jsx)('div', {
                        className: c.benefitsSummary,
                        children: (0, r.jsx)(l.x, {
                            color: 'interactive-normal',
                            variant: 'text-sm/medium',
                            children: u.Z.Messages.Storefront.BENEFITS_SUMMARY.format({ count: T })
                        })
                    }),
                null != I &&
                    (0, r.jsx)('div', {
                        className: c.benefits,
                        children: (0, r.jsx)('div', {
                            className: c.benefitsContainer,
                            children: (0, r.jsxs)('div', {
                                className: c.benefitsList,
                                children: [
                                    (0, r.jsx)(l.x, {
                                        color: 'header-secondary',
                                        variant: 'eyebrow',
                                        children: u.Z.Messages.Storefront.BENEFITS_TITLE
                                    }),
                                    I.length > f
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  I.slice(0, f),
                                                  (0, r.jsx)(l.x, {
                                                      variant: 'text-md/semibold',
                                                      color: 'text-secondary',
                                                      children: u.Z.Messages.Storefront.MORE_BENEFITS.format({ count: I.length - f })
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
function p(e) {
    let { icon: t, name: n, description: i } = e;
    return (0, r.jsxs)('div', {
        className: c.cardBenefit,
        children: [
            (0, r.jsx)('div', {
                className: c.cardBenefitIcon,
                children: t
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(l.x, {
                        variant: 'text-sm/semibold',
                        children: n
                    }),
                    null != i &&
                        (0, r.jsx)(l.x, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: i
                        })
                ]
            })
        ]
    });
}
