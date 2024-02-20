"use strict";
n.r(t), n.d(t, {
  useFormValidationState: function() {
    return l
  },
  DEFAULT_VALIDATION_RESULT: function() {
    return i
  },
  privateValidationStateProp: function() {
    return c
  },
  mergeValidation: function() {
    return f
  }
}), n("881410"), n("222007");
var r = n("884691");
let a = {
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
  o = {
    ...a,
    customError: !0,
    valid: !1
  },
  i = {
    isInvalid: !1,
    validationDetails: a,
    validationErrors: []
  },
  s = (0, r.createContext)({}),
  c = "__formValidationState" + Date.now();

function l(e) {
  if (e[c]) {
    let {
      realtimeValidation: t,
      displayValidation: n,
      updateValidation: r,
      resetValidation: a,
      commitValidation: o
    } = e[c];
    return {
      realtimeValidation: t,
      displayValidation: n,
      updateValidation: r,
      resetValidation: a,
      commitValidation: o
    }
  }
  return function(e) {
    let {
      isInvalid: t,
      validationState: n,
      name: a,
      value: c,
      builtinValidation: l,
      validate: f,
      validationBehavior: h = "aria"
    } = e;
    n && (t || (t = "invalid" === n));
    let m = t ? {
        isInvalid: !0,
        validationErrors: [],
        validationDetails: o
      } : null,
      v = (0, r.useMemo)(() => d(function(e, t) {
        if ("function" == typeof e) {
          let n = e(t);
          if (n && "boolean" != typeof n) return u(n)
        }
        return []
      }(f, c)), [f, c]);
    (null == l ? void 0 : l.validationDetails.valid) && (l = null);
    let g = (0, r.useContext)(s),
      y = (0, r.useMemo)(() => a ? Array.isArray(a) ? a.flatMap(e => u(g[e])) : u(g[a]) : [], [g, a]),
      [b, x] = (0, r.useState)(g),
      [S, w] = (0, r.useState)(!1);
    g !== b && (x(g), w(!1));
    let D = (0, r.useMemo)(() => d(S ? [] : y), [S, y]),
      C = (0, r.useRef)(i),
      [k, P] = (0, r.useState)(i),
      E = (0, r.useRef)(i),
      [T, M] = (0, r.useState)(!1);
    return (0, r.useEffect)(() => {
      if (!T) return;
      M(!1);
      let e = v || l || C.current;
      !p(e, E.current) && (E.current = e, P(e))
    }), {
      realtimeValidation: m || D || v || l || i,
      displayValidation: "native" === h ? m || D || k : m || D || v || l || k,
      updateValidation(e) {
        "aria" !== h || p(k, e) ? C.current = e : P(e)
      },
      resetValidation() {
        !p(i, E.current) && (E.current = i, P(i)), "native" === h && M(!1), w(!0)
      },
      commitValidation() {
        "native" === h && M(!0), w(!0)
      }
    }
  }(e)
}

function u(e) {
  return e ? Array.isArray(e) ? e : [e] : []
}

function d(e) {
  return e.length ? {
    isInvalid: !0,
    validationErrors: e,
    validationDetails: o
  } : null
}

function p(e, t) {
  return e === t || e && t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, n) => e === t.validationErrors[n]) && Object.entries(e.validationDetails).every(e => {
    let [n, r] = e;
    return t.validationDetails[n] === r
  })
}

function f() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  let r = new Set,
    o = !1,
    i = {
      ...a
    };
  for (let e of t) {
    for (let t of e.validationErrors) r.add(t);
    for (let t in o || (o = e.isInvalid), i) i[t] || (i[t] = e.validationDetails[t])
  }
  return i.valid = !o, {
    isInvalid: o,
    validationErrors: [...r],
    validationDetails: i
  }
}