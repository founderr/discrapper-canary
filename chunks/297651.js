n.d(t, {
    E: function () {
        return u;
    }
}),
    n(47120);
var r = n(192379),
    s = n(626135),
    a = n(74538),
    i = n(381585),
    l = n(884697),
    o = n(819490),
    c = n(82892),
    d = n(981631);
function u(e, t) {
    let n = (0, i.sp)(),
        u = (0, c.x)(),
        m = a.ZP.canUseCollectibles(u),
        f = r.useRef(null),
        [p, C] = r.useState(!1),
        [h, g] = r.useState(!1),
        _ = (0, o.B)('shop_product_card');
    return (
        r.useEffect(
            () => (
                p && null === f.current
                    ? (f.current = setTimeout(() => {
                          g(!0);
                      }, 1000))
                    : !p && (null !== f.current && (clearTimeout(f.current), (f.current = null)), g(!1)),
                () => {
                    null !== f.current && (clearTimeout(f.current), (f.current = null));
                }
            ),
            [p]
        ),
        r.useEffect(() => {
            if (h && _) {
                let r = (0, l.Vw)(e, m, !1),
                    a = (0, l.eu)(e, m, !1);
                s.default.track(d.rMx.COLLECTIBLES_TILE_IMPRESSION, {
                    sku_id: e.skuId,
                    display_price: null == r ? void 0 : r.amount,
                    display_price_currency: null == r ? void 0 : r.currency.toString(),
                    display_price_strikethrough: a,
                    position: null == n ? void 0 : n.tilePosition,
                    page_type: t,
                    page_category: null == n ? void 0 : n.pageCategory,
                    page_section: null == n ? void 0 : n.pageSection,
                    type: 'product',
                    category_position: null == n ? void 0 : n.categoryPosition
                });
            }
        }, [null == n ? void 0 : n.categoryPosition, null == n ? void 0 : n.pageCategory, null == n ? void 0 : n.pageSection, null == n ? void 0 : n.tilePosition, h, m, _, t, e]),
        {
            handleCardVisibilityChange: (e) => {
                C(e);
            }
        }
    );
}
