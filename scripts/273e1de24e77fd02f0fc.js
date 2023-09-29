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

            function l(e, t, r, n, o, i, u) {
                try {
                    var l = e[i](u),
                        c = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function c(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function u(e) {
                            l(i, n, o, u, c, "next", e)
                        }

                        function c(e) {
                            l(i, n, o, u, c, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var a = function(e, t) {
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
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
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
                        }([i, l])
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
                return (d = c((function(e) {
                    var t, r, i, l, c, s;
                    return a(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                t = e.withSku, r = void 0 !== t && t, i = e.withApplication, l = void 0 !== i && i, c = e.entitlementType;
                                o.Z.dispatch({
                                    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
                                });
                                a.label = 1;
                            case 1:
                                a.trys.push([1, 3, , 4]);
                                return [4, n.ZP.get({
                                    url: u.ANM.ENTITLEMENTS_FOR_USER,
                                    query: {
                                        with_sku: r,
                                        with_application: l,
                                        entitlement_type: c
                                    }
                                })];
                            case 2:
                                s = a.sent();
                                o.Z.dispatch({
                                    type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
                                    entitlements: s.body
                                });
                                return [3, 4];
                            case 3:
                                a.sent();
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
                return E.apply(this, arguments)
            }

            function E() {
                return (E = c((function() {
                    var e;
                    return a(this, (function(t) {
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
                Z: () => P
            });
            var n = r(785893),
                o = r(667294),
                i = r(294184),
                u = r.n(i),
                l = r(107364),
                c = r(543151),
                a = r.n(c);

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
            }(O || (O = {}));
            ! function(e) {
                e.SMALL = "small";
                e.LARGE = "large";
                e.NONE = "none"
            }(_ || (_ = {}));
            var h, b = (f(S = {}, O.PRIMARY, a().colorPrimary), f(S, O.SECONDARY, a().colorSecondary),
                    f(S, O.WARNING, a().colorWarning), f(S, O.ERROR, a().colorError), S),
                I = (f(h = {}, _.SMALL, a().small), f(h, _.LARGE, a().large), f(h, _.NONE, null), h),
                v = function(e) {
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
                            c = e.className,
                            s = e.iconClassName;
                        return (0, n.jsxs)(l.Z, {
                            className: u()(a().note, b[r], c),
                            align: l.Z.Align.CENTER,
                            children: [(0, n.jsx)(t, {
                                className: u()(a().icon, I[i], s)
                            }), (0, n.jsx)("div", {
                                children: o
                            })]
                        })
                    };
                    return r
                }(o.PureComponent);
            v.Colors = O;
            v.Sizes = _;
            const P = v
        },
        320142: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => l
            });
            var n = r(120415);

            function o(e, t, r, n, o, i, u) {
                try {
                    var l = e[i](u),
                        c = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function i(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, i) {
                        var u = e.apply(t, r);

                        function l(e) {
                            o(u, n, i, l, c, "next", e)
                        }

                        function c(e) {
                            o(u, n, i, l, c, "throw", e)
                        }
                        l(void 0)
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
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
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
                        }([i, l])
                    }
                }
            };

            function l(e, t) {
                return c.apply(this, arguments)
            }

            function c() {
                return (c = i((function(e, t) {
                    var o, i, l, c;
                    return u(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                0;
                                return [4, Promise.all([r.e(40532), r.e(39685), r.e(47007), r.e(6543), r.e(29342), r.e(84832), r.e(27499), r.e(79913), r.e(64466), r.e(92465), r.e(45353), r.e(10675), r.e(73727), r.e(52555), r.e(61953), r.e(84441), r.e(67367), r.e(33227), r.e(24501), r.e(17667)]).then(r.bind(r, 624501))];
                            case 1:
                                o = u.sent(), i = o.default;
                                if (null != (l = i(e, {
                                        skipExtensionCheck: t,
                                        analyticsLocations: []
                                    }))) l(null);
                                else if (n.FB) window.open(e);
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
        333398: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => h
            });
            var n = r(202351),
                o = r(744564),
                i = r(451936);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        l(e, t, r[t])
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
                    var r, n = c(e);
                    if (t) {
                        var o = c(this).constructor;
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
                    for (var l, c = t[Symbol.iterator](); !(n = (l = c.next()).done); n = !0) {
                        var s = l.value.sku;
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
                        n || null == c.return || c.return()
                    } finally {
                        if (o) throw u
                    }
                }
                r && (O = a({}, O));
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
                    t && d(e, t)
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
                                var l = i.value;
                                if (l.guildId === e && l.type === t) return l
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
                return r
            }(n.ZP.Store);
            T.displayName = "ApplicationStore";
            const h = new T(o.Z, {
                APPLICATION_FETCH_SUCCESS: function(e) {
                    var t = e.application;
                    O = s(a({}, O), l({}, t.id, i.Z.createFromServer(t)))
                },
                APPLICATIONS_FETCH_SUCCESS: function(e) {
                    var t = e.applications,
                        r = a({}, O),
                        n = !0,
                        o = !1,
                        u = void 0;
                    try {
                        for (var l, c = t[Symbol.iterator](); !(n = (l = c.next()).done); n = !0) {
                            var s = l.value;
                            r[s.id] = i.Z.createFromServer(s)
                        }
                    } catch (e) {
                        o = !0;
                        u = e
                    } finally {
                        try {
                            n || null == c.return || c.return()
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
                        l = void 0;
                    try {
                        for (var c, s = t[Symbol.iterator](); !(i = (c = s.next()).done); i = !0) {
                            var f = c.value.application;
                            if (null != f) {
                                o.push(f.id);
                                O[f.id] = f;
                                n = !0
                            }
                        }
                    } catch (e) {
                        u = !0;
                        l = e
                    } finally {
                        try {
                            i || null == s.return || s.return()
                        } finally {
                            if (u) throw l
                        }
                    }
                    if (n) {
                        O = a({}, O);
                        _[r] = o;
                        var d = {};
                        for (var p in _) d[p] = _[p];
                        _ = d
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
                Q: () => l,
                Z: () => c
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

            function l() {
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
            const c = i
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
                ND: () => E,
                WC: () => _,
                z8: () => S,
                km: () => T,
                k0: () => h,
                af: () => b
            });
            var n, o, i, u, l = r(2590),
                c = r(203600),
                a = r(473708);

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
                E = [{
                    resolution: n.RESOLUTION_SOURCE,
                    fps: o.FPS_60,
                    quality: c.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: n.RESOLUTION_SOURCE,
                    fps: o.FPS_30,
                    quality: c.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: n.RESOLUTION_SOURCE,
                    fps: o.FPS_15,
                    quality: c.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: n.RESOLUTION_SOURCE,
                    fps: o.FPS_5,
                    preset: i.PRESET_DOCUMENTS
                }, {
                    resolution: n.RESOLUTION_1440,
                    fps: o.FPS_60,
                    guildPremiumTier: l.Eu4.TIER_2,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: n.RESOLUTION_1440,
                    fps: o.FPS_30,
                    guildPremiumTier: l.Eu4.TIER_2,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: n.RESOLUTION_1440,
                    fps: o.FPS_15,
                    guildPremiumTier: l.Eu4.TIER_2,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: n.RESOLUTION_1080,
                    fps: o.FPS_60,
                    guildPremiumTier: l.Eu4.TIER_2,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: n.RESOLUTION_1080,
                    fps: o.FPS_30,
                    guildPremiumTier: l.Eu4.TIER_2,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: n.RESOLUTION_1080,
                    fps: o.FPS_15,
                    guildPremiumTier: l.Eu4.TIER_2,
                    quality: c.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: n.RESOLUTION_720,
                    fps: o.FPS_60,
                    guildPremiumTier: l.Eu4.TIER_1,
                    quality: c.ys.MID_STREAMING_QUALITY
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
                    guildPremiumTier: l.Eu4.TIER_1,
                    quality: c.ys.MID_STREAMING_QUALITY
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
                    return a.Z.Messages.SCREENSHARE_SOURCE
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
                    return a.Z.Messages.SCREENSHARE_SOURCE
                }))],
                h = [O(o.FPS_15), O(o.FPS_30), O(o.FPS_60)],
                b = [O(o.FPS_15, (function() {
                    return a.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_15
                    })
                })), O(o.FPS_30, (function() {
                    return a.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_30
                    })
                })), O(o.FPS_60, (function() {
                    return a.Z.Messages.STREAM_FPS_OPTION.format({
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
                l = r(19585),
                c = r(782786),
                a = r(83471),
                s = r(383861),
                f = r(688858),
                d = r(930865),
                p = r(594302),
                E = r(2590),
                O = r(473708),
                _ = r(818910),
                S = r.n(_),
                y = r(380203),
                T = r.n(y);

            function h(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        h(e, t, r[t])
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

            function v(e, t) {
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
            var P = "premium-guild-subscription-upsell-modal-header";

            function m(e) {
                var t = e.title,
                    r = e.subtitle,
                    o = e.image;
                return (0, n.jsxs)("div", {
                    className: S().header,
                    children: [(0, n.jsx)(i.Heading, {
                        variant: "heading-xl/semibold",
                        id: P,
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
            var R = function(e) {
                    var t = e.onClose,
                        r = e.perks,
                        o = e.perkIntro,
                        u = void 0 === o ? O.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER : o,
                        l = e.headerProps;
                    return (0, n.jsxs)("div", {
                        className: S().wrapper,
                        children: [(0, n.jsx)(i.ModalCloseButton, {
                            className: S().closeButton,
                            onClick: function() {
                                t()
                            }
                        }), (0, n.jsx)(N, {
                            headerProps: l,
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
                N = function(e) {
                    var t = e.headerProps,
                        u = e.perkIntro;
                    return (0, n.jsxs)(o.Fragment, {
                        children: [null != t ? (0, n.jsx)(m, b({}, t)) : (0, n.jsx)("img", {
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
                        l = {
                            section: E.jXE.PREMIUM_GUILD_UPSELL_MODAL,
                            object: E.qAy.BUTTON_CTA,
                            objectType: null != r ? (0, d.ge)(r) : null
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
                        }), (0, n.jsx)(p.Z, {
                            analyticsLocation: l,
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
                    E = e.onClose,
                    O = v(e, ["analyticsSourceLocation", "guild", "targetBoostedGuildTier", "perks", "perkIntro", "headerProps", "onClose"]),
                    _ = (0, l.Z)(u.Z.ACTIVITY_DIRECTORY).AnalyticsLocationProvider;
                return (0, n.jsx)(_, {
                    children: (0, n.jsx)(c.PaymentContextProvider, {
                        activeSubscription: null,
                        stepConfigs: [],
                        skuIDs: [],
                        children: (0, n.jsx)(i.ModalRoot, I(b({}, O), {
                            "aria-labelledby": P,
                            children: (0, n.jsx)(s.Z, {
                                hideBreadcrumbs: !0,
                                body: (0, n.jsx)(R, {
                                    onClose: E,
                                    perks: f,
                                    perkIntro: d,
                                    headerProps: p
                                }),
                                footer: (0, n.jsx)(g, {
                                    guild: r,
                                    targetBoostedGuildTier: o,
                                    onClose: E,
                                    analyticsSourceLocation: t
                                }),
                                steps: [a.h8.PREMIUM_GUILD_UPSELL],
                                currentStep: a.h8.PREMIUM_GUILD_UPSELL
                            })
                        }))
                    })
                })
            }
        },
        327930: (e, t, r) => {
            "use strict";
            r.d(t, {
                Jv: () => O,
                M0: () => _,
                Qj: () => S,
                Ao: () => y,
                YO: () => T,
                VO: () => h
            });
            var n = r(61209),
                o = r(567403),
                i = r(682776),
                u = r(968696),
                l = r(2590),
                c = r(897196),
                a = Array.from(c.Vg).map((function(e) {
                    return u.Z.escape(e)
                })).join("|"),
                s = new RegExp("^/channels/(\\d+|".concat(l.ME, ")(?:/)?(\\d+|").concat(a, ")?")),
                f = new RegExp("^/channels/(\\d+|".concat(l.ME, ")(?:/)(\\d+|").concat(a, ")(?:/)(\\d+)")),
                d = new RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
                p = new RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
                E = new RegExp("^/events/(\\d+)(?:/)(\\d+)?"),
                O = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+|".concat(l.ME, ")(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?")),
                _ = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)");

            function S(e) {
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

            function y(e) {
                if (null == e) return null;
                var t = e.match(E);
                return null != t && t.length > 1 ? {
                    guildId: t[1],
                    guildEventId: t[2]
                } : null
            }

            function T(e) {
                return !!e.isPrivate() || i.Z.can(l.Plq.VIEW_CHANNEL, e)
            }

            function h(e) {
                var t = e.guildId,
                    r = e.channelId;
                if (null == o.Z.getGuild(t) && t !== l.ME) return !1;
                if (null == r) return !0;
                var i = n.Z.getChannel(r);
                return null != i && T(i)
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
                l = r(669426),
                c = r(644144),
                a = r(782786),
                s = r(83471),
                f = r(473708),
                d = r(441877),
                p = r.n(d);

            function E(e) {
                var t, r = e.className,
                    o = e.isEligibleForTrial,
                    d = void 0 !== o && o,
                    E = (0, a.usePaymentContext)(),
                    O = E.step,
                    _ = E.breadcrumbs,
                    S = E.startedPaymentFlowWithPaymentSourcesRef,
                    y = E.isGift,
                    T = E.selectedSkuId,
                    h = E.giftRecipient;
                if (null == _ || 0 === _.length || (0, c.a8)(h)) return null;
                t = (0, u.Wt)({
                    isTrial: d,
                    isGift: y,
                    selectedSkuId: T
                }).enabled ? [{
                    id: s.h8.REVIEW,
                    label: f.Z.Messages.BILLING_STEP_PLAN_AND_PAYMENT
                }] : _.filter((function(e) {
                    var t = e.id !== s.h8.ADD_PAYMENT_STEPS,
                        r = e.id === s.h8.ADD_PAYMENT_STEPS && !S.current;
                    return !d || d && (t || r)
                }));
                return (0, n.jsx)("div", {
                    className: i()("breadcrumb", p().wrapper, r),
                    children: (0, n.jsx)(l.Z, {
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
                l = r(441143),
                c = r.n(l),
                a = r(973935),
                s = r(304548),
                f = r(782786),
                d = r(384009),
                p = r.n(d);

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
                var t, r, i, l, a, d = function(e) {
                        return {
                            header: e.header,
                            isLargeModal: e.isLargeModal,
                            stepProps: E(e, ["header", "isLargeModal"])
                        }
                    }(e),
                    O = d.header,
                    _ = d.isLargeModal,
                    S = d.stepProps,
                    y = (0, f.usePaymentContext)(),
                    T = y.step,
                    h = y.stepConfigs,
                    b = y.setBodyNode,
                    I = y.setFooterNode,
                    v = y.setModalOverlayNode,
                    P = y.setReadySlideId,
                    m = h.find((function(e) {
                        return e.key === T
                    }));
                o.useEffect((function() {
                    v(null)
                }), [T, v]);
                c()(null != m, "Unknown step for current payment flow.");
                var R, N = null !== (a = null == m || null === (t = m.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== a && a,
                    g = null == m || null === (r = m.options) || void 0 === r ? void 0 : r.bodyClassName,
                    L = void 0 !== _ && _ ? p().sliderBodyLarge : null == m || null === (i = m.options) || void 0 === i ? void 0 : i.sliderBodyClassName;
                return (0, n.jsxs)(n.Fragment, {
                    children: [null === (R = null == m || null === (l = m.options) || void 0 === l ? void 0 : l.renderHeader) || void 0 === R || R ? O : null, m.renderStep(S), null == T || N ? null : (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(s.ModalContent, {
                            className: u()(p().body, g),
                            children: (0, n.jsx)(s.Slides, {
                                activeSlide: T,
                                centered: !1,
                                onSlideReady: function(e) {
                                    return P(e)
                                },
                                children: h.filter((function(e) {
                                    return null != e.key
                                })).map((function(e) {
                                    return (0, n.jsx)(s.Slide, {
                                        id: e.key,
                                        children: (0, n.jsx)("form", {
                                            className: u()(p().sliderBody, L),
                                            ref: function(e) {
                                                return b(e)
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
                                return v(e)
                            }
                        })]
                    })]
                })
            }

            function _(e) {
                var t = e.children,
                    r = (0, f.usePaymentContext)().bodyNode;
                return null == r ? null : a.createPortal(t, r)
            }

            function S(e) {
                var t = e.children,
                    r = (0, f.usePaymentContext)().footerNode;
                return null == r ? null : a.createPortal(t, r)
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
                Wt: () => c,
                $g: () => a,
                D3: () => s
            });
            var n = r(260561),
                o = r(694329),
                i = r(470387),
                u = r(203600),
                l = (0, n.B)({
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

            function c(e) {
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
                    return l.getCurrentConfig({
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

            function a(e, t, r) {
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
                    l = null != r ? (0, o.Af)(r) : null,
                    c = i ? u.IW[t] : u.mn[t],
                    a = null != n ? n : c;
                null != l ? a === l.planId && a === u.IW[t] ? a = u.mn[t] : a === l.planId && a === u.mn[t] ? a = u.IW[t] : l.planId !== u.Xh.PREMIUM_YEAR_TIER_0 && l.planId !== u.Xh.PREMIUM_YEAR_TIER_1 || a !== u.Xh.PREMIUM_MONTH_TIER_2 || (a = u.Xh.PREMIUM_YEAR_TIER_2) : a === u.Xh.PREMIUM_YEAR_TIER_1 && (a = u.Xh.PREMIUM_MONTH_TIER_1);
                return a
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
                l = r(664625),
                c = r(615796),
                a = r(711531);

            function s() {
                var e = (0, o.e7)([a.Z], (function() {
                        return a.Z.getDefaultBillingCountryCode()
                    })),
                    t = (0, o.e7)([c.Z], (function() {
                        return c.Z.ipCountryCode
                    })),
                    r = (0, o.e7)([l.default], (function() {
                        return l.default.isAuthenticated()
                    }));
                n.useEffect((function() {
                    i.Z.wait((function() {
                        !r || c.Z.isPaymentSourceFetching || a.Z.hasFetchedPaymentSources || u.tZ()
                    }))
                }), [r]);
                n.useEffect((function() {
                    r && !c.Z.ipCountryCodeLoaded && u.GE()
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
                Z: () => v
            });
            var n = r(785893),
                o = r(667294),
                i = r(886664),
                u = r(294184),
                l = r.n(u),
                c = r(513328),
                a = r(304548),
                s = r(19120),
                f = r(347365),
                d = r(414094),
                p = r(782786),
                E = r(83471),
                O = (r(128059), r(149096), r(669426)),
                _ = r(832520),
                S = r(264628),
                y = r(2590),
                T = r(473708),
                h = r(103749),
                b = r.n(h),
                I = new Set([E.h8.SKU_SELECT, E.h8.AWAITING_AUTHENTICATION, E.h8.AWAITING_PURCHASE_TOKEN_AUTH, E.h8.CONFIRM]);

            function v(e) {
                var t = e.steps,
                    r = e.currentStep,
                    u = e.body,
                    h = e.paymentError,
                    v = e.header,
                    P = e.footer,
                    m = e.isGift,
                    R = void 0 !== m && m,
                    N = e.giftMessage,
                    g = void 0 === N ? T.Z.Messages.PREMIUM_PAYMENT_IS_GIFT : N,
                    L = e.isSeasonalGift,
                    C = void 0 !== L && L,
                    j = e.hideBreadcrumbs,
                    U = void 0 !== j && j,
                    A = e.isLoading,
                    w = void 0 !== A && A,
                    M = e.purchaseError,
                    x = e.purchaseErrorBlockRef,
                    F = e.planError,
                    k = e.onScroll,
                    D = e.scrollerClassName,
                    Z = e.hasCurrencies,
                    B = void 0 !== Z && Z,
                    G = null;
                null != h && null == (0, E.ly)(h) ? G = h : null != M ? G = M : null != F && (G = F);
                var H = null != G ? G.message : "";
                if (null != G && G instanceof f.HF) {
                    G.code === d.SM.CARD_DECLINED && B && (H += " ".concat(T.Z.Messages.BILLING_ERROR_TRY_ANOTHER));
                    G.code === d.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (H = T.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT);
                    G.code === y.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (H = T.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID)
                }
                var Y = (0, p.usePaymentContext)().stripe;
                w = w || null == Y;
                var W = o.useRef(new c.V7);
                o.useEffect((function() {
                    var e = W.current;
                    null != Y || e.isStarted() ? null != Y && e.stop() : e.start(1e4, (function() {
                        var e = new Error("Stripe took too long to load");
                        (0, S.q2)(e)
                    }));
                    return function() {
                        e.stop()
                    }
                }), [Y]);
                var q = t.includes(E.h8.PAYMENT_TYPE) ? E.h8.PAYMENT_TYPE : E.h8.ADD_PAYMENT_STEPS;
                return (0, n.jsxs)(i.Elements, {
                    options: y.OBo,
                    stripe: Y,
                    children: [v, (0, n.jsxs)("div", {
                        className: l()("paymentModalContent", b().content),
                        children: [R && !C && r !== E.h8.CONFIRM ? (0, n.jsx)(s.Z, {
                            className: b().paymentNote,
                            iconSize: s.Z.Sizes.SMALL,
                            icon: _.Z,
                            color: null == g ? s.Z.Colors.PRIMARY : s.Z.Colors.SECONDARY,
                            children: g
                        }) : null, U ? null : (0, n.jsx)("div", {
                            className: b().breadcrumbsWrapper,
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
                            className: b().bodyWrapper,
                            children: [null == G ? null : (0, n.jsx)("div", {
                                className: b().errorBlockWrapper,
                                children: (0, n.jsx)(a.FormErrorBlock, {
                                    ref: x,
                                    children: H
                                })
                            }), w ? (0, n.jsx)(a.Spinner, {
                                className: b().loadingBlock
                            }) : (0, n.jsx)(a.Sequencer, {
                                className: b().sequencer,
                                staticClassName: b().sequencerStatic,
                                animatedNodeClassName: b().sequencerAnimatedNode,
                                fillParent: !0,
                                step: r,
                                steps: t,
                                sideMargin: 20,
                                children: (0, n.jsx)(a.AdvancedScrollerThin, {
                                    onScroll: k,
                                    className: l()(b().scroller, D),
                                    children: u
                                })
                            })]
                        })]
                    }), P]
                })
            }
        },
        688858: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => c
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                u = r(739477),
                l = r.n(u);

            function c(e) {
                var t = e.icon,
                    r = e.iconClassName,
                    o = e.description,
                    u = e.color;
                return (0, n.jsxs)("div", {
                    className: l().perkRow,
                    children: [(0, n.jsx)("div", {
                        className: l().perkIconContainer,
                        children: (0, n.jsx)(t, {
                            color: u,
                            className: i()(l().perkIcon, r)
                        })
                    }), (0,
                        n.jsx)("div", {
                        className: l().perkDescription,
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
                l = r(304548),
                c = r(107364),
                a = r(718831),
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
                    d(this, r);
                    var e;
                    (e = t.apply(this, arguments)).renderBreadcrumb = function(t, r) {
                        var o, i = e.props,
                            c = i.activeId,
                            s = i.onBreadcrumbClick,
                            d = i.breadcrumbs,
                            E = i.renderCustomBreadcrumb,
                            O = i.separatorClassName,
                            _ = t.id === c,
                            S = r === d.length - 1,
                            y = null != E ? E(t, _) : (0, n.jsx)("span", {
                                className: u()(f().breadcrumb, (o = {}, p(o, f().activeBreadcrumb, _),
                                    p(o, f().interactiveBreadcrumb, null != s), o)),
                                children: t.label
                            });
                        return (0, n.jsxs)("div", {
                            className: u()(f().breadcrumbWrapper, p({}, f().breadcrumbFinalWrapper, S)),
                            children: [null != s ? (0, n.jsx)(l.Clickable, {
                                tag: "span",
                                onClick: function() {
                                    return e.handleClick(t)
                                },
                                className: f().breadcrumbClickWrapper,
                                children: y
                            }) : y, S ? null : (0, n.jsx)(a.Z, {
                                className: u()(f().breadcrumbArrow, O),
                                direction: a.Z.Directions.RIGHT
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
                    return (0, n.jsx)(c.Z, {
                        justify: c.Z.Justify.START,
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
                Z: () => h
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                u = r(713068),
                l = r(388054),
                c = r(319497),
                a = r(67183),
                s = r(304548),
                f = r(633878),
                d = r(794308),
                p = r.n(d);

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
                    UP: p().directionUp,
                    RIGHT: p().directionRight,
                    DOWN: p().directionDown,
                    LEFT: p().directionLeft
                },
                T = function(e) {
                    var t = e.direction,
                        r = void 0 === t ? y.DOWN : t,
                        o = e.width,
                        d = void 0 === o ? 24 : o,
                        T = e.height,
                        h = void 0 === T ? 24 : T,
                        b = e.color,
                        I = void 0 === b ? "currentColor" : b,
                        v = e.transition,
                        P = void 0 === v ? p().transition : v,
                        m = e.className,
                        R = e.foreground,
                        N = e.expanded,
                        g = S(e, ["direction", "width", "height", "color", "transition", "className", "foreground", "expanded"]),
                        L = (0, s.useRedesignIconContext)().enabled,
                        C = r;
                    !0 === N ? C = y.DOWN : !1 === N && (C = y.RIGHT);
                    if (L) {
                        var j, U = (j = {}, E(j, y.UP, a.u), E(j, y.DOWN, u.C), E(j, y.LEFT, l.V), E(j, y.RIGHT, c.F), j)[C];
                        return (0, n.jsx)(U, _(O({}, g), {
                            width: d,
                            height: h,
                            color: I,
                            colorClass: R
                        }))
                    }
                    return (0, n.jsx)("svg", _(O({
                        className: i()(m, P, C),
                        width: d,
                        height: h,
                        viewBox: "0 0 24 24"
                    }, (0, f.Z)(g)), {
                        children: (0,
                            n.jsx)("path", {
                            className: R,
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
            const h = T
        },
        391438: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => a
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

            function l(e, t) {
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

            function c(e, t, r) {
                var n = t.trackedActionData,
                    i = l(t, ["trackedActionData"]),
                    c = {
                        url: i.url,
                        request_method: r
                    };
                return new Promise((function(t, r) {
                    e(i).then((function(e) {
                        var r = n.properties;
                        "function" == typeof n.properties && (r = n.properties(e));
                        (0, o.trackNetworkAction)(n.event, u({
                            status_code: e.status
                        }, c, r));
                        t(e)
                    })).catch((function(e) {
                        var t, i, l = n.properties;
                        "function" == typeof n.properties && (l = n.properties(e));
                        (0, o.trackNetworkAction)(n.event, u({
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (i = e.body) || void 0 === i ? void 0 : i.message
                        }, c, l));
                        r(e)
                    }))
                }))
            }
            const a = {
                get: function(e) {
                    return c(n.ZP.get, e, "get")
                },
                post: function(e) {
                    return c(n.ZP.post, e, "post")
                },
                put: function(e) {
                    return c(n.ZP.put, e, "put")
                },
                patch: function(e) {
                    return c(n.ZP.patch, e, "patch")
                },
                delete: function(e) {
                    return c(n.ZP.delete, e, "del")
                }
            }
        }
    }
]);