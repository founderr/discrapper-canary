"use strict";

function t(e, _, E, t) {
  if (e === _) return !0;
  let o = Object.keys(e),
    I = Object.keys(_);
  if (o.length !== I.length) return null != t && t("shallowEqual: unequal key lengths ".concat(o.length, " !=== ").concat(I.length)), !1;
  let T = [];
  for (let I = 0; I < o.length; I++) {
    let r = o[I];
    if (e[r] !== _[r] && (null == E || !E.includes(r))) {
      if (null == t) return !1;
      T.push(r)
    }
  }
  return null != t && T.length > 0 && t("shallowEqual: unequal keys: ".concat(T.join(", "))), 0 === T.length
}

function o(e, _) {
  return null != _ && e.length === _.length && !e.some((e, E) => _[E] !== e)
}
E.r(_), E.d(_, {
  default: function() {
    return t
  },
  areArraysShallowEqual: function() {
    return o
  }
}), E("424973")