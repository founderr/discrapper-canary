n.d(t, {
    IQ: function () {
        return u;
    },
    J4: function () {
        return o;
    }
});
var r = n(927521),
    i = n(926726);
function a(e, t, n, r) {
    let i = (t = o(e, t)) - 1,
        a = -2;
    return n <= 2 ? (a = 0) : s(t) && (a = -1), 1721425 + 365 * i + Math.floor(i / 4) - Math.floor(i / 100) + Math.floor(i / 400) + Math.floor((367 * n - 362) / 12 + a + r);
}
function s(e) {
    return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function o(e, t) {
    return 'BC' === e ? 1 - t : t;
}
let l = {
    standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
};
class u {
    fromJulianDay(e) {
        var t;
        let n,
            o = e - 1721426,
            l = Math.floor(o / 146097),
            u = (0, i.wQ)(o, 146097),
            c = Math.floor(u / 36524),
            d = (0, i.wQ)(u, 36524),
            f = Math.floor(d / 1461),
            _ = Math.floor((0, i.wQ)(d, 1461) / 365);
        let [p, h] = ((n = 'AD'), (t = 400 * l + 100 * c + 4 * f + _ + (4 !== c && 4 !== _ ? 1 : 0)) <= 0 && ((n = 'BC'), (t = 1 - t)), [n, t]),
            m = e - a(p, h, 1, 1),
            g = 2;
        e < a(p, h, 3, 1) ? (g = 0) : s(h) && (g = 1);
        let E = Math.floor(((m + g) * 12 + 373) / 367),
            v = e - a(p, h, E, 1) + 1;
        return new r.aw(p, h, E, v);
    }
    toJulianDay(e) {
        return a(e.era, e.year, e.month, e.day);
    }
    getDaysInMonth(e) {
        return l[s(e.year) ? 'leapyear' : 'standard'][e.month - 1];
    }
    getMonthsInYear(e) {
        return 12;
    }
    getDaysInYear(e) {
        return s(e.year) ? 366 : 365;
    }
    getYearsInEra(e) {
        return 9999;
    }
    getEras() {
        return ['BC', 'AD'];
    }
    isInverseEra(e) {
        return 'BC' === e.era;
    }
    balanceDate(e) {
        e.year <= 0 && ((e.era = 'BC' === e.era ? 'AD' : 'BC'), (e.year = 1 - e.year));
    }
    constructor() {
        this.identifier = 'gregory';
    }
}
