"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [3039], {
        803039: (t, e, n) => {
            n.r(e);
            n.d(e, {
                CollectiblesCollectedModalInner: () => Z,
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
                f = n(882723),
                y = n(735885),
                d = n(153686),
                m = n(19585),
                p = n(841379),
                b = n(995141),
                v = n(473903),
                h = n(349771),
                g = n(251288),
                C = n(4958);

            function O(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function j(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function S(t, e) {
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

            function x(t, e) {
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
                    if ("string" == typeof t) return O(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return O(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function w(t) {
                return S(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            j(t, e, n[e])
                        }))
                    }
                    return t
                }({}, C.We), {
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
            const A = function(t) {
                var e = t.confettiTarget,
                    n = t.confettiCanvas,
                    a = t.sprites,
                    i = t.colors,
                    c = x(o.useState(null), 2),
                    s = c[0],
                    u = c[1],
                    f = (0, l.uR)(n, s),
                    y = x(o.useState(!1), 2),
                    d = y[0],
                    m = y[1];
                o.useEffect((function() {
                    var t = new Array(10).fill(0);
                    null != e && f.isReady && !d && (t = t.map((function(n, r) {
                        return setTimeout((function() {
                            r === t.length - 1 && m(!0);
                            f.createMultipleConfetti(w(e.getBoundingClientRect()), 50)
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
                }), [f, e, d]);
                return (0, r.jsx)(l.Ji, {
                    ref: u,
                    sprites: a,
                    colors: i,
                    spriteWidth: C.Ko,
                    spriteHeight: C.Ko
                })
            };
            var L = n(940594),
                E = n(584228),
                I = n(473708),
                T = n(311198),
                M = n.n(T),
                N = n(467874),
                P = n.n(N);

            function k(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function D(t, e) {
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
                }(t, e) || B(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _(t) {
                return function(t) {
                    if (Array.isArray(t)) return k(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || B(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function B(t, e) {
                if (t) {
                    if ("string" == typeof t) return k(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? k(t, e) : void 0
                }
            }
            var Z = function(t) {
                var e, n = t.product,
                    a = t.onClose,
                    i = t.confettiTarget,
                    l = t.confettiCanvas,
                    c = t.category,
                    C = t.analyticsLocations,
                    O = (0,
                        E.Z)(c),
                    j = O.confettiColors,
                    S = O.confettiSprites,
                    x = O.backgroundColors,
                    w = O.buttonColors,
                    T = (0, u.ZP)([v.default], (function() {
                        var t = v.default.getCurrentUser();
                        s()(null != t, "User cannot be undefined");
                        return t
                    })),
                    N = null !== (e = n.items.find(g.M)) && void 0 !== e ? e : null,
                    k = (0, p.Z)({
                        user: T,
                        pendingAvatarDecoration: N,
                        size: (0, b.y9)(f.AvatarSizes.SIZE_120),
                        canAnimate: !0
                    }),
                    D = o.useRef(null),
                    B = (0, m.Z)(_(C).concat([d.Z.COLLECTIBLES_COLLECTED_MODAL])),
                    Z = B.analyticsLocations,
                    z = B.AnalyticsLocationProvider;
                return null == N ? null : (0, r.jsxs)(z, {
                    children: [(0, r.jsxs)("div", {
                        className: M().modalInner,
                        ref: D,
                        style: {
                            background: "linear-gradient(180deg, ".concat(x[0], ", ").concat(x[1], ")")
                        },
                        children: [(0, r.jsxs)("div", {
                            className: M().bannerContainer,
                            children: [(0, r.jsx)("img", {
                                src: (0, h.uV)(c.banner, {
                                    size: 440
                                }),
                                alt: n.name,
                                className: M().decorationBanner
                            }), (0, r.jsx)(f.Avatar, {
                                size: f.AvatarSizes.SIZE_120,
                                src: P(),
                                avatarDecoration: k,
                                className: M().avatarDecoration,
                                "aria-label": n.name
                            })]
                        }), (0, r.jsxs)("div", {
                            className: M().collectedInfoContainer,
                            children: [(0, r.jsxs)("div", {
                                className: M().collectedTextContainer,
                                children: [(0, r.jsx)(f.Heading, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    children: I.Z.Messages.COLLECTIBLES_YOU_COLLECTED.format({
                                        itemName: n.name
                                    })
                                }), (0, r.jsx)(f.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: I.Z.Messages.COLLECTIBLES_PERMANENT_COLLECTION
                                })]
                            }), (0, r.jsx)(f.Button, {
                                onClick: function() {
                                    a();
                                    (0, y.xf)();
                                    (0, b.ps)({
                                        initialSelectedDecoration: n.items.find(g.M),
                                        analyticsLocations: Z
                                    })
                                },
                                style: {
                                    background: (0, L.Ch)(w)
                                },
                                children: I.Z.Messages.COLLECTIBLES_USE_NOW
                            })]
                        }), (0, r.jsx)(f.ModalCloseButton, {
                            onClick: a,
                            className: M().modalCloseButton,
                            withCircleBackground: !0
                        })]
                    }), (0, r.jsx)(A, {
                        confettiTarget: null != i ? i : D.current,
                        confettiCanvas: l,
                        sprites: S,
                        colors: j
                    })]
                })
            };
            const z = function(t) {
                var e = t.transitionState,
                    n = t.product,
                    a = t.category,
                    c = t.onClose,
                    s = t.analyticsLocations,
                    u = o.useRef(new l.qA),
                    y = D(o.useState(null), 2),
                    d = y[0],
                    m = y[1];
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0,
                        r.jsx)(l.O_, {
                        ref: m,
                        className: M().confettiCanvas,
                        environment: u.current
                    }), (0, r.jsx)(f.ModalRoot, {
                        transitionState: e,
                        size: f.ModalSize.DYNAMIC,
                        children: (0, r.jsx)(f.ModalContent, {
                            className: i()(M().modalInner, M().modalContentOverrides),
                            children: (0, r.jsx)(Z, {
                                product: n,
                                category: a,
                                onClose: c,
                                confettiCanvas: d,
                                analyticsLocations: s
                            })
                        })
                    })]
                })
            }
        }
    }
]);