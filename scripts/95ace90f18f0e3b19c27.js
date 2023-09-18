"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [3039], {
        803039: (t, e, n) => {
            n.r(e);
            n.d(e, {
                CollectiblesCollectedModalInner: () => _,
                default: () => B
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

            function w(t, e) {
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

            function x(t) {
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
            const L = function(t) {
                var e = t.confettiTarget,
                    n = t.confettiCanvas,
                    a = t.animationDelayMs,
                    i = t.sprites,
                    c = t.colors,
                    s = w(o.useState(null), 2),
                    u = s[0],
                    f = s[1],
                    y = (0, l.uR)(n, u);
                o.useEffect((function() {
                    var t = new Array(10).fill(0);
                    null != e && y.isReady && (t = t.map((function(t, n) {
                        return setTimeout((function() {
                            y.createMultipleConfetti(x(e.getBoundingClientRect()), 50)
                        }), a + 100 * n)
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
                }), [y, a, e]);
                return (0, r.jsx)(l.Ji, {
                    ref: f,
                    sprites: i,
                    colors: c,
                    spriteWidth: C.Ko,
                    spriteHeight: C.Ko
                })
            };
            var A = n(940594),
                E = n(584228),
                I = n(473708),
                M = n(311198),
                T = n.n(M);

            function P(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function k(t, e) {
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
                }(t, e) || N(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function D(t) {
                return function(t) {
                    if (Array.isArray(t)) return P(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || N(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function N(t, e) {
                if (t) {
                    if ("string" == typeof t) return P(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? P(t, e) : void 0
                }
            }
            var _ = function(t) {
                var e, n = t.product,
                    a = t.onClose,
                    l = t.confettiTarget,
                    c = t.confettiCanvas,
                    C = t.category,
                    O = t.analyticsLocations,
                    j = (0,
                        E.Z)(C),
                    S = j.confettiColors,
                    w = j.confettiSprites,
                    x = j.backgroundColors,
                    M = j.buttonColors,
                    P = (0, u.ZP)([v.default], (function() {
                        var t = v.default.getCurrentUser();
                        s()(null != t, "User cannot be undefined");
                        return t
                    })),
                    k = (0, p.Z)({
                        user: P,
                        pendingAvatarDecoration: null !== (e = n.items.find(g.M)) && void 0 !== e ? e : null,
                        size: (0, b.y9)(f.AvatarSizes.SIZE_120),
                        canAnimate: !0
                    }),
                    N = o.useRef(null),
                    _ = (0, m.Z)(D(O).concat([d.Z.COLLECTIBLES_COLLECTED_MODAL])),
                    B = _.analyticsLocations,
                    Z = _.AnalyticsLocationProvider;
                return (0, r.jsxs)(Z, {
                    children: [(0, r.jsxs)("div", {
                        className: T().modalInner,
                        ref: N,
                        children: [(0, r.jsxs)("div", {
                            className: T().bannerContainer,
                            children: [(0, r.jsx)("img", {
                                src: (0, h.uV)(C.banner, {
                                    size: 440
                                }),
                                alt: n.name,
                                className: T().decorationBanner
                            }), (0, r.jsx)("img", {
                                className: T().avatarDecoration,
                                src: k,
                                alt: n.name
                            })]
                        }), (0, r.jsxs)("div", {
                            className: i()(T().collectedInfo),
                            style: {
                                background: "linear-gradient(135deg, ".concat(x[0], ", ").concat(x[1], ")")
                            },
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
                            }), (0, r.jsx)(f.Button, {
                                onClick: function() {
                                    a();
                                    (0, y.xf)();
                                    (0, b.ps)({
                                        initialSelectedDecoration: n.items.find(g.M),
                                        analyticsLocations: B
                                    })
                                },
                                style: {
                                    background: (0, A.Ch)(M)
                                },
                                children: I.Z.Messages.COLLECTIBLES_USE_NOW
                            })]
                        }), (0, r.jsx)(f.ModalCloseButton, {
                            onClick: a,
                            className: T().modalCloseButton,
                            withCircleBackground: !0
                        })]
                    }), (0, r.jsx)(L, {
                        confettiTarget: null != l ? l : N.current,
                        confettiCanvas: c,
                        animationDelayMs: 1e3,
                        sprites: w,
                        colors: S
                    })]
                })
            };
            const B = function(t) {
                var e = t.transitionState,
                    n = t.product,
                    a = t.category,
                    c = t.onClose,
                    s = t.analyticsLocations,
                    u = o.useRef(new l.qA),
                    y = k(o.useState(null), 2),
                    d = y[0],
                    m = y[1];
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(l.O_, {
                        ref: m,
                        className: T().confettiCanvas,
                        environment: u.current
                    }), (0, r.jsx)(f.ModalRoot, {
                        transitionState: e,
                        size: f.ModalSize.DYNAMIC,
                        children: (0, r.jsx)(f.ModalContent, {
                            className: i()(T().modalInner, T().modalContentOverrides),
                            children: (0, r.jsx)(_, {
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