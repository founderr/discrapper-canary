if (!n)
    var n = {
        map: function (e, n) {
            var r = {};
            return n
                ? e.map(function (e, i) {
                      return (r.index = i), n.call(r, e);
                  })
                : e.slice();
        },
        naturalOrder: function (e, n) {
            return e < n ? -1 : e > n ? 1 : 0;
        },
        sum: function (e, n) {
            var r = {};
            return e.reduce(
                n
                    ? function (e, i, a) {
                          return (r.index = a), e + n.call(r, i);
                      }
                    : function (e, n) {
                          return e + n;
                      },
                0
            );
        },
        max: function (e, r) {
            return Math.max.apply(null, r ? n.map(e, r) : e);
        }
    };
var r = (function () {
    var e = 5,
        r = 3,
        i = 1000,
        a = 0.75;
    function s(n, r, i) {
        return (n << (2 * e)) + (r << e) + i;
    }
    function o(e) {
        var n = [],
            r = !1;
        function i() {
            n.sort(e), (r = !0);
        }
        return {
            push: function (e) {
                n.push(e), (r = !1);
            },
            peek: function (e) {
                return !r && i(), void 0 === e && (e = n.length - 1), n[e];
            },
            pop: function () {
                return !r && i(), n.pop();
            },
            size: function () {
                return n.length;
            },
            map: function (e) {
                return n.map(e);
            },
            debug: function () {
                return !r && i(), n;
            }
        };
    }
    function l(e, n, r, i, a, s, o) {
        var l = this;
        (l.r1 = e), (l.r2 = n), (l.g1 = r), (l.g2 = i), (l.b1 = a), (l.b2 = s), (l.histo = o);
    }
    function u() {
        this.vboxes = new o(function (e, r) {
            return n.naturalOrder(e.vbox.count() * e.vbox.volume(), r.vbox.count() * r.vbox.volume());
        });
    }
    function c(n) {
        var i,
            a,
            o,
            l = Array(1 << (3 * e));
        return (
            n.forEach(function (e) {
                (a = e[0] >> r), (o = e[1] >> r), (l[(i = s(a, o, e[2] >> r))] = (l[i] || 0) + 1);
            }),
            l
        );
    }
    function d(e, n) {
        var i,
            a,
            s,
            o = 1000000,
            u = 0,
            c = 1000000,
            d = 0,
            f = 1000000,
            _ = 0;
        return (
            e.forEach(function (e) {
                (i = e[0] >> r), (a = e[1] >> r), (s = e[2] >> r), i < o ? (o = i) : i > u && (u = i), a < c ? (c = a) : a > d && (d = a), s < f ? (f = s) : s > _ && (_ = s);
            }),
            new l(o, u, c, d, f, _, n)
        );
    }
    function f(e, r) {
        if (r.count()) {
            var i = r.r2 - r.r1 + 1,
                a = r.g2 - r.g1 + 1,
                o = r.b2 - r.b1 + 1,
                l = n.max([i, a, o]);
            if (1 == r.count()) return [r.copy()];
            var u,
                c,
                d,
                f,
                _,
                h = 0,
                p = [],
                m = [];
            if (l == i)
                for (u = r.r1; u <= r.r2; u++) {
                    for (f = 0, c = r.g1; c <= r.g2; c++) for (d = r.b1; d <= r.b2; d++) f += e[(_ = s(u, c, d))] || 0;
                    (h += f), (p[u] = h);
                }
            else if (l == a)
                for (u = r.g1; u <= r.g2; u++) {
                    for (f = 0, c = r.r1; c <= r.r2; c++) for (d = r.b1; d <= r.b2; d++) f += e[(_ = s(c, u, d))] || 0;
                    (h += f), (p[u] = h);
                }
            else
                for (u = r.b1; u <= r.b2; u++) {
                    for (f = 0, c = r.r1; c <= r.r2; c++) for (d = r.g1; d <= r.g2; d++) f += e[(_ = s(c, d, u))] || 0;
                    (h += f), (p[u] = h);
                }
            return (
                p.forEach(function (e, n) {
                    m[n] = h - e;
                }),
                g(l == i ? 'r' : l == a ? 'g' : 'b')
            );
        }
        function g(e) {
            var n,
                i,
                a,
                s,
                o,
                l = e + '1',
                c = e + '2',
                d = 0;
            for (u = r[l]; u <= r[c]; u++)
                if (p[u] > h / 2) {
                    for (a = r.copy(), s = r.copy(), n = u - r[l], o = n <= (i = r[c] - u) ? Math.min(r[c] - 1, ~~(u + i / 2)) : Math.max(r[l], ~~(u - 1 - n / 2)); !p[o]; ) o++;
                    for (d = m[o]; !d && p[o - 1]; ) d = m[--o];
                    return (a[c] = o), (s[l] = a[c] + 1), [a, s];
                }
        }
    }
    return (
        (l.prototype = {
            volume: function (e) {
                var n = this;
                return (!n._volume || e) && (n._volume = (n.r2 - n.r1 + 1) * (n.g2 - n.g1 + 1) * (n.b2 - n.b1 + 1)), n._volume;
            },
            count: function (e) {
                var n = this,
                    r = n.histo;
                if (!n._count_set || e) {
                    var i,
                        a,
                        o,
                        l = 0;
                    for (i = n.r1; i <= n.r2; i++) for (a = n.g1; a <= n.g2; a++) for (o = n.b1; o <= n.b2; o++) l += r[s(i, a, o)] || 0;
                    (n._count = l), (n._count_set = !0);
                }
                return n._count;
            },
            copy: function () {
                var e = this;
                return new l(e.r1, e.r2, e.g1, e.g2, e.b1, e.b2, e.histo);
            },
            avg: function (n) {
                var r = this,
                    i = r.histo;
                if (!r._avg || n) {
                    var a,
                        o,
                        l,
                        u,
                        c = 0,
                        d = 1 << (8 - e),
                        f = 0,
                        _ = 0,
                        h = 0;
                    for (o = r.r1; o <= r.r2; o++) for (l = r.g1; l <= r.g2; l++) for (u = r.b1; u <= r.b2; u++) (c += a = i[s(o, l, u)] || 0), (f += a * (o + 0.5) * d), (_ += a * (l + 0.5) * d), (h += a * (u + 0.5) * d);
                    c ? (r._avg = [~~(f / c), ~~(_ / c), ~~(h / c)]) : (r._avg = [~~((d * (r.r1 + r.r2 + 1)) / 2), ~~((d * (r.g1 + r.g2 + 1)) / 2), ~~((d * (r.b1 + r.b2 + 1)) / 2)]);
                }
                return r._avg;
            },
            contains: function (e) {
                var n = this,
                    i = e[0] >> r;
                return (gval = e[1] >> r), (bval = e[2] >> r), i >= n.r1 && i <= n.r2 && gval >= n.g1 && gval <= n.g2 && bval >= n.b1 && bval <= n.b2;
            }
        }),
        (u.prototype = {
            push: function (e) {
                this.vboxes.push({
                    vbox: e,
                    color: e.avg()
                });
            },
            palette: function () {
                return this.vboxes.map(function (e) {
                    return e.color;
                });
            },
            size: function () {
                return this.vboxes.size();
            },
            map: function (e) {
                for (var n = this.vboxes, r = 0; r < n.size(); r++) if (n.peek(r).vbox.contains(e)) return n.peek(r).color;
                return this.nearest(e);
            },
            nearest: function (e) {
                for (var n, r, i, a = this.vboxes, s = 0; s < a.size(); s++) ((r = Math.sqrt(Math.pow(e[0] - a.peek(s).color[0], 2) + Math.pow(e[1] - a.peek(s).color[1], 2) + Math.pow(e[2] - a.peek(s).color[2], 2))) < n || void 0 === n) && ((n = r), (i = a.peek(s).color));
                return i;
            },
            forcebw: function () {
                var e = this.vboxes;
                e.sort(function (e, r) {
                    return n.naturalOrder(n.sum(e.color), n.sum(r.color));
                });
                var r = e[0].color;
                r[0] < 5 && r[1] < 5 && r[2] < 5 && (e[0].color = [0, 0, 0]);
                var i = e.length - 1,
                    a = e[i].color;
                a[0] > 251 && a[1] > 251 && a[2] > 251 && (e[i].color = [255, 255, 255]);
            }
        }),
        {
            quantize: function e(e, r) {
                if (!e.length || r < 2 || r > 256) return !1;
                var s = c(e),
                    l = 0;
                s.forEach(function () {
                    l++;
                });
                var _ = d(e, s),
                    h = new o(function (e, r) {
                        return n.naturalOrder(e.count(), r.count());
                    });
                function p(e, n) {
                    for (var r, a = 1, o = 0; o < i; ) {
                        if (!(r = e.pop()).count()) {
                            e.push(r), o++;
                            continue;
                        }
                        var l = f(s, r),
                            u = l[0],
                            c = l[1];
                        if (!u) return;
                        if ((e.push(u), c && (e.push(c), a++), a >= n || o++ > i)) return;
                    }
                }
                h.push(_), p(h, a * r);
                for (
                    var m = new o(function (e, r) {
                        return n.naturalOrder(e.count() * e.volume(), r.count() * r.volume());
                    });
                    h.size();

                )
                    m.push(h.pop());
                p(m, r - m.size());
                for (var g = new u(); m.size(); ) g.push(m.pop());
                return g;
            }
        }
    );
})();
e.exports = r.quantize;
