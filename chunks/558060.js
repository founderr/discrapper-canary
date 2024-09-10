r.d(t, {
    Z: function () {
        return p;
    }
});
var a = r(735250);
r(470079);
var n = r(120356),
    s = r.n(n),
    i = r(481060),
    o = r(884697),
    l = r(409116),
    c = r(200615),
    d = r(981631),
    u = r(689938),
    f = r(416806);
function p(e) {
    let { product: t, isPremiumUser: r, discount: n, className: p, nitroUpsell: m = !1 } = e,
        C = (0, o.ql)(t, d.tuJ.DEFAULT);
    if (null == C) return null;
    if (C.amount <= 0)
        return (0, a.jsx)('div', {
            className: s()(f.priceTagsContainer, p),
            children: (0, a.jsx)(l.F, { price: C })
        });
    let _ = (0, o.ql)(t, d.tuJ.PREMIUM_TIER_2),
        g = !r && !(0, o.x6)(t),
        h =
            (0, o.x6)(t) && r
                ? {
                      ...C,
                      amount: n.original
                  }
                : C;
    return (0, a.jsxs)('div', {
        className: s()(f.priceTagsContainer, p),
        children: [
            (0, a.jsx)(l.F, {
                price: h,
                discount: r ? o.f_ : n,
                className: s()(f.price, {
                    [f.striked]: r,
                    [f.dimmed]: r,
                    [f.fullPrice]: g
                })
            }),
            null != _ &&
                (0, a.jsx)(l.F, {
                    price: _,
                    discount: r ? n : o.f_,
                    renderPrice: m
                        ? (e) =>
                              (0, a.jsx)(i.Text, {
                                  variant: 'text-xs/medium',
                                  children: u.Z.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format({
                                      price: e,
                                      subscribeNowHook: (e) => (0, a.jsx)(c.F, { text: e })
                                  })
                              })
                        : g
                          ? (e) => u.Z.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({ price: e })
                          : void 0,
                    className: s()(f.price, {
                        [f.dimmed]: !r,
                        [f.fullPrice]: g
                    }),
                    variant: r ? void 0 : 'text-xs/semibold',
                    icon: (0, a.jsx)(i.Tooltip, {
                        text: u.Z.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                        'aria-label': u.Z.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                        children: (e) => {
                            let { ...t } = e;
                            return (0, a.jsx)(i.NitroWheelIcon, {
                                size: 'md',
                                color: 'currentColor',
                                ...t,
                                className: s()(f.premiumIcon, { [f.fullPrice]: g })
                            });
                        }
                    })
                })
        ]
    });
}
