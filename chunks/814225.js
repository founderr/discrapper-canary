"use strict";
n.r(t), n.d(t, {
  getReadablePreorderReleaseDate: function() {
    return E
  },
  getSKUIdFromURL: function() {
    return d
  }
}), n("757143"), n("47120");
var s = n("913527"),
  a = n.n(s),
  l = n("266067");
n("358085"), n("73346");
var i = n("981631");
n("689938");
let r = {},
  o = {},
  u = Object.freeze({
    ALL: -1,
    ...i.SKUGenres
  });

function d(e) {
  let t = (0, l.matchPath)(e, {
    path: i.Routes.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug")
  });
  return null != t ? t.params.skuId : null
}
Object.keys(u).forEach(e => {
  let t = e.toLowerCase().replace(/_/g, "-"),
    n = u[e];
  r[t] = n, o[n] = t
});
let c = [
  ["YYYY-MM-DD", "MMMM DD, Y"],
  ["YYYY-MM", "MMMM Y"],
  ["MM-DD", "MMMM DD"],
  ["MM", "MMMM"],
  ["YYYY", "Y"]
];

function E(e) {
  let {
    preorderReleaseAt: t,
    preorderApproximateReleaseDate: n
  } = e;
  if (null != t) return t.format("MMMM DD");
  if (null == n) return null;
  for (let e = 0; e < c.length; e++) {
    let [t, s] = c[e], l = a()(n, t, !0);
    if (l.isValid()) return l.format(s)
  }
  return n
}