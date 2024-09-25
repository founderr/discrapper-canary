n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(724458);
var i = n(627341);
var a = n(653041);
var o = n(278074),
    s = n(979554),
    l = n(922347),
    u = n(587177),
    c = n(311850),
    d = n(803358),
    _ = n(212161),
    E = n(981631);
function f(e, t, n) {
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
class h extends d.Z {
    static fromServer(e) {
        let { type: t, premium_type: n, category_sku_id: r, prices: i, bundled_products: a, ...d } = e;
        return new h({
            ...super.fromServer(d),
            type: t,
            premiumType: n === E.WND ? null : n,
            categorySkuId: r,
            prices: (0, c.l)(i),
            items: d.items.reduce(
                (e, t) =>
                    (0, o.EQ)(t)
                        .with({ type: s.Z.AVATAR_DECORATION }, (t) => (e.push(l.Z.fromServer(t)), e))
                        .with({ type: s.Z.PROFILE_EFFECT }, (t) => (e.push(_.Z.fromServer(t)), e))
                        .otherwise(() => e),
                []
            ),
            bundledProducts: null == a ? void 0 : a.map(u.Z.fromServer),
            googleSkuIds: d.google_sku_ids
        });
    }
    constructor(e) {
        super(e), f(this, 'prices', void 0), f(this, 'type', void 0), f(this, 'premiumType', void 0), f(this, 'items', void 0), f(this, 'categorySkuId', void 0), f(this, 'bundledProducts', void 0), f(this, 'googleSkuIds', void 0), (this.summary = e.summary), (this.type = e.type), (this.premiumType = e.premiumType), (this.items = e.items), (this.categorySkuId = e.categorySkuId), (this.prices = e.prices), (this.bundledProducts = e.bundledProducts), (this.googleSkuIds = e.googleSkuIds);
    }
}
