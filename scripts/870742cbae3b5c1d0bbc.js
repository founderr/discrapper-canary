(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [95238, 97264, 67145], {
        667237: e => {
            "use strict";

            function t(e) {
                this._capacity = o(e);
                this._length = 0;
                this._front = 0;
                this._makeCapacity();
                if (n(e)) {
                    for (var t = e.length, r = 0; r < t; ++r) this[r] = e[r];
                    this._length = t
                }
            }
            t.prototype.toArray = function() {
                for (var e = this._length, t = new Array(e), n = this._front, r = this._capacity, o = 0; o < e; ++o) t[o] = this[n + o & r - 1];
                return t
            };
            t.prototype.push = function(e) {
                var t = arguments.length,
                    n = this._length;
                if (t > 1) {
                    var r = this._capacity;
                    if (n + t > r) {
                        for (var o = 0; o < t; ++o) {
                            this._checkCapacity(n + 1);
                            this[i = this._front + n & this._capacity - 1] = arguments[o];
                            n++;
                            this._length = n
                        }
                        return n
                    }
                    for (var i = this._front, o = 0; o < t; ++o) {
                        this[i + n & r - 1] = arguments[o];
                        i++
                    }
                    this._length = n + t;
                    return n + t
                }
                if (0 === t) return n;
                this._checkCapacity(n + 1);
                this[o = this._front + n & this._capacity - 1] = e;
                this._length = n + 1;
                return n + 1
            };
            t.prototype.pop = function() {
                var e = this._length;
                if (0 !== e) {
                    var t = this._front + e - 1 & this._capacity - 1,
                        n = this[t];
                    this[t] = void 0;
                    this._length = e - 1;
                    return n
                }
            };
            t.prototype.shift = function() {
                var e = this._length;
                if (0 !== e) {
                    var t = this._front,
                        n = this[t];
                    this[t] = void 0;
                    this._front = t + 1 & this._capacity - 1;
                    this._length = e - 1;
                    return n
                }
            };
            t.prototype.unshift = function(e) {
                var t = this._length,
                    n = arguments.length;
                if (n > 1) {
                    if (t + n > (o = this._capacity)) {
                        for (var r = n - 1; r >= 0; r--) {
                            this._checkCapacity(t + 1);
                            var o = this._capacity;
                            this[a = (this._front - 1 & o - 1 ^ o) - o] = arguments[r];
                            t++;
                            this._length = t;
                            this._front = a
                        }
                        return t
                    }
                    var i = this._front;
                    for (r = n - 1; r >= 0; r--) {
                        var a;
                        this[a = (i - 1 & o - 1 ^ o) - o] = arguments[r];
                        i = a
                    }
                    this._front = i;
                    this._length = t + n;
                    return t + n
                }
                if (0 === n) return t;
                this._checkCapacity(t + 1);
                o = this._capacity;
                this[r = (this._front - 1 & o - 1 ^ o) - o] = e;
                this._length = t + 1;
                this._front = r;
                return t + 1
            };
            t.prototype.peekBack = function() {
                var e = this._length;
                if (0 !== e) {
                    return this[this._front + e - 1 & this._capacity - 1]
                }
            };
            t.prototype.peekFront = function() {
                if (0 !== this._length) return this[this._front]
            };
            t.prototype.get = function(e) {
                var t = e;
                if (t === (0 | t)) {
                    var n = this._length;
                    t < 0 && (t += n);
                    if (!(t < 0 || t >= n)) return this[this._front + t & this._capacity - 1]
                }
            };
            t.prototype.isEmpty = function() {
                return 0 === this._length
            };
            t.prototype.clear = function() {
                this._length = 0;
                this._front = 0;
                this._makeCapacity()
            };
            t.prototype.toString = function() {
                return this.toArray().toString()
            };
            t.prototype.valueOf = t.prototype.toString;
            t.prototype.removeFront = t.prototype.shift;
            t.prototype.removeBack = t.prototype.pop;
            t.prototype.insertFront = t.prototype.unshift;
            t.prototype.insertBack = t.prototype.push;
            t.prototype.enqueue = t.prototype.push;
            t.prototype.dequeue = t.prototype.shift;
            t.prototype.toJSON = t.prototype.toArray;
            Object.defineProperty(t.prototype, "length", {
                get: function() {
                    return this._length
                },
                set: function() {
                    throw new RangeError("")
                }
            });
            t.prototype._makeCapacity = function() {
                for (var e = this._capacity, t = 0; t < e; ++t) this[t] = void 0
            };
            t.prototype._checkCapacity = function(e) {
                this._capacity < e && this._resizeTo(o(1.5 * this._capacity + 16))
            };
            t.prototype._resizeTo = function(e) {
                var t = this._front,
                    n = this._capacity,
                    o = new Array(n),
                    i = this._length;
                r(this, 0, o, 0, n);
                this._capacity = e;
                this._makeCapacity();
                this._front = 0;
                if (t + i <= n) r(o, t, this, 0, i);
                else {
                    var a = i - (t + i & n - 1);
                    r(o, t, this, 0, a);
                    r(o, 0, this, a, i - a)
                }
            };
            var n = Array.isArray;

            function r(e, t, n, r, o) {
                for (var i = 0; i < o; ++i) n[i + r] = e[i + t]
            }

            function o(e) {
                if ("number" != typeof e) {
                    if (!n(e)) return 16;
                    e = e.length
                }
                return function(e) {
                    e >>>= 0;
                    e -= 1;
                    e |= e >> 1;
                    e |= e >> 2;
                    e |= e >> 4;
                    e |= e >> 8;
                    return 1 + (e |= e >> 16)
                }(Math.min(Math.max(16, e), 1073741824))
            }
            e.exports = t
        },
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
                c = n(936719),
                s = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var n = i(e),
                    u = !n && o(e),
                    f = !n && !u && a(e),
                    d = !n && !u && !f && c(e),
                    p = n || u || f || d,
                    h = p ? r(e.length, String) : [],
                    y = h.length;
                for (var b in e) !t && !s.call(e, b) || p && ("length" == b || f && ("offset" == b || "parent" == b) || d && ("buffer" == b || "byteLength" == b || "byteOffset" == b) || l(b, y)) || h.push(b);
                return h
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
                c = (l ? l.isBuffer : void 0) || o;
            e.exports = c
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
        823493: (e, t, n) => {
            var r = n(23279),
                o = n(513218);
            e.exports = function(e, t, n) {
                var i = !0,
                    a = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");
                if (o(n)) {
                    i = "leading" in n ? !!n.leading : i;
                    a = "trailing" in n ? !!n.trailing : a
                }
                return r(e, t, {
                    leading: i,
                    maxWait: t,
                    trailing: a
                })
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
                bd: () => c,
                J6: () => s,
                pA: () => u
            });
            var r, o, i = n(334276),
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
            var c = (l(o = {}, r.IMAGE, a().image), l(o, r.DOCUMENT, a().document), l(o, r.CODE, a().code), o),
                s = [r.DOCUMENT, r.IMAGE, r.CODE],
                u = [r.IMAGE, r.IMAGE, r.IMAGE]
        },
        793008: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                a = n(949995),
                l = n(334276),
                c = n.n(l);
            const s = function(e) {
                var t = e.icons,
                    n = e.className;
                return (0, r.jsxs)("div", {
                    className: i()(c().icons, n),
                    children: [(0, r.jsx)("div", {
                        className: c().wrapOne,
                        children: (0, r.jsx)("div", {
                            className: i()(c().icon, c().one, a.bd[t[0]])
                        })
                    }), (0, r.jsx)("div", {
                        className: c().wrapThree,
                        children: (0, r.jsx)("div", {
                            className: i()(c().icon, c().three, a.bd[t[2]])
                        })
                    }), (0, r.jsx)("div", {
                        className: c().wrapTwo,
                        children: (0, r.jsx)("div", {
                            className: i()(c().icon, c().two, a.bd[t[1]])
                        })
                    })]
                })
            }
        },
        444663: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                UPLOAD_ERROR_MODAL_KEY: () => L,
                default: () => P,
                openUploadError: () => N
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                l = n(264817),
                c = n(883489),
                s = n(202351),
                u = n(304548),
                f = n(793008),
                d = n(473903),
                p = n(452723),
                h = n(116094),
                y = n(799066),
                b = n(245325),
                g = n(442212),
                v = n(203600),
                _ = n(2590),
                m = n(949995),
                E = n(473708),
                O = n(505021),
                T = n.n(O);

            function A(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function I(e, t) {
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
                var t, n = e.onClose,
                    i = e.fileSize,
                    l = I(e, ["onClose", "fileSize"]),
                    c = null != i && v.Lw < i,
                    O = (0, b.Z)({
                        autoTrackExposure: !c,
                        experiment: y.Z,
                        location: v.cd.UPLOAD_ERROR_UPSELL
                    }),
                    x = O.isLoading,
                    j = O.suggestedPremiumType,
                    w = !c && j === v.p9.TIER_0,
                    C = (0,
                        s.e7)([d.default], (function() {
                        return d.default.getCurrentUser()
                    })),
                    S = (0, r.jsx)(f.Z, {
                        icons: m.J6
                    });
                t = w ? E.Z.Messages.UPLOAD_AREA_PREMIUM_TIER_UPSELL_BODY_LINE_2.format({
                    premiumPlan: (0, h.Px)(v.p9.TIER_0),
                    premiumMaxSize: E.Z.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED
                }) : E.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_2_INCREASE;
                var P = o.useMemo((function() {
                        var e = h.ZP.getUserMaxFileSize(C),
                            t = (0, p.BU)(e / 1024, {
                                useKibibytes: !0
                            }),
                            n = E.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                                maxSize: t
                            });
                        switch (null == C ? void 0 : C.premiumType) {
                            case v.p9.TIER_0:
                                n = E.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_0.format({
                                    maxSize: t
                                });
                                break;
                            case v.p9.TIER_1:
                                n = E.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_1.format({
                                    maxSize: t
                                })
                        }
                        return n
                    }), [C]),
                    L = (0, r.jsxs)("div", {
                        className: T().body,
                        children: [(0, r.jsx)("span", {
                            children: P
                        }), (0, r.jsx)(u.Text, {
                            variant: "text-md/medium",
                            children: t
                        })]
                    });
                return (0, r.jsx)(g.Z, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            A(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    artElement: S,
                    artContainerClassName: a()(T().artContainer),
                    enableArtBoxShadow: !1,
                    type: v.cd.UPLOAD_ERROR_UPSELL,
                    title: E.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    body: L,
                    context: E.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                        maxSize: E.Z.Messages.FILE_UPLOAD_LIMIT_NEW_STANDARD
                    }),
                    glowUp: t,
                    analyticsLocation: {
                        section: _.jXE.FILE_UPLOAD_POPOUT
                    },
                    onClose: n,
                    subscriptionTier: w ? v.Si.TIER_0 : v.Si.TIER_2,
                    isLoading: x
                }, l))
            }
            var j = n(443812),
                w = n(334276),
                C = n.n(w);

            function S(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function P(e) {
                var t = e.title,
                    n = e.help,
                    o = e.showPremiumUpsell,
                    i = e.transitionState,
                    l = e.icons,
                    s = e.fileSize,
                    u = e.onClose,
                    d = (0, j.Dt)(),
                    p = null != l ? l : m.J6;
                return o ? (0, r.jsx)(x, {
                    transitionState: i,
                    onClose: u,
                    fileSize: s
                }) : (0, r.jsx)(c.Y0, {
                    size: c.Cg.DYNAMIC,
                    "aria-labelledby": d,
                    transitionState: i,
                    children: (0, r.jsx)("div", {
                        className: a()(C().uploadDropModal, C().error),
                        children: (0, r.jsxs)("div", {
                            className: C().inner,
                            children: [(0, r.jsx)(f.Z, {
                                icons: p
                            }), (0, r.jsx)("div", {
                                id: d,
                                className: C().title,
                                children: t
                            }), (0, r.jsx)("div", {
                                className: C().instructions,
                                children: n
                            })]
                        })
                    })
                })
            }
            var L = "UPLOAD_ERROR_MODAL_KEY";

            function N(e) {
                (0, l.h7)((function(t) {
                    return (0, r.jsx)(P, function(e) {
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
                    }({}, t, e))
                }), {
                    modalKey: L
                })
            }
        },
        627379: (e, t, n) => {
            "use strict";
            n.d(t, {
                O: () => s
            });
            var r = n(785893),
                o = (n(667294), n(795308)),
                i = n(633878);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
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

            function c(e, t) {
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
            var s = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    s = e.height,
                    u = void 0 === s ? 24 : s,
                    f = e.color,
                    d = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    h = void 0 === p ? "" : p,
                    y = c(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87c-.625 0-1.178-.162-1.66-.485-.482-.324-.855-.777-1.121-1.359C4.133 13.437 4 12.762 4 12c0-.755.14-1.423.42-2.005.288-.583.701-1.039 1.24-1.37.546-.33 1.197-.495 1.951-.495.64 0 1.211.136 1.714.41.51.272.895.657 1.154 1.153l-1.218.873c-.367-.676-.913-1.013-1.639-1.013-.661 0-1.168.215-1.52.646-.352.425-.528 1.025-.528 1.8 0 .784.176 1.388.528 1.812.352.424.859.636 1.52.636.295 0 .564-.054.809-.162.251-.115.445-.27.582-.463v-.927H7.299v-1.402h3.245v4.226H9.272l-.205-.712c-.424.575-1.053.863-1.887.863Zm6.34-.151h-1.574V8.28h1.574v7.438Zm1.51 0h1.574v-2.824h2.76v-1.423h-2.76V9.704H20V8.28h-4.97v7.438Z",
                        clipRule: "evenodd",
                        className: h
                    })
                }))
            }
        },
        320142: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(120415);

            function o(e, t, n, r, o, i, a) {
                try {
                    var l = e[i](a),
                        c = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function i(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);

                        function l(e) {
                            o(a, r, i, l, c, "next", e)
                        }

                        function c(e) {
                            o(a, r, i, l, c, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }
            var a = function(e, t) {
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
            };

            function l(e, t) {
                return c.apply(this, arguments)
            }

            function c() {
                return (c = i((function(e, t) {
                    var o, i, l, c;
                    return a(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                0;
                                return [4, Promise.all([n.e(40532), n.e(39685), n.e(47007), n.e(6543), n.e(29342), n.e(84832), n.e(27499), n.e(79913), n.e(64466), n.e(92465), n.e(45353), n.e(10675), n.e(73727), n.e(52555), n.e(61953), n.e(84441), n.e(14990), n.e(33227), n.e(24501), n.e(17667)]).then(n.bind(n, 624501))];
                            case 1:
                                o = a.sent(), i = o.default;
                                if (null != (l = i(e, {
                                        skipExtensionCheck: t,
                                        analyticsLocations: []
                                    }))) l(null);
                                else if (r.FB) window.open(e);
                                else {
                                    (c = document.createElement("a")).href = e;
                                    c.target = "_blank";
                                    c.rel = "noreferrer noopener";
                                    c.click()
                                }
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
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
                bB: () => c
            });
            var r, o, i, a, l, c;
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
            }(c || (c = {}))
        },
        755550: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => I
            });
            var r = n(202351),
                o = n(744564);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function l(e, t) {
                return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function c(e, t) {
                c = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return c(e, t)
            }
            var s = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function u(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = a(e);
                    if (t) {
                        var o = a(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var f, d, p, h, y, b = !1,
                g = !1,
                v = null,
                _ = {},
                m = {},
                E = {},
                O = {};

            function T() {
                f = void 0;
                d = void 0;
                p = void 0;
                h = void 0;
                y = void 0;
                v = null
            }
            var A = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && c(e, t)
                }(n, e);
                var t = u(n);

                function n() {
                    i(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getSettings = function(e) {
                    if (null != e) return E[e]
                };
                r.getProfile = function(e) {
                    return null == e ? null : _[e]
                };
                r.getPendingPersonality = function() {
                    return f
                };
                r.getPendingNick = function() {
                    return d
                };
                r.getErrors = function() {
                    return v
                };
                r.hasPendingChanges = function() {
                    return void 0 !== f || void 0 !== d || void 0 !== p || void 0 !== h || void 0 !== y
                };
                r.getPendingUpdates = function() {
                    return {
                        pendingAvatar: p,
                        pendingNick: d,
                        pendingPersonality: f,
                        pendingBanner: h,
                        pendingThemeColors: y
                    }
                };
                r.isSavingSettings = function() {
                    return b
                };
                r.isFetchingSettings = function(e) {
                    var t;
                    return null === (t = O[e]) || void 0 === t ? void 0 : t.isFetching
                };
                r.shouldFetchSettings = function(e) {
                    var t, n, r = null !== (t = O[e]) && void 0 !== t ? t : {
                            isFetching: !1
                        },
                        o = Date.now() - (null !== (n = r.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 36e5;
                    return !(null == r ? void 0 : r.isFetching) && o
                };
                r.isFetchingProfile = function(e) {
                    var t;
                    return null === (t = m[e]) || void 0 === t ? void 0 : t.isFetching
                };
                r.isEditingClydeProfile = function() {
                    return g
                };
                return n
            }(r.ZP.Store);
            A.displayName = "ClydeStore";
            const I = new A(o.Z, {
                CLYDE_GUILD_SETTINGS_FETCH_START: function(e) {
                    var t = e.guildId,
                        n = O[t];
                    O[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_GUILD_SETTINGS_FETCH_SUCCESS: function(e) {
                    var t = e.guildId,
                        n = e.settings;
                    O[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    };
                    E[t] = n
                },
                CLYDE_GUILD_SETTINGS_FETCH_FAIL: function(e) {
                    var t = e.guildId,
                        n = O[t];
                    O[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_SET_PENDING_PERSONALITY: function(e) {
                    var t = e.personality;
                    f = t
                },
                CLYDE_SET_PENDING_NICK: function(e) {
                    var t = e.nick;
                    d = t
                },
                CLYDE_SET_PENDING_AVATAR: function(e) {
                    var t = e.avatar;
                    p = t
                },
                CLYDE_SET_PENDING_BANNER: function(e) {
                    var t = e.banner;
                    h = t
                },
                CLYDE_SET_PENDING_THEME_COLORS: function(e) {
                    var t = e.themeColors;
                    y = t
                },
                CLYDE_GUILD_SETTINGS_SAVE_START: function() {
                    v = null;
                    b = !0
                },
                CLYDE_GUILD_SETTINGS_SAVE_SUCCESS: function(e) {
                    var t = e.settings;
                    b = !1;
                    E[t.guild_id] = t;
                    T()
                },
                CLYDE_GUILD_SETTINGS_SAVE_FAIL: function(e) {
                    b = !1;
                    v = e.errors
                },
                CLYDE_RESET_PENDING_CHANGES: T,
                CLYDE_PROFILE_FETCH_START: function(e) {
                    var t = e.clydeProfileId,
                        n = m[t];
                    m[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_FETCH_SUCCESS: function(e) {
                    var t = e.profile;
                    m[t.clyde_profile_id] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    };
                    _[t.clyde_profile_id] = t
                },
                CLYDE_PROFILE_FETCH_FAIL: function(e) {
                    var t = e.clydeProfileId,
                        n = m[t];
                    m[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_CREATE_SUCCESS: function(e) {
                    var t = e.profile;
                    _[t.clyde_profile_id] = t
                },
                CLYDE_PROFILE_EDITING_START: function() {
                    g = !0
                },
                CLYDE_PROFILE_EDITING_END: function() {
                    g = !1
                }
            })
        },
        38272: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => h
            });
            var r = n(785893),
                o = (n(667294),
                    n(294184)),
                i = n.n(o),
                a = n(304548),
                l = n(217674),
                c = n(930865),
                s = n(473708),
                u = n(377417),
                f = n.n(u);

            function d(e, t, n) {
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
            const h = function(e) {
                var t, n, o, u = e.guildFeature,
                    h = e.guild,
                    y = e.className,
                    b = e.hideTooltip,
                    g = void 0 !== b && b,
                    v = e.tooltipPosition,
                    _ = void 0 === v ? "left" : v,
                    m = e.onClick,
                    E = h.hasFeature(u),
                    O = (0, c._p)(u);
                if (E) {
                    null != O && (o = s.Z.Messages.PREMIUM_GUILD_INCLUDED);
                    t = (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(l.Z, {
                            className: f().unlockedIcon
                        }), (0,
                            r.jsx)(a.Heading, {
                            variant: "eyebrow",
                            className: f().description,
                            children: s.Z.Messages.PREMIUM_GUILD_TIER_UNLOCKED
                        })]
                    })
                } else {
                    null != O && (o = s.Z.Messages.CLICK_TO_LEARN_MORE);
                    t = (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(l.Z, {
                            className: f().icon
                        }), (0, r.jsx)(a.Heading, {
                            variant: "eyebrow",
                            className: f().description,
                            children: null != O && (0, c.e9)(O)
                        })]
                    })
                }
                n = g || null == o ? (0, r.jsx)("div", {
                    className: i()(f().availabilityIndicator, y),
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
                                    d(e, t, n[t])
                                }))
                            }
                            return e
                        }({}, e), {
                            className: i()(f().availabilityIndicator, y),
                            children: t
                        }))
                    }
                });
                return null == m || E ? n : (0, r.jsx)(a.Clickable, {
                    onClick: m,
                    className: f().clickable,
                    children: n
                })
            }
        },
        597264: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => G
            });
            var r = n(785893),
                o = n(667294),
                i = n(202351),
                a = n(304548),
                l = n(153686),
                c = n(19585),
                s = n(755550),
                u = n(38272),
                f = n(694755),
                d = n(567403),
                p = n(464187),
                h = n(473903),
                y = n(901654),
                b = n(331448),
                g = n(655402),
                v = n(406493),
                _ = n(652591),
                m = n(116094),
                E = n(2590),
                O = n(921431);

            function T(e, t) {
                var n = t.isGIF;
                if (e === O.pC.GUILD_BANNER) return n ? E.oNc.ANIMATED_BANNER : E.oNc.BANNER
            }

            function A(e) {
                return e === O.pC.AVATAR || e === O.pC.BANNER
            }
            var I = n(776203),
                x = n(964525),
                j = n(473708),
                w = n(7738),
                C = n.n(w);

            function S(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function P(e, t, n, r, o, i, a) {
                try {
                    var l = e[i](a),
                        c = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function L(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            P(i, r, o, a, l, "next", e)
                        }

                        function l(e) {
                            P(i, r, o, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function N(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function R(e) {
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
                    if ("string" == typeof e) return S(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var k = function(e, t) {
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
                                            if (!(o = a.trys,
                                                    o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
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
                D = [{
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

            function U(e) {
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
                    children: D.map((function(e) {
                        return (0, r.jsx)("div", {
                            className: C().gif,
                            style: {
                                backgroundImage: "url(".concat(n || a ? e.gif : e.png, ")")
                            }
                        }, e.gif)
                    }))
                })
            }

            function Z(e) {
                var t = e.guildFeature,
                    n = e.guild;
                return null == t || null == n ? null : (0, r.jsx)("div", {
                    className: C().pillWrapper,
                    children: (0,
                        r.jsx)(u.Z, {
                        guildFeature: t,
                        guild: n,
                        hideTooltip: !0
                    })
                })
            }

            function F(e) {
                var t = e.uploadType,
                    n = e.guild,
                    o = e.showNitroWheel;
                return (0, r.jsxs)("div", {
                    className: C().optionBoxText,
                    children: [(0, r.jsx)(Z, {
                        guild: n,
                        guildFeature: T(t, {
                            isGIF: !0
                        })
                    }), (0, r.jsxs)("div", {
                        className: C().optionBoxDescription,
                        children: [A(t) && (0, r.jsx)(a.TooltipContainer, {
                            className: C().nitroWheelFlairContainer,
                            text: j.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                            children: o && (0, r.jsx)(v.Z, {
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
                    children: [(0, r.jsx)(Z, {
                        guildFeature: T(n, {
                            isGIF: !1
                        }),
                        guild: o
                    }), (0, r.jsx)("div", {
                        className: C().optionBoxDescription,
                        children: t
                    })]
                })
            }

            function G(e) {
                var t = e.transitionState,
                    u = e.onClose,
                    v = e.onComplete,
                    T = e.uploadType,
                    A = e.maxFileSizeBytes,
                    w = e.showUpsellHeader,
                    S = e.filters,
                    P = e.analyticsLocation,
                    N = e.analyticsLocations,
                    M = void 0 === N ? [] : N,
                    D = e.modalSubTitle,
                    Z = e.imageSpecifications,
                    G = e.modalTitle,
                    H = void 0 === G ? j.Z.Messages.SELECT_IMAGE_MODAL_TITLE : G,
                    V = e.uploadOptionTitle,
                    Y = void 0 === V ? j.Z.Messages.UPLOAD_IMAGE : V,
                    z = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        u();
                        v(e, t, n)
                    },
                    K = (0, i.e7)([y.Z], (function() {
                        return y.Z.isFocused()
                    })),
                    W = (0, i.e7)([h.default], (function() {
                        return h.default.getCurrentUser()
                    })),
                    J = (0, i.e7)([p.Z], (function() {
                        return p.Z.getGuildId()
                    })),
                    X = (0, i.e7)([d.Z], (function() {
                        return d.Z.getGuild(J)
                    })),
                    q = (0, i.e7)([s.Z], (function() {
                        return s.Z.isEditingClydeProfile()
                    })),
                    $ = o.useContext(a.AccessibilityPreferencesContext).reducedMotion,
                    Q = (0, a.useModalContext)(),
                    ee = !m.ZP.canUseAnimatedAvatar(W) && T === O.pC.AVATAR && !q,
                    te = (0, c.Z)(M, l.Z.SELECT_IMAGE_MODAL).analyticsLocations;
                o.useEffect((function() {
                    ee && _.default.track(E.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: E.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                        location_stack: te
                    });
                    _.default.track(E.rMx.OPEN_MODAL, {
                        type: E.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                        location: P
                    })
                }), [ee, P, te]);
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
                                children: H
                            }), null != D ? (0, r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: D
                            }) : null]
                        }), (0, r.jsx)(a.ModalCloseButton, {
                            onClick: u,
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
                                    children: (0, r.jsx)(g.Z, {
                                        className: C().uploadIcon
                                    })
                                }), (0, r.jsx)(a.Text, {
                                    variant: "text-sm/semibold",
                                    color: "interactive-normal",
                                    children: (0,
                                        r.jsx)(B, {
                                        title: Y,
                                        uploadType: T,
                                        guild: X
                                    })
                                }), (0, r.jsx)(f.ZP, {
                                    onChange: function(e, t) {
                                        if (t.type === x.m.MP4) return z(e, t);
                                        (0, a.openModalLazy)(L((function() {
                                            var o, i;
                                            return k(this, (function(a) {
                                                switch (a.label) {
                                                    case 0:
                                                        return [4, Promise.all([n.e(40532), n.e(40056), n.e(19887), n.e(24251), n.e(91406), n.e(84959), n.e(17363), n.e(56620), n.e(6017)]).then(n.bind(n, 17363))];
                                                    case 1:
                                                        o = a.sent(), i = o.default;
                                                        return [2, function(n) {
                                                            return (0, r.jsx)(i, R({
                                                                imgURI: e,
                                                                file: t,
                                                                onCrop: z,
                                                                uploadType: T,
                                                                showUpsellHeader: w,
                                                                allowSkip: !0,
                                                                analyticsPage: null == P ? void 0 : P.page
                                                            }, n))
                                                        }]
                                                }
                                            }))
                                        })), {
                                            contextKey: Q
                                        })
                                    },
                                    maxFileSizeBytes: A,
                                    onFileSizeError: function() {
                                        u();
                                        (0, I.Z)(A)
                                    },
                                    filters: S
                                })]
                            }), (0, r.jsxs)(a.Clickable, {
                                className: C().optionBox,
                                onClick: function() {
                                    (0, a.openModalLazy)(L((function() {
                                        var e, t;
                                        return k(this, (function(o) {
                                            switch (o.label) {
                                                case 0:
                                                    return [4, Promise.all([n.e(40532), n.e(40056), n.e(96259), n.e(19887), n.e(50526), n.e(24251), n.e(91406), n.e(84959), n.e(89984), n.e(93862), n.e(30762), n.e(41440)]).then(n.bind(n, 159626))];
                                                case 1:
                                                    e = o.sent(),
                                                        t = e.default;
                                                    return [2, function(e) {
                                                        return (0, r.jsx)(t, R({
                                                            uploadType: T,
                                                            onComplete: function(e, t) {
                                                                return z(e, t, !0)
                                                            },
                                                            showUpsellHeader: w,
                                                            analyticsPage: null == P ? void 0 : P.page
                                                        }, e))
                                                    }]
                                            }
                                        }))
                                    })), {
                                        contextKey: Q
                                    })
                                },
                                children: [(0, r.jsxs)("div", {
                                    className: C().contentCircle,
                                    children: [(0, r.jsx)(U, {
                                        shouldAnimate: K && !$.enabled
                                    }), (0, r.jsx)("div", {
                                        className: C().gifIconContainer,
                                        children: (0, r.jsx)(b.Z, {
                                            className: C().gifIcon
                                        })
                                    })]
                                }), (0, r.jsx)(a.Text, {
                                    variant: "text-sm/semibold",
                                    color: "interactive-normal",
                                    children: (0, r.jsx)(F, {
                                        uploadType: T,
                                        guild: X,
                                        showNitroWheel: !q
                                    })
                                })]
                            })]
                        }), null != Z ? (0, r.jsx)(a.Text, {
                            className: C().imageSpecifications,
                            variant: "text-sm/normal",
                            children: Z
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
                Xx: () => f,
                JY: () => p
            });
            var r = n(318715),
                o = n(260561),
                i = n(473903),
                a = n(116094),
                l = n(473708),
                c = (0, o.B)({
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
                s = function(e) {
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
                    } : s({
                        user: t,
                        config: c.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: r
                        })
                    })
                },
                f = function() {
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
                        f = c.useExperiment({
                            location: "inventory_guild_setting_experiment"
                        }, {
                            autoTrackExposure: l
                        }),
                        d = s({
                            user: u,
                            config: f
                        }),
                        p = d.viewAndUseEnabled,
                        h = d.showTryPacksModalAndV2Copy,
                        y = d.collectEnabled,
                        b = p && y && null != o && !1 !== (null == o || null === (e = o.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible);
                    return {
                        viewAndUseEnabled: p,
                        collectEnabled: b,
                        showTryPacksModalAndV2Copy: h
                    }
                },
                d = (0, o.B)({
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
                                return l.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                            }
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: function() {
                                return l.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                            }
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: function() {
                                return l.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                            }
                        }
                    }]
                }),
                p = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            guildId: void 0,
                            autoTrackExposure: !0
                        },
                        t = e.guildId,
                        n = e.autoTrackExposure,
                        r = void 0 === n || n,
                        o = d.useExperiment({
                            guildId: null != t ? t : "",
                            location: "482926_3"
                        }, {
                            autoTrackExposure: void 0 === r || r
                        });
                    return {
                        showSettingsToggle: o.showSettingsToggle,
                        allowCollection: o.allowCollection,
                        getNewSettingsDescription: o.getNewSettingsDescription
                    }
                }
        },
        327930: (e, t, n) => {
            "use strict";
            n.d(t, {
                Jv: () => y,
                M0: () => b,
                Qj: () => g,
                Ao: () => v,
                YO: () => _,
                VO: () => m
            });
            var r = n(61209),
                o = n(567403),
                i = n(682776),
                a = n(968696),
                l = n(2590),
                c = n(897196),
                s = Array.from(c.Vg).map((function(e) {
                    return a.Z.escape(e)
                })).join("|"),
                u = new RegExp("^/channels/(\\d+|".concat(l.ME, ")(?:/)?(\\d+|").concat(s, ")?")),
                f = new RegExp("^/channels/(\\d+|".concat(l.ME, ")(?:/)(\\d+|").concat(s, ")(?:/)(\\d+)")),
                d = new RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
                p = new RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
                h = new RegExp("^/events/(\\d+)(?:/)(\\d+)?"),
                y = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+|".concat(l.ME, ")(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?")),
                b = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)");

            function g(e) {
                if (null == e) return null;
                var t = e.match(f);
                if (null != t && t.length > 3) return {
                    guildId: t[1],
                    channelId: t[2],
                    messageId: t[3]
                };
                var n = e.match(d);
                if (null != n && n.length > 4) return {
                    guildId: n[1],
                    channelId: n[2],
                    threadId: n[3],
                    messageId: n[4]
                };
                var r = e.match(u);
                if (null != r && r.length > 1) {
                    var o;
                    return {
                        guildId: r[1],
                        channelId: null !== (o = r[2]) && void 0 !== o ? o : void 0
                    }
                }
                var i = e.match(p);
                return null != i && i.length > 1 ? {
                    guildId: i[1]
                } : null
            }

            function v(e) {
                if (null == e) return null;
                var t = e.match(h);
                return null != t && t.length > 1 ? {
                    guildId: t[1],
                    guildEventId: t[2]
                } : null
            }

            function _(e) {
                return !!e.isPrivate() || i.Z.can(l.Plq.VIEW_CHANNEL, e)
            }

            function m(e) {
                var t = e.guildId,
                    n = e.channelId;
                if (null == o.Z.getGuild(t) && t !== l.ME) return !1;
                if (null == n) return !0;
                var i = r.Z.getChannel(n);
                return null != i && _(i)
            }
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
                l = n(159895),
                c = n(884123),
                s = n(203600);
            var u = n(717035);

            function f(e) {
                var t = e.autoTrackExposure,
                    n = e.experiment,
                    f = e.location,
                    d = (0, r.e7)([o.default], (function() {
                        return o.default.getCurrentUser()
                    })),
                    p = (0, u.N)(),
                    h = null != p,
                    y = null != d && (0, a.I5)(d);
                (0, l.Z$)(n);
                var b = n.useExperiment({
                        location: null != f ? f : "1"
                    }, {
                        autoTrackExposure: !y && !h && t
                    }),
                    g = b.enabled,
                    v = b.useExpectedValue,
                    _ = b.useLikelihood,
                    m = (0, r.cj)([c.Z], (function() {
                        var e = c.Z.getState();
                        return {
                            fetched: e.fetched,
                            premiumLikelihood: e.premiumLikelihood
                        }
                    })),
                    E = m.premiumLikelihood,
                    O = m.fetched,
                    T = (0,
                        r.e7)([i.Z], (function() {
                        return i.Z.isLoadedForSKUs([s.Si.TIER_0, s.Si.TIER_2])
                    })),
                    A = !y && g && !h && (v ? !O || !T : !O),
                    I = s.p9.TIER_2;
                if (h) {
                    var x = p.subscription_trial;
                    (null == x ? void 0 : x.sku_id) === s.Si.TIER_0 ? I = s.p9.TIER_0 : (null == x ? void 0 : x.sku_id) === s.Si.TIER_2 && (I = s.p9.TIER_2)
                } else if (!y && !A && g)
                    if (v) {
                        I = function(e, t, n) {
                            return null == e ? s.p9.TIER_2 : e[s.Si.TIER_0] * t > e[s.Si.TIER_2] * n ? s.p9.TIER_0 : s.p9.TIER_2
                        }(E, (0, a.aS)(s.Xh.PREMIUM_MONTH_TIER_0).amount, (0, a.aS)(s.Xh.PREMIUM_MONTH_TIER_2).amount)
                    } else _ && (I = function(e) {
                        if (null == e) return s.p9.TIER_0;
                        var t = e[l.Bc],
                            n = e[s.Si.TIER_0],
                            r = e[s.Si.TIER_2];
                        return r > n && r > t ? s.p9.TIER_2 : s.p9.TIER_0
                    }(E));
                return {
                    isLoading: A,
                    suggestedPremiumType: I
                }
            }
        },
        442212: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => A
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                l = n(304548),
                c = n(153686),
                s = n(19585),
                u = n(594302),
                f = n(652591),
                d = n(116094),
                p = n(717035),
                h = n(455706),
                y = n(70535),
                b = n(203600),
                g = n(2590),
                v = n(473708),
                _ = n(745576),
                m = n.n(_),
                E = n(545292),
                O = n.n(E);

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

            function A(e) {
                var t, n, i = e.title,
                    _ = e.type,
                    E = e.guildBoostProps,
                    A = e.analyticsSource,
                    I = e.analyticsLocation,
                    x = e.body,
                    j = e.context,
                    w = e.glowUp,
                    C = e.modalClassName,
                    S = e.artContainerClassName,
                    P = e.bodyClassName,
                    L = e.transitionState,
                    N = e.onClose,
                    R = e.onSubscribeClick,
                    M = e.onSecondaryClick,
                    k = e.secondaryCTA,
                    D = e.subscribeButtonText,
                    U = e.showNewBadge,
                    Z = void 0 !== U && U,
                    F = e.enableArtBoxShadow,
                    B = void 0 === F || F,
                    G = e.subscriptionTier,
                    H = void 0 === G ? b.Si.TIER_2 : G,
                    V = e.isLoading,
                    Y = void 0 !== V && V,
                    z = e.hideBackButton,
                    K = e.backButtonText,
                    W = T(e, ["title", "type", "guildBoostProps", "analyticsSource", "analyticsLocation", "body", "context", "glowUp", "modalClassName", "artContainerClassName", "bodyClassName", "transitionState", "onClose", "onSubscribeClick", "onSecondaryClick", "secondaryCTA", "subscribeButtonText", "showNewBadge", "enableArtBoxShadow", "subscriptionTier", "isLoading", "hideBackButton", "backButtonText"]),
                    J = null != E,
                    X = (0, p.N)(),
                    q = (null == X || null === (t = X.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === H && !J,
                    $ = (0,
                        s.Z)(c.Z.PREMIUM_UPSELL_MODAL).analyticsLocations;
                o.useEffect((function() {
                    Y || (J ? f.default.track(g.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                        type: "".concat(_, " - Tier ").concat(E.boostedGuildTier),
                        guild_id: E.guild.id,
                        channel_id: E.channelId,
                        location: I,
                        location_stack: $
                    }) : f.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: _,
                        source: A,
                        location_stack: $,
                        sku_id: H
                    }))
                }), [J, H, Y]);
                var Q, ee = B ? a()(m().artContainer, m().artContainerBoxShadow, S) : a()(m().artContainer, S),
                    te = null;
                te = "artURL" in W ? (0, r.jsx)("img", {
                    className: m().art,
                    alt: "",
                    src: W.artURL
                }) : W.artElement;
                return (0, r.jsxs)(l.ModalRoot, {
                    className: a()(m().root, C),
                    "aria-label": i,
                    transitionState: L,
                    children: [(0, r.jsxs)("div", {
                        className: ee,
                        children: [te, Z ? (0, r.jsx)("img", {
                            className: m().sparkleBadge,
                            alt: "",
                            src: O()
                        }) : null]
                    }), (0, r.jsx)(l.ModalContent, {
                        className: m().content,
                        children: Y ? (0, r.jsx)(l.Spinner, {}) : (0, r.jsx)(r.Fragment, {
                            children: q ? (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(y.ZP, {
                                    onClose: N,
                                    type: _,
                                    subscriptionTier: null !== (Q = null == X || null === (n = X.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== Q ? Q : b.Si.TIER_2,
                                    headingText: i,
                                    context: j,
                                    analyticsLocationObject: I,
                                    children: w
                                })
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(l.Heading, {
                                    className: m().header,
                                    variant: "heading-xl/semibold",
                                    children: i
                                }), (0, r.jsx)(l.Text, {
                                    variant: "text-md/normal",
                                    className: a()(P),
                                    children: x
                                })]
                            })
                        })
                    }), (0, r.jsxs)(l.ModalFooter, {
                        className: m().footer,
                        children: [(0, r.jsxs)("div", {
                            className: m().primaryActions,
                            children: [null != k ? (0, r.jsx)(l.Button, {
                                className: m().secondaryAction,
                                onClick: M,
                                size: l.Button.Sizes.SMALL,
                                color: l.Button.Colors.PRIMARY,
                                look: l.Button.Looks.LINK,
                                children: k
                            }) : null, function() {
                                var e, t;
                                if (J) return (0, r.jsx)(u.Z, {
                                    analyticsLocation: I,
                                    guild: E.guild,
                                    onClose: N
                                });
                                var n = q ? (0, d.Rt)({
                                        intervalType: null == X || null === (e = X.subscription_trial) || void 0 === e ? void 0 : e.interval,
                                        intervalCount: null == X || null === (t = X.subscription_trial) || void 0 === t ? void 0 : t.interval_count
                                    }) : void 0,
                                    o = q ? null == X ? void 0 : X.trial_id : null;
                                return (0, r.jsx)(h.Z, {
                                    premiumModalAnalyticsLocation: I,
                                    subscriptionTier: H,
                                    trialId: o,
                                    size: l.Button.Sizes.SMALL,
                                    color: l.Button.Colors.GREEN,
                                    onClick: function() {
                                        null == R || R();
                                        N()
                                    },
                                    buttonText: null != D ? D : n
                                })
                            }()]
                        }), !z && (0, r.jsx)(l.Button, {
                            onClick: N,
                            size: l.Button.Sizes.SMALL,
                            color: l.Button.Colors.PRIMARY,
                            look: l.Button.Looks.LINK,
                            children: null != K ? K : v.Z.Messages.BACK
                        })]
                    })]
                })
            }
        },
        205294: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(169376);

            function o(e) {
                o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return o(e)
            }

            function i(e, t) {
                return !t || "object" !== l(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function a(e, t) {
                a = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return a(e, t)
            }
            var l = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function c(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = o(e);
                    if (t) {
                        var a = o(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return i(this, n)
                }
            }
            const s = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && a(e, t)
                }(n, e);
                var t = c(n);

                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = t.call(this)).id = e.id;
                    r.subscriptionId = e.subscriptionId;
                    r.premiumGuildSubscription = e.premiumGuildSubscription;
                    r.canceled = e.canceled;
                    r.cooldownEndsAt = e.cooldownEndsAt;
                    r.subscription = e.subscription;
                    return r
                }
                var r = n.prototype;
                r.isOnCooldown = function() {
                    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
                };
                r.isAvailable = function() {
                    return null == this.premiumGuildSubscription && !this.isOnCooldown()
                };
                n.createFromServer = function(e, t) {
                    return new n({
                        id: e.id,
                        subscriptionId: e.subscription_id,
                        premiumGuildSubscription: null != e.premium_guild_subscription ? {
                            id: e.premium_guild_subscription.id,
                            guildId: e.premium_guild_subscription.guild_id
                        } : null,
                        canceled: e.canceled,
                        cooldownEndsAt: e.cooldown_ends_at,
                        subscription: t
                    })
                };
                return n
            }(r.Z)
        },
        50433: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => b
            });
            var r = n(202351),
                o = n(744564);

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function c(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function s(e, t) {
                s = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return s(e, t)
            }

            function u(e) {
                return function(e) {
                    if (Array.isArray(e)) return i(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var f = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            var p = [];

            function h() {
                p = []
            }
            var y = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && s(e, t)
                }(n, e);
                var t = d(n);

                function n() {
                    a(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.hasLayers = function() {
                    return p.length > 0
                };
                r.getLayers = function() {
                    return p
                };
                return n
            }(r.ZP.Store);
            y.displayName = "LayerStore";
            const b = new y(o.Z, {
                LAYER_PUSH: function(e) {
                    var t = e.component;
                    if (p.indexOf(t) >= 0) return !1;
                    p = u(p).concat([t])
                },
                LAYER_POP: function() {
                    if (0 === p.length) return !1;
                    p = p.slice(0, -1)
                },
                LAYER_POP_ALL: h,
                LOGOUT: h,
                NOTIFICATION_CLICK: h
            })
        },
        331448: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(627379),
                a = n(633878);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e, t) {
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

            function s(e, t) {
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
            const u = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 29 : t,
                    o = e.height,
                    i = void 0 === o ? 22 : o,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    d = e.backgroundColor,
                    p = s(e, ["width", "height", "color", "backgroundColor"]);
                return (0, r.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            l(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(p)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 29 22",
                    children: (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsx)("rect", {
                            width: n,
                            height: i,
                            fill: d,
                            fillOpacity: ".8",
                            rx: "3"
                        }), (0, r.jsx)("path", {
                            d: "M8.01725 16.7054C7.17625 16.7054 6.43191 16.4879 5.78425 16.0529C5.13658 15.6179 4.63391 15.0089 4.27625 14.2259C3.91858 13.4333 3.73975 12.5246 3.73975 11.4999C3.73975 10.4849 3.92825 9.58593 4.30525 8.80293C4.69191 8.01993 5.24775 7.4061 5.97275 6.96143C6.70741 6.51677 7.58225 6.29443 8.59725 6.29443C9.45758 6.29443 10.2261 6.4781 10.9027 6.84543C11.5891 7.21277 12.1062 7.72993 12.4542 8.39693L10.8157 9.57143C10.3227 8.66277 9.58808 8.20843 8.61175 8.20843C7.72241 8.20843 7.04091 8.49843 6.56725 9.07843C6.09358 9.64877 5.85675 10.4559 5.85675 11.4999C5.85675 12.5536 6.09358 13.3656 6.56725 13.9359C7.04091 14.5063 7.72241 14.7914 8.61175 14.7914C9.00808 14.7914 9.37058 14.7189 9.69925 14.5739C10.0376 14.4193 10.2986 14.2114 10.4822 13.9504V12.7034H8.17675V10.8184H12.5412V16.5024H10.8302L10.5547 15.5454C9.98441 16.3188 9.13858 16.7054 8.01725 16.7054Z",
                            fill: f
                        }), (0, r.jsx)("path", {
                            d: "M16.5444 16.5024H14.4274V6.49743H16.5444V16.5024Z",
                            fill: f
                        }), (0, r.jsx)("path", {
                            d: "M20.6933 16.5024H18.5763V6.49743H25.2608V8.41143H20.6933V10.7894H24.4053V12.7034H20.6933V16.5024Z",
                            fill: f
                        })]
                    })
                }))
            }), i.O)
        },
        391438: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
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

            function c(e, t, n) {
                var r = t.trackedActionData,
                    i = l(t, ["trackedActionData"]),
                    c = {
                        url: i.url,
                        request_method: n
                    };
                return new Promise((function(t, n) {
                    e(i).then((function(e) {
                        var n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e));
                        (0, o.trackNetworkAction)(r.event, a({
                            status_code: e.status
                        }, c, n));
                        t(e)
                    })).catch((function(e) {
                        var t, i, l = r.properties;
                        "function" == typeof r.properties && (l = r.properties(e));
                        (0, o.trackNetworkAction)(r.event, a({
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (i = e.body) || void 0 === i ? void 0 : i.message
                        }, c, l));
                        n(e)
                    }))
                }))
            }
            const s = {
                get: function(e) {
                    return c(r.ZP.get, e, "get")
                },
                post: function(e) {
                    return c(r.ZP.post, e, "post")
                },
                put: function(e) {
                    return c(r.ZP.put, e, "put")
                },
                patch: function(e) {
                    return c(r.ZP.patch, e, "patch")
                },
                delete: function(e) {
                    return c(r.ZP.delete, e, "del")
                }
            }
        },
        142520: (e, t, n) => {
            "use strict";
            n.d(t, {
                x: () => r
            });
            var r;
            ! function(e) {
                e.THOUGHT_EMBED_TITLE = "Clyde Thoughts"
            }(r || (r = {}))
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