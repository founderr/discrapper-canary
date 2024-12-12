r.r(n),
    r.d(n, {
        default: function () {
            return o;
        }
    });
var i = r(250327),
    a = r(951516),
    s = r(217224);
function o(e, n) {
    (0, a.Z)(1, arguments);
    var r,
        i,
        o,
        l = (0, s.Z)(null !== (r = null == n ? void 0 : n.additionalDigits) && void 0 !== r ? r : 2);
    if (2 !== l && 1 !== l && 0 !== l) throw RangeError('additionalDigits must be 0, 1 or 2');
    if (!('string' == typeof e || '[object String]' === Object.prototype.toString.call(e))) return new Date(NaN);
    var u = f(e);
    if (u.date) {
        var c = _(u.date, l);
        i = h(c.restDateString, c.year);
    }
    if (!i || isNaN(i.getTime())) return new Date(NaN);
    var d = i.getTime(),
        p = 0;
    if (u.time && isNaN((p = m(u.time)))) return new Date(NaN);
    if (u.timezone) {
        if (isNaN((o = E(u.timezone)))) return new Date(NaN);
    } else {
        var g = new Date(d + p),
            v = new Date(0);
        return v.setFullYear(g.getUTCFullYear(), g.getUTCMonth(), g.getUTCDate()), v.setHours(g.getUTCHours(), g.getUTCMinutes(), g.getUTCSeconds(), g.getUTCMilliseconds()), v;
    }
    return new Date(d + p + o);
}
var l = {
        dateTimeDelimiter: /[T ]/,
        timeZoneDelimiter: /[Z ]/i,
        timezone: /([Z+-].*)$/
    },
    u = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
    c = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
    d = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function f(e) {
    var n,
        r = {},
        i = e.split(l.dateTimeDelimiter);
    if (i.length > 2) return r;
    if ((/:/.test(i[0]) ? (n = i[0]) : ((r.date = i[0]), (n = i[1]), l.timeZoneDelimiter.test(r.date) && ((r.date = e.split(l.timeZoneDelimiter)[0]), (n = e.substr(r.date.length, e.length)))), n)) {
        var a = l.timezone.exec(n);
        a ? ((r.time = n.replace(a[1], '')), (r.timezone = a[1])) : (r.time = n);
    }
    return r;
}
function _(e, n) {
    var r = RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + n) + '})|(\\d{2}|[+-]\\d{' + (2 + n) + '})$)'),
        i = e.match(r);
    if (!i)
        return {
            year: NaN,
            restDateString: ''
        };
    var a = i[1] ? parseInt(i[1]) : null,
        s = i[2] ? parseInt(i[2]) : null;
    return {
        year: null === s ? a : 100 * s,
        restDateString: e.slice((i[1] || i[2]).length)
    };
}
function h(e, n) {
    if (null === n) return new Date(NaN);
    var r = e.match(u);
    if (!r) return new Date(NaN);
    var i = !!r[4],
        a = p(r[1]),
        s = p(r[2]) - 1,
        o = p(r[3]),
        l = p(r[4]),
        c = p(r[5]) - 1;
    if (i) return S(n, l, c) ? v(n, l, c) : new Date(NaN);
    var d = new Date(0);
    return b(n, s, o) && y(n, a) ? (d.setUTCFullYear(n, s, Math.max(a, o)), d) : new Date(NaN);
}
function p(e) {
    return e ? parseInt(e) : 1;
}
function m(e) {
    var n = e.match(c);
    if (!n) return NaN;
    var r = g(n[1]),
        a = g(n[2]),
        s = g(n[3]);
    return A(r, a, s) ? r * i.vh + a * i.yJ + 1000 * s : NaN;
}
function g(e) {
    return (e && parseFloat(e.replace(',', '.'))) || 0;
}
function E(e) {
    if ('Z' === e) return 0;
    var n = e.match(d);
    if (!n) return 0;
    var r = '+' === n[1] ? -1 : 1,
        a = parseInt(n[2]),
        s = (n[3] && parseInt(n[3])) || 0;
    return N(a, s) ? r * (a * i.vh + s * i.yJ) : NaN;
}
function v(e, n, r) {
    var i = new Date(0);
    i.setUTCFullYear(e, 0, 4);
    var a = (n - 1) * 7 + r + 1 - (i.getUTCDay() || 7);
    return i.setUTCDate(i.getUTCDate() + a), i;
}
var I = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function T(e) {
    return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0);
}
function b(e, n, r) {
    return n >= 0 && n <= 11 && r >= 1 && r <= (I[n] || (T(e) ? 29 : 28));
}
function y(e, n) {
    return n >= 1 && n <= (T(e) ? 366 : 365);
}
function S(e, n, r) {
    return n >= 1 && n <= 53 && r >= 0 && r <= 6;
}
function A(e, n, r) {
    return 24 === e ? 0 === n && 0 === r : r >= 0 && r < 60 && n >= 0 && n < 60 && e >= 0 && e < 25;
}
function N(e, n) {
    return n >= 0 && n <= 59;
}
