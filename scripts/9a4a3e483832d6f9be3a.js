"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [24501], {
        624501: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => D
            });
            var r = n(608575),
                o = n(289283),
                i = n(744564),
                l = n(667569),
                u = n(734691),
                a = n(248046),
                c = n(890607),
                s = n(861323),
                f = n(382840),
                d = n(269300),
                p = n(41788),
                v = n(327930),
                b = n(426089),
                h = n(419198),
                E = n(177729),
                y = n(757753),
                g = n(715107),
                m = n(464187),
                _ = n(107218),
                I = n(652591),
                O = n(585622),
                A = (n(320142), n(2590));

            function S(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function R(e, t, n, r, o, i, l) {
                try {
                    var u = e[i](l),
                        a = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function C(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function l(e) {
                            R(i, r, o, l, u, "next", e)
                        }

                        function u(e) {
                            R(i, r, o, l, u, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function P(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            l = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return S(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var T = function(e, t) {
                var n, r, o, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = t.call(e, l)
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
                        }([i, u])
                    }
                }
            };

            function w(e, t) {
                return M.apply(this, arguments)
            }

            function M() {
                return (M = C((function(e, t) {
                    return T(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                0;
                                return [4, i.Z.dispatch({
                                    type: "INVITE_MODAL_OPEN",
                                    invite: e,
                                    code: t,
                                    context: A.IlC.APP
                                })];
                            case 1:
                                n.sent();
                                return [3, 4];
                            case 2:
                                return [4, i.Z.dispatch({
                                    type: "DISPLAYED_INVITE_SHOW",
                                    code: t,
                                    username: void 0,
                                    deeplinkAttemptId: void 0
                                })];
                            case 3:
                                n.sent();
                                n.label = 4;
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function N(e) {
                return Z.apply(this, arguments)
            }

            function Z() {
                return (Z = C((function(e) {
                    var t, n, r, o, i, u;
                    return T(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return null != (n = y.Z.getInvite(e.code)) ? [3, 2] : [4, l.Z.resolveInvite(e.code, "Markdown Link")];
                            case 1:
                                r = a.sent(), o = r.invite;
                                n = o;
                                a.label = 2;
                            case 2:
                                return null == n ? [2] : n.state !== A.r2o.EXPIRED && n.state !== A.r2o.BANNED && n.state !== A.r2o.ERROR ? [3, 4] : [4, w(n, e.code)];
                            case 3:
                                a.sent();
                                return [2];
                            case 4:
                                i = _.Z.getFlattenedGuildIds();
                                u = null == n || null === (t = n.guild) || void 0 === t ? void 0 : t.id;
                                if (!(null != u && i.includes(u))) return [3, 5];
                                l.Z.transitionToInviteSync(n);
                                return [3, 7];
                            case 5:
                                return [4, w(n, e.code)];
                            case 6:
                                a.sent();
                                a.label = 7;
                            case 7:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var L = {
                skipExtensionCheck: void 0,
                analyticsLocations: []
            };

            function D(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L,
                    i = (0, s.zO)(e),
                    l = t.skipExtensionCheck;
                if (null != i && (i.type === c.g.INVITE || i.type === c.g.EMBEDDED_ACTIVITY_INVITE)) return function(e) {
                    null == e || e.preventDefault();
                    N(i);
                    return !0
                };
                if (null != i && i.type === c.g.APP_DIRECTORY_PROFILE) return function(e) {
                    null == e || e.preventDefault();
                    var t, r = i.code,
                        l = null !== (t = m.Z.getGuildId()) && void 0 !== t ? t : void 0;
                    I.default.track(A.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                        application_id: r,
                        device_platform: o.tq ? "mobile_web" : "desktop_web",
                        guild_id: l,
                        channel_id: g.Z.getChannelId()
                    });
                    Promise.all([n.e(77179), n.e(15339)]).then(n.bind(n, 177179)).then((function(e) {
                        (0, e.goToAppDirectory)({
                            view: n(300272).eN.APPLICATION,
                            applicationId: r,
                            guildId: l,
                            entrypoint: "Embed link"
                        })
                    }));
                    return !0
                };
                if (null != i && i.type === c.g.GUILD_PRODUCT) return function(e) {
                    null == e || e.preventDefault();
                    var t = P(i.code.split("-"), 2),
                        r = t[0],
                        o = t[1];
                    n.e(77703).then(n.bind(n, 977703)).then((function(e) {
                        (0, e.openGuildProductLink)(r, o)
                    }));
                    return !0
                };
                var y = r.parse(e),
                    _ = y.path,
                    S = y.hostname,
                    R = void 0 === S ? "" : S,
                    C = y.host,
                    T = y.query,
                    w = O.Z.isDiscordHostname(R) || window.location.host === C;
                if (w && (null == _ ? void 0 : _.startsWith("/application-directory"))) {
                    var M = P(_.split("/"), 4),
                        Z = M[2],
                        D = M[3],
                        k = null != Z && (0, a.BH)(Z) ? Z : void 0;
                    return function(e) {
                        null == e || e.preventDefault();
                        var t, r = n(389740).c,
                            i = n(300272).eN,
                            l = null !== (t = m.Z.getGuildId()) && void 0 !== t ? t : void 0,
                            u = i.HOME;
                        "search" === Z && (u = i.SEARCH);
                        if (null != k) {
                            u = i.APPLICATION;
                            I.default.track(A.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                                application_id: k,
                                device_platform: o.tq ? "mobile_web" : "desktop_web",
                                guild_id: l,
                                channel_id: g.Z.getChannelId()
                            })
                        }
                        Promise.all([n.e(77179), n.e(15339)]).then(n.bind(n, 177179)).then((function(e) {
                            (0, e.goToAppDirectory)({
                                view: u,
                                applicationId: k,
                                guildId: l,
                                applicationSection: (0, p.Z)(r, D),
                                entrypoint: "Embed link"
                            })
                        }));
                        return !0
                    }
                }
                if (null != _ && w && O.Z.isAppRoute(_)) {
                    var x = null != T ? {
                        search: T
                    } : null;
                    return function(e) {
                        null == e || e.preventDefault();
                        (0, b.Z)(_, x);
                        return !0
                    }
                }
                if (null != _ && w) {
                    var B = n(933227),
                        F = B.getOAuth2AuthorizeProps,
                        G = B.openOAuth2Modal,
                        U = F(e);
                    if (null != U) return function(e) {
                        null == e || e.preventDefault();
                        G(U);
                        return !0
                    }
                }
                var j = (0, v.Ao)(_);
                if (null != _ && w && null != j) return function(e) {
                    null == e || e.preventDefault();
                    var t = m.Z.getGuildId();
                    null != j.guildId && "" !== j.guildId && j.guildId !== t && (0, b.Z)(A.Z5c.CHANNEL(j.guildId));
                    var n = d.ZP.getGuildScheduledEvent(j.guildEventId);
                    null != n && (0, f.bO)({
                        eventId: n.id
                    });
                    return !0
                };
                if (w && (null == _ ? void 0 : _.startsWith("/settings/"))) {
                    var H = n(421774),
                        V = H.default,
                        Y = V(_);
                    if (null != Y) return function(e) {
                        null == e || e.preventDefault();
                        u.Z.open(Y.section, Y.subsection, {
                            openWithoutBackstack: !1,
                            impressionSource: Y.source
                        });
                        return !0
                    }
                }
                return l || null == (0, E.v)(e) ? void 0 : function(t) {
                    null == t || t.preventDefault();
                    h.Z.show(e);
                    return !0
                }
            }
        },
        948917: (e, t, n) => {
            n.d(t, {
                M: () => d,
                Z: () => m
            });
            var r = n(202351),
                o = n(744564);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        l(e, t, n[t])
                    }))
                }
                return e
            }

            function c(e, t) {
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

            function s(e, t) {
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
            var d, p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function v(e) {
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
                    return s(this, n)
                }
            }! function(e) {
                e[e.FETCHING = 0] = "FETCHING";
                e[e.FETCHED = 1] = "FETCHED";
                e[e.ERROR = 2] = "ERROR"
            }(d || (d = {}));
            var b = {},
                h = {},
                E = new Set,
                y = {};
            var g = function(e) {
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
                var t = v(n);

                function n() {
                    i(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getApplication = function(e) {
                    if (null != e) return b[e]
                };
                r.getApplications = function() {
                    return b
                };
                r.getApplicationFetchState = function(e) {
                    if (null != e) return h[e]
                };
                r.getApplicationFetchStates = function() {
                    return h
                };
                r.isInvalidApplication = function(e) {
                    return null != e && E.has(e)
                };
                r.getInvalidApplicationIds = function() {
                    return E
                };
                r.isFetching = function(e) {
                    return this.getApplicationFetchState(e) === d.FETCHING
                };
                r.getApplicationLastFetchTime = function(e) {
                    if (null != e) return y[e]
                };
                return n
            }(r.ZP.Store);
            g.displayName = "ApplicationDirectoryApplicationsStore";
            const m = new g(o.Z, {
                APPLICATION_DIRECTORY_FETCH_APPLICATION: function(e) {
                    var t = e.applicationId;
                    h = c(a({}, h), l({}, t, d.FETCHING))
                },
                APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS: function(e) {
                    var t = e.application;
                    b = c(a({}, b), l({}, t.id, t));
                    h = c(a({}, h), l({}, t.id, d.FETCHED));
                    var n = Date.now();
                    y = c(a({}, y), l({}, t.id, n));
                    if (E.has(t.id)) {
                        E.delete(t.id);
                        E = new Set(E)
                    }
                },
                APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE: function(e) {
                    var t = e.applicationId,
                        n = e.isInvalidApplication;
                    h = c(a({}, h), l({}, t, d.ERROR));
                    if (n) {
                        E.add(t);
                        E = new Set(E)
                    }
                }
            })
        },
        300272: (e, t, n) => {
            n.d(t, {
                eN: () => r,
                g8: () => s,
                Uc: () => f,
                Xh: () => d,
                eJ: () => p,
                lB: () => v,
                JT: () => b,
                rv: () => h
            });
            var r, o = n(751615),
                i = n(38736),
                l = n(784426),
                u = n(948917),
                a = n(2590);
            ! function(e) {
                e.HOME = "home";
                e.SEARCH = "search";
                e.APPLICATION = "application"
            }(r || (r = {}));
            var c = (0, i.Z)((function() {
                    return {
                        entrypoint: null,
                        entrypointPathname: "",
                        guildId: null
                    }
                })),
                s = c;

            function f() {
                var e = (0, l.s1)().location.state;
                return null == e ? void 0 : e.previousView
            }

            function d() {
                var e, t = (0, l.s1)().location.pathname,
                    n = (0, o.LX)(t, {
                        path: a.Z5c.APPLICATION_DIRECTORY,
                        exact: !0
                    }),
                    i = (0, o.LX)(t, {
                        path: a.Z5c.APPLICATION_DIRECTORY_SEARCH,
                        exact: !0
                    }),
                    c = (0,
                        o.LX)(t, {
                        path: [a.Z5c.APPLICATION_DIRECTORY_PROFILE(":applicationId"), a.Z5c.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section")],
                        exact: !0
                    }),
                    s = null !== (e = null == c ? void 0 : c.params) && void 0 !== e ? e : {},
                    f = s.applicationId,
                    d = s.section;
                if (null != n) return {
                    type: r.HOME
                };
                if (null != i) return {
                    type: r.SEARCH
                };
                if (null != c && null != f) {
                    var p, v = null === (p = u.Z.getApplication(f)) || void 0 === p ? void 0 : p.name;
                    return {
                        type: r.APPLICATION,
                        applicationId: f,
                        applicationName: v,
                        section: d
                    }
                }
            }

            function p(e) {
                c.setState({
                    entrypoint: e
                })
            }

            function v(e) {
                c.setState({
                    entrypointPathname: e
                })
            }

            function b(e) {
                c.setState({
                    guildId: e
                })
            }

            function h() {
                c.setState({
                    entrypoint: null,
                    entrypointPathname: "",
                    guildId: null
                })
            }
        },
        389740: (e, t, n) => {
            n.d(t, {
                c: () => r
            });
            var r;
            ! function(e) {
                e.GENERAL = "GENERAL";
                e.IMAGES = "IMAGES";
                e.PREMIUM = "PREMIUM";
                e.PRIVACY = "PRIVACY"
            }(r || (r = {}))
        },
        61876: (e, t, n) => {
            n.d(t, {
                vw: () => a,
                C4: () => s,
                yV: () => f,
                pX: () => u,
                RF: () => c
            });
            var r = n(260561),
                o = (0, r.B)({
                    kind: "user",
                    id: "2023-08_server_shop_storefront",
                    label: "Server Shop Storefront",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enables Server shop storefront",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                i = (0, r.B)({
                    kind: "user",
                    id: "2023-09_show_server_sub_in_server_shop",
                    label: "Show server sub in server shop",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enables showing server sub in server shop",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                l = (0, r.B)({
                    kind: "user",
                    id: "2023-09_server_shop_phantom_preview",
                    label: "Server Shop Phantom Preview",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enables Server shop phantom preview",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function u() {
                return o.useExperiment({
                    location: "adf3ea_1"
                }).enabled
            }

            function a() {
                return o.getCurrentConfig({
                    location: "adf3ea_2"
                }).enabled
            }

            function c(e) {
                return i.useExperiment({
                    location: e
                }).enabled
            }

            function s(e) {
                return i.getCurrentConfig({
                    location: e
                }).enabled
            }

            function f(e) {
                return l.useExperiment({
                    location: e
                }).enabled
            }
        },
        362345: (e, t, n) => {
            n.d(t, {
                g: () => c
            });
            var r = n(318715),
                o = n(418705),
                i = n(896490),
                l = n(682776),
                u = n(61876),
                a = n(2590);

            function c(e, t) {
                var n, c = (0, u.yV)(t),
                    s = (0,
                        r.ZP)([l.Z], (function() {
                        return null != e && l.Z.can(a.Plq.ADMINISTRATOR, e)
                    })),
                    f = null !== (n = null == e ? void 0 : e.hasFeature(a.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) && void 0 !== n && n,
                    d = [a.oNc.CREATOR_MONETIZABLE, a.oNc.CREATOR_MONETIZABLE_PROVISIONAL, a.oNc.ROLE_SUBSCRIPTIONS_ENABLED].some((function(t) {
                        return !0 === (null == e ? void 0 : e.hasFeature(t))
                    }));
                return null != e && s && !f && d && c && !(0, i.un)(o.z$.SERVER_SHOP_PHANTOM_PREVIEW)
            }
        },
        858503: (e, t, n) => {
            n.d(t, {
                u: () => a,
                r: () => c
            });
            var r = n(198895),
                o = n(365637),
                i = n(61876),
                l = n(362345),
                u = n(2590);

            function a(e) {
                var t = (0, i.pX)(),
                    n = (0, i.RF)("channel_list"),
                    a = (0, o.mY)(null == e ? void 0 : e.id),
                    c = (0, l.g)(e, "channel_list"),
                    s = (0, r.uP)(null == e ? void 0 : e.id).shouldHideGuildPurchaseEntryPoints;
                return !(!t || null == e || s) && (e.hasFeature(u.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE) || n && a || c)
            }

            function c(e) {
                var t = (0, i.vw)(),
                    n = (0, i.C4)("channel_list"),
                    r = (0, o.on)(null == e ? void 0 : e.id);
                return !(!t || null == e) && (e.hasFeature(u.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE) || n && r)
            }
        },
        202176: (e, t, n) => {
            n.d(t, {
                l: () => l,
                Z: () => u
            });
            var r = n(202351),
                o = n(567403),
                i = n(2590);

            function l(e) {
                return !e.hasFeature(i.oNc.CREATOR_MONETIZABLE_DISABLED) && (e.hasFeature(i.oNc.CREATOR_MONETIZABLE) || e.hasFeature(i.oNc.CREATOR_MONETIZABLE_PROVISIONAL))
            }

            function u(e) {
                return (0, r.e7)([o.Z], (function() {
                    var t = o.Z.getGuild(e);
                    return null != t && l(t)
                }))
            }
        },
        198895: (e, t, n) => {
            n.d(t, {
                uP: () => d,
                gX: () => p,
                eC: () => v
            });
            var r = n(667294),
                o = n(202351),
                i = n(924326),
                l = n(704230),
                u = n(840249),
                a = n(567403),
                c = n(824926),
                s = n(2590),
                f = function(e) {
                    var t = (0, i.Z)();
                    r.useEffect((function() {
                        null != e && e.hasFeature(s.oNc.CREATOR_MONETIZABLE_RESTRICTED) && u.Z.getMonetizationRestrictionsFetchState(e.id) === u.M.NOT_FETCHED && l.Xj(e.id, {
                            signal: t
                        })
                    }), [e, t]);
                    var n = null == e ? void 0 : e.id;
                    return {
                        restrictions: (0, o.Wu)([u.Z], (function() {
                            var e;
                            return null !== (e = u.Z.getMonetizationRestrictions(null != n ? n : "")) && void 0 !== e ? e : []
                        })),
                        restrictionsLoading: (0, o.e7)([u.Z], (function() {
                            return u.Z.getMonetizationRestrictionsFetchState(null != n ? n : "") === u.M.FETCHING
                        }))
                    }
                },
                d = function(e) {
                    var t, n = (0,
                            o.e7)([a.Z], (function() {
                            return a.Z.getGuild(e)
                        }), [e]),
                        r = f(n),
                        i = r.restrictions,
                        l = r.restrictionsLoading;
                    return {
                        shouldHideGuildPurchaseEntryPoints: (null == n ? void 0 : n.hasFeature(s.oNc.CREATOR_MONETIZABLE_DISABLED)) || (l ? null === (t = null == n ? void 0 : n.hasFeature(s.oNc.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t : (0, c.uq)(i)),
                        restrictionsLoading: l
                    }
                },
                p = function(e) {
                    var t, n = (0, o.e7)([a.Z], (function() {
                            return a.Z.getGuild(e)
                        }), [e]),
                        r = f(n),
                        i = r.restrictions,
                        l = r.restrictionsLoading,
                        u = null == n ? void 0 : n.hasFeature(s.oNc.CREATOR_MONETIZABLE_DISABLED),
                        d = null == n ? void 0 : n.hasFeature(s.oNc.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
                    return {
                        shouldRestrictUpdatingCreatorMonetizationSettings: u || d || (l ? null === (t = null == n ? void 0 : n.hasFeature(s.oNc.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t : (0, c.Q6)(i)),
                        restrictionsLoading: l
                    }
                },
                v = function(e) {
                    var t = (0, o.e7)([a.Z], (function() {
                            return a.Z.getGuild(e)
                        }), [e]),
                        n = f(t),
                        r = n.restrictions,
                        i = n.restrictionsLoading;
                    return {
                        isMonetizationReapplicationDisabled: (0, c.m8)(r),
                        restrictionsLoading: i
                    }
                }
        },
        980813: (e, t, n) => {
            n.d(t, {
                Oq: () => c,
                sw: () => f,
                jy: () => d
            });
            var r = n(940060),
                o = n(202351),
                i = n(260561),
                l = n(567403),
                u = n(682776),
                a = n(982358),
                c = (0, i.B)({
                    kind: "guild",
                    id: "2023-04_guild_alert_mode",
                    label: "Guild Alert Mode",
                    defaultConfig: {
                        showAlertMode: !1,
                        alsoShowMemberSafety: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show alert mode experience",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !1
                        }
                    }, {
                        id: 2,
                        label: "Show alert mode experience with member safety",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !0
                        }
                    }]
                }),
                s = (0, i.B)({
                    kind: "guild",
                    id: "2023-08_guild_alert_mode_friend_server",
                    label: "Guild Alert Mode (friend servers only)",
                    defaultConfig: {
                        showAlertMode: !1,
                        alsoShowMemberSafety: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show alert mode experience",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !1
                        }
                    }, {
                        id: 2,
                        label: "Show alert mode experience with member safety",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !1
                        }
                    }]
                });

            function f(e) {
                var t = (0, o.e7)([l.Z], (function() {
                        return l.Z.getGuild(e)
                    })),
                    n = (0, o.e7)([u.Z], (function() {
                        return null != t && r.Z.hasAny(u.Z.computePermissions(t), a.cv)
                    })),
                    i = c.useExperiment({
                        guildId: e,
                        location: "c3fae3_1"
                    }, {
                        disable: !n,
                        autoTrackExposure: !0
                    }),
                    f = s.useExperiment({
                        guildId: e,
                        location: "c3fae3_2"
                    }, {
                        disable: !n,
                        autoTrackExposure: !0
                    });
                return {
                    showAlertMode: i.showAlertMode || f.showAlertMode,
                    alsoShowMemberSafety: i.alsoShowMemberSafety || f.alsoShowMemberSafety
                }
            }

            function d(e) {
                var t = l.Z.getGuild(e),
                    n = null != t && r.Z.hasAny(u.Z.computePermissions(t), a.cv),
                    o = c.getCurrentConfig({
                        guildId: e,
                        location: "c3fae3_3"
                    }, {
                        disable: !n,
                        autoTrackExposure: !0
                    }),
                    i = s.getCurrentConfig({
                        guildId: e,
                        location: "c3fae3_4"
                    }, {
                        disable: !n,
                        autoTrackExposure: !0
                    });
                return {
                    showAlertMode: o.showAlertMode || i.showAlertMode,
                    alsoShowMemberSafety: o.alsoShowMemberSafety || i.alsoShowMemberSafety
                }
            }
        },
        982358: (e, t, n) => {
            n.d(t, {
                lp: () => l,
                Fl: () => u,
                c1: () => a,
                cv: () => c
            });
            var r = n(940060),
                o = n(520453),
                i = n(473708),
                l = 2,
                u = 2,
                a = function() {
                    return [{
                        value: 1,
                        label: i.Z.Messages.GUILD_SERVER_LOCKDOWN_DURATION_1_HOUR
                    }, {
                        value: 2,
                        label: i.Z.Messages.GUILD_SERVER_LOCKDOWN_DURATION_2_HOURS
                    }, {
                        value: 4,
                        label: i.Z.Messages.GUILD_SERVER_LOCKDOWN_DURATION_4_HOURS
                    }, {
                        value: 6,
                        label: i.Z.Messages.GUILD_SERVER_LOCKDOWN_DURATION_6_HOURS
                    }, {
                        value: 12,
                        label: i.Z.Messages.GUILD_SERVER_LOCKDOWN_DURATION_12_HOURS
                    }, {
                        value: 24,
                        label: i.Z.Messages.GUILD_SERVER_LOCKDOWN_DURATION_24_HOURS
                    }]
                },
                c = r.Z.combine(o.Pl.ADMINISTRATOR, o.Pl.MANAGE_GUILD, o.Pl.BAN_MEMBERS, o.Pl.KICK_MEMBERS, o.Pl.MODERATE_MEMBERS)
        },
        976685: (e, t, n) => {
            n.d(t, {
                t: () => v,
                Z: () => E
            });
            var r = n(496486),
                o = n.n(r),
                i = n(202351),
                l = n(744564),
                u = n(886391);

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function s(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
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
                    var n, r = c(e);
                    if (t) {
                        var o = c(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return s(this, n)
                }
            }
            var v = {
                    version: "",
                    description: "",
                    formFields: []
                },
                b = {};
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
                    t && f(e, t)
                }(n, e);
                var t = p(n);

                function n() {
                    a(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.get = function(e) {
                    if (null != e) return b[e]
                };
                r.getRulesPrompt = function(e) {
                    var t;
                    return o().find(null === (t = b[e]) || void 0 === t ? void 0 : t.formFields, u.J)
                };
                return n
            }(i.ZP.Store);
            h.displayName = "MemberVerificationFormStore";
            const E = new h(l.Z, {
                INVITE_ACCEPT_SUCCESS: function(e) {
                    var t = e.invite,
                        n = t.member_verification_form,
                        r = t.guild;
                    if (null != r && null != n) {
                        var o;
                        b[r.id] = {
                            version: n.version,
                            description: null !== (o = n.description) && void 0 !== o ? o : "",
                            formFields: n.form_fields,
                            guild: r
                        };
                        return !0
                    }
                    return !1
                },
                MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
                    var t = e.form,
                        n = e.guildId;
                    b[n] = null != t ? t : v
                },
                MEMBER_VERIFICATION_FORM_FETCH_FAIL: function(e) {
                    var t, n = e.guildId;
                    b[n] = null !== (t = b[n]) && void 0 !== t ? t : v
                },
                GUILD_DELETE: function(e) {
                    var t = e.guild;
                    delete b[null == t ? void 0 : t.id]
                }
            })
        },
        528497: (e, t, n) => {
            n.d(t, {
                e: () => o,
                P: () => i
            });
            var r = (0, n(260561).B)({
                kind: "guild",
                id: "2021-11_member_verification_manual_approval",
                label: "Member Verification Manual Approval",
                defaultConfig: {
                    manualApprovalEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable manual approval for membership verification",
                    config: {
                        manualApprovalEnabled: !0
                    }
                }]
            });

            function o(e) {
                r.trackExposure({
                    guildId: e,
                    location: "bda51f_1"
                });
                return r.useExperiment({
                    guildId: e,
                    location: "bda51f_2"
                }, {
                    autoTrackExposure: !1
                }).manualApprovalEnabled
            }

            function i(e) {
                return r.getCurrentConfig({
                    guildId: e,
                    location: "bda51f_3"
                }, {
                    autoTrackExposure: !1
                }).manualApprovalEnabled
            }
        },
        925369: (e, t, n) => {
            n.d(t, {
                v: () => d,
                W: () => p
            });
            var r = n(667294),
                o = n(202351),
                i = n(567403),
                l = n(682776),
                u = n(714305),
                a = n(976685),
                c = n(528497),
                s = n(886391),
                f = n(2590);

            function d(e) {
                var t = i.Z.getGuild(e);
                return null != t && ((0, c.P)(e) && l.Z.can(f.Plq.KICK_MEMBERS, t))
            }

            function p(e) {
                var t, n = (0, c.e)(e),
                    d = (0, o.e7)([i.Z], (function() {
                        return i.Z.getGuild(e)
                    })),
                    p = null != d && n && l.Z.can(f.Plq.KICK_MEMBERS, d) && d.hasVerificationGate(),
                    v = (0, o.e7)([a.Z], (function() {
                        return a.Z.get(e)
                    }), [e]);
                r.useEffect((function() {
                    p && u.Z.fetchVerificationForm(e)
                }), [p, e]);
                var b = r.useMemo((function() {
                    return (null !== (t = null == v ? void 0 : v.formFields) && void 0 !== t ? t : []).some((function(e) {
                        return !(0, s.J)(e)
                    }))
                }), [null == v ? void 0 : v.formFields]);
                return p && b
            }
        },
        590204: (e, t, n) => {
            n.d(t, {
                AG: () => u,
                Qx: () => f,
                il: () => d,
                Ql: () => p,
                SC: () => v,
                T2: () => b,
                NL: () => h
            });
            var r = n(260561),
                o = n(980813),
                i = (0, r.B)({
                    kind: "guild",
                    id: "2023-05_guild_member_safety_experiment",
                    label: "Guild Member Safety Experiment",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Guild Member Safety Experiment",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                l = (0, r.B)({
                    kind: "guild",
                    id: "2023-07_member_safety_non_community",
                    label: "Members Safety Non Community Experiment",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable Members Safety Page for Non Community Guilds",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                u = (0, r.B)({
                    kind: "guild",
                    id: "2023-09_member_safety_release_coachmark",
                    label: "Members Safety Release Coachmark Experiment",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable Members Safety Release Coachmark",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                a = (0, r.B)({
                    kind: "guild",
                    id: "2023-08_guild_member_bulk_ban_experiment",
                    label: "Bulk Banning Guild Members Experiment",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Bulk Banning Enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                c = (0, r.B)({
                    kind: "guild",
                    id: "2023-07_guild_members_search_in_elasticsearch",
                    label: "Members Search V2 Experiment",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable Members Search V2 Backend Only",
                        config: {
                            enabled: !1
                        }
                    }, {
                        id: 2,
                        label: "Enable Members Search V2 Backend + Frontend",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                s = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.autoTrackExposure,
                        r = void 0 !== n && n,
                        o = t.disable,
                        i = void 0 !== o && o,
                        u = t.location,
                        a = void 0 === u ? "f03bed_1" : u,
                        c = l.getCurrentConfig({
                            guildId: e,
                            location: a
                        }, {
                            autoTrackExposure: r,
                            disable: i
                        }).enabled;
                    return c
                },
                f = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.autoTrackExposure,
                        r = void 0 !== n && n,
                        o = t.disable,
                        i = void 0 !== o && o,
                        u = t.location,
                        a = void 0 === u ? "f03bed_2" : u,
                        c = l.useExperiment({
                            guildId: e,
                            location: a
                        }, {
                            autoTrackExposure: r,
                            disable: i
                        }).enabled;
                    return c
                },
                d = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.autoTrackExposure,
                        r = void 0 !== n && n,
                        l = t.disable,
                        u = void 0 !== l && l,
                        a = t.location,
                        c = void 0 === a ? "f03bed_3" : a,
                        f = i.getCurrentConfig({
                            guildId: e,
                            location: c
                        }, {
                            autoTrackExposure: r,
                            disable: u
                        }).enabled,
                        d = o.Oq.getCurrentConfig({
                            guildId: e,
                            location: c
                        }, {
                            autoTrackExposure: r,
                            disable: u
                        }).alsoShowMemberSafety,
                        p = s(e, {
                            autoTrackExposure: r,
                            disable: u
                        });
                    return f || d || p
                },
                p = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.autoTrackExposure,
                        r = void 0 !== n && n,
                        l = t.disable,
                        u = void 0 !== l && l,
                        a = t.location,
                        c = void 0 === a ? "f03bed_4" : a,
                        s = o.Oq.useExperiment({
                            guildId: e,
                            location: c
                        }, {
                            autoTrackExposure: r,
                            disable: u
                        }).alsoShowMemberSafety,
                        d = i.useExperiment({
                            guildId: e,
                            location: c
                        }, {
                            autoTrackExposure: r,
                            disable: u
                        }).enabled,
                        p = f(e, {
                            autoTrackExposure: r,
                            disable: u
                        });
                    return d || s || p
                },
                v = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.autoTrackExposure,
                        r = void 0 !== n && n,
                        o = t.disable,
                        i = void 0 !== o && o,
                        l = t.location,
                        u = void 0 === l ? "f03bed_5" : l,
                        c = a.useExperiment({
                            guildId: e,
                            location: u
                        }, {
                            autoTrackExposure: r,
                            disable: i
                        }).enabled;
                    return c
                },
                b = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.autoTrackExposure,
                        r = void 0 !== n && n,
                        o = t.disable,
                        i = void 0 !== o && o,
                        l = t.location,
                        u = void 0 === l ? "f03bed_7" : l,
                        a = c.getCurrentConfig({
                            guildId: e,
                            location: u
                        }, {
                            autoTrackExposure: r,
                            disable: i
                        }).enabled;
                    return a
                },
                h = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.autoTrackExposure,
                        r = void 0 !== n && n,
                        o = t.disable,
                        i = void 0 !== o && o,
                        l = t.location,
                        u = void 0 === l ? "f03bed_8" : l,
                        a = c.useExperiment({
                            guildId: e,
                            location: u
                        }, {
                            autoTrackExposure: r,
                            disable: i
                        }).enabled;
                    return a
                }
        },
        927617: (e, t, n) => {
            n.d(t, {
                Nd: () => p,
                lv: () => b,
                Ie: () => E,
                n2: () => y,
                xC: () => g,
                nX: () => m
            });
            var r = n(940060),
                o = n(202351),
                i = n(567403),
                l = n(682776),
                u = n(473903),
                a = n(563135),
                c = n(590204),
                s = n(2590);

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function d(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            l = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var p = r.Z.combine(s.Plq.ADMINISTRATOR, s.Plq.MANAGE_GUILD, s.Plq.BAN_MEMBERS, s.Plq.KICK_MEMBERS, s.Plq.MODERATE_MEMBERS),
                v = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.Z, u.default];
                    0;
                    var n = d(t, 2),
                        r = n[0],
                        o = n[1],
                        l = r.getGuild(e),
                        a = o.getCurrentUser();
                    return {
                        user: a,
                        guild: l
                    }
                },
                b = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.Z, u.default],
                        n = v(e, t);
                    if (null == n) return !1;
                    var o = r.Z.hasAny(a.ZP.computePermissions({
                        user: n.user,
                        context: n.guild,
                        checkElevated: !1
                    }), p);
                    return o
                },
                h = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.Z, u.default],
                        n = v(e, t);
                    return null != n && (l.Z.can(s.Plq.MANAGE_GUILD, n.guild) && l.Z.can(s.Plq.BAN_MEMBERS, n.guild))
                },
                E = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = b(e),
                        r = (0, c.il)(e, {
                            autoTrackExposure: t,
                            disable: !n
                        });
                    return n && r
                };

            function y(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = (0, o.e7)([i.Z, u.default], (function() {
                        return b(e, [i.Z, u.default])
                    }), [e]),
                    r = (0, c.Ql)(e, {
                        autoTrackExposure: t,
                        disable: !n
                    });
                return n && r
            }

            function g(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = y(e, n),
                    l = (0, o.e7)([i.Z, u.default], (function() {
                        return h(e, [i.Z, u.default])
                    }), [e]),
                    a = (0, c.SC)(e, {
                        location: t,
                        autoTrackExposure: n,
                        disable: !l
                    });
                return r && l && a
            }

            function m(e) {
                return (0, o.e7)([i.Z, l.Z], (function() {
                    var t = i.Z.getGuild(e);
                    return null != t && l.Z.can(s.Plq.MANAGE_GUILD, t)
                }), [e])
            }
        },
        783423: (e, t, n) => {
            n.d(t, {
                U: () => s,
                Z: () => f
            });
            var r = n(202351),
                o = n(664625),
                i = n(21372),
                l = n(567403),
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
                            l = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (u) throw o
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
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null == e ? null : i.ZP.getMember(e, o.default.getId()),
                    n = c(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [l.Z], 1),
                    r = n[0],
                    a = r.getGuild(e);
                if (null == a || null == t || !a.hasFeature(u.oNc.ROLE_SUBSCRIPTIONS_ENABLED)) return !1;
                var s = !0,
                    f = !1,
                    d = void 0;
                try {
                    for (var p, v = t.roles[Symbol.iterator](); !(s = (p = v.next()).done); s = !0) {
                        var b, h = p.value,
                            E = a.getRole(h);
                        if (null != (null == E || null === (b = E.tags) || void 0 === b ? void 0 : b.subscription_listing_id)) return !0
                    }
                } catch (e) {
                    f = !0;
                    d = e
                } finally {
                    try {
                        s || null == v.return || v.return()
                    } finally {
                        if (f) throw d
                    }
                }
                return !1
            }

            function f(e) {
                var t = (0, r.e7)([o.default, i.ZP], (function() {
                    return null == e ? null : i.ZP.getMember(e, o.default.getId())
                }));
                return (0, r.e7)([l.Z], (function() {
                    return s(e, t, [l.Z])
                }), [e, t])
            }
        },
        365637: (e, t, n) => {
            n.d(t, {
                on: () => v,
                mY: () => b,
                j0: () => h
            });
            var r = n(202351),
                o = n(61876),
                i = n(202176),
                l = n(198895),
                u = n(861426),
                a = n(567403),
                c = n(783423),
                s = n(2590);

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function d(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            l = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function p(e) {
                var t = d(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.Z, u.Z], 2),
                    n = t[0],
                    r = t[1],
                    o = n.getGuild(e);
                if (null == o) return !1;
                var l = (0, i.l)(o),
                    c = o.hasFeature(s.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
                if (l && c) return !0;
                var f = r.isViewingSubscriptionRoles(e);
                return !!f
            }

            function v(e) {
                return !!p(e) || (0, c.U)(e)
            }

            function b(e) {
                var t = (0, c.Z)(e),
                    n = (0, r.e7)([a.Z, u.Z], (function() {
                        return p(e, [a.Z, u.Z])
                    }), [e]);
                return !(0, l.uP)(e).shouldHideGuildPurchaseEntryPoints && (n || t)
            }

            function h(e) {
                var t = b(e),
                    n = (0, o.RF)("useShowRoleSubscriptionsInChannelList");
                return t && (!n || !1)
            }
        },
        41788: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });

            function r(e, t) {
                var n, r = null === (n = null == t ? void 0 : t.replace(/-/g, "_")) || void 0 === n ? void 0 : n.toUpperCase();
                if (null != r && r in e) return e[r]
            }
        },
        426089: (e, t, n) => {
            n.d(t, {
                Z: () => D
            });
            var r = n(785893),
                o = (n(667294), n(264817)),
                i = n(201521),
                l = n(784426),
                u = n(934870),
                a = n(61209),
                c = n(327930),
                s = n(747820),
                f = n(858503),
                d = n(773411),
                p = n(925369),
                v = n(927617),
                b = n(189827),
                h = n(848465),
                E = n(365637),
                y = n(708489),
                g = n(567403),
                m = n(72580),
                _ = n(2590),
                I = n(897196);

            function O(e, t, n, r, o, i, l) {
                try {
                    var u = e[i](l),
                        a = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function A(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function l(e) {
                            O(i, r, o, l, u, "next", e)
                        }

                        function u(e) {
                            O(i, r, o, l, u, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }
            var S = function(e, t) {
                var n, r, o, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = t.call(e, l)
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
                        }([i, u])
                    }
                }
            };

            function R(e) {
                return C.apply(this, arguments)
            }

            function C() {
                return (C = A((function(e) {
                    var t, n, r, o;
                    return S(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                t = e.guildId, n = e.channelId;
                                if (null == (r = g.Z.getGuild(t)) && t !== _.ME) return [2, !1];
                                if (null == n) return [2, !0];
                                if ((0, I.AB)(n)) switch (n) {
                                    case I.oC.ROLE_SUBSCRIPTIONS:
                                        return [2, (0, E.on)(t)];
                                    case I.oC.GUILD_SHOP:
                                        return [2, (0, f.r)(r)];
                                    case I.oC.MEMBER_APPLICATIONS:
                                        return [2, (0, p.v)(t)];
                                    case I.oC.GUILD_HOME:
                                        return [2, (0, d.YM)(t) || (0, h.s)(t)];
                                    case I.oC.CHANNEL_BROWSER:
                                        return [2, null != r && r.hasFeature(_.oNc.COMMUNITY)];
                                    case I.oC.GUILD_ONBOARDING:
                                        return [2, b.ZP.shouldShowOnboarding(t)];
                                    case I.oC.CUSTOMIZE_COMMUNITY:
                                        return [2, null != r && r.hasFeature(_.oNc.COMMUNITY)];
                                    case I.oC.MEMBER_SAFETY:
                                        return [2, (0, v.Ie)(t, !0)];
                                    default:
                                        (0, m.vE)(n)
                                }
                                return null != (o = a.Z.getChannel(n)) ? [3, 2] : [4, y.Z.loadThread(n)];
                            case 1:
                                i.sent();
                                if (null == (o = a.Z.getChannel(n))) return [2, !1];
                                i.label = 2;
                            case 2:
                                return [2, (0, c.YO)(o) || s.Z.isChannelGatedAndVisible(t, n)]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function P(e, t, n, r, o, i, l) {
                try {
                    var u = e[i](l),
                        a = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function T(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function l(e) {
                            P(i, r, o, l, u, "next", e)
                        }

                        function u(e) {
                            P(i, r, o, l, u, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function w(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function M(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        w(e, t, n[t])
                    }))
                }
                return e
            }

            function N(e, t) {
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
            var Z = function(e, t) {
                var n, r, o, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = t.call(e, l)
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
                        }([i, u])
                    }
                }
            };

            function L(e) {
                if (null == e.channelId) return e;
                var t = a.Z.getChannel(e.channelId);
                if (null == t) return e;
                var n = (0, i.e)(t);
                return N(M({}, e), {
                    guildId: null != n ? n : _.ME
                })
            }

            function D(e, t, n) {
                return k.apply(this, arguments)
            }

            function k() {
                return (k = T((function(e, t, i) {
                    var a, s, f;
                    return Z(this, (function(d) {
                        switch (d.label) {
                            case 0:
                                a = (0, c.Qj)(e);
                                return (s = null != a) ? [4, R(a)] : [3, 2];
                            case 1:
                                s = !d.sent();
                                d.label = 2;
                            case 2:
                                if (s) {
                                    (0, o.ZD)(T((function() {
                                        var e, t;
                                        return Z(this, (function(o) {
                                            switch (o.label) {
                                                case 0:
                                                    return [4, Promise.all([n.e(40532), n.e(32014)]).then(n.bind(n, 433086))];
                                                case 1:
                                                    e = o.sent(), t = e.default;
                                                    return [2, function(e) {
                                                        return (0, r.jsx)(t, M({}, e))
                                                    }]
                                            }
                                        }))
                                    })));
                                    return [2]
                                }
                                if (null == a) {
                                    (0, l.uL)(e);
                                    return [2]
                                }
                                if (null == (f = L(a)).channelId) {
                                    (0, u.X)(f.guildId);
                                    return [2]
                                }
                                null != f.threadId ? (0, l.uL)(_.Z5c.CHANNEL_THREAD_VIEW(f.guildId, f.channelId, f.threadId, f.messageId), t, i) : (0, l.uL)(_.Z5c.CHANNEL(f.guildId, f.channelId, f.messageId), t, i);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        708489: (e, t, n) => {
            n.d(t, {
                Z: () => b
            });
            var r = n(751615),
                o = n(281110),
                i = n(744564),
                l = n(652555),
                u = n(382060),
                a = n(61209),
                c = n(715107),
                s = n(2590),
                f = n(897196),
                d = {},
                p = !1;

            function v(e) {
                if (null == e) return Promise.resolve();
                if (e === f.V) return Promise.resolve();
                if ((0, f.AB)(e)) return Promise.resolve();
                if (null != a.Z.getChannel(e)) return Promise.resolve();
                ! function() {
                    if (!p) {
                        p = !0;
                        i.Z.subscribe("CONNECTION_OPEN", (function() {
                            d = {};
                            var e = c.Z.getChannelId(),
                                t = a.Z.getChannel(e);
                            null != e && null == t && v(e)
                        }))
                    }
                }();
                if (!l.Z.isConnected()) return Promise.resolve();
                var t = d[e];
                if (null != t) return "LOADING" === t.type ? t.promise : Promise.resolve();
                var n = (0, r.LX)(location.pathname, {
                        path: s.Z5c.CHANNEL(":guildId", ":channelId", ":messageId"),
                        exact: !0
                    }),
                    b = o.ZP.get(s.ANM.CHANNEL(e)).then((function(t) {
                        var r = t.body;
                        d[e] = {
                            type: "LOADED"
                        };
                        if (u.Ec.has(r.type)) {
                            var o;
                            i.Z.dispatch({
                                type: "THREAD_CREATE",
                                channel: (0, u.q_)(r),
                                messageId: null == n || null === (o = n.params) || void 0 === o ? void 0 : o.messageId
                            })
                        }
                    })).catch((function() {
                        var t;
                        d[e] = {
                            type: "NOT_FOUND"
                        };
                        i.Z.dispatch({
                            type: "CHANNEL_DELETE",
                            channel: {
                                id: e,
                                guild_id: null == n || null === (t = n.params) || void 0 === t ? void 0 : t.guildId,
                                parent_id: null
                            }
                        })
                    }));
                d[e] = {
                    type: "LOADING",
                    promise: b
                };
                return b
            }
            const b = {
                loadThread: v
            }
        },
        421774: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => a
            });
            var r = n(517563),
                o = n(2590);

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function l(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            l = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var u = /-/g;

            function a(e) {
                var t = l(e.split("/"), 4),
                    n = t[2],
                    i = t[3],
                    a = null == n ? void 0 : n.toUpperCase().replace(u, "_"),
                    c = null == i ? void 0 : i.toUpperCase().replace(u, "_");
                if (o.oAB.hasOwnProperty(a) && (null == c || "" === c || o.oAB.hasOwnProperty(c))) {
                    return {
                        source: (0, r.parse)(location.search).source,
                        section: o.oAB[a],
                        subsection: c
                    }
                }
                return null
            }
        }
    }
]);