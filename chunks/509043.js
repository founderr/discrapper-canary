"use strict";
E.r(_), E.d(_, {
  hex2int: function() {
    return r
  },
  int2hex: function() {
    return a
  },
  int2hsl: function() {
    return n
  },
  hex2rgb: function() {
    return i
  },
  int2rgba: function() {
    return A
  },
  rgb2int: function() {
    return s
  },
  getDarkness: function() {
    return R
  },
  isValidHex: function() {
    return N
  },
  int2rgbArray: function() {
    return O
  }
});
var t = E("10371"),
  o = E.n(t);
let I = /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d*)?)\))?/;

function T(e) {
  return 1 === e.length ? "0".concat(e) : e
}

function r(e) {
  return o(e).num()
}

function a(e) {
  return e <= 16777215 ? "#".concat(T((e >> 16 & 255).toString(16))).concat(T((e >> 8 & 255).toString(16))).concat(T((255 & e).toString(16))) : "#".concat(T((e >> 24 & 255).toString(16))).concat(T((e >> 16 & 255).toString(16))).concat(T((e >> 8 & 255).toString(16)))
}

function n(e) {
  let _ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
    t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
    o = e >> 16 & 255,
    I = e >> 8 & 255,
    T = 255 & e;
  o /= 255, I /= 255, T /= 255;
  let r = Math.min(o, I, T),
    a = Math.max(o, I, T),
    n = a - r,
    i = 0,
    A = 0,
    s = 0;
  return ((i = Math.round(60 * (i = 0 === n ? 0 : a === o ? (I - T) / n % 6 : a === I ? (T - o) / n + 2 : (o - I) / n + 4))) < 0 && (i += 360), s = (a + r) / 2, A = +(100 * (A = 0 === n ? 0 : n / (1 - Math.abs(2 * s - 1)))).toFixed(1), s = +(100 * s).toFixed(1), _) ? "hsla(".concat(i, ", calc(var(--saturation-factor, 1) * ").concat(A, "%), ").concat(s, "%, ").concat(t, ")") : null != E ? "hsla(".concat(i, ", ").concat(E * A, "%, ").concat(s, "%, ").concat(t, ")") : "hsla(".concat(i, ", ").concat(A, "%, ").concat(s, "%, ").concat(t, ")")
}

function i(e) {
  let _ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  if (!o.valid(e)) return null;
  let E = o(e);
  return E.alpha(null != _ ? _ : E.alpha()).css()
}

function A(e, _) {
  return null == _ && (_ = (e >> 24 & 255) / 255), "rgba(".concat(e >> 16 & 255, ", ").concat(e >> 8 & 255, ", ").concat(255 & e, ", ").concat(_, ")")
}

function s(e) {
  let _ = e.match(I),
    E = null != _ ? {
      red: parseInt(_[1]),
      green: parseInt(_[2]),
      blue: parseInt(_[3])
    } : {
      red: 0,
      green: 0,
      blue: 0
    };
  return (E.red << 16) + (E.green << 8) + E.blue
}

function R(e) {
  return 1 - (.299 * (e >> 16 & 255) + .587 * (e >> 8 & 255) + .114 * (255 & e)) / 255
}

function N(e) {
  return o.valid(e)
}

function O(e) {
  return [e >> 16 & 255, e >> 8 & 255, 255 & e]
}