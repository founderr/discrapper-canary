n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(47120);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
n(17089);
class a {
    initialize() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        if (!this.isInitialized) {
            this.isInitialized = !0;
            this._initialize(...t);
        }
    }
    terminate() {
        if (!!this.isInitialized) (this.isInitialized = !1), this._terminate();
    }
    constructor() {
        i(this, 'isInitialized', !1);
    }
}
