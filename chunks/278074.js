n.d(t, {
    EQ: function () {
        return J;
    },
    P: function () {
        return X;
    }
});
let r = Symbol.for('@ts-pattern/matcher'),
    i = Symbol.for('@ts-pattern/isVariadic'),
    a = '@ts-pattern/anonymous-select-key',
    o = (e) => !!(e && 'object' == typeof e),
    s = (e) => e && !!e[r],
    l = (e, t, n) => {
        if (s(e)) {
            let { matched: i, selections: a } = e[r]().match(t);
            return i && a && Object.keys(a).forEach((e) => n(e, a[e])), i;
        }
        if (o(e)) {
            if (!o(t)) return !1;
            if (Array.isArray(e)) {
                if (!Array.isArray(t)) return !1;
                let r = [],
                    a = [],
                    o = [];
                for (let t of e.keys()) {
                    let n = e[t];
                    s(n) && n[i] ? o.push(n) : o.length ? a.push(n) : r.push(n);
                }
                if (o.length) {
                    if (o.length > 1) throw Error('Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.');
                    if (t.length < r.length + a.length) return !1;
                    let e = t.slice(0, r.length),
                        i = 0 === a.length ? [] : t.slice(-a.length),
                        s = t.slice(r.length, 0 === a.length ? 1 / 0 : -a.length);
                    return r.every((t, r) => l(t, e[r], n)) && a.every((e, t) => l(e, i[t], n)) && (0 === o.length || l(o[0], s, n));
                }
                return e.length === t.length && e.every((e, r) => l(e, t[r], n));
            }
            return Object.keys(e).every((i) => {
                var a;
                let o = e[i];
                return (i in t || (s((a = o)) && 'optional' === a[r]().matcherType)) && l(o, t[i], n);
            });
        }
        return Object.is(t, e);
    },
    u = (e) => {
        var t, n, i;
        return o(e) ? (s(e) ? (null != (t = null == (n = (i = e[r]()).getSelectionKeys) ? void 0 : n.call(i)) ? t : []) : Array.isArray(e) ? c(e, u) : c(Object.values(e), u)) : [];
    },
    c = (e, t) => e.reduce((e, n) => e.concat(t(n)), []);
function d(...e) {
    if (1 === e.length) {
        let [t] = e;
        return (e) => l(t, e, () => {});
    }
    if (2 === e.length) {
        let [t, n] = e;
        return l(t, n, () => {});
    }
    throw Error(`isMatching wasn't given the right number of arguments: expected 1 or 2, received ${e.length}.`);
}
function _(e) {
    return Object.assign(e, {
        optional: () => f(e),
        and: (t) => m(e, t),
        or: (t) => I(e, t),
        select: (t) => (void 0 === t ? g(e) : g(t, e))
    });
}
function E(e) {
    let t;
    return Object.assign(
        Object.assign((t = e), {
            *[Symbol.iterator]() {
                yield Object.assign(t, { [i]: !0 });
            }
        }),
        {
            optional: () => E(f(e)),
            select: (t) => E(void 0 === t ? g(e) : g(t, e))
        }
    );
}
function f(e) {
    return _({
        [r]: () => ({
            match: (t) => {
                let n = {},
                    r = (e, t) => {
                        n[e] = t;
                    };
                return void 0 === t
                    ? (u(e).forEach((e) => r(e, void 0)),
                      {
                          matched: !0,
                          selections: n
                      })
                    : {
                          matched: l(e, t, r),
                          selections: n
                      };
            },
            getSelectionKeys: () => u(e),
            matcherType: 'optional'
        })
    });
}
let h = (e, t) => {
        for (let n of e) if (!t(n)) return !1;
        return !0;
    },
    p = (e, t) => {
        for (let [n, r] of e.entries()) if (!t(r, n)) return !1;
        return !0;
    };
