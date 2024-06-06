"use strict";
s.r(t);
var i = s("735250");
s("470079");
var a = s("481060");
t.default = e => {
  let {
    product: t,
    analyticsLocations: l
  } = e;
  (0, a.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([s.e("99387"), s.e("87624"), s.e("19452")]).then(s.bind(s, "331042"));
    return s => (0, i.jsx)(e, {
      product: t,
      analyticsLocations: l,
      ...s
    })
  })
}