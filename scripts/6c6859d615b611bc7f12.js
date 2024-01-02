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
                    return er
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
                g = l("493390"),
                h = l("217513"),
                v = l("790618"),
                N = l("697218"),
                R = l("46829"),
                M = l("216422"),
                y = l("351825"),
                x = l("599110"),
                P = l("719923"),
                b = l("21526"),
                D = l("775416"),
                k = l("805172"),
                j = l("491232"),
                B = l("716120"),
                w = l("89569"),
                F = l("665484"),
                U = l("342676"),
                H = l("450492"),
                V = l("920580"),
                z = l("791309"),
                W = l("54809"),
                G = l("408381"),
                Y = l("264579"),
                K = l("57940"),
                X = l("49111"),
                Z = l("646718"),
                q = l("843455"),
                J = l("782340"),
                Q = l("483622"),
                $ = l("53708");
            let ee = n.AvatarSizes.SIZE_152,
                et = (0, E.getDecorationSizeForAvatarSize)(ee),
                el = (0, G.getLogoSize)(18),
                es = e => {
                    let {
                        text: t
                    } = e, {
                        analyticsLocations: l
                    } = (0, C.default)(), i = a.useRef(null);
                    return (0, s.jsx)(n.Clickable, {
                        className: Q.subscribeNow,
                        innerRef: i,
                        onClick: () => {
                            (0, A.default)({
                                subscriptionTier: Z.PremiumSubscriptionSKUs.TIER_2,
                                analyticsLocations: l,
                                returnRef: i
                            })
                        },
                        children: t
                    })
                },
                ea = e => {
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
                    } = (0, k.default)({
                        location: "CollectiblesProductPreviewInfo"
                    }), A = P.default.canUseCollectibles(l), [S, h] = (0, o.useStateFromStoresArray)([D.default], () => [D.default.getPurchase(t.skuId), D.default.isClaiming === t.skuId]), v = (0, O.default)({
                        analyticsLocations: L
                    }), {
                        buttonColors: N,
                        backgroundColors: R
                    } = (0, K.default)(t.categorySkuId), y = null != N ? {
                        background: (0, G.getBackgroundGradient)(N, 90),
                        color: N.text.toHslString()
                    } : void 0, x = null != R ? {
                        background: (0, G.getBackgroundGradient)(R, 135)
                    } : void 0, B = (0, j.isPremiumCollectiblesProduct)(t), w = (0, j.extractPriceByPurchaseTypes)(t, X.PriceSetAssignmentPurchaseTypes.DEFAULT), ea = (null == w ? void 0 : w.amount) === 0, [ei] = t.items;
                    a.useEffect(() => {
                        if ((null == ei ? void 0 : ei.type) === r.CollectiblesItemType.AVATAR_DECORATION) return (0, u.setPendingAvatarDecoration)(ei), () => (0, u.setPendingAvatarDecoration)(void 0)
                    }, [ei]);
                    let eo = e => (0, s.jsx)(p.default, {
                            subscriptionTier: Z.PremiumSubscriptionSKUs.TIER_2,
                            fullWidth: !0,
                            buttonText: e,
                            onClick: W.closeCollectiblesShopProductDetailsModal,
                            onSubscribeModalClose: () => {
                                (0, W.openCollectiblesShopProductDetailsModal)({
                                    product: t,
                                    category: c,
                                    returnRef: m,
                                    analyticsLocations: L
                                })
                            }
                        }),
                        {
                            avatarDecorationSrc: en,
                            eventHandlers: er
                        } = (0, I.default)({
                            user: l,
                            avatarDecorationOverride: (null == ei ? void 0 : ei.type) === r.CollectiblesItemType.AVATAR_DECORATION ? ei : null,
                            size: et
                        });
                    return (0, s.jsxs)("div", {
                        className: Q.collectibleInfoContainer,
                        style: x,
                        children: [(0, s.jsxs)("div", {
                            className: Q.titleContainer,
                            children: [(0, s.jsx)("div", {
                                children: (0, s.jsx)("img", {
                                    className: t.categorySkuId === i.CollectiblesCategorySkuId.WINTER ? Q.winterTitleImage : Q.titleImage,
                                    src: (0, j.getCollectiblesAssetURL)(c.logo, {
                                        size: el
                                    }),
                                    alt: c.name
                                })
                            }), (0, s.jsx)(U.default, {
                                category: c,
                                display: "modal"
                            })]
                        }), (null == ei ? void 0 : ei.type) === r.CollectiblesItemType.AVATAR_DECORATION && (0, s.jsx)("div", {
                            className: Q.avatarPreviewContainer,
                            children: (0, s.jsx)(n.Avatar, {
                                ...er,
                                "aria-label": J.default.Messages.USER_SETTINGS_AVATAR,
                                size: ee,
                                avatarDecoration: en,
                                src: $
                            })
                        }), (0, s.jsxs)("div", {
                            children: [(0, s.jsxs)("div", {
                                className: Q.description,
                                children: [(0, s.jsx)(F.default, {
                                    item: ei
                                }), (0, s.jsx)(n.Heading, {
                                    color: "always-white",
                                    variant: "heading-xl/extrabold",
                                    className: Q.headingWithItemTypePill,
                                    children: t.name
                                }), (0, s.jsx)(n.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: t.summary
                                }), (() => {
                                    if (null != S) return (0, s.jsx)(n.Text, {
                                        color: "always-white",
                                        variant: "text-md/semibold",
                                        className: Q.priceTag,
                                        children: J.default.Messages.COLLECTIBLES_ALREADY_OWNED
                                    });
                                    if (B) return (0, s.jsx)(n.Text, {
                                        color: "always-white",
                                        variant: "text-md/semibold",
                                        className: Q.priceTag,
                                        children: J.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                                    });
                                    if (A) return (0, s.jsx)(V.default, {
                                        product: t,
                                        className: Q.priceTag
                                    });
                                    if (null == w) return null;
                                    let e = (0, j.extractPriceByPurchaseTypes)(t, X.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2);
                                    return (0, s.jsxs)("div", {
                                        className: Q.priceTagContainer,
                                        children: [(0, s.jsx)(z.default, {
                                            price: w
                                        }), null != e && !ea && (0, s.jsx)(z.default, {
                                            price: e,
                                            variant: "text-xs/medium",
                                            className: Q.premiumPriceTag,
                                            renderPrice: e => J.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format({
                                                price: e,
                                                subscribeNowHook: e => (0, s.jsx)(es, {
                                                    text: e
                                                })
                                            }),
                                            icon: (0, s.jsx)(n.Tooltip, {
                                                text: J.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                                                "aria-label": J.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                                                children: e => {
                                                    let {
                                                        ...t
                                                    } = e;
                                                    return (0, s.jsx)(M.default, {
                                                        ...t,
                                                        className: Q.premiumPriceTagIcon,
                                                        color: "white"
                                                    })
                                                }
                                            })
                                        })]
                                    })
                                })()]
                            }), (0, s.jsx)("div", {
                                className: Q.buttonsContainer,
                                children: (0, s.jsxs)("div", {
                                    className: Q.primaryButtons,
                                    children: [_ && B && !A && !ea ? eo(J.default.Messages.UNLOCK_WITH_NITRO) : A || _ || ea ? null != S ? (0, s.jsx)(n.Button, {
                                        className: Q.button,
                                        look: n.Button.Looks.FILLED,
                                        onClick: () => {
                                            if (T(), (0, d.popLayer)(), v(), (null == ei ? void 0 : ei.type) === r.CollectiblesItemType.AVATAR_DECORATION) {
                                                (0, E.openAvatarDecorationModal)({
                                                    initialSelectedDecoration: ei,
                                                    analyticsLocations: L
                                                });
                                                return
                                            }(null == ei ? void 0 : ei.type) === r.CollectiblesItemType.PROFILE_EFFECT && (0, g.openProfileEffectModal)({
                                                initialSelectedEffectId: ei.id,
                                                analyticsLocations: L
                                            })
                                        },
                                        children: J.default.Messages.COLLECTIBLES_USE_NOW
                                    }) : B ? (0, s.jsx)(n.Button, {
                                        style: y,
                                        className: Q.button,
                                        look: n.Button.Looks.FILLED,
                                        submitting: h,
                                        submittingStartedLabel: J.default.Messages.COLLECTIBLES_COLLECTING,
                                        submittingFinishedLabel: J.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                                        onClick: async () => {
                                            await (0, b.claimPremiumCollectiblesProduct)(t.skuId), T(), (0, Y.default)({
                                                product: t,
                                                analyticsLocations: L
                                            })
                                        },
                                        children: J.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                                    }) : (0, s.jsx)(n.Button, {
                                        style: y,
                                        className: Q.button,
                                        look: n.Button.Looks.FILLED,
                                        onClick: () => (0, f.default)({
                                            skuId: t.skuId,
                                            analyticsLocations: L,
                                            onClose: e => e ? T() : (0, q.NOOP)()
                                        }),
                                        children: (null == ei ? void 0 : ei.type) === r.CollectiblesItemType.PROFILE_EFFECT ? J.default.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : J.default.Messages.COLLECTIBLES_BUY_DECORATION
                                    }) : eo(J.default.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA), !B && !ea && (0, s.jsx)(H.default, {
                                        product: t,
                                        onSuccess: T
                                    })]
                                })
                            }), (0, s.jsx)(n.Text, {
                                color: "none",
                                className: Q.disclaimer,
                                variant: "text-xxs/normal",
                                children: null != S ? null : A || _ ? B ? J.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : (null == ei ? void 0 : ei.type) === r.CollectiblesItemType.PROFILE_EFFECT ? J.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : J.default.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER : (null == ei ? void 0 : ei.type) === r.CollectiblesItemType.PROFILE_EFFECT ? J.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECTS_NON_PREMIUM_PURCHASE_DISCLAIMER : J.default.Messages.COLLECTIBLES_DETAILS_MODAL_NON_PREMIUM_PURCHASE_DISCLAIMER
                            })]
                        })]
                    })
                },
                ei = e => {
                    let {
                        product: t,
                        user: l
                    } = e, a = P.default.canUsePremiumProfileCustomization(l), i = (0, o.useStateFromStoresObject)([v.default], () => v.default.getAllPending()), n = (0, h.default)(l.id), d = !!(null == n ? void 0 : n.getPreviewBio(i.pendingBio).value), [u] = t.items;
                    return (0, s.jsxs)("div", {
                        className: (null == u ? void 0 : u.type) === r.CollectiblesItemType.AVATAR_DECORATION ? Q.previewsContainerInner : Q.profileEffectPreviewsContainerInner,
                        children: [(0, s.jsx)(S.default, {
                            ...i,
                            user: l,
                            canUsePremiumCustomization: a,
                            onAvatarChange: q.NOOP,
                            onBannerChange: q.NOOP,
                            bodyClassName: Q.profileCustomizationBody,
                            pendingAvatarDecoration: (null == u ? void 0 : u.type) === r.CollectiblesItemType.AVATAR_DECORATION ? u : void 0,
                            pendingProfileEffectId: (null == u ? void 0 : u.type) === r.CollectiblesItemType.PROFILE_EFFECT ? u.id : void 0,
                            forProfileEffectModal: (null == u ? void 0 : u.type) === r.CollectiblesItemType.PROFILE_EFFECT,
                            disabledInputs: !0,
                            hideExampleButton: !0,
                            hideFakeActivity: (null == u ? void 0 : u.type) === r.CollectiblesItemType.AVATAR_DECORATION || d,
                            hideBioSection: (null == u ? void 0 : u.type) === r.CollectiblesItemType.AVATAR_DECORATION,
                            hideMemberStatusSection: (null == u ? void 0 : u.type) === r.CollectiblesItemType.AVATAR_DECORATION,
                            useLargeBanner: !0
                        }), (null == u ? void 0 : u.type) === r.CollectiblesItemType.AVATAR_DECORATION && (0, s.jsx)(en, {
                            user: l
                        })]
                    })
                },
                eo = e => {
                    let {
                        author: t
                    } = e, l = (0, T.createMessageRecord)({
                        ...(0, m.default)({
                            author: t,
                            channelId: "1337",
                            content: J.default.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
                        }),
                        state: X.MessageStates.SENT,
                        id: "0"
                    });
                    return l
                },
                en = e => {
                    let {
                        user: t
                    } = e, l = eo({
                        author: t
                    });
                    return (0, s.jsx)(n.FocusBlock, {
                        children: (0, s.jsxs)(n.Card, {
                            className: Q.chatPreview,
                            outline: !0,
                            "aria-hidden": !0,
                            children: [(0, s.jsx)(_.default, {
                                className: Q.mockMessage,
                                author: (0, L.getMessageAuthor)(l),
                                message: l
                            }, l.id), (0, s.jsxs)("div", {
                                className: Q.mockInput,
                                children: [(0, s.jsx)(y.default, {
                                    className: Q.mockInputButton,
                                    width: 24,
                                    height: 24
                                }), (0, s.jsx)(R.default, {
                                    className: Q.mockInputButton,
                                    width: 24,
                                    height: 24
                                })]
                            })]
                        })
                    })
                };
            var er = e => {
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
                (0, w.useProductDetailsLinkableRoute)(i);
                let [_] = i.items;
                return (a.useEffect(() => {
                    let e = (null == _ ? void 0 : _.type) === r.CollectiblesItemType.AVATAR_DECORATION ? "avatar decoration" : "profile effect";
                    x.default.track(X.AnalyticEvents.OPEN_MODAL, {
                        type: X.AnalyticsSections.COLLECTIBLES_SHOP_DETAILS_MODAL,
                        source: E,
                        location_stack: m,
                        sku_id: i.skuId,
                        product_type: e
                    }), i.items.map(b.productDetailsOpened)
                }, [E, m, i.skuId, i.items, null == _ ? void 0 : _.type]), null == T) ? null : (0, s.jsx)(L, {
                    children: (0, s.jsx)(n.ModalRoot, {
                        hideShadow: !0,
                        className: Q.modalRoot,
                        returnRef: u,
                        transitionState: t,
                        size: n.ModalSize.DYNAMIC,
                        children: (0, s.jsxs)(n.ModalContent, {
                            className: Q.modalContent,
                            children: [(0, s.jsx)(ea, {
                                user: T,
                                product: i,
                                category: d,
                                onClose: l
                            }), (0, s.jsxs)("div", {
                                className: (null == _ ? void 0 : _.type) === r.CollectiblesItemType.AVATAR_DECORATION ? Q.collectiblePreviewsContainerWithChat : Q.collectiblePreviewsContainerNoChat,
                                children: [(0, s.jsx)(B.default, {
                                    asset: i.banner,
                                    size: (0, G.getAssetSizeByHeight)(540),
                                    className: Q.categoryBanner
                                }), (0, s.jsx)(ei, {
                                    user: T,
                                    product: i
                                })]
                            }), (0, s.jsx)(n.ModalCloseButton, {
                                onClick: l,
                                className: Q.modalCloseButton,
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