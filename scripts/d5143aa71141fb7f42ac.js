(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [57678, 58621], {
        737264: n => {
            "use strict";
            n.exports.Q = function(n) {
                var r, t = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(n);
                if (!t) return null;
                t.shift();
                var o = null,
                    e = [];
                if (t[2]) {
                    o = (r = t[2].split("-")).shift();
                    e = r
                }
                var u = [];
                t[5] && (u = t[5].split("-")).shift();
                var i = [];
                if (t[6]) {
                    (r = t[6].split("-")).shift();
                    for (var a, c = []; r.length;) {
                        var f = r.shift();
                        if (1 === f.length)
                            if (a) {
                                i.push({
                                    singleton: a,
                                    extension: c
                                });
                                a = f;
                                c = []
                            } else a = f;
                        else c.push(f)
                    }
                    i.push({
                        singleton: a,
                        extension: c
                    })
                }
                var s = [];
                if (t[7]) {
                    (s = t[7].split("-")).shift();
                    s.shift()
                }
                var l = [];
                t[8] && (l = t[8].split("-")).shift();
                return {
                    langtag: {
                        language: {
                            language: o,
                            extlang: e
                        },
                        script: t[3] || null,
                        region: t[4] || null,
                        variant: u,
                        extension: i,
                        privateuse: s
                    },
                    privateuse: l,
                    grandfathered: {
                        irregular: t[0] || null,
                        regular: t[1] || null
                    }
                }
            }
        },
        16243: n => {
            if (!r) var r = {
                map: function(n, r) {
                    var t = {};
                    return r ? n.map((function(n, o) {
                        t.index = o;
                        return r.call(t, n)
                    })) : n.slice()
                },
                naturalOrder: function(n, r) {
                    return n < r ? -1 : n > r ? 1 : 0
                },
                sum: function(n, r) {
                    var t = {};
                    return n.reduce(r ? function(n, o, e) {
                        t.index = e;
                        return n + r.call(t, o)
                    } : function(n, r) {
                        return n + r
                    }, 0)
                },
                max: function(n, t) {
                    return Math.max.apply(null, t ? r.map(n, t) : n)
                }
            };
            var t = function() {
                function n(n, r, t) {
                    return (n << 10) + (r << 5) + t
                }

                function t(n) {
                    var r = [],
                        t = !1;

                    function o() {
                        r.sort(n);
                        t = !0
                    }
                    return {
                        push: function(n) {
                            r.push(n);
                            t = !1
                        },
                        peek: function(n) {
                            t || o();
                            void 0 === n && (n = r.length - 1);
                            return r[n]
                        },
                        pop: function() {
                            t || o();
                            return r.pop()
                        },
                        size: function() {
                            return r.length
                        },
                        map: function(n) {
                            return r.map(n)
                        },
                        debug: function() {
                            t || o();
                            return r
                        }
                    }
                }

                function o(n, r, t, o, e, u, i) {
                    var a = this;
                    a.r1 = n;
                    a.r2 = r;
                    a.g1 = t;
                    a.g2 = o;
                    a.b1 = e;
                    a.b2 = u;
                    a.histo = i
                }
                o.prototype = {
                    volume: function(n) {
                        var r = this;
                        r._volume && !n || (r._volume = (r.r2 - r.r1 + 1) * (r.g2 - r.g1 + 1) * (r.b2 - r.b1 + 1));
                        return r._volume
                    },
                    count: function(r) {
                        var t = this,
                            o = t.histo;
                        if (!t._count_set || r) {
                            var e, u, i, a = 0;
                            for (e = t.r1; e <= t.r2; e++)
                                for (u = t.g1; u <= t.g2; u++)
                                    for (i = t.b1; i <= t.b2; i++) a += o[n(e, u, i)] || 0;
                            t._count = a;
                            t._count_set = !0
                        }
                        return t._count
                    },
                    copy: function() {
                        var n = this;
                        return new o(n.r1, n.r2, n.g1, n.g2, n.b1, n.b2, n.histo)
                    },
                    avg: function(r) {
                        var t = this,
                            o = t.histo;
                        if (!t._avg || r) {
                            var e, u, i, a, c = 0,
                                f = 0,
                                s = 0,
                                l = 0;
                            for (u = t.r1; u <= t.r2; u++)
                                for (i = t.g1; i <= t.g2; i++)
                                    for (a = t.b1; a <= t.b2; a++) {
                                        c += e = o[n(u, i, a)] || 0;
                                        f += e * (u + .5) * 8;
                                        s += e * (i + .5) * 8;
                                        l += e * (a + .5) * 8
                                    }
                            t._avg = c ? [~~(f / c), ~~(s / c), ~~(l / c)] : [~~(8 * (t.r1 + t.r2 + 1) / 2), ~~(8 * (t.g1 + t.g2 + 1) / 2), ~~(8 * (t.b1 + t.b2 + 1) / 2)]
                        }
                        return t._avg
                    },
                    contains: function(n) {
                        var r = this,
                            t = n[0] >> 3;
                        gval = n[1] >> 3;
                        bval = n[2] >> 3;
                        return t >= r.r1 && t <= r.r2 && gval >= r.g1 && gval <= r.g2 && bval >= r.b1 && bval <= r.b2
                    }
                };

                function e() {
                    this.vboxes = new t((function(n, t) {
                        return r.naturalOrder(n.vbox.count() * n.vbox.volume(), t.vbox.count() * t.vbox.volume())
                    }))
                }
                e.prototype = {
                    push: function(n) {
                        this.vboxes.push({
                            vbox: n,
                            color: n.avg()
                        })
                    },
                    palette: function() {
                        return this.vboxes.map((function(n) {
                            return n.color
                        }))
                    },
                    size: function() {
                        return this.vboxes.size()
                    },
                    map: function(n) {
                        for (var r = this.vboxes, t = 0; t < r.size(); t++)
                            if (r.peek(t).vbox.contains(n)) return r.peek(t).color;
                        return this.nearest(n)
                    },
                    nearest: function(n) {
                        for (var r, t, o, e = this.vboxes, u = 0; u < e.size(); u++)
                            if ((t = Math.sqrt(Math.pow(n[0] - e.peek(u).color[0], 2) + Math.pow(n[1] - e.peek(u).color[1], 2) + Math.pow(n[2] - e.peek(u).color[2], 2))) < r || void 0 === r) {
                                r = t;
                                o = e.peek(u).color
                            } return o
                    },
                    forcebw: function() {
                        var n = this.vboxes;
                        n.sort((function(n, t) {
                            return r.naturalOrder(r.sum(n.color), r.sum(t.color))
                        }));
                        var t = n[0].color;
                        t[0] < 5 && t[1] < 5 && t[2] < 5 && (n[0].color = [0, 0, 0]);
                        var o = n.length - 1,
                            e = n[o].color;
                        e[0] > 251 && e[1] > 251 && e[2] > 251 && (n[o].color = [255, 255, 255])
                    }
                };

                function u(t, o) {
                    if (o.count()) {
                        var e = o.r2 - o.r1 + 1,
                            u = o.g2 - o.g1 + 1,
                            i = o.b2 - o.b1 + 1,
                            a = r.max([e, u, i]);
                        if (1 == o.count()) return [o.copy()];
                        var c, f, s, l, v = 0,
                            h = [],
                            p = [];
                        if (a == e)
                            for (c = o.r1; c <= o.r2; c++) {
                                l = 0;
                                for (f = o.g1; f <= o.g2; f++)
                                    for (s = o.b1; s <= o.b2; s++) l += t[n(c, f, s)] || 0;
                                v += l;
                                h[c] = v
                            } else if (a == u)
                                for (c = o.g1; c <= o.g2; c++) {
                                    l = 0;
                                    for (f = o.r1; f <= o.r2; f++)
                                        for (s = o.b1; s <= o.b2; s++) l += t[n(f, c, s)] || 0;
                                    v += l;
                                    h[c] = v
                                } else
                                    for (c = o.b1; c <= o.b2; c++) {
                                        l = 0;
                                        for (f = o.r1; f <= o.r2; f++)
                                            for (s = o.g1; s <= o.g2; s++) l += t[n(f, s, c)] || 0;
                                        v += l;
                                        h[c] = v
                                    }
                        h.forEach((function(n, r) {
                            p[r] = v - n
                        }));
                        return g(a == e ? "r" : a == u ? "g" : "b")
                    }

                    function g(n) {
                        var r, t, e, u, i, a = n + "1",
                            f = n + "2",
                            s = 0;
                        for (c = o[a]; c <= o[f]; c++)
                            if (h[c] > v / 2) {
                                e = o.copy();
                                u = o.copy();
                                i = (r = c - o[a]) <= (t = o[f] - c) ? Math.min(o[f] - 1, ~~(c + t / 2)) : Math.max(o[a], ~~(c - 1 - r / 2));
                                for (; !h[i];) i++;
                                s = p[i];
                                for (; !s && h[i - 1];) s = p[--i];
                                e[f] = i;
                                u[a] = e[f] + 1;
                                return [e, u]
                            }
                    }
                }
                return {
                    quantize: function(i, a) {
                        if (!i.length || a < 2 || a > 256) return !1;
                        var c = function(r) {
                            var t, o, e, u, i = new Array(32768);
                            r.forEach((function(r) {
                                o = r[0] >> 3;
                                e = r[1] >> 3;
                                u = r[2] >> 3;
                                t = n(o, e, u);
                                i[t] = (i[t] || 0) + 1
                            }));
                            return i
                        }(i);
                        c.forEach((function() {
                            0
                        }));
                        var f = function(n, r) {
                                var t, e, u, i = 1e6,
                                    a = 0,
                                    c = 1e6,
                                    f = 0,
                                    s = 1e6,
                                    l = 0;
                                n.forEach((function(n) {
                                    t = n[0] >> 3;
                                    e = n[1] >> 3;
                                    u = n[2] >> 3;
                                    t < i ? i = t : t > a && (a = t);
                                    e < c ? c = e : e > f && (f = e);
                                    u < s ? s = u : u > l && (l = u)
                                }));
                                return new o(i, a, c, f, s, l, r)
                            }(i, c),
                            s = new t((function(n, t) {
                                return r.naturalOrder(n.count(), t.count())
                            }));
                        s.push(f);

                        function l(n, r) {
                            for (var t, o = 1, e = 0; e < 1e3;)
                                if ((t = n.pop()).count()) {
                                    var i = u(c, t),
                                        a = i[0],
                                        f = i[1];
                                    if (!a) return;
                                    n.push(a);
                                    if (f) {
                                        n.push(f);
                                        o++
                                    }
                                    if (o >= r) return;
                                    if (e++ > 1e3) return
                                } else {
                                    n.push(t);
                                    e++
                                }
                        }
                        l(s, .75 * a);
                        for (var v = new t((function(n, t) {
                                return r.naturalOrder(n.count() * n.volume(), t.count() * t.volume())
                            })); s.size();) v.push(s.pop());
                        l(v, a - v.size());
                        for (var h = new e; v.size();) h.push(v.pop());
                        return h
                    }
                }
            }();
            n.exports = t.quantize
        },
        180735: (n, r, t) => {
            "use strict";
            t.d(r, {
                h: () => o
            });
            var o;
            ! function(n) {
                n[n.USER = 100] = "USER";
                n[n.STREAM = 18] = "STREAM"
            }(o || (o = {}))
        },
        284157: (n, r, t) => {
            "use strict";
            t.d(r, {
                n: () => o
            });
            var o;
            ! function(n) {
                n.CONNECT_VOICE = "connect_voice"
            }(o || (o = {}));
            new Set(["connect_voice"])
        },
        349139: (n, r, t) => {
            "use strict";
            t.d(r, {
                o: () => o
            });
            var o;
            ! function(n) {
                n.TRANSFER_EXISTING_CALL = "TRANSFER_EXISTING_CALL";
                n.CREATE_NEW_CALL = "CREATE_NEW_CALL"
            }(o || (o = {}));
            new Set(["CREATE_NEW_CALL", "TRANSFER_EXISTING_CALL"])
        },
        248634: (n, r, t) => {
            "use strict";
            t.d(r, {
                z: () => o
            });
            var o;
            ! function(n) {
                n.MATCH_ALL = "match_all";
                n.MATCH_SOME = "match_some"
            }(o || (o = {}));
            new Set(["match_all", "match_some"])
        }
    }
]);