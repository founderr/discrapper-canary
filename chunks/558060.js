r.d(t, {
    Z: function () {
        return f;
    }
});
var s = r(200651);
r(192379);
var n = r(120356),
    a = r.n(n),
    i = r(481060),
    l = r(884697),
    o = r(409116),
    c = r(200615),
    d = r(981631),
    u = r(689938),
    m = r(416806);
function f(e) {
    let { product: t, isPremiumUser: r, discount: n, className: f, nitroUpsell: p = !1 } = e,
        C = (0, l.ql)(t, d.tuJ.DEFAULT);
    if (null == C) return null;
    if (C.amount <= 0)
        return (0, s.jsx)('div', {
            className: a()(m.priceTagsContainer, f),
            children: (0, s.jsx)(o.F, { price: C })
        });
    let h = (0, l.ql)(t, d.tuJ.PREMIUM_TIER_2),
        g = !r && !(0, l.x6)(t),
        _ =
            (0, l.x6)(t) && r
                ? {
                      ...C,
                      amount: n.original
                  }
                : C;
    return (0, s.jsxs)('div', {
        className: a()(m.priceTagsContainer, f),
        children: [
            (0, s.jsx)(o.F, {
                price: _,
                discount: r ? l.f_ : n,
                className: a()(m.price, {
                    [m.striked]: r,
                    [m.dimmed]: r,
                    [m.fullPrice]: g
                })
            }),
            null != h &&
                (0, s.jsx)(o.F, {
                    price: h,
                    discount: r ? n : l.f_,
                    renderPrice: p
                        ? (e) =>
                              (0, s.jsx)(i.Text, {
                                  variant: 'text-xs/medium',
                                  children: u.Z.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format({
                                      price: e,
                                      subscribeNowHook: (e) => (0, s.jsx)(c.F, { text: e })
                                  })
                              })
                        : g
                          ? (e) => u.Z.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({ price: e })
                          : void 0,
                    className: a()(m.price, {
                        [m.dimmed]: !r,
                        [m.fullPrice]: g
                    }),
                    variant: r ? void 0 : 'text-xs/semibold',
                    icon: (0, s.jsx)(i.Tooltip, {
                        text: u.Z.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                        'aria-label': u.Z.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                        children: (e) => {
                            let { ...t } = e;
                            return (0, s.jsx)(i.NitroWheelIcon, {
                                size: 'md',
                                color: 'currentColor',
                                ...t,
                                className: a()(m.premiumIcon, { [m.fullPrice]: g })
                            });
                        }
                    })
                })
        ]
    });
}
