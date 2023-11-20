(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["12109"], {
        603798: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("77078"),
                i = a("730297"),
                o = a("806410"),
                n = a("782340"),
                r = a("31879");

            function d(e) {
                let {
                    product: t
                } = e, a = function(e) {
                    switch (!0) {
                        case null != e.items.find(i.isAvatarDecorationRecord):
                            return n.default.Messages.USER_SETTINGS_AVATAR_DECORATION;
                        case null != e.items.find(o.isProfileEffectRecord):
                            return n.default.Messages.USER_SETTINGS_PROFILE_EFFECT;
                        default:
                            return null
                    }
                }(t);
                return null === a ? null : (0, s.jsx)("div", {
                    className: r.typePill,
                    children: (0, s.jsx)(l.Text, {
                        color: "always-white",
                        variant: "text-xxs/normal",
                        children: a
                    })
                })
            }
        },
        179047: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return el
                }
            }), a("222007");
            var s = a("37983"),
                l = a("884691"),
                i = a("65597"),
                o = a("77078"),
                n = a("54239"),
                r = a("812204"),
                d = a("685665"),
                u = a("606292"),
                c = a("688318"),
                f = a("692038"),
                C = a("815297"),
                L = a("574073"),
                E = a("291655"),
                m = a("946964"),
                I = a("635956"),
                S = a("38766"),
                _ = a("184900"),
                h = a("662286"),
                g = a("493390"),
                M = a("217513"),
                v = a("766274"),
                T = a("790618"),
                O = a("697218"),
                p = a("46829"),
                A = a("351825"),
                x = a("599110"),
                N = a("719923"),
                D = a("21526"),
                P = a("775416"),
                k = a("805172"),
                R = a("491232"),
                b = a("730297"),
                B = a("806410"),
                j = a("716120"),
                w = a("89569"),
                U = a("603798"),
                y = a("342676"),
                F = a("781755"),
                H = a("54809"),
                z = a("408381"),
                W = a("264579"),
                G = a("57940"),
                K = a("49111"),
                Y = a("646718"),
                V = a("843455"),
                X = a("782340"),
                Z = a("483622"),
                q = a("53708");
            let J = o.AvatarSizes.SIZE_152,
                Q = (0, u.getDecorationSizeForAvatarSize)(J),
                $ = (0, z.getLogoSize)(18),
                ee = e => {
                    let {
                        product: t,
                        user: a,
                        category: r,
                        onClose: f,
                        returnRef: C
                    } = e, {
                        analyticsLocations: L
                    } = (0, d.default)(), E = (0, h.useCanUseProfileEffects)({
                        location: "CollectiblesShop"
                    }), {
                        shopForAllEnabled: _
                    } = (0, k.default)({
                        location: "CollectiblesShop"
                    }), M = N.default.canUseCollectibles(a), [v, T] = (0, i.useStateFromStoresArray)([P.default], () => [P.default.getPurchase(t.skuId), P.default.isClaiming === t.skuId]), O = (0, S.default)({
                        analyticsLocations: L
                    }), {
                        buttonColors: p,
                        backgroundColors: A
                    } = (0, G.default)(r), x = null != p ? {
                        background: (0, z.getBackgroundGradient)(p, 90),
                        color: p.text.toHslString()
                    } : void 0, j = null != A ? {
                        background: (0, z.getBackgroundGradient)(A, 135)
                    } : void 0, w = (0, R.isPremiumCollectiblesCategory)(r), K = l.useMemo(() => {
                        var e;
                        return null !== (e = t.items.find(b.isAvatarDecorationRecord)) && void 0 !== e ? e : null
                    }, [t]), ee = l.useMemo(() => {
                        var e;
                        return null !== (e = t.items.find(B.isProfileEffectRecord)) && void 0 !== e ? e : null
                    }, [t]), et = null != ee && null == K, ea = null != K && null == ee, es = e => (0, s.jsx)(I.default, {
                        subscriptionTier: Y.PremiumSubscriptionSKUs.TIER_2,
                        fullWidth: !0,
                        buttonText: e,
                        onClick: H.closeCollectiblesShopProductDetailsModal,
                        onSubscribeModalClose: () => {
                            (0, H.openCollectiblesShopProductDetailsModal)({
                                product: t,
                                category: r,
                                returnRef: C,
                                analyticsLocations: L
                            })
                        }
                    }), {
                        avatarDecorationSrc: el,
                        eventHandlers: ei
                    } = (0, c.default)({
                        user: a,
                        avatarDecorationOverride: K,
                        size: Q
                    });
                    return (0, s.jsxs)("div", {
                        className: Z.collectibleInfoContainer,
                        style: j,
                        children: [(0, s.jsxs)("div", {
                            className: Z.titleContainer,
                            children: [(0, s.jsx)("div", {
                                className: Z.titleImageWrapper,
                                children: (0, s.jsx)("img", {
                                    className: Z.titleImage,
                                    src: (0, R.getCollectiblesAssetURL)(r.logo, {
                                        size: $
                                    }),
                                    alt: r.name
                                })
                            }), (0, s.jsx)(y.default, {
                                category: r,
                                display: "modal"
                            })]
                        }), null != K && (0, s.jsx)("div", {
                            className: Z.avatarPreviewContainer,
                            children: (0, s.jsx)(o.Avatar, {
                                ...ei,
                                "aria-label": X.default.Messages.USER_SETTINGS_AVATAR,
                                size: J,
                                avatarDecoration: el,
                                src: q
                            })
                        }), (0, s.jsxs)("div", {
                            children: [(0, s.jsxs)("div", {
                                className: Z.description,
                                children: [E && (0, s.jsx)(U.default, {
                                    product: t
                                }), (0, s.jsx)(o.Heading, {
                                    color: "always-white",
                                    variant: "heading-xl/extrabold",
                                    className: E ? Z.headingWithItemTypePill : void 0,
                                    children: t.name
                                }), (0, s.jsx)(o.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: t.summary
                                }), (0, s.jsx)(F.default, {
                                    product: t,
                                    purchase: v,
                                    isPremiumCategory: w,
                                    className: Z.priceTag
                                })]
                            }), (0, s.jsxs)("div", {
                                className: Z.buttonsContainer,
                                children: [_ && w && !M ? es(X.default.Messages.UNLOCK_WITH_NITRO) : M || _ ? null != v ? (0, s.jsx)(o.Button, {
                                    className: Z.button,
                                    look: o.Button.Looks.FILLED,
                                    onClick: () => {
                                        f(), (0, n.popLayer)(), O(), ea ? (0, u.openAvatarDecorationModal)({
                                            analyticsLocations: L,
                                            initialSelectedDecoration: null != K ? K : null
                                        }) : et && (0, g.openProfileEffectModal)({
                                            analyticsLocations: L,
                                            initialSelectedEffectID: null == ee ? void 0 : ee.id
                                        })
                                    },
                                    children: X.default.Messages.COLLECTIBLES_USE_NOW
                                }) : w ? (0, s.jsx)(o.Button, {
                                    style: x,
                                    className: Z.button,
                                    look: o.Button.Looks.FILLED,
                                    submitting: T,
                                    submittingStartedLabel: X.default.Messages.COLLECTIBLES_COLLECTING,
                                    submittingFinishedLabel: X.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                                    onClick: async () => {
                                        await (0, D.claimPremiumCollectiblesProduct)(t.skuId), f(), (0, W.default)({
                                            product: t,
                                            category: r,
                                            analyticsLocations: L
                                        })
                                    },
                                    children: X.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                                }) : (0, s.jsx)(o.Button, {
                                    style: x,
                                    className: Z.button,
                                    look: o.Button.Looks.FILLED,
                                    onClick: () => (0, m.default)({
                                        skuId: t.skuId,
                                        analyticsLocations: L,
                                        onClose: e => e ? f() : (0, V.NOOP)()
                                    }),
                                    children: et ? X.default.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : X.default.Messages.COLLECTIBLES_BUY_DECORATION
                                }) : es(X.default.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA), !_ || w || null != v || M ? null : (0, s.jsx)(I.default, {
                                    subscriptionTier: Y.PremiumSubscriptionSKUs.TIER_2,
                                    fullWidth: !0,
                                    color: o.Button.Colors.WHITE,
                                    look: o.Button.Looks.OUTLINED,
                                    buttonText: N.default.isPremium(a) ? X.default.Messages.COLLECTIBLES_UPGRADE_FOR_DISCOUNT : X.default.Messages.COLLECTIBLES_SFA_UNLOCK_DISCOUNT,
                                    className: Z.unlockDiscountButton,
                                    onlyShineOnHover: !0,
                                    onClick: H.closeCollectiblesShopProductDetailsModal,
                                    onSubscribeModalClose: () => {
                                        (0, H.openCollectiblesShopProductDetailsModal)({
                                            product: t,
                                            category: r,
                                            returnRef: C,
                                            analyticsLocations: L
                                        })
                                    }
                                })]
                            }), (0, s.jsx)(o.Text, {
                                color: "none",
                                className: Z.disclaimer,
                                variant: "text-xxs/normal",
                                children: null != v ? null : M || _ ? w ? X.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : et ? X.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : X.default.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER : et ? X.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECTS_NON_PREMIUM_PURCHASE_DISCLAIMER : X.default.Messages.COLLECTIBLES_DETAILS_MODAL_NON_PREMIUM_PURCHASE_DISCLAIMER
                            })]
                        })]
                    })
                },
                et = e => {
                    let {
                        product: t,
                        user: a,
                        category: o
                    } = e, n = N.default.canUsePremiumProfileCustomization(a), r = (0, i.useStateFromStoresObject)([T.default], () => T.default.getAllPending()), d = (0, M.default)(a.id), u = !!(null == d ? void 0 : d.getPreviewBio(r.pendingBio).value), c = l.useMemo(() => {
                        var e;
                        return null !== (e = t.items.find(b.isAvatarDecorationRecord)) && void 0 !== e ? e : null
                    }, [t]), f = l.useMemo(() => t.items.find(B.isProfileEffectRecord), [t]);
                    return (0, s.jsxs)("div", {
                        className: null != c ? Z.previewsContainerInner : Z.profileEffectPreviewsContainerInner,
                        children: [(0, s.jsx)(_.default, {
                            ...r,
                            user: a,
                            canUsePremiumCustomization: n,
                            onAvatarChange: V.NOOP,
                            onBannerChange: V.NOOP,
                            bodyClassName: Z.profileCustomizationBody,
                            pendingAvatarDecoration: null != c ? c : void 0,
                            pendingProfileEffectID: null == f ? void 0 : f.id,
                            forProfileEffectModal: null != f,
                            disabledInputs: !0,
                            hideExampleButton: !0,
                            hideFakeActivity: null != c || u,
                            hideBioSection: null != c
                        }), null != c && (0, s.jsx)(es, {
                            user: a,
                            product: t,
                            category: o
                        })]
                    })
                },
                ea = e => {
                    let {
                        author: t,
                        product: a
                    } = e, s = (0, f.createMessageRecord)({
                        ...(0, C.default)({
                            author: t,
                            channelId: "1337",
                            content: X.default.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
                        }),
                        state: K.MessageStates.SENT,
                        id: "0"
                    });
                    return s.author = new v.default({
                        ...s.author,
                        avatar_decoration_data: a.items.find(b.isAvatarDecorationRecord)
                    }), s
                },
                es = e => {
                    let {
                        product: t,
                        user: a
                    } = e, l = ea({
                        author: a,
                        product: t
                    });
                    return (0, s.jsx)(o.FocusBlock, {
                        children: (0, s.jsxs)(o.Card, {
                            className: Z.chatPreview,
                            outline: !0,
                            "aria-hidden": !0,
                            children: [(0, s.jsx)(E.default, {
                                className: Z.mockMessage,
                                author: (0, L.getMessageAuthor)(l),
                                message: l
                            }, l.id), (0, s.jsxs)("div", {
                                className: Z.mockInput,
                                children: [(0, s.jsx)(A.default, {
                                    className: Z.mockInputButton,
                                    width: 24,
                                    height: 24
                                }), (0, s.jsx)(p.default, {
                                    className: Z.mockInputButton,
                                    width: 24,
                                    height: 24
                                })]
                            })]
                        })
                    })
                };
            var el = e => {
                let {
                    transitionState: t,
                    onClose: a,
                    product: n,
                    category: u,
                    returnRef: c,
                    analyticsSource: f,
                    analyticsLocations: C
                } = e, L = (0, i.default)([O.default], () => O.default.getCurrentUser()), {
                    analyticsLocations: E,
                    AnalyticsLocationProvider: m
                } = (0, d.default)([...C, r.default.COLLECTIBLES_SHOP_DETAILS_MODAL]);
                (0, w.useProductDetailsLinkableRoute)(n);
                let I = l.useMemo(() => n.items.find(b.isAvatarDecorationRecord), [n]);
                return (l.useEffect(() => {
                    x.default.track(K.AnalyticEvents.OPEN_MODAL, {
                        type: K.AnalyticsSections.COLLECTIBLES_SHOP_DETAILS_MODAL,
                        source: f,
                        location_stack: E,
                        sku_id: n.skuId,
                        product_type: null != I ? "avatar decoration" : "profile effect"
                    }), n.items.map(D.productDetailsOpened)
                }, [f, E, n.skuId, n.items, I]), null == L) ? null : (0, s.jsx)(m, {
                    children: (0, s.jsx)(o.ModalRoot, {
                        hideShadow: !0,
                        className: Z.modalRoot,
                        returnRef: c,
                        transitionState: t,
                        size: o.ModalSize.DYNAMIC,
                        children: (0, s.jsxs)(o.ModalContent, {
                            className: Z.modalContent,
                            children: [(0, s.jsx)(ee, {
                                user: L,
                                product: n,
                                category: u,
                                onClose: a
                            }), (0, s.jsxs)("div", {
                                className: null != I ? Z.collectiblePreviewsContainerWithChat : Z.collectiblePreviewsContainerNoChat,
                                children: [(0, s.jsx)(j.default, {
                                    asset: u.banner,
                                    size: 540,
                                    className: Z.categoryBanner
                                }), (0, s.jsx)(et, {
                                    user: L,
                                    product: n,
                                    category: u
                                })]
                            }), (0, s.jsx)(o.ModalCloseButton, {
                                onClick: a,
                                className: Z.modalCloseButton,
                                withCircleBackground: !0
                            })]
                        })
                    })
                })
            }
        },
        291655: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return C
                }
            });
            var s = a("37983"),
                l = a("884691"),
                i = a("414456"),
                o = a.n(i),
                n = a("193865"),
                r = a("780571"),
                d = a("39331"),
                u = a("596368"),
                c = a("227439"),
                f = a("877671"),
                C = l.memo(function(e) {
                    var t, a, l;
                    let {
                        message: i,
                        channel: C,
                        compact: L,
                        className: E,
                        isGroupStart: m,
                        hideSimpleEmbedContent: I = !0,
                        disableInteraction: S
                    } = e, _ = (0, n.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = i.editedTimestamp) && void 0 !== t ? t : i.timestamp).valueOf()), h = (0, n.useShowImprovedMarkdownGuildExperimentConfig)(null !== (a = null == C ? void 0 : C.guild_id) && void 0 !== a ? a : "", (null !== (l = i.editedTimestamp) && void 0 !== l ? l : i.timestamp).valueOf()), {
                        content: g
                    } = (0, d.default)(i, {
                        hideSimpleEmbedContent: I,
                        allowList: _.showListsAndHeaders || h.showListsAndHeaders,
                        allowHeading: _.showListsAndHeaders || h.showListsAndHeaders,
                        allowLinks: _.showMaskedLinks || h.showMaskedLinks,
                        previewLinkTarget: _.showMaskedLinks || h.showMaskedLinks
                    });
                    return (0, s.jsx)(r.default, {
                        compact: L,
                        className: o(E, {
                            [f.message]: !0,
                            [f.cozyMessage]: !L,
                            [f.groupStart]: m
                        }),
                        childrenHeader: (0, c.default)({
                            ...e,
                            channel: C,
                            guildId: void 0
                        }),
                        childrenMessageContent: (0, u.default)(e, g),
                        disableInteraction: S
                    })
                })
        }
    }
]);