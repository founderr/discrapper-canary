(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["12109"], {
        665484: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("77078"),
                i = s("730297"),
                o = s("806410"),
                n = s("782340");

            function r(e) {
                let {
                    product: t
                } = e, s = function(e) {
                    switch (!0) {
                        case null != e.items.find(i.isAvatarDecorationRecord):
                            return n.default.Messages.USER_SETTINGS_AVATAR_DECORATION;
                        case null != e.items.find(o.isProfileEffectRecord):
                            return n.default.Messages.USER_SETTINGS_PROFILE_EFFECT;
                        default:
                            return null
                    }
                }(t);
                return null === s ? null : (0, a.jsx)(l.Text, {
                    color: "text-normal",
                    variant: "eyebrow",
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
                i = s("65597"),
                o = s("77078"),
                n = s("54239"),
                r = s("812204"),
                u = s("685665"),
                d = s("606292"),
                c = s("688318"),
                f = s("692038"),
                E = s("815297"),
                C = s("574073"),
                L = s("291655"),
                m = s("946964"),
                I = s("649844"),
                _ = s("635956"),
                S = s("38766"),
                T = s("184900"),
                h = s("662286"),
                g = s("493390"),
                M = s("217513"),
                v = s("766274"),
                O = s("790618"),
                p = s("697218"),
                P = s("46829"),
                x = s("216422"),
                N = s("351825"),
                A = s("599110"),
                D = s("719923"),
                R = s("21526"),
                b = s("417313"),
                k = s("775416"),
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
                ea = (0, d.getDecorationSizeForAvatarSize)(es),
                el = (0, V.getLogoSize)(18),
                ei = e => {
                    let {
                        text: t
                    } = e, {
                        analyticsLocations: s
                    } = (0, u.default)(), i = l.useRef(null);
                    return (0, a.jsx)(o.Clickable, {
                        className: ee.subscribeNow,
                        innerRef: i,
                        onClick: () => {
                            (0, I.default)({
                                subscriptionTier: J.PremiumSubscriptionSKUs.TIER_2,
                                analyticsLocations: s,
                                returnRef: i
                            })
                        },
                        children: t
                    })
                },
                eo = e => {
                    let {
                        product: t,
                        user: s,
                        category: r,
                        onClose: f,
                        returnRef: E
                    } = e, {
                        analyticsLocations: C
                    } = (0, u.default)(), L = (0, h.useCanUseProfileEffects)({
                        location: "CollectiblesProductPreviewInfo"
                    }), {
                        shopForAllEnabled: I
                    } = (0, B.default)({
                        location: "CollectiblesProductPreviewInfo"
                    }), {
                        giftingEnabled: T
                    } = (0, b.default)({
                        location: "CollectiblesProductPreviewInfo"
                    }), M = D.default.canUseCollectibles(s), [v, O] = (0, i.useStateFromStoresArray)([k.default], () => [k.default.getPurchase(t.skuId), k.default.isClaiming === t.skuId]), p = (0, S.default)({
                        analyticsLocations: C
                    }), {
                        buttonColors: P,
                        backgroundColors: N
                    } = (0, Z.default)(r), A = null != P ? {
                        background: (0, V.getBackgroundGradient)(P, 90),
                        color: P.text.toHslString()
                    } : void 0, y = null != N ? {
                        background: (0, V.getBackgroundGradient)(N, 135)
                    } : void 0, F = (0, j.isPremiumCollectiblesCategory)(r), eo = l.useMemo(() => {
                        var e;
                        return null !== (e = t.items.find(w.isAvatarDecorationRecord)) && void 0 !== e ? e : null
                    }, [t]), en = l.useMemo(() => {
                        var e;
                        return null !== (e = t.items.find(U.isProfileEffectRecord)) && void 0 !== e ? e : null
                    }, [t]), er = null != en && null == eo, eu = null != eo && null == en, ed = e => (0, a.jsx)(_.default, {
                        subscriptionTier: J.PremiumSubscriptionSKUs.TIER_2,
                        fullWidth: !0,
                        buttonText: e,
                        onClick: Y.closeCollectiblesShopProductDetailsModal,
                        onSubscribeModalClose: () => {
                            (0, Y.openCollectiblesShopProductDetailsModal)({
                                product: t,
                                category: r,
                                returnRef: E,
                                analyticsLocations: C
                            })
                        }
                    }), {
                        avatarDecorationSrc: ec,
                        eventHandlers: ef
                    } = (0, c.default)({
                        user: s,
                        avatarDecorationOverride: eo,
                        size: ea
                    });
                    return (0, a.jsxs)("div", {
                        className: ee.collectibleInfoContainer,
                        style: y,
                        children: [(0, a.jsxs)("div", {
                            className: ee.titleContainer,
                            children: [(0, a.jsx)("div", {
                                className: ee.titleImageWrapper,
                                children: (0, a.jsx)("img", {
                                    className: ee.titleImage,
                                    src: (0, j.getCollectiblesAssetURL)(r.logo, {
                                        size: el
                                    }),
                                    alt: r.name
                                })
                            }), (0, a.jsx)(z.default, {
                                category: r,
                                display: "modal"
                            })]
                        }), null != eo && (0, a.jsx)("div", {
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
                                children: [L && (0, a.jsx)(H.default, {
                                    product: t
                                }), (0, a.jsx)(o.Heading, {
                                    color: "always-white",
                                    variant: "heading-xl/extrabold",
                                    className: L ? ee.headingWithItemTypePill : void 0,
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
                                    if (!T || M) return (0, a.jsx)(G.default, {
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
                                                    return (0, a.jsx)(x.default, {
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
                                    children: [I && F && !M ? ed($.default.Messages.UNLOCK_WITH_NITRO) : M || I ? null != v ? (0, a.jsx)(o.Button, {
                                        className: ee.button,
                                        look: o.Button.Looks.FILLED,
                                        onClick: () => {
                                            f(), (0, n.popLayer)(), p(), eu ? (0, d.openAvatarDecorationModal)({
                                                analyticsLocations: C,
                                                initialSelectedDecoration: null != eo ? eo : null
                                            }) : er && (0, g.openProfileEffectModal)({
                                                analyticsLocations: C,
                                                initialSelectedEffectID: null == en ? void 0 : en.id
                                            })
                                        },
                                        children: $.default.Messages.COLLECTIBLES_USE_NOW
                                    }) : F ? (0, a.jsx)(o.Button, {
                                        style: A,
                                        className: ee.button,
                                        look: o.Button.Looks.FILLED,
                                        submitting: O,
                                        submittingStartedLabel: $.default.Messages.COLLECTIBLES_COLLECTING,
                                        submittingFinishedLabel: $.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                                        onClick: async () => {
                                            await (0, R.claimPremiumCollectiblesProduct)(t.skuId), f(), (0, X.default)({
                                                product: t,
                                                category: r,
                                                analyticsLocations: C
                                            })
                                        },
                                        children: $.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                                    }) : (0, a.jsx)(o.Button, {
                                        style: A,
                                        className: ee.button,
                                        look: o.Button.Looks.FILLED,
                                        onClick: () => (0, m.default)({
                                            skuId: t.skuId,
                                            analyticsLocations: C,
                                            onClose: e => e ? f() : (0, Q.NOOP)()
                                        }),
                                        children: er ? $.default.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : $.default.Messages.COLLECTIBLES_BUY_DECORATION
                                    }) : ed($.default.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA), T && !F && (0, a.jsx)(W.default, {
                                        product: t,
                                        onSuccess: f
                                    })]
                                }), T || !I || F || null != v || M ? null : (0, a.jsx)(_.default, {
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
                                            category: r,
                                            returnRef: E,
                                            analyticsLocations: C
                                        })
                                    }
                                })]
                            }), (0, a.jsx)(o.Text, {
                                color: "none",
                                className: ee.disclaimer,
                                variant: "text-xxs/normal",
                                children: null != v ? null : M || I ? F ? $.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : er ? $.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : $.default.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER : er ? $.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECTS_NON_PREMIUM_PURCHASE_DISCLAIMER : $.default.Messages.COLLECTIBLES_DETAILS_MODAL_NON_PREMIUM_PURCHASE_DISCLAIMER
                            })]
                        })]
                    })
                },
                en = e => {
                    let {
                        product: t,
                        user: s,
                        category: o
                    } = e, n = D.default.canUsePremiumProfileCustomization(s), r = (0, i.useStateFromStoresObject)([O.default], () => O.default.getAllPending()), u = (0, M.default)(s.id), d = !!(null == u ? void 0 : u.getPreviewBio(r.pendingBio).value), c = l.useMemo(() => {
                        var e;
                        return null !== (e = t.items.find(w.isAvatarDecorationRecord)) && void 0 !== e ? e : null
                    }, [t]), f = l.useMemo(() => t.items.find(U.isProfileEffectRecord), [t]);
                    return (0, a.jsxs)("div", {
                        className: null != c ? ee.previewsContainerInner : ee.profileEffectPreviewsContainerInner,
                        children: [(0, a.jsx)(T.default, {
                            ...r,
                            user: s,
                            canUsePremiumCustomization: n,
                            onAvatarChange: Q.NOOP,
                            onBannerChange: Q.NOOP,
                            bodyClassName: ee.profileCustomizationBody,
                            pendingAvatarDecoration: null != c ? c : void 0,
                            pendingProfileEffectID: null == f ? void 0 : f.id,
                            forProfileEffectModal: null != f,
                            disabledInputs: !0,
                            hideExampleButton: !0,
                            hideFakeActivity: null != c || d,
                            hideBioSection: null != c
                        }), null != c && (0, a.jsx)(eu, {
                            user: s,
                            product: t,
                            category: o
                        })]
                    })
                },
                er = e => {
                    let {
                        author: t,
                        product: s
                    } = e, a = (0, f.createMessageRecord)({
                        ...(0, E.default)({
                            author: t,
                            channelId: "1337",
                            content: $.default.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
                        }),
                        state: q.MessageStates.SENT,
                        id: "0"
                    });
                    return a.author = new v.default({
                        ...a.author,
                        avatar_decoration_data: s.items.find(w.isAvatarDecorationRecord)
                    }), a
                },
                eu = e => {
                    let {
                        product: t,
                        user: s
                    } = e, l = er({
                        author: s,
                        product: t
                    });
                    return (0, a.jsx)(o.FocusBlock, {
                        children: (0, a.jsxs)(o.Card, {
                            className: ee.chatPreview,
                            outline: !0,
                            "aria-hidden": !0,
                            children: [(0, a.jsx)(L.default, {
                                className: ee.mockMessage,
                                author: (0, C.getMessageAuthor)(l),
                                message: l
                            }, l.id), (0, a.jsxs)("div", {
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
                    product: n,
                    category: d,
                    returnRef: c,
                    analyticsSource: f,
                    analyticsLocations: E
                } = e, C = (0, i.default)([p.default], () => p.default.getCurrentUser()), {
                    analyticsLocations: L,
                    AnalyticsLocationProvider: m
                } = (0, u.default)([...E, r.default.COLLECTIBLES_SHOP_DETAILS_MODAL]);
                (0, F.useProductDetailsLinkableRoute)(n);
                let I = l.useMemo(() => n.items.find(w.isAvatarDecorationRecord), [n]);
                return (l.useEffect(() => {
                    A.default.track(q.AnalyticEvents.OPEN_MODAL, {
                        type: q.AnalyticsSections.COLLECTIBLES_SHOP_DETAILS_MODAL,
                        source: f,
                        location_stack: L,
                        sku_id: n.skuId,
                        product_type: null != I ? "avatar decoration" : "profile effect"
                    }), n.items.map(R.productDetailsOpened)
                }, [f, L, n.skuId, n.items, I]), null == C) ? null : (0, a.jsx)(m, {
                    children: (0, a.jsx)(o.ModalRoot, {
                        hideShadow: !0,
                        className: ee.modalRoot,
                        returnRef: c,
                        transitionState: t,
                        size: o.ModalSize.DYNAMIC,
                        children: (0, a.jsxs)(o.ModalContent, {
                            className: ee.modalContent,
                            children: [(0, a.jsx)(eo, {
                                user: C,
                                product: n,
                                category: d,
                                onClose: s
                            }), (0, a.jsxs)("div", {
                                className: null != I ? ee.collectiblePreviewsContainerWithChat : ee.collectiblePreviewsContainerNoChat,
                                children: [(0, a.jsx)(y.default, {
                                    asset: d.banner,
                                    size: 540,
                                    className: ee.categoryBanner
                                }), (0, a.jsx)(en, {
                                    user: C,
                                    product: n,
                                    category: d
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
                o = s.n(i),
                n = s("193865"),
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
                    } = e, S = (0, n.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = i.editedTimestamp) && void 0 !== t ? t : i.timestamp).valueOf()), T = (0, n.useShowImprovedMarkdownGuildExperimentConfig)(null !== (s = null == E ? void 0 : E.guild_id) && void 0 !== s ? s : "", (null !== (l = i.editedTimestamp) && void 0 !== l ? l : i.timestamp).valueOf()), {
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
                        className: o(L, {
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