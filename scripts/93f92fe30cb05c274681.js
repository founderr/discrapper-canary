(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["46667"], {
        489847: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ab3468632852f3725893.png"
        },
        94646: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c5c556a5e9be016ffb2d.png"
        },
        286642: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a3edb1330403965aa3f6.png"
        },
        655029: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6fac2c0e5ed90d06b3b9.png"
        },
        740683: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7b9383fd24920a3a95b7.png"
        },
        714293: function(e, t, n) {
            "use strict";
            e.exports = n.p + "295744c4b4e7cb95b539.png"
        },
        861485: function(e, t, n) {
            "use strict";
            e.exports = n.p + "16abeb1745235d8aea66.png"
        },
        638538: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ac20c9a7b69e25e9d680.png"
        },
        597704: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7bb17dc88ff31be285a8.png"
        },
        290216: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1616ba0a324e68a4fff7.png"
        },
        551290: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f156f6c8b61734c205fc.png"
        },
        93902: function(e, t, n) {
            "use strict";
            e.exports = n.p + "de1981a6479d060d8ebd.png"
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...i
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.786 3.374A.25.25 0 0 0 17.57 5h-3.134a.75.75 0 0 0-.65.378L6.213 18.626A.25.25 0 0 0 6.43 19h3.134a.75.75 0 0 0 .65-.378l7.571-13.248Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        206625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("884691");

            function a(e, t) {
                let n = r.useRef(e);
                return r.useEffect(() => {
                    function e(e) {
                        null != n.current && !n.current.contains(e.target) && t()
                    }
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, [n, t]), n
            }
        },
        162426: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var r = n("884691"),
                a = n("599417"),
                l = n("782340");

            function o(e) {
                let [t, n] = r.useState(!1), [o, s] = r.useState(null), i = r.useCallback(async function() {
                    for (var t = arguments.length, r = Array(t), o = 0; o < t; o++) r[o] = arguments[o];
                    try {
                        return s(null), n(!0), await e(...r)
                    } catch (e) {
                        e.message !== l.default.Messages.MFA_V2_CANCELED && s(new a.default(e))
                    } finally {
                        n(!1)
                    }
                }, [e]);
                return [i, {
                    loading: t,
                    error: o
                }]
            }
        },
        923702: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007");
            var r = n("37983"),
                a = n("884691"),
                l = n("516555"),
                o = n("172858"),
                s = function(e) {
                    let {
                        confettiTarget: t,
                        confettiCanvas: n,
                        sprites: s,
                        colors: i
                    } = e, [u, c] = a.useState(null), d = (0, l.useConfettiCannon)(n, u), [f, C] = a.useState(!1);
                    return a.useEffect(() => {
                        let e = Array(10).fill(0);
                        return null != t && d.isReady && !f && (e = e.map((n, r) => setTimeout(() => {
                            var n;
                            r === e.length - 1 && C(!0), d.createMultipleConfetti((n = t.getBoundingClientRect(), {
                                ...o.COMMON_CONFETTI_BASE_CONFIG,
                                position: {
                                    type: "static-random",
                                    minValue: {
                                        x: n.x,
                                        y: n.y
                                    },
                                    maxValue: {
                                        x: n.x + n.width,
                                        y: n.y + n.height / 2
                                    }
                                },
                                velocity: {
                                    type: "static-random",
                                    minValue: {
                                        x: -100,
                                        y: -50
                                    },
                                    maxValue: {
                                        x: 100,
                                        y: -300
                                    }
                                },
                                dragCoefficient: {
                                    type: "static",
                                    value: 1e-4
                                }
                            }), 50)
                        }, 100 * r))), () => {
                            for (let t of e) clearTimeout(t)
                        }
                    }, [d, t, f]), (0, r.jsx)(l.SpriteCanvas, {
                        ref: c,
                        sprites: null != s ? s : o.COMMON_CONFETTI_SPRITES,
                        colors: null != i ? i : o.COMMON_CONFETTI_COLORS,
                        spriteWidth: o.COMMON_CONFETTI_MAX_SPRITE_SIZE,
                        spriteHeight: o.COMMON_CONFETTI_MAX_SPRITE_SIZE
                    })
                }
        },
        716120: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("414456"),
                l = n.n(a),
                o = n("65597"),
                s = n("854588"),
                i = n("206230"),
                u = n("284679"),
                c = n("491232"),
                d = n("408381"),
                f = n("268779"),
                C = e => {
                    let {
                        asset: t,
                        size: n = d.MAX_CONTENT_WIDTH,
                        className: a,
                        style: C,
                        children: E
                    } = e, p = (0, o.default)([i.default], () => i.default.saturation);
                    return (0, r.jsx)("div", {
                        className: l(f.banner, a),
                        style: (() => {
                            if (null == t) return C;
                            let e = (0, c.getCollectiblesAssetURL)(t, {
                                size: n,
                                format: "jpg"
                            });
                            if (1 === p) return {
                                ...C,
                                backgroundImage: "url(".concat(e, ")"),
                                backgroundSize: "cover"
                            };
                            let r = (0, u.hexOpacityToRgba)(s.default.unsafe_rawColors.BLACK_500, 1 - p);
                            return {
                                ...C,
                                backgroundImage: "linear-gradient(".concat(r, ", ").concat(r, "), url(").concat(e, ")"),
                                backgroundBlendMode: "saturation",
                                backgroundSize: "cover"
                            }
                        })(),
                        children: E
                    })
                }
        },
        658756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CollectiblesCollectedModalInner: function() {
                    return F
                },
                default: function() {
                    return R
                }
            }), n("222007");
            var r = n("37983"),
                a = n("884691"),
                l = n("414456"),
                o = n.n(l),
                s = n("516555"),
                i = n("627445"),
                u = n.n(i),
                c = n("65597"),
                d = n("77078"),
                f = n("54239"),
                C = n("206230"),
                E = n("812204"),
                p = n("685665"),
                S = n("606292"),
                h = n("688318"),
                I = n("38766"),
                m = n("601095"),
                _ = n("493390"),
                v = n("697218"),
                g = n("730297"),
                x = n("806410"),
                T = n("923702"),
                A = n("716120"),
                N = n("408381"),
                O = n("57940"),
                M = n("782340"),
                y = n("99242"),
                P = n("53708");
            let F = e => {
                var t, n;
                let {
                    product: l,
                    onClose: o,
                    confettiTarget: s,
                    confettiCanvas: i,
                    category: F,
                    analyticsLocations: R
                } = e, {
                    confettiColors: b,
                    confettiSprites: L,
                    backgroundColors: j,
                    buttonColors: D
                } = (0, O.default)(F), k = (0, c.default)([v.default], () => {
                    let e = v.default.getCurrentUser();
                    return u(null != e, "User cannot be undefined"), e
                }), B = (0, c.default)([C.default], () => C.default.useReducedMotion), H = null !== (t = l.items.find(g.isAvatarDecorationRecord)) && void 0 !== t ? t : null, w = null !== (n = l.items.find(x.isProfileEffectRecord)) && void 0 !== n ? n : null, {
                    avatarDecorationSrc: U
                } = (0, h.default)({
                    user: k,
                    avatarDecorationOverride: H,
                    size: (0, S.getDecorationSizeForAvatarSize)(d.AvatarSizes.SIZE_120)
                }), V = a.useRef(null), {
                    analyticsLocations: Z,
                    AnalyticsLocationProvider: z
                } = (0, p.default)([...R, E.default.COLLECTIBLES_COLLECTED_MODAL]), G = (0, I.default)({
                    analyticsLocations: Z
                });
                return null == H && null == w ? null : (0, r.jsxs)(z, {
                    children: [(0, r.jsxs)("div", {
                        className: y.modalInner,
                        ref: V,
                        style: null != j ? {
                            background: (0, N.getBackgroundGradient)(j)
                        } : void 0,
                        children: [(0, r.jsxs)("div", {
                            className: y.bannerContainer,
                            children: [(0, r.jsx)(A.default, {
                                asset: F.banner,
                                size: 440,
                                className: y.decorationBanner
                            }), null != H && (0, r.jsx)(d.Avatar, {
                                size: d.AvatarSizes.SIZE_120,
                                src: P,
                                avatarDecoration: U,
                                className: y.avatarDecoration,
                                "aria-label": l.name
                            }), null != w && (0, r.jsx)("div", {
                                className: y.profileEffectShopPreview,
                                children: (0, r.jsx)(m.default, {
                                    forCollectedModal: !0,
                                    profileEffectId: null == w ? void 0 : w.id
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: y.collectedInfoContainer,
                            children: [(0, r.jsxs)("div", {
                                className: y.collectedTextContainer,
                                children: [(0, r.jsx)(d.Heading, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    children: M.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
                                        itemName: l.name
                                    })
                                }), (0, r.jsx)(d.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: null != w ? M.default.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : M.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
                                })]
                            }), (0, r.jsx)(d.Button, {
                                onClick: () => {
                                    o(), (0, f.popLayer)(), G(), null != H ? (0, S.openAvatarDecorationModal)({
                                        initialSelectedDecoration: l.items.find(g.isAvatarDecorationRecord),
                                        analyticsLocations: Z
                                    }) : null != w && (0, _.openProfileEffectModal)({
                                        analyticsLocations: Z,
                                        initialSelectedEffectID: null == w ? void 0 : w.id
                                    })
                                },
                                style: null != D ? {
                                    background: (0, N.getBackgroundGradient)(D, 90)
                                } : void 0,
                                children: M.default.Messages.COLLECTIBLES_USE_NOW
                            })]
                        }), (0, r.jsx)(d.ModalCloseButton, {
                            onClick: o,
                            className: y.modalCloseButton,
                            withCircleBackground: !0
                        })]
                    }), !B && (0, r.jsx)(T.default, {
                        confettiTarget: null != s ? s : V.current,
                        confettiCanvas: i,
                        sprites: L,
                        colors: b
                    })]
                })
            };
            var R = e => {
                let {
                    transitionState: t,
                    product: n,
                    category: l,
                    onClose: i,
                    analyticsLocations: u
                } = e, c = a.useRef(new s.Environment), [f, C] = a.useState(null);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(s.ConfettiCanvas, {
                        ref: C,
                        className: y.confettiCanvas,
                        environment: c.current
                    }), (0, r.jsx)(d.ModalRoot, {
                        transitionState: t,
                        size: d.ModalSize.DYNAMIC,
                        children: (0, r.jsx)(d.ModalContent, {
                            className: o(y.modalInner, y.modalContentOverrides),
                            children: (0, r.jsx)(F, {
                                product: n,
                                category: l,
                                onClose: i,
                                confettiCanvas: f,
                                analyticsLocations: u
                            })
                        })
                    })]
                })
            }
        },
        408381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_CONTENT_WIDTH: function() {
                    return r
                },
                getLogoSize: function() {
                    return a
                },
                getBackgroundGradient: function() {
                    return l
                }
            });
            let r = 1060,
                a = e => 3.8 * e,
                l = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
                        {
                            primary: n,
                            secondary: r
                        } = e;
                    return "linear-gradient(".concat(t, "deg, ").concat(n.toHslString(), ", ").concat(r.toHslString(), ")")
                }
        },
        57940: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007");
            var r = n("656280"),
                a = n.n(r),
                l = n("635058"),
                o = n("65597"),
                s = n("669491"),
                i = n("206230"),
                u = n("388491"),
                c = n("172858");
            let d = a(s.default.unsafe_rawColors.WHITE_500.resolve({
                    saturation: 1
                }).hex()),
                f = a(s.default.unsafe_rawColors.BLACK_500.resolve({
                    saturation: 1
                }).hex()),
                C = (e, t) => {
                    let n = e.toRgb(),
                        r = t.toRgb(),
                        [l, o, s] = (0, u.getValueInColorGradientByPercentage)([n.r, n.g, n.b], [r.r, r.g, r.b], 50);
                    return a({
                        r: l,
                        g: o,
                        b: s
                    })
                },
                E = (e, t) => {
                    let n = a(e),
                        r = a(t),
                        l = C(n, r);
                    return {
                        primary: n,
                        secondary: r,
                        border: l.setAlpha(.4)
                    }
                },
                p = (e, t) => {
                    let n = a(e),
                        r = a(t),
                        l = C(n, r);
                    return {
                        primary: n,
                        secondary: r,
                        text: a(l.isLight() ? f : d)
                    }
                },
                S = (e, t) => {
                    let {
                        h: n,
                        s: r,
                        l
                    } = e.toHsl();
                    return a({
                        h: n,
                        s: r * t,
                        l
                    })
                },
                h = {
                    [l.CollectiblesCategorySkuId.FANTASY]: {
                        backgroundColors: E("#146144", "#021A0E"),
                        buttonColors: p("#028737", "#00694A"),
                        confettiSprites: [n("655029"), n("290216")],
                        confettiColors: ["#EFA7F7", "#B646C1", "#56B3B3", "#1A8199", "#7160AF", "#AEC7FF"]
                    },
                    [l.CollectiblesCategorySkuId.ANIME]: {
                        backgroundColors: E("#4B79B0", "#0F0E3A"),
                        buttonColors: p("#8A45C1", "#136897"),
                        confettiSprites: [n("597704"), n("714293")],
                        confettiColors: ["#2C9BD9", "#E46A80", "#FFE500", "#BBA8D5", "#3EDDD3", "#E2B761"]
                    },
                    [l.CollectiblesCategorySkuId.BREAKFAST]: {
                        backgroundColors: E("#E8B26B", "#7A3A00"),
                        buttonColors: p("#FFC355", "#FF9537"),
                        confettiSprites: [n("286642"), n("94646")],
                        confettiColors: ["#DD9C98", "#FFC037", "#FF6B00", "#FDE081", "#DD923E", "#FFEECC"]
                    },
                    [l.CollectiblesCategorySkuId.DISXCORE]: {
                        backgroundColors: E("#732565", "#111D40"),
                        buttonColors: p(s.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.resolve({
                            saturation: 1
                        }).hex(), s.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.resolve({
                            saturation: 1
                        }).hex()),
                        confettiSprites: c.COMMON_CONFETTI_SPRITES.filter((e, t) => 1 !== t && 7 !== t),
                        confettiColors: ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"]
                    },
                    [l.CollectiblesCategorySkuId.HALLOWEEN]: {
                        backgroundColors: E("#5280DC", "#060F25"),
                        buttonColors: p("#496BDB", "#3E41B5"),
                        confettiSprites: [n("638538"), n("861485")],
                        confettiColors: ["#EE5619", "#FDBE44", "#42D612", "#DC0DDE", "#8A0AE5"]
                    },
                    [l.CollectiblesCategorySkuId.FALL]: {
                        backgroundColors: E("#FFC267", "#6C1A00"),
                        buttonColors: p("#F5A142", "#E4760E"),
                        confettiSprites: [n("740683"), n("489847")],
                        confettiColors: ["#FF7138", "#92360C", "#F6A334", "#FFC586", "#FF8A00"]
                    },
                    [l.CollectiblesCategorySkuId.WINTER]: {
                        backgroundColors: E("#FFC267", "#6C1A00"),
                        buttonColors: p("#F5A142", "#E4760E"),
                        confettiSprites: [n("740683"), n("489847")],
                        confettiColors: ["#FF7138", "#92360C", "#F6A334", "#FFC586", "#FF8A00"]
                    }
                };
            var I = e => {
                let t = (0, o.default)([i.default], () => i.default.saturation);
                if (null == e) return {};
                let n = h[e.skuId];
                return (null == n ? void 0 : n.backgroundColors) == null || 1 === t ? null != n ? n : {} : {
                    ...n,
                    backgroundColors: {
                        primary: S(n.backgroundColors.primary, t),
                        secondary: S(n.backgroundColors.secondary, t),
                        border: S(n.backgroundColors.border, t)
                    },
                    buttonColors: {
                        primary: S(n.buttonColors.primary, t),
                        secondary: S(n.buttonColors.secondary, t),
                        text: n.buttonColors.text
                    },
                    confettiColors: n.confettiColors.map(e => S(a(e), t).toHexString())
                }
            }
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return o
                },
                setHotspotOverride: function() {
                    return s
                },
                clearHotspotOverride: function() {
                    return i
                }
            });
            var r = n("913144"),
                a = n("599110"),
                l = n("49111");

            function o(e) {
                a.default.track(l.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), r.default.wait(() => {
                    r.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function s(e, t) {
                r.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function i(e) {
                r.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var r = n("446674"),
                a = n("913144"),
                l = n("197881"),
                o = n("492397");
            let s = new Set,
                i = {};
            class u extends r.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (s = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (i = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && i[e];
                    return !(o.CONFERENCE_MODE_ENABLED || l.ProcessArgs.isDisallowPopupsSet()) && (n || !s.has(e))
                }
                hasHiddenHotspot(e) {
                    return s.has(e)
                }
                getHotspotOverride(e) {
                    return i[e]
                }
                getState() {
                    return {
                        hiddenHotspots: s,
                        hotspotOverrides: i
                    }
                }
            }
            u.displayName = "HotspotStore", u.persistKey = "hotspots", u.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var c = new u(a.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    s = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (s.has(t)) return !1;
                    s.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: n
                    } = e;
                    i[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == i[t]) return !1;
                    delete i[t]
                }
            })
        },
        139321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HotspotStore: function() {
                    return l.default
                }
            });
            var r = n("533613");
            n.es(r, t);
            var a = n("597517");
            n.es(a, t);
            var l = n("269596")
        },
        894742: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007");
            var r = n("37983"),
                a = n("884691"),
                l = n("516555"),
                o = n("812204"),
                s = n("685665"),
                i = n("642906"),
                u = n("85336"),
                c = n("385179"),
                d = n("292215"),
                f = n("158184"),
                C = n("337978"),
                E = n("49111"),
                p = n("843455"),
                S = n("322859");
            let h = (e, t, n) => (0, r.jsx)(C.CollectiblesPaymentModalHeader, {
                step: n,
                onClose: () => t(!1)
            });

            function I(e) {
                let {
                    onClose: t,
                    onComplete: n,
                    transitionState: C,
                    loadId: I,
                    skuId: m,
                    analyticsLocations: _,
                    returnRef: v
                } = e, {
                    analyticsLocations: g,
                    AnalyticsLocationProvider: x
                } = (0, s.default)([..._, o.default.COLLECTIBLES_PAYMENT_MODAL]), T = a.useRef(new l.Environment), [A, N] = a.useState(null), O = [d.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, d.ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG, ...d.SHARED_STEP_CONFIGS, d.REVIEW_STEP_CONFIG, {
                    key: u.Step.CONFIRM,
                    renderStep: e => (0, r.jsx)(f.CollectiblesPaymentModalConfirmStep, {
                        ...e,
                        confettiCanvas: A,
                        analyticsLocations: g
                    }),
                    options: {
                        bodyClassName: S.modalOverrideBody,
                        sliderBodyClassName: S.modalOverrideSliderBody
                    }
                }];
                return (0, r.jsxs)(x, {
                    children: [(0, r.jsx)(l.ConfettiCanvas, {
                        ref: N,
                        className: S.confettiCanvas,
                        environment: T.current
                    }), (0, r.jsx)(i.PaymentContextProvider, {
                        stepConfigs: O,
                        applicationId: E.COLLECTIBLES_APPLICATION_ID,
                        skuIDs: [m],
                        activeSubscription: null,
                        purchaseType: p.PurchaseTypes.ONE_TIME,
                        children: (0, r.jsx)(c.PaymentModal, {
                            onClose: t,
                            onComplete: n,
                            loadId: I,
                            applicationId: E.COLLECTIBLES_APPLICATION_ID,
                            skuId: m,
                            initialPlanId: null,
                            analyticsLocations: g,
                            transitionState: C,
                            renderHeader: h,
                            returnRef: v,
                            hideShadow: !0
                        })
                    })]
                })
            }
        },
        158184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CollectiblesPaymentModalConfirmStep: function() {
                    return f
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("627445"),
                l = n.n(a),
                o = n("65597"),
                s = n("853987"),
                i = n("658756"),
                u = n("642906"),
                c = n("650484"),
                d = n("367767");

            function f(e) {
                let {
                    handleClose: t,
                    confettiCanvas: n,
                    analyticsLocations: a
                } = e, {
                    skusById: f,
                    selectedSkuId: C,
                    application: E
                } = (0, u.usePaymentContext)(), {
                    product: p,
                    category: S
                } = (0, o.useStateFromStoresObject)([s.default], () => ({
                    product: s.default.getProduct(C),
                    category: s.default.getCategoryForProduct(C)
                }));
                l(null != C, "Expected selectedSkuId"), l(null != E, "Expected application");
                let h = f[C];
                return (l(null != h, "Expected sku"), null == S || null == p) ? null : (0, r.jsxs)(c.PaymentPortalBody, {
                    children: [(0, r.jsx)(d.default, {}), (0, r.jsx)(i.CollectiblesCollectedModalInner, {
                        product: p,
                        category: S,
                        onClose: t,
                        confettiCanvas: n,
                        analyticsLocations: a
                    })]
                })
            }
        },
        337978: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CollectiblesPaymentModalHeader: function() {
                    return c
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("834897"),
                o = n("85336"),
                s = n("425480"),
                i = n("504898"),
                u = n("551290");
            let c = e => {
                let {
                    step: t,
                    onClose: n
                } = e, c = (0, l.default)(s.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
                return t === o.Step.CONFIRM || t === o.Step.BENEFITS ? (0, r.jsx)("div", {}) : (0, r.jsxs)("div", {
                    className: i.headerContainer,
                    children: [!c && (0, r.jsx)("div", {
                        className: i.headerImageContainer,
                        "aria-hidden": "true",
                        "data-accessibility": "desaturate",
                        children: (0, r.jsx)("img", {
                            src: u,
                            alt: "",
                            className: i.headerImage
                        })
                    }), (0, r.jsx)(a.ModalCloseButton, {
                        withCircleBackground: !0,
                        className: i.closeButton,
                        onClick: n
                    })]
                })
            }
        },
        7127: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PaymentModalConfirmStep: function() {
                    return f
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("627445"),
                l = n.n(a),
                o = n("77078"),
                s = n("642906"),
                i = n("367767"),
                u = n("650484"),
                c = n("782340"),
                d = n("966425");

            function f(e) {
                let {
                    handleClose: t
                } = e, {
                    skusById: n,
                    selectedSkuId: a,
                    application: f
                } = (0, s.usePaymentContext)();
                l(null != a, "Expected selectedSkuId"), l(null != f, "Expected application");
                let C = n[a];
                l(null != C, "Expected sku");
                let E = c.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
                    applicationName: f.name,
                    itemName: C.name
                });
                return (0, r.jsxs)(u.PaymentPortalBody, {
                    children: [(0, r.jsx)(i.default, {}), (0, r.jsxs)("div", {
                        className: d.confirmation,
                        children: [(0, r.jsx)(o.Heading, {
                            variant: "heading-xxl/bold",
                            className: d.confirmationHeader,
                            children: "Success!"
                        }), (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: E
                        }), (0, r.jsx)("div", {
                            className: d.divider
                        }), (0, r.jsx)(o.Button, {
                            onClick: t,
                            children: c.default.Messages.CLOSE
                        })]
                    })]
                })
            }
        },
        292215: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG: function() {
                    return f
                },
                ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG: function() {
                    return C
                },
                REVIEW_STEP_CONFIG: function() {
                    return S
                },
                ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function() {
                    return h
                },
                SHARED_STEP_CONFIGS: function() {
                    return I
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("357957"),
                l = n("85336"),
                o = n("262683"),
                s = n("946359"),
                i = n("724269"),
                u = n("7127"),
                c = n("99836"),
                d = n("217796");
            let f = {
                    key: null,
                    renderStep: e => (0, r.jsx)(d.OneTimePaymentPredicateStep, {
                        ...e
                    })
                },
                C = {
                    key: l.Step.ADD_PAYMENT_STEPS,
                    renderStep: e => (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(o.PaymentModalAddPaymentStep, {
                            ...e,
                            breadcrumbSteps: [l.Step.ADD_PAYMENT_STEPS, l.Step.REVIEW, l.Step.CONFIRM],
                            onReturn: () => {
                                let t = a.default.paymentSources;
                                0 === Object.keys(t).length ? e.handleClose() : e.handleStepChange(l.Step.REVIEW, {
                                    trackedFromStep: l.Step.ADD_PAYMENT_STEPS
                                })
                            }
                        })
                    }),
                    options: {
                        renderHeader: !0
                    }
                },
                E = {
                    key: l.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                    renderStep: () => (0, r.jsx)(i.default, {})
                },
                p = {
                    key: l.Step.AWAITING_AUTHENTICATION,
                    renderStep: () => (0, r.jsx)(s.default, {})
                },
                S = {
                    key: l.Step.REVIEW,
                    renderStep: e => (0, r.jsx)(c.PaymentModalReviewStep, {
                        ...e
                    })
                },
                h = {
                    key: l.Step.CONFIRM,
                    renderStep: e => (0, r.jsx)(u.PaymentModalConfirmStep, {
                        ...e
                    })
                },
                I = [E, p]
        },
        217796: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                OneTimePaymentPredicateStep: function() {
                    return u
                }
            }), n("222007");
            var r = n("37983"),
                a = n("884691"),
                l = n("245187"),
                o = n("642906"),
                s = n("85336"),
                i = n("628738");

            function u(e) {
                let {
                    handleStepChange: t,
                    handleClose: n
                } = e, {
                    blockedPayments: u,
                    hasFetchedSkus: c,
                    paymentSources: d,
                    hasFetchedPaymentSources: f,
                    application: C
                } = (0, o.usePaymentContext)(), [E, p] = a.useState(!0);
                return (a.useEffect(() => {
                    let e = null != C;
                    c && f && e && p(!1)
                }, [c, f, C]), a.useEffect(() => {
                    !E && !u && (0 === Object.keys(d).length ? t(s.Step.ADD_PAYMENT_STEPS) : t(s.Step.REVIEW))
                }, [E, u, t, d]), E) ? (0, r.jsx)(i.default, {}) : u ? (0, r.jsx)(l.BlockedPaymentsContentModal, {
                    onClose: n
                }) : null
            }
        },
        601095: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var r = n("37983"),
                a = n("884691"),
                l = n("414456"),
                o = n.n(l),
                s = n("859498"),
                i = n("635471"),
                u = n("825054"),
                c = n("93902"),
                d = e => {
                    let {
                        profileEffectId: t,
                        isHovering: n,
                        forCollectedModal: l = !1,
                        isPurchased: d
                    } = e, f = l ? 250 : .1, [C, E] = a.useState(!0);
                    return (a.useEffect(() => {
                        if (!0 !== l) E(!1);
                        else {
                            let e = setTimeout(() => {
                                E(!1)
                            }, f);
                            return () => {
                                clearTimeout(e)
                            }
                        }
                    }, [f, l]), null != t) ? (0, r.jsxs)("div", {
                        className: o(u.previewContainer, {
                            [u.previewContainerAnimation]: l
                        }),
                        children: [(0, r.jsx)("img", {
                            src: c,
                            alt: " ",
                            className: l ? u.previewForCollected : u.preview,
                            "aria-hidden": !0
                        }), !C && (0, r.jsx)("div", {
                            className: d ? u.purchasedEffect : void 0,
                            children: (0, r.jsx)(i.default, {
                                profileEffectID: t,
                                useThumbnail: !0,
                                autoPlay: l,
                                restartMethod: s.RestartMethod.FromStart,
                                resetOnHover: !0,
                                isHovering: n,
                                introDelay: f,
                                useOpacityOnHover: !1
                            })
                        })]
                    }) : null
                }
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("469563"),
                l = n("926001"),
                o = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, o.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: l,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, l.SlashBoxIcon)
        },
        95689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("469563"),
                l = n("578478"),
                o = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, o.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: l,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: a
                        })
                    })
                }, l.ImageIcon)
        },
        811305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Sizes: function() {
                    return I
                },
                default: function() {
                    return v
                }
            }), n("424973"), n("222007");
            var r = n("37983"),
                a = n("884691"),
                l = n("414456"),
                o = n.n(l),
                s = n("627445"),
                i = n.n(s),
                u = n("77078"),
                c = n("506885"),
                d = n("981601"),
                f = n("766274"),
                C = n("697218"),
                E = n("368121"),
                p = n("523096"),
                S = n("587974"),
                h = n("494101");
            let I = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function m(e, t) {
                let n = e instanceof f.default ? e : null != e ? e.user : null;
                return null != n ? n.id : "user-".concat(t)
            }
            class _ extends a.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: n = this.defaultRenderUser,
                        size: a,
                        extraDetail: l
                    } = this.props, o = [], s = e.length === t ? e.length : t - 1, i = this.renderMoreUsers(s), u = 0;
                    for (; u < s && u < e.length;) {
                        var c;
                        let t = null == i && null == l && u === e.length - 1,
                            s = n(e[u], t, u);
                        o.push(t ? (0, r.jsx)("div", {
                            className: h.avatarContainer,
                            children: s
                        }, m(null !== (c = e[u]) && void 0 !== c ? c : null, u)) : (0, r.jsx)(S.default, {
                            className: h.avatarContainerMasked,
                            height: a,
                            width: a,
                            mask: S.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: s
                        }, m(e[u], u))), u++
                    }
                    return null != l ? o.push(l) : null != i && o.push(i), o
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: l,
                        renderMoreUsers: o,
                        users: s
                    } = this.props, i = Math.min(e, s.length);
                    if (!l) {
                        if (null != n) {
                            if (n >= t) return (0, r.jsx)(a.Fragment, {
                                children: o("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > s.length) {
                                let e = n - s.length;
                                return (0, r.jsx)(a.Fragment, {
                                    children: o("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (i < s.length) {
                            let e = Math.min(s.length - i, 99);
                            return (0, r.jsx)(a.Fragment, {
                                children: o("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, r.jsx)(E.default, {
                        foreground: h.foreground,
                        className: h.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: n,
                        guildId: a,
                        showUserPopout: l,
                        useFallbackUserForPopout: s
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, E = n.find(e => null != e && e.id === f), p = s && null == C.default.getUser(f);
                    return (0, r.jsx)(u.Popout, {
                        position: "right",
                        preload: null == E ? void 0 : () => (0, c.default)(E.id, E.getAvatarURL(a, 80), {
                            guildId: a
                        }),
                        shouldShow: !0 === l && null != f,
                        fixed: !0,
                        renderPopout: e => (i(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, r.jsx)(d.default, {
                            ...this.props,
                            user: p && null != E ? E : void 0,
                            ...e,
                            userId: f,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: n => (0, r.jsxs)("div", {
                            className: o(e, h.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.SIZE_24;
                                switch (e) {
                                    case I.SIZE_16:
                                        return h.size16;
                                    case I.SIZE_24:
                                        return h.size24;
                                    case I.SIZE_32:
                                        return h.size32;
                                    case I.SIZE_56:
                                        return h.size56;
                                    default:
                                        return h.size24
                                }
                            }(t)),
                            ref: this._ref,
                            ...n,
                            children: [this.renderIcon(), this.renderUsers()]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        popoutUserId: null
                    }, this._ref = a.createRef(), this.defaultRenderUser = (e, t, n) => {
                        let {
                            showUserPopout: a,
                            guildId: l,
                            size: o
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, r.jsx)("div", {
                                className: h.emptyUser
                            });
                            {
                                let e = (null != n ? n : 0) % p.default.DEFAULT_AVATARS.length,
                                    t = p.default.DEFAULT_AVATARS[e];
                                return (0, r.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: h.avatar
                                })
                            }
                        }
                        let s = (0, r.jsx)("img", {
                            src: e.getAvatarURL(l, o),
                            alt: e.username,
                            className: h.avatar
                        }, e.id);
                        return a ? (0, r.jsx)(u.Clickable, {
                            className: h.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: s
                        }, e.id) : s
                    }
                }
            }
            _.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, r.jsx)("div", {
                        className: h.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: I.SIZE_24
            };
            var v = _
        }
    }
]);