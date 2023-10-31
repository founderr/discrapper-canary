(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["97779"], {
        78349: function(e, t, n) {
            "use strict";
            e.exports.parse = function(e) {
                var t = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!t) return null;
                t.shift();
                var n = null,
                    r = [];
                t[2] && (n = (l = t[2].split("-")).shift(), r = l);
                var i = [];
                t[5] && (i = t[5].split("-")).shift();
                var a = [];
                if (t[6]) {
                    (l = t[6].split("-")).shift();
                    for (var l, o, u = []; l.length;) {
                        var s = l.shift();
                        1 === s.length ? o ? (a.push({
                            singleton: o,
                            extension: u
                        }), o = s, u = []) : o = s : u.push(s)
                    }
                    a.push({
                        singleton: o,
                        extension: u
                    })
                }
                var c = [];
                t[7] && ((c = t[7].split("-")).shift(), c.shift());
                var d = [];
                return t[8] && (d = t[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: n,
                            extlang: r
                        },
                        script: t[3] || null,
                        region: t[4] || null,
                        variant: i,
                        extension: a,
                        privateuse: c
                    },
                    privateuse: d,
                    grandfathered: {
                        irregular: t[0] || null,
                        regular: t[1] || null
                    }
                }
            }
        },
        526504: function(e, t, n) {
            "use strict";
            var r = "%[a-f0-9]{2}",
                i = RegExp("(" + r + ")|([^%]+?)", "gi"),
                a = RegExp("(" + r + ")+", "gi");
            e.exports = function(e) {
                if ("string" != typeof e) throw TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
                try {
                    return e = e.replace(/\+/g, " "), decodeURIComponent(e)
                } catch (t) {
                    return function(e) {
                        for (var t = {
                                "%FE%FF": "��",
                                "%FF%FE": "��"
                            }, n = a.exec(e); n;) {
                            try {
                                t[n[0]] = decodeURIComponent(n[0])
                            } catch (e) {
                                var r = function(e) {
                                    try {
                                        return decodeURIComponent(e)
                                    } catch (r) {
                                        for (var t = e.match(i) || [], n = 1; n < t.length; n++) t = (e = (function e(t, n) {
                                            try {
                                                return [decodeURIComponent(t.join(""))]
                                            } catch (e) {}
                                            if (1 === t.length) return t;
                                            n = n || 1;
                                            var r = t.slice(0, n),
                                                i = t.slice(n);
                                            return Array.prototype.concat.call([], e(r), e(i))
                                        })(t, n).join("")).match(i) || [];
                                        return e
                                    }
                                }(n[0]);
                                r !== n[0] && (t[n[0]] = r)
                            }
                            n = a.exec(e)
                        }
                        t["%C2"] = "�";
                        for (var l = Object.keys(t), o = 0; o < l.length; o++) {
                            var u = l[o];
                            e = e.replace(RegExp(u, "g"), t[u])
                        }
                        return e
                    }(e)
                }
            }
        },
        458389: function(e, t, n) {
            var r = n("594140"),
                i = n("564414"),
                a = n("725502"),
                l = n("591350"),
                o = n("476540"),
                u = n("381178"),
                s = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var n = a(e),
                    c = !n && i(e),
                    d = !n && !c && l(e),
                    E = !n && !c && !d && u(e),
                    f = n || c || d || E,
                    _ = f ? r(e.length, String) : [],
                    I = _.length;
                for (var p in e)(t || s.call(e, p)) && !(f && ("length" == p || d && ("offset" == p || "parent" == p) || E && ("buffer" == p || "byteLength" == p || "byteOffset" == p) || o(p, I))) && _.push(p);
                return _
            }
        },
        562132: function(e, t, n) {
            var r = n("33426"),
                i = n("136047"),
                a = n("270879"),
                l = {};
            l["[object Float32Array]"] = l["[object Float64Array]"] = l["[object Int8Array]"] = l["[object Int16Array]"] = l["[object Int32Array]"] = l["[object Uint8Array]"] = l["[object Uint8ClampedArray]"] = l["[object Uint16Array]"] = l["[object Uint32Array]"] = !0, l["[object Arguments]"] = l["[object Array]"] = l["[object ArrayBuffer]"] = l["[object Boolean]"] = l["[object DataView]"] = l["[object Date]"] = l["[object Error]"] = l["[object Function]"] = l["[object Map]"] = l["[object Number]"] = l["[object Object]"] = l["[object RegExp]"] = l["[object Set]"] = l["[object String]"] = l["[object WeakMap]"] = !1;
            e.exports = function(e) {
                return a(e) && i(e.length) && !!l[r(e)]
            }
        },
        205873: function(e, t, n) {
            var r = n("733228"),
                i = n("541349"),
                a = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!r(e)) return i(e);
                var t = [];
                for (var n in Object(e)) a.call(e, n) && "constructor" != n && t.push(n);
                return t
            }
        },
        594140: function(e, t, n) {
            e.exports = function(e, t) {
                for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                return r
            }
        },
        492692: function(e, t, n) {
            e.exports = function(e) {
                return function(t) {
                    return e(t)
                }
            }
        },
        733228: function(e, t, n) {
            var r = Object.prototype;
            e.exports = function(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || r)
            }
        },
        541349: function(e, t, n) {
            var r = n("761197")(Object.keys, Object);
            e.exports = r
        },
        276440: function(e, t, n) {
            e = n.nmd(e);
            var r = n("447414"),
                i = "object" == typeof t && t && !t.nodeType && t,
                a = i && "object" == typeof e && e && !e.nodeType && e,
                l = a && a.exports === i && r.process,
                o = function() {
                    try {
                        var e = a && a.require && a.require("util").types;
                        if (e) return e;
                        return l && l.binding && l.binding("util")
                    } catch (e) {}
                }();
            e.exports = o
        },
        761197: function(e, t, n) {
            e.exports = function(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }
        },
        591350: function(e, t, n) {
            e = n.nmd(e);
            var r = n("690516"),
                i = n("221386"),
                a = "object" == typeof t && t && !t.nodeType && t,
                l = a && "object" == typeof e && e && !e.nodeType && e,
                o = l && l.exports === a ? r.Buffer : void 0,
                u = o ? o.isBuffer : void 0;
            e.exports = u || i
        },
        381178: function(e, t, n) {
            var r = n("562132"),
                i = n("492692"),
                a = n("276440"),
                l = a && a.isTypedArray,
                o = l ? i(l) : r;
            e.exports = o
        },
        466731: function(e, t, n) {
            var r = n("458389"),
                i = n("205873"),
                a = n("603108");
            e.exports = function(e) {
                return a(e) ? r(e) : i(e)
            }
        },
        221386: function(e, t, n) {
            e.exports = function() {
                return !1
            }
        },
        766811: function(e, t, n) {
            "use strict";
            var r = Object.getOwnPropertySymbols,
                i = Object.prototype.hasOwnProperty,
                a = Object.prototype.propertyIsEnumerable;
            e.exports = ! function() {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                    var r = Object.getOwnPropertyNames(t).map(function(e) {
                        return t[e]
                    });
                    if ("0123456789" !== r.join("")) return !1;
                    var i = {};
                    if ("abcdefghijklmnopqrst".split("").forEach(function(e) {
                            i[e] = e
                        }), "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, i)).join("")) return !1;
                    return !0
                } catch (e) {
                    return !1
                }
            }() ? function(e, t) {
                for (var n, l, o = function(e) {
                        if (null == e) throw TypeError("Object.assign cannot be called with null or undefined");
                        return Object(e)
                    }(e), u = 1; u < arguments.length; u++) {
                    for (var s in n = Object(arguments[u]), n) i.call(n, s) && (o[s] = n[s]);
                    if (r) {
                        l = r(n);
                        for (var c = 0; c < l.length; c++) a.call(n, l[c]) && (o[l[c]] = n[l[c]])
                    }
                }
                return o
            } : Object.assign
        },
        48648: function(e, t, n) {
            if (!r) var r = {
                map: function(e, t) {
                    var n = {};
                    return t ? e.map(function(e, r) {
                        return n.index = r, t.call(n, e)
                    }) : e.slice()
                },
                naturalOrder: function(e, t) {
                    return e < t ? -1 : e > t ? 1 : 0
                },
                sum: function(e, t) {
                    var n = {};
                    return e.reduce(t ? function(e, r, i) {
                        return n.index = i, e + t.call(n, r)
                    } : function(e, t) {
                        return e + t
                    }, 0)
                },
                max: function(e, t) {
                    return Math.max.apply(null, t ? r.map(e, t) : e)
                }
            };
            var i = function() {
                var e = 3;

                function t(e, t, n) {
                    return (e << 10) + (t << 5) + n
                }

                function n(e) {
                    var t = [],
                        n = !1;

                    function r() {
                        t.sort(e), n = !0
                    }
                    return {
                        push: function(e) {
                            t.push(e), n = !1
                        },
                        peek: function(e) {
                            return !n && r(), void 0 === e && (e = t.length - 1), t[e]
                        },
                        pop: function() {
                            return !n && r(), t.pop()
                        },
                        size: function() {
                            return t.length
                        },
                        map: function(e) {
                            return t.map(e)
                        },
                        debug: function() {
                            return !n && r(), t
                        }
                    }
                }

                function i(e, t, n, r, i, a, l) {
                    this.r1 = e, this.r2 = t, this.g1 = n, this.g2 = r, this.b1 = i, this.b2 = a, this.histo = l
                }

                function a() {
                    this.vboxes = new n(function(e, t) {
                        return r.naturalOrder(e.vbox.count() * e.vbox.volume(), t.vbox.count() * t.vbox.volume())
                    })
                }
                return i.prototype = {
                    volume: function(e) {
                        return (!this._volume || e) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(e) {
                        var n = this.histo;
                        if (!this._count_set || e) {
                            var r, i, a, l = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (a = this.b1; a <= this.b2; a++) l += n[t(r, i, a)] || 0;
                            this._count = l, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new i(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(e) {
                        var n = this.histo;
                        if (!this._avg || e) {
                            var r, i, a, l, o = 0,
                                u = 8,
                                s = 0,
                                c = 0,
                                d = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (a = this.g1; a <= this.g2; a++)
                                    for (l = this.b1; l <= this.b2; l++) o += r = n[t(i, a, l)] || 0, s += r * (i + .5) * u, c += r * (a + .5) * u, d += r * (l + .5) * u;
                            o ? this._avg = [~~(s / o), ~~(c / o), ~~(d / o)] : this._avg = [~~(u * (this.r1 + this.r2 + 1) / 2), ~~(u * (this.g1 + this.g2 + 1) / 2), ~~(u * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(t) {
                        var n = t[0] >> e;
                        return gval = t[1] >> e, bval = t[2] >> e, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, a.prototype = {
                    push: function(e) {
                        this.vboxes.push({
                            vbox: e,
                            color: e.avg()
                        })
                    },
                    palette: function() {
                        return this.vboxes.map(function(e) {
                            return e.color
                        })
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
                        for (var t, n, r, i = this.vboxes, a = 0; a < i.size(); a++)((n = Math.sqrt(Math.pow(e[0] - i.peek(a).color[0], 2) + Math.pow(e[1] - i.peek(a).color[1], 2) + Math.pow(e[2] - i.peek(a).color[2], 2))) < t || void 0 === t) && (t = n, r = i.peek(a).color);
                        return r
                    },
                    forcebw: function() {
                        var e = this.vboxes;
                        e.sort(function(e, t) {
                            return r.naturalOrder(r.sum(e.color), r.sum(t.color))
                        });
                        var t = e[0].color;
                        t[0] < 5 && t[1] < 5 && t[2] < 5 && (e[0].color = [0, 0, 0]);
                        var n = e.length - 1,
                            i = e[n].color;
                        i[0] > 251 && i[1] > 251 && i[2] > 251 && (e[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(l, o) {
                        if (!l.length || o < 2 || o > 256) return !1;
                        var u, s, c, d, E, f, _, I, p, T, h, A, O, S, N, C, g = (u = l, E = Array(32768), u.forEach(function(n) {
                                c = n[0] >> e, d = n[1] >> e, E[s = t(c, d, n[2] >> e)] = (E[s] || 0) + 1
                            }), E),
                            R = 0;
                        g.forEach(function() {
                            R++
                        });
                        var v = (f = l, _ = g, h = 1e6, A = 0, O = 1e6, S = 0, N = 1e6, C = 0, f.forEach(function(t) {
                                I = t[0] >> e, p = t[1] >> e, T = t[2] >> e, I < h ? h = I : I > A && (A = I), p < O ? O = p : p > S && (S = p), T < N ? N = T : T > C && (C = T)
                            }), new i(h, A, O, S, N, C, _)),
                            L = new n(function(e, t) {
                                return r.naturalOrder(e.count(), t.count())
                            });

                        function D(e, n) {
                            for (var i, a = 1, l = 0; l < 1e3;) {
                                if (!(i = e.pop()).count()) {
                                    e.push(i), l++;
                                    continue
                                }
                                var o = function(e, n) {
                                        if (n.count()) {
                                            var i = n.r2 - n.r1 + 1,
                                                a = n.g2 - n.g1 + 1,
                                                l = n.b2 - n.b1 + 1,
                                                o = r.max([i, a, l]);
                                            if (1 == n.count()) return [n.copy()];
                                            var u, s, c, d, E, f = 0,
                                                _ = [],
                                                I = [];
                                            if (o == i)
                                                for (u = n.r1; u <= n.r2; u++) {
                                                    for (d = 0, s = n.g1; s <= n.g2; s++)
                                                        for (c = n.b1; c <= n.b2; c++) d += e[E = t(u, s, c)] || 0;
                                                    f += d, _[u] = f
                                                } else if (o == a)
                                                    for (u = n.g1; u <= n.g2; u++) {
                                                        for (d = 0, s = n.r1; s <= n.r2; s++)
                                                            for (c = n.b1; c <= n.b2; c++) d += e[E = t(s, u, c)] || 0;
                                                        f += d, _[u] = f
                                                    } else
                                                        for (u = n.b1; u <= n.b2; u++) {
                                                            for (d = 0, s = n.r1; s <= n.r2; s++)
                                                                for (c = n.g1; c <= n.g2; c++) d += e[E = t(s, c, u)] || 0;
                                                            f += d, _[u] = f
                                                        }
                                            return _.forEach(function(e, t) {
                                                I[t] = f - e
                                            }), p(o == i ? "r" : o == a ? "g" : "b")
                                        }

                                        function p(e) {
                                            var t, r, i, a, l, o = e + "1",
                                                s = e + "2",
                                                c = 0;
                                            for (u = n[o]; u <= n[s]; u++)
                                                if (_[u] > f / 2) {
                                                    for (i = n.copy(), a = n.copy(), t = u - n[o], l = t <= (r = n[s] - u) ? Math.min(n[s] - 1, ~~(u + r / 2)) : Math.max(n[o], ~~(u - 1 - t / 2)); !_[l];) l++;
                                                    for (c = I[l]; !c && _[l - 1];) c = I[--l];
                                                    return i[s] = l, a[o] = i[s] + 1, [i, a]
                                                }
                                        }
                                    }(g, i),
                                    u = o[0],
                                    s = o[1];
                                if (!u) return;
                                if (e.push(u), s && (e.push(s), a++), a >= n || l++ > 1e3) return
                            }
                        }
                        L.push(v), D(L, .75 * o);
                        for (var m = new n(function(e, t) {
                                return r.naturalOrder(e.count() * e.volume(), t.count() * t.volume())
                            }); L.size();) m.push(L.pop());
                        D(m, o - m.size());
                        for (var M = new a; m.size();) M.push(m.pop());
                        return M
                    }
                }
            }();
            e.exports = i.quantize
        },
        730290: function(e, t, n) {
            "use strict";
            var r = n("272074"),
                i = n("766811"),
                a = n("526504");

            function l(e, t) {
                return t.encode ? t.strict ? r(e) : encodeURIComponent(e) : e
            }
            t.extract = function(e) {
                return e.split("?")[1] || ""
            }, t.parse = function(e, t) {
                var n = function(e) {
                        var t;
                        switch (e.arrayFormat) {
                            case "index":
                                return function(e, n, r) {
                                    if (t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), !t) {
                                        r[e] = n;
                                        return
                                    }
                                    void 0 === r[e] && (r[e] = {}), r[e][t[1]] = n
                                };
                            case "bracket":
                                return function(e, n, r) {
                                    if (t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t) {
                                        if (void 0 === r[e]) {
                                            r[e] = [n];
                                            return
                                        }
                                    } else {
                                        r[e] = n;
                                        return
                                    }
                                    r[e] = [].concat(r[e], n)
                                };
                            default:
                                return function(e, t, n) {
                                    if (void 0 === n[e]) {
                                        n[e] = t;
                                        return
                                    }
                                    n[e] = [].concat(n[e], t)
                                }
                        }
                    }(t = i({
                        arrayFormat: "none"
                    }, t)),
                    r = Object.create(null);
                return "string" == typeof e && (e = e.trim().replace(/^(\?|#|&)/, "")) ? (e.split("&").forEach(function(e) {
                    var t = e.replace(/\+/g, " ").split("="),
                        i = t.shift(),
                        l = t.length > 0 ? t.join("=") : void 0;
                    l = void 0 === l ? null : a(l), n(a(i), l, r)
                }), Object.keys(r).sort().reduce(function(e, t) {
                    var n = r[t];
                    return n && "object" == typeof n && !Array.isArray(n) ? e[t] = function e(t) {
                        return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort(function(e, t) {
                            return Number(e) - Number(t)
                        }).map(function(e) {
                            return t[e]
                        }) : t
                    }(n) : e[t] = n, e
                }, Object.create(null))) : r
            }, t.stringify = function(e, t) {
                var n = function(e) {
                    switch (e.arrayFormat) {
                        case "index":
                            return function(t, n, r) {
                                return null === n ? [l(t, e), "[", r, "]"].join("") : [l(t, e), "[", l(r, e), "]=", l(n, e)].join("")
                            };
                        case "bracket":
                            return function(t, n) {
                                return null === n ? l(t, e) : [l(t, e), "[]=", l(n, e)].join("")
                            };
                        default:
                            return function(t, n) {
                                return null === n ? l(t, e) : [l(t, e), "=", l(n, e)].join("")
                            }
                    }
                }(t = i({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none"
                }, t));
                return e ? Object.keys(e).sort().map(function(r) {
                    var i = e[r];
                    if (void 0 === i) return "";
                    if (null === i) return l(r, t);
                    if (Array.isArray(i)) {
                        var a = [];
                        return i.slice().forEach(function(e) {
                            void 0 !== e && a.push(n(r, e, a.length))
                        }), a.join("&")
                    }
                    return l(r, t) + "=" + l(i, t)
                }).filter(function(e) {
                    return e.length > 0
                }).join("&") : ""
            }
        },
        48174: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            })
        },
        775560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return i.default
                },
                useLazyValue: function() {
                    return a.default
                }
            });
            var r = n("14716"),
                i = n("745510"),
                a = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("884691");

            function i() {
                let [, e] = (0, r.useState)({});
                return (0, r.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("884691");
            let i = {};

            function a(e) {
                let t = (0, r.useRef)(i);
                return t.current === i && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("884691"),
                i = n("48174");
            let a = [];

            function l(e, t) {
                let n = (0, r.useRef)(),
                    l = (0, r.useRef)(a);
                return l.current === a ? (n.current = e(), l.current = t) : !(0, i.default)(t, l.current) && (n.current = e(), l.current = t), n.current
            }
        },
        272074: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
                    return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                })
            }
        },
        376507: function(e, t, n) {
            "use strict";

            function r(e) {
                let t = "==".slice(0, (4 - e.length % 4) % 4),
                    n = e.replace(/-/g, "+").replace(/_/g, "/") + t,
                    r = atob(n),
                    i = new ArrayBuffer(r.length),
                    a = new Uint8Array(i);
                for (let e = 0; e < r.length; e++) a[e] = r.charCodeAt(e);
                return i
            }

            function i(e) {
                let t = new Uint8Array(e),
                    n = "";
                for (let e of t) n += String.fromCharCode(e);
                let r = btoa(n),
                    i = r.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
                return i
            }
            n.r(t), n.d(t, {
                create: function() {
                    return h
                },
                get: function() {
                    return A
                }
            });
            var a = "copy",
                l = "convert";

            function o(e, t, n) {
                if (t === a) return n;
                if (t === l) return e(n);
                if (t instanceof Array) return n.map(n => o(e, t[0], n));
                if (t instanceof Object) {
                    let r = {};
                    for (let [i, a] of Object.entries(t)) {
                        if (a.derive) {
                            let e = a.derive(n);
                            void 0 !== e && (n[i] = e)
                        }
                        if (!(i in n)) {
                            if (a.required) throw Error("Missing key: ".concat(i));
                            continue
                        }
                        if (null == n[i]) {
                            r[i] = null;
                            continue
                        }
                        r[i] = o(e, a.schema, n[i])
                    }
                    return r
                }
            }

            function u(e, t) {
                return {
                    required: !0,
                    schema: e,
                    derive: t
                }
            }

            function s(e) {
                return {
                    required: !0,
                    schema: e
                }
            }

            function c(e) {
                return {
                    required: !1,
                    schema: e
                }
            }
            var d = {
                    type: s(a),
                    id: s(l),
                    transports: c(a)
                },
                E = {
                    appid: c(a),
                    appidExclude: c(a),
                    credProps: c(a)
                },
                f = {
                    appid: c(a),
                    appidExclude: c(a),
                    credProps: c(a)
                },
                _ = {
                    publicKey: s({
                        rp: s(a),
                        user: s({
                            id: s(l),
                            name: s(a),
                            displayName: s(a)
                        }),
                        challenge: s(l),
                        pubKeyCredParams: s(a),
                        timeout: c(a),
                        excludeCredentials: c([d]),
                        authenticatorSelection: c(a),
                        attestation: c(a),
                        extensions: c(E)
                    }),
                    signal: c(a)
                },
                I = {
                    type: s(a),
                    id: s(a),
                    rawId: s(l),
                    authenticatorAttachment: c(a),
                    response: s({
                        clientDataJSON: s(l),
                        attestationObject: s(l),
                        transports: u(a, e => {
                            var t;
                            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
                        })
                    }),
                    clientExtensionResults: u(f, e => e.getClientExtensionResults())
                },
                p = {
                    mediation: c(a),
                    publicKey: s({
                        challenge: s(l),
                        timeout: c(a),
                        rpId: c(a),
                        allowCredentials: c([d]),
                        userVerification: c(a),
                        extensions: c(E)
                    }),
                    signal: c(a)
                },
                T = {
                    type: s(a),
                    id: s(a),
                    rawId: s(l),
                    authenticatorAttachment: c(a),
                    response: s({
                        clientDataJSON: s(l),
                        authenticatorData: s(l),
                        signature: s(l),
                        userHandle: s(l)
                    }),
                    clientExtensionResults: u(f, e => e.getClientExtensionResults())
                };
            async function h(e) {
                let t = await navigator.credentials.create(o(r, _, e));
                return o(i, I, t)
            }
            async function A(e) {
                let t = await navigator.credentials.get(o(r, p, e));
                return o(i, T, t)
            }
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return i
                },
                popLayer: function() {
                    return a
                },
                popAllLayers: function() {
                    return l
                }
            });
            var r = n("913144");

            function i(e) {
                r.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function a() {
                r.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function l() {
                r.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        775433: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchSubscriptionPlansForSKU: function() {
                    return d
                },
                fetchSubscriptionPlansBySKUs: function() {
                    return E
                },
                fetchPremiumSubscriptionPlans: function() {
                    return f
                },
                resetSubscriptionPlanData: function() {
                    return _
                }
            });
            var r = n("872717"),
                i = n("913144"),
                a = n("333805"),
                l = n("160299"),
                o = n("745279"),
                u = n("850068"),
                s = n("49111"),
                c = n("646718");
            async function d(e, t, n, c, d) {
                i.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH",
                    skuId: e
                });
                try {
                    let a = {
                            url: s.Endpoints.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                            oldFormErrors: !0
                        },
                        o = {};
                    null != t && (o.country_code = t), null != n && (o.payment_source_id = n), null != c && (o.include_unpublished = c), null != d && (o.revenue_surface = d), a.query = o, !l.default.ipCountryCodeLoaded && await (0, u.fetchIpCountryCode)();
                    let E = await r.default.get(a);
                    i.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                        skuId: e,
                        subscriptionPlans: E.body
                    })
                } catch (t) {
                    throw i.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                        skuId: e
                    }), (0, o.captureBillingException)(t), new a.default(t)
                }
            }

            function E(e, t) {
                return Promise.all(e.filter(e => e !== c.PremiumSubscriptionSKUs.NONE).map(e => d(e, t)))
            }

            function f(e, t, n) {
                return Promise.all(c.ACTIVE_PREMIUM_SKUS.filter(e => e !== c.PremiumSubscriptionSKUs.NONE).map(r => d(r, e, t, void 0, n)))
            }

            function _() {
                i.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        79112: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var r = n("872717"),
                i = n("95410"),
                a = n("913144"),
                l = n("211895"),
                o = n("26092"),
                u = n("599110"),
                s = n("315102"),
                c = n("730622"),
                d = n("49111"),
                E = n("191349"),
                f = n("782340"),
                _ = {
                    open() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                openWithoutBackstack: !1
                            };
                        (0, l.default)(e, t, n)
                    },
                    init: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_INIT",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    close() {
                        let e = o.default.onClose;
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), null != e && e()
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SET_SECTION",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    clearSubsection(e) {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                            forSection: e
                        })
                    },
                    clearScrollPosition(e) {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                            forSection: e
                        })
                    },
                    updateAccount(e) {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                            settings: e
                        })
                    },
                    submitComplete() {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                        })
                    },
                    reset() {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_RESET"
                        })
                    },
                    saveAccountChanges(e, t) {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT"
                        });
                        let {
                            username: n,
                            email: l,
                            emailToken: o,
                            password: _,
                            avatar: I,
                            newPassword: p,
                            discriminator: T
                        } = e, {
                            close: h
                        } = t;
                        return (0, c.default)(e => {
                            let t = {
                                    username: n,
                                    email: l,
                                    email_token: o,
                                    password: _,
                                    avatar: I,
                                    new_password: p,
                                    ...e,
                                    discriminator: null != T && "" !== T ? T : void 0
                                },
                                a = i.default.get(d.DEVICE_TOKEN),
                                u = (0, E.getDevicePushProvider)();
                            null != u && null != a && (t.push_provider = u, t.push_token = a);
                            let s = i.default.get(d.DEVICE_VOIP_TOKEN);
                            return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != s && (t.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = s), r.default.patch({
                                url: d.Endpoints.ME,
                                oldFormErrors: !0,
                                body: t
                            })
                        }, {
                            checkEnabled: !1,
                            modalProps: {
                                title: f.default.Messages.TWO_FA_CHANGE_ACCOUNT
                            },
                            hooks: {
                                onEarlyClose: () => a.default.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }).then(e => {
                            let t = e.body,
                                n = t.token;
                            return u.default.track(d.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, s.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, a.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), a.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != p && a.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: p
                            }), null != _ && null != p && a.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), h ? this.close() : this.submitComplete(), e
                        }, e => (a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: e.body
                        }), e))
                    }
                }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("37983"),
                i = n("884691"),
                a = n("414456"),
                l = n.n(a),
                o = n("77078"),
                u = n("782340"),
                s = n("347129");
            class c extends i.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: a,
                        error: c,
                        isLoading: d,
                        maxLength: E,
                        transitionState: f,
                        helpMessage: _,
                        retryPrompt: I,
                        retrySuccessMessage: p
                    } = this.props, {
                        code: T,
                        errorMessage: h,
                        retrySuccess: A
                    } = this.state, O = i.Children.count(a) > 0 ? (0, r.jsx)(o.Card, {
                        type: o.Card.Types.WARNING,
                        className: s.card,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: a
                        })
                    }) : null, S = null != I ? (0, r.jsxs)(o.Text, {
                        className: l(s.submitText, s.spacing),
                        variant: "text-sm/normal",
                        children: [(0, r.jsx)("br", {}), (0, r.jsx)(o.Clickable, {
                            className: l(s.spacing, s.link),
                            onClick: this.handleRetry,
                            children: (0, r.jsx)(o.Anchor, {
                                children: I
                            })
                        })]
                    }) : null, N = A ? (0, r.jsx)(o.Card, {
                        type: o.Card.Types.SUCCESS,
                        className: s.card,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: p
                        })
                    }) : null;
                    return (0, r.jsx)(o.ModalRoot, {
                        transitionState: f,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(o.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(o.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, r.jsxs)(o.ModalContent, {
                                children: [null != _ ? (0, r.jsx)(o.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: s.spacing,
                                    children: _
                                }) : null, O, N, (0, r.jsxs)(o.FormItem, {
                                    title: this.getLabelText(),
                                    className: s.spacing,
                                    children: [(0, r.jsx)(o.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != E ? E : 10,
                                        value: T,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(o.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: s.error,
                                        children: null != c ? c : h
                                    }) : null, S]
                                })]
                            }), (0, r.jsxs)(o.ModalFooter, {
                                children: [(0, r.jsx)(o.Button, {
                                    type: "submit",
                                    disabled: d || 0 === T.length,
                                    children: null != n ? n : u.default.Messages.CONFIRM
                                }), (0, r.jsx)(o.Button, {
                                    onClick: this.handleCancel,
                                    disabled: d,
                                    look: o.Button.Looks.LINK,
                                    color: o.Button.Colors.PRIMARY,
                                    children: u.default.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    }, this.setRef = e => {
                        this._input = e
                    }, this.getLabelText = () => {
                        var e;
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? u.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : u.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? u.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : u.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
                        var e;
                        return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes()
                    }, this.errorPresent = () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage, this.handleRetry = () => {
                        let {
                            onRetry: e
                        } = this.props;
                        null == e || e().then(() => this.setState({
                            retrySuccess: !0
                        }))
                    }, this.handleSubmit = e => {
                        e.preventDefault();
                        let {
                            handleSubmit: t,
                            onError: n
                        } = this.props;
                        t(this.state.code).catch(e => {
                            null != e.body && (null == n || n(e.body), e.body.message && this.setState({
                                errorMessage: e.body.message
                            }))
                        })
                    }, this.handleCancel = () => {
                        let {
                            onClose: e,
                            handleEarlyClose: t
                        } = this.props;
                        e(), null == t || t()
                    }, this.handleCodeChange = e => {
                        this.setState({
                            code: e
                        })
                    }
                }
            }
            c.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var d = c
        },
        276825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CheckmarkSmallIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M18.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        521590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GlobeEarthIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Zm-4.157 5.847A9.004 9.004 0 0 0 15 3.513V4a3 3 0 0 1-3 3h-.77a.23.23 0 0 0-.23.23A2.77 2.77 0 0 1 8.23 10a.23.23 0 0 0-.23.23v1.52c0 .138.112.25.25.25H13a3 3 0 0 1 3 3v.77c0 .127.103.23.23.23a2.77 2.77 0 0 1 2.613 1.847Zm-15.66-7.664A9.001 9.001 0 0 0 11 20.945v-2.714a.23.23 0 0 0-.23-.231h-.649A2.121 2.121 0 0 1 8 15.879c0-.563-.223-1.102-.621-1.5l-4.196-4.196Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        753809: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LinkIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...u
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M16.293 14.707a1 1 0 0 1 0-1.414l2.5-2.5a3.95 3.95 0 1 0-5.586-5.586l-2.5 2.5a1 1 0 1 1-1.414-1.414l2.5-2.5a5.95 5.95 0 1 1 8.414 8.414l-2.5 2.5a1 1 0 0 1-1.414 0ZM7.707 9.293a1 1 0 0 1 0 1.414l-2.5 2.5a3.95 3.95 0 0 0 5.586 5.586l2.5-2.5a1 1 0 1 1 1.414 1.414l-2.5 2.5a5.95 5.95 0 0 1-8.414-8.414l2.5-2.5a1 1 0 0 1 1.414 0Z",
                        className: o
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M14.707 10.707a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 1.414 1.414l4-4Z",
                        className: o
                    })]
                })
            }
        },
        434657: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LockIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M7 8H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2V6A5 5 0 0 0 7 6v2Zm8 0V6a3 3 0 1 0-6 0v2h6Zm-2 7.732A2 2 0 0 0 12 12a2 2 0 0 0-1 3.732V17a1 1 0 1 0 2 0v-1.268Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        173010: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RobotIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...u
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M7.889 13.458a1 1 0 0 1-1.783-.905L7 13l-.894-.447v-.002l.001-.001.002-.004.004-.007.01-.02a2.422 2.422 0 0 1 .139-.23 3.28 3.28 0 0 1 .406-.496C7.027 11.433 7.64 11 8.5 11c.859 0 1.473.434 1.832.793a3.278 3.278 0 0 1 .544.725l.011.02.004.008.002.004v.001s.002.002-.893.449l.895-.447a1 1 0 0 1-1.784.905l-.003-.005a1.28 1.28 0 0 0-.19-.246C8.777 13.067 8.64 13 8.5 13c-.141 0-.277.066-.418.207a1.28 1.28 0 0 0-.19.246l-.003.005ZM13.553 13.895a1 1 0 0 0 1.336-.437l.003-.005a1.28 1.28 0 0 1 .19-.246c.141-.14.277-.207.418-.207.141 0 .277.066.418.207a1.28 1.28 0 0 1 .19.246l.003.005a1 1 0 0 0 1.784-.905L17 13l.895-.447-.001-.002-.001-.001-.002-.004-.004-.007-.01-.02a2.565 2.565 0 0 0-.139-.23 3.278 3.278 0 0 0-.406-.496c-.359-.36-.973-.793-1.832-.793-.859 0-1.473.434-1.832.793a3.28 3.28 0 0 0-.544.725l-.011.02-.004.008-.002.004v.001s-.001.002.893.449l-.894-.447a1 1 0 0 0 .447 1.341Z",
                        className: o
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M12 21c5.523 0 10-1.858 10-6 0-5.587-2.803-10.07-4.26-11.673a1 1 0 1 0-1.48 1.346c.611.672 1.56 2.033 2.349 3.856C16.847 7.022 14.533 6 12 6 9.467 6 7.153 7.022 5.391 8.529 6.18 6.706 7.13 5.345 7.74 4.673a1 1 0 0 0-1.48-1.346C4.803 4.93 2 9.413 2 15c0 4.142 4.477 6 10 6Zm0-12c3.866 0 7 1.99 7 4.2S15.866 17 12 17s-7-1.59-7-3.8S8.134 9 12 9Z",
                        clipRule: "evenodd",
                        className: o
                    })]
                })
            }
        },
        877585: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ShieldIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M4.271 5.223A2.657 2.657 0 0 0 3 7.49v2.292a14.185 14.185 0 0 0 8.424 12.962c.367.163.785.163 1.152 0A14.185 14.185 0 0 0 21 9.782V7.49c0-.926-.482-1.784-1.271-2.267l-6.165-3.767a3 3 0 0 0-3.128 0L4.27 5.223ZM6 7.683l6-3.667V12H6.222A11.188 11.188 0 0 1 6 9.782v-2.1Zm6 12.01V12h5.778A11.187 11.187 0 0 1 12 19.692Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        599417: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("872717"),
                i = n("49111"),
                a = n("782340");
            class l extends r.default.V8APIError {
                constructor(e, t) {
                    super(e, t, null != t ? a.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: i.Links.STATUS,
                        details: "".concat(t)
                    }) : a.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: i.Links.STATUS
                    }))
                }
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("872717"),
                i = n("49111"),
                a = n("782340");
            class l extends r.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? a.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: i.Links.STATUS,
                        details: "".concat(t)
                    }) : a.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: i.Links.STATUS
                    }))
                }
            }
        },
        572544: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var r = n("746379"),
                i = n("394846"),
                a = n("913144"),
                l = n("970728"),
                o = n("79112"),
                u = n("389153"),
                s = n("412707"),
                c = n("139514"),
                d = n("312016"),
                E = n("374021"),
                f = n("398604"),
                _ = n("468560"),
                I = n("361572"),
                p = n("537325"),
                T = n("835174"),
                h = n("566271"),
                A = n("337543"),
                O = n("18494"),
                S = n("162771"),
                N = n("677099"),
                C = n("599110"),
                g = n("253981");
            n("545158");
            var R = n("49111");
            async function v(e, t) {
                await a.default.dispatch({
                    type: "INVITE_MODAL_OPEN",
                    invite: e,
                    code: t,
                    context: R.AppContext.APP
                })
            }
            async function L(e) {
                var t, n;
                let r = A.default.getInvite(e.code);
                if (null == r) {
                    let {
                        invite: t
                    } = await l.default.resolveInvite(e.code, "Markdown Link");
                    r = t
                }
                if (null == r) return;
                if (r.state === R.InviteStates.EXPIRED || r.state === R.InviteStates.BANNED || r.state === R.InviteStates.ERROR) {
                    await v(r, e.code);
                    return
                }
                let i = N.default.getFlattenedGuildIds(),
                    a = null === (n = r) || void 0 === n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id,
                    o = null != a && i.includes(a);
                o ? l.default.transitionToInviteSync(r) : await v(r, e.code)
            }
            let D = {
                skipExtensionCheck: void 0,
                analyticsLocations: []
            };

            function m(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D,
                    a = (0, d.findCodedLink)(e),
                    {
                        skipExtensionCheck: l
                    } = t;
                if (null != a && (a.type === c.CodedLinkType.INVITE || a.type === c.CodedLinkType.EMBEDDED_ACTIVITY_INVITE)) return e => (null == e || e.preventDefault(), L(a), !0);
                if (null != a && a.type === c.CodedLinkType.APP_DIRECTORY_PROFILE) return e => {
                    var t;
                    null == e || e.preventDefault();
                    let {
                        code: r
                    } = a, l = null !== (t = S.default.getGuildId()) && void 0 !== t ? t : void 0;
                    return C.default.track(R.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                        application_id: r,
                        device_platform: i.isMobile ? "mobile_web" : "desktop_web",
                        guild_id: l,
                        channel_id: O.default.getChannelId()
                    }), n.el("838093").then(n.bind(n, "838093")).then(e => {
                        let {
                            goToAppDirectory: t
                        } = e, {
                            ApplicationDirectoryViews: i
                        } = n("412707");
                        t({
                            view: i.APPLICATION,
                            applicationId: r,
                            guildId: l,
                            entrypoint: {
                                name: s.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL
                            }
                        })
                    }), !0
                };
                if (null != a && a.type === c.CodedLinkType.GUILD_PRODUCT) return e => {
                    null == e || e.preventDefault();
                    let [t, r] = a.code.split("-");
                    return n.el("573777").then(n.bind(n, "573777")).then(e => {
                        let {
                            openGuildProductLink: n
                        } = e;
                        n(t, r)
                    }), !0
                };
                let {
                    path: A,
                    hostname: N = "",
                    host: v,
                    query: m
                } = r.parse(e), M = g.default.isDiscordHostname(N) || window.location.host === v;
                if (M && (null == A ? void 0 : A.startsWith("/application-directory"))) {
                    let [, , e, t] = A.split("/"), r = null != e && (0, u.isSnowflake)(e) ? e : void 0;
                    return a => {
                        var l;
                        null == a || a.preventDefault();
                        let {
                            ApplicationDirectoryProfileSections: o
                        } = n("750947"), {
                            ApplicationDirectoryViews: u
                        } = n("412707"), c = null !== (l = S.default.getGuildId()) && void 0 !== l ? l : void 0, d = u.HOME;
                        return "search" === e && (d = u.SEARCH), null != r && (d = u.APPLICATION, C.default.track(R.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                            application_id: r,
                            device_platform: i.isMobile ? "mobile_web" : "desktop_web",
                            guild_id: c,
                            channel_id: O.default.getChannelId()
                        })), n.el("838093").then(n.bind(n, "838093")).then(e => {
                            let {
                                goToAppDirectory: n
                            } = e;
                            n({
                                view: d,
                                applicationId: r,
                                guildId: c,
                                applicationSection: (0, _.default)(o, t),
                                entrypoint: {
                                    name: s.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL
                                }
                            })
                        }), !0
                    }
                }
                if (null != A && M && g.default.isAppRoute(A)) {
                    let e = null != m ? {
                        search: m
                    } : null;
                    return t => (null == t || t.preventDefault(), (0, p.default)(A, e), !0)
                }
                if (null != A && M) {
                    let {
                        getOAuth2AuthorizeProps: t,
                        openOAuth2Modal: r
                    } = n("33942"), i = t(e);
                    if (null != i) return e => (null == e || e.preventDefault(), r(i), !0)
                }
                let P = (0, I.tryParseEventDetailsPath)(A);
                if (null != A && M && null != P) return e => {
                    null == e || e.preventDefault();
                    let t = S.default.getGuildId();
                    null != P.guildId && "" !== P.guildId && P.guildId !== t && (0, p.default)(R.Routes.CHANNEL(P.guildId));
                    let n = f.default.getGuildScheduledEvent(P.guildEventId);
                    return null != n && (0, E.openGuildEventDetails)({
                        eventId: n.id
                    }), !0
                };
                if (M && (null == A ? void 0 : A.startsWith("/settings/"))) {
                    let {
                        default: e
                    } = n("777523"), t = e(A);
                    if (null != t) return e => (null == e || e.preventDefault(), o.default.open(t.section, t.subsection, {
                        openWithoutBackstack: !1,
                        impressionSource: t.source
                    }), !0)
                }
                if (!l && null != (0, h.isSuspiciousDownload)(e)) return t => (null == t || t.preventDefault(), T.default.show(e), !0)
            }
        },
        212084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("605250"),
                i = n("802493");
            let a = new r.default("GuildStickers");
            var l = new class e {
                getSync(e) {
                    let t = performance.now(),
                        n = i.default.stickers(e).getMapEntriesSyncUnsafe(),
                        r = performance.now();
                    return a.log("synchronously loaded in ".concat(r - t, "ms (guilds: ").concat(n.length, ")")), n
                }
                handleConnectionOpen(e, t) {
                    for (let n of e.guilds) this.handleOneGuildCreate(n, t)
                }
                handleGuildCreate(e, t) {
                    this.handleOneGuildCreate(e.guild, t)
                }
                handleGuildUpdate(e, t) {
                    this.replace(e.guild.id, e.guild.stickers, t)
                }
                handleGuildDelete(e, t) {
                    this.delete(e.guild.id, t)
                }
                handleGuildStickersUpdate(e, t) {
                    this.replace(e.guildId, e.stickers, t)
                }
                handleBackgroundSync(e, t) {
                    e.promisesForBackgroundSyncToWaitOn.push(Promise.all(e.stickers.map(e => {
                        if ("unavailable" === e.dataMode) return Promise.resolve();
                        "full" === e.dataMode ? (a.verbose("Replacing ".concat(e.entities.length, " stickers for ").concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (a.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " stickers for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
                    })))
                }
                handleOneGuildCreate(e, t) {
                    null != e.stickers && this.replace(e.id, e.stickers, t), null != e.stickerUpdates && this.update(e.id, e.stickerUpdates.writes, e.stickerUpdates.deletes, t)
                }
                handleClearGuildCache(e) {
                    this.clear(e)
                }
                handleReset() {}
                replace(e, t, n) {
                    i.default.stickersTransaction(n).replaceAll(e, t)
                }
                delete(e, t) {
                    i.default.stickersTransaction(t).delete(e)
                }
                clear(e) {
                    i.default.stickersTransaction(e).delete()
                }
                update(e, t, n, r) {
                    let a = i.default.stickersTransaction(r);
                    for (let r of (a.putAll(e, t), n)) a.delete(e, r)
                }
                constructor() {
                    this.actions = {
                        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
                        CLEAR_GUILD_CACHE: (e, t) => this.handleClearGuildCache(t),
                        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
                        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                        GUILD_STICKERS_UPDATE: (e, t) => this.handleGuildStickersUpdate(e, t),
                        GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
                    }
                }
            }
        },
        317041: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TRUE_OPTION_NAME: function() {
                    return o
                },
                FALSE_OPTION_NAME: function() {
                    return u
                },
                BOOLEAN_CHOICES: function() {
                    return s
                },
                BuiltInSectionId: function() {
                    return i
                },
                DISCOVERY_COMMANDS_QUERY_LIMIT: function() {
                    return c
                },
                DISCOVERY_COMMANDS_FRECENCY_LIMIT: function() {
                    return d
                },
                DISCOVERY_COMMAND_FRECENCY_GATEWAY_LIMIT: function() {
                    return E
                },
                SUB_COMMAND_KEY_SEPARATOR: function() {
                    return f
                },
                APPLICATION_COMMAND_PERMISSIONS_LIMIT: function() {
                    return _
                },
                MAX_SUBCOMMAND_LEVEL: function() {
                    return I
                },
                CONTEXT_MENU_COMMANDS_QUERY_LIMIT: function() {
                    return p
                },
                CONTEXT_MENU_PLACEHOLDER_COUNT: function() {
                    return T
                },
                AUTOCOMPLETE_OPTION_DEBOUNCE_TIME: function() {
                    return h
                },
                getValidationErrorText: function() {
                    return A
                }
            });
            var r, i, a = n("798609"),
                l = n("782340");
            let o = "True",
                u = "False",
                s = [{
                    name: o,
                    displayName: o,
                    value: "true"
                }, {
                    name: u,
                    displayName: u,
                    value: "false"
                }];
            (r = i || (i = {})).BUILT_IN = "-1", r.FRECENCY = "-2";
            let c = 10,
                d = 5,
                E = 25,
                f = "\x00",
                _ = 100,
                I = 3,
                p = 10,
                T = 1,
                h = 500;

            function A(e) {
                if (null != e.choices) return l.default.Messages.COMMAND_VALIDATION_CHOICE_ERROR;
                switch (e.type) {
                    case a.ApplicationCommandOptionType.BOOLEAN:
                        return l.default.Messages.COMMAND_VALIDATION_BOOLEAN_ERROR;
                    case a.ApplicationCommandOptionType.CHANNEL:
                        return l.default.Messages.COMMAND_VALIDATION_CHANNEL_ERROR;
                    case a.ApplicationCommandOptionType.INTEGER:
                        return l.default.Messages.COMMAND_VALIDATION_INTEGER_ERROR;
                    case a.ApplicationCommandOptionType.NUMBER:
                        return l.default.Messages.COMMAND_VALIDATION_NUMBER_ERROR;
                    case a.ApplicationCommandOptionType.ROLE:
                        return l.default.Messages.COMMAND_VALIDATION_ROLE_ERROR;
                    case a.ApplicationCommandOptionType.USER:
                        return l.default.Messages.COMMAND_VALIDATION_USER_ERROR;
                    case a.ApplicationCommandOptionType.MENTIONABLE:
                        return l.default.Messages.COMMAND_VALIDATION_MENTIONABLE_ERROR;
                    default:
                        return l.default.Messages.COMMAND_VALIDATION_GENERAL_ERROR
                }
            }
        },
        524768: function(e, t, n) {
            "use strict";
            var r, i, a, l, o, u, s, c, d, E, f, _;
            n.r(t), n.d(t, {
                ApplicationCommandSectionType: function() {
                    return r
                },
                ApplicationCommandInputType: function() {
                    return i
                },
                ApplicationCommandPermissionType: function() {
                    return a
                },
                ApplicationCommandTriggerLocations: function() {
                    return l
                },
                ApplicationCommandTriggerSections: function() {
                    return o
                },
                CommandOrigin: function() {
                    return u
                }
            }), (s = r || (r = {}))[s.BUILT_IN = 0] = "BUILT_IN", s[s.APPLICATION = 1] = "APPLICATION", (c = i || (i = {}))[c.BUILT_IN = 0] = "BUILT_IN", c[c.BUILT_IN_TEXT = 1] = "BUILT_IN_TEXT", c[c.BUILT_IN_INTEGRATION = 2] = "BUILT_IN_INTEGRATION", c[c.BOT = 3] = "BOT", c[c.PLACEHOLDER = 4] = "PLACEHOLDER", (d = a || (a = {}))[d.ROLE = 1] = "ROLE", d[d.USER = 2] = "USER", d[d.CHANNEL = 3] = "CHANNEL", (E = l || (l = {})).DISCOVERY = "discovery", E.SUGGESTION = "suggestion", E.MENTION = "mention", E.PASTE = "paste", E.RECALL = "recall", E.POPULAR_COMMANDS = "popular_commands", E.MJ_CHAT_BAR = "mj_chat_bar", E.QUERY = "query", (f = o || (o = {}))[f.BUILT_IN = 1] = "BUILT_IN", f[f.FRECENCY = 2] = "FRECENCY", f[f.APP = 3] = "APP", (_ = u || (u = {}))[_.CHAT = 0] = "CHAT", _[_.APPLICATION_LAUNCHER = 1] = "APPLICATION_LAUNCHER"
        },
        349503: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FetchState: function() {
                    return i
                },
                default: function() {
                    return E
                }
            });
            var r, i, a = n("446674"),
                l = n("913144");
            (r = i || (i = {}))[r.FETCHING = 0] = "FETCHING", r[r.FETCHED = 1] = "FETCHED", r[r.ERROR = 2] = "ERROR";
            let o = {},
                u = {},
                s = new Set,
                c = {};
            class d extends a.default.Store {
                getApplication(e) {
                    if (null != e) return o[e]
                }
                getApplications() {
                    return o
                }
                getApplicationFetchState(e) {
                    if (null != e) return u[e]
                }
                getApplicationFetchStates() {
                    return u
                }
                isInvalidApplication(e) {
                    return null != e && s.has(e)
                }
                getInvalidApplicationIds() {
                    return s
                }
                isFetching(e) {
                    return this.getApplicationFetchState(e) === i.FETCHING
                }
                getApplicationLastFetchTime(e) {
                    if (null != e) return c[e]
                }
            }
            d.displayName = "ApplicationDirectoryApplicationsStore";
            var E = new d(l.default, {
                APPLICATION_DIRECTORY_FETCH_APPLICATION: function(e) {
                    let {
                        applicationId: t
                    } = e;
                    u = {
                        ...u,
                        [t]: i.FETCHING
                    }
                },
                APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS: function(e) {
                    let {
                        application: t
                    } = e;
                    o = {
                        ...o,
                        [t.id]: t
                    }, u = {
                        ...u,
                        [t.id]: i.FETCHED
                    };
                    let n = Date.now();
                    c = {
                        ...c,
                        [t.id]: n
                    }, s.has(t.id) && (s.delete(t.id), s = new Set(s))
                },
                APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE: function(e) {
                    let {
                        applicationId: t,
                        isInvalidApplication: n
                    } = e;
                    u = {
                        ...u,
                        [t]: i.ERROR
                    }, n && (s.add(t), s = new Set(s))
                }
            })
        },
        412707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ApplicationDirectoryViews: function() {
                    return a
                },
                ApplicationDirectoryEntrypointNames: function() {
                    return l
                },
                useApplicationDirectoryHistory: function() {
                    return f
                },
                getPreviousView: function() {
                    return _
                },
                getCurrentView: function() {
                    return I
                },
                setEntrypoint: function() {
                    return p
                },
                setGuildId: function() {
                    return T
                },
                resetApplicationDirectoryHistory: function() {
                    return h
                },
                setTrackedOpenedFromExternalEntrypoint: function() {
                    return A
                }
            });
            var r, i, a, l, o = n("803182"),
                u = n("308503"),
                s = n("393414"),
                c = n("349503"),
                d = n("49111");
            (r = a || (a = {})).HOME = "home", r.SEARCH = "search", r.APPLICATION = "application", (i = l || (l = {})).EXTERNAL = "External", i.KEYBOARD_SHORTCUT = "Keyboard Shortcut", i.APPLICATION_DIRECTORY_URL = "Application Directory URL", i.APPLICATION_DIRECTORY_PROFILE_EMBED = "Application Directory Profile Embed", i.APPLICATION_DIRECTORY_UPSELL_MODAL = "Application Directory Upsell Modal", i.GUILD_HEADER_POPOUT = "Guild Header Popout", i.GUILD_SETTINGS = "Guild Settings", i.GUILD_INTEGRATION_SETTINGS = "Guild Integration Settings", i.GUILD_CONTEXT_MENU = "Guild Context Menu";
            let E = (0, u.default)(() => ({
                    guildId: null,
                    entrypoint: null,
                    trackedOpenedFromExternalEntrypoint: !1
                })),
                f = E;

            function _() {
                let {
                    location: {
                        state: e
                    }
                } = (0, s.getHistory)();
                return null == e ? void 0 : e.previousView
            }

            function I() {
                var e, t;
                let {
                    location: {
                        pathname: n
                    }
                } = (0, s.getHistory)(), r = (0, o.matchPath)(n, {
                    path: d.Routes.APPLICATION_DIRECTORY,
                    exact: !0
                }), i = (0, o.matchPath)(n, {
                    path: d.Routes.APPLICATION_DIRECTORY_SEARCH,
                    exact: !0
                }), l = (0, o.matchPath)(n, {
                    path: [d.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId"), d.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section")],
                    exact: !0
                }), {
                    applicationId: u,
                    section: E
                } = null !== (e = null == l ? void 0 : l.params) && void 0 !== e ? e : {};
                if (null != r) return {
                    type: a.HOME
                };
                if (null != i) return {
                    type: a.SEARCH
                };
                if (null != l && null != u) {
                    let e = null === (t = c.default.getApplication(u)) || void 0 === t ? void 0 : t.name;
                    return {
                        type: a.APPLICATION,
                        applicationId: u,
                        applicationName: e,
                        section: E
                    }
                }
            }

            function p(e) {
                E.setState({
                    entrypoint: e
                })
            }

            function T(e) {
                E.setState({
                    guildId: e
                })
            }

            function h() {
                E.setState({
                    entrypoint: null,
                    guildId: null
                })
            }

            function A(e) {
                E.setState({
                    trackedOpenedFromExternalEntrypoint: e
                })
            }
        },
        750947: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                ApplicationDirectoryProfileSections: function() {
                    return r
                }
            }), (i = r || (r = {})).GENERAL = "GENERAL", i.IMAGES = "IMAGES", i.PREMIUM = "PREMIUM", i.PRIVACY = "PRIVACY"
        },
        988268: function(e, t, n) {
            "use strict";
            var r, i, a, l;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return r
                },
                BotTagTypes: function() {
                    return i
                }
            }), (a = r || (r = {}))[a.GAME = 1] = "GAME", a[a.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", a[a.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (l = i || (i = {}))[l.BOT = 0] = "BOT", l[l.SERVER = 1] = "SERVER", l[l.SYSTEM_DM = 2] = "SYSTEM_DM", l[l.OFFICIAL = 3] = "OFFICIAL", l[l.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", l[l.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", l[l.AI = 6] = "AI", l[l.REMIX = 7] = "REMIX"
        },
        115279: function(e, t, n) {
            "use strict";
            var r, i, a, l, o, u, s, c, d, E, f;
            n.r(t), n.d(t, {
                EmojiCategoryTypes: function() {
                    return r
                },
                GRID_NAVIGATOR_ID: function() {
                    return _
                },
                EmojiCategories: function() {
                    return i
                },
                EmojiSubCategory: function() {
                    return a
                },
                INACTIVE_CATEGORY_INDEX: function() {
                    return I
                },
                EmojiSize: function() {
                    return o
                },
                EMOJI_PICKER_TAB_PANEL_ID: function() {
                    return p
                },
                EMOJI_PICKER_TAB_ID: function() {
                    return T
                },
                SOUNDBOARD_PICKER_TAB_PANEL_ID: function() {
                    return h
                },
                SOUNDBOARD_PICKER_TAB_ID: function() {
                    return A
                },
                REACTION_PICKER_TAB_PANEL_ID: function() {
                    return O
                },
                REACTION_PICKER_TAB_ID: function() {
                    return S
                },
                SUPER_REACTION_PICKER_TAB_ID: function() {
                    return N
                },
                SuperReactionBalanceLocations: function() {
                    return u
                },
                GIF_PICKER_TAB_PANEL_ID: function() {
                    return C
                },
                GIF_PICKER_TAB_ID: function() {
                    return g
                },
                EMOJI_SIZE_MAP: function() {
                    return R
                },
                EMOJI_ROW_SIZE: function() {
                    return v
                }
            }), (s = r || (r = {})).GUILD = "GUILD", s.PACK = "PACK", s.UNICODE = "UNICODE", s.RECENT = "RECENT", s.CUSTOM = "CUSTOM", s.SEARCH_RESULTS = "SEARCH_RESULTS", s.FAVORITES = "FAVORITES", s.TOP_GUILD_EMOJI = "TOP_GUILD_EMOJI", s.PREMIUM_UPSELL = "PREMIUM_UPSELL";
            let _ = "emoji-picker-grid";
            (c = i || (i = {})).RECENT = "recent", c.FAVORITES = "favorites", c.TOP_GUILD_EMOJI = "top guild emoji", c.CUSTOM = "custom", c.PEOPLE = "people", c.NATURE = "nature", c.FOOD = "food", c.ACTIVITY = "activity", c.TRAVEL = "travel", c.OBJECTS = "objects", c.SYMBOLS = "symbols", c.FLAGS = "flags", c.PREMIUM_UPSELL = "premium emoji", (d = a || (a = {})).NONE = "", d.TOP_GUILD_EMOJI = "top_server", d.NEWLY_ADDED_EMOJI = "newly_added", (E = l || (l = {}))[E.EMOJI = 0] = "EMOJI", E[E.NSFW = 1] = "NSFW";
            let I = -1;
            (f = o || (o = {}))[f.MEDIUM = 40] = "MEDIUM", f[f.LARGE = 48] = "LARGE";
            let p = "emoji-picker-tab-panel",
                T = "emoji-picker-tab",
                h = "soundboard-picker-tab-panel",
                A = "soundboard-picker-tab",
                O = "reaction-picker-tab-panel",
                S = "reaction-picker-tab",
                N = "super-reaction-picker-tab";
            (u || (u = {})).TOOLTIP = "tooltip";
            let C = "gif-picker-tab-panel",
                g = "gif-picker-tab",
                R = {
                    reaction: 32,
                    default: 44,
                    jumbo: 96
                },
                v = 9
        },
        677315: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildHomeExperiment: function() {
                    return d
                },
                canSeeGuildHome: function() {
                    return E
                },
                GuildFeedRenderSelectorExperiment: function() {
                    return f
                },
                GuildFeedRefreshButtonExperiment: function() {
                    return _
                },
                GuildHomeBadgeExperiment: function() {
                    return I
                },
                GuildHomeFeedbackExperiment: function() {
                    return p
                },
                GuildHomeDeprecationExperiment: function() {
                    return T
                }
            });
            var r = n("446674"),
                i = n("203288"),
                a = n("862205"),
                l = n("21121"),
                o = n("923959"),
                u = n("305961"),
                s = n("49111");

            function c(e, t, n) {
                let r = t.getChannels(e)[o.GUILD_SELECTABLE_CHANNELS_KEY].filter(t => {
                    let {
                        channel: r
                    } = t;
                    return !n.isChannelGated(e, r.id)
                });
                return r.length > 5
            }

            function d(e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                let t = (0, r.useStateFromStores)([o.default, i.default], () => null != e && c(e.id, o.default, i.default));
                return !__OVERLAY__ && !!t && null != e && e.hasFeature(s.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
            }

            function E(e) {
                if (__OVERLAY__ || e === s.ME || e === s.FAVORITES || (0, l.isInMainTabsExperiment)()) return !1;
                let t = u.default.getGuild(e);
                return !!(null != t && c(e, o.default, i.default)) && t.hasFeature(s.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
            }
            let f = (0, a.createExperiment)({
                    kind: "user",
                    id: "2022-01_home_feed_toggle",
                    label: "Show Guild Feed Sorting Selector",
                    defaultConfig: {
                        showSelector: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes Selector",
                        config: {
                            showSelector: !0
                        }
                    }]
                }),
                _ = (0, a.createExperiment)({
                    kind: "user",
                    id: "2022-06_home_refresh_button",
                    label: "Show refresh button",
                    defaultConfig: {
                        showRefreshButton: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes button",
                        config: {
                            showRefreshButton: !0
                        }
                    }]
                }),
                I = (0, a.createExperiment)({
                    kind: "user",
                    id: "2022-08_home_badge",
                    label: "Show badge on home channel",
                    defaultConfig: {
                        showBadge: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "show badge",
                        config: {
                            showBadge: !0
                        }
                    }]
                });
            (0, a.createExperiment)({
                kind: "user",
                id: "2022-08_home_drawer_autoclose",
                label: "Auto close home drawer",
                defaultConfig: {
                    autoCloseDrawer: !1,
                    animation: !1,
                    delay: null
                },
                treatments: [{
                    id: 1,
                    label: "normal animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: null
                    }
                }, {
                    id: 2,
                    label: "no animate",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !1,
                        delay: null
                    }
                }, {
                    id: 3,
                    label: "150 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 150
                    }
                }, {
                    id: 4,
                    label: "250 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 250
                    }
                }, {
                    id: 5,
                    label: "500 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 500
                    }
                }]
            }), (0, a.createExperiment)({
                kind: "user",
                id: "2022-09_welcome_header",
                label: "Show welcome header for home",
                defaultConfig: {
                    showWelcomeHeader: !1
                },
                treatments: [{
                    id: 1,
                    label: "show welcome header",
                    config: {
                        showWelcomeHeader: !0
                    }
                }]
            });
            let p = (0, a.createExperiment)({
                    kind: "user",
                    id: "2022-12_home_feedback_ux",
                    label: "Show post feedback for home",
                    defaultConfig: {
                        showFeedback: !1
                    },
                    treatments: [{
                        id: 100,
                        label: "show feedback",
                        config: {
                            showFeedback: !0
                        }
                    }]
                }),
                T = (0, a.createExperiment)({
                    kind: "guild",
                    id: "2023-03_home_deprecation",
                    label: "Home Deprecation",
                    defaultConfig: {
                        showDeprecationNotice: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show notice",
                        config: {
                            showDeprecationNotice: !0
                        }
                    }]
                })
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var r = n("872717"),
                i = n("913144"),
                a = n("479756"),
                l = n("38654"),
                o = n("9294"),
                u = n("26989"),
                s = n("337543"),
                c = n("697218"),
                d = n("49111");
            let E = async (e, t) => {
                let n = null != t ? t : s.default.getInviteKeyForGuildId(e),
                    a = c.default.getCurrentUser(),
                    l = !u.default.isMember(e, null == a ? void 0 : a.id);
                try {
                    let t = await r.default.get({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: l,
                            invite_code: null != n ? (0, o.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: a
                    } = t;
                    return i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: a.version,
                            description: a.description,
                            formFields: a.form_fields,
                            guild: a.guild
                        }
                    }), a
                } catch (t) {
                    i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, f = async (e, t) => {
                let n = await r.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: a
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: a.version,
                        description: a.description,
                        formFields: a.form_fields
                    }
                })
            }, _ = async (e, t) => {
                let n = await r.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: a
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: a.version,
                        description: a.description,
                        formFields: a.form_fields
                    }
                })
            }, I = async (e, t) => {
                await r.default.patch({
                    url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, p = async (e, t) => {
                if (l.default.isFullServerPreview(e)) {
                    (0, a.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await r.default.put({
                            url: d.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: a
                        } = n;
                    return i.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: a
                    }), a
                } catch (e) {
                    throw e
                }
            };
            var T = {
                fetchVerificationForm: E,
                updateVerificationForm: f,
                updateVerificationFormDescription: _,
                enableVerificationForm: I,
                submitVerificationForm: p
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return a
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return l
                },
                MAX_FORM_ELEMENTS: function() {
                    return o
                },
                MAX_NUM_RULES: function() {
                    return u
                },
                MAX_RULE_LENGTH: function() {
                    return s
                },
                MAX_QUESTION_LENGTH: function() {
                    return c
                },
                MAX_NUM_CHOICES: function() {
                    return d
                },
                MAX_CHOICE_LENGTH: function() {
                    return E
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return f
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return _
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return I
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return p
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return T
                }
            });
            var r, i = n("567054");
            i.VerificationFormFieldTypes.VERIFICATION;
            let a = new Set([i.VerificationFormFieldTypes.TERMS]),
                l = new Set([i.VerificationFormFieldTypes.MULTIPLE_CHOICE, i.VerificationFormFieldTypes.TEXT_INPUT, i.VerificationFormFieldTypes.PARAGRAPH]),
                o = 5,
                u = 16,
                s = 300,
                c = 300,
                d = 8,
                E = 150,
                f = 150,
                _ = 1e3,
                I = 300,
                p = "Membership Gating",
                T = "in-app-member-verification";
            (r || (r = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let r;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return i
                }
            }), r = n("453265").default;
            let i = r.openMemberVerificationModal;
            r.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return o
                },
                setHasUnsubmittedChanges: function() {
                    return u
                },
                setShowWarning: function() {
                    return s
                }
            });
            var r = n("308503"),
                i = n("659500"),
                a = n("49111");
            let l = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                o = (0, r.default)(e => l),
                u = e => {
                    o.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                s = e => {
                    o.setState({
                        shouldShowWarning: e
                    }), e && i.ComponentDispatch.dispatch(a.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                a = n("599110"),
                l = n("50926"),
                o = n("347977"),
                u = n("394294"),
                s = n("49111");
            let c = () => {
                    a.default.track(s.AnalyticEvents.MODAL_DISMISSED, {
                        type: u.MEMBER_VERIFICATION_TYPE
                    })
                },
                d = e => {
                    a.default.track(s.AnalyticEvents.OPEN_MODAL, {
                        type: u.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var E = {
                openMemberVerificationModal(e, t) {
                    d(e);
                    let a = async t => {
                        await l.default.submitVerificationForm(e, t)
                    };
                    (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, r.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: a,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (o.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, o.setShowWarning)(!0);
                                        return
                                    }
                                    c()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: u.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            c(), o.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, o.setShowWarning)(!0) : (0, i.closeModal)(u.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && c(), (0, i.closeModal)(u.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        468560: function(e, t, n) {
            "use strict";

            function r(e, t) {
                var n;
                let r = null == t ? void 0 : null === (n = t.replace(/-/g, "_")) || void 0 === n ? void 0 : n.toUpperCase();
                if (null != r && r in e) return e[r]
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            })
        },
        533613: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                HotspotLocations: function() {
                    return r
                }
            }), (i = r || (r = {})).REPORT_PROBLEM_POST_STREAM = "REPORT_PROBLEM_POST_STREAM", i.VIDEO_BACKGROUND_FEEDBACK = "VIDEO_BACKGROUND_FEEDBACK", i.VOICE_CALL_FEEDBACK = "VOICE_CALL_FEEDBACK", i.GUILD_ANALYTICS_GUILD_SETTINGS_MENU = "GUILD_ANALYTICS_GUILD_SETTINGS_MENU", i.NOW_PLAYING_CONSENT_CARD = "NOW_PLAYING_CONSENT_CARD", i.IOS_GUILD_NAV_EDUCATION = "IOS_GUILD_NAV_EDUCATION", i.VOICE_PANEL_INTRODUCTION = "VOICE_PANEL_INTRODUCTION", i.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL = "GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL", i.FAVORITE_EMOJI_TOOLTIP = "FAVORITE_EMOJI_TOOLTIP", i.POST_ACTIVITY_FEEDBACK = "POST_ACTIVITY_FEEDBACK", i.GUILD_DELETE_FEEDBACK = "GUILD_DELETE_FEEDBACK", i.GUILD_LEAVE_FEEDBACK = "GUILD_LEAVE_FEEDBACK", i.APPLICATION_COMMAND_TOOLTIP = "APPLICATION_COMMAND_TOOLTIP", i.GUILD_CAP_INLINE_UPSELL = "GUILD_CAP_INLINE_UPSELL", i.STAGE_CHANNEL_UPSELL = "STAGE_CHANNEL_UPSELL", i.HUB_WAITLIST_UPSELL = "HUB_WAITLIST_UPSELL", i.HUB_NEW = "HUB_NEW", i.HUB_SECOND_EMAIL_CONNECTION_UPSELL = "HUB_SECOND_EMAIL_CONNECTION_UPSELL", i.LIVE_STAGE_NOTIFICATION_BADGE = "LIVE_STAGE_NOTIFICATION_BADGE", i.GUILD_EVENT_UPSELL = "GUILD_EVENT_UPSELL", i.HUB_LINK_CHANNEL_NOTICE = "HUB_LINK_CHANNEL_NOTICE", i.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP = "PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP", i.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP = "ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP", i.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL = "ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL", i.MULTI_ACCOUNT_TOOLTIP = "MULTI_ACCOUNT_TOOLTIP", i.HUB_STUDY_ROOM_NOTICE = "HUB_STUDY_ROOM_NOTICE", i.CHANNEL_BANNER_MEMBER_LIST_NOTICE = "CHANNEL_BANNER_MEMBER_LIST_NOTICE", i.CHANGE_LANGUAGE_MODAL = "CHANGE_LANGUAGE_MODAL", i.ACTIVITY_BEB_TUTORIAL = "ACTIVITY_BEB_TUTORIAL", i.APP_DIRECTORY_SETTINGS_NEW_PILL = "APP_DIRECTORY_SETTINGS_NEW_PILL", i.INVITE_SPLASH_GUILD_HEADER_TOOLTIP = "INVITE_SPLASH_GUILD_HEADER_TOOLTIP", i.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW", i.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW", i.ANIMATED_VIDEO_BG_HACKER_DEN_NEW = "ANIMATED_VIDEO_BG_HACKER_DEN_NEW", i.ANIMATED_VIDEO_BG_WUMPICE_NEW = "ANIMATED_VIDEO_BG_WUMPICE_NEW", i.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW = "ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW", i.ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW = "ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW", i.SOUNDBOARD_WHEEL_EDUCATION_MODAL = "SOUNDBOARD_WHEEL_EDUCATION_MODAL", i.IN_APP_REPORTS_FEEDBACK = "IN_APP_REPORTS_FEEDBACK", i.CLIPS_CHANNEL_ATTACH_REMINDER = "CLIPS_CHANNEL_ATTACH_REMINDER"
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return h
                },
                updateImpersonating: function() {
                    return A
                },
                stopImpersonating: function() {
                    return O
                },
                updateImpersonatedChannels: function() {
                    return N
                },
                updateImpersonatedRoles: function() {
                    return C
                },
                updateImpersonatedData: function() {
                    return g
                }
            });
            var r = n("913144"),
                i = n("716241"),
                a = n("393414"),
                l = n("42203"),
                o = n("923959"),
                u = n("26989"),
                s = n("305961"),
                c = n("957255"),
                d = n("18494"),
                E = n("282109"),
                f = n("599110"),
                _ = n("38654"),
                I = n("507950"),
                p = n("49111"),
                T = n("724210");

            function h(e, t) {
                f.default.track(p.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === I.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), S(e)
            }

            function A(e, t) {
                let n = _.default.getData(e);
                null != n && n.type === t.type && (f.default.track(p.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === I.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), S(e))
            }

            function O(e) {
                r.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function S(e) {
                let t = d.default.getChannelId(e),
                    n = l.default.getChannel(t),
                    r = null != t && (0, T.isStaticChannelRoute)(t);
                if (!r && !c.default.can(p.Permissions.VIEW_CHANNEL, n)) {
                    let t = o.default.getDefaultChannel(e);
                    null != t && (0, a.transitionTo)(p.Routes.CHANNEL(e, t.id))
                }
            }

            function N(e, t, n) {
                let r = new Set(E.default.getOptedInChannels(e));
                t.forEach(e => r.add(e)), n.forEach(e => r.delete(e)), A(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    optInChannels: r
                })
            }

            function C(e, t) {
                let n = s.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                        r = Array.from(t);
                    o.default.addConditionalChangeListener(() => {
                        let t = u.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (r.some(e => !t.roles.includes(e))) return !0;
                        let i = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                            a = i.filter(e => !n.includes(e));
                        return a.length > 0 && N(e, a, []), !1
                    })
                }(e, t);
                let r = {};
                t.forEach(e => r[e] = n.roles[e]), A(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    roles: r
                })
            }

            function g(e, t) {
                A(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return l
                },
                generateInviteKeyFromExtraData: function() {
                    return o
                },
                parseExtraDataFromInviteKey: function() {
                    return u
                },
                parseInviteCodeFromInviteKey: function() {
                    return s
                }
            });
            var r = n("522632"),
                i = n("833858");
            let a = "event";

            function l(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = r.parse(t);
                        return (0, i.getFirstQueryStringValue)(e[a])
                    } catch (e) {
                        return
                    }
                }(t);
                return o({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function o(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(a, "=").concat(n)
            }

            function u(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let l = r.parse(n),
                    o = (0, i.getFirstQueryStringValue)(l[a]);
                return {
                    baseCode: t,
                    guildScheduledEventId: o
                }
            }

            function s(e) {
                let [t] = e.split("?");
                return t
            }
        },
        140596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FetchState: function() {
                    return i
                },
                default: function() {
                    return T
                }
            });
            var r, i, a = n("446674"),
                l = n("913144"),
                o = n("653047"),
                u = n("946028");
            (r = i || (i = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED", r[r.FETCH_FAILED = 3] = "FETCH_FAILED";
            let s = new Map,
                c = new Map,
                d = [],
                E = i.NOT_FETCHED,
                f = [];
            class _ extends a.default.Store {
                getIntegrations(e) {
                    var t;
                    return null !== (t = s.get(e)) && void 0 !== t ? t : f
                }
                getIntegration(e, t) {
                    var n;
                    return null === (n = s.get(e)) || void 0 === n ? void 0 : n.find(e => e.application.id === t)
                }
                getAllIntegrations() {
                    return s
                }
                getIntegrationsFetchState(e) {
                    var t;
                    return null !== (t = c.get(e)) && void 0 !== t ? t : i.NOT_FETCHED
                }
                getApplicationsShelfFetchState() {
                    return E
                }
                getApplicationsShelf() {
                    return d
                }
            }

            function I(e) {
                return e.sort((e, t) => e.application.name.localeCompare(t.application.name))
            }
            _.displayName = "PrivateChannelIntegrationStore";
            let p = new _(l.default, {
                LOGOUT() {
                    s.clear()
                },
                CONNECTION_OPEN() {
                    s.clear(), c.clear()
                },
                CHANNEL_SELECT(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t || c.get(t) !== i.FETCH_FAILED) return !1;
                    c.set(t, i.NOT_FETCHED)
                },
                APPLICATIONS_SHELF_FETCH_START() {
                    E = i.FETCHING
                },
                APPLICATIONS_SHELF_FETCH_SUCCESS(e) {
                    let {
                        applications: t
                    } = e;
                    d = t.map(o.default.createFromServer).sort((e, t) => e.name.localeCompare(t.name)), E = i.FETCHED
                },
                APPLICATIONS_SHELF_FETCH_FAIL() {
                    E = i.FETCH_FAILED
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START(e) {
                    let {
                        channelId: t
                    } = e;
                    s.set(t, null), c.set(t, i.FETCHING)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS(e) {
                    let {
                        channelId: t,
                        integrations: n
                    } = e;
                    s.set(t, I(n.map(u.createPrivateChannelIntegration))), c.set(t, i.FETCHED)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL(e) {
                    let {
                        channelId: t
                    } = e;
                    c.set(t, i.FETCH_FAILED)
                },
                PRIVATE_CHANNEL_INTEGRATION_CREATE(e) {
                    let {
                        integration: t
                    } = e, n = s.get(t.channel_id);
                    if (null == n) return !1;
                    s.set(t.channel_id, I([...n, (0, u.createPrivateChannelIntegration)(t)]))
                },
                PRIVATE_CHANNEL_INTEGRATION_UPDATE(e) {
                    let {
                        integration: t
                    } = e, n = s.get(t.channel_id);
                    if (null == n) return !1;
                    let r = (0, u.createPrivateChannelIntegration)(t),
                        i = n.findIndex(e => e.application.id === r.application.id),
                        a = [...n]; - 1 === i ? a.push(r) : a[i] = r, s.set(r.channel_id, I(a))
                },
                PRIVATE_CHANNEL_INTEGRATION_DELETE(e) {
                    let {
                        channelId: t,
                        applicationId: n
                    } = e, r = s.get(t);
                    if (null == r) return !1;
                    s.set(t, r.filter(e => e.application.id !== n))
                },
                CHANNEL_DELETE(e) {
                    let {
                        channel: t
                    } = e;
                    return s.delete(t.id)
                }
            });
            var T = p
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return l
                },
                getDevicePushProvider: function() {
                    return o
                }
            });
            var r, i, a = n("773336");
            let l = null;

            function o() {
                return (0, a.isAndroid)(), null
            }(r = i || (i = {})).REMINDER = "reminder", r.TOP_MESSAGE_PUSH = "top_messages_push", r.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        846325: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return a
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return l
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return o
                },
                SoundboardWheelSize: function() {
                    return u
                },
                DEFAULT_KEYBIND: function() {
                    return s
                },
                EMPTY_SOUND_LIST: function() {
                    return c
                },
                CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: function() {
                    return d
                }
            });
            let a = 32,
                l = 5,
                o = "DEFAULT";
            (i = r || (r = {}))[i.SUCCESS = 0] = "SUCCESS", i[i.INTERRUPTED = 1] = "INTERRUPTED", r.SUCCESS, r.INTERRUPTED;
            let u = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                s = "ctrl+`",
                c = [],
                d = "0"
        },
        235004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var r, i, a = n("917351"),
                l = n.n(a),
                o = n("446674"),
                u = n("913144"),
                s = n("845579"),
                c = n("374363"),
                d = n("697218"),
                E = n("599110"),
                f = n("829536"),
                _ = n("846325"),
                I = n("49111"),
                p = n("397336");
            (r = i || (i = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED";
            let T = new Map,
                h = new Map,
                A = new Set,
                O = i.NOT_FETCHED,
                S = i.NOT_FETCHED,
                N = new Set,
                C = new Map,
                g = !1;

            function R(e) {
                let {
                    sound: t
                } = e, n = T.get(t.guildId), r = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != r && -1 !== r ? (n[r] = t, T.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), T.set(t.guildId, [...n]))
            }
            let v = l.debounce(e => {
                E.default.track(I.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, f.amplitudeToPerceptual)(e))
                }), s.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function L(e) {
                var t, n;
                let r = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(r)) t.soundboardMuted ? A.add(e) : A.delete(e);
                for (let e of A.keys()) null == r[e] && A.delete(e)
            }
            class D extends o.default.Store {
                initialize() {
                    this.waitFor(c.default), L(c.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(T),
                        favoritedSoundIds: Array.from(N),
                        localSoundboardMutes: Array.from(A)
                    }
                }
                getSounds() {
                    return T
                }
                getSoundsForGuild(e) {
                    return T.get(e)
                }
                getDefaultSounds() {
                    return this.getSoundsForGuild(_.DEFAULT_SOUND_GUILD_ID)
                }
                getSound(e, t) {
                    var n;
                    let r = null !== (n = T.get(e)) && void 0 !== n ? n : [];
                    return r.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(T.values()).flat();
                    return t.find(t => t.soundId === e)
                }
                isFetchingSounds() {
                    return S === i.FETCHING
                }
                isFetchingDefaultSounds() {
                    return O === i.FETCHING
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return O === i.NOT_FETCHED
                }
                hasFetchedDefaultSounds() {
                    return O === i.FETCHED
                }
                isUserPlayingSounds(e) {
                    let t = C.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != h.get(e)
                }
                isFavoriteSound(e) {
                    return N.has(e)
                }
                getFavorites() {
                    return N
                }
                isLocalSoundboardMuted(e) {
                    return A.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return g
                }
                hasFetchedAllSounds() {
                    return S === i.FETCHED && O === i.FETCHED
                }
            }
            D.displayName = "SoundboardStore";
            var m = new D(u.default, {
                LOGOUT: function() {
                    T.clear(), h.clear(), C.clear(), g = !1, S = i.NOT_FETCHED, O = i.NOT_FETCHED
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    S = i.FETCHING
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: R,
                GUILD_SOUNDBOARD_SOUND_UPDATE: R,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    T.delete(t);
                    let r = T.get(n),
                        i = null == r ? void 0 : r.findIndex(e => e.soundId === t);
                    null != r && null != i && !(i < 0) && (r.splice(i, 1), T.set(n, [...r]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, r;
                    let {
                        soundId: i,
                        userId: a
                    } = e, l = (null !== (n = h.get(i)) && void 0 !== n ? n : 0) + 1, o = (null !== (r = C.get(a)) && void 0 !== r ? r : 0) + 1;
                    h.set(i, l), C.set(a, o), a !== (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (g = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: r,
                        userId: i
                    } = e, a = (null !== (t = h.get(r)) && void 0 !== t ? t : 0) - 1, l = (null !== (n = C.get(i)) && void 0 !== n ? n : 0) - 1;
                    a <= 0 ? h.delete(r) : h.set(r, a), l <= 0 ? C.delete(i) : C.set(i, l)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    v(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    h.clear(), C.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: r
                    } = t;
                    if (n === p.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var i, a;
                        N = new Set(null !== (a = null == r ? void 0 : null === (i = r.favoriteSoundboardSounds) || void 0 === i ? void 0 : i.soundIds) && void 0 !== a ? a : [])
                    } else n === p.UserSettingsTypes.PRELOADED_USER_SETTINGS && L(r)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    O = i.FETCHING
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    T.set(_.DEFAULT_SOUND_GUILD_ID, t), O = i.FETCHED
                },
                SOUNDBOARD_SOUNDS_RECEIVED: function(e) {
                    let {
                        updates: t
                    } = e;
                    t.forEach(e => {
                        let {
                            guildId: t,
                            sounds: n
                        } = e;
                        T.set(t, n)
                    }), S = i.FETCHED
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    T.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    let {
                        userId: t
                    } = e;
                    A.has(t) ? A.delete(t) : A.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    T = new Map(Object.entries(t.soundboardSounds)), N = new Set(t.favoritedSoundIds), A = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        soundboardSounds: n
                    } = e;
                    T.set(t, n)
                }
            })
        },
        364685: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            });
            var r, i, a = n("102053"),
                l = n("446674"),
                o = n("913144"),
                u = n("802493"),
                s = n("595525"),
                c = n("212084"),
                d = n("867805"),
                E = n("267567"),
                f = n("813006"),
                _ = n("778689"),
                I = n("305961"),
                p = n("161585"),
                T = n("24373"),
                h = n("49111");
            (r = i || (i = {}))[r.Unloaded = 0] = "Unloaded", r[r.MaybeLoaded = 1] = "MaybeLoaded", r[r.Loaded = 2] = "Loaded";
            let A = 2,
                O = new Map,
                S = new Map,
                N = null,
                C = [],
                g = null,
                R = !1,
                v = new Map,
                L = (e, t) => {
                    v = new Map(v.set(e, t))
                },
                D = 1e3 * h.Durations.HOUR,
                m = () => {
                    if (0 !== A) return;
                    let e = u.default.database();
                    if (null == e) return;
                    A = 2;
                    let t = (0, s.tryLoadOrResetCacheGateway)("StickerStore.loadSavedGuildStickers", () => a.default.time("\uD83D\uDCBE", "loadSavedGuildStickers", () => c.default.getSync(e)));
                    if (null != t) {
                        for (let [e, n] of t)
                            if (_.default.isMember(e) && !v.has(e)) {
                                for (let t of n) M(t, !0, I.default.getGuild(e));
                                L(e, n)
                            }
                    }
                },
                M = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    S.set(e.id, e), t && P(e, n)
                },
                P = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == N) return;
                    let {
                        tags: n
                    } = e, r = {
                        type: p.StickerMetadataTypes.STICKER_NAME,
                        value: e.name.trim().toLocaleLowerCase()
                    };
                    if ((0, T.isStandardSticker)(e)) {
                        let t = C.find(t => t.id === e.pack_id),
                            i = [r, ...(null != n ? n : "").split(",").map(e => ({
                                type: p.StickerMetadataTypes.TAG,
                                value: e.trim().toLocaleLowerCase()
                            }))];
                        null != t && i.push({
                            type: p.StickerMetadataTypes.PACK_NAME,
                            value: t.name
                        }), N.set(e.id, i)
                    } else if ((0, T.isGuildSticker)(e) && null != n) {
                        let i = d.default.getByName(n),
                            a = {
                                type: p.StickerMetadataTypes.TAG,
                                value: n.trim().toLocaleLowerCase()
                            },
                            l = [r, a];
                        if (null != t) {
                            let e = (t instanceof(0, f.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                            null != e && "" !== e && l.push({
                                type: p.StickerMetadataTypes.GUILD_NAME,
                                value: e
                            })
                        }
                        if (null == i) {
                            N.set(e.id, l);
                            return
                        }
                        l.push({
                            type: p.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: i.surrogates
                        }), i.forEachDiversity(e => l.push({
                            type: p.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })), N.set(e.id, l)
                    }
                },
                U = (e, t, n) => {
                    O.set(e.id, e);
                    let r = [...C];
                    if (t) {
                        let t = r.findIndex(t => t.id === e.id); - 1 !== t ? r[t] = e : r.push(e), C = r
                    }(t || n) && e.stickers.forEach(e => M(e))
                },
                y = () => {
                    v.forEach((e, t) => {
                        let n = I.default.getGuild(t);
                        null != n && e.forEach(e => P(e, n))
                    }), C.forEach(e => {
                        e.stickers.forEach(e => P(e))
                    })
                };

            function b(e) {
                null != e.stickers && (e.stickers.forEach(t => M(t, !0, e)), L(e.id, e.stickers))
            }
            class w extends l.default.Store {
                initialize() {
                    this.waitFor(u.default, _.default, I.default)
                }
                get isLoaded() {
                    return 0 !== A
                }
                get stickerMetadata() {
                    return m(), null == N && (N = new Map, y()), N
                }
                get hasLoadedStickerPacks() {
                    return null != g && g + D > Date.now()
                }
                get isFetchingStickerPacks() {
                    return R
                }
                getStickerById(e) {
                    return !S.has(e) && m(), S.get(e)
                }
                getStickerPack(e) {
                    return O.get(e)
                }
                getPremiumPacks() {
                    return C
                }
                isPremiumPack(e) {
                    return C.some(t => t.id === e)
                }
                getRawStickersByGuild() {
                    return v
                }
                getAllStickersIterator() {
                    return m(), S.values()
                }
                getAllGuildStickers() {
                    return m(), v
                }
                getStickersByGuildId(e) {
                    return m(), v.get(e)
                }
            }
            w.displayName = "StickersStore";
            var F = new w(o.default, {
                BACKGROUND_SYNC: () => {
                    N = null, S = new Map, v = new Map, A = 0
                },
                CONNECTION_OPEN: e => {
                    let {
                        guilds: t
                    } = e;
                    N = null, S = new Map, v = new Map, t.forEach(b), A = t.every(e => null != e.stickers) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    !E.default.isLurking(t.id) && (b(t), 1 === A && null == t.stickers && null != t.stickerUpdates && (A = 0))
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, r = null !== (t = v.get(n.id)) && void 0 !== t ? t : [];
                    r.forEach(e => {
                        null != N && N.delete(e.id), S.delete(e.id)
                    }), v.delete(n.id), v = new Map(v)
                },
                LOGOUT: () => {
                    A = 0, C = [], S.clear(), O.clear(), N = null, v.clear(), v = new Map(v), R = !1, g = null
                },
                STICKER_PACKS_FETCH_START: () => {
                    R = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: e => {
                    let {
                        packs: t
                    } = e;
                    t.forEach(e => U(e, !0)), g = Date.now(), R = !1
                },
                STICKER_PACK_FETCH_SUCCESS: e => {
                    let {
                        pack: t,
                        ingestStickers: n
                    } = e;
                    U(t, !1, n)
                },
                GUILD_STICKERS_FETCH_SUCCESS: e => {
                    let {
                        guildId: t,
                        stickers: n
                    } = e;
                    n.forEach(e => M(e)), L(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: e => {
                    var t, n;
                    let {
                        guildId: r,
                        sticker: i
                    } = e, a = null !== (t = v.get(r)) && void 0 !== t ? t : [];
                    L(r, [...null !== (n = a.filter(e => e.id !== i.id)) && void 0 !== n ? n : [], i]), M(i)
                },
                STICKER_FETCH_SUCCESS: e => {
                    let {
                        sticker: t
                    } = e;
                    M(t, !1)
                },
                GUILD_STICKERS_UPDATE: e => {
                    var t;
                    let {
                        guildId: n,
                        stickers: r
                    } = e, i = e => {
                        let t;
                        let n = S.get(e.id);
                        return null != n && (0, T.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                            ...e,
                            user: t
                        }
                    }, a = null !== (t = v.get(n)) && void 0 !== t ? t : [], l = a.filter(e => null == r.find(t => t.id === e.id));
                    l.forEach(e => {
                        S.delete(e.id), null != N && N.delete(e.id)
                    });
                    let o = r.map(e => i(e));
                    o.forEach(e => M(e)), L(n, o)
                }
            })
        },
        211895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("913144"),
                i = n("54239"),
                a = n("49111");

            function l() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                r.default.dispatch({
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: e,
                    subsection: t,
                    ...n
                }), (0, i.pushLayer)(a.Layers.USER_SETTINGS)
            }
        },
        777523: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("730290"),
                i = n("49111");
            let a = /-/g;

            function l(e) {
                let [, , t, n] = e.split("/"), l = null == t ? void 0 : t.toUpperCase().replace(a, "_"), o = null == n ? void 0 : n.toUpperCase().replace(a, "_");
                if (i.UserSettingsSections.hasOwnProperty(l) && (null == o || "" === o || i.UserSettingsSections.hasOwnProperty(o))) {
                    let {
                        source: e
                    } = (0, r.parse)(location.search);
                    return {
                        source: e,
                        section: i.UserSettingsSections[l],
                        subsection: o
                    }
                }
                return null
            }
        },
        917219: function(e, t, n) {
            "use strict";
            var r, i, a, l;
            n.r(t), n.d(t, {
                VideoFilterType: function() {
                    return r
                },
                DefaultVideoBackground: function() {
                    return i
                },
                ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
                    return o
                },
                DEFAULT_VIDEO_BACKGROUND_SORT: function() {
                    return u
                },
                BLUR_BACKGROUND_OPTION: function() {
                    return s
                },
                BACKGROUND_REPLACEMENT_SIZE: function() {
                    return c
                },
                MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return d
                }
            }), (a = r || (r = {}))[a.BACKGROUND = 0] = "BACKGROUND", (l = i || (i = {}))[l.OPTION_1 = 0] = "OPTION_1", l[l.OPTION_2 = 1] = "OPTION_2", l[l.OPTION_3 = 2] = "OPTION_3", l[l.OPTION_4 = 3] = "OPTION_4", l[l.OPTION_7 = 7] = "OPTION_7", l[l.OPTION_8 = 8] = "OPTION_8", l[l.OPTION_9 = 9] = "OPTION_9", l[l.OPTION_10 = 10] = "OPTION_10";
            let o = [i.OPTION_7, i.OPTION_8, i.OPTION_9, i.OPTION_10],
                u = [i.OPTION_7, i.OPTION_8, i.OPTION_9, i.OPTION_10, i.OPTION_1, i.OPTION_2, i.OPTION_3, i.OPTION_4].reduce((e, t, n) => ({
                    ...e,
                    [t]: n
                }), {}),
                s = "blur",
                c = {
                    width: 1280,
                    height: 720
                },
                d = 10485760
        },
        450205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("666038");
            class i extends r.default {
                toString() {
                    return this.name
                }
                constructor(e) {
                    super(), this.id = e.id, this.type = e.type, this.name = e.name, this.revoked = e.revoked || !1, this.integrations = e.integrations || [], this.visibility = e.visibility || 0, this.friendSync = e.friend_sync || !1, this.showActivity = e.show_activity || !1, this.verified = e.verified || !1, this.accessToken = e.access_token || null, this.twoWayLink = e.two_way_link || !1, this.metadata = e.metadata || null, this.metadataVisibility = e.metadata_visibility || 0
                }
            }
        },
        522308: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("666038");
            class i extends r.default {
                static createFromServer(e, t) {
                    return new i({
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
                }
                isOnCooldown() {
                    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
                }
                isAvailable() {
                    return null == this.premiumGuildSubscription && !this.isOnCooldown()
                }
                constructor(e) {
                    super(), this.id = e.id, this.subscriptionId = e.subscriptionId, this.premiumGuildSubscription = e.premiumGuildSubscription, this.canceled = e.canceled, this.cooldownEndsAt = e.cooldownEndsAt, this.subscription = e.subscription
                }
            }
            var a = i
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("866227"),
                i = n.n(r),
                a = n("666038");
            class l extends a.default {
                static createFromServer(e) {
                    var t;
                    return new l({
                        ...e,
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: i(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = i(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = i(this.createdAt);
                        return e.add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.code = e.code || "", this.temporary = e.temporary || !1, this.revoked = e.revoked || !1, this.uses = e.uses || 0, this.maxUses = e.maxUses || 0, this.maxAge = e.maxAge || 0, this.createdAt = e.createdAt || new Date, this.channel = e.channel, this.guild = e.guild, this.inviter = e.inviter || null, this.targetType = e.targetType || null, this.targetUser = e.targetUser || null, this.targetApplication = e.targetApplication || null, this.type = e.type || null, this.flags = e.flags || 0
                }
            }
        },
        47319: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var r = n("446674"),
                i = n("913144"),
                a = n("619340"),
                l = n("376556"),
                o = n("450205"),
                u = n("813006"),
                s = n("49111");
            let c = new Set([s.PlatformTypes.CONTACTS]),
                d = !0,
                E = [],
                f = [],
                _ = {},
                I = {},
                p = e => {
                    E = e.filter(e => !c.has(e.type) && l.default.isSupported(e.type)), f = e.filter(e => c.has(e.type)), d = !1
                };
            class T extends r.default.Store {
                isJoining(e) {
                    return _[e] || !1
                }
                isFetching() {
                    return d
                }
                getAccounts() {
                    return E
                }
                getLocalAccounts() {
                    return f
                }
                getAccount(e, t) {
                    return E.find(n => (null == e || n.id === e) && n.type === t)
                }
                getLocalAccount(e) {
                    return f.find(t => t.type === e)
                }
                isSuggestedAccountType(e) {
                    return I[e] || !1
                }
            }
            T.displayName = "ConnectedAccountsStore";
            var h = new T(i.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new o.default(e));
                    p(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        let t = e.accounts.map(e => new o.default({
                            ...e,
                            integrations: e.integrations.map(e => ({
                                ...e,
                                guild: new u.default(e.guild)
                            }))
                        }));
                        p(t)
                    } else a.default.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    _[e.integrationId] = e.joining
                },
                USER_CONNECTION_UPDATE: function(e) {
                    let {
                        platformType: t,
                        id: n,
                        revoked: r,
                        accessToken: i
                    } = e, a = E.find(e => e.id === n && e.type === t);
                    if (null == a) return !1;
                    null != r && (a.revoked = r), null != i && (a.accessToken = i)
                }
            })
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("446674"),
                i = n("913144"),
                a = n("9294"),
                l = n("49111");
            let o = {},
                u = {},
                s = {};

            function c(e, t) {
                var n;
                e = null != e ? e : "";
                let r = (0, a.parseExtraDataFromInviteKey)(e),
                    i = o[e],
                    u = null != i ? {
                        state: l.InviteStates.RESOLVING,
                        ...i
                    } : {
                        state: l.InviteStates.RESOLVING,
                        code: r.baseCode
                    };
                t(u), o = {
                    ...o,
                    [e]: u
                }, (null === (n = u.guild) || void 0 === n ? void 0 : n.id) != null && (s = {
                    ...s,
                    [u.guild.id]: e
                })
            }

            function d(e) {
                return c(e.code, t => {
                    t.state = "banned" in e && e.banned ? l.InviteStates.BANNED : l.InviteStates.EXPIRED
                })
            }
            class E extends r.default.Store {
                getInvite(e) {
                    return o[e]
                }
                getInviteError(e) {
                    return u[e]
                }
                getInvites() {
                    return o
                }
                getInviteKeyForGuildId(e) {
                    return s[e]
                }
            }
            E.displayName = "InviteStore";
            var f = new E(i.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, a.parseExtraDataFromInviteKey)(t);
                    o = {
                        ...o,
                        [t]: {
                            code: n.baseCode,
                            state: l.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return c(e.code, t => {
                        var n, r;
                        t.state = l.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: d,
                INSTANT_INVITE_REVOKE_SUCCESS: d,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        t.state = l.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => c(e.code, e => {
                        e.state = l.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        var n, r;
                        t.state = l.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return c(e.code, e => {
                        e.state = l.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return c(e.code, t => {
                        t.state = l.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return u[e.code] = e.error, c(e.code, e => {
                        e.state = l.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return c(e.code, e => {
                        e.state = l.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = l.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = l.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        778588: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("446674"),
                i = n("913144");
            let a = [];

            function l() {
                a = []
            }
            class o extends r.default.Store {
                hasLayers() {
                    return a.length > 0
                }
                getLayers() {
                    return a
                }
            }
            o.displayName = "LayerStore";
            var u = new o(i.default, {
                LAYER_PUSH: function(e) {
                    let {
                        component: t
                    } = e;
                    if (a.indexOf(t) >= 0) return !1;
                    a = [...a, t]
                },
                LAYER_POP: function() {
                    if (0 === a.length) return !1;
                    a = a.slice(0, -1)
                },
                LAYER_POP_ALL: l,
                LOGOUT: l,
                NOTIFICATION_CLICK: l
            })
        },
        26092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var r = n("917351"),
                i = n.n(r),
                a = n("446674"),
                l = n("913144"),
                o = n("697218"),
                u = n("49111");
            let s = u.FormStates.CLOSED,
                c = null,
                d = null,
                E = {},
                f = {},
                _ = {},
                I = null,
                p = null,
                T = !1,
                h = !1,
                A = null,
                O = null,
                S = null,
                N = [],
                C = null,
                g = null;

            function R(e) {
                var t, n, r, i, a, l;
                let c = o.default.getCurrentUser();
                if (null == c) return v();
                d = null !== (t = e.section) && void 0 !== t ? t : d, C = null !== (n = e.section) && void 0 !== n ? n : d, null != e.subsection && null != d && (E[d] = e.subsection), null != e.scrollPosition && null != d && (f[d] = e.scrollPosition), h = !!e.openWithoutBackstack, s = u.FormStates.OPEN, _ = {}, p = {
                    ...I = {
                        [u.UserSettingsSections.ACCOUNT]: {
                            userId: c.id,
                            username: c.username,
                            discriminator: c.discriminator,
                            email: c.email,
                            avatar: c.avatar,
                            password: "",
                            newPassword: null,
                            claimed: c.isClaimed()
                        }
                    }
                }, O = null !== (r = e.onClose) && void 0 !== r ? r : null, S = null !== (i = e.analyticsLocation) && void 0 !== i ? i : null, N = null !== (a = e.analyticsLocations) && void 0 !== a ? a : [], g = null !== (l = e.impressionSource) && void 0 !== l ? l : null
            }

            function v() {
                s = u.FormStates.CLOSED, T = !1, I = null, C = null, p = null, c = null, d = null, E = {}, f = {}, O = null, S = null, N = [], g = null
            }

            function L() {
                s = u.FormStates.OPEN, _ = {}
            }
            class D extends a.default.Store {
                initialize() {
                    this.waitFor(o.default)
                }
                hasChanges() {
                    return null != p && null != I && (!!this.isOpen() || A === u.DrawerTabTypes.USER_SETTINGS) && !i.isEqual(p, I)
                }
                isOpen() {
                    return T
                }
                getPreviousSection() {
                    return c
                }
                getSection() {
                    return d
                }
                getSubsection() {
                    return null != d ? E[d] : null
                }
                getScrollPosition() {
                    return null != d ? f[d] : null
                }
                shouldOpenWithoutBackstack() {
                    return h
                }
                getProps() {
                    return {
                        submitting: s === u.FormStates.SUBMITTING,
                        section: d,
                        subsection: null != d ? E[d] : null,
                        scrollPosition: null != d ? f[d] : null,
                        settings: p,
                        errors: _,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: h,
                        analyticsLocation: S,
                        analyticsLocations: N,
                        initialSection: C,
                        impressionSource: g
                    }
                }
                get onClose() {
                    return O
                }
            }
            D.displayName = "UserSettingsModalStore";
            var m = new D(l.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    T = !0, R(e)
                },
                USER_SETTINGS_MODAL_INIT: R,
                USER_SETTINGS_MODAL_CLOSE: v,
                LOGOUT: v,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    s = u.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (s !== u.FormStates.SUBMITTING) return !1;
                    s = u.FormStates.OPEN, d = u.UserSettingsSections.ACCOUNT, _ = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    c = d, d = e.section, S = null, N = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (E[d] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete E[t] : null != d && delete E[d]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete f[t] : null != d && delete f[d]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    let {
                        settings: t
                    } = e;
                    null == p && (p = {});
                    let n = p[u.UserSettingsSections.ACCOUNT];
                    p[u.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: L,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = o.default.getCurrentUser();
                    L(), null != e && (p = {
                        ...I = {
                            [u.UserSettingsSections.ACCOUNT]: {
                                userId: e.id,
                                username: e.username,
                                discriminator: e.discriminator,
                                email: e.email,
                                avatar: e.avatar,
                                password: "",
                                newPassword: null,
                                claimed: e.isClaimed()
                            }
                        }
                    })
                },
                DRAWER_SELECT_TAB: function(e) {
                    return A = e.tab, null == d && A === u.DrawerTabTypes.USER_SETTINGS && R({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        471671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var r = n("627445"),
                i = n.n(r),
                a = n("446674"),
                l = n("913144"),
                o = n("816454");
            let u = new Map;

            function s(e) {
                let t = u.get(e);
                return null == t ? (console.warn("Window state not initialized", e), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : t
            }
            class c extends a.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
                    return s(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return u.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
                    return s(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
                    return s(e).windowSize
                }
            }
            c.displayName = "WindowStore";
            let d = new c(l.default, {
                WINDOW_INIT: function(e) {
                    i(!u.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: r,
                        focused: a
                    } = e;
                    return u.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: r,
                        focused: a
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    let t = s(e.windowId);
                    return t.isElementFullscreen !== e.isElementFullscreen && (u.set(e.windowId, {
                        ...t,
                        isElementFullscreen: e.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(e) {
                    let t = s(e.windowId);
                    return t.focused !== e.focused && (u.set(e.windowId, {
                        ...t,
                        focused: e.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(e) {
                    let t = s(e.windowId);
                    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (u.set(e.windowId, {
                        ...t,
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(e) {
                    return u.delete(e.windowId), !0
                }
            });
            n.el("599110").then(n.bind(n, "599110")).then(e => {
                let {
                    addExtraAnalyticsDecorator: t
                } = e;
                t(e => {
                    e.client_app_state = d.isFocused() ? "focused" : "unfocused"
                })
            });
            var E = d
        },
        79798: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                a = n.n(i),
                l = n("414055"),
                o = n("12287"),
                u = n("988268"),
                s = n("782340"),
                c = n("647431");
            let d = e => {
                let t, {
                        invertColor: n = !1,
                        type: i = u.BotTagTypes.BOT,
                        className: d,
                        verified: E,
                        hideIcon: f = !1,
                        useRemSizes: _ = !1,
                        children: I = []
                    } = e,
                    p = null,
                    T = s.default.Messages.VERIFIED_BOT_TOOLTIP;
                switch (i) {
                    case u.BotTagTypes.SYSTEM_DM:
                    case u.BotTagTypes.OFFICIAL:
                        E = !0, T = s.default.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP, p = s.default.Messages.SYSTEM_DM_TAG_SYSTEM;
                        break;
                    case u.BotTagTypes.SERVER:
                        p = s.default.Messages.BOT_TAG_SERVER;
                        break;
                    case u.BotTagTypes.ORIGINAL_POSTER:
                        p = s.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER;
                        break;
                    case u.BotTagTypes.STAFF_ONLY_DM:
                        p = s.default.Messages.STAFF_BADGE_TOOLTIP;
                        break;
                    case u.BotTagTypes.AI:
                        E = !0, T = s.default.Messages.AI_GENERATED_TOOLTIP, p = s.default.Messages.AI_TAG;
                        break;
                    case u.BotTagTypes.REMIX:
                        E = !1, p = s.default.Messages.REMIXING_TAG;
                        break;
                    case u.BotTagTypes.BOT:
                    default:
                        p = s.default.Messages.BOT_TAG_BOT
                }
                let h = i === u.BotTagTypes.ORIGINAL_POSTER,
                    A = i === u.BotTagTypes.REMIX,
                    O = null;
                E && (O = (0, r.jsx)(l.Tooltip, {
                    text: T,
                    align: "center",
                    position: "top",
                    children: e => (0, r.jsx)(o.default, {
                        ...e,
                        className: c.botTagVerified
                    })
                })), t = i === u.BotTagTypes.AI ? c.botTagAI : n ? c.botTagInvert : c.botTagRegular;
                let S = e => (0, r.jsxs)("span", {
                    ...e,
                    className: a(d, t, _ ? c.rem : c.px, {
                        [c.botTagOP]: h,
                        [c.botTagRemix]: A
                    }),
                    children: [f ? null : O, I, (0, r.jsx)("span", {
                        className: c.botText,
                        children: p
                    })]
                });
                switch (i) {
                    case u.BotTagTypes.REMIX:
                        return (0, r.jsx)(l.Tooltip, {
                            text: s.default.Messages.REMIXING_DOWNLOAD_APP,
                            position: "top",
                            children: e => S(e)
                        });
                    case u.BotTagTypes.ORIGINAL_POSTER:
                        return (0, r.jsx)(l.Tooltip, {
                            text: s.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
                            position: "top",
                            children: e => S(e)
                        });
                    default:
                        return S()
                }
            };
            d.Types = u.BotTagTypes;
            var E = d
        },
        83900: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("753809"),
                l = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, r.jsx)("path", {
                                className: a,
                                fill: i,
                                d: "M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"
                            }), (0, r.jsx)("rect", {
                                width: "24",
                                height: "24"
                            })]
                        })
                    })
                }, a.LinkIcon)
        },
        45029: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("434657"),
                l = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        className: a,
                        foreground: o,
                        ...u
                    } = e;
                    return (0, r.jsx)("svg", {
                        width: t,
                        height: n,
                        className: a,
                        viewBox: "0 0 24 24",
                        ...(0, l.default)(u),
                        children: (0, r.jsx)("path", {
                            className: o,
                            fill: i,
                            d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z",
                            "aria-hidden": !0
                        })
                    })
                }, a.LockIcon)
        },
        71216: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("173010"),
                l = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: a,
                            fill: i,
                            d: "M12 2C14.761 2 17 4.238 17 7V9H7V7C7 4.238 9.238 2 12 2ZM10.5 5.5C10.5 6.329 11.172 7 12 7C12.828 7 13.5 6.329 13.5 5.5C13.5 4.671 12.828 4 12 4C11.172 4 10.5 4.671 10.5 5.5ZM23 22H17L19 19V12H17V18C17 18.553 16.552 19 16 19H14L15 22H9L10 19H8C7.448 19 7 18.553 7 18V12H5V19L7 22H1L3 19V12C3 10.896 3.897 10 5 10H19C20.103 10 21 10.896 21 12V19L23 22ZM13 14C13 14.553 13.448 15 14 15C14.552 15 15 14.553 15 14C15 13.447 14.552 13 14 13C13.448 13 13 13.447 13 14Z"
                        })
                    })
                }, a.RobotIcon)
        },
        148337: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("877585"),
                l = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 18,
                        height: n = 18,
                        color: i = "currentColor",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: a,
                            fill: i,
                            d: "M19 6.00001C15.56 6.00001 12.826 2.43501 12.799 2.39801C12.421 1.89801 11.579 1.89801 11.201 2.39801C11.174 2.43501 8.44 6.00001 5 6.00001C4.447 6.00001 4 6.44801 4 7.00001V14C4 17.807 10.764 21.478 11.534 21.884C11.68 21.961 11.84 21.998 12 21.998C12.16 21.998 12.32 21.96 12.466 21.884C13.236 21.478 20 17.807 20 14V7.00001C20 6.44801 19.553 6.00001 19 6.00001ZM15 16L12 14L9 16L10 13L8 11H11L12 8.00001L13 11H16L14 13L15 16Z"
                        })
                    })
                }, a.ShieldIcon)
        },
        12287: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("276825"),
                l = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, r.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: i
                        })
                    })
                }, a.CheckmarkSmallIcon)
        },
        103603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fit: function() {
                    return s
                },
                zoomFit: function() {
                    return c
                },
                getRatio: function() {
                    return d
                },
                getCoverRatio: function() {
                    return E
                },
                makeCssUrlString: function() {
                    return f
                },
                getPalette: function() {
                    return I
                },
                getPaletteForAvatar: function() {
                    return p
                },
                readFileAsBase64: function() {
                    return h
                },
                dataUriFileSize: function() {
                    return A
                },
                dataUrlToFile: function() {
                    return O
                },
                isPNGAnimated: function() {
                    return S
                }
            });
            var r = n("627445"),
                i = n.n(r),
                a = n("917351"),
                l = n.n(a),
                o = n("48648"),
                u = n.n(o);

            function s(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: r,
                    maxHeight: i,
                    minWidth: a = 0,
                    minHeight: l = 0
                } = e;
                if (t !== r || n !== i) {
                    let e = t > r ? r / t : 1;
                    t = Math.max(Math.round(t * e), a), n = Math.max(Math.round(n * e), l);
                    let o = n > i ? i / n : 1;
                    t = Math.max(Math.round(t * o), a), n = Math.max(Math.round(n * o), l)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function c(e, t) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    r = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return s({
                    width: e,
                    height: t,
                    maxWidth: r,
                    maxHeight: n
                })
            }

            function d(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: r,
                    maxHeight: i
                } = e, a = 1;
                t > r && (a = r / t), t = Math.round(t * a);
                let l = 1;
                return (n = Math.round(n * a)) > i && (l = i / n), Math.min(a * l, 1)
            }

            function E(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: r,
                    maxHeight: i
                } = e;
                return t === n ? 1 : Math.min(Math.max(r / t, i / n), 1)
            }

            function f(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let _ = [
                [0, 0, 0]
            ];

            function I(e, t, n) {
                let r = document.createElement("canvas"),
                    i = r.getContext("2d");
                if (null == i) return _;
                let a = r.width = 0 === e.width ? 128 : e.width,
                    l = r.height = 0 === e.height ? 128 : e.height;
                i.drawImage(e, 0, 0, a, l);
                let o = i.getImageData(0, 0, a, l).data,
                    s = function(e, t, n) {
                        let r = [];
                        for (let i = 0, a, l, o, u, s; i < t; i += n) l = e[(a = 4 * i) + 0], o = e[a + 1], u = e[a + 2], (void 0 === (s = e[a + 3]) || s >= 125) && !(l > 250 && o > 250 && u > 250) && r.push([l, o, u]);
                        return r
                    }(o, a * l, n),
                    c = u(s, t);
                return "boolean" == typeof c ? _ : c.palette()
            }
            let p = e => T(e),
                T = l.memoize(e => new Promise((t, n) => {
                    let r = new Image;
                    r.crossOrigin = "Anonymous", r.onerror = e => {
                        n(e), r.onerror = r.onload = null, r = null
                    }, r.onload = () => {
                        t(I(r, 5, 10)), r.onerror = r.onload = null, r = null
                    }, r.src = e
                }));

            function h(e) {
                return new Promise((t, n) => {
                    let r = new FileReader;
                    r.readAsDataURL(e), r.onload = () => {
                        i("string" == typeof r.result, "Result must be a string"), t(r.result)
                    }, r.onerror = e => n(e)
                })
            }

            function A(e) {
                let t = e.split(";base64,");
                return i(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function O(e, t, n) {
                let r = function(e) {
                        let t;
                        t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                        let n = e.split(",")[0].split(":")[1].split(";")[0],
                            r = new Uint8Array(t.length);
                        for (var i = 0; i < t.length; i++) r[i] = t.charCodeAt(i);
                        return new Blob([r], {
                            type: n
                        })
                    }(e),
                    i = await r.arrayBuffer();
                return new File([i], t, {
                    type: n
                })
            }
            async function S(e) {
                var t;
                let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let r = await e.text(),
                    i = r.indexOf("IDAT");
                return !!(i > 0) && -1 !== r.substring(0, i).indexOf("acTL") || !1
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return a
                }
            });
            var r = n("917351"),
                i = n.n(r);
            let a = e => "function" == typeof e ? e() : e;
            i.curry((e, t, n) => a(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let r, i;
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("697218"),
                l = n("615931");
            let o = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                r = e.showModal, o = e.updateModalProps, i = n("551042").closeModal
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: a,
                    modalProps: l = {},
                    hooks: {
                        onEarlyClose: u
                    } = {}
                } = e;
                if (null == r) {
                    null == u || u();
                    return
                }
                let c = r(_, d, l);

                function d() {
                    null == u || u()
                }

                function E(e) {
                    i(c), n(e)
                }

                function f(e) {
                    i(c), a(e)
                }

                function _(e) {
                    return o(c, _, d, {
                        ...l,
                        isLoading: !0
                    }), s({
                        promiseFn: t,
                        resolve: E,
                        reject: f,
                        code: e,
                        mfaCodeHandler: I,
                        isModalOpen: !0
                    })
                }

                function I(e) {
                    let {
                        res: t
                    } = e;
                    o(c, _, d, {
                        ...l,
                        error: t.body.message
                    })
                }
            }

            function s(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: r,
                    code: i,
                    mfaCodeHandler: a = u,
                    isModalOpen: l = !1,
                    ...o
                } = e;
                return t(null != i ? {
                    code: i
                } : {}).then(n, e => {
                    var i, u;
                    if (i = e, u = l, i.body && 60008 === i.body.code || u && 429 === i.status) return a({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e,
                        ...o
                    });
                    r(e)
                })
            }

            function c(e, t) {
                var n, r;
                let {
                    checkEnabled: i = null !== (r = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== r && r,
                    ...o
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, l.resolveThunk)(i) ? u : s)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...o
                    })
                })
            }
        },
        829536: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                perceptualToAmplitude: function() {
                    return r
                },
                amplitudeToPerceptual: function() {
                    return i
                }
            });

            function r(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return 0 === e ? 0 : (t = e > n ? (e - n) / n * 6 : e / n * 50 - 50, n * Math.pow(10, t / 20))
            }

            function i(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                if (0 === e) return 0;
                let r = 20 * Math.log10(e / n);
                return n * (t = r > 0 ? r / 6 + 1 : (50 + r) / 50)
            }
        },
        833858: function(e, t, n) {
            "use strict";

            function r(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return r
                }
            })
        },
        655518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r = {
                escape: e => e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }
        },
        840707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("872717"),
                i = n("599110");

            function a(e, t, n) {
                let {
                    trackedActionData: r,
                    ...a
                } = t, l = {
                    url: a.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(a).then(e => {
                        let n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e)), (0, i.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            ...l,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, a;
                        let o = r.properties;
                        "function" == typeof r.properties && (o = r.properties(e)), (0, i.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (a = e.body) || void 0 === a ? void 0 : a.message,
                            ...l,
                            ...o
                        }), n(e)
                    })
                })
            }
            var l = {
                get: function(e) {
                    return a(r.default.get, e, "get")
                },
                post: function(e) {
                    return a(r.default.post, e, "post")
                },
                put: function(e) {
                    return a(r.default.put, e, "put")
                },
                patch: function(e) {
                    return a(r.default.patch, e, "patch")
                },
                delete: function(e) {
                    return a(r.default.delete, e, "del")
                }
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return o
                },
                updateModalProps: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                a = n("920636");
            let l = (e, t, n) => function(i) {
                return (0, r.jsx)(a.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...i
                })
            };

            function o(e, t, n) {
                return (0, i.openModal)(l(e, t, n), {
                    onCloseCallback: t
                })
            }

            function u(e, t, n, r) {
                return (0, i.updateModal)(e, l(t, n, r))
            }
        }
    }
]);