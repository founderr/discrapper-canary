n.d(t, {
    Z: function () {
        return p;
    }
});
var r = n(735250);
n(470079);
var s = n(120356),
    a = n.n(s),
    i = n(481060),
    o = n(884697),
    l = n(409116),
    c = n(200615),
    d = n(981631),
    u = n(689938),
    f = n(889540);
function p(e) {
    let { product: t, isPremiumUser: n, discount: s, className: p, nitroUpsell: g = !1 } = e,
        C = (0, o.ql)(t, d.tuJ.DEFAULT);
    if (null == C) return null;
    if (C.amount <= 0)
        return (0, r.jsx)('div', {
            className: a()(f.priceTagsContainer, p),
            children: (0, r.jsx)(l.F, { price: C })
        });
    let m = (0, o.ql)(t, d.tuJ.PREMIUM_TIER_2),
        _ = !n && !(0, o.x6)(t),
        b =
            (0, o.x6)(t) && n
                ? {
                      ...C,
                      amount: s.original
                  }
                : C;
    return (0, r.jsxs)('div', {
        className: a()(f.priceTagsContainer, p),
        children: [
            (0, r.jsx)(l.F, {
                price: b,
                discount: n ? o.f_ : s,
                className: a()(f.price, {
                    [f.striked]: n,
                    [f.dimmed]: n,
                    [f.fullPrice]: _
                })
            }),
            null != m &&
                (0, r.jsx)(l.F, {
                    price: m,
                    discount: n ? s : o.f_,
                    renderPrice: g
                        ? (e) =>
                              (0, r.jsx)(i.Text, {
                                  variant: 'text-xs/medium',
                                  children: u.Z.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format({
                                      price: e,
                                      subscribeNowHook: (e) => (0, r.jsx)(c.F, { text: e })
                                  })
                              })
                        : _
                          ? (e) => u.Z.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({ price: e })
                          : void 0,
                    className: a()(f.price, {
                        [f.dimmed]: !n,
                        [f.fullPrice]: _
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
                                className: a()(f.premiumIcon, { [f.fullPrice]: _ })
                            });
                        }
                    })
                })
        ]
    });
}
