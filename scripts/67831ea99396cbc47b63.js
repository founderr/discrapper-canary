(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["92160"], {
        78349: function(t, n, r) {
            "use strict";
            r("424973"), t.exports.parse = function(t) {
                var n = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!n) return null;
                n.shift();
                var r = null,
                    u = [];
                n[2] && (r = (o = n[2].split("-")).shift(), u = o);
                var i = [];
                n[5] && (i = n[5].split("-")).shift();
                var e = [];
                if (n[6]) {
                    (o = n[6].split("-")).shift();
                    for (var o, s, a = []; o.length;) {
                        var c = o.shift();
                        1 === c.length ? s ? (e.push({
                            singleton: s,
                            extension: a
                        }), s = c, a = []) : s = c : a.push(c)
                    }
                    e.push({
                        singleton: s,
                        extension: a
                    })
                }
                var f = [];
                n[7] && ((f = n[7].split("-")).shift(), f.shift());
                var h = [];
                return n[8] && (h = n[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: r,
                            extlang: u
                        },
                        script: n[3] || null,
                        region: n[4] || null,
                        variant: i,
                        extension: e,
                        privateuse: f
                    },
                    privateuse: h,
                    grandfathered: {
                        irregular: n[0] || null,
                        regular: n[1] || null
                    }
                }
            }
        },
        437083: function(t, n, r) {
            var u = r("561449"),
                i = r("877297");
            t.exports = function(t) {
                return i(u(t))
            }
        },
        329252: function(t, n, r) {
            var u = r("877297"),
                i = r("164099");
            t.exports = function(t) {
                return u(i(t))
            }
        },
        957478: function(t, n, r) {
            var u = r("626785");
            t.exports = function(t, n) {
                return u(n, function(n) {
                    return t[n]
                })
            }
        },
        561449: function(t, n, r) {
            t.exports = function(t, n) {
                var r = -1,
                    u = t.length;
                for (n || (n = Array(u)); ++r < u;) n[r] = t[r];
                return n
            }
        },
        877297: function(t, n, r) {
            var u = r("68421");
            t.exports = function(t, n) {
                var r = -1,
                    i = t.length,
                    e = i - 1;
                for (n = void 0 === n ? i : n; ++r < n;) {
                    var o = u(r, e),
                        s = t[o];
                    t[o] = t[r], t[r] = s
                }
                return t.length = n, t
            }
        },
        375128: function(t, n, r) {
            var u = r("437083"),
                i = r("329252"),
                e = r("725502");
            t.exports = function(t) {
                return (e(t) ? u : i)(t)
            }
        },
        164099: function(t, n, r) {
            var u = r("957478"),
                i = r("466731");
            t.exports = function(t) {
                return null == t ? [] : u(t, i(t))
            }
        },
        48648: function(t, n, r) {
            if (r("808653"), r("424973"), !u) var u = {
                map: function(t, n) {
                    var r = {};
                    return n ? t.map(function(t, u) {
                        return r.index = u, n.call(r, t)
                    }) : t.slice()
                },
                naturalOrder: function(t, n) {
                    return t < n ? -1 : t > n ? 1 : 0
                },
                sum: function(t, n) {
                    var r = {};
                    return t.reduce(n ? function(t, u, i) {
                        return r.index = i, t + n.call(r, u)
                    } : function(t, n) {
                        return t + n
                    }, 0)
                },
                max: function(t, n) {
                    return Math.max.apply(null, n ? u.map(t, n) : t)
                }
            };
            var i = function() {
                var t = 3;

                function n(t, n, r) {
                    return (t << 10) + (n << 5) + r
                }

                function r(t) {
                    var n = [],
                        r = !1;

                    function u() {
                        n.sort(t), r = !0
                    }
                    return {
                        push: function(t) {
                            n.push(t), r = !1
                        },
                        peek: function(t) {
                            return !r && u(), void 0 === t && (t = n.length - 1), n[t]
                        },
                        pop: function() {
                            return !r && u(), n.pop()
                        },
                        size: function() {
                            return n.length
                        },
                        map: function(t) {
                            return n.map(t)
                        },
                        debug: function() {
                            return !r && u(), n
                        }
                    }
                }

                function i(t, n, r, u, i, e, o) {
                    this.r1 = t, this.r2 = n, this.g1 = r, this.g2 = u, this.b1 = i, this.b2 = e, this.histo = o
                }

                function e() {
                    this.vboxes = new r(function(t, n) {
                        return u.naturalOrder(t.vbox.count() * t.vbox.volume(), n.vbox.count() * n.vbox.volume())
                    })
                }
                return i.prototype = {
                    volume: function(t) {
                        return (!this._volume || t) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(t) {
                        var r = this.histo;
                        if (!this._count_set || t) {
                            var u, i, e, o = 0;
                            for (u = this.r1; u <= this.r2; u++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (e = this.b1; e <= this.b2; e++) o += r[n(u, i, e)] || 0;
                            this._count = o, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new i(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(t) {
                        var r = this.histo;
                        if (!this._avg || t) {
                            var u, i, e, o, s = 0,
                                a = 8,
                                c = 0,
                                f = 0,
                                h = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (e = this.g1; e <= this.g2; e++)
                                    for (o = this.b1; o <= this.b2; o++) s += u = r[n(i, e, o)] || 0, c += u * (i + .5) * a, f += u * (e + .5) * a, h += u * (o + .5) * a;
                            s ? this._avg = [~~(c / s), ~~(f / s), ~~(h / s)] : this._avg = [~~(a * (this.r1 + this.r2 + 1) / 2), ~~(a * (this.g1 + this.g2 + 1) / 2), ~~(a * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(n) {
                        var r = n[0] >> t;
                        return gval = n[1] >> t, bval = n[2] >> t, r >= this.r1 && r <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, e.prototype = {
                    push: function(t) {
                        this.vboxes.push({
                            vbox: t,
                            color: t.avg()
                        })
                    },
                    palette: function() {
                        return this.vboxes.map(function(t) {
                            return t.color
                        })
                    },
                    size: function() {
                        return this.vboxes.size()
                    },
                    map: function(t) {
                        for (var n = this.vboxes, r = 0; r < n.size(); r++)
                            if (n.peek(r).vbox.contains(t)) return n.peek(r).color;
                        return this.nearest(t)
                    },
                    nearest: function(t) {
                        for (var n, r, u, i = this.vboxes, e = 0; e < i.size(); e++)((r = Math.sqrt(Math.pow(t[0] - i.peek(e).color[0], 2) + Math.pow(t[1] - i.peek(e).color[1], 2) + Math.pow(t[2] - i.peek(e).color[2], 2))) < n || void 0 === n) && (n = r, u = i.peek(e).color);
                        return u
                    },
                    forcebw: function() {
                        var t = this.vboxes;
                        t.sort(function(t, n) {
                            return u.naturalOrder(u.sum(t.color), u.sum(n.color))
                        });
                        var n = t[0].color;
                        n[0] < 5 && n[1] < 5 && n[2] < 5 && (t[0].color = [0, 0, 0]);
                        var r = t.length - 1,
                            i = t[r].color;
                        i[0] > 251 && i[1] > 251 && i[2] > 251 && (t[r].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(o, s) {
                        if (!o.length || s < 2 || s > 256) return !1;
                        var a, c, f, h, l, v, p, g, b, d, x, m, z, k, _, w, y = (a = o, l = Array(32768), a.forEach(function(r) {
                                f = r[0] >> t, h = r[1] >> t, l[c = n(f, h, r[2] >> t)] = (l[c] || 0) + 1
                            }), l),
                            M = 0;
                        y.forEach(function() {
                            M++
                        });
                        var E = (v = o, p = y, x = 1e6, m = 0, z = 1e6, k = 0, _ = 1e6, w = 0, v.forEach(function(n) {
                                g = n[0] >> t, b = n[1] >> t, d = n[2] >> t, g < x ? x = g : g > m && (m = g), b < z ? z = b : b > k && (k = b), d < _ ? _ = d : d > w && (w = d)
                            }), new i(x, m, z, k, _, w, p)),
                            O = new r(function(t, n) {
                                return u.naturalOrder(t.count(), n.count())
                            });

                        function C(t, r) {
                            for (var i, e = 1, o = 0; o < 1e3;) {
                                if (!(i = t.pop()).count()) {
                                    t.push(i), o++;
                                    continue
                                }
                                var s = function(t, r) {
                                        if (r.count()) {
                                            var i = r.r2 - r.r1 + 1,
                                                e = r.g2 - r.g1 + 1,
                                                o = r.b2 - r.b1 + 1,
                                                s = u.max([i, e, o]);
                                            if (1 == r.count()) return [r.copy()];
                                            var a, c, f, h, l, v = 0,
                                                p = [],
                                                g = [];
                                            if (s == i)
                                                for (a = r.r1; a <= r.r2; a++) {
                                                    for (h = 0, c = r.g1; c <= r.g2; c++)
                                                        for (f = r.b1; f <= r.b2; f++) h += t[l = n(a, c, f)] || 0;
                                                    v += h, p[a] = v
                                                } else if (s == e)
                                                    for (a = r.g1; a <= r.g2; a++) {
                                                        for (h = 0, c = r.r1; c <= r.r2; c++)
                                                            for (f = r.b1; f <= r.b2; f++) h += t[l = n(c, a, f)] || 0;
                                                        v += h, p[a] = v
                                                    } else
                                                        for (a = r.b1; a <= r.b2; a++) {
                                                            for (h = 0, c = r.r1; c <= r.r2; c++)
                                                                for (f = r.g1; f <= r.g2; f++) h += t[l = n(c, f, a)] || 0;
                                                            v += h, p[a] = v
                                                        }
                                            return p.forEach(function(t, n) {
                                                g[n] = v - t
                                            }), b(s == i ? "r" : s == e ? "g" : "b")
                                        }

                                        function b(t) {
                                            var n, u, i, e, o, s = t + "1",
                                                c = t + "2",
                                                f = 0;
                                            for (a = r[s]; a <= r[c]; a++)
                                                if (p[a] > v / 2) {
                                                    for (i = r.copy(), e = r.copy(), n = a - r[s], o = n <= (u = r[c] - a) ? Math.min(r[c] - 1, ~~(a + u / 2)) : Math.max(r[s], ~~(a - 1 - n / 2)); !p[o];) o++;
                                                    for (f = g[o]; !f && p[o - 1];) f = g[--o];
                                                    return i[c] = o, e[s] = i[c] + 1, [i, e]
                                                }
                                        }
                                    }(y, i),
                                    a = s[0],
                                    c = s[1];
                                if (!a) return;
                                if (t.push(a), c && (t.push(c), e++), e >= r || o++ > 1e3) return
                            }
                        }
                        O.push(E), C(O, .75 * s);
                        for (var R = new r(function(t, n) {
                                return u.naturalOrder(t.count() * t.volume(), n.count() * n.volume())
                            }); O.size();) R.push(O.pop());
                        C(R, s - R.size());
                        for (var j = new e; R.size();) j.push(R.pop());
                        return j
                    }
                }
            }();
            t.exports = i.quantize
        },
        48174: function(t, n, r) {
            "use strict";

            function u(t, n) {
                if (t.length !== n.length) return !1;
                for (let r = 0; r < n.length && r < t.length; r++)
                    if (!Object.is(t[r], n[r])) return !1;
                return !0
            }
            r.r(n), r.d(n, {
                default: function() {
                    return u
                }
            })
        },
        775560: function(t, n, r) {
            "use strict";
            r.r(n), r.d(n, {
                useForceUpdate: function() {
                    return u.default
                },
                useStableMemo: function() {
                    return i.default
                },
                useLazyValue: function() {
                    return e.default
                }
            });
            var u = r("14716"),
                i = r("745510"),
                e = r("315378")
        },
        14716: function(t, n, r) {
            "use strict";
            r.r(n), r.d(n, {
                default: function() {
                    return i
                }
            }), r("222007");
            var u = r("884691");

            function i() {
                let [, t] = (0, u.useState)({});
                return (0, u.useCallback)(() => t({}), [])
            }
        },
        315378: function(t, n, r) {
            "use strict";
            r.r(n), r.d(n, {
                default: function() {
                    return e
                }
            });
            var u = r("884691");
            let i = {};

            function e(t) {
                let n = (0, u.useRef)(i);
                return n.current === i && (n.current = t()), n.current
            }
        },
        745510: function(t, n, r) {
            "use strict";
            r.r(n), r.d(n, {
                default: function() {
                    return o
                }
            });
            var u = r("884691"),
                i = r("48174");
            let e = [];

            function o(t, n) {
                let r = (0, u.useRef)(),
                    o = (0, u.useRef)(e);
                return o.current === e ? (r.current = t(), o.current = n) : !(0, i.default)(n, o.current) && (r.current = t(), o.current = n), r.current
            }
        }
    }
]);