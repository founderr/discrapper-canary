(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [65614], {
        824390: t => {
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
        70151: (t, e, n) => {
            var r = n(200278),
                i = n(173480);
            t.exports = function(t) {
                return i(r(t))
            }
        },
        525127: (t, e, n) => {
            var r = n(173480),
                i = n(252628);
            t.exports = function(t) {
                return r(i(t))
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
        173480: (t, e, n) => {
            var r = n(769877);
            t.exports = function(t, e) {
                var n = -1,
                    i = t.length,
                    o = i - 1;
                e = void 0 === e ? i : e;
                for (; ++n < e;) {
                    var u = r(n, o),
                        a = t[u];
                    t[u] = t[n];
                    t[n] = a
                }
                t.length = e;
                return t
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
        252628: (t, e, n) => {
            var r = n(747415),
                i = n(3674);
            t.exports = function(t) {
                return null == t ? [] : r(t, i(t))
            }
        },
        222789: (t, e, n) => {
            "use strict";
            n.d(e, {
                Rp: () => c,
                ge: () => o,
                RA: () => a
            });

            function r(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) ? t.forEach((function(t) {
                    return r(t, e)
                })) : "string" == typeof t.content ? e.push(t.content) : null != t.content && r(t.content, e);
                return e
            }

            function i(t, e) {
                if (Array.isArray(e))
                    for (var n = e.length, r = 0; r < n; r++) t.push(e[r]);
                else t.push(e)
            }

            function o(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (Array.isArray(t)) {
                    for (var n = t.length, r = [], u = 0; u < n; u++) i(r, o(t[u], e));
                    return r
                }
                null != t.content && (t.content = o(t.content, t));
                return null != e && t.type === e.type ? t.content : t
            }
            var u = {};

            function a(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    limit: 200
                };
                if (Array.isArray(t))
                    for (var n = t.length, r = 0; r < n; r++) {
                        var i = a(t[r], e);
                        if (i === u) {
                            t.length = r;
                            break
                        }
                        t[r] = i
                    } else if ("text" !== t.type) {
                        e.limit -= 1;
                        if (e.limit <= 0) return u;
                        Array.isArray(t.content) && (t.content = a(t.content, e))
                    }
                return t
            }

            function c(t) {
                return r(t).join("")
            }
        },
        894012: (t, e, n) => {
            "use strict";
            n.d(e, {
                Rp: () => i.Rp,
                w4: () => o,
                _p: () => u
            });
            var r, i = n(222789),
                o = (r = n(25788).Z).reactParserFor,
                u = r.astParserFor
        },
        25788: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => c
            });
            var r = n(120053),
                i = n.n(r),
                o = n(222789);

            function u(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function a(t, e, n, r, i) {
                n || (e += "\n\n");
                var a;
                a = t(e, function(t) {
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
                    inline: n
                }, r));
                a = (0, o.ge)(a);
                a = (0, o.RA)(a);
                null != i && (a = i(a, n));
                return a
            }
            const c = {
                reactParserFor: function(t) {
                    var e = i().parserFor(t),
                        n = i().reactFor(i().ruleOutput(t, "react"));
                    return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        return n(a(e, t, r, i, o), i)
                    }
                },
                astParserFor: function(t) {
                    var e = i().parserFor(t);
                    return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        return a(e, t, n, r, i)
                    }
                }
            }
        },
        283151: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => u
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
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (e && o.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            i = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
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

            function u() {
                var t = o((0, r.useState)({}), 2)[1];
                return (0, r.useCallback)((function() {
                    return t({})
                }), [])
            }
        },
        204841: (t, e, n) => {
            "use strict";
            n.d(e, {
                UN: () => r,
                Bd: () => i,
                xS: () => o
            });

            function r(t) {
                let e = t[3],
                    n = 128 & t[2],
                    r = 128 & t[4];
                return (r ? n ? 5 : 7 : 7 & e) / (r ? 7 & e : n ? 5 : 7)
            }

            function i(t, e, n) {
                let r = 4 * t + 1,
                    i = 6 + e * (5 + r),
                    o = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, t >> 8, 255 & t, 0, 0, e >> 8, 255 & e, 8, 6, 0, 0, 0, 0, 0, 0, 0, i >>> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 73, 68, 65, 84, 120, 1],
                    u = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
                    a = 1,
                    c = 0;
                for (let t = 0, i = 0, u = r - 1; t < e; t++, u += r - 1) {
                    o.push(t + 1 < e ? 0 : 1, 255 & r, r >> 8, 255 & ~r, r >> 8 ^ 255, 0);
                    for (c = (c + a) % 65521; i < u; i++) {
                        let t = 255 & n[i];
                        o.push(t);
                        a = (a + t) % 65521;
                        c = (c + a) % 65521
                    }
                }
                o.push(c >> 8, 255 & c, a >> 8, 255 & a, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130);
                for (let [t, e] of [
                        [12, 29],
                        [37, 41 + i]
                    ]) {
                    let n = -1;
                    for (let r = t; r < e; r++) {
                        n ^= o[r];
                        n = n >>> 4 ^ u[15 & n];
                        n = n >>> 4 ^ u[15 & n]
                    }
                    n = ~n;
                    o[e++] = n >>> 24;
                    o[e++] = n >> 16 & 255;
                    o[e++] = n >> 8 & 255;
                    o[e++] = 255 & n
                }
                return "data:image/png;base64," + btoa(String.fromCharCode(...o))
            }

            function o(t) {
                let e = function(t) {
                    let {
                        PI: e,
                        min: n,
                        max: i,
                        cos: o,
                        round: u
                    } = Math, a = t[0] | t[1] << 8 | t[2] << 16, c = t[3] | t[4] << 8, s = (63 & a) / 63, l = (a >> 6 & 63) / 31.5 - 1, h = (a >> 12 & 63) / 31.5 - 1, f = (a >> 18 & 31) / 31, g = a >> 23, p = (c >> 3 & 63) / 63, v = (c >> 9 & 63) / 63, y = c >> 15, d = i(3, y ? g ? 5 : 7 : 7 & c), m = i(3, y ? 7 & c : g ? 5 : 7), b = g ? (15 & t[5]) / 15 : 1, w = (t[5] >> 4) / 15, A = g ? 6 : 5, S = 0, O = (e, n, r) => {
                        let i = [];
                        for (let o = 0; o < n; o++)
                            for (let u = o ? 0 : 1; u * n < e * (n - o); u++) i.push(((t[A + (S >> 1)] >> ((1 & S++) << 2) & 15) / 7.5 - 1) * r);
                        return i
                    }, j = O(d, m, f), x = O(3, 3, 1.25 * p), P = O(3, 3, 1.25 * v), k = g && O(5, 5, w), B = r(t), E = u(B > 1 ? 32 : 32 * B), I = u(B > 1 ? 32 / B : 32), K = new Uint8Array(E * I * 4), C = [], F = [];
                    for (let t = 0, r = 0; t < I; t++)
                        for (let u = 0; u < E; u++, r += 4) {
                            let a = s,
                                c = l,
                                f = h,
                                p = b;
                            for (let t = 0, n = i(d, g ? 5 : 3); t < n; t++) C[t] = o(e / E * (u + .5) * t);
                            for (let n = 0, r = i(m, g ? 5 : 3); n < r; n++) F[n] = o(e / I * (t + .5) * n);
                            for (let t = 0, e = 0; t < m; t++)
                                for (let n = t ? 0 : 1, r = 2 * F[t]; n * m < d * (m - t); n++, e++) a += j[e] * C[n] * r;
                            for (let t = 0, e = 0; t < 3; t++)
                                for (let n = t ? 0 : 1, r = 2 * F[t]; n < 3 - t; n++, e++) {
                                    let t = C[n] * r;
                                    c += x[e] * t;
                                    f += P[e] * t
                                }
                            if (g)
                                for (let t = 0, e = 0; t < 5; t++)
                                    for (let n = t ? 0 : 1, r = 2 * F[t]; n < 5 - t; n++, e++) p += k[e] * C[n] * r;
                            let v = a - 2 / 3 * c,
                                y = (3 * a - v + f) / 2,
                                w = y - f;
                            K[r] = i(0, 255 * n(1, y));
                            K[r + 1] = i(0, 255 * n(1, w));
                            K[r + 2] = i(0, 255 * n(1, v));
                            K[r + 3] = i(0, 255 * n(1, p))
                        }
                    return {
                        w: E,
                        h: I,
                        rgba: K
                    }
                }(t);
                return i(e.w, e.h, e.rgba)
            }
        },
        498964: (t, e, n) => {
            "use strict";
            n.d(e, {
                P: () => G,
                EQ: () => X
            });
            const r = Symbol.for("@ts-pattern/matcher"),
                i = Symbol.for("@ts-pattern/isVariadic"),
                o = "@ts-pattern/anonymous-select-key",
                u = t => Boolean(t && "object" == typeof t),
                a = t => t && !!t[r],
                c = (t, e, n) => {
                    if (a(t)) {
                        const i = t[r](),
                            {
                                matched: o,
                                selections: u
                            } = i.match(e);
                        return o && u && Object.keys(u).forEach((t => n(t, u[t]))), o
                    }
                    if (u(t)) {
                        if (!u(e)) return !1;
                        if (Array.isArray(t)) {
                            if (!Array.isArray(e)) return !1;
                            let r = [],
                                o = [],
                                u = [];
                            for (const e of t.keys()) {
                                const n = t[e];
                                a(n) && n[i] ? u.push(n) : u.length ? o.push(n) : r.push(n)
                            }
                            if (u.length) {
                                if (u.length > 1) throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (e.length < r.length + o.length) return !1;
                                const t = e.slice(0, r.length),
                                    i = 0 === o.length ? [] : e.slice(-o.length),
                                    a = e.slice(r.length, 0 === o.length ? 1 / 0 : -o.length);
                                return r.every(((e, r) => c(e, t[r], n))) && o.every(((t, e) => c(t, i[e], n))) && (0 === u.length || c(u[0], a, n))
                            }
                            return t.length === e.length && t.every(((t, r) => c(t, e[r], n)))
                        }
                        return Object.keys(t).every((i => {
                            const o = t[i];
                            return (i in e || a(u = o) && "optional" === u[r]().matcherType) && c(o, e[i], n);
                            var u
                        }))
                    }
                    return Object.is(e, t)
                },
                s = t => {
                    var e, n, i;
                    return u(t) ? a(t) ? null != (e = null == (n = (i = t[r]()).getSelectionKeys) ? void 0 : n.call(i)) ? e : [] : Array.isArray(t) ? l(t, s) : l(Object.values(t), s) : []
                },
                l = (t, e) => t.reduce(((t, n) => t.concat(e(n))), []);

            function h(t) {
                return Object.assign(t, {
                    optional: () => g(t),
                    and: e => y(t, e),
                    or: e => d(t, e),
                    select: e => void 0 === e ? b(t) : b(e, t)
                })
            }

            function f(t) {
                return Object.assign((t => Object.assign(t, {
                    *[Symbol.iterator]() {
                        yield Object.assign(t, {
                            [i]: !0
                        })
                    }
                }))(t), {
                    optional: () => f(g(t)),
                    select: e => f(void 0 === e ? b(t) : b(e, t))
                })
            }

            function g(t) {
                return h({
                    [r]: () => ({
                        match: e => {
                            let n = {};
                            const r = (t, e) => {
                                n[t] = e
                            };
                            return void 0 === e ? (s(t).forEach((t => r(t, void 0))), {
                                matched: !0,
                                selections: n
                            }) : {
                                matched: c(t, e, r),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => s(t),
                        matcherType: "optional"
                    })
                })
            }
            const p = (t, e) => {
                    for (const n of t)
                        if (!e(n)) return !1;
                    return !0
                },
                v = (t, e) => {
                    for (const [n, r] of t.entries())
                        if (!e(r, n)) return !1;
                    return !0
                };

            function y(...t) {
                return h({
                    [r]: () => ({
                        match: e => {
                            let n = {};
                            const r = (t, e) => {
                                n[t] = e
                            };
                            return {
                                matched: t.every((t => c(t, e, r))),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => l(t, s),
                        matcherType: "and"
                    })
                })
            }

            function d(...t) {
                return h({
                    [r]: () => ({
                        match: e => {
                            let n = {};
                            const r = (t, e) => {
                                n[t] = e
                            };
                            return l(t, s).forEach((t => r(t, void 0))), {
                                matched: t.some((t => c(t, e, r))),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => l(t, s),
                        matcherType: "or"
                    })
                })
            }

            function m(t) {
                return {
                    [r]: () => ({
                        match: e => ({
                            matched: Boolean(t(e))
                        })
                    })
                }
            }

            function b(...t) {
                const e = "string" == typeof t[0] ? t[0] : void 0,
                    n = 2 === t.length ? t[1] : "string" == typeof t[0] ? void 0 : t[0];
                return h({
                    [r]: () => ({
                        match: t => {
                            let r = {
                                [null != e ? e : o]: t
                            };
                            return {
                                matched: void 0 === n || c(n, t, ((t, e) => {
                                    r[t] = e
                                })),
                                selections: r
                            }
                        },
                        getSelectionKeys: () => [null != e ? e : o].concat(void 0 === n ? [] : s(n))
                    })
                })
            }

            function w(t) {
                return "number" == typeof t
            }

            function A(t) {
                return "string" == typeof t
            }

            function S(t) {
                return "bigint" == typeof t
            }
            const O = h(m((function(t) {
                    return !0
                }))),
                j = O,
                x = t => Object.assign(h(t), {
                    startsWith: e => {
                        return x(y(t, (n = e, m((t => A(t) && t.startsWith(n))))));
                        var n
                    },
                    endsWith: e => {
                        return x(y(t, (n = e, m((t => A(t) && t.endsWith(n))))));
                        var n
                    },
                    minLength: e => x(y(t, (t => m((e => A(e) && e.length >= t)))(e))),
                    maxLength: e => x(y(t, (t => m((e => A(e) && e.length <= t)))(e))),
                    includes: e => {
                        return x(y(t, (n = e, m((t => A(t) && t.includes(n))))));
                        var n
                    },
                    regex: e => {
                        return x(y(t, (n = e, m((t => A(t) && Boolean(t.match(n)))))));
                        var n
                    }
                }),
                P = x(m(A)),
                k = (t, e) => m((n => w(n) && t <= n && e >= n)),
                B = t => m((e => w(e) && e < t)),
                E = t => m((e => w(e) && e > t)),
                I = t => m((e => w(e) && e <= t)),
                K = t => m((e => w(e) && e >= t)),
                C = () => m((t => w(t) && Number.isInteger(t))),
                F = () => m((t => w(t) && Number.isFinite(t))),
                _ = () => m((t => w(t) && t > 0)),
                T = () => m((t => w(t) && t < 0)),
                R = t => Object.assign(h(t), {
                    between: (e, n) => R(y(t, k(e, n))),
                    lt: e => R(y(t, B(e))),
                    gt: e => R(y(t, E(e))),
                    lte: e => R(y(t, I(e))),
                    gte: e => R(y(t, K(e))),
                    int: () => R(y(t, C())),
                    finite: () => R(y(t, F())),
                    positive: () => R(y(t, _())),
                    negative: () => R(y(t, T()))
                }),
                M = R(m(w)),
                N = (t, e) => m((n => S(n) && t <= n && e >= n)),
                U = t => m((e => S(e) && e < t)),
                W = t => m((e => S(e) && e > t)),
                $ = t => m((e => S(e) && e <= t)),
                Z = t => m((e => S(e) && e >= t)),
                z = () => m((t => S(t) && t > 0)),
                L = () => m((t => S(t) && t < 0)),
                D = t => Object.assign(h(t), {
                    between: (e, n) => D(y(t, N(e, n))),
                    lt: e => D(y(t, U(e))),
                    gt: e => D(y(t, W(e))),
                    lte: e => D(y(t, $(e))),
                    gte: e => D(y(t, Z(e))),
                    positive: () => D(y(t, z())),
                    negative: () => D(y(t, L()))
                }),
                J = D(m(S)),
                Q = h(m((function(t) {
                    return "boolean" == typeof t
                }))),
                V = h(m((function(t) {
                    return "symbol" == typeof t
                }))),
                q = h(m((function(t) {
                    return null == t
                })));
            var G = {
                __proto__: null,
                matcher: r,
                optional: g,
                array: function(...t) {
                    return f({
                        [r]: () => ({
                            match: e => {
                                if (!Array.isArray(e)) return {
                                    matched: !1
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                const n = t[0];
                                let r = {};
                                if (0 === e.length) return s(n).forEach((t => {
                                    r[t] = []
                                })), {
                                    matched: !0,
                                    selections: r
                                };
                                const i = (t, e) => {
                                    r[t] = (r[t] || []).concat([e])
                                };
                                return {
                                    matched: e.every((t => c(n, t, i))),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : s(t[0])
                        })
                    })
                },
                set: function(...t) {
                    return h({
                        [r]: () => ({
                            match: e => {
                                if (!(e instanceof Set)) return {
                                    matched: !1
                                };
                                let n = {};
                                if (0 === e.size) return {
                                    matched: !0,
                                    selections: n
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                const r = (t, e) => {
                                        n[t] = (n[t] || []).concat([e])
                                    },
                                    i = t[0];
                                return {
                                    matched: p(e, (t => c(i, t, r))),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : s(t[0])
                        })
                    })
                },
                map: function(...t) {
                    return h({
                        [r]: () => ({
                            match: e => {
                                if (!(e instanceof Map)) return {
                                    matched: !1
                                };
                                let n = {};
                                if (0 === e.size) return {
                                    matched: !0,
                                    selections: n
                                };
                                const r = (t, e) => {
                                    n[t] = (n[t] || []).concat([e])
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                var i;
                                if (1 === t.length) throw new Error(`\`P.map\` wasn't given enough arguments. Expected (key, value), received ${null==(i=t[0])?void 0:i.toString()}`);
                                const [o, u] = t;
                                return {
                                    matched: v(e, ((t, e) => {
                                        const n = c(o, e, r),
                                            i = c(u, t, r);
                                        return n && i
                                    })),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : [...s(t[0]), ...s(t[1])]
                        })
                    })
                },
                intersection: y,
                union: d,
                not: function(t) {
                    return h({
                        [r]: () => ({
                            match: e => ({
                                matched: !c(t, e, (() => {}))
                            }),
                            getSelectionKeys: () => [],
                            matcherType: "not"
                        })
                    })
                },
                when: m,
                select: b,
                any: O,
                _: j,
                string: P,
                between: k,
                lt: B,
                gt: E,
                lte: I,
                gte: K,
                int: C,
                finite: F,
                positive: _,
                negative: T,
                number: M,
                betweenBigInt: N,
                ltBigInt: U,
                gtBigInt: W,
                lteBigInt: $,
                gteBigInt: Z,
                positiveBigInt: z,
                negativeBigInt: L,
                bigint: J,
                boolean: Q,
                symbol: V,
                nullish: q,
                instanceOf: function(t) {
                    return h(m(function(t) {
                        return e => e instanceof t
                    }(t)))
                },
                shape: function(t) {
                    return h(m(function(...t) {
                        if (1 === t.length) {
                            const [e] = t;
                            return t => c(e, t, (() => {}))
                        }
                        if (2 === t.length) {
                            const [e, n] = t;
                            return c(e, n, (() => {}))
                        }
                        throw new Error(`isMatching wasn't given the right number of arguments: expected 1 or 2, received ${t.length}.`)
                    }(t)))
                }
            };
            const H = {
                matched: !1,
                value: void 0
            };

            function X(t) {
                return new Y(t, H)
            }
            class Y {
                constructor(t, e) {
                    this.input = void 0, this.state = void 0, this.input = t, this.state = e
                }
                with(...t) {
                    if (this.state.matched) return this;
                    const e = t[t.length - 1],
                        n = [t[0]];
                    let r;
                    3 === t.length && "function" == typeof t[1] ? (n.push(t[0]), r = t[1]) : t.length > 2 && n.push(...t.slice(1, t.length - 1));
                    let i = !1,
                        u = {};
                    const a = (t, e) => {
                            i = !0,
                                u[t] = e
                        },
                        s = !n.some((t => c(t, this.input, a))) || r && !Boolean(r(this.input)) ? H : {
                            matched: !0,
                            value: e(i ? o in u ? u[o] : u : this.input, this.input)
                        };
                    return new Y(this.input, s)
                }
                when(t, e) {
                    if (this.state.matched) return this;
                    const n = Boolean(t(this.input));
                    return new Y(this.input, n ? {
                        matched: !0,
                        value: e(this.input, this.input)
                    } : H)
                }
                otherwise(t) {
                    return this.state.matched ? this.state.value : t(this.input)
                }
                exhaustive() {
                    return this.run()
                }
                run() {
                    if (this.state.matched) return this.state.value;
                    let t;
                    try {
                        t = JSON.stringify(this.input)
                    } catch (e) {
                        t = this.input
                    }
                    throw new Error(`Pattern matching error: no pattern matches value ${t}`)
                }
                returnType() {
                    return this
                }
            }
        }
    }
]);