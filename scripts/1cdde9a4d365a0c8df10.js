(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [56194], {
        737264: t => {
            "use strict";
            t.exports.Q = function(t) {
                var e, r = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!r) return null;
                r.shift();
                var n = null,
                    a = [];
                if (r[2]) {
                    n = (e = r[2].split("-")).shift();
                    a = e
                }
                var o = [];
                r[5] && (o = r[5].split("-")).shift();
                var i = [];
                if (r[6]) {
                    (e = r[6].split("-")).shift();
                    for (var s, u = []; e.length;) {
                        var p = e.shift();
                        if (1 === p.length)
                            if (s) {
                                i.push({
                                    singleton: s,
                                    extension: u
                                });
                                s = p;
                                u = []
                            } else s = p;
                        else u.push(p)
                    }
                    i.push({
                        singleton: s,
                        extension: u
                    })
                }
                var c = [];
                if (r[7]) {
                    (c = r[7].split("-")).shift();
                    c.shift()
                }
                var l = [];
                r[8] && (l = r[8].split("-")).shift();
                return {
                    langtag: {
                        language: {
                            language: n,
                            extlang: a
                        },
                        script: r[3] || null,
                        region: r[4] || null,
                        variant: o,
                        extension: i,
                        privateuse: c
                    },
                    privateuse: l,
                    grandfathered: {
                        irregular: r[0] || null,
                        regular: r[1] || null
                    }
                }
            }
        },
        824390: t => {
            "use strict";
            t.exports = function(t, e) {
                var r = e.length,
                    n = t.length;
                if (n > r) return !1;
                if (n === r) return t === e;
                t: for (var a = 0, o = 0; a < n; a++) {
                    for (var i = t.charCodeAt(a); o < r;)
                        if (e.charCodeAt(o++) === i) continue t;
                    return !1
                }
                return !0
            }
        },
        753074: t => {
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
                r = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                n = "function" == typeof Object.getOwnPropertySymbols;
            t.exports = function(t, a, o) {
                if ("string" != typeof a) {
                    var i = Object.getOwnPropertyNames(a);
                    n && (i = i.concat(Object.getOwnPropertySymbols(a)));
                    for (var s = 0; s < i.length; ++s)
                        if (!(e[i[s]] || r[i[s]] || o && o[i[s]])) try {
                            t[i[s]] = a[i[s]]
                        } catch (t) {}
                }
                return t
            }
        },
        301989: (t, e, r) => {
            var n = r(751789),
                a = r(780401),
                o = r(657667),
                i = r(521327),
                s = r(281866);

            function u(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                this.clear();
                for (; ++e < r;) {
                    var n = t[e];
                    this.set(n[0], n[1])
                }
            }
            u.prototype.clear = n;
            u.prototype.delete = a;
            u.prototype.get = o;
            u.prototype.has = i;
            u.prototype.set = s;
            t.exports = u
        },
        738407: (t, e, r) => {
            var n = r(327040),
                a = r(514125),
                o = r(882117),
                i = r(567518),
                s = r(654705);

            function u(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                this.clear();
                for (; ++e < r;) {
                    var n = t[e];
                    this.set(n[0], n[1])
                }
            }
            u.prototype.clear = n;
            u.prototype.delete = a;
            u.prototype.get = o;
            u.prototype.has = i;
            u.prototype.set = s;
            t.exports = u
        },
        357071: (t, e, r) => {
            var n = r(610852)(r(555639), "Map");
            t.exports = n
        },
        883369: (t, e, r) => {
            var n = r(924785),
                a = r(611285),
                o = r(396e3),
                i = r(349916),
                s = r(195265);

            function u(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                this.clear();
                for (; ++e < r;) {
                    var n = t[e];
                    this.set(n[0], n[1])
                }
            }
            u.prototype.clear = n;
            u.prototype.delete = a;
            u.prototype.get = o;
            u.prototype.has = i;
            u.prototype.set = s;
            t.exports = u
        },
        218470: (t, e, r) => {
            var n = r(977813);
            t.exports = function(t, e) {
                for (var r = t.length; r--;)
                    if (n(t[r][0], e)) return r;
                return -1
            }
        },
        28458: (t, e, r) => {
            var n = r(623560),
                a = r(215346),
                o = r(513218),
                i = r(680346),
                s = /^\[object .+?Constructor\]$/,
                u = Function.prototype,
                p = Object.prototype,
                c = u.toString,
                l = p.hasOwnProperty,
                h = RegExp("^" + c.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            t.exports = function(t) {
                return !(!o(t) || a(t)) && (n(t) ? h : s).test(i(t))
            }
        },
        614429: (t, e, r) => {
            var n = r(555639)["__core-js_shared__"];
            t.exports = n
        },
        45050: (t, e, r) => {
            var n = r(37019);
            t.exports = function(t, e) {
                var r = t.__data__;
                return n(e) ? r["string" == typeof e ? "string" : "hash"] : r.map
            }
        },
        610852: (t, e, r) => {
            var n = r(28458),
                a = r(647801);
            t.exports = function(t, e) {
                var r = a(t, e);
                return n(r) ? r : void 0
            }
        },
        647801: t => {
            t.exports = function(t, e) {
                return null == t ? void 0 : t[e]
            }
        },
        751789: (t, e, r) => {
            var n = r(894536);
            t.exports = function() {
                this.__data__ = n ? n(null) : {};
                this.size = 0
            }
        },
        780401: t => {
            t.exports = function(t) {
                var e = this.has(t) && delete this.__data__[t];
                this.size -= e ? 1 : 0;
                return e
            }
        },
        657667: (t, e, r) => {
            var n = r(894536),
                a = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                var e = this.__data__;
                if (n) {
                    var r = e[t];
                    return "__lodash_hash_undefined__" === r ? void 0 : r
                }
                return a.call(e, t) ? e[t] : void 0
            }
        },
        521327: (t, e, r) => {
            var n = r(894536),
                a = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                var e = this.__data__;
                return n ? void 0 !== e[t] : a.call(e, t)
            }
        },
        281866: (t, e, r) => {
            var n = r(894536);
            t.exports = function(t, e) {
                var r = this.__data__;
                this.size += this.has(t) ? 0 : 1;
                r[t] = n && void 0 === e ? "__lodash_hash_undefined__" : e;
                return this
            }
        },
        37019: t => {
            t.exports = function(t) {
                var e = typeof t;
                return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
            }
        },
        215346: (t, e, r) => {
            var n, a = r(614429),
                o = (n = /[^.]+$/.exec(a && a.keys && a.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
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
        514125: (t, e, r) => {
            var n = r(218470),
                a = Array.prototype.splice;
            t.exports = function(t) {
                var e = this.__data__,
                    r = n(e, t);
                if (r < 0) return !1;
                r == e.length - 1 ? e.pop() : a.call(e, r, 1);
                --this.size;
                return !0
            }
        },
        882117: (t, e, r) => {
            var n = r(218470);
            t.exports = function(t) {
                var e = this.__data__,
                    r = n(e, t);
                return r < 0 ? void 0 : e[r][1]
            }
        },
        567518: (t, e, r) => {
            var n = r(218470);
            t.exports = function(t) {
                return n(this.__data__, t) > -1
            }
        },
        654705: (t, e, r) => {
            var n = r(218470);
            t.exports = function(t, e) {
                var r = this.__data__,
                    a = n(r, t);
                if (a < 0) {
                    ++this.size;
                    r.push([t, e])
                } else r[a][1] = e;
                return this
            }
        },
        924785: (t, e, r) => {
            var n = r(301989),
                a = r(738407),
                o = r(357071);
            t.exports = function() {
                this.size = 0;
                this.__data__ = {
                    hash: new n,
                    map: new(o || a),
                    string: new n
                }
            }
        },
        611285: (t, e, r) => {
            var n = r(45050);
            t.exports = function(t) {
                var e = n(this, t).delete(t);
                this.size -= e ? 1 : 0;
                return e
            }
        },
        396e3: (t, e, r) => {
            var n = r(45050);
            t.exports = function(t) {
                return n(this, t).get(t)
            }
        },
        349916: (t, e, r) => {
            var n = r(45050);
            t.exports = function(t) {
                return n(this, t).has(t)
            }
        },
        195265: (t, e, r) => {
            var n = r(45050);
            t.exports = function(t, e) {
                var r = n(this, t),
                    a = r.size;
                r.set(t, e);
                this.size += r.size == a ? 0 : 1;
                return this
            }
        },
        894536: (t, e, r) => {
            var n = r(610852)(Object, "create");
            t.exports = n
        },
        680346: t => {
            var e = Function.prototype.toString;
            t.exports = function(t) {
                if (null != t) {
                    try {
                        return e.call(t)
                    } catch (t) {}
                    try {
                        return t + ""
                    } catch (t) {}
                }
                return ""
            }
        },
        288306: (t, e, r) => {
            var n = r(883369);

            function a(t, e) {
                if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError("Expected a function");
                var r = function() {
                    var n = arguments,
                        a = e ? e.apply(this, n) : n[0],
                        o = r.cache;
                    if (o.has(a)) return o.get(a);
                    var i = t.apply(this, n);
                    r.cache = o.set(a, i) || o;
                    return i
                };
                r.cache = new(a.Cache || n);
                return r
            }
            a.Cache = n;
            t.exports = a
        },
        180735: (t, e, r) => {
            "use strict";
            r.d(e, {
                h: () => n
            });
            var n;
            ! function(t) {
                t[t.USER = 100] = "USER";
                t[t.STREAM = 18] = "STREAM"
            }(n || (n = {}))
        },
        248634: (t, e, r) => {
            "use strict";
            r.d(e, {
                z: () => n
            });
            var n;
            ! function(t) {
                t.MATCH_ALL = "match_all";
                t.MATCH_SOME = "match_some"
            }(n || (n = {}));
            new Set(["match_all", "match_some"])
        },
        482507: (t, e, r) => {
            "use strict";
            r.d(e, {
                J: () => n
            });

            function n(t) {
                var e = document.body;
                if (null == e) throw new Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                var r = document.createRange(),
                    n = window.getSelection(),
                    a = document.createElement("textarea");
                a.value = t;
                a.contentEditable = "true";
                a.style.visibility = "none";
                e.appendChild(a);
                r.selectNodeContents(a);
                null == n || n.removeAllRanges();
                null == n || n.addRange(r);
                a.focus();
                a.setSelectionRange(0, t.length);
                var o = document.execCommand("copy");
                e.removeChild(a);
                return o
            }
        },
        989824: (t, e, r) => {
            "use strict";
            r.d(e, {
                Z: () => o
            });
            var n = r(667294),
                a = {};

            function o(t) {
                var e = (0, n.useRef)(a);
                e.current === a && (e.current = t());
                return e.current
            }
        }
    }
]);