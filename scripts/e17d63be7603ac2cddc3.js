(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["12109"], {
        665484: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var s = a("37983");
            a("884691");
            var l = a("77078"),
                o = a("730297"),
                i = a("806410"),
                n = a("782340");

            function r(e) {
                let {
                    product: t
                } = e, a = function(e) {
                    switch (!0) {
                        case null != e.items.find(o.isAvatarDecorationRecord):
                            return n.default.Messages.USER_SETTINGS_AVATAR_DECORATION;
                        case null != e.items.find(i.isProfileEffectRecord):
                            return n.default.Messages.USER_SETTINGS_PROFILE_EFFECT;
                        default:
                            return null
                    }
                }(t);
                return null === a ? null : (0, s.jsx)(l.Text, {
                    color: "text-normal",
                    variant: "eyebrow",
                    children: a
                })
            }
        },
        179047: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return ei
                }
            }), a("222007");
            var s = a("37983"),
                l = a("884691"),
                o = a("65597"),
                i = a("77078"),
                n = a("54239"),
                r = a("812204"),
                d = a("685665"),
                u = a("606292"),
                c = a("688318"),
                f = a("692038"),
                C = a("815297"),
                L = a("574073"),
                m = a("291655"),
                E = a("946964"),
                I = a("635956"),
                S = a("38766"),
                _ = a("184900"),
                h = a("662286"),
                g = a("493390"),
                v = a("217513"),
                M = a("766274"),
                T = a("790618"),
                O = a("697218"),
                p = a("46829"),
                A = a("351825"),
                P = a("599110"),
                N = a("719923"),
                x = a("21526"),
                D = a("417313"),
                k = a("775416"),
                R = a("805172"),
                b = a("491232"),
                B = a("730297"),
                j = a("806410"),
                w = a("716120"),
                U = a("89569"),
                y = a("665484"),
                F = a("342676"),
                H = a("781755"),
                z = a("450492"),
                W = a("54809"),
                G = a("408381"),
                K = a("264579"),
                Y = a("57940"),
                V = a("49111"),
                X = a("646718"),
                Z = a("843455"),
                q = a("782340"),
                J = a("483622"),
                Q = a("53708");
            let $ = i.AvatarSizes.SIZE_152,
                ee = (0, u.getDecorationSizeForAvatarSize)($),
                et = (0, G.getLogoSize)(18),
                ea = e => {
                    let {
                        product: t,
                        user: a,
                        category: r,
                        onClose: f,
                        returnRef: C
                    } = e, {
                        analyticsLocations: L
                    } = (0, d.default)(), m = (0, h.useCanUseProfileEffects)({
                        location: "CollectiblesProductPreviewInfo"
                    }), {
                        shopForAllEnabled: _
                    } = (0, R.default)({
                        location: "CollectiblesProductPreviewInfo"
                    }), {
                        giftingEnabled: v
                    } = (0, D.default)({
                        location: "CollectiblesProductPreviewInfo"
                    }), M = N.default.canUseCollectibles(a), [T, O] = (0, o.useStateFromStoresArray)([k.default], () => [k.default.getPurchase(t.skuId), k.default.isClaiming === t.skuId]), p = (0, S.default)({
                        analyticsLocations: L
                    }), {
                        buttonColors: A,
                        backgroundColors: P
                    } = (0, Y.default)(r), w = null != A ? {
                        background: (0, G.getBackgroundGradient)(A, 90),
                        color: A.text.toHslString()
                    } : void 0, U = null != P ? {
                        background: (0, G.getBackgroundGradient)(P, 135)
                    } : void 0, V = (0, b.isPremiumCollectiblesCategory)(r), ea = l.useMemo(() => {
                        var e;
                        return null !== (e = t.items.find(B.isAvatarDecorationRecord)) && void 0 !== e ? e : null
                    }, [t]), es = l.useMemo(() => {
                        var e;
                        return null !== (e = t.items.find(j.isProfileEffectRecord)) && void 0 !== e ? e : null
                    }, [t]), el = null != es && null == ea, eo = null != ea && null == es, ei = e => (0, s.jsx)(I.default, {
                        subscriptionTier: X.PremiumSubscriptionSKUs.TIER_2,
                        fullWidth: !0,
                        buttonText: e,
                        onClick: W.closeCollectiblesShopProductDetailsModal,
                        onSubscribeModalClose: () => {
                            (0, W.openCollectiblesShopProductDetailsModal)({
                                product: t,
                                category: r,
                                returnRef: C,
                                analyticsLocations: L
                            })
                        }
                    }), {
                        avatarDecorationSrc: en,
                        eventHandlers: er
                    } = (0, c.default)({
                        user: a,
                        avatarDecorationOverride: ea,
                        size: ee
                    });
                    return (0, s.jsxs)("div", {
                        className: J.collectibleInfoContainer,
                        style: U,
                        children: [(0, s.jsxs)("div", {
                            className: J.titleContainer,
                            children: [(0, s.jsx)("div", {
                                className: J.titleImageWrapper,
                                children: (0, s.jsx)("img", {
                                    className: J.titleImage,
                                    src: (0, b.getCollectiblesAssetURL)(r.logo, {
                                        size: et
                                    }),
                                    alt: r.name
                                })
                            }), (0, s.jsx)(F.default, {
                                category: r,
                                display: "modal"
                            })]
                        }), null != ea && (0, s.jsx)("div", {
                            className: J.avatarPreviewContainer,
                            children: (0, s.jsx)(i.Avatar, {
                                ...er,
                                "aria-label": q.default.Messages.USER_SETTINGS_AVATAR,
                                size: $,
                                avatarDecoration: en,
                                src: Q
                            })
                        }), (0, s.jsxs)("div", {
                            children: [(0, s.jsxs)("div", {
                                className: J.description,
                                children: [m && (0, s.jsx)(y.default, {
                                    product: t
                                }), (0, s.jsx)(i.Heading, {
                                    color: "always-white",
                                    variant: "heading-xl/extrabold",
                                    className: m ? J.headingWithItemTypePill : void 0,
                                    children: t.name
                                }), (0, s.jsx)(i.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: t.summary
                                }), (0, s.jsx)(H.default, {
                                    product: t,
                                    purchase: T,
                                    isPremiumCategory: V,
                                    className: J.priceTag
                                })]
                            }), (0, s.jsxs)("div", {
                                className: J.buttonsContainer,
                                children: [(0, s.jsxs)("div", {
                                    className: J.primaryButtons,
                                    children: [_ && V && !M ? ei(q.default.Messages.UNLOCK_WITH_NITRO) : M || _ ? null != T ? (0, s.jsx)(i.Button, {
                                        className: J.button,
                                        look: i.Button.Looks.FILLED,
                                        onClick: () => {
                                            f(), (0, n.popLayer)(), p(), eo ? (0, u.openAvatarDecorationModal)({
                                                analyticsLocations: L,
                                                initialSelectedDecoration: null != ea ? ea : null
                                            }) : el && (0, g.openProfileEffectModal)({
                                                analyticsLocations: L,
                                                initialSelectedEffectID: null == es ? void 0 : es.id
                                            })
                                        },
                                        children: q.default.Messages.COLLECTIBLES_USE_NOW
                                    }) : V ? (0, s.jsx)(i.Button, {
                                        style: w,
                                        className: J.button,
                                        look: i.Button.Looks.FILLED,
                                        submitting: O,
                                        submittingStartedLabel: q.default.Messages.COLLECTIBLES_COLLECTING,
                                        submittingFinishedLabel: q.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                                        onClick: async () => {
                                            await (0, x.claimPremiumCollectiblesProduct)(t.skuId), f(), (0, K.default)({
                                                product: t,
                                                category: r,
                                                analyticsLocations: L
                                            })
                                        },
                                        children: q.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                                    }) : (0, s.jsx)(i.Button, {
                                        style: w,
                                        className: J.button,
                                        look: i.Button.Looks.FILLED,
                                        onClick: () => (0, E.default)({
                                            skuId: t.skuId,
                                            analyticsLocations: L,
                                            onClose: e => e ? f() : (0, Z.NOOP)()
                                        }),
                                        children: el ? q.default.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : q.default.Messages.COLLECTIBLES_BUY_DECORATION
                                    }) : ei(q.default.Messages.COLLECTIBLES_NON_PREMIUM_SHOP_CTA), v && !V && (0, s.jsx)(z.default, {
                                        product: t,
                                        onSuccess: f
                                    })]
                                }), !_ || V || null != T || M ? null : (0, s.jsx)(I.default, {
                                    subscriptionTier: X.PremiumSubscriptionSKUs.TIER_2,
                                    fullWidth: !0,
                                    color: i.Button.Colors.WHITE,
                                    look: i.Button.Looks.OUTLINED,
                                    buttonText: N.default.isPremium(a) ? q.default.Messages.COLLECTIBLES_UPGRADE_FOR_DISCOUNT : q.default.Messages.COLLECTIBLES_SFA_UNLOCK_DISCOUNT,
                                    className: J.unlockDiscountButton,
                                    onlyShineOnHover: !0,
                                    onClick: W.closeCollectiblesShopProductDetailsModal,
                                    onSubscribeModalClose: () => {
                                        (0, W.openCollectiblesShopProductDetailsModal)({
                                            product: t,
                                            category: r,
                                            returnRef: C,
                                            analyticsLocations: L
                                        })
                                    }
                                })]
                            }), (0, s.jsx)(i.Text, {
                                color: "none",
                                className: J.disclaimer,
                                variant: "text-xxs/normal",
                                children: null != T ? null : M || _ ? V ? q.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : el ? q.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : q.default.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER : el ? q.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECTS_NON_PREMIUM_PURCHASE_DISCLAIMER : q.default.Messages.COLLECTIBLES_DETAILS_MODAL_NON_PREMIUM_PURCHASE_DISCLAIMER
                            })]
                        })]
                    })
                },
                es = e => {
                    let {
                        product: t,
                        user: a,
                        category: i
                    } = e, n = N.default.canUsePremiumProfileCustomization(a), r = (0, o.useStateFromStoresObject)([T.default], () => T.default.getAllPending()), d = (0, v.default)(a.id), u = !!(null == d ? void 0 : d.getPreviewBio(r.pendingBio).value), c = l.useMemo(() => {
                        var e;
                        return null !== (e = t.items.find(B.isAvatarDecorationRecord)) && void 0 !== e ? e : null
                    }, [t]), f = l.useMemo(() => t.items.find(j.isProfileEffectRecord), [t]);
                    return (0, s.jsxs)("div", {
                        className: null != c ? J.previewsContainerInner : J.profileEffectPreviewsContainerInner,
                        children: [(0, s.jsx)(_.default, {
                            ...r,
                            user: a,
                            canUsePremiumCustomization: n,
                            onAvatarChange: Z.NOOP,
                            onBannerChange: Z.NOOP,
                            bodyClassName: J.profileCustomizationBody,
                            pendingAvatarDecoration: null != c ? c : void 0,
                            pendingProfileEffectID: null == f ? void 0 : f.id,
                            forProfileEffectModal: null != f,
                            disabledInputs: !0,
                            hideExampleButton: !0,
                            hideFakeActivity: null != c || u,
                            hideBioSection: null != c
                        }), null != c && (0, s.jsx)(eo, {
                            user: a,
                            product: t,
                            category: i
                        })]
                    })
                },
                el = e => {
                    let {
                        author: t,
                        product: a
                    } = e, s = (0, f.createMessageRecord)({
                        ...(0, C.default)({
                            author: t,
                            channelId: "1337",
                            content: q.default.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
                        }),
                        state: V.MessageStates.SENT,
                        id: "0"
                    });
                    return s.author = new M.default({
                        ...s.author,
                        avatar_decoration_data: a.items.find(B.isAvatarDecorationRecord)
                    }), s
                },
                eo = e => {
                    let {
                        product: t,
                        user: a
                    } = e, l = el({
                        author: a,
                        product: t
                    });
                    return (0, s.jsx)(i.FocusBlock, {
                        children: (0, s.jsxs)(i.Card, {
                            className: J.chatPreview,
                            outline: !0,
                            "aria-hidden": !0,
                            children: [(0, s.jsx)(m.default, {
                                className: J.mockMessage,
                                author: (0, L.getMessageAuthor)(l),
                                message: l
                            }, l.id), (0, s.jsxs)("div", {
                                className: J.mockInput,
                                children: [(0, s.jsx)(A.default, {
                                    className: J.mockInputButton,
                                    width: 24,
                                    height: 24
                                }), (0, s.jsx)(p.default, {
                                    className: J.mockInputButton,
                                    width: 24,
                                    height: 24
                                })]
                            })]
                        })
                    })
                };
            var ei = e => {
                let {
                    transitionState: t,
                    onClose: a,
                    product: n,
                    category: u,
                    returnRef: c,
                    analyticsSource: f,
                    analyticsLocations: C
                } = e, L = (0, o.default)([O.default], () => O.default.getCurrentUser()), {
                    analyticsLocations: m,
                    AnalyticsLocationProvider: E
                } = (0, d.default)([...C, r.default.COLLECTIBLES_SHOP_DETAILS_MODAL]);
                (0, U.useProductDetailsLinkableRoute)(n);
                let I = l.useMemo(() => n.items.find(B.isAvatarDecorationRecord), [n]);
                return (l.useEffect(() => {
                    P.default.track(V.AnalyticEvents.OPEN_MODAL, {
                        type: V.AnalyticsSections.COLLECTIBLES_SHOP_DETAILS_MODAL,
                        source: f,
                        location_stack: m,
                        sku_id: n.skuId,
                        product_type: null != I ? "avatar decoration" : "profile effect"
                    }), n.items.map(x.productDetailsOpened)
                }, [f, m, n.skuId, n.items, I]), null == L) ? null : (0, s.jsx)(E, {
                    children: (0, s.jsx)(i.ModalRoot, {
                        hideShadow: !0,
                        className: J.modalRoot,
                        returnRef: c,
                        transitionState: t,
                        size: i.ModalSize.DYNAMIC,
                        children: (0, s.jsxs)(i.ModalContent, {
                            className: J.modalContent,
                            children: [(0, s.jsx)(ea, {
                                user: L,
                                product: n,
                                category: u,
                                onClose: a
                            }), (0, s.jsxs)("div", {
                                className: null != I ? J.collectiblePreviewsContainerWithChat : J.collectiblePreviewsContainerNoChat,
                                children: [(0, s.jsx)(w.default, {
                                    asset: u.banner,
                                    size: 540,
                                    className: J.categoryBanner
                                }), (0, s.jsx)(es, {
                                    user: L,
                                    product: n,
                                    category: u
                                })]
                            }), (0, s.jsx)(i.ModalCloseButton, {
                                onClick: a,
                                className: J.modalCloseButton,
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
                o = a("414456"),
                i = a.n(o),
                n = a("193865"),
                r = a("780571"),
                d = a("39331"),
                u = a("596368"),
                c = a("227439"),
                f = a("877671"),
                C = l.memo(function(e) {
                    var t, a, l;
                    let {
                        message: o,
                        channel: C,
                        compact: L,
                        className: m,
                        isGroupStart: E,
                        hideSimpleEmbedContent: I = !0,
                        disableInteraction: S
                    } = e, _ = (0, n.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = o.editedTimestamp) && void 0 !== t ? t : o.timestamp).valueOf()), h = (0, n.useShowImprovedMarkdownGuildExperimentConfig)(null !== (a = null == C ? void 0 : C.guild_id) && void 0 !== a ? a : "", (null !== (l = o.editedTimestamp) && void 0 !== l ? l : o.timestamp).valueOf()), {
                        content: g
                    } = (0, d.default)(o, {
                        hideSimpleEmbedContent: I,
                        allowList: _.showListsAndHeaders || h.showListsAndHeaders,
                        allowHeading: _.showListsAndHeaders || h.showListsAndHeaders,
                        allowLinks: _.showMaskedLinks || h.showMaskedLinks,
                        previewLinkTarget: _.showMaskedLinks || h.showMaskedLinks
                    });
                    return (0, s.jsx)(r.default, {
                        compact: L,
                        className: i(m, {
                            [f.message]: !0,
                            [f.cozyMessage]: !L,
                            [f.groupStart]: E
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