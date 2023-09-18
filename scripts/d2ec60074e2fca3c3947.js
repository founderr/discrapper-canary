(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [67783], {
        697558: (e, t, n) => {
            e.exports = n.p + "0d61d0c1ff1f7b1d765a7f00f85d00ab.png"
        },
        846889: (e, t, n) => {
            e.exports = n.p + "cb5fd0a8c27fdff8ed5c6804b80ea3e1.png"
        },
        600993: (e, t, n) => {
            "use strict";
            n.d(t, {
                rR: () => _,
                Xj: () => m,
                fq: () => p
            });
            var r = n(667294),
                o = n(496486),
                a = n.n(o),
                c = n(202351),
                l = n(265688),
                i = (0, n(260561).B)({
                    kind: "user",
                    id: "2022-08_churro_experiment",
                    label: "PS5 Voice Experiment",
                    defaultConfig: {
                        allowPlayStationStaging: !1
                    },
                    treatments: [{
                        id: 3,
                        label: "PS Experiment + upsells + Staging",
                        config: {
                            allowPlayStationStaging: !0
                        }
                    }]
                }),
                s = n(629223),
                u = n(473903),
                d = n(2590),
                O = n(668785);

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function T(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, a = [],
                            c = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(c = (r = n.next()).done); c = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                c || null == n.return || n.return()
                            } finally {
                                if (l) throw o
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
            var E = function(e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n;
                    return e
                }({}, d.ABu.INSTAGRAM, ["1036753656588017764"]),
                N = new Map([
                    [d.ABu.INSTAGRAM, new Date(2023, 1, 18).getTime()]
                ]);

            function m(e) {
                var t = e.forUserProfile,
                    n = (0, c.e7)([u.default], (function() {
                        return u.default.getCurrentUser()
                    })),
                    r = i.useExperiment({
                        location: "f2f7ef_1"
                    }, {
                        autoTrackExposure: !1
                    }).allowPlayStationStaging;
                return function(e) {
                    var o;
                    return e.type === d.ABu.PLAYSTATION_STAGING ? r : !(void 0 === n || !(null === (o = E[e.type]) || void 0 === o ? void 0 : o.includes(n.id))) || (!!t || e.enabled)
                }
            }

            function p() {
                var e, t = (0, c.e7)([s.Z], (function() {
                        return s.Z.getAccounts()
                    })),
                    n = m({
                        forUserProfile: !1
                    }),
                    o = r.useMemo((function() {
                        var e = new Set;
                        t.forEach((function(t) {
                            return e.add(t.type)
                        }));
                        return e
                    }), [t]);
                return a().sortBy(l.Z.filter(n), [function(t) {
                    return !(N.has(t.type) && Date.now() < (null !== (e = N.get(t.type)) && void 0 !== e ? e : 0) + 2592e6)
                }, function(e) {
                    return o.has(e.type)
                }, function(e) {
                    return e.hasMetadata
                }, function(e) {
                    return !d.vbS.has(e.type)
                }, function(e) {
                    return e.name
                }])
            }

            function _(e) {
                var t = function(e) {
                        e.key === O.vn.SHIFT && c(!0)
                    },
                    n = function(e) {
                        e.key === O.vn.SHIFT && c(!1)
                    },
                    o = T(r.useState(!1), 2),
                    a = o[0],
                    c = o[1];
                r.useEffect((function() {
                    window.addEventListener("keydown", t);
                    window.addEventListener("keyup", n);
                    return function() {
                        window.removeEventListener("keydown", t);
                        window.removeEventListener("keyup", n)
                    }
                }), []);
                return a && e === d.ABu.TWITTER ? d.ABu.TWITTER_LEGACY : e
            }
        },
        321485: (e, t, n) => {
            "use strict";
            n.d(t, {
                oP: () => m,
                rJ: () => p,
                Dq: () => _,
                li: () => b,
                ul: () => v,
                hf: () => I,
                rm: () => y
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                a = n.n(o),
                c = n(496486),
                l = n.n(c),
                i = n(882723),
                s = n(219799),
                u = n(53645),
                d = n(678005),
                O = n(473708),
                f = n(847570),
                T = n.n(f);

            function E(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
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

            function m(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    o = [],
                    a = Number(null !== (t = e[d.PC.REDDIT_TOTAL_KARMA]) && void 0 !== t ? t : -1),
                    c = "1" === e[d.PC.REDDIT_GOLD],
                    l = "1" === e[d.PC.REDDIT_MOD];
                a > -1 && o.push((0, r.jsx)(h, {
                    className: n,
                    count: a,
                    label: O.Z.Messages.CONNECTIONS_PROFILE_REDDIT_KARMA
                }, d.PC.REDDIT_TOTAL_KARMA));
                c && o.push((0, r.jsx)(g, {
                    className: n,
                    label: O.Z.Messages.CONNECTIONS_REDDIT_GOLD
                }, d.PC.REDDIT_GOLD));
                l && o.push((0, r.jsx)(g, {
                    className: n,
                    label: O.Z.Messages.CONNECTIONS_REDDIT_MOD
                }, d.PC.REDDIT_MOD));
                return o
            }

            function p(e) {
                var t, n, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    a = [],
                    c = Number(null !== (t = e[d.PC.TWITTER_STATUSES_COUNT]) && void 0 !== t ? t : -1),
                    l = Number(null !== (n = e[d.PC.TWITTER_FOLLOWERS_COUNT]) && void 0 !== n ? n : -1);
                c > -1 && a.push((0, r.jsx)(h, {
                    className: o,
                    count: c,
                    label: O.Z.Messages.CONNECTIONS_PROFILE_TWITTER_STATUSES
                }, d.PC.TWITTER_STATUSES_COUNT));
                l > -1 && a.push((0, r.jsx)(h, {
                    className: o,
                    count: l,
                    label: O.Z.Messages.CONNECTIONS_PROFILE_TWITTER_FOLLOWERS
                }, d.PC.TWITTER_FOLLOWERS_COUNT));
                return a
            }

            function _(e) {
                var t, o, a, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    l = [],
                    i = Number(null !== (t = e[d.PC.STEAM_GAME_COUNT]) && void 0 !== t ? t : -1),
                    s = Number(null !== (o = e[d.PC.STEAM_ITEM_COUNT_DOTA2]) && void 0 !== o ? o : -1),
                    u = Number(null !== (a = e[d.PC.STEAM_ITEM_COUNT_TF2]) && void 0 !== a ? a : -1);
                i > -1 && l.push((0, r.jsx)(h, {
                    className: c,
                    count: i,
                    label: O.Z.Messages.CONNECTIONS_PROFILE_STEAM_GAMES
                }, d.PC.STEAM_GAME_COUNT));
                s > -1 && l.push((0, r.jsx)(C, {
                    className: c,
                    label: O.Z.Messages.CONNECTIONS_STEAM_ITEMS.format({
                        count: s
                    }),
                    imageSrc: n(697558),
                    imageAlt: O.Z.Messages.CONNECTIONS_STEAM_DOTA2
                }, d.PC.STEAM_ITEM_COUNT_DOTA2));
                u > -1 && l.push((0, r.jsx)(C, {
                    className: c,
                    label: O.Z.Messages.CONNECTIONS_STEAM_ITEMS.format({
                        count: u
                    }),
                    imageSrc: n(846889),
                    imageAlt: O.Z.Messages.CONNECTIONS_STEAM_TF2
                }, d.PC.STEAM_ITEM_COUNT_TF2));
                return l
            }

            function b(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    n = [],
                    o = "1" === e[d.PC.PAYPAL_VERIFIED];
                o && n.push((0, r.jsx)(g, {
                    className: a()(t, T().paypalVerifiedTag),
                    label: O.Z.Messages.CONNECTIONS_PAYPAL_VERIFIED
                }, d.PC.PAYPAL_VERIFIED));
                return n
            }

            function v(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    o = [],
                    a = Number(null !== (t = e[d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) && void 0 !== t ? t : -1),
                    c = "1" === e[d.PC.EBAY_TOP_RATED_SELLER];
                a > 0 && o.push((0, r.jsx)(h, {
                    className: n,
                    count: a,
                    label: O.Z.Messages.CONNECTIONS_PROFILE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
                    percent: !0
                }, d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE));
                c && o.push((0, r.jsx)(g, {
                    className: n,
                    label: O.Z.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER
                }, d.PC.EBAY_TOP_RATED_SELLER));
                return o
            }

            function I(e) {
                var t, n, o, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    c = [],
                    l = "1" === e[d.PC.TIKTOK_VERIFIED],
                    i = Number(null !== (t = e[d.PC.TIKTOK_FOLLOWER_COUNT]) && void 0 !== t ? t : -1),
                    s = Number(null !== (n = e[d.PC.TIKTOK_FOLLOWING_COUNT]) && void 0 !== n ? n : -1),
                    u = Number(null !== (o = e[d.PC.TIKTOK_LIKES_COUNT]) && void 0 !== o ? o : -1);
                i > -1 && c.push((0, r.jsx)(h, {
                    className: a,
                    count: i,
                    label: O.Z.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWERS
                }, d.PC.TIKTOK_FOLLOWER_COUNT));
                s > -1 && c.push((0, r.jsx)(h, {
                    className: a,
                    count: s,
                    label: O.Z.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWING
                }, d.PC.TIKTOK_FOLLOWING_COUNT));
                u > -1 && c.push((0, r.jsx)(h, {
                    className: a,
                    count: u,
                    label: O.Z.Messages.CONNECTIONS_PROFILE_TIKTOK_LIKES
                }, d.PC.TIKTOK_LIKES_COUNT));
                l && c.push((0, r.jsx)(g, {
                    className: a,
                    label: O.Z.Messages.CONNECTIONS_TIKTOK_VERIFIED
                }, d.PC.TIKTOK_VERIFIED));
                return c
            }

            function y(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                    o = [],
                    a = Object.keys(e.metadata);
                if (null == e.application_metadata || 0 === Object.keys(e.application_metadata).length || 0 === a.length) return o;
                var c = l().sortBy(a, (function(t) {
                        var n, r;
                        return null === (n = e.application_metadata) || void 0 === n || null === (r = n[t]) || void 0 === r ? void 0 : r.name
                    })),
                    i = !0,
                    s = !1,
                    u = void 0;
                try {
                    for (var O, f = c[Symbol.iterator](); !(i = (O = f.next()).done); i = !0) {
                        var T = O.value,
                            E = e.application_metadata[T];
                        if (null != E) {
                            var N = e.metadata[T];
                            try {
                                switch (E.type) {
                                    case d.xn.BOOLEAN_EQUAL:
                                    case d.xn.BOOLEAN_NOT_EQUAL:
                                        var m = E.type === d.xn.BOOLEAN_EQUAL && "1" === N || E.type === d.xn.BOOLEAN_NOT_EQUAL && "1" !== N;
                                        m && o.push((0, r.jsx)(g, {
                                            className: t,
                                            label: E.name
                                        }, E.key));
                                        break;
                                    case d.xn.DATETIME_GREATER_THAN_EQUAL:
                                    case d.xn.DATETIME_LESS_THAN_EQUAL:
                                        o.push((0, r.jsx)(A, {
                                            className: t,
                                            date: N,
                                            locale: n,
                                            label: E.name
                                        }, E.key));
                                        break;
                                    case d.xn.INTEGER_EQUAL:
                                    case d.xn.INTEGER_NOT_EQUAL:
                                    case d.xn.INTEGER_GREATER_THAN_EQUAL:
                                    case d.xn.INTEGER_LESS_THAN_EQUAL:
                                        o.push((0, r.jsx)(h, {
                                            className: t,
                                            count: Number(N),
                                            label: E.name
                                        }, E.key))
                                }
                            } catch (e) {}
                        }
                    }
                } catch (e) {
                    s = !0;
                    u = e
                } finally {
                    try {
                        i || null == f.return || f.return()
                    } finally {
                        if (s) throw u
                    }
                }
                return o
            }

            function h(e) {
                var t, n = e.count,
                    o = e.label,
                    c = e.className,
                    l = e.percent,
                    u = (0, s.$U)(n) + (l ? "%" : "");
                t = "string" == typeof o ? O.Z.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
                    name: o,
                    value: u
                }) : o.format({
                    value: u
                });
                return (0, r.jsx)(i.Text, {
                    className: a()(T().connectedAccountVanityMetadata, c),
                    variant: "text-xs/normal",
                    color: "interactive-active",
                    children: t
                })
            }

            function A(e) {
                var t = e.date,
                    n = e.locale,
                    o = e.label,
                    c = e.className;
                return (0, r.jsx)(i.Text, {
                    className: a()(T().connectedAccountVanityMetadata, c),
                    variant: "text-xs/normal",
                    color: "interactive-active",
                    children: O.Z.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
                        value: (0, u.FI)(t, n),
                        name: o
                    })
                })
            }

            function C(e) {
                var t = e.label,
                    n = e.imageSrc,
                    o = e.imageAlt,
                    c = e.className;
                return (0, r.jsxs)("div", {
                    className: a()(T().connectedAccountVanityMetadata, T().connectedAccountVanityMetadataItem, c),
                    children: [(0, r.jsx)(i.Tooltip, {
                        text: o,
                        children: function(e) {
                            return (0, r.jsx)("img", N(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))));
                                    r.forEach((function(t) {
                                        E(e, t, n[t])
                                    }))
                                }
                                return e
                            }({}, e), {
                                src: n,
                                alt: o,
                                className: T().connectedAccountVanityMetadataItemIcon
                            }))
                        }
                    }), (0, r.jsx)(i.Text, {
                        variant: "text-xs/normal",
                        color: "interactive-active",
                        children: t
                    })]
                })
            }

            function g(e) {
                var t = e.label,
                    n = e.className;
                return (0, r.jsx)(i.Text, {
                    variant: "text-xs/semibold",
                    color: "interactive-active",
                    className: a()(T().connectedAccountVanityMetadata, T().connectedAccountVanityMetadataTag, n),
                    children: t
                })
            }
        },
        491984: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => N
            });
            var r = n(785893),
                o = (n(667294), n(547308)),
                a = n(202351),
                c = n(795308),
                l = n(882723),
                i = n(316878),
                s = n(859917),
                u = n(128181),
                d = n(473708);

            function O(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function T(e, t) {
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

            function E(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, a = [],
                            c = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(c = (r = n.next()).done); c = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                c || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return O(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return O(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function N(e) {
                var t, n = e.color,
                    O = e.size,
                    N = e.forcedIconColor,
                    m = e.className,
                    p = e.iconClassName,
                    _ = e.tooltipText,
                    b = E((0, a.Wu)([i.Z], (function() {
                        return [i.Z.desaturateUserColors, i.Z.saturation]
                    })), 2),
                    v = b[0],
                    I = b[1],
                    y = (0, l.useToken)(c.Z.unsafe_rawColors.PRIMARY_300).hex(),
                    h = (0, o._i)(null != n ? n : y),
                    A = (0, o.ho)(h, !1, v ? I : null);
                t = null != N ? N : (0, o.Bd)(h) < .3 ? c.Z.unsafe_rawColors.PRIMARY_630.css : c.Z.unsafe_rawColors.WHITE_500.css;
                return (0, r.jsx)(l.Tooltip, {
                    text: null != _ ? _ : d.Z.Messages.CONNECTIONS_ROLE_OFFICIAL_ICON_TOOLTIP,
                    children: function(e) {
                        return (0, r.jsx)(s.Z, T(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))));
                                r.forEach((function(t) {
                                    f(e, t, n[t])
                                }))
                            }
                            return e
                        }({}, e), {
                            className: m,
                            color: A,
                            size: O,
                            children: (0, r.jsx)(u.Z, {
                                color: t,
                                height: O,
                                width: O,
                                className: p
                            })
                        }))
                    }
                })
            }
        },
        967783: (e, t, n) => {
            "use strict";
            n.d(t, {
                E3: () => P,
                tH: () => x,
                OA: () => R
            });
            var r = n(785893),
                o = n(667294),
                a = n(294184),
                c = n.n(a),
                l = n(795308),
                i = n(575945),
                s = n(882723),
                u = n(385028),
                d = n(265688),
                O = n(396043),
                f = n(600993),
                T = n(53645),
                E = n(321485),
                N = n(491984),
                m = n(722406),
                p = n(873308),
                _ = n(310246),
                b = n(955121),
                v = n(2590),
                I = n(678005),
                y = n(473708),
                h = n(299154),
                A = n.n(h);

            function C(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        C(e, t, n[t])
                    }))
                }
                return e
            }

            function j(e, t) {
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

            function P(e) {
                var t, n, o = e.connectedAccount,
                    a = e.theme,
                    u = e.locale,
                    m = e.userId,
                    h = e.className,
                    C = e.showMetadata,
                    P = e.showInvisibleIcon;
                null == C && (C = !0);
                var x, S, R = null !== (n = o.metadata) && void 0 !== n ? n : {},
                    w = C ? (0, T.FI)(R[I.PC.CREATED_AT], u) : null,
                    D = (0, s.useToken)(l.Z.unsafe_rawColors.TWITTER).hex(),
                    L = y.Z.Messages.CONNECTION_VERIFIED;
                if (C) switch (o.type) {
                    case v.ABu.REDDIT:
                        x = (0, E.oP)(R);
                        break;
                    case v.ABu.STEAM:
                        x = (0, E.Dq)(R);
                        break;
                    case v.ABu.TWITTER:
                        x = (0, E.rJ)(R);
                        if ("1" === R[I.PC.TWITTER_VERIFIED]) {
                            S = D;
                            L = y.Z.Messages.CONNECTION_VERIFIED_ON_TWITTER
                        }
                        break;
                    case v.ABu.PAYPAL:
                        x = (0, E.li)(R);
                        break;
                    case v.ABu.EBAY:
                        x = (0, E.ul)(R);
                        break;
                    case v.ABu.TIKTOK:
                        x = (0, E.hf)(R)
                }
                var M, Z = d.Z.get((0, f.rR)(o.type)),
                    F = null == Z || null === (t = Z.getPlatformUserUrl) || void 0 === t ? void 0 : t.call(Z, o);
                null != P && P ? M = (0, r.jsx)(_.Z, {
                    className: c()(A().connectedAccountOpenIconContainer, A().connectedAccountHideIcon),
                    foregroundColor: "currentColor"
                }) : null != F && (M = (0, r.jsx)(s.Anchor, {
                    href: F,
                    onClick: function(e) {
                        t = o.type, n = m, (0, O.yw)(v.rMx.CONNECTED_ACCOUNT_VIEWED, {
                            platform_type: t,
                            other_user_id: n
                        });
                        var t, n;
                        (0, b.q)({
                            href: F,
                            trusted: (null == Z ? void 0 : Z.type) !== v.ABu.DOMAIN
                        }, e)
                    },
                    children: (0, r.jsx)(p.Z, {
                        className: A().connectedAccountOpenIcon,
                        direction: p.Z.Directions.RIGHT
                    })
                }));
                var U = (0, s.useToken)(l.Z.colors.INTERACTIVE_MUTED).hex(),
                    k = (0, s.useToken)(l.Z.colors.INTERACTIVE_ACTIVE).hex(),
                    G = o.verified ? (0, r.jsx)(N.Z, {
                        className: A().connectedAccountVerifiedIcon,
                        color: null != S ? S : U,
                        forcedIconColor: k,
                        size: 16,
                        tooltipText: L
                    }) : null;
                return (0, r.jsxs)("div", {
                    className: c()(A().connectedAccountContainer, null != x && x.length > 0 || null != w ? A().connectedAccountContainerWithMetadata : null, h),
                    children: [(0, r.jsxs)("div", {
                        className: A().connectedAccount,
                        children: [(0, r.jsx)(s.Tooltip, {
                            text: null == Z ? void 0 : Z.name,
                            children: function(e) {
                                return (0, r.jsx)("img", j(g({}, e), {
                                    alt: y.Z.Messages.IMG_ALT_LOGO.format({
                                        name: null == Z ? void 0 : Z.name
                                    }),
                                    className: A().connectedAccountIcon,
                                    src: (0, i.wj)(a) ? null == Z ? void 0 : Z.icon.darkSVG : null == Z ? void 0 : Z.icon.lightSVG
                                }))
                            }
                        }), (0, r.jsxs)("div", {
                            className: A().connectedAccountNameContainer,
                            children: [(0, r.jsxs)("div", {
                                className: A().connectedAccountName,
                                children: [(0, r.jsxs)("div", {
                                    className: A().connectedAccountNameTextContainer,
                                    children: [(0, r.jsx)(s.Tooltip, {
                                        overflowOnly: !0,
                                        text: o.name,
                                        children: function(e) {
                                            return (0, r.jsx)(s.Text, j(g({}, e), {
                                                variant: "text-md/semibold",
                                                color: "interactive-active",
                                                className: A().connectedAccountNameText,
                                                children: o.name
                                            }))
                                        }
                                    }), G]
                                }), M]
                            }), null != w ? (0, r.jsx)(s.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                children: y.Z.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
                                    date: w
                                })
                            }) : null]
                        })]
                    }), null != x && x.length > 0 ? (0, r.jsx)("div", {
                        className: A().connectedAccountChildren,
                        children: x
                    }) : null]
                })
            }

            function x(e) {
                var t = e.applicationRoleConnection,
                    n = e.className,
                    o = e.locale,
                    a = (0, E.rm)(t, void 0, o);
                return (0, r.jsxs)("div", {
                    className: c()(A().connectedAccountContainer, null != a && a.length > 0 ? A().connectedAccountContainerWithMetadata : null, n),
                    children: [(0, r.jsx)("div", {
                        className: A().connectedAccount,
                        children: (0, r.jsxs)("div", {
                            className: A().connectedAccountNameContainer,
                            children: [null != t.platform_name ? (0, r.jsx)(s.Text, {
                                variant: "eyebrow",
                                color: "interactive-normal",
                                children: t.platform_name
                            }) : null, null != t.platform_username ? (0, r.jsx)("div", {
                                className: A().connectedAccountName,
                                children: (0, r.jsx)("div", {
                                    className: A().connectedAccountNameTextContainer,
                                    children: (0, r.jsx)(s.Text, {
                                        variant: "text-md/semibold",
                                        color: "interactive-active",
                                        className: A().connectedAccountNameText,
                                        children: t.platform_username
                                    })
                                })
                            }) : null]
                        })
                    }), null != a && a.length > 0 ? (0, r.jsx)("div", {
                        className: c()(A().connectedAccountChildren, A().connectedAccountChildrenNoIcon),
                        children: a
                    }) : null, (0, r.jsx)("div", {
                        children: (0, r.jsx)("div", {
                            className: A().connectedAccountPoweredBy,
                            children: (0, r.jsx)(s.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: y.Z.Messages.CONNECTIONS_PROFILE_POWERED_BY.format({
                                    applicationHook: function() {
                                        return (0, r.jsxs)("div", {
                                            className: A().connectedAccountPoweredByText,
                                            children: [null != t.application.bot ? (0, r.jsx)(u.Z, {
                                                user: new m.Z(t.application.bot),
                                                size: s.AvatarSizes.SIZE_16
                                            }) : null, (0, r.jsx)(s.Text, {
                                                variant: "text-xs/normal",
                                                color: "text-normal",
                                                children: t.application.name
                                            })]
                                        })
                                    }
                                })
                            })
                        })
                    })]
                })
            }

            function S(e, t) {
                var n = e.connectedAccounts,
                    o = e.theme,
                    a = e.locale,
                    l = e.className,
                    i = e.userId;
                if (null == n || 0 === n.length) return null;
                for (var s = n.filter((function(e) {
                        return d.Z.isSupported(e.type)
                    })).map((function(e) {
                        return (0, r.jsx)(P, {
                            connectedAccount: e,
                            theme: o,
                            locale: a,
                            userId: i
                        }, "".concat(e.type, ":").concat(e.id))
                    })), u = [], O = [], f = 0; f < s.length; f++) {
                    var T = s[f];
                    f % 2 == 0 ? u.push(T) : O.push(T)
                }
                return (0, r.jsxs)("div", {
                    ref: t,
                    className: c()(A().connectedAccounts, l),
                    children: [(0, r.jsx)("div", {
                        className: A().connectedAccountsColumn,
                        children: u
                    }), (0, r.jsx)("div", {
                        className: A().connectedAccountsColumn,
                        children: O
                    })]
                })
            }
            var R = o.forwardRef(S)
        },
        873308: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => E
            });
            var r, o = n(785893),
                a = (n(667294), n(294184)),
                c = n.n(a),
                l = n(633878),
                i = n(451770),
                s = n.n(i);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e, t) {
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

            function O(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }! function(e) {
                e.LEFT = "LEFT";
                e.RIGHT = "RIGHT";
                e.UP = "UP";
                e.DOWN = "DOWN";
                e.UP_LEFT = "UP_LEFT";
                e.DOWN_RIGHT = "DOWN_RIGHT"
            }(r || (r = {}));

            function f(e) {
                switch (e) {
                    case r.LEFT:
                        return s().left;
                    case r.RIGHT:
                        return s().right;
                    case r.UP:
                        return null;
                    case r.DOWN:
                        return s().down;
                    case r.UP_LEFT:
                        return s().upLeft;
                    case r.DOWN_RIGHT:
                        return s().downRight;
                    default:
                        throw new Error("Invalid Direction ".concat(e))
                }
            }
            var T = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    r = e.height,
                    a = void 0 === r ? 24 : r,
                    i = e.color,
                    s = void 0 === i ? "currentColor" : i,
                    T = e.direction,
                    E = e.foreground,
                    N = e.className,
                    m = e.title,
                    p = O(e, ["width", "height", "color", "direction", "foreground", "className", "title"]);
                return (0, o.jsxs)("svg", d(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            u(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(p)), {
                    width: n,
                    height: a,
                    className: c()(N, f(T)),
                    viewBox: "0 0 24 24",
                    children: [null != m ? (0, o.jsx)("title", {
                        children: m
                    }) : null, (0, o.jsx)("polygon", {
                        className: E,
                        fill: s,
                        fillRule: "nonzero",
                        points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"
                    })]
                }))
            };
            T.Directions = r;
            const E = T
        }
    }
]);