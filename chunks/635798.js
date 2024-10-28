n.d(t, {
    x: function () {
        return a;
    }
});
var r = n(239700),
    i = n(192379);
function a(e) {
    var t;
    let { isDisabled: n = !1, minValue: a = 0, maxValue: u = 100, numberFormatter: c, step: d = 1, orientation: _ = 'horizontal' } = e,
        E = (0, i.useMemo)(() => {
            let e = (u - a) / 10;
            return Math.max((e = (0, r.N4)(e, 0, e + d, d)), d);
        }, [d, u, a]),
        f = (0, i.useMemo)(() => o(e.value), [e.value]),
        h = (0, i.useMemo)(() => (null !== (t = o(e.defaultValue)) && void 0 !== t ? t : [a]), [e.defaultValue, a]),
        p = l(e.value, e.defaultValue, e.onChange),
        I = l(e.value, e.defaultValue, e.onChangeEnd),
        [m, T] = (0, r.zk)(f, h, p),
        [S, g] = (0, i.useState)(Array(m.length).fill(!1)),
        A = (0, i.useRef)(Array(m.length).fill(!0)),
        [N, R] = (0, i.useState)(void 0),
        O = (0, i.useRef)(m),
        v = (0, i.useRef)(S),
        C = (e) => {
            (O.current = e), T(e);
        },
        L = (e) => {
            (v.current = e), g(e);
        };
    function D(e) {
        return (e - a) / (u - a);
    }
    function y(e) {
        return 0 === e ? a : m[e - 1];
    }
    function b(e) {
        return e === m.length - 1 ? u : m[e + 1];
    }
    function M(e) {
        return A.current[e];
    }
    function P(e, t) {
        if (n || !M(e)) return;
        let i = y(e),
            a = b(e);
        (t = (0, r.N4)(t, i, a, d)), C(s(O.current, e, t));
    }
    function U(e) {
        return c.format(e);
    }
    function w(e) {
        let t = e * (u - a) + a;
        return (0, r.uZ)(Math.round((t - a) / d) * d + a, a, u);
    }
    return {
        values: m,
        getThumbValue: (e) => m[e],
        setThumbValue: P,
        setThumbPercent: function (e, t) {
            P(e, w(t));
        },
        isThumbDragging: (e) => S[e],
        setThumbDragging: function (e, t) {
            if (n || !M(e)) return;
            let r = v.current[e];
            (v.current = s(v.current, e, t)), L(v.current), I && r && !v.current.some(Boolean) && I(O.current);
        },
        focusedThumb: N,
        setFocusedThumb: R,
        getThumbPercent: (e) => D(m[e]),
        getValuePercent: D,
        getThumbValueLabel: (e) => U(m[e]),
        getFormattedValue: U,
        getThumbMinValue: y,
        getThumbMaxValue: b,
        getPercentValue: w,
        isThumbEditable: M,
        setThumbEditable: function (e, t) {
            A.current[e] = t;
        },
        incrementThumb: function (e, t = 1) {
            let n = Math.max(t, d);
            P(e, (0, r.N4)(m[e] + n, a, u, d));
        },
        decrementThumb: function (e, t = 1) {
            let n = Math.max(t, d);
            P(e, (0, r.N4)(m[e] - n, a, u, d));
        },
        step: d,
        pageSize: E,
        orientation: _,
        isDisabled: n
    };
}
function s(e, t, n) {
    return e[t] === n ? e : [...e.slice(0, t), n, ...e.slice(t + 1)];
}
function o(e) {
    if (null != e) return Array.isArray(e) ? e : [e];
}
function l(e, t, n) {
    return (r) => {
        'number' == typeof e || 'number' == typeof t ? null == n || n(r[0]) : null == n || n(r);
    };
}
