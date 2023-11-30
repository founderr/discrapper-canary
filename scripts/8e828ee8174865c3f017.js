(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["12109"], {
        665484: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("77078"),
                i = s("730297"),
                n = s("806410"),
                o = s("782340"),
                r = s("576997");

            function u(e) {
                let {
                    product: t
                } = e, s = function(e) {
                    switch (!0) {
                        case null != e.items.find(i.isAvatarDecorationRecord):
                            return o.default.Messages.USER_SETTINGS_AVATAR_DECORATION;
                        case null != e.items.find(n.isProfileEffectRecord):
                            return o.default.Messages.USER_SETTINGS_PROFILE_EFFECT;
                        default:
                            return null
                    }
                }(t);
                return null === s ? null : (0, a.jsx)(l.Text, {
                    color: "always-white",
                    variant: "text-xxs/normal",
                    className: r.container,
                    children: s
                })
            }
        },
        179047: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return eu
                }
            }), s("222007");
            var a = s("37983"),
                l = s("884691"),
                i = s("65597"),
                n = s("77078"),
                o = s("54239"),
                r = s("152584"),
                u = s("812204"),
                d = s("685665"),
                c = s("606292"),
                f = s("688318"),
                E = s("692038"),
                L = s("815297"),
                C = s("574073"),
                m = s("291655"),
                I = s("946964"),
                _ = s("649844"),
                S = s("635956"),
                T = s("38766"),
                h = s("184900"),
                g = s("493390"),
                M = s("217513"),
                v = s("790618"),
                x = s("697218"),
                O = s("46829"),
                p = s("216422"),
                P = s("351825"),
                N = s("599110"),
                A = s("719923"),
                D = s("21526"),
                R = s("417313"),
                k = s("775416"),
                b = s("805172"),
                B = s("491232"),
                j = s("730297"),
                w = s("806410"),
                U = s("716120"),
                y = s("89569"),
                F = s("665484"),
                H = s("342676"),
                z = s("450492"),
                W = s("920580"),
                G = s("791309"),
                K = s("54809"),
                Y = s("408381"),
                V = s("264579"),
                X = s("57940"),
                Z = s("49111"),
                q = s("646718"),
                J = s("843455"),
                Q = s("782340"),
                $ = s("483622"),
                ee = s("53708");
            let et = n.AvatarSizes.SIZE_152,
                es = (0, c.getDecorationSizeForAvatarSize)(et),
                ea = (0, Y.getLogoSize)(18),
                el = e => {
                    let {
                        text: t
                    } = e, {
                        analyticsLocations: s
                    } = (0, d.default)(), i = l.useRef(null);
                    return (0, a.jsx)(n.Clickable, {
                        className: $.subscribeNow,
                        innerRef: i,
                        onClick: () => {
                            (0, _.default)({
                                subscriptionTier: q.PremiumSubscriptionSKUs.TIER_2,
                                analyticsLocations: s,
                                returnRef: i
                            })
                        },
                        children: t
                    })
                },
                ei = e => {
                    let {
                        product: t,
                        user: s,
                        category: u,
                        onClose: E,
                        returnRef: L
                    } = e, {
                        analyticsLocations: C
                    } = (0, d.default)(), {
                        shopForAllEnabled: m
                    } = (0, b.default)({
                        location: "CollectiblesProductPreviewInfo"
                    }), {
                        giftingEnabled: _
                    } = (0, R.default)({
                        location: "CollectiblesProductPreviewInfo"
                    }), h = A.default.canUseCollectibles(s), [M, v] = (0, i.useStateFromStoresArray)([k.default], () => [k.default.getPurchase(t.skuId), k.default.isClaiming === t.skuId]), x = (0, T.default)({
                        analyticsLocations: C
                    }), {
                        buttonColors: O,
                        backgroundColors: P
                    } = (0, X.default)(u), N = null != O ? {
                        background: (0, Y.getBackgroundGradient)(O, 90),
                        color: O.text.toHslString()
                    } : void 0, U = null != P ? {
                        background: (0, Y.getBackgroundGradient)(P, 135)
                    } : void 0, y = (0, B.isPremiumCollectiblesCategory)(u), ei = l.useMemo(() => {
                        var e;
                        return null !== (e = t.items.find(j.isAvatarDecorationRecord)) && void 0 !== e ? e : null
                    }, [t]), en = l.useMemo(() => {
                        var e;
                        return null !== (e = t.items.find(w.isProfileEffectRecord)) && void 0 !== e ? e : null
                    }, [t]), eo = null != en && null == ei, er = null != ei && null == en;
                    l.useEffect(() => (er && (0, r.setPendingAvatarDecoration)(ei), () => {
                        (0, r.setPendingAvatarDecoration)(void 0)
                    }), [er, ei]);
                    let eu = e => (0, a.jsx)(S.default, {
                            subscriptionTier: q.PremiumSubscriptionSKUs.TIER_2,
                            fullWidth: !0,
                            buttonText: e,
                            onClick: K.closeCollectiblesShopProductDetailsModal,
                            onSubscribeModalClose: () => {
                                (0, K.openCollectiblesShopProductDetailsModal)({
                                    product: t,
                                    category: u,
                                    returnRef: L,
                                    analyticsLocations: C
                                })
                            }
                        }),
                        {
                            avatarDecorationSrc: ed,
                            eventHandlers: ec
                        } = (0, f.default)({
                            user: s,
                            avatarDecorationOverride: ei,
                            size: es
                        });
                    return (0, a.jsxs)("div", {
                        className: $.collectibleInfoContainer,
                        style: U,
                        children: [(0, a.jsxs)("div", {
                            className: $.titleContainer,
                            children: [(0, a.jsx)("div", {
                                className: $.titleImageWrapper,
                                children: (0, a.jsx)("img", {
                                    className: $.titleImage,
                                    src: (0, B.getCollectiblesAssetURL)(u.logo, {
                                        size: ea
                                    }),
                                    alt: u.name
                                })
                            }), (0, a.jsx)(H.default, {
                                category: u,
                                display: "modal"
                            })]
                        }), null != ei && (0, a.jsx)("div", {
                            className: $.avatarPreviewContainer,
                            children: (0, a.jsx)(n.Avatar, {
                                ...ec,
                                "aria-label": Q.default.Messages.USER_SETTINGS_AVATAR,
                                size: et,
                                avatarDecoration: ed,
                                src: ee
                            })
                        }), (0, a.jsxs)("div", {
                            children: [(0, a.jsxs)("div", {
                                className: $.description,
                                children: [(0, a.jsx)(F.default, {
                                    product: t
                                }), (0, a.jsx)(n.Heading, {
                                    color: "always-white",
                                    variant: "heading-xl/extrabold",
                                    className: $.headingWithItemTypePill,
                                    children: t.name
                                }), (0, a.jsx)(n.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: t.summary
                                }), (() => {
                                    if (null != M) return (0, a.jsx)(n.Text, {
                                        color: "always-white",
                                        variant: "text-md/semibold",
                                        className: $.priceTag,
                                        children: Q.default.Messages.COLLECTIBLES_ALREADY_OWNED
                                    });
                                    if (y) return (0, a.jsx)(n.Text, {
                                        color: "always-white",
                                        variant: "text-md/semibold",
                                        className: $.priceTag,
                                        children: Q.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                                    });
                                    if (!_ || h) return (0, a.jsx)(W.default, {
                                        product: t,
                                        className: $.priceTag
                                    });
                                    let e = (0, B.extractPriceByPurchaseTypes)(t, Z.PriceSetAssignmentPurchaseTypes.DEFAULT);
                                    if (null == e) return null;
                                    let s = (0, B.extractPriceByPurchaseTypes)(t, Z.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2);
                                    return (0, a.jsxs)("div", {
                                        className: $.priceTagContainer,
                                        children: [(0, a.jsx)(G.default, {
                                            price: e
                                        }), null != s && (0, a.jsx)(G.default, {
                                            price: s,
                                            variant: "text-xs/medium",
                                            className: $.premiumPriceTag,
                                            renderPrice: e => Q.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format({
                                                price: e,
                                                subscribeNowHook: e => (0, a.jsx)(el, {
                                                    text: e
                                                })
                                            }),
                                            icon: (0, a.jsx)(n.Tooltip, {
                                                text: Q.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                                                "aria-label": Q.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                                                children: e => {
                                                    let {
                                                        ...t
                                                    } = e;
                                                    return (0, a.jsx)(p.default, {
                                                        ...t,
                                                        className: $.premiumPriceTagIcon,
                                                        color: "white"
                                                    })
                                                }
                                            })
                                        })]
                                    })
                                })()]
                            }), (0, a.jsxs)("div", {
                                className: $.buttonsContainer,
                                children: [(0, a.jsxs)("div", {
                                    className: $.primaryButtons,
                                    children: [m && y && !h ? eu(Q.default.Messages.UNLOCK_WITH_NITRO) : h || m ? null != M ? (0, a.jsx)(n.Button, {
                                        className: $.button,
                                        look: n.Button.Looks.FILLED,
                                        onClick: () => {
                                            E(), (0, o.popLayer)(), x(), er ? (0, c.openAvatarDecorationModal)({
                                                analyticsLocations: C,
                                                initialSelectedDecoration: null != ei ? ei : null
                                            }) : eo && (0, g.openProfileEffectModal)({
                                                analyticsLocations: C,
                                                initialSelectedEffectID: null == en ? void 0 : en.id
                                            })
                                        },
                                        children: Q.default.Messages.COLLECTIBLES_USE_NOW
                                    }) : y ? (0, a.jsx)(n.Button, {
                                        style: N,
                                        className: $.button,
                                        look: n.Button.Looks.FILLED,
                                        submitting: v,
                                        submittingStartedLabel: Q.default.Messages.COLLECTIBLES_COLLECTING,
                                        submittingFinishedLabel: Q.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                                        onClick: async () => {
                                            await (0, D.claimPremiumCollectiblesProduct)(t.skuId), E(), (0, V.default)({
                                                product: t,
                                                category: u,
                                                analyticsLocations: C
                                            })
                                        },
                                        children: Q.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                                    }) : (0, a.jsx)(n.Button, {
                                        style: N,
                                        className: $.button,
                                        look: n.Button.Looks.FILLED,
                                        onClick: () => (0, I.default)({
                                            skuId: t.skuId,
                                            analyticsLocations: C,
                                            onClose: e => e ? E() : (0, J.NOOP)()
                                        }),
                                        children: eo ? Q.default.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : Q.default.Messages.COLLECTIBLES_BUY_DECORATION
                                    }) : eu(Q.default.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA), _ && !y && (0, a.jsx)(z.default, {
                                        product: t,
                                        onSuccess: E
                                    })]
                                }), _ || !m || y || null != M || h ? null : (0, a.jsx)(S.default, {
                                    subscriptionTier: q.PremiumSubscriptionSKUs.TIER_2,
                                    fullWidth: !0,
                                    color: n.Button.Colors.WHITE,
                                    look: n.Button.Looks.OUTLINED,
                                    buttonText: A.default.isPremium(s) ? Q.default.Messages.COLLECTIBLES_UPGRADE_FOR_DISCOUNT : Q.default.Messages.COLLECTIBLES_SFA_UNLOCK_DISCOUNT,
                                    className: $.unlockDiscountButton,
                                    onlyShineOnHover: !0,
                                    onClick: K.closeCollectiblesShopProductDetailsModal,
                                    onSubscribeModalClose: () => {
                                        (0, K.openCollectiblesShopProductDetailsModal)({
                                            product: t,
                                            category: u,
                                            returnRef: L,
                                            analyticsLocations: C
                                        })
                                    }
                                })]
                            }), (0, a.jsx)(n.Text, {
                                color: "none",
                                className: $.disclaimer,
                                variant: "text-xxs/normal",
                                children: null != M ? null : h || m ? y ? Q.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : eo ? Q.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : Q.default.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER : eo ? Q.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECTS_NON_PREMIUM_PURCHASE_DISCLAIMER : Q.default.Messages.COLLECTIBLES_DETAILS_MODAL_NON_PREMIUM_PURCHASE_DISCLAIMER
                            })]
                        })]
                    })
                },
                en = e => {
                    let {
                        product: t,
                        user: s
                    } = e, n = A.default.canUsePremiumProfileCustomization(s), o = (0, i.useStateFromStoresObject)([v.default], () => v.default.getAllPending()), r = (0, M.default)(s.id), u = !!(null == r ? void 0 : r.getPreviewBio(o.pendingBio).value), d = l.useMemo(() => {
                        var e;
                        return null !== (e = t.items.find(j.isAvatarDecorationRecord)) && void 0 !== e ? e : null
                    }, [t]), c = l.useMemo(() => t.items.find(w.isProfileEffectRecord), [t]);
                    return (0, a.jsxs)("div", {
                        className: null != d ? $.previewsContainerInner : $.profileEffectPreviewsContainerInner,
                        children: [(0, a.jsx)(h.default, {
                            ...o,
                            user: s,
                            canUsePremiumCustomization: n,
                            onAvatarChange: J.NOOP,
                            onBannerChange: J.NOOP,
                            bodyClassName: $.profileCustomizationBody,
                            pendingAvatarDecoration: null != d ? d : void 0,
                            pendingProfileEffectID: null == c ? void 0 : c.id,
                            forProfileEffectModal: null != c,
                            disabledInputs: !0,
                            hideExampleButton: !0,
                            hideFakeActivity: null != d || u,
                            hideBioSection: null != d
                        }), null != d && (0, a.jsx)(er, {
                            user: s
                        })]
                    })
                },
                eo = e => {
                    let {
                        author: t
                    } = e, s = (0, E.createMessageRecord)({
                        ...(0, L.default)({
                            author: t,
                            channelId: "1337",
                            content: Q.default.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
                        }),
                        state: Z.MessageStates.SENT,
                        id: "0"
                    });
                    return s
                },
                er = e => {
                    let {
                        user: t
                    } = e, s = eo({
                        author: t
                    });
                    return (0, a.jsx)(n.FocusBlock, {
                        children: (0, a.jsxs)(n.Card, {
                            className: $.chatPreview,
                            outline: !0,
                            "aria-hidden": !0,
                            children: [(0, a.jsx)(m.default, {
                                className: $.mockMessage,
                                author: (0, C.getMessageAuthor)(s),
                                message: s
                            }, s.id), (0, a.jsxs)("div", {
                                className: $.mockInput,
                                children: [(0, a.jsx)(P.default, {
                                    className: $.mockInputButton,
                                    width: 24,
                                    height: 24
                                }), (0, a.jsx)(O.default, {
                                    className: $.mockInputButton,
                                    width: 24,
                                    height: 24
                                })]
                            })]
                        })
                    })
                };
            var eu = e => {
                let {
                    transitionState: t,
                    onClose: s,
                    product: o,
                    category: r,
                    returnRef: c,
                    analyticsSource: f,
                    analyticsLocations: E
                } = e, L = (0, i.default)([x.default], () => x.default.getCurrentUser()), {
                    analyticsLocations: C,
                    AnalyticsLocationProvider: m
                } = (0, d.default)([...E, u.default.COLLECTIBLES_SHOP_DETAILS_MODAL]);
                (0, y.useProductDetailsLinkableRoute)(o);
                let I = l.useMemo(() => o.items.find(j.isAvatarDecorationRecord), [o]);
                return (l.useEffect(() => {
                    N.default.track(Z.AnalyticEvents.OPEN_MODAL, {
                        type: Z.AnalyticsSections.COLLECTIBLES_SHOP_DETAILS_MODAL,
                        source: f,
                        location_stack: C,
                        sku_id: o.skuId,
                        product_type: null != I ? "avatar decoration" : "profile effect"
                    }), o.items.map(D.productDetailsOpened)
                }, [f, C, o.skuId, o.items, I]), null == L) ? null : (0, a.jsx)(m, {
                    children: (0, a.jsx)(n.ModalRoot, {
                        hideShadow: !0,
                        className: $.modalRoot,
                        returnRef: c,
                        transitionState: t,
                        size: n.ModalSize.DYNAMIC,
                        children: (0, a.jsxs)(n.ModalContent, {
                            className: $.modalContent,
                            children: [(0, a.jsx)(ei, {
                                user: L,
                                product: o,
                                category: r,
                                onClose: s
                            }), (0, a.jsxs)("div", {
                                className: null != I ? $.collectiblePreviewsContainerWithChat : $.collectiblePreviewsContainerNoChat,
                                children: [(0, a.jsx)(U.default, {
                                    asset: r.banner,
                                    size: 540,
                                    className: $.categoryBanner
                                }), (0, a.jsx)(en, {
                                    user: L,
                                    product: o
                                })]
                            }), (0, a.jsx)(n.ModalCloseButton, {
                                onClick: s,
                                className: $.modalCloseButton,
                                withCircleBackground: !0
                            })]
                        })
                    })
                })
            }
        },
        291655: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            });
            var a = s("37983"),
                l = s("884691"),
                i = s("414456"),
                n = s.n(i),
                o = s("193865"),
                r = s("780571"),
                u = s("39331"),
                d = s("596368"),
                c = s("227439"),
                f = s("877671"),
                E = l.memo(function(e) {
                    var t, s, l;
                    let {
                        message: i,
                        channel: E,
                        compact: L,
                        className: C,
                        isGroupStart: m,
                        hideSimpleEmbedContent: I = !0,
                        disableInteraction: _
                    } = e, S = (0, o.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = i.editedTimestamp) && void 0 !== t ? t : i.timestamp).valueOf()), T = (0, o.useShowImprovedMarkdownGuildExperimentConfig)(null !== (s = null == E ? void 0 : E.guild_id) && void 0 !== s ? s : "", (null !== (l = i.editedTimestamp) && void 0 !== l ? l : i.timestamp).valueOf()), {
                        content: h
                    } = (0, u.default)(i, {
                        hideSimpleEmbedContent: I,
                        allowList: S.showListsAndHeaders || T.showListsAndHeaders,
                        allowHeading: S.showListsAndHeaders || T.showListsAndHeaders,
                        allowLinks: S.showMaskedLinks || T.showMaskedLinks,
                        previewLinkTarget: S.showMaskedLinks || T.showMaskedLinks
                    });
                    return (0, a.jsx)(r.default, {
                        compact: L,
                        className: n(C, {
                            [f.message]: !0,
                            [f.cozyMessage]: !L,
                            [f.groupStart]: m
                        }),
                        childrenHeader: (0, c.default)({
                            ...e,
                            channel: E,
                            guildId: void 0
                        }),
                        childrenMessageContent: (0, d.default)(e, h),
                        disableInteraction: _
                    })
                })
        }
    }
]);