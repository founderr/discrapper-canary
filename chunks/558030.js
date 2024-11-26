n.d(t, {
    M: function () {
        return a;
    }
});
var r = n(927521),
    i = n(165352);
class a extends i.IQ {
    fromJulianDay(e) {
        let t = super.fromJulianDay(e),
            n = (0, i.J4)(t.era, t.year);
        return new r.aw(this, n - -543, t.month, t.day);
    }
    toJulianDay(e) {
        return super.toJulianDay(s(e));
    }
    getEras() {
        return ['BE'];
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(s(e));
    }
    balanceDate() {}
    constructor(...e) {
        super(...e), (this.identifier = 'buddhist');
    }
}
function s(e) {
    let [t, n] = (0, i.JD)(e.year + -543);
    return new r.aw(t, n, e.month, e.day);
}
