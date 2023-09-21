"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [3039], {
        803039: (t, e, n) => {
            n.r(e);
            n.d(e, {
                CollectiblesCollectedModalInner: () => R,
                default: () => U
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
                v = n(327453),
                h = n(473903),
                g = n(349771),
                C = n(251288),
                O = n(8970),
                j = n(4958);

            function S(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function x(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function w(t, e) {
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

            function A(t, e) {
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
                    if ("string" == typeof t) return S(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function L(t) {
                return w(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            x(t, e, n[e])
                        }))
                    }
                    return t
                }({}, j.We), {
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
            const E = function(t) {
                var e = t.confettiTarget,
                    n = t.confettiCanvas,
                    a = t.sprites,
                    i = t.colors,
                    c = A(o.useState(null), 2),
                    s = c[0],
                    u = c[1],
                    f = (0, l.uR)(n, s),
                    d = A(o.useState(!1), 2),
                    y = d[0],
                    m = d[1];
                o.useEffect((function() {
                    var t = new Array(10).fill(0);
                    null != e && f.isReady && !y && (t = t.map((function(n, r) {
                        return setTimeout((function() {
                            r === t.length - 1 && m(!0);
                            f.createMultipleConfetti(L(e.getBoundingClientRect()), 50)
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
                    spriteWidth: j.Ko,
                    spriteHeight: j.Ko
                })
            };
            var I = n(940594),
                T = n(584228),
                M = n(473708),
                N = n(311198),
                P = n.n(N),
                k = n(467874),
                D = n.n(k);

            function _(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function B(t, e) {
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
                }(t, e) || z(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Z(t) {
                return function(t) {
                    if (Array.isArray(t)) return _(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || z(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function z(t, e) {
                if (t) {
                    if ("string" == typeof t) return _(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _(t, e) : void 0
                }
            }
            var R = function(t) {
                var e, n, a = t.product,
                    i = t.onClose,
                    l = t.confettiTarget,
                    c = t.confettiCanvas,
                    j = t.category,
                    S = t.analyticsLocations,
                    x = (0,
                        T.Z)(j),
                    w = x.confettiColors,
                    A = x.confettiSprites,
                    L = x.backgroundColors,
                    N = x.buttonColors,
                    k = (0, u.ZP)([h.default], (function() {
                        var t = h.default.getCurrentUser();
                        s()(null != t, "User cannot be undefined");
                        return t
                    })),
                    _ = null !== (e = a.items.find(C.M)) && void 0 !== e ? e : null,
                    B = null !== (n = a.items.find(O.H)) && void 0 !== n ? n : null,
                    z = (0, p.Z)({
                        user: k,
                        pendingAvatarDecoration: _,
                        size: (0, b.y9)(f.AvatarSizes.SIZE_120),
                        canAnimate: !0
                    }),
                    R = o.useRef(null),
                    U = (0, m.Z)(Z(S).concat([y.Z.COLLECTIBLES_COLLECTED_MODAL])),
                    V = U.analyticsLocations,
                    H = U.AnalyticsLocationProvider;
                return null == _ && null == B ? null : (0, r.jsxs)(H, {
                    children: [(0, r.jsxs)("div", {
                        className: P().modalInner,
                        ref: R,
                        style: {
                            background: "linear-gradient(180deg, ".concat(L[0], ", ").concat(L[1], ")")
                        },
                        children: [(0, r.jsxs)("div", {
                            className: P().bannerContainer,
                            children: [(0, r.jsx)("img", {
                                src: (0, g.uV)(j.banner, {
                                    size: 440
                                }),
                                alt: a.name,
                                className: P().decorationBanner
                            }), (0, r.jsx)(f.Avatar, {
                                size: f.AvatarSizes.SIZE_120,
                                src: D(),
                                avatarDecoration: z,
                                className: P().avatarDecoration,
                                "aria-label": a.name
                            })]
                        }), (0, r.jsxs)("div", {
                            className: P().collectedInfoContainer,
                            children: [(0, r.jsxs)("div", {
                                className: P().collectedTextContainer,
                                children: [(0, r.jsx)(f.Heading, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    children: M.Z.Messages.COLLECTIBLES_YOU_COLLECTED.format({
                                        itemName: a.name
                                    })
                                }), (0, r.jsx)(f.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: M.Z.Messages.COLLECTIBLES_PERMANENT_COLLECTION
                                })]
                            }), (0, r.jsx)(f.Button, {
                                onClick: function() {
                                    i();
                                    (0, d.xf)();
                                    null != _ ? (0, b.ps)({
                                        initialSelectedDecoration: a.items.find(C.M),
                                        analyticsLocations: V
                                    }) : null != B && (0, v.H)({
                                        analyticsLocations: V,
                                        effectFromShop: null == B ? void 0 : B.id
                                    })
                                },
                                style: (0, I.Ch)(N),
                                children: M.Z.Messages.COLLECTIBLES_USE_NOW
                            })]
                        }), (0, r.jsx)(f.ModalCloseButton, {
                            onClick: i,
                            className: P().modalCloseButton,
                            withCircleBackground: !0
                        })]
                    }), (0, r.jsx)(E, {
                        confettiTarget: null != l ? l : R.current,
                        confettiCanvas: c,
                        sprites: A,
                        colors: w
                    })]
                })
            };
            const U = function(t) {
                var e = t.transitionState,
                    n = t.product,
                    a = t.category,
                    c = t.onClose,
                    s = t.analyticsLocations,
                    u = o.useRef(new l.qA),
                    d = B(o.useState(null), 2),
                    y = d[0],
                    m = d[1];
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(l.O_, {
                        ref: m,
                        className: P().confettiCanvas,
                        environment: u.current
                    }), (0, r.jsx)(f.ModalRoot, {
                        transitionState: e,
                        size: f.ModalSize.DYNAMIC,
                        children: (0, r.jsx)(f.ModalContent, {
                            className: i()(P().modalInner, P().modalContentOverrides),
                            children: (0, r.jsx)(R, {
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