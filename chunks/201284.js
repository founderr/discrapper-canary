n.d(t, {
    PS: function () {
        return o;
    },
    Q3: function () {
        return u;
    },
    W0: function () {
        return h;
    },
    tL: function () {
        return l;
    }
});
var r = n(470079);
let i = {
        badInput: !1,
        customError: !1,
        patternMismatch: !1,
        rangeOverflow: !1,
        rangeUnderflow: !1,
        stepMismatch: !1,
        tooLong: !1,
        tooShort: !1,
        typeMismatch: !1,
        valueMissing: !1,
        valid: !0
    },
    a = {
        ...i,
        customError: !0,
        valid: !1
    },
    o = {
        isInvalid: !1,
        validationDetails: i,
        validationErrors: []
    },
    s = (0, r.createContext)({}),
    l = '__formValidationState' + Date.now();
function u(e) {
    if (e[l]) {
        let { realtimeValidation: t, displayValidation: n, updateValidation: r, resetValidation: i, commitValidation: a } = e[l];
        return {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: i,
            commitValidation: a
        };
    }
    return c(e);
}
function c(e) {
    let { isInvalid: t, validationState: n, name: i, value: l, builtinValidation: u, validate: c, validationBehavior: h = 'aria' } = e;
    n && (t || (t = 'invalid' === n));
    let p = t
            ? {
                  isInvalid: !0,
                  validationErrors: [],
                  validationDetails: a
              }
            : null,
        m = (0, r.useMemo)(() => E(_(c, l)), [c, l]);
    (null == u ? void 0 : u.validationDetails.valid) && (u = null);
    let I = (0, r.useContext)(s),
        T = (0, r.useMemo)(() => (i ? (Array.isArray(i) ? i.flatMap((e) => d(I[e])) : d(I[i])) : []), [I, i]),
        [g, S] = (0, r.useState)(I),
        [A, v] = (0, r.useState)(!1);
    I !== g && (S(I), v(!1));
    let N = (0, r.useMemo)(() => E(A ? [] : T), [A, T]),
        O = (0, r.useRef)(o),
        [R, C] = (0, r.useState)(o),
        y = (0, r.useRef)(o),
        b = () => {
            if (!L) return;
            D(!1);
            let e = m || u || O.current;
            !f(e, y.current) && ((y.current = e), C(e));
        },
        [L, D] = (0, r.useState)(!1);
    return (
        (0, r.useEffect)(b),
        {
            realtimeValidation: p || N || m || u || o,
            displayValidation: 'native' === h ? p || N || R : p || N || m || u || R,
            updateValidation(e) {
                'aria' !== h || f(R, e) ? (O.current = e) : C(e);
            },
            resetValidation() {
                let e = o;
                !f(e, y.current) && ((y.current = e), C(e)), 'native' === h && D(!1), v(!0);
            },
            commitValidation() {
                'native' === h && D(!0), v(!0);
            }
        }
    );
}
function d(e) {
    return e ? (Array.isArray(e) ? e : [e]) : [];
}
function _(e, t) {
    if ('function' == typeof e) {
        let n = e(t);
        if (n && 'boolean' != typeof n) return d(n);
    }
    return [];
}
function E(e) {
    return e.length
        ? {
              isInvalid: !0,
              validationErrors: e,
              validationDetails: a
          }
        : null;
}
function f(e, t) {
    return e === t || (e && t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, n) => e === t.validationErrors[n]) && Object.entries(e.validationDetails).every(([e, n]) => t.validationDetails[e] === n));
}
function h(...e) {
    let t = new Set(),
        n = !1,
        r = { ...i };
    for (let i of e) {
        var a, o;
        for (let e of i.validationErrors) t.add(e);
        for (let e in (n || (n = i.isInvalid), r)) (a = r)[(o = e)] || (a[o] = i.validationDetails[e]);
    }
    return (
        (r.valid = !n),
        {
            isInvalid: n,
            validationErrors: [...t],
            validationDetails: r
        }
    );
}
