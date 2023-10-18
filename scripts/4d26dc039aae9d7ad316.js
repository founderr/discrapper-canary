"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [19389, 97102, 29202, 91683, 58635], {
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
        621647: (e, t, n) => {
            n.d(t, {
                x: () => f
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

            function f(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case u.d4z.DM:
                        var c = a(e.recipients.map(r.default.getUser).filter(i.lm), 1),
                            f = c[0];
                        return null == f ? null : f.getAvatarURL(void 0, t, n);
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
                Z: () => f
            });
            var r = n(785893),
                o = (n(667294), n(70418));

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
                                if (n = 1,
                                    r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
            const f = {
                open: function() {
                    (0, o.openModalLazy)(u((function() {
                        var e, t;
                        return a(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, Promise.all([n.e(40532), n.e(34883)]).then(n.bind(n, 834883))];
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
                Z: () => A
            });
            var r = n(202351),
                o = n(281110),
                i = n(744564),
                u = n(664625),
                c = n(539273),
                a = n(2590),
                f = n(897196);

            function l(e, t) {
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

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function d(e) {
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
                    var n, r = p(e);
                    if (t) {
                        var o = p(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
                }
            }
            var I, O = {},
                E = Object.freeze({});

            function S(e) {
                var t;
                return null !== (t = O[e]) && void 0 !== t ? t : E
            }

            function _(e) {
                var t = e.channelId,
                    n = e.userId,
                    r = d({}, S(t));
                clearTimeout(r[n]);
                r[n] = function(e, t) {
                    return setTimeout((function() {
                        i.Z.dispatch({
                            type: "TYPING_STOP",
                            channelId: e,
                            userId: t
                        })
                    }), 1e4)
                }(t, n);
                O[t] = r
            }

            function m(e) {
                var t = e.channelId,
                    n = e.userId,
                    r = O[t];
                if (null == r || null == r[n]) return !1;
                var o = d({}, r);
                clearTimeout(o[n]);
                delete o[n];
                O[t] = o
            }

            function g() {
                O = {}
            }
            var T = function(e) {
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
                    l(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getTypingUsers = function(e) {
                    return S(e)
                };
                r.isTyping = function(e, t) {
                    return null != S(e)[t]
                };
                return n
            }(r.ZP.Store);
            T.displayName = "TypingStore";
            const A = new T(i.Z, {
                TYPING_START: _,
                TYPING_STOP: m,
                TYPING_START_LOCAL: function(e) {
                    var t = e.channelId,
                        n = u.default.getId();
                    if (null == n) return !1;
                    if (t === f.V) return !1;
                    if (null != I && I.channelId !== t) {
                        null != I.timeout && clearTimeout(I.timeout);
                        I = null
                    }
                    var r = Date.now();
                    if (null != I && (null != I.timeout || I.prevSend + 8e3 > r)) return !1;
                    var l = null == I || I.prevSend > r - 16e3 ? 1500 : 0,
                        s = setTimeout((function() {
                            if (null != I && I.channelId === t && n === u.default.getId() && null != I.timeout) {
                                I.timeout = null;
                                (function(e) {
                                    var t = S(e);
                                    return t === E ? 0 : Object.keys(t).length
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
                        }), l);
                    I = {
                        channelId: t,
                        timeout: s,
                        prevSend: r
                    };
                    return _({
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
                        return m({
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
                    return m({
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

            function f(e) {
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

            function l(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
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
                    var n, r = a(e);
                    if (t) {
                        var o = a(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var h = !1,
                y = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                v = f({}, y);

            function b() {
                v.affinityUserIds = new Set(v.userAffinities.map((function(e) {
                    return e.user_id
                })).filter((function(e) {
                    return !i.Z.isBlocked(e)
                })))
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
                    t && s(e, t)
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
                        v.userAffinities = e.userAffinities;
                        v.affinityUserIds = new Set(e.affinityUserIds);
                        v.lastFetched = e.lastFetched
                    }
                    this.syncWith([i.Z], b)
                };
                r.needsRefresh = function() {
                    return Date.now() - v.lastFetched > 864e5
                };
                r.getFetching = function() {
                    return h
                };
                r.getState = function() {
                    return v
                };
                r.getUserAffinities = function() {
                    return v.userAffinities
                };
                r.getUserAffinitiesUserIds = function() {
                    return v.affinityUserIds
                };
                return n
            }(r.ZP.PersistedStore);
            I.displayName = "UserAffinitiesStore";
            I.persistKey = "UserAffinitiesStore";
            I.migrations = [function(e) {
                return null
            }];
            const O = new I(o.Z, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t, n = e.affinities;
                    v.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [];
                    v.lastFetched = Date.now();
                    b();
                    h = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    h = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    h = !1
                },
                LOGOUT: function() {
                    v = f({}, y)
                }
            })
        },
        796909: (e, t, n) => {
            n.d(t, {
                Z: () => D
            });
            var r = n(730381),
                o = n.n(r),
                i = n(202351),
                u = n(575626),
                c = n(744564),
                a = n(621696),
                f = n(999790),
                l = n(996344),
                s = n(48315),
                p = n(382060),
                d = n(61209),
                h = n(567403),
                y = n(179913),
                v = n(9430),
                b = n(473903),
                I = n(102921),
                O = n(897196);

            function E(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function S(e) {
                S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return S(e)
            }

            function _(e, t) {
                return !t || "object" !== T(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function m(e, t) {
                m = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return m(e, t)
            }
            var g, T = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function A(e) {
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
                    return _(this, n)
                }
            }! function(e) {
                e.DEFAULT = "DEFAULT";
                e.FAVORITE = "FAVORITE"
            }(g || (g = {}));
            var w = new u.Z((function(e) {
                var t = e.isRequest,
                    n = e.isFavorite;
                return t ? [] : [n ? g.FAVORITE : g.DEFAULT]
            }), (function(e) {
                return -e.lastMessageId
            }));

            function P(e) {
                var t, n, r = null !== (n = null !== (t = y.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                    i = e.isMessageRequestTimestamp;
                if (null != i) {
                    var u = o()(i).valueOf(),
                        c = I.Z.fromTimestamp(u);
                    return I.Z.compare(r, c) > 0 ? r : c
                }
                return r
            }

            function R(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: v.Z.isMessagesFavorite(e.id) && (0, a.cn)(),
                    isRequest: l.Z.isMessageRequest(e.id) || s.Z.isSpam(e.id)
                }
            }

            function N() {
                w.clear();
                Object.values(d.Z.getMutablePrivateChannels()).forEach((function(e) {
                    w.set(e.id, R(e))
                }));
                (0, a.cn)() && (0, f.x7)() && v.Z.getAddedToMessages().forEach((function(e) {
                    var t = d.Z.getChannel(e);
                    null != t && (0, p.zi)(t.type) && w.set(t.id, R(t))
                }))
            }

            function Z() {
                var e = d.Z.getMutablePrivateChannels();
                for (var t in e) w.set(t, R(e[t]))
            }
            var C, j, F, L = (C = [], j = [], F = [], function() {
                    var e = w.values(g.FAVORITE),
                        t = w.values(g.DEFAULT);
                    if (C !== e || j !== t) {
                        F = [];
                        e.forEach((function(e) {
                            var t = e.channelId;
                            return F.push(t)
                        }));
                        C = e;
                        t.forEach((function(e) {
                            var t = e.channelId;
                            return F.push(t)
                        }));
                        j = t
                    }
                    return F
                }),
                U = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && m(e, t)
                    }(n, e);
                    var t = A(n);

                    function n() {
                        E(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function() {
                        this.waitFor(d.Z, h.Z, b.default, l.Z, v.Z);
                        this.syncWith([v.Z, l.Z], N)
                    };
                    r.getPrivateChannelIds = function() {
                        return L()
                    };
                    r.getSortedChannels = function() {
                        return [w.values(g.FAVORITE), w.values(g.DEFAULT)]
                    };
                    r.serializeForOverlay = function() {
                        var e = {};
                        w.values().forEach((function(t) {
                            var n = t.channelId,
                                r = t.lastMessageId;
                            e[n] = r
                        }));
                        return e
                    };
                    return n
                }(i.ZP.Store);
            U.displayName = "PrivateChannelSortStore";
            const D = new U(c.Z, {
                CONNECTION_OPEN: N,
                CONNECTION_OPEN_SUPPLEMENTAL: N,
                OVERLAY_INITIALIZE: N,
                CACHE_LOADED: Z,
                CACHE_LOADED_LAZY: Z,
                CHANNEL_UPDATES: function(e) {
                    e.channels.forEach((function(e) {
                        ((0, p.hv)(e.type) || w.has(e.id)) && w.set(e.id, R(e))
                    }))
                },
                CHANNEL_CREATE: function(e) {
                    var t = e.channel;
                    if (!(0, p.hv)(t.type)) return !1;
                    if (t.id === O.V) return !1;
                    w.set(t.id, R(t))
                },
                CHANNEL_DELETE: function(e) {
                    var t = e.channel;
                    return w.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    var t = e.channelId,
                        n = e.message;
                    if (!w.has(t)) return !1;
                    var r = d.Z.getChannel(t);
                    return null != r && w.set(t, R(r, n.id))
                },
                GUILD_CREATE: function(e) {
                    var t = e.guild.id;
                    return w.delete(t)
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