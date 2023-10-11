(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [31203, 3039], {
        82734: (e, t, n) => {
            e.exports = n.p + "4f35fac7a0ff1e82a2a869bd9725f1d7.png"
        },
        803039: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                CollectiblesCollectedModalInner: () => V,
                default: () => U
            });
            var r = n(785893),
                a = n(667294),
                l = n(294184),
                o = n.n(l),
                i = n(652411),
                u = n(441143),
                c = n.n(u),
                s = n(318715),
                d = n(304548),
                f = n(735885),
                b = n(316878),
                y = n(153686),
                v = n(19585),
                p = n(995141),
                m = n(501486),
                h = n(401080),
                O = n(357369),
                C = n(327453),
                S = n(473903),
                j = n(251288),
                g = n(8970),
                A = n(4958);

            function I(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function E(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function x(e, t) {
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

            function N(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, l = [],
                            o = !0,
                            i = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                l.push(r.value);
                                if (t && l.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return l
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return I(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function w(e) {
                return x(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            E(e, t, n[t])
                        }))
                    }
                    return e
                }({}, A.We), {
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
            const P = function(e) {
                var t = e.confettiTarget,
                    n = e.confettiCanvas,
                    l = e.sprites,
                    o = e.colors,
                    u = N(a.useState(null), 2),
                    c = u[0],
                    s = u[1],
                    d = (0, i.uR)(n, c),
                    f = N(a.useState(!1), 2),
                    b = f[0],
                    y = f[1];
                a.useEffect((function() {
                    var e = new Array(10).fill(0);
                    null != t && d.isReady && !b && (e = e.map((function(n, r) {
                        return setTimeout((function() {
                            r === e.length - 1 && y(!0);
                            d.createMultipleConfetti(w(t.getBoundingClientRect()), 50)
                        }), 100 * r)
                    })));
                    return function() {
                        var t = !0,
                            n = !1,
                            r = void 0;
                        try {
                            for (var a, l = e[Symbol.iterator](); !(t = (a = l.next()).done); t = !0) {
                                var o = a.value;
                                clearTimeout(o)
                            }
                        } catch (e) {
                            n = !0;
                            r = e
                        } finally {
                            try {
                                t || null == l.return || l.return()
                            } finally {
                                if (n) throw r
                            }
                        }
                    }
                }), [d, t, b]);
                return (0, r.jsx)(i.Ji, {
                    ref: s,
                    sprites: null != l ? l : A.CA,
                    colors: null != o ? o : A.Br,
                    spriteWidth: A.Ko,
                    spriteHeight: A.Ko
                })
            };
            var M = n(974251),
                T = n(940594),
                k = n(584228),
                L = n(473708),
                D = n(731312),
                _ = n.n(D),
                Z = n(906146),
                R = n.n(Z);

            function B(e, t) {
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
                        var r, a, l = [],
                            o = !0,
                            i = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                l.push(r.value);
                                if (t && l.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return l
                    }
                }(e, t) || W(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function H(e) {
                return function(e) {
                    if (Array.isArray(e)) return B(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || W(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function W(e, t) {
                if (e) {
                    if ("string" == typeof e) return B(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? B(e, t) : void 0
                }
            }
            var V = function(e) {
                var t, n, l = e.product,
                    o = e.onClose,
                    i = e.confettiTarget,
                    u = e.confettiCanvas,
                    A = e.category,
                    I = e.analyticsLocations,
                    E = (0, k.Z)(A),
                    x = E.confettiColors,
                    N = E.confettiSprites,
                    w = E.backgroundColors,
                    D = E.buttonColors,
                    Z = (0, s.ZP)([S.default], (function() {
                        var e = S.default.getCurrentUser();
                        c()(null != e, "User cannot be undefined");
                        return e
                    })),
                    B = (0, s.ZP)([b.Z], (function() {
                        return b.Z.useReducedMotion
                    })),
                    F = null !== (t = l.items.find(j.M)) && void 0 !== t ? t : null,
                    W = null !== (n = l.items.find(g.H)) && void 0 !== n ? n : null,
                    V = (0, m.Z)({
                        user: Z,
                        avatarDecorationOverride: F,
                        size: (0, p.y9)(d.AvatarSizes.SIZE_120)
                    }).avatarDecorationSrc,
                    U = a.useRef(null),
                    Y = (0, v.Z)(H(I).concat([y.Z.COLLECTIBLES_COLLECTED_MODAL])),
                    K = Y.analyticsLocations,
                    z = Y.AnalyticsLocationProvider,
                    G = (0, h.Z)({
                        analyticsLocations: K
                    });
                return null == F && null == W ? null : (0, r.jsxs)(z, {
                    children: [(0, r.jsxs)("div", {
                        className: _().modalInner,
                        ref: U,
                        style: null != w ? {
                            background: (0, T.nH)(w)
                        } : void 0,
                        children: [(0, r.jsxs)("div", {
                            className: _().bannerContainer,
                            children: [(0, r.jsx)(M.Z, {
                                asset: A.banner,
                                size: 440,
                                className: _().decorationBanner
                            }), null != F && (0, r.jsx)(d.Avatar, {
                                size: d.AvatarSizes.SIZE_120,
                                src: R(),
                                avatarDecoration: V,
                                className: _().avatarDecoration,
                                "aria-label": l.name
                            }), null != W && (0, r.jsx)("div", {
                                className: _().profileEffectShopPreview,
                                children: (0, r.jsx)(O.Z, {
                                    forCollectedModal: !0,
                                    profileEffectId: null == W ? void 0 : W.id
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: _().collectedInfoContainer,
                            children: [(0, r.jsxs)("div", {
                                className: _().collectedTextContainer,
                                children: [(0, r.jsx)(d.Heading, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    children: L.Z.Messages.COLLECTIBLES_YOU_COLLECTED.format({
                                        itemName: l.name
                                    })
                                }), (0, r.jsx)(d.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: null != W ? L.Z.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : L.Z.Messages.COLLECTIBLES_PERMANENT_COLLECTION
                                })]
                            }), (0, r.jsx)(d.Button, {
                                onClick: function() {
                                    o();
                                    (0, f.xf)();
                                    G();
                                    null != F ? (0, p.ps)({
                                        initialSelectedDecoration: l.items.find(j.M),
                                        analyticsLocations: K
                                    }) : null != W && (0, C.H)({
                                        analyticsLocations: K,
                                        initialSelectedEffectID: null == W ? void 0 : W.id
                                    })
                                },
                                style: null != D ? {
                                    background: (0, T.nH)(D, 90)
                                } : void 0,
                                children: L.Z.Messages.COLLECTIBLES_USE_NOW
                            })]
                        }), (0, r.jsx)(d.ModalCloseButton, {
                            onClick: o,
                            className: _().modalCloseButton,
                            withCircleBackground: !0
                        })]
                    }), !B && (0, r.jsx)(P, {
                        confettiTarget: null != i ? i : U.current,
                        confettiCanvas: u,
                        sprites: N,
                        colors: x
                    })]
                })
            };
            const U = function(e) {
                var t = e.transitionState,
                    n = e.product,
                    l = e.category,
                    u = e.onClose,
                    c = e.analyticsLocations,
                    s = a.useRef(new i.qA),
                    f = F(a.useState(null), 2),
                    b = f[0],
                    y = f[1];
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(i.O_, {
                        ref: y,
                        className: _().confettiCanvas,
                        environment: s.current
                    }), (0, r.jsx)(d.ModalRoot, {
                        transitionState: t,
                        size: d.ModalSize.DYNAMIC,
                        children: (0, r.jsx)(d.ModalContent, {
                            className: o()(_().modalInner, _().modalContentOverrides),
                            children: (0, r.jsx)(V, {
                                product: n,
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
        910358: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => B
            });
            var r = n(785893),
                a = n(667294),
                l = n(652411),
                o = n(153686),
                i = n(19585),
                u = n(782786),
                c = n(83471),
                s = n(586611),
                d = n(545270),
                f = n(441143),
                b = n.n(f),
                y = n(318715),
                v = n(764797),
                p = n(803039),
                m = n(149096),
                h = n(328535);

            function O(e) {
                var t = e.handleClose,
                    n = e.confettiCanvas,
                    a = e.analyticsLocations,
                    l = (0, u.usePaymentContext)(),
                    o = l.skusById,
                    i = l.selectedSkuId,
                    c = l.application,
                    s = (0, y.cj)([v.Z], (function() {
                        return {
                            product: v.Z.getProduct(i),
                            category: v.Z.getCategoryForProduct(i)
                        }
                    })),
                    d = s.product,
                    f = s.category;
                b()(null != i, "Expected selectedSkuId");
                b()(null != c, "Expected application");
                var O = o[i];
                b()(null != O, "Expected sku");
                return null == f || null == d ? null : (0, r.jsxs)(m.C3, {
                    children: [(0, r.jsx)(h.Z, {}), (0, r.jsx)(p.CollectiblesCollectedModalInner, {
                        product: d,
                        category: f,
                        onClose: t,
                        confettiCanvas: n,
                        analyticsLocations: a
                    })]
                })
            }
            var C = n(304548),
                S = n(333568),
                j = n(297283),
                g = n(290284),
                A = n.n(g),
                I = n(82734),
                E = n.n(I),
                x = function(e) {
                    var t = e.step,
                        n = e.onClose,
                        a = (0, S.Z)(j.X);
                    return t === c.h8.CONFIRM || t === c.h8.BENEFITS ? (0, r.jsx)("div", {}) : (0, r.jsxs)("div", {
                        className: A().headerContainer,
                        children: [!a && (0, r.jsx)("div", {
                            className: A().headerImageContainer,
                            "aria-hidden": "true",
                            "data-accessibility": "desaturate",
                            children: (0, r.jsx)("img", {
                                src: E(),
                                alt: "",
                                className: A().headerImage
                            })
                        }), (0, r.jsx)(C.ModalCloseButton, {
                            withCircleBackground: !0,
                            className: A().closeButton,
                            onClick: n
                        })]
                    })
                },
                N = n(2590),
                w = n(520453),
                P = n(161577),
                M = n.n(P);

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

            function L(e, t) {
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
                        var r, a, l = [],
                            o = !0,
                            i = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                l.push(r.value);
                                if (t && l.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return l
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
            var R = function(e, t, n) {
                return (0, r.jsx)(x, {
                    step: n,
                    onClose: function() {
                        return t(!1)
                    }
                })
            };

            function B(e) {
                var t = e.onClose,
                    n = e.onComplete,
                    f = e.transitionState,
                    b = e.loadId,
                    y = e.skuId,
                    v = e.analyticsLocations,
                    p = e.returnRef,
                    m = (0, i.Z)(_(v).concat([o.Z.COLLECTIBLES_PAYMENT_MODAL])),
                    h = m.analyticsLocations,
                    C = m.AnalyticsLocationProvider,
                    S = a.useRef(new l.qA),
                    j = D(a.useState(null), 2),
                    g = j[0],
                    A = j[1],
                    I = [d.WA, d.s2].concat(_(d.yp), [d.wo, {
                        key: c.h8.CONFIRM,
                        renderStep: function(e) {
                            return (0, r.jsx)(O, L(function(e) {
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
                                confettiCanvas: g,
                                analyticsLocations: h
                            }))
                        },
                        options: {
                            bodyClassName: M().modalOverrideBody,
                            sliderBodyClassName: M().modalOverrideSliderBody
                        }
                    }]);
                return (0, r.jsxs)(C, {
                    children: [(0, r.jsx)(l.O_, {
                        ref: A,
                        className: M().confettiCanvas,
                        environment: S.current
                    }), (0, r.jsx)(u.PaymentContextProvider, {
                        stepConfigs: I,
                        applicationId: N.XAJ,
                        skuIDs: [y],
                        activeSubscription: null,
                        purchaseType: w.GZ.ONE_TIME,
                        children: (0, r.jsx)(s.PaymentModal, {
                            onClose: t,
                            onComplete: n,
                            loadId: b,
                            applicationId: N.XAJ,
                            skuId: y,
                            initialPlanId: null,
                            analyticsLocations: h,
                            transitionState: f,
                            renderHeader: R,
                            returnRef: p,
                            hideShadow: !0
                        })
                    })]
                })
            }
        },
        545270: (e, t, n) => {
            "use strict";
            n.d(t, {
                s2: () => I,
                F7: () => w,
                WA: () => A,
                wo: () => N,
                yp: () => P
            });
            var r = n(785893),
                a = (n(667294),
                    n(711531)),
                l = n(83471),
                o = n(986304),
                i = n(493957),
                u = n(806706),
                c = n(441143),
                s = n.n(c),
                d = n(304548),
                f = n(782786),
                b = n(328535),
                y = n(149096),
                v = n(473708),
                p = n(819779),
                m = n.n(p);

            function h(e) {
                var t = e.handleClose,
                    n = (0, f.usePaymentContext)(),
                    a = n.skusById,
                    l = n.selectedSkuId,
                    o = n.application;
                s()(null != l, "Expected selectedSkuId");
                s()(null != o, "Expected application");
                var i = a[l];
                s()(null != i, "Expected sku");
                var u = v.Z.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
                    applicationName: o.name,
                    itemName: i.name
                });
                return (0, r.jsxs)(y.C3, {
                    children: [(0, r.jsx)(b.Z, {}), (0, r.jsxs)("div", {
                        className: m().confirmation,
                        children: [(0, r.jsx)(d.Heading, {
                            variant: "heading-xxl/bold",
                            className: m().confirmationHeader,
                            children: "Success!"
                        }), (0, r.jsx)(d.Text, {
                            variant: "text-md/normal",
                            children: u
                        }), (0, r.jsx)("div", {
                            className: m().divider
                        }), (0, r.jsx)(d.Button, {
                            onClick: t,
                            children: v.Z.Messages.CLOSE
                        })]
                    })]
                })
            }
            var O = n(366366),
                C = n(964255);

            function S(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        S(e, t, n[t])
                    }))
                }
                return e
            }

            function g(e, t) {
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
            var A = {
                    key: null,
                    renderStep: function(e) {
                        return (0, r.jsx)(C.v, j({}, e))
                    }
                },
                I = {
                    key: l.h8.ADD_PAYMENT_STEPS,
                    renderStep: function(e) {
                        return (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)(o.J, g(j({}, e), {
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
                E = {
                    key: l.h8.AWAITING_PURCHASE_TOKEN_AUTH,
                    renderStep: function() {
                        return (0, r.jsx)(u.Z, {})
                    }
                },
                x = {
                    key: l.h8.AWAITING_AUTHENTICATION,
                    renderStep: function() {
                        return (0, r.jsx)(i.Z, {})
                    }
                },
                N = {
                    key: l.h8.REVIEW,
                    renderStep: function(e) {
                        return (0, r.jsx)(O.l, j({}, e))
                    }
                },
                w = {
                    key: l.h8.CONFIRM,
                    renderStep: function(e) {
                        return (0, r.jsx)(h, j({}, e))
                    }
                },
                P = [E, x]
        },
        964255: (e, t, n) => {
            "use strict";
            n.d(t, {
                v: () => d
            });
            var r = n(785893),
                a = n(667294),
                l = n(123435),
                o = n(782786),
                i = n(83471),
                u = n(28648);

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function s(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, l = [],
                            o = !0,
                            i = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                l.push(r.value);
                                if (t && l.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return l
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(e) {
                var t = e.handleStepChange,
                    n = (0, o.usePaymentContext)(),
                    c = n.blockedPayments,
                    d = n.hasFetchedSkus,
                    f = n.paymentSources,
                    b = n.hasFetchedPaymentSources,
                    y = n.application,
                    v = s(a.useState(!0), 2),
                    p = v[0],
                    m = v[1];
                a.useEffect((function() {
                    d && b && null != y && m(!1)
                }), [d, b, y]);
                a.useEffect((function() {
                    p || c || (0 === Object.keys(f).length ? t(i.h8.ADD_PAYMENT_STEPS) : t(i.h8.REVIEW))
                }), [p, c, t, f]);
                return p ? (0, r.jsx)(u.Z, {}) : c ? (0, r.jsx)(l.Vq, {}) : null
            }
        },
        852316: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = [{
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
                Z: () => r
            });
            const r = [{
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