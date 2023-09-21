(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [65988, 56194], {
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
                var a = [];
                e[5] && (a = e[5].split("-")).shift();
                var i = [];
                if (e[6]) {
                    (r = e[6].split("-")).shift();
                    for (var s, u = []; r.length;) {
                        var c = r.shift();
                        if (1 === c.length)
                            if (s) {
                                i.push({
                                    singleton: s,
                                    extension: u
                                });
                                s = c;
                                u = []
                            } else s = c;
                        else u.push(c)
                    }
                    i.push({
                        singleton: s,
                        extension: u
                    })
                }
                var p = [];
                if (e[7]) {
                    (p = e[7].split("-")).shift();
                    p.shift()
                }
                var l = [];
                e[8] && (l = e[8].split("-")).shift();
                return {
                    langtag: {
                        language: {
                            language: n,
                            extlang: o
                        },
                        script: e[3] || null,
                        region: e[4] || null,
                        variant: a,
                        extension: i,
                        privateuse: p
                    },
                    privateuse: l,
                    grandfathered: {
                        irregular: e[0] || null,
                        regular: e[1] || null
                    }
                }
            }
        },
        824390: t => {
            "use strict";
            t.exports = function(t, r) {
                var e = r.length,
                    n = t.length;
                if (n > e) return !1;
                if (n === e) return t === r;
                t: for (var o = 0, a = 0; o < n; o++) {
                    for (var i = t.charCodeAt(o); a < e;)
                        if (r.charCodeAt(a++) === i) continue t;
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
            t.exports = function(t, o, a) {
                if ("string" != typeof o) {
                    var i = Object.getOwnPropertyNames(o);
                    n && (i = i.concat(Object.getOwnPropertySymbols(o)));
                    for (var s = 0; s < i.length; ++s)
                        if (!(r[i[s]] || e[i[s]] || a && a[i[s]])) try {
                            t[i[s]] = o[i[s]]
                        } catch (t) {}
                }
                return t
            }
        },
        301989: (t, r, e) => {
            var n = e(751789),
                o = e(780401),
                a = e(657667),
                i = e(521327),
                s = e(281866);

            function u(t) {
                var r = -1,
                    e = null == t ? 0 : t.length;
                this.clear();
                for (; ++r < e;) {
                    var n = t[r];
                    this.set(n[0], n[1])
                }
            }
            u.prototype.clear = n;
            u.prototype.delete = o;
            u.prototype.get = a;
            u.prototype.has = i;
            u.prototype.set = s;
            t.exports = u
        },
        738407: (t, r, e) => {
            var n = e(327040),
                o = e(514125),
                a = e(882117),
                i = e(567518),
                s = e(654705);

            function u(t) {
                var r = -1,
                    e = null == t ? 0 : t.length;
                this.clear();
                for (; ++r < e;) {
                    var n = t[r];
                    this.set(n[0], n[1])
                }
            }
            u.prototype.clear = n;
            u.prototype.delete = o;
            u.prototype.get = a;
            u.prototype.has = i;
            u.prototype.set = s;
            t.exports = u
        },
        357071: (t, r, e) => {
            var n = e(610852)(e(555639), "Map");
            t.exports = n
        },
        883369: (t, r, e) => {
            var n = e(924785),
                o = e(611285),
                a = e(396e3),
                i = e(349916),
                s = e(195265);

            function u(t) {
                var r = -1,
                    e = null == t ? 0 : t.length;
                this.clear();
                for (; ++r < e;) {
                    var n = t[r];
                    this.set(n[0], n[1])
                }
            }
            u.prototype.clear = n;
            u.prototype.delete = o;
            u.prototype.get = a;
            u.prototype.has = i;
            u.prototype.set = s;
            t.exports = u
        },
        14636: (t, r, e) => {
            var n = e(422545),
                o = e(135694),
                a = e(701469),
                i = e(578264),
                s = e(565776),
                u = e(936719),
                c = Object.prototype.hasOwnProperty;
            t.exports = function(t, r) {
                var e = a(t),
                    p = !e && o(t),
                    l = !e && !p && i(t),
                    f = !e && !p && !l && u(t),
                    h = e || p || l || f,
                    v = h ? n(t.length, String) : [],
                    y = v.length;
                for (var d in t) !r && !c.call(t, d) || h && ("length" == d || l && ("offset" == d || "parent" == d) || f && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || s(d, y)) || v.push(d);
                return v
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
                a = e(513218),
                i = e(680346),
                s = /^\[object .+?Constructor\]$/,
                u = Function.prototype,
                c = Object.prototype,
                p = u.toString,
                l = c.hasOwnProperty,
                f = RegExp("^" + p.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            t.exports = function(t) {
                return !(!a(t) || o(t)) && (n(t) ? f : s).test(i(t))
            }
        },
        238749: (t, r, e) => {
            var n = e(644239),
                o = e(541780),
                a = e(637005),
                i = {};
            i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = !0;
            i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1;
            t.exports = function(t) {
                return a(t) && o(t.length) && !!i[n(t)]
            }
        },
        400280: (t, r, e) => {
            var n = e(225726),
                o = e(86916),
                a = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!n(t)) return o(t);
                var r = [];
                for (var e in Object(t)) a.call(t, e) && "constructor" != e && r.push(e);
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
                a = (n = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
            t.exports = function(t) {
                return !!a && a in t
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
                a = e(357071);
            t.exports = function() {
                this.size = 0;
                this.__data__ = {
                    hash: new n,
                    map: new(a || o),
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
                a = o && t && !t.nodeType && t,
                i = a && a.exports === o && n.process,
                s = function() {
                    try {
                        var t = a && a.require && a.require("util").types;
                        return t || i && i.binding && i.binding("util")
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
                    a = o - 1;
                r = void 0 === r ? o : r;
                for (; ++e < r;) {
                    var i = n(e, a),
                        s = t[i];
                    t[i] = t[e];
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
                a = r && !r.nodeType && r,
                i = a && t && !t.nodeType && t,
                s = i && i.exports === a ? n.Buffer : void 0,
                u = (s ? s.isBuffer : void 0) || o;
            t.exports = u
        },
        936719: (t, r, e) => {
            var n = e(238749),
                o = e(307518),
                a = e(531167),
                i = a && a.isTypedArray,
                s = i ? o(i) : n;
            t.exports = s
        },
        3674: (t, r, e) => {
            var n = e(14636),
                o = e(400280),
                a = e(498612);
            t.exports = function(t) {
                return a(t) ? n(t) : o(t)
            }
        },
        288306: (t, r, e) => {
            var n = e(883369);

            function o(t, r) {
                if ("function" != typeof t || null != r && "function" != typeof r) throw new TypeError("Expected a function");
                var e = function() {
                    var n = arguments,
                        o = r ? r.apply(this, n) : n[0],
                        a = e.cache;
                    if (a.has(o)) return a.get(o);
                    var i = t.apply(this, n);
                    e.cache = a.set(o, i) || a;
                    return i
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
                a = e(701469);
            t.exports = function(t) {
                return (a(t) ? n : o)(t)
            }
        },
        595062: t => {
            t.exports = function() {
                return !1
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
                var a = document.execCommand("copy");
                r.removeChild(o);
                return a
            }
        },
        989824: (t, r, e) => {
            "use strict";
            e.d(r, {
                Z: () => a
            });
            var n = e(667294),
                o = {};

            function a(t) {
                var r = (0, n.useRef)(o);
                r.current === o && (r.current = t());
                return r.current
            }
        }
    }
]);