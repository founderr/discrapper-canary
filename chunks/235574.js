n.d(t, {
    x: function () {
        return u;
    }
});
var r = n(882932),
    i = n(697898),
    a = n(470079);
let o = 0,
    s = 100,
    l = 1;
function u(e) {
    var t;
    let { isDisabled: n = !1, minValue: u = o, maxValue: E = s, numberFormatter: f, step: h = l, orientation: p = 'horizontal' } = e,
        m = (0, a.useMemo)(() => {
            let e = (E - u) / 10;
            return Math.max((e = (0, r.N4)(e, 0, e + h, h)), h);
        }, [h, E, u]),
        I = (0, a.useMemo)(() => d(e.value), [e.value]),
        T = (0, a.useMemo)(() => (null !== (t = d(e.defaultValue)) && void 0 !== t ? t : [u]), [e.defaultValue, u]),
        g = _(e.value, e.defaultValue, e.onChange),
        S = _(e.value, e.defaultValue, e.onChangeEnd),
        [A, v] = (0, i.zk)(I, T, g),
        [N, O] = (0, a.useState)(Array(A.length).fill(!1)),
        R = (0, a.useRef)(Array(A.length).fill(!0)),
        [C, y] = (0, a.useState)(void 0),
        L = (0, a.useRef)(A),
        b = (0, a.useRef)(N),
        D = (e) => {
            (L.current = e), v(e);
        },
        M = (e) => {
            (b.current = e), O(e);
        };
    function P(e) {
        return (e - u) / (E - u);
    }
    function U(e) {
        return 0 === e ? u : A[e - 1];
    }
    function w(e) {
        return e === A.length - 1 ? E : A[e + 1];
    }
    function x(e) {
        return R.current[e];
    }
    function G(e, t) {
        if (n || !x(e)) return;
        let i = U(e),
            a = w(e);
        (t = (0, r.N4)(t, i, a, h)), D(c(L.current, e, t));
    }
    function k(e) {
        return f.format(e);
    }
    function B(e, t) {
        G(e, Z(t));
    }
    function F(e) {
        return Math.round((e - u) / h) * h + u;
    }
    function Z(e) {
        let t = e * (E - u) + u;
        return (0, r.uZ)(F(t), u, E);
    }
    function V(e, t = 1) {
        let n = Math.max(t, h);
        G(e, (0, r.N4)(A[e] + n, u, E, h));
    }
    function H(e, t = 1) {
        let n = Math.max(t, h);
        G(e, (0, r.N4)(A[e] - n, u, E, h));
    }
    return {
        values: A,
        getThumbValue: (e) => A[e],
        setThumbValue: G,
        setThumbPercent: B,
        isThumbDragging: (e) => N[e],
        setThumbDragging: function e(e, t) {
            if (n || !x(e)) return;
            let r = b.current[e];
            (b.current = c(b.current, e, t)), M(b.current), S && r && !b.current.some(Boolean) && S(L.current);
        },
        focusedThumb: C,
        setFocusedThumb: y,
        getThumbPercent: (e) => P(A[e]),
        getValuePercent: P,
        getThumbValueLabel: (e) => k(A[e]),
        getFormattedValue: k,
        getThumbMinValue: U,
        getThumbMaxValue: w,
        getPercentValue: Z,
        isThumbEditable: x,
        setThumbEditable: function e(e, t) {
            R.current[e] = t;
        },
        incrementThumb: V,
        decrementThumb: H,
        step: h,
        pageSize: m,
        orientation: p,
        isDisabled: n
    };
}
function c(e, t, n) {
    return e[t] === n ? e : [...e.slice(0, t), n, ...e.slice(t + 1)];
}
function d(e) {
    if (null != e) return Array.isArray(e) ? e : [e];
}
function _(e, t, n) {
    return (r) => {
        'number' == typeof e || 'number' == typeof t ? null == n || n(r[0]) : null == n || n(r);
    };
}
