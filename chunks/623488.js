n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(735250);
n(470079);
var a = n(120356), s = n.n(a), l = n(481060), r = n(240657), o = n(765400), c = n(153124), d = n(916001), u = n(689938), _ = n(690326);
function E(e) {
    let {
        hidePurchaseToUnlockBadge: t,
        showDraftBadge: n,
        className: a,
        children: r
    } = e;
    return (0, i.jsxs)('div', {
        className: s()(_.productThumbnailContainer, a),
        children: [
            r,
            !t && (0, i.jsxs)('div', {
                className: _.purchaseToUnlockBadge,
                children: [
                    (0, i.jsx)(l.LockIcon, {
                        size: 'xs',
                        className: _.lockIcon,
                        color: 'currentColor',
                        'aria-hidden': !0
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        color: 'always-white',
                        className: _.__invalid_unlockText,
                        children: u.Z.Messages.GUILD_PRODUCT_CARD_PURCHASE_TO_UNLOCK
                    })
                ]
            }),
            n && (0, i.jsx)('div', {
                className: _.draftBadge,
                children: (0, i.jsx)(o.v, {})
            })
        ]
    });
}
function m(e) {
    let {
            onShowFullDescription: t,
            variant: n
        } = e, a = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(l.Text, {
                    variant: n,
                    color: null != t ? 'text-link' : 'interactive-hover',
                    children: u.Z.Messages.GUILD_PRODUCT_CARD_SEE_FULL_DESCRIPTION
                }),
                (0, i.jsx)(l.ArrowSmallRightIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: _.arrowIcon
                })
            ]
        });
    return null == t ? (0, i.jsx)('div', {
        className: _.showMoreButton,
        children: a
    }) : (0, i.jsx)(l.Clickable, {
        className: s()(_.showMoreButton, _.hasAction),
        onClick: e => {
            e.stopPropagation(), null != t && t();
        },
        children: a
    });
}
function I(e) {
    let {
            imageUrl: t,
            name: n,
            description: a,
            formattedPrice: o,
            role: I,
            ctaComponent: T,
            shouldShowFullDescriptionButton: h = !0,
            onShowFullDescription: N,
            productType: f,
            onTapCard: p,
            actionMenu: C,
            showOpaqueBackground: g = !1,
            hideRoleTag: S = !1,
            lineClamp: A = 1,
            cardWidth: x = 332,
            cardHeight: O,
            thumbnailHeight: R = 187,
            descriptionTextVariant: M = 'text-sm/normal',
            isDraft: v = !1
        } = e, L = (0, c.hQ)(), Z = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(E, {
                    showDraftBadge: v,
                    hidePurchaseToUnlockBadge: !0,
                    children: (0, i.jsx)('img', {
                        alt: '',
                        src: t,
                        className: _.productThumbnail,
                        style: { height: R }
                    })
                }),
                (0, i.jsxs)('div', {
                    className: _.productDetails,
                    children: [
                        (0, i.jsxs)('div', {
                            className: _.productDetailContent,
                            children: [
                                (0, i.jsx)(l.Heading, {
                                    variant: 'text-md/medium',
                                    color: 'header-primary',
                                    className: _.productName,
                                    id: L,
                                    children: n
                                }),
                                (0, i.jsx)(l.FocusBlock, {
                                    children: (0, i.jsx)(r.Z, {
                                        variant: M,
                                        color: 'text-muted',
                                        lineClamp: A,
                                        text: a
                                    })
                                }),
                                h && (0, i.jsx)(m, {
                                    onShowFullDescription: N,
                                    variant: M
                                }),
                                S || null == I || '' === I.name ? null : (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(l.Spacer, { size: 16 }),
                                        (0, i.jsx)(d.Z, { role: I })
                                    ]
                                })
                            ]
                        }),
                        C
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: _.purchaseDetails,
                    children: [
                        (0, i.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            color: 'interactive-active',
                            className: _.__invalid_productPrice,
                            children: null != o ? o : u.Z.Messages.GUILD_PRODUCT_CARD_EMPTY_PRICE
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-xxs/normal',
                            color: 'text-normal',
                            className: _.__invalid_productType,
                            children: f
                        }),
                        (0, i.jsx)('div', {
                            className: _.productActionButton,
                            onClick: e => {
                                e.stopPropagation();
                            },
                            children: T
                        })
                    ]
                })
            ]
        });
    return null == p ? (0, i.jsx)('article', {
        className: s()(_.productCard, g ? _.opaqueBackground : _.solidBackground),
        'aria-labelledby': L,
        children: Z
    }) : (0, i.jsx)('div', {
        style: {
            width: x,
            height: O
        },
        children: (0, i.jsx)(l.ClickableContainer, {
            tag: 'article',
            'aria-label': u.Z.Messages.GUILD_SHOP_LISTING_CARD_A11Y_LABEL.format({ productName: n }),
            className: s()(_.productCard, g ? _.opaqueBackground : _.solidBackground, _.cardClickableContainer),
            onClick: p,
            children: Z
        })
    });
}
