"use strict";
s.d(t, {
  T: function() {
    return i
  },
  v: function() {
    return l
  }
});
var n = s(735250);
s(470079);
var r = s(481060);
let a = "collectibles shop product details modal",
  i = e => {
    let {
      product: t,
      category: i,
      analyticsSource: l,
      analyticsLocations: o,
      returnRef: c
    } = e;
    (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("2026")]).then(s.bind(s, 702370));
      return s => (0, n.jsx)(e, {
        ...s,
        product: t,
        category: i,
        analyticsSource: l,
        analyticsLocations: o,
        returnRef: c
      })
    }, {
      modalKey: a
    })
  },
  l = () => {
    (0, r.closeModal)(a)
  }