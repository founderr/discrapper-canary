n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(313201),
    s = n(240657),
    c = n(765400),
    u = n(916001),
    d = n(388032),
    m = n(921701);
function h(e) {
    let { hidePurchaseToUnlockBadge: t, showDraftBadge: n, className: r, children: o } = e;
    return (0, i.jsxs)('div', {
        className: l()(m.productThumbnailContainer, r),
        children: [
            o,
            !t &&
                (0, i.jsxs)('div', {
                    className: m.purchaseToUnlockBadge,
                    children: [
                        (0, i.jsx)(a.LockIcon, {
                            size: 'xs',
                            className: m.lockIcon,
                            color: 'currentColor',
                            'aria-hidden': !0
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            color: 'always-white',
                            className: m.__invalid_unlockText,
                            children: d.intl.string(d.t.YmIiSU)
                        })
                    ]
                }),
            n &&
                (0, i.jsx)('div', {
                    className: m.draftBadge,
                    children: (0, i.jsx)(c.v, {})
                })
        ]
    });
}
function f(e) {
    let { onShowFullDescription: t, variant: n } = e,
        r = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.Text, {
                    variant: n,
                    color: null != t ? 'text-link' : 'interactive-hover',
                    children: d.intl.string(d.t['5fmYjY'])
                }),
                (0, i.jsx)(a.ArrowSmallRightIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: m.arrowIcon
                })
            ]
        });
    return null == t
        ? (0, i.jsx)('div', {
              className: m.showMoreButton,
              children: r
          })
        : (0, i.jsx)(a.Clickable, {
              className: l()(m.showMoreButton, m.hasAction),
              onClick: (e) => {
                  e.stopPropagation(), null != t && t();
              },
              children: r
          });
}
function p(e) {
    let { imageUrl: t, name: n, description: r, formattedPrice: c, role: p, ctaComponent: g, shouldShowFullDescriptionButton: _ = !0, onShowFullDescription: E, productType: C, onTapCard: I, actionMenu: x, showOpaqueBackground: N = !1, hideRoleTag: v = !1, lineClamp: T = 1, cardWidth: S = 332, cardHeight: A, thumbnailHeight: b = 187, descriptionTextVariant: j = 'text-sm/normal', isDraft: Z = !1 } = e,
        R = (0, o.hQ)(),
        P = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(h, {
                    showDraftBadge: Z,
                    hidePurchaseToUnlockBadge: !0,
                    children: (0, i.jsx)('img', {
                        alt: '',
                        src: t,
                        className: m.productThumbnail,
                        style: { height: b }
                    })
                }),
                (0, i.jsxs)('div', {
                    className: m.productDetails,
                    children: [
                        (0, i.jsxs)('div', {
                            className: m.productDetailContent,
                            children: [
                                (0, i.jsx)(a.Heading, {
                                    variant: 'text-md/medium',
                                    color: 'header-primary',
                                    className: m.productName,
                                    id: R,
                                    children: n
                                }),
                                (0, i.jsx)(a.FocusBlock, {
                                    children: (0, i.jsx)(s.Z, {
                                        variant: j,
                                        color: 'text-muted',
                                        lineClamp: T,
                                        text: r
                                    })
                                }),
                                _ &&
                                    (0, i.jsx)(f, {
                                        onShowFullDescription: E,
                                        variant: j
                                    }),
                                v || null == p || '' === p.name
                                    ? null
                                    : (0, i.jsxs)(i.Fragment, {
                                          children: [(0, i.jsx)(a.Spacer, { size: 16 }), (0, i.jsx)(u.Z, { role: p })]
                                      })
                            ]
                        }),
                        x
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: m.purchaseDetails,
                    children: [
                        (0, i.jsx)(a.Text, {
                            variant: 'text-md/medium',
                            color: 'interactive-active',
                            className: m.__invalid_productPrice,
                            children: null != c ? c : d.intl.string(d.t['4uLhAg'])
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: 'text-xxs/normal',
                            color: 'text-normal',
                            className: m.__invalid_productType,
                            children: C
                        }),
                        (0, i.jsx)('div', {
                            className: m.productActionButton,
                            onClick: (e) => {
                                e.stopPropagation();
                            },
                            children: g
                        })
                    ]
                })
            ]
        });
    return null == I
        ? (0, i.jsx)('article', {
              className: l()(m.productCard, N ? m.opaqueBackground : m.solidBackground),
              'aria-labelledby': R,
              children: P
          })
        : (0, i.jsx)('div', {
              style: {
                  width: S,
                  height: A
              },
              children: (0, i.jsx)(a.ClickableContainer, {
                  tag: 'article',
                  'aria-label': d.intl.formatToPlainString(d.t['e+TmJS'], { productName: n }),
                  className: l()(m.productCard, N ? m.opaqueBackground : m.solidBackground, m.cardClickableContainer),
                  onClick: I,
                  children: P
              })
          });
}
