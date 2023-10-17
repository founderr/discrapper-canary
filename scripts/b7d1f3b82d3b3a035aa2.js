(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [99523, 58635, 93364, 88110, 96043, 71402], {
        737264: e => {
            "use strict";
            e.exports.Q = function(e) {
                var t, n = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!n) return null;
                n.shift();
                var r = null,
                    o = [];
                if (n[2]) {
                    r = (t = n[2].split("-")).shift();
                    o = t
                }
                var i = [];
                n[5] && (i = n[5].split("-")).shift();
                var a = [];
                if (n[6]) {
                    (t = n[6].split("-")).shift();
                    for (var u, s = []; t.length;) {
                        var l = t.shift();
                        if (1 === l.length)
                            if (u) {
                                a.push({
                                    singleton: u,
                                    extension: s
                                });
                                u = l;
                                s = []
                            } else u = l;
                        else s.push(l)
                    }
                    a.push({
                        singleton: u,
                        extension: s
                    })
                }
                var c = [];
                if (n[7]) {
                    (c = n[7].split("-")).shift();
                    c.shift()
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
                        extension: a,
                        privateuse: c
                    },
                    privateuse: f,
                    grandfathered: {
                        irregular: n[0] || null,
                        regular: n[1] || null
                    }
                }
            }
        },
        667237: e => {
            "use strict";

            function t(e) {
                this._capacity = o(e);
                this._length = 0;
                this._front = 0;
                this._makeCapacity();
                if (n(e)) {
                    for (var t = e.length, r = 0; r < t; ++r) this[r] = e[r];
                    this._length = t
                }
            }
            t.prototype.toArray = function() {
                for (var e = this._length, t = new Array(e), n = this._front, r = this._capacity, o = 0; o < e; ++o) t[o] = this[n + o & r - 1];
                return t
            };
            t.prototype.push = function(e) {
                var t = arguments.length,
                    n = this._length;
                if (t > 1) {
                    var r = this._capacity;
                    if (n + t > r) {
                        for (var o = 0; o < t; ++o) {
                            this._checkCapacity(n + 1);
                            this[i = this._front + n & this._capacity - 1] = arguments[o];
                            n++;
                            this._length = n
                        }
                        return n
                    }
                    for (var i = this._front, o = 0; o < t; ++o) {
                        this[i + n & r - 1] = arguments[o];
                        i++
                    }
                    this._length = n + t;
                    return n + t
                }
                if (0 === t) return n;
                this._checkCapacity(n + 1);
                this[o = this._front + n & this._capacity - 1] = e;
                this._length = n + 1;
                return n + 1
            };
            t.prototype.pop = function() {
                var e = this._length;
                if (0 !== e) {
                    var t = this._front + e - 1 & this._capacity - 1,
                        n = this[t];
                    this[t] = void 0;
                    this._length = e - 1;
                    return n
                }
            };
            t.prototype.shift = function() {
                var e = this._length;
                if (0 !== e) {
                    var t = this._front,
                        n = this[t];
                    this[t] = void 0;
                    this._front = t + 1 & this._capacity - 1;
                    this._length = e - 1;
                    return n
                }
            };
            t.prototype.unshift = function(e) {
                var t = this._length,
                    n = arguments.length;
                if (n > 1) {
                    if (t + n > (o = this._capacity)) {
                        for (var r = n - 1; r >= 0; r--) {
                            this._checkCapacity(t + 1);
                            var o = this._capacity;
                            this[a = (this._front - 1 & o - 1 ^ o) - o] = arguments[r];
                            t++;
                            this._length = t;
                            this._front = a
                        }
                        return t
                    }
                    var i = this._front;
                    for (r = n - 1; r >= 0; r--) {
                        var a;
                        this[a = (i - 1 & o - 1 ^ o) - o] = arguments[r];
                        i = a
                    }
                    this._front = i;
                    this._length = t + n;
                    return t + n
                }
                if (0 === n) return t;
                this._checkCapacity(t + 1);
                o = this._capacity;
                this[r = (this._front - 1 & o - 1 ^ o) - o] = e;
                this._length = t + 1;
                this._front = r;
                return t + 1
            };
            t.prototype.peekBack = function() {
                var e = this._length;
                if (0 !== e) {
                    return this[this._front + e - 1 & this._capacity - 1]
                }
            };
            t.prototype.peekFront = function() {
                if (0 !== this._length) return this[this._front]
            };
            t.prototype.get = function(e) {
                var t = e;
                if (t === (0 | t)) {
                    var n = this._length;
                    t < 0 && (t += n);
                    if (!(t < 0 || t >= n)) return this[this._front + t & this._capacity - 1]
                }
            };
            t.prototype.isEmpty = function() {
                return 0 === this._length
            };
            t.prototype.clear = function() {
                this._length = 0;
                this._front = 0;
                this._makeCapacity()
            };
            t.prototype.toString = function() {
                return this.toArray().toString()
            };
            t.prototype.valueOf = t.prototype.toString;
            t.prototype.removeFront = t.prototype.shift;
            t.prototype.removeBack = t.prototype.pop;
            t.prototype.insertFront = t.prototype.unshift;
            t.prototype.insertBack = t.prototype.push;
            t.prototype.enqueue = t.prototype.push;
            t.prototype.dequeue = t.prototype.shift;
            t.prototype.toJSON = t.prototype.toArray;
            Object.defineProperty(t.prototype, "length", {
                get: function() {
                    return this._length
                },
                set: function() {
                    throw new RangeError("")
                }
            });
            t.prototype._makeCapacity = function() {
                for (var e = this._capacity, t = 0; t < e; ++t) this[t] = void 0
            };
            t.prototype._checkCapacity = function(e) {
                this._capacity < e && this._resizeTo(o(1.5 * this._capacity + 16))
            };
            t.prototype._resizeTo = function(e) {
                var t = this._front,
                    n = this._capacity,
                    o = new Array(n),
                    i = this._length;
                r(this, 0, o, 0, n);
                this._capacity = e;
                this._makeCapacity();
                this._front = 0;
                if (t + i <= n) r(o, t, this, 0, i);
                else {
                    var a = i - (t + i & n - 1);
                    r(o, t, this, 0, a);
                    r(o, 0, this, a, i - a)
                }
            };
            var n = Array.isArray;

            function r(e, t, n, r, o) {
                for (var i = 0; i < o; ++i) n[i + r] = e[i + t]
            }

            function o(e) {
                if ("number" != typeof e) {
                    if (!n(e)) return 16;
                    e = e.length
                }
                return function(e) {
                    e >>>= 0;
                    e -= 1;
                    e |= e >> 1;
                    e |= e >> 2;
                    e |= e >> 4;
                    e |= e >> 8;
                    return 1 + (e |= e >> 16)
                }(Math.min(Math.max(16, e), 1073741824))
            }
            e.exports = t
        },
        460122: (e, t, n) => {
            e.exports = n.p + "fdbcc8efcf1ba7be0df5fa425a5df5b3.svg"
        },
        873994: (e, t, n) => {
            e.exports = n.p + "b2ce83d133a3d9fa54411e732f2fa74c.svg"
        },
        413369: (e, t, n) => {
            e.exports = n.p + "b820b6002cb6ff7c3c2fb123d72c7866.svg"
        },
        132354: (e, t, n) => {
            e.exports = n.p + "a9009aaba5bfab576a517f6915b3c0b6.svg"
        },
        753074: e => {
            "use strict";
            var t = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                n = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                r = "function" == typeof Object.getOwnPropertySymbols;
            e.exports = function(e, o, i) {
                if ("string" != typeof o) {
                    var a = Object.getOwnPropertyNames(o);
                    r && (a = a.concat(Object.getOwnPropertySymbols(o)));
                    for (var u = 0; u < a.length; ++u)
                        if (!(t[a[u]] || n[a[u]] || i && i[a[u]])) try {
                            e[a[u]] = o[a[u]]
                        } catch (e) {}
                }
                return e
            }
        },
        823493: (e, t, n) => {
            var r = n(23279),
                o = n(513218);
            e.exports = function(e, t, n) {
                var i = !0,
                    a = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");
                if (o(n)) {
                    i = "leading" in n ? !!n.leading : i;
                    a = "trailing" in n ? !!n.trailing : a
                }
                return r(e, t, {
                    leading: i,
                    maxWait: t,
                    trailing: a
                })
            }
        },
        971402: (e, t, n) => {
            "use strict";
            n.d(t, {
                Zy: () => f,
                vq: () => p,
                jW: () => d
            });
            var r = n(744564),
                o = n(26468),
                i = n(120415),
                a = n(73105),
                u = n(2590);

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        s(e, t, n[t])
                    }))
                }
                return e
            }

            function c(e) {
                r.Z.dispatch({
                    type: "CONTEXT_MENU_OPEN",
                    contextMenu: e
                })
            }

            function f(e) {
                (0, n(973935).flushSync)((function() {
                    r.Z.wait((function() {
                        r.Z.dispatch({
                            type: "CONTEXT_MENU_CLOSE"
                        }).finally(e)
                    }))
                }))
            }

            function p(e, t, n, r) {
                e.stopPropagation();
                if (null == e.currentTarget.contains || e.currentTarget.contains(e.target)) {
                    var s, f, p = 0,
                        d = 0;
                    if ("pageX" in e) {
                        p = e.pageX;
                        d = e.pageY
                    }
                    if (0 === p && 0 === d) {
                        var h, y = null === (h = e.target) || void 0 === h ? void 0 : h.getBoundingClientRect(),
                            O = null != y ? y : {},
                            b = O.left,
                            E = void 0 === b ? 0 : b,
                            S = O.top,
                            _ = void 0 === S ? 0 : S,
                            v = O.width,
                            g = void 0 === v ? 0 : v,
                            m = O.height;
                        p = E + g / 2;
                        d = _ + (void 0 === m ? 0 : m) / 2
                    }
                    var I = {
                        render: t,
                        renderLazy: r,
                        target: null !== (s = e.target) && void 0 !== s ? s : e.currentTarget,
                        rect: new DOMRect(p, d, 0, 0),
                        config: l({
                            context: __OVERLAY__ ? u.IlC.OVERLAY : null !== (f = (0, o.GB)()) && void 0 !== f ? f : u.IlC.APP
                        }, n)
                    };
                    if ((null == n ? void 0 : n.enableSpellCheck) && (0, i.nI)()) var P = (0, a.RD)((function() {
                        P();
                        c(I)
                    }));
                    else {
                        e.preventDefault();
                        c(I)
                    }
                }
            }

            function d(e, t, n) {
                p(e, void 0, n, t)
            }
        },
        595138: (e, t, n) => {
            "use strict";
            n.d(t, {
                yD: () => c,
                p0: () => f,
                Qv: () => d
            });
            var r = n(281110),
                o = n(744564),
                i = n(534681),
                a = n(2590);

            function u(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        s = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function s(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            u(i, r, o, a, s, "next", e)
                        }

                        function s(e) {
                            u(i, r, o, a, s, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var l = function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };

            function c(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                o.Z.wait((function() {
                    o.Z.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_START",
                        applicationId: e
                    })
                }));
                return r.ZP.get({
                    url: a.ANM.ENTITLEMENTS_FOR_APPLICATION(e),
                    oldFormErrors: !0,
                    query: {
                        exclude_consumed: t
                    }
                }).then((function(t) {
                    o.Z.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
                        applicationId: e,
                        entitlements: t.body
                    });
                    return t.body
                })).catch((function() {
                    o.Z.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_FAIL",
                        applicationId: e
                    })
                }))
            }

            function f(e) {
                return p.apply(this, arguments)
            }

            function p() {
                return (p = s((function(e) {
                    var t, n, i, u, s, c;
                    return l(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                t = e.withSku, n = void 0 !== t && t, i = e.withApplication, u = void 0 !== i && i, s = e.entitlementType;
                                o.Z.dispatch({
                                    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
                                });
                                l.label = 1;
                            case 1:
                                l.trys.push([1, 3, , 4]);
                                return [4, r.ZP.get({
                                    url: a.ANM.ENTITLEMENTS_FOR_USER,
                                    query: {
                                        with_sku: n,
                                        with_application: u,
                                        entitlement_type: s
                                    }
                                })];
                            case 2:
                                c = l.sent();
                                o.Z.dispatch({
                                    type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
                                    entitlements: c.body
                                });
                                return [3, 4];
                            case 3:
                                l.sent();
                                o.Z.dispatch({
                                    type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL"
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function d() {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = s((function() {
                    var e;
                    return l(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                o.Z.dispatch({
                                    type: "ENTITLEMENTS_GIFTABLE_FETCH"
                                });
                                t.label = 1;
                            case 1:
                                t.trys.push([1, 3, , 4]);
                                return [4, (0, i.Kb)({
                                    url: a.ANM.ENTITLEMENTS_GIFTABLE
                                })];
                            case 2:
                                e = t.sent();
                                o.Z.dispatch({
                                    type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
                                    entitlements: e.body
                                });
                                return [3, 4];
                            case 3:
                                t.sent();
                                o.Z.dispatch({
                                    type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL"
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        735885: (e, t, n) => {
            "use strict";
            n.d(t, {
                jN: () => o,
                xf: () => i,
                Ou: () => a
            });
            var r = n(744564);

            function o(e) {
                r.Z.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function i() {
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
        933599: (e, t, n) => {
            "use strict";
            n.d(t, {
                Xt: () => o,
                sn: () => i,
                tt: () => a,
                Ow: () => u,
                fw: () => s
            });
            var r = n(744564);

            function o(e) {
                r.Z.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function i(e, t) {
                r.Z.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function a() {
                r.Z.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function u(e, t) {
                r.Z.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function s() {
                r.Z.wait((function() {
                    return r.Z.dispatch({
                        type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                    })
                }))
            }
        },
        560923: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => m
            });
            var r = n(281110),
                o = n(575945),
                i = n(744564),
                a = n(852626);
            var u = n(3930),
                s = n(625183),
                l = n(473903),
                c = n(908478),
                f = n(749565),
                p = n(105783),
                d = n(971402),
                h = n(2590),
                y = n(473708);

            function O(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function b(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        b(e, t, n[t])
                    }))
                }
                return e
            }

            function S(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return O(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return O(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _(e) {
                (0, d.Zy)();
                p.Z.show(e)
            }

            function v(e, t) {
                var n = e.status,
                    r = e.body,
                    o = r && r.code;
                switch (n) {
                    case 429:
                        _({
                            title: y.Z.Messages.FRIEND_REQUEST_RATE_LIMITED_HEADER,
                            body: y.Z.Messages.FRIEND_REQUEST_RATE_LIMITED_BODY,
                            confirmText: y.Z.Messages.FRIEND_REQUEST_RATE_LIMITED_BUTTON
                        });
                        break;
                    case 403:
                        if (o === h.evJ.EMAIL_VERIFICATION_REQUIRED) {
                            _({
                                title: y.Z.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_HEADER,
                                body: y.Z.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_BODY,
                                confirmText: y.Z.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_BUTTON,
                                onConfirm: function() {
                                    a.j()
                                }
                            });
                            break
                        }
                    default:
                        if (o === h.evJ.USER_QUARANTINED) ! function() {
                            (0, d.Zy)();
                            (0, u.default)()
                        }();
                        else {
                            if ((0, s.b)(n, o)) break;
                            var i = null != t ? (0, c.N)(o || 0, t) : y.Z.Messages.POMELO_ADD_FRIEND_ERROR;
                            _({
                                title: y.Z.Messages.FRIEND_REQUEST_FAILED_HEADER,
                                body: i,
                                confirmText: y.Z.Messages.OKAY
                            })
                        }
                }
                throw e
            }
            var g = {
                sendRequest: function(e, t, n) {
                    var o = S(e.split("#"), 2),
                        i = o[0],
                        a = o[1];
                    return r.ZP.post({
                        url: h.ANM.USER_RELATIONSHIPS(),
                        body: E({
                            username: i,
                            discriminator: parseInt(a)
                        }, n),
                        context: t,
                        oldFormErrors: !0
                    }).catch((function(t) {
                        v(t, e)
                    }))
                },
                addRelationship: function(e, t) {
                    var n = e.userId,
                        o = e.context,
                        i = e.type,
                        a = e.friendToken,
                        u = e.fromFriendSuggestion,
                        s = e.captchaPayload,
                        c = l.default.getUser(n);
                    return r.ZP.put({
                        url: h.ANM.USER_RELATIONSHIP(n),
                        body: E({
                            type: i,
                            friend_token: a,
                            from_friend_suggestion: u
                        }, s),
                        context: o,
                        oldFormErrors: !0
                    }).then((function() {
                        null == t || t()
                    })).catch((function(e) {
                        v(e, f.ZP.getUserTag(c))
                    }))
                },
                acceptFriendRequest: function(e) {
                    return g.addRelationship(e, (function() {
                        o.uv.announce(y.Z.Messages.A11Y_ANNOUNCEMENT_FRIEND_ACCEPT_REQUEST)
                    }))
                },
                cancelFriendRequest: function(e, t) {
                    return g.removeRelationship(e, t, (function() {
                        o.uv.announce(y.Z.Messages.A11Y_ANNOUNCEMENT_FRIEND_CANCEL_REQUEST)
                    }))
                },
                removeFriend: function(e, t) {
                    g.removeRelationship(e, t, (function() {
                        o.uv.announce(y.Z.Messages.A11Y_ANNOUNCEMENT_FRIEND_REMOVED)
                    }))
                },
                unblockUser: function(e, t) {
                    g.removeRelationship(e, t, (function() {
                        o.uv.announce(y.Z.Messages.A11Y_ANNOUNCEMENT_USER_UNBLOCKED)
                    }))
                },
                removeRelationship: function(e, t, n) {
                    return r.ZP.delete({
                        url: h.ANM.USER_RELATIONSHIP(e),
                        context: t,
                        oldFormErrors: !0
                    }).then((function() {
                        null == n || n()
                    })).catch((function() {
                        o.uv.announce(y.Z.Messages.A11Y_ANNOUNCEMENT_GENERIC_FAIL)
                    }))
                },
                updateRelationship: function(e, t) {
                    return r.ZP.patch({
                        url: h.ANM.USER_RELATIONSHIP(e),
                        body: {
                            nickname: t
                        }
                    })
                },
                fetchRelationships: function() {
                    r.ZP.get({
                        url: h.ANM.USER_RELATIONSHIPS(),
                        oldFormErrors: !0
                    }).then((function(e) {
                        return i.Z.dispatch({
                            type: "LOAD_RELATIONSHIPS_SUCCESS",
                            relationships: e.body
                        })
                    }), (function() {
                        return i.Z.dispatch({
                            type: "LOAD_RELATIONSHIPS_FAILURE"
                        })
                    }))
                },
                confirmClearPendingRelationships: function(e) {
                    ! function(e) {
                        (0, n(577657).Z)(e)
                    }(e)
                },
                clearPendingRelationships: function() {
                    return r.ZP.delete({
                        url: h.ANM.USER_RELATIONSHIPS(),
                        query: {
                            relationship_type: h.OGo.PENDING_INCOMING
                        }
                    }).then((function() {
                        i.Z.dispatch({
                            type: "RELATIONSHIP_PENDING_INCOMING_REMOVED"
                        })
                    })).catch((function() {
                        o.uv.announce(y.Z.Messages.A11Y_ANNOUNCEMENT_GENERIC_FAIL)
                    }))
                }
            };
            const m = g
        },
        810978: (e, t, n) => {
            "use strict";
            n.d(t, {
                GZ: () => h,
                Gn: () => O,
                Y2: () => b,
                mE: () => E
            });
            var r = n(281110),
                o = n(744564),
                i = n(973889),
                a = n(615796),
                u = n(264628),
                s = n(673679),
                l = n(2590),
                c = n(203600);

            function f(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        s = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function p(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            f(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            f(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var d = function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };

            function h(e, t, n, r, o) {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = p((function(e, t, n, c, f) {
                    var p, h, y, O;
                    return d(this, (function(d) {
                        switch (d.label) {
                            case 0:
                                o.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH",
                                    skuId: e
                                });
                                d.label = 1;
                            case 1:
                                d.trys.push([1, 5, , 6]);
                                p = {
                                    url: l.ANM.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                                    oldFormErrors: !0
                                };
                                h = {};
                                null != t && (h.country_code = t);
                                null != n && (h.payment_source_id = n);
                                null != c && (h.include_unpublished = c);
                                null != f && (h.revenue_surface = f);
                                p.query = h;
                                return a.Z.ipCountryCodeLoaded ? [3, 3] : [4, (0, s.GE)()];
                            case 2:
                                d.sent();
                                d.label = 3;
                            case 3:
                                return [4, r.ZP.get(p)];
                            case 4:
                                y = d.sent();
                                o.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                                    skuId: e,
                                    subscriptionPlans: y.body
                                });
                                return [3, 6];
                            case 5:
                                O = d.sent();
                                o.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                                    skuId: e
                                });
                                (0, u.q2)(O);
                                throw new i.Z(O);
                            case 6:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function O(e, t) {
                return Promise.all(e.filter((function(e) {
                    return e !== c.Si.NONE
                })).map((function(e) {
                    return h(e, t)
                })))
            }

            function b(e, t, n) {
                return Promise.all(c.YQ.filter((function(e) {
                    return e !== c.Si.NONE
                })).map((function(r) {
                    return h(r, e, t, void 0, n)
                })))
            }

            function E() {
                o.Z.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        758635: (e, t, n) => {
            "use strict";
            n.d(t, {
                W: () => u
            });
            var r = n(281110),
                o = n(744564),
                i = n(239734),
                a = n(2590);

            function u() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (i.Z.needsRefresh()) {
                    o.Z.dispatch({
                        type: "LOAD_USER_AFFINITIES"
                    });
                    return r.ZP.get({
                        url: a.ANM.USER_AFFINITIES,
                        retries: e ? 3 : 0,
                        oldFormErrors: !0
                    }).then((function(e) {
                        var t = e.body;
                        o.Z.dispatch({
                            type: "LOAD_USER_AFFINITIES_SUCCESS",
                            affinities: t
                        })
                    }), (function() {
                        o.Z.dispatch({
                            type: "LOAD_USER_AFFINITIES_FAILURE"
                        })
                    }))
                }
                return Promise.resolve()
            }
        },
        396179: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var r = n(281110),
                o = n(630631),
                i = n(744564),
                a = n(735885),
                u = n(2590);

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        s(e, t, n[t])
                    }))
                }
                return e
            }

            function c() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                i.Z.dispatch(l({
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: e,
                    subsection: t
                }, n));
                (0, a.jN)(u.S9g.USER_SETTINGS)
            }
            var f = n(223219),
                p = n(652591),
                d = n(775173),
                h = n(488110),
                y = n(239620),
                O = n(473708);

            function b(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        b(e, t, n[t])
                    }))
                }
                return e
            }

            function S(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            const _ = {
                open: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            openWithoutBackstack: !1
                        };
                    c(e, t, n)
                },
                init: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    i.Z.dispatch(E({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: e,
                        subsection: t
                    }, n))
                },
                close: function() {
                    var e = f.Z.onClose;
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLOSE"
                    });
                    null != e && e()
                },
                setSection: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    i.Z.dispatch(E({
                        type: "USER_SETTINGS_MODAL_SET_SECTION",
                        section: e,
                        subsection: t
                    }, n))
                },
                clearSubsection: function(e) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                        forSection: e
                    })
                },
                clearScrollPosition: function(e) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                        forSection: e
                    })
                },
                updateAccount: function(e) {
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                        settings: e
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
                saveAccountChanges: function(e, t) {
                    var n = this;
                    i.Z.dispatch({
                        type: "USER_SETTINGS_MODAL_SUBMIT"
                    });
                    var a = e.username,
                        s = e.email,
                        l = e.emailToken,
                        c = e.password,
                        f = e.avatar,
                        b = e.newPassword,
                        _ = e.discriminator,
                        v = t.close;
                    return (0, h.Z)((function(e) {
                        var t = S(E({
                                username: a,
                                email: s,
                                email_token: l,
                                password: c,
                                avatar: f,
                                new_password: b
                            }, e), {
                                discriminator: null != _ && "" !== _ ? _ : void 0
                            }),
                            n = o.Z.get(u.JkL),
                            i = (0, y.xJ)();
                        if (null != i && null != n) {
                            t.push_provider = i;
                            t.push_token = n
                        }
                        var p = o.Z.get(u.scU);
                        if (null != y.mv && null != p) {
                            t.push_voip_provider = y.mv;
                            t.push_voip_token = p
                        }
                        return r.ZP.patch({
                            url: u.ANM.ME,
                            oldFormErrors: !0,
                            body: t
                        })
                    }), {
                        checkEnabled: !1,
                        modalProps: {
                            title: O.Z.Messages.TWO_FA_CHANGE_ACCOUNT
                        },
                        hooks: {
                            onEarlyClose: function() {
                                return i.Z.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }
                    }).then((function(e) {
                        var t = e.body,
                            r = t.token;
                        p.default.track(u.rMx.USER_AVATAR_UPDATED, {
                            animated: (0, d.xR)(t.avatar)
                        });
                        delete t.token;
                        i.Z.dispatch({
                            type: "UPDATE_TOKEN",
                            token: r,
                            userId: t.id
                        });
                        i.Z.dispatch({
                            type: "CURRENT_USER_UPDATE",
                            user: t
                        });
                        null != b && i.Z.dispatch({
                            type: "USER_PASSWORD_UPDATE",
                            user: t,
                            newPassword: b
                        });
                        null != c && null != b && i.Z.dispatch({
                            type: "PASSWORD_UPDATED",
                            userId: t.id
                        });
                        v ? n.close() : n.submitComplete();
                        return e
                    }), (function(e) {
                        i.Z.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: e.body
                        });
                        return e
                    }))
                }
            }
        },
        152042: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => O
            });
            var r = n(785893),
                o = (n(667294), n(786483)),
                i = n(820610),
                a = n(264628),
                u = n(348592),
                s = n(116094),
                l = n(249052),
                c = n(530562),
                f = n(2590),
                p = n(203600),
                d = n(473708),
                h = n(501235),
                y = n.n(h);
            const O = function(e) {
                var t = e.subscriptionPlan,
                    n = e.isGift,
                    h = e.isEmbeddedIAP,
                    O = e.renewalInvoice,
                    b = e.paymentSourceType,
                    E = e.hide,
                    S = e.purchaseType,
                    _ = e.productLine,
                    v = e.basePrice,
                    g = e.currentSubscription;
                if (E) return null;
                var m, I, P, T = null == e.planGroup ? [] : e.planGroup;
                if (null != O) {
                    var A = s.ZP.getIntervalForInvoice(O);
                    m = A.intervalType;
                    I = A.intervalCount;
                    P = (0, l.og)((0, l.T4)(O.total, O.currency), m, I)
                } else if (null != t) {
                    m = t.interval;
                    I = t.intervalCount
                }
                var R = (0, i.K)({
                        purchaseType: S || f.GZQ.SUBSCRIPTION,
                        plan: t,
                        premiumSubscription: null == g ? null : g,
                        isGift: !!n,
                        planGroup: T,
                        isPrepaidPaymentSource: !1
                    }),
                    N = "",
                    C = "";
                if (h)
                    if (null != P && null != (null == O ? void 0 : O.subscriptionPeriodEnd)) N = d.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_RATE_AND_RENEWAL.format({
                        rate: P,
                        renewalDate: O.subscriptionPeriodEnd
                    });
                    else switch (m) {
                        case p.rV.MONTH:
                            N = 1 === I ? d.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MONTHLY : d.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MULTI_MONTH.format({
                                intervalCount: I
                            });
                            break;
                        case p.rV.YEAR:
                            N = d.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_YEARLY;
                            break;
                        case void 0:
                            C = d.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                                primaryText: R,
                                paidURL: f.EYA.PAID_TERMS
                            });
                            N = d.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE.format({});
                            break;
                        default:
                            throw new Error("Unexpected interval: ".concat(m))
                    } else if (S === f.GZQ.ONE_TIME) {
                        C = d.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                            primaryText: R,
                            paidURL: f.EYA.PAID_TERMS
                        });
                        if (_ === f.POd.COLLECTIBLES) N = d.Z.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_PAYMENT;
                        else N = d.Z.Messages.ONE_TIME_PURCHASE_FINE_PRINT
                    } else {
                        var M = (0, o.s)("legal_fine_print", {
                            autoTrackExposure: !1
                        });
                        if (null != t && !n && M.enabled && 1 === M.bucket) {
                            var L, w = (0, i.K)({
                                purchaseType: f.GZQ.SUBSCRIPTION,
                                plan: t,
                                premiumSubscription: null == g ? null : g,
                                isGift: !1,
                                planGroup: T,
                                isPrepaidPaymentSource: !1
                            });
                            null != v && null != m && null != I && (L = (0, l.og)((0, l.T4)(v.amount, v.currency), m, I));
                            if (null == L) {
                                var j = new Error("Missing base rate for legal fine print");
                                (0, a.q2)(j, {
                                    tags: {
                                        planId: t.id
                                    }
                                })
                            }
                            N = null != g && (0, c.GY)(g, t.id, T) ? d.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PLAN_CHANGE_V2.format({
                                primaryText: w,
                                rate: L,
                                paidURL: f.EYA.PAID_TERMS,
                                contactLink: f.EYA.CONTACT,
                                helpdeskArticle: u.Z.getArticleURL(f.BhN.BILLING)
                            }) : d.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_V2.format({
                                primaryText: w,
                                rate: L,
                                paidURL: f.EYA.PAID_TERMS,
                                contactLink: f.EYA.CONTACT,
                                helpdeskArticle: u.Z.getArticleURL(f.BhN.BILLING)
                            })
                        } else {
                            n && (C = d.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                                primaryText: R,
                                paidURL: f.EYA.PAID_TERMS
                            }));
                            switch (m) {
                                case p.rV.MONTH:
                                    N = n ? d.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : d.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY;
                                    N = n ? d.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : 1 === I ? d.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY : d.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MULTI_MONTH.format({
                                        intervalCount: I
                                    });
                                    break;
                                case p.rV.YEAR:
                                    N = n ? d.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_YEARLY : d.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_YEARLY;
                                    break;
                                case void 0:
                                    N = "";
                                    break;
                                default:
                                    throw new Error("Unexpected interval: ".concat(m))
                            }
                        }
                    } return (0, r.jsxs)(r.Fragment, {
                    children: ["" !== C && (0, r.jsxs)("div", {
                        children: [(0, r.jsx)("div", {
                            children: C
                        }), (0, r.jsx)("div", {
                            className: y().divider
                        })]
                    }), "" !== N && (0, r.jsx)("div", {
                        children: N
                    }), b === f.HeQ.PAYSAFE_CARD && (0, r.jsx)("div", {
                        className: y().paymentSourceNoticeCopy,
                        children: d.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PAYSAFECARD
                    }), b === f.HeQ.SOFORT && (0, r.jsxs)("div", {
                        className: y().paymentSourceNoticeCopy,
                        children: [d.Z.Messages.SOFORT_MANDATE_AGREEMENT, " "]
                    })]
                })
            }
        },
        661299: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => f
            });
            var r = n(785893),
                o = (n(667294),
                    n(294184)),
                i = n.n(o),
                a = n(228721),
                u = n(349480),
                s = n.n(u);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var c = (0, a.Z)();
            const f = function(e) {
                var t, n = e.open,
                    o = e.className,
                    a = e.withHighlight,
                    u = void 0 !== a && a;
                return (0, r.jsxs)("svg", {
                    width: "18",
                    height: "18",
                    className: i()(s().button, o, (t = {}, l(t, s().open, n), l(t, s().withHighlight, u), t)),
                    children: [u && (0, r.jsx)("defs", {
                        children: (0, r.jsxs)("linearGradient", {
                            id: c,
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "18",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, r.jsx)("stop", {
                                offset: "0",
                                stopColor: "#B473F5"
                            }), (0, r.jsx)("stop", {
                                offset: "1",
                                stopColor: "#E292AA"
                            })]
                        })
                    }), (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsx)("path", {
                            d: "M0 0h18v18H0"
                        }), (0, r.jsx)("path", {
                            stroke: u ? "url(#".concat(c, ")") : "currentColor",
                            d: "M4.5 4.5l9 9",
                            strokeLinecap: "round"
                        }), (0, r.jsx)("path", {
                            stroke: u ? "url(#".concat(c, ")") : "currentColor",
                            d: "M13.5 4.5l-9 9",
                            strokeLinecap: "round"
                        })]
                    })]
                })
            }
        },
        446483: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                a = n(545354),
                u = n.n(a);

            function s(e) {
                var t = e.application,
                    n = e.splashSize,
                    o = e.className,
                    a = e.overrideSplash,
                    s = null != a ? a : t.getSplashURL(n),
                    l = null != s ? "url(".concat(s, ")") : void 0;
                return (0, r.jsx)("div", {
                    className: i()(u().splashBackground, o),
                    style: {
                        backgroundImage: l
                    }
                })
            }
        },
        934869: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => W
            });
            var r = n(785893),
                o = n(667294),
                i = n(496486),
                a = n.n(i),
                u = n(202351),
                s = n(513328),
                l = n(304548),
                c = n(735885),
                f = n(560923),
                p = n(758635),
                d = n(396179),
                h = n(657539),
                y = n(467345),
                O = n(543976),
                b = n(840922),
                E = n(793461),
                S = n(239734),
                _ = n(473903),
                v = n(459940),
                g = n(107364),
                m = n(750203),
                I = n(691797),
                P = n(644144),
                T = n(116094),
                A = n(749565),
                R = n(2590),
                N = n(203600),
                C = n(473708),
                M = n(5759),
                L = n.n(M);

            function w(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function j(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Z(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function U(e) {
                U = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return U(e)
            }

            function D(e, t) {
                return !t || "object" !== x(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function B(e, t) {
                B = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return B(e, t)
            }

            function G(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || F(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function k(e) {
                return function(e) {
                    if (Array.isArray(e)) return w(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || F(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var x = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function F(e, t) {
                if (e) {
                    if ("string" == typeof e) return w(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? w(e, t) : void 0
                }
            }

            function H(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = U(e);
                    if (t) {
                        var o = U(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return D(this, n)
                }
            }
            var Y = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && B(e, t)
                    }(n, e);
                    var t = H(n);

                    function n() {
                        j(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            copyMode: v.Z.Modes.DEFAULT
                        };
                        e._copyModeTimeout = new s.V7;
                        e.handleGiftCodeCopy = function(t, n) {
                            var r = e.props.sku;
                            null != r && (0, P.dM)(new O.Z({
                                code: n,
                                maxUses: 1
                            }), r);
                            try {
                                (0, I.JG)(t);
                                e.setState({
                                    copyMode: v.Z.Modes.SUCCESS
                                })
                            } catch (t) {
                                e.setState({
                                    copyMode: v.Z.Modes.ERROR
                                })
                            }
                            e._copyModeTimeout.start(1500, (function() {
                                e.setState({
                                    copyMode: v.Z.Modes.DEFAULT
                                })
                            }))
                        };
                        e.handleInventoryClick = function() {
                            d.Z.open(R.oAB.INVENTORY);
                            e.props.onClose()
                        };
                        e.renderGiftCodeSection = function() {
                            var t = e.props,
                                n = t.obscureGiftCode,
                                o = t.giftCode;
                            if (null == o) return null;
                            var i, a = e.state.copyMode;
                            switch (a) {
                                case v.Z.Modes.SUCCESS:
                                    i = C.Z.Messages.BILLING_GIFT_COPIED;
                                    break;
                                case v.Z.Modes.ERROR:
                                    i = C.Z.Messages.FAILED;
                                    break;
                                default:
                                    i = C.Z.Messages.COPY
                            }
                            return (0, r.jsx)(g.Z, {
                                direction: g.Z.Direction.VERTICAL,
                                children: (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(l.FormTitle, {
                                        children: C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
                                    }), null != o && (0, r.jsx)(v.Z, {
                                        hideMessage: n ? C.Z.Messages.GIFT_INVENTORY_HIDDEN : null,
                                        value: (0, P.Nz)(o),
                                        mode: a,
                                        text: i,
                                        onCopy: function(t) {
                                            return e.handleGiftCodeCopy(t, o)
                                        },
                                        supportsCopy: I.wS,
                                        className: L().copyInput,
                                        buttonColor: v.Z.ButtonColors.LINK,
                                        buttonLook: v.Z.ButtonLooks.LINK
                                    }), (0, r.jsx)("div", {
                                        className: L().subtext,
                                        children: C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
                                    })]
                                })
                            })
                        };
                        e.renderRequestSendGift = function() {
                            var t = e.props,
                                n = t.giftCode,
                                o = t.onClose,
                                i = t.giftMessageError;
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("div", {
                                    className: L().blurb,
                                    children: e.headerBlurb
                                }), null == i && (0, r.jsx)(V, {
                                    giftCode: n,
                                    onClose: o
                                }), (0, r.jsx)("div", {
                                    className: L().divider
                                }), e.renderGiftCodeSection()]
                            })
                        };
                        e.renderConfirmSentGift = function() {
                            var t = e.props.giftRecipient;
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(h.Z, {
                                    user: t,
                                    className: L().giftRecipient,
                                    size: l.AvatarSizes.SIZE_80
                                }), (0, r.jsx)(l.Heading, {
                                    className: L().giftRecipientName,
                                    variant: "heading-md/semibold",
                                    children: A.ZP.getName(t)
                                }), (0, r.jsxs)("div", {
                                    className: L().giftRecipientTag,
                                    children: [" ", A.ZP.getUserTag(t)]
                                }), (0, r.jsx)("div", {
                                    className: L().giftSentMessage,
                                    children: e.headerBlurb
                                })]
                            })
                        };
                        return e
                    }
                    var o = n.prototype;
                    o.componentWillUnmount = function() {
                        this._copyModeTimeout.stop()
                    };
                    o.render = function() {
                        var e, t, n = this.props,
                            o = n.application,
                            i = n.selectedGiftStyle,
                            a = n.hasSentMessage,
                            u = n.giftRecipient,
                            s = n.giftMessageError,
                            c = n.isSendingMessage;
                        e = (0, P.a8)(u) || a && null == s ? C.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != s ? C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : C.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE;
                        t = c ? (0, r.jsx)(l.Spinner, {
                            type: l.SpinnerTypes.PULSING_ELLIPSIS
                        }) : (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(l.Heading, {
                                variant: "heading-lg/semibold",
                                className: null != i ? L().headerCustomGifting : L().header,
                                children: e
                            }), a && null != u && null == s || (0, P.a8)(u) ? this.renderConfirmSentGift() : this.renderRequestSendGift()]
                        });
                        return (0, r.jsxs)(g.Z, {
                            direction: g.Z.Direction.VERTICAL,
                            align: g.Z.Align.CENTER,
                            children: [null != o ? (0, r.jsx)(m.Z, {
                                game: o,
                                className: L().icon,
                                size: m.Z.Sizes.LARGE,
                                skuId: this.iconSKUId
                            }) : null, t]
                        })
                    };
                    ! function(e, t, n) {
                        t && Z(e.prototype, t);
                        n && Z(e, n)
                    }(n, [{
                        key: "iconSKUId",
                        get: function() {
                            var e = this.props,
                                t = e.subscriptionPlan,
                                n = e.sku;
                            return null != t ? t.skuId : null != n ? n.id : null
                        }
                    }, {
                        key: "headerBlurb",
                        get: function() {
                            var e = this.props,
                                t = e.subscriptionPlan,
                                n = e.hasSentMessage,
                                r = e.giftMessageError,
                                o = e.giftRecipient;
                            if (null != r) return C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB;
                            if (null == t) return C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_BLURB;
                            var i = n || null != o;
                            return (t.interval === N.rV.MONTH ? i ? C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : i ? C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
                                skuName: (0, T.aq)(t.id),
                                intervalCount: t.intervalCount
                            })
                        }
                    }]);
                    return n
                }(o.Component),
                V = function(e) {
                    var t = e.giftCode,
                        n = e.onClose;
                    o.useEffect((function() {
                        f.Z.fetchRelationships();
                        (0, p.W)()
                    }), []);
                    var i = G(o.useState(), 2),
                        s = i[0],
                        d = i[1],
                        O = G(o.useState(!1), 2),
                        E = O[0],
                        v = O[1],
                        g = G(o.useState(!1), 2),
                        m = g[0],
                        I = g[1],
                        P = (0, u.cj)([S.Z], (function() {
                            return {
                                userAffinities: S.Z.getUserAffinitiesUserIds(),
                                isLoading: S.Z.getFetching()
                            }
                        })),
                        T = P.userAffinities,
                        R = P.isLoading,
                        N = Array.from(T.values()),
                        M = (0, u.e7)([b.Z], (function() {
                            return b.Z.getFriendIDs()
                        })),
                        w = a().difference(M, N),
                        j = k(N).concat(k(w)),
                        Z = (0, u.e7)([_.default], (function() {
                            return _.default.filter((function(e) {
                                return j.includes(e.id) && !e.bot
                            }))
                        }), [j]);
                    if (null == Z || 0 === Z.length) return null;
                    var U = a().sortBy(Z, (function(e) {
                        return j.indexOf(e.id)
                    }));
                    return (0, r.jsxs)("div", {
                        className: L().giftRecipientSection,
                        children: [(0, r.jsx)(l.FormTitle, {
                            children: C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
                        }), (0, r.jsxs)("div", {
                            className: L().giftRecipient,
                            children: [(0, r.jsx)(l.SearchableSelect, {
                                placeholder: C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                                wrapperClassName: L().giftRecipientInputWrapper,
                                className: E ? L().giftRecipientInputError : void 0,
                                renderOptionPrefix: function(e) {
                                    return null == (null == e ? void 0 : e.value) ? null : (0, r.jsx)(h.Z, {
                                        user: e.value,
                                        size: l.AvatarSizes.SIZE_20
                                    })
                                },
                                renderLeading: function() {
                                    return R ? (0, r.jsx)(l.Spinner, {
                                        type: l.SpinnerTypes.PULSING_ELLIPSIS
                                    }) : null
                                },
                                value: s,
                                onChange: function(e) {
                                    d(e);
                                    v(!1)
                                },
                                options: U.map((function(e) {
                                    return {
                                        value: e,
                                        label: "".concat(A.ZP.getUserTag(e))
                                    }
                                }))
                            }), (0, r.jsx)(l.Button, {
                                disabled: null == s,
                                submitting: m,
                                className: L().sendToRecipientButton,
                                onClick: function() {
                                    I(!0);
                                    (0, y.YD)(s, t).then((function() {
                                        n();
                                        (0, c.Ou)()
                                    })).catch((function() {
                                        v(!0);
                                        I(!1)
                                    }))
                                },
                                children: C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
                            })]
                        }), (0, r.jsx)("div", {
                            className: E ? L().subtextError : L().subtext,
                            children: E ? C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : C.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
                        })]
                    })
                };
            const W = u.ZP.connectStores([E.Z], (function() {
                return {
                    obscureGiftCode: E.Z.enabled
                }
            }))(Y)
        },
        910740: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => D
            });
            var r = n(785893),
                o = n(667294),
                i = n(202351),
                a = n(304548),
                u = n(744564),
                s = n(114126),
                l = n(161071),
                c = n(695166),
                f = n(951442),
                p = n(396179),
                d = n(536713),
                h = n(717902),
                y = n(784426),
                O = n(761814),
                b = n(430091),
                E = n(64318),
                S = n(840974),
                _ = n(107364),
                v = n(750203),
                g = n(709189),
                m = n(557931),
                I = n(534681),
                P = n(2590),
                T = n(473708),
                A = n(5759),
                R = n.n(A);

            function N(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function C(e) {
                C = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return C(e)
            }

            function M(e, t) {
                return !t || "object" !== w(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function L(e, t) {
                L = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return L(e, t)
            }
            var w = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function j(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = C(e);
                    if (t) {
                        var o = C(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return M(this, n)
                }
            }
            var Z = function() {
                    return [T.Z.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_TITLE_1, T.Z.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_TITLE_2, T.Z.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_TITLE_3, T.Z.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_TITLE_4]
                },
                U = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && L(e, t)
                    }(n, e);
                    var t = j(n);

                    function n() {
                        N(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            confirmHeaderIndex: Math.floor(Math.random() * Z().length),
                            installPath: e.props.defaultInstallationPath,
                            hasInstallPathError: !1,
                            hasAcceptedNeccessaryTerms: !1
                        };
                        e.handleInstallPathChange = function(t, n) {
                            e.setState({
                                installPath: t,
                                hasInstallPathError: n
                            })
                        };
                        e.handleInventoryClick = function() {
                            p.Z.open(P.oAB.INVENTORY);
                            e.props.onClose()
                        };
                        e.handleGoToLibrary = function() {
                            (0, y.uL)(P.Z5c.APPLICATION_LIBRARY);
                            e.props.onClose()
                        };
                        e.handleInstall = function() {
                            var t = e.props,
                                n = t.application,
                                r = t.branchId,
                                o = t.buildId,
                                i = t.hasPreviouslyAcceptedStoreTerms,
                                a = t.manifestIds,
                                u = t.onClose,
                                s = e.state,
                                l = s.installPath,
                                p = s.hasInstallPathError;
                            i || (0, c.Bv)();
                            null != n.eulaId && (0, c.DC)(n.eulaId);
                            if (!p && null != o && null != a) {
                                f.LO({
                                    application: n,
                                    branchId: r,
                                    buildId: o,
                                    manifestIds: a,
                                    installationPath: l,
                                    analyticsLocation: P.Sbl.APPLICATION_STORE_PAYMENT_MODAL
                                });
                                u();
                                (0, y.uL)(P.Z5c.APPLICATION_LIBRARY)
                            }
                        };
                        e.handlePurchaseTermsChange = function(t) {
                            e.setState({
                                hasAcceptedNeccessaryTerms: t
                            })
                        };
                        return e
                    }
                    var i = n.prototype;
                    i.fetchInstallSize = function() {
                        var e = this.props,
                            t = e.application,
                            n = e.branchId,
                            r = e.buildId,
                            o = e.manifestIds,
                            i = e.buildSizeKB;
                        null != r && null != o && null == i && u.Z.wait((function() {
                            (0, l.q)(t.id, n, r, o)
                        }))
                    };
                    i.componentDidMount = function() {
                        var e = this.props,
                            t = e.application,
                            n = e.branchId,
                            r = e.buildId,
                            o = e.manifestIds,
                            i = e.sku;
                        !e.isIAP && (0, m._f)(i) && (null == r || null == o ? u.Z.wait((function() {
                            return (0, s.l)(t.id, n)
                        })) : this.fetchInstallSize())
                    };
                    i.componentDidUpdate = function(e) {
                        this.props.buildId === e.buildId && this.props.manifestIds === e.manifestIds || this.fetchInstallSize()
                    };
                    i.getHeaderBlurb = function() {
                        var e = this.props,
                            t = e.sku,
                            n = e.application,
                            r = e.isIAP;
                        if (t.isPreorder() && null != t.preorderReleaseAt) return T.Z.Messages.APPLICATION_STORE_PREORDER_PURCHASE_CONFIRMATION_BLURB.format({
                            applicationName: n.name,
                            date: t.preorderReleaseAt.format("MMMM DD")
                        });
                        if (r || [P.epS.DURABLE, P.epS.CONSUMABLE].includes(t.type)) return T.Z.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
                            applicationName: n.name,
                            itemName: t.name
                        });
                        if (t.type === P.epS.BUNDLE) return T.Z.Messages.APPLICATION_STORE_BUNDLE_PURCHASE_CONFIRMATION_BLURB.format({
                            name: t.name
                        });
                        var o = t.supportedOperatingSystems[0];
                        return T.Z.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_UNSUPPORTED_OS.format({
                            name: n.name,
                            operatingSystem: (0, I.XK)(o)
                        })
                    };
                    i.renderInstallationHeader = function() {
                        var e = this.props.application;
                        return (0, r.jsx)("div", {
                            className: R().blurb,
                            children: T.Z.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_BLURB.format({
                                name: e.name
                            })
                        })
                    };
                    i.renderInstallationBody = function() {
                        var e = this.props,
                            t = e.isFetchingBuild,
                            n = e.buildId,
                            i = e.buildSizeKB,
                            u = e.application,
                            s = this.state,
                            l = s.installPath,
                            c = s.hasInstallPathError,
                            f = s.hasAcceptedNeccessaryTerms;
                        return (0, r.jsxs)(o.Fragment, {
                            children: [(0, r.jsx)(h.Z, {
                                className: R().installSelector,
                                value: l,
                                requiredDiskKB: i,
                                onChange: this.handleInstallPathChange
                            }), (0, r.jsx)(d.Z, {
                                eulaId: u.eulaId,
                                applicationName: u.name,
                                onChange: this.handlePurchaseTermsChange,
                                className: R().storeTerms
                            }), (0, r.jsx)(g.C, {
                                className: R().confirmButton,
                                disabled: c || null == n || !f,
                                onClick: this.handleInstall,
                                submitting: t,
                                color: a.Button.Colors.GREEN,
                                children: T.Z.Messages.APPLICATION_STORE_PURCHASE_INSTALL_GAME
                            })]
                        })
                    };
                    i.renderGenericHeader = function() {
                        return (0, r.jsx)("div", {
                            className: R().blurb,
                            children: this.getHeaderBlurb()
                        })
                    };
                    i.renderBlurbBody = function() {
                        var e, t = this.props,
                            n = t.isIAP,
                            i = t.sku,
                            u = t.onClose;
                        if (i.isPreorder()) {
                            e = T.Z.Messages.APPLICATION_PREORDER_PURCHASE_CONFIRMATION_BUTTON;
                            u = this.handleGoToLibrary
                        } else e = n ? T.Z.Messages.APPLICATION_IAP_PURCHASE_RETURN_TO_GAME : T.Z.Messages.OKAY;
                        return (0, r.jsx)(o.Fragment, {
                            children: (0, r.jsx)(a.Button, {
                                className: R().confirmButton,
                                onClick: u,
                                children: e
                            })
                        })
                    };
                    i.renderBlurb = function() {
                        var e = this.props,
                            t = e.sku;
                        return e.isIAP || !(0, m._f)(t) || t.isPreorder() ? this.renderGenericHeader() : this.renderInstallationHeader()
                    };
                    i.renderBody = function() {
                        var e = this.props,
                            t = e.sku;
                        return e.isIAP || !(0, m._f)(t) || t.isPreorder() ? this.renderBlurbBody() : this.renderInstallationBody()
                    };
                    i.render = function() {
                        var e = this.props.application,
                            t = this.state.confirmHeaderIndex;
                        return (0, r.jsxs)(_.Z, {
                            direction: _.Z.Direction.VERTICAL,
                            align: _.Z.Align.CENTER,
                            children: [(0, r.jsx)(v.Z, {
                                game: e,
                                className: R().icon,
                                size: v.Z.Sizes.LARGE
                            }), (0, r.jsx)("div", {
                                className: R().header,
                                children: Z()[t]
                            }), this.renderBlurb(), (0, r.jsx)("div", {
                                className: R().divider
                            }), this.renderBody()]
                        })
                    };
                    return n
                }(o.Component);
            const D = i.ZP.connectStores([S.Z, b.Z, O.Z, E.Z], (function(e) {
                var t, n = e.application,
                    r = O.Z.getActiveLibraryApplication(n.id);
                t = null != r ? r.id : n.id;
                var o = b.Z.getTargetBuildId(n.id, t);
                return {
                    defaultInstallationPath: S.Z.defaultInstallationPath,
                    branchId: t,
                    isFetchingBuild: b.Z.isFetching(n.id, t),
                    buildId: o,
                    manifestIds: b.Z.getTargetManifests(n.id, t),
                    buildSizeKB: null != o ? b.Z.getBuildSize(o) : null,
                    hasPreviouslyAcceptedStoreTerms: E.Z.hasAcceptedStoreTerms
                }
            }))(U)
        },
        320641: (e, t, n) => {
            "use strict";
            n.d(t, {
                Y: () => i
            });
            var r = n(2590),
                o = n(473708);

            function i(e, t) {
                if (e) return o.Z.Messages.APPLICATION_STORE_PURCHASE_IAP;
                switch (t) {
                    case r.epS.DURABLE_PRIMARY:
                        return o.Z.Messages.APPLICATION_STORE_PURCHASE_APPLICATION;
                    case r.epS.DURABLE:
                        return o.Z.Messages.APPLICATION_STORE_PURCHASE_DLC;
                    case r.epS.CONSUMABLE:
                        return o.Z.Messages.APPLICATION_STORE_PURCHASE_CONSUMABLE;
                    case r.epS.BUNDLE:
                        return o.Z.Messages.APPLICATION_STORE_PURCHASE_BUNDLE
                }
            }
        },
        359891: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => Ct
            });
            var r = n(785893),
                o = n(667294),
                i = n(228721),
                a = n(202351),
                u = n(304548),
                s = n(744564),
                l = n(695166),
                c = n(315804),
                f = n(152042),
                p = n(673679),
                d = n(933599),
                h = n(856281),
                y = n(458823),
                O = n(711531),
                b = n(939065),
                E = n(886664),
                S = n(872589),
                _ = n(793461),
                v = n(615796),
                g = n(20405),
                m = n(107364),
                I = n(120415),
                P = n(421281),
                T = n(799105),
                A = n(842257),
                R = n(773262),
                N = n(520983),
                C = n(387652),
                M = n(886433),
                L = n(608452),
                w = n(473708),
                j = function(e) {
                    var t = e.submitting,
                        n = e.braintreeNonce,
                        o = e.braintreeEmail,
                        i = e.onPaypalContinue,
                        a = e.onReopenPaypal,
                        s = e.renderBackButton,
                        l = 0 !== o.length && null != n;
                    return (0, r.jsxs)(u.ModalFooter, {
                        justify: m.Z.Justify.BETWEEN,
                        direction: m.Z.Direction.HORIZONTAL,
                        children: [s(), (0, r.jsx)(u.Button, {
                            submitting: t,
                            color: l ? u.Button.Colors.BRAND : u.Button.Colors.PRIMARY,
                            onClick: l ? i : a,
                            children: l ? w.Z.Messages.NEXT : w.Z.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL
                        })]
                    })
                },
                Z = n(19120),
                U = n(700812),
                D = n(536713),
                B = n(709189),
                G = n(822511),
                k = n(856236),
                x = n(249052),
                F = n(992911),
                H = n.n(F);

            function Y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function V(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Y(e, t, n[t])
                    }))
                }
                return e
            }

            function W(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var K = function(e) {
                    var t = e.legalNotice,
                        n = e.paymentSources,
                        i = e.price,
                        a = e.hidePersonalInformation,
                        s = e.paymentSourceId,
                        l = e.isGiftable,
                        c = e.isGift,
                        f = e.needsToBeGift,
                        p = e.onPaymentSourceChange,
                        d = e.onPaymentSourceAdd,
                        h = e.onPurchaseTermsChange,
                        y = e.onToggleIsGift,
                        O = [],
                        b = null != s ? n[s] : null;
                    null != b && b.invalid && O.push((0, r.jsx)(Z.Z, {
                        icon: k.Z,
                        color: Z.Z.Colors.ERROR,
                        iconSize: Z.Z.Sizes.NONE,
                        iconClassName: H().invalidIcon,
                        children: w.Z.Messages.BILLING_PAYMENT_SOURCE_INVALID
                    }, "source_invalid"));
                    null != i && (i.taxInclusive ? O.push((0, r.jsx)(Z.Z, {
                        icon: G.Z,
                        color: Z.Z.Colors.PRIMARY,
                        iconSize: Z.Z.Sizes.LARGE,
                        children: w.Z.Messages.BILLING_SALES_TAX_INCLUDED
                    }, "tax_included")) : i.tax > 0 && O.push((0, r.jsx)(Z.Z, {
                        icon: G.Z,
                        color: Z.Z.Colors.PRIMARY,
                        iconSize: Z.Z.Sizes.LARGE,
                        children: w.Z.Messages.BILLING_SALES_TAX_ADDED.format({
                            tax: (0, x.T4)(i.tax, i.currency)
                        })
                    }, "tax_added")));
                    return (0, r.jsxs)(o.Fragment, {
                        children: [(0, r.jsx)(u.FormTitle, {
                            className: H().formTitle,
                            children: w.Z.Messages.BILLING_PAY_FOR_IT_WITH
                        }), (0, r.jsx)(U.Z, {
                            paymentSources: Object.values(n),
                            selectedPaymentSourceId: s,
                            hidePersonalInformation: a,
                            onChange: p,
                            onPaymentSourceAdd: d
                        }), O, l && (0, r.jsx)(u.Checkbox, {
                            disabled: f,
                            className: H().giftToggle,
                            type: u.Checkbox.Types.INVERTED,
                            value: c,
                            onChange: y,
                            children: (0, r.jsx)("div", {
                                className: H().checkboxLabel,
                                children: w.Z.Messages.BILLING_IS_GIFT_PURCHASE
                            })
                        }), (0, r.jsx)(D.Z, {
                            onChange: h,
                            forceShow: !0,
                            className: H().purchaseTerms,
                            finePrint: t
                        })]
                    })
                },
                z = function(e) {
                    var t = e.canSubmit,
                        n = e.submitButtonText,
                        o = e.useShinySubmitButton,
                        i = e.isPurchasing,
                        a = e.hasAcceptedTerms,
                        s = e.paymentSource,
                        l = e.onPurchase,
                        c = e.tooltipText,
                        f = e.needsToBeGift,
                        p = e.isGift,
                        d = null != s && !s.invalid,
                        h = a && !(f && !p) && d && t,
                        y = {
                            submitting: i,
                            color: u.Button.Colors.GREEN,
                            disabled: !h,
                            onClick: l
                        };
                    return (0,
                        r.jsx)(u.ModalFooter, {
                        children: (0, r.jsxs)("div", {
                            className: H().buyButtonTooltipWrapper,
                            children: [y.disabled && null != c ? (0, r.jsx)(u.Tooltip, {
                                text: c,
                                children: function(e) {
                                    return (0, r.jsx)("div", V({
                                        "aria-hidden": !0,
                                        className: H().buyButtonTooltipTarget
                                    }, e))
                                }
                            }) : null, o ? (0, r.jsx)(B.C, W(V({}, y), {
                                children: n
                            })) : (0, r.jsx)(u.Button, W(V({
                                type: "submit"
                            }, y), {
                                children: n
                            }))]
                        })
                    })
                },
                Q = function(e) {
                    var t = e.submitting,
                        n = e.braintreeNonce,
                        o = e.venmoUsername,
                        i = e.onVenmoContinue,
                        a = e.onReopenVenmo,
                        s = e.renderBackButton,
                        l = 0 !== o.length && null != n;
                    return (0, r.jsxs)(u.ModalFooter, {
                        justify: m.Z.Justify.BETWEEN,
                        direction: m.Z.Direction.HORIZONTAL,
                        children: [s(), (0, r.jsx)(u.Button, {
                            submitting: t,
                            color: l ? u.Button.Colors.BRAND : u.Button.Colors.PRIMARY,
                            onClick: l ? i : a,
                            children: l ? w.Z.Messages.NEXT : w.Z.Messages.PAYMENT_SOURCE_CONNECT_TO_VENMO
                        })]
                    })
                },
                J = n(2590),
                q = n(910368),
                X = n.n(q);

            function $(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function ee(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        s = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function te(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            ee(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            ee(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function ne(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function re(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function oe(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ie(e) {
                ie = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return ie(e)
            }

            function ae(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        oe(e, t, n[t])
                    }))
                }
                return e
            }

            function ue(e, t) {
                return !t || "object" !== le(t) && "function" != typeof t ? $(e) : t
            }

            function se(e, t) {
                se = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return se(e, t)
            }
            var le = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function ce(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = ie(e);
                    if (t) {
                        var o = ie(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return ue(this, n)
                }
            }
            var fe = function(e, t) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2];
                                                a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    }
                },
                pe = [b.Rg.PAYMENT_TYPE, b.Rg.CREDIT_CARD_INFORMATION, b.Rg.REVIEW],
                de = [b.Rg.PAYMENT_TYPE, b.Rg.CREDIT_CARD_INFORMATION, b.Rg.REVIEW],
                he = [b.Rg.PAYMENT_TYPE, b.Rg.CREDIT_CARD_INFORMATION, b.Rg.ADDRESS, b.Rg.REVIEW],
                ye = [b.Rg.PAYMENT_TYPE, b.Rg.PAYPAL, b.Rg.PAYPAL_ADDRESS, b.Rg.REVIEW],
                Oe = [b.Rg.PAYMENT_TYPE, b.Rg.PAYMENT_REQUEST_INFO, b.Rg.REVIEW],
                be = [b.Rg.PAYMENT_TYPE, b.Rg.ADDRESS, b.Rg.REVIEW],
                Ee = [b.Rg.PAYMENT_TYPE, b.Rg.ADDRESS, b.Rg.REVIEW],
                Se = [b.Rg.PAYMENT_TYPE, b.Rg.VENMO, b.Rg.VENMO_ADDRESS, b.Rg.REVIEW],
                _e = (0, P.Mg)(X().innerPadding),
                ve = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && se(e, t)
                    }(n, e);
                    var t = ce(n);

                    function n() {
                        ne(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            hasAcceptedNeccessaryTerms: !1,
                            token: null,
                            confirmingCard: !1,
                            stripe: null
                        };
                        e.handleToggleIsGift = function(t, n) {
                            var r = e.props.onIsGiftUpdate;
                            null == r || r(n)
                        };
                        e.handlePurchaseTermsChange = function(t) {
                            e.setState({
                                hasAcceptedNeccessaryTerms: t
                            })
                        };
                        e.handleReopenPaypal = function() {
                            S.i0()
                        };
                        e.handleReopenVenmo = function() {
                            S.og()
                        };
                        e.handleCardInfoChange = function(e, t) {
                            s.Z.wait((function() {
                                return d.sn(e, t)
                            }))
                        };
                        e.handleBillingAddressChange = function(e, t) {
                            s.Z.wait((function() {
                                return d.Ow(e, t)
                            }))
                        };
                        var i = $(e);
                        e.handleCreditCardAdd = te((function() {
                            var e, t, n, r, o;
                            return fe(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        e = i.props.billingAddressInfo;
                                        t = i.state, n = t.stripe, r = t.token;
                                        a.label = 1;
                                    case 1:
                                        a.trys.push([1, 3, , 4]);
                                        return [4, p.f0(n, r, e)];
                                    case 2:
                                        o = a.sent();
                                        i.props.onPaymentSourceAdd(o.id);
                                        return [3, 4];
                                    case 3:
                                        a.sent();
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }));
                        var a, l = $(e);
                        e.handleStripePaymentRequestAdd = (a = te((function(e) {
                            var t;
                            return fe(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        d.Xt(e);
                                        if (null == e) {
                                            l.props.onBack();
                                            return [2]
                                        }
                                        n.label = 1;
                                    case 1:
                                        n.trys.push([1, 3, , 4]);
                                        return [4, p.i6(e)];
                                    case 2:
                                        t = n.sent();
                                        l.props.onPaymentSourceAdd(t.id);
                                        return [3, 4];
                                    case 3:
                                        n.sent();
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        })), function(e) {
                            return a.apply(this, arguments)
                        });
                        var c = $(e);
                        e.handlePaypalAdd = te((function() {
                            var e, t, n, r, o;
                            return fe(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        e = c.props, t = e.braintreeEmail, n = e.braintreeNonce, r = e.billingAddressInfo;
                                        if (0 === t.length || null == n) return [2];
                                        i.label = 1;
                                    case 1:
                                        i.trys.push([1, 3, , 4]);
                                        return [4, p.lP(n, r)];
                                    case 2:
                                        o = i.sent();
                                        c.props.onPaymentSourceAdd(o.id);
                                        return [3, 4];
                                    case 3:
                                        i.sent();
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }));
                        var f, h = $(e);
                        e.handleVenmoAdd = te((function() {
                            var e, t, n, r, o;
                            return fe(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        e = h.props, t = e.venmoUsername, n = e.braintreeNonce, r = e.billingAddressInfo;
                                        if (0 === t.length || null == n) return [2];
                                        i.label = 1;
                                    case 1:
                                        i.trys.push([1, 3, , 4]);
                                        return [4, p.lP(n, r)];
                                    case 2:
                                        o = i.sent();
                                        h.props.onPaymentSourceAdd(o.id);
                                        return [3, 4];
                                    case 3:
                                        i.sent();
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }));
                        e.renderBackButton = function() {
                            var t = e.props,
                                n = t.step,
                                o = t.steps,
                                i = t.paymentSources,
                                a = t.onBack,
                                s = (0, b.Yp)(n, o),
                                l = (0,
                                    b.NW)(s, i) ? w.Z.Messages.BACK : w.Z.Messages.CANCEL;
                            return (0, r.jsx)(u.Button, {
                                look: u.Button.Looks.LINK,
                                className: H().backButton,
                                color: H().backButtonColor,
                                size: H().backButtonSize,
                                onClick: a,
                                children: l
                            })
                        };
                        e.stepRenderer = ae((oe(f = {}, b.Rg.PAYMENT_TYPE, {
                            renderBody: function() {
                                var t = e.props,
                                    n = t.hidePersonalInformation,
                                    i = t.onChoosePaymentType,
                                    a = t.isGiftable,
                                    s = t.needsToBeGift,
                                    l = t.isGift;
                                return n ? (0, r.jsx)(u.FormErrorBlock, {
                                    className: H().errorBlock,
                                    children: w.Z.Messages.BILLING_ERROR_ADD_PAYMENT_SOURCE_STREAMER_MODE
                                }) : (0, r.jsxs)(o.Fragment, {
                                    children: [(0, r.jsx)(A.Z, {
                                        className: H().choosePaymentSourceType,
                                        onChooseType: i,
                                        allowStripeRequestPayments: !I.FB,
                                        onStripePaymentMethodReceived: e.handleStripePaymentRequestAdd
                                    }), a && (0, r.jsx)(u.Checkbox, {
                                        disabled: s,
                                        className: H().giftToggle,
                                        type: u.Checkbox.Types.INVERTED,
                                        value: l,
                                        onChange: e.handleToggleIsGift,
                                        children: (0, r.jsx)("div", {
                                            className: H().checkboxLabel,
                                            children: w.Z.Messages.BILLING_IS_GIFT_PURCHASE
                                        })
                                    })]
                                })
                            },
                            renderFooter: function() {
                                return (0,
                                    r.jsx)(u.ModalFooter, {
                                    direction: m.Z.Direction.HORIZONTAL,
                                    children: e.renderBackButton()
                                })
                            }
                        }), oe(f, b.Rg.PAYMENT_REQUEST_INFO, {
                            renderBody: function() {
                                return (0, r.jsx)(L.k, {
                                    className: H().formItem,
                                    stripePaymentMethod: e.props.stripePaymentMethod,
                                    submitting: e.props.submitting
                                })
                            },
                            renderFooter: function() {
                                return (0, r.jsx)(u.ModalFooter, {
                                    direction: m.Z.Direction.HORIZONTAL,
                                    children: e.renderBackButton()
                                })
                            }
                        }), oe(f, b.Rg.PAYPAL, {
                            renderBody: function() {
                                return (0, r.jsx)(R.Z, {
                                    className: H().formItem
                                })
                            },
                            renderFooter: function() {
                                var t = e.props,
                                    n = t.submitting,
                                    o = t.braintreeNonce,
                                    i = t.braintreeEmail,
                                    a = t.onPaypalContinue,
                                    u = t.paypalClient;
                                return (0, r.jsx)(j, {
                                    submitting: n || null == u,
                                    braintreeNonce: o,
                                    braintreeEmail: i,
                                    onPaypalContinue: a,
                                    onReopenPaypal: e.handleReopenPaypal,
                                    renderBackButton: e.renderBackButton
                                })
                            }
                        }), oe(f, b.Rg.VENMO, {
                            renderBody: function() {
                                return (0, r.jsx)(N.Z, {
                                    className: H().formItem
                                })
                            },
                            renderFooter: function() {
                                var t = e.props,
                                    n = t.submitting,
                                    o = t.braintreeNonce,
                                    i = t.venmoUsername,
                                    a = t.onVenmoContinue,
                                    u = t.venmoClient;
                                return (0, r.jsx)(Q, {
                                    submitting: n || null == u,
                                    braintreeNonce: o,
                                    venmoUsername: i,
                                    onVenmoContinue: a,
                                    onReopenVenmo: e.handleReopenVenmo,
                                    renderBackButton: e.renderBackButton
                                })
                            }
                        }), oe(f, b.Rg.CREDIT_CARD_INFORMATION, {
                            renderBody: function() {
                                var t = e.props.billingError;
                                return (0, r.jsx)(M.j, {
                                    billingError: t,
                                    onCardInfoChange: e.handleCardInfoChange
                                })
                            },
                            renderFooter: function() {
                                var t = e.props,
                                    n = t.isCardInfoValid,
                                    o = t.onCreditCardContinue,
                                    i = e.state,
                                    a = i.stripe,
                                    u = i.confirmingCard,
                                    s = $(e),
                                    l = function() {
                                        var e = te((function(e) {
                                            var t;
                                            return fe(this, (function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        s.setState({
                                                            confirmingCard: !0
                                                        });
                                                        n.label = 1;
                                                    case 1:
                                                        n.trys.push([1, 3, 4, 5]);
                                                        return [4, p.qv(a, e)];
                                                    case 2:
                                                        t = n.sent();
                                                        s.setState({
                                                            token: t
                                                        });
                                                        d.fw();
                                                        o();
                                                        return [3, 5];
                                                    case 3:
                                                        n.sent();
                                                        return [3, 5];
                                                    case 4:
                                                        s.setState({
                                                            confirmingCard: !1
                                                        });
                                                        return [7];
                                                    case 5:
                                                        return [2]
                                                }
                                            }))
                                        }));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }();
                                return (0, r.jsx)(E.ElementsConsumer, {
                                    children: function(t) {
                                        var o = t.elements;
                                        return (0, r.jsx)(M.r, {
                                            isCardInfoValid: n,
                                            submitting: u,
                                            renderBackButton: e.renderBackButton,
                                            onCreditCardContinue: function() {
                                                return l(o)
                                            }
                                        })
                                    }
                                })
                            }
                        }), oe(f, b.Rg.PAYPAL_ADDRESS, {
                            renderBody: function() {
                                var t = e.props,
                                    n = t.billingAddressInfo,
                                    o = t.billingError;
                                return (0, r.jsx)(C.P, {
                                    billingAddressInfo: n,
                                    billingError: o,
                                    onBillingAddressChange: e.handleBillingAddressChange,
                                    paymentSourceType: J.HeQ.PAYPAL
                                })
                            },
                            renderFooter: function() {
                                var t = e.props,
                                    n = t.isBillingAddressInfoValid,
                                    o = t.submitting;
                                return (0, r.jsx)(C.B, {
                                    isBillingAddressInfoValid: n,
                                    submitting: o,
                                    onContinue: e.handlePaypalAdd,
                                    renderBackButton: e.renderBackButton
                                })
                            }
                        }), oe(f, b.Rg.VENMO_ADDRESS, {
                            renderBody: function() {
                                var t = e.props,
                                    n = t.billingAddressInfo,
                                    o = t.billingError;
                                return (0, r.jsx)(C.P, {
                                    billingAddressInfo: n,
                                    billingError: o,
                                    onBillingAddressChange: e.handleBillingAddressChange,
                                    paymentSourceType: J.HeQ.VENMO
                                })
                            },
                            renderFooter: function() {
                                var t = e.props,
                                    n = t.isBillingAddressInfoValid,
                                    o = t.submitting;
                                return (0, r.jsx)(C.B, {
                                    isBillingAddressInfoValid: n,
                                    submitting: o,
                                    onContinue: e.handleVenmoAdd,
                                    renderBackButton: e.renderBackButton
                                })
                            }
                        }), oe(f, b.Rg.ADDRESS, {
                            renderBody: function() {
                                var t = e.props,
                                    n = t.billingAddressInfo,
                                    o = t.billingError,
                                    i = t.steps;
                                return (0, r.jsx)(C.P, {
                                    billingAddressInfo: n,
                                    billingError: o,
                                    onBillingAddressChange: e.handleBillingAddressChange,
                                    paymentSourceType: i === be ? J.HeQ.GIROPAY : J.HeQ.CARD
                                })
                            },
                            renderFooter: function() {
                                var t = e.props,
                                    n = t.isBillingAddressInfoValid,
                                    o = t.submitting;
                                return (0, r.jsx)(C.B, {
                                    isBillingAddressInfoValid: n,
                                    submitting: o,
                                    onContinue: e.handleCreditCardAdd,
                                    renderBackButton: e.renderBackButton
                                })
                            }
                        }), oe(f, b.Rg.REVIEW, {
                            renderBody: function() {
                                var t = e.props,
                                    n = t.legalNotice,
                                    o = t.paymentSources,
                                    i = t.price,
                                    a = t.hidePersonalInformation,
                                    u = t.paymentSourceId,
                                    s = t.onReviewPaymentSourceChange,
                                    l = t.onReviewPaymentSourceAdd,
                                    c = t.isGiftable,
                                    f = t.isGift,
                                    p = t.needsToBeGift;
                                return (0, r.jsx)(K, {
                                    legalNotice: n,
                                    paymentSources: o,
                                    price: i,
                                    hidePersonalInformation: a,
                                    paymentSourceId: u,
                                    onPaymentSourceChange: s,
                                    onPaymentSourceAdd: l,
                                    onPurchaseTermsChange: e.handlePurchaseTermsChange,
                                    onToggleIsGift: e.handleToggleIsGift,
                                    isGiftable: c,
                                    isGift: f,
                                    needsToBeGift: p
                                })
                            },
                            renderFooter: function() {
                                var t = e.props,
                                    n = t.canSubmit,
                                    o = t.submitButtonText,
                                    i = t.useShinySubmitButton,
                                    a = t.isPurchasing,
                                    u = t.paymentSourceId,
                                    s = t.onPurchase,
                                    l = t.needsToBeGift,
                                    c = t.isGift,
                                    f = t.paymentSources;
                                return (0, r.jsx)(z, {
                                    canSubmit: n,
                                    submitButtonText: o,
                                    useShinySubmitButton: i,
                                    isPurchasing: a,
                                    hasAcceptedTerms: e.state.hasAcceptedNeccessaryTerms,
                                    paymentSource: null != u ? f[u] : null,
                                    onPurchase: s,
                                    tooltipText: e.disabledTooltip,
                                    needsToBeGift: l,
                                    isGift: c
                                })
                            }
                        }), oe(f, b.Rg.CONFIRM, {
                            renderBody: J.VqG,
                            renderFooter: J.VqG
                        }), oe(f, b.Rg.AWAITING_AUTHENTICATION, {
                            renderBody: function() {
                                return (0, r.jsx)(u.FormTitle, {
                                    className: H().formTitle,
                                    children: w.Z.Messages.PAYMENT_WAITING_FOR_AUTHENTICATION
                                })
                            },
                            renderFooter: J.VqG
                        }), f), e.props.extraRenderers);
                        return e
                    }
                    var i = n.prototype;
                    i.componentDidMount = function() {
                        var e = this;
                        return te((function() {
                            var t, n, r, o, i, a;
                            return fe(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        S.eI();
                                        t = e.props, n = t.onPaymentSourceChange, r = t.paymentSources, o = t.defaultPaymentSourceId,
                                            i = t.paymentSourceId;
                                        null != n && (null != i && i !== o && null != r[i] ? n(r[i]) : null != o && null != r[o] ? n(r[o]) : n(null));
                                        return [4, (0, T.d2)()];
                                    case 1:
                                        a = u.sent();
                                        e.setState({
                                            stripe: a
                                        });
                                        return [2]
                                }
                            }))
                        }))()
                    };
                    i.componentDidUpdate = function(e) {
                        var t = this.props,
                            n = t.onPaymentSourceChange,
                            r = t.paymentSources,
                            o = t.paymentSourceId;
                        e.paymentSourceId !== o && null != o && null != r[o] && (null == n || n(r[o]))
                    };
                    i.componentWillUnmount = function() {
                        S.gy();
                        d.tt();
                        var e = this.props.onClearError;
                        null == e || e();
                        d.fw()
                    };
                    i.preventDefault = function(e) {
                        e.preventDefault()
                    };
                    i.renderHeader = function() {
                        var e = this.props,
                            t = e.renderHeader,
                            n = e.billingError;
                        return t(e.step, e.steps.map((function(e) {
                            return {
                                id: e,
                                label: (0, b.fO)(e)
                            }
                        })), null == (0, b.ly)(n) ? n : null)
                    };
                    i.render = function() {
                        var e = this.props,
                            t = e.size,
                            n = e.step,
                            o = e.steps,
                            i = e.className,
                            a = e.transitionState,
                            s = this.stepRenderer[n],
                            l = s.renderBody();
                        return (0, r.jsx)(E.Elements, {
                            options: J.OBo,
                            stripe: this.state.stripe,
                            children: (0, r.jsx)(u.ModalRoot, {
                                size: t,
                                className: i,
                                "aria-label": w.Z.Messages.SKU_PAYMENT_STEPS_LABEL,
                                transitionState: a,
                                children: (0, r.jsx)(u.Scroller, {
                                    children: (0, r.jsxs)("form", {
                                        className: H().form,
                                        onSubmit: this.preventDefault,
                                        children: [this.renderHeader(), n !== b.Rg.CONFIRM ? (0, r.jsx)("div", {
                                            className: H().divider
                                        }) : null, null != l && (0, r.jsx)(u.ModalContent, {
                                            className: H().modalContent,
                                            children: (0, r.jsx)("div", {
                                                className: H().content,
                                                children: (0, r.jsx)(u.Sequencer, {
                                                    step: n,
                                                    steps: o,
                                                    sideMargin: _e,
                                                    children: l
                                                })
                                            })
                                        }), s.renderFooter()]
                                    })
                                })
                            })
                        })
                    };
                    ! function(e, t, n) {
                        t && re(e.prototype, t);
                        n && re(e, n)
                    }(n, [{
                        key: "disabledTooltip",
                        get: function() {
                            var e = this.props,
                                t = e.needsToBeGift,
                                n = e.isGift,
                                r = e.isGiftable;
                            return this.state.hasAcceptedNeccessaryTerms ? t && !n ? r ? w.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY : w.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY_UNGIFTABLE : null : w.Z.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP
                        }
                    }]);
                    return n
                }(o.PureComponent);
            ve.defaultProps = {
                canSubmit: !0,
                useShinySubmitButton: !1,
                size: u.ModalSize.SMALL,
                billingError: null,
                extraRenderers: {},
                className: H().modal
            };
            const ge = a.ZP.connectStores([O.Z, h.Z, v.Z, _.Z, g.Z], (function() {
                return {
                    submitting: v.Z.isBusy,
                    paymentSources: O.Z.paymentSources,
                    defaultPaymentSourceId: O.Z.defaultPaymentSourceId,
                    stripePaymentMethod: h.Z.stripePaymentMethod,
                    creditCardInfo: h.Z.getCreditCardInfo(),
                    isCardInfoValid: h.Z.isCardInfoValid,
                    billingAddressInfo: h.Z.getBillingAddressInfo(),
                    isBillingAddressInfoValid: h.Z.isBillingAddressInfoValid,
                    braintreeEmail: h.Z.braintreeEmail,
                    braintreeNonce: h.Z.braintreeNonce,
                    venmoUsername: h.Z.venmoUsername,
                    billingError: h.Z.error,
                    paypalClient: g.Z.getPayPalClient(),
                    venmoClient: g.Z.getVenmoClient(),
                    hidePersonalInformation: _.Z.hidePersonalInformation
                }
            }))(ve);

            function me(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Ie(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function Pe(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        s = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function Te(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            Pe(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            Pe(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function Ae(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function Re(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Ne(e) {
                Ne = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Ne(e)
            }

            function Ce(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function Me(e, t) {
                return !t || "object" !== Ze(t) && "function" != typeof t ? Ie(e) : t
            }

            function Le(e, t) {
                Le = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Le(e, t)
            }

            function we(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || Ue(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function je(e) {
                return function(e) {
                    if (Array.isArray(e)) return me(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || Ue(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Ze = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Ue(e, t) {
                if (e) {
                    if ("string" == typeof e) return me(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? me(e, t) : void 0
                }
            }

            function De(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Ne(e);
                    if (t) {
                        var o = Ne(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Me(this, n)
                }
            }
            var Be = function(e, t) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2];
                                                a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    }
                },
                Ge = [b.Rg.REVIEW, b.Rg.CONFIRM],
                ke = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && Le(e, t)
                    }(n, e);
                    var t = De(n);

                    function n(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        var r;
                        (r = t.call(this, e))._hasChangedSteps = !1;
                        r.handlePaypalContinue = function() {
                            r.setState({
                                step: b.Rg.PAYPAL_ADDRESS
                            })
                        };
                        r.handleVenmoContinue = function() {
                            r.setState({
                                step: b.Rg.VENMO_ADDRESS
                            })
                        };
                        r.handleCreditCardContinue = function() {
                            r.setState({
                                step: b.Rg.ADDRESS
                            })
                        };
                        r.handleReviewPaymentSourceChange = function(e) {
                            r.setState({
                                paymentSourceId: null != e ? e.id : null
                            })
                        };
                        r.handleReviewPaymentSourceAdd = function() {
                            r.setState({
                                step: b.Rg.PAYMENT_TYPE,
                                steps: de,
                                paymentSourceId: null
                            });
                            var e = r.props.onClearError;
                            e && e()
                        };
                        r.handleBack = function() {
                            var e = r.props,
                                t = e.paymentSources,
                                n = e.onClose,
                                o = r.state,
                                i = o.step,
                                a = o.steps,
                                u = r.stepsToRender,
                                s = (0, b.Yp)(i, u);
                            if (s > 0) {
                                var l = u[s - 1],
                                    c = l === b.Rg.PAYMENT_TYPE;
                                c && d.fw();
                                r.setState({
                                    step: l,
                                    steps: c ? de : a
                                })
                            } else if ((0, b.NW)(s, t)) {
                                var f = r.props.defaultPaymentSourceId;
                                r.setState({
                                    step: b.Rg.REVIEW,
                                    steps: pe,
                                    paymentSourceId: f
                                })
                            } else n()
                        };
                        r.handleChoosePaymentType = function(e) {
                            switch (e) {
                                case J.HeQ.PAYPAL:
                                    r.setState({
                                        step: b.Rg.PAYPAL,
                                        steps: ye
                                    });
                                    break;
                                case J.HeQ.CARD:
                                    r.setState({
                                        step: b.Rg.CREDIT_CARD_INFORMATION,
                                        steps: he
                                    });
                                    break;
                                case J.HeQ.PAYMENT_REQUEST:
                                    r.setState({
                                        step: b.Rg.PAYMENT_REQUEST_INFO,
                                        steps: Oe
                                    });
                                    break;
                                case J.HeQ.GIROPAY:
                                    r.setState({
                                        step: b.Rg.ADDRESS,
                                        steps: be
                                    });
                                    break;
                                case J.HeQ.PAYSAFE_CARD:
                                    r.setState({
                                        step: b.Rg.ADDRESS,
                                        steps: Ee
                                    });
                                    break;
                                case J.HeQ.VENMO:
                                    r.setState({
                                        step: b.Rg.VENMO,
                                        steps: Se
                                    })
                            }
                        };
                        r.handlePaymentSourceAdd = function(e) {
                            r.setState({
                                step: b.Rg.REVIEW,
                                paymentSourceId: e
                            })
                        };
                        var o = Ie(r);
                        r.handlePurchase = Te((function() {
                            var e, t, n, r, i;
                            return Be(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        e = o.props, t = e.paymentSources, n = e.onPurchase, r = e.isGift;
                                        if (null == (i = o.state.paymentSourceId)) return [2];
                                        a.label = 1;
                                    case 1:
                                        a.trys.push([1, 3, , 4]);
                                        return [4, n(t[i], r)];
                                    case 2:
                                        a.sent();
                                        o.setState({
                                            steps: Ge,
                                            step: b.Rg.CONFIRM
                                        });
                                        return [3, 4];
                                    case 3:
                                        a.sent();
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }));
                        r.handleSelectPlan = function() {
                            var e = r.props.paymentSources,
                                t = Object.values(e).length > 0;
                            r.setState({
                                step: t ? b.Rg.REVIEW : b.Rg.PAYMENT_TYPE
                            })
                        };
                        var i = e.defaultPaymentSourceId,
                            a = e.paymentSources,
                            u = e.initialStep,
                            s = Object.values(a).length > 0,
                            l = u;
                        null == l && (l = s ? b.Rg.REVIEW : b.Rg.PAYMENT_TYPE);
                        r.state = {
                            paymentSourceId: i,
                            steps: s ? pe : de,
                            step: l,
                            errorStep: null
                        };
                        return r
                    }
                    var o = n.prototype;
                    o.componentDidMount = function() {
                        O.Z.hasFetchedPaymentSources || p.tZ()
                    };
                    o.componentDidUpdate = function(e, t) {
                        var n = this.props.onStepChange,
                            r = this.state.step;
                        if (r !== t.step) {
                            this._hasChangedSteps = !0;
                            null != n && n(t.step, r)
                        }
                    };
                    o.render = function() {
                        var e, t = this,
                            n = this.props,
                            o = n.isPurchasing,
                            i = n.canSubmit,
                            a = n.submitButtonText,
                            u = n.useShinySubmitButton,
                            s = n.legalNotice,
                            l = n.renderHeader,
                            c = n.onPaymentSourceChange,
                            f = n.price,
                            p = n.onClearError,
                            d = n.size,
                            h = n.renderConfirmationBody,
                            y = n.renderConfirmationFooter,
                            O = n.className,
                            E = n.isGift,
                            S = n.isGiftable,
                            _ = n.needsToBeGift,
                            v = n.onIsGiftUpdate,
                            g = n.transitionState,
                            m = (Re(e = {}, b.Rg.CONFIRM, {
                                renderBody: h,
                                renderFooter: y
                            }), Re(e, b.Rg.SELECT_PLAN, {
                                renderBody: function() {
                                    return t.props.renderSelectPlanBody(t.handleSelectPlan)
                                },
                                renderFooter: function() {
                                    return t.props.renderSelectPlanFooter()
                                }
                            }), e),
                            I = this.state,
                            P = I.step,
                            T = I.paymentSourceId,
                            A = this.stepsToRender;
                        return (0, r.jsx)(ge, {
                            transitionState: g,
                            className: O,
                            isPurchasing: o,
                            canSubmit: i,
                            submitButtonText: a,
                            useShinySubmitButton: u,
                            legalNotice: s,
                            renderHeader: l,
                            onPaymentSourceChange: c,
                            price: f,
                            onClearError: p,
                            size: d,
                            extraRenderers: m,
                            step: P,
                            steps: A,
                            paymentSourceId: T,
                            isGiftable: S,
                            isGift: E,
                            needsToBeGift: _,
                            onIsGiftUpdate: v,
                            onBack: this.handleBack,
                            onChoosePaymentType: this.handleChoosePaymentType,
                            onCreditCardContinue: this.handleCreditCardContinue,
                            onPaymentSourceAdd: this.handlePaymentSourceAdd,
                            onPurchase: this.handlePurchase,
                            onPaypalContinue: this.handlePaypalContinue,
                            onVenmoContinue: this.handleVenmoContinue,
                            onReviewPaymentSourceChange: this.handleReviewPaymentSourceChange,
                            onReviewPaymentSourceAdd: this.handleReviewPaymentSourceAdd
                        })
                    };
                    n.getDerivedStateFromProps = function(e, t) {
                        var n = e.billingError,
                            r = e.isAwaitingAuthentication,
                            o = t.errorStep,
                            i = {};
                        if (null == n) null != o && (i.errorStep = null);
                        else {
                            var a = (0, b.ly)(n);
                            if (null != a && a !== t.errorStep) {
                                i.step = a;
                                i.errorStep = a
                            }
                        }
                        null == t.paymentSourceId && null != e.defaultPaymentSourceId && (i.paymentSourceId = e.defaultPaymentSourceId);
                        r ? i.step = b.Rg.AWAITING_AUTHENTICATION : t.step === b.Rg.AWAITING_AUTHENTICATION && (i.step = null != n ? b.Rg.REVIEW : b.Rg.CONFIRM);
                        return i
                    };
                    ! function(e, t, n) {
                        t && Ae(e.prototype, t);
                        n && Ae(e, n)
                    }(n, [{
                        key: "stepsToRender",
                        get: function() {
                            var e = this.props.prependSteps,
                                t = this.state.steps;
                            return null != e ? je(e).concat(je(t)) : t
                        }
                    }, {
                        key: "closable",
                        get: function() {
                            var e = this.state.step;
                            return 0 === (0, b.Yp)(e, this.stepsToRender) || !this._hasChangedSteps
                        }
                    }]);
                    return n
                }(o.Component);
            ke.defaultProps = {
                useShinySubmitButton: !1,
                needsToBeGift: !1,
                isGiftable: !1,
                isGift: !1,
                renderConfirmationBody: J.VqG,
                renderConfirmationFooter: J.VqG,
                renderSelectPlanBody: J.VqG,
                renderSelectPlanFooter: J.VqG
            };
            const xe = o.forwardRef((function(e, t) {
                var n = we((0, a.Wu)([O.Z], (function() {
                        return [O.Z.paymentSources, O.Z.defaultPaymentSourceId]
                    })), 2),
                    o = n[0],
                    i = n[1],
                    u = (0, a.e7)([h.Z], (function() {
                        return h.Z.error
                    })),
                    s = we((0, a.Wu)([y.Z], (function() {
                        return [y.Z.error, y.Z.isAwaitingAuthentication]
                    })), 2),
                    l = s[0],
                    c = s[1];
                return (0, r.jsx)(ke, Ce(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            Re(e, t, n[t])
                        }))
                    }
                    return e
                }({}, e), {
                    ref: t,
                    billingError: null != l ? l : u,
                    paymentSources: o,
                    defaultPaymentSourceId: i,
                    isAwaitingAuthentication: c
                }))
            }));
            var Fe = n(446483),
                He = n(560213),
                Ye = n(94340),
                Ve = n(959207),
                We = n(473903),
                Ke = n(151367),
                ze = n(908434),
                Qe = n(746974),
                Je = n(325213),
                qe = n(669426),
                Xe = n(750203),
                $e = n(652591),
                et = n(661123),
                tt = n(557931),
                nt = n(534681),
                rt = n(934869),
                ot = n(910740),
                it = n(320641),
                at = n(6369),
                ut = n.n(at);

            function st(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function lt(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function ct(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        s = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function ft(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            ct(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            ct(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function pt(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function dt(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function ht(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function yt(e) {
                yt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return yt(e)
            }

            function Ot(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                t && vt(e, t)
            }

            function bt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        ht(e, t, n[t])
                    }))
                }
                return e
            }

            function Et(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function St(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function _t(e, t) {
                return !t || "object" !== mt(t) && "function" != typeof t ? lt(e) : t
            }

            function vt(e, t) {
                vt = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return vt(e, t)
            }

            function gt(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return st(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return st(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var mt = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function It(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = yt(e);
                    if (t) {
                        var o = yt(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return _t(this, n)
                }
            }
            var Pt, Tt = function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };
            ! function(e) {
                e.UNSUPPORTED_OS = "UNSUPPORTED_OS";
                e.TEST_MODE = "TEST_MODE";
                e.GIFT_ONLY = "GIFT_ONLY";
                e.PREORDER = "PREORDER"
            }(Pt || (Pt = {}));
            var At = function(e) {
                    Ot(n, e);
                    var t = It(n);

                    function n() {
                        pt(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            paymentSourceId: null
                        };
                        e._loadId = (0, i.Z)();
                        e._stepStartTime = Date.now();
                        e._flowStartTime = Date.now();
                        e._paymentModalRef = o.createRef();
                        e.handlePaymentSourceChange = function(t) {
                            var n = e.props,
                                r = n.applicationId,
                                o = n.skuId;
                            if (null != t) {
                                c.x2(r, o, t.id);
                                e.setState({
                                    paymentSourceId: t.id
                                })
                            } else {
                                c.x2(r, o, null);
                                e.setState({
                                    paymentSourceId: null
                                })
                            }
                        };
                        var a, s = lt(e);
                        e.handlePurchase = (a = ft((function(e) {
                            var t, n, r, o, i, a, u;
                            return Tt(this, (function(f) {
                                switch (f.label) {
                                    case 0:
                                        t = s.props, n = t.applicationId, r = t.sku;
                                        o = s.getPrice();
                                        i = null != o ? o.amount : 0;
                                        a = null != o ? o.currency : J.pKx.USD;
                                        if (null == r) throw new Error("SKU is null during purchase");
                                        if (ze.Z.isPurchasingSKU) return [2];
                                        f.label = 1;
                                    case 1:
                                        f.trys.push([1, 3, , 4]);
                                        $e.default.track(J.rMx.PAYMENT_FLOW_COMPLETED, Et(bt({}, s.getBaseAnalyticsData()), {
                                            duration_ms: Date.now() - s._flowStartTime
                                        }));
                                        return [4, c.ZZ(n, r.id, {
                                            expectedAmount: i,
                                            expectedCurrency: a,
                                            paymentSource: e,
                                            analyticsLoadId: s._loadId,
                                            isGift: s.isGift
                                        })];
                                    case 2:
                                        f.sent();
                                        (0, l.Bv)();
                                        return [3, 4];
                                    case 3:
                                        u = f.sent();
                                        $e.default.track(J.rMx.PAYMENT_FLOW_FAILED, Et(bt({}, s.getBaseAnalyticsData()), {
                                            payment_gateway: e.type === J.HeQ.CARD ? J.gg$.STRIPE : J.gg$.BRAINTREE,
                                            payment_source_id: e.id,
                                            duration_ms: Date.now() - s._flowStartTime,
                                            payment_error_code: u.code
                                        }));
                                        throw u;
                                    case 4:
                                        return [2]
                                }
                            }))
                        })), function(e) {
                            return a.apply(this, arguments)
                        });
                        e.handleClose = function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                n = e.props.onClose;
                            n(t)
                        };
                        e.handleStepChange = function(t, n) {
                            var r = Date.now();
                            $e.default.track(J.rMx.PAYMENT_FLOW_STEP, Et(bt({}, e.getBaseAnalyticsData()), {
                                from_step: t,
                                to_step: n,
                                step_duration_ms: r - e._stepStartTime,
                                flow_duration_ms: r - e._flowStartTime
                            }));
                            e._stepStartTime = r;
                            n === b.Rg.CONFIRM && c.WD()
                        };
                        e.renderHeader = function(t, n, o) {
                            var i = e.props.application;
                            return t === b.Rg.CONFIRM ? null != i ? (0, r.jsx)(Fe.Z, {
                                application: i,
                                splashSize: 880
                            }) : null : e.renderDefaultHeader(t, n, o)
                        };
                        e.renderConfirmation = function() {
                            var t = e.props,
                                n = t.application,
                                o = t.sku,
                                i = t.isIAP,
                                a = t.giftCode;
                            if (null == o || null == n) throw new Error("No SKU for confirmation step!");
                            return (0, r.jsx)("div", {
                                className: ut().confirmContent,
                                children: (0, r.jsxs)(m.Z, {
                                    direction: m.Z.Direction.VERTICAL,
                                    children: [(0, r.jsx)(u.ModalCloseButton, {
                                        onClick: function() {
                                            return e.handleClose()
                                        },
                                        className: ut().confirmCloseButton
                                    }), null != a ? (0, r.jsx)(rt.Z, {
                                        giftCode: a,
                                        application: n,
                                        sku: o,
                                        onClose: function() {
                                            return e.handleClose()
                                        }
                                    }) : (0, r.jsx)(ot.Z, {
                                        application: n,
                                        sku: o,
                                        isIAP: i,
                                        onClose: function() {
                                            return e.handleClose()
                                        }
                                    })]
                                })
                            })
                        };
                        return e
                    }
                    var a = n.prototype;
                    a.getSkuPrice = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state,
                            n = e.prices,
                            r = t.paymentSourceId;
                        return null == n ? null : n[null != r ? r : ze.c]
                    };
                    a.componentDidMount = function() {
                        var e = this,
                            t = this.props,
                            n = t.sku,
                            r = t.skuId,
                            o = t.applicationId;
                        null == n ? c.jU(o, r).catch((function(t) {
                            return e.handleClose(t.message)
                        })) : $e.default.track(J.rMx.PAYMENT_FLOW_STARTED, this.getBaseAnalyticsData())
                    };
                    a.componentDidUpdate = function(e, t) {
                        null == e.sku && null != this.props.sku && $e.default.track(J.rMx.PAYMENT_FLOW_STARTED, this.getBaseAnalyticsData());
                        this.checkPriceChange(this.getSkuPrice(e, t), this.getSkuPrice())
                    };
                    a.checkPriceChange = function(e, t) {
                        var n = this.props,
                            r = n.sku,
                            o = n.onClose;
                        null != e && null != t && e.discount_percent_off !== t.discount_percent_off && s.Z.wait((function() {
                            if (null == r) throw new Error("Unexpected null SKU");
                            o(J.G5l)
                        }))
                    };
                    a.getPrice = function() {
                        var e = this.props,
                            t = e.sku,
                            n = e.isFetchingSKU;
                        if (null == t || n) return null;
                        var r = this.getSkuPrice();
                        if (null != r) return {
                            amount: r.amount,
                            tax: r.tax,
                            taxInclusive: r.tax_inclusive,
                            currency: r.currency
                        };
                        if (null == this.state.paymentSourceId) {
                            var o = t.getPrice();
                            if (null == o) throw new Error("Sku Price cannot be null");
                            return {
                                amount: o.amount,
                                tax: 0,
                                taxInclusive: !1,
                                currency: o.currency
                            }
                        }
                        return null
                    };
                    a.getBaseAnalyticsData = function() {
                        var e = this.props,
                            t = e.sku,
                            n = e.analyticsLocation,
                            r = e.appContext,
                            o = e.promotionId;
                        if (null == t) return {};
                        var i = this.getPrice();
                        return Et(bt({}, (0, Ye.Z)(t)), {
                            load_id: this._loadId,
                            payment_type: J.Zuq[J.GZQ.ONE_TIME],
                            is_gift: this.isGift,
                            client_event_source: r === J.IlC.OVERLAY ? J.IlC.OVERLAY : null,
                            location: n,
                            price: null != i ? i.amount : null,
                            currency: null != i ? i.currency : null,
                            location_promotion_id: o
                        })
                    };
                    a.renderPurchaseWarning = function() {
                        var e = this.props,
                            t = e.sku,
                            n = e.isInTestMode,
                            i = e.isIAP,
                            a = e.isUserEntitledToSku;
                        if (null == t) return null;
                        var u = (0, nt.hX)((0, I.Xf)()),
                            s = [];
                        null != u && t.supportedOperatingSystems.includes(u) || i || s.push((0, r.jsx)(Z.Z, {
                            icon: k.Z,
                            iconSize: Z.Z.Sizes.SMALL,
                            color: Z.Z.Colors.WARNING,
                            className: ut().errorBlock,
                            children: w.Z.Messages.APPLICATION_STORE_PURCHASE_GAME_CURRENT_OS_UNSUPPORTED
                        }, Pt.UNSUPPORTED_OS));
                        n && s.push((0, r.jsx)(Z.Z, {
                            icon: k.Z,
                            iconSize: Z.Z.Sizes.SMALL,
                            color: Z.Z.Colors.WARNING,
                            className: ut().errorBlock,
                            children: w.Z.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
                        }, Pt.TEST_MODE));
                        !0 === a && this.isGiftable && s.push((0, r.jsx)(Z.Z, {
                            icon: k.Z,
                            iconSize: Z.Z.Sizes.SMALL,
                            color: Z.Z.Colors.PRIMARY,
                            className: ut().errorBlock,
                            children: w.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY
                        }, Pt.GIFT_ONLY));
                        t.isPreorder() && s.push((0, r.jsx)(Z.Z, {
                            icon: k.Z,
                            iconSize: Z.Z.Sizes.SMALL,
                            color: Z.Z.Colors.PRIMARY,
                            className: ut().errorBlock,
                            children: w.Z.Messages.APPLICATION_STORE_PURCHASE_WARNING_PREORDER.format({
                                date: (0, tt.en)(t)
                            })
                        }, Pt.PREORDER));
                        return (0, r.jsx)(o.Fragment, {
                            children: s
                        })
                    };
                    a.renderGenericError = function(e, t) {
                        return null == e && null == t ? null : (0, r.jsx)(u.FormErrorBlock, {
                            className: ut().errorBlock,
                            children: null != e ? e.message : null != t ? t.message : null
                        })
                    };
                    a.renderDefaultHeader = function(e, t, n) {
                        var o = this,
                            i = this.props,
                            a = i.isIAP,
                            s = i.application,
                            l = i.sku,
                            c = i.purchaseError;
                        if (null == l || null == s) return null;
                        var f = this.getPrice();
                        return (0, r.jsxs)(u.ModalHeader, {
                            direction: m.Z.Direction.VERTICAL,
                            align: m.Z.Align.START,
                            separator: !1,
                            children: [(0, r.jsx)(Fe.Z, {
                                application: s,
                                splashSize: 880
                            }), (0, r.jsxs)(m.Z, {
                                align: m.Z.Align.CENTER,
                                className: ut().headerHeader,
                                children: [(0, r.jsx)(u.FormTitle, {
                                    tag: u.FormTitleTags.H4,
                                    children: (0, it.Y)(a, l.type)
                                }), (0, r.jsx)(u.ModalCloseButton, {
                                    onClick: function() {
                                        return o.handleClose()
                                    }
                                })]
                            }), (0, r.jsxs)(m.Z, {
                                align: m.Z.Align.CENTER,
                                className: ut().headerContent,
                                children: [(0, r.jsxs)(m.Z, {
                                    align: m.Z.Align.CENTER,
                                    children: [(0, r.jsx)(Xe.Z, {
                                        game: s
                                    }), (0, r.jsx)("div", {
                                        className: ut().applicationName,
                                        children: l.name
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: ut().price,
                                    children: null != f ? (0, x.T4)(f.amount, f.currency) : (0, r.jsx)(u.Spinner, {
                                        type: u.Spinner.Type.PULSING_ELLIPSIS,
                                        className: ut().priceSpinner
                                    })
                                })]
                            }), this.renderPurchaseWarning(), this.renderGenericError(c, n), t.length > 1 ? (0, r.jsx)(qe.Z, {
                                activeId: e,
                                breadcrumbs: t,
                                className: ut().breadcrumbs
                            }) : null]
                        })
                    };
                    a.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.sku,
                            o = t.isFetchingSKU,
                            i = t.isPurchasing,
                            a = t.isEmbeddedIAP,
                            s = t.purchaseError,
                            l = t.isUserEntitledToSku,
                            p = t.forceConfirmationStepOnMount,
                            d = t.transitionState;
                        return null == n || o ? (0, r.jsx)(u.Spinner, {}) : (0, r.jsx)(xe, {
                            ref: this._paymentModalRef,
                            transitionState: d,
                            canSubmit: null != this.getSkuPrice(),
                            needsToBeGift: n.type === J.epS.DURABLE_PRIMARY && !0 === l,
                            isGiftable: this.isGiftable,
                            legalNotice: a ? (0, r.jsx)(f.Z, {
                                isEmbeddedIAP: a
                            }) : null,
                            isPurchasing: i,
                            purchaseError: s,
                            price: this.getPrice(),
                            size: u.ModalSize.SMALL,
                            onPurchase: this.handlePurchase,
                            onIsGiftUpdate: c.x9,
                            onPaymentSourceChange: this.handlePaymentSourceChange,
                            onClose: function() {
                                return e.handleClose()
                            },
                            onClearError: c.pB,
                            renderHeader: this.renderHeader,
                            renderConfirmationBody: this.renderConfirmation,
                            submitButtonText: this.isGift ? w.Z.Messages.APPLICATION_STORE_BUY_GIFT : w.Z.Messages.APPLICATION_STORE_BUY,
                            initialStep: p ? b.Rg.CONFIRM : null,
                            onStepChange: this.handleStepChange,
                            isGift: this.isGift
                        })
                    };
                    ! function(e, t, n) {
                        t && dt(e.prototype, t);
                        n && dt(e, n)
                    }(n, [{
                        key: "closable",
                        get: function() {
                            var e = this._paymentModalRef.current;
                            return null != e && e.closable
                        }
                    }, {
                        key: "isGiftable",
                        get: function() {
                            var e = this.props.sku;
                            return null != e && e.isGiftable(this.getPrice())
                        }
                    }, {
                        key: "isGift",
                        get: function() {
                            return this.props.isGift && this.isGiftable
                        }
                    }]);
                    return n
                }(o.PureComponent),
                Rt = o.forwardRef((function(e, t) {
                    var n, o, i = e.applicationId,
                        u = e.skuId,
                        s = St(e, ["applicationId", "skuId"]),
                        l = (0, a.e7)([Ve.Z], (function() {
                            return Ve.Z.getGame(i)
                        })),
                        c = (0, et.yE)(null !== (n = null == l ? void 0 : l.flags) && void 0 !== n ? n : 0, J.udG.EMBEDDED) && (0, et.yE)(null !== (o = null == l ? void 0 : l.flags) && void 0 !== o ? o : 0, J.udG.EMBEDDED_IAP),
                        f = gt((0, a.Wu)([ze.Z], (function() {
                            return [ze.Z.getPricesForSku(u), ze.Z.isPurchasingSKU, ze.Z.error, ze.Z.analyticsLocation, ze.Z.promotionId, ze.Z.giftCode, ze.Z.isGift, ze.Z.isIAP, ze.Z.forceConfirmationStepOnMount]
                        })), 9),
                        p = f[0],
                        d = f[1],
                        h = f[2],
                        O = f[3],
                        b = f[4],
                        E = f[5],
                        S = f[6],
                        _ = f[7],
                        v = f[8],
                        g = gt((0, a.Wu)([Qe.Z], (function() {
                            return [Qe.Z.get(u), Qe.Z.isFetching(u)]
                        })), 2),
                        m = g[0],
                        I = g[1],
                        P = (0, a.e7)([He.Z, Je.Z], (function() {
                            return Je.Z.inTestModeForApplication(i) || He.Z.inDevModeForApplication(i)
                        }), [i]),
                        T = (0, a.e7)([Ke.Z, We.default], (function() {
                            return Ke.Z.isEntitledToSku(We.default.getCurrentUser(), u, i)
                        })),
                        A = (0, a.e7)([y.Z], (function() {
                            return y.Z.error
                        }));
                    return (0,
                        r.jsx)(At, Et(bt({}, s), {
                        application: l,
                        applicationId: i,
                        skuId: u,
                        prices: p,
                        isPurchasing: d,
                        purchaseError: null != A ? A : h,
                        analyticsLocation: O,
                        promotionId: b,
                        isIAP: _,
                        giftCode: E,
                        isGift: S,
                        forceConfirmationStepOnMount: v,
                        sku: m,
                        isFetchingSKU: I,
                        isInTestMode: P,
                        isUserEntitledToSku: T,
                        isEmbeddedIAP: c,
                        ref: t
                    }))
                })),
                Nt = function(e) {
                    Ot(n, e);
                    var t = It(n);

                    function n() {
                        pt(this, n);
                        var e;
                        (e = t.apply(this, arguments))._skuPaymentModalRef = o.createRef();
                        return e
                    }
                    var i = n.prototype;
                    i.close = function() {
                        null != this._skuPaymentModalRef.current && this._skuPaymentModalRef.current.closable && this.handleClose()
                    };
                    i.handleClose = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        this.props.onClose(e)
                    };
                    i.render = function() {
                        var e = this;
                        return (0, r.jsx)(Rt, Et(bt({}, this.props), {
                            ref: this._skuPaymentModalRef,
                            onClose: function() {
                                return e.handleClose()
                            }
                        }))
                    };
                    return n
                }(o.PureComponent);
            const Ct = Nt
        },
        919244: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => E
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                u = n(304548),
                s = n(473708),
                l = n(949095),
                c = n.n(l);

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function d(e, t) {
                return !t || "object" !== y(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e, t) {
                h = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return h(e, t)
            }
            var y = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function O(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = p(e);
                    if (t) {
                        var o = p(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }
            var b = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && h(e, t)
                }(n, e);
                var t = O(n);

                function n() {
                    f(this, n);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    };
                    e.setRef = function(t) {
                        e._input = t
                    };
                    e.getLabelText = function() {
                        var t;
                        return null !== (t = e.props.label) && void 0 !== t ? t : e.props.disallowBackupCodes ? s.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : s.Z.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    };
                    e.getSupportedCodeTypes = function() {
                        return e.props.disallowBackupCodes ? s.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : s.Z.Messages.TWO_FA_AUTH_CODE
                    };
                    e.getPlaceholder = function() {
                        return e.props.forceNoPlaceholder ? null : null !== (t = e.props.placeholder) && void 0 !== t ? t : e.getSupportedCodeTypes();
                        var t
                    };
                    e.errorPresent = function() {
                        return null != e.props.error && "" !== e.props.error || null != e.state.errorMessage && "" !== e.state.errorMessage
                    };
                    e.handleRetry = function() {
                        var t = e.props.onRetry;
                        null == t || t().then((function() {
                            return e.setState({
                                retrySuccess: !0
                            })
                        }))
                    };
                    e.handleSubmit = function(t) {
                        t.preventDefault();
                        var n = e.props,
                            r = n.handleSubmit,
                            o = n.onError;
                        r(e.state.code).catch((function(t) {
                            if (null != t.body) {
                                null == o || o(t.body);
                                t.body.message && e.setState({
                                    errorMessage: t.body.message
                                })
                            }
                        }))
                    };
                    e.handleCancel = function() {
                        var t = e.props,
                            n = t.onClose,
                            r = t.handleEarlyClose;
                        n();
                        null == r || r()
                    };
                    e.handleCodeChange = function(t) {
                        e.setState({
                            code: t
                        })
                    };
                    return e
                }
                n.prototype.render = function() {
                    var e, t = this.props,
                        n = t.title,
                        i = t.actionText,
                        l = t.children,
                        f = t.error,
                        p = t.isLoading,
                        d = t.maxLength,
                        h = t.transitionState,
                        y = t.helpMessage,
                        O = t.retryPrompt,
                        b = t.retrySuccessMessage,
                        E = this.state,
                        S = E.code,
                        _ = E.errorMessage,
                        v = E.retrySuccess,
                        g = o.Children.count(l) > 0 ? (0, r.jsx)(u.Card, {
                            type: u.Card.Types.WARNING,
                            className: c().card,
                            children: (0,
                                r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: l
                            })
                        }) : null,
                        m = null != O ? (0, r.jsxs)(u.Text, {
                            className: a()(c().submitText, c().spacing),
                            variant: "text-sm/normal",
                            children: [(0, r.jsx)("br", {}), (0, r.jsx)(u.Clickable, {
                                className: a()(c().spacing, c().link),
                                onClick: this.handleRetry,
                                children: (0, r.jsx)(u.Anchor, {
                                    children: O
                                })
                            })]
                        }) : null,
                        I = v ? (0, r.jsx)(u.Card, {
                            type: u.Card.Types.SUCCESS,
                            className: c().card,
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: b
                            })
                        }) : null;
                    return (0, r.jsx)(u.ModalRoot, {
                        transitionState: h,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(u.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(u.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: n
                                })
                            }), (0, r.jsxs)(u.ModalContent, {
                                children: [null != y ? (0, r.jsx)(u.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: c().spacing,
                                    children: y
                                }) : null, g, I, (0, r.jsxs)(u.FormItem, {
                                    title: this.getLabelText(),
                                    className: c().spacing,
                                    children: [(0, r.jsx)(u.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != d ? d : 10,
                                        value: S,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(u.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: c().error,
                                        children: null != f ? f : _
                                    }) : null, m]
                                })]
                            }), (0, r.jsxs)(u.ModalFooter, {
                                children: [(0, r.jsx)(u.Button, {
                                    type: "submit",
                                    disabled: p || 0 === S.length,
                                    children: null != i ? i : s.Z.Messages.CONFIRM
                                }), (0, r.jsx)(u.Button, {
                                    onClick: this.handleCancel,
                                    disabled: p,
                                    look: u.Button.Looks.LINK,
                                    color: u.Button.Colors.PRIMARY,
                                    children: s.Z.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                };
                return n
            }(o.PureComponent);
            b.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            const E = b
        },
        973889: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => f
            });
            var r = n(281110),
                o = n(2590),
                i = n(473708);

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function u(e, t) {
                return !t || "object" !== l(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function s(e, t) {
                s = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return s(e, t)
            }
            var l = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function c(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = a(e);
                    if (t) {
                        var o = a(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return u(this, n)
                }
            }
            var f = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && s(e, t)
                }(n, e);
                var t = c(n);

                function n(e, r) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    return t.call(this, e, r, null != r ? i.Z.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: o.yXt.STATUS,
                        details: "".concat(r)
                    }) : i.Z.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: o.yXt.STATUS
                    }))
                }
                return n
            }(r.ZP.V6OrEarlierAPIError)
        },
        662478: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n(667294);

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function i(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(e) {
                var t = i((0, r.useState)(!1), 2),
                    n = t[0],
                    o = t[1],
                    a = (0, r.useRef)(e.current);
                (0, r.useEffect)((function() {
                    a.current = e.current
                }), [e]);
                (0, r.useEffect)((function() {
                    var e = a.current;
                    if (null != e) {
                        var t = function() {
                                return o(!0)
                            },
                            n = function() {
                                return o(!1)
                            };
                        e.addEventListener("mouseenter", t);
                        e.addEventListener("mouseleave", n);
                        return function() {
                            e.removeEventListener("mouseenter", t);
                            e.removeEventListener("mouseleave", n)
                        }
                    }
                }), [a]);
                return n
            }
        },
        320142: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var r = n(120415);

            function o(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        s = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function i(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);

                        function u(e) {
                            o(a, r, i, u, s, "next", e)
                        }

                        function s(e) {
                            o(a, r, i, u, s, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var a = function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };

            function u(e, t) {
                return s.apply(this, arguments)
            }

            function s() {
                return (s = i((function(e, t) {
                    var o, i, u, s;
                    return a(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                0;
                                return [4, Promise.all([n.e(40532), n.e(64572), n.e(6543), n.e(29342), n.e(84832), n.e(27499), n.e(79913), n.e(45353), n.e(92465), n.e(73727), n.e(10675), n.e(52555), n.e(61953), n.e(84441), n.e(14990), n.e(33227), n.e(24501), n.e(93420)]).then(n.bind(n, 624501))];
                            case 1:
                                o = a.sent(), i = o.default;
                                if (null != (u = i(e, {
                                        skipExtensionCheck: t,
                                        analyticsLocations: []
                                    }))) u(null);
                                else if (r.FB) window.open(e);
                                else {
                                    (s = document.createElement("a")).href = e;
                                    s.target = "_blank";
                                    s.rel = "noreferrer noopener";
                                    s.click()
                                }
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        83797: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var r = n(2590);

            function o(e) {
                return null != e && e.type !== r.IIU.CUSTOM_STATUS && (null != e.details || null != e.assets && (null != e.assets.large_image || null != e.assets.small_text) || null != e.party || null != e.secrets || null != e.state)
            }
        },
        396043: (e, t, n) => {
            "use strict";
            n.d(t, {
                v_: () => M,
                JS: () => C,
                hH: () => R,
                AB: () => L,
                ZP: () => D,
                oG: () => U,
                kO: () => Z,
                yw: () => j
            });
            var r = n(496486),
                o = n.n(r),
                i = n(940060),
                a = n(382060),
                u = n(664625),
                s = n(61209),
                l = n(5544),
                c = n(27851),
                f = n(21372),
                p = n(567403),
                d = n(602351),
                h = n(682776),
                y = n(491260),
                O = n(563367),
                b = n(715107),
                E = n(464187),
                S = n(407561),
                _ = n(652591),
                v = n(563135),
                g = n(671723);
            var m = n(2590),
                I = n(897196);

            function P(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        P(e, t, n[t])
                    }))
                }
                return e
            }

            function A(e) {
                var t = 0;
                for (var n in e) t += 1;
                return t
            }

            function R(e) {
                if (null == e) return null;
                var t = p.Z.getGuild(e);
                if (null == t) return null;
                var n, r = u.default.getId(),
                    o = f.ZP.getMember(e, r),
                    i = l.ZP.getChannels(e),
                    a = i[l.sH].length,
                    s = i[l.Zb].length,
                    d = S.Z.getVoiceStates(e);
                return {
                    guild_id: t.id,
                    guild_size_total: c.Z.getMemberCount(e),
                    guild_num_channels: a + s,
                    guild_num_text_channels: a,
                    guild_num_voice_channels: s,
                    guild_num_roles: A(t.roles),
                    guild_member_num_roles: null != o ? o.roles.length : 0,
                    guild_member_perms: String(null !== (n = h.Z.getGuildPermissions(t)) && void 0 !== n ? n : v.ZP.NONE),
                    guild_is_vip: t.hasFeature(m.oNc.VIP_REGIONS),
                    is_member: null != o,
                    num_voice_channels_active: A(d)
                }
            }

            function N(e, t) {
                return {
                    channel_static_route: t,
                    channel_hidden: !1
                }
            }

            function C(e) {
                if (null == e) return null;
                var t = s.Z.getChannel(e);
                return null == t ? null : M(t)
            }

            function M(e) {
                if (null == e) return null;
                var t, n = !1,
                    r = e.getGuildId();
                if (null != r) {
                    var o = function(e) {
                        if (null == e) return !1;
                        var t = e.permissionOverwrites[r];
                        return null != t && i.Z.has(t.deny, m.Plq.VIEW_CHANNEL)
                    };
                    n = a.Ec.has(e.type) && null != e.parent_id ? o(s.Z.getChannel(e.parent_id)) : o(e)
                }
                return {
                    channel_id: e.id,
                    channel_type: e.type,
                    channel_size_total: e.isPrivate() ? e.recipients.length : 0,
                    channel_member_perms: String(null != r && null !== (t = h.Z.getChannelPermissions(e)) && void 0 !== t ? t : v.ZP.NONE),
                    channel_hidden: n
                }
            }

            function L(e) {
                if (null == e) return null;
                var t = s.Z.getChannel(e);
                if (null == t) return null;
                var n, r = d.Z.isVideoEnabled(),
                    o = O.Z.getMediaSessionId();
                return T({
                    channel_id: t.id,
                    channel_type: t.type,
                    guild_id: t.getGuildId(),
                    media_session_id: o
                }, Z(t.getGuildId(), t.id, r), {
                    game_name: null != (n = g.ZP.getCurrentGameForAnalytics()) ? n.name : null,
                    game_id: null != n ? n.id : null
                })
            }

            function w(e, t) {
                return null == e ? null != t ? t : null : e.isPrivate() ? null : null !== (r = null !== (n = e.getGuildId()) && void 0 !== n ? n : t) && void 0 !== r ? r : null;
                var n, r
            }

            function j(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!_.default.isThrottled(e)) {
                    var r = !("location" in t) || t.location !== m.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        o = "guild_id" in t ? t.guild_id : r ? E.Z.getGuildId() : null,
                        i = "channel_id" in t ? t.channel_id : r ? b.Z.getChannelId(o) : null,
                        a = s.Z.getChannel(i),
                        u = w(a, o),
                        l = T({}, t, R(u), null != o && null != i && (0, I.AB)(i) ? N(0, i) : M(a));
                    _.default.track(e, l, {
                        flush: n
                    })
                }
            }

            function Z(e, t, n) {
                var r = {
                    voice_state_count: 0,
                    video_stream_count: 0,
                    video_enabled: n
                };
                o()(S.Z.getVoiceStates(e)).filter((function(e) {
                    return e.channelId === t
                })).filter((function(e) {
                    return e.userId !== u.default.getId()
                })).forEach((function(e) {
                    r.voice_state_count++;
                    (e.selfVideo || e.selfStream) && r.video_stream_count++
                }));
                return r
            }

            function U(e, t) {
                var n = {
                    custom_status_count: 0
                };
                o()(S.Z.getVoiceStates(e)).forEach((function(e) {
                    e.channelId === t && null != y.Z.findActivity(e.userId, (function(e) {
                        return e.type === m.IIU.CUSTOM_STATUS
                    })) && n.custom_status_count++
                }));
                return n
            }
            const D = {
                trackWithMetadata: j,
                getVoiceStateMetadata: Z
            }
        },
        333398: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var r = n(202351),
                o = n(744564),
                i = n(451936);

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        u(e, t, n[t])
                    }))
                }
                return e
            }

            function c(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function f(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e, t) {
                p = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return p(e, t)
            }
            var d = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function h(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = s(e);
                    if (t) {
                        var o = s(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }
            var y = {},
                O = {},
                b = [];

            function E(e) {
                var t = e.entitlements,
                    n = !1,
                    r = !0,
                    o = !1,
                    a = void 0;
                try {
                    for (var u, s = t[Symbol.iterator](); !(r = (u = s.next()).done); r = !0) {
                        var c = u.value.sku;
                        if (null != c && null != c.application) {
                            var f = c.application;
                            y[f.id] = i.Z.createFromServer(f);
                            n = !0
                        }
                    }
                } catch (e) {
                    o = !0;
                    a = e
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (o) throw a
                    }
                }
                n && (y = l({}, y));
                return n
            }
            var S = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && p(e, t)
                }(n, e);
                var t = h(n);

                function n() {
                    a(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getApplications = function() {
                    return y
                };
                r.getGuildApplication = function(e, t) {
                    if (null != e) {
                        var n = !0,
                            r = !1,
                            o = void 0;
                        try {
                            for (var i, a = Object.values(y)[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                                var u = i.value;
                                if (u.guildId === e && u.type === t) return u
                            }
                        } catch (e) {
                            r = !0;
                            o = e
                        } finally {
                            try {
                                n || null == a.return || a.return()
                            } finally {
                                if (r) throw o
                            }
                        }
                    }
                };
                r.getGuildApplications = function(e) {
                    return null == e ? b : O[e]
                };
                r.getApplication = function(e) {
                    return y[e]
                };
                return n
            }(r.ZP.Store);
            S.displayName = "ApplicationStore";
            const _ = new S(o.Z, {
                APPLICATION_FETCH_SUCCESS: function(e) {
                    var t = e.application;
                    y = c(l({}, y), u({}, t.id, i.Z.createFromServer(t)))
                },
                APPLICATIONS_FETCH_SUCCESS: function(e) {
                    var t = e.applications,
                        n = l({}, y),
                        r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var u, s = t[Symbol.iterator](); !(r = (u = s.next()).done); r = !0) {
                            var c = u.value;
                            n[c.id] = i.Z.createFromServer(c)
                        }
                    } catch (e) {
                        o = !0;
                        a = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    y = n
                },
                APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: E,
                ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: E,
                GUILD_SETTINGS_LOADED_INTEGRATIONS: function(e) {
                    var t = e.integrations,
                        n = e.guildId,
                        r = !1,
                        o = [],
                        i = !0,
                        a = !1,
                        u = void 0;
                    try {
                        for (var s, c = t[Symbol.iterator](); !(i = (s = c.next()).done); i = !0) {
                            var f = s.value.application;
                            if (null != f) {
                                o.push(f.id);
                                y[f.id] = f;
                                r = !0
                            }
                        }
                    } catch (e) {
                        a = !0;
                        u = e
                    } finally {
                        try {
                            i || null == c.return || c.return()
                        } finally {
                            if (a) throw u
                        }
                    }
                    if (r) {
                        y = l({}, y);
                        O[n] = o;
                        var p = {};
                        for (var d in O) p[d] = O[d];
                        O = p
                    }
                    return r
                },
                CONNECTION_OPEN: function() {
                    y = {};
                    O = {}
                }
            })
        },
        269116: (e, t, n) => {
            "use strict";
            n.d(t, {
                F: () => O,
                Z: () => b
            });
            var r = n(496486),
                o = n.n(r),
                i = n(306472),
                a = n(296602),
                u = n(120415),
                s = n(310126);

            function l(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        s = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function c(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            l(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            l(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var f, p = function(e, t) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2];
                                                a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    }
                },
                d = [];

            function h(e) {
                e = e.toLowerCase();
                (0, u.ED)() && (e = (e = e.replace(/^[a-z]:/, "")).replace(/\\/g, "/"));
                return e
            }

            function y(e) {
                if (null != e && "" !== e) {
                    (e = h(e)).endsWith("/") || (e += "/");
                    d.push(e)
                }
            }

            function O(e) {
                e = h(e);
                var t = !1;
                d.forEach((function(n) {
                    if (!t && e.startsWith(n)) {
                        e = e.substr(n.length);
                        t = !0
                    }
                }));
                return t ? e = e.includes("dosbox.exe") ? e.split("/").slice(-3).join("/") : e.split("/").slice(-2).join("/") : null
            }

            function b() {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = c((function() {
                    var e, t, n;
                    return p(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                if (null != f) return [2, f];
                                r.label = 1;
                            case 1:
                                r.trys.push([1, 4, , 5]);
                                return [4, s.ZP.ensureModule("discord_game_utils")];
                            case 2:
                                r.sent();
                                return [4, s.ZP.requireModule("discord_game_utils")];
                            case 3:
                                f = r.sent();
                                return [3, 5];
                            case 4:
                                e = r.sent();
                                new a.Z("GamesActionCreators").error("could not load discord_game_utils", e);
                                return [3, 5];
                            case 5:
                                if ((0, u.ED)()) {
                                    y((t = i.Z.process.env).LOCALAPPDATA);
                                    y(t["PROGRAMFILES(X86)"]);
                                    y(t.PROGRAMFILES);
                                    y(t.PROGRAMW6432);
                                    y(t.PROGRAMDATA);
                                    y("/games/");
                                    y("/steamlibrary/steamapps/common/")
                                }
                                return [4, (n = i.Z.remoteApp.getPath)("home")];
                            case 6:
                                y.apply(void 0, [r.sent()]);
                                return [4, n("appData")];
                            case 7:
                                y.apply(void 0, [r.sent()]);
                                return [4, n("desktop")];
                            case 8:
                                y.apply(void 0, [r.sent()]);
                                return [4, n("documents")];
                            case 9:
                                y.apply(void 0, [r.sent()]);
                                return [4, n("downloads")];
                            case 10:
                                y.apply(void 0, [r.sent()]);
                                (d = o().uniq(d)).sort((function(e, t) {
                                    return t.length - e.length
                                }));
                                return [2, f]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        387099: (e, t, n) => {
            "use strict";
            n.d(t, {
                Q: () => u,
                Z: () => s
            });
            var r = n(260561),
                o = n(165666),
                i = (0, r.B)({
                    kind: "user",
                    id: "2022-03_block_russian_purchases",
                    label: "Block purchases based on country",
                    defaultConfig: {
                        paymentsBlocked: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Payments Blocked",
                        config: {
                            paymentsBlocked: !0
                        }
                    }]
                }),
                a = (0, r.B)({
                    kind: "user",
                    id: "2022-03_block_russian_purchases_desktop",
                    label: "Block purchases based on country (desktop specific flags)",
                    defaultConfig: {
                        checkPaymentSource: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Check Payment Source",
                        config: {
                            checkPaymentSource: !0
                        }
                    }]
                });

            function u() {
                var e = i.useExperiment({
                        location: "c519a9_1"
                    }, {
                        autoTrackExposure: !1
                    }).paymentsBlocked,
                    t = a.useExperiment({
                        location: "c519a9_2"
                    }, {
                        autoTrackExposure: !1
                    }).checkPaymentSource,
                    n = (0,
                        o.Z)().defaultBillingCountryCode;
                return e || t && "RU" === n
            }
            const s = i
        },
        852626: (e, t, n) => {
            "use strict";
            n.d(t, {
                i: () => p,
                j: () => d
            });
            var r = n(785893),
                o = (n(667294), n(264817)),
                i = n(561210),
                a = n(520453);

            function u(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        s = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function s(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            u(i, r, o, a, s, "next", e)
                        }

                        function s(e) {
                            u(i, r, o, a, s, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        l(e, t, n[t])
                    }))
                }
                return e
            }
            var f = function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };

            function p(e) {
                (0, o.ZD)(s((function() {
                    var e, t;
                    return f(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(92224), n.e(21859), n.e(62593)]).then(n.bind(n, 321859))];
                            case 1:
                                e = o.sent(), t = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(t, c({}, e))
                                }]
                        }
                    }))
                })), {
                    modalKey: i.$$,
                    onCloseRequest: a.dG,
                    onCloseCallback: e
                })
            }

            function d() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 ? arguments[1] : void 0;
                (0, o.ZD)(s((function() {
                    var t, o;
                    return f(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(84441), n.e(88110), n.e(96844)]).then(n.bind(n, 854104))];
                            case 1:
                                t = i.sent(), o = t.default;
                                return [2, function(t) {
                                    return (0, r.jsx)(o, c({
                                        claimRequired: e
                                    }, t))
                                }]
                        }
                    }))
                })), {
                    onCloseRequest: e ? a.dG : null,
                    onCloseCallback: t
                })
            }
        },
        87931: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = n(517586).Z
        },
        165586: (e, t, n) => {
            "use strict";
            n.d(t, {
                LY: () => r,
                aW: () => f,
                ws: () => o,
                tI: () => i,
                L9: () => p,
                no: () => d,
                ND: () => h,
                WC: () => O,
                z8: () => b,
                km: () => S,
                k0: () => _,
                af: () => v
            });
            var r, o, i, a, u = n(2590),
                s = n(203600),
                l = n(473708);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }! function(e) {
                e[e.RESOLUTION_480 = 480] = "RESOLUTION_480";
                e[e.RESOLUTION_720 = 720] = "RESOLUTION_720";
                e[e.RESOLUTION_1080 = 1080] = "RESOLUTION_1080";
                e[e.RESOLUTION_1440 = 1440] = "RESOLUTION_1440";
                e[e.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE"
            }(r || (r = {}));

            function f(e) {
                switch (e) {
                    case r.RESOLUTION_480:
                        return r.RESOLUTION_480;
                    case r.RESOLUTION_720:
                        return r.RESOLUTION_720;
                    case r.RESOLUTION_1080:
                        return r.RESOLUTION_1080;
                    case r.RESOLUTION_SOURCE:
                        return r.RESOLUTION_SOURCE;
                    default:
                        throw new Error("Unknown resolution: ".concat(e))
                }
            }! function(e) {
                e[e.FPS_5 = 5] = "FPS_5";
                e[e.FPS_15 = 15] = "FPS_15";
                e[e.FPS_30 = 30] = "FPS_30";
                e[e.FPS_60 = 60] = "FPS_60"
            }(o || (o = {}));
            ! function(e) {
                e[e.PRESET_VIDEO = 1] = "PRESET_VIDEO";
                e[e.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS";
                e[e.PRESET_CUSTOM = 3] = "PRESET_CUSTOM"
            }(i || (i = {}));

            function p(e) {
                switch (e) {
                    case o.FPS_5:
                        return o.FPS_5;
                    case o.FPS_15:
                        return o.FPS_15;
                    case o.FPS_30:
                        return o.FPS_30;
                    case o.FPS_60:
                        return o.FPS_60;
                    default:
                        throw new Error("Unknown frame rate: ".concat(e))
                }
            }
            var d = (c(a = {}, i.PRESET_DOCUMENTS, [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_15
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_5
                }]), c(a, i.PRESET_VIDEO, [{
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
                }]), c(a, i.PRESET_CUSTOM, []), a),
                h = [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_60,
                    quality: s.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_30,
                    quality: s.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_15,
                    quality: s.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: o.FPS_5,
                    preset: i.PRESET_DOCUMENTS
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_60,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: s.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_30,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: s.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: o.FPS_15,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: s.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_60,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: s.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_30,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: s.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: o.FPS_15,
                    guildPremiumTier: u.Eu4.TIER_2,
                    quality: s.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: o.FPS_60,
                    guildPremiumTier: u.Eu4.TIER_1,
                    quality: s.ys.MID_STREAMING_QUALITY
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
                    guildPremiumTier: u.Eu4.TIER_1,
                    quality: s.ys.MID_STREAMING_QUALITY
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

            function y(e, t) {
                return {
                    value: e,
                    get label() {
                        return null != t ? t() : e
                    }
                }
            }
            var O = [y(r.RESOLUTION_720), y(r.RESOLUTION_1080), y(r.RESOLUTION_1440), y(r.RESOLUTION_SOURCE, (function() {
                    return l.Z.Messages.SCREENSHARE_SOURCE
                }))],
                b = [y(r.RESOLUTION_720), y(r.RESOLUTION_1080), y(r.RESOLUTION_1440)],
                E = function(e) {
                    return "".concat(e, "p")
                },
                S = [y(r.RESOLUTION_480, (function() {
                    return E(r.RESOLUTION_480)
                })), y(r.RESOLUTION_720, (function() {
                    return E(r.RESOLUTION_720)
                })), y(r.RESOLUTION_1080, (function() {
                    return E(r.RESOLUTION_1080)
                })), y(r.RESOLUTION_1440, (function() {
                    return E(r.RESOLUTION_1440)
                })), y(r.RESOLUTION_SOURCE, (function() {
                    return l.Z.Messages.SCREENSHARE_SOURCE
                }))],
                _ = [y(o.FPS_15), y(o.FPS_30), y(o.FPS_60)],
                v = [y(o.FPS_15, (function() {
                    return l.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_15
                    })
                })), y(o.FPS_30, (function() {
                    return l.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_30
                    })
                })), y(o.FPS_60, (function() {
                    return l.Z.Messages.STREAM_FPS_OPTION.format({
                        value: o.FPS_60
                    })
                }))]
        },
        577657: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                o = (n(667294), n(264817));

            function i(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        s = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function a(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function u(e) {
                            i(a, r, o, u, s, "next", e)
                        }

                        function s(e) {
                            i(a, r, o, u, s, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var l = function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };

            function c(e) {
                (0, o.ZD)(a((function() {
                    var t, o;
                    return l(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, n.e(72591).then(n.bind(n, 672591))];
                            case 1:
                                t = i.sent(), o = t.default;
                                return [2, function(t) {
                                    return (0, r.jsx)(o, s(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                u(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({}, t), {
                                        incomingRequestCount: e
                                    }))
                                }]
                        }
                    }))
                })))
            }
        },
        43299: (e, t, n) => {
            "use strict";
            n.d(t, {
                Wo: () => O,
                Gv: () => E,
                vB: () => S
            });
            var r = n(268335),
                o = n(335186),
                i = n(348592),
                a = n(249052),
                u = n(2590),
                s = n(520453),
                l = n(473708);

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e) {
                return function(e) {
                    if (Array.isArray(e)) return c(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var d, h = new Set([s.pK.ARS, s.pK.CLP, s.pK.COP]),
                y = new Set([s.pK.USD, s.pK.JPY]),
                O = (f(d = {}, u.HeQ.CARD, (function() {
                        return l.Z.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY
                    })), f(d, u.HeQ.PAYPAL, (function() {
                        return l.Z.Messages.PAYMENT_SOURCE_PAYPAL
                    })), f(d, u.HeQ.SOFORT, (function() {
                        return l.Z.Messages.PAYMENT_SOURCE_SOFORT
                    })), f(d, u.HeQ.GIROPAY, (function() {
                        return l.Z.Messages.PAYMENT_SOURCE_GIROPAY
                    })), f(d, u.HeQ.PRZELEWY24, (function() {
                        return l.Z.Messages.PAYMENT_SOURCE_PRZELEWY24
                    })), f(d, u.HeQ.PAYSAFE_CARD, (function() {
                        return l.Z.Messages.PAYMENT_SOURCE_PAYSAFE_CARD
                    })), f(d, u.HeQ.GCASH, (function() {
                        return l.Z.Messages.PAYMENT_SOURCE_GCASH
                    })), f(d, u.HeQ.GRABPAY_MY, (function() {
                        return l.Z.Messages.PAYMENT_SOURCE_GRABPAY
                    })), f(d, u.HeQ.MOMO_WALLET, (function() {
                        return l.Z.Messages.PAYMENT_SOURCE_MOMO_WALLET
                    })), f(d, u.HeQ.VENMO, (function() {
                        return l.Z.Messages.PAYMENT_SOURCE_VENMO
                    })), f(d, u.HeQ.KAKAOPAY, (function() {
                        return l.Z.Messages.PAYMENT_SOURCE_KAKAOPAY
                    })), f(d, u.HeQ.GOPAY_WALLET, (function() {
                        return l.Z.Messages.PAYMENT_SOURCE_GOPAY_WALLET
                    })), f(d, u.HeQ.BANCONTACT, (function() {
                        return l.Z.Messages.PAYMENT_SOURCE_BANCONTACT
                    })), f(d, u.HeQ.EPS, (function() {
                        return l.Z.Messages.PAYMENT_SOURCE_EPS
                    })), f(d, u.HeQ.IDEAL, (function() {
                        return l.Z.Messages.PAYMENT_SOURCE_IDEAL
                    })), f(d, u.HeQ.CASH_APP, (function() {
                        return l.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY
                    })),
                    d),
                b = [u.HeQ.EPS, u.HeQ.BANCONTACT, u.HeQ.IDEAL, u.HeQ.SOFORT, u.HeQ.GIROPAY, u.HeQ.SEPA_DEBIT, u.HeQ.PAYSAFE_CARD],
                E = function(e, t, n, r) {
                    if (null == e) return "";
                    var i = (0, o.q9)(e);
                    return t === s.pK.EUR ? n ? l.Z.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
                        country: i
                    }) : l.Z.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
                        currencyISOCode: t.toUpperCase()
                    }) : r ? l.Z.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
                        countryName: i
                    }) : l.Z.Messages.LOCALIZED_PRICING_NOTICE.format({
                        country: i
                    })
                },
                S = function(e) {
                    var t = e.localizedPricingPromo,
                        n = e.subscription,
                        r = e.forceSingleLine,
                        c = void 0 !== r && r,
                        f = e.userLocale,
                        d = t.countryCode,
                        E = t.amount,
                        S = t.currency,
                        v = t.paymentSourceTypes,
                        g = 0 !== v.length,
                        m = _(d),
                        I = (0, a.T4)(E, S, {
                            style: "currency",
                            currency: S,
                            currencyDisplay: "symbol",
                            localeOverride: m
                        }),
                        P = l.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
                            helpCenterLink: i.Z.getArticleURL(u.BhN.LOCALIZED_PRICING),
                            currencyISOCode: S.toUpperCase(),
                            localizedPriceWithCurrencySymbol: I
                        });
                    y.has(S) && (P = l.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
                        helpCenterLink: i.Z.getArticleURL(u.BhN.LOCALIZED_PRICING),
                        localizedPriceWithCurrencySymbol: I
                    }));
                    h.has(S) && (P = l.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
                        helpCenterLink: i.Z.getArticleURL(u.BhN.LOCALIZED_PRICING),
                        currencyISOCode: S.toUpperCase(),
                        localizedPriceWithCurrencySymbol: I
                    }));
                    null == n || n.hasPremiumNitroMonthly || (P = l.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
                        helpCenterLink: i.Z.getArticleURL(u.BhN.LOCALIZED_PRICING),
                        currencyISOCode: S.toUpperCase()
                    }));
                    S === s.pK.EUR && (P = c ? l.Z.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
                        country: (0, o.q9)(d),
                        currencyISOCode: S.toUpperCase(),
                        helpCenterLink: i.Z.getArticleURL(u.BhN.LOCALIZED_PRICING)
                    }) : l.Z.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
                        currencyISOCode: S.toUpperCase(),
                        helpCenterLink: i.Z.getArticleURL(u.BhN.LOCALIZED_PRICING)
                    }));
                    if (g) {
                        var T = b.filter((function(e) {
                                return v.includes(e)
                            })),
                            A = v.filter((function(e) {
                                return !b.includes(e)
                            })),
                            R = p(T).concat(p(A)).slice(0, 2).map((function(e) {
                                var t, n;
                                return null !== (n = null === (t = O[e]) || void 0 === t ? void 0 : t.call(O)) && void 0 !== n ? n : l.Z.Messages.PAYMENT_SOURCE_UNKNOWN
                            }));
                        v.length >= 3 && R.push(l.Z.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
                        var N = new Intl.ListFormat(f, {
                            style: "short",
                            type: "conjunction"
                        });
                        P = l.Z.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
                            helpCenterLink: i.Z.getArticleURL(u.BhN.LOCALIZED_PRICING),
                            paymentMethods: N.format(R)
                        })
                    }
                    return {
                        localizedPricingBannerHeader: l.Z.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
                            country: (0, o.q9)(d)
                        }),
                        localizedPricingBannerBody: P,
                        localizedPricingBannerLinkOnly: l.Z.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
                            helpCenterLink: i.Z.getArticleURL(u.BhN.LOCALIZED_PRICING)
                        }),
                        localizedPricingBannerSubNotif: g ? void 0 : l.Z.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
                    }
                },
                _ = function(e) {
                    var t = r.Z.find((function(t) {
                        return t.alpha2 === e
                    }));
                    return null == t ? void 0 : t.localeForICU
                }
        },
        69427: (e, t, n) => {
            "use strict";
            n.d(t, {
                nL: () => r,
                Cj: () => o,
                TD: () => i
            });
            var r, o;
            ! function(e) {
                e[e.DEFAULT = 0] = "DEFAULT";
                e[e.WINTER = 1] = "WINTER"
            }(r || (r = {}));
            ! function(e) {
                e[e.SNOWGLOBE = 1] = "SNOWGLOBE";
                e[e.BOX = 2] = "BOX";
                e[e.CUP = 3] = "CUP";
                e[e.STANDARD_BOX = 4] = "STANDARD_BOX";
                e[e.CAKE = 5] = "CAKE";
                e[e.CHEST = 6] = "CHEST";
                e[e.COFFEE = 7] = "COFFEE"
            }(o || (o = {}));
            var i = Object.freeze({
                IS_BLOCKED_IOS: 32,
                IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS: 64,
                SUPPRESS_NOTIFICATION: 128
            })
        },
        165666: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(667294),
                o = n(202351),
                i = n(744564),
                a = n(673679),
                u = n(664625),
                s = n(615796),
                l = n(711531);

            function c() {
                var e = (0, o.e7)([l.Z], (function() {
                        return l.Z.getDefaultBillingCountryCode()
                    })),
                    t = (0, o.e7)([s.Z], (function() {
                        return s.Z.ipCountryCode
                    })),
                    n = (0, o.e7)([u.default], (function() {
                        return u.default.isAuthenticated()
                    }));
                r.useEffect((function() {
                    i.Z.wait((function() {
                        !n || s.Z.isPaymentSourceFetching || l.Z.hasFetchedPaymentSources || a.tZ()
                    }))
                }), [n]);
                r.useEffect((function() {
                    n && !s.Z.ipCountryCodeLoaded && a.GE()
                }), [t, n]);
                return {
                    defaultBillingCountryCode: e,
                    ipCountryCode: t
                }
            }
        },
        239620: (e, t, n) => {
            "use strict";
            n.d(t, {
                mv: () => i,
                xJ: () => a
            });
            var r, o = n(120415),
                i = null;

            function a() {
                return (0, o.Dt)(), null
            }! function(e) {
                e.REMINDER = "reminder";
                e.TOP_MESSAGE_PUSH = "top_messages_push";
                e.TRENDING_CONTENT_PUSH = "trending_content_push"
            }(r || (r = {}))
        },
        625183: (e, t, n) => {
            "use strict";
            n.d(t, {
                b: () => o
            });
            var r = n(2590);

            function o(e, t) {
                return e >= 400 && e < 500 && null != t && t >= r.evJ.USER_LIMITED_ACCESS_DEFAULT && t <= r.evJ.USER_LIMITED_ACCESS_MAX
            }
        },
        232806: (e, t, n) => {
            "use strict";
            n.d(t, {
                xV: () => i,
                dp: () => a,
                X7: () => u,
                E1: () => s,
                f7: () => l,
                HE: () => c,
                SJ: () => f
            });

            function r(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function o(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var i, a;
            ! function(e) {
                e[e.BACKGROUND = 0] = "BACKGROUND"
            }(i || (i = {}));
            ! function(e) {
                e[e.OPTION_1 = 0] = "OPTION_1";
                e[e.OPTION_2 = 1] = "OPTION_2";
                e[e.OPTION_3 = 2] = "OPTION_3";
                e[e.OPTION_4 = 3] = "OPTION_4";
                e[e.OPTION_7 = 7] = "OPTION_7";
                e[e.OPTION_8 = 8] = "OPTION_8";
                e[e.OPTION_9 = 9] = "OPTION_9";
                e[e.OPTION_10 = 10] = "OPTION_10"
            }(a || (a = {}));
            var u = [a.OPTION_7, a.OPTION_8, a.OPTION_9, a.OPTION_10],
                s = [a.OPTION_7, a.OPTION_8, a.OPTION_9, a.OPTION_10, a.OPTION_1, a.OPTION_2, a.OPTION_3, a.OPTION_4].reduce((function(e, t, n) {
                    return o(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                o = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            o.forEach((function(t) {
                                r(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, e), r({}, t, n))
                }), {}),
                l = "blur",
                c = {
                    width: 1280,
                    height: 720
                },
                f = 10485760
        },
        205294: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(169376);

            function o(e) {
                o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return o(e)
            }

            function i(e, t) {
                return !t || "object" !== u(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function a(e, t) {
                a = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return a(e, t)
            }
            var u = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function s(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = o(e);
                    if (t) {
                        var a = o(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return i(this, n)
                }
            }
            const l = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && a(e, t)
                }(n, e);
                var t = s(n);

                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = t.call(this)).id = e.id;
                    r.subscriptionId = e.subscriptionId;
                    r.premiumGuildSubscription = e.premiumGuildSubscription;
                    r.canceled = e.canceled;
                    r.cooldownEndsAt = e.cooldownEndsAt;
                    r.subscription = e.subscription;
                    return r
                }
                var r = n.prototype;
                r.isOnCooldown = function() {
                    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
                };
                r.isAvailable = function() {
                    return null == this.premiumGuildSubscription && !this.isOnCooldown()
                };
                n.createFromServer = function(e, t) {
                    return new n({
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
                };
                return n
            }(r.Z)
        },
        50433: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => O
            });
            var r = n(202351),
                o = n(744564);

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function s(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function l(e, t) {
                l = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return l(e, t)
            }

            function c(e) {
                return function(e) {
                    if (Array.isArray(e)) return i(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var f = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function p(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = u(e);
                    if (t) {
                        var o = u(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return s(this, n)
                }
            }
            var d = [];

            function h() {
                d = []
            }
            var y = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && l(e, t)
                }(n, e);
                var t = p(n);

                function n() {
                    a(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.hasLayers = function() {
                    return d.length > 0
                };
                r.getLayers = function() {
                    return d
                };
                return n
            }(r.ZP.Store);
            y.displayName = "LayerStore";
            const O = new y(o.Z, {
                LAYER_PUSH: function(e) {
                    var t = e.component;
                    if (d.indexOf(t) >= 0) return !1;
                    d = c(d).concat([t])
                },
                LAYER_POP: function() {
                    if (0 === d.length) return !1;
                    d = d.slice(0, -1)
                },
                LAYER_POP_ALL: h,
                LOGOUT: h,
                NOTIFICATION_CLICK: h
            })
        },
        491260: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => x
            });
            var r = n(110251),
                o = n.n(r),
                i = n(496486),
                a = n.n(i),
                u = n(202351),
                s = n(744564),
                l = n(83797),
                c = n(664625),
                f = n(473903),
                p = n(2590);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function h(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function O(e) {
                O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return O(e)
            }

            function b(e, t) {
                return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function E(e, t) {
                E = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return E(e, t)
            }

            function S(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || g(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _(e) {
                return function(e) {
                    if (Array.isArray(e)) return d(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || g(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var v = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function g(e, t) {
                if (e) {
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0
                }
            }

            function m(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = O(e);
                    if (t) {
                        var o = O(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return b(this, n)
                }
            }
            var I = Object.freeze([]),
                P = {},
                T = {},
                A = {},
                R = {},
                N = {};

            function C(e, t) {
                var n = P[e];
                return null != n ? n[t] : null
            }
            var M = function(e) {
                switch (e.type) {
                    case p.IIU.CUSTOM_STATUS:
                        return 4;
                    case p.IIU.COMPETING:
                        return 3;
                    case p.IIU.STREAMING:
                        return 2;
                    case p.IIU.PLAYING:
                        return 1;
                    default:
                        return 0
                }
            };
            var L = function(e) {
                return (0, l.Z)(e) ? 1 : 0
            };

            function w(e, t) {
                return function(e, t) {
                    return M(t) - M(e)
                }(e, t) || function(e, t) {
                    return L(t) - L(e)
                }(e, t) || function(e, t) {
                    var n, r;
                    return (null !== (n = t.created_at) && void 0 !== n ? n : 0) - (null !== (r = e.created_at) && void 0 !== r ? r : 0)
                }(e, t)
            }

            function j(e) {
                delete T[e];
                delete A[e];
                delete R[e];
                if (null != P[e]) {
                    var t = S(a().sortBy(P[e], (function(e) {
                            return -e.timestamp
                        })), 1),
                        n = t[0];
                    if (n.status !== p.Skl.OFFLINE) {
                        T[e] = n.status;
                        A[e] = n.activities;
                        null != n.clientStatus && (R[e] = n.clientStatus)
                    } else a().every(P[e], (function(e) {
                        return e.status === p.Skl.OFFLINE
                    })) && delete P[e]
                }
            }

            function Z(e) {
                var t = P[e];
                if (null != t) {
                    var n = a().maxBy(Object.values(t), (function(e) {
                        return e.timestamp
                    }));
                    if (n.status !== p.Skl.OFFLINE) {
                        T[e] = n.status;
                        A[e] = n.activities;
                        null != n.clientStatus && (R[e] = n.clientStatus)
                    }
                }
            }

            function U(e) {
                var t = e.guildId,
                    n = e.userId,
                    r = e.status,
                    i = e.clientStatus,
                    a = e.activities;
                if (n === c.default.getId()) return !1;
                var u = P[n];
                if (null == u) {
                    if (r === p.Skl.OFFLINE) return !1;
                    u = P[n] = {}
                }
                if (r === p.Skl.OFFLINE) u[t] = {
                    status: r,
                    clientStatus: i,
                    activities: I,
                    timestamp: Date.now()
                };
                else {
                    var s = a.length > 1 ? _(a).sort(w) : a,
                        l = u[t];
                    a = null != l && o()(l.activities, s) ? l.activities : s;
                    u[t] = {
                        status: r,
                        clientStatus: i,
                        activities: a,
                        timestamp: Date.now()
                    }
                }
                delete N[n];
                j(n);
                return !0
            }

            function D(e) {
                var t = e.guildId,
                    n = e.userId,
                    r = e.status,
                    o = e.clientStatus,
                    i = e.activities,
                    a = e.timestamp;
                if (n !== c.default.getId()) {
                    var u = P[n];
                    if (null == u) {
                        if (r === p.Skl.OFFLINE) return;
                        u = P[n] = {}
                    }
                    if (r === p.Skl.OFFLINE) u[t] = {
                        status: r,
                        clientStatus: o,
                        activities: I,
                        timestamp: Date.now()
                    };
                    else {
                        var s = i.length > 1 ? _(i).sort(w) : i;
                        u[t] = {
                            status: r,
                            clientStatus: o,
                            activities: s,
                            timestamp: a
                        }
                    }
                }
            }

            function B(e, t) {
                if (t === c.default.getId()) return !1;
                var n = P[t];
                if (null == n || null == n[e]) return !1;
                delete n[e];
                0 === Object.keys(n).length && delete P[t];
                j(t)
            }

            function G(e) {
                var t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var o, i = Object.keys(P)[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                        B(e, o.value)
                    }
                } catch (e) {
                    n = !0;
                    r = e
                } finally {
                    try {
                        t || null == i.return || i.return()
                    } finally {
                        if (n) throw r
                    }
                }
            }
            var k = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && E(e, t)
                }(n, e);
                var t = m(n);

                function n() {
                    h(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(c.default)
                };
                r.setCurrentUserOnConnectionOpen = function(e, t) {
                    T[c.default.getId()] = e;
                    A[c.default.getId()] = t
                };
                r.getStatus = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.Skl.OFFLINE,
                        r = f.default.getUser(e);
                    null != r && r.hasFlag(p.xW$.BOT_HTTP_INTERACTIONS) && (n = p.Skl.UNKNOWN);
                    if (null == r ? void 0 : r.isClyde()) return p.Skl.ONLINE;
                    if (null == t) {
                        var o;
                        return null !== (o = T[e]) && void 0 !== o ? o : n
                    }
                    var i, a = C(e, t);
                    return null !== (i = null == a ? void 0 : a.status) && void 0 !== i ? i : n
                };
                r.getActivities = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == t) {
                        var n;
                        return null !== (n = A[e]) && void 0 !== n ? n : I
                    }
                    var r = C(e, t);
                    return null == r || null == r.activities ? I : r.activities
                };
                r.getPrimaryActivity = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = this.getActivities(e, t);
                    return n[0]
                };
                r.getAllApplicationActivities = function(e) {
                    var t = [],
                        n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = Object.keys(A)[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                            var u = i.value,
                                s = A[u],
                                l = !0,
                                c = !1,
                                f = void 0;
                            try {
                                for (var p, d = s[Symbol.iterator](); !(l = (p = d.next()).done); l = !0) {
                                    var h = p.value;
                                    h.application_id === e && t.push({
                                        userId: u,
                                        activity: h
                                    })
                                }
                            } catch (e) {
                                c = !0;
                                f = e
                            } finally {
                                try {
                                    l || null == d.return || d.return()
                                } finally {
                                    if (c) throw f
                                }
                            }
                        }
                    } catch (e) {
                        r = !0;
                        o = e
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return t
                };
                r.getApplicationActivity = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.findActivity(e, (function(e) {
                        return e.application_id === t
                    }), n)
                };
                r.findActivity = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.getActivities(e, n).find(t)
                };
                r.getActivityMetadata = function(e) {
                    return N[e]
                };
                r.getUserIds = function() {
                    return Object.keys(A)
                };
                r.isMobileOnline = function(e) {
                    var t = R[e];
                    return null != t && t[p.X5t.MOBILE] === p.Skl.ONLINE && t[p.X5t.DESKTOP] !== p.Skl.ONLINE
                };
                r.getState = function() {
                    return {
                        presencesForGuilds: P,
                        statuses: T,
                        activities: A,
                        activityMetadata: N,
                        clientStatuses: R
                    }
                };
                return n
            }(u.ZP.Store);
            k.displayName = "PresenceStore";
            const x = new k(s.Z, {
                CONNECTION_OPEN: function() {
                    return !0
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    var t = e.guilds,
                        n = e.presences,
                        r = c.default.getId();
                    P = {};
                    N = {};
                    T = y({}, r, T[r]);
                    A = y({}, r, A[r]);
                    R = y({}, r, {});
                    var o = new Set,
                        i = Date.now();
                    t.forEach((function(e) {
                        e.presences.forEach((function(t) {
                            var n = t.user,
                                r = t.status,
                                a = t.clientStatus,
                                u = t.activities;
                            D({
                                guildId: e.id,
                                userId: n.id,
                                status: r,
                                clientStatus: a,
                                activities: u,
                                timestamp: i
                            });
                            o.add(n.id)
                        }))
                    }));
                    n.forEach((function(e) {
                        var t = e.user,
                            n = e.status,
                            r = e.clientStatus,
                            a = e.activities;
                        if (null != t) {
                            D({
                                guildId: p.ME,
                                userId: t.id,
                                status: n,
                                clientStatus: r,
                                activities: a,
                                timestamp: i
                            });
                            o.add(t.id)
                        }
                    }));
                    o.delete(r);
                    o.forEach(Z)
                },
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.presences;
                    P = t.presencesForGuilds;
                    T = t.statuses;
                    A = t.activities;
                    N = t.activityMetadata
                },
                GUILD_CREATE: function(e) {
                    var t = e.guild;
                    t.presences.forEach((function(e) {
                        var n = e.user,
                            r = e.status,
                            o = e.clientStatus,
                            i = e.activities;
                        U({
                            guildId: t.id,
                            userId: n.id,
                            status: r,
                            clientStatus: o,
                            activities: i
                        })
                    }))
                },
                GUILD_DELETE: function(e) {
                    G(e.guild.id)
                },
                GUILD_MEMBER_REMOVE: function(e) {
                    return B(e.guildId, e.user.id)
                },
                PRESENCE_UPDATES: function(e) {
                    return e.updates.map((function(e) {
                        var t = e.guildId,
                            n = e.user,
                            r = e.status,
                            o = e.clientStatus,
                            i = e.activities;
                        return U({
                            guildId: null != t ? t : p.ME,
                            userId: n.id,
                            status: r,
                            clientStatus: o,
                            activities: i
                        })
                    })).some((function(e) {
                        return e
                    }))
                },
                PRESENCES_REPLACE: function(e) {
                    var t = e.presences;
                    G(p.ME);
                    t.forEach((function(e) {
                        var t = e.user,
                            n = e.status,
                            r = e.clientStatus,
                            o = e.activities;
                        null != t && U({
                            guildId: p.ME,
                            userId: t.id,
                            status: n,
                            clientStatus: r,
                            activities: o
                        })
                    }))
                },
                ACTIVITY_METADATA_UPDATE: function(e) {
                    var t = e.userId,
                        n = e.metadata;
                    N[t] = n;
                    return !1
                },
                THREAD_MEMBER_LIST_UPDATE: function(e) {
                    var t = e.guildId;
                    e.members.forEach((function(e) {
                        null != e.presence && U({
                            guildId: t,
                            userId: e.user_id,
                            status: e.presence.status,
                            clientStatus: e.presence.clientStatus,
                            activities: e.presence.activities
                        })
                    }))
                },
                THREAD_MEMBERS_UPDATE: function(e) {
                    var t = e.guildId,
                        n = e.addedMembers;
                    null == n || n.forEach((function(e) {
                        null != e.presence && U({
                            guildId: t,
                            userId: e.userId,
                            status: e.presence.status,
                            clientStatus: e.presence.clientStatus,
                            activities: e.presence.activities
                        })
                    }))
                },
                SELF_PRESENCE_STORE_UPDATE: function(e) {
                    var t = c.default.getId();
                    if (T[t] === e.status && A[t] === e.activities) return !1;
                    T[t] = e.status;
                    A[t] = e.activities;
                    delete N[t]
                }
            })
        },
        239734: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => S
            });
            var r = n(202351),
                o = n(744564),
                i = n(840922);

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        u(e, t, n[t])
                    }))
                }
                return e
            }

            function c(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function f(e, t) {
                f = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return f(e, t)
            }
            var p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = s(e);
                    if (t) {
                        var o = s(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            var h = !1,
                y = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                O = l({}, y);

            function b() {
                O.affinityUserIds = new Set(O.userAffinities.map((function(e) {
                    return e.user_id
                })).filter((function(e) {
                    return !i.Z.isBlocked(e)
                })))
            }
            var E = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && f(e, t)
                }(n, e);
                var t = d(n);

                function n() {
                    a(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    this.waitFor(i.Z);
                    if (null != e) {
                        O.userAffinities = e.userAffinities;
                        O.affinityUserIds = new Set(e.affinityUserIds);
                        O.lastFetched = e.lastFetched
                    }
                    this.syncWith([i.Z], b)
                };
                r.needsRefresh = function() {
                    return Date.now() - O.lastFetched > 864e5
                };
                r.getFetching = function() {
                    return h
                };
                r.getState = function() {
                    return O
                };
                r.getUserAffinities = function() {
                    return O.userAffinities
                };
                r.getUserAffinitiesUserIds = function() {
                    return O.affinityUserIds
                };
                return n
            }(r.ZP.PersistedStore);
            E.displayName = "UserAffinitiesStore";
            E.persistKey = "UserAffinitiesStore";
            E.migrations = [function(e) {
                return null
            }];
            const S = new E(o.Z, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t, n = e.affinities;
                    O.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [];
                    O.lastFetched = Date.now();
                    b();
                    h = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    h = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    h = !1
                },
                LOGOUT: function() {
                    O = l({}, y)
                }
            })
        },
        223219: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => B
            });
            var r = n(496486),
                o = n.n(r),
                i = n(202351),
                a = n(744564),
                u = n(473903),
                s = n(2590);

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        f(e, t, n[t])
                    }))
                }
                return e
            }

            function h(e, t) {
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function y(e, t) {
                y = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return y(e, t)
            }
            var O = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function b(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = p(e);
                    if (t) {
                        var o = p(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
                }
            }
            var E = s.QZA.CLOSED,
                S = null,
                _ = null,
                v = {},
                g = {},
                m = {},
                I = null,
                P = null,
                T = !1,
                A = !1,
                R = null,
                N = null,
                C = null,
                M = [],
                L = null,
                w = null;

            function j(e) {
                var t, n, r, o, i, a, l = u.default.getCurrentUser();
                if (null == l) return Z();
                _ = null !== (t = e.section) && void 0 !== t ? t : _;
                L = null !== (n = e.section) && void 0 !== n ? n : _;
                null != e.subsection && null != _ && (v[_] = e.subsection);
                null != e.scrollPosition && null != _ && (g[_] = e.scrollPosition);
                A = !!e.openWithoutBackstack;
                E = s.QZA.OPEN;
                m = {};
                I = f({}, s.oAB.ACCOUNT, {
                    userId: l.id,
                    username: l.username,
                    discriminator: l.discriminator,
                    email: l.email,
                    avatar: l.avatar,
                    password: "",
                    newPassword: null,
                    claimed: l.isClaimed()
                });
                P = d({}, I);
                N = null !== (r = e.onClose) && void 0 !== r ? r : null;
                C = null !== (o = e.analyticsLocation) && void 0 !== o ? o : null;
                M = null !== (i = e.analyticsLocations) && void 0 !== i ? i : [];
                w = null !== (a = e.impressionSource) && void 0 !== a ? a : null
            }

            function Z() {
                E = s.QZA.CLOSED;
                T = !1;
                I = null;
                L = null;
                P = null;
                S = null;
                _ = null;
                v = {};
                g = {};
                N = null;
                C = null;
                M = [];
                w = null
            }

            function U() {
                E = s.QZA.OPEN;
                m = {}
            }
            var D = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && y(e, t)
                }(n, e);
                var t = b(n);

                function n() {
                    l(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(u.default)
                };
                r.hasChanges = function() {
                    return null != P && null != I && (!(!this.isOpen() && R !== s.cII.USER_SETTINGS) && !o().isEqual(P, I))
                };
                r.isOpen = function() {
                    return T
                };
                r.getPreviousSection = function() {
                    return S
                };
                r.getSection = function() {
                    return _
                };
                r.getSubsection = function() {
                    return null != _ ? v[_] : null
                };
                r.getScrollPosition = function() {
                    return null != _ ? g[_] : null
                };
                r.shouldOpenWithoutBackstack = function() {
                    return A
                };
                r.getProps = function() {
                    return {
                        submitting: E === s.QZA.SUBMITTING,
                        section: _,
                        subsection: null != _ ? v[_] : null,
                        scrollPosition: null != _ ? g[_] : null,
                        settings: P,
                        errors: m,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: A,
                        analyticsLocation: C,
                        analyticsLocations: M,
                        initialSection: L,
                        impressionSource: w
                    }
                };
                ! function(e, t, n) {
                    t && c(e.prototype, t);
                    n && c(e, n)
                }(n, [{
                    key: "onClose",
                    get: function() {
                        return N
                    }
                }]);
                return n
            }(i.ZP.Store);
            D.displayName = "UserSettingsModalStore";
            const B = new D(a.Z, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    T = !0;
                    j(e)
                },
                USER_SETTINGS_MODAL_INIT: j,
                USER_SETTINGS_MODAL_CLOSE: Z,
                LOGOUT: Z,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    E = s.QZA.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    if (E !== s.QZA.SUBMITTING) return !1;
                    E = s.QZA.OPEN;
                    _ = s.oAB.ACCOUNT;
                    var t;
                    m = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    S = _;
                    _ = e.section;
                    C = null;
                    var t;
                    M = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [];
                    null != e.subsection && (v[_] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    var t = e.forSection;
                    null != t ? delete v[t] : null != _ && delete v[_]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    var t = e.forSection;
                    null != t ? delete g[t] : null != _ && delete g[_]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    var t = e.settings;
                    null == P && (P = {});
                    var n = P[s.oAB.ACCOUNT];
                    P[s.oAB.ACCOUNT] = d({}, n, t)
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: U,
                USER_SETTINGS_MODAL_RESET: function() {
                    var e = u.default.getCurrentUser();
                    U();
                    if (null != e) {
                        I = f({}, s.oAB.ACCOUNT, {
                            userId: e.id,
                            username: e.username,
                            discriminator: e.discriminator,
                            email: e.email,
                            avatar: e.avatar,
                            password: "",
                            newPassword: null,
                            claimed: e.isClaimed()
                        });
                        P = d({}, I)
                    }
                },
                DRAWER_SELECT_TAB: function(e) {
                    R = e.tab;
                    return null == _ && R === s.cII.USER_SETTINGS && j({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        64318: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => b
            });
            var r = n(202351),
                o = n(744564);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function c(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function f(e, t) {
                f = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return f(e, t)
            }
            var p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = s(e);
                    if (t) {
                        var o = s(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            var h, y = {
                hasAcceptedStoreTerms: !1,
                hasAcceptedEulaIds: []
            };
            var O = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && f(e, t)
                }(n, e);
                var t = d(n);

                function n() {
                    i(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    h = null != e ? e : y
                };
                r.getState = function() {
                    return h
                };
                r.hasAcceptedEULA = function(e) {
                    return h.hasAcceptedEulaIds.includes(e)
                };
                ! function(e, t, n) {
                    t && a(e.prototype, t);
                    n && a(e, n)
                }(n, [{
                    key: "hasAcceptedStoreTerms",
                    get: function() {
                        return h.hasAcceptedStoreTerms
                    }
                }]);
                return n
            }(r.ZP.PersistedStore);
            O.displayName = "ApplicationStoreUserSettingsStore";
            O.persistKey = "ApplicationStoreUserSettingsStore";
            O.migrations = [function(e) {
                return null == e.hasAcceptedEulaIds ? l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            u(e, t, n[t])
                        }))
                    }
                    return e
                }({}, e), {
                    hasAcceptedEulaIds: []
                }) : e
            }];
            const b = new O(o.Z, {
                APPLICATION_STORE_ACCEPT_STORE_TERMS: function() {
                    h.hasAcceptedStoreTerms = !0
                },
                APPLICATION_STORE_ACCEPT_EULA: function(e) {
                    var t = e.eulaId;
                    if (h.hasAcceptedEulaIds.includes(t)) return !1;
                    h.hasAcceptedEulaIds.push(t)
                }
            })
        },
        669426: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => S
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                u = n(304548),
                s = n(107364),
                l = n(718831),
                c = n(70821),
                f = n.n(c);

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function y(e, t) {
                return !t || "object" !== b(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function O(e, t) {
                O = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return O(e, t)
            }
            var b = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function E(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return y(this, n)
                }
            }
            const S = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && O(e, t)
                }(n, e);
                var t = E(n);

                function n() {
                    p(this, n);
                    var e;
                    (e = t.apply(this, arguments)).renderBreadcrumb = function(t, n) {
                        var o, i = e.props,
                            s = i.activeId,
                            c = i.onBreadcrumbClick,
                            p = i.breadcrumbs,
                            h = i.renderCustomBreadcrumb,
                            y = i.separatorClassName,
                            O = t.id === s,
                            b = n === p.length - 1,
                            E = null != h ? h(t, O) : (0, r.jsx)("span", {
                                className: a()(f().breadcrumb, (o = {}, d(o, f().activeBreadcrumb, O), d(o, f().interactiveBreadcrumb, null != c), o)),
                                children: t.label
                            });
                        return (0, r.jsxs)("div", {
                            className: a()(f().breadcrumbWrapper, d({}, f().breadcrumbFinalWrapper, b)),
                            children: [null != c ? (0, r.jsx)(u.Clickable, {
                                tag: "span",
                                onClick: function() {
                                    return e.handleClick(t)
                                },
                                className: f().breadcrumbClickWrapper,
                                children: E
                            }) : E, b ? null : (0, r.jsx)(l.Z, {
                                className: a()(f().breadcrumbArrow, y),
                                direction: l.Z.Directions.RIGHT
                            })]
                        }, t.id)
                    };
                    return e
                }
                var o = n.prototype;
                o.handleClick = function(e) {
                    var t = this.props.onBreadcrumbClick;
                    null != t && t(e)
                };
                o.render = function() {
                    var e = this.props,
                        t = e.breadcrumbs,
                        n = e.className,
                        o = t.map(this.renderBreadcrumb);
                    return (0, r.jsx)(s.Z, {
                        justify: s.Z.Justify.START,
                        className: a()(f().breadcrumbs, n),
                        children: o
                    })
                };
                return n
            }(o.PureComponent)
        },
        459940: (e, t, n) => {
            "use strict";
            n.d(t, {
                u: () => _,
                Z: () => g
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                u = n(304548),
                s = n(990554),
                l = n(107364),
                c = n(473708),
                f = n(716523),
                p = n.n(f);

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function h(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
            }

            function O(e, t) {
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function b(e, t) {
                b = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return b(e, t)
            }
            var E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function S(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = y(e);
                    if (t) {
                        var o = y(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return O(this, n)
                }
            }
            var _ = {
                    DEFAULT: "default",
                    SUCCESS: "success",
                    ERROR: "error"
                },
                v = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && b(e, t)
                    }(n, e);
                    var t = S(n);

                    function n() {
                        d(this, n);
                        var e;
                        (e = t.apply(this, arguments)).inputRef = o.createRef();
                        e.containerRef = o.createRef();
                        e.handleButtonClick = function() {
                            e.select();
                            var t = e.props;
                            (0, t.onCopy)(t.value)
                        };
                        e.handleInputClick = function() {
                            e.select()
                        };
                        return e
                    }
                    var i = n.prototype;
                    i.select = function() {
                        var e;
                        null === (e = this.inputRef.current) || void 0 === e || e.select()
                    };
                    i.renderInput = function(e) {
                        var t, n = this.props,
                            o = n.value,
                            i = n.mode,
                            u = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
                        return (0, r.jsx)("input", {
                            className: a()((0, s.l)(p(), "input", i), h({}, p().inputHidden, e)),
                            ref: this.inputRef,
                            type: "text",
                            value: o,
                            onClick: this.handleInputClick,
                            readOnly: !0,
                            "aria-labelledby": u
                        })
                    };
                    i.render = function() {
                        var e, t = this.props,
                            n = t.text,
                            o = void 0 === n ? c.Z.Messages.COPY : n,
                            i = t.mode,
                            f = t.hideMessage,
                            d = t.className,
                            h = t.buttonLook,
                            y = null != f;
                        switch (i) {
                            case _.SUCCESS:
                                e = u.ButtonColors.GREEN;
                                break;
                            case _.ERROR:
                                e = u.ButtonColors.RED;
                                break;
                            default:
                                e = this.props.buttonColor
                        }
                        return (0, r.jsx)(u.FocusRing, {
                            focusTarget: this.inputRef,
                            ringTarget: this.containerRef,
                            children: (0,
                                r.jsx)("div", {
                                className: a()((0, s.l)(p(), "copyInput", i), d),
                                ref: this.containerRef,
                                children: (0, r.jsxs)(l.Z, {
                                    className: p().layout,
                                    children: [(0, r.jsxs)(l.Z, {
                                        className: p().inputWrapper,
                                        children: [this.renderInput(y), y ? (0, r.jsx)("div", {
                                            className: p().hiddenMessage,
                                            children: f
                                        }) : null]
                                    }), (0, r.jsx)(l.Z, {
                                        shrink: 1,
                                        grow: 0,
                                        style: {
                                            margin: 0
                                        },
                                        children: (0, r.jsx)(u.Button, {
                                            className: p().button,
                                            onClick: this.handleButtonClick,
                                            size: u.ButtonSizes.MIN,
                                            color: e,
                                            look: h,
                                            children: o
                                        })
                                    })]
                                })
                            })
                        })
                    };
                    return n
                }(o.PureComponent);
            v.contextType = u.FormContext;
            v.defaultProps = {
                supportsCopy: !0,
                buttonColor: u.ButtonColors.PRIMARY,
                buttonLook: u.ButtonLooks.FILLED,
                mode: _.DEFAULT
            };
            v.Modes = _;
            v.ButtonColors = u.ButtonColors;
            v.ButtonLooks = u.ButtonLooks;
            const g = v
        },
        750203: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => N
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                u = n(269116);

            function s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function l(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var c = n(124251),
                f = n(168075),
                p = n(795308),
                d = n(633878);

            function h(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function y(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function O(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function b(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function E(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function S(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const _ = (0, f.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    a = e.color,
                    u = void 0 === a ? "currentColor" : a,
                    s = e.foreground,
                    l = S(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", E(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            b(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, d.Z)(l)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 40 40",
                    children: (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsx)("path", {
                            className: s,
                            fill: u,
                            fillOpacity: ".8",
                            d: "M21.226 30v-4.154h-3.755V30h3.755zm-.512-8.62c3.67-1.337 5.718-2.959 5.718-6.145 0-3.272-2.36-5.235-6.088-5.235-2.589 0-4.637.825-6.344 2.048l.484 3.3c1.621-1.251 3.47-2.162 5.49-2.162 1.707 0 2.845.854 2.845 2.305 0 1.593-1.08 2.475-3.812 3.442l-.882.342.342 4.523 2.076-.455.171-1.963z"
                        }), (0, r.jsx)("rect", {
                            className: s,
                            width: "38",
                            height: "38",
                            x: "1",
                            y: "1",
                            stroke: u,
                            strokeOpacity: ".4",
                            strokeWidth: "2",
                            rx: "5"
                        }), (0, r.jsx)("circle", {
                            className: s,
                            cx: "7",
                            cy: "7",
                            r: "2",
                            fill: u,
                            fillOpacity: ".4"
                        }), (0, r.jsx)("circle", {
                            className: s,
                            cx: "7",
                            cy: "33",
                            r: "2",
                            fill: u,
                            fillOpacity: ".4"
                        }), (0, r.jsx)("circle", {
                            className: s,
                            cx: "33",
                            cy: "7",
                            r: "2",
                            fill: u,
                            fillOpacity: ".4"
                        }), (0, r.jsx)("circle", {
                            className: s,
                            cx: "33",
                            cy: "33",
                            r: "2",
                            fill: u,
                            fillOpacity: ".4"
                        })]
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    a = e.color,
                    u = void 0 === a ? p.Z.colors.INTERACTIVE_NORMAL : a,
                    s = e.colorClass,
                    l = void 0 === s ? "" : s,
                    c = O(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", y(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            h(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, d.Z)(c)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm6.813 7c-.548 0-.997.263-1.238.615a1 1 0 0 1-1.65-1.13C9.548 7.576 10.623 7 11.812 7c1.822 0 3.438 1.381 3.438 3.25 0 1.454-.977 2.612-2.27 3.055l.003.01a1 1 0 0 1-1.966.37l-.187-1a1 1 0 0 1 .982-1.185c.871 0 1.438-.633 1.438-1.25S12.683 9 11.812 9ZM13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7-10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7 18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM5.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
                        clipRule: "evenodd",
                        className: l
                    })
                }))
            }));
            var v = n(203600),
                g = n(605254),
                m = n.n(g);

            function I(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function P(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function T(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var A = {
                XSMALL: m().xsmall,
                SMALL: m().small,
                MEDIUM: m().medium,
                LARGE: m().large
            };
            var R = function(e) {
                var t, i = e.game,
                    s = e.guild,
                    f = e.skuId,
                    p = e.pid,
                    d = e.className,
                    h = e.guildClassName,
                    y = e.size,
                    O = void 0 === y ? A.MEDIUM : y,
                    b = T(e, ["game", "guild", "skuId", "pid", "className", "guildClassName", "size"]);
                null != f && (t = function(e) {
                    if (null == e) return null;
                    switch (e) {
                        case v.Si.GUILD:
                            return n(460122);
                        case v.Si.TIER_0:
                            return n(873994);
                        case v.Si.TIER_1:
                            return n(413369);
                        case v.Si.TIER_2:
                        case v.Si.LEGACY:
                            return n(132354);
                        default:
                            return null
                    }
                }(f));
                null != i && null == t && (t = i.getIconURL(function(e) {
                    switch (e) {
                        case A.XSMALL:
                            return 24;
                        case A.SMALL:
                            return 30;
                        case A.MEDIUM:
                            return 40;
                        case A.LARGE:
                            return 60;
                        default:
                            return 80
                    }
                }(O)));
                t = function(e, t) {
                    var n = l(o.useState(), 2),
                        r = n[0],
                        i = n[1];
                    o.useEffect((function() {
                        null != e && null == t ? (0, u.Z)().then((function(t) {
                            null != t && t.identifyGame(e, (function(e, t) {
                                0 === e && null != t.icon && "" !== t.icon && null != t.name && "" !== t.name && i("data:image/png;base64,".concat(t.icon))
                            }))
                        })) : i(void 0)
                    }), [e, t]);
                    return null != t ? t : r
                }(p, t);
                if (null == t && null != s) {
                    var E = function(e) {
                        switch (e) {
                            case A.XSMALL:
                                return c.Z.Sizes.SMALLER;
                            case A.SMALL:
                                return c.Z.Sizes.SMALL;
                            case A.LARGE:
                                return c.Z.Sizes.LARGE;
                            default:
                                return c.Z.Sizes.MEDIUM
                        }
                    }(O);
                    return (0, r.jsx)(c.Z, {
                        className: a()(m().gameIcon, h, d),
                        guild: s,
                        size: E
                    })
                }
                return null == t ? (0, r.jsx)(_, {
                    className: a()(m().gameIcon, O, d)
                }) : (0, r.jsx)("div", P(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            I(e, t, n[t])
                        }))
                    }
                    return e
                }({}, b), {
                    className: a()(m().gameIcon, O, d),
                    style: {
                        backgroundImage: "url('".concat(t, "')")
                    }
                }))
            };
            R.Sizes = A;
            const N = R
        },
        709189: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => R,
                C: () => C
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                u = n(853158),
                s = n(304548),
                l = n(662478),
                c = n(107364),
                f = n(998933),
                p = n.n(f);

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function h(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        h(e, t, n[t])
                    }))
                }
                return e
            }

            function b(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function E(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function S(e, t) {
                return !t || "object" !== m(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function _(e, t) {
                _ = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return _(e, t)
            }
            var v, g, m = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function I(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = y(e);
                    if (t) {
                        var o = y(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return S(this, n)
                }
            }! function(e) {
                e.DEFAULT = "default";
                e.SMALL = "small"
            }(v || (v = {}));
            var P, T = (h(g = {}, v.DEFAULT, p().shineDefault), h(g, v.SMALL, p().shineSmall), g),
                A = (h(P = {}, v.DEFAULT, p().shineInnerDefault), h(P, v.SMALL, p().shineInnerSmall), P),
                R = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && _(e, t)
                    }(n, e);
                    var t = I(n);

                    function n() {
                        d(this, n);
                        return t.apply(this, arguments)
                    }
                    n.prototype.render = function() {
                        var e = this.props,
                            t = e.className,
                            n = e.shineSize,
                            o = e.shinePaused,
                            i = E(e, ["className", "shineSize", "shinePaused"]);
                        return (0, r.jsx)(u.Z.div, b(O({}, i), {
                            className: a()(p().shineContainer, t, h({}, p().shinePaused, o)),
                            children: (0, r.jsx)(c.Z, {
                                align: c.Z.Align.CENTER,
                                justify: c.Z.Justify.CENTER,
                                className: T[n],
                                children: (0, r.jsx)("div", {
                                    className: A[n]
                                })
                            })
                        }))
                    };
                    return n
                }(o.PureComponent);
            R.defaultProps = {
                shineSize: v.DEFAULT
            };
            var N = function(e) {
                var t = e.children,
                    n = e.className,
                    i = e.disabled,
                    u = e.submitting,
                    c = e.pauseAnimation,
                    f = e.shineSize,
                    d = void 0 === f ? v.DEFAULT : f,
                    h = e.shinePaused,
                    y = e.buttonShineClassName,
                    S = e.onlyShineOnHover,
                    _ = E(e, ["children", "className", "disabled", "submitting", "pauseAnimation", "shineSize", "shinePaused", "buttonShineClassName", "onlyShineOnHover"]),
                    g = o.createRef(),
                    m = (0, l.Z)(g),
                    I = !i && !u && !0 !== c && (!S || m);
                return (0, r.jsxs)(s.Button, b(O({
                    buttonRef: g
                }, _), {
                    className: a()(p().shinyButton, n),
                    disabled: i,
                    submitting: u,
                    children: [t, I ? (0, r.jsx)(R, {
                        shinePaused: h,
                        className: a()(p().buttonShine, S ? p().onlyShineOnHover : void 0, y),
                        shineSize: d
                    }) : null]
                }))
            };
            N.ShineSizes = v;
            const C = N
        },
        443812: (e, t, n) => {
            "use strict";
            n.d(t, {
                hQ: () => a,
                Dt: () => u,
                FG: () => s
            });
            var r = n(873955),
                o = n.n(r),
                i = n(989824),
                a = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return o()(e)
                },
                u = function() {
                    return (0, i.Z)((function() {
                        return a()
                    }))
                },
                s = function(e) {
                    return (0, e.children)(u())
                }
        },
        718831: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                a = n(713068),
                u = n(388054),
                s = n(319497),
                l = n(67183),
                c = n(304548),
                f = n(633878),
                p = n(794308),
                d = n.n(p);

            function h(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        h(e, t, n[t])
                    }))
                }
                return e
            }

            function O(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function b(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var E = {
                    UP: d().directionUp,
                    RIGHT: d().directionRight,
                    DOWN: d().directionDown,
                    LEFT: d().directionLeft
                },
                S = function(e) {
                    var t = e.direction,
                        n = void 0 === t ? E.DOWN : t,
                        o = e.width,
                        p = void 0 === o ? 24 : o,
                        S = e.height,
                        _ = void 0 === S ? 24 : S,
                        v = e.color,
                        g = void 0 === v ? "currentColor" : v,
                        m = e.transition,
                        I = void 0 === m ? d().transition : m,
                        P = e.className,
                        T = e.foreground,
                        A = e.expanded,
                        R = b(e, ["direction", "width", "height", "color", "transition", "className", "foreground", "expanded"]),
                        N = (0, c.useRedesignIconContext)().enabled,
                        C = n;
                    !0 === A ? C = E.DOWN : !1 === A && (C = E.RIGHT);
                    if (N) {
                        var M, L = (M = {}, h(M, E.UP, l.u),
                            h(M, E.DOWN, a.C), h(M, E.LEFT, u.V), h(M, E.RIGHT, s.F), M)[C];
                        return (0, r.jsx)(L, O(y({}, R), {
                            className: P,
                            width: p,
                            height: _,
                            color: g,
                            colorClass: T
                        }))
                    }
                    return (0, r.jsx)("svg", O(y({
                        className: i()(P, I, C),
                        width: p,
                        height: _,
                        viewBox: "0 0 24 24"
                    }, (0, f.Z)(R)), {
                        children: (0, r.jsx)("path", {
                            className: T,
                            fill: "none",
                            stroke: g,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    }))
                };
            S.Directions = E;
            const _ = S
        },
        822511: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(795308),
                a = n(633878);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function l(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function p(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const d = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    u = e.color,
                    s = void 0 === u ? "currentColor" : u,
                    l = e.foreground,
                    d = p(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            c(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(d)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 18 20",
                    children: (0, r.jsx)("path", {
                        className: l,
                        fill: s,
                        d: "M15,15H3V13H15Zm0-4H3V9H15Zm0-4H3V5H15ZM0,20l1.5-1.5L3,20l1.5-1.5L6,20l1.5-1.5L9,20l1.5-1.5L12,20l1.5-1.5L15,20l1.5-1.5L18,20V0L16.5,1.5,15,0,13.5,1.5,12,0,10.5,1.5,9,0,7.5,1.5,6,0,4.5,1.5,3,0,1.5,1.5,0,0Z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    c = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    h = void 0 === d ? "" : d,
                    y = l(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", s(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            u(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: c,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0,
                        r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M21 21.934V2.067a1 1 0 0 0-1.268-.964l-2.51.698a3 3 0 0 1-1.454.038l-3.117-.693a3 3 0 0 0-1.302 0l-3.117.693A3 3 0 0 1 6.778 1.8l-2.51-.698A1 1 0 0 0 3 2.066v19.868a1 1 0 0 0 1.268.964l2.51-.697a3 3 0 0 1 1.454-.038l3.117.692c.429.096.873.096 1.302 0l3.117-.692a3 3 0 0 1 1.454.038l2.51.697A1 1 0 0 0 21 21.935ZM7 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Zm-1 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm8-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1Z",
                        clipRule: "evenodd",
                        className: h
                    })
                }))
            }))
        },
        856236: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function u(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function s(e) {
                var t = e.width,
                    n = void 0 === t ? 14 : t,
                    s = e.height,
                    l = void 0 === s ? 14 : s,
                    c = e.color,
                    f = void 0 === c ? "currentColor" : c,
                    p = e.foreground,
                    d = u(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(d)), {
                    width: n,
                    height: l,
                    viewBox: "0 0 14 14",
                    children: (0, r.jsx)("path", {
                        className: p,
                        fill: f,
                        d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z"
                    })
                }))
            }
        },
        531441: (e, t, n) => {
            "use strict";
            n.d(t, {
                Dv: () => d,
                OV: () => y,
                NG: () => O,
                mA: () => b,
                IG: () => E,
                lB: () => S,
                G2: () => _,
                fW: () => v
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                a = (n(304548), n(87931)),
                u = (n(473708), n(800624)),
                s = n.n(u);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        l(e, t, n[t])
                    }))
                }
                return e
            }

            function f(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function p(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var d = {
                ROUND: s().baseShapeRound,
                ROUND_LEFT: s().baseShapeRoundLeft,
                ROUND_RIGHT: s().baseShapeRoundRight,
                SQUARE: ""
            };

            function h(e) {
                switch (e) {
                    case 1:
                    case 4:
                    case 6:
                        return 1;
                    default:
                        return
                }
            }

            function y(e) {
                return e < 10 ? 16 : e < 100 ? 22 : 30
            }

            function O(e) {
                return e < 1e3 ? "".concat(e) : "".concat(Math.min(Math.floor(e / 1e3), 9), "k+")
            }
            var b = function(e) {
                    var t = e.count,
                        n = e.color,
                        o = void 0 === n ? a.Z.STATUS_DANGER : n,
                        u = e.disableColor,
                        l = void 0 !== u && u,
                        b = e.shape,
                        E = void 0 === b ? d.ROUND : b,
                        S = e.className,
                        _ = e.style,
                        v = p(e, ["count", "color", "disableColor", "shape", "className", "style"]);
                    return (0, r.jsx)("div", f(c({
                        className: i()(S, s().numberBadge, E),
                        style: c({
                            backgroundColor: l ? void 0 : o,
                            width: y(t),
                            paddingRight: h(t)
                        }, _)
                    }, v), {
                        children: O(t)
                    }))
                },
                E = function(e) {
                    var t = e.text,
                        n = e.className,
                        o = e.color,
                        u = void 0 === o ? a.Z.STATUS_DANGER : o,
                        l = e.shape,
                        h = void 0 === l ? d.ROUND : l,
                        y = e.disableColor,
                        O = void 0 !== y && y,
                        b = e.style,
                        E = p(e, ["text", "className", "color", "shape", "disableColor", "style"]);
                    return (0, r.jsx)("div", f(c({
                        className: i()(n, s().textBadge, h),
                        style: c({
                            backgroundColor: O ? void 0 : u
                        }, b)
                    }, E), {
                        children: t
                    }))
                },
                S = function(e) {
                    var t = e.text,
                        n = e.className,
                        o = p(e, ["text", "className"]);
                    return (0, r.jsx)(E, c({
                        className: i()(s().premiumBadge, n),
                        text: t
                    }, o))
                },
                _ = function(e) {
                    var t = e.icon,
                        n = e.className,
                        o = e.color,
                        u = void 0 === o ? a.Z.STATUS_DANGER : o,
                        l = e.shape,
                        f = void 0 === l ? d.ROUND : l,
                        p = e.disableColor,
                        h = void 0 !== p && p,
                        y = e.style;
                    return (0, r.jsx)("div", {
                        className: i()(n, s().iconBadge, f),
                        style: c({
                            backgroundColor: h ? void 0 : u
                        }, y),
                        children: (0, r.jsx)(t, {
                            className: s().icon
                        })
                    })
                },
                v = function(e) {
                    var t = e.className,
                        n = e.color,
                        o = void 0 === n ? a.Z.INTERACTIVE_ACTIVE : n,
                        u = e.shape,
                        l = void 0 === u ? d.ROUND : u,
                        f = e.disableColor,
                        h = void 0 !== f && f,
                        y = e.style,
                        O = p(e, ["className", "color", "shape", "disableColor", "style"]);
                    return (0,
                        r.jsx)("div", c({
                        className: i()(t, s().circleBadge, l),
                        style: c({
                            backgroundColor: h ? void 0 : o
                        }, y)
                    }, O))
                }
        },
        691797: (e, t, n) => {
            "use strict";
            n.d(t, {
                wS: () => a,
                JG: () => u
            });
            var r = n(482507),
                o = n(120415),
                i = n(310126),
                a = function() {
                    if (o.FB) return null != i.ZP.copy;
                    try {
                        return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                    } catch (e) {
                        return !1
                    }
                }();

            function u(e) {
                if (!a) return !1;
                if (o.FB) {
                    i.ZP.copy(e);
                    return !0
                }
                return r.J(e)
            }
        },
        908478: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p,
                N: () => d
            });
            var r = n(652591),
                o = n(322500),
                i = n(2590),
                a = n(473708);

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function s(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var l = /^\d+$/,
                c = /^(.+?@.+?\..+?|.+?#\d{4})$/,
                f = /^[a-zA-Z0-9_\\.]+$/;

            function p(e) {
                if (f.test(e)) return null;
                if (e.includes("#") && c.test(e)) return null;
                ! function(e) {
                    var t = s(e.split("#"), 2),
                        n = t[0],
                        a = t[1];
                    r.default.track(i.rMx.FRIEND_REQUEST_FAILED, {
                        reason: "Invalid Username",
                        query: e,
                        discrim_len: (null != a ? a : "").length,
                        username_len: n.length,
                        is_email_like: o.Z.isEmail(e),
                        is_invite_like: o.Z.isInvite(e),
                        is_num_only: l.test(e)
                    })
                }(e);
                return a.Z.Messages.POMELO_ADD_FRIEND_ERROR
            }

            function d(e, t) {
                switch (e) {
                    case i.evJ.RELATIONSHIP_INCOMING_DISABLED:
                        return a.Z.Messages.ADD_FRIEND_ERROR_INVALID_DISCORD_TAG.format({
                            discordTag: t
                        });
                    case i.evJ.TOO_MANY_FRIENDS:
                        return a.Z.Messages.ADD_FRIEND_ERROR_TOO_MANY_FRIENDS;
                    case i.evJ.RELATIONSHIP_ALREADY_FRIENDS:
                        return a.Z.Messages.ADD_FRIEND_ERROR_ALREADY_FRIENDS;
                    case i.evJ.USER_QUARANTINED:
                    case i.evJ.USER_FRIEND_REQUEST_LIMITED_ACCESS:
                        return a.Z.Messages.LIMITED_ACCESS_INFO_MODAL_HEADING;
                    case i.evJ.TOO_MANY_BLOCKED_USERS:
                        return a.Z.Messages.BLOCK_USER_ERROR_TOO_MANY_BLOCKED_USERS;
                    case i.evJ.RELATIONSHIP_INCOMING_BLOCKED:
                    case i.evJ.RELATIONSHIP_INVALID_SELF:
                    case i.evJ.RELATIONSHIP_INVALUD_USER_BOT:
                    case i.evJ.RELATIONSHIP_INVALID_DISCORD_TAG:
                    default:
                        return a.Z.Messages.POMELO_ADD_FRIEND_ERROR
                }
            }
        },
        488110: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => O
            });
            var r = n(473903),
                o = n(496486),
                i = function(e) {
                    return "function" == typeof e ? e() : e
                };
            n.n(o)().curry((function(e, t, n) {
                return i(t) ? e(n) : n({})
            }));

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        a(e, t, n[t])
                    }))
                }
                return e
            }

            function s(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function l(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var c, f, p = function() {
                    throw new Error("updateModal has not been implemented.")
                },
                d = n(680918);
            c = d.showModal;
            p = d.updateModalProps;
            f = n(264817).Mr;

            function h(e) {
                var t = e.promiseFn,
                    n = e.resolve,
                    r = e.reject,
                    o = e.modalProps,
                    i = void 0 === o ? {} : o,
                    a = e.hooks,
                    l = (void 0 === a ? {} : a).onEarlyClose,
                    d = function() {
                        null == l || l()
                    },
                    h = function(e) {
                        f(E);
                        n(e)
                    },
                    O = function(e) {
                        f(E);
                        r(e)
                    },
                    b = function(e) {
                        var t = e.res;
                        p(E, S, d, s(u({}, i), {
                            error: t.body.message
                        }))
                    };
                if (null != c) var E = c(S, d, i);
                else null == l || l();

                function S(e) {
                    p(E, S, d, s(u({}, i), {
                        isLoading: !0
                    }));
                    return y({
                        promiseFn: t,
                        resolve: h,
                        reject: O,
                        code: e,
                        mfaCodeHandler: b,
                        isModalOpen: !0
                    })
                }
            }

            function y(e) {
                var t = e.promiseFn,
                    n = e.resolve,
                    r = e.reject,
                    o = e.code,
                    i = e.mfaCodeHandler,
                    a = void 0 === i ? h : i,
                    s = e.isModalOpen,
                    c = void 0 !== s && s,
                    f = l(e, ["promiseFn", "resolve", "reject", "code", "mfaCodeHandler", "isModalOpen"]);
                return t(null != o ? {
                    code: o
                } : {}).then(n, (function(e) {
                    if (function(e, t) {
                            return e.body && 60008 === e.body.code || t && 429 === e.status
                        }(e, c)) return a(u({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e
                    }, f));
                    r(e)
                }))
            }

            function O(e, t) {
                var n, o, a = null != t ? t : {},
                    s = a.checkEnabled,
                    c = void 0 === s ? null !== (o = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== o && o : s,
                    f = l(a, ["checkEnabled"]);
                return new Promise((function(t, n) {
                    (i(c) ? h : y)(u({
                        promiseFn: e,
                        resolve: t,
                        reject: n
                    }, f))
                }))
            }
        },
        73105: (e, t, n) => {
            "use strict";
            n.d(t, {
                RD: () => K,
                WA: () => x,
                f5: () => G,
                Gb: () => w,
                Rs: () => H,
                _2: () => V,
                gL: () => Z,
                fG: () => D
            });
            var r = n(306472),
                o = n(737264),
                i = n(496486),
                a = n.n(i),
                u = n(809784),
                s = n(296602),
                l = n(384411),
                c = n(72580),
                f = n(310126);

            function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }
            var d = function() {
                function e(t, n) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this._shouldProcess = !1;
                    this._processing = !1;
                    this._minimumTimeRemaining = 5;
                    this._language = t;
                    this._languageHint = t;
                    this._onChange = n;
                    n(t)
                }
                var t = e.prototype;
                t.process = function(e) {
                    var t = this;
                    if (!this._processing) {
                        this._processing = !0;
                        requestIdleCallback((function(n) {
                            if (n.timeRemaining() <= t._minimumTimeRemaining) t._processEnd();
                            else {
                                e.length > 256 && (e = e.slice(0, 256));
                                (function(e, t) {
                                    return f.ZP.ensureModule("discord_spellcheck").then((function() {
                                        var n = f.ZP.requireModule("discord_spellcheck").cld;
                                        return new Promise((function(r, o) {
                                            n.detect(e, {
                                                httpHint: t,
                                                encodingHint: "UTF8"
                                            }, (function(e, t) {
                                                null != e ? o(new Error(e.message)) : !t.reliable || t.languages[0].percent < 90 || t.languages[0].score < 500 ? o(new Error("Not enough reliable text.")) : r(t.languages[0].code)
                                            }))
                                        }))
                                    }))
                                })(e, t._languageHint).then((function(e) {
                                    t.language = e;
                                    t._processEnd(n.didTimeout)
                                }), (function() {
                                    t._processEnd(n.didTimeout)
                                }))
                            }
                        }))
                    }
                };
                t._processEnd = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this._processing = !1;
                    e && this._minimumTimeRemaining++
                };
                ! function(e, t, n) {
                    t && p(e.prototype, t);
                    n && p(e, n)
                }(e, [{
                    key: "language",
                    get: function() {
                        return this._language
                    },
                    set: function(e) {
                        if (this._language !== e) {
                            this._language = e;
                            this._onChange(e)
                        }
                    }
                }, {
                    key: "languageHint",
                    set: function(e) {
                        this._languageHint = e
                    }
                }]);
                return e
            }();
            const h = {
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

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function O(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        s = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function b(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            O(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            O(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function E(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function S(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return y(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var _ = function(e, t) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2];
                                                a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    }
                },
                v = new s.Z("Spellchecker"),
                g = null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck;

            function m(e) {
                var t;
                e = null !== (t = h[e]) && void 0 !== t ? t : e;
                var n = (0, o.Q)(e.replace(/[_-]/g, "-"));
                if (null != n && null != n.langtag.language && null != n.langtag.region) {
                    var r = n.langtag,
                        i = r.language,
                        a = r.region;
                    return "".concat(i.language.toLowerCase(), "-").concat(a.toUpperCase())
                }
                v.error("".concat(e, " is not a valid locale."))
            }
            var I = function() {
                    function e(t) {
                        var n = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        this._enabled = !0;
                        this.misspelledWord = "";
                        this.corrections = [];
                        var r = S(l.default.locale.split("-"), 2),
                            o = r[0],
                            i = r[1];
                        this.regionPreference = i;
                        var a = this.getAvailableLanguages(t);
                        this.languageDetector = new d(o, (function(e) {
                            var r = "".concat(e, "-").concat(n.regionPreference);
                            if (-1 !== t.indexOf(r)) n.setLocale(r);
                            else {
                                var i, u = null !== (i = a[e]) && void 0 !== i ? i : h[o];
                                null != u && n.setLocale(u)
                            }
                        }));
                        g.on("spellcheck-result", (function(e, t) {
                            n.misspelledWord = null != e ? e : "";
                            n.corrections = null != t ? t : []
                        }))
                    }
                    var t = e.prototype;
                    t.setLearnedWords = function(e) {
                        g.setLearnedWords(e)
                    };
                    t.setLocale = function(e) {
                        var t;
                        null === (t = g.setLocale(e)) || void 0 === t || t.then((function(t) {
                            v.info("Switching to ".concat(e), t ? "(available)" : "(unavailable)")
                        }))
                    };
                    t.setAppLocale = function(e) {
                        this.regionPreference = e.split("-")[1]
                    };
                    t.detectLanguage = function(e) {
                        this.enabled && this.languageDetector.process(e)
                    };
                    t.getAvailableLanguages = function(e) {
                        var t = {};
                        e.forEach((function(e) {
                            var n, r = S(e.split("-"), 1)[0];
                            t[r] = null !== (n = t[r]) && void 0 !== n ? n : e
                        }));
                        return t
                    };
                    t.isMisspelled = function(e, t) {
                        return "" !== this.misspelledWord && e === this.misspelledWord
                    };
                    t.getCorrectionsForMisspelling = function(e, t) {
                        return this.isMisspelled(e, t) ? this.corrections : []
                    };
                    t.replaceMisspelling = function(e) {
                        g.replaceMisspelling(e)
                    };
                    ! function(e, t, n) {
                        t && E(e.prototype, t);
                        n && E(e, n)
                    }(e, [{
                        key: "enabled",
                        get: function() {
                            return this._enabled
                        },
                        set: function(e) {
                            this._enabled = e
                        }
                    }]);
                    return e
                }(),
                P = a().debounce((function(e, t) {
                    var n = function(e) {
                        if (null == e) return null;
                        if ((0, u.k)(e, HTMLInputElement) || (0, u.k)(e, HTMLTextAreaElement)) return e.value;
                        if ((0, u.k)(e) && e.hasAttribute("contenteditable")) return e.textContent
                    }(t);
                    null != n && e.detectLanguage(n)
                }), 250);

            function T(e) {
                null != document.body && document.body.addEventListener("beforeinput", (function(t) {
                    return P(e, t.target)
                }), !0)
            }

            function A() {
                return (A = b((function() {
                    var e, t, n, r;
                    return _(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, g.getAvailableDictionaries()];
                            case 1:
                                t = null !== (e = o.sent()) && void 0 !== e ? e : [];
                                n = t.map(m).filter(c.lm);
                                T(r = new I(n));
                                return [2, r]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var R = n(120415);

            function N(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        s = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function C(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            N(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            N(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var M = function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };

            function L() {
                return null != (null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck)
            }

            function w() {
                return (0, R.nI)() && L()
            }
            var j = w() ? function() {
                return A.apply(this, arguments)
            }() : null;

            function Z(e) {
                return U.apply(this, arguments)
            }

            function U() {
                return (U = C((function(e) {
                    var t;
                    return M(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, j];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.enabled = e;
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function D(e) {
                return B.apply(this, arguments)
            }

            function B() {
                return (B = C((function(e) {
                    var t;
                    return M(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, j];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.setLearnedWords(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function G(e) {
                return k.apply(this, arguments)
            }

            function k() {
                k = C((function(e) {
                    var t, n, r = arguments;
                    return M(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                t = r.length > 1 && void 0 !== r[1] && r[1];
                                return [4, j];
                            case 1:
                                return null == (n = o.sent()) ? [2, !1] : [2, n.isMisspelled(e, t)]
                        }
                    }))
                }));
                return k.apply(this, arguments)
            }

            function x(e) {
                return F.apply(this, arguments)
            }

            function F() {
                F = C((function(e) {
                    var t, n, r, o = arguments;
                    return M(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                t = o.length > 1 && void 0 !== o[1] && o[1], n = o.length > 2 && void 0 !== o[2] ? o[2] : 5;
                                return [4, j];
                            case 1:
                                return null == (r = i.sent()) ? [2, []] : [2, r.getCorrectionsForMisspelling(e, t).slice(0, n)]
                        }
                    }))
                }));
                return F.apply(this, arguments)
            }

            function H(e) {
                return Y.apply(this, arguments)
            }

            function Y() {
                return (Y = C((function(e) {
                    var t;
                    return M(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, j];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.replaceMisspelling(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function V(e) {
                return W.apply(this, arguments)
            }

            function W() {
                return (W = C((function(e) {
                    var t;
                    return M(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, j];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.setAppLocale(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function K(e) {
                if (!L()) return function() {};
                var t = r.Z.spellCheck.on("spellcheck-result", e);
                return null != t ? t : function() {}
            }
        },
        990554: (e, t, n) => {
            "use strict";
            n.d(t, {
                l: () => o
            });
            var r = n(421281);

            function o(e, t) {
                for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) o[i - 2] = arguments[i];
                var a = o.reduce((function(e, t) {
                        return e + (0, r.De)(t)
                    }), ""),
                    u = "".concat(t).concat(a),
                    s = e[u];
                if (null != s) return s;
                0
            }
        },
        391438: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(281110),
                o = n(652591);

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        i(e, t, n[t])
                    }))
                }
                return e
            }

            function u(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function s(e, t, n) {
                var r = t.trackedActionData,
                    i = u(t, ["trackedActionData"]),
                    s = {
                        url: i.url,
                        request_method: n
                    };
                return new Promise((function(t, n) {
                    e(i).then((function(e) {
                        var n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e));
                        (0, o.trackNetworkAction)(r.event, a({
                            status_code: e.status
                        }, s, n));
                        t(e)
                    })).catch((function(e) {
                        var t, i, u = r.properties;
                        "function" == typeof r.properties && (u = r.properties(e));
                        (0, o.trackNetworkAction)(r.event, a({
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (i = e.body) || void 0 === i ? void 0 : i.message
                        }, s, u));
                        n(e)
                    }))
                }))
            }
            const l = {
                get: function(e) {
                    return s(r.ZP.get, e, "get")
                },
                post: function(e) {
                    return s(r.ZP.post, e, "post")
                },
                put: function(e) {
                    return s(r.ZP.put, e, "put")
                },
                patch: function(e) {
                    return s(r.ZP.patch, e, "patch")
                },
                delete: function(e) {
                    return s(r.ZP.delete, e, "del")
                }
            }
        },
        680918: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                showModal: () => s,
                updateModalProps: () => l
            });
            var r = n(785893),
                o = (n(667294), n(264817)),
                i = n(919244);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var u = function(e, t, n) {
                return function(o) {
                    return (0, r.jsx)(i.Z, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                a(e, t, n[t])
                            }))
                        }
                        return e
                    }({
                        handleSubmit: e,
                        handleEarlyClose: t
                    }, n, o))
                }
            };

            function s(e, t, n) {
                return (0, o.h7)(u(e, t, n), {
                    onCloseCallback: t
                })
            }

            function l(e, t, n, r) {
                return (0, o.o)(e, u(t, n, r))
            }
        },
        852316: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = [{
                label: "Alberta",
                value: "AB"
            }, {
                label: "British Columbia",
                value: "BC"
            }, {
                label: "Manitoba",
                value: "MB"
            }, {
                label: "New Brunswick",
                value: "NB"
            }, {
                label: "Newfoundland and Labrador",
                value: "NL"
            }, {
                label: "Nova Scotia",
                value: "NS"
            }, {
                label: "Ontario",
                value: "ON"
            }, {
                label: "Prince Edward Island",
                value: "PE"
            }, {
                label: "Quebec",
                value: "QC"
            }, {
                label: "Saskatchewan",
                value: "SK"
            }, {
                label: "Northwest Territories",
                value: "NT"
            }, {
                label: "Nunavut",
                value: "NU"
            }, {
                label: "Yukon",
                value: "YT"
            }]
        },
        947592: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = [{
                label: "Alabama",
                value: "AL"
            }, {
                label: "Alaska",
                value: "AK"
            }, {
                label: "American Samoa",
                value: "AS"
            }, {
                label: "Arizona",
                value: "AZ"
            }, {
                label: "Arkansas",
                value: "AR"
            }, {
                label: "Armed Forces: Americas",
                value: "AA"
            }, {
                label: "Armed Forces: Europe",
                value: "AE"
            }, {
                label: "Armed Forces: Pacific",
                value: "AP"
            }, {
                label: "California",
                value: "CA"
            }, {
                label: "Colorado",
                value: "CO"
            }, {
                label: "Connecticut",
                value: "CT"
            }, {
                label: "Delaware",
                value: "DE"
            }, {
                label: "District Of Columbia",
                value: "DC"
            }, {
                label: "Federated States Of Micronesia",
                value: "FM"
            }, {
                label: "Florida",
                value: "FL"
            }, {
                label: "Georgia",
                value: "GA"
            }, {
                label: "Guam",
                value: "GU"
            }, {
                label: "Hawaii",
                value: "HI"
            }, {
                label: "Idaho",
                value: "ID"
            }, {
                label: "Illinois",
                value: "IL"
            }, {
                label: "Indiana",
                value: "IN"
            }, {
                label: "Iowa",
                value: "IA"
            }, {
                label: "Kansas",
                value: "KS"
            }, {
                label: "Kentucky",
                value: "KY"
            }, {
                label: "Louisiana",
                value: "LA"
            }, {
                label: "Maine",
                value: "ME"
            }, {
                label: "Marshall Islands",
                value: "MH"
            }, {
                label: "Maryland",
                value: "MD"
            }, {
                label: "Massachusetts",
                value: "MA"
            }, {
                label: "Michigan",
                value: "MI"
            }, {
                label: "Minnesota",
                value: "MN"
            }, {
                label: "Mississippi",
                value: "MS"
            }, {
                label: "Missouri",
                value: "MO"
            }, {
                label: "Montana",
                value: "MT"
            }, {
                label: "Nebraska",
                value: "NE"
            }, {
                label: "Nevada",
                value: "NV"
            }, {
                label: "New Hampshire",
                value: "NH"
            }, {
                label: "New Jersey",
                value: "NJ"
            }, {
                label: "New Mexico",
                value: "NM"
            }, {
                label: "New York",
                value: "NY"
            }, {
                label: "North Carolina",
                value: "NC"
            }, {
                label: "North Dakota",
                value: "ND"
            }, {
                label: "Northern Mariana Islands",
                value: "MP"
            }, {
                label: "Ohio",
                value: "OH"
            }, {
                label: "Oklahoma",
                value: "OK"
            }, {
                label: "Oregon",
                value: "OR"
            }, {
                label: "Palau",
                value: "PW"
            }, {
                label: "Pennsylvania",
                value: "PA"
            }, {
                label: "Puerto Rico",
                value: "PR"
            }, {
                label: "Rhode Island",
                value: "RI"
            }, {
                label: "South Carolina",
                value: "SC"
            }, {
                label: "South Dakota",
                value: "SD"
            }, {
                label: "Tennessee",
                value: "TN"
            }, {
                label: "Texas",
                value: "TX"
            }, {
                label: "Utah",
                value: "UT"
            }, {
                label: "Vermont",
                value: "VT"
            }, {
                label: "Virgin Islands",
                value: "VI"
            }, {
                label: "Virginia",
                value: "VA"
            }, {
                label: "Washington",
                value: "WA"
            }, {
                label: "West Virginia",
                value: "WV"
            }, {
                label: "Wisconsin",
                value: "WI"
            }, {
                label: "Wyoming",
                value: "WY"
            }]
        },
        180735: (e, t, n) => {
            "use strict";
            n.d(t, {
                h: () => r
            });
            var r;
            ! function(e) {
                e[e.USER = 100] = "USER";
                e[e.STREAM = 18] = "STREAM"
            }(r || (r = {}))
        },
        142520: (e, t, n) => {
            "use strict";
            n.d(t, {
                x: () => r
            });
            var r;
            ! function(e) {
                e.THOUGHT_EMBED_TITLE = "Clyde Thoughts"
            }(r || (r = {}))
        },
        197597: (e, t, n) => {
            "use strict";
            n.d(t, {
                S: () => r,
                M: () => o
            });
            var r;
            ! function(e) {
                e.AD = "AD";
                e.AE = "AE";
                e.AF = "AF";
                e.AG = "AG";
                e.AI = "AI";
                e.AL = "AL";
                e.AM = "AM";
                e.AO = "AO";
                e.AQ = "AQ";
                e.AR = "AR";
                e.AS = "AS";
                e.AT = "AT";
                e.AU = "AU";
                e.AW = "AW";
                e.AX = "AX";
                e.AZ = "AZ";
                e.BA = "BA";
                e.BB = "BB";
                e.BD = "BD";
                e.BE = "BE";
                e.BF = "BF";
                e.BG = "BG";
                e.BH = "BH";
                e.BI = "BI";
                e.BJ = "BJ";
                e.BL = "BL";
                e.BM = "BM";
                e.BN = "BN";
                e.BO = "BO";
                e.BQ = "BQ";
                e.BR = "BR";
                e.BS = "BS";
                e.BT = "BT";
                e.BV = "BV";
                e.BW = "BW";
                e.BY = "BY";
                e.BZ = "BZ";
                e.CA = "CA";
                e.CC = "CC";
                e.CD = "CD";
                e.CF = "CF";
                e.CG = "CG";
                e.CH = "CH";
                e.CI = "CI";
                e.CK = "CK";
                e.CL = "CL";
                e.CM = "CM";
                e.CN = "CN";
                e.CO = "CO";
                e.CR = "CR";
                e.CU = "CU";
                e.CV = "CV";
                e.CW = "CW";
                e.CX = "CX";
                e.CY = "CY";
                e.CZ = "CZ";
                e.DE = "DE";
                e.DJ = "DJ";
                e.DK = "DK";
                e.DM = "DM";
                e.DO = "DO";
                e.DZ = "DZ";
                e.EC = "EC";
                e.EE = "EE";
                e.EG = "EG";
                e.EH = "EH";
                e.ER = "ER";
                e.ES = "ES";
                e.ET = "ET";
                e.FI = "FI";
                e.FJ = "FJ";
                e.FK = "FK";
                e.FM = "FM";
                e.FO = "FO";
                e.FR = "FR";
                e.GA = "GA";
                e.GB = "GB";
                e.GD = "GD";
                e.GE = "GE";
                e.GF = "GF";
                e.GG = "GG";
                e.GH = "GH";
                e.GI = "GI";
                e.GL = "GL";
                e.GM = "GM";
                e.GN = "GN";
                e.GP = "GP";
                e.GQ = "GQ";
                e.GR = "GR";
                e.GS = "GS";
                e.GT = "GT";
                e.GU = "GU";
                e.GW = "GW";
                e.GY = "GY";
                e.HK = "HK";
                e.HM = "HM";
                e.HN = "HN";
                e.HR = "HR";
                e.HT = "HT";
                e.HU = "HU";
                e.ID = "ID";
                e.IE = "IE";
                e.IL = "IL";
                e.IM = "IM";
                e.IN = "IN";
                e.IO = "IO";
                e.IQ = "IQ";
                e.IR = "IR";
                e.IS = "IS";
                e.IT = "IT";
                e.JE = "JE";
                e.JM = "JM";
                e.JO = "JO";
                e.JP = "JP";
                e.KE = "KE";
                e.KG = "KG";
                e.KH = "KH";
                e.KI = "KI";
                e.KM = "KM";
                e.KN = "KN";
                e.KP = "KP";
                e.KR = "KR";
                e.KW = "KW";
                e.KY = "KY";
                e.KZ = "KZ";
                e.LA = "LA";
                e.LB = "LB";
                e.LC = "LC";
                e.LI = "LI";
                e.LK = "LK";
                e.LR = "LR";
                e.LS = "LS";
                e.LT = "LT";
                e.LU = "LU";
                e.LV = "LV";
                e.LY = "LY";
                e.MA = "MA";
                e.MC = "MC";
                e.MD = "MD";
                e.ME = "ME";
                e.MF = "MF";
                e.MG = "MG";
                e.MH = "MH";
                e.MK = "MK";
                e.ML = "ML";
                e.MM = "MM";
                e.MN = "MN";
                e.MO = "MO";
                e.MP = "MP";
                e.MQ = "MQ";
                e.MR = "MR";
                e.MS = "MS";
                e.MT = "MT";
                e.MU = "MU";
                e.MV = "MV";
                e.MW = "MW";
                e.MX = "MX";
                e.MY = "MY";
                e.MZ = "MZ";
                e.NA = "NA";
                e.NC = "NC";
                e.NE = "NE";
                e.NF = "NF";
                e.NG = "NG";
                e.NI = "NI";
                e.NL = "NL";
                e.NO = "NO";
                e.NP = "NP";
                e.NR = "NR";
                e.NU = "NU";
                e.NZ = "NZ";
                e.OM = "OM";
                e.PA = "PA";
                e.PE = "PE";
                e.PF = "PF";
                e.PG = "PG";
                e.PH = "PH";
                e.PK = "PK";
                e.PL = "PL";
                e.PM = "PM";
                e.PN = "PN";
                e.PR = "PR";
                e.PS = "PS";
                e.PT = "PT";
                e.PW = "PW";
                e.PY = "PY";
                e.QA = "QA";
                e.RE = "RE";
                e.RO = "RO";
                e.RS = "RS";
                e.RU = "RU";
                e.RW = "RW";
                e.SA = "SA";
                e.SB = "SB";
                e.SC = "SC";
                e.SD = "SD";
                e.SE = "SE";
                e.SG = "SG";
                e.SH = "SH";
                e.SI = "SI";
                e.SJ = "SJ";
                e.SK = "SK";
                e.SL = "SL";
                e.SM = "SM";
                e.SN = "SN";
                e.SO = "SO";
                e.SR = "SR";
                e.SS = "SS";
                e.ST = "ST";
                e.SV = "SV";
                e.SX = "SX";
                e.SY = "SY";
                e.SZ = "SZ";
                e.TC = "TC";
                e.TD = "TD";
                e.TF = "TF";
                e.TG = "TG";
                e.TH = "TH";
                e.TJ = "TJ";
                e.TK = "TK";
                e.TL = "TL";
                e.TM = "TM";
                e.TN = "TN";
                e.TO = "TO";
                e.TR = "TR";
                e.TT = "TT";
                e.TV = "TV";
                e.TW = "TW";
                e.TZ = "TZ";
                e.UA = "UA";
                e.UG = "UG";
                e.UM = "UM";
                e.US = "US";
                e.UY = "UY";
                e.UZ = "UZ";
                e.VA = "VA";
                e.VC = "VC";
                e.VE = "VE";
                e.VG = "VG";
                e.VI = "VI";
                e.VN = "VN";
                e.VU = "VU";
                e.WF = "WF";
                e.WS = "WS";
                e.YE = "YE";
                e.YT = "YT";
                e.ZA = "ZA";
                e.ZM = "ZM";
                e.ZW = "ZW";
                e.XK = "XK";
                e.AC = "AC";
                e.AN = "AN";
                e.DG = "DG";
                e.EL = "EL";
                e.IC = "IC";
                e.MI = "MI";
                e.TP = "TP";
                e.WK = "WK"
            }(r || (r = {}));
            var o = {
                NON_STANDARD_CODES: new Set(["AC", "AN", "DG", "EL", "IC", "MI", "TP", "WK", "XK"]),
                ALL: new Set(["AC", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AN", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DG", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "EL", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "IC", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MI", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TP", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WK", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"]),
                US_TERRITORIES: new Set(["AS", "GU", "MP", "PR", "VI"]),
                FRANCE_AND_FRENCH_REGION: new Set(["FR", "GF", "GP", "MQ", "NC", "PF", "PM", "RE", "TF", "WF", "YT"]),
                VAT_EU_COUNTRIES: new Set(["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"]),
                VAT_COUNTRIES: new Set(["AT", "AU", "BE", "BG", "CH", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK"]),
                TAX_DOMESTIC: new Set(["CA", "GB", "US"]),
                EU_COUNTRIES: new Set(["AD", "AL", "AT", "AX", "BA", "BE", "BG", "BY", "CH", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FO", "FR", "GG", "GR", "HR", "HU", "IC", "IE", "IM", "IT", "JE", "LI", "LT", "LU", "LV", "MC", "MD", "MK", "MT", "NL", "NO", "PL", "PT", "RO", "RU", "SE", "SI", "SJ", "SK", "SM", "UA", "VA"]),
                EEA_COUNTRIES: new Set(["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK"]),
                WITHOUT_POSTAL_CODES: new Set(["AE", "AG", "AN", "AO", "AW", "BF", "BI", "BJ", "BM", "BO", "BQ", "BS", "BW", "BZ", "CD", "CF", "CG", "CI", "CK", "CM", "CW", "DJ", "DM", "ER", "FJ", "GA", "GD", "GH", "GM", "GQ", "GY", "HK", "HM", "IE", "JM", "KE", "KI", "KM", "KN", "KP", "LY", "ML", "MO", "MR", "MW", "NA", "NR", "NU", "QA", "RW", "SB", "SC", "SL", "SR", "ST", "SX", "SY", "TD", "TF", "TG", "TK", "TL", "TO", "TV", "UG", "VU", "YE", "ZA", "ZW"]),
                TAX_EXCLUSIVE: new Set(["CA", "US"]),
                TAX_ADDRESS_REQUIRE_POSTAL_CODE: new Set(["CA", "US"])
            }
        },
        482507: (e, t, n) => {
            "use strict";
            n.d(t, {
                J: () => r
            });

            function r(e) {
                var t = document.body;
                if (null == t) throw new Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                var n = document.createRange(),
                    r = window.getSelection(),
                    o = document.createElement("textarea");
                o.value = e;
                o.contentEditable = "true";
                o.style.visibility = "none";
                t.appendChild(o);
                n.selectNodeContents(o);
                null == r || r.removeAllRanges();
                null == r || r.addRange(n);
                o.focus();
                o.setSelectionRange(0, e.length);
                var i = document.execCommand("copy");
                t.removeChild(o);
                return i
            }
        },
        989824: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n(667294),
                o = {};

            function i(e) {
                var t = (0, r.useRef)(o);
                t.current === o && (t.current = e());
                return t.current
            }
        }
    }
]);