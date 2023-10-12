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
                Z: () => u
            });
            var o = n(120415);

            function r(e, t, n, o, r, i, l) {
                try {
                    var u = e[i](l),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(o, r)
            }

            function i(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(o, i) {
                        var l = e.apply(t, n);

                        function u(e) {
                            r(l, o, i, u, c, "next", e)
                        }

                        function c(e) {
                            r(l, o, i, u, c, "throw", e)
                        }
                        u(void 0)
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
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    },
                    "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                function u(i) {
                    return function(u) {
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
                        }([i, u])
                    }
                }
            };

            function u(e, t) {
                return c.apply(this, arguments)
            }

            function c() {
                return (c = i((function(e, t) {
                    var r, i, u, c;
                    return l(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                0;
                                return [4, Promise.all([n.e(40532), n.e(39685), n.e(47007), n.e(6543), n.e(29342), n.e(84832), n.e(27499), n.e(79913), n.e(64466), n.e(92465), n.e(45353), n.e(10675), n.e(73727), n.e(52555), n.e(61953), n.e(84441), n.e(14990), n.e(33227), n.e(24501), n.e(25066)]).then(n.bind(n, 624501))];
                            case 1:
                                r = l.sent(), i = r.default;
                                if (null != (u = i(e, {
                                        skipExtensionCheck: t,
                                        analyticsLocations: []
                                    }))) u(null);
                                else if (o.FB) window.open(e);
                                else {
                                    (c = document.createElement("a")).href = e;
                                    c.target = "_blank";
                                    c.rel = "noreferrer noopener";
                                    c.click()
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
                ub: () => u,
                bB: () => c
            });
            var o, r, i, l, u, c;
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
            }(u || (u = {}));
            ! function(e) {
                e[e.CHAT = 0] = "CHAT";
                e[e.APPLICATION_LAUNCHER = 1] = "APPLICATION_LAUNCHER"
            }(c || (c = {}))
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
                l = n(116094),
                u = n(473708),
                c = (0, r.B)({
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
                a = function(e) {
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
                    } : a({
                        user: t,
                        config: c.getCurrentConfig({
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
                        u = void 0 === l || l,
                        s = (0, o.ZP)([i.default], (function() {
                            return i.default.getCurrentUser()
                        })),
                        d = c.useExperiment({
                            location: "inventory_guild_setting_experiment"
                        }, {
                            autoTrackExposure: u
                        }),
                        f = a({
                            user: s,
                            config: d
                        }),
                        p = f.viewAndUseEnabled,
                        b = f.showTryPacksModalAndV2Copy,
                        g = f.collectEnabled,
                        y = p && g && null != r && !1 !== (null == r || null === (e = r.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible);
                    return {
                        viewAndUseEnabled: p,
                        collectEnabled: y,
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
                                return u.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                            }
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: function() {
                                return u.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                            }
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: function() {
                                return u.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                            }
                        }
                    }]
                }),
                p = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            guildId: void 0,
                            autoTrackExposure: !0
                        },
                        t = e.guildId,
                        n = e.autoTrackExposure,
                        o = void 0 === n || n,
                        r = f.useExperiment({
                            guildId: null != t ? t : "",
                            location: "482926_3"
                        }, {
                            autoTrackExposure: void 0 === o || o
                        });
                    return {
                        showSettingsToggle: r.showSettingsToggle,
                        allowCollection: r.allowCollection,
                        getNewSettingsDescription: r.getNewSettingsDescription
                    }
                }
        },
        327930: (e, t, n) => {
            "use strict";
            n.d(t, {
                Jv: () => g,
                M0: () => y,
                Qj: () => E,
                Ao: () => m,
                YO: () => h,
                VO: () => _
            });
            var o = n(61209),
                r = n(567403),
                i = n(682776),
                l = n(968696),
                u = n(2590),
                c = n(897196),
                a = Array.from(c.Vg).map((function(e) {
                    return l.Z.escape(e)
                })).join("|"),
                s = new RegExp("^/channels/(\\d+|".concat(u.ME, ")(?:/)?(\\d+|").concat(a, ")?")),
                d = new RegExp("^/channels/(\\d+|".concat(u.ME, ")(?:/)(\\d+|").concat(a, ")(?:/)(\\d+)")),
                f = new RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
                p = new RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
                b = new RegExp("^/events/(\\d+)(?:/)(\\d+)?"),
                g = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+|".concat(u.ME, ")(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?")),
                y = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)");

            function E(e) {
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

            function m(e) {
                if (null == e) return null;
                var t = e.match(b);
                return null != t && t.length > 1 ? {
                    guildId: t[1],
                    guildEventId: t[2]
                } : null
            }

            function h(e) {
                return !!e.isPrivate() || i.Z.can(u.Plq.VIEW_CHANNEL, e)
            }

            function _(e) {
                var t = e.guildId,
                    n = e.channelId;
                if (null == r.Z.getGuild(t) && t !== u.ME) return !1;
                if (null == n) return !0;
                var i = o.Z.getChannel(n);
                return null != i && h(i)
            }
        },
        245325: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var o = n(202351),
                r = n(473903),
                i = n(551778),
                l = n(116094),
                u = n(159895),
                c = n(884123),
                a = n(203600);
            var s = n(717035);

            function d(e) {
                var t = e.autoTrackExposure,
                    n = e.experiment,
                    d = e.location,
                    f = (0, o.e7)([r.default], (function() {
                        return r.default.getCurrentUser()
                    })),
                    p = (0, s.N)(),
                    b = null != p,
                    g = null != f && (0, l.I5)(f);
                (0, u.Z$)(n);
                var y = n.useExperiment({
                        location: null != d ? d : "1"
                    }, {
                        autoTrackExposure: !g && !b && t
                    }),
                    E = y.enabled,
                    m = y.useExpectedValue,
                    h = y.useLikelihood,
                    _ = (0, o.cj)([c.Z], (function() {
                        var e = c.Z.getState();
                        return {
                            fetched: e.fetched,
                            premiumLikelihood: e.premiumLikelihood
                        }
                    })),
                    v = _.premiumLikelihood,
                    w = _.fetched,
                    I = (0,
                        o.e7)([i.Z], (function() {
                        return i.Z.isLoadedForSKUs([a.Si.TIER_0, a.Si.TIER_2])
                    })),
                    T = !g && E && !b && (m ? !w || !I : !w),
                    O = a.p9.TIER_2;
                if (b) {
                    var A = p.subscription_trial;
                    (null == A ? void 0 : A.sku_id) === a.Si.TIER_0 ? O = a.p9.TIER_0 : (null == A ? void 0 : A.sku_id) === a.Si.TIER_2 && (O = a.p9.TIER_2)
                } else if (!g && !T && E)
                    if (m) {
                        O = function(e, t, n) {
                            return null == e ? a.p9.TIER_2 : e[a.Si.TIER_0] * t > e[a.Si.TIER_2] * n ? a.p9.TIER_0 : a.p9.TIER_2
                        }(v, (0, l.aS)(a.Xh.PREMIUM_MONTH_TIER_0).amount, (0, l.aS)(a.Xh.PREMIUM_MONTH_TIER_2).amount)
                    } else h && (O = function(e) {
                        if (null == e) return a.p9.TIER_0;
                        var t = e[u.Bc],
                            n = e[a.Si.TIER_0],
                            o = e[a.Si.TIER_2];
                        return o > n && o > t ? a.p9.TIER_2 : a.p9.TIER_0
                    }(v));
                return {
                    isLoading: T,
                    suggestedPremiumType: O
                }
            }
        },
        442212: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => T
            });
            var o = n(785893),
                r = n(667294),
                i = n(294184),
                l = n.n(i),
                u = n(304548),
                c = n(153686),
                a = n(19585),
                s = n(594302),
                d = n(652591),
                f = n(116094),
                p = n(717035),
                b = n(455706),
                g = n(70535),
                y = n(203600),
                E = n(2590),
                m = n(473708),
                h = n(745576),
                _ = n.n(h),
                v = n(545292),
                w = n.n(v);

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

            function T(e) {
                var t, n, i = e.title,
                    h = e.type,
                    v = e.guildBoostProps,
                    T = e.analyticsSource,
                    O = e.analyticsLocation,
                    A = e.body,
                    S = e.context,
                    C = e.glowUp,
                    L = e.modalClassName,
                    P = e.artContainerClassName,
                    R = e.bodyClassName,
                    N = e.transitionState,
                    k = e.onClose,
                    x = e.onSubscribeClick,
                    U = e.onSecondaryClick,
                    j = e.secondaryCTA,
                    B = e.subscribeButtonText,
                    M = e.showNewBadge,
                    Z = void 0 !== M && M,
                    D = e.enableArtBoxShadow,
                    V = void 0 === D || D,
                    G = e.subscriptionTier,
                    Y = void 0 === G ? y.Si.TIER_2 : G,
                    F = e.isLoading,
                    H = void 0 !== F && F,
                    K = e.hideBackButton,
                    z = e.backButtonText,
                    W = I(e, ["title", "type", "guildBoostProps", "analyticsSource", "analyticsLocation", "body", "context", "glowUp", "modalClassName", "artContainerClassName", "bodyClassName", "transitionState", "onClose", "onSubscribeClick", "onSecondaryClick", "secondaryCTA", "subscribeButtonText", "showNewBadge", "enableArtBoxShadow", "subscriptionTier", "isLoading", "hideBackButton", "backButtonText"]),
                    X = null != v,
                    q = (0, p.N)(),
                    J = (null == q || null === (t = q.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === Y && !X,
                    Q = (0,
                        a.Z)(c.Z.PREMIUM_UPSELL_MODAL).analyticsLocations;
                r.useEffect((function() {
                    H || (X ? d.default.track(E.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                        type: "".concat(h, " - Tier ").concat(v.boostedGuildTier),
                        guild_id: v.guild.id,
                        channel_id: v.channelId,
                        location: O,
                        location_stack: Q
                    }) : d.default.track(E.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: h,
                        source: T,
                        location_stack: Q,
                        sku_id: Y
                    }))
                }), [X, Y, H]);
                var $, ee = V ? l()(_().artContainer, _().artContainerBoxShadow, P) : l()(_().artContainer, P),
                    te = null;
                te = "artURL" in W ? (0, o.jsx)("img", {
                    className: _().art,
                    alt: "",
                    src: W.artURL
                }) : W.artElement;
                return (0, o.jsxs)(u.ModalRoot, {
                    className: l()(_().root, L),
                    "aria-label": i,
                    transitionState: N,
                    children: [(0, o.jsxs)("div", {
                        className: ee,
                        children: [te, Z ? (0, o.jsx)("img", {
                            className: _().sparkleBadge,
                            alt: "",
                            src: w()
                        }) : null]
                    }), (0, o.jsx)(u.ModalContent, {
                        className: _().content,
                        children: H ? (0, o.jsx)(u.Spinner, {}) : (0, o.jsx)(o.Fragment, {
                            children: J ? (0, o.jsx)(o.Fragment, {
                                children: (0, o.jsx)(g.ZP, {
                                    onClose: k,
                                    type: h,
                                    subscriptionTier: null !== ($ = null == q || null === (n = q.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== $ ? $ : y.Si.TIER_2,
                                    headingText: i,
                                    context: S,
                                    analyticsLocationObject: O,
                                    children: C
                                })
                            }) : (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(u.Heading, {
                                    className: _().header,
                                    variant: "heading-xl/semibold",
                                    children: i
                                }), (0, o.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    className: l()(R),
                                    children: A
                                })]
                            })
                        })
                    }), (0, o.jsxs)(u.ModalFooter, {
                        className: _().footer,
                        children: [(0, o.jsxs)("div", {
                            className: _().primaryActions,
                            children: [null != j ? (0, o.jsx)(u.Button, {
                                className: _().secondaryAction,
                                onClick: U,
                                size: u.Button.Sizes.SMALL,
                                color: u.Button.Colors.PRIMARY,
                                look: u.Button.Looks.LINK,
                                children: j
                            }) : null, function() {
                                var e, t;
                                if (X) return (0, o.jsx)(s.Z, {
                                    analyticsLocation: O,
                                    guild: v.guild,
                                    onClose: k
                                });
                                var n = J ? (0, f.Rt)({
                                        intervalType: null == q || null === (e = q.subscription_trial) || void 0 === e ? void 0 : e.interval,
                                        intervalCount: null == q || null === (t = q.subscription_trial) || void 0 === t ? void 0 : t.interval_count
                                    }) : void 0,
                                    r = J ? null == q ? void 0 : q.trial_id : null;
                                return (0, o.jsx)(b.Z, {
                                    premiumModalAnalyticsLocation: O,
                                    subscriptionTier: Y,
                                    trialId: r,
                                    size: u.Button.Sizes.SMALL,
                                    color: u.Button.Colors.GREEN,
                                    onClick: function() {
                                        null == x || x();
                                        k()
                                    },
                                    buttonText: null != B ? B : n
                                })
                            }()]
                        }), !K && (0, o.jsx)(u.Button, {
                            onClick: k,
                            size: u.Button.Sizes.SMALL,
                            color: u.Button.Colors.PRIMARY,
                            look: u.Button.Looks.LINK,
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
                default: () => E
            });
            var o = n(785893),
                r = (n(667294), n(593166)),
                i = n(799066),
                l = n(245325),
                u = n(442212),
                c = n(203600),
                a = n(2590),
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

            function y(e, t) {
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

            function E(e) {
                var t = function() {
                        null == p || p();
                        n();
                        (0, r.z)()
                    },
                    n = e.onClose,
                    d = e.analyticsSource,
                    p = e.onLearnMore,
                    E = y(e, ["onClose", "analyticsSource", "onLearnMore"]),
                    m = (0, l.Z)({
                        autoTrackExposure: !0,
                        experiment: i.Z,
                        location: "video_backgrounds_upsell"
                    }),
                    h = m.isLoading,
                    _ = m.suggestedPremiumType === c.p9.TIER_0 ? c.Si.TIER_0 : c.Si.TIER_2,
                    v = _ === c.Si.TIER_0 ? s.Z.Messages.VIDEO_BACKGROUND_UPSELL_BODY_TIER_0.format({
                        onLearnMore: t
                    }) : s.Z.Messages.VIDEO_BACKGROUND_UPSELL_BODY.format({
                        onLearnMore: t
                    });
                return (0, o.jsx)(u.Z, function(e) {
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
                    type: c.cd.VIDEO_BACKGROUNDS_MODAL,
                    title: s.Z.Messages.VIDEO_BACKGROUND_UPSELL_TITLE,
                    body: v,
                    glowUp: v,
                    analyticsSource: d,
                    analyticsLocation: {
                        page: a.ZY5.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
                        object: a.qAy.BUTTON_CTA
                    },
                    onClose: n,
                    subscriptionTier: _,
                    isLoading: h
                }, E))
            }
        },
        205294: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var o = n(169376);

            function r(e) {
                r = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return r(e)
            }

            function i(e, t) {
                return !t || "object" !== u(t) && "function" != typeof t ? function(e) {
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
            var u = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function c(e) {
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
            const a = function(e) {
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
                var t = c(n);

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
                Z: () => y
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

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function c(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function a(e, t) {
                a = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return a(e, t)
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
                    var n, o = u(e);
                    if (t) {
                        var r = u(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return c(this, n)
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
                    t && a(e, t)
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
            const y = new g(r.Z, {
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
                Z: () => a
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

            function u(e, t) {
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

            function c(e, t, n) {
                var o = t.trackedActionData,
                    i = u(t, ["trackedActionData"]),
                    c = {
                        url: i.url,
                        request_method: n
                    };
                return new Promise((function(t, n) {
                    e(i).then((function(e) {
                        var n = o.properties;
                        "function" == typeof o.properties && (n = o.properties(e));
                        (0, r.trackNetworkAction)(o.event, l({
                            status_code: e.status
                        }, c, n));
                        t(e)
                    })).catch((function(e) {
                        var t, i, u = o.properties;
                        "function" == typeof o.properties && (u = o.properties(e));
                        (0, r.trackNetworkAction)(o.event, l({
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (i = e.body) || void 0 === i ? void 0 : i.message
                        }, c, u));
                        n(e)
                    }))
                }))
            }
            const a = {
                get: function(e) {
                    return c(o.ZP.get, e, "get")
                },
                post: function(e) {
                    return c(o.ZP.post, e, "post")
                },
                put: function(e) {
                    return c(o.ZP.put, e, "put")
                },
                patch: function(e) {
                    return c(o.ZP.patch, e, "patch")
                },
                delete: function(e) {
                    return c(o.ZP.delete, e, "del")
                }
            }
        }
    }
]);