"use strict";
a.r(t), a.d(t, {
  closeCollectiblesShopProductDetailsModal: function() {
    return n
  },
  openCollectiblesShopProductDetailsModal: function() {
    return i
  }
});
var l = a("735250");
a("470079");
var s = a("481060");
let r = "collectibles shop product details modal",
  i = e => {
    let {
      product: t,
      category: i,
      analyticsSource: n,
      analyticsLocations: o,
      returnRef: u
    } = e;
    (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("65866"), a.e("36848")]).then(a.bind(a, "702370"));
      return a => (0, l.jsx)(e, {
        ...a,
        product: t,
        category: i,
        analyticsSource: n,
        analyticsLocations: o,
        returnRef: u
      })
    }, {
      modalKey: r
    })
  },
  n = () => {
    (0, s.closeModal)(r)
  }