"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [93869], {
        224134: (e, t, r) => {
            r.d(t, {
                Z: () => i
            });
            var n = r(744564);
            const i = {
                startTyping: function(e) {
                    n.Z.dispatch({
                        type: "TYPING_START_LOCAL",
                        channelId: e
                    })
                },
                stopTyping: function(e) {
                    n.Z.dispatch({
                        type: "TYPING_STOP_LOCAL",
                        channelId: e
                    })
                }
            }
        },
        665144: (e, t, r) => {
            r.d(t, {
                y: () => a
            });
            var n = r(667294),
                i = r(318715),
                o = r(330481),
                l = r(167749);

            function a(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    r = (0, i.ZP)([l.Z], (function() {
                        return l.Z.getSettings(e)
                    }));
                n.useEffect((function() {
                    null != e && t && (0, o.Bn)(e)
                }), [e, t]);
                return null != e && (null != (null == r ? void 0 : r.personality) && "" !== (null == r ? void 0 : r.personality))
            }
        },
        338935: (e, t, r) => {
            r.d(t, {
                s$: () => h,
                Am: () => p,
                ZP: () => m
            });
            var n = r(785893),
                i = (r(667294), r(882723)),
                o = r(963881),
                l = r(53645),
                a = r(473708);

            function c(e, t, r, n, i, o, l) {
                try {
                    var a = e[o](l),
                        c = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(n, i)
            }

            function s(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, i) {
                        var o = e.apply(t, r);

                        function l(e) {
                            c(o, n, i, l, a, "next", e)
                        }

                        function a(e) {
                            c(o, n, i, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function u(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function d(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }
            var f = function(e, t) {
                    var r, n, i, o, l = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(o) {
                        return function(a) {
                            return function(o) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                                    (n = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            l.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            l.label++;
                                            n = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = l.ops.pop();
                                            l.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                l.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && l.label < i[1]) {
                                                l.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && l.label < i[2]) {
                                                l.label = i[2];
                                                l.ops.push(o);
                                                break
                                            }
                                            i[2] && l.ops.pop();
                                            l.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, l)
                                } catch (e) {
                                    o = [6, e];
                                    n = 0
                                } finally {
                                    r = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, a])
                        }
                    }
                },
                h = "guild-connection-roles";

            function p(e) {
                (0, i.openModalLazy)(s((function() {
                    var t, i;
                    return f(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([r.e(40532), r.e(47405), r.e(29392), r.e(39685), r.e(47007), r.e(79249), r.e(69876), r.e(6543), r.e(17586), r.e(29342), r.e(96259), r.e(23626), r.e(44299), r.e(43586), r.e(27499), r.e(79913), r.e(27764), r.e(64466), r.e(92465), r.e(45353), r.e(10675), r.e(73679), r.e(73727), r.e(87440), r.e(52555), r.e(54602), r.e(6565), r.e(61953), r.e(20419), r.e(24251), r.e(3790), r.e(84441), r.e(30027), r.e(94302), r.e(47701), r.e(69839), r.e(70535), r.e(82786), r.e(75700), r.e(67367), r.e(77579), r.e(56356), r.e(24417), r.e(39813), r.e(14606), r.e(95839), r.e(30144), r.e(2913), r.e(4230), r.e(38149), r.e(24501), r.e(25978), r.e(67783), r.e(68929), r.e(29800)]).then(r.bind(r, 738999))];
                            case 1:
                                t = o.sent(), i = t.default;
                                return [2, function(t) {
                                    return (0, n.jsx)(i, d(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = null != arguments[t] ? arguments[t] : {},
                                                n = Object.keys(r);
                                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                                            }))));
                                            n.forEach((function(t) {
                                                u(e, t, r[t])
                                            }))
                                        }
                                        return e
                                    }({}, t), {
                                        guildId: e
                                    }))
                                }]
                        }
                    }))
                })), {
                    modalKey: h,
                    contextKey: i.DEFAULT_MODAL_CONTEXT,
                    onCloseRequest: function() {
                        (0, i.closeModal)(h, i.DEFAULT_MODAL_CONTEXT)
                    }
                })
            }

            function m(e) {
                return (0, l.kQ)(e) ? (0, n.jsx)(i.MenuItem, {
                    id: "guild-connection-roles",
                    label: a.Z.Messages.CONNECTIONS_ROLES_CHANNEL_NAME,
                    icon: o.Z,
                    action: function() {
                        return p(e.id)
                    }
                }) : null
            }
        },
        330481: (e, t, r) => {
            r.d(t, {
                CX: () => p,
                j7: () => b,
                Kt: () => O,
                I5: () => x,
                g_: () => v,
                z5: () => j,
                c6: () => E,
                Bn: () => w
            });
            var n = r(281110),
                i = r(744564),
                o = r(285991),
                l = r(167749),
                a = r(2590),
                c = r(876986);

            function s(e, t, r, n, i, o, l) {
                try {
                    var a = e[o](l),
                        c = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(n, i)
            }

            function u(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, i) {
                        var o = e.apply(t, r);

                        function l(e) {
                            s(o, n, i, l, a, "next", e)
                        }

                        function a(e) {
                            s(o, n, i, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function d(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        d(e, t, r[t])
                    }))
                }
                return e
            }
            var h = function(e, t) {
                var r, n, i, o, l = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                                (n = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        n = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = l.trys,
                                                i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            l.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && l.label < i[1]) {
                                            l.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && l.label < i[2]) {
                                            l.label = i[2];
                                            l.ops.push(o);
                                            break
                                        }
                                        i[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                o = t.call(e, l)
                            } catch (e) {
                                o = [6, e];
                                n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };

            function p(e, t) {
                return m.apply(this, arguments)
            }

            function m() {
                return (m = u((function(e, t) {
                    return h(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, g(e, t)];
                            case 1:
                                r.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function g(e, t) {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = u((function(e, t) {
                    var r, o;
                    return h(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                i.Z.dispatch({
                                    type: "GUILD_SETTINGS_CLYDE_SAVE_START"
                                });
                                l.label = 1;
                            case 1:
                                l.trys.push([1, 3, , 4]);
                                return [4, n.ZP.patch({
                                    url: a.ANM.GUILD_CLYDE_SETTINGS(e),
                                    oldFormErrors: !0,
                                    body: t
                                })];
                            case 2:
                                r = l.sent();
                                i.Z.dispatch({
                                    type: "GUILD_SETTINGS_CLYDE_SAVE_SUCCESS",
                                    settings: r.body.settings
                                });
                                null != r.body.guild_member_profile && i.Z.dispatch(f({
                                    type: "USER_PROFILE_UPDATE_SUCCESS",
                                    userId: c.fL,
                                    profileEffectID: void 0
                                }, r.body.guild_member_profile));
                                null != r.body.guild_member && i.Z.dispatch({
                                    type: "GUILD_MEMBER_PROFILE_UPDATE",
                                    guildMember: r.body.guild_member,
                                    guildId: e
                                });
                                null != r.body.errors && i.Z.dispatch({
                                    type: "GUILD_SETTINGS_CLYDE_SAVE_FAIL",
                                    errors: r.body.errors
                                });
                                return [3, 4];
                            case 3:
                                o = l.sent();
                                i.Z.dispatch({
                                    type: "GUILD_SETTINGS_CLYDE_SAVE_FAIL",
                                    errors: o.body
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function b(e) {
                i.Z.dispatch({
                    type: "GUILD_SETTINGS_CLYDE_SET_PENDING_PERSONALITY",
                    personality: e
                })
            }

            function O(e) {
                i.Z.dispatch({
                    type: "GUILD_SETTINGS_CLYDE_SET_PENDING_NICK",
                    nick: null != e ? e : ""
                })
            }

            function x(e) {
                i.Z.dispatch({
                    type: "GUILD_SETTINGS_CLYDE_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function v(e) {
                i.Z.dispatch({
                    type: "GUILD_SETTINGS_CLYDE_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function j(e) {
                i.Z.dispatch({
                    type: "GUILD_SETTINGS_CLYDE_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function E() {
                i.Z.dispatch({
                    type: "GUILD_SETTINGS_CLYDE_RESET_PENDING_CHANGES"
                })
            }

            function w(e) {
                return _.apply(this, arguments)
            }

            function _() {
                _ = u((function(e) {
                    var t, r, s = arguments;
                    return h(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                if (!(s.length > 1 && void 0 !== s[1] && s[1]) && !l.Z.shouldFetchSettings(e)) return [2];
                                (0, o.In)(c.fL, {
                                    guildId: e
                                });
                                i.Z.dispatch({
                                    type: "GUILD_SETTINGS_CLYDE_FETCH_START",
                                    guildId: e
                                });
                                u.label = 1;
                            case 1:
                                u.trys.push([1, 3, , 4]);
                                return [4, n.ZP.get({
                                    url: a.ANM.GUILD_CLYDE_SETTINGS(e),
                                    oldFormErrors: !0
                                })];
                            case 2:
                                t = u.sent();
                                r = t.body;
                                i.Z.dispatch({
                                    type: "GUILD_SETTINGS_CLYDE_FETCH_SUCCESS",
                                    guildId: r.guild_id,
                                    settings: r
                                });
                                return [3, 4];
                            case 3:
                                u.sent();
                                i.Z.dispatch({
                                    type: "GUILD_SETTINGS_CLYDE_FETCH_FAIL",
                                    guildId: e
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }));
                return _.apply(this, arguments)
            }
        },
        167749: (e, t, r) => {
            r.d(t, {
                Z: () => E
            });
            var n = r(202351),
                i = r(744564);

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
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
                    var r, n = l(e);
                    if (t) {
                        var i = l(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return a(this, r)
                }
            }
            var d, f, h, p, m, g = !1,
                y = null,
                b = {},
                O = {},
                x = 36e5;

            function v() {
                d = void 0;
                f = void 0;
                h = void 0;
                p = void 0;
                m = void 0;
                y = null
            }
            var j = function(e) {
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
                }(r, e);
                var t = u(r);

                function r() {
                    o(this, r);
                    return t.apply(this, arguments)
                }
                var n = r.prototype;
                n.getSettings = function(e) {
                    if (null != e) return b[e]
                };
                n.getPendingPersonality = function() {
                    return d
                };
                n.getPendingNick = function() {
                    return f
                };
                n.getErrors = function() {
                    return y
                };
                n.hasPendingChanges = function() {
                    return void 0 !== d || void 0 !== f || void 0 !== h || void 0 !== p || void 0 !== m
                };
                n.getPendingUpdates = function() {
                    return {
                        pendingAvatar: h,
                        pendingNick: f,
                        pendingPersonality: d,
                        pendingBanner: p,
                        pendingThemeColors: m
                    }
                };
                n.isSavingSettings = function() {
                    return g
                };
                n.isFetchingSettings = function(e) {
                    var t;
                    return null === (t = O[e]) || void 0 === t ? void 0 : t.isFetching
                };
                n.shouldFetchSettings = function(e) {
                    var t, r, n = null !== (t = O[e]) && void 0 !== t ? t : {
                            isFetching: !1
                        },
                        i = Date.now() - (null !== (r = n.lastFetchTimestampMs) && void 0 !== r ? r : 0) > x;
                    return !(null == n ? void 0 : n.isFetching) && i
                };
                n.__getLocalVars = function() {
                    return {
                        isSavingSettings: g,
                        errors: y,
                        pendingPersonality: d,
                        pendingNick: f,
                        pendingAvatar: h,
                        pendingBanner: p,
                        pendingThemeColors: m,
                        settingsByGuild: b,
                        settingsFetchStatus: O,
                        CACHE_TIME_MS: x
                    }
                };
                return r
            }(n.ZP.Store);
            j.displayName = "GuildSettingsClydeStore";
            const E = new j(i.Z, {
                GUILD_SETTINGS_CLYDE_FETCH_START: function(e) {
                    var t = e.guildId,
                        r = O[t];
                    O[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
                    }
                },
                GUILD_SETTINGS_CLYDE_FETCH_SUCCESS: function(e) {
                    var t = e.guildId,
                        r = e.settings;
                    O[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    };
                    b[t] = r
                },
                GUILD_SETTINGS_CLYDE_FETCH_FAIL: function(e) {
                    var t = e.guildId,
                        r = O[t];
                    O[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
                    }
                },
                GUILD_SETTINGS_CLYDE_SET_PENDING_PERSONALITY: function(e) {
                    var t = e.personality;
                    d = t
                },
                GUILD_SETTINGS_CLYDE_SET_PENDING_NICK: function(e) {
                    var t = e.nick;
                    f = t
                },
                GUILD_SETTINGS_CLYDE_SET_PENDING_AVATAR: function(e) {
                    var t = e.avatar;
                    h = t
                },
                GUILD_SETTINGS_CLYDE_SET_PENDING_BANNER: function(e) {
                    var t = e.banner;
                    p = t
                },
                GUILD_SETTINGS_CLYDE_SET_PENDING_THEME_COLORS: function(e) {
                    var t = e.themeColors;
                    m = t
                },
                GUILD_SETTINGS_CLYDE_SAVE_START: function() {
                    y = null;
                    g = !0
                },
                GUILD_SETTINGS_CLYDE_SAVE_SUCCESS: function(e) {
                    var t = e.settings;
                    g = !1;
                    b[t.guild_id] = t;
                    v()
                },
                GUILD_SETTINGS_CLYDE_SAVE_FAIL: function(e) {
                    g = !1;
                    y = e.errors
                },
                GUILD_SETTINGS_CLYDE_RESET_PENDING_CHANGES: v
            })
        },
        198265: (e, t, r) => {
            r.d(t, {
                g: () => n,
                t: () => i
            });
            var n, i;
            ! function(e) {
                e[e.NORMAL = 0] = "NORMAL";
                e[e.LOADING = 1] = "LOADING";
                e[e.DISABLED = 2] = "DISABLED"
            }(n || (n = {}));
            ! function(e) {
                e[e.STRING = 1] = "STRING";
                e[e.USER = 2] = "USER";
                e[e.ROLE = 3] = "ROLE";
                e[e.CHANNEL = 4] = "CHANNEL";
                e[e.GUILD = 5] = "GUILD"
            }(i || (i = {}))
        },
        303907: (e, t, r) => {
            r.d(t, {
                h: () => m,
                J: () => y
            });
            var n = r(496486),
                i = r.n(n),
                o = r(73904),
                l = r(457896),
                a = r(775173),
                c = r(198265),
                s = r(622219),
                u = r(919622),
                d = r(473708),
                f = ["934240649153220678", "936929561302675456", "762275850782900254", "1022952195194359889"],
                h = /MJ::Inpaint::\d(::[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12})?(::SOLO)?/,
                p = function(e, t) {
                    return {
                        id: e.id,
                        name: e.name,
                        animated: e.animated,
                        src: t && null != e.id ? a.ZP.getEmojiURL({
                            id: e.id,
                            animated: e.animated || !1,
                            size: 48
                        }) : void 0
                    }
                },
                m = function(e, t, r) {
                    var n = (null == e ? void 0 : e.data.interactionType) === o.B8.MESSAGE_COMPONENT && (null == e ? void 0 : e.state) === l.F.FAILED ? e.data.indices : null;
                    if (null != n && i().isEqual(n.slice(0, n.length - 1), r.indices)) {
                        var a;
                        return null !== (a = null == t ? void 0 : t.interactionError) && void 0 !== a ? a : function(e) {
                            return 429 === (null == e ? void 0 : e.errorCode) ? d.Z.Messages.INTERACTION_RATE_LIMITED : d.Z.Messages.APPLICATION_COMMAND_FAILED
                        }(e)
                    }
                },
                g = function(e) {
                    switch (e) {
                        case o.re.ACTION_ROW:
                        case o.re.BUTTON:
                        case o.re.STRING_SELECT:
                        case o.re.INPUT_TEXT:
                        case o.re.USER_SELECT:
                        case o.re.ROLE_SELECT:
                        case o.re.MENTIONABLE_SELECT:
                        case o.re.CHANNEL_SELECT:
                            return !0
                    }
                };

            function y(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
                    l = n.includeEmojiSrc;
                return e.map((function(e, a) {
                    if (!g(e.type)) return null;
                    var m = i.concat(a);
                    switch (e.type) {
                        case o.re.ACTION_ROW:
                            var b = null != e.components ? y(e.components, t, r, n, m) : void 0;
                            return {
                                type: o.re.ACTION_ROW, indices: m, components: b
                            };
                        case o.re.BUTTON:
                            if (f.includes(t) && null != e.custom_id && h.test(e.custom_id) && !(0, u.Z)(r)) return null;
                            var O = null != e.emoji ? p(e.emoji, l) : void 0;
                            return {
                                type: o.re.BUTTON, customId: e.custom_id, style: e.style, disabled: e.disabled, url: e.url, label: e.label, emoji: O, indices: m, applicationId: t
                            };
                        case o.re.STRING_SELECT:
                            var x;
                            return {
                                type: o.re.STRING_SELECT, customId: e.custom_id, disabled: e.disabled, options: e.options.map((function(e) {
                                    return {
                                        type: c.t.STRING,
                                        label: e.label,
                                        value: e.value,
                                        default: e.default,
                                        description: e.description,
                                        emoji: null != e.emoji ? p(e.emoji, l) : void 0
                                    }
                                })), placeholder: null !== (x = e.placeholder) && void 0 !== x ? x : d.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: e.min_values, maxValues: e.max_values, indices: m, applicationId: t
                            };
                        case o.re.INPUT_TEXT:
                            return {
                                type: e.type, style: e.style, customId: e.custom_id, label: e.label, value: e.value, placeholder: e.placeholder, disabled: e.disabled, required: e.required, minLength: e.min_length, maxLength: e.max_length, indices: m
                            };
                        case o.re.USER_SELECT:
                            var v;
                            return {
                                type: o.re.USER_SELECT, customId: e.custom_id, disabled: e.disabled, placeholder: null !== (v = e.placeholder) && void 0 !== v ? v : d.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: e.min_values, maxValues: e.max_values, defaultValues: e.default_values, indices: m, applicationId: t, selectedOptions: (0, s.tx)(e.default_values, r)
                            };
                        case o.re.ROLE_SELECT:
                            var j;
                            return {
                                type: o.re.ROLE_SELECT, customId: e.custom_id, disabled: e.disabled,
                                    placeholder: null !== (j = e.placeholder) && void 0 !== j ? j : d.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: e.min_values, maxValues: e.max_values, defaultValues: e.default_values, indices: m, applicationId: t, selectedOptions: (0, s.tx)(e.default_values, r)
                            };
                        case o.re.MENTIONABLE_SELECT:
                            var E;
                            return {
                                type: o.re.MENTIONABLE_SELECT, customId: e.custom_id, disabled: e.disabled, placeholder: null !== (E = e.placeholder) && void 0 !== E ? E : d.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: e.min_values, maxValues: e.max_values, defaultValues: e.default_values, indices: m, applicationId: t, selectedOptions: (0, s.tx)(e.default_values, r)
                            };
                        case o.re.CHANNEL_SELECT:
                            var w, _;
                            return {
                                type: o.re.CHANNEL_SELECT, customId: e.custom_id, disabled: e.disabled, placeholder: null !== (w = e.placeholder) && void 0 !== w ? w : d.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: e.min_values, maxValues: e.max_values, indices: m, channelTypes: e.channel_types, defaultValues: e.default_values, applicationId: t, selectedOptions: (0,
                                    s.tx)(e.default_values, r, null !== (_ = e.channel_types) && void 0 !== _ ? _ : [])
                            };
                        default:
                            return null
                    }
                })).filter((function(e) {
                    return null != e
                }))
            }
        },
        622219: (e, t, r) => {
            r.d(t, {
                HI: () => p,
                _H: () => m,
                af: () => g,
                tx: () => y
            });
            var n = r(954358),
                i = r(73904),
                o = r(61209),
                l = r(21372),
                a = r(567403),
                c = r(473903),
                s = r(504275),
                u = r(773148),
                d = r(198265);

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function h(e) {
                return function(e) {
                    if (Array.isArray(e)) return f(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return f(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return f(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var p = 1e3;

            function m(e, t, r) {
                var n = o.Z.getChannel(r);
                if (null == n) return [];
                var l = e === i.re.USER_SELECT || e === i.re.MENTIONABLE_SELECT,
                    a = e === i.re.ROLE_SELECT || e === i.re.MENTIONABLE_SELECT,
                    c = s.ZP.queryMentionResults({
                        query: t,
                        channel: n,
                        canMentionEveryone: !1,
                        canMentionHere: !1,
                        canMentionUsers: l,
                        canMentionRoles: a,
                        includeAllGuildUsers: !0,
                        includeNonMentionableRoles: !0,
                        checkRecentlyTalkedOnEmptyQuery: !1,
                        limit: 15
                    }),
                    f = c.users,
                    p = c.roles,
                    m = f.map((function(e) {
                        var t, i = u.ZP.getNickname(n.getGuildId(), r, e.user);
                        return {
                            type: d.t.USER,
                            value: e.user.id,
                            label: null !== (t = null != i ? i : e.user.globalName) && void 0 !== t ? t : e.user.username
                        }
                    })),
                    g = p.map((function(e) {
                        return {
                            type: d.t.ROLE,
                            value: e.id,
                            label: e.name
                        }
                    }));
                return h(m).concat(h(g))
            }

            function g(e, t, r) {
                var n = o.Z.getChannel(t);
                return null == n ? [] : s.ZP.queryApplicationCommandChannelResults({
                    query: e,
                    channel: n,
                    channelTypes: r,
                    limit: 15
                }).channels.map((function(e) {
                    return {
                        type: d.t.CHANNEL,
                        value: e.id,
                        label: e.name
                    }
                }))
            }

            function y(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                if (null != e) {
                    var i = a.Z.getGuild(t);
                    return e.map((function(e) {
                        switch (e.type) {
                            case n.$.USER:
                                var t = c.default.getUser(e.id);
                                if (null == t) return null;
                                var a, s = null != i ? l.ZP.getNick(i.id, t.id) : void 0;
                                return {
                                    type: d.t.USER, value: t.id, label: null !== (a = null != s ? s : t.globalName) && void 0 !== a ? a : t.username
                                };
                            case n.$.ROLE:
                                if (null == i) return null;
                                var u = i.getRole(e.id);
                                return null == u ? null : {
                                    type: d.t.ROLE,
                                    value: u.id,
                                    label: u.name
                                };
                            case n.$.CHANNEL:
                                if (null == i) return null;
                                var f = o.Z.getChannel(e.id);
                                return null == f || f.guild_id !== i.id || r.length > 0 && !r.includes(f.type) ? null : {
                                    type: d.t.CHANNEL,
                                    value: f.id,
                                    label: f.name
                                }
                        }
                    })).filter((function(e) {
                        return null !== e
                    }))
                }
            }
        },
        283285: (e, t, r) => {
            r.d(t, {
                Z: () => c
            });
            var n = r(667294),
                i = r(804808),
                o = r(785893),
                l = r(613749);
            var a = r(2590);

            function c(e, t) {
                var r = t.hideSimpleEmbedContent,
                    c = t.formatInline,
                    s = void 0 !== c && c,
                    u = t.noStyleAndInteraction,
                    d = void 0 !== u && u,
                    f = t.isInteracting,
                    h = void 0 !== f && f,
                    p = t.allowHeading,
                    m = void 0 !== p && p,
                    g = t.allowList,
                    y = void 0 !== g && g,
                    b = t.allowLinks,
                    O = void 0 !== b && b,
                    x = t.previewLinkTarget,
                    v = void 0 !== x && x;
                return n.useMemo((function() {
                    return null != e.customRenderedContent ? e.customRenderedContent : e.isCommandType() && 0 === e.content.length || e.hasFlag(a.iLy.LOADING) ? function(e) {
                        return {
                            content: (0, o.jsx)(l.ZP, {
                                message: e
                            }),
                            hasSpoilerEmbeds: !1
                        }
                    }(e) : (0, i.ZP)(e, {
                        hideSimpleEmbedContent: r,
                        formatInline: s,
                        noStyleAndInteraction: d,
                        isInteracting: h,
                        allowHeading: m,
                        allowList: y,
                        allowLinks: O,
                        previewLinkTarget: v
                    })
                }), [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, r, s, d, h, m, y, O, v])
            }
        },
        827991: (e, t, r) => {
            r.d(t, {
                q: () => g,
                Z: () => y
            });
            var n = r(785893),
                i = (r(667294), r(202351)),
                o = r(882723),
                l = r(224134),
                a = r(61209),
                c = r(682776),
                s = r(715107),
                u = r(930948),
                d = r(749565),
                f = r(2590),
                h = r(473708);

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function m(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o = [],
                            l = !0,
                            a = !1;
                        try {
                            for (r = r.call(e); !(l = (n = r.next()).done); l = !0) {
                                o.push(n.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                l || null == r.return || r.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return p(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(e, t) {
                var r = e.id,
                    n = "@".concat(d.ZP.getUserTag(e, {
                        decoration: "never"
                    })),
                    i = "<@".concat(r, ">");
                u.S.dispatchToLastSubscribed(f.CkL.INSERT_TEXT, {
                    plainText: n,
                    rawText: i
                });
                null != t && l.Z.startTyping(t)
            }

            function y(e, t, r) {
                var l = m((0, i.Wu)([s.Z, a.Z, c.Z], (function() {
                        var e = s.Z.getChannelId(t),
                            r = a.Z.getChannel(e);
                        return [e, null != r && (r.isMultiUserDM() || c.Z.can(f.Plq.SEND_MESSAGES, r))]
                    }), [t]), 2),
                    u = l[0],
                    d = l[1],
                    p = r === f.IlC.POPOUT;
                return !d || p ? null : (0, n.jsx)(o.MenuItem, {
                    id: "mention",
                    label: h.Z.Messages.MENTION,
                    action: function() {
                        g(e, u)
                    }
                })
            }
        },
        357566: (e, t, r) => {
            r.d(t, {
                Z: () => c
            });
            var n = r(785893),
                i = (r(667294), r(633878));

            function o(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function a(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }

            function c(e) {
                var t = e.color,
                    r = void 0 === t ? "currentColor" : t,
                    c = e.height,
                    s = void 0 === c ? 24 : c,
                    u = e.width,
                    d = void 0 === u ? 24 : u,
                    f = a(e, ["color", "height", "width"]);
                return (0, n.jsxs)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            o(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(f)), {
                    width: d,
                    height: s,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsx)("path", {
                        d: "M12.83 14.24L9.29006 10.71C9.19737 10.6165 9.124 10.5057 9.07424 10.3839C9.02447 10.2621 8.99926 10.1316 9.00002 10V4H11V9.58997L14.24 12.83L12.83 14.24Z",
                        fill: r
                    }), (0, n.jsx)("path", {
                        d: "M13.3101 2L18 6.69V13.3101L13.3101 18H6.68994L2 13.3101V6.69L6.68994 2H13.3101V2ZM13.73 0H6.27002C6.00525 0.00368349 5.75169 0.107244 5.56006 0.289978L0.290039 5.56C0.107305 5.75163 0.00368349 6.00525 0 6.27002V13.73C0.00368349 13.9947 0.107305 14.2483 0.290039 14.4399L5.56006 19.71C5.75169 19.8927 6.00525 19.9963 6.27002 20H13.73C13.9947 19.9963 14.2483 19.8927 14.4399 19.71L19.71 14.4399C19.8927 14.2483 19.9963 13.9947 20 13.73V6.27002C19.9963 6.00525 19.8927 5.75163 19.71 5.56L14.4399 0.289978C14.2483 0.107244 13.9947 0.00368349 13.73 0V0Z",
                        fill: r
                    })]
                }))
            }
        },
        613749: (e, t, r) => {
            r.d(t, {
                c4: () => x,
                st: () => v,
                ZP: () => E
            });
            var n = r(785893),
                i = r(667294),
                o = r(294184),
                l = r.n(o),
                a = r(283151),
                c = r(202351),
                s = r(882723),
                u = r(303907),
                d = r(873934),
                f = r(166076),
                h = r(265367),
                p = r(98265),
                m = r(2590),
                g = r(473708),
                y = r(639867),
                b = r.n(y);

            function O(e) {
                return {
                    text: e,
                    icon: (0, n.jsx)(s.Dots, {
                        className: b().icon,
                        dotRadius: 3.5,
                        themed: !0
                    })
                }
            }

            function x(e) {
                return {
                    text: null != e ? e : g.Z.Messages.APPLICATION_COMMAND_FAILED,
                    color: p.Z.Colors.ERROR,
                    icon: (0, n.jsx)(h.Z, {
                        width: 16,
                        height: 16,
                        className: l()(b().icon, b().errorIcon)
                    })
                }
            }

            function v(e) {
                var t = e.className,
                    r = e.icon,
                    i = e.text,
                    o = e.color;
                return (0, n.jsxs)("div", {
                    className: l()(b().wrapper, t),
                    children: [r, (0, n.jsx)(p.Z, {
                        size: p.Z.Sizes.SIZE_14,
                        color: o,
                        children: i
                    })]
                })
            }

            function j(e) {
                var t = e.message,
                    r = e.className,
                    o = e.component,
                    l = (0, a.Z)(),
                    s = (0, c.e7)([d.Z], (function() {
                        return d.Z.getInteraction(t)
                    }), [t]);
                i.useEffect((function() {
                    var e = null;
                    if (t.hasFlag(m.iLy.LOADING) && null != s) {
                        var r = (0, f.ow)(t.id) - Date.now();
                        r > 0 && (e = setTimeout((function() {
                            return l()
                        }), 1e3 + r))
                    }
                    return function() {
                        clearTimeout(e)
                    }
                }), [l, s, t]);
                var h = null;
                if (null == o) h = function(e, t) {
                    switch ((0, f.t$)(t, e)) {
                        case f.rQ.SENDING:
                            return O(g.Z.Messages.APPLICATION_COMMAND_SENDING);
                        case f.rQ.CREATED:
                            return O(g.Z.Messages.APPLICATION_COMMAND_WAITING.format({
                                applicationName: t.author.username
                            }));
                        case f.rQ.TIMED_OUT:
                            return x(g.Z.Messages.APPLICATION_COMMAND_TIMED_OUT);
                        case f.rQ.FAILED:
                            return x(t.interactionError)
                    }
                }(s, t);
                else {
                    var p = (0, u.h)(s, t, o);
                    null != p && (h = x(p))
                }
                if (null == h) return null;
                var y = h.text,
                    b = h.icon,
                    j = h.color;
                return (0, n.jsx)(v, {
                    icon: b,
                    text: y,
                    className: r,
                    color: j
                })
            }
            const E = i.memo(j)
        },
        508754: (e, t, r) => {
            r.d(t, {
                Z: () => h
            });
            var n = r(785893),
                i = (r(667294), r(294184)),
                o = r.n(i),
                l = r(882723),
                a = r(468482),
                c = r.n(a);

            function s(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        s(e, t, r[t])
                    }))
                }
                return e
            }

            function d(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function f(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }
            const h = function(e) {
                var t, r = e.className,
                    i = e.compact,
                    a = void 0 !== i && i,
                    h = e.contentOnly,
                    p = void 0 !== h && h,
                    m = e.zalgo,
                    g = void 0 === m || m,
                    y = e.disableInteraction,
                    b = void 0 !== y && y,
                    O = e.childrenHighlight,
                    x = e.childrenRepliedMessage,
                    v = e.childrenExecutedCommand,
                    j = e.childrenHeader,
                    E = e.childrenSystemMessage,
                    w = e.childrenButtons,
                    _ = e.childrenMessageContent,
                    S = e.childrenAccessories,
                    T = e.messageRef,
                    P = e.focusProps,
                    I = void 0 === P ? {
                        offset: {
                            left: 4,
                            right: 4
                        }
                    } : P,
                    N = e.hasThread,
                    C = e.isSystemMessage,
                    L = e.hasReply,
                    D = f(e, ["className", "compact", "contentOnly", "zalgo", "disableInteraction", "childrenHighlight", "childrenRepliedMessage", "childrenExecutedCommand", "childrenHeader", "childrenSystemMessage", "childrenButtons", "childrenMessageContent", "childrenAccessories", "messageRef", "focusProps", "hasThread", "isSystemMessage", "hasReply"]),
                    A = (0, n.jsx)(l.FocusRing, d(u({}, I), {
                        children: (0, n.jsxs)("div", d(u({
                            className: o()(r, (t = {}, s(t, c().wrapper, !0), s(t, c().contentOnly, p), s(t, c().compact, a), s(t, c().cozy, !a), s(t, c().zalgo, g), s(t, c().hasThread, N),
                                s(t, c().isSystemMessage, C), s(t, c().hasReply, L), t)),
                            ref: T
                        }, D), {
                            role: "article",
                            children: [!a && O, x, v, (0, n.jsxs)("div", {
                                className: c().contents,
                                children: [E, j, null == E && _]
                            }), S, null != w ? (0, n.jsx)("div", {
                                className: c().buttonContainer,
                                children: w
                            }) : null]
                        }))
                    }));
                return b ? (0, n.jsx)(l.FocusBlock, {
                    children: A
                }) : A
            }
        },
        423337: (e, t, r) => {
            r.d(t, {
                nD: () => It,
                ZP: () => Nt,
                F2: () => Pt,
                xP: () => Tt
            });
            var n = r(785893),
                i = r(667294),
                o = r(294184),
                l = r.n(o),
                a = r(289283),
                c = r(202351),
                s = r(882723),
                u = r(995141),
                d = r(472034),
                f = r(665144),
                h = r(473708),
                p = r(784666),
                m = r.n(p);

            function g(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function y(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function b(e) {
                var t = e.guild;
                return (0, f.y)(t.id) ? (0, n.jsx)(s.Tooltip, {
                    text: h.Z.Messages.CLYDE_PERSONALITY_BADGE_TOOLTIP,
                    tooltipClassName: m().tooltip,
                    children: function(e) {
                        return (0, n.jsx)("div", y(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))));
                                n.forEach((function(t) {
                                    g(e, t, r[t])
                                }))
                            }
                            return e
                        }({
                            className: m().personalityBadge
                        }, e), {
                            children: (0, n.jsx)(d.Z, {})
                        }))
                    }
                }) : null
            }
            var O = r(441143),
                x = r.n(O),
                v = r(496486),
                j = r.n(v),
                E = r(795308),
                w = r(575945),
                _ = r(327499),
                S = r(385028),
                T = r(74535),
                P = r(265688),
                I = r(396043),
                N = r(924417),
                C = r(722406),
                L = r(21372),
                D = r(609853),
                A = r(621329),
                M = r(652591),
                R = r(53645),
                Z = r(744564);

            function G(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function U(e) {
                U = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return U(e)
            }

            function k(e, t) {
                return !t || "object" !== H(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function B(e, t) {
                B = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return B(e, t)
            }
            var H = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function F(e) {
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
                    var r, n = U(e);
                    if (t) {
                        var i = U(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return k(this, r)
                }
            }
            var V = new Map,
                Y = function(e) {
                    var t = e.roleId,
                        r = e.roleConnectionEligibility;
                    V.set(t, r)
                },
                z = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && B(e, t)
                    }(r, e);
                    var t = F(r);

                    function r() {
                        G(this, r);
                        return t.apply(this, arguments)
                    }
                    var n = r.prototype;
                    n.getGuildRoleConnectionEligibility = function(e) {
                        return null != e ? V.get(e) : void 0
                    };
                    n.__getLocalVars = function() {
                        return {
                            roleConnectionEligibilities: V,
                            handleFetchSuccess: Y
                        }
                    };
                    return r
                }(c.ZP.Store);
            z.displayName = "GuildRoleConnectionEligibilityStore";
            const q = new z(Z.Z, {
                GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: Y
            });
            var W = r(979422),
                X = r(566500),
                K = r(491984),
                $ = r(338935),
                J = r(678005),
                Q = r(2590),
                ee = r(960412),
                te = r(802449),
                re = r.n(te);

            function ne(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function ie(e, t, r, n, i, o, l) {
                try {
                    var a = e[o](l),
                        c = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(n, i)
            }

            function oe(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, i) {
                        var o = e.apply(t, r);

                        function l(e) {
                            ie(o, n, i, l, a, "next", e)
                        }

                        function a(e) {
                            ie(o, n, i, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function le(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function ae(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        le(e, t, r[t])
                    }))
                }
                return e
            }

            function ce(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function se(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o = [],
                            l = !0,
                            a = !1;
                        try {
                            for (r = r.call(e); !(l = (n = r.next()).done); l = !0) {
                                o.push(n.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                l || null == r.return || r.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ne(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ne(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ue = function(e, t) {
                var r, n, i, o, l = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                                (n = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        n = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            l.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && l.label < i[1]) {
                                            l.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && l.label < i[2]) {
                                            l.label = i[2];
                                            l.ops.push(o);
                                            break
                                        }
                                        i[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                o = t.call(e, l)
                            } catch (e) {
                                o = [6, e];
                                n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };

            function de(e) {
                var t, r = e.connectionType,
                    i = e.connectionMetadataField,
                    o = e.operator,
                    l = e.value,
                    a = e.description;
                if (null != a) switch (o) {
                    case J.iO.LESS_THAN:
                        t = h.Z.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                            description: a,
                            count: Math.max(0, Number(l) - 1)
                        });
                        break;
                    case J.iO.GREATER_THAN:
                        t = h.Z.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                            description: a,
                            count: Math.max(0, Number(l) + 1)
                        });
                        break;
                    default:
                        t = a
                } else t = (0, R.n_)({
                    connectionType: r,
                    connectionMetadataField: i,
                    operator: o,
                    value: l
                });
                return null == t ? null : (0, n.jsxs)("div", {
                    className: re().popoutCheck,
                    children: [(0, n.jsx)(A.Z, {
                        className: re().popoutCheckIcon
                    }), (0, n.jsx)(s.Text, {
                        variant: "text-xs/medium",
                        color: "header-primary",
                        children: t
                    })]
                })
            }

            function fe(e) {
                var t = e.eligibilityStates,
                    r = (0, T.ZP)(),
                    i = (0,
                        s.useToken)(E.Z.unsafe_rawColors.GREEN_330).hex(),
                    o = j().groupBy(t, (function(e) {
                        return "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : "")
                    }));
                return (0, n.jsx)(n.Fragment, {
                    children: Object.keys(o).map((function(e) {
                        var t, l, a, c = o[e],
                            u = c.filter((function(e) {
                                return null != e.operator
                            })),
                            d = c.find((function(e) {
                                return null != e.application
                            })),
                            f = P.Z.get(e),
                            h = null == d ? void 0 : d.application,
                            p = null != (null == h ? void 0 : h.bot) ? new C.Z(h.bot) : null;
                        R.SJ.includes(null !== (t = null == h ? void 0 : h.id) && void 0 !== t ? t : "") ? l = (0, n.jsx)(K.Z, {
                            className: re().botTag,
                            color: i,
                            size: 16
                        }) : null != p && (l = (0, n.jsx)(D.Z, {
                            className: re().botTag,
                            verified: p.isVerifiedBot()
                        }));
                        return (0, n.jsxs)("div", {
                            className: re().popoutChecksGroup,
                            children: [(0, n.jsxs)("div", {
                                className: re().popoutCheckGroupName,
                                children: [null != f ? (0, n.jsx)("img", {
                                    src: (0, w.wj)(r) ? f.icon.darkSVG : f.icon.lightSVG,
                                    alt: "",
                                    className: re().popoutCheckGroupPlatformIcon
                                }) : null, null != p ? (0, n.jsx)(S.Z, {
                                    user: p,
                                    size: s.AvatarSizes.SIZE_20,
                                    className: re().popoutCheckGroupPlatformIcon
                                }) : null, (0, n.jsx)(s.Text, {
                                    variant: "text-sm/medium",
                                    color: "interactive-active",
                                    children: null !== (a = null == f ? void 0 : f.name) && void 0 !== a ? a : null == h ? void 0 : h.name
                                }), l]
                            }), u.map((function(e) {
                                var t = e.connection_type,
                                    r = e.connection_metadata_field,
                                    i = e.operator,
                                    o = e.value,
                                    l = e.description;
                                x()(null != r, "connectionMetadataField is null");
                                x()(null != i, "operator is null");
                                x()(null != o, "value is null");
                                return (0, n.jsx)(de, {
                                    connectionType: t,
                                    connectionMetadataField: r,
                                    operator: i,
                                    value: o,
                                    description: l
                                }, "".concat(t, ":").concat(r, ":").concat(i, ":").concat(o))
                            }))]
                        }, e)
                    }))
                })
            }

            function he(e) {
                var t, r = e.onGetRolesClicked,
                    o = e.onOpenProfile,
                    l = e.eligibilityStates,
                    a = e.userId,
                    u = e.roleId,
                    d = e.channelId,
                    f = e.guildId;
                i.useEffect((function() {
                    M.default.track(Q.rMx.PASSPORT_ROLE_POPOUT_VIEWED, ae({
                        other_user_id: a,
                        role_id: u
                    }, (0, I.JS)(d), (0, I.hH)(f)))
                }), [a, u, d, f]);
                var p, m = (0, c.e7)([L.ZP], (function() {
                    var e;
                    return null !== (t = null === (e = L.ZP.getSelfMember(f)) || void 0 === e ? void 0 : e.roles.includes(u)) && void 0 !== t && t
                }), [f, u]);
                p = 1 === l.length && 1 === l[0].length ? h.Z.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_ONE : 1 === l.length ? h.Z.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_ALL.format() : h.Z.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_OR.format();
                return (0, n.jsxs)("div", {
                    className: re().popout,
                    children: [(0, n.jsx)("div", {
                        className: re().popoutHeaderContainer,
                        children: (0, n.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "text-normal",
                            className: re().popoutHeaderText,
                            children: p
                        })
                    }), (0, n.jsx)("div", {
                        className: re().popoutChecks,
                        children: (0, n.jsx)(fe, {
                            eligibilityStates: l.flat()
                        })
                    }), (0, n.jsxs)("div", {
                        className: re().buttonContainer,
                        children: [m ? null : (0, n.jsx)(s.Button, {
                            className: re().getRolesButton,
                            onClick: r,
                            children: h.Z.Messages.CONNECTIONS_ROLE_POPOUT_GET_ROLES
                        }), (0, n.jsx)(s.Button, {
                            className: re().viewConnectionsButton,
                            color: s.Button.Colors.PRIMARY,
                            onClick: o,
                            children: h.Z.Messages.CONNECTIONS_ROLE_POPOUT_VIEW_CONNECTIONS
                        })]
                    })]
                })
            }

            function pe(e) {
                var t = e.userId,
                    r = e.guild,
                    o = e.channel,
                    l = (0, W.Z)(r, t, o.id, !0),
                    a = (0, c.e7)([q], (function() {
                        return q.getGuildRoleConnectionEligibility(null == l ? void 0 : l.id)
                    })),
                    u = se(i.useState(null == a), 2),
                    d = u[0],
                    f = u[1];
                if (null == l) return null;

                function p() {
                    return (p = oe((function() {
                        return ue(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    x()(null != l, "visibleConnectionsRole is null");
                                    return d && null == a ? [4, _.Z.fetchGuildRoleConnectionsEligibility(r.id, l.id)] : [2];
                                case 1:
                                    e.sent();
                                    f(!1);
                                    return [2]
                            }
                        }))
                    }))).apply(this, arguments)
                }
                return (0, n.jsx)(s.LazyPopout, {
                    onRequestOpen: function() {
                        return p.apply(this, arguments)
                    },
                    renderPopout: function() {
                        return Promise.resolve((function(e) {
                            var i = e.closePopout;
                            if (null == a) return (0, n.jsx)(n.Fragment, {});
                            x()(null != l, "visibleConnectionsRole is null");
                            return (0, n.jsx)(he, {
                                eligibilityStates: a,
                                userId: t,
                                roleId: l.id,
                                channelId: o.id,
                                guildId: r.id,
                                onGetRolesClicked: function() {
                                    (0, $.Am)(r.id)
                                },
                                onOpenProfile: function() {
                                    (0, N.m)({
                                        userId: t,
                                        guildId: r.id,
                                        channelId: o.id,
                                        section: ee.oh.USER_INFO_CONNECTIONS,
                                        analyticsLocation: {
                                            section: Q.jXE.CHANNEL
                                        }
                                    });
                                    i()
                                }
                            })
                        }))
                    },
                    align: "top",
                    nudgeAlignIntoViewport: !0,
                    children: function(e) {
                        return (0, n.jsx)(s.Tooltip, {
                            text: h.Z.Messages.CONNECTIONS_ROLE_POPOUT_CLICK_TO_VIEW,
                            children: function(t) {
                                return (0, n.jsxs)("div", ce(ae({
                                    className: re().badge
                                }, t, e), {
                                    children: [(0, n.jsx)(X.Z, {
                                        className: re().badgeVerifiedIcon,
                                        size: 16,
                                        color: l.colorString
                                    }), (0, n.jsx)(s.Text, {
                                        variant: "text-xs/bold",
                                        color: "header-primary",
                                        className: re().roleName,
                                        children: l.name
                                    })]
                                }))
                            }
                        })
                    }
                })
            }
            var me = r(872017),
                ge = r(633878);

            function ye(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function be(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function Oe(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }

            function xe(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    l = e.color,
                    a = void 0 === l ? "currentColor" : l,
                    c = Oe(e, ["width", "height", "color"]);
                return (0, n.jsxs)("svg", be(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            ye(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, ge.Z)(c)), {
                    width: r,
                    height: o,
                    viewBox: "0 0 64 64",
                    fill: "none",
                    children: [(0, n.jsx)("rect", {
                        width: "8",
                        height: "8",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "56",
                        y: "56",
                        width: "8",
                        height: "8",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "28",
                        y: "21.6453",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "30.6667",
                        y: "21.6453",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "28",
                        y: "18.9785",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "25.3335",
                        y: "18.9785",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "30.6667",
                        y: "18.9785",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "28",
                        y: "16.3119",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "25.3335",
                        y: "16.3119",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "22.6667",
                        y: "16.3119",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "30.6667",
                        y: "16.3119",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "28",
                        y: "13.6453",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "25.3335",
                        y: "13.6453",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "22.6667",
                        y: "13.6453",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "30.6667",
                        y: "13.6453",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "28",
                        y: "10.9785",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "25.3335",
                        y: "10.9785",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "22.6667",
                        y: "10.9785",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        opacity: "0.2",
                        x: "30.6667",
                        y: "10.9785",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "28",
                        y: "8.31189",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "25.3335",
                        y: "8.31189",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 36 21.6453)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 36 18.9785)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 38.6667 18.9785)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 36 16.3119)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 38.6667 16.3119)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 41.3335 16.3119)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 36 13.6453)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 38.6667 13.6453)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 41.3335 13.6453)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 36 10.9785)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 38.6667 10.9785)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 41.3335 10.9785)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 36 8.31189)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 38.6667 8.31189)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "30.6667",
                        y: "24.3119",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "30.6394",
                        y: "47.6882",
                        width: "2.66667",
                        height: "2.66666",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "30.6394",
                        y: "45.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "28.0273",
                        y: "45.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "17.5796",
                        y: "34.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "28.0273",
                        y: "42.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "17.5796",
                        y: "31.6882",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "28.0273",
                        y: "39.6882",
                        width: "2.66667",
                        height: "2.66666",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "17.5796",
                        y: "29.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "28.0273",
                        y: "37.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "17.5796",
                        y: "26.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "25.4155",
                        y: "45.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "14.9675",
                        y: "34.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "25.4155",
                        y: "42.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "14.9675",
                        y: "31.6882",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "25.4155",
                        y: "39.6882",
                        width: "2.66667",
                        height: "2.66666",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "14.9675",
                        y: "29.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "25.4155",
                        y: "37.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "14.9675",
                        y: "26.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "22.8035",
                        y: "45.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "12.3555",
                        y: "34.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "22.8035",
                        y: "42.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "12.3555",
                        y: "31.6882",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "22.8035",
                        y: "39.6882",
                        width: "2.66667",
                        height: "2.66666",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "12.3555",
                        y: "29.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "22.8035",
                        y: "37.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "12.3555",
                        y: "26.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "20.1914",
                        y: "45.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "9.74365",
                        y: "34.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "20.1914",
                        y: "42.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "9.74365",
                        y: "31.6882",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "20.1914",
                        y: "39.6882",
                        width: "2.66667",
                        height: "2.66666",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "9.74365",
                        y: "29.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "20.1914",
                        y: "37.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "9.74365",
                        y: "26.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "17.5796",
                        y: "45.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "7.13159",
                        y: "34.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "17.5796",
                        y: "42.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "7.13159",
                        y: "31.6882",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "14.9128",
                        y: "42.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "22.9128",
                        y: "31.6882",
                        width: "2.66667",
                        height: "2.66667",
                        transform: "rotate(-180 22.9128 31.6882)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "17.5796",
                        y: "39.6882",
                        width: "2.66667",
                        height: "2.66666",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "7.13159",
                        y: "29.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "14.9128",
                        y: "39.6882",
                        width: "2.66667",
                        height: "2.66666",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "22.9128",
                        y: "34.3549",
                        width: "2.66667",
                        height: "2.66667",
                        transform: "rotate(-180 22.9128 34.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "12.2461",
                        y: "39.6882",
                        width: "2.66667",
                        height: "2.66666",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "25.5796",
                        y: "34.3549",
                        width: "2.66667",
                        height: "2.66667",
                        transform: "rotate(-180 25.5796 34.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "17.5796",
                        y: "37.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "7.13159",
                        y: "26.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "14.9128",
                        y: "37.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "22.9128",
                        y: "37.0215",
                        width: "2.66667",
                        height: "2.66667",
                        transform: "rotate(-180 22.9128 37.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "12.2461",
                        y: "37.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "25.5796",
                        y: "37.0215",
                        width: "2.66667",
                        height: "2.66667",
                        transform: "rotate(-180 25.5796 37.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "9.57959",
                        y: "37.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "28.2461",
                        y: "37.0215",
                        width: "2.66667",
                        height: "2.66667",
                        transform: "rotate(-180 28.2461 37.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 35.9727 45.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 46.4207 34.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 35.9727 42.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 46.4207 31.6882)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66666",
                        transform: "matrix(-1 0 0 1 35.9727 39.6882)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 46.4207 29.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 35.9727 37.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 46.4207 26.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 38.5847 45.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 49.0327 34.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 38.5847 42.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 49.0327 31.6882)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66666",
                        transform: "matrix(-1 0 0 1 38.5847 39.6882)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 49.0327 29.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 38.5847 37.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 49.0327 26.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 41.1968 45.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 51.6445 34.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 41.1968 42.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 51.6445 31.6882)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66666",
                        transform: "matrix(-1 0 0 1 41.1968 39.6882)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 51.6445 29.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 41.1968 37.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 51.6445 26.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 43.8086 45.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 54.2566 34.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 43.8086 42.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 54.2566 31.6882)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66666",
                        transform: "matrix(-1 0 0 1 43.8086 39.6882)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 54.2566 29.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 43.8086 37.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 54.2566 26.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 46.4207 45.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 56.8687 34.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 46.4207 42.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 56.8687 31.6882)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 49.0874 42.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(1 0 0 -1 41.0874 31.6882)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66666",
                        transform: "matrix(-1 0 0 1 46.4207 39.6882)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 56.8687 29.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66666",
                        transform: "matrix(-1 0 0 1 49.0874 39.6882)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(1 0 0 -1 41.0874 34.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66666",
                        transform: "matrix(-1 0 0 1 51.7539 39.6882)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(1 0 0 -1 38.4207 34.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 46.4207 37.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 56.8687 26.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 49.0874 37.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(1 0 0 -1 41.0874 37.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 51.7539 37.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(1 0 0 -1 38.4207 37.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 54.4207 37.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(1 0 0 -1 35.7539 37.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "30.6394",
                        y: "50.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "30.6394",
                        y: "53.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    })]
                }))
            }
            var ve = r(567403),
                je = r(473903),
                Ee = r(661123),
                we = r(589677),
                _e = 864e5;

            function Se(e, t, r) {
                return (0, c.e7)([], (function() {
                    return function(e, t, r) {
                        var n = t.maxDaysOld,
                            i = t.minDaysOld,
                            o = void 0 === i ? 0 : i,
                            l = ve.Z.getGuild(e),
                            a = null == l ? void 0 : l.joinedAt;
                        if (null != r) {
                            var c = L.ZP.getMember(e, r);
                            a = null == (null == c ? void 0 : c.joinedAt) ? null : new Date(c.joinedAt)
                        }
                        if (null == a) return !1;
                        var s = Date.now() - a.getTime();
                        return (null == n || s <= _e * n) && s >= _e * o
                    }(e, t, r)
                }), [t, e, r])
            }
            var Te = r(386364),
                Pe = r(827991),
                Ie = r(61209),
                Ne = r(715107),
                Ce = r(897256),
                Le = r.n(Ce);
            const De = function(e) {
                var t = e.guild,
                    r = e.message,
                    o = e.onClose,
                    l = Ie.Z.getChannel(Ne.Z.getChannelId(t.id));
                i.useEffect((function() {
                    M.default.track(Q.rMx.OPEN_POPOUT, {
                        type: "New Member Badge Popout",
                        guild_id: t.id,
                        channel_id: null == l ? void 0 : l.id
                    })
                }), []);
                return null == l ? null : (0, n.jsx)(Te.W_, {
                    children: (0, n.jsxs)("div", {
                        className: Le().popoutContainer,
                        children: [(0, n.jsxs)("div", {
                            className: Le().mainContent,
                            children: [(0, n.jsx)("div", {
                                className: Le().iconContainer,
                                children: (0, n.jsx)(xe, {
                                    width: 40,
                                    height: 40
                                })
                            }), (0, n.jsxs)("div", {
                                children: [(0, n.jsx)(s.Heading, {
                                    variant: "heading-md/semibold",
                                    className: Le().header,
                                    children: h.Z.Messages.NEW_MEMBER_BADGE_TOOLTIP_TEXT
                                }), (0, n.jsx)(s.Text, {
                                    variant: "text-sm/normal",
                                    children: h.Z.Messages.NEW_MEMBER_BADGE_POPOUT_TEXT
                                })]
                            })]
                        }), (0, n.jsx)(s.Button, {
                            size: s.Button.Sizes.SMALL,
                            color: s.Button.Colors.BRAND,
                            className: Le().ctaButton,
                            innerClassName: Le().ctaButtonContent,
                            fullWidth: !0,
                            onClick: function() {
                                I.ZP.trackWithMetadata(Q.rMx.NEW_MEMBER_MENTION_CTA_CLICKED, {
                                    target_user_id: r.author.id
                                });
                                o();
                                (0, Pe.q)(r.author, l.id)
                            },
                            children: h.Z.Messages.MENTION_USER.format({
                                username: r.author.username
                            })
                        })]
                    })
                })
            };
            var Ae = r(711934),
                Me = r.n(Ae);

            function Re(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function Ze(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function Ge(e) {
                var t, r, i, o, l, a, u = e.guild,
                    d = e.message;
                return (t = u.id, r = d.author.id, o = (0, c.e7)([L.ZP], (function() {
                    var e;
                    return (0, Ee.yE)(null !== (i = null === (e = L.ZP.getMember(t, r)) || void 0 === e ? void 0 : e.flags) && void 0 !== i ? i : 0, we.q.DID_REJOIN)
                })), l = (0, c.e7)([ve.Z], (function() {
                    var e;
                    return null === (e = ve.Z.getGuild(t)) || void 0 === e ? void 0 : e.isNew()
                })), a = (0, c.e7)([je.default], (function() {
                    var e;
                    return null === (e = je.default.getUser(r)) || void 0 === e ? void 0 : e.bot
                })), Se(t, {
                    maxDaysOld: 7
                }, r) && !l && !a && !o) ? (0, n.jsx)(s.Popout, {
                    animation: s.Popout.Animation.TRANSLATE,
                    align: "center",
                    autoInvert: !0,
                    nudgeAlignIntoViewport: !0,
                    position: "right",
                    renderPopout: function(e) {
                        var t = e.closePopout;
                        return (0, n.jsx)(De, {
                            guild: u,
                            message: d,
                            onClose: t
                        })
                    },
                    children: function(e) {
                        var t = e.onClick;
                        return (0, n.jsx)(s.Clickable, {
                            onClick: t,
                            tag: "span",
                            children: (0, n.jsx)(s.Tooltip, {
                                text: h.Z.Messages.NEW_MEMBER_BADGE_TOOLTIP_TEXT,
                                children: function(e) {
                                    return (0, n.jsx)("div", Ze(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = null != arguments[t] ? arguments[t] : {},
                                                n = Object.keys(r);
                                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                                            }))));
                                            n.forEach((function(t) {
                                                Re(e, t, r[t])
                                            }))
                                        }
                                        return e
                                    }({
                                        className: Me().newMemberBadge
                                    }, e), {
                                        children: (0, n.jsx)(xe, {
                                            width: 20,
                                            height: 20
                                        })
                                    }))
                                }
                            })
                        })
                    }
                }) : null
            }
            var Ue = r(834876),
                ke = r(440922),
                Be = r(591406),
                He = r(396580),
                Fe = r(784426),
                Ve = r(971611),
                Ye = r(217674),
                ze = r(380652),
                qe = r(897196),
                We = r(429697),
                Xe = r.n(We);

            function Ke(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function $e(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        Ke(e, t, r[t])
                    }))
                }
                return e
            }

            function Je(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }
            const Qe = function(e) {
                var t = e.roleIcon,
                    r = e.guild,
                    o = t.name;
                i.useEffect((function() {
                    M.default.track(Q.rMx.OPEN_POPOUT, $e({
                        type: "Role Icon Popout",
                        guild_id: r.id
                    }, (0, I.v_)(Ie.Z.getChannel(Ne.Z.getChannelId(r.id)))))
                }), []);
                var l = null != t.roleId ? r.roles[t.roleId] : void 0,
                    a = (0,
                        He.Z)(l),
                    c = a ? h.Z.Messages.ROLE_ICON_POPOUT_DESCRIPTION_ROLE_SUBSCRIPTIONS.format({
                        name: o
                    }) : h.Z.Messages.ROLE_ICON_POPOUT_DESCRIPTION.format({
                        name: o
                    }),
                    u = Je($e({}, t), {
                        src: null == t.src ? t.src : (0, ke.o)(t.src, 40),
                        size: 40
                    }),
                    d = a ? function() {
                        (0, Fe.uL)(Q.Z5c.CHANNEL(r.id, qe.oC.ROLE_SUBSCRIPTIONS))
                    } : function() {
                        (0, Be.f)({
                            guildId: r.id,
                            location: {
                                section: Q.jXE.ROLE_ICON_POPOUT
                            }
                        })
                    };
                return (0, n.jsx)(s.Dialog, {
                    children: (0, n.jsx)(Te.W_, {
                        children: (0, n.jsxs)("div", {
                            className: Xe().popoutContainer,
                            children: [(0, n.jsxs)("div", {
                                className: Xe().mainContent,
                                children: [(0, n.jsx)("div", {
                                    className: Xe().roleIconContainer,
                                    children: (0, n.jsx)(ze.Z, Je($e({}, u), {
                                        enableTooltip: !1,
                                        className: Xe().roleIcon,
                                        enableHeight: !1
                                    }))
                                }), (0, n.jsxs)("div", {
                                    className: Xe().truncatingText,
                                    children: [(0, n.jsx)(s.Heading, {
                                        variant: "heading-md/semibold",
                                        className: Xe().roleName,
                                        children: (0, n.jsx)(Ve.Z, {
                                            children: o
                                        })
                                    }), (0, n.jsx)(s.Text, {
                                        variant: "text-sm/normal",
                                        children: c
                                    })]
                                })]
                            }), (0, n.jsxs)(s.Button, {
                                size: s.Button.Sizes.SMALL,
                                color: s.Button.Colors.PRIMARY,
                                className: Xe().ctaButton,
                                innerClassName: Xe().ctaButtonContent,
                                fullWidth: !0,
                                onClick: d,
                                autoFocus: !0,
                                children: [(0, n.jsx)(Ye.Z, {
                                    width: 14,
                                    height: 14,
                                    className: Xe().boosterBadge
                                }), h.Z.Messages.ROLE_ICON_POPOUT_CTA]
                            })]
                        })
                    })
                })
            };
            var et = r(490355);

            function tt(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function rt(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function nt(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }

            function it(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    l = e.color,
                    a = void 0 === l ? "currentColor" : l,
                    c = e.foreground,
                    s = nt(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsxs)("svg", rt(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            tt(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, ge.Z)(s)), {
                    width: r,
                    height: o,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: [(0, n.jsx)("path", {
                        className: c,
                        fill: a,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M18 10.7101C15.1085 9.84957 13 7.17102 13 4C13 3.69264 13.0198 3.3899 13.0582 3.093C12.7147 3.03189 12.3611 3 12 3C8.686 3 6 5.686 6 9V14C6 15.657 4.656 17 3 17V18H21V17C19.344 17 18 15.657 18 14V10.7101ZM8.55493 19C9.24793 20.19 10.5239 21 11.9999 21C13.4759 21 14.7519 20.19 15.4449 19H8.55493Z"
                    }), (0, n.jsx)("path", {
                        d: "M18.2624 5.50209L21 2.5V1H16.0349V2.49791H18.476L16 5.61088V7H21V5.50209H18.2624Z",
                        fill: a
                    })]
                }))
            }
            var ot = r(348958),
                lt = r.n(ot);

            function at(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function ct(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function st() {
                return (0, n.jsx)(s.Tooltip, {
                    text: h.Z.Messages.SUPPRESS_NOTIFICATIONS_TOOLTIP,
                    children: function(e) {
                        return (0, n.jsx)("div", ct(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))));
                                n.forEach((function(t) {
                                    at(e, t, r[t])
                                }))
                            }
                            return e
                        }({
                            className: lt().badge
                        }, e), {
                            children: (0, n.jsx)(it, {
                                width: "1rem",
                                height: "1rem"
                            })
                        }))
                    }
                })
            }
            var ut = r(736626),
                dt = r(379991),
                ft = r(682776),
                ht = r(357566),
                pt = r(775173),
                mt = r(930948),
                gt = r(42028),
                yt = r(694278),
                bt = r(185759),
                Ot = r(468482),
                xt = r.n(Ot);

            function vt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function jt(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function Et(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        jt(e, t, r[t])
                    }))
                }
                return e
            }

            function wt(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function _t(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o = [],
                            l = !0,
                            a = !1;
                        try {
                            for (r = r.call(e); !(l = (n = r.next()).done); l = !0) {
                                o.push(n.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                l || null == r.return || r.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return vt(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return vt(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function St(e) {
                var t, r = e.message,
                    i = e.messageAuthor,
                    o = e.compact,
                    a = e.animate,
                    c = e.guildId,
                    s = e.onClick,
                    d = e.onContextMenu,
                    f = e.onMouseDown,
                    h = e.onKeyDown,
                    p = e.showCommunicationDisabledStyles,
                    m = void 0 !== p && p,
                    g = e.className,
                    y = i.guildMemberAvatar,
                    b = r.author,
                    O = o ? 32 : 80;
                t = null != y && null != c ? (0, pt.JM)({
                    guildId: c,
                    userId: b.id,
                    avatar: y,
                    canAnimate: a,
                    size: O
                }) : b.getAvatarURL(void 0, O, a);
                var x, v = (0, pt.NZ)({
                    avatarDecoration: b.avatarDecoration,
                    size: (0, u.y9)(O),
                    canAnimate: a
                });
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("img", {
                        onClick: s,
                        onContextMenu: d,
                        onMouseDown: f,
                        onKeyDown: h,
                        src: t,
                        "aria-hidden": !0,
                        className: l()(g, (x = {}, jt(x, xt().avatar, !0), jt(x, xt().compact, o), jt(x, xt().clickable, null != s), jt(x, xt().communicationDisabledOpacity, m), x)),
                        alt: " "
                    }), null == v || o ? null : (0, n.jsx)("img", {
                        className: xt().avatarDecoration,
                        src: v,
                        alt: " ",
                        "aria-hidden": !0
                    })]
                })
            }

            function Tt(e, t, r) {
                var i = e.message,
                    o = e.channel,
                    l = e.author,
                    a = e.compact,
                    c = void 0 !== a && a,
                    s = e.onContextMenu,
                    u = e.showUsernamePopout,
                    d = e.onClickUsername,
                    f = e.onPopoutRequestClose;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(bt.Z, {
                        message: i,
                        channel: o,
                        author: l,
                        compact: c,
                        showPopout: u,
                        renderPopout: t,
                        onClick: d,
                        onContextMenu: s,
                        onPopoutRequestClose: f,
                        decorations: r,
                        renderRemixTag: !0
                    }), c && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("i", {
                            className: xt().separator,
                            children: ":"
                        }), " "]
                    })]
                })
            }

            function Pt(e) {
                var t, r = e.props,
                    o = e.guildId,
                    l = e.handleRenderPopout,
                    u = e.showCommunicationDisabledStyles,
                    d = void 0 !== u && u,
                    f = e.className,
                    h = r.message,
                    p = r.author,
                    m = r.compact,
                    g = void 0 !== m && m,
                    y = r.subscribeToGroupId,
                    b = r.animate,
                    O = void 0 === b || b,
                    x = r.onContextMenu,
                    v = r.onClickAvatar,
                    j = r.onPopoutRequestClose,
                    E = r.showAvatarPopout,
                    w = _t(i.useState(!1), 2),
                    _ = w[0],
                    S = w[1],
                    T = !i.useContext(s.AccessibilityPreferencesContext).reducedMotion.enabled && (null != y ? _ : O),
                    P = (0, c.e7)([dt.ZP], (function() {
                        return null !== (t = r.displayCompactAvatars) && void 0 !== t ? t : dt.ZP.displayCompactAvatars
                    })),
                    I = null != h.messageReference && null != h.webhookId,
                    N = h.author.id;
                i.useEffect((function() {
                    if (null != y) {
                        mt.S.subscribeKeyed(Q.LPv.ANIMATE_CHAT_AVATAR, "".concat(y, ":").concat(N), S);
                        return function() {
                            mt.S.unsubscribeKeyed(Q.LPv.ANIMATE_CHAT_AVATAR, "".concat(y, ":").concat(N), S)
                        }
                    }
                }), [N, y]);
                if (!g || P) return null != l && null != E ? (0, n.jsx)(s.Popout, {
                    preload: I ? void 0 : function() {
                        return (0, ut.Z)(h.author.id, null != p.guildMemberAvatar && null != o ? (0, pt.JM)({
                            guildId: o,
                            userId: h.author.id,
                            avatar: p.guildMemberAvatar,
                            size: 80
                        }) : h.author.getAvatarURL(void 0, 80, !1), {
                            guildId: o,
                            channelId: h.channel_id
                        })
                    },
                    renderPopout: l,
                    shouldShow: E,
                    position: a.tq ? "window_center" : "right",
                    onRequestClose: j,
                    children: function(e) {
                        return St({
                            message: h,
                            messageAuthor: p,
                            compact: g,
                            animate: T,
                            guildId: o,
                            onClick: v,
                            onContextMenu: x,
                            onMouseDown: e.onMouseDown,
                            onKeyDown: e.onKeyDown,
                            showCommunicationDisabledStyles: d,
                            className: f
                        })
                    }
                }) : St({
                    message: h,
                    messageAuthor: p,
                    compact: g,
                    animate: T,
                    guildId: o,
                    onClick: v,
                    onContextMenu: x,
                    onMouseDown: void 0,
                    onKeyDown: void 0,
                    showCommunicationDisabledStyles: d,
                    className: f
                })
            }

            function It(e) {
                var t = e.message,
                    r = e.avatar,
                    i = e.username,
                    o = e.usernameSpanId,
                    a = e.usernameClassName,
                    c = e.compact,
                    u = e.showTimestamp,
                    d = e.showTimestampOnHover,
                    f = e.ariaLabelledBy,
                    h = e.ariaDescribedBy,
                    p = e.className,
                    m = e.messageClassname,
                    g = e.badges;
                return (0, n.jsxs)(n.Fragment, {
                    children: [!c && r, (0, n.jsxs)(s.H, {
                        className: l()(xt().header, p),
                        "aria-describedby": h,
                        "aria-labelledby": f,
                        children: [u && c && (0, n.jsx)(gt.Z, {
                            id: (0,
                                Ue.Dv)(t),
                            compact: !0,
                            timestamp: t.timestamp,
                            isVisibleOnlyOnHover: d,
                            className: m,
                            isInline: !1
                        }), c && r, (0, n.jsx)("span", {
                            id: o,
                            className: a,
                            children: i
                        }), u && !c && (0, n.jsx)(gt.Z, {
                            id: (0, Ue.Dv)(t),
                            timestamp: t.timestamp,
                            className: m
                        }), null != g && g.length > 0 ? (0, n.jsx)("div", {
                            className: xt().badgesContainer,
                            children: g
                        }) : null]
                    })]
                })
            }

            function Nt(e) {
                var t, r = e.message,
                    o = e.repliedMessage,
                    a = e.compact,
                    u = void 0 !== a && a,
                    d = e.renderPopout,
                    f = e.showTimestampOnHover,
                    p = e.roleIcon,
                    m = e.subscribeToGroupId,
                    g = e.hideTimestamp,
                    y = e.className,
                    O = e.channel,
                    x = i.useMemo((function() {
                        return null != d ? function(e) {
                            return d(e, r)
                        } : void 0
                    }), [d, r]),
                    v = _t((0, me.ZP)(r.author.id, e.guildId), 2)[1],
                    j = (0, c.e7)([ve.Z], (function() {
                        return ve.Z.getGuild(e.guildId)
                    }), [e.guildId]),
                    E = null != r.author && null != j && ft.Z.canManageUser(Q.Plq.MODERATE_MEMBERS, r.author, j),
                    w = v && E,
                    _ = Pt({
                        props: e,
                        guildId: e.guildId,
                        handleRenderPopout: x,
                        showCommunicationDisabledStyles: w
                    }),
                    S = (0, c.e7)([dt.ZP], (function() {
                        return null !== (t = e.displayCompactAvatars) && void 0 !== t ? t : dt.ZP.displayCompactAvatars
                    })),
                    T = u && !S || null == p || null == j ? u && !S || null == p ? null : (0, n.jsx)(ze.Z, wt(Et({}, p), {
                        className: xt().roleIcon
                    }), "role-icon-children") : (0, n.jsx)(s.Popout, {
                        animation: s.Popout.Animation.TRANSLATE,
                        align: "center",
                        autoInvert: !0,
                        nudgeAlignIntoViewport: !0,
                        position: "right",
                        renderPopout: function() {
                            return (0, n.jsx)(Qe, {
                                roleIcon: p,
                                guild: j
                            })
                        },
                        children: function(e) {
                            var t = e.onClick;
                            return (0, n.jsx)(ze.Z, wt(Et({}, p), {
                                className: xt().roleIcon,
                                onClick: t
                            }))
                        }
                    }, "role-icon-children"),
                    P = (0, yt.x)({
                        message: r,
                        channel: O,
                        user: null == r ? void 0 : r.author,
                        compact: u,
                        isRepliedMessage: !1
                    }),
                    I = [];
                null != T && I.push(T);
                null != j && I.push((0, n.jsx)(Ge, {
                    guild: j,
                    message: r
                }, "new-member"));
                null != j && r.author.isClyde() && I.push((0, n.jsx)(b, {
                    guild: j
                }, "clyde-personality"));
                null != O && null != j && I.push((0, n.jsx)(pe, {
                    guild: j,
                    channel: O,
                    userId: r.author.id
                }, "connections"));
                var N = [];
                (0, Ee.yE)(r.flags, Q.iLy.SUPPRESS_NOTIFICATIONS) && N.push((0, n.jsx)(st, {}, "suppress-notifications"));
                var C = {};
                C[bt.a.SYSTEM_TAG] = P;
                C[bt.a.BADGES] = I;
                var L, D = Tt(e, x, C),
                    A = (0, Ue.XX)(r, m),
                    M = (0, Ue.Dv)(r),
                    R = g ? "".concat(A) : "".concat(A, " ").concat(M),
                    Z = (null == o ? void 0 : o.state) === et.Y.LOADED ? (0, Ue.Gq)(r) : void 0,
                    G = !0 !== g;
                return (0, n.jsx)(It, {
                    message: r,
                    avatar: _,
                    username: (0, n.jsxs)(n.Fragment, {
                        children: [w && (0, n.jsx)(s.Tooltip, {
                            text: h.Z.Messages.GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY,
                            children: function(e) {
                                return (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)(ht.Z, wt(Et({}, e), {
                                        width: 12,
                                        height: 12,
                                        className: u ? xt().compactCommunicationDisabled : xt().communicationDisabled
                                    })), (0, n.jsx)(s.HiddenVisually, {
                                        children: h.Z.Messages.GUILD_COMMUNICATION_DISABLED_BOTTOM_SHEET_TITLE
                                    })]
                                })
                            }
                        }), D]
                    }),
                    usernameSpanId: (0, Ue.XX)(r, m),
                    usernameClassName: l()(xt().headerText, (L = {}, jt(L, xt().hasRoleIcon, null != T), jt(L, xt().hasBadges, null != P || N.length > 0), L)),
                    compact: u,
                    showTimestamp: G,
                    showTimestampOnHover: f,
                    ariaLabelledBy: R,
                    ariaDescribedBy: Z,
                    className: y,
                    badges: N
                })
            }
        }
    }
]);