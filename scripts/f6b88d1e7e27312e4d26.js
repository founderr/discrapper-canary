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
                    return ed
                }
            }), s("222007");
            var a = s("37983"),
                l = s("884691"),
                i = s("635058"),
                n = s("65597"),
                o = s("77078"),
                r = s("54239"),
                u = s("152584"),
                d = s("812204"),
                c = s("685665"),
                f = s("606292"),
                E = s("688318"),
                C = s("692038"),
                L = s("815297"),
                m = s("574073"),
                I = s("291655"),
                _ = s("946964"),
                S = s("649844"),
                T = s("635956"),
                h = s("38766"),
                g = s("184900"),
                M = s("493390"),
                v = s("217513"),
                x = s("790618"),
                O = s("697218"),
                P = s("46829"),
                p = s("216422"),
                N = s("351825"),
                A = s("599110"),
                D = s("719923"),
                R = s("21526"),
                k = s("417313"),
                b = s("775416"),
                B = s("805172"),
                j = s("491232"),
                w = s("730297"),
                U = s("806410"),
                y = s("716120"),
                F = s("89569"),
                H = s("665484"),
                z = s("342676"),
                W = s("450492"),
                G = s("920580"),
                K = s("791309"),
                Y = s("54809"),
                V = s("408381"),
                X = s("264579"),
                Z = s("57940"),
                q = s("49111"),
                J = s("646718"),
                Q = s("843455"),
                $ = s("782340"),
                ee = s("483622"),
                et = s("53708");
            let es = o.AvatarSizes.SIZE_152,
                ea = (0, f.getDecorationSizeForAvatarSize)(es),
                el = (0, V.getLogoSize)(18),
                ei = e => {
                    let {
                        text: t
                    } = e, {
                        analyticsLocations: s
                    } = (0, c.default)(), i = l.useRef(null);
                    return (0, a.jsx)(o.Clickable, {
                        className: ee.subscribeNow,
                        innerRef: i,
                        onClick: () => {
                            (0, S.default)({
                                subscriptionTier: J.PremiumSubscriptionSKUs.TIER_2,
                                analyticsLocations: s,
                                returnRef: i
                            })
                        },
                        children: t
                    })
                },
                en = e => {
                    let {
                        product: t,
                        user: s,
                        category: d,
                        onClose: C,
                        returnRef: L
                    } = e, {
                        analyticsLocations: m
                    } = (0, c.default)(), {
                        shopForAllEnabled: I
                    } = (0, B.default)({
                        location: "CollectiblesProductPreviewInfo"
                    }), {
                        giftingEnabled: S
                    } = (0, k.default)({
                        location: "CollectiblesProductPreviewInfo"
                    }), g = D.default.canUseCollectibles(s), [v, x] = (0, n.useStateFromStoresArray)([b.default], () => [b.default.getPurchase(t.skuId), b.default.isClaiming === t.skuId]), O = (0, h.default)({
                        analyticsLocations: m
                    }), {
                        buttonColors: P,
                        backgroundColors: N
                    } = (0, Z.default)(d), A = null != P ? {
                        background: (0, V.getBackgroundGradient)(P, 90),
                        color: P.text.toHslString()
                    } : void 0, y = null != N ? {
                        background: (0, V.getBackgroundGradient)(N, 135)
                    } : void 0, F = (0, j.isPremiumCollectiblesCategory)(d), en = l.useMemo(() => {
                        var e;
                        return null !== (e = t.items.find(w.isAvatarDecorationRecord)) && void 0 !== e ? e : null
                    }, [t]), eo = l.useMemo(() => {
                        var e;
                        return null !== (e = t.items.find(U.isProfileEffectRecord)) && void 0 !== e ? e : null
                    }, [t]), er = null != eo && null == en, eu = null != en && null == eo;
                    l.useEffect(() => (eu && (0, u.setPendingAvatarDecoration)(en), () => {
                        (0, u.setPendingAvatarDecoration)(void 0)
                    }), [eu, en]);
                    let ed = e => (0, a.jsx)(T.default, {
                            subscriptionTier: J.PremiumSubscriptionSKUs.TIER_2,
                            fullWidth: !0,
                            buttonText: e,
                            onClick: Y.closeCollectiblesShopProductDetailsModal,
                            onSubscribeModalClose: () => {
                                (0, Y.openCollectiblesShopProductDetailsModal)({
                                    product: t,
                                    category: d,
                                    returnRef: L,
                                    analyticsLocations: m
                                })
                            }
                        }),
                        {
                            avatarDecorationSrc: ec,
                            eventHandlers: ef
                        } = (0, E.default)({
                            user: s,
                            avatarDecorationOverride: en,
                            size: ea
                        });
                    return (0, a.jsxs)("div", {
                        className: ee.collectibleInfoContainer,
                        style: y,
                        children: [(0, a.jsxs)("div", {
                            className: ee.titleContainer,
                            children: [(0, a.jsx)("div", {
                                children: (0, a.jsx)("img", {
                                    className: d.skuId === i.CollectiblesCategorySkuId.WINTER ? ee.winterTitleImage : ee.titleImage,
                                    src: (0, j.getCollectiblesAssetURL)(d.logo, {
                                        size: el
                                    }),
                                    alt: d.name
                                })
                            }), (0, a.jsx)(z.default, {
                                category: d,
                                display: "modal"
                            })]
                        }), null != en && (0, a.jsx)("div", {
                            className: ee.avatarPreviewContainer,
                            children: (0, a.jsx)(o.Avatar, {
                                ...ef,
                                "aria-label": $.default.Messages.USER_SETTINGS_AVATAR,
                                size: es,
                                avatarDecoration: ec,
                                src: et
                            })
                        }), (0, a.jsxs)("div", {
                            children: [(0, a.jsxs)("div", {
                                className: ee.description,
                                children: [(0, a.jsx)(H.default, {
                                    product: t
                                }), (0, a.jsx)(o.Heading, {
                                    color: "always-white",
                                    variant: "heading-xl/extrabold",
                                    className: ee.headingWithItemTypePill,
                                    children: t.name
                                }), (0, a.jsx)(o.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: t.summary
                                }), (() => {
                                    if (null != v) return (0, a.jsx)(o.Text, {
                                        color: "always-white",
                                        variant: "text-md/semibold",
                                        className: ee.priceTag,
                                        children: $.default.Messages.COLLECTIBLES_ALREADY_OWNED
                                    });
                                    if (F) return (0, a.jsx)(o.Text, {
                                        color: "always-white",
                                        variant: "text-md/semibold",
                                        className: ee.priceTag,
                                        children: $.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                                    });
                                    if (!S || g) return (0, a.jsx)(G.default, {
                                        product: t,
                                        className: ee.priceTag
                                    });
                                    let e = (0, j.extractPriceByPurchaseTypes)(t, q.PriceSetAssignmentPurchaseTypes.DEFAULT);
                                    if (null == e) return null;
                                    let s = (0, j.extractPriceByPurchaseTypes)(t, q.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2);
                                    return (0, a.jsxs)("div", {
                                        className: ee.priceTagContainer,
                                        children: [(0, a.jsx)(K.default, {
                                            price: e
                                        }), null != s && (0, a.jsx)(K.default, {
                                            price: s,
                                            variant: "text-xs/medium",
                                            className: ee.premiumPriceTag,
                                            renderPrice: e => $.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format({
                                                price: e,
                                                subscribeNowHook: e => (0, a.jsx)(ei, {
                                                    text: e
                                                })
                                            }),
                                            icon: (0, a.jsx)(o.Tooltip, {
                                                text: $.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                                                "aria-label": $.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                                                children: e => {
                                                    let {
                                                        ...t
                                                    } = e;
                                                    return (0, a.jsx)(p.default, {
                                                        ...t,
                                                        className: ee.premiumPriceTagIcon,
                                                        color: "white"
                                                    })
                                                }
                                            })
                                        })]
                                    })
                                })()]
                            }), (0, a.jsxs)("div", {
                                className: ee.buttonsContainer,
                                children: [(0, a.jsxs)("div", {
                                    className: ee.primaryButtons,
                                    children: [I && F && !g ? ed($.default.Messages.UNLOCK_WITH_NITRO) : g || I ? null != v ? (0, a.jsx)(o.Button, {
                                        className: ee.button,
                                        look: o.Button.Looks.FILLED,
                                        onClick: () => {
                                            C(), (0, r.popLayer)(), O(), eu ? (0, f.openAvatarDecorationModal)({
                                                analyticsLocations: m,
                                                initialSelectedDecoration: null != en ? en : null
                                            }) : er && (0, M.openProfileEffectModal)({
                                                analyticsLocations: m,
                                                initialSelectedEffectID: null == eo ? void 0 : eo.id
                                            })
                                        },
                                        children: $.default.Messages.COLLECTIBLES_USE_NOW
                                    }) : F ? (0, a.jsx)(o.Button, {
                                        style: A,
                                        className: ee.button,
                                        look: o.Button.Looks.FILLED,
                                        submitting: x,
                                        submittingStartedLabel: $.default.Messages.COLLECTIBLES_COLLECTING,
                                        submittingFinishedLabel: $.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                                        onClick: async () => {
                                            await (0, R.claimPremiumCollectiblesProduct)(t.skuId), C(), (0, X.default)({
                                                product: t,
                                                category: d,
                                                analyticsLocations: m
                                            })
                                        },
                                        children: $.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                                    }) : (0, a.jsx)(o.Button, {
                                        style: A,
                                        className: ee.button,
                                        look: o.Button.Looks.FILLED,
                                        onClick: () => (0, _.default)({
                                            skuId: t.skuId,
                                            analyticsLocations: m,
                                            onClose: e => e ? C() : (0, Q.NOOP)()
                                        }),
                                        children: er ? $.default.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : $.default.Messages.COLLECTIBLES_BUY_DECORATION
                                    }) : ed($.default.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA), S && !F && (0, a.jsx)(W.default, {
                                        product: t,
                                        onSuccess: C
                                    })]
                                }), S || !I || F || null != v || g ? null : (0, a.jsx)(T.default, {
                                    subscriptionTier: J.PremiumSubscriptionSKUs.TIER_2,
                                    fullWidth: !0,
                                    color: o.Button.Colors.WHITE,
                                    look: o.Button.Looks.OUTLINED,
                                    buttonText: D.default.isPremium(s) ? $.default.Messages.COLLECTIBLES_UPGRADE_FOR_DISCOUNT : $.default.Messages.COLLECTIBLES_SFA_UNLOCK_DISCOUNT,
                                    className: ee.unlockDiscountButton,
                                    onlyShineOnHover: !0,
                                    onClick: Y.closeCollectiblesShopProductDetailsModal,
                                    onSubscribeModalClose: () => {
                                        (0, Y.openCollectiblesShopProductDetailsModal)({
                                            product: t,
                                            category: d,
                                            returnRef: L,
                                            analyticsLocations: m
                                        })
                                    }
                                })]
                            }), (0, a.jsx)(o.Text, {
                                color: "none",
                                className: ee.disclaimer,
                                variant: "text-xxs/normal",
                                children: null != v ? null : g || I ? F ? $.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : er ? $.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : $.default.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER : er ? $.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECTS_NON_PREMIUM_PURCHASE_DISCLAIMER : $.default.Messages.COLLECTIBLES_DETAILS_MODAL_NON_PREMIUM_PURCHASE_DISCLAIMER
                            })]
                        })]
                    })
                },
                eo = e => {
                    let {
                        product: t,
                        user: s
                    } = e, i = D.default.canUsePremiumProfileCustomization(s), o = (0, n.useStateFromStoresObject)([x.default], () => x.default.getAllPending()), r = (0, v.default)(s.id), u = !!(null == r ? void 0 : r.getPreviewBio(o.pendingBio).value), d = l.useMemo(() => {
                        var e;
                        return null !== (e = t.items.find(w.isAvatarDecorationRecord)) && void 0 !== e ? e : null
                    }, [t]), c = l.useMemo(() => t.items.find(U.isProfileEffectRecord), [t]);
                    return (0, a.jsxs)("div", {
                        className: null != d ? ee.previewsContainerInner : ee.profileEffectPreviewsContainerInner,
                        children: [(0, a.jsx)(g.default, {
                            ...o,
                            user: s,
                            canUsePremiumCustomization: i,
                            onAvatarChange: Q.NOOP,
                            onBannerChange: Q.NOOP,
                            bodyClassName: ee.profileCustomizationBody,
                            pendingAvatarDecoration: null != d ? d : void 0,
                            pendingProfileEffectID: null == c ? void 0 : c.id,
                            forProfileEffectModal: null != c,
                            disabledInputs: !0,
                            hideExampleButton: !0,
                            hideFakeActivity: null != d || u,
                            hideBioSection: null != d,
                            hideMemberStatusSection: null != d,
                            useLargeBanner: !0
                        }), null != d && (0, a.jsx)(eu, {
                            user: s
                        })]
                    })
                },
                er = e => {
                    let {
                        author: t
                    } = e, s = (0, C.createMessageRecord)({
                        ...(0, L.default)({
                            author: t,
                            channelId: "1337",
                            content: $.default.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
                        }),
                        state: q.MessageStates.SENT,
                        id: "0"
                    });
                    return s
                },
                eu = e => {
                    let {
                        user: t
                    } = e, s = er({
                        author: t
                    });
                    return (0, a.jsx)(o.FocusBlock, {
                        children: (0, a.jsxs)(o.Card, {
                            className: ee.chatPreview,
                            outline: !0,
                            "aria-hidden": !0,
                            children: [(0, a.jsx)(I.default, {
                                className: ee.mockMessage,
                                author: (0, m.getMessageAuthor)(s),
                                message: s
                            }, s.id), (0, a.jsxs)("div", {
                                className: ee.mockInput,
                                children: [(0, a.jsx)(N.default, {
                                    className: ee.mockInputButton,
                                    width: 24,
                                    height: 24
                                }), (0, a.jsx)(P.default, {
                                    className: ee.mockInputButton,
                                    width: 24,
                                    height: 24
                                })]
                            })]
                        })
                    })
                };
            var ed = e => {
                let {
                    transitionState: t,
                    onClose: s,
                    product: i,
                    category: r,
                    returnRef: u,
                    analyticsSource: f,
                    analyticsLocations: E
                } = e, C = (0, n.default)([O.default], () => O.default.getCurrentUser()), {
                    analyticsLocations: L,
                    AnalyticsLocationProvider: m
                } = (0, c.default)([...E, d.default.COLLECTIBLES_SHOP_DETAILS_MODAL]);
                (0, F.useProductDetailsLinkableRoute)(i);
                let I = l.useMemo(() => i.items.find(w.isAvatarDecorationRecord), [i]);
                return (l.useEffect(() => {
                    A.default.track(q.AnalyticEvents.OPEN_MODAL, {
                        type: q.AnalyticsSections.COLLECTIBLES_SHOP_DETAILS_MODAL,
                        source: f,
                        location_stack: L,
                        sku_id: i.skuId,
                        product_type: null != I ? "avatar decoration" : "profile effect"
                    }), i.items.map(R.productDetailsOpened)
                }, [f, L, i.skuId, i.items, I]), null == C) ? null : (0, a.jsx)(m, {
                    children: (0, a.jsx)(o.ModalRoot, {
                        hideShadow: !0,
                        className: ee.modalRoot,
                        returnRef: u,
                        transitionState: t,
                        size: o.ModalSize.DYNAMIC,
                        children: (0, a.jsxs)(o.ModalContent, {
                            className: ee.modalContent,
                            children: [(0, a.jsx)(en, {
                                user: C,
                                product: i,
                                category: r,
                                onClose: s
                            }), (0, a.jsxs)("div", {
                                className: null != I ? ee.collectiblePreviewsContainerWithChat : ee.collectiblePreviewsContainerNoChat,
                                children: [(0, a.jsx)(y.default, {
                                    asset: r.banner,
                                    size: 540,
                                    className: ee.categoryBanner
                                }), (0, a.jsx)(eo, {
                                    user: C,
                                    product: i
                                })]
                            }), (0, a.jsx)(o.ModalCloseButton, {
                                onClick: s,
                                className: ee.modalCloseButton,
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
                        content: h
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
                        childrenMessageContent: (0, d.default)(e, h),
                        disableInteraction: _
                    })
                })
        }
    }
]);