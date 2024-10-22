r.d(t, {
    E: function () {
        return u;
    }
}),
    r(47120);
var s = r(192379),
    n = r(626135),
    a = r(74538),
    i = r(381585),
    l = r(884697),
    o = r(819490),
    c = r(82892),
    d = r(981631);
function u(e, t) {
    let r = (0, i.sp)(),
        u = (0, c.x)(),
        m = a.ZP.canUseCollectibles(u),
        f = s.useRef(null),
        [p, C] = s.useState(!1),
        [h, g] = s.useState(!1),
        _ = (0, o.B)('shop_product_card');
    return (
        s.useEffect(() => {
            if (
                (p && null === f.current
                    ? (f.current = setTimeout(() => {
                          g(!0);
                      }, 1000))
                    : !p && null !== f.current && clearTimeout(f.current),
                h && _)
            ) {
                let s = (0, l.Vw)(e, m, !1),
                    a = (0, l.eu)(e, m, !1);
                n.default.track(d.rMx.COLLECTIBLES_TILE_IMPRESSION, {
                    sku_id: e.skuId,
                    display_price: null == s ? void 0 : s.amount,
                    display_price_currency: null == s ? void 0 : s.currency.toString(),
                    display_price_strikethrough: a,
                    position: null == r ? void 0 : r.tilePosition,
                    page_type: t,
                    page_category: null == r ? void 0 : r.pageCategory,
                    page_section: null == r ? void 0 : r.pageSection,
                    type: 'product',
                    category_position: null == r ? void 0 : r.categoryPosition
                });
            }
            return () => {
                null !== f.current && clearTimeout(f.current);
            };
        }, [p, m, e, r, t, h, _]),
        {
            handleCardVisibilityChange: (e) => {
                C(e);
            }
        }
    );
}
