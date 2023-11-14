(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["34889"], {
        794252: function(e, t, n) {
            "use strict";
            var r = n("859514"),
                l = n("960049"),
                i = n("124852"),
                a = Array;
            r({
                target: "Array",
                proto: !0
            }, {
                with: function(e, t) {
                    return l(i(this), a, e, t)
                }
            })
        },
        717837: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return (e = String(e || ""), i.test(e)) ? "rtl" : a.test(e) ? "ltr" : "neutral"
            };
            var r = "֑-߿יִ-﷽ﹰ-ﻼ",
                l = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                i = RegExp("^[^" + l + "]*[" + r + "]"),
                a = RegExp("^[^" + r + "]*[" + l + "]")
        },
        506838: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                P: function() {
                    return q
                },
                match: function() {
                    return J
                }
            }), n("222007"), n("424973"), n("70102"), n("808653");
            let r = Symbol.for("@ts-pattern/matcher"),
                l = Symbol.for("@ts-pattern/isVariadic"),
                i = "@ts-pattern/anonymous-select-key",
                a = e => !!(e && "object" == typeof e),
                s = e => e && !!e[r],
                u = (e, t, n) => {
                    if (s(e)) {
                        let l = e[r](),
                            {
                                matched: i,
                                selections: a
                            } = l.match(t);
                        return i && a && Object.keys(a).forEach(e => n(e, a[e])), i
                    }
                    if (a(e)) {
                        if (!a(t)) return !1;
                        if (Array.isArray(e)) {
                            if (!Array.isArray(t)) return !1;
                            let r = [],
                                i = [],
                                a = [];
                            for (let t of e.keys()) {
                                let n = e[t];
                                s(n) && n[l] ? a.push(n) : a.length ? i.push(n) : r.push(n)
                            }
                            if (a.length) {
                                if (a.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (t.length < r.length + i.length) return !1;
                                let e = t.slice(0, r.length),
                                    l = 0 === i.length ? [] : t.slice(-i.length),
                                    s = t.slice(r.length, 0 === i.length ? 1 / 0 : -i.length);
                                return r.every((t, r) => u(t, e[r], n)) && i.every((e, t) => u(e, l[t], n)) && (0 === a.length || u(a[0], s, n))
                            }
                            return e.length === t.length && e.every((e, r) => u(e, t[r], n))
                        }
                        return Object.keys(e).every(l => {
                            let i = e[l];
                            return (l in t || s(i) && "optional" === i[r]().matcherType) && u(i, t[l], n)
                        })
                    }
                    return Object.is(t, e)
                },
                o = e => {
                    var t, n, l;
                    return a(e) ? s(e) ? null != (t = null == (n = (l = e[r]()).getSelectionKeys) ? void 0 : n.call(l)) ? t : [] : Array.isArray(e) ? d(e, o) : d(Object.values(e), o) : []
                },
                d = (e, t) => e.reduce((e, n) => e.concat(t(n)), []);

            function c(e) {
                return Object.assign(e, {
                    optional: () => f(e),
                    and: t => m(e, t),
                    or: t => g(e, t),
                    select: t => void 0 === t ? C(e) : C(t, e)
                })
            }

            function f(e) {
                return c({
                    [r]: () => ({
                        match: t => {
                            let n = {},
                                r = (e, t) => {
                                    n[e] = t
                                };
                            return void 0 === t ? (o(e).forEach(e => r(e, void 0)), {
                                matched: !0,
                                selections: n
                            }) : {
                                matched: u(e, t, r),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => o(e),
                        matcherType: "optional"
                    })
                })
            }
            let h = (e, t) => {
                    for (let n of e)
                        if (!t(n)) return !1;
                    return !0
                },
                p = (e, t) => {
                    for (let [n, r] of e.entries())
                        if (!t(r, n)) return !1;
                    return !0
                };

            function m() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return c({
                    [r]: () => ({
                        match: e => {
                            let n = {},
                                r = (e, t) => {
                                    n[e] = t
                                };
                            return {
                                matched: t.every(t => u(t, e, r)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => d(t, o),
                        matcherType: "and"
                    })
                })
            }

            function g() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return c({
                    [r]: () => ({
                        match: e => {
                            let n = {},
                                r = (e, t) => {
                                    n[e] = t
                                };
                            return d(t, o).forEach(e => r(e, void 0)), {
                                matched: t.some(t => u(t, e, r)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => d(t, o),
                        matcherType: "or"
                    })
                })
            }

            function v(e) {
                return {
                    [r]: () => ({
                        match: t => ({
                            matched: !!e(t)
                        })
                    })
                }
            }

            function C() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let l = "string" == typeof t[0] ? t[0] : void 0,
                    a = 2 === t.length ? t[1] : "string" == typeof t[0] ? void 0 : t[0];
                return c({
                    [r]: () => ({
                        match: e => {
                            let t = {
                                [null != l ? l : i]: e
                            };
                            return {
                                matched: void 0 === a || u(a, e, (e, n) => {
                                    t[e] = n
                                }),
                                selections: t
                            }
                        },
                        getSelectionKeys: () => [null != l ? l : i].concat(void 0 === a ? [] : o(a))
                    })
                })
            }

            function E(e) {
                return "number" == typeof e
            }

            function S(e) {
                return "string" == typeof e
            }

            function _(e) {
                return "bigint" == typeof e
            }
            let I = c(v(function(e) {
                    return !0
                })),
                y = e => Object.assign(c(e), {
                    startsWith: t => y(m(e, v(e => S(e) && e.startsWith(t)))),
                    endsWith: t => y(m(e, v(e => S(e) && e.endsWith(t)))),
                    minLength: t => {
                        var n;
                        return y(m(e, (n = t, v(e => S(e) && e.length >= n))))
                    },
                    maxLength: t => {
                        var n;
                        return y(m(e, (n = t, v(e => S(e) && e.length <= n))))
                    },
                    includes: t => y(m(e, v(e => S(e) && e.includes(t)))),
                    regex: t => y(m(e, v(e => S(e) && !!e.match(t))))
                }),
                T = y(v(S)),
                L = (e, t) => v(n => E(n) && e <= n && t >= n),
                A = e => v(t => E(t) && t < e),
                x = e => v(t => E(t) && t > e),
                N = e => v(t => E(t) && t <= e),
                R = e => v(t => E(t) && t >= e),
                M = () => v(e => E(e) && Number.isInteger(e)),
                b = () => v(e => E(e) && Number.isFinite(e)),
                U = () => v(e => E(e) && e > 0),
                O = () => v(e => E(e) && e < 0),
                j = e => Object.assign(c(e), {
                    between: (t, n) => j(m(e, L(t, n))),
                    lt: t => j(m(e, A(t))),
                    gt: t => j(m(e, x(t))),
                    lte: t => j(m(e, N(t))),
                    gte: t => j(m(e, R(t))),
                    int: () => j(m(e, M())),
                    finite: () => j(m(e, b())),
                    positive: () => j(m(e, U())),
                    negative: () => j(m(e, O()))
                }),
                w = j(v(E)),
                D = (e, t) => v(n => _(n) && e <= n && t >= n),
                P = e => v(t => _(t) && t < e),
                F = e => v(t => _(t) && t > e),
                B = e => v(t => _(t) && t <= e),
                H = e => v(t => _(t) && t >= e),
                k = () => v(e => _(e) && e > 0),
                G = () => v(e => _(e) && e < 0),
                V = e => Object.assign(c(e), {
                    between: (t, n) => V(m(e, D(t, n))),
                    lt: t => V(m(e, P(t))),
                    gt: t => V(m(e, F(t))),
                    lte: t => V(m(e, B(t))),
                    gte: t => V(m(e, H(t))),
                    positive: () => V(m(e, k())),
                    negative: () => V(m(e, G()))
                }),
                Z = V(v(_)),
                K = c(v(function(e) {
                    return "boolean" == typeof e
                })),
                W = c(v(function(e) {
                    return "symbol" == typeof e
                })),
                z = c(v(function(e) {
                    return null == e
                }));
            var q = {
                __proto__: null,
                matcher: r,
                optional: f,
                array: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function e(t) {
                        var n;
                        return Object.assign((n = t, Object.assign(n, {
                            *[Symbol.iterator]() {
                                yield Object.assign(n, {
                                    [l]: !0
                                })
                            }
                        })), {
                            optional: () => e(f(t)),
                            select: n => e(void 0 === n ? C(t) : C(n, t))
                        })
                    }({
                        [r]: () => ({
                            match: e => {
                                if (!Array.isArray(e)) return {
                                    matched: !1
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                let n = t[0],
                                    r = {};
                                if (0 === e.length) return o(n).forEach(e => {
                                    r[e] = []
                                }), {
                                    matched: !0,
                                    selections: r
                                };
                                let l = (e, t) => {
                                    r[e] = (r[e] || []).concat([t])
                                };
                                return {
                                    matched: e.every(e => u(n, e, l)),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : o(t[0])
                        })
                    })
                },
                set: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return c({
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
                                let r = (e, t) => {
                                        n[e] = (n[e] || []).concat([t])
                                    },
                                    l = t[0];
                                return {
                                    matched: h(e, e => u(l, e, r)),
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
                        [r]: () => ({
                            match: e => {
                                var n;
                                if (!(e instanceof Map)) return {
                                    matched: !1
                                };
                                let r = {};
                                if (0 === e.size) return {
                                    matched: !0,
                                    selections: r
                                };
                                let l = (e, t) => {
                                    r[e] = (r[e] || []).concat([t])
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                if (1 === t.length) throw Error("`P.map` wasn't given enough arguments. Expected (key, value), received ".concat(null == (n = t[0]) ? void 0 : n.toString()));
                                let [i, a] = t;
                                return {
                                    matched: p(e, (e, t) => {
                                        let n = u(i, t, l),
                                            r = u(a, e, l);
                                        return n && r
                                    }),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : [...o(t[0]), ...o(t[1])]
                        })
                    })
                },
                intersection: m,
                union: g,
                not: function(e) {
                    return c({
                        [r]: () => ({
                            match: t => ({
                                matched: !u(e, t, () => {})
                            }),
                            getSelectionKeys: () => [],
                            matcherType: "not"
                        })
                    })
                },
                when: v,
                select: C,
                any: I,
                _: I,
                string: T,
                between: L,
                lt: A,
                gt: x,
                lte: N,
                gte: R,
                int: M,
                finite: b,
                positive: U,
                negative: O,
                number: w,
                betweenBigInt: D,
                ltBigInt: P,
                gtBigInt: F,
                lteBigInt: B,
                gteBigInt: H,
                positiveBigInt: k,
                negativeBigInt: G,
                bigint: Z,
                boolean: K,
                symbol: W,
                nullish: z,
                instanceOf: function(e) {
                    var t;
                    return c(v((t = e, e => e instanceof t)))
                },
                shape: function(e) {
                    return c(v(function() {
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
            let Y = {
                matched: !1,
                value: void 0
            };

            function J(e) {
                return new X(e, Y)
            }
            class X {
                with() {
                    let e;
                    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    if (this.state.matched) return this;
                    let l = n[n.length - 1],
                        a = [n[0]];
                    3 === n.length && "function" == typeof n[1] ? (a.push(n[0]), e = n[1]) : n.length > 2 && a.push(...n.slice(1, n.length - 1));
                    let s = !1,
                        o = {},
                        d = (e, t) => {
                            s = !0, o[e] = t
                        },
                        c = a.some(e => u(e, this.input, d)) && (!e || e(this.input)) ? {
                            matched: !0,
                            value: l(s ? i in o ? o[i] : o : this.input, this.input)
                        } : Y;
                    return new X(this.input, c)
                }
                when(e, t) {
                    if (this.state.matched) return this;
                    let n = !!e(this.input);
                    return new X(this.input, n ? {
                        matched: !0,
                        value: t(this.input, this.input)
                    } : Y)
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
        430568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007"), n("70102"), n("843762"), n("424973");
            var r = n("37983"),
                l = n("884691"),
                i = n("414456"),
                a = n.n(i),
                s = n("817736"),
                u = n.n(s),
                o = n("118810"),
                d = n("446674"),
                c = n("407063"),
                f = n("845579"),
                h = n("901165"),
                p = n("62843"),
                m = n("315102"),
                g = n("402671"),
                v = n("866190"),
                C = n("115279");
            class E extends l.PureComponent {
                componentWillUnmount() {
                    var e;
                    null === (e = this.cancelLoadImage) || void 0 === e || e.call(this)
                }
                getSrc() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        {
                            src: t,
                            emojiId: n,
                            emojiName: r,
                            animated: l,
                            shouldAnimate: i,
                            isFocused: a,
                            isInteracting: s,
                            size: u = "default"
                        } = e,
                        {
                            hover: o
                        } = this.state;
                    if (null != t) return t;
                    if (null != n) {
                        let e = C.EMOJI_SIZE_MAP[u];
                        return m.default.getEmojiURL({
                            id: n,
                            animated: a && !0 === l && (!0 === i || o || !0 === s),
                            size: e
                        })
                    }
                    if (null != r) return g.default.getURL(r)
                }
                render() {
                    var e;
                    let t;
                    let {
                        emojiName: n,
                        animated: i,
                        className: s,
                        size: u = "default",
                        alt: o,
                        shouldAnimate: d,
                        isFocused: c,
                        emojiId: f,
                        autoplay: h,
                        isInteracting: p,
                        ...m
                    } = this.props, g = this.getSrc();
                    return null == g || "" === g ? (0, r.jsx)("span", {
                        className: a("emoji", "emoji-text"),
                        children: n
                    }) : (i && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }), (0, l.createElement)("img", {
                        ...m,
                        key: this.key,
                        src: g,
                        alt: null !== (e = null != o ? o : n) && void 0 !== e ? e : void 0,
                        draggable: !1,
                        ...t,
                        className: a("emoji", s, {
                            jumboable: "jumbo" === u
                        }),
                        onError: this.onError,
                        "data-type": "emoji",
                        ...null != f && "" !== f ? {
                            "data-id": f
                        } : {
                            "data-name": n
                        }
                    }))
                }
                constructor(...e) {
                    super(...e), this.state = {
                        hover: !1
                    }, this.key = void 0, this.onError = () => {
                        let e = this.getSrc();
                        null != e && (this.cancelLoadImage = (0, c.loadImage)(e, e => {
                            !e && (this.key = Date.now(), this.forceUpdate())
                        }))
                    }, this.onMouseEnter = e => {
                        this.setState({
                            hover: !0
                        });
                        let {
                            onMouseEnter: t
                        } = this.props;
                        null != t && t(e)
                    }, this.onMouseLeave = e => {
                        this.setState({
                            hover: !1
                        });
                        let {
                            onMouseLeave: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            E.defaultProps = {
                isInteracting: !1
            };
            let S = function(e) {
                if (null == window.IntersectionObserver) return function(t) {
                    return (0, r.jsx)(e, {
                        ...t,
                        shouldAnimate: t.animated
                    })
                };
                let t = [],
                    n = [],
                    i = new window.IntersectionObserver(e => {
                        e.forEach(e => {
                            let r = n.find(t => {
                                let [n] = t;
                                return n === e.target
                            });
                            if (null == r) return;
                            let l = r[1];
                            if (e.intersectionRatio >= .7) {
                                var i, a;
                                if (-1 !== t.indexOf(l)) return;
                                let n = Math.abs(e.intersectionRect.bottom - Number(null === (i = e.rootBounds) || void 0 === i ? void 0 : i.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (a = e.rootBounds) || void 0 === a ? void 0 : a.top));
                                n ? t.unshift(l) : t.push(l), l.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                            } else {
                                let e = t.indexOf(l); - 1 !== e && (t.splice(e, 1), l.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                            }
                        })
                    }, {
                        threshold: .7
                    });

                function a(e) {
                    let t = u.findDOMNode(e);
                    (0, o.isElement)(t) && (n.push([t, e]), i.observe(t))
                }

                function s(e) {
                    let r = u.findDOMNode(e);
                    i.unobserve(r);
                    let l = n.findIndex(t => {
                        let [n, r] = t;
                        return r === e
                    }); - 1 !== l && (n.splice(l, 1), -1 !== (l = t.indexOf(e)) && (t.splice(l, 1), l < 100 && t.length >= 100 && t[99].forceUpdate()))
                }
                return class extends l.Component {
                    shouldAutoplay(e) {
                        return e.animated && e.autoplay
                    }
                    componentDidMount() {
                        this.shouldAutoplay(this.props) && a(this)
                    }
                    componentDidUpdate(e) {
                        let t = this.shouldAutoplay(e),
                            n = this.shouldAutoplay(this.props);
                        n !== t && (n ? a(this) : s(this))
                    }
                    componentWillUnmount() {
                        this.shouldAutoplay(this.props) && s(this)
                    }
                    render() {
                        let n = t.indexOf(this),
                            {
                                autoplay: l,
                                allowAnimatedEmoji: i,
                                ...a
                            } = this.props;
                        return (0, r.jsx)(p.MessagesInteractionContext.Consumer, {
                            children: t => (0, r.jsx)(e, {
                                ...a,
                                autoplay: l || !1,
                                shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && i
                            })
                        })
                    }
                }
            }(E);

            function _(e) {
                let t = f.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    l = __OVERLAY__ ? (0, d.useStateFromStores)([h.default], () => h.default.isInstanceFocused()) : (0, v.useIsWindowFocused)();
                return (0, r.jsx)(S, {
                    ...e,
                    ...n,
                    isFocused: l
                })
            }
        },
        145079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("414456"),
                i = n.n(l),
                a = n("446674"),
                s = n("77078"),
                u = n("102985"),
                o = n("79798"),
                d = n("754474"),
                c = n("158998"),
                f = n("782340"),
                h = n("892802");

            function p(e) {
                if (e.isSystemUser()) return d.BotTypes.SYSTEM_DM;
                if (e.isClyde()) return d.BotTypes.AI;
                if (e.bot) return d.BotTypes.BOT;
                return null
            }
            let m = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: l,
                    botVerified: a,
                    discriminatorClass: u,
                    className: d,
                    usernameClass: c,
                    color: p,
                    botClass: m,
                    showStreamerModeTooltip: g
                } = e;
                return (0, r.jsxs)("div", {
                    className: i(h.info, d),
                    children: [(0, r.jsx)(s.Tooltip, {
                        text: f.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: g,
                        children: e => (0, r.jsx)("span", {
                            ...e,
                            className: i(h.username, c),
                            style: null != p ? {
                                color: p
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, r.jsx)("span", {
                        className: i(h.infoSpacing, u),
                        children: n
                    }) : void 0, null != l && (0, r.jsx)(o.default, {
                        type: l,
                        className: i(h.infoSpacing, m),
                        verified: a
                    })]
                })
            };
            var g = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: l,
                    forceUsername: i,
                    showAccountIdentifier: s,
                    overrideDiscriminator: o,
                    forcePomelo: f,
                    ...h
                } = e, g = (0, a.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), v = g || t || n.isNonUserBot(), C = n.toString(), E = c.default.getName(n), S = i ? C : null != l ? l : E, _ = n.isPomelo() || f;
                if (_ || S !== C) {
                    let e = S === C && _ && i ? c.default.getUserTag(n, {
                            forcePomelo: f
                        }) : S,
                        t = s && e !== "@".concat(C) ? c.default.getUserTag(n) : void 0;
                    return (0, r.jsx)(m, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: p(n),
                        showStreamerModeTooltip: g && e !== E,
                        ...h
                    })
                }
                return (0, r.jsx)(d.default, {
                    name: S,
                    botType: p(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: v || S !== C ? null : null != o ? o : n.discriminator,
                    ...h
                })
            }
        },
        163725: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EyeSlashIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, i.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M1.293 21.293a1 1 0 1 0 1.414 1.414l20-20a1 1 0 0 0-1.414-1.414l-20 20ZM3.16 16.047a.487.487 0 0 0 .74.052l.72-.72a.513.513 0 0 0 .052-.657 15.708 15.708 0 0 1-1.435-2.524.48.48 0 0 1 0-.396c.408-.905 1.182-2.374 2.377-3.719C7.126 6.383 9.191 5 12 5c.822 0 1.58.118 2.278.328a.52.52 0 0 0 .52-.125l.806-.807c.247-.247.172-.662-.155-.784A9.79 9.79 0 0 0 12 3C4.887 3 1.727 10.115 1.113 11.693a.833.833 0 0 0 0 .614c.246.631.898 2.147 2.047 3.74Z",
                        className: s
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M8.18 10.81c-.133.426.359.651.674.336l2.292-2.292c.315-.315.09-.807-.335-.674a4.01 4.01 0 0 0-2.631 2.63ZM12.854 15.146c-.315.315-.09.806.335.674a4.01 4.01 0 0 0 2.631-2.63c.133-.426-.359-.651-.674-.336l-2.293 2.292Z",
                        className: s
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M9.722 18.672a.52.52 0 0 0-.52.125l-.806.808c-.247.246-.172.661.155.783A9.79 9.79 0 0 0 12 21c7.113 0 10.273-7.115 10.887-8.693a.833.833 0 0 0 0-.614 17.43 17.43 0 0 0-2.047-3.74.487.487 0 0 0-.74-.052l-.72.72a.513.513 0 0 0-.052.657 15.709 15.709 0 0 1 1.435 2.524.48.48 0 0 1 0 .396c-.408.905-1.182 2.374-2.377 3.719C16.874 17.617 14.809 19 12 19a7.88 7.88 0 0 1-2.278-.328Z",
                        className: s
                    })]
                })
            }
        },
        811513: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GroupIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M14.5 8a3 3 0 1 0-2.701-4.306c-.202.415.057.87.443 1.124A5.006 5.006 0 0 1 14.379 7.9c.013.058.062.1.121.1ZM18.437 17.271c.154.425.544.729.995.729H20.5a1.5 1.5 0 0 0 1.5-1.5 7.502 7.502 0 0 0-6.502-7.434c-.548-.073-.988.386-1.097.927-.06.301-.148.592-.26.871-.233.579-.054 1.291.472 1.628a9.529 9.529 0 0 1 3.824 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0 1.5 1.5 0 0 1-1.5 1.5.202.202 0 0 1-.196-.159 12.379 12.379 0 0 0-.884-2.543c-.108-.23-.42-.149-.42.105V21.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.097c0-.254-.312-.334-.42-.105-.318.673-.67 1.579-.884 2.543A.202.202 0 0 1 3.5 22 1.5 1.5 0 0 1 2 20.5Z",
                        className: s
                    })
                })
            }
        },
        876726: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlayIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M9.248 3.348C7.872 2.455 6 3.384 6 4.96v14.08c0 1.576 1.872 2.505 3.248 1.612l10.853-7.04c1.199-.777 1.199-2.447 0-3.224L9.248 3.348Z",
                        className: s
                    })
                })
            }
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.786 3.374A.25.25 0 0 0 17.57 5h-3.134a.75.75 0 0 0-.65.378L6.213 18.626A.25.25 0 0 0 6.43 19h3.134a.75.75 0 0 0 .65-.378l7.571-13.248Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return i
                }
            });
            var r = n("884691"),
                l = n("599110");
            let i = () => r.useContext(l.AnalyticsContext)
        },
        651057: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("702976"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var r = n("872717"),
                l = n("913144"),
                i = n("568734"),
                a = n("299285"),
                s = n("49111"),
                u = {
                    async createApplication(e) {
                        let {
                            name: t,
                            guildId: n,
                            type: i,
                            teamId: a
                        } = e, u = await r.default.post({
                            url: s.Endpoints.APPLICATIONS,
                            body: {
                                name: t,
                                type: i,
                                guild_id: n,
                                team_id: a
                            }
                        }), o = u.body;
                        return null != n && null != i && l.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: o
                        }), o
                    },
                    async getApplicationsForGuild(e) {
                        let {
                            includeTeam: t,
                            ...n
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = await r.default.get({
                            url: s.Endpoints.GUILD_APPLICATIONS(e),
                            query: {
                                ...n,
                                include_team: t
                            }
                        }), a = i.body;
                        return l.default.dispatch({
                            type: "APPLICATIONS_FETCH_SUCCESS",
                            applications: a
                        }), a
                    },
                    async transferApplication(e) {
                        let {
                            applicationId: t,
                            teamId: n
                        } = e, i = await r.default.post({
                            url: s.Endpoints.APPLICATION_OWNER_TRANSFER(t),
                            body: {
                                team_id: n
                            }
                        }), a = i.body;
                        return l.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: a
                        }), a
                    },
                    async fetchApplications(e) {
                        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            n = e;
                        if (!t && (n = e.filter(e => {
                                var t, n;
                                let r = a.default.getApplication(e),
                                    l = (0, i.hasFlag)(null !== (n = null == r ? void 0 : r.flags) && void 0 !== n ? n : 0, s.ApplicationFlags.EMBEDDED),
                                    u = l && (null == r ? void 0 : null === (t = r.embeddedActivityConfig) || void 0 === t ? void 0 : t.supported_platforms) == null;
                                return !(null != r && !u) && !a.default.isFetchingApplication(e) && !a.default.didFetchingApplicationFail(e) && e.length > 0
                            })), n.length > 0) {
                            let e;
                            l.default.dispatch({
                                type: "APPLICATIONS_FETCH",
                                applicationIds: n
                            });
                            try {
                                e = await r.default.get({
                                    url: s.Endpoints.APPLICATIONS_PUBLIC,
                                    query: new URLSearchParams(n.map(e => ["application_ids", e])).toString(),
                                    oldFormErrors: !0
                                })
                            } catch (e) {
                                throw l.default.dispatch({
                                    type: "APPLICATIONS_FETCH_FAIL",
                                    applicationIds: n
                                }), e
                            }
                            l.default.dispatch({
                                type: "APPLICATIONS_FETCH_SUCCESS",
                                applications: e.body
                            })
                        }
                    },
                    fetchApplication(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return l.default.dispatch({
                            type: "APPLICATION_FETCH",
                            applicationId: e
                        }), r.default.get({
                            url: s.Endpoints.APPLICATION_PUBLIC(e),
                            query: {
                                with_guild: t
                            },
                            oldFormErrors: !0
                        }).then(e => (l.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: e.body
                        }), e.body)).catch(t => (l.default.dispatch({
                            type: "APPLICATION_FETCH_FAIL",
                            applicationId: e
                        }), Promise.reject(t)))
                    }
                }
        },
        619335: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var r = n("274870"),
                l = n("116320"),
                i = n("617559"),
                a = n("213523"),
                s = n("593195"),
                u = n("361777"),
                o = n("497757"),
                d = n("774223"),
                c = n("991497"),
                f = n("393621"),
                h = n("905999"),
                p = n("660074"),
                m = n("990745"),
                g = n("190986"),
                v = n("721618"),
                C = n("733160"),
                E = n("990864"),
                S = n("274652"),
                _ = n("922744"),
                I = n("155207"),
                y = n("745183"),
                T = n("368121"),
                L = n("944633"),
                A = n("228427"),
                x = n("959097"),
                N = n("656038"),
                R = n("49111");

            function M(e, t) {
                switch (e.type) {
                    case R.ChannelTypes.DM:
                        return l.default;
                    case R.ChannelTypes.GROUP_DM:
                        let n = (0, r.getIsBroadcastingGDM)(e.id);
                        return n ? d.default : I.default;
                    case R.ChannelTypes.GUILD_ANNOUNCEMENT:
                        if (e.isNSFW()) return S.default;
                        if ((0, N.default)(e)) return E.default;
                        else return C.default;
                    case R.ChannelTypes.GUILD_TEXT:
                        if (e.id === (null == t ? void 0 : t.rulesChannelId)) return a.default;
                        if (e.isNSFW()) return o.default;
                        else if ((0, N.default)(e)) return u.default;
                        else return s.default;
                    case R.ChannelTypes.GUILD_FORUM:
                        let M = e.isMediaChannel();
                        if (e.isNSFW()) return M ? v.default : h.default;
                        if ((0, N.default)(e)) return M ? g.default : f.default;
                        else return M ? m.default : c.default;
                    case R.ChannelTypes.GUILD_MEDIA:
                        if (e.isNSFW()) return v.default;
                        if ((0, N.default)(e)) return g.default;
                        else return m.default;
                    case R.ChannelTypes.GUILD_STAGE_VOICE:
                        return A.default;
                    case R.ChannelTypes.GUILD_VOICE:
                        if ((0, N.default)(e)) return L.default;
                        return T.default;
                    case R.ChannelTypes.ANNOUNCEMENT_THREAD:
                    case R.ChannelTypes.PUBLIC_THREAD:
                        if (e.isNSFW()) return _.default;
                        if (e.isForumPost()) return p.default;
                        else return x.default;
                    case R.ChannelTypes.PRIVATE_THREAD:
                        if (e.isNSFW()) return _.default;
                        return y.default;
                    case R.ChannelTypes.GUILD_DIRECTORY:
                        return i.default;
                    default:
                        return null
                }
            }
        },
        390236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("884691");
            let l = r.createContext(void 0);
            var i = l
        },
        689226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleIconData: function() {
                    return c
                },
                replaceRoleIconSourceSize: function() {
                    return f
                },
                isRoleIconAssetUrl: function() {
                    return p
                },
                canGuildUseRoleIcons: function() {
                    return m
                }
            }), n("781738");
            var r = n("867805"),
                l = n("407063"),
                i = n("315102"),
                a = n("773336"),
                s = n("49111");
            let u = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                o = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                d = (0, a.isAndroid)(),
                c = (e, t) => {
                    if (null == e) return null;
                    let n = null != e.unicodeEmoji ? r.default.getByName(r.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: h(e, t),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                f = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, l.getBestMediaProxySize)(t * (0, l.getDevicePixelRatio)()))),
                h = (e, t) => {
                    let {
                        id: n,
                        icon: r
                    } = e;
                    if (null == r) return;
                    if (r.startsWith("data:")) return r;
                    let a = i.SUPPORTS_WEBP ? "webp" : "png",
                        c = "",
                        f = "quality=lossless";
                    return (null != t && (c = "size=" + (0, l.getBestMediaProxySize)(t * (0, l.getDevicePixelRatio)()), f = d ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(u, "/").concat(n, "/").concat(r, ".").concat(a, "?").concat(c).concat(f) : "".concat(o).concat(s.Endpoints.ROLE_ICON(n, r), "?").concat(c)
                },
                p = e => e.startsWith(u) || e.startsWith("".concat(o, "/roles")) && e.includes("/icons/"),
                m = (e, t) => {
                    var n;
                    let r = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return r || e.features.has(s.GuildFeatures.ROLE_ICONS)
                }
        },
        895026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchMemberCounts: function() {
                    return c
                },
                requestMembersForRole: function() {
                    return h
                }
            });
            var r = n("693566"),
                l = n.n(r),
                i = n("872717"),
                a = n("913144"),
                s = n("851387"),
                u = n("36402"),
                o = n("49111");
            async function d(e) {
                try {
                    a.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                        guildId: e
                    });
                    let t = await i.default.get({
                            url: o.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                        }),
                        n = t.body;
                    a.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                        guildId: e,
                        roleMemberCount: n
                    })
                } catch (t) {
                    a.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }
            async function c(e) {
                u.default.shouldFetch(e) && await d(e)
            }
            let f = new l({
                maxAge: 1e4
            });

            function h(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    r = "".concat(e, "-").concat(t);
                if (!n || null == f.get(r)) {
                    var l, a;
                    return f.set(r, !0), l = e, a = t, i.default.get({
                        url: o.Endpoints.GUILD_ROLE_MEMBER_IDS(l, a)
                    }).then(e => (s.default.requestMembersById(l, e.body, !1), e.body.length))
                }
                return Promise.resolve(null)
            }
        },
        36402: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("446674"),
                l = n("913144");
            let i = {},
                a = {};
            class s extends r.default.Store {
                getRoleMemberCount(e) {
                    return null != e ? i[e] : null
                }
                shouldFetch(e) {
                    if (null == e) return !1;
                    let t = a[e];
                    return null == t || Date.now() - t > 12e4
                }
            }
            s.displayName = "GuildRoleMemberCountStore";
            var u = new s(l.default, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        roleMemberCount: n
                    } = e;
                    i[t] = n, a[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        count: r
                    } = e, l = i[t];
                    if (null == l) return !1;
                    l[n] = r
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        added: r
                    } = e, l = i[t];
                    if (null == l || null == l[n]) return !1;
                    let a = Object.keys(r).length;
                    l[n] += a
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, r = i[t];
                    if (null == r || null == r[n]) return !1;
                    r[n] = r[n] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, r = i[t];
                    if (null == r || null == r[n]) return !1;
                    r[n] = Math.max(r[n] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t,
                        role: n
                    } = e;
                    null == i[t] && (i[t] = {}), i[t][n.id] = 0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete i[t.id], delete a[t.id]
                }
            })
        },
        650484: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                },
                PaymentPortalBody: function() {
                    return m
                },
                PaymentPortalFooter: function() {
                    return g
                }
            });
            var r = n("37983"),
                l = n("884691"),
                i = n("414456"),
                a = n.n(i),
                s = n("627445"),
                u = n.n(s),
                o = n("817736"),
                d = n.n(o),
                c = n("77078"),
                f = n("642906"),
                h = n("990893");

            function p(e) {
                var t, n, i, s, o, d;
                let {
                    header: p,
                    isLargeModal: m,
                    stepProps: g
                } = function(e) {
                    let {
                        header: t,
                        isLargeModal: n,
                        ...r
                    } = e;
                    return {
                        header: t,
                        isLargeModal: n,
                        stepProps: r
                    }
                }(e), {
                    step: v,
                    stepConfigs: C,
                    setBodyNode: E,
                    setFooterNode: S,
                    setModalOverlayNode: _,
                    setReadySlideId: I
                } = (0, f.usePaymentContext)(), y = C.find(e => e.key === v);
                l.useEffect(() => {
                    _(null)
                }, [v, _]), u(null != y, "Unknown step for current payment flow.");
                let T = null !== (o = null == y ? void 0 : null === (t = y.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== o && o,
                    L = null == y ? void 0 : null === (n = y.options) || void 0 === n ? void 0 : n.bodyClassName,
                    A = void 0 !== m && m ? h.sliderBodyLarge : null == y ? void 0 : null === (i = y.options) || void 0 === i ? void 0 : i.sliderBodyClassName;
                return (0, r.jsxs)(r.Fragment, {
                    children: [null === (d = null == y ? void 0 : null === (s = y.options) || void 0 === s ? void 0 : s.renderHeader) || void 0 === d || d ? p : null, y.renderStep(g), null == v || T ? null : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(c.ModalContent, {
                            className: a(h.body, L),
                            children: (0, r.jsx)(c.Slides, {
                                activeSlide: v,
                                centered: !1,
                                onSlideReady: e => I(e),
                                children: C.filter(e => null != e.key).map(e => (0, r.jsx)(c.Slide, {
                                    id: e.key,
                                    children: (0, r.jsx)("form", {
                                        className: a(h.sliderBody, A),
                                        ref: e => E(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, r.jsx)("div", {
                            ref: e => S(e)
                        }), (0, r.jsx)("div", {
                            ref: e => _(e)
                        })]
                    })]
                })
            }

            function m(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: n
                } = (0, f.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }

            function g(e) {
                let {
                    children: t
                } = e, {
                    footerNode: n
                } = (0, f.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("65597"),
                i = n("880731");

            function a(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, a = (0, l.default)([i.default], () => i.default.isEnabled({
                    confettiLocation: n
                }));
                return a ? (0, r.jsx)(r.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("884691"),
                l = n("65597"),
                i = n("526887"),
                a = n("880731");

            function s() {
                let {
                    createMultipleConfettiAt: e
                } = r.useContext(i.ConfettiCannonContext), t = (0, l.default)([a.default], () => a.default.getState()), n = r.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), s = r.useMemo(() => ({
                    fire: (r, l, i) => {
                        var a, s;
                        let u = (null == i ? void 0 : i.settings) != null ? {
                                ...t,
                                ...i.settings
                            } : t,
                            o = n(u);
                        e(r, l, o, (null !== (a = null == i ? void 0 : i.count) && void 0 !== a ? a : u.confettiCount) * (null !== (s = null == i ? void 0 : i.countMultiplier) && void 0 !== s ? s : 1), {
                            sprite: null == i ? void 0 : i.sprite
                        })
                    }
                }), [e, n, t]);
                return s
            }
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return p
                },
                maybeFetchPremiumLikelihood: function() {
                    return g
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return v
                }
            });
            var r = n("884691"),
                l = n("65597"),
                i = n("872717"),
                a = n("913144"),
                s = n("775433"),
                u = n("697218"),
                o = n("10514"),
                d = n("764364"),
                c = n("676572"),
                f = n("646718"),
                h = n("49111");
            let p = "nonSubscriber";
            async function m() {
                try {
                    a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await i.default.get({
                        url: h.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [p]: e.non_subscriber,
                                [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
                                [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function g(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), r = c.default.shouldFetchPremiumLikelihood(), l = u.default.getCurrentUser();
                C(l, r, t, n)
            }

            function v(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), i = (0, l.default)([c.default], () => c.default.shouldFetchPremiumLikelihood()), a = (0, l.default)([u.default], () => u.default.getCurrentUser());
                r.useEffect(() => {
                    C(a, i, t, n)
                }, [a, i, t, n])
            }

            function C(e, t, n, r) {
                null != e && !(0, d.isPremium)(e) && n && (t && m(), r && (!o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, s.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, s.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("446674"),
                l = n("913144");
            let i = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                a = i;
            class s extends r.default.Store {
                initialize() {
                    a = i
                }
                getState() {
                    return a
                }
                shouldFetchPremiumLikelihood() {
                    return !a.isFetching && !a.fetched
                }
            }
            s.displayName = "UserPremiumLikelihoodStore";
            var u = new s(l.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    a.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    a.premiumLikelihood = t, a.fetched = !0, a.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    a.isFetching = !1
                },
                LOGOUT: function() {
                    a.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("862205");
            let l = (0, r.createExperiment)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            });
            var i = l
        },
        520497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("49111");

            function l(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: n
                } = window.GLOBAL_ENV;
                return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(r.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(r.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        707443: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTrackThreadBrowserTab: function() {
                    return E
                },
                useActiveThreads: function() {
                    return S
                },
                useActiveGuildThreads: function() {
                    return _
                },
                useArchivedThreads: function() {
                    return I
                }
            }), n("222007");
            var r = n("884691"),
                l = n("917351"),
                i = n.n(l),
                a = n("446674"),
                s = n("404607"),
                u = n("42203"),
                o = n("957255"),
                d = n("660478"),
                c = n("449008"),
                f = n("299039"),
                h = n("689275"),
                p = n("821343"),
                m = n("755624"),
                g = n("263024"),
                v = n("487269"),
                C = n("843455");

            function E() {
                r.useEffect(() => {
                    (0, v.trackThreadBrowserTab)()
                }, [])
            }

            function S(e) {
                let t = function(e) {
                        let t = (0, a.useStateFromStoresArray)([o.default, h.default, u.default], () => i(h.default.getThreadsForParent(e.guild_id, e.id)).values().map(e => {
                            let {
                                id: t
                            } = e;
                            return u.default.getChannel(t)
                        }).filter(c.isNotNullish).filter(e => o.default.can(C.Permissions.VIEW_CHANNEL, e)).map(e => e.id).value(), [e.guild_id, e.id]);
                        return r.useMemo(() => i(t).sort((e, t) => f.default.compare(d.default.lastMessageId(e), d.default.lastMessageId(t))).reverse().value(), [t])
                    }(e),
                    [n, l] = (0, a.useStateFromStores)([m.default], () => i.partition(t, e => m.default.hasJoined(e)), [t], a.statesWillNeverBeEqual);
                return {
                    joinedThreadIds: n,
                    unjoinedThreadIds: l
                }
            }

            function _(e) {
                let t = (0, a.useStateFromStoresArray)([o.default, h.default, u.default], () => i(h.default.getThreadsForGuild(e)).values().map(e => i.values(e)).flatten().map(e => {
                    let {
                        id: t
                    } = e;
                    return u.default.getChannel(t)
                }).filter(c.isNotNullish).filter(e => o.default.can(C.Permissions.VIEW_CHANNEL, e)).map(e => e.id).value(), [e]);
                return r.useMemo(() => i(t).sort((e, t) => f.default.compare(d.default.lastMessageId(e), d.default.lastMessageId(t))).reverse().value(), [t])
            }

            function I(e, t, n) {
                let {
                    canLoadMore: l,
                    loading: d,
                    nextOffset: c,
                    isInitialLoad: f
                } = (0, a.useStateFromStoresObject)([p.default], () => ({
                    loading: p.default.isLoading(e.id, t, n),
                    isInitialLoad: p.default.isInitialLoad,
                    canLoadMore: p.default.canLoadMore,
                    nextOffset: p.default.nextOffset
                })), h = r.useCallback(() => {
                    o.default.can(C.Permissions.READ_MESSAGE_HISTORY, e) && g.default.loadArchivedThreads(e.guild_id, e.id, t, n, c)
                }, [e, t, n, c]);
                r.useEffect(() => {
                    f && h()
                }, [e.id, t, n, f]), r.useEffect(() => {
                    s.default.resort(e.id)
                }, [e.id]);
                let m = (0, a.useStateFromStoresArray)([p.default, u.default, o.default], () => i(p.default.getThreads(e.id, t, n)).filter(e => {
                    let t = u.default.getChannel(e);
                    return null != t && o.default.can(C.Permissions.VIEW_CHANNEL, t)
                }).value());
                return {
                    threadIds: m,
                    canLoadMore: l,
                    loading: d || f,
                    loadMore: h
                }
            }
        },
        557872: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("37983"),
                l = n("884691"),
                i = n("414456"),
                a = n.n(i),
                s = n("77078"),
                u = n("707443"),
                o = n("913979"),
                d = n("321797");

            function c(e) {
                let {
                    guildId: t,
                    goToThread: n
                } = e, i = (0, u.useActiveGuildThreads)(t), c = l.useCallback(e => {
                    let t = i[e.row];
                    return (0, r.jsx)(o.default, {
                        threadId: t,
                        goToThread: n,
                        showChannelName: !0
                    }, "".concat(e.section, "-").concat(e.row))
                }, [i, n]);
                return (0, r.jsx)(s.List, {
                    className: a(d.list, d.activeThreadsList),
                    fade: !0,
                    sections: [i.length],
                    renderSection: () => null,
                    sectionHeight: 0,
                    rowHeight: 80,
                    renderRow: c,
                    chunkSize: 20
                })
            }
        },
        469755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("77078"),
                i = n("945330"),
                a = n("959097"),
                s = n("557872"),
                u = n("967241"),
                o = n("648564"),
                d = n("782340"),
                c = n("728360");

            function f(e) {
                let {
                    guildId: t,
                    onClose: n,
                    transitionState: f
                } = e;
                return (0, r.jsx)(l.ModalRoot, {
                    className: c.modal,
                    transitionState: f,
                    "aria-label": d.default.Messages.THREADS,
                    size: l.ModalSize.DYNAMIC,
                    children: (0, r.jsxs)("div", {
                        className: c.container,
                        children: [(0, r.jsxs)("div", {
                            className: c.header,
                            children: [(0, r.jsx)(a.default, {
                                className: c.threadIcon
                            }), (0, r.jsx)(l.Heading, {
                                variant: "heading-md/semibold",
                                className: c.title,
                                children: d.default.Messages.ALL_ACTIVE_THREADS
                            }), (0, r.jsx)("div", {
                                className: c.spacer
                            }), (0, r.jsx)(l.Clickable, {
                                className: c.closeIcon,
                                onClick: n,
                                "aria-label": d.default.Messages.CLOSE,
                                children: (0, r.jsx)(i.default, {})
                            })]
                        }), (0, r.jsx)(s.default, {
                            guildId: t,
                            goToThread: (e, t) => {
                                n(), (0, u.openThreadSidebarForViewing)(e, !t, o.OpenThreadAnalyticsLocations.GUILD_ACTIVE_THREADS_MODAL)
                            }
                        })]
                    })
                })
            }
        },
        913979: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var r = n("37983"),
                l = n("884691"),
                i = n("446674"),
                a = n("77078"),
                s = n("272030"),
                u = n("42203"),
                o = n("124948"),
                d = n("697218"),
                c = n("811305"),
                f = n("800843"),
                h = n("442184"),
                p = n("648564"),
                m = n("140407"),
                g = l.memo(function(e) {
                    let {
                        threadId: t,
                        goToThread: l,
                        showChannelName: o
                    } = e, d = (0, i.useStateFromStores)([u.default], () => u.default.getChannel(t)), c = (0, i.useStateFromStores)([u.default], () => u.default.getChannel(d.parent_id));
                    return (0, r.jsxs)(a.Clickable, {
                        className: m.container,
                        onClick: e => l(d, e.shiftKey),
                        onContextMenu: e => (0, s.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("994827").then(n.bind(n, "994827"));
                            return t => (0, r.jsx)(e, {
                                ...t,
                                channel: d
                            })
                        }),
                        children: [(0, r.jsxs)("div", {
                            className: m.left,
                            children: [(0, r.jsxs)(a.Heading, {
                                className: m.threadNameLine,
                                variant: "heading-md/semibold",
                                children: [(0, r.jsx)("span", {
                                    className: m.threadName,
                                    children: d.name
                                }), o && null != c ? (0, r.jsx)("span", {
                                    className: m.parentName,
                                    children: "#".concat(c.name)
                                }) : null]
                            }), (0, h.default)(d)]
                        }), (0, r.jsx)(v, {
                            channel: d
                        })]
                    })
                });

            function v(e) {
                let {
                    channel: t
                } = e, n = (0, i.useStateFromStores)([f.default], () => {
                    var e;
                    return null !== (e = f.default.getMemberIdsPreview(t.id)) && void 0 !== e ? e : []
                }), a = (0, i.useStateFromStores)([f.default], () => {
                    var e;
                    return null !== (e = f.default.getMemberCount(t.id)) && void 0 !== e ? e : 0
                }), s = (0, i.useStateFromStoresArray)([d.default], () => n.map(e => d.default.getUser(e)));
                return (l.useEffect(() => {
                    n.filter((e, t) => null == s[t]).forEach(e => {
                        o.default.requestMember(t.guild_id, e)
                    })
                }, []), 0 === n.length) ? null : (0, r.jsx)(c.default, {
                    className: m.facepile,
                    showDefaultAvatarsForNullUsers: !0,
                    guildId: t.guild_id,
                    users: s,
                    count: a,
                    max: p.MAX_THREAD_MEMBERS_PREVIEW
                })
            }
        },
        442184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var r = n("37983"),
                l = n("884691"),
                i = n("446674"),
                a = n("77078"),
                s = n("308289"),
                u = n("750560"),
                o = n("619335"),
                d = n("95045"),
                c = n("574073"),
                f = n("26989"),
                h = n("660478"),
                p = n("27618"),
                m = n("697218"),
                g = n("959097"),
                v = n("93427"),
                C = n("299039"),
                E = n("158998"),
                S = n("610730"),
                _ = n("487269"),
                I = n("719347"),
                y = n("782340"),
                T = n("140407");

            function L(e) {
                return e.isActiveThread() ? (0, r.jsx)(A, {
                    channel: e
                }) : (0, r.jsx)(R, {
                    channel: e
                })
            }

            function A(e) {
                let {
                    channel: t
                } = e, n = (0, i.useStateFromStores)([S.default], () => S.default.getMostRecentMessage(t.id));
                return null == n ? (0, r.jsx)(x, {
                    channel: t
                }) : (0, r.jsx)(N, {
                    channel: t,
                    message: n
                })
            }

            function x(e) {
                let {
                    channel: t
                } = e, n = (0, _.useLastMessageTimestamp)(t);
                return (0, r.jsxs)(a.Text, {
                    className: T.subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: [y.default.Messages.THREAD_BROWSER_NO_RECENT_MESSAGES, "\xa0 • \xa0", (0, _.getTimestampString)(n)]
                })
            }

            function N(e) {
                let {
                    channel: t,
                    message: n
                } = e;
                (0, u.useSubscribeGuildMembers)({
                    [t.guild_id]: [n.author.id]
                });
                let o = (0, i.useStateFromStores)([m.default], () => {
                        var e;
                        return null !== (e = m.default.getUser(n.author.id)) && void 0 !== e ? e : n.author
                    }),
                    {
                        nick: f,
                        colorString: h
                    } = (0, c.default)(n),
                    g = (0, i.useStateFromStores)([p.default], () => p.default.isBlocked(n.author.id)),
                    E = l.useMemo(() => {
                        let e = null != n.content && "" !== n.content ? (0, d.default)(n, {
                                formatInline: !0
                            }).content : null,
                            {
                                contentPlaceholder: t,
                                renderedContent: l,
                                icon: i
                            } = (0, v.renderSingleLineMessage)(n, e, g, T.messageContent, {
                                iconClass: T.messageContentIcon,
                                iconSize: I.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
                            });
                        return (0, r.jsxs)(r.Fragment, {
                            children: [null != l ? l : (0, r.jsx)("span", {
                                children: t
                            }), i]
                        })
                    }, [n, g]);
                return (0, r.jsxs)(a.Text, {
                    className: T.subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: [(0, r.jsx)(s.default, {
                        className: T.avatar,
                        user: o,
                        size: a.AvatarSizes.SIZE_16
                    }), (0, r.jsx)(a.NameWithRole, {
                        name: f,
                        color: h,
                        className: T.authorName
                    }), ":\xa0", E, "\xa0 • \xa0", (0, _.getTimestampString)(C.default.extractTimestamp(n.id))]
                })
            }

            function R(e) {
                var t, n, l;
                let {
                    channel: d
                } = e, c = (0, i.useStateFromStores)([h.default], () => h.default.lastMessageId(d.id)), p = null == c ? new Date(null !== (n = null === (t = d.threadMetadata) || void 0 === t ? void 0 : t.archiveTimestamp) && void 0 !== n ? n : Date.now()).getTime() : C.default.extractTimestamp(c);
                (0, u.useSubscribeGuildMembers)({
                    [d.guild_id]: [d.ownerId]
                });
                let v = (0, i.useStateFromStores)([m.default], () => m.default.getUser(d.ownerId)),
                    S = (0, i.useStateFromStores)([f.default], () => f.default.getMember(d.guild_id, d.ownerId)),
                    I = null !== (l = (0, o.default)(d)) && void 0 !== l ? l : g.default;
                return (0, r.jsx)(a.Text, {
                    className: T.subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: null == v ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: T.noAvatarIcon,
                            children: (0, r.jsx)(I, {
                                width: 10,
                                height: 10
                            })
                        }), y.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
                            time: (0, _.getTimestampString)(p)
                        })]
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(s.default, {
                            className: T.avatar,
                            user: v,
                            size: a.AvatarSizes.SIZE_16
                        }), y.default.Messages.THREAD_BROWSER_STARTED_BY.format({
                            authorHook(e, t) {
                                var n, l;
                                return (0, r.jsx)(a.NameWithRole, {
                                    className: T.startedByName,
                                    color: null !== (n = null == S ? void 0 : S.colorString) && void 0 !== n ? n : void 0,
                                    name: null !== (l = null == S ? void 0 : S.nick) && void 0 !== l ? l : E.default.getName(v)
                                }, t)
                            }
                        }), (0, r.jsx)("span", {
                            className: T.bullet,
                            children: "•"
                        }), y.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
                            time: (0, _.getTimestampString)(p)
                        })]
                    })
                })
            }
        },
        967241: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openThreadSidebarForViewing: function() {
                    return I
                },
                openThreadSidebarForCreating: function() {
                    return y
                },
                closeThreadSidebar: function() {
                    return T
                },
                closeAndClearThreadSidebar: function() {
                    return L
                }
            });
            var r = n("627445"),
                l = n.n(r),
                i = n("917351"),
                a = n.n(i),
                s = n("913144"),
                u = n("295426"),
                o = n("244201"),
                d = n("716241"),
                c = n("565298"),
                f = n("393414"),
                h = n("144491"),
                p = n("845579"),
                m = n("474643"),
                g = n("18494"),
                v = n("800762"),
                C = n("659500"),
                E = n("648564"),
                S = n("49111"),
                _ = n("724210");

            function I(e, t, n) {
                o.MainWindowDispatch.dispatch(S.ComponentActions.POPOUT_CLOSE);
                let r = !a.isEmpty(v.default.getVoiceStatesForChannel(e.id));
                if (t || !p.UseThreadSidebar.getSetting() || __OVERLAY__ || r) {
                    s.default.dispatch({
                        type: "SIDEBAR_CLOSE",
                        baseChannelId: e.parent_id
                    }), null != n ? (0, h.transitionToThread)(e, n) : (0, h.transitionToChannel)(e.id);
                    return
                }
                l(null != e.parent_id, "all threads must have parents");
                let i = g.default.getChannelId();
                e.parent_id !== i && !(0, _.isGuildHomeChannel)(i) && (0, h.transitionToChannel)(e.parent_id), (0, f.transitionTo)(S.Routes.CHANNEL_THREAD_VIEW((0, c.getGuildIdForGenericRedirect)(e), (0, _.isGuildHomeChannel)(i) ? _.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? E.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
                    C.ComponentDispatch.dispatch(S.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: e.id
                    })
                }, 0)
            }

            function y(e, t, n) {
                l(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), l(!__OVERLAY__, "Cannot create threads in the overlay."), (0, d.trackWithMetadata)(S.AnalyticEvents.THREAD_CREATION_STARTED, {
                    location: n,
                    channel_id: e.id,
                    guild_id: e.guild_id
                }), o.MainWindowDispatch.dispatch(S.ComponentActions.POPOUT_CLOSE), g.default.getChannelId() !== e.id && (0, h.transitionToChannel)(e.id);
                let r = m.default.getDraft(e.id, m.DraftType.FirstThreadMessage);
                if ("" === r) {
                    let t = m.default.getDraft(e.id, m.DraftType.ChannelMessage);
                    u.default.saveDraft(e.id, "", m.DraftType.ChannelMessage), u.default.saveDraft(e.id, t, m.DraftType.FirstThreadMessage)
                }
                setTimeout(() => {
                    s.default.dispatch({
                        type: "SIDEBAR_CREATE_THREAD",
                        parentChannelId: e.id,
                        parentMessageId: null == t ? void 0 : t.id,
                        location: n
                    })
                }, 0)
            }

            function T(e, t) {
                (0, f.transitionTo)(S.Routes.CHANNEL(e, (0, _.isGuildHomeChannel)(t) ? _.StaticChannelRoute.GUILD_HOME : t)), s.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: t
                })
            }

            function L(e) {
                s.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: e
                }), s.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: m.DraftType.FirstThreadMessage
                }), s.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: m.DraftType.ThreadSettings
                })
            }
        },
        37785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983"),
                l = n("884691"),
                i = n("77078"),
                a = n("393414"),
                s = n("49111"),
                u = l.forwardRef(function(e, t) {
                    let {
                        href: n,
                        children: u,
                        onClick: o,
                        onKeyPress: d,
                        focusProps: c,
                        ...f
                    } = e, h = l.useCallback(e => {
                        !e.repeat && ((e.charCode === s.KeyboardKeys.SPACE || e.charCode === s.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, a.transitionTo)(n), null == o || o()), null == d || d(e))
                    }, [n, d, o]), p = l.useCallback(e => {
                        !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, a.transitionTo)(n), null == o || o())
                    }, [n, o]), m = (0, r.jsx)("a", {
                        ref: t,
                        href: n,
                        onClick: p,
                        onKeyPress: h,
                        ...f,
                        children: u
                    });
                    return (0, r.jsx)(i.FocusRing, {
                        ...c,
                        children: m
                    })
                })
        },
        754474: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BotTypes: function() {
                    return s.BotTagTypes
                },
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("414456"),
                i = n.n(l),
                a = n("79798"),
                s = n("988268"),
                u = n("888770"),
                o = e => {
                    let {
                        name: t,
                        discriminator: n,
                        invertBotTagColor: l,
                        nameColor: s,
                        className: o,
                        botType: d,
                        usernameClass: c,
                        discriminatorClass: f,
                        botClass: h,
                        botVerified: p = !1,
                        style: m,
                        useRemSizes: g = !1,
                        usernameIcon: v
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: i(o, u.nameTag),
                        style: m,
                        children: [(0, r.jsxs)("span", {
                            className: i(u.username, c),
                            style: null != s ? {
                                color: s
                            } : void 0,
                            children: [v, t]
                        }), null != n ? (0, r.jsxs)("span", {
                            className: null != f ? f : void 0,
                            children: ["#", n]
                        }) : null, null != d ? (0, r.jsx)(a.default, {
                            type: d,
                            invertColor: l,
                            className: i(h, u.bot),
                            verified: p,
                            useRemSizes: g
                        }) : null]
                    })
                }
        },
        191814: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");

            function l(e) {
                let {
                    size: t,
                    horizontal: n = !1
                } = e, l = n ? t : 1, i = n ? 1 : t;
                return (0, r.jsx)("span", {
                    style: {
                        display: "block",
                        width: l,
                        minWidth: l,
                        height: i,
                        minHeight: i
                    }
                })
            }
            n("884691")
        },
        62843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MessagesInteractionContext: function() {
                    return l
                }
            });
            var r = n("884691");
            let l = r.createContext({
                disableInteractions: !1,
                disableAnimations: !1
            })
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("469563"),
                i = n("926001"),
                a = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: i,
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: i,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, i.SlashBoxIcon)
        },
        461380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("414456"),
                i = n.n(l),
                a = n("384737"),
                s = n("448052"),
                u = n("748802"),
                o = n("260792"),
                d = n("77078"),
                c = n("75196"),
                f = n("4177");
            let h = {
                    UP: f.directionUp,
                    RIGHT: f.directionRight,
                    DOWN: f.directionDown,
                    LEFT: f.directionLeft
                },
                p = e => {
                    let {
                        direction: t = h.DOWN,
                        width: n = 24,
                        height: l = 24,
                        color: p = "currentColor",
                        transition: m = f.transition,
                        className: g,
                        foreground: v,
                        expanded: C,
                        ...E
                    } = e, {
                        enabled: S
                    } = (0, d.useRedesignIconContext)(), _ = t;
                    if (!0 === C ? _ = h.DOWN : !1 === C && (_ = h.RIGHT), S) {
                        let e = {
                            [h.UP]: o.ChevronSmallUpIcon,
                            [h.DOWN]: a.ChevronSmallDownIcon,
                            [h.LEFT]: s.ChevronSmallLeftIcon,
                            [h.RIGHT]: u.ChevronSmallRightIcon
                        } [_];
                        return (0, r.jsx)(e, {
                            ...E,
                            className: g,
                            width: n,
                            height: l,
                            color: p,
                            colorClass: v
                        })
                    }
                    return (0, r.jsx)("svg", {
                        className: i(g, m, _),
                        width: n,
                        height: l,
                        viewBox: "0 0 24 24",
                        ...(0, c.default)(E),
                        children: (0, r.jsx)("path", {
                            className: v,
                            fill: "none",
                            stroke: p,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            p.Directions = h;
            var m = p
        },
        774223: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("75196");

            function i(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = "currentColor",
                    className: a,
                    foreground: s,
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(u),
                    className: a,
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: s,
                        fill: i,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 11C2 6.02944 6.02944 2 11 2H13C17.9706 2 22 6.02944 22 11V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V11ZM5.88 5.82497C4.71048 6.55593 4 7.83781 4 9.21697V18.7192C4 19.3698 4.61139 19.8471 5.24254 19.6893L10.9558 18.261C11.5695 18.1076 12 17.5562 12 16.9236V9.21697C12 6.07522 8.5442 4.15985 5.88 5.82497ZM10 12C10 11.4477 9.55228 11 9 11C8.44772 11 8 11.4477 8 12V14C8 14.5523 8.44772 15 9 15C9.55228 15 10 14.5523 10 14V12ZM17.6832 9.47564C17.4485 8.84145 16.5515 8.84145 16.3168 9.47564L16.1387 9.95707C15.9361 10.5045 15.5045 10.9361 14.9571 11.1387L14.4756 11.3168C13.8415 11.5515 13.8415 12.4485 14.4756 12.6832L14.9571 12.8613C15.5045 13.0639 15.9361 13.4955 16.1387 14.0429L16.3168 14.5244C16.5515 15.1585 17.4485 15.1585 17.6832 14.5244L17.8613 14.0429C18.0639 13.4955 18.4955 13.0639 19.0429 12.8613L19.5244 12.6832C20.1585 12.4485 20.1585 11.5515 19.5244 11.3168L19.0429 11.1387C18.4955 10.9361 18.0639 10.5045 17.8613 9.95707L17.6832 9.47564ZM14.1584 5.23782C14.2758 4.92073 14.7242 4.92073 14.8416 5.23782C14.9994 5.66433 15.3357 6.0006 15.7622 6.15842C16.0793 6.27576 16.0793 6.72424 15.7622 6.84158C15.3357 6.9994 14.9994 7.33567 14.8416 7.76218C14.7242 8.07927 14.2758 8.07927 14.1584 7.76218C14.0006 7.33567 13.6643 6.9994 13.2378 6.84158C12.9207 6.72424 12.9207 6.27576 13.2378 6.15842C13.6643 6.0006 14.0006 5.66433 14.1584 5.23782ZM18.8416 16.2378C18.7242 15.9207 18.2758 15.9207 18.1584 16.2378C18.0006 16.6643 17.6643 17.0006 17.2378 17.1584C16.9207 17.2758 16.9207 17.7242 17.2378 17.8416C17.6643 17.9994 18.0006 18.3357 18.1584 18.7622C18.2758 19.0793 18.7242 19.0793 18.8416 18.7622C18.9994 18.3357 19.3357 17.9994 19.7622 17.8416C20.0793 17.7242 20.0793 17.2758 19.7622 17.1584C19.3357 17.0006 18.9994 16.6643 18.8416 16.2378Z"
                    })
                })
            }
        },
        867544: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("669491"),
                i = n("469563"),
                a = n("163725"),
                s = n("75196"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foregroundColor: a = l.default.unsafe_rawColors.RED_400.css,
                        foreground: u,
                        background: o,
                        ...d
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, s.default)(d),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, r.jsx)("rect", {
                            fill: a,
                            className: u,
                            x: "2",
                            y: "21.2154",
                            width: "26",
                            height: "2",
                            transform: "rotate(-45 2 21.2154)"
                        }), (0, r.jsx)("path", {
                            fill: i,
                            className: o,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z"
                        })]
                    })
                }, a.EyeSlashIcon)
        },
        95689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("469563"),
                i = n("578478"),
                a = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: i,
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: i,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: l
                        })
                    })
                }, i.ImageIcon)
        },
        155207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("469563"),
                i = n("811513"),
                a = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: i,
                        ...s
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, r.jsx)("path", {
                            className: i,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, r.jsx)("path", {
                            className: i,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, r.jsx)("path", {
                            className: i,
                            fill: l,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, r.jsx)("path", {
                            className: i,
                            fill: l,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, i.GroupIcon)
        },
        132755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("469563"),
                i = n("876726"),
                a = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: i,
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, r.jsx)("path", {
                            className: i,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: l
                        })
                    })
                }, i.PlayIcon)
        },
        811305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Sizes: function() {
                    return C
                },
                default: function() {
                    return _
                }
            }), n("424973"), n("222007");
            var r = n("37983"),
                l = n("884691"),
                i = n("414456"),
                a = n.n(i),
                s = n("627445"),
                u = n.n(s),
                o = n("77078"),
                d = n("506885"),
                c = n("981601"),
                f = n("766274"),
                h = n("697218"),
                p = n("368121"),
                m = n("523096"),
                g = n("587974"),
                v = n("494101");
            let C = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function E(e, t) {
                let n = e instanceof f.default ? e : null != e ? e.user : null;
                return null != n ? n.id : "user-".concat(t)
            }
            class S extends l.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: n = this.defaultRenderUser,
                        size: l,
                        extraDetail: i
                    } = this.props, a = [], s = e.length === t ? e.length : t - 1, u = this.renderMoreUsers(s), o = 0;
                    for (; o < s && o < e.length;) {
                        var d;
                        let t = null == u && null == i && o === e.length - 1,
                            s = n(e[o], t, o);
                        a.push(t ? (0, r.jsx)("div", {
                            className: v.avatarContainer,
                            children: s
                        }, E(null !== (d = e[o]) && void 0 !== d ? d : null, o)) : (0, r.jsx)(g.default, {
                            className: v.avatarContainerMasked,
                            height: l,
                            width: l,
                            mask: g.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: s
                        }, E(e[o], o))), o++
                    }
                    return null != i ? a.push(i) : null != u && a.push(u), a
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: i,
                        renderMoreUsers: a,
                        users: s
                    } = this.props, u = Math.min(e, s.length);
                    if (!i) {
                        if (null != n) {
                            if (n >= t) return (0, r.jsx)(l.Fragment, {
                                children: a("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > s.length) {
                                let e = n - s.length;
                                return (0, r.jsx)(l.Fragment, {
                                    children: a("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (u < s.length) {
                            let e = Math.min(s.length - u, 99);
                            return (0, r.jsx)(l.Fragment, {
                                children: a("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, r.jsx)(p.default, {
                        foreground: v.foreground,
                        className: v.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: n,
                        guildId: l,
                        showUserPopout: i,
                        useFallbackUserForPopout: s
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, p = n.find(e => null != e && e.id === f), m = s && null == h.default.getUser(f);
                    return (0, r.jsx)(o.Popout, {
                        position: "right",
                        preload: null == p ? void 0 : () => (0, d.default)(p.id, p.getAvatarURL(l, 80), {
                            guildId: l
                        }),
                        shouldShow: !0 === i && null != f,
                        fixed: !0,
                        renderPopout: e => (u(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, r.jsx)(c.default, {
                            ...this.props,
                            user: m && null != p ? p : void 0,
                            ...e,
                            userId: f,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: n => (0, r.jsxs)("div", {
                            className: a(e, v.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C.SIZE_24;
                                switch (e) {
                                    case C.SIZE_16:
                                        return v.size16;
                                    case C.SIZE_24:
                                        return v.size24;
                                    case C.SIZE_32:
                                        return v.size32;
                                    case C.SIZE_56:
                                        return v.size56;
                                    default:
                                        return v.size24
                                }
                            }(t)),
                            ref: this._ref,
                            ...n,
                            children: [this.renderIcon(), this.renderUsers()]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        popoutUserId: null
                    }, this._ref = l.createRef(), this.defaultRenderUser = (e, t, n) => {
                        let {
                            showUserPopout: l,
                            guildId: i,
                            size: a
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, r.jsx)("div", {
                                className: v.emptyUser
                            });
                            {
                                let e = (null != n ? n : 0) % m.default.DEFAULT_AVATARS.length,
                                    t = m.default.DEFAULT_AVATARS[e];
                                return (0, r.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: v.avatar
                                })
                            }
                        }
                        let s = (0, r.jsx)("img", {
                            src: e.getAvatarURL(i, a),
                            alt: e.username,
                            className: v.avatar
                        }, e.id);
                        return l ? (0, r.jsx)(o.Clickable, {
                            className: v.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: s
                        }, e.id) : s
                    }
                }
            }
            S.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, r.jsx)("div", {
                        className: v.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: C.SIZE_24
            };
            var _ = S
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return a
                },
                copy: function() {
                    return s
                }
            }), n("70102");
            var r = n("281071"),
                l = n("773336"),
                i = n("50885");
            let a = (() => {
                if (l.isPlatformEmbedded) return null != i.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function s(e) {
                return !!a && (l.isPlatformEmbedded ? (i.default.copy(e), !0) : r.copy(e))
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return s
                }
            });
            var r = n("884691"),
                l = n("446674"),
                i = n("244201"),
                a = n("471671");

            function s() {
                let {
                    windowId: e
                } = r.useContext(i.default);
                return (0, l.useStateFromStores)([a.default], () => a.default.isFocused(e), [e])
            }
        },
        281071: function(e, t, n) {
            "use strict";

            function r(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    r = window.getSelection(),
                    l = document.createElement("textarea");
                l.value = e, l.contentEditable = "true", l.style.visibility = "none", t.appendChild(l), n.selectNodeContents(l), null == r || r.removeAllRanges(), null == r || r.addRange(n), l.focus(), l.setSelectionRange(0, e.length);
                let i = document.execCommand("copy");
                return t.removeChild(l), i
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return r
                }
            }), n("70102")
        }
    }
]);