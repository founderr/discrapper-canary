(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [58393, 90344, 95331], {
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
                u = n(565776),
                c = n(936719),
                s = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var n = i(e),
                    l = !n && o(e),
                    f = !n && !l && a(e),
                    d = !n && !l && !f && c(e),
                    p = n || l || f || d,
                    b = p ? r(e.length, String) : [],
                    h = b.length;
                for (var v in e) !t && !s.call(e, v) || p && ("length" == v || f && ("offset" == v || "parent" == v) || d && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || u(v, h)) || b.push(v);
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
                u = function() {
                    try {
                        var e = i && i.require && i.require("util").types;
                        return e || a && a.binding && a.binding("util")
                    } catch (e) {}
                }();
            e.exports = u
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
                        u = e[a];
                    e[a] = e[n];
                    e[n] = u
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
                u = a && a.exports === i ? r.Buffer : void 0,
                c = (u ? u.isBuffer : void 0) || o;
            e.exports = c
        },
        936719: (e, t, n) => {
            var r = n(238749),
                o = n(307518),
                i = n(531167),
                a = i && i.isTypedArray,
                u = a ? o(a) : r;
            e.exports = u
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
        16243: e => {
            if (!t) var t = {
                map: function(e, t) {
                    var n = {};
                    return t ? e.map((function(e, r) {
                        n.index = r;
                        return t.call(n, e)
                    })) : e.slice()
                },
                naturalOrder: function(e, t) {
                    return e < t ? -1 : e > t ? 1 : 0
                },
                sum: function(e, t) {
                    var n = {};
                    return e.reduce(t ? function(e, r, o) {
                        n.index = o;
                        return e + t.call(n, r)
                    } : function(e, t) {
                        return e + t
                    }, 0)
                },
                max: function(e, n) {
                    return Math.max.apply(null, n ? t.map(e, n) : e)
                }
            };
            var n = function() {
                function e(e, t, n) {
                    return (e << 10) + (t << 5) + n
                }

                function n(e) {
                    var t = [],
                        n = !1;

                    function r() {
                        t.sort(e);
                        n = !0
                    }
                    return {
                        push: function(e) {
                            t.push(e);
                            n = !1
                        },
                        peek: function(e) {
                            n || r();
                            void 0 === e && (e = t.length - 1);
                            return t[e]
                        },
                        pop: function() {
                            n || r();
                            return t.pop()
                        },
                        size: function() {
                            return t.length
                        },
                        map: function(e) {
                            return t.map(e)
                        },
                        debug: function() {
                            n || r();
                            return t
                        }
                    }
                }

                function r(e, t, n, r, o, i, a) {
                    var u = this;
                    u.r1 = e;
                    u.r2 = t;
                    u.g1 = n;
                    u.g2 = r;
                    u.b1 = o;
                    u.b2 = i;
                    u.histo = a
                }
                r.prototype = {
                    volume: function(e) {
                        var t = this;
                        t._volume && !e || (t._volume = (t.r2 - t.r1 + 1) * (t.g2 - t.g1 + 1) * (t.b2 - t.b1 + 1));
                        return t._volume
                    },
                    count: function(t) {
                        var n = this,
                            r = n.histo;
                        if (!n._count_set || t) {
                            var o, i, a, u = 0;
                            for (o = n.r1; o <= n.r2; o++)
                                for (i = n.g1; i <= n.g2; i++)
                                    for (a = n.b1; a <= n.b2; a++) u += r[e(o, i, a)] || 0;
                            n._count = u;
                            n._count_set = !0
                        }
                        return n._count
                    },
                    copy: function() {
                        var e = this;
                        return new r(e.r1, e.r2, e.g1, e.g2, e.b1, e.b2, e.histo)
                    },
                    avg: function(t) {
                        var n = this,
                            r = n.histo;
                        if (!n._avg || t) {
                            var o, i, a, u, c = 0,
                                s = 0,
                                l = 0,
                                f = 0;
                            for (i = n.r1; i <= n.r2; i++)
                                for (a = n.g1; a <= n.g2; a++)
                                    for (u = n.b1; u <= n.b2; u++) {
                                        c += o = r[e(i, a, u)] || 0;
                                        s += o * (i + .5) * 8;
                                        l += o * (a + .5) * 8;
                                        f += o * (u + .5) * 8
                                    }
                            n._avg = c ? [~~(s / c), ~~(l / c), ~~(f / c)] : [~~(8 * (n.r1 + n.r2 + 1) / 2), ~~(8 * (n.g1 + n.g2 + 1) / 2), ~~(8 * (n.b1 + n.b2 + 1) / 2)]
                        }
                        return n._avg
                    },
                    contains: function(e) {
                        var t = this,
                            n = e[0] >> 3;
                        gval = e[1] >> 3;
                        bval = e[2] >> 3;
                        return n >= t.r1 && n <= t.r2 && gval >= t.g1 && gval <= t.g2 && bval >= t.b1 && bval <= t.b2
                    }
                };

                function o() {
                    this.vboxes = new n((function(e, n) {
                        return t.naturalOrder(e.vbox.count() * e.vbox.volume(), n.vbox.count() * n.vbox.volume())
                    }))
                }
                o.prototype = {
                    push: function(e) {
                        this.vboxes.push({
                            vbox: e,
                            color: e.avg()
                        })
                    },
                    palette: function() {
                        return this.vboxes.map((function(e) {
                            return e.color
                        }))
                    },
                    size: function() {
                        return this.vboxes.size()
                    },
                    map: function(e) {
                        for (var t = this.vboxes, n = 0; n < t.size(); n++)
                            if (t.peek(n).vbox.contains(e)) return t.peek(n).color;
                        return this.nearest(e)
                    },
                    nearest: function(e) {
                        for (var t, n, r, o = this.vboxes, i = 0; i < o.size(); i++)
                            if ((n = Math.sqrt(Math.pow(e[0] - o.peek(i).color[0], 2) + Math.pow(e[1] - o.peek(i).color[1], 2) + Math.pow(e[2] - o.peek(i).color[2], 2))) < t || void 0 === t) {
                                t = n;
                                r = o.peek(i).color
                            } return r
                    },
                    forcebw: function() {
                        var e = this.vboxes;
                        e.sort((function(e, n) {
                            return t.naturalOrder(t.sum(e.color), t.sum(n.color))
                        }));
                        var n = e[0].color;
                        n[0] < 5 && n[1] < 5 && n[2] < 5 && (e[0].color = [0, 0, 0]);
                        var r = e.length - 1,
                            o = e[r].color;
                        o[0] > 251 && o[1] > 251 && o[2] > 251 && (e[r].color = [255, 255, 255])
                    }
                };

                function i(n, r) {
                    if (r.count()) {
                        var o = r.r2 - r.r1 + 1,
                            i = r.g2 - r.g1 + 1,
                            a = r.b2 - r.b1 + 1,
                            u = t.max([o, i, a]);
                        if (1 == r.count()) return [r.copy()];
                        var c, s, l, f, d = 0,
                            p = [],
                            b = [];
                        if (u == o)
                            for (c = r.r1; c <= r.r2; c++) {
                                f = 0;
                                for (s = r.g1; s <= r.g2; s++)
                                    for (l = r.b1; l <= r.b2; l++) f += n[e(c, s, l)] || 0;
                                d += f;
                                p[c] = d
                            } else if (u == i)
                                for (c = r.g1; c <= r.g2; c++) {
                                    f = 0;
                                    for (s = r.r1; s <= r.r2; s++)
                                        for (l = r.b1; l <= r.b2; l++) f += n[e(s, c, l)] || 0;
                                    d += f;
                                    p[c] = d
                                } else
                                    for (c = r.b1; c <= r.b2; c++) {
                                        f = 0;
                                        for (s = r.r1; s <= r.r2; s++)
                                            for (l = r.g1; l <= r.g2; l++) f += n[e(s, l, c)] || 0;
                                        d += f;
                                        p[c] = d
                                    }
                        p.forEach((function(e, t) {
                            b[t] = d - e
                        }));
                        return h(u == o ? "r" : u == i ? "g" : "b")
                    }

                    function h(e) {
                        var t, n, o, i, a, u = e + "1",
                            s = e + "2",
                            l = 0;
                        for (c = r[u]; c <= r[s]; c++)
                            if (p[c] > d / 2) {
                                o = r.copy();
                                i = r.copy();
                                a = (t = c - r[u]) <= (n = r[s] - c) ? Math.min(r[s] - 1, ~~(c + n / 2)) : Math.max(r[u], ~~(c - 1 - t / 2));
                                for (; !p[a];) a++;
                                l = b[a];
                                for (; !l && p[a - 1];) l = b[--a];
                                o[s] = a;
                                i[u] = o[s] + 1;
                                return [o, i]
                            }
                    }
                }
                return {
                    quantize: function(a, u) {
                        if (!a.length || u < 2 || u > 256) return !1;
                        var c = function(t) {
                            var n, r, o, i, a = new Array(32768);
                            t.forEach((function(t) {
                                r = t[0] >> 3;
                                o = t[1] >> 3;
                                i = t[2] >> 3;
                                n = e(r, o, i);
                                a[n] = (a[n] || 0) + 1
                            }));
                            return a
                        }(a);
                        c.forEach((function() {
                            0
                        }));
                        var s = function(e, t) {
                                var n, o, i, a = 1e6,
                                    u = 0,
                                    c = 1e6,
                                    s = 0,
                                    l = 1e6,
                                    f = 0;
                                e.forEach((function(e) {
                                    n = e[0] >> 3;
                                    o = e[1] >> 3;
                                    i = e[2] >> 3;
                                    n < a ? a = n : n > u && (u = n);
                                    o < c ? c = o : o > s && (s = o);
                                    i < l ? l = i : i > f && (f = i)
                                }));
                                return new r(a, u, c, s, l, f, t)
                            }(a, c),
                            l = new n((function(e, n) {
                                return t.naturalOrder(e.count(), n.count())
                            }));
                        l.push(s);

                        function f(e, t) {
                            for (var n, r = 1, o = 0; o < 1e3;)
                                if ((n = e.pop()).count()) {
                                    var a = i(c, n),
                                        u = a[0],
                                        s = a[1];
                                    if (!u) return;
                                    e.push(u);
                                    if (s) {
                                        e.push(s);
                                        r++
                                    }
                                    if (r >= t) return;
                                    if (o++ > 1e3) return
                                } else {
                                    e.push(n);
                                    o++
                                }
                        }
                        f(l, .75 * u);
                        for (var d = new n((function(e, n) {
                                return t.naturalOrder(e.count() * e.volume(), n.count() * n.volume())
                            })); l.size();) d.push(l.pop());
                        f(d, u - d.size());
                        for (var p = new o; d.size();) p.push(d.pop());
                        return p
                    }
                }
            }();
            e.exports = n.quantize
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
                pA: () => l
            });
            var r, o, i = n(36627),
                a = n.n(i);

            function u(e, t, n) {
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
            var c = (u(o = {}, r.IMAGE, a().image), u(o, r.DOCUMENT, a().document), u(o, r.CODE, a().code), o),
                s = [r.DOCUMENT, r.IMAGE, r.CODE],
                l = [r.IMAGE, r.IMAGE, r.IMAGE]
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
                u = n(36627),
                c = n.n(u);
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
                UPLOAD_ERROR_MODAL_KEY: () => w,
                default: () => N,
                openUploadError: () => C
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                u = n(264817),
                c = n(883489),
                s = n(202351),
                l = n(882723),
                f = n(793008),
                d = n(473903),
                p = n(452723),
                b = n(116094),
                h = n(799066),
                v = n(245325),
                m = n(442212),
                g = n(203600),
                y = n(2590),
                _ = n(949995),
                x = n(473708),
                O = n(427479),
                E = n.n(O);

            function A(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function j(e, t) {
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

            function T(e) {
                var t, n = e.onClose,
                    i = e.fileSize,
                    u = j(e, ["onClose", "fileSize"]),
                    c = null != i && g.Lw < i,
                    O = (0, v.Z)({
                        autoTrackExposure: !c,
                        experiment: h.Z,
                        location: g.cd.UPLOAD_ERROR_UPSELL
                    }),
                    T = O.isLoading,
                    I = O.suggestedPremiumType,
                    L = !c && I === g.p9.TIER_0,
                    M = (0,
                        s.e7)([d.default], (function() {
                        return d.default.getCurrentUser()
                    })),
                    P = (0, r.jsx)(f.Z, {
                        icons: _.J6
                    });
                t = L ? x.Z.Messages.UPLOAD_AREA_PREMIUM_TIER_UPSELL_BODY_LINE_2.format({
                    premiumPlan: (0, b.Px)(g.p9.TIER_0),
                    premiumMaxSize: x.Z.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED
                }) : x.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_2_INCREASE;
                var N = o.useMemo((function() {
                        var e = b.ZP.getUserMaxFileSize(M),
                            t = (0, p.BU)(e / 1024, {
                                useKibibytes: !0
                            }),
                            n = x.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                                maxSize: t
                            });
                        switch (null == M ? void 0 : M.premiumType) {
                            case g.p9.TIER_0:
                                n = x.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_0.format({
                                    maxSize: t
                                });
                                break;
                            case g.p9.TIER_1:
                                n = x.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_1.format({
                                    maxSize: t
                                })
                        }
                        return n
                    }), [M]),
                    w = (0, r.jsxs)("div", {
                        className: E().body,
                        children: [(0, r.jsx)("span", {
                            children: N
                        }), (0, r.jsx)(l.Text, {
                            variant: "text-md/medium",
                            children: t
                        })]
                    });
                return (0, r.jsx)(m.Z, function(e) {
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
                    artElement: P,
                    artContainerClassName: a()(E().artContainer),
                    enableArtBoxShadow: !1,
                    type: g.cd.UPLOAD_ERROR_UPSELL,
                    title: x.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    body: w,
                    context: x.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                        maxSize: x.Z.Messages.FILE_UPLOAD_LIMIT_NEW_STANDARD
                    }),
                    glowUp: t,
                    analyticsLocation: {
                        section: y.jXE.FILE_UPLOAD_POPOUT
                    },
                    onClose: n,
                    subscriptionTier: L ? g.Si.TIER_0 : g.Si.TIER_2,
                    isLoading: T
                }, u))
            }
            var I = n(443812),
                L = n(36627),
                M = n.n(L);

            function P(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function N(e) {
                var t = e.title,
                    n = e.help,
                    o = e.showPremiumUpsell,
                    i = e.transitionState,
                    u = e.icons,
                    s = e.fileSize,
                    l = e.onClose,
                    d = (0, I.Dt)(),
                    p = null != u ? u : _.J6;
                return o ? (0, r.jsx)(T, {
                    transitionState: i,
                    onClose: l,
                    fileSize: s
                }) : (0, r.jsx)(c.Y0, {
                    size: c.Cg.DYNAMIC,
                    "aria-labelledby": d,
                    transitionState: i,
                    children: (0, r.jsx)("div", {
                        className: a()(M().uploadDropModal, M().error),
                        children: (0, r.jsxs)("div", {
                            className: M().inner,
                            children: [(0, r.jsx)(f.Z, {
                                icons: p
                            }), (0, r.jsx)("div", {
                                id: d,
                                className: M().title,
                                children: t
                            }), (0, r.jsx)("div", {
                                className: M().instructions,
                                children: n
                            })]
                        })
                    })
                })
            }
            var w = "UPLOAD_ERROR_MODAL_KEY";

            function C(e) {
                (0, u.h7)((function(t) {
                    return (0, r.jsx)(N, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                P(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, t, e))
                }), {
                    modalKey: w
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
                bB: () => u
            });
            var r, o, i, a, u;
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
                e.MJ_CHAT_BAR = "mj_chat_bar"
            }(a || (a = {}));
            ! function(e) {
                e[e.CHAT = 0] = "CHAT";
                e[e.APPLICATION_LAUNCHER = 1] = "APPLICATION_LAUNCHER"
            }(u || (u = {}))
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
                u = n(217674),
                c = n(930865),
                s = n(473708),
                l = n(53679),
                f = n.n(l);

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
            const b = function(e) {
                var t, n, o, l = e.guildFeature,
                    b = e.guild,
                    h = e.className,
                    v = e.hideTooltip,
                    m = void 0 !== v && v,
                    g = e.tooltipPosition,
                    y = void 0 === g ? "left" : g,
                    _ = e.onClick,
                    x = b.hasFeature(l),
                    O = (0, c._p)(l);
                if (x) {
                    null != O && (o = s.Z.Messages.PREMIUM_GUILD_INCLUDED);
                    t = (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(u.Z, {
                            className: f().unlockedIcon
                        }), (0, r.jsx)(a.Heading, {
                            variant: "eyebrow",
                            className: f().description,
                            children: s.Z.Messages.PREMIUM_GUILD_TIER_UNLOCKED
                        })]
                    })
                } else {
                    null != O && (o = s.Z.Messages.CLICK_TO_LEARN_MORE);
                    t = (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(u.Z, {
                            className: f().icon
                        }), (0,
                            r.jsx)(a.Heading, {
                            variant: "eyebrow",
                            className: f().description,
                            children: null != O && (0, c.e9)(O)
                        })]
                    })
                }
                n = m || null == o ? (0, r.jsx)("div", {
                    className: i()(f().availabilityIndicator, h),
                    children: t
                }) : (0, r.jsx)(a.Tooltip, {
                    position: y,
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
                            className: i()(f().availabilityIndicator, h),
                            children: t
                        }))
                    }
                });
                return null == _ || x ? n : (0, r.jsx)(a.Clickable, {
                    onClick: _,
                    className: f().clickable,
                    children: n
                })
            }
        },
        597264: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => F
            });
            var r = n(785893),
                o = n(667294),
                i = n(202351),
                a = n(882723),
                u = n(153686),
                c = n(19585),
                s = n(38272),
                l = n(694755),
                f = n(567403),
                d = n(464187),
                p = n(473903),
                b = n(901654),
                h = n(331448),
                v = n(655402),
                m = n(95891),
                g = n(652591),
                y = n(116094),
                _ = n(2590),
                x = n(921431);

            function O(e, t) {
                var n = t.isGIF;
                if (e === x.pC.GUILD_BANNER) return n ? _.oNc.ANIMATED_BANNER : _.oNc.BANNER
            }

            function E(e) {
                return e === x.pC.AVATAR || e === x.pC.BANNER
            }
            var A = n(776203),
                j = n(964525),
                T = n(473708),
                I = n(511729),
                L = n.n(I);

            function M(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function P(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function N(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            P(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            P(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function w(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        w(e, t, n[t])
                    }))
                }
                return e
            }

            function R(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return M(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return M(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var S = function(e, t) {
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
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
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
                            }([i, u])
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
                    i = R(o.useState(!1), 2),
                    a = i[0],
                    u = i[1];
                return (0, r.jsx)("div", {
                    className: L().gifGrid,
                    onMouseMove: function() {
                        return u(!0)
                    },
                    onMouseLeave: function() {
                        return u(!1)
                    },
                    children: U.map((function(e) {
                        return (0, r.jsx)("div", {
                            className: L().gif,
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
                    className: L().pillWrapper,
                    children: (0,
                        r.jsx)(s.Z, {
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
                    className: L().optionBoxText,
                    children: [(0, r.jsx)(D, {
                        guild: n,
                        guildFeature: O(t, {
                            isGIF: !0
                        })
                    }), (0, r.jsxs)("div", {
                        className: L().optionBoxDescription,
                        children: [E(t) && (0, r.jsx)(a.TooltipContainer, {
                            className: L().nitroWheelFlairContainer,
                            text: T.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                            children: (0, r.jsx)(m.Z, {
                                className: L().nitroWheelFlair
                            })
                        }), T.Z.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF]
                    })]
                })
            }

            function B(e) {
                var t = e.title,
                    n = e.uploadType,
                    o = e.guild;
                return (0, r.jsxs)("div", {
                    className: L().optionBoxText,
                    children: [(0, r.jsx)(D, {
                        guildFeature: O(n, {
                            isGIF: !1
                        }),
                        guild: o
                    }), (0, r.jsx)("div", {
                        className: L().optionBoxDescription,
                        children: t
                    })]
                })
            }

            function F(e) {
                var t = e.transitionState,
                    s = e.onClose,
                    m = e.onComplete,
                    O = e.uploadType,
                    E = e.maxFileSizeBytes,
                    I = e.showUpsellHeader,
                    M = e.filters,
                    P = e.analyticsLocation,
                    w = e.analyticsLocations,
                    R = void 0 === w ? [] : w,
                    U = e.modalSubTitle,
                    D = e.imageSpecifications,
                    F = e.modalTitle,
                    H = void 0 === F ? T.Z.Messages.SELECT_IMAGE_MODAL_TITLE : F,
                    G = e.uploadOptionTitle,
                    z = void 0 === G ? T.Z.Messages.UPLOAD_IMAGE : G,
                    V = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        s();
                        m(e, t, n)
                    },
                    W = (0, i.e7)([b.Z], (function() {
                        return b.Z.isFocused()
                    })),
                    Y = (0, i.e7)([p.default], (function() {
                        return p.default.getCurrentUser()
                    })),
                    K = (0, i.e7)([d.Z], (function() {
                        return d.Z.getGuildId()
                    })),
                    X = (0, i.e7)([f.Z], (function() {
                        return f.Z.getGuild(K)
                    })),
                    q = o.useContext(a.AccessibilityPreferencesContext).reducedMotion,
                    $ = (0, a.useModalContext)(),
                    J = !y.ZP.canUseAnimatedAvatar(Y) && O === x.pC.AVATAR,
                    Q = (0, c.Z)(R, u.Z.SELECT_IMAGE_MODAL).analyticsLocations;
                o.useEffect((function() {
                    J && g.default.track(_.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: _.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                        location_stack: Q
                    });
                    g.default.track(_.rMx.OPEN_MODAL, {
                        type: _.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                        location: P
                    })
                }), [J, P, Q]);
                return (0, r.jsxs)(a.ModalRoot, {
                    transitionState: t,
                    size: a.ModalSize.SMALL,
                    children: [(0, r.jsxs)(a.ModalHeader, {
                        className: L().modalHeader,
                        separator: !1,
                        children: [(0, r.jsxs)("div", {
                            children: [(0, r.jsx)(a.FormTitle, {
                                tag: a.FormTitleTags.H1,
                                className: L().modalTitle,
                                children: H
                            }), null != U ? (0, r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: U
                            }) : null]
                        }), (0, r.jsx)(a.ModalCloseButton, {
                            onClick: s,
                            className: L().modalCloseButton
                        })]
                    }), (0, r.jsxs)(a.ModalContent, {
                        className: L().modalContent,
                        children: [(0, r.jsxs)("div", {
                            className: L().imagePickerContainer,
                            children: [(0, r.jsxs)(a.Clickable, {
                                className: L().optionBox,
                                children: [(0, r.jsx)("div", {
                                    className: L().contentCircle,
                                    children: (0, r.jsx)(v.Z, {
                                        className: L().uploadIcon
                                    })
                                }), (0, r.jsx)(a.Text, {
                                    variant: "text-sm/semibold",
                                    color: "interactive-normal",
                                    children: (0, r.jsx)(B, {
                                        title: z,
                                        uploadType: O,
                                        guild: X
                                    })
                                }), (0, r.jsx)(l.ZP, {
                                    onChange: function(e, t) {
                                        if (t.type === j.m.MP4) return V(e, t);
                                        (0, a.openModalLazy)(N((function() {
                                            var o, i;
                                            return S(this, (function(a) {
                                                switch (a.label) {
                                                    case 0:
                                                        return [4, Promise.all([n.e(40532), n.e(40056), n.e(19887), n.e(24251), n.e(91406), n.e(42643), n.e(17363), n.e(56620), n.e(33928)]).then(n.bind(n, 17363))];
                                                    case 1:
                                                        o = a.sent(), i = o.default;
                                                        return [2, function(n) {
                                                            return (0, r.jsx)(i, C({
                                                                imgURI: e,
                                                                file: t,
                                                                onCrop: V,
                                                                uploadType: O,
                                                                showUpsellHeader: I,
                                                                allowSkip: !0,
                                                                analyticsPage: null == P ? void 0 : P.page
                                                            }, n))
                                                        }]
                                                }
                                            }))
                                        })), {
                                            contextKey: $
                                        })
                                    },
                                    maxFileSizeBytes: E,
                                    onFileSizeError: function() {
                                        s();
                                        (0, A.Z)(E)
                                    },
                                    filters: M
                                })]
                            }), (0, r.jsxs)(a.Clickable, {
                                className: L().optionBox,
                                onClick: function() {
                                    (0, a.openModalLazy)(N((function() {
                                        var e, t;
                                        return S(this, (function(o) {
                                            switch (o.label) {
                                                case 0:
                                                    return [4, Promise.all([n.e(40532), n.e(96259), n.e(40056), n.e(79730), n.e(19887), n.e(24784), n.e(24251), n.e(91406), n.e(86159), n.e(85004), n.e(8969)]).then(n.bind(n, 159626))];
                                                case 1:
                                                    e = o.sent(), t = e.default;
                                                    return [2, function(e) {
                                                        return (0, r.jsx)(t, C({
                                                            uploadType: O,
                                                            onComplete: function(e, t) {
                                                                return V(e, t, !0)
                                                            },
                                                            showUpsellHeader: I,
                                                            analyticsPage: null == P ? void 0 : P.page
                                                        }, e))
                                                    }]
                                            }
                                        }))
                                    })), {
                                        contextKey: $
                                    })
                                },
                                children: [(0, r.jsxs)("div", {
                                    className: L().contentCircle,
                                    children: [(0, r.jsx)(k, {
                                        shouldAnimate: W && !q.enabled
                                    }), (0, r.jsx)("div", {
                                        className: L().gifIconContainer,
                                        children: (0, r.jsx)(h.Z, {
                                            className: L().gifIcon
                                        })
                                    })]
                                }), (0, r.jsx)(a.Text, {
                                    variant: "text-sm/semibold",
                                    color: "interactive-normal",
                                    children: (0, r.jsx)(Z, {
                                        uploadType: O,
                                        guild: X
                                    })
                                })]
                            })]
                        }), null != D ? (0, r.jsx)(a.Text, {
                            className: L().imageSpecifications,
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
                Z: () => d
            });
            var r = n(202351),
                o = n(473903),
                i = n(551778),
                a = n(116094),
                u = n(317387),
                c = n(159895),
                s = n(884123),
                l = n(203600);
            var f = n(717035);

            function d(e) {
                var t = e.autoTrackExposure,
                    n = e.experiment,
                    d = e.location,
                    p = (0, r.e7)([o.default], (function() {
                        return o.default.getCurrentUser()
                    })),
                    b = (0, f.N)(),
                    h = null != b,
                    v = null != p && (0, a.I5)(p);
                (0, c.Z$)(n);
                var m = u.L.useExperiment({
                        location: "014fbb_1"
                    }, {
                        autoTrackExposure: !1
                    }).enableTier0,
                    g = n.useExperiment({
                        location: null != d ? d : "1"
                    }, {
                        autoTrackExposure: m && !v && !h && t
                    }),
                    y = g.enabled,
                    _ = g.useExpectedValue,
                    x = g.useLikelihood,
                    O = (0, r.cj)([s.Z], (function() {
                        var e = s.Z.getState();
                        return {
                            fetched: e.fetched,
                            premiumLikelihood: e.premiumLikelihood
                        }
                    })),
                    E = O.premiumLikelihood,
                    A = O.fetched,
                    j = (0, r.e7)([i.Z], (function() {
                        return i.Z.isLoadedForSKUs([l.Si.TIER_0, l.Si.TIER_2])
                    })),
                    T = !v && y && m && !h && (_ ? !A || !j : !A),
                    I = l.p9.TIER_2;
                if (m)
                    if (h) {
                        var L = b.subscription_trial;
                        (null == L ? void 0 : L.sku_id) === l.Si.TIER_0 ? I = l.p9.TIER_0 : (null == L ? void 0 : L.sku_id) === l.Si.TIER_2 && (I = l.p9.TIER_2)
                    } else if (!v && !T && y)
                    if (_) {
                        I = function(e, t, n) {
                            return null == e ? l.p9.TIER_2 : e[l.Si.TIER_0] * t > e[l.Si.TIER_2] * n ? l.p9.TIER_0 : l.p9.TIER_2
                        }(E, (0, a.aS)(l.Xh.PREMIUM_MONTH_TIER_0).amount, (0, a.aS)(l.Xh.PREMIUM_MONTH_TIER_2).amount)
                    } else x && (I = function(e) {
                        if (null == e) return l.p9.TIER_0;
                        var t = e[c.Bc],
                            n = e[l.Si.TIER_0],
                            r = e[l.Si.TIER_2];
                        return r > n && r > t ? l.p9.TIER_2 : l.p9.TIER_0
                    }(E));
                return {
                    isLoading: T,
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
                u = n(882723),
                c = n(153686),
                s = n(19585),
                l = n(594302),
                f = n(652591),
                d = n(189146),
                p = n(717035),
                b = n(455706),
                h = n(70535),
                v = n(203600),
                m = n(2590),
                g = n(473708),
                y = n(296024),
                _ = n.n(y),
                x = n(545292),
                O = n.n(x);

            function E(e, t) {
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
                    y = e.type,
                    x = e.guildBoostProps,
                    A = e.analyticsSource,
                    j = e.analyticsLocation,
                    T = e.body,
                    I = e.context,
                    L = e.glowUp,
                    M = e.modalClassName,
                    P = e.artContainerClassName,
                    N = e.bodyClassName,
                    w = e.transitionState,
                    C = e.onClose,
                    R = e.onSubscribeClick,
                    S = e.onSecondaryClick,
                    U = e.secondaryCTA,
                    k = e.subscribeButtonText,
                    D = e.showNewBadge,
                    Z = void 0 !== D && D,
                    B = e.enableArtBoxShadow,
                    F = void 0 === B || B,
                    H = e.subscriptionTier,
                    G = void 0 === H ? v.Si.TIER_2 : H,
                    z = e.isLoading,
                    V = void 0 !== z && z,
                    W = e.hideBackButton,
                    Y = e.backButtonText,
                    K = E(e, ["title", "type", "guildBoostProps", "analyticsSource", "analyticsLocation", "body", "context", "glowUp", "modalClassName", "artContainerClassName", "bodyClassName", "transitionState", "onClose", "onSubscribeClick", "onSecondaryClick", "secondaryCTA", "subscribeButtonText", "showNewBadge", "enableArtBoxShadow", "subscriptionTier", "isLoading", "hideBackButton", "backButtonText"]),
                    X = null != x,
                    q = (0, p.N)(),
                    $ = (null == q || null === (t = q.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === G && !X,
                    J = (0, d.zH)(!$),
                    Q = (0,
                        s.Z)(c.Z.PREMIUM_UPSELL_MODAL).analyticsLocations;
                o.useEffect((function() {
                    V || (X ? f.default.track(m.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                        type: "".concat(y, " - Tier ").concat(x.boostedGuildTier),
                        guild_id: x.guild.id,
                        channel_id: x.channelId,
                        location: j,
                        location_stack: Q
                    }) : f.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: y,
                        source: A,
                        location_stack: Q,
                        sku_id: G
                    }))
                }), [X, G, V]);
                var ee, te = F ? a()(_().artContainer, _().artContainerBoxShadow, P) : a()(_().artContainer, P),
                    ne = null;
                ne = "artURL" in K ? (0, r.jsx)("img", {
                    className: _().art,
                    alt: "",
                    src: K.artURL
                }) : K.artElement;
                return (0, r.jsxs)(u.ModalRoot, {
                    className: a()(_().root, M),
                    "aria-label": i,
                    transitionState: w,
                    children: [(0, r.jsxs)("div", {
                        className: te,
                        children: [ne, Z ? (0, r.jsx)("img", {
                            className: _().sparkleBadge,
                            alt: "",
                            src: O()
                        }) : null]
                    }), (0, r.jsx)(u.ModalContent, {
                        className: _().content,
                        children: V ? (0, r.jsx)(u.Spinner, {}) : (0, r.jsx)(r.Fragment, {
                            children: $ ? (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(h.ZP, {
                                    onClose: C,
                                    type: y,
                                    subscriptionTier: null !== (ee = null == q || null === (n = q.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== ee ? ee : v.Si.TIER_2,
                                    headingText: i,
                                    context: I,
                                    analyticsLocationObject: j,
                                    children: L
                                })
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(u.Heading, {
                                    className: _().header,
                                    variant: "heading-xl/semibold",
                                    children: i
                                }), (0, r.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    className: a()(N),
                                    children: T
                                })]
                            })
                        })
                    }), (0, r.jsxs)(u.ModalFooter, {
                        className: _().footer,
                        children: [(0, r.jsxs)("div", {
                            className: _().primaryActions,
                            children: [null != U ? (0, r.jsx)(u.Button, {
                                className: _().secondaryAction,
                                onClick: S,
                                size: u.Button.Sizes.SMALL,
                                color: u.Button.Colors.PRIMARY,
                                look: u.Button.Looks.LINK,
                                children: U
                            }) : null, function() {
                                var e;
                                if (X) return (0, r.jsx)(l.Z, {
                                    analyticsLocation: j,
                                    guild: x.guild,
                                    onClose: C
                                });
                                var t = $ ? J ? g.Z.Messages.MARKETING_PAGE_CTA_TRY_1_MONTH_FREE : (null == q || null === (e = q.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === v.Si.TIER_2 ? g.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : g.Z.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : void 0,
                                    n = $ ? null == q ? void 0 : q.trial_id : null;
                                return (0, r.jsx)(b.Z, {
                                    premiumModalAnalyticsLocation: j,
                                    subscriptionTier: G,
                                    trialId: n,
                                    size: u.Button.Sizes.SMALL,
                                    color: u.Button.Colors.GREEN,
                                    onClick: function() {
                                        null == R || R();
                                        C()
                                    },
                                    buttonText: null != k ? k : t
                                })
                            }()]
                        }), !W && (0, r.jsx)(u.Button, {
                            onClick: C,
                            size: u.Button.Sizes.SMALL,
                            color: u.Button.Colors.PRIMARY,
                            look: u.Button.Looks.LINK,
                            children: null != Y ? Y : g.Z.Messages.BACK
                        })]
                    })]
                })
            }
        },
        331448: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
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

            function u(e, t) {
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

            function c(e) {
                var t = e.width,
                    n = void 0 === t ? 29 : t,
                    c = e.height,
                    s = void 0 === c ? 22 : c,
                    l = e.color,
                    f = void 0 === l ? "currentColor" : l,
                    d = e.backgroundColor,
                    p = u(e, ["width", "height", "color", "backgroundColor"]);
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
                    height: s,
                    viewBox: "0 0 29 22",
                    children: (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsx)("rect", {
                            width: n,
                            height: s,
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
            }
        },
        347117: (e, t, n) => {
            "use strict";
            n.d(t, {
                Tj: () => d,
                zp: () => p,
                Dc: () => b,
                rn: () => h,
                rv: () => v,
                XN: () => g,
                OF: () => y,
                fD: () => x,
                QB: () => O,
                Bo: () => E,
                c0: () => T
            });
            var r = n(441143),
                o = n.n(r),
                i = n(496486),
                a = n.n(i),
                u = n(16243),
                c = n.n(u);

            function s(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function l(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            s(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            s(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var f = function(e, t) {
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
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1,
                                    r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
                        }([i, u])
                    }
                }
            };
            0;

            function d(e) {
                var t = e.width,
                    n = e.height,
                    r = e.maxWidth,
                    o = e.maxHeight,
                    i = e.minWidth,
                    a = void 0 === i ? 0 : i,
                    u = e.minHeight,
                    c = void 0 === u ? 0 : u;
                if (t !== r || n !== o) {
                    var s = t > r ? r / t : 1;
                    t = Math.max(Math.round(t * s), a);
                    var l = (n = Math.max(Math.round(n * s), c)) > o ? o / n : 1;
                    t = Math.max(Math.round(t * l), a);
                    n = Math.max(Math.round(n * l), c)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function p(e, t) {
                var n = Math.min(Math.round(.65 * window.innerHeight), 2e3);
                return d({
                    width: e,
                    height: t,
                    maxWidth: Math.min(Math.round(.75 * window.innerWidth), 2e3),
                    maxHeight: n
                })
            }

            function b(e) {
                var t = e.width,
                    n = e.height,
                    r = e.maxWidth,
                    o = e.maxHeight,
                    i = 1;
                t > r && (i = r / t);
                t = Math.round(t * i);
                var a = 1;
                (n = Math.round(n * i)) > o && (a = o / n);
                return Math.min(i * a, 1)
            }

            function h(e) {
                var t = e.width,
                    n = e.height,
                    r = e.maxWidth,
                    o = e.maxHeight;
                if (t === n) return 1;
                var i = Math.max(r / t, o / n);
                return Math.min(i, 1)
            }

            function v(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            var m = [
                [0, 0, 0]
            ];

            function g(e, t, n) {
                var r = document.createElement("canvas"),
                    o = r.getContext("2d");
                if (null == o) return m;
                var i = r.width = 0 === e.width ? 128 : e.width,
                    a = r.height = 0 === e.height ? 128 : e.height;
                o.drawImage(e, 0, 0, i, a);
                var u = function(e, t, n) {
                        for (var r, o, i, a, u, c = [], s = 0; s < t; s += n) {
                            o = e[0 + (r = 4 * s)];
                            i = e[r + 1];
                            a = e[r + 2];
                            (void 0 === (u = e[r + 3]) || u >= 125) && (o > 250 && i > 250 && a > 250 || c.push([o, i, a]))
                        }
                        return c
                    }(o.getImageData(0, 0, i, a).data, i * a, n),
                    s = c()(u, t);
                return "boolean" == typeof s ? m : s.palette()
            }
            var y = function(e) {
                    return _(e)
                },
                _ = a().memoize((function(e) {
                    return new Promise((function(t, n) {
                        var r = new Image;
                        r.crossOrigin = "Anonymous";
                        r.onerror = function(e) {
                            n(e);
                            r.onerror = r.onload = null;
                            r = null
                        };
                        r.onload = function() {
                            t(g(r, 5, 10));
                            r.onerror = r.onload = null;
                            r = null
                        };
                        r.src = e
                    }))
                }));

            function x(e) {
                return new Promise((function(t, n) {
                    var r = new FileReader;
                    r.readAsDataURL(e);
                    r.onload = function() {
                        o()("string" == typeof r.result, "Result must be a string");
                        t(r.result)
                    };
                    r.onerror = function(e) {
                        return n(e)
                    }
                }))
            }

            function O(e) {
                var t = e.split(";base64,");
                o()(2 === t.length, "Input data is not a valid image.");
                return atob(t[1]).length
            }

            function E(e, t, n) {
                return A.apply(this, arguments)
            }

            function A() {
                return (A = l((function(e, t, n) {
                    var r;
                    return f(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, j(e).arrayBuffer()];
                            case 1:
                                r = o.sent();
                                return [2, new File([r], t, {
                                    type: n
                                })]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function j(e) {
                var t;
                t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                for (var n = e.split(",")[0].split(":")[1].split(";")[0], r = new Uint8Array(t.length), o = 0; o < t.length; o++) r[o] = t.charCodeAt(o);
                return new Blob([r], {
                    type: n
                })
            }

            function T(e) {
                return I.apply(this, arguments)
            }

            function I() {
                return (I = l((function(e) {
                    var t, n, r;
                    return f(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                if ("image/png" !== (null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0])) throw new Error("File is not a PNG");
                                return [4, e.text()];
                            case 1:
                                n = o.sent();
                                return (r = n.indexOf("IDAT")) > 0 && -1 !== n.substring(0, r).indexOf("acTL") ? [2, !0] : [2, !1]
                        }
                    }))
                }))).apply(this, arguments)
            }
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

            function u(e, t) {
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
                    i = u(t, ["trackedActionData"]),
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
                        var t, i, u = r.properties;
                        "function" == typeof r.properties && (u = r.properties(e));
                        (0,
                            o.trackNetworkAction)(r.event, a({
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (i = e.body) || void 0 === i ? void 0 : i.message
                        }, c, u));
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
        322500: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i,
                o = /^((https:\/\/)?(discord\.gg\/)|(discord\.com\/)(invite\/)?)?[A-Za-z0-9]{8,8}$/,
                i = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                a = /^(.*)#[0-9]{1,5}$/,
                u = ["@", "#", ":", "```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage"],
                c = ["discordtag", "everyone", "here", "discord nitro", "discord"];
            const s = {
                isEmail: function(e) {
                    return r.test(e)
                },
                isInvite: function(e) {
                    return o.test(e)
                },
                isPhoneNumber: function(e) {
                    return i.test(e)
                },
                isUserTagLike: function(e) {
                    var t = a.exec(e);
                    if (null != t && t.length > 1) {
                        var n = t[1],
                            r = u.some((function(e) {
                                return n.includes(e)
                            })),
                            o = c.includes(n);
                        return !r && !o
                    }
                    return !1
                }
            }
        },
        284157: (e, t, n) => {
            "use strict";
            n.d(t, {
                n: () => r
            });
            var r;
            ! function(e) {
                e.CONNECT_VOICE = "connect_voice"
            }(r || (r = {}));
            new Set(["connect_voice"])
        },
        349139: (e, t, n) => {
            "use strict";
            n.d(t, {
                o: () => r
            });
            var r;
            ! function(e) {
                e.TRANSFER_EXISTING_CALL = "TRANSFER_EXISTING_CALL";
                e.CREATE_NEW_CALL = "CREATE_NEW_CALL"
            }(r || (r = {}));
            new Set(["CREATE_NEW_CALL", "TRANSFER_EXISTING_CALL"])
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
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
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
//# sourceMappingURL=47d243cc17b57b811fde.js.map