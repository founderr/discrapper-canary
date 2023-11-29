(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["19252"], {
        489847: function(e, t, r) {
            "use strict";
            e.exports = r.p + "ab3468632852f3725893.png"
        },
        165057: function(e, t, r) {
            "use strict";
            e.exports = r.p + "50eb2aa99e75c1b8630a.png"
        },
        94646: function(e, t, r) {
            "use strict";
            e.exports = r.p + "c5c556a5e9be016ffb2d.png"
        },
        286642: function(e, t, r) {
            "use strict";
            e.exports = r.p + "a3edb1330403965aa3f6.png"
        },
        655029: function(e, t, r) {
            "use strict";
            e.exports = r.p + "6fac2c0e5ed90d06b3b9.png"
        },
        740683: function(e, t, r) {
            "use strict";
            e.exports = r.p + "7b9383fd24920a3a95b7.png"
        },
        714293: function(e, t, r) {
            "use strict";
            e.exports = r.p + "295744c4b4e7cb95b539.png"
        },
        861485: function(e, t, r) {
            "use strict";
            e.exports = r.p + "16abeb1745235d8aea66.png"
        },
        638538: function(e, t, r) {
            "use strict";
            e.exports = r.p + "ac20c9a7b69e25e9d680.png"
        },
        770704: function(e, t, r) {
            "use strict";
            e.exports = r.p + "81aef01431a5e1293160.png"
        },
        597704: function(e, t, r) {
            "use strict";
            e.exports = r.p + "7bb17dc88ff31be285a8.png"
        },
        290216: function(e, t, r) {
            "use strict";
            e.exports = r.p + "1616ba0a324e68a4fff7.png"
        },
        923702: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return s
                }
            }), r("222007");
            var n = r("37983"),
                o = r("884691"),
                a = r("516555"),
                l = r("172858"),
                s = function(e) {
                    let {
                        confettiTarget: t,
                        confettiCanvas: r,
                        sprites: s,
                        colors: i
                    } = e, [u, c] = o.useState(null), d = (0, a.useConfettiCannon)(r, u), [f, C] = o.useState(!1);
                    return o.useEffect(() => {
                        let e = Array(10).fill(0);
                        return null != t && d.isReady && !f && (e = e.map((r, n) => setTimeout(() => {
                            var r;
                            n === e.length - 1 && C(!0), d.createMultipleConfetti((r = t.getBoundingClientRect(), {
                                ...l.COMMON_CONFETTI_BASE_CONFIG,
                                position: {
                                    type: "static-random",
                                    minValue: {
                                        x: r.x,
                                        y: r.y
                                    },
                                    maxValue: {
                                        x: r.x + r.width,
                                        y: r.y + r.height / 2
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
                        }, 100 * n))), () => {
                            for (let t of e) clearTimeout(t)
                        }
                    }, [d, t, f]), (0, n.jsx)(a.SpriteCanvas, {
                        ref: c,
                        sprites: null != s ? s : l.COMMON_CONFETTI_SPRITES,
                        colors: null != i ? i : l.COMMON_CONFETTI_COLORS,
                        spriteWidth: l.COMMON_CONFETTI_MAX_SPRITE_SIZE,
                        spriteHeight: l.COMMON_CONFETTI_MAX_SPRITE_SIZE
                    })
                }
        },
        716120: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return C
                }
            });
            var n = r("37983");
            r("884691");
            var o = r("414456"),
                a = r.n(o),
                l = r("65597"),
                s = r("854588"),
                i = r("206230"),
                u = r("284679"),
                c = r("491232"),
                d = r("408381"),
                f = r("268779"),
                C = e => {
                    let {
                        asset: t,
                        size: r = d.MAX_CONTENT_WIDTH,
                        className: o,
                        style: C,
                        children: E
                    } = e, g = (0, l.default)([i.default], () => i.default.saturation);
                    return (0, n.jsx)("div", {
                        className: a(f.banner, o),
                        style: (() => {
                            if (null == t) return C;
                            let e = (0, c.getCollectiblesAssetURL)(t, {
                                size: r,
                                format: "jpg"
                            });
                            if (1 === g) return {
                                ...C,
                                backgroundImage: "url(".concat(e, ")"),
                                backgroundSize: "cover"
                            };
                            let n = (0, u.hexOpacityToRgba)(s.default.unsafe_rawColors.BLACK_500, 1 - g);
                            return {
                                ...C,
                                backgroundImage: "linear-gradient(".concat(n, ", ").concat(n, "), url(").concat(e, ")"),
                                backgroundBlendMode: "saturation",
                                backgroundSize: "cover"
                            }
                        })(),
                        children: E
                    })
                }
        },
        658756: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                CollectiblesCollectedModalInner: function() {
                    return D
                },
                default: function() {
                    return L
                }
            }), r("222007");
            var n = r("37983"),
                o = r("884691"),
                a = r("414456"),
                l = r.n(a),
                s = r("516555"),
                i = r("627445"),
                u = r.n(i),
                c = r("65597"),
                d = r("77078"),
                f = r("54239"),
                C = r("206230"),
                E = r("812204"),
                g = r("685665"),
                p = r("606292"),
                F = r("688318"),
                b = r("38766"),
                v = r("601095"),
                S = r("493390"),
                _ = r("697218"),
                x = r("730297"),
                A = r("806410"),
                I = r("923702"),
                m = r("716120"),
                T = r("408381"),
                O = r("57940"),
                N = r("172858"),
                h = r("782340"),
                M = r("99242"),
                y = r("53708");
            let D = e => {
                var t, r;
                let {
                    product: a,
                    onClose: l,
                    confettiTarget: s,
                    confettiCanvas: i,
                    category: D,
                    analyticsLocations: L
                } = e, {
                    confettiColors: B,
                    confettiSprites: k,
                    backgroundColors: R,
                    buttonColors: j
                } = (0, O.default)(D), w = (0, c.default)([_.default], () => {
                    let e = _.default.getCurrentUser();
                    return u(null != e, "User cannot be undefined"), e
                }), P = (0, c.default)([C.default], () => C.default.useReducedMotion), H = null !== (t = a.items.find(x.isAvatarDecorationRecord)) && void 0 !== t ? t : null, z = null !== (r = a.items.find(A.isProfileEffectRecord)) && void 0 !== r ? r : null, {
                    avatarDecorationSrc: U
                } = (0, F.default)({
                    user: w,
                    avatarDecorationOverride: H,
                    size: (0, p.getDecorationSizeForAvatarSize)(d.AvatarSizes.SIZE_120)
                }), G = o.useRef(null), {
                    analyticsLocations: W,
                    AnalyticsLocationProvider: V
                } = (0, g.default)([...L, E.default.COLLECTIBLES_COLLECTED_MODAL]), X = N.COMMON_CONFETTI_SPRITES.filter((e, t) => 1 !== t && 7 !== t), Z = (0, b.default)({
                    analyticsLocations: W
                });
                return null == H && null == z ? null : (0, n.jsxs)(V, {
                    children: [(0, n.jsxs)("div", {
                        className: M.modalInner,
                        ref: G,
                        style: null != R ? {
                            background: (0, T.getBackgroundGradient)(R)
                        } : void 0,
                        children: [(0, n.jsxs)("div", {
                            className: M.bannerContainer,
                            children: [null != D && (0, n.jsx)(m.default, {
                                asset: D.banner,
                                size: 440,
                                className: M.decorationBanner
                            }), null != H && (0, n.jsx)(d.Avatar, {
                                size: d.AvatarSizes.SIZE_120,
                                src: y,
                                avatarDecoration: U,
                                className: M.avatarDecoration,
                                "aria-label": a.name
                            }), null != z && (0, n.jsx)("div", {
                                className: M.profileEffectShopPreview,
                                children: (0, n.jsx)(v.default, {
                                    forCollectedModal: !0,
                                    profileEffectId: null == z ? void 0 : z.id
                                })
                            })]
                        }), (0, n.jsxs)("div", {
                            className: M.collectedInfoContainer,
                            children: [(0, n.jsxs)("div", {
                                className: M.collectedTextContainer,
                                children: [(0, n.jsx)(d.Heading, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    children: h.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
                                        itemName: a.name
                                    })
                                }), (0, n.jsx)(d.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: null != z ? h.default.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : h.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
                                })]
                            }), (0, n.jsx)(d.Button, {
                                onClick: () => {
                                    l(), (0, f.popLayer)(), Z(), null != H ? (0, p.openAvatarDecorationModal)({
                                        initialSelectedDecoration: a.items.find(x.isAvatarDecorationRecord),
                                        analyticsLocations: W
                                    }) : null != z && (0, S.openProfileEffectModal)({
                                        analyticsLocations: W,
                                        initialSelectedEffectID: null == z ? void 0 : z.id
                                    })
                                },
                                style: null != j ? {
                                    background: (0, T.getBackgroundGradient)(j, 90)
                                } : void 0,
                                children: h.default.Messages.COLLECTIBLES_USE_NOW
                            })]
                        }), (0, n.jsx)(d.ModalCloseButton, {
                            onClick: l,
                            className: M.modalCloseButton,
                            withCircleBackground: !0
                        })]
                    }), !P && (0, n.jsx)(I.default, {
                        confettiTarget: null != s ? s : G.current,
                        confettiCanvas: i,
                        sprites: null != k ? k : X,
                        colors: null != B ? B : ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"]
                    })]
                })
            };
            var L = e => {
                let {
                    transitionState: t,
                    product: r,
                    category: a,
                    onClose: i,
                    analyticsLocations: u
                } = e, c = o.useRef(new s.Environment), [f, C] = o.useState(null);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(s.ConfettiCanvas, {
                        ref: C,
                        className: M.confettiCanvas,
                        environment: c.current
                    }), (0, n.jsx)(d.ModalRoot, {
                        transitionState: t,
                        size: d.ModalSize.DYNAMIC,
                        children: (0, n.jsx)(d.ModalContent, {
                            className: l(M.modalInner, M.modalContentOverrides),
                            children: (0, n.jsx)(D, {
                                product: r,
                                category: a,
                                onClose: i,
                                confettiCanvas: f,
                                analyticsLocations: u
                            })
                        })
                    })]
                })
            }
        },
        408381: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                MAX_CONTENT_WIDTH: function() {
                    return n
                },
                getLogoSize: function() {
                    return o
                },
                getBackgroundGradient: function() {
                    return a
                }
            });
            let n = 1060,
                o = e => 3.8 * e,
                a = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
                        {
                            primary: r,
                            secondary: n
                        } = e;
                    return "linear-gradient(".concat(t, "deg, ").concat(r.toHslString(), ", ").concat(n.toHslString(), ")")
                }
        },
        57940: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return b
                }
            }), r("222007");
            var n = r("656280"),
                o = r.n(n),
                a = r("635058"),
                l = r("65597"),
                s = r("669491"),
                i = r("206230"),
                u = r("388491"),
                c = r("172858");
            let d = o(s.default.unsafe_rawColors.WHITE_500.resolve({
                    saturation: 1
                }).hex()),
                f = o(s.default.unsafe_rawColors.BLACK_500.resolve({
                    saturation: 1
                }).hex()),
                C = (e, t) => {
                    let r = e.toRgb(),
                        n = t.toRgb(),
                        [a, l, s] = (0, u.getValueInColorGradientByPercentage)([r.r, r.g, r.b], [n.r, n.g, n.b], 50);
                    return o({
                        r: a,
                        g: l,
                        b: s
                    })
                },
                E = (e, t) => {
                    let r = o(e),
                        n = o(t),
                        a = C(r, n);
                    return {
                        primary: r,
                        secondary: n,
                        border: a.setAlpha(.4)
                    }
                },
                g = (e, t) => {
                    let r = o(e),
                        n = o(t),
                        a = C(r, n);
                    return {
                        primary: r,
                        secondary: n,
                        text: o(a.isLight() ? f : d)
                    }
                },
                p = (e, t) => {
                    let {
                        h: r,
                        s: n,
                        l: a
                    } = e.toHsl();
                    return o({
                        h: r,
                        s: n * t,
                        l: a
                    })
                },
                F = {
                    [a.CollectiblesCategorySkuId.FANTASY]: {
                        backgroundColors: E("#146144", "#021A0E"),
                        buttonColors: g("#028737", "#00694A"),
                        confettiSprites: [r("655029"), r("290216")],
                        confettiColors: ["#EFA7F7", "#B646C1", "#56B3B3", "#1A8199", "#7160AF", "#AEC7FF"]
                    },
                    [a.CollectiblesCategorySkuId.ANIME]: {
                        backgroundColors: E("#4B79B0", "#0F0E3A"),
                        buttonColors: g("#8A45C1", "#136897"),
                        confettiSprites: [r("597704"), r("714293")],
                        confettiColors: ["#2C9BD9", "#E46A80", "#FFE500", "#BBA8D5", "#3EDDD3", "#E2B761"]
                    },
                    [a.CollectiblesCategorySkuId.BREAKFAST]: {
                        backgroundColors: E("#E8B26B", "#7A3A00"),
                        buttonColors: g("#FFC355", "#FF9537"),
                        confettiSprites: [r("286642"), r("94646")],
                        confettiColors: ["#DD9C98", "#FFC037", "#FF6B00", "#FDE081", "#DD923E", "#FFEECC"]
                    },
                    [a.CollectiblesCategorySkuId.DISXCORE]: {
                        backgroundColors: E("#732565", "#111D40"),
                        buttonColors: g(s.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.resolve({
                            saturation: 1
                        }).hex(), s.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.resolve({
                            saturation: 1
                        }).hex()),
                        confettiSprites: c.COMMON_CONFETTI_SPRITES.filter((e, t) => 1 !== t && 7 !== t),
                        confettiColors: ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"]
                    },
                    [a.CollectiblesCategorySkuId.HALLOWEEN]: {
                        backgroundColors: E("#5280DC", "#060F25"),
                        buttonColors: g("#496BDB", "#3E41B5"),
                        confettiSprites: [r("638538"), r("861485")],
                        confettiColors: ["#EE5619", "#FDBE44", "#42D612", "#DC0DDE", "#8A0AE5"]
                    },
                    [a.CollectiblesCategorySkuId.FALL]: {
                        backgroundColors: E("#FFC267", "#6C1A00"),
                        buttonColors: g("#F5A142", "#E4760E"),
                        confettiSprites: [r("740683"), r("489847")],
                        confettiColors: ["#FF7138", "#92360C", "#F6A334", "#FFC586", "#FF8A00"]
                    },
                    [a.CollectiblesCategorySkuId.WINTER]: {
                        backgroundColors: E("#467FFF", "#154ECF"),
                        buttonColors: g("#44C7FF", "#009DFF"),
                        confettiSprites: [r("770704"), r("165057")],
                        confettiColors: ["#3DC3FF", "#297AFF", "#FD8BFF", "#FF3BF5"]
                    }
                };
            var b = e => {
                let t = (0, l.default)([i.default], () => i.default.saturation);
                if (null == e) return {};
                let r = F[e.skuId];
                return (null == r ? void 0 : r.backgroundColors) == null || 1 === t ? null != r ? r : {} : {
                    ...r,
                    backgroundColors: {
                        primary: p(r.backgroundColors.primary, t),
                        secondary: p(r.backgroundColors.secondary, t),
                        border: p(r.backgroundColors.border, t)
                    },
                    buttonColors: {
                        primary: p(r.buttonColors.primary, t),
                        secondary: p(r.buttonColors.secondary, t),
                        text: r.buttonColors.text
                    },
                    confettiColors: r.confettiColors.map(e => p(o(e), t).toHexString())
                }
            }
        },
        601095: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return d
                }
            }), r("222007");
            var n = r("37983"),
                o = r("884691"),
                a = r("414456"),
                l = r.n(a),
                s = r("859498"),
                i = r("635471"),
                u = r("825054"),
                c = r("93902"),
                d = e => {
                    let {
                        profileEffectId: t,
                        isHovering: r,
                        forCollectedModal: a = !1,
                        isPurchased: d
                    } = e, f = a ? 250 : .1, [C, E] = o.useState(!0);
                    return (o.useEffect(() => {
                        if (!0 !== a) E(!1);
                        else {
                            let e = setTimeout(() => {
                                E(!1)
                            }, f);
                            return () => {
                                clearTimeout(e)
                            }
                        }
                    }, [f, a]), null != t) ? (0, n.jsxs)("div", {
                        className: l(u.previewContainer, {
                            [u.previewContainerAnimation]: a
                        }),
                        children: [(0, n.jsx)("img", {
                            src: c,
                            alt: " ",
                            className: a ? u.previewForCollected : u.preview,
                            "aria-hidden": !0
                        }), !C && (0, n.jsx)("div", {
                            className: d ? u.purchasedEffect : void 0,
                            children: (0, n.jsx)(i.default, {
                                profileEffectID: t,
                                useThumbnail: !0,
                                autoPlay: a,
                                restartMethod: s.RestartMethod.FromStart,
                                resetOnHover: !0,
                                isHovering: r,
                                introDelay: f,
                                useOpacityOnHover: !1
                            })
                        })]
                    }) : null
                }
        }
    }
]);