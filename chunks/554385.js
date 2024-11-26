n.d(t, {
    r: function () {
        return s;
    }
});
var r = n(927521),
    i = n(926726);
let a = [0, 31, 62, 93, 124, 155, 186, 216, 246, 276, 306, 336];
class s {
    fromJulianDay(e) {
        let t = e - 1948320,
            n = 1 + Math.floor((33 * t + 3) / 12053),
            i = t - (365 * (n - 1) + Math.floor((8 * n + 21) / 33)),
            s = i < 216 ? Math.floor(i / 31) : Math.floor((i - 6) / 30),
            o = i - a[s] + 1;
        return new r.aw(this, n, s + 1, o);
    }
    toJulianDay(e) {
        let t = 1948319 + 365 * (e.year - 1) + Math.floor((8 * e.year + 21) / 33);
        return (t += a[e.month - 1] + e.day);
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInMonth(e) {
        return e.month <= 6 ? 31 : e.month <= 11 ? 30 : 8 > (0, i.wQ)(25 * e.year + 11, 33) ? 30 : 29;
    }
    getEras() {
        return ['AP'];
    }
    getYearsInEra() {
        return 9377;
    }
    constructor() {
        this.identifier = 'persian';
    }
}
