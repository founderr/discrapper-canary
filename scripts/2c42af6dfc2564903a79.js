(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [1654], {
        500996: (e, t, r) => {
            e.exports = r.p + "d1dab93347ab65e2b31d9dc39c9c5a9a.svg"
        },
        595138: (e, t, r) => {
            "use strict";
            r.d(t, {
                yD: () => s,
                p0: () => f,
                Qv: () => p
            });
            var n = r(281110),
                o = r(744564),
                i = r(534681),
                u = r(2590);

            function c(e, t, r, n, o, i, u) {
                try {
                    var c = e[i](u),
                        a = c.value
                } catch (e) {
                    r(e);
                    return
                }
                c.done ? t(a) : Promise.resolve(a).then(n, o)
            }

            function a(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function u(e) {
                            c(i, n, o, u, a, "next", e)
                        }

                        function a(e) {
                            c(i, n, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var l = function(e, t) {
                var r, n, o, i, u = {
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
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n),
                                        0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
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
                                        n = i[1];
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
                                n = 0
                            } finally {
                                r = o = 0
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

            function s(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                o.Z.wait((function() {
                    o.Z.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_START",
                        applicationId: e
                    })
                }));
                return n.ZP.get({
                    url: u.ANM.ENTITLEMENTS_FOR_APPLICATION(e),
                    oldFormErrors: !0,
                    query: {
                        exclude_consumed: t
                    }
                }).then((function(t) {
                    o.Z.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
                        applicationId: e,
                        entitlements: t.body
                    });
                    return t.body
                })).catch((function() {
                    o.Z.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_FAIL",
                        applicationId: e
                    })
                }))
            }

            function f(e) {
                return d.apply(this, arguments)
            }

            function d() {
                return (d = a((function(e) {
                    var t, r, i, c, a, s;
                    return l(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                t = e.withSku, r = void 0 !== t && t, i = e.withApplication, c = void 0 !== i && i, a = e.entitlementType;
                                o.Z.dispatch({
                                    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
                                });
                                l.label = 1;
                            case 1:
                                l.trys.push([1, 3, , 4]);
                                return [4, n.ZP.get({
                                    url: u.ANM.ENTITLEMENTS_FOR_USER,
                                    query: {
                                        with_sku: r,
                                        with_application: c,
                                        entitlement_type: a
                                    }
                                })];
                            case 2:
                                s = l.sent();
                                o.Z.dispatch({
                                    type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
                                    entitlements: s.body
                                });
                                return [3, 4];
                            case 3:
                                l.sent();
                                o.Z.dispatch({
                                    type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL"
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function p() {
                return O.apply(this, arguments)
            }

            function O() {
                return (O = a((function() {
                    var e;
                    return l(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                o.Z.dispatch({
                                    type: "ENTITLEMENTS_GIFTABLE_FETCH"
                                });
                                t.label = 1;
                            case 1:
                                t.trys.push([1, 3, , 4]);
                                return [4, (0, i.Kb)({
                                    url: u.ANM.ENTITLEMENTS_GIFTABLE
                                })];
                            case 2:
                                e = t.sent();
                                o.Z.dispatch({
                                    type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
                                    entitlements: e.body
                                });
                                return [3, 4];
                            case 3:
                                t.sent();
                                o.Z.dispatch({
                                    type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL"
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        19120: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => I
            });
            var n = r(785893),
                o = r(667294),
                i = r(294184),
                u = r.n(i),
                c = r(107364),
                a = r(543151),
                l = r.n(a);

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
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
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function p(e, t) {
                return !t || "object" !== _(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function O(e, t) {
                O = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return O(e, t)
            }
            var E, S, y, _ = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function h(e) {
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
                    var r, n = d(e);
                    if (t) {
                        var o = d(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return p(this, r)
                }
            }! function(e) {
                e.PRIMARY = "primary";
                e.SECONDARY = "secondary";
                e.WARNING = "warning";
                e.ERROR = "error"
            }(E || (E = {}));
            ! function(e) {
                e.SMALL = "small";
                e.LARGE = "large";
                e.NONE = "none"
            }(S || (S = {}));
            var b, T = (f(y = {}, E.PRIMARY, l().colorPrimary), f(y, E.SECONDARY, l().colorSecondary),
                    f(y, E.WARNING, l().colorWarning), f(y, E.ERROR, l().colorError), y),
                v = (f(b = {}, S.SMALL, l().small), f(b, S.LARGE, l().large), f(b, S.NONE, null), b),
                m = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && O(e, t)
                    }(r, e);
                    var t = h(r);

                    function r() {
                        s(this, r);
                        return t.apply(this, arguments)
                    }
                    r.prototype.render = function() {
                        var e = this.props,
                            t = e.icon,
                            r = e.color,
                            o = e.children,
                            i = e.iconSize,
                            a = e.className,
                            s = e.iconClassName;
                        return (0, n.jsxs)(c.Z, {
                            className: u()(l().note, T[r], a),
                            align: c.Z.Align.CENTER,
                            children: [(0, n.jsx)(t, {
                                className: u()(l().icon, v[i], s)
                            }), (0, n.jsx)("div", {
                                children: o
                            })]
                        })
                    };
                    return r
                }(o.PureComponent);
            m.Colors = E;
            m.Sizes = S;
            const I = m
        },
        320142: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => c
            });
            var n = r(120415);

            function o(e, t, r, n, o, i, u) {
                try {
                    var c = e[i](u),
                        a = c.value
                } catch (e) {
                    r(e);
                    return
                }
                c.done ? t(a) : Promise.resolve(a).then(n, o)
            }

            function i(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, i) {
                        var u = e.apply(t, r);

                        function c(e) {
                            o(u, n, i, c, a, "next", e)
                        }

                        function a(e) {
                            o(u, n, i, c, a, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }
            var u = function(e, t) {
                var r, n, o, i, u = {
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
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
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
                                        n = i[1];
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
                                n = 0
                            } finally {
                                r = o = 0
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

            function c(e, t) {
                return a.apply(this, arguments)
            }

            function a() {
                return (a = i((function(e, t) {
                    var o, i, c, a;
                    return u(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                0;
                                return [4, Promise.all([r.e(40532), r.e(39685), r.e(47007), r.e(6543), r.e(29342), r.e(84832), r.e(27499), r.e(79913), r.e(64466), r.e(92465), r.e(45353), r.e(10675), r.e(73727), r.e(52555), r.e(61953), r.e(84441), r.e(14990), r.e(33227), r.e(24501), r.e(17667)]).then(r.bind(r, 624501))];
                            case 1:
                                o = u.sent(), i = o.default;
                                if (null != (c = i(e, {
                                        skipExtensionCheck: t,
                                        analyticsLocations: []
                                    }))) c(null);
                                else if (n.FB) window.open(e);
                                else {
                                    (a = document.createElement("a")).href = e;
                                    a.target = "_blank";
                                    a.rel = "noreferrer noopener";
                                    a.click()
                                }
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        333398: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => b
            });
            var n = r(202351),
                o = r(744564),
                i = r(451936);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
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
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        c(e, t, r[t])
                    }))
                }
                return e
            }

            function s(e, t) {
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
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function d(e, t) {
                d = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return d(e, t)
            }
            var p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function O(e) {
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
                    var r, n = a(e);
                    if (t) {
                        var o = a(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return f(this, r)
                }
            }
            var E = {},
                S = {},
                y = [];

            function _(e) {
                var t = e.entitlements,
                    r = !1,
                    n = !0,
                    o = !1,
                    u = void 0;
                try {
                    for (var c, a = t[Symbol.iterator](); !(n = (c = a.next()).done); n = !0) {
                        var s = c.value.sku;
                        if (null != s && null != s.application) {
                            var f = s.application;
                            E[f.id] = i.Z.createFromServer(f);
                            r = !0
                        }
                    }
                } catch (e) {
                    o = !0;
                    u = e
                } finally {
                    try {
                        n || null == a.return || a.return()
                    } finally {
                        if (o) throw u
                    }
                }
                r && (E = l({}, E));
                return r
            }
            var h = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && d(e, t)
                }(r, e);
                var t = O(r);

                function r() {
                    u(this, r);
                    return t.apply(this, arguments)
                }
                var n = r.prototype;
                n.getApplications = function() {
                    return E
                };
                n.getGuildApplication = function(e, t) {
                    if (null != e) {
                        var r = !0,
                            n = !1,
                            o = void 0;
                        try {
                            for (var i, u = Object.values(E)[Symbol.iterator](); !(r = (i = u.next()).done); r = !0) {
                                var c = i.value;
                                if (c.guildId === e && c.type === t) return c
                            }
                        } catch (e) {
                            n = !0;
                            o = e
                        } finally {
                            try {
                                r || null == u.return || u.return()
                            } finally {
                                if (n) throw o
                            }
                        }
                    }
                };
                n.getGuildApplications = function(e) {
                    return null == e ? y : S[e]
                };
                n.getApplication = function(e) {
                    return E[e]
                };
                return r
            }(n.ZP.Store);
            h.displayName = "ApplicationStore";
            const b = new h(o.Z, {
                APPLICATION_FETCH_SUCCESS: function(e) {
                    var t = e.application;
                    E = s(l({}, E), c({}, t.id, i.Z.createFromServer(t)))
                },
                APPLICATIONS_FETCH_SUCCESS: function(e) {
                    var t = e.applications,
                        r = l({}, E),
                        n = !0,
                        o = !1,
                        u = void 0;
                    try {
                        for (var c, a = t[Symbol.iterator](); !(n = (c = a.next()).done); n = !0) {
                            var s = c.value;
                            r[s.id] = i.Z.createFromServer(s)
                        }
                    } catch (e) {
                        o = !0;
                        u = e
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (o) throw u
                        }
                    }
                    E = r
                },
                APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: _,
                ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: _,
                GUILD_SETTINGS_LOADED_INTEGRATIONS: function(e) {
                    var t = e.integrations,
                        r = e.guildId,
                        n = !1,
                        o = [],
                        i = !0,
                        u = !1,
                        c = void 0;
                    try {
                        for (var a, s = t[Symbol.iterator](); !(i = (a = s.next()).done); i = !0) {
                            var f = a.value.application;
                            if (null != f) {
                                o.push(f.id);
                                E[f.id] = f;
                                n = !0
                            }
                        }
                    } catch (e) {
                        u = !0;
                        c = e
                    } finally {
                        try {
                            i || null == s.return || s.return()
                        } finally {
                            if (u) throw c
                        }
                    }
                    if (n) {
                        E = l({}, E);
                        S[r] = o;
                        var d = {};
                        for (var p in S) d[p] = S[p];
                        S = d
                    }
                    return n
                },
                CONNECTION_OPEN: function() {
                    E = {};
                    S = {}
                }
            })
        },
        387099: (e, t, r) => {
            "use strict";
            r.d(t, {
                Q: () => c,
                Z: () => a
            });
            var n = r(260561),
                o = r(165666),
                i = (0, n.B)({
                    kind: "user",
                    id: "2022-03_block_russian_purchases",
                    label: "Block purchases based on country",
                    defaultConfig: {
                        paymentsBlocked: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Payments Blocked",
                        config: {
                            paymentsBlocked: !0
                        }
                    }]
                }),
                u = (0, n.B)({
                    kind: "user",
                    id: "2022-03_block_russian_purchases_desktop",
                    label: "Block purchases based on country (desktop specific flags)",
                    defaultConfig: {
                        checkPaymentSource: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Check Payment Source",
                        config: {
                            checkPaymentSource: !0
                        }
                    }]
                });

            function c() {
                var e = i.useExperiment({
                        location: "c519a9_1"
                    }, {
                        autoTrackExposure: !1
                    }).paymentsBlocked,
                    t = u.useExperiment({
                        location: "c519a9_2"
                    }, {
                        autoTrackExposure: !1
                    }).checkPaymentSource,
                    r = (0, o.Z)().defaultBillingCountryCode;
                return e || t && "RU" === r
            }
            const a = i
        },
        165586: (e, t, r) => {
            "use strict";
            r.d(t, {
                LY: () => n,
                aW: () => f,
                ws: () => o,
                tI: () => i,
                L9: () => d,
                no: () => p,
                ND: () => O,
                WC: () => S,
                z8: () => y,
                km: () => h,
                k0: () => b,
                af: () => T
            });
            var n, o, i, u, c = r(2590),
                a = r(203600),
                l = r(473708);

            function s(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }! function(e) {
                e[e.RESOLUTION_480 = 480] = "RESOLUTION_480";
                e[e.RESOLUTION_720 = 720] = "RESOLUTION_720";
                e[e.RESOLUTION_1080 = 1080] = "RESOLUTION_1080";
                e[e.RESOLUTION_1440 = 1440] = "RESOLUTION_1440";
                e[e.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE"
            }(n || (n = {}));

            function f(e) {
                switch (e) {
                    case n.RESOLUTION_480:
                        return n.RESOLUTION_480;
                    case n.RESOLUTION_720:
                        return n.RESOLUTION_720;
                    case n.RESOLUTION_1080:
                        return n.RESOLUTION_1080;
                    case n.RESOLUTION_SOURCE:
                        return n.RESOLUTION_SOURCE;
                    default:
                        throw new Error("Unknown resolution: ".concat(e))
                }
            }! function(e) {
                e[e.FPS_5 = 5] = "FPS_5";
                e[e.FPS_15 = 15] = "FPS_15";
                e[e.FPS_30 = 30] = "FPS_30";
                e[e.FPS_60 = 60] = "FPS_60"
            }(o || (o = {}));
            ! function(e) {
                e[e.PRESET_VIDEO = 1] = "PRESET_VIDEO";
                e[e.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS";
                e[e.PRESET_CUSTOM = 3] = "PRESET_CUSTOM"
            }(i || (i = {}));

            function d(e) {
                switch (e) {
                    case o.FPS_5:
                        return o.FPS_5;
                    case o.FPS_15:
                        return o.FPS_15;
                    case o.FPS_30:
                        return o.FPS_30;
                    case o.FPS_60:
                        return o.FPS_60;
                    default:
                        throw new Error("Unknown frame rate: ".concat(e))
                }
            }
            var p = (s(u = {}, i.PRESET_DOCUMENTS, [{
                    resolution: n.RESOLUTION_SOURCE,
                    fps: o.FPS_15
                }, {
                    resolution: n.RESOLUTION_SOURCE,
                    fps: o.FPS_5
                }]), s(u, i.PRESET_VIDEO, [{
                    resolution: n.RESOLUTION_1440,
                    fps: o.FPS_60
                }, {
                    resolution: n.RESOLUTION_1080,
                    fps: o.FPS_60
                }, {
                    resolution: n.RESOLUTION_720,
                    fps: o.FPS_60
                }, {
                    resolution: n.RESOLUTION_720,
                    fps: o.FPS_30
                }]), s(u, i.PRESET_CUSTOM, []), u),
                O = [{
                    resolution: n.RESOLUTION_SOURCE,
                    fps: o.FPS_60,
                    quality: a.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: n.RESOLUTION_SOURCE,
                    fps: o.FPS_30,
                    quality: a.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: n.RESOLUTION_SOURCE,
                    fps: o.FPS_15,
                    quality: a.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: n.RESOLUTION_SOURCE,
                    fps: o.FPS_5,
                    preset: i.PRESET_DOCUMENTS
                }, {
                    resolution: n.RESOLUTION_1440,
                    fps: o.FPS_60,
                    guildPremiumTier: c.Eu4.TIER_2,
                    quality: a.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: n.RESOLUTION_1440,
                    fps: o.FPS_30,
                    guildPremiumTier: c.Eu4.TIER_2,
                    quality: a.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: n.RESOLUTION_1440,
                    fps: o.FPS_15,
                    guildPremiumTier: c.Eu4.TIER_2,
                    quality: a.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: n.RESOLUTION_1080,
                    fps: o.FPS_60,
                    guildPremiumTier: c.Eu4.TIER_2,
                    quality: a.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: n.RESOLUTION_1080,
                    fps: o.FPS_30,
                    guildPremiumTier: c.Eu4.TIER_2,
                    quality: a.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: n.RESOLUTION_1080,
                    fps: o.FPS_15,
                    guildPremiumTier: c.Eu4.TIER_2,
                    quality: a.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: n.RESOLUTION_720,
                    fps: o.FPS_60,
                    guildPremiumTier: c.Eu4.TIER_1,
                    quality: a.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: n.RESOLUTION_720,
                    fps: o.FPS_30
                }, {
                    resolution: n.RESOLUTION_720,
                    fps: o.FPS_15
                }, {
                    resolution: n.RESOLUTION_720,
                    fps: o.FPS_5
                }, {
                    resolution: n.RESOLUTION_480,
                    fps: o.FPS_60,
                    guildPremiumTier: c.Eu4.TIER_1,
                    quality: a.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: n.RESOLUTION_480,
                    fps: o.FPS_30
                }, {
                    resolution: n.RESOLUTION_480,
                    fps: o.FPS_15
                }, {
                    resolution: n.RESOLUTION_480,
                    fps: o.FPS_5
                }];

            function E(e, t) {
                return {
                    value: e,
                    get label() {
                        return null != t ? t() : e
                    }
                }
            }
            var S = [E(n.RESOLUTION_720), E(n.RESOLUTION_1080), E(n.RESOLUTION_1440), E(n.RESOLUTION_SOURCE, (function() {
                    return l.Z.Messages.SCREENSHARE_SOURCE
                }))],
                y = [E(n.RESOLUTION_720), E(n.RESOLUTION_1080), E(n.RESOLUTION_1440)],
                _ = function(e) {
                    return "".concat(e, "p")
                },
                h = [E(n.RESOLUTION_480, (function() {
                    return _(n.RESOLUTION_480)
                })), E(n.RESOLUTION_720, (function() {
                    return _(n.RESOLUTION_720)
                })), E(n.RESOLUTION_1080, (function() {
                    return _(n.RESOLUTION_1080)
                })), E(n.RESOLUTION_1440, (function() {
                    return _(n.RESOLUTION_1440)
                })), E(n.RESOLUTION_SOURCE, (function() {
                    return l.Z.Messages.SCREENSHARE_SOURCE
                }))],
                b = [E(o.FPS_15), E(o.FPS_30), E(o.FPS_60)],
                T = [E(o.FPS_15, (function() {
                    return l.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_15
                    })
                })), E(o.FPS_30, (function() {
                    return l.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_30
                    })
                })), E(o.FPS_60, (function() {
                    return l.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_60
                    })
                }))]
        },
        374714: (e, t, r) => {
            "use strict";
            r.r(t);
            r.d(t, {
                default: () => L
            });
            var n = r(785893),
                o = r(667294),
                i = r(304548),
                u = r(153686),
                c = r(19585),
                a = r(782786),
                l = r(83471),
                s = r(383861),
                f = r(688858),
                d = r(930865),
                p = r(594302),
                O = r(2590),
                E = r(473708),
                S = r(818910),
                y = r.n(S),
                _ = r(380203),
                h = r.n(_);

            function b(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        b(e, t, r[t])
                    }))
                }
                return e
            }

            function v(e, t) {
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

            function m(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            var I = "premium-guild-subscription-upsell-modal-header";

            function P(e) {
                var t = e.title,
                    r = e.subtitle,
                    o = e.image;
                return (0, n.jsxs)("div", {
                    className: y().header,
                    children: [(0, n.jsx)(i.Heading, {
                        variant: "heading-xl/semibold",
                        id: I,
                        color: "header-primary",
                        className: h().marginBottom8,
                        children: t
                    }), (0, n.jsx)(i.Text, {
                        variant: "text-md/normal",
                        className: y().subtitleText,
                        children: r
                    }), o]
                })
            }
            var N = function(e) {
                    var t = e.onClose,
                        r = e.perks,
                        o = e.perkIntro,
                        u = void 0 === o ? E.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER : o,
                        c = e.headerProps;
                    return (0, n.jsxs)("div", {
                        className: y().wrapper,
                        children: [(0, n.jsx)(i.ModalCloseButton, {
                            className: y().closeButton,
                            onClick: function() {
                                t()
                            }
                        }), (0, n.jsx)(R, {
                            headerProps: c,
                            perkIntro: u
                        }), (0, n.jsx)("div", {
                            className: y().perks,
                            children: r.map((function(e, t) {
                                var r = e.icon,
                                    o = e.iconClassName,
                                    i = e.description,
                                    u = e.color;
                                return (0, n.jsx)(f.Z, {
                                    icon: r,
                                    iconClassName: o,
                                    description: i,
                                    color: u
                                }, t)
                            }))
                        })]
                    })
                },
                R = function(e) {
                    var t = e.headerProps,
                        u = e.perkIntro;
                    return (0, n.jsxs)(o.Fragment, {
                        children: [null != t ? (0, n.jsx)(P, T({}, t)) : (0, n.jsx)("img", {
                            className: y().heroImage,
                            src: r(500996),
                            alt: E.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER_IMG_ALT_TEXT
                        }), (0, n.jsx)(i.Text, {
                            variant: "text-md/normal",
                            className: y().heading,
                            children: u
                        })]
                    })
                },
                g = function(e) {
                    var t = e.guild,
                        r = e.targetBoostedGuildTier,
                        o = e.onClose,
                        u = e.analyticsSourceLocation,
                        c = {
                            section: O.jXE.PREMIUM_GUILD_UPSELL_MODAL,
                            object: O.qAy.BUTTON_CTA,
                            objectType: null != r ? (0, d.ge)(r) : null
                        };
                    return (0, n.jsxs)(i.ModalFooter, {
                        className: y().footer,
                        children: [(0, n.jsx)(i.Button, {
                            size: i.Button.Sizes.SMALL,
                            color: i.Button.Colors.PRIMARY,
                            look: i.Button.Looks.LINK,
                            onClick: function() {
                                o()
                            },
                            children: E.Z.Messages.CLOSE
                        }), (0, n.jsx)(p.Z, {
                            analyticsLocation: c,
                            analyticsSourceLocation: u,
                            guild: t,
                            targetBoostedGuildTier: r,
                            onClose: function() {
                                o()
                            }
                        })]
                    })
                };

            function L(e) {
                var t = e.analyticsSourceLocation,
                    r = e.guild,
                    o = e.targetBoostedGuildTier,
                    f = e.perks,
                    d = e.perkIntro,
                    p = e.headerProps,
                    O = e.onClose,
                    E = m(e, ["analyticsSourceLocation", "guild", "targetBoostedGuildTier", "perks", "perkIntro", "headerProps", "onClose"]),
                    S = (0, c.Z)(u.Z.ACTIVITY_DIRECTORY).AnalyticsLocationProvider;
                return (0, n.jsx)(S, {
                    children: (0, n.jsx)(a.PaymentContextProvider, {
                        activeSubscription: null,
                        stepConfigs: [],
                        skuIDs: [],
                        children: (0, n.jsx)(i.ModalRoot, v(T({}, E), {
                            "aria-labelledby": I,
                            children: (0, n.jsx)(s.Z, {
                                hideBreadcrumbs: !0,
                                body: (0, n.jsx)(N, {
                                    onClose: O,
                                    perks: f,
                                    perkIntro: d,
                                    headerProps: p
                                }),
                                footer: (0, n.jsx)(g, {
                                    guild: r,
                                    targetBoostedGuildTier: o,
                                    onClose: O,
                                    analyticsSourceLocation: t
                                }),
                                steps: [l.h8.PREMIUM_GUILD_UPSELL],
                                currentStep: l.h8.PREMIUM_GUILD_UPSELL
                            })
                        }))
                    })
                })
            }
        },
        327930: (e, t, r) => {
            "use strict";
            r.d(t, {
                Jv: () => E,
                M0: () => S,
                Qj: () => y,
                Ao: () => _,
                YO: () => h,
                VO: () => b
            });
            var n = r(61209),
                o = r(567403),
                i = r(682776),
                u = r(968696),
                c = r(2590),
                a = r(897196),
                l = Array.from(a.Vg).map((function(e) {
                    return u.Z.escape(e)
                })).join("|"),
                s = new RegExp("^/channels/(\\d+|".concat(c.ME, ")(?:/)?(\\d+|").concat(l, ")?")),
                f = new RegExp("^/channels/(\\d+|".concat(c.ME, ")(?:/)(\\d+|").concat(l, ")(?:/)(\\d+)")),
                d = new RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
                p = new RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
                O = new RegExp("^/events/(\\d+)(?:/)(\\d+)?"),
                E = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+|".concat(c.ME, ")(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?")),
                S = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)");

            function y(e) {
                if (null == e) return null;
                var t = e.match(f);
                if (null != t && t.length > 3) return {
                    guildId: t[1],
                    channelId: t[2],
                    messageId: t[3]
                };
                var r = e.match(d);
                if (null != r && r.length > 4) return {
                    guildId: r[1],
                    channelId: r[2],
                    threadId: r[3],
                    messageId: r[4]
                };
                var n = e.match(s);
                if (null != n && n.length > 1) {
                    var o;
                    return {
                        guildId: n[1],
                        channelId: null !== (o = n[2]) && void 0 !== o ? o : void 0
                    }
                }
                var i = e.match(p);
                return null != i && i.length > 1 ? {
                    guildId: i[1]
                } : null
            }

            function _(e) {
                if (null == e) return null;
                var t = e.match(O);
                return null != t && t.length > 1 ? {
                    guildId: t[1],
                    guildEventId: t[2]
                } : null
            }

            function h(e) {
                return !!e.isPrivate() || i.Z.can(c.Plq.VIEW_CHANNEL, e)
            }

            function b(e) {
                var t = e.guildId,
                    r = e.channelId;
                if (null == o.Z.getGuild(t) && t !== c.ME) return !1;
                if (null == r) return !0;
                var i = n.Z.getChannel(r);
                return null != i && h(i)
            }
        },
        128059: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => d
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                u = r(669426),
                c = r(644144),
                a = r(782786),
                l = r(83471),
                s = r(441877),
                f = r.n(s);

            function d(e) {
                var t = e.className,
                    r = e.isEligibleForTrial,
                    o = void 0 !== r && r,
                    s = (0,
                        a.usePaymentContext)(),
                    d = s.step,
                    p = s.breadcrumbs,
                    O = s.startedPaymentFlowWithPaymentSourcesRef,
                    E = s.giftRecipient;
                if (null == p || 0 === p.length || (0, c.a8)(E)) return null;
                var S = p.flatMap((function(e) {
                    var t = e.useBreadcrumbLabel();
                    return null != t ? {
                        id: e.id,
                        label: t
                    } : []
                }));
                if (0 === S.length) return null;
                S = S.filter((function(e) {
                    var t = e.id !== l.h8.ADD_PAYMENT_STEPS,
                        r = e.id === l.h8.ADD_PAYMENT_STEPS && !O.current;
                    return !o || o && (t || r)
                }));
                return (0, n.jsx)("div", {
                    className: i()("breadcrumb", f().wrapper, t),
                    children: (0, n.jsx)(u.Z, {
                        activeId: d,
                        breadcrumbs: S
                    })
                })
            }
        },
        149096: (e, t, r) => {
            "use strict";
            r.d(t, {
                ZP: () => E,
                C3: () => S,
                O3: () => y
            });
            var n = r(785893),
                o = r(667294),
                i = r(294184),
                u = r.n(i),
                c = r(441143),
                a = r.n(c),
                l = r(973935),
                s = r(304548),
                f = r(782786),
                d = r(384009),
                p = r.n(d);

            function O(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function E(e) {
                var t, r, i, c, l, d = function(e) {
                        return {
                            header: e.header,
                            isLargeModal: e.isLargeModal,
                            stepProps: O(e, ["header", "isLargeModal"])
                        }
                    }(e),
                    E = d.header,
                    S = d.isLargeModal,
                    y = d.stepProps,
                    _ = (0, f.usePaymentContext)(),
                    h = _.step,
                    b = _.stepConfigs,
                    T = _.setBodyNode,
                    v = _.setFooterNode,
                    m = _.setModalOverlayNode,
                    I = _.setReadySlideId,
                    P = b.find((function(e) {
                        return e.key === h
                    }));
                o.useEffect((function() {
                    m(null)
                }), [h, m]);
                a()(null != P, "Unknown step for current payment flow.");
                var N, R = null !== (l = null == P || null === (t = P.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== l && l,
                    g = null == P || null === (r = P.options) || void 0 === r ? void 0 : r.bodyClassName,
                    L = void 0 !== S && S ? p().sliderBodyLarge : null == P || null === (i = P.options) || void 0 === i ? void 0 : i.sliderBodyClassName;
                return (0, n.jsxs)(n.Fragment, {
                    children: [null === (N = null == P || null === (c = P.options) || void 0 === c ? void 0 : c.renderHeader) || void 0 === N || N ? E : null, P.renderStep(y), null == h || R ? null : (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(s.ModalContent, {
                            className: u()(p().body, g),
                            children: (0, n.jsx)(s.Slides, {
                                activeSlide: h,
                                centered: !1,
                                onSlideReady: function(e) {
                                    return I(e)
                                },
                                children: b.filter((function(e) {
                                    return null != e.key
                                })).map((function(e) {
                                    return (0, n.jsx)(s.Slide, {
                                        id: e.key,
                                        children: (0, n.jsx)("form", {
                                            className: u()(p().sliderBody, L),
                                            ref: function(e) {
                                                return T(e)
                                            },
                                            onSubmit: function(e) {
                                                return e.preventDefault()
                                            }
                                        })
                                    }, e.key)
                                }))
                            })
                        }), (0, n.jsx)("div", {
                            ref: function(e) {
                                return v(e)
                            }
                        }), (0, n.jsx)("div", {
                            ref: function(e) {
                                return m(e)
                            }
                        })]
                    })]
                })
            }

            function S(e) {
                var t = e.children,
                    r = (0, f.usePaymentContext)().bodyNode;
                return null == r ? null : l.createPortal(t, r)
            }

            function y(e) {
                var t = e.children,
                    r = (0, f.usePaymentContext)().footerNode;
                return null == r ? null : l.createPortal(t, r)
            }
        },
        69427: (e, t, r) => {
            "use strict";
            r.d(t, {
                nL: () => n,
                Cj: () => o,
                TD: () => i
            });
            var n, o;
            ! function(e) {
                e[e.DEFAULT = 0] = "DEFAULT";
                e[e.WINTER = 1] = "WINTER"
            }(n || (n = {}));
            ! function(e) {
                e[e.SNOWGLOBE = 1] = "SNOWGLOBE";
                e[e.BOX = 2] = "BOX";
                e[e.CUP = 3] = "CUP";
                e[e.STANDARD_BOX = 4] = "STANDARD_BOX";
                e[e.CAKE = 5] = "CAKE";
                e[e.CHEST = 6] = "CHEST";
                e[e.COFFEE = 7] = "COFFEE"
            }(o || (o = {}));
            var i = Object.freeze({
                IS_BLOCKED_IOS: 32,
                IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS: 64,
                SUPPRESS_NOTIFICATION: 128
            })
        },
        165666: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => s
            });
            var n = r(667294),
                o = r(202351),
                i = r(744564),
                u = r(673679),
                c = r(664625),
                a = r(615796),
                l = r(711531);

            function s() {
                var e = (0, o.e7)([l.Z], (function() {
                        return l.Z.getDefaultBillingCountryCode()
                    })),
                    t = (0, o.e7)([a.Z], (function() {
                        return a.Z.ipCountryCode
                    })),
                    r = (0, o.e7)([c.default], (function() {
                        return c.default.isAuthenticated()
                    }));
                n.useEffect((function() {
                    i.Z.wait((function() {
                        !r || a.Z.isPaymentSourceFetching || l.Z.hasFetchedPaymentSources || u.tZ()
                    }))
                }), [r]);
                n.useEffect((function() {
                    r && !a.Z.ipCountryCodeLoaded && u.GE()
                }), [t, r]);
                return {
                    defaultBillingCountryCode: e,
                    ipCountryCode: t
                }
            }
        },
        383861: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => m
            });
            var n = r(785893),
                o = r(667294),
                i = r(886664),
                u = r(294184),
                c = r.n(u),
                a = r(513328),
                l = r(304548),
                s = r(19120),
                f = r(347365),
                d = r(414094),
                p = r(782786),
                O = r(83471),
                E = (r(128059), r(149096), r(669426)),
                S = r(832520),
                y = r(264628),
                _ = r(2590),
                h = r(473708),
                b = r(103749),
                T = r.n(b),
                v = new Set([O.h8.SKU_SELECT, O.h8.AWAITING_AUTHENTICATION, O.h8.AWAITING_PURCHASE_TOKEN_AUTH, O.h8.CONFIRM]);

            function m(e) {
                var t = e.steps,
                    r = e.currentStep,
                    u = e.body,
                    b = e.paymentError,
                    m = e.header,
                    I = e.footer,
                    P = e.isGift,
                    N = void 0 !== P && P,
                    R = e.giftMessage,
                    g = void 0 === R ? h.Z.Messages.PREMIUM_PAYMENT_IS_GIFT : R,
                    L = e.isSeasonalGift,
                    C = void 0 !== L && L,
                    j = e.hideBreadcrumbs,
                    U = void 0 !== j && j,
                    w = e.isLoading,
                    A = void 0 !== w && w,
                    M = e.purchaseError,
                    x = e.purchaseErrorBlockRef,
                    F = e.planError,
                    k = e.onScroll,
                    D = e.scrollerClassName,
                    Z = e.hasCurrencies,
                    B = void 0 !== Z && Z,
                    G = null;
                null != b && null == (0, O.ly)(b) ? G = b : null != M ? G = M : null != F && (G = F);
                var H = null != G ? G.message : "";
                if (null != G && G instanceof f.HF) {
                    G.code === d.SM.CARD_DECLINED && B && (H += " ".concat(h.Z.Messages.BILLING_ERROR_TRY_ANOTHER));
                    G.code === d.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (H = h.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT);
                    G.code === _.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (H = h.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID)
                }
                var Y = (0, p.usePaymentContext)().stripe;
                A = A || null == Y;
                var W = o.useRef(new a.V7);
                o.useEffect((function() {
                    var e = W.current;
                    null != Y || e.isStarted() ? null != Y && e.stop() : e.start(1e4, (function() {
                        var e = new Error("Stripe took too long to load");
                        (0, y.q2)(e)
                    }));
                    return function() {
                        e.stop()
                    }
                }), [Y]);
                var q = t.includes(O.h8.PAYMENT_TYPE) ? O.h8.PAYMENT_TYPE : O.h8.ADD_PAYMENT_STEPS;
                return (0, n.jsxs)(i.Elements, {
                    options: _.OBo,
                    stripe: Y,
                    children: [m, (0, n.jsxs)("div", {
                        className: c()("paymentModalContent", T().content),
                        children: [N && !C && r !== O.h8.CONFIRM ? (0, n.jsx)(s.Z, {
                            className: T().paymentNote,
                            iconSize: s.Z.Sizes.SMALL,
                            icon: S.Z,
                            color: null == g ? s.Z.Colors.PRIMARY : s.Z.Colors.SECONDARY,
                            children: g
                        }) : null, U ? null : (0, n.jsx)("div", {
                            className: T().breadcrumbsWrapper,
                            children: (0, n.jsx)(E.Z, {
                                activeId: O.Ck.has(r) ? q : r,
                                breadcrumbs: t.filter((function(e) {
                                    return !O.Ck.has(e) && !v.has(e)
                                })).map((function(e) {
                                    return {
                                        id: e,
                                        label: (0, O.DJ)(e)
                                    }
                                }))
                            })
                        }), (0, n.jsxs)("div", {
                            className: T().bodyWrapper,
                            children: [null == G ? null : (0, n.jsx)("div", {
                                className: T().errorBlockWrapper,
                                children: (0, n.jsx)(l.FormErrorBlock, {
                                    ref: x,
                                    children: H
                                })
                            }), A ? (0, n.jsx)(l.Spinner, {
                                className: T().loadingBlock
                            }) : (0, n.jsx)(l.Sequencer, {
                                className: T().sequencer,
                                staticClassName: T().sequencerStatic,
                                animatedNodeClassName: T().sequencerAnimatedNode,
                                fillParent: !0,
                                step: r,
                                steps: t,
                                sideMargin: 20,
                                children: (0, n.jsx)(l.AdvancedScrollerThin, {
                                    onScroll: k,
                                    className: c()(T().scroller, D),
                                    children: u
                                })
                            })]
                        })]
                    }), I]
                })
            }
        },
        688858: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => a
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                u = r(739477),
                c = r.n(u);

            function a(e) {
                var t = e.icon,
                    r = e.iconClassName,
                    o = e.description,
                    u = e.color;
                return (0, n.jsxs)("div", {
                    className: c().perkRow,
                    children: [(0, n.jsx)("div", {
                        className: c().perkIconContainer,
                        children: (0, n.jsx)(t, {
                            color: u,
                            className: i()(c().perkIcon, r)
                        })
                    }), (0,
                        n.jsx)("div", {
                        className: c().perkDescription,
                        children: o
                    })]
                })
            }
        },
        669426: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => h
            });
            var n = r(785893),
                o = r(667294),
                i = r(294184),
                u = r.n(i),
                c = r(304548),
                a = r(107364),
                l = r(718831),
                s = r(70821),
                f = r.n(s);

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function O(e) {
                O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return O(e)
            }

            function E(e, t) {
                return !t || "object" !== y(t) && "function" != typeof t ? function(e) {
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
            var y = function(e) {
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
                    var r, n = O(e);
                    if (t) {
                        var o = O(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return E(this, r)
                }
            }
            const h = function(e) {
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
                }(r, e);
                var t = _(r);

                function r() {
                    d(this, r);
                    var e;
                    (e = t.apply(this, arguments)).renderBreadcrumb = function(t, r) {
                        var o, i = e.props,
                            a = i.activeId,
                            s = i.onBreadcrumbClick,
                            d = i.breadcrumbs,
                            O = i.renderCustomBreadcrumb,
                            E = i.separatorClassName,
                            S = t.id === a,
                            y = r === d.length - 1,
                            _ = null != O ? O(t, S) : (0, n.jsx)("span", {
                                className: u()(f().breadcrumb, (o = {}, p(o, f().activeBreadcrumb, S),
                                    p(o, f().interactiveBreadcrumb, null != s), o)),
                                children: t.label
                            });
                        return (0, n.jsxs)("div", {
                            className: u()(f().breadcrumbWrapper, p({}, f().breadcrumbFinalWrapper, y)),
                            children: [null != s ? (0, n.jsx)(c.Clickable, {
                                tag: "span",
                                onClick: function() {
                                    return e.handleClick(t)
                                },
                                className: f().breadcrumbClickWrapper,
                                children: _
                            }) : _, y ? null : (0, n.jsx)(l.Z, {
                                className: u()(f().breadcrumbArrow, E),
                                direction: l.Z.Directions.RIGHT
                            })]
                        }, t.id)
                    };
                    return e
                }
                var o = r.prototype;
                o.handleClick = function(e) {
                    var t = this.props.onBreadcrumbClick;
                    null != t && t(e)
                };
                o.render = function() {
                    var e = this.props,
                        t = e.breadcrumbs,
                        r = e.className,
                        o = t.map(this.renderBreadcrumb);
                    return (0, n.jsx)(a.Z, {
                        justify: a.Z.Justify.START,
                        className: u()(f().breadcrumbs, r),
                        children: o
                    })
                };
                return r
            }(o.PureComponent)
        },
        718831: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => b
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                u = r(713068),
                c = r(388054),
                a = r(319497),
                l = r(67183),
                s = r(304548),
                f = r(633878),
                d = r(794308),
                p = r.n(d);

            function O(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        O(e, t, r[t])
                    }))
                }
                return e
            }

            function S(e, t) {
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

            function y(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            var _ = {
                    UP: p().directionUp,
                    RIGHT: p().directionRight,
                    DOWN: p().directionDown,
                    LEFT: p().directionLeft
                },
                h = function(e) {
                    var t = e.direction,
                        r = void 0 === t ? _.DOWN : t,
                        o = e.width,
                        d = void 0 === o ? 24 : o,
                        h = e.height,
                        b = void 0 === h ? 24 : h,
                        T = e.color,
                        v = void 0 === T ? "currentColor" : T,
                        m = e.transition,
                        I = void 0 === m ? p().transition : m,
                        P = e.className,
                        N = e.foreground,
                        R = e.expanded,
                        g = y(e, ["direction", "width", "height", "color", "transition", "className", "foreground", "expanded"]),
                        L = (0, s.useRedesignIconContext)().enabled,
                        C = r;
                    !0 === R ? C = _.DOWN : !1 === R && (C = _.RIGHT);
                    if (L) {
                        var j, U = (j = {}, O(j, _.UP, l.u), O(j, _.DOWN, u.C), O(j, _.LEFT, c.V), O(j, _.RIGHT, a.F), j)[C];
                        return (0, n.jsx)(U, S(E({}, g), {
                            className: P,
                            width: d,
                            height: b,
                            color: v,
                            colorClass: N
                        }))
                    }
                    return (0, n.jsx)("svg", S(E({
                        className: i()(P, I, C),
                        width: d,
                        height: b,
                        viewBox: "0 0 24 24"
                    }, (0, f.Z)(g)), {
                        children: (0,
                            n.jsx)("path", {
                            className: N,
                            fill: "none",
                            stroke: v,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    }))
                };
            h.Directions = _;
            const b = h
        },
        391438: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => l
            });
            var n = r(281110),
                o = r(652591);

            function i(e, t, r) {
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
                        i(e, t, r[t])
                    }))
                }
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function a(e, t, r) {
                var n = t.trackedActionData,
                    i = c(t, ["trackedActionData"]),
                    a = {
                        url: i.url,
                        request_method: r
                    };
                return new Promise((function(t, r) {
                    e(i).then((function(e) {
                        var r = n.properties;
                        "function" == typeof n.properties && (r = n.properties(e));
                        (0, o.trackNetworkAction)(n.event, u({
                            status_code: e.status
                        }, a, r));
                        t(e)
                    })).catch((function(e) {
                        var t, i, c = n.properties;
                        "function" == typeof n.properties && (c = n.properties(e));
                        (0, o.trackNetworkAction)(n.event, u({
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (i = e.body) || void 0 === i ? void 0 : i.message
                        }, a, c));
                        r(e)
                    }))
                }))
            }
            const l = {
                get: function(e) {
                    return a(n.ZP.get, e, "get")
                },
                post: function(e) {
                    return a(n.ZP.post, e, "post")
                },
                put: function(e) {
                    return a(n.ZP.put, e, "put")
                },
                patch: function(e) {
                    return a(n.ZP.patch, e, "patch")
                },
                delete: function(e) {
                    return a(n.ZP.delete, e, "del")
                }
            }
        }
    }
]);