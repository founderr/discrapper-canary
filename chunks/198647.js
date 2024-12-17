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
r(685816);
class a {
    static fromServer(e) {
        return new a(e);
    }
    constructor(e) {
        i(this, 'categorySkuId', void 0), i(this, 'name', void 0), i(this, 'categoryStoreListingId', void 0), i(this, 'bannerUrl', void 0), i(this, 'logoUrl', void 0), i(this, 'rankedSkuIds', void 0), (this.type = ShopBlockType.HERO), (this.categorySkuId = e.category_sku_id), (this.name = e.name), (this.categoryStoreListingId = e.category_store_listing_id), (this.bannerUrl = e.banner_url), (this.logoUrl = e.hero_logo), (this.rankedSkuIds = e.ranked_sku_ids);
    }
}
