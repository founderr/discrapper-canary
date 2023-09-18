(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [27373], {
        955426: (e, t, n) => {
            e.exports = n.p + "d63afdc8dee0d21c3c25f78f4f81a8a9.mov"
        },
        861197: (e, t, n) => {
            e.exports = n.p + "686449dfc2b401327999d72f79b7c037.webm"
        },
        621491: (e, t, n) => {
            e.exports = n.p + "2d197cc648cea186073da09b5d7639d1.mov"
        },
        109177: (e, t, n) => {
            e.exports = n.p + "1442d764c3d6ee37ad6ba74a470bca14.webm"
        },
        470752: (e, t, n) => {
            e.exports = n.p + "d8b61fb29328e17e879a14a5cc765e06.mov"
        },
        919098: (e, t, n) => {
            e.exports = n.p + "6db35a89f93f27cec438f980be59635f.webm"
        },
        734207: (e, t, n) => {
            e.exports = n.p + "9e8f64d43e65d86219eefaa871f25d0a.mov"
        },
        900615: (e, t, n) => {
            e.exports = n.p + "c66604b9276c4dd8865a519b90394e9d.webm"
        },
        195363: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                prefetch: () => W,
                PremiumSubscriptionWowMomentForHelper: () => Y,
                default: () => k
            });
            var r = n(785893),
                i = n(667294),
                a = n(248088),
                u = n(202351),
                o = n(744564),
                c = n(316878),
                s = n(786170),
                O = n(652591),
                I = n(245305),
                l = n(930948),
                _ = n(436145),
                d = n(398344),
                T = n(305082),
                f = n(964262),
                p = n(955426),
                M = n.n(p),
                N = n(621491),
                E = n.n(N),
                h = n(470752),
                m = n.n(h),
                R = n(734207),
                A = n.n(R),
                w = n(2590),
                S = n(732278),
                U = n.n(S),
                D = n(861197),
                b = n.n(D),
                v = n(109177),
                C = n.n(v),
                L = n(919098),
                y = n.n(L),
                P = n(900615),
                Z = n.n(P);

            function x(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function g(e, t, n, r, i, a, u) {
                try {
                    var o = e[a](u),
                        c = o.value
                } catch (e) {
                    n(e);
                    return
                }
                o.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function H(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);

                        function u(e) {
                            g(a, r, i, u, o, "next", e)
                        }

                        function o(e) {
                            g(a, r, i, u, o, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function G(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            u = !0,
                            o = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return x(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return x(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var B, F = function(e, t) {
                var n, r, i, a, u = {
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
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            u.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(a);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                a = t.call(e, u)
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

            function W(e) {
                return j.apply(this, arguments)
            }

            function j() {
                j = H((function(e) {
                    var t, n, r, i, a, u;
                    return F(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                c.trys.push([0, 2, , 3]);
                                o.Z.dispatch({
                                    type: "PREMIUM_TUTORIAL_IS_FETCHING_WOW_MOMENT_MEDIA",
                                    value: !0
                                });
                                "(min-width: 1012px) and (max-width: 1980px)";
                                "(min-height: 720px) and (max-height: 1408px)";
                                "(min-width: 1980px)";
                                "(min-height: 1408px)";
                                t = e ? E() : C();
                                window.matchMedia("(min-width: 1012px) and (max-width: 1980px)").matches || window.matchMedia("(min-height: 720px) and (max-height: 1408px)").matches ? t = e ? m() : y() : (window.matchMedia("(min-width: 1980px)").matches || window.matchMedia("(min-height: 1408px)").matches) && (t = e ? A() : Z());
                                n = fetch(t).then((s = H((function(e) {
                                    var t;
                                    return F(this, (function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return [4, e.blob()];
                                            case 1:
                                                t = n.sent();
                                                return [2, window.URL.createObjectURL(t)]
                                        }
                                    }))
                                })), function(e) {
                                    return s.apply(this, arguments)
                                }));
                                r = fetch(e ? M() : b()).then(function() {
                                    var e = H((function(e) {
                                        var t;
                                        return F(this, (function(n) {
                                            switch (n.label) {
                                                case 0:
                                                    return [4, e.blob()];
                                                case 1:
                                                    t = n.sent();
                                                    return [2, window.URL.createObjectURL(t)]
                                            }
                                        }))
                                    }));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }());
                                return [4, Promise.all([n, r])];
                            case 1:
                                i = G.apply(void 0, [c.sent(), 2]), a = i[0], u = i[1];
                                o.Z.dispatch({
                                    type: "PREMIUM_TUTORIAL_FETCH_WOW_MOMENT_MEDIA_SUCCESS",
                                    wumpusMedia: a,
                                    helperMedia: u
                                });
                                return [3, 3];
                            case 2:
                                c.sent();
                                o.Z.dispatch({
                                    type: "PREMIUM_TUTORIAL_IS_FETCHING_WOW_MOMENT_MEDIA",
                                    value: !1
                                });
                                (0, _.Dd)(!1);
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                        var s
                    }))
                }));
                return j.apply(this, arguments)
            }

            function Y() {
                var e = G(i.useState(!0), 2),
                    t = e[0],
                    n = e[1],
                    a = (0, u.e7)([d.Z], (function() {
                        return d.Z.wowMomentHelperMedia
                    })),
                    o = (0, I.rO)() ? "video/mp4" : "video/webm";
                return (0, r.jsx)("div", {
                    children: t && null !== a && (0, r.jsx)(s.Z, {
                        className: U().videoWrapperForHelper,
                        autoPlay: !0,
                        onEnded: function() {
                            n(!1);
                            (0, _.HY)(!1)
                        },
                        children: (0, r.jsx)("source", {
                            src: a,
                            type: o
                        })
                    })
                })
            }
            const k = function() {
                var e = (0, u.e7)([c.Z], (function() {
                        return c.Z.useReducedMotion
                    })),
                    t = (0, T.dA)("PremiumSubscriptionWowMoment"),
                    n = (0, u.cj)([d.Z], (function() {
                        return {
                            wumpusMedia: d.Z.wowMomentWumpusMedia,
                            helperMedia: d.Z.wowMomentHelperMedia,
                            isFetchingMedia: d.Z.isFetchingWowMomentMedia,
                            canPlayWowMoment: d.Z.canPlayWowMoment
                        }
                    })),
                    o = n.wumpusMedia,
                    p = n.helperMedia,
                    M = n.isFetchingMedia,
                    N = n.canPlayWowMoment,
                    E = G(i.useState(!1), 2),
                    h = E[0],
                    m = E[1],
                    R = (0, I.vu)(),
                    A = R > 52 || -1 === R,
                    S = (0, I.rO)(),
                    D = A || S,
                    b = S ? "video/mp4" : "video/webm";
                D && !e && N && t && null === o && null === p && !1 === M && W(S);
                i.useEffect((function() {
                    var t = function() {
                        if ((0, T.z2)("PremiumSubscriptionWowMoment-maybeActivateWowMoment", !e && D)) {
                            m(!0);
                            B = setTimeout((function() {
                                m(!1);
                                L(!0);
                                O.default.track(w.rMx.PREMIUM_WOW_MOMENT_VIEWED, {
                                    wow_moment_type: f.X0.GRADIENT_HIGHLIGHT
                                })
                            }), 2e3)
                        }
                        if (e) {
                            (0, _.HY)(!1);
                            (0, _.Dd)(!1)
                        }
                        D || (0, _.Dd)(!1)
                    };
                    l.S.subscribe(w.CkL.PREMIUM_SUBSCRIPTION_CREATED, t);
                    return function() {
                        l.S.unsubscribe(w.CkL.PREMIUM_SUBSCRIPTION_CREATED, t)
                    }
                }), [e, D]);
                var v = G(i.useState(!1), 2),
                    C = v[0],
                    L = v[1],
                    y = G(i.useState(!1), 2),
                    P = y[0],
                    Z = y[1],
                    x = (0, a.useSpring)({
                        opacity: C ? .2 : 0,
                        config: {
                            duration: 100
                        },
                        immediate: e
                    }),
                    g = (0, a.useSpring)({
                        x: P ? "100%" : "-100%",
                        config: {
                            duration: 500
                        },
                        immediate: e || !P
                    });
                i.useEffect((function() {
                    var e = -1;
                    C && (e = window.setTimeout((function() {
                        Z(!0)
                    }), 1e3));
                    return function() {
                        window.clearTimeout(e)
                    }
                }), [C]);
                i.useEffect((function() {
                    var e = -1;
                    P && (e = window.setTimeout((function() {
                        Z(!1);
                        L(!1);
                        (0, _.Dd)(!1)
                    }), 1e3));
                    return function() {
                        window.clearTimeout(e)
                    }
                }), [P]);
                return (0, r.jsxs)("div", {
                    className: U().wrapper,
                    children: [h && null !== o && (0, r.jsx)(s.Z, {
                        autoPlay: !0,
                        className: U().videoWrapper,
                        onPlay: function() {
                            clearTimeout(B);
                            O.default.track(w.rMx.PREMIUM_WOW_MOMENT_VIEWED, {
                                wow_moment_type: f.X0.WUMPUS_FLIGHT
                            })
                        },
                        onTimeUpdate: function(e) {
                            if (e.currentTarget.currentTime > 4) {
                                (0, _.HY)(!0);
                                (0, _.Dd)(!1)
                            }
                        },
                        onEnded: function() {
                            m(!1)
                        },
                        children: (0, r.jsx)("source", {
                            src: o,
                            type: b
                        })
                    }), (0, r.jsx)(a.animated.div, {
                        className: U().gadientHighlight,
                        style: x
                    }), (0, r.jsx)(a.animated.div, {
                        className: U().swipeWrapper,
                        style: g,
                        children: (0, r.jsxs)("svg", {
                            className: U().swipe,
                            viewBox: "0 0 848 1024",
                            fill: "none",
                            children: [(0, r.jsx)("path", {
                                d: "M257.206 1024L0 0H341.333L598.539 1024H257.206Z",
                                fill: "white"
                            }), (0, r.jsx)("path", {
                                d: "M847.975 1024H690.436L433.231 0H590.769L847.975 1024Z",
                                fill: "white"
                            })]
                        })
                    })]
                })
            }
        },
        401340: (e, t, n) => {
            "use strict";
            n.d(t, {
                k: () => i
            });
            var r = n(744564),
                i = function(e) {
                    r.Z.dispatch({
                        type: "SET_ACTIVE_SUBSTEP",
                        substep: e
                    })
                }
        },
        652486: (e, t, n) => {
            "use strict";
            n.d(t, {
                S: () => u
            });
            var r = n(525628),
                i = n(567403),
                a = n(203600),
                u = function(e) {
                    var t = i.Z.getGuildCount(),
                        n = r.WZ.getCurrentConfig({
                            location: "f91270_1"
                        }).canUseCollectiblesIAP;
                    return e === a.QD.PROFILE_CUSTOMIZATION ? a.MY[e].filter((function(e) {
                        switch (e) {
                            case a.H6.PROFILE_CUSTOMIZATION_GUILD_PROFILES:
                                return 0 !== t;
                            case a.H6.PROFILE_CUSTOMIZATION_AVATAR_DECORATIONS:
                                return n;
                            default:
                                return !0
                        }
                    })) : a.MY[e]
                }
        },
        964262: (e, t, n) => {
            "use strict";
            n.d(t, {
                X0: () => r,
                xW: () => I,
                h9: () => l,
                VS: () => _,
                RI: () => d,
                dK: () => T,
                fW: () => f,
                $u: () => p
            });
            var r, i = n(896490),
                a = n(436145),
                u = n(305082),
                o = n(401340),
                c = n(652486),
                s = n(203600),
                O = n(473708);
            ! function(e) {
                e.WUMPUS_FLIGHT = "wumpus_flight";
                e.GRADIENT_HIGHLIGHT = "gradient_highlight"
            }(r || (r = {}));
            var I = function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    switch (e) {
                        case s.H6.PROFILE_CUSTOMIZATION_AVATAR:
                            return O.Z.Messages.NITRODUCTION_ONBOARDING_BODY_PROFILE_CUSTOMIZATION_AVATAR;
                        case s.H6.PROFILE_CUSTOMIZATION_AVATAR_DECORATIONS:
                            return O.Z.Messages.NITRODUCTION_ONBOARDING_BODY_PROFILE_CUSTOMIZATION_AVATAR_DECORATIONS;
                        case s.H6.PROFILE_CUSTOMIZATION_BANNER:
                            return O.Z.Messages.NITRODUCTION_ONBOARDING_BODY_PROFILE_CUSTOMIZATION_BANNER;
                        case s.H6.PROFILE_CUSTOMIZATION_THEME:
                            return O.Z.Messages.NITRODUCTION_ONBOARDING_BODY_PROFILE_CUSTOMIZATION_THEME;
                        case s.H6.PROFILE_CUSTOMIZATION_GUILD_PROFILES:
                            return O.Z.Messages.NITRODUCTION_ONBOARDING_BODY_PROFILE_CUSTOMIZATION_GUILD_PROFILES;
                        case s.H6.BOOSTING_GUILD_MENU_ITEM:
                            return O.Z.Messages.NITRODUCTION_ONBOARDING_BODY_BOOSTING_GUILD_MENU_ITEM;
                        case s.H6.BOOSTING_GUILD_BANNER:
                            return O.Z.Messages.NITRODUCTION_ONBOARDING_BODY_BOOSTING_GUILD_BANNER;
                        case s.H6.CUSTOM_EMOJI_GENERAL:
                            return t ? O.Z.Messages.NITRODUCTION_ONBOARDING_BODY_CUSTOM_EMOJI_GENERAL2.format() : O.Z.Messages.NITRODUCTION_ONBOARDING_BODY_CUSTOM_EMOJI_GENERAL_UNFORMATTED;
                        case s.H6.CUSTOM_EMOJI_TRY_IT_OUT:
                            return O.Z.Messages.NITRODUCTION_ONBOARDING_BODY_CUSTOM_EMOJI_ANIMATED_EMOJI
                    }
                },
                l = function(e, t) {
                    if (null == t) return null;
                    var n = null,
                        r = (0, c.S)(e),
                        i = r.findIndex((function(e) {
                            return e === t
                        })); - 1 !== i && i !== r.length - 1 && (n = r[i + 1]);
                    return n
                },
                _ = function(e, t) {
                    if (null == t) return null;
                    var n = null,
                        r = (0, c.S)(e),
                        i = r.findIndex((function(e) {
                            return e === t
                        }));
                    i > 0 && (n = r[i - 1]);
                    return n
                },
                d = function(e) {
                    if ((0, u.z2)("dismissPremiumTutorialFlow-".concat(e))) {
                        (0, a.XL)();
                        (0, i.EW)(e);
                        (0, o.k)(null);
                        (0, a.p)(!1)
                    }
                },
                T = function(e) {
                    switch (e) {
                        case s.H6.CUSTOM_EMOJI_GENERAL:
                        case s.H6.CUSTOM_EMOJI_TRY_IT_OUT:
                            return [-8, -8, -1, -8];
                        case s.H6.BOOSTING_GUILD_BANNER:
                            return ["-10%", "10%", "-10%", "10%"];
                        case s.H6.PROFILE_CUSTOMIZATION_AVATAR:
                        case s.H6.PROFILE_CUSTOMIZATION_AVATAR_DECORATIONS:
                        case s.H6.PROFILE_CUSTOMIZATION_BANNER:
                        case s.H6.PROFILE_CUSTOMIZATION_GUILD_PROFILES:
                        case s.H6.PROFILE_CUSTOMIZATION_THEME:
                        case s.H6.BOOSTING_GUILD_MENU_ITEM:
                        default:
                            return [-12, -12, 12, -12]
                    }
                },
                f = function(e) {
                    switch (e) {
                        case s.QD.PROFILE_CUSTOMIZATION:
                        case s.QD.BOOSTING:
                            return !1;
                        case s.QD.CUSTOM_EMOJI:
                        default:
                            return !0
                    }
                },
                p = function(e) {
                    (0, u.z2)("dismissPremiumTutorialTooltip-".concat(e)) && (0, i.EW)(e)
                }
        }
    }
]);
//# sourceMappingURL=913f82e7a0aa3c1dcf3a.js.map