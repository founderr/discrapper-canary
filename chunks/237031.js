"use strict";
n.d(t, {
  T: function() {
    return o
  },
  v: function() {
    return s
  }
});
var r = n(735250);
n(470079);
var i = n(481060);
let a = "collectibles shop product details modal",
  o = e => {
    let {
      product: t,
      category: o,
      analyticsSource: s,
      analyticsLocations: c,
      returnRef: l
    } = e;
    (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e("2026").then(n.bind(n, 702370));
      return n => (0, r.jsx)(e, {
        ...n,
        product: t,
        category: o,
        analyticsSource: s,
        analyticsLocations: c,
        returnRef: l
      })
    }, {
      modalKey: a
    })
  },
  s = () => {
    (0, i.closeModal)(a)
  }