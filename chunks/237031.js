"use strict";
t.d(s, {
  T: function() {
    return i
  },
  v: function() {
    return l
  }
});
var n = t(735250);
t(470079);
var a = t(481060);
let r = "collectibles shop product details modal",
  i = e => {
    let {
      product: s,
      category: i,
      analyticsSource: l,
      analyticsLocations: o,
      returnRef: c
    } = e;
    (0, a.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("2026")]).then(t.bind(t, 702370));
      return t => (0, n.jsx)(e, {
        ...t,
        product: s,
        category: i,
        analyticsSource: l,
        analyticsLocations: o,
        returnRef: c
      })
    }, {
      modalKey: r
    })
  },
  l = () => {
    (0, a.closeModal)(r)
  }