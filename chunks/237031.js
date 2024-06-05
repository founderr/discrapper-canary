"use strict";
s.r(t), s.d(t, {
  closeCollectiblesShopProductDetailsModal: function() {
    return i
  },
  openCollectiblesShopProductDetailsModal: function() {
    return r
  }
});
var a = s("735250");
s("470079");
var l = s("481060");
let n = "collectibles shop product details modal",
  r = e => {
    let {
      product: t,
      category: r,
      analyticsSource: i,
      analyticsLocations: o,
      returnRef: u
    } = e;
    (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("2026")]).then(s.bind(s, "702370"));
      return s => (0, a.jsx)(e, {
        ...s,
        product: t,
        category: r,
        analyticsSource: i,
        analyticsLocations: o,
        returnRef: u
      })
    }, {
      modalKey: n
    })
  },
  i = () => {
    (0, l.closeModal)(n)
  }