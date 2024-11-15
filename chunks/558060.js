n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    s = n(481060),
    l = n(884697),
    o = n(409116),
    c = n(200615),
    d = n(981631),
    u = n(388032),
    m = n(422158);
function h(e) {
    let { product: t, isPremiumUser: n, discount: a, className: h, nitroUpsell: p = !1 } = e,
        f = (0, l.ql)(t, d.tuJ.DEFAULT);
    if (null == f) return null;
    if (f.amount <= 0)
        return (0, r.jsx)('div', {
            className: i()(m.priceTagsContainer, h),
            children: (0, r.jsx)(o.F, { price: f })
        });
    let g = (0, l.ql)(t, d.tuJ.PREMIUM_TIER_2),
        C = !n && !(0, l.x6)(t),
        b =
            (0, l.x6)(t) && n
                ? {
                      ...f,
                      amount: a.original
                  }
                : f;
    return (0, r.jsxs)('div', {
        className: i()(m.priceTagsContainer, h),
        children: [
            (0, r.jsx)(o.F, {
                price: b,
                discount: n ? l.f_ : a,
                className: i()(m.price, {
                    [m.striked]: n,
                    [m.dimmed]: n,
                    [m.fullPrice]: C
                })
            }),
            null != g &&
                (0, r.jsx)(o.F, {
                    price: g,
                    discount: n ? a : l.f_,
                    renderPrice: p
                        ? (e) =>
                              (0, r.jsx)(s.Text, {
                                  variant: 'text-xs/medium',
                                  children: u.intl.format(u.t.Sv8iiY, {
                                      price: e,
                                      subscribeNowHook: (e) => (0, r.jsx)(c.F, { text: e })
                                  })
                              })
                        : C
                          ? (e) => u.intl.formatToPlainString(u.t.W3gIWF, { price: e })
                          : void 0,
                    className: i()(m.price, {
                        [m.dimmed]: !n,
                        [m.fullPrice]: C
                    }),
                    variant: n ? void 0 : 'text-xs/semibold',
                    icon: (0, r.jsx)(s.Tooltip, {
                        text: u.intl.string(u.t.MPFyJy),
                        'aria-label': u.intl.string(u.t.X3Ekj4),
                        children: (e) => {
                            let { ...t } = e;
                            return (0, r.jsx)(s.NitroWheelIcon, {
                                size: 'md',
                                color: 'currentColor',
                                ...t,
                                className: i()(m.premiumIcon, { [m.fullPrice]: C })
                            });
                        }
                    })
                })
        ]
    });
}
