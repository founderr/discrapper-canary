function i(e, n, r) {
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
r.d(n, {
    Z: function () {
        return a;
    }
});
class a {
    constructor(e, n) {
        i(this, 'skuId', void 0), i(this, 'skuFeatures', void 0), (this.skuId = e), (this.skuFeatures = n);
    }
}
