"use strict";
E.r(_), E.d(_, {
  transformColorForReducedSaturation: function() {
    return r
  },
  transformColorContrast: function() {
    return s
  }
}), E("222007");
var t = E("10371"),
  o = E.n(t);

function I(e, _, E) {
  let [t, o] = e, [I, T] = _, r = (t + o) / 2;
  return E === r ? r : E < r ? I + (E - t) / (r - t) * (r - I) : r + (E - r) / (o - r) * (T - r)
}
let T = [0, 2];

function r(e, _, E) {
  let t = o(e);
  if ("background" !== _) return t.set("hsl.s", "*".concat(E)).hex();
  {
    let e = function(e, _, E) {
      let [t, o] = e, [I, T] = _;
      return I + (T - I) * ((E - t) / (o - t))
    }([0, 1], [.25, 1], E);
    return t.set("hsl.s", "*".concat(e)).hex()
  }
}
let a = [1.3, .7],
  n = [.98, 1],
  i = [.75, 1.5],
  A = [1.45, .45];

function s(e, _, E, t) {
  switch (_) {
    case "background":
    case "border":
      return o(e).set("hsl.l", "*".concat(I(T, "light" === E ? n : a, t))).hex();
    case "text":
      return o(e).set("hsl.l", "*".concat(I(T, "light" === E ? A : i, t))).hex();
    default:
      return e
  }
}