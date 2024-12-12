r.d(n, {
    M: function () {
        return o;
    }
});
var i = r(927521),
    a = r(165352);
let s = -543;
class o extends a.IQ {
    fromJulianDay(e) {
        let n = super.fromJulianDay(e),
            r = (0, a.J4)(n.era, n.year);
        return new i.aw(this, r - s, n.month, n.day);
    }
    toJulianDay(e) {
        return super.toJulianDay(l(e));
    }
    getEras() {
        return ['BE'];
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(l(e));
    }
    balanceDate() {}
    constructor(...e) {
        super(...e), (this.identifier = 'buddhist');
    }
}
function l(e) {
    let [n, r] = (0, a.JD)(e.year + s);
    return new i.aw(n, r, e.month, e.day);
}
