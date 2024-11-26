let r, i;
n.d(t, {
    $0: function () {
        return u;
    },
    CF: function () {
        return c;
    },
    lw: function () {
        return h;
    }
});
var a = n(927521);
function s(e, t, n, r) {
    return r + Math.ceil(29.5 * (n - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1;
}
function o(e, t, n) {
    let r = Math.floor((30 * (n - t) + 10646) / 10631),
        i = Math.min(12, Math.ceil((n - (29 + s(t, r, 1, 1))) / 29.5) + 1),
        o = n - s(t, r, i, 1) + 1;
    return new a.aw(e, r, i, o);
}
function l(e) {
    return (14 + 11 * e) % 30 < 11;
}
class u {
    fromJulianDay(e) {
        return o(this, 1948440, e);
    }
    toJulianDay(e) {
        return s(1948440, e.year, e.month, e.day);
    }
    getDaysInMonth(e) {
        let t = 29 + (e.month % 2);
        return 12 === e.month && l(e.year) && t++, t;
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInYear(e) {
        return l(e.year) ? 355 : 354;
    }
    getYearsInEra() {
        return 9665;
    }
    getEras() {
        return ['AH'];
    }
    constructor() {
        this.identifier = 'islamic-civil';
    }
}
class c extends u {
    fromJulianDay(e) {
        return o(this, 1948439, e);
    }
    toJulianDay(e) {
        return s(1948439, e.year, e.month, e.day);
    }
    constructor(...e) {
        super(...e), (this.identifier = 'islamic-tbla');
    }
}
function d(e) {
    return 460322 + i[e - 1300];
}
function f(e, t) {
    return (r[e - 1300] & (1 << (11 - (t - 1)))) == 0 ? 29 : 30;
}
function _(e, t) {
    let n = d(e);
    for (let r = 1; r < t; r++) n += f(e, r);
    return n;
}
function p(e) {
    return i[e + 1 - 1300] - i[e - 1300];
}
class h extends u {
    fromJulianDay(e) {
        let t = e - 1948440,
            n = d(1300),
            r = d(1600);
        if (t < n || t > r) return super.fromJulianDay(e);
        {
            let e = 1299,
                n = 1,
                r = 1;
            for (; r > 0; ) {
                r = t - d(++e) + 1;
                let i = p(e);
                if (r === i) {
                    n = 12;
                    break;
                }
                if (r < i) {
                    let t = f(e, n);
                    for (n = 1; r > t; ) (r -= t), (t = f(e, ++n));
                    break;
                }
            }
            return new a.aw(this, e, n, t - _(e, n) + 1);
        }
    }
    toJulianDay(e) {
        return e.year < 1300 || e.year > 1600 ? super.toJulianDay(e) : 1948440 + _(e.year, e.month) + (e.day - 1);
    }
    getDaysInMonth(e) {
        return e.year < 1300 || e.year > 1600 ? super.getDaysInMonth(e) : f(e.year, e.month);
    }
    getDaysInYear(e) {
        return e.year < 1300 || e.year > 1600 ? super.getDaysInYear(e) : p(e.year);
    }
    constructor() {
        if ((super(), (this.identifier = 'islamic-umalqura'), !r && (r = new Uint16Array(Uint8Array.from(atob('qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI='), (e) => e.charCodeAt(0)).buffer)), !i)) {
            i = new Uint32Array(301);
            let e = 0;
            for (let t = 1300; t <= 1600; t++) {
                i[t - 1300] = e;
                for (let n = 1; n <= 12; n++) e += f(t, n);
            }
        }
    }
}
