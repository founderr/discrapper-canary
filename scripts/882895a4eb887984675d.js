"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [91269, 38479, 56620], {
        72831: (e, t, n) => {
            n.d(t, {
                Z: () => O
            });
            var r, o = n(785893),
                i = (n(667294), n(294184)),
                c = n.n(i),
                l = n(289283),
                a = n(882723),
                u = n(155349),
                s = n(559968),
                f = n(473708),
                p = n(545107),
                d = n.n(p);

            function b(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }! function(e) {
                e.DEFAULT = "";
                e.BOLD = "Bold";
                e.SOLID = "Solid"
            }(r || (r = {}));
            var y = function(e) {
                var t, n = e.closeAction,
                    i = e.variant,
                    p = e.keybind,
                    y = e.className;
                return (0, o.jsxs)("div", {
                    className: c()(d().container, y),
                    children: [(0, o.jsx)(a.Clickable, {
                        className: c()(d().closeButton, (t = {}, b(t, d().closeButtonBold, i === r.BOLD), b(t, d().closeButtonSolid, i === r.SOLID), t)),
                        onClick: n,
                        "aria-label": f.Z.Messages.CLOSE,
                        children: i === r.SOLID ? (0, o.jsx)(s.Z, {
                            width: 24,
                            height: 24,
                            "aria-hidden": !0
                        }) : (0, o.jsx)(u.Z, {
                            width: 18,
                            height: 18,
                            "aria-hidden": !0
                        })
                    }), l.tq ? null : (0, o.jsx)("div", {
                        className: c()(d().keybind),
                        "aria-hidden": !0,
                        children: p
                    })]
                })
            };
            y.defaultProps = {
                variant: r.DEFAULT
            };
            y.Variants = r;
            const O = y
        },
        661299: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                c = n(468811),
                l = n.n(c),
                a = n(305484),
                u = n.n(a);

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var f = l().v4();
            const p = function(e) {
                var t, n = e.open,
                    o = e.className,
                    c = e.withHighlight,
                    l = void 0 !== c && c;
                return (0, r.jsxs)("svg", {
                    width: "18",
                    height: "18",
                    className: i()(u().button, o, (t = {}, s(t, u().open, n), s(t, u().withHighlight, l), t)),
                    children: [l && (0, r.jsx)("defs", {
                        children: (0, r.jsxs)("linearGradient", {
                            id: f,
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "18",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, r.jsx)("stop", {
                                offset: "0",
                                stopColor: "#B473F5"
                            }), (0, r.jsx)("stop", {
                                offset: "1",
                                stopColor: "#E292AA"
                            })]
                        })
                    }), (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsx)("path", {
                            d: "M0 0h18v18H0"
                        }), (0, r.jsx)("path", {
                            stroke: l ? "url(#".concat(f, ")") : "currentColor",
                            d: "M4.5 4.5l9 9",
                            strokeLinecap: "round"
                        }), (0, r.jsx)("path", {
                            stroke: l ? "url(#".concat(f, ")") : "currentColor",
                            d: "M13.5 4.5l-9 9",
                            strokeLinecap: "round"
                        })]
                    })]
                })
            }
        },
        361290: (e, t, n) => {
            n.d(t, {
                t: () => u
            });
            var r = n(785893),
                o = (n(667294), n(795308)),
                i = n(633878);

            function c(e, t, n) {
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

            function a(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var u = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    u = e.height,
                    s = void 0 === u ? 24 : u,
                    f = e.color,
                    p = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    b = void 0 === d ? "" : d,
                    y = a(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsxs)("svg", l(function(e) {
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
                }({}, (0, i.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("g", {
                        clipPath: "url(#a)",
                        children: (0, r.jsx)("path", {
                            fill: "string" == typeof p ? p : p.css,
                            d: "m2.392 8.39 8.389-6.452a2 2 0 0 1 2.438 0l8.389 6.453c1.345 1.035.871 3.17-.786 3.537L20.5 12l-.82 8.2a2 2 0 0 1-1.99 1.8H16a1 1 0 0 1-1-1v-5a3 3 0 0 0-6 0v5a1 1 0 0 1-1 1H6.31a2 2 0 0 1-1.99-1.8L3.5 12l-.322-.072c-1.657-.368-2.131-2.502-.786-3.537Z",
                            className: b
                        })
                    }), (0, r.jsx)("defs", {
                        children: (0, r.jsx)("clipPath", {
                            id: "a",
                            children: (0, r.jsx)("path", {
                                fill: "#fff",
                                d: "M0 0h24v24H0z"
                            })
                        })
                    })]
                }))
            }
        },
        980559: (e, t, n) => {
            n.d(t, {
                p: () => u
            });
            var r = n(785893),
                o = (n(667294), n(795308)),
                i = n(633878);

            function c(e, t, n) {
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

            function a(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var u = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    u = e.height,
                    s = void 0 === u ? 24 : u,
                    f = e.color,
                    p = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    b = void 0 === d ? "" : d,
                    y = a(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", l(function(e) {
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
                }({}, (0, i.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm8.5 18a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-1.5Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }
        },
        525628: (e, t, n) => {
            n.d(t, {
                WZ: () => r,
                OE: () => o,
                ZP: () => i
            });
            var r = (0, n(260561).B)({
                    kind: "user",
                    id: "2023-08_collectiblesnitroavatardecoiap",
                    label: "Collectible Nitro Avatar Decorations IAP",
                    defaultConfig: {
                        canUseCollectiblesIAP: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Collectibles IAP",
                        config: {
                            canUseCollectiblesIAP: !0
                        }
                    }]
                }),
                o = function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return r.useExperiment({
                        location: "b697b5_1"
                    }, {
                        autoTrackExposure: e
                    })
                };
            const i = o
        },
        255875: (e, t, n) => {
            n.d(t, {
                E: () => d,
                h: () => b
            });
            var r = n(785893),
                o = n(667294),
                i = n(652411),
                c = n(318715),
                l = n(316878),
                a = n(2590);

            function u(e, t, n) {
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
                        u(e, t, n[t])
                    }))
                }
                return e
            }

            function f(e, t) {
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
            var p = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: function() {},
                    createConfettiAt: function() {},
                    createMultipleConfetti: function() {
                        return []
                    },
                    createMultipleConfettiAt: function() {
                        return []
                    },
                    addClickListener: function() {
                        return a.dG4
                    },
                    removeClickListener: a.dG4
                },
                d = o.createContext(p);

            function b(e) {
                var t = e.children,
                    n = e.confettiCanvas,
                    a = e.spriteCanvas,
                    u = e.baseConfig,
                    b = e.addClickListener,
                    y = e.removeClickListener,
                    O = (0, i.uR)(n, a),
                    v = (0, c.ZP)([l.Z], (function() {
                        return l.Z.useReducedMotion
                    })),
                    g = o.useMemo((function() {
                        return v ? p : {
                            confettiCanvas: n,
                            cannon: O,
                            createConfetti: function(e, t) {
                                return O.createConfetti(s({}, u, e), t)
                            },
                            createConfettiAt: function(e, t, n, r) {
                                return O.createConfetti(s(f(s({}, u), {
                                    position: {
                                        type: "static",
                                        value: {
                                            x: e,
                                            y: t
                                        }
                                    }
                                }), n), r)
                            },
                            createMultipleConfetti: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                                    n = arguments.length > 2 ? arguments[2] : void 0;
                                return O.createMultipleConfetti(s({}, u, e), t, n)
                            },
                            createMultipleConfettiAt: function(e, t, n) {
                                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                                    o = arguments.length > 4 ? arguments[4] : void 0;
                                return O.createMultipleConfetti(s(f(s({}, u), {
                                    position: {
                                        type: "static",
                                        value: {
                                            x: e,
                                            y: t
                                        }
                                    }
                                }), n), r, o)
                            },
                            addClickListener: b,
                            removeClickListener: y
                        }
                    }), [b, u, O, n, v, y]);
                return (0, r.jsx)(d.Provider, {
                    value: g,
                    children: t
                })
            }
        },
        275086: (e, t, n) => {
            n.d(t, {
                c: () => O
            });
            var r = n(785893),
                o = (n(667294), n(882723)),
                i = n(661299),
                c = n(393299),
                l = n(930865),
                a = n(596801),
                u = n(733274),
                s = n(2590),
                f = n(473708),
                p = n(206322),
                d = n.n(p);

            function b(e) {
                var t = e.guild,
                    n = e.banner;
                return (0, r.jsx)("div", {
                    className: d().guildBanner,
                    style: {
                        backgroundImage: "url(".concat(n)
                    },
                    children: (0, r.jsxs)("div", {
                        className: d().guildHeader,
                        children: [(0, r.jsx)(c.Z, {
                            guild: t,
                            isBannerVisible: !0
                        }), (0, r.jsx)(o.Heading, {
                            className: d().guildName,
                            variant: "heading-md/semibold",
                            children: t.toString()
                        }), (0, r.jsx)(i.Z, {
                            className: d().dropdown,
                            open: !1
                        })]
                    })
                })
            }

            function y(e, t) {
                var n = (0, l.nW)(e);
                return t ? f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format({
                    targetLevelOrPlan: n
                }) : f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format({
                    targetLevelOrPlan: n
                })
            }

            function O(e) {
                var t = e.analyticsLocations,
                    n = e.analyticsLocation,
                    o = e.guild,
                    i = e.isGIF,
                    c = e.banner,
                    p = i ? (0, l._p)(s.oNc.ANIMATED_BANNER) : (0, l._p)(s.oNc.BANNER);
                null != p && (0, a.Z)({
                    analyticsLocations: t,
                    analyticsSourceLocation: n,
                    guild: o,
                    headerProps: {
                        title: f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
                        subtitle: y(p, i),
                        image: (0, r.jsx)(b, {
                            guild: o,
                            banner: c
                        })
                    },
                    perkIntro: f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
                    perks: i ? (0, u.zC)() : (0, u.XO)()
                })
            }
        },
        393299: (e, t, n) => {
            n.d(t, {
                Z: () => R
            });
            var r, o = n(785893),
                i = (n(667294), n(294184)),
                c = n.n(i),
                l = n(202351),
                a = n(882723),
                u = n(491379),
                s = n(591406),
                f = n(859917),
                p = n(784648),
                d = n(2590),
                b = n(476997),
                y = n.n(b);

            function O(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var v, g = (O(r = {}, d.Eu4.NONE, y().iconBackgroundTierNone), O(r, d.Eu4.TIER_1, y().iconBackgroundTierOne), O(r, d.Eu4.TIER_2, y().iconBackgroundTierTwo),
                    O(r, d.Eu4.TIER_3, y().iconBackgroundTierThree), r),
                h = (O(v = {}, d.Eu4.NONE, y().iconTierNone), O(v, d.Eu4.TIER_1, y().iconTierOne), O(v, d.Eu4.TIER_2, y().iconTierTwo), O(v, d.Eu4.TIER_3, y().iconTierThree), v);

            function m(e) {
                var t = e.premiumTier,
                    n = e.iconBackgroundClassName,
                    r = e.iconClassName,
                    i = e.size;
                return (0, o.jsx)(f.Z, {
                    className: c()(n, g[t]),
                    size: i,
                    children: (0, o.jsx)(p.Z, {
                        tier: t,
                        className: c()(r, y().boostedGuildIconGem, h[t])
                    })
                })
            }
            var w = n(21372),
                j = n(473903),
                P = n(206986),
                E = n(521723),
                S = n(930865),
                C = n(473708),
                T = n(36373),
                _ = n.n(T);

            function x(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function I(e, t) {
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

            function M(e) {
                var t = e.guild,
                    n = e.isBannerVisible,
                    r = e.disableBoostClick,
                    i = (0, l.e7)([j.default, w.ZP], (function() {
                        var e = j.default.getCurrentUser();
                        return w.ZP.isMember(t.id, null == e ? void 0 : e.id)
                    })),
                    c = t.premiumTier,
                    u = t.premiumSubscriberCount;
                if (0 === u && c === d.Eu4.NONE) return null;
                var f = function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        i && !r && (0, s.f)({
                            guildId: t.id,
                            location: {
                                section: d.jXE.GUILD_HEADER,
                                object: d.qAy.BOOST_GEM_ICON
                            }
                        })
                    },
                    p = c === d.Eu4.NONE ? C.Z.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : S.nW(c),
                    b = (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("div", {
                            className: _().tierTooltipTitle,
                            children: p
                        }), (0, o.jsx)("div", {
                            children: C.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
                                subscriberCount: u
                            })
                        })]
                    });
                return (0, o.jsx)("div", {
                    className: _().guildIconContainer,
                    children: (0, o.jsx)(a.Tooltip, {
                        text: b,
                        position: "bottom",
                        "aria-label": null != p ? p : "",
                        children: function(e) {
                            return (0,
                                o.jsx)(a.Clickable, I(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))));
                                    r.forEach((function(t) {
                                        x(e, t, n[t])
                                    }))
                                }
                                return e
                            }({}, e), {
                                className: _().premiumGuildIcon,
                                onClick: f,
                                children: (0, o.jsx)(m, {
                                    premiumTier: c,
                                    iconBackgroundClassName: n ? _().boostedGuildTierIconBackgroundWithVisibleBanner : null,
                                    iconClassName: n && c !== d.Eu4.TIER_3 ? _().boostedGuildTierMutedIconWithVisibleBanner : null
                                })
                            }))
                        }
                    })
                })
            }

            function N(e) {
                var t = e.guild,
                    n = e.disableColor,
                    r = e.disableBoostClick;
                return (0, u.Z)(t) ? (0, o.jsx)("div", {
                    className: _().guildIconV2Container,
                    children: (0, o.jsx)(E.Z, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: a.Tooltip.Colors.PRIMARY,
                        className: c()(_().guildBadge, x({}, _().disableColor, n)),
                        disableBoostClick: r
                    })
                }) : (0, o.jsx)("div", {
                    className: _().guildIconContainer,
                    children: (0, o.jsx)(P.Z, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: a.Tooltip.Colors.PRIMARY,
                        className: c()(_().guildBadge, x({}, _().disableColor, n))
                    })
                })
            }

            function R(e) {
                var t = e.guild,
                    n = e.isBannerVisible,
                    r = e.disableBoostClick;
                return (0, u.Z)(t) ? (0, o.jsx)(N, {
                    guild: t,
                    disableColor: !1,
                    disableBoostClick: r
                }) : t.hasFeature(d.oNc.VERIFIED) || t.hasFeature(d.oNc.PARTNERED) ? (0, o.jsx)(N, {
                    guild: t,
                    disableColor: !n
                }) : (0, o.jsx)(M, {
                    guild: t,
                    isBannerVisible: n,
                    disableBoostClick: r
                })
            }
        },
        159626: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => T
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                c = n.n(i),
                l = n(882723),
                a = n(153686),
                u = n(19585),
                s = n(293862),
                f = n(443812),
                p = n(652591),
                d = n(338479),
                b = n(2590),
                y = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-]+\.gif)$/;

            function O(e) {
                var t = new URL("".concat(window.location.protocol).concat(e)),
                    n = window.GLOBAL_ENV.ASSET_ENDPOINT;
                if (null == t.pathname.match(y)) throw new Error("Unexpected Tenor GIF path.");
                var r = "".concat(b.ANM.TENOR_ASSET_PATH).concat(t.pathname);
                return "".concat(location.protocol).concat(n).concat(r)
            }
            var v = n(473708),
                g = n(242276),
                h = n.n(g);

            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function w(e, t, n, r, o, i, c) {
                try {
                    var l = e[i](c),
                        a = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function j(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function c(e) {
                            w(i, r, o, c, l, "next", e)
                        }

                        function l(e) {
                            w(i, r, o, c, l, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function P(e, t, n) {
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
                        P(e, t, n[t])
                    }))
                }
                return e
            }

            function S(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            c = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(c = (r = n.next()).done); c = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
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
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return m(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var C = function(e, t) {
                var n, r, o, i, c = {
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
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
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
                                        r = i[1];
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
                                r = 0
                            } finally {
                                n = o = 0
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

            function T(e) {
                var t = e.transitionState,
                    i = e.onClose,
                    y = e.onComplete,
                    g = e.uploadType,
                    m = e.showUpsellHeader,
                    w = e.analyticsPage,
                    T = S(o.useState(!1), 2),
                    _ = T[0],
                    x = T[1],
                    I = (0, l.useModalContext)(),
                    M = (0, f.Dt)(),
                    N = (0, u.Z)(a.Z.GIF_PICKER).AnalyticsLocationProvider;
                o.useEffect((function() {
                    p.default.track(b.rMx.OPEN_MODAL, {
                        type: b.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                        location: {
                            page: w
                        }
                    })
                }), [w]);

                function R() {
                    R = j((function(e) {
                        var t, o, c;
                        return C(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    if (null == (t = e.gifSrc) || _) return [2];
                                    x(!0);
                                    o = O(t);
                                    return [4, fetch(o)];
                                case 1:
                                    return [4, a.sent().blob()];
                                case 2:
                                    c = a.sent();
                                    i();
                                    (0, l.openModalLazy)(j((function() {
                                        var e, t;
                                        return C(this, (function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return [4, Promise.all([n.e(40532), n.e(17363), n.e(72935)]).then(n.bind(n, 17363))];
                                                case 1:
                                                    e = i.sent(), t = e.default;
                                                    return [2, function(e) {
                                                        return (0, r.jsx)(t, E({
                                                            imgURI: o,
                                                            file: new File([c], "tenor.gif", {
                                                                type: "image/gif"
                                                            }),
                                                            onCrop: y,
                                                            uploadType: g,
                                                            showUpsellHeader: m
                                                        }, e))
                                                    }]
                                            }
                                        }))
                                    })), {
                                        contextKey: I
                                    });
                                    return [2]
                            }
                        }))
                    }));
                    return R.apply(this, arguments)
                }
                return (0, r.jsx)(N, {
                    children: (0, r.jsxs)(l.ModalRoot, {
                        className: h().gifPickerCroppingModal,
                        "aria-labelledby": M,
                        transitionState: t,
                        size: l.ModalSize.SMALL,
                        children: [m ? (0, r.jsx)(d.Z, {
                            type: g,
                            analyticsPage: w,
                            analyticsSection: b.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                            isGIF: !0
                        }) : null, (0, r.jsxs)(l.ModalHeader, {
                            className: h().modalHeader,
                            separator: !1,
                            children: [(0, r.jsx)(l.FormTitle, {
                                className: h().titleCase,
                                tag: l.FormTitleTags.H1,
                                children: v.Z.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF
                            }), (0, r.jsx)(l.ModalCloseButton, {
                                onClick: i,
                                className: h().modalCloseButton
                            })]
                        }), (0, r.jsxs)("div", {
                            children: [(0, r.jsx)(s.Z, {
                                className: c()(h().gifPicker, P({}, h().loadingOverlay, _)),
                                onSelectGIF: function(e) {
                                    return R.apply(this, arguments)
                                },
                                hideFavorites: !0
                            }), _ && (0, r.jsx)(l.Spinner, {
                                className: h().spinner
                            })]
                        })]
                    })
                })
            }
        },
        338479: (e, t, n) => {
            n.d(t, {
                Z: () => Z
            });
            var r = n(785893),
                o = n(667294),
                i = n(202351),
                c = n(882723),
                l = n(19585),
                a = n(275086),
                u = n(596801),
                s = n(567403),
                f = n(464187),
                p = n(217674),
                d = n(2590),
                b = n(733274),
                y = n(473708),
                O = n(352900),
                v = n.n(O);

            function g(e) {
                var t = e.analyticsSection,
                    n = e.analyticsPage,
                    o = e.isGIF,
                    O = e.banner,
                    g = (0, i.e7)([f.Z], (function() {
                        return f.Z.getGuildId()
                    })),
                    h = (0, i.e7)([s.Z], (function() {
                        return s.Z.getGuild(g)
                    })),
                    m = (0, l.Z)().analyticsLocations;
                if (null == h || h.hasFeature(d.oNc.ANIMATED_BANNER) || !o && h.hasFeature(d.oNc.BANNER)) return null;
                return (0, r.jsxs)("div", {
                    className: v().container,
                    children: [(0, r.jsx)(p.Z, {
                        className: v().guildBoostingIcon
                    }), (0, r.jsx)(c.Text, {
                        color: "header-primary",
                        variant: "text-sm/semibold",
                        children: y.Z.Messages.PREMIUM_GUILD_PREVIEW
                    }), (0, r.jsx)(c.Button, {
                        look: c.Button.Looks.LINK,
                        color: c.Button.Colors.LINK,
                        className: v().subscribeButton,
                        onClick: function() {
                            if (null != h) {
                                var e = {
                                    section: t,
                                    page: n,
                                    object: d.qAy.UPSELL_HEADER
                                };
                                null != O ? (0, a.c)({
                                    analyticsLocations: m,
                                    analyticsLocation: e,
                                    guild: h,
                                    isGIF: o,
                                    banner: O
                                }) : (0, u.Z)({
                                    analyticsLocations: m,
                                    analyticsSourceLocation: e,
                                    guild: h,
                                    perks: o ? (0, b.zC)() : (0, b.XO)()
                                })
                            }
                        },
                        children: y.Z.Messages.PREMIUM_GUILD_BOOST_SERVER
                    })]
                })
            }
            var h = n(153686),
                m = n(294184),
                w = n.n(m),
                j = n(366007),
                P = n(406493),
                E = n(98265),
                S = n(41717),
                C = n.n(S);

            function T(e) {
                var t = e.text,
                    n = e.textSize,
                    o = void 0 === n ? E.Z.Sizes.SIZE_12 : n,
                    i = e.textColor,
                    c = void 0 === i ? E.Z.Colors.STANDARD : i,
                    l = e.className,
                    a = e.button,
                    u = e.reducedRightPadding,
                    s = void 0 !== u && u;
                return (0, r.jsxs)("div", {
                    className: w()(s ? C().noticeWithoutRightPadding : C().noticeWithRightPadding, l),
                    children: [(0, r.jsxs)("div", {
                        className: C().noticeLeft,
                        children: [(0, r.jsx)(P.Z, {
                            className: C().icon,
                            color: j.JX.PREMIUM_TIER_2
                        }), (0, r.jsx)(E.Z, {
                            className: C().text,
                            size: o,
                            color: c,
                            children: t
                        })]
                    }), a]
                })
            }
            var _ = n(455706),
                x = n(473903),
                I = n(652591),
                M = n(116094),
                N = n(921431),
                R = n(203600),
                A = n(917567),
                L = n.n(A);

            function D(e) {
                var t = e.analyticsSection,
                    n = e.type,
                    a = (0, i.e7)([x.default], (function() {
                        return x.default.getCurrentUser()
                    })),
                    u = M.ZP.canUseAnimatedAvatar(a),
                    s = M.ZP.canUsePremiumProfileCustomization(a),
                    f = n === N.pC.BANNER && s || n === N.pC.AVATAR && u,
                    p = (0, l.Z)(h.Z.PREMIUM_PREVIEW_UPSELL_HEADER).sourceAnalyticsLocations;
                o.useEffect((function() {
                    f || I.default.track(d.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: t,
                        location_stack: p
                    })
                }), [f, t, p]);
                if (f) return null;
                var b = (0, r.jsx)(_.Z, {
                    className: L().getNitroLink,
                    size: c.Button.Sizes.SMALL,
                    look: c.Button.Looks.LINK,
                    color: c.Button.Colors.LINK,
                    subscriptionTier: R.Si.TIER_2,
                    buttonText: y.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
                    showIcon: !1,
                    premiumModalAnalyticsLocation: {
                        section: t,
                        object: d.qAy.BUTTON_CTA
                    },
                    disableShine: !0
                });
                return (0, r.jsx)(T, {
                    reducedRightPadding: !0,
                    className: L().nitroPreviewUpsell,
                    text: y.Z.Messages.PREMIUM_PREVIEW.format(),
                    textSize: E.Z.Sizes.SIZE_14,
                    textColor: E.Z.Colors.HEADER_PRIMARY,
                    button: b
                })
            }

            function Z(e) {
                var t = e.type,
                    n = e.analyticsPage,
                    o = e.analyticsSection,
                    i = e.isGIF,
                    c = e.banner;
                return [N.pC.BANNER, N.pC.AVATAR].includes(t) && i ? (0, r.jsx)(D, {
                    analyticsSection: o,
                    type: t
                }) : t === N.pC.GUILD_BANNER ? (0, r.jsx)(g, {
                    analyticsSection: o,
                    analyticsPage: n,
                    isGIF: i,
                    banner: c
                }) : null
            }
        },
        63509: (e, t, n) => {
            n.d(t, {
                Z: () => B
            });
            var r = n(441143),
                o = n.n(r),
                i = n(496486),
                c = n.n(i),
                l = n(620745),
                a = n(202351),
                u = n(744564),
                s = n(296602),
                f = n(120415),
                p = n(310126),
                d = n(202181),
                b = n(2590);

            function y(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function O(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function v(e) {
                v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return v(e)
            }

            function g(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function h(e, t) {
                return !t || "object" !== w(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function m(e, t) {
                m = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return m(e, t)
            }
            var w = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function j(e) {
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
                    var n, r = v(e);
                    if (t) {
                        var o = v(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
                }
            }
            var P = {},
                E = {},
                S = {},
                C = {},
                T = {},
                _ = new Set,
                x = "app-mount",
                I = function() {
                    return k.emitChange()
                },
                M = c().debounce(I, 150);

            function N(e) {
                var t = S[e];
                null == t || t.closed || (P[e] = {
                    x: t.screenX,
                    y: t.screenY,
                    width: t.innerWidth,
                    height: t.innerHeight,
                    alwaysOnTop: !!f.FB && E[e]
                })
            }

            function R(e) {
                var t = S[e],
                    n = T[e];
                if (null != t) {
                    var r = t.document;
                    (0, d.uF)(r, I);
                    t.addEventListener("focus", I);
                    t.addEventListener("blur", I);
                    t.addEventListener("resize", M);
                    ! function(e, t) {
                        var n = t.document,
                            r = document.querySelectorAll('link[rel="stylesheet"]'),
                            i = "".concat(window.location.protocol, "//").concat(window.location.host),
                            c = !0,
                            l = !1,
                            a = void 0;
                        try {
                            for (var u, s = r[Symbol.iterator](); !(c = (u = s.next()).done); c = !0) {
                                var f = u.value;
                                if (f.href.startsWith(i)) {
                                    var p = n.createElement("link");
                                    p.href = f.href;
                                    p.rel = f.rel;
                                    p.integrity = f.integrity;
                                    o()(null != n.head, "Document head was null");
                                    n.head.appendChild(p)
                                }
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                c || null == s.return || s.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                    }(0, t);
                    var i = (0, l.s)(r.getElementById(x));
                    o()(null != i, "No render target for popout!");
                    C[e] = i;
                    i.render(n(e))
                } else new s.Z("PopoutWindowStore").warn("Failed to open window", e)
            }

            function A(e) {
                var t = S[e];
                if (null != t) {
                    t.closed || N(e);
                    t.close();
                    ! function(e) {
                        var t = S[e];
                        o()(null != t, "Popout window was null during unmount");
                        t.removeEventListener("focus", I);
                        t.removeEventListener("blur", I);
                        t.removeEventListener("resize", M);
                        var n = C[e];
                        o()(null != n, "Window root was null while unmounting");
                        n.unmount();
                        delete S[e];
                        delete E[e];
                        delete T[e];
                        delete C[e]
                    }(e);
                    k.emitChange()
                }
            }

            function L(e) {
                var t = e.data;
                if (t instanceof Object && t.discordPopoutEvent instanceof Object) {
                    var n = t.discordPopoutEvent;
                    if (null != n.key) switch (n.type) {
                        case b.l9w.LOADED:
                            return function(e) {
                                if (_.has(e)) {
                                    R(e);
                                    _.delete(e);
                                    k.emitChange()
                                }
                            }(n.key);
                        case b.l9w.UNLOADED:
                            return A(n.key)
                    }
                }
            }

            function D() {
                var e = !0,
                    t = !1,
                    n = void 0;
                try {
                    for (var r, o = Object.keys(S)[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                        var i = r.value,
                            c = S[i];
                        null != c && c.close()
                    }
                } catch (e) {
                    t = !0;
                    n = e
                } finally {
                    try {
                        e || null == o.return || o.return()
                    } finally {
                        if (t) throw n
                    }
                }
            }
            var Z = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && m(e, t)
                }(n, e);
                var t = j(n);

                function n() {
                    y(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    window.addEventListener("message", L);
                    window.addEventListener("beforeunload", D);
                    P = null != e ? e : {}
                };
                r.getWindow = function(e) {
                    return S[e]
                };
                r.getWindowState = function(e) {
                    return P[e]
                };
                r.getWindowKeys = function() {
                    return Object.keys(S)
                };
                r.getWindowOpen = function(e) {
                    var t = S[e];
                    return null != t && !t.closed
                };
                r.getIsAlwaysOnTop = function(e) {
                    return Boolean(E[e])
                };
                r.getWindowFocused = function(e) {
                    var t, n, r = S[e];
                    return null !== (n = null == r || null === (t = r.document) || void 0 === t ? void 0 : t.hasFocus()) && void 0 !== n && n
                };
                r.getState = function() {
                    return P
                };
                r.unmountWindow = function(e) {
                    return A(e)
                };
                r.__getLocalVars = function() {
                    return {
                        popoutWindowState: P,
                        popoutWindowsAlwaysOnTop: E,
                        popoutWindows: S,
                        windowRoots: C,
                        windowRenderers: T,
                        pendingInjections: _,
                        INJECTION_ID: x,
                        emitChange: I,
                        debouncedEmitChange: M,
                        DEVELOPMENT_MODE: false,
                        instance: k
                    }
                };
                return n
            }(a.ZP.PersistedStore);
            Z.displayName = "PopoutWindowStore";
            Z.persistKey = "PopoutWindowStore";
            var k = new Z(u.Z, {
                POPOUT_WINDOW_OPEN: function(e) {
                    var t = e.key,
                        n = e.features,
                        r = e.render;
                    if (f.FB && !p.ZP.supportsFeature(b.eRX.POPOUT_WINDOWS)) throw new Error("Popout windows not supported on this native module version!");
                    var o = S[t];
                    if (null != o && !o.closed) {
                        f.FB ? p.ZP.focus(t) : o.focus();
                        return !1
                    }
                    var i = n.defaultWidth,
                        c = n.defaultHeight,
                        l = n.defaultAlwaysOnTop,
                        a = void 0 !== l && l,
                        u = g(n, ["defaultWidth", "defaultHeight", "defaultAlwaysOnTop"]),
                        s = a,
                        d = P[t];
                    if (null != d) {
                        var y = d.width,
                            v = d.height,
                            h = d.x,
                            m = d.y,
                            w = d.alwaysOnTop;
                        s = null != w ? w : a;
                        u = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))));
                                r.forEach((function(t) {
                                    O(e, t, n[t])
                                }))
                            }
                            return e
                        }({
                            width: null != y && 0 !== y ? y : i,
                            height: null != v && 0 !== v ? v : c,
                            left: h,
                            top: m
                        }, u)
                    }
                    var j = window.open(b.Z5c.POPOUT_WINDOW, t, function(e) {
                        var t = "",
                            n = !0,
                            r = !1,
                            o = void 0;
                        try {
                            for (var i, c = Object.keys(e)[Symbol.iterator](); !(n = (i = c.next()).done); n = !0) {
                                var l = i.value,
                                    a = e[l];
                                if (void 0 !== a) {
                                    "boolean" == typeof a && (a = a ? "yes" : "no");
                                    t += "".concat(l, "=").concat(a, ",")
                                }
                            }
                        } catch (e) {
                            r = !0;
                            o = e
                        } finally {
                            try {
                                n || null == c.return || c.return()
                            } finally {
                                if (r) throw o
                            }
                        }
                        return t
                    }(u));
                    j.windowKey = t;
                    null == j || j.focus();
                    S[t] = j;
                    T[t] = r;
                    if (f.FB) {
                        p.ZP.setAlwaysOnTop(t, s);
                        E[t] = s;
                        p.ZP.isAlwaysOnTop(t).then((function(e) {
                            return E[t] = e
                        }))
                    }
                    _.add(t)
                },
                POPOUT_WINDOW_CLOSE: function(e) {
                    var t = e.key,
                        n = S[t];
                    if (null != n && !n.closed) {
                        N(t);
                        n.close()
                    }
                },
                POPOUT_WINDOW_SET_ALWAYS_ON_TOP: function(e) {
                    var t = e.key,
                        n = e.alwaysOnTop;
                    if (f.FB) {
                        p.ZP.setAlwaysOnTop(t, n);
                        E[t] = n;
                        p.ZP.isAlwaysOnTop(t).then((function(e) {
                            return E[t] = e
                        }))
                    }
                },
                LOGOUT: D
            });
            const B = k
        },
        398344: (e, t, n) => {
            n.d(t, {
                K: () => y,
                Z: () => P
            });
            var r = n(202351),
                o = n(744564),
                i = n(536392),
                c = n(162308),
                l = n(203600);

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return f(e)
            }

            function p(e, t) {
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

            function d(e, t) {
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function b(e, t) {
                b = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return b(e, t)
            }
            var y, O = function(e) {
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
                    var n, r = f(e);
                    if (t) {
                        var o = f(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }! function(e) {
                e.FILE_UPLOAD = "file_upload";
                e.STICKER_PICKER = "sticker_picker";
                e.EMOJI_PICKER = "emoji_picker";
                e.BOOSTING_FLOW = "boosting_flow"
            }(y || (y = {}));
            var g = {
                isPersistentCoachmarkCollapsed: !1,
                hasFlowStartEventBeenEmitted: {},
                canPlayWowMoment: !1,
                isPersistentHelperHidden: !0,
                isFetchingWowMomentMedia: !1,
                wowMomentWumpusMediaUrl: null,
                wowMomentHelperMediaUrl: null,
                navigatedFromHelper: !1,
                tutorialExpirationTime: null
            };

            function h() {
                g = {
                    isPersistentCoachmarkCollapsed: !1,
                    hasFlowStartEventBeenEmitted: {},
                    canPlayWowMoment: !1,
                    isPersistentHelperHidden: !0,
                    isFetchingWowMomentMedia: !1,
                    wowMomentWumpusMediaUrl: null,
                    wowMomentHelperMediaUrl: null,
                    navigatedFromHelper: !1,
                    tutorialExpirationTime: null
                }
            }

            function m() {
                var e = new Date;
                e.setDate(e.getDate() + 14);
                g.tutorialExpirationTime = e.getTime()
            }
            var w, j = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && b(e, t)
                }(n, e);
                var t = v(n);

                function n() {
                    a(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    null != e && (g = e);
                    g.isPersistentHelperHidden = !1;
                    g.canPlayWowMoment = !1;
                    g.isFetchingWowMomentMedia = !1;
                    g.wowMomentWumpusMediaUrl = null;
                    g.wowMomentHelperMediaUrl = null
                };
                r.getState = function() {
                    return g
                };
                r.hasFlowStartEventBeenEmitted = function(e) {
                    null == g.hasFlowStartEventBeenEmitted[e] && (g.hasFlowStartEventBeenEmitted[e] = !1);
                    return g.hasFlowStartEventBeenEmitted[e]
                };
                r.__getLocalVars = function() {
                    return {
                        state: g
                    }
                };
                ! function(e, t, n) {
                    t && u(e.prototype, t);
                    n && u(e, n)
                }(n, [{
                    key: "isPersistentCoachmarkCollapsed",
                    get: function() {
                        return g.isPersistentCoachmarkCollapsed
                    }
                }, {
                    key: "canPlayWowMoment",
                    get: function() {
                        return g.canPlayWowMoment
                    }
                }, {
                    key: "isPersistentHelperHidden",
                    get: function() {
                        return g.isPersistentHelperHidden
                    }
                }, {
                    key: "isFetchingWowMomentMedia",
                    get: function() {
                        return g.isFetchingWowMomentMedia
                    }
                }, {
                    key: "wowMomentWumpusMedia",
                    get: function() {
                        return g.wowMomentWumpusMediaUrl
                    }
                }, {
                    key: "wowMomentHelperMedia",
                    get: function() {
                        return g.wowMomentHelperMediaUrl
                    }
                }, {
                    key: "navigatedFromHelper",
                    get: function() {
                        return g.navigatedFromHelper
                    }
                }, {
                    key: "tutorialExpirationTime",
                    get: function() {
                        return g.tutorialExpirationTime
                    }
                }]);
                return n
            }(r.ZP.PersistedStore);
            j.displayName = "PremiumTutorialStore";
            j.persistKey = "PremiumTutorialStore";
            j.migrations = [function(e) {
                return p(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            s(e, t, n[t])
                        }))
                    }
                    return e
                }({}, e), {
                    hasFlowStartEventBeenEmitted: null !== (w = e.hasFlowStartEventBeenEmitted) && void 0 !== w ? w : {}
                })
            }];
            const P = new j(o.Z, {
                PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE: function() {
                    g.isPersistentCoachmarkCollapsed = !g.isPersistentCoachmarkCollapsed
                },
                UPDATE_HAS_FLOW_START_EVENT_BEEN_EMITTED: function(e) {
                    var t = e.event,
                        n = e.value;
                    g.hasFlowStartEventBeenEmitted[t] = n
                },
                LOGOUT: function() {
                    h()
                },
                RESET_PREMIUM_TUTORIAL_STORE: h,
                PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT: function(e) {
                    var t = e.value;
                    g.canPlayWowMoment = t
                },
                PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN: function(e) {
                    var t = e.value;
                    g.isPersistentHelperHidden = t
                },
                PREMIUM_TUTORIAL_IS_FETCHING_WOW_MOMENT_MEDIA: function(e) {
                    var t = e.value;
                    g.isFetchingWowMomentMedia = t
                },
                PREMIUM_TUTORIAL_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function(e) {
                    var t = e.wumpusMedia,
                        n = e.helperMedia;
                    g.wowMomentWumpusMediaUrl = t;
                    g.wowMomentHelperMediaUrl = n;
                    g.isFetchingWowMomentMedia = !1
                },
                PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER: function(e) {
                    var t = e.value;
                    g.navigatedFromHelper = t
                },
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function(e) {
                    var t = e.subscription;
                    c.Z.getCurrentConfig({
                        location: "5f2710_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled && null != t.items.find((function(e) {
                        return l.UD.has(e.plan_id)
                    })) && m()
                },
                GIFT_CODE_REDEEM_SUCCESS: function(e) {
                    var t = e.entitlement;
                    c.Z.getCurrentConfig({
                        location: "5f2710_2"
                    }, {
                        autoTrackExposure: !1
                    }).enabled && (null == t ? void 0 : t.sku_id) === l.Si.TIER_2 && null == i.Z.getPremiumSubscription(!1) && null == g.tutorialExpirationTime && m()
                }
            })
        },
        156620: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            const r = (0, n(260561).B)({
                kind: "user",
                id: "2023-02_nitroduction_experience",
                label: "Nitroduction Experience",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "One month trial users recieve the Nitroduction experience",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        162308: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            const r = (0, n(260561).B)({
                kind: "user",
                id: "2023-08_premium_tutorial_for_all",
                label: "Premium Tutorial Experience For All",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "All net new users (exclude trial) receive premium tutorial experience",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        305082: (e, t, n) => {
            n.d(t, {
                dA: () => m,
                z2: () => P,
                eM: () => C
            });
            var r = n(667294),
                o = n(202351),
                i = n(418705),
                c = n(673679),
                l = n(896490),
                a = n(473419),
                u = n(473903),
                s = n(536392),
                f = n(116094),
                p = n(666870),
                d = n(398344),
                b = n(156620),
                y = n(162308),
                O = n(203600),
                v = 18e5,
                g = function() {
                    var e = (0, o.e7)([s.Z], (function() {
                            return s.Z.getPremiumTypeSubscription()
                        })),
                        t = (0, l.wE)(i.z$.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, p.s6)(e) && !t
                },
                h = function() {
                    var e = (0, p._O)(),
                        t = (0,
                            l.wE)(i.z$.PREMIUM_TUTORIAL_EXPERIENCE),
                        n = (0, o.e7)([u.default], (function() {
                            return u.default.getCurrentUser()
                        })),
                        a = (0, f.M5)(n, O.p9.TIER_2),
                        d = (0, o.e7)([s.Z], (function() {
                            return s.Z.hasFetchedPreviousPremiumTypeSubscription()
                        })),
                        b = (0, o.e7)([s.Z], (function() {
                            return s.Z.getPreviousPremiumTypeSubscription()
                        })),
                        y = !e && a;
                    r.useEffect((function() {
                        !y || d || t || (0, c.ou)()
                    }), [y, d, t]);
                    return y && d && null == b && !t
                };

            function m(e) {
                var t, n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    r = g() && n,
                    i = b.Z.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: r,
                        disable: !r
                    }),
                    c = i.enabled,
                    l = (0, o.e7)([d.Z], (function() {
                        return d.Z.tutorialExpirationTime
                    })),
                    a = (new Date).getTime(),
                    u = null != l && l > a,
                    f = (0, o.e7)([s.Z], (function() {
                        var e, n;
                        return null !== (t = null === (e = s.Z.getPremiumSubscription()) || void 0 === e || null === (n = e.createdAt) || void 0 === n ? void 0 : n.getTime()) && void 0 !== t ? t : 0
                    })),
                    p = a - f < v,
                    O = h() && n,
                    m = y.Z.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: O && p,
                        disable: !O
                    }).enabled && u;
                return c || m
            }
            var w = function() {
                    var e = s.Z.getPremiumTypeSubscription(),
                        t = (0, l.un)(i.z$.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, p.s6)(e) && !t
                },
                j = function() {
                    var e = (0, p.se)(),
                        t = (0, l.un)(i.z$.PREMIUM_TUTORIAL_EXPERIENCE),
                        n = u.default.getCurrentUser(),
                        r = (0, f.M5)(n, O.p9.TIER_2),
                        o = s.Z.hasFetchedPreviousPremiumTypeSubscription(),
                        a = s.Z.getPreviousPremiumTypeSubscription();
                    o || !r || t || (0, c.ou)();
                    return !t && (!e && r && o && null == a)
                },
                P = function(e) {
                    var t, n, r, o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = w() && o,
                        c = b.Z.getCurrentConfig({
                            location: e
                        }, {
                            disable: !i,
                            autoTrackExposure: i
                        }),
                        l = c.enabled,
                        a = (new Date).getTime(),
                        u = d.Z.tutorialExpirationTime,
                        f = null != u && u > a,
                        p = null !== (r = null === (t = s.Z.getPremiumSubscription()) || void 0 === t || null === (n = t.createdAt) || void 0 === n ? void 0 : n.getTime()) && void 0 !== r ? r : 0,
                        O = a - p < v,
                        g = j() && o,
                        h = y.Z.getCurrentConfig({
                            location: e
                        }, {
                            disable: !g,
                            autoTrackExposure: g && O
                        }).enabled && f;
                    return l || h
                };
            var E = [];

            function S() {
                return O.N$.filter((function(e) {
                    return (0, l.un)(e)
                }))
            }

            function C() {
                return e = S, t = E,
                    n = m("useMemoizedValueSyncedWithDismissibleContents"), i = (0, o.e7)([a.Z], (function() {
                        var e;
                        return null === (e = a.Z.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
                    })), r.useMemo((function() {
                        return n ? e() : t
                    }), [n, t, e, i]);
                var e, t, n, i
            }
        },
        76296: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(795308),
                c = n(633878);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
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

            function u(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e, t) {
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

            function p(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const d = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    l = e.color,
                    a = void 0 === l ? "currentColor" : l,
                    u = e.foreground,
                    d = p(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            s(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(d)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: (0, r.jsx)("path", {
                        className: u,
                        fill: a,
                        d: "M20 10.9378H14.2199H8.06628L10.502 8.50202L9 7L4 12L9 17L10.502 15.498L8.06628 13.0622H20V10.9378Z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    b = void 0 === d ? "" : d,
                    y = u(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", a(function(e) {
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
                }({}, (0, c.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M3.293 11.293a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414L6.414 13H20a1 1 0 1 0 0-2H6.414l3.293-3.293a1 1 0 0 0-1.414-1.414l-5 5Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }))
        },
        316388: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(795308),
                c = n(633878);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
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

            function u(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e, t) {
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

            function p(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const d = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    l = e.color,
                    a = void 0 === l ? "currentColor" : l,
                    u = e.foreground,
                    d = p(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            s(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(d)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsx)("path", {
                            className: u,
                            fill: a,
                            d: "M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"
                        }), (0, r.jsx)("rect", {
                            width: "24",
                            height: "24"
                        })]
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    b = void 0 === d ? "" : d,
                    y = u(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", a(function(e) {
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
                }({}, (0, c.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M16.293 14.707a1 1 0 0 1 0-1.414l2.5-2.5a3.95 3.95 0 1 0-5.586-5.586l-2.5 2.5a1 1 0 1 1-1.414-1.414l2.5-2.5a5.95 5.95 0 0 1 8.414 8.414l-2.5 2.5a1 1 0 0 1-1.414 0ZM7.707 9.293a1 1 0 0 1 0 1.414l-2.5 2.5a3.95 3.95 0 0 0 5.586 5.586l2.5-2.5a1 1 0 0 1 1.414 1.414l-2.5 2.5a5.95 5.95 0 1 1-8.414-8.414l2.5-2.5a1 1 0 0 1 1.414 0Zm7 1.414a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 1.414 1.414l4-4Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }))
        },
        235606: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(980559);
            const c = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    c = e.color,
                    l = void 0 === c ? "currentColor" : c,
                    a = e.className,
                    u = e.foreground;
                return (0, r.jsx)("svg", {
                    className: a,
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsx)("path", {
                        className: u,
                        fill: l,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 4.5C2 3.397 2.897 2.5 4 2.5H20C21.103 2.5 22 3.397 22 4.5V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5ZM13.2 14.3375V11.6C9.864 11.6 7.668 12.6625 6 15C6.672 11.6625 8.532 8.3375 13.2 7.6625V5L18 9.6625L13.2 14.3375Z"
                    })
                })
            }), i.p)
        },
        755914: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(795308),
                c = n(633878);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
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

            function u(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e, t) {
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

            function p(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const d = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    l = e.color,
                    a = void 0 === l ? "currentColor" : l,
                    u = e.foreground,
                    d = p(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            s(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(d)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: u,
                        fill: a,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                        "aria-hidden": !0
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    b = void 0 === d ? "" : d,
                    y = u(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", a(function(e) {
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
                }({}, (0, c.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.737.324L5.917 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.917l4.286 4.676a1 1 0 0 0 .737.324H11a1 1 0 0 0 1-1V3Zm3.1 17.754c-.58.138-1.1-.33-1.1-.926v-.032c0-.497.369-.912.849-1.043a7.003 7.003 0 0 0 0-13.506C14.369 5.116 14 4.7 14 4.204v-.032c0-.596.52-1.064 1.1-.926a9.004 9.004 0 0 1 0 17.508Zm.057-4.242c-.57.273-1.157-.203-1.157-.835v-.14c0-.424.277-.789.633-1.02A2.997 2.997 0 0 0 16 12a2.997 2.997 0 0 0-1.367-2.517c-.356-.231-.633-.596-.633-1.02v-.14c0-.632.587-1.108 1.157-.835a5 5 0 0 1 0 9.024Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }))
        },
        565571: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(795308),
                c = n(633878);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
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

            function u(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e, t) {
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

            function p(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const d = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 32 : t,
                    o = e.height,
                    i = void 0 === o ? 32 : o,
                    l = e.color,
                    a = void 0 === l ? "currentColor" : l,
                    u = p(e, ["width", "height", "color"]);
                return (0, r.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            s(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(u)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                        fill: a
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    b = void 0 === d ? "" : d,
                    y = u(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", a(function(e) {
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
                }({}, (0, c.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Zm-2.785-3.017c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-8.669 8.03c-.252.725.12 1.5.808 1.84A10.955 10.955 0 0 0 12 23c1.745 0 3.395-.406 4.861-1.13.69-.34 1.06-1.115.808-1.84a6.003 6.003 0 0 0-11.338 0Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }))
        },
        585798: (e, t, n) => {
            n.d(t, {
                Ox: () => T,
                QP: () => P,
                q4: () => _,
                ob: () => x
            });
            var r = n(785893),
                o = n(667294),
                i = n(873955),
                c = n.n(i),
                l = n(494537),
                a = n(588983),
                u = n(38736),
                s = n(142643),
                f = n(882723),
                p = n(241166),
                d = n(421281),
                b = n(329543),
                y = n(664868),
                O = n.n(y);

            function v(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function g(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function h(e, t) {
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
            var w, j = (0, d.Mg)(s.Z.FULL_SCREEN_LAYER_ANIMATION_DURATION);
            ! function(e) {
                e[e.ENTERING = 1] = "ENTERING";
                e[e.ENTERED = 2] = "ENTERED";
                e[e.EXITING = 3] = "EXITING";
                e[e.EXITED = 4] = "EXITED"
            }(w || (w = {}));
            var P = (0, u.Z)((function(e) {
                return {
                    fullScreenLayers: [],
                    addLayer: function(t) {
                        return e((function(e) {
                            return {
                                fullScreenLayers: m(e.fullScreenLayers).concat([t])
                            }
                        }))
                    }
                }
            }));

            function E(e) {
                var t = e.item,
                    n = o.useRef(null);
                (0, f.useFocusLock)(n);
                o.useEffect((function() {
                    p.Z.disable();
                    p.Z.enableTemp((e = t.key, {
                        POP_LAYER: {
                            binds: ["esc"],
                            comboKeysBindGlobal: !0,
                            action: function() {
                                x(e)
                            }
                        }
                    }));
                    var e;
                    return function() {
                        p.Z.disableTemp()
                    }
                }), [t.key]);
                return (0, r.jsx)(t.LayerComponent, {
                    children: (0, r.jsxs)("div", {
                        className: O().root,
                        ref: n,
                        children: [(0, r.jsx)("div", {
                            className: O().drag
                        }), t.render({
                            transitionState: null != t ? t.transitionState : w.EXITING,
                            closeLayer: function() {
                                return x(t.key)
                            }
                        })]
                    })
                })
            }
            var S = {
                    enter: O().enter,
                    enterActive: O().enterActive,
                    enterDone: O().enterDone,
                    exit: O().exit,
                    exitActive: O().exitActive,
                    exitDone: O().exitDone
                },
                C = {
                    enter: O().enterReducedMotion,
                    enterActive: O().enterActiveReducedMotion,
                    enterDone: O().enterDoneReducedMotion,
                    exit: O().exitReducedMotion,
                    exitActive: O().exitActiveReducedMotion,
                    exitDone: O().exitDoneReducedMotion
                };

            function T() {
                var e = o.useContext(f.AccessibilityPreferencesContext).reducedMotion.enabled ? C : S,
                    t = P((function(e) {
                        return e.fullScreenLayers
                    }));
                return (0, r.jsx)(l.Z, {
                    children: t.map((function(n) {
                        return (0, r.jsx)(a.Z, {
                            classNames: e,
                            timeout: j,
                            onEntered: function() {
                                P.setState({
                                    fullScreenLayers: t.map((function(e) {
                                        return e.key === n.key ? h(function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    r = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                }))));
                                                r.forEach((function(t) {
                                                    g(e, t, n[t])
                                                }))
                                            }
                                            return e
                                        }({}, e), {
                                            transitionState: w.ENTERED
                                        }) : e
                                    }))
                                })
                            },
                            unmountOnExit: !0,
                            children: (0, r.jsx)(E, {
                                item: n
                            })
                        }, n.key)
                    }))
                })
            }

            function _(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
                    n = t.layerKey,
                    r = t.Layer,
                    o = null != n ? n : c()();
                P.setState((function(t) {
                    return {
                        fullScreenLayers: m(t.fullScreenLayers).concat([{
                            key: o,
                            transitionState: w.ENTERING,
                            LayerComponent: null != r ? r : b.ZP,
                            render: e
                        }])
                    }
                }));
                return o
            }

            function x(e) {
                P.setState((function(t) {
                    return {
                        fullScreenLayers: t.fullScreenLayers.filter((function(t) {
                            return t.key !== e
                        }))
                    }
                }))
            }
        }
    }
]);