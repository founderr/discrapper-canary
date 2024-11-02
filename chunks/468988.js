n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(388032);
let r = ['a', 'b', 'c', 'd'],
    l = (e) => e;
function a(e, t) {
    let n = {},
        i = Math.min(e.length, r.length);
    for (let l = 0; l < i; ++l) n[r[l]] = (n, i) => t(e[l], i);
    return n;
}
class o {
    asString() {
        return this.transformed(l);
    }
    isEmpty() {
        return 0 === this.items.length;
    }
    transformed(e) {
        switch (this.items.length) {
            case 0:
                return '';
            case 1:
                return e(this.items[0], '');
            case 2:
                return i.intl.format(i.t.PSaOdX, a(this.items, e));
            case 3:
                return i.intl.format(i.t.zmkz7O, a(this.items, e));
            default:
                return i.intl.format(i.t.Lyyt09, a(this.items, e));
        }
    }
    constructor(e) {
        var t, n, i;
        (t = this),
            (i = void 0),
            (n = 'items') in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i),
            (this.items = e);
    }
}
