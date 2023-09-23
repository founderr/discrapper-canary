"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [29202, 91683, 58635], {
        758635: (e, t, n) => {
            n.d(t, {
                W: () => c
            });
            var r = n(281110),
                i = n(744564),
                o = n(239734),
                u = n(2590);

            function c() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (o.Z.needsRefresh()) {
                    i.Z.dispatch({
                        type: "LOAD_USER_AFFINITIES"
                    });
                    return r.ZP.get({
                        url: u.ANM.USER_AFFINITIES,
                        retries: e ? 3 : 0,
                        oldFormErrors: !0
                    }).then((function(e) {
                        var t = e.body;
                        i.Z.dispatch({
                            type: "LOAD_USER_AFFINITIES_SUCCESS",
                            affinities: t
                        })
                    }), (function() {
                        i.Z.dispatch({
                            type: "LOAD_USER_AFFINITIES_FAILURE"
                        })
                    }))
                }
                return Promise.resolve()
            }
        },
        58387: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                i = (n(667294), n(882723));

            function o(e, t, n, r, i, o, u) {
                try {
                    var c = e[o](u),
                        f = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(f) : Promise.resolve(f).then(r, i)
            }

            function u(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var u = e.apply(t, n);

                        function c(e) {
                            o(u, r, i, c, f, "next", e)
                        }

                        function f(e) {
                            o(u, r, i, c, f, "throw", e)
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
            var f = function(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function c(o) {
                    return function(c) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, c])
                    }
                }
            };
            const s = {
                open: function() {
                    (0, i.openModalLazy)(u((function() {
                        var e, t;
                        return f(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, Promise.all([n.e(40532), n.e(47405), n.e(43586), n.e(27499), n.e(3790), n.e(88110), n.e(96043), n.e(67147)]).then(n.bind(n, 834883))];
                                case 1:
                                    e = i.sent(), t = e.default;
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
        239734: (e, t, n) => {
            n.d(t, {
                Z: () => O
            });
            var r = n(202351),
                i = n(744564),
                o = n(840922);

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

            function f(e) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return f(e)
            }

            function s(e) {
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

            function a(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
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
            var p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function y(e) {
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
                        var i = f(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return a(this, n)
                }
            }
            var h = !1,
                b = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                d = s({}, b);

            function v() {
                d.affinityUserIds = new Set(d.userAffinities.map((function(e) {
                    return e.user_id
                })).filter((function(e) {
                    return !o.Z.isBlocked(e)
                })))
            }
            var S = function(e) {
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
                var t = y(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    this.waitFor(o.Z);
                    if (null != e) {
                        d.userAffinities = e.userAffinities;
                        d.affinityUserIds = new Set(e.affinityUserIds);
                        d.lastFetched = e.lastFetched
                    }
                    this.syncWith([o.Z], v)
                };
                r.needsRefresh = function() {
                    return Date.now() - d.lastFetched > 864e5
                };
                r.getFetching = function() {
                    return h
                };
                r.getState = function() {
                    return d
                };
                r.getUserAffinities = function() {
                    return d.userAffinities
                };
                r.getUserAffinitiesUserIds = function() {
                    return d.affinityUserIds
                };
                return n
            }(r.ZP.PersistedStore);
            S.displayName = "UserAffinitiesStore";
            S.persistKey = "UserAffinitiesStore";
            S.migrations = [function(e) {
                return null
            }];
            const O = new S(i.Z, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t, n = e.affinities;
                    d.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [];
                    d.lastFetched = Date.now();
                    v();
                    h = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    h = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    h = !1
                },
                LOGOUT: function() {
                    d = s({}, b)
                }
            })
        }
    }
]);