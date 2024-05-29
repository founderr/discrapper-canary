"use strict";
a.r(t), a.d(t, {
  closeCollectiblesShopProductDetailsModal: function() {
    return i
  },
  openCollectiblesShopProductDetailsModal: function() {
    return n
  }
});
var l = a("735250");
a("470079");
var s = a("481060");
let r = "collectibles shop product details modal",
  n = e => {
    let {
      product: t,
      category: n,
      analyticsSource: i,
      analyticsLocations: o,
      returnRef: c
    } = e;
    (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("65866"), a.e("36848")]).then(a.bind(a, "702370"));
      return a => (0, l.jsx)(e, {
        ...a,
        product: t,
        category: n,
        analyticsSource: i,
        analyticsLocations: o,
        returnRef: c
      })
    }, {
      modalKey: r
    })
  },
  i = () => {
    (0, s.closeModal)(r)
  }