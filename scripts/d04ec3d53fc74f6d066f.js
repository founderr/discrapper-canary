"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [3039], {
        803039: (t, e, n) => {
            n.r(e);
            n.d(e, {
                CollectiblesCollectedModalInner: () => V,
                default: () => H
            });
            var r = n(785893),
                o = n(667294),
                a = n(294184),
                i = n.n(a),
                l = n(652411),
                c = n(441143),
                s = n.n(c),
                u = n(318715),
                f = n(882723),
                d = n(735885),
                y = n(153686),
                m = n(19585),
                p = n(841379),
                b = n(995141),
                v = n(401080),
                h = n(357369),
                g = n(327453),
                C = n(473903),
                j = n(349771),
                O = n(251288),
                S = n(8970),
                x = n(4958);

            function w(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function L(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function A(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function E(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, a = [],
                            i = !0,
                            l = !1;
                        try {
                            for (n = n.call(t); !(i = (r = n.next()).done); i = !0) {
                                a.push(r.value);
                                if (e && a.length === e) break
                            }
                        } catch (t) {
                            l = !0;
                            o = t
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return a
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return w(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function I(t) {
                return A(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            L(t, e, n[e])
                        }))
                    }
                    return t
                }({}, x.We), {
                    position: {
                        type: "static-random",
                        minValue: {
                            x: t.x,
                            y: t.y
                        },
                        maxValue: {
                            x: t.x + t.width,
                            y: t.y + t.height / 2
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
            const T = function(t) {
                var e = t.confettiTarget,
                    n = t.confettiCanvas,
                    a = t.sprites,
                    i = t.colors,
                    c = E(o.useState(null), 2),
                    s = c[0],
                    u = c[1],
                    f = (0, l.uR)(n, s),
                    d = E(o.useState(!1), 2),
                    y = d[0],
                    m = d[1];
                o.useEffect((function() {
                    var t = new Array(10).fill(0);
                    null != e && f.isReady && !y && (t = t.map((function(n, r) {
                        return setTimeout((function() {
                            r === t.length - 1 && m(!0);
                            f.createMultipleConfetti(I(e.getBoundingClientRect()), 50)
                        }), 100 * r)
                    })));
                    return function() {
                        var e = !0,
                            n = !1,
                            r = void 0;
                        try {
                            for (var o, a = t[Symbol.iterator](); !(e = (o = a.next()).done); e = !0) {
                                var i = o.value;
                                clearTimeout(i)
                            }
                        } catch (t) {
                            n = !0;
                            r = t
                        } finally {
                            try {
                                e || null == a.return || a.return()
                            } finally {
                                if (n) throw r
                            }
                        }
                    }
                }), [f, e, y]);
                return (0, r.jsx)(l.Ji, {
                    ref: u,
                    sprites: a,
                    colors: i,
                    spriteWidth: x.Ko,
                    spriteHeight: x.Ko
                })
            };
            var M = n(940594),
                N = n(584228),
                P = n(473708),
                k = n(311198),
                D = n.n(k),
                _ = n(467874),
                Z = n.n(_);

            function B(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function z(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, a = [],
                            i = !0,
                            l = !1;
                        try {
                            for (n = n.call(t); !(i = (r = n.next()).done); i = !0) {
                                a.push(r.value);
                                if (e && a.length === e) break
                            }
                        } catch (t) {
                            l = !0;
                            o = t
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return a
                    }
                }(t, e) || U(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function R(t) {
                return function(t) {
                    if (Array.isArray(t)) return B(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || U(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function U(t, e) {
                if (t) {
                    if ("string" == typeof t) return B(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? B(t, e) : void 0
                }
            }
            var V = function(t) {
                var e, n, a = t.product,
                    i = t.onClose,
                    l = t.confettiTarget,
                    c = t.confettiCanvas,
                    x = t.category,
                    w = t.analyticsLocations,
                    L = (0,
                        N.Z)(x),
                    A = L.confettiColors,
                    E = L.confettiSprites,
                    I = L.backgroundColors,
                    k = L.buttonColors,
                    _ = (0, u.ZP)([C.default], (function() {
                        var t = C.default.getCurrentUser();
                        s()(null != t, "User cannot be undefined");
                        return t
                    })),
                    B = null !== (e = a.items.find(O.M)) && void 0 !== e ? e : null,
                    z = null !== (n = a.items.find(S.H)) && void 0 !== n ? n : null,
                    U = (0, p.Z)({
                        user: _,
                        pendingAvatarDecoration: B,
                        size: (0, b.y9)(f.AvatarSizes.SIZE_120),
                        canAnimate: !0
                    }),
                    V = o.useRef(null),
                    H = (0, m.Z)(R(w).concat([y.Z.COLLECTIBLES_COLLECTED_MODAL])),
                    W = H.analyticsLocations,
                    F = H.AnalyticsLocationProvider,
                    K = (0, v.Z)({
                        analyticsLocations: W
                    });
                return null == B && null == z ? null : (0, r.jsxs)(F, {
                    children: [(0, r.jsxs)("div", {
                        className: D().modalInner,
                        ref: V,
                        style: {
                            background: "linear-gradient(180deg, ".concat(I[0], ", ").concat(I[1], ")")
                        },
                        children: [(0, r.jsxs)("div", {
                            className: D().bannerContainer,
                            children: [(0, r.jsx)("img", {
                                src: (0, j.uV)(x.banner, {
                                    size: 440
                                }),
                                alt: a.name,
                                className: D().decorationBanner
                            }), null != B && (0, r.jsx)(f.Avatar, {
                                size: f.AvatarSizes.SIZE_120,
                                src: Z(),
                                avatarDecoration: U,
                                className: D().avatarDecoration,
                                "aria-label": a.name
                            }), null != z && (0, r.jsx)("div", {
                                className: D().profileEffectShopPreview,
                                children: (0, r.jsx)(h.Z, {
                                    forCollectedModal: !0,
                                    profileEffectId: null == z ? void 0 : z.id
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: D().collectedInfoContainer,
                            children: [(0, r.jsxs)("div", {
                                className: D().collectedTextContainer,
                                children: [(0, r.jsx)(f.Heading, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    children: P.Z.Messages.COLLECTIBLES_YOU_COLLECTED.format({
                                        itemName: a.name
                                    })
                                }), (0, r.jsx)(f.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: P.Z.Messages.COLLECTIBLES_PERMANENT_COLLECTION
                                })]
                            }), (0, r.jsx)(f.Button, {
                                onClick: function() {
                                    i();
                                    (0, d.xf)();
                                    K();
                                    null != B ? (0, b.ps)({
                                        initialSelectedDecoration: a.items.find(O.M),
                                        analyticsLocations: W
                                    }) : null != z && (0, g.H)({
                                        analyticsLocations: W,
                                        effectFromShop: null == z ? void 0 : z.id
                                    })
                                },
                                style: (0, M.Ch)(k),
                                children: P.Z.Messages.COLLECTIBLES_USE_NOW
                            })]
                        }), (0, r.jsx)(f.ModalCloseButton, {
                            onClick: i,
                            className: D().modalCloseButton,
                            withCircleBackground: !0
                        })]
                    }), (0,
                        r.jsx)(T, {
                        confettiTarget: null != l ? l : V.current,
                        confettiCanvas: c,
                        sprites: E,
                        colors: A
                    })]
                })
            };
            const H = function(t) {
                var e = t.transitionState,
                    n = t.product,
                    a = t.category,
                    c = t.onClose,
                    s = t.analyticsLocations,
                    u = o.useRef(new l.qA),
                    d = z(o.useState(null), 2),
                    y = d[0],
                    m = d[1];
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(l.O_, {
                        ref: m,
                        className: D().confettiCanvas,
                        environment: u.current
                    }), (0, r.jsx)(f.ModalRoot, {
                        transitionState: e,
                        size: f.ModalSize.DYNAMIC,
                        children: (0, r.jsx)(f.ModalContent, {
                            className: i()(D().modalInner, D().modalContentOverrides),
                            children: (0, r.jsx)(V, {
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
        }
    }
]);