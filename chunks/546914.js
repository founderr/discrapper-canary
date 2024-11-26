n.d(t, {
    t: function () {
        return o;
    }
});
var r = n(927521),
    i = n(165352);
function a(e) {
    return 'minguo' === e.era ? e.year + 1911 : 1 - e.year + 1911;
}
function s(e) {
    let t = e - 1911;
    return t > 0 ? ['minguo', t] : ['before_minguo', 1 - t];
}
class o extends i.IQ {
    fromJulianDay(e) {
        let t = super.fromJulianDay(e),
            [n, a] = s((0, i.J4)(t.era, t.year));
        return new r.aw(this, n, a, t.month, t.day);
    }
    toJulianDay(e) {
        return super.toJulianDay(l(e));
    }
    getEras() {
        return ['before_minguo', 'minguo'];
    }
    balanceDate(e) {
        let [t, n] = s(a(e));
        (e.era = t), (e.year = n);
    }
    isInverseEra(e) {
        return 'before_minguo' === e.era;
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(l(e));
    }
    getYearsInEra(e) {
        return 'before_minguo' === e.era ? 9999 : 8088;
    }
    constructor(...e) {
        super(...e), (this.identifier = 'roc');
    }
}
function l(e) {
    let [t, n] = (0, i.JD)(a(e));
    return new r.aw(t, n, e.month, e.day);
}
