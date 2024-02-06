"use strict";
r.r(t), r.d(t, {
  default: function() {
    return n
  }
});
var n, l = r("656280"),
  i = r.n(l),
  s = r("509043"),
  a = r("666038");
let u = e => null == e ? e : {
  backgroundColors: e.background_colors.map(e => i((0, s.int2hex)(e))),
  buttonColors: e.button_colors.map(e => i((0, s.int2hex)(e))),
  confettiColors: e.confetti_colors.map(e => i((0, s.int2hex)(e)))
};
n = class e extends a.default {
  static fromServer(t) {
    let {
      store_listing_id: r,
      sku_id: n,
      unpublished_at: l,
      styles: i,
      ...s
    } = t, a = null != l ? new Date(l) : null;
    return new e({
      ...s,
      storeListingId: r,
      skuId: n,
      unpublishedAt: a,
      styles: u(i)
    })
  }
  constructor(e) {
    super(), this.storeListingId = e.storeListingId, this.skuId = e.skuId, this.name = e.name, this.summary = e.summary, this.banner = e.banner, this.unpublishedAt = e.unpublishedAt, this.styles = e.styles
  }
}