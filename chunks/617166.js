"use strict";
n.r(t), n.d(t, {
  useSliderState: function() {
    return i
  }
}), n("222007");
var r = n("240849"),
  a = n("679750"),
  o = n("884691");

function i(e) {
  var t;
  let {
    isDisabled: n = !1,
    minValue: i = 0,
    maxValue: u = 100,
    numberFormatter: d,
    step: p = 1,
    orientation: f = "horizontal"
  } = e, h = (0, o.useMemo)(() => {
    let e = (u - i) / 10;
    return Math.max(e = (0, r.snapValueToStep)(e, 0, e + p, p), p)
  }, [p, u, i]), m = (0, o.useMemo)(() => c(e.value), [e.value]), v = (0, o.useMemo)(() => null !== (t = c(e.defaultValue)) && void 0 !== t ? t : [i], [e.defaultValue, i]), g = l(e.value, e.defaultValue, e.onChange), y = l(e.value, e.defaultValue, e.onChangeEnd), [b, x] = (0, a.useControlledState)(m, v, g), [S, w] = (0, o.useState)(Array(b.length).fill(!1)), D = (0, o.useRef)(Array(b.length).fill(!0)), [C, k] = (0, o.useState)(void 0), P = (0, o.useRef)(b), E = (0, o.useRef)(S), T = e => {
    P.current = e, x(e)
  }, M = e => {
    E.current = e, w(e)
  };

  function R(e) {
    return (e - i) / (u - i)
  }

  function O(e) {
    return 0 === e ? i : b[e - 1]
  }

  function I(e) {
    return e === b.length - 1 ? u : b[e + 1]
  }

  function A(e) {
    return D.current[e]
  }

  function L(e, t) {
    if (n || !A(e)) return;
    let a = O(e),
      o = I(e);
    t = (0, r.snapValueToStep)(t, a, o, p), T(s(P.current, e, t))
  }

  function N(e) {
    return d.format(e)
  }

  function j(e) {
    let t = e * (u - i) + i;
    return (0, r.clamp)(Math.round((t - i) / p) * p + i, i, u)
  }
  return {
    values: b,
    getThumbValue: e => b[e],
    setThumbValue: L,
    setThumbPercent: function(e, t) {
      L(e, j(t))
    },
    isThumbDragging: e => S[e],
    setThumbDragging: function(e, t) {
      if (n || !A(e)) return;
      let r = E.current[e];
      E.current = s(E.current, e, t), M(E.current), y && r && !E.current.some(Boolean) && y(P.current)
    },
    focusedThumb: C,
    setFocusedThumb: k,
    getThumbPercent: e => R(b[e]),
    getValuePercent: R,
    getThumbValueLabel: e => N(b[e]),
    getFormattedValue: N,
    getThumbMinValue: O,
    getThumbMaxValue: I,
    getPercentValue: j,
    isThumbEditable: A,
    setThumbEditable: function(e, t) {
      D.current[e] = t
    },
    incrementThumb: function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = Math.max(t, p);
      L(e, (0, r.snapValueToStep)(b[e] + n, i, u, p))
    },
    decrementThumb: function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = Math.max(t, p);
      L(e, (0, r.snapValueToStep)(b[e] - n, i, u, p))
    },
    step: p,
    pageSize: h,
    orientation: f,
    isDisabled: n
  }
}

function s(e, t, n) {
  return e[t] === n ? e : [...e.slice(0, t), n, ...e.slice(t + 1)]
}

function c(e) {
  if (null != e) return Array.isArray(e) ? e : [e]
}

function l(e, t, n) {
  return r => {
    "number" == typeof e || "number" == typeof t ? null == n || n(r[0]) : null == n || n(r)
  }
}