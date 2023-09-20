(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [97992, 90344], {
        165358: (e, t, n) => {
            e.exports = n.p + "65921aa740e7c73ace1a74b54b9e6b82.gif"
        },
        284382: (e, t, n) => {
            e.exports = n.p + "ba6a1c16f701fd577b4380df260b08ab.png"
        },
        530396: (e, t, n) => {
            e.exports = n.p + "81f855741b7bdf09d97f8ea644dac150.gif"
        },
        293408: (e, t, n) => {
            e.exports = n.p + "d9510a492a881fd8e75962b7dc4af7a9.png"
        },
        134928: (e, t, n) => {
            e.exports = n.p + "897fb794f533bd92e32b8b06676122ba.gif"
        },
        49192: (e, t, n) => {
            e.exports = n.p + "b80887cce3fcbc37509e7e3b1fed479e.png"
        },
        510101: (e, t, n) => {
            e.exports = n.p + "8cdb96f2d79587fc380142dd132acf45.gif"
        },
        871861: (e, t, n) => {
            e.exports = n.p + "e1f1ae8cb72387014f29d0d00ae5687c.png"
        },
        545292: (e, t, n) => {
            e.exports = n.p + "3294183db720bd0985871f6aa43e6e28.png"
        },
        14636: (e, t, n) => {
            var r = n(422545),
                o = n(135694),
                i = n(701469),
                a = n(578264),
                l = n(565776),
                s = n(936719),
                c = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var n = i(e),
                    u = !n && o(e),
                    d = !n && !u && a(e),
                    f = !n && !u && !d && s(e),
                    p = n || u || d || f,
                    b = p ? r(e.length, String) : [],
                    g = b.length;
                for (var m in e) !t && !c.call(e, m) || p && ("length" == m || d && ("offset" == m || "parent" == m) || f && ("buffer" == m || "byteLength" == m || "byteOffset" == m) || l(m, g)) || b.push(m);
                return b
            }
        },
        70151: (e, t, n) => {
            var r = n(200278),
                o = n(173480);
            e.exports = function(e) {
                return o(r(e))
            }
        },
        238749: (e, t, n) => {
            var r = n(644239),
                o = n(541780),
                i = n(637005),
                a = {};
            a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0;
            a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1;
            e.exports = function(e) {
                return i(e) && o(e.length) && !!a[r(e)]
            }
        },
        400280: (e, t, n) => {
            var r = n(225726),
                o = n(86916),
                i = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!r(e)) return o(e);
                var t = [];
                for (var n in Object(e)) i.call(e, n) && "constructor" != n && t.push(n);
                return t
            }
        },
        525127: (e, t, n) => {
            var r = n(173480),
                o = n(252628);
            e.exports = function(e) {
                return r(o(e))
            }
        },
        422545: e => {
            e.exports = function(e, t) {
                for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                return r
            }
        },
        307518: e => {
            e.exports = function(e) {
                return function(t) {
                    return e(t)
                }
            }
        },
        747415: (e, t, n) => {
            var r = n(829932);
            e.exports = function(e, t) {
                return r(t, (function(t) {
                    return e[t]
                }))
            }
        },
        200278: e => {
            e.exports = function(e, t) {
                var n = -1,
                    r = e.length;
                t || (t = Array(r));
                for (; ++n < r;) t[n] = e[n];
                return t
            }
        },
        225726: e => {
            var t = Object.prototype;
            e.exports = function(e) {
                var n = e && e.constructor;
                return e === ("function" == typeof n && n.prototype || t)
            }
        },
        86916: (e, t, n) => {
            var r = n(205569)(Object.keys, Object);
            e.exports = r
        },
        531167: (e, t, n) => {
            e = n.nmd(e);
            var r = n(431957),
                o = t && !t.nodeType && t,
                i = o && e && !e.nodeType && e,
                a = i && i.exports === o && r.process,
                l = function() {
                    try {
                        var e = i && i.require && i.require("util").types;
                        return e || a && a.binding && a.binding("util")
                    } catch (e) {}
                }();
            e.exports = l
        },
        205569: e => {
            e.exports = function(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }
        },
        173480: (e, t, n) => {
            var r = n(769877);
            e.exports = function(e, t) {
                var n = -1,
                    o = e.length,
                    i = o - 1;
                t = void 0 === t ? o : t;
                for (; ++n < t;) {
                    var a = r(n, i),
                        l = e[a];
                    e[a] = e[n];
                    e[n] = l
                }
                e.length = t;
                return e
            }
        },
        578264: (e, t, n) => {
            e = n.nmd(e);
            var r = n(555639),
                o = n(595062),
                i = t && !t.nodeType && t,
                a = i && e && !e.nodeType && e,
                l = a && a.exports === i ? r.Buffer : void 0,
                s = (l ? l.isBuffer : void 0) || o;
            e.exports = s
        },
        936719: (e, t, n) => {
            var r = n(238749),
                o = n(307518),
                i = n(531167),
                a = i && i.isTypedArray,
                l = a ? o(a) : r;
            e.exports = l
        },
        3674: (e, t, n) => {
            var r = n(14636),
                o = n(400280),
                i = n(498612);
            e.exports = function(e) {
                return i(e) ? r(e) : o(e)
            }
        },
        369983: (e, t, n) => {
            var r = n(70151),
                o = n(525127),
                i = n(701469);
            e.exports = function(e) {
                return (i(e) ? r : o)(e)
            }
        },
        595062: e => {
            e.exports = function() {
                return !1
            }
        },
        252628: (e, t, n) => {
            var r = n(747415),
                o = n(3674);
            e.exports = function(e) {
                return null == e ? [] : r(e, o(e))
            }
        },
        735885: (e, t, n) => {
            "use strict";
            n.d(t, {
                jN: () => o,
                xf: () => i,
                Ou: () => a
            });
            var r = n(744564);

            function o(e) {
                r.Z.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function i() {
                r.Z.dispatch({
                    type: "LAYER_POP"
                })
            }

            function a() {
                r.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        949995: (e, t, n) => {
            "use strict";
            n.d(t, {
                bd: () => s,
                J6: () => c,
                pA: () => u
            });
            var r, o, i = n(36627),
                a = n.n(i);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }! function(e) {
                e[e.IMAGE = 0] = "IMAGE";
                e[e.DOCUMENT = 1] = "DOCUMENT";
                e[e.CODE = 2] = "CODE"
            }(r || (r = {}));
            var s = (l(o = {}, r.IMAGE, a().image), l(o, r.DOCUMENT, a().document), l(o, r.CODE, a().code), o),
                c = [r.DOCUMENT, r.IMAGE, r.CODE],
                u = [r.IMAGE, r.IMAGE, r.IMAGE]
        },
        793008: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                a = n(949995),
                l = n(36627),
                s = n.n(l);
            const c = function(e) {
                var t = e.icons,
                    n = e.className;
                return (0, r.jsxs)("div", {
                    className: i()(s().icons, n),
                    children: [(0, r.jsx)("div", {
                        className: s().wrapOne,
                        children: (0, r.jsx)("div", {
                            className: i()(s().icon, s().one, a.bd[t[0]])
                        })
                    }), (0, r.jsx)("div", {
                        className: s().wrapThree,
                        children: (0, r.jsx)("div", {
                            className: i()(s().icon, s().three, a.bd[t[2]])
                        })
                    }), (0, r.jsx)("div", {
                        className: s().wrapTwo,
                        children: (0, r.jsx)("div", {
                            className: i()(s().icon, s().two, a.bd[t[1]])
                        })
                    })]
                })
            }
        },
        444663: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                UPLOAD_ERROR_MODAL_KEY: () => S,
                default: () => L,
                openUploadError: () => w
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                l = n(264817),
                s = n(883489),
                c = n(202351),
                u = n(882723),
                d = n(793008),
                f = n(473903),
                p = n(452723),
                b = n(116094),
                g = n(799066),
                m = n(245325),
                E = n(442212),
                y = n(203600),
                _ = n(2590),
                v = n(949995),
                O = n(473708),
                A = n(427479),
                h = n.n(A);

            function x(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function T(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function j(e) {
                var t, n = e.onClose,
                    i = e.fileSize,
                    l = T(e, ["onClose", "fileSize"]),
                    s = null != i && y.Lw < i,
                    A = (0, m.Z)({
                        autoTrackExposure: !s,
                        experiment: g.Z,
                        location: y.cd.UPLOAD_ERROR_UPSELL
                    }),
                    j = A.isLoading,
                    I = A.suggestedPremiumType,
                    C = !s && I === y.p9.TIER_0,
                    P = (0, c.e7)([f.default], (function() {
                        return f.default.getCurrentUser()
                    })),
                    N = (0, r.jsx)(d.Z, {
                        icons: v.J6
                    });
                t = C ? O.Z.Messages.UPLOAD_AREA_PREMIUM_TIER_UPSELL_BODY_LINE_2.format({
                    premiumPlan: (0, b.Px)(y.p9.TIER_0),
                    premiumMaxSize: O.Z.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED
                }) : O.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_2_INCREASE;
                var L = o.useMemo((function() {
                        var e = b.ZP.getUserMaxFileSize(P),
                            t = (0, p.BU)(e / 1024, {
                                useKibibytes: !0
                            }),
                            n = O.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                                maxSize: t
                            });
                        switch (null == P ? void 0 : P.premiumType) {
                            case y.p9.TIER_0:
                                n = O.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_0.format({
                                    maxSize: t
                                });
                                break;
                            case y.p9.TIER_1:
                                n = O.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_1.format({
                                    maxSize: t
                                })
                        }
                        return n
                    }), [P]),
                    S = (0, r.jsxs)("div", {
                        className: h().body,
                        children: [(0, r.jsx)("span", {
                            children: L
                        }), (0, r.jsx)(u.Text, {
                            variant: "text-md/medium",
                            children: t
                        })]
                    });
                return (0, r.jsx)(E.Z, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            x(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    artElement: N,
                    artContainerClassName: a()(h().artContainer),
                    enableArtBoxShadow: !1,
                    type: y.cd.UPLOAD_ERROR_UPSELL,
                    title: O.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    body: S,
                    context: O.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                        maxSize: O.Z.Messages.FILE_UPLOAD_LIMIT_NEW_STANDARD
                    }),
                    glowUp: t,
                    analyticsLocation: {
                        section: _.jXE.FILE_UPLOAD_POPOUT
                    },
                    onClose: n,
                    subscriptionTier: C ? y.Si.TIER_0 : y.Si.TIER_2,
                    isLoading: j
                }, l))
            }
            var I = n(443812),
                C = n(36627),
                P = n.n(C);

            function N(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function L(e) {
                var t = e.title,
                    n = e.help,
                    o = e.showPremiumUpsell,
                    i = e.transitionState,
                    l = e.icons,
                    c = e.fileSize,
                    u = e.onClose,
                    f = (0, I.Dt)(),
                    p = null != l ? l : v.J6;
                return o ? (0, r.jsx)(j, {
                    transitionState: i,
                    onClose: u,
                    fileSize: c
                }) : (0, r.jsx)(s.Y0, {
                    size: s.Cg.DYNAMIC,
                    "aria-labelledby": f,
                    transitionState: i,
                    children: (0, r.jsx)("div", {
                        className: a()(P().uploadDropModal, P().error),
                        children: (0, r.jsxs)("div", {
                            className: P().inner,
                            children: [(0, r.jsx)(d.Z, {
                                icons: p
                            }), (0, r.jsx)("div", {
                                id: f,
                                className: P().title,
                                children: t
                            }), (0, r.jsx)("div", {
                                className: P().instructions,
                                children: n
                            })]
                        })
                    })
                })
            }
            var S = "UPLOAD_ERROR_MODAL_KEY";

            function w(e) {
                (0, l.h7)((function(t) {
                    return (0, r.jsx)(L, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                N(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, t, e))
                }), {
                    modalKey: S
                })
            }
        },
        272200: (e, t, n) => {
            "use strict";
            n.d(t, {
                Qi: () => r,
                iw: () => o,
                Kw: () => i,
                Vh: () => a,
                ub: () => l,
                bB: () => s
            });
            var r, o, i, a, l, s;
            ! function(e) {
                e[e.BUILT_IN = 0] = "BUILT_IN";
                e[e.APPLICATION = 1] = "APPLICATION"
            }(r || (r = {}));
            ! function(e) {
                e[e.BUILT_IN = 0] = "BUILT_IN";
                e[e.BUILT_IN_TEXT = 1] = "BUILT_IN_TEXT";
                e[e.BUILT_IN_INTEGRATION = 2] = "BUILT_IN_INTEGRATION";
                e[e.BOT = 3] = "BOT";
                e[e.PLACEHOLDER = 4] = "PLACEHOLDER"
            }(o || (o = {}));
            ! function(e) {
                e[e.ROLE = 1] = "ROLE";
                e[e.USER = 2] = "USER";
                e[e.CHANNEL = 3] = "CHANNEL"
            }(i || (i = {}));
            ! function(e) {
                e.DISCOVERY = "discovery";
                e.SUGGESTION = "suggestion";
                e.MENTION = "mention";
                e.PASTE = "paste";
                e.RECALL = "recall";
                e.POPULAR_COMMANDS = "popular_commands";
                e.MJ_CHAT_BAR = "mj_chat_bar";
                e.QUERY = "query"
            }(a || (a = {}));
            ! function(e) {
                e[e.BUILT_IN = 1] = "BUILT_IN";
                e[e.FRECENCY = 2] = "FRECENCY";
                e[e.APP = 3] = "APP"
            }(l || (l = {}));
            ! function(e) {
                e[e.CHAT = 0] = "CHAT";
                e[e.APPLICATION_LAUNCHER = 1] = "APPLICATION_LAUNCHER"
            }(s || (s = {}))
        },
        38272: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => b
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                a = n(882723),
                l = n(217674),
                s = n(930865),
                c = n(473708),
                u = n(53679),
                d = n.n(u);

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e, t) {
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
            const b = function(e) {
                var t, n, o, u = e.guildFeature,
                    b = e.guild,
                    g = e.className,
                    m = e.hideTooltip,
                    E = void 0 !== m && m,
                    y = e.tooltipPosition,
                    _ = void 0 === y ? "left" : y,
                    v = e.onClick,
                    O = b.hasFeature(u),
                    A = (0, s._p)(u);
                if (O) {
                    null != A && (o = c.Z.Messages.PREMIUM_GUILD_INCLUDED);
                    t = (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(l.Z, {
                            className: d().unlockedIcon
                        }), (0, r.jsx)(a.Heading, {
                            variant: "eyebrow",
                            className: d().description,
                            children: c.Z.Messages.PREMIUM_GUILD_TIER_UNLOCKED
                        })]
                    })
                } else {
                    null != A && (o = c.Z.Messages.CLICK_TO_LEARN_MORE);
                    t = (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(l.Z, {
                            className: d().icon
                        }), (0, r.jsx)(a.Heading, {
                            variant: "eyebrow",
                            className: d().description,
                            children: null != A && (0, s.e9)(A)
                        })]
                    })
                }
                n = E || null == o ? (0, r.jsx)("div", {
                    className: i()(d().availabilityIndicator, g),
                    children: t
                }) : (0, r.jsx)(a.Tooltip, {
                    position: _,
                    text: o,
                    children: function(e) {
                        return (0, r.jsx)("div", p(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))));
                                r.forEach((function(t) {
                                    f(e, t, n[t])
                                }))
                            }
                            return e
                        }({}, e), {
                            className: i()(d().availabilityIndicator, g),
                            children: t
                        }))
                    }
                });
                return null == v || O ? n : (0, r.jsx)(a.Clickable, {
                    onClick: v,
                    className: d().clickable,
                    children: n
                })
            }
        },
        597264: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => V
            });
            var r = n(785893),
                o = n(667294),
                i = n(202351),
                a = n(882723),
                l = n(153686),
                s = n(19585),
                c = n(38272),
                u = n(694755),
                d = n(567403),
                f = n(464187),
                p = n(473903),
                b = n(901654),
                g = n(331448),
                m = n(655402),
                E = n(95891),
                y = n(652591),
                _ = n(116094),
                v = n(2590),
                O = n(921431);

            function A(e, t) {
                var n = t.isGIF;
                if (e === O.pC.GUILD_BANNER) return n ? v.oNc.ANIMATED_BANNER : v.oNc.BANNER
            }

            function h(e) {
                return e === O.pC.AVATAR || e === O.pC.BANNER
            }
            var x = n(776203),
                T = n(964525),
                j = n(473708),
                I = n(511729),
                C = n.n(I);

            function P(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function N(e, t, n, r, o, i, a) {
                try {
                    var l = e[i](a),
                        s = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function L(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            N(i, r, o, a, l, "next", e)
                        }

                        function l(e) {
                            N(i, r, o, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function S(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function w(e) {
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

            function M(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return P(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return P(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var R = function(e, t) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function l(i) {
                        return function(l) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2];
                                                a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, l])
                        }
                    }
                },
                U = [{
                    gif: n(165358),
                    png: n(284382)
                }, {
                    gif: n(134928),
                    png: n(49192)
                }, {
                    gif: n(510101),
                    png: n(871861)
                }, {
                    gif: n(530396),
                    png: n(293408)
                }];

            function k(e) {
                var t = e.shouldAnimate,
                    n = void 0 === t || t,
                    i = M(o.useState(!1), 2),
                    a = i[0],
                    l = i[1];
                return (0, r.jsx)("div", {
                    className: C().gifGrid,
                    onMouseMove: function() {
                        return l(!0)
                    },
                    onMouseLeave: function() {
                        return l(!1)
                    },
                    children: U.map((function(e) {
                        return (0, r.jsx)("div", {
                            className: C().gif,
                            style: {
                                backgroundImage: "url(".concat(n || a ? e.gif : e.png, ")")
                            }
                        }, e.gif)
                    }))
                })
            }

            function D(e) {
                var t = e.guildFeature,
                    n = e.guild;
                return null == t || null == n ? null : (0, r.jsx)("div", {
                    className: C().pillWrapper,
                    children: (0, r.jsx)(c.Z, {
                        guildFeature: t,
                        guild: n,
                        hideTooltip: !0
                    })
                })
            }

            function Z(e) {
                var t = e.uploadType,
                    n = e.guild;
                return (0, r.jsxs)("div", {
                    className: C().optionBoxText,
                    children: [(0, r.jsx)(D, {
                        guild: n,
                        guildFeature: A(t, {
                            isGIF: !0
                        })
                    }), (0, r.jsxs)("div", {
                        className: C().optionBoxDescription,
                        children: [h(t) && (0, r.jsx)(a.TooltipContainer, {
                            className: C().nitroWheelFlairContainer,
                            text: j.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                            children: (0, r.jsx)(E.Z, {
                                className: C().nitroWheelFlair
                            })
                        }), j.Z.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF]
                    })]
                })
            }

            function B(e) {
                var t = e.title,
                    n = e.uploadType,
                    o = e.guild;
                return (0, r.jsxs)("div", {
                    className: C().optionBoxText,
                    children: [(0, r.jsx)(D, {
                        guildFeature: A(n, {
                            isGIF: !1
                        }),
                        guild: o
                    }), (0, r.jsx)("div", {
                        className: C().optionBoxDescription,
                        children: t
                    })]
                })
            }

            function V(e) {
                var t = e.transitionState,
                    c = e.onClose,
                    E = e.onComplete,
                    A = e.uploadType,
                    h = e.maxFileSizeBytes,
                    I = e.showUpsellHeader,
                    P = e.filters,
                    N = e.analyticsLocation,
                    S = e.analyticsLocations,
                    M = void 0 === S ? [] : S,
                    U = e.modalSubTitle,
                    D = e.imageSpecifications,
                    V = e.modalTitle,
                    G = void 0 === V ? j.Z.Messages.SELECT_IMAGE_MODAL_TITLE : V,
                    F = e.uploadOptionTitle,
                    H = void 0 === F ? j.Z.Messages.UPLOAD_IMAGE : F,
                    z = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        c();
                        E(e, t, n)
                    },
                    Y = (0, i.e7)([b.Z], (function() {
                        return b.Z.isFocused()
                    })),
                    K = (0, i.e7)([p.default], (function() {
                        return p.default.getCurrentUser()
                    })),
                    W = (0, i.e7)([f.Z], (function() {
                        return f.Z.getGuildId()
                    })),
                    X = (0, i.e7)([d.Z], (function() {
                        return d.Z.getGuild(W)
                    })),
                    J = o.useContext(a.AccessibilityPreferencesContext).reducedMotion,
                    q = (0,
                        a.useModalContext)(),
                    $ = !_.ZP.canUseAnimatedAvatar(K) && A === O.pC.AVATAR,
                    Q = (0, s.Z)(M, l.Z.SELECT_IMAGE_MODAL).analyticsLocations;
                o.useEffect((function() {
                    $ && y.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: v.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                        location_stack: Q
                    });
                    y.default.track(v.rMx.OPEN_MODAL, {
                        type: v.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                        location: N
                    })
                }), [$, N, Q]);
                return (0, r.jsxs)(a.ModalRoot, {
                    transitionState: t,
                    size: a.ModalSize.SMALL,
                    children: [(0, r.jsxs)(a.ModalHeader, {
                        className: C().modalHeader,
                        separator: !1,
                        children: [(0, r.jsxs)("div", {
                            children: [(0, r.jsx)(a.FormTitle, {
                                tag: a.FormTitleTags.H1,
                                className: C().modalTitle,
                                children: G
                            }), null != U ? (0, r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: U
                            }) : null]
                        }), (0, r.jsx)(a.ModalCloseButton, {
                            onClick: c,
                            className: C().modalCloseButton
                        })]
                    }), (0, r.jsxs)(a.ModalContent, {
                        className: C().modalContent,
                        children: [(0, r.jsxs)("div", {
                            className: C().imagePickerContainer,
                            children: [(0, r.jsxs)(a.Clickable, {
                                className: C().optionBox,
                                children: [(0, r.jsx)("div", {
                                    className: C().contentCircle,
                                    children: (0, r.jsx)(m.Z, {
                                        className: C().uploadIcon
                                    })
                                }), (0, r.jsx)(a.Text, {
                                    variant: "text-sm/semibold",
                                    color: "interactive-normal",
                                    children: (0, r.jsx)(B, {
                                        title: H,
                                        uploadType: A,
                                        guild: X
                                    })
                                }), (0, r.jsx)(u.ZP, {
                                    onChange: function(e, t) {
                                        if (t.type === T.m.MP4) return z(e, t);
                                        (0, a.openModalLazy)(L((function() {
                                            var o, i;
                                            return R(this, (function(a) {
                                                switch (a.label) {
                                                    case 0:
                                                        return [4, Promise.all([n.e(40532), n.e(40056), n.e(19887), n.e(24251), n.e(91406), n.e(42643), n.e(17363), n.e(56620), n.e(33928)]).then(n.bind(n, 17363))];
                                                    case 1:
                                                        o = a.sent(), i = o.default;
                                                        return [2, function(n) {
                                                            return (0, r.jsx)(i, w({
                                                                imgURI: e,
                                                                file: t,
                                                                onCrop: z,
                                                                uploadType: A,
                                                                showUpsellHeader: I,
                                                                allowSkip: !0,
                                                                analyticsPage: null == N ? void 0 : N.page
                                                            }, n))
                                                        }]
                                                }
                                            }))
                                        })), {
                                            contextKey: q
                                        })
                                    },
                                    maxFileSizeBytes: h,
                                    onFileSizeError: function() {
                                        c();
                                        (0, x.Z)(h)
                                    },
                                    filters: P
                                })]
                            }), (0, r.jsxs)(a.Clickable, {
                                className: C().optionBox,
                                onClick: function() {
                                    (0, a.openModalLazy)(L((function() {
                                        var e, t;
                                        return R(this, (function(o) {
                                            switch (o.label) {
                                                case 0:
                                                    return [4, Promise.all([n.e(40532), n.e(96259), n.e(40056), n.e(19887), n.e(79730), n.e(24784), n.e(24251), n.e(91406), n.e(86159), n.e(85004), n.e(8969)]).then(n.bind(n, 159626))];
                                                case 1:
                                                    e = o.sent(), t = e.default;
                                                    return [2, function(e) {
                                                        return (0, r.jsx)(t, w({
                                                            uploadType: A,
                                                            onComplete: function(e, t) {
                                                                return z(e, t, !0)
                                                            },
                                                            showUpsellHeader: I,
                                                            analyticsPage: null == N ? void 0 : N.page
                                                        }, e))
                                                    }]
                                            }
                                        }))
                                    })), {
                                        contextKey: q
                                    })
                                },
                                children: [(0, r.jsxs)("div", {
                                    className: C().contentCircle,
                                    children: [(0, r.jsx)(k, {
                                        shouldAnimate: Y && !J.enabled
                                    }), (0, r.jsx)("div", {
                                        className: C().gifIconContainer,
                                        children: (0, r.jsx)(g.Z, {
                                            className: C().gifIcon
                                        })
                                    })]
                                }), (0, r.jsx)(a.Text, {
                                    variant: "text-sm/semibold",
                                    color: "interactive-normal",
                                    children: (0, r.jsx)(Z, {
                                        uploadType: A,
                                        guild: X
                                    })
                                })]
                            })]
                        }), null != D ? (0, r.jsx)(a.Text, {
                            className: C().imageSpecifications,
                            variant: "text-sm/normal",
                            children: D
                        }) : null]
                    })]
                })
            }
        },
        776203: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n(444663),
                o = n(149258),
                i = n(473708);

            function a(e) {
                (0, r.openUploadError)({
                    title: i.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: i.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                        maxSize: (0, o.Ng)(e)
                    })
                })
            }
        },
        897436: (e, t, n) => {
            "use strict";
            n.d(t, {
                Jp: () => u,
                Xx: () => d,
                JY: () => p
            });
            var r = n(318715),
                o = n(260561),
                i = n(473903),
                a = n(116094),
                l = n(473708),
                s = (0, o.B)({
                    kind: "user",
                    id: "2023-05_inventory_guild_packs",
                    label: "Inventory Guild Packs Experiment",
                    defaultConfig: {
                        desktopViewAndUseAndCollectEnabled: !1,
                        mobileViewAndUseEnabled: !1,
                        mobileAndFreemiumCollectEnabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Desktop view/use/collect",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 2,
                        label: "Desktop view/use/collect and mobile view/use",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 3,
                        label: "Read-only pack emoji for logged out users",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !1,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 4,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0
                        }
                    }, {
                        id: 5,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0
                        }
                    }]
                }),
                c = function(e) {
                    var t = e.user,
                        n = e.config,
                        r = n.desktopViewAndUseAndCollectEnabled,
                        o = (n.mobileViewAndUseEnabled, n.mobileAndFreemiumCollectEnabled);
                    false;
                    return {
                        viewAndUseEnabled: r,
                        showTryPacksModalAndV2Copy: o,
                        collectEnabled: a.ZP.isPremium(t) ? r : o
                    }
                },
                u = function(e) {
                    var t = e.user,
                        n = e.autoTrackExposure,
                        r = void 0 === n || n;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1
                    } : c({
                        user: t,
                        config: s.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: r
                        })
                    })
                },
                d = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            expressionSourceGuild: void 0,
                            autoTrackExposure: !0
                        },
                        n = t.expressionSourceGuild,
                        o = void 0 === n ? void 0 : n,
                        a = t.autoTrackExposure,
                        l = void 0 === a || a,
                        u = (0, r.ZP)([i.default], (function() {
                            return i.default.getCurrentUser()
                        })),
                        d = s.useExperiment({
                            location: "inventory_guild_setting_experiment"
                        }, {
                            autoTrackExposure: l
                        }),
                        f = c({
                            user: u,
                            config: d
                        }),
                        p = f.viewAndUseEnabled,
                        b = f.showTryPacksModalAndV2Copy,
                        g = f.collectEnabled,
                        m = p && g && null != o && !1 !== (null == o || null === (e = o.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible);
                    return {
                        viewAndUseEnabled: p,
                        collectEnabled: m,
                        showTryPacksModalAndV2Copy: b
                    }
                },
                f = (0, o.B)({
                    kind: "guild",
                    id: "2023-06_inventory_guild_setting",
                    label: "Inventory Guild Settings Experiment",
                    defaultConfig: {
                        showSettingsToggle: !1,
                        allowCollection: !1,
                        getNewSettingsDescription: function() {
                            return null
                        }
                    },
                    treatments: [{
                        id: 1,
                        label: "Show settings toggle, but collection is not allowed.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !1,
                            getNewSettingsDescription: function() {
                                return l.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_LATE_AUGUST
                            }
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: function() {
                                return l.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_AUGUST
                            }
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: function() {
                                return l.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_LATE_AUGUST
                            }
                        }
                    }]
                }),
                p = function(e) {
                    var t = f.useExperiment({
                        guildId: null != e ? e : "",
                        location: "482926_3"
                    }, {
                        autoTrackExposure: !0
                    });
                    return {
                        showSettingsToggle: t.showSettingsToggle,
                        allowCollection: t.allowCollection,
                        getNewSettingsDescription: t.getNewSettingsDescription
                    }
                }
        },
        317387: (e, t, n) => {
            "use strict";
            n.d(t, {
                L: () => a
            });
            var r, o, i = n(260561);
            ! function(e) {
                e.Global = "2022-09_premium_tier_0_global"
            }(r || (r = {}));
            ! function(e) {
                e[e.VARIANT_1 = 0] = "VARIANT_1";
                e[e.VARIANT_2 = 1] = "VARIANT_2"
            }(o || (o = {}));
            var a = (0, i.B)({
                kind: "user",
                id: r.Global,
                label: "Premium tier 0 (Global)",
                defaultConfig: {
                    enableTier0: !1
                },
                treatments: [{
                    id: 1,
                    label: "Variant 1",
                    config: {
                        enableTier0: !0,
                        variant: o.VARIANT_1
                    }
                }, {
                    id: 2,
                    label: "Variant 2",
                    config: {
                        enableTier0: !0,
                        variant: o.VARIANT_2
                    }
                }]
            })
        },
        245325: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => f
            });
            var r = n(202351),
                o = n(473903),
                i = n(551778),
                a = n(116094),
                l = n(317387),
                s = n(159895),
                c = n(884123),
                u = n(203600);
            var d = n(717035);

            function f(e) {
                var t = e.autoTrackExposure,
                    n = e.experiment,
                    f = e.location,
                    p = (0, r.e7)([o.default], (function() {
                        return o.default.getCurrentUser()
                    })),
                    b = (0, d.N)(),
                    g = null != b,
                    m = null != p && (0, a.I5)(p);
                (0, s.Z$)(n);
                var E = l.L.useExperiment({
                        location: "014fbb_1"
                    }, {
                        autoTrackExposure: !1
                    }).enableTier0,
                    y = n.useExperiment({
                        location: null != f ? f : "1"
                    }, {
                        autoTrackExposure: E && !m && !g && t
                    }),
                    _ = y.enabled,
                    v = y.useExpectedValue,
                    O = y.useLikelihood,
                    A = (0, r.cj)([c.Z], (function() {
                        var e = c.Z.getState();
                        return {
                            fetched: e.fetched,
                            premiumLikelihood: e.premiumLikelihood
                        }
                    })),
                    h = A.premiumLikelihood,
                    x = A.fetched,
                    T = (0, r.e7)([i.Z], (function() {
                        return i.Z.isLoadedForSKUs([u.Si.TIER_0, u.Si.TIER_2])
                    })),
                    j = !m && _ && E && !g && (v ? !x || !T : !x),
                    I = u.p9.TIER_2;
                if (E)
                    if (g) {
                        var C = b.subscription_trial;
                        (null == C ? void 0 : C.sku_id) === u.Si.TIER_0 ? I = u.p9.TIER_0 : (null == C ? void 0 : C.sku_id) === u.Si.TIER_2 && (I = u.p9.TIER_2)
                    } else if (!m && !j && _)
                    if (v) {
                        I = function(e, t, n) {
                            return null == e ? u.p9.TIER_2 : e[u.Si.TIER_0] * t > e[u.Si.TIER_2] * n ? u.p9.TIER_0 : u.p9.TIER_2
                        }(h, (0, a.aS)(u.Xh.PREMIUM_MONTH_TIER_0).amount, (0, a.aS)(u.Xh.PREMIUM_MONTH_TIER_2).amount)
                    } else O && (I = function(e) {
                        if (null == e) return u.p9.TIER_0;
                        var t = e[s.Bc],
                            n = e[u.Si.TIER_0],
                            r = e[u.Si.TIER_2];
                        return r > n && r > t ? u.p9.TIER_2 : u.p9.TIER_0
                    }(h));
                return {
                    isLoading: j,
                    suggestedPremiumType: I
                }
            }
        },
        442212: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => x
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                l = n(882723),
                s = n(153686),
                c = n(19585),
                u = n(594302),
                d = n(652591),
                f = n(189146),
                p = n(717035),
                b = n(455706),
                g = n(70535),
                m = n(203600),
                E = n(2590),
                y = n(473708),
                _ = n(296024),
                v = n.n(_),
                O = n(545292),
                A = n.n(O);

            function h(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function x(e) {
                var t, n, i = e.title,
                    _ = e.type,
                    O = e.guildBoostProps,
                    x = e.analyticsSource,
                    T = e.analyticsLocation,
                    j = e.body,
                    I = e.context,
                    C = e.glowUp,
                    P = e.modalClassName,
                    N = e.artContainerClassName,
                    L = e.bodyClassName,
                    S = e.transitionState,
                    w = e.onClose,
                    M = e.onSubscribeClick,
                    R = e.onSecondaryClick,
                    U = e.secondaryCTA,
                    k = e.subscribeButtonText,
                    D = e.showNewBadge,
                    Z = void 0 !== D && D,
                    B = e.enableArtBoxShadow,
                    V = void 0 === B || B,
                    G = e.subscriptionTier,
                    F = void 0 === G ? m.Si.TIER_2 : G,
                    H = e.isLoading,
                    z = void 0 !== H && H,
                    Y = e.hideBackButton,
                    K = e.backButtonText,
                    W = h(e, ["title", "type", "guildBoostProps", "analyticsSource", "analyticsLocation", "body", "context", "glowUp", "modalClassName", "artContainerClassName", "bodyClassName", "transitionState", "onClose", "onSubscribeClick", "onSecondaryClick", "secondaryCTA", "subscribeButtonText", "showNewBadge", "enableArtBoxShadow", "subscriptionTier", "isLoading", "hideBackButton", "backButtonText"]),
                    X = null != O,
                    J = (0, p.N)(),
                    q = (null == J || null === (t = J.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === F && !X,
                    $ = (0, f.zH)(!q),
                    Q = (0,
                        c.Z)(s.Z.PREMIUM_UPSELL_MODAL).analyticsLocations;
                o.useEffect((function() {
                    z || (X ? d.default.track(E.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                        type: "".concat(_, " - Tier ").concat(O.boostedGuildTier),
                        guild_id: O.guild.id,
                        channel_id: O.channelId,
                        location: T,
                        location_stack: Q
                    }) : d.default.track(E.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: _,
                        source: x,
                        location_stack: Q,
                        sku_id: F
                    }))
                }), [X, F, z]);
                var ee, te = V ? a()(v().artContainer, v().artContainerBoxShadow, N) : a()(v().artContainer, N),
                    ne = null;
                ne = "artURL" in W ? (0, r.jsx)("img", {
                    className: v().art,
                    alt: "",
                    src: W.artURL
                }) : W.artElement;
                return (0, r.jsxs)(l.ModalRoot, {
                    className: a()(v().root, P),
                    "aria-label": i,
                    transitionState: S,
                    children: [(0, r.jsxs)("div", {
                        className: te,
                        children: [ne, Z ? (0, r.jsx)("img", {
                            className: v().sparkleBadge,
                            alt: "",
                            src: A()
                        }) : null]
                    }), (0, r.jsx)(l.ModalContent, {
                        className: v().content,
                        children: z ? (0, r.jsx)(l.Spinner, {}) : (0, r.jsx)(r.Fragment, {
                            children: q ? (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(g.ZP, {
                                    onClose: w,
                                    type: _,
                                    subscriptionTier: null !== (ee = null == J || null === (n = J.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== ee ? ee : m.Si.TIER_2,
                                    headingText: i,
                                    context: I,
                                    analyticsLocationObject: T,
                                    children: C
                                })
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(l.Heading, {
                                    className: v().header,
                                    variant: "heading-xl/semibold",
                                    children: i
                                }), (0, r.jsx)(l.Text, {
                                    variant: "text-md/normal",
                                    className: a()(L),
                                    children: j
                                })]
                            })
                        })
                    }), (0, r.jsxs)(l.ModalFooter, {
                        className: v().footer,
                        children: [(0, r.jsxs)("div", {
                            className: v().primaryActions,
                            children: [null != U ? (0, r.jsx)(l.Button, {
                                className: v().secondaryAction,
                                onClick: R,
                                size: l.Button.Sizes.SMALL,
                                color: l.Button.Colors.PRIMARY,
                                look: l.Button.Looks.LINK,
                                children: U
                            }) : null, function() {
                                var e;
                                if (X) return (0, r.jsx)(u.Z, {
                                    analyticsLocation: T,
                                    guild: O.guild,
                                    onClose: w
                                });
                                var t = q ? $ ? y.Z.Messages.MARKETING_PAGE_CTA_TRY_1_MONTH_FREE : (null == J || null === (e = J.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === m.Si.TIER_2 ? y.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : y.Z.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : void 0,
                                    n = q ? null == J ? void 0 : J.trial_id : null;
                                return (0, r.jsx)(b.Z, {
                                    premiumModalAnalyticsLocation: T,
                                    subscriptionTier: F,
                                    trialId: n,
                                    size: l.Button.Sizes.SMALL,
                                    color: l.Button.Colors.GREEN,
                                    onClick: function() {
                                        null == M || M();
                                        w()
                                    },
                                    buttonText: null != k ? k : t
                                })
                            }()]
                        }), !Y && (0, r.jsx)(l.Button, {
                            onClick: w,
                            size: l.Button.Sizes.SMALL,
                            color: l.Button.Colors.PRIMARY,
                            look: l.Button.Looks.LINK,
                            children: null != K ? K : y.Z.Messages.BACK
                        })]
                    })]
                })
            }
        },
        331448: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
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

            function l(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function s(e) {
                var t = e.width,
                    n = void 0 === t ? 29 : t,
                    s = e.height,
                    c = void 0 === s ? 22 : s,
                    u = e.color,
                    d = void 0 === u ? "currentColor" : u,
                    f = e.backgroundColor,
                    p = l(e, ["width", "height", "color", "backgroundColor"]);
                return (0, r.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(p)), {
                    width: n,
                    height: c,
                    viewBox: "0 0 29 22",
                    children: (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsx)("rect", {
                            width: n,
                            height: c,
                            fill: f,
                            fillOpacity: ".8",
                            rx: "3"
                        }), (0, r.jsx)("path", {
                            d: "M8.01725 16.7054C7.17625 16.7054 6.43191 16.4879 5.78425 16.0529C5.13658 15.6179 4.63391 15.0089 4.27625 14.2259C3.91858 13.4333 3.73975 12.5246 3.73975 11.4999C3.73975 10.4849 3.92825 9.58593 4.30525 8.80293C4.69191 8.01993 5.24775 7.4061 5.97275 6.96143C6.70741 6.51677 7.58225 6.29443 8.59725 6.29443C9.45758 6.29443 10.2261 6.4781 10.9027 6.84543C11.5891 7.21277 12.1062 7.72993 12.4542 8.39693L10.8157 9.57143C10.3227 8.66277 9.58808 8.20843 8.61175 8.20843C7.72241 8.20843 7.04091 8.49843 6.56725 9.07843C6.09358 9.64877 5.85675 10.4559 5.85675 11.4999C5.85675 12.5536 6.09358 13.3656 6.56725 13.9359C7.04091 14.5063 7.72241 14.7914 8.61175 14.7914C9.00808 14.7914 9.37058 14.7189 9.69925 14.5739C10.0376 14.4193 10.2986 14.2114 10.4822 13.9504V12.7034H8.17675V10.8184H12.5412V16.5024H10.8302L10.5547 15.5454C9.98441 16.3188 9.13858 16.7054 8.01725 16.7054Z",
                            fill: d
                        }), (0, r.jsx)("path", {
                            d: "M16.5444 16.5024H14.4274V6.49743H16.5444V16.5024Z",
                            fill: d
                        }), (0, r.jsx)("path", {
                            d: "M20.6933 16.5024H18.5763V6.49743H25.2608V8.41143H20.6933V10.7894H24.4053V12.7034H20.6933V16.5024Z",
                            fill: d
                        })]
                    })
                }))
            }
        },
        391438: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(281110),
                o = n(652591);

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        i(e, t, n[t])
                    }))
                }
                return e
            }

            function l(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function s(e, t, n) {
                var r = t.trackedActionData,
                    i = l(t, ["trackedActionData"]),
                    s = {
                        url: i.url,
                        request_method: n
                    };
                return new Promise((function(t, n) {
                    e(i).then((function(e) {
                        var n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e));
                        (0, o.trackNetworkAction)(r.event, a({
                            status_code: e.status
                        }, s, n));
                        t(e)
                    })).catch((function(e) {
                        var t, i, l = r.properties;
                        "function" == typeof r.properties && (l = r.properties(e));
                        (0, o.trackNetworkAction)(r.event, a({
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (i = e.body) || void 0 === i ? void 0 : i.message
                        }, s, l));
                        n(e)
                    }))
                }))
            }
            const c = {
                get: function(e) {
                    return s(r.ZP.get, e, "get")
                },
                post: function(e) {
                    return s(r.ZP.post, e, "post")
                },
                put: function(e) {
                    return s(r.ZP.put, e, "put")
                },
                patch: function(e) {
                    return s(r.ZP.patch, e, "patch")
                },
                delete: function(e) {
                    return s(r.ZP.delete, e, "del")
                }
            }
        },
        248634: (e, t, n) => {
            "use strict";
            n.d(t, {
                z: () => r
            });
            var r;
            ! function(e) {
                e.MATCH_ALL = "match_all";
                e.MATCH_SOME = "match_some"
            }(r || (r = {}));
            new Set(["match_all", "match_some"])
        },
        283151: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n(667294);

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function i(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a() {
                var e = i((0, r.useState)({}), 2)[1];
                return (0, r.useCallback)((function() {
                    return e({})
                }), [])
            }
        }
    }
]);