n(47120), n(627341);
var r = n(735250), s = n(470079), a = n(120356), o = n.n(a), i = n(512722), l = n.n(i), c = n(278074), d = n(979554), u = n(399606), p = n(692547), g = n(663002), f = n(481060), C = n(37234), m = n(727637), h = n(607070), _ = n(100527), b = n(906732), x = n(1585), I = n(333867), E = n(197115), L = n(300284), S = n(876917), v = n(642619), T = n(210887), N = n(74538), O = n(335131), j = n(1870), R = n(884697), Z = n(724994), k = n(624377), A = n(390698), P = n(813083), B = n(680942), M = n(558060), y = n(237031), w = n(616066), F = n(216541), D = n(832149), H = n(474936), U = n(689938), G = n(246318);
let W = e => {
        let {
            children: t,
            onClick: n,
            ...s
        } = e;
        return (0, r.jsx)(f.Button, {
            fullWidth: !0,
            look: f.Button.Looks.FILLED,
            onClick: e => {
                e.stopPropagation(), n();
            },
            ...s,
            children: t
        });
    }, V = e => {
        let {
            className: t,
            ...n
        } = e;
        return (0, r.jsx)(f.Button, {
            color: f.ButtonColors.BRAND,
            look: f.Button.Looks.FILLED,
            size: f.ButtonSizes.ICON,
            className: o()(G.previewButton, t),
            innerClassName: G.previewButtonInner,
            'aria-label': U.Z.Messages.PREVIEW,
            ...n,
            children: (0, r.jsx)(f.EyeIcon, {
                size: 'md',
                color: 'currentColor'
            })
        });
    };
