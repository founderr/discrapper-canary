(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [56713], {
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
                c = r(2590);

            function a(e, t, r, n, o, i, c) {
                try {
                    var a = e[i](c),
                        l = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function l(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function c(e) {
                            a(i, n, o, c, l, "next", e)
                        }

                        function l(e) {
                            a(i, n, o, c, l, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }
            var u = function(e, t) {
                var r, n, o, i, c = {
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
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n),
                                        0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        n = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            c.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(i);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                i = t.call(e, c)
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
                        }([i, a])
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
                    url: c.ANM.ENTITLEMENTS_FOR_APPLICATION(e),
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
                return (p = l((function(e) {
                    var t, r, i, a, l, s;
                    return u(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                t = e.withSku, r = void 0 !== t && t, i = e.withApplication, a = void 0 !== i && i, l = e.entitlementType;
                                o.Z.dispatch({
                                    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
                                });
                                u.label = 1;
                            case 1:
                                u.trys.push([1, 3, , 4]);
                                return [4, n.ZP.get({
                                    url: c.ANM.ENTITLEMENTS_FOR_USER,
                                    query: {
                                        with_sku: r,
                                        with_application: a,
                                        entitlement_type: l
                                    }
                                })];
                            case 2:
                                s = u.sent();
                                o.Z.dispatch({
                                    type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
                                    entitlements: s.body
                                });
                                return [3, 4];
                            case 3:
                                u.sent();
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
                return (E = l((function() {
                    var e;
                    return u(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                o.Z.dispatch({
                                    type: "ENTITLEMENTS_GIFTABLE_FETCH"
                                });
                                t.label = 1;
                            case 1:
                                t.trys.push([1, 3, , 4]);
                                return [4, (0, i.Kb)({
                                    url: c.ANM.ENTITLEMENTS_GIFTABLE
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
                Z: () => C
            });
            var n = r(785893),
                o = r(667294),
                i = r(294184),
                c = r.n(i),
                a = r(107364),
                l = r(350762),
                u = r.n(l);

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
                return !t || "object" !== b(t) && "function" != typeof t ? function(e) {
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
            var T, y, S, b = function(e) {
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
            }(T || (T = {}));
            ! function(e) {
                e.SMALL = "small";
                e.LARGE = "large";
                e.NONE = "none"
            }(y || (y = {}));
            var h, I = (f(S = {}, T.PRIMARY, u().colorPrimary), f(S, T.SECONDARY, u().colorSecondary),
                    f(S, T.WARNING, u().colorWarning), f(S, T.ERROR, u().colorError), S),
                N = (f(h = {}, y.SMALL, u().small), f(h, y.LARGE, u().large), f(h, y.NONE, null), h),
                _ = function(e) {
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
                    var t = O(r);

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
                            l = e.className,
                            s = e.iconClassName;
                        return (0, n.jsxs)(a.Z, {
                            className: c()(u().note, I[r], l),
                            align: a.Z.Align.CENTER,
                            children: [(0, n.jsx)(t, {
                                className: c()(u().icon, N[i], s)
                            }), (0, n.jsx)("div", {
                                children: o
                            })]
                        })
                    };
                    return r
                }(o.PureComponent);
            _.Colors = T;
            _.Sizes = y;
            const C = _
        },
        333398: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => h
            });
            var n = r(202351),
                o = r(744564),
                i = r(451936);

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function u(e) {
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
                    var r, n = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return f(this, r)
                }
            }
            var T = {},
                y = {},
                S = [];

            function b(e) {
                var t = e.entitlements,
                    r = !1,
                    n = !0,
                    o = !1,
                    c = void 0;
                try {
                    for (var a, l = t[Symbol.iterator](); !(n = (a = l.next()).done); n = !0) {
                        var s = a.value.sku;
                        if (null != s && null != s.application) {
                            var f = s.application;
                            T[f.id] = i.Z.createFromServer(f);
                            r = !0
                        }
                    }
                } catch (e) {
                    o = !0;
                    c = e
                } finally {
                    try {
                        n || null == l.return || l.return()
                    } finally {
                        if (o) throw c
                    }
                }
                r && (T = u({}, T));
                return r
            }
            var O = function(e) {
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
                    c(this, r);
                    return t.apply(this, arguments)
                }
                var n = r.prototype;
                n.getApplications = function() {
                    return T
                };
                n.getGuildApplication = function(e, t) {
                    if (null != e) {
                        var r = !0,
                            n = !1,
                            o = void 0;
                        try {
                            for (var i, c = Object.values(T)[Symbol.iterator](); !(r = (i = c.next()).done); r = !0) {
                                var a = i.value;
                                if (a.guildId === e && a.type === t) return a
                            }
                        } catch (e) {
                            n = !0;
                            o = e
                        } finally {
                            try {
                                r || null == c.return || c.return()
                            } finally {
                                if (n) throw o
                            }
                        }
                    }
                };
                n.getGuildApplications = function(e) {
                    return null == e ? S : y[e]
                };
                n.getApplication = function(e) {
                    return T[e]
                };
                n.__getLocalVars = function() {
                    return {
                        applicationsById: T,
                        applicationIdsByGuild: y,
                        EMPTY_ARRAY: S
                    }
                };
                return r
            }(n.ZP.Store);
            O.displayName = "ApplicationStore";
            const h = new O(o.Z, {
                APPLICATION_FETCH_SUCCESS: function(e) {
                    var t = e.application;
                    T = s(u({}, T), a({}, t.id, i.Z.createFromServer(t)))
                },
                APPLICATIONS_FETCH_SUCCESS: function(e) {
                    var t = e.applications,
                        r = u({}, T),
                        n = !0,
                        o = !1,
                        c = void 0;
                    try {
                        for (var a, l = t[Symbol.iterator](); !(n = (a = l.next()).done); n = !0) {
                            var s = a.value;
                            r[s.id] = i.Z.createFromServer(s)
                        }
                    } catch (e) {
                        o = !0;
                        c = e
                    } finally {
                        try {
                            n || null == l.return || l.return()
                        } finally {
                            if (o) throw c
                        }
                    }
                    T = r
                },
                APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: b,
                ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: b,
                GUILD_SETTINGS_LOADED_INTEGRATIONS: function(e) {
                    var t = e.integrations,
                        r = e.guildId,
                        n = !1,
                        o = [],
                        i = !0,
                        c = !1,
                        a = void 0;
                    try {
                        for (var l, s = t[Symbol.iterator](); !(i = (l = s.next()).done); i = !0) {
                            var f = l.value.application;
                            if (null != f) {
                                o.push(f.id);
                                T[f.id] = f;
                                n = !0
                            }
                        }
                    } catch (e) {
                        c = !0;
                        a = e
                    } finally {
                        try {
                            i || null == s.return || s.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                    if (n) {
                        T = u({}, T);
                        y[r] = o;
                        var p = {};
                        for (var d in y) p[d] = y[d];
                        y = p
                    }
                    return n
                },
                CONNECTION_OPEN: function() {
                    T = {};
                    y = {}
                }
            })
        },
        387099: (e, t, r) => {
            "use strict";
            r.d(t, {
                Q: () => a,
                Z: () => l
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
                c = (0, n.B)({
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

            function a() {
                var e = i.useExperiment({
                        location: "c519a9_1"
                    }, {
                        autoTrackExposure: !1
                    }).paymentsBlocked,
                    t = c.useExperiment({
                        location: "c519a9_2"
                    }, {
                        autoTrackExposure: !1
                    }).checkPaymentSource,
                    r = (0, o.Z)().defaultBillingCountryCode;
                return e || t && "RU" === r
            }
            const l = i
        },
        374714: (e, t, r) => {
            "use strict";
            r.r(t);
            r.d(t, {
                default: () => A
            });
            var n = r(785893),
                o = r(667294),
                i = r(882723),
                c = r(153686),
                a = r(19585),
                l = r(782786),
                u = r(83471),
                s = r(383861),
                f = r(688858),
                p = r(930865),
                d = r(594302),
                E = r(2590),
                T = r(473708),
                y = r(717826),
                S = r.n(y),
                b = r(518280),
                O = r.n(b);

            function h(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function I(e) {
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

            function N(e, t) {
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

            function _(e, t) {
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
            var C = "premium-guild-subscription-upsell-modal-header";

            function P(e) {
                var t = e.title,
                    r = e.subtitle,
                    o = e.image;
                return (0, n.jsxs)("div", {
                    className: S().header,
                    children: [(0, n.jsx)(i.Heading, {
                        variant: "heading-xl/semibold",
                        id: C,
                        color: "header-primary",
                        className: O().marginBottom8,
                        children: t
                    }), (0, n.jsx)(i.Text, {
                        variant: "text-md/normal",
                        className: S().subtitleText,
                        children: r
                    }), o]
                })
            }
            var v = function(e) {
                    var t = e.onClose,
                        r = e.perks,
                        o = e.perkIntro,
                        c = void 0 === o ? T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER : o,
                        a = e.headerProps;
                    return (0, n.jsxs)("div", {
                        className: S().wrapper,
                        children: [(0, n.jsx)(i.ModalCloseButton, {
                            className: S().closeButton,
                            onClick: function() {
                                t()
                            }
                        }), (0, n.jsx)(m, {
                            headerProps: a,
                            perkIntro: c
                        }), (0, n.jsx)("div", {
                            className: S().perks,
                            children: r.map((function(e, t) {
                                var r = e.icon,
                                    o = e.iconClassName,
                                    i = e.description,
                                    c = e.color;
                                return (0, n.jsx)(f.Z, {
                                    icon: r,
                                    iconClassName: o,
                                    description: i,
                                    color: c
                                }, t)
                            }))
                        })]
                    })
                },
                m = function(e) {
                    var t = e.headerProps,
                        c = e.perkIntro;
                    return (0, n.jsxs)(o.Fragment, {
                        children: [null != t ? (0, n.jsx)(P, I({}, t)) : (0, n.jsx)("img", {
                            className: S().heroImage,
                            src: r(500996),
                            alt: T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER_IMG_ALT_TEXT
                        }), (0, n.jsx)(i.Text, {
                            variant: "text-md/normal",
                            className: S().heading,
                            children: c
                        })]
                    })
                },
                R = function(e) {
                    var t = e.guild,
                        r = e.targetBoostedGuildTier,
                        o = e.onClose,
                        c = e.analyticsSourceLocation,
                        a = {
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
                            children: T.Z.Messages.CLOSE
                        }), (0, n.jsx)(d.Z, {
                            analyticsLocation: a,
                            analyticsSourceLocation: c,
                            guild: t,
                            targetBoostedGuildTier: r,
                            onClose: function() {
                                o()
                            }
                        })]
                    })
                };

            function A(e) {
                var t = e.analyticsSourceLocation,
                    r = e.guild,
                    o = e.targetBoostedGuildTier,
                    f = e.perks,
                    p = e.perkIntro,
                    d = e.headerProps,
                    E = e.onClose,
                    T = _(e, ["analyticsSourceLocation", "guild", "targetBoostedGuildTier", "perks", "perkIntro", "headerProps", "onClose"]),
                    y = (0, a.Z)(c.Z.ACTIVITY_DIRECTORY).AnalyticsLocationProvider;
                return (0, n.jsx)(y, {
                    children: (0, n.jsx)(l.PaymentContextProvider, {
                        activeSubscription: null,
                        stepConfigs: [],
                        skuIDs: [],
                        children: (0, n.jsx)(i.ModalRoot, N(I({}, T), {
                            "aria-labelledby": C,
                            children: (0, n.jsx)(s.Z, {
                                hideBreadcrumbs: !0,
                                body: (0, n.jsx)(v, {
                                    onClose: E,
                                    perks: f,
                                    perkIntro: p,
                                    headerProps: d
                                }),
                                footer: (0, n.jsx)(R, {
                                    guild: r,
                                    targetBoostedGuildTier: o,
                                    onClose: E,
                                    analyticsSourceLocation: t
                                }),
                                steps: [u.h8.PREMIUM_GUILD_UPSELL],
                                currentStep: u.h8.PREMIUM_GUILD_UPSELL
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
                c = r(818103),
                a = r(669426),
                l = r(644144),
                u = r(782786),
                s = r(83471),
                f = r(473708),
                p = r(14346),
                d = r.n(p);

            function E(e) {
                var t, r = e.className,
                    o = e.isEligibleForTrial,
                    p = void 0 !== o && o,
                    E = (0, u.usePaymentContext)(),
                    T = E.step,
                    y = E.breadcrumbs,
                    S = E.startedPaymentFlowWithPaymentSourcesRef,
                    b = E.isGift,
                    O = E.selectedSkuId,
                    h = E.giftRecipient;
                if (null == y || 0 === y.length || (0, l.a8)(h)) return null;
                t = (0, c.Wt)({
                    isTrial: p,
                    isGift: b,
                    selectedSkuId: O
                }).enabled ? [{
                    id: s.h8.REVIEW,
                    label: f.Z.Messages.BILLING_STEP_PLAN_AND_PAYMENT
                }] : y.filter((function(e) {
                    var t = e.id !== s.h8.ADD_PAYMENT_STEPS,
                        r = e.id === s.h8.ADD_PAYMENT_STEPS && !S.current;
                    return !p || p && (t || r)
                }));
                return (0, n.jsx)("div", {
                    className: i()("breadcrumb", d().wrapper, r),
                    children: (0, n.jsx)(a.Z, {
                        activeId: T,
                        breadcrumbs: t
                    })
                })
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
                Wt: () => l,
                $g: () => u,
                D3: () => s
            });
            var n = r(260561),
                o = r(116094),
                i = r(470387),
                c = r(203600),
                a = (0, n.B)({
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

            function l(e) {
                var t = e.isTrial,
                    r = e.isGift,
                    n = e.selectedSkuId;
                if (t || r || null == n || !c.YQ.includes(n)) return {
                    enabled: !1,
                    defaultToMonthlyPlan: !1
                };
                if (i.Z.getCurrentConfig({
                        location: "fa931a_1"
                    }).experiment === i.R.MERGE_PLAN_SELECT_TO_REVIEW) {
                    return a.getCurrentConfig({
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

            function u(e, t, r) {
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
                    a = null != r ? (0, o.Af)(r) : null,
                    l = i ? c.IW[t] : c.mn[t],
                    u = null != n ? n : l;
                null != a ? u === a.planId && u === c.IW[t] ? u = c.mn[t] : u === a.planId && u === c.mn[t] ? u = c.IW[t] : a.planId !== c.Xh.PREMIUM_YEAR_TIER_0 && a.planId !== c.Xh.PREMIUM_YEAR_TIER_1 || u !== c.Xh.PREMIUM_MONTH_TIER_2 || (u = c.Xh.PREMIUM_YEAR_TIER_2) : u === c.Xh.PREMIUM_YEAR_TIER_1 && (u = c.Xh.PREMIUM_MONTH_TIER_1);
                return u
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
                c = r(673679),
                a = r(664625),
                l = r(615796),
                u = r(711531);

            function s() {
                var e = (0, o.e7)([u.Z], (function() {
                        return u.Z.getDefaultBillingCountryCode()
                    })),
                    t = (0, o.e7)([l.Z], (function() {
                        return l.Z.ipCountryCode
                    })),
                    r = (0, o.e7)([a.default], (function() {
                        return a.default.isAuthenticated()
                    }));
                n.useEffect((function() {
                    i.Z.wait((function() {
                        !r || l.Z.isPaymentSourceFetching || u.Z.hasFetchedPaymentSources || c.tZ()
                    }))
                }), [r]);
                n.useEffect((function() {
                    r && !l.Z.ipCountryCodeLoaded && c.GE()
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
                Z: () => _
            });
            var n = r(785893),
                o = r(667294),
                i = r(886664),
                c = r(294184),
                a = r.n(c),
                l = r(513328),
                u = r(882723),
                s = r(19120),
                f = r(347365),
                p = r(414094),
                d = r(782786),
                E = r(83471),
                T = (r(128059), r(149096), r(669426)),
                y = r(799043),
                S = r(264628),
                b = r(2590),
                O = r(473708),
                h = r(152221),
                I = r.n(h),
                N = new Set([E.h8.SKU_SELECT, E.h8.AWAITING_AUTHENTICATION, E.h8.AWAITING_PURCHASE_TOKEN_AUTH, E.h8.CONFIRM]);

            function _(e) {
                var t = e.steps,
                    r = e.currentStep,
                    c = e.body,
                    h = e.paymentError,
                    _ = e.header,
                    C = e.footer,
                    P = e.isGift,
                    v = void 0 !== P && P,
                    m = e.giftMessage,
                    R = void 0 === m ? O.Z.Messages.PREMIUM_PAYMENT_IS_GIFT : m,
                    A = e.isSeasonalGift,
                    M = void 0 !== A && A,
                    L = e.hideBreadcrumbs,
                    g = void 0 !== L && L,
                    j = e.isLoading,
                    B = void 0 !== j && j,
                    G = e.purchaseError,
                    D = e.purchaseErrorBlockRef,
                    w = e.planError,
                    U = e.onScroll,
                    Z = e.scrollerClassName,
                    F = e.hasCurrencies,
                    x = void 0 !== F && F,
                    k = null;
                null != h && null == (0, E.ly)(h) ? k = h : null != G ? k = G : null != w && (k = w);
                var H = null != k ? k.message : "";
                if (null != k && k instanceof f.HF) {
                    k.code === p.SM.CARD_DECLINED && x && (H += " ".concat(O.Z.Messages.BILLING_ERROR_TRY_ANOTHER));
                    k.code === p.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (H = O.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT);
                    k.code === b.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (H = O.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID)
                }
                var K = (0, d.usePaymentContext)().stripe;
                B = B || null == K;
                var W = o.useRef(new l.V7);
                o.useEffect((function() {
                    var e = W.current;
                    null != K || e.isStarted() ? null != K && e.stop() : e.start(1e4, (function() {
                        var e = new Error("Stripe took too long to load");
                        (0, S.q2)(e)
                    }));
                    return function() {
                        e.stop()
                    }
                }), [K]);
                var Y = t.includes(E.h8.PAYMENT_TYPE) ? E.h8.PAYMENT_TYPE : E.h8.ADD_PAYMENT_STEPS;
                return (0, n.jsxs)(i.Elements, {
                    options: b.OBo,
                    stripe: K,
                    children: [_, (0, n.jsxs)("div", {
                        className: a()("paymentModalContent", I().content),
                        children: [v && !M && r !== E.h8.CONFIRM ? (0, n.jsx)(s.Z, {
                            className: I().paymentNote,
                            iconSize: s.Z.Sizes.SMALL,
                            icon: y.Z,
                            color: null == R ? s.Z.Colors.PRIMARY : s.Z.Colors.SECONDARY,
                            children: R
                        }) : null, g ? null : (0, n.jsx)("div", {
                            className: I().breadcrumbsWrapper,
                            children: (0, n.jsx)(T.Z, {
                                activeId: E.Ck.has(r) ? Y : r,
                                breadcrumbs: t.filter((function(e) {
                                    return !E.Ck.has(e) && !N.has(e)
                                })).map((function(e) {
                                    return {
                                        id: e,
                                        label: (0, E.DJ)(e)
                                    }
                                }))
                            })
                        }), (0, n.jsxs)("div", {
                            className: I().bodyWrapper,
                            children: [null == k ? null : (0, n.jsx)("div", {
                                className: I().errorBlockWrapper,
                                children: (0, n.jsx)(u.FormErrorBlock, {
                                    ref: D,
                                    children: H
                                })
                            }), B ? (0, n.jsx)(u.Spinner, {
                                className: I().loadingBlock
                            }) : (0, n.jsx)(u.Sequencer, {
                                className: I().sequencer,
                                staticClassName: I().sequencerStatic,
                                animatedNodeClassName: I().sequencerAnimatedNode,
                                fillParent: !0,
                                step: r,
                                steps: t,
                                sideMargin: 20,
                                children: (0, n.jsx)(u.AdvancedScrollerThin, {
                                    onScroll: U,
                                    className: a()(I().scroller, Z),
                                    children: c
                                })
                            })]
                        })]
                    }), C]
                })
            }
        },
        688858: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => l
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                c = r(32912),
                a = r.n(c);

            function l(e) {
                var t = e.icon,
                    r = e.iconClassName,
                    o = e.description,
                    c = e.color;
                return (0, n.jsxs)("div", {
                    className: a().perkRow,
                    children: [(0, n.jsx)("div", {
                        className: a().perkIconContainer,
                        children: (0, n.jsx)(t, {
                            color: c,
                            className: i()(a().perkIcon, r)
                        })
                    }), (0,
                        n.jsx)("div", {
                        className: a().perkDescription,
                        children: o
                    })]
                })
            }
        },
        669426: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => O
            });
            var n = r(785893),
                o = r(667294),
                i = r(294184),
                c = r.n(i),
                a = r(882723),
                l = r(107364),
                u = r(718831),
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

            function T(e, t) {
                return !t || "object" !== S(t) && "function" != typeof t ? function(e) {
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
            var S = function(e) {
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
                    var r, n = E(e);
                    if (t) {
                        var o = E(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return T(this, r)
                }
            }
            const O = function(e) {
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
                }(r, e);
                var t = b(r);

                function r() {
                    p(this, r);
                    var e;
                    (e = t.apply(this, arguments)).renderBreadcrumb = function(t, r) {
                        var o, i = e.props,
                            l = i.activeId,
                            s = i.onBreadcrumbClick,
                            p = i.breadcrumbs,
                            E = i.renderCustomBreadcrumb,
                            T = i.separatorClassName,
                            y = t.id === l,
                            S = r === p.length - 1,
                            b = null != E ? E(t, y) : (0, n.jsx)("span", {
                                className: c()(f().breadcrumb, (o = {}, d(o, f().activeBreadcrumb, y),
                                    d(o, f().interactiveBreadcrumb, null != s), o)),
                                children: t.label
                            });
                        return (0, n.jsxs)("div", {
                            className: c()(f().breadcrumbWrapper, d({}, f().breadcrumbFinalWrapper, S)),
                            children: [null != s ? (0, n.jsx)(a.Clickable, {
                                tag: "span",
                                onClick: function() {
                                    return e.handleClick(t)
                                },
                                className: f().breadcrumbClickWrapper,
                                children: b
                            }) : b, S ? null : (0, n.jsx)(u.Z, {
                                className: c()(f().breadcrumbArrow, T),
                                direction: u.Z.Directions.RIGHT
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
                    return (0, n.jsx)(l.Z, {
                        justify: l.Z.Justify.START,
                        className: c()(f().breadcrumbs, r),
                        children: o
                    })
                };
                return r
            }(o.PureComponent)
        },
        718831: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => E
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                c = r(633878),
                a = r(871979),
                l = r.n(a);

            function u(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
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
            var p = {
                    UP: l().directionUp,
                    RIGHT: l().directionRight,
                    DOWN: l().directionDown,
                    LEFT: l().directionLeft
                },
                d = function(e) {
                    var t = e.direction,
                        r = void 0 === t ? p.DOWN : t,
                        o = e.width,
                        a = void 0 === o ? 24 : o,
                        d = e.height,
                        E = void 0 === d ? 24 : d,
                        T = e.color,
                        y = void 0 === T ? "currentColor" : T,
                        S = e.transition,
                        b = void 0 === S ? l().transition : S,
                        O = e.className,
                        h = e.foreground,
                        I = e.expanded,
                        N = f(e, ["direction", "width", "height", "color", "transition", "className", "foreground", "expanded"]),
                        _ = r;
                    !0 === I ? _ = p.DOWN : !1 === I && (_ = p.RIGHT);
                    return (0, n.jsx)("svg", s(function(e) {
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
                    }({
                        className: i()(O, b, _),
                        width: a,
                        height: E,
                        viewBox: "0 0 24 24"
                    }, (0, c.Z)(N)), {
                        children: (0, n.jsx)("path", {
                            className: h,
                            fill: "none",
                            stroke: y,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    }))
                };
            d.Directions = p;
            const E = d
        },
        197597: (e, t, r) => {
            "use strict";
            r.d(t, {
                S: () => n,
                M: () => o
            });
            var n;
            ! function(e) {
                e.AC = "AC";
                e.AD = "AD";
                e.AE = "AE";
                e.AF = "AF";
                e.AG = "AG";
                e.AI = "AI";
                e.AL = "AL";
                e.AM = "AM";
                e.AN = "AN";
                e.AO = "AO";
                e.AR = "AR";
                e.AS = "AS";
                e.AT = "AT";
                e.AU = "AU";
                e.AW = "AW";
                e.AX = "AX";
                e.AZ = "AZ";
                e.BA = "BA";
                e.BB = "BB";
                e.BD = "BD";
                e.BE = "BE";
                e.BF = "BF";
                e.BG = "BG";
                e.BH = "BH";
                e.BI = "BI";
                e.BJ = "BJ";
                e.BM = "BM";
                e.BN = "BN";
                e.BO = "BO";
                e.BR = "BR";
                e.BS = "BS";
                e.BT = "BT";
                e.BW = "BW";
                e.BY = "BY";
                e.BZ = "BZ";
                e.CA = "CA";
                e.CC = "CC";
                e.CD = "CD";
                e.CF = "CF";
                e.CG = "CG";
                e.CH = "CH";
                e.CI = "CI";
                e.CK = "CK";
                e.CL = "CL";
                e.CM = "CM";
                e.CN = "CN";
                e.CO = "CO";
                e.CR = "CR";
                e.CU = "CU";
                e.CV = "CV";
                e.CW = "CW";
                e.CX = "CX";
                e.CY = "CY";
                e.CZ = "CZ";
                e.DE = "DE";
                e.DG = "DG";
                e.DJ = "DJ";
                e.DK = "DK";
                e.DM = "DM";
                e.DO = "DO";
                e.DZ = "DZ";
                e.EC = "EC";
                e.EE = "EE";
                e.EG = "EG";
                e.EL = "EL";
                e.ER = "ER";
                e.ES = "ES";
                e.ET = "ET";
                e.FI = "FI";
                e.FJ = "FJ";
                e.FK = "FK";
                e.FM = "FM";
                e.FO = "FO";
                e.FR = "FR";
                e.GA = "GA";
                e.GB = "GB";
                e.GD = "GD";
                e.GE = "GE";
                e.GF = "GF";
                e.GG = "GG";
                e.GH = "GH";
                e.GI = "GI";
                e.GL = "GL";
                e.GM = "GM";
                e.GN = "GN";
                e.GP = "GP";
                e.GQ = "GQ";
                e.GR = "GR";
                e.GS = "GS";
                e.GT = "GT";
                e.GU = "GU";
                e.GW = "GW";
                e.GY = "GY";
                e.HK = "HK";
                e.HM = "HM";
                e.HN = "HN";
                e.HR = "HR";
                e.HT = "HT";
                e.HU = "HU";
                e.IC = "IC";
                e.ID = "ID";
                e.IE = "IE";
                e.IL = "IL";
                e.IM = "IM";
                e.IN = "IN";
                e.IO = "IO";
                e.IQ = "IQ";
                e.IR = "IR";
                e.IS = "IS";
                e.IT = "IT";
                e.JE = "JE";
                e.JM = "JM";
                e.JO = "JO";
                e.JP = "JP";
                e.KE = "KE";
                e.KG = "KG";
                e.KH = "KH";
                e.KI = "KI";
                e.KM = "KM";
                e.KN = "KN";
                e.KP = "KP";
                e.KR = "KR";
                e.KW = "KW";
                e.KY = "KY";
                e.KZ = "KZ";
                e.LA = "LA";
                e.LB = "LB";
                e.LI = "LI";
                e.LK = "LK";
                e.LR = "LR";
                e.LS = "LS";
                e.LT = "LT";
                e.LU = "LU";
                e.LV = "LV";
                e.LY = "LY";
                e.MA = "MA";
                e.MC = "MC";
                e.MD = "MD";
                e.ME = "ME";
                e.MG = "MG";
                e.MH = "MH";
                e.MI = "MI";
                e.MK = "MK";
                e.ML = "ML";
                e.MM = "MM";
                e.MN = "MN";
                e.MO = "MO";
                e.MP = "MP";
                e.MQ = "MQ";
                e.MR = "MR";
                e.MS = "MS";
                e.MT = "MT";
                e.MU = "MU";
                e.MV = "MV";
                e.MW = "MW";
                e.MX = "MX";
                e.MY = "MY";
                e.MZ = "MZ";
                e.NA = "NA";
                e.NC = "NC";
                e.NE = "NE";
                e.NF = "NF";
                e.NG = "NG";
                e.NI = "NI";
                e.NL = "NL";
                e.NO = "NO";
                e.NP = "NP";
                e.NR = "NR";
                e.NU = "NU";
                e.NZ = "NZ";
                e.OM = "OM";
                e.PA = "PA";
                e.PE = "PE";
                e.PF = "PF";
                e.PG = "PG";
                e.PH = "PH";
                e.PK = "PK";
                e.PL = "PL";
                e.PM = "PM";
                e.PR = "PR";
                e.PS = "PS";
                e.PT = "PT";
                e.PW = "PW";
                e.PY = "PY";
                e.QA = "QA";
                e.RE = "RE";
                e.RO = "RO";
                e.RS = "RS";
                e.RU = "RU";
                e.RW = "RW";
                e.SA = "SA";
                e.SB = "SB";
                e.SC = "SC";
                e.SD = "SD";
                e.SE = "SE";
                e.SG = "SG";
                e.SI = "SI";
                e.SJ = "SJ";
                e.SK = "SK";
                e.SL = "SL";
                e.SM = "SM";
                e.SN = "SN";
                e.SO = "SO";
                e.SR = "SR";
                e.SS = "SS";
                e.SV = "SV";
                e.SX = "SX";
                e.SY = "SY";
                e.SZ = "SZ";
                e.TC = "TC";
                e.TD = "TD";
                e.TG = "TG";
                e.TH = "TH";
                e.TJ = "TJ";
                e.TK = "TK";
                e.TL = "TL";
                e.TM = "TM";
                e.TN = "TN";
                e.TO = "TO";
                e.TP = "TP";
                e.TR = "TR";
                e.TT = "TT";
                e.TV = "TV";
                e.TW = "TW";
                e.TZ = "TZ";
                e.UA = "UA";
                e.UG = "UG";
                e.UK = "UK";
                e.US = "US";
                e.UY = "UY";
                e.UZ = "UZ";
                e.VA = "VA";
                e.VE = "VE";
                e.VG = "VG";
                e.VI = "VI";
                e.VN = "VN";
                e.VU = "VU";
                e.WF = "WF";
                e.WK = "WK";
                e.WS = "WS";
                e.XK = "XK";
                e.YE = "YE";
                e.YT = "YT";
                e.ZA = "ZA";
                e.ZM = "ZM";
                e.ZW = "ZW";
                e.ST = "ST";
                e.BQ = "BQ";
                e.TF = "TF";
                e.VC = "VC";
                e.LC = "LC"
            }(n || (n = {}));
            var o = {
                VAT_EU_COUNTRIES: new Set(["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"]),
                EU_COUNTRIES: new Set(["AD", "AL", "AT", "AX", "BA", "BE", "BG", "BY", "CH", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FO", "FR", "GG", "GR", "HR", "HU", "IC", "IE", "IM", "IT", "JE", "LI", "LT", "LU", "LV", "MC", "MD", "MK", "MT", "NL", "NO", "PL", "PT", "RO", "RU", "SE", "SI", "SJ", "SK", "SM", "UA", "VA"]),
                EEA_COUNTRIES: new Set(["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK"])
            }
        }
    }
]);