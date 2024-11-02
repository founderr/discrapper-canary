n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(100621);
class r {
    handleScroll(e) {
        this.top.set(e.currentTarget.scrollTop);
    }
    get scrollPosition() {
        return this.top;
    }
    constructor() {
        var e, t, n;
        (e = this),
            (t = 'top'),
            (n = new i.SpringValue(0)),
            'top' in e
                ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (e[t] = n);
    }
}
