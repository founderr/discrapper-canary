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
r(87290);
class a {
    static fromServer(e) {
        return new a(e);
    }
    constructor(e) {
        i(this, 'categoryStoreListingId', void 0), i(this, 'name', void 0), i(this, 'bannerUrl', void 0), (this.type = FeaturedSubblockType.CATEGORY), (this.categoryStoreListingId = e.category_store_listing_id), (this.name = e.name), (this.bannerUrl = e.banner_url);
    }
}
