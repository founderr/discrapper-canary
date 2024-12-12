!(function (e, n) {
    n(r(913527));
})(0, function (e) {
    var n = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
    function r(e, n, r, i) {
        var a = e;
        switch (r) {
            case 's':
                return i || n ? 'néhány másodperc' : 'néhány másodperce';
            case 'ss':
                return a + (i || n) ? ' másodperc' : ' másodperce';
            case 'm':
                return 'egy' + (i || n ? ' perc' : ' perce');
            case 'mm':
                return a + (i || n ? ' perc' : ' perce');
            case 'h':
                return 'egy' + (i || n ? ' óra' : ' órája');
            case 'hh':
                return a + (i || n ? ' óra' : ' órája');
            case 'd':
                return 'egy' + (i || n ? ' nap' : ' napja');
            case 'dd':
                return a + (i || n ? ' nap' : ' napja');
            case 'M':
                return 'egy' + (i || n ? ' hónap' : ' hónapja');
            case 'MM':
                return a + (i || n ? ' hónap' : ' hónapja');
            case 'y':
                return 'egy' + (i || n ? ' év' : ' éve');
            case 'yy':
                return a + (i || n ? ' év' : ' éve');
        }
        return '';
    }
    function i(e) {
        return (e ? '' : '[múlt] ') + '[' + n[this.day()] + '] LT[-kor]';
    }
    return e.defineLocale('hu', {
        months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
        monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
        weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
        weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
        weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'YYYY.MM.DD.',
            LL: 'YYYY. MMMM D.',
            LLL: 'YYYY. MMMM D. H:mm',
            LLLL: 'YYYY. MMMM D., dddd H:mm'
        },
        meridiemParse: /de|du/i,
        isPM: function (e) {
            return 'u' === e.charAt(1).toLowerCase();
        },
        meridiem: function (e, n, r) {
            return e < 12 ? (!0 === r ? 'de' : 'DE') : !0 === r ? 'du' : 'DU';
        },
        calendar: {
            sameDay: '[ma] LT[-kor]',
            nextDay: '[holnap] LT[-kor]',
            nextWeek: function () {
                return i.call(this, !0);
            },
            lastDay: '[tegnap] LT[-kor]',
            lastWeek: function () {
                return i.call(this, !1);
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s múlva',
            past: '%s',
            s: r,
            ss: r,
            m: r,
            mm: r,
            h: r,
            hh: r,
            d: r,
            dd: r,
            M: r,
            MM: r,
            y: r,
            yy: r
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    });
});
