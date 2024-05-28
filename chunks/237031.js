"use strict";
a.r(t), a.d(t, {
  closeCollectiblesShopProductDetailsModal: function() {
    return o
  },
  openCollectiblesShopProductDetailsModal: function() {
    return l
  }
});
var s = a("735250");
a("470079");
var r = a("481060");
let n = "collectibles shop product details modal",
  l = e => {
    let {
      product: t,
      category: l,
      analyticsSource: o,
      analyticsLocations: i,
      returnRef: c
    } = e;
    (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("65866"), a.e("36848")]).then(a.bind(a, "702370"));
      return a => (0, s.jsx)(e, {
        ...a,
        product: t,
        category: l,
        analyticsSource: o,
        analyticsLocations: i,
        returnRef: c
      })
    }, {
      modalKey: n
    })
  },
  o = () => {
    (0, r.closeModal)(n)
  }