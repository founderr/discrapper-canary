"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [89005, 29202, 91683, 58635], {
        758635: (e, t, n) => {
            n.d(t, {
                W: () => c
            });
            var r = n(281110),
                o = n(744564),
                i = n(239734),
                u = n(2590);

            function c() {
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
        218190: (e, t, n) => {
            n.d(t, {
                G: () => r
            });
            var r = (0, n(260561).B)({
                kind: "user",
                id: "2023-03_channel_name_emojis",
                label: "Channel Emojis",
                defaultConfig: {
                    enabled: !1,
                    left: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable channel name emojis",
                    config: {
                        enabled: !0,
                        left: !1
                    }
                }, {
                    id: 2,
                    label: "Emojis to left of channel icon",
                    config: {
                        enabled: !0,
                        left: !0
                    }
                }]
            })
        },
        621647: (e, t, n) => {
            n.d(t, {
                x: () => l
            });
            var r = n(473903),
                o = n(775173),
                i = n(72580),
                u = n(2590);

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function a(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            c = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function l(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case u.d4z.DM:
                        var c = a(e.recipients.map(r.default.getUser).filter(i.lm), 1),
                            l = c[0];
                        return null == l ? null : l.getAvatarURL(void 0, t, n);
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
        58387: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                o = (n(667294), n(882723));

            function i(e, t, n, r, o, i, u) {
                try {
                    var c = e[i](u),
                        a = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function u(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var u = e.apply(t, n);

                        function c(e) {
                            i(u, r, o, c, a, "next", e)
                        }

                        function a(e) {
                            i(u, r, o, c, a, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var a = function(e, t) {
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
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
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
                        }([i, c])
                    }
                }
            };
            const l = {
                open: function() {
                    (0, o.openModalLazy)(u((function() {
                        var e, t;
                        return a(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, Promise.all([n.e(40532), n.e(47405), n.e(43586), n.e(27499), n.e(3790), n.e(96043), n.e(30796)]).then(n.bind(n, 834883))];
                                case 1:
                                    e = o.sent(), t = e.default;
                                    return [2, function(e) {
                                        return (0, r.jsx)(t, function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    r = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                }))));
                                                r.forEach((function(t) {
                                                    c(e, t, n[t])
                                                }))
                                            }
                                            return e
                                        }({}, e))
                                    }]
                            }
                        }))
                    })))
                }
            }
        },
        788169: (e, t, n) => {
            n.d(t, {
                Z: () => w
            });
            var r = n(202351),
                o = n(281110),
                i = n(744564),
                u = n(664625),
                c = n(539273),
                a = n(2590),
                l = n(897196);

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        s(e, t, n[t])
                    }))
                }
                return e
            }

            function h(e, t) {
                return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function y(e, t) {
                y = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return y(e, t)
            }
            var v = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function b(e) {
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
                    var n, r = d(e);
                    if (t) {
                        var o = d(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
                }
            }
            var I, E = 1e4,
                O = {},
                _ = Object.freeze({});

            function S(e) {
                var t;
                return null !== (t = O[e]) && void 0 !== t ? t : _
            }

            function m(e) {
                var t = e.channelId,
                    n = e.userId,
                    r = p({}, S(t));
                clearTimeout(r[n]);
                r[n] = function(e, t) {
                    return setTimeout((function() {
                        i.Z.dispatch({
                            type: "TYPING_STOP",
                            channelId: e,
                            userId: t
                        })
                    }), E)
                }(t, n);
                O[t] = r
            }

            function T(e) {
                var t = e.channelId,
                    n = e.userId,
                    r = O[t];
                if (null == r || null == r[n]) return !1;
                var o = p({}, r);
                clearTimeout(o[n]);
                delete o[n];
                O[t] = o
            }

            function g() {
                O = {}
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
                    t && y(e, t)
                }(n, e);
                var t = b(n);

                function n() {
                    f(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getTypingUsers = function(e) {
                    return S(e)
                };
                r.isTyping = function(e, t) {
                    return null != S(e)[t]
                };
                r.__getLocalVars = function() {
                    return {
                        TYPING_TIMEOUT: E,
                        TYPING_DELAY_LOCAL: 1500,
                        MAX_TYPING_USERS: 5,
                        typingUsersByChannel: O,
                        localTypingDelay: I,
                        EMPTY_TYPING: _
                    }
                };
                return n
            }(r.ZP.Store);
            A.displayName = "TypingStore";
            const w = new A(i.Z, {
                TYPING_START: m,
                TYPING_STOP: T,
                TYPING_START_LOCAL: function(e) {
                    var t = e.channelId,
                        n = u.default.getId();
                    if (null == n) return !1;
                    if (t === l.V) return !1;
                    if (null != I && I.channelId !== t) {
                        null != I.timeout && clearTimeout(I.timeout);
                        I = null
                    }
                    var r = Date.now();
                    if (null != I && (null != I.timeout || I.prevSend + 8e3 > r)) return !1;
                    var f = null == I || I.prevSend > r - 16e3 ? 1500 : 0,
                        s = setTimeout((function() {
                            if (null != I && I.channelId === t && n === u.default.getId() && null != I.timeout) {
                                I.timeout = null;
                                (function(e) {
                                    var t = S(e);
                                    return t === _ ? 0 : Object.keys(t).length
                                })(t) > 5 || o.ZP.post({
                                    url: a.ANM.TYPING(t),
                                    oldFormErrors: !0
                                }).then((function(e) {
                                    if (200 === e.status) {
                                        var n, r, o = null !== (n = e.body.message_send_cooldown_ms) && void 0 !== n ? n : 0,
                                            u = null !== (r = e.body.thread_create_cooldown_ms) && void 0 !== r ? r : 0;
                                        o > 0 && i.Z.dispatch({
                                            type: "SLOWMODE_SET_COOLDOWN",
                                            channelId: t,
                                            slowmodeType: c.S.SendMessage,
                                            cooldownMs: o
                                        });
                                        u > 0 && i.Z.dispatch({
                                            type: "SLOWMODE_SET_COOLDOWN",
                                            channelId: t,
                                            slowmodeType: c.S.CreateThread,
                                            cooldownMs: u
                                        })
                                    }
                                }))
                            }
                        }), f);
                    I = {
                        channelId: t,
                        timeout: s,
                        prevSend: r
                    };
                    return m({
                        channelId: t,
                        userId: n
                    })
                },
                TYPING_STOP_LOCAL: function(e) {
                    var t = e.channelId,
                        n = u.default.getId();
                    if (null == n) return !1;
                    if (null != I && I.channelId === t && null != I.timeout) {
                        clearTimeout(I.timeout);
                        I = null;
                        return T({
                            channelId: t,
                            userId: n
                        })
                    }
                    return !1
                },
                CONNECTION_OPEN: g,
                OVERLAY_INITIALIZE: g,
                MESSAGE_CREATE: function(e) {
                    var t = e.channelId,
                        n = e.message.author;
                    e.optimistic && function(e) {
                        if (null == I || I.channelId !== e) return !1;
                        null != I.timeout && clearTimeout(I.timeout);
                        I = null
                    }(t);
                    return T({
                        channelId: t,
                        userId: n.id
                    })
                }
            })
        },
        239734: (e, t, n) => {
            n.d(t, {
                Z: () => O
            });
            var r = n(202351),
                o = n(744564),
                i = n(840922);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        c(e, t, n[t])
                    }))
                }
                return e
            }

            function f(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function s(e, t) {
                s = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return s(e, t)
            }
            var d = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function p(e) {
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
                    var n, r = a(e);
                    if (t) {
                        var o = a(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }
            var h = 864e5,
                y = !1,
                v = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                b = l({}, v);

            function I() {
                b.affinityUserIds = new Set(b.userAffinities.map((function(e) {
                    return e.user_id
                })).filter((function(e) {
                    return !i.Z.isBlocked(e)
                })))
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
                    t && s(e, t)
                }(n, e);
                var t = p(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    this.waitFor(i.Z);
                    if (null != e) {
                        b.userAffinities = e.userAffinities;
                        b.affinityUserIds = new Set(e.affinityUserIds);
                        b.lastFetched = e.lastFetched
                    }
                    this.syncWith([i.Z], I)
                };
                r.needsRefresh = function() {
                    return Date.now() - b.lastFetched > h
                };
                r.getFetching = function() {
                    return y
                };
                r.getState = function() {
                    return b
                };
                r.getUserAffinities = function() {
                    return b.userAffinities
                };
                r.getUserAffinitiesUserIds = function() {
                    return b.affinityUserIds
                };
                r.__getLocalVars = function() {
                    return {
                        USER_AFFINITY_TTL: h,
                        fetching: y,
                        DEFAULT_AFFINITY_STORE_STATE: v,
                        state: b
                    }
                };
                return n
            }(r.ZP.PersistedStore);
            E.displayName = "UserAffinitiesStore";
            E.persistKey = "UserAffinitiesStore";
            E.migrations = [function(e) {
                return null
            }];
            const O = new E(o.Z, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t, n = e.affinities;
                    b.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [];
                    b.lastFetched = Date.now();
                    I();
                    y = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    y = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    y = !1
                },
                LOGOUT: function() {
                    b = l({}, v)
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
                c = n(744564),
                a = n(339432),
                l = n(996344),
                f = n(48315),
                s = n(382060),
                d = n(61209),
                p = n(567403),
                h = n(717091),
                y = n(9430),
                v = n(473903),
                b = n(102921),
                I = n(897196);

            function E(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function O(e) {
                O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return O(e)
            }

            function _(e, t) {
                return !t || "object" !== T(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function S(e, t) {
                S = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return S(e, t)
            }
            var m, T = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function g(e) {
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
                    var n, r = O(e);
                    if (t) {
                        var o = O(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return _(this, n)
                }
            }! function(e) {
                e.DEFAULT = "DEFAULT";
                e.FAVORITE = "FAVORITE"
            }(m || (m = {}));
            var A = new u.Z((function(e) {
                var t = e.isRequest,
                    n = e.isFavorite;
                return t ? [] : [n ? m.FAVORITE : m.DEFAULT]
            }), (function(e) {
                return -e.lastMessageId
            }));

            function w(e) {
                var t, n, r = null !== (n = null !== (t = h.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                    i = e.isMessageRequestTimestamp;
                if (null != i) {
                    var u = o()(i).valueOf(),
                        c = b.Z.fromTimestamp(u);
                    return b.Z.compare(r, c) > 0 ? r : c
                }
                return r
            }

            function P(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: y.Z.isMessagesFavorite(e.id) && (0, a.cn)(),
                    isRequest: l.Z.isMessageRequest(e.id) || f.Z.isSpam(e.id)
                }
            }

            function N() {
                A.clear();
                Object.values(d.Z.getMutablePrivateChannels()).forEach((function(e) {
                    A.set(e.id, P(e))
                }));
                (0, a.cn)() && y.Z.getAddedToMessages().forEach((function(e) {
                    var t = d.Z.getChannel(e);
                    null != t && (0, s.zi)(t.type) && A.set(t.id, P(t))
                }))
            }

            function R() {
                var e = d.Z.getMutablePrivateChannels();
                for (var t in e) A.set(t, P(e[t]))
            }
            var C, L, j, F = (C = [], L = [], j = [], function() {
                    var e = A.values(m.FAVORITE),
                        t = A.values(m.DEFAULT);
                    if (C !== e || L !== t) {
                        j = [];
                        e.forEach((function(e) {
                            var t = e.channelId;
                            return j.push(t)
                        }));
                        C = e;
                        t.forEach((function(e) {
                            var t = e.channelId;
                            return j.push(t)
                        }));
                        L = t
                    }
                    return j
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
                        t && S(e, t)
                    }(n, e);
                    var t = g(n);

                    function n() {
                        E(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function() {
                        this.waitFor(d.Z, p.Z, v.default, l.Z, y.Z);
                        this.syncWith([y.Z, l.Z], N)
                    };
                    r.getPrivateChannelIds = function() {
                        return F()
                    };
                    r.getSortedChannels = function() {
                        return [A.values(m.FAVORITE), A.values(m.DEFAULT)]
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
                    r.__getLocalVars = function() {
                        return {
                            SortedChannelType: m,
                            data: A,
                            getPrivateChannelIds: F
                        }
                    };
                    return n
                }(i.ZP.Store);
            Z.displayName = "PrivateChannelSortStore";
            const U = new Z(c.Z, {
                CONNECTION_OPEN: N,
                CONNECTION_OPEN_SUPPLEMENTAL: N,
                OVERLAY_INITIALIZE: N,
                CACHE_LOADED: R,
                CACHE_LOADED_LAZY: R,
                CHANNEL_UPDATES: function(e) {
                    e.channels.forEach((function(e) {
                        ((0, s.hv)(e.type) || A.has(e.id)) && A.set(e.id, P(e))
                    }))
                },
                CHANNEL_CREATE: function(e) {
                    var t = e.channel;
                    if (!(0, s.hv)(t.type)) return !1;
                    if (t.id === I.V) return !1;
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
        816810: (e, t, n) => {
            n.d(t, {
                $: () => r
            });
            var r;
            ! function(e) {
                e[e.IS_GUEST_INVITE = 1] = "IS_GUEST_INVITE";
                e[e.IS_VIEWED = 2] = "IS_VIEWED";
                e[e.IS_ENHANCED = 4] = "IS_ENHANCED"
            }(r || (r = {}));
            new Set([1, 2, 4])
        }
    }
]);