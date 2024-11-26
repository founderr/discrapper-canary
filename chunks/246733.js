n.d(t, {
    Wt: function () {
        return l;
    },
    Y0: function () {
        return c;
    },
    zY: function () {
        return u;
    }
});
var r = n(927521);
function i(e, t, n, r) {
    return e + 365 * t + Math.floor(t / 4) + 30 * (n - 1) + r - 1;
}
function a(e, t) {
    let n = Math.floor((4 * (t - e)) / 1461),
        r = 1 + Math.floor((t - i(e, n, 1, 1)) / 30),
        a = t + 1 - i(e, n, r, 1);
    return [n, r, a];
}
function s(e) {
    return Math.floor((e % 4) / 3);
}
function o(e, t) {
    return t % 13 != 0 ? 30 : s(e) + 5;
}
class l {
    fromJulianDay(e) {
        let [t, n, i] = a(1723856, e),
            s = 'AM';
        return t <= 0 && ((s = 'AA'), (t += 5500)), new r.aw(this, s, t, n, i);
    }
    toJulianDay(e) {
        let t = e.year;
        return 'AA' === e.era && (t -= 5500), i(1723856, t, e.month, e.day);
    }
    getDaysInMonth(e) {
        return o(e.year, e.month);
    }
    getMonthsInYear() {
        return 13;
    }
    getDaysInYear(e) {
        return 365 + s(e.year);
    }
    getYearsInEra(e) {
        return 'AA' === e.era ? 9999 : 9991;
    }
    getEras() {
        return ['AA', 'AM'];
    }
    constructor() {
        this.identifier = 'ethiopic';
    }
}
class u extends l {
    fromJulianDay(e) {
        let [t, n, i] = a(1723856, e);
        return (t += 5500), new r.aw(this, 'AA', t, n, i);
    }
    getEras() {
        return ['AA'];
    }
    getYearsInEra() {
        return 9999;
    }
    constructor(...e) {
        super(...e), (this.identifier = 'ethioaa');
    }
}
class c extends l {
    fromJulianDay(e) {
        let [t, n, i] = a(1824665, e),
            s = 'CE';
        return t <= 0 && ((s = 'BCE'), (t = 1 - t)), new r.aw(this, s, t, n, i);
    }
    toJulianDay(e) {
        let t = e.year;
        return 'BCE' === e.era && (t = 1 - t), i(1824665, t, e.month, e.day);
    }
    getDaysInMonth(e) {
        let t = e.year;
        return 'BCE' === e.era && (t = 1 - t), o(t, e.month);
    }
    isInverseEra(e) {
        return 'BCE' === e.era;
    }
    balanceDate(e) {
        e.year <= 0 && ((e.era = 'BCE' === e.era ? 'CE' : 'BCE'), (e.year = 1 - e.year));
    }
    getEras() {
        return ['BCE', 'CE'];
    }
    getYearsInEra(e) {
        return 'BCE' === e.era ? 9999 : 9715;
    }
    constructor(...e) {
        super(...e), (this.identifier = 'coptic');
    }
}