t.Z = function (e) {
    let {
            product: t,
            user: n,
            category: a,
            onMount: i,
            isGiftEasterEggEnabled: z,
            isPopularPicksRow: Y
        } = e, {analyticsLocations: K} = (0, b.ZP)([
            ...Y ? [_.Z.COLLECTIBLES_SHOP_POPULAR_PICKS_CAROUSEL] : [],
            _.Z.COLLECTIBLES_SHOP_CARD
        ]), X = s.useRef(null), q = (0, m.Z)(X), [$, J] = s.useState(!1), Q = q || $, [ee] = t.items, et = (0, u.e7)([h.Z], () => h.Z.useReducedMotion), {backgroundColors: en} = (0, k.Z)(t.styles), er = N.ZP.canUseCollectibles(n), es = (0, R.XM)(t, er, !1), ea = s.useMemo(() => (0, R.BH)(t, er), [
            t,
            er
        ]), eo = (0, R.G1)(t), ei = (0, R.rN)(t), {
            isPurchased: el,
            isPartiallyPurchased: ec
        } = (0, Z.L)(t), [ed, eu] = (0, u.Wu)([j.Z], () => [
            j.Z.isClaiming === t.skuId,
            null != j.Z.isClaiming && j.Z.isClaiming !== t.skuId
        ]), ep = (0, u.e7)([T.Z], () => (0, g.w)(T.Z.theme)), eg = (0, R.Yq)(t.skuId);
    s.useEffect(() => {
        let {current: e} = X;
        if (null == e)
            return;
        let t = () => J(!0);
        return e.addEventListener('focusin', t), e.blur(), () => {
            e.removeEventListener('focusin', t);
        };
    }, []), s.useEffect(() => {
        null == i || i(X);
    }, [i]);
    let ef = (0, L.Z)({ analyticsLocations: K }), eC = s.useRef(null), em = () => {
            if ((0, C.xf)(), ef(), t.type === d.Z.AVATAR_DECORATION && null != ee) {
                l()(ee.type === t.type, 'product type is equivlant to first item\'s check for avatar deco'), (0, x.ps)({
                    initialSelectedDecoration: ee,
                    analyticsLocations: K
                });
                return;
            }
            t.type === d.Z.PROFILE_EFFECT && (0, v.H)({
                initialSelectedEffectId: ee.id,
                analyticsLocations: K
            });
        }, eh = e => n => {
            eC.current = n.currentTarget, (0, y.T)({
                product: t,
                category: a,
                analyticsLocations: K,
                analyticsSource: e,
                returnRef: eC
            });
        }, e_ = eh(_.Z.COLLECTIBLES_SHOP_CARD), eb = eh(_.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), ex = () => (0, r.jsx)('div', {
            className: G.hoverUpsellContainer,
            children: (0, r.jsx)(E.Z, {
                fullWidth: !0,
                className: G.__invalid_premiumSubscribeButton,
                disabled: eu,
                onClick: e => e.stopPropagation(),
                buttonText: U.Z.Messages.UNLOCK_WITH_NITRO,
                subscriptionTier: H.Si.TIER_2
            })
        }), eI = () => el || ec ? (0, r.jsx)(A.U, {
            className: G.priceTag,
            isPartiallyPurchased: ec
        }) : eo ? (0, r.jsx)(f.Text, {
            variant: 'text-md/semibold',
            className: G.priceTag,
            children: U.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
        }) : (0, r.jsx)(M.Z, {
            product: t,
            discount: ea,
            isPremiumUser: er,
            className: G.priceTag
        }), eE = () => eo ? null : ei ? (0, r.jsx)(V, { onClick: eb }) : (0, r.jsx)(B.Z, {
            product: t,
            returnRef: X,
            isGiftEasterEggEnabled: z,
            disableCustomColor: !0,
            tooltipDelay: 250
        }), eL = () => {
            if (eo && !er && !ei)
                return ex();
            let e = eo ? {
                submitting: ed,
                submittingStartedLabel: U.Z.Messages.COLLECTIBLES_COLLECTING,
                submittingFinishedLabel: U.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                onClick: async () => {
                    await (0, O.fK)(t.skuId), (0, D.Z)({
                        product: t,
                        analyticsLocations: K
                    });
                }
            } : {
                onClick: () => (0, I.Z)({
                    skuId: t.skuId,
                    analyticsLocations: K,
                    returnRef: X
                })
            };
            return (0, r.jsxs)('div', {
                className: G.buttonsContainer,
                children: [
                    ec ? null : el ? (0, r.jsx)(W, {
                        disabled: eu,
                        onClick: em,
                        children: U.Z.Messages.COLLECTIBLES_USE_NOW
                    }) : (0, r.jsx)(W, {
                        disabled: eu,
                        className: G.purchaseButton,
                        ...e,
                        children: eo ? U.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : U.Z.Messages.COLLECTIBLES_PURCHASE.format({ price: es })
                    }),
                    eE()
                ]
            });
        }, eS = ep ? '0 0 15px 1px '.concat(p.Z.unsafe_rawColors.PRIMARY_700.css) : 'var(--elevation-high)';
    return (0, R.x6)(t) && null != ea && ea.discountPercentage < 0 ? null : (0, r.jsx)(f.FocusRing, {
        children: (0, r.jsxs)(f.Clickable, {
            innerRef: X,
            className: o()(G.shopCard, {
                [G.partiallyOwned]: ec,
                [G.shopCardAnimation]: !et
            }),
            onBlur: () => J(!1),
            onClick: e_,
            style: null != en ? {
                backgroundColor: ep ? 'var(--background-floating)' : 'var(--background-secondary)',
                borderColor: 'var(--chat-border)',
                boxShadow: Q ? eS : 'none'
            } : void 0,
            id: 'shop-item-'.concat(t.skuId),
            children: [
                eo && (0, r.jsx)(f.Tooltip, {
                    tooltipContentClassName: G.premiumWheelTooltipContent,
                    color: f.Tooltip.Colors.PRIMARY,
                    text: U.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                    children: e => (0, r.jsx)(f.TextBadge, {
                        ...e,
                        className: G.premiumWheelBadge,
                        text: (0, r.jsx)(f.NitroWheelIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: G.premiumWheel
                        })
                    })
                }),
                (0, r.jsx)('div', {
                    className: G.preview,
                    children: (0, c.EQ)(t.type).with(d.Z.PROFILE_EFFECT, () => (0, r.jsx)('div', {
                        className: G.profileEffectShopPreview,
                        children: (0, r.jsx)(S.Z, {
                            isHovering: Q,
                            profileEffectId: ee.id,
                            isPurchased: el,
                            removeSetHeight: !0
                        })
                    })).with(d.Z.AVATAR_DECORATION, () => (l()(ee.type === d.Z.AVATAR_DECORATION, 'ts-match already checked the type'), (0, r.jsx)('div', {
                        className: G.avatarContainer,
                        children: (0, r.jsx)(w.R, {
                            item: ee,
                            user: n,
                            isPurchased: el,
                            isHighlighted: Q
                        })
                    }))).with(d.Z.BUNDLE, () => (0, r.jsx)(F.d, {
                        product: t,
                        user: n,
                        isPurchased: el,
                        isHighlighted: Q
                    })).otherwise(() => null)
                }),
                el ? (0, r.jsx)('div', {
                    className: G.checkmarkWrapper,
                    children: (0, r.jsx)(f.CheckmarkBoldIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 38,
                        height: 38,
                        className: G.checkmark
                    })
                }) : null,
                (0, r.jsxs)('div', {
                    className: o()(G.cardText, { [G.cardTextBlur]: (null == ee ? void 0 : ee.type) === d.Z.PROFILE_EFFECT }),
                    children: [
                        (0, r.jsx)('div', { className: o()(G.cardBackground, ep ? G.darkCardBackground : G.lightCardBackground, (null == ee ? void 0 : ee.type) === d.Z.PROFILE_EFFECT ? G.cardLowOpacity : null) }),
                        (0, r.jsx)(f.Text, {
                            variant: 'text-lg/bold',
                            className: G.productName,
                            children: t.name
                        }),
                        (0, r.jsxs)('div', {
                            className: G.detailsWrapper,
                            children: [
                                (0, r.jsx)('div', {
                                    className: ec ? void 0 : G.innerBlur,
                                    children: eI()
                                }),
                                (0, r.jsx)('div', {
                                    className: G.innerHover,
                                    children: eL()
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)(P.Z, {
                    category: a,
                    className: G.limitedTimeBadge,
                    display: 'card'
                }),
                eg && !ec && !el && (0, r.jsx)(f.TextBadge, {
                    text: U.Z.Messages.NEW,
                    disableColor: !0,
                    className: G.newBadge
                })
            ]
        })
    });
};
