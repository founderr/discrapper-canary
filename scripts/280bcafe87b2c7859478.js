"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [3039], {
        803039: (t, e, n) => {
            n.r(e);
            n.d(e, {
                CollectiblesCollectedModalInner: () => V,
                default: () => F
            });
            var r = n(785893),
                o = n(667294),
                a = n(294184),
                i = n.n(a),
                l = n(652411),
                c = n(441143),
                s = n.n(c),
                u = n(318715),
                f = n(304548),
                d = n(735885),
                y = n(316878),
                m = n(153686),
                p = n(19585),
                v = n(841379),
                b = n(995141),
                h = n(401080),
                C = n(357369),
                g = n(327453),
                O = n(473903),
                j = n(349771),
                S = n(251288),
                x = n(8970),
                E = n(4958);

            function L(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function w(t, e, n) {
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

            function I(t, e) {
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
                    if ("string" == typeof t) return L(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return L(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function T(t) {
                return A(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            w(t, e, n[e])
                        }))
                    }
                    return t
                }({}, E.We), {
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
            const M = function(t) {
                var e = t.confettiTarget,
                    n = t.confettiCanvas,
                    a = t.sprites,
                    i = t.colors,
                    c = I(o.useState(null), 2),
                    s = c[0],
                    u = c[1],
                    f = (0, l.uR)(n, s),
                    d = I(o.useState(!1), 2),
                    y = d[0],
                    m = d[1];
                o.useEffect((function() {
                    var t = new Array(10).fill(0);
                    null != e && f.isReady && !y && (t = t.map((function(n, r) {
                        return setTimeout((function() {
                            r === t.length - 1 && m(!0);
                            f.createMultipleConfetti(T(e.getBoundingClientRect()), 50)
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
                    sprites: null != a ? a : E.CA,
                    colors: null != i ? i : E.Br,
                    spriteWidth: E.Ko,
                    spriteHeight: E.Ko
                })
            };
            var N = n(940594),
                P = n(584228),
                _ = n(473708),
                Z = n(731312),
                D = n.n(Z),
                k = n(906146),
                B = n.n(k);

            function R(t, e) {
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

            function H(t) {
                return function(t) {
                    if (Array.isArray(t)) return R(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || U(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function U(t, e) {
                if (t) {
                    if ("string" == typeof t) return R(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? R(t, e) : void 0
                }
            }
            var V = function(t) {
                var e, n, a = t.product,
                    i = t.onClose,
                    l = t.confettiTarget,
                    c = t.confettiCanvas,
                    E = t.category,
                    L = t.analyticsLocations,
                    w = (0, P.Z)(E),
                    A = w.confettiColors,
                    I = w.confettiSprites,
                    T = w.backgroundColors,
                    Z = w.buttonColors,
                    k = (0, u.ZP)([O.default], (function() {
                        var t = O.default.getCurrentUser();
                        s()(null != t, "User cannot be undefined");
                        return t
                    })),
                    R = (0, u.ZP)([y.Z], (function() {
                        return y.Z.useReducedMotion
                    })),
                    z = null !== (e = a.items.find(S.M)) && void 0 !== e ? e : null,
                    U = null !== (n = a.items.find(x.H)) && void 0 !== n ? n : null,
                    V = (0, v.Z)({
                        user: k,
                        avatarDecorationOverride: z,
                        size: (0, b.y9)(f.AvatarSizes.SIZE_120)
                    }).avatarDecorationSrc,
                    F = o.useRef(null),
                    W = (0, p.Z)(H(L).concat([m.Z.COLLECTIBLES_COLLECTED_MODAL])),
                    K = W.analyticsLocations,
                    Y = W.AnalyticsLocationProvider,
                    $ = (0, h.Z)({
                        analyticsLocations: K
                    });
                return null == z && null == U ? null : (0, r.jsxs)(Y, {
                    children: [(0, r.jsxs)("div", {
                        className: D().modalInner,
                        ref: F,
                        style: null != T ? {
                            background: (0, N.nH)(T)
                        } : void 0,
                        children: [(0, r.jsxs)("div", {
                            className: D().bannerContainer,
                            children: [(0, r.jsx)("img", {
                                src: (0, j.uV)(E.banner, {
                                    size: 440
                                }),
                                alt: a.name,
                                className: D().decorationBanner
                            }), null != z && (0, r.jsx)(f.Avatar, {
                                size: f.AvatarSizes.SIZE_120,
                                src: B(),
                                avatarDecoration: V,
                                className: D().avatarDecoration,
                                "aria-label": a.name
                            }), null != U && (0, r.jsx)("div", {
                                className: D().profileEffectShopPreview,
                                children: (0, r.jsx)(C.Z, {
                                    forCollectedModal: !0,
                                    profileEffectId: null == U ? void 0 : U.id
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: D().collectedInfoContainer,
                            children: [(0, r.jsxs)("div", {
                                className: D().collectedTextContainer,
                                children: [(0, r.jsx)(f.Heading, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    children: _.Z.Messages.COLLECTIBLES_YOU_COLLECTED.format({
                                        itemName: a.name
                                    })
                                }), (0, r.jsx)(f.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: null != U ? _.Z.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : _.Z.Messages.COLLECTIBLES_PERMANENT_COLLECTION
                                })]
                            }), (0, r.jsx)(f.Button, {
                                onClick: function() {
                                    i();
                                    (0, d.xf)();
                                    $();
                                    null != z ? (0, b.ps)({
                                        initialSelectedDecoration: a.items.find(S.M),
                                        analyticsLocations: K
                                    }) : null != U && (0, g.H)({
                                        analyticsLocations: K,
                                        initialSelectedEffectID: null == U ? void 0 : U.id
                                    })
                                },
                                style: null != Z ? {
                                    background: (0, N.nH)(Z, 90)
                                } : void 0,
                                children: _.Z.Messages.COLLECTIBLES_USE_NOW
                            })]
                        }), (0, r.jsx)(f.ModalCloseButton, {
                            onClick: i,
                            className: D().modalCloseButton,
                            withCircleBackground: !0
                        })]
                    }), !R && (0, r.jsx)(M, {
                        confettiTarget: null != l ? l : F.current,
                        confettiCanvas: c,
                        sprites: I,
                        colors: A
                    })]
                })
            };
            const F = function(t) {
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