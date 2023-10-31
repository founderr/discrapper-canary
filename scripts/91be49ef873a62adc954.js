(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["50692"], {
        310013: function(t, r, n) {
            "use strict";
            var e = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                o = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                u = "function" == typeof Object.getOwnPropertySymbols;
            t.exports = function(t, r, n) {
                if ("string" != typeof r) {
                    var i = Object.getOwnPropertyNames(r);
                    u && (i = i.concat(Object.getOwnPropertySymbols(r)));
                    for (var c = 0; c < i.length; ++c)
                        if (!e[i[c]] && !o[i[c]] && (!n || !n[i[c]])) try {
                            t[i[c]] = r[i[c]]
                        } catch (t) {}
                }
                return t
            }
        },
        458389: function(t, r, n) {
            var e = n("594140"),
                o = n("564414"),
                u = n("725502"),
                i = n("591350"),
                c = n("476540"),
                s = n("381178"),
                f = Object.prototype.hasOwnProperty;
            t.exports = function(t, r) {
                var n = u(t),
                    a = !n && o(t),
                    p = !n && !a && i(t),
                    h = !n && !a && !p && s(t),
                    l = n || a || p || h,
                    b = l ? e(t.length, String) : [],
                    v = b.length;
                for (var g in t)(r || f.call(t, g)) && !(l && ("length" == g || p && ("offset" == g || "parent" == g) || h && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || c(g, v))) && b.push(g);
                return b
            }
        },
        562132: function(t, r, n) {
            var e = n("33426"),
                o = n("136047"),
                u = n("270879"),
                i = {};
            i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = !0, i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1;
            t.exports = function(t) {
                return u(t) && o(t.length) && !!i[e(t)]
            }
        },
        205873: function(t, r, n) {
            var e = n("733228"),
                o = n("541349"),
                u = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!e(t)) return o(t);
                var r = [];
                for (var n in Object(t)) u.call(t, n) && "constructor" != n && r.push(n);
                return r
            }
        },
        594140: function(t, r, n) {
            t.exports = function(t, r) {
                for (var n = -1, e = Array(t); ++n < t;) e[n] = r(n);
                return e
            }
        },
        492692: function(t, r, n) {
            t.exports = function(t) {
                return function(r) {
                    return t(r)
                }
            }
        },
        733228: function(t, r, n) {
            var e = Object.prototype;
            t.exports = function(t) {
                var r = t && t.constructor;
                return t === ("function" == typeof r && r.prototype || e)
            }
        },
        541349: function(t, r, n) {
            var e = n("761197")(Object.keys, Object);
            t.exports = e
        },
        276440: function(t, r, n) {
            t = n.nmd(t);
            var e = n("447414"),
                o = "object" == typeof r && r && !r.nodeType && r,
                u = o && "object" == typeof t && t && !t.nodeType && t,
                i = u && u.exports === o && e.process,
                c = function() {
                    try {
                        var t = u && u.require && u.require("util").types;
                        if (t) return t;
                        return i && i.binding && i.binding("util")
                    } catch (t) {}
                }();
            t.exports = c
        },
        761197: function(t, r, n) {
            t.exports = function(t, r) {
                return function(n) {
                    return t(r(n))
                }
            }
        },
        591350: function(t, r, n) {
            t = n.nmd(t);
            var e = n("690516"),
                o = n("221386"),
                u = "object" == typeof r && r && !r.nodeType && r,
                i = u && "object" == typeof t && t && !t.nodeType && t,
                c = i && i.exports === u ? e.Buffer : void 0,
                s = c ? c.isBuffer : void 0;
            t.exports = s || o
        },
        381178: function(t, r, n) {
            var e = n("562132"),
                o = n("492692"),
                u = n("276440"),
                i = u && u.isTypedArray,
                c = i ? o(i) : e;
            t.exports = c
        },
        466731: function(t, r, n) {
            var e = n("458389"),
                o = n("205873"),
                u = n("603108");
            t.exports = function(t) {
                return u(t) ? e(t) : o(t)
            }
        },
        221386: function(t, r, n) {
            t.exports = function() {
                return !1
            }
        },
        48648: function(t, r, n) {
            if (!e) var e = {
                map: function(t, r) {
                    var n = {};
                    return r ? t.map(function(t, e) {
                        return n.index = e, r.call(n, t)
                    }) : t.slice()
                },
                naturalOrder: function(t, r) {
                    return t < r ? -1 : t > r ? 1 : 0
                },
                sum: function(t, r) {
                    var n = {};
                    return t.reduce(r ? function(t, e, o) {
                        return n.index = o, t + r.call(n, e)
                    } : function(t, r) {
                        return t + r
                    }, 0)
                },
                max: function(t, r) {
                    return Math.max.apply(null, r ? e.map(t, r) : t)
                }
            };
            var o = function() {
                var t = 3;

                function r(t, r, n) {
                    return (t << 10) + (r << 5) + n
                }

                function n(t) {
                    var r = [],
                        n = !1;

                    function e() {
                        r.sort(t), n = !0
                    }
                    return {
                        push: function(t) {
                            r.push(t), n = !1
                        },
                        peek: function(t) {
                            return !n && e(), void 0 === t && (t = r.length - 1), r[t]
                        },
                        pop: function() {
                            return !n && e(), r.pop()
                        },
                        size: function() {
                            return r.length
                        },
                        map: function(t) {
                            return r.map(t)
                        },
                        debug: function() {
                            return !n && e(), r
                        }
                    }
                }

                function o(t, r, n, e, o, u, i) {
                    this.r1 = t, this.r2 = r, this.g1 = n, this.g2 = e, this.b1 = o, this.b2 = u, this.histo = i
                }

                function u() {
                    this.vboxes = new n(function(t, r) {
                        return e.naturalOrder(t.vbox.count() * t.vbox.volume(), r.vbox.count() * r.vbox.volume())
                    })
                }
                return o.prototype = {
                    volume: function(t) {
                        return (!this._volume || t) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(t) {
                        var n = this.histo;
                        if (!this._count_set || t) {
                            var e, o, u, i = 0;
                            for (e = this.r1; e <= this.r2; e++)
                                for (o = this.g1; o <= this.g2; o++)
                                    for (u = this.b1; u <= this.b2; u++) i += n[r(e, o, u)] || 0;
                            this._count = i, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new o(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(t) {
                        var n = this.histo;
                        if (!this._avg || t) {
                            var e, o, u, i, c = 0,
                                s = 8,
                                f = 0,
                                a = 0,
                                p = 0;
                            for (o = this.r1; o <= this.r2; o++)
                                for (u = this.g1; u <= this.g2; u++)
                                    for (i = this.b1; i <= this.b2; i++) c += e = n[r(o, u, i)] || 0, f += e * (o + .5) * s, a += e * (u + .5) * s, p += e * (i + .5) * s;
                            c ? this._avg = [~~(f / c), ~~(a / c), ~~(p / c)] : this._avg = [~~(s * (this.r1 + this.r2 + 1) / 2), ~~(s * (this.g1 + this.g2 + 1) / 2), ~~(s * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(r) {
                        var n = r[0] >> t;
                        return gval = r[1] >> t, bval = r[2] >> t, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, u.prototype = {
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
                        for (var r = this.vboxes, n = 0; n < r.size(); n++)
                            if (r.peek(n).vbox.contains(t)) return r.peek(n).color;
                        return this.nearest(t)
                    },
                    nearest: function(t) {
                        for (var r, n, e, o = this.vboxes, u = 0; u < o.size(); u++)((n = Math.sqrt(Math.pow(t[0] - o.peek(u).color[0], 2) + Math.pow(t[1] - o.peek(u).color[1], 2) + Math.pow(t[2] - o.peek(u).color[2], 2))) < r || void 0 === r) && (r = n, e = o.peek(u).color);
                        return e
                    },
                    forcebw: function() {
                        var t = this.vboxes;
                        t.sort(function(t, r) {
                            return e.naturalOrder(e.sum(t.color), e.sum(r.color))
                        });
                        var r = t[0].color;
                        r[0] < 5 && r[1] < 5 && r[2] < 5 && (t[0].color = [0, 0, 0]);
                        var n = t.length - 1,
                            o = t[n].color;
                        o[0] > 251 && o[1] > 251 && o[2] > 251 && (t[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(i, c) {
                        if (!i.length || c < 2 || c > 256) return !1;
                        var s, f, a, p, h, l, b, v, g, y, d, x, j, m, O, w, A = (s = i, h = Array(32768), s.forEach(function(n) {
                                a = n[0] >> t, p = n[1] >> t, h[f = r(a, p, n[2] >> t)] = (h[f] || 0) + 1
                            }), h),
                            _ = 0;
                        A.forEach(function() {
                            _++
                        });
                        var k = (l = i, b = A, d = 1e6, x = 0, j = 1e6, m = 0, O = 1e6, w = 0, l.forEach(function(r) {
                                v = r[0] >> t, g = r[1] >> t, y = r[2] >> t, v < d ? d = v : v > x && (x = v), g < j ? j = g : g > m && (m = g), y < O ? O = y : y > w && (w = y)
                            }), new o(d, x, j, m, O, w, b)),
                            z = new n(function(t, r) {
                                return e.naturalOrder(t.count(), r.count())
                            });

                        function M(t, n) {
                            for (var o, u = 1, i = 0; i < 1e3;) {
                                if (!(o = t.pop()).count()) {
                                    t.push(o), i++;
                                    continue
                                }
                                var c = function(t, n) {
                                        if (n.count()) {
                                            var o = n.r2 - n.r1 + 1,
                                                u = n.g2 - n.g1 + 1,
                                                i = n.b2 - n.b1 + 1,
                                                c = e.max([o, u, i]);
                                            if (1 == n.count()) return [n.copy()];
                                            var s, f, a, p, h, l = 0,
                                                b = [],
                                                v = [];
                                            if (c == o)
                                                for (s = n.r1; s <= n.r2; s++) {
                                                    for (p = 0, f = n.g1; f <= n.g2; f++)
                                                        for (a = n.b1; a <= n.b2; a++) p += t[h = r(s, f, a)] || 0;
                                                    l += p, b[s] = l
                                                } else if (c == u)
                                                    for (s = n.g1; s <= n.g2; s++) {
                                                        for (p = 0, f = n.r1; f <= n.r2; f++)
                                                            for (a = n.b1; a <= n.b2; a++) p += t[h = r(f, s, a)] || 0;
                                                        l += p, b[s] = l
                                                    } else
                                                        for (s = n.b1; s <= n.b2; s++) {
                                                            for (p = 0, f = n.r1; f <= n.r2; f++)
                                                                for (a = n.g1; a <= n.g2; a++) p += t[h = r(f, a, s)] || 0;
                                                            l += p, b[s] = l
                                                        }
                                            return b.forEach(function(t, r) {
                                                v[r] = l - t
                                            }), g(c == o ? "r" : c == u ? "g" : "b")
                                        }

                                        function g(t) {
                                            var r, e, o, u, i, c = t + "1",
                                                f = t + "2",
                                                a = 0;
                                            for (s = n[c]; s <= n[f]; s++)
                                                if (b[s] > l / 2) {
                                                    for (o = n.copy(), u = n.copy(), r = s - n[c], i = r <= (e = n[f] - s) ? Math.min(n[f] - 1, ~~(s + e / 2)) : Math.max(n[c], ~~(s - 1 - r / 2)); !b[i];) i++;
                                                    for (a = v[i]; !a && b[i - 1];) a = v[--i];
                                                    return o[f] = i, u[c] = o[f] + 1, [o, u]
                                                }
                                        }
                                    }(A, o),
                                    s = c[0],
                                    f = c[1];
                                if (!s) return;
                                if (t.push(s), f && (t.push(f), u++), u >= n || i++ > 1e3) return
                            }
                        }
                        z.push(k), M(z, .75 * c);
                        for (var T = new n(function(t, r) {
                                return e.naturalOrder(t.count() * t.volume(), r.count() * r.volume())
                            }); z.size();) T.push(z.pop());
                        M(T, c - T.size());
                        for (var P = new u; T.size();) P.push(T.pop());
                        return P
                    }
                }
            }();
            t.exports = o.quantize
        },
        48174: function(t, r, n) {
            "use strict";

            function e(t, r) {
                if (t.length !== r.length) return !1;
                for (let n = 0; n < r.length && n < t.length; n++)
                    if (!Object.is(t[n], r[n])) return !1;
                return !0
            }
            n.r(r), n.d(r, {
                default: function() {
                    return e
                }
            })
        },
        775560: function(t, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                useForceUpdate: function() {
                    return e.default
                },
                useStableMemo: function() {
                    return o.default
                },
                useLazyValue: function() {
                    return u.default
                }
            });
            var e = n("14716"),
                o = n("745510"),
                u = n("315378")
        },
        14716: function(t, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                default: function() {
                    return o
                }
            });
            var e = n("884691");

            function o() {
                let [, t] = (0, e.useState)({});
                return (0, e.useCallback)(() => t({}), [])
            }
        },
        315378: function(t, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                default: function() {
                    return u
                }
            });
            var e = n("884691");
            let o = {};

            function u(t) {
                let r = (0, e.useRef)(o);
                return r.current === o && (r.current = t()), r.current
            }
        },
        745510: function(t, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                default: function() {
                    return i
                }
            });
            var e = n("884691"),
                o = n("48174");
            let u = [];

            function i(t, r) {
                let n = (0, e.useRef)(),
                    i = (0, e.useRef)(u);
                return i.current === u ? (n.current = t(), i.current = r) : !(0, o.default)(r, i.current) && (n.current = t(), i.current = r), n.current
            }
        }
    }
]);