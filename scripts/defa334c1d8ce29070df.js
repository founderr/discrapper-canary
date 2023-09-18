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
        803039: (e, t, r) => {
            "use strict";
            r.r(t);
            r.d(t, {
                CollectiblesCollectedModalInner: () => _,
                default: () => R
            });
            var a = r(785893),
                n = r(667294),
                l = r(294184),
                o = r.n(l),
                i = r(652411),
                u = r(441143),
                s = r.n(u),
                c = r(318715),
                d = r(882723),
                f = r(735885),
                b = r(153686),
                v = r(19585),
                y = r(841379),
                p = r(995141),
                m = r(473903),
                C = r(349771),
                h = r(251288),
                g = r(4958);

            function A(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                return a
            }

            function O(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function S(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, a)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function j(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var a, n, l = [],
                            o = !0,
                            i = !1;
                        try {
                            for (r = r.call(e); !(o = (a = r.next()).done); o = !0) {
                                l.push(a.value);
                                if (t && l.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            n = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (i) throw n
                            }
                        }
                        return l
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

            function E(e) {
                return S(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            a = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        a.forEach((function(t) {
                            O(e, t, r[t])
                        }))
                    }
                    return e
                }({}, g.We), {
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
            const I = function(e) {
                var t = e.confettiTarget,
                    r = e.confettiCanvas,
                    l = e.sprites,
                    o = e.colors,
                    u = j(n.useState(null), 2),
                    s = u[0],
                    c = u[1],
                    d = (0, i.uR)(r, s),
                    f = j(n.useState(!1), 2),
                    b = f[0],
                    v = f[1];
                n.useEffect((function() {
                    var e = new Array(10).fill(0);
                    null != t && d.isReady && !b && (e = e.map((function(r, a) {
                        return setTimeout((function() {
                            a === e.length - 1 && v(!0);
                            d.createMultipleConfetti(E(t.getBoundingClientRect()), 50)
                        }), 100 * a)
                    })));
                    return function() {
                        var t = !0,
                            r = !1,
                            a = void 0;
                        try {
                            for (var n, l = e[Symbol.iterator](); !(t = (n = l.next()).done); t = !0) {
                                var o = n.value;
                                clearTimeout(o)
                            }
                        } catch (e) {
                            r = !0;
                            a = e
                        } finally {
                            try {
                                t || null == l.return || l.return()
                            } finally {
                                if (r) throw a
                            }
                        }
                    }
                }), [d, t, b]);
                return (0, a.jsx)(i.Ji, {
                    ref: c,
                    sprites: l,
                    colors: o,
                    spriteWidth: g.Ko,
                    spriteHeight: g.Ko
                })
            };
            var w = r(940594),
                x = r(584228),
                N = r(473708),
                M = r(311198),
                P = r.n(M),
                T = r(467874),
                D = r.n(T);

            function L(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                return a
            }

            function k(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var a, n, l = [],
                            o = !0,
                            i = !1;
                        try {
                            for (r = r.call(e); !(o = (a = r.next()).done); o = !0) {
                                l.push(a.value);
                                if (t && l.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            n = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (i) throw n
                            }
                        }
                        return l
                    }
                }(e, t) || F(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function B(e) {
                return function(e) {
                    if (Array.isArray(e)) return L(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || F(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function F(e, t) {
                if (e) {
                    if ("string" == typeof e) return L(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    return "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? L(e, t) : void 0
                }
            }
            var _ = function(e) {
                var t, r = e.product,
                    l = e.onClose,
                    o = e.confettiTarget,
                    i = e.confettiCanvas,
                    u = e.category,
                    g = e.analyticsLocations,
                    A = (0, x.Z)(u),
                    O = A.confettiColors,
                    S = A.confettiSprites,
                    j = A.backgroundColors,
                    E = A.buttonColors,
                    M = (0, c.ZP)([m.default], (function() {
                        var e = m.default.getCurrentUser();
                        s()(null != e, "User cannot be undefined");
                        return e
                    })),
                    T = null !== (t = r.items.find(h.M)) && void 0 !== t ? t : null,
                    L = (0, y.Z)({
                        user: M,
                        pendingAvatarDecoration: T,
                        size: (0, p.y9)(d.AvatarSizes.SIZE_120),
                        canAnimate: !0
                    }),
                    k = n.useRef(null),
                    F = (0, v.Z)(B(g).concat([b.Z.COLLECTIBLES_COLLECTED_MODAL])),
                    _ = F.analyticsLocations,
                    R = F.AnalyticsLocationProvider;
                return null == T ? null : (0, a.jsxs)(R, {
                    children: [(0, a.jsxs)("div", {
                        className: P().modalInner,
                        ref: k,
                        style: {
                            background: "linear-gradient(180deg, ".concat(j[0], ", ").concat(j[1], ")")
                        },
                        children: [(0, a.jsxs)("div", {
                            className: P().bannerContainer,
                            children: [(0, a.jsx)("img", {
                                src: (0, C.uV)(u.banner, {
                                    size: 440
                                }),
                                alt: r.name,
                                className: P().decorationBanner
                            }), (0, a.jsx)(d.Avatar, {
                                size: d.AvatarSizes.SIZE_120,
                                src: D(),
                                avatarDecoration: L,
                                className: P().avatarDecoration,
                                "aria-label": r.name
                            })]
                        }), (0, a.jsxs)("div", {
                            className: P().collectedInfoContainer,
                            children: [(0, a.jsxs)("div", {
                                className: P().collectedTextContainer,
                                children: [(0, a.jsx)(d.Heading, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    children: N.Z.Messages.COLLECTIBLES_YOU_COLLECTED.format({
                                        itemName: r.name
                                    })
                                }), (0, a.jsx)(d.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: N.Z.Messages.COLLECTIBLES_PERMANENT_COLLECTION
                                })]
                            }), (0, a.jsx)(d.Button, {
                                onClick: function() {
                                    l();
                                    (0, f.xf)();
                                    (0, p.ps)({
                                        initialSelectedDecoration: r.items.find(h.M),
                                        analyticsLocations: _
                                    })
                                },
                                style: {
                                    background: (0, w.Ch)(E)
                                },
                                children: N.Z.Messages.COLLECTIBLES_USE_NOW
                            })]
                        }), (0,
                            a.jsx)(d.ModalCloseButton, {
                            onClick: l,
                            className: P().modalCloseButton,
                            withCircleBackground: !0
                        })]
                    }), (0, a.jsx)(I, {
                        confettiTarget: null != o ? o : k.current,
                        confettiCanvas: i,
                        sprites: S,
                        colors: O
                    })]
                })
            };
            const R = function(e) {
                var t = e.transitionState,
                    r = e.product,
                    l = e.category,
                    u = e.onClose,
                    s = e.analyticsLocations,
                    c = n.useRef(new i.qA),
                    f = k(n.useState(null), 2),
                    b = f[0],
                    v = f[1];
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(i.O_, {
                        ref: v,
                        className: P().confettiCanvas,
                        environment: c.current
                    }), (0, a.jsx)(d.ModalRoot, {
                        transitionState: t,
                        size: d.ModalSize.DYNAMIC,
                        children: (0, a.jsx)(d.ModalContent, {
                            className: o()(P().modalInner, P().modalContentOverrides),
                            children: (0, a.jsx)(_, {
                                product: r,
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
        940594: (e, t, r) => {
            "use strict";
            r.d(t, {
                yV: () => a,
                IC: () => n,
                Ch: () => l
            });
            var a = 1060,
                n = function(e) {
                    return 3.8 * e
                },
                l = function(e) {
                    return "linear-gradient(to right, ".concat(e.join(", "), ")")
                }
        },
        584228: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => i
            });
            var a = r(389349),
                n = r(795308),
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
                    case a.T.FANTASY:
                        return {
                            backgroundColors: ["#146144", "#021A0E"], buttonColors: ["#028737", "#00694A"], confettiSprites: [r(406112), r(200309)], confettiColors: ["#EFA7F7", "#B646C1", "#56B3B3", "#1A8199", "#7160AF", "#AEC7FF"]
                        };
                    case a.T.ANIME:
                        return {
                            backgroundColors: ["#4B79B0", "#0F0E3A"], buttonColors: ["#8A45C1", "#136897"], confettiSprites: [r(954512), r(398015)], confettiColors: ["#2C9BD9", "#E46A80", "#FFE500", "#BBA8D5", "#3EDDD3", "#E2B761"]
                        };
                    case a.T.BREAKFAST:
                        return {
                            backgroundColors: ["#E8B26B", "#7A3A00"], buttonColors: ["#E8B14B", "#CD7527"], confettiSprites: [r(297206), r(578862)], confettiColors: ["#DD9C98", "#FFC037", "#FF6B00", "#FDE081", "#DD923E", "#FFEECC"]
                        };
                    case a.T.DISXCORE:
                        return {
                            backgroundColors: ["#732565", "#111D40"],
                                buttonColors: [n.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css, n.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css], confettiSprites: o, confettiColors: ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"]
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
            var a = r(785893),
                n = r(667294),
                l = r(652411),
                o = r(153686),
                i = r(19585),
                u = r(782786),
                s = r(83471),
                c = r(586611),
                d = r(545270),
                f = r(441143),
                b = r.n(f),
                v = r(318715),
                y = r(764797),
                p = r(803039),
                m = r(149096),
                C = r(328535);

            function h(e) {
                var t = e.handleClose,
                    r = e.confettiCanvas,
                    n = e.analyticsLocations,
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
                        confettiCanvas: r,
                        analyticsLocations: n
                    })]
                })
            }
            var g = r(882723),
                A = r(333568),
                O = r(297283),
                S = r(324003),
                j = r.n(S),
                E = r(82734),
                I = r.n(E),
                w = function(e) {
                    var t = e.step,
                        r = e.onClose,
                        n = (0, A.Z)(O.X);
                    return t === s.h8.CONFIRM || t === s.h8.BENEFITS ? (0, a.jsx)("div", {}) : (0, a.jsxs)("div", {
                        className: j().headerContainer,
                        children: [!n && (0, a.jsx)("div", {
                            className: j().headerImageContainer,
                            "aria-hidden": "true",
                            children: (0, a.jsx)("img", {
                                src: I(),
                                alt: "",
                                className: j().headerImage
                            })
                        }), (0, a.jsx)(g.ModalCloseButton, {
                            withCircleBackground: !0,
                            className: j().closeButton,
                            onClick: r
                        })]
                    })
                },
                x = r(2590),
                N = r(520453),
                M = r(446607),
                P = r.n(M);

            function T(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                return a
            }

            function D(e, t, r) {
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
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, a)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function k(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var a, n, l = [],
                            o = !0,
                            i = !1;
                        try {
                            for (r = r.call(e); !(o = (a = r.next()).done); o = !0) {
                                l.push(a.value);
                                if (t && l.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            n = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (i) throw n
                            }
                        }
                        return l
                    }
                }(e, t) || F(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function B(e) {
                return function(e) {
                    if (Array.isArray(e)) return T(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || F(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function F(e, t) {
                if (e) {
                    if ("string" == typeof e) return T(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    return "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? T(e, t) : void 0
                }
            }
            var _ = function(e, t, r) {
                return (0, a.jsx)(w, {
                    step: r,
                    onClose: function() {
                        return t(!1)
                    }
                })
            };

            function R(e) {
                var t = e.onClose,
                    r = e.onComplete,
                    f = e.transitionState,
                    b = e.loadId,
                    v = e.skuId,
                    y = e.analyticsLocations,
                    p = (0, i.Z)(B(y).concat([o.Z.COLLECTIBLES_PAYMENT_MODAL])),
                    m = p.analyticsLocations,
                    C = p.AnalyticsLocationProvider,
                    g = n.useRef(new l.qA),
                    A = k(n.useState(null), 2),
                    O = A[0],
                    S = A[1],
                    j = [d.WA, d.s2].concat(B(d.yp), [d.wo, {
                        key: s.h8.CONFIRM,
                        renderStep: function(e) {
                            return (0, a.jsx)(h, L(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        a = Object.keys(r);
                                    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                                    }))));
                                    a.forEach((function(t) {
                                        D(e, t, r[t])
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
                            onComplete: r,
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
        852316: (e, t, r) => {
            "use strict";
            r.d(t, {
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
        947592: (e, t, r) => {
            "use strict";
            r.d(t, {
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