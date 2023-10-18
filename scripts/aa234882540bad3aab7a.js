"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [11765, 38479, 72935], {
        661299: (e, t, r) => {
            r.d(t, {
                Z: () => f
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                c = r(228721),
                l = r(349480),
                s = r.n(l);

            function a(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }
            var u = (0, c.Z)();
            const f = function(e) {
                var t, r = e.open,
                    o = e.className,
                    c = e.withHighlight,
                    l = void 0 !== c && c;
                return (0, n.jsxs)("svg", {
                    width: "18",
                    height: "18",
                    className: i()(s().button, o, (t = {}, a(t, s().open, r), a(t, s().withHighlight, l), t)),
                    children: [l && (0, n.jsx)("defs", {
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
                            stroke: l ? "url(#".concat(u, ")") : "currentColor",
                            d: "M4.5 4.5l9 9",
                            strokeLinecap: "round"
                        }), (0, n.jsx)("path", {
                            stroke: l ? "url(#".concat(u, ")") : "currentColor",
                            d: "M13.5 4.5l-9 9",
                            strokeLinecap: "round"
                        })]
                    })]
                })
            }
        },
        663207: (e, t, r) => {
            r.d(t, {
                r: () => a
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

            function s(e, t) {
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
                    u = void 0 === a ? 24 : a,
                    f = e.color,
                    p = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    b = void 0 === d ? "" : d,
                    g = s(e, ["width", "height", "color", "colorClass"]);
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
                }({}, (0, i.Z)(g)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
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
                    var s;
                    l = null !== (s = e instanceof o.Z ? e.premiumSubscriberCount : e.premiumSubscriptionCount) && void 0 !== s ? s : 0
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
        275086: (e, t, r) => {
            r.d(t, {
                c: () => h
            });
            var n = r(785893),
                o = (r(667294), r(70418)),
                i = r(661299),
                c = r(393299),
                l = r(930865),
                s = r(596801),
                a = r(733274),
                u = r(2590),
                f = r(473708),
                p = r(562275),
                d = r.n(p);

            function b(e) {
                var t = e.guild,
                    r = e.banner;
                return (0, n.jsx)("div", {
                    className: d().guildBanner,
                    style: {
                        backgroundImage: "url(".concat(r)
                    },
                    children: (0, n.jsxs)("div", {
                        className: d().guildHeader,
                        children: [(0, n.jsx)(c.Z, {
                            guild: t,
                            isBannerVisible: !0
                        }), (0, n.jsx)(o.Heading, {
                            className: d().guildName,
                            variant: "heading-md/semibold",
                            children: t.toString()
                        }), (0, n.jsx)(i.Z, {
                            className: d().dropdown,
                            open: !1
                        })]
                    })
                })
            }

            function g(e, t) {
                var r = (0, l.nW)(e);
                return t ? f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format({
                    targetLevelOrPlan: r
                }) : f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format({
                    targetLevelOrPlan: r
                })
            }

            function h(e) {
                var t = e.analyticsLocations,
                    r = e.analyticsLocation,
                    o = e.guild,
                    i = e.isGIF,
                    c = e.banner,
                    p = i ? (0, l._p)(u.oNc.ANIMATED_BANNER) : (0, l._p)(u.oNc.BANNER);
                null != p && (0, s.Z)({
                    analyticsLocations: t,
                    analyticsSourceLocation: r,
                    guild: o,
                    headerProps: {
                        title: f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
                        subtitle: g(p, i),
                        image: (0, n.jsx)(b, {
                            guild: o,
                            banner: c
                        })
                    },
                    perkIntro: f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
                    perks: i ? (0, a.zC)() : (0, a.XO)()
                })
            }
        },
        393299: (e, t, r) => {
            r.d(t, {
                Z: () => S
            });
            var n, o = r(785893),
                i = (r(667294), r(294184)),
                c = r.n(i),
                l = r(202351),
                s = r(70418),
                a = r(491379),
                u = r(591406),
                f = r(859917),
                p = r(784648),
                d = r(2590),
                b = r(233593),
                g = r.n(b);

            function h(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }
            var O, E = (h(n = {}, d.Eu4.NONE, g().iconBackgroundTierNone),
                    h(n, d.Eu4.TIER_1, g().iconBackgroundTierOne), h(n, d.Eu4.TIER_2, g().iconBackgroundTierTwo), h(n, d.Eu4.TIER_3, g().iconBackgroundTierThree), n),
                y = (h(O = {}, d.Eu4.NONE, g().iconTierNone), h(O, d.Eu4.TIER_1, g().iconTierOne), h(O, d.Eu4.TIER_2, g().iconTierTwo), h(O, d.Eu4.TIER_3, g().iconTierThree), O);

            function m(e) {
                var t = e.premiumTier,
                    r = e.iconBackgroundClassName,
                    n = e.iconClassName,
                    i = e.size;
                return (0, o.jsx)(f.Z, {
                    className: c()(r, E[t]),
                    size: i,
                    children: (0, o.jsx)(p.Z, {
                        tier: t,
                        className: c()(n, g().boostedGuildIconGem, y[t])
                    })
                })
            }
            var v = r(21372),
                j = r(473903),
                C = r(206986),
                w = r(521723),
                _ = r(930865),
                P = r(473708),
                N = r(625337),
                I = r.n(N);

            function R(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function T(e, t) {
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

            function D(e) {
                var t = e.guild,
                    r = e.isBannerVisible,
                    n = e.disableBoostClick,
                    i = (0, l.e7)([j.default, v.ZP], (function() {
                        var e = j.default.getCurrentUser();
                        return v.ZP.isMember(t.id, null == e ? void 0 : e.id)
                    })),
                    c = t.premiumTier,
                    a = t.premiumSubscriberCount;
                if (0 === a && c === d.Eu4.NONE) return null;
                var f = function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        i && !n && (0, u.f)({
                            guildId: t.id,
                            location: {
                                section: d.jXE.GUILD_HEADER,
                                object: d.qAy.BOOST_GEM_ICON
                            }
                        })
                    },
                    p = c === d.Eu4.NONE ? P.Z.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : _.nW(c),
                    b = (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("div", {
                            className: I().tierTooltipTitle,
                            children: p
                        }), (0, o.jsx)("div", {
                            children: P.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
                                subscriberCount: a
                            })
                        })]
                    });
                return (0, o.jsx)("div", {
                    className: I().guildIconContainer,
                    children: (0,
                        o.jsx)(s.Tooltip, {
                        text: b,
                        position: "bottom",
                        "aria-label": null != p ? p : "",
                        children: function(e) {
                            return (0, o.jsx)(s.Clickable, T(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                                    }))));
                                    n.forEach((function(t) {
                                        R(e, t, r[t])
                                    }))
                                }
                                return e
                            }({}, e), {
                                className: I().premiumGuildIcon,
                                onClick: f,
                                children: (0, o.jsx)(m, {
                                    premiumTier: c,
                                    iconBackgroundClassName: r ? I().boostedGuildTierIconBackgroundWithVisibleBanner : null,
                                    iconClassName: r && c !== d.Eu4.TIER_3 ? I().boostedGuildTierMutedIconWithVisibleBanner : null
                                })
                            }))
                        }
                    })
                })
            }

            function x(e) {
                var t = e.guild,
                    r = e.disableColor,
                    n = e.disableBoostClick;
                return (0, a.Z)(t) ? (0, o.jsx)("div", {
                    className: I().guildIconV2Container,
                    children: (0, o.jsx)(w.Z, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: s.Tooltip.Colors.PRIMARY,
                        className: c()(I().guildBadge, R({}, I().disableColor, r)),
                        disableBoostClick: n
                    })
                }) : (0, o.jsx)("div", {
                    className: I().guildIconContainer,
                    children: (0, o.jsx)(C.Z, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: s.Tooltip.Colors.PRIMARY,
                        className: c()(I().guildBadge, R({}, I().disableColor, r))
                    })
                })
            }

            function S(e) {
                var t = e.guild,
                    r = e.isBannerVisible,
                    n = e.disableBoostClick;
                return (0, a.Z)(t) ? (0, o.jsx)(x, {
                    guild: t,
                    disableColor: !1,
                    disableBoostClick: n
                }) : t.hasFeature(d.oNc.VERIFIED) || t.hasFeature(d.oNc.PARTNERED) ? (0, o.jsx)(x, {
                    guild: t,
                    disableColor: !r
                }) : (0, o.jsx)(D, {
                    guild: t,
                    isBannerVisible: r,
                    disableBoostClick: n
                })
            }
        },
        311260: (e, t, r) => {
            r.d(t, {
                $p: () => u,
                AK: () => O,
                Ae: () => E,
                Es: () => g,
                PT: () => p,
                U$: () => d,
                kH: () => h
            });
            var n = r(496486),
                o = r(921431);

            function i(e, t, r, n, o, i, c) {
                try {
                    var l = e[i](c),
                        s = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(s) : Promise.resolve(s).then(n, o)
            }

            function c(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var c = e.apply(t, r);

                        function l(e) {
                            i(c, n, o, l, s, "next", e)
                        }

                        function s(e) {
                            i(c, n, o, l, s, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }
            var l = function(e, t) {
                var r, n, o, i, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        n = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            c.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(i);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                i = t.call(e, c)
                            } catch (e) {
                                i = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, l])
                    }
                }
            };

            function s(e) {
                return new Promise((function(t) {
                    var r = new FileReader;
                    r.onload = function(e) {
                        var r, n = null === (r = e.target) || void 0 === r ? void 0 : r.result;
                        t("string" == typeof n ? n : "")
                    };
                    r.readAsDataURL(e)
                }))
            }

            function a(e, t, r, n) {
                var o = e.naturalWidth / e.width,
                    i = t.width / 2,
                    c = t.height / 2,
                    l = (e.width / 2 - i - r.x) * o,
                    s = (e.height / 2 - c - r.y) * o,
                    a = t.width * o,
                    u = t.height * o;
                return {
                    x: l,
                    y: s,
                    scaledCropWidth: a,
                    scaledCropHeight: u,
                    canvasWidth: Math.min(a, n.width),
                    canvasHeight: Math.min(u, n.height)
                }
            }

            function u(e, t, r, n, o) {
                return f.apply(this, arguments)
            }

            function f() {
                return (f = c((function(e, t, n, i, c) {
                    var u, f, p, d, b, g, h, O;
                    return l(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                u = a(t, n, i, c), f = u.x, p = u.y, d = u.scaledCropWidth, b = u.scaledCropHeight;
                                return [4, e.arrayBuffer()];
                            case 1:
                                g = l.sent();
                                h = new Worker(new URL(r.p + r.u(92827), r.b));
                                O = new Promise((function(e, t) {
                                    h.onmessage = function(r) {
                                        var n = r.data;
                                        if (n.type === o.u.CROP_GIF_COMPLETE) {
                                            e(s(new Blob([n.result])));
                                            h.terminate()
                                        } else if (n.type === o.u.CROP_GIF_ERROR) {
                                            t(new Error("Error cropping GIF"));
                                            h.terminate()
                                        }
                                    }
                                }));
                                h.postMessage({
                                    type: o.u.CROP_GIF_START,
                                    gif: new Uint8Array(g),
                                    x: 0 | f,
                                    y: 0 | p,
                                    width: 0 | d,
                                    height: 0 | b
                                });
                                return [2, {
                                    result: O,
                                    cancelFn: function() {
                                        return h.terminate()
                                    }
                                }]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function p(e, t, r, n) {
                var o = a(e, t, r, n),
                    i = o.x,
                    c = o.y,
                    l = o.scaledCropWidth,
                    s = o.scaledCropHeight,
                    u = o.canvasWidth,
                    f = o.canvasHeight,
                    p = document.createElement("canvas");
                p.width = u;
                p.height = f;
                var d = p.getContext("2d");
                null != d && d.drawImage(e, i, c, l, s, 0, 0, p.width, p.height);
                return p.toDataURL("image/png")
            }

            function d(e, t, r) {
                return {
                    x: (0, n.clamp)(e, r.left, r.right),
                    y: (0, n.clamp)(t, r.bottom, r.top)
                }
            }

            function b(e, t, r, n) {
                var i = r,
                    c = n;
                if (r > o.vJ) {
                    i = o.vJ;
                    c = n * (o.vJ / r)
                }
                return r / n < e ? {
                    width: i,
                    height: c
                } : {
                    width: i * (t / c),
                    height: t
                }
            }

            function g(e, t, r) {
                switch (e) {
                    case o.pC.AVATAR:
                    case o.pC.AVATAR_DECORATION:
                        return {
                            width: t, height: r
                        };
                    case o.pC.BANNER:
                        return b(o.MY, o.qj, t, r);
                    case o.pC.GUILD_BANNER:
                        return b(o.Ij, o.C5, t, r);
                    case o.pC.VIDEO_BACKGROUND:
                        return b(o.Ff, o.PB, t, r);
                    case o.pC.SCHEDULED_EVENT_IMAGE:
                        return b(o.ut, o.WV, t, r);
                    case o.pC.HOME_HEADER:
                        return b(o.sX, o.SW, t, r)
                }
            }

            function h(e, t, r) {
                var n = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    o = e - r.width,
                    i = t - r.height;
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

            function O(e, t, r, n) {
                switch (e) {
                    case o.pC.AVATAR:
                    case o.pC.AVATAR_DECORATION:
                        var i = Math.min(t, r);
                        return {
                            width: i, height: i
                        };
                    case o.pC.BANNER:
                        var c = Math.min(t, o.vJ);
                        return {
                            width: c, height: c * (1 / o.MY)
                        };
                    case o.pC.GUILD_BANNER:
                        var l = Math.min(t, o.vJ);
                        return {
                            width: l, height: Math.min(l * (9 / 16), n)
                        };
                    case o.pC.VIDEO_BACKGROUND:
                        var s = Math.min(t, o.vJ);
                        return {
                            width: s, height: s * (9 / 16)
                        };
                    case o.pC.SCHEDULED_EVENT_IMAGE:
                        var a = Math.min(t, o.vJ);
                        return {
                            width: a, height: .4 * a
                        };
                    case o.pC.HOME_HEADER:
                        var u = Math.min(t, o.vJ);
                        return {
                            width: u, height: u * (1 / o.sX)
                        }
                }
            }

            function E(e, t, r) {
                var n = e.naturalWidth / e.naturalHeight,
                    o = t,
                    i = r;
                e.naturalWidth > e.naturalHeight ? o /= n : i *= n;
                var c = {
                    height: o,
                    width: i
                };
                return p(e, {
                    width: e.width,
                    height: e.height
                }, {
                    x: 0,
                    y: 0
                }, c)
            }
        },
        338479: (e, t, r) => {
            r.d(t, {
                Z: () => Z
            });
            var n = r(785893),
                o = r(667294),
                i = r(202351),
                c = r(70418),
                l = r(19585),
                s = r(275086),
                a = r(596801),
                u = r(567403),
                f = r(464187),
                p = r(217674),
                d = r(2590),
                b = r(733274),
                g = r(473708),
                h = r(460590),
                O = r.n(h);

            function E(e) {
                var t = e.analyticsSection,
                    r = e.analyticsPage,
                    o = e.isGIF,
                    h = e.banner,
                    E = (0, i.e7)([f.Z], (function() {
                        return f.Z.getGuildId()
                    })),
                    y = (0, i.e7)([u.Z], (function() {
                        return u.Z.getGuild(E)
                    })),
                    m = (0, l.Z)().analyticsLocations;
                if (null == y || y.hasFeature(d.oNc.ANIMATED_BANNER) || !o && y.hasFeature(d.oNc.BANNER)) return null;
                return (0, n.jsxs)("div", {
                    className: O().container,
                    children: [(0, n.jsx)(p.Z, {
                        className: O().guildBoostingIcon
                    }), (0, n.jsx)(c.Text, {
                        color: "header-primary",
                        variant: "text-sm/semibold",
                        children: g.Z.Messages.PREMIUM_GUILD_PREVIEW
                    }), (0, n.jsx)(c.Button, {
                        look: c.Button.Looks.LINK,
                        color: c.Button.Colors.LINK,
                        className: O().subscribeButton,
                        onClick: function() {
                            if (null != y) {
                                var e = {
                                    section: t,
                                    page: r,
                                    object: d.qAy.UPSELL_HEADER
                                };
                                null != h ? (0, s.c)({
                                    analyticsLocations: m,
                                    analyticsLocation: e,
                                    guild: y,
                                    isGIF: o,
                                    banner: h
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
            var y = r(153686),
                m = r(294184),
                v = r.n(m),
                j = r(366007),
                C = r(406493),
                w = r(98265),
                _ = r(477002),
                P = r.n(_);

            function N(e) {
                var t = e.text,
                    r = e.textSize,
                    o = void 0 === r ? w.Z.Sizes.SIZE_12 : r,
                    i = e.textColor,
                    c = void 0 === i ? w.Z.Colors.STANDARD : i,
                    l = e.className,
                    s = e.button,
                    a = e.reducedRightPadding,
                    u = void 0 !== a && a;
                return (0, n.jsxs)("div", {
                    className: v()(u ? P().noticeWithoutRightPadding : P().noticeWithRightPadding, l),
                    children: [(0, n.jsxs)("div", {
                        className: P().noticeLeft,
                        children: [(0, n.jsx)(C.Z, {
                            className: P().icon,
                            color: j.JX.PREMIUM_TIER_2
                        }), (0, n.jsx)(w.Z, {
                            className: P().text,
                            size: o,
                            color: c,
                            children: t
                        })]
                    }), s]
                })
            }
            var I = r(455706),
                R = r(473903),
                T = r(652591),
                D = r(116094),
                x = r(921431),
                S = r(203600),
                L = r(167633),
                A = r.n(L);

            function M(e) {
                var t = e.analyticsSection,
                    r = e.type,
                    s = (0, i.e7)([R.default], (function() {
                        return R.default.getCurrentUser()
                    })),
                    a = D.ZP.canUseAnimatedAvatar(s),
                    u = D.ZP.canUsePremiumProfileCustomization(s),
                    f = r === x.pC.BANNER && u || r === x.pC.AVATAR && a,
                    p = (0, l.Z)(y.Z.PREMIUM_PREVIEW_UPSELL_HEADER).sourceAnalyticsLocations;
                o.useEffect((function() {
                    f || T.default.track(d.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: t,
                        location_stack: p
                    })
                }), [f, t, p]);
                if (f) return null;
                var b = (0, n.jsx)(I.Z, {
                    className: A().getNitroLink,
                    size: c.Button.Sizes.SMALL,
                    look: c.Button.Looks.LINK,
                    color: c.Button.Colors.LINK,
                    subscriptionTier: S.Si.TIER_2,
                    buttonText: g.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
                    showIcon: !1,
                    premiumModalAnalyticsLocation: {
                        section: t,
                        object: d.qAy.BUTTON_CTA
                    },
                    disableShine: !0
                });
                return (0, n.jsx)(N, {
                    reducedRightPadding: !0,
                    className: A().nitroPreviewUpsell,
                    text: g.Z.Messages.PREMIUM_PREVIEW.format(),
                    textSize: w.Z.Sizes.SIZE_14,
                    textColor: w.Z.Colors.HEADER_PRIMARY,
                    button: b
                })
            }

            function Z(e) {
                var t = e.type,
                    r = e.analyticsPage,
                    o = e.analyticsSection,
                    i = e.isGIF,
                    c = e.banner;
                return [x.pC.BANNER, x.pC.AVATAR].includes(t) && i ? (0, n.jsx)(M, {
                    analyticsSection: o,
                    type: t
                }) : t === x.pC.GUILD_BANNER ? (0, n.jsx)(E, {
                    analyticsSection: o,
                    analyticsPage: r,
                    isGIF: i,
                    banner: c
                }) : null
            }
        },
        821: (e, t, r) => {
            r.d(t, {
                Z: () => h
            });
            var n = r(202351),
                o = r(744564);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1;
                    n.configurable = !0;
                    "value" in n && (n.writable = !0);
                    Object.defineProperty(e, n.key, n)
                }
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function s(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function a(e, t) {
                a = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return a(e, t)
            }
            var u, f, p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
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
                    var r, n = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return s(this, r)
                }
            }

            function b() {
                u = !1;
                f = null
            }
            b();
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
                    t && a(e, t)
                }(r, e);
                var t = d(r);

                function r() {
                    i(this, r);
                    return t.apply(this, arguments)
                }! function(e, t, r) {
                    t && c(e.prototype, t);
                    r && c(e, r)
                }(r, [{
                    key: "hasCompletedStepDuringSession",
                    get: function() {
                        return u
                    }
                }, {
                    key: "activeSubstep",
                    get: function() {
                        return f
                    }
                }]);
                return r
            }(n.ZP.Store);
            g.displayName = "PremiumTutorialSessionStore";
            const h = new g(o.Z, {
                SET_HAS_COMPLETED_STEP: function() {
                    u = !0
                },
                RESET_HAS_COMPLETED_STEP: function() {
                    u = !1
                },
                SET_ACTIVE_SUBSTEP: function(e) {
                    var t = e.substep;
                    f = t
                },
                LOGOUT: function() {
                    b()
                }
            })
        },
        521723: (e, t, r) => {
            r.d(t, {
                Z: () => J
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                c = r(202351),
                l = r(795308),
                s = r(575945),
                a = r(70418),
                u = r(337509),
                f = r(761673),
                p = r(591406),
                d = r(64234),
                b = r(21372),
                g = r(473903),
                h = r(930865),
                O = r(859917),
                E = r(366007),
                y = r(459308),
                m = r(168075),
                v = r(361290),
                j = r(633878);

            function C(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        C(e, t, r[t])
                    }))
                }
                return e
            }

            function _(e, t) {
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
            const N = (0, m.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 10 : t,
                    o = e.height,
                    i = void 0 === o ? 10 : o,
                    c = e.color,
                    l = void 0 === c ? "currentColor" : c,
                    s = P(e, ["width", "height", "color"]);
                return (0, n.jsx)("svg", _(w({}, (0,
                    j.Z)(s)), {
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
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 10 : t,
                    o = e.height,
                    i = void 0 === o ? 10 : o,
                    c = P(e, ["width", "height"]);
                return (0, n.jsx)(v.t, w({
                    width: r,
                    height: i
                }, c))
            }));
            var I = r(666303);

            function R(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function T(e, t) {
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

            function D(e, t) {
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
            const x = (0, m.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 10 : t,
                    o = e.height,
                    i = void 0 === o ? 10 : o,
                    c = e.color,
                    l = void 0 === c ? "currentColor" : c,
                    s = D(e, ["width", "height", "color"]);
                return (0, n.jsxs)("svg", T(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            R(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, j.Z)(s)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 10 10",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0,
                        n.jsx)("g", {
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
            }), I.e);

            function S(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function L(e, t) {
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

            function A(e, t) {
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

            function M(e) {
                var t = e.width,
                    r = void 0 === t ? 10 : t,
                    o = e.height,
                    i = void 0 === o ? 10 : o,
                    c = e.color,
                    l = void 0 === c ? "currentColor" : c,
                    s = A(e, ["width", "height", "color"]);
                return (0, n.jsxs)("svg", L(function(e) {
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
                }({}, (0, j.Z)(s)), {
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
            var Z, B = r(690002),
                k = r(985651),
                U = r(2590),
                V = r(473708),
                G = r(845987),
                H = r.n(G);

            function F(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function W(e) {
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

            function Y(e, t) {
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
            var Q = (F(Z = {}, u.Q.STAFF, {
                IconComponent: B.Z,
                foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
                backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
            }), F(Z, u.Q.VERIFIED_AND_PARTNERED, {
                IconComponent: k.Z,
                foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
                backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
            }), F(Z, u.Q.VERIFIED, {
                IconComponent: k.Z,
                foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
                backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
            }), F(Z, u.Q.PARTNERED, {
                IconComponent: y.Z,
                foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: l.Z.unsafe_rawColors.BRAND_500.css,
                backgroundLightColor: l.Z.unsafe_rawColors.BRAND_500.css
            }), F(Z, u.Q.COMMUNITY, {
                IconComponent: N,
                foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
                foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
                premiumBackgroundColor: E.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css
            }), F(Z, u.Q.DISCOVERABLE, {
                IconComponent: x,
                foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
                foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
                premiumBackgroundColor: E.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css
            }), F(Z, u.Q.NONE, {}), Z);

            function X(e) {
                var t = e.guildTraits;
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
                            children: h.nW(t.premiumTier)
                        })]
                    }), (0, n.jsx)("div", {
                        className: i()(H().tooltipPremiumFooterSegment),
                        children: (0, n.jsx)(a.Text, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            children: V.Z.Messages.SERVER_BADGE_PREMIUM_FOOTER_BOOST_COUNT.format({
                                count: t.premiumSubscriberCount
                            })
                        })
                    })]
                })
            }

            function z(e) {
                var t = e.badgeType,
                    r = e.guildTraits,
                    o = function(e, t) {
                        var r = t === f.PZ.PUBLIC ? V.Z.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN : V.Z.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY;
                        switch (e) {
                            case u.Q.STAFF:
                                return {
                                    tooltipTitle: V.Z.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipSubtitle: V.Z.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipDescription: V.Z.Messages.INTERNAL_EMPLOYEE_ONLY
                                };
                            case u.Q.VERIFIED:
                                return {
                                    tooltipTitle: V.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: V.Z.Messages.GUILD_VERIFIED, tooltipDescription: r
                                };
                            case u.Q.PARTNERED:
                                return {
                                    tooltipTitle: V.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: V.Z.Messages.GUILD_PARTNERED, tooltipDescription: r
                                };
                            case u.Q.VERIFIED_AND_PARTNERED:
                                return {
                                    tooltipTitle: V.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: V.Z.Messages.GUILD_VERIFIED_AND_PARTNERED, tooltipDescription: r
                                };
                            case u.Q.COMMUNITY:
                                return {
                                    tooltipTitle: V.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: V.Z.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY
                                };
                            case u.Q.DISCOVERABLE:
                                return {
                                    tooltipTitle: V.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: V.Z.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN
                                };
                            default:
                                return {
                                    tooltipTitle: V.Z.Messages.SERVER_BADGE_TITLE_UNKNOWN
                                }
                        }
                    }(t, r.visibility),
                    i = o.tooltipTitle,
                    c = o.tooltipSubtitle,
                    l = o.tooltipDescription;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: H().tooltipBodyContainer,
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
                    }), r.premium ? (0, n.jsx)(X, {
                        guildTraits: r
                    }) : null]
                })
            }

            function J(e) {
                var t = e.guild,
                    r = e.tooltipColor,
                    o = void 0 === r ? a.Tooltip.Colors.BRAND : r,
                    i = e.tooltipPosition,
                    l = e.className,
                    h = e.flowerStarClassName,
                    E = e.iconClassName,
                    y = e.badgeStrokeColor,
                    m = e.badgeColor,
                    v = e.size,
                    j = void 0 === v ? 16 : v,
                    C = e.disableBoostClick,
                    w = e["aria-label"],
                    _ = void 0 !== w && w,
                    P = (0, c.e7)([g.default, b.ZP], (function() {
                        var e = g.default.getCurrentUser();
                        return b.ZP.isMember(null == t ? void 0 : t.id, null == e ? void 0 : e.id)
                    })),
                    N = (0, c.e7)([d.Z], (function() {
                        return d.Z.theme
                    })),
                    I = (0, f.XX)(t),
                    R = (0, u.i)(I);
                if (R === u.Q.NONE) return null;
                var T, D, x = Q[R],
                    S = x.IconComponent,
                    L = x.backgroundDarkColor,
                    A = x.backgroundLightColor,
                    M = x.foregroundDarkColor,
                    Z = x.foregroundLightColor,
                    B = x.premiumBackgroundColor,
                    k = x.premiumForegroundColor;
                if (null == S) return null;
                if (I.premium) {
                    T = k;
                    D = B
                }
                var V = (0, s.wj)(N) ? M : Z,
                    G = (0, s.wj)(N) ? L : A;
                T = null != T ? T : V;
                D = null != D ? D : G;
                var F = function(e) {
                    if (I.premium && P && !C) {
                        e.stopPropagation();
                        e.preventDefault();
                        (0, p.f)({
                            guildId: t.id,
                            location: {
                                section: U.jXE.GUILD_HEADER,
                                object: U.qAy.BOOST_GEM_ICON
                            }
                        })
                    }
                };
                return (0, n.jsx)(a.Tooltip, {
                    color: o,
                    position: i,
                    "aria-label": _,
                    text: (0, n.jsx)(z, {
                        badgeType: R,
                        guildTraits: I
                    }),
                    tooltipContentClassName: H().tooltipRemovePadding,
                    children: function(e) {
                        return (0, n.jsx)(a.Clickable, {
                            onClick: F,
                            children: (0, n.jsx)(O.Z, Y(W({}, e), {
                                className: l,
                                flowerStarClassName: h,
                                color: null != D ? D : m,
                                stroke: y,
                                size: j,
                                children: (0, n.jsx)(S, {
                                    className: E,
                                    color: T
                                })
                            }))
                        })
                    }
                })
            }
        },
        816240: (e, t, r) => {
            r.d(t, {
                Z: () => u
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
                i = r(43338),
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
            const u = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    p = e.foreground,
                    d = a(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", s(function(e) {
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
                }({}, (0, c.Z)(d)), {
                    width: r,
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
        855595: (e, t, r) => {
            r.d(t, {
                Z: () => u
            });
            var n = r(785893),
                o = (r(667294),
                    r(168075)),
                i = r(911486),
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
            const u = (0,
                o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 20 : t,
                    o = e.height,
                    i = void 0 === o ? 23 : o,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    p = e.foreground,
                    d = a(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", s(function(e) {
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
                }({}, (0, c.Z)(d)), {
                    width: r,
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
        71236: (e, t, r) => {
            r.d(t, {
                Z: () => u
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
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
            const u = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    p = e.foreground,
                    d = a(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", s(function(e) {
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
                }({}, (0, c.Z)(d)), {
                    width: r,
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