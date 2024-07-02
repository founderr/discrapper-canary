n(47120), n(627341);
var r = n(735250), s = n(470079), a = n(120356), o = n.n(a), i = n(512722), l = n.n(i), c = n(278074), d = n(979554), u = n(399606), p = n(692547), g = n(663002), f = n(481060), C = n(37234), m = n(727637), h = n(607070), _ = n(100527), b = n(906732), x = n(1585), I = n(333867), E = n(197115), L = n(300284), S = n(876917), v = n(642619), T = n(210887), N = n(74538), O = n(335131), j = n(1870), Z = n(884697), k = n(890249), R = n(635552), A = n(724994), P = n(624377), B = n(390698), M = n(813083), y = n(680942), w = n(558060), F = n(237031), D = n(616066), H = n(216541), U = n(832149), G = n(474936), W = n(689938), V = n(445968);
let z = e => {
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
    }, Y = e => {
        let {
            className: t,
            ...n
        } = e;
        return (0, r.jsx)(f.Button, {
            color: f.ButtonColors.BRAND,
            look: f.Button.Looks.FILLED,
            size: f.ButtonSizes.ICON,
            className: o()(V.previewButton, t),
            innerClassName: V.previewButtonInner,
            'aria-label': W.Z.Messages.PREVIEW,
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
            isGiftEasterEggEnabled: K,
            isPopularPicksRow: X
        } = e, {analyticsLocations: q} = (0, b.ZP)([
            ...X ? [_.Z.COLLECTIBLES_SHOP_POPULAR_PICKS_CAROUSEL] : [],
            _.Z.COLLECTIBLES_SHOP_CARD
        ]), $ = s.useRef(null), J = (0, m.Z)($), [Q, ee] = s.useState(!1), et = J || Q, [en] = t.items, er = (0, u.e7)([h.Z], () => h.Z.useReducedMotion), {backgroundColors: es} = (0, P.Z)(t.styles), ea = N.ZP.canUseCollectibles(n), eo = (0, Z.XM)(t, ea, !1), ei = s.useMemo(() => (0, Z.BH)(t, ea), [
            t,
            ea
        ]), el = (0, Z.G1)(t), ec = (0, Z.rN)(t), {
            isPurchased: ed,
            isPartiallyPurchased: eu
        } = (0, A.L)(t), [ep, eg] = (0, u.Wu)([j.Z], () => [
            j.Z.isClaiming === t.skuId,
            null != j.Z.isClaiming && j.Z.isClaiming !== t.skuId
        ]), ef = (0, u.e7)([T.Z], () => (0, g.w)(T.Z.theme)), eC = (0, k.m)('CollectiblesCollectedModal'), em = (0, Z.x6)(t) || eC, eh = (0, Z.Yq)(t.skuId);
    s.useEffect(() => {
        let {current: e} = $;
        if (null == e)
            return;
        let t = () => ee(!0);
        return e.addEventListener('focusin', t), e.blur(), () => {
            e.removeEventListener('focusin', t);
        };
    }, []), s.useEffect(() => {
        null == i || i($);
    }, [i]);
    let e_ = (0, L.Z)({ analyticsLocations: q }), eb = s.useRef(null), {
            handleUseNow: ex,
            isApplying: eI
        } = (0, R.W)({
            product: t,
            onSuccess: C.xf
        }), eE = () => {
            if ((0, C.xf)(), e_(), t.type === d.Z.AVATAR_DECORATION && null != en) {
                l()(en.type === t.type, 'product type is equivlant to first item\'s check for avatar deco'), (0, x.ps)({
                    initialSelectedDecoration: en,
                    analyticsLocations: q
                });
                return;
            }
            t.type === d.Z.PROFILE_EFFECT && (0, v.H)({
                initialSelectedEffectId: en.id,
                analyticsLocations: q
            });
        }, eL = e => n => {
            eb.current = n.currentTarget, (0, F.T)({
                product: t,
                category: a,
                analyticsLocations: q,
                analyticsSource: e,
                returnRef: eb
            });
        }, eS = eL(_.Z.COLLECTIBLES_SHOP_CARD), ev = eL(_.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), eT = () => (0, r.jsx)('div', {
            className: V.hoverUpsellContainer,
            children: (0, r.jsx)(E.Z, {
                fullWidth: !0,
                className: V.__invalid_premiumSubscribeButton,
                disabled: eg,
                onClick: e => e.stopPropagation(),
                buttonText: W.Z.Messages.UNLOCK_WITH_NITRO,
                subscriptionTier: G.Si.TIER_2
            })
        }), eN = () => ed || eu ? (0, r.jsx)(B.U, {
            className: V.priceTag,
            isPartiallyPurchased: eu
        }) : el ? (0, r.jsx)(f.Text, {
            variant: 'text-md/semibold',
            className: V.priceTag,
            children: W.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
        }) : (0, r.jsx)(w.Z, {
            product: t,
            discount: ei,
            isPremiumUser: ea,
            className: V.priceTag
        }), eO = () => el ? null : ec ? (0, r.jsx)(Y, { onClick: ev }) : (0, r.jsx)(y.Z, {
            product: t,
            returnRef: $,
            isGiftEasterEggEnabled: K,
            disableCustomColor: !0,
            tooltipDelay: 250
        }), ej = () => {
            if (el && !ea && !ec)
                return eT();
            let e = el ? {
                submitting: ep,
                submittingStartedLabel: W.Z.Messages.COLLECTIBLES_COLLECTING,
                submittingFinishedLabel: W.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                onClick: async () => {
                    await (0, O.fK)(t.skuId), (0, U.Z)({
                        product: t,
                        analyticsLocations: q
                    });
                }
            } : {
                onClick: () => (0, I.Z)({
                    skuId: t.skuId,
                    analyticsLocations: q,
                    returnRef: $
                })
            };
            return (0, r.jsxs)('div', {
                className: V.buttonsContainer,
                children: [
                    eu ? null : ed ? (0, r.jsx)(z, {
                        disabled: eg,
                        onClick: em ? ex : eE,
                        submitting: eI,
                        children: W.Z.Messages.COLLECTIBLES_USE_NOW
                    }) : (0, r.jsx)(z, {
                        disabled: eg,
                        className: V.purchaseButton,
                        ...e,
                        children: el ? W.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : W.Z.Messages.COLLECTIBLES_PURCHASE.format({ price: eo })
                    }),
                    eO()
                ]
            });
        }, eZ = ef ? '0 0 15px 1px '.concat(p.Z.unsafe_rawColors.PRIMARY_700.css) : 'var(--elevation-high)';
    return (0, Z.x6)(t) && null != ei && ei.discountPercentage < 0 ? null : (0, r.jsx)(f.FocusRing, {
        children: (0, r.jsxs)(f.Clickable, {
            innerRef: $,
            className: o()(V.shopCard, {
                [V.partiallyOwned]: eu,
                [V.shopCardAnimation]: !er
            }),
            onBlur: () => ee(!1),
            onClick: eS,
            style: null != es ? {
                backgroundColor: ef ? 'var(--background-floating)' : 'var(--background-secondary)',
                borderColor: 'var(--chat-border)',
                boxShadow: et ? eZ : 'none'
            } : void 0,
            id: 'shop-item-'.concat(t.skuId),
            children: [
                el && (0, r.jsx)(f.Tooltip, {
                    tooltipContentClassName: V.premiumWheelTooltipContent,
                    color: f.Tooltip.Colors.PRIMARY,
                    text: W.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                    children: e => (0, r.jsx)(f.TextBadge, {
                        ...e,
                        className: V.premiumWheelBadge,
                        text: (0, r.jsx)(f.NitroWheelIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: V.premiumWheel
                        })
                    })
                }),
                (0, r.jsx)('div', {
                    className: V.preview,
                    children: (0, c.EQ)(t.type).with(d.Z.PROFILE_EFFECT, () => (0, r.jsx)('div', {
                        className: V.profileEffectShopPreview,
                        children: (0, r.jsx)(S.Z, {
                            isHovering: et,
                            profileEffectId: en.id,
                            isPurchased: ed,
                            removeSetHeight: !0
                        })
                    })).with(d.Z.AVATAR_DECORATION, () => (l()(en.type === d.Z.AVATAR_DECORATION, 'ts-match already checked the type'), (0, r.jsx)('div', {
                        className: V.avatarContainer,
                        children: (0, r.jsx)(D.R, {
                            item: en,
                            user: n,
                            isPurchased: ed,
                            isHighlighted: et
                        })
                    }))).with(d.Z.BUNDLE, () => (0, r.jsx)(H.d, {
                        product: t,
                        user: n,
                        isPurchased: ed,
                        isHighlighted: et
                    })).otherwise(() => null)
                }),
                ed ? (0, r.jsx)('div', {
                    className: V.checkmarkWrapper,
                    children: (0, r.jsx)(f.CheckmarkBoldIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 38,
                        height: 38,
                        className: V.checkmark
                    })
                }) : null,
                (0, r.jsxs)('div', {
                    className: o()(V.cardText, { [V.cardTextBlur]: (null == en ? void 0 : en.type) === d.Z.PROFILE_EFFECT }),
                    children: [
                        (0, r.jsx)('div', { className: o()(V.cardBackground, ef ? V.darkCardBackground : V.lightCardBackground, (null == en ? void 0 : en.type) === d.Z.PROFILE_EFFECT ? V.cardLowOpacity : null) }),
                        (0, r.jsx)(f.Text, {
                            variant: 'text-lg/bold',
                            className: V.productName,
                            children: t.name
                        }),
                        (0, r.jsxs)('div', {
                            className: V.detailsWrapper,
                            children: [
                                (0, r.jsx)('div', {
                                    className: eu ? void 0 : V.innerBlur,
                                    children: eN()
                                }),
                                (0, r.jsx)('div', {
                                    className: V.innerHover,
                                    children: ej()
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)(M.Z, {
                    category: a,
                    className: V.limitedTimeBadge,
                    display: 'card'
                }),
                eh && !eu && !ed && (0, r.jsx)(f.TextBadge, {
                    text: W.Z.Messages.NEW,
                    disableColor: !0,
                    className: V.newBadge
                })
            ]
        })
    });
};
