(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["37254"], {
        78349: function(t, e, n) {
            "use strict";
            n("424973"), t.exports.parse = function(t) {
                var e = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!e) return null;
                e.shift();
                var n = null,
                    r = [];
                e[2] && (n = (u = e[2].split("-")).shift(), r = u);
                var i = [];
                e[5] && (i = e[5].split("-")).shift();
                var o = [];
                if (e[6]) {
                    (u = e[6].split("-")).shift();
                    for (var u, a, s = []; u.length;) {
                        var c = u.shift();
                        1 === c.length ? a ? (o.push({
                            singleton: a,
                            extension: s
                        }), a = c, s = []) : a = c : s.push(c)
                    }
                    o.push({
                        singleton: a,
                        extension: s
                    })
                }
                var l = [];
                e[7] && ((l = e[7].split("-")).shift(), l.shift());
                var h = [];
                return e[8] && (h = e[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: n,
                            extlang: r
                        },
                        script: e[3] || null,
                        region: e[4] || null,
                        variant: i,
                        extension: o,
                        privateuse: l
                    },
                    privateuse: h,
                    grandfathered: {
                        irregular: e[0] || null,
                        regular: e[1] || null
                    }
                }
            }
        },
        794252: function(t, e, n) {
            "use strict";
            var r = n("859514"),
                i = n("960049"),
                o = n("124852"),
                u = Array;
            r({
                target: "Array",
                proto: !0
            }, {
                with: function(t, e) {
                    return i(o(this), u, t, e)
                }
            })
        },
        979897: function(t, e, n) {
            t = n.nmd(t), n("854508");
            var r = r || function(t) {
                "use strict";
                if (!("undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
                    var e = t.document,
                        n = function() {
                            return t.URL || t.webkitURL || t
                        },
                        r = e.createElementNS("http://www.w3.org/1999/xhtml", "a"),
                        i = "download" in r,
                        o = function(t) {
                            var e = new MouseEvent("click");
                            t.dispatchEvent(e)
                        },
                        u = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
                        a = t.webkitRequestFileSystem,
                        s = t.requestFileSystem || a || t.mozRequestFileSystem,
                        c = function(e) {
                            (t.setImmediate || t.setTimeout)(function() {
                                throw e
                            }, 0)
                        },
                        l = "application/octet-stream",
                        h = 0,
                        f = function(t) {
                            setTimeout(function() {
                                "string" == typeof t ? n().revokeObjectURL(t) : t.remove()
                            }, 4e4)
                        },
                        g = function(t, e, n) {
                            for (var r = (e = [].concat(e)).length; r--;) {
                                var i = t["on" + e[r]];
                                if ("function" == typeof i) try {
                                    i.call(t, n || t)
                                } catch (t) {
                                    c(t)
                                }
                            }
                        },
                        v = function(t) {
                            return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob(["\xef\xbb\xbf", t], {
                                type: t.type
                            }) : t
                        },
                        d = function(e, c, d) {
                            !d && (e = v(e));
                            var p, m, y = this,
                                b = e.type,
                                w = !1,
                                x = function() {
                                    g(y, "writestart progress write writeend".split(" "))
                                },
                                S = function() {
                                    if (m && u && "undefined" != typeof FileReader) {
                                        var r = new FileReader;
                                        r.onloadend = function() {
                                            var t = r.result;
                                            m.location.href = "data:attachment/file" + t.slice(t.search(/[,;]/)), y.readyState = y.DONE, x()
                                        }, r.readAsDataURL(e), y.readyState = y.INIT;
                                        return
                                    }(w || !p) && (p = n().createObjectURL(e)), m ? m.location.href = p : void 0 === t.open(p, "_blank") && u && (t.location.href = p), y.readyState = y.DONE, x(), f(p)
                                },
                                O = function(t) {
                                    return function() {
                                        if (y.readyState !== y.DONE) return t.apply(this, arguments)
                                    }
                                },
                                z = {
                                    create: !0,
                                    exclusive: !1
                                };
                            if (y.readyState = y.INIT, !c && (c = "download"), i) {
                                p = n().createObjectURL(e), setTimeout(function() {
                                    r.href = p, r.download = c, o(r), x(), f(p), y.readyState = y.DONE
                                });
                                return
                            }
                            if (t.chrome && b && b !== l && (e = (e.slice || e.webkitSlice).call(e, 0, e.size, l), w = !0), a && "download" !== c && (c += ".download"), (b === l || a) && (m = t), !s) {
                                S();
                                return
                            }
                            h += e.size, s(t.TEMPORARY, h, O(function(t) {
                                t.root.getDirectory("saved", z, O(function(t) {
                                    var n = function() {
                                        t.getFile(c, z, O(function(t) {
                                            t.createWriter(O(function(n) {
                                                n.onwriteend = function(e) {
                                                    m.location.href = t.toURL(), y.readyState = y.DONE, g(y, "writeend", e), f(t)
                                                }, n.onerror = function() {
                                                    var t = n.error;
                                                    t.code !== t.ABORT_ERR && S()
                                                }, "writestart progress write abort".split(" ").forEach(function(t) {
                                                    n["on" + t] = y["on" + t]
                                                }), n.write(e), y.abort = function() {
                                                    n.abort(), y.readyState = y.DONE
                                                }, y.readyState = y.WRITING
                                            }), S)
                                        }), S)
                                    };
                                    t.getFile(c, {
                                        create: !1
                                    }, O(function(t) {
                                        t.remove(), n()
                                    }), O(function(t) {
                                        t.code === t.NOT_FOUND_ERR ? n() : S()
                                    }))
                                }), S)
                            }), S)
                        },
                        p = d.prototype;
                    return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(t, e, n) {
                        return !n && (t = v(t)), navigator.msSaveOrOpenBlob(t, e || "download")
                    } : (p.abort = function() {
                        this.readyState = this.DONE, g(this, "abort")
                    }, p.readyState = p.INIT = 0, p.WRITING = 1, p.DONE = 2, p.error = p.onwritestart = p.onprogress = p.onwrite = p.onabort = p.onerror = p.onwriteend = null, function(t, e, n) {
                        return new d(t, e, n)
                    })
                }
            }("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
            void 0 !== t && t.exports ? t.exports.saveAs = r : "undefined" != typeof define && null !== define && null !== define.amd && define([], function() {
                return r
            })
        },
        448105: function(t, e, n) {
            "use strict";
            t.exports = function(t, e) {
                var n = e.length,
                    r = t.length;
                if (r > n) return !1;
                if (r === n) return t === e;
                t: for (var i = 0, o = 0; i < r; i++) {
                    for (var u = t.charCodeAt(i); o < n;)
                        if (e.charCodeAt(o++) === u) continue t;
                    return !1
                }
                return !0
            }
        },
        48648: function(t, e, n) {
            if (n("808653"), n("424973"), !r) var r = {
                map: function(t, e) {
                    var n = {};
                    return e ? t.map(function(t, r) {
                        return n.index = r, e.call(n, t)
                    }) : t.slice()
                },
                naturalOrder: function(t, e) {
                    return t < e ? -1 : t > e ? 1 : 0
                },
                sum: function(t, e) {
                    var n = {};
                    return t.reduce(e ? function(t, r, i) {
                        return n.index = i, t + e.call(n, r)
                    } : function(t, e) {
                        return t + e
                    }, 0)
                },
                max: function(t, e) {
                    return Math.max.apply(null, e ? r.map(t, e) : t)
                }
            };
            var i = function() {
                var t = 3;

                function e(t, e, n) {
                    return (t << 10) + (e << 5) + n
                }

                function n(t) {
                    var e = [],
                        n = !1;

                    function r() {
                        e.sort(t), n = !0
                    }
                    return {
                        push: function(t) {
                            e.push(t), n = !1
                        },
                        peek: function(t) {
                            return !n && r(), void 0 === t && (t = e.length - 1), e[t]
                        },
                        pop: function() {
                            return !n && r(), e.pop()
                        },
                        size: function() {
                            return e.length
                        },
                        map: function(t) {
                            return e.map(t)
                        },
                        debug: function() {
                            return !n && r(), e
                        }
                    }
                }

                function i(t, e, n, r, i, o, u) {
                    this.r1 = t, this.r2 = e, this.g1 = n, this.g2 = r, this.b1 = i, this.b2 = o, this.histo = u
                }

                function o() {
                    this.vboxes = new n(function(t, e) {
                        return r.naturalOrder(t.vbox.count() * t.vbox.volume(), e.vbox.count() * e.vbox.volume())
                    })
                }
                return i.prototype = {
                    volume: function(t) {
                        return (!this._volume || t) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(t) {
                        var n = this.histo;
                        if (!this._count_set || t) {
                            var r, i, o, u = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (o = this.b1; o <= this.b2; o++) u += n[e(r, i, o)] || 0;
                            this._count = u, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new i(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(t) {
                        var n = this.histo;
                        if (!this._avg || t) {
                            var r, i, o, u, a = 0,
                                s = 8,
                                c = 0,
                                l = 0,
                                h = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (o = this.g1; o <= this.g2; o++)
                                    for (u = this.b1; u <= this.b2; u++) a += r = n[e(i, o, u)] || 0, c += r * (i + .5) * s, l += r * (o + .5) * s, h += r * (u + .5) * s;
                            a ? this._avg = [~~(c / a), ~~(l / a), ~~(h / a)] : this._avg = [~~(s * (this.r1 + this.r2 + 1) / 2), ~~(s * (this.g1 + this.g2 + 1) / 2), ~~(s * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(e) {
                        var n = e[0] >> t;
                        return gval = e[1] >> t, bval = e[2] >> t, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, o.prototype = {
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
                        for (var e = this.vboxes, n = 0; n < e.size(); n++)
                            if (e.peek(n).vbox.contains(t)) return e.peek(n).color;
                        return this.nearest(t)
                    },
                    nearest: function(t) {
                        for (var e, n, r, i = this.vboxes, o = 0; o < i.size(); o++)((n = Math.sqrt(Math.pow(t[0] - i.peek(o).color[0], 2) + Math.pow(t[1] - i.peek(o).color[1], 2) + Math.pow(t[2] - i.peek(o).color[2], 2))) < e || void 0 === e) && (e = n, r = i.peek(o).color);
                        return r
                    },
                    forcebw: function() {
                        var t = this.vboxes;
                        t.sort(function(t, e) {
                            return r.naturalOrder(r.sum(t.color), r.sum(e.color))
                        });
                        var e = t[0].color;
                        e[0] < 5 && e[1] < 5 && e[2] < 5 && (t[0].color = [0, 0, 0]);
                        var n = t.length - 1,
                            i = t[n].color;
                        i[0] > 251 && i[1] > 251 && i[2] > 251 && (t[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(u, a) {
                        if (!u.length || a < 2 || a > 256) return !1;
                        var s, c, l, h, f, g, v, d, p, m, y, b, w, x, S, O, z = (s = u, f = Array(32768), s.forEach(function(n) {
                                l = n[0] >> t, h = n[1] >> t, f[c = e(l, h, n[2] >> t)] = (f[c] || 0) + 1
                            }), f),
                            E = 0;
                        z.forEach(function() {
                            E++
                        });
                        var k = (g = u, v = z, y = 1e6, b = 0, w = 1e6, x = 0, S = 1e6, O = 0, g.forEach(function(e) {
                                d = e[0] >> t, p = e[1] >> t, m = e[2] >> t, d < y ? y = d : d > b && (b = d), p < w ? w = p : p > x && (x = p), m < S ? S = m : m > O && (O = m)
                            }), new i(y, b, w, x, S, O, v)),
                            A = new n(function(t, e) {
                                return r.naturalOrder(t.count(), e.count())
                            });

                        function R(t, n) {
                            for (var i, o = 1, u = 0; u < 1e3;) {
                                if (!(i = t.pop()).count()) {
                                    t.push(i), u++;
                                    continue
                                }
                                var a = function(t, n) {
                                        if (n.count()) {
                                            var i = n.r2 - n.r1 + 1,
                                                o = n.g2 - n.g1 + 1,
                                                u = n.b2 - n.b1 + 1,
                                                a = r.max([i, o, u]);
                                            if (1 == n.count()) return [n.copy()];
                                            var s, c, l, h, f, g = 0,
                                                v = [],
                                                d = [];
                                            if (a == i)
                                                for (s = n.r1; s <= n.r2; s++) {
                                                    for (h = 0, c = n.g1; c <= n.g2; c++)
                                                        for (l = n.b1; l <= n.b2; l++) h += t[f = e(s, c, l)] || 0;
                                                    g += h, v[s] = g
                                                } else if (a == o)
                                                    for (s = n.g1; s <= n.g2; s++) {
                                                        for (h = 0, c = n.r1; c <= n.r2; c++)
                                                            for (l = n.b1; l <= n.b2; l++) h += t[f = e(c, s, l)] || 0;
                                                        g += h, v[s] = g
                                                    } else
                                                        for (s = n.b1; s <= n.b2; s++) {
                                                            for (h = 0, c = n.r1; c <= n.r2; c++)
                                                                for (l = n.g1; l <= n.g2; l++) h += t[f = e(c, l, s)] || 0;
                                                            g += h, v[s] = g
                                                        }
                                            return v.forEach(function(t, e) {
                                                d[e] = g - t
                                            }), p(a == i ? "r" : a == o ? "g" : "b")
                                        }

                                        function p(t) {
                                            var e, r, i, o, u, a = t + "1",
                                                c = t + "2",
                                                l = 0;
                                            for (s = n[a]; s <= n[c]; s++)
                                                if (v[s] > g / 2) {
                                                    for (i = n.copy(), o = n.copy(), e = s - n[a], u = e <= (r = n[c] - s) ? Math.min(n[c] - 1, ~~(s + r / 2)) : Math.max(n[a], ~~(s - 1 - e / 2)); !v[u];) u++;
                                                    for (l = d[u]; !l && v[u - 1];) l = d[--u];
                                                    return i[c] = u, o[a] = i[c] + 1, [i, o]
                                                }
                                        }
                                    }(z, i),
                                    s = a[0],
                                    c = a[1];
                                if (!s) return;
                                if (t.push(s), c && (t.push(c), o++), o >= n || u++ > 1e3) return
                            }
                        }
                        A.push(k), R(A, .75 * a);
                        for (var _ = new n(function(t, e) {
                                return r.naturalOrder(t.count() * t.volume(), e.count() * e.volume())
                            }); A.size();) _.push(A.pop());
                        R(_, a - _.size());
                        for (var I = new o; _.size();) I.push(_.pop());
                        return I
                    }
                }
            }();
            t.exports = i.quantize
        },
        48174: function(t, e, n) {
            "use strict";

            function r(t, e) {
                if (t.length !== e.length) return !1;
                for (let n = 0; n < e.length && n < t.length; n++)
                    if (!Object.is(t[n], e[n])) return !1;
                return !0
            }
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            })
        },
        775560: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return i.default
                },
                useLazyValue: function() {
                    return o.default
                }
            });
            var r = n("14716"),
                i = n("745510"),
                o = n("315378")
        },
        14716: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            }), n("222007");
            var r = n("884691");

            function i() {
                let [, t] = (0, r.useState)({});
                return (0, r.useCallback)(() => t({}), [])
            }
        },
        315378: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("884691");
            let i = {};

            function o(t) {
                let e = (0, r.useRef)(i);
                return e.current === i && (e.current = t()), e.current
            }
        },
        745510: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var r = n("884691"),
                i = n("48174");
            let o = [];

            function u(t, e) {
                let n = (0, r.useRef)(),
                    u = (0, r.useRef)(o);
                return u.current === o ? (n.current = t(), u.current = e) : !(0, i.default)(e, u.current) && (n.current = t(), u.current = e), n.current
            }
        },
        506838: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                P: function() {
                    return H
                },
                match: function() {
                    return Y
                }
            }), n("222007"), n("424973"), n("70102"), n("808653");
            let r = Symbol.for("@ts-pattern/matcher"),
                i = Symbol.for("@ts-pattern/isVariadic"),
                o = "@ts-pattern/anonymous-select-key",
                u = t => !!(t && "object" == typeof t),
                a = t => t && !!t[r],
                s = (t, e, n) => {
                    if (a(t)) {
                        let i = t[r](),
                            {
                                matched: o,
                                selections: u
                            } = i.match(e);
                        return o && u && Object.keys(u).forEach(t => n(t, u[t])), o
                    }
                    if (u(t)) {
                        if (!u(e)) return !1;
                        if (Array.isArray(t)) {
                            if (!Array.isArray(e)) return !1;
                            let r = [],
                                o = [],
                                u = [];
                            for (let e of t.keys()) {
                                let n = t[e];
                                a(n) && n[i] ? u.push(n) : u.length ? o.push(n) : r.push(n)
                            }
                            if (u.length) {
                                if (u.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (e.length < r.length + o.length) return !1;
                                let t = e.slice(0, r.length),
                                    i = 0 === o.length ? [] : e.slice(-o.length),
                                    a = e.slice(r.length, 0 === o.length ? 1 / 0 : -o.length);
                                return r.every((e, r) => s(e, t[r], n)) && o.every((t, e) => s(t, i[e], n)) && (0 === u.length || s(u[0], a, n))
                            }
                            return t.length === e.length && t.every((t, r) => s(t, e[r], n))
                        }
                        return Object.keys(t).every(i => {
                            let o = t[i];
                            return (i in e || a(o) && "optional" === o[r]().matcherType) && s(o, e[i], n)
                        })
                    }
                    return Object.is(e, t)
                },
                c = t => {
                    var e, n, i;
                    return u(t) ? a(t) ? null != (e = null == (n = (i = t[r]()).getSelectionKeys) ? void 0 : n.call(i)) ? e : [] : Array.isArray(t) ? l(t, c) : l(Object.values(t), c) : []
                },
                l = (t, e) => t.reduce((t, n) => t.concat(e(n)), []);

            function h(t) {
                return Object.assign(t, {
                    optional: () => f(t),
                    and: e => d(t, e),
                    or: e => p(t, e),
                    select: e => void 0 === e ? y(t) : y(e, t)
                })
            }

            function f(t) {
                return h({
                    [r]: () => ({
                        match: e => {
                            let n = {},
                                r = (t, e) => {
                                    n[t] = e
                                };
                            return void 0 === e ? (c(t).forEach(t => r(t, void 0)), {
                                matched: !0,
                                selections: n
                            }) : {
                                matched: s(t, e, r),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => c(t),
                        matcherType: "optional"
                    })
                })
            }
            let g = (t, e) => {
                    for (let n of t)
                        if (!e(n)) return !1;
                    return !0
                },
                v = (t, e) => {
                    for (let [n, r] of t.entries())
                        if (!e(r, n)) return !1;
                    return !0
                };

            function d() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return h({
                    [r]: () => ({
                        match: t => {
                            let n = {},
                                r = (t, e) => {
                                    n[t] = e
                                };
                            return {
                                matched: e.every(e => s(e, t, r)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => l(e, c),
                        matcherType: "and"
                    })
                })
            }

            function p() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return h({
                    [r]: () => ({
                        match: t => {
                            let n = {},
                                r = (t, e) => {
                                    n[t] = e
                                };
                            return l(e, c).forEach(t => r(t, void 0)), {
                                matched: e.some(e => s(e, t, r)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => l(e, c),
                        matcherType: "or"
                    })
                })
            }

            function m(t) {
                return {
                    [r]: () => ({
                        match: e => ({
                            matched: !!t(e)
                        })
                    })
                }
            }

            function y() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                let i = "string" == typeof e[0] ? e[0] : void 0,
                    u = 2 === e.length ? e[1] : "string" == typeof e[0] ? void 0 : e[0];
                return h({
                    [r]: () => ({
                        match: t => {
                            let e = {
                                [null != i ? i : o]: t
                            };
                            return {
                                matched: void 0 === u || s(u, t, (t, n) => {
                                    e[t] = n
                                }),
                                selections: e
                            }
                        },
                        getSelectionKeys: () => [null != i ? i : o].concat(void 0 === u ? [] : c(u))
                    })
                })
            }

            function b(t) {
                return "number" == typeof t
            }

            function w(t) {
                return "string" == typeof t
            }

            function x(t) {
                return "bigint" == typeof t
            }
            let S = h(m(function(t) {
                    return !0
                })),
                O = t => Object.assign(h(t), {
                    startsWith: e => O(d(t, m(t => w(t) && t.startsWith(e)))),
                    endsWith: e => O(d(t, m(t => w(t) && t.endsWith(e)))),
                    minLength: e => {
                        var n;
                        return O(d(t, (n = e, m(t => w(t) && t.length >= n))))
                    },
                    maxLength: e => {
                        var n;
                        return O(d(t, (n = e, m(t => w(t) && t.length <= n))))
                    },
                    includes: e => O(d(t, m(t => w(t) && t.includes(e)))),
                    regex: e => O(d(t, m(t => w(t) && !!t.match(e))))
                }),
                z = O(m(w)),
                E = (t, e) => m(n => b(n) && t <= n && e >= n),
                k = t => m(e => b(e) && e < t),
                A = t => m(e => b(e) && e > t),
                R = t => m(e => b(e) && e <= t),
                _ = t => m(e => b(e) && e >= t),
                I = () => m(t => b(t) && Number.isInteger(t)),
                N = () => m(t => b(t) && Number.isFinite(t)),
                j = () => m(t => b(t) && t > 0),
                T = () => m(t => b(t) && t < 0),
                B = t => Object.assign(h(t), {
                    between: (e, n) => B(d(t, E(e, n))),
                    lt: e => B(d(t, k(e))),
                    gt: e => B(d(t, A(e))),
                    lte: e => B(d(t, R(e))),
                    gte: e => B(d(t, _(e))),
                    int: () => B(d(t, I())),
                    finite: () => B(d(t, N())),
                    positive: () => B(d(t, j())),
                    negative: () => B(d(t, T()))
                }),
                M = B(m(b)),
                D = (t, e) => m(n => x(n) && t <= n && e >= n),
                F = t => m(e => x(e) && e < t),
                L = t => m(e => x(e) && e > t),
                U = t => m(e => x(e) && e <= t),
                K = t => m(e => x(e) && e >= t),
                W = () => m(t => x(t) && t > 0),
                q = () => m(t => x(t) && t < 0),
                C = t => Object.assign(h(t), {
                    between: (e, n) => C(d(t, D(e, n))),
                    lt: e => C(d(t, F(e))),
                    gt: e => C(d(t, L(e))),
                    lte: e => C(d(t, U(e))),
                    gte: e => C(d(t, K(e))),
                    positive: () => C(d(t, W())),
                    negative: () => C(d(t, q()))
                }),
                P = C(m(x)),
                G = h(m(function(t) {
                    return "boolean" == typeof t
                })),
                V = h(m(function(t) {
                    return "symbol" == typeof t
                })),
                $ = h(m(function(t) {
                    return null == t
                }));
            var H = {
                __proto__: null,
                matcher: r,
                optional: f,
                array: function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return function t(e) {
                        var n;
                        return Object.assign((n = e, Object.assign(n, {
                            *[Symbol.iterator]() {
                                yield Object.assign(n, {
                                    [i]: !0
                                })
                            }
                        })), {
                            optional: () => t(f(e)),
                            select: n => t(void 0 === n ? y(e) : y(n, e))
                        })
                    }({
                        [r]: () => ({
                            match: t => {
                                if (!Array.isArray(t)) return {
                                    matched: !1
                                };
                                if (0 === e.length) return {
                                    matched: !0
                                };
                                let n = e[0],
                                    r = {};
                                if (0 === t.length) return c(n).forEach(t => {
                                    r[t] = []
                                }), {
                                    matched: !0,
                                    selections: r
                                };
                                let i = (t, e) => {
                                    r[t] = (r[t] || []).concat([e])
                                };
                                return {
                                    matched: t.every(t => s(n, t, i)),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : c(e[0])
                        })
                    })
                },
                set: function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return h({
                        [r]: () => ({
                            match: t => {
                                if (!(t instanceof Set)) return {
                                    matched: !1
                                };
                                let n = {};
                                if (0 === t.size) return {
                                    matched: !0,
                                    selections: n
                                };
                                if (0 === e.length) return {
                                    matched: !0
                                };
                                let r = (t, e) => {
                                        n[t] = (n[t] || []).concat([e])
                                    },
                                    i = e[0];
                                return {
                                    matched: g(t, t => s(i, t, r)),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : c(e[0])
                        })
                    })
                },
                map: function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return h({
                        [r]: () => ({
                            match: t => {
                                var n;
                                if (!(t instanceof Map)) return {
                                    matched: !1
                                };
                                let r = {};
                                if (0 === t.size) return {
                                    matched: !0,
                                    selections: r
                                };
                                let i = (t, e) => {
                                    r[t] = (r[t] || []).concat([e])
                                };
                                if (0 === e.length) return {
                                    matched: !0
                                };
                                if (1 === e.length) throw Error("`P.map` wasn't given enough arguments. Expected (key, value), received ".concat(null == (n = e[0]) ? void 0 : n.toString()));
                                let [o, u] = e;
                                return {
                                    matched: v(t, (t, e) => {
                                        let n = s(o, e, i),
                                            r = s(u, t, i);
                                        return n && r
                                    }),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : [...c(e[0]), ...c(e[1])]
                        })
                    })
                },
                intersection: d,
                union: p,
                not: function(t) {
                    return h({
                        [r]: () => ({
                            match: e => ({
                                matched: !s(t, e, () => {})
                            }),
                            getSelectionKeys: () => [],
                            matcherType: "not"
                        })
                    })
                },
                when: m,
                select: y,
                any: S,
                _: S,
                string: z,
                between: E,
                lt: k,
                gt: A,
                lte: R,
                gte: _,
                int: I,
                finite: N,
                positive: j,
                negative: T,
                number: M,
                betweenBigInt: D,
                ltBigInt: F,
                gtBigInt: L,
                lteBigInt: U,
                gteBigInt: K,
                positiveBigInt: W,
                negativeBigInt: q,
                bigint: P,
                boolean: G,
                symbol: V,
                nullish: $,
                instanceOf: function(t) {
                    var e;
                    return h(m((e = t, t => t instanceof e)))
                },
                shape: function(t) {
                    return h(m(function() {
                        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        if (1 === e.length) {
                            let [t] = e;
                            return e => s(t, e, () => {})
                        }
                        if (2 === e.length) {
                            let [t, n] = e;
                            return s(t, n, () => {})
                        }
                        throw Error("isMatching wasn't given the right number of arguments: expected 1 or 2, received ".concat(e.length, "."))
                    }(t)))
                }
            };
            let J = {
                matched: !1,
                value: void 0
            };

            function Y(t) {
                return new Q(t, J)
            }
            class Q {
                with() {
                    let t;
                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    if (this.state.matched) return this;
                    let i = n[n.length - 1],
                        u = [n[0]];
                    3 === n.length && "function" == typeof n[1] ? (u.push(n[0]), t = n[1]) : n.length > 2 && u.push(...n.slice(1, n.length - 1));
                    let a = !1,
                        c = {},
                        l = (t, e) => {
                            a = !0, c[t] = e
                        },
                        h = u.some(t => s(t, this.input, l)) && (!t || t(this.input)) ? {
                            matched: !0,
                            value: i(a ? o in c ? c[o] : c : this.input, this.input)
                        } : J;
                    return new Q(this.input, h)
                }
                when(t, e) {
                    if (this.state.matched) return this;
                    let n = !!t(this.input);
                    return new Q(this.input, n ? {
                        matched: !0,
                        value: e(this.input, this.input)
                    } : J)
                }
                otherwise(t) {
                    return this.state.matched ? this.state.value : t(this.input)
                }
                exhaustive() {
                    return this.run()
                }
                run() {
                    let t;
                    if (this.state.matched) return this.state.value;
                    try {
                        t = JSON.stringify(this.input)
                    } catch (e) {
                        t = this.input
                    }
                    throw Error("Pattern matching error: no pattern matches value ".concat(t))
                }
                returnType() {
                    return this
                }
                constructor(t, e) {
                    this.input = void 0, this.state = void 0, this.input = t, this.state = e
                }
            }
        }
    }
]);