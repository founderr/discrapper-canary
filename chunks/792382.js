"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var r, l = n("656280"),
  i = n.n(l),
  s = n("509043"),
  a = n("666038");
let o = e => null == e ? e : {
  backgroundColors: e.background_colors.map(e => i((0, s.int2hex)(e))),
  buttonColors: e.button_colors.map(e => i((0, s.int2hex)(e))),
  confettiColors: e.confetti_colors.map(e => i((0, s.int2hex)(e)))
};
r = class e extends a.default {
  static fromServer(t) {
    let {
      store_listing_id: n,
      sku_id: r,
      unpublished_at: l,
      styles: i,
      ...s
    } = t, a = null != l ? new Date(l) : null;
    return new e({
      ...s,
      storeListingId: n,
      skuId: r,
      unpublishedAt: a,
      styles: o(i)
    })
  }
  constructor(e) {
    super(), this.storeListingId = e.storeListingId, this.skuId = e.skuId, this.name = e.name, this.summary = e.summary, this.banner = e.banner, this.unpublishedAt = e.unpublishedAt, this.styles = e.styles
  }
}