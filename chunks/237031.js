"use strict";
l.r(t), l.d(t, {
  closeCollectiblesShopProductDetailsModal: function() {
    return i
  },
  openCollectiblesShopProductDetailsModal: function() {
    return n
  }
});
var a = l("735250");
l("470079");
var s = l("481060");
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
      } = await Promise.all([l.e("99387"), l.e("65866"), l.e("36848")]).then(l.bind(l, "702370"));
      return l => (0, a.jsx)(e, {
        ...l,
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