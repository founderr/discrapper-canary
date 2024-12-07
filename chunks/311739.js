n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(782568),
    l = n(583434),
    u = n(124072),
    c = n(692629),
    d = n(626135),
    f = n(981631),
    _ = n(388032),
    p = n(45348);
function h(e) {
    var t;
    let { shopLink: n, skuId: i, onClick: o } = e,
        { product: d } = (0, l.T)(i);
    return (0, r.jsxs)(
        u.Z,
        {
            role: 'link',
            href: n,
            onClick: o,
            children: [
                (0, r.jsx)(s.ShopIcon, {
                    size: 'sm',
                    className: a()(p.icon),
                    color: s.tokens.colors.MENTION_FOREGROUND
                }),
                null !== (t = null == d ? void 0 : d.name) && void 0 !== t ? t : _.intl.string(_.t['Ij+2ra']),
                (0, r.jsx)(c.Z, {})
            ]
        },
        i
    );
}
function m(e) {
    return {
        react(t, n, i) {
            let a = i.noStyleAndInteraction
                ? void 0
                : (n) => {
                      e.shouldStopPropagation && (null == n || n.stopPropagation()), d.default.track(f.rMx.SHOP_LINK_MENTION_CLICKED, { sku_id: t.skuId }), (0, o.Z)(t.shopLink);
                  };
            return (0, r.jsx)(h, {
                shopLink: t.shopLink,
                skuId: t.skuId,
                onClick: a
            });
        }
    };
}
