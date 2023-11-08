(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["38513"], {
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
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, o.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.786 3.374A.25.25 0 0 0 17.57 5h-3.134a.75.75 0 0 0-.65.378L6.213 18.626A.25.25 0 0 0 6.43 19h3.134a.75.75 0 0 0 .65-.378l7.571-13.248Z",
                        clipRule: "evenodd",
                        className: i
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
        478272: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("77078"),
                o = n("974889"),
                l = n("954016"),
                i = n("49111");

            function s(e) {
                let {
                    channel: t,
                    guildId: s,
                    locationObject: u,
                    openInPopout: d,
                    initialSelectedApplicationId: c,
                    initialSlide: f = l.ActivityShelfSlides.DIRECTORY,
                    enableSelectedTextChannelInvite: p = !1,
                    analyticsLocations: C
                } = e;
                d && (0, o.default)(i.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                let E = d ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT;
                return (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("605455").then(n.bind(n, "605455"));
                    return n => (0, r.jsx)(e, {
                        ...n,
                        channel: t,
                        guildId: s,
                        locationObject: u,
                        initialSlide: f,
                        initialSelectedApplicationId: c,
                        enableSelectedTextChannelInvite: p,
                        analyticsLocations: C
                    })
                }, {
                    modalKey: l.ACTIVITY_SHELF_WEB_MODAL_KEY,
                    contextKey: E
                })
            }
        },
        149022: function(e, t, n) {
            "use strict";

            function r() {
                return {
                    textValue: "",
                    richValue: [{
                        type: "line",
                        children: [{
                            text: ""
                        }]
                    }]
                }
            }

            function a(e) {
                return {
                    textValue: e,
                    richValue: l(e)
                }
            }
            n.r(t), n.d(t, {
                createEmptyState: function() {
                    return r
                },
                createState: function() {
                    return a
                },
                toRichValue: function() {
                    return l
                },
                voidToOptionValue: function() {
                    return i
                }
            }), n("70102");
            let o = Object.freeze([Object.freeze({
                type: "line",
                children: Object.freeze([Object.freeze({
                    text: ""
                })])
            })]);

            function l(e) {
                return "" !== e ? e.split("\n").map(e => ({
                    type: "line",
                    children: [{
                        text: e
                    }]
                })) : o
            }

            function i(e) {
                switch (e.type) {
                    case "userMention":
                        return {
                            type: "userMention", userId: e.userId
                        };
                    case "channelMention":
                        return {
                            type: "channelMention", channelId: e.channelId
                        };
                    case "staticRouteLink":
                        return {
                            type: "staticRouteLink", channelId: e.channelId
                        };
                    case "soundboard":
                        return {
                            type: "soundboard", soundId: e.soundId
                        };
                    case "roleMention":
                        return {
                            type: "roleMention", roleId: e.roleId
                        };
                    case "textMention":
                        return {
                            type: "textMention", text: e.name
                        };
                    case "emoji":
                        return {
                            type: "emoji", name: e.emoji.name, surrogate: e.emoji.surrogate
                        };
                    case "customEmoji":
                        return {
                            type: "customEmoji", emojiId: e.emoji.emojiId, name: e.emoji.name, animated: e.emoji.animated
                        };
                    case "testInlineVoid":
                        throw Error("Unable to convert test types")
                }
                return null
            }
        },
        923702: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007");
            var r = n("37983"),
                a = n("884691"),
                o = n("516555"),
                l = n("172858"),
                i = function(e) {
                    let {
                        confettiTarget: t,
                        confettiCanvas: n,
                        sprites: i,
                        colors: s
                    } = e, [u, d] = a.useState(null), c = (0, o.useConfettiCannon)(n, u), [f, p] = a.useState(!1);
                    return a.useEffect(() => {
                        let e = Array(10).fill(0);
                        return null != t && c.isReady && !f && (e = e.map((n, r) => setTimeout(() => {
                            var n;
                            r === e.length - 1 && p(!0), c.createMultipleConfetti((n = t.getBoundingClientRect(), {
                                ...l.COMMON_CONFETTI_BASE_CONFIG,
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
                    }, [c, t, f]), (0, r.jsx)(o.SpriteCanvas, {
                        ref: d,
                        sprites: null != i ? i : l.COMMON_CONFETTI_SPRITES,
                        colors: null != s ? s : l.COMMON_CONFETTI_COLORS,
                        spriteWidth: l.COMMON_CONFETTI_MAX_SPRITE_SIZE,
                        spriteHeight: l.COMMON_CONFETTI_MAX_SPRITE_SIZE
                    })
                }
        },
        716120: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("414456"),
                o = n.n(a),
                l = n("65597"),
                i = n("854588"),
                s = n("206230"),
                u = n("284679"),
                d = n("491232"),
                c = n("408381"),
                f = n("268779"),
                p = e => {
                    let {
                        asset: t,
                        size: n = c.MAX_CONTENT_WIDTH,
                        className: a,
                        style: p,
                        children: C
                    } = e, E = (0, l.default)([s.default], () => s.default.saturation);
                    return (0, r.jsx)("div", {
                        className: o(f.banner, a),
                        style: (() => {
                            if (null == t) return p;
                            let e = (0, d.getCollectiblesAssetURL)(t, {
                                size: n,
                                format: "jpg"
                            });
                            if (1 === E) return {
                                ...p,
                                backgroundImage: "url(".concat(e, ")"),
                                backgroundSize: "cover"
                            };
                            let r = (0, u.hexOpacityToRgba)(i.default.unsafe_rawColors.BLACK_500, 1 - E);
                            return {
                                ...p,
                                backgroundImage: "linear-gradient(".concat(r, ", ").concat(r, "), url(").concat(e, ")"),
                                backgroundBlendMode: "saturation",
                                backgroundSize: "cover"
                            }
                        })(),
                        children: C
                    })
                }
        },
        658756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CollectiblesCollectedModalInner: function() {
                    return L
                },
                default: function() {
                    return b
                }
            }), n("222007");
            var r = n("37983"),
                a = n("884691"),
                o = n("414456"),
                l = n.n(o),
                i = n("516555"),
                s = n("627445"),
                u = n.n(s),
                d = n("65597"),
                c = n("77078"),
                f = n("54239"),
                p = n("206230"),
                C = n("812204"),
                E = n("685665"),
                h = n("606292"),
                m = n("688318"),
                _ = n("38766"),
                S = n("601095"),
                I = n("493390"),
                T = n("697218"),
                v = n("730297"),
                g = n("806410"),
                A = n("923702"),
                O = n("716120"),
                x = n("408381"),
                y = n("57940"),
                N = n("782340"),
                M = n("99242"),
                R = n("53708");
            let L = e => {
                var t, n;
                let {
                    product: o,
                    onClose: l,
                    confettiTarget: i,
                    confettiCanvas: s,
                    category: L,
                    analyticsLocations: b
                } = e, {
                    confettiColors: D,
                    confettiSprites: P,
                    backgroundColors: F,
                    buttonColors: j
                } = (0, y.default)(L), H = (0, d.default)([T.default], () => {
                    let e = T.default.getCurrentUser();
                    return u(null != e, "User cannot be undefined"), e
                }), k = (0, d.default)([p.default], () => p.default.useReducedMotion), B = null !== (t = o.items.find(v.isAvatarDecorationRecord)) && void 0 !== t ? t : null, w = null !== (n = o.items.find(g.isProfileEffectRecord)) && void 0 !== n ? n : null, {
                    avatarDecorationSrc: U
                } = (0, m.default)({
                    user: H,
                    avatarDecorationOverride: B,
                    size: (0, h.getDecorationSizeForAvatarSize)(c.AvatarSizes.SIZE_120)
                }), V = a.useRef(null), {
                    analyticsLocations: G,
                    AnalyticsLocationProvider: z
                } = (0, E.default)([...b, C.default.COLLECTIBLES_COLLECTED_MODAL]), Z = (0, _.default)({
                    analyticsLocations: G
                });
                return null == B && null == w ? null : (0, r.jsxs)(z, {
                    children: [(0, r.jsxs)("div", {
                        className: M.modalInner,
                        ref: V,
                        style: null != F ? {
                            background: (0, x.getBackgroundGradient)(F)
                        } : void 0,
                        children: [(0, r.jsxs)("div", {
                            className: M.bannerContainer,
                            children: [(0, r.jsx)(O.default, {
                                asset: L.banner,
                                size: 440,
                                className: M.decorationBanner
                            }), null != B && (0, r.jsx)(c.Avatar, {
                                size: c.AvatarSizes.SIZE_120,
                                src: R,
                                avatarDecoration: U,
                                className: M.avatarDecoration,
                                "aria-label": o.name
                            }), null != w && (0, r.jsx)("div", {
                                className: M.profileEffectShopPreview,
                                children: (0, r.jsx)(S.default, {
                                    forCollectedModal: !0,
                                    profileEffectId: null == w ? void 0 : w.id
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: M.collectedInfoContainer,
                            children: [(0, r.jsxs)("div", {
                                className: M.collectedTextContainer,
                                children: [(0, r.jsx)(c.Heading, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    children: N.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
                                        itemName: o.name
                                    })
                                }), (0, r.jsx)(c.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: null != w ? N.default.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : N.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
                                })]
                            }), (0, r.jsx)(c.Button, {
                                onClick: () => {
                                    l(), (0, f.popLayer)(), Z(), null != B ? (0, h.openAvatarDecorationModal)({
                                        initialSelectedDecoration: o.items.find(v.isAvatarDecorationRecord),
                                        analyticsLocations: G
                                    }) : null != w && (0, I.openProfileEffectModal)({
                                        analyticsLocations: G,
                                        initialSelectedEffectID: null == w ? void 0 : w.id
                                    })
                                },
                                style: null != j ? {
                                    background: (0, x.getBackgroundGradient)(j, 90)
                                } : void 0,
                                children: N.default.Messages.COLLECTIBLES_USE_NOW
                            })]
                        }), (0, r.jsx)(c.ModalCloseButton, {
                            onClick: l,
                            className: M.modalCloseButton,
                            withCircleBackground: !0
                        })]
                    }), !k && (0, r.jsx)(A.default, {
                        confettiTarget: null != i ? i : V.current,
                        confettiCanvas: s,
                        sprites: P,
                        colors: D
                    })]
                })
            };
            var b = e => {
                let {
                    transitionState: t,
                    product: n,
                    category: o,
                    onClose: s,
                    analyticsLocations: u
                } = e, d = a.useRef(new i.Environment), [f, p] = a.useState(null);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(i.ConfettiCanvas, {
                        ref: p,
                        className: M.confettiCanvas,
                        environment: d.current
                    }), (0, r.jsx)(c.ModalRoot, {
                        transitionState: t,
                        size: c.ModalSize.DYNAMIC,
                        children: (0, r.jsx)(c.ModalContent, {
                            className: l(M.modalInner, M.modalContentOverrides),
                            children: (0, r.jsx)(L, {
                                product: n,
                                category: o,
                                onClose: s,
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
                    return o
                }
            });
            let r = 1060,
                a = e => 3.8 * e,
                o = function(e) {
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
                    return _
                }
            }), n("222007");
            var r = n("656280"),
                a = n.n(r),
                o = n("635058"),
                l = n("65597"),
                i = n("669491"),
                s = n("206230"),
                u = n("388491"),
                d = n("172858");
            let c = a(i.default.unsafe_rawColors.WHITE_500.resolve({
                    saturation: 1
                }).hex()),
                f = a(i.default.unsafe_rawColors.BLACK_500.resolve({
                    saturation: 1
                }).hex()),
                p = (e, t) => {
                    let n = e.toRgb(),
                        r = t.toRgb(),
                        [o, l, i] = (0, u.getValueInColorGradientByPercentage)([n.r, n.g, n.b], [r.r, r.g, r.b], 50);
                    return a({
                        r: o,
                        g: l,
                        b: i
                    })
                },
                C = (e, t) => {
                    let n = a(e),
                        r = a(t),
                        o = p(n, r);
                    return {
                        primary: n,
                        secondary: r,
                        border: o.setAlpha(.4)
                    }
                },
                E = (e, t) => {
                    let n = a(e),
                        r = a(t),
                        o = p(n, r);
                    return {
                        primary: n,
                        secondary: r,
                        text: a(o.isLight() ? f : c)
                    }
                },
                h = (e, t) => {
                    let {
                        h: n,
                        s: r,
                        l: o
                    } = e.toHsl();
                    return a({
                        h: n,
                        s: r * t,
                        l: o
                    })
                },
                m = {
                    [o.CollectiblesCategorySkuId.FANTASY]: {
                        backgroundColors: C("#146144", "#021A0E"),
                        buttonColors: E("#028737", "#00694A"),
                        confettiSprites: [n("655029"), n("290216")],
                        confettiColors: ["#EFA7F7", "#B646C1", "#56B3B3", "#1A8199", "#7160AF", "#AEC7FF"]
                    },
                    [o.CollectiblesCategorySkuId.ANIME]: {
                        backgroundColors: C("#4B79B0", "#0F0E3A"),
                        buttonColors: E("#8A45C1", "#136897"),
                        confettiSprites: [n("597704"), n("714293")],
                        confettiColors: ["#2C9BD9", "#E46A80", "#FFE500", "#BBA8D5", "#3EDDD3", "#E2B761"]
                    },
                    [o.CollectiblesCategorySkuId.BREAKFAST]: {
                        backgroundColors: C("#E8B26B", "#7A3A00"),
                        buttonColors: E("#FFC355", "#FF9537"),
                        confettiSprites: [n("286642"), n("94646")],
                        confettiColors: ["#DD9C98", "#FFC037", "#FF6B00", "#FDE081", "#DD923E", "#FFEECC"]
                    },
                    [o.CollectiblesCategorySkuId.DISXCORE]: {
                        backgroundColors: C("#732565", "#111D40"),
                        buttonColors: E(i.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.resolve({
                            saturation: 1
                        }).hex(), i.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.resolve({
                            saturation: 1
                        }).hex()),
                        confettiSprites: d.COMMON_CONFETTI_SPRITES.filter((e, t) => 1 !== t && 7 !== t),
                        confettiColors: ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"]
                    },
                    [o.CollectiblesCategorySkuId.HALLOWEEN]: {
                        backgroundColors: C("#5280DC", "#060F25"),
                        buttonColors: E("#496BDB", "#3E41B5"),
                        confettiSprites: [n("638538"), n("861485")],
                        confettiColors: ["#EE5619", "#FDBE44", "#42D612", "#DC0DDE", "#8A0AE5"]
                    },
                    [o.CollectiblesCategorySkuId.FALL]: {
                        backgroundColors: C("#FFC267", "#6C1A00"),
                        buttonColors: E("#F5A142", "#E4760E"),
                        confettiSprites: [n("740683"), n("489847")],
                        confettiColors: ["#FF7138", "#92360C", "#F6A334", "#FFC586", "#FF8A00"]
                    }
                };
            var _ = e => {
                let t = (0, l.default)([s.default], () => s.default.saturation);
                if (null == e) return {};
                let n = m[e.skuId];
                return (null == n ? void 0 : n.backgroundColors) == null || 1 === t ? null != n ? n : {} : {
                    ...n,
                    backgroundColors: {
                        primary: h(n.backgroundColors.primary, t),
                        secondary: h(n.backgroundColors.secondary, t),
                        border: h(n.backgroundColors.border, t)
                    },
                    buttonColors: {
                        primary: h(n.buttonColors.primary, t),
                        secondary: h(n.buttonColors.secondary, t),
                        text: n.buttonColors.text
                    },
                    confettiColors: n.confettiColors.map(e => h(a(e), t).toHexString())
                }
            }
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return l
                },
                setHotspotOverride: function() {
                    return i
                },
                clearHotspotOverride: function() {
                    return s
                }
            });
            var r = n("913144"),
                a = n("599110"),
                o = n("49111");

            function l(e) {
                a.default.track(o.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), r.default.wait(() => {
                    r.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function i(e, t) {
                r.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function s(e) {
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
                    return d
                }
            }), n("222007");
            var r = n("446674"),
                a = n("913144"),
                o = n("197881"),
                l = n("492397");
            let i = new Set,
                s = {};
            class u extends r.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (i = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (s = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && s[e];
                    return !(l.CONFERENCE_MODE_ENABLED || o.ProcessArgs.isDisallowPopupsSet()) && (n || !i.has(e))
                }
                hasHiddenHotspot(e) {
                    return i.has(e)
                }
                getHotspotOverride(e) {
                    return s[e]
                }
                getState() {
                    return {
                        hiddenHotspots: i,
                        hotspotOverrides: s
                    }
                }
            }
            u.displayName = "HotspotStore", u.persistKey = "hotspots", u.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var d = new u(a.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    i = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (i.has(t)) return !1;
                    i.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: n
                    } = e;
                    s[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == s[t]) return !1;
                    delete s[t]
                }
            })
        },
        139321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HotspotStore: function() {
                    return o.default
                }
            });
            var r = n("533613");
            n.es(r, t);
            var a = n("597517");
            n.es(a, t);
            var o = n("269596")
        },
        894742: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var r = n("37983"),
                a = n("884691"),
                o = n("516555"),
                l = n("812204"),
                i = n("685665"),
                s = n("642906"),
                u = n("85336"),
                d = n("385179"),
                c = n("292215"),
                f = n("158184"),
                p = n("337978"),
                C = n("49111"),
                E = n("843455"),
                h = n("322859");
            let m = (e, t, n) => (0, r.jsx)(p.CollectiblesPaymentModalHeader, {
                step: n,
                onClose: () => t(!1)
            });

            function _(e) {
                let {
                    onClose: t,
                    onComplete: n,
                    transitionState: p,
                    loadId: _,
                    skuId: S,
                    analyticsLocations: I,
                    returnRef: T
                } = e, {
                    analyticsLocations: v,
                    AnalyticsLocationProvider: g
                } = (0, i.default)([...I, l.default.COLLECTIBLES_PAYMENT_MODAL]), A = a.useRef(new o.Environment), [O, x] = a.useState(null), y = [c.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, c.ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG, ...c.SHARED_STEP_CONFIGS, c.REVIEW_STEP_CONFIG, {
                    key: u.Step.CONFIRM,
                    renderStep: e => (0, r.jsx)(f.CollectiblesPaymentModalConfirmStep, {
                        ...e,
                        confettiCanvas: O,
                        analyticsLocations: v
                    }),
                    options: {
                        bodyClassName: h.modalOverrideBody,
                        sliderBodyClassName: h.modalOverrideSliderBody
                    }
                }];
                return (0, r.jsxs)(g, {
                    children: [(0, r.jsx)(o.ConfettiCanvas, {
                        ref: x,
                        className: h.confettiCanvas,
                        environment: A.current
                    }), (0, r.jsx)(s.PaymentContextProvider, {
                        stepConfigs: y,
                        applicationId: C.COLLECTIBLES_APPLICATION_ID,
                        skuIDs: [S],
                        activeSubscription: null,
                        purchaseType: E.PurchaseTypes.ONE_TIME,
                        children: (0, r.jsx)(d.PaymentModal, {
                            onClose: t,
                            onComplete: n,
                            loadId: _,
                            applicationId: C.COLLECTIBLES_APPLICATION_ID,
                            skuId: S,
                            initialPlanId: null,
                            analyticsLocations: v,
                            transitionState: p,
                            renderHeader: m,
                            returnRef: T,
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
                o = n.n(a),
                l = n("65597"),
                i = n("853987"),
                s = n("658756"),
                u = n("642906"),
                d = n("650484"),
                c = n("367767");

            function f(e) {
                let {
                    handleClose: t,
                    confettiCanvas: n,
                    analyticsLocations: a
                } = e, {
                    skusById: f,
                    selectedSkuId: p,
                    application: C
                } = (0, u.usePaymentContext)(), {
                    product: E,
                    category: h
                } = (0, l.useStateFromStoresObject)([i.default], () => ({
                    product: i.default.getProduct(p),
                    category: i.default.getCategoryForProduct(p)
                }));
                o(null != p, "Expected selectedSkuId"), o(null != C, "Expected application");
                let m = f[p];
                return (o(null != m, "Expected sku"), null == h || null == E) ? null : (0, r.jsxs)(d.PaymentPortalBody, {
                    children: [(0, r.jsx)(c.default, {}), (0, r.jsx)(s.CollectiblesCollectedModalInner, {
                        product: E,
                        category: h,
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
                    return d
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("77078"),
                o = n("834897"),
                l = n("85336"),
                i = n("425480"),
                s = n("504898"),
                u = n("551290");
            let d = e => {
                let {
                    step: t,
                    onClose: n
                } = e, d = (0, o.default)(i.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
                return t === l.Step.CONFIRM || t === l.Step.BENEFITS ? (0, r.jsx)("div", {}) : (0, r.jsxs)("div", {
                    className: s.headerContainer,
                    children: [!d && (0, r.jsx)("div", {
                        className: s.headerImageContainer,
                        "aria-hidden": "true",
                        "data-accessibility": "desaturate",
                        children: (0, r.jsx)("img", {
                            src: u,
                            alt: "",
                            className: s.headerImage
                        })
                    }), (0, r.jsx)(a.ModalCloseButton, {
                        withCircleBackground: !0,
                        className: s.closeButton,
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
                o = n.n(a),
                l = n("77078"),
                i = n("642906"),
                s = n("367767"),
                u = n("650484"),
                d = n("782340"),
                c = n("966425");

            function f(e) {
                let {
                    handleClose: t
                } = e, {
                    skusById: n,
                    selectedSkuId: a,
                    application: f
                } = (0, i.usePaymentContext)();
                o(null != a, "Expected selectedSkuId"), o(null != f, "Expected application");
                let p = n[a];
                o(null != p, "Expected sku");
                let C = d.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
                    applicationName: f.name,
                    itemName: p.name
                });
                return (0, r.jsxs)(u.PaymentPortalBody, {
                    children: [(0, r.jsx)(s.default, {}), (0, r.jsxs)("div", {
                        className: c.confirmation,
                        children: [(0, r.jsx)(l.Heading, {
                            variant: "heading-xxl/bold",
                            className: c.confirmationHeader,
                            children: "Success!"
                        }), (0, r.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: C
                        }), (0, r.jsx)("div", {
                            className: c.divider
                        }), (0, r.jsx)(l.Button, {
                            onClick: t,
                            children: d.default.Messages.CLOSE
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
                    return p
                },
                REVIEW_STEP_CONFIG: function() {
                    return h
                },
                ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function() {
                    return m
                },
                SHARED_STEP_CONFIGS: function() {
                    return _
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("357957"),
                o = n("85336"),
                l = n("262683"),
                i = n("946359"),
                s = n("724269"),
                u = n("7127"),
                d = n("99836"),
                c = n("217796");
            let f = {
                    key: null,
                    renderStep: e => (0, r.jsx)(c.OneTimePaymentPredicateStep, {
                        ...e
                    })
                },
                p = {
                    key: o.Step.ADD_PAYMENT_STEPS,
                    renderStep: e => (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(l.PaymentModalAddPaymentStep, {
                            ...e,
                            breadcrumbSteps: [o.Step.ADD_PAYMENT_STEPS, o.Step.REVIEW, o.Step.CONFIRM],
                            onReturn: () => {
                                let t = a.default.paymentSources;
                                0 === Object.keys(t).length ? e.handleClose() : e.handleStepChange(o.Step.REVIEW, {
                                    trackedFromStep: o.Step.ADD_PAYMENT_STEPS
                                })
                            }
                        })
                    }),
                    options: {
                        renderHeader: !0
                    }
                },
                C = {
                    key: o.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                    renderStep: () => (0, r.jsx)(s.default, {})
                },
                E = {
                    key: o.Step.AWAITING_AUTHENTICATION,
                    renderStep: () => (0, r.jsx)(i.default, {})
                },
                h = {
                    key: o.Step.REVIEW,
                    renderStep: e => (0, r.jsx)(d.PaymentModalReviewStep, {
                        ...e
                    })
                },
                m = {
                    key: o.Step.CONFIRM,
                    renderStep: e => (0, r.jsx)(u.PaymentModalConfirmStep, {
                        ...e
                    })
                },
                _ = [C, E]
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
                o = n("245187"),
                l = n("642906"),
                i = n("85336"),
                s = n("628738");

            function u(e) {
                let {
                    handleStepChange: t,
                    handleClose: n
                } = e, {
                    blockedPayments: u,
                    hasFetchedSkus: d,
                    paymentSources: c,
                    hasFetchedPaymentSources: f,
                    application: p
                } = (0, l.usePaymentContext)(), [C, E] = a.useState(!0);
                return (a.useEffect(() => {
                    let e = null != p;
                    d && f && e && E(!1)
                }, [d, f, p]), a.useEffect(() => {
                    !C && !u && (0 === Object.keys(c).length ? t(i.Step.ADD_PAYMENT_STEPS) : t(i.Step.REVIEW))
                }, [C, u, t, c]), C) ? (0, r.jsx)(s.default, {}) : u ? (0, r.jsx)(o.BlockedPaymentsContentModal, {
                    onClose: n
                }) : null
            }
        },
        53253: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsSeasonalGiftingActive: function() {
                    return c
                },
                default: function() {
                    return f
                }
            }), n("222007");
            var r = n("884691"),
                a = n("866227"),
                o = n.n(a),
                l = n("862337"),
                i = n("296892");
            let s = new Date("2023-01-01T07:59:59.000Z"),
                u = o(s),
                d = (0, i.default)({
                    id: "2022-12_seasonal_gifting",
                    label: "Seasonal Gifting",
                    kind: "user",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function c() {
                let [e, t] = r.useState(() => u.isAfter(Date.now()));
                return r.useEffect(() => {
                    let n = new l.Timeout,
                        r = () => {
                            let e = u.diff(Date.now(), "millisecond");
                            null == n || n.start(e, () => {
                                u.isBefore(Date.now()) ? t(!1) : r()
                            })
                        };
                    return e && r(), () => n.stop()
                }), e
            }
            var f = d
        },
        166960: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("862205");
            let a = (0, r.createExperiment)({
                kind: "user",
                id: "2023-05_referral_trials_birthday_moment",
                label: "Referral Trials Birthday Moment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Users will see the birthday moment referral trial UX",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var o = a
        },
        1607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("862205");
            let a = (0, r.createExperiment)({
                kind: "user",
                id: "2023-02_referral_trials",
                label: "Referral Trials",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Nitro users can send a Nitro trial offer to another user.",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var o = a
        },
        601095: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var r = n("37983"),
                a = n("884691"),
                o = n("414456"),
                l = n.n(o),
                i = n("859498"),
                s = n("635471"),
                u = n("825054"),
                d = n("93902"),
                c = e => {
                    let {
                        profileEffectId: t,
                        isHovering: n,
                        forCollectedModal: o = !1,
                        isPurchased: c
                    } = e, f = o ? 250 : .1, [p, C] = a.useState(!0);
                    return (a.useEffect(() => {
                        if (!0 !== o) C(!1);
                        else {
                            let e = setTimeout(() => {
                                C(!1)
                            }, f);
                            return () => {
                                clearTimeout(e)
                            }
                        }
                    }, [f, o]), null != t) ? (0, r.jsxs)("div", {
                        className: l(u.previewContainer, {
                            [u.previewContainerAnimation]: o
                        }),
                        children: [(0, r.jsx)("img", {
                            src: d,
                            alt: " ",
                            className: o ? u.previewForCollected : u.preview,
                            "aria-hidden": !0
                        }), !p && (0, r.jsx)("div", {
                            className: c ? u.purchasedEffect : void 0,
                            children: (0, r.jsx)(s.default, {
                                profileEffectID: t,
                                useThumbnail: !0,
                                autoPlay: o,
                                restartMethod: i.RestartMethod.FromStart,
                                resetOnHover: !0,
                                isHovering: n,
                                introDelay: f,
                                useOpacityOnHover: !1
                            })
                        })]
                    }) : null
                }
        },
        967241: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openThreadSidebarForViewing: function() {
                    return v
                },
                openThreadSidebarForCreating: function() {
                    return g
                },
                closeThreadSidebar: function() {
                    return A
                },
                closeAndClearThreadSidebar: function() {
                    return O
                }
            });
            var r = n("627445"),
                a = n.n(r),
                o = n("917351"),
                l = n.n(o),
                i = n("913144"),
                s = n("295426"),
                u = n("244201"),
                d = n("716241"),
                c = n("565298"),
                f = n("393414"),
                p = n("144491"),
                C = n("845579"),
                E = n("474643"),
                h = n("18494"),
                m = n("800762"),
                _ = n("659500"),
                S = n("648564"),
                I = n("49111"),
                T = n("724210");

            function v(e, t, n) {
                u.MainWindowDispatch.dispatch(I.ComponentActions.POPOUT_CLOSE);
                let r = !l.isEmpty(m.default.getVoiceStatesForChannel(e.id));
                if (t || !C.UseThreadSidebar.getSetting() || __OVERLAY__ || r) {
                    i.default.dispatch({
                        type: "SIDEBAR_CLOSE",
                        baseChannelId: e.parent_id
                    }), null != n ? (0, p.transitionToThread)(e, n) : (0, p.transitionToChannel)(e.id);
                    return
                }
                a(null != e.parent_id, "all threads must have parents");
                let o = h.default.getChannelId();
                e.parent_id !== o && !(0, T.isGuildHomeChannel)(o) && (0, p.transitionToChannel)(e.parent_id), (0, f.transitionTo)(I.Routes.CHANNEL_THREAD_VIEW((0, c.getGuildIdForGenericRedirect)(e), (0, T.isGuildHomeChannel)(o) ? T.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? S.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
                    _.ComponentDispatch.dispatch(I.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: e.id
                    })
                }, 0)
            }

            function g(e, t, n) {
                a(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), a(!__OVERLAY__, "Cannot create threads in the overlay."), (0, d.trackWithMetadata)(I.AnalyticEvents.THREAD_CREATION_STARTED, {
                    location: n,
                    channel_id: e.id,
                    guild_id: e.guild_id
                }), u.MainWindowDispatch.dispatch(I.ComponentActions.POPOUT_CLOSE), h.default.getChannelId() !== e.id && (0, p.transitionToChannel)(e.id);
                let r = E.default.getDraft(e.id, E.DraftType.FirstThreadMessage);
                if ("" === r) {
                    let t = E.default.getDraft(e.id, E.DraftType.ChannelMessage);
                    s.default.saveDraft(e.id, "", E.DraftType.ChannelMessage), s.default.saveDraft(e.id, t, E.DraftType.FirstThreadMessage)
                }
                setTimeout(() => {
                    i.default.dispatch({
                        type: "SIDEBAR_CREATE_THREAD",
                        parentChannelId: e.id,
                        parentMessageId: null == t ? void 0 : t.id,
                        location: n
                    })
                }, 0)
            }

            function A(e, t) {
                (0, f.transitionTo)(I.Routes.CHANNEL(e, (0, T.isGuildHomeChannel)(t) ? T.StaticChannelRoute.GUILD_HOME : t)), i.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: t
                })
            }

            function O(e) {
                i.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: e
                }), i.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: E.DraftType.FirstThreadMessage
                }), i.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: E.DraftType.ThreadSettings
                })
            }
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("469563"),
                o = n("926001"),
                l = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: o,
                        ...i
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: o,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, o.SlashBoxIcon)
        },
        346955: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("469563"),
                o = n("509317"),
                l = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: o,
                        ...i
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: a,
                            className: o,
                            d: "M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7Z"
                        })
                    })
                }, o.FolderIcon)
        },
        95689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("469563"),
                o = n("578478"),
                l = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: o,
                        ...i
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: o,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: a
                        })
                    })
                }, o.ImageIcon)
        },
        659186: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatLayerContainer: function() {
                    return i
                },
                ChatLayerProvider: function() {
                    return s
                },
                default: function() {
                    return u
                }
            });
            var r = n("228256");
            let {
                Layer: a,
                LayerContainer: o,
                LayerProvider: l
            } = (0, r.createLayer)("Chat"), i = o, s = l;
            var u = a
        },
        811305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Sizes: function() {
                    return _
                },
                default: function() {
                    return T
                }
            }), n("424973"), n("222007");
            var r = n("37983"),
                a = n("884691"),
                o = n("414456"),
                l = n.n(o),
                i = n("627445"),
                s = n.n(i),
                u = n("77078"),
                d = n("506885"),
                c = n("981601"),
                f = n("766274"),
                p = n("697218"),
                C = n("368121"),
                E = n("523096"),
                h = n("587974"),
                m = n("494101");
            let _ = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function S(e, t) {
                let n = e instanceof f.default ? e : null != e ? e.user : null;
                return null != n ? n.id : "user-".concat(t)
            }
            class I extends a.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: n = this.defaultRenderUser,
                        size: a,
                        extraDetail: o
                    } = this.props, l = [], i = e.length === t ? e.length : t - 1, s = this.renderMoreUsers(i), u = 0;
                    for (; u < i && u < e.length;) {
                        var d;
                        let t = null == s && null == o && u === e.length - 1,
                            i = n(e[u], t, u);
                        l.push(t ? (0, r.jsx)("div", {
                            className: m.avatarContainer,
                            children: i
                        }, S(null !== (d = e[u]) && void 0 !== d ? d : null, u)) : (0, r.jsx)(h.default, {
                            className: m.avatarContainerMasked,
                            height: a,
                            width: a,
                            mask: h.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: i
                        }, S(e[u], u))), u++
                    }
                    return null != o ? l.push(o) : null != s && l.push(s), l
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: o,
                        renderMoreUsers: l,
                        users: i
                    } = this.props, s = Math.min(e, i.length);
                    if (!o) {
                        if (null != n) {
                            if (n >= t) return (0, r.jsx)(a.Fragment, {
                                children: l("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > i.length) {
                                let e = n - i.length;
                                return (0, r.jsx)(a.Fragment, {
                                    children: l("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (s < i.length) {
                            let e = Math.min(i.length - s, 99);
                            return (0, r.jsx)(a.Fragment, {
                                children: l("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, r.jsx)(C.default, {
                        foreground: m.foreground,
                        className: m.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: n,
                        guildId: a,
                        showUserPopout: o,
                        useFallbackUserForPopout: i
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, C = n.find(e => null != e && e.id === f), E = i && null == p.default.getUser(f);
                    return (0, r.jsx)(u.Popout, {
                        position: "right",
                        preload: null == C ? void 0 : () => (0, d.default)(C.id, C.getAvatarURL(a, 80), {
                            guildId: a
                        }),
                        shouldShow: !0 === o && null != f,
                        fixed: !0,
                        renderPopout: e => (s(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, r.jsx)(c.default, {
                            ...this.props,
                            user: E && null != C ? C : void 0,
                            ...e,
                            userId: f,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: n => (0, r.jsxs)("div", {
                            className: l(e, m.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.SIZE_24;
                                switch (e) {
                                    case _.SIZE_16:
                                        return m.size16;
                                    case _.SIZE_24:
                                        return m.size24;
                                    case _.SIZE_32:
                                        return m.size32;
                                    case _.SIZE_56:
                                        return m.size56;
                                    default:
                                        return m.size24
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
                            guildId: o,
                            size: l
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, r.jsx)("div", {
                                className: m.emptyUser
                            });
                            {
                                let e = (null != n ? n : 0) % E.default.DEFAULT_AVATARS.length,
                                    t = E.default.DEFAULT_AVATARS[e];
                                return (0, r.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: m.avatar
                                })
                            }
                        }
                        let i = (0, r.jsx)("img", {
                            src: e.getAvatarURL(o, l),
                            alt: e.username,
                            className: m.avatar
                        }, e.id);
                        return a ? (0, r.jsx)(u.Clickable, {
                            className: m.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: i
                        }, e.id) : i
                    }
                }
            }
            I.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, r.jsx)("div", {
                        className: m.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: _.SIZE_24
            };
            var T = I
        }
    }
]);