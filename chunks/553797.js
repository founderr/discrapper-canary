t.d(n, {
    Z: function () {
        return u;
    }
});
var r = t(200651);
t(192379);
var i = t(120356),
    a = t.n(i),
    l = t(937615),
    s = t(474936),
    o = t(388032),
    c = t(728086);
function u(e) {
    let { price: n, currency: t, intervalType: i, className: u, intervalCount: d = 1, isPrepaidPaymentSource: p = !1 } = e,
        f = (0, l.T4)(n, t),
        m = null;
    return (
        i === s.rV.YEAR
            ? (m = o.intl.format(o.t['3U719v'], { price: f }))
            : i === s.rV.MONTH && 1 === d
              ? (m = o.intl.format(o.t.NkR7BQ, { price: f }))
              : i === s.rV.MONTH &&
                d > 1 &&
                (m = o.intl.format(o.t.CNAGg4, {
                    price: f,
                    intervalCount: d
                })),
        (0, r.jsx)('div', {
            className: a()(c.pricePerInterval, u),
            'data-testid': 'PricePerInterval-'.concat(t),
            children: null == i || p ? (0, r.jsx)('strong', { children: f }) : m
        })
    );
}
