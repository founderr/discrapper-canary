(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [10358, 3039], {
        82734: (e, t, n) => {
            e.exports = n.p + "4f35fac7a0ff1e82a2a869bd9725f1d7.png"
        },
        803039: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                CollectiblesCollectedModalInner: () => W,
                default: () => z
            });
            var r = n(785893),
                o = n(667294),
                a = n(294184),
                i = n.n(a),
                l = n(652411),
                c = n(441143),
                s = n.n(c),
                u = n(318715),
                d = n(70418),
                f = n(735885),
                y = n(316878),
                p = n(153686),
                b = n(19585),
                m = n(995141),
                v = n(501486),
                h = n(401080),
                O = n(357369),
                j = n(327453),
                C = n(473903),
                g = n(251288),
                S = n(8970),
                x = n(4958);

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function I(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function w(e, t) {
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

            function P(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, a = [],
                            i = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return E(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function A(e) {
                return w(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            I(e, t, n[t])
                        }))
                    }
                    return e
                }({}, x.We), {
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
            const N = function(e) {
                var t = e.confettiTarget,
                    n = e.confettiCanvas,
                    a = e.sprites,
                    i = e.colors,
                    c = P(o.useState(null), 2),
                    s = c[0],
                    u = c[1],
                    d = (0, l.uR)(n, s),
                    f = P(o.useState(!1), 2),
                    y = f[0],
                    p = f[1];
                o.useEffect((function() {
                    var e = new Array(10).fill(0);
                    null != t && d.isReady && !y && (e = e.map((function(n, r) {
                        return setTimeout((function() {
                            r === e.length - 1 && p(!0);
                            d.createMultipleConfetti(A(t.getBoundingClientRect()), 50)
                        }), 100 * r)
                    })));
                    return function() {
                        var t = !0,
                            n = !1,
                            r = void 0;
                        try {
                            for (var o, a = e[Symbol.iterator](); !(t = (o = a.next()).done); t = !0) {
                                var i = o.value;
                                clearTimeout(i)
                            }
                        } catch (e) {
                            n = !0;
                            r = e
                        } finally {
                            try {
                                t || null == a.return || a.return()
                            } finally {
                                if (n) throw r
                            }
                        }
                    }
                }), [d, t, y]);
                return (0, r.jsx)(l.Ji, {
                    ref: u,
                    sprites: null != a ? a : x.CA,
                    colors: null != i ? i : x.Br,
                    spriteWidth: x.Ko,
                    spriteHeight: x.Ko
                })
            };
            var L = n(974251),
                T = n(940594),
                k = n(584228),
                M = n(473708),
                D = n(731312),
                _ = n.n(D),
                Z = n(906146),
                B = n.n(Z);

            function R(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function F(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, a = [],
                            i = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (l) throw o
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
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? R(e, t) : void 0
                }
            }
            var W = function(e) {
                var t, n, a = e.product,
                    i = e.onClose,
                    l = e.confettiTarget,
                    c = e.confettiCanvas,
                    x = e.category,
                    E = e.analyticsLocations,
                    I = (0, k.Z)(x),
                    w = I.confettiColors,
                    P = I.confettiSprites,
                    A = I.backgroundColors,
                    D = I.buttonColors,
                    Z = (0, u.ZP)([C.default], (function() {
                        var e = C.default.getCurrentUser();
                        s()(null != e, "User cannot be undefined");
                        return e
                    })),
                    R = (0, u.ZP)([y.Z], (function() {
                        return y.Z.useReducedMotion
                    })),
                    F = null !== (t = a.items.find(g.M)) && void 0 !== t ? t : null,
                    U = null !== (n = a.items.find(S.H)) && void 0 !== n ? n : null,
                    W = (0, v.Z)({
                        user: Z,
                        avatarDecorationOverride: F,
                        size: (0, m.y9)(d.AvatarSizes.SIZE_120)
                    }).avatarDecorationSrc,
                    z = o.useRef(null),
                    V = (0, b.Z)(H(E).concat([p.Z.COLLECTIBLES_COLLECTED_MODAL])),
                    Y = V.analyticsLocations,
                    J = V.AnalyticsLocationProvider,
                    G = (0, h.Z)({
                        analyticsLocations: Y
                    });
                return null == F && null == U ? null : (0, r.jsxs)(J, {
                    children: [(0, r.jsxs)("div", {
                        className: _().modalInner,
                        ref: z,
                        style: null != A ? {
                            background: (0, T.nH)(A)
                        } : void 0,
                        children: [(0, r.jsxs)("div", {
                            className: _().bannerContainer,
                            children: [(0, r.jsx)(L.Z, {
                                asset: x.banner,
                                size: 440,
                                className: _().decorationBanner
                            }), null != F && (0, r.jsx)(d.Avatar, {
                                size: d.AvatarSizes.SIZE_120,
                                src: B(),
                                avatarDecoration: W,
                                className: _().avatarDecoration,
                                "aria-label": a.name
                            }), null != U && (0, r.jsx)("div", {
                                className: _().profileEffectShopPreview,
                                children: (0, r.jsx)(O.Z, {
                                    forCollectedModal: !0,
                                    profileEffectId: null == U ? void 0 : U.id
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: _().collectedInfoContainer,
                            children: [(0, r.jsxs)("div", {
                                className: _().collectedTextContainer,
                                children: [(0, r.jsx)(d.Heading, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    children: M.Z.Messages.COLLECTIBLES_YOU_COLLECTED.format({
                                        itemName: a.name
                                    })
                                }), (0, r.jsx)(d.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: null != U ? M.Z.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : M.Z.Messages.COLLECTIBLES_PERMANENT_COLLECTION
                                })]
                            }), (0, r.jsx)(d.Button, {
                                onClick: function() {
                                    i();
                                    (0, f.xf)();
                                    G();
                                    null != F ? (0, m.ps)({
                                        initialSelectedDecoration: a.items.find(g.M),
                                        analyticsLocations: Y
                                    }) : null != U && (0, j.H)({
                                        analyticsLocations: Y,
                                        initialSelectedEffectID: null == U ? void 0 : U.id
                                    })
                                },
                                style: null != D ? {
                                    background: (0, T.nH)(D, 90)
                                } : void 0,
                                children: M.Z.Messages.COLLECTIBLES_USE_NOW
                            })]
                        }), (0, r.jsx)(d.ModalCloseButton, {
                            onClick: i,
                            className: _().modalCloseButton,
                            withCircleBackground: !0
                        })]
                    }), !R && (0, r.jsx)(N, {
                        confettiTarget: null != l ? l : z.current,
                        confettiCanvas: c,
                        sprites: P,
                        colors: w
                    })]
                })
            };
            const z = function(e) {
                var t = e.transitionState,
                    n = e.product,
                    a = e.category,
                    c = e.onClose,
                    s = e.analyticsLocations,
                    u = o.useRef(new l.qA),
                    f = F(o.useState(null), 2),
                    y = f[0],
                    p = f[1];
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(l.O_, {
                        ref: p,
                        className: _().confettiCanvas,
                        environment: u.current
                    }), (0, r.jsx)(d.ModalRoot, {
                        transitionState: t,
                        size: d.ModalSize.DYNAMIC,
                        children: (0, r.jsx)(d.ModalContent, {
                            className: i()(_().modalInner, _().modalContentOverrides),
                            children: (0, r.jsx)(W, {
                                product: n,
                                category: a,
                                onClose: c,
                                confettiCanvas: y,
                                analyticsLocations: s
                            })
                        })
                    })]
                })
            }
        },
        910358: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => R
            });
            var r = n(785893),
                o = n(667294),
                a = n(652411),
                i = n(153686),
                l = n(19585),
                c = n(782786),
                s = n(83471),
                u = n(586611),
                d = n(545270),
                f = n(441143),
                y = n.n(f),
                p = n(318715),
                b = n(764797),
                m = n(803039),
                v = n(149096),
                h = n(328535);

            function O(e) {
                var t = e.handleClose,
                    n = e.confettiCanvas,
                    o = e.analyticsLocations,
                    a = (0, c.usePaymentContext)(),
                    i = a.skusById,
                    l = a.selectedSkuId,
                    s = a.application,
                    u = (0, p.cj)([b.Z], (function() {
                        return {
                            product: b.Z.getProduct(l),
                            category: b.Z.getCategoryForProduct(l)
                        }
                    })),
                    d = u.product,
                    f = u.category;
                y()(null != l, "Expected selectedSkuId");
                y()(null != s, "Expected application");
                var O = i[l];
                y()(null != O, "Expected sku");
                return null == f || null == d ? null : (0, r.jsxs)(v.C3, {
                    children: [(0, r.jsx)(h.Z, {}), (0, r.jsx)(m.CollectiblesCollectedModalInner, {
                        product: d,
                        category: f,
                        onClose: t,
                        confettiCanvas: n,
                        analyticsLocations: o
                    })]
                })
            }
            var j = n(70418),
                C = n(333568),
                g = n(297283),
                S = n(290284),
                x = n.n(S),
                E = n(82734),
                I = n.n(E),
                w = function(e) {
                    var t = e.step,
                        n = e.onClose,
                        o = (0, C.Z)(g.X);
                    return t === s.h8.CONFIRM || t === s.h8.BENEFITS ? (0, r.jsx)("div", {}) : (0, r.jsxs)("div", {
                        className: x().headerContainer,
                        children: [!o && (0, r.jsx)("div", {
                            className: x().headerImageContainer,
                            "aria-hidden": "true",
                            "data-accessibility": "desaturate",
                            children: (0, r.jsx)("img", {
                                src: I(),
                                alt: "",
                                className: x().headerImage
                            })
                        }), (0, r.jsx)(j.ModalCloseButton, {
                            withCircleBackground: !0,
                            className: x().closeButton,
                            onClick: n
                        })]
                    })
                },
                P = n(2590),
                A = n(520453),
                N = n(161577),
                L = n.n(N);

            function T(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function k(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function M(e, t) {
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

            function D(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, a = [],
                            i = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || Z(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _(e) {
                return function(e) {
                    if (Array.isArray(e)) return T(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || Z(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Z(e, t) {
                if (e) {
                    if ("string" == typeof e) return T(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? T(e, t) : void 0
                }
            }
            var B = function(e, t, n) {
                return (0, r.jsx)(w, {
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
                    y = e.loadId,
                    p = e.skuId,
                    b = e.analyticsLocations,
                    m = e.returnRef,
                    v = (0, l.Z)(_(b).concat([i.Z.COLLECTIBLES_PAYMENT_MODAL])),
                    h = v.analyticsLocations,
                    j = v.AnalyticsLocationProvider,
                    C = o.useRef(new a.qA),
                    g = D(o.useState(null), 2),
                    S = g[0],
                    x = g[1],
                    E = [d.WA, d.s2].concat(_(d.yp), [d.wo, {
                        key: s.h8.CONFIRM,
                        renderStep: function(e) {
                            return (0, r.jsx)(O, M(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))));
                                    r.forEach((function(t) {
                                        k(e, t, n[t])
                                    }))
                                }
                                return e
                            }({}, e), {
                                confettiCanvas: S,
                                analyticsLocations: h
                            }))
                        },
                        options: {
                            bodyClassName: L().modalOverrideBody,
                            sliderBodyClassName: L().modalOverrideSliderBody
                        }
                    }]);
                return (0, r.jsxs)(j, {
                    children: [(0, r.jsx)(a.O_, {
                        ref: x,
                        className: L().confettiCanvas,
                        environment: C.current
                    }), (0, r.jsx)(c.PaymentContextProvider, {
                        stepConfigs: E,
                        applicationId: P.XAJ,
                        skuIDs: [p],
                        activeSubscription: null,
                        purchaseType: A.GZ.ONE_TIME,
                        children: (0, r.jsx)(u.PaymentModal, {
                            onClose: t,
                            onComplete: n,
                            loadId: y,
                            applicationId: P.XAJ,
                            skuId: p,
                            initialPlanId: null,
                            analyticsLocations: h,
                            transitionState: f,
                            renderHeader: B,
                            returnRef: m,
                            hideShadow: !0
                        })
                    })]
                })
            }
        },
        545270: (e, t, n) => {
            "use strict";
            n.d(t, {
                s2: () => E,
                F7: () => A,
                WA: () => x,
                wo: () => P,
                yp: () => N
            });
            var r = n(785893),
                o = (n(667294),
                    n(711531)),
                a = n(83471),
                i = n(986304),
                l = n(493957),
                c = n(806706),
                s = n(441143),
                u = n.n(s),
                d = n(70418),
                f = n(782786),
                y = n(328535),
                p = n(149096),
                b = n(473708),
                m = n(819779),
                v = n.n(m);

            function h(e) {
                var t = e.handleClose,
                    n = (0, f.usePaymentContext)(),
                    o = n.skusById,
                    a = n.selectedSkuId,
                    i = n.application;
                u()(null != a, "Expected selectedSkuId");
                u()(null != i, "Expected application");
                var l = o[a];
                u()(null != l, "Expected sku");
                var c = b.Z.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
                    applicationName: i.name,
                    itemName: l.name
                });
                return (0, r.jsxs)(p.C3, {
                    children: [(0, r.jsx)(y.Z, {}), (0, r.jsxs)("div", {
                        className: v().confirmation,
                        children: [(0, r.jsx)(d.Heading, {
                            variant: "heading-xxl/bold",
                            className: v().confirmationHeader,
                            children: "Success!"
                        }), (0, r.jsx)(d.Text, {
                            variant: "text-md/normal",
                            children: c
                        }), (0, r.jsx)("div", {
                            className: v().divider
                        }), (0, r.jsx)(d.Button, {
                            onClick: t,
                            children: b.Z.Messages.CLOSE
                        })]
                    })]
                })
            }
            var O = n(366366),
                j = n(964255);

            function C(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        C(e, t, n[t])
                    }))
                }
                return e
            }

            function S(e, t) {
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
            var x = {
                    key: null,
                    renderStep: function(e) {
                        return (0, r.jsx)(j.v, g({}, e))
                    }
                },
                E = {
                    key: a.h8.ADD_PAYMENT_STEPS,
                    renderStep: function(e) {
                        return (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)(i.J, S(g({}, e), {
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
                I = {
                    key: a.h8.AWAITING_PURCHASE_TOKEN_AUTH,
                    renderStep: function() {
                        return (0, r.jsx)(c.Z, {})
                    }
                },
                w = {
                    key: a.h8.AWAITING_AUTHENTICATION,
                    renderStep: function() {
                        return (0, r.jsx)(l.Z, {})
                    }
                },
                P = {
                    key: a.h8.REVIEW,
                    renderStep: function(e) {
                        return (0, r.jsx)(O.l, g({}, e))
                    }
                },
                A = {
                    key: a.h8.CONFIRM,
                    renderStep: function(e) {
                        return (0, r.jsx)(h, g({}, e))
                    }
                },
                N = [I, w]
        }
    }
]);