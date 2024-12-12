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
    constructor(e, n, r) {
        i(this, 'name', void 0),
            i(this, 'description', void 0),
            i(this, 'getFeatureValue', void 0),
            (this.name = e),
            (this.description = r),
            (this.getFeatureValue = n),
            Object.defineProperty(this, 'getFeatureValue', {
                value: n,
                configurable: !1,
                writable: !1
            });
    }
}
