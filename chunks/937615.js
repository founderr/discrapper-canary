n.d(t, {
    T3: function () {
        return d;
    },
    T4: function () {
        return u;
    },
    og: function () {
        return c;
    },
    xg: function () {
        return _;
    }
});
var r = n(411104);
var i = n(221513),
    a = n(706454),
    o = n(74538),
    s = n(474936),
    l = n(689938);
function u(e, t, n) {
    var r;
    let o = null !== (r = null == n ? void 0 : n.localeOverride) && void 0 !== r ? r : a.default.locale;
    return (0, i.T4)(e, t, o, n);
}
function c(e, t, n) {
    if (t === s.rV.YEAR) return l.Z.Messages.BILLING_PRICE_PER_YEAR.format({ price: e });
    if (t === s.rV.MONTH && 1 === n) return l.Z.Messages.BILLING_PRICE_PER_MONTH.format({ price: e });
    if (t === s.rV.MONTH && n > 1)
        return l.Z.Messages.BILLING_PRICE_PER_MULTI_MONTHS.format({
            price: e,
            intervalCount: n
        });
    throw Error('Unsupported interval type: '.concat(t, ', and interval count: ').concat(n));
}
function d(e, t) {
    return Intl.NumberFormat(e, {
        style: 'percent',
        minimumFractionDigits: 0
    }).format(t);
}
function _(e) {
    let t = 'interval_count' in e ? e.interval_count : e.intervalCount,
        n = (0, o.aS)(e.id);
    return c(u(n.amount, n.currency), e.interval, t);
}
