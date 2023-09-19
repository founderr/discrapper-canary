(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [70861], {
        545292: (e, t, n) => {
            e.exports = n.p + "3294183db720bd0985871f6aa43e6e28.png"
        },
        459897: (e, t, n) => {
            e.exports = n.p + "ba2f2540c2d139c6505d3e0d55575044.svg"
        },
        735885: (e, t, n) => {
            "use strict";
            n.d(t, {
                jN: () => i,
                xf: () => r,
                Ou: () => a
            });
            var o = n(744564);

            function i(e) {
                o.Z.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function r() {
                o.Z.dispatch({
                    type: "LAYER_POP"
                })
            }

            function a() {
                o.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        272200: (e, t, n) => {
            "use strict";
            n.d(t, {
                Qi: () => o,
                iw: () => i,
                Kw: () => r,
                Vh: () => a,
                ub: () => l,
                bB: () => s
            });
            var o, i, r, a, l, s;
            ! function(e) {
                e[e.BUILT_IN = 0] = "BUILT_IN";
                e[e.APPLICATION = 1] = "APPLICATION"
            }(o || (o = {}));
            ! function(e) {
                e[e.BUILT_IN = 0] = "BUILT_IN";
                e[e.BUILT_IN_TEXT = 1] = "BUILT_IN_TEXT";
                e[e.BUILT_IN_INTEGRATION = 2] = "BUILT_IN_INTEGRATION";
                e[e.BOT = 3] = "BOT";
                e[e.PLACEHOLDER = 4] = "PLACEHOLDER"
            }(i || (i = {}));
            ! function(e) {
                e[e.ROLE = 1] = "ROLE";
                e[e.USER = 2] = "USER";
                e[e.CHANNEL = 3] = "CHANNEL"
            }(r || (r = {}));
            ! function(e) {
                e.DISCOVERY = "discovery";
                e.SUGGESTION = "suggestion";
                e.MENTION = "mention";
                e.PASTE = "paste";
                e.RECALL = "recall";
                e.POPULAR_COMMANDS = "popular_commands";
                e.MJ_CHAT_BAR = "mj_chat_bar";
                e.QUERY = "query"
            }(a || (a = {}));
            ! function(e) {
                e[e.BUILT_IN = 1] = "BUILT_IN";
                e[e.FRECENCY = 2] = "FRECENCY";
                e[e.APP = 3] = "APP"
            }(l || (l = {}));
            ! function(e) {
                e[e.CHAT = 0] = "CHAT";
                e[e.APPLICATION_LAUNCHER = 1] = "APPLICATION_LAUNCHER"
            }(s || (s = {}))
        },
        897436: (e, t, n) => {
            "use strict";
            n.d(t, {
                Jp: () => c,
                Xx: () => d,
                JY: () => p
            });
            var o = n(318715),
                i = n(260561),
                r = n(473903),
                a = n(116094),
                l = n(473708),
                s = (0, i.B)({
                    kind: "user",
                    id: "2023-05_inventory_guild_packs",
                    label: "Inventory Guild Packs Experiment",
                    defaultConfig: {
                        desktopViewAndUseAndCollectEnabled: !1,
                        mobileViewAndUseEnabled: !1,
                        mobileAndFreemiumCollectEnabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Desktop view/use/collect",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 2,
                        label: "Desktop view/use/collect and mobile view/use",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 3,
                        label: "Read-only pack emoji for logged out users",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !1,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 4,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0
                        }
                    }, {
                        id: 5,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0
                        }
                    }]
                }),
                u = function(e) {
                    var t = e.user,
                        n = e.config,
                        o = n.desktopViewAndUseAndCollectEnabled,
                        i = (n.mobileViewAndUseEnabled, n.mobileAndFreemiumCollectEnabled);
                    false;
                    return {
                        viewAndUseEnabled: o,
                        showTryPacksModalAndV2Copy: i,
                        collectEnabled: a.ZP.isPremium(t) ? o : i
                    }
                },
                c = function(e) {
                    var t = e.user,
                        n = e.autoTrackExposure,
                        o = void 0 === n || n;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1
                    } : u({
                        user: t,
                        config: s.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: o
                        })
                    })
                },
                d = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            expressionSourceGuild: void 0,
                            autoTrackExposure: !0
                        },
                        n = t.expressionSourceGuild,
                        i = void 0 === n ? void 0 : n,
                        a = t.autoTrackExposure,
                        l = void 0 === a || a,
                        c = (0, o.ZP)([r.default], (function() {
                            return r.default.getCurrentUser()
                        })),
                        d = s.useExperiment({
                            location: "inventory_guild_setting_experiment"
                        }, {
                            autoTrackExposure: l
                        }),
                        f = u({
                            user: c,
                            config: d
                        }),
                        p = f.viewAndUseEnabled,
                        g = f.showTryPacksModalAndV2Copy,
                        b = f.collectEnabled,
                        m = p && b && null != i && !1 !== (null == i || null === (e = i.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible);
                    return {
                        viewAndUseEnabled: p,
                        collectEnabled: m,
                        showTryPacksModalAndV2Copy: g
                    }
                },
                f = (0, i.B)({
                    kind: "guild",
                    id: "2023-06_inventory_guild_setting",
                    label: "Inventory Guild Settings Experiment",
                    defaultConfig: {
                        showSettingsToggle: !1,
                        allowCollection: !1,
                        getNewSettingsDescription: function() {
                            return null
                        }
                    },
                    treatments: [{
                        id: 1,
                        label: "Show settings toggle, but collection is not allowed.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !1,
                            getNewSettingsDescription: function() {
                                return l.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_LATE_AUGUST
                            }
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: function() {
                                return l.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_AUGUST
                            }
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: function() {
                                return l.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_LATE_AUGUST
                            }
                        }
                    }]
                }),
                p = function(e) {
                    var t = f.useExperiment({
                        guildId: null != e ? e : "",
                        location: "482926_3"
                    }, {
                        autoTrackExposure: !0
                    });
                    return {
                        showSettingsToggle: t.showSettingsToggle,
                        allowCollection: t.allowCollection,
                        getNewSettingsDescription: t.getNewSettingsDescription
                    }
                }
        },
        317387: (e, t, n) => {
            "use strict";
            n.d(t, {
                L: () => a
            });
            var o, i, r = n(260561);
            ! function(e) {
                e.Global = "2022-09_premium_tier_0_global"
            }(o || (o = {}));
            ! function(e) {
                e[e.VARIANT_1 = 0] = "VARIANT_1";
                e[e.VARIANT_2 = 1] = "VARIANT_2"
            }(i || (i = {}));
            var a = (0, r.B)({
                kind: "user",
                id: o.Global,
                label: "Premium tier 0 (Global)",
                defaultConfig: {
                    enableTier0: !1
                },
                treatments: [{
                    id: 1,
                    label: "Variant 1",
                    config: {
                        enableTier0: !0,
                        variant: i.VARIANT_1
                    }
                }, {
                    id: 2,
                    label: "Variant 2",
                    config: {
                        enableTier0: !0,
                        variant: i.VARIANT_2
                    }
                }]
            })
        },
        245325: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => f
            });
            var o = n(202351),
                i = n(473903),
                r = n(551778),
                a = n(116094),
                l = n(317387),
                s = n(159895),
                u = n(884123),
                c = n(203600);
            var d = n(717035);

            function f(e) {
                var t = e.autoTrackExposure,
                    n = e.experiment,
                    f = e.location,
                    p = (0, o.e7)([i.default], (function() {
                        return i.default.getCurrentUser()
                    })),
                    g = (0, d.N)(),
                    b = null != g,
                    m = null != p && (0, a.I5)(p);
                (0, s.Z$)(n);
                var h = l.L.useExperiment({
                        location: "014fbb_1"
                    }, {
                        autoTrackExposure: !1
                    }).enableTier0,
                    E = n.useExperiment({
                        location: null != f ? f : "1"
                    }, {
                        autoTrackExposure: h && !m && !b && t
                    }),
                    _ = E.enabled,
                    T = E.useExpectedValue,
                    v = E.useLikelihood,
                    A = (0,
                        o.cj)([u.Z], (function() {
                        var e = u.Z.getState();
                        return {
                            fetched: e.fetched,
                            premiumLikelihood: e.premiumLikelihood
                        }
                    })),
                    y = A.premiumLikelihood,
                    w = A.fetched,
                    I = (0, o.e7)([r.Z], (function() {
                        return r.Z.isLoadedForSKUs([c.Si.TIER_0, c.Si.TIER_2])
                    })),
                    C = !m && _ && h && !b && (T ? !w || !I : !w),
                    N = c.p9.TIER_2;
                if (h)
                    if (b) {
                        var S = g.subscription_trial;
                        (null == S ? void 0 : S.sku_id) === c.Si.TIER_0 ? N = c.p9.TIER_0 : (null == S ? void 0 : S.sku_id) === c.Si.TIER_2 && (N = c.p9.TIER_2)
                    } else if (!m && !C && _)
                    if (T) {
                        N = function(e, t, n) {
                            return null == e ? c.p9.TIER_2 : e[c.Si.TIER_0] * t > e[c.Si.TIER_2] * n ? c.p9.TIER_0 : c.p9.TIER_2
                        }(y, (0, a.aS)(c.Xh.PREMIUM_MONTH_TIER_0).amount, (0, a.aS)(c.Xh.PREMIUM_MONTH_TIER_2).amount)
                    } else v && (N = function(e) {
                        if (null == e) return c.p9.TIER_0;
                        var t = e[s.Bc],
                            n = e[c.Si.TIER_0],
                            o = e[c.Si.TIER_2];
                        return o > n && o > t ? c.p9.TIER_2 : c.p9.TIER_0
                    }(y));
                return {
                    isLoading: C,
                    suggestedPremiumType: N
                }
            }
        },
        442212: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => w
            });
            var o = n(785893),
                i = n(667294),
                r = n(294184),
                a = n.n(r),
                l = n(882723),
                s = n(153686),
                u = n(19585),
                c = n(594302),
                d = n(652591),
                f = n(189146),
                p = n(717035),
                g = n(455706),
                b = n(70535),
                m = n(203600),
                h = n(2590),
                E = n(473708),
                _ = n(296024),
                T = n.n(_),
                v = n(545292),
                A = n.n(v);

            function y(e, t) {
                if (null == e) return {};
                var n, o, i = function(e, t) {
                    if (null == e) return {};
                    var n, o, i = {},
                        r = Object.keys(e);
                    for (o = 0; o < r.length; o++) {
                        n = r[o];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < r.length; o++) {
                        n = r[o];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function w(e) {
                var t, n, r = e.title,
                    _ = e.type,
                    v = e.guildBoostProps,
                    w = e.analyticsSource,
                    I = e.analyticsLocation,
                    C = e.body,
                    N = e.context,
                    S = e.glowUp,
                    L = e.modalClassName,
                    O = e.artContainerClassName,
                    R = e.bodyClassName,
                    x = e.transitionState,
                    k = e.onClose,
                    P = e.onSubscribeClick,
                    U = e.onSecondaryClick,
                    M = e.secondaryCTA,
                    B = e.subscribeButtonText,
                    j = e.showNewBadge,
                    D = void 0 !== j && j,
                    V = e.enableArtBoxShadow,
                    Z = void 0 === V || V,
                    G = e.subscriptionTier,
                    H = void 0 === G ? m.Si.TIER_2 : G,
                    F = e.isLoading,
                    Y = void 0 !== F && F,
                    z = e.hideBackButton,
                    K = e.backButtonText,
                    W = y(e, ["title", "type", "guildBoostProps", "analyticsSource", "analyticsLocation", "body", "context", "glowUp", "modalClassName", "artContainerClassName", "bodyClassName", "transitionState", "onClose", "onSubscribeClick", "onSecondaryClick", "secondaryCTA", "subscribeButtonText", "showNewBadge", "enableArtBoxShadow", "subscriptionTier", "isLoading", "hideBackButton", "backButtonText"]),
                    X = null != v,
                    $ = (0, p.N)(),
                    q = (null == $ || null === (t = $.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === H && !X,
                    J = (0, f.zH)(!q),
                    Q = (0,
                        u.Z)(s.Z.PREMIUM_UPSELL_MODAL).analyticsLocations;
                i.useEffect((function() {
                    Y || (X ? d.default.track(h.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                        type: "".concat(_, " - Tier ").concat(v.boostedGuildTier),
                        guild_id: v.guild.id,
                        channel_id: v.channelId,
                        location: I,
                        location_stack: Q
                    }) : d.default.track(h.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: _,
                        source: w,
                        location_stack: Q,
                        sku_id: H
                    }))
                }), [X, H, Y]);
                var ee, te = Z ? a()(T().artContainer, T().artContainerBoxShadow, O) : a()(T().artContainer, O),
                    ne = null;
                ne = "artURL" in W ? (0, o.jsx)("img", {
                    className: T().art,
                    alt: "",
                    src: W.artURL
                }) : W.artElement;
                return (0, o.jsxs)(l.ModalRoot, {
                    className: a()(T().root, L),
                    "aria-label": r,
                    transitionState: x,
                    children: [(0, o.jsxs)("div", {
                        className: te,
                        children: [ne, D ? (0, o.jsx)("img", {
                            className: T().sparkleBadge,
                            alt: "",
                            src: A()
                        }) : null]
                    }), (0, o.jsx)(l.ModalContent, {
                        className: T().content,
                        children: Y ? (0, o.jsx)(l.Spinner, {}) : (0, o.jsx)(o.Fragment, {
                            children: q ? (0, o.jsx)(o.Fragment, {
                                children: (0, o.jsx)(b.ZP, {
                                    onClose: k,
                                    type: _,
                                    subscriptionTier: null !== (ee = null == $ || null === (n = $.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== ee ? ee : m.Si.TIER_2,
                                    headingText: r,
                                    context: N,
                                    analyticsLocationObject: I,
                                    children: S
                                })
                            }) : (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(l.Heading, {
                                    className: T().header,
                                    variant: "heading-xl/semibold",
                                    children: r
                                }), (0, o.jsx)(l.Text, {
                                    variant: "text-md/normal",
                                    className: a()(R),
                                    children: C
                                })]
                            })
                        })
                    }), (0, o.jsxs)(l.ModalFooter, {
                        className: T().footer,
                        children: [(0, o.jsxs)("div", {
                            className: T().primaryActions,
                            children: [null != M ? (0, o.jsx)(l.Button, {
                                className: T().secondaryAction,
                                onClick: U,
                                size: l.Button.Sizes.SMALL,
                                color: l.Button.Colors.PRIMARY,
                                look: l.Button.Looks.LINK,
                                children: M
                            }) : null, function() {
                                var e;
                                if (X) return (0, o.jsx)(c.Z, {
                                    analyticsLocation: I,
                                    guild: v.guild,
                                    onClose: k
                                });
                                var t = q ? J ? E.Z.Messages.MARKETING_PAGE_CTA_TRY_1_MONTH_FREE : (null == $ || null === (e = $.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === m.Si.TIER_2 ? E.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : E.Z.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : void 0,
                                    n = q ? null == $ ? void 0 : $.trial_id : null;
                                return (0, o.jsx)(g.Z, {
                                    premiumModalAnalyticsLocation: I,
                                    subscriptionTier: H,
                                    trialId: n,
                                    size: l.Button.Sizes.SMALL,
                                    color: l.Button.Colors.GREEN,
                                    onClick: function() {
                                        null == P || P();
                                        k()
                                    },
                                    buttonText: null != B ? B : t
                                })
                            }()]
                        }), !z && (0, o.jsx)(l.Button, {
                            onClick: k,
                            size: l.Button.Sizes.SMALL,
                            color: l.Button.Colors.PRIMARY,
                            look: l.Button.Looks.LINK,
                            children: null != K ? K : E.Z.Messages.BACK
                        })]
                    })]
                })
            }
        },
        982871: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => h
            });
            var o = n(785893),
                i = (n(667294), n(593166)),
                r = n(799066),
                a = n(245325),
                l = n(442212),
                s = n(203600),
                u = n(2590),
                c = n(473708),
                d = n(117977),
                f = n.n(d),
                p = n(459897),
                g = n.n(p);

            function b(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function m(e, t) {
                if (null == e) return {};
                var n, o, i = function(e, t) {
                    if (null == e) return {};
                    var n, o, i = {},
                        r = Object.keys(e);
                    for (o = 0; o < r.length; o++) {
                        n = r[o];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < r.length; o++) {
                        n = r[o];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function h(e) {
                var t = function() {
                        null == p || p();
                        n();
                        (0, i.z)()
                    },
                    n = e.onClose,
                    d = e.analyticsSource,
                    p = e.onLearnMore,
                    h = m(e, ["onClose", "analyticsSource", "onLearnMore"]),
                    E = (0, a.Z)({
                        autoTrackExposure: !0,
                        experiment: r.Z,
                        location: "video_backgrounds_upsell"
                    }),
                    _ = E.isLoading,
                    T = E.suggestedPremiumType === s.p9.TIER_0 ? s.Si.TIER_0 : s.Si.TIER_2,
                    v = T === s.Si.TIER_0 ? c.Z.Messages.VIDEO_BACKGROUND_UPSELL_BODY_TIER_0.format({
                        onLearnMore: t
                    }) : c.Z.Messages.VIDEO_BACKGROUND_UPSELL_BODY.format({
                        onLearnMore: t
                    });
                return (0, o.jsx)(l.Z, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            o = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        o.forEach((function(t) {
                            b(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    artURL: g(),
                    artContainerClassName: f().videoBackgroundArt,
                    type: s.cd.VIDEO_BACKGROUNDS_MODAL,
                    title: c.Z.Messages.VIDEO_BACKGROUND_UPSELL_TITLE,
                    body: v,
                    glowUp: v,
                    analyticsSource: d,
                    analyticsLocation: {
                        page: u.ZY5.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
                        object: u.qAy.BUTTON_CTA
                    },
                    onClose: n,
                    subscriptionTier: T,
                    isLoading: _
                }, h))
            }
        },
        347117: (e, t, n) => {
            "use strict";
            n.d(t, {
                Tj: () => f,
                zp: () => p,
                Dc: () => g,
                rn: () => b,
                rv: () => m,
                XN: () => E,
                OF: () => _,
                fD: () => v,
                QB: () => A,
                Bo: () => y,
                c0: () => C
            });
            var o = n(441143),
                i = n.n(o),
                r = n(496486),
                a = n.n(r),
                l = n(16243),
                s = n.n(l);

            function u(e, t, n, o, i, r, a) {
                try {
                    var l = e[r](a),
                        s = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(s) : Promise.resolve(s).then(o, i)
            }

            function c(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(o, i) {
                        var r = e.apply(t, n);

                        function a(e) {
                            u(r, o, i, a, l, "next", e)
                        }

                        function l(e) {
                            u(r, o, i, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var d = function(e, t) {
                var n, o, i, r, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function l(r) {
                    return function(l) {
                        return function(r) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                                (o = 0, i) && (r = [2 & r[0], i.value]);
                                switch (r[0]) {
                                    case 0:
                                    case 1:
                                        i = r;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: r[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        o = r[1];
                                        r = [0];
                                        continue;
                                    case 7:
                                        r = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                            a.label = r[1];
                                            break
                                        }
                                        if (6 === r[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = r;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(r);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                r = t.call(e, a)
                            } catch (e) {
                                r = [6, e];
                                o = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & r[0]) throw r[1];
                            return {
                                value: r[0] ? r[1] : void 0,
                                done: !0
                            }
                        }([r, l])
                    }
                }
            };
            0;

            function f(e) {
                var t = e.width,
                    n = e.height,
                    o = e.maxWidth,
                    i = e.maxHeight,
                    r = e.minWidth,
                    a = void 0 === r ? 0 : r,
                    l = e.minHeight,
                    s = void 0 === l ? 0 : l;
                if (t !== o || n !== i) {
                    var u = t > o ? o / t : 1;
                    t = Math.max(Math.round(t * u), a);
                    var c = (n = Math.max(Math.round(n * u), s)) > i ? i / n : 1;
                    t = Math.max(Math.round(t * c), a);
                    n = Math.max(Math.round(n * c), s)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function p(e, t) {
                var n = Math.min(Math.round(.65 * window.innerHeight), 2e3);
                return f({
                    width: e,
                    height: t,
                    maxWidth: Math.min(Math.round(.75 * window.innerWidth), 2e3),
                    maxHeight: n
                })
            }

            function g(e) {
                var t = e.width,
                    n = e.height,
                    o = e.maxWidth,
                    i = e.maxHeight,
                    r = 1;
                t > o && (r = o / t);
                t = Math.round(t * r);
                var a = 1;
                (n = Math.round(n * r)) > i && (a = i / n);
                return Math.min(r * a, 1)
            }

            function b(e) {
                var t = e.width,
                    n = e.height,
                    o = e.maxWidth,
                    i = e.maxHeight;
                if (t === n) return 1;
                var r = Math.max(o / t, i / n);
                return Math.min(r, 1)
            }

            function m(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            var h = [
                [0, 0, 0]
            ];

            function E(e, t, n) {
                var o = document.createElement("canvas"),
                    i = o.getContext("2d");
                if (null == i) return h;
                var r = o.width = 0 === e.width ? 128 : e.width,
                    a = o.height = 0 === e.height ? 128 : e.height;
                i.drawImage(e, 0, 0, r, a);
                var l = function(e, t, n) {
                        for (var o, i, r, a, l, s = [], u = 0; u < t; u += n) {
                            i = e[0 + (o = 4 * u)];
                            r = e[o + 1];
                            a = e[o + 2];
                            (void 0 === (l = e[o + 3]) || l >= 125) && (i > 250 && r > 250 && a > 250 || s.push([i, r, a]))
                        }
                        return s
                    }(i.getImageData(0, 0, r, a).data, r * a, n),
                    u = s()(l, t);
                return "boolean" == typeof u ? h : u.palette()
            }
            var _ = function(e) {
                    return T(e)
                },
                T = a().memoize((function(e) {
                    return new Promise((function(t, n) {
                        var o = new Image;
                        o.crossOrigin = "Anonymous";
                        o.onerror = function(e) {
                            n(e);
                            o.onerror = o.onload = null;
                            o = null
                        };
                        o.onload = function() {
                            t(E(o, 5, 10));
                            o.onerror = o.onload = null;
                            o = null
                        };
                        o.src = e
                    }))
                }));

            function v(e) {
                return new Promise((function(t, n) {
                    var o = new FileReader;
                    o.readAsDataURL(e);
                    o.onload = function() {
                        i()("string" == typeof o.result, "Result must be a string");
                        t(o.result)
                    };
                    o.onerror = function(e) {
                        return n(e)
                    }
                }))
            }

            function A(e) {
                var t = e.split(";base64,");
                i()(2 === t.length, "Input data is not a valid image.");
                return atob(t[1]).length
            }

            function y(e, t, n) {
                return w.apply(this, arguments)
            }

            function w() {
                return (w = c((function(e, t, n) {
                    var o;
                    return d(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, I(e).arrayBuffer()];
                            case 1:
                                o = i.sent();
                                return [2, new File([o], t, {
                                    type: n
                                })]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function I(e) {
                var t;
                t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                for (var n = e.split(",")[0].split(":")[1].split(";")[0], o = new Uint8Array(t.length), i = 0; i < t.length; i++) o[i] = t.charCodeAt(i);
                return new Blob([o], {
                    type: n
                })
            }

            function C(e) {
                return N.apply(this, arguments)
            }

            function N() {
                return (N = c((function(e) {
                    var t, n, o;
                    return d(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                if ("image/png" !== (null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0])) throw new Error("File is not a PNG");
                                return [4, e.text()];
                            case 1:
                                n = i.sent();
                                return (o = n.indexOf("IDAT")) > 0 && -1 !== n.substring(0, o).indexOf("acTL") ? [2, !0] : [2, !1]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        391438: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var o = n(281110),
                i = n(652591);

            function r(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    o.forEach((function(t) {
                        r(e, t, n[t])
                    }))
                }
                return e
            }

            function l(e, t) {
                if (null == e) return {};
                var n, o, i = function(e, t) {
                    if (null == e) return {};
                    var n, o, i = {},
                        r = Object.keys(e);
                    for (o = 0; o < r.length; o++) {
                        n = r[o];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < r.length; o++) {
                        n = r[o];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function s(e, t, n) {
                var o = t.trackedActionData,
                    r = l(t, ["trackedActionData"]),
                    s = {
                        url: r.url,
                        request_method: n
                    };
                return new Promise((function(t, n) {
                    e(r).then((function(e) {
                        var n = o.properties;
                        "function" == typeof o.properties && (n = o.properties(e));
                        (0, i.trackNetworkAction)(o.event, a({
                            status_code: e.status
                        }, s, n));
                        t(e)
                    })).catch((function(e) {
                        var t, r, l = o.properties;
                        "function" == typeof o.properties && (l = o.properties(e));
                        (0, i.trackNetworkAction)(o.event, a({
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (r = e.body) || void 0 === r ? void 0 : r.message
                        }, s, l));
                        n(e)
                    }))
                }))
            }
            const u = {
                get: function(e) {
                    return s(o.ZP.get, e, "get")
                },
                post: function(e) {
                    return s(o.ZP.post, e, "post")
                },
                put: function(e) {
                    return s(o.ZP.put, e, "put")
                },
                patch: function(e) {
                    return s(o.ZP.patch, e, "patch")
                },
                delete: function(e) {
                    return s(o.ZP.delete, e, "del")
                }
            }
        },
        322500: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var o = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i,
                i = /^((https:\/\/)?(discord\.gg\/)|(discord\.com\/)(invite\/)?)?[A-Za-z0-9]{8,8}$/,
                r = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                a = /^(.*)#[0-9]{1,5}$/,
                l = ["@", "#", ":", "```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage"],
                s = ["discordtag", "everyone", "here", "discord nitro", "discord"];
            const u = {
                isEmail: function(e) {
                    return o.test(e)
                },
                isInvite: function(e) {
                    return i.test(e)
                },
                isPhoneNumber: function(e) {
                    return r.test(e)
                },
                isUserTagLike: function(e) {
                    var t = a.exec(e);
                    if (null != t && t.length > 1) {
                        var n = t[1],
                            o = l.some((function(e) {
                                return n.includes(e)
                            })),
                            i = s.includes(n);
                        return !o && !i
                    }
                    return !1
                }
            }
        }
    }
]);