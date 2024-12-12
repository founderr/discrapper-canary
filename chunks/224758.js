!(function (e, n) {
    n(r(913527));
})(0, function (e) {
    function n(e, n, r, i) {
        switch (r) {
            case 's':
                return n ? 'хэдхэн секунд' : 'хэдхэн секундын';
            case 'ss':
                return e + (n ? ' секунд' : ' секундын');
            case 'm':
            case 'mm':
                return e + (n ? ' минут' : ' минутын');
            case 'h':
            case 'hh':
                return e + (n ? ' цаг' : ' цагийн');
            case 'd':
            case 'dd':
                return e + (n ? ' өдөр' : ' өдрийн');
            case 'M':
            case 'MM':
                return e + (n ? ' сар' : ' сарын');
            case 'y':
            case 'yy':
                return e + (n ? ' жил' : ' жилийн');
            default:
                return e;
        }
    }
    return e.defineLocale('mn', {
        months: 'Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар'.split('_'),
        monthsShort: '1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар'.split('_'),
        monthsParseExact: !0,
        weekdays: 'Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба'.split('_'),
        weekdaysShort: 'Ням_Дав_Мяг_Лха_Пүр_Баа_Бям'.split('_'),
        weekdaysMin: 'Ня_Да_Мя_Лх_Пү_Ба_Бя'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'YYYY оны MMMMын D',
            LLL: 'YYYY оны MMMMын D HH:mm',
            LLLL: 'dddd, YYYY оны MMMMын D HH:mm'
        },
        meridiemParse: /ҮӨ|ҮХ/i,
        isPM: function (e) {
            return 'ҮХ' === e;
        },
        meridiem: function (e, n, r) {
            return e < 12 ? 'ҮӨ' : 'ҮХ';
        },
        calendar: {
            sameDay: '[Өнөөдөр] LT',
            nextDay: '[Маргааш] LT',
            nextWeek: '[Ирэх] dddd LT',
            lastDay: '[Өчигдөр] LT',
            lastWeek: '[Өнгөрсөн] dddd LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s дараа',
            past: '%s өмнө',
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
        dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
        ordinal: function (e, n) {
            switch (n) {
                case 'd':
                case 'D':
                case 'DDD':
                    return e + ' өдөр';
                default:
                    return e;
            }
        }
    });
});
