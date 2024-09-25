n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(757143);
var i = n(653041);
var a = n(411104);
var o = n(913527),
    s = n.n(o);
function l(e, t) {
    if ('function' == typeof t) {
        let n = s().localeData(),
            r = t.bind(n);
        return (t, n) => r({ [e]: () => t }, n);
    }
    return (t = Array.isArray(t) ? t : t.format), (e) => t[e];
}
function u(e) {
    return 'string' == typeof e ? (t) => e.replace('%d', ''.concat(t)) : e;
}
function c(e, t, n) {
    return e < 12 ? (n ? 'am' : 'AM') : n ? 'pm' : 'PM';
}
function d() {
    let {
        months: e,
        monthsShort: t,
        weekdays: n,
        weekdaysShort: r,
        weekdaysMin: i,
        meridiem: a = c,
        ordinal: o,
        longDateFormat: d,
        week: _ = {
            dow: 0,
            doy: 6
        }
    } = s().localeData()._config;
    return {
        months: l('month', e),
        monthsShort: l('month', t),
        weekdays: l('day', n),
        weekdaysShort: l('day', r),
        weekdaysMin: l('day', i),
        meridiem: a,
        ordinal: u(o),
        longDateFormat: d,
        week: _
    };
}
function _(e, t) {
    return e.replace(/L[L|T|S]{0,3}/g, (n, r) => {
        if (/^LLLL/.test(n)) return t.longDateFormat.LLLL;
        if (/^LLL/.test(n)) return t.longDateFormat.LLL + n.slice(3);
        if (/^LL/.test(n)) return t.longDateFormat.LL + n.slice(2);
        else if (/^LTS/.test(n)) return t.longDateFormat.LTS + n.slice(3);
        else if (/^LT/.test(n)) return t.longDateFormat.LT + n.slice(2);
        else if (/^L/.test(n) && '[' !== e[r - 1]) return t.longDateFormat.L + n.slice(1);
        return n;
    });
}
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d(),
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    e = _(e, t);
    let r = [],
        i = {
            month: !1,
            dayOfYear: !1,
            date: !1,
            day: !1,
            week: !1,
            isoweek: !1,
            year: !1,
            hour: !1,
            minutes: !1,
            seconds: !1,
            millis: !1,
            offset: !1
        },
        a = e;
    function o(e) {
        r.push('(' + e + ')');
    }
    function s(e) {
        a = a.slice(e);
    }
    for (; a.length > 0; ) {
        switch (a.charAt(0)) {
            case 'M':
                if (((i.month = !0), /^MMMM/.test(a))) {
                    o('localeData.months(_month, "'.concat(e, '")')), s(4);
                    continue;
                }
                if (/^MMM/.test(a)) {
                    o('localeData.monthsShort(_month, "'.concat(e, '")')), s(3);
                    continue;
                }
                if (/^MM/.test(a)) {
                    o('_month+1 < 10 ? "0" : ""'), o('_month+1'), s(2);
                    continue;
                }
                if (/^Mo/.test(a)) {
                    o('localeData.ordinal(_month, "M")'), s(2);
                    continue;
                }
                o('_month + 1'), s(1);
                continue;
            case 'Q':
                if (((i.month = !0), /^Qo/.test(a))) {
                    o('localeData.ordinal((_month + 1) / 3, "Q")'), s(2);
                    continue;
                }
                o('Math.ceil((_month + 1) / 3)'), s(1);
                continue;
            case 'D':
                if (/^DDD/.test(a)) {
                    if (((i.dayOfYear = !0), /^DDDD/.test(a))) {
                        o('_doy < 100 ? "0" : ""'), o('_doy < 10 ? "0" : ""'), o('_doy'), s(4);
                        continue;
                    }
                    if (/^DDDo/.test(a)) {
                        o('localeData.ordinal(_doy, "DDD")'), s(4);
                        continue;
                    }
                    o('_doy'), s(3);
                    continue;
                }
                if (((i.date = !0), /^DD/.test(a))) {
                    o('_date < 10 ? "0" : ""'), o('_date'), s(2);
                    continue;
                }
                if (/^Do/.test(a)) {
                    o('localeData.ordinal(_date, "D")'), s(2);
                    continue;
                }
                o('_date'), s(1);
                continue;
            case 'd':
                if (((i.day = !0), /^dddd/.test(a))) {
                    o('localeData.weekdays(_day, "'.concat(e, '")')), s(4);
                    continue;
                }
                if (/^ddd/.test(a)) {
                    o('localeData.weekdaysShort(_day, "'.concat(e, '")')), s(3);
                    continue;
                }
                if (/^dd/.test(a)) {
                    o('localeData.weekdaysMin(_day, "'.concat(e, '")')), s(2);
                    continue;
                }
                if (/^do/.test(a)) {
                    o('localeData.ordinal(_day, "d")'), s(2);
                    continue;
                }
                o('_day'), s(1);
                continue;
            case 'e':
                (i.day = !0), o('(_day + 7 - ' + +t.week.dow + ') % 7'), s(1);
                continue;
            case 'E':
                (i.day = !0), o('_day === 0 ? 7 : _day'), s(1);
                continue;
            case 'w':
                if (((i.week = !0), /^ww/.test(a))) {
                    o('_week < 10 ? "0" : ""'), o('_week'), s(2);
                    continue;
                }
                if (/^wo/.test(a)) {
                    o('localeData.ordinal(_week, "w")'), s(2);
                    continue;
                }
                o('_week'), s(1);
                continue;
            case 'W':
                if (((i.isoweek = !0), /^WW/.test(a))) {
                    o('_i_week < 10 ? "0" : ""'), o('_i_week'), s(2);
                    continue;
                }
                if (/^Wo/.test(a)) {
                    o('localeData.ordinal(_i_week, "W")'), s(2);
                    continue;
                }
                o('_i_week'), s(1);
                continue;
            case 'Y':
                if (((i.year = !0), /^YYYY/.test(a))) {
                    o('_year'), s(4);
                    continue;
                }
                if (/^YY/.test(a)) {
                    o('(_year % 100) < 10 ? "0" : ""'), o('_year % 100'), s(2);
                    continue;
                }
                o('_year < 9999 ? _year : "+" + _year'), s(1);
                continue;
            case 'g':
                if (((i.week = !0), /^gggg/.test(a))) {
                    o('_weekYear'), s(4);
                    continue;
                }
                if (/^gg/.test(a)) {
                    o('(_weekYear % 100) < 10 ? "0" : ""'), o('_weekYear % 100'), s(2);
                    continue;
                }
                break;
            case 'G':
                if (((i.isoweek = !0), /^GGGG/.test(a))) {
                    o('_i_weekYear'), s(4);
                    continue;
                }
                if (/^GG/.test(a)) {
                    o('(_i_weekYear % 100) < 10 ? "0" : ""'), o('_i_weekYear % 100'), s(2);
                    continue;
                }
                break;
            case 'A':
                (i.hour = !0), (i.minutes = !0), o('localeData.meridiem(_hour, _mins, false)'), s(1);
                continue;
            case 'a':
                (i.hour = !0), (i.minutes = !0), o('localeData.meridiem(_hour, _mins, true)'), s(1);
                continue;
            case 'H':
                if (((i.hour = !0), /^HH/.test(a))) {
                    o('_hour < 10 ? "0" : ""'), o('_hour'), s(2);
                    continue;
                }
                o('_hour'), s(1);
                continue;
            case 'h':
                if (((i.hour = !0), /^hh/.test(a))) {
                    o('((_hour+11) % 12) < 9 ? "0" : ""'), o('((_hour+11) % 12) + 1'), s(2);
                    continue;
                }
                o('((_hour+11) % 12) + 1'), s(1);
                continue;
            case 'k':
                if (((i.hour = !0), /^kk/.test(a))) {
                    o('_hour > 0 && _hour < 10 ? "0" : ""'), o('_hour === 0 ? "24" : _hour'), s(2);
                    continue;
                }
                o('_hour === 0 ? "24" : _hour'), s(1);
                continue;
            case 'm':
                if (((i.minutes = !0), /^mm/.test(a))) {
                    o('_mins < 10 ? "0" : ""'), o('_mins'), s(2);
                    continue;
                }
                o('_mins'), s(1);
                continue;
            case 's':
                if (((i.seconds = !0), /^ss/.test(a))) {
                    o('_secs < 10 ? "0" : ""'), o('_secs'), s(2);
                    continue;
                }
                o('_secs'), s(1);
                continue;
            case 'S':
                if (((i.millis = !0), /^SSS/.test(a))) {
                    o('_ms < 100 ? "0" : ""'), o('_ms < 10 ? "0" : ""'), o('_ms');
                    let e = /^S{3,9}/.exec(a);
                    if (null == e) throw Error('ms len regex failed');
                    let t = e[0].length;
                    t > 3 && o('"'.concat(Array(t - 2).join('0'), '"')), s(t);
                    continue;
                }
                if (/^SS/.test(a)) {
                    o('_ms < 100 ? "0" : ""'), o('Math.floor(_ms/10)'), s(2);
                    continue;
                }
                o('Math.floor(_ms / 100)'), s(1);
                continue;
            case 'Z':
                if (((i.offset = !0), /^ZZ/.test(a))) {
                    o('_offs >= 0 ? "+" : "-"'), o('_offH < 10 ? "0" : ""'), o('_offH'), o('_offM < 10 ? "0" : ""'), o('_offM'), s(2);
                    continue;
                }
                o('_offs >= 0 ? "+" : "-"'), o('_offH < 10 ? "0" : ""'), o('_offH'), o('":"'), o('_offM < 10 ? "0" : ""'), o('_offM'), s(1);
                continue;
            case 'X':
                o('Math.floor(d / 1000)'), s(1);
                continue;
            case 'x':
                o('d.valueOf()'), s(1);
                continue;
            case '[':
                let n = a.indexOf(']');
                if (-1 === n) {
                    o('"["'), s(1);
                    continue;
                }
                o(JSON.stringify(a.slice(1, n))), s(n + 1);
                continue;
        }
        o(JSON.stringify(a.charAt(0))), s(1);
    }
    let l = '';
    i.date && (l += 'var _date = d.get' + (n ? 'UTC' : '') + 'Date();\n'), i.month && (l += 'var _month = d.get' + (n ? 'UTC' : '') + 'Month();\n'), i.dayOfYear && (l += 'var _startOfYear = new Date(d.valueOf());\n_startOfYear.set' + (n ? 'UTC' : '') + 'Month(0);\n_startOfYear.set' + (n ? 'UTC' : '') + 'Date(1);\nvar _doy = Math.round((d - _startOfYear) / 864e5) + 1;\n'), i.day && (l += 'var _day = d.get' + (n ? 'UTC' : '') + 'Day();\n'), i.year && (l += 'var _year = d.get' + (n ? 'UTC' : '') + 'FullYear();\n'), i.hour && (l += 'var _hour = d.get' + (n ? 'UTC' : '') + 'Hours();\n'), i.minutes && (l += 'var _mins = d.get' + (n ? 'UTC' : '') + 'Minutes();\n'), i.seconds && (l += 'var _secs = d.get' + (n ? 'UTC' : '') + 'Seconds();\n'), i.millis && (l += 'var _ms = d.get' + (n ? 'UTC' : '') + 'Milliseconds();\n'), i.offset && (n ? (l += 'var _offs = 0, _absOffs = 0, _offH = 0, _offM = 0;') : (l += 'var _offs = -d.getTimezoneOffset();\nvar _absOffs = _offs < 0 ? -_offs : _offs;\nvar _offH = Math.floor(_absOffs / 60);\nvar _offM = _absOffs % 60;\n')), i.week && (l += 'var _wend = ' + (t.week.doy - t.week.dow) + ';\nvar _ddw = ' + +t.week.doy + ' - d.get' + (n ? 'UTC' : '') + 'Day();\nif(_ddw > _wend) _ddw -= 7;\nif(_ddw < _wend - 7) _ddw += 7;\nvar _d2 = new Date(d.valueOf());\n_d2.set' + (n ? 'UTC' : '') + 'Date(d.get' + (n ? 'UTC' : '') + 'Date() + _ddw);\nvar _soy2 = new Date(_d2.valueOf());\n_soy2.set' + (n ? 'UTC' : '') + 'Month(0);\n_soy2.set' + (n ? 'UTC' : '') + 'Date(1);\nvar _doy2 = Math.round((_d2 - _soy2) / 864e5) + 1;\nvar _week = Math.ceil(_doy2 / 7);\nvar _weekYear = _d2.get' + (n ? 'UTC' : '') + 'FullYear();\n'), i.isoweek && (l += 'var _i_wend = 3;\nvar _i_ddw = 4 - d.get' + (n ? 'UTC' : '') + 'Day();\nif(_i_ddw > _i_wend) _i_ddw -= 7;\nif(_i_ddw < _i_wend - 7) _i_ddw += 7;\nvar _i_d2 = new Date(d.valueOf());\n_i_d2.set' + (n ? 'UTC' : '') + 'Date(d.get' + (n ? 'UTC' : '') + 'Date() + _i_ddw);\nvar _i_soy2 = new Date(_i_d2.valueOf());\n_i_soy2.set' + (n ? 'UTC' : '') + 'Month(0);\n_i_soy2.set' + (n ? 'UTC' : '') + 'Date(1);\nvar _i_doy2 = Math.round((_i_d2 - _i_soy2) / 864e5) + 1;\nvar _i_week = Math.ceil(_i_doy2 / 7);\nvar _i_weekYear = _i_d2.get' + (n ? 'UTC' : '') + 'FullYear();\n');
    let u = Function('d', 'localeData', (l += 'return (\n"" +\n'.concat(r.join(' +\n'), '\n);')));
    return (e) => u(e, t);
}