function m(...e) {
    return _({
        [r]: () => ({
            match: (t) => {
                let n = {},
                    r = (e, t) => {
                        n[e] = t;
                    };
                return {
                    matched: e.every((e) => l(e, t, r)),
                    selections: n
                };
            },
            getSelectionKeys: () => c(e, u),
            matcherType: 'and'
        })
    });
}
function I(...e) {
    return _({
        [r]: () => ({
            match: (t) => {
                let n = {},
                    r = (e, t) => {
                        n[e] = t;
                    };
                return (
                    c(e, u).forEach((e) => r(e, void 0)),
                    {
                        matched: e.some((e) => l(e, t, r)),
                        selections: n
                    }
                );
            },
            getSelectionKeys: () => c(e, u),
            matcherType: 'or'
        })
    });
}
function T(e) {
    return { [r]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
}
function g(...e) {
    let t = 'string' == typeof e[0] ? e[0] : void 0,
        n = 2 === e.length ? e[1] : 'string' == typeof e[0] ? void 0 : e[0];
    return _({
        [r]: () => ({
            match: (e) => {
                let r = { [null != t ? t : a]: e };
                return {
                    matched:
                        void 0 === n ||
                        l(n, e, (e, t) => {
                            r[e] = t;
                        }),
                    selections: r
                };
            },
            getSelectionKeys: () => [null != t ? t : a].concat(void 0 === n ? [] : u(n))
        })
    });
}
function S(e) {
    return 'number' == typeof e;
}
function A(e) {
    return 'string' == typeof e;
}
function v(e) {
    return 'bigint' == typeof e;
}
let N = _(
        T(function (e) {
            return !0;
        })
    ),
    O = N,
    R = (e) =>
        Object.assign(_(e), {
            startsWith: (t) => {
                var n;
                return R(m(e, ((n = t), T((e) => A(e) && e.startsWith(n)))));
            },
            endsWith: (t) => {
                var n;
                return R(m(e, ((n = t), T((e) => A(e) && e.endsWith(n)))));
            },
            minLength: (t) => {
                let n;
                return R(m(e, ((n = t), T((e) => A(e) && e.length >= n))));
            },
            maxLength: (t) => {
                let n;
                return R(m(e, ((n = t), T((e) => A(e) && e.length <= n))));
            },
            includes: (t) => {
                var n;
                return R(m(e, ((n = t), T((e) => A(e) && e.includes(n)))));
            },
            regex: (t) => {
                var n;
                return R(m(e, ((n = t), T((e) => A(e) && !!e.match(n)))));
            }
        }),
    C = R(T(A)),
    y = (e, t) => T((n) => S(n) && e <= n && t >= n),
    b = (e) => T((t) => S(t) && t < e),
    L = (e) => T((t) => S(t) && t > e),
    D = (e) => T((t) => S(t) && t <= e),
    M = (e) => T((t) => S(t) && t >= e),
    P = () => T((e) => S(e) && Number.isInteger(e)),
    U = () => T((e) => S(e) && Number.isFinite(e)),
    w = () => T((e) => S(e) && e > 0),
    x = () => T((e) => S(e) && e < 0),
    G = (e) =>
        Object.assign(_(e), {
            between: (t, n) => G(m(e, y(t, n))),
            lt: (t) => G(m(e, b(t))),
            gt: (t) => G(m(e, L(t))),
            lte: (t) => G(m(e, D(t))),
            gte: (t) => G(m(e, M(t))),
            int: () => G(m(e, P())),
            finite: () => G(m(e, U())),
            positive: () => G(m(e, w())),
            negative: () => G(m(e, x()))
        }),
    k = G(T(S)),
    B = (e, t) => T((n) => v(n) && e <= n && t >= n),
    F = (e) => T((t) => v(t) && t < e),
    Z = (e) => T((t) => v(t) && t > e),
    V = (e) => T((t) => v(t) && t <= e),
    H = (e) => T((t) => v(t) && t >= e),
    Y = () => T((e) => v(e) && e > 0),
    j = () => T((e) => v(e) && e < 0),
    W = (e) =>
        Object.assign(_(e), {
            between: (t, n) => W(m(e, B(t, n))),
            lt: (t) => W(m(e, F(t))),
            gt: (t) => W(m(e, Z(t))),
            lte: (t) => W(m(e, V(t))),
            gte: (t) => W(m(e, H(t))),
            positive: () => W(m(e, Y())),
            negative: () => W(m(e, j()))
        }),
    K = W(T(v)),
    z = _(
        T(function (e) {
            return 'boolean' == typeof e;
        })
    ),
    q = _(
        T(function (e) {
            return 'symbol' == typeof e;
        })
    ),
    Q = _(
        T(function (e) {
            return null == e;
        })
    );
var X = {
    __proto__: null,
    matcher: r,
    optional: f,
    array: function (...e) {
        return E({
            [r]: () => ({
                match: (t) => {
                    if (!Array.isArray(t)) return { matched: !1 };
                    if (0 === e.length) return { matched: !0 };
                    let n = e[0],
                        r = {};
                    if (0 === t.length)
                        return (
                            u(n).forEach((e) => {
                                r[e] = [];
                            }),
                            {
                                matched: !0,
                                selections: r
                            }
                        );
                    let i = (e, t) => {
                        r[e] = (r[e] || []).concat([t]);
                    };
                    return {
                        matched: t.every((e) => l(n, e, i)),
                        selections: r
                    };
                },
                getSelectionKeys: () => (0 === e.length ? [] : u(e[0]))
            })
        });
    },
    set: function (...e) {
        return _({
            [r]: () => ({
                match: (t) => {
                    if (!(t instanceof Set)) return { matched: !1 };
                    let n = {};
                    if (0 === t.size)
                        return {
                            matched: !0,
                            selections: n
                        };
                    if (0 === e.length) return { matched: !0 };
                    let r = (e, t) => {
                            n[e] = (n[e] || []).concat([t]);
                        },
                        i = e[0];
                    return {
                        matched: h(t, (e) => l(i, e, r)),
                        selections: n
                    };
                },
                getSelectionKeys: () => (0 === e.length ? [] : u(e[0]))
            })
        });
    },
    map: function (...e) {
        return _({
            [r]: () => ({
                match: (t) => {
                    var n;
                    if (!(t instanceof Map)) return { matched: !1 };
                    let r = {};
                    if (0 === t.size)
                        return {
                            matched: !0,
                            selections: r
                        };
                    let i = (e, t) => {
                        r[e] = (r[e] || []).concat([t]);
                    };
                    if (0 === e.length) return { matched: !0 };
                    if (1 === e.length) throw Error(`\`P.map\` wasn't given enough arguments. Expected (key, value), received ${null == (n = e[0]) ? void 0 : n.toString()}`);
                    let [a, o] = e;
                    return {
                        matched: p(t, (e, t) => {
                            let n = l(a, t, i),
                                r = l(o, e, i);
                            return n && r;
                        }),
                        selections: r
                    };
                },
                getSelectionKeys: () => (0 === e.length ? [] : [...u(e[0]), ...u(e[1])])
            })
        });
    },
    intersection: m,
    union: I,
    not: function (e) {
        return _({
            [r]: () => ({
                match: (t) => ({
                    matched: !l(e, t, () => {})
                }),
                getSelectionKeys: () => [],
                matcherType: 'not'
            })
        });
    },
    when: T,
    select: g,
    any: N,
    _: O,
    string: C,
    between: y,
    lt: b,
    gt: L,
    lte: D,
    gte: M,
    int: P,
    finite: U,
    positive: w,
    negative: x,
    number: k,
    betweenBigInt: B,
    ltBigInt: F,
    gtBigInt: Z,
    lteBigInt: V,
    gteBigInt: H,
    positiveBigInt: Y,
    negativeBigInt: j,
    bigint: K,
    boolean: z,
    symbol: q,
    nullish: Q,
    instanceOf: function (e) {
        return _(
            T(
                (function (e) {
                    return (t) => t instanceof e;
                })(e)
            )
        );
    },
    shape: function (e) {
        return _(T(d(e)));
    }
};
let $ = {
    matched: !1,
    value: void 0
};
function J(e) {
    return new ee(e, $);
}
class ee {
    constructor(e, t) {
        (this.input = void 0), (this.state = void 0), (this.input = e), (this.state = t);
    }
    with(...e) {
        let t;
        if (this.state.matched) return this;
        let n = e[e.length - 1],
            r = [e[0]];
        3 === e.length && 'function' == typeof e[1] ? (r.push(e[0]), (t = e[1])) : e.length > 2 && r.push(...e.slice(1, e.length - 1));
        let i = !1,
            o = {},
            s = (e, t) => {
                (i = !0), (o[e] = t);
            },
            u =
                r.some((e) => l(e, this.input, s)) && (!t || t(this.input))
                    ? {
                          matched: !0,
                          value: n(i ? (a in o ? o[a] : o) : this.input, this.input)
                      }
                    : $;
        return new ee(this.input, u);
    }
    when(e, t) {
        if (this.state.matched) return this;
        let n = !!e(this.input);
        return new ee(
            this.input,
            n
                ? {
                      matched: !0,
                      value: t(this.input, this.input)
                  }
                : $
        );
    }
    otherwise(e) {
        return this.state.matched ? this.state.value : e(this.input);
    }
    exhaustive() {
        return this.run();
    }
    run() {
        let e;
        if (this.state.matched) return this.state.value;
        try {
            e = JSON.stringify(this.input);
        } catch (t) {
            e = this.input;
        }
        throw Error(`Pattern matching error: no pattern matches value ${e}`);
    }
    returnType() {
        return this;
    }
}
