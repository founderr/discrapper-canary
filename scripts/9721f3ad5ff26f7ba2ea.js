(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["162"], {
        526504: function(e, t, n) {
            "use strict";
            var r = "%[a-f0-9]{2}",
                i = RegExp("(" + r + ")|([^%]+?)", "gi"),
                l = RegExp("(" + r + ")+", "gi");
            e.exports = function(e) {
                if ("string" != typeof e) throw TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
                try {
                    return e = e.replace(/\+/g, " "), decodeURIComponent(e)
                } catch (t) {
                    return function(e) {
                        for (var t = {
                                "%FE%FF": "��",
                                "%FF%FE": "��"
                            }, n = l.exec(e); n;) {
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
                            n = l.exec(e)
                        }
                        t["%C2"] = "�";
                        for (var a = Object.keys(t), o = 0; o < a.length; o++) {
                            var u = a[o];
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
                l = n("725502"),
                a = n("591350"),
                o = n("476540"),
                u = n("381178"),
                s = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var n = l(e),
                    c = !n && i(e),
                    d = !n && !c && a(e),
                    f = !n && !c && !d && u(e),
                    E = n || c || d || f,
                    _ = E ? r(e.length, String) : [],
                    I = _.length;
                for (var p in e)(t || s.call(e, p)) && !(E && ("length" == p || d && ("offset" == p || "parent" == p) || f && ("buffer" == p || "byteLength" == p || "byteOffset" == p) || o(p, I))) && _.push(p);
                return _
            }
        },
        562132: function(e, t, n) {
            var r = n("33426"),
                i = n("136047"),
                l = n("270879"),
                a = {};
            a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1;
            e.exports = function(e) {
                return l(e) && i(e.length) && !!a[r(e)]
            }
        },
        205873: function(e, t, n) {
            var r = n("733228"),
                i = n("541349"),
                l = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!r(e)) return i(e);
                var t = [];
                for (var n in Object(e)) l.call(e, n) && "constructor" != n && t.push(n);
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
                l = i && "object" == typeof e && e && !e.nodeType && e,
                a = l && l.exports === i && r.process,
                o = function() {
                    try {
                        var e = l && l.require && l.require("util").types;
                        if (e) return e;
                        return a && a.binding && a.binding("util")
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
                l = "object" == typeof t && t && !t.nodeType && t,
                a = l && "object" == typeof e && e && !e.nodeType && e,
                o = a && a.exports === l ? r.Buffer : void 0,
                u = o ? o.isBuffer : void 0;
            e.exports = u || i
        },
        381178: function(e, t, n) {
            var r = n("562132"),
                i = n("492692"),
                l = n("276440"),
                a = l && l.isTypedArray,
                o = a ? i(a) : r;
            e.exports = o
        },
        466731: function(e, t, n) {
            var r = n("458389"),
                i = n("205873"),
                l = n("603108");
            e.exports = function(e) {
                return l(e) ? r(e) : i(e)
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
                l = Object.prototype.propertyIsEnumerable;
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
                for (var n, a, o = function(e) {
                        if (null == e) throw TypeError("Object.assign cannot be called with null or undefined");
                        return Object(e)
                    }(e), u = 1; u < arguments.length; u++) {
                    for (var s in n = Object(arguments[u]), n) i.call(n, s) && (o[s] = n[s]);
                    if (r) {
                        a = r(n);
                        for (var c = 0; c < a.length; c++) l.call(n, a[c]) && (o[a[c]] = n[a[c]])
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

                function i(e, t, n, r, i, l, a) {
                    this.r1 = e, this.r2 = t, this.g1 = n, this.g2 = r, this.b1 = i, this.b2 = l, this.histo = a
                }

                function l() {
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
                            var r, i, l, a = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (l = this.b1; l <= this.b2; l++) a += n[t(r, i, l)] || 0;
                            this._count = a, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new i(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(e) {
                        var n = this.histo;
                        if (!this._avg || e) {
                            var r, i, l, a, o = 0,
                                u = 8,
                                s = 0,
                                c = 0,
                                d = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (l = this.g1; l <= this.g2; l++)
                                    for (a = this.b1; a <= this.b2; a++) o += r = n[t(i, l, a)] || 0, s += r * (i + .5) * u, c += r * (l + .5) * u, d += r * (a + .5) * u;
                            o ? this._avg = [~~(s / o), ~~(c / o), ~~(d / o)] : this._avg = [~~(u * (this.r1 + this.r2 + 1) / 2), ~~(u * (this.g1 + this.g2 + 1) / 2), ~~(u * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(t) {
                        var n = t[0] >> e;
                        return gval = t[1] >> e, bval = t[2] >> e, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, l.prototype = {
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
                        for (var t, n, r, i = this.vboxes, l = 0; l < i.size(); l++)((n = Math.sqrt(Math.pow(e[0] - i.peek(l).color[0], 2) + Math.pow(e[1] - i.peek(l).color[1], 2) + Math.pow(e[2] - i.peek(l).color[2], 2))) < t || void 0 === t) && (t = n, r = i.peek(l).color);
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
                    quantize: function(a, o) {
                        if (!a.length || o < 2 || o > 256) return !1;
                        var u, s, c, d, f, E, _, I, p, T, h, S, O, A, N, C, g = (u = a, f = Array(32768), u.forEach(function(n) {
                                c = n[0] >> e, d = n[1] >> e, f[s = t(c, d, n[2] >> e)] = (f[s] || 0) + 1
                            }), f),
                            v = 0;
                        g.forEach(function() {
                            v++
                        });
                        var R = (E = a, _ = g, h = 1e6, S = 0, O = 1e6, A = 0, N = 1e6, C = 0, E.forEach(function(t) {
                                I = t[0] >> e, p = t[1] >> e, T = t[2] >> e, I < h ? h = I : I > S && (S = I), p < O ? O = p : p > A && (A = p), T < N ? N = T : T > C && (C = T)
                            }), new i(h, S, O, A, N, C, _)),
                            D = new n(function(e, t) {
                                return r.naturalOrder(e.count(), t.count())
                            });

                        function L(e, n) {
                            for (var i, l = 1, a = 0; a < 1e3;) {
                                if (!(i = e.pop()).count()) {
                                    e.push(i), a++;
                                    continue
                                }
                                var o = function(e, n) {
                                        if (n.count()) {
                                            var i = n.r2 - n.r1 + 1,
                                                l = n.g2 - n.g1 + 1,
                                                a = n.b2 - n.b1 + 1,
                                                o = r.max([i, l, a]);
                                            if (1 == n.count()) return [n.copy()];
                                            var u, s, c, d, f, E = 0,
                                                _ = [],
                                                I = [];
                                            if (o == i)
                                                for (u = n.r1; u <= n.r2; u++) {
                                                    for (d = 0, s = n.g1; s <= n.g2; s++)
                                                        for (c = n.b1; c <= n.b2; c++) d += e[f = t(u, s, c)] || 0;
                                                    E += d, _[u] = E
                                                } else if (o == l)
                                                    for (u = n.g1; u <= n.g2; u++) {
                                                        for (d = 0, s = n.r1; s <= n.r2; s++)
                                                            for (c = n.b1; c <= n.b2; c++) d += e[f = t(s, u, c)] || 0;
                                                        E += d, _[u] = E
                                                    } else
                                                        for (u = n.b1; u <= n.b2; u++) {
                                                            for (d = 0, s = n.r1; s <= n.r2; s++)
                                                                for (c = n.g1; c <= n.g2; c++) d += e[f = t(s, c, u)] || 0;
                                                            E += d, _[u] = E
                                                        }
                                            return _.forEach(function(e, t) {
                                                I[t] = E - e
                                            }), p(o == i ? "r" : o == l ? "g" : "b")
                                        }

                                        function p(e) {
                                            var t, r, i, l, a, o = e + "1",
                                                s = e + "2",
                                                c = 0;
                                            for (u = n[o]; u <= n[s]; u++)
                                                if (_[u] > E / 2) {
                                                    for (i = n.copy(), l = n.copy(), t = u - n[o], a = t <= (r = n[s] - u) ? Math.min(n[s] - 1, ~~(u + r / 2)) : Math.max(n[o], ~~(u - 1 - t / 2)); !_[a];) a++;
                                                    for (c = I[a]; !c && _[a - 1];) c = I[--a];
                                                    return i[s] = a, l[o] = i[s] + 1, [i, l]
                                                }
                                        }
                                    }(g, i),
                                    u = o[0],
                                    s = o[1];
                                if (!u) return;
                                if (e.push(u), s && (e.push(s), l++), l >= n || a++ > 1e3) return
                            }
                        }
                        D.push(R), L(D, .75 * o);
                        for (var m = new n(function(e, t) {
                                return r.naturalOrder(e.count() * e.volume(), t.count() * t.volume())
                            }); D.size();) m.push(D.pop());
                        L(m, o - m.size());
                        for (var M = new l; m.size();) M.push(m.pop());
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
                l = n("526504");

            function a(e, t) {
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
                        a = t.length > 0 ? t.join("=") : void 0;
                    a = void 0 === a ? null : l(a), n(l(i), a, r)
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
                                return null === n ? [a(t, e), "[", r, "]"].join("") : [a(t, e), "[", a(r, e), "]=", a(n, e)].join("")
                            };
                        case "bracket":
                            return function(t, n) {
                                return null === n ? a(t, e) : [a(t, e), "[]=", a(n, e)].join("")
                            };
                        default:
                            return function(t, n) {
                                return null === n ? a(t, e) : [a(t, e), "=", a(n, e)].join("")
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
                    if (null === i) return a(r, t);
                    if (Array.isArray(i)) {
                        var l = [];
                        return i.slice().forEach(function(e) {
                            void 0 !== e && l.push(n(r, e, l.length))
                        }), l.join("&")
                    }
                    return a(r, t) + "=" + a(i, t)
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
                    return l.default
                }
            });
            var r = n("14716"),
                i = n("745510"),
                l = n("315378")
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
                    return l
                }
            });
            var r = n("884691");
            let i = {};

            function l(e) {
                let t = (0, r.useRef)(i);
                return t.current === i && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("884691"),
                i = n("48174");
            let l = [];

            function a(e, t) {
                let n = (0, r.useRef)(),
                    a = (0, r.useRef)(l);
                return a.current === l ? (n.current = e(), a.current = t) : !(0, i.default)(t, a.current) && (n.current = e(), a.current = t), n.current
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
                    l = new Uint8Array(i);
                for (let e = 0; e < r.length; e++) l[e] = r.charCodeAt(e);
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
                    return S
                }
            });
            var l = "copy",
                a = "convert";

            function o(e, t, n) {
                if (t === l) return n;
                if (t === a) return e(n);
                if (t instanceof Array) return n.map(n => o(e, t[0], n));
                if (t instanceof Object) {
                    let r = {};
                    for (let [i, l] of Object.entries(t)) {
                        if (l.derive) {
                            let e = l.derive(n);
                            void 0 !== e && (n[i] = e)
                        }
                        if (!(i in n)) {
                            if (l.required) throw Error("Missing key: ".concat(i));
                            continue
                        }
                        if (null == n[i]) {
                            r[i] = null;
                            continue
                        }
                        r[i] = o(e, l.schema, n[i])
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
                    type: s(l),
                    id: s(a),
                    transports: c(l)
                },
                f = {
                    appid: c(l),
                    appidExclude: c(l),
                    credProps: c(l)
                },
                E = {
                    appid: c(l),
                    appidExclude: c(l),
                    credProps: c(l)
                },
                _ = {
                    publicKey: s({
                        rp: s(l),
                        user: s({
                            id: s(a),
                            name: s(l),
                            displayName: s(l)
                        }),
                        challenge: s(a),
                        pubKeyCredParams: s(l),
                        timeout: c(l),
                        excludeCredentials: c([d]),
                        authenticatorSelection: c(l),
                        attestation: c(l),
                        extensions: c(f)
                    }),
                    signal: c(l)
                },
                I = {
                    type: s(l),
                    id: s(l),
                    rawId: s(a),
                    authenticatorAttachment: c(l),
                    response: s({
                        clientDataJSON: s(a),
                        attestationObject: s(a),
                        transports: u(l, e => {
                            var t;
                            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
                        })
                    }),
                    clientExtensionResults: u(E, e => e.getClientExtensionResults())
                },
                p = {
                    mediation: c(l),
                    publicKey: s({
                        challenge: s(a),
                        timeout: c(l),
                        rpId: c(l),
                        allowCredentials: c([d]),
                        userVerification: c(l),
                        extensions: c(f)
                    }),
                    signal: c(l)
                },
                T = {
                    type: s(l),
                    id: s(l),
                    rawId: s(a),
                    authenticatorAttachment: c(l),
                    response: s({
                        clientDataJSON: s(a),
                        authenticatorData: s(a),
                        signature: s(a),
                        userHandle: s(a)
                    }),
                    clientExtensionResults: u(E, e => e.getClientExtensionResults())
                };
            async function h(e) {
                let t = await navigator.credentials.create(o(r, _, e));
                return o(i, I, t)
            }
            async function S(e) {
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
                    return l
                },
                popAllLayers: function() {
                    return a
                }
            });
            var r = n("913144");

            function i(e) {
                r.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function l() {
                r.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function a() {
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
                    return f
                },
                fetchPremiumSubscriptionPlans: function() {
                    return E
                },
                resetSubscriptionPlanData: function() {
                    return _
                }
            });
            var r = n("872717"),
                i = n("913144"),
                l = n("333805"),
                a = n("160299"),
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
                    let l = {
                            url: s.Endpoints.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                            oldFormErrors: !0
                        },
                        o = {};
                    null != t && (o.country_code = t), null != n && (o.payment_source_id = n), null != c && (o.include_unpublished = c), null != d && (o.revenue_surface = d), l.query = o, !a.default.ipCountryCodeLoaded && await (0, u.fetchIpCountryCode)();
                    let f = await r.default.get(l);
                    i.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                        skuId: e,
                        subscriptionPlans: f.body
                    })
                } catch (t) {
                    throw i.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                        skuId: e
                    }), (0, o.captureBillingException)(t), new l.default(t)
                }
            }

            function f(e, t) {
                return Promise.all(e.filter(e => e !== c.PremiumSubscriptionSKUs.NONE).map(e => d(e, t)))
            }

            function E(e, t, n) {
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
                l = n("913144"),
                a = n("211895"),
                o = n("26092"),
                u = n("599110"),
                s = n("315102"),
                c = n("730622"),
                d = n("49111"),
                f = n("191349"),
                E = n("782340"),
                _ = {
                    open() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                openWithoutBackstack: !1
                            };
                        (0, a.default)(e, t, n)
                    },
                    init: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_INIT",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    close() {
                        let e = o.default.onClose;
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), null != e && e()
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SET_SECTION",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    clearSubsection(e) {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                            forSection: e
                        })
                    },
                    clearScrollPosition(e) {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                            forSection: e
                        })
                    },
                    updateAccount(e) {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                            settings: e
                        })
                    },
                    submitComplete() {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                        })
                    },
                    reset() {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_RESET"
                        })
                    },
                    saveAccountChanges(e, t) {
                        l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT"
                        });
                        let {
                            username: n,
                            email: a,
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
                                    email: a,
                                    email_token: o,
                                    password: _,
                                    avatar: I,
                                    new_password: p,
                                    ...e,
                                    discriminator: null != T && "" !== T ? T : void 0
                                },
                                l = i.default.get(d.DEVICE_TOKEN),
                                u = (0, f.getDevicePushProvider)();
                            null != u && null != l && (t.push_provider = u, t.push_token = l);
                            let s = i.default.get(d.DEVICE_VOIP_TOKEN);
                            return null != f.DEVICE_PUSH_VOIP_PROVIDER && null != s && (t.push_voip_provider = f.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = s), r.default.patch({
                                url: d.Endpoints.ME,
                                oldFormErrors: !0,
                                body: t
                            })
                        }, {
                            checkEnabled: !1,
                            modalProps: {
                                title: E.default.Messages.TWO_FA_CHANGE_ACCOUNT
                            },
                            hooks: {
                                onEarlyClose: () => l.default.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }).then(e => {
                            let t = e.body,
                                n = t.token;
                            return u.default.track(d.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, s.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, l.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), l.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != p && l.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: p
                            }), null != _ && null != p && l.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), h ? this.close() : this.submitComplete(), e
                        }, e => (l.default.dispatch({
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
                l = n("414456"),
                a = n.n(l),
                o = n("77078"),
                u = n("782340"),
                s = n("347129");
            class c extends i.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: l,
                        error: c,
                        isLoading: d,
                        maxLength: f,
                        transitionState: E,
                        helpMessage: _,
                        retryPrompt: I,
                        retrySuccessMessage: p
                    } = this.props, {
                        code: T,
                        errorMessage: h,
                        retrySuccess: S
                    } = this.state, O = i.Children.count(l) > 0 ? (0, r.jsx)(o.Card, {
                        type: o.Card.Types.WARNING,
                        className: s.card,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: l
                        })
                    }) : null, A = null != I ? (0, r.jsxs)(o.Text, {
                        className: a(s.submitText, s.spacing),
                        variant: "text-sm/normal",
                        children: [(0, r.jsx)("br", {}), (0, r.jsx)(o.Clickable, {
                            className: a(s.spacing, s.link),
                            onClick: this.handleRetry,
                            children: (0, r.jsx)(o.Anchor, {
                                children: I
                            })
                        })]
                    }) : null, N = S ? (0, r.jsx)(o.Card, {
                        type: o.Card.Types.SUCCESS,
                        className: s.card,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: p
                        })
                    }) : null;
                    return (0, r.jsx)(o.ModalRoot, {
                        transitionState: E,
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
                                        maxLength: null != f ? f : 10,
                                        value: T,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(o.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: s.error,
                                        children: null != c ? c : h
                                    }) : null, A]
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
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
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
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
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
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...u
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M16.293 14.707a1 1 0 0 1 0-1.414l2.5-2.5a3.95 3.95 0 1 0-5.586-5.586l-2.5 2.5a1 1 0 1 1-1.414-1.414l2.5-2.5a5.95 5.95 0 1 1 8.414 8.414l-2.5 2.5a1 1 0 0 1-1.414 0ZM7.707 9.293a1 1 0 0 1 0 1.414l-2.5 2.5a3.95 3.95 0 0 0 5.586 5.586l2.5-2.5a1 1 0 1 1 1.414 1.414l-2.5 2.5a5.95 5.95 0 0 1-8.414-8.414l2.5-2.5a1 1 0 0 1 1.414 0Z",
                        className: o
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
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
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
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
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...u
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M7.889 13.458a1 1 0 0 1-1.783-.905L7 13l-.894-.447v-.002l.001-.001.002-.004.004-.007.01-.02a2.422 2.422 0 0 1 .139-.23 3.28 3.28 0 0 1 .406-.496C7.027 11.433 7.64 11 8.5 11c.859 0 1.473.434 1.832.793a3.278 3.278 0 0 1 .544.725l.011.02.004.008.002.004v.001s.002.002-.893.449l.895-.447a1 1 0 0 1-1.784.905l-.003-.005a1.28 1.28 0 0 0-.19-.246C8.777 13.067 8.64 13 8.5 13c-.141 0-.277.066-.418.207a1.28 1.28 0 0 0-.19.246l-.003.005ZM13.553 13.895a1 1 0 0 0 1.336-.437l.003-.005a1.28 1.28 0 0 1 .19-.246c.141-.14.277-.207.418-.207.141 0 .277.066.418.207a1.28 1.28 0 0 1 .19.246l.003.005a1 1 0 0 0 1.784-.905L17 13l.895-.447-.001-.002-.001-.001-.002-.004-.004-.007-.01-.02a2.565 2.565 0 0 0-.139-.23 3.278 3.278 0 0 0-.406-.496c-.359-.36-.973-.793-1.832-.793-.859 0-1.473.434-1.832.793a3.28 3.28 0 0 0-.544.725l-.011.02-.004.008-.002.004v.001s-.001.002.893.449l-.894-.447a1 1 0 0 0 .447 1.341Z",
                        className: o
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
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
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
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
                    return a
                }
            });
            var r = n("872717"),
                i = n("49111"),
                l = n("782340");
            class a extends r.default.V8APIError {
                constructor(e, t) {
                    super(e, t, null != t ? l.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: i.Links.STATUS,
                        details: "".concat(t)
                    }) : l.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: i.Links.STATUS
                    }))
                }
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("872717"),
                i = n("49111"),
                l = n("782340");
            class a extends r.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? l.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: i.Links.STATUS,
                        details: "".concat(t)
                    }) : l.default.Messages.FORM_ERROR_GENERIC.format({
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
                l = n("913144"),
                a = n("970728"),
                o = n("79112"),
                u = n("389153"),
                s = n("412707"),
                c = n("139514"),
                d = n("312016"),
                f = n("374021"),
                E = n("398604"),
                _ = n("468560"),
                I = n("361572"),
                p = n("537325"),
                T = n("835174"),
                h = n("566271"),
                S = n("337543"),
                O = n("18494"),
                A = n("162771"),
                N = n("677099"),
                C = n("599110"),
                g = n("253981");
            n("545158");
            var v = n("49111");
            async function R(e, t) {
                await l.default.dispatch({
                    type: "INVITE_MODAL_OPEN",
                    invite: e,
                    code: t,
                    context: v.AppContext.APP
                })
            }
            async function D(e) {
                var t, n;
                let r = S.default.getInvite(e.code);
                if (null == r) {
                    let {
                        invite: t
                    } = await a.default.resolveInvite(e.code, "Markdown Link");
                    r = t
                }
                if (null == r) return;
                if (r.state === v.InviteStates.EXPIRED || r.state === v.InviteStates.BANNED || r.state === v.InviteStates.ERROR) {
                    await R(r, e.code);
                    return
                }
                let i = N.default.getFlattenedGuildIds(),
                    l = null === (n = r) || void 0 === n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id,
                    o = null != l && i.includes(l);
                o ? a.default.transitionToInviteSync(r) : await R(r, e.code)
            }
            let L = {
                skipExtensionCheck: void 0,
                analyticsLocations: []
            };

            function m(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L,
                    l = (0, d.findCodedLink)(e),
                    {
                        skipExtensionCheck: a
                    } = t;
                if (null != l && (l.type === c.CodedLinkType.INVITE || l.type === c.CodedLinkType.EMBEDDED_ACTIVITY_INVITE)) return e => (null == e || e.preventDefault(), D(l), !0);
                if (null != l && l.type === c.CodedLinkType.APP_DIRECTORY_PROFILE) return e => {
                    var t;
                    null == e || e.preventDefault();
                    let {
                        code: r
                    } = l, a = null !== (t = A.default.getGuildId()) && void 0 !== t ? t : void 0;
                    return C.default.track(v.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                        application_id: r,
                        device_platform: i.isMobile ? "mobile_web" : "desktop_web",
                        guild_id: a,
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
                            guildId: a,
                            entrypoint: {
                                name: s.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL
                            }
                        })
                    }), !0
                };
                if (null != l && l.type === c.CodedLinkType.GUILD_PRODUCT) return e => {
                    null == e || e.preventDefault();
                    let [t, r] = l.code.split("-");
                    return n.el("573777").then(n.bind(n, "573777")).then(e => {
                        let {
                            openGuildProductLink: n
                        } = e;
                        n(t, r)
                    }), !0
                };
                let {
                    path: S,
                    hostname: N = "",
                    host: R,
                    query: m
                } = r.parse(e), M = g.default.isDiscordHostname(N) || window.location.host === R;
                if (M && (null == S ? void 0 : S.startsWith("/application-directory"))) {
                    let [, , e, t] = S.split("/"), r = null != e && (0, u.isSnowflake)(e) ? e : void 0;
                    return l => {
                        var a;
                        null == l || l.preventDefault();
                        let {
                            ApplicationDirectoryProfileSections: o
                        } = n("750947"), {
                            ApplicationDirectoryViews: u
                        } = n("412707"), c = null !== (a = A.default.getGuildId()) && void 0 !== a ? a : void 0, d = u.HOME;
                        return "search" === e && (d = u.SEARCH), null != r && (d = u.APPLICATION, C.default.track(v.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
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
                if (null != S && M && g.default.isAppRoute(S)) {
                    let e = null != m ? {
                        search: m
                    } : null;
                    return t => (null == t || t.preventDefault(), (0, p.default)(S, e), !0)
                }
                if (null != S && M) {
                    let {
                        getOAuth2AuthorizeProps: t,
                        openOAuth2Modal: r
                    } = n("33942"), i = t(e);
                    if (null != i) return e => (null == e || e.preventDefault(), r(i), !0)
                }
                let y = (0, I.tryParseEventDetailsPath)(S);
                if (null != S && M && null != y) return e => {
                    null == e || e.preventDefault();
                    let t = A.default.getGuildId();
                    null != y.guildId && "" !== y.guildId && y.guildId !== t && (0, p.default)(v.Routes.CHANNEL(y.guildId));
                    let n = E.default.getGuildScheduledEvent(y.guildEventId);
                    return null != n && (0, f.openGuildEventDetails)({
                        eventId: n.id
                    }), !0
                };
                if (M && (null == S ? void 0 : S.startsWith("/settings/"))) {
                    let {
                        default: e
                    } = n("777523"), t = e(S);
                    if (null != t) return e => (null == e || e.preventDefault(), o.default.open(t.section, t.subsection, {
                        openWithoutBackstack: !1,
                        impressionSource: t.source
                    }), !0)
                }
                if (!a && null != (0, h.isSuspiciousDownload)(e)) return t => (null == t || t.preventDefault(), T.default.show(e), !0)
            }
        },
        212084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("605250"),
                i = n("802493");
            let l = new r.default("GuildStickers");
            var a = new class e {
                getSync(e) {
                    let t = performance.now(),
                        n = i.default.stickers(e).getMapEntriesSyncUnsafe(),
                        r = performance.now();
                    return l.log("synchronously loaded in ".concat(r - t, "ms (guilds: ").concat(n.length, ")")), n
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
                        "full" === e.dataMode ? (l.verbose("Replacing ".concat(e.entities.length, " stickers for ").concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (l.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " stickers for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
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
                    let l = i.default.stickersTransaction(r);
                    for (let r of (l.putAll(e, t), n)) l.delete(e, r)
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
                    return f
                },
                SUB_COMMAND_KEY_SEPARATOR: function() {
                    return E
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
                    return S
                }
            });
            var r, i, l = n("798609"),
                a = n("782340");
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
                f = 25,
                E = "\x00",
                _ = 100,
                I = 3,
                p = 10,
                T = 1,
                h = 500;

            function S(e) {
                if (null != e.choices) return a.default.Messages.COMMAND_VALIDATION_CHOICE_ERROR;
                switch (e.type) {
                    case l.ApplicationCommandOptionType.BOOLEAN:
                        return a.default.Messages.COMMAND_VALIDATION_BOOLEAN_ERROR;
                    case l.ApplicationCommandOptionType.CHANNEL:
                        return a.default.Messages.COMMAND_VALIDATION_CHANNEL_ERROR;
                    case l.ApplicationCommandOptionType.INTEGER:
                        return a.default.Messages.COMMAND_VALIDATION_INTEGER_ERROR;
                    case l.ApplicationCommandOptionType.NUMBER:
                        return a.default.Messages.COMMAND_VALIDATION_NUMBER_ERROR;
                    case l.ApplicationCommandOptionType.ROLE:
                        return a.default.Messages.COMMAND_VALIDATION_ROLE_ERROR;
                    case l.ApplicationCommandOptionType.USER:
                        return a.default.Messages.COMMAND_VALIDATION_USER_ERROR;
                    case l.ApplicationCommandOptionType.MENTIONABLE:
                        return a.default.Messages.COMMAND_VALIDATION_MENTIONABLE_ERROR;
                    default:
                        return a.default.Messages.COMMAND_VALIDATION_GENERAL_ERROR
                }
            }
        },
        349503: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FetchState: function() {
                    return i
                },
                default: function() {
                    return f
                }
            });
            var r, i, l = n("446674"),
                a = n("913144");
            (r = i || (i = {}))[r.FETCHING = 0] = "FETCHING", r[r.FETCHED = 1] = "FETCHED", r[r.ERROR = 2] = "ERROR";
            let o = {},
                u = {},
                s = new Set,
                c = {};
            class d extends l.default.Store {
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
            var f = new d(a.default, {
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
                    return l
                },
                ApplicationDirectoryEntrypointNames: function() {
                    return a
                },
                useApplicationDirectoryHistory: function() {
                    return E
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
                    return S
                }
            });
            var r, i, l, a, o = n("803182"),
                u = n("308503"),
                s = n("393414"),
                c = n("349503"),
                d = n("49111");
            (r = l || (l = {})).HOME = "home", r.SEARCH = "search", r.APPLICATION = "application", (i = a || (a = {})).EXTERNAL = "External", i.KEYBOARD_SHORTCUT = "Keyboard Shortcut", i.APPLICATION_DIRECTORY_URL = "Application Directory URL", i.APPLICATION_DIRECTORY_PROFILE_EMBED = "Application Directory Profile Embed", i.APPLICATION_DIRECTORY_UPSELL_MODAL = "Application Directory Upsell Modal", i.GUILD_HEADER_POPOUT = "Guild Header Popout", i.GUILD_SETTINGS = "Guild Settings", i.GUILD_INTEGRATION_SETTINGS = "Guild Integration Settings", i.GUILD_CONTEXT_MENU = "Guild Context Menu";
            let f = (0, u.default)(() => ({
                    guildId: null,
                    entrypoint: null,
                    trackedOpenedFromExternalEntrypoint: !1
                })),
                E = f;

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
                }), a = (0, o.matchPath)(n, {
                    path: [d.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId"), d.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section")],
                    exact: !0
                }), {
                    applicationId: u,
                    section: f
                } = null !== (e = null == a ? void 0 : a.params) && void 0 !== e ? e : {};
                if (null != r) return {
                    type: l.HOME
                };
                if (null != i) return {
                    type: l.SEARCH
                };
                if (null != a && null != u) {
                    let e = null === (t = c.default.getApplication(u)) || void 0 === t ? void 0 : t.name;
                    return {
                        type: l.APPLICATION,
                        applicationId: u,
                        applicationName: e,
                        section: f
                    }
                }
            }

            function p(e) {
                f.setState({
                    entrypoint: e
                })
            }

            function T(e) {
                f.setState({
                    guildId: e
                })
            }

            function h() {
                f.setState({
                    entrypoint: null,
                    guildId: null
                })
            }

            function S(e) {
                f.setState({
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
            var r, i, l, a;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return r
                },
                BotTagTypes: function() {
                    return i
                }
            }), (l = r || (r = {}))[l.GAME = 1] = "GAME", l[l.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", l[l.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (a = i || (i = {}))[a.BOT = 0] = "BOT", a[a.SERVER = 1] = "SERVER", a[a.SYSTEM_DM = 2] = "SYSTEM_DM", a[a.OFFICIAL = 3] = "OFFICIAL", a[a.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", a[a.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", a[a.AI = 6] = "AI", a[a.REMIX = 7] = "REMIX"
        },
        677315: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildHomeExperiment: function() {
                    return d
                },
                canSeeGuildHome: function() {
                    return f
                },
                GuildFeedRenderSelectorExperiment: function() {
                    return E
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
                l = n("862205"),
                a = n("21121"),
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

            function f(e) {
                if (__OVERLAY__ || e === s.ME || e === s.FAVORITES || (0, a.isInMainTabsExperiment)()) return !1;
                let t = u.default.getGuild(e);
                return !!(null != t && c(e, o.default, i.default)) && t.hasFeature(s.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
            }
            let E = (0, l.createExperiment)({
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
                _ = (0, l.createExperiment)({
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
                I = (0, l.createExperiment)({
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
            (0, l.createExperiment)({
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
            }), (0, l.createExperiment)({
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
            let p = (0, l.createExperiment)({
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
                T = (0, l.createExperiment)({
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
                l = n("479756"),
                a = n("38654"),
                o = n("9294"),
                u = n("26989"),
                s = n("337543"),
                c = n("697218"),
                d = n("49111");
            let f = async (e, t) => {
                let n = null != t ? t : s.default.getInviteKeyForGuildId(e),
                    l = c.default.getCurrentUser(),
                    a = !u.default.isMember(e, null == l ? void 0 : l.id);
                try {
                    let t = await r.default.get({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: a,
                            invite_code: null != n ? (0, o.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: l
                    } = t;
                    return i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: l.version,
                            description: l.description,
                            formFields: l.form_fields,
                            guild: l.guild
                        }
                    }), l
                } catch (t) {
                    i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, E = async (e, t) => {
                let n = await r.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: l
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
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
                        body: l
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
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
                if (a.default.isFullServerPreview(e)) {
                    (0, l.updateImpersonatedData)(e, {
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
                            body: l
                        } = n;
                    return i.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: l
                    }), l
                } catch (e) {
                    throw e
                }
            };
            var T = {
                fetchVerificationForm: f,
                updateVerificationForm: E,
                updateVerificationFormDescription: _,
                enableVerificationForm: I,
                submitVerificationForm: p
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return l
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return a
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
                    return f
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return E
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
            let l = new Set([i.VerificationFormFieldTypes.TERMS]),
                a = new Set([i.VerificationFormFieldTypes.MULTIPLE_CHOICE, i.VerificationFormFieldTypes.TEXT_INPUT, i.VerificationFormFieldTypes.PARAGRAPH]),
                o = 5,
                u = 16,
                s = 300,
                c = 300,
                d = 8,
                f = 150,
                E = 150,
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
                l = n("49111");
            let a = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                o = (0, r.default)(e => a),
                u = e => {
                    o.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                s = e => {
                    o.setState({
                        shouldShowWarning: e
                    }), e && i.ComponentDispatch.dispatch(l.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                l = n("599110"),
                a = n("50926"),
                o = n("347977"),
                u = n("394294"),
                s = n("49111");
            let c = () => {
                    l.default.track(s.AnalyticEvents.MODAL_DISMISSED, {
                        type: u.MEMBER_VERIFICATION_TYPE
                    })
                },
                d = e => {
                    l.default.track(s.AnalyticEvents.OPEN_MODAL, {
                        type: u.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var f = {
                openMemberVerificationModal(e, t) {
                    d(e);
                    let l = async t => {
                        await a.default.submitVerificationForm(e, t)
                    };
                    (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, r.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: l,
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
                    return S
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
                l = n("393414"),
                a = n("42203"),
                o = n("923959"),
                u = n("26989"),
                s = n("305961"),
                c = n("957255"),
                d = n("18494"),
                f = n("282109"),
                E = n("599110"),
                _ = n("38654"),
                I = n("507950"),
                p = n("49111"),
                T = n("724210");

            function h(e, t) {
                E.default.track(p.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === I.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), A(e)
            }

            function S(e, t) {
                let n = _.default.getData(e);
                null != n && n.type === t.type && (E.default.track(p.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
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
                }), A(e))
            }

            function O(e) {
                r.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function A(e) {
                let t = d.default.getChannelId(e),
                    n = a.default.getChannel(t),
                    r = null != t && (0, T.isStaticChannelRoute)(t);
                if (!r && !c.default.can(p.Permissions.VIEW_CHANNEL, n)) {
                    let t = o.default.getDefaultChannel(e);
                    null != t && (0, l.transitionTo)(p.Routes.CHANNEL(e, t.id))
                }
            }

            function N(e, t, n) {
                let r = new Set(f.default.getOptedInChannels(e));
                t.forEach(e => r.add(e)), n.forEach(e => r.delete(e)), S(e, {
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
                            l = i.filter(e => !n.includes(e));
                        return l.length > 0 && N(e, l, []), !1
                    })
                }(e, t);
                let r = {};
                t.forEach(e => r[e] = n.roles[e]), S(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    roles: r
                })
            }

            function g(e, t) {
                S(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return a
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
            let l = "event";

            function a(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = r.parse(t);
                        return (0, i.getFirstQueryStringValue)(e[l])
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
                return null == n ? t : "".concat(t, "?").concat(l, "=").concat(n)
            }

            function u(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let a = r.parse(n),
                    o = (0, i.getFirstQueryStringValue)(a[l]);
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
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return a
                },
                getDevicePushProvider: function() {
                    return o
                }
            });
            var r, i, l = n("773336");
            let a = null;

            function o() {
                return (0, l.isAndroid)(), null
            }(r = i || (i = {})).REMINDER = "reminder", r.TOP_MESSAGE_PUSH = "top_messages_push", r.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        846325: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return l
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return a
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
            let l = 32,
                a = 5,
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
            var r, i, l = n("917351"),
                a = n.n(l),
                o = n("446674"),
                u = n("913144"),
                s = n("845579"),
                c = n("374363"),
                d = n("697218"),
                f = n("599110"),
                E = n("829536"),
                _ = n("846325"),
                I = n("49111"),
                p = n("397336");
            (r = i || (i = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED";
            let T = new Map,
                h = new Map,
                S = new Set,
                O = i.NOT_FETCHED,
                A = i.NOT_FETCHED,
                N = new Set,
                C = new Map,
                g = !1;

            function v(e) {
                let {
                    sound: t
                } = e, n = T.get(t.guildId), r = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != r && -1 !== r ? (n[r] = t, T.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), T.set(t.guildId, [...n]))
            }
            let R = a.debounce(e => {
                f.default.track(I.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, E.amplitudeToPerceptual)(e))
                }), s.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function D(e) {
                var t, n;
                let r = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(r)) t.soundboardMuted ? S.add(e) : S.delete(e);
                for (let e of S.keys()) null == r[e] && S.delete(e)
            }
            class L extends o.default.Store {
                initialize() {
                    this.waitFor(c.default), D(c.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(T),
                        favoritedSoundIds: Array.from(N),
                        localSoundboardMutes: Array.from(S)
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
                    return A === i.FETCHING
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
                    return S.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return g
                }
                hasFetchedAllSounds() {
                    return A === i.FETCHED && O === i.FETCHED
                }
            }
            L.displayName = "SoundboardStore";
            var m = new L(u.default, {
                LOGOUT: function() {
                    T.clear(), h.clear(), C.clear(), g = !1, A = i.NOT_FETCHED, O = i.NOT_FETCHED
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    A = i.FETCHING
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: v,
                GUILD_SOUNDBOARD_SOUND_UPDATE: v,
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
                        userId: l
                    } = e, a = (null !== (n = h.get(i)) && void 0 !== n ? n : 0) + 1, o = (null !== (r = C.get(l)) && void 0 !== r ? r : 0) + 1;
                    h.set(i, a), C.set(l, o), l !== (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (g = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: r,
                        userId: i
                    } = e, l = (null !== (t = h.get(r)) && void 0 !== t ? t : 0) - 1, a = (null !== (n = C.get(i)) && void 0 !== n ? n : 0) - 1;
                    l <= 0 ? h.delete(r) : h.set(r, l), a <= 0 ? C.delete(i) : C.set(i, a)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    R(t)
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
                        var i, l;
                        N = new Set(null !== (l = null == r ? void 0 : null === (i = r.favoriteSoundboardSounds) || void 0 === i ? void 0 : i.soundIds) && void 0 !== l ? l : [])
                    } else n === p.UserSettingsTypes.PRELOADED_USER_SETTINGS && D(r)
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
                    }), A = i.FETCHED
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
                    S.has(t) ? S.delete(t) : S.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    T = new Map(Object.entries(t.soundboardSounds)), N = new Set(t.favoritedSoundIds), S = new Set(t.localSoundboardMutes)
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
                    return G
                }
            });
            var r, i, l = n("102053"),
                a = n("446674"),
                o = n("913144"),
                u = n("802493"),
                s = n("595525"),
                c = n("212084"),
                d = n("867805"),
                f = n("267567"),
                E = n("813006"),
                _ = n("778689"),
                I = n("305961"),
                p = n("161585"),
                T = n("24373"),
                h = n("49111");
            (r = i || (i = {}))[r.Unloaded = 0] = "Unloaded", r[r.MaybeLoaded = 1] = "MaybeLoaded", r[r.Loaded = 2] = "Loaded";
            let S = 2,
                O = new Map,
                A = new Map,
                N = null,
                C = [],
                g = null,
                v = !1,
                R = new Map,
                D = (e, t) => {
                    R = new Map(R.set(e, t))
                },
                L = 1e3 * h.Durations.HOUR,
                m = () => {
                    if (0 !== S) return;
                    let e = u.default.database();
                    if (null == e) return;
                    S = 2;
                    let t = (0, s.tryLoadOrResetCacheGateway)("StickerStore.loadSavedGuildStickers", () => l.default.time("\uD83D\uDCBE", "loadSavedGuildStickers", () => c.default.getSync(e)));
                    if (null != t) {
                        for (let [e, n] of t)
                            if (_.default.isMember(e) && !R.has(e)) {
                                for (let t of n) M(t, !0, I.default.getGuild(e));
                                D(e, n)
                            }
                    }
                },
                M = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    A.set(e.id, e), t && y(e, n)
                },
                y = function(e) {
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
                            l = {
                                type: p.StickerMetadataTypes.TAG,
                                value: n.trim().toLocaleLowerCase()
                            },
                            a = [r, l];
                        if (null != t) {
                            let e = (t instanceof(0, E.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                            null != e && "" !== e && a.push({
                                type: p.StickerMetadataTypes.GUILD_NAME,
                                value: e
                            })
                        }
                        if (null == i) {
                            N.set(e.id, a);
                            return
                        }
                        a.push({
                            type: p.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: i.surrogates
                        }), i.forEachDiversity(e => a.push({
                            type: p.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })), N.set(e.id, a)
                    }
                },
                U = (e, t, n) => {
                    O.set(e.id, e);
                    let r = [...C];
                    if (t) {
                        let t = r.findIndex(t => t.id === e.id); - 1 !== t ? r[t] = e : r.push(e), C = r
                    }(t || n) && e.stickers.forEach(e => M(e))
                },
                P = () => {
                    R.forEach((e, t) => {
                        let n = I.default.getGuild(t);
                        null != n && e.forEach(e => y(e, n))
                    }), C.forEach(e => {
                        e.stickers.forEach(e => y(e))
                    })
                };

            function b(e) {
                null != e.stickers && (e.stickers.forEach(t => M(t, !0, e)), D(e.id, e.stickers))
            }
            class w extends a.default.Store {
                initialize() {
                    this.waitFor(u.default, _.default, I.default)
                }
                get isLoaded() {
                    return 0 !== S
                }
                get stickerMetadata() {
                    return m(), null == N && (N = new Map, P()), N
                }
                get hasLoadedStickerPacks() {
                    return null != g && g + L > Date.now()
                }
                get isFetchingStickerPacks() {
                    return v
                }
                getStickerById(e) {
                    return !A.has(e) && m(), A.get(e)
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
                    return R
                }
                getAllStickersIterator() {
                    return m(), A.values()
                }
                getAllGuildStickers() {
                    return m(), R
                }
                getStickersByGuildId(e) {
                    return m(), R.get(e)
                }
            }
            w.displayName = "StickersStore";
            var G = new w(o.default, {
                BACKGROUND_SYNC: () => {
                    N = null, A = new Map, R = new Map, S = 0
                },
                CONNECTION_OPEN: e => {
                    let {
                        guilds: t
                    } = e;
                    N = null, A = new Map, R = new Map, t.forEach(b), S = t.every(e => null != e.stickers) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    !f.default.isLurking(t.id) && (b(t), 1 === S && null == t.stickers && null != t.stickerUpdates && (S = 0))
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, r = null !== (t = R.get(n.id)) && void 0 !== t ? t : [];
                    r.forEach(e => {
                        null != N && N.delete(e.id), A.delete(e.id)
                    }), R.delete(n.id), R = new Map(R)
                },
                LOGOUT: () => {
                    S = 0, C = [], A.clear(), O.clear(), N = null, R.clear(), R = new Map(R), v = !1, g = null
                },
                STICKER_PACKS_FETCH_START: () => {
                    v = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: e => {
                    let {
                        packs: t
                    } = e;
                    t.forEach(e => U(e, !0)), g = Date.now(), v = !1
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
                    n.forEach(e => M(e)), D(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: e => {
                    var t, n;
                    let {
                        guildId: r,
                        sticker: i
                    } = e, l = null !== (t = R.get(r)) && void 0 !== t ? t : [];
                    D(r, [...null !== (n = l.filter(e => e.id !== i.id)) && void 0 !== n ? n : [], i]), M(i)
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
                        let n = A.get(e.id);
                        return null != n && (0, T.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                            ...e,
                            user: t
                        }
                    }, l = null !== (t = R.get(n)) && void 0 !== t ? t : [], a = l.filter(e => null == r.find(t => t.id === e.id));
                    a.forEach(e => {
                        A.delete(e.id), null != N && N.delete(e.id)
                    });
                    let o = r.map(e => i(e));
                    o.forEach(e => M(e)), D(n, o)
                }
            })
        },
        211895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("913144"),
                i = n("54239"),
                l = n("49111");

            function a() {
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
                }), (0, i.pushLayer)(l.Layers.USER_SETTINGS)
            }
        },
        777523: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("730290"),
                i = n("49111");
            let l = /-/g;

            function a(e) {
                let [, , t, n] = e.split("/"), a = null == t ? void 0 : t.toUpperCase().replace(l, "_"), o = null == n ? void 0 : n.toUpperCase().replace(l, "_");
                if (i.UserSettingsSections.hasOwnProperty(a) && (null == o || "" === o || i.UserSettingsSections.hasOwnProperty(o))) {
                    let {
                        source: e
                    } = (0, r.parse)(location.search);
                    return {
                        source: e,
                        section: i.UserSettingsSections[a],
                        subsection: o
                    }
                }
                return null
            }
        },
        917219: function(e, t, n) {
            "use strict";
            var r, i, l, a;
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
            }), (l = r || (r = {}))[l.BACKGROUND = 0] = "BACKGROUND", (a = i || (i = {}))[a.OPTION_1 = 0] = "OPTION_1", a[a.OPTION_2 = 1] = "OPTION_2", a[a.OPTION_3 = 2] = "OPTION_3", a[a.OPTION_4 = 3] = "OPTION_4", a[a.OPTION_7 = 7] = "OPTION_7", a[a.OPTION_8 = 8] = "OPTION_8", a[a.OPTION_9 = 9] = "OPTION_9", a[a.OPTION_10 = 10] = "OPTION_10";
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
                    return l
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
            var l = i
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("866227"),
                i = n.n(r),
                l = n("666038");
            class a extends l.default {
                static createFromServer(e) {
                    var t;
                    return new a({
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
                l = n("619340"),
                a = n("376556"),
                o = n("450205"),
                u = n("813006"),
                s = n("49111");
            let c = new Set([s.PlatformTypes.CONTACTS]),
                d = !0,
                f = [],
                E = [],
                _ = {},
                I = {},
                p = e => {
                    f = e.filter(e => !c.has(e.type) && a.default.isSupported(e.type)), E = e.filter(e => c.has(e.type)), d = !1
                };
            class T extends r.default.Store {
                isJoining(e) {
                    return _[e] || !1
                }
                isFetching() {
                    return d
                }
                getAccounts() {
                    return f
                }
                getLocalAccounts() {
                    return E
                }
                getAccount(e, t) {
                    return f.find(n => (null == e || n.id === e) && n.type === t)
                }
                getLocalAccount(e) {
                    return E.find(t => t.type === e)
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
                    } else l.default.fetch()
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
                    } = e, l = f.find(e => e.id === n && e.type === t);
                    if (null == l) return !1;
                    null != r && (l.revoked = r), null != i && (l.accessToken = i)
                }
            })
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var r = n("446674"),
                i = n("913144"),
                l = n("9294"),
                a = n("49111");
            let o = {},
                u = {},
                s = {};

            function c(e, t) {
                var n;
                e = null != e ? e : "";
                let r = (0, l.parseExtraDataFromInviteKey)(e),
                    i = o[e],
                    u = null != i ? {
                        state: a.InviteStates.RESOLVING,
                        ...i
                    } : {
                        state: a.InviteStates.RESOLVING,
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
                    t.state = "banned" in e && e.banned ? a.InviteStates.BANNED : a.InviteStates.EXPIRED
                })
            }
            class f extends r.default.Store {
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
            f.displayName = "InviteStore";
            var E = new f(i.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, l.parseExtraDataFromInviteKey)(t);
                    o = {
                        ...o,
                        [t]: {
                            code: n.baseCode,
                            state: a.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return c(e.code, t => {
                        var n, r;
                        t.state = a.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: d,
                INSTANT_INVITE_REVOKE_SUCCESS: d,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        t.state = a.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => c(e.code, e => {
                        e.state = a.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        var n, r;
                        t.state = a.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return c(e.code, e => {
                        e.state = a.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return c(e.code, t => {
                        t.state = a.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return u[e.code] = e.error, c(e.code, e => {
                        e.state = a.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return c(e.code, e => {
                        e.state = a.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = a.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = a.InviteStates.APP_NOT_OPENED
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
            let l = [];

            function a() {
                l = []
            }
            class o extends r.default.Store {
                hasLayers() {
                    return l.length > 0
                }
                getLayers() {
                    return l
                }
            }
            o.displayName = "LayerStore";
            var u = new o(i.default, {
                LAYER_PUSH: function(e) {
                    let {
                        component: t
                    } = e;
                    if (l.indexOf(t) >= 0) return !1;
                    l = [...l, t]
                },
                LAYER_POP: function() {
                    if (0 === l.length) return !1;
                    l = l.slice(0, -1)
                },
                LAYER_POP_ALL: a,
                LOGOUT: a,
                NOTIFICATION_CLICK: a
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
                l = n("446674"),
                a = n("913144"),
                o = n("697218"),
                u = n("49111");
            let s = u.FormStates.CLOSED,
                c = null,
                d = null,
                f = {},
                E = {},
                _ = {},
                I = null,
                p = null,
                T = !1,
                h = !1,
                S = null,
                O = null,
                A = null,
                N = [],
                C = null,
                g = null;

            function v(e) {
                var t, n, r, i, l, a;
                let c = o.default.getCurrentUser();
                if (null == c) return R();
                d = null !== (t = e.section) && void 0 !== t ? t : d, C = null !== (n = e.section) && void 0 !== n ? n : d, null != e.subsection && null != d && (f[d] = e.subsection), null != e.scrollPosition && null != d && (E[d] = e.scrollPosition), h = !!e.openWithoutBackstack, s = u.FormStates.OPEN, _ = {}, p = {
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
                }, O = null !== (r = e.onClose) && void 0 !== r ? r : null, A = null !== (i = e.analyticsLocation) && void 0 !== i ? i : null, N = null !== (l = e.analyticsLocations) && void 0 !== l ? l : [], g = null !== (a = e.impressionSource) && void 0 !== a ? a : null
            }

            function R() {
                s = u.FormStates.CLOSED, T = !1, I = null, C = null, p = null, c = null, d = null, f = {}, E = {}, O = null, A = null, N = [], g = null
            }

            function D() {
                s = u.FormStates.OPEN, _ = {}
            }
            class L extends l.default.Store {
                initialize() {
                    this.waitFor(o.default)
                }
                hasChanges() {
                    return null != p && null != I && (!!this.isOpen() || S === u.DrawerTabTypes.USER_SETTINGS) && !i.isEqual(p, I)
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
                    return null != d ? f[d] : null
                }
                getScrollPosition() {
                    return null != d ? E[d] : null
                }
                shouldOpenWithoutBackstack() {
                    return h
                }
                getProps() {
                    return {
                        submitting: s === u.FormStates.SUBMITTING,
                        section: d,
                        subsection: null != d ? f[d] : null,
                        scrollPosition: null != d ? E[d] : null,
                        settings: p,
                        errors: _,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: h,
                        analyticsLocation: A,
                        analyticsLocations: N,
                        initialSection: C,
                        impressionSource: g
                    }
                }
                get onClose() {
                    return O
                }
            }
            L.displayName = "UserSettingsModalStore";
            var m = new L(a.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    T = !0, v(e)
                },
                USER_SETTINGS_MODAL_INIT: v,
                USER_SETTINGS_MODAL_CLOSE: R,
                LOGOUT: R,
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
                    c = d, d = e.section, A = null, N = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (f[d] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete f[t] : null != d && delete f[d]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete E[t] : null != d && delete E[d]
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
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: D,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = o.default.getCurrentUser();
                    D(), null != e && (p = {
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
                    return S = e.tab, null == d && S === u.DrawerTabTypes.USER_SETTINGS && v({
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
                    return f
                }
            });
            var r = n("627445"),
                i = n.n(r),
                l = n("446674"),
                a = n("913144"),
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
            class c extends l.default.Store {
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
            let d = new c(a.default, {
                WINDOW_INIT: function(e) {
                    i(!u.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: r,
                        focused: l
                    } = e;
                    return u.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: r,
                        focused: l
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
            var f = d
        },
        79798: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                a = n("414055"),
                o = n("12287"),
                u = n("988268"),
                s = n("782340"),
                c = n("647431");
            let d = e => {
                let t, {
                        invertColor: n = !1,
                        type: i = u.BotTagTypes.BOT,
                        className: d,
                        verified: f,
                        hideIcon: E = !1,
                        useRemSizes: _ = !1,
                        children: I = []
                    } = e,
                    p = null,
                    T = s.default.Messages.VERIFIED_BOT_TOOLTIP;
                switch (i) {
                    case u.BotTagTypes.SYSTEM_DM:
                    case u.BotTagTypes.OFFICIAL:
                        f = !0, T = s.default.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP, p = s.default.Messages.SYSTEM_DM_TAG_SYSTEM;
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
                        f = !0, T = s.default.Messages.AI_GENERATED_TOOLTIP, p = s.default.Messages.AI_TAG;
                        break;
                    case u.BotTagTypes.REMIX:
                        f = !1, p = s.default.Messages.REMIXING_TAG;
                        break;
                    case u.BotTagTypes.BOT:
                    default:
                        p = s.default.Messages.BOT_TAG_BOT
                }
                let h = i === u.BotTagTypes.ORIGINAL_POSTER,
                    S = i === u.BotTagTypes.REMIX,
                    O = null;
                f && (O = (0, r.jsx)(a.Tooltip, {
                    text: T,
                    align: "center",
                    position: "top",
                    children: e => (0, r.jsx)(o.default, {
                        ...e,
                        className: c.botTagVerified
                    })
                })), t = i === u.BotTagTypes.AI ? c.botTagAI : n ? c.botTagInvert : c.botTagRegular;
                let A = e => (0, r.jsxs)("span", {
                    ...e,
                    className: l(d, t, _ ? c.rem : c.px, {
                        [c.botTagOP]: h,
                        [c.botTagRemix]: S
                    }),
                    children: [E ? null : O, I, (0, r.jsx)("span", {
                        className: c.botText,
                        children: p
                    })]
                });
                switch (i) {
                    case u.BotTagTypes.REMIX:
                        return (0, r.jsx)(a.Tooltip, {
                            text: s.default.Messages.REMIXING_DOWNLOAD_APP,
                            position: "top",
                            children: e => A(e)
                        });
                    case u.BotTagTypes.ORIGINAL_POSTER:
                        return (0, r.jsx)(a.Tooltip, {
                            text: s.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
                            position: "top",
                            children: e => A(e)
                        });
                    default:
                        return A()
                }
            };
            d.Types = u.BotTagTypes;
            var f = d
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
                l = n("753809"),
                a = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...o
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, r.jsx)("path", {
                                className: l,
                                fill: i,
                                d: "M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"
                            }), (0, r.jsx)("rect", {
                                width: "24",
                                height: "24"
                            })]
                        })
                    })
                }, l.LinkIcon)
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
                l = n("434657"),
                a = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        className: l,
                        foreground: o,
                        ...u
                    } = e;
                    return (0, r.jsx)("svg", {
                        width: t,
                        height: n,
                        className: l,
                        viewBox: "0 0 24 24",
                        ...(0, a.default)(u),
                        children: (0, r.jsx)("path", {
                            className: o,
                            fill: i,
                            d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z",
                            "aria-hidden": !0
                        })
                    })
                }, l.LockIcon)
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
                l = n("173010"),
                a = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        foreground: l,
                        ...o
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M12 2C14.761 2 17 4.238 17 7V9H7V7C7 4.238 9.238 2 12 2ZM10.5 5.5C10.5 6.329 11.172 7 12 7C12.828 7 13.5 6.329 13.5 5.5C13.5 4.671 12.828 4 12 4C11.172 4 10.5 4.671 10.5 5.5ZM23 22H17L19 19V12H17V18C17 18.553 16.552 19 16 19H14L15 22H9L10 19H8C7.448 19 7 18.553 7 18V12H5V19L7 22H1L3 19V12C3 10.896 3.897 10 5 10H19C20.103 10 21 10.896 21 12V19L23 22ZM13 14C13 14.553 13.448 15 14 15C14.552 15 15 14.553 15 14C15 13.447 14.552 13 14 13C13.448 13 13 13.447 13 14Z"
                        })
                    })
                }, l.RobotIcon)
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
                l = n("877585"),
                a = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 18,
                        height: n = 18,
                        color: i = "currentColor",
                        foreground: l,
                        ...o
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M19 6.00001C15.56 6.00001 12.826 2.43501 12.799 2.39801C12.421 1.89801 11.579 1.89801 11.201 2.39801C11.174 2.43501 8.44 6.00001 5 6.00001C4.447 6.00001 4 6.44801 4 7.00001V14C4 17.807 10.764 21.478 11.534 21.884C11.68 21.961 11.84 21.998 12 21.998C12.16 21.998 12.32 21.96 12.466 21.884C13.236 21.478 20 17.807 20 14V7.00001C20 6.44801 19.553 6.00001 19 6.00001ZM15 16L12 14L9 16L10 13L8 11H11L12 8.00001L13 11H16L14 13L15 16Z"
                        })
                    })
                }, l.ShieldIcon)
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
                l = n("276825"),
                a = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, r.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: i
                        })
                    })
                }, l.CheckmarkSmallIcon)
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
                    return f
                },
                makeCssUrlString: function() {
                    return E
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
                    return S
                },
                dataUrlToFile: function() {
                    return O
                },
                isPNGAnimated: function() {
                    return A
                }
            });
            var r = n("627445"),
                i = n.n(r),
                l = n("917351"),
                a = n.n(l),
                o = n("48648"),
                u = n.n(o);

            function s(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: r,
                    maxHeight: i,
                    minWidth: l = 0,
                    minHeight: a = 0
                } = e;
                if (t !== r || n !== i) {
                    let e = t > r ? r / t : 1;
                    t = Math.max(Math.round(t * e), l), n = Math.max(Math.round(n * e), a);
                    let o = n > i ? i / n : 1;
                    t = Math.max(Math.round(t * o), l), n = Math.max(Math.round(n * o), a)
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
                } = e, l = 1;
                t > r && (l = r / t), t = Math.round(t * l);
                let a = 1;
                return (n = Math.round(n * l)) > i && (a = i / n), Math.min(l * a, 1)
            }

            function f(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: r,
                    maxHeight: i
                } = e;
                return t === n ? 1 : Math.min(Math.max(r / t, i / n), 1)
            }

            function E(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let _ = [
                [0, 0, 0]
            ];

            function I(e, t, n) {
                let r = document.createElement("canvas"),
                    i = r.getContext("2d");
                if (null == i) return _;
                let l = r.width = 0 === e.width ? 128 : e.width,
                    a = r.height = 0 === e.height ? 128 : e.height;
                i.drawImage(e, 0, 0, l, a);
                let o = i.getImageData(0, 0, l, a).data,
                    s = function(e, t, n) {
                        let r = [];
                        for (let i = 0, l, a, o, u, s; i < t; i += n) a = e[(l = 4 * i) + 0], o = e[l + 1], u = e[l + 2], (void 0 === (s = e[l + 3]) || s >= 125) && !(a > 250 && o > 250 && u > 250) && r.push([a, o, u]);
                        return r
                    }(o, l * a, n),
                    c = u(s, t);
                return "boolean" == typeof c ? _ : c.palette()
            }
            let p = e => T(e),
                T = a.memoize(e => new Promise((t, n) => {
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

            function S(e) {
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
            async function A(e) {
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
                    return l
                }
            });
            var r = n("917351"),
                i = n.n(r);
            let l = e => "function" == typeof e ? e() : e;
            i.curry((e, t, n) => l(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let r, i;
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("697218"),
                a = n("615931");
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
                    reject: l,
                    modalProps: a = {},
                    hooks: {
                        onEarlyClose: u
                    } = {}
                } = e;
                if (null == r) {
                    null == u || u();
                    return
                }
                let c = r(_, d, a);

                function d() {
                    null == u || u()
                }

                function f(e) {
                    i(c), n(e)
                }

                function E(e) {
                    i(c), l(e)
                }

                function _(e) {
                    return o(c, _, d, {
                        ...a,
                        isLoading: !0
                    }), s({
                        promiseFn: t,
                        resolve: f,
                        reject: E,
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
                        ...a,
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
                    mfaCodeHandler: l = u,
                    isModalOpen: a = !1,
                    ...o
                } = e;
                return t(null != i ? {
                    code: i
                } : {}).then(n, e => {
                    var i, u;
                    if (i = e, u = a, i.body && 60008 === i.body.code || u && 429 === i.status) return l({
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
                    checkEnabled: i = null !== (r = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== r && r,
                    ...o
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, a.resolveThunk)(i) ? u : s)({
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
                l = n("920636");
            let a = (e, t, n) => function(i) {
                return (0, r.jsx)(l.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...i
                })
            };

            function o(e, t, n) {
                return (0, i.openModal)(a(e, t, n), {
                    onCloseCallback: t
                })
            }

            function u(e, t, n, r) {
                return (0, i.updateModal)(e, a(t, n, r))
            }
        }
    }
]);