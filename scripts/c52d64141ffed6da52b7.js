(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [72218], {
        236281: (e, t, n) => {
            e.exports = n.p + "b3f886a89afa1e3fbc94ffbb2a352a7e.svg"
        },
        759080: (e, t, n) => {
            e.exports = n.p + "1766572d46fefd37c4e7661c2e548c81.svg"
        },
        483946: (e, t, n) => {
            e.exports = n.p + "f3749440eaa0734e308da58132ce470b.mp4"
        },
        851416: (e, t, n) => {
            e.exports = n.p + "d302a3ac36dc88cd042d2d6cfa1bf19b.jpg"
        },
        245587: (e, t, n) => {
            e.exports = n.p + "96f8de7ed252b251d3586f241bdeffc7.jpg"
        },
        476763: (e, t, n) => {
            e.exports = n.p + "d0c0abd4643db92b79d4ba7a515016b5.svg"
        },
        601875: (e, t, n) => {
            e.exports = n.p + "58783c354548f8b8815c6ab95921f90c.svg"
        },
        659830: (e, t, n) => {
            e.exports = n.p + "48d5bdcffe9e7848067c2e187f1ef951.svg"
        },
        482779: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n(473708);

            function i(e) {
                return e > 0 ? r.Z.Messages.EMBEDDED_ACTIVITIES_MAX_PARTICIPANTS.format({
                    count: e
                }) : r.Z.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS
            }
        },
        92585: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(667294),
                i = n(3564);

            function a(e, t) {
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
                        var r, i, a = [],
                            l = !0,
                            o = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return a
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
            var o = ["embedded_cover", "embedded_background"];

            function c(e) {
                var t = e.applicationId,
                    n = e.size,
                    a = e.names,
                    c = void 0 === a ? o : a,
                    s = l(r.useState(null), 2),
                    u = s[0],
                    d = s[1],
                    f = l(r.useState(!0), 2),
                    v = f[0],
                    p = f[1],
                    h = (0, i.xF)(t, u, n),
                    m = v ? "loading" : null != h ? "fetched" : "not-found";
                r.useEffect((function() {
                    (0, i.hR)(t, c).then((function(e) {
                        p(!1);
                        var t = !0,
                            n = !1,
                            r = void 0;
                        try {
                            for (var i, a = e[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                                var l = i.value;
                                if (null != l && "" !== l) {
                                    d(l);
                                    return
                                }
                            }
                        } catch (e) {
                            n = !0;
                            r = e
                        } finally {
                            try {
                                t || null == a.return || a.return()
                            } finally {
                                if (n) throw r
                            }
                        }
                    }))
                }), [t]);
                return {
                    url: h,
                    state: m
                }
            }
        },
        650875: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                i = n(667294),
                a = n(633878);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function o(e, t) {
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

            function c(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function s(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    s = void 0 === i ? 24 : i,
                    u = e.color,
                    d = void 0 === u ? "currentColor" : u,
                    f = e.foreground,
                    v = c(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", o(function(e) {
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
                }({}, (0, a.Z)(v)), {
                    width: n,
                    height: s,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: f,
                        fill: d,
                        d: "M21 5V11.59L18 8.59L14 12.59L10 8.59L6 12.59L3 9.59V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5ZM18 11.42L21 14.42V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V12.42L6 15.42L10 11.42L14 15.42L18 11.42Z"
                    })
                }))
            }
            var u = n(744979),
                d = n.n(u);

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function v(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            l = !0,
                            o = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return a
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
                var t = e.imageBackground,
                    n = e.applicationName,
                    a = e.imageClassName,
                    l = e.imageNotFoundClassName,
                    o = v(i.useState(!1), 2),
                    c = o[0],
                    u = o[1];
                return "not-found" === t.state || c ? (0, r.jsx)("div", {
                    className: l,
                    children: (0, r.jsx)(s, {
                        className: d().brokenImageIcon
                    })
                }) : "loading" === t.state ? null : (0, r.jsx)("img", {
                    alt: n,
                    className: a,
                    src: t.url,
                    onError: function() {
                        return u(!0)
                    }
                })
            }
        },
        946171: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => dn
            });
            var r = n(785893),
                i = n(667294),
                a = n(294184),
                l = n.n(a),
                o = n(993231),
                c = n(202351),
                s = n(142643),
                u = n(882723),
                d = n(634698),
                f = n(26468),
                v = n(19585),
                p = n(28661),
                h = n(277418),
                m = n(901654),
                y = n(107364),
                g = n(249697),
                b = n(652591),
                I = n(930948),
                E = n(421281),
                x = n(560213),
                j = n(456826),
                T = n(211490),
                C = n(318715),
                S = n(153686),
                O = n(61209),
                A = n(279309),
                _ = n(363582),
                N = n(156146),
                D = n(723729),
                w = n(786170),
                M = n(706148),
                Z = n(663772),
                P = n(77147),
                L = n(798981),
                R = n(9018),
                k = n(483535),
                V = n(92585),
                B = n(650875),
                H = n(595258),
                F = n(968257),
                U = n(779099),
                Y = n(638273),
                W = n(473708),
                G = n(719529),
                z = n.n(G);

            function J(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function $(e, t, n, r, i, a, l) {
                try {
                    var o = e[a](l),
                        c = o.value
                } catch (e) {
                    n(e);
                    return
                }
                o.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function K(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);

                        function l(e) {
                            $(a, r, i, l, o, "next", e)
                        }

                        function o(e) {
                            $(a, r, i, l, o, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function q(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function X(e, t) {
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

            function Q(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            l = !0,
                            o = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return J(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return J(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ee = function(e, t) {
                var n, r, i, a, l = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function o(a) {
                    return function(o) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            l.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && l.label < i[1]) {
                                            l.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && l.label < i[2]) {
                                            l.label = i[2];
                                            l.ops.push(a);
                                            break
                                        }
                                        i[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                a = t.call(e, l)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, o])
                    }
                }
            };

            function te(e) {
                var t = e.applicationId,
                    n = e.guildId,
                    a = e.channelId,
                    l = e.onActivityLaunch,
                    o = (0, v.Z)(S.Z.ACTIVITY_SHELF_ACTIVITY_DETAILS).AnalyticsLocationProvider;
                i.useEffect((function() {
                    (0, j.w1)({
                        guildId: n
                    })
                }), [n]);
                var c = (0, V.Z)({
                        applicationId: null != t ? t : "",
                        size: 2048
                    }),
                    s = (0, Z.T)(null != n ? n : null, t);
                if (null == s) return null;
                var d, f = null != s.activity.activity_preview_video_asset_id ? (0,
                        R.Z)(t, s.activity.activity_preview_video_asset_id) : null,
                    p = Y.o[t],
                    h = null != (null == p ? void 0 : p.playersSuggestionMin) && null != (null == p ? void 0 : p.playersSuggestionMax) ? "".concat(p.playersSuggestionMin, " - ").concat(p.playersSuggestionMax) : void 0;
                return (0, r.jsx)(o, {
                    children: (0, r.jsx)("div", {
                        className: z().scrollContainer,
                        children: (0, r.jsxs)(u.Scroller, {
                            className: z().scroller,
                            children: [(0, r.jsx)("div", {
                                className: z().launcherOuterContainer,
                                children: (0, r.jsx)(ne, {
                                    activityItem: s,
                                    onLaunch: l,
                                    channelId: a
                                })
                            }), (0, r.jsxs)("div", {
                                className: z().activityDetailsContainer,
                                children: [(0, r.jsxs)("div", {
                                    children: [null != f ? (0, r.jsx)("div", {
                                        className: z().heroVideoContainer,
                                        children: (0, r.jsx)(w.Z, {
                                            loop: !0,
                                            autoPlay: !0,
                                            muted: !0,
                                            className: z().heroVideo,
                                            src: f,
                                            poster: c.url
                                        })
                                    }) : null, (0, r.jsx)("div", {
                                        className: z().detailsTitle,
                                        children: (0, r.jsx)(u.Heading, {
                                            variant: "heading-xxl/bold",
                                            children: s.application.name
                                        })
                                    }), (0, r.jsxs)("div", {
                                        className: z().detailsDetails,
                                        children: [null != h ? (0, r.jsxs)("div", {
                                            className: z().detailItem,
                                            children: [(0, r.jsx)(_.Z, {
                                                width: 16,
                                                height: 16
                                            }), (0, r.jsx)(u.Text, {
                                                variant: "text-xs/semibold",
                                                className: z().detailItemText,
                                                children: W.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format({
                                                    nPlayers: h
                                                })
                                            })]
                                        }) : null, null != (null == p ? void 0 : p.timeSuggestionMinutes) ? (0, r.jsxs)("div", {
                                            className: z().detailItem,
                                            children: [(0, r.jsx)(A.Z, {
                                                width: 16,
                                                height: 16
                                            }), (0, r.jsx)(u.Text, {
                                                variant: "text-xs/semibold",
                                                className: z().detailItemText,
                                                children: W.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format({
                                                    nMinutes: p.timeSuggestionMinutes
                                                })
                                            })]
                                        }) : null, (0, r.jsxs)("div", {
                                            className: z().detailItem,
                                            children: [(0, r.jsx)(D.Z, {
                                                width: 16,
                                                height: 16
                                            }), (0, r.jsx)(u.Text, {
                                                variant: "text-xs/semibold",
                                                className: z().detailItemText,
                                                children: s.application.tags.slice(0, 3).join(", ")
                                            })]
                                        })]
                                    })]
                                }), (0, r.jsx)(u.Heading, {
                                    variant: "heading-lg/medium",
                                    className: z().detailsDescription,
                                    children: s.application.description
                                }), (0, r.jsx)("div", {
                                    className: z().divider
                                }), (0, r.jsx)("div", {
                                    className: z().imagesContainer,
                                    children: (null !== (d = null == p ? void 0 : p.gameplayImageUrls) && void 0 !== d ? d : []).map((function(e) {
                                        return (0, r.jsx)("img", {
                                            src: e,
                                            alt: W.Z.Messages.EMBEDDED_ACTIVITIES_GAMEPLAY_ALT.format({
                                                activityName: s.application.name
                                            }),
                                            className: z().activityImage
                                        }, e)
                                    }))
                                })]
                            })]
                        })
                    })
                })
            }

            function ne(e) {
                var t, a, l = e.activityItem,
                    o = e.onLaunch,
                    c = e.channelId,
                    s = (0, V.Z)({
                        applicationId: l.application.id,
                        size: 2048
                    }),
                    d = (0, v.Z)().analyticsLocations,
                    f = (0, k.Z)(),
                    p = Q(i.useState(null !== (t = (0, P.$)({
                        allowGdmActivityChannelSuggestion: !0
                    })) && void 0 !== t ? t : void 0), 2),
                    h = p[0],
                    m = p[1],
                    y = Q(i.useState(null !== (a = (0, L.d)({
                        guildId: h,
                        allowGdmActivityChannelSuggestion: !0
                    })) && void 0 !== a ? a : void 0), 2),
                    g = y[0],
                    b = y[1],
                    I = (0, C.ZP)([O.Z], (function() {
                        return O.Z.getChannel(g)
                    }), [g]),
                    E = (0, P.W)(),
                    x = (0, L.F)(h),
                    j = i.useCallback((function() {
                        null != g && (0, M.Z)({
                            activityItem: l,
                            currentActivity: f,
                            channelId: g,
                            guildId: h,
                            embeddedActivitiesManager: H.Z,
                            analyticsLocations: d
                        }).then(o)
                    }), [l, d, f, o, g, h]),
                    T = i.useCallback((function() {
                        (0, u.openModalLazy)(K((function() {
                            var e, t;
                            return ee(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(86502), n.e(35521), n.e(76156)]).then(n.bind(n, 135521))];
                                    case 1:
                                        e = i.sent(), t = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(t, X(function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        r = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                    }))));
                                                    r.forEach((function(t) {
                                                        q(e, t, n[t])
                                                    }))
                                                }
                                                return e
                                            }({
                                                activityItem: l
                                            }, e), {
                                                analyticsLocations: d
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }), [l, d]),
                    S = null == I || null != I.guild_id && (null == h || null == g || !E.some((function(e) {
                        return e.value === h
                    })) || !x.some((function(e) {
                        return e.value.channel.id === g
                    })));
                return (0, r.jsxs)("div", {
                    className: z().launcherInnerContainer,
                    children: [(0, r.jsx)(B.Z, {
                        applicationName: l.application.name,
                        imageBackground: s,
                        imageClassName: z().launchImage,
                        imageNotFoundClassName: z().brokenLaunchImage
                    }), (0, r.jsx)(u.Text, {
                        variant: "text-md/medium",
                        children: W.Z.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE
                    }), null == c ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(u.Select, {
                            placeholder: W.Z.Messages.GUILD_SELECT,
                            optionClassName: z().option,
                            options: E,
                            renderOptionValue: function(e) {
                                var t = e.find((function(e) {
                                    return e.value === h
                                }));
                                return null == t ? null : (0, r.jsx)(U.m, {
                                    guildId: t.value
                                })
                            },
                            renderOptionLabel: function(e) {
                                var t = e.value;
                                return (0, r.jsx)(U.m, {
                                    guildId: t
                                })
                            },
                            isSelected: function(e) {
                                return e === h
                            },
                            select: function(e) {
                                m(e);
                                var t;
                                b(null !== (t = (0, L.d)({
                                    guildId: e
                                })) && void 0 !== t ? t : void 0)
                            },
                            serialize: function(e) {
                                return e
                            }
                        }), (0, r.jsx)(u.Select, {
                            placeholder: W.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
                            optionClassName: z().option,
                            options: x,
                            isSelected: function(e) {
                                return e.channel.id === g
                            },
                            select: function(e) {
                                var t = e.channel;
                                return b(t.id)
                            },
                            serialize: function(e) {
                                return e.channel.id
                            },
                            renderOptionValue: function() {
                                var e = x.find((function(e) {
                                    return e.value.channel.id === g
                                }));
                                return null == e ? null : (0, r.jsx)(F.O, {
                                    channel: e.value.channel,
                                    users: e.value.users
                                })
                            },
                            renderOptionLabel: function(e) {
                                var t = e.value,
                                    n = t.channel,
                                    i = t.users;
                                return (0, r.jsx)(F.O, {
                                    channel: n,
                                    users: i
                                })
                            }
                        }), (0, r.jsx)(u.Button, {
                            fullWidth: !0,
                            disabled: S,
                            onClick: j,
                            children: W.Z.Messages.START
                        }), (0, r.jsx)("div", {
                            className: z().divider
                        }), (0, r.jsx)(u.Button, {
                            fullWidth: !0,
                            color: u.Button.Colors.PRIMARY,
                            onClick: T,
                            children: W.Z.Messages.SHARE
                        })]
                    }) : (0, r.jsxs)("div", {
                        className: z().singleRowShareContainer,
                        children: [(0, r.jsx)(u.Button, {
                            fullWidth: !0,
                            disabled: S,
                            onClick: j,
                            children: W.Z.Messages.START
                        }), (0, r.jsx)(u.Button, {
                            className: z().shareIconButton,
                            color: u.Button.Colors.PRIMARY,
                            onClick: T,
                            children: (0, r.jsx)(N.Z, {})
                        })]
                    })]
                })
            }
            var re = n(473727),
                ie = n(712861),
                ae = n(316878),
                le = n(64234),
                oe = n(567403),
                ce = n(473903),
                se = n(966225),
                ue = n(548586),
                de = n(901750),
                fe = n(365724),
                ve = n(475665),
                pe = n(768560),
                he = n(398441),
                me = n(436771),
                ye = n(971402),
                ge = n(968449),
                be = n(96606),
                Ie = n(72580),
                Ee = n(773148),
                xe = n(482779),
                je = n(565957),
                Te = n(652679),
                Ce = n.n(Te);

            function Se(e) {
                var t = e.action,
                    n = e.onClick,
                    i = t === je.J.JOIN ? W.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY : W.Z.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY,
                    a = t === je.J.JOIN ? u.Button.Colors.PRIMARY : u.Button.Colors.RED;
                return (0, r.jsx)("div", {
                    className: Ce().activityOverlay,
                    children: (0, r.jsx)(u.Button, {
                        className: Ce().actionButton,
                        onClick: n,
                        size: u.Button.Sizes.MEDIUM,
                        color: a,
                        children: i
                    })
                })
            }
            var Oe = n(457997),
                Ae = n(531441),
                _e = n(501607),
                Ne = n.n(_e);

            function De(e) {
                var t = e.name,
                    n = e.title,
                    i = void 0 === n ? W.Z.Messages.EMBEDDED_ACTIVITIES_TRY_IT_OUT : n,
                    a = e.showTooltip,
                    l = void 0 === a || a,
                    o = W.Z.Messages.EMBEDDED_ACTIVITIES_FREE_PREVIEW_TOOLTIP.format({
                        activity: t
                    }),
                    c = (0, r.jsx)(Ae.IG, {
                        className: Ne().tryItOutBadge,
                        disableColor: !0,
                        text: (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(Oe.Z, {
                                className: Ne().tryItOutBadgeIcon,
                                width: 12,
                                height: 12
                            }), (0, r.jsx)("span", {
                                children: i
                            })]
                        })
                    });
                return l ? (0, r.jsx)(u.TooltipContainer, {
                    text: o,
                    tooltipContentClassName: Ne().tooltip,
                    children: c
                }) : c
            }
            var we = n(440614),
                Me = n.n(we),
                Ze = n(659830),
                Pe = n.n(Ze);

            function Le(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Re(e, t, n, r, i, a, l) {
                try {
                    var o = e[a](l),
                        c = o.value
                } catch (e) {
                    n(e);
                    return
                }
                o.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function ke(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);

                        function l(e) {
                            Re(a, r, i, l, o, "next", e)
                        }

                        function o(e) {
                            Re(a, r, i, l, o, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function Ve(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Be(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Ve(e, t, n[t])
                    }))
                }
                return e
            }

            function He(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            l = !0,
                            o = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Le(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Le(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Fe = function(e, t) {
                var n, r, i, a, l = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                        next: o(0),
                        throw: o(1),
                        return: o(2)
                    },
                    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                function o(a) {
                    return function(o) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            l.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && l.label < i[1]) {
                                            l.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && l.label < i[2]) {
                                            l.label = i[2];
                                            l.ops.push(a);
                                            break
                                        }
                                        i[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                a = t.call(e, l)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, o])
                    }
                }
            };

            function Ue(e) {
                var t = e.value,
                    n = e.icon;
                return (0, r.jsxs)(u.Text, {
                    className: Me().activityTag,
                    color: "interactive-normal",
                    variant: "text-xs/semibold",
                    children: [(0, Ie.lm)(n) ? (0, r.jsx)(n, {
                        className: Me().icon,
                        backgroundColor: "interactive-normal"
                    }) : null, t]
                })
            }

            function Ye(e) {
                var t, n = e.activity,
                    i = e.application,
                    a = e.channel,
                    l = e.guildId,
                    o = e.large,
                    s = void 0 !== o && o,
                    d = null !== (t = null == n ? void 0 : n.connections) && void 0 !== t ? t : [],
                    f = (0, c.Wu)([ce.default], (function() {
                        return Array.from(d).map((function(e) {
                            var t = He(e, 1)[0];
                            return ce.default.getUser(t)
                        })).filter(Ie.lm)
                    })),
                    v = Ee.ZP.getName(l, null == a ? void 0 : a.id, null == f ? void 0 : f[0]);
                v = (0, E.aF)(v, 15);
                if (null == n || 0 === f.length) {
                    var p, h = "".concat((0, xe.Z)(null !== (p = i.maxParticipants) && void 0 !== p ? p : 0));
                    if (s) {
                        var m;
                        h = null !== (m = i.description) && void 0 !== m ? m : ""
                    }
                    return (0, r.jsx)(u.Text, {
                        className: Me().activitySubtitleText,
                        variant: "text-xs/normal",
                        color: "interactive-normal",
                        children: h
                    })
                }
                return (0, r.jsxs)("div", {
                    className: Me().activitySubtitleText,
                    children: [(0, r.jsx)(u.Text, {
                        className: Me().usersArePlayingText,
                        variant: "text-xs/normal",
                        children: f.length > 1 ? W.Z.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
                            username: v,
                            count: f.length - 1
                        }) : W.Z.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
                            username: v
                        })
                    }), (0, r.jsx)(be.Z, {
                        size: s ? be.u.SIZE_24 : be.u.SIZE_16,
                        guildId: l,
                        users: f,
                        max: 6
                    })]
                })
            }

            function We(e) {
                var t = e.activityItem,
                    a = e.channel,
                    o = e.guildId,
                    c = e.locationObject,
                    s = e.onActivityItemSelected,
                    d = e.large,
                    f = void 0 !== d && d,
                    v = (0, je.Z)({
                        activityItem: t,
                        channel: a,
                        guildId: o,
                        locationObject: c,
                        onActivityItemSelected: s,
                        embeddedActivitiesManager: H.Z
                    }),
                    p = v.imageBackground,
                    h = v.videoUrl,
                    m = v.activityAction,
                    y = v.joinableEmbeddedApp,
                    g = v.onActivityItemSelected,
                    b = v.showNewBadge,
                    I = v.staffReleasePhase,
                    E = t.application,
                    x = He(i.useState(!1), 2),
                    j = x[0],
                    T = x[1],
                    C = He(i.useState(j), 2),
                    S = C[0],
                    O = C[1];
                i.useEffect((function() {
                    j && O(!0)
                }), [j]);
                var A, _, N = function() {
                        return T(!0)
                    },
                    D = function() {
                        return T(!1)
                    },
                    M = ge.Sb.useSetting();
                return (0, r.jsxs)(u.Clickable, {
                    onClick: m === je.J.START ? g : void 0,
                    onContextMenu: M ? function(e) {
                        (0, ye.jW)(e, ke((function() {
                            var e, t;
                            return Fe(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, n.e(8388).then(n.bind(n, 433531))];
                                    case 1:
                                        e = i.sent(), t = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(t, Be({
                                                application: E
                                            }, e))
                                        }]
                                }
                            }))
                        })))
                    } : void 0,
                    className: l()(Me().activityItem, (_ = {}, Ve(_, Me().large, !0 === f), Ve(_, Me().disabled, m !== je.J.START), _)),
                    children: [(0, r.jsxs)("div", {
                        className: l()(Me().activityImageContainer, Ve({}, Me().large, !0 === f)),
                        onMouseEnter: N,
                        onFocus: N,
                        onMouseLeave: D,
                        onBlur: D,
                        children: [(0, r.jsx)(B.Z, {
                            imageBackground: p,
                            applicationName: E.name,
                            imageClassName: l()(Me().activityImage, Ve({}, Me().large, !0 === f)),
                            imageNotFoundClassName: Me().brokenImageIconWrapper
                        }), null != h && S && m === je.J.START ? (0, r.jsx)("div", {
                            className: l()(Me().activityVideo, Ve({}, Me().videoFadeOut, !j)),
                            onAnimationEnd: function() {
                                return j ? null : O(!1)
                            },
                            children: (0, r.jsx)(w.Z, {
                                className: Me().activityVideo,
                                src: h,
                                loop: !0,
                                autoPlay: !0,
                                muted: !0
                            })
                        }) : null, m !== je.J.START ? (0, r.jsx)(Se, {
                            action: m,
                            onClick: g
                        }) : null, (0, r.jsx)("div", {
                            className: Me().overlayBadge,
                            children: (0,
                                r.jsx)("div", {
                                className: Me().badgeContainer,
                                children: b ? (0, r.jsx)(De, {
                                    title: W.Z.Messages.NEW,
                                    name: E.name,
                                    showTooltip: !1
                                }) : null
                            })
                        })]
                    }), (0, r.jsxs)("div", {
                        className: l()(Me().activityTextContainer, Ve({}, Me().large, f)),
                        children: [f ? (0, r.jsx)(u.Text, {
                            className: Me().activityMaxParticipantsLarge,
                            variant: "text-xs/normal",
                            color: "interactive-normal",
                            children: (0, xe.Z)(null !== (A = E.maxParticipants) && void 0 !== A ? A : 0)
                        }) : null, (0, r.jsxs)("div", {
                            className: Me().activityName,
                            children: [(0, r.jsx)(u.Heading, {
                                className: Me().activityTitleText,
                                variant: "heading-md/semibold",
                                color: "interactive-active",
                                children: E.name
                            }), null != I ? (0, r.jsx)(u.Tooltip, {
                                text: I,
                                children: function(e) {
                                    return (0, r.jsx)("img", Be({
                                        className: Me().staffBadge,
                                        alt: I,
                                        src: Pe()
                                    }, e))
                                }
                            }) : null]
                        }), (0, r.jsx)(Ye, {
                            activity: null == y ? void 0 : y.embeddedActivity,
                            application: E,
                            channel: a,
                            guildId: o,
                            large: f
                        }), (0, r.jsx)("div", {
                            className: Me().activityTagsContainer,
                            children: E.tags.slice(0, 3).map((function(e) {
                                return (0, r.jsx)(Ue, {
                                    value: e
                                }, "activity-tag-".concat(E.id, "-").concat(e))
                            }))
                        })]
                    })]
                })
            }
            var Ge = n(136317),
                ze = n(258104),
                Je = n(2590),
                $e = n(326774),
                Ke = n.n($e);

            function qe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Xe(e, t, n, r, i, a, l) {
                try {
                    var o = e[a](l),
                        c = o.value
                } catch (e) {
                    n(e);
                    return
                }
                o.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function Qe(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);

                        function l(e) {
                            Xe(a, r, i, l, o, "next", e)
                        }

                        function o(e) {
                            Xe(a, r, i, l, o, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function et(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function tt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        et(e, t, n[t])
                    }))
                }
                return e
            }

            function nt(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            l = !0,
                            o = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return qe(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return qe(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var rt = function(e, t) {
                var n, r, i, a, l = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function o(a) {
                    return function(o) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            l.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && l.label < i[1]) {
                                            l.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && l.label < i[2]) {
                                            l.label = i[2];
                                            l.ops.push(a);
                                            break
                                        }
                                        i[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                a = t.call(e, l)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, o])
                    }
                }
            };

            function it(e) {
                var t = e.activityItem,
                    a = e.channel,
                    o = e.guildId,
                    s = e.locationObject,
                    d = e.onActivityItemSelected,
                    f = (0, je.Z)({
                        activityItem: t,
                        channel: a,
                        guildId: o,
                        locationObject: s,
                        onActivityItemSelected: d,
                        embeddedActivitiesManager: H.Z
                    }),
                    v = f.imageBackground,
                    p = f.videoUrl,
                    h = f.activityAction,
                    m = f.staffReleasePhase,
                    y = f.onActivityItemSelected,
                    g = f.showNewBadge,
                    b = T._.useExperiment({
                        location: "05846b_1"
                    }),
                    x = b.enableShelfToDetailPage,
                    j = b.enableMinimalActivityDetails,
                    C = (0, c.e7)([ae.Z], (function() {
                        return ae.Z.useReducedMotion
                    })),
                    S = (0, c.Wu)([ze.ZP, ce.default], (function() {
                        return ze.ZP.getUsersHavePlayedByApp(t.application.id).filter((function(e) {
                            var t;
                            return (null === (t = ce.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) !== e
                        })).map((function(e) {
                            return ce.default.getUser(e)
                        })).filter(Ie.lm)
                    }), [t.application.id]),
                    O = null != S[0] ? (0, E.aF)(Ee.ZP.getName(null, null, S[0]), 25) : null,
                    A = null;
                null != O && S.length > 1 ? A = W.Z.Messages.EMBEDDED_ACTIVITIES_HAVE_PLAYED_ONE_KNOWN_AND_MORE.format({
                    username1: O,
                    extras: S.length - 1
                }) : null != O && (A = W.Z.Messages.EMBEDDED_ACTIVITIES_HAVE_PLAYED_ONE_KNOWN.format({
                    username1: O
                }));
                var N = nt(i.useState(!1), 2),
                    D = N[0],
                    M = N[1],
                    Z = nt(i.useState(D), 2),
                    P = Z[0],
                    L = Z[1];
                i.useEffect((function() {
                    D && L(!0)
                }), [D]);
                var R, k = function() {
                        return M(!0)
                    },
                    V = function() {
                        return M(!1)
                    },
                    F = null == t.application.maxParticipants || -1 === t.application.maxParticipants ? W.Z.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS : W.Z.Messages.EMBEDDED_ACTIVITIES_ONE_TO_N_PARTICIPANTS.format({
                        count: t.application.maxParticipants
                    }),
                    U = i.useCallback((function() {
                        x ? I.S.dispatch(Je.CkL.SHOW_ACTIVITY_DETAILS, {
                            applicationId: t.application.id
                        }) : h === je.J.START && y()
                    }), [h, t, x, y]),
                    G = Y.o[t.application.id],
                    z = null != (null == G ? void 0 : G.playersSuggestionMin) && null != (null == G ? void 0 : G.playersSuggestionMax) ? "".concat(G.playersSuggestionMin, " - ").concat(G.playersSuggestionMax) : void 0;
                return (0, r.jsxs)(u.Clickable, {
                    className: l()(Ke().activityCard, (R = {}, et(R, Ke().activityCardReducedMotion, C), et(R, Ke().activityCardWithoutDetailPageRoute, !x), R)),
                    onClick: U,
                    onContextMenu: function(e) {
                        (0, ye.jW)(e, Qe((function() {
                            var e, i;
                            return rt(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, n.e(8388).then(n.bind(n, 433531))];
                                    case 1:
                                        e = a.sent(), i = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(i, tt({
                                                application: t.application
                                            }, e))
                                        }]
                                }
                            }))
                        })))
                    },
                    onMouseEnter: k,
                    onFocus: k,
                    onMouseLeave: V,
                    onBlur: V,
                    children: [(0, r.jsxs)("div", {
                        className: Ke().activityCardImageContainer,
                        children: [(0, r.jsx)(B.Z, {
                            imageBackground: v,
                            applicationName: t.application.name,
                            imageClassName: Ke().activityImage,
                            imageNotFoundClassName: Ke().brokenImageIconWrapper
                        }), !C && null != p && P ? (0, r.jsx)("div", {
                            className: l()(Ke().video, et({}, Ke().videoFadeOut, !D)),
                            onAnimationEnd: function() {
                                return D ? null : L(!1)
                            },
                            children: (0, r.jsx)(w.Z, {
                                className: Ke().video,
                                src: p,
                                loop: !0,
                                autoPlay: !0,
                                muted: !0
                            })
                        }) : null, h !== je.J.START ? (0, r.jsx)(Se, {
                            action: h,
                            onClick: y
                        }) : null, j && null != z ? (0, r.jsx)("div", {
                            className: Ke().minimalDetailsContainer,
                            children: (0, r.jsxs)("div", {
                                className: Ke().minimalDetails,
                                children: [(0, r.jsx)(_.Z, {
                                    width: 16,
                                    height: 16
                                }), (0, r.jsx)(u.Text, {
                                    variant: "text-xs/medium",
                                    children: z
                                })]
                            })
                        }) : null, (0, r.jsx)("div", {
                            className: Ke().overlayBadge,
                            children: (0, r.jsxs)("div", {
                                className: Ke().badgeContainer,
                                children: [g ? (0, r.jsx)(De, {
                                    title: W.Z.Messages.NEW,
                                    name: t.application.name,
                                    showTooltip: !1
                                }) : null, null != m ? (0, r.jsx)(u.Tooltip, {
                                    text: m,
                                    children: function(e) {
                                        return (0, r.jsx)("img", tt({
                                            className: Ke().staffBadge,
                                            alt: m,
                                            src: Pe()
                                        }, e))
                                    }
                                }) : null]
                            })
                        })]
                    }), j ? null : (0, r.jsxs)("div", {
                        className: Ke().activityCardDetails,
                        children: [(0, r.jsxs)("div", {
                            children: [(0, r.jsx)(u.Heading, {
                                variant: "heading-xl/extrabold",
                                children: t.application.name
                            }), (0, r.jsx)(u.Text, {
                                variant: "text-xs/semibold",
                                className: Ke().activityCardParticipants,
                                children: F
                            })]
                        }), S.length > 0 ? (0, r.jsx)("div", {
                            className: Ke().activityCardSocialProofContainer,
                            children: (0, r.jsxs)("div", {
                                className: Ke().activityCardUsersHavePlayedContainer,
                                children: [(0, r.jsx)(be.Z, {
                                    users: S,
                                    guildId: void 0,
                                    max: 4
                                }), null != A ? (0, r.jsx)(u.Text, {
                                    variant: "text-sm/medium",
                                    className: Ke().activityCardUsersHavePlayedText,
                                    children: A
                                }) : null]
                            })
                        }) : (0, r.jsx)(r.Fragment, {
                            children: t.application.tags.length > 0 ? (0, r.jsx)("div", {
                                className: Ke().activityCardTagContainer,
                                children: t.application.tags.slice(0, 3).map((function(e) {
                                    return (0, r.jsx)("div", {
                                        className: Ke().activityCardTag,
                                        children: (0, r.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            children: e
                                        })
                                    }, e)
                                }))
                            }) : null
                        }), x ? (0, r.jsxs)("div", {
                            className: l()(Ke().activityCardHoverHint, et({}, Ke().activityCardHoverHintReducedMotion, C)),
                            children: [(0, r.jsx)(u.Text, {
                                variant: "text-sm/semibold",
                                children: W.Z.Messages.LEARN_MORE
                            }), (0, r.jsx)(Ge.Z, {
                                width: 16,
                                height: 16
                            })]
                        }) : null]
                    })]
                })
            }
            var at = n(88067),
                lt = n(677593),
                ot = n.n(lt),
                ct = n(236281),
                st = n.n(ct),
                ut = n(759080),
                dt = n.n(ut),
                ft = n(483946),
                vt = n.n(ft),
                pt = n(851416),
                ht = n.n(pt),
                mt = n(245587),
                yt = n.n(mt);

            function gt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function bt(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function It(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            l = !0,
                            o = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return gt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return gt(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Et, xt = (0, ie.Mg)(s.Z.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP),
                jt = (0,
                    ie.Mg)(s.Z.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
                Tt = (0, ie.Mg)(s.Z.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT),
                Ct = (bt(Et = {}, at.Qy.NEEDS_NITRO, 70), bt(Et, at.Qy.UNLOCKED, 0), Et);

            function St(e) {
                var t = e.channel,
                    n = e.guildId,
                    a = e.locationObject,
                    o = e.onClose,
                    s = e.scrollerRef,
                    d = It(i.useState(0), 2),
                    f = d[0],
                    p = d[1],
                    h = (0, c.e7)([le.Z], (function() {
                        return le.Z.getState().theme
                    })),
                    m = (0, c.e7)([ae.Z], (function() {
                        return ae.Z.useReducedMotion
                    })),
                    y = fe.M.useExperiment({
                        location: "a48d9e_1"
                    }).enabled,
                    g = se.F.useExperiment({
                        location: "a48d9e_2"
                    }, {
                        autoTrackExposure: !1
                    }).enabled,
                    b = ve.K.useExperiment({
                        location: "Activity Shelf web"
                    }, {
                        autoTrackExposure: !0
                    }).enableBobbleBashDoubleWideShelf,
                    I = de.Z.useExperiment({
                        location: "a48d9e_4"
                    }).enabled,
                    E = (0, ue.e)(),
                    C = (0, pe.Z)({
                        guildId: n,
                        isWatchTogetherPromoEnabled: E,
                        enableBobbleBashDoubleWideShelf: b
                    }),
                    O = (0, c.e7)([ce.default], (function() {
                        return ce.default.getCurrentUser()
                    })),
                    A = (0, c.e7)([oe.Z], (function() {
                        return oe.Z.getGuild(n)
                    }), [n]),
                    _ = (0,
                        v.Z)(S.Z.ACTIVITY_DIRECTORY).AnalyticsLocationProvider,
                    N = (0, me.Z)(null == t ? void 0 : t.id),
                    D = (0, c.cj)([x.Z], (function() {
                        return {
                            filter: x.Z.getFilter(),
                            isDeveloperActivityShelfEnabled: x.Z.getIsEnabled()
                        }
                    })),
                    M = D.isDeveloperActivityShelfEnabled,
                    Z = D.filter;
                i.useEffect((function() {
                    var e = function() {
                            var e, t;
                            p(null !== (t = null === (e = s.current) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0)
                        },
                        t = s.current;
                    if (null != t) {
                        t.addEventListener("scroll", e, !1);
                        return function() {
                            null != t && t.removeEventListener("scroll", e, !1)
                        }
                    }
                }), [s]);
                var P = T._.useExperiment({
                        location: "a48d9e_5"
                    }, {
                        autoTrackExposure: !0
                    }),
                    L = P.enableBigShelf,
                    R = P.enableSocialProofActivityDetails,
                    k = P.enableMinimalActivityDetails;
                i.useEffect((function() {
                    (N || null != n) && (0, j.w1)({
                        guildId: n,
                        force: !0
                    })
                }), [n, N]);
                (0, he.g)();
                if (null == A && !N || null == O) return null;
                var V, B = C.reduce((function(e, t) {
                        var n = It(t, 2),
                            r = (n[0], n[1]);
                        return e || r.length > 0
                    }), !1),
                    H = function(e, t, n, r, i) {
                        var a = Ct[t] + xt;
                        r ? a += 290.75 : i && (a += 200);
                        var l = (t === at.Qy.UNLOCKED && 1 === e.length ? Tt : jt) + (n ? xt : 0);
                        return a + Math.ceil(e.length / 2) * l
                    },
                    F = g ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(w.Z, {
                            autoPlay: !m,
                            src: "https://cdn.discordapp.com/attachments/860252504826445825/1093286971708813382/game_night_desktop.mp4",
                            poster: "https://cdn.discordapp.com/attachments/860252504826445825/1093287297950175272/game_night_desktop.jpg",
                            className: ot().poster,
                            loop: !0
                        }), (0, r.jsx)("div", {
                            className: ot().posterDivider
                        })]
                    }) : y ? L ? null : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("img", {
                            src: yt(),
                            alt: W.Z.Messages.EMBEDDED_ACTIVITIES_STAYING_FREE_POSTER_ALT,
                            className: ot().poster
                        }), (0, r.jsx)("div", {
                            className: ot().posterDivider
                        })]
                    }) : I ? m ? (0, r.jsxs)(re.rU, {
                        to: Je.Z5c.ACTIVITIES,
                        onClick: o,
                        children: [(0, r.jsx)("img", {
                            src: "light" === h ? st() : dt(),
                            className: ot().poster,
                            alt: W.Z.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_ACTIVITIES_HERO_ALT
                        }), (0, r.jsx)("div", {
                            className: ot().posterDivider
                        })]
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(re.rU, {
                            to: Je.Z5c.ACTIVITIES,
                            onClick: o,
                            children: (0, r.jsx)(w.Z, {
                                autoPlay: !0,
                                src: vt(),
                                poster: ht(),
                                className: ot().poster,
                                loop: !0,
                                muted: !0
                            })
                        }), (0, r.jsx)("div", {
                            className: ot().posterDivider
                        })]
                    }) : null;
                return (0, r.jsx)(_, {
                    children: (0, r.jsxs)("div", {
                        className: ot().scrollContainer,
                        children: [B && !L ? (0, r.jsx)("div", {
                            className: ot().scrollBackgroundContainer,
                            style: {
                                top: -f
                            },
                            children: C.map((function(e, t, n) {
                                var i = It(e, 2),
                                    a = i[0],
                                    o = i[1],
                                    c = t + 1 < n.length && a !== n[t + 1][0];
                                return (0, r.jsx)("div", {
                                    className: l()(ot().scrollTierBackground),
                                    style: {
                                        height: H(o, a, c, g, I)
                                    }
                                }, a)
                            }))
                        }) : null, (0, r.jsxs)(u.Scroller, {
                            ref: s,
                            className: ot().scroller,
                            children: [F, (V = L || R || k ? it : We, B ? (0, r.jsx)(r.Fragment, {
                                children: C.map((function(e) {
                                    var i = It(e, 2),
                                        c = i[0],
                                        s = i[1];
                                    return (0, r.jsx)("div", {
                                        className: ot().scrollSection,
                                        children: (0, r.jsx)("div", {
                                            className: l()(ot().shelf, bt({}, ot().shelfBigGrid, L)),
                                            children: s.map((function(e) {
                                                return (0, r.jsx)(V, {
                                                    large: c === at.Qy.UNLOCKED && 1 === s.length,
                                                    activityItem: e,
                                                    channel: t,
                                                    guildId: n,
                                                    locationObject: a,
                                                    onActivityItemSelected: function() {
                                                        e.application.id, o()
                                                    }
                                                }, "activity-shelf-item-".concat(e.application.id))
                                            }))
                                        })
                                    }, c)
                                }))
                            }) : M && Z.length > 0 ? (0, r.jsx)("div", {
                                className: ot().filterError,
                                children: W.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FILTER_ERROR.format({
                                    filter: Z
                                })
                            }) : (0, r.jsx)("div", {
                                className: ot().spinnerContainer,
                                children: (0, r.jsx)(u.Spinner, {})
                            }))]
                        })]
                    })
                })
            }
            var Ot = n(944010),
                At = n(379991),
                _t = n(682776),
                Nt = n(715107),
                Dt = n(993137),
                wt = n(167523),
                Mt = n.n(wt);

            function Zt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Pt(e, t, n, r, i, a, l) {
                try {
                    var o = e[a](l),
                        c = o.value
                } catch (e) {
                    n(e);
                    return
                }
                o.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function Lt(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            l = !0,
                            o = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Zt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Zt(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Rt = function(e, t) {
                var n, r, i, a, l = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function o(a) {
                    return function(o) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            l.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && l.label < i[1]) {
                                            l.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && l.label < i[2]) {
                                            l.label = i[2];
                                            l.ops.push(a);
                                            break
                                        }
                                        i[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                a = t.call(e, l)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, o])
                    }
                }
            };

            function kt(e) {
                return (0, c.e7)([oe.Z, _t.Z], (function() {
                    var t = oe.Z.getGuild(e);
                    return null != t && _t.Z.can(Je.Plq.CREATE_INSTANT_INVITE, t)
                }), [e])
            }
            var Vt = ["embedded_background"];

            function Bt(e) {
                var t = e.applicationId,
                    n = e.guildId,
                    a = e.selectedChannelId,
                    l = e.setSelectedChannelId,
                    o = e.enableSelectedTextChannelInvite,
                    s = (0, c.e7)([ae.Z], (function() {
                        return ae.Z.useReducedMotion
                    })),
                    d = (0,
                        Z.T)(null != n ? n : null, null != t ? t : ""),
                    f = Lt(i.useState(o && !At.ZP.disableInviteWithTextChannelActivityLaunch), 2),
                    v = f[0],
                    p = f[1],
                    h = (0, L.F)(n);
                i.useEffect((function() {
                    j.w1({
                        guildId: n
                    });
                    var e;
                    l(null !== (e = (0, L.d)({
                        guildId: n
                    })) && void 0 !== e ? e : void 0)
                }), [n, l]);
                var m, y, g = null == d ? void 0 : d.activity.activity_preview_video_asset_id,
                    b = null != g ? (0, R.Z)(null !== (m = null == d ? void 0 : d.application.id) && void 0 !== m ? m : "", g) : null,
                    I = (0, V.Z)({
                        applicationId: null !== (y = null == d ? void 0 : d.application.id) && void 0 !== y ? y : "",
                        size: 1024,
                        names: Vt
                    }).url,
                    E = (0, c.e7)([oe.Z], (function() {
                        return oe.Z.getGuild(n)
                    })),
                    x = (0, c.e7)([O.Z, Nt.Z], (function() {
                        return O.Z.getChannel(Nt.Z.getChannelId())
                    })),
                    T = kt(null != n ? n : void 0);
                if (null == (null == d ? void 0 : d.application) || null == E) return null;
                var C = null == (null == x ? void 0 : x.name) || "" === (null == x ? void 0 : x.name) ? W.Z.Messages.EMBEDDED_ACTIVITIES_FALLBACK_CHANNEL_NAME : "#".concat(x.name);
                return (0, r.jsxs)(u.Scroller, {
                    className: Mt().scroll,
                    children: [null != b || null != I ? (0, r.jsxs)(Dt.Z, {
                        aspectRatio: 16 / 9,
                        className: Mt().imageContainer,
                        children: [(0, r.jsx)(w.Z, {
                            className: Mt().video,
                            src: b,
                            loop: !0,
                            autoPlay: !s,
                            poster: I,
                            muted: !0
                        }), ")"]
                    }) : null, (0, r.jsxs)("div", {
                        className: Mt().descriptionArea,
                        children: [(0, r.jsx)(u.Heading, {
                            variant: "heading-xl/semibold",
                            children: null == d ? void 0 : d.application.name
                        }), (0, r.jsx)(u.Text, {
                            className: Mt().descriptionAreaSubtext,
                            variant: "text-md/normal",
                            children: null == d ? void 0 : d.application.description
                        })]
                    }), (0, r.jsx)(u.Select, {
                        placeholder: W.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
                        optionClassName: Mt().option,
                        options: h,
                        isSelected: function(e) {
                            return e.channel.id === a
                        },
                        select: function(e) {
                            var t = e.channel;
                            return l(t.id)
                        },
                        serialize: function(e) {
                            return e.channel.id
                        },
                        renderOptionValue: function() {
                            var e = h.find((function(e) {
                                return e.value.channel.id === a
                            }));
                            return null == e ? null : (0, r.jsx)(F.O, {
                                channel: e.value.channel,
                                users: e.value.users
                            })
                        },
                        renderOptionLabel: function(e) {
                            var t = e.value,
                                n = t.channel,
                                i = t.users;
                            return (0, r.jsx)(F.O, {
                                channel: n,
                                users: i
                            })
                        }
                    }), T && o ? (0, r.jsxs)(u.Clickable, {
                        className: Mt().checkboxContainer,
                        onClick: function() {
                            var e = !v;
                            Ot.ZP.updatedUnsyncedSettings({
                                disableInviteWithTextChannelActivityLaunch: !e
                            });
                            p(e)
                        },
                        children: [(0, r.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            className: Mt().checkbox,
                            value: v,
                            displayOnly: !0
                        }), (0, r.jsxs)(u.Text, {
                            variant: "text-sm/normal",
                            children: [W.Z.Messages.EMBEDDED_ACTIVITIES_SEND_ACTIVITY_INVITE, " ", (0, r.jsx)("strong", {
                                children: C
                            })]
                        })]
                    }) : null]
                })
            }

            function Ht(e) {
                var t, n, i = e.applicationId,
                    a = e.guildId,
                    l = e.locationObject,
                    o = e.onBack,
                    s = e.onClose,
                    d = e.selectedChannelId,
                    f = e.enableSelectedTextChannelInvite,
                    p = (0, v.Z)(S.Z.ACTIVITY_CHANNEL_SELECTOR),
                    h = p.AnalyticsLocationProvider,
                    m = p.analyticsLocations,
                    y = (0, Z.T)(null != a ? a : null, null != i ? i : null),
                    g = (0, k.Z)(),
                    b = (0, c.e7)([O.Z, Nt.Z], (function() {
                        return O.Z.getChannel(Nt.Z.getChannelId())
                    })),
                    I = (0, c.e7)([At.ZP], (function() {
                        return f && !At.ZP.disableInviteWithTextChannelActivityLaunch
                    })),
                    E = (0, c.e7)([ze.ZP], (function() {
                        return null != d && "" !== d && ze.ZP.getEmbeddedActivitiesForChannel(d).some((function(e) {
                            return e.application_id === i
                        }))
                    })),
                    x = kt(a),
                    T = (n = (t = function() {
                        return Rt(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return null == d || "" === d || null == y || null == a || "" === a ? [2] : [4, (0, M.Z)({
                                        activityItem: y,
                                        currentActivity: g,
                                        locationObject: l,
                                        channelId: d,
                                        guildId: a,
                                        embeddedActivitiesManager: H.Z,
                                        analyticsLocations: m
                                    })];
                                case 1:
                                    if (!e.sent()) return [3, 3];
                                    s();
                                    return null != b && x && I ? [4, j.sN({
                                        activityChannelId: d,
                                        invitedChannelId: b.id,
                                        applicationId: y.application.id,
                                        location: Je.Sbl.ACTIVITY_SHELF
                                    })] : [3, 3];
                                case 2:
                                    e.sent();
                                    e.label = 3;
                                case 3:
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(r, i) {
                            var a = t.apply(e, n);

                            function l(e) {
                                Pt(a, r, i, l, o, "next", e)
                            }

                            function o(e) {
                                Pt(a, r, i, l, o, "throw", e)
                            }
                            l(void 0)
                        }))
                    }), function() {
                        return n.apply(this, arguments)
                    });
                return (0, r.jsx)(h, {
                    children: (0, r.jsxs)("div", {
                        className: Mt().footerContainer,
                        children: [(0, r.jsx)(u.Clickable, {
                            onClick: o,
                            className: Mt().backToBrowse,
                            children: (0,
                                r.jsx)(u.Text, {
                                color: "header-secondary",
                                variant: "text-md/normal",
                                children: W.Z.Messages.BACK
                            })
                        }), null == d ? (0, r.jsx)("div", {}) : (0, r.jsx)(u.Button, {
                            className: Mt().launchButton,
                            onClick: T,
                            color: E ? u.Button.Colors.GREEN : void 0,
                            fullWidth: !0,
                            children: E ? W.Z.Messages.EMBEDDED_ACTIVITIES_JOIN : W.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH
                        })]
                    })
                })
            }
            var Ft = n(190186),
                Ut = n(122012),
                Yt = n(495536),
                Wt = n.n(Yt);

            function Gt() {
                var e = (0, C.cj)([x.Z], (function() {
                        return {
                            activityUrlOverride: x.Z.getActivityUrlOverride(),
                            useActivityUrlOverride: x.Z.getUseActivityUrlOverride(),
                            filter: x.Z.getFilter()
                        }
                    }), []),
                    t = e.activityUrlOverride,
                    n = e.useActivityUrlOverride,
                    i = e.filter;
                return (0, r.jsxs)("div", {
                    className: Wt().container,
                    children: [(0, r.jsx)(u.Checkbox, {
                        type: u.Checkbox.Types.INVERTED,
                        className: Wt().checkbox,
                        value: n,
                        onClick: Ut.Y$,
                        children: (0, r.jsx)(u.Text, {
                            variant: "text-md/semibold",
                            children: W.Z.Messages.EMBEDDED_ACTIVITIES_USE_ACTIVITY_URL_OVERRIDE
                        })
                    }), (0, r.jsx)(u.FormItem, {
                        className: Wt().urlOverride,
                        title: W.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_URL_OVERRIDE,
                        children: (0, r.jsx)(u.TextInput, {
                            disabled: !n,
                            value: null != t ? t : void 0,
                            onChange: Ut.jS,
                            placeholder: "http://localhost:3000"
                        })
                    }), (0, r.jsx)("div", {
                        children: (0, r.jsx)(Ft.Z, {
                            className: Wt().searchBar,
                            query: i,
                            onChange: Ut.a8,
                            onClear: function() {
                                Ut.a8("")
                            }
                        })
                    })]
                })
            }
            var zt = n(843914),
                Jt = n.n(zt),
                $t = n(476763),
                Kt = n.n($t),
                qt = n(601875),
                Xt = n.n(qt);

            function Qt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function en(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function tn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        en(e, t, n[t])
                    }))
                }
                return e
            }

            function nn(e, t) {
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

            function rn(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function an(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            l = !0,
                            o = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Qt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Qt(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ln = (0, E.Mg)(s.Z.ACTIVITY_SHELF_MODAL_MODAL_PADDING),
                on = (0, E.Mg)(s.Z.ACTIVITY_SHELF_MODAL_MODAL_WIDTH),
                cn = (0, E.Mg)(s.Z.ACTIVITY_SHELF_MODAL_MODAL_MIN_WIDTH),
                sn = (0, E.Mg)(s.Z.ACTIVITY_SHELF_MODAL_MODAL_MAX_WIDTH),
                un = (0, E.Mg)(s.Z.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT) + ln + (0,
                    E.Mg)(s.Z.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT);

            function dn(e) {
                var t = e.channel,
                    n = e.guildId,
                    a = e.locationObject,
                    s = e.onClose,
                    f = e.initialSelectedApplicationId,
                    m = void 0 === f ? void 0 : f,
                    E = e.initialSlide,
                    C = void 0 === E ? at.ag.DIRECTORY : E,
                    S = e.enableSelectedTextChannelInvite,
                    O = e.analyticsLocations,
                    A = rn(e, ["channel", "guildId", "locationObject", "onClose", "initialSelectedApplicationId", "initialSlide", "enableSelectedTextChannelInvite", "analyticsLocations"]),
                    _ = T._.useExperiment({
                        location: "0d4108_1"
                    }, {
                        autoTrackExposure: !0
                    }).enableBigShelf,
                    N = (0, h.b)().width,
                    D = i.useMemo((function() {
                        return _ ? Math.max(cn, Math.min(N - 2 * ln, sn)) : on
                    }), [N, _]),
                    w = (0, c.e7)([x.Z], (function() {
                        return x.Z.getIsEnabled()
                    }), []),
                    M = (0, v.Z)(O).AnalyticsLocationProvider,
                    Z = an(i.useState(C), 2),
                    P = Z[0],
                    L = Z[1],
                    R = (0, d.Z)(P),
                    k = an(i.useState(null), 2),
                    V = k[0],
                    B = k[1],
                    H = i.useRef(null),
                    F = an(i.useState(m), 2),
                    U = F[0],
                    Y = F[1],
                    G = an(i.useState(void 0), 2),
                    z = G[0],
                    J = G[1],
                    $ = an((0, p.Z)(null == U ? [] : [U]), 1)[0];
                i.useEffect((function() {
                    if (P === at.ag.DIRECTORY && null != R && R !== at.ag.DIRECTORY && null != V) {
                        var e;
                        null === (e = H.current) || void 0 === e || e.scrollTo({
                            top: V
                        })
                    }
                }), [V, R, P]);
                var K = i.useCallback((function(e) {
                        var t, n = e.applicationId,
                            r = null === (t = H.current) || void 0 === t ? void 0 : t.scrollTop;
                        null != r && B(r);
                        Y(n);
                        L(at.ag.SELECT_CHANNEL)
                    }), []),
                    q = i.useCallback((function(e) {
                        var t = e.applicationId;
                        Y(t);
                        L(at.ag.DETAIL_PAGE)
                    }), []);
                i.useEffect((function() {
                    b.default.track(Je.rMx.OPEN_MODAL, {
                        type: "Activity Shelf",
                        channel_id: null == t ? void 0 : t.id,
                        guild_id: n
                    })
                }), [t, n]);
                i.useEffect((function() {
                    I.S.subscribe(Je.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, K);
                    return function() {
                        I.S.unsubscribe(Je.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, K)
                    }
                }), [K]);
                i.useEffect((function() {
                    I.S.subscribe(Je.CkL.SHOW_ACTIVITY_DETAILS, q);
                    return function() {
                        I.S.unsubscribe(Je.CkL.SHOW_ACTIVITY_DETAILS, q)
                    }
                }), [q]);
                i.useEffect((function() {
                    j.ux()
                }), []);
                var X = function() {
                        L(at.ag.DIRECTORY)
                    },
                    Q = {
                        application_id: U,
                        source_section: a.section,
                        impression_group: o.AG.ACTIVITY_SHELF_FLOW
                    };
                return (0,
                    r.jsx)(M, {
                    children: (0, r.jsxs)(u.ModalRoot, nn(tn({
                        className: l()(Jt().root, en({}, Jt().rootBigShelf, _)),
                        "aria-label": W.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
                    }, A), {
                        children: [(0, r.jsx)("img", {
                            alt: W.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
                            src: Kt(),
                            className: Jt().shelfTopBackground
                        }), (0, r.jsx)("img", {
                            alt: W.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
                            src: Xt(),
                            className: Jt().shelfTopForeground
                        }), (0, r.jsxs)(u.ModalHeader, {
                            separator: !1,
                            justify: y.Z.Justify.BETWEEN,
                            className: l()(Jt().modalHeader, en({}, Jt().modalHeaderBigShelf, _)),
                            children: [(0, r.jsxs)("div", {
                                className: Jt().headerTextContainer,
                                children: [P === at.ag.DETAIL_PAGE ? null == $ ? null : (0, r.jsxs)("div", {
                                    className: Jt().activityShelfTitle,
                                    children: [(0, r.jsx)(u.Heading, {
                                        variant: "heading-xl/extrabold",
                                        children: $.name
                                    }), (0, r.jsxs)(u.Clickable, {
                                        className: Jt().headerBackButton,
                                        onClick: X,
                                        children: [(0, r.jsx)(g.Z, {}), (0, r.jsx)(u.Text, {
                                            variant: "text-sm/semibold",
                                            children: W.Z.Messages.BACK
                                        })]
                                    })]
                                }) : (0, r.jsx)("div", {
                                    className: Jt().activityShelfTitle,
                                    children: (0, r.jsx)(u.Heading, {
                                        variant: "heading-xl/extrabold",
                                        children: W.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
                                    })
                                }), P === at.ag.DIRECTORY ? (0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    children: w ? W.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_SHELF_SUBTITLE : W.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_SUBTITLE
                                }) : null]
                            }), (0, r.jsx)(u.ModalCloseButton, {
                                className: Jt().modalCloseButton,
                                onClick: s
                            })]
                        }), P === at.ag.DIRECTORY && w ? (0, r.jsx)(Gt, {}) : null, (0, r.jsx)("div", {
                            className: Jt().modalDivider
                        }), (0, r.jsxs)(u.Slides, {
                            activeSlide: P,
                            centered: !1,
                            width: D,
                            children: [(0, r.jsx)(u.Slide, {
                                id: at.ag.DIRECTORY,
                                impressionName: o.zs.ACTIVITY_SHELF,
                                impressionProperties: {
                                    source_section: a.section,
                                    impression_group: o.AG.ACTIVITY_SHELF_FLOW
                                },
                                children: (0, r.jsx)(fn, {
                                    slide: P,
                                    children: (0, r.jsx)(St, {
                                        scrollerRef: H,
                                        channel: t,
                                        guildId: n,
                                        locationObject: a,
                                        onClose: s
                                    })
                                })
                            }), (0, r.jsx)(u.Slide, {
                                id: at.ag.SELECT_CHANNEL,
                                impressionName: o.zs.ACTIVITY_SHELF_SELECT_CHANNEL,
                                impressionProperties: {
                                    source_section: a.section,
                                    impression_group: o.AG.ACTIVITY_SHELF_FLOW,
                                    application_id: U
                                },
                                children: (0, r.jsx)(fn, {
                                    slide: P,
                                    children: (0, r.jsx)(Bt, {
                                        applicationId: U,
                                        selectedChannelId: z,
                                        setSelectedChannelId: J,
                                        guildId: n,
                                        enableSelectedTextChannelInvite: S
                                    })
                                })
                            }), (0, r.jsx)(u.Slide, {
                                id: at.ag.DETAIL_PAGE,
                                impressionName: o.zs.ACTIVITY_DETAILS,
                                impressionProperties: Q,
                                children: (0, r.jsx)(fn, {
                                    slide: P,
                                    children: null == U ? null : (0, r.jsx)(te, {
                                        applicationId: U,
                                        channelId: null == t ? void 0 : t.id,
                                        guildId: n,
                                        onActivityLaunch: s
                                    })
                                })
                            })]
                        }), function() {
                            switch (P) {
                                case at.ag.SELECT_CHANNEL:
                                    return (0, r.jsxs)(r.Fragment, {
                                        children: [(0, r.jsx)("div", {
                                            className: Jt().modalDivider
                                        }), (0, r.jsx)(u.ModalFooter, {
                                            separator: !1,
                                            className: Jt().footer,
                                            children: (0, r.jsx)(Ht, {
                                                onBack: X,
                                                onClose: s,
                                                guildId: n,
                                                applicationId: U,
                                                locationObject: a,
                                                selectedChannelId: z,
                                                enableSelectedTextChannelInvite: S
                                            })
                                        })]
                                    });
                                case at.ag.DETAIL_PAGE:
                                case at.ag.DIRECTORY:
                                default:
                                    return null
                            }
                        }()]
                    }))
                })
            }
            var fn = function(e) {
                var t, n = e.children,
                    a = e.slide,
                    o = (0, c.e7)([x.Z], (function() {
                        return x.Z.getIsEnabled()
                    }), []),
                    s = i.useContext(f.ZP),
                    u = (0, c.e7)([m.Z], (function() {
                        return m.Z.windowSize(s.windowId).height
                    }), [s.windowId]);
                return (0, r.jsx)("div", {
                    className: l()(Jt().slideContentOuterContainerSquished, (t = {}, en(t, Jt().slideContentOuterContainerSquishedWithDev, a === at.ag.DIRECTORY && o), en(t, Jt().slideContentOuterContainerTall, a === at.ag.DIRECTORY && u > un), en(t, Jt().slideContentOuterContainerTallWithDev, a === at.ag.DIRECTORY && u > un && o), en(t, Jt().slideContentOuterContainerNoMetaTextSquished, a === at.ag.SELECT_CHANNEL), en(t, Jt().slideContentOuterContainerNoMetaTextTall, a === at.ag.SELECT_CHANNEL && u > un), en(t, Jt().slideContentOuterContainerNoMetaTextNoFooterSquished, a === at.ag.DETAIL_PAGE), en(t, Jt().slideContentOuterContainerNoMetaTextNoFooterTall, a === at.ag.DETAIL_PAGE && u > un), t)),
                    children: n
                })
            }
        },
        277418: (e, t, n) => {
            "use strict";
            n.d(t, {
                b: () => l
            });
            var r = n(667294);

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function a(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            l = !0,
                            o = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return a
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

            function l() {
                var e, t, n = a(r.useState({
                        width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
                        height: null !== (t = window.innerHeight) && void 0 !== t ? t : 1080
                    }), 2),
                    i = n[0],
                    l = n[1];
                r.useLayoutEffect((function() {
                    var e = function() {
                        var e = window.innerWidth,
                            t = window.innerHeight;
                        l({
                            width: e,
                            height: t
                        })
                    };
                    e();
                    window.addEventListener("resize", e);
                    return function() {
                        return window.removeEventListener("resize", e)
                    }
                }), []);
                return i
            }
        },
        993137: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var r = n(785893),
                i = (n(667294), n(294184)),
                a = n.n(i),
                l = n(831222),
                o = n.n(l);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        c(e, t, n[t])
                    }))
                }
                return e
            }
            const u = function(e) {
                var t = e.aspectRatio,
                    n = e.style,
                    i = e.className,
                    l = e.children;
                return (0, r.jsx)("div", {
                    className: a()(o().outer, i),
                    style: s({
                        paddingTop: "".concat(1 / t * 100, "%")
                    }, n),
                    children: (0, r.jsx)("div", {
                        className: o().inner,
                        children: l
                    })
                })
            }
        },
        294162: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => E
            });
            var r = n(785893),
                i = n(667294),
                a = n(294184),
                l = n.n(a),
                o = n(882723),
                c = n(722406),
                s = n(796938),
                u = n(456890),
                d = n.n(u),
                f = n(381357),
                v = n.n(f);

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function m(e, t) {
                return !t || "object" !== g(t) && "function" != typeof t ? function(e) {
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
            var g = function(e) {
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
                    var n, r = h(e);
                    if (t) {
                        var i = h(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return m(this, n)
                }
            }
            var I = function(e) {
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
                }(n, e);
                var t = b(n);

                function n() {
                    p(this, n);
                    var e;
                    (e = t.apply(this, arguments)).defaultRenderUser = function(t, n, i, a) {
                        var s = e.props,
                            u = s.onClick,
                            f = s.size,
                            p = s.guildId,
                            h = t instanceof c.Z ? t : null != t ? t.user : null;
                        return null == h ? (0, r.jsx)("div", {
                            className: l()(d().emptyUser, n)
                        }, i) : (0, r.jsx)(o.Avatar, {
                            tabIndex: 0,
                            src: h.getAvatarURL(p, (0, o.getAvatarSize)(f)),
                            size: f,
                            "aria-label": h.username,
                            className: l()(n, v().cursorPointer, d().avatarSize),
                            onClick: function(t) {
                                return null != u ? u(t, h, e._ref) : null
                            }
                        }, h.id)
                    };
                    return e
                }
                var i = n.prototype;
                i.renderUsers = function() {
                    for (var e = this.props, t = e.users, n = e.max, r = e.renderUser, i = void 0 === r ? this.defaultRenderUser : r, a = e.renderMoreUsers, l = [], o = t.length === n ? t.length : n - 1, c = 0; c < o && c < t.length;) {
                        var s = c === t.length - 1;
                        l.push(i(t[c] || null, s ? null : d().avatarMasked, "user-".concat(c), s));
                        c++
                    }
                    if (c < t.length) {
                        var u = Math.min(t.length - c, 99);
                        l.push(a("+".concat(u), d().moreUsers, "more-users", u))
                    }
                    return l
                };
                i.renderIcon = function() {
                    return this.props.icon ? (0, r.jsx)("div", {
                        className: d().iconContainer,
                        children: (0, r.jsx)(s.Z, {
                            width: 16,
                            height: 16,
                            foreground: d().foreground,
                            className: d().icon
                        })
                    }) : null
                };
                i.render = function() {
                    var e = this,
                        t = this.props.className;
                    return (0, r.jsxs)("div", {
                        className: l()(t, d().container),
                        ref: function(t) {
                            return e._ref = t
                        },
                        children: [this.renderIcon(), this.renderUsers()]
                    })
                };
                return n
            }(i.PureComponent);
            I.defaultProps = {
                max: 10,
                renderMoreUsers: function(e, t, n) {
                    return (0, r.jsx)("div", {
                        className: t,
                        children: e
                    }, n)
                },
                size: o.AvatarSizes.SIZE_24
            };
            const E = I
        },
        363582: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                i = (n(667294), n(633878));

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
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

            function o(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function c(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    c = e.height,
                    s = void 0 === c ? 24 : c,
                    u = e.color,
                    d = void 0 === u ? "currentColor" : u,
                    f = e.foreground,
                    v = o(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(v)), {
                    width: n,
                    height: s,
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        className: f,
                        fill: d,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                    }), (0, r.jsx)("path", {
                        className: f,
                        fill: d,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                    }), (0, r.jsx)("path", {
                        className: f,
                        fill: d,
                        d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                    }), (0, r.jsx)("path", {
                        className: f,
                        fill: d,
                        d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                    })]
                }))
            }
        },
        156146: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n(785893);
            n(667294);

            function i(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    a = void 0 === i ? 24 : i,
                    l = e.color,
                    o = void 0 === l ? "currentColor" : l,
                    c = e.className,
                    s = e.foreground;
                return (0, r.jsx)("svg", {
                    className: c,
                    width: n,
                    height: a,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        d: "M10 8.26667V4L3 11.4667L10 18.9333V14.56C15 14.56 18.5 16.2667 21 20C20 14.6667 17 9.33333 10 8.26667Z",
                        className: s,
                        fill: o
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=c52d64141ffed6da52b7.js.map