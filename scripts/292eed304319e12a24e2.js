"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [99652], {
        666303: (e, r, t) => {
            t.d(r, {
                e: () => u
            });
            var o = t(785893),
                n = (t(667294), t(795308)),
                i = t(633878);

            function l(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function c(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        r && (o = o.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, o)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function s(e, r) {
                if (null == e) return {};
                var t, o, n = function(e, r) {
                    if (null == e) return {};
                    var t, o, n = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) {
                        t = i[o];
                        r.indexOf(t) >= 0 || (n[t] = e[t])
                    }
                    return n
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) {
                        t = i[o];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t])
                    }
                }
                return n
            }
            var u = function(e) {
                var r = e.width,
                    t = void 0 === r ? 24 : r,
                    u = e.height,
                    a = void 0 === u ? 24 : u,
                    f = e.color,
                    p = void 0 === f ? n.Z.colors.INTERACTIVE_NORMAL : f,
                    O = e.colorClass,
                    b = void 0 === O ? "" : O,
                    g = s(e, ["width", "height", "color", "colorClass"]);
                return (0, o.jsx)("svg", c(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            o = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        o.forEach((function(r) {
                            l(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(g)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, o.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M18.843 17.847A9.004 9.004 0 0 0 15 3.513V4a3 3 0 0 1-3 3h-.77a.23.23 0 0 0-.23.23A2.77 2.77 0 0 1 8.23 10a.23.23 0 0 0-.23.23v1.52c0 .138.112.25.25.25H13a3 3 0 0 1 3 3v.77c0 .127.103.23.23.23a2.77 2.77 0 0 1 2.613 1.847Zm-15.66-7.664A9.001 9.001 0 0 0 11 20.945v-2.714a.23.23 0 0 0-.23-.231h-.649A2.121 2.121 0 0 1 8 15.879c0-.563-.223-1.102-.621-1.5l-4.196-4.196ZM23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }
        },
        663207: (e, r, t) => {
            t.d(r, {
                r: () => u
            });
            var o = t(785893),
                n = (t(667294), t(795308)),
                i = t(633878);

            function l(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function c(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        r && (o = o.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, o)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function s(e, r) {
                if (null == e) return {};
                var t, o, n = function(e, r) {
                    if (null == e) return {};
                    var t, o, n = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) {
                        t = i[o];
                        r.indexOf(t) >= 0 || (n[t] = e[t])
                    }
                    return n
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) {
                        t = i[o];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t])
                    }
                }
                return n
            }
            var u = function(e) {
                var r = e.width,
                    t = void 0 === r ? 24 : r,
                    u = e.height,
                    a = void 0 === u ? 24 : u,
                    f = e.color,
                    p = void 0 === f ? n.Z.colors.INTERACTIVE_NORMAL : f,
                    O = e.colorClass,
                    b = void 0 === O ? "" : O,
                    g = s(e, ["width", "height", "color", "colorClass"]);
                return (0, o.jsx)("svg", c(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            o = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        o.forEach((function(r) {
                            l(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(g)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, o.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        d: "M10.815 2.861c.373-1.148 1.997-1.148 2.37 0l1.893 5.824H21.2c1.207 0 1.71 1.545.733 2.255l-4.954 3.599 1.892 5.824c.373 1.148-.941 2.103-1.918 1.393L12 18.156l-4.954 3.6c-.977.71-2.291-.245-1.918-1.393L7.02 14.54l-4.954-3.6c-.976-.71-.475-2.254.733-2.254h6.123l1.893-5.824Z",
                        className: b
                    })
                }))
            }
        },
        337509: (e, r, t) => {
            t.d(r, {
                Q: () => o,
                i: () => i
            });
            var o, n = t(761673);
            ! function(e) {
                e[e.PARTNERED = 0] = "PARTNERED";
                e[e.VERIFIED = 1] = "VERIFIED";
                e[e.VERIFIED_AND_PARTNERED = 2] = "VERIFIED_AND_PARTNERED";
                e[e.COMMUNITY = 3] = "COMMUNITY";
                e[e.DISCOVERABLE = 4] = "DISCOVERABLE";
                e[e.STAFF = 5] = "STAFF";
                e[e.NONE = 6] = "NONE"
            }(o || (o = {}));

            function i(e) {
                return e.staff ? o.STAFF : e.verified && e.partnered ? o.VERIFIED_AND_PARTNERED : e.verified ? o.VERIFIED : e.partnered ? o.PARTNERED : e.community && e.visibility === n.PZ.PUBLIC ? o.DISCOVERABLE : e.community ? o.COMMUNITY : o.NONE
            }
        },
        243399: (e, r, t) => {
            t.d(r, {
                E: () => n
            });
            var o = (0, t(260561).B)({
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

            function n(e) {
                return o.useExperiment({
                    guildId: e,
                    location: "482926_1"
                }, {
                    autoTrackExposure: !1
                }).enabled
            }
        },
        761673: (e, r, t) => {
            t.d(r, {
                PZ: () => o,
                XX: () => l
            });
            var o, n = t(848285),
                i = t(2590);
            ! function(e) {
                e.PUBLIC = "PUBLIC";
                e.INVITE_ONLY = "INVITE_ONLY"
            }(o || (o = {}));

            function l(e) {
                var r = new Set(e.features),
                    t = r.has(i.oNc.COMMUNITY) && r.has(i.oNc.DISCOVERABLE) ? o.PUBLIC : o.INVITE_ONLY,
                    l = function(e) {
                        if (null == e) return !1;
                        if (e instanceof n.Z) return e.premiumSubscriberCount > 0 || e.premiumTier > i.Eu4.NONE;
                        if (null != e.premiumSubscriptionCount) return e.premiumSubscriptionCount > 0;
                        return !1
                    }(e),
                    c = 0;
                if (l) {
                    var s;
                    c = null !== (s = e instanceof n.Z ? e.premiumSubscriberCount : e.premiumSubscriptionCount) && void 0 !== s ? s : 0
                }
                var u = e instanceof n.Z ? e.premiumTier : i.Eu4.NONE;
                return {
                    verified: r.has(i.oNc.VERIFIED),
                    partnered: r.has(i.oNc.PARTNERED),
                    community: r.has(i.oNc.COMMUNITY),
                    staff: r.has(i.oNc.INTERNAL_EMPLOYEE_ONLY),
                    visibility: t,
                    premium: l,
                    premiumSubscriberCount: c,
                    premiumTier: u
                }
            }
        },
        491379: (e, r, t) => {
            t.d(r, {
                Z: () => c
            });
            var o = t(337509),
                n = t(243399),
                i = t(761673),
                l = new Set([o.Q.PARTNERED, o.Q.VERIFIED, o.Q.VERIFIED_AND_PARTNERED, o.Q.COMMUNITY, o.Q.DISCOVERABLE]);

            function c(e) {
                var r;
                if (!(0, n.E)(null !== (r = null == e ? void 0 : e.id) && void 0 !== r ? r : "")) return !1;
                if (null == e) return !1;
                var t = (0, i.XX)(e),
                    c = (0, o.i)(t);
                return l.has(c)
            }
        },
        521723: (e, r, t) => {
            t.d(r, {
                Z: () => K
            });
            var o = t(785893),
                n = (t(667294), t(294184)),
                i = t.n(n),
                l = t(202351),
                c = t(795308),
                s = t(575945),
                u = t(882723),
                a = t(337509),
                f = t(761673),
                p = t(591406),
                O = t(64234),
                b = t(21372),
                g = t(473903),
                d = t(930865),
                y = t(859917),
                h = t(366007),
                E = t(459308),
                j = t(450520),
                w = t(361290),
                m = t(633878);

            function v(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function C(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {},
                        o = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    o.forEach((function(r) {
                        v(e, r, t[r])
                    }))
                }
                return e
            }

            function P(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        r && (o = o.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, o)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function _(e, r) {
                if (null == e) return {};
                var t, o, n = function(e, r) {
                    if (null == e) return {};
                    var t, o, n = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) {
                        t = i[o];
                        r.indexOf(t) >= 0 || (n[t] = e[t])
                    }
                    return n
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) {
                        t = i[o];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t])
                    }
                }
                return n
            }
            const D = (0, j.hN)((function(e) {
                var r = e.width,
                    t = void 0 === r ? 10 : r,
                    n = e.height,
                    i = void 0 === n ? 10 : n,
                    l = e.color,
                    c = void 0 === l ? "currentColor" : l,
                    s = _(e, ["width", "height", "color"]);
                return (0, o.jsx)("svg", P(C({}, (0, m.Z)(s)), {
                    width: t,
                    height: i,
                    viewBox: "0 0 10 10",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, o.jsx)("path", {
                        d: "M4.16667 8.33333V5.83333H5.83333V8.33333H7.91667V5H9.16667L5 1.25L0.833333 5H2.08333V8.33333H4.16667Z",
                        fill: c
                    })
                }))
            }), (function(e) {
                var r = e.width,
                    t = void 0 === r ? 10 : r,
                    n = e.height,
                    i = void 0 === n ? 10 : n,
                    l = _(e, ["width", "height"]);
                return (0, o.jsx)(w.t, C({
                    width: t,
                    height: i
                }, l))
            }));
            var I = t(666303);

            function N(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function R(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        r && (o = o.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, o)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function T(e, r) {
                if (null == e) return {};
                var t, o, n = function(e, r) {
                    if (null == e) return {};
                    var t, o, n = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) {
                        t = i[o];
                        r.indexOf(t) >= 0 || (n[t] = e[t])
                    }
                    return n
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) {
                        t = i[o];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t])
                    }
                }
                return n
            }
            const S = (0, j.hN)((function(e) {
                var r = e.width,
                    t = void 0 === r ? 10 : r,
                    n = e.height,
                    i = void 0 === n ? 10 : n,
                    l = e.color,
                    c = void 0 === l ? "currentColor" : l,
                    s = T(e, ["width", "height", "color"]);
                return (0, o.jsxs)("svg", R(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            o = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        o.forEach((function(r) {
                            N(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, m.Z)(s)), {
                    width: t,
                    height: i,
                    viewBox: "0 0 10 10",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("g", {
                        clipPath: "url(#clip0_1242_1450)",
                        children: (0, o.jsx)("path", {
                            d: "M5 0.833252C2.7 0.833252 0.833333 2.69992 0.833333 4.99992C0.833333 7.29992 2.7 9.16659 5 9.16659C7.3 9.16659 9.16667 7.29992 9.16667 4.99992C9.16667 2.69992 7.3 0.833252 5 0.833252ZM4.58333 8.30409C2.9375 8.09992 1.66667 6.69992 1.66667 4.99992C1.66667 4.74159 1.7 4.49575 1.75417 4.25409L3.75 6.24992V6.66659C3.75 7.12492 4.125 7.49992 4.58333 7.49992V8.30409ZM7.45833 7.24575C7.35 6.90825 7.04167 6.66659 6.66667 6.66659H6.25V5.41659C6.25 5.18742 6.0625 4.99992 5.83333 4.99992H3.33333V4.16659H4.16667C4.39583 4.16659 4.58333 3.97909 4.58333 3.74992V2.91659H5.41667C5.875 2.91659 6.25 2.54159 6.25 2.08325V1.91242C7.47083 2.40825 8.33333 3.60409 8.33333 4.99992C8.33333 5.86659 8 6.65409 7.45833 7.24575Z",
                            fill: c
                        })
                    }), (0, o.jsx)("defs", {
                        children: (0, o.jsx)("clipPath", {
                            id: "clip0_1242_1450",
                            children: (0, o.jsx)("rect", {
                                width: "10",
                                height: "10",
                                fill: "white"
                            })
                        })
                    })]
                }))
            }), I.e);

            function x(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function L(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        r && (o = o.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, o)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function Z(e, r) {
                if (null == e) return {};
                var t, o, n = function(e, r) {
                    if (null == e) return {};
                    var t, o, n = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) {
                        t = i[o];
                        r.indexOf(t) >= 0 || (n[t] = e[t])
                    }
                    return n
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) {
                        t = i[o];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t])
                    }
                }
                return n
            }

            function M(e) {
                var r = e.width,
                    t = void 0 === r ? 10 : r,
                    n = e.height,
                    i = void 0 === n ? 10 : n,
                    l = e.color,
                    c = void 0 === l ? "currentColor" : l,
                    s = Z(e, ["width", "height", "color"]);
                return (0,
                    o.jsxs)("svg", L(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            o = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        o.forEach((function(r) {
                            x(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, m.Z)(s)), {
                    width: t,
                    height: i,
                    viewBox: "0 0 17 22",
                    fill: c,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsxs)("g", {
                        filter: "url(#filter0_d_1296_1706)",
                        children: [(0, o.jsx)("path", {
                            opacity: "0.55",
                            d: "M8.49999 3.7998L4.85999 7.4398V12.5598L8.49999 16.1998L12.14 12.5598V7.4398L8.49999 3.7998ZM10.32 11.7998L8.49999 13.6265L6.67999 11.8065V8.19314L8.49999 6.37314L10.32 8.19314V11.7998Z",
                            fill: "white"
                        }), (0, o.jsx)("path", {
                            opacity: "0.8",
                            d: "M6.67999 8.19354V11.8069L8.49999 13.6269L10.32 11.8069V8.19354L8.49999 6.37354L6.67999 8.19354Z",
                            fill: "white"
                        }), (0, o.jsx)("path", {
                            d: "M8.5 3.7998V6.37314L10.32 8.19314L12.14 7.4398L8.5 3.7998Z",
                            fill: "white"
                        })]
                    }), (0,
                        o.jsx)("defs", {
                        children: (0, o.jsxs)("filter", {
                            id: "filter0_d_1296_1706",
                            x: "-3.5",
                            y: "-1",
                            width: "24",
                            height: "24",
                            filterUnits: "userSpaceOnUse",
                            "color-interpolation-filters": "sRGB",
                            children: [(0, o.jsx)("feFlood", {
                                "flood-opacity": "0",
                                result: "BackgroundImageFix"
                            }), (0, o.jsx)("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }), (0, o.jsx)("feOffset", {
                                dy: "1"
                            }), (0, o.jsx)("feGaussianBlur", {
                                stdDeviation: "2"
                            }), (0, o.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
                            }), (0, o.jsx)("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_1296_1706"
                            }), (0, o.jsx)("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow_1296_1706",
                                result: "shape"
                            })]
                        })
                    })]
                }))
            }
            var A, k = t(690002),
                V = t(985651),
                B = t(2590),
                F = t(473708),
                U = t(238191),
                Y = t.n(U);

            function G(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function H(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {},
                        o = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    o.forEach((function(r) {
                        G(e, r, t[r])
                    }))
                }
                return e
            }

            function Q(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        r && (o = o.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, o)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }
            var W = (G(A = {}, a.Q.STAFF, {
                IconComponent: k.Z,
                foregroundDarkColor: c.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: c.Z.unsafe_rawColors.GREEN_360.css,
                backgroundLightColor: c.Z.unsafe_rawColors.GREEN_360.css
            }), G(A, a.Q.VERIFIED_AND_PARTNERED, {
                IconComponent: V.Z,
                foregroundDarkColor: c.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: c.Z.unsafe_rawColors.GREEN_360.css,
                backgroundLightColor: c.Z.unsafe_rawColors.GREEN_360.css
            }), G(A, a.Q.VERIFIED, {
                IconComponent: V.Z,
                foregroundDarkColor: c.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: c.Z.unsafe_rawColors.GREEN_360.css,
                backgroundLightColor: c.Z.unsafe_rawColors.GREEN_360.css
            }), G(A, a.Q.PARTNERED, {
                IconComponent: E.Z,
                foregroundDarkColor: c.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: c.Z.unsafe_rawColors.BRAND_500.css,
                backgroundLightColor: c.Z.unsafe_rawColors.BRAND_500.css
            }), G(A, a.Q.COMMUNITY, {
                IconComponent: D,
                foregroundDarkColor: c.Z.unsafe_rawColors.PRIMARY_500.css,
                foregroundLightColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundLightColor: c.Z.unsafe_rawColors.PRIMARY_500.css,
                premiumBackgroundColor: h.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                premiumForegroundColor: c.Z.unsafe_rawColors.WHITE_400.css
            }), G(A, a.Q.DISCOVERABLE, {
                IconComponent: S,
                foregroundDarkColor: c.Z.unsafe_rawColors.PRIMARY_500.css,
                foregroundLightColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundLightColor: c.Z.unsafe_rawColors.PRIMARY_500.css,
                premiumBackgroundColor: h.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                premiumForegroundColor: c.Z.unsafe_rawColors.WHITE_400.css
            }), G(A, a.Q.NONE, {}), A);

            function X(e) {
                var r = e.guildTraits;
                return (0, o.jsxs)("div", {
                    className: Y().tooltipPremiumFooterContainer,
                    children: [(0, o.jsxs)("div", {
                        className: i()(Y().tooltipPremiumFooterSegment, Y().tooltipPremiumFooterTierSegment),
                        children: [(0, o.jsx)(M, {
                            width: 18,
                            height: 18,
                            className: Y().gemIcon
                        }), (0, o.jsx)(u.Text, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            children: d.nW(r.premiumTier)
                        })]
                    }), (0, o.jsx)("div", {
                        className: i()(Y().tooltipPremiumFooterSegment),
                        children: (0, o.jsx)(u.Text, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            children: F.Z.Messages.SERVER_BADGE_PREMIUM_FOOTER_BOOST_COUNT.format({
                                count: r.premiumSubscriberCount
                            })
                        })
                    })]
                })
            }

            function J(e) {
                var r = e.badgeType,
                    t = e.guildTraits,
                    n = function(e, r) {
                        var t = r === f.PZ.PUBLIC ? F.Z.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN : F.Z.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY;
                        switch (e) {
                            case a.Q.STAFF:
                                return {
                                    tooltipTitle: F.Z.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipSubtitle: F.Z.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipDescription: F.Z.Messages.INTERNAL_EMPLOYEE_ONLY
                                };
                            case a.Q.VERIFIED:
                                return {
                                    tooltipTitle: F.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: F.Z.Messages.GUILD_VERIFIED, tooltipDescription: t
                                };
                            case a.Q.PARTNERED:
                                return {
                                    tooltipTitle: F.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: F.Z.Messages.GUILD_PARTNERED,
                                        tooltipDescription: t
                                };
                            case a.Q.VERIFIED_AND_PARTNERED:
                                return {
                                    tooltipTitle: F.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: F.Z.Messages.GUILD_VERIFIED_AND_PARTNERED, tooltipDescription: t
                                };
                            case a.Q.COMMUNITY:
                                return {
                                    tooltipTitle: F.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: F.Z.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY
                                };
                            case a.Q.DISCOVERABLE:
                                return {
                                    tooltipTitle: F.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: F.Z.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN
                                };
                            default:
                                return {
                                    tooltipTitle: F.Z.Messages.SERVER_BADGE_TITLE_UNKNOWN
                                }
                        }
                    }(r, t.visibility),
                    i = n.tooltipTitle,
                    l = n.tooltipSubtitle,
                    c = n.tooltipDescription;
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsxs)("div", {
                        className: Y().tooltipBodyContainer,
                        children: [(0, o.jsx)(u.Text, {
                            color: "interactive-active",
                            variant: "text-xs/bold",
                            children: i
                        }), null != l ? (0, o.jsx)(u.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: l
                        }) : null, null != c ? (0, o.jsx)(u.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: c
                        }) : null]
                    }), t.premium ? (0, o.jsx)(X, {
                        guildTraits: t
                    }) : null]
                })
            }

            function K(e) {
                var r = e.guild,
                    t = e.tooltipColor,
                    n = void 0 === t ? u.Tooltip.Colors.BRAND : t,
                    i = e.tooltipPosition,
                    c = e.className,
                    d = e.flowerStarClassName,
                    h = e.iconClassName,
                    E = e.badgeStrokeColor,
                    j = e.badgeColor,
                    w = e.size,
                    m = void 0 === w ? 16 : w,
                    v = e.disableBoostClick,
                    C = e["aria-label"],
                    P = void 0 !== C && C,
                    _ = (0, l.e7)([g.default, b.ZP], (function() {
                        var e = g.default.getCurrentUser();
                        return b.ZP.isMember(null == r ? void 0 : r.id, null == e ? void 0 : e.id)
                    })),
                    D = (0, l.e7)([O.Z], (function() {
                        return O.Z.theme
                    })),
                    I = (0, f.XX)(r),
                    N = (0, a.i)(I);
                if (N === a.Q.NONE) return null;
                var R, T, S = W[N],
                    x = S.IconComponent,
                    L = S.backgroundDarkColor,
                    Z = S.backgroundLightColor,
                    M = S.foregroundDarkColor,
                    A = S.foregroundLightColor,
                    k = S.premiumBackgroundColor,
                    V = S.premiumForegroundColor;
                if (null == x) return null;
                if (I.premium) {
                    R = V;
                    T = k
                }
                var F = (0, s.wj)(D) ? M : A,
                    U = (0, s.wj)(D) ? L : Z;
                R = null != R ? R : F;
                T = null != T ? T : U;
                var G = function(e) {
                    if (I.premium && _ && !v) {
                        e.stopPropagation();
                        e.preventDefault();
                        (0, p.f)({
                            guildId: r.id,
                            location: {
                                section: B.jXE.GUILD_HEADER,
                                object: B.qAy.BOOST_GEM_ICON
                            }
                        })
                    }
                };
                return (0, o.jsx)(u.Tooltip, {
                    color: n,
                    position: i,
                    "aria-label": P,
                    text: (0, o.jsx)(J, {
                        badgeType: N,
                        guildTraits: I
                    }),
                    tooltipContentClassName: Y().tooltipRemovePadding,
                    children: function(e) {
                        return (0, o.jsx)(u.Clickable, {
                            onClick: G,
                            children: (0, o.jsx)(y.Z, Q(H({}, e), {
                                className: c,
                                flowerStarClassName: d,
                                color: null != T ? T : j,
                                stroke: E,
                                size: m,
                                children: (0, o.jsx)(x, {
                                    className: h,
                                    color: R
                                })
                            }))
                        })
                    }
                })
            }
        },
        855595: (e, r, t) => {
            t.d(r, {
                Z: () => a
            });
            var o = t(785893),
                n = (t(667294), t(450520)),
                i = t(911486),
                l = t(633878);

            function c(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function s(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        r && (o = o.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, o)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function u(e, r) {
                if (null == e) return {};
                var t, o, n = function(e, r) {
                    if (null == e) return {};
                    var t, o, n = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) {
                        t = i[o];
                        r.indexOf(t) >= 0 || (n[t] = e[t])
                    }
                    return n
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) {
                        t = i[o];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t])
                    }
                }
                return n
            }
            const a = (0, n.hN)((function(e) {
                var r = e.width,
                    t = void 0 === r ? 20 : r,
                    n = e.height,
                    i = void 0 === n ? 23 : n,
                    a = e.color,
                    f = void 0 === a ? "currentColor" : a,
                    p = e.foreground,
                    O = u(e, ["width", "height", "color", "foreground"]);
                return (0, o.jsx)("svg", s(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            o = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        o.forEach((function(r) {
                            c(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(O)), {
                    width: t,
                    height: i,
                    viewBox: "0 0 20 23",
                    children: (0, o.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, o.jsx)("path", {
                            className: p,
                            fill: f,
                            d: "M19.487 5.126L10.487 0.126C10.184 -0.042 9.81798 -0.042 9.51498 0.126L0.514977 5.126C0.197977 5.302 0.000976562 5.636 0.000976562 5.999C0.000976562 6.693 0.114977 22.999 10.001 22.999C19.887 22.999 20.001 6.693 20.001 5.999C20.001 5.636 19.804 5.302 19.487 5.126ZM10.001 5.999C11.382 5.999 12.501 7.118 12.501 8.499C12.501 9.88 11.382 10.999 10.001 10.999C8.61998 10.999 7.50098 9.88 7.50098 8.499C7.50098 7.118 8.61998 5.999 10.001 5.999ZM6.25098 16C6.25098 13.699 7.69998 12.25 10.001 12.25C12.302 12.25 13.751 13.699 13.751 16H6.25098Z"
                        })
                    })
                }))
            }), i.l)
        },
        71236: (e, r, t) => {
            t.d(r, {
                Z: () => a
            });
            var o = t(785893),
                n = (t(667294), t(450520)),
                i = t(663207),
                l = t(633878);

            function c(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function s(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        r && (o = o.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, o)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function u(e, r) {
                if (null == e) return {};
                var t, o, n = function(e, r) {
                    if (null == e) return {};
                    var t, o, n = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) {
                        t = i[o];
                        r.indexOf(t) >= 0 || (n[t] = e[t])
                    }
                    return n
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) {
                        t = i[o];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t])
                    }
                }
                return n
            }
            const a = (0, n.hN)((function(e) {
                var r = e.width,
                    t = void 0 === r ? 24 : r,
                    n = e.height,
                    i = void 0 === n ? 24 : n,
                    a = e.color,
                    f = void 0 === a ? "currentColor" : a,
                    p = e.foreground,
                    O = u(e, ["width", "height", "color", "foreground"]);
                return (0, o.jsx)("svg", s(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            o = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        o.forEach((function(r) {
                            c(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(O)), {
                    width: t,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, o.jsx)("path", {
                        fill: f,
                        className: p,
                        d: "M21.924 8.61789C21.77 8.24489 21.404 8.00089 21 8.00089H15.618L12.894 2.55389C12.555 1.87689 11.444 1.87689 11.105 2.55389L8.38199 8.00089H2.99999C2.59599 8.00089 2.22999 8.24489 2.07599 8.61789C1.92199 8.99089 2.00699 9.42289 2.29299 9.70789L6.87699 14.2919L5.03899 20.7269C4.92399 21.1299 5.07199 21.5619 5.40999 21.8089C5.74999 22.0569 6.20699 22.0659 6.55399 21.8329L12 18.2029L17.445 21.8329C17.613 21.9449 17.806 22.0009 18 22.0009C18.207 22.0009 18.414 21.9369 18.59 21.8089C18.928 21.5619 19.076 21.1299 18.961 20.7269L17.123 14.2919L21.707 9.70789C21.993 9.42289 22.078 8.99089 21.924 8.61789Z"
                    })
                }))
            }), i.r)
        }
    }
]);