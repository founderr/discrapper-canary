!(function (e, n) {
    n(r(913527));
})(0, function (e) {
    function n(e, n, r, i) {
        var a = {
            m: ['eng Minutt', 'enger Minutt'],
            h: ['eng Stonn', 'enger Stonn'],
            d: ['een Dag', 'engem Dag'],
            M: ['ee Mount', 'engem Mount'],
            y: ['ee Joer', 'engem Joer']
        };
        return n ? a[r][0] : a[r][1];
    }
    function r(e) {
        return a(e.substr(0, e.indexOf(' '))) ? 'a ' + e : 'an ' + e;
    }
    function i(e) {
        return a(e.substr(0, e.indexOf(' '))) ? 'viru ' + e : 'virun ' + e;
    }
    function a(e) {
        if (isNaN((e = parseInt(e, 10)))) return !1;
        if (e < 0) return !0;
        if (e < 10) return (!!(4 <= e) && !!(e <= 7)) || !1;
        if (e < 100) {
            var n = e % 10,
                r = e / 10;
            return 0 === n ? a(r) : a(n);
        } else {
            if (!(e < 10000)) return a((e /= 1000));
            for (; e >= 10; ) e /= 10;
            return a(e);
        }
    }
    return e.defineLocale('lb', {
        months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
        weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'H:mm [Auer]',
            LTS: 'H:mm:ss [Auer]',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm [Auer]',
            LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]'
        },
        calendar: {
            sameDay: '[Haut um] LT',
            sameElse: 'L',
            nextDay: '[Muer um] LT',
            nextWeek: 'dddd [um] LT',
            lastDay: '[Gëschter um] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 2:
                    case 4:
                        return '[Leschten] dddd [um] LT';
                    default:
                        return '[Leschte] dddd [um] LT';
                }
            }
        },
        relativeTime: {
            future: r,
            past: i,
            s: 'e puer Sekonnen',
            ss: '%d Sekonnen',
            m: n,
            mm: '%d Minutten',
            h: n,
            hh: '%d Stonnen',
            d: n,
            dd: '%d Deeg',
            M: n,
            MM: '%d Méint',
            y: n,
            yy: '%d Joer'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    });
});
