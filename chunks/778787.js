r.d(n, {
    Z: function () {
        return E;
    },
    q: function () {
        return v;
    }
});
var i = r(627341);
var a = r(724458);
var s = r(653041);
var o = r(278074),
    l = r(979554),
    u = r(922347),
    c = r(587177),
    d = r(311850),
    f = r(803358),
    _ = r(212161),
    h = r(981631);
function p(e, n, r) {
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
let m = (e) =>
        (0, o.EQ)(e)
            .with({ type: l.Z.AVATAR_DECORATION }, (e) => u.Z.fromServer(e))
            .with({ type: l.Z.PROFILE_EFFECT }, (e) => _.Z.fromServer(e))
            .otherwise(() => null),
    g = (e) =>
        null != e
            ? e.reduce((e, n) => {
                  let r = m(n);
                  return null != r && e.push(r), e;
              }, [])
            : [];
class E extends f.Z {
    static fromServer(e) {
        let { type: n, premium_type: r, category_sku_id: i, prices: a, bundled_products: s, variants: o, ...l } = e;
        return new E({
            ...super.fromServer(l),
            type: n,
            premiumType: r === h.WND ? null : r,
            categorySkuId: i,
            prices: (0, d.l)(a),
            items: g(l.items),
            bundledProducts: null == s ? void 0 : s.map(c.Z.fromServer),
            variants: null == o ? void 0 : o.map(v.fromServer),
            googleSkuIds: l.google_sku_ids
        });
    }
    constructor(e) {
        super(e), p(this, 'prices', void 0), p(this, 'type', void 0), p(this, 'premiumType', void 0), p(this, 'items', void 0), p(this, 'categorySkuId', void 0), p(this, 'bundledProducts', void 0), p(this, 'variants', void 0), p(this, 'variantGroupStoreListingId', void 0), p(this, 'googleSkuIds', void 0), (this.summary = e.summary), (this.type = e.type), (this.premiumType = e.premiumType), (this.items = e.items), (this.categorySkuId = e.categorySkuId), (this.prices = e.prices), (this.bundledProducts = e.bundledProducts), (this.googleSkuIds = e.googleSkuIds), (this.variants = e.variants);
    }
}
class v extends E {
    static fromServer(e) {
        let { base_variant_name: n, base_variant_sku_id: r, variant_label: i, variant_value: a, ...s } = e;
        return new v({
            ...super.fromServer(s),
            baseVariantName: n,
            baseVariantSkuId: r,
            variantLabel: i,
            variantValue: a
        });
    }
    constructor(e) {
        super(e), p(this, 'baseVariantName', void 0), p(this, 'baseVariantSkuId', void 0), p(this, 'variantLabel', void 0), p(this, 'variantValue', void 0), (this.baseVariantName = e.baseVariantName), (this.baseVariantSkuId = e.baseVariantSkuId), (this.variantLabel = e.variantLabel), (this.variantValue = e.variantValue);
    }
}
