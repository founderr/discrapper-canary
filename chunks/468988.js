n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(689938);
let i = ['a', 'b', 'c', 'd'],
    l = (e) => e;
function s(e, t) {
    let n = {},
        r = Math.min(e.length, i.length);
    for (let l = 0; l < r; ++l) n[i[l]] = (n, r) => t(e[l], r);
    return n;
}
class a {
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
                return r.Z.Messages.GENERIC_FORMATTED_LIST_TWO.format(s(this.items, e));
            case 3:
                return r.Z.Messages.GENERIC_FORMATTED_LIST_THREE.format(s(this.items, e));
            default:
                return r.Z.Messages.GENERIC_FORMATTED_LIST_FOUR.format(s(this.items, e));
        }
    }
    constructor(e) {
        var t, n, r;
        (t = this),
            (r = void 0),
            (n = 'items') in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r),
            (this.items = e);
    }
}
