(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [20853, 53935, 57678, 58621], {
        737264: t => {
            "use strict";
            t.exports.Q = function(t) {
                var r, e = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!e) return null;
                e.shift();
                var n = null,
                    o = [];
                if (e[2]) {
                    n = (r = e[2].split("-")).shift();
                    o = r
                }
                var a = [];
                e[5] && (a = e[5].split("-")).shift();
                var i = [];
                if (e[6]) {
                    (r = e[6].split("-")).shift();
                    for (var u, s = []; r.length;) {
                        var c = r.shift();
                        if (1 === c.length)
                            if (u) {
                                i.push({
                                    singleton: u,
                                    extension: s
                                });
                                u = c;
                                s = []
                            } else u = c;
                        else s.push(c)
                    }
                    i.push({
                        singleton: u,
                        extension: s
                    })
                }
                var p = [];
                if (e[7]) {
                    (p = e[7].split("-")).shift();
                    p.shift()
                }
                var f = [];
                e[8] && (f = e[8].split("-")).shift();
                return {
                    langtag: {
                        language: {
                            language: n,
                            extlang: o
                        },
                        script: e[3] || null,
                        region: e[4] || null,
                        variant: a,
                        extension: i,
                        privateuse: p
                    },
                    privateuse: f,
                    grandfathered: {
                        irregular: e[0] || null,
                        regular: e[1] || null
                    }
                }
            }
        },
        824390: t => {
            "use strict";
            t.exports = function(t, r) {
                var e = r.length,
                    n = t.length;
                if (n > e) return !1;
                if (n === e) return t === r;
                t: for (var o = 0, a = 0; o < n; o++) {
                    for (var i = t.charCodeAt(o); a < e;)
                        if (r.charCodeAt(a++) === i) continue t;
                    return !1
                }
                return !0
            }
        },
        753074: t => {
            "use strict";
            var r = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                e = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                n = "function" == typeof Object.getOwnPropertySymbols;
            t.exports = function(t, o, a) {
                if ("string" != typeof o) {
                    var i = Object.getOwnPropertyNames(o);
                    n && (i = i.concat(Object.getOwnPropertySymbols(o)));
                    for (var u = 0; u < i.length; ++u)
                        if (!(r[i[u]] || e[i[u]] || a && a[i[u]])) try {
                            t[i[u]] = o[i[u]]
                        } catch (t) {}
                }
                return t
            }
        },
        301989: (t, r, e) => {
            var n = e(751789),
                o = e(780401),
                a = e(657667),
                i = e(521327),
                u = e(281866);

            function s(t) {
                var r = -1,
                    e = null == t ? 0 : t.length;
                this.clear();
                for (; ++r < e;) {
                    var n = t[r];
                    this.set(n[0], n[1])
                }
            }
            s.prototype.clear = n;
            s.prototype.delete = o;
            s.prototype.get = a;
            s.prototype.has = i;
            s.prototype.set = u;
            t.exports = s
        },
        738407: (t, r, e) => {
            var n = e(327040),
                o = e(514125),
                a = e(882117),
                i = e(567518),
                u = e(654705);

            function s(t) {
                var r = -1,
                    e = null == t ? 0 : t.length;
                this.clear();
                for (; ++r < e;) {
                    var n = t[r];
                    this.set(n[0], n[1])
                }
            }
            s.prototype.clear = n;
            s.prototype.delete = o;
            s.prototype.get = a;
            s.prototype.has = i;
            s.prototype.set = u;
            t.exports = s
        },
        357071: (t, r, e) => {
            var n = e(610852)(e(555639), "Map");
            t.exports = n
        },
        883369: (t, r, e) => {
            var n = e(924785),
                o = e(611285),
                a = e(396e3),
                i = e(349916),
                u = e(195265);

            function s(t) {
                var r = -1,
                    e = null == t ? 0 : t.length;
                this.clear();
                for (; ++r < e;) {
                    var n = t[r];
                    this.set(n[0], n[1])
                }
            }
            s.prototype.clear = n;
            s.prototype.delete = o;
            s.prototype.get = a;
            s.prototype.has = i;
            s.prototype.set = u;
            t.exports = s
        },
        218470: (t, r, e) => {
            var n = e(977813);
            t.exports = function(t, r) {
                for (var e = t.length; e--;)
                    if (n(t[e][0], r)) return e;
                return -1
            }
        },
        28458: (t, r, e) => {
            var n = e(623560),
                o = e(215346),
                a = e(513218),
                i = e(680346),
                u = /^\[object .+?Constructor\]$/,
                s = Function.prototype,
                c = Object.prototype,
                p = s.toString,
                f = c.hasOwnProperty,
                l = RegExp("^" + p.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            t.exports = function(t) {
                return !(!a(t) || o(t)) && (n(t) ? l : u).test(i(t))
            }
        },
        614429: (t, r, e) => {
            var n = e(555639)["__core-js_shared__"];
            t.exports = n
        },
        45050: (t, r, e) => {
            var n = e(37019);
            t.exports = function(t, r) {
                var e = t.__data__;
                return n(r) ? e["string" == typeof r ? "string" : "hash"] : e.map
            }
        },
        610852: (t, r, e) => {
            var n = e(28458),
                o = e(647801);
            t.exports = function(t, r) {
                var e = o(t, r);
                return n(e) ? e : void 0
            }
        },
        647801: t => {
            t.exports = function(t, r) {
                return null == t ? void 0 : t[r]
            }
        },
        751789: (t, r, e) => {
            var n = e(894536);
            t.exports = function() {
                this.__data__ = n ? n(null) : {};
                this.size = 0
            }
        },
        780401: t => {
            t.exports = function(t) {
                var r = this.has(t) && delete this.__data__[t];
                this.size -= r ? 1 : 0;
                return r
            }
        },
        657667: (t, r, e) => {
            var n = e(894536),
                o = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                var r = this.__data__;
                if (n) {
                    var e = r[t];
                    return "__lodash_hash_undefined__" === e ? void 0 : e
                }
                return o.call(r, t) ? r[t] : void 0
            }
        },
        521327: (t, r, e) => {
            var n = e(894536),
                o = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                var r = this.__data__;
                return n ? void 0 !== r[t] : o.call(r, t)
            }
        },
        281866: (t, r, e) => {
            var n = e(894536);
            t.exports = function(t, r) {
                var e = this.__data__;
                this.size += this.has(t) ? 0 : 1;
                e[t] = n && void 0 === r ? "__lodash_hash_undefined__" : r;
                return this
            }
        },
        37019: t => {
            t.exports = function(t) {
                var r = typeof t;
                return "string" == r || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t
            }
        },
        215346: (t, r, e) => {
            var n, o = e(614429),
                a = (n = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
            t.exports = function(t) {
                return !!a && a in t
            }
        },
        327040: t => {
            t.exports = function() {
                this.__data__ = [];
                this.size = 0
            }
        },
        514125: (t, r, e) => {
            var n = e(218470),
                o = Array.prototype.splice;
            t.exports = function(t) {
                var r = this.__data__,
                    e = n(r, t);
                if (e < 0) return !1;
                e == r.length - 1 ? r.pop() : o.call(r, e, 1);
                --this.size;
                return !0
            }
        },
        882117: (t, r, e) => {
            var n = e(218470);
            t.exports = function(t) {
                var r = this.__data__,
                    e = n(r, t);
                return e < 0 ? void 0 : r[e][1]
            }
        },
        567518: (t, r, e) => {
            var n = e(218470);
            t.exports = function(t) {
                return n(this.__data__, t) > -1
            }
        },
        654705: (t, r, e) => {
            var n = e(218470);
            t.exports = function(t, r) {
                var e = this.__data__,
                    o = n(e, t);
                if (o < 0) {
                    ++this.size;
                    e.push([t, r])
                } else e[o][1] = r;
                return this
            }
        },
        924785: (t, r, e) => {
            var n = e(301989),
                o = e(738407),
                a = e(357071);
            t.exports = function() {
                this.size = 0;
                this.__data__ = {
                    hash: new n,
                    map: new(a || o),
                    string: new n
                }
            }
        },
        611285: (t, r, e) => {
            var n = e(45050);
            t.exports = function(t) {
                var r = n(this, t).delete(t);
                this.size -= r ? 1 : 0;
                return r
            }
        },
        396e3: (t, r, e) => {
            var n = e(45050);
            t.exports = function(t) {
                return n(this, t).get(t)
            }
        },
        349916: (t, r, e) => {
            var n = e(45050);
            t.exports = function(t) {
                return n(this, t).has(t)
            }
        },
        195265: (t, r, e) => {
            var n = e(45050);
            t.exports = function(t, r) {
                var e = n(this, t),
                    o = e.size;
                e.set(t, r);
                this.size += e.size == o ? 0 : 1;
                return this
            }
        },
        894536: (t, r, e) => {
            var n = e(610852)(Object, "create");
            t.exports = n
        },
        680346: t => {
            var r = Function.prototype.toString;
            t.exports = function(t) {
                if (null != t) {
                    try {
                        return r.call(t)
                    } catch (t) {}
                    try {
                        return t + ""
                    } catch (t) {}
                }
                return ""
            }
        },
        288306: (t, r, e) => {
            var n = e(883369);

            function o(t, r) {
                if ("function" != typeof t || null != r && "function" != typeof r) throw new TypeError("Expected a function");
                var e = function() {
                    var n = arguments,
                        o = r ? r.apply(this, n) : n[0],
                        a = e.cache;
                    if (a.has(o)) return a.get(o);
                    var i = t.apply(this, n);
                    e.cache = a.set(o, i) || a;
                    return i
                };
                e.cache = new(o.Cache || n);
                return e
            }
            o.Cache = n;
            t.exports = o
        },
        16243: t => {
            if (!r) var r = {
                map: function(t, r) {
                    var e = {};
                    return r ? t.map((function(t, n) {
                        e.index = n;
                        return r.call(e, t)
                    })) : t.slice()
                },
                naturalOrder: function(t, r) {
                    return t < r ? -1 : t > r ? 1 : 0
                },
                sum: function(t, r) {
                    var e = {};
                    return t.reduce(r ? function(t, n, o) {
                        e.index = o;
                        return t + r.call(e, n)
                    } : function(t, r) {
                        return t + r
                    }, 0)
                },
                max: function(t, e) {
                    return Math.max.apply(null, e ? r.map(t, e) : t)
                }
            };
            var e = function() {
                function t(t, r, e) {
                    return (t << 10) + (r << 5) + e
                }

                function e(t) {
                    var r = [],
                        e = !1;

                    function n() {
                        r.sort(t);
                        e = !0
                    }
                    return {
                        push: function(t) {
                            r.push(t);
                            e = !1
                        },
                        peek: function(t) {
                            e || n();
                            void 0 === t && (t = r.length - 1);
                            return r[t]
                        },
                        pop: function() {
                            e || n();
                            return r.pop()
                        },
                        size: function() {
                            return r.length
                        },
                        map: function(t) {
                            return r.map(t)
                        },
                        debug: function() {
                            e || n();
                            return r
                        }
                    }
                }

                function n(t, r, e, n, o, a, i) {
                    var u = this;
                    u.r1 = t;
                    u.r2 = r;
                    u.g1 = e;
                    u.g2 = n;
                    u.b1 = o;
                    u.b2 = a;
                    u.histo = i
                }
                n.prototype = {
                    volume: function(t) {
                        var r = this;
                        r._volume && !t || (r._volume = (r.r2 - r.r1 + 1) * (r.g2 - r.g1 + 1) * (r.b2 - r.b1 + 1));
                        return r._volume
                    },
                    count: function(r) {
                        var e = this,
                            n = e.histo;
                        if (!e._count_set || r) {
                            var o, a, i, u = 0;
                            for (o = e.r1; o <= e.r2; o++)
                                for (a = e.g1; a <= e.g2; a++)
                                    for (i = e.b1; i <= e.b2; i++) u += n[t(o, a, i)] || 0;
                            e._count = u;
                            e._count_set = !0
                        }
                        return e._count
                    },
                    copy: function() {
                        var t = this;
                        return new n(t.r1, t.r2, t.g1, t.g2, t.b1, t.b2, t.histo)
                    },
                    avg: function(r) {
                        var e = this,
                            n = e.histo;
                        if (!e._avg || r) {
                            var o, a, i, u, s = 0,
                                c = 0,
                                p = 0,
                                f = 0;
                            for (a = e.r1; a <= e.r2; a++)
                                for (i = e.g1; i <= e.g2; i++)
                                    for (u = e.b1; u <= e.b2; u++) {
                                        s += o = n[t(a, i, u)] || 0;
                                        c += o * (a + .5) * 8;
                                        p += o * (i + .5) * 8;
                                        f += o * (u + .5) * 8
                                    }
                            e._avg = s ? [~~(c / s), ~~(p / s), ~~(f / s)] : [~~(8 * (e.r1 + e.r2 + 1) / 2), ~~(8 * (e.g1 + e.g2 + 1) / 2), ~~(8 * (e.b1 + e.b2 + 1) / 2)]
                        }
                        return e._avg
                    },
                    contains: function(t) {
                        var r = this,
                            e = t[0] >> 3;
                        gval = t[1] >> 3;
                        bval = t[2] >> 3;
                        return e >= r.r1 && e <= r.r2 && gval >= r.g1 && gval <= r.g2 && bval >= r.b1 && bval <= r.b2
                    }
                };

                function o() {
                    this.vboxes = new e((function(t, e) {
                        return r.naturalOrder(t.vbox.count() * t.vbox.volume(), e.vbox.count() * e.vbox.volume())
                    }))
                }
                o.prototype = {
                    push: function(t) {
                        this.vboxes.push({
                            vbox: t,
                            color: t.avg()
                        })
                    },
                    palette: function() {
                        return this.vboxes.map((function(t) {
                            return t.color
                        }))
                    },
                    size: function() {
                        return this.vboxes.size()
                    },
                    map: function(t) {
                        for (var r = this.vboxes, e = 0; e < r.size(); e++)
                            if (r.peek(e).vbox.contains(t)) return r.peek(e).color;
                        return this.nearest(t)
                    },
                    nearest: function(t) {
                        for (var r, e, n, o = this.vboxes, a = 0; a < o.size(); a++)
                            if ((e = Math.sqrt(Math.pow(t[0] - o.peek(a).color[0], 2) + Math.pow(t[1] - o.peek(a).color[1], 2) + Math.pow(t[2] - o.peek(a).color[2], 2))) < r || void 0 === r) {
                                r = e;
                                n = o.peek(a).color
                            } return n
                    },
                    forcebw: function() {
                        var t = this.vboxes;
                        t.sort((function(t, e) {
                            return r.naturalOrder(r.sum(t.color), r.sum(e.color))
                        }));
                        var e = t[0].color;
                        e[0] < 5 && e[1] < 5 && e[2] < 5 && (t[0].color = [0, 0, 0]);
                        var n = t.length - 1,
                            o = t[n].color;
                        o[0] > 251 && o[1] > 251 && o[2] > 251 && (t[n].color = [255, 255, 255])
                    }
                };

                function a(e, n) {
                    if (n.count()) {
                        var o = n.r2 - n.r1 + 1,
                            a = n.g2 - n.g1 + 1,
                            i = n.b2 - n.b1 + 1,
                            u = r.max([o, a, i]);
                        if (1 == n.count()) return [n.copy()];
                        var s, c, p, f, l = 0,
                            h = [],
                            v = [];
                        if (u == o)
                            for (s = n.r1; s <= n.r2; s++) {
                                f = 0;
                                for (c = n.g1; c <= n.g2; c++)
                                    for (p = n.b1; p <= n.b2; p++) f += e[t(s, c, p)] || 0;
                                l += f;
                                h[s] = l
                            } else if (u == a)
                                for (s = n.g1; s <= n.g2; s++) {
                                    f = 0;
                                    for (c = n.r1; c <= n.r2; c++)
                                        for (p = n.b1; p <= n.b2; p++) f += e[t(c, s, p)] || 0;
                                    l += f;
                                    h[s] = l
                                } else
                                    for (s = n.b1; s <= n.b2; s++) {
                                        f = 0;
                                        for (c = n.r1; c <= n.r2; c++)
                                            for (p = n.g1; p <= n.g2; p++) f += e[t(c, p, s)] || 0;
                                        l += f;
                                        h[s] = l
                                    }
                        h.forEach((function(t, r) {
                            v[r] = l - t
                        }));
                        return _(u == o ? "r" : u == a ? "g" : "b")
                    }

                    function _(t) {
                        var r, e, o, a, i, u = t + "1",
                            c = t + "2",
                            p = 0;
                        for (s = n[u]; s <= n[c]; s++)
                            if (h[s] > l / 2) {
                                o = n.copy();
                                a = n.copy();
                                i = (r = s - n[u]) <= (e = n[c] - s) ? Math.min(n[c] - 1, ~~(s + e / 2)) : Math.max(n[u], ~~(s - 1 - r / 2));
                                for (; !h[i];) i++;
                                p = v[i];
                                for (; !p && h[i - 1];) p = v[--i];
                                o[c] = i;
                                a[u] = o[c] + 1;
                                return [o, a]
                            }
                    }
                }
                return {
                    quantize: function(i, u) {
                        if (!i.length || u < 2 || u > 256) return !1;
                        var s = function(r) {
                            var e, n, o, a, i = new Array(32768);
                            r.forEach((function(r) {
                                n = r[0] >> 3;
                                o = r[1] >> 3;
                                a = r[2] >> 3;
                                e = t(n, o, a);
                                i[e] = (i[e] || 0) + 1
                            }));
                            return i
                        }(i);
                        s.forEach((function() {
                            0
                        }));
                        var c = function(t, r) {
                                var e, o, a, i = 1e6,
                                    u = 0,
                                    s = 1e6,
                                    c = 0,
                                    p = 1e6,
                                    f = 0;
                                t.forEach((function(t) {
                                    e = t[0] >> 3;
                                    o = t[1] >> 3;
                                    a = t[2] >> 3;
                                    e < i ? i = e : e > u && (u = e);
                                    o < s ? s = o : o > c && (c = o);
                                    a < p ? p = a : a > f && (f = a)
                                }));
                                return new n(i, u, s, c, p, f, r)
                            }(i, s),
                            p = new e((function(t, e) {
                                return r.naturalOrder(t.count(), e.count())
                            }));
                        p.push(c);

                        function f(t, r) {
                            for (var e, n = 1, o = 0; o < 1e3;)
                                if ((e = t.pop()).count()) {
                                    var i = a(s, e),
                                        u = i[0],
                                        c = i[1];
                                    if (!u) return;
                                    t.push(u);
                                    if (c) {
                                        t.push(c);
                                        n++
                                    }
                                    if (n >= r) return;
                                    if (o++ > 1e3) return
                                } else {
                                    t.push(e);
                                    o++
                                }
                        }
                        f(p, .75 * u);
                        for (var l = new e((function(t, e) {
                                return r.naturalOrder(t.count() * t.volume(), e.count() * e.volume())
                            })); p.size();) l.push(p.pop());
                        f(l, u - l.size());
                        for (var h = new o; l.size();) h.push(l.pop());
                        return h
                    }
                }
            }();
            t.exports = e.quantize
        },
        180735: (t, r, e) => {
            "use strict";
            e.d(r, {
                h: () => n
            });
            var n;
            ! function(t) {
                t[t.USER = 100] = "USER";
                t[t.STREAM = 18] = "STREAM"
            }(n || (n = {}))
        },
        284157: (t, r, e) => {
            "use strict";
            e.d(r, {
                n: () => n
            });
            var n;
            ! function(t) {
                t.CONNECT_VOICE = "connect_voice"
            }(n || (n = {}));
            new Set(["connect_voice"])
        },
        349139: (t, r, e) => {
            "use strict";
            e.d(r, {
                o: () => n
            });
            var n;
            ! function(t) {
                t.TRANSFER_EXISTING_CALL = "TRANSFER_EXISTING_CALL";
                t.CREATE_NEW_CALL = "CREATE_NEW_CALL"
            }(n || (n = {}));
            new Set(["CREATE_NEW_CALL", "TRANSFER_EXISTING_CALL"])
        },
        248634: (t, r, e) => {
            "use strict";
            e.d(r, {
                z: () => n
            });
            var n;
            ! function(t) {
                t.MATCH_ALL = "match_all";
                t.MATCH_SOME = "match_some"
            }(n || (n = {}));
            new Set(["match_all", "match_some"])
        },
        482507: (t, r, e) => {
            "use strict";
            e.d(r, {
                J: () => n
            });

            function n(t) {
                var r = document.body;
                if (null == r) throw new Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                var e = document.createRange(),
                    n = window.getSelection(),
                    o = document.createElement("textarea");
                o.value = t;
                o.contentEditable = "true";
                o.style.visibility = "none";
                r.appendChild(o);
                e.selectNodeContents(o);
                null == n || n.removeAllRanges();
                null == n || n.addRange(e);
                o.focus();
                o.setSelectionRange(0, t.length);
                var a = document.execCommand("copy");
                r.removeChild(o);
                return a
            }
        },
        989824: (t, r, e) => {
            "use strict";
            e.d(r, {
                Z: () => a
            });
            var n = e(667294),
                o = {};

            function a(t) {
                var r = (0, n.useRef)(o);
                r.current === o && (r.current = t());
                return r.current
            }
        }
    }
]);