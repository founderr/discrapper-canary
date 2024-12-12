r.d(n, {
    o: function () {
        return f;
    }
});
var i = r(927521),
    a = r(165352);
let s = [
        [1868, 9, 8],
        [1912, 7, 30],
        [1926, 12, 25],
        [1989, 1, 8],
        [2019, 5, 1]
    ],
    o = [
        [1912, 7, 29],
        [1926, 12, 24],
        [1989, 1, 7],
        [2019, 4, 30]
    ],
    l = [1867, 1911, 1925, 1988, 2018],
    u = ['meiji', 'taisho', 'showa', 'heisei', 'reiwa'];
function c(e) {
    let n = s.findIndex(([n, r, i]) => !!(e.year < n) || (e.year === n && !!(e.month < r)) || (e.year === n && e.month === r && !!(e.day < i)) || !1);
    return -1 === n ? s.length - 1 : 0 === n ? 0 : n - 1;
}
function d(e) {
    let n = l[u.indexOf(e.era)];
    if (!n) throw Error('Unknown era: ' + e.era);
    return new i.aw(e.year + n, e.month, e.day);
}
class f extends a.IQ {
    fromJulianDay(e) {
        let n = super.fromJulianDay(e),
            r = c(n);
        return new i.aw(this, u[r], n.year - l[r], n.month, n.day);
    }
    toJulianDay(e) {
        return super.toJulianDay(d(e));
    }
    balanceDate(e) {
        let n = d(e),
            r = c(n);
        u[r] !== e.era && ((e.era = u[r]), (e.year = n.year - l[r])), this.constrainDate(e);
    }
    constrainDate(e) {
        let n = u.indexOf(e.era),
            r = o[n];
        if (null != r) {
            let [i, a, s] = r,
                o = i - l[n];
            (e.year = Math.max(1, Math.min(o, e.year))), e.year === o && ((e.month = Math.min(a, e.month)), e.month === a && (e.day = Math.min(s, e.day)));
        }
        if (1 === e.year && n >= 0) {
            let [, r, i] = s[n];
            (e.month = Math.max(r, e.month)), e.month === r && (e.day = Math.max(i, e.day));
        }
    }
    getEras() {
        return u;
    }
    getYearsInEra(e) {
        let n = u.indexOf(e.era),
            r = s[n],
            i = s[n + 1];
        if (null == i) return 9999 - r[0] + 1;
        let a = i[0] - r[0];
        return (e.month < i[1] || (e.month === i[1] && e.day < i[2])) && a++, a;
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(d(e));
    }
    getMinimumMonthInYear(e) {
        let n = _(e);
        return n ? n[1] : 1;
    }
    getMinimumDayInMonth(e) {
        let n = _(e);
        return n && e.month === n[1] ? n[2] : 1;
    }
    constructor(...e) {
        super(...e), (this.identifier = 'japanese');
    }
}
function _(e) {
    if (1 === e.year) return s[u.indexOf(e.era)];
}
