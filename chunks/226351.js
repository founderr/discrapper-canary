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
    o: function () {
        return a;
    }
});
class a {
    constructor() {
        i(this, 'promise', void 0),
            i(this, 'resolve', void 0),
            i(this, 'reject', void 0),
            (this.promise = new Promise((e, n) => {
                (this.resolve = e), (this.reject = n);
            }));
    }
}
