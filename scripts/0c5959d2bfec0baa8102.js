(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [53935], {
        824390: r => {
            "use strict";
            r.exports = function(r, t) {
                var n = t.length,
                    o = r.length;
                if (o > n) return !1;
                if (o === n) return r === t;
                r: for (var e = 0, u = 0; e < o; e++) {
                    for (var i = r.charCodeAt(e); u < n;)
                        if (t.charCodeAt(u++) === i) continue r;
                    return !1
                }
                return !0
            }
        },
        753074: r => {
            "use strict";
            var t = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                n = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                o = "function" == typeof Object.getOwnPropertySymbols;
            r.exports = function(r, e, u) {
                if ("string" != typeof e) {
                    var i = Object.getOwnPropertyNames(e);
                    o && (i = i.concat(Object.getOwnPropertySymbols(e)));
                    for (var c = 0; c < i.length; ++c)
                        if (!(t[i[c]] || n[i[c]] || u && u[i[c]])) try {
                            r[i[c]] = e[i[c]]
                        } catch (r) {}
                }
                return r
            }
        },
        16243: r => {
            if (!t) var t = {
                map: function(r, t) {
                    var n = {};
                    return t ? r.map((function(r, o) {
                        n.index = o;
                        return t.call(n, r)
                    })) : r.slice()
                },
                naturalOrder: function(r, t) {
                    return r < t ? -1 : r > t ? 1 : 0
                },
                sum: function(r, t) {
                    var n = {};
                    return r.reduce(t ? function(r, o, e) {
                        n.index = e;
                        return r + t.call(n, o)
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

                    function o() {
                        t.sort(r);
                        n = !0
                    }
                    return {
                        push: function(r) {
                            t.push(r);
                            n = !1
                        },
                        peek: function(r) {
                            n || o();
                            void 0 === r && (r = t.length - 1);
                            return t[r]
                        },
                        pop: function() {
                            n || o();
                            return t.pop()
                        },
                        size: function() {
                            return t.length
                        },
                        map: function(r) {
                            return t.map(r)
                        },
                        debug: function() {
                            n || o();
                            return t
                        }
                    }
                }

                function o(r, t, n, o, e, u, i) {
                    var c = this;
                    c.r1 = r;
                    c.r2 = t;
                    c.g1 = n;
                    c.g2 = o;
                    c.b1 = e;
                    c.b2 = u;
                    c.histo = i
                }
                o.prototype = {
                    volume: function(r) {
                        var t = this;
                        t._volume && !r || (t._volume = (t.r2 - t.r1 + 1) * (t.g2 - t.g1 + 1) * (t.b2 - t.b1 + 1));
                        return t._volume
                    },
                    count: function(t) {
                        var n = this,
                            o = n.histo;
                        if (!n._count_set || t) {
                            var e, u, i, c = 0;
                            for (e = n.r1; e <= n.r2; e++)
                                for (u = n.g1; u <= n.g2; u++)
                                    for (i = n.b1; i <= n.b2; i++) c += o[r(e, u, i)] || 0;
                            n._count = c;
                            n._count_set = !0
                        }
                        return n._count
                    },
                    copy: function() {
                        var r = this;
                        return new o(r.r1, r.r2, r.g1, r.g2, r.b1, r.b2, r.histo)
                    },
                    avg: function(t) {
                        var n = this,
                            o = n.histo;
                        if (!n._avg || t) {
                            var e, u, i, c, a = 0,
                                f = 0,
                                s = 0,
                                v = 0;
                            for (u = n.r1; u <= n.r2; u++)
                                for (i = n.g1; i <= n.g2; i++)
                                    for (c = n.b1; c <= n.b2; c++) {
                                        a += e = o[r(u, i, c)] || 0;
                                        f += e * (u + .5) * 8;
                                        s += e * (i + .5) * 8;
                                        v += e * (c + .5) * 8
                                    }
                            n._avg = a ? [~~(f / a), ~~(s / a), ~~(v / a)] : [~~(8 * (n.r1 + n.r2 + 1) / 2), ~~(8 * (n.g1 + n.g2 + 1) / 2), ~~(8 * (n.b1 + n.b2 + 1) / 2)]
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

                function e() {
                    this.vboxes = new n((function(r, n) {
                        return t.naturalOrder(r.vbox.count() * r.vbox.volume(), n.vbox.count() * n.vbox.volume())
                    }))
                }
                e.prototype = {
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
                        for (var t, n, o, e = this.vboxes, u = 0; u < e.size(); u++)
                            if ((n = Math.sqrt(Math.pow(r[0] - e.peek(u).color[0], 2) + Math.pow(r[1] - e.peek(u).color[1], 2) + Math.pow(r[2] - e.peek(u).color[2], 2))) < t || void 0 === t) {
                                t = n;
                                o = e.peek(u).color
                            } return o
                    },
                    forcebw: function() {
                        var r = this.vboxes;
                        r.sort((function(r, n) {
                            return t.naturalOrder(t.sum(r.color), t.sum(n.color))
                        }));
                        var n = r[0].color;
                        n[0] < 5 && n[1] < 5 && n[2] < 5 && (r[0].color = [0, 0, 0]);
                        var o = r.length - 1,
                            e = r[o].color;
                        e[0] > 251 && e[1] > 251 && e[2] > 251 && (r[o].color = [255, 255, 255])
                    }
                };

                function u(n, o) {
                    if (o.count()) {
                        var e = o.r2 - o.r1 + 1,
                            u = o.g2 - o.g1 + 1,
                            i = o.b2 - o.b1 + 1,
                            c = t.max([e, u, i]);
                        if (1 == o.count()) return [o.copy()];
                        var a, f, s, v, p = 0,
                            l = [],
                            h = [];
                        if (c == e)
                            for (a = o.r1; a <= o.r2; a++) {
                                v = 0;
                                for (f = o.g1; f <= o.g2; f++)
                                    for (s = o.b1; s <= o.b2; s++) v += n[r(a, f, s)] || 0;
                                p += v;
                                l[a] = p
                            } else if (c == u)
                                for (a = o.g1; a <= o.g2; a++) {
                                    v = 0;
                                    for (f = o.r1; f <= o.r2; f++)
                                        for (s = o.b1; s <= o.b2; s++) v += n[r(f, a, s)] || 0;
                                    p += v;
                                    l[a] = p
                                } else
                                    for (a = o.b1; a <= o.b2; a++) {
                                        v = 0;
                                        for (f = o.r1; f <= o.r2; f++)
                                            for (s = o.g1; s <= o.g2; s++) v += n[r(f, s, a)] || 0;
                                        p += v;
                                        l[a] = p
                                    }
                        l.forEach((function(r, t) {
                            h[t] = p - r
                        }));
                        return b(c == e ? "r" : c == u ? "g" : "b")
                    }

                    function b(r) {
                        var t, n, e, u, i, c = r + "1",
                            f = r + "2",
                            s = 0;
                        for (a = o[c]; a <= o[f]; a++)
                            if (l[a] > p / 2) {
                                e = o.copy();
                                u = o.copy();
                                i = (t = a - o[c]) <= (n = o[f] - a) ? Math.min(o[f] - 1, ~~(a + n / 2)) : Math.max(o[c], ~~(a - 1 - t / 2));
                                for (; !l[i];) i++;
                                s = h[i];
                                for (; !s && l[i - 1];) s = h[--i];
                                e[f] = i;
                                u[c] = e[f] + 1;
                                return [e, u]
                            }
                    }
                }
                return {
                    quantize: function(i, c) {
                        if (!i.length || c < 2 || c > 256) return !1;
                        var a = function(t) {
                            var n, o, e, u, i = new Array(32768);
                            t.forEach((function(t) {
                                o = t[0] >> 3;
                                e = t[1] >> 3;
                                u = t[2] >> 3;
                                n = r(o, e, u);
                                i[n] = (i[n] || 0) + 1
                            }));
                            return i
                        }(i);
                        a.forEach((function() {
                            0
                        }));
                        var f = function(r, t) {
                                var n, e, u, i = 1e6,
                                    c = 0,
                                    a = 1e6,
                                    f = 0,
                                    s = 1e6,
                                    v = 0;
                                r.forEach((function(r) {
                                    n = r[0] >> 3;
                                    e = r[1] >> 3;
                                    u = r[2] >> 3;
                                    n < i ? i = n : n > c && (c = n);
                                    e < a ? a = e : e > f && (f = e);
                                    u < s ? s = u : u > v && (v = u)
                                }));
                                return new o(i, c, a, f, s, v, t)
                            }(i, a),
                            s = new n((function(r, n) {
                                return t.naturalOrder(r.count(), n.count())
                            }));
                        s.push(f);

                        function v(r, t) {
                            for (var n, o = 1, e = 0; e < 1e3;)
                                if ((n = r.pop()).count()) {
                                    var i = u(a, n),
                                        c = i[0],
                                        f = i[1];
                                    if (!c) return;
                                    r.push(c);
                                    if (f) {
                                        r.push(f);
                                        o++
                                    }
                                    if (o >= t) return;
                                    if (e++ > 1e3) return
                                } else {
                                    r.push(n);
                                    e++
                                }
                        }
                        v(s, .75 * c);
                        for (var p = new n((function(r, n) {
                                return t.naturalOrder(r.count() * r.volume(), n.count() * n.volume())
                            })); s.size();) p.push(s.pop());
                        v(p, c - p.size());
                        for (var l = new e; p.size();) l.push(p.pop());
                        return l
                    }
                }
            }();
            r.exports = n.quantize
        },
        180735: (r, t, n) => {
            "use strict";
            n.d(t, {
                h: () => o
            });
            var o;
            ! function(r) {
                r[r.USER = 100] = "USER";
                r[r.STREAM = 18] = "STREAM"
            }(o || (o = {}))
        },
        284157: (r, t, n) => {
            "use strict";
            n.d(t, {
                n: () => o
            });
            var o;
            ! function(r) {
                r.CONNECT_VOICE = "connect_voice"
            }(o || (o = {}));
            new Set(["connect_voice"])
        },
        349139: (r, t, n) => {
            "use strict";
            n.d(t, {
                o: () => o
            });
            var o;
            ! function(r) {
                r.TRANSFER_EXISTING_CALL = "TRANSFER_EXISTING_CALL";
                r.CREATE_NEW_CALL = "CREATE_NEW_CALL"
            }(o || (o = {}));
            new Set(["CREATE_NEW_CALL", "TRANSFER_EXISTING_CALL"])
        },
        989824: (r, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var o = n(667294),
                e = {};

            function u(r) {
                var t = (0, o.useRef)(e);
                t.current === e && (t.current = r());
                return t.current
            }
        }
    }
]);
//# sourceMappingURL=0c5959d2bfec0baa8102.js.map