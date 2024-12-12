r.d(n, {
    j: function () {
        return o;
    }
});
var i = r(239700),
    a = r(881085),
    s = r(192379);
function o(e) {
    let { minValue: n, maxValue: r, step: o, formatOptions: u, value: c, defaultValue: d, onChange: f, locale: _, isDisabled: h, isReadOnly: p } = e,
        [m, g] = (0, i.zk)(c, isNaN(d) ? NaN : d, f),
        [E, v] = (0, s.useState)(() => (isNaN(m) ? '' : new (0, a.e)(_, u).format(m))),
        I = (0, s.useMemo)(() => new a.d(_, u), [_, u]),
        T = (0, s.useMemo)(() => I.getNumberingSystem(E), [I, E]),
        b = (0, s.useMemo)(
            () =>
                new a.e(_, {
                    ...u,
                    numberingSystem: T
                }),
            [_, u, T]
        ),
        y = (0, s.useMemo)(() => b.resolvedOptions(), [b]),
        S = (0, s.useCallback)((e) => (isNaN(e) || null === e ? '' : b.format(e)), [b]),
        A = isNaN(o) ? 1 : o;
    'percent' === y.style && isNaN(o) && (A = 0.01);
    let [N, C] = (0, s.useState)(m),
        [R, O] = (0, s.useState)(_),
        [D, L] = (0, s.useState)(u);
    (!Object.is(m, N) || _ !== R || u !== D) && (v(S(m)), C(m), O(_), L(u));
    let x = (0, s.useMemo)(() => I.parse(E), [I, E]),
        w = () => {
            let e;
            if (!E.length) {
                g(NaN), v(void 0 === c ? '' : S(m));
                return;
            }
            if (isNaN(x)) {
                v(S(m));
                return;
            }
            (e = isNaN(o) ? (0, i.uZ)(x, n, r) : (0, i.N4)(x, n, r, o)), g((e = I.parse(S(e)))), v(S(void 0 === c ? e : m));
        },
        P = (e, a) => {
            let s = x;
            if (isNaN(s)) {
                let e = isNaN(a) ? 0 : a;
                return (0, i.N4)(e, n, r, A);
            }
            {
                let a = (0, i.N4)(s, n, r, A);
                return ('+' === e && a > s) || ('-' === e && a < s) ? a : (0, i.N4)(l(e, s, A), n, r, A);
            }
        };
    return {
        validate: (e) => I.isValidPartialNumber(e, n, r),
        increment: () => {
            let e = P('+', n);
            e === m && v(S(e)), g(e);
        },
        incrementToMax: () => {
            null != r && g((0, i.N4)(r, n, r, A));
        },
        decrement: () => {
            let e = P('-', r);
            e === m && v(S(e)), g(e);
        },
        decrementToMin: () => {
            null != n && g(n);
        },
        canIncrement: (0, s.useMemo)(() => !h && !p && (isNaN(x) || isNaN(r) || (0, i.N4)(x, n, r, A) > x || l('+', x, A) <= r), [h, p, n, r, A, x]),
        canDecrement: (0, s.useMemo)(() => !h && !p && (isNaN(x) || isNaN(n) || (0, i.N4)(x, n, r, A) < x || l('-', x, A) >= n), [h, p, n, r, A, x]),
        minValue: n,
        maxValue: r,
        numberValue: x,
        setNumberValue: g,
        setInputValue: v,
        inputValue: E,
        commit: w
    };
}
function l(e, n, r) {
    let i = '+' === e ? n + r : n - r;
    if (n % 1 != 0 || r % 1 != 0) {
        let a = n.toString().split('.'),
            s = r.toString().split('.'),
            o = (a[1] && a[1].length) || 0,
            l = Math.pow(10, Math.max(o, (s[1] && s[1].length) || 0));
        (n = Math.round(n * l)), (r = Math.round(r * l)), (i = ('+' === e ? n + r : n - r) / l);
    }
    return i;
}
