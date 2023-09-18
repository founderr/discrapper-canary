(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [95331], {
        14636: (r, t, n) => {
            var e = n(422545),
                o = n(135694),
                u = n(701469),
                c = n(578264),
                a = n(565776),
                i = n(936719),
                f = Object.prototype.hasOwnProperty;
            r.exports = function(r, t) {
                var n = u(r),
                    s = !n && o(r),
                    p = !n && !s && c(r),
                    v = !n && !s && !p && i(r),
                    l = n || s || p || v,
                    b = l ? e(r.length, String) : [],
                    h = b.length;
                for (var g in r) !t && !f.call(r, g) || l && ("length" == g || p && ("offset" == g || "parent" == g) || v && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || a(g, h)) || b.push(g);
                return b
            }
        },
        70151: (r, t, n) => {
            var e = n(200278),
                o = n(173480);
            r.exports = function(r) {
                return o(e(r))
            }
        },
        238749: (r, t, n) => {
            var e = n(644239),
                o = n(541780),
                u = n(637005),
                c = {};
            c["[object Float32Array]"] = c["[object Float64Array]"] = c["[object Int8Array]"] = c["[object Int16Array]"] = c["[object Int32Array]"] = c["[object Uint8Array]"] = c["[object Uint8ClampedArray]"] = c["[object Uint16Array]"] = c["[object Uint32Array]"] = !0;
            c["[object Arguments]"] = c["[object Array]"] = c["[object ArrayBuffer]"] = c["[object Boolean]"] = c["[object DataView]"] = c["[object Date]"] = c["[object Error]"] = c["[object Function]"] = c["[object Map]"] = c["[object Number]"] = c["[object Object]"] = c["[object RegExp]"] = c["[object Set]"] = c["[object String]"] = c["[object WeakMap]"] = !1;
            r.exports = function(r) {
                return u(r) && o(r.length) && !!c[e(r)]
            }
        },
        400280: (r, t, n) => {
            var e = n(225726),
                o = n(86916),
                u = Object.prototype.hasOwnProperty;
            r.exports = function(r) {
                if (!e(r)) return o(r);
                var t = [];
                for (var n in Object(r)) u.call(r, n) && "constructor" != n && t.push(n);
                return t
            }
        },
        525127: (r, t, n) => {
            var e = n(173480),
                o = n(252628);
            r.exports = function(r) {
                return e(o(r))
            }
        },
        422545: r => {
            r.exports = function(r, t) {
                for (var n = -1, e = Array(r); ++n < r;) e[n] = t(n);
                return e
            }
        },
        307518: r => {
            r.exports = function(r) {
                return function(t) {
                    return r(t)
                }
            }
        },
        747415: (r, t, n) => {
            var e = n(829932);
            r.exports = function(r, t) {
                return e(t, (function(t) {
                    return r[t]
                }))
            }
        },
        200278: r => {
            r.exports = function(r, t) {
                var n = -1,
                    e = r.length;
                t || (t = Array(e));
                for (; ++n < e;) t[n] = r[n];
                return t
            }
        },
        225726: r => {
            var t = Object.prototype;
            r.exports = function(r) {
                var n = r && r.constructor;
                return r === ("function" == typeof n && n.prototype || t)
            }
        },
        86916: (r, t, n) => {
            var e = n(205569)(Object.keys, Object);
            r.exports = e
        },
        531167: (r, t, n) => {
            r = n.nmd(r);
            var e = n(431957),
                o = t && !t.nodeType && t,
                u = o && r && !r.nodeType && r,
                c = u && u.exports === o && e.process,
                a = function() {
                    try {
                        var r = u && u.require && u.require("util").types;
                        return r || c && c.binding && c.binding("util")
                    } catch (r) {}
                }();
            r.exports = a
        },
        205569: r => {
            r.exports = function(r, t) {
                return function(n) {
                    return r(t(n))
                }
            }
        },
        173480: (r, t, n) => {
            var e = n(769877);
            r.exports = function(r, t) {
                var n = -1,
                    o = r.length,
                    u = o - 1;
                t = void 0 === t ? o : t;
                for (; ++n < t;) {
                    var c = e(n, u),
                        a = r[c];
                    r[c] = r[n];
                    r[n] = a
                }
                r.length = t;
                return r
            }
        },
        578264: (r, t, n) => {
            r = n.nmd(r);
            var e = n(555639),
                o = n(595062),
                u = t && !t.nodeType && t,
                c = u && r && !r.nodeType && r,
                a = c && c.exports === u ? e.Buffer : void 0,
                i = (a ? a.isBuffer : void 0) || o;
            r.exports = i
        },
        936719: (r, t, n) => {
            var e = n(238749),
                o = n(307518),
                u = n(531167),
                c = u && u.isTypedArray,
                a = c ? o(c) : e;
            r.exports = a
        },
        3674: (r, t, n) => {
            var e = n(14636),
                o = n(400280),
                u = n(498612);
            r.exports = function(r) {
                return u(r) ? e(r) : o(r)
            }
        },
        369983: (r, t, n) => {
            var e = n(70151),
                o = n(525127),
                u = n(701469);
            r.exports = function(r) {
                return (u(r) ? e : o)(r)
            }
        },
        595062: r => {
            r.exports = function() {
                return !1
            }
        },
        252628: (r, t, n) => {
            var e = n(747415),
                o = n(3674);
            r.exports = function(r) {
                return null == r ? [] : e(r, o(r))
            }
        },
        16243: r => {
            if (!t) var t = {
                map: function(r, t) {
                    var n = {};
                    return t ? r.map((function(r, e) {
                        n.index = e;
                        return t.call(n, r)
                    })) : r.slice()
                },
                naturalOrder: function(r, t) {
                    return r < t ? -1 : r > t ? 1 : 0
                },
                sum: function(r, t) {
                    var n = {};
                    return r.reduce(t ? function(r, e, o) {
                        n.index = o;
                        return r + t.call(n, e)
                    } : function(r, t) {
                        return r + t
                    }, 0)
                },
                max: function(r, n) {
                    return Math.max.apply(null, n ? t.map(r, n) : r)
                }
            };
            var n = function() {
                function r(r, t, n) {
                    return (r << 10) + (t << 5) + n
                }

                function n(r) {
                    var t = [],
                        n = !1;

                    function e() {
                        t.sort(r);
                        n = !0
                    }
                    return {
                        push: function(r) {
                            t.push(r);
                            n = !1
                        },
                        peek: function(r) {
                            n || e();
                            void 0 === r && (r = t.length - 1);
                            return t[r]
                        },
                        pop: function() {
                            n || e();
                            return t.pop()
                        },
                        size: function() {
                            return t.length
                        },
                        map: function(r) {
                            return t.map(r)
                        },
                        debug: function() {
                            n || e();
                            return t
                        }
                    }
                }

                function e(r, t, n, e, o, u, c) {
                    var a = this;
                    a.r1 = r;
                    a.r2 = t;
                    a.g1 = n;
                    a.g2 = e;
                    a.b1 = o;
                    a.b2 = u;
                    a.histo = c
                }
                e.prototype = {
                    volume: function(r) {
                        var t = this;
                        t._volume && !r || (t._volume = (t.r2 - t.r1 + 1) * (t.g2 - t.g1 + 1) * (t.b2 - t.b1 + 1));
                        return t._volume
                    },
                    count: function(t) {
                        var n = this,
                            e = n.histo;
                        if (!n._count_set || t) {
                            var o, u, c, a = 0;
                            for (o = n.r1; o <= n.r2; o++)
                                for (u = n.g1; u <= n.g2; u++)
                                    for (c = n.b1; c <= n.b2; c++) a += e[r(o, u, c)] || 0;
                            n._count = a;
                            n._count_set = !0
                        }
                        return n._count
                    },
                    copy: function() {
                        var r = this;
                        return new e(r.r1, r.r2, r.g1, r.g2, r.b1, r.b2, r.histo)
                    },
                    avg: function(t) {
                        var n = this,
                            e = n.histo;
                        if (!n._avg || t) {
                            var o, u, c, a, i = 0,
                                f = 0,
                                s = 0,
                                p = 0;
                            for (u = n.r1; u <= n.r2; u++)
                                for (c = n.g1; c <= n.g2; c++)
                                    for (a = n.b1; a <= n.b2; a++) {
                                        i += o = e[r(u, c, a)] || 0;
                                        f += o * (u + .5) * 8;
                                        s += o * (c + .5) * 8;
                                        p += o * (a + .5) * 8
                                    }
                            n._avg = i ? [~~(f / i), ~~(s / i), ~~(p / i)] : [~~(8 * (n.r1 + n.r2 + 1) / 2), ~~(8 * (n.g1 + n.g2 + 1) / 2), ~~(8 * (n.b1 + n.b2 + 1) / 2)]
                        }
                        return n._avg
                    },
                    contains: function(r) {
                        var t = this,
                            n = r[0] >> 3;
                        gval = r[1] >> 3;
                        bval = r[2] >> 3;
                        return n >= t.r1 && n <= t.r2 && gval >= t.g1 && gval <= t.g2 && bval >= t.b1 && bval <= t.b2
                    }
                };

                function o() {
                    this.vboxes = new n((function(r, n) {
                        return t.naturalOrder(r.vbox.count() * r.vbox.volume(), n.vbox.count() * n.vbox.volume())
                    }))
                }
                o.prototype = {
                    push: function(r) {
                        this.vboxes.push({
                            vbox: r,
                            color: r.avg()
                        })
                    },
                    palette: function() {
                        return this.vboxes.map((function(r) {
                            return r.color
                        }))
                    },
                    size: function() {
                        return this.vboxes.size()
                    },
                    map: function(r) {
                        for (var t = this.vboxes, n = 0; n < t.size(); n++)
                            if (t.peek(n).vbox.contains(r)) return t.peek(n).color;
                        return this.nearest(r)
                    },
                    nearest: function(r) {
                        for (var t, n, e, o = this.vboxes, u = 0; u < o.size(); u++)
                            if ((n = Math.sqrt(Math.pow(r[0] - o.peek(u).color[0], 2) + Math.pow(r[1] - o.peek(u).color[1], 2) + Math.pow(r[2] - o.peek(u).color[2], 2))) < t || void 0 === t) {
                                t = n;
                                e = o.peek(u).color
                            } return e
                    },
                    forcebw: function() {
                        var r = this.vboxes;
                        r.sort((function(r, n) {
                            return t.naturalOrder(t.sum(r.color), t.sum(n.color))
                        }));
                        var n = r[0].color;
                        n[0] < 5 && n[1] < 5 && n[2] < 5 && (r[0].color = [0, 0, 0]);
                        var e = r.length - 1,
                            o = r[e].color;
                        o[0] > 251 && o[1] > 251 && o[2] > 251 && (r[e].color = [255, 255, 255])
                    }
                };

                function u(n, e) {
                    if (e.count()) {
                        var o = e.r2 - e.r1 + 1,
                            u = e.g2 - e.g1 + 1,
                            c = e.b2 - e.b1 + 1,
                            a = t.max([o, u, c]);
                        if (1 == e.count()) return [e.copy()];
                        var i, f, s, p, v = 0,
                            l = [],
                            b = [];
                        if (a == o)
                            for (i = e.r1; i <= e.r2; i++) {
                                p = 0;
                                for (f = e.g1; f <= e.g2; f++)
                                    for (s = e.b1; s <= e.b2; s++) p += n[r(i, f, s)] || 0;
                                v += p;
                                l[i] = v
                            } else if (a == u)
                                for (i = e.g1; i <= e.g2; i++) {
                                    p = 0;
                                    for (f = e.r1; f <= e.r2; f++)
                                        for (s = e.b1; s <= e.b2; s++) p += n[r(f, i, s)] || 0;
                                    v += p;
                                    l[i] = v
                                } else
                                    for (i = e.b1; i <= e.b2; i++) {
                                        p = 0;
                                        for (f = e.r1; f <= e.r2; f++)
                                            for (s = e.g1; s <= e.g2; s++) p += n[r(f, s, i)] || 0;
                                        v += p;
                                        l[i] = v
                                    }
                        l.forEach((function(r, t) {
                            b[t] = v - r
                        }));
                        return h(a == o ? "r" : a == u ? "g" : "b")
                    }

                    function h(r) {
                        var t, n, o, u, c, a = r + "1",
                            f = r + "2",
                            s = 0;
                        for (i = e[a]; i <= e[f]; i++)
                            if (l[i] > v / 2) {
                                o = e.copy();
                                u = e.copy();
                                c = (t = i - e[a]) <= (n = e[f] - i) ? Math.min(e[f] - 1, ~~(i + n / 2)) : Math.max(e[a], ~~(i - 1 - t / 2));
                                for (; !l[c];) c++;
                                s = b[c];
                                for (; !s && l[c - 1];) s = b[--c];
                                o[f] = c;
                                u[a] = o[f] + 1;
                                return [o, u]
                            }
                    }
                }
                return {
                    quantize: function(c, a) {
                        if (!c.length || a < 2 || a > 256) return !1;
                        var i = function(t) {
                            var n, e, o, u, c = new Array(32768);
                            t.forEach((function(t) {
                                e = t[0] >> 3;
                                o = t[1] >> 3;
                                u = t[2] >> 3;
                                n = r(e, o, u);
                                c[n] = (c[n] || 0) + 1
                            }));
                            return c
                        }(c);
                        i.forEach((function() {
                            0
                        }));
                        var f = function(r, t) {
                                var n, o, u, c = 1e6,
                                    a = 0,
                                    i = 1e6,
                                    f = 0,
                                    s = 1e6,
                                    p = 0;
                                r.forEach((function(r) {
                                    n = r[0] >> 3;
                                    o = r[1] >> 3;
                                    u = r[2] >> 3;
                                    n < c ? c = n : n > a && (a = n);
                                    o < i ? i = o : o > f && (f = o);
                                    u < s ? s = u : u > p && (p = u)
                                }));
                                return new e(c, a, i, f, s, p, t)
                            }(c, i),
                            s = new n((function(r, n) {
                                return t.naturalOrder(r.count(), n.count())
                            }));
                        s.push(f);

                        function p(r, t) {
                            for (var n, e = 1, o = 0; o < 1e3;)
                                if ((n = r.pop()).count()) {
                                    var c = u(i, n),
                                        a = c[0],
                                        f = c[1];
                                    if (!a) return;
                                    r.push(a);
                                    if (f) {
                                        r.push(f);
                                        e++
                                    }
                                    if (e >= t) return;
                                    if (o++ > 1e3) return
                                } else {
                                    r.push(n);
                                    o++
                                }
                        }
                        p(s, .75 * a);
                        for (var v = new n((function(r, n) {
                                return t.naturalOrder(r.count() * r.volume(), n.count() * n.volume())
                            })); s.size();) v.push(s.pop());
                        p(v, a - v.size());
                        for (var l = new o; v.size();) l.push(v.pop());
                        return l
                    }
                }
            }();
            r.exports = n.quantize
        },
        284157: (r, t, n) => {
            "use strict";
            n.d(t, {
                n: () => e
            });
            var e;
            ! function(r) {
                r.CONNECT_VOICE = "connect_voice"
            }(e || (e = {}));
            new Set(["connect_voice"])
        },
        349139: (r, t, n) => {
            "use strict";
            n.d(t, {
                o: () => e
            });
            var e;
            ! function(r) {
                r.TRANSFER_EXISTING_CALL = "TRANSFER_EXISTING_CALL";
                r.CREATE_NEW_CALL = "CREATE_NEW_CALL"
            }(e || (e = {}));
            new Set(["CREATE_NEW_CALL", "TRANSFER_EXISTING_CALL"])
        },
        248634: (r, t, n) => {
            "use strict";
            n.d(t, {
                z: () => e
            });
            var e;
            ! function(r) {
                r.MATCH_ALL = "match_all";
                r.MATCH_SOME = "match_some"
            }(e || (e = {}));
            new Set(["match_all", "match_some"])
        },
        283151: (r, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var e = n(667294);

            function o(r, t) {
                (null == t || t > r.length) && (t = r.length);
                for (var n = 0, e = new Array(t); n < t; n++) e[n] = r[n];
                return e
            }

            function u(r, t) {
                return function(r) {
                    if (Array.isArray(r)) return r
                }(r) || function(r, t) {
                    var n = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
                    if (null != n) {
                        var e, o, u = [],
                            c = !0,
                            a = !1;
                        try {
                            for (n = n.call(r); !(c = (e = n.next()).done); c = !0) {
                                u.push(e.value);
                                if (t && u.length === t) break
                            }
                        } catch (r) {
                            a = !0;
                            o = r
                        } finally {
                            try {
                                c || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return u
                    }
                }(r, t) || function(r, t) {
                    if (!r) return;
                    if ("string" == typeof r) return o(r, t);
                    var n = Object.prototype.toString.call(r).slice(8, -1);
                    "Object" === n && r.constructor && (n = r.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(r, t)
                }(r, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c() {
                var r = u((0, e.useState)({}), 2)[1];
                return (0, e.useCallback)((function() {
                    return r({})
                }), [])
            }
        }
    }
]);