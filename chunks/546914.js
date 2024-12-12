r.d(n, {
    t: function () {
        return u;
    }
});
var i = r(927521),
    a = r(165352);
let s = 1911;
function o(e) {
    return 'minguo' === e.era ? e.year + s : 1 - e.year + s;
}
function l(e) {
    let n = e - s;
    return n > 0 ? ['minguo', n] : ['before_minguo', 1 - n];
}
class u extends a.IQ {
    fromJulianDay(e) {
        let n = super.fromJulianDay(e),
            [r, s] = l((0, a.J4)(n.era, n.year));
        return new i.aw(this, r, s, n.month, n.day);
    }
    toJulianDay(e) {
        return super.toJulianDay(c(e));
    }
    getEras() {
        return ['before_minguo', 'minguo'];
    }
    balanceDate(e) {
        let [n, r] = l(o(e));
        (e.era = n), (e.year = r);
    }
    isInverseEra(e) {
        return 'before_minguo' === e.era;
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(c(e));
    }
    getYearsInEra(e) {
        return 'before_minguo' === e.era ? 9999 : 9999 - s;
    }
    constructor(...e) {
        super(...e), (this.identifier = 'roc');
    }
}
function c(e) {
    let [n, r] = (0, a.JD)(o(e));
    return new i.aw(n, r, e.month, e.day);
}
