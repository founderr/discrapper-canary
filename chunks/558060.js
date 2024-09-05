n.d(t, {
    Z: function () {
        return p;
    }
});
var a = n(735250);
n(470079);
var r = n(120356),
    s = n.n(r),
    o = n(481060),
    i = n(884697),
    l = n(409116),
    c = n(200615),
    d = n(981631),
    u = n(689938),
    f = n(889540);
function p(e) {
    let { product: t, isPremiumUser: n, discount: r, className: p, nitroUpsell: g = !1 } = e,
        C = (0, i.ql)(t, d.tuJ.DEFAULT);
    if (null == C) return null;
    if (C.amount <= 0)
        return (0, a.jsx)('div', {
            className: s()(f.priceTagsContainer, p),
            children: (0, a.jsx)(l.F, { price: C })
        });
    let m = (0, i.ql)(t, d.tuJ.PREMIUM_TIER_2),
        _ = !n && !(0, i.x6)(t),
        h =
            (0, i.x6)(t) && n
                ? {
                      ...C,
                      amount: r.original
                  }
                : C;
    return (0, a.jsxs)('div', {
        className: s()(f.priceTagsContainer, p),
        children: [
            (0, a.jsx)(l.F, {
                price: h,
                discount: n ? i.f_ : r,
                className: s()(f.price, {
                    [f.striked]: n,
                    [f.dimmed]: n,
                    [f.fullPrice]: _
                })
            }),
            null != m &&
                (0, a.jsx)(l.F, {
                    price: m,
                    discount: n ? r : i.f_,
                    renderPrice: g
                        ? (e) =>
                              (0, a.jsx)(o.Text, {
                                  variant: 'text-xs/medium',
                                  children: u.Z.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format({
                                      price: e,
                                      subscribeNowHook: (e) => (0, a.jsx)(c.F, { text: e })
                                  })
                              })
                        : _
                          ? (e) => u.Z.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({ price: e })
                          : void 0,
                    className: s()(f.price, {
                        [f.dimmed]: !n,
                        [f.fullPrice]: _
                    }),
                    variant: n ? void 0 : 'text-xs/semibold',
                    icon: (0, a.jsx)(o.Tooltip, {
                        text: u.Z.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                        'aria-label': u.Z.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                        children: (e) => {
                            let { ...t } = e;
                            return (0, a.jsx)(o.NitroWheelIcon, {
                                size: 'md',
                                color: 'currentColor',
                                ...t,
                                className: s()(f.premiumIcon, { [f.fullPrice]: _ })
                            });
                        }
                    })
                })
        ]
    });
}
