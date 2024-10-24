n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(200651);
n(192379);
var s = n(120356),
    a = n.n(s),
    i = n(481060),
    l = n(884697),
    o = n(409116),
    c = n(200615),
    d = n(981631),
    u = n(689938),
    m = n(416806);
function f(e) {
    let { product: t, isPremiumUser: n, discount: s, className: f, nitroUpsell: p = !1 } = e,
        C = (0, l.ql)(t, d.tuJ.DEFAULT);
    if (null == C) return null;
    if (C.amount <= 0)
        return (0, r.jsx)('div', {
            className: a()(m.priceTagsContainer, f),
            children: (0, r.jsx)(o.F, { price: C })
        });
    let h = (0, l.ql)(t, d.tuJ.PREMIUM_TIER_2),
        g = !n && !(0, l.x6)(t),
        _ =
            (0, l.x6)(t) && n
                ? {
                      ...C,
                      amount: s.original
                  }
                : C;
    return (0, r.jsxs)('div', {
        className: a()(m.priceTagsContainer, f),
        children: [
            (0, r.jsx)(o.F, {
                price: _,
                discount: n ? l.f_ : s,
                className: a()(m.price, {
                    [m.striked]: n,
                    [m.dimmed]: n,
                    [m.fullPrice]: g
                })
            }),
            null != h &&
                (0, r.jsx)(o.F, {
                    price: h,
                    discount: n ? s : l.f_,
                    renderPrice: p
                        ? (e) =>
                              (0, r.jsx)(i.Text, {
                                  variant: 'text-xs/medium',
                                  children: u.Z.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format({
                                      price: e,
                                      subscribeNowHook: (e) => (0, r.jsx)(c.F, { text: e })
                                  })
                              })
                        : g
                          ? (e) => u.Z.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({ price: e })
                          : void 0,
                    className: a()(m.price, {
                        [m.dimmed]: !n,
                        [m.fullPrice]: g
                    }),
                    variant: n ? void 0 : 'text-xs/semibold',
                    icon: (0, r.jsx)(i.Tooltip, {
                        text: u.Z.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                        'aria-label': u.Z.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                        children: (e) => {
                            let { ...t } = e;
                            return (0, r.jsx)(i.NitroWheelIcon, {
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
