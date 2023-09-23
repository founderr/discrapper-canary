"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [23827], {
        508233: (e, t, r) => {
            r.d(t, {
                uL: () => x,
                mO: () => C,
                Tg: () => Z,
                UU: () => N,
                gK: () => A,
                PF: () => k,
                v2: () => F,
                yC: () => T,
                hM: () => _,
                t1: () => I,
                R7: () => G
            });
            var n = r(496486),
                o = r.n(n),
                i = r(468811),
                c = r.n(i),
                l = r(281110),
                u = r(38773),
                a = r(744564),
                f = r(396043),
                s = r(384411),
                p = r(917019),
                y = r(218680),
                b = r(652591),
                O = r(2590);

            function g(e, t, r) {
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
                    search_type: O.aib.GIF,
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
            var d = r(105783),
                v = r(131559),
                h = r(473708);

            function m(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        m(e, t, r[t])
                    }))
                }
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
            var S = /-/g,
                E = "tenor";

            function I(e) {
                var t = null != e ? m({}, e, 1) : {};
                f.ZP.trackWithMetadata(O.rMx.SEARCH_STARTED, {
                    search_type: O.aib.GIF,
                    load_id: y.Z.getAnalyticsID(),
                    num_modifiers: Object.keys(t).length,
                    modifiers: t
                })
            }

            function _(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = r.startTime,
                    o = P(r, ["startTime"]),
                    i = {
                        offset: 0,
                        limit: null,
                        totalResults: e.length
                    },
                    c = g(y.Z.getAnalyticsID(), t, w(j({}, i, o), {
                        results: e
                    })),
                    l = null == n ? {} : {
                        load_duration_ms: Date.now() - n
                    };
                f.ZP.trackWithMetadata(O.rMx.SEARCH_RESULT_VIEWED, j({}, c, l))
            }

            function R(e, t, r) {
                var n = Date.now();
                I(t);
                l.ZP.get({
                    url: O.ANM.GIFS_SEARCH,
                    query: {
                        q: e,
                        media_format: y.Z.getSelectedFormat(),
                        provider: E,
                        locale: s.default.locale,
                        limit: r
                    },
                    oldFormErrors: !0
                }).then((function(o) {
                    var i = o.body;
                    _(i, t, {
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
            var D = o().debounce(R, 250);

            function T(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    n = arguments.length > 3 ? arguments[3] : void 0;
                if ("" === e) F();
                else {
                    a.Z.dispatch({
                        type: "GIF_PICKER_QUERY",
                        query: e
                    });
                    r ? R(e, t, n) : D(e, t, n)
                }
            }

            function C(e) {
                "" !== e && null != e && l.ZP.get({
                    url: O.ANM.GIFS_SUGGEST,
                    query: {
                        q: e,
                        provider: E,
                        limit: 5,
                        locale: s.default.locale
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

            function F() {
                a.Z.dispatch({
                    type: "GIF_PICKER_QUERY",
                    query: ""
                })
            }

            function G(e) {
                var t = e.type,
                    r = e.index,
                    n = e.offset,
                    o = e.limit,
                    i = e.results,
                    c = e.totalResults,
                    u = e.query,
                    a = e.gifId,
                    s = g(y.Z.getAnalyticsID(), t, {
                        offset: n,
                        limit: o,
                        results: i,
                        totalResults: c
                    });
                f.ZP.trackWithMetadata(O.rMx.SEARCH_RESULT_SELECTED, w(j({}, s), {
                    index_num: r,
                    source_object: "GIF Picker",
                    query: u
                }));
                null != a && l.ZP.post({
                    url: O.ANM.GIFS_SELECT,
                    body: {
                        id: a,
                        q: u
                    },
                    oldFormErrors: !0
                })
            }

            function A() {
                var e = c().v4().replace(S, "");
                f.ZP.trackWithMetadata(O.rMx.SEARCH_OPENED, {
                    search_type: O.aib.GIF,
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
                    url: O.ANM.GIFS_TRENDING,
                    query: {
                        provider: E,
                        locale: s.default.locale,
                        media_format: y.Z.getSelectedFormat()
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

            function N(e) {
                var t = Date.now();
                I(O.wI2.TRENDING_GIFS);
                l.ZP.get({
                    url: O.ANM.GIFS_TRENDING_GIFS,
                    query: {
                        media_format: y.Z.getSelectedFormat(),
                        provider: E,
                        locale: s.default.locale,
                        limit: e
                    },
                    oldFormErrors: !0
                }).then((function(r) {
                    var n = r.body;
                    _(n, O.wI2.TRENDING_GIFS, {
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

            function x(e) {
                p.DZ.updateAsync("favoriteGifs", (function(t) {
                    var r, n = null !== (r = o().max(Object.values(t.gifs).map((function(e) {
                        return e.order
                    })))) && void 0 !== r ? r : 0;
                    t.gifs[e.url] = w(j({}, e), {
                        order: n + 1
                    });
                    if (u.wK.toBinary(t).length > v.vY) {
                        d.Z.show({
                            title: h.Z.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                            body: h.Z.Messages.FAVORITE_GIFS_LIMIT_REACHED_BODY
                        });
                        return !1
                    }
                    o().size(t.gifs) > 2 && (t.hideTooltip = !0)
                }), v.fy.INFREQUENT_USER_ACTION);
                b.default.track(O.rMx.GIF_FAVORITED)
            }

            function k(e) {
                p.DZ.updateAsync("favoriteGifs", (function(t) {
                    delete t.gifs[e]
                }), v.fy.INFREQUENT_USER_ACTION);
                b.default.track(O.rMx.GIF_UNFAVORITED)
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
                    f = null != o ? {
                        backgroundImage: "url(".concat(o, ")")
                    } : {};
                return (0, n.jsx)("div", {
                    className: i()(u({}, l().forceLightTheme, c), r),
                    children: (0, n.jsxs)("div", {
                        className: l().wrapper,
                        children: [(0, n.jsx)("div", {
                            className: l().sadImage,
                            style: f
                        }), (0, n.jsx)("div", {
                            children: t
                        }), a]
                    })
                })
            }
        },
        566310: (e, t, r) => {
            r.d(t, {
                I: () => a
            });
            var n = r(785893),
                o = (r(667294), r(795308)),
                i = r(633878);

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function l(e, t) {
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

            function u(e, t) {
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
            var a = function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    a = e.height,
                    f = void 0 === a ? 24 : a,
                    s = e.color,
                    p = void 0 === s ? o.Z.colors.INTERACTIVE_NORMAL : s,
                    y = e.colorClass,
                    b = void 0 === y ? "" : y,
                    O = u(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", l(function(e) {
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
                }({}, (0, i.Z)(O)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: f,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M3 2a1 1 0 0 1 1 1v17h17a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm17 5.414V11a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1h-6a1 1 0 1 0 0 2h3.586L13.5 11.086l-1.793-1.793a1 1 0 0 0-1.414 0l-4.5 4.5a1 1 0 1 0 1.414 1.414L11 11.414l1.793 1.793a1 1 0 0 0 1.414 0L20 7.414Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }
        },
        921873: (e, t, r) => {
            r.d(t, {
                PG: () => f,
                _Q: () => s,
                j9: () => p,
                RO: () => y,
                hr: () => b,
                ql: () => O,
                Iu: () => g
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
                f = function(e, t) {
                    a.setState({
                        activeView: e,
                        activeViewType: t,
                        lastActiveView: a.getState().activeView
                    })
                },
                s = function(e) {
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
                        f(null !== (r = t.lastActiveView) && void 0 !== r ? r : l.X1.EMOJI, e)
                    } else s()
                },
                y = function(e, t) {
                    a.getState().activeView === e ? s() : f(e, t)
                },
                b = function(e) {
                    a.setState({
                        activeView: e,
                        lastActiveView: a.getState().activeView
                    })
                },
                O = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    a.setState({
                        searchQuery: e,
                        isSearchSuggestion: t
                    })
                },
                g = a
        },
        623926: (e, t, r) => {
            r.d(t, {
                gG: () => f,
                HI: () => s,
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

            function f() {
                var e, t;
                return null !== (t = null === (e = (0, c.D)().favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : a
            }

            function s() {
                var e = f();
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
                return null != f()[e]
            }
        },
        45761: (e, t, r) => {
            r.d(t, {
                Z: () => j
            });
            var n = r(785893),
                o = r(667294),
                i = r(294184),
                c = r.n(i),
                l = r(882723),
                u = r(508233),
                a = r(623926),
                f = r(856743),
                s = r(82677),
                p = r(930948),
                y = r(2590),
                b = r(473708),
                O = r(978964),
                g = r.n(O);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function v(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function h(e, t) {
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
                    if ("string" == typeof e) return d(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const j = o.memo((function(e) {
                var t = e.width,
                    r = e.height,
                    i = e.src,
                    O = e.url,
                    d = e.format,
                    j = e.className,
                    w = m(o.useState(!1), 2),
                    P = w[0],
                    S = w[1],
                    E = (0,
                        a.hb)(O),
                    I = E ? b.Z.Messages.GIF_TOOLTIP_REMOVE_FROM_FAVORITES : b.Z.Messages.GIF_TOOLTIP_ADD_TO_FAVORITES,
                    _ = E ? s.Z : f.Z;
                o.useEffect((function() {
                    if (P) {
                        var e = setTimeout((function() {
                            S(!1)
                        }), 500);
                        return function() {
                            return clearTimeout(e)
                        }
                    }
                }), [P]);
                var R = function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    S(!0);
                    if (E)(0, u.PF)(O);
                    else {
                        (0, u.uL)({
                            url: O,
                            src: i,
                            width: t,
                            height: r,
                            format: d
                        });
                        p.S.dispatch(y.CkL.FAVORITE_GIF)
                    }
                };
                return (0, n.jsx)(l.Tooltip, {
                    text: I,
                    children: function(e) {
                        var t;
                        return (0, n.jsx)(l.Clickable, h(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))));
                                n.forEach((function(t) {
                                    v(e, t, r[t])
                                }))
                            }
                            return e
                        }({}, e), {
                            className: c()(j, g().size, g().gifFavoriteButton, (t = {}, v(t, g().selected, E), v(t, g().showPulse, P), t)),
                            onMouseDown: function(e) {
                                return e.preventDefault()
                            },
                            onClick: R,
                            onDoubleClick: function(e) {
                                return e.preventDefault()
                            },
                            children: (0, n.jsx)(_, {
                                className: g().icon
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
                Z: () => U
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

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t, r) {
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

            function y(e, t) {
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
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
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

            function g(e) {
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
            var d = function(e) {
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
                    var r, n = p(e);
                    if (t) {
                        var o = p(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return b(this, r)
                }
            }
            var h = "mp4",
                m = "tinymp4",
                j = "nanomp4",
                w = "webm",
                P = "tinywebm",
                S = "nanowebm",
                E = "fixed_height.mp4",
                I = "fixed_height_small.mp4",
                _ = "fixed_width.mp4",
                R = "fixed_width_small.mp4",
                D = "downsized_small.mp4",
                T = "original.mp4",
                C = null,
                F = "",
                G = "",
                A = [],
                Z = [],
                N = h,
                x = [],
                k = [];

            function M(e) {
                switch (e) {
                    case E:
                    case I:
                    case _:
                    case R:
                    case D:
                    case T:
                    case h:
                    case m:
                    case j:
                    case w:
                    case P:
                    case S:
                        return !0;
                    default:
                        return !1
                }
            }

            function L(e) {
                return e.replace(/^https?:/, "")
            }
            var V = function(e) {
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
                var t = v(r);

                function r() {
                    f(this, r);
                    return t.apply(this, arguments)
                }
                var n = r.prototype;
                n.getAnalyticsID = function() {
                    return C
                };
                n.getQuery = function() {
                    return F
                };
                n.getResultQuery = function() {
                    return G
                };
                n.getResultItems = function() {
                    return A
                };
                n.getTrendingCategories = function() {
                    return Z
                };
                n.getSelectedFormat = function() {
                    return N
                };
                n.getSuggestions = function() {
                    return x
                };
                n.getTrendingSearchTerms = function() {
                    return k
                };
                return r
            }(n.ZP.Store);
            V.displayName = "GIFPickerViewStore";
            const U = new V(i.Z, {
                GIF_PICKER_INITIALIZE: function(e) {
                    C = e.analyticsID
                },
                GIF_PICKER_QUERY: function(e) {
                    if ("" === (F = e.query)) {
                        G = "";
                        A = [];
                        x = []
                    }
                },
                GIF_PICKER_QUERY_SUCCESS: function(e) {
                    if (null != e.query && F === G) return !1;
                    null != e.query && (G = e.query);
                    A = e.items.map((function(e) {
                        var t = e.width,
                            r = e.height,
                            n = e.src,
                            i = e.gif_src,
                            c = e.url,
                            l = e.id;
                        return {
                            width: t,
                            height: r,
                            src: L(n),
                            gifSrc: L(i),
                            url: c,
                            id: l,
                            format: M(N) ? o.EO.VIDEO : o.EO.IMAGE
                        }
                    }))
                },
                GIF_PICKER_QUERY_FAILURE: function(e) {
                    var t = e.query;
                    if (null == t) return !1;
                    G = t;
                    A = []
                },
                GIF_PICKER_TRENDING_FETCH_SUCCESS: function(e) {
                    var t = e.trendingCategories,
                        r = null != e.trendingGIFPreview ? [{
                            type: l.wI2.TRENDING_GIFS,
                            icon: c.Z,
                            name: u.Z.Messages.GIF_PICKER_RESULT_TYPE_TRENDING_GIFS,
                            src: L(e.trendingGIFPreview.src),
                            format: o.EO.IMAGE
                        }] : [];
                    Z = g(r).concat(g(t.map((function(e) {
                        return y(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))));
                                n.forEach((function(t) {
                                    s(e, t, r[t])
                                }))
                            }
                            return e
                        }({}, e), {
                            src: L(e.src),
                            type: l.wI2.TRENDING_CATEGORY,
                            format: o.EO.VIDEO
                        })
                    }))))
                },
                GIF_PICKER_SUGGESTIONS_SUCCESS: function(e) {
                    var t = e.items;
                    x = t
                },
                GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: function(e) {
                    var t = e.items;
                    k = t
                }
            })
        },
        856743: (e, t, r) => {
            r.d(t, {
                Z: () => y
            });
            var n = r(785893),
                o = (r(667294), r(450520)),
                i = r(795308),
                c = r(633878);

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

            function a(e, t) {
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

            function f(e, t, r) {
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

            function p(e, t) {
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
            const y = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    l = e.color,
                    u = void 0 === l ? "currentColor" : l,
                    a = e.foreground,
                    y = p(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", s(function(e) {
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
                }({}, (0, c.Z)(y)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        className: a,
                        fill: u,
                        d: "M19.6,9l-4.2-0.4c-0.4,0-0.7-0.3-0.8-0.6l-1.6-3.9c-0.3-0.8-1.5-0.8-1.8,0L9.4,8.1C9.3,8.4,9,8.6,8.6,8.7L4.4,9 c-0.9,0.1-1.2,1.2-0.6,1.8L7,13.6c0.3,0.2,0.4,0.6,0.3,1l-1,4.1c-0.2,0.9,0.7,1.5,1.5,1.1l3.6-2.2c0.3-0.2,0.7-0.2,1,0l3.6,2.2 c0.8,0.5,1.7-0.2,1.5-1.1l-1-4.1c-0.1-0.4,0-0.7,0.3-1l3.2-2.8C20.9,10.2,20.5,9.1,19.6,9z M12,15.4l-3.8,2.3l1-4.3l-3.3-2.9 l4.4-0.4l1.7-4l1.7,4l4.4,0.4l-3.3,2.9l1,4.3L12,15.4z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    f = void 0 === o ? 24 : o,
                    s = e.color,
                    p = void 0 === s ? i.Z.colors.INTERACTIVE_NORMAL : s,
                    y = e.colorClass,
                    b = void 0 === y ? "" : y,
                    O = a(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", u(function(e) {
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
                }({}, (0, c.Z)(O)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: f,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "m13.175 9.303.45 1.382h5.256l-3.077 2.236-1.176.854.45 1.382 1.175 3.618-3.078-2.236L12 15.685l-1.176.854-3.077 2.236 1.176-3.618.449-1.382-1.176-.854-3.077-2.236h5.257l.449-1.382L12 5.686l1.175 3.617ZM2.066 10.94c-.976-.71-.475-2.254.733-2.254h6.123l1.893-5.824c.373-1.148 1.997-1.148 2.37 0l1.893 5.824H21.2c1.207 0 1.71 1.545.733 2.255l-4.954 3.599 1.892 5.824c.373 1.148-.941 2.103-1.918 1.393L12 18.156l-4.954 3.6c-.977.71-2.291-.245-1.918-1.393L7.02 14.54l-4.954-3.6Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }))
        },
        82677: (e, t, r) => {
            r.d(t, {
                Z: () => f
            });
            var n = r(785893),
                o = (r(667294), r(450520)),
                i = r(663207),
                c = r(633878);

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

            function a(e, t) {
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
            const f = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    f = e.color,
                    s = void 0 === f ? "currentColor" : f,
                    p = e.foreground,
                    y = a(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsxs)("svg", u(function(e) {
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
                }({}, (0, c.Z)(y)), {
                    viewBox: "0 0 24 24",
                    width: r,
                    height: i,
                    children: [(0, n.jsx)("path", {
                        d: "M0,0H24V24H0Z",
                        fill: "none"
                    }), (0, n.jsx)("path", {
                        fill: s,
                        className: p,
                        d: "M12.5,17.6l3.6,2.2a1,1,0,0,0,1.5-1.1l-1-4.1a1,1,0,0,1,.3-1l3.2-2.8A1,1,0,0,0,19.5,9l-4.2-.4a.87.87,0,0,1-.8-.6L12.9,4.1a1.05,1.05,0,0,0-1.9,0l-1.6,4a1,1,0,0,1-.8.6L4.4,9a1.06,1.06,0,0,0-.6,1.8L7,13.6a.91.91,0,0,1,.3,1l-1,4.1a1,1,0,0,0,1.5,1.1l3.6-2.2A1.08,1.08,0,0,1,12.5,17.6Z"
                    })]
                }))
            }), i.r)
        },
        425741: (e, t, r) => {
            r.d(t, {
                Z: () => f
            });
            var n = r(785893),
                o = (r(667294), r(450520)),
                i = r(566310),
                c = r(633878);

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

            function a(e, t) {
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
            const f = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    f = e.color,
                    s = void 0 === f ? "currentColor" : f,
                    p = e.foreground,
                    y = a(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", u(function(e) {
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
                }({}, (0, c.Z)(y)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        transform: "translate(2 6)",
                        children: (0, n.jsx)("path", {
                            className: p,
                            fill: s,
                            d: "M14 0l2.29 2.29-4.88 4.88-4-4L0 10.59 1.41 12l6-6 4 4 6.3-6.29L20 6V0z"
                        })
                    })
                }))
            }), i.I)
        }
    }
]);