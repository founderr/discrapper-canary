n.d(t, {
    G: function () {
        return m;
    },
    U: function () {
        return p;
    }
});
var r = n(735250);
n(470079);
var i = n(557533),
    a = n.n(i),
    o = n(789978),
    s = n(368072),
    l = n(777207),
    u = n(752843),
    c = n(330711),
    d = n(56273),
    _ = n(103077),
    E = n(692547);
let f = 48,
    h = 3;
function p(e) {
    let { description: t, imgSrc: n, renderPurchaseButton: i, onPurchase: p, subscriptionType: m, title: I, onDetails: T, benefitItems: g, benefitsSummary: S } = e;
    return (0, r.jsx)(o.tE, {
        children: (0, r.jsxs)('div', {
            className: a()(d.container, _.hoverCard),
            tabIndex: 0,
            onClick: () => {
                null != T ? T() : null != p && p();
            },
            children: [
                (0, r.jsxs)('div', {
                    className: d.card,
                    children: [
                        null != m && (0, r.jsx)(u.Z, { type: m }),
                        (0, r.jsxs)('div', {
                            className: d.body,
                            children: [
                                (0, r.jsx)(l.x, {
                                    tag: 'div',
                                    variant: 'heading-lg/semibold',
                                    children: I
                                }),
                                (0, r.jsx)('div', {
                                    className: d.image,
                                    children:
                                        null != n
                                            ? (0, r.jsx)('img', {
                                                  src: n.toString(),
                                                  alt: ''
                                              })
                                            : (0, r.jsx)(s.V, {
                                                  color: E.Z.colors.ICON_PRIMARY,
                                                  size: 'custom',
                                                  height: f,
                                                  width: f
                                              })
                                }),
                                null != i
                                    ? i({
                                          className: d.purchaseBtn,
                                          onClick: (e) => {
                                              e.stopPropagation(), null == p || p();
                                          }
                                      })
                                    : null,
                                null != t &&
                                    '' !== t &&
                                    (0, r.jsx)(l.x, {
                                        className: d.description,
                                        color: 'text-normal',
                                        variant: 'text-sm/medium',
                                        children: t
                                    })
                            ]
                        })
                    ]
                }),
                null != S &&
                    (0, r.jsx)('div', {
                        className: d.benefitsSummary,
                        children: (0, r.jsx)(l.x, {
                            color: 'interactive-normal',
                            variant: 'text-sm/medium',
                            children: c.Z.Messages.Storefront.BENEFITS_SUMMARY.format({ count: S })
                        })
                    }),
                null != g &&
                    (0, r.jsx)('div', {
                        className: d.benefits,
                        children: (0, r.jsx)('div', {
                            className: d.benefitsContainer,
                            children: (0, r.jsxs)('div', {
                                className: d.benefitsList,
                                children: [
                                    (0, r.jsx)(l.x, {
                                        color: 'header-secondary',
                                        variant: 'eyebrow',
                                        children: c.Z.Messages.Storefront.BENEFITS_TITLE
                                    }),
                                    g.length > h
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  g.slice(0, h),
                                                  (0, r.jsx)(l.x, {
                                                      variant: 'text-md/semibold',
                                                      color: 'text-secondary',
                                                      children: c.Z.Messages.Storefront.MORE_BENEFITS.format({ count: g.length - h })
                                                  })
                                              ]
                                          })
                                        : g
                                ]
                            })
                        })
                    })
            ]
        })
    });
}
function m(e) {
    let { icon: t, name: n, description: i } = e;
    return (0, r.jsxs)('div', {
        className: d.cardBenefit,
        children: [
            (0, r.jsx)('div', {
                className: d.cardBenefitIcon,
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
