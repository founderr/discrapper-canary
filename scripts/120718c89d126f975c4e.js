(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [31203, 3039], {
        467874: (e, t, r) => {
            e.exports = r.p + "371c2f983518e3b05d05325309fcb89f.png"
        },
        578862: (e, t, r) => {
            e.exports = r.p + "f7963229b547598b0ad00d0709a23e5d.png"
        },
        297206: (e, t, r) => {
            e.exports = r.p + "f1ddf309c7c2db629a6deae0590fef7d.png"
        },
        406112: (e, t, r) => {
            e.exports = r.p + "99dc9a00df6750595689491e8375c322.png"
        },
        398015: (e, t, r) => {
            e.exports = r.p + "47e70fb32fa1bac0984f0315d0ee37d8.png"
        },
        954512: (e, t, r) => {
            e.exports = r.p + "12f609335019910fcf794763b4dd2d75.png"
        },
        200309: (e, t, r) => {
            e.exports = r.p + "c2d60d152d1156c1097d320737305ca4.png"
        },
        82734: (e, t, r) => {
            e.exports = r.p + "4f35fac7a0ff1e82a2a869bd9725f1d7.png"
        },
        563163: (e, t, r) => {
            e.exports = r.p + "93be6630c8497b763767571bf5e9a20d.png"
        },
        803039: (e, t, r) => {
            "use strict";
            r.r(t);
            r.d(t, {
                CollectiblesCollectedModalInner: () => W,
                default: () => V
            });
            var n = r(785893),
                a = r(667294),
                l = r(294184),
                o = r.n(l),
                i = r(652411),
                u = r(441143),
                c = r.n(u),
                s = r(318715),
                f = r(882723),
                d = r(735885),
                b = r(316878),
                y = r(153686),
                p = r(19585),
                v = r(841379),
                m = r(995141),
                h = r(401080),
                C = r(357369),
                g = r(327453),
                O = r(473903),
                A = r(349771),
                S = r(251288),
                j = r(8970),
                E = r(4958);

            function I(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function x(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function w(e, t) {
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

            function N(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, a, l = [],
                            o = !0,
                            i = !1;
                        try {
                            for (r = r.call(e); !(o = (n = r.next()).done); o = !0) {
                                l.push(n.value);
                                if (t && l.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return l
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return I(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return I(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function P(e) {
                return w(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            x(e, t, r[t])
                        }))
                    }
                    return e
                }({}, E.We), {
                    position: {
                        type: "static-random",
                        minValue: {
                            x: e.x,
                            y: e.y
                        },
                        maxValue: {
                            x: e.x + e.width,
                            y: e.y + e.height / 2
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
                })
            }
            const T = function(e) {
                var t = e.confettiTarget,
                    r = e.confettiCanvas,
                    l = e.sprites,
                    o = e.colors,
                    u = N(a.useState(null), 2),
                    c = u[0],
                    s = u[1],
                    f = (0, i.uR)(r, c),
                    d = N(a.useState(!1), 2),
                    b = d[0],
                    y = d[1];
                a.useEffect((function() {
                    var e = new Array(10).fill(0);
                    null != t && f.isReady && !b && (e = e.map((function(r, n) {
                        return setTimeout((function() {
                            n === e.length - 1 && y(!0);
                            f.createMultipleConfetti(P(t.getBoundingClientRect()), 50)
                        }), 100 * n)
                    })));
                    return function() {
                        var t = !0,
                            r = !1,
                            n = void 0;
                        try {
                            for (var a, l = e[Symbol.iterator](); !(t = (a = l.next()).done); t = !0) {
                                var o = a.value;
                                clearTimeout(o)
                            }
                        } catch (e) {
                            r = !0;
                            n = e
                        } finally {
                            try {
                                t || null == l.return || l.return()
                            } finally {
                                if (r) throw n
                            }
                        }
                    }
                }), [f, t, b]);
                return (0, n.jsx)(i.Ji, {
                    ref: s,
                    sprites: l,
                    colors: o,
                    spriteWidth: E.Ko,
                    spriteHeight: E.Ko
                })
            };
            var M = r(940594),
                k = r(584228),
                D = r(473708),
                L = r(731312),
                _ = r.n(L),
                F = r(467874),
                B = r.n(F);

            function R(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function Z(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, a, l = [],
                            o = !0,
                            i = !1;
                        try {
                            for (r = r.call(e); !(o = (n = r.next()).done); o = !0) {
                                l.push(n.value);
                                if (t && l.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return l
                    }
                }(e, t) || U(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function H(e) {
                return function(e) {
                    if (Array.isArray(e)) return R(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || U(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function U(e, t) {
                if (e) {
                    if ("string" == typeof e) return R(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    return "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? R(e, t) : void 0
                }
            }
            var W = function(e) {
                var t, r, l = e.product,
                    o = e.onClose,
                    i = e.confettiTarget,
                    u = e.confettiCanvas,
                    E = e.category,
                    I = e.analyticsLocations,
                    x = (0, k.Z)(E),
                    w = x.confettiColors,
                    N = x.confettiSprites,
                    P = x.backgroundColors,
                    L = x.buttonColors,
                    F = (0, s.ZP)([O.default], (function() {
                        var e = O.default.getCurrentUser();
                        c()(null != e, "User cannot be undefined");
                        return e
                    })),
                    R = (0, s.ZP)([b.Z], (function() {
                        return b.Z.useReducedMotion
                    })),
                    Z = null !== (t = l.items.find(S.M)) && void 0 !== t ? t : null,
                    U = null !== (r = l.items.find(j.H)) && void 0 !== r ? r : null,
                    W = (0, v.Z)({
                        user: F,
                        pendingAvatarDecoration: Z,
                        size: (0, m.y9)(f.AvatarSizes.SIZE_120),
                        canAnimate: !0
                    }),
                    V = a.useRef(null),
                    Y = (0, p.Z)(H(I).concat([y.Z.COLLECTIBLES_COLLECTED_MODAL])),
                    K = Y.analyticsLocations,
                    G = Y.AnalyticsLocationProvider,
                    z = (0, h.Z)({
                        analyticsLocations: K
                    });
                return null == Z && null == U ? null : (0, n.jsxs)(G, {
                    children: [(0, n.jsxs)("div", {
                        className: _().modalInner,
                        ref: V,
                        style: {
                            background: "linear-gradient(180deg, ".concat(P[0], ", ").concat(P[1], ")")
                        },
                        children: [(0, n.jsxs)("div", {
                            className: _().bannerContainer,
                            children: [(0, n.jsx)("img", {
                                src: (0, A.uV)(E.banner, {
                                    size: 440
                                }),
                                alt: l.name,
                                className: _().decorationBanner
                            }), null != Z && (0, n.jsx)(f.Avatar, {
                                size: f.AvatarSizes.SIZE_120,
                                src: B(),
                                avatarDecoration: W,
                                className: _().avatarDecoration,
                                "aria-label": l.name
                            }), null != U && (0, n.jsx)("div", {
                                className: _().profileEffectShopPreview,
                                children: (0, n.jsx)(C.Z, {
                                    forCollectedModal: !0,
                                    profileEffectId: null == U ? void 0 : U.id
                                })
                            })]
                        }), (0, n.jsxs)("div", {
                            className: _().collectedInfoContainer,
                            children: [(0, n.jsxs)("div", {
                                className: _().collectedTextContainer,
                                children: [(0, n.jsx)(f.Heading, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    children: D.Z.Messages.COLLECTIBLES_YOU_COLLECTED.format({
                                        itemName: l.name
                                    })
                                }), (0, n.jsx)(f.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: null != U ? D.Z.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : D.Z.Messages.COLLECTIBLES_PERMANENT_COLLECTION
                                })]
                            }), (0, n.jsx)(f.Button, {
                                onClick: function() {
                                    o();
                                    (0, d.xf)();
                                    z();
                                    null != Z ? (0, m.ps)({
                                        initialSelectedDecoration: l.items.find(S.M),
                                        analyticsLocations: K
                                    }) : null != U && (0, g.H)({
                                        analyticsLocations: K,
                                        effectFromShop: null == U ? void 0 : U.id
                                    })
                                },
                                style: (0, M.Ch)(L),
                                children: D.Z.Messages.COLLECTIBLES_USE_NOW
                            })]
                        }), (0, n.jsx)(f.ModalCloseButton, {
                            onClick: o,
                            className: _().modalCloseButton,
                            withCircleBackground: !0
                        })]
                    }), !R && (0, n.jsx)(T, {
                        confettiTarget: null != i ? i : V.current,
                        confettiCanvas: u,
                        sprites: N,
                        colors: w
                    })]
                })
            };
            const V = function(e) {
                var t = e.transitionState,
                    r = e.product,
                    l = e.category,
                    u = e.onClose,
                    c = e.analyticsLocations,
                    s = a.useRef(new i.qA),
                    d = Z(a.useState(null), 2),
                    b = d[0],
                    y = d[1];
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(i.O_, {
                        ref: y,
                        className: _().confettiCanvas,
                        environment: s.current
                    }), (0, n.jsx)(f.ModalRoot, {
                        transitionState: t,
                        size: f.ModalSize.DYNAMIC,
                        children: (0, n.jsx)(f.ModalContent, {
                            className: o()(_().modalInner, _().modalContentOverrides),
                            children: (0, n.jsx)(W, {
                                product: r,
                                category: l,
                                onClose: u,
                                confettiCanvas: b,
                                analyticsLocations: c
                            })
                        })
                    })]
                })
            }
        },
        940594: (e, t, r) => {
            "use strict";
            r.d(t, {
                yV: () => i,
                IC: () => u,
                Ch: () => c
            });
            var n = r(795308),
                a = r(265022),
                l = r(721741),
                o = r(362660),
                i = 1060,
                u = function(e) {
                    return 3.8 * e
                },
                c = function(e) {
                    var t = (0, a.J2)((0, o.dX)(e[0]), (0, o.dX)(e[1]), .5),
                        r = new l.Z(t[0], t[1], t[2], 1).toHSL();
                    return {
                        background: "linear-gradient(to right, ".concat(e.join(", "), ")"),
                        color: r.lightness > .66 ? n.Z.unsafe_rawColors.BLACK_500.css : n.Z.unsafe_rawColors.WHITE_500.css
                    }
                }
        },
        584228: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => i
            });
            var n = r(389349),
                a = r(795308),
                l = r(4958),
                o = l.CA.filter((function(e, t) {
                    return 1 !== t && 7 !== t
                }));
            const i = function(e) {
                var t = {
                    backgroundColors: [],
                    buttonColors: [],
                    confettiSprites: l.CA,
                    confettiColors: l.Br
                };
                if (null == e) return t;
                switch (e.skuId) {
                    case n.T.FANTASY:
                        return {
                            backgroundColors: ["#146144", "#021A0E"], buttonColors: ["#028737", "#00694A"], confettiSprites: [r(406112), r(200309)], confettiColors: ["#EFA7F7", "#B646C1", "#56B3B3", "#1A8199", "#7160AF", "#AEC7FF"]
                        };
                    case n.T.ANIME:
                        return {
                            backgroundColors: ["#4B79B0", "#0F0E3A"], buttonColors: ["#8A45C1", "#136897"], confettiSprites: [r(954512), r(398015)], confettiColors: ["#2C9BD9", "#E46A80", "#FFE500", "#BBA8D5", "#3EDDD3", "#E2B761"]
                        };
                    case n.T.BREAKFAST:
                        return {
                            backgroundColors: ["#E8B26B", "#7A3A00"], buttonColors: ["#FFC355", "#FF9537"], confettiSprites: [r(297206), r(578862)], confettiColors: ["#DD9C98", "#FFC037", "#FF6B00", "#FDE081", "#DD923E", "#FFEECC"]
                        };
                    case n.T.DISXCORE:
                        return {
                            backgroundColors: ["#732565", "#111D40"],
                                buttonColors: [a.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css, a.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css], confettiSprites: o, confettiColors: ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"]
                        };
                    default:
                        return t
                }
            }
        },
        910358: (e, t, r) => {
            "use strict";
            r.r(t);
            r.d(t, {
                default: () => R
            });
            var n = r(785893),
                a = r(667294),
                l = r(652411),
                o = r(153686),
                i = r(19585),
                u = r(782786),
                c = r(83471),
                s = r(586611),
                f = r(545270),
                d = r(441143),
                b = r.n(d),
                y = r(318715),
                p = r(764797),
                v = r(803039),
                m = r(149096),
                h = r(328535);

            function C(e) {
                var t = e.handleClose,
                    r = e.confettiCanvas,
                    a = e.analyticsLocations,
                    l = (0, u.usePaymentContext)(),
                    o = l.skusById,
                    i = l.selectedSkuId,
                    c = l.application,
                    s = (0, y.cj)([p.Z], (function() {
                        return {
                            product: p.Z.getProduct(i),
                            category: p.Z.getCategoryForProduct(i)
                        }
                    })),
                    f = s.product,
                    d = s.category;
                b()(null != i, "Expected selectedSkuId");
                b()(null != c, "Expected application");
                var C = o[i];
                b()(null != C, "Expected sku");
                return null == d || null == f ? null : (0, n.jsxs)(m.C3, {
                    children: [(0, n.jsx)(h.Z, {}), (0, n.jsx)(v.CollectiblesCollectedModalInner, {
                        product: f,
                        category: d,
                        onClose: t,
                        confettiCanvas: r,
                        analyticsLocations: a
                    })]
                })
            }
            var g = r(882723),
                O = r(333568),
                A = r(297283),
                S = r(290284),
                j = r.n(S),
                E = r(82734),
                I = r.n(E),
                x = function(e) {
                    var t = e.step,
                        r = e.onClose,
                        a = (0, O.Z)(A.X);
                    return t === c.h8.CONFIRM || t === c.h8.BENEFITS ? (0, n.jsx)("div", {}) : (0, n.jsxs)("div", {
                        className: j().headerContainer,
                        children: [!a && (0, n.jsx)("div", {
                            className: j().headerImageContainer,
                            "aria-hidden": "true",
                            children: (0, n.jsx)("img", {
                                src: I(),
                                alt: "",
                                className: j().headerImage
                            })
                        }), (0, n.jsx)(g.ModalCloseButton, {
                            withCircleBackground: !0,
                            className: j().closeButton,
                            onClick: r
                        })]
                    })
                },
                w = r(2590),
                N = r(520453),
                P = r(161577),
                T = r.n(P);

            function M(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function k(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function D(e, t) {
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

            function L(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, a, l = [],
                            o = !0,
                            i = !1;
                        try {
                            for (r = r.call(e); !(o = (n = r.next()).done); o = !0) {
                                l.push(n.value);
                                if (t && l.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return l
                    }
                }(e, t) || F(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _(e) {
                return function(e) {
                    if (Array.isArray(e)) return M(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || F(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function F(e, t) {
                if (e) {
                    if ("string" == typeof e) return M(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    return "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? M(e, t) : void 0
                }
            }
            var B = function(e, t, r) {
                return (0, n.jsx)(x, {
                    step: r,
                    onClose: function() {
                        return t(!1)
                    }
                })
            };

            function R(e) {
                var t = e.onClose,
                    r = e.onComplete,
                    d = e.transitionState,
                    b = e.loadId,
                    y = e.skuId,
                    p = e.analyticsLocations,
                    v = (0, i.Z)(_(p).concat([o.Z.COLLECTIBLES_PAYMENT_MODAL])),
                    m = v.analyticsLocations,
                    h = v.AnalyticsLocationProvider,
                    g = a.useRef(new l.qA),
                    O = L(a.useState(null), 2),
                    A = O[0],
                    S = O[1],
                    j = [f.WA, f.s2].concat(_(f.yp), [f.wo, {
                        key: c.h8.CONFIRM,
                        renderStep: function(e) {
                            return (0, n.jsx)(C, D(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                                    }))));
                                    n.forEach((function(t) {
                                        k(e, t, r[t])
                                    }))
                                }
                                return e
                            }({}, e), {
                                confettiCanvas: A,
                                analyticsLocations: m
                            }))
                        },
                        options: {
                            bodyClassName: T().modalOverrideBody,
                            sliderBodyClassName: T().modalOverrideSliderBody
                        }
                    }]);
                return (0, n.jsxs)(h, {
                    children: [(0, n.jsx)(l.O_, {
                        ref: S,
                        className: T().confettiCanvas,
                        environment: g.current
                    }), (0, n.jsx)(u.PaymentContextProvider, {
                        stepConfigs: j,
                        applicationId: w.XAJ,
                        skuIDs: [y],
                        activeSubscription: null,
                        purchaseType: N.GZ.ONE_TIME,
                        children: (0, n.jsx)(s.PaymentModal, {
                            onClose: t,
                            onComplete: r,
                            loadId: b,
                            applicationId: w.XAJ,
                            skuId: y,
                            initialPlanId: null,
                            analyticsLocations: m,
                            transitionState: d,
                            renderHeader: B,
                            hideShadow: !0
                        })
                    })]
                })
            }
        },
        545270: (e, t, r) => {
            "use strict";
            r.d(t, {
                s2: () => E,
                F7: () => N,
                WA: () => j,
                wo: () => w,
                yp: () => P
            });
            var n = r(785893),
                a = (r(667294), r(711531)),
                l = r(83471),
                o = r(986304),
                i = r(493957),
                u = r(806706),
                c = r(441143),
                s = r.n(c),
                f = r(882723),
                d = r(782786),
                b = r(328535),
                y = r(149096),
                p = r(473708),
                v = r(819779),
                m = r.n(v);

            function h(e) {
                var t = e.handleClose,
                    r = (0, d.usePaymentContext)(),
                    a = r.skusById,
                    l = r.selectedSkuId,
                    o = r.application;
                s()(null != l, "Expected selectedSkuId");
                s()(null != o, "Expected application");
                var i = a[l];
                s()(null != i, "Expected sku");
                var u = p.Z.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
                    applicationName: o.name,
                    itemName: i.name
                });
                return (0, n.jsxs)(y.C3, {
                    children: [(0, n.jsx)(b.Z, {}), (0, n.jsxs)("div", {
                        className: m().confirmation,
                        children: [(0, n.jsx)(f.Heading, {
                            variant: "heading-xxl/bold",
                            className: m().confirmationHeader,
                            children: "Success!"
                        }), (0, n.jsx)(f.Text, {
                            variant: "text-md/normal",
                            children: u
                        }), (0, n.jsx)("div", {
                            className: m().divider
                        }), (0, n.jsx)(f.Button, {
                            onClick: t,
                            children: p.Z.Messages.CLOSE
                        })]
                    })]
                })
            }
            var C = r(366366),
                g = r(964255);

            function O(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        O(e, t, r[t])
                    }))
                }
                return e
            }

            function S(e, t) {
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
            var j = {
                    key: null,
                    renderStep: function(e) {
                        return (0, n.jsx)(g.v, A({}, e))
                    }
                },
                E = {
                    key: l.h8.ADD_PAYMENT_STEPS,
                    renderStep: function(e) {
                        return (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsx)(o.J, S(A({}, e), {
                                breadcrumbSteps: [l.h8.ADD_PAYMENT_STEPS, l.h8.REVIEW, l.h8.CONFIRM],
                                onReturn: function() {
                                    var t = a.Z.paymentSources;
                                    0 === Object.keys(t).length ? e.handleClose() : e.handleStepChange(l.h8.REVIEW, {
                                        trackedFromStep: l.h8.ADD_PAYMENT_STEPS
                                    })
                                }
                            }))
                        })
                    },
                    options: {
                        renderHeader: !0
                    }
                },
                I = {
                    key: l.h8.AWAITING_PURCHASE_TOKEN_AUTH,
                    renderStep: function() {
                        return (0, n.jsx)(u.Z, {})
                    }
                },
                x = {
                    key: l.h8.AWAITING_AUTHENTICATION,
                    renderStep: function() {
                        return (0, n.jsx)(i.Z, {})
                    }
                },
                w = {
                    key: l.h8.REVIEW,
                    renderStep: function(e) {
                        return (0, n.jsx)(C.l, A({}, e))
                    }
                },
                N = {
                    key: l.h8.CONFIRM,
                    renderStep: function(e) {
                        return (0, n.jsx)(h, A({}, e))
                    }
                },
                P = [I, x]
        },
        964255: (e, t, r) => {
            "use strict";
            r.d(t, {
                v: () => f
            });
            var n = r(785893),
                a = r(667294),
                l = r(123435),
                o = r(782786),
                i = r(83471),
                u = r(28648);

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function s(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, a, l = [],
                            o = !0,
                            i = !1;
                        try {
                            for (r = r.call(e); !(o = (n = r.next()).done); o = !0) {
                                l.push(n.value);
                                if (t && l.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return l
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return c(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f(e) {
                var t = e.handleStepChange,
                    r = (0, o.usePaymentContext)(),
                    c = r.blockedPayments,
                    f = r.hasFetchedSkus,
                    d = r.paymentSources,
                    b = r.hasFetchedPaymentSources,
                    y = s(a.useState(!0), 2),
                    p = y[0],
                    v = y[1];
                a.useEffect((function() {
                    f && b && v(!1)
                }), [f, b]);
                a.useEffect((function() {
                    p || c || (0 === Object.keys(d).length ? t(i.h8.ADD_PAYMENT_STEPS) : t(i.h8.REVIEW))
                }), [p, c, t, d]);
                return p ? (0, n.jsx)(u.Z, {}) : c ? (0, n.jsx)(l.Vq, {}) : null
            }
        },
        357369: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => v
            });
            var n = r(785893),
                a = r(667294),
                l = r(294184),
                o = r.n(l),
                i = r(934608),
                u = r(753251),
                c = r(146967),
                s = r.n(c),
                f = r(563163),
                d = r.n(f);

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function y(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function p(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, a, l = [],
                            o = !0,
                            i = !1;
                        try {
                            for (r = r.call(e); !(o = (n = r.next()).done); o = !0) {
                                l.push(n.value);
                                if (t && l.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return l
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return b(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return b(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const v = function(e) {
                var t = e.profileEffectId,
                    r = e.isHovering,
                    l = e.forCollectedModal,
                    c = void 0 !== l && l,
                    f = c ? 250 : .1,
                    b = p(a.useState(!0), 2),
                    v = b[0],
                    m = b[1];
                a.useEffect((function() {
                    if (!0 === c) {
                        var e = setTimeout((function() {
                            m(!1)
                        }), f);
                        return function() {
                            clearTimeout(e)
                        }
                    }
                    m(!1)
                }), [f, c]);
                return null != t ? (0, n.jsxs)("div", {
                    className: o()(s().previewContainer, y({}, s().previewContainerAnimation, c)),
                    children: [(0, n.jsx)("img", {
                        src: d(),
                        alt: " ",
                        className: s().preview,
                        "aria-hidden": !0
                    }), !v && (0, n.jsx)(u.Z, {
                        profileEffectID: t,
                        useThumbnail: !c,
                        autoPlay: c,
                        restartMethod: i.j.FromStart,
                        resetOnHover: !0,
                        isHovering: r,
                        introDelay: f,
                        useOpacityOnHover: !1
                    })]
                }) : null
            }
        },
        852316: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => n
            });
            const n = [{
                label: "Alberta",
                value: "AB"
            }, {
                label: "British Columbia",
                value: "BC"
            }, {
                label: "Manitoba",
                value: "MB"
            }, {
                label: "New Brunswick",
                value: "NB"
            }, {
                label: "Newfoundland and Labrador",
                value: "NL"
            }, {
                label: "Nova Scotia",
                value: "NS"
            }, {
                label: "Ontario",
                value: "ON"
            }, {
                label: "Prince Edward Island",
                value: "PE"
            }, {
                label: "Quebec",
                value: "QC"
            }, {
                label: "Saskatchewan",
                value: "SK"
            }, {
                label: "Northwest Territories",
                value: "NT"
            }, {
                label: "Nunavut",
                value: "NU"
            }, {
                label: "Yukon",
                value: "YT"
            }]
        },
        947592: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => n
            });
            const n = [{
                label: "Alabama",
                value: "AL"
            }, {
                label: "Alaska",
                value: "AK"
            }, {
                label: "American Samoa",
                value: "AS"
            }, {
                label: "Arizona",
                value: "AZ"
            }, {
                label: "Arkansas",
                value: "AR"
            }, {
                label: "Armed Forces: Americas",
                value: "AA"
            }, {
                label: "Armed Forces: Europe",
                value: "AE"
            }, {
                label: "Armed Forces: Pacific",
                value: "AP"
            }, {
                label: "California",
                value: "CA"
            }, {
                label: "Colorado",
                value: "CO"
            }, {
                label: "Connecticut",
                value: "CT"
            }, {
                label: "Delaware",
                value: "DE"
            }, {
                label: "District Of Columbia",
                value: "DC"
            }, {
                label: "Federated States Of Micronesia",
                value: "FM"
            }, {
                label: "Florida",
                value: "FL"
            }, {
                label: "Georgia",
                value: "GA"
            }, {
                label: "Guam",
                value: "GU"
            }, {
                label: "Hawaii",
                value: "HI"
            }, {
                label: "Idaho",
                value: "ID"
            }, {
                label: "Illinois",
                value: "IL"
            }, {
                label: "Indiana",
                value: "IN"
            }, {
                label: "Iowa",
                value: "IA"
            }, {
                label: "Kansas",
                value: "KS"
            }, {
                label: "Kentucky",
                value: "KY"
            }, {
                label: "Louisiana",
                value: "LA"
            }, {
                label: "Maine",
                value: "ME"
            }, {
                label: "Marshall Islands",
                value: "MH"
            }, {
                label: "Maryland",
                value: "MD"
            }, {
                label: "Massachusetts",
                value: "MA"
            }, {
                label: "Michigan",
                value: "MI"
            }, {
                label: "Minnesota",
                value: "MN"
            }, {
                label: "Mississippi",
                value: "MS"
            }, {
                label: "Missouri",
                value: "MO"
            }, {
                label: "Montana",
                value: "MT"
            }, {
                label: "Nebraska",
                value: "NE"
            }, {
                label: "Nevada",
                value: "NV"
            }, {
                label: "New Hampshire",
                value: "NH"
            }, {
                label: "New Jersey",
                value: "NJ"
            }, {
                label: "New Mexico",
                value: "NM"
            }, {
                label: "New York",
                value: "NY"
            }, {
                label: "North Carolina",
                value: "NC"
            }, {
                label: "North Dakota",
                value: "ND"
            }, {
                label: "Northern Mariana Islands",
                value: "MP"
            }, {
                label: "Ohio",
                value: "OH"
            }, {
                label: "Oklahoma",
                value: "OK"
            }, {
                label: "Oregon",
                value: "OR"
            }, {
                label: "Palau",
                value: "PW"
            }, {
                label: "Pennsylvania",
                value: "PA"
            }, {
                label: "Puerto Rico",
                value: "PR"
            }, {
                label: "Rhode Island",
                value: "RI"
            }, {
                label: "South Carolina",
                value: "SC"
            }, {
                label: "South Dakota",
                value: "SD"
            }, {
                label: "Tennessee",
                value: "TN"
            }, {
                label: "Texas",
                value: "TX"
            }, {
                label: "Utah",
                value: "UT"
            }, {
                label: "Vermont",
                value: "VT"
            }, {
                label: "Virgin Islands",
                value: "VI"
            }, {
                label: "Virginia",
                value: "VA"
            }, {
                label: "Washington",
                value: "WA"
            }, {
                label: "West Virginia",
                value: "WV"
            }, {
                label: "Wisconsin",
                value: "WI"
            }, {
                label: "Wyoming",
                value: "WY"
            }]
        }
    }
]);