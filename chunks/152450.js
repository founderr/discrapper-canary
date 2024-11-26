n.d(t, {
    H: function () {
        return f;
    }
});
var r = n(927521),
    i = n(926726);
let a = 25920,
    s = 29 * a + 13753;
function o(e) {
    return 7 > (0, i.wQ)(7 * e + 1, 19);
}
function l(e) {
    let t = Math.floor((235 * e - 234) / 19),
        n = 29 * t + Math.floor((12084 + 13753 * t) / 25920);
    return 3 > (0, i.wQ)(3 * (n + 1), 7) && (n += 1), n;
}
function u(e) {
    var t;
    let n, r;
    return l(e) + ((n = l((t = e) - 1)), (r = l(t)), l(t + 1) - r == 356 ? 2 : r - n == 382 ? 1 : 0);
}
function c(e) {
    return u(e + 1) - u(e);
}
function d(e, t) {
    if ((t >= 6 && !o(e) && t++, 4 === t || 7 === t || 9 === t || 11 === t || 13 === t)) return 29;
    let n = (function (e) {
        let t = c(e);
        switch ((t > 380 && (t -= 30), t)) {
            case 353:
                return 0;
            case 354:
                return 1;
            case 355:
                return 2;
        }
    })(e);
    return 2 === t ? (2 === n ? 30 : 29) : 3 === t ? (0 === n ? 29 : 30) : 6 === t ? (o(e) ? 30 : 0) : 30;
}
class f {
    fromJulianDay(e) {
        let t = e - 347997,
            n = Math.floor((((t * a) / s) * 19 + 234) / 235) + 1,
            i = u(n),
            o = Math.floor(t - i);
        for (; o < 1; ) o = Math.floor(t - (i = u(--n)));
        let l = 1,
            c = 0;
        for (; c < o; ) (c += d(n, l)), l++;
        let f = o - (c -= d(n, --l));
        return new r.aw(this, n, l, f);
    }
    toJulianDay(e) {
        let t = u(e.year);
        for (let n = 1; n < e.month; n++) t += d(e.year, n);
        return t + e.day + 347997;
    }
    getDaysInMonth(e) {
        return d(e.year, e.month);
    }
    getMonthsInYear(e) {
        return o(e.year) ? 13 : 12;
    }
    getDaysInYear(e) {
        return c(e.year);
    }
    getYearsInEra() {
        return 9999;
    }
    getEras() {
        return ['AM'];
    }
    balanceYearMonth(e, t) {
        t.year !== e.year && (o(t.year) && !o(e.year) && t.month > 6 ? e.month-- : !o(t.year) && o(e.year) && t.month > 6 && e.month++);
    }
    constructor() {
        this.identifier = 'hebrew';
    }
}
