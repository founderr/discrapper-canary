(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [7416, 67145, 96043, 71402], {
        737264: t => {
            "use strict";
            t.exports.Q = function(t) {
                var e, n = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!n) return null;
                n.shift();
                var r = null,
                    i = [];
                if (n[2]) {
                    r = (e = n[2].split("-")).shift();
                    i = e
                }
                var o = [];
                n[5] && (o = n[5].split("-")).shift();
                var a = [];
                if (n[6]) {
                    (e = n[6].split("-")).shift();
                    for (var u, l = []; e.length;) {
                        var c = e.shift();
                        if (1 === c.length)
                            if (u) {
                                a.push({
                                    singleton: u,
                                    extension: l
                                });
                                u = c;
                                l = []
                            } else u = c;
                        else l.push(c)
                    }
                    a.push({
                        singleton: u,
                        extension: l
                    })
                }
                var s = [];
                if (n[7]) {
                    (s = n[7].split("-")).shift();
                    s.shift()
                }
                var _ = [];
                n[8] && (_ = n[8].split("-")).shift();
                return {
                    langtag: {
                        language: {
                            language: r,
                            extlang: i
                        },
                        script: n[3] || null,
                        region: n[4] || null,
                        variant: o,
                        extension: a,
                        privateuse: s
                    },
                    privateuse: _,
                    grandfathered: {
                        irregular: n[0] || null,
                        regular: n[1] || null
                    }
                }
            }
        },
        667237: t => {
            "use strict";

            function e(t) {
                this._capacity = i(t);
                this._length = 0;
                this._front = 0;
                this._makeCapacity();
                if (n(t)) {
                    for (var e = t.length, r = 0; r < e; ++r) this[r] = t[r];
                    this._length = e
                }
            }
            e.prototype.toArray = function() {
                for (var t = this._length, e = new Array(t), n = this._front, r = this._capacity, i = 0; i < t; ++i) e[i] = this[n + i & r - 1];
                return e
            };
            e.prototype.push = function(t) {
                var e = arguments.length,
                    n = this._length;
                if (e > 1) {
                    var r = this._capacity;
                    if (n + e > r) {
                        for (var i = 0; i < e; ++i) {
                            this._checkCapacity(n + 1);
                            this[o = this._front + n & this._capacity - 1] = arguments[i];
                            n++;
                            this._length = n
                        }
                        return n
                    }
                    for (var o = this._front, i = 0; i < e; ++i) {
                        this[o + n & r - 1] = arguments[i];
                        o++
                    }
                    this._length = n + e;
                    return n + e
                }
                if (0 === e) return n;
                this._checkCapacity(n + 1);
                this[i = this._front + n & this._capacity - 1] = t;
                this._length = n + 1;
                return n + 1
            };
            e.prototype.pop = function() {
                var t = this._length;
                if (0 !== t) {
                    var e = this._front + t - 1 & this._capacity - 1,
                        n = this[e];
                    this[e] = void 0;
                    this._length = t - 1;
                    return n
                }
            };
            e.prototype.shift = function() {
                var t = this._length;
                if (0 !== t) {
                    var e = this._front,
                        n = this[e];
                    this[e] = void 0;
                    this._front = e + 1 & this._capacity - 1;
                    this._length = t - 1;
                    return n
                }
            };
            e.prototype.unshift = function(t) {
                var e = this._length,
                    n = arguments.length;
                if (n > 1) {
                    if (e + n > (i = this._capacity)) {
                        for (var r = n - 1; r >= 0; r--) {
                            this._checkCapacity(e + 1);
                            var i = this._capacity;
                            this[a = (this._front - 1 & i - 1 ^ i) - i] = arguments[r];
                            e++;
                            this._length = e;
                            this._front = a
                        }
                        return e
                    }
                    var o = this._front;
                    for (r = n - 1; r >= 0; r--) {
                        var a;
                        this[a = (o - 1 & i - 1 ^ i) - i] = arguments[r];
                        o = a
                    }
                    this._front = o;
                    this._length = e + n;
                    return e + n
                }
                if (0 === n) return e;
                this._checkCapacity(e + 1);
                i = this._capacity;
                this[r = (this._front - 1 & i - 1 ^ i) - i] = t;
                this._length = e + 1;
                this._front = r;
                return e + 1
            };
            e.prototype.peekBack = function() {
                var t = this._length;
                if (0 !== t) {
                    return this[this._front + t - 1 & this._capacity - 1]
                }
            };
            e.prototype.peekFront = function() {
                if (0 !== this._length) return this[this._front]
            };
            e.prototype.get = function(t) {
                var e = t;
                if (e === (0 | e)) {
                    var n = this._length;
                    e < 0 && (e += n);
                    if (!(e < 0 || e >= n)) return this[this._front + e & this._capacity - 1]
                }
            };
            e.prototype.isEmpty = function() {
                return 0 === this._length
            };
            e.prototype.clear = function() {
                this._length = 0;
                this._front = 0;
                this._makeCapacity()
            };
            e.prototype.toString = function() {
                return this.toArray().toString()
            };
            e.prototype.valueOf = e.prototype.toString;
            e.prototype.removeFront = e.prototype.shift;
            e.prototype.removeBack = e.prototype.pop;
            e.prototype.insertFront = e.prototype.unshift;
            e.prototype.insertBack = e.prototype.push;
            e.prototype.enqueue = e.prototype.push;
            e.prototype.dequeue = e.prototype.shift;
            e.prototype.toJSON = e.prototype.toArray;
            Object.defineProperty(e.prototype, "length", {
                get: function() {
                    return this._length
                },
                set: function() {
                    throw new RangeError("")
                }
            });
            e.prototype._makeCapacity = function() {
                for (var t = this._capacity, e = 0; e < t; ++e) this[e] = void 0
            };
            e.prototype._checkCapacity = function(t) {
                this._capacity < t && this._resizeTo(i(1.5 * this._capacity + 16))
            };
            e.prototype._resizeTo = function(t) {
                var e = this._front,
                    n = this._capacity,
                    i = new Array(n),
                    o = this._length;
                r(this, 0, i, 0, n);
                this._capacity = t;
                this._makeCapacity();
                this._front = 0;
                if (e + o <= n) r(i, e, this, 0, o);
                else {
                    var a = o - (e + o & n - 1);
                    r(i, e, this, 0, a);
                    r(i, 0, this, a, o - a)
                }
            };
            var n = Array.isArray;

            function r(t, e, n, r, i) {
                for (var o = 0; o < i; ++o) n[o + r] = t[o + e]
            }

            function i(t) {
                if ("number" != typeof t) {
                    if (!n(t)) return 16;
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
            t.exports = e
        },
        545292: (t, e, n) => {
            t.exports = n.p + "3294183db720bd0985871f6aa43e6e28.png"
        },
        37517: (t, e, n) => {
            t.exports = n.p + "e0c7251b9f011e1625dde1329fc98986.png"
        },
        14636: (t, e, n) => {
            var r = n(422545),
                i = n(135694),
                o = n(701469),
                a = n(578264),
                u = n(565776),
                l = n(936719),
                c = Object.prototype.hasOwnProperty;
            t.exports = function(t, e) {
                var n = o(t),
                    s = !n && i(t),
                    _ = !n && !s && a(t),
                    f = !n && !s && !_ && l(t),
                    E = n || s || _ || f,
                    p = E ? r(t.length, String) : [],
                    d = p.length;
                for (var I in t) !e && !c.call(t, I) || E && ("length" == I || _ && ("offset" == I || "parent" == I) || f && ("buffer" == I || "byteLength" == I || "byteOffset" == I) || u(I, d)) || p.push(I);
                return p
            }
        },
        70151: (t, e, n) => {
            var r = n(200278),
                i = n(173480);
            t.exports = function(t) {
                return i(r(t))
            }
        },
        238749: (t, e, n) => {
            var r = n(644239),
                i = n(541780),
                o = n(637005),
                a = {};
            a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0;
            a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1;
            t.exports = function(t) {
                return o(t) && i(t.length) && !!a[r(t)]
            }
        },
        400280: (t, e, n) => {
            var r = n(225726),
                i = n(86916),
                o = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!r(t)) return i(t);
                var e = [];
                for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
                return e
            }
        },
        525127: (t, e, n) => {
            var r = n(173480),
                i = n(252628);
            t.exports = function(t) {
                return r(i(t))
            }
        },
        422545: t => {
            t.exports = function(t, e) {
                for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                return r
            }
        },
        307518: t => {
            t.exports = function(t) {
                return function(e) {
                    return t(e)
                }
            }
        },
        747415: (t, e, n) => {
            var r = n(829932);
            t.exports = function(t, e) {
                return r(e, (function(e) {
                    return t[e]
                }))
            }
        },
        200278: t => {
            t.exports = function(t, e) {
                var n = -1,
                    r = t.length;
                e || (e = Array(r));
                for (; ++n < r;) e[n] = t[n];
                return e
            }
        },
        225726: t => {
            var e = Object.prototype;
            t.exports = function(t) {
                var n = t && t.constructor;
                return t === ("function" == typeof n && n.prototype || e)
            }
        },
        86916: (t, e, n) => {
            var r = n(205569)(Object.keys, Object);
            t.exports = r
        },
        531167: (t, e, n) => {
            t = n.nmd(t);
            var r = n(431957),
                i = e && !e.nodeType && e,
                o = i && t && !t.nodeType && t,
                a = o && o.exports === i && r.process,
                u = function() {
                    try {
                        var t = o && o.require && o.require("util").types;
                        return t || a && a.binding && a.binding("util")
                    } catch (t) {}
                }();
            t.exports = u
        },
        205569: t => {
            t.exports = function(t, e) {
                return function(n) {
                    return t(e(n))
                }
            }
        },
        173480: (t, e, n) => {
            var r = n(769877);
            t.exports = function(t, e) {
                var n = -1,
                    i = t.length,
                    o = i - 1;
                e = void 0 === e ? i : e;
                for (; ++n < e;) {
                    var a = r(n, o),
                        u = t[a];
                    t[a] = t[n];
                    t[n] = u
                }
                t.length = e;
                return t
            }
        },
        578264: (t, e, n) => {
            t = n.nmd(t);
            var r = n(555639),
                i = n(595062),
                o = e && !e.nodeType && e,
                a = o && t && !t.nodeType && t,
                u = a && a.exports === o ? r.Buffer : void 0,
                l = (u ? u.isBuffer : void 0) || i;
            t.exports = l
        },
        936719: (t, e, n) => {
            var r = n(238749),
                i = n(307518),
                o = n(531167),
                a = o && o.isTypedArray,
                u = a ? i(a) : r;
            t.exports = u
        },
        3674: (t, e, n) => {
            var r = n(14636),
                i = n(400280),
                o = n(498612);
            t.exports = function(t) {
                return o(t) ? r(t) : i(t)
            }
        },
        369983: (t, e, n) => {
            var r = n(70151),
                i = n(525127),
                o = n(701469);
            t.exports = function(t) {
                return (o(t) ? r : i)(t)
            }
        },
        595062: t => {
            t.exports = function() {
                return !1
            }
        },
        823493: (t, e, n) => {
            var r = n(23279),
                i = n(513218);
            t.exports = function(t, e, n) {
                var o = !0,
                    a = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");
                if (i(n)) {
                    o = "leading" in n ? !!n.leading : o;
                    a = "trailing" in n ? !!n.trailing : a
                }
                return r(t, e, {
                    leading: o,
                    maxWait: e,
                    trailing: a
                })
            }
        },
        252628: (t, e, n) => {
            var r = n(747415),
                i = n(3674);
            t.exports = function(t) {
                return null == t ? [] : r(t, i(t))
            }
        },
        971402: (t, e, n) => {
            "use strict";
            n.d(e, {
                Zy: () => _,
                vq: () => f,
                jW: () => E
            });
            var r = n(744564),
                i = n(26468),
                o = n(120415),
                a = n(73105),
                u = n(2590);

            function l(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        l(t, e, n[e])
                    }))
                }
                return t
            }

            function s(t) {
                r.Z.dispatch({
                    type: "CONTEXT_MENU_OPEN",
                    contextMenu: t
                })
            }

            function _(t) {
                (0, n(973935).flushSync)((function() {
                    r.Z.wait((function() {
                        r.Z.dispatch({
                            type: "CONTEXT_MENU_CLOSE"
                        }).finally(t)
                    }))
                }))
            }

            function f(t, e, n, r) {
                t.stopPropagation();
                if (null == t.currentTarget.contains || t.currentTarget.contains(t.target)) {
                    var l, _, f = 0,
                        E = 0;
                    if ("pageX" in t) {
                        f = t.pageX;
                        E = t.pageY
                    }
                    if (0 === f && 0 === E) {
                        var p, d = null === (p = t.target) || void 0 === p ? void 0 : p.getBoundingClientRect(),
                            I = null != d ? d : {},
                            O = I.left,
                            T = void 0 === O ? 0 : O,
                            h = I.top,
                            g = void 0 === h ? 0 : h,
                            S = I.width,
                            m = void 0 === S ? 0 : S,
                            y = I.height;
                        f = T + m / 2;
                        E = g + (void 0 === y ? 0 : y) / 2
                    }
                    var v = {
                        render: e,
                        renderLazy: r,
                        target: null !== (l = t.target) && void 0 !== l ? l : t.currentTarget,
                        rect: new DOMRect(f, E, 0, 0),
                        config: c({
                            context: __OVERLAY__ ? u.IlC.OVERLAY : null !== (_ = (0, i.GB)()) && void 0 !== _ ? _ : u.IlC.APP
                        }, n)
                    };
                    if ((null == n ? void 0 : n.enableSpellCheck) && (0, o.nI)()) var A = (0, a.RD)((function() {
                        A();
                        s(v)
                    }));
                    else {
                        t.preventDefault();
                        s(v)
                    }
                }
            }

            function E(t, e, n) {
                f(t, void 0, n, e)
            }
        },
        735885: (t, e, n) => {
            "use strict";
            n.d(e, {
                jN: () => i,
                xf: () => o,
                Ou: () => a
            });
            var r = n(744564);

            function i(t) {
                r.Z.dispatch({
                    type: "LAYER_PUSH",
                    component: t
                })
            }

            function o() {
                r.Z.dispatch({
                    type: "LAYER_POP"
                })
            }

            function a() {
                r.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        810978: (t, e, n) => {
            "use strict";
            n.d(e, {
                GZ: () => p,
                Gn: () => I,
                Y2: () => O,
                mE: () => T
            });
            var r = n(281110),
                i = n(744564),
                o = n(973889),
                a = n(615796),
                u = n(264628),
                l = n(673679),
                c = n(2590),
                s = n(203600);

            function _(t, e, n, r, i, o, a) {
                try {
                    var u = t[o](a),
                        l = u.value
                } catch (t) {
                    n(t);
                    return
                }
                u.done ? e(l) : Promise.resolve(l).then(r, i)
            }

            function f(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = t.apply(e, n);

                        function a(t) {
                            _(o, r, i, a, u, "next", t)
                        }

                        function u(t) {
                            _(o, r, i, a, u, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }
            var E = function(t, e) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = e.call(t, a)
                            } catch (t) {
                                o = [6, t];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, u])
                    }
                }
            };

            function p(t, e, n, r, i) {
                return d.apply(this, arguments)
            }

            function d() {
                return (d = f((function(t, e, n, s, _) {
                    var f, p, d, I;
                    return E(this, (function(E) {
                        switch (E.label) {
                            case 0:
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH",
                                    skuId: t
                                });
                                E.label = 1;
                            case 1:
                                E.trys.push([1, 5, , 6]);
                                f = {
                                    url: c.ANM.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(t),
                                    oldFormErrors: !0
                                };
                                p = {};
                                null != e && (p.country_code = e);
                                null != n && (p.payment_source_id = n);
                                null != s && (p.include_unpublished = s);
                                null != _ && (p.revenue_surface = _);
                                f.query = p;
                                return a.Z.ipCountryCodeLoaded ? [3, 3] : [4, (0, l.GE)()];
                            case 2:
                                E.sent();
                                E.label = 3;
                            case 3:
                                return [4, r.ZP.get(f)];
                            case 4:
                                d = E.sent();
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                                    skuId: t,
                                    subscriptionPlans: d.body
                                });
                                return [3, 6];
                            case 5:
                                I = E.sent();
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                                    skuId: t
                                });
                                (0, u.q2)(I);
                                throw new o.Z(I);
                            case 6:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function I(t, e) {
                return Promise.all(t.filter((function(t) {
                    return t !== s.Si.NONE
                })).map((function(t) {
                    return p(t, e)
                })))
            }

            function O(t, e, n) {
                return Promise.all(s.YQ.filter((function(t) {
                    return t !== s.Si.NONE
                })).map((function(r) {
                    return p(r, t, e, void 0, n)
                })))
            }

            function T() {
                i.Z.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        973889: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => _
            });
            var r = n(281110),
                i = n(2590),
                o = n(473708);

            function a(t) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return a(t)
            }

            function u(t, e) {
                return !e || "object" !== c(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function l(t, e) {
                l = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return l(t, e)
            }
            var c = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function s(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = a(t);
                    if (e) {
                        var i = a(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return u(this, n)
                }
            }
            var _ = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && l(t, e)
                }(n, t);
                var e = s(n);

                function n(t, r) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    return e.call(this, t, r, o.Z.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: i.yXt.STATUS
                    }))
                }
                return n
            }(r.ZP.V6OrEarlierAPIError)
        },
        320142: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => u
            });
            var r = n(120415);

            function i(t, e, n, r, i, o, a) {
                try {
                    var u = t[o](a),
                        l = u.value
                } catch (t) {
                    n(t);
                    return
                }
                u.done ? e(l) : Promise.resolve(l).then(r, i)
            }

            function o(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = t.apply(e, n);

                        function u(t) {
                            i(a, r, o, u, l, "next", t)
                        }

                        function l(t) {
                            i(a, r, o, u, l, "throw", t)
                        }
                        u(void 0)
                    }))
                }
            }
            var a = function(t, e) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = e.call(t, a)
                            } catch (t) {
                                o = [6, t];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, u])
                    }
                }
            };

            function u(t, e) {
                return l.apply(this, arguments)
            }

            function l() {
                return (l = o((function(t, e) {
                    var i, o, u, l;
                    return a(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                0;
                                return [4, Promise.all([n.e(40532), n.e(29392), n.e(39685), n.e(47007), n.e(79249), n.e(69876), n.e(6543), n.e(29342), n.e(84832), n.e(27499), n.e(79913), n.e(27764), n.e(64466), n.e(92465), n.e(45353), n.e(10675), n.e(73679), n.e(73727), n.e(87440), n.e(52555), n.e(61953), n.e(84441), n.e(67367), n.e(14606), n.e(4230), n.e(24501), n.e(6252)]).then(n.bind(n, 624501))];
                            case 1:
                                i = a.sent(), o = i.default;
                                if (null != (u = o(t, {
                                        skipExtensionCheck: e,
                                        analyticsLocations: []
                                    }))) u(null);
                                else if (r.FB) window.open(t);
                                else {
                                    (l = document.createElement("a")).href = t;
                                    l.target = "_blank";
                                    l.rel = "noreferrer noopener";
                                    l.click()
                                }
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        83797: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => i
            });
            var r = n(2590);

            function i(t) {
                return null != t && t.type !== r.IIU.CUSTOM_STATUS && (null != t.details || null != t.assets && (null != t.assets.large_image || null != t.assets.small_text) || null != t.party || null != t.secrets || null != t.state)
            }
        },
        153686: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => i
            });
            var r;
            ! function(t) {
                t.POPOUT_WINDOW = "popout window";
                t.OVERLAY = "overlay";
                t.NOTICE = "notice";
                t.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip";
                t.BADGE = "badge";
                t.USER_SETTINGS = "user settings";
                t.USER_SETTINGS_MENU = "user settings menu";
                t.ACCOUNT = "account";
                t.TEXT_AND_IMAGES = "text and images";
                t.GUILD_SETTINGS = "guild settings";
                t.OVERVIEW = "overview";
                t.STICKERS = "stickers";
                t.VANITY_URL = "vanity url";
                t.PREMIUM_MARKETING = "premium marketing";
                t.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison";
                t.PREMIUM_PAYMENT_MODAL = "premium payment modal";
                t.PREMIUM_UPSELL_ALERT = "premium upsell alert";
                t.PREMIUM_UPSELL_MODAL = "premium upsell modal";
                t.PREMIUM_SETTINGS = "premium settings";
                t.PAYMENT_FLOW_TEST_PAGE = "payment flow test page";
                t.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet";
                t.CHANNEL_CALL = "channel call";
                t.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen";
                t.RTC_PANEL = "rtc panel";
                t.SOUNDBOARD_BUTTON = "soundboard button";
                t.SOUNDBOARD_POPOUT = "soundboard popout";
                t.SOUNDBOARD_WHEEL = "soundboard wheel";
                t.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet";
                t.GIFT_BUTTON = "gift button";
                t.EXPRESSION_SUGGESTIONS = "expression suggestions";
                t.EMOJI_PICKER = "emoji picker";
                t.STICKER_PICKER = "sticker picker";
                t.STICKER_POPOUT = "sticker popout";
                t.PREMIUM_UPSELL = "premium upsell";
                t.EMPTY_STATE = "empty state";
                t.SUBSCRIPTION_DETAILS = "subscription details";
                t.SUBSCRIPTION_HEADER = "subscription header";
                t.ACCOUNT_CREDIT_BANNER = "account credit banner";
                t.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal";
                t.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner";
                t.STREAM_QUALITY_INDICATOR = "stream quality indicator";
                t.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice";
                t.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice";
                t.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal";
                t.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell";
                t.RPC = "rpc";
                t.BILLING_STANDALONE = "billing standalone";
                t.GUILD_CHANNEL_LIST = "guild channel list";
                t.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer";
                t.STICKER_MESSAGE = "sticker message";
                t.CHANNEL_TEXT_AREA = "channel text area";
                t.HEADER_BAR = "header bar";
                t.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal";
                t.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message";
                t.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell";
                t.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell";
                t.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal";
                t.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal";
                t.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice";
                t.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal";
                t.GUILD_HEADER = "guild header";
                t.GUILD_BANNER = "guild banner";
                t.GUILD_BANNER_NOTICE = "guild banner notice";
                t.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal";
                t.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal";
                t.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal";
                t.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar";
                t.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none";
                t.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1";
                t.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2";
                t.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3";
                t.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner";
                t.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display";
                t.GUILDS_LIST = "guilds list";
                t.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector";
                t.ACTIVITY_DIRECTORY = "activity directory";
                t.ACTIVITY_TILE = "activity tile";
                t.ACTIVITY_UPSELL = "activity upsell";
                t.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle";
                t.INSTANT_INVITE_MODAL = "instant invite modal";
                t.IMAGE_CROPPING_MODAL = "image cropping modal";
                t.GIF_PICKER = "gif picker";
                t.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal";
                t.INVITE_MODAL = "invite modal";
                t.INVITE_EMBED = "invite embed";
                t.NEW_GUILD_BUTTON = "new guild button";
                t.CHARACTER_COUNT = "character count";
                t.DM_CHANNEL = "dm channel";
                t.GUILD_CHANNEL = "guild channel";
                t.FORUM_CHANNEL = "forum channel";
                t.FILE_UPLOAD_POPOUT = "file upload popout";
                t.EMOJI = "emoji";
                t.PROFILE = "profile";
                t.PROFILE_MODAL = "profile modal";
                t.PROFILE_POPOUT = "profile popout";
                t.GUILD_PROFILE = "guild profile";
                t.EDIT_AVATAR = "edit avatar";
                t.EDIT_BANNER = "edit banner";
                t.CHAT_INPUT = "chat input";
                t.CREATE_THREAD = "create thread";
                t.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header";
                t.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay";
                t.SELECT_IMAGE_MODAL = "select image modal";
                t.VIDEO_BACKGROUND_OPTIONS = "video background options";
                t.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option";
                t.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell";
                t.CAMERA_PREVIEW = "camera preview";
                t.HOME_PAGE_PREMIUM_TAB = "home page premium tab";
                t.PREMIUM_MARKETING_SURFACE = "premium marketing surface";
                t.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta";
                t.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta";
                t.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta";
                t.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta";
                t.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta";
                t.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta";
                t.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta";
                t.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card";
                t.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card";
                t.PREMIUM_MARKETING_FEATURE = "premium marketing feature";
                t.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table";
                t.PREMIUM_MARKETING_FOOTER = "premium marketing footer";
                t.CHANNEL_CALL_ACTION_BAR = "channel call action bar";
                t.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji";
                t.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization";
                t.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming";
                t.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads";
                t.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo";
                t.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls";
                t.VOICE_CONTROL_TRAY = "voice control tray";
                t.ACTIVE_NOW_COLUMN = "active now column";
                t.CONTEXT_MENU = "context menu";
                t.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu";
                t.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu";
                t.CHANNEL_CATEGORY_MENU = "channel category menu";
                t.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu";
                t.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu";
                t.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu";
                t.CHANNEL_LIST_THREAD_MENU = "channel list thread menu";
                t.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu";
                t.CHANNEL_TITLE_MENU = "channel title menu";
                t.GROUP_DM_MENU = "group dm menu";
                t.AUDIT_LOG_USER_MENU = "audit log user menu";
                t.BANNED_USER_MENU = "banned user menu";
                t.DM_USER_MENU = "dm user menu";
                t.GROUP_DM_USER_MENU = "group dm user menu";
                t.GUILD_CHANNEL_USER_MENU = "guild channel user menu";
                t.GUILD_MODERATION_USER_MENU = "guild moderation user menu";
                t.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu";
                t.GUILD_SETTINGS_USER_MENU = "guild settings user menu";
                t.GUILD_USER_MENU = "guild user menu";
                t.THREAD_USER_MENU = "thread user menu";
                t.USER_GENERIC_MENU = "user generic menu";
                t.USER_PROFILE_ACTIONS_MENU = "user profile actions menu";
                t.VOICE_ACTION_SHEET = "voice action sheet";
                t.FOCUSED_VOICE_CONTROLS = "focused voice controls";
                t.MASKED_LINK = "masked link";
                t.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet";
                t.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet";
                t.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet";
                t.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell";
                t.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal";
                t.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal";
                t.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet";
                t.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal";
                t.ACCOUNT_PROFILE_POPOUT = "account profile popout";
                t.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet";
                t.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium";
                t.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro";
                t.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting";
                t.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022";
                t.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark";
                t.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip";
                t.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out";
                t.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker";
                t.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone";
                t.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night";
                t.STAGE_VIDEO_LIMIT = "stage video limit";
                t.ACTIVITIES_MINI_SHELF = "activities mini shelf";
                t.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner";
                t.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite";
                t.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion";
                t.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button";
                t.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark";
                t.CLIENT_THEMES_EDITOR = "client themes editor";
                t.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector";
                t.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert";
                t.SHARE_NITRO_EMBED = "share nitro embed";
                t.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message";
                t.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button";
                t.REFERRAL_TRIALS_POPOUT = "referral trials popout";
                t.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal";
                t.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner";
                t.ACTIVITY_BOOKMARK = "activity bookmark";
                t.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher";
                t.ACTIVITY_DETAIL_PAGE = "activity detail page";
                t.ACTIVITIES_PAGE = "activities page";
                t.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta";
                t.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile";
                t.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content";
                t.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky";
                t.ACTIVITIES_HAPPENING_NOW = "activities happening now";
                t.MEDIA_VIEWER = "media viewer";
                t.MESSAGE_LONG_PRESS_MENU = "message long press menu";
                t.COLLECTIBLES_SHOP = "collectibles shop";
                t.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal";
                t.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell";
                t.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell";
                t.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal";
                t.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal";
                t.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell";
                t.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell";
                t.PREMIUM_BILLING_INFO = "premium billing info";
                t.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details";
                t.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice";
                t.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview";
                t.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview";
                t.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated";
                t.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal";
                t.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice";
                t.PREMIUM_PLAN_SELECT = "premium_plan_select";
                t.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview";
                t.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content";
                t.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer";
                t.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview";
                t.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview";
                t.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT";
                t.MEMBER_SAFETY_PAGE = "member safety page";
                t.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page";
                t.GUILD_MEMBER_MOD_VIEW = "guild member mod view";
                t.GUILD_PRODUCT_EMBED_CARD = "guild product embed card";
                t.GUILD_PRODUCT_INFO_MODAL = "guild product info modal";
                t.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal";
                t.GUILD_SHOP_PAGE = "guild shop page";
                t.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details";
                t.MESSAGE_REMIX_TAG = "message remix tag";
                t.MESSAGE_REMIX_BUTTON = "message remix button";
                t.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity";
                t.CLIPS_SETTINGS = "clips settings";
                t.CLIPS_GALLERY = "clips gallery";
                t.CLIPS_GALLERY_ITEM = "clips gallery item";
                t.CLIPS_EDITOR = "clips editor";
                t.CLIPS_SHARE_MODAL = "clips share modal";
                t.CHANNEL_ATTACH_BUTTON = "channel attach button";
                t.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet";
                t.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home"
            }(r || (r = {}));
            const i = r
        },
        396043: (t, e, n) => {
            "use strict";
            n.d(e, {
                v_: () => C,
                JS: () => P,
                hH: () => L,
                AB: () => U,
                ZP: () => k,
                oG: () => G,
                kO: () => D,
                yw: () => w
            });
            var r = n(496486),
                i = n.n(r),
                o = n(940060),
                a = n(382060),
                u = n(664625),
                l = n(61209),
                c = n(5544),
                s = n(27851),
                _ = n(21372),
                f = n(567403),
                E = n(525077),
                p = n(682776),
                d = n(491260),
                I = n(563367),
                O = n(715107),
                T = n(464187),
                h = n(407561),
                g = n(652591),
                S = n(563135),
                m = n(671723);
            var y = n(2590),
                v = n(897196);

            function A(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function N(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        A(t, e, n[e])
                    }))
                }
                return t
            }

            function b(t) {
                var e = 0;
                for (var n in t) e += 1;
                return e
            }

            function L(t) {
                if (null == t) return null;
                var e = f.Z.getGuild(t);
                if (null == e) return null;
                var n, r = u.default.getId(),
                    i = _.ZP.getMember(t, r),
                    o = c.ZP.getChannels(t),
                    a = o[c.sH].length,
                    l = o[c.Zb].length,
                    E = h.Z.getVoiceStates(t);
                return {
                    guild_id: e.id,
                    guild_size_total: s.Z.getMemberCount(t),
                    guild_num_channels: a + l,
                    guild_num_text_channels: a,
                    guild_num_voice_channels: l,
                    guild_num_roles: b(e.roles),
                    guild_member_num_roles: null != i ? i.roles.length : 0,
                    guild_member_perms: String(null !== (n = p.Z.getGuildPermissions(e)) && void 0 !== n ? n : S.ZP.NONE),
                    guild_is_vip: e.hasFeature(y.oNc.VIP_REGIONS),
                    is_member: null != i,
                    num_voice_channels_active: b(E)
                }
            }

            function R(t, e) {
                return {
                    channel_static_route: e,
                    channel_hidden: !1
                }
            }

            function P(t) {
                if (null == t) return null;
                var e = l.Z.getChannel(t);
                return null == e ? null : C(e)
            }

            function C(t) {
                if (null == t) return null;
                var e, n = !1,
                    r = t.getGuildId();
                if (null != r) {
                    var i = function(t) {
                        if (null == t) return !1;
                        var e = t.permissionOverwrites[r];
                        return null != e && o.Z.has(e.deny, y.Plq.VIEW_CHANNEL)
                    };
                    n = a.Ec.has(t.type) && null != t.parent_id ? i(l.Z.getChannel(t.parent_id)) : i(t)
                }
                return {
                    channel_id: t.id,
                    channel_type: t.type,
                    channel_size_total: t.isPrivate() ? t.recipients.length : 0,
                    channel_member_perms: String(null != r && null !== (e = p.Z.getChannelPermissions(t)) && void 0 !== e ? e : S.ZP.NONE),
                    channel_hidden: n
                }
            }

            function U(t) {
                if (null == t) return null;
                var e = l.Z.getChannel(t);
                if (null == e) return null;
                var n, r = E.Z.isVideoEnabled(),
                    i = I.Z.getMediaSessionId();
                return N({
                    channel_id: e.id,
                    channel_type: e.type,
                    guild_id: e.getGuildId(),
                    media_session_id: i
                }, D(e.getGuildId(), e.id, r), {
                    game_name: null != (n = m.ZP.getCurrentGameForAnalytics()) ? n.name : null,
                    game_id: null != n ? n.id : null
                })
            }

            function M(t, e) {
                return null == t ? null != e ? e : null : t.isPrivate() ? null : null !== (r = null !== (n = t.getGuildId()) && void 0 !== n ? n : e) && void 0 !== r ? r : null;
                var n, r
            }

            function w(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!g.default.isThrottled(t)) {
                    var r = !("location" in e) || e.location !== y.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        i = "guild_id" in e ? e.guild_id : r ? T.Z.getGuildId() : null,
                        o = "channel_id" in e ? e.channel_id : r ? O.Z.getChannelId(i) : null,
                        a = l.Z.getChannel(o),
                        u = M(a, i),
                        c = N({}, e, L(u), null != i && null != o && (0, v.AB)(o) ? R(0, o) : C(a));
                    g.default.track(t, c, {
                        flush: n
                    })
                }
            }

            function D(t, e, n) {
                var r = {
                    voice_state_count: 0,
                    video_stream_count: 0,
                    video_enabled: n
                };
                i()(h.Z.getVoiceStates(t)).filter((function(t) {
                    return t.channelId === e
                })).filter((function(t) {
                    return t.userId !== u.default.getId()
                })).forEach((function(t) {
                    r.voice_state_count++;
                    (t.selfVideo || t.selfStream) && r.video_stream_count++
                }));
                return r
            }

            function G(t, e) {
                var n = {
                    custom_status_count: 0
                };
                i()(h.Z.getVoiceStates(t)).forEach((function(t) {
                    t.channelId === e && null != d.Z.findActivity(t.userId, (function(t) {
                        return t.type === y.IIU.CUSTOM_STATUS
                    })) && n.custom_status_count++
                }));
                return n
            }
            const k = {
                trackWithMetadata: w,
                getVoiceStateMetadata: D
            }
        },
        272200: (t, e, n) => {
            "use strict";
            n.d(e, {
                Qi: () => r,
                iw: () => i,
                Kw: () => o,
                Vh: () => a,
                ub: () => u,
                bB: () => l
            });
            var r, i, o, a, u, l;
            ! function(t) {
                t[t.BUILT_IN = 0] = "BUILT_IN";
                t[t.APPLICATION = 1] = "APPLICATION"
            }(r || (r = {}));
            ! function(t) {
                t[t.BUILT_IN = 0] = "BUILT_IN";
                t[t.BUILT_IN_TEXT = 1] = "BUILT_IN_TEXT";
                t[t.BUILT_IN_INTEGRATION = 2] = "BUILT_IN_INTEGRATION";
                t[t.BOT = 3] = "BOT";
                t[t.PLACEHOLDER = 4] = "PLACEHOLDER"
            }(i || (i = {}));
            ! function(t) {
                t[t.ROLE = 1] = "ROLE";
                t[t.USER = 2] = "USER";
                t[t.CHANNEL = 3] = "CHANNEL"
            }(o || (o = {}));
            ! function(t) {
                t.DISCOVERY = "discovery";
                t.SUGGESTION = "suggestion";
                t.MENTION = "mention";
                t.PASTE = "paste";
                t.RECALL = "recall";
                t.POPULAR_COMMANDS = "popular_commands";
                t.MJ_CHAT_BAR = "mj_chat_bar";
                t.QUERY = "query"
            }(a || (a = {}));
            ! function(t) {
                t[t.BUILT_IN = 1] = "BUILT_IN";
                t[t.FRECENCY = 2] = "FRECENCY";
                t[t.APP = 3] = "APP"
            }(u || (u = {}));
            ! function(t) {
                t[t.CHAT = 0] = "CHAT";
                t[t.APPLICATION_LAUNCHER = 1] = "APPLICATION_LAUNCHER"
            }(l || (l = {}))
        },
        87931: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => r
            });
            const r = n(517586).Z
        },
        165586: (t, e, n) => {
            "use strict";
            n.d(e, {
                LY: () => r,
                aW: () => _,
                ws: () => i,
                tI: () => o,
                L9: () => f,
                no: () => E,
                ND: () => p,
                WC: () => I,
                z8: () => O,
                km: () => h,
                k0: () => g,
                af: () => S
            });
            var r, i, o, a, u = n(2590),
                l = n(203600),
                c = n(473708);

            function s(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }! function(t) {
                t[t.RESOLUTION_480 = 480] = "RESOLUTION_480";
                t[t.RESOLUTION_720 = 720] = "RESOLUTION_720";
                t[t.RESOLUTION_1080 = 1080] = "RESOLUTION_1080";
                t[t.RESOLUTION_1440 = 1440] = "RESOLUTION_1440";
                t[t.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE"
            }(r || (r = {}));

            function _(t) {
                switch (t) {
                    case r.RESOLUTION_480:
                        return r.RESOLUTION_480;
                    case r.RESOLUTION_720:
                        return r.RESOLUTION_720;
                    case r.RESOLUTION_1080:
                        return r.RESOLUTION_1080;
                    case r.RESOLUTION_SOURCE:
                        return r.RESOLUTION_SOURCE;
                    default:
                        throw new Error("Unknown resolution: ".concat(t))
                }
            }! function(t) {
                t[t.FPS_5 = 5] = "FPS_5";
                t[t.FPS_15 = 15] = "FPS_15";
                t[t.FPS_30 = 30] = "FPS_30";
                t[t.FPS_60 = 60] = "FPS_60"
            }(i || (i = {}));
            ! function(t) {
                t[t.PRESET_VIDEO = 1] = "PRESET_VIDEO";
                t[t.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS";
                t[t.PRESET_CUSTOM = 3] = "PRESET_CUSTOM"
            }(o || (o = {}));

            function f(t) {
                switch (t) {
                    case i.FPS_5:
                        return i.FPS_5;
                    case i.FPS_15:
                        return i.FPS_15;
                    case i.FPS_30:
                        return i.FPS_30;
                    case i.FPS_60:
                        return i.FPS_60;
                    default:
                        throw new Error("Unknown frame rate: ".concat(t))
                }
            }
            var E = (s(a = {}, o.PRESET_DOCUMENTS, [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_15
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_5
                }]), s(a, o.PRESET_VIDEO, [{
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_60
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_60
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_60
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_30
                }]), s(a, o.PRESET_CUSTOM, []), a),
                p = [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_60,
                    quality: l.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_30,
                    quality: l.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_15,
                    quality: l.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_5,
                    preset: o.PRESET_DOCUMENTS
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_60,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_30,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_15,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_60,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_30,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_15,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_60,
                    guildPremiumTier: u.Eu4.TIER_1,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_30
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_15
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_5
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: i.FPS_60,
                    guildPremiumTier: u.Eu4.TIER_1,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: i.FPS_30
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: i.FPS_15
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: i.FPS_5
                }];

            function d(t, e) {
                return {
                    value: t,
                    get label() {
                        return null != e ? e() : t
                    }
                }
            }
            var I = [d(r.RESOLUTION_720), d(r.RESOLUTION_1080), d(r.RESOLUTION_1440), d(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                O = [d(r.RESOLUTION_720), d(r.RESOLUTION_1080), d(r.RESOLUTION_1440)],
                T = function(t) {
                    return "".concat(t, "p")
                },
                h = [d(r.RESOLUTION_480, (function() {
                    return T(r.RESOLUTION_480)
                })), d(r.RESOLUTION_720, (function() {
                    return T(r.RESOLUTION_720)
                })), d(r.RESOLUTION_1080, (function() {
                    return T(r.RESOLUTION_1080)
                })), d(r.RESOLUTION_1440, (function() {
                    return T(r.RESOLUTION_1440)
                })), d(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                g = [d(i.FPS_15), d(i.FPS_30), d(i.FPS_60)],
                S = [d(i.FPS_15, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_15
                    })
                })), d(i.FPS_30, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_30
                    })
                })), d(i.FPS_60, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_60
                    })
                }))]
        },
        897436: (t, e, n) => {
            "use strict";
            n.d(e, {
                Jp: () => s,
                Xx: () => _,
                JY: () => E
            });
            var r = n(318715),
                i = n(260561),
                o = n(473903),
                a = n(116094),
                u = n(473708),
                l = (0, i.B)({
                    kind: "user",
                    id: "2023-05_inventory_guild_packs",
                    label: "Inventory Guild Packs Experiment",
                    defaultConfig: {
                        desktopViewAndUseAndCollectEnabled: !1,
                        mobileViewAndUseEnabled: !1,
                        mobileAndFreemiumCollectEnabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Desktop view/use/collect",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 2,
                        label: "Desktop view/use/collect and mobile view/use",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 3,
                        label: "Read-only pack emoji for logged out users",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !1,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 4,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0
                        }
                    }, {
                        id: 5,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0
                        }
                    }]
                }),
                c = function(t) {
                    var e = t.user,
                        n = t.config,
                        r = n.desktopViewAndUseAndCollectEnabled,
                        i = (n.mobileViewAndUseEnabled, n.mobileAndFreemiumCollectEnabled);
                    false;
                    return {
                        viewAndUseEnabled: r,
                        showTryPacksModalAndV2Copy: i,
                        collectEnabled: a.ZP.isPremium(e) ? r : i
                    }
                },
                s = function(t) {
                    var e = t.user,
                        n = t.autoTrackExposure,
                        r = void 0 === n || n;
                    return null == e ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1
                    } : c({
                        user: e,
                        config: l.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: r
                        })
                    })
                },
                _ = function() {
                    var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            expressionSourceGuild: void 0,
                            autoTrackExposure: !0
                        },
                        n = e.expressionSourceGuild,
                        i = void 0 === n ? void 0 : n,
                        a = e.autoTrackExposure,
                        u = void 0 === a || a,
                        s = (0, r.ZP)([o.default], (function() {
                            return o.default.getCurrentUser()
                        })),
                        _ = l.useExperiment({
                            location: "inventory_guild_setting_experiment"
                        }, {
                            autoTrackExposure: u
                        }),
                        f = c({
                            user: s,
                            config: _
                        }),
                        E = f.viewAndUseEnabled,
                        p = f.showTryPacksModalAndV2Copy,
                        d = f.collectEnabled,
                        I = E && d && null != i && !1 !== (null == i || null === (t = i.inventorySettings) || void 0 === t ? void 0 : t.isEmojiPackCollectible);
                    return {
                        viewAndUseEnabled: E,
                        collectEnabled: I,
                        showTryPacksModalAndV2Copy: p
                    }
                },
                f = (0, i.B)({
                    kind: "guild",
                    id: "2023-06_inventory_guild_setting",
                    label: "Inventory Guild Settings Experiment",
                    defaultConfig: {
                        showSettingsToggle: !1,
                        allowCollection: !1,
                        getNewSettingsDescription: function() {
                            return null
                        }
                    },
                    treatments: [{
                        id: 1,
                        label: "Show settings toggle, but collection is not allowed.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !1,
                            getNewSettingsDescription: function() {
                                return u.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_LATE_AUGUST
                            }
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: function() {
                                return u.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_AUGUST
                            }
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: function() {
                                return u.Z.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_LATE_AUGUST
                            }
                        }
                    }]
                }),
                E = function(t) {
                    var e = f.useExperiment({
                        guildId: null != t ? t : "",
                        location: "482926_3"
                    }, {
                        autoTrackExposure: !0
                    });
                    return {
                        showSettingsToggle: e.showSettingsToggle,
                        allowCollection: e.allowCollection,
                        getNewSettingsDescription: e.getNewSettingsDescription
                    }
                }
        },
        944737: (t, e, n) => {
            "use strict";
            n.r(e);
            n.d(e, {
                default: () => y
            });
            var r = n(785893),
                i = (n(667294), n(795308)),
                o = n(882723),
                a = n(19585),
                u = n(531441),
                l = n(593166),
                c = n(442212),
                s = n(203600),
                _ = n(2590),
                f = n(473708),
                E = n(905388),
                p = n.n(E),
                d = n(296024),
                I = n.n(d),
                O = n(37517),
                T = n.n(O);

            function h(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function g(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        h(t, e, n[e])
                    }))
                }
                return t
            }

            function S(t, e) {
                if (null == t) return {};
                var n, r, i = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || (i[n] = t[n])
                    }
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                    }
                }
                return i
            }

            function m(t, e) {
                return (0, r.jsx)(u.IG, {
                    text: t,
                    className: I().newBadge,
                    color: i.Z.unsafe_rawColors.BRAND_500.css
                }, e)
            }

            function y(t) {
                var e = t.guildCount,
                    n = t.onClose,
                    i = t.analyticsLocations,
                    u = S(t, ["guildCount", "onClose", "analyticsLocations"]),
                    E = function(t) {
                        return function(e, n) {
                            return (0, r.jsx)(o.Clickable, {
                                className: p().learnMoreLink,
                                tag: "span",
                                onClick: function() {
                                    t();
                                    (0, l.z)()
                                },
                                children: e
                            }, n)
                        }
                    }(n),
                    d = (0, a.Z)(i).AnalyticsLocationProvider;
                return (0, r.jsx)(d, {
                    children: (0, r.jsx)(c.Z, g({
                        artURL: T(),
                        onClose: n,
                        type: s.cd.GUILD_CAP_MODAL_UPSELL,
                        title: f.Z.Messages.GUILD_CAP_UPSELL_MODAL_TITLE,
                        body: e < _.DZw ? f.Z.Messages.GUILD_CAP_UPSELL_MODAL_NEAR_LIMIT_BODY.format({
                            guildCount: e,
                            onAndMore: E,
                            newBadgeHook: m
                        }) : f.Z.Messages.GUILD_CAP_UPSELL_MODAL_AT_LIMIT_BODY.format({
                            onAndMore: E,
                            newBadgeHook: m
                        }),
                        context: e < _.DZw ? f.Z.Messages.GUILD_CAP_UPSELL_MODAL_NEAR_LIMIT_CONTEXT.format({
                            guildCount: e
                        }) : f.Z.Messages.GUILD_CAP_UPSELL_MODAL_AT_LIMIT_CONTEXT,
                        glowUp: f.Z.Messages.GUILD_CAP_UPSELL_MODAL_GLOW_UP.format({
                            onAndMore: E
                        })
                    }, u))
                })
            }
        },
        442212: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => v
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                a = n.n(o),
                u = n(882723),
                l = n(153686),
                c = n(19585),
                s = n(594302),
                _ = n(652591),
                f = n(189146),
                E = n(717035),
                p = n(455706),
                d = n(70535),
                I = n(203600),
                O = n(2590),
                T = n(473708),
                h = n(296024),
                g = n.n(h),
                S = n(545292),
                m = n.n(S);

            function y(t, e) {
                if (null == t) return {};
                var n, r, i = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || (i[n] = t[n])
                    }
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                    }
                }
                return i
            }

            function v(t) {
                var e, n, o = t.title,
                    h = t.type,
                    S = t.guildBoostProps,
                    v = t.analyticsSource,
                    A = t.analyticsLocation,
                    N = t.body,
                    b = t.context,
                    L = t.glowUp,
                    R = t.modalClassName,
                    P = t.artContainerClassName,
                    C = t.bodyClassName,
                    U = t.transitionState,
                    M = t.onClose,
                    w = t.onSubscribeClick,
                    D = t.onSecondaryClick,
                    G = t.secondaryCTA,
                    k = t.subscribeButtonText,
                    j = t.showNewBadge,
                    B = void 0 !== j && j,
                    x = t.enableArtBoxShadow,
                    F = void 0 === x || x,
                    H = t.subscriptionTier,
                    V = void 0 === H ? I.Si.TIER_2 : H,
                    Z = t.isLoading,
                    Y = void 0 !== Z && Z,
                    K = t.hideBackButton,
                    W = t.backButtonText,
                    z = y(t, ["title", "type", "guildBoostProps", "analyticsSource", "analyticsLocation", "body", "context", "glowUp", "modalClassName", "artContainerClassName", "bodyClassName", "transitionState", "onClose", "onSubscribeClick", "onSecondaryClick", "secondaryCTA", "subscribeButtonText", "showNewBadge", "enableArtBoxShadow", "subscriptionTier", "isLoading", "hideBackButton", "backButtonText"]),
                    q = null != S,
                    X = (0, E.N)(),
                    Q = (null == X || null === (e = X.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === V && !q,
                    J = (0, f.zH)(!Q),
                    $ = (0,
                        c.Z)(l.Z.PREMIUM_UPSELL_MODAL).analyticsLocations;
                i.useEffect((function() {
                    Y || (q ? _.default.track(O.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                        type: "".concat(h, " - Tier ").concat(S.boostedGuildTier),
                        guild_id: S.guild.id,
                        channel_id: S.channelId,
                        location: A,
                        location_stack: $
                    }) : _.default.track(O.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: h,
                        source: v,
                        location_stack: $,
                        sku_id: V
                    }))
                }), [q, V, Y]);
                var tt, et = F ? a()(g().artContainer, g().artContainerBoxShadow, P) : a()(g().artContainer, P),
                    nt = null;
                nt = "artURL" in z ? (0, r.jsx)("img", {
                    className: g().art,
                    alt: "",
                    src: z.artURL
                }) : z.artElement;
                return (0, r.jsxs)(u.ModalRoot, {
                    className: a()(g().root, R),
                    "aria-label": o,
                    transitionState: U,
                    children: [(0, r.jsxs)("div", {
                        className: et,
                        children: [nt, B ? (0, r.jsx)("img", {
                            className: g().sparkleBadge,
                            alt: "",
                            src: m()
                        }) : null]
                    }), (0, r.jsx)(u.ModalContent, {
                        className: g().content,
                        children: Y ? (0, r.jsx)(u.Spinner, {}) : (0, r.jsx)(r.Fragment, {
                            children: Q ? (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(d.ZP, {
                                    onClose: M,
                                    type: h,
                                    subscriptionTier: null !== (tt = null == X || null === (n = X.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== tt ? tt : I.Si.TIER_2,
                                    headingText: o,
                                    context: b,
                                    analyticsLocationObject: A,
                                    children: L
                                })
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(u.Heading, {
                                    className: g().header,
                                    variant: "heading-xl/semibold",
                                    children: o
                                }), (0, r.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    className: a()(C),
                                    children: N
                                })]
                            })
                        })
                    }), (0, r.jsxs)(u.ModalFooter, {
                        className: g().footer,
                        children: [(0, r.jsxs)("div", {
                            className: g().primaryActions,
                            children: [null != G ? (0, r.jsx)(u.Button, {
                                className: g().secondaryAction,
                                onClick: D,
                                size: u.Button.Sizes.SMALL,
                                color: u.Button.Colors.PRIMARY,
                                look: u.Button.Looks.LINK,
                                children: G
                            }) : null, function() {
                                var t;
                                if (q) return (0, r.jsx)(s.Z, {
                                    analyticsLocation: A,
                                    guild: S.guild,
                                    onClose: M
                                });
                                var e = Q ? J ? T.Z.Messages.MARKETING_PAGE_CTA_TRY_1_MONTH_FREE : (null == X || null === (t = X.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === I.Si.TIER_2 ? T.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : T.Z.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : void 0,
                                    n = Q ? null == X ? void 0 : X.trial_id : null;
                                return (0, r.jsx)(p.Z, {
                                    premiumModalAnalyticsLocation: A,
                                    subscriptionTier: V,
                                    trialId: n,
                                    size: u.Button.Sizes.SMALL,
                                    color: u.Button.Colors.GREEN,
                                    onClick: function() {
                                        null == w || w();
                                        M()
                                    },
                                    buttonText: null != k ? k : e
                                })
                            }()]
                        }), !K && (0, r.jsx)(u.Button, {
                            onClick: M,
                            size: u.Button.Sizes.SMALL,
                            color: u.Button.Colors.PRIMARY,
                            look: u.Button.Looks.LINK,
                            children: null != W ? W : T.Z.Messages.BACK
                        })]
                    })]
                })
            }
        },
        232806: (t, e, n) => {
            "use strict";
            n.d(e, {
                xV: () => o,
                dp: () => a,
                X7: () => u,
                E1: () => l,
                f7: () => c,
                HE: () => s,
                SJ: () => _
            });

            function r(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function i(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }
            var o, a;
            ! function(t) {
                t[t.BACKGROUND = 0] = "BACKGROUND"
            }(o || (o = {}));
            ! function(t) {
                t[t.OPTION_1 = 0] = "OPTION_1";
                t[t.OPTION_2 = 1] = "OPTION_2";
                t[t.OPTION_3 = 2] = "OPTION_3";
                t[t.OPTION_4 = 3] = "OPTION_4";
                t[t.OPTION_7 = 7] = "OPTION_7";
                t[t.OPTION_8 = 8] = "OPTION_8";
                t[t.OPTION_9 = 9] = "OPTION_9";
                t[t.OPTION_10 = 10] = "OPTION_10"
            }(a || (a = {}));
            var u = [a.OPTION_7, a.OPTION_8, a.OPTION_9, a.OPTION_10],
                l = [a.OPTION_7, a.OPTION_8, a.OPTION_9, a.OPTION_10, a.OPTION_1, a.OPTION_2, a.OPTION_3, a.OPTION_4].reduce((function(t, e, n) {
                    return i(function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                                return Object.getOwnPropertyDescriptor(n, t).enumerable
                            }))));
                            i.forEach((function(e) {
                                r(t, e, n[e])
                            }))
                        }
                        return t
                    }({}, t), r({}, e, n))
                }), {}),
                c = "blur",
                s = {
                    width: 1280,
                    height: 720
                },
                _ = 10485760
        },
        205294: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => c
            });
            var r = n(169376);

            function i(t) {
                i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return i(t)
            }

            function o(t, e) {
                return !e || "object" !== u(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function a(t, e) {
                a = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return a(t, e)
            }
            var u = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function l(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = i(t);
                    if (e) {
                        var a = i(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return o(this, n)
                }
            }
            const c = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && a(t, e)
                }(n, t);
                var e = l(n);

                function n(t) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = e.call(this)).id = t.id;
                    r.subscriptionId = t.subscriptionId;
                    r.premiumGuildSubscription = t.premiumGuildSubscription;
                    r.canceled = t.canceled;
                    r.cooldownEndsAt = t.cooldownEndsAt;
                    r.subscription = t.subscription;
                    return r
                }
                var r = n.prototype;
                r.isOnCooldown = function() {
                    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
                };
                r.isAvailable = function() {
                    return null == this.premiumGuildSubscription && !this.isOnCooldown()
                };
                n.createFromServer = function(t, e) {
                    return new n({
                        id: t.id,
                        subscriptionId: t.subscription_id,
                        premiumGuildSubscription: null != t.premium_guild_subscription ? {
                            id: t.premium_guild_subscription.id,
                            guildId: t.premium_guild_subscription.guild_id
                        } : null,
                        canceled: t.canceled,
                        cooldownEndsAt: t.cooldown_ends_at,
                        subscription: e
                    })
                };
                return n
            }(r.Z)
        },
        50433: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => I
            });
            var r = n(202351),
                i = n(744564);

            function o(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function a(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function u(t) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return u(t)
            }

            function l(t, e) {
                return !e || "object" !== _(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function c(t, e) {
                c = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return c(t, e)
            }

            function s(t) {
                return function(t) {
                    if (Array.isArray(t)) return o(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return o(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var _ = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function f(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = u(t);
                    if (e) {
                        var i = u(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var E = [];

            function p() {
                E = []
            }
            var d = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && c(t, e)
                }(n, t);
                var e = f(n);

                function n() {
                    a(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.hasLayers = function() {
                    return E.length > 0
                };
                r.getLayers = function() {
                    return E
                };
                r.__getLocalVars = function() {
                    return {
                        layers: E
                    }
                };
                return n
            }(r.ZP.Store);
            d.displayName = "LayerStore";
            const I = new d(i.Z, {
                LAYER_PUSH: function(t) {
                    var e = t.component;
                    if (E.indexOf(e) >= 0) return !1;
                    E = s(E).concat([e])
                },
                LAYER_POP: function() {
                    if (0 === E.length) return !1;
                    E = E.slice(0, -1)
                },
                LAYER_POP_ALL: p,
                LOGOUT: p,
                NOTIFICATION_CLICK: p
            })
        },
        491260: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => F
            });
            var r = n(110251),
                i = n.n(r),
                o = n(496486),
                a = n.n(o),
                u = n(202351),
                l = n(744564),
                c = n(83797),
                s = n(664625),
                _ = n(473903),
                f = n(2590);

            function E(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function p(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function d(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function I(t) {
                I = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return I(t)
            }

            function O(t, e) {
                return !e || "object" !== S(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function T(t, e) {
                T = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return T(t, e)
            }

            function h(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(t); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (e && o.length === e) break
                            }
                        } catch (t) {
                            u = !0;
                            i = t
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(t, e) || m(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(t) {
                return function(t) {
                    if (Array.isArray(t)) return E(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || m(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var S = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function m(t, e) {
                if (t) {
                    if ("string" == typeof t) return E(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? E(t, e) : void 0
                }
            }

            function y(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = I(t);
                    if (e) {
                        var i = I(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return O(this, n)
                }
            }
            var v = Object.freeze([]),
                A = {},
                N = {},
                b = {},
                L = {},
                R = {};

            function P(t, e) {
                var n = A[t];
                return null != n ? n[e] : null
            }
            var C = function(t) {
                switch (t.type) {
                    case f.IIU.CUSTOM_STATUS:
                        return 4;
                    case f.IIU.COMPETING:
                        return 3;
                    case f.IIU.STREAMING:
                        return 2;
                    case f.IIU.PLAYING:
                        return 1;
                    default:
                        return 0
                }
            };
            var U = function(t) {
                return (0, c.Z)(t) ? 1 : 0
            };

            function M(t, e) {
                return function(t, e) {
                    return C(e) - C(t)
                }(t, e) || function(t, e) {
                    return U(e) - U(t)
                }(t, e) || function(t, e) {
                    var n, r;
                    return (null !== (n = e.created_at) && void 0 !== n ? n : 0) - (null !== (r = t.created_at) && void 0 !== r ? r : 0)
                }(t, e)
            }

            function w(t) {
                delete N[t];
                delete b[t];
                delete L[t];
                if (null != A[t]) {
                    var e = h(a().sortBy(A[t], (function(t) {
                            return -t.timestamp
                        })), 1),
                        n = e[0];
                    if (n.status !== f.Skl.OFFLINE) {
                        N[t] = n.status;
                        b[t] = n.activities;
                        null != n.clientStatus && (L[t] = n.clientStatus)
                    } else a().every(A[t], (function(t) {
                        return t.status === f.Skl.OFFLINE
                    })) && delete A[t]
                }
            }

            function D(t) {
                var e = A[t];
                if (null != e) {
                    var n = a().maxBy(Object.values(e), (function(t) {
                        return t.timestamp
                    }));
                    if (n.status !== f.Skl.OFFLINE) {
                        N[t] = n.status;
                        b[t] = n.activities;
                        null != n.clientStatus && (L[t] = n.clientStatus)
                    }
                }
            }

            function G(t) {
                var e = t.guildId,
                    n = t.userId,
                    r = t.status,
                    o = t.clientStatus,
                    a = t.activities;
                if (n === s.default.getId()) return !1;
                var u = A[n];
                if (null == u) {
                    if (r === f.Skl.OFFLINE) return !1;
                    u = A[n] = {}
                }
                if (r === f.Skl.OFFLINE) u[e] = {
                    status: r,
                    clientStatus: o,
                    activities: v,
                    timestamp: Date.now()
                };
                else {
                    var l = a.length > 1 ? g(a).sort(M) : a,
                        c = u[e];
                    a = null != c && i()(c.activities, l) ? c.activities : l;
                    u[e] = {
                        status: r,
                        clientStatus: o,
                        activities: a,
                        timestamp: Date.now()
                    }
                }
                delete R[n];
                w(n);
                return !0
            }

            function k(t) {
                var e = t.guildId,
                    n = t.userId,
                    r = t.status,
                    i = t.clientStatus,
                    o = t.activities,
                    a = t.timestamp;
                if (n !== s.default.getId()) {
                    var u = A[n];
                    if (null == u) {
                        if (r === f.Skl.OFFLINE) return;
                        u = A[n] = {}
                    }
                    if (r === f.Skl.OFFLINE) u[e] = {
                        status: r,
                        clientStatus: i,
                        activities: v,
                        timestamp: Date.now()
                    };
                    else {
                        var l = o.length > 1 ? g(o).sort(M) : o;
                        u[e] = {
                            status: r,
                            clientStatus: i,
                            activities: l,
                            timestamp: a
                        }
                    }
                }
            }

            function j(t, e) {
                if (e === s.default.getId()) return !1;
                var n = A[e];
                if (null == n || null == n[t]) return !1;
                delete n[t];
                0 === Object.keys(n).length && delete A[e];
                w(e)
            }

            function B(t) {
                var e = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var i, o = Object.keys(A)[Symbol.iterator](); !(e = (i = o.next()).done); e = !0) {
                        j(t, i.value)
                    }
                } catch (t) {
                    n = !0;
                    r = t
                } finally {
                    try {
                        e || null == o.return || o.return()
                    } finally {
                        if (n) throw r
                    }
                }
            }
            var x = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && T(t, e)
                }(n, t);
                var e = y(n);

                function n() {
                    p(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(s.default)
                };
                r.setCurrentUserOnConnectionOpen = function(t, e) {
                    N[s.default.getId()] = t;
                    b[s.default.getId()] = e
                };
                r.getStatus = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.Skl.OFFLINE,
                        r = _.default.getUser(t);
                    null != r && r.hasFlag(f.xW$.BOT_HTTP_INTERACTIONS) && (n = f.Skl.UNKNOWN);
                    if (null == r ? void 0 : r.isClyde()) return f.Skl.ONLINE;
                    if (null == e) {
                        var i;
                        return null !== (i = N[t]) && void 0 !== i ? i : n
                    }
                    var o, a = P(t, e);
                    return null !== (o = null == a ? void 0 : a.status) && void 0 !== o ? o : n
                };
                r.getActivities = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == e) {
                        var n;
                        return null !== (n = b[t]) && void 0 !== n ? n : v
                    }
                    var r = P(t, e);
                    return null == r || null == r.activities ? v : r.activities
                };
                r.getPrimaryActivity = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = this.getActivities(t, e);
                    return n[0]
                };
                r.getAllApplicationActivities = function(t) {
                    var e = [],
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, a = Object.keys(b)[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                            var u = o.value,
                                l = b[u],
                                c = !0,
                                s = !1,
                                _ = void 0;
                            try {
                                for (var f, E = l[Symbol.iterator](); !(c = (f = E.next()).done); c = !0) {
                                    var p = f.value;
                                    p.application_id === t && e.push({
                                        userId: u,
                                        activity: p
                                    })
                                }
                            } catch (t) {
                                s = !0;
                                _ = t
                            } finally {
                                try {
                                    c || null == E.return || E.return()
                                } finally {
                                    if (s) throw _
                                }
                            }
                        }
                    } catch (t) {
                        r = !0;
                        i = t
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return e
                };
                r.getApplicationActivity = function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.findActivity(t, (function(t) {
                        return t.application_id === e
                    }), n)
                };
                r.findActivity = function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.getActivities(t, n).find(e)
                };
                r.getActivityMetadata = function(t) {
                    return R[t]
                };
                r.getUserIds = function() {
                    return Object.keys(b)
                };
                r.isMobileOnline = function(t) {
                    var e = L[t];
                    return null != e && e[f.X5t.MOBILE] === f.Skl.ONLINE && e[f.X5t.DESKTOP] !== f.Skl.ONLINE
                };
                r.getState = function() {
                    return {
                        presencesForGuilds: A,
                        statuses: N,
                        activities: b,
                        activityMetadata: R,
                        clientStatuses: L
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        NO_ACTIVITIES: v,
                        presencesForGuilds: A,
                        statuses: N,
                        activities: b,
                        clientStatuses: L,
                        activityMetadata: R,
                        typeScore: C,
                        richnessScore: U
                    }
                };
                return n
            }(u.ZP.Store);
            x.displayName = "PresenceStore";
            const F = new x(l.Z, {
                CONNECTION_OPEN: function() {
                    return !0
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(t) {
                    var e = t.guilds,
                        n = t.presences,
                        r = s.default.getId();
                    A = {};
                    R = {};
                    N = d({}, r, N[r]);
                    b = d({}, r, b[r]);
                    L = d({}, r, {});
                    var i = new Set,
                        o = Date.now();
                    e.forEach((function(t) {
                        t.presences.forEach((function(e) {
                            var n = e.user,
                                r = e.status,
                                a = e.clientStatus,
                                u = e.activities;
                            k({
                                guildId: t.id,
                                userId: n.id,
                                status: r,
                                clientStatus: a,
                                activities: u,
                                timestamp: o
                            });
                            i.add(n.id)
                        }))
                    }));
                    n.forEach((function(t) {
                        var e = t.user,
                            n = t.status,
                            r = t.clientStatus,
                            a = t.activities;
                        if (null != e) {
                            k({
                                guildId: f.ME,
                                userId: e.id,
                                status: n,
                                clientStatus: r,
                                activities: a,
                                timestamp: o
                            });
                            i.add(e.id)
                        }
                    }));
                    i.delete(r);
                    i.forEach(D)
                },
                OVERLAY_INITIALIZE: function(t) {
                    var e = t.presences;
                    A = e.presencesForGuilds;
                    N = e.statuses;
                    b = e.activities;
                    R = e.activityMetadata
                },
                GUILD_CREATE: function(t) {
                    var e = t.guild;
                    e.presences.forEach((function(t) {
                        var n = t.user,
                            r = t.status,
                            i = t.clientStatus,
                            o = t.activities;
                        G({
                            guildId: e.id,
                            userId: n.id,
                            status: r,
                            clientStatus: i,
                            activities: o
                        })
                    }))
                },
                GUILD_DELETE: function(t) {
                    B(t.guild.id)
                },
                GUILD_MEMBER_REMOVE: function(t) {
                    return j(t.guildId, t.user.id)
                },
                PRESENCE_UPDATES: function(t) {
                    return t.updates.map((function(t) {
                        var e = t.guildId,
                            n = t.user,
                            r = t.status,
                            i = t.clientStatus,
                            o = t.activities;
                        return G({
                            guildId: null != e ? e : f.ME,
                            userId: n.id,
                            status: r,
                            clientStatus: i,
                            activities: o
                        })
                    })).some((function(t) {
                        return t
                    }))
                },
                PRESENCES_REPLACE: function(t) {
                    var e = t.presences;
                    B(f.ME);
                    e.forEach((function(t) {
                        var e = t.user,
                            n = t.status,
                            r = t.clientStatus,
                            i = t.activities;
                        null != e && G({
                            guildId: f.ME,
                            userId: e.id,
                            status: n,
                            clientStatus: r,
                            activities: i
                        })
                    }))
                },
                ACTIVITY_METADATA_UPDATE: function(t) {
                    var e = t.userId,
                        n = t.metadata;
                    R[e] = n;
                    return !1
                },
                THREAD_MEMBER_LIST_UPDATE: function(t) {
                    var e = t.guildId;
                    t.members.forEach((function(t) {
                        null != t.presence && G({
                            guildId: e,
                            userId: t.user_id,
                            status: t.presence.status,
                            clientStatus: t.presence.clientStatus,
                            activities: t.presence.activities
                        })
                    }))
                },
                THREAD_MEMBERS_UPDATE: function(t) {
                    var e = t.guildId,
                        n = t.addedMembers;
                    null == n || n.forEach((function(t) {
                        null != t.presence && G({
                            guildId: e,
                            userId: t.userId,
                            status: t.presence.status,
                            clientStatus: t.presence.clientStatus,
                            activities: t.presence.activities
                        })
                    }))
                },
                SELF_PRESENCE_STORE_UPDATE: function(t) {
                    var e = s.default.getId();
                    if (N[e] === t.status && b[e] === t.activities) return !1;
                    N[e] = t.status;
                    b[e] = t.activities;
                    delete R[e]
                }
            })
        },
        443812: (t, e, n) => {
            "use strict";
            n.d(e, {
                hQ: () => a,
                Dt: () => u,
                FG: () => l
            });
            var r = n(873955),
                i = n.n(r),
                o = n(989824),
                a = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return i()(t)
                },
                u = function() {
                    return (0, o.Z)((function() {
                        return a()
                    }))
                },
                l = function(t) {
                    return (0, t.children)(u())
                }
        },
        95891: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => l
            });
            var r = n(785893),
                i = (n(667294), n(633878));

            function o(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function a(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function u(t, e) {
                if (null == t) return {};
                var n, r, i = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || (i[n] = t[n])
                    }
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                    }
                }
                return i
            }

            function l(t) {
                var e = t.width,
                    n = void 0 === e ? 24 : e,
                    l = t.height,
                    c = void 0 === l ? 24 : l,
                    s = t.color,
                    _ = void 0 === s ? "currentColor" : s,
                    f = t.viewBox,
                    E = void 0 === f ? "0 0 24 24" : f,
                    p = t.foreground,
                    d = u(t, ["width", "height", "color", "viewBox", "foreground"]);
                return (0, r.jsx)("svg", a(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            o(t, e, n[e])
                        }))
                    }
                    return t
                }({}, (0, i.Z)(d)), {
                    width: n,
                    height: c,
                    viewBox: E,
                    children: (0, r.jsx)("path", {
                        className: p,
                        fill: _,
                        d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                    })
                }))
            }
        },
        939198: (t, e, n) => {
            "use strict";
            n.d(e, {
                mT: () => i,
                Jj: () => o,
                OF: () => a,
                hV: () => r,
                WW: () => u
            });
            var r, i = 550,
                o = 350,
                a = 40;
            ! function(t) {
                t.STATIC = "STATIC";
                t.RESPONSIVE = "RESPONSIVE";
                t.MOSAIC = "MOSAIC"
            }(r || (r = {}));
            var u = 20
        },
        531441: (t, e, n) => {
            "use strict";
            n.d(e, {
                Dv: () => E,
                OV: () => d,
                NG: () => I,
                mA: () => O,
                IG: () => T,
                lB: () => h,
                G2: () => g,
                fW: () => S
            });
            var r = n(785893),
                i = (n(667294), n(294184)),
                o = n.n(i),
                a = (n(882723), n(87931)),
                u = (n(473708), n(202427)),
                l = n.n(u);

            function c(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function s(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        c(t, e, n[e])
                    }))
                }
                return t
            }

            function _(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function f(t, e) {
                if (null == t) return {};
                var n, r, i = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || (i[n] = t[n])
                    }
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                    }
                }
                return i
            }
            var E = {
                ROUND: l().baseShapeRound,
                ROUND_LEFT: l().baseShapeRoundLeft,
                ROUND_RIGHT: l().baseShapeRoundRight,
                SQUARE: ""
            };

            function p(t) {
                switch (t) {
                    case 1:
                    case 4:
                    case 6:
                        return 1;
                    default:
                        return
                }
            }

            function d(t) {
                return t < 10 ? 16 : t < 100 ? 22 : 30
            }

            function I(t) {
                return t < 1e3 ? "".concat(t) : "".concat(Math.min(Math.floor(t / 1e3), 9), "k+")
            }
            var O = function(t) {
                    var e = t.count,
                        n = t.color,
                        i = void 0 === n ? a.Z.STATUS_DANGER : n,
                        u = t.disableColor,
                        c = void 0 !== u && u,
                        O = t.shape,
                        T = void 0 === O ? E.ROUND : O,
                        h = t.className,
                        g = t.style,
                        S = f(t, ["count", "color", "disableColor", "shape", "className", "style"]);
                    return (0, r.jsx)("div", _(s({
                        className: o()(h, l().numberBadge, T),
                        style: s({
                            backgroundColor: c ? void 0 : i,
                            width: d(e),
                            paddingRight: p(e)
                        }, g)
                    }, S), {
                        children: I(e)
                    }))
                },
                T = function(t) {
                    var e = t.text,
                        n = t.className,
                        i = t.color,
                        u = void 0 === i ? a.Z.STATUS_DANGER : i,
                        c = t.shape,
                        p = void 0 === c ? E.ROUND : c,
                        d = t.disableColor,
                        I = void 0 !== d && d,
                        O = t.style,
                        T = f(t, ["text", "className", "color", "shape", "disableColor", "style"]);
                    return (0, r.jsx)("div", _(s({
                        className: o()(n, l().textBadge, p),
                        style: s({
                            backgroundColor: I ? void 0 : u
                        }, O)
                    }, T), {
                        children: e
                    }))
                },
                h = function(t) {
                    var e = t.text,
                        n = t.className,
                        i = f(t, ["text", "className"]);
                    return (0, r.jsx)(T, s({
                        className: o()(l().premiumBadge, n),
                        text: e
                    }, i))
                },
                g = function(t) {
                    var e = t.icon,
                        n = t.className,
                        i = t.color,
                        u = void 0 === i ? a.Z.STATUS_DANGER : i,
                        c = t.shape,
                        _ = void 0 === c ? E.ROUND : c,
                        f = t.disableColor,
                        p = void 0 !== f && f,
                        d = t.style;
                    return (0, r.jsx)("div", {
                        className: o()(n, l().iconBadge, _),
                        style: s({
                            backgroundColor: p ? void 0 : u
                        }, d),
                        children: (0, r.jsx)(e, {
                            className: l().icon
                        })
                    })
                },
                S = function(t) {
                    var e = t.className,
                        n = t.color,
                        i = void 0 === n ? a.Z.INTERACTIVE_ACTIVE : n,
                        u = t.shape,
                        c = void 0 === u ? E.ROUND : u,
                        _ = t.disableColor,
                        p = void 0 !== _ && _,
                        d = t.style,
                        I = f(t, ["className", "color", "shape", "disableColor", "style"]);
                    return (0, r.jsx)("div", s({
                        className: o()(e, l().circleBadge, c),
                        style: s({
                            backgroundColor: p ? void 0 : i
                        }, d)
                    }, I))
                }
        },
        73105: (t, e, n) => {
            "use strict";
            n.d(e, {
                RD: () => W,
                WA: () => F,
                f5: () => B,
                Gb: () => M,
                Rs: () => V,
                _2: () => Y,
                gL: () => D,
                fG: () => k
            });
            var r = n(306472),
                i = n(737264),
                o = n(496486),
                a = n.n(o),
                u = n(809784),
                l = n(296602),
                c = n(384411),
                s = n(72580),
                _ = n(310126);

            function f(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(t, r.key, r)
                }
            }
            var E = function() {
                function t(e, n) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    this._shouldProcess = !1;
                    this._processing = !1;
                    this._minimumTimeRemaining = 5;
                    this._language = e;
                    this._languageHint = e;
                    this._onChange = n;
                    n(e)
                }
                var e = t.prototype;
                e.process = function(t) {
                    var e = this;
                    if (!this._processing) {
                        this._processing = !0;
                        requestIdleCallback((function(n) {
                            if (n.timeRemaining() <= e._minimumTimeRemaining) e._processEnd();
                            else {
                                t.length > 256 && (t = t.slice(0, 256));
                                (function(t, e) {
                                    return _.ZP.ensureModule("discord_spellcheck").then((function() {
                                        var n = _.ZP.requireModule("discord_spellcheck").cld;
                                        return new Promise((function(r, i) {
                                            n.detect(t, {
                                                httpHint: e,
                                                encodingHint: "UTF8"
                                            }, (function(t, e) {
                                                null != t ? i(new Error(t.message)) : !e.reliable || e.languages[0].percent < 90 || e.languages[0].score < 500 ? i(new Error("Not enough reliable text.")) : r(e.languages[0].code)
                                            }))
                                        }))
                                    }))
                                })(t, e._languageHint).then((function(t) {
                                    e.language = t;
                                    e._processEnd(n.didTimeout)
                                }), (function() {
                                    e._processEnd(n.didTimeout)
                                }))
                            }
                        }))
                    }
                };
                e._processEnd = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this._processing = !1;
                    t && this._minimumTimeRemaining++
                };
                ! function(t, e, n) {
                    e && f(t.prototype, e);
                    n && f(t, n)
                }(t, [{
                    key: "language",
                    get: function() {
                        return this._language
                    },
                    set: function(t) {
                        if (this._language !== t) {
                            this._language = t;
                            this._onChange(t)
                        }
                    }
                }, {
                    key: "languageHint",
                    set: function(t) {
                        this._languageHint = t
                    }
                }]);
                return t
            }();
            const p = {
                aa: "aa-ET",
                af: "af-ZA",
                ak: "ak-GH",
                am: "am-ET",
                an: "an-ES",
                ar: "ar-MA",
                as: "as-IN",
                ay: "ay-PE",
                az: "az-AZ",
                be: "be-BY",
                bg: "bg-BG",
                bi: "bi-TV",
                bn: "bn-BD",
                bo: "bo-CN",
                br: "br-FR",
                bs: "bs-BA",
                ca: "ca-ES",
                ce: "ce-RU",
                cs: "cs-CZ",
                cv: "cv-RU",
                cy: "cy-GB",
                da: "da-DK",
                de: "de-DE",
                dv: "dv-MV",
                dz: "dz-BT",
                el: "el-GR",
                en: "en-US",
                es: "es-ES",
                et: "et-EE",
                eu: "eu-ES",
                fa: "fa-IR",
                ff: "ff-SN",
                fi: "fi-FI",
                fo: "fo-FO",
                fr: "fr-FR",
                fy: "fy-DE",
                ga: "ga-IE",
                gd: "gd-GB",
                gl: "gl-ES",
                gu: "gu-IN",
                gv: "gv-GB",
                ha: "ha-NG",
                he: "he-IL",
                hi: "hi-IN",
                hr: "hr-HR",
                ht: "ht-HT",
                hu: "hu-HU",
                hy: "hy-AM",
                ia: "ia-FR",
                id: "id-ID",
                ig: "ig-NG",
                ik: "ik-CA",
                is: "is-IS",
                it: "it-IT",
                iu: "iu-CA",
                ja: "ja-JP",
                ka: "ka-GE",
                kk: "kk-KZ",
                kl: "kl-GL",
                km: "km-KH",
                kn: "kn-IN",
                ko: "ko-KR",
                ks: "ks-IN",
                ku: "ku-TR",
                kw: "kw-GB",
                ky: "ky-KG",
                lb: "lb-LU",
                lg: "lg-UG",
                li: "li-BE",
                ln: "ln-CD",
                lo: "lo-LA",
                lt: "lt-LT",
                lv: "lv-LV",
                mg: "mg-MG",
                mh: "mh-MH",
                mi: "mi-NZ",
                mk: "mk-MK",
                ml: "ml-IN",
                mn: "mn-MN",
                mr: "mr-IN",
                ms: "ms-MY",
                mt: "mt-MT",
                my: "my-MM",
                nb: "nb-NO",
                ne: "ne-NP",
                nl: "nl-NL",
                nn: "nn-NO",
                nr: "nr-ZA",
                oc: "oc-FR",
                om: "om-KE",
                or: "or-IN",
                os: "os-RU",
                pa: "pa-PK",
                pl: "pl-PL",
                ps: "ps-AF",
                pt: "pt-PT",
                ro: "ro-RO",
                ru: "ru-RU",
                rw: "rw-RW",
                sa: "sa-IN",
                sc: "sc-IT",
                sd: "sd-IN",
                se: "se-NO",
                si: "si-LK",
                sk: "sk-SK",
                sl: "sl-SI",
                so: "so-SO",
                sq: "sq-AL",
                sr: "sr-RS",
                ss: "ss-ZA",
                st: "st-ZA",
                sv: "sv-SE",
                sw: "sw-KE",
                ta: "ta-IN",
                te: "te-IN",
                tg: "tg-TJ",
                th: "th-TH",
                ti: "ti-ER",
                tk: "tk-TM",
                tl: "tl-PH",
                tn: "tn-ZA",
                tr: "tr-TR",
                ts: "ts-ZA",
                tt: "tt-RU",
                ug: "ug-CN",
                uk: "uk-UA",
                ur: "ur-PK",
                uz: "uz-UZ",
                ve: "ve-ZA",
                vi: "vi-VN",
                wa: "wa-BE",
                wo: "wo-SN",
                xh: "xh-ZA",
                yi: "yi-US",
                yo: "yo-NG",
                zh: "zh-CN",
                zu: "zu-ZA"
            };

            function d(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function I(t, e, n, r, i, o, a) {
                try {
                    var u = t[o](a),
                        l = u.value
                } catch (t) {
                    n(t);
                    return
                }
                u.done ? e(l) : Promise.resolve(l).then(r, i)
            }

            function O(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = t.apply(e, n);

                        function a(t) {
                            I(o, r, i, a, u, "next", t)
                        }

                        function u(t) {
                            I(o, r, i, a, u, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function T(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(t, r.key, r)
                }
            }

            function h(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(t); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (e && o.length === e) break
                            }
                        } catch (t) {
                            u = !0;
                            i = t
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return d(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var g = function(t, e) {
                    var n, r, i, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function u(o) {
                        return function(u) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < i[1]) {
                                                a.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && a.label < i[2]) {
                                                a.label = i[2];
                                                a.ops.push(o);
                                                break
                                            }
                                            i[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    o = e.call(t, a)
                                } catch (t) {
                                    o = [6, t];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, u])
                        }
                    }
                },
                S = new l.Z("Spellchecker"),
                m = null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck;

            function y(t) {
                var e;
                t = null !== (e = p[t]) && void 0 !== e ? e : t;
                var n = (0, i.Q)(t.replace(/[_-]/g, "-"));
                if (null != n && null != n.langtag.language && null != n.langtag.region) {
                    var r = n.langtag,
                        o = r.language,
                        a = r.region;
                    return "".concat(o.language.toLowerCase(), "-").concat(a.toUpperCase())
                }
                S.error("".concat(t, " is not a valid locale."))
            }
            var v = function() {
                    function t(e) {
                        var n = this;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        this._enabled = !0;
                        this.misspelledWord = "";
                        this.corrections = [];
                        var r = h(c.default.locale.split("-"), 2),
                            i = r[0],
                            o = r[1];
                        this.regionPreference = o;
                        var a = this.getAvailableLanguages(e);
                        this.languageDetector = new E(i, (function(t) {
                            var r = "".concat(t, "-").concat(n.regionPreference);
                            if (-1 !== e.indexOf(r)) n.setLocale(r);
                            else {
                                var o, u = null !== (o = a[t]) && void 0 !== o ? o : p[i];
                                null != u && n.setLocale(u)
                            }
                        }));
                        m.on("spellcheck-result", (function(t, e) {
                            n.misspelledWord = null != t ? t : "";
                            n.corrections = null != e ? e : []
                        }))
                    }
                    var e = t.prototype;
                    e.setLearnedWords = function(t) {
                        m.setLearnedWords(t)
                    };
                    e.setLocale = function(t) {
                        var e;
                        null === (e = m.setLocale(t)) || void 0 === e || e.then((function(e) {
                            S.info("Switching to ".concat(t), e ? "(available)" : "(unavailable)")
                        }))
                    };
                    e.setAppLocale = function(t) {
                        this.regionPreference = t.split("-")[1]
                    };
                    e.detectLanguage = function(t) {
                        this.enabled && this.languageDetector.process(t)
                    };
                    e.getAvailableLanguages = function(t) {
                        var e = {};
                        t.forEach((function(t) {
                            var n, r = h(t.split("-"), 1)[0];
                            e[r] = null !== (n = e[r]) && void 0 !== n ? n : t
                        }));
                        return e
                    };
                    e.isMisspelled = function(t, e) {
                        return "" !== this.misspelledWord && t === this.misspelledWord
                    };
                    e.getCorrectionsForMisspelling = function(t, e) {
                        return this.isMisspelled(t, e) ? this.corrections : []
                    };
                    e.replaceMisspelling = function(t) {
                        m.replaceMisspelling(t)
                    };
                    ! function(t, e, n) {
                        e && T(t.prototype, e);
                        n && T(t, n)
                    }(t, [{
                        key: "enabled",
                        get: function() {
                            return this._enabled
                        },
                        set: function(t) {
                            this._enabled = t
                        }
                    }]);
                    return t
                }(),
                A = a().debounce((function(t, e) {
                    var n = function(t) {
                        if (null == t) return null;
                        if ((0, u.k)(t, HTMLInputElement) || (0, u.k)(t, HTMLTextAreaElement)) return t.value;
                        if ((0, u.k)(t) && t.hasAttribute("contenteditable")) return t.textContent
                    }(e);
                    null != n && t.detectLanguage(n)
                }), 250);

            function N(t) {
                null != document.body && document.body.addEventListener("beforeinput", (function(e) {
                    return A(t, e.target)
                }), !0)
            }

            function b() {
                return (b = O((function() {
                    var t, e, n, r;
                    return g(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, m.getAvailableDictionaries()];
                            case 1:
                                e = null !== (t = i.sent()) && void 0 !== t ? t : [];
                                n = e.map(y).filter(s.lm);
                                N(r = new v(n));
                                return [2, r]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var L = n(120415);

            function R(t, e, n, r, i, o, a) {
                try {
                    var u = t[o](a),
                        l = u.value
                } catch (t) {
                    n(t);
                    return
                }
                u.done ? e(l) : Promise.resolve(l).then(r, i)
            }

            function P(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = t.apply(e, n);

                        function a(t) {
                            R(o, r, i, a, u, "next", t)
                        }

                        function u(t) {
                            R(o, r, i, a, u, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }
            var C = function(t, e) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = e.call(t, a)
                            } catch (t) {
                                o = [6, t];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, u])
                    }
                }
            };

            function U() {
                return null != (null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck)
            }

            function M() {
                return (0, L.nI)() && U()
            }
            var w = M() ? function() {
                return b.apply(this, arguments)
            }() : null;

            function D(t) {
                return G.apply(this, arguments)
            }

            function G() {
                return (G = P((function(t) {
                    var e;
                    return C(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, w];
                            case 1:
                                if (null == (e = n.sent())) return [2];
                                e.enabled = t;
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function k(t) {
                return j.apply(this, arguments)
            }

            function j() {
                return (j = P((function(t) {
                    var e;
                    return C(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, w];
                            case 1:
                                if (null == (e = n.sent())) return [2];
                                e.setLearnedWords(t);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function B(t) {
                return x.apply(this, arguments)
            }

            function x() {
                x = P((function(t) {
                    var e, n, r = arguments;
                    return C(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                e = r.length > 1 && void 0 !== r[1] && r[1];
                                return [4, w];
                            case 1:
                                return null == (n = i.sent()) ? [2, !1] : [2, n.isMisspelled(t, e)]
                        }
                    }))
                }));
                return x.apply(this, arguments)
            }

            function F(t) {
                return H.apply(this, arguments)
            }

            function H() {
                H = P((function(t) {
                    var e, n, r, i = arguments;
                    return C(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                e = i.length > 1 && void 0 !== i[1] && i[1], n = i.length > 2 && void 0 !== i[2] ? i[2] : 5;
                                return [4, w];
                            case 1:
                                return null == (r = o.sent()) ? [2, []] : [2, r.getCorrectionsForMisspelling(t, e).slice(0, n)]
                        }
                    }))
                }));
                return H.apply(this, arguments)
            }

            function V(t) {
                return Z.apply(this, arguments)
            }

            function Z() {
                return (Z = P((function(t) {
                    var e;
                    return C(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, w];
                            case 1:
                                if (null == (e = n.sent())) return [2];
                                e.replaceMisspelling(t);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Y(t) {
                return K.apply(this, arguments)
            }

            function K() {
                return (K = P((function(t) {
                    var e;
                    return C(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, w];
                            case 1:
                                if (null == (e = n.sent())) return [2];
                                e.setAppLocale(t);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function W(t) {
                if (!U()) return function() {};
                var e = r.Z.spellCheck.on("spellcheck-result", t);
                return null != e ? e : function() {}
            }
        },
        391438: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => c
            });
            var r = n(281110),
                i = n(652591);

            function o(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        o(t, e, n[e])
                    }))
                }
                return t
            }

            function u(t, e) {
                if (null == t) return {};
                var n, r, i = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || (i[n] = t[n])
                    }
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                    }
                }
                return i
            }

            function l(t, e, n) {
                var r = e.trackedActionData,
                    o = u(e, ["trackedActionData"]),
                    l = {
                        url: o.url,
                        request_method: n
                    };
                return new Promise((function(e, n) {
                    t(o).then((function(t) {
                        var n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(t));
                        (0, i.trackNetworkAction)(r.event, a({
                            status_code: t.status
                        }, l, n));
                        e(t)
                    })).catch((function(t) {
                        var e, o, u = r.properties;
                        "function" == typeof r.properties && (u = r.properties(t));
                        (0, i.trackNetworkAction)(r.event, a({
                            status_code: t.status,
                            error_code: null === (e = t.body) || void 0 === e ? void 0 : e.code,
                            error_message: null === (o = t.body) || void 0 === o ? void 0 : o.message
                        }, l, u));
                        n(t)
                    }))
                }))
            }
            const c = {
                get: function(t) {
                    return l(r.ZP.get, t, "get")
                },
                post: function(t) {
                    return l(r.ZP.post, t, "post")
                },
                put: function(t) {
                    return l(r.ZP.put, t, "put")
                },
                patch: function(t) {
                    return l(r.ZP.patch, t, "patch")
                },
                delete: function(t) {
                    return l(r.ZP.delete, t, "del")
                }
            }
        },
        180735: (t, e, n) => {
            "use strict";
            n.d(e, {
                h: () => r
            });
            var r;
            ! function(t) {
                t[t.USER = 100] = "USER";
                t[t.STREAM = 18] = "STREAM"
            }(r || (r = {}))
        },
        142520: (t, e, n) => {
            "use strict";
            n.d(e, {
                x: () => r
            });
            var r;
            ! function(t) {
                t.THOUGHT_EMBED_TITLE = "Clyde Thoughts"
            }(r || (r = {}))
        },
        248634: (t, e, n) => {
            "use strict";
            n.d(e, {
                z: () => r
            });
            var r;
            ! function(t) {
                t.MATCH_ALL = "match_all";
                t.MATCH_SOME = "match_some"
            }(r || (r = {}));
            new Set(["match_all", "match_some"])
        },
        283151: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => a
            });
            var r = n(667294);

            function i(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function o(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(t); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (e && o.length === e) break
                            }
                        } catch (t) {
                            u = !0;
                            i = t
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return i(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a() {
                var t = o((0, r.useState)({}), 2)[1];
                return (0, r.useCallback)((function() {
                    return t({})
                }), [])
            }
        },
        989824: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => o
            });
            var r = n(667294),
                i = {};

            function o(t) {
                var e = (0, r.useRef)(i);
                e.current === i && (e.current = t());
                return e.current
            }
        }
    }
]);