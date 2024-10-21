t.d(n, {
    Z: function () {
        return u;
    }
});
var a = t(200651);
t(192379);
var s = t(120356),
    r = t.n(s),
    i = t(937615),
    l = t(474936),
    o = t(689938),
    c = t(446236);
function u(e) {
    let { price: n, currency: t, intervalType: s, className: u, intervalCount: d = 1, isPrepaidPaymentSource: _ = !1 } = e,
        I = (0, i.T4)(n, t),
        E = null;
    return (
        s === l.rV.YEAR
            ? (E = o.Z.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({ price: I }))
            : s === l.rV.MONTH && 1 === d
              ? (E = o.Z.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({ price: I }))
              : s === l.rV.MONTH &&
                d > 1 &&
                (E = o.Z.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
                    price: I,
                    intervalCount: d
                })),
        (0, a.jsx)('div', {
            className: r()(c.pricePerInterval, u),
            'data-testid': 'PricePerInterval-'.concat(t),
            children: null == s || _ ? (0, a.jsx)('strong', { children: I }) : E
        })
    );
}
