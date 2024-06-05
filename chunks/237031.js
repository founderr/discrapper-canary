"use strict";
s.r(t), s.d(t, {
  closeCollectiblesShopProductDetailsModal: function() {
    return i
  },
  openCollectiblesShopProductDetailsModal: function() {
    return n
  }
});
var a = s("735250");
s("470079");
var l = s("481060");
let r = "collectibles shop product details modal",
  n = e => {
    let {
      product: t,
      category: n,
      analyticsSource: i,
      analyticsLocations: o,
      returnRef: c
    } = e;
    (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("4934"), s.e("36848")]).then(s.bind(s, "702370"));
      return s => (0, a.jsx)(e, {
        ...s,
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
    (0, l.closeModal)(r)
  }