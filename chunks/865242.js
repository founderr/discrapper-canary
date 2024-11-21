n.d(t, {
    j: function () {
        return o;
    }
});
var r = n(608167),
    i = n(852205),
    a = n(881085),
    s = n(192379);
function o(e) {
    let { minValue: t, maxValue: n, step: o, formatOptions: u, value: c, defaultValue: d, onChange: f, locale: _, isDisabled: p, isReadOnly: h } = e,
        [m, g] = (0, r.z)(c, isNaN(d) ? NaN : d, f),
        [E, v] = (0, s.useState)(() => (isNaN(m) ? '' : new (0, a.e)(_, u).format(m))),
        b = (0, s.useMemo)(() => new a.d(_, u), [_, u]),
        I = (0, s.useMemo)(() => b.getNumberingSystem(E), [b, E]),
        T = (0, s.useMemo)(
            () =>
                new a.e(_, {
                    ...u,
                    numberingSystem: I
                }),
            [_, u, I]
        ),
        S = (0, s.useMemo)(() => T.resolvedOptions(), [T]),
        y = (0, s.useCallback)((e) => (isNaN(e) || null === e ? '' : T.format(e)), [T]),
        A = isNaN(o) ? 1 : o;
    'percent' === S.style && isNaN(o) && (A = 0.01);
    let [N, C] = (0, s.useState)(m),
        [R, O] = (0, s.useState)(_),
        [D, L] = (0, s.useState)(u);
    (!Object.is(m, N) || _ !== R || u !== D) && (v(y(m)), C(m), O(_), L(u));
    let x = (0, s.useMemo)(() => b.parse(E), [b, E]),
        w = (e, r) => {
            if (isNaN(x)) {
                let e = isNaN(r) ? 0 : r;
                return (0, i.N4)(e, t, n, A);
            }
            {
                let r = (0, i.N4)(x, t, n, A);
                return ('+' === e && r > x) || ('-' === e && r < x) ? r : (0, i.N4)(l(e, x, A), t, n, A);
            }
        },
        M = (0, s.useMemo)(() => !p && !h && (isNaN(x) || isNaN(n) || (0, i.N4)(x, t, n, A) > x || l('+', x, A) <= n), [p, h, t, n, A, x]),
        P = (0, s.useMemo)(() => !p && !h && (isNaN(x) || isNaN(t) || (0, i.N4)(x, t, n, A) < x || l('-', x, A) >= t), [p, h, t, n, A, x]);
    return {
        validate: (e) => b.isValidPartialNumber(e, t, n),
        increment: () => {
            let e = w('+', t);
            e === m && v(y(e)), g(e);
        },
        incrementToMax: () => {
            null != n && g((0, i.N4)(n, t, n, A));
        },
        decrement: () => {
            let e = w('-', n);
            e === m && v(y(e)), g(e);
        },
        decrementToMin: () => {
            null != t && g(t);
        },
        canIncrement: M,
        canDecrement: P,
        minValue: t,
        maxValue: n,
        numberValue: x,
        setNumberValue: g,
        setInputValue: v,
        inputValue: E,
        commit: () => {
            let e;
            if (!E.length) {
                g(NaN), v(void 0 === c ? '' : y(m));
                return;
            }
            if (isNaN(x)) {
                v(y(m));
                return;
            }
            (e = isNaN(o) ? (0, i.uZ)(x, t, n) : (0, i.N4)(x, t, n, o)), g((e = b.parse(y(e)))), v(y(void 0 === c ? e : m));
        }
    };
}
function l(e, t, n) {
    let r = '+' === e ? t + n : t - n;
    if (t % 1 != 0 || n % 1 != 0) {
        let i = t.toString().split('.'),
            a = n.toString().split('.'),
            s = (i[1] && i[1].length) || 0,
            o = Math.pow(10, Math.max(s, (a[1] && a[1].length) || 0));
        (t = Math.round(t * o)), (n = Math.round(n * o)), (r = ('+' === e ? t + n : t - n) / o);
    }
    return r;
}
