n.d(t, {
    Eg: function () {
        return s;
    },
    IQ: function () {
        return c;
    },
    J4: function () {
        return o;
    },
    JD: function () {
        return l;
    },
    g_: function () {
        return a;
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
function l(e) {
    let t = 'AD';
    return e <= 0 && ((t = 'BC'), (e = 1 - e)), [t, e];
}
let u = {
    standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
};
class c {
    fromJulianDay(e) {
        let t = e - 1721426,
            n = Math.floor(t / 146097),
            o = (0, i.wQ)(t, 146097),
            u = Math.floor(o / 36524),
            c = (0, i.wQ)(o, 36524),
            d = Math.floor(c / 1461),
            f = Math.floor((0, i.wQ)(c, 1461) / 365),
            [_, p] = l(400 * n + 100 * u + 4 * d + f + (4 !== u && 4 !== f ? 1 : 0)),
            h = e - a(_, p, 1, 1),
            m = 2;
        e < a(_, p, 3, 1) ? (m = 0) : s(p) && (m = 1);
        let g = Math.floor(((h + m) * 12 + 373) / 367),
            E = e - a(_, p, g, 1) + 1;
        return new r.aw(_, p, g, E);
    }
    toJulianDay(e) {
        return a(e.era, e.year, e.month, e.day);
    }
    getDaysInMonth(e) {
        return u[s(e.year) ? 'leapyear' : 'standard'][e.month - 1];
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
