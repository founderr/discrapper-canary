(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["12109"], {
        665484: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            }), l("794252");
            var s = l("37983");
            l("884691");
            var a = l("506838"),
                i = l("77078"),
                o = l("265586"),
                n = l("782340"),
                r = l("576997");

            function d(e) {
                var t;
                let {
                    item: l
                } = e;
                let d = (t = null == l ? void 0 : l.type, (0, a.match)(t).with(o.CollectiblesItemType.AVATAR_DECORATION, () => n.default.Messages.USER_SETTINGS_AVATAR_DECORATION).with(o.CollectiblesItemType.PROFILE_EFFECT, () => n.default.Messages.USER_SETTINGS_PROFILE_EFFECT).otherwise(() => null));
                return null === d ? null : (0, s.jsx)(i.Text, {
                    color: "always-white",
                    variant: "text-xxs/normal",
                    className: r.container,
                    children: d
                })
            }
        },
        179047: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return ed
                }
            }), l("222007");
            var s = l("37983"),
                a = l("884691"),
                i = l("635058"),
                o = l("65597"),
                n = l("77078"),
                r = l("265586"),
                d = l("54239"),
                u = l("152584"),
                c = l("812204"),
                C = l("685665"),
                E = l("606292"),
                I = l("688318"),
                T = l("692038"),
                m = l("815297"),
                L = l("574073"),
                _ = l("291655"),
                f = l("946964"),
                A = l("649844"),
                p = l("635956"),
                O = l("38766"),
                S = l("184900"),
                h = l("493390"),
                g = l("217513"),
                v = l("790618"),
                N = l("697218"),
                R = l("46829"),
                M = l("216422"),
                P = l("351825"),
                x = l("599110"),
                y = l("719923"),
                b = l("21526"),
                D = l("417313"),
                k = l("775416"),
                B = l("805172"),
                j = l("491232"),
                w = l("716120"),
                F = l("89569"),
                U = l("665484"),
                H = l("342676"),
                V = l("450492"),
                z = l("920580"),
                W = l("791309"),
                G = l("54809"),
                K = l("408381"),
                Y = l("264579"),
                X = l("57940"),
                Z = l("49111"),
                q = l("646718"),
                J = l("843455"),
                Q = l("782340"),
                $ = l("483622"),
                ee = l("53708");
            let et = n.AvatarSizes.SIZE_152,
                el = (0, E.getDecorationSizeForAvatarSize)(et),
                es = (0, K.getLogoSize)(18),
                ea = e => {
                    let {
                        text: t
                    } = e, {
                        analyticsLocations: l
                    } = (0, C.default)(), i = a.useRef(null);
                    return (0, s.jsx)(n.Clickable, {
                        className: $.subscribeNow,
                        innerRef: i,
                        onClick: () => {
                            (0, A.default)({
                                subscriptionTier: q.PremiumSubscriptionSKUs.TIER_2,
                                analyticsLocations: l,
                                returnRef: i
                            })
                        },
                        children: t
                    })
                },
                ei = e => {
                    let {
                        product: t,
                        user: l,
                        category: c,
                        onClose: T,
                        returnRef: m
                    } = e, {
                        analyticsLocations: L
                    } = (0, C.default)(), {
                        shopForAllEnabled: _
                    } = (0, B.default)({
                        location: "CollectiblesProductPreviewInfo"
                    }), {
                        giftingEnabled: A
                    } = (0, D.default)({
                        location: "CollectiblesProductPreviewInfo"
                    }), S = y.default.canUseCollectibles(l), [g, v] = (0, o.useStateFromStoresArray)([k.default], () => [k.default.getPurchase(t.skuId), k.default.isClaiming === t.skuId]), N = (0, O.default)({
                        analyticsLocations: L
                    }), {
                        buttonColors: R,
                        backgroundColors: P
                    } = (0, X.default)(t.categorySkuId), x = null != R ? {
                        background: (0, K.getBackgroundGradient)(R, 90),
                        color: R.text.toHslString()
                    } : void 0, w = null != P ? {
                        background: (0, K.getBackgroundGradient)(P, 135)
                    } : void 0, F = (0, j.isPremiumCollectiblesProduct)(t), ei = (0, j.extractPriceByPurchaseTypes)(t, Z.PriceSetAssignmentPurchaseTypes.DEFAULT), eo = (null == ei ? void 0 : ei.amount) === 0, [en] = t.items;
                    a.useEffect(() => {
                        if ((null == en ? void 0 : en.type) === r.CollectiblesItemType.AVATAR_DECORATION) return (0, u.setPendingAvatarDecoration)(en), () => (0, u.setPendingAvatarDecoration)(void 0)
                    }, [en]);
                    let er = e => (0, s.jsx)(p.default, {
                            subscriptionTier: q.PremiumSubscriptionSKUs.TIER_2,
                            fullWidth: !0,
                            buttonText: e,
                            onClick: G.closeCollectiblesShopProductDetailsModal,
                            onSubscribeModalClose: () => {
                                (0, G.openCollectiblesShopProductDetailsModal)({
                                    product: t,
                                    category: c,
                                    returnRef: m,
                                    analyticsLocations: L
                                })
                            }
                        }),
                        {
                            avatarDecorationSrc: ed,
                            eventHandlers: eu
                        } = (0, I.default)({
                            user: l,
                            avatarDecorationOverride: (null == en ? void 0 : en.type) === r.CollectiblesItemType.AVATAR_DECORATION ? en : null,
                            size: el
                        });
                    return (0, s.jsxs)("div", {
                        className: $.collectibleInfoContainer,
                        style: w,
                        children: [(0, s.jsxs)("div", {
                            className: $.titleContainer,
                            children: [(0, s.jsx)("div", {
                                children: (0, s.jsx)("img", {
                                    className: t.categorySkuId === i.CollectiblesCategorySkuId.WINTER ? $.winterTitleImage : $.titleImage,
                                    src: (0, j.getCollectiblesAssetURL)(c.logo, {
                                        size: es
                                    }),
                                    alt: c.name
                                })
                            }), (0, s.jsx)(H.default, {
                                category: c,
                                display: "modal"
                            })]
                        }), (null == en ? void 0 : en.type) === r.CollectiblesItemType.AVATAR_DECORATION && (0, s.jsx)("div", {
                            className: $.avatarPreviewContainer,
                            children: (0, s.jsx)(n.Avatar, {
                                ...eu,
                                "aria-label": Q.default.Messages.USER_SETTINGS_AVATAR,
                                size: et,
                                avatarDecoration: ed,
                                src: ee
                            })
                        }), (0, s.jsxs)("div", {
                            children: [(0, s.jsxs)("div", {
                                className: $.description,
                                children: [(0, s.jsx)(U.default, {
                                    item: en
                                }), (0, s.jsx)(n.Heading, {
                                    color: "always-white",
                                    variant: "heading-xl/extrabold",
                                    className: $.headingWithItemTypePill,
                                    children: t.name
                                }), (0, s.jsx)(n.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: t.summary
                                }), (() => {
                                    if (null != g) return (0, s.jsx)(n.Text, {
                                        color: "always-white",
                                        variant: "text-md/semibold",
                                        className: $.priceTag,
                                        children: Q.default.Messages.COLLECTIBLES_ALREADY_OWNED
                                    });
                                    if (F) return (0, s.jsx)(n.Text, {
                                        color: "always-white",
                                        variant: "text-md/semibold",
                                        className: $.priceTag,
                                        children: Q.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                                    });
                                    if (!A || S) return (0, s.jsx)(z.default, {
                                        product: t,
                                        className: $.priceTag
                                    });
                                    if (null == ei) return null;
                                    let e = (0, j.extractPriceByPurchaseTypes)(t, Z.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2);
                                    return (0, s.jsxs)("div", {
                                        className: $.priceTagContainer,
                                        children: [(0, s.jsx)(W.default, {
                                            price: ei
                                        }), null != e && !eo && (0, s.jsx)(W.default, {
                                            price: e,
                                            variant: "text-xs/medium",
                                            className: $.premiumPriceTag,
                                            renderPrice: e => Q.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format({
                                                price: e,
                                                subscribeNowHook: e => (0, s.jsx)(ea, {
                                                    text: e
                                                })
                                            }),
                                            icon: (0, s.jsx)(n.Tooltip, {
                                                text: Q.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                                                "aria-label": Q.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                                                children: e => {
                                                    let {
                                                        ...t
                                                    } = e;
                                                    return (0, s.jsx)(M.default, {
                                                        ...t,
                                                        className: $.premiumPriceTagIcon,
                                                        color: "white"
                                                    })
                                                }
                                            })
                                        })]
                                    })
                                })()]
                            }), (0, s.jsxs)("div", {
                                className: $.buttonsContainer,
                                children: [(0, s.jsxs)("div", {
                                    className: $.primaryButtons,
                                    children: [_ && F && !S && !eo ? er(Q.default.Messages.UNLOCK_WITH_NITRO) : S || _ || eo ? null != g ? (0, s.jsx)(n.Button, {
                                        className: $.button,
                                        look: n.Button.Looks.FILLED,
                                        onClick: () => {
                                            if (T(), (0, d.popLayer)(), N(), (null == en ? void 0 : en.type) === r.CollectiblesItemType.AVATAR_DECORATION) {
                                                (0, E.openAvatarDecorationModal)({
                                                    initialSelectedDecoration: en,
                                                    analyticsLocations: L
                                                });
                                                return
                                            }(null == en ? void 0 : en.type) === r.CollectiblesItemType.PROFILE_EFFECT && (0, h.openProfileEffectModal)({
                                                initialSelectedEffectId: en.id,
                                                analyticsLocations: L
                                            })
                                        },
                                        children: Q.default.Messages.COLLECTIBLES_USE_NOW
                                    }) : F ? (0, s.jsx)(n.Button, {
                                        style: x,
                                        className: $.button,
                                        look: n.Button.Looks.FILLED,
                                        submitting: v,
                                        submittingStartedLabel: Q.default.Messages.COLLECTIBLES_COLLECTING,
                                        submittingFinishedLabel: Q.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                                        onClick: async () => {
                                            await (0, b.claimPremiumCollectiblesProduct)(t.skuId), T(), (0, Y.default)({
                                                product: t,
                                                analyticsLocations: L
                                            })
                                        },
                                        children: Q.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                                    }) : (0, s.jsx)(n.Button, {
                                        style: x,
                                        className: $.button,
                                        look: n.Button.Looks.FILLED,
                                        onClick: () => (0, f.default)({
                                            skuId: t.skuId,
                                            analyticsLocations: L,
                                            onClose: e => e ? T() : (0, J.NOOP)()
                                        }),
                                        children: (null == en ? void 0 : en.type) === r.CollectiblesItemType.PROFILE_EFFECT ? Q.default.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : Q.default.Messages.COLLECTIBLES_BUY_DECORATION
                                    }) : er(Q.default.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA), A && !F && !eo && (0, s.jsx)(V.default, {
                                        product: t,
                                        onSuccess: T
                                    })]
                                }), A || !_ || F || null != g || S ? null : (0, s.jsx)(p.default, {
                                    subscriptionTier: q.PremiumSubscriptionSKUs.TIER_2,
                                    fullWidth: !0,
                                    color: n.Button.Colors.WHITE,
                                    look: n.Button.Looks.OUTLINED,
                                    buttonText: y.default.isPremium(l) ? Q.default.Messages.COLLECTIBLES_UPGRADE_FOR_DISCOUNT : Q.default.Messages.COLLECTIBLES_SFA_UNLOCK_DISCOUNT,
                                    className: $.unlockDiscountButton,
                                    onlyShineOnHover: !0,
                                    onClick: G.closeCollectiblesShopProductDetailsModal,
                                    onSubscribeModalClose: () => {
                                        (0, G.openCollectiblesShopProductDetailsModal)({
                                            product: t,
                                            category: c,
                                            returnRef: m,
                                            analyticsLocations: L
                                        })
                                    }
                                })]
                            }), (0, s.jsx)(n.Text, {
                                color: "none",
                                className: $.disclaimer,
                                variant: "text-xxs/normal",
                                children: null != g ? null : S || _ ? F ? Q.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : (null == en ? void 0 : en.type) === r.CollectiblesItemType.PROFILE_EFFECT ? Q.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : Q.default.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER : (null == en ? void 0 : en.type) === r.CollectiblesItemType.PROFILE_EFFECT ? Q.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECTS_NON_PREMIUM_PURCHASE_DISCLAIMER : Q.default.Messages.COLLECTIBLES_DETAILS_MODAL_NON_PREMIUM_PURCHASE_DISCLAIMER
                            })]
                        })]
                    })
                },
                eo = e => {
                    let {
                        product: t,
                        user: l
                    } = e, a = y.default.canUsePremiumProfileCustomization(l), i = (0, o.useStateFromStoresObject)([v.default], () => v.default.getAllPending()), n = (0, g.default)(l.id), d = !!(null == n ? void 0 : n.getPreviewBio(i.pendingBio).value), [u] = t.items;
                    return (0, s.jsxs)("div", {
                        className: (null == u ? void 0 : u.type) === r.CollectiblesItemType.AVATAR_DECORATION ? $.previewsContainerInner : $.profileEffectPreviewsContainerInner,
                        children: [(0, s.jsx)(S.default, {
                            ...i,
                            user: l,
                            canUsePremiumCustomization: a,
                            onAvatarChange: J.NOOP,
                            onBannerChange: J.NOOP,
                            bodyClassName: $.profileCustomizationBody,
                            pendingAvatarDecoration: (null == u ? void 0 : u.type) === r.CollectiblesItemType.AVATAR_DECORATION ? u : void 0,
                            pendingProfileEffectId: (null == u ? void 0 : u.type) === r.CollectiblesItemType.PROFILE_EFFECT ? u.id : void 0,
                            forProfileEffectModal: (null == u ? void 0 : u.type) === r.CollectiblesItemType.PROFILE_EFFECT,
                            disabledInputs: !0,
                            hideExampleButton: !0,
                            hideFakeActivity: (null == u ? void 0 : u.type) === r.CollectiblesItemType.AVATAR_DECORATION || d,
                            hideBioSection: (null == u ? void 0 : u.type) === r.CollectiblesItemType.AVATAR_DECORATION,
                            hideMemberStatusSection: (null == u ? void 0 : u.type) === r.CollectiblesItemType.AVATAR_DECORATION,
                            useLargeBanner: !0
                        }), (null == u ? void 0 : u.type) === r.CollectiblesItemType.AVATAR_DECORATION && (0, s.jsx)(er, {
                            user: l
                        })]
                    })
                },
                en = e => {
                    let {
                        author: t
                    } = e, l = (0, T.createMessageRecord)({
                        ...(0, m.default)({
                            author: t,
                            channelId: "1337",
                            content: Q.default.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
                        }),
                        state: Z.MessageStates.SENT,
                        id: "0"
                    });
                    return l
                },
                er = e => {
                    let {
                        user: t
                    } = e, l = en({
                        author: t
                    });
                    return (0, s.jsx)(n.FocusBlock, {
                        children: (0, s.jsxs)(n.Card, {
                            className: $.chatPreview,
                            outline: !0,
                            "aria-hidden": !0,
                            children: [(0, s.jsx)(_.default, {
                                className: $.mockMessage,
                                author: (0, L.getMessageAuthor)(l),
                                message: l
                            }, l.id), (0, s.jsxs)("div", {
                                className: $.mockInput,
                                children: [(0, s.jsx)(P.default, {
                                    className: $.mockInputButton,
                                    width: 24,
                                    height: 24
                                }), (0, s.jsx)(R.default, {
                                    className: $.mockInputButton,
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
                    onClose: l,
                    product: i,
                    category: d,
                    returnRef: u,
                    analyticsSource: E,
                    analyticsLocations: I
                } = e, T = (0, o.default)([N.default], () => N.default.getCurrentUser()), {
                    analyticsLocations: m,
                    AnalyticsLocationProvider: L
                } = (0, C.default)([...I, c.default.COLLECTIBLES_SHOP_DETAILS_MODAL]);
                (0, F.useProductDetailsLinkableRoute)(i);
                let [_] = i.items;
                return (a.useEffect(() => {
                    let e = (null == _ ? void 0 : _.type) === r.CollectiblesItemType.AVATAR_DECORATION ? "avatar decoration" : "profile effect";
                    x.default.track(Z.AnalyticEvents.OPEN_MODAL, {
                        type: Z.AnalyticsSections.COLLECTIBLES_SHOP_DETAILS_MODAL,
                        source: E,
                        location_stack: m,
                        sku_id: i.skuId,
                        product_type: e
                    }), i.items.map(b.productDetailsOpened)
                }, [E, m, i.skuId, i.items, null == _ ? void 0 : _.type]), null == T) ? null : (0, s.jsx)(L, {
                    children: (0, s.jsx)(n.ModalRoot, {
                        hideShadow: !0,
                        className: $.modalRoot,
                        returnRef: u,
                        transitionState: t,
                        size: n.ModalSize.DYNAMIC,
                        children: (0, s.jsxs)(n.ModalContent, {
                            className: $.modalContent,
                            children: [(0, s.jsx)(ei, {
                                user: T,
                                product: i,
                                category: d,
                                onClose: l
                            }), (0, s.jsxs)("div", {
                                className: (null == _ ? void 0 : _.type) === r.CollectiblesItemType.AVATAR_DECORATION ? $.collectiblePreviewsContainerWithChat : $.collectiblePreviewsContainerNoChat,
                                children: [(0, s.jsx)(w.default, {
                                    asset: i.banner,
                                    size: (0, K.getAssetSizeByHeight)(540),
                                    className: $.categoryBanner
                                }), (0, s.jsx)(eo, {
                                    user: T,
                                    product: i
                                })]
                            }), (0, s.jsx)(n.ModalCloseButton, {
                                onClick: l,
                                className: $.modalCloseButton,
                                withCircleBackground: !0
                            })]
                        })
                    })
                })
            }
        },
        291655: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return E
                }
            });
            var s = l("37983"),
                a = l("884691"),
                i = l("414456"),
                o = l.n(i),
                n = l("193865"),
                r = l("780571"),
                d = l("39331"),
                u = l("596368"),
                c = l("227439"),
                C = l("877671"),
                E = a.memo(function(e) {
                    var t, l, a;
                    let {
                        message: i,
                        channel: E,
                        compact: I,
                        className: T,
                        isGroupStart: m,
                        hideSimpleEmbedContent: L = !0,
                        disableInteraction: _
                    } = e, f = (0, n.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = i.editedTimestamp) && void 0 !== t ? t : i.timestamp).valueOf()), A = (0, n.useShowImprovedMarkdownGuildExperimentConfig)(null !== (l = null == E ? void 0 : E.guild_id) && void 0 !== l ? l : "", (null !== (a = i.editedTimestamp) && void 0 !== a ? a : i.timestamp).valueOf()), {
                        content: p
                    } = (0, d.default)(i, {
                        hideSimpleEmbedContent: L,
                        allowList: f.showListsAndHeaders || A.showListsAndHeaders,
                        allowHeading: f.showListsAndHeaders || A.showListsAndHeaders,
                        allowLinks: f.showMaskedLinks || A.showMaskedLinks,
                        previewLinkTarget: f.showMaskedLinks || A.showMaskedLinks
                    });
                    return (0, s.jsx)(r.default, {
                        compact: I,
                        className: o(T, {
                            [C.message]: !0,
                            [C.cozyMessage]: !I,
                            [C.groupStart]: m
                        }),
                        childrenHeader: (0, c.default)({
                            ...e,
                            channel: E,
                            guildId: void 0
                        }),
                        childrenMessageContent: (0, u.default)(e, p),
                        disableInteraction: _
                    })
                })
        }
    }
]);