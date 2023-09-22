(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [6252, 7358, 88110, 96043, 42643, 71402], {
        737264: t => {
            "use strict";
            t.exports.Q = function(t) {
                var e, n = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!n) return null;
                n.shift();
                var r = null,
                    o = [];
                if (n[2]) {
                    r = (e = n[2].split("-")).shift();
                    o = e
                }
                var i = [];
                n[5] && (i = n[5].split("-")).shift();
                var u = [];
                if (n[6]) {
                    (e = n[6].split("-")).shift();
                    for (var a, l = []; e.length;) {
                        var c = e.shift();
                        if (1 === c.length)
                            if (a) {
                                u.push({
                                    singleton: a,
                                    extension: l
                                });
                                a = c;
                                l = []
                            } else a = c;
                        else l.push(c)
                    }
                    u.push({
                        singleton: a,
                        extension: l
                    })
                }
                var s = [];
                if (n[7]) {
                    (s = n[7].split("-")).shift();
                    s.shift()
                }
                var f = [];
                n[8] && (f = n[8].split("-")).shift();
                return {
                    langtag: {
                        language: {
                            language: r,
                            extlang: o
                        },
                        script: n[3] || null,
                        region: n[4] || null,
                        variant: i,
                        extension: u,
                        privateuse: s
                    },
                    privateuse: f,
                    grandfathered: {
                        irregular: n[0] || null,
                        regular: n[1] || null
                    }
                }
            }
        },
        444020: t => {
            "use strict";
            var e = "%[a-f0-9]{2}",
                n = new RegExp("(" + e + ")|([^%]+?)", "gi"),
                r = new RegExp("(" + e + ")+", "gi");

            function o(t, e) {
                try {
                    return [decodeURIComponent(t.join(""))]
                } catch (t) {}
                if (1 === t.length) return t;
                e = e || 1;
                var n = t.slice(0, e),
                    r = t.slice(e);
                return Array.prototype.concat.call([], o(n), o(r))
            }

            function i(t) {
                try {
                    return decodeURIComponent(t)
                } catch (i) {
                    for (var e = t.match(n) || [], r = 1; r < e.length; r++) e = (t = o(e, r).join("")).match(n) || [];
                    return t
                }
            }
            t.exports = function(t) {
                if ("string" != typeof t) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
                try {
                    t = t.replace(/\+/g, " ");
                    return decodeURIComponent(t)
                } catch (e) {
                    return function(t) {
                        for (var e = {
                                "%FE%FF": "��",
                                "%FF%FE": "��"
                            }, n = r.exec(t); n;) {
                            try {
                                e[n[0]] = decodeURIComponent(n[0])
                            } catch (t) {
                                var o = i(n[0]);
                                o !== n[0] && (e[n[0]] = o)
                            }
                            n = r.exec(t)
                        }
                        e["%C2"] = "�";
                        for (var u = Object.keys(e), a = 0; a < u.length; a++) {
                            var l = u[a];
                            t = t.replace(new RegExp(l, "g"), e[l])
                        }
                        return t
                    }(t)
                }
            }
        },
        667237: t => {
            "use strict";

            function e(t) {
                this._capacity = o(t);
                this._length = 0;
                this._front = 0;
                this._makeCapacity();
                if (n(t)) {
                    for (var e = t.length, r = 0; r < e; ++r) this[r] = t[r];
                    this._length = e
                }
            }
            e.prototype.toArray = function() {
                for (var t = this._length, e = new Array(t), n = this._front, r = this._capacity, o = 0; o < t; ++o) e[o] = this[n + o & r - 1];
                return e
            };
            e.prototype.push = function(t) {
                var e = arguments.length,
                    n = this._length;
                if (e > 1) {
                    var r = this._capacity;
                    if (n + e > r) {
                        for (var o = 0; o < e; ++o) {
                            this._checkCapacity(n + 1);
                            this[i = this._front + n & this._capacity - 1] = arguments[o];
                            n++;
                            this._length = n
                        }
                        return n
                    }
                    for (var i = this._front, o = 0; o < e; ++o) {
                        this[i + n & r - 1] = arguments[o];
                        i++
                    }
                    this._length = n + e;
                    return n + e
                }
                if (0 === e) return n;
                this._checkCapacity(n + 1);
                this[o = this._front + n & this._capacity - 1] = t;
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
                    if (e + n > (o = this._capacity)) {
                        for (var r = n - 1; r >= 0; r--) {
                            this._checkCapacity(e + 1);
                            var o = this._capacity;
                            this[u = (this._front - 1 & o - 1 ^ o) - o] = arguments[r];
                            e++;
                            this._length = e;
                            this._front = u
                        }
                        return e
                    }
                    var i = this._front;
                    for (r = n - 1; r >= 0; r--) {
                        var u;
                        this[u = (i - 1 & o - 1 ^ o) - o] = arguments[r];
                        i = u
                    }
                    this._front = i;
                    this._length = e + n;
                    return e + n
                }
                if (0 === n) return e;
                this._checkCapacity(e + 1);
                o = this._capacity;
                this[r = (this._front - 1 & o - 1 ^ o) - o] = t;
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
                this._capacity < t && this._resizeTo(o(1.5 * this._capacity + 16))
            };
            e.prototype._resizeTo = function(t) {
                var e = this._front,
                    n = this._capacity,
                    o = new Array(n),
                    i = this._length;
                r(this, 0, o, 0, n);
                this._capacity = t;
                this._makeCapacity();
                this._front = 0;
                if (e + i <= n) r(o, e, this, 0, i);
                else {
                    var u = i - (e + i & n - 1);
                    r(o, e, this, 0, u);
                    r(o, 0, this, u, i - u)
                }
            };
            var n = Array.isArray;

            function r(t, e, n, r, o) {
                for (var i = 0; i < o; ++i) n[i + r] = t[i + e]
            }

            function o(t) {
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
        823493: (t, e, n) => {
            var r = n(23279),
                o = n(513218);
            t.exports = function(t, e, n) {
                var i = !0,
                    u = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");
                if (o(n)) {
                    i = "leading" in n ? !!n.leading : i;
                    u = "trailing" in n ? !!n.trailing : u
                }
                return r(t, e, {
                    leading: i,
                    maxWait: e,
                    trailing: u
                })
            }
        },
        727418: t => {
            "use strict";
            var e = Object.getOwnPropertySymbols,
                n = Object.prototype.hasOwnProperty,
                r = Object.prototype.propertyIsEnumerable;

            function o(t) {
                if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(t)
            }
            t.exports = function() {
                try {
                    if (!Object.assign) return !1;
                    var t = new String("abc");
                    t[5] = "de";
                    if ("5" === Object.getOwnPropertyNames(t)[0]) return !1;
                    for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
                    if ("0123456789" !== Object.getOwnPropertyNames(e).map((function(t) {
                            return e[t]
                        })).join("")) return !1;
                    var r = {};
                    "abcdefghijklmnopqrst".split("").forEach((function(t) {
                        r[t] = t
                    }));
                    return "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                } catch (t) {
                    return !1
                }
            }() ? Object.assign : function(t, i) {
                for (var u, a, l = o(t), c = 1; c < arguments.length; c++) {
                    u = Object(arguments[c]);
                    for (var s in u) n.call(u, s) && (l[s] = u[s]);
                    if (e) {
                        a = e(u);
                        for (var f = 0; f < a.length; f++) r.call(u, a[f]) && (l[a[f]] = u[a[f]])
                    }
                }
                return l
            }
        },
        517563: (t, e, n) => {
            "use strict";
            var r = n(970610),
                o = n(727418),
                i = n(444020);

            function u(t, e) {
                return e.encode ? e.strict ? r(t) : encodeURIComponent(t) : t
            }

            function a(t) {
                return Array.isArray(t) ? t.sort() : "object" == typeof t ? a(Object.keys(t)).sort((function(t, e) {
                    return Number(t) - Number(e)
                })).map((function(e) {
                    return t[e]
                })) : t
            }
            e.extract = function(t) {
                return t.split("?")[1] || ""
            };
            e.parse = function(t, e) {
                var n = function(t) {
                        var e;
                        switch (t.arrayFormat) {
                            case "index":
                                return function(t, n, r) {
                                    e = /\[(\d*)\]$/.exec(t);
                                    t = t.replace(/\[\d*\]$/, "");
                                    if (e) {
                                        void 0 === r[t] && (r[t] = {});
                                        r[t][e[1]] = n
                                    } else r[t] = n
                                };
                            case "bracket":
                                return function(t, n, r) {
                                    e = /(\[\])$/.exec(t);
                                    t = t.replace(/\[\]$/, "");
                                    e ? void 0 !== r[t] ? r[t] = [].concat(r[t], n) : r[t] = [n] : r[t] = n
                                };
                            default:
                                return function(t, e, n) {
                                    void 0 !== n[t] ? n[t] = [].concat(n[t], e) : n[t] = e
                                }
                        }
                    }(e = o({
                        arrayFormat: "none"
                    }, e)),
                    r = Object.create(null);
                if ("string" != typeof t) return r;
                if (!(t = t.trim().replace(/^(\?|#|&)/, ""))) return r;
                t.split("&").forEach((function(t) {
                    var e = t.replace(/\+/g, " ").split("="),
                        o = e.shift(),
                        u = e.length > 0 ? e.join("=") : void 0;
                    u = void 0 === u ? null : i(u);
                    n(i(o), u, r)
                }));
                return Object.keys(r).sort().reduce((function(t, e) {
                    var n = r[e];
                    Boolean(n) && "object" == typeof n && !Array.isArray(n) ? t[e] = a(n) : t[e] = n;
                    return t
                }), Object.create(null))
            };
            e.stringify = function(t, e) {
                var n = function(t) {
                    switch (t.arrayFormat) {
                        case "index":
                            return function(e, n, r) {
                                return null === n ? [u(e, t), "[", r, "]"].join("") : [u(e, t), "[", u(r, t), "]=", u(n, t)].join("")
                            };
                        case "bracket":
                            return function(e, n) {
                                return null === n ? u(e, t) : [u(e, t), "[]=", u(n, t)].join("")
                            };
                        default:
                            return function(e, n) {
                                return null === n ? u(e, t) : [u(e, t), "=", u(n, t)].join("")
                            }
                    }
                }(e = o({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none"
                }, e));
                return t ? Object.keys(t).sort().map((function(r) {
                    var o = t[r];
                    if (void 0 === o) return "";
                    if (null === o) return u(r, e);
                    if (Array.isArray(o)) {
                        var i = [];
                        o.slice().forEach((function(t) {
                            void 0 !== t && i.push(n(r, t, i.length))
                        }));
                        return i.join("&")
                    }
                    return u(r, e) + "=" + u(o, e)
                })).filter((function(t) {
                    return t.length > 0
                })).join("&") : ""
            }
        },
        970610: t => {
            "use strict";
            t.exports = function(t) {
                return encodeURIComponent(t).replace(/[!'()*]/g, (function(t) {
                    return "%" + t.charCodeAt(0).toString(16).toUpperCase()
                }))
            }
        },
        971402: (t, e, n) => {
            "use strict";
            n.d(e, {
                Zy: () => f,
                vq: () => _,
                jW: () => p
            });
            var r = n(744564),
                o = n(26468),
                i = n(120415),
                u = n(73105),
                a = n(2590);

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

            function f(t) {
                (0, n(973935).flushSync)((function() {
                    r.Z.wait((function() {
                        r.Z.dispatch({
                            type: "CONTEXT_MENU_CLOSE"
                        }).finally(t)
                    }))
                }))
            }

            function _(t, e, n, r) {
                t.stopPropagation();
                if (null == t.currentTarget.contains || t.currentTarget.contains(t.target)) {
                    var l, f, _ = 0,
                        p = 0;
                    if ("pageX" in t) {
                        _ = t.pageX;
                        p = t.pageY
                    }
                    if (0 === _ && 0 === p) {
                        var d, E = null === (d = t.target) || void 0 === d ? void 0 : d.getBoundingClientRect(),
                            O = null != E ? E : {},
                            I = O.left,
                            S = void 0 === I ? 0 : I,
                            h = O.top,
                            T = void 0 === h ? 0 : h,
                            y = O.width,
                            v = void 0 === y ? 0 : y,
                            N = O.height;
                        _ = S + v / 2;
                        p = T + (void 0 === N ? 0 : N) / 2
                    }
                    var b = {
                        render: e,
                        renderLazy: r,
                        target: null !== (l = t.target) && void 0 !== l ? l : t.currentTarget,
                        rect: new DOMRect(_, p, 0, 0),
                        config: c({
                            context: __OVERLAY__ ? a.IlC.OVERLAY : null !== (f = (0, o.GB)()) && void 0 !== f ? f : a.IlC.APP
                        }, n)
                    };
                    if ((null == n ? void 0 : n.enableSpellCheck) && (0, i.nI)()) var g = (0, u.RD)((function() {
                        g();
                        s(b)
                    }));
                    else {
                        t.preventDefault();
                        s(b)
                    }
                }
            }

            function p(t, e, n) {
                _(t, void 0, n, e)
            }
        },
        735885: (t, e, n) => {
            "use strict";
            n.d(e, {
                jN: () => o,
                xf: () => i,
                Ou: () => u
            });
            var r = n(744564);

            function o(t) {
                r.Z.dispatch({
                    type: "LAYER_PUSH",
                    component: t
                })
            }

            function i() {
                r.Z.dispatch({
                    type: "LAYER_POP"
                })
            }

            function u() {
                r.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        810978: (t, e, n) => {
            "use strict";
            n.d(e, {
                GZ: () => d,
                Gn: () => O,
                Y2: () => I,
                mE: () => S
            });
            var r = n(281110),
                o = n(744564),
                i = n(973889),
                u = n(615796),
                a = n(264628),
                l = n(673679),
                c = n(2590),
                s = n(203600);

            function f(t, e, n, r, o, i, u) {
                try {
                    var a = t[i](u),
                        l = a.value
                } catch (t) {
                    n(t);
                    return
                }
                a.done ? e(l) : Promise.resolve(l).then(r, o)
            }

            function _(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = t.apply(e, n);

                        function u(t) {
                            f(i, r, o, u, a, "next", t)
                        }

                        function a(t) {
                            f(i, r, o, u, a, "throw", t)
                        }
                        u(void 0)
                    }))
                }
            }
            var p = function(t, e) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys,
                                                o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = e.call(t, u)
                            } catch (t) {
                                i = [6, t];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            };

            function d(t, e, n, r, o) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = _((function(t, e, n, s, f) {
                    var _, d, E, O;
                    return p(this, (function(p) {
                        switch (p.label) {
                            case 0:
                                o.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH",
                                    skuId: t
                                });
                                p.label = 1;
                            case 1:
                                p.trys.push([1, 5, , 6]);
                                _ = {
                                    url: c.ANM.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(t),
                                    oldFormErrors: !0
                                };
                                d = {};
                                null != e && (d.country_code = e);
                                null != n && (d.payment_source_id = n);
                                null != s && (d.include_unpublished = s);
                                null != f && (d.revenue_surface = f);
                                _.query = d;
                                return u.Z.ipCountryCodeLoaded ? [3, 3] : [4, (0, l.GE)()];
                            case 2:
                                p.sent();
                                p.label = 3;
                            case 3:
                                return [4, r.ZP.get(_)];
                            case 4:
                                E = p.sent();
                                o.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                                    skuId: t,
                                    subscriptionPlans: E.body
                                });
                                return [3, 6];
                            case 5:
                                O = p.sent();
                                o.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                                    skuId: t
                                });
                                (0, a.q2)(O);
                                throw new i.Z(O);
                            case 6:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function O(t, e) {
                return Promise.all(t.filter((function(t) {
                    return t !== s.Si.NONE
                })).map((function(t) {
                    return d(t, e)
                })))
            }

            function I(t, e, n) {
                return Promise.all(s.YQ.filter((function(t) {
                    return t !== s.Si.NONE
                })).map((function(r) {
                    return d(r, t, e, void 0, n)
                })))
            }

            function S() {
                o.Z.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        734691: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => I
            });
            var r = n(281110),
                o = n(630631),
                i = n(744564),
                u = n(223219),
                a = n(652591),
                l = n(775173),
                c = n(488110),
                s = n(120415),
                f = n(735885),
                _ = n(2590),
                p = n(473708);

            function d(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function E(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        d(t, e, n[e])
                    }))
                }
                return t
            }

            function O(t, e) {
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
            const I = {
                open: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            openWithoutBackstack: !1
                        };
                    i.Z.dispatch(E({
                        type: "USER_SETTINGS_MODAL_OPEN",
                        section: t,
                        subsection: e
                    }, n));
                    (0,
                        f.jN)(_.S9g.USER_SETTINGS)
                },
                init: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    i.Z.dispatch(E({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: t,
                        subsection: e
                    }, n))
                },
                close: function() {
                    var t = u.Z.onClose;
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLOSE"
                    });
                    null != t && t()
                },
                setSection: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    i.Z.dispatch(E({
                        type: "USER_SETTINGS_MODAL_SET_SECTION",
                        section: t,
                        subsection: e
                    }, n))
                },
                clearSubsection: function(t) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                        forSection: t
                    })
                },
                clearScrollPosition: function(t) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                        forSection: t
                    })
                },
                updateAccount: function(t) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                        settings: t
                    })
                },
                submitComplete: function() {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                    })
                },
                reset: function() {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_RESET"
                    })
                },
                saveAccountChanges: function(t, e) {
                    var n = this;
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_SUBMIT"
                    });
                    var u = t.username,
                        f = t.email,
                        d = t.emailToken,
                        I = t.password,
                        S = t.avatar,
                        h = t.newPassword,
                        T = t.discriminator,
                        y = e.close;
                    return (0, c.Z)((function(t) {
                        var e = O(E({
                                username: u,
                                email: f,
                                email_token: d,
                                password: I,
                                avatar: S,
                                new_password: h
                            }, t), {
                                discriminator: null != T && "" !== T ? T : void 0
                            }),
                            n = o.Z.get(_.JkL),
                            i = (0, s.xJ)();
                        if (null != i && null != n) {
                            e.push_provider = i;
                            e.push_token = n
                        }
                        var a = o.Z.get(_.scU);
                        if (null != _.mvA && null != a) {
                            e.push_voip_provider = _.mvA;
                            e.push_voip_token = a
                        }
                        return r.ZP.patch({
                            url: _.ANM.ME,
                            oldFormErrors: !0,
                            body: e
                        })
                    }), {
                        checkEnabled: !1,
                        modalProps: {
                            title: p.Z.Messages.TWO_FA_CHANGE_ACCOUNT
                        },
                        hooks: {
                            onEarlyClose: function() {
                                return i.Z.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }
                    }).then((function(t) {
                        var e = t.body,
                            r = e.token;
                        a.default.track(_.rMx.USER_AVATAR_UPDATED, {
                            animated: (0, l.xR)(e.avatar)
                        });
                        delete e.token;
                        i.Z.dispatch({
                            type: "UPDATE_TOKEN",
                            token: r,
                            userId: e.id
                        });
                        i.Z.dispatch({
                            type: "CURRENT_USER_UPDATE",
                            user: e
                        });
                        null != h && i.Z.dispatch({
                            type: "USER_PASSWORD_UPDATE",
                            user: e,
                            newPassword: h
                        });
                        null != I && null != h && i.Z.dispatch({
                            type: "PASSWORD_UPDATED",
                            userId: e.id
                        });
                        y ? n.close() : n.submitComplete();
                        return t
                    }), (function(t) {
                        i.Z.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: t.body
                        });
                        return t
                    }))
                }
            }
        },
        919244: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => S
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                u = n.n(i),
                a = n(882723),
                l = n(473708),
                c = n(775823),
                s = n.n(c);

            function f(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function _(t) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return _(t)
            }

            function p(t, e) {
                return !e || "object" !== E(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function d(t, e) {
                d = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return d(t, e)
            }
            var E = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function O(t) {
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
                    var n, r = _(t);
                    if (e) {
                        var o = _(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
            var I = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && d(t, e)
                }(n, t);
                var e = O(n);

                function n() {
                    f(this, n);
                    var t;
                    (t = e.apply(this, arguments)).state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    };
                    t.setRef = function(e) {
                        t._input = e
                    };
                    t.getLabelText = function() {
                        var e;
                        return null !== (e = t.props.label) && void 0 !== e ? e : t.props.disallowBackupCodes ? l.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : l.Z.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    };
                    t.getSupportedCodeTypes = function() {
                        return t.props.disallowBackupCodes ? l.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : l.Z.Messages.TWO_FA_AUTH_CODE
                    };
                    t.getPlaceholder = function() {
                        return t.props.forceNoPlaceholder ? null : null !== (e = t.props.placeholder) && void 0 !== e ? e : t.getSupportedCodeTypes();
                        var e
                    };
                    t.errorPresent = function() {
                        return null != t.props.error && "" !== t.props.error || null != t.state.errorMessage && "" !== t.state.errorMessage
                    };
                    t.handleRetry = function() {
                        var e = t.props.onRetry;
                        null == e || e().then((function() {
                            return t.setState({
                                retrySuccess: !0
                            })
                        }))
                    };
                    t.handleSubmit = function(e) {
                        e.preventDefault();
                        var n = t.props,
                            r = n.handleSubmit,
                            o = n.onError;
                        r(t.state.code).catch((function(e) {
                            if (null != e.body) {
                                null == o || o(e.body);
                                e.body.message && t.setState({
                                    errorMessage: e.body.message
                                })
                            }
                        }))
                    };
                    t.handleCancel = function() {
                        var e = t.props,
                            n = e.onClose,
                            r = e.handleEarlyClose;
                        n();
                        null == r || r()
                    };
                    t.handleCodeChange = function(e) {
                        t.setState({
                            code: e
                        })
                    };
                    return t
                }
                n.prototype.render = function() {
                    var t, e = this.props,
                        n = e.title,
                        i = e.actionText,
                        c = e.children,
                        f = e.error,
                        _ = e.isLoading,
                        p = e.maxLength,
                        d = e.transitionState,
                        E = e.helpMessage,
                        O = e.retryPrompt,
                        I = e.retrySuccessMessage,
                        S = this.state,
                        h = S.code,
                        T = S.errorMessage,
                        y = S.retrySuccess,
                        v = o.Children.count(c) > 0 ? (0, r.jsx)(a.Card, {
                            type: a.Card.Types.WARNING,
                            className: s().card,
                            children: (0, r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: c
                            })
                        }) : null,
                        N = null != O ? (0, r.jsxs)(a.Text, {
                            className: u()(s().submitText, s().spacing),
                            variant: "text-sm/normal",
                            children: [(0, r.jsx)("br", {}), (0, r.jsx)(a.Clickable, {
                                className: u()(s().spacing, s().link),
                                onClick: this.handleRetry,
                                children: (0, r.jsx)(a.Anchor, {
                                    children: O
                                })
                            })]
                        }) : null,
                        b = y ? (0, r.jsx)(a.Card, {
                            type: a.Card.Types.SUCCESS,
                            className: s().card,
                            children: (0, r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: I
                            })
                        }) : null;
                    return (0, r.jsx)(a.ModalRoot, {
                        transitionState: d,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(a.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: n
                                })
                            }), (0, r.jsxs)(a.ModalContent, {
                                children: [null != E ? (0, r.jsx)(a.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: s().spacing,
                                    children: E
                                }) : null, v, b, (0, r.jsxs)(a.FormItem, {
                                    title: this.getLabelText(),
                                    className: s().spacing,
                                    children: [(0, r.jsx)(a.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (t = this.getPlaceholder()) && void 0 !== t ? t : void 0,
                                        maxLength: null != p ? p : 10,
                                        value: h,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(a.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: s().error,
                                        children: null != f ? f : T
                                    }) : null, N]
                                })]
                            }), (0, r.jsxs)(a.ModalFooter, {
                                children: [(0, r.jsx)(a.Button, {
                                    type: "submit",
                                    disabled: _ || 0 === h.length,
                                    children: null != i ? i : l.Z.Messages.CONFIRM
                                }), (0, r.jsx)(a.Button, {
                                    onClick: this.handleCancel,
                                    disabled: _,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
                                    children: l.Z.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                };
                return n
            }(o.PureComponent);
            I.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            const S = I
        },
        142643: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => o
            });
            var r;
            ! function(t) {
                t.CHANNEL_CHAT_RESIZABLE_SIDEBAR_RESIZE_HANDLE_WIDTH = "8px";
                t.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE = "485px";
                t.ACTIVITIES_HOME_WHATS_NEW_TILE_WIDTH = "224px";
                t.ACTIVITIES_HOME_WHATS_NEW_HORIZONTAL_MARGIN = "10px";
                t.ACTIVITIES_HOME_HAPPENING_NOW_CARD_WIDTH = "305px";
                t.ACTIVITIES_HOME_HAPPENING_NOW_GAP = "16px";
                t.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH = "356px";
                t.FOLDER_ITEM_ANIMATION_DURATION = "150ms";
                t.FOLDER_ITEM_GUILD_ICON_SIZE = "48px";
                t.GUILD_TOOLTIP_ICON_SIZE = "20px";
                t.GUILD_TOOLTIP_ICON_SIZE_V_2 = "16px";
                t.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING = "2px";
                t.FULL_SCREEN_LAYER_ANIMATION_DURATION = "150ms";
                t.GUILD_SETTINGS_PREMIUM_TIER_STATUS_PROGRESS_WITH_SUBSCRIPTIONS_MARGIN_TOP = "7px";
                t.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS = "76px";
                t.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING = "2px";
                t.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN = "0";
                t.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING = "8px";
                t.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE = "32px";
                t.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN = "8px";
                t.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE = "24px";
                t.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE = "1px";
                t.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL = "12px";
                t.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL = "360px";
                t.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM = "446px";
                t.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP = "0";
                t.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS = "8px";
                t.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT = "0";
                t.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM = "0";
                t.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT = "8px";
                t.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT = "30px";
                t.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS = "96px";
                t.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL = "80px";
                t.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING = "2px";
                t.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN = "12px";
                t.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT = "54px";
                t.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT = "32px";
                t.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS = "28px";
                t.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS = "32px";
                t.STICKERS_CONSTANTS_STICKER_DIMENSION = "160px";
                t.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL = "4px";
                t.ASPECT_STABLE_IMAGE_CONTAINER_PADDING = "20px";
                t.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING = "4px";
                t.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH = "340px";
                t.USER_PROFILE_THEMED_CONTAINER_PROFILE_EFFECTS_USER_POPOUT_WIDTH = "280px";
                t.USER_BANNER_PREMIUM_BANNER_HEIGHT_POPOUT = "120px";
                t.USER_BANNER_PREMIUM_BANNER_HEIGHT_NO_BANNER_IMAGE_POPOUT = "90px";
                t.USER_BANNER_BANNER_HEIGHT_POPOUT = "60px";
                t.USER_BANNER_PREMIUM_BANNER_HEIGHT_PROFILE = "212px";
                t.USER_BANNER_BANNER_HEIGHT_PROFILE = "106px";
                t.USER_BANNER_BANNER_HEIGHT_POMELO = "64px";
                t.USER_BANNER_PREMIUM_BANNER_HEIGHT_SETTINGS = "100px";
                t.USER_BANNER_BANNER_HEIGHT_PANEL = "120px";
                t.USER_BANNER_CANCEL_MODAL_HEIGHT = "42px";
                t.PREMIUM_GUILD_PROGRESS_BAR_PROGRESS_BAR_WIDTH = "24px";
                t.PREMIUM_GUILD_PROGRESS_BAR_TIER_MARKER_SIZE = "16px";
                t.ACTIVITY_SHELF_MODAL_MODAL_PADDING = "80px";
                t.ACTIVITY_SHELF_MODAL_MODAL_WIDTH = "496px";
                t.ACTIVITY_SHELF_MODAL_MODAL_MIN_WIDTH = "496px";
                t.ACTIVITY_SHELF_MODAL_MODAL_MAX_WIDTH = "1024px";
                t.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT = "720px";
                t.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT = "64px";
                t.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT = "230px";
                t.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT = "143px";
                t.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP = "16px";
                t.LIVE_INDICATOR_BORDER_RADIUS = "16px";
                t.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH = "119px";
                t.FOLDER_ITEM_GUILD_ICON_MARGIN = "8px";
                t.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_LARGE = "288px";
                t.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_SMALL = "225px";
                t.EMBEDDED_APPLICATION_INVITE_CONTENT_WIDTH = "576px";
                t.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE = "80px";
                t.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE_MOBILE = "48px";
                t.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH = "1024px";
                t.GUILD_COUNT_SMALL_ICON_SIZE = "16px";
                t.GUILD_COUNT_LARGE_ICON_SIZE = "20px";
                t.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN = "12px";
                t.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE = "196px";
                t.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE = "40px";
                t.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL = "4px";
                t.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT = "8px";
                t.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE = "32px";
                t.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL = "8px";
                t.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE = "24px";
                t.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL = "2px";
                t.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING = "4px";
                t.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE = "1px";
                t.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL = "12px";
                t.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL = "4px";
                t.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE = "24px";
                t.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP = "0";
                t.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT = "0";
                t.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM = "8px";
                t.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP = "8px";
                t.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM = "12px";
                t.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_HEIGHT = "54px";
                t.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_MARGIN_TOP = "16px";
                t.VOICE_WIDGET_TOP_MARGIN = "var(--custom-widget-bar-height) + calc(2 * var(--custom-widget-bar-padding))";
                t.EXPRESSION_SUGGESTIONS_CONTAINER_PADDING = "8px";
                t.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_SIZE = "48px";
                t.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_MARGIN = "8px";
                t.COLLECTION_GALLERY_MEDIA_BREAKPOINT = "1024px";
                t.COLLECTION_GALLERY_COLUMN_CARD_HEIGHT = "600px";
                t.COLLECTION_GALLERY_ROW_CARD_HEIGHT = "283px";
                t.COLLECTION_LIST_CARD_GAP = "16px";
                t.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH = "520px";
                t.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE = "40px";
                t.ROLE_ICON_UPLOADER_ICON_SIZE = "24px";
                t.GRADIENT_PROGRESS_NOTCH_WIDTH = "8px";
                t.GAME_LIST_ROW_MIN_HEIGHT = "62px";
                t.GAME_LIST_LINKED_TO_GLOW_DURATION = "2000ms";
                t.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH = "320px";
                t.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH = "1280px";
                t.INTERACTION_IFRAME_MODAL_MODAL_MARGIN = "80px";
                t.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT = "52px";
                t.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE = "122px"
            }(r || (r = {}));
            const o = r
        },
        973889: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => f
            });
            var r = n(281110),
                o = n(2590),
                i = n(473708);

            function u(t) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return u(t)
            }

            function a(t, e) {
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
                    var n, r = u(t);
                    if (e) {
                        var o = u(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return a(this, n)
                }
            }
            var f = function(t) {
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
                    return e.call(this, t, r, i.Z.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: o.yXt.STATUS
                    }))
                }
                return n
            }(r.ZP.V6OrEarlierAPIError)
        },
        924326: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => o
            });
            var r = n(667294);

            function o() {
                var t = r.useRef(null);
                null === t.current && (t.current = new AbortController);
                r.useEffect((function() {
                    return function() {
                        var e;
                        null === (e = t.current) || void 0 === e || e.abort()
                    }
                }), []);
                return t.current.signal
            }
        },
        83797: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => o
            });
            var r = n(2590);

            function o(t) {
                return null != t && t.type !== r.IIU.CUSTOM_STATUS && (null != t.details || null != t.assets && (null != t.assets.large_image || null != t.assets.small_text) || null != t.party || null != t.secrets || null != t.state)
            }
        },
        396043: (t, e, n) => {
            "use strict";
            n.d(e, {
                v_: () => L,
                JS: () => C,
                hH: () => A,
                AB: () => w,
                ZP: () => G,
                oG: () => j,
                kO: () => D,
                yw: () => U
            });
            var r = n(496486),
                o = n.n(r),
                i = n(940060),
                u = n(382060),
                a = n(664625),
                l = n(61209),
                c = n(5544),
                s = n(27851),
                f = n(21372),
                _ = n(567403),
                p = n(52467),
                d = n(682776),
                E = n(491260),
                O = n(563367),
                I = n(715107),
                S = n(464187),
                h = n(407561),
                T = n(652591),
                y = n(563135),
                v = n(671723);
            var N = n(2590),
                b = n(897196);

            function g(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function m(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        g(t, e, n[e])
                    }))
                }
                return t
            }

            function R(t) {
                var e = 0;
                for (var n in t) e += 1;
                return e
            }

            function A(t) {
                if (null == t) return null;
                var e = _.Z.getGuild(t);
                if (null == e) return null;
                var n, r = a.default.getId(),
                    o = f.ZP.getMember(t, r),
                    i = c.ZP.getChannels(t),
                    u = i[c.sH].length,
                    l = i[c.Zb].length,
                    p = h.Z.getVoiceStates(t);
                return {
                    guild_id: e.id,
                    guild_size_total: s.Z.getMemberCount(t),
                    guild_num_channels: u + l,
                    guild_num_text_channels: u,
                    guild_num_voice_channels: l,
                    guild_num_roles: R(e.roles),
                    guild_member_num_roles: null != o ? o.roles.length : 0,
                    guild_member_perms: String(null !== (n = d.Z.getGuildPermissions(e)) && void 0 !== n ? n : y.ZP.NONE),
                    guild_is_vip: e.hasFeature(N.oNc.VIP_REGIONS),
                    is_member: null != o,
                    num_voice_channels_active: R(p)
                }
            }

            function P(t, e) {
                return {
                    channel_static_route: e,
                    channel_hidden: !1
                }
            }

            function C(t) {
                if (null == t) return null;
                var e = l.Z.getChannel(t);
                return null == e ? null : L(e)
            }

            function L(t) {
                if (null == t) return null;
                var e, n = !1,
                    r = t.getGuildId();
                if (null != r) {
                    var o = function(t) {
                        if (null == t) return !1;
                        var e = t.permissionOverwrites[r];
                        return null != e && i.Z.has(e.deny, N.Plq.VIEW_CHANNEL)
                    };
                    n = u.Ec.has(t.type) && null != t.parent_id ? o(l.Z.getChannel(t.parent_id)) : o(t)
                }
                return {
                    channel_id: t.id,
                    channel_type: t.type,
                    channel_size_total: t.isPrivate() ? t.recipients.length : 0,
                    channel_member_perms: String(null != r && null !== (e = d.Z.getChannelPermissions(t)) && void 0 !== e ? e : y.ZP.NONE),
                    channel_hidden: n
                }
            }

            function w(t) {
                if (null == t) return null;
                var e = l.Z.getChannel(t);
                if (null == e) return null;
                var n, r = p.Z.isVideoEnabled(),
                    o = O.Z.getMediaSessionId();
                return m({
                    channel_id: e.id,
                    channel_type: e.type,
                    guild_id: e.getGuildId(),
                    media_session_id: o
                }, D(e.getGuildId(), e.id, r), {
                    game_name: null != (n = v.ZP.getCurrentGameForAnalytics()) ? n.name : null,
                    game_id: null != n ? n.id : null
                })
            }

            function M(t, e) {
                return null == t ? null != e ? e : null : t.isPrivate() ? null : null !== (r = null !== (n = t.getGuildId()) && void 0 !== n ? n : e) && void 0 !== r ? r : null;
                var n, r
            }

            function U(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!T.default.isThrottled(t)) {
                    var r = !("location" in e) || e.location !== N.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        o = "guild_id" in e ? e.guild_id : r ? S.Z.getGuildId() : null,
                        i = "channel_id" in e ? e.channel_id : r ? I.Z.getChannelId(o) : null,
                        u = l.Z.getChannel(i),
                        a = M(u, o),
                        c = m({}, e, A(a), null != o && null != i && (0, b.AB)(i) ? P(0, i) : L(u));
                    T.default.track(t, c, {
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
                o()(h.Z.getVoiceStates(t)).filter((function(t) {
                    return t.channelId === e
                })).filter((function(t) {
                    return t.userId !== a.default.getId()
                })).forEach((function(t) {
                    r.voice_state_count++;
                    (t.selfVideo || t.selfStream) && r.video_stream_count++
                }));
                return r
            }

            function j(t, e) {
                var n = {
                    custom_status_count: 0
                };
                o()(h.Z.getVoiceStates(t)).forEach((function(t) {
                    t.channelId === e && null != E.Z.findActivity(t.userId, (function(t) {
                        return t.type === N.IIU.CUSTOM_STATUS
                    })) && n.custom_status_count++
                }));
                return n
            }
            const G = {
                trackWithMetadata: U,
                getVoiceStateMetadata: D
            }
        },
        272200: (t, e, n) => {
            "use strict";
            n.d(e, {
                Qi: () => r,
                iw: () => o,
                Kw: () => i,
                Vh: () => u,
                ub: () => a,
                bB: () => l
            });
            var r, o, i, u, a, l;
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
            }(o || (o = {}));
            ! function(t) {
                t[t.ROLE = 1] = "ROLE";
                t[t.USER = 2] = "USER";
                t[t.CHANNEL = 3] = "CHANNEL"
            }(i || (i = {}));
            ! function(t) {
                t.DISCOVERY = "discovery";
                t.SUGGESTION = "suggestion";
                t.MENTION = "mention";
                t.PASTE = "paste";
                t.RECALL = "recall";
                t.POPULAR_COMMANDS = "popular_commands";
                t.MJ_CHAT_BAR = "mj_chat_bar";
                t.QUERY = "query"
            }(u || (u = {}));
            ! function(t) {
                t[t.BUILT_IN = 1] = "BUILT_IN";
                t[t.FRECENCY = 2] = "FRECENCY";
                t[t.APP = 3] = "APP"
            }(a || (a = {}));
            ! function(t) {
                t[t.CHAT = 0] = "CHAT";
                t[t.APPLICATION_LAUNCHER = 1] = "APPLICATION_LAUNCHER"
            }(l || (l = {}))
        },
        248046: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z8: () => g,
                nG: () => A,
                BH: () => P,
                Dd: () => C,
                $z: () => L,
                bD: () => w,
                nT: () => M,
                oK: () => U,
                BO: () => D,
                Ft: () => j,
                D7: () => x,
                tI: () => F,
                X0: () => H
            });
            var r = n(224736),
                o = n.n(r),
                i = n(441143),
                u = n.n(i),
                a = n(496486),
                l = n.n(a),
                c = n(940060),
                s = n(73904),
                f = n(734394),
                _ = n(948832),
                p = n(382060),
                d = n(284610),
                E = n(682776),
                O = n(272200),
                I = n(127624),
                S = n(2590),
                h = n(520453);

            function T(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function y(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function v(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        y(t, e, n[e])
                    }))
                }
                return t
            }

            function N(t, e) {
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

            function b(t) {
                return function(t) {
                    if (Array.isArray(t)) return T(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return T(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return T(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(t) {
                var e, n = t.rootCommand,
                    r = t.command,
                    o = t.applicationId,
                    i = t.subCommandPath,
                    u = t.useKeyedPermissions;
                if (null != n.permissions && n.permissions.length > 0)
                    if (u) e = (0, f.tk)(n.permissions);
                    else {
                        e = {};
                        n.permissions.forEach((function(t) {
                            e[t.id] = t
                        }))
                    } var a, l, _, p = (null != i ? i : []).map((function(t) {
                        return t.name
                    })),
                    d = (null != i ? i : []).map((function(t) {
                        return t.displayName
                    }));
                return {
                    version: n.version,
                    guildId: n.guild_id,
                    id: [n.id].concat(b(p)).join(I.oQ),
                    name: [n.name].concat(b(p)).join(" "),
                    serverLocalizedName: r.name_localized,
                    applicationId: o,
                    type: null !== (a = n.type) && void 0 !== a ? a : s.yU.CHAT,
                    inputType: O.iw.BOT,
                    description: r.description,
                    options: m(r.options),
                    rootCommand: n,
                    subCommandPath: i,
                    defaultMemberPermissions: null == n.default_member_permissions ? void 0 : c.Z.deserialize(n.default_member_permissions),
                    dmPermission: n.dm_permission,
                    permissions: e,
                    displayName: [null !== (l = n.name_localized) && void 0 !== l ? l : n.name].concat(b(d)).join(" "),
                    displayDescription: null !== (_ = r.description_localized) && void 0 !== _ ? _ : r.description,
                    nsfw: n.nsfw,
                    contexts: n.contexts,
                    integration_types: n.integration_types
                }
            }

            function m(t) {
                return null == t ? void 0 : t.map((function(t) {
                    var e, n, r, o = N(v({}, t), {
                        choices: (r = t.choices, null == r ? void 0 : r.map((function(t) {
                            var e;
                            return N(v({}, t), {
                                displayName: null !== (e = t.name_localized) && void 0 !== e ? e : t.name
                            })
                        }))),
                        options: m(t.options),
                        serverLocalizedName: t.name_localized,
                        displayName: null !== (e = t.name_localized) && void 0 !== e ? e : t.name,
                        displayDescription: null !== (n = t.description_localized) && void 0 !== n ? n : t.description
                    });
                    return t.type === s.jw.CHANNEL && "channel_types" in t ? N(v({}, o), {
                        channelTypes: t.channel_types
                    }) : t.type !== s.jw.NUMBER && t.type !== s.jw.INTEGER || !("min_value" in t) && !("max_value" in t) ? t.type === s.jw.STRING && ("min_length" in t || "max_length" in t) ? N(v({}, o), {
                        minLength: t.min_length,
                        maxLength: t.max_length
                    }) : o : N(v({}, o), {
                        minValue: t.min_value,
                        maxValue: t.max_value
                    })
                }))
            }

            function R(t) {
                var e = t.rootCommand,
                    n = t.command,
                    r = t.applicationId,
                    o = t.subCommandPath,
                    i = t.useKeyedPermissions;
                if (n.hasOwnProperty("id")) {
                    if (null == n.options || 0 === n.options.length) return [g({
                        rootCommand: e,
                        command: n,
                        applicationId: r,
                        subCommandPath: o,
                        useKeyedPermissions: i
                    })]
                } else if (n.type !== s.jw.SUB_COMMAND && n.type !== s.jw.SUB_COMMAND_GROUP && (null == n.options || 0 === n.options.length)) return [g({
                    rootCommand: e,
                    command: n,
                    applicationId: r,
                    subCommandPath: o,
                    useKeyedPermissions: i
                })];
                var u = [];
                if (null == n.options) return u;
                for (var a = n.options.filter((function(t) {
                        return t.type === s.jw.SUB_COMMAND_GROUP
                    })), l = 0; l < a.length; l++) {
                    var c, f;
                    (c = u).push.apply(c, b(R({
                        rootCommand: e,
                        command: a[l],
                        applicationId: r,
                        subCommandPath: (null != o ? o : []).concat([{
                            name: a[l].name,
                            type: s.jw.SUB_COMMAND_GROUP,
                            displayName: null !== (f = a[l].name_localized) && void 0 !== f ? f : a[l].name
                        }]),
                        useKeyedPermissions: i
                    })))
                }
                for (var _ = n.options.filter((function(t) {
                        return t.type === s.jw.SUB_COMMAND
                    })), p = 0; p < _.length; p++) {
                    var d;
                    u.push(g({
                        rootCommand: e,
                        command: _[p],
                        applicationId: r,
                        subCommandPath: (null != o ? o : []).concat([{
                            name: _[p].name,
                            type: s.jw.SUB_COMMAND,
                            displayName: null !== (d = _[p].name_localized) && void 0 !== d ? d : _[p].name
                        }]),
                        useKeyedPermissions: i
                    }))
                }
                0 === a.length && 0 === _.length && u.push(g({
                    rootCommand: e,
                    command: n,
                    applicationId: r,
                    subCommandPath: o,
                    useKeyedPermissions: i
                }));
                return u
            }

            function A(t, e) {
                return l().flatMap(t, (function(t) {
                    u()(null != t.id, "Missing command id");
                    return R({
                        rootCommand: t,
                        command: t,
                        applicationId: t.application_id,
                        subCommandPath: void 0,
                        useKeyedPermissions: e
                    })
                }))
            }

            function P(t) {
                return S.Xyh.test(t.trim())
            }

            function C(t, e, n, r) {
                var o = [];
                l()(t).forEach((function(t) {
                    e.test(t.displayName) && (null == t.predicate || t.predicate(n)) && o.push(t)
                }));
                return o.slice(0, r)
            }

            function L(t) {
                var e = t.type === s.jw.STRING,
                    n = t.type === s.jw.CHANNEL,
                    r = t.type === s.jw.USER || t.type === s.jw.MENTIONABLE,
                    o = t.type === s.jw.ROLE || t.type === s.jw.MENTIONABLE;
                return {
                    canMentionEveryone: e || o,
                    canMentionHere: e,
                    canMentionChannels: e || n,
                    canMentionUsers: e || r,
                    canMentionRoles: e || o,
                    canMentionAnyGuildUser: r,
                    canMentionNonMentionableRoles: o
                }
            }

            function w(t) {
                return o()(t).subtract(1).toString()
            }

            function M(t, e, n, r) {
                return !!U(E.Z, _.Z, !1, t) && (t.isPrivate() && n > 0 || (null !== (o = null == r ? void 0 : r[e]) && void 0 !== o ? o : 0) > 0);
                var o
            }
            var U = function(t, e, n, r) {
                    return !n && (r.isMultiUserDM() ? e.getIntegrations(r.id).length > 0 : r.isDM() ? !r.isSystemDM() && (null != r.rawRecipients.find((function(t) {
                        return t.bot
                    })) || e.getIntegrations(r.id).length > 0) : !r.isArchivedLockedThread() && (!!(0, p.Em)(r.type) && t.can(c.Z.combine(h.Pl.USE_APPLICATION_COMMANDS, h.Pl.SEND_MESSAGES), r)))
                },
                D = c.Z.deserialize(0);

            function j(t) {
                var e = t.PermissionStore,
                    n = t.guild,
                    r = t.selfMember,
                    o = t.applicationLevelPermissions,
                    i = t.commandLevelPermissions,
                    u = t.defaultMemberPermissions;
                if (n.ownerId === r.userId || e.can(h.Pl.ADMINISTRATOR, n)) return !0;
                var a = n.id;
                if (null != i) {
                    var l = G(r, a, i);
                    if ("boolean" == typeof l) return l
                }
                var s = G(r, a, o);
                return !("boolean" == typeof s && !s) && (null == u || !c.Z.equals(u, D) && e.can(u, n))
            }

            function G(t, e, n) {
                var r = n[(0, f.rE)(t.userId, O.Kw.USER)];
                if (null != r) return r.permission;
                var o = !1,
                    i = !0,
                    u = !1,
                    a = void 0;
                try {
                    for (var l, c = t.roles[Symbol.iterator](); !(i = (l = c.next()).done); i = !0) {
                        var s = l.value,
                            _ = n[(0, f.rE)(s, O.Kw.ROLE)];
                        if (null != _) {
                            o = !0;
                            if (_.permission) return !0
                        }
                    }
                } catch (t) {
                    u = !0;
                    a = t
                } finally {
                    try {
                        i || null == c.return || c.return()
                    } finally {
                        if (u) throw a
                    }
                }
                if (o) return !1;
                var p = n[(0, f.rE)(e, O.Kw.ROLE)];
                return null != p ? p.permission : null
            }

            function x(t) {
                switch (t) {
                    case O.bB.CHAT:
                        return d.d.ChannelMessage;
                    case O.bB.APPLICATION_LAUNCHER:
                        return d.d.ApplicationLauncherCommand
                }
            }

            function F(t) {
                if (null != t) return t.id === I.bi.BUILT_IN ? O.ub.BUILT_IN : t.id === I.bi.FRECENCY ? O.ub.FRECENCY : O.ub.APP
            }

            function H(t) {
                var e, n;
                return {
                    type: O.Qi.APPLICATION,
                    id: t.id,
                    name: null !== (n = null == t || null === (e = t.bot) || void 0 === e ? void 0 : e.username) && void 0 !== n ? n : t.name,
                    icon: t.icon,
                    application: t
                }
            }
        },
        165586: (t, e, n) => {
            "use strict";
            n.d(e, {
                LY: () => r,
                aW: () => f,
                ws: () => o,
                tI: () => i,
                L9: () => _,
                no: () => p,
                ND: () => d,
                WC: () => O,
                z8: () => I,
                km: () => h,
                k0: () => T,
                af: () => y
            });
            var r, o, i, u, a = n(2590),
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

            function f(t) {
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
            }(o || (o = {}));
            ! function(t) {
                t[t.PRESET_VIDEO = 1] = "PRESET_VIDEO";
                t[t.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS";
                t[t.PRESET_CUSTOM = 3] = "PRESET_CUSTOM"
            }(i || (i = {}));

            function _(t) {
                switch (t) {
                    case o.FPS_5:
                        return o.FPS_5;
                    case o.FPS_15:
                        return o.FPS_15;
                    case o.FPS_30:
                        return o.FPS_30;
                    case o.FPS_60:
                        return o.FPS_60;
                    default:
                        throw new Error("Unknown frame rate: ".concat(t))
                }
            }
            var p = (s(u = {}, i.PRESET_DOCUMENTS, [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_15
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_5
                }]), s(u, i.PRESET_VIDEO, [{
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_60
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_60
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_60
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_30
                }]), s(u, i.PRESET_CUSTOM, []), u),
                d = [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_60,
                    quality: l.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_30,
                    quality: l.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_15,
                    quality: l.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_5,
                    preset: i.PRESET_DOCUMENTS
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_30,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_15,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_30,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_15,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_1,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_30
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_15
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_5
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: o.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_1,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: o.FPS_30
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: o.FPS_15
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: o.FPS_5
                }];

            function E(t, e) {
                return {
                    value: t,
                    get label() {
                        return null != e ? e() : t
                    }
                }
            }
            var O = [E(r.RESOLUTION_720), E(r.RESOLUTION_1080), E(r.RESOLUTION_1440), E(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                I = [E(r.RESOLUTION_720), E(r.RESOLUTION_1080), E(r.RESOLUTION_1440)],
                S = function(t) {
                    return "".concat(t, "p")
                },
                h = [E(r.RESOLUTION_480, (function() {
                    return S(r.RESOLUTION_480)
                })), E(r.RESOLUTION_720, (function() {
                    return S(r.RESOLUTION_720)
                })), E(r.RESOLUTION_1080, (function() {
                    return S(r.RESOLUTION_1080)
                })), E(r.RESOLUTION_1440, (function() {
                    return S(r.RESOLUTION_1440)
                })), E(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                T = [E(o.FPS_15), E(o.FPS_30), E(o.FPS_60)],
                y = [E(o.FPS_15, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_15
                    })
                })), E(o.FPS_30, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_30
                    })
                })), E(o.FPS_60, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_60
                    })
                }))]
        },
        773411: (t, e, n) => {
            "use strict";
            n.d(e, {
                N2: () => f,
                YM: () => _,
                Dx: () => p,
                jD: () => d,
                bO: () => E,
                Xp: () => O,
                fV: () => I
            });
            var r = n(202351),
                o = n(747820),
                i = n(260561),
                u = n(339432),
                a = n(5544),
                l = n(567403),
                c = n(2590);

            function s(t, e, n) {
                return e.getChannels(t)[a.sH].filter((function(e) {
                    var r = e.channel;
                    return !n.isChannelGated(t, r.id)
                })).length > 5
            }

            function f(t) {
                var e = (0, r.e7)([a.ZP, o.Z], (function() {
                    return null != t && s(t.id, a.ZP, o.Z)
                }));
                return !__OVERLAY__ && (!!e && (null != t && t.hasFeature(c.oNc.GUILD_HOME_DEPRECATION_OVERRIDE)))
            }

            function _(t) {
                if (__OVERLAY__) return !1;
                if (t === c.ME || t === c.I_8) return !1;
                if ((0, u.cn)()) return !1;
                var e = l.Z.getGuild(t);
                return null != e && (!!s(t, a.ZP, o.Z) && e.hasFeature(c.oNc.GUILD_HOME_DEPRECATION_OVERRIDE))
            }
            var p = (0, i.B)({
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
                d = (0, i.B)({
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
                E = (0, i.B)({
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
                }),
                O = ((0, i.B)({
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
                }), (0, i.B)({
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
                }), (0, i.B)({
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
                })),
                I = (0, i.B)({
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
        734394: (t, e, n) => {
            "use strict";
            n.d(e, {
                gw: () => o,
                rE: () => i,
                tk: () => u
            });
            var r = n(73904);
            n(272200);

            function o(t, e) {
                return t === r.yU.CHAT ? "/" + e : e
            }

            function i(t, e) {
                return "".concat(t, ":").concat(e)
            }

            function u(t) {
                return Object.fromEntries(t.map((function(t) {
                    return [i(t.id, t.type), t]
                })))
            }
        },
        948832: (t, e, n) => {
            "use strict";
            n.d(e, {
                M: () => p,
                Z: () => b
            });
            var r = n(202351),
                o = n(744564),
                i = n(451936),
                u = n(223397);

            function a(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function l(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return c(t)
            }

            function s(t, e) {
                return !e || "object" !== d(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function f(t, e) {
                f = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return f(t, e)
            }

            function _(t) {
                return function(t) {
                    if (Array.isArray(t)) return a(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return a(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var p, d = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function E(t) {
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
                    var n, r = c(t);
                    if (e) {
                        var o = c(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return s(this, n)
                }
            }! function(t) {
                t[t.NOT_FETCHED = 0] = "NOT_FETCHED";
                t[t.FETCHING = 1] = "FETCHING";
                t[t.FETCHED = 2] = "FETCHED";
                t[t.FETCH_FAILED = 3] = "FETCH_FAILED"
            }(p || (p = {}));
            var O = new Map,
                I = new Map,
                S = [],
                h = p.NOT_FETCHED,
                T = [],
                y = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        e && f(t, e)
                    }(n, t);
                    var e = E(n);

                    function n() {
                        l(this, n);
                        return e.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.getIntegrations = function(t) {
                        var e;
                        return null !== (e = O.get(t)) && void 0 !== e ? e : T
                    };
                    r.getIntegration = function(t, e) {
                        var n;
                        return null === (n = O.get(t)) || void 0 === n ? void 0 : n.find((function(t) {
                            return t.application.id === e
                        }))
                    };
                    r.getAllIntegrations = function() {
                        return O
                    };
                    r.getIntegrationsFetchState = function(t) {
                        var e;
                        return null !== (e = I.get(t)) && void 0 !== e ? e : p.NOT_FETCHED
                    };
                    r.getApplicationsShelfFetchState = function() {
                        return h
                    };
                    r.getApplicationsShelf = function() {
                        return S
                    };
                    r.__getLocalVars = function() {
                        return {
                            integrationsByChannel: O,
                            integrationsByChannelFetchState: I,
                            applicationsShelf: S,
                            applicationsShelfFetchState: h,
                            EMPTY: T,
                            store: N
                        }
                    };
                    return n
                }(r.ZP.Store);
            y.displayName = "PrivateChannelIntegrationStore";

            function v(t) {
                return t.sort((function(t, e) {
                    return t.application.name.localeCompare(e.application.name)
                }))
            }
            var N = new y(o.Z, {
                LOGOUT: function() {
                    O.clear()
                },
                CONNECTION_OPEN: function() {
                    O.clear();
                    I.clear()
                },
                CHANNEL_SELECT: function(t) {
                    var e = t.channelId;
                    if (null == e || I.get(e) !== p.FETCH_FAILED) return !1;
                    I.set(e, p.NOT_FETCHED)
                },
                APPLICATIONS_SHELF_FETCH_START: function() {
                    h = p.FETCHING
                },
                APPLICATIONS_SHELF_FETCH_SUCCESS: function(t) {
                    var e = t.applications;
                    S = e.map(i.Z.createFromServer).sort((function(t, e) {
                        return t.name.localeCompare(e.name)
                    }));
                    h = p.FETCHED
                },
                APPLICATIONS_SHELF_FETCH_FAIL: function() {
                    h = p.FETCH_FAILED
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START: function(t) {
                    var e = t.channelId;
                    O.set(e, null);
                    I.set(e, p.FETCHING)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS: function(t) {
                    var e = t.channelId,
                        n = t.integrations;
                    O.set(e, v(n.map(u.F)));
                    I.set(e, p.FETCHED)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL: function(t) {
                    var e = t.channelId;
                    I.set(e, p.FETCH_FAILED)
                },
                PRIVATE_CHANNEL_INTEGRATION_CREATE: function(t) {
                    var e = t.integration,
                        n = O.get(e.channel_id);
                    if (null == n) return !1;
                    O.set(e.channel_id, v(_(n).concat([(0, u.F)(e)])))
                },
                PRIVATE_CHANNEL_INTEGRATION_UPDATE: function(t) {
                    var e = t.integration,
                        n = O.get(e.channel_id);
                    if (null == n) return !1;
                    var r = (0, u.F)(e),
                        o = n.findIndex((function(t) {
                            return t.application.id === r.application.id
                        })),
                        i = _(n); - 1 === o ? i.push(r) : i[o] = r;
                    O.set(r.channel_id, v(i))
                },
                PRIVATE_CHANNEL_INTEGRATION_DELETE: function(t) {
                    var e = t.channelId,
                        n = t.applicationId,
                        r = O.get(e);
                    if (null == r) return !1;
                    O.set(e, r.filter((function(t) {
                        return t.application.id !== n
                    })))
                },
                CHANNEL_DELETE: function(t) {
                    var e = t.channel;
                    return O.delete(e.id)
                }
            });
            const b = N
        },
        232806: (t, e, n) => {
            "use strict";
            n.d(e, {
                xV: () => i,
                dp: () => u,
                X7: () => a,
                E1: () => l,
                f7: () => c,
                HE: () => s,
                SJ: () => f
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

            function o(t, e) {
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
            var i, u;
            ! function(t) {
                t[t.BACKGROUND = 0] = "BACKGROUND"
            }(i || (i = {}));
            ! function(t) {
                t[t.OPTION_1 = 0] = "OPTION_1";
                t[t.OPTION_2 = 1] = "OPTION_2";
                t[t.OPTION_3 = 2] = "OPTION_3";
                t[t.OPTION_4 = 3] = "OPTION_4";
                t[t.OPTION_7 = 7] = "OPTION_7";
                t[t.OPTION_8 = 8] = "OPTION_8";
                t[t.OPTION_9 = 9] = "OPTION_9";
                t[t.OPTION_10 = 10] = "OPTION_10"
            }(u || (u = {}));
            var a = [u.OPTION_7, u.OPTION_8, u.OPTION_9, u.OPTION_10],
                l = [u.OPTION_7, u.OPTION_8, u.OPTION_9, u.OPTION_10, u.OPTION_1, u.OPTION_2, u.OPTION_3, u.OPTION_4].reduce((function(t, e, n) {
                    return o(function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                o = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                                return Object.getOwnPropertyDescriptor(n, t).enumerable
                            }))));
                            o.forEach((function(e) {
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
                f = 10485760
        },
        205294: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => c
            });
            var r = n(169376);

            function o(t) {
                o = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return o(t)
            }

            function i(t, e) {
                return !e || "object" !== a(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function u(t, e) {
                u = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return u(t, e)
            }
            var a = function(t) {
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
                    var n, r = o(t);
                    if (e) {
                        var u = o(this).constructor;
                        n = Reflect.construct(r, arguments, u)
                    } else n = r.apply(this, arguments);
                    return i(this, n)
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
                    e && u(t, e)
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
                Z: () => O
            });
            var r = n(202351),
                o = n(744564);

            function i(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function u(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function a(t) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return a(t)
            }

            function l(t, e) {
                return !e || "object" !== f(e) && "function" != typeof e ? function(t) {
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
                    if (Array.isArray(t)) return i(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return i(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var f = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function _(t) {
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
                        var o = a(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var p = [];

            function d() {
                p = []
            }
            var E = function(t) {
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
                var e = _(n);

                function n() {
                    u(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.hasLayers = function() {
                    return p.length > 0
                };
                r.getLayers = function() {
                    return p
                };
                r.__getLocalVars = function() {
                    return {
                        layers: p
                    }
                };
                return n
            }(r.ZP.Store);
            E.displayName = "LayerStore";
            const O = new E(o.Z, {
                LAYER_PUSH: function(t) {
                    var e = t.component;
                    if (p.indexOf(e) >= 0) return !1;
                    p = s(p).concat([e])
                },
                LAYER_POP: function() {
                    if (0 === p.length) return !1;
                    p = p.slice(0, -1)
                },
                LAYER_POP_ALL: d,
                LOGOUT: d,
                NOTIFICATION_CLICK: d
            })
        },
        491260: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => k
            });
            var r = n(110251),
                o = n.n(r),
                i = n(496486),
                u = n.n(i),
                a = n(202351),
                l = n(744564),
                c = n(83797),
                s = n(664625),
                f = n(473903),
                _ = n(2590);

            function p(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function d(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function E(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function O(t) {
                O = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return O(t)
            }

            function I(t, e) {
                return !e || "object" !== y(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function S(t, e) {
                S = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return S(t, e)
            }

            function h(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (e && i.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            o = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || v(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function T(t) {
                return function(t) {
                    if (Array.isArray(t)) return p(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || v(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var y = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function v(t, e) {
                if (t) {
                    if ("string" == typeof t) return p(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(t, e) : void 0
                }
            }

            function N(t) {
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
                    var n, r = O(t);
                    if (e) {
                        var o = O(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return I(this, n)
                }
            }
            var b = Object.freeze([]),
                g = {},
                m = {},
                R = {},
                A = {},
                P = {};

            function C(t, e) {
                var n = g[t];
                return null != n ? n[e] : null
            }
            var L = function(t) {
                switch (t.type) {
                    case _.IIU.CUSTOM_STATUS:
                        return 4;
                    case _.IIU.COMPETING:
                        return 3;
                    case _.IIU.STREAMING:
                        return 2;
                    case _.IIU.PLAYING:
                        return 1;
                    default:
                        return 0
                }
            };
            var w = function(t) {
                return (0, c.Z)(t) ? 1 : 0
            };

            function M(t, e) {
                return function(t, e) {
                    return L(e) - L(t)
                }(t, e) || function(t, e) {
                    return w(e) - w(t)
                }(t, e) || function(t, e) {
                    var n, r;
                    return (null !== (n = e.created_at) && void 0 !== n ? n : 0) - (null !== (r = t.created_at) && void 0 !== r ? r : 0)
                }(t, e)
            }

            function U(t) {
                delete m[t];
                delete R[t];
                delete A[t];
                if (null != g[t]) {
                    var e = h(u().sortBy(g[t], (function(t) {
                            return -t.timestamp
                        })), 1),
                        n = e[0];
                    if (n.status !== _.Skl.OFFLINE) {
                        m[t] = n.status;
                        R[t] = n.activities;
                        null != n.clientStatus && (A[t] = n.clientStatus)
                    } else u().every(g[t], (function(t) {
                        return t.status === _.Skl.OFFLINE
                    })) && delete g[t]
                }
            }

            function D(t) {
                var e = g[t];
                if (null != e) {
                    var n = u().maxBy(Object.values(e), (function(t) {
                        return t.timestamp
                    }));
                    if (n.status !== _.Skl.OFFLINE) {
                        m[t] = n.status;
                        R[t] = n.activities;
                        null != n.clientStatus && (A[t] = n.clientStatus)
                    }
                }
            }

            function j(t) {
                var e = t.guildId,
                    n = t.userId,
                    r = t.status,
                    i = t.clientStatus,
                    u = t.activities;
                if (n === s.default.getId()) return !1;
                var a = g[n];
                if (null == a) {
                    if (r === _.Skl.OFFLINE) return !1;
                    a = g[n] = {}
                }
                if (r === _.Skl.OFFLINE) a[e] = {
                    status: r,
                    clientStatus: i,
                    activities: b,
                    timestamp: Date.now()
                };
                else {
                    var l = u.length > 1 ? T(u).sort(M) : u,
                        c = a[e];
                    u = null != c && o()(c.activities, l) ? c.activities : l;
                    a[e] = {
                        status: r,
                        clientStatus: i,
                        activities: u,
                        timestamp: Date.now()
                    }
                }
                delete P[n];
                U(n);
                return !0
            }

            function G(t) {
                var e = t.guildId,
                    n = t.userId,
                    r = t.status,
                    o = t.clientStatus,
                    i = t.activities,
                    u = t.timestamp;
                if (n !== s.default.getId()) {
                    var a = g[n];
                    if (null == a) {
                        if (r === _.Skl.OFFLINE) return;
                        a = g[n] = {}
                    }
                    if (r === _.Skl.OFFLINE) a[e] = {
                        status: r,
                        clientStatus: o,
                        activities: b,
                        timestamp: Date.now()
                    };
                    else {
                        var l = i.length > 1 ? T(i).sort(M) : i;
                        a[e] = {
                            status: r,
                            clientStatus: o,
                            activities: l,
                            timestamp: u
                        }
                    }
                }
            }

            function x(t, e) {
                if (e === s.default.getId()) return !1;
                var n = g[e];
                if (null == n || null == n[t]) return !1;
                delete n[t];
                0 === Object.keys(n).length && delete g[e];
                U(e)
            }

            function F(t) {
                var e = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var o, i = Object.keys(g)[Symbol.iterator](); !(e = (o = i.next()).done); e = !0) {
                        x(t, o.value)
                    }
                } catch (t) {
                    n = !0;
                    r = t
                } finally {
                    try {
                        e || null == i.return || i.return()
                    } finally {
                        if (n) throw r
                    }
                }
            }
            var H = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && S(t, e)
                }(n, t);
                var e = N(n);

                function n() {
                    d(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(s.default)
                };
                r.setCurrentUserOnConnectionOpen = function(t, e) {
                    m[s.default.getId()] = t;
                    R[s.default.getId()] = e
                };
                r.getStatus = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.Skl.OFFLINE,
                        r = f.default.getUser(t);
                    null != r && r.hasFlag(_.xW$.BOT_HTTP_INTERACTIONS) && (n = _.Skl.UNKNOWN);
                    if (null == r ? void 0 : r.isClyde()) return _.Skl.ONLINE;
                    if (null == e) {
                        var o;
                        return null !== (o = m[t]) && void 0 !== o ? o : n
                    }
                    var i, u = C(t, e);
                    return null !== (i = null == u ? void 0 : u.status) && void 0 !== i ? i : n
                };
                r.getActivities = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == e) {
                        var n;
                        return null !== (n = R[t]) && void 0 !== n ? n : b
                    }
                    var r = C(t, e);
                    return null == r || null == r.activities ? b : r.activities
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
                        o = void 0;
                    try {
                        for (var i, u = Object.keys(R)[Symbol.iterator](); !(n = (i = u.next()).done); n = !0) {
                            var a = i.value,
                                l = R[a],
                                c = !0,
                                s = !1,
                                f = void 0;
                            try {
                                for (var _, p = l[Symbol.iterator](); !(c = (_ = p.next()).done); c = !0) {
                                    var d = _.value;
                                    d.application_id === t && e.push({
                                        userId: a,
                                        activity: d
                                    })
                                }
                            } catch (t) {
                                s = !0;
                                f = t
                            } finally {
                                try {
                                    c || null == p.return || p.return()
                                } finally {
                                    if (s) throw f
                                }
                            }
                        }
                    } catch (t) {
                        r = !0;
                        o = t
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (r) throw o
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
                    return P[t]
                };
                r.getUserIds = function() {
                    return Object.keys(R)
                };
                r.isMobileOnline = function(t) {
                    var e = A[t];
                    return null != e && e[_.X5t.MOBILE] === _.Skl.ONLINE && e[_.X5t.DESKTOP] !== _.Skl.ONLINE
                };
                r.getState = function() {
                    return {
                        presencesForGuilds: g,
                        statuses: m,
                        activities: R,
                        activityMetadata: P,
                        clientStatuses: A
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        NO_ACTIVITIES: b,
                        presencesForGuilds: g,
                        statuses: m,
                        activities: R,
                        clientStatuses: A,
                        activityMetadata: P,
                        typeScore: L,
                        richnessScore: w
                    }
                };
                return n
            }(a.ZP.Store);
            H.displayName = "PresenceStore";
            const k = new H(l.Z, {
                CONNECTION_OPEN: function() {
                    return !0
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(t) {
                    var e = t.guilds,
                        n = t.presences,
                        r = s.default.getId();
                    g = {};
                    P = {};
                    m = E({}, r, m[r]);
                    R = E({}, r, R[r]);
                    A = E({}, r, {});
                    var o = new Set,
                        i = Date.now();
                    e.forEach((function(t) {
                        t.presences.forEach((function(e) {
                            var n = e.user,
                                r = e.status,
                                u = e.clientStatus,
                                a = e.activities;
                            G({
                                guildId: t.id,
                                userId: n.id,
                                status: r,
                                clientStatus: u,
                                activities: a,
                                timestamp: i
                            });
                            o.add(n.id)
                        }))
                    }));
                    n.forEach((function(t) {
                        var e = t.user,
                            n = t.status,
                            r = t.clientStatus,
                            u = t.activities;
                        if (null != e) {
                            G({
                                guildId: _.ME,
                                userId: e.id,
                                status: n,
                                clientStatus: r,
                                activities: u,
                                timestamp: i
                            });
                            o.add(e.id)
                        }
                    }));
                    o.delete(r);
                    o.forEach(D)
                },
                OVERLAY_INITIALIZE: function(t) {
                    var e = t.presences;
                    g = e.presencesForGuilds;
                    m = e.statuses;
                    R = e.activities;
                    P = e.activityMetadata
                },
                GUILD_CREATE: function(t) {
                    var e = t.guild;
                    e.presences.forEach((function(t) {
                        var n = t.user,
                            r = t.status,
                            o = t.clientStatus,
                            i = t.activities;
                        j({
                            guildId: e.id,
                            userId: n.id,
                            status: r,
                            clientStatus: o,
                            activities: i
                        })
                    }))
                },
                GUILD_DELETE: function(t) {
                    F(t.guild.id)
                },
                GUILD_MEMBER_REMOVE: function(t) {
                    return x(t.guildId, t.user.id)
                },
                PRESENCE_UPDATES: function(t) {
                    return t.updates.map((function(t) {
                        var e = t.guildId,
                            n = t.user,
                            r = t.status,
                            o = t.clientStatus,
                            i = t.activities;
                        return j({
                            guildId: null != e ? e : _.ME,
                            userId: n.id,
                            status: r,
                            clientStatus: o,
                            activities: i
                        })
                    })).some((function(t) {
                        return t
                    }))
                },
                PRESENCES_REPLACE: function(t) {
                    var e = t.presences;
                    F(_.ME);
                    e.forEach((function(t) {
                        var e = t.user,
                            n = t.status,
                            r = t.clientStatus,
                            o = t.activities;
                        null != e && j({
                            guildId: _.ME,
                            userId: e.id,
                            status: n,
                            clientStatus: r,
                            activities: o
                        })
                    }))
                },
                ACTIVITY_METADATA_UPDATE: function(t) {
                    var e = t.userId,
                        n = t.metadata;
                    P[e] = n;
                    return !1
                },
                THREAD_MEMBER_LIST_UPDATE: function(t) {
                    var e = t.guildId;
                    t.members.forEach((function(t) {
                        null != t.presence && j({
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
                        null != t.presence && j({
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
                    if (m[e] === t.status && R[e] === t.activities) return !1;
                    m[e] = t.status;
                    R[e] = t.activities;
                    delete P[e]
                }
            })
        },
        223219: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => x
            });
            var r = n(496486),
                o = n.n(r),
                i = n(202351),
                u = n(744564),
                a = n(473903),
                l = n(2590);

            function c(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(t, r.key, r)
                }
            }

            function f(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function _(t) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return _(t)
            }

            function p(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        f(t, e, n[e])
                    }))
                }
                return t
            }

            function d(t, e) {
                return !e || "object" !== O(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function E(t, e) {
                E = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return E(t, e)
            }
            var O = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function I(t) {
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
                    var n, r = _(t);
                    if (e) {
                        var o = _(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }
            var S = l.QZA.CLOSED,
                h = null,
                T = null,
                y = {},
                v = {},
                N = {},
                b = null,
                g = null,
                m = !1,
                R = !1,
                A = null,
                P = null,
                C = null,
                L = [],
                w = null,
                M = null;

            function U(t) {
                var e, n, r, o, i, u, c = a.default.getCurrentUser();
                if (null == c) return D();
                T = null !== (e = t.section) && void 0 !== e ? e : T;
                w = null !== (n = t.section) && void 0 !== n ? n : T;
                null != t.subsection && null != T && (y[T] = t.subsection);
                null != t.scrollPosition && null != T && (v[T] = t.scrollPosition);
                R = !!t.openWithoutBackstack;
                S = l.QZA.OPEN;
                N = {};
                b = f({}, l.oAB.ACCOUNT, {
                    userId: c.id,
                    username: c.username,
                    discriminator: c.discriminator,
                    email: c.email,
                    avatar: c.avatar,
                    password: "",
                    newPassword: null,
                    claimed: c.isClaimed()
                });
                g = p({}, b);
                P = null !== (r = t.onClose) && void 0 !== r ? r : null;
                C = null !== (o = t.analyticsLocation) && void 0 !== o ? o : null;
                L = null !== (i = t.analyticsLocations) && void 0 !== i ? i : [];
                M = null !== (u = t.impressionSource) && void 0 !== u ? u : null
            }

            function D() {
                S = l.QZA.CLOSED;
                m = !1;
                b = null;
                w = null;
                g = null;
                h = null;
                T = null;
                y = {};
                v = {};
                P = null;
                C = null;
                L = [];
                M = null
            }

            function j() {
                S = l.QZA.OPEN;
                N = {}
            }
            var G = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && E(t, e)
                }(n, t);
                var e = I(n);

                function n() {
                    c(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(a.default)
                };
                r.hasChanges = function() {
                    return null != g && null != b && (!(!this.isOpen() && A !== l.cII.USER_SETTINGS) && !o().isEqual(g, b))
                };
                r.isOpen = function() {
                    return m
                };
                r.getPreviousSection = function() {
                    return h
                };
                r.getSection = function() {
                    return T
                };
                r.getSubsection = function() {
                    return null != T ? y[T] : null
                };
                r.getScrollPosition = function() {
                    return null != T ? v[T] : null
                };
                r.shouldOpenWithoutBackstack = function() {
                    return R
                };
                r.getProps = function() {
                    return {
                        submitting: S === l.QZA.SUBMITTING,
                        section: T,
                        subsection: null != T ? y[T] : null,
                        scrollPosition: null != T ? v[T] : null,
                        settings: g,
                        errors: N,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: R,
                        analyticsLocation: C,
                        analyticsLocations: L,
                        initialSection: w,
                        impressionSource: M
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        formState: S,
                        previousSection: h,
                        section: T,
                        subsections: y,
                        scrollPositions: v,
                        errors: N,
                        originalSettings: b,
                        settings: g,
                        open: m,
                        openWithoutBackstack: R,
                        tab: A,
                        onClose: P,
                        analyticsLocation: C,
                        analyticsLocations: L,
                        initialSection: w,
                        impressionSource: M
                    }
                };
                ! function(t, e, n) {
                    e && s(t.prototype, e);
                    n && s(t, n)
                }(n, [{
                    key: "onClose",
                    get: function() {
                        return P
                    }
                }]);
                return n
            }(i.ZP.Store);
            G.displayName = "UserSettingsModalStore";
            const x = new G(u.Z, {
                USER_SETTINGS_MODAL_OPEN: function(t) {
                    m = !0;
                    U(t)
                },
                USER_SETTINGS_MODAL_INIT: U,
                USER_SETTINGS_MODAL_CLOSE: D,
                LOGOUT: D,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    S = l.QZA.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(t) {
                    if (S !== l.QZA.SUBMITTING) return !1;
                    S = l.QZA.OPEN;
                    T = l.oAB.ACCOUNT;
                    var e;
                    N = null !== (e = t.errors) && void 0 !== e ? e : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(t) {
                    h = T;
                    T = t.section;
                    C = null;
                    var e;
                    L = null !== (e = t.analyticsLocations) && void 0 !== e ? e : [];
                    null != t.subsection && (y[T] = t.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(t) {
                    var e = t.forSection;
                    null != e ? delete y[e] : null != T && delete y[T]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(t) {
                    var e = t.forSection;
                    null != e ? delete v[e] : null != T && delete v[T]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(t) {
                    var e = t.settings;
                    null == g && (g = {});
                    var n = g[l.oAB.ACCOUNT];
                    g[l.oAB.ACCOUNT] = p({}, n, e)
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: j,
                USER_SETTINGS_MODAL_RESET: function() {
                    var t = a.default.getCurrentUser();
                    j();
                    if (null != t) {
                        b = f({}, l.oAB.ACCOUNT, {
                            userId: t.id,
                            username: t.username,
                            discriminator: t.discriminator,
                            email: t.email,
                            avatar: t.avatar,
                            password: "",
                            newPassword: null,
                            claimed: t.isClaimed()
                        });
                        g = p({}, b)
                    }
                },
                DRAWER_SELECT_TAB: function(t) {
                    A = t.tab;
                    return null == T && A === l.cII.USER_SETTINGS && U({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        449401: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => l
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function u(t, e) {
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

            function a(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || (o[n] = t[n])
                    }
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                    }
                }
                return o
            }

            function l(t) {
                var e = t.width,
                    n = void 0 === e ? 16 : e,
                    l = t.height,
                    c = void 0 === l ? 16 : l,
                    s = t.color,
                    f = void 0 === s ? "currentColor" : s,
                    _ = t.foreground,
                    p = a(t, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", u(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            i(t, e, n[e])
                        }))
                    }
                    return t
                }({}, (0, o.Z)(p)), {
                    width: n,
                    height: c,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        d: "M12 2C6.4764 2 2 6.4764 2 12C2 17.5236 6.4764 22 12 22C17.5236 22 22 17.5236 22 12C22 6.4764 17.5236 2 12 2ZM12 5.6C12.4422 5.6 12.8 5.95781 12.8 6.4V11.5376L16.5625 13.7126C16.9453 13.9329 17.0703 14.4173 16.85 14.8001C16.6297 15.183 16.1453 15.3079 15.7625 15.0876L11.6873 12.7376C11.656 12.7251 11.6279 12.7048 11.5998 12.6876C11.3607 12.5486 11.1998 12.2954 11.1998 12.0001V6.4001C11.1998 5.9579 11.5578 5.6 12 5.6Z",
                        fill: f,
                        className: _
                    })
                }))
            }
        },
        349491: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => l
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function u(t, e) {
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

            function a(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || (o[n] = t[n])
                    }
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                    }
                }
                return o
            }

            function l(t) {
                var e = t.width,
                    n = void 0 === e ? 24 : e,
                    l = t.height,
                    c = void 0 === l ? 24 : l,
                    s = t.color,
                    f = void 0 === s ? "currentColor" : s,
                    _ = t.className,
                    p = t.foreground,
                    d = a(t, ["width", "height", "color", "className", "foreground"]);
                return (0, r.jsx)("svg", u(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            i(t, e, n[e])
                        }))
                    }
                    return t
                }({
                    width: n,
                    height: c,
                    className: _,
                    viewBox: "0 0 24 24"
                }, (0, o.Z)(d)), {
                    children: (0, r.jsx)("path", {
                        className: p,
                        fill: f,
                        d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z",
                        "aria-hidden": !0
                    })
                }))
            }
        },
        128181: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => l
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function u(t, e) {
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

            function a(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || (o[n] = t[n])
                    }
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                    }
                }
                return o
            }

            function l(t) {
                var e = t.width,
                    n = void 0 === e ? 16 : e,
                    l = t.height,
                    c = void 0 === l ? 16 : l,
                    s = t.color,
                    f = void 0 === s ? "currentColor" : s,
                    _ = a(t, ["width", "height", "color"]);
                return (0, r.jsx)("svg", u(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            i(t, e, n[e])
                        }))
                    }
                    return t
                }({}, (0, o.Z)(_)), {
                    width: n,
                    height: c,
                    viewBox: "0 0 16 15.2",
                    children: (0, r.jsx)("path", {
                        d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                        fill: f
                    })
                }))
            }
        },
        488110: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => O
            });
            var r = n(473903),
                o = n(496486),
                i = function(t) {
                    return "function" == typeof t ? t() : t
                };
            n.n(o)().curry((function(t, e, n) {
                return i(e) ? t(n) : n({})
            }));

            function u(t, e, n) {
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
                        u(t, e, n[e])
                    }))
                }
                return t
            }

            function l(t, e) {
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

            function c(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || (o[n] = t[n])
                    }
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                    }
                }
                return o
            }
            var s, f, _ = function() {
                    throw new Error("updateModal has not been implemented.")
                },
                p = n(680918);
            s = p.showModal;
            _ = p.updateModalProps;
            f = n(264817).Mr;

            function d(t) {
                var e = t.promiseFn,
                    n = t.resolve,
                    r = t.reject,
                    o = t.modalProps,
                    i = void 0 === o ? {} : o,
                    u = t.hooks,
                    c = (void 0 === u ? {} : u).onEarlyClose,
                    p = function() {
                        null == c || c()
                    },
                    d = function(t) {
                        f(S);
                        n(t)
                    },
                    O = function(t) {
                        f(S);
                        r(t)
                    },
                    I = function(t) {
                        var e = t.res;
                        _(S, h, p, l(a({}, i), {
                            error: e.body.message
                        }))
                    };
                if (null != s) var S = s(h, p, i);
                else null == c || c();

                function h(t) {
                    _(S, h, p, l(a({}, i), {
                        isLoading: !0
                    }));
                    return E({
                        promiseFn: e,
                        resolve: d,
                        reject: O,
                        code: t,
                        mfaCodeHandler: I,
                        isModalOpen: !0
                    })
                }
            }

            function E(t) {
                var e = t.promiseFn,
                    n = t.resolve,
                    r = t.reject,
                    o = t.code,
                    i = t.mfaCodeHandler,
                    u = void 0 === i ? d : i,
                    l = t.isModalOpen,
                    s = void 0 !== l && l,
                    f = c(t, ["promiseFn", "resolve", "reject", "code", "mfaCodeHandler", "isModalOpen"]);
                return e(null != o ? {
                    code: o
                } : {}).then(n, (function(t) {
                    if (function(t, e) {
                            return t.body && 60008 === t.body.code || e && 429 === t.status
                        }(t, s)) return u(a({
                        promiseFn: e,
                        resolve: n,
                        reject: r,
                        res: t
                    }, f));
                    r(t)
                }))
            }

            function O(t, e) {
                var n, o, u = null != e ? e : {},
                    l = u.checkEnabled,
                    s = void 0 === l ? null !== (o = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== o && o : l,
                    f = c(u, ["checkEnabled"]);
                return new Promise((function(e, n) {
                    (i(s) ? d : E)(a({
                        promiseFn: t,
                        resolve: e,
                        reject: n
                    }, f))
                }))
            }
        },
        73105: (t, e, n) => {
            "use strict";
            n.d(e, {
                RD: () => W,
                WA: () => k,
                f5: () => F,
                Gb: () => M,
                Rs: () => B,
                _2: () => V,
                gL: () => D,
                fG: () => G
            });
            var r = n(306472),
                o = n(737264),
                i = n(496486),
                u = n.n(i),
                a = n(809784),
                l = n(296602),
                c = n(384411),
                s = n(72580),
                f = n(310126);

            function _(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(t, r.key, r)
                }
            }
            var p = function() {
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
                                    return f.ZP.ensureModule("discord_spellcheck").then((function() {
                                        var n = f.ZP.requireModule("discord_spellcheck").cld;
                                        return new Promise((function(r, o) {
                                            n.detect(t, {
                                                httpHint: e,
                                                encodingHint: "UTF8"
                                            }, (function(t, e) {
                                                null != t ? o(new Error(t.message)) : !e.reliable || e.languages[0].percent < 90 || e.languages[0].score < 500 ? o(new Error("Not enough reliable text.")) : r(e.languages[0].code)
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
                    e && _(t.prototype, e);
                    n && _(t, n)
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
            const d = {
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

            function E(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function O(t, e, n, r, o, i, u) {
                try {
                    var a = t[i](u),
                        l = a.value
                } catch (t) {
                    n(t);
                    return
                }
                a.done ? e(l) : Promise.resolve(l).then(r, o)
            }

            function I(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = t.apply(e, n);

                        function u(t) {
                            O(i, r, o, u, a, "next", t)
                        }

                        function a(t) {
                            O(i, r, o, u, a, "throw", t)
                        }
                        u(void 0)
                    }))
                }
            }

            function S(t, e) {
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
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (e && i.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            o = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return E(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var T = function(t, e) {
                    var n, r, o, i, u = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                u.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && u.label < o[1]) {
                                                u.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && u.label < o[2]) {
                                                u.label = o[2];
                                                u.ops.push(i);
                                                break
                                            }
                                            o[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, u)
                                } catch (t) {
                                    i = [6, t];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                },
                y = new l.Z("Spellchecker"),
                v = null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck;

            function N(t) {
                var e;
                t = null !== (e = d[t]) && void 0 !== e ? e : t;
                var n = (0, o.Q)(t.replace(/[_-]/g, "-"));
                if (null != n && null != n.langtag.language && null != n.langtag.region) {
                    var r = n.langtag,
                        i = r.language,
                        u = r.region;
                    return "".concat(i.language.toLowerCase(), "-").concat(u.toUpperCase())
                }
                y.error("".concat(t, " is not a valid locale."))
            }
            var b = function() {
                    function t(e) {
                        var n = this;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        this._enabled = !0;
                        this.misspelledWord = "";
                        this.corrections = [];
                        var r = h(c.default.locale.split("-"), 2),
                            o = r[0],
                            i = r[1];
                        this.regionPreference = i;
                        var u = this.getAvailableLanguages(e);
                        this.languageDetector = new p(o, (function(t) {
                            var r = "".concat(t, "-").concat(n.regionPreference);
                            if (-1 !== e.indexOf(r)) n.setLocale(r);
                            else {
                                var i, a = null !== (i = u[t]) && void 0 !== i ? i : d[o];
                                null != a && n.setLocale(a)
                            }
                        }));
                        v.on("spellcheck-result", (function(t, e) {
                            n.misspelledWord = null != t ? t : "";
                            n.corrections = null != e ? e : []
                        }))
                    }
                    var e = t.prototype;
                    e.setLearnedWords = function(t) {
                        v.setLearnedWords(t)
                    };
                    e.setLocale = function(t) {
                        var e;
                        null === (e = v.setLocale(t)) || void 0 === e || e.then((function(e) {
                            y.info("Switching to ".concat(t), e ? "(available)" : "(unavailable)")
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
                        v.replaceMisspelling(t)
                    };
                    ! function(t, e, n) {
                        e && S(t.prototype, e);
                        n && S(t, n)
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
                g = u().debounce((function(t, e) {
                    var n = function(t) {
                        if (null == t) return null;
                        if ((0, a.k)(t, HTMLInputElement) || (0, a.k)(t, HTMLTextAreaElement)) return t.value;
                        if ((0, a.k)(t) && t.hasAttribute("contenteditable")) return t.textContent
                    }(e);
                    null != n && t.detectLanguage(n)
                }), 250);

            function m(t) {
                null != document.body && document.body.addEventListener("beforeinput", (function(e) {
                    return g(t, e.target)
                }), !0)
            }

            function R() {
                return (R = I((function() {
                    var t, e, n, r;
                    return T(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, v.getAvailableDictionaries()];
                            case 1:
                                e = null !== (t = o.sent()) && void 0 !== t ? t : [];
                                n = e.map(N).filter(s.lm);
                                m(r = new b(n));
                                return [2, r]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var A = n(120415);

            function P(t, e, n, r, o, i, u) {
                try {
                    var a = t[i](u),
                        l = a.value
                } catch (t) {
                    n(t);
                    return
                }
                a.done ? e(l) : Promise.resolve(l).then(r, o)
            }

            function C(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = t.apply(e, n);

                        function u(t) {
                            P(i, r, o, u, a, "next", t)
                        }

                        function a(t) {
                            P(i, r, o, u, a, "throw", t)
                        }
                        u(void 0)
                    }))
                }
            }
            var L = function(t, e) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = e.call(t, u)
                            } catch (t) {
                                i = [6, t];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            };

            function w() {
                return null != (null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck)
            }

            function M() {
                return (0, A.nI)() && w()
            }
            var U = M() ? function() {
                return R.apply(this, arguments)
            }() : null;

            function D(t) {
                return j.apply(this, arguments)
            }

            function j() {
                return (j = C((function(t) {
                    var e;
                    return L(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, U];
                            case 1:
                                if (null == (e = n.sent())) return [2];
                                e.enabled = t;
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function G(t) {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = C((function(t) {
                    var e;
                    return L(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, U];
                            case 1:
                                if (null == (e = n.sent())) return [2];
                                e.setLearnedWords(t);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function F(t) {
                return H.apply(this, arguments)
            }

            function H() {
                H = C((function(t) {
                    var e, n, r = arguments;
                    return L(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                e = r.length > 1 && void 0 !== r[1] && r[1];
                                return [4, U];
                            case 1:
                                return null == (n = o.sent()) ? [2, !1] : [2, n.isMisspelled(t, e)]
                        }
                    }))
                }));
                return H.apply(this, arguments)
            }

            function k(t) {
                return Z.apply(this, arguments)
            }

            function Z() {
                Z = C((function(t) {
                    var e, n, r, o = arguments;
                    return L(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                e = o.length > 1 && void 0 !== o[1] && o[1], n = o.length > 2 && void 0 !== o[2] ? o[2] : 5;
                                return [4, U];
                            case 1:
                                return null == (r = i.sent()) ? [2, []] : [2, r.getCorrectionsForMisspelling(t, e).slice(0, n)]
                        }
                    }))
                }));
                return Z.apply(this, arguments)
            }

            function B(t) {
                return K.apply(this, arguments)
            }

            function K() {
                return (K = C((function(t) {
                    var e;
                    return L(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, U];
                            case 1:
                                if (null == (e = n.sent())) return [2];
                                e.replaceMisspelling(t);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function V(t) {
                return Y.apply(this, arguments)
            }

            function Y() {
                return (Y = C((function(t) {
                    var e;
                    return L(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, U];
                            case 1:
                                if (null == (e = n.sent())) return [2];
                                e.setAppLocale(t);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function W(t) {
                if (!w()) return function() {};
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
                o = n(652591);

            function i(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        i(t, e, n[e])
                    }))
                }
                return t
            }

            function a(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || (o[n] = t[n])
                    }
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                    }
                }
                return o
            }

            function l(t, e, n) {
                var r = e.trackedActionData,
                    i = a(e, ["trackedActionData"]),
                    l = {
                        url: i.url,
                        request_method: n
                    };
                return new Promise((function(e, n) {
                    t(i).then((function(t) {
                        var n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(t));
                        (0, o.trackNetworkAction)(r.event, u({
                            status_code: t.status
                        }, l, n));
                        e(t)
                    })).catch((function(t) {
                        var e, i, a = r.properties;
                        "function" == typeof r.properties && (a = r.properties(t));
                        (0, o.trackNetworkAction)(r.event, u({
                            status_code: t.status,
                            error_code: null === (e = t.body) || void 0 === e ? void 0 : e.code,
                            error_message: null === (i = t.body) || void 0 === i ? void 0 : i.message
                        }, l, a));
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
        680918: (t, e, n) => {
            "use strict";
            n.r(e);
            n.d(e, {
                showModal: () => l,
                updateModalProps: () => c
            });
            var r = n(785893),
                o = (n(667294), n(264817)),
                i = n(919244);

            function u(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }
            var a = function(t, e, n) {
                return function(o) {
                    return (0, r.jsx)(i.Z, function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                                return Object.getOwnPropertyDescriptor(n, t).enumerable
                            }))));
                            r.forEach((function(e) {
                                u(t, e, n[e])
                            }))
                        }
                        return t
                    }({
                        handleSubmit: t,
                        handleEarlyClose: e
                    }, n, o))
                }
            };

            function l(t, e, n) {
                return (0, o.h7)(a(t, e, n), {
                    onCloseCallback: e
                })
            }

            function c(t, e, n, r) {
                return (0, o.o)(t, a(e, n, r))
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
        989824: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => i
            });
            var r = n(667294),
                o = {};

            function i(t) {
                var e = (0, r.useRef)(o);
                e.current === o && (e.current = t());
                return e.current
            }
        }
    }
]);