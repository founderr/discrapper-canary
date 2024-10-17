s.d(t, {
    Z: function () {
        return C;
    }
});
var a = s(735250);
s(470079);
var r = s(120356),
    n = s.n(r),
    i = s(481060),
    l = s(884697),
    o = s(409116),
    c = s(200615),
    d = s(981631),
    u = s(689938),
    m = s(416806);
function C(e) {
    let { product: t, isPremiumUser: s, discount: r, className: C, nitroUpsell: f = !1 } = e,
        p = (0, l.ql)(t, d.tuJ.DEFAULT);
    if (null == p) return null;
    if (p.amount <= 0)
        return (0, a.jsx)('div', {
            className: n()(m.priceTagsContainer, C),
            children: (0, a.jsx)(o.F, { price: p })
        });
    let h = (0, l.ql)(t, d.tuJ.PREMIUM_TIER_2),
        g = !s && !(0, l.x6)(t),
        _ =
            (0, l.x6)(t) && s
                ? {
                      ...p,
                      amount: r.original
                  }
                : p;
    return (0, a.jsxs)('div', {
        className: n()(m.priceTagsContainer, C),
        children: [
            (0, a.jsx)(o.F, {
                price: _,
                discount: s ? l.f_ : r,
                className: n()(m.price, {
                    [m.striked]: s,
                    [m.dimmed]: s,
                    [m.fullPrice]: g
                })
            }),
            null != h &&
                (0, a.jsx)(o.F, {
                    price: h,
                    discount: s ? r : l.f_,
                    renderPrice: f
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
                    className: n()(m.price, {
                        [m.dimmed]: !s,
                        [m.fullPrice]: g
                    }),
                    variant: s ? void 0 : 'text-xs/semibold',
                    icon: (0, a.jsx)(i.Tooltip, {
                        text: u.Z.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                        'aria-label': u.Z.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                        children: (e) => {
                            let { ...t } = e;
                            return (0, a.jsx)(i.NitroWheelIcon, {
                                size: 'md',
                                color: 'currentColor',
                                ...t,
                                className: n()(m.premiumIcon, { [m.fullPrice]: g })
                            });
                        }
                    })
                })
        ]
    });
}
