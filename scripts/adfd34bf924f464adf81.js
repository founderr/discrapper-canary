"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [72810], {
        966225: (e, t, n) => {
            n.d(t, {
                F: () => r
            });
            var r = (0, n(260561).B)({
                kind: "user",
                id: "2023-03_activities_game_night_coach_mark",
                label: "Activities Game Night Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Activities Game Night",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        548586: (e, t, n) => {
            n.d(t, {
                e: () => i
            });
            var r = (0, n(260561).B)({
                    kind: "user",
                    id: "2023-03_activitieswatchtogetherpromo",
                    label: "Activities Watch Together Promo",
                    defaultConfig: {
                        enableWatchTogetherPromo: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "enable Watch Together promo",
                        config: {
                            enableWatchTogetherPromo: !0
                        }
                    }]
                }),
                i = function() {
                    return r.useExperiment({
                        location: "ea09d5_1"
                    }, {
                        autoTrackExposure: !1
                    }).enableWatchTogetherPromo
                }
        },
        901750: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            var r = (0, n(260561).B)({
                kind: "user",
                id: "2023-03_birthday_activities",
                label: "Birthday Activities",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Birthday Activities",
                    config: {
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "Geo test Enable Birthday Activities but no share",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        365724: (e, t, n) => {
            n.d(t, {
                M: () => r
            });
            var r = (0, n(260561).B)({
                kind: "user",
                id: "2023-06_birthday_goodbye",
                label: "Activities Free Forever",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Activities Free Forever",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        475665: (e, t, n) => {
            n.d(t, {
                K: () => r
            });
            var r = (0, n(260561).B)({
                kind: "user",
                id: "2023-09_activity_bobble_bash_upsell",
                label: "Activity Bobble Bash Upsell",
                defaultConfig: {
                    enableBobbleBashMiniShelfBanner: !1,
                    enableBobbleBashDoubleWideShelf: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable mini-shelf banner + double-wide shelf",
                    config: {
                        enableBobbleBashMiniShelfBanner: !0,
                        enableBobbleBashDoubleWideShelf: !0
                    }
                }, {
                    id: 2,
                    label: "Enable mini-shelf banner",
                    config: {
                        enableBobbleBashMiniShelfBanner: !0,
                        enableBobbleBashDoubleWideShelf: !1
                    }
                }, {
                    id: 3,
                    label: "Enable double-wide shelf",
                    config: {
                        enableBobbleBashMiniShelfBanner: !1,
                        enableBobbleBashDoubleWideShelf: !0
                    }
                }]
            })
        },
        211490: (e, t, n) => {
            n.d(t, {
                _: () => r
            });
            var r = (0,
                n(260561).B)({
                kind: "user",
                id: "2023-06_activity_shelf_to_detail_page",
                label: "Activity Shelf to Detail Page",
                defaultConfig: {
                    enableBigShelf: !1,
                    enableShelfToDetailPage: !1,
                    enableSocialProofActivityDetails: !1,
                    enableMinimalActivityDetails: !1
                },
                treatments: [{
                    id: 0,
                    label: "Control",
                    config: {
                        enableBigShelf: !1,
                        enableShelfToDetailPage: !1,
                        enableSocialProofActivityDetails: !1,
                        enableMinimalActivityDetails: !1
                    }
                }, {
                    id: 1,
                    label: "Enable Big Shelf",
                    config: {
                        enableBigShelf: !0,
                        enableShelfToDetailPage: !1,
                        enableSocialProofActivityDetails: !1,
                        enableMinimalActivityDetails: !1
                    }
                }, {
                    id: 2,
                    label: "Enable Activity Shelf to Detail Page",
                    config: {
                        enableBigShelf: !0,
                        enableShelfToDetailPage: !0,
                        enableSocialProofActivityDetails: !1,
                        enableMinimalActivityDetails: !1
                    }
                }, {
                    id: 3,
                    label: "Enable social-proof shelf details",
                    config: {
                        enableBigShelf: !1,
                        enableShelfToDetailPage: !1,
                        enableSocialProofActivityDetails: !0,
                        enableMinimalActivityDetails: !1
                    }
                }, {
                    id: 4,
                    label: "Enable minimal shelf details",
                    config: {
                        enableBigShelf: !1,
                        enableShelfToDetailPage: !1,
                        enableSocialProofActivityDetails: !1,
                        enableMinimalActivityDetails: !0
                    }
                }, {
                    id: 5,
                    label: "Enable minimal shelf details and route to detail page",
                    config: {
                        enableBigShelf: !0,
                        enableShelfToDetailPage: !0,
                        enableSocialProofActivityDetails: !1,
                        enableMinimalActivityDetails: !0
                    }
                }]
            })
        },
        663772: (e, t, n) => {
            n.d(t, {
                T: () => a
            });
            var r = n(667294),
                i = n(660999);

            function a(e, t) {
                var n, a = (0, i.Z)({
                    guildId: e,
                    disableFilter: !0
                });
                return r.useMemo((function() {
                    return null !== (n = a.find((function(e) {
                        return e.application.id === t
                    }))) && void 0 !== n ? n : null
                }), [a, t])
            }
        },
        768560: (e, t, n) => {
            n.d(t, {
                Z: () => B
            });
            var r, i = n(202351),
                a = n(560213),
                o = n(260561),
                l = n(667294),
                c = n(73904),
                u = n(120415),
                f = n(623945),
                d = n(97393),
                s = n(838733);

            function b(e, t) {
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
                            o = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || p(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function y(e) {
                return function(e) {
                    if (Array.isArray(e)) return b(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || p(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function p(e, t) {
                if (e) {
                    if ("string" == typeof e) return b(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? b(e, t) : void 0
                }
            }! function(e) {
                e[e.None = 0] = "None";
                e[e.MostRecentlyUsed = 1] = "MostRecentlyUsed";
                e[e.MostUsed = 2] = "MostUsed";
                e[e.WeightedMostUsed = 3] = "WeightedMostUsed"
            }(r || (r = {}));
            var h = function(e, t) {
                    var n = y(e),
                        r = 0;
                    t.forEach((function(e) {
                        var t = n.findIndex((function(t) {
                            return t.application.id === e
                        }));
                        if (-1 !== t) {
                            var i = n[t];
                            n.splice(t, 1);
                            n = y(n.slice(0, r)).concat([i], y(n.slice(r)));
                            ++r
                        }
                    }));
                    n.map((function(e, t) {
                        return [e, t]
                    })).filter((function(e) {
                        var t, n, r = null === (n = null === (t = v(e, 1)[0].application.embeddedActivityConfig) || void 0 === t ? void 0 : t.client_platform_config[(0, s.Z)((0, u.Ij)())]) || void 0 === n ? void 0 : n.label_type;
                        return !!r && (r === c.ww.NEW || r === c.ww.UPDATED)
                    })).forEach((function(e) {
                        var t, r, i = v(e, 2),
                            a = i[0],
                            o = i[1],
                            l = null !== (r = null === (t = a.application.embeddedActivityConfig) || void 0 === t ? void 0 : t.shelf_rank) && void 0 !== r ? r : o;
                        if (l < o) {
                            var c = n[o];
                            n.splice(o, 1);
                            n = y(n.slice(0, l)).concat([c], y(n.slice(l)))
                        }
                    }));
                    return n
                },
                m = function(e, t) {
                    switch (t) {
                        case r.MostRecentlyUsed:
                            return g(e);
                        case r.MostUsed:
                            return A(e);
                        case r.WeightedMostUsed:
                            return S(e)
                    }
                    return []
                },
                g = function(e) {
                    var t = Object.keys(e);
                    return Object.values(e).map((function(e, n) {
                        return [t[n], e[e.length - 1]]
                    })).sort((function(e, t) {
                        var n = v(e, 2)[1],
                            r = v(t, 2)[1];
                        return -Math.sign(n - r)
                    })).map((function(e) {
                        return v(e, 1)[0]
                    }))
                },
                A = function(e) {
                    var t = Object.keys(e);
                    return Object.values(e).map((function(e, n) {
                        return [t[n], e.length]
                    })).sort((function(e, t) {
                        var n = v(e, 2)[1],
                            r = v(t, 2)[1];
                        return -Math.sign(n - r)
                    })).map((function(e) {
                        return v(e, 1)[0]
                    }))
                },
                S = function(e) {
                    var t = Date.now(),
                        n = Object.keys(e),
                        r = Object.values(e).map((function(e, r) {
                            var i = 0;
                            e.forEach((function(e) {
                                return i += function(e, t) {
                                    return 1 / (1 + Math.max(0, Math.floor((e - t) / 864e5)))
                                }(t, e)
                            }));
                            return [n[r], i]
                        })).sort((function(e, t) {
                            var n = v(e, 2)[1],
                                r = v(t, 2)[1];
                            return -Math.sign(n - r)
                        })).map((function(e) {
                            return v(e, 1)[0]
                        }));
                    return r
                },
                O = (0, o.B)({
                    kind: "user",
                    id: "2023-09_activity_shelf_order",
                    label: "Activity Shelf Order",
                    defaultConfig: {
                        heuristic: r.None,
                        timePeriodInDays: -1
                    },
                    treatments: [{
                        id: 1,
                        label: "Activity Shelf Order: Most Recently Used",
                        config: {
                            heuristic: r.MostRecentlyUsed,
                            timePeriodInDays: -1
                        }
                    }, {
                        id: 2,
                        label: "Activity Shelf Order: Most Used",
                        config: {
                            heuristic: r.MostUsed,
                            timePeriodInDays: -1
                        }
                    }, {
                        id: 3,
                        label: "Activity Shelf Order: Weighted Most Used",
                        config: {
                            heuristic: r.WeightedMostUsed,
                            timePeriodInDays: -1
                        }
                    }]
                }),
                w = n(88067);

            function j(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        j(e, t, n[t])
                    }))
                }
                return e
            }

            function P(e, t) {
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
            var I = n(586886);

            function _(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function D(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            o = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || Z(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function M(e) {
                return function(e) {
                    if (Array.isArray(e)) return _(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || Z(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Z(e, t) {
                if (e) {
                    if ("string" == typeof e) return _(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _(e, t) : void 0
                }
            }

            function B(e) {
                var t, n, o, c = e.guildId,
                    u = e.isWatchTogetherPromoEnabled,
                    s = void 0 !== u && u,
                    b = e.enableBobbleBashDoubleWideShelf,
                    y = void 0 !== b && b,
                    p = e.disableFilter,
                    g = void 0 !== p && p,
                    A = (0,
                        i.cj)([a.Z], (function() {
                        return {
                            enableDeveloperActivityShelf: a.Z.getIsEnabled(),
                            filter: a.Z.getFilter()
                        }
                    })),
                    S = A.enableDeveloperActivityShelf,
                    j = A.filter,
                    _ = (0, I.Z)(c, s, y),
                    Z = O.useExperiment({
                        location: "useActivityShelfItems"
                    }, {
                        autoTrackExposure: !0
                    }).heuristic,
                    B = null != Z ? Z : r.None,
                    C = (t = _, n = B, o = (0, i.cj)([d.Z], (function() {
                        return d.Z.getState().usageByApplicationId
                    })), l.useMemo((function() {
                        var e = m(o, n),
                            r = t.map((function(t) {
                                var n = v(t, 2),
                                    r = n[0],
                                    i = n[1];
                                return [r, h(i, e)]
                            })),
                            i = [];
                        r.forEach((function(e) {
                            var t = v(e, 2);
                            t[0];
                            t[1].forEach((function(e) {
                                return i.push(e.application.id)
                            }))
                        }));
                        f.H(i);
                        return r
                    }), [n, t, o])),
                    T = function() {
                        var e = (0, i.cj)([a.Z], (function() {
                                return {
                                    isEnabled: a.Z.getIsEnabled(),
                                    lastUsedObject: a.Z.getLastUsedObject()
                                }
                            }), []),
                            t = e.isEnabled,
                            n = e.lastUsedObject,
                            r = (0, i.Wu)([a.Z], (function() {
                                return a.Z.getDeveloperShelfItems()
                            }), []),
                            o = l.useMemo((function() {
                                return t ? r.map((function(e) {
                                    return {
                                        application: e,
                                        activity: P(E({}, w.wT, e.embeddedActivityConfig), {
                                            application_id: e.id
                                        })
                                    }
                                })).sort((function(e, t) {
                                    var r = n[e.application.id],
                                        i = n[t.application.id];
                                    return null == r ? 1 : null == i ? -1 : i - r
                                })) : []
                            }), [r, t, n]);
                        return o.length <= 0 ? [] : [
                            [w.Qy.UNLOCKED, o]
                        ]
                    }();
                return M(T).concat(M(C)).map((function(e) {
                    var t = D(e, 2);
                    return [t[0], t[1].filter((function(e) {
                        return g || !S || "" === j || e.application.name.toLocaleLowerCase().includes(j.toLocaleLowerCase())
                    }))]
                }))
            }
        },
        933954: (e, t, n) => {
            n.d(t, {
                ZP: () => u,
                QN: () => f
            });
            var r = n(667294),
                i = n(202351),
                a = n(28661),
                o = n(473903),
                l = n(72580),
                c = n(258104);

            function u(e, t) {
                return d((0, i.Wu)([c.ZP], (function() {
                    return null != e && null != e.id && "" !== e.id ? c.ZP.getEmbeddedActivitiesForChannel(e.id) : c.i6
                })), t)
            }

            function f(e) {
                var t = d((0, i.e7)([c.ZP], (function() {
                    return null != e ? c.ZP.getEmbeddedActivitiesForGuild(e) : c.i6
                })));
                return r.useMemo((function() {
                    var e = new Map;
                    t.forEach((function(t) {
                        var n, r = t.embeddedActivity.channelId,
                            i = null !== (n = e.get(r)) && void 0 !== n ? n : [];
                        i.push(t);
                        e.set(r, i)
                    }));
                    return e
                }), [t])
            }

            function d(e, t) {
                var n = e.map((function(e) {
                        return e.application_id
                    })),
                    c = (0,
                        a.Z)(n),
                    u = new Set([]),
                    f = !0,
                    d = !1,
                    s = void 0;
                try {
                    for (var b, v = e[Symbol.iterator](); !(f = (b = v.next()).done); f = !0) {
                        var y = b.value,
                            p = !0,
                            h = !1,
                            m = void 0;
                        try {
                            for (var g, A = y.connections.keys()[Symbol.iterator](); !(p = (g = A.next()).done); p = !0) {
                                var S = g.value;
                                u.add(S)
                            }
                        } catch (e) {
                            h = !0;
                            m = e
                        } finally {
                            try {
                                p || null == A.return || A.return()
                            } finally {
                                if (h) throw m
                            }
                        }
                    }
                } catch (e) {
                    d = !0;
                    s = e
                } finally {
                    try {
                        f || null == v.return || v.return()
                    } finally {
                        if (d) throw s
                    }
                }
                var O = (0, i.Wu)([o.default], (function() {
                        var e = [],
                            t = !0,
                            n = !1,
                            r = void 0;
                        try {
                            for (var i, a = u[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                                var l = i.value;
                                e.push(o.default.getUser(l))
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
                        return e
                    }), [u]),
                    w = r.useMemo((function() {
                        var n = new Map;
                        O.forEach((function(e) {
                            null != e && n.set(e.id, e)
                        }));
                        var r = e.map((function(e, r) {
                            var i = c[r],
                                a = [];
                            if (null != a) {
                                var o = !0,
                                    l = !1,
                                    u = void 0;
                                try {
                                    for (var f, d = e.connections.keys()[Symbol.iterator](); !(o = (f = d.next()).done); o = !0) {
                                        var s = f.value,
                                            b = n.get(s);
                                        if (null != b && null != t) {
                                            var v = t(b);
                                            null != v && a.push(v)
                                        }
                                    }
                                } catch (e) {
                                    l = !0;
                                    u = e
                                } finally {
                                    try {
                                        o || null == d.return || d.return()
                                    } finally {
                                        if (l) throw u
                                    }
                                }
                            }
                            return null == i ? null : {
                                embeddedActivity: e,
                                application: i,
                                userParticipantAvatarUrls: a
                            }
                        })).filter(l.lm);
                        return r
                    }), [e, c, O, t]);
                return w
            }
        },
        660999: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(667294),
                i = n(768560);

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function o(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            o = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || c(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function l(e) {
                return function(e) {
                    if (Array.isArray(e)) return a(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || c(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c(e, t) {
                if (e) {
                    if ("string" == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
                }
            }

            function u(e) {
                var t = e.guildId,
                    n = e.disableFilter,
                    a = void 0 !== n && n,
                    c = (0, i.Z)({
                        guildId: t,
                        disableFilter: a
                    });
                return r.useMemo((function() {
                    var e = [];
                    c.forEach((function(t) {
                        var n, r = o(t, 2)[1];
                        (n = e).push.apply(n, l(r))
                    }));
                    var t = new Set;
                    return e.filter((function(e) {
                        if (t.has(e.application.id)) return !1;
                        t.add(e.application.id);
                        return !0
                    }))
                }), [c])
            }
        },
        9018: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(2590);

            function i(e, t) {
                var n = window.GLOBAL_ENV.CDN_HOST,
                    i = window.GLOBAL_ENV.API_ENDPOINT;
                return null != n ? "".concat(location.protocol, "//").concat(n, "/app-assets/").concat(e, "/store/").concat(t, ".mp4") : "".concat(location.protocol).concat(i).concat(r.ANM.STORE_ASSET(e, t, "mp4"))
            }
        },
        565957: (e, t, n) => {
            n.d(t, {
                J: () => r,
                Z: () => m
            });
            var r, i = n(73904),
                a = n(19585),
                o = n(120415),
                l = n(873247),
                c = n(258104),
                u = n(61040),
                f = n(706148),
                d = n(933954),
                s = n(838733),
                b = n(9018),
                v = n(195034),
                y = n(483535),
                p = n(92585),
                h = n(88067);
            ! function(e) {
                e.START = "START";
                e.JOIN = "JOIN";
                e.LEAVE = "LEAVE"
            }(r || (r = {}));

            function m(e) {
                var t = e.activityItem,
                    n = e.channel,
                    m = e.guildId,
                    g = e.locationObject,
                    A = e.onActivityItemSelected,
                    S = e.embeddedActivitiesManager,
                    O = e.assetNames,
                    w = e.backgroundResolution,
                    j = void 0 === w ? 250 : w,
                    E = (0, a.Z)().analyticsLocations,
                    P = t.application,
                    I = t.activity,
                    _ = I.client_platform_config[(0, s.Z)((0, o.Ij)())],
                    D = _.label_type === i.ww.NEW && null != _.label_until && Date.now() < Date.parse(_.label_until),
                    M = (0, p.Z)({
                        applicationId: P.id,
                        size: j,
                        names: O
                    }),
                    Z = null != I.activity_preview_video_asset_id ? (0, b.Z)(P.id, I.activity_preview_video_asset_id) : null,
                    B = (0, v.Z)(),
                    C = (0, y.Z)(),
                    T = (0, d.ZP)(n).find((function(e) {
                        var t = e.embeddedActivity;
                        return P.id === t.application_id
                    })),
                    N = r.START,
                    U = function() {
                        (0, f.Z)({
                            activityItem: t,
                            currentActivity: C,
                            locationObject: g,
                            guildId: m,
                            channelId: null == n ? void 0 : n.id,
                            embeddedActivitiesManager: S,
                            analyticsLocations: E
                        }).then((function(e) {
                            return e && (null == A ? void 0 : A({
                                applicationId: P.id
                            }))
                        }))
                    };
                if (null != n && (null == B ? void 0 : B.channelId) === n.id && (null == C ? void 0 : C.id) === P.id) {
                    N = r.LEAVE;
                    U = function() {
                        if (!c.ZP.isLaunchingActivity()) {
                            (0, l.mW)({
                                channelId: n.id,
                                applicationId: P.id
                            });
                            S.leaveActivity({
                                channelId: n.id,
                                applicationId: P.id
                            });
                            null == A || A({
                                applicationId: P.id
                            })
                        }
                    }
                } else if (null != T) {
                    N = r.JOIN;
                    U = function() {
                        c.ZP.isLaunchingActivity() || (0, u.Z)({
                            activity: T.embeddedActivity,
                            currentEmbeddedApplication: C,
                            activityChannelId: null == n ? void 0 : n.id,
                            locationObject: g,
                            embeddedActivitiesManager: S,
                            analyticsLocations: E
                        }).then((function(e) {
                            return e && (null == A ? void 0 : A({
                                applicationId: P.id
                            }))
                        }))
                    }
                }
                var x = t.activity.client_platform_config[(0, s.Z)((0, o.Ij)())].release_phase,
                    k = h.eB.includes(x) ? x.replace("_", " ").replace(/(^\w|\s\w)/g, (function(e) {
                        return e.toUpperCase()
                    })) : void 0;
                return {
                    imageBackground: M,
                    videoUrl: Z,
                    joinableEmbeddedApp: T,
                    activityAction: N,
                    onActivityItemSelected: U,
                    showNewBadge: D,
                    staffReleasePhase: k
                }
            }
        },
        586886: (e, t, n) => {
            n.d(t, {
                Z: () => S
            });
            var r = n(667294),
                i = n(202351),
                a = n(473903),
                o = n(116094),
                l = n(211490),
                c = n(28661),
                u = n(325213),
                f = n(72580),
                d = n(120415),
                s = n(258104),
                b = n(838733);

            function v(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function y(e) {
                return function(e) {
                    if (Array.isArray(e)) return v(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return v(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var p = n(312242),
                h = n(88067),
                m = n(203600);

            function g(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function A(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            o = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return g(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return g(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function S(e, t, n) {
                var v = (0, i.e7)([a.default], (function() {
                        return a.default.getCurrentUser()
                    })),
                    g = function(e) {
                        var t, n = (0, i.e7)([a.default], a.default.getCurrentUser),
                            o = (0, i.Wu)([s.ZP], (function() {
                                return s.ZP.getShelfActivities(e)
                            })),
                            l = (0, i.e7)([u.Z], (function() {
                                return u.Z.testModeEmbeddedApplicationId
                            })),
                            v = o.map((function(e) {
                                return e.application_id
                            })),
                            p = null != l ? [l].concat(y(v)) : v,
                            h = (0, c.Z)(p),
                            m = r.useMemo((function() {
                                return h.filter(f.lm)
                            }), [h]),
                            g = r.useMemo((function() {
                                return null != l && m.length > 0 && m[0].id === l && null != m[0].embeddedActivityConfig ? [{
                                    activity: m[0].embeddedActivityConfig,
                                    application: m[0]
                                }] : []
                            }), [m, l]),
                            A = r.useMemo((function() {
                                return o.map((function(e) {
                                    var t = m.find((function(t) {
                                        return t.id === e.application_id
                                    }));
                                    return null == t ? null : {
                                        activity: e,
                                        application: t
                                    }
                                })).filter(f.lm)
                            }), [o, m]);
                        return r.useMemo((function() {
                            return y(g).concat(y(A)).filter((function(e) {
                                var n = e.activity;
                                return (null !== (t = n.supported_platforms) && void 0 !== t ? t : []).includes((0, b.Z)((0, d.Ij)()))
                            })).filter((function(e) {
                                return !e.activity.requires_age_gate || !0 === (null == n ? void 0 : n.nsfwAllowed) || null == (null == n ? void 0 : n.nsfwAllowed)
                            }))
                        }), [null == n ? void 0 : n.nsfwAllowed, A, g])
                    }(e),
                    S = l._.useExperiment({
                        location: "8814a3_1"
                    }, {
                        autoTrackExposure: !0
                    }),
                    O = S.enableBigShelf,
                    w = S.enableMinimalActivityDetails,
                    j = S.enableSocialProofActivityDetails,
                    E = O || w || j;
                return r.useMemo((function() {
                    var e = new Map;
                    if (null == v) return [];
                    var r, i = null,
                        a = null;
                    g.forEach((function(r) {
                        var l, c = function(e, t) {
                                return (0, p.Z)(e.activity) || null == e.activity.premium_tier_requirement || (0,
                                    o.M5)(t, m.p9.TIER_2) ? h.Qy.UNLOCKED : h.Qy.NEEDS_NITRO
                            }(r, v),
                            u = null !== (l = e.get(c)) && void 0 !== l ? l : [];
                        if (t && r.application.id === h.jT && !E) i = r;
                        else if (n && r.application.id === h.N1 && !E) a = r;
                        else {
                            u.push(r);
                            e.set(c, u)
                        }
                    }));
                    var l = null !== (r = e.get(h.Qy.UNLOCKED)) && void 0 !== r ? r : [];
                    if (!o.ZP.canUsePremiumActivities(v)) {
                        var c = l.sort((function(e, t) {
                            return Number((0, p.Z)(t.activity)) - Number((0, p.Z)(e.activity))
                        }));
                        e.set(h.Qy.UNLOCKED, c)
                    }
                    var u = Array.from(e.entries()).sort((function(e, t) {
                        return A(e, 1)[0] <= A(t, 1)[0] ? -1 : 1
                    }));
                    t && null != i && u.unshift([h.Qy.UNLOCKED, [i]]);
                    null != a && u.unshift([h.Qy.UNLOCKED, [a]]);
                    return u
                }), [v, g, t, n, E])
            }
        },
        125680: (e, t, n) => {
            n.d(t, {
                Z: () => f
            });
            var r = n(785893),
                i = (n(667294), n(294184)),
                a = n.n(i),
                o = n(882723),
                l = n(641277),
                c = n(639115),
                u = n.n(c);

            function f(e) {
                var t = e.className,
                    n = e.embeddedApps;
                if (n.length <= 0) return null;
                if (1 === n.length) return (0, r.jsx)("div", {
                    className: a()(u().container, t),
                    children: (0, r.jsx)(l.Z, {
                        game: n[0].application,
                        className: u().icon24px
                    })
                });
                var i = n.length - 1;
                return (0, r.jsxs)("div", {
                    className: a()(u().container, t),
                    children: [(0, r.jsx)(l.Z, {
                        game: n[0].application,
                        className: u().icon20px
                    }), 2 === n.length ? (0, r.jsx)(l.Z, {
                        game: n[1].application,
                        className: u().icon20px
                    }) : (0, r.jsx)(o.Text, {
                        className: u().overflow,
                        variant: "text-xs/bold",
                        color: "interactive-active",
                        children: "+".concat(i)
                    })]
                })
            }
        },
        279309: (e, t, n) => {
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

            function l(e, t) {
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
                    n = void 0 === t ? 16 : t,
                    c = e.height,
                    u = void 0 === c ? 16 : c,
                    f = e.color,
                    d = void 0 === f ? "currentColor" : f,
                    s = e.foreground,
                    b = l(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", o(function(e) {
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
                }({}, (0, i.Z)(b)), {
                    width: n,
                    height: u,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: s,
                        fill: d,
                        d: "M7 1C6.73479 1.00003 6.48045 1.10539 6.29292 1.29292C6.10539 1.48045 6.00003 1.73479 6 2V6C6.00009 6.23417 6.08234 6.46088 6.23242 6.64062L10.6992 12L6.23242 17.3594C6.08234 17.5391 6.00009 17.7658 6 18V22C6.00003 22.2652 6.10539 22.5195 6.29292 22.7071C6.48045 22.8946 6.73479 23 7 23H17C17.2652 23 17.5195 22.8946 17.7071 22.7071C17.8946 22.5195 18 22.2652 18 22V18C17.9999 17.7658 17.9177 17.5391 17.7676 17.3594L13.3008 12L17.7676 6.64062C17.9177 6.46088 17.9999 6.23417 18 6V2C18 1.73479 17.8946 1.48045 17.7071 1.29292C17.5195 1.10539 17.2652 1.00003 17 1H7ZM12 13.5625L16 18.3613V21H8V18.3613L12 13.5625Z"
                    })
                }))
            }
        }
    }
]);