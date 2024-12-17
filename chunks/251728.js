var i = r(411104);
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
r(685816), r(794934), r(198647);
class s {
    static fromServer(e) {
        return new s(e);
    }
    constructor(e) {
        a(this, 'shopBlocks', void 0),
            a(this, 'categories', void 0),
            (this.shopBlocks = e.shop_blocks.map((e) => {
                switch (e.type) {
                    case ShopBlockType.HERO:
                        return HeroBlockRecord.fromServer(e);
                    case ShopBlockType.FEATURED:
                        return FeaturedBlockRecord.fromServer(e);
                    default:
                        throw Error('Unknown block type: '.concat(e.type));
                }
            })),
            (this.categories = e.categories);
    }
}
