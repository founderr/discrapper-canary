"use strict";
n.r(t), n.d(t, {
  useControlledState: function() {
    return a
  },
  clamp: function() {
    return o
  },
  snapValueToStep: function() {
    return i
  }
}), n("222007");
var r = n("884691");

function a(e, t, n) {
  let [a, o] = (0, r.useState)(e || t), i = (0, r.useRef)(void 0 !== e), s = void 0 !== e;
  (0, r.useEffect)(() => {
    let e = i.current;
    e !== s && console.warn("WARN: A component changed from ".concat(e ? "controlled" : "uncontrolled", " to ").concat(s ? "controlled" : "uncontrolled", ".")), i.current = s
  }, [s]);
  let c = s ? e : a,
    l = (0, r.useCallback)(function(e) {
      for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) r[a - 1] = arguments[a];
      let i = function(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) r[a - 1] = arguments[a];
        n && !Object.is(c, e) && n(e, ...r), !s && (c = e)
      };
      if ("function" == typeof e) {
        console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320");
        o(function(t) {
          for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) a[o - 1] = arguments[o];
          let l = e(s ? c : t, ...a);
          return (i(l, ...r), s) ? t : l
        })
      } else !s && o(e), i(e, ...r)
    }, [s, c, n]);
  return [c, l]
}

function o(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0;
  return Math.min(Math.max(e, t), n)
}

function i(e, t, n, r) {
  t = Number(t), n = Number(n);
  let a = (e - (isNaN(t) ? 0 : t)) % r,
    o = 2 * Math.abs(a) >= r ? e + Math.sign(a) * (r - Math.abs(a)) : e - a;
  isNaN(t) ? !isNaN(n) && o > n && (o = Math.floor(n / r) * r) : o < t ? o = t : !isNaN(n) && o > n && (o = t + Math.floor((n - t) / r) * r);
  let i = r.toString(),
    s = i.indexOf("."),
    c = s >= 0 ? i.length - s : 0;
  if (c > 0) {
    let e = Math.pow(10, c);
    o = Math.round(o * e) / e
  }
  return o
}