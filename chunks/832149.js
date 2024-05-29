"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("481060");
t.default = e => {
  let {
    product: t,
    analyticsLocations: l
  } = e;
  (0, i.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([s.e("99387"), s.e("87624"), s.e("57085")]).then(s.bind(s, "331042"));
    return s => (0, a.jsx)(e, {
      product: t,
      analyticsLocations: l,
      ...s
    })
  })
}