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
                    return ef
                }
            }), s("222007");
            var a = s("37983"),
                l = s("884691"),
                i = s("414456"),
                n = s.n(i),
                o = s("635058"),
                r = s("65597"),
                u = s("77078"),
                d = s("54239"),
                c = s("152584"),
                f = s("812204"),
                E = s("685665"),
                C = s("606292"),
                L = s("688318"),
                m = s("692038"),
                I = s("815297"),
                _ = s("574073"),
                S = s("291655"),
                T = s("946964"),
                g = s("649844"),
                h = s("635956"),
                M = s("38766"),
                v = s("184900"),
                x = s("493390"),
                O = s("217513"),
                p = s("790618"),
                P = s("697218"),
                N = s("46829"),
                A = s("216422"),
                D = s("351825"),
                R = s("599110"),
                k = s("719923"),
                b = s("21526"),
                B = s("417313"),
                j = s("775416"),
                w = s("805172"),
                U = s("491232"),
                y = s("730297"),
                F = s("806410"),
                H = s("716120"),
                z = s("89569"),
                W = s("665484"),
                G = s("342676"),
                K = s("450492"),
                Y = s("920580"),
                V = s("791309"),
                X = s("54809"),
                Z = s("408381"),
                q = s("264579"),
                J = s("57940"),
                Q = s("49111"),
                $ = s("646718"),
                ee = s("843455"),
                et = s("782340"),
                es = s("483622"),
                ea = s("53708");
            let el = u.AvatarSizes.SIZE_152,
                ei = (0, C.getDecorationSizeForAvatarSize)(el),
                en = (0, Z.getLogoSize)(18),
                eo = e => {
                    let {
                        text: t
                    } = e, {
                        analyticsLocations: s
                    } = (0, E.default)(), i = l.useRef(null);
                    return (0, a.jsx)(u.Clickable, {
                        className: es.subscribeNow,
                        innerRef: i,
                        onClick: () => {
                            (0, g.default)({
                                subscriptionTier: $.PremiumSubscriptionSKUs.TIER_2,
                                analyticsLocations: s,
                                returnRef: i
                            })
                        },
                        children: t
                    })
                },
                er = e => {
                    let {
                        product: t,
                        user: s,
                        category: i,
                        onClose: n,
                        returnRef: o
                    } = e, {
                        analyticsLocations: f
                    } = (0, E.default)(), {
                        shopForAllEnabled: m
                    } = (0, w.default)({
                        location: "CollectiblesProductPreviewInfo"
                    }), {
                        giftingEnabled: I
                    } = (0, B.default)({
                        location: "CollectiblesProductPreviewInfo"
                    }), _ = k.default.canUseCollectibles(s), [S, g] = (0, r.useStateFromStoresArray)([j.default], () => [j.default.getPurchase(t.skuId), j.default.isClaiming === t.skuId]), v = (0, M.default)({
                        analyticsLocations: f
                    }), {
                        buttonColors: O,
                        backgroundColors: p
                    } = (0, J.default)(i), P = null != O ? {
                        background: (0, Z.getBackgroundGradient)(O, 90),
                        color: O.text.toHslString()
                    } : void 0, N = null != p ? {
                        background: (0, Z.getBackgroundGradient)(p, 135)
                    } : void 0, D = (0, U.isPremiumCollectiblesCategory)(i), R = l.useMemo(() => {
                        var e;
                        return null !== (e = t.items.find(y.isAvatarDecorationRecord)) && void 0 !== e ? e : null
                    }, [t]), H = l.useMemo(() => {
                        var e;
                        return null !== (e = t.items.find(F.isProfileEffectRecord)) && void 0 !== e ? e : null
                    }, [t]), z = null != H && null == R, er = null != R && null == H;
                    l.useEffect(() => (er && (0, c.setPendingAvatarDecoration)(R), () => {
                        (0, c.setPendingAvatarDecoration)(void 0)
                    }), [er, R]);
                    let eu = e => (0, a.jsx)(h.default, {
                            subscriptionTier: $.PremiumSubscriptionSKUs.TIER_2,
                            fullWidth: !0,
                            buttonText: e,
                            onClick: X.closeCollectiblesShopProductDetailsModal,
                            onSubscribeModalClose: () => {
                                (0, X.openCollectiblesShopProductDetailsModal)({
                                    product: t,
                                    category: i,
                                    returnRef: o,
                                    analyticsLocations: f
                                })
                            }
                        }),
                        {
                            avatarDecorationSrc: ed,
                            eventHandlers: ec
                        } = (0, L.default)({
                            user: s,
                            avatarDecorationOverride: R,
                            size: ei
                        });
                    return (0, a.jsxs)("div", {
                        className: es.collectibleInfoContainer,
                        style: N,
                        children: [(0, a.jsxs)("div", {
                            className: es.titleContainer,
                            children: [(0, a.jsx)("div", {
                                className: es.titleImageWrapper,
                                children: (0, a.jsx)("img", {
                                    className: es.titleImage,
                                    src: (0, U.getCollectiblesAssetURL)(i.logo, {
                                        size: en
                                    }),
                                    alt: i.name
                                })
                            }), (0, a.jsx)(G.default, {
                                category: i,
                                display: "modal"
                            })]
                        }), null != R && (0, a.jsx)("div", {
                            className: es.avatarPreviewContainer,
                            children: (0, a.jsx)(u.Avatar, {
                                ...ec,
                                "aria-label": et.default.Messages.USER_SETTINGS_AVATAR,
                                size: el,
                                avatarDecoration: ed,
                                src: ea
                            })
                        }), (0, a.jsxs)("div", {
                            children: [(0, a.jsxs)("div", {
                                className: es.description,
                                children: [(0, a.jsx)(W.default, {
                                    product: t
                                }), (0, a.jsx)(u.Heading, {
                                    color: "always-white",
                                    variant: "heading-xl/extrabold",
                                    className: es.headingWithItemTypePill,
                                    children: t.name
                                }), (0, a.jsx)(u.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: t.summary
                                }), (() => {
                                    if (null != S) return (0, a.jsx)(u.Text, {
                                        color: "always-white",
                                        variant: "text-md/semibold",
                                        className: es.priceTag,
                                        children: et.default.Messages.COLLECTIBLES_ALREADY_OWNED
                                    });
                                    if (D) return (0, a.jsx)(u.Text, {
                                        color: "always-white",
                                        variant: "text-md/semibold",
                                        className: es.priceTag,
                                        children: et.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                                    });
                                    if (!I || _) return (0, a.jsx)(Y.default, {
                                        product: t,
                                        className: es.priceTag
                                    });
                                    let e = (0, U.extractPriceByPurchaseTypes)(t, Q.PriceSetAssignmentPurchaseTypes.DEFAULT);
                                    if (null == e) return null;
                                    let s = (0, U.extractPriceByPurchaseTypes)(t, Q.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2);
                                    return (0, a.jsxs)("div", {
                                        className: es.priceTagContainer,
                                        children: [(0, a.jsx)(V.default, {
                                            price: e
                                        }), null != s && (0, a.jsx)(V.default, {
                                            price: s,
                                            variant: "text-xs/medium",
                                            className: es.premiumPriceTag,
                                            renderPrice: e => et.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format({
                                                price: e,
                                                subscribeNowHook: e => (0, a.jsx)(eo, {
                                                    text: e
                                                })
                                            }),
                                            icon: (0, a.jsx)(u.Tooltip, {
                                                text: et.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                                                "aria-label": et.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                                                children: e => {
                                                    let {
                                                        ...t
                                                    } = e;
                                                    return (0, a.jsx)(A.default, {
                                                        ...t,
                                                        className: es.premiumPriceTagIcon,
                                                        color: "white"
                                                    })
                                                }
                                            })
                                        })]
                                    })
                                })()]
                            }), (0, a.jsxs)("div", {
                                className: es.buttonsContainer,
                                children: [(0, a.jsxs)("div", {
                                    className: es.primaryButtons,
                                    children: [m && D && !_ ? eu(et.default.Messages.UNLOCK_WITH_NITRO) : _ || m ? null != S ? (0, a.jsx)(u.Button, {
                                        className: es.button,
                                        look: u.Button.Looks.FILLED,
                                        onClick: () => {
                                            n(), (0, d.popLayer)(), v(), er ? (0, C.openAvatarDecorationModal)({
                                                analyticsLocations: f,
                                                initialSelectedDecoration: null != R ? R : null
                                            }) : z && (0, x.openProfileEffectModal)({
                                                analyticsLocations: f,
                                                initialSelectedEffectID: null == H ? void 0 : H.id
                                            })
                                        },
                                        children: et.default.Messages.COLLECTIBLES_USE_NOW
                                    }) : D ? (0, a.jsx)(u.Button, {
                                        style: P,
                                        className: es.button,
                                        look: u.Button.Looks.FILLED,
                                        submitting: g,
                                        submittingStartedLabel: et.default.Messages.COLLECTIBLES_COLLECTING,
                                        submittingFinishedLabel: et.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                                        onClick: async () => {
                                            await (0, b.claimPremiumCollectiblesProduct)(t.skuId), n(), (0, q.default)({
                                                product: t,
                                                category: i,
                                                analyticsLocations: f
                                            })
                                        },
                                        children: et.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                                    }) : (0, a.jsx)(u.Button, {
                                        style: P,
                                        className: es.button,
                                        look: u.Button.Looks.FILLED,
                                        onClick: () => (0, T.default)({
                                            skuId: t.skuId,
                                            analyticsLocations: f,
                                            onClose: e => e ? n() : (0, ee.NOOP)()
                                        }),
                                        children: z ? et.default.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : et.default.Messages.COLLECTIBLES_BUY_DECORATION
                                    }) : eu(et.default.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA), I && !D && (0, a.jsx)(K.default, {
                                        product: t,
                                        onSuccess: n
                                    })]
                                }), I || !m || D || null != S || _ ? null : (0, a.jsx)(h.default, {
                                    subscriptionTier: $.PremiumSubscriptionSKUs.TIER_2,
                                    fullWidth: !0,
                                    color: u.Button.Colors.WHITE,
                                    look: u.Button.Looks.OUTLINED,
                                    buttonText: k.default.isPremium(s) ? et.default.Messages.COLLECTIBLES_UPGRADE_FOR_DISCOUNT : et.default.Messages.COLLECTIBLES_SFA_UNLOCK_DISCOUNT,
                                    className: es.unlockDiscountButton,
                                    onlyShineOnHover: !0,
                                    onClick: X.closeCollectiblesShopProductDetailsModal,
                                    onSubscribeModalClose: () => {
                                        (0, X.openCollectiblesShopProductDetailsModal)({
                                            product: t,
                                            category: i,
                                            returnRef: o,
                                            analyticsLocations: f
                                        })
                                    }
                                })]
                            }), (0, a.jsx)(u.Text, {
                                color: "none",
                                className: es.disclaimer,
                                variant: "text-xxs/normal",
                                children: null != S ? null : _ || m ? D ? et.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : z ? et.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : et.default.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER : z ? et.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECTS_NON_PREMIUM_PURCHASE_DISCLAIMER : et.default.Messages.COLLECTIBLES_DETAILS_MODAL_NON_PREMIUM_PURCHASE_DISCLAIMER
                            })]
                        })]
                    })
                },
                eu = e => {
                    let {
                        product: t,
                        user: s
                    } = e, i = k.default.canUsePremiumProfileCustomization(s), n = (0, r.useStateFromStoresObject)([p.default], () => p.default.getAllPending()), o = (0, O.default)(s.id), u = !!(null == o ? void 0 : o.getPreviewBio(n.pendingBio).value), d = l.useMemo(() => {
                        var e;
                        return null !== (e = t.items.find(y.isAvatarDecorationRecord)) && void 0 !== e ? e : null
                    }, [t]), c = l.useMemo(() => t.items.find(F.isProfileEffectRecord), [t]);
                    return (0, a.jsxs)("div", {
                        className: null != d ? es.previewsContainerInner : es.profileEffectPreviewsContainerInner,
                        children: [(0, a.jsx)(v.default, {
                            ...n,
                            user: s,
                            canUsePremiumCustomization: i,
                            onAvatarChange: ee.NOOP,
                            onBannerChange: ee.NOOP,
                            bodyClassName: es.profileCustomizationBody,
                            pendingAvatarDecoration: null != d ? d : void 0,
                            pendingProfileEffectID: null == c ? void 0 : c.id,
                            forProfileEffectModal: null != c,
                            disabledInputs: !0,
                            hideExampleButton: !0,
                            hideFakeActivity: null != d || u,
                            hideBioSection: null != d
                        }), null != d && (0, a.jsx)(ec, {
                            user: s
                        })]
                    })
                },
                ed = e => {
                    let {
                        author: t
                    } = e, s = (0, m.createMessageRecord)({
                        ...(0, I.default)({
                            author: t,
                            channelId: "1337",
                            content: et.default.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
                        }),
                        state: Q.MessageStates.SENT,
                        id: "0"
                    });
                    return s
                },
                ec = e => {
                    let {
                        user: t
                    } = e, s = ed({
                        author: t
                    });
                    return (0, a.jsx)(u.FocusBlock, {
                        children: (0, a.jsxs)(u.Card, {
                            className: es.chatPreview,
                            outline: !0,
                            "aria-hidden": !0,
                            children: [(0, a.jsx)(S.default, {
                                className: es.mockMessage,
                                author: (0, _.getMessageAuthor)(s),
                                message: s
                            }, s.id), (0, a.jsxs)("div", {
                                className: es.mockInput,
                                children: [(0, a.jsx)(D.default, {
                                    className: es.mockInputButton,
                                    width: 24,
                                    height: 24
                                }), (0, a.jsx)(N.default, {
                                    className: es.mockInputButton,
                                    width: 24,
                                    height: 24
                                })]
                            })]
                        })
                    })
                };
            var ef = e => {
                let {
                    transitionState: t,
                    onClose: s,
                    product: i,
                    category: d,
                    returnRef: c,
                    analyticsSource: C,
                    analyticsLocations: L
                } = e, m = (0, r.default)([P.default], () => P.default.getCurrentUser()), {
                    analyticsLocations: I,
                    AnalyticsLocationProvider: _
                } = (0, E.default)([...L, f.default.COLLECTIBLES_SHOP_DETAILS_MODAL]);
                (0, z.useProductDetailsLinkableRoute)(i);
                let S = l.useMemo(() => i.items.find(y.isAvatarDecorationRecord), [i]),
                    T = d.skuId === o.CollectiblesCategorySkuId.WINTER;
                return (l.useEffect(() => {
                    R.default.track(Q.AnalyticEvents.OPEN_MODAL, {
                        type: Q.AnalyticsSections.COLLECTIBLES_SHOP_DETAILS_MODAL,
                        source: C,
                        location_stack: I,
                        sku_id: i.skuId,
                        product_type: null != S ? "avatar decoration" : "profile effect"
                    }), i.items.map(b.productDetailsOpened)
                }, [C, I, i.skuId, i.items, S]), null == m) ? null : (0, a.jsx)(_, {
                    children: (0, a.jsx)(u.ModalRoot, {
                        hideShadow: !0,
                        className: es.modalRoot,
                        returnRef: c,
                        transitionState: t,
                        size: u.ModalSize.DYNAMIC,
                        children: (0, a.jsxs)(u.ModalContent, {
                            className: es.modalContent,
                            children: [(0, a.jsx)(er, {
                                user: m,
                                product: i,
                                category: d,
                                onClose: s
                            }), (0, a.jsxs)("div", {
                                className: null != S ? es.collectiblePreviewsContainerWithChat : es.collectiblePreviewsContainerNoChat,
                                children: [(0, a.jsx)(H.default, {
                                    asset: d.banner,
                                    size: 540,
                                    className: n(T ? es.winterCategoryBanner : es.categoryBanner)
                                }), (0, a.jsx)(eu, {
                                    user: m,
                                    product: i
                                })]
                            }), (0, a.jsx)(u.ModalCloseButton, {
                                onClick: s,
                                className: es.modalCloseButton,
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
                        compact: C,
                        className: L,
                        isGroupStart: m,
                        hideSimpleEmbedContent: I = !0,
                        disableInteraction: _
                    } = e, S = (0, o.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = i.editedTimestamp) && void 0 !== t ? t : i.timestamp).valueOf()), T = (0, o.useShowImprovedMarkdownGuildExperimentConfig)(null !== (s = null == E ? void 0 : E.guild_id) && void 0 !== s ? s : "", (null !== (l = i.editedTimestamp) && void 0 !== l ? l : i.timestamp).valueOf()), {
                        content: g
                    } = (0, u.default)(i, {
                        hideSimpleEmbedContent: I,
                        allowList: S.showListsAndHeaders || T.showListsAndHeaders,
                        allowHeading: S.showListsAndHeaders || T.showListsAndHeaders,
                        allowLinks: S.showMaskedLinks || T.showMaskedLinks,
                        previewLinkTarget: S.showMaskedLinks || T.showMaskedLinks
                    });
                    return (0, a.jsx)(r.default, {
                        compact: C,
                        className: n(L, {
                            [f.message]: !0,
                            [f.cozyMessage]: !C,
                            [f.groupStart]: m
                        }),
                        childrenHeader: (0, c.default)({
                            ...e,
                            channel: E,
                            guildId: void 0
                        }),
                        childrenMessageContent: (0, d.default)(e, g),
                        disableInteraction: _
                    })
                })
        }
    }
]);