(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [24], {
        737264: t => {
            "use strict";
            t.exports.Q = function(t) {
                var n, e = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!e) return null;
                e.shift();
                var r = null,
                    i = [];
                if (e[2]) {
                    r = (n = e[2].split("-")).shift();
                    i = n
                }
                var u = [];
                e[5] && (u = e[5].split("-")).shift();
                var a = [];
                if (e[6]) {
                    (n = e[6].split("-")).shift();
                    for (var o, l = []; n.length;) {
                        var c = n.shift();
                        if (1 === c.length)
                            if (o) {
                                a.push({
                                    singleton: o,
                                    extension: l
                                });
                                o = c;
                                l = []
                            } else o = c;
                        else l.push(c)
                    }
                    a.push({
                        singleton: o,
                        extension: l
                    })
                }
                var s = [];
                if (e[7]) {
                    (s = e[7].split("-")).shift();
                    s.shift()
                }
                var f = [];
                e[8] && (f = e[8].split("-")).shift();
                return {
                    langtag: {
                        language: {
                            language: r,
                            extlang: i
                        },
                        script: e[3] || null,
                        region: e[4] || null,
                        variant: u,
                        extension: a,
                        privateuse: s
                    },
                    privateuse: f,
                    grandfathered: {
                        irregular: e[0] || null,
                        regular: e[1] || null
                    }
                }
            }
        },
        314620: (t, n, e) => {
            "use strict";
            e.d(n, {
                b8: () => f,
                GR: () => h,
                ul: () => y
            });
            var r = e(281110),
                i = e(744564),
                u = e(200892),
                a = e(534681),
                o = e(2590);

            function l(t, n, e, r, i, u, a) {
                try {
                    var o = t[u](a),
                        l = o.value
                } catch (t) {
                    e(t);
                    return
                }
                o.done ? n(l) : Promise.resolve(l).then(r, i)
            }

            function c(t) {
                return function() {
                    var n = this,
                        e = arguments;
                    return new Promise((function(r, i) {
                        var u = t.apply(n, e);

                        function a(t) {
                            l(u, r, i, a, o, "next", t)
                        }

                        function o(t) {
                            l(u, r, i, a, o, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }
            var s = function(t, n) {
                var e, r, i, u, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return u = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                    return this
                }), u;

                function o(u) {
                    return function(o) {
                        return function(u) {
                            if (e) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (e = 1, r && (i = 2 & u[0] ? r.return : u[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, u[1])).done) return i;
                                (r = 0, i) && (u = [2 & u[0], i.value]);
                                switch (u[0]) {
                                    case 0:
                                    case 1:
                                        i = u;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: u[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = u[1];
                                        u = [0];
                                        continue;
                                    case 7:
                                        u = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!i || u[1] > i[0] && u[1] < i[3])) {
                                            a.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = u;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(u);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                u = n.call(t, a)
                            } catch (t) {
                                u = [6, t];
                                r = 0
                            } finally {
                                e = i = 0
                            }
                            if (5 & u[0]) throw u[1];
                            return {
                                value: u[0] ? u[1] : void 0,
                                done: !0
                            }
                        }([u, o])
                    }
                }
            };

            function f() {
                return p.apply(this, arguments)
            }

            function p() {
                return (p = c((function() {
                    var t, n;
                    return s(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                e.trys.push([0, 2, , 3]);
                                return [4, (0, a.Kb)({
                                    url: o.ANM.LIBRARY,
                                    oldFormErrors: !0
                                }, !1)];
                            case 1:
                                t = e.sent();
                                i.Z.dispatch({
                                    type: "LIBRARY_FETCH_SUCCESS",
                                    libraryApplications: t.body
                                });
                                return [3, 3];
                            case 2:
                                n = e.sent();
                                i.Z.dispatch({
                                    type: "LIBRARY_FETCH_FAIL",
                                    error: n
                                });
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function h(t) {
                return d.apply(this, arguments)
            }

            function d() {
                return (d = c((function(t) {
                    var n, e, a;
                    return s(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                return null == (n = t.primarySkuId) ? [2] : [4, r.ZP.get({
                                    url: o.ANM.APPLICATION_BRANCH_LIST(t.id),
                                    oldFormErrors: !0
                                }).then((function(t) {
                                    return t.body
                                }))];
                            case 1:
                                e = l.sent();
                                a = e.map((function(e) {
                                    return u.Z.createForTestMode({
                                        id: t.id,
                                        skuId: n,
                                        branch: e
                                    })
                                }));
                                i.Z.dispatch({
                                    type: "LIBRARY_APPLICATIONS_TEST_MODE_ENABLED",
                                    libraryApplications: a
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function y(t, n, e) {
                i.Z.dispatch({
                    type: "LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE",
                    applicationId: t,
                    branchId: n,
                    launchOptionId: e
                })
            }
        },
        973889: (t, n, e) => {
            "use strict";
            e.d(n, {
                Z: () => f
            });
            var r = e(281110),
                i = e(2590),
                u = e(473708);

            function a(t) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return a(t)
            }

            function o(t, n) {
                return !n || "object" !== c(n) && "function" != typeof n ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : n
            }

            function l(t, n) {
                l = Object.setPrototypeOf || function(t, n) {
                    t.__proto__ = n;
                    return t
                };
                return l(t, n)
            }
            var c = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function s(t) {
                var n = function() {
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
                    var e, r = a(t);
                    if (n) {
                        var i = a(this).constructor;
                        e = Reflect.construct(r, arguments, i)
                    } else e = r.apply(this, arguments);
                    return o(this, e)
                }
            }
            var f = function(t) {
                ! function(t, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && l(t, n)
                }(e, t);
                var n = s(e);

                function e(t, r) {
                    ! function(t, n) {
                        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    return n.call(this, t, r, u.Z.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: i.yXt.STATUS
                    }))
                }
                return e
            }(r.ZP.V6OrEarlierAPIError)
        },
        364857: (t, n, e) => {
            "use strict";
            e.r(n);
            e.d(n, {
                default: () => f
            });
            var r = e(785893),
                i = (e(667294), e(882723)),
                u = e(971402),
                a = e(202351),
                o = e(314620),
                l = e(761814),
                c = e(713094);
            var s = e(473708);

            function f(t) {
                var n = t.libraryApplication,
                    e = t.onPlay,
                    f = t.onSelect,
                    p = function(t, n) {
                        var e = (0, a.e7)([c.Z], (function() {
                                return c.Z.getLaunchOptions(t.id, t.branchId)
                            })),
                            u = (0, a.e7)([l.Z], (function() {
                                return l.Z.getActiveLaunchOptionId(t.id, t.branchId)
                            }));
                        return e.length < 2 ? null : e.map((function(e) {
                            return (0, r.jsx)(i.MenuItem, {
                                id: e.id,
                                label: e.name,
                                action: function(r) {
                                    e.id !== u && o.ul(t.id, t.branchId, e.id);
                                    null == n || n(r)
                                }
                            }, e.id)
                        }))
                    }(n, e);
                return (0, r.jsx)(i.Menu, {
                    navId: "launch-context",
                    onClose: u.Zy,
                    "aria-label": s.Z.Messages.APPLICATION_ACTIONS_MENU_LABEL,
                    onSelect: f,
                    children: p
                })
            }
        },
        534681: (t, n, e) => {
            "use strict";
            e.d(n, {
                ZI: () => N,
                AR: () => L,
                _W: () => R,
                Kb: () => Z,
                hX: () => x,
                XK: () => z,
                uF: () => F,
                Gg: () => B,
                Ww: () => j
            });
            var r = e(496486),
                i = e.n(r),
                u = e(730381),
                a = e.n(u),
                o = e(229392),
                l = e.n(o),
                c = e(289283),
                s = e(281110),
                f = e(673679),
                p = e(874049),
                h = e(615796),
                d = e(711531),
                y = e(536392),
                v = e(245305),
                b = e(661123),
                g = e(72580),
                A = e(120415),
                m = e(2590),
                I = e(473708),
                _ = e(734155);

            function S(t, n, e, r, i, u, a) {
                try {
                    var o = t[u](a),
                        l = o.value
                } catch (t) {
                    e(t);
                    return
                }
                o.done ? n(l) : Promise.resolve(l).then(r, i)
            }

            function E(t) {
                return function() {
                    var n = this,
                        e = arguments;
                    return new Promise((function(r, i) {
                        var u = t.apply(n, e);

                        function a(t) {
                            S(u, r, i, a, o, "next", t)
                        }

                        function o(t) {
                            S(u, r, i, a, o, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function O(t, n, e) {
                n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e;
                return t
            }

            function T(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(e);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))));
                    r.forEach((function(n) {
                        O(t, n, e[n])
                    }))
                }
                return t
            }
            var w = function(t, n) {
                var e, r, i, u, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return u = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                    return this
                }), u;

                function o(u) {
                    return function(o) {
                        return function(u) {
                            if (e) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (e = 1, r && (i = 2 & u[0] ? r.return : u[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, u[1])).done) return i;
                                (r = 0, i) && (u = [2 & u[0], i.value]);
                                switch (u[0]) {
                                    case 0:
                                    case 1:
                                        i = u;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: u[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = u[1];
                                        u = [0];
                                        continue;
                                    case 7:
                                        u = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!i || u[1] > i[0] && u[1] < i[3])) {
                                            a.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = u;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(u);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                u = n.call(t, a)
                            } catch (t) {
                                u = [6, t];
                                r = 0
                            } finally {
                                e = i = 0
                            }
                            if (5 & u[0]) throw u[1];
                            return {
                                value: u[0] ? u[1] : void 0,
                                done: !0
                            }
                        }([u, o])
                    }
                }
            };
            l().shim();
            var P = !c.tq && !c.Em && -1 !== (0, v.vu)();

            function N(t, n) {
                var e = n.analyticsSource,
                    r = n.analyticsProperties,
                    i = n.storeListingId,
                    u = n.slug,
                    a = n.channelId,
                    o = n.guildId,
                    l = {
                        state: {
                            analyticsSource: e,
                            analyticsProperties: r
                        },
                        search: null != i ? "?store_listing_id=".concat(i) : ""
                    };
                return T({
                    pathname: null != a && null != o ? m.Z5c.CHANNEL(o, a, t) : m.Z5c.APPLICATION_STORE_LISTING_SKU(t, u)
                }, l)
            }

            function L(t, n) {
                var e = n.analyticsSource,
                    r = n.analyticsProperties,
                    i = n.slug,
                    u = {
                        state: {
                            analyticsSource: e,
                            analyticsProperties: r
                        }
                    };
                return T({
                    pathname: m.Z5c.APPLICATION_STORE_LISTING_APPLICATION(t, i)
                }, u)
            }

            function R(t, n, e, r) {
                var i, u, a = window.GLOBAL_ENV.CDN_HOST;
                if (null == r) switch (n.mimeType || n.mime_type) {
                    case "video/quicktime":
                    case "video/mp4":
                        r = "mp4";
                        break;
                    case "image/gif":
                        r = "gif";
                        break;
                    default:
                        r = "webp"
                }
                "webp" !== r || P || (r = "png");
                var o = null !== (u = _.env.API_PROTOCOL) && void 0 !== u ? u : location.protocol;
                i = null != a ? "".concat(o, "//").concat(a, "/app-assets/").concat(t, "/store/").concat(n.id, ".").concat(r) : "".concat(o).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(m.ANM.STORE_ASSET(t, n.id, r));
                null != e && (i += "?size=".concat((0, p.oO)(e * (0, p.x_)())));
                return i
            }

            function C() {
                return new Promise((t = E((function(t) {
                    var n;
                    return w(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                if (!y.Z.hasFetchedSubscriptions()) return [3, 1];
                                t();
                                return [3, 4];
                            case 1:
                                if (!h.Z.isSubscriptionFetching) return [3, 2];
                                (n = function() {
                                    h.Z.isSubscriptionFetching ? setTimeout(n, 50) : t()
                                })();
                                return [3, 4];
                            case 2:
                                return [4, (0, f.jg)()];
                            case 3:
                                e.sent();
                                t();
                                e.label = 4;
                            case 4:
                                return [2]
                        }
                    }))
                })), function(n) {
                    return t.apply(this, arguments)
                }));
                var t
            }

            function Z(t) {
                return k.apply(this, arguments)
            }

            function k() {
                k = E((function(t) {
                    var n, e, r, i, u, a, o, l, c, p = arguments;
                    return w(this, (function(v) {
                        switch (v.label) {
                            case 0:
                                if (!(!(p.length > 1 && void 0 !== p[1]) || p[1])) return [3, 2];
                                e = [];
                                d.Z.hasFetchedPaymentSources || e.push(null !== (r = h.Z.paymentSourcesFetchRequest) && void 0 !== r ? r : (0, f.tZ)());
                                h.Z.ipCountryCodeLoaded || e.push((0, f.GE)());
                                e.push(C());
                                return [4, Promise.allSettled(e)];
                            case 1:
                                v.sent();
                                v.label = 2;
                            case 2:
                                i = d.Z.getDefaultBillingCountryCode();
                                a = null !== (u = null === (n = d.Z.defaultPaymentSource) || void 0 === n ? void 0 : n.id) && void 0 !== u ? u : null;
                                null != (o = y.Z.getPremiumTypeSubscription()) && null != o.paymentSourceId && (a = o.paymentSourceId);
                                null === i && (i = null !== (l = h.Z.ipCountryCode) && void 0 !== l ? l : null);
                                c = {};
                                null != i && (c.country_code = i);
                                null != a && (c.payment_source_id = a);
                                if (null != i || null != a) {
                                    "string" == typeof t && (t = {
                                        url: t,
                                        oldFormErrors: !0
                                    });
                                    if ("string" == typeof t.query) throw new Error("string query not supported");
                                    t.query = T({}, c, t.query)
                                }
                                return [2, s.ZP.get(t)]
                        }
                    }))
                }));
                return k.apply(this, arguments)
            }

            function x(t) {
                switch (t) {
                    case A.AB.WINDOWS:
                        return m.TaA.WINDOWS;
                    case A.AB.OSX:
                        return m.TaA.MACOS;
                    case A.AB.LINUX:
                        return m.TaA.LINUX;
                    default:
                        return null
                }
            }

            function z(t) {
                switch (t) {
                    case m.TaA.WINDOWS:
                        return I.Z.Messages.WINDOWS;
                    case m.TaA.MACOS:
                        return I.Z.Messages.MACOS;
                    case m.TaA.LINUX:
                        return I.Z.Messages.LINUX
                }
                throw new Error("Unknown operating system value: ".concat(t))
            }

            function F(t, n, e) {
                var r = n.getGame(t);
                return null == r || null == r.primarySkuId ? null : e.get(r.primarySkuId)
            }
            var M = [];

            function B(t, n, e, r, u) {
                var a = n.get(t);
                if (null == a) return M;
                var o = a.applicationId,
                    l = [],
                    c = [],
                    s = function(t, n, e) {
                        var r, i = null !== (r = e.getNowPlaying(t)) && void 0 !== r ? r : {},
                            u = Object.keys(i).map((function(t) {
                                var e = n.getUser(t);
                                return null == e ? null : {
                                    user: e,
                                    startTime: i[e.id].startedPlaying
                                }
                            })).filter(g.lm).sort((function(t, n) {
                                return n.startTime - t.startTime
                            }));
                        return 0 === u.length ? null : {
                            type: m.AzA.NOW_PLAYING,
                            userInfo: u
                        }
                    }(o, e, r);
                if (null != s) {
                    l.push(s);
                    c = s.userInfo.map((function(t) {
                        return t.user.id
                    }))
                }
                var f = u.getStatisticsForApplication(o);
                if (null != f) {
                    var p = f.map((function(t) {
                        return t.user_id
                    }));
                    if (i().difference(p, c).length > 0) {
                        var h = function(t, n, e) {
                            var r = e.getStatisticsForApplication(t);
                            if (null == r) return null;
                            var i = r.map((function(t) {
                                var e = n.getUser(t.user_id);
                                return null == e ? null : {
                                    user: e,
                                    endTime: Date.parse(t.last_played_at)
                                }
                            })).filter(g.lm).sort((function(t, n) {
                                return n.endTime - t.endTime
                            }));
                            return 0 === i.length ? null : {
                                type: m.AzA.EVER_PLAYED,
                                userInfo: i
                            }
                        }(o, e, u);
                        null != h && l.push(h)
                    }
                }
                return l
            }
            var D = [];

            function j(t, n, e) {
                var r = n.get(t),
                    i = e.getForSKU(t);
                if (null == r || null == i) return D;
                var u = [];
                (0, b.yE)(r.flags, m.l4R.HAS_FREE_PREMIUM_CONTENT) && u.push({
                    type: m.AzA.HAS_FREE_PREMIUM_CONTENT
                });
                var o = r.releaseDate;
                null != o && a()().diff(o, "months") < 3 && (r.accessType === m.kGb.EARLY_ACCESS ? u.push({
                    type: m.AzA.EARLY_ACCESS,
                    releaseDate: o
                }) : u.push({
                    type: m.AzA.RECENT_RELEASE_DATE,
                    releaseDate: o
                }));
                null != i.flavorText && u.push({
                    type: m.AzA.FLAVOR_TEXT,
                    flavorText: i.flavorText
                });
                return u
            }
        },
        824654: () => {}
    }
]);
//# sourceMappingURL=6a6fffc34b614ffa3f3b.js.map