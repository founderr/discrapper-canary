(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [10358, 3039], {
        715420: (e, t, r) => {
            e.exports = r.p + "19f094930b6fb657a372595f72ea08e2.png"
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
        999021: (e, t, r) => {
            e.exports = r.p + "e9b7161fd84bd2fe49ff137517f54a32.png"
        },
        398015: (e, t, r) => {
            e.exports = r.p + "47e70fb32fa1bac0984f0315d0ee37d8.png"
        },
        593098: (e, t, r) => {
            e.exports = r.p + "02d7bd754f28973b2be670fbe9951967.png"
        },
        747132: (e, t, r) => {
            e.exports = r.p + "bb9ab80d4608f897060a500eecd21244.png"
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
        974251: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => v
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                a = r.n(o),
                i = r(318715),
                c = r(242847),
                l = r(316878),
                u = r(362660),
                s = r(349771),
                f = r(940594),
                d = r(673665),
                p = r.n(d);

            function y(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        y(e, t, r[t])
                    }))
                }
                return e
            }

            function m(e, t) {
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
            const v = function(e) {
                var t = e.asset,
                    r = e.size,
                    o = void 0 === r ? f.yV : r,
                    d = e.className,
                    y = e.style,
                    v = e.children,
                    g = (0, i.ZP)([l.Z], (function() {
                        return l.Z.saturation
                    }));
                return (0, n.jsx)("div", {
                    className: a()(p().banner, d),
                    style: function() {
                        if (null == t) return y;
                        var e = (0, s.uV)(t, {
                            size: o
                        });
                        if (1 === g) return m(b({}, y), {
                            backgroundImage: "url(".concat(e, ")"),
                            backgroundSize: "cover"
                        });
                        var r = (0, u.aD)(c.ZP.unsafe_rawColors.BLACK_500, 1 - g);
                        return m(b({}, y), {
                            backgroundImage: "linear-gradient(".concat(r, ", ").concat(r, "), url(").concat(e, ")"),
                            backgroundBlendMode: "saturation",
                            backgroundSize: "cover"
                        })
                    }(),
                    children: v
                })
            }
        },
        803039: (e, t, r) => {
            "use strict";
            r.r(t);
            r.d(t, {
                CollectiblesCollectedModalInner: () => W,
                default: () => z
            });
            var n = r(785893),
                o = r(667294),
                a = r(294184),
                i = r.n(a),
                c = r(652411),
                l = r(441143),
                u = r.n(l),
                s = r(318715),
                f = r(70418),
                d = r(735885),
                p = r(316878),
                y = r(153686),
                b = r(19585),
                m = r(995141),
                v = r(501486),
                g = r(401080),
                O = r(357369),
                h = r(327453),
                C = r(473903),
                j = r(251288),
                S = r(8970),
                E = r(4958);

            function A(e, t) {
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

            function P(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, a = [],
                            i = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(i = (n = r.next()).done); i = !0) {
                                a.push(n.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                i || null == r.return || r.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return A(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return A(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function I(e) {
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
            const D = function(e) {
                var t = e.confettiTarget,
                    r = e.confettiCanvas,
                    a = e.sprites,
                    i = e.colors,
                    l = P(o.useState(null), 2),
                    u = l[0],
                    s = l[1],
                    f = (0, c.uR)(r, u),
                    d = P(o.useState(!1), 2),
                    p = d[0],
                    y = d[1];
                o.useEffect((function() {
                    var e = new Array(10).fill(0);
                    null != t && f.isReady && !p && (e = e.map((function(r, n) {
                        return setTimeout((function() {
                            n === e.length - 1 && y(!0);
                            f.createMultipleConfetti(I(t.getBoundingClientRect()), 50)
                        }), 100 * n)
                    })));
                    return function() {
                        var t = !0,
                            r = !1,
                            n = void 0;
                        try {
                            for (var o, a = e[Symbol.iterator](); !(t = (o = a.next()).done); t = !0) {
                                var i = o.value;
                                clearTimeout(i)
                            }
                        } catch (e) {
                            r = !0;
                            n = e
                        } finally {
                            try {
                                t || null == a.return || a.return()
                            } finally {
                                if (r) throw n
                            }
                        }
                    }
                }), [f, t, p]);
                return (0, n.jsx)(c.Ji, {
                    ref: s,
                    sprites: null != a ? a : E.CA,
                    colors: null != i ? i : E.Br,
                    spriteWidth: E.Ko,
                    spriteHeight: E.Ko
                })
            };
            var k = r(974251),
                T = r(940594),
                N = r(584228),
                F = r(473708),
                L = r(731312),
                _ = r.n(L),
                M = r(906146),
                Z = r.n(M);

            function B(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function R(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, a = [],
                            i = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(i = (n = r.next()).done); i = !0) {
                                a.push(n.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                i || null == r.return || r.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || U(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function H(e) {
                return function(e) {
                    if (Array.isArray(e)) return B(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || U(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function U(e, t) {
                if (e) {
                    if ("string" == typeof e) return B(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    return "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? B(e, t) : void 0
                }
            }
            var W = function(e) {
                var t, r, a = e.product,
                    i = e.onClose,
                    c = e.confettiTarget,
                    l = e.confettiCanvas,
                    E = e.category,
                    A = e.analyticsLocations,
                    x = (0, N.Z)(E),
                    w = x.confettiColors,
                    P = x.confettiSprites,
                    I = x.backgroundColors,
                    L = x.buttonColors,
                    M = (0, s.ZP)([C.default], (function() {
                        var e = C.default.getCurrentUser();
                        u()(null != e, "User cannot be undefined");
                        return e
                    })),
                    B = (0, s.ZP)([p.Z], (function() {
                        return p.Z.useReducedMotion
                    })),
                    R = null !== (t = a.items.find(j.M)) && void 0 !== t ? t : null,
                    U = null !== (r = a.items.find(S.H)) && void 0 !== r ? r : null,
                    W = (0, v.Z)({
                        user: M,
                        avatarDecorationOverride: R,
                        size: (0, m.y9)(f.AvatarSizes.SIZE_120)
                    }).avatarDecorationSrc,
                    z = o.useRef(null),
                    V = (0, b.Z)(H(A).concat([y.Z.COLLECTIBLES_COLLECTED_MODAL])),
                    Y = V.analyticsLocations,
                    K = V.AnalyticsLocationProvider,
                    G = (0, g.Z)({
                        analyticsLocations: Y
                    });
                return null == R && null == U ? null : (0, n.jsxs)(K, {
                    children: [(0, n.jsxs)("div", {
                        className: _().modalInner,
                        ref: z,
                        style: null != I ? {
                            background: (0, T.nH)(I)
                        } : void 0,
                        children: [(0, n.jsxs)("div", {
                            className: _().bannerContainer,
                            children: [(0, n.jsx)(k.Z, {
                                asset: E.banner,
                                size: 440,
                                className: _().decorationBanner
                            }), null != R && (0, n.jsx)(f.Avatar, {
                                size: f.AvatarSizes.SIZE_120,
                                src: Z(),
                                avatarDecoration: W,
                                className: _().avatarDecoration,
                                "aria-label": a.name
                            }), null != U && (0, n.jsx)("div", {
                                className: _().profileEffectShopPreview,
                                children: (0, n.jsx)(O.Z, {
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
                                    children: F.Z.Messages.COLLECTIBLES_YOU_COLLECTED.format({
                                        itemName: a.name
                                    })
                                }), (0, n.jsx)(f.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: null != U ? F.Z.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : F.Z.Messages.COLLECTIBLES_PERMANENT_COLLECTION
                                })]
                            }), (0, n.jsx)(f.Button, {
                                onClick: function() {
                                    i();
                                    (0, d.xf)();
                                    G();
                                    null != R ? (0, m.ps)({
                                        initialSelectedDecoration: a.items.find(j.M),
                                        analyticsLocations: Y
                                    }) : null != U && (0, h.H)({
                                        analyticsLocations: Y,
                                        initialSelectedEffectID: null == U ? void 0 : U.id
                                    })
                                },
                                style: null != L ? {
                                    background: (0, T.nH)(L, 90)
                                } : void 0,
                                children: F.Z.Messages.COLLECTIBLES_USE_NOW
                            })]
                        }), (0, n.jsx)(f.ModalCloseButton, {
                            onClick: i,
                            className: _().modalCloseButton,
                            withCircleBackground: !0
                        })]
                    }), !B && (0, n.jsx)(D, {
                        confettiTarget: null != c ? c : z.current,
                        confettiCanvas: l,
                        sprites: P,
                        colors: w
                    })]
                })
            };
            const z = function(e) {
                var t = e.transitionState,
                    r = e.product,
                    a = e.category,
                    l = e.onClose,
                    u = e.analyticsLocations,
                    s = o.useRef(new c.qA),
                    d = R(o.useState(null), 2),
                    p = d[0],
                    y = d[1];
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(c.O_, {
                        ref: y,
                        className: _().confettiCanvas,
                        environment: s.current
                    }), (0, n.jsx)(f.ModalRoot, {
                        transitionState: t,
                        size: f.ModalSize.DYNAMIC,
                        children: (0, n.jsx)(f.ModalContent, {
                            className: i()(_().modalInner, _().modalContentOverrides),
                            children: (0, n.jsx)(W, {
                                product: r,
                                category: a,
                                onClose: l,
                                confettiCanvas: p,
                                analyticsLocations: u
                            })
                        })
                    })]
                })
            }
        },
        940594: (e, t, r) => {
            "use strict";
            r.d(t, {
                IC: () => o,
                nH: () => a,
                yV: () => n
            });
            var n = 1060,
                o = function(e) {
                    return 3.8 * e
                },
                a = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
                        r = e.primary,
                        n = e.secondary;
                    return "linear-gradient(".concat(t, "deg, ").concat(r.toHslString(), ", ").concat(n.toHslString(), ")")
                }
        },
        584228: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => S
            });
            var n = r(717621),
                o = r.n(n),
                a = r(389349),
                i = r(318715),
                c = r(795308),
                l = r(316878),
                u = r(265022),
                s = r(4958);

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function d(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function p(e, t) {
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

            function y(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, a = [],
                            i = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(i = (n = r.next()).done); i = !0) {
                                a.push(n.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                i || null == r.return || r.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return f(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return f(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var b, m = o()(c.Z.unsafe_rawColors.WHITE_500.resolve({
                    saturation: 1
                }).hex()),
                v = o()(c.Z.unsafe_rawColors.BLACK_500.resolve({
                    saturation: 1
                }).hex()),
                g = function(e, t) {
                    var r = e.toRgb(),
                        n = t.toRgb(),
                        a = y((0, u.J2)([r.r, r.g, r.b], [n.r, n.g, n.b], 50), 3),
                        i = a[0],
                        c = a[1],
                        l = a[2];
                    return o()({
                        r: i,
                        g: c,
                        b: l
                    })
                },
                O = function(e, t) {
                    var r = o()(e),
                        n = o()(t);
                    return {
                        primary: r,
                        secondary: n,
                        border: g(r, n).setAlpha(.4)
                    }
                },
                h = function(e, t) {
                    var r = o()(e),
                        n = o()(t),
                        a = g(r, n);
                    return {
                        primary: r,
                        secondary: n,
                        text: o()(a.isLight() ? v : m)
                    }
                },
                C = function(e, t) {
                    var r = e.toHsl(),
                        n = r.h,
                        a = r.s,
                        i = r.l;
                    return o()({
                        h: n,
                        s: a * t,
                        l: i
                    })
                },
                j = (d(b = {}, a.T.FANTASY, {
                    backgroundColors: O("#146144", "#021A0E"),
                    buttonColors: h("#028737", "#00694A"),
                    confettiSprites: [r(406112), r(200309)],
                    confettiColors: ["#EFA7F7", "#B646C1", "#56B3B3", "#1A8199", "#7160AF", "#AEC7FF"]
                }), d(b, a.T.ANIME, {
                    backgroundColors: O("#4B79B0", "#0F0E3A"),
                    buttonColors: h("#8A45C1", "#136897"),
                    confettiSprites: [r(954512), r(398015)],
                    confettiColors: ["#2C9BD9", "#E46A80", "#FFE500", "#BBA8D5", "#3EDDD3", "#E2B761"]
                }), d(b, a.T.BREAKFAST, {
                    backgroundColors: O("#E8B26B", "#7A3A00"),
                    buttonColors: h("#FFC355", "#FF9537"),
                    confettiSprites: [r(297206), r(578862)],
                    confettiColors: ["#DD9C98", "#FFC037", "#FF6B00", "#FDE081", "#DD923E", "#FFEECC"]
                }), d(b, a.T.DISXCORE, {
                    backgroundColors: O("#732565", "#111D40"),
                    buttonColors: h(c.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.resolve({
                        saturation: 1
                    }).hex(), c.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.resolve({
                        saturation: 1
                    }).hex()),
                    confettiSprites: s.CA.filter((function(e, t) {
                        return 1 !== t && 7 !== t
                    })),
                    confettiColors: ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"]
                }), d(b, a.T.HALLOWEEN, {
                    backgroundColors: O("#5280DC", "#060F25"),
                    buttonColors: h("#496BDB", "#3E41B5"),
                    confettiSprites: [r(747132), r(593098)],
                    confettiColors: ["#EE5619", "#FDBE44", "#42D612", "#DC0DDE", "#8A0AE5"]
                }), d(b, a.T.FALL, {
                    backgroundColors: O("#FFC267", "#6C1A00"),
                    buttonColors: h("#F5A142", "#E4760E"),
                    confettiSprites: [r(999021), r(715420)],
                    confettiColors: ["#FF7138", "#92360C", "#F6A334", "#FFC586", "#FF8A00"]
                }), b);
            const S = function(e) {
                var t = (0, i.ZP)([l.Z], (function() {
                    return l.Z.saturation
                }));
                if (null == e) return {};
                var r = j[e.skuId];
                return null == (null == r ? void 0 : r.backgroundColors) || 1 === t ? null != r ? r : {} : p(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            d(e, t, r[t])
                        }))
                    }
                    return e
                }({}, r), {
                    backgroundColors: {
                        primary: C(r.backgroundColors.primary, t),
                        secondary: C(r.backgroundColors.secondary, t),
                        border: C(r.backgroundColors.border, t)
                    },
                    buttonColors: {
                        primary: C(r.buttonColors.primary, t),
                        secondary: C(r.buttonColors.secondary, t),
                        text: r.buttonColors.text
                    },
                    confettiColors: r.confettiColors.map((function(e) {
                        return C(o()(e), t).toHexString()
                    }))
                })
            }
        },
        910358: (e, t, r) => {
            "use strict";
            r.r(t);
            r.d(t, {
                default: () => B
            });
            var n = r(785893),
                o = r(667294),
                a = r(652411),
                i = r(153686),
                c = r(19585),
                l = r(782786),
                u = r(83471),
                s = r(586611),
                f = r(545270),
                d = r(441143),
                p = r.n(d),
                y = r(318715),
                b = r(764797),
                m = r(803039),
                v = r(149096),
                g = r(328535);

            function O(e) {
                var t = e.handleClose,
                    r = e.confettiCanvas,
                    o = e.analyticsLocations,
                    a = (0, l.usePaymentContext)(),
                    i = a.skusById,
                    c = a.selectedSkuId,
                    u = a.application,
                    s = (0, y.cj)([b.Z], (function() {
                        return {
                            product: b.Z.getProduct(c),
                            category: b.Z.getCategoryForProduct(c)
                        }
                    })),
                    f = s.product,
                    d = s.category;
                p()(null != c, "Expected selectedSkuId");
                p()(null != u, "Expected application");
                var O = i[c];
                p()(null != O, "Expected sku");
                return null == d || null == f ? null : (0, n.jsxs)(v.C3, {
                    children: [(0, n.jsx)(g.Z, {}), (0, n.jsx)(m.CollectiblesCollectedModalInner, {
                        product: f,
                        category: d,
                        onClose: t,
                        confettiCanvas: r,
                        analyticsLocations: o
                    })]
                })
            }
            var h = r(70418),
                C = r(333568),
                j = r(297283),
                S = r(290284),
                E = r.n(S),
                A = r(82734),
                x = r.n(A),
                w = function(e) {
                    var t = e.step,
                        r = e.onClose,
                        o = (0, C.Z)(j.X);
                    return t === u.h8.CONFIRM || t === u.h8.BENEFITS ? (0, n.jsx)("div", {}) : (0, n.jsxs)("div", {
                        className: E().headerContainer,
                        children: [!o && (0, n.jsx)("div", {
                            className: E().headerImageContainer,
                            "aria-hidden": "true",
                            "data-accessibility": "desaturate",
                            children: (0, n.jsx)("img", {
                                src: x(),
                                alt: "",
                                className: E().headerImage
                            })
                        }), (0, n.jsx)(h.ModalCloseButton, {
                            withCircleBackground: !0,
                            className: E().closeButton,
                            onClick: r
                        })]
                    })
                },
                P = r(2590),
                I = r(520453),
                D = r(161577),
                k = r.n(D);

            function T(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function N(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function F(e, t) {
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
                        var n, o, a = [],
                            i = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(i = (n = r.next()).done); i = !0) {
                                a.push(n.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                i || null == r.return || r.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || M(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _(e) {
                return function(e) {
                    if (Array.isArray(e)) return T(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || M(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function M(e, t) {
                if (e) {
                    if ("string" == typeof e) return T(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    return "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? T(e, t) : void 0
                }
            }
            var Z = function(e, t, r) {
                return (0, n.jsx)(w, {
                    step: r,
                    onClose: function() {
                        return t(!1)
                    }
                })
            };

            function B(e) {
                var t = e.onClose,
                    r = e.onComplete,
                    d = e.transitionState,
                    p = e.loadId,
                    y = e.skuId,
                    b = e.analyticsLocations,
                    m = e.returnRef,
                    v = (0, c.Z)(_(b).concat([i.Z.COLLECTIBLES_PAYMENT_MODAL])),
                    g = v.analyticsLocations,
                    h = v.AnalyticsLocationProvider,
                    C = o.useRef(new a.qA),
                    j = L(o.useState(null), 2),
                    S = j[0],
                    E = j[1],
                    A = [f.WA, f.s2].concat(_(f.yp), [f.wo, {
                        key: u.h8.CONFIRM,
                        renderStep: function(e) {
                            return (0, n.jsx)(O, F(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                                    }))));
                                    n.forEach((function(t) {
                                        N(e, t, r[t])
                                    }))
                                }
                                return e
                            }({}, e), {
                                confettiCanvas: S,
                                analyticsLocations: g
                            }))
                        },
                        options: {
                            bodyClassName: k().modalOverrideBody,
                            sliderBodyClassName: k().modalOverrideSliderBody
                        }
                    }]);
                return (0, n.jsxs)(h, {
                    children: [(0, n.jsx)(a.O_, {
                        ref: E,
                        className: k().confettiCanvas,
                        environment: C.current
                    }), (0, n.jsx)(l.PaymentContextProvider, {
                        stepConfigs: A,
                        applicationId: P.XAJ,
                        skuIDs: [y],
                        activeSubscription: null,
                        purchaseType: I.GZ.ONE_TIME,
                        children: (0, n.jsx)(s.PaymentModal, {
                            onClose: t,
                            onComplete: r,
                            loadId: p,
                            applicationId: P.XAJ,
                            skuId: y,
                            initialPlanId: null,
                            analyticsLocations: g,
                            transitionState: d,
                            renderHeader: Z,
                            returnRef: m,
                            hideShadow: !0
                        })
                    })]
                })
            }
        },
        545270: (e, t, r) => {
            "use strict";
            r.d(t, {
                s2: () => A,
                F7: () => I,
                WA: () => E,
                wo: () => P,
                yp: () => D
            });
            var n = r(785893),
                o = (r(667294), r(711531)),
                a = r(83471),
                i = r(986304),
                c = r(493957),
                l = r(806706),
                u = r(441143),
                s = r.n(u),
                f = r(70418),
                d = r(782786),
                p = r(328535),
                y = r(149096),
                b = r(473708),
                m = r(819779),
                v = r.n(m);

            function g(e) {
                var t = e.handleClose,
                    r = (0, d.usePaymentContext)(),
                    o = r.skusById,
                    a = r.selectedSkuId,
                    i = r.application;
                s()(null != a, "Expected selectedSkuId");
                s()(null != i, "Expected application");
                var c = o[a];
                s()(null != c, "Expected sku");
                var l = b.Z.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
                    applicationName: i.name,
                    itemName: c.name
                });
                return (0, n.jsxs)(y.C3, {
                    children: [(0, n.jsx)(p.Z, {}), (0, n.jsxs)("div", {
                        className: v().confirmation,
                        children: [(0, n.jsx)(f.Heading, {
                            variant: "heading-xxl/bold",
                            className: v().confirmationHeader,
                            children: "Success!"
                        }), (0, n.jsx)(f.Text, {
                            variant: "text-md/normal",
                            children: l
                        }), (0, n.jsx)("div", {
                            className: v().divider
                        }), (0, n.jsx)(f.Button, {
                            onClick: t,
                            children: b.Z.Messages.CLOSE
                        })]
                    })]
                })
            }
            var O = r(366366),
                h = r(964255);

            function C(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function j(e) {
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
            var E = {
                    key: null,
                    renderStep: function(e) {
                        return (0, n.jsx)(h.v, j({}, e))
                    }
                },
                A = {
                    key: a.h8.ADD_PAYMENT_STEPS,
                    renderStep: function(e) {
                        return (0, n.jsx)(n.Fragment, {
                            children: (0, n.jsx)(i.J, S(j({}, e), {
                                breadcrumbSteps: [a.h8.ADD_PAYMENT_STEPS, a.h8.REVIEW, a.h8.CONFIRM],
                                onReturn: function() {
                                    var t = o.Z.paymentSources;
                                    0 === Object.keys(t).length ? e.handleClose() : e.handleStepChange(a.h8.REVIEW, {
                                        trackedFromStep: a.h8.ADD_PAYMENT_STEPS
                                    })
                                }
                            }))
                        })
                    },
                    options: {
                        renderHeader: !0
                    }
                },
                x = {
                    key: a.h8.AWAITING_PURCHASE_TOKEN_AUTH,
                    renderStep: function() {
                        return (0, n.jsx)(l.Z, {})
                    }
                },
                w = {
                    key: a.h8.AWAITING_AUTHENTICATION,
                    renderStep: function() {
                        return (0, n.jsx)(c.Z, {})
                    }
                },
                P = {
                    key: a.h8.REVIEW,
                    renderStep: function(e) {
                        return (0, n.jsx)(O.l, j({}, e))
                    }
                },
                I = {
                    key: a.h8.CONFIRM,
                    renderStep: function(e) {
                        return (0, n.jsx)(g, j({}, e))
                    }
                },
                D = [x, w]
        },
        357369: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => m
            });
            var n = r(785893),
                o = r(667294),
                a = r(294184),
                i = r.n(a),
                c = r(934608),
                l = r(753251),
                u = r(146967),
                s = r.n(u),
                f = r(563163),
                d = r.n(f);

            function p(e, t) {
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

            function b(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, a = [],
                            i = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(i = (n = r.next()).done); i = !0) {
                                a.push(n.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                i || null == r.return || r.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return p(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const m = function(e) {
                var t = e.profileEffectId,
                    r = e.isHovering,
                    a = e.forCollectedModal,
                    u = void 0 !== a && a,
                    f = e.isPurchased,
                    p = u ? 250 : .1,
                    m = b(o.useState(!0), 2),
                    v = m[0],
                    g = m[1];
                o.useEffect((function() {
                    if (!0 === u) {
                        var e = setTimeout((function() {
                            g(!1)
                        }), p);
                        return function() {
                            clearTimeout(e)
                        }
                    }
                    g(!1)
                }), [p, u]);
                return null != t ? (0, n.jsxs)("div", {
                    className: i()(s().previewContainer, y({}, s().previewContainerAnimation, u)),
                    children: [(0, n.jsx)("img", {
                        src: d(),
                        alt: " ",
                        className: u ? s().previewForCollected : s().preview,
                        "aria-hidden": !0
                    }), !v && (0, n.jsx)("div", {
                        className: f ? s().purchasedEffect : void 0,
                        children: (0, n.jsx)(l.Z, {
                            profileEffectID: t,
                            useThumbnail: !0,
                            autoPlay: u,
                            restartMethod: c.j.FromStart,
                            resetOnHover: !0,
                            isHovering: r,
                            introDelay: p,
                            useOpacityOnHover: !1
                        })
                    })]
                }) : null
            }
        }
    }
]);