"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [85004], {
        508233: (e, t, r) => {
            r.d(t, {
                uL: () => L,
                mO: () => T,
                Tg: () => Z,
                UU: () => x,
                gK: () => A,
                PF: () => F,
                v2: () => N,
                yC: () => R,
                hM: () => S,
                t1: () => P,
                R7: () => M
            });
            var n = r(496486),
                o = r.n(n),
                i = r(468811),
                c = r.n(i),
                l = r(281110),
                u = r(38773),
                a = r(744564),
                s = r(396043),
                f = r(384411),
                p = r(917019),
                O = r(218680),
                b = r(652591),
                d = r(2590);

            function y(e, t, r) {
                var n = null != t ? function(e, t, r) {
                        t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r;
                        return e
                    }({}, t, 1) : {},
                    o = null != r ? r : {},
                    i = o.offset,
                    c = o.limit,
                    l = o.results,
                    u = o.totalResults;
                return {
                    search_type: d.aib.GIF,
                    load_id: e,
                    limit: c,
                    offset: i,
                    page: null != c && null != i ? Math.floor(i / c) + 1 : 1,
                    total_results: u,
                    page_results: null != l ? l.length : null,
                    num_modifiers: Object.keys(n).length,
                    modifiers: n
                }
            }
            var g = r(105783),
                E = r(131559),
                m = r(473708);

            function h(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function _(e) {
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

            function I(e, t) {
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
            var j = /-/g,
                w = "tenor";

            function P(e) {
                var t = null != e ? h({}, e, 1) : {};
                s.ZP.trackWithMetadata(d.rMx.SEARCH_STARTED, {
                    search_type: d.aib.GIF,
                    load_id: O.Z.getAnalyticsID(),
                    num_modifiers: Object.keys(t).length,
                    modifiers: t
                })
            }

            function S(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = r.startTime,
                    o = I(r, ["startTime"]),
                    i = {
                        offset: 0,
                        limit: null,
                        totalResults: e.length
                    },
                    c = y(O.Z.getAnalyticsID(), t, v(_({}, i, o), {
                        results: e
                    })),
                    l = null == n ? {} : {
                        load_duration_ms: Date.now() - n
                    };
                s.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_VIEWED, _({}, c, l))
            }

            function D(e, t, r) {
                var n = Date.now();
                P(t);
                l.ZP.get({
                    url: d.ANM.GIFS_SEARCH,
                    query: {
                        q: e,
                        media_format: O.Z.getSelectedFormat(),
                        provider: w,
                        locale: f.default.locale,
                        limit: r
                    },
                    oldFormErrors: !0
                }).then((function(o) {
                    var i = o.body;
                    S(i, t, {
                        startTime: n,
                        limit: r
                    });
                    a.Z.dispatch({
                        type: "GIF_PICKER_QUERY_SUCCESS",
                        query: e,
                        items: i
                    })
                }), (function() {
                    return a.Z.dispatch({
                        type: "GIF_PICKER_QUERY_FAILURE",
                        query: e
                    })
                }))
            }
            var C = o().debounce(D, 250);

            function R(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    n = arguments.length > 3 ? arguments[3] : void 0;
                if ("" === e) N();
                else {
                    a.Z.dispatch({
                        type: "GIF_PICKER_QUERY",
                        query: e
                    });
                    r ? D(e, t, n) : C(e, t, n)
                }
            }

            function T(e) {
                "" !== e && null != e && l.ZP.get({
                    url: d.ANM.GIFS_SUGGEST,
                    query: {
                        q: e,
                        provider: w,
                        limit: 5,
                        locale: f.default.locale
                    },
                    oldFormErrors: !0
                }).then((function(t) {
                    var r = t.body;
                    a.Z.dispatch({
                        type: "GIF_PICKER_SUGGESTIONS_SUCCESS",
                        query: e,
                        items: r
                    })
                }))
            }

            function N() {
                a.Z.dispatch({
                    type: "GIF_PICKER_QUERY",
                    query: ""
                })
            }

            function M(e) {
                var t = e.type,
                    r = e.index,
                    n = e.offset,
                    o = e.limit,
                    i = e.results,
                    c = e.totalResults,
                    u = e.query,
                    a = e.gifId,
                    f = y(O.Z.getAnalyticsID(), t, {
                        offset: n,
                        limit: o,
                        results: i,
                        totalResults: c
                    });
                s.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_SELECTED, v(_({}, f), {
                    index_num: r,
                    source_object: "GIF Picker",
                    query: u
                }));
                null != a && l.ZP.post({
                    url: d.ANM.GIFS_SELECT,
                    body: {
                        id: a,
                        q: u
                    },
                    oldFormErrors: !0
                })
            }

            function A() {
                var e = c().v4().replace(j, "");
                s.ZP.trackWithMetadata(d.rMx.SEARCH_OPENED, {
                    search_type: d.aib.GIF,
                    load_id: e
                });
                a.Z.wait((function() {
                    a.Z.dispatch({
                        type: "GIF_PICKER_INITIALIZE",
                        analyticsID: e
                    })
                }))
            }

            function Z() {
                l.ZP.get({
                    url: d.ANM.GIFS_TRENDING,
                    query: {
                        provider: w,
                        locale: f.default.locale,
                        media_format: O.Z.getSelectedFormat()
                    },
                    oldFormErrors: !0
                }).then((function(e) {
                    var t = e.body,
                        r = t.categories,
                        n = t.gifs;
                    a.Z.dispatch({
                        type: "GIF_PICKER_TRENDING_FETCH_SUCCESS",
                        trendingCategories: r,
                        trendingGIFPreview: n[0]
                    })
                }))
            }

            function x(e) {
                var t = Date.now();
                P(d.wI2.TRENDING_GIFS);
                l.ZP.get({
                    url: d.ANM.GIFS_TRENDING_GIFS,
                    query: {
                        media_format: O.Z.getSelectedFormat(),
                        provider: w,
                        locale: f.default.locale,
                        limit: e
                    },
                    oldFormErrors: !0
                }).then((function(r) {
                    var n = r.body;
                    S(n, d.wI2.TRENDING_GIFS, {
                        startTime: t,
                        limit: e
                    });
                    a.Z.dispatch({
                        type: "GIF_PICKER_QUERY_SUCCESS",
                        items: n
                    })
                }), (function() {
                    a.Z.dispatch({
                        type: "GIF_PICKER_QUERY_FAILURE"
                    })
                }))
            }

            function L(e) {
                p.DZ.updateAsync("favoriteGifs", (function(t) {
                    var r, n = null !== (r = o().max(Object.values(t.gifs).map((function(e) {
                        return e.order
                    })))) && void 0 !== r ? r : 0;
                    t.gifs[e.url] = v(_({}, e), {
                        order: n + 1
                    });
                    if (u.wK.toBinary(t).length > E.vY) {
                        g.Z.show({
                            title: m.Z.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                            body: m.Z.Messages.FAVORITE_GIFS_LIMIT_REACHED_BODY
                        });
                        return !1
                    }
                    o().size(t.gifs) > 2 && (t.hideTooltip = !0)
                }), E.fy.INFREQUENT_USER_ACTION);
                b.default.track(d.rMx.GIF_FAVORITED)
            }

            function F(e) {
                p.DZ.updateAsync("favoriteGifs", (function(t) {
                    delete t.gifs[e]
                }), E.fy.INFREQUENT_USER_ACTION);
                b.default.track(d.rMx.GIF_UNFAVORITED)
            }
        },
        711003: (e, t, r) => {
            r.d(t, {
                Z: () => a
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                c = r(766102),
                l = r.n(c);

            function u(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }
            const a = function(e) {
                var t = e.message,
                    r = e.className,
                    o = e.noResultsImageURL,
                    c = e.forceLightTheme,
                    a = e.suggestions,
                    s = null != o ? {
                        backgroundImage: "url(".concat(o, ")")
                    } : {};
                return (0, n.jsx)("div", {
                    className: i()(u({}, l().forceLightTheme, c), r),
                    children: (0, n.jsxs)("div", {
                        className: l().wrapper,
                        children: [(0, n.jsx)("div", {
                            className: l().sadImage,
                            style: s
                        }), (0, n.jsx)("div", {
                            children: t
                        }), a]
                    })
                })
            }
        },
        921873: (e, t, r) => {
            r.d(t, {
                PG: () => s,
                _Q: () => f,
                j9: () => p,
                RO: () => O,
                hr: () => b,
                ql: () => d,
                Iu: () => y
            });
            var n = r(873955),
                o = r.n(n),
                i = r(38736),
                c = r(979730),
                l = r(940581),
                u = Object.freeze({
                    activeView: null,
                    lastActiveView: null,
                    activeViewType: null,
                    searchQuery: "",
                    isSearchSuggestion: !1,
                    pickerId: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                        return o()(e)
                    }()
                }),
                a = (0, i.Z)((0, c.tJ)((function(e, t) {
                    return u
                }), {
                    name: "expression-picker-last-active-view",
                    partialize: function(e) {
                        return {
                            lastActiveView: e.lastActiveView
                        }
                    }
                })),
                s = function(e, t) {
                    a.setState({
                        activeView: e,
                        activeViewType: t,
                        lastActiveView: a.getState().activeView
                    })
                },
                f = function(e) {
                    void 0 !== e && e !== a.getState().activeViewType || a.setState({
                        activeView: null,
                        activeViewType: null,
                        lastActiveView: a.getState().activeView
                    })
                },
                p = function(e) {
                    var t = a.getState();
                    if (null == t.activeView) {
                        var r;
                        s(null !== (r = t.lastActiveView) && void 0 !== r ? r : l.X1.EMOJI, e)
                    } else f()
                },
                O = function(e, t) {
                    a.getState().activeView === e ? f() : s(e, t)
                },
                b = function(e) {
                    a.setState({
                        activeView: e,
                        lastActiveView: a.getState().activeView
                    })
                },
                d = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    a.setState({
                        searchQuery: e,
                        isSearchSuggestion: t
                    })
                },
                y = a
        },
        623926: (e, t, r) => {
            r.d(t, {
                gG: () => s,
                HI: () => f,
                hb: () => p
            });
            var n = r(667294),
                o = r(496486),
                i = r.n(o),
                c = r(245233);

            function l(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function u(e, t) {
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
            var a = {};

            function s() {
                var e, t;
                return null !== (t = null === (e = (0, c.D)().favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : a
            }

            function f() {
                var e = s();
                return n.useMemo((function() {
                    return i()(e).map((function(e, t) {
                        return u(function(e) {
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
                        }({}, e), {
                            url: t
                        })
                    })).sortBy("order").reverse().value()
                }), [e])
            }

            function p(e) {
                return null != s()[e]
            }
        },
        337509: (e, t, r) => {
            r.d(t, {
                Q: () => n,
                i: () => i
            });
            var n, o = r(761673);
            ! function(e) {
                e[e.PARTNERED = 0] = "PARTNERED";
                e[e.VERIFIED = 1] = "VERIFIED";
                e[e.VERIFIED_AND_PARTNERED = 2] = "VERIFIED_AND_PARTNERED";
                e[e.COMMUNITY = 3] = "COMMUNITY";
                e[e.DISCOVERABLE = 4] = "DISCOVERABLE";
                e[e.STAFF = 5] = "STAFF";
                e[e.NONE = 6] = "NONE"
            }(n || (n = {}));

            function i(e) {
                return e.staff ? n.STAFF : e.verified && e.partnered ? n.VERIFIED_AND_PARTNERED : e.verified ? n.VERIFIED : e.partnered ? n.PARTNERED : e.community && e.visibility === o.PZ.PUBLIC ? n.DISCOVERABLE : e.community ? n.COMMUNITY : n.NONE
            }
        },
        243399: (e, t, r) => {
            r.d(t, {
                E: () => o
            });
            var n = (0, r(260561).B)({
                kind: "guild",
                id: "2023-04_server_badging",
                label: "Server Badging",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Server Badging",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function o(e) {
                return n.useExperiment({
                    guildId: e,
                    location: "482926_1"
                }, {
                    autoTrackExposure: !1
                }).enabled
            }
        },
        761673: (e, t, r) => {
            r.d(t, {
                PZ: () => n,
                XX: () => c
            });
            var n, o = r(848285),
                i = r(2590);
            ! function(e) {
                e.PUBLIC = "PUBLIC";
                e.INVITE_ONLY = "INVITE_ONLY"
            }(n || (n = {}));

            function c(e) {
                var t = new Set(e.features),
                    r = t.has(i.oNc.COMMUNITY) && t.has(i.oNc.DISCOVERABLE) ? n.PUBLIC : n.INVITE_ONLY,
                    c = function(e) {
                        if (null == e) return !1;
                        if (e instanceof o.Z) return e.premiumSubscriberCount > 0 || e.premiumTier > i.Eu4.NONE;
                        if (null != e.premiumSubscriptionCount) return e.premiumSubscriptionCount > 0;
                        return !1
                    }(e),
                    l = 0;
                if (c) {
                    var u;
                    l = null !== (u = e instanceof o.Z ? e.premiumSubscriberCount : e.premiumSubscriptionCount) && void 0 !== u ? u : 0
                }
                var a = e instanceof o.Z ? e.premiumTier : i.Eu4.NONE;
                return {
                    verified: t.has(i.oNc.VERIFIED),
                    partnered: t.has(i.oNc.PARTNERED),
                    community: t.has(i.oNc.COMMUNITY),
                    staff: t.has(i.oNc.INTERNAL_EMPLOYEE_ONLY),
                    visibility: r,
                    premium: c,
                    premiumSubscriberCount: l,
                    premiumTier: a
                }
            }
        },
        491379: (e, t, r) => {
            r.d(t, {
                Z: () => l
            });
            var n = r(337509),
                o = r(243399),
                i = r(761673),
                c = new Set([n.Q.PARTNERED, n.Q.VERIFIED, n.Q.VERIFIED_AND_PARTNERED, n.Q.COMMUNITY, n.Q.DISCOVERABLE]);

            function l(e) {
                var t;
                if (!(0, o.E)(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "")) return !1;
                if (null == e) return !1;
                var r = (0, i.XX)(e),
                    l = (0, n.i)(r);
                return c.has(l)
            }
        },
        45761: (e, t, r) => {
            r.d(t, {
                Z: () => _
            });
            var n = r(785893),
                o = r(667294),
                i = r(294184),
                c = r.n(i),
                l = r(882723),
                u = r(508233),
                a = r(623926),
                s = r(362565),
                f = r(82677),
                p = r(930948),
                O = r(2590),
                b = r(473708),
                d = r(978964),
                y = r.n(d);

            function g(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function E(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function m(e, t) {
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

            function h(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            c = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(c = (n = r.next()).done); c = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                c || null == r.return || r.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return g(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return g(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const _ = o.memo((function(e) {
                var t = e.width,
                    r = e.height,
                    i = e.src,
                    d = e.url,
                    g = e.format,
                    _ = e.className,
                    v = h(o.useState(!1), 2),
                    I = v[0],
                    j = v[1],
                    w = (0, a.hb)(d),
                    P = w ? b.Z.Messages.GIF_TOOLTIP_REMOVE_FROM_FAVORITES : b.Z.Messages.GIF_TOOLTIP_ADD_TO_FAVORITES,
                    S = w ? f.Z : s.Z;
                o.useEffect((function() {
                    if (I) {
                        var e = setTimeout((function() {
                            j(!1)
                        }), 500);
                        return function() {
                            return clearTimeout(e)
                        }
                    }
                }), [I]);
                var D = function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    j(!0);
                    if (w)(0, u.PF)(d);
                    else {
                        (0, u.uL)({
                            url: d,
                            src: i,
                            width: t,
                            height: r,
                            format: g
                        });
                        p.S.dispatch(O.CkL.FAVORITE_GIF)
                    }
                };
                return (0, n.jsx)(l.Tooltip, {
                    text: P,
                    children: function(e) {
                        var t;
                        return (0, n.jsx)(l.Clickable, m(function(e) {
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
                        }({}, e), {
                            className: c()(_, y().size, y().gifFavoriteButton, (t = {}, E(t, y().selected, w), E(t, y().showPulse, I), t)),
                            onMouseDown: function(e) {
                                return e.preventDefault()
                            },
                            onClick: D,
                            onDoubleClick: function(e) {
                                return e.preventDefault()
                            },
                            children: (0, n.jsx)(S, {
                                className: y().icon
                            })
                        }))
                    }
                })
            }))
        },
        245233: (e, t, r) => {
            r.d(t, {
                D: () => l
            });
            var n = r(667294),
                o = r(202351),
                i = r(917019),
                c = r(473419);

            function l() {
                n.useEffect((function() {
                    i.DZ.loadIfNecessary()
                }), []);
                return (0, o.e7)([c.Z], (function() {
                    return c.Z.frecencyWithoutFetchingLatest
                }))
            }
        },
        218680: (e, t, r) => {
            r.d(t, {
                Z: () => M
            });
            var n = r(202351),
                o = r(38773),
                i = r(744564),
                c = r(425741),
                l = r(2590),
                u = r(473708);

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

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

            function O(e, t) {
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

            function b(e, t) {
                return !t || "object" !== g(t) && "function" != typeof t ? function(e) {
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

            function y(e) {
                return function(e) {
                    if (Array.isArray(e)) return a(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return a(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return a(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var g = function(e) {
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
                    var r, n = p(e);
                    if (t) {
                        var o = p(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return b(this, r)
                }
            }
            var m = {
                    GIF: "gif",
                    MP4: "mp4",
                    MEDIUMGIF: "mediumgif",
                    TINYGIF: "tinygif",
                    NANOGIF: "nanogif",
                    LOOPEDMP4: "loopedmp4",
                    TINYMP4: "tinymp4",
                    NANOMP4: "nanomp4",
                    WEBM: "webm",
                    TINYWEBM: "tinywebm",
                    NANOWEBM: "nanowebm"
                },
                h = {
                    FIXED_HEIGHT_GIF: "fixed_height.url",
                    FIXED_HEIGHT_MP4: "fixed_height.mp4",
                    FIXED_HEIGHT_SMALL_GIF: "fixed_height_small.url",
                    FIXED_HEIGHT_SMALL_MP4: "fixed_height_small.mp4",
                    FIXED_WIDTH_GIF: "fixed_width.url",
                    FIXED_WIDTH_MP4: "fixed_width.mp4",
                    FIXED_WIDTH_SMALL_GIF: "fixed_width_small.url",
                    FIXED_WIDTH_SMALL_MP4: "fixed_width_small.mp4",
                    DOWNSIZED_GIF: "downsized.url",
                    DOWNSIZED_LARGE_GIF: "downsized_large.url",
                    DOWNSIZED_MEDIUM_GIF: "downsized_medium.url",
                    DOWNSIZED_SMALL_MP4: "downsized_small.mp4",
                    ORIGINAL_GIF: "original.url",
                    ORIGINAL_MP4: "original.mp4"
                },
                _ = m.MP4,
                v = null,
                I = "",
                j = "",
                w = [],
                P = [],
                S = _,
                D = [],
                C = [];

            function R(e) {
                switch (e) {
                    case h.FIXED_HEIGHT_MP4:
                    case h.FIXED_HEIGHT_SMALL_MP4:
                    case h.FIXED_WIDTH_MP4:
                    case h.FIXED_WIDTH_SMALL_MP4:
                    case h.DOWNSIZED_SMALL_MP4:
                    case h.ORIGINAL_MP4:
                    case m.MP4:
                    case m.TINYMP4:
                    case m.NANOMP4:
                    case m.WEBM:
                    case m.TINYWEBM:
                    case m.NANOWEBM:
                        return !0;
                    default:
                        return !1
                }
            }

            function T(e) {
                return e.replace(/^https?:/, "")
            }
            var N = function(e) {
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
                    s(this, r);
                    return t.apply(this, arguments)
                }
                var n = r.prototype;
                n.getAnalyticsID = function() {
                    return v
                };
                n.getQuery = function() {
                    return I
                };
                n.getResultQuery = function() {
                    return j
                };
                n.getResultItems = function() {
                    return w
                };
                n.getTrendingCategories = function() {
                    return P
                };
                n.getSelectedFormat = function() {
                    return S
                };
                n.getSuggestions = function() {
                    return D
                };
                n.getTrendingSearchTerms = function() {
                    return C
                };
                n.__getLocalVars = function() {
                    return {
                        TenorFormats: m,
                        GIPHYFormats: h,
                        TENOR_FORMAT: _,
                        analyticsID: v,
                        query: I,
                        resultQuery: j,
                        resultItems: w,
                        trendingCategories: P,
                        selectedFormat: S,
                        suggestions: D,
                        trendingSearchTerms: C
                    }
                };
                return r
            }(n.ZP.Store);
            N.displayName = "GIFPickerViewStore";
            const M = new N(i.Z, {
                GIF_PICKER_INITIALIZE: function(e) {
                    v = e.analyticsID
                },
                GIF_PICKER_QUERY: function(e) {
                    if ("" === (I = e.query)) {
                        j = "";
                        w = [];
                        D = []
                    }
                },
                GIF_PICKER_QUERY_SUCCESS: function(e) {
                    if (null != e.query && I === j) return !1;
                    null != e.query && (j = e.query);
                    w = e.items.map((function(e) {
                        var t = e.width,
                            r = e.height,
                            n = e.src,
                            i = e.gif_src,
                            c = e.url,
                            l = e.id;
                        return {
                            width: t,
                            height: r,
                            src: T(n),
                            gifSrc: T(i),
                            url: c,
                            id: l,
                            format: R(S) ? o.EO.VIDEO : o.EO.IMAGE
                        }
                    }))
                },
                GIF_PICKER_QUERY_FAILURE: function(e) {
                    var t = e.query;
                    if (null == t) return !1;
                    j = t;
                    w = []
                },
                GIF_PICKER_TRENDING_FETCH_SUCCESS: function(e) {
                    var t = e.trendingCategories,
                        r = null != e.trendingGIFPreview ? [{
                            type: l.wI2.TRENDING_GIFS,
                            icon: c.Z,
                            name: u.Z.Messages.GIF_PICKER_RESULT_TYPE_TRENDING_GIFS,
                            src: T(e.trendingGIFPreview.src),
                            format: o.EO.IMAGE
                        }] : [];
                    P = y(r).concat(y(t.map((function(e) {
                        return O(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))));
                                n.forEach((function(t) {
                                    f(e, t, r[t])
                                }))
                            }
                            return e
                        }({}, e), {
                            src: T(e.src),
                            type: l.wI2.TRENDING_CATEGORY,
                            format: o.EO.VIDEO
                        })
                    }))))
                },
                GIF_PICKER_SUGGESTIONS_SUCCESS: function(e) {
                    var t = e.items;
                    D = t
                },
                GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: function(e) {
                    var t = e.items;
                    C = t
                }
            })
        },
        521723: (e, t, r) => {
            r.d(t, {
                Z: () => H
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                c = r(202351),
                l = r(795308),
                u = r(575945),
                a = r(882723),
                s = r(337509),
                f = r(761673),
                p = r(591406),
                O = r(64234),
                b = r(21372),
                d = r(473903),
                y = r(930865),
                g = r(859917),
                E = r(366007),
                m = r(459308),
                h = r(633878);

            function _(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
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

            function I(e, t) {
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

            function j(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function w(e, t) {
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

            function S(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function D(e, t) {
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

            function C(e, t) {
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

            function R(e) {
                var t = e.width,
                    r = void 0 === t ? 10 : t,
                    o = e.height,
                    i = void 0 === o ? 10 : o,
                    c = e.color,
                    l = void 0 === c ? "currentColor" : c,
                    u = C(e, ["width", "height", "color"]);
                return (0, n.jsxs)("svg", D(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            S(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, h.Z)(u)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 17 22",
                    fill: l,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsxs)("g", {
                        filter: "url(#filter0_d_1296_1706)",
                        children: [(0, n.jsx)("path", {
                            opacity: "0.55",
                            d: "M8.49999 3.7998L4.85999 7.4398V12.5598L8.49999 16.1998L12.14 12.5598V7.4398L8.49999 3.7998ZM10.32 11.7998L8.49999 13.6265L6.67999 11.8065V8.19314L8.49999 6.37314L10.32 8.19314V11.7998Z",
                            fill: "white"
                        }), (0, n.jsx)("path", {
                            opacity: "0.8",
                            d: "M6.67999 8.19354V11.8069L8.49999 13.6269L10.32 11.8069V8.19354L8.49999 6.37354L6.67999 8.19354Z",
                            fill: "white"
                        }), (0, n.jsx)("path", {
                            d: "M8.5 3.7998V6.37314L10.32 8.19314L12.14 7.4398L8.5 3.7998Z",
                            fill: "white"
                        })]
                    }), (0, n.jsx)("defs", {
                        children: (0, n.jsxs)("filter", {
                            id: "filter0_d_1296_1706",
                            x: "-3.5",
                            y: "-1",
                            width: "24",
                            height: "24",
                            filterUnits: "userSpaceOnUse",
                            "color-interpolation-filters": "sRGB",
                            children: [(0, n.jsx)("feFlood", {
                                "flood-opacity": "0",
                                result: "BackgroundImageFix"
                            }), (0, n.jsx)("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }), (0, n.jsx)("feOffset", {
                                dy: "1"
                            }), (0, n.jsx)("feGaussianBlur", {
                                stdDeviation: "2"
                            }), (0, n.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
                            }), (0, n.jsx)("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_1296_1706"
                            }), (0, n.jsx)("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow_1296_1706",
                                result: "shape"
                            })]
                        })
                    })]
                }))
            }
            var T, N = r(690002),
                M = r(128181),
                A = r(2590),
                Z = r(473708),
                x = r(238191),
                L = r.n(x);

            function F(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function G(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        F(e, t, r[t])
                    }))
                }
                return e
            }

            function k(e, t) {
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
            var V = (F(T = {}, s.Q.STAFF, {
                IconComponent: N.Z,
                foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
                backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
            }), F(T, s.Q.VERIFIED_AND_PARTNERED, {
                IconComponent: M.Z,
                foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
                backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
            }), F(T, s.Q.VERIFIED, {
                IconComponent: M.Z,
                foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
                backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
            }), F(T, s.Q.PARTNERED, {
                IconComponent: m.Z,
                foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: l.Z.unsafe_rawColors.BRAND_500.css,
                backgroundLightColor: l.Z.unsafe_rawColors.BRAND_500.css
            }), F(T, s.Q.COMMUNITY, {
                IconComponent: function(e) {
                    var t = e.width,
                        r = void 0 === t ? 10 : t,
                        o = e.height,
                        i = void 0 === o ? 10 : o,
                        c = e.color,
                        l = void 0 === c ? "currentColor" : c,
                        u = I(e, ["width", "height", "color"]);
                    return (0, n.jsx)("svg", v(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            }))));
                            n.forEach((function(t) {
                                _(e, t, r[t])
                            }))
                        }
                        return e
                    }({}, (0, h.Z)(u)), {
                        width: r,
                        height: i,
                        viewBox: "0 0 10 10",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("path", {
                            d: "M4.16667 8.33333V5.83333H5.83333V8.33333H7.91667V5H9.16667L5 1.25L0.833333 5H2.08333V8.33333H4.16667Z",
                            fill: l
                        })
                    }))
                },
                foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
                foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
                premiumBackgroundColor: E.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css
            }), F(T, s.Q.DISCOVERABLE, {
                IconComponent: function(e) {
                    var t = e.width,
                        r = void 0 === t ? 10 : t,
                        o = e.height,
                        i = void 0 === o ? 10 : o,
                        c = e.color,
                        l = void 0 === c ? "currentColor" : c,
                        u = P(e, ["width", "height", "color"]);
                    return (0, n.jsxs)("svg", w(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            }))));
                            n.forEach((function(t) {
                                j(e, t, r[t])
                            }))
                        }
                        return e
                    }({}, (0, h.Z)(u)), {
                        width: r,
                        height: i,
                        viewBox: "0 0 10 10",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, n.jsx)("g", {
                            clipPath: "url(#clip0_1242_1450)",
                            children: (0, n.jsx)("path", {
                                d: "M5 0.833252C2.7 0.833252 0.833333 2.69992 0.833333 4.99992C0.833333 7.29992 2.7 9.16659 5 9.16659C7.3 9.16659 9.16667 7.29992 9.16667 4.99992C9.16667 2.69992 7.3 0.833252 5 0.833252ZM4.58333 8.30409C2.9375 8.09992 1.66667 6.69992 1.66667 4.99992C1.66667 4.74159 1.7 4.49575 1.75417 4.25409L3.75 6.24992V6.66659C3.75 7.12492 4.125 7.49992 4.58333 7.49992V8.30409ZM7.45833 7.24575C7.35 6.90825 7.04167 6.66659 6.66667 6.66659H6.25V5.41659C6.25 5.18742 6.0625 4.99992 5.83333 4.99992H3.33333V4.16659H4.16667C4.39583 4.16659 4.58333 3.97909 4.58333 3.74992V2.91659H5.41667C5.875 2.91659 6.25 2.54159 6.25 2.08325V1.91242C7.47083 2.40825 8.33333 3.60409 8.33333 4.99992C8.33333 5.86659 8 6.65409 7.45833 7.24575Z",
                                fill: l
                            })
                        }), (0, n.jsx)("defs", {
                            children: (0, n.jsx)("clipPath", {
                                id: "clip0_1242_1450",
                                children: (0, n.jsx)("rect", {
                                    width: "10",
                                    height: "10",
                                    fill: "white"
                                })
                            })
                        })]
                    }))
                },
                foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
                foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
                premiumBackgroundColor: E.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css
            }), F(T, s.Q.NONE, {}), T);

            function U(e) {
                var t = e.guildTraits;
                return (0, n.jsxs)("div", {
                    className: L().tooltipPremiumFooterContainer,
                    children: [(0, n.jsxs)("div", {
                        className: i()(L().tooltipPremiumFooterSegment, L().tooltipPremiumFooterTierSegment),
                        children: [(0, n.jsx)(R, {
                            width: 18,
                            height: 18,
                            className: L().gemIcon
                        }), (0, n.jsx)(a.Text, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            children: y.nW(t.premiumTier)
                        })]
                    }), (0, n.jsx)("div", {
                        className: i()(L().tooltipPremiumFooterSegment),
                        children: (0, n.jsx)(a.Text, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            children: Z.Z.Messages.SERVER_BADGE_PREMIUM_FOOTER_BOOST_COUNT.format({
                                count: t.premiumSubscriberCount
                            })
                        })
                    })]
                })
            }

            function B(e) {
                var t = e.badgeType,
                    r = e.guildTraits,
                    o = function(e, t) {
                        var r = t === f.PZ.PUBLIC ? Z.Z.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN : Z.Z.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY;
                        switch (e) {
                            case s.Q.STAFF:
                                return {
                                    tooltipTitle: Z.Z.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipSubtitle: Z.Z.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipDescription: Z.Z.Messages.INTERNAL_EMPLOYEE_ONLY
                                };
                            case s.Q.VERIFIED:
                                return {
                                    tooltipTitle: Z.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: Z.Z.Messages.GUILD_VERIFIED, tooltipDescription: r
                                };
                            case s.Q.PARTNERED:
                                return {
                                    tooltipTitle: Z.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: Z.Z.Messages.GUILD_PARTNERED, tooltipDescription: r
                                };
                            case s.Q.VERIFIED_AND_PARTNERED:
                                return {
                                    tooltipTitle: Z.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: Z.Z.Messages.GUILD_VERIFIED_AND_PARTNERED, tooltipDescription: r
                                };
                            case s.Q.COMMUNITY:
                                return {
                                    tooltipTitle: Z.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: Z.Z.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY
                                };
                            case s.Q.DISCOVERABLE:
                                return {
                                    tooltipTitle: Z.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: Z.Z.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN
                                };
                            default:
                                return {
                                    tooltipTitle: Z.Z.Messages.SERVER_BADGE_TITLE_UNKNOWN
                                }
                        }
                    }(t, r.visibility),
                    i = o.tooltipTitle,
                    c = o.tooltipSubtitle,
                    l = o.tooltipDescription;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: L().tooltipBodyContainer,
                        children: [(0, n.jsx)(a.Text, {
                            color: "interactive-active",
                            variant: "text-xs/bold",
                            children: i
                        }), null != c ? (0, n.jsx)(a.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: c
                        }) : null, null != l ? (0, n.jsx)(a.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: l
                        }) : null]
                    }), r.premium ? (0, n.jsx)(U, {
                        guildTraits: r
                    }) : null]
                })
            }

            function H(e) {
                var t = e.guild,
                    r = e.tooltipColor,
                    o = void 0 === r ? a.Tooltip.Colors.BRAND : r,
                    i = e.tooltipPosition,
                    l = e.className,
                    y = e.flowerStarClassName,
                    E = e.iconClassName,
                    m = e.badgeStrokeColor,
                    h = e.badgeColor,
                    _ = e.size,
                    v = void 0 === _ ? 16 : _,
                    I = e.disableBoostClick,
                    j = e["aria-label"],
                    w = void 0 !== j && j,
                    P = (0,
                        c.e7)([d.default, b.ZP], (function() {
                        var e = d.default.getCurrentUser();
                        return b.ZP.isMember(null == t ? void 0 : t.id, null == e ? void 0 : e.id)
                    })),
                    S = (0, c.e7)([O.Z], (function() {
                        return O.Z.theme
                    })),
                    D = (0, f.XX)(t),
                    C = (0, s.i)(D);
                if (C === s.Q.NONE) return null;
                var R, T, N = V[C],
                    M = N.IconComponent,
                    Z = N.backgroundDarkColor,
                    x = N.backgroundLightColor,
                    F = N.foregroundDarkColor,
                    U = N.foregroundLightColor,
                    H = N.premiumBackgroundColor,
                    Y = N.premiumForegroundColor;
                if (null == M) return null;
                if (D.premium) {
                    R = Y;
                    T = H
                }
                var W = (0, u.wj)(S) ? F : U,
                    Q = (0, u.wj)(S) ? Z : x;
                R = null != R ? R : W;
                T = null != T ? T : Q;
                var q = function(e) {
                    if (D.premium && P && !I) {
                        e.stopPropagation();
                        e.preventDefault();
                        (0, p.f)({
                            guildId: t.id,
                            location: {
                                section: A.jXE.GUILD_HEADER,
                                object: A.qAy.BOOST_GEM_ICON
                            }
                        })
                    }
                };
                return (0, n.jsx)(a.Tooltip, {
                    color: o,
                    position: i,
                    "aria-label": w,
                    text: (0, n.jsx)(B, {
                        badgeType: C,
                        guildTraits: D
                    }),
                    tooltipContentClassName: L().tooltipRemovePadding,
                    children: function(e) {
                        return (0, n.jsx)(a.Clickable, {
                            onClick: q,
                            children: (0, n.jsx)(g.Z, k(G({}, e), {
                                className: l,
                                flowerStarClassName: y,
                                color: null != T ? T : h,
                                stroke: m,
                                size: v,
                                children: (0, n.jsx)(M, {
                                    className: E,
                                    color: R
                                })
                            }))
                        })
                    }
                })
            }
        },
        362565: (e, t, r) => {
            r.d(t, {
                Z: () => u
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function c(e, t) {
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

            function u(e) {
                var t = e.width,
                    r = void 0 === t ? 16 : t,
                    u = e.height,
                    a = void 0 === u ? 16 : u,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    O = l(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", c(function(e) {
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
                }({}, (0, o.Z)(O)), {
                    width: r,
                    height: a,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        className: p,
                        fill: f,
                        d: "M19.6,9l-4.2-0.4c-0.4,0-0.7-0.3-0.8-0.6l-1.6-3.9c-0.3-0.8-1.5-0.8-1.8,0L9.4,8.1C9.3,8.4,9,8.6,8.6,8.7L4.4,9 c-0.9,0.1-1.2,1.2-0.6,1.8L7,13.6c0.3,0.2,0.4,0.6,0.3,1l-1,4.1c-0.2,0.9,0.7,1.5,1.5,1.1l3.6-2.2c0.3-0.2,0.7-0.2,1,0l3.6,2.2 c0.8,0.5,1.7-0.2,1.5-1.1l-1-4.1c-0.1-0.4,0-0.7,0.3-1l3.2-2.8C20.9,10.2,20.5,9.1,19.6,9z M12,15.4l-3.8,2.3l1-4.3l-3.3-2.9 l4.4-0.4l1.7-4l1.7,4l4.4,0.4l-3.3,2.9l1,4.3L12,15.4z"
                    })
                }))
            }
        },
        82677: (e, t, r) => {
            r.d(t, {
                Z: () => u
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function c(e, t) {
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

            function u(e) {
                var t = e.width,
                    r = void 0 === t ? 16 : t,
                    u = e.height,
                    a = void 0 === u ? 16 : u,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    O = l(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsxs)("svg", c(function(e) {
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
                }({}, (0, o.Z)(O)), {
                    viewBox: "0 0 24 24",
                    width: r,
                    height: a,
                    children: [(0, n.jsx)("path", {
                        d: "M0,0H24V24H0Z",
                        fill: "none"
                    }), (0, n.jsx)("path", {
                        fill: f,
                        className: p,
                        d: "M12.5,17.6l3.6,2.2a1,1,0,0,0,1.5-1.1l-1-4.1a1,1,0,0,1,.3-1l3.2-2.8A1,1,0,0,0,19.5,9l-4.2-.4a.87.87,0,0,1-.8-.6L12.9,4.1a1.05,1.05,0,0,0-1.9,0l-1.6,4a1,1,0,0,1-.8.6L4.4,9a1.06,1.06,0,0,0-.6,1.8L7,13.6a.91.91,0,0,1,.3,1l-1,4.1a1,1,0,0,0,1.5,1.1l3.6-2.2A1.08,1.08,0,0,1,12.5,17.6Z"
                    })]
                }))
            }
        },
        855595: (e, t, r) => {
            r.d(t, {
                Z: () => u
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function c(e, t) {
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

            function u(e) {
                var t = e.width,
                    r = void 0 === t ? 20 : t,
                    u = e.height,
                    a = void 0 === u ? 23 : u,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    O = l(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", c(function(e) {
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
                }({}, (0, o.Z)(O)), {
                    width: r,
                    height: a,
                    viewBox: "0 0 20 23",
                    children: (0, n.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, n.jsx)("path", {
                            className: p,
                            fill: f,
                            d: "M19.487 5.126L10.487 0.126C10.184 -0.042 9.81798 -0.042 9.51498 0.126L0.514977 5.126C0.197977 5.302 0.000976562 5.636 0.000976562 5.999C0.000976562 6.693 0.114977 22.999 10.001 22.999C19.887 22.999 20.001 6.693 20.001 5.999C20.001 5.636 19.804 5.302 19.487 5.126ZM10.001 5.999C11.382 5.999 12.501 7.118 12.501 8.499C12.501 9.88 11.382 10.999 10.001 10.999C8.61998 10.999 7.50098 9.88 7.50098 8.499C7.50098 7.118 8.61998 5.999 10.001 5.999ZM6.25098 16C6.25098 13.699 7.69998 12.25 10.001 12.25C12.302 12.25 13.751 13.699 13.751 16H6.25098Z"
                        })
                    })
                }))
            }
        },
        71236: (e, t, r) => {
            r.d(t, {
                Z: () => u
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function c(e, t) {
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

            function u(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    u = e.height,
                    a = void 0 === u ? 24 : u,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    O = l(e, ["width", "height", "color", "foreground"]);
                return (0,
                    n.jsx)("svg", c(function(e) {
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
                }({}, (0, o.Z)(O)), {
                    width: r,
                    height: a,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: f,
                        className: p,
                        d: "M21.924 8.61789C21.77 8.24489 21.404 8.00089 21 8.00089H15.618L12.894 2.55389C12.555 1.87689 11.444 1.87689 11.105 2.55389L8.38199 8.00089H2.99999C2.59599 8.00089 2.22999 8.24489 2.07599 8.61789C1.92199 8.99089 2.00699 9.42289 2.29299 9.70789L6.87699 14.2919L5.03899 20.7269C4.92399 21.1299 5.07199 21.5619 5.40999 21.8089C5.74999 22.0569 6.20699 22.0659 6.55399 21.8329L12 18.2029L17.445 21.8329C17.613 21.9449 17.806 22.0009 18 22.0009C18.207 22.0009 18.414 21.9369 18.59 21.8089C18.928 21.5619 19.076 21.1299 18.961 20.7269L17.123 14.2919L21.707 9.70789C21.993 9.42289 22.078 8.99089 21.924 8.61789Z"
                    })
                }))
            }
        },
        425741: (e, t, r) => {
            r.d(t, {
                Z: () => u
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function c(e, t) {
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

            function u(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    u = e.height,
                    a = void 0 === u ? 24 : u,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    O = l(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", c(function(e) {
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
                }({}, (0, o.Z)(O)), {
                    width: r,
                    height: a,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        transform: "translate(2 6)",
                        children: (0, n.jsx)("path", {
                            className: p,
                            fill: f,
                            d: "M14 0l2.29 2.29-4.88 4.88-4-4L0 10.59 1.41 12l6-6 4 4 6.3-6.29L20 6V0z"
                        })
                    })
                }))
            }
        }
    }
]);
//# sourceMappingURL=6eb8b0228c1fe60e7e4a.js.map