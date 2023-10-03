(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [25395], {
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
                var i = [];
                e[5] && (i = e[5].split("-")).shift();
                var a = [];
                if (e[6]) {
                    (r = e[6].split("-")).shift();
                    for (var s, p = []; r.length;) {
                        var c = r.shift();
                        if (1 === c.length)
                            if (s) {
                                a.push({
                                    singleton: s,
                                    extension: p
                                });
                                s = c;
                                p = []
                            } else s = c;
                        else p.push(c)
                    }
                    a.push({
                        singleton: s,
                        extension: p
                    })
                }
                var h = [];
                if (e[7]) {
                    (h = e[7].split("-")).shift();
                    h.shift()
                }
                var u = [];
                e[8] && (u = e[8].split("-")).shift();
                return {
                    langtag: {
                        language: {
                            language: n,
                            extlang: o
                        },
                        script: e[3] || null,
                        region: e[4] || null,
                        variant: i,
                        extension: a,
                        privateuse: h
                    },
                    privateuse: u,
                    grandfathered: {
                        irregular: e[0] || null,
                        regular: e[1] || null
                    }
                }
            }
        },
        667237: t => {
            "use strict";

            function r(t) {
                this._capacity = o(t);
                this._length = 0;
                this._front = 0;
                this._makeCapacity();
                if (e(t)) {
                    for (var r = t.length, n = 0; n < r; ++n) this[n] = t[n];
                    this._length = r
                }
            }
            r.prototype.toArray = function() {
                for (var t = this._length, r = new Array(t), e = this._front, n = this._capacity, o = 0; o < t; ++o) r[o] = this[e + o & n - 1];
                return r
            };
            r.prototype.push = function(t) {
                var r = arguments.length,
                    e = this._length;
                if (r > 1) {
                    var n = this._capacity;
                    if (e + r > n) {
                        for (var o = 0; o < r; ++o) {
                            this._checkCapacity(e + 1);
                            this[i = this._front + e & this._capacity - 1] = arguments[o];
                            e++;
                            this._length = e
                        }
                        return e
                    }
                    for (var i = this._front, o = 0; o < r; ++o) {
                        this[i + e & n - 1] = arguments[o];
                        i++
                    }
                    this._length = e + r;
                    return e + r
                }
                if (0 === r) return e;
                this._checkCapacity(e + 1);
                this[o = this._front + e & this._capacity - 1] = t;
                this._length = e + 1;
                return e + 1
            };
            r.prototype.pop = function() {
                var t = this._length;
                if (0 !== t) {
                    var r = this._front + t - 1 & this._capacity - 1,
                        e = this[r];
                    this[r] = void 0;
                    this._length = t - 1;
                    return e
                }
            };
            r.prototype.shift = function() {
                var t = this._length;
                if (0 !== t) {
                    var r = this._front,
                        e = this[r];
                    this[r] = void 0;
                    this._front = r + 1 & this._capacity - 1;
                    this._length = t - 1;
                    return e
                }
            };
            r.prototype.unshift = function(t) {
                var r = this._length,
                    e = arguments.length;
                if (e > 1) {
                    if (r + e > (o = this._capacity)) {
                        for (var n = e - 1; n >= 0; n--) {
                            this._checkCapacity(r + 1);
                            var o = this._capacity;
                            this[a = (this._front - 1 & o - 1 ^ o) - o] = arguments[n];
                            r++;
                            this._length = r;
                            this._front = a
                        }
                        return r
                    }
                    var i = this._front;
                    for (n = e - 1; n >= 0; n--) {
                        var a;
                        this[a = (i - 1 & o - 1 ^ o) - o] = arguments[n];
                        i = a
                    }
                    this._front = i;
                    this._length = r + e;
                    return r + e
                }
                if (0 === e) return r;
                this._checkCapacity(r + 1);
                o = this._capacity;
                this[n = (this._front - 1 & o - 1 ^ o) - o] = t;
                this._length = r + 1;
                this._front = n;
                return r + 1
            };
            r.prototype.peekBack = function() {
                var t = this._length;
                if (0 !== t) {
                    return this[this._front + t - 1 & this._capacity - 1]
                }
            };
            r.prototype.peekFront = function() {
                if (0 !== this._length) return this[this._front]
            };
            r.prototype.get = function(t) {
                var r = t;
                if (r === (0 | r)) {
                    var e = this._length;
                    r < 0 && (r += e);
                    if (!(r < 0 || r >= e)) return this[this._front + r & this._capacity - 1]
                }
            };
            r.prototype.isEmpty = function() {
                return 0 === this._length
            };
            r.prototype.clear = function() {
                this._length = 0;
                this._front = 0;
                this._makeCapacity()
            };
            r.prototype.toString = function() {
                return this.toArray().toString()
            };
            r.prototype.valueOf = r.prototype.toString;
            r.prototype.removeFront = r.prototype.shift;
            r.prototype.removeBack = r.prototype.pop;
            r.prototype.insertFront = r.prototype.unshift;
            r.prototype.insertBack = r.prototype.push;
            r.prototype.enqueue = r.prototype.push;
            r.prototype.dequeue = r.prototype.shift;
            r.prototype.toJSON = r.prototype.toArray;
            Object.defineProperty(r.prototype, "length", {
                get: function() {
                    return this._length
                },
                set: function() {
                    throw new RangeError("")
                }
            });
            r.prototype._makeCapacity = function() {
                for (var t = this._capacity, r = 0; r < t; ++r) this[r] = void 0
            };
            r.prototype._checkCapacity = function(t) {
                this._capacity < t && this._resizeTo(o(1.5 * this._capacity + 16))
            };
            r.prototype._resizeTo = function(t) {
                var r = this._front,
                    e = this._capacity,
                    o = new Array(e),
                    i = this._length;
                n(this, 0, o, 0, e);
                this._capacity = t;
                this._makeCapacity();
                this._front = 0;
                if (r + i <= e) n(o, r, this, 0, i);
                else {
                    var a = i - (r + i & e - 1);
                    n(o, r, this, 0, a);
                    n(o, 0, this, a, i - a)
                }
            };
            var e = Array.isArray;

            function n(t, r, e, n, o) {
                for (var i = 0; i < o; ++i) e[i + n] = t[i + r]
            }

            function o(t) {
                if ("number" != typeof t) {
                    if (!e(t)) return 16;
                    t = t.length
                }
                return function(t) {
                    t >>>= 0;
                    t -= 1;
                    t |= t >> 1;
                    t |= t >> 2;
                    t |= t >> 4;
                    t |= t >> 8;
                    return 1 + (t |= t >> 16)
                }(Math.min(Math.max(16, t), 1073741824))
            }
            t.exports = r
        },
        824390: t => {
            "use strict";
            t.exports = function(t, r) {
                var e = r.length,
                    n = t.length;
                if (n > e) return !1;
                if (n === e) return t === r;
                t: for (var o = 0, i = 0; o < n; o++) {
                    for (var a = t.charCodeAt(o); i < e;)
                        if (r.charCodeAt(i++) === a) continue t;
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
            t.exports = function(t, o, i) {
                if ("string" != typeof o) {
                    var a = Object.getOwnPropertyNames(o);
                    n && (a = a.concat(Object.getOwnPropertySymbols(o)));
                    for (var s = 0; s < a.length; ++s)
                        if (!(r[a[s]] || e[a[s]] || i && i[a[s]])) try {
                            t[a[s]] = o[a[s]]
                        } catch (t) {}
                }
                return t
            }
        },
        301989: (t, r, e) => {
            var n = e(751789),
                o = e(780401),
                i = e(657667),
                a = e(521327),
                s = e(281866);

            function p(t) {
                var r = -1,
                    e = null == t ? 0 : t.length;
                this.clear();
                for (; ++r < e;) {
                    var n = t[r];
                    this.set(n[0], n[1])
                }
            }
            p.prototype.clear = n;
            p.prototype.delete = o;
            p.prototype.get = i;
            p.prototype.has = a;
            p.prototype.set = s;
            t.exports = p
        },
        738407: (t, r, e) => {
            var n = e(327040),
                o = e(514125),
                i = e(882117),
                a = e(567518),
                s = e(654705);

            function p(t) {
                var r = -1,
                    e = null == t ? 0 : t.length;
                this.clear();
                for (; ++r < e;) {
                    var n = t[r];
                    this.set(n[0], n[1])
                }
            }
            p.prototype.clear = n;
            p.prototype.delete = o;
            p.prototype.get = i;
            p.prototype.has = a;
            p.prototype.set = s;
            t.exports = p
        },
        357071: (t, r, e) => {
            var n = e(610852)(e(555639), "Map");
            t.exports = n
        },
        883369: (t, r, e) => {
            var n = e(924785),
                o = e(611285),
                i = e(396e3),
                a = e(349916),
                s = e(195265);

            function p(t) {
                var r = -1,
                    e = null == t ? 0 : t.length;
                this.clear();
                for (; ++r < e;) {
                    var n = t[r];
                    this.set(n[0], n[1])
                }
            }
            p.prototype.clear = n;
            p.prototype.delete = o;
            p.prototype.get = i;
            p.prototype.has = a;
            p.prototype.set = s;
            t.exports = p
        },
        14636: (t, r, e) => {
            var n = e(422545),
                o = e(135694),
                i = e(701469),
                a = e(578264),
                s = e(565776),
                p = e(936719),
                c = Object.prototype.hasOwnProperty;
            t.exports = function(t, r) {
                var e = i(t),
                    h = !e && o(t),
                    u = !e && !h && a(t),
                    f = !e && !h && !u && p(t),
                    l = e || h || u || f,
                    y = l ? n(t.length, String) : [],
                    _ = y.length;
                for (var v in t) !r && !c.call(t, v) || l && ("length" == v || u && ("offset" == v || "parent" == v) || f && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || s(v, _)) || y.push(v);
                return y
            }
        },
        70151: (t, r, e) => {
            var n = e(200278),
                o = e(173480);
            t.exports = function(t) {
                return o(n(t))
            }
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
                i = e(513218),
                a = e(680346),
                s = /^\[object .+?Constructor\]$/,
                p = Function.prototype,
                c = Object.prototype,
                h = p.toString,
                u = c.hasOwnProperty,
                f = RegExp("^" + h.call(u).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            t.exports = function(t) {
                return !(!i(t) || o(t)) && (n(t) ? f : s).test(a(t))
            }
        },
        238749: (t, r, e) => {
            var n = e(644239),
                o = e(541780),
                i = e(637005),
                a = {};
            a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0;
            a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1;
            t.exports = function(t) {
                return i(t) && o(t.length) && !!a[n(t)]
            }
        },
        400280: (t, r, e) => {
            var n = e(225726),
                o = e(86916),
                i = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!n(t)) return o(t);
                var r = [];
                for (var e in Object(t)) i.call(t, e) && "constructor" != e && r.push(e);
                return r
            }
        },
        525127: (t, r, e) => {
            var n = e(173480),
                o = e(252628);
            t.exports = function(t) {
                return n(o(t))
            }
        },
        422545: t => {
            t.exports = function(t, r) {
                for (var e = -1, n = Array(t); ++e < t;) n[e] = r(e);
                return n
            }
        },
        307518: t => {
            t.exports = function(t) {
                return function(r) {
                    return t(r)
                }
            }
        },
        747415: (t, r, e) => {
            var n = e(829932);
            t.exports = function(t, r) {
                return n(r, (function(r) {
                    return t[r]
                }))
            }
        },
        200278: t => {
            t.exports = function(t, r) {
                var e = -1,
                    n = t.length;
                r || (r = Array(n));
                for (; ++e < n;) r[e] = t[e];
                return r
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
                i = (n = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
            t.exports = function(t) {
                return !!i && i in t
            }
        },
        225726: t => {
            var r = Object.prototype;
            t.exports = function(t) {
                var e = t && t.constructor;
                return t === ("function" == typeof e && e.prototype || r)
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
                i = e(357071);
            t.exports = function() {
                this.size = 0;
                this.__data__ = {
                    hash: new n,
                    map: new(i || o),
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
        86916: (t, r, e) => {
            var n = e(205569)(Object.keys, Object);
            t.exports = n
        },
        531167: (t, r, e) => {
            t = e.nmd(t);
            var n = e(431957),
                o = r && !r.nodeType && r,
                i = o && t && !t.nodeType && t,
                a = i && i.exports === o && n.process,
                s = function() {
                    try {
                        var t = i && i.require && i.require("util").types;
                        return t || a && a.binding && a.binding("util")
                    } catch (t) {}
                }();
            t.exports = s
        },
        205569: t => {
            t.exports = function(t, r) {
                return function(e) {
                    return t(r(e))
                }
            }
        },
        173480: (t, r, e) => {
            var n = e(769877);
            t.exports = function(t, r) {
                var e = -1,
                    o = t.length,
                    i = o - 1;
                r = void 0 === r ? o : r;
                for (; ++e < r;) {
                    var a = n(e, i),
                        s = t[a];
                    t[a] = t[e];
                    t[e] = s
                }
                t.length = r;
                return t
            }
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
        578264: (t, r, e) => {
            t = e.nmd(t);
            var n = e(555639),
                o = e(595062),
                i = r && !r.nodeType && r,
                a = i && t && !t.nodeType && t,
                s = a && a.exports === i ? n.Buffer : void 0,
                p = (s ? s.isBuffer : void 0) || o;
            t.exports = p
        },
        936719: (t, r, e) => {
            var n = e(238749),
                o = e(307518),
                i = e(531167),
                a = i && i.isTypedArray,
                s = a ? o(a) : n;
            t.exports = s
        },
        3674: (t, r, e) => {
            var n = e(14636),
                o = e(400280),
                i = e(498612);
            t.exports = function(t) {
                return i(t) ? n(t) : o(t)
            }
        },
        288306: (t, r, e) => {
            var n = e(883369);

            function o(t, r) {
                if ("function" != typeof t || null != r && "function" != typeof r) throw new TypeError("Expected a function");
                var e = function() {
                    var n = arguments,
                        o = r ? r.apply(this, n) : n[0],
                        i = e.cache;
                    if (i.has(o)) return i.get(o);
                    var a = t.apply(this, n);
                    e.cache = i.set(o, a) || i;
                    return a
                };
                e.cache = new(o.Cache || n);
                return e
            }
            o.Cache = n;
            t.exports = o
        },
        369983: (t, r, e) => {
            var n = e(70151),
                o = e(525127),
                i = e(701469);
            t.exports = function(t) {
                return (i(t) ? n : o)(t)
            }
        },
        595062: t => {
            t.exports = function() {
                return !1
            }
        },
        823493: (t, r, e) => {
            var n = e(23279),
                o = e(513218);
            t.exports = function(t, r, e) {
                var i = !0,
                    a = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");
                if (o(e)) {
                    i = "leading" in e ? !!e.leading : i;
                    a = "trailing" in e ? !!e.trailing : a
                }
                return n(t, r, {
                    leading: i,
                    maxWait: r,
                    trailing: a
                })
            }
        },
        252628: (t, r, e) => {
            var n = e(747415),
                o = e(3674);
            t.exports = function(t) {
                return null == t ? [] : n(t, o(t))
            }
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
        142520: (t, r, e) => {
            "use strict";
            e.d(r, {
                x: () => n
            });
            var n;
            ! function(t) {
                t.THOUGHT_EMBED_TITLE = "Clyde Thoughts"
            }(n || (n = {}))
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
                var i = document.execCommand("copy");
                r.removeChild(o);
                return i
            }
        },
        989824: (t, r, e) => {
            "use strict";
            e.d(r, {
                Z: () => i
            });
            var n = e(667294),
                o = {};

            function i(t) {
                var r = (0, n.useRef)(o);
                r.current === o && (r.current = t());
                return r.current
            }
        }
    }
]);