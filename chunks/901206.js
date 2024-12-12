!(function (e, n) {
    n(r(913527));
})(0, function (e) {
    function n(e, n) {
        var r = e.split('_');
        return n % 10 == 1 && n % 100 != 11 ? r[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? r[1] : r[2];
    }
    function r(e, r, i) {
        var a = {
            ss: r ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
            mm: r ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
            hh: r ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
            dd: 'дзень_дні_дзён',
            MM: 'месяц_месяцы_месяцаў',
            yy: 'год_гады_гадоў'
        };
        return 'm' === i ? (r ? 'хвіліна' : 'хвіліну') : 'h' === i ? (r ? 'гадзіна' : 'гадзіну') : e + ' ' + n(a[i], +e);
    }
    return e.defineLocale('be', {
        months: {
            format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_'),
            standalone: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_')
        },
        monthsShort: 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
        weekdays: {
            format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'),
            standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
            isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
        },
        weekdaysShort: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
        weekdaysMin: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY г.',
            LLL: 'D MMMM YYYY г., HH:mm',
            LLLL: 'dddd, D MMMM YYYY г., HH:mm'
        },
        calendar: {
            sameDay: '[Сёння ў] LT',
            nextDay: '[Заўтра ў] LT',
            lastDay: '[Учора ў] LT',
            nextWeek: function () {
                return '[У] dddd [ў] LT';
            },
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return '[У мінулую] dddd [ў] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[У мінулы] dddd [ў] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'праз %s',
            past: '%s таму',
            s: 'некалькі секунд',
            m: r,
            mm: r,
            h: r,
            hh: r,
            d: 'дзень',
            dd: r,
            M: 'месяц',
            MM: r,
            y: 'год',
            yy: r
        },
        meridiemParse: /ночы|раніцы|дня|вечара/,
        isPM: function (e) {
            return /^(дня|вечара)$/.test(e);
        },
        meridiem: function (e, n, r) {
            if (e < 4) return 'ночы';
            if (e < 12) return 'раніцы';
            if (e < 17) return 'дня';
            else return 'вечара';
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
        ordinal: function (e, n) {
            switch (n) {
                case 'M':
                case 'd':
                case 'DDD':
                case 'w':
                case 'W':
                    return (e % 10 == 2 || e % 10 == 3) && e % 100 != 12 && e % 100 != 13 ? e + '-і' : e + '-ы';
                case 'D':
                    return e + '-га';
                default:
                    return e;
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
});
