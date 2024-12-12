r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(81825);
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
class s extends i.Z {
    static fromServer(e) {
        let { sku_id: n, ...r } = e;
        return new s({
            ...r,
            skuId: n
        });
    }
    constructor(e) {
        super(), a(this, 'id', void 0), a(this, 'skuId', void 0), (this.id = e.id), (this.skuId = e.skuId);
    }
}
