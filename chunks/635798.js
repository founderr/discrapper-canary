n.d(t, {
    x: function () {
        return s;
    }
});
var r = n(852205),
    i = n(608167),
    a = n(192379);
function s(e) {
    var t;
    let { isDisabled: n = !1, minValue: s = 0, maxValue: c = 100, numberFormatter: d, step: f = 1, orientation: _ = 'horizontal' } = e,
        p = (0, a.useMemo)(() => {
            let e = (c - s) / 10;
            return Math.max((e = (0, r.N4)(e, 0, e + f, f)), f);
        }, [f, c, s]),
        h = (0, a.useMemo)(() => l(e.value), [e.value]),
        m = (0, a.useMemo)(() => (null !== (t = l(e.defaultValue)) && void 0 !== t ? t : [s]), [e.defaultValue, s]),
        g = u(e.value, e.defaultValue, e.onChange),
        E = u(e.value, e.defaultValue, e.onChangeEnd),
        [v, b] = (0, i.z)(h, m, g),
        [I, T] = (0, a.useState)(Array(v.length).fill(!1)),
        S = (0, a.useRef)(Array(v.length).fill(!0)),
        [y, A] = (0, a.useState)(void 0),
        N = (0, a.useRef)(v),
        C = (0, a.useRef)(I),
        R = (e) => {
            (N.current = e), b(e);
        },
        O = (e) => {
            (C.current = e), T(e);
        };
    function D(e) {
        return (e - s) / (c - s);
    }
    function L(e) {
        return 0 === e ? s : v[e - 1];
    }
    function x(e) {
        return e === v.length - 1 ? c : v[e + 1];
    }
    function w(e) {
        return S.current[e];
    }
    function M(e, t) {
        if (n || !w(e)) return;
        let i = L(e),
            a = x(e);
        (t = (0, r.N4)(t, i, a, f)), R(o(N.current, e, t));
    }
    function P(e) {
        return d.format(e);
    }
    function k(e) {
        let t = e * (c - s) + s;
        return (0, r.uZ)(Math.round((t - s) / f) * f + s, s, c);
    }
    return {
        values: v,
        getThumbValue: (e) => v[e],
        setThumbValue: M,
        setThumbPercent: function (e, t) {
            M(e, k(t));
        },
        isThumbDragging: (e) => I[e],
        setThumbDragging: function (e, t) {
            if (n || !w(e)) return;
            let r = C.current[e];
            (C.current = o(C.current, e, t)), O(C.current), E && r && !C.current.some(Boolean) && E(N.current);
        },
        focusedThumb: y,
        setFocusedThumb: A,
        getThumbPercent: (e) => D(v[e]),
        getValuePercent: D,
        getThumbValueLabel: (e) => P(v[e]),
        getFormattedValue: P,
        getThumbMinValue: L,
        getThumbMaxValue: x,
        getPercentValue: k,
        isThumbEditable: w,
        setThumbEditable: function (e, t) {
            S.current[e] = t;
        },
        incrementThumb: function (e, t = 1) {
            let n = Math.max(t, f);
            M(e, (0, r.N4)(v[e] + n, s, c, f));
        },
        decrementThumb: function (e, t = 1) {
            let n = Math.max(t, f);
            M(e, (0, r.N4)(v[e] - n, s, c, f));
        },
        step: f,
        pageSize: p,
        orientation: _,
        isDisabled: n
    };
}
function o(e, t, n) {
    return e[t] === n ? e : [...e.slice(0, t), n, ...e.slice(t + 1)];
}
function l(e) {
    if (null != e) return Array.isArray(e) ? e : [e];
}
function u(e, t, n) {
    return (r) => {
        'number' == typeof e || 'number' == typeof t ? null == n || n(r[0]) : null == n || n(r);
    };
}
