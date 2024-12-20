n.d(t, {
    E: function () {
        return h;
    }
}),
    n(47120);
var r = n(192379),
    a = n(442837),
    i = n(626135),
    l = n(74538),
    s = n(381585),
    o = n(597688),
    c = n(884697),
    d = n(819490),
    u = n(82892),
    m = n(981631);
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'product',
        h = (0, s.sp)(),
        g = (0, a.e7)([o.Z], () => o.Z.getProduct(e)),
        p = (0, u.x)(),
        f = l.ZP.canUseCollectibles(p),
        C = r.useRef(null),
        [b, v] = r.useState(!1),
        [x, _] = r.useState(!1),
        k = (0, d.B)('shop_product_card');
    return (
        r.useEffect(
            () => (
                b && null === C.current
                    ? (C.current = setTimeout(() => {
                          _(!0);
                      }, 1000))
                    : !b && (null !== C.current && (clearTimeout(C.current), (C.current = null)), _(!1)),
                () => {
                    null !== C.current && (clearTimeout(C.current), (C.current = null));
                }
            ),
            [b]
        ),
        r.useEffect(() => {
            if (x && k) {
                let r = null != g ? (0, c.Vw)(g, f, !1) : null,
                    a = null != g ? (0, c.eu)(g, f, !1) : void 0;
                i.default.track(m.rMx.COLLECTIBLES_TILE_IMPRESSION, {
                    collectibles_shop_session_id: null == h ? void 0 : h.sessionId,
                    sku_id: e,
                    display_price: null == r ? void 0 : r.amount,
                    display_price_currency: null == r ? void 0 : r.currency.toString(),
                    display_price_strikethrough: a,
                    position: null == h ? void 0 : h.tilePosition,
                    page_type: t,
                    page_category: null == h ? void 0 : h.pageCategory,
                    page_section: null == h ? void 0 : h.pageSection,
                    type: n,
                    category_position: null == h ? void 0 : h.categoryPosition
                });
            }
        }, [null == h ? void 0 : h.sessionId, null == h ? void 0 : h.categoryPosition, null == h ? void 0 : h.pageCategory, null == h ? void 0 : h.pageSection, null == h ? void 0 : h.tilePosition, x, f, k, t, g, e, n]),
        {
            handleCardVisibilityChange: (e) => {
                v(e);
            }
        }
    );
}
