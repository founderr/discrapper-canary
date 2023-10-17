(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [41689], {
        737264: t => {
            "use strict";
            t.exports.Q = function(t) {
                var r, e = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!e) return null;
                e.shift();
                var n = null,
                    i = [];
                if (e[2]) {
                    n = (r = e[2].split("-")).shift();
                    i = r
                }
                var o = [];
                e[5] && (o = e[5].split("-")).shift();
                var a = [];
                if (e[6]) {
                    (r = e[6].split("-")).shift();
                    for (var s, h = []; r.length;) {
                        var p = r.shift();
                        if (1 === p.length)
                            if (s) {
                                a.push({
                                    singleton: s,
                                    extension: h
                                });
                                s = p;
                                h = []
                            } else s = p;
                        else h.push(p)
                    }
                    a.push({
                        singleton: s,
                        extension: h
                    })
                }
                var c = [];
                if (e[7]) {
                    (c = e[7].split("-")).shift();
                    c.shift()
                }
                var u = [];
                e[8] && (u = e[8].split("-")).shift();
                return {
                    langtag: {
                        language: {
                            language: n,
                            extlang: i
                        },
                        script: e[3] || null,
                        region: e[4] || null,
                        variant: o,
                        extension: a,
                        privateuse: c
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
                this._capacity = i(t);
                this._length = 0;
                this._front = 0;
                this._makeCapacity();
                if (e(t)) {
                    for (var r = t.length, n = 0; n < r; ++n) this[n] = t[n];
                    this._length = r
                }
            }
            r.prototype.toArray = function() {
                for (var t = this._length, r = new Array(t), e = this._front, n = this._capacity, i = 0; i < t; ++i) r[i] = this[e + i & n - 1];
                return r
            };
            r.prototype.push = function(t) {
                var r = arguments.length,
                    e = this._length;
                if (r > 1) {
                    var n = this._capacity;
                    if (e + r > n) {
                        for (var i = 0; i < r; ++i) {
                            this._checkCapacity(e + 1);
                            this[o = this._front + e & this._capacity - 1] = arguments[i];
                            e++;
                            this._length = e
                        }
                        return e
                    }
                    for (var o = this._front, i = 0; i < r; ++i) {
                        this[o + e & n - 1] = arguments[i];
                        o++
                    }
                    this._length = e + r;
                    return e + r
                }
                if (0 === r) return e;
                this._checkCapacity(e + 1);
                this[i = this._front + e & this._capacity - 1] = t;
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
                    if (r + e > (i = this._capacity)) {
                        for (var n = e - 1; n >= 0; n--) {
                            this._checkCapacity(r + 1);
                            var i = this._capacity;
                            this[a = (this._front - 1 & i - 1 ^ i) - i] = arguments[n];
                            r++;
                            this._length = r;
                            this._front = a
                        }
                        return r
                    }
                    var o = this._front;
                    for (n = e - 1; n >= 0; n--) {
                        var a;
                        this[a = (o - 1 & i - 1 ^ i) - i] = arguments[n];
                        o = a
                    }
                    this._front = o;
                    this._length = r + e;
                    return r + e
                }
                if (0 === e) return r;
                this._checkCapacity(r + 1);
                i = this._capacity;
                this[n = (this._front - 1 & i - 1 ^ i) - i] = t;
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
                this._capacity < t && this._resizeTo(i(1.5 * this._capacity + 16))
            };
            r.prototype._resizeTo = function(t) {
                var r = this._front,
                    e = this._capacity,
                    i = new Array(e),
                    o = this._length;
                n(this, 0, i, 0, e);
                this._capacity = t;
                this._makeCapacity();
                this._front = 0;
                if (r + o <= e) n(i, r, this, 0, o);
                else {
                    var a = o - (r + o & e - 1);
                    n(i, r, this, 0, a);
                    n(i, 0, this, a, o - a)
                }
            };
            var e = Array.isArray;

            function n(t, r, e, n, i) {
                for (var o = 0; o < i; ++o) e[o + n] = t[o + r]
            }

            function i(t) {
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
                t: for (var i = 0, o = 0; i < n; i++) {
                    for (var a = t.charCodeAt(i); o < e;)
                        if (r.charCodeAt(o++) === a) continue t;
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
            t.exports = function(t, i, o) {
                if ("string" != typeof i) {
                    var a = Object.getOwnPropertyNames(i);
                    n && (a = a.concat(Object.getOwnPropertySymbols(i)));
                    for (var s = 0; s < a.length; ++s)
                        if (!(r[a[s]] || e[a[s]] || o && o[a[s]])) try {
                            t[a[s]] = i[a[s]]
                        } catch (t) {}
                }
                return t
            }
        },
        301989: (t, r, e) => {
            var n = e(751789),
                i = e(780401),
                o = e(657667),
                a = e(521327),
                s = e(281866);

            function h(t) {
                var r = -1,
                    e = null == t ? 0 : t.length;
                this.clear();
                for (; ++r < e;) {
                    var n = t[r];
                    this.set(n[0], n[1])
                }
            }
            h.prototype.clear = n;
            h.prototype.delete = i;
            h.prototype.get = o;
            h.prototype.has = a;
            h.prototype.set = s;
            t.exports = h
        },
        738407: (t, r, e) => {
            var n = e(327040),
                i = e(514125),
                o = e(882117),
                a = e(567518),
                s = e(654705);

            function h(t) {
                var r = -1,
                    e = null == t ? 0 : t.length;
                this.clear();
                for (; ++r < e;) {
                    var n = t[r];
                    this.set(n[0], n[1])
                }
            }
            h.prototype.clear = n;
            h.prototype.delete = i;
            h.prototype.get = o;
            h.prototype.has = a;
            h.prototype.set = s;
            t.exports = h
        },
        357071: (t, r, e) => {
            var n = e(610852)(e(555639), "Map");
            t.exports = n
        },
        883369: (t, r, e) => {
            var n = e(924785),
                i = e(611285),
                o = e(396e3),
                a = e(349916),
                s = e(195265);

            function h(t) {
                var r = -1,
                    e = null == t ? 0 : t.length;
                this.clear();
                for (; ++r < e;) {
                    var n = t[r];
                    this.set(n[0], n[1])
                }
            }
            h.prototype.clear = n;
            h.prototype.delete = i;
            h.prototype.get = o;
            h.prototype.has = a;
            h.prototype.set = s;
            t.exports = h
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
                i = e(215346),
                o = e(513218),
                a = e(680346),
                s = /^\[object .+?Constructor\]$/,
                h = Function.prototype,
                p = Object.prototype,
                c = h.toString,
                u = p.hasOwnProperty,
                f = RegExp("^" + c.call(u).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            t.exports = function(t) {
                return !(!o(t) || i(t)) && (n(t) ? f : s).test(a(t))
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
                i = e(647801);
            t.exports = function(t, r) {
                var e = i(t, r);
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
                i = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                var r = this.__data__;
                if (n) {
                    var e = r[t];
                    return "__lodash_hash_undefined__" === e ? void 0 : e
                }
                return i.call(r, t) ? r[t] : void 0
            }
        },
        521327: (t, r, e) => {
            var n = e(894536),
                i = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                var r = this.__data__;
                return n ? void 0 !== r[t] : i.call(r, t)
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
            var n, i = e(614429),
                o = (n = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
            t.exports = function(t) {
                return !!o && o in t
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
                i = Array.prototype.splice;
            t.exports = function(t) {
                var r = this.__data__,
                    e = n(r, t);
                if (e < 0) return !1;
                e == r.length - 1 ? r.pop() : i.call(r, e, 1);
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
                    i = n(e, t);
                if (i < 0) {
                    ++this.size;
                    e.push([t, r])
                } else e[i][1] = r;
                return this
            }
        },
        924785: (t, r, e) => {
            var n = e(301989),
                i = e(738407),
                o = e(357071);
            t.exports = function() {
                this.size = 0;
                this.__data__ = {
                    hash: new n,
                    map: new(o || i),
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
                    i = e.size;
                e.set(t, r);
                this.size += e.size == i ? 0 : 1;
                return this
            }
        },
        894536: (t, r, e) => {
            var n = e(610852)(Object, "create");
            t.exports = n
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
        288306: (t, r, e) => {
            var n = e(883369);

            function i(t, r) {
                if ("function" != typeof t || null != r && "function" != typeof r) throw new TypeError("Expected a function");
                var e = function() {
                    var n = arguments,
                        i = r ? r.apply(this, n) : n[0],
                        o = e.cache;
                    if (o.has(i)) return o.get(i);
                    var a = t.apply(this, n);
                    e.cache = o.set(i, a) || o;
                    return a
                };
                e.cache = new(i.Cache || n);
                return e
            }
            i.Cache = n;
            t.exports = i
        },
        823493: (t, r, e) => {
            var n = e(23279),
                i = e(513218);
            t.exports = function(t, r, e) {
                var o = !0,
                    a = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");
                if (i(e)) {
                    o = "leading" in e ? !!e.leading : o;
                    a = "trailing" in e ? !!e.trailing : a
                }
                return n(t, r, {
                    leading: o,
                    maxWait: r,
                    trailing: a
                })
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
                    i = document.createElement("textarea");
                i.value = t;
                i.contentEditable = "true";
                i.style.visibility = "none";
                r.appendChild(i);
                e.selectNodeContents(i);
                null == n || n.removeAllRanges();
                null == n || n.addRange(e);
                i.focus();
                i.setSelectionRange(0, t.length);
                var o = document.execCommand("copy");
                r.removeChild(i);
                return o
            }
        },
        989824: (t, r, e) => {
            "use strict";
            e.d(r, {
                Z: () => o
            });
            var n = e(667294),
                i = {};

            function o(t) {
                var r = (0, n.useRef)(i);
                r.current === i && (r.current = t());
                return r.current
            }
        }
    }
]);