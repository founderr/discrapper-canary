n.d(t, {
    j: function () {
        return o;
    }
});
var r = n(697898),
    i = n(881085),
    a = n(470079);
function o(e) {
    let { minValue: t, maxValue: n, step: o, formatOptions: l, value: u, defaultValue: c, onChange: d, locale: _, isDisabled: E, isReadOnly: f } = e,
        [h, p] = (0, r.zk)(u, isNaN(c) ? NaN : c, d),
        [m, I] = (0, a.useState)(() => (isNaN(h) ? '' : new (0, i.e)(_, l).format(h))),
        T = (0, a.useMemo)(() => new i.d(_, l), [_, l]),
        g = (0, a.useMemo)(() => T.getNumberingSystem(m), [T, m]),
        S = (0, a.useMemo)(
            () =>
                new i.e(_, {
                    ...l,
                    numberingSystem: g
                }),
            [_, l, g]
        ),
        A = (0, a.useMemo)(() => S.resolvedOptions(), [S]),
        v = (0, a.useCallback)((e) => (isNaN(e) || null === e ? '' : S.format(e)), [S]),
        N = isNaN(o) ? 1 : o;
    'percent' === A.style && isNaN(o) && (N = 0.01);
    let [O, R] = (0, a.useState)(h),
        [C, y] = (0, a.useState)(_),
        [L, b] = (0, a.useState)(l);
    (!Object.is(h, O) || _ !== C || l !== L) && (I(v(h)), R(h), y(_), b(l));
    let D = (0, a.useMemo)(() => T.parse(m), [T, m]),
        M = () => {
            let e;
            if (!m.length) {
                p(NaN), I(void 0 === u ? '' : v(h));
                return;
            }
            if (isNaN(D)) {
                I(v(h));
                return;
            }
            (e = isNaN(o) ? (0, r.uZ)(D, t, n) : (0, r.N4)(D, t, n, o)), p((e = T.parse(v(e)))), I(v(void 0 === u ? e : h));
        },
        P = (e, i) => {
            let a = D;
            if (isNaN(a)) {
                let e = isNaN(i) ? 0 : i;
                return (0, r.N4)(e, t, n, N);
            }
            {
                let i = (0, r.N4)(a, t, n, N);
                return ('+' === e && i > a) || ('-' === e && i < a) ? i : (0, r.N4)(s(e, a, N), t, n, N);
            }
        };
    return {
        validate: (e) => T.isValidPartialNumber(e, t, n),
        increment: () => {
            let e = P('+', t);
            e === h && I(v(e)), p(e);
        },
        incrementToMax: () => {
            null != n && p((0, r.N4)(n, t, n, N));
        },
        decrement: () => {
            let e = P('-', n);
            e === h && I(v(e)), p(e);
        },
        decrementToMin: () => {
            null != t && p(t);
        },
        canIncrement: (0, a.useMemo)(() => !E && !f && (isNaN(D) || isNaN(n) || (0, r.N4)(D, t, n, N) > D || s('+', D, N) <= n), [E, f, t, n, N, D]),
        canDecrement: (0, a.useMemo)(() => !E && !f && (isNaN(D) || isNaN(t) || (0, r.N4)(D, t, n, N) < D || s('-', D, N) >= t), [E, f, t, n, N, D]),
        minValue: t,
        maxValue: n,
        numberValue: D,
        setNumberValue: p,
        setInputValue: I,
        inputValue: m,
        commit: M
    };
}
function s(e, t, n) {
    let r = '+' === e ? t + n : t - n;
    if (t % 1 != 0 || n % 1 != 0) {
        let i = t.toString().split('.'),
            a = n.toString().split('.'),
            o = (i[1] && i[1].length) || 0,
            s = Math.pow(10, Math.max(o, (a[1] && a[1].length) || 0));
        (t = Math.round(t * s)), (n = Math.round(n * s)), (r = ('+' === e ? t + n : t - n) / s);
    }
    return r;
}
