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
r(87290), r(685816), r(565669);
class a {
    static fromServer(e) {
        return new a(e);
    }
    constructor(e) {
        i(this, 'subblocks', void 0), (this.type = ShopBlockType.FEATURED), (this.subblocks = e.subblocks.map((e) => (e.type === FeaturedSubblockType.CATEGORY ? FeaturedCategorySubblockRecord.fromServer(e) : e)));
    }
}
