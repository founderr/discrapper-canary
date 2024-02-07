"use strict";
n.r(t), n.d(t, {
  useNumberFieldState: function() {
    return i
  }
}), n("222007");
var r = n("679750"),
  o = n("546262"),
  a = n("884691");

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
  } = e, [m, v] = (0, r.useControlledState)(l, isNaN(u) ? NaN : u, d), [g, y] = (0, a.useState)(() => isNaN(m) ? "" : new(0, o.NumberFormatter)(p, c).format(m)), b = (0, a.useMemo)(() => new o.NumberParser(p, c), [p, c]), x = (0, a.useMemo)(() => b.getNumberingSystem(g), [b, g]), S = (0, a.useMemo)(() => new o.NumberFormatter(p, {
    ...c,
    numberingSystem: x
  }), [p, c, x]), w = (0, a.useMemo)(() => S.resolvedOptions(), [S]), D = (0, a.useCallback)(e => isNaN(e) || null === e ? "" : S.format(e), [S]), C = isNaN(i) ? 1 : i;
  "percent" === w.style && isNaN(i) && (C = .01);
  let [k, P] = (0, a.useState)(m), [E, T] = (0, a.useState)(p), [M, R] = (0, a.useState)(c);
  (!Object.is(m, k) || p !== E || c !== M) && (y(D(m)), P(m), T(p), R(c));
  let I = (0, a.useMemo)(() => b.parse(g), [b, g]),
    O = (e, o) => {
      if (isNaN(I)) {
        let e = isNaN(o) ? 0 : o;
        return (0, r.snapValueToStep)(e, t, n, C)
      } {
        let o = (0, r.snapValueToStep)(I, t, n, C);
        return "+" === e && o > I || "-" === e && o < I ? o : (0, r.snapValueToStep)(s(e, I, C), t, n, C)
      }
    },
    A = (0, a.useMemo)(() => !f && !h && (isNaN(I) || isNaN(n) || (0, r.snapValueToStep)(I, t, n, C) > I || s("+", I, C) <= n), [f, h, t, n, C, I]),
    L = (0, a.useMemo)(() => !f && !h && (isNaN(I) || isNaN(t) || (0, r.snapValueToStep)(I, t, n, C) < I || s("-", I, C) >= t), [f, h, t, n, C, I]);
  return {
    validate: e => b.isValidPartialNumber(e, t, n),
    increment: () => {
      let e = O("+", t);
      e === m && y(D(e)), v(e)
    },
    incrementToMax: () => {
      null != n && v((0, r.snapValueToStep)(n, t, n, C))
    },
    decrement: () => {
      let e = O("-", n);
      e === m && y(D(e)), v(e)
    },
    decrementToMin: () => {
      null != t && v(t)
    },
    canIncrement: A,
    canDecrement: L,
    minValue: t,
    maxValue: n,
    numberValue: I,
    setNumberValue: v,
    setInputValue: y,
    inputValue: g,
    commit: () => {
      let e;
      if (!g.length) {
        v(NaN), y(void 0 === l ? "" : D(m));
        return
      }
      if (isNaN(I)) {
        y(D(m));
        return
      }
      e = isNaN(i) ? (0, r.clamp)(I, t, n) : (0, r.snapValueToStep)(I, t, n, i), v(e = b.parse(D(e))), y(D(void 0 === l ? e : m))
    }
  }
}

function s(e, t, n) {
  let r = "+" === e ? t + n : t - n;
  if (t % 1 != 0 || n % 1 != 0) {
    let o = t.toString().split("."),
      a = n.toString().split("."),
      i = o[1] && o[1].length || 0,
      s = a[1] && a[1].length || 0,
      c = Math.pow(10, Math.max(i, s));
    t = Math.round(t * c), n = Math.round(n * c), r = ("+" === e ? t + n : t - n) / c
  }
  return r
}