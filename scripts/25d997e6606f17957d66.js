"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [43244], {
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
        702264: (e, t, r) => {
            r.d(t, {
                CX: () => p,
                J0: () => m,
                j7: () => v,
                Kt: () => j,
                I5: () => x,
                g_: () => E,
                z5: () => w,
                c6: () => _,
                Bn: () => P,
                Xo: () => C,
                JO: () => I
            });
            var n = r(281110),
                i = r(744564),
                o = r(285991),
                l = r(755550),
                a = r(876986),
                c = r(2590);

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

            function f(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        f(e, t, r[t])
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
                return y.apply(this, arguments)
            }

            function y() {
                return (y = u((function(e, t) {
                    return h(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, O(e, t)];
                            case 1:
                                return [2, r.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function m(e) {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = u((function(e) {
                    return h(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, n.ZP.put({
                                    url: c.ANM.GUILD_CLYDE_ADD_MEMBER(e),
                                    oldFormErrors: !0
                                })];
                            case 1:
                                return [2, t.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function O(e, t) {
                return b.apply(this, arguments)
            }

            function b() {
                return (b = u((function(e, t) {
                    var r, o, l, s;
                    return h(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                i.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_SAVE_START"
                                });
                                u.label = 1;
                            case 1:
                                u.trys.push([1, 3, , 4]);
                                return [4, n.ZP.patch({
                                    url: c.ANM.GUILD_CLYDE_SETTINGS(e),
                                    oldFormErrors: !0,
                                    body: t
                                })];
                            case 2:
                                if ((r = u.sent()).ok) {
                                    i.Z.dispatch({
                                        type: "CLYDE_GUILD_SETTINGS_SAVE_SUCCESS",
                                        settings: r.body.settings
                                    });
                                    null != r.body.guild_member_profile && i.Z.dispatch(d({
                                        type: "USER_PROFILE_UPDATE_SUCCESS",
                                        userId: a.fL,
                                        profileEffectID: void 0
                                    }, r.body.guild_member_profile));
                                    null != r.body.guild_member && i.Z.dispatch({
                                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                                        guildMember: r.body.guild_member,
                                        guildId: e
                                    });
                                    return [2, r.body.settings]
                                }
                                i.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_SAVE_FAIL",
                                    errors: null !== (l = null === (o = r.body) || void 0 === o ? void 0 : o.errors) && void 0 !== l ? l : {}
                                });
                                return [2, null];
                            case 3:
                                s = u.sent();
                                i.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_SAVE_FAIL",
                                    errors: s.body
                                });
                                return [2, null];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function v(e) {
                i.Z.dispatch({
                    type: "CLYDE_SET_PENDING_PERSONALITY",
                    personality: e
                })
            }

            function j(e) {
                i.Z.dispatch({
                    type: "CLYDE_SET_PENDING_NICK",
                    nick: null != e ? e : ""
                })
            }

            function x(e) {
                i.Z.dispatch({
                    type: "CLYDE_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function E(e) {
                i.Z.dispatch({
                    type: "CLYDE_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function w(e) {
                i.Z.dispatch({
                    type: "CLYDE_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function _() {
                i.Z.dispatch({
                    type: "CLYDE_RESET_PENDING_CHANGES"
                })
            }

            function P(e) {
                return S.apply(this, arguments)
            }

            function S() {
                S = u((function(e) {
                    var t, r, s = arguments;
                    return h(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                if (!(s.length > 1 && void 0 !== s[1] && s[1]) && !l.Z.shouldFetchSettings(e)) return [2];
                                (0, o.In)(a.fL, {
                                    guildId: e
                                });
                                i.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_FETCH_START",
                                    guildId: e
                                });
                                u.label = 1;
                            case 1:
                                u.trys.push([1, 3, , 4]);
                                return [4, n.ZP.get({
                                    url: c.ANM.GUILD_CLYDE_SETTINGS(e),
                                    oldFormErrors: !0
                                })];
                            case 2:
                                t = u.sent();
                                r = t.body;
                                i.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_FETCH_SUCCESS",
                                    guildId: r.guild_id,
                                    settings: r
                                });
                                return [3, 4];
                            case 3:
                                u.sent();
                                i.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_FETCH_FAIL",
                                    guildId: e
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }));
                return S.apply(this, arguments)
            }

            function C(e) {
                return T.apply(this, arguments)
            }

            function T() {
                return (T = u((function(e) {
                    var t, r;
                    return h(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                if (null != l.Z.getProfile(e)) return [2];
                                i.Z.dispatch({
                                    type: "CLYDE_PROFILE_FETCH_START",
                                    clydeProfileId: e
                                });
                                o.label = 1;
                            case 1:
                                o.trys.push([1, 3, , 4]);
                                return [4, n.ZP.get({
                                    url: c.ANM.CLYDE_PROFILES(e),
                                    oldFormErrors: !0
                                })];
                            case 2:
                                t = o.sent();
                                r = t.body;
                                i.Z.dispatch({
                                    type: "CLYDE_PROFILE_FETCH_SUCCESS",
                                    profile: r
                                });
                                return [3, 4];
                            case 3:
                                o.sent();
                                i.Z.dispatch({
                                    type: "CLYDE_PROFILE_FETCH_FAIL",
                                    clydeProfileId: e
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function I(e) {
                return N.apply(this, arguments)
            }

            function N() {
                return (N = u((function(e) {
                    var t;
                    return h(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                r.trys.push([0, 2, , 3]);
                                return [4, n.ZP.post({
                                    url: c.ANM.CLYDE_PROFILES_CREATE(e),
                                    oldFormErrors: !0
                                })];
                            case 1:
                                (t = r.sent()).ok && i.Z.dispatch({
                                    type: "CLYDE_PROFILE_CREATE_SUCCESS",
                                    profile: t.body
                                });
                                return [2, t.body];
                            case 2:
                                r.sent();
                                return [2, null];
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        755550: (e, t, r) => {
            r.d(t, {
                Z: () => w
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
            var f, d, h, p, y, m = !1,
                g = null,
                O = {},
                b = {},
                v = {},
                j = {};

            function x() {
                f = void 0;
                d = void 0;
                h = void 0;
                p = void 0;
                y = void 0;
                g = null
            }
            var E = function(e) {
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
                    if (null != e) return v[e]
                };
                n.getProfile = function(e) {
                    return null == e ? null : O[e]
                };
                n.getPendingPersonality = function() {
                    return f
                };
                n.getPendingNick = function() {
                    return d
                };
                n.getErrors = function() {
                    return g
                };
                n.hasPendingChanges = function() {
                    return void 0 !== f || void 0 !== d || void 0 !== h || void 0 !== p || void 0 !== y
                };
                n.getPendingUpdates = function() {
                    return {
                        pendingAvatar: h,
                        pendingNick: d,
                        pendingPersonality: f,
                        pendingBanner: p,
                        pendingThemeColors: y
                    }
                };
                n.isSavingSettings = function() {
                    return m
                };
                n.isFetchingSettings = function(e) {
                    var t;
                    return null === (t = j[e]) || void 0 === t ? void 0 : t.isFetching
                };
                n.shouldFetchSettings = function(e) {
                    var t, r, n = null !== (t = j[e]) && void 0 !== t ? t : {
                            isFetching: !1
                        },
                        i = Date.now() - (null !== (r = n.lastFetchTimestampMs) && void 0 !== r ? r : 0) > 36e5;
                    return !(null == n ? void 0 : n.isFetching) && i
                };
                n.isFetchingProfile = function(e) {
                    var t;
                    return null === (t = b[e]) || void 0 === t ? void 0 : t.isFetching
                };
                return r
            }(n.ZP.Store);
            E.displayName = "ClydeStore";
            const w = new E(i.Z, {
                CLYDE_GUILD_SETTINGS_FETCH_START: function(e) {
                    var t = e.guildId,
                        r = j[t];
                    j[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
                    }
                },
                CLYDE_GUILD_SETTINGS_FETCH_SUCCESS: function(e) {
                    var t = e.guildId,
                        r = e.settings;
                    j[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    };
                    v[t] = r
                },
                CLYDE_GUILD_SETTINGS_FETCH_FAIL: function(e) {
                    var t = e.guildId,
                        r = j[t];
                    j[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
                    }
                },
                CLYDE_SET_PENDING_PERSONALITY: function(e) {
                    var t = e.personality;
                    f = t
                },
                CLYDE_SET_PENDING_NICK: function(e) {
                    var t = e.nick;
                    d = t
                },
                CLYDE_SET_PENDING_AVATAR: function(e) {
                    var t = e.avatar;
                    h = t
                },
                CLYDE_SET_PENDING_BANNER: function(e) {
                    var t = e.banner;
                    p = t
                },
                CLYDE_SET_PENDING_THEME_COLORS: function(e) {
                    var t = e.themeColors;
                    y = t
                },
                CLYDE_GUILD_SETTINGS_SAVE_START: function() {
                    g = null;
                    m = !0
                },
                CLYDE_GUILD_SETTINGS_SAVE_SUCCESS: function(e) {
                    var t = e.settings;
                    m = !1;
                    v[t.guild_id] = t;
                    x()
                },
                CLYDE_GUILD_SETTINGS_SAVE_FAIL: function(e) {
                    m = !1;
                    g = e.errors
                },
                CLYDE_RESET_PENDING_CHANGES: x,
                CLYDE_PROFILE_FETCH_START: function(e) {
                    var t = e.clydeProfileId,
                        r = b[t];
                    b[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_FETCH_SUCCESS: function(e) {
                    var t = e.profile;
                    b[t.clyde_profile_id] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    };
                    O[t.clyde_profile_id] = t
                },
                CLYDE_PROFILE_FETCH_FAIL: function(e) {
                    var t = e.clydeProfileId,
                        r = b[t];
                    b[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_CREATE_SUCCESS: function(e) {
                    var t = e.profile;
                    O[t.clyde_profile_id] = t
                }
            })
        },
        665144: (e, t, r) => {
            r.d(t, {
                y: () => a
            });
            var n = r(667294),
                i = r(318715),
                o = r(702264),
                l = r(755550);

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
                ZP: () => y
            });
            var n = r(785893),
                i = (r(667294), r(304548)),
                o = r(316388),
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

            function f(e, t) {
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
            var d = function(e, t) {
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
                    return d(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([r.e(40532), r.e(85157), r.e(62419), r.e(29392), r.e(39685), r.e(47007), r.e(79249), r.e(69876), r.e(6543), r.e(29342), r.e(96259), r.e(1960), r.e(13185), r.e(89975), r.e(27499), r.e(79913), r.e(19493), r.e(64466), r.e(92465), r.e(45353), r.e(10675), r.e(73679), r.e(73727), r.e(87440), r.e(52555), r.e(54602), r.e(61953), r.e(6565), r.e(20419), r.e(24251), r.e(3790), r.e(84441), r.e(30027), r.e(94302), r.e(36952), r.e(28629), r.e(70535), r.e(82786), r.e(67367), r.e(31520), r.e(75700), r.e(77579), r.e(80980), r.e(33227), r.e(44832), r.e(24417), r.e(95839), r.e(30144), r.e(89984), r.e(18449), r.e(24501), r.e(35796), r.e(25978), r.e(67783), r.e(21667), r.e(49719)]).then(r.bind(r, 738999))];
                            case 1:
                                t = o.sent(), i = t.default;
                                return [2, function(t) {
                                    return (0, n.jsx)(i, f(function(e) {
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

            function y(e) {
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
                h: () => y,
                J: () => g
            });
            var n = r(496486),
                i = r.n(n),
                o = r(73904),
                l = r(457896),
                a = r(775173),
                c = r(198265),
                s = r(622219),
                u = r(919622),
                f = r(473708),
                d = ["934240649153220678", "936929561302675456", "762275850782900254", "1022952195194359889"],
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
                y = function(e, t, r) {
                    var n = (null == e ? void 0 : e.data.interactionType) === o.B8.MESSAGE_COMPONENT && (null == e ? void 0 : e.state) === l.F.FAILED ? e.data.indices : null;
                    if (null != n && i().isEqual(n.slice(0, n.length - 1), r.indices)) {
                        var a;
                        return null !== (a = null == t ? void 0 : t.interactionError) && void 0 !== a ? a : function(e) {
                            return 429 === (null == e ? void 0 : e.errorCode) ? f.Z.Messages.INTERACTION_RATE_LIMITED : f.Z.Messages.APPLICATION_COMMAND_FAILED
                        }(e)
                    }
                },
                m = function(e) {
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

            function g(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
                    l = n.includeEmojiSrc;
                return e.map((function(e, a) {
                    if (!m(e.type)) return null;
                    var y = i.concat(a);
                    switch (e.type) {
                        case o.re.ACTION_ROW:
                            var O = null != e.components ? g(e.components, t, r, n, y) : void 0;
                            return {
                                type: o.re.ACTION_ROW, indices: y, components: O
                            };
                        case o.re.BUTTON:
                            if (d.includes(t) && null != e.custom_id && h.test(e.custom_id) && !(0, u.Z)(r)) return null;
                            var b = null != e.emoji ? p(e.emoji, l) : void 0;
                            return {
                                type: o.re.BUTTON, customId: e.custom_id, style: e.style, disabled: e.disabled, url: e.url, label: e.label, emoji: b, indices: y, applicationId: t
                            };
                        case o.re.STRING_SELECT:
                            var v;
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
                                })), placeholder: null !== (v = e.placeholder) && void 0 !== v ? v : f.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: e.min_values, maxValues: e.max_values, indices: y, applicationId: t
                            };
                        case o.re.INPUT_TEXT:
                            return {
                                type: e.type, style: e.style, customId: e.custom_id, label: e.label, value: e.value, placeholder: e.placeholder, disabled: e.disabled, required: e.required, minLength: e.min_length, maxLength: e.max_length, indices: y
                            };
                        case o.re.USER_SELECT:
                            var j;
                            return {
                                type: o.re.USER_SELECT, customId: e.custom_id, disabled: e.disabled, placeholder: null !== (j = e.placeholder) && void 0 !== j ? j : f.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: e.min_values, maxValues: e.max_values, defaultValues: e.default_values, indices: y, applicationId: t, selectedOptions: (0, s.tx)(e.default_values, r)
                            };
                        case o.re.ROLE_SELECT:
                            var x;
                            return {
                                type: o.re.ROLE_SELECT, customId: e.custom_id, disabled: e.disabled,
                                    placeholder: null !== (x = e.placeholder) && void 0 !== x ? x : f.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: e.min_values, maxValues: e.max_values, defaultValues: e.default_values, indices: y, applicationId: t, selectedOptions: (0, s.tx)(e.default_values, r)
                            };
                        case o.re.MENTIONABLE_SELECT:
                            var E;
                            return {
                                type: o.re.MENTIONABLE_SELECT, customId: e.custom_id, disabled: e.disabled, placeholder: null !== (E = e.placeholder) && void 0 !== E ? E : f.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: e.min_values, maxValues: e.max_values, defaultValues: e.default_values, indices: y, applicationId: t, selectedOptions: (0, s.tx)(e.default_values, r)
                            };
                        case o.re.CHANNEL_SELECT:
                            var w, _;
                            return {
                                type: o.re.CHANNEL_SELECT, customId: e.custom_id, disabled: e.disabled, placeholder: null !== (w = e.placeholder) && void 0 !== w ? w : f.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: e.min_values, maxValues: e.max_values, indices: y, channelTypes: e.channel_types, defaultValues: e.default_values, applicationId: t, selectedOptions: (0,
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
                _H: () => y,
                af: () => m,
                tx: () => g
            });
            var n = r(954358),
                i = r(73904),
                o = r(61209),
                l = r(21372),
                a = r(567403),
                c = r(473903),
                s = r(504275),
                u = r(773148),
                f = r(198265);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function h(e) {
                return function(e) {
                    if (Array.isArray(e)) return d(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var p = 1e3;

            function y(e, t, r) {
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
                    d = c.users,
                    p = c.roles,
                    y = d.map((function(e) {
                        var t, i = u.ZP.getNickname(n.getGuildId(), r, e.user);
                        return {
                            type: f.t.USER,
                            value: e.user.id,
                            label: null !== (t = null != i ? i : e.user.globalName) && void 0 !== t ? t : e.user.username
                        }
                    })),
                    m = p.map((function(e) {
                        return {
                            type: f.t.ROLE,
                            value: e.id,
                            label: e.name
                        }
                    }));
                return h(y).concat(h(m))
            }

            function m(e, t, r) {
                var n = o.Z.getChannel(t);
                return null == n ? [] : s.ZP.queryApplicationCommandChannelResults({
                    query: e,
                    channel: n,
                    channelTypes: r,
                    limit: 15
                }).channels.map((function(e) {
                    return {
                        type: f.t.CHANNEL,
                        value: e.id,
                        label: e.name
                    }
                }))
            }

            function g(e, t) {
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
                                    type: f.t.USER, value: t.id, label: null !== (a = null != s ? s : t.globalName) && void 0 !== a ? a : t.username
                                };
                            case n.$.ROLE:
                                if (null == i) return null;
                                var u = i.getRole(e.id);
                                return null == u ? null : {
                                    type: f.t.ROLE,
                                    value: u.id,
                                    label: u.name
                                };
                            case n.$.CHANNEL:
                                if (null == i) return null;
                                var d = o.Z.getChannel(e.id);
                                return null == d || d.guild_id !== i.id || r.length > 0 && !r.includes(d.type) ? null : {
                                    type: f.t.CHANNEL,
                                    value: d.id,
                                    label: d.name
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
                    f = void 0 !== u && u,
                    d = t.isInteracting,
                    h = void 0 !== d && d,
                    p = t.allowHeading,
                    y = void 0 !== p && p,
                    m = t.allowList,
                    g = void 0 !== m && m,
                    O = t.allowLinks,
                    b = void 0 !== O && O,
                    v = t.previewLinkTarget,
                    j = void 0 !== v && v;
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
                        noStyleAndInteraction: f,
                        isInteracting: h,
                        allowHeading: y,
                        allowList: g,
                        allowLinks: b,
                        previewLinkTarget: j
                    })
                }), [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, r, s, f, h, y, g, b, j])
            }
        },
        827991: (e, t, r) => {
            r.d(t, {
                q: () => m,
                Z: () => g
            });
            var n = r(785893),
                i = (r(667294), r(202351)),
                o = r(304548),
                l = r(224134),
                a = r(61209),
                c = r(682776),
                s = r(715107),
                u = r(930948),
                f = r(749565),
                d = r(2590),
                h = r(473708);

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function y(e, t) {
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

            function m(e, t) {
                var r = e.id,
                    n = "@".concat(f.ZP.getUserTag(e, {
                        decoration: "never"
                    })),
                    i = "<@".concat(r, ">");
                u.S.dispatchToLastSubscribed(d.CkL.INSERT_TEXT, {
                    plainText: n,
                    rawText: i
                });
                null != t && l.Z.startTyping(t)
            }

            function g(e, t, r) {
                var l = y((0, i.Wu)([s.Z, a.Z, c.Z], (function() {
                        var e = s.Z.getChannelId(t),
                            r = a.Z.getChannel(e);
                        return [e, null != r && (r.isMultiUserDM() || c.Z.can(d.Plq.SEND_MESSAGES, r))]
                    }), [t]), 2),
                    u = l[0],
                    f = l[1],
                    p = r === d.IlC.POPOUT;
                return !f || p ? null : (0, n.jsx)(o.MenuItem, {
                    id: "mention",
                    label: h.Z.Messages.MENTION,
                    action: function() {
                        m(e, u)
                    }
                })
            }
        },
        64875: (e, t, r) => {
            r.d(t, {
                Z: () => h
            });
            var n = r(785893),
                i = (r(667294), r(168075)),
                o = r(795308),
                l = r(633878);

            function a(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function c(e, t) {
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

            function s(e, t) {
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

            function u(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function f(e, t) {
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

            function d(e, t) {
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
            const h = (0, i.hN)((function(e) {
                var t = e.color,
                    r = void 0 === t ? "currentColor" : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    a = e.width,
                    c = void 0 === a ? 24 : a,
                    s = d(e, ["color", "height", "width"]);
                return (0, n.jsxs)("svg", f(function(e) {
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
                }({}, (0, l.Z)(s)), {
                    width: c,
                    height: o,
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
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    i = e.height,
                    u = void 0 === i ? 24 : i,
                    f = e.color,
                    d = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    h = e.colorClass,
                    p = void 0 === h ? "" : h,
                    y = s(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            a(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M12 23c.08 0 .135-.08.111-.157-.22-.715-.166-1.53.285-2.315l2.21-3.851c.174-.302-.067-.724-.313-.97l-3-3A1 1 0 0 1 11 12V5a1 1 0 1 1 2 0v6.379a.5.5 0 0 0 .146.353l2.561 2.56c.08.08.223.078.28-.02l.368-.64c1.163-2.028 4.127-2.028 5.29 0l.311.54c.218.381.771.311.853-.12.125-.665.191-1.35.191-2.052 0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11Zm6.09-8.373c.394-.688 1.426-.688 1.82 0l3.96 6.897c.38.664-.12 1.476-.911 1.476h-7.918c-.79 0-1.292-.812-.91-1.476l3.958-6.897Zm.464 1.873h.892a.5.5 0 0 1 .497.551l-.208 2.017c-.017.16-.177.262-.334.228A1.928 1.928 0 0 0 19 19.25c-.137 0-.274.019-.4.046-.158.034-.318-.068-.335-.228l-.208-2.017a.5.5 0 0 1 .497-.551ZM19 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                        clipRule: "evenodd",
                        className: p
                    })
                }))
            }))
        },
        613749: (e, t, r) => {
            r.d(t, {
                c4: () => v,
                st: () => j,
                ZP: () => E
            });
            var n = r(785893),
                i = r(667294),
                o = r(294184),
                l = r.n(o),
                a = r(283151),
                c = r(202351),
                s = r(304548),
                u = r(303907),
                f = r(873934),
                d = r(166076),
                h = r(818417),
                p = r(98265),
                y = r(2590),
                m = r(473708),
                g = r(983803),
                O = r.n(g);

            function b(e) {
                return {
                    text: e,
                    icon: (0, n.jsx)(s.Dots, {
                        className: O().icon,
                        dotRadius: 3.5,
                        themed: !0
                    })
                }
            }

            function v(e) {
                return {
                    text: null != e ? e : m.Z.Messages.APPLICATION_COMMAND_FAILED,
                    color: p.Z.Colors.ERROR,
                    icon: (0, n.jsx)(h.Z, {
                        width: 16,
                        height: 16,
                        className: l()(O().icon, O().errorIcon)
                    })
                }
            }

            function j(e) {
                var t = e.className,
                    r = e.icon,
                    i = e.text,
                    o = e.color;
                return (0, n.jsxs)("div", {
                    className: l()(O().wrapper, t),
                    children: [r, (0, n.jsx)(p.Z, {
                        size: p.Z.Sizes.SIZE_14,
                        color: o,
                        children: i
                    })]
                })
            }

            function x(e) {
                var t = e.message,
                    r = e.className,
                    o = e.component,
                    l = (0, a.Z)(),
                    s = (0, c.e7)([f.Z], (function() {
                        return f.Z.getInteraction(t)
                    }), [t]);
                i.useEffect((function() {
                    var e = null;
                    if (t.hasFlag(y.iLy.LOADING) && null != s) {
                        var r = (0, d.ow)(t.id) - Date.now();
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
                    switch ((0, d.t$)(t, e)) {
                        case d.rQ.SENDING:
                            return b(m.Z.Messages.APPLICATION_COMMAND_SENDING);
                        case d.rQ.CREATED:
                            return b(m.Z.Messages.APPLICATION_COMMAND_WAITING.format({
                                applicationName: t.author.username
                            }));
                        case d.rQ.TIMED_OUT:
                            return v(m.Z.Messages.APPLICATION_COMMAND_TIMED_OUT);
                        case d.rQ.FAILED:
                            return v(t.interactionError)
                    }
                }(s, t);
                else {
                    var p = (0, u.h)(s, t, o);
                    null != p && (h = v(p))
                }
                if (null == h) return null;
                var g = h.text,
                    O = h.icon,
                    x = h.color;
                return (0, n.jsx)(j, {
                    icon: O,
                    text: g,
                    className: r,
                    color: x
                })
            }
            const E = i.memo(x)
        },
        508754: (e, t, r) => {
            r.d(t, {
                Z: () => h
            });
            var n = r(785893),
                i = (r(667294), r(294184)),
                o = r.n(i),
                l = r(304548),
                a = r(927570),
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

            function f(e, t) {
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

            function d(e, t) {
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
                    y = e.zalgo,
                    m = void 0 === y || y,
                    g = e.disableInteraction,
                    O = void 0 !== g && g,
                    b = e.childrenHighlight,
                    v = e.childrenRepliedMessage,
                    j = e.childrenExecutedCommand,
                    x = e.childrenHeader,
                    E = e.childrenSystemMessage,
                    w = e.childrenButtons,
                    _ = e.childrenMessageContent,
                    P = e.childrenAccessories,
                    S = e.messageRef,
                    C = e.focusProps,
                    T = void 0 === C ? {
                        offset: {
                            left: 4,
                            right: 4
                        }
                    } : C,
                    I = e.hasThread,
                    N = e.isSystemMessage,
                    L = e.hasReply,
                    D = d(e, ["className", "compact", "contentOnly", "zalgo", "disableInteraction", "childrenHighlight", "childrenRepliedMessage", "childrenExecutedCommand", "childrenHeader", "childrenSystemMessage", "childrenButtons", "childrenMessageContent", "childrenAccessories", "messageRef", "focusProps", "hasThread", "isSystemMessage", "hasReply"]),
                    A = (0, n.jsx)(l.FocusRing, f(u({}, T), {
                        children: (0, n.jsxs)("div", f(u({
                            className: o()(r, (t = {}, s(t, c().wrapper, !0), s(t, c().contentOnly, p), s(t, c().compact, a), s(t, c().cozy, !a), s(t, c().zalgo, m), s(t, c().hasThread, I),
                                s(t, c().isSystemMessage, N), s(t, c().hasReply, L), t)),
                            ref: S
                        }, D), {
                            role: "article",
                            children: [!a && b, v, j, (0, n.jsxs)("div", {
                                className: c().contents,
                                children: [E, x, null == E && _]
                            }), P, null != w ? (0, n.jsx)("div", {
                                className: c().buttonContainer,
                                children: w
                            }) : null]
                        }))
                    }));
                return O ? (0, n.jsx)(l.FocusBlock, {
                    children: A
                }) : A
            }
        },
        728118: (e, t, r) => {
            r.d(t, {
                nD: () => Rt,
                ZP: () => Mt,
                F2: () => At,
                xP: () => Dt
            });
            var n = r(785893),
                i = r(667294),
                o = r(294184),
                l = r.n(o),
                a = r(289283),
                c = r(202351),
                s = r(304548),
                u = r(995141),
                f = r(472034),
                d = r(665144),
                h = r(473708),
                p = r(244192),
                y = r.n(p);

            function m(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function g(e, t) {
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

            function O(e) {
                var t = e.guild;
                return (0, d.y)(t.id) ? (0, n.jsx)(s.Tooltip, {
                    text: h.Z.Messages.CLYDE_PERSONALITY_BADGE_TOOLTIP,
                    tooltipClassName: y().tooltip,
                    children: function(e) {
                        return (0, n.jsx)("div", g(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))));
                                n.forEach((function(t) {
                                    m(e, t, r[t])
                                }))
                            }
                            return e
                        }({
                            className: y().personalityBadge
                        }, e), {
                            children: (0, n.jsx)(f.Z, {})
                        }))
                    }
                }) : null
            }
            var b = r(441143),
                v = r.n(b),
                j = r(496486),
                x = r.n(j),
                E = r(795308),
                w = r(575945),
                _ = r(327499),
                P = r(385028),
                S = r(74535),
                C = r(265688),
                T = r(396043),
                I = r(924417),
                N = r(722406),
                L = r(21372),
                D = r(609853),
                A = r(621329),
                R = r(652591),
                M = r(53645),
                Z = r(744564);

            function G(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function k(e) {
                k = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return k(e)
            }

            function U(e, t) {
                return !t || "object" !== B(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function F(e, t) {
                F = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return F(e, t)
            }
            var B = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function H(e) {
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
                    var r, n = k(e);
                    if (t) {
                        var i = k(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return U(this, r)
                }
            }
            var V = new Map,
                Y = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && F(e, t)
                    }(r, e);
                    var t = H(r);

                    function r() {
                        G(this, r);
                        return t.apply(this, arguments)
                    }
                    r.prototype.getGuildRoleConnectionEligibility = function(e) {
                        return null != e ? V.get(e) : void 0
                    };
                    return r
                }(c.ZP.Store);
            Y.displayName = "GuildRoleConnectionEligibilityStore";
            const z = new Y(Z.Z, {
                GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: function(e) {
                    var t = e.roleId,
                        r = e.roleConnectionEligibility;
                    V.set(t, r)
                }
            });
            var q = r(979422),
                W = r(566500),
                X = r(491984),
                K = r(338935),
                J = r(678005),
                $ = r(2590),
                Q = r(960412),
                ee = r(645110),
                te = r.n(ee);

            function re(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function ne(e, t, r, n, i, o, l) {
                try {
                    var a = e[o](l),
                        c = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(n, i)
            }

            function ie(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, i) {
                        var o = e.apply(t, r);

                        function l(e) {
                            ne(o, n, i, l, a, "next", e)
                        }

                        function a(e) {
                            ne(o, n, i, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function oe(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function le(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        oe(e, t, r[t])
                    }))
                }
                return e
            }

            function ae(e, t) {
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

            function ce(e, t) {
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
                    if ("string" == typeof e) return re(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return re(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var se = function(e, t) {
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

            function ue(e) {
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
                } else t = (0, M.n_)({
                    connectionType: r,
                    connectionMetadataField: i,
                    operator: o,
                    value: l
                });
                return null == t ? null : (0, n.jsxs)("div", {
                    className: te().popoutCheck,
                    children: [(0, n.jsx)(A.Z, {
                        className: te().popoutCheckIcon
                    }), (0, n.jsx)(s.Text, {
                        variant: "text-xs/medium",
                        color: "header-primary",
                        children: t
                    })]
                })
            }

            function fe(e) {
                var t = e.eligibilityStates,
                    r = (0, S.ZP)(),
                    i = (0, s.useToken)(E.Z.unsafe_rawColors.GREEN_330).hex(),
                    o = x().groupBy(t, (function(e) {
                        return "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : "")
                    }));
                return (0,
                    n.jsx)(n.Fragment, {
                    children: Object.keys(o).map((function(e) {
                        var t, l, a, c = o[e],
                            u = c.filter((function(e) {
                                return null != e.operator
                            })),
                            f = c.find((function(e) {
                                return null != e.application
                            })),
                            d = C.Z.get(e),
                            h = null == f ? void 0 : f.application,
                            p = null != (null == h ? void 0 : h.bot) ? new N.Z(h.bot) : null;
                        M.SJ.includes(null !== (t = null == h ? void 0 : h.id) && void 0 !== t ? t : "") ? l = (0, n.jsx)(X.Z, {
                            className: te().botTag,
                            color: i,
                            size: 16
                        }) : null != p && (l = (0, n.jsx)(D.Z, {
                            className: te().botTag,
                            verified: p.isVerifiedBot()
                        }));
                        return (0, n.jsxs)("div", {
                            className: te().popoutChecksGroup,
                            children: [(0, n.jsxs)("div", {
                                className: te().popoutCheckGroupName,
                                children: [null != d ? (0, n.jsx)("img", {
                                    src: (0, w.wj)(r) ? d.icon.darkSVG : d.icon.lightSVG,
                                    alt: "",
                                    className: te().popoutCheckGroupPlatformIcon
                                }) : null, null != p ? (0, n.jsx)(P.Z, {
                                    user: p,
                                    size: s.AvatarSizes.SIZE_20,
                                    className: te().popoutCheckGroupPlatformIcon
                                }) : null, (0, n.jsx)(s.Text, {
                                    variant: "text-sm/medium",
                                    color: "interactive-active",
                                    children: null !== (a = null == d ? void 0 : d.name) && void 0 !== a ? a : null == h ? void 0 : h.name
                                }), l]
                            }), u.map((function(e) {
                                var t = e.connection_type,
                                    r = e.connection_metadata_field,
                                    i = e.operator,
                                    o = e.value,
                                    l = e.description;
                                v()(null != r, "connectionMetadataField is null");
                                v()(null != i, "operator is null");
                                v()(null != o, "value is null");
                                return (0, n.jsx)(ue, {
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

            function de(e) {
                var t, r = e.onGetRolesClicked,
                    o = e.onOpenProfile,
                    l = e.eligibilityStates,
                    a = e.userId,
                    u = e.roleId,
                    f = e.channelId,
                    d = e.guildId;
                i.useEffect((function() {
                    R.default.track($.rMx.PASSPORT_ROLE_POPOUT_VIEWED, le({
                        other_user_id: a,
                        role_id: u
                    }, (0, T.JS)(f), (0, T.hH)(d)))
                }), [a, u, f, d]);
                var p, y = (0, c.e7)([L.ZP], (function() {
                    var e;
                    return null !== (t = null === (e = L.ZP.getSelfMember(d)) || void 0 === e ? void 0 : e.roles.includes(u)) && void 0 !== t && t
                }), [d, u]);
                p = 1 === l.length && 1 === l[0].length ? h.Z.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_ONE : 1 === l.length ? h.Z.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_ALL.format() : h.Z.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_OR.format();
                return (0, n.jsxs)("div", {
                    className: te().popout,
                    children: [(0, n.jsx)("div", {
                        className: te().popoutHeaderContainer,
                        children: (0, n.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "text-normal",
                            className: te().popoutHeaderText,
                            children: p
                        })
                    }), (0, n.jsx)("div", {
                        className: te().popoutChecks,
                        children: (0, n.jsx)(fe, {
                            eligibilityStates: l.flat()
                        })
                    }), (0, n.jsxs)("div", {
                        className: te().buttonContainer,
                        children: [y ? null : (0, n.jsx)(s.Button, {
                            className: te().getRolesButton,
                            onClick: r,
                            children: h.Z.Messages.CONNECTIONS_ROLE_POPOUT_GET_ROLES
                        }), (0, n.jsx)(s.Button, {
                            className: te().viewConnectionsButton,
                            color: s.Button.Colors.PRIMARY,
                            onClick: o,
                            children: h.Z.Messages.CONNECTIONS_ROLE_POPOUT_VIEW_CONNECTIONS
                        })]
                    })]
                })
            }

            function he(e) {
                var t = e.userId,
                    r = e.guild,
                    o = e.channel,
                    l = (0, q.Z)(r, t, o.id, !0),
                    a = (0, c.e7)([z], (function() {
                        return z.getGuildRoleConnectionEligibility(null == l ? void 0 : l.id)
                    })),
                    u = ce(i.useState(null == a), 2),
                    f = u[0],
                    d = u[1];
                if (null == l) return null;

                function p() {
                    return (p = ie((function() {
                        return se(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    v()(null != l, "visibleConnectionsRole is null");
                                    return f && null == a ? [4, _.Z.fetchGuildRoleConnectionsEligibility(r.id, l.id)] : [2];
                                case 1:
                                    e.sent();
                                    d(!1);
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
                            v()(null != l, "visibleConnectionsRole is null");
                            return (0, n.jsx)(de, {
                                eligibilityStates: a,
                                userId: t,
                                roleId: l.id,
                                channelId: o.id,
                                guildId: r.id,
                                onGetRolesClicked: function() {
                                    (0, K.Am)(r.id)
                                },
                                onOpenProfile: function() {
                                    (0, I.m)({
                                        userId: t,
                                        guildId: r.id,
                                        channelId: o.id,
                                        section: Q.oh.USER_INFO_CONNECTIONS,
                                        analyticsLocation: {
                                            section: $.jXE.CHANNEL
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
                                return (0, n.jsxs)("div", ae(le({
                                    className: te().badge
                                }, t, e), {
                                    children: [(0, n.jsx)(W.Z, {
                                        className: te().badgeVerifiedIcon,
                                        size: 16,
                                        color: l.colorString
                                    }), (0, n.jsx)(s.Text, {
                                        variant: "text-xs/bold",
                                        color: "header-primary",
                                        className: te().roleName,
                                        children: l.name
                                    })]
                                }))
                            }
                        })
                    }
                })
            }
            var pe = r(872017),
                ye = r(168075),
                me = r(633878);

            function ge(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function Oe(e, t) {
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

            function be(e, t) {
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

            function ve(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function je(e, t) {
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

            function xe(e, t) {
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
            const Ee = (0, ye.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    l = e.color,
                    a = void 0 === l ? "currentColor" : l,
                    c = xe(e, ["width", "height", "color"]);
                return (0, n.jsxs)("svg", je(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            ve(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, me.Z)(c)), {
                    width: r,
                    height: o,
                    viewBox: "0 0 64 64",
                    fill: "none",
                    children: [(0, n.jsx)("rect", {
                        width: "8",
                        height: "8",
                        fill: a
                    }), (0,
                        n.jsx)("rect", {
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
                    }), (0,
                        n.jsx)("rect", {
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
                    }), (0,
                        n.jsx)("rect", {
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
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    l = e.color,
                    a = void 0 === l ? E.Z.colors.INTERACTIVE_NORMAL : l,
                    c = e.colorClass,
                    s = void 0 === c ? "" : c,
                    u = be(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", Oe(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            ge(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, me.Z)(u)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: o,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M4.667 5.833c0 4.105 5.29 7.61 6.883 8.572.28.168.62.168.9 0 1.594-.963 6.883-4.467 6.883-8.572A3.833 3.833 0 0 0 15.5 2c-1.56 0-2.583.603-3.5 1.508C11.083 2.603 10.06 2 8.5 2a3.833 3.833 0 0 0-3.833 3.833ZM3.112 14.86a1 1 0 0 0-.829 1.243l.23.884a6 6 0 0 0 6.455 4.454L11 21.22V22a1 1 0 1 0 2 0v-.78l2.032.22a6 6 0 0 0 6.455-4.453l.23-.884a1 1 0 0 0-.83-1.243l-2.05-.286a6 6 0 0 0-6.097 3.07L12 19l-.74-1.357a6 6 0 0 0-6.097-3.069l-2.05.287Zm-.181-5.464a.607.607 0 0 1 1.138 0l.096.258a2 2 0 0 0 1.181 1.181l.258.096a.607.607 0 0 1 0 1.138l-.258.096a2 2 0 0 0-1.181 1.181l-.096.258a.607.607 0 0 1-1.138 0l-.096-.258a2 2 0 0 0-1.181-1.181l-.258-.096a.607.607 0 0 1 0-1.138l.258-.096a2 2 0 0 0 1.181-1.181l.096-.258Zm18.524.421a.486.486 0 0 0-.91 0l-.013.034a2 2 0 0 1-1.181 1.181l-.034.013a.486.486 0 0 0 0 .91l.034.013a2 2 0 0 1 1.181 1.181l.013.034a.486.486 0 0 0 .91 0l.013-.034a2 2 0 0 1 1.181-1.181l.034-.013a.486.486 0 0 0 0-.91l-.034-.013a2 2 0 0 1-1.181-1.181l-.013-.034Z",
                        clipRule: "evenodd",
                        className: s
                    })
                }))
            }));
            var we = r(567403),
                _e = r(473903),
                Pe = r(661123),
                Se = r(589677),
                Ce = 864e5;

            function Te(e, t, r) {
                return (0, c.e7)([], (function() {
                    return function(e, t, r) {
                        var n = t.maxDaysOld,
                            i = t.minDaysOld,
                            o = void 0 === i ? 0 : i,
                            l = we.Z.getGuild(e),
                            a = null == l ? void 0 : l.joinedAt;
                        if (null != r) {
                            var c = L.ZP.getMember(e, r);
                            a = null == (null == c ? void 0 : c.joinedAt) ? null : new Date(c.joinedAt)
                        }
                        if (null == a) return !1;
                        var s = Date.now() - a.getTime();
                        return (null == n || s <= Ce * n) && s >= Ce * o
                    }(e, t, r)
                }), [t, e, r])
            }
            var Ie = r(386364),
                Ne = r(827991),
                Le = r(61209),
                De = r(715107),
                Ae = r(731808),
                Re = r.n(Ae);
            const Me = function(e) {
                var t = e.guild,
                    r = e.message,
                    o = e.onClose,
                    l = Le.Z.getChannel(De.Z.getChannelId(t.id));
                i.useEffect((function() {
                    R.default.track($.rMx.OPEN_POPOUT, {
                        type: "New Member Badge Popout",
                        guild_id: t.id,
                        channel_id: null == l ? void 0 : l.id
                    })
                }), []);
                return null == l ? null : (0, n.jsx)(Ie.W_, {
                    children: (0, n.jsxs)("div", {
                        className: Re().popoutContainer,
                        children: [(0, n.jsxs)("div", {
                            className: Re().mainContent,
                            children: [(0, n.jsx)("div", {
                                className: Re().iconContainer,
                                children: (0, n.jsx)(Ee, {
                                    width: 40,
                                    height: 40
                                })
                            }), (0, n.jsxs)("div", {
                                children: [(0, n.jsx)(s.Heading, {
                                    variant: "heading-md/semibold",
                                    className: Re().header,
                                    children: h.Z.Messages.NEW_MEMBER_BADGE_TOOLTIP_TEXT
                                }), (0, n.jsx)(s.Text, {
                                    variant: "text-sm/normal",
                                    children: h.Z.Messages.NEW_MEMBER_BADGE_POPOUT_TEXT
                                })]
                            })]
                        }), (0, n.jsx)(s.Button, {
                            size: s.Button.Sizes.SMALL,
                            color: s.Button.Colors.BRAND,
                            className: Re().ctaButton,
                            innerClassName: Re().ctaButtonContent,
                            fullWidth: !0,
                            onClick: function() {
                                T.ZP.trackWithMetadata($.rMx.NEW_MEMBER_MENTION_CTA_CLICKED, {
                                    target_user_id: r.author.id
                                });
                                o();
                                (0, Ne.q)(r.author, l.id)
                            },
                            children: h.Z.Messages.MENTION_USER.format({
                                username: r.author.username
                            })
                        })]
                    })
                })
            };
            var Ze = r(231283),
                Ge = r.n(Ze);

            function ke(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function Ue(e, t) {
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

            function Fe(e) {
                var t, r, i, o, l, a, u = e.guild,
                    f = e.message;
                return (t = u.id, r = f.author.id, o = (0, c.e7)([L.ZP], (function() {
                    var e;
                    return (0, Pe.yE)(null !== (i = null === (e = L.ZP.getMember(t, r)) || void 0 === e ? void 0 : e.flags) && void 0 !== i ? i : 0, Se.q.DID_REJOIN)
                })), l = (0, c.e7)([we.Z], (function() {
                    var e;
                    return null === (e = we.Z.getGuild(t)) || void 0 === e ? void 0 : e.isNew()
                })), a = (0, c.e7)([_e.default], (function() {
                    var e;
                    return null === (e = _e.default.getUser(r)) || void 0 === e ? void 0 : e.bot
                })), Te(t, {
                    maxDaysOld: 7
                }, r) && !l && !a && !o) ? (0, n.jsx)(s.Popout, {
                    animation: s.Popout.Animation.TRANSLATE,
                    align: "center",
                    autoInvert: !0,
                    nudgeAlignIntoViewport: !0,
                    position: "right",
                    renderPopout: function(e) {
                        var t = e.closePopout;
                        return (0, n.jsx)(Me, {
                            guild: u,
                            message: f,
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
                                    return (0, n.jsx)("div", Ue(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = null != arguments[t] ? arguments[t] : {},
                                                n = Object.keys(r);
                                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                                            }))));
                                            n.forEach((function(t) {
                                                ke(e, t, r[t])
                                            }))
                                        }
                                        return e
                                    }({
                                        className: Ge().newMemberBadge
                                    }, e), {
                                        children: (0, n.jsx)(Ee, {
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
            var Be = r(834876),
                He = r(440922),
                Ve = r(591406),
                Ye = r(396580),
                ze = r(784426),
                qe = r(971611),
                We = r(217674),
                Xe = r(380652),
                Ke = r(897196),
                Je = r(996038),
                $e = r.n(Je);

            function Qe(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function et(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        Qe(e, t, r[t])
                    }))
                }
                return e
            }

            function tt(e, t) {
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
            const rt = function(e) {
                var t = e.roleIcon,
                    r = e.guild,
                    o = t.name;
                i.useEffect((function() {
                    R.default.track($.rMx.OPEN_POPOUT, et({
                        type: "Role Icon Popout",
                        guild_id: r.id
                    }, (0, T.v_)(Le.Z.getChannel(De.Z.getChannelId(r.id)))))
                }), []);
                var l = null != t.roleId ? r.roles[t.roleId] : void 0,
                    a = (0, Ye.Z)(l),
                    c = a ? h.Z.Messages.ROLE_ICON_POPOUT_DESCRIPTION_ROLE_SUBSCRIPTIONS.format({
                        name: o
                    }) : h.Z.Messages.ROLE_ICON_POPOUT_DESCRIPTION.format({
                        name: o
                    }),
                    u = tt(et({}, t), {
                        src: null == t.src ? t.src : (0, He.o)(t.src, 40),
                        size: 40
                    }),
                    f = a ? function() {
                        (0, ze.uL)($.Z5c.CHANNEL(r.id, Ke.oC.ROLE_SUBSCRIPTIONS))
                    } : function() {
                        (0, Ve.f)({
                            guildId: r.id,
                            location: {
                                section: $.jXE.ROLE_ICON_POPOUT
                            }
                        })
                    };
                return (0, n.jsx)(s.Dialog, {
                    children: (0, n.jsx)(Ie.W_, {
                        children: (0, n.jsxs)("div", {
                            className: $e().popoutContainer,
                            children: [(0, n.jsxs)("div", {
                                className: $e().mainContent,
                                children: [(0, n.jsx)("div", {
                                    className: $e().roleIconContainer,
                                    children: (0, n.jsx)(Xe.Z, tt(et({}, u), {
                                        enableTooltip: !1,
                                        className: $e().roleIcon,
                                        enableHeight: !1
                                    }))
                                }), (0, n.jsxs)("div", {
                                    className: $e().truncatingText,
                                    children: [(0, n.jsx)(s.Heading, {
                                        variant: "heading-md/semibold",
                                        className: $e().roleName,
                                        children: (0, n.jsx)(qe.Z, {
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
                                className: $e().ctaButton,
                                innerClassName: $e().ctaButtonContent,
                                fullWidth: !0,
                                onClick: f,
                                autoFocus: !0,
                                children: [(0, n.jsx)(We.Z, {
                                    width: 14,
                                    height: 14,
                                    className: $e().boosterBadge
                                }), h.Z.Messages.ROLE_ICON_POPOUT_CTA]
                            })]
                        })
                    })
                })
            };
            var nt = r(490355);

            function it(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function ot(e, t) {
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

            function lt(e, t) {
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

            function st(e, t) {
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
            const ut = (0, ye.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    l = e.color,
                    a = void 0 === l ? "currentColor" : l,
                    c = e.foreground,
                    s = st(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsxs)("svg", ct(function(e) {
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
                }({}, (0, me.Z)(s)), {
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
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    l = e.color,
                    a = void 0 === l ? E.Z.colors.INTERACTIVE_NORMAL : l,
                    c = e.colorClass,
                    s = void 0 === c ? "" : c,
                    u = lt(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", ot(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            it(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0,
                    me.Z)(u)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: o,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "m16.988 5.486 1.98-2.489H16.5a.5.5 0 0 1-.5-.5V1.5a.5.5 0 0 1 .5-.5h5.333a.5.5 0 0 1 .5.5v1.112a1 1 0 0 1-.26.674l-3.39 3.717H21.5a.5.5 0 0 1 .5.5V8.5a.5.5 0 0 1-.5.5h-5.333a.5.5 0 0 1-.5-.5V7.496a1.009 1.009 0 0 1 .217-.623l1.103-1.386ZM19 11.5a.5.5 0 0 0-.5-.5h-2.333a2.5 2.5 0 0 1-2.5-2.5V7.496a3 3 0 0 1 .652-1.868l.479-.601c.183-.231.124-.568-.083-.78a2.492 2.492 0 0 1-.701-1.483.944.944 0 0 0-.066-.24.744.744 0 0 1-.022-.065 2 2 0 0 0-3.852 0 .623.623 0 0 1-.38.43A7.003 7.003 0 0 0 5 9.5v2.086a.5.5 0 0 1-.128.334L3.77 13.144A3 3 0 0 0 3 15.151v.279c0 .668.336 1.29.946 1.564 1.315.593 4 1.506 8.054 1.506 4.055 0 6.74-.913 8.054-1.506.61-.274.946-.896.946-1.564v-.279a3 3 0 0 0-.77-2.007l-1.102-1.224a.5.5 0 0 1-.128-.334V11.5Zm-9.82 8.344A.16.16 0 0 0 9 20a3 3 0 1 0 6 0 .16.16 0 0 0-.18-.156c-.852.097-1.792.156-2.82.156a24.86 24.86 0 0 1-2.82-.156Z",
                        clipRule: "evenodd",
                        className: s
                    })
                }))
            }));
            var ft = r(574948),
                dt = r.n(ft);

            function ht(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function pt(e, t) {
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

            function yt() {
                return (0, n.jsx)(s.Tooltip, {
                    text: h.Z.Messages.SUPPRESS_NOTIFICATIONS_TOOLTIP,
                    children: function(e) {
                        return (0, n.jsx)("div", pt(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))));
                                n.forEach((function(t) {
                                    ht(e, t, r[t])
                                }))
                            }
                            return e
                        }({
                            className: dt().badge
                        }, e), {
                            children: (0, n.jsx)(ut, {
                                width: "1rem",
                                height: "1rem"
                            })
                        }))
                    }
                })
            }
            var mt = r(736626),
                gt = r(379991),
                Ot = r(682776),
                bt = r(64875),
                vt = r(775173),
                jt = r(930948),
                xt = r(42028),
                Et = r(694278),
                wt = r(185759),
                _t = r(927570),
                Pt = r.n(_t);

            function St(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function Ct(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function Tt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        Ct(e, t, r[t])
                    }))
                }
                return e
            }

            function It(e, t) {
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

            function Nt(e, t) {
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
                    if ("string" == typeof e) return St(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return St(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Lt(e) {
                var t, r = e.message,
                    i = e.messageAuthor,
                    o = e.compact,
                    a = e.animate,
                    c = e.guildId,
                    s = e.onClick,
                    f = e.onContextMenu,
                    d = e.onMouseDown,
                    h = e.onKeyDown,
                    p = e.showCommunicationDisabledStyles,
                    y = void 0 !== p && p,
                    m = e.className,
                    g = i.guildMemberAvatar,
                    O = r.author,
                    b = o ? 32 : 80;
                t = null != g && null != c ? (0, vt.JM)({
                    guildId: c,
                    userId: O.id,
                    avatar: g,
                    canAnimate: a,
                    size: b
                }) : O.getAvatarURL(void 0, b, a);
                var v, j = (0, vt.NZ)({
                    avatarDecoration: O.avatarDecoration,
                    size: (0, u.y9)(b),
                    canAnimate: a
                });
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("img", {
                        onClick: s,
                        onContextMenu: f,
                        onMouseDown: d,
                        onKeyDown: h,
                        src: t,
                        "aria-hidden": !0,
                        className: l()(m, (v = {}, Ct(v, Pt().avatar, !0), Ct(v, Pt().compact, o), Ct(v, Pt().clickable, null != s), Ct(v, Pt().communicationDisabledOpacity, y), v)),
                        alt: " "
                    }), null == j || o ? null : (0, n.jsx)("img", {
                        className: Pt().avatarDecoration,
                        src: j,
                        alt: " ",
                        "aria-hidden": !0
                    })]
                })
            }

            function Dt(e, t, r) {
                var i = e.message,
                    o = e.channel,
                    l = e.author,
                    a = e.compact,
                    c = void 0 !== a && a,
                    s = e.onContextMenu,
                    u = e.showUsernamePopout,
                    f = e.onClickUsername,
                    d = e.onPopoutRequestClose;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(wt.Z, {
                        message: i,
                        channel: o,
                        author: l,
                        compact: c,
                        showPopout: u,
                        renderPopout: t,
                        onClick: f,
                        onContextMenu: s,
                        onPopoutRequestClose: d,
                        decorations: r,
                        renderRemixTag: !0
                    }), c && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("i", {
                            className: Pt().separator,
                            children: ":"
                        }), " "]
                    })]
                })
            }

            function At(e) {
                var t, r = e.props,
                    o = e.guildId,
                    l = e.handleRenderPopout,
                    u = e.showCommunicationDisabledStyles,
                    f = void 0 !== u && u,
                    d = e.className,
                    h = r.message,
                    p = r.author,
                    y = r.compact,
                    m = void 0 !== y && y,
                    g = r.subscribeToGroupId,
                    O = r.animate,
                    b = void 0 === O || O,
                    v = r.onContextMenu,
                    j = r.onClickAvatar,
                    x = r.onPopoutRequestClose,
                    E = r.showAvatarPopout,
                    w = Nt(i.useState(!1), 2),
                    _ = w[0],
                    P = w[1],
                    S = !i.useContext(s.AccessibilityPreferencesContext).reducedMotion.enabled && (null != g ? _ : b),
                    C = (0, c.e7)([gt.ZP], (function() {
                        return null !== (t = r.displayCompactAvatars) && void 0 !== t ? t : gt.ZP.displayCompactAvatars
                    })),
                    T = null != h.messageReference && null != h.webhookId,
                    I = h.author.id;
                i.useEffect((function() {
                    if (null != g) {
                        jt.S.subscribeKeyed($.LPv.ANIMATE_CHAT_AVATAR, "".concat(g, ":").concat(I), P);
                        return function() {
                            jt.S.unsubscribeKeyed($.LPv.ANIMATE_CHAT_AVATAR, "".concat(g, ":").concat(I), P)
                        }
                    }
                }), [I, g]);
                if (!m || C) return null != l && null != E ? (0, n.jsx)(s.Popout, {
                    preload: T ? void 0 : function() {
                        return (0, mt.Z)(h.author.id, null != p.guildMemberAvatar && null != o ? (0, vt.JM)({
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
                    onRequestClose: x,
                    children: function(e) {
                        return Lt({
                            message: h,
                            messageAuthor: p,
                            compact: m,
                            animate: S,
                            guildId: o,
                            onClick: j,
                            onContextMenu: v,
                            onMouseDown: e.onMouseDown,
                            onKeyDown: e.onKeyDown,
                            showCommunicationDisabledStyles: f,
                            className: d
                        })
                    }
                }) : Lt({
                    message: h,
                    messageAuthor: p,
                    compact: m,
                    animate: S,
                    guildId: o,
                    onClick: j,
                    onContextMenu: v,
                    onMouseDown: void 0,
                    onKeyDown: void 0,
                    showCommunicationDisabledStyles: f,
                    className: d
                })
            }

            function Rt(e) {
                var t = e.message,
                    r = e.avatar,
                    i = e.username,
                    o = e.usernameSpanId,
                    a = e.usernameClassName,
                    c = e.compact,
                    u = e.showTimestamp,
                    f = e.showTimestampOnHover,
                    d = e.ariaLabelledBy,
                    h = e.ariaDescribedBy,
                    p = e.className,
                    y = e.messageClassname,
                    m = e.badges;
                return (0, n.jsxs)(n.Fragment, {
                    children: [!c && r, (0, n.jsxs)(s.H, {
                        className: l()(Pt().header, p),
                        "aria-describedby": h,
                        "aria-labelledby": d,
                        children: [u && c && (0, n.jsx)(xt.Z, {
                            id: (0, Be.Dv)(t),
                            compact: !0,
                            timestamp: t.timestamp,
                            isVisibleOnlyOnHover: f,
                            className: y,
                            isInline: !1
                        }), c && r, (0, n.jsx)("span", {
                            id: o,
                            className: a,
                            children: i
                        }), u && !c && (0, n.jsx)(xt.Z, {
                            id: (0, Be.Dv)(t),
                            timestamp: t.timestamp,
                            className: y
                        }), null != m && m.length > 0 ? (0, n.jsx)("div", {
                            className: Pt().badgesContainer,
                            children: m
                        }) : null]
                    })]
                })
            }

            function Mt(e) {
                var t, r = e.message,
                    o = e.repliedMessage,
                    a = e.compact,
                    u = void 0 !== a && a,
                    f = e.renderPopout,
                    d = e.showTimestampOnHover,
                    p = e.roleIcon,
                    y = e.subscribeToGroupId,
                    m = e.hideTimestamp,
                    g = e.className,
                    b = e.channel,
                    v = i.useMemo((function() {
                        return null != f ? function(e) {
                            return f(e, r)
                        } : void 0
                    }), [f, r]),
                    j = Nt((0, pe.ZP)(r.author.id, e.guildId), 2)[1],
                    x = (0, c.e7)([we.Z], (function() {
                        return we.Z.getGuild(e.guildId)
                    }), [e.guildId]),
                    E = null != r.author && null != x && Ot.Z.canManageUser($.Plq.MODERATE_MEMBERS, r.author, x),
                    w = j && E,
                    _ = At({
                        props: e,
                        guildId: e.guildId,
                        handleRenderPopout: v,
                        showCommunicationDisabledStyles: w
                    }),
                    P = (0, c.e7)([gt.ZP], (function() {
                        return null !== (t = e.displayCompactAvatars) && void 0 !== t ? t : gt.ZP.displayCompactAvatars
                    })),
                    S = u && !P || null == p || null == x ? u && !P || null == p ? null : (0, n.jsx)(Xe.Z, It(Tt({}, p), {
                        className: Pt().roleIcon
                    }), "role-icon-children") : (0, n.jsx)(s.Popout, {
                        animation: s.Popout.Animation.TRANSLATE,
                        align: "center",
                        autoInvert: !0,
                        nudgeAlignIntoViewport: !0,
                        position: "right",
                        renderPopout: function() {
                            return (0, n.jsx)(rt, {
                                roleIcon: p,
                                guild: x
                            })
                        },
                        children: function(e) {
                            var t = e.onClick;
                            return (0, n.jsx)(Xe.Z, It(Tt({}, p), {
                                className: Pt().roleIcon,
                                onClick: t
                            }))
                        }
                    }, "role-icon-children"),
                    C = (0, Et.x)({
                        message: r,
                        channel: b,
                        user: null == r ? void 0 : r.author,
                        compact: u,
                        isRepliedMessage: !1
                    }),
                    T = [];
                null != S && T.push(S);
                null != x && T.push((0, n.jsx)(Fe, {
                    guild: x,
                    message: r
                }, "new-member"));
                null != x && r.author.isClyde() && T.push((0, n.jsx)(O, {
                    guild: x
                }, "clyde-personality"));
                null != b && null != x && T.push((0, n.jsx)(he, {
                    guild: x,
                    channel: b,
                    userId: r.author.id
                }, "connections"));
                var I = [];
                (0, Pe.yE)(r.flags, $.iLy.SUPPRESS_NOTIFICATIONS) && I.push((0, n.jsx)(yt, {}, "suppress-notifications"));
                var N = {};
                N[wt.a.SYSTEM_TAG] = C;
                N[wt.a.BADGES] = T;
                var L, D = Dt(e, v, N),
                    A = (0, Be.XX)(r, y),
                    R = (0, Be.Dv)(r),
                    M = m ? "".concat(A) : "".concat(A, " ").concat(R),
                    Z = (null == o ? void 0 : o.state) === nt.Y.LOADED ? (0, Be.Gq)(r) : void 0,
                    G = !0 !== m;
                return (0, n.jsx)(Rt, {
                    message: r,
                    avatar: _,
                    username: (0, n.jsxs)(n.Fragment, {
                        children: [w && (0, n.jsx)(s.Tooltip, {
                            text: h.Z.Messages.GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY,
                            children: function(e) {
                                return (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)(bt.Z, It(Tt({}, e), {
                                        width: 12,
                                        height: 12,
                                        className: u ? Pt().compactCommunicationDisabled : Pt().communicationDisabled
                                    })), (0, n.jsx)(s.HiddenVisually, {
                                        children: h.Z.Messages.GUILD_COMMUNICATION_DISABLED_BOTTOM_SHEET_TITLE
                                    })]
                                })
                            }
                        }), D]
                    }),
                    usernameSpanId: (0, Be.XX)(r, y),
                    usernameClassName: l()(Pt().headerText, (L = {}, Ct(L, Pt().hasRoleIcon, null != S), Ct(L, Pt().hasBadges, null != C || I.length > 0), L)),
                    compact: u,
                    showTimestamp: G,
                    showTimestampOnHover: d,
                    ariaLabelledBy: M,
                    ariaDescribedBy: Z,
                    className: g,
                    badges: I
                })
            }
        }
    }
]);