(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [31203, 3039], {
        578862: (e, t, n) => {
            e.exports = n.p + "f7963229b547598b0ad00d0709a23e5d.png"
        },
        297206: (e, t, n) => {
            e.exports = n.p + "f1ddf309c7c2db629a6deae0590fef7d.png"
        },
        406112: (e, t, n) => {
            e.exports = n.p + "99dc9a00df6750595689491e8375c322.png"
        },
        398015: (e, t, n) => {
            e.exports = n.p + "47e70fb32fa1bac0984f0315d0ee37d8.png"
        },
        954512: (e, t, n) => {
            e.exports = n.p + "12f609335019910fcf794763b4dd2d75.png"
        },
        200309: (e, t, n) => {
            e.exports = n.p + "c2d60d152d1156c1097d320737305ca4.png"
        },
        82734: (e, t, n) => {
            e.exports = n.p + "4f35fac7a0ff1e82a2a869bd9725f1d7.png"
        },
        803039: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                CollectiblesCollectedModalInner: () => Z,
                default: () => U
            });
            var a = n(785893),
                r = n(667294),
                l = n(294184),
                o = n.n(l),
                i = n(652411),
                u = n(441143),
                s = n.n(u),
                c = n(318715),
                d = n(882723),
                f = n(735885),
                b = n(153686),
                v = n(19585),
                y = n(841379),
                p = n(995141),
                m = n(327453),
                C = n(473903),
                h = n(349771),
                g = n(251288),
                A = n(8970),
                O = n(4958);

            function S(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a
            }

            function j(e, t, n) {
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
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, a)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function E(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var a, r, l = [],
                            o = !0,
                            i = !1;
                        try {
                            for (n = n.call(e); !(o = (a = n.next()).done); o = !0) {
                                l.push(a.value);
                                if (t && l.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            r = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (i) throw r
                            }
                        }
                        return l
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return S(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function w(e) {
                return I(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            a = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        a.forEach((function(t) {
                            j(e, t, n[t])
                        }))
                    }
                    return e
                }({}, O.We), {
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
            const x = function(e) {
                var t = e.confettiTarget,
                    n = e.confettiCanvas,
                    l = e.sprites,
                    o = e.colors,
                    u = E(r.useState(null), 2),
                    s = u[0],
                    c = u[1],
                    d = (0, i.uR)(n, s),
                    f = E(r.useState(!1), 2),
                    b = f[0],
                    v = f[1];
                r.useEffect((function() {
                    var e = new Array(10).fill(0);
                    null != t && d.isReady && !b && (e = e.map((function(n, a) {
                        return setTimeout((function() {
                            a === e.length - 1 && v(!0);
                            d.createMultipleConfetti(w(t.getBoundingClientRect()), 50)
                        }), 100 * a)
                    })));
                    return function() {
                        var t = !0,
                            n = !1,
                            a = void 0;
                        try {
                            for (var r, l = e[Symbol.iterator](); !(t = (r = l.next()).done); t = !0) {
                                var o = r.value;
                                clearTimeout(o)
                            }
                        } catch (e) {
                            n = !0;
                            a = e
                        } finally {
                            try {
                                t || null == l.return || l.return()
                            } finally {
                                if (n) throw a
                            }
                        }
                    }
                }), [d, t, b]);
                return (0, a.jsx)(i.Ji, {
                    ref: c,
                    sprites: l,
                    colors: o,
                    spriteWidth: O.Ko,
                    spriteHeight: O.Ko
                })
            };
            var N = n(940594),
                M = n(584228),
                P = n(473708),
                L = n(311198),
                T = n.n(L),
                k = n(467874),
                D = n.n(k);

            function F(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a
            }

            function B(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var a, r, l = [],
                            o = !0,
                            i = !1;
                        try {
                            for (n = n.call(e); !(o = (a = n.next()).done); o = !0) {
                                l.push(a.value);
                                if (t && l.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            r = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (i) throw r
                            }
                        }
                        return l
                    }
                }(e, t) || R(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _(e) {
                return function(e) {
                    if (Array.isArray(e)) return F(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || R(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function R(e, t) {
                if (e) {
                    if ("string" == typeof e) return F(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? F(e, t) : void 0
                }
            }
            var Z = function(e) {
                var t, n, l = e.product,
                    o = e.onClose,
                    i = e.confettiTarget,
                    u = e.confettiCanvas,
                    O = e.category,
                    S = e.analyticsLocations,
                    j = (0, M.Z)(O),
                    I = j.confettiColors,
                    E = j.confettiSprites,
                    w = j.backgroundColors,
                    L = j.buttonColors,
                    k = (0, c.ZP)([C.default], (function() {
                        var e = C.default.getCurrentUser();
                        s()(null != e, "User cannot be undefined");
                        return e
                    })),
                    F = null !== (t = l.items.find(g.M)) && void 0 !== t ? t : null,
                    B = null !== (n = l.items.find(A.H)) && void 0 !== n ? n : null,
                    R = (0, y.Z)({
                        user: k,
                        pendingAvatarDecoration: F,
                        size: (0, p.y9)(d.AvatarSizes.SIZE_120),
                        canAnimate: !0
                    }),
                    Z = r.useRef(null),
                    U = (0, v.Z)(_(S).concat([b.Z.COLLECTIBLES_COLLECTED_MODAL])),
                    V = U.analyticsLocations,
                    W = U.AnalyticsLocationProvider;
                return null == F && null == B ? null : (0, a.jsxs)(W, {
                    children: [(0, a.jsxs)("div", {
                        className: T().modalInner,
                        ref: Z,
                        style: {
                            background: "linear-gradient(180deg, ".concat(w[0], ", ").concat(w[1], ")")
                        },
                        children: [(0, a.jsxs)("div", {
                            className: T().bannerContainer,
                            children: [(0, a.jsx)("img", {
                                src: (0, h.uV)(O.banner, {
                                    size: 440
                                }),
                                alt: l.name,
                                className: T().decorationBanner
                            }), (0, a.jsx)(d.Avatar, {
                                size: d.AvatarSizes.SIZE_120,
                                src: D(),
                                avatarDecoration: R,
                                className: T().avatarDecoration,
                                "aria-label": l.name
                            })]
                        }), (0, a.jsxs)("div", {
                            className: T().collectedInfoContainer,
                            children: [(0, a.jsxs)("div", {
                                className: T().collectedTextContainer,
                                children: [(0, a.jsx)(d.Heading, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    children: P.Z.Messages.COLLECTIBLES_YOU_COLLECTED.format({
                                        itemName: l.name
                                    })
                                }), (0, a.jsx)(d.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: P.Z.Messages.COLLECTIBLES_PERMANENT_COLLECTION
                                })]
                            }), (0, a.jsx)(d.Button, {
                                onClick: function() {
                                    o();
                                    (0, f.xf)();
                                    null != F ? (0, p.ps)({
                                        initialSelectedDecoration: l.items.find(g.M),
                                        analyticsLocations: V
                                    }) : null != B && (0, m.H)({
                                        analyticsLocations: V,
                                        effectFromShop: null == B ? void 0 : B.id
                                    })
                                },
                                style: (0,
                                    N.Ch)(L),
                                children: P.Z.Messages.COLLECTIBLES_USE_NOW
                            })]
                        }), (0, a.jsx)(d.ModalCloseButton, {
                            onClick: o,
                            className: T().modalCloseButton,
                            withCircleBackground: !0
                        })]
                    }), (0, a.jsx)(x, {
                        confettiTarget: null != i ? i : Z.current,
                        confettiCanvas: u,
                        sprites: E,
                        colors: I
                    })]
                })
            };
            const U = function(e) {
                var t = e.transitionState,
                    n = e.product,
                    l = e.category,
                    u = e.onClose,
                    s = e.analyticsLocations,
                    c = r.useRef(new i.qA),
                    f = B(r.useState(null), 2),
                    b = f[0],
                    v = f[1];
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(i.O_, {
                        ref: v,
                        className: T().confettiCanvas,
                        environment: c.current
                    }), (0, a.jsx)(d.ModalRoot, {
                        transitionState: t,
                        size: d.ModalSize.DYNAMIC,
                        children: (0, a.jsx)(d.ModalContent, {
                            className: o()(T().modalInner, T().modalContentOverrides),
                            children: (0, a.jsx)(Z, {
                                product: n,
                                category: l,
                                onClose: u,
                                confettiCanvas: b,
                                analyticsLocations: s
                            })
                        })
                    })]
                })
            }
        },
        940594: (e, t, n) => {
            "use strict";
            n.d(t, {
                yV: () => i,
                IC: () => u,
                Ch: () => s
            });
            var a = n(795308),
                r = n(265022),
                l = n(721741),
                o = n(362660),
                i = 1060,
                u = function(e) {
                    return 3.8 * e
                },
                s = function(e) {
                    var t = (0, r.J2)((0, o.dX)(e[0]), (0,
                            o.dX)(e[1]), .5),
                        n = new l.Z(t[0], t[1], t[2], 1).toHSL();
                    return {
                        background: "linear-gradient(to right, ".concat(e.join(", "), ")"),
                        color: n.lightness > .66 ? a.Z.unsafe_rawColors.BLACK_500.css : a.Z.unsafe_rawColors.WHITE_500.css
                    }
                }
        },
        584228: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var a = n(389349),
                r = n(795308),
                l = n(4958),
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
                    case a.T.FANTASY:
                        return {
                            backgroundColors: ["#146144", "#021A0E"], buttonColors: ["#028737", "#00694A"], confettiSprites: [n(406112), n(200309)], confettiColors: ["#EFA7F7", "#B646C1", "#56B3B3", "#1A8199", "#7160AF", "#AEC7FF"]
                        };
                    case a.T.ANIME:
                        return {
                            backgroundColors: ["#4B79B0", "#0F0E3A"], buttonColors: ["#8A45C1", "#136897"], confettiSprites: [n(954512), n(398015)], confettiColors: ["#2C9BD9", "#E46A80", "#FFE500", "#BBA8D5", "#3EDDD3", "#E2B761"]
                        };
                    case a.T.BREAKFAST:
                        return {
                            backgroundColors: ["#E8B26B", "#7A3A00"],
                                buttonColors: ["#FFC355", "#FF9537"], confettiSprites: [n(297206), n(578862)], confettiColors: ["#DD9C98", "#FFC037", "#FF6B00", "#FDE081", "#DD923E", "#FFEECC"]
                        };
                    case a.T.DISXCORE:
                        return {
                            backgroundColors: ["#732565", "#111D40"], buttonColors: [r.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css, r.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css], confettiSprites: o, confettiColors: ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"]
                        };
                    default:
                        return t
                }
            }
        },
        910358: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => R
            });
            var a = n(785893),
                r = n(667294),
                l = n(652411),
                o = n(153686),
                i = n(19585),
                u = n(782786),
                s = n(83471),
                c = n(586611),
                d = n(545270),
                f = n(441143),
                b = n.n(f),
                v = n(318715),
                y = n(764797),
                p = n(803039),
                m = n(149096),
                C = n(328535);

            function h(e) {
                var t = e.handleClose,
                    n = e.confettiCanvas,
                    r = e.analyticsLocations,
                    l = (0, u.usePaymentContext)(),
                    o = l.skusById,
                    i = l.selectedSkuId,
                    s = l.application,
                    c = (0, v.cj)([y.Z], (function() {
                        return {
                            product: y.Z.getProduct(i),
                            category: y.Z.getCategoryForProduct(i)
                        }
                    })),
                    d = c.product,
                    f = c.category;
                b()(null != i, "Expected selectedSkuId");
                b()(null != s, "Expected application");
                var h = o[i];
                b()(null != h, "Expected sku");
                return null == f || null == d ? null : (0, a.jsxs)(m.C3, {
                    children: [(0, a.jsx)(C.Z, {}), (0, a.jsx)(p.CollectiblesCollectedModalInner, {
                        product: d,
                        category: f,
                        onClose: t,
                        confettiCanvas: n,
                        analyticsLocations: r
                    })]
                })
            }
            var g = n(882723),
                A = n(333568),
                O = n(297283),
                S = n(324003),
                j = n.n(S),
                I = n(82734),
                E = n.n(I),
                w = function(e) {
                    var t = e.step,
                        n = e.onClose,
                        r = (0, A.Z)(O.X);
                    return t === s.h8.CONFIRM || t === s.h8.BENEFITS ? (0, a.jsx)("div", {}) : (0, a.jsxs)("div", {
                        className: j().headerContainer,
                        children: [!r && (0, a.jsx)("div", {
                            className: j().headerImageContainer,
                            "aria-hidden": "true",
                            children: (0, a.jsx)("img", {
                                src: E(),
                                alt: "",
                                className: j().headerImage
                            })
                        }), (0, a.jsx)(g.ModalCloseButton, {
                            withCircleBackground: !0,
                            className: j().closeButton,
                            onClick: n
                        })]
                    })
                },
                x = n(2590),
                N = n(520453),
                M = n(446607),
                P = n.n(M);

            function L(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a
            }

            function T(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function k(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, a)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function D(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var a, r, l = [],
                            o = !0,
                            i = !1;
                        try {
                            for (n = n.call(e); !(o = (a = n.next()).done); o = !0) {
                                l.push(a.value);
                                if (t && l.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            r = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (i) throw r
                            }
                        }
                        return l
                    }
                }(e, t) || B(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function F(e) {
                return function(e) {
                    if (Array.isArray(e)) return L(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || B(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function B(e, t) {
                if (e) {
                    if ("string" == typeof e) return L(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? L(e, t) : void 0
                }
            }
            var _ = function(e, t, n) {
                return (0, a.jsx)(w, {
                    step: n,
                    onClose: function() {
                        return t(!1)
                    }
                })
            };

            function R(e) {
                var t = e.onClose,
                    n = e.onComplete,
                    f = e.transitionState,
                    b = e.loadId,
                    v = e.skuId,
                    y = e.analyticsLocations,
                    p = (0, i.Z)(F(y).concat([o.Z.COLLECTIBLES_PAYMENT_MODAL])),
                    m = p.analyticsLocations,
                    C = p.AnalyticsLocationProvider,
                    g = r.useRef(new l.qA),
                    A = D(r.useState(null), 2),
                    O = A[0],
                    S = A[1],
                    j = [d.WA, d.s2].concat(F(d.yp), [d.wo, {
                        key: s.h8.CONFIRM,
                        renderStep: function(e) {
                            return (0, a.jsx)(h, k(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        a = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))));
                                    a.forEach((function(t) {
                                        T(e, t, n[t])
                                    }))
                                }
                                return e
                            }({}, e), {
                                confettiCanvas: O,
                                analyticsLocations: m
                            }))
                        },
                        options: {
                            bodyClassName: P().modalOverrideBody,
                            sliderBodyClassName: P().modalOverrideSliderBody
                        }
                    }]);
                return (0, a.jsxs)(C, {
                    children: [(0, a.jsx)(l.O_, {
                        ref: S,
                        className: P().confettiCanvas,
                        environment: g.current
                    }), (0, a.jsx)(u.PaymentContextProvider, {
                        stepConfigs: j,
                        applicationId: x.XAJ,
                        skuIDs: [v],
                        activeSubscription: null,
                        purchaseType: N.GZ.ONE_TIME,
                        children: (0, a.jsx)(c.PaymentModal, {
                            onClose: t,
                            onComplete: n,
                            loadId: b,
                            applicationId: x.XAJ,
                            skuId: v,
                            initialPlanId: null,
                            analyticsLocations: m,
                            transitionState: f,
                            renderHeader: _,
                            hideShadow: !0
                        })
                    })]
                })
            }
        },
        852316: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            const a = [{
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
        947592: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            const a = [{
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