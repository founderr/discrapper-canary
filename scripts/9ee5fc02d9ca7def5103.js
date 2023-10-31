(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["25074"], {
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
        458389: function(t, e, n) {
            var r = n("594140"),
                i = n("564414"),
                o = n("725502"),
                u = n("591350"),
                c = n("476540"),
                a = n("381178"),
                s = Object.prototype.hasOwnProperty;
            t.exports = function(t, e) {
                var n = o(t),
                    l = !n && i(t),
                    f = !n && !l && u(t),
                    h = !n && !l && !f && a(t),
                    p = n || l || f || h,
                    g = p ? r(t.length, String) : [],
                    d = g.length;
                for (var y in t)(e || s.call(t, y)) && !(p && ("length" == y || f && ("offset" == y || "parent" == y) || h && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || c(y, d))) && g.push(y);
                return g
            }
        },
        437083: function(t, e, n) {
            var r = n("561449"),
                i = n("877297");
            t.exports = function(t) {
                return i(r(t))
            }
        },
        562132: function(t, e, n) {
            var r = n("33426"),
                i = n("136047"),
                o = n("270879"),
                u = {};
            u["[object Float32Array]"] = u["[object Float64Array]"] = u["[object Int8Array]"] = u["[object Int16Array]"] = u["[object Int32Array]"] = u["[object Uint8Array]"] = u["[object Uint8ClampedArray]"] = u["[object Uint16Array]"] = u["[object Uint32Array]"] = !0, u["[object Arguments]"] = u["[object Array]"] = u["[object ArrayBuffer]"] = u["[object Boolean]"] = u["[object DataView]"] = u["[object Date]"] = u["[object Error]"] = u["[object Function]"] = u["[object Map]"] = u["[object Number]"] = u["[object Object]"] = u["[object RegExp]"] = u["[object Set]"] = u["[object String]"] = u["[object WeakMap]"] = !1;
            t.exports = function(t) {
                return o(t) && i(t.length) && !!u[r(t)]
            }
        },
        205873: function(t, e, n) {
            var r = n("733228"),
                i = n("541349"),
                o = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!r(t)) return i(t);
                var e = [];
                for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
                return e
            }
        },
        329252: function(t, e, n) {
            var r = n("877297"),
                i = n("164099");
            t.exports = function(t) {
                return r(i(t))
            }
        },
        594140: function(t, e, n) {
            t.exports = function(t, e) {
                for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                return r
            }
        },
        492692: function(t, e, n) {
            t.exports = function(t) {
                return function(e) {
                    return t(e)
                }
            }
        },
        957478: function(t, e, n) {
            var r = n("626785");
            t.exports = function(t, e) {
                return r(e, function(e) {
                    return t[e]
                })
            }
        },
        561449: function(t, e, n) {
            t.exports = function(t, e) {
                var n = -1,
                    r = t.length;
                for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
                return e
            }
        },
        733228: function(t, e, n) {
            var r = Object.prototype;
            t.exports = function(t) {
                var e = t && t.constructor;
                return t === ("function" == typeof e && e.prototype || r)
            }
        },
        541349: function(t, e, n) {
            var r = n("761197")(Object.keys, Object);
            t.exports = r
        },
        276440: function(t, e, n) {
            t = n.nmd(t);
            var r = n("447414"),
                i = "object" == typeof e && e && !e.nodeType && e,
                o = i && "object" == typeof t && t && !t.nodeType && t,
                u = o && o.exports === i && r.process,
                c = function() {
                    try {
                        var t = o && o.require && o.require("util").types;
                        if (t) return t;
                        return u && u.binding && u.binding("util")
                    } catch (t) {}
                }();
            t.exports = c
        },
        761197: function(t, e, n) {
            t.exports = function(t, e) {
                return function(n) {
                    return t(e(n))
                }
            }
        },
        877297: function(t, e, n) {
            var r = n("68421");
            t.exports = function(t, e) {
                var n = -1,
                    i = t.length,
                    o = i - 1;
                for (e = void 0 === e ? i : e; ++n < e;) {
                    var u = r(n, o),
                        c = t[u];
                    t[u] = t[n], t[n] = c
                }
                return t.length = e, t
            }
        },
        591350: function(t, e, n) {
            t = n.nmd(t);
            var r = n("690516"),
                i = n("221386"),
                o = "object" == typeof e && e && !e.nodeType && e,
                u = o && "object" == typeof t && t && !t.nodeType && t,
                c = u && u.exports === o ? r.Buffer : void 0,
                a = c ? c.isBuffer : void 0;
            t.exports = a || i
        },
        381178: function(t, e, n) {
            var r = n("562132"),
                i = n("492692"),
                o = n("276440"),
                u = o && o.isTypedArray,
                c = u ? i(u) : r;
            t.exports = c
        },
        466731: function(t, e, n) {
            var r = n("458389"),
                i = n("205873"),
                o = n("603108");
            t.exports = function(t) {
                return o(t) ? r(t) : i(t)
            }
        },
        375128: function(t, e, n) {
            var r = n("437083"),
                i = n("329252"),
                o = n("725502");
            t.exports = function(t) {
                return (o(t) ? r : i)(t)
            }
        },
        221386: function(t, e, n) {
            t.exports = function() {
                return !1
            }
        },
        164099: function(t, e, n) {
            var r = n("957478"),
                i = n("466731");
            t.exports = function(t) {
                return null == t ? [] : r(t, i(t))
            }
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
            });
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
        376507: function(t, e, n) {
            "use strict";

            function r(t) {
                let e = "==".slice(0, (4 - t.length % 4) % 4),
                    n = t.replace(/-/g, "+").replace(/_/g, "/") + e,
                    r = atob(n),
                    i = new ArrayBuffer(r.length),
                    o = new Uint8Array(i);
                for (let t = 0; t < r.length; t++) o[t] = r.charCodeAt(t);
                return i
            }

            function i(t) {
                let e = new Uint8Array(t),
                    n = "";
                for (let t of e) n += String.fromCharCode(t);
                let r = btoa(n),
                    i = r.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
                return i
            }
            n.r(e), n.d(e, {
                create: function() {
                    return m
                },
                get: function() {
                    return b
                }
            });
            var o = "copy",
                u = "convert";

            function c(t, e, n) {
                if (e === o) return n;
                if (e === u) return t(n);
                if (e instanceof Array) return n.map(n => c(t, e[0], n));
                if (e instanceof Object) {
                    let r = {};
                    for (let [i, o] of Object.entries(e)) {
                        if (o.derive) {
                            let t = o.derive(n);
                            void 0 !== t && (n[i] = t)
                        }
                        if (!(i in n)) {
                            if (o.required) throw Error("Missing key: ".concat(i));
                            continue
                        }
                        if (null == n[i]) {
                            r[i] = null;
                            continue
                        }
                        r[i] = c(t, o.schema, n[i])
                    }
                    return r
                }
            }

            function a(t, e) {
                return {
                    required: !0,
                    schema: t,
                    derive: e
                }
            }

            function s(t) {
                return {
                    required: !0,
                    schema: t
                }
            }

            function l(t) {
                return {
                    required: !1,
                    schema: t
                }
            }
            var f = {
                    type: s(o),
                    id: s(u),
                    transports: l(o)
                },
                h = {
                    appid: l(o),
                    appidExclude: l(o),
                    credProps: l(o)
                },
                p = {
                    appid: l(o),
                    appidExclude: l(o),
                    credProps: l(o)
                },
                g = {
                    publicKey: s({
                        rp: s(o),
                        user: s({
                            id: s(u),
                            name: s(o),
                            displayName: s(o)
                        }),
                        challenge: s(u),
                        pubKeyCredParams: s(o),
                        timeout: l(o),
                        excludeCredentials: l([f]),
                        authenticatorSelection: l(o),
                        attestation: l(o),
                        extensions: l(h)
                    }),
                    signal: l(o)
                },
                d = {
                    type: s(o),
                    id: s(o),
                    rawId: s(u),
                    authenticatorAttachment: l(o),
                    response: s({
                        clientDataJSON: s(u),
                        attestationObject: s(u),
                        transports: a(o, t => {
                            var e;
                            return (null == (e = t.getTransports) ? void 0 : e.call(t)) || []
                        })
                    }),
                    clientExtensionResults: a(p, t => t.getClientExtensionResults())
                },
                y = {
                    mediation: l(o),
                    publicKey: s({
                        challenge: s(u),
                        timeout: l(o),
                        rpId: l(o),
                        allowCredentials: l([f]),
                        userVerification: l(o),
                        extensions: l(h)
                    }),
                    signal: l(o)
                },
                v = {
                    type: s(o),
                    id: s(o),
                    rawId: s(u),
                    authenticatorAttachment: l(o),
                    response: s({
                        clientDataJSON: s(u),
                        authenticatorData: s(u),
                        signature: s(u),
                        userHandle: s(u)
                    }),
                    clientExtensionResults: a(p, t => t.getClientExtensionResults())
                };
            async function m(t) {
                let e = await navigator.credentials.create(c(r, g, t));
                return c(i, d, e)
            }
            async function b(t) {
                let e = await navigator.credentials.get(c(r, y, t));
                return c(i, v, e)
            }
        },
        506838: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                P: function() {
                    return G
                },
                match: function() {
                    return X
                }
            });
            let r = Symbol.for("@ts-pattern/matcher"),
                i = Symbol.for("@ts-pattern/isVariadic"),
                o = "@ts-pattern/anonymous-select-key",
                u = t => !!(t && "object" == typeof t),
                c = t => t && !!t[r],
                a = (t, e, n) => {
                    if (c(t)) {
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
                                c(n) && n[i] ? u.push(n) : u.length ? o.push(n) : r.push(n)
                            }
                            if (u.length) {
                                if (u.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (e.length < r.length + o.length) return !1;
                                let t = e.slice(0, r.length),
                                    i = 0 === o.length ? [] : e.slice(-o.length),
                                    c = e.slice(r.length, 0 === o.length ? 1 / 0 : -o.length);
                                return r.every((e, r) => a(e, t[r], n)) && o.every((t, e) => a(t, i[e], n)) && (0 === u.length || a(u[0], c, n))
                            }
                            return t.length === e.length && t.every((t, r) => a(t, e[r], n))
                        }
                        return Object.keys(t).every(i => {
                            let o = t[i];
                            return (i in e || c(o) && "optional" === o[r]().matcherType) && a(o, e[i], n)
                        })
                    }
                    return Object.is(e, t)
                },
                s = t => {
                    var e, n, i;
                    return u(t) ? c(t) ? null != (e = null == (n = (i = t[r]()).getSelectionKeys) ? void 0 : n.call(i)) ? e : [] : Array.isArray(t) ? l(t, s) : l(Object.values(t), s) : []
                },
                l = (t, e) => t.reduce((t, n) => t.concat(e(n)), []);

            function f(t) {
                return Object.assign(t, {
                    optional: () => h(t),
                    and: e => d(t, e),
                    or: e => y(t, e),
                    select: e => void 0 === e ? m(t) : m(e, t)
                })
            }

            function h(t) {
                return f({
                    [r]: () => ({
                        match: e => {
                            let n = {},
                                r = (t, e) => {
                                    n[t] = e
                                };
                            return void 0 === e ? (s(t).forEach(t => r(t, void 0)), {
                                matched: !0,
                                selections: n
                            }) : {
                                matched: a(t, e, r),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => s(t),
                        matcherType: "optional"
                    })
                })
            }
            let p = (t, e) => {
                    for (let n of t)
                        if (!e(n)) return !1;
                    return !0
                },
                g = (t, e) => {
                    for (let [n, r] of t.entries())
                        if (!e(r, n)) return !1;
                    return !0
                };

            function d() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return f({
                    [r]: () => ({
                        match: t => {
                            let n = {},
                                r = (t, e) => {
                                    n[t] = e
                                };
                            return {
                                matched: e.every(e => a(e, t, r)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => l(e, s),
                        matcherType: "and"
                    })
                })
            }

            function y() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return f({
                    [r]: () => ({
                        match: t => {
                            let n = {},
                                r = (t, e) => {
                                    n[t] = e
                                };
                            return l(e, s).forEach(t => r(t, void 0)), {
                                matched: e.some(e => a(e, t, r)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => l(e, s),
                        matcherType: "or"
                    })
                })
            }

            function v(t) {
                return {
                    [r]: () => ({
                        match: e => ({
                            matched: !!t(e)
                        })
                    })
                }
            }

            function m() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                let i = "string" == typeof e[0] ? e[0] : void 0,
                    u = 2 === e.length ? e[1] : "string" == typeof e[0] ? void 0 : e[0];
                return f({
                    [r]: () => ({
                        match: t => {
                            let e = {
                                [null != i ? i : o]: t
                            };
                            return {
                                matched: void 0 === u || a(u, t, (t, n) => {
                                    e[t] = n
                                }),
                                selections: e
                            }
                        },
                        getSelectionKeys: () => [null != i ? i : o].concat(void 0 === u ? [] : s(u))
                    })
                })
            }

            function b(t) {
                return "number" == typeof t
            }

            function j(t) {
                return "string" == typeof t
            }

            function A(t) {
                return "bigint" == typeof t
            }
            let x = f(v(function(t) {
                    return !0
                })),
                w = t => Object.assign(f(t), {
                    startsWith: e => w(d(t, v(t => j(t) && t.startsWith(e)))),
                    endsWith: e => w(d(t, v(t => j(t) && t.endsWith(e)))),
                    minLength: e => {
                        var n;
                        return w(d(t, (n = e, v(t => j(t) && t.length >= n))))
                    },
                    maxLength: e => {
                        var n;
                        return w(d(t, (n = e, v(t => j(t) && t.length <= n))))
                    },
                    includes: e => w(d(t, v(t => j(t) && t.includes(e)))),
                    regex: e => w(d(t, v(t => j(t) && !!t.match(e))))
                }),
                O = w(v(j)),
                S = (t, e) => v(n => b(n) && t <= n && e >= n),
                E = t => v(e => b(e) && e < t),
                C = t => v(e => b(e) && e > t),
                I = t => v(e => b(e) && e <= t),
                k = t => v(e => b(e) && e >= t),
                B = () => v(t => b(t) && Number.isInteger(t)),
                K = () => v(t => b(t) && Number.isFinite(t)),
                T = () => v(t => b(t) && t > 0),
                P = () => v(t => b(t) && t < 0),
                _ = t => Object.assign(f(t), {
                    between: (e, n) => _(d(t, S(e, n))),
                    lt: e => _(d(t, E(e))),
                    gt: e => _(d(t, C(e))),
                    lte: e => _(d(t, I(e))),
                    gte: e => _(d(t, k(e))),
                    int: () => _(d(t, B())),
                    finite: () => _(d(t, K())),
                    positive: () => _(d(t, T())),
                    negative: () => _(d(t, P()))
                }),
                R = _(v(b)),
                U = (t, e) => v(n => A(n) && t <= n && e >= n),
                N = t => v(e => A(e) && e < t),
                q = t => v(e => A(e) && e > t),
                M = t => v(e => A(e) && e <= t),
                D = t => v(e => A(e) && e >= t),
                F = () => v(t => A(t) && t > 0),
                W = () => v(t => A(t) && t < 0),
                L = t => Object.assign(f(t), {
                    between: (e, n) => L(d(t, U(e, n))),
                    lt: e => L(d(t, N(e))),
                    gt: e => L(d(t, q(e))),
                    lte: e => L(d(t, M(e))),
                    gte: e => L(d(t, D(e))),
                    positive: () => L(d(t, F())),
                    negative: () => L(d(t, W()))
                }),
                V = L(v(A)),
                z = f(v(function(t) {
                    return "boolean" == typeof t
                })),
                J = f(v(function(t) {
                    return "symbol" == typeof t
                })),
                H = f(v(function(t) {
                    return null == t
                }));
            var G = {
                __proto__: null,
                matcher: r,
                optional: h,
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
                            optional: () => t(h(e)),
                            select: n => t(void 0 === n ? m(e) : m(n, e))
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
                                if (0 === t.length) return s(n).forEach(t => {
                                    r[t] = []
                                }), {
                                    matched: !0,
                                    selections: r
                                };
                                let i = (t, e) => {
                                    r[t] = (r[t] || []).concat([e])
                                };
                                return {
                                    matched: t.every(t => a(n, t, i)),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : s(e[0])
                        })
                    })
                },
                set: function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return f({
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
                                    matched: p(t, t => a(i, t, r)),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : s(e[0])
                        })
                    })
                },
                map: function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return f({
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
                                    matched: g(t, (t, e) => {
                                        let n = a(o, e, i),
                                            r = a(u, t, i);
                                        return n && r
                                    }),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : [...s(e[0]), ...s(e[1])]
                        })
                    })
                },
                intersection: d,
                union: y,
                not: function(t) {
                    return f({
                        [r]: () => ({
                            match: e => ({
                                matched: !a(t, e, () => {})
                            }),
                            getSelectionKeys: () => [],
                            matcherType: "not"
                        })
                    })
                },
                when: v,
                select: m,
                any: x,
                _: x,
                string: O,
                between: S,
                lt: E,
                gt: C,
                lte: I,
                gte: k,
                int: B,
                finite: K,
                positive: T,
                negative: P,
                number: R,
                betweenBigInt: U,
                ltBigInt: N,
                gtBigInt: q,
                lteBigInt: M,
                gteBigInt: D,
                positiveBigInt: F,
                negativeBigInt: W,
                bigint: V,
                boolean: z,
                symbol: J,
                nullish: H,
                instanceOf: function(t) {
                    var e;
                    return f(v((e = t, t => t instanceof e)))
                },
                shape: function(t) {
                    return f(v(function() {
                        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        if (1 === e.length) {
                            let [t] = e;
                            return e => a(t, e, () => {})
                        }
                        if (2 === e.length) {
                            let [t, n] = e;
                            return a(t, n, () => {})
                        }
                        throw Error("isMatching wasn't given the right number of arguments: expected 1 or 2, received ".concat(e.length, "."))
                    }(t)))
                }
            };
            let Q = {
                matched: !1,
                value: void 0
            };

            function X(t) {
                return new Y(t, Q)
            }
            class Y {
                with() {
                    let t;
                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    if (this.state.matched) return this;
                    let i = n[n.length - 1],
                        u = [n[0]];
                    3 === n.length && "function" == typeof n[1] ? (u.push(n[0]), t = n[1]) : n.length > 2 && u.push(...n.slice(1, n.length - 1));
                    let c = !1,
                        s = {},
                        l = (t, e) => {
                            c = !0, s[t] = e
                        },
                        f = u.some(t => a(t, this.input, l)) && (!t || t(this.input)) ? {
                            matched: !0,
                            value: i(c ? o in s ? s[o] : s : this.input, this.input)
                        } : Q;
                    return new Y(this.input, f)
                }
                when(t, e) {
                    if (this.state.matched) return this;
                    let n = !!t(this.input);
                    return new Y(this.input, n ? {
                        matched: !0,
                        value: e(this.input, this.input)
                    } : Q)
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