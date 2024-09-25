n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(313201),
    l = n(240657),
    u = n(765400),
    c = n(916001),
    d = n(689938),
    _ = n(272507);
function E(e) {
    let { hidePurchaseToUnlockBadge: t, showDraftBadge: n, className: i, children: s } = e;
    return (0, r.jsxs)('div', {
        className: a()(_.productThumbnailContainer, i),
        children: [
            s,
            !t &&
                (0, r.jsxs)('div', {
                    className: _.purchaseToUnlockBadge,
                    children: [
                        (0, r.jsx)(o.LockIcon, {
                            size: 'xs',
                            className: _.lockIcon,
                            color: 'currentColor',
                            'aria-hidden': !0
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            color: 'always-white',
                            className: _.__invalid_unlockText,
                            children: d.Z.Messages.GUILD_PRODUCT_CARD_PURCHASE_TO_UNLOCK
                        })
                    ]
                }),
            n &&
                (0, r.jsx)('div', {
                    className: _.draftBadge,
                    children: (0, r.jsx)(u.v, {})
                })
        ]
    });
}
function f(e) {
    let { onShowFullDescription: t, variant: n } = e,
        i = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.Text, {
                    variant: n,
                    color: null != t ? 'text-link' : 'interactive-hover',
                    children: d.Z.Messages.GUILD_PRODUCT_CARD_SEE_FULL_DESCRIPTION
                }),
                (0, r.jsx)(o.ArrowSmallRightIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: _.arrowIcon
                })
            ]
        }),
        s = (e) => {
            e.stopPropagation(), null != t && t();
        };
    return null == t
        ? (0, r.jsx)('div', {
              className: _.showMoreButton,
              children: i
          })
        : (0, r.jsx)(o.Clickable, {
              className: a()(_.showMoreButton, _.hasAction),
              onClick: s,
              children: i
          });
}
function h(e) {
    let { imageUrl: t, name: n, description: i, formattedPrice: u, role: h, ctaComponent: p, shouldShowFullDescriptionButton: m = !0, onShowFullDescription: I, productType: T, onTapCard: g, actionMenu: S, showOpaqueBackground: A = !1, hideRoleTag: v = !1, lineClamp: N = 1, cardWidth: O = 332, cardHeight: R, thumbnailHeight: C = 187, descriptionTextVariant: y = 'text-sm/normal', isDraft: b = !1 } = e,
        L = (0, s.hQ)(),
        D = (e) => {
            e.stopPropagation();
        },
        M = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(E, {
                    showDraftBadge: b,
                    hidePurchaseToUnlockBadge: !0,
                    children: (0, r.jsx)('img', {
                        alt: '',
                        src: t,
                        className: _.productThumbnail,
                        style: { height: C }
                    })
                }),
                (0, r.jsxs)('div', {
                    className: _.productDetails,
                    children: [
                        (0, r.jsxs)('div', {
                            className: _.productDetailContent,
                            children: [
                                (0, r.jsx)(o.Heading, {
                                    variant: 'text-md/medium',
                                    color: 'header-primary',
                                    className: _.productName,
                                    id: L,
                                    children: n
                                }),
                                (0, r.jsx)(o.FocusBlock, {
                                    children: (0, r.jsx)(l.Z, {
                                        variant: y,
                                        color: 'text-muted',
                                        lineClamp: N,
                                        text: i
                                    })
                                }),
                                m &&
                                    (0, r.jsx)(f, {
                                        onShowFullDescription: I,
                                        variant: y
                                    }),
                                v || null == h || '' === h.name
                                    ? null
                                    : (0, r.jsxs)(r.Fragment, {
                                          children: [(0, r.jsx)(o.Spacer, { size: 16 }), (0, r.jsx)(c.Z, { role: h })]
                                      })
                            ]
                        }),
                        S
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: _.purchaseDetails,
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: 'text-md/medium',
                            color: 'interactive-active',
                            className: _.__invalid_productPrice,
                            children: null != u ? u : d.Z.Messages.GUILD_PRODUCT_CARD_EMPTY_PRICE
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: 'text-xxs/normal',
                            color: 'text-normal',
                            className: _.__invalid_productType,
                            children: T
                        }),
                        (0, r.jsx)('div', {
                            className: _.productActionButton,
                            onClick: D,
                            children: p
                        })
                    ]
                })
            ]
        });
    return null == g
        ? (0, r.jsx)('article', {
              className: a()(_.productCard, A ? _.opaqueBackground : _.solidBackground),
              'aria-labelledby': L,
              children: M
          })
        : (0, r.jsx)('div', {
              style: {
                  width: O,
                  height: R
              },
              children: (0, r.jsx)(o.ClickableContainer, {
                  tag: 'article',
                  'aria-label': d.Z.Messages.GUILD_SHOP_LISTING_CARD_A11Y_LABEL.format({ productName: n }),
                  className: a()(_.productCard, A ? _.opaqueBackground : _.solidBackground, _.cardClickableContainer),
                  onClick: g,
                  children: M
              })
          });
}
