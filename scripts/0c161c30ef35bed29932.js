(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["19252"], {
        489847: function(e, t, o) {
            "use strict";
            e.exports = o.p + "ab3468632852f3725893.png"
        },
        330825: function(e, t, o) {
            "use strict";
            e.exports = o.p + "79903b7cc64eb6d55aa8.png"
        },
        165057: function(e, t, o) {
            "use strict";
            e.exports = o.p + "50eb2aa99e75c1b8630a.png"
        },
        94646: function(e, t, o) {
            "use strict";
            e.exports = o.p + "c5c556a5e9be016ffb2d.png"
        },
        286642: function(e, t, o) {
            "use strict";
            e.exports = o.p + "a3edb1330403965aa3f6.png"
        },
        655029: function(e, t, o) {
            "use strict";
            e.exports = o.p + "6fac2c0e5ed90d06b3b9.png"
        },
        740683: function(e, t, o) {
            "use strict";
            e.exports = o.p + "7b9383fd24920a3a95b7.png"
        },
        714293: function(e, t, o) {
            "use strict";
            e.exports = o.p + "295744c4b4e7cb95b539.png"
        },
        861485: function(e, t, o) {
            "use strict";
            e.exports = o.p + "16abeb1745235d8aea66.png"
        },
        638538: function(e, t, o) {
            "use strict";
            e.exports = o.p + "ac20c9a7b69e25e9d680.png"
        },
        125221: function(e, t, o) {
            "use strict";
            e.exports = o.p + "8ffd6f59392e09ba0fe4.png"
        },
        770704: function(e, t, o) {
            "use strict";
            e.exports = o.p + "81aef01431a5e1293160.png"
        },
        597704: function(e, t, o) {
            "use strict";
            e.exports = o.p + "7bb17dc88ff31be285a8.png"
        },
        290216: function(e, t, o) {
            "use strict";
            e.exports = o.p + "1616ba0a324e68a4fff7.png"
        },
        923702: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                default: function() {
                    return s
                }
            }), o("222007");
            var r = o("37983"),
                n = o("884691"),
                a = o("516555"),
                l = o("172858"),
                s = function(e) {
                    let {
                        confettiTarget: t,
                        confettiCanvas: o,
                        sprites: s,
                        colors: i
                    } = e, [u, c] = n.useState(null), d = (0, a.useConfettiCannon)(o, u), [f, C] = n.useState(!1);
                    return n.useEffect(() => {
                        let e = Array(10).fill(0);
                        return null != t && d.isReady && !f && (e = e.map((o, r) => setTimeout(() => {
                            var o;
                            r === e.length - 1 && C(!0), d.createMultipleConfetti((o = t.getBoundingClientRect(), {
                                ...l.COMMON_CONFETTI_BASE_CONFIG,
                                position: {
                                    type: "static-random",
                                    minValue: {
                                        x: o.x,
                                        y: o.y
                                    },
                                    maxValue: {
                                        x: o.x + o.width,
                                        y: o.y + o.height / 2
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
                    }, [d, t, f]), (0, r.jsx)(a.SpriteCanvas, {
                        ref: c,
                        sprites: null != s ? s : l.COMMON_CONFETTI_SPRITES,
                        colors: null != i ? i : l.COMMON_CONFETTI_COLORS,
                        spriteWidth: l.COMMON_CONFETTI_MAX_SPRITE_SIZE,
                        spriteHeight: l.COMMON_CONFETTI_MAX_SPRITE_SIZE
                    })
                }
        },
        716120: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                default: function() {
                    return C
                }
            });
            var r = o("37983");
            o("884691");
            var n = o("414456"),
                a = o.n(n),
                l = o("65597"),
                s = o("854588"),
                i = o("206230"),
                u = o("284679"),
                c = o("491232"),
                d = o("408381"),
                f = o("268779"),
                C = e => {
                    let {
                        asset: t,
                        size: o = d.MAX_CONTENT_WIDTH,
                        className: n,
                        style: C,
                        children: E
                    } = e, g = (0, l.default)([i.default], () => i.default.saturation);
                    return (0, r.jsx)("div", {
                        className: a(f.banner, n),
                        style: (() => {
                            if (null == t) return C;
                            let e = (0, c.getCollectiblesAssetURL)(t, {
                                size: o,
                                format: "jpg"
                            });
                            if (1 === g) return {
                                ...C,
                                backgroundImage: "url(".concat(e, ")"),
                                backgroundSize: "cover"
                            };
                            let r = (0, u.hexOpacityToRgba)(s.default.unsafe_rawColors.BLACK_500, 1 - g);
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
        658756: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                CollectiblesCollectedModalInner: function() {
                    return M
                },
                default: function() {
                    return B
                }
            }), o("222007");
            var r = o("37983"),
                n = o("884691"),
                a = o("516555"),
                l = o("627445"),
                s = o.n(l),
                i = o("65597"),
                u = o("77078"),
                c = o("54239"),
                d = o("206230"),
                f = o("812204"),
                C = o("685665"),
                E = o("606292"),
                g = o("688318"),
                p = o("38766"),
                F = o("601095"),
                b = o("493390"),
                S = o("697218"),
                v = o("730297"),
                x = o("806410"),
                _ = o("923702"),
                A = o("716120"),
                I = o("408381"),
                m = o("57940"),
                T = o("172858"),
                O = o("782340"),
                N = o("99242"),
                h = o("53708");
            let M = e => {
                var t, o;
                let {
                    product: a,
                    onClose: l,
                    confettiTarget: M,
                    confettiCanvas: B,
                    category: y,
                    analyticsLocations: D
                } = e, {
                    confettiColors: L,
                    confettiSprites: k,
                    backgroundColors: R,
                    buttonColors: j
                } = (0, m.default)(y), w = null != j ? {
                    background: (0, I.getBackgroundGradient)(j, 90),
                    color: j.text.toHslString()
                } : void 0, P = null != R ? {
                    background: (0, I.getBackgroundGradient)(R, 135)
                } : void 0, H = (0, i.default)([S.default], () => {
                    let e = S.default.getCurrentUser();
                    return s(null != e, "User cannot be undefined"), e
                }), z = (0, i.default)([d.default], () => d.default.useReducedMotion), U = null !== (t = a.items.find(v.isAvatarDecorationRecord)) && void 0 !== t ? t : null, G = null !== (o = a.items.find(x.isProfileEffectRecord)) && void 0 !== o ? o : null, {
                    avatarDecorationSrc: W
                } = (0, g.default)({
                    user: H,
                    avatarDecorationOverride: U,
                    size: (0, E.getDecorationSizeForAvatarSize)(u.AvatarSizes.SIZE_120)
                }), V = n.useRef(null), {
                    analyticsLocations: X,
                    AnalyticsLocationProvider: Z
                } = (0, C.default)([...D, f.default.COLLECTIBLES_COLLECTED_MODAL]), K = T.COMMON_CONFETTI_SPRITES.filter((e, t) => 1 !== t && 7 !== t), Y = (0, p.default)({
                    analyticsLocations: X
                });
                return null == U && null == G ? null : (0, r.jsxs)(Z, {
                    children: [(0, r.jsxs)("div", {
                        className: N.modalInner,
                        ref: V,
                        style: P,
                        children: [(0, r.jsxs)("div", {
                            className: N.bannerContainer,
                            children: [null != y && (0, r.jsx)(A.default, {
                                asset: y.banner,
                                size: 440,
                                className: N.decorationBanner
                            }), null != U && (0, r.jsx)(u.Avatar, {
                                size: u.AvatarSizes.SIZE_120,
                                src: h,
                                avatarDecoration: W,
                                className: N.avatarDecoration,
                                "aria-label": a.name
                            }), null != G && (0, r.jsx)("div", {
                                className: N.profileEffectShopPreview,
                                children: (0, r.jsx)(F.default, {
                                    forCollectedModal: !0,
                                    profileEffectId: null == G ? void 0 : G.id
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: N.collectedInfoContainer,
                            children: [(0, r.jsxs)("div", {
                                className: N.collectedTextContainer,
                                children: [(0, r.jsx)(u.Heading, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    children: O.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
                                        itemName: a.name
                                    })
                                }), (0, r.jsx)(u.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: null != G ? O.default.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : O.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
                                })]
                            }), (0, r.jsx)(u.Button, {
                                onClick: () => {
                                    l(), (0, c.popLayer)(), Y(), null != U ? (0, E.openAvatarDecorationModal)({
                                        initialSelectedDecoration: a.items.find(v.isAvatarDecorationRecord),
                                        analyticsLocations: X
                                    }) : null != G && (0, b.openProfileEffectModal)({
                                        analyticsLocations: X,
                                        initialSelectedEffectID: null == G ? void 0 : G.id
                                    })
                                },
                                style: w,
                                children: O.default.Messages.COLLECTIBLES_USE_NOW
                            })]
                        }), (0, r.jsx)(u.ModalCloseButton, {
                            onClick: l,
                            className: N.modalCloseButton,
                            withCircleBackground: !0
                        })]
                    }), !z && (0, r.jsx)(_.default, {
                        confettiTarget: null != M ? M : V.current,
                        confettiCanvas: B,
                        sprites: null != k ? k : K,
                        colors: null != L ? L : ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"]
                    })]
                })
            };
            var B = e => {
                let {
                    transitionState: t,
                    product: o,
                    category: l,
                    onClose: s,
                    analyticsLocations: i
                } = e, c = n.useRef(new a.Environment), [d, f] = n.useState(null);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(a.ConfettiCanvas, {
                        ref: f,
                        className: N.confettiCanvas,
                        environment: c.current
                    }), (0, r.jsx)(u.ModalRoot, {
                        hideShadow: !0,
                        transitionState: t,
                        size: u.ModalSize.DYNAMIC,
                        className: N.modalRoot,
                        children: (0, r.jsx)(u.ModalContent, {
                            className: N.modalContent,
                            children: (0, r.jsx)(M, {
                                product: o,
                                category: l,
                                onClose: s,
                                confettiCanvas: d,
                                analyticsLocations: i
                            })
                        })
                    })]
                })
            }
        },
        408381: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                MAX_CONTENT_WIDTH: function() {
                    return r
                },
                getLogoSize: function() {
                    return n
                },
                getBackgroundGradient: function() {
                    return a
                }
            });
            let r = 1060,
                n = e => 3.8 * e,
                a = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
                        {
                            primary: o,
                            secondary: r
                        } = e;
                    return "linear-gradient(".concat(t, "deg, ").concat(o.toHslString(), ", ").concat(r.toHslString(), ")")
                }
        },
        57940: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                default: function() {
                    return b
                }
            }), o("222007");
            var r = o("656280"),
                n = o.n(r),
                a = o("635058"),
                l = o("65597"),
                s = o("669491"),
                i = o("206230"),
                u = o("388491"),
                c = o("172858");
            let d = n(s.default.unsafe_rawColors.WHITE_500.resolve({
                    saturation: 1
                }).hex()),
                f = n(s.default.unsafe_rawColors.BLACK_500.resolve({
                    saturation: 1
                }).hex()),
                C = (e, t) => {
                    let o = e.toRgb(),
                        r = t.toRgb(),
                        [a, l, s] = (0, u.getValueInColorGradientByPercentage)([o.r, o.g, o.b], [r.r, r.g, r.b], 50);
                    return n({
                        r: a,
                        g: l,
                        b: s
                    })
                },
                E = (e, t) => {
                    let o = n(e),
                        r = n(t),
                        a = C(o, r);
                    return {
                        primary: o,
                        secondary: r,
                        border: a.setAlpha(.4)
                    }
                },
                g = (e, t) => {
                    let o = n(e),
                        r = n(t),
                        a = C(o, r);
                    return {
                        primary: o,
                        secondary: r,
                        text: n(a.isLight() ? f : d)
                    }
                },
                p = (e, t) => {
                    let {
                        h: o,
                        s: r,
                        l: a
                    } = e.toHsl();
                    return n({
                        h: o,
                        s: r * t,
                        l: a
                    })
                },
                F = {
                    [a.CollectiblesCategorySkuId.FANTASY]: {
                        backgroundColors: E("#146144", "#021A0E"),
                        buttonColors: g("#028737", "#00694A"),
                        confettiSprites: [o("655029"), o("290216")],
                        confettiColors: ["#EFA7F7", "#B646C1", "#56B3B3", "#1A8199", "#7160AF", "#AEC7FF"]
                    },
                    [a.CollectiblesCategorySkuId.ANIME]: {
                        backgroundColors: E("#4B79B0", "#0F0E3A"),
                        buttonColors: g("#8A45C1", "#136897"),
                        confettiSprites: [o("597704"), o("714293")],
                        confettiColors: ["#2C9BD9", "#E46A80", "#FFE500", "#BBA8D5", "#3EDDD3", "#E2B761"]
                    },
                    [a.CollectiblesCategorySkuId.BREAKFAST]: {
                        backgroundColors: E("#E8B26B", "#7A3A00"),
                        buttonColors: g("#FFC355", "#FF9537"),
                        confettiSprites: [o("286642"), o("94646")],
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
                        confettiSprites: [o("638538"), o("861485")],
                        confettiColors: ["#EE5619", "#FDBE44", "#42D612", "#DC0DDE", "#8A0AE5"]
                    },
                    [a.CollectiblesCategorySkuId.FALL]: {
                        backgroundColors: E("#FFC267", "#6C1A00"),
                        buttonColors: g("#F5A142", "#E4760E"),
                        confettiSprites: [o("740683"), o("489847")],
                        confettiColors: ["#FF7138", "#92360C", "#F6A334", "#FFC586", "#FF8A00"]
                    },
                    [a.CollectiblesCategorySkuId.WINTER]: {
                        backgroundColors: E("#467FFF", "#154ECF"),
                        buttonColors: g("#44C7FF", "#009DFF"),
                        confettiSprites: [o("770704"), o("165057")],
                        confettiColors: ["#3DC3FF", "#297AFF", "#FD8BFF", "#FF3BF5"]
                    },
                    [a.CollectiblesCategorySkuId.MONSTERS]: {
                        backgroundColors: E("#00475E", "#002B39"),
                        buttonColors: g("#00E6B2", "#009B7C"),
                        confettiSprites: [o("330825"), o("125221")],
                        confettiColors: ["#00C49A", "#F8B531", "#F24E7E", "#64CC6F", "#BB5CF0"]
                    }
                };
            var b = e => {
                let t = (0, l.default)([i.default], () => i.default.saturation);
                if (null == e) return {};
                let o = F[e.skuId];
                return (null == o ? void 0 : o.backgroundColors) == null || 1 === t ? null != o ? o : {} : {
                    ...o,
                    backgroundColors: {
                        primary: p(o.backgroundColors.primary, t),
                        secondary: p(o.backgroundColors.secondary, t),
                        border: p(o.backgroundColors.border, t)
                    },
                    buttonColors: {
                        primary: p(o.buttonColors.primary, t),
                        secondary: p(o.buttonColors.secondary, t),
                        text: o.buttonColors.text
                    },
                    confettiColors: o.confettiColors.map(e => p(n(e), t).toHexString())
                }
            }
        },
        601095: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                default: function() {
                    return d
                }
            }), o("222007");
            var r = o("37983"),
                n = o("884691"),
                a = o("414456"),
                l = o.n(a),
                s = o("859498"),
                i = o("635471"),
                u = o("825054"),
                c = o("93902"),
                d = e => {
                    let {
                        profileEffectId: t,
                        isHovering: o,
                        forCollectedModal: a = !1,
                        isPurchased: d
                    } = e, f = a ? 250 : .1, [C, E] = n.useState(!0);
                    return (n.useEffect(() => {
                        if (!0 !== a) E(!1);
                        else {
                            let e = setTimeout(() => {
                                E(!1)
                            }, f);
                            return () => {
                                clearTimeout(e)
                            }
                        }
                    }, [f, a]), null != t) ? (0, r.jsxs)("div", {
                        className: l(u.previewContainer, {
                            [u.previewContainerAnimation]: a
                        }),
                        children: [(0, r.jsx)("img", {
                            src: c,
                            alt: " ",
                            className: a ? u.previewForCollected : u.preview,
                            "aria-hidden": !0
                        }), !C && (0, r.jsx)("div", {
                            className: d ? u.purchasedEffect : void 0,
                            children: (0, r.jsx)(i.default, {
                                profileEffectID: t,
                                useThumbnail: !0,
                                autoPlay: a,
                                restartMethod: s.RestartMethod.FromStart,
                                resetOnHover: !0,
                                isHovering: o,
                                introDelay: f,
                                useOpacityOnHover: !1
                            })
                        })]
                    }) : null
                }
        }
    }
]);