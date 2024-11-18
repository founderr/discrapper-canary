n.d(t, {
    EQ: function () {
        return Q;
    },
    P: function () {
        return z;
    }
});
let r = Symbol.for('@ts-pattern/matcher'),
    i = Symbol.for('@ts-pattern/isVariadic'),
    a = '@ts-pattern/anonymous-select-key',
    s = (e) => !!(e && 'object' == typeof e),
    o = (e) => e && !!e[r],
    l = (e, t, n) => {
        if (o(e)) {
            let { matched: i, selections: a } = e[r]().match(t);
            return i && a && Object.keys(a).forEach((e) => n(e, a[e])), i;
        }
        if (s(e)) {
            if (!s(t)) return !1;
            if (Array.isArray(e)) {
                if (!Array.isArray(t)) return !1;
                let r = [],
                    a = [],
                    s = [];
                for (let t of e.keys()) {
                    let n = e[t];
                    o(n) && n[i] ? s.push(n) : s.length ? a.push(n) : r.push(n);
                }
                if (s.length) {
                    if (s.length > 1) throw Error('Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.');
                    if (t.length < r.length + a.length) return !1;
                    let e = t.slice(0, r.length),
                        i = 0 === a.length ? [] : t.slice(-a.length),
                        o = t.slice(r.length, 0 === a.length ? 1 / 0 : -a.length);
                    return r.every((t, r) => l(t, e[r], n)) && a.every((e, t) => l(e, i[t], n)) && (0 === s.length || l(s[0], o, n));
                }
                return e.length === t.length && e.every((e, r) => l(e, t[r], n));
            }
            return Object.keys(e).every((i) => {
                let a = e[i];
                return (i in t || (o(a) && 'optional' === a[r]().matcherType)) && l(a, t[i], n);
            });
        }
        return Object.is(t, e);
    },
    u = (e) => {
        var t, n, i;
        return s(e) ? (o(e) ? (null != (t = null == (n = (i = e[r]()).getSelectionKeys) ? void 0 : n.call(i)) ? t : []) : Array.isArray(e) ? c(e, u) : c(Object.values(e), u)) : [];
    },
    c = (e, t) => e.reduce((e, n) => e.concat(t(n)), []);
