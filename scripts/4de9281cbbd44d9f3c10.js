(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [94811], {
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
            var u = n(884043),
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
        825389: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => sn
            });
            var r = n(785893),
                i = n(667294),
                a = n(294184),
                l = n.n(a),
                o = n(571657),
                c = n(202351),
                s = n(142643),
                u = n(70418),
                d = n(634698),
                f = n(26468),
                v = n(396043),
                p = n(930114),
                h = n(19585),
                m = n(28661),
                y = n(277418),
                g = n(61209),
                b = n(901654),
                I = n(107364),
                E = n(249697),
                x = n(652591),
                j = n(930948),
                T = n(421281),
                C = n(560213),
                S = n(873247),
                A = n(211490),
                O = n(318715),
                _ = n(153686),
                N = n(840545),
                D = n(816132),
                w = n(538101),
                M = n(810939),
                Z = n(786170),
                L = n(706148),
                P = n(663772),
                R = n(77147),
                k = n(798981),
                V = n(9018),
                B = n(483535),
                H = n(92585),
                F = n(650875),
                Y = n(209238),
                U = n(968257),
                W = n(779099),
                G = n(638273),
                z = n(473708),
                J = n(976145),
                $ = n.n(J);

            function K(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function q(e, t, n, r, i, a, l) {
                try {
                    var o = e[a](l),
                        c = o.value
                } catch (e) {
                    n(e);
                    return
                }
                o.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function X(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);

                        function l(e) {
                            q(a, r, i, l, o, "next", e)
                        }

                        function o(e) {
                            q(a, r, i, l, o, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function Q(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ee(e, t) {
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

            function te(e, t) {
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
                    if ("string" == typeof e) return K(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return K(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ne = function(e, t) {
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
                                if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r),
                                        0) : r.next) && !(i = i.call(r, a[1])).done) return i;
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

            function re(e) {
                var t = e.applicationId,
                    n = e.guildId,
                    a = e.channelId,
                    l = e.onActivityLaunch,
                    o = (0, h.Z)(_.Z.ACTIVITY_SHELF_ACTIVITY_DETAILS).AnalyticsLocationProvider;
                i.useEffect((function() {
                    (0, S.w1)({
                        guildId: n
                    })
                }), [n]);
                var c = (0, H.Z)({
                        applicationId: null != t ? t : "",
                        size: 2048
                    }),
                    s = (0, P.T)(null != n ? n : null, t);
                if (null == s) return null;
                var d, f = null != s.activity.activity_preview_video_asset_id ? (0, V.Z)(t, s.activity.activity_preview_video_asset_id) : null,
                    v = G.o[t],
                    p = null != (null == v ? void 0 : v.playersSuggestionMin) && null != (null == v ? void 0 : v.playersSuggestionMax) ? "".concat(v.playersSuggestionMin, " - ").concat(v.playersSuggestionMax) : void 0;
                return (0, r.jsx)(o, {
                    children: (0, r.jsx)("div", {
                        className: $().scrollContainer,
                        children: (0, r.jsxs)(u.Scroller, {
                            className: $().scroller,
                            children: [(0, r.jsx)("div", {
                                className: $().launcherOuterContainer,
                                children: (0, r.jsx)(ie, {
                                    activityItem: s,
                                    onLaunch: l,
                                    channelId: a
                                })
                            }), (0, r.jsxs)("div", {
                                className: $().activityDetailsContainer,
                                children: [(0, r.jsxs)("div", {
                                    children: [null != f ? (0, r.jsx)("div", {
                                        className: $().heroVideoContainer,
                                        children: (0, r.jsx)(Z.Z, {
                                            loop: !0,
                                            autoPlay: !0,
                                            muted: !0,
                                            className: $().heroVideo,
                                            src: f,
                                            poster: c.url
                                        })
                                    }) : null, (0, r.jsx)("div", {
                                        className: $().detailsTitle,
                                        children: (0, r.jsx)(u.Heading, {
                                            variant: "heading-xxl/bold",
                                            children: s.application.name
                                        })
                                    }), (0, r.jsxs)("div", {
                                        className: $().detailsDetails,
                                        children: [null != p ? (0, r.jsxs)("div", {
                                            className: $().detailItem,
                                            children: [(0, r.jsx)(D.Z, {
                                                width: 16,
                                                height: 16
                                            }), (0, r.jsx)(u.Text, {
                                                variant: "text-xs/semibold",
                                                className: $().detailItemText,
                                                children: z.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format({
                                                    nPlayers: p
                                                })
                                            })]
                                        }) : null, null != (null == v ? void 0 : v.timeSuggestionMinutes) ? (0, r.jsxs)("div", {
                                            className: $().detailItem,
                                            children: [(0, r.jsx)(N.Z, {
                                                width: 16,
                                                height: 16
                                            }), (0, r.jsx)(u.Text, {
                                                variant: "text-xs/semibold",
                                                className: $().detailItemText,
                                                children: z.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format({
                                                    nMinutes: v.timeSuggestionMinutes
                                                })
                                            })]
                                        }) : null, (0, r.jsxs)("div", {
                                            className: $().detailItem,
                                            children: [(0, r.jsx)(M.Z, {
                                                width: 16,
                                                height: 16
                                            }), (0, r.jsx)(u.Text, {
                                                variant: "text-xs/semibold",
                                                className: $().detailItemText,
                                                children: s.application.tags.slice(0, 3).join(", ")
                                            })]
                                        })]
                                    })]
                                }), (0, r.jsx)(u.Heading, {
                                    variant: "heading-lg/medium",
                                    className: $().detailsDescription,
                                    children: s.application.description
                                }), (0, r.jsx)("div", {
                                    className: $().divider
                                }), (0, r.jsx)("div", {
                                    className: $().imagesContainer,
                                    children: (null !== (d = null == v ? void 0 : v.gameplayImageUrls) && void 0 !== d ? d : []).map((function(e) {
                                        return (0, r.jsx)("img", {
                                            src: e,
                                            alt: z.Z.Messages.EMBEDDED_ACTIVITIES_GAMEPLAY_ALT.format({
                                                activityName: s.application.name
                                            }),
                                            className: $().activityImage
                                        }, e)
                                    }))
                                })]
                            })]
                        })
                    })
                })
            }

            function ie(e) {
                var t, a, l = e.activityItem,
                    o = e.onLaunch,
                    c = e.channelId,
                    s = (0, H.Z)({
                        applicationId: l.application.id,
                        size: 2048
                    }),
                    d = (0, h.Z)().analyticsLocations,
                    f = (0, B.Z)(),
                    v = te(i.useState(null !== (t = (0, R.$)({
                        allowGdmActivityChannelSuggestion: !0
                    })) && void 0 !== t ? t : void 0), 2),
                    p = v[0],
                    m = v[1],
                    y = te(i.useState(null !== (a = (0, k.d)({
                        guildId: p,
                        allowGdmActivityChannelSuggestion: !0
                    })) && void 0 !== a ? a : void 0), 2),
                    b = y[0],
                    I = y[1],
                    E = (0, O.ZP)([g.Z], (function() {
                        return g.Z.getChannel(b)
                    }), [b]),
                    x = (0, R.W)(),
                    j = (0, k.F)(p),
                    T = i.useCallback((function() {
                        null != b && (0, L.Z)({
                            activityItem: l,
                            currentActivity: f,
                            channelId: b,
                            guildId: p,
                            embeddedActivitiesManager: Y.Z,
                            analyticsLocations: d
                        }).then(o)
                    }), [l, d, f, o, b, p]),
                    C = i.useCallback((function() {
                        (0,
                            u.openModalLazy)(X((function() {
                            var e, t;
                            return ne(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(86502), n.e(35521), n.e(76156)]).then(n.bind(n, 135521))];
                                    case 1:
                                        e = i.sent(), t = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(t, ee(function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        r = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                    }))));
                                                    r.forEach((function(t) {
                                                        Q(e, t, n[t])
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
                    S = null == E || null != E.guild_id && (null == p || null == b || !x.some((function(e) {
                        return e.value === p
                    })) || !j.some((function(e) {
                        return e.value.channel.id === b
                    })));
                return (0, r.jsxs)("div", {
                    className: $().launcherInnerContainer,
                    children: [(0, r.jsx)(F.Z, {
                        applicationName: l.application.name,
                        imageBackground: s,
                        imageClassName: $().launchImage,
                        imageNotFoundClassName: $().brokenLaunchImage
                    }), (0, r.jsx)(u.Text, {
                        variant: "text-md/medium",
                        children: z.Z.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE
                    }), null == c ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(u.Select, {
                            placeholder: z.Z.Messages.GUILD_SELECT,
                            optionClassName: $().option,
                            options: x,
                            renderOptionValue: function(e) {
                                var t = e.find((function(e) {
                                    return e.value === p
                                }));
                                return null == t ? null : (0, r.jsx)(W.m, {
                                    guildId: t.value
                                })
                            },
                            renderOptionLabel: function(e) {
                                var t = e.value;
                                return (0, r.jsx)(W.m, {
                                    guildId: t
                                })
                            },
                            isSelected: function(e) {
                                return e === p
                            },
                            select: function(e) {
                                m(e);
                                var t;
                                I(null !== (t = (0, k.d)({
                                    guildId: e
                                })) && void 0 !== t ? t : void 0)
                            },
                            serialize: function(e) {
                                return e
                            }
                        }), (0, r.jsx)(u.Select, {
                            placeholder: z.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
                            optionClassName: $().option,
                            options: j,
                            isSelected: function(e) {
                                return e.channel.id === b
                            },
                            select: function(e) {
                                var t = e.channel;
                                return I(t.id)
                            },
                            serialize: function(e) {
                                return e.channel.id
                            },
                            renderOptionValue: function() {
                                var e = j.find((function(e) {
                                    return e.value.channel.id === b
                                }));
                                return null == e ? null : (0, r.jsx)(U.O, {
                                    channel: e.value.channel,
                                    users: e.value.users
                                })
                            },
                            renderOptionLabel: function(e) {
                                var t = e.value,
                                    n = t.channel,
                                    i = t.users;
                                return (0, r.jsx)(U.O, {
                                    channel: n,
                                    users: i
                                })
                            }
                        }), (0, r.jsx)(u.Button, {
                            fullWidth: !0,
                            disabled: S,
                            onClick: T,
                            children: z.Z.Messages.START
                        }), (0, r.jsx)("div", {
                            className: $().divider
                        }), (0, r.jsx)(u.Button, {
                            fullWidth: !0,
                            color: u.Button.Colors.PRIMARY,
                            onClick: C,
                            children: z.Z.Messages.SHARE
                        })]
                    }) : (0, r.jsxs)("div", {
                        className: $().singleRowShareContainer,
                        children: [(0, r.jsx)(u.Button, {
                            fullWidth: !0,
                            disabled: S,
                            onClick: T,
                            children: z.Z.Messages.START
                        }), (0, r.jsx)(u.Button, {
                            className: $().shareIconButton,
                            color: u.Button.Colors.PRIMARY,
                            onClick: C,
                            children: (0, r.jsx)(w.Z, {})
                        })]
                    })]
                })
            }
            var ae = n(473727),
                le = n(712861),
                oe = n(316878),
                ce = n(64234),
                se = n(567403),
                ue = n(473903),
                de = n(966225),
                fe = n(548586),
                ve = n(901750),
                pe = n(365724),
                he = n(768560),
                me = n(398441),
                ye = n(436771),
                ge = n(971402),
                be = n(601278),
                Ie = n(968449),
                Ee = n(96606),
                xe = n(72580),
                je = n(773148),
                Te = n(482779),
                Ce = n(565957),
                Se = n(538221),
                Ae = n.n(Se);

            function Oe(e) {
                var t = e.action,
                    n = e.onClick,
                    i = t === Ce.J.JOIN ? z.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY : z.Z.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY,
                    a = t === Ce.J.JOIN ? u.Button.Colors.PRIMARY : u.Button.Colors.RED;
                return (0, r.jsx)("div", {
                    className: Ae().activityOverlay,
                    children: (0, r.jsx)(u.Button, {
                        className: Ae().actionButton,
                        onClick: n,
                        size: u.Button.Sizes.MEDIUM,
                        color: a,
                        children: i
                    })
                })
            }
            var _e = n(652221),
                Ne = n(137359),
                De = n.n(Ne),
                we = n(659830),
                Me = n.n(we);

            function Ze(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Le(e, t, n, r, i, a, l) {
                try {
                    var o = e[a](l),
                        c = o.value
                } catch (e) {
                    n(e);
                    return
                }
                o.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function Pe(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);

                        function l(e) {
                            Le(a, r, i, l, o, "next", e)
                        }

                        function o(e) {
                            Le(a, r, i, l, o, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function Re(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ke(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Re(e, t, n[t])
                    }))
                }
                return e
            }

            function Ve(e, t) {
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
                    if ("string" == typeof e) return Ze(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ze(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Be = function(e, t) {
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
                                (r = 0,
                                    i) && (a = [2 & a[0], i.value]);
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

            function He(e) {
                var t = e.value,
                    n = e.icon;
                return (0, r.jsxs)(u.Text, {
                    className: De().activityTag,
                    color: "interactive-normal",
                    variant: "text-xs/semibold",
                    children: [(0, xe.lm)(n) ? (0, r.jsx)(n, {
                        className: De().icon,
                        backgroundColor: "interactive-normal"
                    }) : null, t]
                })
            }

            function Fe(e) {
                var t, n = e.activity,
                    i = e.application,
                    a = e.channel,
                    l = e.guildId,
                    o = e.large,
                    s = void 0 !== o && o,
                    d = null !== (t = null == n ? void 0 : n.connections) && void 0 !== t ? t : [],
                    f = (0, c.Wu)([ue.default], (function() {
                        return Array.from(d).map((function(e) {
                            var t = Ve(e, 1)[0];
                            return ue.default.getUser(t)
                        })).filter(xe.lm)
                    })),
                    v = je.ZP.getName(l, null == a ? void 0 : a.id, null == f ? void 0 : f[0]);
                v = (0, T.aF)(v, 15);
                if (null == n || 0 === f.length) {
                    var p, h = "".concat((0, Te.Z)(null !== (p = i.maxParticipants) && void 0 !== p ? p : 0));
                    if (s) {
                        var m;
                        h = null !== (m = i.description) && void 0 !== m ? m : ""
                    }
                    return (0, r.jsx)(u.Text, {
                        className: De().activitySubtitleText,
                        variant: "text-xs/normal",
                        color: "interactive-normal",
                        children: h
                    })
                }
                return (0, r.jsxs)("div", {
                    className: De().activitySubtitleText,
                    children: [(0, r.jsx)(u.Text, {
                        className: De().usersArePlayingText,
                        variant: "text-xs/normal",
                        children: f.length > 1 ? z.Z.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
                            username: v,
                            count: f.length - 1
                        }) : z.Z.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
                            username: v
                        })
                    }), (0, r.jsx)(Ee.Z, {
                        size: s ? Ee.u.SIZE_24 : Ee.u.SIZE_16,
                        guildId: l,
                        users: f,
                        max: 6
                    })]
                })
            }

            function Ye(e) {
                var t = e.activityItem,
                    a = e.channel,
                    o = e.guildId,
                    c = e.locationObject,
                    s = e.onActivityItemVisible,
                    d = e.onActivityItemSelected,
                    f = e.large,
                    v = void 0 !== f && f,
                    p = (0, Ce.Z)({
                        activityItem: t,
                        channel: a,
                        guildId: o,
                        locationObject: c,
                        onActivityItemVisible: s,
                        onActivityItemSelected: d,
                        embeddedActivitiesManager: Y.Z
                    }),
                    h = p.imageBackground,
                    m = p.videoUrl,
                    y = p.activityAction,
                    g = p.joinableEmbeddedApp,
                    b = p.onActivityItemSelected,
                    I = p.labelType,
                    E = p.staffReleasePhase,
                    x = t.application,
                    j = i.useCallback((function(e) {
                        return e && (null == s ? void 0 : s({
                            applicationId: t.application.id
                        }))
                    }), [t.application.id, s]),
                    T = (0, be.O)(j, .8, !0),
                    C = Ve(i.useState(!1), 2),
                    S = C[0],
                    A = C[1],
                    O = Ve(i.useState(S), 2),
                    _ = O[0],
                    N = O[1];
                i.useEffect((function() {
                    S && N(!0)
                }), [S]);
                var D, w, M = function() {
                        return A(!0)
                    },
                    L = function() {
                        return A(!1)
                    },
                    P = Ie.Sb.useSetting();
                return (0, r.jsxs)(u.Clickable, {
                    onClick: y === Ce.J.START ? b : void 0,
                    onContextMenu: P ? function(e) {
                        (0, ge.jW)(e, Pe((function() {
                            var e, t;
                            return Be(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, n.e(8388).then(n.bind(n, 308388))];
                                    case 1:
                                        e = i.sent(), t = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(t, ke({
                                                application: x
                                            }, e))
                                        }]
                                }
                            }))
                        })))
                    } : void 0,
                    className: l()(De().activityItem, (w = {}, Re(w, De().large, !0 === v), Re(w, De().disabled, y !== Ce.J.START), w)),
                    children: [(0, r.jsxs)("div", {
                        ref: T,
                        className: l()(De().activityImageContainer, Re({}, De().large, !0 === v)),
                        onMouseEnter: M,
                        onFocus: M,
                        onMouseLeave: L,
                        onBlur: L,
                        children: [(0, r.jsx)(F.Z, {
                            imageBackground: h,
                            applicationName: x.name,
                            imageClassName: l()(De().activityImage, Re({}, De().large, !0 === v)),
                            imageNotFoundClassName: De().brokenImageIconWrapper
                        }), null != m && _ && y === Ce.J.START ? (0, r.jsx)("div", {
                            className: l()(De().activityVideo, Re({}, De().videoFadeOut, !S)),
                            onAnimationEnd: function() {
                                return S ? null : N(!1)
                            },
                            children: (0, r.jsx)(Z.Z, {
                                className: De().activityVideo,
                                src: m,
                                loop: !0,
                                autoPlay: !0,
                                muted: !0
                            })
                        }) : null, y !== Ce.J.START ? (0, r.jsx)(Oe, {
                            action: y,
                            onClick: b
                        }) : null, (0, r.jsx)("div", {
                            className: De().overlayBadge,
                            children: (0, r.jsx)("div", {
                                className: De().badgeContainer,
                                children: (0, r.jsx)(_e.Z, {
                                    name: x.name,
                                    labelType: I
                                })
                            })
                        })]
                    }), (0, r.jsxs)("div", {
                        className: l()(De().activityTextContainer, Re({}, De().large, v)),
                        children: [v ? (0, r.jsx)(u.Text, {
                            className: De().activityMaxParticipantsLarge,
                            variant: "text-xs/normal",
                            color: "interactive-normal",
                            children: (0, Te.Z)(null !== (D = x.maxParticipants) && void 0 !== D ? D : 0)
                        }) : null, (0, r.jsxs)("div", {
                            className: De().activityName,
                            children: [(0, r.jsx)(u.Heading, {
                                className: De().activityTitleText,
                                variant: "heading-md/semibold",
                                color: "interactive-active",
                                children: x.name
                            }), null != E ? (0, r.jsx)(u.Tooltip, {
                                text: E,
                                children: function(e) {
                                    return (0, r.jsx)("img", ke({
                                        className: De().staffBadge,
                                        alt: E,
                                        src: Me()
                                    }, e))
                                }
                            }) : null]
                        }), (0, r.jsx)(Fe, {
                            activity: null == g ? void 0 : g.embeddedActivity,
                            application: x,
                            channel: a,
                            guildId: o,
                            large: v
                        }), (0, r.jsx)("div", {
                            className: De().activityTagsContainer,
                            children: x.tags.slice(0, 3).map((function(e) {
                                return (0, r.jsx)(He, {
                                    value: e
                                }, "activity-tag-".concat(x.id, "-").concat(e))
                            }))
                        })]
                    })]
                })
            }
            var Ue = n(136317),
                We = n(258104),
                Ge = n(2590),
                ze = n(510908),
                Je = n.n(ze);

            function $e(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Ke(e, t, n, r, i, a, l) {
                try {
                    var o = e[a](l),
                        c = o.value
                } catch (e) {
                    n(e);
                    return
                }
                o.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function qe(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);

                        function l(e) {
                            Ke(a, r, i, l, o, "next", e)
                        }

                        function o(e) {
                            Ke(a, r, i, l, o, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function Xe(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Qe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Xe(e, t, n[t])
                    }))
                }
                return e
            }

            function et(e, t) {
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
                    if ("string" == typeof e) return $e(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $e(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var tt = function(e, t) {
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

            function nt(e) {
                var t = e.activityItem,
                    a = e.channel,
                    o = e.guildId,
                    s = e.locationObject,
                    d = e.onActivityItemVisible,
                    f = e.onActivityItemSelected,
                    v = (0, Ce.Z)({
                        activityItem: t,
                        channel: a,
                        guildId: o,
                        locationObject: s,
                        onActivityItemVisible: d,
                        onActivityItemSelected: f,
                        embeddedActivitiesManager: Y.Z
                    }),
                    p = v.imageBackground,
                    h = v.videoUrl,
                    m = v.activityAction,
                    y = v.staffReleasePhase,
                    g = v.onActivityItemSelected,
                    b = v.labelType,
                    I = A._.useExperiment({
                        location: "05846b_1"
                    }),
                    E = I.enableShelfToDetailPage,
                    x = I.enableMinimalActivityDetails,
                    C = (0, c.e7)([oe.Z], (function() {
                        return oe.Z.useReducedMotion
                    })),
                    S = (0, c.Wu)([We.ZP, ue.default], (function() {
                        return We.ZP.getUsersHavePlayedByApp(t.application.id).filter((function(e) {
                            var t;
                            return (null === (t = ue.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) !== e
                        })).map((function(e) {
                            return ue.default.getUser(e)
                        })).filter(xe.lm)
                    }), [t.application.id]),
                    O = null != S[0] ? (0, T.aF)(je.ZP.getName(null, null, S[0]), 25) : null,
                    _ = null;
                null != O && S.length > 1 ? _ = z.Z.Messages.EMBEDDED_ACTIVITIES_HAVE_PLAYED_ONE_KNOWN_AND_MORE.format({
                    username1: O,
                    extras: S.length - 1
                }) : null != O && (_ = z.Z.Messages.EMBEDDED_ACTIVITIES_HAVE_PLAYED_ONE_KNOWN.format({
                    username1: O
                }));
                var N = i.useCallback((function(e) {
                        return e && (null == d ? void 0 : d({
                            applicationId: t.application.id
                        }))
                    }), [t.application.id, d]),
                    w = (0, be.O)(N, .8, !0),
                    M = et(i.useState(!1), 2),
                    L = M[0],
                    P = M[1],
                    R = et(i.useState(L), 2),
                    k = R[0],
                    V = R[1];
                i.useEffect((function() {
                    L && V(!0)
                }), [L]);
                var B, H = function() {
                        return P(!0)
                    },
                    U = function() {
                        return P(!1)
                    },
                    W = null == t.application.maxParticipants || -1 === t.application.maxParticipants ? z.Z.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS : z.Z.Messages.EMBEDDED_ACTIVITIES_ONE_TO_N_PARTICIPANTS.format({
                        count: t.application.maxParticipants
                    }),
                    J = i.useCallback((function() {
                        E ? j.S.dispatch(Ge.CkL.SHOW_ACTIVITY_DETAILS, {
                            applicationId: t.application.id
                        }) : m === Ce.J.START && g()
                    }), [m, t, E, g]),
                    $ = G.o[t.application.id],
                    K = null != (null == $ ? void 0 : $.playersSuggestionMin) && null != (null == $ ? void 0 : $.playersSuggestionMax) ? "".concat($.playersSuggestionMin, " - ").concat($.playersSuggestionMax) : void 0;
                return (0, r.jsxs)(u.Clickable, {
                    className: l()(Je().activityCard, (B = {}, Xe(B, Je().activityCardReducedMotion, C), Xe(B, Je().activityCardWithoutDetailPageRoute, !E), B)),
                    onClick: J,
                    onContextMenu: function(e) {
                        (0, ge.jW)(e, qe((function() {
                            var e, i;
                            return tt(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, n.e(8388).then(n.bind(n, 308388))];
                                    case 1:
                                        e = a.sent(), i = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(i, Qe({
                                                application: t.application
                                            }, e))
                                        }]
                                }
                            }))
                        })))
                    },
                    onMouseEnter: H,
                    onFocus: H,
                    onMouseLeave: U,
                    onBlur: U,
                    children: [(0, r.jsxs)("div", {
                        ref: w,
                        className: Je().activityCardImageContainer,
                        children: [(0, r.jsx)(F.Z, {
                            imageBackground: p,
                            applicationName: t.application.name,
                            imageClassName: Je().activityImage,
                            imageNotFoundClassName: Je().brokenImageIconWrapper
                        }), !C && null != h && k ? (0, r.jsx)("div", {
                            className: l()(Je().video, Xe({}, Je().videoFadeOut, !L)),
                            onAnimationEnd: function() {
                                return L ? null : V(!1)
                            },
                            children: (0, r.jsx)(Z.Z, {
                                className: Je().video,
                                src: h,
                                loop: !0,
                                autoPlay: !0,
                                muted: !0
                            })
                        }) : null, m !== Ce.J.START ? (0, r.jsx)(Oe, {
                            action: m,
                            onClick: g
                        }) : null, x && null != K ? (0, r.jsx)("div", {
                            className: Je().minimalDetailsContainer,
                            children: (0, r.jsxs)("div", {
                                className: Je().minimalDetails,
                                children: [(0, r.jsx)(D.Z, {
                                    width: 16,
                                    height: 16
                                }), (0, r.jsx)(u.Text, {
                                    variant: "text-xs/medium",
                                    children: K
                                })]
                            })
                        }) : null, (0, r.jsx)("div", {
                            className: Je().overlayBadge,
                            children: (0, r.jsxs)("div", {
                                className: Je().badgeContainer,
                                children: [(0, r.jsx)(_e.Z, {
                                    name: t.application.name,
                                    labelType: b
                                }), null != y ? (0, r.jsx)(u.Tooltip, {
                                    text: y,
                                    children: function(e) {
                                        return (0, r.jsx)("img", Qe({
                                            className: Je().staffBadge,
                                            alt: y,
                                            src: Me()
                                        }, e))
                                    }
                                }) : null]
                            })
                        })]
                    }), x ? null : (0, r.jsxs)("div", {
                        className: Je().activityCardDetails,
                        children: [(0, r.jsxs)("div", {
                            children: [(0, r.jsx)(u.Heading, {
                                variant: "heading-xl/extrabold",
                                children: t.application.name
                            }), (0, r.jsx)(u.Text, {
                                variant: "text-xs/semibold",
                                className: Je().activityCardParticipants,
                                children: W
                            })]
                        }), S.length > 0 ? (0, r.jsx)("div", {
                            className: Je().activityCardSocialProofContainer,
                            children: (0, r.jsxs)("div", {
                                className: Je().activityCardUsersHavePlayedContainer,
                                children: [(0, r.jsx)(Ee.Z, {
                                    users: S,
                                    guildId: void 0,
                                    max: 4
                                }), null != _ ? (0, r.jsx)(u.Text, {
                                    variant: "text-sm/medium",
                                    className: Je().activityCardUsersHavePlayedText,
                                    children: _
                                }) : null]
                            })
                        }) : (0, r.jsx)(r.Fragment, {
                            children: t.application.tags.length > 0 ? (0, r.jsx)("div", {
                                className: Je().activityCardTagContainer,
                                children: t.application.tags.slice(0, 3).map((function(e) {
                                    return (0, r.jsx)("div", {
                                        className: Je().activityCardTag,
                                        children: (0, r.jsx)(u.Text, {
                                            variant: "text-xs/semibold",
                                            children: e
                                        })
                                    }, e)
                                }))
                            }) : null
                        }), E ? (0, r.jsxs)("div", {
                            className: l()(Je().activityCardHoverHint, Xe({}, Je().activityCardHoverHintReducedMotion, C)),
                            children: [(0, r.jsx)(u.Text, {
                                variant: "text-sm/semibold",
                                children: z.Z.Messages.LEARN_MORE
                            }), (0, r.jsx)(Ue.Z, {
                                width: 16,
                                height: 16
                            })]
                        }) : null]
                    })]
                })
            }
            var rt = n(88067),
                it = n(522295),
                at = n.n(it),
                lt = n(236281),
                ot = n.n(lt),
                ct = n(759080),
                st = n.n(ct),
                ut = n(483946),
                dt = n.n(ut),
                ft = n(851416),
                vt = n.n(ft),
                pt = n(245587),
                ht = n.n(pt);

            function mt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function yt(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function gt(e, t) {
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
                    if ("string" == typeof e) return mt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return mt(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var bt, It = (0, le.Mg)(s.Z.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP),
                Et = (0, le.Mg)(s.Z.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
                xt = (0, le.Mg)(s.Z.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT),
                jt = (yt(bt = {}, rt.Qy.NEEDS_NITRO, 70), yt(bt, rt.Qy.UNLOCKED, 0), bt);

            function Tt(e) {
                var t = e.channel,
                    n = e.guildId,
                    a = e.locationObject,
                    o = e.onClose,
                    s = e.onActivityItemVisible,
                    d = e.scrollerRef,
                    f = gt(i.useState(0), 2),
                    v = f[0],
                    p = f[1],
                    m = (0, c.e7)([ce.Z], (function() {
                        return ce.Z.getState().theme
                    })),
                    y = (0, c.e7)([oe.Z], (function() {
                        return oe.Z.useReducedMotion
                    })),
                    g = pe.M.useExperiment({
                        location: "a48d9e_1"
                    }).enabled,
                    b = de.F.useExperiment({
                        location: "a48d9e_2"
                    }, {
                        autoTrackExposure: !1
                    }).enabled,
                    I = ve.Z.useExperiment({
                        location: "a48d9e_4"
                    }).enabled,
                    E = (0,
                        fe.e)(),
                    x = (0, he.Z)({
                        guildId: n,
                        isWatchTogetherPromoEnabled: E
                    }),
                    j = (0, c.e7)([ue.default], (function() {
                        return ue.default.getCurrentUser()
                    })),
                    T = (0, c.e7)([se.Z], (function() {
                        return se.Z.getGuild(n)
                    }), [n]),
                    O = (0, h.Z)(_.Z.ACTIVITY_DIRECTORY).AnalyticsLocationProvider,
                    N = (0, ye.Z)(null == t ? void 0 : t.id),
                    D = (0, c.cj)([C.Z], (function() {
                        return {
                            filter: C.Z.getFilter(),
                            isDeveloperActivityShelfEnabled: C.Z.getIsEnabled()
                        }
                    })),
                    w = D.isDeveloperActivityShelfEnabled,
                    M = D.filter;
                i.useEffect((function() {
                    var e = function() {
                            var e, t;
                            p(null !== (t = null === (e = d.current) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0)
                        },
                        t = d.current;
                    if (null != t) {
                        t.addEventListener("scroll", e, !1);
                        return function() {
                            null != t && t.removeEventListener("scroll", e, !1)
                        }
                    }
                }), [d]);
                var L = A._.useExperiment({
                        location: "a48d9e_5"
                    }, {
                        autoTrackExposure: !0
                    }),
                    P = L.enableBigShelf,
                    R = L.enableSocialProofActivityDetails,
                    k = L.enableMinimalActivityDetails;
                i.useEffect((function() {
                    (N || null != n) && (0, S.w1)({
                        guildId: n,
                        force: !0
                    })
                }), [n, N]);
                (0, me.g)();
                if (null == T && !N || null == j) return null;
                var V, B = x.reduce((function(e, t) {
                        var n = gt(t, 2),
                            r = (n[0], n[1]);
                        return e || r.length > 0
                    }), !1),
                    H = function(e, t, n, r, i) {
                        var a = jt[t] + It;
                        r ? a += 290.75 : i && (a += 200);
                        var l = (t === rt.Qy.UNLOCKED && 1 === e.length ? xt : Et) + (n ? It : 0);
                        return a + Math.ceil(e.length / 2) * l
                    },
                    F = b ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(Z.Z, {
                            autoPlay: !y,
                            src: "https://cdn.discordapp.com/attachments/860252504826445825/1093286971708813382/game_night_desktop.mp4",
                            poster: "https://cdn.discordapp.com/attachments/860252504826445825/1093287297950175272/game_night_desktop.jpg",
                            className: at().poster,
                            loop: !0
                        }), (0, r.jsx)("div", {
                            className: at().posterDivider
                        })]
                    }) : g ? P ? null : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("img", {
                            src: ht(),
                            alt: z.Z.Messages.EMBEDDED_ACTIVITIES_STAYING_FREE_POSTER_ALT,
                            className: at().poster
                        }), (0, r.jsx)("div", {
                            className: at().posterDivider
                        })]
                    }) : I ? y ? (0, r.jsxs)(ae.rU, {
                        to: Ge.Z5c.ACTIVITIES,
                        onClick: o,
                        children: [(0, r.jsx)("img", {
                            src: "light" === m ? ot() : st(),
                            className: at().poster,
                            alt: z.Z.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_ACTIVITIES_HERO_ALT
                        }), (0, r.jsx)("div", {
                            className: at().posterDivider
                        })]
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(ae.rU, {
                            to: Ge.Z5c.ACTIVITIES,
                            onClick: o,
                            children: (0, r.jsx)(Z.Z, {
                                autoPlay: !0,
                                src: dt(),
                                poster: vt(),
                                className: at().poster,
                                loop: !0,
                                muted: !0
                            })
                        }), (0, r.jsx)("div", {
                            className: at().posterDivider
                        })]
                    }) : null;
                return (0, r.jsx)(O, {
                    children: (0, r.jsxs)("div", {
                        className: at().scrollContainer,
                        children: [B && !P ? (0, r.jsx)("div", {
                            className: at().scrollBackgroundContainer,
                            style: {
                                top: -v
                            },
                            children: x.map((function(e, t, n) {
                                var i = gt(e, 2),
                                    a = i[0],
                                    o = i[1],
                                    c = t + 1 < n.length && a !== n[t + 1][0];
                                return (0, r.jsx)("div", {
                                    className: l()(at().scrollTierBackground),
                                    style: {
                                        height: H(o, a, c, b, I)
                                    }
                                }, "activity-shelf-".concat(a, "-").concat(t))
                            }))
                        }) : null, (0, r.jsxs)(u.Scroller, {
                            ref: d,
                            className: at().scroller,
                            children: [F, (V = P || R || k ? nt : Ye, B ? (0, r.jsx)(r.Fragment, {
                                children: x.map((function(e, i) {
                                    var c = gt(e, 2),
                                        u = c[0],
                                        d = c[1];
                                    return (0, r.jsx)("div", {
                                        className: at().scrollSection,
                                        children: (0, r.jsx)("div", {
                                            className: l()(at().shelf, yt({}, at().shelfBigGrid, P)),
                                            children: d.map((function(e) {
                                                return (0, r.jsx)(V, {
                                                    large: u === rt.Qy.UNLOCKED && 1 === d.length,
                                                    activityItem: e,
                                                    channel: t,
                                                    guildId: n,
                                                    locationObject: a,
                                                    onActivityItemVisible: s,
                                                    onActivityItemSelected: function() {
                                                        e.application.id, o()
                                                    }
                                                }, "activity-shelf-item-".concat(e.application.id))
                                            }))
                                        })
                                    }, "activity-shelf-status-".concat(u, "-").concat(i))
                                }))
                            }) : w && M.length > 0 ? (0, r.jsx)("div", {
                                className: at().filterError,
                                children: z.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FILTER_ERROR.format({
                                    filter: M
                                })
                            }) : (0, r.jsx)("div", {
                                className: at().spinnerContainer,
                                children: (0, r.jsx)(u.Spinner, {})
                            }))]
                        })]
                    })
                })
            }
            var Ct = n(944010),
                St = n(379991),
                At = n(682776),
                Ot = n(715107),
                _t = n(993137),
                Nt = n(243880),
                Dt = n.n(Nt);

            function wt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Mt(e, t, n, r, i, a, l) {
                try {
                    var o = e[a](l),
                        c = o.value
                } catch (e) {
                    n(e);
                    return
                }
                o.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function Zt(e, t) {
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
                    if ("string" == typeof e) return wt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return wt(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Lt = function(e, t) {
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

            function Pt(e) {
                return (0, c.e7)([se.Z, At.Z], (function() {
                    var t = se.Z.getGuild(e);
                    return null != t && At.Z.can(Ge.Plq.CREATE_INSTANT_INVITE, t)
                }), [e])
            }
            var Rt = ["embedded_background"];

            function kt(e) {
                var t = e.applicationId,
                    n = e.guildId,
                    a = e.selectedChannelId,
                    l = e.setSelectedChannelId,
                    o = e.enableSelectedTextChannelInvite,
                    s = (0, c.e7)([oe.Z], (function() {
                        return oe.Z.useReducedMotion
                    })),
                    d = (0, P.T)(null != n ? n : null, null != t ? t : ""),
                    f = Zt(i.useState(o && !St.ZP.disableInviteWithTextChannelActivityLaunch), 2),
                    v = f[0],
                    p = f[1],
                    h = (0, k.F)(n);
                i.useEffect((function() {
                    S.w1({
                        guildId: n
                    });
                    var e;
                    l(null !== (e = (0, k.d)({
                        guildId: n
                    })) && void 0 !== e ? e : void 0)
                }), [n, l]);
                var m, y, b = null == d ? void 0 : d.activity.activity_preview_video_asset_id,
                    I = null != b ? (0, V.Z)(null !== (m = null == d ? void 0 : d.application.id) && void 0 !== m ? m : "", b) : null,
                    E = (0, H.Z)({
                        applicationId: null !== (y = null == d ? void 0 : d.application.id) && void 0 !== y ? y : "",
                        size: 1024,
                        names: Rt
                    }).url,
                    x = (0, c.e7)([se.Z], (function() {
                        return se.Z.getGuild(n)
                    })),
                    j = (0, c.e7)([g.Z, Ot.Z], (function() {
                        return g.Z.getChannel(Ot.Z.getChannelId())
                    })),
                    T = Pt(null != n ? n : void 0);
                if (null == (null == d ? void 0 : d.application) || null == x) return null;
                var C = null == (null == j ? void 0 : j.name) || "" === (null == j ? void 0 : j.name) ? z.Z.Messages.EMBEDDED_ACTIVITIES_FALLBACK_CHANNEL_NAME : "#".concat(j.name);
                return (0, r.jsxs)(u.Scroller, {
                    className: Dt().scroll,
                    children: [null != I || null != E ? (0, r.jsxs)(_t.Z, {
                        aspectRatio: 16 / 9,
                        className: Dt().imageContainer,
                        children: [(0, r.jsx)(Z.Z, {
                            className: Dt().video,
                            src: I,
                            loop: !0,
                            autoPlay: !s,
                            poster: E,
                            muted: !0
                        }), ")"]
                    }) : null, (0, r.jsxs)("div", {
                        className: Dt().descriptionArea,
                        children: [(0, r.jsx)(u.Heading, {
                            variant: "heading-xl/semibold",
                            children: null == d ? void 0 : d.application.name
                        }), (0, r.jsx)(u.Text, {
                            className: Dt().descriptionAreaSubtext,
                            variant: "text-md/normal",
                            children: null == d ? void 0 : d.application.description
                        })]
                    }), (0, r.jsx)(u.Select, {
                        placeholder: z.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
                        optionClassName: Dt().option,
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
                            return null == e ? null : (0, r.jsx)(U.O, {
                                channel: e.value.channel,
                                users: e.value.users
                            })
                        },
                        renderOptionLabel: function(e) {
                            var t = e.value,
                                n = t.channel,
                                i = t.users;
                            return (0, r.jsx)(U.O, {
                                channel: n,
                                users: i
                            })
                        }
                    }), T && o ? (0, r.jsxs)(u.Clickable, {
                        className: Dt().checkboxContainer,
                        onClick: function() {
                            var e = !v;
                            Ct.ZP.updatedUnsyncedSettings({
                                disableInviteWithTextChannelActivityLaunch: !e
                            });
                            p(e)
                        },
                        children: [(0, r.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            className: Dt().checkbox,
                            value: v,
                            displayOnly: !0
                        }), (0, r.jsxs)(u.Text, {
                            variant: "text-sm/normal",
                            children: [z.Z.Messages.EMBEDDED_ACTIVITIES_SEND_ACTIVITY_INVITE, " ", (0, r.jsx)("strong", {
                                children: C
                            })]
                        })]
                    }) : null]
                })
            }

            function Vt(e) {
                var t, n, i = e.applicationId,
                    a = e.guildId,
                    l = e.locationObject,
                    o = e.onBack,
                    s = e.onClose,
                    d = e.selectedChannelId,
                    f = e.enableSelectedTextChannelInvite,
                    v = (0, h.Z)(_.Z.ACTIVITY_CHANNEL_SELECTOR),
                    p = v.AnalyticsLocationProvider,
                    m = v.analyticsLocations,
                    y = (0,
                        P.T)(null != a ? a : null, null != i ? i : null),
                    b = (0, B.Z)(),
                    I = (0, c.e7)([g.Z, Ot.Z], (function() {
                        return g.Z.getChannel(Ot.Z.getChannelId())
                    })),
                    E = (0, c.e7)([St.ZP], (function() {
                        return f && !St.ZP.disableInviteWithTextChannelActivityLaunch
                    })),
                    x = (0, c.e7)([We.ZP], (function() {
                        return null != d && "" !== d && We.ZP.getEmbeddedActivitiesForChannel(d).some((function(e) {
                            return e.application_id === i
                        }))
                    })),
                    j = Pt(a),
                    T = (n = (t = function() {
                        return Lt(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return null == d || "" === d || null == y || null == a || "" === a ? [2] : [4, (0, L.Z)({
                                        activityItem: y,
                                        currentActivity: b,
                                        locationObject: l,
                                        channelId: d,
                                        guildId: a,
                                        embeddedActivitiesManager: Y.Z,
                                        analyticsLocations: m
                                    })];
                                case 1:
                                    if (!e.sent()) return [3, 3];
                                    s();
                                    return null != I && j && E ? [4, S.sN({
                                        activityChannelId: d,
                                        invitedChannelId: I.id,
                                        applicationId: y.application.id,
                                        location: Ge.Sbl.ACTIVITY_SHELF
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
                                Mt(a, r, i, l, o, "next", e)
                            }

                            function o(e) {
                                Mt(a, r, i, l, o, "throw", e)
                            }
                            l(void 0)
                        }))
                    }), function() {
                        return n.apply(this, arguments)
                    });
                return (0, r.jsx)(p, {
                    children: (0, r.jsxs)("div", {
                        className: Dt().footerContainer,
                        children: [(0, r.jsx)(u.Clickable, {
                            onClick: o,
                            className: Dt().backToBrowse,
                            children: (0, r.jsx)(u.Text, {
                                color: "header-secondary",
                                variant: "text-md/normal",
                                children: z.Z.Messages.BACK
                            })
                        }), null == d ? (0, r.jsx)("div", {}) : (0, r.jsx)(u.Button, {
                            className: Dt().launchButton,
                            onClick: T,
                            color: x ? u.Button.Colors.GREEN : void 0,
                            fullWidth: !0,
                            children: x ? z.Z.Messages.EMBEDDED_ACTIVITIES_JOIN : z.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH
                        })]
                    })
                })
            }
            var Bt = n(190186),
                Ht = n(122012),
                Ft = n(770249),
                Yt = n.n(Ft);

            function Ut() {
                var e = (0, O.cj)([C.Z], (function() {
                        return {
                            activityUrlOverride: C.Z.getActivityUrlOverride(),
                            useActivityUrlOverride: C.Z.getUseActivityUrlOverride(),
                            filter: C.Z.getFilter()
                        }
                    }), []),
                    t = e.activityUrlOverride,
                    n = e.useActivityUrlOverride,
                    i = e.filter;
                return (0, r.jsxs)("div", {
                    className: Yt().container,
                    children: [(0, r.jsx)(u.Checkbox, {
                        type: u.Checkbox.Types.INVERTED,
                        className: Yt().checkbox,
                        value: n,
                        onClick: Ht.Y$,
                        children: (0, r.jsx)(u.Text, {
                            variant: "text-md/semibold",
                            children: z.Z.Messages.EMBEDDED_ACTIVITIES_USE_ACTIVITY_URL_OVERRIDE
                        })
                    }), (0, r.jsx)(u.FormItem, {
                        className: Yt().urlOverride,
                        title: z.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_URL_OVERRIDE,
                        children: (0, r.jsx)(u.TextInput, {
                            disabled: !n,
                            value: null != t ? t : void 0,
                            onChange: Ht.jS,
                            placeholder: "http://localhost:3000"
                        })
                    }), (0, r.jsx)("div", {
                        children: (0, r.jsx)(Bt.Z, {
                            className: Yt().searchBar,
                            query: i,
                            onChange: Ht.a8,
                            onClear: function() {
                                Ht.a8("")
                            }
                        })
                    })]
                })
            }
            var Wt = n(730075),
                Gt = n.n(Wt),
                zt = n(476763),
                Jt = n.n(zt),
                $t = n(601875),
                Kt = n.n($t);

            function qt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Xt(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Qt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Xt(e, t, n[t])
                    }))
                }
                return e
            }

            function en(e, t) {
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

            function tn(e, t) {
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

            function nn(e, t) {
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
                    if ("string" == typeof e) return qt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return qt(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var rn = (0,
                    T.Mg)(s.Z.ACTIVITY_SHELF_MODAL_MODAL_PADDING),
                an = (0, T.Mg)(s.Z.ACTIVITY_SHELF_MODAL_MODAL_WIDTH),
                ln = (0, T.Mg)(s.Z.ACTIVITY_SHELF_MODAL_MODAL_MIN_WIDTH),
                on = (0, T.Mg)(s.Z.ACTIVITY_SHELF_MODAL_MODAL_MAX_WIDTH),
                cn = (0, T.Mg)(s.Z.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT) + rn + (0, T.Mg)(s.Z.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT);

            function sn(e) {
                var t = e.channel,
                    n = e.guildId,
                    a = e.locationObject,
                    s = e.onClose,
                    f = e.initialSelectedApplicationId,
                    b = void 0 === f ? void 0 : f,
                    T = e.initialSlide,
                    O = void 0 === T ? rt.ag.DIRECTORY : T,
                    _ = e.enableSelectedTextChannelInvite,
                    N = e.analyticsLocations,
                    D = tn(e, ["channel", "guildId", "locationObject", "onClose", "initialSelectedApplicationId", "initialSlide", "enableSelectedTextChannelInvite", "analyticsLocations"]),
                    w = A._.useExperiment({
                        location: "0d4108_1"
                    }, {
                        autoTrackExposure: !0
                    }).enableBigShelf,
                    M = (0, y.b)().width,
                    Z = i.useMemo((function() {
                        return w ? Math.max(ln, Math.min(M - 2 * rn, on)) : an
                    }), [M, w]),
                    L = (0, c.e7)([C.Z], (function() {
                        return C.Z.getIsEnabled()
                    }), []),
                    P = (0,
                        h.Z)(N).AnalyticsLocationProvider,
                    R = nn(i.useState(O), 2),
                    k = R[0],
                    V = R[1],
                    B = (0, d.Z)(k),
                    H = nn(i.useState(null), 2),
                    F = H[0],
                    Y = H[1],
                    U = nn(i.useState(b), 2),
                    W = U[0],
                    G = U[1],
                    J = nn(i.useState(void 0), 2),
                    $ = J[0],
                    K = J[1],
                    q = nn((0, m.Z)(null == W ? [] : [W]), 1)[0],
                    X = i.useRef(null),
                    Q = i.useMemo((function() {
                        return {
                            application_id: W,
                            source_section: a.section,
                            impression_group: o.AG.ACTIVITY_SHELF_FLOW
                        }
                    }), [a.section, W]);
                i.useEffect((function() {
                    if (k === rt.ag.DIRECTORY && null != B && B !== rt.ag.DIRECTORY && null != F) {
                        var e;
                        null === (e = X.current) || void 0 === e || e.scrollTo({
                            top: F
                        })
                    }
                }), [F, B, k]);
                var ee = i.useCallback((function(e) {
                        var t, n = e.applicationId,
                            r = null === (t = X.current) || void 0 === t ? void 0 : t.scrollTop;
                        null != r && Y(r);
                        G(n);
                        V(rt.ag.SELECT_CHANNEL)
                    }), []),
                    te = i.useCallback((function(e) {
                        var t = e.applicationId;
                        G(t);
                        V(rt.ag.DETAIL_PAGE)
                    }), []);
                i.useEffect((function() {
                    x.default.track(Ge.rMx.OPEN_MODAL, {
                        type: "Activity Shelf",
                        channel_id: null == t ? void 0 : t.id,
                        guild_id: n
                    })
                }), [t, n]);
                i.useEffect((function() {
                    j.S.subscribe(Ge.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, ee);
                    return function() {
                        j.S.unsubscribe(Ge.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, ee)
                    }
                }), [ee]);
                i.useEffect((function() {
                    j.S.subscribe(Ge.CkL.SHOW_ACTIVITY_DETAILS, te);
                    return function() {
                        j.S.unsubscribe(Ge.CkL.SHOW_ACTIVITY_DETAILS, te)
                    }
                }), [te]);
                i.useEffect((function() {
                    S.ux()
                }), []);
                var ne = function() {
                        V(rt.ag.DIRECTORY)
                    },
                    ie = i.useRef(Date.now()),
                    ae = i.useRef(!1),
                    le = i.useRef([]),
                    oe = i.useCallback((function(e) {
                        null == le.current.find((function(t) {
                            return t === e.applicationId
                        })) && le.current.push(e.applicationId)
                    }), []);
                i.useEffect((function() {
                    var e = X.current;
                    if (null != e) {
                        var t = function() {
                            return ae.current = !0
                        };
                        null != e && e.addEventListener("scroll", t);
                        return function() {
                            null != e && e.removeEventListener("scroll", t)
                        }
                    }
                }), []);
                i.useEffect((function() {
                    return function() {
                        var e = {
                                activity_tiles_viewed: le.current,
                                duration_ms: Date.now() - ie.current,
                                scrolled: ae.current
                            },
                            r = Qt({
                                channel_id: null == t ? void 0 : t.id,
                                guild_id: n,
                                location: (0, p.k$)()
                            }, (0, v.hH)(n), (0,
                                v.v_)(g.Z.getChannel(null == t ? void 0 : t.id)), Q, e);
                        x.default.track(Ge.rMx.ACTIVITY_SHELF_CLOSE, r)
                    }
                }), [null == t ? void 0 : t.id, Q, n]);
                return (0, r.jsx)(P, {
                    children: (0, r.jsxs)(u.ModalRoot, en(Qt({
                        className: l()(Gt().root, Xt({}, Gt().rootBigShelf, w)),
                        "aria-label": z.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
                    }, D), {
                        children: [(0, r.jsx)("img", {
                            alt: z.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
                            src: Jt(),
                            className: Gt().shelfTopBackground
                        }), (0, r.jsx)("img", {
                            alt: z.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
                            src: Kt(),
                            className: Gt().shelfTopForeground
                        }), (0, r.jsxs)(u.ModalHeader, {
                            separator: !1,
                            justify: I.Z.Justify.BETWEEN,
                            className: l()(Gt().modalHeader, Xt({}, Gt().modalHeaderBigShelf, w)),
                            children: [(0, r.jsxs)("div", {
                                className: Gt().headerTextContainer,
                                children: [k === rt.ag.DETAIL_PAGE ? null == q ? null : (0, r.jsxs)("div", {
                                    className: Gt().activityShelfTitle,
                                    children: [(0, r.jsx)(u.Heading, {
                                        variant: "heading-xl/extrabold",
                                        children: q.name
                                    }), (0, r.jsxs)(u.Clickable, {
                                        className: Gt().headerBackButton,
                                        onClick: ne,
                                        children: [(0, r.jsx)(E.Z, {}), (0, r.jsx)(u.Text, {
                                            variant: "text-sm/semibold",
                                            children: z.Z.Messages.BACK
                                        })]
                                    })]
                                }) : (0, r.jsx)("div", {
                                    className: Gt().activityShelfTitle,
                                    children: (0, r.jsx)(u.Heading, {
                                        variant: "heading-xl/extrabold",
                                        children: z.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
                                    })
                                }), k === rt.ag.DIRECTORY ? (0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    children: L ? z.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_SHELF_SUBTITLE : z.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_SUBTITLE
                                }) : null]
                            }), (0, r.jsx)(u.ModalCloseButton, {
                                className: Gt().modalCloseButton,
                                onClick: s
                            })]
                        }), k === rt.ag.DIRECTORY && L ? (0, r.jsx)(Ut, {}) : null, (0, r.jsx)("div", {
                            className: Gt().modalDivider
                        }), (0, r.jsxs)(u.Slides, {
                            activeSlide: k,
                            centered: !1,
                            width: Z,
                            children: [(0, r.jsx)(u.Slide, {
                                id: rt.ag.DIRECTORY,
                                impressionName: o.zs.ACTIVITY_SHELF,
                                impressionProperties: {
                                    source_section: a.section,
                                    impression_group: o.AG.ACTIVITY_SHELF_FLOW
                                },
                                children: (0, r.jsx)(un, {
                                    slide: k,
                                    children: (0, r.jsx)(Tt, {
                                        scrollerRef: X,
                                        channel: t,
                                        guildId: n,
                                        locationObject: a,
                                        onActivityItemVisible: oe,
                                        onClose: s
                                    })
                                })
                            }), (0, r.jsx)(u.Slide, {
                                id: rt.ag.SELECT_CHANNEL,
                                impressionName: o.zs.ACTIVITY_SHELF_SELECT_CHANNEL,
                                impressionProperties: {
                                    source_section: a.section,
                                    impression_group: o.AG.ACTIVITY_SHELF_FLOW,
                                    application_id: W
                                },
                                children: (0, r.jsx)(un, {
                                    slide: k,
                                    children: (0, r.jsx)(kt, {
                                        applicationId: W,
                                        selectedChannelId: $,
                                        setSelectedChannelId: K,
                                        guildId: n,
                                        enableSelectedTextChannelInvite: _
                                    })
                                })
                            }), (0, r.jsx)(u.Slide, {
                                id: rt.ag.DETAIL_PAGE,
                                impressionName: o.zs.ACTIVITY_DETAILS,
                                impressionProperties: Q,
                                children: (0, r.jsx)(un, {
                                    slide: k,
                                    children: null == W ? null : (0, r.jsx)(re, {
                                        applicationId: W,
                                        channelId: null == t ? void 0 : t.id,
                                        guildId: n,
                                        onActivityLaunch: s
                                    })
                                })
                            })]
                        }), function() {
                            switch (k) {
                                case rt.ag.SELECT_CHANNEL:
                                    return (0, r.jsxs)(r.Fragment, {
                                        children: [(0, r.jsx)("div", {
                                            className: Gt().modalDivider
                                        }), (0, r.jsx)(u.ModalFooter, {
                                            separator: !1,
                                            className: Gt().footer,
                                            children: (0, r.jsx)(Vt, {
                                                onBack: ne,
                                                onClose: s,
                                                guildId: n,
                                                applicationId: W,
                                                locationObject: a,
                                                selectedChannelId: $,
                                                enableSelectedTextChannelInvite: _
                                            })
                                        })]
                                    });
                                case rt.ag.DETAIL_PAGE:
                                case rt.ag.DIRECTORY:
                                default:
                                    return null
                            }
                        }()]
                    }))
                })
            }
            var un = function(e) {
                var t, n = e.children,
                    a = e.slide,
                    o = (0, c.e7)([C.Z], (function() {
                        return C.Z.getIsEnabled()
                    }), []),
                    s = i.useContext(f.ZP),
                    u = (0, c.e7)([b.Z], (function() {
                        return b.Z.windowSize(s.windowId).height
                    }), [s.windowId]);
                return (0, r.jsx)("div", {
                    className: l()(Gt().slideContentOuterContainerSquished, (t = {}, Xt(t, Gt().slideContentOuterContainerSquishedWithDev, a === rt.ag.DIRECTORY && o), Xt(t, Gt().slideContentOuterContainerTall, a === rt.ag.DIRECTORY && u > cn), Xt(t, Gt().slideContentOuterContainerTallWithDev, a === rt.ag.DIRECTORY && u > cn && o), Xt(t, Gt().slideContentOuterContainerNoMetaTextSquished, a === rt.ag.SELECT_CHANNEL), Xt(t, Gt().slideContentOuterContainerNoMetaTextTall, a === rt.ag.SELECT_CHANNEL && u > cn), Xt(t, Gt().slideContentOuterContainerNoMetaTextNoFooterSquished, a === rt.ag.DETAIL_PAGE), Xt(t, Gt().slideContentOuterContainerNoMetaTextNoFooterTall, a === rt.ag.DETAIL_PAGE && u > cn), t)),
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
                l = n(495937),
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
                o = n(70418),
                c = n(722406),
                s = n(755914),
                u = n(899512),
                d = n.n(u),
                f = n(234532),
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
                            src: h.getAvatarURL(p, (0,
                                o.getAvatarSize)(f)),
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
        538101: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var r = n(785893),
                i = (n(667294), n(168075)),
                a = n(795308),
                l = n(633878);

            function o(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
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
            const u = (0, i.hN)((function(e) {
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
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    u = void 0 === i ? 24 : i,
                    d = e.color,
                    f = void 0 === d ? a.Z.colors.INTERACTIVE_NORMAL : d,
                    v = e.colorClass,
                    p = void 0 === v ? "" : v,
                    h = s(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            o(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(h)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        fillRule: "evenodd",
                        d: "M2.293 7.293a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414L5.414 9H11a7 7 0 0 1 7 7v4a1 1 0 1 0 2 0v-4a9 9 0 0 0-9-9H5.414l3.293-3.293a1 1 0 0 0-1.414-1.414l-5 5Z",
                        clipRule: "evenodd",
                        className: p
                    })
                }))
            }))
        }
    }
]);