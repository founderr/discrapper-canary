!(function (e, n) {
    n(r(913527));
})(0, function (e) {
    function n(e, n, r, i) {
        var a = e + ' ';
        switch (r) {
            case 's':
                return n || i ? 'nekaj sekund' : 'nekaj sekundami';
            case 'ss':
                return 1 === e ? (a += n ? 'sekundo' : 'sekundi') : 2 === e ? (a += n || i ? 'sekundi' : 'sekundah') : e < 5 ? (a += n || i ? 'sekunde' : 'sekundah') : (a += (n, 'sekund')), a;
            case 'm':
                return n ? 'ena minuta' : 'eno minuto';
            case 'mm':
                return 1 === e ? (a += n ? 'minuta' : 'minuto') : 2 === e ? (a += n || i ? 'minuti' : 'minutama') : e < 5 ? (a += n || i ? 'minute' : 'minutami') : (a += n || i ? 'minut' : 'minutami'), a;
            case 'h':
                return n ? 'ena ura' : 'eno uro';
            case 'hh':
                return 1 === e ? (a += n ? 'ura' : 'uro') : 2 === e ? (a += n || i ? 'uri' : 'urama') : e < 5 ? (a += n || i ? 'ure' : 'urami') : (a += n || i ? 'ur' : 'urami'), a;
            case 'd':
                return n || i ? 'en dan' : 'enim dnem';
            case 'dd':
                return 1 === e ? (a += n || i ? 'dan' : 'dnem') : 2 === e ? (a += n || i ? 'dni' : 'dnevoma') : (a += n || i ? 'dni' : 'dnevi'), a;
            case 'M':
                return n || i ? 'en mesec' : 'enim mesecem';
            case 'MM':
                return 1 === e ? (a += n || i ? 'mesec' : 'mesecem') : 2 === e ? (a += n || i ? 'meseca' : 'mesecema') : e < 5 ? (a += n || i ? 'mesece' : 'meseci') : (a += n || i ? 'mesecev' : 'meseci'), a;
            case 'y':
                return n || i ? 'eno leto' : 'enim letom';
            case 'yy':
                return 1 === e ? (a += n || i ? 'leto' : 'letom') : 2 === e ? (a += n || i ? 'leti' : 'letoma') : e < 5 ? (a += n || i ? 'leta' : 'leti') : (a += n || i ? 'let' : 'leti'), a;
        }
    }
    return e.defineLocale('sl', {
        months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
        weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
        weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[danes ob] LT',
            nextDay: '[jutri ob] LT',
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[v] [nedeljo] [ob] LT';
                    case 3:
                        return '[v] [sredo] [ob] LT';
                    case 6:
                        return '[v] [soboto] [ob] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[v] dddd [ob] LT';
                }
            },
            lastDay: '[včeraj ob] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[prejšnjo] [nedeljo] [ob] LT';
                    case 3:
                        return '[prejšnjo] [sredo] [ob] LT';
                    case 6:
                        return '[prejšnjo] [soboto] [ob] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[prejšnji] dddd [ob] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'čez %s',
            past: 'pred %s',
            s: n,
            ss: n,
            m: n,
            mm: n,
            h: n,
            hh: n,
            d: n,
            dd: n,
            M: n,
            MM: n,
            y: n,
            yy: n
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 7
        }
    });
});