function d(e) {
    return Object.assign(e, {
        optional: () => f(e),
        and: (t) => h(e, t),
        or: (t) => m(e, t),
        select: (t) => (void 0 === t ? E(e) : E(t, e))
    });
}
function f(e) {
    return d({
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
let _ = (e, t) => {
        for (let n of e) if (!t(n)) return !1;
        return !0;
    },
    p = (e, t) => {
        for (let [n, r] of e.entries()) if (!t(r, n)) return !1;
        return !0;
    };
function h(...e) {
    return d({
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
function m(...e) {
    return d({
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
function g(e) {
    return { [r]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
}
function E(...e) {
    let t = 'string' == typeof e[0] ? e[0] : void 0,
        n = 2 === e.length ? e[1] : 'string' == typeof e[0] ? void 0 : e[0];
    return d({
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
function v(e) {
    return 'number' == typeof e;
}
function b(e) {
    return 'string' == typeof e;
}
function I(e) {
    return 'bigint' == typeof e;
}
let S = d(
        g(function (e) {
            return !0;
        })
    ),
    T = (e) =>
        Object.assign(d(e), {
            startsWith: (t) =>
                T(
                    h(
                        e,
                        g((e) => b(e) && e.startsWith(t))
                    )
                ),
            endsWith: (t) =>
                T(
                    h(
                        e,
                        g((e) => b(e) && e.endsWith(t))
                    )
                ),
            minLength: (t) => {
                let n;
                return T(h(e, ((n = t), g((e) => b(e) && e.length >= n))));
            },
            maxLength: (t) => {
                let n;
                return T(h(e, ((n = t), g((e) => b(e) && e.length <= n))));
            },
            includes: (t) =>
                T(
                    h(
                        e,
                        g((e) => b(e) && e.includes(t))
                    )
                ),
            regex: (t) =>
                T(
                    h(
                        e,
                        g((e) => b(e) && !!e.match(t))
                    )
                )
        }),
    y = T(g(b)),
    A = (e, t) => g((n) => v(n) && e <= n && t >= n),
    N = (e) => g((t) => v(t) && t < e),
    C = (e) => g((t) => v(t) && t > e),
    R = (e) => g((t) => v(t) && t <= e),
    O = (e) => g((t) => v(t) && t >= e),
    D = () => g((e) => v(e) && Number.isInteger(e)),
    L = () => g((e) => v(e) && Number.isFinite(e)),
    x = () => g((e) => v(e) && e > 0),
    w = () => g((e) => v(e) && e < 0),
    M = (e) =>
        Object.assign(d(e), {
            between: (t, n) => M(h(e, A(t, n))),
            lt: (t) => M(h(e, N(t))),
            gt: (t) => M(h(e, C(t))),
            lte: (t) => M(h(e, R(t))),
            gte: (t) => M(h(e, O(t))),
            int: () => M(h(e, D())),
            finite: () => M(h(e, L())),
            positive: () => M(h(e, x())),
            negative: () => M(h(e, w()))
        }),
    P = M(g(v)),
    k = (e, t) => g((n) => I(n) && e <= n && t >= n),
    U = (e) => g((t) => I(t) && t < e),
    G = (e) => g((t) => I(t) && t > e),
    B = (e) => g((t) => I(t) && t <= e),
    Z = (e) => g((t) => I(t) && t >= e),
    F = () => g((e) => I(e) && e > 0),
    V = () => g((e) => I(e) && e < 0),
    j = (e) =>
        Object.assign(d(e), {
            between: (t, n) => j(h(e, k(t, n))),
            lt: (t) => j(h(e, U(t))),
            gt: (t) => j(h(e, G(t))),
            lte: (t) => j(h(e, B(t))),
            gte: (t) => j(h(e, Z(t))),
            positive: () => j(h(e, F())),
            negative: () => j(h(e, V()))
        }),
    H = j(g(I)),
    Y = d(
        g(function (e) {
            return 'boolean' == typeof e;
        })
    ),
    W = d(
        g(function (e) {
            return 'symbol' == typeof e;
        })
    ),
    K = d(
        g(function (e) {
            return null == e;
        })
    );
var z = {
    __proto__: null,
    matcher: r,
    optional: f,
    array: function (...e) {
        return (function e(t) {
            let n;
            return Object.assign(
                Object.assign((n = t), {
                    *[Symbol.iterator]() {
                        yield Object.assign(n, { [i]: !0 });
                    }
                }),
                {
                    optional: () => e(f(t)),
                    select: (n) => e(void 0 === n ? E(t) : E(n, t))
                }
            );
        })({
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
        return d({
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
                        matched: _(t, (e) => l(i, e, r)),
                        selections: n
                    };
                },
                getSelectionKeys: () => (0 === e.length ? [] : u(e[0]))
            })
        });
    },
    map: function (...e) {
        return d({
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
                    let [a, s] = e;
                    return {
                        matched: p(t, (e, t) => {
                            let n = l(a, t, i),
                                r = l(s, e, i);
                            return n && r;
                        }),
                        selections: r
                    };
                },
                getSelectionKeys: () => (0 === e.length ? [] : [...u(e[0]), ...u(e[1])])
            })
        });
    },
    intersection: h,
    union: m,
    not: function (e) {
        return d({
            [r]: () => ({
                match: (t) => ({
                    matched: !l(e, t, () => {})
                }),
                getSelectionKeys: () => [],
                matcherType: 'not'
            })
        });
    },
    when: g,
    select: E,
    any: S,
    _: S,
    string: y,
    between: A,
    lt: N,
    gt: C,
    lte: R,
    gte: O,
    int: D,
    finite: L,
    positive: x,
    negative: w,
    number: P,
    betweenBigInt: k,
    ltBigInt: U,
    gtBigInt: G,
    lteBigInt: B,
    gteBigInt: Z,
    positiveBigInt: F,
    negativeBigInt: V,
    bigint: H,
    boolean: Y,
    symbol: W,
    nullish: K,
    instanceOf: function (e) {
        var t;
        return d(g(((t = e), (e) => e instanceof t)));
    },
    shape: function (e) {
        return d(
            g(
                (function (...e) {
                    if (1 === e.length) {
                        let [t] = e;
                        return (e) => l(t, e, () => {});
                    }
                    if (2 === e.length) {
                        let [t, n] = e;
                        return l(t, n, () => {});
                    }
                    throw Error(`isMatching wasn't given the right number of arguments: expected 1 or 2, received ${e.length}.`);
                })(e)
            )
        );
    }
};
let q = {
    matched: !1,
    value: void 0
};
function Q(e) {
    return new X(e, q);
}
class X {
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
            s = {},
            o = (e, t) => {
                (i = !0), (s[e] = t);
            },
            u =
                r.some((e) => l(e, this.input, o)) && (!t || t(this.input))
                    ? {
                          matched: !0,
                          value: n(i ? (a in s ? s[a] : s) : this.input, this.input)
                      }
                    : q;
        return new X(this.input, u);
    }
    when(e, t) {
        if (this.state.matched) return this;
        let n = !!e(this.input);
        return new X(
            this.input,
            n
                ? {
                      matched: !0,
                      value: t(this.input, this.input)
                  }
                : q
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
