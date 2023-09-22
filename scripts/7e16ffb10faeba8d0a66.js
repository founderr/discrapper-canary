(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [22089], {
        500996: (e, t, r) => {
            e.exports = r.p + "d1dab93347ab65e2b31d9dc39c9c5a9a.svg"
        },
        595138: (e, t, r) => {
            "use strict";
            r.d(t, {
                yD: () => s,
                p0: () => f,
                Qv: () => d
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
                return p.apply(this, arguments)
            }

            function p() {
                return (p = a((function(e) {
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

            function d() {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = a((function() {
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
                Z: () => v
            });
            var n = r(785893),
                o = r(667294),
                i = r(294184),
                u = r.n(i),
                c = r(107364),
                a = r(350762),
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

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function d(e, t) {
                return !t || "object" !== y(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function E(e, t) {
                E = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return E(e, t)
            }
            var O, _, S, y = function(e) {
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
                    var r, n = p(e);
                    if (t) {
                        var o = p(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return d(this, r)
                }
            }! function(e) {
                e.PRIMARY = "primary";
                e.SECONDARY = "secondary";
                e.WARNING = "warning";
                e.ERROR = "error"
            }(O || (O = {}));
            ! function(e) {
                e.SMALL = "small";
                e.LARGE = "large";
                e.NONE = "none"
            }(_ || (_ = {}));
            var b, h = (f(S = {}, O.PRIMARY, l().colorPrimary), f(S, O.SECONDARY, l().colorSecondary),
                    f(S, O.WARNING, l().colorWarning), f(S, O.ERROR, l().colorError), S),
                I = (f(b = {}, _.SMALL, l().small), f(b, _.LARGE, l().large), f(b, _.NONE, null), b),
                P = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && E(e, t)
                    }(r, e);
                    var t = T(r);

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
                            className: u()(l().note, h[r], a),
                            align: c.Z.Align.CENTER,
                            children: [(0, n.jsx)(t, {
                                className: u()(l().icon, I[i], s)
                            }), (0, n.jsx)("div", {
                                children: o
                            })]
                        })
                    };
                    return r
                }(o.PureComponent);
            P.Colors = O;
            P.Sizes = _;
            const v = P
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
                                return [4, Promise.all([r.e(40532), r.e(29392), r.e(39685), r.e(47007), r.e(79249), r.e(69876), r.e(6543), r.e(29342), r.e(84832), r.e(27499), r.e(79913), r.e(27764), r.e(64466), r.e(92465), r.e(45353), r.e(10675), r.e(73679), r.e(73727), r.e(87440), r.e(52555), r.e(61953), r.e(84441), r.e(67367), r.e(14606), r.e(4230), r.e(24501), r.e(34669)]).then(r.bind(r, 624501))];
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
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
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
            var d = function(e) {
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
                    var r, n = a(e);
                    if (t) {
                        var o = a(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return f(this, r)
                }
            }
            var O = {},
                _ = {},
                S = [];

            function y(e) {
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
                            O[f.id] = i.Z.createFromServer(f);
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
                r && (O = l({}, O));
                return r
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
                    t && p(e, t)
                }(r, e);
                var t = E(r);

                function r() {
                    u(this, r);
                    return t.apply(this, arguments)
                }
                var n = r.prototype;
                n.getApplications = function() {
                    return O
                };
                n.getGuildApplication = function(e, t) {
                    if (null != e) {
                        var r = !0,
                            n = !1,
                            o = void 0;
                        try {
                            for (var i, u = Object.values(O)[Symbol.iterator](); !(r = (i = u.next()).done); r = !0) {
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
                    return null == e ? S : _[e]
                };
                n.getApplication = function(e) {
                    return O[e]
                };
                n.__getLocalVars = function() {
                    return {
                        applicationsById: O,
                        applicationIdsByGuild: _,
                        EMPTY_ARRAY: S
                    }
                };
                return r
            }(n.ZP.Store);
            T.displayName = "ApplicationStore";
            const b = new T(o.Z, {
                APPLICATION_FETCH_SUCCESS: function(e) {
                    var t = e.application;
                    O = s(l({}, O), c({}, t.id, i.Z.createFromServer(t)))
                },
                APPLICATIONS_FETCH_SUCCESS: function(e) {
                    var t = e.applications,
                        r = l({}, O),
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
                    O = r
                },
                APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: y,
                ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: y,
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
                                O[f.id] = f;
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
                        O = l({}, O);
                        _[r] = o;
                        var p = {};
                        for (var d in _) p[d] = _[d];
                        _ = p
                    }
                    return n
                },
                CONNECTION_OPEN: function() {
                    O = {};
                    _ = {}
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
                L9: () => p,
                no: () => d,
                ND: () => E,
                WC: () => _,
                z8: () => S,
                km: () => T,
                k0: () => b,
                af: () => h
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

            function p(e) {
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
            var d = (s(u = {}, i.PRESET_DOCUMENTS, [{
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
                E = [{
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

            function O(e, t) {
                return {
                    value: e,
                    get label() {
                        return null != t ? t() : e
                    }
                }
            }
            var _ = [O(n.RESOLUTION_720), O(n.RESOLUTION_1080), O(n.RESOLUTION_1440), O(n.RESOLUTION_SOURCE, (function() {
                    return l.Z.Messages.SCREENSHARE_SOURCE
                }))],
                S = [O(n.RESOLUTION_720), O(n.RESOLUTION_1080), O(n.RESOLUTION_1440)],
                y = function(e) {
                    return "".concat(e, "p")
                },
                T = [O(n.RESOLUTION_480, (function() {
                    return y(n.RESOLUTION_480)
                })), O(n.RESOLUTION_720, (function() {
                    return y(n.RESOLUTION_720)
                })), O(n.RESOLUTION_1080, (function() {
                    return y(n.RESOLUTION_1080)
                })), O(n.RESOLUTION_1440, (function() {
                    return y(n.RESOLUTION_1440)
                })), O(n.RESOLUTION_SOURCE, (function() {
                    return l.Z.Messages.SCREENSHARE_SOURCE
                }))],
                b = [O(o.FPS_15), O(o.FPS_30), O(o.FPS_60)],
                h = [O(o.FPS_15, (function() {
                    return l.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_15
                    })
                })), O(o.FPS_30, (function() {
                    return l.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_30
                    })
                })), O(o.FPS_60, (function() {
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
                i = r(882723),
                u = r(153686),
                c = r(19585),
                a = r(782786),
                l = r(83471),
                s = r(383861),
                f = r(688858),
                p = r(930865),
                d = r(594302),
                E = r(2590),
                O = r(473708),
                _ = r(717826),
                S = r.n(_),
                y = r(518280),
                T = r.n(y);

            function b(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function h(e) {
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

            function I(e, t) {
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

            function P(e, t) {
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
            var v = "premium-guild-subscription-upsell-modal-header";

            function N(e) {
                var t = e.title,
                    r = e.subtitle,
                    o = e.image;
                return (0, n.jsxs)("div", {
                    className: S().header,
                    children: [(0, n.jsx)(i.Heading, {
                        variant: "heading-xl/semibold",
                        id: v,
                        color: "header-primary",
                        className: T().marginBottom8,
                        children: t
                    }), (0, n.jsx)(i.Text, {
                        variant: "text-md/normal",
                        className: S().subtitleText,
                        children: r
                    }), o]
                })
            }
            var m = function(e) {
                    var t = e.onClose,
                        r = e.perks,
                        o = e.perkIntro,
                        u = void 0 === o ? O.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER : o,
                        c = e.headerProps;
                    return (0, n.jsxs)("div", {
                        className: S().wrapper,
                        children: [(0, n.jsx)(i.ModalCloseButton, {
                            className: S().closeButton,
                            onClick: function() {
                                t()
                            }
                        }), (0, n.jsx)(R, {
                            headerProps: c,
                            perkIntro: u
                        }), (0, n.jsx)("div", {
                            className: S().perks,
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
                        children: [null != t ? (0, n.jsx)(N, h({}, t)) : (0, n.jsx)("img", {
                            className: S().heroImage,
                            src: r(500996),
                            alt: O.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER_IMG_ALT_TEXT
                        }), (0, n.jsx)(i.Text, {
                            variant: "text-md/normal",
                            className: S().heading,
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
                            section: E.jXE.PREMIUM_GUILD_UPSELL_MODAL,
                            object: E.qAy.BUTTON_CTA,
                            objectType: null != r ? (0, p.ge)(r) : null
                        };
                    return (0, n.jsxs)(i.ModalFooter, {
                        className: S().footer,
                        children: [(0, n.jsx)(i.Button, {
                            size: i.Button.Sizes.SMALL,
                            color: i.Button.Colors.PRIMARY,
                            look: i.Button.Looks.LINK,
                            onClick: function() {
                                o()
                            },
                            children: O.Z.Messages.CLOSE
                        }), (0, n.jsx)(d.Z, {
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
                    p = e.perkIntro,
                    d = e.headerProps,
                    E = e.onClose,
                    O = P(e, ["analyticsSourceLocation", "guild", "targetBoostedGuildTier", "perks", "perkIntro", "headerProps", "onClose"]),
                    _ = (0, c.Z)(u.Z.ACTIVITY_DIRECTORY).AnalyticsLocationProvider;
                return (0, n.jsx)(_, {
                    children: (0, n.jsx)(a.PaymentContextProvider, {
                        activeSubscription: null,
                        stepConfigs: [],
                        skuIDs: [],
                        children: (0, n.jsx)(i.ModalRoot, I(h({}, O), {
                            "aria-labelledby": v,
                            children: (0, n.jsx)(s.Z, {
                                hideBreadcrumbs: !0,
                                body: (0, n.jsx)(m, {
                                    onClose: E,
                                    perks: f,
                                    perkIntro: p,
                                    headerProps: d
                                }),
                                footer: (0, n.jsx)(g, {
                                    guild: r,
                                    targetBoostedGuildTier: o,
                                    onClose: E,
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
        128059: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => E
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                u = r(818103),
                c = r(669426),
                a = r(644144),
                l = r(782786),
                s = r(83471),
                f = r(473708),
                p = r(14346),
                d = r.n(p);

            function E(e) {
                var t, r = e.className,
                    o = e.isEligibleForTrial,
                    p = void 0 !== o && o,
                    E = (0, l.usePaymentContext)(),
                    O = E.step,
                    _ = E.breadcrumbs,
                    S = E.startedPaymentFlowWithPaymentSourcesRef,
                    y = E.isGift,
                    T = E.selectedSkuId,
                    b = E.giftRecipient;
                if (null == _ || 0 === _.length || (0, a.a8)(b)) return null;
                t = (0, u.Wt)({
                    isTrial: p,
                    isGift: y,
                    selectedSkuId: T
                }).enabled ? [{
                    id: s.h8.REVIEW,
                    label: f.Z.Messages.BILLING_STEP_PLAN_AND_PAYMENT
                }] : _.filter((function(e) {
                    var t = e.id !== s.h8.ADD_PAYMENT_STEPS,
                        r = e.id === s.h8.ADD_PAYMENT_STEPS && !S.current;
                    return !p || p && (t || r)
                }));
                return (0, n.jsx)("div", {
                    className: i()("breadcrumb", d().wrapper, r),
                    children: (0, n.jsx)(c.Z, {
                        activeId: O,
                        breadcrumbs: t
                    })
                })
            }
        },
        149096: (e, t, r) => {
            "use strict";
            r.d(t, {
                ZP: () => O,
                C3: () => _,
                O3: () => S
            });
            var n = r(785893),
                o = r(667294),
                i = r(294184),
                u = r.n(i),
                c = r(441143),
                a = r.n(c),
                l = r(973935),
                s = r(882723),
                f = r(782786),
                p = r(758614),
                d = r.n(p);

            function E(e, t) {
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

            function O(e) {
                var t, r, i, c, l, p = function(e) {
                        return {
                            header: e.header,
                            isLargeModal: e.isLargeModal,
                            stepProps: E(e, ["header", "isLargeModal"])
                        }
                    }(e),
                    O = p.header,
                    _ = p.isLargeModal,
                    S = p.stepProps,
                    y = (0,
                        f.usePaymentContext)(),
                    T = y.step,
                    b = y.stepConfigs,
                    h = y.setBodyNode,
                    I = y.setFooterNode,
                    P = y.setModalOverlayNode,
                    v = y.setReadySlideId,
                    N = b.find((function(e) {
                        return e.key === T
                    }));
                o.useEffect((function() {
                    P(null)
                }), [T, P]);
                a()(null != N, "Unknown step for current payment flow.");
                var m, R = null !== (l = null == N || null === (t = N.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== l && l,
                    g = null == N || null === (r = N.options) || void 0 === r ? void 0 : r.bodyClassName,
                    L = void 0 !== _ && _ ? d().sliderBodyLarge : null == N || null === (i = N.options) || void 0 === i ? void 0 : i.sliderBodyClassName;
                return (0, n.jsxs)(n.Fragment, {
                    children: [null === (m = null == N || null === (c = N.options) || void 0 === c ? void 0 : c.renderHeader) || void 0 === m || m ? O : null, N.renderStep(S), null == T || R ? null : (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(s.ModalContent, {
                            className: u()(d().body, g),
                            children: (0, n.jsx)(s.Slides, {
                                activeSlide: T,
                                centered: !1,
                                onSlideReady: function(e) {
                                    return v(e)
                                },
                                children: b.filter((function(e) {
                                    return null != e.key
                                })).map((function(e) {
                                    return (0, n.jsx)(s.Slide, {
                                        id: e.key,
                                        children: (0,
                                            n.jsx)("form", {
                                            className: u()(d().sliderBody, L),
                                            ref: function(e) {
                                                return h(e)
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
                                return I(e)
                            }
                        }), (0, n.jsx)("div", {
                            ref: function(e) {
                                return P(e)
                            }
                        })]
                    })]
                })
            }

            function _(e) {
                var t = e.children,
                    r = (0, f.usePaymentContext)().bodyNode;
                return null == r ? null : l.createPortal(t, r)
            }

            function S(e) {
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
                IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS: 64
            })
        },
        470387: (e, t, r) => {
            "use strict";
            r.d(t, {
                R: () => n,
                Z: () => i
            });
            var n, o = r(260561);
            ! function(e) {
                e[e.NONE = 0] = "NONE";
                e[e.BROWSER_AUTOFILL = 1] = "BROWSER_AUTOFILL";
                e[e.MERGE_PLAN_SELECT_TO_REVIEW = 2] = "MERGE_PLAN_SELECT_TO_REVIEW"
            }(n || (n = {}));
            const i = (0, o.B)({
                id: "2023-08_checkout_v2_parent",
                label: "Checkout V2 Parent",
                kind: "user",
                defaultConfig: {
                    experiment: n.NONE
                },
                treatments: [{
                    id: 1,
                    label: "Browser Autofill",
                    config: {
                        experiment: n.BROWSER_AUTOFILL
                    }
                }, {
                    id: 2,
                    label: "Merge Plan Select to Review",
                    config: {
                        experiment: n.MERGE_PLAN_SELECT_TO_REVIEW
                    }
                }]
            })
        },
        818103: (e, t, r) => {
            "use strict";
            r.d(t, {
                Wt: () => a,
                $g: () => l,
                D3: () => s
            });
            var n = r(260561),
                o = r(116094),
                i = r(470387),
                u = r(203600),
                c = (0, n.B)({
                    id: "2023-07_move_plan_select_to_review",
                    label: "Move plan select to review step",
                    kind: "user",
                    defaultConfig: {
                        enabled: !1,
                        defaultToMonthlyPlan: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enabled with monthly default",
                        config: {
                            enabled: !0,
                            defaultToMonthlyPlan: !0
                        }
                    }, {
                        id: 2,
                        label: "Enabled with yearly default",
                        config: {
                            enabled: !0,
                            defaultToMonthlyPlan: !1
                        }
                    }]
                });

            function a(e) {
                var t = e.isTrial,
                    r = e.isGift,
                    n = e.selectedSkuId;
                if (t || r || null == n || !u.YQ.includes(n)) return {
                    enabled: !1,
                    defaultToMonthlyPlan: !1
                };
                if (i.Z.getCurrentConfig({
                        location: "fa931a_1"
                    }).experiment === i.R.MERGE_PLAN_SELECT_TO_REVIEW) {
                    return c.getCurrentConfig({
                        location: "fa931a_2"
                    }, {
                        autoTrackExposure: !0
                    })
                }
                return {
                    enabled: !1,
                    defaultToMonthlyPlan: !1
                }
            }

            function l(e, t, r) {
                var n = !1;
                if (e && null != t) {
                    null == t.invoiceItems.find((function(e) {
                        return e.subscriptionPlanId === r.id
                    })) && (n = !0)
                }
                return n
            }

            function s(e, t, r, n) {
                var i = e.defaultToMonthlyPlan,
                    c = null != r ? (0, o.Af)(r) : null,
                    a = i ? u.IW[t] : u.mn[t],
                    l = null != n ? n : a;
                null != c ? l === c.planId && l === u.IW[t] ? l = u.mn[t] : l === c.planId && l === u.mn[t] ? l = u.IW[t] : c.planId !== u.Xh.PREMIUM_YEAR_TIER_0 && c.planId !== u.Xh.PREMIUM_YEAR_TIER_1 || l !== u.Xh.PREMIUM_MONTH_TIER_2 || (l = u.Xh.PREMIUM_YEAR_TIER_2) : l === u.Xh.PREMIUM_YEAR_TIER_1 && (l = u.Xh.PREMIUM_MONTH_TIER_1);
                return l
            }
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
                    t = (0,
                        o.e7)([a.Z], (function() {
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
                Z: () => P
            });
            var n = r(785893),
                o = r(667294),
                i = r(886664),
                u = r(294184),
                c = r.n(u),
                a = r(513328),
                l = r(882723),
                s = r(19120),
                f = r(347365),
                p = r(414094),
                d = r(782786),
                E = r(83471),
                O = (r(128059), r(149096), r(669426)),
                _ = r(832520),
                S = r(264628),
                y = r(2590),
                T = r(473708),
                b = r(152221),
                h = r.n(b),
                I = new Set([E.h8.SKU_SELECT, E.h8.AWAITING_AUTHENTICATION, E.h8.AWAITING_PURCHASE_TOKEN_AUTH, E.h8.CONFIRM]);

            function P(e) {
                var t = e.steps,
                    r = e.currentStep,
                    u = e.body,
                    b = e.paymentError,
                    P = e.header,
                    v = e.footer,
                    N = e.isGift,
                    m = void 0 !== N && N,
                    R = e.giftMessage,
                    g = void 0 === R ? T.Z.Messages.PREMIUM_PAYMENT_IS_GIFT : R,
                    L = e.isSeasonalGift,
                    C = void 0 !== L && L,
                    U = e.hideBreadcrumbs,
                    j = void 0 !== U && U,
                    A = e.isLoading,
                    M = void 0 !== A && A,
                    w = e.purchaseError,
                    F = e.purchaseErrorBlockRef,
                    x = e.planError,
                    k = e.onScroll,
                    D = e.scrollerClassName,
                    B = e.hasCurrencies,
                    Z = void 0 !== B && B,
                    G = null;
                null != b && null == (0, E.ly)(b) ? G = b : null != w ? G = w : null != x && (G = x);
                var Y = null != G ? G.message : "";
                if (null != G && G instanceof f.HF) {
                    G.code === p.SM.CARD_DECLINED && Z && (Y += " ".concat(T.Z.Messages.BILLING_ERROR_TRY_ANOTHER));
                    G.code === p.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (Y = T.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT);
                    G.code === y.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (Y = T.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID)
                }
                var H = (0, d.usePaymentContext)().stripe;
                M = M || null == H;
                var W = o.useRef(new a.V7);
                o.useEffect((function() {
                    var e = W.current;
                    null != H || e.isStarted() ? null != H && e.stop() : e.start(1e4, (function() {
                        var e = new Error("Stripe took too long to load");
                        (0, S.q2)(e)
                    }));
                    return function() {
                        e.stop()
                    }
                }), [H]);
                var q = t.includes(E.h8.PAYMENT_TYPE) ? E.h8.PAYMENT_TYPE : E.h8.ADD_PAYMENT_STEPS;
                return (0, n.jsxs)(i.Elements, {
                    options: y.OBo,
                    stripe: H,
                    children: [P, (0, n.jsxs)("div", {
                        className: c()("paymentModalContent", h().content),
                        children: [m && !C && r !== E.h8.CONFIRM ? (0, n.jsx)(s.Z, {
                            className: h().paymentNote,
                            iconSize: s.Z.Sizes.SMALL,
                            icon: _.Z,
                            color: null == g ? s.Z.Colors.PRIMARY : s.Z.Colors.SECONDARY,
                            children: g
                        }) : null, j ? null : (0, n.jsx)("div", {
                            className: h().breadcrumbsWrapper,
                            children: (0, n.jsx)(O.Z, {
                                activeId: E.Ck.has(r) ? q : r,
                                breadcrumbs: t.filter((function(e) {
                                    return !E.Ck.has(e) && !I.has(e)
                                })).map((function(e) {
                                    return {
                                        id: e,
                                        label: (0, E.DJ)(e)
                                    }
                                }))
                            })
                        }), (0, n.jsxs)("div", {
                            className: h().bodyWrapper,
                            children: [null == G ? null : (0, n.jsx)("div", {
                                className: h().errorBlockWrapper,
                                children: (0, n.jsx)(l.FormErrorBlock, {
                                    ref: F,
                                    children: Y
                                })
                            }), M ? (0, n.jsx)(l.Spinner, {
                                className: h().loadingBlock
                            }) : (0, n.jsx)(l.Sequencer, {
                                className: h().sequencer,
                                staticClassName: h().sequencerStatic,
                                animatedNodeClassName: h().sequencerAnimatedNode,
                                fillParent: !0,
                                step: r,
                                steps: t,
                                sideMargin: 20,
                                children: (0, n.jsx)(l.AdvancedScrollerThin, {
                                    onScroll: k,
                                    className: c()(h().scroller, D),
                                    children: u
                                })
                            })]
                        })]
                    }), v]
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
                u = r(32912),
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
                    }), (0, n.jsx)("div", {
                        className: c().perkDescription,
                        children: o
                    })]
                })
            }
        },
        669426: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => T
            });
            var n = r(785893),
                o = r(667294),
                i = r(294184),
                u = r.n(i),
                c = r(882723),
                a = r(107364),
                l = r(718831),
                s = r(49032),
                f = r.n(s);

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
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

            function E(e) {
                E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return E(e)
            }

            function O(e, t) {
                return !t || "object" !== S(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function _(e, t) {
                _ = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return _(e, t)
            }
            var S = function(e) {
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
                    var r, n = E(e);
                    if (t) {
                        var o = E(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return O(this, r)
                }
            }
            const T = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && _(e, t)
                }(r, e);
                var t = y(r);

                function r() {
                    p(this, r);
                    var e;
                    (e = t.apply(this, arguments)).renderBreadcrumb = function(t, r) {
                        var o, i = e.props,
                            a = i.activeId,
                            s = i.onBreadcrumbClick,
                            p = i.breadcrumbs,
                            E = i.renderCustomBreadcrumb,
                            O = i.separatorClassName,
                            _ = t.id === a,
                            S = r === p.length - 1,
                            y = null != E ? E(t, _) : (0, n.jsx)("span", {
                                className: u()(f().breadcrumb, (o = {}, d(o, f().activeBreadcrumb, _), d(o, f().interactiveBreadcrumb, null != s), o)),
                                children: t.label
                            });
                        return (0, n.jsxs)("div", {
                            className: u()(f().breadcrumbWrapper, d({}, f().breadcrumbFinalWrapper, S)),
                            children: [null != s ? (0, n.jsx)(c.Clickable, {
                                tag: "span",
                                onClick: function() {
                                    return e.handleClick(t)
                                },
                                className: f().breadcrumbClickWrapper,
                                children: y
                            }) : y, S ? null : (0, n.jsx)(l.Z, {
                                className: u()(f().breadcrumbArrow, O),
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
                s = r(882723),
                f = r(633878),
                p = r(871979),
                d = r.n(p);

            function E(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        E(e, t, r[t])
                    }))
                }
                return e
            }

            function _(e, t) {
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

            function S(e, t) {
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
            var y = {
                    UP: d().directionUp,
                    RIGHT: d().directionRight,
                    DOWN: d().directionDown,
                    LEFT: d().directionLeft
                },
                T = function(e) {
                    var t = e.direction,
                        r = void 0 === t ? y.DOWN : t,
                        o = e.width,
                        p = void 0 === o ? 24 : o,
                        T = e.height,
                        b = void 0 === T ? 24 : T,
                        h = e.color,
                        I = void 0 === h ? "currentColor" : h,
                        P = e.transition,
                        v = void 0 === P ? d().transition : P,
                        N = e.className,
                        m = e.foreground,
                        R = e.expanded,
                        g = S(e, ["direction", "width", "height", "color", "transition", "className", "foreground", "expanded"]),
                        L = (0, s.useRedesignIconContext)().enabled,
                        C = r;
                    !0 === R ? C = y.DOWN : !1 === R && (C = y.RIGHT);
                    if (L) {
                        var U, j = (U = {}, E(U, y.UP, l.u), E(U, y.DOWN, u.C), E(U, y.LEFT, c.V), E(U, y.RIGHT, a.F), U)[C];
                        return (0, n.jsx)(j, _(O({}, g), {
                            width: p,
                            height: b,
                            color: I,
                            colorClass: m
                        }))
                    }
                    return (0, n.jsx)("svg", _(O({
                        className: i()(N, v, C),
                        width: p,
                        height: b,
                        viewBox: "0 0 24 24"
                    }, (0, f.Z)(g)), {
                        children: (0, n.jsx)("path", {
                            className: m,
                            fill: "none",
                            stroke: I,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    }))
                };
            T.Directions = y;
            const b = T
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
                        (0,
                            o.trackNetworkAction)(n.event, u({
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