n.d(t, {
    E: function () {
        return u;
    }
}),
    n(47120);
var r = n(192379),
    a = n(626135),
    s = n(74538),
    i = n(381585),
    l = n(884697),
    o = n(819490),
    c = n(82892),
    d = n(981631);
function u(e, t) {
    let n = (0, i.sp)(),
        u = (0, c.x)(),
        m = s.ZP.canUseCollectibles(u),
        h = r.useRef(null),
        [p, f] = r.useState(!1),
        [g, C] = r.useState(!1),
        b = (0, o.B)('shop_product_card');
    return (
        r.useEffect(
            () => (
                p && null === h.current
                    ? (h.current = setTimeout(() => {
                          C(!0);
                      }, 1000))
                    : !p && (null !== h.current && (clearTimeout(h.current), (h.current = null)), C(!1)),
                () => {
                    null !== h.current && (clearTimeout(h.current), (h.current = null));
                }
            ),
            [p]
        ),
        r.useEffect(() => {
            if (g && b) {
                let r = (0, l.Vw)(e, m, !1),
                    s = (0, l.eu)(e, m, !1);
                a.default.track(d.rMx.COLLECTIBLES_TILE_IMPRESSION, {
                    collectibles_shop_session_id: null == n ? void 0 : n.sessionId,
                    sku_id: e.skuId,
                    display_price: null == r ? void 0 : r.amount,
                    display_price_currency: null == r ? void 0 : r.currency.toString(),
                    display_price_strikethrough: s,
                    position: null == n ? void 0 : n.tilePosition,
                    page_type: t,
                    page_category: null == n ? void 0 : n.pageCategory,
                    page_section: null == n ? void 0 : n.pageSection,
                    type: 'product',
                    category_position: null == n ? void 0 : n.categoryPosition
                });
            }
        }, [null == n ? void 0 : n.sessionId, null == n ? void 0 : n.categoryPosition, null == n ? void 0 : n.pageCategory, null == n ? void 0 : n.pageSection, null == n ? void 0 : n.tilePosition, g, m, b, t, e]),
        {
            handleCardVisibilityChange: (e) => {
                f(e);
            }
        }
    );
}
