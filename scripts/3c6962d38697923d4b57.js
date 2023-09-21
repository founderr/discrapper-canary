(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [47387], {
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
                Ou: () => l
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

            function l() {
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
                Vh: () => l,
                ub: () => s,
                bB: () => a
            });
            var o, i, r, l, s, a;
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
            }(l || (l = {}));
            ! function(e) {
                e[e.BUILT_IN = 1] = "BUILT_IN";
                e[e.FRECENCY = 2] = "FRECENCY";
                e[e.APP = 3] = "APP"
            }(s || (s = {}));
            ! function(e) {
                e[e.CHAT = 0] = "CHAT";
                e[e.APPLICATION_LAUNCHER = 1] = "APPLICATION_LAUNCHER"
            }(a || (a = {}))
        },
        897436: (e, t, n) => {
            "use strict";
            n.d(t, {
                Jp: () => u,
                Xx: () => d,
                JY: () => f
            });
            var o = n(318715),
                i = n(260561),
                r = n(473903),
                l = n(116094),
                s = n(473708),
                a = (0, i.B)({
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
                c = function(e) {
                    var t = e.user,
                        n = e.config,
                        o = n.desktopViewAndUseAndCollectEnabled,
                        i = (n.mobileViewAndUseEnabled, n.mobileAndFreemiumCollectEnabled);
                    false;
                    return {
                        viewAndUseEnabled: o,
                        showTryPacksModalAndV2Copy: i,
                        collectEnabled: l.ZP.isPremium(t) ? o : i
                    }
                },
                u = function(e) {
                    var t = e.user,
                        n = e.autoTrackExposure,
                        o = void 0 === n || n;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1
                    } : c({
                        user: t,
                        config: a.getCurrentConfig({
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
                        l = t.autoTrackExposure,
                        s = void 0 === l || l,
                        u = (0, o.ZP)([r.default], (function() {
                            return r.default.getCurrentUser()
                        })),
                        d = a.useExperiment({
                            location: "inventory_guild_setting_experiment"
                        }, {
                            autoTrackExposure: s
                        }),
                        p = c({
                            user: u,
                            config: d
                        }),
                        f = p.viewAndUseEnabled,
                        b = p.showTryPacksModalAndV2Copy,
                        _ = p.collectEnabled,
                        E = f && _ && null != i && !1 !== (null == i || null === (e = i.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible);
                    return {
                        viewAndUseEnabled: f,
                        collectEnabled: E,
                        showTryPacksModalAndV2Copy: b
                    }
                },
                p = (0, i.B)({
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
                                return s.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_LATE_AUGUST
                            }
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: function() {
                                return s.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_AUGUST
                            }
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: function() {
                                return s.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_LATE_AUGUST
                            }
                        }
                    }]
                }),
                f = function(e) {
                    var t = p.useExperiment({
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
                L: () => l
            });
            var o, i, r = n(260561);
            ! function(e) {
                e.Global = "2022-09_premium_tier_0_global"
            }(o || (o = {}));
            ! function(e) {
                e[e.VARIANT_1 = 0] = "VARIANT_1";
                e[e.VARIANT_2 = 1] = "VARIANT_2"
            }(i || (i = {}));
            var l = (0, r.B)({
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
                Z: () => p
            });
            var o = n(202351),
                i = n(473903),
                r = n(551778),
                l = n(116094),
                s = n(317387),
                a = n(159895),
                c = n(884123),
                u = n(203600);
            var d = n(717035);

            function p(e) {
                var t = e.autoTrackExposure,
                    n = e.experiment,
                    p = e.location,
                    f = (0, o.e7)([i.default], (function() {
                        return i.default.getCurrentUser()
                    })),
                    b = (0, d.N)(),
                    _ = null != b,
                    E = null != f && (0, l.I5)(f);
                (0, a.Z$)(n);
                var g = s.L.useExperiment({
                        location: "014fbb_1"
                    }, {
                        autoTrackExposure: !1
                    }).enableTier0,
                    T = n.useExperiment({
                        location: null != p ? p : "1"
                    }, {
                        autoTrackExposure: g && !E && !_ && t
                    }),
                    m = T.enabled,
                    A = T.useExpectedValue,
                    I = T.useLikelihood,
                    y = (0,
                        o.cj)([c.Z], (function() {
                        var e = c.Z.getState();
                        return {
                            fetched: e.fetched,
                            premiumLikelihood: e.premiumLikelihood
                        }
                    })),
                    v = y.premiumLikelihood,
                    C = y.fetched,
                    S = (0, o.e7)([r.Z], (function() {
                        return r.Z.isLoadedForSKUs([u.Si.TIER_0, u.Si.TIER_2])
                    })),
                    w = !E && m && g && !_ && (A ? !C || !S : !C),
                    O = u.p9.TIER_2;
                if (g)
                    if (_) {
                        var N = b.subscription_trial;
                        (null == N ? void 0 : N.sku_id) === u.Si.TIER_0 ? O = u.p9.TIER_0 : (null == N ? void 0 : N.sku_id) === u.Si.TIER_2 && (O = u.p9.TIER_2)
                    } else if (!E && !w && m)
                    if (A) {
                        O = function(e, t, n) {
                            return null == e ? u.p9.TIER_2 : e[u.Si.TIER_0] * t > e[u.Si.TIER_2] * n ? u.p9.TIER_0 : u.p9.TIER_2
                        }(v, (0, l.aS)(u.Xh.PREMIUM_MONTH_TIER_0).amount, (0, l.aS)(u.Xh.PREMIUM_MONTH_TIER_2).amount)
                    } else I && (O = function(e) {
                        if (null == e) return u.p9.TIER_0;
                        var t = e[a.Bc],
                            n = e[u.Si.TIER_0],
                            o = e[u.Si.TIER_2];
                        return o > n && o > t ? u.p9.TIER_2 : u.p9.TIER_0
                    }(v));
                return {
                    isLoading: w,
                    suggestedPremiumType: O
                }
            }
        },
        442212: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => C
            });
            var o = n(785893),
                i = n(667294),
                r = n(294184),
                l = n.n(r),
                s = n(882723),
                a = n(153686),
                c = n(19585),
                u = n(594302),
                d = n(652591),
                p = n(189146),
                f = n(717035),
                b = n(455706),
                _ = n(70535),
                E = n(203600),
                g = n(2590),
                T = n(473708),
                m = n(296024),
                A = n.n(m),
                I = n(545292),
                y = n.n(I);

            function v(e, t) {
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

            function C(e) {
                var t, n, r = e.title,
                    m = e.type,
                    I = e.guildBoostProps,
                    C = e.analyticsSource,
                    S = e.analyticsLocation,
                    w = e.body,
                    O = e.context,
                    N = e.glowUp,
                    R = e.modalClassName,
                    h = e.artContainerClassName,
                    L = e.bodyClassName,
                    P = e.transitionState,
                    k = e.onClose,
                    U = e.onSubscribeClick,
                    x = e.onSecondaryClick,
                    M = e.secondaryCTA,
                    B = e.subscribeButtonText,
                    j = e.showNewBadge,
                    V = void 0 !== j && j,
                    D = e.enableArtBoxShadow,
                    Z = void 0 === D || D,
                    G = e.subscriptionTier,
                    Y = void 0 === G ? E.Si.TIER_2 : G,
                    F = e.isLoading,
                    H = void 0 !== F && F,
                    K = e.hideBackButton,
                    z = e.backButtonText,
                    W = v(e, ["title", "type", "guildBoostProps", "analyticsSource", "analyticsLocation", "body", "context", "glowUp", "modalClassName", "artContainerClassName", "bodyClassName", "transitionState", "onClose", "onSubscribeClick", "onSecondaryClick", "secondaryCTA", "subscribeButtonText", "showNewBadge", "enableArtBoxShadow", "subscriptionTier", "isLoading", "hideBackButton", "backButtonText"]),
                    X = null != I,
                    q = (0, f.N)(),
                    J = (null == q || null === (t = q.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === Y && !X,
                    Q = (0, p.zH)(!J),
                    $ = (0,
                        c.Z)(a.Z.PREMIUM_UPSELL_MODAL).analyticsLocations;
                i.useEffect((function() {
                    H || (X ? d.default.track(g.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                        type: "".concat(m, " - Tier ").concat(I.boostedGuildTier),
                        guild_id: I.guild.id,
                        channel_id: I.channelId,
                        location: S,
                        location_stack: $
                    }) : d.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: m,
                        source: C,
                        location_stack: $,
                        sku_id: Y
                    }))
                }), [X, Y, H]);
                var ee, te = Z ? l()(A().artContainer, A().artContainerBoxShadow, h) : l()(A().artContainer, h),
                    ne = null;
                ne = "artURL" in W ? (0, o.jsx)("img", {
                    className: A().art,
                    alt: "",
                    src: W.artURL
                }) : W.artElement;
                return (0, o.jsxs)(s.ModalRoot, {
                    className: l()(A().root, R),
                    "aria-label": r,
                    transitionState: P,
                    children: [(0, o.jsxs)("div", {
                        className: te,
                        children: [ne, V ? (0, o.jsx)("img", {
                            className: A().sparkleBadge,
                            alt: "",
                            src: y()
                        }) : null]
                    }), (0, o.jsx)(s.ModalContent, {
                        className: A().content,
                        children: H ? (0, o.jsx)(s.Spinner, {}) : (0, o.jsx)(o.Fragment, {
                            children: J ? (0, o.jsx)(o.Fragment, {
                                children: (0, o.jsx)(_.ZP, {
                                    onClose: k,
                                    type: m,
                                    subscriptionTier: null !== (ee = null == q || null === (n = q.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== ee ? ee : E.Si.TIER_2,
                                    headingText: r,
                                    context: O,
                                    analyticsLocationObject: S,
                                    children: N
                                })
                            }) : (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(s.Heading, {
                                    className: A().header,
                                    variant: "heading-xl/semibold",
                                    children: r
                                }), (0, o.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    className: l()(L),
                                    children: w
                                })]
                            })
                        })
                    }), (0, o.jsxs)(s.ModalFooter, {
                        className: A().footer,
                        children: [(0, o.jsxs)("div", {
                            className: A().primaryActions,
                            children: [null != M ? (0, o.jsx)(s.Button, {
                                className: A().secondaryAction,
                                onClick: x,
                                size: s.Button.Sizes.SMALL,
                                color: s.Button.Colors.PRIMARY,
                                look: s.Button.Looks.LINK,
                                children: M
                            }) : null, function() {
                                var e;
                                if (X) return (0, o.jsx)(u.Z, {
                                    analyticsLocation: S,
                                    guild: I.guild,
                                    onClose: k
                                });
                                var t = J ? Q ? T.Z.Messages.MARKETING_PAGE_CTA_TRY_1_MONTH_FREE : (null == q || null === (e = q.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === E.Si.TIER_2 ? T.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : T.Z.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : void 0,
                                    n = J ? null == q ? void 0 : q.trial_id : null;
                                return (0, o.jsx)(b.Z, {
                                    premiumModalAnalyticsLocation: S,
                                    subscriptionTier: Y,
                                    trialId: n,
                                    size: s.Button.Sizes.SMALL,
                                    color: s.Button.Colors.GREEN,
                                    onClick: function() {
                                        null == U || U();
                                        k()
                                    },
                                    buttonText: null != B ? B : t
                                })
                            }()]
                        }), !K && (0, o.jsx)(s.Button, {
                            onClick: k,
                            size: s.Button.Sizes.SMALL,
                            color: s.Button.Colors.PRIMARY,
                            look: s.Button.Looks.LINK,
                            children: null != z ? z : T.Z.Messages.BACK
                        })]
                    })]
                })
            }
        },
        982871: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => g
            });
            var o = n(785893),
                i = (n(667294), n(593166)),
                r = n(799066),
                l = n(245325),
                s = n(442212),
                a = n(203600),
                c = n(2590),
                u = n(473708),
                d = n(117977),
                p = n.n(d),
                f = n(459897),
                b = n.n(f);

            function _(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function E(e, t) {
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

            function g(e) {
                var t = function() {
                        null == f || f();
                        n();
                        (0, i.z)()
                    },
                    n = e.onClose,
                    d = e.analyticsSource,
                    f = e.onLearnMore,
                    g = E(e, ["onClose", "analyticsSource", "onLearnMore"]),
                    T = (0, l.Z)({
                        autoTrackExposure: !0,
                        experiment: r.Z,
                        location: "video_backgrounds_upsell"
                    }),
                    m = T.isLoading,
                    A = T.suggestedPremiumType === a.p9.TIER_0 ? a.Si.TIER_0 : a.Si.TIER_2,
                    I = A === a.Si.TIER_0 ? u.Z.Messages.VIDEO_BACKGROUND_UPSELL_BODY_TIER_0.format({
                        onLearnMore: t
                    }) : u.Z.Messages.VIDEO_BACKGROUND_UPSELL_BODY.format({
                        onLearnMore: t
                    });
                return (0, o.jsx)(s.Z, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            o = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        o.forEach((function(t) {
                            _(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    artURL: b(),
                    artContainerClassName: p().videoBackgroundArt,
                    type: a.cd.VIDEO_BACKGROUNDS_MODAL,
                    title: u.Z.Messages.VIDEO_BACKGROUND_UPSELL_TITLE,
                    body: I,
                    glowUp: I,
                    analyticsSource: d,
                    analyticsLocation: {
                        page: c.ZY5.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
                        object: c.qAy.BUTTON_CTA
                    },
                    onClose: n,
                    subscriptionTier: A,
                    isLoading: m
                }, g))
            }
        },
        205294: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var o = n(169376);

            function i(e) {
                i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return i(e)
            }

            function r(e, t) {
                return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function l(e, t) {
                l = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return l(e, t)
            }
            var s = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function a(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = i(e);
                    if (t) {
                        var l = i(this).constructor;
                        n = Reflect.construct(o, arguments, l)
                    } else n = o.apply(this, arguments);
                    return r(this, n)
                }
            }
            const c = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && l(e, t)
                }(n, e);
                var t = a(n);

                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var o;
                    (o = t.call(this)).id = e.id;
                    o.subscriptionId = e.subscriptionId;
                    o.premiumGuildSubscription = e.premiumGuildSubscription;
                    o.canceled = e.canceled;
                    o.cooldownEndsAt = e.cooldownEndsAt;
                    o.subscription = e.subscription;
                    return o
                }
                var o = n.prototype;
                o.isOnCooldown = function() {
                    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
                };
                o.isAvailable = function() {
                    return null == this.premiumGuildSubscription && !this.isOnCooldown()
                };
                n.createFromServer = function(e, t) {
                    return new n({
                        id: e.id,
                        subscriptionId: e.subscription_id,
                        premiumGuildSubscription: null != e.premium_guild_subscription ? {
                            id: e.premium_guild_subscription.id,
                            guildId: e.premium_guild_subscription.guild_id
                        } : null,
                        canceled: e.canceled,
                        cooldownEndsAt: e.cooldown_ends_at,
                        subscription: t
                    })
                };
                return n
            }(o.Z)
        },
        391438: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
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

            function l(e) {
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

            function s(e, t) {
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

            function a(e, t, n) {
                var o = t.trackedActionData,
                    r = s(t, ["trackedActionData"]),
                    a = {
                        url: r.url,
                        request_method: n
                    };
                return new Promise((function(t, n) {
                    e(r).then((function(e) {
                        var n = o.properties;
                        "function" == typeof o.properties && (n = o.properties(e));
                        (0, i.trackNetworkAction)(o.event, l({
                            status_code: e.status
                        }, a, n));
                        t(e)
                    })).catch((function(e) {
                        var t, r, s = o.properties;
                        "function" == typeof o.properties && (s = o.properties(e));
                        (0,
                            i.trackNetworkAction)(o.event, l({
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (r = e.body) || void 0 === r ? void 0 : r.message
                        }, a, s));
                        n(e)
                    }))
                }))
            }
            const c = {
                get: function(e) {
                    return a(o.ZP.get, e, "get")
                },
                post: function(e) {
                    return a(o.ZP.post, e, "post")
                },
                put: function(e) {
                    return a(o.ZP.put, e, "put")
                },
                patch: function(e) {
                    return a(o.ZP.patch, e, "patch")
                },
                delete: function(e) {
                    return a(o.ZP.delete, e, "del")
                }
            }
        }
    }
]);