(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["88084"], {
        448105: function(t, r, n) {
            "use strict";
            t.exports = function(t, r) {
                var n = r.length,
                    o = t.length;
                if (o > n) return !1;
                if (o === n) return t === r;
                t: for (var e = 0, i = 0; e < o; e++) {
                    for (var u = t.charCodeAt(e); i < n;)
                        if (r.charCodeAt(i++) === u) continue t;
                    return !1
                }
                return !0
            }
        },
        762774: function(t, r, n) {
            var o = n("843879"),
                e = n("169160"),
                i = n("927794"),
                u = n("979334"),
                c = n("898346");

            function a(t) {
                var r = -1,
                    n = null == t ? 0 : t.length;
                for (this.clear(); ++r < n;) {
                    var o = t[r];
                    this.set(o[0], o[1])
                }
            }
            a.prototype.clear = o, a.prototype.delete = e, a.prototype.get = i, a.prototype.has = u, a.prototype.set = c, t.exports = a
        },
        263470: function(t, r, n) {
            var o = n("186489"),
                e = n("235723"),
                i = n("236748"),
                u = n("285445"),
                c = n("956285");

            function a(t) {
                var r = -1,
                    n = null == t ? 0 : t.length;
                for (this.clear(); ++r < n;) {
                    var o = t[r];
                    this.set(o[0], o[1])
                }
            }
            a.prototype.clear = o, a.prototype.delete = e, a.prototype.get = i, a.prototype.has = u, a.prototype.set = c, t.exports = a
        },
        516863: function(t, r, n) {
            var o = n("367753")(n("690516"), "Map");
            t.exports = o
        },
        664007: function(t, r, n) {
            var o = n("679991"),
                e = n("169789"),
                i = n("406449"),
                u = n("66703"),
                c = n("245510");

            function a(t) {
                var r = -1,
                    n = null == t ? 0 : t.length;
                for (this.clear(); ++r < n;) {
                    var o = t[r];
                    this.set(o[0], o[1])
                }
            }
            a.prototype.clear = o, a.prototype.delete = e, a.prototype.get = i, a.prototype.has = u, a.prototype.set = c, t.exports = a
        },
        458389: function(t, r, n) {
            var o = n("594140"),
                e = n("564414"),
                i = n("725502"),
                u = n("591350"),
                c = n("476540"),
                a = n("381178"),
                s = Object.prototype.hasOwnProperty;
            t.exports = function(t, r) {
                var n = i(t),
                    f = !n && e(t),
                    p = !n && !f && u(t),
                    h = !n && !f && !p && a(t),
                    v = n || f || p || h,
                    l = v ? o(t.length, String) : [],
                    b = l.length;
                for (var y in t)(r || s.call(t, y)) && !(v && ("length" == y || p && ("offset" == y || "parent" == y) || h && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || c(y, b))) && l.push(y);
                return l
            }
        },
        437083: function(t, r, n) {
            var o = n("561449"),
                e = n("877297");
            t.exports = function(t) {
                return e(o(t))
            }
        },
        523119: function(t, r, n) {
            var o = n("561662");
            t.exports = function(t, r) {
                for (var n = t.length; n--;)
                    if (o(t[n][0], r)) return n;
                return -1
            }
        },
        112047: function(t, r, n) {
            var o = n("559494"),
                e = n("43332"),
                i = n("285162"),
                u = n("6906"),
                c = /^\[object .+?Constructor\]$/,
                a = Object.prototype,
                s = Function.prototype.toString,
                f = a.hasOwnProperty,
                p = RegExp("^" + s.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            t.exports = function(t) {
                return !(!i(t) || e(t)) && (o(t) ? p : c).test(u(t))
            }
        },
        562132: function(t, r, n) {
            var o = n("33426"),
                e = n("136047"),
                i = n("270879"),
                u = {};
            u["[object Float32Array]"] = u["[object Float64Array]"] = u["[object Int8Array]"] = u["[object Int16Array]"] = u["[object Int32Array]"] = u["[object Uint8Array]"] = u["[object Uint8ClampedArray]"] = u["[object Uint16Array]"] = u["[object Uint32Array]"] = !0, u["[object Arguments]"] = u["[object Array]"] = u["[object ArrayBuffer]"] = u["[object Boolean]"] = u["[object DataView]"] = u["[object Date]"] = u["[object Error]"] = u["[object Function]"] = u["[object Map]"] = u["[object Number]"] = u["[object Object]"] = u["[object RegExp]"] = u["[object Set]"] = u["[object String]"] = u["[object WeakMap]"] = !1;
            t.exports = function(t) {
                return i(t) && e(t.length) && !!u[o(t)]
            }
        },
        205873: function(t, r, n) {
            var o = n("733228"),
                e = n("541349"),
                i = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!o(t)) return e(t);
                var r = [];
                for (var n in Object(t)) i.call(t, n) && "constructor" != n && r.push(n);
                return r
            }
        },
        329252: function(t, r, n) {
            var o = n("877297"),
                e = n("164099");
            t.exports = function(t) {
                return o(e(t))
            }
        },
        594140: function(t, r, n) {
            t.exports = function(t, r) {
                for (var n = -1, o = Array(t); ++n < t;) o[n] = r(n);
                return o
            }
        },
        492692: function(t, r, n) {
            t.exports = function(t) {
                return function(r) {
                    return t(r)
                }
            }
        },
        957478: function(t, r, n) {
            var o = n("626785");
            t.exports = function(t, r) {
                return o(r, function(r) {
                    return t[r]
                })
            }
        },
        561449: function(t, r, n) {
            t.exports = function(t, r) {
                var n = -1,
                    o = t.length;
                for (r || (r = Array(o)); ++n < o;) r[n] = t[n];
                return r
            }
        },
        745011: function(t, r, n) {
            var o = n("690516")["__core-js_shared__"];
            t.exports = o
        },
        74590: function(t, r, n) {
            var o = n("963201");
            t.exports = function(t, r) {
                var n = t.__data__;
                return o(r) ? n["string" == typeof r ? "string" : "hash"] : n.map
            }
        },
        367753: function(t, r, n) {
            var o = n("112047"),
                e = n("128534");
            t.exports = function(t, r) {
                var n = e(t, r);
                return o(n) ? n : void 0
            }
        },
        128534: function(t, r, n) {
            t.exports = function(t, r) {
                return null == t ? void 0 : t[r]
            }
        },
        843879: function(t, r, n) {
            var o = n("870811");
            t.exports = function() {
                this.__data__ = o ? o(null) : {}, this.size = 0
            }
        },
        169160: function(t, r, n) {
            t.exports = function(t) {
                var r = this.has(t) && delete this.__data__[t];
                return this.size -= r ? 1 : 0, r
            }
        },
        927794: function(t, r, n) {
            var o = n("870811"),
                e = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                var r = this.__data__;
                if (o) {
                    var n = r[t];
                    return "__lodash_hash_undefined__" === n ? void 0 : n
                }
                return e.call(r, t) ? r[t] : void 0
            }
        },
        979334: function(t, r, n) {
            var o = n("870811"),
                e = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                var r = this.__data__;
                return o ? void 0 !== r[t] : e.call(r, t)
            }
        },
        898346: function(t, r, n) {
            var o = n("870811");
            t.exports = function(t, r) {
                var n = this.__data__;
                return this.size += this.has(t) ? 0 : 1, n[t] = o && void 0 === r ? "__lodash_hash_undefined__" : r, this
            }
        },
        963201: function(t, r, n) {
            t.exports = function(t) {
                var r = typeof t;
                return "string" == r || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t
            }
        },
        43332: function(t, r, n) {
            var o, e = n("745011");
            var i = (o = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "")) ? "Symbol(src)_1." + o : "";
            t.exports = function(t) {
                return !!i && i in t
            }
        },
        733228: function(t, r, n) {
            var o = Object.prototype;
            t.exports = function(t) {
                var r = t && t.constructor;
                return t === ("function" == typeof r && r.prototype || o)
            }
        },
        186489: function(t, r, n) {
            t.exports = function() {
                this.__data__ = [], this.size = 0
            }
        },
        235723: function(t, r, n) {
            var o = n("523119"),
                e = Array.prototype.splice;
            t.exports = function(t) {
                var r = this.__data__,
                    n = o(r, t);
                return !(n < 0) && (n == r.length - 1 ? r.pop() : e.call(r, n, 1), --this.size, !0)
            }
        },
        236748: function(t, r, n) {
            var o = n("523119");
            t.exports = function(t) {
                var r = this.__data__,
                    n = o(r, t);
                return n < 0 ? void 0 : r[n][1]
            }
        },
        285445: function(t, r, n) {
            var o = n("523119");
            t.exports = function(t) {
                return o(this.__data__, t) > -1
            }
        },
        956285: function(t, r, n) {
            var o = n("523119");
            t.exports = function(t, r) {
                var n = this.__data__,
                    e = o(n, t);
                return e < 0 ? (++this.size, n.push([t, r])) : n[e][1] = r, this
            }
        },
        679991: function(t, r, n) {
            var o = n("762774"),
                e = n("263470"),
                i = n("516863");
            t.exports = function() {
                this.size = 0, this.__data__ = {
                    hash: new o,
                    map: new(i || e),
                    string: new o
                }
            }
        },
        169789: function(t, r, n) {
            var o = n("74590");
            t.exports = function(t) {
                var r = o(this, t).delete(t);
                return this.size -= r ? 1 : 0, r
            }
        },
        406449: function(t, r, n) {
            var o = n("74590");
            t.exports = function(t) {
                return o(this, t).get(t)
            }
        },
        66703: function(t, r, n) {
            var o = n("74590");
            t.exports = function(t) {
                return o(this, t).has(t)
            }
        },
        245510: function(t, r, n) {
            var o = n("74590");
            t.exports = function(t, r) {
                var n = o(this, t),
                    e = n.size;
                return n.set(t, r), this.size += n.size == e ? 0 : 1, this
            }
        },
        870811: function(t, r, n) {
            var o = n("367753")(Object, "create");
            t.exports = o
        },
        541349: function(t, r, n) {
            var o = n("761197")(Object.keys, Object);
            t.exports = o
        },
        276440: function(t, r, n) {
            t = n.nmd(t);
            var o = n("447414"),
                e = "object" == typeof r && r && !r.nodeType && r,
                i = e && "object" == typeof t && t && !t.nodeType && t,
                u = i && i.exports === e && o.process,
                c = function() {
                    try {
                        var t = i && i.require && i.require("util").types;
                        if (t) return t;
                        return u && u.binding && u.binding("util")
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
        877297: function(t, r, n) {
            var o = n("68421");
            t.exports = function(t, r) {
                var n = -1,
                    e = t.length,
                    i = e - 1;
                for (r = void 0 === r ? e : r; ++n < r;) {
                    var u = o(n, i),
                        c = t[u];
                    t[u] = t[n], t[n] = c
                }
                return t.length = r, t
            }
        },
        6906: function(t, r, n) {
            var o = Function.prototype.toString;
            t.exports = function(t) {
                if (null != t) {
                    try {
                        return o.call(t)
                    } catch (t) {}
                    try {
                        return t + ""
                    } catch (t) {}
                }
                return ""
            }
        },
        483366: function(t, r, n) {
            var o = n("285162"),
                e = n("271388"),
                i = n("16282"),
                u = Math.max,
                c = Math.min;
            t.exports = function(t, r, n) {
                var a, s, f, p, h, v, l = 0,
                    b = !1,
                    y = !1,
                    _ = !0;
                if ("function" != typeof t) throw TypeError("Expected a function");

                function x(r) {
                    var n = a,
                        o = s;
                    return a = s = void 0, l = r, p = t.apply(o, n)
                }
                r = i(r) || 0, o(n) && (b = !!n.leading, f = (y = "maxWait" in n) ? u(i(n.maxWait) || 0, r) : f, _ = "trailing" in n ? !!n.trailing : _);

                function g(t) {
                    var n = t - v,
                        o = t - l;
                    return void 0 === v || n >= r || n < 0 || y && o >= f
                }

                function d() {
                    var t, n, o, i, u = e();
                    if (g(u)) return m(u);
                    h = setTimeout(d, (n = (t = u) - v, o = t - l, i = r - n, y ? c(i, f - o) : i))
                }

                function m(t) {
                    return (h = void 0, _ && a) ? x(t) : (a = s = void 0, p)
                }

                function j() {
                    var t, n = e(),
                        o = g(n);
                    if (a = arguments, s = this, v = n, o) {
                        if (void 0 === h) {
                            ;
                            return l = t = v, h = setTimeout(d, r), b ? x(t) : p
                        }
                        if (y) return clearTimeout(h), h = setTimeout(d, r), x(v)
                    }
                    return void 0 === h && (h = setTimeout(d, r)), p
                }
                return j.cancel = function() {
                    void 0 !== h && clearTimeout(h), l = 0, a = v = s = h = void 0
                }, j.flush = function() {
                    return void 0 === h ? p : m(e())
                }, j
            }
        },
        591350: function(t, r, n) {
            t = n.nmd(t);
            var o = n("690516"),
                e = n("221386"),
                i = "object" == typeof r && r && !r.nodeType && r,
                u = i && "object" == typeof t && t && !t.nodeType && t,
                c = u && u.exports === i ? o.Buffer : void 0,
                a = c ? c.isBuffer : void 0;
            t.exports = a || e
        },
        381178: function(t, r, n) {
            var o = n("562132"),
                e = n("492692"),
                i = n("276440"),
                u = i && i.isTypedArray,
                c = u ? e(u) : o;
            t.exports = c
        },
        466731: function(t, r, n) {
            var o = n("458389"),
                e = n("205873"),
                i = n("603108");
            t.exports = function(t) {
                return i(t) ? o(t) : e(t)
            }
        },
        661201: function(t, r, n) {
            var o = n("664007");

            function e(t, r) {
                if ("function" != typeof t || null != r && "function" != typeof r) throw TypeError("Expected a function");
                var n = function() {
                    var o = arguments,
                        e = r ? r.apply(this, o) : o[0],
                        i = n.cache;
                    if (i.has(e)) return i.get(e);
                    var u = t.apply(this, o);
                    return n.cache = i.set(e, u) || i, u
                };
                return n.cache = new(e.Cache || o), n
            }
            e.Cache = o, t.exports = e
        },
        271388: function(t, r, n) {
            var o = n("690516");
            t.exports = function() {
                return o.Date.now()
            }
        },
        375128: function(t, r, n) {
            var o = n("437083"),
                e = n("329252"),
                i = n("725502");
            t.exports = function(t) {
                return (i(t) ? o : e)(t)
            }
        },
        221386: function(t, r, n) {
            t.exports = function() {
                return !1
            }
        },
        164099: function(t, r, n) {
            var o = n("957478"),
                e = n("466731");
            t.exports = function(t) {
                return null == t ? [] : o(t, e(t))
            }
        },
        48648: function(t, r, n) {
            if (!o) var o = {
                map: function(t, r) {
                    var n = {};
                    return r ? t.map(function(t, o) {
                        return n.index = o, r.call(n, t)
                    }) : t.slice()
                },
                naturalOrder: function(t, r) {
                    return t < r ? -1 : t > r ? 1 : 0
                },
                sum: function(t, r) {
                    var n = {};
                    return t.reduce(r ? function(t, o, e) {
                        return n.index = e, t + r.call(n, o)
                    } : function(t, r) {
                        return t + r
                    }, 0)
                },
                max: function(t, r) {
                    return Math.max.apply(null, r ? o.map(t, r) : t)
                }
            };
            var e = function() {
                var t = 3;

                function r(t, r, n) {
                    return (t << 10) + (r << 5) + n
                }

                function n(t) {
                    var r = [],
                        n = !1;

                    function o() {
                        r.sort(t), n = !0
                    }
                    return {
                        push: function(t) {
                            r.push(t), n = !1
                        },
                        peek: function(t) {
                            return !n && o(), void 0 === t && (t = r.length - 1), r[t]
                        },
                        pop: function() {
                            return !n && o(), r.pop()
                        },
                        size: function() {
                            return r.length
                        },
                        map: function(t) {
                            return r.map(t)
                        },
                        debug: function() {
                            return !n && o(), r
                        }
                    }
                }

                function e(t, r, n, o, e, i, u) {
                    this.r1 = t, this.r2 = r, this.g1 = n, this.g2 = o, this.b1 = e, this.b2 = i, this.histo = u
                }

                function i() {
                    this.vboxes = new n(function(t, r) {
                        return o.naturalOrder(t.vbox.count() * t.vbox.volume(), r.vbox.count() * r.vbox.volume())
                    })
                }
                return e.prototype = {
                    volume: function(t) {
                        return (!this._volume || t) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(t) {
                        var n = this.histo;
                        if (!this._count_set || t) {
                            var o, e, i, u = 0;
                            for (o = this.r1; o <= this.r2; o++)
                                for (e = this.g1; e <= this.g2; e++)
                                    for (i = this.b1; i <= this.b2; i++) u += n[r(o, e, i)] || 0;
                            this._count = u, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new e(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(t) {
                        var n = this.histo;
                        if (!this._avg || t) {
                            var o, e, i, u, c = 0,
                                a = 8,
                                s = 0,
                                f = 0,
                                p = 0;
                            for (e = this.r1; e <= this.r2; e++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (u = this.b1; u <= this.b2; u++) c += o = n[r(e, i, u)] || 0, s += o * (e + .5) * a, f += o * (i + .5) * a, p += o * (u + .5) * a;
                            c ? this._avg = [~~(s / c), ~~(f / c), ~~(p / c)] : this._avg = [~~(a * (this.r1 + this.r2 + 1) / 2), ~~(a * (this.g1 + this.g2 + 1) / 2), ~~(a * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(r) {
                        var n = r[0] >> t;
                        return gval = r[1] >> t, bval = r[2] >> t, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, i.prototype = {
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
                        for (var r, n, o, e = this.vboxes, i = 0; i < e.size(); i++)((n = Math.sqrt(Math.pow(t[0] - e.peek(i).color[0], 2) + Math.pow(t[1] - e.peek(i).color[1], 2) + Math.pow(t[2] - e.peek(i).color[2], 2))) < r || void 0 === r) && (r = n, o = e.peek(i).color);
                        return o
                    },
                    forcebw: function() {
                        var t = this.vboxes;
                        t.sort(function(t, r) {
                            return o.naturalOrder(o.sum(t.color), o.sum(r.color))
                        });
                        var r = t[0].color;
                        r[0] < 5 && r[1] < 5 && r[2] < 5 && (t[0].color = [0, 0, 0]);
                        var n = t.length - 1,
                            e = t[n].color;
                        e[0] > 251 && e[1] > 251 && e[2] > 251 && (t[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(u, c) {
                        if (!u.length || c < 2 || c > 256) return !1;
                        var a, s, f, p, h, v, l, b, y, _, x, g, d, m, j, w, O = (a = u, h = Array(32768), a.forEach(function(n) {
                                f = n[0] >> t, p = n[1] >> t, h[s = r(f, p, n[2] >> t)] = (h[s] || 0) + 1
                            }), h),
                            A = 0;
                        O.forEach(function() {
                            A++
                        });
                        var z = (v = u, l = O, x = 1e6, g = 0, d = 1e6, m = 0, j = 1e6, w = 0, v.forEach(function(r) {
                                b = r[0] >> t, y = r[1] >> t, _ = r[2] >> t, b < x ? x = b : b > g && (g = b), y < d ? d = y : y > m && (m = y), _ < j ? j = _ : _ > w && (w = _)
                            }), new e(x, g, d, m, j, w, l)),
                            T = new n(function(t, r) {
                                return o.naturalOrder(t.count(), r.count())
                            });

                        function k(t, n) {
                            for (var e, i = 1, u = 0; u < 1e3;) {
                                if (!(e = t.pop()).count()) {
                                    t.push(e), u++;
                                    continue
                                }
                                var c = function(t, n) {
                                        if (n.count()) {
                                            var e = n.r2 - n.r1 + 1,
                                                i = n.g2 - n.g1 + 1,
                                                u = n.b2 - n.b1 + 1,
                                                c = o.max([e, i, u]);
                                            if (1 == n.count()) return [n.copy()];
                                            var a, s, f, p, h, v = 0,
                                                l = [],
                                                b = [];
                                            if (c == e)
                                                for (a = n.r1; a <= n.r2; a++) {
                                                    for (p = 0, s = n.g1; s <= n.g2; s++)
                                                        for (f = n.b1; f <= n.b2; f++) p += t[h = r(a, s, f)] || 0;
                                                    v += p, l[a] = v
                                                } else if (c == i)
                                                    for (a = n.g1; a <= n.g2; a++) {
                                                        for (p = 0, s = n.r1; s <= n.r2; s++)
                                                            for (f = n.b1; f <= n.b2; f++) p += t[h = r(s, a, f)] || 0;
                                                        v += p, l[a] = v
                                                    } else
                                                        for (a = n.b1; a <= n.b2; a++) {
                                                            for (p = 0, s = n.r1; s <= n.r2; s++)
                                                                for (f = n.g1; f <= n.g2; f++) p += t[h = r(s, f, a)] || 0;
                                                            v += p, l[a] = v
                                                        }
                                            return l.forEach(function(t, r) {
                                                b[r] = v - t
                                            }), y(c == e ? "r" : c == i ? "g" : "b")
                                        }

                                        function y(t) {
                                            var r, o, e, i, u, c = t + "1",
                                                s = t + "2",
                                                f = 0;
                                            for (a = n[c]; a <= n[s]; a++)
                                                if (l[a] > v / 2) {
                                                    for (e = n.copy(), i = n.copy(), r = a - n[c], u = r <= (o = n[s] - a) ? Math.min(n[s] - 1, ~~(a + o / 2)) : Math.max(n[c], ~~(a - 1 - r / 2)); !l[u];) u++;
                                                    for (f = b[u]; !f && l[u - 1];) f = b[--u];
                                                    return e[s] = u, i[c] = e[s] + 1, [e, i]
                                                }
                                        }
                                    }(O, e),
                                    a = c[0],
                                    s = c[1];
                                if (!a) return;
                                if (t.push(a), s && (t.push(s), i++), i >= n || u++ > 1e3) return
                            }
                        }
                        T.push(z), k(T, .75 * c);
                        for (var M = new n(function(t, r) {
                                return o.naturalOrder(t.count() * t.volume(), r.count() * r.volume())
                            }); T.size();) M.push(T.pop());
                        k(M, c - M.size());
                        for (var E = new i; M.size();) E.push(M.pop());
                        return E
                    }
                }
            }();
            t.exports = e.quantize
        },
        723251: function(t, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                thumbHashToApproximateAspectRatio: function() {
                    return o
                },
                rgbaToDataURL: function() {
                    return e
                },
                thumbHashToDataURL: function() {
                    return i
                }
            });

            function o(t) {
                let r = t[3],
                    n = 128 & t[2],
                    o = 128 & t[4];
                return (o ? n ? 5 : 7 : 7 & r) / (o ? 7 & r : n ? 5 : 7)
            }

            function e(t, r, n) {
                let o = 4 * t + 1,
                    e = 6 + r * (5 + o),
                    i = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, t >> 8, 255 & t, 0, 0, r >> 8, 255 & r, 8, 6, 0, 0, 0, 0, 0, 0, 0, e >>> 24, e >> 16 & 255, e >> 8 & 255, 255 & e, 73, 68, 65, 84, 120, 1],
                    u = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
                    c = 1,
                    a = 0;
                for (let t = 0, e = 0, u = o - 1; t < r; t++, u += o - 1)
                    for (i.push(t + 1 < r ? 0 : 1, 255 & o, o >> 8, 255 & ~o, o >> 8 ^ 255, 0), a = (a + c) % 65521; e < u; e++) {
                        let t = 255 & n[e];
                        i.push(t), a = (a + (c = (c + t) % 65521)) % 65521
                    }
                for (let [t, r] of(i.push(a >> 8, 255 & a, c >> 8, 255 & c, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
                        [12, 29],
                        [37, 41 + e]
                    ])) {
                    let n = -1;
                    for (let o = t; o < r; o++) n ^= i[o], n = (n = n >>> 4 ^ u[15 & n]) >>> 4 ^ u[15 & n];
                    n = ~n, i[r++] = n >>> 24, i[r++] = n >> 16 & 255, i[r++] = n >> 8 & 255, i[r++] = 255 & n
                }
                return "data:image/png;base64," + btoa(String.fromCharCode(...i))
            }

            function i(t) {
                let r = function(t) {
                    let {
                        PI: r,
                        min: n,
                        max: e,
                        cos: i,
                        round: u
                    } = Math, c = t[0] | t[1] << 8 | t[2] << 16, a = t[3] | t[4] << 8, s = (63 & c) / 63, f = (c >> 6 & 63) / 31.5 - 1, p = (c >> 12 & 63) / 31.5 - 1, h = c >> 23, v = (a >> 3 & 63) / 63, l = (a >> 9 & 63) / 63, b = a >> 15, y = e(3, b ? h ? 5 : 7 : 7 & a), _ = e(3, b ? 7 & a : h ? 5 : 7), x = h ? (15 & t[5]) / 15 : 1, g = (t[5] >> 4) / 15, d = h ? 6 : 5, m = 0, j = (r, n, o) => {
                        let e = [];
                        for (let i = 0; i < n; i++)
                            for (let u = i ? 0 : 1; u * n < r * (n - i); u++) e.push(((t[d + (m >> 1)] >> ((1 & m++) << 2) & 15) / 7.5 - 1) * o);
                        return e
                    }, w = j(y, _, (c >> 18 & 31) / 31), O = j(3, 3, 1.25 * v), A = j(3, 3, 1.25 * l), z = h && j(5, 5, g), T = o(t), k = u(T > 1 ? 32 : 32 * T), M = u(T > 1 ? 32 / T : 32), E = new Uint8Array(k * M * 4), C = [], P = [];
                    for (let t = 0, o = 0; t < M; t++)
                        for (let u = 0; u < k; u++, o += 4) {
                            let c = s,
                                a = f,
                                v = p,
                                l = x;
                            for (let t = 0, n = e(y, h ? 5 : 3); t < n; t++) C[t] = i(r / k * (u + .5) * t);
                            for (let n = 0, o = e(_, h ? 5 : 3); n < o; n++) P[n] = i(r / M * (t + .5) * n);
                            for (let t = 0, r = 0; t < _; t++)
                                for (let n = t ? 0 : 1, o = 2 * P[t]; n * _ < y * (_ - t); n++, r++) c += w[r] * C[n] * o;
                            for (let t = 0, r = 0; t < 3; t++)
                                for (let n = t ? 0 : 1, o = 2 * P[t]; n < 3 - t; n++, r++) {
                                    let t = C[n] * o;
                                    a += O[r] * t, v += A[r] * t
                                }
                            if (h)
                                for (let t = 0, r = 0; t < 5; t++)
                                    for (let n = t ? 0 : 1, o = 2 * P[t]; n < 5 - t; n++, r++) l += z[r] * C[n] * o;
                            let b = c - 2 / 3 * a,
                                g = (3 * c - b + v) / 2,
                                d = g - v;
                            E[o] = e(0, 255 * n(1, g)), E[o + 1] = e(0, 255 * n(1, d)), E[o + 2] = e(0, 255 * n(1, b)), E[o + 3] = e(0, 255 * n(1, l))
                        }
                    return {
                        w: k,
                        h: M,
                        rgba: E
                    }
                }(t);
                return e(r.w, r.h, r.rgba)
            }
        }
    }
]);