(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["9598"], {
        794252: function(e, t, n) {
            "use strict";
            var l = n("859514"),
                a = n("960049"),
                s = n("124852"),
                r = Array;
            l({
                target: "Array",
                proto: !0
            }, {
                with: function(e, t) {
                    return a(s(this), r, e, t)
                }
            })
        },
        533662: function(e, t, n) {
            "use strict";
            e.exports = n.p + "71c2b8b8dce7967a6cba.svg"
        },
        101017: function(e, t, n) {
            "use strict";
            e.exports = n.p + "76db37e93ca50f3fa98b.svg"
        },
        65757: function(e, t, n) {
            "use strict";
            e.exports = n.p + "829f8ef7dcf355fbe141.svg"
        },
        506838: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                P: function() {
                    return K
                },
                match: function() {
                    return q
                }
            }), n("222007"), n("424973"), n("70102"), n("808653");
            let l = Symbol.for("@ts-pattern/matcher"),
                a = Symbol.for("@ts-pattern/isVariadic"),
                s = "@ts-pattern/anonymous-select-key",
                r = e => !!(e && "object" == typeof e),
                i = e => e && !!e[l],
                u = (e, t, n) => {
                    if (i(e)) {
                        let a = e[l](),
                            {
                                matched: s,
                                selections: r
                            } = a.match(t);
                        return s && r && Object.keys(r).forEach(e => n(e, r[e])), s
                    }
                    if (r(e)) {
                        if (!r(t)) return !1;
                        if (Array.isArray(e)) {
                            if (!Array.isArray(t)) return !1;
                            let l = [],
                                s = [],
                                r = [];
                            for (let t of e.keys()) {
                                let n = e[t];
                                i(n) && n[a] ? r.push(n) : r.length ? s.push(n) : l.push(n)
                            }
                            if (r.length) {
                                if (r.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (t.length < l.length + s.length) return !1;
                                let e = t.slice(0, l.length),
                                    a = 0 === s.length ? [] : t.slice(-s.length),
                                    i = t.slice(l.length, 0 === s.length ? 1 / 0 : -s.length);
                                return l.every((t, l) => u(t, e[l], n)) && s.every((e, t) => u(e, a[t], n)) && (0 === r.length || u(r[0], i, n))
                            }
                            return e.length === t.length && e.every((e, l) => u(e, t[l], n))
                        }
                        return Object.keys(e).every(a => {
                            let s = e[a];
                            return (a in t || i(s) && "optional" === s[l]().matcherType) && u(s, t[a], n)
                        })
                    }
                    return Object.is(t, e)
                },
                o = e => {
                    var t, n, a;
                    return r(e) ? i(e) ? null != (t = null == (n = (a = e[l]()).getSelectionKeys) ? void 0 : n.call(a)) ? t : [] : Array.isArray(e) ? d(e, o) : d(Object.values(e), o) : []
                },
                d = (e, t) => e.reduce((e, n) => e.concat(t(n)), []);

            function c(e) {
                return Object.assign(e, {
                    optional: () => E(e),
                    and: t => _(e, t),
                    or: t => I(e, t),
                    select: t => void 0 === t ? m(e) : m(t, e)
                })
            }

            function E(e) {
                return c({
                    [l]: () => ({
                        match: t => {
                            let n = {},
                                l = (e, t) => {
                                    n[e] = t
                                };
                            return void 0 === t ? (o(e).forEach(e => l(e, void 0)), {
                                matched: !0,
                                selections: n
                            }) : {
                                matched: u(e, t, l),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => o(e),
                        matcherType: "optional"
                    })
                })
            }
            let f = (e, t) => {
                    for (let n of e)
                        if (!t(n)) return !1;
                    return !0
                },
                h = (e, t) => {
                    for (let [n, l] of e.entries())
                        if (!t(l, n)) return !1;
                    return !0
                };

            function _() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return c({
                    [l]: () => ({
                        match: e => {
                            let n = {},
                                l = (e, t) => {
                                    n[e] = t
                                };
                            return {
                                matched: t.every(t => u(t, e, l)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => d(t, o),
                        matcherType: "and"
                    })
                })
            }

            function I() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return c({
                    [l]: () => ({
                        match: e => {
                            let n = {},
                                l = (e, t) => {
                                    n[e] = t
                                };
                            return d(t, o).forEach(e => l(e, void 0)), {
                                matched: t.some(t => u(t, e, l)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => d(t, o),
                        matcherType: "or"
                    })
                })
            }

            function T(e) {
                return {
                    [l]: () => ({
                        match: t => ({
                            matched: !!e(t)
                        })
                    })
                }
            }

            function m() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let a = "string" == typeof t[0] ? t[0] : void 0,
                    r = 2 === t.length ? t[1] : "string" == typeof t[0] ? void 0 : t[0];
                return c({
                    [l]: () => ({
                        match: e => {
                            let t = {
                                [null != a ? a : s]: e
                            };
                            return {
                                matched: void 0 === r || u(r, e, (e, n) => {
                                    t[e] = n
                                }),
                                selections: t
                            }
                        },
                        getSelectionKeys: () => [null != a ? a : s].concat(void 0 === r ? [] : o(r))
                    })
                })
            }

            function v(e) {
                return "number" == typeof e
            }

            function N(e) {
                return "string" == typeof e
            }

            function g(e) {
                return "bigint" == typeof e
            }
            let S = c(T(function(e) {
                    return !0
                })),
                p = e => Object.assign(c(e), {
                    startsWith: t => p(_(e, T(e => N(e) && e.startsWith(t)))),
                    endsWith: t => p(_(e, T(e => N(e) && e.endsWith(t)))),
                    minLength: t => {
                        var n;
                        return p(_(e, (n = t, T(e => N(e) && e.length >= n))))
                    },
                    maxLength: t => {
                        var n;
                        return p(_(e, (n = t, T(e => N(e) && e.length <= n))))
                    },
                    includes: t => p(_(e, T(e => N(e) && e.includes(t)))),
                    regex: t => p(_(e, T(e => N(e) && !!e.match(t))))
                }),
                x = p(T(N)),
                C = (e, t) => T(n => v(n) && e <= n && t >= n),
                A = e => T(t => v(t) && t < e),
                O = e => T(t => v(t) && t > e),
                y = e => T(t => v(t) && t <= e),
                M = e => T(t => v(t) && t >= e),
                R = () => T(e => v(e) && Number.isInteger(e)),
                L = () => T(e => v(e) && Number.isFinite(e)),
                D = () => T(e => v(e) && e > 0),
                j = () => T(e => v(e) && e < 0),
                V = e => Object.assign(c(e), {
                    between: (t, n) => V(_(e, C(t, n))),
                    lt: t => V(_(e, A(t))),
                    gt: t => V(_(e, O(t))),
                    lte: t => V(_(e, y(t))),
                    gte: t => V(_(e, M(t))),
                    int: () => V(_(e, R())),
                    finite: () => V(_(e, L())),
                    positive: () => V(_(e, D())),
                    negative: () => V(_(e, j()))
                }),
                U = V(T(v)),
                G = (e, t) => T(n => g(n) && e <= n && t >= n),
                P = e => T(t => g(t) && t < e),
                b = e => T(t => g(t) && t > e),
                B = e => T(t => g(t) && t <= e),
                H = e => T(t => g(t) && t >= e),
                w = () => T(e => g(e) && e > 0),
                F = () => T(e => g(e) && e < 0),
                k = e => Object.assign(c(e), {
                    between: (t, n) => k(_(e, G(t, n))),
                    lt: t => k(_(e, P(t))),
                    gt: t => k(_(e, b(t))),
                    lte: t => k(_(e, B(t))),
                    gte: t => k(_(e, H(t))),
                    positive: () => k(_(e, w())),
                    negative: () => k(_(e, F()))
                }),
                Y = k(T(g)),
                z = c(T(function(e) {
                    return "boolean" == typeof e
                })),
                Z = c(T(function(e) {
                    return "symbol" == typeof e
                })),
                X = c(T(function(e) {
                    return null == e
                }));
            var K = {
                __proto__: null,
                matcher: l,
                optional: E,
                array: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function e(t) {
                        var n;
                        return Object.assign((n = t, Object.assign(n, {
                            *[Symbol.iterator]() {
                                yield Object.assign(n, {
                                    [a]: !0
                                })
                            }
                        })), {
                            optional: () => e(E(t)),
                            select: n => e(void 0 === n ? m(t) : m(n, t))
                        })
                    }({
                        [l]: () => ({
                            match: e => {
                                if (!Array.isArray(e)) return {
                                    matched: !1
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                let n = t[0],
                                    l = {};
                                if (0 === e.length) return o(n).forEach(e => {
                                    l[e] = []
                                }), {
                                    matched: !0,
                                    selections: l
                                };
                                let a = (e, t) => {
                                    l[e] = (l[e] || []).concat([t])
                                };
                                return {
                                    matched: e.every(e => u(n, e, a)),
                                    selections: l
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : o(t[0])
                        })
                    })
                },
                set: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return c({
                        [l]: () => ({
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
                                let l = (e, t) => {
                                        n[e] = (n[e] || []).concat([t])
                                    },
                                    a = t[0];
                                return {
                                    matched: f(e, e => u(a, e, l)),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : o(t[0])
                        })
                    })
                },
                map: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return c({
                        [l]: () => ({
                            match: e => {
                                var n;
                                if (!(e instanceof Map)) return {
                                    matched: !1
                                };
                                let l = {};
                                if (0 === e.size) return {
                                    matched: !0,
                                    selections: l
                                };
                                let a = (e, t) => {
                                    l[e] = (l[e] || []).concat([t])
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                if (1 === t.length) throw Error("`P.map` wasn't given enough arguments. Expected (key, value), received ".concat(null == (n = t[0]) ? void 0 : n.toString()));
                                let [s, r] = t;
                                return {
                                    matched: h(e, (e, t) => {
                                        let n = u(s, t, a),
                                            l = u(r, e, a);
                                        return n && l
                                    }),
                                    selections: l
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : [...o(t[0]), ...o(t[1])]
                        })
                    })
                },
                intersection: _,
                union: I,
                not: function(e) {
                    return c({
                        [l]: () => ({
                            match: t => ({
                                matched: !u(e, t, () => {})
                            }),
                            getSelectionKeys: () => [],
                            matcherType: "not"
                        })
                    })
                },
                when: T,
                select: m,
                any: S,
                _: S,
                string: x,
                between: C,
                lt: A,
                gt: O,
                lte: y,
                gte: M,
                int: R,
                finite: L,
                positive: D,
                negative: j,
                number: U,
                betweenBigInt: G,
                ltBigInt: P,
                gtBigInt: b,
                lteBigInt: B,
                gteBigInt: H,
                positiveBigInt: w,
                negativeBigInt: F,
                bigint: Y,
                boolean: z,
                symbol: Z,
                nullish: X,
                instanceOf: function(e) {
                    var t;
                    return c(T((t = e, e => e instanceof t)))
                },
                shape: function(e) {
                    return c(T(function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        if (1 === t.length) {
                            let [e] = t;
                            return t => u(e, t, () => {})
                        }
                        if (2 === t.length) {
                            let [e, n] = t;
                            return u(e, n, () => {})
                        }
                        throw Error("isMatching wasn't given the right number of arguments: expected 1 or 2, received ".concat(t.length, "."))
                    }(e)))
                }
            };
            let W = {
                matched: !1,
                value: void 0
            };

            function q(e) {
                return new J(e, W)
            }
            class J {
                with() {
                    let e;
                    for (var t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                    if (this.state.matched) return this;
                    let a = n[n.length - 1],
                        r = [n[0]];
                    3 === n.length && "function" == typeof n[1] ? (r.push(n[0]), e = n[1]) : n.length > 2 && r.push(...n.slice(1, n.length - 1));
                    let i = !1,
                        o = {},
                        d = (e, t) => {
                            i = !0, o[e] = t
                        },
                        c = r.some(e => u(e, this.input, d)) && (!e || e(this.input)) ? {
                            matched: !0,
                            value: a(i ? s in o ? o[s] : o : this.input, this.input)
                        } : W;
                    return new J(this.input, c)
                }
                when(e, t) {
                    if (this.state.matched) return this;
                    let n = !!e(this.input);
                    return new J(this.input, n ? {
                        matched: !0,
                        value: t(this.input, this.input)
                    } : W)
                }
                otherwise(e) {
                    return this.state.matched ? this.state.value : e(this.input)
                }
                exhaustive() {
                    return this.run()
                }
                run() {
                    let e;
                    if (this.state.matched) return this.state.value;
                    try {
                        e = JSON.stringify(this.input)
                    } catch (t) {
                        e = this.input
                    }
                    throw Error("Pattern matching error: no pattern matches value ".concat(e))
                }
                returnType() {
                    return this
                }
                constructor(e, t) {
                    this.input = void 0, this.state = void 0, this.input = e, this.state = t
                }
            }
        },
        145079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                r = n("446674"),
                i = n("77078"),
                u = n("102985"),
                o = n("79798"),
                d = n("754474"),
                c = n("158998"),
                E = n("782340"),
                f = n("892802");

            function h(e) {
                if (e.isSystemUser()) return d.BotTypes.SYSTEM_DM;
                if (e.isClyde()) return d.BotTypes.AI;
                if (e.bot) return d.BotTypes.BOT;
                return null
            }
            let _ = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: a,
                    botVerified: r,
                    discriminatorClass: u,
                    className: d,
                    usernameClass: c,
                    color: h,
                    botClass: _,
                    showStreamerModeTooltip: I
                } = e;
                return (0, l.jsxs)("div", {
                    className: s(f.info, d),
                    children: [(0, l.jsx)(i.Tooltip, {
                        text: E.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: I,
                        children: e => (0, l.jsx)("span", {
                            ...e,
                            className: s(f.username, c),
                            style: null != h ? {
                                color: h
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, l.jsx)("span", {
                        className: s(f.infoSpacing, u),
                        children: n
                    }) : void 0, null != a && (0, l.jsx)(o.default, {
                        type: a,
                        className: s(f.infoSpacing, _),
                        verified: r
                    })]
                })
            };
            var I = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: a,
                    forceUsername: s,
                    showAccountIdentifier: i,
                    overrideDiscriminator: o,
                    forcePomelo: E,
                    ...f
                } = e, I = (0, r.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), T = I || t || n.isNonUserBot(), m = n.toString(), v = c.default.getName(n), N = s ? m : null != a ? a : v, g = n.isPomelo() || E;
                if (g || N !== m) {
                    let e = N === m && g && s ? c.default.getUserTag(n, {
                            forcePomelo: E
                        }) : N,
                        t = i && e !== "@".concat(m) ? c.default.getUserTag(n) : void 0;
                    return (0, l.jsx)(_, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: h(n),
                        showStreamerModeTooltip: I && e !== v,
                        ...f
                    })
                }
                return (0, l.jsx)(d.default, {
                    name: N,
                    botType: h(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: T || N !== m ? null : null != o ? o : n.discriminator,
                    ...f
                })
            }
        },
        163725: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EyeSlashIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M1.293 21.293a1 1 0 1 0 1.414 1.414l20-20a1 1 0 0 0-1.414-1.414l-20 20ZM3.16 16.047a.487.487 0 0 0 .74.052l.72-.72a.513.513 0 0 0 .052-.657 15.708 15.708 0 0 1-1.435-2.524.48.48 0 0 1 0-.396c.408-.905 1.182-2.374 2.377-3.719C7.126 6.383 9.191 5 12 5c.822 0 1.58.118 2.278.328a.52.52 0 0 0 .52-.125l.806-.807c.247-.247.172-.662-.155-.784A9.79 9.79 0 0 0 12 3C4.887 3 1.727 10.115 1.113 11.693a.833.833 0 0 0 0 .614c.246.631.898 2.147 2.047 3.74Z",
                        className: i
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M8.18 10.81c-.133.426.359.651.674.336l2.292-2.292c.315-.315.09-.807-.335-.674a4.01 4.01 0 0 0-2.631 2.63ZM12.854 15.146c-.315.315-.09.806.335.674a4.01 4.01 0 0 0 2.631-2.63c.133-.426-.359-.651-.674-.336l-2.293 2.292Z",
                        className: i
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M9.722 18.672a.52.52 0 0 0-.52.125l-.806.808c-.247.246-.172.661.155.783A9.79 9.79 0 0 0 12 21c7.113 0 10.273-7.115 10.887-8.693a.833.833 0 0 0 0-.614 17.43 17.43 0 0 0-2.047-3.74.487.487 0 0 0-.74-.052l-.72.72a.513.513 0 0 0-.052.657 15.709 15.709 0 0 1 1.435 2.524.48.48 0 0 1 0 .396c-.408.905-1.182 2.374-2.377 3.719C16.874 17.617 14.809 19 12 19a7.88 7.88 0 0 1-2.278-.328Z",
                        className: i
                    })]
                })
            }
        },
        811513: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GroupIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M14.5 8a3 3 0 1 0-2.701-4.306c-.202.415.057.87.443 1.124A5.006 5.006 0 0 1 14.379 7.9c.013.058.062.1.121.1ZM18.437 17.271c.154.425.544.729.995.729H20.5a1.5 1.5 0 0 0 1.5-1.5 7.502 7.502 0 0 0-6.502-7.434c-.548-.073-.988.386-1.097.927-.06.301-.148.592-.26.871-.233.579-.054 1.291.472 1.628a9.529 9.529 0 0 1 3.824 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0 1.5 1.5 0 0 1-1.5 1.5.202.202 0 0 1-.196-.159 12.379 12.379 0 0 0-.884-2.543c-.108-.23-.42-.149-.42.105V21.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.097c0-.254-.312-.334-.42-.105-.318.673-.67 1.579-.884 2.543A.202.202 0 0 1 3.5 22 1.5 1.5 0 0 1 2 20.5Z",
                        className: i
                    })
                })
            }
        },
        851298: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ImagePlusIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8.667c0 .123-.335.174-.39.063C21.11 12.708 20.203 12 19 12a3 3 0 0 0-2.701 1.693c-.09.185-.356.23-.48.066l-.469-.626a2 2 0 0 0-3.2 0l-2.223 2.964-.506-.633a1.5 1.5 0 0 0-2.342 0l-1.854 2.318A.75.75 0 0 0 5.81 19h5.69c.276 0 .495.226.542.498.167.956.812 1.683 1.688 2.113.111.054.06.389-.063.389H5a3 3 0 0 1-3-3V5Zm8.204.977c.229-.91-.88-1.55-1.555-.898a.934.934 0 0 1-1.298 0c-.675-.653-1.784-.013-1.556.898a.934.934 0 0 1-.649 1.125c-.903.258-.903 1.538 0 1.796a.934.934 0 0 1 .65 1.125c-.229.91.88 1.55 1.555.898a.934.934 0 0 1 1.298 0c.675.653 1.784.013 1.556-.898a.934.934 0 0 1 .649-1.125c.903-.258.903-1.538 0-1.796a.934.934 0 0 1-.65-1.125Z",
                        clipRule: "evenodd",
                        className: i
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        className: i
                    })]
                })
            }
        },
        304983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MoreHorizontalIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        876726: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlayIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M9.248 3.348C7.872 2.455 6 3.384 6 4.96v14.08c0 1.576 1.872 2.505 3.248 1.612l10.853-7.04c1.199-.777 1.199-2.447 0-3.224L9.248 3.348Z",
                        className: i
                    })
                })
            }
        },
        501030: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getDirectoryEntryBroadcastInfo: function() {
                    return s
                }
            });
            var l = n("872717"),
                a = n("49111");
            async function s(e, t, n) {
                let s = await l.default.get({
                    url: a.Endpoints.DIRECTORY_ENTRIES_BROADCAST_INFO(e),
                    query: {
                        type: t,
                        entity_id: n
                    }
                });
                return s.body
            }
        },
        960757: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var l = n("884691"),
                a = n("446674"),
                s = n("152475"),
                r = n("42203"),
                i = n("501030"),
                u = n("730647"),
                o = n("49111");
            let d = {
                can_broadcast: !1
            };

            function c(e, t, n) {
                let [c, E] = l.useState(d), [f, h] = l.useState(!1), _ = l.useRef(!1), I = null == e ? void 0 : e.id, T = null == e ? void 0 : e.hasFeature(o.GuildFeatures.HAS_DIRECTORY_ENTRY);
                l.useEffect(() => {
                    if (!T) {
                        E(d);
                        return
                    }
                    if (_.current || null == I) return;
                    let e = async () => {
                        _.current = !0;
                        try {
                            let e = await (0, i.getDirectoryEntryBroadcastInfo)(I, u.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT, t);
                            E(e)
                        } catch (e) {
                            E(d)
                        }
                        _.current = !1
                    };
                    e()
                }, [I, T, t]), l.useEffect(() => {
                    var e;
                    if (!c.can_broadcast) {
                        h(!1);
                        return
                    }
                    h(null === (e = c.has_broadcast) || void 0 === e || e)
                }, [c]);
                let m = (0, a.useStateFromStores)([r.default], () => (0, s.canEveryoneRoleViewEvent)(n, [r.default]));
                return {
                    broadcastInfo: c,
                    broadcastToDirectoryChannels: m && f,
                    setBroadcastToDirectoryChannels: h,
                    canEveryoneRoleViewEvent: m
                }
            }
        },
        651072: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
                kind: "guild",
                id: "2023-09_recurring_events",
                label: "Allows guild to create recurring events",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Recurring Events are enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var s = a
        },
        334683: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var l = n("884691"),
                a = n("446674"),
                s = n("817963"),
                r = n("923959"),
                i = n("305961"),
                u = n("957255"),
                o = n("49111"),
                d = (e, t) => {
                    let n = (0, a.useStateFromStores)([i.default], () => i.default.getGuild(e), [e]),
                        {
                            canCreateGuildEvent: d
                        } = (0, s.useManageResourcePermissions)(n),
                        c = (0, a.useStateFromStores)([r.default], () => r.default.getChannels(e)[r.GUILD_VOCAL_CHANNELS_KEY], [e]),
                        E = l.useMemo(() => null != t ? c.filter(e => {
                            let {
                                channel: n
                            } = e;
                            return n.type === t
                        }) : c, [c, t]),
                        f = (0, a.useStateFromStores)([u.default], () => {
                            if (u.default.can(o.Permissions.ADMINISTRATOR, n) || d) return !0;
                            for (let {
                                    channel: e
                                }
                                of E) {
                                let {
                                    canCreateGuildEvent: t
                                } = (0, s.getManageResourcePermissions)(e);
                                if (t) return !0
                            }
                            return !1
                        }, [E, n, d]);
                    return f
                }
        },
        397680: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                },
                getEventException: function() {
                    return r
                }
            });
            var l = n("446674"),
                a = n("398604");

            function s(e, t) {
                let n = (0, l.useStateFromStoresArray)([a.default], () => {
                    var e, n;
                    return null !== (n = null === (e = a.default.getGuildScheduledEvent(t)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== n ? n : []
                });
                return i(n, e)
            }

            function r(e, t) {
                var n, l;
                let s = null !== (l = null === (n = a.default.getGuildScheduledEvent(t)) || void 0 === n ? void 0 : n.guild_scheduled_event_exceptions) && void 0 !== l ? l : [];
                return i(s, e)
            }

            function i(e, t) {
                let n = null == e ? void 0 : e.find(e => e.event_exception_id === t);
                return n
            }
        },
        466148: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                },
                getEventSchedule: function() {
                    return c
                }
            });
            var l = n("627445"),
                a = n.n(l),
                s = n("446674"),
                r = n("299039"),
                i = n("398604"),
                u = n("397680"),
                o = n("822516");

            function d(e, t, n) {
                var l;
                let r = null !== (l = (0, s.useStateFromStores)([i.default], () => i.default.getGuildScheduledEvent(e))) && void 0 !== l ? l : n;
                a(null != r, "Event must be defined"), t = null != t ? t : (0, o.getNextRecurrenceIdInEvent)(r);
                let d = (0, u.default)(t, e);
                return E(r, d, t)
            }

            function c(e, t) {
                let n = (0, u.getEventException)(t, e.id);
                return E(e, n, t)
            }

            function E(e, t, n) {
                let l = null != e.recurrence_rule ? (0, o.getRRule)(e.recurrence_rule) : null;
                if (null == l || null == n) return {
                    startTime: new Date(e.scheduled_start_time),
                    endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
                };
                let a = new Date((null == t ? void 0 : t.scheduled_start_time) == null ? r.default.extractTimestamp(n) : t.scheduled_start_time),
                    s = (null == t ? void 0 : t.scheduled_end_time) == null ? null : new Date(t.scheduled_end_time);
                return {
                    startTime: a,
                    endTime: s
                }
            }
        },
        799547: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getEventChannelsByType: function() {
                    return r
                },
                useGetEventChannelsByType: function() {
                    return i
                }
            }), n("222007"), n("424973");
            var l = n("446674"),
                a = n("817963");
            n("834052");
            var s = n("923959");

            function r(e, t) {
                let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.default];
                if (null == t) return [];
                let l = n.getChannels(e)[s.GUILD_VOCAL_CHANNELS_KEY],
                    r = [];
                for (let {
                        channel: e
                    }
                    of l) {
                    let {
                        canCreateGuildEvent: n,
                        canManageAllEvents: l
                    } = (0, a.getManageResourcePermissions)(e), s = n || l;
                    e.type === t && (e.isGuildVoice() && s ? r.push(e) : e.isGuildStageVoice() && s && r.push(e))
                }
                return r
            }

            function i(e, t) {
                return (0, l.useStateFromStoresArray)([s.default], () => r(e, t, [s.default]), [e, t])
            }
            n("957255"), n("270161")
        },
        776863: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useChannelsUserCanStartStageIn: function() {
                    return i
                }
            }), n("808653"), n("424973");
            var l = n("446674"),
                a = n("923510"),
                s = n("923959"),
                r = n("957255");

            function i(e) {
                var t;
                let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null;
                return (0, l.useStateFromStoresArray)([s.default, r.default], () => {
                    let e = s.default.getChannels(n)[s.GUILD_VOCAL_CHANNELS_KEY];
                    return e.reduce((e, t) => {
                        let n = t.channel;
                        return n.isGuildStageVoice() ? (function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.default;
                            return !!e.isGuildStageVoice() && t.can(a.MODERATE_STAGE_CHANNEL_PERMISSIONS, e)
                        }(t.channel, r.default) && e.push(n), e) : e
                    }, [])
                }, [n])
            }
        },
        617347: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildEventBodyImageLocation: function() {
                    return a
                },
                default: function() {
                    return U
                }
            });
            var l, a, s = n("37983"),
                r = n("884691"),
                i = n("414456"),
                u = n.n(i),
                o = n("446674"),
                d = n("77078"),
                c = n("812204"),
                E = n("685665"),
                f = n("656038"),
                h = n("419830"),
                _ = n("817963"),
                I = n("957255"),
                T = n("476263"),
                m = n("718550"),
                v = n("651072"),
                N = n("1339"),
                g = n("613767"),
                S = n("822516"),
                p = n("707916"),
                x = n("255050"),
                C = n("400271"),
                A = n("427554"),
                O = n("644189"),
                y = n("29913"),
                M = n("745049"),
                R = n("49111"),
                L = n("782340"),
                D = n("955614");

            function j(e) {
                let {
                    channel: t,
                    onClick: n
                } = e, {
                    canManageAllEvents: l
                } = (0, _.useManageResourcePermissions)(t), a = (0, o.useStateFromStores)([I.default], () => !t.isGuildVocal() || I.default.can(R.Permissions.CONNECT, t), [t]), i = r.useMemo(() => (0, f.default)(t), [t]), c = (0, h.getChannelIconComponent)(t);
                return (0, s.jsx)(d.Tooltip, {
                    text: L.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
                    shouldShow: !a && null != n,
                    children: e => (0, s.jsxs)(d.Clickable, {
                        ...e,
                        className: u(D.inline, D.channelContainer, {
                            [D.channelContainerEnabled]: a && null != n,
                            [D.channelContainerDisabled]: !a && null != n
                        }),
                        onClick: n,
                        children: [(0, s.jsx)(d.Tooltip, {
                            text: L.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                            shouldShow: l && i && a && null != n,
                            children: e => null != c ? (0, s.jsx)(c, {
                                ...e,
                                width: 20,
                                height: 20,
                                className: D.icon
                            }) : null
                        }), (0, s.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            className: D.channelLocation,
                            children: t.name
                        })]
                    })
                })
            }

            function V(e) {
                let {
                    guild: t,
                    channel: n,
                    onJoinClick: l,
                    handleLocationClick: a,
                    location: r,
                    isExternal: i,
                    isHub: o
                } = e;
                if (o) return null == t ? (0, s.jsx)("div", {}) : (0, s.jsxs)("div", {
                    className: D.inline,
                    children: [(0, s.jsx)(T.default, {
                        className: D.guildIcon,
                        size: T.default.Sizes.MINI,
                        active: !0,
                        guild: t
                    }), (0, s.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: null == t ? void 0 : t.name
                    })]
                });
                return null != n ? (0, s.jsx)(j, {
                    channel: n,
                    onClick: l
                }) : (0, s.jsxs)(d.Clickable, {
                    className: D.inline,
                    onClick: a,
                    children: [(0, s.jsx)(m.default, {
                        height: 20,
                        width: 20,
                        className: u(D.channelContainer, D.icon)
                    }), (0, s.jsx)(d.Text, {
                        className: i ? D.externalLocation : D.channelLocation,
                        variant: "text-sm/normal",
                        children: (0, N.guildEventDetailsParser)(r, !0)
                    })]
                })
            }

            function U(e) {
                var t;
                let {
                    className: n,
                    guild: l,
                    channel: a,
                    creator: r,
                    name: i,
                    entityType: o,
                    description: f,
                    imageLocation: h = 0,
                    imageSource: _,
                    isActive: I,
                    isUserLurking: T,
                    isJoined: m = !1,
                    isMember: N = !1,
                    isHub: R = !1,
                    speakers: L,
                    speakerCount: j,
                    rsvped: U,
                    canInvite: G,
                    location: P,
                    truncate: b,
                    onContextMenu: B,
                    onJoinClick: H,
                    onJoinGuildClick: w,
                    onGoToGuildClick: F,
                    onRsvpClick: k,
                    onStartClick: Y,
                    onInviteClick: z,
                    onEndClick: Z,
                    onClick: X,
                    isNew: K,
                    guildEventId: W,
                    eventPreview: q,
                    recurrenceRule: J,
                    recurrenceId: Q
                } = e, $ = (0, g.isChannelPublic)(a, o), ee = o === M.GuildScheduledEventEntityTypes.EXTERNAL, {
                    analyticsLocations: et
                } = (0, E.default)(c.default.GUILD_EVENT_CARD), {
                    enabled: en
                } = v.default.useExperiment({
                    guildId: null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : "",
                    location: et[0]
                }, {
                    autoTrackExposure: !1
                }), el = [];
                if (null != J) {
                    let e = (0, S.getRRule)(J);
                    el = (0, S.generateNextRecurrences)(4, e)
                }
                let ea = en && el.length > 0;
                return (0, s.jsxs)(d.ClickableContainer, {
                    "aria-label": i,
                    onClick: () => null == X ? void 0 : X(),
                    onContextMenu: B,
                    className: u(D.card, {
                        [D.joined]: m,
                        [D.lurking]: T
                    }, n),
                    children: [(0, s.jsxs)("div", {
                        className: u(D.padding, {
                            [D.isRecurring]: ea
                        }),
                        children: [0 === h && (0, s.jsx)(x.default, {
                            source: _
                        }), (0, s.jsx)(C.default, {
                            creator: r,
                            name: i,
                            description: f,
                            imageSource: 1 === h ? _ : null,
                            truncate: b,
                            guildId: null == l ? void 0 : l.id,
                            isHub: R,
                            isNew: K,
                            guildEventId: W,
                            eventPreview: q,
                            recurrenceId: Q
                        }), I && null != l && null != L && j > 0 && (0, s.jsx)(y.default, {
                            guild: l,
                            speakers: L,
                            speakerCount: j,
                            className: D.spacing
                        }), (0, s.jsx)("hr", {
                            className: D.divider
                        }), (0, s.jsxs)("div", {
                            className: u(D.inline, D.footer),
                            children: [(0, s.jsx)(V, {
                                guild: l,
                                channel: a,
                                onJoinClick: H,
                                handleLocationClick: ee ? e => e.stopPropagation() : void 0,
                                location: P,
                                isExternal: ee,
                                isHub: R
                            }), R ? (0, s.jsx)(O.default, {
                                isActive: I,
                                isUserLurking: T,
                                isMember: N,
                                rsvped: U,
                                onRsvpClick: k,
                                onJoinGuildClick: w,
                                onGoToGuildClick: F,
                                guildName: null == l ? void 0 : l.name,
                                canInvite: G,
                                isChannelPublic: $,
                                onInviteClick: z
                            }) : (0, s.jsx)(p.default, {
                                entityType: o,
                                isJoined: m,
                                isActive: I,
                                isUserLurking: T,
                                rsvped: U,
                                canInvite: G,
                                isChannelPublic: $,
                                onContextMenu: B,
                                onJoinClick: H,
                                onRsvpClick: k,
                                onStartClick: Y,
                                onInviteClick: z,
                                onEndClick: Z
                            })]
                        }), ea && (0, s.jsx)("hr", {
                            className: D.divider
                        })]
                    }), ea && (0, s.jsx)(A.default, {
                        guildId: null == l ? void 0 : l.id,
                        recurrenceRule: J,
                        guildEventId: W,
                        onClick: X
                    })]
                })
            }(l = a || (a = {}))[l.BANNER = 0] = "BANNER", l[l.THUMBNAIL = 1] = "THUMBNAIL"
        },
        844808: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("77078"),
                r = n("20606"),
                i = n("956089"),
                u = n("822516"),
                o = n("757767"),
                d = n("782340"),
                c = n("572721");

            function E(e) {
                let {
                    startDate: t,
                    recurrenceRule: n,
                    onRecurrenceChange: E
                } = e, f = a.useMemo(() => (0, u.recurrenceRuleToOption)(t, n), [n, t]), h = function(e) {
                    let t = e.toDate(),
                        n = t.toLocaleString(d.default.getLocale(), {
                            weekday: "long"
                        });
                    return [{
                        value: o.RecurrenceOptions.NONE,
                        label: d.default.Messages.CREATE_EVENT_RECUR_NONE
                    }, {
                        value: o.RecurrenceOptions.WEEKLY,
                        label: d.default.Messages.CREATE_EVENT_RECUR_WEEKLY.format({
                            weekday: n
                        })
                    }, {
                        value: o.RecurrenceOptions.YEARLY,
                        label: d.default.Messages.CREATE_EVENT_RECUR_YEARLY.format({
                            date: t.toLocaleString(d.default.getLocale(), {
                                month: "short",
                                day: "2-digit"
                            })
                        })
                    }, {
                        value: o.RecurrenceOptions.WEEKDAY_ONLY,
                        label: d.default.Messages.CREATE_EVENT_RECUR_WEEKDAYS
                    }]
                }(t), _ = e => e.toString(), I = (0, l.jsxs)("div", {
                    className: c.title,
                    children: [d.default.Messages.CREATE_EVENT_RECUR_LABEL, (0, l.jsx)(i.TextBadge, {
                        text: d.default.Messages.NEW,
                        color: r.default.REDESIGN_BUTTON_PRIMARY_BACKGROUND
                    })]
                });
                return (0, l.jsx)(s.FormItem, {
                    title: I,
                    required: !0,
                    children: (0, l.jsx)(s.Select, {
                        placeholder: "gaming",
                        options: h,
                        select: E,
                        serialize: _,
                        isSelected: e => null != f && _(e) === _(f)
                    })
                })
            }
        },
        953143: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("866227"),
                s = n.n(a),
                r = n("77078"),
                i = n("812204"),
                u = n("685665"),
                o = n("381546"),
                d = n("351825"),
                c = n("651072"),
                E = n("822516"),
                f = n("844808"),
                h = n("782340"),
                _ = n("234865");

            function I(e) {
                let {
                    className: t,
                    guildId: n,
                    onScheduleChange: a,
                    onRecurrenceChange: I,
                    onTimeChange: T,
                    timeSelected: m = !0,
                    schedule: v,
                    recurrenceRule: N,
                    showEndDate: g = !1,
                    requireEndDate: S = !1,
                    disableStartDateTime: p = !1
                } = e, {
                    analyticsLocations: x
                } = (0, u.default)(i.default.EVENT_SETTINGS), {
                    enabled: C
                } = c.default.useExperiment({
                    guildId: null != n ? n : "",
                    location: x[0]
                }, {
                    autoTrackExposure: !1
                });
                if (null == v) return null;
                let A = null,
                    O = v.startDate,
                    y = s(),
                    M = s().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"),
                    R = s().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days"),
                    L = e => {
                        a({
                            ...v,
                            endDate: e
                        })
                    };
                return null != O && c.default.trackExposure({
                    guildId: null != n ? n : "",
                    location: x[0]
                }), g && (A = null != v.endDate || S ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        className: _.doubleInput,
                        children: [(0, l.jsx)(r.FormItem, {
                            title: h.default.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: S,
                            children: (0, l.jsx)(r.DateInput, {
                                value: v.endDate,
                                onSelect: L,
                                minDate: v.startDate,
                                maxDate: R
                            })
                        }), (0, l.jsx)(r.FormItem, {
                            title: h.default.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: S,
                            children: (0, l.jsx)(r.TimeInput, {
                                value: v.endDate,
                                onChange: L
                            })
                        })]
                    }), S ? null : (0, l.jsx)(r.Button, {
                        onClick: () => {
                            L(void 0)
                        },
                        look: r.Button.Looks.BLANK,
                        size: r.Button.Sizes.MIN,
                        children: (0, l.jsxs)("div", {
                            className: _.link,
                            children: [(0, l.jsx)(o.default, {
                                width: 17,
                                height: 17,
                                className: _.removeIcon
                            }), (0, l.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children: h.default.Messages.CREATE_EVENT_REMOVE_END_TIME_LABEL
                            })]
                        })
                    })]
                }) : (0, l.jsx)(r.Button, {
                    look: r.Button.Looks.BLANK,
                    size: r.Button.Sizes.MIN,
                    onClick: () => {
                        L(s(v.startDate).add(1, "hour"))
                    },
                    children: (0, l.jsxs)("div", {
                        className: _.link,
                        children: [(0, l.jsx)(d.default, {
                            width: 20,
                            height: 20,
                            className: _.addIcon
                        }), (0, l.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            children: h.default.Messages.CREATE_EVENT_ADD_END_TIME_LABEL
                        })]
                    })
                })), (0, l.jsxs)("div", {
                    className: t,
                    children: [(0, l.jsxs)("div", {
                        className: _.doubleInput,
                        children: [(0, l.jsx)(r.FormItem, {
                            title: h.default.Messages.CREATE_EVENT_START_DATE_LABEL,
                            required: !0,
                            children: (0, l.jsx)(r.DateInput, {
                                value: v.startDate,
                                onSelect: e => {
                                    a({
                                        ...v,
                                        startDate: e
                                    })
                                },
                                minDate: y,
                                maxDate: M,
                                disabled: p
                            })
                        }), (0, l.jsx)(r.FormItem, {
                            title: h.default.Messages.CREATE_EVENT_START_TIME_LABEL,
                            required: !0,
                            children: (0, l.jsx)(r.TimeInput, {
                                value: v.startDate,
                                onChange: e => {
                                    e.isValid() && (null == T || T(!0), a({
                                        ...v,
                                        startDate: e
                                    }))
                                },
                                hideValue: !m,
                                disabled: p
                            })
                        })]
                    }), A, C && null != O && null != I && (0, l.jsx)(f.default, {
                        onRecurrenceChange: I,
                        startDate: O,
                        recurrenceRule: N
                    })]
                })
            }
        },
        194250: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                r = n.n(s),
                i = n("866227"),
                u = n.n(i),
                o = n("77078"),
                d = n("656913"),
                c = n("694187"),
                E = n("151642"),
                f = n("29846"),
                h = n("777367"),
                _ = n("398604"),
                I = n("189443"),
                T = n("822516"),
                m = n("93550"),
                v = n("953143"),
                N = n("745049"),
                g = n("75015"),
                S = n("837979"),
                p = n("782340"),
                x = n("505376");

            function C(e) {
                let {
                    editBroadcastInfoData: t
                } = e, {
                    broadcastInfo: n,
                    broadcastToDirectoryChannels: a,
                    setBroadcastToDirectoryChannels: s,
                    canEveryoneRoleViewEvent: r
                } = t;
                return n.can_broadcast ? (0, l.jsxs)(o.FormItem, {
                    title: p.default.Messages.CREATE_EVENT_PRIVACY_LABEL,
                    className: x.formItem,
                    children: [(0, l.jsx)(o.Tooltip, {
                        text: (0, l.jsx)(o.Text, {
                            className: x.broadcastInfoTooltip,
                            variant: "text-sm/normal",
                            children: p.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING
                        }),
                        "aria-label": p.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING,
                        shouldShow: !r,
                        children: e => (0, l.jsx)("div", {
                            ...e,
                            children: (0, l.jsx)(o.Checkbox, {
                                type: o.Checkbox.Types.INVERTED,
                                disabled: !r,
                                value: a,
                                onChange: (e, t) => s(t),
                                children: (0, l.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    color: "interactive-active",
                                    children: p.default.Messages.HUB_EVENTS_SHARE_TITLE
                                })
                            })
                        })
                    }), (0, l.jsx)(o.Text, {
                        className: x.broadcastInfoDescription,
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: p.default.Messages.HUB_EVENTS_SHARE_DESCRIPTION
                    })]
                }) : null
            }

            function A(e) {
                let {
                    guildEvent: t,
                    guildEventId: s,
                    guildId: i,
                    editBroadcastInfoData: A,
                    error: O,
                    validationErrorMessage: y,
                    onChange: M,
                    canSetFocus: R = !1
                } = e, {
                    entityType: L,
                    channelId: D,
                    description: j,
                    name: V,
                    image: U,
                    scheduledEndTime: G,
                    scheduledStartTime: P,
                    autoStart: b,
                    recurrenceRule: B
                } = t, {
                    canUseEventsAutoStartToggle: H
                } = h.default.useExperiment({
                    location: "Guild Events Modal",
                    guildId: null != i ? i : ""
                }), w = (0, E.useStageBlockedUsersCount)(D), F = null != t && (0, _.isGuildScheduledEventActive)(t), k = a.useMemo(() => {
                    let e = (0, T.getScheduleFromEventData)(t);
                    return null != e ? e : {
                        startDate: u(P)
                    }
                }, [t, P]), Y = a.useRef(null);
                a.useEffect(() => {
                    if (R) {
                        var e;
                        null === (e = Y.current) || void 0 === e || e.focus()
                    }
                }, [R]);
                let z = e => {
                        M({
                            image: e
                        })
                    },
                    Z = (e, t) => {
                        if (null == e || void 0 === t) {
                            z(null);
                            return
                        }(0, o.openModalLazy)(async () => {
                            let {
                                default: a
                            } = await n.el("57015").then(n.bind(n, "57015"));
                            return n => (0, l.jsx)(a, {
                                imgURI: e,
                                file: t,
                                onCrop: z,
                                uploadType: g.UploadTypes.SCHEDULED_EVENT_IMAGE,
                                allowSkip: !0,
                                ...n
                            })
                        })
                    };
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: x.blockedUsersContainer,
                        children: null != D && !F && w > 0 && (0, l.jsx)(f.BlockedUsersNotice, {
                            channelId: D
                        })
                    }), (0, l.jsxs)("div", {
                        className: x.form,
                        children: [(0, l.jsxs)(o.FormItem, {
                            title: p.default.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL,
                            className: x.topicFormItem,
                            required: !0,
                            children: [(0, l.jsx)(o.TextInput, {
                                className: x.textInput,
                                onChange: e => {
                                    M({
                                        name: e
                                    })
                                },
                                placeholder: p.default.Messages.GUILD_EVENT_CREATE_TOPIC_PLACEHOLDER,
                                maxLength: S.MAX_STAGE_TOPIC_LENGTH,
                                value: V,
                                autoComplete: "off",
                                inputRef: Y
                            }), null != O ? (0, l.jsx)(o.Text, {
                                color: "text-danger",
                                variant: "text-xs/normal",
                                className: x.warning,
                                children: O.getAnyErrorMessage()
                            }) : null]
                        }), (0, l.jsx)(v.default, {
                            className: x.formItem,
                            onScheduleChange: e => {
                                let {
                                    startDate: t,
                                    endDate: n
                                } = e, l = {
                                    scheduledStartTime: null == t ? void 0 : t.toISOString(),
                                    scheduledEndTime: null == n ? void 0 : n.toISOString()
                                };
                                null != t && null != G && (null == n ? void 0 : n.isBefore(t)) && (l.scheduledEndTime = t.add(1, "hour").toISOString()), null != t && null != B && (l.recurrenceRule = {
                                    ...B,
                                    start: t.milliseconds(0).toISOString()
                                }), M(l)
                            },
                            onRecurrenceChange: e => {
                                let t = k.startDate;
                                if (null == t) return;
                                let n = (0, T.recurrenceOptionToRecurrenceRule)(e, t);
                                M({
                                    recurrenceRule: n
                                })
                            },
                            schedule: k,
                            recurrenceRule: B,
                            showEndDate: L === N.GuildScheduledEventEntityTypes.EXTERNAL,
                            requireEndDate: L === N.GuildScheduledEventEntityTypes.EXTERNAL,
                            disableStartDateTime: F,
                            guildId: i
                        }), null != y ? (0, l.jsx)(o.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: x.warning,
                            children: y
                        }) : null, H ? (0, l.jsx)(o.FormItem, {
                            className: r(x.formItem, x.autoStartToggle),
                            children: (0, l.jsx)(o.Checkbox, {
                                type: o.Checkbox.Types.INVERTED,
                                value: b,
                                onChange: (e, t) => {
                                    M({
                                        autoStart: t
                                    })
                                },
                                children: (0, l.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: p.default.Messages.GUILD_EVENT_AUTO_START_TOGGLE
                                })
                            })
                        }) : null, (0, l.jsx)(o.FormItem, {
                            title: p.default.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
                            className: x.formItem,
                            children: (0, l.jsx)(o.TextArea, {
                                className: x.descriptionInput,
                                placeholder: p.default.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
                                value: j,
                                onChange: e => {
                                    M({
                                        description: e
                                    })
                                },
                                maxLength: N.GUILD_EVENT_MAX_DESCRIPTION_LENGTH,
                                autosize: !0
                            })
                        }), (0, l.jsxs)(o.FormItem, {
                            title: p.default.Messages.GUILD_EVENT_IMAGE,
                            className: x.formItem,
                            children: [(0, l.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: x.addImageHint,
                                children: p.default.Messages.GUILD_EVENT_ADD_IMAGE_SUGGESTION
                            }), null != U ? (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(d.default, {
                                    className: x.imagePreview,
                                    iconWrapperClassName: x.imagePreviewInner,
                                    image: U,
                                    makeURL: e => {
                                        if (null == e) return null;
                                        if (null != i) {
                                            var n;
                                            return null !== (n = (0, m.default)((0, I.convertToFakeGuildEvent)(t, i, s))) && void 0 !== n ? n : null
                                        }
                                    },
                                    onChange: Z,
                                    hint: p.default.Messages.GUILD_EVENT_CHANGE_IMAGE,
                                    showRemoveButton: !1,
                                    enabled: !0
                                }), (0, l.jsx)(o.Button, {
                                    size: o.Button.Sizes.SMALL,
                                    onClick: () => z(null),
                                    children: p.default.Messages.GUILD_EVENT_REMOVE_IMAGE
                                })]
                            }) : (0, l.jsxs)(o.Button, {
                                size: o.Button.Sizes.SMALL,
                                children: [p.default.Messages.GUILD_EVENT_ADD_IMAGE, (0, l.jsx)(c.default, {
                                    onChange: Z
                                })]
                            })]
                        }), (0, l.jsx)(C, {
                            editBroadcastInfoData: A
                        })]
                    })]
                })
            }
        },
        590942: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return B
                }
            }), n("222007");
            var l, a, s = n("37983"),
                r = n("884691"),
                i = n("446674"),
                u = n("77078"),
                o = n("970728"),
                d = n("206230"),
                c = n("526887"),
                E = n("960757"),
                f = n("923959"),
                h = n("305961"),
                _ = n("683911"),
                I = n("476765"),
                T = n("354023"),
                m = n("686904"),
                v = n("398604"),
                N = n("322224"),
                g = n("152475"),
                S = n("799547"),
                p = n("189443"),
                x = n("841363"),
                C = n("558286"),
                A = n("560309"),
                O = n("151859"),
                y = n("299342"),
                M = n("499950"),
                R = n("27754"),
                L = n("745049"),
                D = n("49111"),
                j = n("782340"),
                V = n("738021");
            let {
                INVITE_OPTIONS_7_DAYS: U,
                INVITE_OPTIONS_UNLIMITED: G
            } = T.default;

            function P(e) {
                let {
                    modal: t
                } = e, {
                    createMultipleConfetti: n
                } = r.useContext(c.ConfettiCannonContext);
                return r.useEffect(() => {
                    let e = null == t ? void 0 : t.getScrollerNode();
                    if (null == e) return;
                    let l = e.getBoundingClientRect();
                    n({
                        position: {
                            type: "static-random",
                            minValue: {
                                x: l.left - 100,
                                y: l.top - 100
                            },
                            maxValue: {
                                x: l.left + 100,
                                y: l.top + 100
                            }
                        },
                        velocity: {
                            type: "static-random",
                            minValue: {
                                x: -20,
                                y: -20
                            },
                            maxValue: {
                                x: -60,
                                y: -60
                            }
                        }
                    }, 80), n({
                        position: {
                            type: "static-random",
                            minValue: {
                                x: l.right - 100,
                                y: l.top - 100
                            },
                            maxValue: {
                                x: l.right + 100,
                                y: l.top + 100
                            }
                        },
                        velocity: {
                            type: "static-random",
                            minValue: {
                                x: 20,
                                y: -20
                            },
                            maxValue: {
                                x: 60,
                                y: -60
                            }
                        }
                    }, 80)
                }, [n, t]), null
            }

            function b(e) {
                let {
                    guildId: t,
                    guildEvent: n,
                    guildEventId: a,
                    editBroadcastInfoData: o,
                    isEdit: c,
                    formErrors: E,
                    transitionState: f,
                    loading: h,
                    error: T,
                    onChange: m,
                    onSave: N,
                    onClose: g,
                    createdEvent: S
                } = e, p = (0, I.useUID)(), x = r.useMemo(() => [{
                    slideId: 0,
                    label: j.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_1,
                    valid: null == E.entity,
                    userErrorMessage: E.entity
                }, {
                    slideId: 1,
                    label: j.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_2,
                    valid: null == E.schedule && null == E.topic,
                    userErrorMessage: E.schedule
                }, {
                    slideId: 2,
                    label: j.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_3,
                    valid: !0
                }], [E]), R = Object.keys(l).length, L = (0, v.isGuildScheduledEventActive)(n), D = e => Math.max(0, Math.min(e, R - 1)), [U, G] = r.useState(L ? 1 : 0), [b, B] = r.useState(!1), H = r.useMemo(() => x.slice(0, U + 1).map(e => e.valid).every(Boolean), [x, U]), w = U >= x.length ? 3 : x[D(U)].slideId, F = 3 === w, k = (0, C.useGuildEventModalStore)(e => e.onUpdateCanCloseModal);
                k(F);
                let Y = (0, i.useStateFromStores)([d.default], () => d.default.useReducedMotion),
                    z = r.useRef(null),
                    Z = e => {
                        B(!1), G(D(e))
                    };
                r.useEffect(() => {
                    null != S && Z(3)
                }, [null == S ? void 0 : S.id, Z]);
                let X = () => {
                        if (!H) return;
                        let e = 2 === w;
                        e ? N() : F ? g() : Z(U + 1)
                    },
                    K = () => {
                        Z(U - 1)
                    },
                    W = j.default.Messages.NEXT;
                return 2 === w && (W = c ? j.default.Messages.SAVE_EVENT : j.default.Messages.SCHEDULE_EVENT), (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)(u.ModalRoot, {
                        transitionState: f,
                        "aria-labelledby": p,
                        size: u.ModalSize.DYNAMIC,
                        children: [!Y && F ? (0, s.jsx)(P, {
                            modal: z.current
                        }) : null, (0, s.jsxs)(u.ModalContent, {
                            className: V.content,
                            scrollerRef: z,
                            children: [!F && (0, s.jsx)(_.default, {
                                steps: x.map(e => e.label),
                                stepIndex: U,
                                onClick: e => {
                                    e < U ? K() : e > U && X()
                                }
                            }), (0, s.jsxs)(u.Slides, {
                                activeSlide: w,
                                width: 440,
                                onSlideReady: e => {
                                    B(e === w)
                                },
                                children: [(0, s.jsx)(u.Slide, {
                                    id: 0,
                                    children: (0, s.jsx)(A.default, {
                                        guildId: t,
                                        guildEvent: n,
                                        validationErrorMessage: E.entity,
                                        isSlideReady: b,
                                        onChange: m
                                    })
                                }), (0, s.jsx)(u.Slide, {
                                    id: 1,
                                    children: (0, s.jsx)(y.default, {
                                        guildEvent: n,
                                        guildEventId: a,
                                        guildId: t,
                                        editBroadcastInfoData: o,
                                        onChange: m,
                                        error: T,
                                        validationErrorMessage: E.schedule,
                                        isSlideReady: b
                                    })
                                }), (0, s.jsx)(u.Slide, {
                                    id: 2,
                                    children: (0, s.jsx)(O.default, {
                                        guildId: t,
                                        guildEvent: n,
                                        guildEventId: a,
                                        error: T
                                    })
                                }), (0, s.jsx)(u.Slide, {
                                    id: 3,
                                    children: (0, s.jsx)(M.default, {
                                        onClose: g,
                                        event: S
                                    })
                                })]
                            })]
                        }), !F && (0, s.jsxs)(u.ModalFooter, {
                            className: V.footer,
                            children: [(0, s.jsxs)("div", {
                                className: V.inline,
                                children: [(0, s.jsx)(u.Button, {
                                    color: u.Button.Colors.PRIMARY,
                                    onClick: g,
                                    children: j.default.Messages.CANCEL
                                }), (0, s.jsx)(u.Button, {
                                    onClick: X,
                                    disabled: !H,
                                    className: V.button,
                                    submitting: h,
                                    children: W
                                })]
                            }), 0 !== w && (0, s.jsx)(u.Button, {
                                look: u.Button.Looks.LINK,
                                size: u.Button.Sizes.MIN,
                                onClick: K,
                                color: u.Button.Colors.LINK,
                                children: j.default.Messages.BACK
                            })]
                        })]
                    })
                })
            }

            function B(e) {
                let {
                    guildId: t,
                    guildScheduledEventId: l,
                    transitionState: a,
                    onClose: d
                } = e, c = (0, i.useStateFromStores)([h.default], () => h.default.getGuild(t)), _ = (0, i.useStateFromStores)([v.default], () => v.default.getGuildScheduledEvent(l), [l]), I = (0, i.useStateFromStores)([f.default], () => f.default.getDefaultChannel(t), [t]), T = (0, p.getInitialGuildEventData)(c, _, I), [C, A] = r.useState(T), [O] = r.useState((0, p.isEditingEvent)(_)), [y, M] = r.useState(null), V = e => {
                    var t;
                    let n = (0, g.isGuildEventInvitable)(e),
                        l = null !== (t = e.channel_id) && void 0 !== t ? t : null == I ? void 0 : I.id;
                    null != l && o.default.createInvite(l, {
                        max_age: U.value,
                        max_uses: G.value
                    }, D.InstantInviteSources.GUILD_EVENTS), n ? M(e) : d()
                }, P = (0, E.default)(c, null == _ ? void 0 : _.id, C), [B, {
                    loading: H,
                    error: w
                }] = (0, m.default)(async () => {
                    if (null != y) return;
                    let e = {
                        broadcastToDirectoryChannels: P.broadcastToDirectoryChannels
                    };
                    if (O && null != l) return await N.default.saveEvent(l, C, t, e), d();
                    let n = await N.default.createGuildEvent(C, t, e);
                    return V(n.body), n
                }), F = r.useMemo(() => (0, R.default)(C, O), [C, O]);
                return (0, s.jsx)(b, {
                    guildId: t,
                    guildEvent: C,
                    guildEventId: l,
                    editBroadcastInfoData: P,
                    isEdit: O,
                    formErrors: F,
                    transitionState: a,
                    loading: H,
                    error: w,
                    onChange: e => {
                        if (null != e.entityType) {
                            var n;
                            let l = (0, x.getChannelTypeFromEntity)(e.entityType),
                                [a] = (0, S.getEventChannelsByType)(t, l);
                            e.channelId = null !== (n = null == a ? void 0 : a.id) && void 0 !== n ? n : null, e.entityType !== L.GuildScheduledEventEntityTypes.EXTERNAL && C.entityType === L.GuildScheduledEventEntityTypes.EXTERNAL && (e.entityMetadata = null)
                        }
                        A(t => ({
                            ...t,
                            ...e
                        }))
                    },
                    onSave: () => {
                        null != C.recurrenceRule && O ? (0, u.openModalLazy)(async () => {
                            let {
                                ConfirmModal: e
                            } = await n.el("77078").then(n.bind(n, "77078"));
                            return t => (0, s.jsxs)(e, {
                                ...t,
                                header: j.default.Messages.EDIT_ALL_EVENTS,
                                confirmText: j.default.Messages.SAVE_EVENT,
                                cancelText: j.default.Messages.NEVERMIND,
                                onConfirm: B,
                                children: [(0, s.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    children: j.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_CONFIRM
                                }), (0, s.jsx)("br", {}), (0, s.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    children: j.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_EDIT_ALL_HINT.format()
                                })]
                            })
                        }) : B()
                    },
                    onClose: d,
                    createdEvent: y
                })
            }(a = l || (l = {}))[a.ENTITY = 0] = "ENTITY", a[a.SETTINGS = 1] = "SETTINGS", a[a.PREVIEW = 2] = "PREVIEW", a[a.SUCCESS = 3] = "SUCCESS"
        },
        560309: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return H
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("866227"),
                r = n.n(s),
                i = n("446674"),
                u = n("77078"),
                o = n("679653"),
                d = n("42203"),
                c = n("305961"),
                E = n("957255"),
                f = n("27618"),
                h = n("697218"),
                _ = n("718550"),
                I = n("368121"),
                T = n("944633"),
                m = n("228427"),
                v = n("697468"),
                N = n("398604"),
                g = n("334683"),
                S = n("799547"),
                p = n("776863"),
                x = n("613767"),
                C = n("841363"),
                A = n("306939"),
                O = n("745049"),
                y = n("49111"),
                M = n("782340"),
                R = n("869785");
            let L = e => e === O.GuildScheduledEventEntityTypes.EXTERNAL,
                D = (e, t) => {
                    let n = d.default.getChannel(e);
                    if (null == n) return null;
                    let a = n.type === y.ChannelTypes.GUILD_STAGE_VOICE,
                        s = (0, x.isChannelPublic)(n, t),
                        r = s ? I.default : T.default,
                        i = s ? m.default : v.default;
                    return (0, l.jsx)(a ? i : r, {
                        height: 24,
                        className: R.channelOptionIcon
                    })
                },
                j = e => {
                    let {
                        guildId: t,
                        channelType: n,
                        channel: a,
                        onSelectChannel: s,
                        disabled: r,
                        entityType: i
                    } = e, d = n === y.ChannelTypes.GUILD_STAGE_VOICE, c = (0, x.isChannelPublic)(a, i), E = (0, S.useGetEventChannelsByType)(t, n);
                    return (0, l.jsxs)(u.FormItem, {
                        title: d ? M.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL : M.default.Messages.GUILD_EVENT_LOCATION_VOICE_FIELD_LABEL,
                        className: R.options,
                        disabled: r,
                        required: !0,
                        children: [(0, l.jsx)(u.SearchableSelect, {
                            value: null == a ? void 0 : a.id,
                            options: E.map(e => ({
                                value: e.id,
                                label: (0, o.computeChannelName)(e, h.default, f.default, !0)
                            })),
                            onChange: e => {
                                let t = E.find(t => t.id === e);
                                s(null != t ? t : void 0)
                            },
                            renderOptionPrefix: e => D(null == e ? void 0 : e.value, i),
                            isDisabled: r
                        }), !c && (0, l.jsx)(u.Text, {
                            color: "header-secondary",
                            className: R.channelPrivate,
                            variant: "text-sm/normal",
                            children: M.default.Messages.GUILD_EVENT_PRIVATE_DESCRIPTION
                        })]
                    })
                };

            function V(e, t, n, l) {
                return t ? {
                    disabled: !0,
                    tooltipText: M.default.Messages.GUILD_EVENT_LOCATION_DISABLED_CANNOT_EDIT
                } : n ? 0 === l && e !== O.GuildScheduledEventEntityTypes.EXTERNAL ? {
                    disabled: !0,
                    tooltipText: M.default.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_AVAILABLE_CHANNEL
                } : {
                    disabled: !1,
                    tooltipText: null
                } : {
                    disabled: !0,
                    tooltipText: M.default.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_PERMISSION
                }
            }
            let U = e => t => {
                    e({
                        entityMetadata: {
                            location: t
                        }
                    })
                },
                G = e => t => {
                    var n;
                    e({
                        channelId: null !== (n = null == t ? void 0 : t.id) && void 0 !== n ? n : null
                    })
                },
                P = (e, t) => n => {
                    let {
                        value: l
                    } = n, a = {
                        entityType: l,
                        scheduledEndTime: void 0
                    };
                    if (L(l)) {
                        var s;
                        let e = (null !== (s = r(t.scheduledStartTime)) && void 0 !== s ? s : r()).add(2, "hour");
                        a.scheduledEndTime = e.toISOString()
                    }
                    e(a)
                };

            function b(e) {
                let {
                    guildId: t,
                    guildEvent: n,
                    onChange: s,
                    isFocusReady: r
                } = e, {
                    entityType: o,
                    channelId: c
                } = n, E = (0, i.useStateFromStores)([d.default], () => d.default.getChannel(c), [c]), f = a.useRef(null);
                a.useEffect(() => {
                    if (r && L(o)) {
                        var e;
                        null === (e = f.current) || void 0 === e || e.focus()
                    }
                }, [r, o]);
                let h = U(s),
                    _ = G(s),
                    I = (0, C.getLocationFromEventData)(n),
                    T = (0, C.getChannelTypeFromEntity)(o),
                    m = (0, N.isGuildScheduledEventActive)(n);
                return null == o || o === O.GuildScheduledEventEntityTypes.NONE ? null : L(o) ? (0, l.jsx)(u.FormItem, {
                    title: M.default.Messages.GUILD_EVENT_LOCATION_ELSEWHERE_FIELD_LABEL,
                    className: R.options,
                    required: !0,
                    children: (0, l.jsx)(u.TextInput, {
                        className: R.textInput,
                        onChange: h,
                        placeholder: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_PLACEHOLDER,
                        maxLength: O.MAX_EVENT_LOCATION_LENGTH,
                        value: null != I ? I : "",
                        inputRef: f
                    })
                }) : null == T ? null : (0, l.jsx)(j, {
                    guildId: t,
                    channelType: T,
                    onSelectChannel: _,
                    channel: E,
                    entityType: o,
                    disabled: m
                })
            }

            function B(e) {
                let {
                    guildId: t,
                    guildEvent: n,
                    onChange: s
                } = e, r = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), o = (0, g.default)(t, void 0), d = (0, g.default)(t, y.ChannelTypes.GUILD_VOICE), E = (0, g.default)(t, y.ChannelTypes.GUILD_STAGE_VOICE), f = (0, S.useGetEventChannelsByType)(t, y.ChannelTypes.GUILD_VOICE), h = (0, p.useChannelsUserCanStartStageIn)(r), T = null == r ? void 0 : r.hasFeature(y.GuildFeatures.COMMUNITY), v = (0, N.isGuildScheduledEventActive)(n), x = P(s, n), C = a.useMemo(() => {
                    let e = [{
                        name: M.default.Messages.VOICE_CHANNEL,
                        value: O.GuildScheduledEventEntityTypes.VOICE,
                        desc: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_VOICE_HINT,
                        icon: I.default,
                        ...V(O.GuildScheduledEventEntityTypes.VOICE, v, d, f.length)
                    }, {
                        name: M.default.Messages.GUILD_EVENT_LOCATION_EXTERNAL,
                        value: O.GuildScheduledEventEntityTypes.EXTERNAL,
                        desc: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_HINT,
                        icon: _.default,
                        ...V(O.GuildScheduledEventEntityTypes.EXTERNAL, v, o, 0)
                    }];
                    return T ? [{
                        name: M.default.Messages.STAGE_CHANNEL,
                        value: O.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
                        desc: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_STAGE_HINT,
                        icon: m.default,
                        ...V(O.GuildScheduledEventEntityTypes.STAGE_INSTANCE, v, E, h.length)
                    }, ...e] : e
                }, [o, d, E, T, f.length, h.length, v]);
                return (0, l.jsx)(u.RadioGroup, {
                    value: n.entityType,
                    options: C,
                    onChange: x,
                    className: R.options
                })
            }

            function H(e) {
                let {
                    guildId: t,
                    guildEvent: a,
                    validationErrorMessage: s,
                    onChange: r,
                    isSlideReady: o = !1
                } = e, {
                    entityType: d
                } = a, f = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), h = (0, p.useChannelsUserCanStartStageIn)(f), _ = (0, i.useStateFromStores)([E.default], () => E.default.can(y.Permissions.MANAGE_CHANNELS, f)), I = null == f ? void 0 : f.hasFeature(y.GuildFeatures.COMMUNITY), T = P(r, a), m = I && !L(d) && 0 === h.length && _ && null != d;
                return (0, l.jsxs)("div", {
                    className: R.container,
                    children: [(0, l.jsx)(u.Heading, {
                        variant: "heading-xl/semibold",
                        className: R.header,
                        children: M.default.Messages.GUILD_EVENT_LOCATION_TITLE
                    }), (0, l.jsx)(u.Text, {
                        color: "header-secondary",
                        className: R.text,
                        variant: "text-sm/normal",
                        children: M.default.Messages.GUILD_EVENT_LOCATION_SUBTITLE
                    }), (0, l.jsx)(B, {
                        guildId: t,
                        guildEvent: a,
                        onChange: r
                    }), (0, l.jsx)(b, {
                        guildId: t,
                        guildEvent: a,
                        isFocusReady: o,
                        onChange: r
                    }), m ? (0, l.jsx)(A.default, {
                        onClick: () => {
                            T({
                                value: O.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
                                name: M.default.Messages.STAGE_CHANNEL
                            }), (0, u.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("581354").then(n.bind(n, "581354"));
                                return n => (0, l.jsx)(e, {
                                    ...n,
                                    channelType: y.ChannelTypes.GUILD_STAGE_VOICE,
                                    guildId: t
                                })
                            })
                        }
                    }) : null]
                })
            }
        },
        151859: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                r = n("77078"),
                i = n("419830"),
                u = n("267567"),
                o = n("42203"),
                d = n("305961"),
                c = n("697218"),
                E = n("718550"),
                f = n("189443"),
                h = n("841363"),
                _ = n("93550"),
                I = n("617347"),
                T = n("745049"),
                m = n("782340"),
                v = n("151990");

            function N(e) {
                var t, n, N;
                let {
                    guildId: g,
                    guildEvent: S,
                    guildEventId: p,
                    error: x
                } = e, C = a.useMemo(() => (0, f.convertToFakeGuildEvent)(S, g), [S, g]), {
                    channel_id: A,
                    name: O,
                    image: y,
                    description: M
                } = C, R = (0, s.useStateFromStores)([o.default], () => o.default.getChannel(A), [A]), L = (0, s.useStateFromStores)([d.default], () => d.default.getGuild(g), [g]), D = (0, h.getLocationFromEvent)(C), j = (0, s.useStateFromStores)([c.default], () => null != S.creatorId ? c.default.getUser(S.creatorId) : c.default.getCurrentUser(), [S.creatorId]), V = (0, s.useStateFromStores)([u.default], () => u.default.isLurking(g), [g]), U = (0, i.getChannelIconComponent)(R, L);
                return (0, l.jsxs)("div", {
                    className: v.content,
                    children: [(0, l.jsx)(I.default, {
                        className: v.previewCard,
                        guild: L,
                        channel: R,
                        location: null != D ? D : void 0,
                        creator: j,
                        name: O,
                        description: M,
                        imageSource: (n = (0, f.convertToFakeGuildEvent)(S, g, p), null == (N = y) && null == n.image ? null : null != N && /^data:/.test(N) ? N : (0, _.default)(n)),
                        isActive: !1,
                        isUserLurking: V,
                        speakers: [],
                        speakerCount: 0,
                        rsvped: !0,
                        guildEventId: T.FAKE_EVENT_ID,
                        eventPreview: C
                    }), (0, l.jsxs)("div", {
                        className: v.textContainer,
                        children: [(0, l.jsx)(r.Heading, {
                            variant: "heading-xl/semibold",
                            children: m.default.Messages.GUILD_EVENT_PREVIEW_TITLE
                        }), (0, l.jsx)(r.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            className: v.subheader,
                            children: null != location ? m.default.Messages.GUILD_EVENT_PREVIEW_EXTERNAL_EVENT_BODY : m.default.Messages.GUILD_EVENT_PREVIEW_BODY.format({
                                channelName: null !== (t = null == R ? void 0 : R.name) && void 0 !== t ? t : "",
                                channelHook: () => {
                                    var e;
                                    return (0, l.jsxs)("div", {
                                        className: v.channelName,
                                        children: [null != U ? (0, l.jsx)(U, {
                                            width: 20,
                                            height: 20,
                                            className: v.icon
                                        }) : (0, l.jsx)(E.default, {
                                            height: 18,
                                            width: 18,
                                            className: v.locationIcon
                                        }), null !== (e = null == R ? void 0 : R.name) && void 0 !== e ? e : D]
                                    })
                                }
                            })
                        }), null != x && (0, l.jsx)(r.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: v.subheader,
                            children: x.getAnyErrorMessage()
                        })]
                    })]
                })
            }
        },
        299342: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("194250"),
                r = n("782340"),
                i = n("11644");

            function u(e) {
                let {
                    isSlideReady: t,
                    ...n
                } = e;
                return (0, l.jsxs)("div", {
                    className: i.slideContainer,
                    children: [(0, l.jsxs)("div", {
                        className: i.header,
                        children: [(0, l.jsx)(a.Heading, {
                            variant: "heading-xl/semibold",
                            children: r.default.Messages.GUILD_EVENT_CREATE_HEADER
                        }), (0, l.jsx)(a.Text, {
                            color: "header-secondary",
                            className: i.text,
                            variant: "text-sm/normal",
                            children: r.default.Messages.GUILD_EVENT_CREATE_BODY
                        })]
                    }), (0, l.jsx)(s.default, {
                        ...n,
                        canSetFocus: t
                    })]
                })
            }
        },
        499950: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                r = n("9294"),
                i = n("512027"),
                u = n("52393"),
                o = n("652453"),
                d = n("119184"),
                c = n("923959"),
                E = n("305961"),
                f = n("330154"),
                h = n("943232"),
                _ = n("945330"),
                I = n("599110"),
                T = n("306160"),
                m = n("354023"),
                v = n("841363"),
                N = n("49111"),
                g = n("782340"),
                S = n("131439");
            let {
                INVITE_OPTIONS_7_DAYS: p,
                INVITE_OPTIONS_UNLIMITED: x
            } = m.default;

            function C(e) {
                var t, n, C;
                let {
                    onClose: A,
                    event: O
                } = e, y = null == O ? void 0 : O.guild_id, M = (0, a.useStateFromStores)([c.default], () => {
                    var e;
                    return null != y ? null === (e = c.default.getDefaultChannel(y)) || void 0 === e ? void 0 : e.id : null
                }, [y]), R = (0, a.useStateFromStores)([E.default], () => E.default.getGuild(y), [y]), L = (null == R ? void 0 : R.vanityURLCode) != null && (null == R ? void 0 : R.vanityURLCode.length) > 0, {
                    enabled: D
                } = i.default.useExperiment({
                    guildId: null != y ? y : "",
                    location: "bd50e8_1"
                }, {
                    autoTrackExposure: L
                }), {
                    channel_id: j,
                    id: V
                } = null != O ? O : {}, U = (0, a.useStateFromStores)([f.default], () => {
                    let e = null != j ? j : M;
                    return null == e ? null : f.default.getInvite(e)
                }, [j, M]);
                if (null == O) return A(), null;
                let G = D && null !== (t = null == R ? void 0 : R.vanityURLCode) && void 0 !== t ? t : null == U ? void 0 : U.code,
                    P = null != G ? (0, r.generateInviteKeyFromExtraData)({
                        baseCode: G,
                        guildScheduledEventId: V
                    }) : null,
                    b = null == P || null == U,
                    B = (0, u.default)(null != P ? P : ""),
                    H = null !== (n = null == U ? void 0 : U.maxAge) && void 0 !== n ? n : p.value,
                    w = null !== (C = null == U ? void 0 : U.maxUses) && void 0 !== C ? C : x.value;
                return (0, l.jsxs)("div", {
                    className: S.container,
                    children: [(0, l.jsx)(s.Clickable, {
                        onClick: A,
                        className: S.close,
                        "aria-label": g.default.Messages.CLOSE,
                        children: (0, l.jsx)(_.default, {})
                    }), (0, l.jsx)(d.default, {
                        children: (0, l.jsx)("div", {
                            className: S.iconContainer,
                            children: (0, l.jsx)(h.default, {
                                height: 30,
                                width: 30,
                                className: S.icon
                            })
                        })
                    }), (0, l.jsx)(s.Heading, {
                        variant: "heading-xl/semibold",
                        className: S.header,
                        children: g.default.Messages.GUILD_EVENT_CREATED_MODAL_HEADER
                    }), (0, l.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: S.body,
                        children: g.default.Messages.GUILD_EVENT_CREATED_MODAL_BODY
                    }), (0, l.jsxs)("div", {
                        className: S.invite,
                        children: [(0, l.jsx)(o.RawInviteCopyInputConnected, {
                            value: B,
                            autoFocus: !1,
                            onCopy: e => {
                                if (b) return;
                                (0, T.copy)(e);
                                let t = (0, v.getChannelTypeFromEntity)(O.entity_type);
                                I.default.track(N.AnalyticEvents.COPY_INSTANT_INVITE, {
                                    server: O.guild_id,
                                    channel: j,
                                    channel_type: t,
                                    location: N.InstantInviteSources.GUILD_EVENTS,
                                    code: U.code,
                                    guild_scheduled_event_id: null == O ? void 0 : O.id
                                })
                            }
                        }), (null == R ? void 0 : R.vanityURLCode) == null && (0, l.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            className: S.inviteDetail,
                            children: (0, m.maxAgeString)(H, w)
                        })]
                    })]
                })
            }
        },
        29913: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                r = n("77078"),
                i = n("849467"),
                u = n("782340"),
                o = n("130221");

            function d(e) {
                let {
                    guild: t,
                    speakers: n,
                    speakerCount: a,
                    className: d
                } = e, c = n.slice(0, 5), E = c.map(e => {
                    var n, a;
                    return (0, l.jsxs)("div", {
                        className: o.speakerContainer,
                        children: [(0, l.jsx)(r.Avatar, {
                            src: null == e ? void 0 : null === (n = e.user) || void 0 === n ? void 0 : n.getAvatarURL(t.id, 20),
                            size: r.AvatarSizes.SIZE_20,
                            className: o.avatar,
                            "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
                        }), (0, l.jsx)("div", {
                            className: o.textInGridContainer,
                            children: (0, l.jsx)(r.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                className: o.textInGrid,
                                children: null == e ? void 0 : e.userNick
                            })
                        })]
                    }, null == e ? void 0 : null === (a = e.user) || void 0 === a ? void 0 : a.id)
                }), f = a - c.length;
                return (0, l.jsxs)("div", {
                    className: s(o.grid, d),
                    children: [E, f > 0 && (0, l.jsxs)("div", {
                        className: o.speakerContainer,
                        children: [(0, l.jsx)("div", {
                            className: o.iconMicrophone,
                            children: (0, l.jsx)(i.default, {
                                height: 12
                            })
                        }), (0, l.jsx)(r.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: o.textInGrid,
                            children: u.default.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({
                                count: f
                            })
                        })]
                    })]
                })
            }
        },
        306939: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                r = n("139321"),
                i = n("597517"),
                u = n("782340"),
                o = n("8341"),
                d = n("533662");
            let c = () => (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-xs/normal",
                    className: o.inlineText,
                    children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_1
                }), (0, l.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-xs/normal",
                    className: o.inlineText,
                    children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_2
                }), (0, l.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-xs/normal",
                    className: o.inlineText,
                    children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_3
                }), (0, l.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-xs/normal",
                    className: o.inlineText,
                    children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_4
                })]
            });

            function E(e) {
                let {
                    onClick: t
                } = e, n = (0, a.useStateFromStores)([r.HotspotStore], () => !r.HotspotStore.hasHotspot(r.HotspotLocations.STAGE_CHANNEL_UPSELL));
                return n ? null : (0, l.jsxs)("div", {
                    className: o.container,
                    children: [(0, l.jsxs)("div", {
                        className: o.content,
                        children: [(0, l.jsxs)("div", {
                            className: o.textContainer,
                            children: [(0, l.jsx)(s.Heading, {
                                variant: "heading-md/semibold",
                                children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_TITLE
                            }), (0, l.jsx)(s.Text, {
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                className: o.descriptionText,
                                children: u.default.Messages.GUILD_EVENT_STAGE_TOOLTIP_BODY
                            }), (0, l.jsx)(s.Text, {
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL.format({
                                    suggestionsHook: c
                                })
                            })]
                        }), (0, l.jsx)("div", {
                            className: o.image,
                            children: (0, l.jsx)("img", {
                                src: d,
                                alt: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_ALT_IMAGE
                            })
                        })]
                    }), (0, l.jsxs)("div", {
                        className: o.footer,
                        children: [(0, l.jsx)(s.Button, {
                            onClick: t,
                            color: s.Button.Colors.PRIMARY,
                            size: s.Button.Sizes.SMALL,
                            className: o.button,
                            children: u.default.Messages.CREATE_STAGE_CHANNEL
                        }), (0, l.jsx)(s.Button, {
                            onClick: () => {
                                i.hideHotspot(r.HotspotLocations.STAGE_CHANNEL_UPSELL)
                            },
                            color: s.Button.Colors.TRANSPARENT,
                            size: s.Button.Sizes.SMALL,
                            look: s.ButtonLooks.LINK,
                            children: u.default.Messages.DONT_SHOW_AGAIN
                        })]
                    })]
                })
            }
        },
        27754: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("866227"),
                a = n.n(l),
                s = n("841363"),
                r = n("822516"),
                i = n("745049"),
                u = n("782340");

            function o(e, t) {
                return {
                    entity: function(e) {
                        let {
                            entityType: t,
                            channelId: n
                        } = e, l = (0, s.getLocationFromEventData)(e);
                        return null == t ? "An event type must be specified." : (null == l || "" === l.trim()) && null == n ? "Either a location or channel must be specified." : void 0
                    }(e),
                    schedule: function(e, t) {
                        let n = (0, r.getScheduleFromEventData)(e),
                            {
                                entityType: l
                            } = e;
                        if (null == n || (null == n ? void 0 : n.startDate) == null) return u.default.Messages.GUILD_EVENT_START_DATE_REQUIRED;
                        let {
                            startDate: s,
                            endDate: o
                        } = n;
                        return l === i.GuildScheduledEventEntityTypes.EXTERNAL && null == o ? u.default.Messages.GUILD_EVENT_END_DATE_REQUIRED : !t && s.isBefore(a()) ? u.default.Messages.GUILD_EVENT_PAST_START_DATE : null != o && null != s && o.isBefore(s) ? u.default.Messages.GUILD_EVENT_END_DATE_BEFORE_START_DATE : null != o && o.isBefore(a()) ? u.default.Messages.GUILD_EVENT_PAST_END_DATE_1 : void 0
                    }(e, t),
                    topic: function(e) {
                        let {
                            name: t
                        } = e, n = null == t || "" === t.trim();
                        return n ? "Topic must be specified." : void 0
                    }(e)
                }
            }
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return r
                },
                setHotspotOverride: function() {
                    return i
                },
                clearHotspotOverride: function() {
                    return u
                }
            });
            var l = n("913144"),
                a = n("599110"),
                s = n("49111");

            function r(e) {
                a.default.track(s.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), l.default.wait(() => {
                    l.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function i(e, t) {
                l.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function u(e) {
                l.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var l = n("446674"),
                a = n("913144"),
                s = n("197881"),
                r = n("492397");
            let i = new Set,
                u = {};
            class o extends l.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (i = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (u = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && u[e];
                    return !(r.CONFERENCE_MODE_ENABLED || s.ProcessArgs.isDisallowPopupsSet()) && (n || !i.has(e))
                }
                hasHiddenHotspot(e) {
                    return i.has(e)
                }
                getHotspotOverride(e) {
                    return u[e]
                }
                getState() {
                    return {
                        hiddenHotspots: i,
                        hotspotOverrides: u
                    }
                }
            }
            o.displayName = "HotspotStore", o.persistKey = "hotspots", o.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var d = new o(a.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    i = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (i.has(t)) return !1;
                    i.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: n
                    } = e;
                    u[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == u[t]) return !1;
                    delete u[t]
                }
            })
        },
        139321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HotspotStore: function() {
                    return s.default
                }
            });
            var l = n("533613");
            n.es(l, t);
            var a = n("597517");
            n.es(a, t);
            var s = n("269596")
        },
        656913: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                r = n("819855"),
                i = n("841098"),
                u = n("449918"),
                o = n("832132"),
                d = n("818643"),
                c = n("608684"),
                E = n("49111"),
                f = n("575282");
            let h = E.Color.PRIMARY_400,
                _ = E.Color.PRIMARY_500;

            function I(e) {
                let {
                    enabled: t,
                    imageClassName: n,
                    iconWrapperClassName: a,
                    ...E
                } = e, I = (0, i.default)(), T = (0, r.isThemeDark)(I) ? h : _, m = {
                    height: 18,
                    width: 18,
                    color: (0, u.getColor)(T)
                };
                return (0, l.jsx)(c.default, {
                    className: s({
                        [f.avatarUploader]: t,
                        [f.avatarUploaderDisabled]: !t
                    }),
                    imageClassName: s(n, f.avatarUploaderInnerSquare, {
                        [f.avatarUploaderInnerSquareDisabled]: !t
                    }),
                    icon: null != E.image && "" !== E.image ? (0, l.jsx)(o.default, {
                        ...m
                    }) : (0, l.jsx)(d.default, {
                        ...m
                    }),
                    iconClassName: s(f.avatarUploadIcon, f.hideDefaultIcon),
                    iconWrapperClassName: a,
                    showIcon: !0,
                    showIconDisabled: !0,
                    hideSize: !0,
                    ...E
                })
            }
        },
        608684: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ImageUploaderIcon: function() {
                    return _
                },
                default: function() {
                    return T
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                r = n.n(s),
                i = n("627445"),
                u = n.n(i),
                o = n("77078"),
                d = n("159885"),
                c = n("694187"),
                E = n("49111"),
                f = n("782340"),
                h = n("911686");

            function _(e) {
                let {
                    className: t,
                    icon: n = null
                } = e;
                return (0, l.jsx)("div", {
                    className: r(h.imageUploaderIcon, t),
                    children: n
                })
            }
            class I extends a.PureComponent {
                handleExternalFileChange(e) {
                    u(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
                }
                render() {
                    var e;
                    let t, n, a, s;
                    let {
                        image: i,
                        hint: u,
                        name: I,
                        makeURL: T,
                        disabled: m,
                        onChange: v,
                        showIcon: N,
                        showIconDisabled: g,
                        className: S,
                        imageClassName: p,
                        iconClassName: x,
                        iconWrapperClassName: C,
                        icon: A,
                        hideSize: O,
                        imageStyle: y,
                        showRemoveButton: M,
                        maxFileSizeBytes: R,
                        onFileSizeError: L,
                        onOpenImageSelectModal: D,
                        "aria-label": j
                    } = this.props;
                    if (null != (t = null != i && /^data:/.test(i) ? i : T(i)) ? n = 'url("'.concat(t, '")') : null != I && (a = (0, l.jsx)("div", {
                            className: h.imageUploaderAcronym,
                            children: (0, d.getAcronym)(I)
                        })), m) return (0, l.jsx)("div", {
                        className: r(h.imageUploader, h.disabled, S),
                        children: (0, l.jsxs)("div", {
                            className: r(h.imageUploaderInner, p),
                            style: {
                                ...y,
                                backgroundImage: n
                            },
                            children: [a, g && (0, l.jsx)("div", {
                                className: r(h.imageUploaderIcon, h.imageUploaderIconDisabled, x),
                                children: A
                            })]
                        })
                    });
                    null != i ? s = (0, l.jsx)(o.Anchor, {
                        className: h.removeButton,
                        onClick: this.handleRemove,
                        children: f.default.Messages.REMOVE
                    }) : !O && (s = (0, l.jsx)("small", {
                        className: h.sizeInfo,
                        children: f.default.Messages.MINIMUM_SIZE.format({
                            size: E.AVATAR_SIZE
                        })
                    }));
                    let V = null !== (e = null != j ? j : u) && void 0 !== e ? e : f.default.Messages.CHANGE_AVATAR;
                    return (0, l.jsxs)("div", {
                        className: r(h.imageUploader, S),
                        children: [(0, l.jsx)(o.FocusRing, {
                            within: !0,
                            children: (0, l.jsxs)("div", {
                                className: N ? r(h.imageUploaderIconWrapper, C) : void 0,
                                children: [(0, l.jsxs)("div", {
                                    className: r(h.imageUploaderInner, p),
                                    style: {
                                        ...y,
                                        backgroundImage: n
                                    },
                                    children: [(0, l.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: a
                                    }), null != D ? (0, l.jsx)(o.Clickable, {
                                        className: h.imageUploaderFileInput,
                                        "aria-label": V,
                                        onClick: D
                                    }) : (0, l.jsx)(c.default, {
                                        ref: this.inputRef,
                                        onChange: v,
                                        className: h.imageUploaderFileInput,
                                        "aria-label": V,
                                        tabIndex: 0,
                                        maxFileSizeBytes: R,
                                        onFileSizeError: L
                                    })]
                                }), null != u && (0, l.jsx)("div", {
                                    className: h.imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: u
                                }), N && (0, l.jsx)(_, {
                                    className: x,
                                    icon: A
                                })]
                            })
                        }), M ? s : null]
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = a.createRef(), this.handleRemove = () => {
                        this.props.onChange(null)
                    }
                }
            }
            I.defaultProps = {
                name: "",
                makeURL: e => e,
                disabled: !1,
                showIcon: !1,
                hideSize: !1,
                showRemoveButton: !0,
                maxFileSizeBytes: 1 / 0,
                icon: null
            };
            var T = I
        },
        650484: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                },
                PaymentPortalBody: function() {
                    return _
                },
                PaymentPortalFooter: function() {
                    return I
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                r = n.n(s),
                i = n("627445"),
                u = n.n(i),
                o = n("817736"),
                d = n.n(o),
                c = n("77078"),
                E = n("642906"),
                f = n("990893");

            function h(e) {
                var t, n, s, i, o, d;
                let {
                    header: h,
                    isLargeModal: _,
                    stepProps: I
                } = function(e) {
                    let {
                        header: t,
                        isLargeModal: n,
                        ...l
                    } = e;
                    return {
                        header: t,
                        isLargeModal: n,
                        stepProps: l
                    }
                }(e), {
                    step: T,
                    stepConfigs: m,
                    setBodyNode: v,
                    setFooterNode: N,
                    setModalOverlayNode: g,
                    setReadySlideId: S
                } = (0, E.usePaymentContext)(), p = m.find(e => e.key === T);
                a.useEffect(() => {
                    g(null)
                }, [T, g]), u(null != p, "Unknown step for current payment flow.");
                let x = null !== (o = null == p ? void 0 : null === (t = p.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== o && o,
                    C = null == p ? void 0 : null === (n = p.options) || void 0 === n ? void 0 : n.bodyClassName,
                    A = void 0 !== _ && _ ? f.sliderBodyLarge : null == p ? void 0 : null === (s = p.options) || void 0 === s ? void 0 : s.sliderBodyClassName;
                return (0, l.jsxs)(l.Fragment, {
                    children: [null === (d = null == p ? void 0 : null === (i = p.options) || void 0 === i ? void 0 : i.renderHeader) || void 0 === d || d ? h : null, p.renderStep(I), null == T || x ? null : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(c.ModalContent, {
                            className: r(f.body, C),
                            children: (0, l.jsx)(c.Slides, {
                                activeSlide: T,
                                centered: !1,
                                onSlideReady: e => S(e),
                                children: m.filter(e => null != e.key).map(e => (0, l.jsx)(c.Slide, {
                                    id: e.key,
                                    children: (0, l.jsx)("form", {
                                        className: r(f.sliderBody, A),
                                        ref: e => v(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, l.jsx)("div", {
                            ref: e => N(e)
                        }), (0, l.jsx)("div", {
                            ref: e => g(e)
                        })]
                    })]
                })
            }

            function _(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: n
                } = (0, E.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }

            function I(e) {
                let {
                    children: t
                } = e, {
                    footerNode: n
                } = (0, E.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }
        },
        520497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("49111");

            function a(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: n
                } = window.GLOBAL_ENV;
                return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(l.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(l.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        754474: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BotTypes: function() {
                    return i.BotTagTypes
                },
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                r = n("79798"),
                i = n("988268"),
                u = n("888770"),
                o = e => {
                    let {
                        name: t,
                        discriminator: n,
                        invertBotTagColor: a,
                        nameColor: i,
                        className: o,
                        botType: d,
                        usernameClass: c,
                        discriminatorClass: E,
                        botClass: f,
                        botVerified: h = !1,
                        style: _,
                        useRemSizes: I = !1,
                        usernameIcon: T
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: s(o, u.nameTag),
                        style: _,
                        children: [(0, l.jsxs)("span", {
                            className: s(u.username, c),
                            style: null != i ? {
                                color: i
                            } : void 0,
                            children: [T, t]
                        }), null != n ? (0, l.jsxs)("span", {
                            className: null != E ? E : void 0,
                            children: ["#", n]
                        }) : null, null != d ? (0, l.jsx)(r.default, {
                            type: d,
                            invertColor: a,
                            className: s(f, u.bot),
                            verified: h,
                            useRemSizes: I
                        }) : null]
                    })
                }
        },
        683911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                r = n("77078"),
                i = n("258078"),
                u = n("549043");

            function o(e) {
                let {
                    steps: t,
                    stepIndex: n,
                    onClick: a
                } = e;
                return (0, l.jsx)("div", {
                    className: u.container,
                    children: t.map((e, t) => {
                        let o = n === t;
                        return (0, l.jsxs)(r.Clickable, {
                            onClick: () => a(t),
                            className: u.stepContainer,
                            children: [(0, l.jsx)("div", {
                                className: s(u.progressBar, {
                                    [u.selectedProgressBar]: o
                                })
                            }), (0, l.jsx)(i.default, {
                                color: o ? i.default.Colors.BRAND : i.default.Colors.MUTED,
                                size: i.default.Sizes.SIZE_12,
                                children: e
                            })]
                        }, e)
                    })
                })
            }
        },
        832132: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("504318"),
                r = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        color: t = "currentColor",
                        height: n = 24,
                        width: a = 24,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, r.default)(s),
                        width: a,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            fill: t
                        })
                    })
                }, s.PencilIcon)
        },
        867544: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("469563"),
                r = n("163725"),
                i = n("75196"),
                u = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foregroundColor: r = a.default.unsafe_rawColors.RED_400.css,
                        foreground: u,
                        background: o,
                        ...d
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, i.default)(d),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("rect", {
                            fill: r,
                            className: u,
                            x: "2",
                            y: "21.2154",
                            width: "26",
                            height: "2",
                            transform: "rotate(-45 2 21.2154)"
                        }), (0, l.jsx)("path", {
                            fill: s,
                            className: o,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z"
                        })]
                    })
                }, r.EyeSlashIcon)
        },
        818643: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("851298"),
                r = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        ...s
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, r.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6 9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z",
                            fill: a
                        }), (0, l.jsx)("path", {
                            d: "M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z",
                            fill: a
                        })]
                    })
                }, s.ImagePlusIcon)
        },
        433487: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("304983"),
                r = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: a,
                            className: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"
                        })
                    })
                }, s.MoreHorizontalIcon)
        },
        155207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("811513"),
                r = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...i
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, s.GroupIcon)
        },
        132755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("876726"),
                r = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        foreground: s,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            className: s,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: a
                        })
                    })
                }, s.PlayIcon)
        },
        354023: function(e, t, n) {
            "use strict";
            let l;
            n.r(t), n.d(t, {
                RowTypes: function() {
                    return a
                },
                generateRowsForQuery: function() {
                    return A
                },
                getMostRecentDMedUser: function() {
                    return O
                },
                getUsersAlreadyJoined: function() {
                    return y
                },
                maxAgeString: function() {
                    return L
                },
                default: function() {
                    return D
                }
            }), n("424973"), n("222007");
            var a, s, r = n("191225"),
                i = n("42203"),
                u = n("26989"),
                o = n("660478"),
                d = n("27618"),
                c = n("697218"),
                E = n("287850"),
                f = n("25292"),
                h = n("49111"),
                _ = n("91366"),
                I = n("782340");
            l = n("591205"), (s = a || (a = {})).GROUP_DM = "GROUP_DM", s.DM = "DM", s.FRIEND = "FRIEND", s.CHANNEL = "CHANNEL";
            let T = (e, t) => null != e && u.default.isMember(e, t),
                m = e => {
                    let {
                        omitUserIds: t,
                        suggestedUserIds: n,
                        maxRowsWithoutQuery: l,
                        omitGuildId: a,
                        shownUserIds: s,
                        rows: r,
                        counts: i
                    } = e;
                    if (null != n)
                        for (let e of n) {
                            if (null != l && l > 0 && r.length >= l) break;
                            if (t.has(e) || s.has(e)) continue;
                            let n = c.default.getUser(e);
                            !(null == n || T(a, n.id)) && (s.add(n.id), r.push({
                                type: "FRIEND",
                                item: n,
                                isSuggested: !0
                            }), i.numFriends++)
                        }
                },
                v = e => {
                    let {
                        suggestedChannelIds: t,
                        maxRowsWithoutQuery: n,
                        rows: l,
                        counts: a
                    } = e;
                    if (null != t)
                        for (let e of t) {
                            if (null != n && n > 0 && l.length >= n) break;
                            let t = i.default.getChannel(e);
                            null != t && (l.push({
                                type: "CHANNEL",
                                item: t,
                                isSuggested: !0
                            }), a.numChannels++)
                        }
                },
                N = e => {
                    let {
                        omitUserIds: t,
                        maxRowsWithoutQuery: n,
                        omitGuildId: l,
                        shownUserIds: a,
                        rows: s,
                        counts: r,
                        includeGroupDms: u,
                        limit: d
                    } = e, f = 0;
                    for (let e of E.default.getPrivateChannelIds()) {
                        if (null != n && n > 0 && s.length >= n || null != d && f >= d) break;
                        let E = i.default.getChannel(e);
                        if (null == E || !E.isPrivate()) continue;
                        if (u && E.type === h.ChannelTypes.GROUP_DM) {
                            s.push({
                                type: "GROUP_DM",
                                item: E,
                                isSuggested: !1
                            }), r.numGroupDms++, f++;
                            continue
                        }
                        let _ = o.default.lastMessageId(E.id);
                        if (null == _) continue;
                        let I = E.getRecipientId();
                        if (null != I && !t.has(I) && !a.has(I)) {
                            let e = c.default.getUser(I);
                            if (null == e || e.bot || T(l, e.id)) continue;
                            a.add(e.id), s.push({
                                type: "DM",
                                item: e,
                                isSuggested: !1
                            }), r.numDms++, f++
                        }
                    }
                },
                g = e => {
                    let {
                        omitUserIds: t,
                        maxRowsWithoutQuery: n,
                        omitGuildId: l,
                        shownUserIds: a,
                        rows: s,
                        counts: r
                    } = e;
                    for (let e of d.default.getFriendIDs()) {
                        if (null != n && n > 0 && s.length >= n) break;
                        if (t.has(e) || a.has(e)) continue;
                        let i = c.default.getUser(e);
                        !(null == i || T(l, i.id)) && (s.push({
                            type: "FRIEND",
                            item: i,
                            isSuggested: !1
                        }), r.numFriends++)
                    }
                },
                S = e => {
                    let {
                        query: t,
                        rows: n,
                        counts: l,
                        inviteTargetType: a
                    } = e;
                    a === _.InviteTargetTypes.EMBEDDED_APPLICATION && f.default.queryChannels({
                        query: t,
                        limit: 3,
                        guildId: void 0
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        n.push({
                            type: "CHANNEL",
                            item: t,
                            isSuggested: !1
                        }), l.numChannels++
                    })
                },
                p = e => {
                    let {
                        query: t,
                        omitUserIds: n,
                        shownUserIds: l,
                        rows: a,
                        counts: s
                    } = e;
                    f.default.queryDMUsers({
                        query: t,
                        limit: 50
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        if (n.has(t.id)) return;
                        let r = i.default.getDMFromUserId(t.id);
                        if (null == r) return;
                        let u = o.default.lastMessageId(r);
                        null != u && (l.add(t.id), a.push({
                            type: "DM",
                            item: t,
                            isSuggested: !1
                        }), s.numDms++)
                    })
                },
                x = e => {
                    let {
                        query: t,
                        rows: n,
                        counts: l
                    } = e;
                    f.default.queryGroupDMs({
                        query: t,
                        limit: 50,
                        fuzzy: !1
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        n.push({
                            type: "GROUP_DM",
                            item: t,
                            isSuggested: !1
                        }), l.numGroupDms++
                    })
                },
                C = e => {
                    let {
                        query: t,
                        rows: n,
                        counts: l,
                        omitUserIds: a,
                        shownUserIds: s
                    } = e;
                    f.default.queryFriends({
                        query: t,
                        limit: 500,
                        _fuzzy: !1
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        !(a.has(t.id) || s.has(t.id)) && (s.add(t.id), n.push({
                            type: "FRIEND",
                            item: t,
                            isSuggested: !1
                        }), l.numFriends++)
                    })
                };

            function A(e) {
                let {
                    query: t,
                    inviteTargetType: n,
                    omitUserIds: l,
                    suggestedUserIds: a,
                    suggestedChannelIds: s,
                    maxRowsWithoutQuery: r,
                    omitGuildId: i
                } = e, u = new Set, o = [], d = {
                    numFriends: 0,
                    numDms: 0,
                    numGroupDms: 0,
                    numGuildMembers: 0,
                    numChannels: 0
                };
                if ("" === t) {
                    let e = {
                        omitUserIds: l,
                        maxRowsWithoutQuery: r,
                        omitGuildId: i,
                        shownUserIds: u,
                        rows: o,
                        counts: d
                    };
                    n === _.InviteTargetTypes.EMBEDDED_APPLICATION && (N({
                        ...e,
                        includeGroupDms: !1,
                        limit: 1
                    }), v({
                        ...e,
                        suggestedChannelIds: s
                    })), m({
                        ...e,
                        suggestedUserIds: a
                    }), N({
                        ...e,
                        includeGroupDms: !0
                    }), g(e)
                } else {
                    let e = {
                        query: t,
                        rows: o,
                        counts: d
                    };
                    n === _.InviteTargetTypes.EMBEDDED_APPLICATION && S({
                        ...e,
                        inviteTargetType: n
                    }), p({
                        ...e,
                        omitUserIds: l,
                        shownUserIds: u
                    }), x(e), C({
                        ...e,
                        omitUserIds: l,
                        shownUserIds: u
                    })
                }
                return {
                    rows: o,
                    counts: d
                }
            }

            function O(e, t) {
                for (let n of E.default.getPrivateChannelIds()) {
                    let l = i.default.getChannel(n);
                    if (null == l || !l.isDM() || null == o.default.lastMessageId(l.id)) continue;
                    let a = l.getRecipientId();
                    if (null != a && !e.has(a)) {
                        let e = c.default.getUser(a);
                        if (null == e || e.bot || T(t, e.id)) continue;
                        return e
                    }
                }
                return null
            }

            function y(e) {
                let {
                    channel: t,
                    inviteTargetType: n,
                    applicationId: l
                } = e;
                if (n === _.InviteTargetTypes.EMBEDDED_APPLICATION) {
                    if (null != t) {
                        for (let e of r.default.getEmbeddedActivitiesForChannel(t.id))
                            if (e.application_id === l) return new Set(e.connections.keys())
                    }
                }
                return new Set
            }
            let M = {
                    MINUTES: "minutes",
                    HOURS: "hours",
                    DAYS: "days",
                    NEVER: "never"
                },
                R = {
                    [l.INVITE_OPTIONS_30_MINUTES.value]: {
                        value: 30,
                        type: M.MINUTES
                    },
                    [l.INVITE_OPTIONS_1_HOUR.value]: {
                        value: 1,
                        type: M.HOURS
                    },
                    [l.INVITE_OPTIONS_6_HOURS.value]: {
                        value: 6,
                        type: M.HOURS
                    },
                    [l.INVITE_OPTIONS_12_HOURS.value]: {
                        value: 12,
                        type: M.HOURS
                    },
                    [l.INVITE_OPTIONS_1_DAY.value]: {
                        value: 1,
                        type: M.DAYS
                    },
                    [l.INVITE_OPTIONS_7_DAYS.value]: {
                        value: 7,
                        type: M.DAYS
                    },
                    [l.INVITE_OPTIONS_30_DAYS.value]: {
                        value: 30,
                        type: M.DAYS
                    },
                    [l.INVITE_OPTIONS_FOREVER.value]: {
                        value: 0,
                        type: M.NEVER
                    }
                };

            function L(e, t) {
                let n = parseInt(t, 10),
                    l = 0 === n,
                    a = R[e].value,
                    s = R[e].type;
                switch (s) {
                    case M.MINUTES:
                        if (l) return I.default.Messages.INVITE_EXPIRES_MINUTES;
                        return I.default.Messages.INVITE_EXPIRES_MINUTES_OR_USES.format({
                            numUses: n
                        });
                    case M.HOURS:
                        if (l) return I.default.Messages.INVITE_EXPIRES_HOURS.format({
                            numHours: a
                        });
                        return I.default.Messages.INVITE_EXPIRES_HOURS_OR_USES.format({
                            numHours: a,
                            numUses: n
                        });
                    case M.DAYS:
                        if (l) return I.default.Messages.INVITE_EXPIRES_DAYS_PLURAL.format({
                            numDays: a
                        });
                        return I.default.Messages.INVITE_EXPIRES_DAYS_OR_USES_PLURAL.format({
                            numDays: a,
                            numUses: n
                        });
                    case M.NEVER:
                        if (l) return I.default.Messages.INVITE_EXPIRES_NEVER;
                        return I.default.Messages.INVITE_EXPIRES_USES.format({
                            numUses: n
                        });
                    default:
                        return ""
                }
            }
            var D = {
                getMaxAgeOptions: l.MAX_AGE_OPTIONS,
                getMaxUsesOptions: l.MAX_USES_OPTIONS,
                INVITE_OPTIONS_FOREVER: l.INVITE_OPTIONS_FOREVER,
                INVITE_OPTIONS_1_DAY: l.INVITE_OPTIONS_1_DAY,
                INVITE_OPTIONS_7_DAYS: l.INVITE_OPTIONS_7_DAYS,
                INVITE_OPTIONS_30_DAYS: l.INVITE_OPTIONS_30_DAYS,
                INVITE_OPTIONS_12_HOURS: l.INVITE_OPTIONS_12_HOURS,
                INVITE_OPTIONS_6_HOURS: l.INVITE_OPTIONS_6_HOURS,
                INVITE_OPTIONS_1_HOUR: l.INVITE_OPTIONS_1_HOUR,
                INVITE_OPTIONS_30_MINUTES: l.INVITE_OPTIONS_30_MINUTES,
                INVITE_OPTIONS_UNLIMITED: l.INVITE_OPTIONS_UNLIMITED,
                INVITE_OPTIONS_ONCE: l.INVITE_OPTIONS_ONCE,
                INVITE_OPTIONS_5_TIMES: l.INVITE_OPTIONS_5_TIMES,
                INVITE_OPTIONS_10_TIMES: l.INVITE_OPTIONS_10_TIMES,
                INVITE_OPTIONS_25_TIMES: l.INVITE_OPTIONS_25_TIMES,
                INVITE_OPTIONS_50_TIMES: l.INVITE_OPTIONS_50_TIMES,
                INVITE_OPTIONS_100_TIMES: l.INVITE_OPTIONS_100_TIMES
            }
        },
        686904: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007");
            var l = n("884691"),
                a = n("448993");

            function s(e, t) {
                let [n, s] = l.useState(!1), [r, i] = l.useState(null), u = async () => {
                    s(!0), i(null);
                    try {
                        let t = await e();
                        return s(!1), i(null), t
                    } catch (n) {
                        let e = new a.APIError(n);
                        return null == t || t(e), i(e), s(!1), null
                    }
                };
                return [u, {
                    loading: n,
                    error: r
                }]
            }
        },
        591205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                INVITE_OPTIONS_UNLIMITED: function() {
                    return s
                },
                INVITE_OPTIONS_ONCE: function() {
                    return r
                },
                INVITE_OPTIONS_5_TIMES: function() {
                    return i
                },
                INVITE_OPTIONS_10_TIMES: function() {
                    return u
                },
                INVITE_OPTIONS_25_TIMES: function() {
                    return o
                },
                INVITE_OPTIONS_50_TIMES: function() {
                    return d
                },
                INVITE_OPTIONS_100_TIMES: function() {
                    return c
                },
                MAX_USES_OPTIONS: function() {
                    return E
                },
                INVITE_OPTIONS_30_MINUTES: function() {
                    return f
                },
                INVITE_OPTIONS_1_HOUR: function() {
                    return h
                },
                INVITE_OPTIONS_6_HOURS: function() {
                    return _
                },
                INVITE_OPTIONS_12_HOURS: function() {
                    return I
                },
                INVITE_OPTIONS_1_DAY: function() {
                    return T
                },
                INVITE_OPTIONS_7_DAYS: function() {
                    return m
                },
                INVITE_OPTIONS_30_DAYS: function() {
                    return v
                },
                INVITE_OPTIONS_FOREVER: function() {
                    return N
                },
                MAX_AGE_OPTIONS: function() {
                    return g
                }
            });
            var l = n("782340");

            function a(e, t) {
                return {
                    value: e,
                    get label() {
                        return t()
                    }
                }
            }
            let s = a(0, () => l.default.Messages.MAX_USES.format({
                    maxUses: 0
                })),
                r = a(1, () => l.default.Messages.MAX_USES.format({
                    maxUses: 1
                })),
                i = a(5, () => l.default.Messages.MAX_USES.format({
                    maxUses: 5
                })),
                u = a(10, () => l.default.Messages.MAX_USES.format({
                    maxUses: 10
                })),
                o = a(25, () => l.default.Messages.MAX_USES.format({
                    maxUses: 25
                })),
                d = a(50, () => l.default.Messages.MAX_USES.format({
                    maxUses: 50
                })),
                c = a(100, () => l.default.Messages.MAX_USES.format({
                    maxUses: 100
                })),
                E = [s, r, i, u, o, d, c],
                f = a(1800, () => l.default.Messages.DURATION_MINUTES.format({
                    minutes: 30
                })),
                h = a(3600, () => l.default.Messages.DURATION_HOURS.format({
                    hours: 1
                })),
                _ = a(21600, () => l.default.Messages.DURATION_HOURS.format({
                    hours: 6
                })),
                I = a(43200, () => l.default.Messages.DURATION_HOURS.format({
                    hours: 12
                })),
                T = a(86400, () => l.default.Messages.DURATION_DAYS.format({
                    days: 1
                })),
                m = a(604800, () => l.default.Messages.DURATION_DAYS.format({
                    days: 7
                })),
                v = a(2592e3, () => l.default.Messages.DURATION_DAYS.format({
                    days: 30
                })),
                N = a(0, () => l.default.Messages.MAX_AGE_NEVER),
                g = [f, h, _, I, T, m, v, N]
        }
    }
]);