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
            var n = o("37983"),
                r = o("884691"),
                a = o("516555"),
                l = o("172858"),
                s = function(e) {
                    let {
                        confettiTarget: t,
                        confettiCanvas: o,
                        sprites: s,
                        colors: i
                    } = e, [u, c] = r.useState(null), d = (0, a.useConfettiCannon)(o, u), [f, C] = r.useState(!1);
                    return r.useEffect(() => {
                        let e = Array(10).fill(0);
                        return null != t && d.isReady && !f && (e = e.map((o, n) => setTimeout(() => {
                            var o;
                            n === e.length - 1 && C(!0), d.createMultipleConfetti((o = t.getBoundingClientRect(), {
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
        716120: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                default: function() {
                    return C
                }
            });
            var n = o("37983");
            o("884691");
            var r = o("414456"),
                a = o.n(r),
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
                        className: r,
                        style: C,
                        children: E
                    } = e, g = (0, l.default)([i.default], () => i.default.saturation);
                    return (0, n.jsx)("div", {
                        className: a(f.banner, r),
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
        658756: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                CollectiblesCollectedModalInner: function() {
                    return L
                },
                default: function() {
                    return y
                }
            }), o("222007");
            var n = o("37983"),
                r = o("884691"),
                a = o("414456"),
                l = o.n(a),
                s = o("516555"),
                i = o("627445"),
                u = o.n(i),
                c = o("65597"),
                d = o("77078"),
                f = o("54239"),
                C = o("206230"),
                E = o("812204"),
                g = o("685665"),
                p = o("606292"),
                F = o("688318"),
                b = o("38766"),
                S = o("601095"),
                T = o("493390"),
                v = o("697218"),
                _ = o("730297"),
                x = o("806410"),
                A = o("923702"),
                I = o("716120"),
                m = o("408381"),
                O = o("57940"),
                N = o("782340"),
                h = o("99242"),
                B = o("53708");
            let L = e => {
                var t, o;
                let {
                    product: a,
                    onClose: s,
                    confettiTarget: i,
                    confettiCanvas: L,
                    category: y,
                    analyticsLocations: k
                } = e, {
                    confettiColors: D,
                    confettiSprites: M,
                    backgroundColors: R,
                    buttonColors: j
                } = (0, O.default)(y), w = null != j ? {
                    background: (0, m.getBackgroundGradient)(j, 90),
                    color: j.text.toHslString()
                } : void 0, P = null != R ? {
                    background: (0, m.getBackgroundGradient)(R, 135)
                } : {
                    backgroundColor: "var(--modal-background)"
                }, H = (0, c.default)([v.default], () => {
                    let e = v.default.getCurrentUser();
                    return u(null != e, "User cannot be undefined"), e
                }), z = (0, c.default)([C.default], () => C.default.useReducedMotion), U = null !== (t = a.items.find(_.isAvatarDecorationRecord)) && void 0 !== t ? t : null, G = null !== (o = a.items.find(x.isProfileEffectRecord)) && void 0 !== o ? o : null, {
                    avatarDecorationSrc: W
                } = (0, F.default)({
                    user: H,
                    avatarDecorationOverride: U,
                    size: (0, p.getDecorationSizeForAvatarSize)(d.AvatarSizes.SIZE_120)
                }), V = r.useRef(null), {
                    analyticsLocations: X,
                    AnalyticsLocationProvider: Z
                } = (0, g.default)([...k, E.default.COLLECTIBLES_COLLECTED_MODAL]), K = (0, b.default)({
                    analyticsLocations: X
                });
                return null == U && null == G ? null : (0, n.jsxs)(Z, {
                    children: [(0, n.jsxs)("div", {
                        className: h.modalInner,
                        ref: V,
                        style: P,
                        children: [(0, n.jsxs)("div", {
                            className: l(h.bannerContainer, {
                                [h.bannerBackgroundFallback]: null == R
                            }),
                            children: [null != y && (0, n.jsx)(I.default, {
                                asset: y.banner,
                                size: (0, m.getAssetSizeByHeight)(440),
                                className: h.decorationBanner
                            }), null != U && (0, n.jsx)(d.Avatar, {
                                size: d.AvatarSizes.SIZE_120,
                                src: B,
                                avatarDecoration: W,
                                className: h.avatarDecoration,
                                "aria-label": a.name
                            }), null != G && (0, n.jsx)("div", {
                                className: h.profileEffectShopPreview,
                                children: (0, n.jsx)(S.default, {
                                    forCollectedModal: !0,
                                    profileEffectId: null == G ? void 0 : G.id
                                })
                            })]
                        }), (0, n.jsxs)("div", {
                            className: l(h.collectedInfoContainer, {
                                [h.default]: null == R
                            }),
                            children: [(0, n.jsxs)("div", {
                                className: h.collectedTextContainer,
                                children: [(0, n.jsx)(d.Heading, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    children: N.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
                                        itemName: a.name
                                    })
                                }), (0, n.jsx)(d.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: null != G ? N.default.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : N.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
                                })]
                            }), (0, n.jsx)(d.Button, {
                                onClick: () => {
                                    s(), (0, f.popLayer)(), K(), null != U ? (0, p.openAvatarDecorationModal)({
                                        initialSelectedDecoration: a.items.find(_.isAvatarDecorationRecord),
                                        analyticsLocations: X
                                    }) : null != G && (0, T.openProfileEffectModal)({
                                        analyticsLocations: X,
                                        initialSelectedEffectId: null == G ? void 0 : G.id
                                    })
                                },
                                style: w,
                                children: N.default.Messages.COLLECTIBLES_USE_NOW
                            })]
                        }), (0, n.jsx)(d.ModalCloseButton, {
                            onClick: s,
                            className: h.modalCloseButton,
                            withCircleBackground: !0
                        })]
                    }), !z && (0, n.jsx)(A.default, {
                        confettiTarget: null != i ? i : V.current,
                        confettiCanvas: L,
                        sprites: null != M ? M : O.DEFAULT_CONFETTI_SPRITES,
                        colors: null != D ? D : O.DEFAULT_CONFETTI_COLORS
                    })]
                })
            };
            var y = e => {
                let {
                    transitionState: t,
                    product: o,
                    category: a,
                    onClose: l,
                    analyticsLocations: i
                } = e, u = r.useRef(new s.Environment), [c, f] = r.useState(null);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(s.ConfettiCanvas, {
                        ref: f,
                        className: h.confettiCanvas,
                        environment: u.current
                    }), (0, n.jsx)(d.ModalRoot, {
                        hideShadow: !0,
                        transitionState: t,
                        size: d.ModalSize.DYNAMIC,
                        className: h.modalRoot,
                        children: (0, n.jsx)(d.ModalContent, {
                            className: h.modalContent,
                            children: (0, n.jsx)(L, {
                                product: o,
                                category: a,
                                onClose: l,
                                confettiCanvas: c,
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
                getAssetSizeByHeight: function() {
                    return a
                },
                getLogoSize: function() {
                    return l
                },
                getBackgroundGradient: function() {
                    return s
                }
            });
            var n = o("547630");
            let r = 1060,
                a = e => e * (0, n.default)(),
                l = e => 3.8 * e,
                s = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
                        {
                            primary: o,
                            secondary: n
                        } = e;
                    return "linear-gradient(".concat(t, "deg, ").concat(o.toHslString(), ", ").concat(n.toHslString(), ")")
                }
        },
        57940: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                DEFAULT_CONFETTI_SPRITES: function() {
                    return d
                },
                DEFAULT_CONFETTI_COLORS: function() {
                    return f
                },
                default: function() {
                    return T
                }
            }), o("222007");
            var n = o("656280"),
                r = o.n(n),
                a = o("635058"),
                l = o("65597"),
                s = o("669491"),
                i = o("206230"),
                u = o("388491"),
                c = o("172858");
            let d = c.COMMON_CONFETTI_SPRITES.filter((e, t) => 1 !== t && 7 !== t),
                f = ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"],
                C = r(s.default.unsafe_rawColors.WHITE_500.resolve({
                    saturation: 1
                }).hex()),
                E = r(s.default.unsafe_rawColors.BLACK_500.resolve({
                    saturation: 1
                }).hex()),
                g = (e, t) => {
                    let o = e.toRgb(),
                        n = t.toRgb(),
                        [a, l, s] = (0, u.getValueInColorGradientByPercentage)([o.r, o.g, o.b], [n.r, n.g, n.b], 50);
                    return r({
                        r: a,
                        g: l,
                        b: s
                    })
                },
                p = (e, t) => {
                    let o = r(e),
                        n = r(t),
                        a = g(o, n);
                    return {
                        primary: o,
                        secondary: n,
                        border: a.setAlpha(.4)
                    }
                },
                F = (e, t) => {
                    let o = r(e),
                        n = r(t),
                        a = g(o, n);
                    return {
                        primary: o,
                        secondary: n,
                        text: r(a.isLight() ? E : C)
                    }
                },
                b = (e, t) => {
                    let {
                        h: o,
                        s: n,
                        l: a
                    } = e.toHsl();
                    return r({
                        h: o,
                        s: n * t,
                        l: a
                    })
                },
                S = {
                    [a.CollectiblesCategorySkuId.FANTASY]: {
                        backgroundColors: p("#146144", "#021A0E"),
                        buttonColors: F("#028737", "#00694A"),
                        confettiSprites: [o("655029"), o("290216")],
                        confettiColors: ["#EFA7F7", "#B646C1", "#56B3B3", "#1A8199", "#7160AF", "#AEC7FF"]
                    },
                    [a.CollectiblesCategorySkuId.ANIME]: {
                        backgroundColors: p("#4B79B0", "#0F0E3A"),
                        buttonColors: F("#8A45C1", "#136897"),
                        confettiSprites: [o("597704"), o("714293")],
                        confettiColors: ["#2C9BD9", "#E46A80", "#FFE500", "#BBA8D5", "#3EDDD3", "#E2B761"]
                    },
                    [a.CollectiblesCategorySkuId.BREAKFAST]: {
                        backgroundColors: p("#E8B26B", "#7A3A00"),
                        buttonColors: F("#FFC355", "#FF9537"),
                        confettiSprites: [o("286642"), o("94646")],
                        confettiColors: ["#DD9C98", "#FFC037", "#FF6B00", "#FDE081", "#DD923E", "#FFEECC"]
                    },
                    [a.CollectiblesCategorySkuId.DISXCORE]: {
                        backgroundColors: p("#732565", "#111D40"),
                        buttonColors: F(s.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.resolve({
                            saturation: 1
                        }).hex(), s.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.resolve({
                            saturation: 1
                        }).hex()),
                        confettiSprites: d,
                        confettiColors: f
                    },
                    [a.CollectiblesCategorySkuId.HALLOWEEN]: {
                        backgroundColors: p("#5280DC", "#060F25"),
                        buttonColors: F("#496BDB", "#3E41B5"),
                        confettiSprites: [o("638538"), o("861485")],
                        confettiColors: ["#EE5619", "#FDBE44", "#42D612", "#DC0DDE", "#8A0AE5"]
                    },
                    [a.CollectiblesCategorySkuId.FALL]: {
                        backgroundColors: p("#FFC267", "#6C1A00"),
                        buttonColors: F("#F5A142", "#E4760E"),
                        confettiSprites: [o("740683"), o("489847")],
                        confettiColors: ["#FF7138", "#92360C", "#F6A334", "#FFC586", "#FF8A00"]
                    },
                    [a.CollectiblesCategorySkuId.WINTER]: {
                        backgroundColors: p("#467FFF", "#154ECF"),
                        buttonColors: F("#44C7FF", "#009DFF"),
                        confettiSprites: [o("770704"), o("165057")],
                        confettiColors: ["#3DC3FF", "#297AFF", "#FD8BFF", "#FF3BF5"]
                    },
                    [a.CollectiblesCategorySkuId.MONSTERS]: {
                        backgroundColors: p("#00475E", "#002B39"),
                        buttonColors: F("#00E6B2", "#009B7C"),
                        confettiSprites: [o("330825"), o("125221")],
                        confettiColors: ["#00C49A", "#F8B531", "#F24E7E", "#64CC6F", "#BB5CF0"]
                    }
                };
            var T = e => {
                let t = (0, l.default)([i.default], () => i.default.saturation);
                if (null == e) return {};
                let o = S[e.skuId];
                return (null == o ? void 0 : o.backgroundColors) == null || 1 === t ? null != o ? o : {} : {
                    ...o,
                    backgroundColors: {
                        primary: b(o.backgroundColors.primary, t),
                        secondary: b(o.backgroundColors.secondary, t),
                        border: b(o.backgroundColors.border, t)
                    },
                    buttonColors: {
                        primary: b(o.buttonColors.primary, t),
                        secondary: b(o.buttonColors.secondary, t),
                        text: o.buttonColors.text
                    },
                    confettiColors: o.confettiColors.map(e => b(r(e), t).toHexString())
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
            var n = o("37983"),
                r = o("884691"),
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
                        isPurchased: d,
                        removeSetHeight: f = !1
                    } = e, C = a ? 250 : .1, [E, g] = r.useState(!0);
                    return (r.useEffect(() => {
                        if (!0 !== a) g(!1);
                        else {
                            let e = setTimeout(() => {
                                g(!1)
                            }, C);
                            return () => {
                                clearTimeout(e)
                            }
                        }
                    }, [C, a]), null != t) ? (0, n.jsxs)("div", {
                        className: l(u.previewContainer, {
                            [u.previewContainerAnimation]: a,
                            [u.previewContainerSetHeight]: !f
                        }),
                        children: [(0, n.jsx)("img", {
                            src: c,
                            alt: " ",
                            className: a ? u.previewForCollected : u.preview,
                            "aria-hidden": !0
                        }), !E && (0, n.jsx)("div", {
                            className: d ? u.purchasedEffect : void 0,
                            children: (0, n.jsx)(i.default, {
                                profileEffectId: t,
                                useThumbnail: !0,
                                autoPlay: a,
                                restartMethod: s.RestartMethod.FromStart,
                                resetOnHover: !0,
                                isHovering: o,
                                introDelay: C,
                                useOpacityOnHover: !1
                            })
                        })]
                    }) : null
                }
        }
    }
]);