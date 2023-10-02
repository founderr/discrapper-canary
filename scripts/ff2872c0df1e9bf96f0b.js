"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [15550, 58635, 76156], {
        372956: (e, t, n) => {
            n.d(t, {
                x: () => i,
                C: () => u
            });
            var r = n(744564),
                o = n(758635);

            function i(e) {
                var t = e.omitUserIds,
                    n = e.guild,
                    i = e.channel,
                    u = e.applicationId,
                    a = e.inviteTargetType;
                return (0, o.W)().then((function() {
                    r.Z.dispatch({
                        type: "LOAD_INVITE_SUGGESTIONS",
                        omitUserIds: null != t ? t : new Set,
                        guild: n,
                        channel: i,
                        applicationId: u,
                        inviteTargetType: a
                    })
                }))
            }

            function u(e) {
                r.Z.dispatch({
                    type: "INVITE_SUGGESTIONS_SEARCH",
                    query: e
                })
            }
        },
        758635: (e, t, n) => {
            n.d(t, {
                W: () => a
            });
            var r = n(281110),
                o = n(744564),
                i = n(239734),
                u = n(2590);

            function a() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (i.Z.needsRefresh()) {
                    o.Z.dispatch({
                        type: "LOAD_USER_AFFINITIES"
                    });
                    return r.ZP.get({
                        url: u.ANM.USER_AFFINITIES,
                        retries: e ? 3 : 0,
                        oldFormErrors: !0
                    }).then((function(e) {
                        var t = e.body;
                        o.Z.dispatch({
                            type: "LOAD_USER_AFFINITIES_SUCCESS",
                            affinities: t
                        })
                    }), (function() {
                        o.Z.dispatch({
                            type: "LOAD_USER_AFFINITIES_FAILURE"
                        })
                    }))
                }
                return Promise.resolve()
            }
        },
        621647: (e, t, n) => {
            n.d(t, {
                x: () => s
            });
            var r = n(473903),
                o = n(775173),
                i = n(72580),
                u = n(2590);

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function c(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case u.d4z.DM:
                        var a = c(e.recipients.map(r.default.getUser).filter(i.lm), 1),
                            s = a[0];
                        return null == s ? null : s.getAvatarURL(void 0, t, n);
                    case u.d4z.GROUP_DM:
                        return o.ZP.getChannelIconURL({
                            id: e.id,
                            icon: e.icon,
                            applicationId: e.getApplicationId(),
                            size: t
                        })
                }
            }
        },
        702264: (e, t, n) => {
            n.d(t, {
                CX: () => y,
                j7: () => b,
                Kt: () => _,
                I5: () => m,
                g_: () => S,
                z5: () => g,
                c6: () => I,
                Bn: () => C,
                Xo: () => T,
                JO: () => w
            });
            var r = n(281110),
                o = n(744564),
                i = n(285991),
                u = n(755550),
                a = n(876986),
                c = n(2590);

            function s(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function l(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            s(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            s(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        f(e, t, n[t])
                    }))
                }
                return e
            }
            var d = function(e, t) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = t.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
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

            function y(e, t) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = l((function(e, t) {
                    return d(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, E(e, t)];
                            case 1:
                                return [2, n.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function E(e, t) {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = l((function(e, t) {
                    var n, i, u, s;
                    return d(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                o.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_SAVE_START"
                                });
                                l.label = 1;
                            case 1:
                                l.trys.push([1, 3, , 4]);
                                return [4, r.ZP.patch({
                                    url: c.ANM.GUILD_CLYDE_SETTINGS(e),
                                    oldFormErrors: !0,
                                    body: t
                                })];
                            case 2:
                                if ((n = l.sent()).ok) {
                                    o.Z.dispatch({
                                        type: "CLYDE_GUILD_SETTINGS_SAVE_SUCCESS",
                                        settings: n.body.settings
                                    });
                                    null != n.body.guild_member_profile && o.Z.dispatch(p({
                                        type: "USER_PROFILE_UPDATE_SUCCESS",
                                        userId: a.fL,
                                        profileEffectID: void 0
                                    }, n.body.guild_member_profile));
                                    null != n.body.guild_member && o.Z.dispatch({
                                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                                        guildMember: n.body.guild_member,
                                        guildId: e
                                    });
                                    return [2, n.body.settings]
                                }
                                o.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_SAVE_FAIL",
                                    errors: null !== (u = null === (i = n.body) || void 0 === i ? void 0 : i.errors) && void 0 !== u ? u : {}
                                });
                                return [2, null];
                            case 3:
                                s = l.sent();
                                o.Z.dispatch({
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

            function b(e) {
                o.Z.dispatch({
                    type: "CLYDE_SET_PENDING_PERSONALITY",
                    personality: e
                })
            }

            function _(e) {
                o.Z.dispatch({
                    type: "CLYDE_SET_PENDING_NICK",
                    nick: null != e ? e : ""
                })
            }

            function m(e) {
                o.Z.dispatch({
                    type: "CLYDE_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function S(e) {
                o.Z.dispatch({
                    type: "CLYDE_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function g(e) {
                o.Z.dispatch({
                    type: "CLYDE_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function I() {
                o.Z.dispatch({
                    type: "CLYDE_RESET_PENDING_CHANGES"
                })
            }

            function C(e) {
                return O.apply(this, arguments)
            }

            function O() {
                O = l((function(e) {
                    var t, n, s = arguments;
                    return d(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                if (!(s.length > 1 && void 0 !== s[1] && s[1]) && !u.Z.shouldFetchSettings(e)) return [2];
                                (0, i.In)(a.fL, {
                                    guildId: e
                                });
                                o.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_FETCH_START",
                                    guildId: e
                                });
                                l.label = 1;
                            case 1:
                                l.trys.push([1, 3, , 4]);
                                return [4, r.ZP.get({
                                    url: c.ANM.GUILD_CLYDE_SETTINGS(e),
                                    oldFormErrors: !0
                                })];
                            case 2:
                                t = l.sent();
                                n = t.body;
                                o.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_FETCH_SUCCESS",
                                    guildId: n.guild_id,
                                    settings: n
                                });
                                return [3, 4];
                            case 3:
                                l.sent();
                                o.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_FETCH_FAIL",
                                    guildId: e
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }));
                return O.apply(this, arguments)
            }

            function T(e) {
                return A.apply(this, arguments)
            }

            function A() {
                return (A = l((function(e) {
                    var t, n;
                    return d(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                if (null != u.Z.getProfile(e)) return [2];
                                o.Z.dispatch({
                                    type: "CLYDE_PROFILE_FETCH_START",
                                    clydeProfileId: e
                                });
                                i.label = 1;
                            case 1:
                                i.trys.push([1, 3, , 4]);
                                return [4, r.ZP.get({
                                    url: c.ANM.CLYDE_PROFILES(e),
                                    oldFormErrors: !0
                                })];
                            case 2:
                                t = i.sent();
                                n = t.body;
                                o.Z.dispatch({
                                    type: "CLYDE_PROFILE_FETCH_SUCCESS",
                                    profile: n
                                });
                                return [3, 4];
                            case 3:
                                i.sent();
                                o.Z.dispatch({
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

            function w(e) {
                return P.apply(this, arguments)
            }

            function P() {
                return (P = l((function(e) {
                    var t;
                    return d(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                n.trys.push([0, 2, , 3]);
                                return [4, r.ZP.post({
                                    url: c.ANM.CLYDE_PROFILES_CREATE(e),
                                    oldFormErrors: !0
                                })];
                            case 1:
                                (t = n.sent()).ok && o.Z.dispatch({
                                    type: "CLYDE_PROFILE_CREATE_SUCCESS",
                                    profile: t.body
                                });
                                return [2, t.body];
                            case 2:
                                n.sent();
                                return [2, null];
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        755550: (e, t, n) => {
            n.d(t, {
                Z: () => C
            });
            var r = n(202351),
                o = n(744564);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
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

            function l(e) {
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
            var f, p, d, y, h, E = !1,
                v = null,
                b = {},
                _ = {},
                m = {},
                S = {};

            function g() {
                f = void 0;
                p = void 0;
                d = void 0;
                y = void 0;
                h = void 0;
                v = null
            }
            var I = function(e) {
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
                var t = l(n);

                function n() {
                    i(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getSettings = function(e) {
                    if (null != e) return m[e]
                };
                r.getProfile = function(e) {
                    return null == e ? null : b[e]
                };
                r.getPendingPersonality = function() {
                    return f
                };
                r.getPendingNick = function() {
                    return p
                };
                r.getErrors = function() {
                    return v
                };
                r.hasPendingChanges = function() {
                    return void 0 !== f || void 0 !== p || void 0 !== d || void 0 !== y || void 0 !== h
                };
                r.getPendingUpdates = function() {
                    return {
                        pendingAvatar: d,
                        pendingNick: p,
                        pendingPersonality: f,
                        pendingBanner: y,
                        pendingThemeColors: h
                    }
                };
                r.isSavingSettings = function() {
                    return E
                };
                r.isFetchingSettings = function(e) {
                    var t;
                    return null === (t = S[e]) || void 0 === t ? void 0 : t.isFetching
                };
                r.shouldFetchSettings = function(e) {
                    var t, n, r = null !== (t = S[e]) && void 0 !== t ? t : {
                            isFetching: !1
                        },
                        o = Date.now() - (null !== (n = r.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 36e5;
                    return !(null == r ? void 0 : r.isFetching) && o
                };
                r.isFetchingProfile = function(e) {
                    var t;
                    return null === (t = _[e]) || void 0 === t ? void 0 : t.isFetching
                };
                return n
            }(r.ZP.Store);
            I.displayName = "ClydeStore";
            const C = new I(o.Z, {
                CLYDE_GUILD_SETTINGS_FETCH_START: function(e) {
                    var t = e.guildId,
                        n = S[t];
                    S[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_GUILD_SETTINGS_FETCH_SUCCESS: function(e) {
                    var t = e.guildId,
                        n = e.settings;
                    S[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    };
                    m[t] = n
                },
                CLYDE_GUILD_SETTINGS_FETCH_FAIL: function(e) {
                    var t = e.guildId,
                        n = S[t];
                    S[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_SET_PENDING_PERSONALITY: function(e) {
                    var t = e.personality;
                    f = t
                },
                CLYDE_SET_PENDING_NICK: function(e) {
                    var t = e.nick;
                    p = t
                },
                CLYDE_SET_PENDING_AVATAR: function(e) {
                    var t = e.avatar;
                    d = t
                },
                CLYDE_SET_PENDING_BANNER: function(e) {
                    var t = e.banner;
                    y = t
                },
                CLYDE_SET_PENDING_THEME_COLORS: function(e) {
                    var t = e.themeColors;
                    h = t
                },
                CLYDE_GUILD_SETTINGS_SAVE_START: function() {
                    v = null;
                    E = !0
                },
                CLYDE_GUILD_SETTINGS_SAVE_SUCCESS: function(e) {
                    var t = e.settings;
                    E = !1;
                    m[t.guild_id] = t;
                    g()
                },
                CLYDE_GUILD_SETTINGS_SAVE_FAIL: function(e) {
                    E = !1;
                    v = e.errors
                },
                CLYDE_RESET_PENDING_CHANGES: g,
                CLYDE_PROFILE_FETCH_START: function(e) {
                    var t = e.clydeProfileId,
                        n = _[t];
                    _[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_FETCH_SUCCESS: function(e) {
                    var t = e.profile;
                    _[t.clyde_profile_id] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    };
                    b[t.clyde_profile_id] = t
                },
                CLYDE_PROFILE_FETCH_FAIL: function(e) {
                    var t = e.clydeProfileId,
                        n = _[t];
                    _[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_CREATE_SUCCESS: function(e) {
                    var t = e.profile;
                    b[t.clyde_profile_id] = t
                }
            })
        },
        548144: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => M
            });
            var r = n(785893),
                o = n(667294),
                i = n(202351),
                u = n(304548),
                a = n(761953),
                c = n(372956),
                s = n(720419),
                l = n(153686),
                f = n(621647),
                p = n(773011),
                d = n(567403),
                y = n(537335),
                h = n(840922),
                E = n(473903),
                v = n(282898),
                b = n(169649),
                _ = n(316388),
                m = n(775173),
                S = n(691797),
                g = n(786502),
                I = n(421281),
                C = n(749565),
                O = n(702264),
                T = n(2590),
                A = n(473708),
                w = n(232060),
                P = n.n(w);

            function N(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function R(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function L(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            R(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            R(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function D(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function F(e, t) {
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
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function Z(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || x(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function U(e) {
                return function(e) {
                    if (Array.isArray(e)) return N(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || x(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function x(e, t) {
                if (e) {
                    if ("string" == typeof e) return N(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? N(e, t) : void 0
                }
            }
            var G = function(e, t) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = t.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
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

            function M(e) {
                var t = e.guildId,
                    n = j(e, ["guildId"]),
                    f = Z(o.useState(""), 2),
                    p = f[0],
                    d = f[1],
                    h = Z(o.useState([]), 2),
                    E = h[0],
                    b = h[1],
                    _ = Z(o.useState(""), 2),
                    m = _[0],
                    S = _[1],
                    I = n.onClose,
                    C = "".concat(window.location.origin).concat(T.ANM.CLYDE_PROFILES(m)),
                    w = (0, i.Wu)([y.Z], (function() {
                        return y.Z.getInviteSuggestionRows()
                    }));
                o.useEffect((function() {
                    (0, c.x)({
                        omitUserIds: new Set
                    })
                }), []);
                o.useEffect((function() {
                    (0, O.JO)(t).then((function(e) {
                        if (null != e) S(null == e ? void 0 : e.clyde_profile_id);
                        else {
                            (0, u.showToast)((0, u.createToast)(A.Z.Messages.CLYDE_PROFILE_ERROR_MESSAGE_GENERIC, u.ToastType.FAILURE));
                            I()
                        }
                    }))
                }), [t, I]);
                o.useEffect((function() {
                    return (0, c.C)(p)
                }), [p]);
                var N = o.useCallback(L((function() {
                    var e;
                    return G(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                e = function(e, t) {
                                    switch (e.type) {
                                        case g.bm.DM:
                                        case g.bm.FRIEND:
                                            0;
                                            break;
                                        case g.bm.GROUP_DM:
                                            0;
                                            break;
                                        case g.bm.CHANNEL:
                                            0
                                    }
                                    return e.type === g.bm.GROUP_DM || e.type === g.bm.CHANNEL ? s.Z.sendClydeProfileOverride(e.item.id, t, l.Z.CLYDE_PROFILE_SHARE_MODAL, null) : e.type === g.bm.DM || e.type === g.bm.FRIEND ? a.Z.ensurePrivateChannel(e.item.id).then((function(e) {
                                        return s.Z.sendClydeProfileOverride(e, C, l.Z.CLYDE_PROFILE_SHARE_MODAL, null)
                                    })) : Promise.resolve()
                                };
                                0;
                                0;
                                0;
                                return [4, y.Z.getInviteSuggestionRows().filter((function(e) {
                                    return E.includes(e.item.id)
                                })).map((function(t) {
                                    return e(t, C)
                                }))];
                            case 1:
                                t.sent();
                                n.onClose();
                                return [2]
                        }
                    }))
                })), [E, n, C]);
                return (0, r.jsxs)(u.ModalRoot, F(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            D(e, t, n[t])
                        }))
                    }
                    return e
                }({}, n), {
                    className: P().modalRoot,
                    children: [(0, r.jsxs)(u.ModalHeader, {
                        className: P().header,
                        children: [(0, r.jsx)(u.Heading, {
                            variant: "heading-md/semibold",
                            children: A.Z.Messages.CLYDE_PROFILE_SHARE_HEADER
                        }), (0, r.jsx)(u.ModalCloseButton, {
                            onClick: n.onClose
                        })]
                    }), (0, r.jsxs)(u.ModalContent, {
                        className: P().modalContent,
                        children: [(0, r.jsx)(v.Z, {
                            className: P().searchBar,
                            placeholder: A.Z.Messages.SEARCH,
                            label: A.Z.Messages.SEARCH,
                            searchTerm: p,
                            onChange: function(e) {
                                return d(e)
                            },
                            onClear: function() {
                                return d("")
                            }
                        }), w.map((function(e, t) {
                            return (0, r.jsxs)(o.Fragment, {
                                children: [0 === t ? null : (0, r.jsx)("div", {
                                    className: P().rowDivider
                                }), (0, r.jsx)(k, {
                                    row: e,
                                    onClick: function() {
                                        var t = U(E);
                                        t.includes(e.item.id) ? t = t.filter((function(t) {
                                            return t !== e.item.id
                                        })) : t.push(e.item.id);
                                        b(t)
                                    },
                                    checked: E.includes(e.item.id)
                                })]
                            }, e.item.id)
                        }))]
                    }), (0, r.jsxs)(u.ModalFooter, {
                        className: P().footer,
                        children: [(0, r.jsx)("div", {
                            className: P().footerDivider
                        }), (0, r.jsxs)("div", {
                            className: P().copySendBar,
                            children: [(0, r.jsx)(Y, {
                                link: C
                            }), (0, r.jsx)(u.Button, {
                                onClick: N,
                                disabled: E.length <= 0 || "" === m,
                                children: A.Z.Messages.SEND
                            })]
                        })]
                    })]
                }))
            }

            function k(e) {
                var t = e.row,
                    n = e.onClick,
                    o = e.checked,
                    i = null,
                    a = null,
                    c = null;
                switch (t.type) {
                    case g.bm.DM:
                    case g.bm.FRIEND:
                        i = (0, r.jsx)(u.Avatar, {
                            size: u.AvatarSizes.SIZE_40,
                            src: t.item.getAvatarURL(null, 128, !1),
                            "aria-label": t.item.username
                        });
                        a = C.ZP.getName(t.item);
                        c = C.ZP.getUserTag(t.item);
                        break;
                    case g.bm.GROUP_DM:
                        var s = (0, f.x)(t.item),
                            l = (0, p.F6)(t.item, E.default, h.Z);
                        i = (0, r.jsx)(u.Avatar, {
                            src: s,
                            "aria-label": l,
                            size: u.AvatarSizes.SIZE_40
                        });
                        a = (0, p.F6)(t.item, E.default, h.Z);
                        break;
                    case g.bm.CHANNEL:
                        var y = t.item,
                            v = d.Z.getGuild(y.guild_id);
                        if (null == v) return null;
                        a = "#".concat((0, p.F6)(y, E.default, h.Z));
                        c = v.name;
                        if (null != v.icon) {
                            var b = m.ZP.getGuildIconURL({
                                id: y.guild_id,
                                icon: v.icon,
                                size: 40
                            });
                            i = (0, r.jsx)(u.Avatar, {
                                src: b,
                                "aria-label": a,
                                size: u.AvatarSizes.SIZE_40
                            })
                        } else {
                            var _ = (0, I.Zg)(v.name);
                            i = (0, r.jsx)("div", {
                                className: P().acronym,
                                "aria-hidden": !0,
                                children: _
                            })
                        }
                }
                return (0, r.jsxs)(u.Clickable, {
                    onClick: n,
                    className: P().rowContainer,
                    children: [(0, r.jsxs)("div", {
                        className: P().rowLeft,
                        children: [(0, r.jsx)("div", {
                            className: P().rowAvatar,
                            children: i
                        }), (0, r.jsxs)("div", {
                            className: P().rowNameContainer,
                            children: [(0, r.jsx)(u.Text, {
                                variant: "text-md/semibold",
                                className: P().rowName,
                                children: a
                            }), (0, r.jsx)(u.Text, {
                                variant: "text-xs/medium",
                                className: P().rowSubName,
                                children: c
                            })]
                        })]
                    }), (0, r.jsx)(u.Checkbox, {
                        value: o,
                        type: u.Checkbox.Types.INVERTED,
                        displayOnly: !0,
                        className: P().rowRight
                    })]
                })
            }

            function Y(e) {
                var t = e.link,
                    n = Z(o.useState(!1), 2),
                    i = n[0],
                    a = n[1];
                o.useEffect((function() {
                    var e;
                    i && (e = setTimeout((function() {
                        a(!1)
                    }), 1e3));
                    return function() {
                        null != e && clearTimeout(e)
                    }
                }), [i]);
                return (0, r.jsxs)(u.Button, {
                    look: u.Button.Looks.LINK,
                    color: u.Button.Colors.LINK,
                    onClick: function() {
                        (0, S.JG)(t);
                        a(!0)
                    },
                    innerClassName: P().copyButton,
                    children: [i ? (0, r.jsx)(b.Z, {}) : (0, r.jsx)(_.Z, {}), i ? A.Z.Messages.COPIED : A.Z.Messages.COPY_LINK]
                })
            }
        },
        537335: (e, t, n) => {
            n.d(t, {
                Z: () => F
            });
            var r = n(202351),
                o = n(744564),
                i = n(980604),
                u = n(72580),
                a = n(786502),
                c = n(61209),
                s = n(840922),
                l = n(239734),
                f = n(2590),
                p = n(718634);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function y(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function E(e, t) {
                return !t || "object" !== _(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function v(e, t) {
                v = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return v(e, t)
            }

            function b(e) {
                return function(e) {
                    if (Array.isArray(e)) return d(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var _ = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function m(e) {
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
                    var n, r = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return E(this, n)
                }
            }
            var S, g, I, C, O, T, A, w = new Set,
                P = [],
                N = new Map;

            function R(e) {
                var t = new Set,
                    n = null == C || A === p.Iq.EMBEDDED_APPLICATION ? void 0 : C.id,
                    r = (0, a.rh)(w, n);
                null == r || s.Z.isBlocked(r.id) || t.add(r.id);
                var o = !0,
                    d = !1,
                    y = void 0;
                try {
                    for (var h, E = l.Z.getUserAffinitiesUserIds()[Symbol.iterator](); !(o = (h = E.next()).done); o = !0) {
                        var v = h.value;
                        t.add(v)
                    }
                } catch (e) {
                    d = !0;
                    y = e
                } finally {
                    try {
                        o || null == E.return || E.return()
                    } finally {
                        if (d) throw y
                    }
                }
                var b = new Set;
                if (A === p.Iq.EMBEDDED_APPLICATION) {
                    i.Z.getChannelHistory().map((function(e) {
                        return c.Z.getChannel(e)
                    })).filter(u.lm).filter((function(e) {
                        return e.type === f.d4z.GUILD_TEXT
                    })).slice(0, 3).forEach((function(e) {
                        return b.add(e.id)
                    }))
                }
                return (0, a.an)({
                    query: e,
                    omitUserIds: w,
                    suggestedUserIds: t,
                    maxRowsWithoutQuery: 100,
                    omitGuildId: n,
                    suggestedChannelIds: b,
                    inviteTargetType: A
                })
            }

            function L(e) {
                P = e;
                N = new Map;
                e.forEach((function(e, t) {
                    N.set(e, {
                        index: t
                    })
                }))
            }
            var D = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && v(e, t)
                }(n, e);
                var t = m(n);

                function n() {
                    y(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(s.Z, l.Z)
                };
                r.getInviteSuggestionRows = function() {
                    return P
                };
                r.getTotalSuggestionsCount = function() {
                    return g
                };
                r.getInitialCounts = function() {
                    return S
                };
                r.getSelectedInviteMetadata = function(e) {
                    var t = N.get(e),
                        n = l.Z.getUserAffinitiesUserIds();
                    return null != t ? {
                        rowNum: t.index,
                        isAffinitySuggestion: e.isSuggested,
                        numTotal: P.length,
                        numAffinityConnections: n.size,
                        isFiltered: I
                    } : null
                };
                return n
            }(r.ZP.Store);
            D.displayName = "InviteSuggestionsStore";
            const F = new D(o.Z, {
                LOAD_INVITE_SUGGESTIONS: function(e) {
                    var t = e.omitUserIds,
                        n = e.guild,
                        r = e.channel,
                        o = e.applicationId,
                        i = e.inviteTargetType;
                    C = null != r ? n : null;
                    O = r;
                    T = o;
                    A = i;
                    var u = s.Z.getRelationships(),
                        c = Object.keys(u).filter((function(e) {
                            return u[e] === f.OGo.BLOCKED
                        })),
                        l = (0, a.Sz)({
                            channel: O,
                            applicationId: T,
                            inviteTargetType: i
                        });
                    w = new Set(b(t).concat(b(c), b(l)));
                    I = !1;
                    var p = R(""),
                        d = p.rows,
                        y = p.counts;
                    L(d);
                    S = y;
                    g = P.length
                },
                INVITE_SUGGESTIONS_SEARCH: function(e) {
                    var t = e.query;
                    I = "" !== t;
                    L(R(t).rows)
                }
            })
        },
        239734: (e, t, n) => {
            n.d(t, {
                Z: () => _
            });
            var r = n(202351),
                o = n(744564),
                i = n(840922);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        a(e, t, n[t])
                    }))
                }
                return e
            }

            function l(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function f(e, t) {
                f = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return f(e, t)
            }
            var p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
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
                    var n, r = c(e);
                    if (t) {
                        var o = c(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var y = !1,
                h = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                E = s({}, h);

            function v() {
                E.affinityUserIds = new Set(E.userAffinities.map((function(e) {
                    return e.user_id
                })).filter((function(e) {
                    return !i.Z.isBlocked(e)
                })))
            }
            var b = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && f(e, t)
                }(n, e);
                var t = d(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    this.waitFor(i.Z);
                    if (null != e) {
                        E.userAffinities = e.userAffinities;
                        E.affinityUserIds = new Set(e.affinityUserIds);
                        E.lastFetched = e.lastFetched
                    }
                    this.syncWith([i.Z], v)
                };
                r.needsRefresh = function() {
                    return Date.now() - E.lastFetched > 864e5
                };
                r.getFetching = function() {
                    return y
                };
                r.getState = function() {
                    return E
                };
                r.getUserAffinities = function() {
                    return E.userAffinities
                };
                r.getUserAffinitiesUserIds = function() {
                    return E.affinityUserIds
                };
                return n
            }(r.ZP.PersistedStore);
            b.displayName = "UserAffinitiesStore";
            b.persistKey = "UserAffinitiesStore";
            b.migrations = [function(e) {
                return null
            }];
            const _ = new b(o.Z, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t, n = e.affinities;
                    E.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [];
                    E.lastFetched = Date.now();
                    v();
                    y = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    y = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    y = !1
                },
                LOGOUT: function() {
                    E = s({}, h)
                }
            })
        },
        796909: (e, t, n) => {
            n.d(t, {
                Z: () => U
            });
            var r = n(730381),
                o = n.n(r),
                i = n(202351),
                u = n(575626),
                a = n(744564),
                c = n(339432),
                s = n(624325),
                l = n(996344),
                f = n(48315),
                p = n(382060),
                d = n(61209),
                y = n(567403),
                h = n(179913),
                E = n(9430),
                v = n(473903),
                b = n(102921),
                _ = n(897196);

            function m(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function S(e) {
                S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return S(e)
            }

            function g(e, t) {
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function I(e, t) {
                I = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return I(e, t)
            }
            var C, O = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function T(e) {
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
                    var n, r = S(e);
                    if (t) {
                        var o = S(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return g(this, n)
                }
            }! function(e) {
                e.DEFAULT = "DEFAULT";
                e.FAVORITE = "FAVORITE"
            }(C || (C = {}));
            var A = new u.Z((function(e) {
                var t = e.isRequest,
                    n = e.isFavorite;
                return t ? [] : [n ? C.FAVORITE : C.DEFAULT]
            }), (function(e) {
                return -e.lastMessageId
            }));

            function w(e) {
                var t, n, r = null !== (n = null !== (t = h.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                    i = e.isMessageRequestTimestamp;
                if (null != i) {
                    var u = o()(i).valueOf(),
                        a = b.Z.fromTimestamp(u);
                    return b.Z.compare(r, a) > 0 ? r : a
                }
                return r
            }

            function P(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: E.Z.isMessagesFavorite(e.id) && (0, c.cn)(),
                    isRequest: l.Z.isMessageRequest(e.id) || f.Z.isSpam(e.id)
                }
            }

            function N() {
                A.clear();
                Object.values(d.Z.getMutablePrivateChannels()).forEach((function(e) {
                    A.set(e.id, P(e))
                }));
                (0, c.cn)() && (0, s.x7)() && E.Z.getAddedToMessages().forEach((function(e) {
                    var t = d.Z.getChannel(e);
                    null != t && (0, p.zi)(t.type) && A.set(t.id, P(t))
                }))
            }

            function R() {
                var e = d.Z.getMutablePrivateChannels();
                for (var t in e) A.set(t, P(e[t]))
            }
            var L, D, F, j = (L = [], D = [], F = [], function() {
                    var e = A.values(C.FAVORITE),
                        t = A.values(C.DEFAULT);
                    if (L !== e || D !== t) {
                        F = [];
                        e.forEach((function(e) {
                            var t = e.channelId;
                            return F.push(t)
                        }));
                        L = e;
                        t.forEach((function(e) {
                            var t = e.channelId;
                            return F.push(t)
                        }));
                        D = t
                    }
                    return F
                }),
                Z = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && I(e, t)
                    }(n, e);
                    var t = T(n);

                    function n() {
                        m(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function() {
                        this.waitFor(d.Z, y.Z, v.default, l.Z, E.Z);
                        this.syncWith([E.Z, l.Z], N)
                    };
                    r.getPrivateChannelIds = function() {
                        return j()
                    };
                    r.getSortedChannels = function() {
                        return [A.values(C.FAVORITE), A.values(C.DEFAULT)]
                    };
                    r.serializeForOverlay = function() {
                        var e = {};
                        A.values().forEach((function(t) {
                            var n = t.channelId,
                                r = t.lastMessageId;
                            e[n] = r
                        }));
                        return e
                    };
                    return n
                }(i.ZP.Store);
            Z.displayName = "PrivateChannelSortStore";
            const U = new Z(a.Z, {
                CONNECTION_OPEN: N,
                CONNECTION_OPEN_SUPPLEMENTAL: N,
                OVERLAY_INITIALIZE: N,
                CACHE_LOADED: R,
                CACHE_LOADED_LAZY: R,
                CHANNEL_UPDATES: function(e) {
                    e.channels.forEach((function(e) {
                        ((0, p.hv)(e.type) || A.has(e.id)) && A.set(e.id, P(e))
                    }))
                },
                CHANNEL_CREATE: function(e) {
                    var t = e.channel;
                    if (!(0, p.hv)(t.type)) return !1;
                    if (t.id === _.V) return !1;
                    A.set(t.id, P(t))
                },
                CHANNEL_DELETE: function(e) {
                    var t = e.channel;
                    return A.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    var t = e.channelId,
                        n = e.message;
                    if (!A.has(t)) return !1;
                    var r = d.Z.getChannel(t);
                    return null != r && A.set(t, P(r, n.id))
                },
                GUILD_CREATE: function(e) {
                    var t = e.guild.id;
                    return A.delete(t)
                }
            })
        },
        282898: (e, t, n) => {
            n.d(t, {
                Z: () => S
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                u = n.n(i),
                a = n(304548),
                c = n(559968),
                s = n(926054),
                l = n(473708),
                f = n(415030),
                p = n.n(f);

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
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

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function E(e, t) {
                return !t || "object" !== b(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function v(e, t) {
                v = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return v(e, t)
            }
            var b = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function _(e) {
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
                    var n, r = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return E(this, n)
                }
            }
            var m = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && v(e, t)
                }(n, e);
                var t = _(n);

                function n() {
                    d(this, n);
                    var e;
                    (e = t.apply(this, arguments))._textInputRef = o.createRef();
                    e._containerRef = o.createRef();
                    e.handleClear = function() {
                        var t = e.props,
                            n = t.onClear,
                            r = t.forwardedRef,
                            o = (null != r ? r : e._textInputRef).current;
                        null != o && o.focus();
                        null != n && n()
                    };
                    return e
                }
                n.prototype.render = function() {
                    var e = this.props,
                        t = e.autoFocus,
                        n = e.label,
                        o = e.placeholder,
                        i = e.searchTerm,
                        f = e.inputClassName,
                        d = e.className,
                        y = e.onChange,
                        h = e.onFocus,
                        E = e.onBlur,
                        v = e.onKeyPress,
                        b = e.autoComplete,
                        _ = e.forwardedRef,
                        m = e.closeIconClassName,
                        S = e.searchIconClassName,
                        g = e.cta,
                        I = null != i && i.length > 0,
                        C = null != _ ? _ : this._textInputRef;
                    return (0, r.jsx)(a.FocusRing, {
                        focusTarget: C,
                        ringTarget: this._containerRef,
                        children: (0, r.jsxs)("div", {
                            className: u()(p().searchBox, d),
                            ref: this._containerRef,
                            children: [(0, r.jsx)(a.TextInput, {
                                inputRef: C,
                                focusProps: {
                                    enabled: !1
                                },
                                name: "search",
                                maxLength: 100,
                                className: p().searchBoxInputWrapper,
                                inputClassName: u()(p().searchBoxInput, f),
                                onChange: y,
                                onFocus: h,
                                onBlur: E,
                                onKeyPress: v,
                                value: I ? i : "",
                                placeholder: o,
                                autoFocus: t,
                                "aria-label": n,
                                autoComplete: b ? "on" : "off"
                            }), null != g ? (0, r.jsx)(a.Text, {
                                color: "text-muted",
                                variant: "text-xs/normal",
                                className: p().cta,
                                children: g
                            }) : null, I ? (0, r.jsx)(a.Clickable, {
                                onClick: this.handleClear,
                                className: p().clear,
                                "aria-label": l.Z.Messages.SEARCH_CLEAR,
                                children: (0, r.jsx)(c.Z, {
                                    className: u()(p().clearIcon, m)
                                })
                            }) : (0, r.jsx)(s.Z, {
                                className: u()(p().searchIcon, S),
                                "aria-label": l.Z.Messages.SEARCH
                            })]
                        })
                    })
                };
                return n
            }(o.Component);
            m.defaultProps = {
                autoComplete: !1
            };
            const S = o.forwardRef((function(e, t) {
                return (0, r.jsx)(m, function(e) {
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
                }({
                    forwardedRef: t
                }, e))
            }))
        }
    }
]);