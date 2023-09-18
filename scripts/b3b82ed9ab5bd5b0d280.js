"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [49096], {
        11176: (t, e, n) => {
            n.d(e, {
                Z: () => i
            });
            var r = n(318715),
                o = n(664625);

            function i() {
                return (0, r.ZP)([o.default], (function() {
                    return o.default.isAuthenticated()
                }))
            }
        },
        151017: (t, e, n) => {
            n.d(e, {
                rx: () => l,
                i1: () => f,
                sB: () => d,
                vY: () => y
            });
            var r = n(744564),
                o = n(810978),
                i = n(410111);

            function u(t, e, n, r, o, i, u) {
                try {
                    var a = t[i](u),
                        c = a.value
                } catch (t) {
                    n(t);
                    return
                }
                a.done ? e(c) : Promise.resolve(c).then(r, o)
            }

            function a(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = t.apply(e, n);

                        function a(t) {
                            u(i, r, o, a, c, "next", t)
                        }

                        function c(t) {
                            u(i, r, o, a, c, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }
            var c = function(t, e) {
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
                                i = e.call(t, u)
                            } catch (t) {
                                i = [6, t];
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

            function l(t, e) {
                return s.apply(this, arguments)
            }

            function s() {
                return (s = a((function(t, e) {
                    var n;
                    return c(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                r.Z.dispatch({
                                    type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
                                    applicationId: t
                                });
                                o.label = 1;
                            case 1:
                                o.trys.push([1, 3, , 4]);
                                return [4, i.jz(t, e)];
                            case 2:
                                n = o.sent();
                                r.Z.dispatch({
                                    type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
                                    applicationId: t,
                                    groupListing: n
                                });
                                return [2, n];
                            case 3:
                                o.sent();
                                r.Z.dispatch({
                                    type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
                                    applicationId: t
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function f(t) {
                return p.apply(this, arguments)
            }

            function p() {
                return (p = a((function(t) {
                    var e;
                    return c(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                r.Z.dispatch({
                                    type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS",
                                    guildId: t
                                });
                                n.label = 1;
                            case 1:
                                n.trys.push([1, 3, , 4]);
                                return [4, i.GF(t)];
                            case 2:
                                e = n.sent();
                                r.Z.dispatch({
                                    type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS",
                                    guildId: t,
                                    entitlements: e
                                });
                                return [3, 4];
                            case 3:
                                n.sent();
                                r.Z.dispatch({
                                    type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE",
                                    guildId: t
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function d(t) {
                r.Z.dispatch({
                    type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED",
                    guildId: t
                })
            }

            function y(t) {
                return S.apply(this, arguments)
            }

            function S() {
                return (S = a((function(t) {
                    var e, n, u, a, l, s, f, p, d, y;
                    return c(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                r.Z.dispatch({
                                    type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
                                    planId: t
                                });
                                c.label = 1;
                            case 1:
                                c.trys.push([1, 11, , 12]);
                                return [4, i.a_(t)];
                            case 2:
                                e = c.sent();
                                r.Z.dispatch({
                                    type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
                                    groupListing: e
                                });
                                u = null !== (n = e.subscription_listings) && void 0 !== n ? n : [];
                                a = !0, l = !1, s = void 0;
                                c.label = 3;
                            case 3:
                                c.trys.push([3, 8, 9, 10]);
                                f = u[Symbol.iterator]();
                                c.label = 4;
                            case 4:
                                return (a = (p = f.next()).done) ? [3, 7] : (d = p.value).subscription_plans[0].id !== t ? [3, 6] : [4, o.GZ(d.id, void 0, void 0, !0)];
                            case 5:
                                c.sent();
                                c.label = 6;
                            case 6:
                                a = !0;
                                return [3, 4];
                            case 7:
                                return [3, 10];
                            case 8:
                                y = c.sent();
                                l = !0;
                                s = y;
                                return [3, 10];
                            case 9:
                                try {
                                    a || null == f.return || f.return()
                                } finally {
                                    if (l) throw s
                                }
                                return [7];
                            case 10:
                                return [3, 12];
                            case 11:
                                c.sent();
                                return [3, 12];
                            case 12:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        301443: (t, e, n) => {
            n.d(e, {
                jd: () => F,
                ZP: () => Y,
                F5: () => k,
                IX: () => W,
                CR: () => K,
                LM: () => U,
                FE: () => M,
                sp: () => B,
                qz: () => H,
                _k: () => D,
                h6: () => x
            });
            var r = n(667294),
                o = n(202351),
                i = n(595138),
                u = n(11176),
                a = n(333398),
                c = n(567403),
                l = n(682776),
                s = n(551778),
                f = n(536392),
                p = n(151367),
                d = n(746974),
                y = n(744564);

            function S(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function h(t) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return h(t)
            }

            function v(t, e) {
                return !e || "object" !== b(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function I(t, e) {
                I = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return I(t, e)
            }
            var b = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function E(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = h(t);
                    if (e) {
                        var o = h(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return v(this, n)
                }
            }
            var m, A = {
                lastGuildDismissedTime: {}
            };
            var O = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && I(t, e)
                }(n, t);
                var e = E(n);

                function n() {
                    S(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A;
                    m = t
                };
                r.getUserAgnosticState = function() {
                    return m
                };
                r.getLastGuildDismissedTime = function(t) {
                    return m.lastGuildDismissedTime[t]
                };
                r.__getLocalVars = function() {
                    return {
                        initialState: A,
                        state: m
                    }
                };
                return n
            }(o.ZP.DeviceSettingsStore);
            O.displayName = "ApplicationSubscriptionChannelNoticeStore";
            O.persistKey = "ApplicationSubscriptionChannelNoticeStore";
            const _ = new O(y.Z, {
                APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function(t) {
                    var e = t.guildId;
                    m.lastGuildDismissedTime[e] = Date.now()
                }
            });
            var P = n(151017),
                g = n(410111),
                T = n(266909),
                N = n(243763),
                C = n(2590);

            function R(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function w(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (e && i.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            o = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || Z(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function L(t) {
                return function(t) {
                    if (Array.isArray(t)) return R(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || Z(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Z(t, e) {
                if (t) {
                    if ("string" == typeof t) return R(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? R(t, e) : void 0
                }
            }
            var F;
            ! function(t) {
                t[t.NOT_LOADED = 0] = "NOT_LOADED";
                t[t.LOADING = 1] = "LOADING";
                t[t.LOADED = 2] = "LOADED";
                t[t.ERROR = 3] = "ERROR"
            }(F || (F = {}));
            var M = function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = n.refetchOnMount,
                        u = void 0 !== i && i,
                        a = (0, o.e7)([T.Z], (function() {
                            return null != t ? T.Z.getSubscriptionGroupListingsForApplicationFetchState(t) : T.M.FETCHED
                        }), [t]);
                    r.useEffect((function() {
                        if (null != t && null != e) {
                            var n = T.Z.getSubscriptionGroupListingsForApplicationFetchState(t);
                            (u || n === T.M.NOT_FETCHED) && (0, P.rx)(t, e)
                        }
                    }), [t, e, u]);
                    return {
                        listingsLoaded: a === T.M.FETCHED
                    }
                },
                U = function(t) {
                    var e = t.guildId,
                        n = t.canFetch,
                        i = void 0 === n || n,
                        u = t.forceRefetch,
                        a = void 0 !== u && u,
                        c = (0, o.e7)([T.Z], (function() {
                            return null != e ? T.Z.getEntitlementsForGuildFetchState(e) : null
                        }), [e]);
                    r.useEffect((function() {
                        if (null != e && e !== C.ME) {
                            var t = T.Z.getEntitlementsForGuildFetchState(e);
                            i && (t === T.M.NOT_FETCHED || a) && (0, P.i1)(e)
                        }
                    }), [e, i, a]);
                    return {
                        entitlementsLoaded: c === T.M.FETCHED
                    }
                },
                D = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        includeSoftDeleted: !1
                    };
                    return (0, o.Wu)([T.Z], (function() {
                        if (null == t) return [];
                        var n = T.Z.getSubscriptionGroupListing(t);
                        if (null == n) return [];
                        var r = [],
                            o = !0,
                            i = !1,
                            u = void 0;
                        try {
                            for (var a, c = n.subscription_listings_ids[Symbol.iterator](); !(o = (a = c.next()).done); o = !0) {
                                var l = a.value,
                                    s = T.Z.getSubscriptionListing(l);
                                null != s && (s.soft_deleted && !e.includeSoftDeleted || r.push(s))
                            }
                        } catch (t) {
                            i = !0;
                            u = t
                        } finally {
                            try {
                                o || null == c.return || c.return()
                            } finally {
                                if (i) throw u
                            }
                        }
                        return r
                    }), [t, e.includeSoftDeleted])
                },
                j = [],
                G = [];

            function k(t, e) {
                var n, i = (0, o.e7)([f.Z], (function() {
                        return f.Z.getSubscriptions()
                    })),
                    u = (0, o.cj)([T.Z, p.Z], (function() {
                        var r;
                        return {
                            subscriptionGroupListing: null != t ? T.Z.getSubscriptionGroupListingForApplication(t) : null,
                            guildEntitlements: null != t && null != e ? T.Z.getApplicationEntitlementsForGuild(t, e) : j,
                            userEntitlements: null != t && null !== (n = null === (r = p.Z.getForApplication(t)) || void 0 === r ? void 0 : r.values()) && void 0 !== n ? n : G
                        }
                    }), [t, e]),
                    a = u.subscriptionGroupListing,
                    c = u.guildEntitlements,
                    l = u.userEntitlements,
                    s = r.useMemo((function() {
                        return L(c).concat(L(l))
                    }), [c, l]),
                    d = null == a ? void 0 : a.subscription_listings,
                    y = r.useMemo((function() {
                        if (null != d) {
                            var t = !0,
                                n = !1,
                                r = void 0;
                            try {
                                for (var o, i = s[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                                    var u = o.value,
                                        a = !0,
                                        c = !1,
                                        l = void 0;
                                    try {
                                        for (var f, p = d[Symbol.iterator](); !(a = (f = p.next()).done); a = !0) {
                                            var y = f.value;
                                            if ((0, N.AQ)(y, u, e)) return {
                                                activeSubscriptionListing: y,
                                                activeEntitlement: u
                                            }
                                        }
                                    } catch (t) {
                                        c = !0;
                                        l = t
                                    } finally {
                                        try {
                                            a || null == p.return || p.return()
                                        } finally {
                                            if (c) throw l
                                        }
                                    }
                                }
                            } catch (t) {
                                n = !0;
                                r = t
                            } finally {
                                try {
                                    t || null == i.return || i.return()
                                } finally {
                                    if (n) throw r
                                }
                            }
                        }
                        return {
                            activeSubscriptionListing: null,
                            activeEntitlement: null
                        }
                    }), [s, d, e]),
                    S = y.activeSubscriptionListing,
                    h = y.activeEntitlement;
                return {
                    activeSubscription: r.useMemo((function() {
                        if (null == i) return null;
                        var t = null == S ? void 0 : S.subscription_plans[0].id,
                            e = !0,
                            n = !1,
                            r = void 0;
                        try {
                            for (var o, u = Object.values(i)[Symbol.iterator](); !(e = (o = u.next()).done); e = !0) {
                                var a = o.value;
                                if (a.type === C.NYc.APPLICATION) {
                                    if (a.items[0].planId === t) return a
                                }
                            }
                        } catch (t) {
                            n = !0;
                            r = t
                        } finally {
                            try {
                                e || null == u.return || u.return()
                            } finally {
                                if (n) throw r
                            }
                        }
                        return null
                    }), [S, i]),
                    activeSubscriptionListing: S,
                    activeEntitlement: h,
                    subscriptionGroupListing: a
                }
            }

            function x(t) {
                var e, n = null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : "",
                    i = (0,
                        o.e7)([l.Z], (function() {
                        return l.Z.can(C.Plq.ADMINISTRATOR, t)
                    })),
                    u = U({
                        guildId: n,
                        canFetch: i
                    }).entitlementsLoaded,
                    a = (0, o.e7)([_], (function() {
                        return _.getLastGuildDismissedTime(n)
                    })),
                    c = (0, o.Wu)([T.Z], (function() {
                        var t = T.Z.getEntitlementsForGuild(n),
                            e = T.Z.getEntitlementsForGuild(n, !1),
                            r = t.map((function(t) {
                                return t.applicationId
                            }));
                        return e.filter((function(t) {
                            return !r.includes(t.applicationId)
                        }))
                    })),
                    s = (0, o.e7)([d.Z], (function() {
                        return d.Z.getSKUs()
                    })),
                    f = r.useMemo((function() {
                        return c.filter((function(t) {
                            var e = s[t.skuId];
                            return null != e && e.available
                        }))
                    }), [c, s]);
                return u ? f.filter((function(t) {
                    return null != t.endsAt && t.endsAt.getTime() > Math.max(null != a ? a : 0, Date.now() - 2592e6)
                })) : []
            }
            var B = function(t) {
                    var e = w(r.useState(!1), 2),
                        n = e[0],
                        i = e[1],
                        u = r.useMemo((function() {
                            return t.map(N.bZ)
                        }), [t]),
                        a = (0, o.Wu)([s.Z], (function() {
                            return u.filter((function(t) {
                                return null == s.Z.get(t)
                            }))
                        }), [u]);
                    r.useEffect((function() {
                        if (a.length > 0) {
                            i(!0);
                            Promise.all(a.map((function(t) {
                                return (0, P.vY)(t)
                            }))).catch((function() {})).then((function() {
                                i(!1)
                            }))
                        }
                    }), [a]);
                    return {
                        loading: n
                    }
                },
                H = function() {
                    var t = w(r.useState(F.NOT_LOADED), 2),
                        e = t[0],
                        n = t[1];
                    r.useEffect((function() {
                        n(F.LOADING);
                        (0, i.p0)({
                            withSku: !0,
                            withApplication: !0,
                            entitlementType: C.qc2.APPLICATION_SUBSCRIPTION
                        }).catch((function() {
                            n(F.ERROR)
                        })).then((function() {
                            n(F.LOADED)
                        }))
                    }), []);
                    return {
                        loadState: e
                    }
                },
                W = function(t) {
                    var e = (0, u.Z)(),
                        n = (0, o.e7)([a.Z], (function() {
                            return null != t ? a.Z.getApplication(t) : null
                        }));
                    null == n && null != t && e && (0, g.i6)(t);
                    return n
                };

            function Y(t) {
                var e = t.applicationId,
                    n = t.groupListingId,
                    a = t.guildId,
                    c = (0, u.Z)(),
                    l = M(e, n).listingsLoaded,
                    s = U({
                        guildId: a
                    }).entitlementsLoaded,
                    f = function(t) {
                        var e = t.applicationId,
                            n = t.canFetch,
                            u = void 0 === n || n,
                            a = t.forceRefetch,
                            c = void 0 !== a && a,
                            l = t.loggedIn,
                            s = (0, o.e7)([p.Z], (function() {
                                return p.Z.isFetchedForApplication(e)
                            }), [e]);
                        r.useEffect((function() {
                            if (l) {
                                var t = p.Z.isFetchingForApplication(e);
                                (u && !t && !s || c) && (0, i.p0)({
                                    entitlementType: C.qc2.APPLICATION_SUBSCRIPTION
                                })
                            }
                        }), [e, u, s, c, l]);
                        return {
                            entitlementsLoaded: s
                        }
                    }({
                        applicationId: e,
                        loggedIn: c
                    }),
                    d = f.entitlementsLoaded,
                    y = k(e, a).subscriptionGroupListing;
                return {
                    applicationSubscriptionListingsShown: null != e && null != n && (null == a || s) && (!c || d) && l && null != y && (0, N.LD)(y)
                }
            }

            function K(t, e) {
                var n = (0, o.e7)([c.Z], (function() {
                        return c.Z.isLoaded()
                    })),
                    i = w(r.useState([]), 2),
                    u = i[0],
                    a = i[1];
                r.useEffect((function() {
                    null == e && null != t && n && (0, g.tn)(t).then((function(t) {
                        var e = t.map((function(t) {
                            return c.Z.getGuild(t)
                        })).filter((function(t) {
                            return null != t
                        }));
                        a(e)
                    }))
                }), [t, e, n]);
                return u
            }
        },
        410111: (t, e, n) => {
            n.d(e, {
                jz: () => f,
                GF: () => p,
                a_: () => d,
                i6: () => y,
                tn: () => S
            });
            var r = n(281110),
                o = n(744564),
                i = n(539381),
                u = n(2590);

            function a(t, e, n, r, o, i, u) {
                try {
                    var a = t[i](u),
                        c = a.value
                } catch (t) {
                    n(t);
                    return
                }
                a.done ? e(c) : Promise.resolve(c).then(r, o)
            }

            function c(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = t.apply(e, n);

                        function u(t) {
                            a(i, r, o, u, c, "next", t)
                        }

                        function c(t) {
                            a(i, r, o, u, c, "throw", t)
                        }
                        u(void 0)
                    }))
                }
            }
            var l, s = function(t, e) {
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
                                    i = e.call(t, u)
                                } catch (t) {
                                    i = [6, t];
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
                },
                f = (l = c((function(t, e) {
                    return s(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, r.ZP.get({
                                    url: u.ANM.APPLICATION_SUBSCRIPTION_GROUP_LISTING(t, e)
                                })];
                            case 1:
                                return [2, n.sent().body]
                        }
                    }))
                })), function(t, e) {
                    return l.apply(this, arguments)
                }),
                p = function() {
                    var t = c((function(t) {
                        var e, n = arguments;
                        return s(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    e = n.length > 1 && void 0 !== n[1] && n[1];
                                    return [4, r.ZP.get({
                                        url: u.ANM.GUILD_ENTITLEMENTS(t),
                                        query: {
                                            with_sku: !0,
                                            with_application: !0,
                                            exclude_deleted: e
                                        }
                                    })];
                                case 1:
                                    return [2, o.sent().body]
                            }
                        }))
                    }));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                d = function() {
                    var t = c((function(t) {
                        return s(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, r.ZP.get({
                                        url: u.ANM.SUBSCRIPTION_PLAN_GROUP_LISTING(t)
                                    })];
                                case 1:
                                    return [2, e.sent().body]
                            }
                        }))
                    }));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }();

            function y(t) {
                o.Z.dispatch({
                    type: "APPLICATION_FETCH",
                    applicationId: t
                });
                return r.ZP.get({
                    url: u.ANM.APPLICATION_PUBLIC(t)
                }).then((function(t) {
                    o.Z.dispatch({
                        type: "APPLICATION_FETCH_SUCCESS",
                        application: t.body
                    });
                    return t.body
                })).catch((function(e) {
                    o.Z.dispatch({
                        type: "APPLICATION_FETCH_FAIL",
                        applicationId: t
                    });
                    return Promise.reject(new i.Z(e))
                }))
            }

            function S(t) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = c((function(t) {
                    return s(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, r.ZP.get({
                                    url: u.ANM.ELIGIBLE_APPLICATION_SUBSCRIPTION_GUILDS,
                                    query: {
                                        application_id: t
                                    }
                                })];
                            case 1:
                                return [2, e.sent().body]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        266909: (t, e, n) => {
            n.d(e, {
                M: () => h,
                Z: () => Z
            });
            var r = n(441143),
                o = n.n(r),
                i = n(202351),
                u = n(575626),
                a = n(744564),
                c = n(403626),
                l = n(746974);

            function s(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function f(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function p(t) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return p(t)
            }

            function d(t, e) {
                return !e || "object" !== v(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function y(t, e) {
                y = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return y(t, e)
            }

            function S(t) {
                return function(t) {
                    if (Array.isArray(t)) return s(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return s(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var h, v = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function I(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = p(t);
                    if (e) {
                        var o = p(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }! function(t) {
                t[t.NOT_FETCHED = 0] = "NOT_FETCHED";
                t[t.FETCHING = 1] = "FETCHING";
                t[t.FETCHED = 2] = "FETCHED"
            }(h || (h = {}));

            function b(t) {
                return "subscription_listing:".concat(t)
            }

            function E(t) {
                return "application:".concat(t)
            }

            function m(t) {
                return "plan:".concat(t)
            }

            function A(t, e, n) {
                return "entitlement:".concat(t, ":").concat(n, ":").concat(e)
            }

            function O(t, e) {
                return "entitlement:".concat(e, ":").concat(t)
            }
            var _ = new u.Z((function(t) {
                    return [E(t.application_id)].concat(S(t.subscription_listings_ids.map(b)))
                }), (function(t) {
                    return t.id
                })),
                P = new u.Z((function(t) {
                    return [E(t.application_id), m(t.subscription_plans[0].id)]
                }), (function(t) {
                    return t.id
                })),
                g = new u.Z((function(t) {
                    return [A(t.applicationId, t.isValid(null, l.Z), t.guildId), O(t.isValid(null, l.Z), t.guildId)]
                }), (function(t) {
                    return t.id
                })),
                T = {},
                N = {};

            function C(t) {
                var e = _.values(E(t));
                o()(e.length <= 1, "Found multiple group listings for application");
                return e[0]
            }

            function R(t) {
                _.set(t.id, t);
                var e, n = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var i, u = (null !== (e = t.subscription_listings) && void 0 !== e ? e : [])[Symbol.iterator](); !(n = (i = u.next()).done); n = !0) {
                        w(i.value)
                    }
                } catch (t) {
                    r = !0;
                    o = t
                } finally {
                    try {
                        n || null == u.return || u.return()
                    } finally {
                        if (r) throw o
                    }
                }
            }

            function w(t) {
                P.set(t.id, t)
            }
            var L = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && y(t, e)
                }(n, t);
                var e = I(n);

                function n() {
                    f(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.getSubscriptionGroupListingsForApplicationFetchState = function(t) {
                    var e;
                    return null !== (e = T[t]) && void 0 !== e ? e : h.NOT_FETCHED
                };
                r.getSubscriptionGroupListing = function(t) {
                    return _.get(t)
                };
                r.getSubscriptionGroupListingForApplication = function(t) {
                    return C(t)
                };
                r.getSubscriptionGroupListingForSubscriptionListing = function(t) {
                    var e = _.values(b(t));
                    o()(e.length <= 1, "Found multiple group listings for listing");
                    return e[0]
                };
                r.getSubscriptionListing = function(t) {
                    return P.get(t)
                };
                r.getSubscriptionListingsForApplication = function(t) {
                    return P.values(E(t))
                };
                r.getEntitlementsForGuildFetchState = function(t) {
                    var e;
                    return null !== (e = N[t]) && void 0 !== e ? e : h.NOT_FETCHED
                };
                r.getSubscriptionListingForPlan = function(t) {
                    var e = P.values(m(t));
                    o()(e.length <= 1, "Found multiple listings for plan");
                    return e[0]
                };
                r.getApplicationEntitlementsForGuild = function(t, e) {
                    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    return g.values(A(t, n, e))
                };
                r.getEntitlementsForGuild = function(t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return g.values(O(e, t))
                };
                r.__getLocalVars = function() {
                    return {
                        subscriptionGroupListings: _,
                        subscriptionListings: P,
                        applicationEntitlementsForGuilds: g,
                        subscriptionGroupListingsForApplicationFetchState: T,
                        entitlementsForGuildFetchState: N
                    }
                };
                return n
            }(i.ZP.Store);
            L.displayName = "ApplicationSubscriptionStore";
            const Z = new L(a.Z, {
                LOGOUT: function() {
                    _.clear();
                    P.clear();
                    g.clear();
                    T = {};
                    N = {}
                },
                APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function(t) {
                    var e = t.applicationId;
                    T[e] = h.FETCHING;
                    var n = C(e);
                    if (null != n) {
                        var r = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (var u, a = n.subscription_listings_ids[Symbol.iterator](); !(r = (u = a.next()).done); r = !0) {
                                var c = u.value;
                                P.delete(c)
                            }
                        } catch (t) {
                            o = !0;
                            i = t
                        } finally {
                            try {
                                r || null == a.return || a.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                    }
                },
                APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function(t) {
                    var e = t.applicationId,
                        n = t.groupListing;
                    T[e] = h.FETCHED;
                    R(n)
                },
                APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function(t) {
                    var e = t.applicationId;
                    T[e] = h.FETCHED
                },
                APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS: function(t) {
                    var e = t.guildId;
                    N[e] = h.FETCHING
                },
                APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: function(t) {
                    var e = t.guildId,
                        n = t.entitlements;
                    N[e] = h.FETCHED;
                    n.forEach((function(t) {
                        var e = c.Z.createFromServer(t);
                        g.set(e.id, e)
                    }))
                },
                APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE: function(t) {
                    var e = t.guildId;
                    N[e] = h.NOT_FETCHED
                },
                APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function(t) {
                    R(t.groupListing)
                }
            })
        },
        243763: (t, e, n) => {
            n.d(e, {
                bZ: () => a,
                LD: () => c,
                Pw: () => l,
                KK: () => s,
                KW: () => f,
                AQ: () => p
            });
            var r = n(441143),
                o = n.n(r),
                i = n(661123),
                u = n(2590);

            function a(t) {
                var e = t.items;
                o()(1 === e.length, "more than 1 subscription item for application subscription");
                return e[0].planId
            }

            function c(t) {
                return null != l(t)
            }

            function l(t) {
                var e;
                return null === (e = t.subscription_listings) || void 0 === e ? void 0 : e.find((function(t) {
                    return t.published && (s(t.sku_flags) || f(t.sku_flags)) && t.subscription_plans[0].price > 0
                }))
            }

            function s(t) {
                return (0, i.yE)(t, u.l4R.APPLICATION_GUILD_SUBSCRIPTION)
            }

            function f(t) {
                return (0, i.yE)(t, u.l4R.APPLICATION_USER_SUBSCRIPTION)
            }

            function p(t, e, n) {
                return t.subscription_plans[0].sku_id === e.skuId && (s(t.sku_flags) ? null != n && e.guildId === n && n !== u.ME : !!f(t.sku_flags) && null == e.guildId)
            }
        },
        266472: (t, e, n) => {
            n.d(e, {
                V: () => p
            });
            var r = n(202351),
                o = n(296602),
                i = n(711531),
                u = n(551778),
                a = n(536392),
                c = n(203600);

            function l(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function s(t) {
                return function(t) {
                    if (Array.isArray(t)) return l(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return l(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            new o.Z("useSubscriptionPlansLoaded");
            var f = function(t) {};

            function p() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s(c.YQ),
                    e = (0, r.Wu)([i.Z], (function() {
                        return i.Z.paymentSourceIds
                    })),
                    n = (0, r.e7)([i.Z], (function() {
                        return i.Z.defaultPaymentSourceId
                    })),
                    o = (0, r.e7)([u.Z], (function() {
                        return u.Z.isLoadedForSKUs(t)
                    })),
                    l = (0, r.e7)([a.Z], (function() {
                        var t;
                        return null === (t = a.Z.getPremiumTypeSubscription()) || void 0 === t ? void 0 : t.paymentSourceId
                    }));
                if (null != l && !u.Z.hasPaymentSourceForSKUIds(l, t)) {
                    f("subscription payment source ".concat(l, " not loaded for ").concat(t));
                    return !1
                }
                if (null != n && !u.Z.hasPaymentSourceForSKUIds(n, t)) {
                    f("default payment source ".concat(n, " not loaded for ").concat(t));
                    return !1
                }
                var p = !0,
                    d = !1,
                    y = void 0;
                try {
                    for (var S, h = e[Symbol.iterator](); !(p = (S = h.next()).done); p = !0) {
                        var v = S.value;
                        if (!u.Z.hasPaymentSourceForSKUIds(v, t)) {
                            f("payment source ".concat(v, " not loaded for ").concat(t));
                            return !1
                        }
                    }
                } catch (t) {
                    d = !0;
                    y = t
                } finally {
                    try {
                        p || null == h.return || h.return()
                    } finally {
                        if (d) throw y
                    }
                }
                f("isLoadedForSKUs ".concat(o));
                return o
            }
        },
        782786: (t, e, n) => {
            n.r(e);
            n.d(e, {
                PaymentContext: () => yt,
                PaymentContextProvider: () => vt,
                useForwardedPaymentContext: () => ht,
                usePaymentContext: () => St
            });
            var r = n(785893),
                o = n(667294),
                i = n(886664),
                u = n(989824),
                a = n(468811),
                c = n.n(a),
                l = n(202351),
                s = n(258104),
                f = n(301443),
                p = n(387099),
                d = n(69427),
                y = n(909365),
                S = n(908434),
                h = n(45164),
                v = n(661123),
                I = n(644144),
                b = n(116094),
                E = n(22176),
                m = n(551778);

            function A(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function O(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (e && i.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            o = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return A(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return A(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var _ = n(447246),
                P = n(203600),
                g = n(520453);

            function T(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function N(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function C(t) {
                var e = t.activeSubscription,
                    n = t.skuIDs,
                    r = t.paymentSourceId,
                    o = t.isGift;
                n = n.filter((function(t) {
                    return t !== P.Si.NONE
                }));
                var i, u, a = (0, l.e7)([m.Z], (function() {
                        var t = m.Z.getPlanIdsForSkus(n).filter((function(t) {
                            return !o || P.dJ.has(t)
                        }));
                        return t.length > 0 ? m.Z.get(t[0]) : null
                    })),
                    c = null == a ? [] : (0, _.DE)(a.id, r, o),
                    s = null !== (u = null !== (i = c.find((function(t) {
                        return t === (null == e ? void 0 : e.currency)
                    }))) && void 0 !== i ? i : c[0]) && void 0 !== u ? u : g.pK.USD;
                return N(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            T(t, e, n[e])
                        }))
                    }
                    return t
                }({}, (0, _.gr)(s, null == a ? void 0 : a.id, r, o, n)), {
                    currencies: c
                })
            }
            var R = n(673679),
                w = n(536392);
            var L = n(711531);

            function Z(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function F(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (e && i.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            o = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return Z(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Z(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var M = n(785531),
                U = n(856281),
                D = n(458823);

            function j(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function G(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (e && i.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            o = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return j(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return j(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function k(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function x(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (e && i.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            o = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return k(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return k(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var B = n(83471),
                H = n(632826);

            function W(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function Y(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (e && i.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            o = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return W(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return W(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var K = n(197597),
                V = n(615796);

            function $(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function Q(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (e && i.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            o = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return $(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var q = n(318715),
                z = n(315804),
                J = n(746974);

            function X(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function tt(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (e && i.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            o = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return X(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return X(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var et = n(264628),
                nt = n(799105);

            function rt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function ot(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (e && i.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            o = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return rt(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return rt(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var it = n(887753),
                ut = n(2590);

            function at(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function ct(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function lt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        ct(t, e, n[e])
                    }))
                }
                return t
            }

            function st(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function ft(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (e && i.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            o = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return at(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return at(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var pt = d.Cj.STANDARD_BOX,
                dt = ft((0, h.Z)(), 3),
                yt = dt[0],
                St = dt[1],
                ht = dt[2];

            function vt(t) {
                var e = t.loadId,
                    n = t.activeSubscription,
                    a = t.stepConfigs,
                    d = t.breadcrumbs,
                    h = void 0 === d ? [] : d,
                    A = t.skuIDs,
                    _ = t.isGift,
                    g = void 0 !== _ && _,
                    T = t.giftRecipient,
                    N = t.children,
                    Z = t.defaultPlanId,
                    j = t.purchaseType,
                    k = void 0 === j ? ut.GZQ.SUBSCRIPTION : j,
                    W = t.applicationId,
                    $ = t.referralCode,
                    X = function() {
                        var t = ot(o.useState(null), 2),
                            e = t[0],
                            n = t[1];
                        o.useEffect((function() {
                            (0, nt.d2)().then((function(t) {
                                return n(t)
                            })).catch((function(t) {
                                (0, et.q2)(t)
                            }))
                        }), []);
                        return e
                    }(),
                    rt = (0, p.Q)(),
                    at = function() {
                        var t = (0,
                            l.e7)([w.Z], (function() {
                            return w.Z.hasFetchedSubscriptions()
                        }));
                        o.useEffect((function() {
                            t || (0, R.jg)()
                        }), [t]);
                        return t
                    }(),
                    ct = function(t) {
                        var e = t.isGift,
                            n = t.activeSubscription,
                            r = (0, l.cj)([L.Z], (function() {
                                return {
                                    defaultPaymentSourceId: L.Z.defaultPaymentSourceId,
                                    paymentSources: L.Z.paymentSources,
                                    hasFetchedPaymentSources: L.Z.hasFetchedPaymentSources
                                }
                            })),
                            i = r.defaultPaymentSourceId,
                            u = r.paymentSources,
                            a = r.hasFetchedPaymentSources,
                            c = function(t, e, n) {
                                return t || null == (null == e ? void 0 : e.paymentSourceId) ? n : e.paymentSourceId
                            },
                            s = F(o.useState((function() {
                                return c(e, n, i)
                            })), 2),
                            f = s[0],
                            p = s[1];
                        o.useEffect((function() {
                            a ? p(c(e, n, i)) : (0, R.tZ)()
                        }), [a, e, n, i]);
                        return {
                            paymentSources: u,
                            hasPaymentSources: Object.keys(u).length > 0,
                            paymentSourceId: f,
                            setPaymentSourceId: p,
                            hasFetchedPaymentSources: a
                        }
                    }({
                        isGift: g,
                        activeSubscription: n
                    }),
                    dt = ct.paymentSources,
                    St = ct.hasPaymentSources,
                    ht = ct.paymentSourceId,
                    vt = ct.setPaymentSourceId,
                    It = ct.hasFetchedPaymentSources,
                    bt = o.useRef(St),
                    Et = C({
                        activeSubscription: n,
                        skuIDs: A,
                        paymentSourceId: ht,
                        isGift: g
                    }),
                    mt = Et.hasFetchedSubscriptionPlans,
                    At = Et.priceOptions,
                    Ot = Et.setCurrency,
                    _t = Et.currencyLoading,
                    Pt = Et.currencies,
                    gt = function() {
                        var t = Q(o.useState(!1), 2),
                            e = t[0],
                            n = t[1],
                            r = Q(o.useState(!1), 2),
                            i = r[0],
                            u = r[1],
                            a = (0, l.e7)([V.Z], (function() {
                                return K.M.EEA_COUNTRIES.has(V.Z.ipCountryCodeWithFallback)
                            }));
                        return {
                            hasViewedPurchaseTerms: e,
                            setHasViewedPurchaseTerms: n,
                            showWithdrawalWaiver: a,
                            hasAcceptedWithdrawalWaiver: !a || i,
                            setHasAcceptedWithdrawalWaiver: u
                        }
                    }(),
                    Tt = ft(o.useState(!1), 2),
                    Nt = Tt[0],
                    Ct = Tt[1],
                    Rt = function(t) {
                        var e, n = t.stepConfigs,
                            r = t.breadcrumbs,
                            i = tt(o.useState(null === (e = n[0]) || void 0 === e ? void 0 : e.key), 2),
                            u = i[0],
                            a = i[1],
                            c = n.map((function(t) {
                                return t.key
                            })).filter((function(t) {
                                return null != t
                            })),
                            l = n.filter((function(t) {
                                var e;
                                return null != t.key && null != (null == t || null === (e = t.options) || void 0 === e ? void 0 : e.breadcrumb)
                            })).map((function(t) {
                                return {
                                    id: t.key,
                                    label: t.options.breadcrumb()
                                }
                            })).sort((function(t, e) {
                                return null != r ? r.indexOf(t.id) - r.indexOf(e.id) : 0
                            }));
                        return {
                            steps: c,
                            step: u,
                            setStep: a,
                            breadcrumbsData: l
                        }
                    }({
                        stepConfigs: a,
                        breadcrumbs: h
                    }),
                    wt = Rt.step,
                    Lt = Rt.setStep,
                    Zt = Rt.steps,
                    Ft = Rt.breadcrumbsData,
                    Mt = ft(function(t) {
                        var e = Y(o.useState(H.A.WAITING), 2),
                            n = e[0],
                            r = e[1];
                        o.useEffect((function() {
                            null != t && t !== B.h8.REVIEW && n !== H.A.WAITING && n !== H.A.COMPLETED && r(H.A.WAITING)
                        }), [t, n, r]);
                        return [n, r]
                    }(wt), 2),
                    Ut = Mt[0],
                    Dt = Mt[1],
                    jt = function() {
                        var t = (0, l.e7)([U.Z], (function() {
                                return U.Z.error
                            })),
                            e = G((0, l.Wu)([D.Z], (function() {
                                return [D.Z.error, D.Z.isAwaitingAuthentication]
                            })), 2),
                            n = e[0];
                        return {
                            paymentError: null != n ? n : t,
                            paymentAuthenticationState: e[1] ? M.wr.PENDING : null != n ? M.wr.ERROR : M.wr.NONE
                        }
                    }(),
                    Gt = jt.paymentError,
                    kt = jt.paymentAuthenticationState,
                    xt = function() {
                        var t = x(o.useState(null), 2),
                            e = t[0],
                            n = t[1],
                            r = o.useRef(null);
                        o.useEffect((function() {
                            null != e && null != r.current && r.current.scrollIntoView({
                                behavior: "smooth"
                            })
                        }), [e]);
                        return {
                            purchaseError: e,
                            setPurchaseError: n,
                            purchaseErrorBlockRef: r
                        }
                    }(),
                    Bt = xt.purchaseError,
                    Ht = xt.purchaseErrorBlockRef,
                    Wt = xt.setPurchaseError,
                    Yt = (0,
                        u.Z)((function() {
                        var t = null != e ? e : c().v4();
                        E.Z.addBreadcrumb({
                            message: "Checkout session ID: ".concat(t)
                        });
                        return {
                            loadId: t,
                            startTime: Date.now()
                        }
                    })),
                    Kt = function() {
                        var t = O(o.useState(void 0), 2),
                            e = t[0],
                            n = t[1],
                            r = O(o.useState(void 0), 2),
                            i = r[0],
                            u = r[1];
                        return {
                            selectedSkuId: e,
                            selectedPlan: (0, l.e7)([m.Z], (function() {
                                return null != i ? m.Z.get(i) : null
                            })),
                            setSelectedSkuId: n,
                            setSelectedPlanId: u
                        }
                    }(),
                    Vt = Kt.selectedSkuId,
                    $t = Kt.selectedPlan,
                    Qt = Kt.setSelectedSkuId,
                    qt = Kt.setSelectedPlanId,
                    zt = ft((0, l.Wu)([y.Z], (function() {
                        return [y.Z.purchaseTokenAuthState, y.Z.purchaseTokenHash]
                    })), 2),
                    Jt = zt[0],
                    Xt = zt[1],
                    te = ft((0, l.Wu)([it.Z], (function() {
                        return [it.Z.browserCheckoutState, it.Z.loadId]
                    })), 2),
                    ee = te[0],
                    ne = te[1],
                    re = ft(o.useState(null), 2),
                    oe = re[0],
                    ie = re[1],
                    ue = ft(o.useState(null), 2),
                    ae = ue[0],
                    ce = ue[1],
                    le = ft(o.useState(null), 2),
                    se = le[0],
                    fe = le[1],
                    pe = ft(o.useState(null), 2),
                    de = pe[0],
                    ye = pe[1],
                    Se = ft(o.useState(null), 2),
                    he = Se[0],
                    ve = Se[1],
                    Ie = ft(o.useState(void 0), 2),
                    be = Ie[0],
                    Ee = Ie[1],
                    me = ft(o.useState([]), 2),
                    Ae = me[0],
                    Oe = me[1],
                    _e = o.useMemo((function() {
                        return null == $t || (0, b.PV)($t.id)
                    }), [$t]),
                    Pe = ft(o.useState((0, I.a8)(T) ? pt : undefined), 2),
                    ge = Pe[0],
                    Te = Pe[1],
                    Ne = o.useRef(null != n ? n.planId : null);
                o.useEffect((function() {
                    null == Ne.current && null != n && (Ne.current = n.planId)
                }), [n]);
                var Ce, Re, we = function(t) {
                        var e = t.applicationId,
                            n = t.skuIDs,
                            r = t.currentPaymentSourceId,
                            i = o.useMemo((function() {
                                return n.filter((function(t) {
                                    return !P.YQ.includes(t)
                                }))
                            }), [n]),
                            u = (0, q.ZP)([J.Z], (function() {
                                return i.every((function(t) {
                                    return !J.Z.isFetching(t) && null != J.Z.get(t)
                                }))
                            })),
                            a = (0, q.cj)([J.Z], (function() {
                                var t = {},
                                    e = !0,
                                    n = !1,
                                    r = void 0;
                                try {
                                    for (var o, u = i[Symbol.iterator](); !(e = (o = u.next()).done); e = !0) {
                                        var a, c = o.value;
                                        t[c] = null !== (a = J.Z.get(c)) && void 0 !== a ? a : void 0
                                    }
                                } catch (t) {
                                    n = !0;
                                    r = t
                                } finally {
                                    try {
                                        e || null == u.return || u.return()
                                    } finally {
                                        if (n) throw r
                                    }
                                }
                                return t
                            }), [i]);
                        o.useEffect((function() {
                            var t = !0,
                                n = !1,
                                r = void 0;
                            try {
                                for (var o, u = i[Symbol.iterator](); !(t = (o = u.next()).done); t = !0) {
                                    var a = o.value;
                                    J.Z.isFetching(a) || null != J.Z.get(a) || (0, z.jU)(e, a)
                                }
                            } catch (t) {
                                n = !0;
                                r = t
                            } finally {
                                try {
                                    t || null == u.return || u.return()
                                } finally {
                                    if (n) throw r
                                }
                            }
                        }), [e, i]);
                        var c = (0, q.cj)([S.Z], (function() {
                            var t = {},
                                e = !0,
                                n = !1,
                                r = void 0;
                            try {
                                for (var o, u = i[Symbol.iterator](); !(e = (o = u.next()).done); e = !0) {
                                    var a, c = o.value;
                                    t[c] = null !== (a = S.Z.getPricesForSku(c)) && void 0 !== a ? a : void 0
                                }
                            } catch (t) {
                                n = !0;
                                r = t
                            } finally {
                                try {
                                    e || null == u.return || u.return()
                                } finally {
                                    if (n) throw r
                                }
                            }
                            return t
                        }), [i]);
                        o.useEffect((function() {
                            var t = !0,
                                n = !1,
                                o = void 0;
                            try {
                                for (var u, a = i[Symbol.iterator](); !(t = (u = a.next()).done); t = !0) {
                                    var c = u.value,
                                        l = S.Z.getPricesForSku(c),
                                        s = null != r ? r : S.c;
                                    null != l && null != l[s] || (0, z.x2)(e, c, r)
                                }
                            } catch (t) {
                                n = !0;
                                o = t
                            } finally {
                                try {
                                    t || null == a.return || a.return()
                                } finally {
                                    if (n) throw o
                                }
                            }
                        }), [e, i, r]);
                        return {
                            hasFetchedSkus: u,
                            skusById: a,
                            skuPricePreviewsById: c
                        }
                    }({
                        applicationId: null != W ? W : P.RQ,
                        skuIDs: A,
                        currentPaymentSourceId: ht
                    }),
                    Le = we.skusById,
                    Ze = we.hasFetchedSkus,
                    Fe = we.skuPricePreviewsById,
                    Me = o.useMemo((function() {
                        if (null == Vt) return null;
                        var t = Fe[Vt];
                        return null == t ? null : t[null != ht ? ht : S.c]
                    }), [Vt, Fe, ht]),
                    Ue = (0, f.IX)(W),
                    De = (0, v.yE)(null !== (Ce = null == Ue ? void 0 : Ue.flags) && void 0 !== Ce ? Ce : 0, ut.udG.EMBEDDED) && (0, v.yE)(null !== (Re = null == Ue ? void 0 : Ue.flags) && void 0 !== Re ? Re : 0, ut.udG.EMBEDDED_IAP),
                    je = (0, l.e7)([s.ZP], (function() {
                        return Array.from(s.ZP.getSelfEmbeddedActivities().values()).find((function(t) {
                            var e = t.application_id;
                            return W === e
                        }))
                    })),
                    Ge = null != je ? je.activity_id : void 0;
                return (0, r.jsx)(yt.Provider, {
                    value: st(lt({
                        stripe: X,
                        contextMetadata: Yt,
                        blockedPayments: rt,
                        isGift: g,
                        giftRecipient: T,
                        activeSubscription: n,
                        hasFetchedSubscriptions: at,
                        hasFetchedSubscriptionPlans: mt,
                        updatedSubscription: de,
                        setUpdatedSubscription: ye,
                        subscriptionMetadataRequest: he,
                        setSubscriptionMetadataRequest: ve,
                        hasFetchedPaymentSources: It,
                        paymentSources: dt,
                        hasPaymentSources: St,
                        paymentSourceId: ht,
                        setPaymentSourceId: vt,
                        priceOptions: At,
                        setCurrency: Ot,
                        currencyLoading: _t,
                        currencies: Pt
                    }, gt), {
                        hasAcceptedTerms: Nt,
                        setHasAcceptedTerms: Ct,
                        step: wt,
                        setStep: Lt,
                        steps: Zt,
                        stepConfigs: a,
                        breadcrumbs: Ft,
                        purchaseState: Ut,
                        setPurchaseState: Dt,
                        paymentAuthenticationState: kt,
                        paymentError: Gt,
                        purchaseError: Bt,
                        setPurchaseError: Wt,
                        purchaseErrorBlockRef: Ht,
                        purchaseTokenAuthState: Jt,
                        purchaseTokenHash: Xt,
                        browserCheckoutState: ee,
                        browserCheckoutStateLoadId: ne,
                        bodyNode: oe,
                        setBodyNode: ie,
                        footerNode: ae,
                        setFooterNode: ce,
                        modalOverlayNode: se,
                        setModalOverlayNode: fe,
                        selectedSkuId: Vt,
                        selectedPlan: $t,
                        setSelectedSkuId: Qt,
                        setSelectedPlanId: qt,
                        readySlideId: be,
                        setReadySlideId: Ee,
                        defaultPlanId: Z,
                        isPremium: _e,
                        startedPaymentFlowWithPaymentSourcesRef: bt,
                        startingPremiumSubscriptionPlanIdRef: Ne,
                        selectedGiftStyle: ge,
                        setSelectedGiftStyle: Te,
                        hasFetchedSkus: Ze,
                        skusById: Le,
                        skuPricePreviewsById: Fe,
                        selectedSkuPricePreview: Me,
                        application: Ue,
                        purchaseType: k,
                        isEmbeddedIAP: De,
                        activitySessionId: Ge,
                        entitlementsGranted: Ae,
                        setEntitlementsGranted: Oe,
                        referralCode: $
                    }),
                    children: (0, r.jsx)(i.Elements, {
                        options: ut.OBo,
                        stripe: X,
                        children: N
                    })
                })
            }
        },
        83471: (t, e, n) => {
            n.d(e, {
                h8: () => r,
                Ck: () => f,
                DJ: () => p,
                ly: () => d,
                dZ: () => y
            });
            var r, o = n(667294),
                i = n(347365),
                u = n(296602),
                a = n(264628),
                c = n(632826),
                l = n(473708),
                s = new u.Z("PaymentSteps");
            ! function(t) {
                t.PAYMENT_TYPE = "payment_type";
                t.CREDIT_CARD_INFORMATION = "credit_card_information";
                t.PAYPAL_INFORMATION = "paypal_information";
                t.VENMO_INFORMATION = "venmo_information";
                t.SOFORT_INFORMATION = "sofort_information";
                t.PRZELEWY24_INFORMATION = "przelewy24_information";
                t.EPS_INFORMATION = "eps_information";
                t.IDEAL_INFORMATION = "ideal_information";
                t.PAYMENT_REQUEST_INFORMATION = "payment_request_information";
                t.ADDRESS = "address";
                t.AWAITING_AUTHENTICATION = "awaiting_authentication";
                t.SKU_SELECT = "sku_select";
                t.PLAN_SELECT = "plan_select";
                t.PREMIUM_UPSELL = "premium_upsell";
                t.PREMIUM_GUILD_UPSELL = "premium_guild_upsell";
                t.REVIEW = "review";
                t.CONFIRM = "confirm";
                t.CLAIM_FREE_SKU = "claim_free_sku";
                t.SKU_PREVIEW = "sku_preview";
                t.LOADING_PAYMENT_SOURCES = "loading_payment_sources";
                t.SHOP = "shop";
                t.PROMOTION_INFO = "promotion_info";
                t.AWAITING_PURCHASE_TOKEN_AUTH = "awaiting_purchase_token_auth";
                t.BENEFITS = "benefits";
                t.WHAT_YOU_LOSE = "what_you_lose";
                t.ADD_PAYMENT_STEPS = "add_payment_steps";
                t.AWAITING_BROWSER_CHECKOUT = "awaiting_browser_checkout"
            }(r || (r = {}));
            var f = new Set([r.CREDIT_CARD_INFORMATION, r.PAYMENT_REQUEST_INFORMATION, r.PAYPAL_INFORMATION, r.VENMO_INFORMATION, r.ADDRESS, r.CLAIM_FREE_SKU, r.SKU_PREVIEW, r.PREMIUM_UPSELL, r.SOFORT_INFORMATION, r.PRZELEWY24_INFORMATION]);

            function p(t) {
                switch (t) {
                    case r.PLAN_SELECT:
                        return l.Z.Messages.BILLING_STEP_SELECT_PLAN;
                    case r.PAYMENT_TYPE:
                        return l.Z.Messages.BILLING_STEP_PAYMENT;
                    case r.AWAITING_PURCHASE_TOKEN_AUTH:
                    case r.REVIEW:
                        return l.Z.Messages.BILLING_STEP_REVIEW;
                    case r.SHOP:
                        return l.Z.Messages.BILLING_STEP_SHOP;
                    case r.ADD_PAYMENT_STEPS:
                        return l.Z.Messages.BILLING_STEP_PAYMENT;
                    case r.PAYMENT_REQUEST_INFORMATION:
                        return l.Z.Messages.BILLING_STEP_PAYMENT_INFO;
                    case r.CREDIT_CARD_INFORMATION:
                        return l.Z.Messages.PAYMENT_SOURCE_INFORMATION;
                    case r.ADDRESS:
                        return l.Z.Messages.BILLING_ADDRESS;
                    case r.PAYPAL_INFORMATION:
                        return l.Z.Messages.PAYMENT_SOURCE_PAYPAL_DETAILS;
                    case r.VENMO_INFORMATION:
                        return l.Z.Messages.PAYMENT_SOURCE_VENMO_DETAILS;
                    case r.SOFORT_INFORMATION:
                        return l.Z.Messages.PAYMENT_SOURCE_SOFORT_INFO;
                    case r.PRZELEWY24_INFORMATION:
                        return l.Z.Messages.PAYMENT_SOURCE_PRZELEWY24_INFO
                }
                throw new Error("Unexpected step: ".concat(t))
            }

            function d(t) {
                if (null != t) {
                    if (!(t instanceof i.HF)) {
                        s.error(t);
                        (0, a.q2)(t);
                        throw new Error("Unexpected error type")
                    }
                    if (t.hasCardError()) return r.CREDIT_CARD_INFORMATION;
                    if (t.hasAddressError()) return r.ADDRESS
                }
                return null
            }

            function y(t, e, n) {
                o.useEffect((function() {
                    null != t && t !== r.REVIEW && e !== c.A.WAITING && e !== c.A.COMPLETED && n(c.A.WAITING)
                }), [t, e, n])
            }
        },
        632826: (t, e, n) => {
            n.d(e, {
                A: () => r
            });
            var r;
            ! function(t) {
                t.WAITING = "WAITING";
                t.PURCHASING = "PURCHASING";
                t.FAIL = "FAIL";
                t.COMPLETED = "COMPLETED"
            }(r || (r = {}))
        },
        149096: (t, e, n) => {
            n.d(e, {
                ZP: () => S,
                C3: () => h,
                O3: () => v
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                u = n.n(i),
                a = n(441143),
                c = n.n(a),
                l = n(973935),
                s = n(882723),
                f = n(782786),
                p = n(758614),
                d = n.n(p);

            function y(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || (o[n] = t[n])
                    }
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                    }
                }
                return o
            }

            function S(t) {
                var e, n, i, a, l, p = function(t) {
                        return {
                            header: t.header,
                            isLargeModal: t.isLargeModal,
                            stepProps: y(t, ["header", "isLargeModal"])
                        }
                    }(t),
                    S = p.header,
                    h = p.isLargeModal,
                    v = p.stepProps,
                    I = (0,
                        f.usePaymentContext)(),
                    b = I.step,
                    E = I.stepConfigs,
                    m = I.setBodyNode,
                    A = I.setFooterNode,
                    O = I.setModalOverlayNode,
                    _ = I.setReadySlideId,
                    P = E.find((function(t) {
                        return t.key === b
                    }));
                o.useEffect((function() {
                    O(null)
                }), [b, O]);
                c()(null != P, "Unknown step for current payment flow.");
                var g, T = null !== (l = null == P || null === (e = P.options) || void 0 === e ? void 0 : e.hideSlider) && void 0 !== l && l,
                    N = null == P || null === (n = P.options) || void 0 === n ? void 0 : n.bodyClassName,
                    C = void 0 !== h && h ? d().sliderBodyLarge : null == P || null === (i = P.options) || void 0 === i ? void 0 : i.sliderBodyClassName;
                return (0, r.jsxs)(r.Fragment, {
                    children: [null === (g = null == P || null === (a = P.options) || void 0 === a ? void 0 : a.renderHeader) || void 0 === g || g ? S : null, P.renderStep(v), null == b || T ? null : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(s.ModalContent, {
                            className: u()(d().body, N),
                            children: (0, r.jsx)(s.Slides, {
                                activeSlide: b,
                                centered: !1,
                                onSlideReady: function(t) {
                                    return _(t)
                                },
                                children: E.filter((function(t) {
                                    return null != t.key
                                })).map((function(t) {
                                    return (0, r.jsx)(s.Slide, {
                                        id: t.key,
                                        children: (0,
                                            r.jsx)("form", {
                                            className: u()(d().sliderBody, C),
                                            ref: function(t) {
                                                return m(t)
                                            },
                                            onSubmit: function(t) {
                                                return t.preventDefault()
                                            }
                                        })
                                    }, t.key)
                                }))
                            })
                        }), (0, r.jsx)("div", {
                            ref: function(t) {
                                return A(t)
                            }
                        }), (0, r.jsx)("div", {
                            ref: function(t) {
                                return O(t)
                            }
                        })]
                    })]
                })
            }

            function h(t) {
                var e = t.children,
                    n = (0, f.usePaymentContext)().bodyNode;
                return null == n ? null : l.createPortal(e, n)
            }

            function v(t) {
                var e = t.children,
                    n = (0, f.usePaymentContext)().footerNode;
                return null == n ? null : l.createPortal(e, n)
            }
        },
        887753: (t, e, n) => {
            n.d(e, {
                Y: () => s,
                Z: () => h
            });
            var r = n(202351),
                o = n(744564);

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function u(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(t, r.key, r)
                }
            }

            function a(t) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return a(t)
            }

            function c(t, e) {
                return !e || "object" !== f(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function l(t, e) {
                l = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return l(t, e)
            }
            var s, f = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function p(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = a(t);
                    if (e) {
                        var o = a(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }! function(t) {
                t[t.UNKNOWN = 0] = "UNKNOWN";
                t[t.PENDING = 1] = "PENDING";
                t[t.DONE = 2] = "DONE"
            }(s || (s = {}));
            var d = s.UNKNOWN,
                y = null;
            var S = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && l(t, e)
                }(n, t);
                var e = p(n);

                function n() {
                    i(this, n);
                    return e.apply(this, arguments)
                }
                n.prototype.__getLocalVars = function() {
                    return {
                        browserCheckoutState: d,
                        loadId: y
                    }
                };
                ! function(t, e, n) {
                    e && u(t.prototype, e);
                    n && u(t, n)
                }(n, [{
                    key: "browserCheckoutState",
                    get: function() {
                        return d
                    }
                }, {
                    key: "loadId",
                    get: function() {
                        return y
                    }
                }]);
                return n
            }(r.ZP.Store);
            S.displayName = "BrowserCheckoutStateStore";
            const h = new S(o.Z, {
                USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function(t) {
                    d = s.PENDING;
                    y = t.loadId
                },
                USER_PAYMENT_BROWSER_CHECKOUT_DONE: function(t) {
                    y === t.loadId && (d = s.DONE)
                }
            })
        },
        785531: (t, e, n) => {
            n.d(e, {
                wr: () => r,
                bp: () => f,
                D6: () => p
            });
            var r, o = n(667294),
                i = n(202351),
                u = n(513328),
                a = n(673679),
                c = n(652555),
                l = n(83471),
                s = n(458823);
            ! function(t) {
                t[t.PENDING = 1] = "PENDING";
                t[t.ERROR = 2] = "ERROR";
                t[t.NONE = 3] = "NONE"
            }(r || (r = {}));

            function f(t, e, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    u = arguments.length > 4 ? arguments[4] : void 0;
                o.useEffect((function() {
                    null != t && (e === r.PENDING && t !== l.h8.AWAITING_AUTHENTICATION ? n(l.h8.AWAITING_AUTHENTICATION) : t === l.h8.AWAITING_AUTHENTICATION && (e === r.ERROR ? n(l.h8.REVIEW) : e === r.NONE && (i ? null != u ? u() : n(l.h8.REVIEW) : n(l.h8.CONFIRM))))
                }), [t, e, n, i, u])
            }

            function p(t) {
                var e = (0, i.e7)([s.Z], (function() {
                        return s.Z.awaitingPaymentId
                    })),
                    n = (0, i.e7)([c.Z], (function() {
                        return c.Z.isConnected()
                    })),
                    l = o.useRef(new u.Xp);
                o.useEffect((function() {
                    n || null == e || t !== r.PENDING ? l.current.stop() : l.current.start(5e3, (function() {
                        return (0, a.O1)(e)
                    }))
                }), [e, t, n])
            }
        },
        909365: (t, e, n) => {
            n.d(e, {
                I: () => p,
                Z: () => m
            });
            var r = n(202351),
                o = n(744564),
                i = n(414094),
                u = n(652555);

            function a(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(t, r.key, r)
                }
            }

            function l(t) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return l(t)
            }

            function s(t, e) {
                return !e || "object" !== d(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function f(t, e) {
                f = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return f(t, e)
            }
            var p, d = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function y(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = l(t);
                    if (e) {
                        var o = l(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return s(this, n)
                }
            }! function(t) {
                t[t.UNKNOWN = 0] = "UNKNOWN";
                t[t.PENDING = 1] = "PENDING";
                t[t.SUCCESS = 2] = "SUCCESS";
                t[t.ERROR = 3] = "ERROR"
            }(p || (p = {}));
            var S = p.UNKNOWN,
                h = null,
                v = null;

            function I(t) {
                var e = t.error,
                    n = e instanceof i.ZP ? e : new i.ZP(e);
                u.Z.isConnected() && n.code === i.ZP.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (S = p.PENDING)
            }

            function b() {
                S = p.UNKNOWN;
                h = null;
                v = null
            }
            var E = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && f(t, e)
                }(n, t);
                var e = y(n);

                function n() {
                    a(this, n);
                    return e.apply(this, arguments)
                }
                n.prototype.__getLocalVars = function() {
                    return {
                        purchaseTokenAuthState: S,
                        purchaseTokenHash: h,
                        expiresAt: v
                    }
                };
                ! function(t, e, n) {
                    e && c(t.prototype, e);
                    n && c(t, n)
                }(n, [{
                    key: "purchaseTokenAuthState",
                    get: function() {
                        return S
                    }
                }, {
                    key: "purchaseTokenHash",
                    get: function() {
                        return h
                    }
                }, {
                    key: "expiresAt",
                    get: function() {
                        return v
                    }
                }]);
                return n
            }(r.ZP.Store);
            E.displayName = "PurchaseTokenAuthStore";
            const m = new E(o.Z, {
                SKU_PURCHASE_FAIL: I,
                PREMIUM_PAYMENT_SUBSCRIBE_FAIL: I,
                USER_PAYMENT_CLIENT_ADD: function(t) {
                    S = p.SUCCESS;
                    h = t.purchaseTokenHash;
                    v = t.expiresAt
                },
                BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE: b,
                BILLING_SUBSCRIPTION_UPDATE_START: b,
                PAYMENT_AUTHENTICATION_CLEAR_ERROR: b,
                PREMIUM_PAYMENT_ERROR_CLEAR: b,
                PREMIUM_PAYMENT_MODAL_CLOSE: b,
                PREMIUM_PAYMENT_MODAL_OPEN: b,
                PREMIUM_PAYMENT_SUBSCRIBE_START: b,
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: b,
                PREMIUM_PAYMENT_UPDATE_SUCCESS: b,
                SKU_PURCHASE_MODAL_CLOSE: b,
                SKU_PURCHASE_MODAL_OPEN: b,
                SKU_PURCHASE_START: b,
                SKU_PURCHASE_SUCCESS: b
            })
        },
        45164: (t, e, n) => {
            n.d(e, {
                Z: () => i
            });
            var r = n(785893),
                o = n(667294);

            function i() {
                var t = function() {
                        var t = o.useContext(e);
                        if (null == t) throw new Error("Context was used outside of defined provider.");
                        return t
                    },
                    e = o.createContext(void 0);
                return [e, t, function() {
                    var n = t();
                    return function(t) {
                        var o = t.children;
                        return (0, r.jsx)(e.Provider, {
                            value: n,
                            children: o
                        })
                    }
                }]
            }
        },
        447246: (t, e, n) => {
            n.d(e, {
                i1: () => m,
                DE: () => A,
                tD: () => O,
                gr: () => _
            });
            var r = n(667294),
                o = n(441143),
                i = n.n(o),
                u = n(744564),
                a = n(810978),
                c = n(266472),
                l = n(551778),
                s = n(116094),
                f = n(2590),
                p = n(203600);

            function d(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function y(t, e, n, r, o, i, u) {
                try {
                    var a = t[i](u),
                        c = a.value
                } catch (t) {
                    n(t);
                    return
                }
                a.done ? e(c) : Promise.resolve(c).then(r, o)
            }

            function S(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = t.apply(e, n);

                        function u(t) {
                            y(i, r, o, u, a, "next", t)
                        }

                        function a(t) {
                            y(i, r, o, u, a, "throw", t)
                        }
                        u(void 0)
                    }))
                }
            }

            function h(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function v(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (e && i.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            o = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || b(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function I(t) {
                return function(t) {
                    if (Array.isArray(t)) return d(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || b(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function b(t, e) {
                if (t) {
                    if ("string" == typeof t) return d(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(t, e) : void 0
                }
            }
            var E = function(t, e) {
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
                                i = e.call(t, u)
                            } catch (t) {
                                i = [6, t];
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

            function m(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I(p.YQ);
                return null == t || l.Z.hasPaymentSourceForSKUIds(t, e) ? Promise.resolve() : new Promise((function(t) {
                    u.Z.wait(S((function() {
                        return E(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, (0, a.Gn)(e)];
                                case 1:
                                    n.sent();
                                    t();
                                    return [2]
                            }
                        }))
                    })))
                }))
            }

            function A(t, e, n) {
                var r, o = [],
                    u = {
                        purchaseType: n ? f.tuJ.GIFT : f.tuJ.DEFAULT
                    };
                r = "string" == typeof t ? l.Z.get(t) : t;
                i()(r, "subscription plan not loaded");
                null != e && l.Z.hasPaymentSourceForSKUId(e, r.skuId) && (u.paymentSourceId = e);
                (o = (0, s.T4)(r.id, u).map((function(t) {
                    return t.currency
                }))).length < 1 && (o = [f.pKx.USD]);
                return o
            }

            function O(t, e, n) {
                var r = l.Z.get(t);
                i()(null != r, "plan is undefined");
                return A(r, n, !1).includes(e)
            }

            function _(t, e, n, o, i) {
                var u = v(r.useReducer((function(t, e) {
                        return function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(n, t).enumerable
                                }))));
                                r.forEach((function(e) {
                                    h(t, e, n[e])
                                }))
                            }
                            return t
                        }({}, t, e)
                    }), null != n ? {
                        paymentSourceId: n,
                        currency: t,
                        loaded: !1
                    } : {
                        currency: t,
                        loaded: !1
                    }), 2),
                    a = u[0],
                    s = u[1],
                    f = (0, c.V)(i);
                r.useEffect((function() {
                    var t, r = (t = S((function() {
                        var t;
                        return E(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, m(n, i)];
                                case 1:
                                    r.sent();
                                    t = [];
                                    null != e && null != l.Z.get(e) && (t = A(e, n, o));
                                    t.length > 0 ? s({
                                        paymentSourceId: n,
                                        currency: t[0],
                                        loaded: !0
                                    }) : s({
                                        paymentSourceId: n,
                                        loaded: !1
                                    });
                                    return [2]
                            }
                        }))
                    })), function() {
                        return t.apply(this, arguments)
                    });
                    r()
                }), [n, JSON.stringify(i), e, o, f]);
                return {
                    hasFetchedSubscriptionPlans: f,
                    priceOptions: a,
                    setCurrency: function(t) {
                        s({
                            currency: t
                        })
                    },
                    currencyLoading: a.paymentSourceId !== n || null == e || !f || !0 !== a.loaded
                }
            }
        }
    }
]);