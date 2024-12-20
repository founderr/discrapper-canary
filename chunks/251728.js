r.d(n, {
    Y: function () {
        return c;
    }
});
var i = r(411104);
var a = r(685816),
    s = r(549616),
    o = r(794934),
    l = r(198647);
function u(e, n, r) {
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
class c {
    static fromServer(e) {
        return new c(e);
    }
    constructor(e) {
        u(this, 'shopBlocks', void 0),
            u(this, 'categories', void 0),
            (this.shopBlocks = e.shop_blocks.map((e) => {
                switch (e.type) {
                    case a.z.HERO:
                        return l.s.fromServer(e);
                    case a.z.FEATURED:
                        return o.I.fromServer(e);
                    default:
                        throw Error('Unknown block type: '.concat(e.type));
                }
            })),
            (this.categories = e.categories.map((e) => s.Z.fromServer(e)));
    }
}
