n.d(t, {
    t: function () {
        return a;
    }
});
var r = n(927521),
    i = n(165352);
class a extends i.IQ {
    fromJulianDay(e) {
        let t,
            n,
            a,
            s = super.fromJulianDay(e),
            o = s.year - 78,
            l = e - (0, i.g_)(s.era, s.year, 1, 1);
        if ((l < 80 ? (o--, (l += (t = (0, i.Eg)(s.year - 1) ? 31 : 30) + 155 + 90 + 10)) : ((t = (0, i.Eg)(s.year) ? 31 : 30), (l -= 80)), l < t)) (n = 1), (a = l + 1);
        else {
            let e = l - t;
            e < 155 ? ((n = Math.floor(e / 31) + 2), (a = (e % 31) + 1)) : ((e -= 155), (n = Math.floor(e / 30) + 7), (a = (e % 30) + 1));
        }
        return new r.aw(this, o, n, a);
    }
    toJulianDay(e) {
        let t,
            n,
            r = e.year + 78,
            [a, s] = (0, i.JD)(r);
        return ((0, i.Eg)(s) ? ((t = 31), (n = (0, i.g_)(a, s, 3, 21))) : ((t = 30), (n = (0, i.g_)(a, s, 3, 22))), 1 === e.month) ? n + e.day - 1 : ((n += t + 31 * Math.min(e.month - 2, 5)), e.month >= 8 && (n += (e.month - 7) * 30), (n += e.day - 1));
    }
    getDaysInMonth(e) {
        return (1 === e.month && (0, i.Eg)(e.year + 78)) || (e.month >= 2 && e.month <= 6) ? 31 : 30;
    }
    getYearsInEra() {
        return 9919;
    }
    getEras() {
        return ['saka'];
    }
    balanceDate() {}
    constructor(...e) {
        super(...e), (this.identifier = 'indian');
    }
}
