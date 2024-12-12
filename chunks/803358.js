r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(979590),
    a = r.n(i),
    s = r(866442),
    o = r(81825);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let u = (e) =>
    null == e
        ? e
        : {
              backgroundColors: e.background_colors.map((e) => a()((0, s.Rf)(e))),
              buttonColors: e.button_colors.map((e) => a()((0, s.Rf)(e))),
              confettiColors: e.confetti_colors.map((e) => a()((0, s.Rf)(e)))
          };
class c extends o.Z {
    static fromServer(e) {
        let { store_listing_id: n, sku_id: r, unpublished_at: i, styles: a, ...s } = e,
            o = null != i ? new Date(i) : null;
        return new c({
            ...s,
            storeListingId: n,
            skuId: r,
            unpublishedAt: o,
            styles: u(a)
        });
    }
    constructor(e) {
        super(), l(this, 'storeListingId', void 0), l(this, 'skuId', void 0), l(this, 'name', void 0), l(this, 'summary', void 0), l(this, 'banner', void 0), l(this, 'unpublishedAt', void 0), l(this, 'styles', void 0), (this.storeListingId = e.storeListingId), (this.skuId = e.skuId), (this.name = e.name), (this.summary = e.summary), (this.banner = e.banner), (this.unpublishedAt = e.unpublishedAt), (this.styles = e.styles);
    }
}
