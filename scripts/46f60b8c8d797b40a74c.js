"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [30027], {
        499477: (e, t, n) => {
            n.d(t, {
                X5: () => l,
                a8: () => r,
                h8: () => o,
                xQ: () => i
            });
            var r, o, i, l = function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                this.id = t;
                this.text = t
            };
            ! function(e) {
                e.UP = "UP";
                e.DOWN = "DOWN"
            }(r || (r = {}));
            ! function(e) {
                e.GUILD = "GUILD";
                e.TEXT_CHANNEL = "TEXT_CHANNEL";
                e.GROUP_DM = "GROUP_DM";
                e.VOICE_CHANNEL = "VOICE_CHANNEL";
                e.USER = "USER";
                e.HEADER = "HEADER";
                e.APPLICATION = "APPLICATION";
                e.SKU = "SKU";
                e.LINK = "LINK"
            }(o || (o = {}));
            ! function(e) {
                e.USER = "@";
                e.TEXT_CHANNEL = "#";
                e.VOICE_CHANNEL = "!";
                e.GUILD = "*";
                e.APPLICATION = "$"
            }(i || (i = {}))
        },
        429750: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });

            function r(e, t) {
                if (e.score === t.score) {
                    var n, r, o, i, l, u, a = null !== (i = null !== (o = e.sortable) && void 0 !== o ? o : null === (n = e.comparator) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && void 0 !== i ? i : "",
                        c = null !== (u = null !== (l = e.sortable) && void 0 !== l ? l : null === (r = t.comparator) || void 0 === r ? void 0 : r.toLocaleLowerCase()) && void 0 !== u ? u : "";
                    if (a < c) return -1;
                    if (a > c) return 1
                }
                return t.score - e.score
            }
        },
        525177: (e, t, n) => {
            n.d(t, {
                P: () => r,
                Z: () => i
            });
            var r, o = n(260561);
            ! function(e) {
                e[e.None = 0] = "None";
                e[e.DefaultOn = 1] = "DefaultOn";
                e[e.DefaultOff = 2] = "DefaultOff";
                e[e.ComingSoon = 3] = "ComingSoon";
                e[e.ClydeProfiles = 4] = "ClydeProfiles"
            }(r || (r = {}));
            const i = (0, o.B)({
                kind: "guild",
                id: "2023-03_clyde_ai",
                label: "ClydeAI",
                defaultConfig: {
                    experimentState: r.None
                },
                treatments: [{
                    id: 1,
                    label: "Enabled (Default Off)",
                    config: {
                        experimentState: r.DefaultOff
                    }
                }, {
                    id: 3,
                    label: "Enabled (Default On)",
                    config: {
                        experimentState: r.DefaultOn
                    }
                }, {
                    id: 4,
                    label: "Coming Soon",
                    config: {
                        experimentState: r.ComingSoon
                    }
                }, {
                    id: 5,
                    label: "Clyde Profiles",
                    config: {
                        experimentState: r.ClydeProfiles
                    }
                }]
            })
        },
        23925: (e, t, n) => {
            n.d(t, {
                gJ: () => p,
                M9: () => y,
                Ib: () => f,
                lT: () => c,
                OR: () => s
            });
            var r = n(567403),
                o = n(682776),
                i = n(525177),
                l = (0, n(260561).B)({
                    kind: "user",
                    id: "2023-06_clyde_ai_gdm",
                    label: "Clyde in DMs/GDMs",
                    defaultConfig: {
                        isClydeEnabledinGdms: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "enable clyde in gdms",
                        config: {
                            isClydeEnabledinGdms: !0
                        }
                    }]
                });
            var u = n(2590),
                a = n(897196);

            function c(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                    o = i.Z.useExperiment({
                        guildId: r,
                        location: "1e9ccc_1"
                    }, {
                        autoTrackExposure: n
                    }).experimentState;
                return o
            }

            function s(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = c(e, t);
                return n === i.P.ClydeProfiles
            }

            function f(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = c(e, n);
                return d(r, e, t)
            }

            function d(e, t, n) {
                if (null == t) {
                    if (null != n && n.isPrivate()) {
                        return !!n.hasFlag(a.zZ.CLYDE_AI) || !!l.getCurrentConfig({
                            location: "38acdb_1"
                        }, {
                            autoTrackExposure: !1
                        }).isClydeEnabledinGdms && r.Z.getGuildIds().some((function(e) {
                            return y(r.Z.getGuild(e))
                        }))
                    }
                    return !1
                }
                return null != e && e !== i.P.None && o.Z.can(u.Plq.USE_CLYDE_AI, n)
            }

            function p(e, t) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    o = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "",
                    l = i.Z.getCurrentConfig({
                        guildId: o,
                        location: "1e9ccc_2"
                    }, {
                        autoTrackExposure: r
                    }).experimentState;
                return d(l, e, t)
            }

            function y(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = v(e, t);
                return n !== i.P.None
            }

            function v(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (null == e) return !1;
                var n = e.id;
                return i.Z.getCurrentConfig({
                    guildId: n,
                    location: "1e9ccc_3"
                }, {
                    autoTrackExposure: t
                }).experimentState
            }
        },
        944751: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var r = n(202351),
                o = n(744564);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function a(e, t) {
                return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
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
            var s = function(e) {
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
                    var n, r = u(e);
                    if (t) {
                        var o = u(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return a(this, n)
                }
            }
            var d = new Set,
                p = {};

            function y(e) {
                var t = e.applicationId;
                d.add(t)
            }

            function v(e) {
                var t = e.applicationId;
                d.delete(t)
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
                    i(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.isLaunchable = function(e) {
                    if (null != p[e]) return p[e];
                    p[e] = !1;
                    o.Z.dispatch({
                        type: "CHECK_LAUNCHABLE_GAME",
                        gameId: e
                    });
                    return !1
                };
                r.__getLocalVars = function() {
                    return {
                        launchingGames: d,
                        launchableGames: p
                    }
                };
                ! function(e, t, n) {
                    t && l(e.prototype, t);
                    n && l(e, n)
                }(n, [{
                    key: "launchingGames",
                    get: function() {
                        return d
                    }
                }, {
                    key: "launchableGames",
                    get: function() {
                        return p
                    }
                }]);
                return n
            }(r.ZP.Store);
            g.displayName = "LaunchableGameStore";
            const m = new g(o.Z, {
                GAME_LAUNCHABLE_UPDATE: function(e) {
                    var t = e.gameId,
                        n = e.isLaunchable;
                    p[t] = n
                },
                GAME_CLOUD_SYNC_START: y,
                GAME_LAUNCH_START: y,
                GAME_LAUNCH_SUCCESS: v,
                GAME_LAUNCH_FAIL: v,
                GAME_CLOUD_SYNC_CONFLICT: v,
                GAME_CLOUD_SYNC_ERROR: v,
                GAME_CLOUD_SYNC_COMPLETE: v
            })
        },
        977997: (e, t, n) => {
            n.d(t, {
                Z: () => l,
                t: () => u
            });
            var r = n(202351),
                o = n(861426),
                i = n(2590);

            function l(e) {
                return (0, r.e7)([o.Z], (function() {
                    if (null == (null == e ? void 0 : e.id)) return !1;
                    var t = o.Z.isFullServerPreview(e.id),
                        n = o.Z.isOnboardingEnabled(e.id);
                    return t && n
                })) || (null == e ? void 0 : e.hasFeature(i.oNc.GUILD_ONBOARDING_HAS_PROMPTS))
            }

            function u(e) {
                if (null == e) return !1;
                var t = o.Z.isFullServerPreview(e.id),
                    n = o.Z.isOnboardingEnabled(e.id);
                return t && n || e.hasFeature(i.oNc.GUILD_ONBOARDING_HAS_PROMPTS)
            }
        },
        897436: (e, t, n) => {
            n.d(t, {
                Jp: () => s,
                Xx: () => f,
                JY: () => p
            });
            var r = n(318715),
                o = n(260561),
                i = n(473903),
                l = n(116094),
                u = n(473708),
                a = (0, o.B)({
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
                        r = n.desktopViewAndUseAndCollectEnabled,
                        o = (n.mobileViewAndUseEnabled, n.mobileAndFreemiumCollectEnabled);
                    false;
                    return {
                        viewAndUseEnabled: r,
                        showTryPacksModalAndV2Copy: o,
                        collectEnabled: l.ZP.isPremium(t) ? r : o
                    }
                },
                s = function(e) {
                    var t = e.user,
                        n = e.autoTrackExposure,
                        r = void 0 === n || n;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1
                    } : c({
                        user: t,
                        config: a.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: r
                        })
                    })
                },
                f = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            expressionSourceGuild: void 0,
                            autoTrackExposure: !0
                        },
                        n = t.expressionSourceGuild,
                        o = void 0 === n ? void 0 : n,
                        l = t.autoTrackExposure,
                        u = void 0 === l || l,
                        s = (0, r.ZP)([i.default], (function() {
                            return i.default.getCurrentUser()
                        })),
                        f = a.useExperiment({
                            location: "inventory_guild_setting_experiment"
                        }, {
                            autoTrackExposure: u
                        }),
                        d = c({
                            user: s,
                            config: f
                        }),
                        p = d.viewAndUseEnabled,
                        y = d.showTryPacksModalAndV2Copy,
                        v = d.collectEnabled,
                        g = p && v && null != o && !1 !== (null == o || null === (e = o.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible);
                    return {
                        viewAndUseEnabled: p,
                        collectEnabled: g,
                        showTryPacksModalAndV2Copy: y
                    }
                },
                d = (0, o.B)({
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
                                return u.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_LATE_AUGUST
                            }
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: function() {
                                return u.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_AUGUST
                            }
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: function() {
                                return u.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_LATE_AUGUST
                            }
                        }
                    }]
                }),
                p = function(e) {
                    var t = d.useExperiment({
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
        201457: (e, t, n) => {
            n.d(t, {
                B: () => o
            });
            var r = n(382060);

            function o(e) {
                return (0, r.r8)(e) || (0, r.bw)(e)
            }
        },
        631486: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(120053);

            function o(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var i = /\n$/,
                l = function(e, t) {
                    t = null != t ? t : {};
                    Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            })));
                            n.push.apply(n, r)
                        }
                        return n
                    }(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }));
                    return e
                }(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            o(e, t, n[t])
                        }))
                    }
                    return e
                }({}, n.n(r)().defaultRules.heading), {
                    requiredFirstCharacters: [" ", "#"],
                    match: function(e, t, n) {
                        return t.allowHeading && (null == n || "" === n || null != n.match(i)) ? (0, r.anyScopeRegex)(/^ *(#{1,3})(?:\s+)((?![#]+)[^\n]+?)#*\s*(?:\n|$)/)(e, t, n) : null
                    }
                });
            const u = l
        },
        766281: (e, t, n) => {
            n.d(t, {
                Z: () => Be
            });
            var r = n(496486),
                o = n.n(r),
                l = n(120053),
                u = n.n(l),
                a = n(23925),
                c = n(135855),
                s = n(656907),
                f = n(61209),
                d = n(567403),
                p = n(473903),
                y = n(773148),
                v = n(749565),
                g = n(747820),
                m = n(773011),
                h = n(414306),
                b = n(327930),
                E = n(682776),
                O = n(840922),
                w = n(775173),
                S = n(176758),
                P = n(421281),
                C = n(201457),
                I = n(757278),
                A = n(2590),
                _ = n(473708);

            function L(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function N(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        L(e, t, n[t])
                    }))
                }
                return e
            }

            function Z(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var R = function(e) {
                var t = f.Z.getChannel(e);
                return null == t ? void 0 : t.getGuildId()
            };

            function T(e) {
                return {
                    type: "guild",
                    guildId: e.id,
                    content: (0, P.aF)(e.name, 32),
                    icon: w.ZP.getGuildIconURL({
                        id: e.id,
                        icon: e.icon,
                        size: 40
                    })
                }
            }

            function j(e, t) {
                var n = k((0, P.aF)(e.name, 32));
                return {
                    type: "channel",
                    content: ["italics" === t ? {
                        type: "em",
                        content: [n]
                    } : n],
                    channelType: e.type,
                    iconType: e.iconType
                }
            }

            function x(e) {
                return {
                    type: "channel",
                    content: [k("")],
                    iconType: e ? "post" : "message"
                }
            }

            function D(e, t) {
                var n, r = f.Z.getChannel(e),
                    o = (0, h.$)(e, f.Z, g.Z, E.Z).isSubscriptionGated,
                    i = null !== (n = (0, S.wl)(r)) && void 0 !== n ? n : "text";
                if (null != t) {
                    var l = t.find((function(t) {
                        return t.id === e
                    }));
                    if (null != l) return {
                        type: l.type,
                        id: l.id,
                        guildId: l.guild_id,
                        name: l.name,
                        isDm: null != r && r.isPrivate(),
                        isForumPost: null != r && r.isForumPost(),
                        isMentionable: !0,
                        canViewChannel: !0,
                        roleSubscriptionGated: o,
                        iconType: i,
                        parentId: null == r ? void 0 : r.parent_id
                    }
                }
                return null != r ? {
                    type: r.type,
                    id: r.id,
                    guildId: r.guild_id,
                    name: (0, m.F6)(r, p.default, O.Z),
                    isDm: r.isPrivate(),
                    isForumPost: r.isForumPost(),
                    isMentionable: (0, C.B)(r.type),
                    canViewChannel: (0, b.YO)(r),
                    roleSubscriptionGated: o,
                    iconType: i,
                    parentId: r.parent_id
                } : null
            }

            function M(e) {
                return {
                    type: "link",
                    content: [{
                        type: "text",
                        content: e
                    }],
                    target: e,
                    title: void 0
                }
            }

            function k(e) {
                return {
                    type: "text",
                    content: e
                }
            }

            function U(e, t, n, r, o) {
                var i = d.Z.getGuild(e),
                    l = (null == i ? void 0 : i.id) === r;
                return {
                    type: "channelMention",
                    guildId: e,
                    channelId: t,
                    messageId: n,
                    originalLink: o,
                    inContent: null == i || l ? null : [T(i)],
                    content: [j({
                        name: _.Z.Messages.UNKNOWN_CHANNEL,
                        type: A.d4z.UNKNOWN,
                        iconType: "text"
                    }, "italics")]
                }
            }

            function G(e, t, n, r) {
                if (!e.canViewChannel) return function(e, t) {
                    var n = {
                        type: "channel",
                        content: [k(e.roleSubscriptionGated ? e.name : _.Z.Messages.NO_ACCESS)],
                        channelType: e.roleSubscriptionGated ? e.type : A.d4z.UNKNOWN,
                        iconType: "locked"
                    };
                    return {
                        type: "channelMention",
                        guildId: e.guildId,
                        channelId: e.id,
                        messageId: t,
                        inContent: null,
                        content: [n]
                    }
                }(e, t);
                if (!e.isMentionable) return k("#".concat(e.name));
                var o = {
                        type: "channelMention",
                        channelId: e.id,
                        guildId: e.guildId,
                        messageId: t,
                        originalLink: r
                    },
                    i = d.Z.getGuild(e.guildId);
                return null == i ? e.isDm ? Z(N({}, o), {
                    guildId: A.ME,
                    inContent: [j(e)],
                    content: [x(!1)]
                }) : function(e) {
                    return null != e ? M(e) : k("#".concat(_.Z.Messages.UNKNOWN_CHANNEL_PLACEHOLDER))
                }(r) : N({}, o, function(e, t, n, r) {
                    var o = T(e),
                        i = j(t),
                        l = x(t.isForumPost);
                    if (n && r) {
                        if (t.isForumPost) {
                            var u = f.Z.getChannel(t.parentId);
                            if (null != u) {
                                var a;
                                return {
                                    inContent: [j({
                                        name: u.name,
                                        type: u.type,
                                        iconType: null !== (a = (0, S.wl)(u)) && void 0 !== a ? a : "forum"
                                    })],
                                    content: [i]
                                }
                            }
                        }
                        return {
                            inContent: [i],
                            content: [l]
                        }
                    }
                    return n && !r ? {
                        inContent: null,
                        content: [i]
                    } : !n && r ? {
                        inContent: [o],
                        content: [t.isForumPost ? i : l]
                    } : n || r ? void 0 : {
                        inContent: [o],
                        content: [i]
                    }
                }(i, e, e.guildId === n, null != t))
            }
            const q = {
                channelMention: {
                    order: I.ZP.order,
                    requiredFirstCharacters: ["<"],
                    match: function(e) {
                        return /^<#(\d+)>/.exec(e)
                    },
                    parse: function(e, t, n) {
                        var r = e[1];
                        if (n.returnMentionIds) return {
                            type: "channelMention",
                            id: r
                        };
                        var o = D(r, n.mentionChannels);
                        return null == o ? U(null, r, null, R(n.channelId)) : G(o, null, R(n.channelId))
                    }
                },
                channelOrMessageUrl: {
                    order: u().defaultRules.url.order - .5,
                    requiredFirstCharacters: ["h"],
                    match: function(e) {
                        var t = b.Jv.exec(e);
                        if (null != t) {
                            if (null != t[2] && /\D/.test(t[2])) return null;
                            if (null != t[3] && /\D/.test(t[3])) return null
                        }
                        return t
                    },
                    parse: function(e, t, n) {
                        var r = e[0],
                            o = e[1],
                            i = e[2],
                            l = e[3];
                        if (null == i) return M(r);
                        var u = D(i, null);
                        return null == u ? U(o, i, l, R(n.channelId), r) : G(u, l, R(n.channelId), r)
                    }
                },
                mediaPostLink: {
                    order: u().defaultRules.url.order - .5,
                    requiredFirstCharacters: ["h"],
                    match: function(e) {
                        return b.M0.exec(e)
                    },
                    parse: function(e, t, n) {
                        var r = e[0],
                            o = e[1],
                            i = e[2],
                            l = e[3],
                            u = e[4];
                        if (null == i || null == l) return M(r);
                        var a = D(l, null);
                        if (null != a) return G(a, u, R(n.channelId), r);
                        var c = D(i, null);
                        return null != c ? G(c, u, R(n.channelId), r) : U(o, i, u, R(n.channelId), r)
                    }
                }
            };
            var F = n(631486),
                B = n(544194),
                V = n(441143),
                H = n.n(V);

            function Y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Y(e, t, n[t])
                    }))
                }
                return e
            }

            function W(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var K = /\n{2,}$/,
                z = /(?:^|\n)( *)$/,
                $ = "( *)((?:[*-]|\\d+\\.)) +",
                J = new RegExp("^" + $),
                X = new RegExp($ + "[^\\n]*(?:\\n(?!\\1" + "(?:[*-]|\\d+\\.) )[^\\n]*)*(\n|$)", "gm"),
                ee = / *\n$/,
                te = new RegExp("^( *)((?:[*-]|\\d+\\.)) [\\s\\S]+?(?:\\n(?! )(?!\\1(?:[*-]|\\d+\\.) )|$)"),
                ne = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/;
            const re = W(Q({}, u().defaultRules.list), {
                requiredFirstCharacters: " *-0123456789".split(""),
                match: function(e, t) {
                    if (!t.allowList) return null;
                    if (t._listLevel >= 11) return null;
                    var n = null == t.prevCapture ? "" : t.prevCapture[0],
                        r = z.exec(n);
                    return null == r || ne.test(r[0]) ? null : te.exec(e)
                },
                parse: function(e, t, n) {
                    var r = e[2],
                        o = r.length > 1,
                        i = o ? Math.min(1e9, Math.max(1, +r)) : void 0,
                        l = e[0].replace(K, "\n").match(X);
                    H()(null != l, "markup list items can not be parsed.");
                    var u = !1;
                    return {
                        ordered: o,
                        start: i,
                        items: l.map((function(e, r) {
                            var o = J.exec(e),
                                i = null != o ? o[0].length : 0,
                                a = new RegExp("^ {1," + i + "}", "gm"),
                                c = e.replace(a, "").replace(J, ""),
                                s = r === l.length - 1,
                                f = -1 !== c.indexOf("\n\n") || s && u;
                            u = f;
                            var d, p = n.inline,
                                y = n._list,
                                v = n._listLevel;
                            n._list = !0;
                            n._listLevel = (null != v ? v : 0) + 1;
                            if (f) {
                                n.inline = !1;
                                d = c.replace(ee, "\n\n")
                            } else {
                                n.inline = !0;
                                d = c.replace(ee, "")
                            }
                            var g = t(d, W(Q({}, n), {
                                allowHeading: !1
                            })).map((function(e) {
                                "text" === e.type && null != e.content && (e.content = e.content.replace(/\n+\s*$/, ""));
                                return e
                            }));
                            n.inline = p;
                            n._list = y;
                            n._listLevel = v;
                            return g
                        }))
                    }
                }
            });
            var oe = n(245353),
                ie = n(38004);

            function le(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ue(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ae(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            l = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return le(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return le(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ce = {
                s: {
                    requiredFirstCharacters: ["~"],
                    match: u().inlineRegex(/^~~([\s\S]+?)~~(?!_)/)
                },
                highlight: {
                    order: I.ZP.order,
                    match: function() {
                        return null
                    }
                },
                emoji: {
                    order: I.ZP.order,
                    requiredFirstCharacters: [":"],
                    match: function(e) {
                        var t = c.ZP.EMOJI_NAME_AND_DIVERSITY_RE.exec(e);
                        return null != t && "" !== c.ZP.convertNameToSurrogate(t[1]) ? t : null
                    },
                    parse: function(e) {
                        var t = ae(e, 2),
                            n = t[0],
                            r = t[1],
                            o = c.ZP.convertNameToSurrogate(r);
                        return null == o || "" === o ? {
                            type: "text",
                            content: n
                        } : {
                            name: ":".concat(r, ":"),
                            surrogate: o,
                            src: ie.ZP.getURL(o)
                        }
                    }
                },
                customEmoji: {
                    order: u().defaultRules.codeBlock.order,
                    requiredFirstCharacters: ["<"],
                    match: function(e) {
                        return /^<(a)?:(\w+):(\d+)>/.exec(e)
                    },
                    parse: function(e, t, n) {
                        var r = ae(e, 4),
                            o = (r[0], r[1]),
                            i = r[2],
                            l = r[3],
                            u = n.guildId,
                            a = oe.Z.getDisambiguatedEmojiContext(u).getById(l),
                            c = null == a || a.require_colons;
                        null != a && (i = a.name);
                        return {
                            emojiId: l,
                            name: c ? ":".concat(i, ":") : i,
                            animated: "a" === o
                        }
                    }
                },
                text: {
                    parse: function(e) {
                        var t = c.ZP.findInlineEmojisFromSurrogates(e[0]),
                            n = 0;
                        return t.map((function(e) {
                            if ("text" === e.type) {
                                var t = {
                                    index: n,
                                    0: e.text
                                };
                                n += e.text.length;
                                return {
                                    type: "text",
                                    content: e.text,
                                    originalMatch: t
                                }
                            }
                            var r = {
                                index: n,
                                0: e.surrogate
                            };
                            n += e.surrogate.length;
                            return {
                                type: "emoji",
                                name: e.emojiName,
                                surrogate: e.surrogate,
                                src: ie.ZP.getURL(e.surrogate),
                                originalMatch: r
                            }
                        }))
                    }
                },
                looseEm: function(e, t) {
                    t = null != t ? t : {};
                    Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            })));
                            n.push.apply(n, r)
                        }
                        return n
                    }(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }));
                    return e
                }(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            ue(e, t, n[t])
                        }))
                    }
                    return e
                }({}, u().defaultRules.em), {
                    match: u().inlineRegex(new RegExp("^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?) {1,2}\\*(?!\\*)")),
                    parse: function(e, t, n) {
                        return {
                            type: "em",
                            content: t(e[1], n),
                            originalMatch: e
                        }
                    }
                })
            };
            const se = ce;
            var fe = n(971561),
                de = n(844494),
                pe = n(127624),
                ye = n(876986);

            function ve(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ge(e) {
                if (Array.isArray(e)) return e
            }

            function me(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function he(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }

            function be() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function Ee(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        me(e, t, n[t])
                    }))
                }
                return e
            }

            function Oe(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function we(e, t) {
                return ge(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            l = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || Pe(e, t) || be()
            }

            function Se(e) {
                return function(e) {
                    if (Array.isArray(e)) return ve(e)
                }(e) || he(e) || Pe(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Pe(e, t) {
                if (e) {
                    if ("string" == typeof e) return ve(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ve(e, t) : void 0
                }
            }
            var Ce = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
                Ie = /^$|\n *$/,
                Ae = /^ *>>> ?/,
                _e = /^ *> ?/gm;

            function Le(e) {
                var t = (0, B.yw)(e[1]);
                return null == t ? {
                    type: "text",
                    content: e[1]
                } : {
                    type: "link",
                    content: [{
                        type: "text",
                        content: t.displayTarget
                    }],
                    target: t.target,
                    title: void 0
                }
            }
            var Ne = function(e) {
                    var t = f.Z.getChannel(e);
                    return null == t ? void 0 : t.getGuildId()
                },
                Ze = function(e) {
                    return null != e.guildId ? d.Z.getGuild(e.guildId) : null != e.channelId ? d.Z.getGuild(Ne(e.channelId)) : null
                },
                Re = {
                    newline: u().defaultRules.newline,
                    paragraph: u().defaultRules.paragraph,
                    escape: Oe(Ee({}, u().defaultRules.escape), {
                        match: function(e, t, n) {
                            return !1 === t.allowEscape ? null : u().defaultRules.escape.match(e, t, n)
                        }
                    }),
                    blockQuote: Oe(Ee({}, u().defaultRules.blockQuote), {
                        requiredFirstCharacters: [" ", ">"],
                        match: function(e, t) {
                            var n = t.prevCapture,
                                r = t.inQuote,
                                o = t.nested;
                            if (r || o) return null;
                            if (null == n) return Ce.exec(e);
                            var i = n[0];
                            return Ie.test(i) ? Ce.exec(e) : null
                        },
                        parse: function(e, t, n) {
                            var r = e[0],
                                o = Boolean(Ae.exec(r)),
                                i = o ? Ae : _e,
                                l = r.replace(i, ""),
                                u = n.inQuote || !1,
                                a = n.inline || !1;
                            n.inQuote = !0;
                            o || (n.inline = !0);
                            var c = t(l, n);
                            n.inQuote = u;
                            n.inline = a;
                            0 === c.length && c.push({
                                type: "text",
                                content: " "
                            });
                            return {
                                content: c,
                                type: "blockQuote"
                            }
                        }
                    }),
                    link: B.ZP,
                    autolink: Oe(Ee({}, u().defaultRules.autolink), {
                        parse: Le
                    }),
                    url: Oe(Ee({}, u().defaultRules.url), {
                        requiredFirstCharacters: ["h", "s"],
                        match: function(e, t) {
                            if (!t.inline) return null;
                            var n = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/.exec(e);
                            if (null != n) {
                                for (var r = 0, o = n[0], i = o.length - 1; i >= 0 && ")" === o[i]; i--) {
                                    var l = o.indexOf("(", r);
                                    if (-1 === l) {
                                        o = o.slice(0, o.length - 1);
                                        break
                                    }
                                    r = l + 1
                                }
                                n[0] = n[1] = o
                            }
                            return n
                        },
                        parse: Le
                    }),
                    strong: u().defaultRules.strong,
                    em: u().defaultRules.em,
                    u: u().defaultRules.u,
                    br: u().defaultRules.br,
                    text: I.ZP,
                    inlineCode: Oe(Ee({}, u().defaultRules.inlineCode), {
                        parse: function(e, t, n) {
                            var r = u().defaultRules.inlineCode.parse(e, t, n);
                            return !0 === n.parseInlineCodeChildContent ? Oe(Ee({}, r), {
                                validationChildContent: t(r.content, n)
                            }) : r
                        }
                    }),
                    emoticon: {
                        order: I.ZP.order,
                        requiredFirstCharacters: ["¯"],
                        match: function(e) {
                            return /^(¯\\_\(ツ\)_\/¯)/.exec(e)
                        },
                        parse: function(e) {
                            return {
                                type: "text",
                                content: e[1]
                            }
                        }
                    },
                    codeBlock: {
                        order: u().defaultRules.codeBlock.order,
                        requiredFirstCharacters: ["`"],
                        match: function(e) {
                            return /^```(?:([a-z0-9_+\-.]+?)\n)?\n*([^\n][^]*?)\n*```/i.exec(e)
                        },
                        parse: function(e, t, n) {
                            var r, o;
                            return {
                                lang: null !== (r = e[1]) && void 0 !== r ? r : "",
                                content: null !== (o = e[2]) && void 0 !== o ? o : "",
                                inQuote: n.inQuote || !1
                            }
                        }
                    },
                    roleMention: {
                        order: I.ZP.order,
                        requiredFirstCharacters: ["<"],
                        match: function(e) {
                            return /^<@&(\d+)>/.exec(e)
                        },
                        parse: function(e, t, n) {
                            var r = we(e, 2),
                                o = (r[0], r[1]);
                            if (n.returnMentionIds) return {
                                type: "roleMention",
                                id: o
                            };
                            var i = Ze(n),
                                l = null != i ? i.roles[o] : null;
                            return null == l ? {
                                type: "text",
                                content: "@".concat(_.Z.Messages.DELETED_ROLE_PLACEHOLDER)
                            } : {
                                type: "mention",
                                channelId: n.channelId,
                                guildId: null != i ? i.id : null,
                                roleId: o,
                                roleColor: l.color,
                                color: l.color,
                                colorString: l.colorString,
                                content: [{
                                    type: "text",
                                    content: "@".concat(l.name)
                                }]
                            }
                        }
                    },
                    mention: {
                        order: I.ZP.order,
                        requiredFirstCharacters: ["<", "@"],
                        match: function(e, t) {
                            var n = /^<@!?(\d+)>|^(@(?:everyone|here|Clyde))/.exec(e);
                            return null == n ? null : "@Clyde" !== n[0] || (0, a.gJ)(Ze(t), f.Z.getChannel(t.channelId)) ? n : null
                        },
                        parse: function(e, t, n) {
                            if (n.returnMentionIds) return null == e[1] ? {
                                type: "mention",
                                text: e[0]
                            } : {
                                type: "mention",
                                id: e[1]
                            };
                            var r, o, i = p.default.getUser(e[1]),
                                l = f.Z.getChannel(n.channelId);
                            if (null != i) {
                                o = i.id;
                                r = i.toString();
                                if (null != l) {
                                    var u;
                                    r = null !== (u = y.ZP.getNickname(l.getGuildId(), n.channelId, i)) && void 0 !== u ? u : v.ZP.getName(i)
                                }
                            }
                            null == i && "@Clyde" === e[0] && (0, a.gJ)(Ze(n), l) && (o = ye.fL);
                            var c = e[1],
                                s = null != c && A.Xyh.test(c.trim()) && n.unknownUserMentionPlaceholder ? "@".concat(_.Z.Messages.UNKNOWN_USER_MENTION_PLACEHOLDER) : e[0];
                            return {
                                userId: o,
                                channelId: n.channelId,
                                guildId: null == l ? void 0 : l.getGuildId(),
                                roleName: e[2],
                                content: [{
                                    type: "text",
                                    content: null != r ? "@".concat(r) : s
                                }]
                            }
                        }
                    },
                    channelMention: q.channelMention,
                    channelOrMessageUrl: q.channelOrMessageUrl,
                    mediaPostLink: q.mediaPostLink,
                    commandMention: {
                        order: u().defaultRules.text.order,
                        requiredFirstCharacters: ["<"],
                        match: function(e) {
                            return RegExp("^<\\/((?:[-_\\p{Letter}\\p{Number}\\p{sc=Deva}\\p{sc=Thai}]{1,32})(?: [-_\\p{Letter}\\p{Number}\\p{sc=Deva}\\p{sc=Thai}]{1,32})?(?: [-_\\p{Letter}\\p{Number}\\p{sc=Deva}\\p{sc=Thai}]{1,32})?):(\\d+)>", "u").exec(e)
                        },
                        parse: function(e, t, n) {
                            if (n.returnMentionIds) return {
                                type: "commandMention",
                                id: e[2]
                            };
                            var r, o = (ge(r = e[1].split(" ")) || he(r) || Pe(r, i) || be()).slice(1),
                                l = "".concat(e[2]).concat(Se(o).map((function(e) {
                                    return "".concat(pe.oQ).concat(e)
                                })).join(""));
                            return {
                                channelId: n.channelId,
                                commandId: e[2],
                                commandName: e[1],
                                commandKey: l,
                                content: [{
                                    type: "text",
                                    content: "".concat(e[1])
                                }]
                            }
                        }
                    },
                    emoji: {
                        order: I.ZP.order,
                        requiredFirstCharacters: [":"],
                        match: function(e) {
                            var t = c.ZP.EMOJI_NAME_RE.exec(e);
                            return null != t && "" !== c.ZP.convertNameToSurrogate(t[1]) ? t : null
                        },
                        parse: function(e) {
                            var t = c.ZP.convertNameToSurrogate(e[1]);
                            return {
                                type: "text",
                                content: null == t || "" === t ? ":".concat(e[1], ":") : t
                            }
                        }
                    },
                    soundboard: {
                        order: I.ZP.order,
                        requiredFirstCharacters: ["<"],
                        match: function(e) {
                            return /^<sound:(\d+)>/.exec(e)
                        },
                        parse: function(e, t, n) {
                            var r, o = e[1],
                                i = s.Z.getSoundById(o),
                                l = null !== (r = null == i ? void 0 : i.name) && void 0 !== r ? r : o;
                            return {
                                type: "soundboard",
                                id: o,
                                soundId: o,
                                channelId: n.channelId,
                                content: l
                            }
                        }
                    },
                    customEmoji: {
                        order: I.ZP.order,
                        requiredFirstCharacters: ["<"],
                        match: function(e) {
                            return /^<a?:(\w+):(\d+)>/.exec(e)
                        },
                        parse: function(e) {
                            return {
                                type: "text",
                                content: ":".concat(e[1], ":")
                            }
                        }
                    },
                    timestamp: {
                        order: I.ZP.order - 1,
                        requiredFirstCharacters: ["<"],
                        match: function(e) {
                            return fe.Ay.exec(e)
                        },
                        parse: function(e) {
                            var t = we(e, 3),
                                n = t[0],
                                r = t[1],
                                o = t[2],
                                i = (0, fe.ZB)(r, o);
                            return null == i ? {
                                type: "text",
                                content: n
                            } : i
                        }
                    },
                    s: {
                        order: u().defaultRules.u.order,
                        requiredFirstCharacters: ["~"],
                        match: u().inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
                        parse: u().defaultRules.u.parse
                    },
                    spoiler: {
                        order: I.ZP.order,
                        requiredFirstCharacters: ["|"],
                        match: function(e) {
                            return A.$92.exec(e)
                        },
                        parse: function(e, t, n) {
                            return {
                                content: t(e[1], n),
                                channelId: n.channelId
                            }
                        }
                    },
                    staticRouteLink: {
                        order: I.ZP.order,
                        requiredFirstCharacters: ["<"],
                        match: function(e) {
                            return A.PEY.exec(e)
                        },
                        parse: function(e, t, n) {
                            return {
                                content: [{
                                    type: "text",
                                    content: {
                                        home: _.Z.Messages.SERVER_GUIDE,
                                        guide: _.Z.Messages.SERVER_GUIDE,
                                        browse: _.Z.Messages.CHANNEL_BROWSER_TITLE,
                                        customize: _.Z.Messages.CHANNELS_AND_ROLES
                                    } [e[1]]
                                }],
                                channelId: e[1],
                                guildId: Ne(n.channelId),
                                id: e[1]
                            }
                        }
                    },
                    heading: F.Z,
                    list: re
                },
                Te = (0, de.Z)([Re, se]),
                je = o().omit(Te, ["inlineCode", "codeBlock", "br", "blockQuote"]),
                xe = o().omit(Te, ["inlineCode", "codeBlock", "br", "blockQuote", "url", "mention", "roleMention", "channelMention", "channelOrMessageUrl", "mediaPostLink"]),
                De = o().omit(Te, ["codeBlock", "br", "mention", "channel", "roleMention"]),
                Me = o().omit((0, de.Z)([Te, {
                    inlineCode: {
                        match: function(e, t, n) {
                            var r = Te.codeBlock.match(e, t, n);
                            if (null != r) return r;
                            var o = Te.inlineCode.match(e, t, n);
                            return null != o ? o : void 0
                        }
                    }
                }]), ["blockQuote", "codeBlock", "br"]),
                ke = o().omit(Te, ["codeBlock", "br", "blockQuote"]),
                Ue = o().omit(Te, ["codeBlock", "br", "mention", "roleMention", "channel", "paragraph", "newline"]),
                Ge = o().omit(Te, ["codeBlock", "blockQuote", "br"]);

            function qe(e, t) {
                return 0 === e.length || (0 === t || "" === e.charAt(t - 1).trim())
            }
            var Fe = (0, de.Z)([{
                highlightWord: {
                    order: -1,
                    match: function(e, t) {
                        if (null == t.highlightWord || 0 === t.highlightWord.length) return null;
                        var n = e.indexOf(t.highlightWord);
                        if (-1 === n) return null;
                        var r = !qe(e, n);
                        if (r)
                            do {
                                n = e.indexOf(t.highlightWord, n + 1);
                                r = !qe(e, n)
                            } while (r && -1 !== n);
                        if (-1 === n) return null;
                        var o = e.substring(0, n),
                            i = e.substring(n + t.highlightWord.length);
                        return [e, t.highlightWord, o, i]
                    },
                    parse: function(e, t, n) {
                        var r = t(e[2], n),
                            o = t(e[3], n);
                        return Se(r).concat([{
                            type: "highlight",
                            content: e[1]
                        }], Se(o))
                    }
                }
            }, o().omit(Te, ["url"])]);
            const Be = {
                RULES: Te,
                CHANNEL_TOPIC_RULES: je,
                VOICE_CHANNEL_STATUS_RULES: xe,
                EMBED_TITLE_RULES: De,
                INLINE_REPLY_RULES: Me,
                GUILD_VERIFICATION_FORM_RULES: ke,
                GUILD_EVENT_RULES: Ge,
                PROFILE_BIO_RULES: Ue,
                AUTO_MODERATION_SYSTEM_MESSAGE_RULES: Fe
            }
        },
        757278: (e, t, n) => {
            n.d(t, {
                T9: () => i,
                ZP: () => u
            });
            var r = n(120053);

            function o(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var i = function(e) {
                    return new RegExp("^[\\s\\S]+?(?=".concat(e, "|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)"))
                },
                l = function(e, t) {
                    t = null != t ? t : {};
                    Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            })));
                            n.push.apply(n, r)
                        }
                        return n
                    }(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }));
                    return e
                }(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            o(e, t, n[t])
                        }))
                    }
                    return e
                }({}, n.n(r)().defaultRules.text), {
                    match: (0, r.anyScopeRegex)(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/)
                });
            const u = l
        },
        971561: (e, t, n) => {
            n.d(t, {
                Qh: () => l,
                K_: () => u,
                Ay: () => c,
                ZB: () => s,
                He: () => f
            });
            var r = n(730381),
                o = n.n(r),
                i = n(70145),
                l = {
                    t: function(e) {
                        return (0, i.vc)(e, "LT")
                    },
                    T: function(e) {
                        return (0, i.vc)(e, "LTS")
                    },
                    d: function(e) {
                        return (0, i.vc)(e, "L")
                    },
                    D: function(e) {
                        return (0, i.vc)(e, "LL")
                    },
                    f: function(e) {
                        return (0, i.vc)(e, "LLL")
                    },
                    F: function(e) {
                        return (0, i.vc)(e, "LLLL")
                    },
                    R: function(e) {
                        var t = o().relativeTimeThreshold("s");
                        o().relativeTimeThreshold("s", 60);
                        var n = o().relativeTimeThreshold("ss");
                        o().relativeTimeThreshold("ss", -1);
                        var r = o().relativeTimeThreshold("m");
                        o().relativeTimeThreshold("m", 60);
                        var i = o()(e.toDate()).fromNow();
                        o().relativeTimeThreshold("s", t);
                        o().relativeTimeThreshold("ss", n);
                        o().relativeTimeThreshold("m", r);
                        return i
                    }
                },
                u = "f";
            Object.setPrototypeOf(l, null);
            var a = Object.keys(l).join("|"),
                c = new RegExp("^<t:(-?\\d{1,17})(?::(".concat(a, "))?>"));

            function s(e, t) {
                var n = o()(1e3 * Number(e));
                if (!n.isValid()) return null;
                var r = null != t ? l[t] : void 0;
                null == r && (r = l[u]);
                return {
                    timestamp: e,
                    format: t,
                    parsed: n,
                    full: l.F(n),
                    formatted: r(n)
                }
            }

            function f(e, t) {
                return null != t ? "<t:".concat(e, ":").concat(t, ">") : "<t:".concat(e, ">")
            }
        },
        844494: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });

            function r(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function o(e) {
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

            function i(e) {
                var t = {},
                    n = !0,
                    r = !1,
                    i = void 0;
                try {
                    for (var l, u = e[Symbol.iterator](); !(n = (l = u.next()).done); n = !0) {
                        var a = l.value;
                        for (var c in a) t[c] = c in t ? o({}, t[c], a[c]) : o({}, a[c])
                    }
                } catch (e) {
                    r = !0;
                    i = e
                } finally {
                    try {
                        n || null == u.return || u.return()
                    } finally {
                        if (r) throw i
                    }
                }
                return t
            }
        },
        30027: (e, t, n) => {
            n.d(t, {
                ZP: () => te
            });
            var r = n(496486),
                o = n.n(r),
                i = n(120053),
                l = n.n(i),
                u = n(773011),
                a = n(245353),
                c = n(135855),
                s = n(897436),
                f = n(766281),
                d = n(757278),
                p = n(331055),
                y = n(18882),
                v = n(968449),
                g = n(61209),
                m = n(5544),
                h = n(21372),
                b = n(567403),
                E = n(682776),
                O = n(840922),
                w = n(793461),
                S = n(473903),
                P = n(504275),
                C = n(38004),
                I = n(749565),
                A = n(2590),
                _ = n(213424),
                L = n(473708);

            function N(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Z(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Z(e, t, n[t])
                    }))
                }
                return e
            }

            function T(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function j(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            l = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || D(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function x(e) {
                return function(e) {
                    if (Array.isArray(e)) return N(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || D(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function D(e, t) {
                if (e) {
                    if ("string" == typeof e) return N(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? N(e, t) : void 0
                }
            }

            function M(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                if (t[0] !== e) return null;
                var o = t.substr(e.length);
                return n.sortBy((function(e) {
                    return -e.text.length
                })).filter((function(e) {
                    var n = e.text;
                    return 1 === t.toLowerCase().indexOf(n.toLowerCase())
                })).sortBy((function(e) {
                    return e.text === o ? 0 : 1
                })).map((function(t) {
                    var n = t.id,
                        o = t.text;
                    return [e + o, n, r]
                })).first()
            }

            function k(e) {
                return {
                    order: e.order,
                    match: e.match,
                    parse: function(t) {
                        return {
                            type: e.type,
                            content: t[0]
                        }
                    }
                }
            }

            function U(e) {
                return {
                    match: l().anyScopeRegex(e),
                    parse: function(e) {
                        return {
                            type: "text",
                            content: e[0]
                        }
                    }
                }
            }
            var G = f.Z.RULES,
                q = d.ZP,
                F = /^<@!?(\d+)>/,
                B = /^<@&(\d+)>/,
                V = /^<#(\d+)>/,
                H = /^<a?:(\w+):(\d+)>/,
                Y = /(@everyone|@here|@Clyde)\b/,
                Q = {
                    link: k(l().defaultRules.link),
                    autolink: k(l().defaultRules.autolink),
                    url: k(l().defaultRules.url),
                    inlineCode: k(G.inlineCode),
                    codeBlock: k(G.codeBlock),
                    rawUserMention: U(F),
                    rawRoleMention: U(B),
                    rawChannelMention: U(V),
                    rawEmoji: U(H),
                    mention: {
                        match: function(e, t, n) {
                            var r = n.split(" ").pop() + e;
                            if (/^[^ ]+@[^ ]+\.[^ .]+/.test(r)) return null;
                            var o = M("@", e, t.users, "mention");
                            if (o) return o;
                            if (o = M("@", e, t.mentionableRoles, "roleMention")) return o;
                            if (!(o = M("@", e, t.users.map((function(e) {
                                    return T(R({}, e), {
                                        text: e.text.split("#")[0]
                                    })
                                })), "mention"))) return null;
                            var i = Y.exec(e);
                            if (null != i && o[0].length <= i[0].length) return null;
                            if ("" === n && (0,
                                    p.BH)()) {
                                var l = p.vD.exec(e);
                                if (null != l && o[0].length <= l[0].length) return null
                            }
                            return o
                        },
                        parse: function(e) {
                            var t = j(e, 3),
                                n = t[1],
                                r = t[2],
                                o = "@";
                            "roleMention" === r && (o += "&");
                            return {
                                type: r,
                                content: "<".concat(o).concat(n, ">")
                            }
                        }
                    },
                    channel: {
                        match: function(e, t) {
                            return function(e, t, n) {
                                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                                if (t[0] !== e) return null;
                                if ('"' !== t[1]) return M(e, t, n, r);
                                for (var o = 2; o < t.length; o++)
                                    if ("\\" !== t[o]) {
                                        if ('"' === t[o]) break
                                    } else o++;
                                var i = t.substring(0, o + 1),
                                    l = (0, u.mA)(t.substring(2, o));
                                return n.sortBy((function(e) {
                                    return -e.text.length
                                })).filter((function(e) {
                                    var t = e.text;
                                    return l === t
                                })).map((function(e) {
                                    var t = e.id;
                                    return [i, t, r]
                                })).first()
                            }("#", e, t.channels)
                        },
                        parse: function(e) {
                            return {
                                type: "text",
                                content: "<#".concat(e[1], ">")
                            }
                        }
                    },
                    emoticon: {
                        match: function(e, t, n) {
                            if (!v.ev.getSetting()) return null;
                            if (0 !== n.length && !/\s$/.test(n)) return null;
                            var r = c.ZP.EMOJI_SHORTCUT_RE.exec(e);
                            return null == r || r[0].length !== e.length && " " !== e[r[0].length] && "\n" !== e[r[0].length] ? null : r
                        },
                        parse: function(e) {
                            return {
                                type: "emoticon",
                                content: c.ZP.convertShortcutToName(e[1]),
                                isShortcut: !0
                            }
                        }
                    },
                    emoji: {
                        order: G.emoji.order,
                        match: function(e) {
                            return c.ZP.EMOJI_NAME_RE.exec(e)
                        },
                        parse: function(e, t, n) {
                            var r = j(e, 2),
                                o = r[0],
                                i = r[1],
                                l = n.customEmoji,
                                u = Object.prototype.hasOwnProperty.call(l, i) ? l[i] : null;
                            if (null != u) {
                                var a;
                                return {
                                    type: "customEmoticon",
                                    content: "<".concat(!0 === u.animated ? "a" : "", ":").concat(null !== (a = u.originalName) && void 0 !== a ? a : u.name, ":").concat(u.id, ">"),
                                    emoji: u
                                }
                            }
                            return {
                                type: "text",
                                content: o
                            }
                        }
                    },
                    customEmoticons: {
                        match: function(e, t) {
                            var n, r;
                            return null !== (r = null === (n = t.customEmoticonsRegex) || void 0 === n ? void 0 : n.exec(e)) && void 0 !== r ? r : null
                        },
                        parse: function(e, t, n) {
                            var r = j(e, 2),
                                o = r[0],
                                i = r[1],
                                l = n.emojiContext.getEmoticonByName(i);
                            return null != l ? {
                                type: "customEmoticon",
                                content: "<".concat(!0 === l.animated ? "a" : "", ":").concat(l.name, ":").concat(l.id, ">"),
                                emoji: l
                            } : {
                                type: "text",
                                content: o
                            }
                        }
                    },
                    text: T(R({}, q), {
                        match: function(e, t) {
                            return "string" == typeof t.textExclusions && "" !== t.textExclusions ? (0, d.T9)(t.textExclusions).exec(e) : null != q.match ? q.match(e, t, "") : null
                        }
                    })
                },
                W = {
                    inlineCode: k(G.inlineCode),
                    codeBlock: k(G.codeBlock),
                    mention: {
                        match: l().anyScopeRegex(F),
                        parse: function(e, t, n) {
                            var r = n.isNotification,
                                o = S.default.getUser(e[1]);
                            if (null == o) return {
                                content: e[0]
                            };
                            var i = I.ZP.getUserTag(o, {
                                identifiable: r && w.Z.enabled ? "never" : "always"
                            });
                            if (r) {
                                var l = I.ZP.getGlobalName(o);
                                return {
                                    content: "@".concat(null != l ? l : i)
                                }
                            }
                            return {
                                content: "@".concat(i)
                            }
                        }
                    },
                    roleMention: {
                        match: l().anyScopeRegex(B),
                        parse: function(e, t, n) {
                            var r = n.guild;
                            if (null != r) {
                                var o = r.roles[e[1]];
                                if (null != o) return {
                                    content: "@".concat(o.name)
                                }
                            }
                            return {
                                content: e[0]
                            }
                        }
                    },
                    channel: {
                        match: l().anyScopeRegex(V),
                        parse: function(e) {
                            var t = g.Z.getChannel(e[1]);
                            return {
                                content: null == t ? e[0] : (0, u.F6)(t, S.default, O.Z, !0, !0)
                            }
                        }
                    },
                    emoji: {
                        match: l().anyScopeRegex(H),
                        parse: function(e, t, n) {
                            var r = j(e, 3),
                                o = (r[0],
                                    r[1]),
                                i = r[2],
                                l = n.guild,
                                u = a.Z.getDisambiguatedEmojiContext(l ? l.id : null).getById(i),
                                c = null != u ? u.name : o;
                            return {
                                content: ":".concat(c, ":")
                            }
                        }
                    },
                    soundboard: {
                        match: l().anyScopeRegex(/^<sound:(\d+)>/),
                        parse: function(e) {
                            var t = j(e, 2),
                                n = (t[0], t[1]);
                            return {
                                content: "<sound:".concat(n, ">")
                            }
                        }
                    },
                    spoiler: {
                        match: l().anyScopeRegex(A.$92),
                        parse: function() {
                            return {
                                content: "<".concat(L.Z.Messages.SPOILER.toLowerCase(), ">")
                            }
                        }
                    },
                    staticRouteLink: {
                        match: l().anyScopeRegex(A.PEY),
                        parse: function(e) {
                            return {
                                content: "<id:".concat(e[1], ">")
                            }
                        }
                    },
                    timestamp: T(R({}, G.timestamp), {
                        parse: function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            var r, o = (r = G.timestamp).parse.apply(r, x(t));
                            return {
                                content: o.formatted
                            }
                        }
                    }),
                    text: R({}, q)
                };
            [Q, W].forEach((function(e) {
                Object.keys(e).forEach((function(t, n) {
                    e[t].order = n
                }))
            }));
            var K = l().parserFor(Q),
                z = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;

            function $(e, t, n, r) {
                var o = "";
                e.forEach((function(e) {
                    ! function(e, t, n) {
                        if (null != n) {
                            "customEmoticon" === t.type && n(t.emoji, !1);
                            if ("emoticon" === t.type || "text" === t.type)
                                for (var r, o = c.ZP.translateSurrogatesToInlineEmoji(t.content); null !== (r = z.exec(o));) {
                                    var i = void 0;
                                    null != r[1] && "" !== r[1] ? e.emojiContext && (i = e.emojiContext.getById(r[1])) : i = c.ZP.getByName(r[2]);
                                    i && n(i, t.isShortcut || !1)
                                }
                        }
                    }(t, e, r);
                    if ("string" == typeof e.content) switch (e.type) {
                        case "codeBlock":
                        case "inlineCode":
                        case "mention":
                        case "roleMention":
                        case "channel":
                        case "emoji":
                            o += e.content;
                            break;
                        default:
                            o += n(e.content)
                    } else e.content.constructor === Array ? o += $(e.content, t, n, r) : console.warn("Unknown message item type: ", e)
                }));
                return o
            }

            function J(e, t, n) {
                return $(K(e, t), t, c.ZP.translateInlineEmojiToSurrogates, n)
            }

            function X(e) {
                var t, n = null == e ? void 0 : e.getGuildId(),
                    r = null != n ? b.Z.getGuild(n) : null,
                    i = E.Z.can(A.Plq.MENTION_EVERYONE, e);
                t = (null == e ? void 0 : e.isPrivate()) ? e.recipients.map((function(e) {
                    return {
                        userId: e,
                        nick: null
                    }
                })) : null != n ? h.ZP.getMembers(n).map((function(e) {
                    return {
                        userId: e.userId,
                        nick: e.nick
                    }
                })) : [];
                var l = o()(t.reduce((function(e, t) {
                        var n = t.userId,
                            r = S.default.getUser(n);
                        if (null == r) return e;
                        e.push({
                            id: n,
                            text: r.tag
                        });
                        return e
                    }), [])),
                    u = o()(null != r ? r.roles : {}).values().filter((function(e) {
                        var t = e.mentionable;
                        return i || t
                    })).map((function(e) {
                        return {
                            id: e.id,
                            text: e.name
                        }
                    })),
                    c = o()(m.ZP.getTextChannelNameDisambiguations(n)).map((function(e) {
                        return {
                            id: e.id,
                            text: e.name
                        }
                    })),
                    f = null != n ? o()(P.k1).filter((function(e) {
                        return e !== m.sH
                    })).flatMap((function(e) {
                        return m.ZP.getChannels(n)[e].map((function(e) {
                            return {
                                id: e.channel.id,
                                text: e.channel.name
                            }
                        }))
                    })).value() : [],
                    d = y.Z.computeAllActiveJoinedThreads(n).map((function(e) {
                        return {
                            id: e.id,
                            text: e.name
                        }
                    })),
                    p = a.Z.getDisambiguatedEmojiContext(n),
                    v = p.getEscapedCustomEmoticonNames(),
                    g = p.getCustomEmoji(),
                    O = p.getCustomEmoticonRegex(),
                    w = S.default.getCurrentUser(),
                    C = (0, s.Jp)({
                        user: w,
                        autoTrackExposure: !1
                    }).viewAndUseEnabled;
                return {
                    inline: !0,
                    mentionableRoles: u,
                    guild: r,
                    users: l,
                    channels: c.concat(f).concat(d),
                    emojiContext: p,
                    customEmoticonsRegex: O,
                    canViewAndUsePackEmoji: C,
                    customEmoji: g,
                    textExclusions: v,
                    disableErrorGuards: !0
                }
            }

            function ee(e) {
                return e
            }
            const te = {
                parse: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                        r = null != n ? n : X(e),
                        o = {
                            content: t,
                            tts: !1,
                            invalidEmojis: [],
                            validNonShortcutEmojis: []
                        };
                    o.content = J(o.content, r, (function(t, n) {
                        C.ZP.isEmojiPremiumLocked({
                            emoji: t,
                            channel: e,
                            intention: _.Hz.CHAT,
                            canViewAndUsePackEmoji: r.canViewAndUsePackEmoji
                        }) ? o.invalidEmojis.push(t) : n || o.validNonShortcutEmojis.push(t)
                    }));
                    return o
                },
                parsePreprocessor: function(e, t) {
                    var n = X(e);
                    return K(t, n)
                },
                unparse: function(e, t, n) {
                    var r = g.Z.getChannel(t),
                        i = null != r ? r.getGuildId() : null,
                        u = null != i ? b.Z.getGuild(i) : null,
                        a = n ? W : o().omit(W, ["spoiler", "timestamp"]),
                        s = n ? ee : c.ZP.translateSurrogatesToInlineEmoji,
                        f = {
                            inline: !0,
                            guild: u,
                            isNotification: n
                        };
                    return $(l().parserFor(a)(e, f), f, s)
                }
            }
        },
        842715: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            const r = (0, n(260561).B)({
                kind: "user",
                id: "2023-03_free_discord_stickers",
                label: "Free Default Stickers",
                defaultConfig: {
                    freeStickersEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        freeStickersEnabled: !0
                    }
                }]
            })
        },
        748755: (e, t, n) => {
            n.d(t, {
                eb: () => r,
                cO: () => c,
                kl: () => s
            });
            var r, o = n(563135),
                i = n(116094),
                l = n(842715),
                u = n(513586),
                a = n(2590);
            ! function(e) {
                e[e.SENDABLE = 0] = "SENDABLE";
                e[e.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM";
                e[e.NONSENDABLE = 2] = "NONSENDABLE";
                e[e.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD"
            }(r || (r = {}));
            var c = function(e, t, n) {
                    if (null == t) return r.NONSENDABLE;
                    var c = i.ZP.canUseStickersEverywhere(t);
                    if ((0, u.jl)(e)) {
                        var s = l.Z.getCurrentConfig({
                            location: "c036ff_1"
                        }, {
                            autoTrackExposure: !1
                        }).freeStickersEnabled;
                        return c || s ? r.SENDABLE : r.SENDABLE_WITH_PREMIUM
                    }
                    return (0, u.J8)(e) && null != n ? e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? r.SENDABLE : null == n.guild_id || o.ZP.can({
                        permission: a.Plq.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? c ? r.SENDABLE : r.SENDABLE_WITH_PREMIUM : r.NONSENDABLE : r.SENDABLE_WITH_BOOSTED_GUILD : r.NONSENDABLE
                },
                s = function(e, t, n) {
                    return c(e, t, n) === r.SENDABLE
                }
        },
        166232: (e, t, n) => {
            n.d(t, {
                Z: () => _
            });
            var r = n(496486),
                o = n.n(r),
                i = n(202351),
                l = n(744564),
                u = n(747864),
                a = n(473419),
                c = n(78551),
                s = n(2590),
                f = n(131559);

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function v(e) {
                v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return v(e)
            }

            function g(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function m(e, t) {
                return !t || "object" !== b(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e, t) {
                h = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return h(e, t)
            }
            var b = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function E(e) {
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
                    var n, r = v(e);
                    if (t) {
                        var o = v(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return m(this, n)
                }
            }
            var O = {
                    pendingUsages: []
                },
                w = (s.UF9.DAY, new u.Z({
                    computeBonus: function() {
                        return 100
                    },
                    computeWeight: function(e) {
                        var t = 0;
                        e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10);
                        return t
                    },
                    lookupKey: function(e) {
                        return c.Z.getStickerById(e)
                    },
                    afterCompute: function() {},
                    numFrequentlyItems: 20
                })),
                S = function() {
                    c.Z.isLoaded && w.compute()
                },
                P = function(e) {
                    var t = e.stickerIds;
                    null == t || t.forEach((function(e) {
                        w.track(e);
                        O.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }));
                    S()
                },
                C = function() {
                    S()
                };

            function I() {
                var e, t = null === (e = a.Z.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                w.overwriteHistory(o().mapValues(t, (function(e) {
                    return g(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                y(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, e), {
                        recentUses: e.recentUses.map(Number).filter((function(e) {
                            return e > 0
                        }))
                    })
                })), O.pendingUsages)
            }
            var A = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && h(e, t)
                }(n, e);
                var t = E(n);

                function n() {
                    d(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    this.waitFor(c.Z);
                    null != e && (O = e);
                    this.syncWith([c.Z], C);
                    this.syncWith([a.Z], I)
                };
                r.getState = function() {
                    return O
                };
                r.hasPendingUsage = function() {
                    return O.pendingUsages.length > 0
                };
                r.__getLocalVars = function() {
                    return {
                        state: O,
                        NUM_FREQUENTLY_USED_STICKERS: 20,
                        stickerFrecency: w,
                        recomputeStickerFrecency: S,
                        handleStickersUsage: P,
                        handleStickersStoreUpdate: C
                    }
                };
                ! function(e, t, n) {
                    t && p(e.prototype, t);
                    n && p(e, n)
                }(n, [{
                    key: "stickerFrecencyWithoutFetchingLatest",
                    get: function() {
                        return w
                    }
                }]);
                return n
            }(i.ZP.PersistedStore);
            A.displayName = "StickersPersistedStore";
            A.persistKey = "StickersPersistedStoreV2";
            const _ = new A(l.Z, {
                STICKER_TRACK_USAGE: P,
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    var t = e.settings.type,
                        n = e.wasSaved;
                    if (t !== f.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    O.pendingUsages = []
                }
            })
        },
        770819: (e, t, n) => {
            n.d(t, {
                Z: () => ne
            });
            var r = n(824390),
                o = n.n(r),
                i = n(496486),
                l = n.n(i),
                u = n(730381),
                a = n.n(u),
                c = n(202351),
                s = n(744564),
                f = n(944751),
                d = n(384411),
                p = n(476020),
                y = n(959207),
                v = n(761814),
                g = n(671723),
                m = n(793461),
                h = n(575136),
                b = n(276433),
                E = n(713094),
                O = n(454708),
                w = n(295652),
                S = n(72580),
                P = n(954419),
                C = n(120415),
                I = n(310126),
                A = n(499542),
                _ = n(623663),
                L = n(2590);

            function N(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Z(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function R(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function T(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function j(e) {
                j = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return j(e)
            }

            function x(e, t) {
                return !t || "object" !== k(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function D(e, t) {
                D = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return D(e, t)
            }

            function M(e) {
                return function(e) {
                    if (Array.isArray(e)) return N(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return N(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return N(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var k = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function U(e) {
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
                    var n, r = j(e);
                    if (t) {
                        var o = j(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return x(this, n)
                }
            }
            var G, q = a()().subtract(1, "week"),
                F = [],
                B = "",
                V = !1;

            function H(e, t) {
                return e.application.name.localeCompare(t.application.name, d.default.locale, {
                    sensitivity: "base"
                })
            }

            function Y(e, t) {
                return null != e && (a()(e.createdAt).isAfter(q) && 0 === t)
            }
            var Q = (T(G = {}, L.iEv.NAME, H), T(G, L.iEv.PLATFORM, (function(e, t, n) {
                    var r = e.libraryApplication.getDistributor(),
                        o = t.libraryApplication.getDistributor();
                    return r === o ? (n === L.sHY.DESCENDING ? -1 : 1) * H(e, t) : null == r ? 1 : null == o ? -1 : r.localeCompare(o)
                })), T(G, L.iEv.LAST_PLAYED, (function(e, t) {
                    return e.isNew && !t.isNew ? -1 : !e.isNew && t.isNew ? 1 : e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1
                })), T(G, L.iEv.ACTIONS, null), G),
                W = (0, w.oH)((function(e) {
                    return e.filter((function(e) {
                        return null != e.libraryApplication && e.shouldShowInLibrary
                    }))
                })),
                K = (0, w.oH)((function(e) {
                    return e.filter((function(e) {
                        return null != e.libraryApplication && E.Z.isLaunchable(e.libraryApplication.id, e.libraryApplication.branchId)
                    }))
                })),
                z = (0, w.oH)((function(e, t) {
                    return e.filter((function(e) {
                        return o()(t.toLowerCase(), e.application.name.toLowerCase())
                    }))
                })),
                $ = (0, w.oH)((function(e, t, n, r) {
                    var o = Q[t];
                    if (null == o) return e;
                    var i = M(e).sort(o);
                    return n === L.sHY.DESCENDING ? i.reverse() : i
                })),
                J = (0, w.oH)((function(e) {
                    return e.filter((function(e) {
                        return null != e.libraryApplication && e.libraryApplication.isHidden()
                    }))
                }));

            function X(e, t) {
                var n = h.Z.getCurrentUserStatisticsForApplication(e.id);
                if (null != n) return new Date(n.last_played_at).getTime();
                var r = t[e.id];
                return null != r ? r : 0
            }

            function ee() {
                var e = new Set(g.ZP.getRunningVerifiedApplicationIds()),
                    t = {},
                    n = new Set,
                    r = g.ZP.getGamesSeen(!1, !1).map((function(e) {
                        var n = y.Z.getGameByGameData(e);
                        if (null != n) {
                            t[n.id] = 1e3 * e.lastFocused;
                            return n.id
                        }
                        return null
                    })),
                    o = Object.values(v.Z.getAllLibraryApplications()).map((function(r) {
                        return function(e, t, n, r, o) {
                            if (!o && t.has(e.id)) return null;
                            var i = y.Z.getGame(e.id);
                            if (null == i) return null;
                            var l = X(i, n);
                            t.add(e.id);
                            return (0, P.Je)(e) || E.Z.isInstalled(e.id, e.branchId) ? {
                                key: "".concat(e.id, "-").concat(e.branchId),
                                application: i,
                                libraryApplication: e,
                                lastPlayed: l,
                                supportsCloudSync: null != e && E.Z.supportsCloudSync(e.id, e.branchId),
                                isNew: Y(e, l),
                                isLaunching: f.Z.launchingGames.has(e.id),
                                isRunning: r.has(e.id),
                                isLaunchable: (0, A.t)({
                                    LibraryApplicationStore: v.Z,
                                    LaunchableGameStore: f.Z,
                                    DispatchApplicationStore: E.Z,
                                    ConnectedAppsStore: p.Z,
                                    applicationId: e.id,
                                    branchId: e.branchId
                                }),
                                isUpdatingFlags: v.Z.isUpdatingFlags(e.id, e.branchId),
                                shouldShowInLibrary: (0, P.d0)(i, e, m.Z),
                                defaultAction: (0, _.i)(e, E.Z, O.Z)
                            } : null
                        }(r, n, t, e, !0)
                    })).filter(S.lm),
                    i = r.map((function(r) {
                        return function(e, t, n, r) {
                            var o = null != e ? y.Z.getGame(e) : null;
                            if (null == o || null == e || t.has(e)) return null;
                            var i = X(o, n);
                            t.add(e);
                            return {
                                key: e,
                                application: o,
                                lastPlayed: i,
                                supportsCloudSync: !1,
                                isNew: !1,
                                isLaunching: f.Z.launchingGames.has(e),
                                isRunning: r.has(e),
                                isLaunchable: (0, A.t)({
                                    LibraryApplicationStore: v.Z,
                                    LaunchableGameStore: f.Z,
                                    DispatchApplicationStore: E.Z,
                                    ConnectedAppsStore: p.Z,
                                    applicationId: e,
                                    branchId: null
                                }),
                                isUpdatingFlags: !1,
                                shouldShowInLibrary: !1,
                                libraryApplication: null,
                                defaultAction: null
                            }
                        }(r, n, t, e)
                    })).filter(S.lm),
                    u = M(i).concat(M(o)).sort((function(e, t) {
                        return e.lastPlayed === t.lastPlayed ? 0 : e.lastPlayed > t.lastPlayed ? -1 : 1
                    }));
                V = null != y.Z.lastFetched && v.Z.fetched;
                if (l().isEqual(u, F)) return !1;
                F = u;
                C.FB && I.ZP.setSystemTrayApplications(K(F).map((function(e) {
                    return e.application
                })).slice(0, 5));
                return !0
            }
            var te = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && D(e, t)
                }(n, e);
                var t = U(n);

                function n() {
                    Z(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.syncWith([y.Z, f.Z, g.ZP, E.Z, O.Z, v.Z, h.Z, m.Z, p.Z], ee, 200);
                    this.syncWith([b.Z, d.default], (function() {
                        return !0
                    }))
                };
                r.__getLocalVars = function() {
                    return {
                        MAX_SYSTEM_TRAY_ITEMS: 5,
                        NEW_GAME_THRESHOLD: q,
                        applicationViewItems: F,
                        applicationFilterQuery: B,
                        hasFetchedApplications: V,
                        SORT_FUNCTIONS: Q,
                        getLibraryApplicationViewItems: W,
                        getLaunchableApplicationViewItems: K,
                        getFilteredLibraryApplicationViewItems: z,
                        getSortedFilteredLibraryApplicationViewItems: $,
                        getHiddenLibraryApplicationViewItems: J
                    }
                };
                ! function(e, t, n) {
                    t && R(e.prototype, t);
                    n && R(e, n)
                }(n, [{
                    key: "applicationFilterQuery",
                    get: function() {
                        return B
                    }
                }, {
                    key: "applicationViewItems",
                    get: function() {
                        return F
                    }
                }, {
                    key: "launchableApplicationViewItems",
                    get: function() {
                        return K(F)
                    }
                }, {
                    key: "libraryApplicationViewItems",
                    get: function() {
                        return W(F)
                    }
                }, {
                    key: "filteredLibraryApplicationViewItems",
                    get: function() {
                        return z(this.libraryApplicationViewItems, B)
                    }
                }, {
                    key: "sortedFilteredLibraryApplicationViewItems",
                    get: function() {
                        return $(this.filteredLibraryApplicationViewItems, b.Z.sortKey, b.Z.sortDirection, d.default.locale)
                    }
                }, {
                    key: "hiddenLibraryApplicationViewItems",
                    get: function() {
                        return J(F)
                    }
                }, {
                    key: "hasFetchedApplications",
                    get: function() {
                        return V
                    }
                }]);
                return n
            }(c.ZP.Store);
            te.displayName = "ApplicationViewStore";
            const ne = new te(s.Z, {
                LIBRARY_APPLICATION_FILTER_UPDATE: function(e) {
                    var t = e.query;
                    B = t
                }
            })
        },
        623663: (e, t, n) => {
            n.d(t, {
                i: () => i
            });
            var r = n(499542),
                o = n(2590);

            function i(e, t, n) {
                var i = t.getState(e.id, e.branchId),
                    l = n.getQueuePosition(e.id, e.branchId),
                    u = n.paused;
                if (null != i) {
                    if (null == l || -1 === l) switch (i.type) {
                        case o.vxO.INSTALLING:
                            return o.apO.INSTALL;
                        case o.vxO.UPDATING:
                        case o.vxO.UPDATE_REQUIRED:
                            return o.apO.UPDATE
                    }
                    switch (i.type) {
                        case o.vxO.INSTALLING:
                        case o.vxO.UPDATING:
                        case o.vxO.UPDATE_REQUIRED:
                        case o.vxO.REPAIRING:
                            return l > 0 ? o.apO.MOVE_UP : u ? o.apO.RESUME : o.apO.PAUSE;
                        case o.vxO.UP_TO_DATE:
                            return o.apO.PLAY;
                        case o.vxO.UNINSTALLING:
                            return null
                    }
                }
                return null != l && l > 0 ? o.apO.MOVE_UP : (0, r.Q)() ? o.apO.INSTALL : null
            }
        },
        276433: (e, t, n) => {
            n.d(t, {
                Z: () => P
            });
            var r = n(496486),
                o = n.n(r),
                i = n(202351),
                l = n(630631),
                u = n(744564),
                a = n(2590);

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function f(e) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return f(e)
            }

            function d(e, t) {
                return !t || "object" !== y(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e, t) {
                p = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return p(e, t)
            }
            var y = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function v(e) {
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
                    var n, r = f(e);
                    if (t) {
                        var o = f(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }
            var g, m = "GameLibraryViewStore",
                h = a.sHY.ASCENDING,
                b = a.iEv.LAST_PLAYED,
                E = !1,
                O = o().debounce((function() {
                    E = !1;
                    S.emitChange()
                }), 200);
            var w = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && p(e, t)
                }(n, e);
                var t = v(n);

                function n() {
                    c(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    var e, t = null !== (e = l.Z.get(m)) && void 0 !== e ? e : {};
                    if (null != t.sortDirection && null != t.sortKey) {
                        h = t.sortDirection;
                        b = t.sortKey
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        STORAGE_KEY: m,
                        DISABLE_MOUSE_TIMEOUT: 200,
                        sortDirection: h,
                        sortKey: b,
                        activeRowKey: g,
                        isNavigatingByKeyboard: E,
                        disableKeyboardMode: O,
                        storeInstance: S
                    }
                };
                ! function(e, t, n) {
                    t && s(e.prototype, t);
                    n && s(e, n)
                }(n, [{
                    key: "sortDirection",
                    get: function() {
                        return h
                    }
                }, {
                    key: "sortKey",
                    get: function() {
                        return b
                    }
                }, {
                    key: "activeRowKey",
                    get: function() {
                        return g
                    }
                }, {
                    key: "isNavigatingByKeyboard",
                    get: function() {
                        return E
                    }
                }]);
                return n
            }(i.ZP.Store);
            w.displayName = "GameLibraryViewStore";
            var S = new w(u.Z, {
                LIBRARY_TABLE_SORT_UPDATE: function(e) {
                    var t = e.direction,
                        n = e.key;
                    h = t;
                    b = n;
                    l.Z.set(m, {
                        sortDirection: h,
                        sortKey: b
                    })
                },
                LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE: function(e) {
                    var t = e.key;
                    if (e.isKeyboardEvent) {
                        E = !0;
                        O()
                    }
                    g = t
                }
            });
            const P = S
        },
        504275: (e, t, n) => {
            n.d(t, {
                k1: () => ce,
                ZP: () => be
            });
            var r = n(824390),
                o = n.n(r),
                i = n(496486),
                l = n.n(i),
                u = n(429750),
                a = n(773011),
                c = n(61209),
                s = n(2590);

            function f(e) {
                if (null == e.parent_id) return e.type === s.d4z.GUILD_CATEGORY ? 1e3 * (e.position + 1) : e.position;
                var t, n, r = 1e3 * ((null !== (n = null === (t = c.Z.getChannel(e.parent_id)) || void 0 === t ? void 0 : t.position) && void 0 !== n ? n : 0) + 1);
                return e.isGuildVocal() ? r + e.position + 500 : r + e.position
            }

            function d(e, t) {
                var n, r;
                if (e.score !== t.score) return t.score - e.score;
                var o, i, l = f(e.record),
                    u = f(t.record);
                if (l !== u) return l - u;
                var a, c, s = null !== (i = null !== (o = e.sortable) && void 0 !== o ? o : null === (n = e.comparator) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && void 0 !== i ? i : "",
                    d = null !== (c = null !== (a = e.sortable) && void 0 !== a ? a : null === (r = t.comparator) || void 0 === r ? void 0 : r.toLocaleLowerCase()) && void 0 !== c ? c : "";
                return s < d ? -1 : s > d ? 1 : 0
            }
            var p = n(296602),
                y = n(245353),
                v = n(773411),
                g = n(977997),
                m = n(848465),
                h = n(748755),
                b = n(166232),
                E = n(78551),
                O = n(514351),
                w = n(18882),
                S = n(917019),
                P = n(382060),
                C = n(722406),
                I = n(5544),
                A = n(21372),
                _ = n(567403),
                L = n(352980),
                N = n(682776),
                Z = n(491260),
                R = n(840922),
                T = n(715107),
                j = n(464187),
                x = n(473903),
                D = n(746974),
                M = n(72580),
                k = n(607556),
                U = n(563135),
                G = n(968696),
                q = n(421281),
                F = n(749565),
                B = n(499477),
                V = n(897196),
                H = n(473708);

            function Y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Q(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function W(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function K(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            l = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || $(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function z(e) {
                return function(e) {
                    if (Array.isArray(e)) return Y(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || $(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function $(e, t) {
                if (e) {
                    if ("string" == typeof e) return Y(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Y(e, t) : void 0
                }
            }
            var J, X = new p.Z("AutocompleteUtils"),
                ee = 10,
                te = function() {
                    return !0
                },
                ne = /(\t|\s)/,
                re = [],
                oe = (J = n(625747).Z).MENTION_EVERYONE,
                ie = J.MENTION_HERE,
                le = J.MENTION_CLYDE,
                ue = J.LAUNCHABLE_APPLICATIONS;

            function ae() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return 1e3 * e * (null != t ? t : 1)
            }
            var ce = [I.sH, I.Zb, s.d4z.GUILD_CATEGORY];

            function se(e, t) {
                return e.split(/(?:,| )+/).every((function(e) {
                    return new RegExp(G.Z.escape(e), "i").test(t)
                }))
            }

            function fe(e, t) {
                var n = t.exactQuery,
                    r = t.containQuery,
                    i = t.queryLower,
                    l = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                try {
                    if (n.test(e)) return e.toLocaleLowerCase() === i ? ee : 7;
                    if (r.test(e)) return 5;
                    if (se(i, e)) return 3;
                    if (l && o()(i, e)) return 1
                } catch (e) {
                    X.error(e)
                }
                return 0
            }

            function de(e) {
                return null != (null == e ? void 0 : e.joinedAt) && !e.isPending
            }

            function pe(e) {
                for (var t = e.query, n = e.members, r = e.limit, i = e.filter, l = x.default.getUsers(), a = j.Z.getGuildId(), c = t.toLocaleLowerCase(), s = (0, q.Fv)(c), f = [], d = [], p = n.length, y = 0, v = 0; y < p;) {
                    var g, m = n[y],
                        h = void 0,
                        b = void 0;
                    if (m instanceof C.Z) {
                        var E;
                        b = m;
                        h = null === (E = A.ZP.getNick(a, b.id)) || void 0 === E ? void 0 : E.toLocaleLowerCase()
                    } else {
                        var O;
                        h = null === (O = m.nick) || void 0 === O ? void 0 : O.toLocaleLowerCase();
                        b = l[m.userId]
                    }
                    var w = null === (g = F.ZP.getGlobalName(b)) || void 0 === g ? void 0 : g.toLocaleLowerCase();
                    if (null == i || i(b)) {
                        var S = b.username.toLocaleLowerCase(),
                            P = (0, q._I)(S),
                            I = (0, q.Fv)(P),
                            _ = null != h ? (0, q._I)(h) : null,
                            L = null != _ ? (0, q.Fv)(_) : null,
                            N = null != w ? (0, q._I)(w) : null,
                            Z = null != N ? (0,
                                q.Fv)(N) : null;
                        if (S.substring(0, c.length) === c || P.substring(0, c.length) === c || (null == h ? void 0 : h.substring(0, c.length)) === c || (null == _ ? void 0 : _.substring(0, c.length)) === c || (null == w ? void 0 : w.substring(0, c.length)) === c || (null == N ? void 0 : N.substring(0, c.length)) === c) {
                            var R, T;
                            f.push({
                                type: B.h8.USER,
                                record: b,
                                score: ee,
                                comparator: null !== (R = null != w ? w : h) && void 0 !== R ? R : S,
                                sortable: null !== (T = null != N ? N : _) && void 0 !== T ? T : P
                            })
                        } else if (I.substring(0, s.length) === s || (null == L ? void 0 : L.substring(0, s.length)) === s || (null == Z ? void 0 : Z.substring(0, s.length)) === s) {
                            var D, M;
                            f.push({
                                type: B.h8.USER,
                                record: b,
                                score: 1,
                                comparator: null !== (D = null != w ? w : h) && void 0 !== D ? D : S,
                                sortable: null !== (M = null != N ? N : _) && void 0 !== M ? M : P
                            })
                        } else if (v < 50 && (o()(c, P) || o()(s, I) || null != _ && o()(c, _) || null != L && o()(s, L) || null != N && o()(c, N) || null != Z && o()(s, Z))) {
                            var k, U;
                            d.push({
                                type: B.h8.USER,
                                record: b,
                                score: 1,
                                comparator: null !== (k = null != w ? w : h) && void 0 !== k ? k : S,
                                sortable: null !== (U = null != N ? N : _) && void 0 !== U ? U : P
                            });
                            v += 1
                        }
                    }
                    y += 1
                }
                f.sort(u.Z);
                if (f.length < r) {
                    d.sort(u.Z);
                    f = f.concat(d.slice(0, Math.max(0, r - f.length)))
                }
                f.length > r && (f.length = r);
                return f
            }

            function ye(e) {
                switch (e) {
                    case O.MO.STICKER_NAME:
                        return 11;
                    case O.MO.CORRELATED_EMOJI:
                        return 6;
                    case O.MO.TAG:
                        return 1;
                    case O.MO.GUILD_NAME:
                    case O.MO.PACK_NAME:
                        return 8;
                    default:
                        return 1
                }
            }

            function ve(e, t, n) {
                var r = 0,
                    o = null,
                    i = !0,
                    l = !1,
                    u = void 0;
                try {
                    for (var a, c = t[Symbol.iterator](); !(i = (a = c.next()).done); i = !0) {
                        var s = a.value,
                            f = fe(e, s, n);
                        if (f > r) {
                            r = f;
                            o = s
                        }
                    }
                } catch (e) {
                    l = !0;
                    u = e
                } finally {
                    try {
                        i || null == c.return || c.return()
                    } finally {
                        if (l) throw u
                    }
                }
                null != o && (o.isFullMatch ? t.length = 0 : t.splice(t.indexOf(o), 1));
                return r
            }

            function ge(e, t) {
                if (null != e.guild_id) {
                    var n = t[e.guild_id];
                    if (null == n) {
                        var r;
                        n = t[e.guild_id] = null === (r = _.Z.getGuild(e.guild_id)) || void 0 === r ? void 0 : r.toString().toLocaleLowerCase()
                    }
                    return n
                }
            }

            function me(e, t) {
                if (null != e.parent_id) {
                    var n = t[e.parent_id];
                    if (null == n) {
                        var r;
                        n = t[e.parent_id] = null === (r = c.Z.getChannel(e.parent_id)) || void 0 === r ? void 0 : r.name.toLocaleLowerCase()
                    }
                    return n
                }
            }

            function he(e, t) {
                var n = c.Z.getChannel(e);
                return null == e || null == n ? [] : l()(L.Z.getMessages(e).toArray()).reverse().uniqBy((function(e) {
                    return e.author.id
                })).map((function(e) {
                    return x.default.getUser(e.author.id)
                })).filter((function(e) {
                    if (null == e) return !1;
                    if (e.isNonUserBot() && !e.isClyde()) return !1;
                    var t = n.getGuildId();
                    return null == t || de(A.ZP.getMember(t, e.id))
                })).map((function(e) {
                    var t, r = n.getGuildId(),
                        o = null != r ? A.ZP.getMember(r, e.id) : null;
                    return {
                        type: B.h8.USER,
                        record: e,
                        score: 0,
                        comparator: null !== (t = null == o ? void 0 : o.nick) && void 0 !== t ? t : F.ZP.getName(e)
                    }
                })).take(t).value()
            }
            const be = {
                queryFriends: function(e) {
                    var t = e.query,
                        n = e.limit,
                        r = void 0 === n ? 10 : n,
                        o = (e._fuzzy, e.filter);
                    return pe({
                        query: t,
                        members: R.Z.getFriendIDs().map((function(e) {
                            return x.default.getUser(e)
                        })).filter(M.lm),
                        limit: r,
                        filter: o
                    })
                },
                queryDMUsers: function(e) {
                    var t = e.query,
                        n = e.limit,
                        r = void 0 === n ? 10 : n,
                        o = e.filter;
                    return pe({
                        query: t,
                        members: c.Z.getDMUserIds().map((function(e) {
                            return x.default.getUser(e)
                        })).filter(M.lm),
                        limit: r,
                        filter: o
                    })
                },
                queryChannelUsers: function(e) {
                    var t = e.channelId,
                        n = e.query,
                        r = e.limit,
                        o = void 0 === r ? 10 : r,
                        i = e.request,
                        l = void 0 === i || i,
                        u = e.checkRecentlyTalkedOnEmptyQuery,
                        a = void 0 === u || u,
                        f = c.Z.getChannel(t);
                    if (null == f) return [];
                    var d, p = f.isThread() ? c.Z.getChannel(f.parent_id) : null,
                        y = null != p ? p : f;
                    if (null == y) return [];
                    if (y.isPrivate()) {
                        var v;
                        d = y.recipients.map((function(e) {
                            return {
                                userId: e,
                                nick: null !== (v = R.Z.getNickname(e)) && void 0 !== v ? v : null
                            }
                        }));
                        var g = x.default.getCurrentUser();
                        null != g && d.push({
                            userId: g.id,
                            nick: null
                        })
                    } else {
                        if (0 === n.length && a) {
                            var m = he(f.id, o);
                            if (m.length > 0) return m
                        }
                        d = A.ZP.getMembers(y.guild_id).filter(de);
                        l && k.Z.requestMembers(y.guild_id, n, o)
                    }
                    return pe({
                        query: n,
                        members: d,
                        limit: o,
                        filter: function(e) {
                            return y.isPrivate() || U.ZP.can({
                                permission: s.Plq.VIEW_CHANNEL,
                                user: e,
                                context: y
                            })
                        }
                    })
                },
                queryGuildUsers: function(e) {
                    var t = e.guildId,
                        n = e.query,
                        r = e.limit,
                        o = void 0 === r ? 10 : r,
                        i = e.request,
                        l = void 0 === i || i,
                        u = e.checkRecentlyTalkedOnEmptyQuery,
                        a = void 0 === u || u,
                        c = e.filter;
                    if (null == _.Z.getGuild(t)) return [];
                    if (0 === n.length && a) {
                        var s = he(T.Z.getChannelId(t), o);
                        if (s.length > 0) return s
                    }
                    var f = A.ZP.getMembers(t).filter(de);
                    l && n.length > 0 && k.Z.requestMembers(t, n, o);
                    return pe({
                        query: n,
                        members: f,
                        limit: o,
                        filter: c
                    })
                },
                queryUsers: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                        n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        r = arguments.length > 4 ? arguments[4] : void 0;
                    n && e.length > 0 && k.Z.requestMembers(null, e, t);
                    return pe({
                        query: e,
                        members: l()(x.default.getUsers()).values().value(),
                        limit: t,
                        filter: r
                    })
                },
                queryChannels: function(e) {
                    var t, n = e.query,
                        r = e.guildId,
                        o = e.limit,
                        i = void 0 === o ? s.rnv : o,
                        f = e.fuzzy,
                        d = void 0 === f || f,
                        p = e.filter,
                        y = void 0 === p ? te : p,
                        v = e.type,
                        g = void 0 === v ? I.sH : v,
                        m = e.allowEmptyQueries,
                        h = void 0 !== m && m,
                        b = e.requireVocalConnectAccess,
                        E = void 0 === b || b,
                        O = e.boosters,
                        S = void 0 === O ? {} : O,
                        C = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                n = e.split(" ").filter((function(e) {
                                    return "" !== e || t
                                })).map((function(e) {
                                    var t = e.toLocaleLowerCase();
                                    return {
                                        queryLower: t,
                                        exactQuery: new RegExp("^".concat(G.Z.escape(t)), "i"),
                                        containQuery: new RegExp(G.Z.escape(t), "i"),
                                        isFullMatch: !1
                                    }
                                }));
                            if (e.includes(" ")) {
                                var r = e.toLocaleLowerCase();
                                n.unshift({
                                    queryLower: r,
                                    exactQuery: new RegExp("^".concat(G.Z.escape(r).replace(" ", "( |-)")), "i"),
                                    containQuery: new RegExp(G.Z.escape(r).replace(" ", "( |-)"), "i"),
                                    isFullMatch: !0
                                })
                            }
                            return n
                        }(n, h);
                    t = null != r ? l()(I.ZP.getChannels(r)[g]).map((function(e) {
                        return e.channel
                    })).concat(w.Z.computeAllActiveJoinedThreads(r)).value() : l()(c.Z.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(w.Z.computeAllActiveJoinedThreads()).value();
                    var A, _, L, Z = {},
                        T = [],
                        j = !0,
                        D = !1,
                        M = void 0;
                    try {
                        for (var k, U = t[Symbol.iterator](); !(j = (k = U.next()).done); j = !0) {
                            var q = k.value;
                            if ((A = g, _ = q.type, L = null != r, A === _ || (L || (0, P.Km)(_)) && (A === I.sH ? (0, P.r8)(_) : A === I.Zb && (0, P.bw)(_))) && (!(0, P.Km)(q.type) || N.Z.can(E ? q.accessPermissions : s.Plq.VIEW_CHANNEL, q)) && y(q)) {
                                var F = z(C),
                                    V = q.name.toLocaleLowerCase(),
                                    H = ve(V, F, d);
                                if (0 !== H) {
                                    if (F.length > 0) {
                                        for (var Y = 0, Q = [ge(q, Z), me(q, Z)]; Y < Q.length; Y++) {
                                            var W = Q[Y];
                                            if (null != W && "" !== W) {
                                                var K = ve(W, F, !1);
                                                0 !== K && (H += .5 * K)
                                            }
                                        }
                                        H = Math.min(9, H)
                                    }
                                    0 === H || F.length > 1 || 1 === F.length && !F[0].isFullMatch || T.push({
                                        type: (0, P.bw)(q.type) ? B.h8.VOICE_CHANNEL : B.h8.TEXT_CHANNEL,
                                        record: q,
                                        score: ae(H, S[q.id]),
                                        comparator: (0, a.F6)(q, x.default, R.Z),
                                        sortable: V
                                    })
                                }
                            }
                        }
                    } catch (e) {
                        D = !0;
                        M = e
                    } finally {
                        try {
                            j || null == U.return || U.return()
                        } finally {
                            if (D) throw M
                        }
                    }
                    T.sort(u.Z);
                    null != i && T.length > i && (T.length = i);
                    return T
                },
                queryGuilds: function(e) {
                    var t = e.query,
                        n = e.limit,
                        r = void 0 === n ? 10 : n,
                        o = e.fuzzy,
                        i = void 0 === o || o,
                        a = e.filter,
                        c = void 0 === a ? te : a,
                        s = e.boosters,
                        f = void 0 === s ? {} : s,
                        d = "" === t ? "" : t.toLocaleLowerCase(),
                        p = {
                            exactQuery: new RegExp("^".concat(G.Z.escape(d)), "i"),
                            containQuery: new RegExp(G.Z.escape(d), "i"),
                            queryLower: d
                        },
                        y = [],
                        v = l()(_.Z.getGuilds()).values().value(),
                        g = !0,
                        m = !1,
                        h = void 0;
                    try {
                        for (var b, E = v[Symbol.iterator](); !(g = (b = E.next()).done); g = !0) {
                            var O = b.value;
                            if (c(O)) {
                                var w = O.name.toLocaleLowerCase(),
                                    S = fe(w, p, i);
                                S > 0 && y.push({
                                    type: B.h8.GUILD,
                                    record: O,
                                    score: ae(S, f[O.id]),
                                    comparator: O.toString(),
                                    sortable: w
                                })
                            }
                        }
                    } catch (e) {
                        m = !0;
                        h = e
                    } finally {
                        try {
                            g || null == E.return || E.return()
                        } finally {
                            if (m) throw h
                        }
                    }
                    y.sort(u.Z);
                    y.length > r && (y.length = r);
                    return y
                },
                queryGroupDMs: function(e) {
                    var t = e.query,
                        n = e.limit,
                        r = void 0 === n ? 10 : n,
                        o = e.fuzzy,
                        i = void 0 === o || o,
                        s = e.filter,
                        f = void 0 === s ? te : s,
                        d = e.boosters,
                        p = void 0 === d ? {} : d,
                        y = t.toLocaleLowerCase(),
                        v = {
                            exactQuery: new RegExp("^".concat(G.Z.escape(y)), "i"),
                            containQuery: new RegExp(G.Z.escape(y), "i"),
                            queryLower: y
                        },
                        g = l()(c.Z.getMutablePrivateChannels()).values().value(),
                        m = [],
                        h = !0,
                        b = !1,
                        E = void 0;
                    try {
                        for (var O, w = g[Symbol.iterator](); !(h = (O = w.next()).done); h = !0) {
                            var S = O.value;
                            if (S.isMultiUserDM() && f(S)) {
                                var P = (0, a.F6)(S, x.default, R.Z).toLocaleLowerCase(),
                                    C = fe(P, v, i);
                                C > 0 && m.push({
                                    type: B.h8.GROUP_DM,
                                    record: S,
                                    score: ae(C, p[S.id]),
                                    comparator: (0, a.F6)(S, x.default, R.Z),
                                    sortable: P
                                })
                            }
                        }
                    } catch (e) {
                        b = !0;
                        E = e
                    } finally {
                        try {
                            h || null == w.return || w.return()
                        } finally {
                            if (b) throw E
                        }
                    }
                    m.sort(u.Z);
                    m.length > r && (m.length = r);
                    return m
                },
                queryApplications: function(e) {
                    var t = e.query,
                        n = e.limit,
                        r = void 0 === n ? 10 : n,
                        o = e.fuzzy,
                        i = void 0 === o || o,
                        l = e.filter,
                        a = void 0 === l ? te : l,
                        c = t.toLocaleLowerCase(),
                        s = {
                            exactQuery: new RegExp("^".concat(G.Z.escape(c)), "i"),
                            containQuery: new RegExp(G.Z.escape(c), "i"),
                            queryLower: c
                        },
                        f = ue(),
                        d = [],
                        p = !0,
                        y = !1,
                        v = void 0;
                    try {
                        for (var g, m = f[Symbol.iterator](); !(p = (g = m.next()).done); p = !0) {
                            var h = g.value.application;
                            if (a(h)) {
                                var b = h.name.toLocaleLowerCase(),
                                    E = fe(b, s, i);
                                E > 0 && d.push({
                                    type: B.h8.APPLICATION,
                                    record: h,
                                    score: E,
                                    comparator: h.name,
                                    sortable: b
                                })
                            }
                        }
                    } catch (e) {
                        y = !0;
                        v = e
                    } finally {
                        try {
                            p || null == m.return || m.return()
                        } finally {
                            if (y) throw v
                        }
                    }
                    d.sort(u.Z);
                    d.length > r && (d.length = r);
                    return d
                },
                querySKUs: function(e) {
                    var t = e.query,
                        n = e.limit,
                        r = void 0 === n ? 10 : n,
                        o = e.fuzzy,
                        i = void 0 === o || o,
                        a = e.filter,
                        c = void 0 === a ? te : a,
                        f = t.toLocaleLowerCase(),
                        d = {
                            exactQuery: new RegExp("^".concat(G.Z.escape(f)), "i"),
                            containQuery: new RegExp(G.Z.escape(f), "i"),
                            queryLower: f
                        },
                        p = l()(D.Z.getSKUs()).values().value(),
                        y = [],
                        v = !0,
                        g = !1,
                        m = void 0;
                    try {
                        for (var h, b = p[Symbol.iterator](); !(v = (h = b.next()).done); v = !0) {
                            var E = h.value;
                            if (E.type === s.epS.DURABLE_PRIMARY && c(E)) {
                                var O = E.name.toLocaleLowerCase(),
                                    w = fe(O, d, i);
                                w > 0 && y.push({
                                    type: B.h8.SKU,
                                    record: E,
                                    score: w,
                                    comparator: E.name,
                                    sortable: O
                                })
                            }
                        }
                    } catch (e) {
                        g = !0;
                        m = e
                    } finally {
                        try {
                            v || null == b.return || b.return()
                        } finally {
                            if (g) throw m
                        }
                    }
                    y.sort(u.Z);
                    y.length > r && (y.length = r);
                    return y
                },
                getRecentlyTalked: he,
                queryMentionResults: function(e) {
                    var t = e.query,
                        n = e.channel,
                        r = e.canMentionEveryone,
                        i = void 0 !== r && r,
                        u = e.canMentionHere,
                        a = void 0 === u || u,
                        c = e.canMentionUsers,
                        f = void 0 === c || c,
                        d = e.canMentionRoles,
                        p = void 0 === d || d,
                        y = e.canMentionClyde,
                        v = void 0 !== y && y,
                        g = e.includeAllGuildUsers,
                        m = void 0 !== g && g,
                        h = e.includeNonMentionableRoles,
                        b = void 0 !== h && h,
                        E = e.checkRecentlyTalkedOnEmptyQuery,
                        O = void 0 === E || E,
                        w = e.limit,
                        S = void 0 === w ? s.rnv : w,
                        P = e.request,
                        C = f ? (m && null != n.guild_id ? this.queryGuildUsers({
                            guildId: n.guild_id,
                            query: t,
                            limit: S,
                            checkRecentlyTalkedOnEmptyQuery: O,
                            request: P
                        }) : this.queryChannelUsers({
                            channelId: n.id,
                            query: t,
                            limit: S,
                            checkRecentlyTalkedOnEmptyQuery: O
                        })).map((function(e) {
                            var t = e.record;
                            return {
                                user: t,
                                score: e.score,
                                comparator: e.comparator,
                                nick: A.ZP.getNick(n.guild_id, t.id),
                                status: Z.Z.getStatus(t.id)
                            }
                        })) : [],
                        I = C.length,
                        L = t.toLowerCase(),
                        N = [];
                    if (I < S && p) {
                        var R = n.getGuildId(),
                            T = _.Z.getGuild(R);
                        if (null != T) {
                            l()(T.roles).filter((function(e) {
                                var t = e.mentionable,
                                    n = e.name,
                                    r = e.id;
                                return (t || i || b) && o()(L, n.toLowerCase()) && r !== R
                            })).take(S - I).forEach((function(e) {
                                N.push(e)
                            }));
                            I += N.length
                        }
                    }
                    var j = [];
                    if (!n.isPrivate() && i && p) {
                        if (I < S && o()(L, oe().test)) {
                            j.push(oe());
                            I += 1
                        }
                        a && I < S && o()(L, ie().test) && j.push(ie())
                    }
                    v && o()(L, le().test) && j.push(le());
                    return {
                        users: C,
                        globals: j,
                        roles: N
                    }
                },
                queryGuildMentionResults: function(e) {
                    var t = e.query,
                        n = e.guildId,
                        r = e.canMentionEveryone,
                        i = void 0 !== r && r,
                        u = e.canMentionUsers,
                        a = void 0 === u || u,
                        c = e.canMentionRoles,
                        f = void 0 === c || c,
                        d = e.canMentionNonMentionableRoles,
                        p = void 0 !== d && d,
                        y = a ? this.queryGuildUsers({
                            guildId: n,
                            query: t
                        }).map((function(e) {
                            return W(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))));
                                    r.forEach((function(t) {
                                        Q(e, t, n[t])
                                    }))
                                }
                                return e
                            }({}, e), {
                                status: Z.Z.getStatus(e.record.id)
                            })
                        })) : [],
                        v = y.length,
                        g = t.toLowerCase(),
                        m = [];
                    if (v < s.rnv && f) {
                        var h = _.Z.getGuild(n);
                        if (null != h) {
                            l()(h.roles).filter((function(e) {
                                var t = e.mentionable,
                                    r = e.name,
                                    l = e.id;
                                return (t || i || p) && o()(g, r.toLowerCase()) && l !== n
                            })).take(s.rnv - v).forEach((function(e) {
                                m.push(e)
                            }));
                            v += m.length
                        }
                    }
                    var b = [];
                    if (i && f) {
                        if (v < s.rnv && o()(g, oe().test)) {
                            b.push(oe());
                            v += 1
                        }
                        v < s.rnv && o()(g, ie().test) && b.push(ie());
                        b.push(le())
                    }
                    return {
                        users: y,
                        globals: b,
                        roles: m
                    }
                },
                queryChoice: function(e) {
                    var t = e.query,
                        n = e.choices,
                        r = e.limit,
                        o = void 0 === r ? 10 : r,
                        i = e.fuzzy,
                        u = void 0 === i || i,
                        a = t.toLocaleLowerCase(),
                        c = new RegExp("^".concat(G.Z.escape(a)), "i"),
                        s = new RegExp(G.Z.escape(a), "i"),
                        f = l()(n).map((function(e) {
                            var t = fe(e.displayName.toLocaleLowerCase(), {
                                exactQuery: c,
                                containQuery: s,
                                queryLower: a
                            }, u);
                            return t > 0 ? {
                                choice: e,
                                score: t
                            } : null
                        })).filter(M.lm).sortBy((function(e) {
                            return -1 * e.score
                        }));
                    null !== o && (f = f.take(o));
                    return f.value()
                },
                queryStaticRouteChannels: function(e) {
                    var t = e.query,
                        n = e.guild,
                        r = t.toLocaleLowerCase(),
                        o = {
                            exactQuery: new RegExp("^".concat(G.Z.escape(r)), "i"),
                            containQuery: new RegExp(G.Z.escape(r), "i"),
                            queryLower: r
                        },
                        i = ((0, v.YM)(n.id) || (0, m.s)(n.id)) && !n.hasFeature(s.oNc.HUB),
                        l = n.hasFeature(s.oNc.COMMUNITY),
                        u = (0, g.t)(n) && n.hasFeature(s.oNc.COMMUNITY),
                        a = [{
                            id: V.HY.SERVER_GUIDE,
                            name: H.Z.Messages.SERVER_GUIDE
                        }, {
                            id: V.HY.CHANNEL_BROWSER,
                            name: H.Z.Messages.CHANNEL_BROWSER_TITLE
                        }, {
                            id: V.HY.CUSTOMIZE_COMMUNITY,
                            name: H.Z.Messages.CHANNELS_AND_ROLES
                        }],
                        c = [],
                        f = !0,
                        d = !1,
                        p = void 0;
                    try {
                        for (var y, h = a[Symbol.iterator](); !(f = (y = h.next()).done); f = !0) {
                            var b = y.value;
                            if (!(b.id === V.HY.SERVER_GUIDE && !i || b.id === V.HY.CHANNEL_BROWSER && !l || b.id === V.HY.CUSTOMIZE_COMMUNITY && !u)) {
                                fe(b.name.toLocaleLowerCase(), o, !1) > 0 && c.push(new P.nl({
                                    id: b.id,
                                    name: b.name,
                                    type: s.d4z.UNKNOWN,
                                    guild_id: n.id
                                }))
                            }
                        }
                    } catch (e) {
                        d = !0;
                        p = e
                    } finally {
                        try {
                            f || null == h.return || h.return()
                        } finally {
                            if (d) throw p
                        }
                    }
                    return c
                },
                queryChannelResults: function(e) {
                    var t = e.query,
                        n = e.channel,
                        r = e.type,
                        o = void 0 === r ? I.sH : r,
                        i = e.channelTypes;
                    return {
                        channels: this.queryChannels({
                            query: t,
                            guildId: n.getGuildId(),
                            limit: void 0,
                            fuzzy: void 0,
                            filter: function(e) {
                                return null == i || i.includes(e.type)
                            },
                            type: o,
                            allowEmptyQueries: !0
                        }).map((function(e) {
                            return e.record
                        }))
                    }
                },
                queryApplicationCommandChannelResults: function(e) {
                    var t = e.query,
                        n = e.channel,
                        r = e.channelTypes,
                        o = e.limit,
                        i = void 0 === o ? s.rnv : o;
                    if (null == n.guild_id) {
                        var l = [];
                        (null == r || r.includes(n.type)) && l.push(n);
                        return {
                            channels: l
                        }
                    }
                    var u = [],
                        a = !0,
                        c = !1,
                        f = void 0;
                    try {
                        for (var p, y = ce[Symbol.iterator](); !(a = (p = y.next()).done); a = !0) {
                            var v = p.value;
                            u = u.concat(this.queryChannels({
                                query: t,
                                guildId: n.guild_id,
                                limit: i,
                                fuzzy: !0,
                                filter: function(e) {
                                    return null == r || r.includes(e.type)
                                },
                                type: v,
                                allowEmptyQueries: !0,
                                requireVocalConnectAccess: !1
                            }))
                        }
                    } catch (e) {
                        c = !0;
                        f = e
                    } finally {
                        try {
                            a || null == y.return || y.return()
                        } finally {
                            if (c) throw f
                        }
                    }
                    u = u.filter((function(e) {
                        return "null" !== e.record.id
                    })).sort(d);
                    null != i && u.length > i && (u = u.slice(0, i));
                    return {
                        channels: u.map((function(e) {
                            return e.record
                        }))
                    }
                },
                queryChoiceResults: function(e) {
                    var t = e.query,
                        n = e.choices;
                    return {
                        choices: this.queryChoice({
                            query: t,
                            choices: n,
                            limit: null
                        }).map((function(e) {
                            return e.choice
                        }))
                    }
                },
                queryEmojiResults: function(e) {
                    var t = e.query,
                        n = e.channel,
                        r = e.intention,
                        o = e.canViewAndUsePackEmoji,
                        i = e.maxCount,
                        l = void 0 === i ? s.rnv : i,
                        u = e.matchComparator;
                    S.DZ.loadIfNecessary();
                    return {
                        emojis: y.Z.searchWithoutFetchingLatest({
                            channel: n,
                            query: t,
                            count: l,
                            intention: r,
                            canViewAndUsePackEmoji: o,
                            matchComparator: u
                        })
                    }
                },
                queryStickers: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = K(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, te], 2),
                        r = n[0],
                        o = n[1],
                        i = E.Z.stickerMetadata,
                        u = x.default.getCurrentUser(),
                        a = new Set,
                        c = [];
                    S.DZ.loadIfNecessary();
                    var s = !0,
                        f = !1,
                        d = void 0;
                    try {
                        for (var p, y = function() {
                                var e = p.value;
                                if ("" === e) return "continue";
                                var n = e.toLocaleLowerCase(),
                                    l = (0, q._I)(n),
                                    s = new RegExp("^".concat(G.Z.escape(l)), "i"),
                                    f = new RegExp("".concat(G.Z.escape(l)), "i");
                                i.forEach((function(e, i) {
                                    var l = 0,
                                        d = null,
                                        p = E.Z.getStickerById(i);
                                    if (null != p && o(p, (0, h.cO)(p, u, r))) {
                                        var y = !0,
                                            v = !1,
                                            g = void 0;
                                        try {
                                            for (var m, w = e[Symbol.iterator](); !(y = (m = w.next()).done); y = !0) {
                                                var S = m.value,
                                                    P = S.type,
                                                    C = S.value,
                                                    I = ye(P),
                                                    A = 0;
                                                if (t) C === n ? A = ee * I : s.test(C) ? A = 7 * I : P !== O.MO.GUILD_NAME && P !== O.MO.PACK_NAME && P !== O.MO.STICKER_NAME || !f.test(C) || (A = 5 * I);
                                                else if (C === n) {
                                                    A = ee * I;
                                                    d = C
                                                }
                                                if (A > l) {
                                                    l = A;
                                                    d = C
                                                }
                                            }
                                        } catch (e) {
                                            v = !0;
                                            g = e
                                        } finally {
                                            try {
                                                y || null == w.return || w.return()
                                            } finally {
                                                if (v) throw g
                                            }
                                        }
                                        var _ = b.Z.stickerFrecencyWithoutFetchingLatest.getScore(i);
                                        null != _ && (l *= _ / 100);
                                        if (l > 0 && null != d && !a.has(p.id)) {
                                            a.add(p.id);
                                            c.push({
                                                sticker: p,
                                                comparator: d,
                                                score: l
                                            })
                                        }
                                    }
                                }))
                            }, v = e[Symbol.iterator](); !(s = (p = v.next()).done); s = !0) y()
                    } catch (e) {
                        f = !0;
                        d = e
                    } finally {
                        try {
                            s || null == v.return || v.return()
                        } finally {
                            if (f) throw d
                        }
                    }
                    0 === (c = l()(c).sortBy((function(e) {
                        return -1 * e.score
                    })).value()).length && (c = re);
                    return c
                },
                matchSentinel: function(e, t, n) {
                    return !ne.test(t) && e === n
                },
                hasSameRoleAsUsername: function(e, t) {
                    if (!t.isPomelo()) return !1;
                    var n, r = _.Z.getGuild(e.getGuildId()),
                        o = null !== (n = null == r ? void 0 : r.roles) && void 0 !== n ? n : {},
                        i = !0,
                        l = !1,
                        u = void 0;
                    try {
                        for (var a, c = Object.values(o)[Symbol.iterator](); !(i = (a = c.next()).done); i = !0) {
                            var s = a.value.name;
                            if (t.username.startsWith(s.toLowerCase())) return !0
                        }
                    } catch (e) {
                        l = !0;
                        u = e
                    } finally {
                        try {
                            i || null == c.return || c.return()
                        } finally {
                            if (l) throw u
                        }
                    }
                    return !1
                }
            }
        },
        607556: (e, t, n) => {
            n.d(t, {
                Z: () => g
            });
            var r, o = n(496486),
                i = n.n(o),
                l = n(5387),
                u = n.n(l),
                a = n(327499),
                c = n(567403),
                s = n(473903),
                f = n(749565),
                d = n(473708),
                p = new(u())({
                    maxAge: 6e4
                });

            function y(e, t, n) {
                null != r && clearTimeout(r);
                r = setTimeout((function() {
                    var r = [],
                        o = function(e) {
                            r.push(e.id)
                        };
                    if (null == e) i().forEach(c.Z.getGuilds(), o);
                    else if (Array.isArray(e)) e.forEach((function(e) {
                        var t = c.Z.getGuild(e);
                        null != t && o(t)
                    }));
                    else {
                        var l = c.Z.getGuild(e);
                        null != l && o(l)
                    }
                    r.length > 0 && a.Z.requestMembers(r, t.toLocaleLowerCase(), n)
                }), 200)
            }

            function v(e, t) {
                var n = "".concat(null != e ? e : "", ":").concat(t),
                    r = p.get(n);
                if (null != r) return r;
                p.set(n, !0)
            }
            const g = {
                getGuildNameSuggestion: function(e) {
                    var t = s.default.getCurrentUser(),
                        n = f.oY(t);
                    return null == n || 0 === n.length ? "" : d.Z.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT.format({
                        username: (null == e ? void 0 : e.truncateUsername) ? n.slice(0, 20) : n
                    })
                },
                requestMembers: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                        r = Array.isArray(e),
                        o = [],
                        i = !1;
                    if (r) e.forEach((function(e) {
                        null == v(e, t) && o.push(e)
                    }));
                    else {
                        var l = v(e, t);
                        null == l && (i = !0)
                    }
                    o.length > 0 && r ? y(o, t, n) : i && y(e, t, n)
                }
            }
        },
        625747: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(770819),
                o = n(473708);
            const i = {
                MENTION_EVERYONE: function() {
                    return {
                        test: "everyone",
                        text: "@everyone",
                        description: o.Z.Messages.MENTION_EVERYONE_AUTOCOMPLETE_DESCRIPTION
                    }
                },
                MENTION_HERE: function() {
                    return {
                        test: "here",
                        text: "@here",
                        description: o.Z.Messages.MENTION_HERE_AUTOCOMPLETE_DESCRIPTION
                    }
                },
                MENTION_CLYDE: function() {
                    return {
                        test: "clyde",
                        text: "@Clyde",
                        description: o.Z.Messages.CLYDE_MENTION_DESCRIPTION
                    }
                },
                LAUNCHABLE_APPLICATIONS: function() {
                    return r.Z.launchableApplicationViewItems
                }
            }
        }
    }
]);