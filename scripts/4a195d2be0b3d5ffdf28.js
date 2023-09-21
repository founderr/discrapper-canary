(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [48603], {
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
        320142: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var o = n(120415);

            function i(e, t, n, o, i, r, l) {
                try {
                    var a = e[r](l),
                        s = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(s) : Promise.resolve(s).then(o, i)
            }

            function r(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(o, r) {
                        var l = e.apply(t, n);

                        function a(e) {
                            i(l, o, r, a, s, "next", e)
                        }

                        function s(e) {
                            i(l, o, r, a, s, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var l = function(e, t) {
                var n, o, i, r, l = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    },
                    "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                        return this
                    }), r;

                function a(r) {
                    return function(a) {
                        return function(r) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                                (o = 0, i) && (r = [2 & r[0], i.value]);
                                switch (r[0]) {
                                    case 0:
                                    case 1:
                                        i = r;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: r[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        o = r[1];
                                        r = [0];
                                        continue;
                                    case 7:
                                        r = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                            l.label = r[1];
                                            break
                                        }
                                        if (6 === r[0] && l.label < i[1]) {
                                            l.label = i[1];
                                            i = r;
                                            break
                                        }
                                        if (i && l.label < i[2]) {
                                            l.label = i[2];
                                            l.ops.push(r);
                                            break
                                        }
                                        i[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                r = t.call(e, l)
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
                        }([r, a])
                    }
                }
            };

            function a(e, t) {
                return s.apply(this, arguments)
            }

            function s() {
                return (s = r((function(e, t) {
                    var i, r, a, s;
                    return l(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                0;
                                return [4, Promise.all([n.e(40532), n.e(29392), n.e(39685), n.e(47007), n.e(79249), n.e(69876), n.e(6543), n.e(29342), n.e(84832), n.e(27499), n.e(79913), n.e(27764), n.e(64466), n.e(92465), n.e(45353), n.e(10675), n.e(73679), n.e(73727), n.e(87440), n.e(52555), n.e(61953), n.e(84441), n.e(67367), n.e(14606), n.e(4230), n.e(24501), n.e(56984)]).then(n.bind(n, 624501))];
                            case 1:
                                i = l.sent(), r = i.default;
                                if (null != (a = r(e, {
                                        skipExtensionCheck: t,
                                        analyticsLocations: []
                                    }))) a(null);
                                else if (o.FB) window.open(e);
                                else {
                                    (s = document.createElement("a")).href = e;
                                    s.target = "_blank";
                                    s.rel = "noreferrer noopener";
                                    s.click()
                                }
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        272200: (e, t, n) => {
            "use strict";
            n.d(t, {
                Qi: () => o,
                iw: () => i,
                Kw: () => r,
                Vh: () => l,
                ub: () => a,
                bB: () => s
            });
            var o, i, r, l, a, s;
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
            }(a || (a = {}));
            ! function(e) {
                e[e.CHAT = 0] = "CHAT";
                e[e.APPLICATION_LAUNCHER = 1] = "APPLICATION_LAUNCHER"
            }(s || (s = {}))
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
                a = n(473708),
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
                        l = t.autoTrackExposure,
                        a = void 0 === l || l,
                        u = (0, o.ZP)([r.default], (function() {
                            return r.default.getCurrentUser()
                        })),
                        d = s.useExperiment({
                            location: "inventory_guild_setting_experiment"
                        }, {
                            autoTrackExposure: a
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
                                return a.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_LATE_AUGUST
                            }
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: function() {
                                return a.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_AUGUST
                            }
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: function() {
                                return a.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_LATE_AUGUST
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
                a = n(317387),
                s = n(159895),
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
                    b = (0,
                        d.N)(),
                    _ = null != b,
                    E = null != f && (0, l.I5)(f);
                (0, s.Z$)(n);
                var g = a.L.useExperiment({
                        location: "014fbb_1"
                    }, {
                        autoTrackExposure: !1
                    }).enableTier0,
                    m = n.useExperiment({
                        location: null != p ? p : "1"
                    }, {
                        autoTrackExposure: g && !E && !_ && t
                    }),
                    T = m.enabled,
                    y = m.useExpectedValue,
                    A = m.useLikelihood,
                    v = (0, o.cj)([c.Z], (function() {
                        var e = c.Z.getState();
                        return {
                            fetched: e.fetched,
                            premiumLikelihood: e.premiumLikelihood
                        }
                    })),
                    I = v.premiumLikelihood,
                    h = v.fetched,
                    w = (0, o.e7)([r.Z], (function() {
                        return r.Z.isLoadedForSKUs([u.Si.TIER_0, u.Si.TIER_2])
                    })),
                    S = !E && T && g && !_ && (y ? !h || !w : !h),
                    C = u.p9.TIER_2;
                if (g)
                    if (_) {
                        var O = b.subscription_trial;
                        (null == O ? void 0 : O.sku_id) === u.Si.TIER_0 ? C = u.p9.TIER_0 : (null == O ? void 0 : O.sku_id) === u.Si.TIER_2 && (C = u.p9.TIER_2)
                    } else if (!E && !S && T)
                    if (y) {
                        C = function(e, t, n) {
                            return null == e ? u.p9.TIER_2 : e[u.Si.TIER_0] * t > e[u.Si.TIER_2] * n ? u.p9.TIER_0 : u.p9.TIER_2
                        }(I, (0, l.aS)(u.Xh.PREMIUM_MONTH_TIER_0).amount, (0, l.aS)(u.Xh.PREMIUM_MONTH_TIER_2).amount)
                    } else A && (C = function(e) {
                        if (null == e) return u.p9.TIER_0;
                        var t = e[s.Bc],
                            n = e[u.Si.TIER_0],
                            o = e[u.Si.TIER_2];
                        return o > n && o > t ? u.p9.TIER_2 : u.p9.TIER_0
                    }(I));
                return {
                    isLoading: S,
                    suggestedPremiumType: C
                }
            }
        },
        442212: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => h
            });
            var o = n(785893),
                i = n(667294),
                r = n(294184),
                l = n.n(r),
                a = n(882723),
                s = n(153686),
                c = n(19585),
                u = n(594302),
                d = n(652591),
                p = n(189146),
                f = n(717035),
                b = n(455706),
                _ = n(70535),
                E = n(203600),
                g = n(2590),
                m = n(473708),
                T = n(296024),
                y = n.n(T),
                A = n(545292),
                v = n.n(A);

            function I(e, t) {
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
                var t, n, r = e.title,
                    T = e.type,
                    A = e.guildBoostProps,
                    h = e.analyticsSource,
                    w = e.analyticsLocation,
                    S = e.body,
                    C = e.context,
                    O = e.glowUp,
                    N = e.modalClassName,
                    R = e.artContainerClassName,
                    L = e.bodyClassName,
                    k = e.transitionState,
                    P = e.onClose,
                    x = e.onSubscribeClick,
                    U = e.onSecondaryClick,
                    M = e.secondaryCTA,
                    B = e.subscribeButtonText,
                    j = e.showNewBadge,
                    V = void 0 !== j && j,
                    Z = e.enableArtBoxShadow,
                    D = void 0 === Z || Z,
                    G = e.subscriptionTier,
                    F = void 0 === G ? E.Si.TIER_2 : G,
                    Y = e.isLoading,
                    H = void 0 !== Y && Y,
                    K = e.hideBackButton,
                    z = e.backButtonText,
                    W = I(e, ["title", "type", "guildBoostProps", "analyticsSource", "analyticsLocation", "body", "context", "glowUp", "modalClassName", "artContainerClassName", "bodyClassName", "transitionState", "onClose", "onSubscribeClick", "onSecondaryClick", "secondaryCTA", "subscribeButtonText", "showNewBadge", "enableArtBoxShadow", "subscriptionTier", "isLoading", "hideBackButton", "backButtonText"]),
                    X = null != A,
                    q = (0, f.N)(),
                    J = (null == q || null === (t = q.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === F && !X,
                    Q = (0, p.zH)(!J),
                    $ = (0,
                        c.Z)(s.Z.PREMIUM_UPSELL_MODAL).analyticsLocations;
                i.useEffect((function() {
                    H || (X ? d.default.track(g.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                        type: "".concat(T, " - Tier ").concat(A.boostedGuildTier),
                        guild_id: A.guild.id,
                        channel_id: A.channelId,
                        location: w,
                        location_stack: $
                    }) : d.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: T,
                        source: h,
                        location_stack: $,
                        sku_id: F
                    }))
                }), [X, F, H]);
                var ee, te = D ? l()(y().artContainer, y().artContainerBoxShadow, R) : l()(y().artContainer, R),
                    ne = null;
                ne = "artURL" in W ? (0, o.jsx)("img", {
                    className: y().art,
                    alt: "",
                    src: W.artURL
                }) : W.artElement;
                return (0, o.jsxs)(a.ModalRoot, {
                    className: l()(y().root, N),
                    "aria-label": r,
                    transitionState: k,
                    children: [(0, o.jsxs)("div", {
                        className: te,
                        children: [ne, V ? (0, o.jsx)("img", {
                            className: y().sparkleBadge,
                            alt: "",
                            src: v()
                        }) : null]
                    }), (0, o.jsx)(a.ModalContent, {
                        className: y().content,
                        children: H ? (0, o.jsx)(a.Spinner, {}) : (0, o.jsx)(o.Fragment, {
                            children: J ? (0, o.jsx)(o.Fragment, {
                                children: (0, o.jsx)(_.ZP, {
                                    onClose: P,
                                    type: T,
                                    subscriptionTier: null !== (ee = null == q || null === (n = q.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== ee ? ee : E.Si.TIER_2,
                                    headingText: r,
                                    context: C,
                                    analyticsLocationObject: w,
                                    children: O
                                })
                            }) : (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(a.Heading, {
                                    className: y().header,
                                    variant: "heading-xl/semibold",
                                    children: r
                                }), (0, o.jsx)(a.Text, {
                                    variant: "text-md/normal",
                                    className: l()(L),
                                    children: S
                                })]
                            })
                        })
                    }), (0, o.jsxs)(a.ModalFooter, {
                        className: y().footer,
                        children: [(0, o.jsxs)("div", {
                            className: y().primaryActions,
                            children: [null != M ? (0, o.jsx)(a.Button, {
                                className: y().secondaryAction,
                                onClick: U,
                                size: a.Button.Sizes.SMALL,
                                color: a.Button.Colors.PRIMARY,
                                look: a.Button.Looks.LINK,
                                children: M
                            }) : null, function() {
                                var e;
                                if (X) return (0, o.jsx)(u.Z, {
                                    analyticsLocation: w,
                                    guild: A.guild,
                                    onClose: P
                                });
                                var t = J ? Q ? m.Z.Messages.MARKETING_PAGE_CTA_TRY_1_MONTH_FREE : (null == q || null === (e = q.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === E.Si.TIER_2 ? m.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : m.Z.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : void 0,
                                    n = J ? null == q ? void 0 : q.trial_id : null;
                                return (0, o.jsx)(b.Z, {
                                    premiumModalAnalyticsLocation: w,
                                    subscriptionTier: F,
                                    trialId: n,
                                    size: a.Button.Sizes.SMALL,
                                    color: a.Button.Colors.GREEN,
                                    onClick: function() {
                                        null == x || x();
                                        P()
                                    },
                                    buttonText: null != B ? B : t
                                })
                            }()]
                        }), !K && (0, o.jsx)(a.Button, {
                            onClick: P,
                            size: a.Button.Sizes.SMALL,
                            color: a.Button.Colors.PRIMARY,
                            look: a.Button.Looks.LINK,
                            children: null != z ? z : m.Z.Messages.BACK
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
                a = n(442212),
                s = n(203600),
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
                    m = (0, l.Z)({
                        autoTrackExposure: !0,
                        experiment: r.Z,
                        location: "video_backgrounds_upsell"
                    }),
                    T = m.isLoading,
                    y = m.suggestedPremiumType === s.p9.TIER_0 ? s.Si.TIER_0 : s.Si.TIER_2,
                    A = y === s.Si.TIER_0 ? u.Z.Messages.VIDEO_BACKGROUND_UPSELL_BODY_TIER_0.format({
                        onLearnMore: t
                    }) : u.Z.Messages.VIDEO_BACKGROUND_UPSELL_BODY.format({
                        onLearnMore: t
                    });
                return (0, o.jsx)(a.Z, function(e) {
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
                    type: s.cd.VIDEO_BACKGROUNDS_MODAL,
                    title: u.Z.Messages.VIDEO_BACKGROUND_UPSELL_TITLE,
                    body: A,
                    glowUp: A,
                    analyticsSource: d,
                    analyticsLocation: {
                        page: c.ZY5.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
                        object: c.qAy.BUTTON_CTA
                    },
                    onClose: n,
                    subscriptionTier: y,
                    isLoading: T
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
                return !t || "object" !== a(t) && "function" != typeof t ? function(e) {
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
            var a = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function s(e) {
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
                var t = s(n);

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

            function a(e, t) {
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
                    r = a(t, ["trackedActionData"]),
                    s = {
                        url: r.url,
                        request_method: n
                    };
                return new Promise((function(t, n) {
                    e(r).then((function(e) {
                        var n = o.properties;
                        "function" == typeof o.properties && (n = o.properties(e));
                        (0, i.trackNetworkAction)(o.event, l({
                            status_code: e.status
                        }, s, n));
                        t(e)
                    })).catch((function(e) {
                        var t, r, a = o.properties;
                        "function" == typeof o.properties && (a = o.properties(e));
                        (0,
                            i.trackNetworkAction)(o.event, l({
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (r = e.body) || void 0 === r ? void 0 : r.message
                        }, s, a));
                        n(e)
                    }))
                }))
            }
            const c = {
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
        }
    }
]);