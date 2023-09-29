(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [71692], {
        545292: (e, t, n) => {
            e.exports = n.p + "3294183db720bd0985871f6aa43e6e28.png"
        },
        459897: (e, t, n) => {
            e.exports = n.p + "ba2f2540c2d139c6505d3e0d55575044.svg"
        },
        735885: (e, t, n) => {
            "use strict";
            n.d(t, {
                jN: () => r,
                xf: () => i,
                Ou: () => l
            });
            var o = n(744564);

            function r(e) {
                o.Z.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function i() {
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

            function r(e, t, n, o, r, i, l) {
                try {
                    var a = e[i](l),
                        u = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(u) : Promise.resolve(u).then(o, r)
            }

            function i(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(o, i) {
                        var l = e.apply(t, n);

                        function a(e) {
                            r(l, o, i, a, u, "next", e)
                        }

                        function u(e) {
                            r(l, o, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var l = function(e, t) {
                var n, o, r, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    },
                    "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done) return r;
                                (o = 0, r) && (i = [2 & i[0], r.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        r = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        o = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = l.trys, r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < r[1]) {
                                            l.label = r[1];
                                            r = i;
                                            break
                                        }
                                        if (r && l.label < r[2]) {
                                            l.label = r[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        r[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = t.call(e, l)
                            } catch (e) {
                                i = [6, e];
                                o = 0
                            } finally {
                                n = r = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            };

            function a(e, t) {
                return u.apply(this, arguments)
            }

            function u() {
                return (u = i((function(e, t) {
                    var r, i, a, u;
                    return l(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                0;
                                return [4, Promise.all([n.e(40532), n.e(39685), n.e(47007), n.e(6543), n.e(29342), n.e(84832), n.e(27499), n.e(79913), n.e(64466), n.e(92465), n.e(45353), n.e(10675), n.e(73727), n.e(52555), n.e(61953), n.e(84441), n.e(67367), n.e(33227), n.e(24501), n.e(17667)]).then(n.bind(n, 624501))];
                            case 1:
                                r = l.sent(), i = r.default;
                                if (null != (a = i(e, {
                                        skipExtensionCheck: t,
                                        analyticsLocations: []
                                    }))) a(null);
                                else if (o.FB) window.open(e);
                                else {
                                    (u = document.createElement("a")).href = e;
                                    u.target = "_blank";
                                    u.rel = "noreferrer noopener";
                                    u.click()
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
                iw: () => r,
                Kw: () => i,
                Vh: () => l,
                ub: () => a,
                bB: () => u
            });
            var o, r, i, l, a, u;
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
            }(r || (r = {}));
            ! function(e) {
                e[e.ROLE = 1] = "ROLE";
                e[e.USER = 2] = "USER";
                e[e.CHANNEL = 3] = "CHANNEL"
            }(i || (i = {}));
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
            }(u || (u = {}))
        },
        897436: (e, t, n) => {
            "use strict";
            n.d(t, {
                Jp: () => s,
                Xx: () => d,
                JY: () => p
            });
            var o = n(318715),
                r = n(260561),
                i = n(473903),
                l = n(694329),
                a = n(473708),
                u = (0, r.B)({
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
                        r = (n.mobileViewAndUseEnabled, n.mobileAndFreemiumCollectEnabled);
                    false;
                    return {
                        viewAndUseEnabled: o,
                        showTryPacksModalAndV2Copy: r,
                        collectEnabled: l.ZP.isPremium(t) ? o : r
                    }
                },
                s = function(e) {
                    var t = e.user,
                        n = e.autoTrackExposure,
                        o = void 0 === n || n;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1
                    } : c({
                        user: t,
                        config: u.getCurrentConfig({
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
                        r = void 0 === n ? void 0 : n,
                        l = t.autoTrackExposure,
                        a = void 0 === l || l,
                        s = (0, o.ZP)([i.default], (function() {
                            return i.default.getCurrentUser()
                        })),
                        d = u.useExperiment({
                            location: "inventory_guild_setting_experiment"
                        }, {
                            autoTrackExposure: a
                        }),
                        f = c({
                            user: s,
                            config: d
                        }),
                        p = f.viewAndUseEnabled,
                        b = f.showTryPacksModalAndV2Copy,
                        g = f.collectEnabled,
                        m = p && g && null != r && !1 !== (null == r || null === (e = r.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible);
                    return {
                        viewAndUseEnabled: p,
                        collectEnabled: m,
                        showTryPacksModalAndV2Copy: b
                    }
                },
                f = (0, r.B)({
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
                                return a.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                            }
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: function() {
                                return a.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                            }
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: function() {
                                return a.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
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
        327930: (e, t, n) => {
            "use strict";
            n.d(t, {
                Jv: () => g,
                M0: () => m,
                Qj: () => y,
                Ao: () => E,
                YO: () => _,
                VO: () => h
            });
            var o = n(61209),
                r = n(567403),
                i = n(682776),
                l = n(968696),
                a = n(2590),
                u = n(897196),
                c = Array.from(u.Vg).map((function(e) {
                    return l.Z.escape(e)
                })).join("|"),
                s = new RegExp("^/channels/(\\d+|".concat(a.ME, ")(?:/)?(\\d+|").concat(c, ")?")),
                d = new RegExp("^/channels/(\\d+|".concat(a.ME, ")(?:/)(\\d+|").concat(c, ")(?:/)(\\d+)")),
                f = new RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
                p = new RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
                b = new RegExp("^/events/(\\d+)(?:/)(\\d+)?"),
                g = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+|".concat(a.ME, ")(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?")),
                m = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)");

            function y(e) {
                if (null == e) return null;
                var t = e.match(d);
                if (null != t && t.length > 3) return {
                    guildId: t[1],
                    channelId: t[2],
                    messageId: t[3]
                };
                var n = e.match(f);
                if (null != n && n.length > 4) return {
                    guildId: n[1],
                    channelId: n[2],
                    threadId: n[3],
                    messageId: n[4]
                };
                var o = e.match(s);
                if (null != o && o.length > 1) {
                    var r;
                    return {
                        guildId: o[1],
                        channelId: null !== (r = o[2]) && void 0 !== r ? r : void 0
                    }
                }
                var i = e.match(p);
                return null != i && i.length > 1 ? {
                    guildId: i[1]
                } : null
            }

            function E(e) {
                if (null == e) return null;
                var t = e.match(b);
                return null != t && t.length > 1 ? {
                    guildId: t[1],
                    guildEventId: t[2]
                } : null
            }

            function _(e) {
                return !!e.isPrivate() || i.Z.can(a.Plq.VIEW_CHANNEL, e)
            }

            function h(e) {
                var t = e.guildId,
                    n = e.channelId;
                if (null == r.Z.getGuild(t) && t !== a.ME) return !1;
                if (null == n) return !0;
                var i = o.Z.getChannel(n);
                return null != i && _(i)
            }
        },
        317387: (e, t, n) => {
            "use strict";
            n.d(t, {
                L: () => l
            });
            var o, r, i = n(260561);
            ! function(e) {
                e.Global = "2022-09_premium_tier_0_global"
            }(o || (o = {}));
            ! function(e) {
                e[e.VARIANT_1 = 0] = "VARIANT_1";
                e[e.VARIANT_2 = 1] = "VARIANT_2"
            }(r || (r = {}));
            var l = (0, i.B)({
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
                        variant: r.VARIANT_1
                    }
                }, {
                    id: 2,
                    label: "Variant 2",
                    config: {
                        enableTier0: !0,
                        variant: r.VARIANT_2
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
                r = n(473903),
                i = n(551778),
                l = n(694329),
                a = n(317387),
                u = n(159895),
                c = n(884123),
                s = n(203600);
            var d = n(717035);

            function f(e) {
                var t = e.autoTrackExposure,
                    n = e.experiment,
                    f = e.location,
                    p = (0, o.e7)([r.default], (function() {
                        return r.default.getCurrentUser()
                    })),
                    b = (0, d.N)(),
                    g = null != b,
                    m = null != p && (0, l.I5)(p);
                (0, u.Z$)(n);
                var y = a.L.useExperiment({
                        location: "014fbb_1"
                    }, {
                        autoTrackExposure: !1
                    }).enableTier0,
                    E = n.useExperiment({
                        location: null != f ? f : "1"
                    }, {
                        autoTrackExposure: y && !m && !g && t
                    }),
                    _ = E.enabled,
                    h = E.useExpectedValue,
                    v = E.useLikelihood,
                    T = (0, o.cj)([c.Z], (function() {
                        var e = c.Z.getState();
                        return {
                            fetched: e.fetched,
                            premiumLikelihood: e.premiumLikelihood
                        }
                    })),
                    I = T.premiumLikelihood,
                    w = T.fetched,
                    A = (0, o.e7)([i.Z], (function() {
                        return i.Z.isLoadedForSKUs([s.Si.TIER_0, s.Si.TIER_2])
                    })),
                    O = !m && _ && y && !g && (h ? !w || !A : !w),
                    S = s.p9.TIER_2;
                if (y)
                    if (g) {
                        var C = b.subscription_trial;
                        (null == C ? void 0 : C.sku_id) === s.Si.TIER_0 ? S = s.p9.TIER_0 : (null == C ? void 0 : C.sku_id) === s.Si.TIER_2 && (S = s.p9.TIER_2)
                    } else if (!m && !O && _)
                    if (h) {
                        S = function(e, t, n) {
                            return null == e ? s.p9.TIER_2 : e[s.Si.TIER_0] * t > e[s.Si.TIER_2] * n ? s.p9.TIER_0 : s.p9.TIER_2
                        }(I, (0, l.aS)(s.Xh.PREMIUM_MONTH_TIER_0).amount, (0, l.aS)(s.Xh.PREMIUM_MONTH_TIER_2).amount)
                    } else v && (S = function(e) {
                        if (null == e) return s.p9.TIER_0;
                        var t = e[u.Bc],
                            n = e[s.Si.TIER_0],
                            o = e[s.Si.TIER_2];
                        return o > n && o > t ? s.p9.TIER_2 : s.p9.TIER_0
                    }(I));
                return {
                    isLoading: O,
                    suggestedPremiumType: S
                }
            }
        },
        442212: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => w
            });
            var o = n(785893),
                r = n(667294),
                i = n(294184),
                l = n.n(i),
                a = n(304548),
                u = n(153686),
                c = n(19585),
                s = n(594302),
                d = n(652591),
                f = n(694329),
                p = n(717035),
                b = n(455706),
                g = n(70535),
                m = n(203600),
                y = n(2590),
                E = n(473708),
                _ = n(745576),
                h = n.n(_),
                v = n(545292),
                T = n.n(v);

            function I(e, t) {
                if (null == e) return {};
                var n, o, r = function(e, t) {
                    if (null == e) return {};
                    var n, o, r = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) {
                        n = i[o];
                        t.indexOf(n) >= 0 || (r[n] = e[n])
                    }
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) {
                        n = i[o];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                    }
                }
                return r
            }

            function w(e) {
                var t, n, i = e.title,
                    _ = e.type,
                    v = e.guildBoostProps,
                    w = e.analyticsSource,
                    A = e.analyticsLocation,
                    O = e.body,
                    S = e.context,
                    C = e.glowUp,
                    R = e.modalClassName,
                    N = e.artContainerClassName,
                    L = e.bodyClassName,
                    P = e.transitionState,
                    k = e.onClose,
                    x = e.onSubscribeClick,
                    U = e.onSecondaryClick,
                    j = e.secondaryCTA,
                    B = e.subscribeButtonText,
                    M = e.showNewBadge,
                    Z = void 0 !== M && M,
                    V = e.enableArtBoxShadow,
                    D = void 0 === V || V,
                    G = e.subscriptionTier,
                    Y = void 0 === G ? m.Si.TIER_2 : G,
                    F = e.isLoading,
                    H = void 0 !== F && F,
                    K = e.hideBackButton,
                    z = e.backButtonText,
                    W = I(e, ["title", "type", "guildBoostProps", "analyticsSource", "analyticsLocation", "body", "context", "glowUp", "modalClassName", "artContainerClassName", "bodyClassName", "transitionState", "onClose", "onSubscribeClick", "onSecondaryClick", "secondaryCTA", "subscribeButtonText", "showNewBadge", "enableArtBoxShadow", "subscriptionTier", "isLoading", "hideBackButton", "backButtonText"]),
                    X = null != v,
                    q = (0, p.N)(),
                    J = (null == q || null === (t = q.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === Y && !X,
                    Q = (0,
                        c.Z)(u.Z.PREMIUM_UPSELL_MODAL).analyticsLocations;
                r.useEffect((function() {
                    H || (X ? d.default.track(y.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                        type: "".concat(_, " - Tier ").concat(v.boostedGuildTier),
                        guild_id: v.guild.id,
                        channel_id: v.channelId,
                        location: A,
                        location_stack: Q
                    }) : d.default.track(y.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: _,
                        source: w,
                        location_stack: Q,
                        sku_id: Y
                    }))
                }), [X, Y, H]);
                var $, ee = D ? l()(h().artContainer, h().artContainerBoxShadow, N) : l()(h().artContainer, N),
                    te = null;
                te = "artURL" in W ? (0, o.jsx)("img", {
                    className: h().art,
                    alt: "",
                    src: W.artURL
                }) : W.artElement;
                return (0, o.jsxs)(a.ModalRoot, {
                    className: l()(h().root, R),
                    "aria-label": i,
                    transitionState: P,
                    children: [(0, o.jsxs)("div", {
                        className: ee,
                        children: [te, Z ? (0, o.jsx)("img", {
                            className: h().sparkleBadge,
                            alt: "",
                            src: T()
                        }) : null]
                    }), (0, o.jsx)(a.ModalContent, {
                        className: h().content,
                        children: H ? (0, o.jsx)(a.Spinner, {}) : (0, o.jsx)(o.Fragment, {
                            children: J ? (0, o.jsx)(o.Fragment, {
                                children: (0, o.jsx)(g.ZP, {
                                    onClose: k,
                                    type: _,
                                    subscriptionTier: null !== ($ = null == q || null === (n = q.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== $ ? $ : m.Si.TIER_2,
                                    headingText: i,
                                    context: S,
                                    analyticsLocationObject: A,
                                    children: C
                                })
                            }) : (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(a.Heading, {
                                    className: h().header,
                                    variant: "heading-xl/semibold",
                                    children: i
                                }), (0, o.jsx)(a.Text, {
                                    variant: "text-md/normal",
                                    className: l()(L),
                                    children: O
                                })]
                            })
                        })
                    }), (0, o.jsxs)(a.ModalFooter, {
                        className: h().footer,
                        children: [(0, o.jsxs)("div", {
                            className: h().primaryActions,
                            children: [null != j ? (0, o.jsx)(a.Button, {
                                className: h().secondaryAction,
                                onClick: U,
                                size: a.Button.Sizes.SMALL,
                                color: a.Button.Colors.PRIMARY,
                                look: a.Button.Looks.LINK,
                                children: j
                            }) : null, function() {
                                var e, t;
                                if (X) return (0, o.jsx)(s.Z, {
                                    analyticsLocation: A,
                                    guild: v.guild,
                                    onClose: k
                                });
                                var n = J ? (0, f.Rt)({
                                        intervalType: null == q || null === (e = q.subscription_trial) || void 0 === e ? void 0 : e.interval,
                                        intervalCount: null == q || null === (t = q.subscription_trial) || void 0 === t ? void 0 : t.interval_count
                                    }) : void 0,
                                    r = J ? null == q ? void 0 : q.trial_id : null;
                                return (0, o.jsx)(b.Z, {
                                    premiumModalAnalyticsLocation: A,
                                    subscriptionTier: Y,
                                    trialId: r,
                                    size: a.Button.Sizes.SMALL,
                                    color: a.Button.Colors.GREEN,
                                    onClick: function() {
                                        null == x || x();
                                        k()
                                    },
                                    buttonText: null != B ? B : n
                                })
                            }()]
                        }), !K && (0, o.jsx)(a.Button, {
                            onClick: k,
                            size: a.Button.Sizes.SMALL,
                            color: a.Button.Colors.PRIMARY,
                            look: a.Button.Looks.LINK,
                            children: null != z ? z : E.Z.Messages.BACK
                        })]
                    })]
                })
            }
        },
        982871: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => y
            });
            var o = n(785893),
                r = (n(667294), n(593166)),
                i = n(799066),
                l = n(245325),
                a = n(442212),
                u = n(203600),
                c = n(2590),
                s = n(473708),
                d = n(382422),
                f = n.n(d),
                p = n(459897),
                b = n.n(p);

            function g(e, t, n) {
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
                var n, o, r = function(e, t) {
                    if (null == e) return {};
                    var n, o, r = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) {
                        n = i[o];
                        t.indexOf(n) >= 0 || (r[n] = e[n])
                    }
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) {
                        n = i[o];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                    }
                }
                return r
            }

            function y(e) {
                var t = function() {
                        null == p || p();
                        n();
                        (0, r.z)()
                    },
                    n = e.onClose,
                    d = e.analyticsSource,
                    p = e.onLearnMore,
                    y = m(e, ["onClose", "analyticsSource", "onLearnMore"]),
                    E = (0, l.Z)({
                        autoTrackExposure: !0,
                        experiment: i.Z,
                        location: "video_backgrounds_upsell"
                    }),
                    _ = E.isLoading,
                    h = E.suggestedPremiumType === u.p9.TIER_0 ? u.Si.TIER_0 : u.Si.TIER_2,
                    v = h === u.Si.TIER_0 ? s.Z.Messages.VIDEO_BACKGROUND_UPSELL_BODY_TIER_0.format({
                        onLearnMore: t
                    }) : s.Z.Messages.VIDEO_BACKGROUND_UPSELL_BODY.format({
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
                            g(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    artURL: b(),
                    artContainerClassName: f().videoBackgroundArt,
                    type: u.cd.VIDEO_BACKGROUNDS_MODAL,
                    title: s.Z.Messages.VIDEO_BACKGROUND_UPSELL_TITLE,
                    body: v,
                    glowUp: v,
                    analyticsSource: d,
                    analyticsLocation: {
                        page: c.ZY5.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
                        object: c.qAy.BUTTON_CTA
                    },
                    onClose: n,
                    subscriptionTier: h,
                    isLoading: _
                }, y))
            }
        },
        205294: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var o = n(169376);

            function r(e) {
                r = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return r(e)
            }

            function i(e, t) {
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

            function u(e) {
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
                    var n, o = r(e);
                    if (t) {
                        var l = r(this).constructor;
                        n = Reflect.construct(o, arguments, l)
                    } else n = o.apply(this, arguments);
                    return i(this, n)
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
                var t = u(n);

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
        50433: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => m
            });
            var o = n(202351),
                r = n(744564);

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o
            }

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function u(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function c(e, t) {
                c = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return c(e, t)
            }

            function s(e) {
                return function(e) {
                    if (Array.isArray(e)) return i(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var d = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function f(e) {
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
                    var n, o = a(e);
                    if (t) {
                        var r = a(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return u(this, n)
                }
            }
            var p = [];

            function b() {
                p = []
            }
            var g = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && c(e, t)
                }(n, e);
                var t = f(n);

                function n() {
                    l(this, n);
                    return t.apply(this, arguments)
                }
                var o = n.prototype;
                o.hasLayers = function() {
                    return p.length > 0
                };
                o.getLayers = function() {
                    return p
                };
                return n
            }(o.ZP.Store);
            g.displayName = "LayerStore";
            const m = new g(r.Z, {
                LAYER_PUSH: function(e) {
                    var t = e.component;
                    if (p.indexOf(t) >= 0) return !1;
                    p = s(p).concat([t])
                },
                LAYER_POP: function() {
                    if (0 === p.length) return !1;
                    p = p.slice(0, -1)
                },
                LAYER_POP_ALL: b,
                LOGOUT: b,
                NOTIFICATION_CLICK: b
            })
        },
        391438: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var o = n(281110),
                r = n(652591);

            function i(e, t, n) {
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
                        i(e, t, n[t])
                    }))
                }
                return e
            }

            function a(e, t) {
                if (null == e) return {};
                var n, o, r = function(e, t) {
                    if (null == e) return {};
                    var n, o, r = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) {
                        n = i[o];
                        t.indexOf(n) >= 0 || (r[n] = e[n])
                    }
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) {
                        n = i[o];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                    }
                }
                return r
            }

            function u(e, t, n) {
                var o = t.trackedActionData,
                    i = a(t, ["trackedActionData"]),
                    u = {
                        url: i.url,
                        request_method: n
                    };
                return new Promise((function(t, n) {
                    e(i).then((function(e) {
                        var n = o.properties;
                        "function" == typeof o.properties && (n = o.properties(e));
                        (0, r.trackNetworkAction)(o.event, l({
                            status_code: e.status
                        }, u, n));
                        t(e)
                    })).catch((function(e) {
                        var t, i, a = o.properties;
                        "function" == typeof o.properties && (a = o.properties(e));
                        (0, r.trackNetworkAction)(o.event, l({
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (i = e.body) || void 0 === i ? void 0 : i.message
                        }, u, a));
                        n(e)
                    }))
                }))
            }
            const c = {
                get: function(e) {
                    return u(o.ZP.get, e, "get")
                },
                post: function(e) {
                    return u(o.ZP.post, e, "post")
                },
                put: function(e) {
                    return u(o.ZP.put, e, "put")
                },
                patch: function(e) {
                    return u(o.ZP.patch, e, "patch")
                },
                delete: function(e) {
                    return u(o.ZP.delete, e, "del")
                }
            }
        }
    }
]);