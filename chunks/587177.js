r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(311850);
function a(e, n, r) {
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
class s {
    static fromServer(e) {
        let { prices: n, type: r, premium_type: a, name: o, sku_id: l, summary: u } = e;
        return new s({
            prices: (0, i.l)(n),
            type: r,
            premiumType: a,
            name: o,
            skuId: l,
            summary: u
        });
    }
    constructor(e) {
        a(this, 'prices', void 0), a(this, 'type', void 0), a(this, 'premiumType', void 0), a(this, 'name', void 0), a(this, 'skuId', void 0), a(this, 'summary', void 0), (this.prices = e.prices), (this.type = e.type), (this.premiumType = e.premiumType), (this.name = e.name), (this.skuId = e.skuId), (this.summary = e.summary);
    }
}
