"use strict";
n.r(t), n.d(t, {
  useNumberFieldState: function() {
    return i
  }
}), n("222007");
var r = n("679750"),
  a = n("546262"),
  o = n("884691");

function i(e) {
  let {
    minValue: t,
    maxValue: n,
    step: i,
    formatOptions: c,
    value: l,
    defaultValue: u,
    onChange: d,
    locale: p,
    isDisabled: f,
    isReadOnly: h
  } = e, [m, v] = (0, r.useControlledState)(l, isNaN(u) ? NaN : u, d), [g, y] = (0, o.useState)(() => isNaN(m) ? "" : new(0, a.NumberFormatter)(p, c).format(m)), b = (0, o.useMemo)(() => new a.NumberParser(p, c), [p, c]), x = (0, o.useMemo)(() => b.getNumberingSystem(g), [b, g]), S = (0, o.useMemo)(() => new a.NumberFormatter(p, {
    ...c,
    numberingSystem: x
  }), [p, c, x]), w = (0, o.useMemo)(() => S.resolvedOptions(), [S]), D = (0, o.useCallback)(e => isNaN(e) || null === e ? "" : S.format(e), [S]), C = isNaN(i) ? 1 : i;
  "percent" === w.style && isNaN(i) && (C = .01);
  let [k, P] = (0, o.useState)(m), [E, T] = (0, o.useState)(p), [M, R] = (0, o.useState)(c);
  (!Object.is(m, k) || p !== E || c !== M) && (y(D(m)), P(m), T(p), R(c));
  let O = (0, o.useMemo)(() => b.parse(g), [b, g]),
    I = (e, a) => {
      if (isNaN(O)) {
        let e = isNaN(a) ? 0 : a;
        return (0, r.snapValueToStep)(e, t, n, C)
      } {
        let a = (0, r.snapValueToStep)(O, t, n, C);
        return "+" === e && a > O || "-" === e && a < O ? a : (0, r.snapValueToStep)(s(e, O, C), t, n, C)
      }
    },
    A = (0, o.useMemo)(() => !f && !h && (isNaN(O) || isNaN(n) || (0, r.snapValueToStep)(O, t, n, C) > O || s("+", O, C) <= n), [f, h, t, n, C, O]),
    L = (0, o.useMemo)(() => !f && !h && (isNaN(O) || isNaN(t) || (0, r.snapValueToStep)(O, t, n, C) < O || s("-", O, C) >= t), [f, h, t, n, C, O]);
  return {
    validate: e => b.isValidPartialNumber(e, t, n),
    increment: () => {
      let e = I("+", t);
      e === m && y(D(e)), v(e)
    },
    incrementToMax: () => {
      null != n && v((0, r.snapValueToStep)(n, t, n, C))
    },
    decrement: () => {
      let e = I("-", n);
      e === m && y(D(e)), v(e)
    },
    decrementToMin: () => {
      null != t && v(t)
    },
    canIncrement: A,
    canDecrement: L,
    minValue: t,
    maxValue: n,
    numberValue: O,
    setNumberValue: v,
    setInputValue: y,
    inputValue: g,
    commit: () => {
      let e;
      if (!g.length) {
        v(NaN), y(void 0 === l ? "" : D(m));
        return
      }
      if (isNaN(O)) {
        y(D(m));
        return
      }
      e = isNaN(i) ? (0, r.clamp)(O, t, n) : (0, r.snapValueToStep)(O, t, n, i), v(e = b.parse(D(e))), y(D(void 0 === l ? e : m))
    }
  }
}

function s(e, t, n) {
  let r = "+" === e ? t + n : t - n;
  if (t % 1 != 0 || n % 1 != 0) {
    let a = t.toString().split("."),
      o = n.toString().split("."),
      i = a[1] && a[1].length || 0,
      s = o[1] && o[1].length || 0,
      c = Math.pow(10, Math.max(i, s));
    t = Math.round(t * c), n = Math.round(n * c), r = ("+" === e ? t + n : t - n) / c
  }
  return r
}