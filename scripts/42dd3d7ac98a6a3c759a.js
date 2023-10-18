"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [61670, 38479, 72935], {
        661299: (e, r, t) => {
            t.d(r, {
                Z: () => f
            });
            var n = t(785893),
                o = (t(667294), t(294184)),
                i = t.n(o),
                l = t(228721),
                c = t(349480),
                s = t.n(c);

            function a(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }
            var u = (0, l.Z)();
            const f = function(e) {
                var r, t = e.open,
                    o = e.className,
                    l = e.withHighlight,
                    c = void 0 !== l && l;
                return (0, n.jsxs)("svg", {
                    width: "18",
                    height: "18",
                    className: i()(s().button, o, (r = {}, a(r, s().open, t), a(r, s().withHighlight, c), r)),
                    children: [c && (0, n.jsx)("defs", {
                        children: (0, n.jsxs)("linearGradient", {
                            id: u,
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "18",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, n.jsx)("stop", {
                                offset: "0",
                                stopColor: "#B473F5"
                            }), (0, n.jsx)("stop", {
                                offset: "1",
                                stopColor: "#E292AA"
                            })]
                        })
                    }), (0, n.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, n.jsx)("path", {
                            d: "M0 0h18v18H0"
                        }), (0, n.jsx)("path", {
                            stroke: c ? "url(#".concat(u, ")") : "currentColor",
                            d: "M4.5 4.5l9 9",
                            strokeLinecap: "round"
                        }), (0, n.jsx)("path", {
                            stroke: c ? "url(#".concat(u, ")") : "currentColor",
                            d: "M13.5 4.5l-9 9",
                            strokeLinecap: "round"
                        })]
                    })]
                })
            }
        },
        627379: (e, r, t) => {
            t.d(r, {
                O: () => a
            });
            var n = t(785893),
                o = (t(667294), t(795308)),
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
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function s(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        t = i[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        t = i[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }
            var a = function(e) {
                var r = e.width,
                    t = void 0 === r ? 24 : r,
                    a = e.height,
                    u = void 0 === a ? 24 : a,
                    f = e.color,
                    p = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    b = void 0 === d ? "" : d,
                    g = s(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", c(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            l(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(g)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87c-.625 0-1.178-.162-1.66-.485-.482-.324-.855-.777-1.121-1.359C4.133 13.437 4 12.762 4 12c0-.755.14-1.423.42-2.005.288-.583.701-1.039 1.24-1.37.546-.33 1.197-.495 1.951-.495.64 0 1.211.136 1.714.41.51.272.895.657 1.154 1.153l-1.218.873c-.367-.676-.913-1.013-1.639-1.013-.661 0-1.168.215-1.52.646-.352.425-.528 1.025-.528 1.8 0 .784.176 1.388.528 1.812.352.424.859.636 1.52.636.295 0 .564-.054.809-.162.251-.115.445-.27.582-.463v-.927H7.299v-1.402h3.245v4.226H9.272l-.205-.712c-.424.575-1.053.863-1.887.863Zm6.34-.151h-1.574V8.28h1.574v7.438Zm1.51 0h1.574v-2.824h2.76v-1.423h-2.76V9.704H20V8.28h-4.97v7.438Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }
        },
        663207: (e, r, t) => {
            t.d(r, {
                r: () => a
            });
            var n = t(785893),
                o = (t(667294), t(795308)),
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
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function s(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        t = i[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        t = i[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }
            var a = function(e) {
                var r = e.width,
                    t = void 0 === r ? 24 : r,
                    a = e.height,
                    u = void 0 === a ? 24 : a,
                    f = e.color,
                    p = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    b = void 0 === d ? "" : d,
                    g = s(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", c(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            l(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(g)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        d: "M10.815 2.861c.373-1.148 1.997-1.148 2.37 0l1.893 5.824H21.2c1.207 0 1.71 1.545.733 2.255l-4.954 3.599 1.892 5.824c.373 1.148-.941 2.103-1.918 1.393L12 18.156l-4.954 3.6c-.977.71-2.291-.245-1.918-1.393L7.02 14.54l-4.954-3.6c-.976-.71-.475-2.254.733-2.254h6.123l1.893-5.824Z",
                        className: b
                    })
                }))
            }
        },
        337509: (e, r, t) => {
            t.d(r, {
                Q: () => n,
                i: () => i
            });
            var n, o = t(761673);
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
        243399: (e, r, t) => {
            t.d(r, {
                E: () => o
            });
            var n = (0, t(260561).B)({
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
        761673: (e, r, t) => {
            t.d(r, {
                PZ: () => n,
                XX: () => l
            });
            var n, o = t(848285),
                i = t(2590);
            ! function(e) {
                e.PUBLIC = "PUBLIC";
                e.INVITE_ONLY = "INVITE_ONLY"
            }(n || (n = {}));

            function l(e) {
                var r = new Set(e.features),
                    t = r.has(i.oNc.COMMUNITY) && r.has(i.oNc.DISCOVERABLE) ? n.PUBLIC : n.INVITE_ONLY,
                    l = function(e) {
                        if (null == e) return !1;
                        if (e instanceof o.Z) return e.premiumSubscriberCount > 0 || e.premiumTier > i.Eu4.NONE;
                        if (null != e.premiumSubscriptionCount) return e.premiumSubscriptionCount > 0;
                        return !1
                    }(e),
                    c = 0;
                if (l) {
                    var s;
                    c = null !== (s = e instanceof o.Z ? e.premiumSubscriberCount : e.premiumSubscriptionCount) && void 0 !== s ? s : 0
                }
                var a = e instanceof o.Z ? e.premiumTier : i.Eu4.NONE;
                return {
                    verified: r.has(i.oNc.VERIFIED),
                    partnered: r.has(i.oNc.PARTNERED),
                    community: r.has(i.oNc.COMMUNITY),
                    staff: r.has(i.oNc.INTERNAL_EMPLOYEE_ONLY),
                    visibility: t,
                    premium: l,
                    premiumSubscriberCount: c,
                    premiumTier: a
                }
            }
        },
        491379: (e, r, t) => {
            t.d(r, {
                Z: () => c
            });
            var n = t(337509),
                o = t(243399),
                i = t(761673),
                l = new Set([n.Q.PARTNERED, n.Q.VERIFIED, n.Q.VERIFIED_AND_PARTNERED, n.Q.COMMUNITY, n.Q.DISCOVERABLE]);

            function c(e) {
                var r;
                if (!(0, o.E)(null !== (r = null == e ? void 0 : e.id) && void 0 !== r ? r : "")) return !1;
                if (null == e) return !1;
                var t = (0, i.XX)(e),
                    c = (0, n.i)(t);
                return l.has(c)
            }
        },
        275086: (e, r, t) => {
            t.d(r, {
                c: () => O
            });
            var n = t(785893),
                o = (t(667294), t(70418)),
                i = t(661299),
                l = t(393299),
                c = t(930865),
                s = t(596801),
                a = t(733274),
                u = t(2590),
                f = t(473708),
                p = t(562275),
                d = t.n(p);

            function b(e) {
                var r = e.guild,
                    t = e.banner;
                return (0, n.jsx)("div", {
                    className: d().guildBanner,
                    style: {
                        backgroundImage: "url(".concat(t)
                    },
                    children: (0, n.jsxs)("div", {
                        className: d().guildHeader,
                        children: [(0, n.jsx)(l.Z, {
                            guild: r,
                            isBannerVisible: !0
                        }), (0, n.jsx)(o.Heading, {
                            className: d().guildName,
                            variant: "heading-md/semibold",
                            children: r.toString()
                        }), (0, n.jsx)(i.Z, {
                            className: d().dropdown,
                            open: !1
                        })]
                    })
                })
            }

            function g(e, r) {
                var t = (0, c.nW)(e);
                return r ? f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format({
                    targetLevelOrPlan: t
                }) : f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format({
                    targetLevelOrPlan: t
                })
            }

            function O(e) {
                var r = e.analyticsLocations,
                    t = e.analyticsLocation,
                    o = e.guild,
                    i = e.isGIF,
                    l = e.banner,
                    p = i ? (0, c._p)(u.oNc.ANIMATED_BANNER) : (0, c._p)(u.oNc.BANNER);
                null != p && (0, s.Z)({
                    analyticsLocations: r,
                    analyticsSourceLocation: t,
                    guild: o,
                    headerProps: {
                        title: f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
                        subtitle: g(p, i),
                        image: (0, n.jsx)(b, {
                            guild: o,
                            banner: l
                        })
                    },
                    perkIntro: f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
                    perks: i ? (0, a.zC)() : (0, a.XO)()
                })
            }
        },
        393299: (e, r, t) => {
            t.d(r, {
                Z: () => L
            });
            var n, o = t(785893),
                i = (t(667294), t(294184)),
                l = t.n(i),
                c = t(202351),
                s = t(70418),
                a = t(491379),
                u = t(591406),
                f = t(859917),
                p = t(784648),
                d = t(2590),
                b = t(233593),
                g = t.n(b);

            function O(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }
            var h, E = (O(n = {}, d.Eu4.NONE, g().iconBackgroundTierNone), O(n, d.Eu4.TIER_1, g().iconBackgroundTierOne), O(n, d.Eu4.TIER_2, g().iconBackgroundTierTwo), O(n, d.Eu4.TIER_3, g().iconBackgroundTierThree), n),
                y = (O(h = {}, d.Eu4.NONE, g().iconTierNone), O(h, d.Eu4.TIER_1, g().iconTierOne), O(h, d.Eu4.TIER_2, g().iconTierTwo), O(h, d.Eu4.TIER_3, g().iconTierThree), h);

            function m(e) {
                var r = e.premiumTier,
                    t = e.iconBackgroundClassName,
                    n = e.iconClassName,
                    i = e.size;
                return (0,
                    o.jsx)(f.Z, {
                    className: l()(t, E[r]),
                    size: i,
                    children: (0, o.jsx)(p.Z, {
                        tier: r,
                        className: l()(n, g().boostedGuildIconGem, y[r])
                    })
                })
            }
            var v = t(21372),
                j = t(473903),
                w = t(206986),
                C = t(521723),
                P = t(930865),
                _ = t(473708),
                N = t(625337),
                I = t.n(N);

            function R(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function D(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function T(e) {
                var r = e.guild,
                    t = e.isBannerVisible,
                    n = e.disableBoostClick,
                    i = (0, c.e7)([j.default, v.ZP], (function() {
                        var e = j.default.getCurrentUser();
                        return v.ZP.isMember(r.id, null == e ? void 0 : e.id)
                    })),
                    l = r.premiumTier,
                    a = r.premiumSubscriberCount;
                if (0 === a && l === d.Eu4.NONE) return null;
                var f = function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        i && !n && (0, u.f)({
                            guildId: r.id,
                            location: {
                                section: d.jXE.GUILD_HEADER,
                                object: d.qAy.BOOST_GEM_ICON
                            }
                        })
                    },
                    p = l === d.Eu4.NONE ? _.Z.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : P.nW(l),
                    b = (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("div", {
                            className: I().tierTooltipTitle,
                            children: p
                        }), (0, o.jsx)("div", {
                            children: _.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
                                subscriberCount: a
                            })
                        })]
                    });
                return (0, o.jsx)("div", {
                    className: I().guildIconContainer,
                    children: (0, o.jsx)(s.Tooltip, {
                        text: b,
                        position: "bottom",
                        "aria-label": null != p ? p : "",
                        children: function(e) {
                            return (0, o.jsx)(s.Clickable, D(function(e) {
                                for (var r = 1; r < arguments.length; r++) {
                                    var t = null != arguments[r] ? arguments[r] : {},
                                        n = Object.keys(t);
                                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                    }))));
                                    n.forEach((function(r) {
                                        R(e, r, t[r])
                                    }))
                                }
                                return e
                            }({}, e), {
                                className: I().premiumGuildIcon,
                                onClick: f,
                                children: (0, o.jsx)(m, {
                                    premiumTier: l,
                                    iconBackgroundClassName: t ? I().boostedGuildTierIconBackgroundWithVisibleBanner : null,
                                    iconClassName: t && l !== d.Eu4.TIER_3 ? I().boostedGuildTierMutedIconWithVisibleBanner : null
                                })
                            }))
                        }
                    })
                })
            }

            function x(e) {
                var r = e.guild,
                    t = e.disableColor,
                    n = e.disableBoostClick;
                return (0, a.Z)(r) ? (0, o.jsx)("div", {
                    className: I().guildIconV2Container,
                    children: (0, o.jsx)(C.Z, {
                        guild: r,
                        tooltipPosition: "bottom",
                        tooltipColor: s.Tooltip.Colors.PRIMARY,
                        className: l()(I().guildBadge, R({}, I().disableColor, t)),
                        disableBoostClick: n
                    })
                }) : (0, o.jsx)("div", {
                    className: I().guildIconContainer,
                    children: (0, o.jsx)(w.Z, {
                        guild: r,
                        tooltipPosition: "bottom",
                        tooltipColor: s.Tooltip.Colors.PRIMARY,
                        className: l()(I().guildBadge, R({}, I().disableColor, t))
                    })
                })
            }

            function L(e) {
                var r = e.guild,
                    t = e.isBannerVisible,
                    n = e.disableBoostClick;
                return (0, a.Z)(r) ? (0, o.jsx)(x, {
                    guild: r,
                    disableColor: !1,
                    disableBoostClick: n
                }) : r.hasFeature(d.oNc.VERIFIED) || r.hasFeature(d.oNc.PARTNERED) ? (0, o.jsx)(x, {
                    guild: r,
                    disableColor: !t
                }) : (0, o.jsx)(T, {
                    guild: r,
                    isBannerVisible: t,
                    disableBoostClick: n
                })
            }
        },
        311260: (e, r, t) => {
            t.d(r, {
                $p: () => u,
                AK: () => h,
                Ae: () => E,
                Es: () => g,
                PT: () => p,
                U$: () => d,
                kH: () => O
            });
            var n = t(496486),
                o = t(921431);

            function i(e, r, t, n, o, i, l) {
                try {
                    var c = e[i](l),
                        s = c.value
                } catch (e) {
                    t(e);
                    return
                }
                c.done ? r(s) : Promise.resolve(s).then(n, o)
            }

            function l(e) {
                return function() {
                    var r = this,
                        t = arguments;
                    return new Promise((function(n, o) {
                        var l = e.apply(r, t);

                        function c(e) {
                            i(l, n, o, c, s, "next", e)
                        }

                        function s(e) {
                            i(l, n, o, c, s, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }
            var c = function(e, r) {
                var t, n, o, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
                        return function(i) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (t = 1,
                                    n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
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
                                        n = i[1];
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
                                i = r.call(e, l)
                            } catch (e) {
                                i = [6, e];
                                n = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, c])
                    }
                }
            };

            function s(e) {
                return new Promise((function(r) {
                    var t = new FileReader;
                    t.onload = function(e) {
                        var t, n = null === (t = e.target) || void 0 === t ? void 0 : t.result;
                        r("string" == typeof n ? n : "")
                    };
                    t.readAsDataURL(e)
                }))
            }

            function a(e, r, t, n) {
                var o = e.naturalWidth / e.width,
                    i = r.width / 2,
                    l = r.height / 2,
                    c = (e.width / 2 - i - t.x) * o,
                    s = (e.height / 2 - l - t.y) * o,
                    a = r.width * o,
                    u = r.height * o;
                return {
                    x: c,
                    y: s,
                    scaledCropWidth: a,
                    scaledCropHeight: u,
                    canvasWidth: Math.min(a, n.width),
                    canvasHeight: Math.min(u, n.height)
                }
            }

            function u(e, r, t, n, o) {
                return f.apply(this, arguments)
            }

            function f() {
                return (f = l((function(e, r, n, i, l) {
                    var u, f, p, d, b, g, O, h;
                    return c(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                u = a(r, n, i, l), f = u.x, p = u.y, d = u.scaledCropWidth, b = u.scaledCropHeight;
                                return [4, e.arrayBuffer()];
                            case 1:
                                g = c.sent();
                                O = new Worker(new URL(t.p + t.u(92827), t.b));
                                h = new Promise((function(e, r) {
                                    O.onmessage = function(t) {
                                        var n = t.data;
                                        if (n.type === o.u.CROP_GIF_COMPLETE) {
                                            e(s(new Blob([n.result])));
                                            O.terminate()
                                        } else if (n.type === o.u.CROP_GIF_ERROR) {
                                            r(new Error("Error cropping GIF"));
                                            O.terminate()
                                        }
                                    }
                                }));
                                O.postMessage({
                                    type: o.u.CROP_GIF_START,
                                    gif: new Uint8Array(g),
                                    x: 0 | f,
                                    y: 0 | p,
                                    width: 0 | d,
                                    height: 0 | b
                                });
                                return [2, {
                                    result: h,
                                    cancelFn: function() {
                                        return O.terminate()
                                    }
                                }]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function p(e, r, t, n) {
                var o = a(e, r, t, n),
                    i = o.x,
                    l = o.y,
                    c = o.scaledCropWidth,
                    s = o.scaledCropHeight,
                    u = o.canvasWidth,
                    f = o.canvasHeight,
                    p = document.createElement("canvas");
                p.width = u;
                p.height = f;
                var d = p.getContext("2d");
                null != d && d.drawImage(e, i, l, c, s, 0, 0, p.width, p.height);
                return p.toDataURL("image/png")
            }

            function d(e, r, t) {
                return {
                    x: (0, n.clamp)(e, t.left, t.right),
                    y: (0, n.clamp)(r, t.bottom, t.top)
                }
            }

            function b(e, r, t, n) {
                var i = t,
                    l = n;
                if (t > o.vJ) {
                    i = o.vJ;
                    l = n * (o.vJ / t)
                }
                return t / n < e ? {
                    width: i,
                    height: l
                } : {
                    width: i * (r / l),
                    height: r
                }
            }

            function g(e, r, t) {
                switch (e) {
                    case o.pC.AVATAR:
                    case o.pC.AVATAR_DECORATION:
                        return {
                            width: r, height: t
                        };
                    case o.pC.BANNER:
                        return b(o.MY, o.qj, r, t);
                    case o.pC.GUILD_BANNER:
                        return b(o.Ij, o.C5, r, t);
                    case o.pC.VIDEO_BACKGROUND:
                        return b(o.Ff, o.PB, r, t);
                    case o.pC.SCHEDULED_EVENT_IMAGE:
                        return b(o.ut, o.WV, r, t);
                    case o.pC.HOME_HEADER:
                        return b(o.sX, o.SW, r, t)
                }
            }

            function O(e, r, t) {
                var n = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    o = e - t.width,
                    i = r - t.height;
                if (0 !== o) {
                    n.left = -Math.abs(o / 2);
                    n.right = o / 2
                }
                if (0 !== i) {
                    n.bottom = -Math.abs(i / 2);
                    n.top = i / 2
                }
                return n
            }

            function h(e, r, t, n) {
                switch (e) {
                    case o.pC.AVATAR:
                    case o.pC.AVATAR_DECORATION:
                        var i = Math.min(r, t);
                        return {
                            width: i, height: i
                        };
                    case o.pC.BANNER:
                        var l = Math.min(r, o.vJ);
                        return {
                            width: l, height: l * (1 / o.MY)
                        };
                    case o.pC.GUILD_BANNER:
                        var c = Math.min(r, o.vJ);
                        return {
                            width: c, height: Math.min(c * (9 / 16), n)
                        };
                    case o.pC.VIDEO_BACKGROUND:
                        var s = Math.min(r, o.vJ);
                        return {
                            width: s, height: s * (9 / 16)
                        };
                    case o.pC.SCHEDULED_EVENT_IMAGE:
                        var a = Math.min(r, o.vJ);
                        return {
                            width: a, height: .4 * a
                        };
                    case o.pC.HOME_HEADER:
                        var u = Math.min(r, o.vJ);
                        return {
                            width: u, height: u * (1 / o.sX)
                        }
                }
            }

            function E(e, r, t) {
                var n = e.naturalWidth / e.naturalHeight,
                    o = r,
                    i = t;
                e.naturalWidth > e.naturalHeight ? o /= n : i *= n;
                var l = {
                    height: o,
                    width: i
                };
                return p(e, {
                    width: e.width,
                    height: e.height
                }, {
                    x: 0,
                    y: 0
                }, l)
            }
        },
        338479: (e, r, t) => {
            t.d(r, {
                Z: () => Z
            });
            var n = t(785893),
                o = t(667294),
                i = t(202351),
                l = t(70418),
                c = t(19585),
                s = t(275086),
                a = t(596801),
                u = t(567403),
                f = t(464187),
                p = t(217674),
                d = t(2590),
                b = t(733274),
                g = t(473708),
                O = t(460590),
                h = t.n(O);

            function E(e) {
                var r = e.analyticsSection,
                    t = e.analyticsPage,
                    o = e.isGIF,
                    O = e.banner,
                    E = (0, i.e7)([f.Z], (function() {
                        return f.Z.getGuildId()
                    })),
                    y = (0, i.e7)([u.Z], (function() {
                        return u.Z.getGuild(E)
                    })),
                    m = (0, c.Z)().analyticsLocations;
                if (null == y || y.hasFeature(d.oNc.ANIMATED_BANNER) || !o && y.hasFeature(d.oNc.BANNER)) return null;
                return (0, n.jsxs)("div", {
                    className: h().container,
                    children: [(0, n.jsx)(p.Z, {
                        className: h().guildBoostingIcon
                    }), (0, n.jsx)(l.Text, {
                        color: "header-primary",
                        variant: "text-sm/semibold",
                        children: g.Z.Messages.PREMIUM_GUILD_PREVIEW
                    }), (0, n.jsx)(l.Button, {
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.LINK,
                        className: h().subscribeButton,
                        onClick: function() {
                            if (null != y) {
                                var e = {
                                    section: r,
                                    page: t,
                                    object: d.qAy.UPSELL_HEADER
                                };
                                null != O ? (0, s.c)({
                                    analyticsLocations: m,
                                    analyticsLocation: e,
                                    guild: y,
                                    isGIF: o,
                                    banner: O
                                }) : (0, a.Z)({
                                    analyticsLocations: m,
                                    analyticsSourceLocation: e,
                                    guild: y,
                                    perks: o ? (0, b.zC)() : (0, b.XO)()
                                })
                            }
                        },
                        children: g.Z.Messages.PREMIUM_GUILD_BOOST_SERVER
                    })]
                })
            }
            var y = t(153686),
                m = t(294184),
                v = t.n(m),
                j = t(366007),
                w = t(406493),
                C = t(98265),
                P = t(477002),
                _ = t.n(P);

            function N(e) {
                var r = e.text,
                    t = e.textSize,
                    o = void 0 === t ? C.Z.Sizes.SIZE_12 : t,
                    i = e.textColor,
                    l = void 0 === i ? C.Z.Colors.STANDARD : i,
                    c = e.className,
                    s = e.button,
                    a = e.reducedRightPadding,
                    u = void 0 !== a && a;
                return (0, n.jsxs)("div", {
                    className: v()(u ? _().noticeWithoutRightPadding : _().noticeWithRightPadding, c),
                    children: [(0, n.jsxs)("div", {
                        className: _().noticeLeft,
                        children: [(0, n.jsx)(w.Z, {
                            className: _().icon,
                            color: j.JX.PREMIUM_TIER_2
                        }), (0, n.jsx)(C.Z, {
                            className: _().text,
                            size: o,
                            color: l,
                            children: r
                        })]
                    }), s]
                })
            }
            var I = t(455706),
                R = t(473903),
                D = t(652591),
                T = t(116094),
                x = t(921431),
                L = t(203600),
                S = t(167633),
                A = t.n(S);

            function M(e) {
                var r = e.analyticsSection,
                    t = e.type,
                    s = (0, i.e7)([R.default], (function() {
                        return R.default.getCurrentUser()
                    })),
                    a = T.ZP.canUseAnimatedAvatar(s),
                    u = T.ZP.canUsePremiumProfileCustomization(s),
                    f = t === x.pC.BANNER && u || t === x.pC.AVATAR && a,
                    p = (0, c.Z)(y.Z.PREMIUM_PREVIEW_UPSELL_HEADER).sourceAnalyticsLocations;
                o.useEffect((function() {
                    f || D.default.track(d.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: r,
                        location_stack: p
                    })
                }), [f, r, p]);
                if (f) return null;
                var b = (0, n.jsx)(I.Z, {
                    className: A().getNitroLink,
                    size: l.Button.Sizes.SMALL,
                    look: l.Button.Looks.LINK,
                    color: l.Button.Colors.LINK,
                    subscriptionTier: L.Si.TIER_2,
                    buttonText: g.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
                    showIcon: !1,
                    premiumModalAnalyticsLocation: {
                        section: r,
                        object: d.qAy.BUTTON_CTA
                    },
                    disableShine: !0
                });
                return (0, n.jsx)(N, {
                    reducedRightPadding: !0,
                    className: A().nitroPreviewUpsell,
                    text: g.Z.Messages.PREMIUM_PREVIEW.format(),
                    textSize: C.Z.Sizes.SIZE_14,
                    textColor: C.Z.Colors.HEADER_PRIMARY,
                    button: b
                })
            }

            function Z(e) {
                var r = e.type,
                    t = e.analyticsPage,
                    o = e.analyticsSection,
                    i = e.isGIF,
                    l = e.banner;
                return [x.pC.BANNER, x.pC.AVATAR].includes(r) && i ? (0, n.jsx)(M, {
                    analyticsSection: o,
                    type: r
                }) : r === x.pC.GUILD_BANNER ? (0, n.jsx)(E, {
                    analyticsSection: o,
                    analyticsPage: t,
                    isGIF: i,
                    banner: l
                }) : null
            }
        },
        521723: (e, r, t) => {
            t.d(r, {
                Z: () => J
            });
            var n = t(785893),
                o = (t(667294),
                    t(294184)),
                i = t.n(o),
                l = t(202351),
                c = t(795308),
                s = t(575945),
                a = t(70418),
                u = t(337509),
                f = t(761673),
                p = t(591406),
                d = t(64234),
                b = t(21372),
                g = t(473903),
                O = t(930865),
                h = t(859917),
                E = t(366007),
                y = t(459308),
                m = t(168075),
                v = t(361290),
                j = t(633878);

            function w(e, r, t) {
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
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    n.forEach((function(r) {
                        w(e, r, t[r])
                    }))
                }
                return e
            }

            function P(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function _(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        t = i[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        t = i[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }
            const N = (0, m.hN)((function(e) {
                var r = e.width,
                    t = void 0 === r ? 10 : r,
                    o = e.height,
                    i = void 0 === o ? 10 : o,
                    l = e.color,
                    c = void 0 === l ? "currentColor" : l,
                    s = _(e, ["width", "height", "color"]);
                return (0, n.jsx)("svg", P(C({}, (0, j.Z)(s)), {
                    width: t,
                    height: i,
                    viewBox: "0 0 10 10",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, n.jsx)("path", {
                        d: "M4.16667 8.33333V5.83333H5.83333V8.33333H7.91667V5H9.16667L5 1.25L0.833333 5H2.08333V8.33333H4.16667Z",
                        fill: c
                    })
                }))
            }), (function(e) {
                var r = e.width,
                    t = void 0 === r ? 10 : r,
                    o = e.height,
                    i = void 0 === o ? 10 : o,
                    l = _(e, ["width", "height"]);
                return (0, n.jsx)(v.t, C({
                    width: t,
                    height: i
                }, l))
            }));
            var I = t(666303);

            function R(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function D(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function T(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        t = i[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        t = i[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }
            const x = (0, m.hN)((function(e) {
                var r = e.width,
                    t = void 0 === r ? 10 : r,
                    o = e.height,
                    i = void 0 === o ? 10 : o,
                    l = e.color,
                    c = void 0 === l ? "currentColor" : l,
                    s = T(e, ["width", "height", "color"]);
                return (0, n.jsxs)("svg", D(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            R(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, j.Z)(s)), {
                    width: t,
                    height: i,
                    viewBox: "0 0 10 10",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsx)("g", {
                        clipPath: "url(#clip0_1242_1450)",
                        children: (0, n.jsx)("path", {
                            d: "M5 0.833252C2.7 0.833252 0.833333 2.69992 0.833333 4.99992C0.833333 7.29992 2.7 9.16659 5 9.16659C7.3 9.16659 9.16667 7.29992 9.16667 4.99992C9.16667 2.69992 7.3 0.833252 5 0.833252ZM4.58333 8.30409C2.9375 8.09992 1.66667 6.69992 1.66667 4.99992C1.66667 4.74159 1.7 4.49575 1.75417 4.25409L3.75 6.24992V6.66659C3.75 7.12492 4.125 7.49992 4.58333 7.49992V8.30409ZM7.45833 7.24575C7.35 6.90825 7.04167 6.66659 6.66667 6.66659H6.25V5.41659C6.25 5.18742 6.0625 4.99992 5.83333 4.99992H3.33333V4.16659H4.16667C4.39583 4.16659 4.58333 3.97909 4.58333 3.74992V2.91659H5.41667C5.875 2.91659 6.25 2.54159 6.25 2.08325V1.91242C7.47083 2.40825 8.33333 3.60409 8.33333 4.99992C8.33333 5.86659 8 6.65409 7.45833 7.24575Z",
                            fill: c
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
            }), I.e);

            function L(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function S(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function A(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        t = i[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        t = i[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function M(e) {
                var r = e.width,
                    t = void 0 === r ? 10 : r,
                    o = e.height,
                    i = void 0 === o ? 10 : o,
                    l = e.color,
                    c = void 0 === l ? "currentColor" : l,
                    s = A(e, ["width", "height", "color"]);
                return (0,
                    n.jsxs)("svg", S(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            L(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, j.Z)(s)), {
                    width: t,
                    height: i,
                    viewBox: "0 0 17 22",
                    fill: c,
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
                    }), (0,
                        n.jsx)("defs", {
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
            var Z, B = t(690002),
                k = t(985651),
                V = t(2590),
                U = t(473708),
                G = t(845987),
                H = t.n(G);

            function F(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function W(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    n.forEach((function(r) {
                        F(e, r, t[r])
                    }))
                }
                return e
            }

            function Y(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }
            var Q = (F(Z = {}, u.Q.STAFF, {
                IconComponent: B.Z,
                foregroundDarkColor: c.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: c.Z.unsafe_rawColors.GREEN_360.css,
                backgroundLightColor: c.Z.unsafe_rawColors.GREEN_360.css
            }), F(Z, u.Q.VERIFIED_AND_PARTNERED, {
                IconComponent: k.Z,
                foregroundDarkColor: c.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: c.Z.unsafe_rawColors.GREEN_360.css,
                backgroundLightColor: c.Z.unsafe_rawColors.GREEN_360.css
            }), F(Z, u.Q.VERIFIED, {
                IconComponent: k.Z,
                foregroundDarkColor: c.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: c.Z.unsafe_rawColors.GREEN_360.css,
                backgroundLightColor: c.Z.unsafe_rawColors.GREEN_360.css
            }), F(Z, u.Q.PARTNERED, {
                IconComponent: y.Z,
                foregroundDarkColor: c.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: c.Z.unsafe_rawColors.BRAND_500.css,
                backgroundLightColor: c.Z.unsafe_rawColors.BRAND_500.css
            }), F(Z, u.Q.COMMUNITY, {
                IconComponent: N,
                foregroundDarkColor: c.Z.unsafe_rawColors.PRIMARY_500.css,
                foregroundLightColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundLightColor: c.Z.unsafe_rawColors.PRIMARY_500.css,
                premiumBackgroundColor: E.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                premiumForegroundColor: c.Z.unsafe_rawColors.WHITE_400.css
            }), F(Z, u.Q.DISCOVERABLE, {
                IconComponent: x,
                foregroundDarkColor: c.Z.unsafe_rawColors.PRIMARY_500.css,
                foregroundLightColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundLightColor: c.Z.unsafe_rawColors.PRIMARY_500.css,
                premiumBackgroundColor: E.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                premiumForegroundColor: c.Z.unsafe_rawColors.WHITE_400.css
            }), F(Z, u.Q.NONE, {}), Z);

            function X(e) {
                var r = e.guildTraits;
                return (0, n.jsxs)("div", {
                    className: H().tooltipPremiumFooterContainer,
                    children: [(0, n.jsxs)("div", {
                        className: i()(H().tooltipPremiumFooterSegment, H().tooltipPremiumFooterTierSegment),
                        children: [(0, n.jsx)(M, {
                            width: 18,
                            height: 18,
                            className: H().gemIcon
                        }), (0, n.jsx)(a.Text, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            children: O.nW(r.premiumTier)
                        })]
                    }), (0, n.jsx)("div", {
                        className: i()(H().tooltipPremiumFooterSegment),
                        children: (0, n.jsx)(a.Text, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            children: U.Z.Messages.SERVER_BADGE_PREMIUM_FOOTER_BOOST_COUNT.format({
                                count: r.premiumSubscriberCount
                            })
                        })
                    })]
                })
            }

            function z(e) {
                var r = e.badgeType,
                    t = e.guildTraits,
                    o = function(e, r) {
                        var t = r === f.PZ.PUBLIC ? U.Z.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN : U.Z.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY;
                        switch (e) {
                            case u.Q.STAFF:
                                return {
                                    tooltipTitle: U.Z.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipSubtitle: U.Z.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipDescription: U.Z.Messages.INTERNAL_EMPLOYEE_ONLY
                                };
                            case u.Q.VERIFIED:
                                return {
                                    tooltipTitle: U.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: U.Z.Messages.GUILD_VERIFIED, tooltipDescription: t
                                };
                            case u.Q.PARTNERED:
                                return {
                                    tooltipTitle: U.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: U.Z.Messages.GUILD_PARTNERED,
                                        tooltipDescription: t
                                };
                            case u.Q.VERIFIED_AND_PARTNERED:
                                return {
                                    tooltipTitle: U.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: U.Z.Messages.GUILD_VERIFIED_AND_PARTNERED, tooltipDescription: t
                                };
                            case u.Q.COMMUNITY:
                                return {
                                    tooltipTitle: U.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: U.Z.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY
                                };
                            case u.Q.DISCOVERABLE:
                                return {
                                    tooltipTitle: U.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: U.Z.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN
                                };
                            default:
                                return {
                                    tooltipTitle: U.Z.Messages.SERVER_BADGE_TITLE_UNKNOWN
                                }
                        }
                    }(r, t.visibility),
                    i = o.tooltipTitle,
                    l = o.tooltipSubtitle,
                    c = o.tooltipDescription;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: H().tooltipBodyContainer,
                        children: [(0, n.jsx)(a.Text, {
                            color: "interactive-active",
                            variant: "text-xs/bold",
                            children: i
                        }), null != l ? (0, n.jsx)(a.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: l
                        }) : null, null != c ? (0, n.jsx)(a.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: c
                        }) : null]
                    }), t.premium ? (0, n.jsx)(X, {
                        guildTraits: t
                    }) : null]
                })
            }

            function J(e) {
                var r = e.guild,
                    t = e.tooltipColor,
                    o = void 0 === t ? a.Tooltip.Colors.BRAND : t,
                    i = e.tooltipPosition,
                    c = e.className,
                    O = e.flowerStarClassName,
                    E = e.iconClassName,
                    y = e.badgeStrokeColor,
                    m = e.badgeColor,
                    v = e.size,
                    j = void 0 === v ? 16 : v,
                    w = e.disableBoostClick,
                    C = e["aria-label"],
                    P = void 0 !== C && C,
                    _ = (0, l.e7)([g.default, b.ZP], (function() {
                        var e = g.default.getCurrentUser();
                        return b.ZP.isMember(null == r ? void 0 : r.id, null == e ? void 0 : e.id)
                    })),
                    N = (0, l.e7)([d.Z], (function() {
                        return d.Z.theme
                    })),
                    I = (0, f.XX)(r),
                    R = (0, u.i)(I);
                if (R === u.Q.NONE) return null;
                var D, T, x = Q[R],
                    L = x.IconComponent,
                    S = x.backgroundDarkColor,
                    A = x.backgroundLightColor,
                    M = x.foregroundDarkColor,
                    Z = x.foregroundLightColor,
                    B = x.premiumBackgroundColor,
                    k = x.premiumForegroundColor;
                if (null == L) return null;
                if (I.premium) {
                    D = k;
                    T = B
                }
                var U = (0, s.wj)(N) ? M : Z,
                    G = (0, s.wj)(N) ? S : A;
                D = null != D ? D : U;
                T = null != T ? T : G;
                var F = function(e) {
                    if (I.premium && _ && !w) {
                        e.stopPropagation();
                        e.preventDefault();
                        (0, p.f)({
                            guildId: r.id,
                            location: {
                                section: V.jXE.GUILD_HEADER,
                                object: V.qAy.BOOST_GEM_ICON
                            }
                        })
                    }
                };
                return (0, n.jsx)(a.Tooltip, {
                    color: o,
                    position: i,
                    "aria-label": P,
                    text: (0, n.jsx)(z, {
                        badgeType: R,
                        guildTraits: I
                    }),
                    tooltipContentClassName: H().tooltipRemovePadding,
                    children: function(e) {
                        return (0, n.jsx)(a.Clickable, {
                            onClick: F,
                            children: (0, n.jsx)(h.Z, Y(W({}, e), {
                                className: c,
                                flowerStarClassName: O,
                                color: null != T ? T : m,
                                stroke: y,
                                size: j,
                                children: (0, n.jsx)(L, {
                                    className: E,
                                    color: D
                                })
                            }))
                        })
                    }
                })
            }
        },
        816240: (e, r, t) => {
            t.d(r, {
                Z: () => u
            });
            var n = t(785893),
                o = (t(667294), t(168075)),
                i = t(43338),
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
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function a(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        t = i[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        t = i[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }
            const u = (0, o.hN)((function(e) {
                var r = e.width,
                    t = void 0 === r ? 24 : r,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    p = e.foreground,
                    d = a(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", s(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            c(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(d)), {
                    width: t,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        className: p,
                        d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                        fill: f
                    })
                }))
            }), i.X)
        },
        855595: (e, r, t) => {
            t.d(r, {
                Z: () => u
            });
            var n = t(785893),
                o = (t(667294), t(168075)),
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
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function a(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        t = i[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        t = i[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }
            const u = (0, o.hN)((function(e) {
                var r = e.width,
                    t = void 0 === r ? 20 : r,
                    o = e.height,
                    i = void 0 === o ? 23 : o,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    p = e.foreground,
                    d = a(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", s(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            c(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(d)), {
                    width: t,
                    height: i,
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
            }), i.l)
        },
        71236: (e, r, t) => {
            t.d(r, {
                Z: () => u
            });
            var n = t(785893),
                o = (t(667294), t(168075)),
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
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function a(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        t = i[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        t = i[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }
            const u = (0, o.hN)((function(e) {
                var r = e.width,
                    t = void 0 === r ? 24 : r,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    p = e.foreground,
                    d = a(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", s(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            c(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(d)), {
                    width: t,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: f,
                        className: p,
                        d: "M21.924 8.61789C21.77 8.24489 21.404 8.00089 21 8.00089H15.618L12.894 2.55389C12.555 1.87689 11.444 1.87689 11.105 2.55389L8.38199 8.00089H2.99999C2.59599 8.00089 2.22999 8.24489 2.07599 8.61789C1.92199 8.99089 2.00699 9.42289 2.29299 9.70789L6.87699 14.2919L5.03899 20.7269C4.92399 21.1299 5.07199 21.5619 5.40999 21.8089C5.74999 22.0569 6.20699 22.0659 6.55399 21.8329L12 18.2029L17.445 21.8329C17.613 21.9449 17.806 22.0009 18 22.0009C18.207 22.0009 18.414 21.9369 18.59 21.8089C18.928 21.5619 19.076 21.1299 18.961 20.7269L17.123 14.2919L21.707 9.70789C21.993 9.42289 22.078 8.99089 21.924 8.61789Z"
                    })
                }))
            }), i.r)
        }
    }
]);