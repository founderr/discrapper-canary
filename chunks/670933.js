n.r(t),
    n.d(t, {
        default: function () {
            return o;
        }
    });
var r = n(250327),
    i = n(951516),
    a = n(217224);
function o(e, t) {
    (0, i.Z)(1, arguments);
    var n,
        r,
        o,
        s = (0, a.Z)(null !== (n = null == t ? void 0 : t.additionalDigits) && void 0 !== n ? n : 2);
    if (2 !== s && 1 !== s && 0 !== s) throw RangeError('additionalDigits must be 0, 1 or 2');
    if (!('string' == typeof e || '[object String]' === Object.prototype.toString.call(e))) return new Date(NaN);
    var l = d(e);
    if (l.date) {
        var u = _(l.date, s);
        r = E(u.restDateString, u.year);
    }
    if (!r || isNaN(r.getTime())) return new Date(NaN);
    var c = r.getTime(),
        f = 0;
    if (l.time && isNaN((f = h(l.time)))) return new Date(NaN);
    if (l.timezone) {
        if (isNaN((o = m(l.timezone)))) return new Date(NaN);
    } else {
        var p = new Date(c + f),
            I = new Date(0);
        return I.setFullYear(p.getUTCFullYear(), p.getUTCMonth(), p.getUTCDate()), I.setHours(p.getUTCHours(), p.getUTCMinutes(), p.getUTCSeconds(), p.getUTCMilliseconds()), I;
    }
    return new Date(c + f + o);
}
var s = {
        dateTimeDelimiter: /[T ]/,
        timeZoneDelimiter: /[Z ]/i,
        timezone: /([Z+-].*)$/
    },
    l = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
    u = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
    c = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function d(e) {
    var t,
        n = {},
        r = e.split(s.dateTimeDelimiter);
    if (r.length > 2) return n;
    if ((/:/.test(r[0]) ? (t = r[0]) : ((n.date = r[0]), (t = r[1]), s.timeZoneDelimiter.test(n.date) && ((n.date = e.split(s.timeZoneDelimiter)[0]), (t = e.substr(n.date.length, e.length)))), t)) {
        var i = s.timezone.exec(t);
        i ? ((n.time = t.replace(i[1], '')), (n.timezone = i[1])) : (n.time = t);
    }
    return n;
}
function _(e, t) {
    var n = RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + t) + '})|(\\d{2}|[+-]\\d{' + (2 + t) + '})$)'),
        r = e.match(n);
    if (!r)
        return {
            year: NaN,
            restDateString: ''
        };
    var i = r[1] ? parseInt(r[1]) : null,
        a = r[2] ? parseInt(r[2]) : null;
    return {
        year: null === a ? i : 100 * a,
        restDateString: e.slice((r[1] || r[2]).length)
    };
}
function E(e, t) {
    if (null === t) return new Date(NaN);
    var n = e.match(l);
    if (!n) return new Date(NaN);
    var r = !!n[4],
        i = f(n[1]),
        a = f(n[2]) - 1,
        o = f(n[3]),
        s = f(n[4]),
        u = f(n[5]) - 1;
    if (r) return v(t, s, u) ? I(t, s, u) : new Date(NaN);
    var c = new Date(0);
    return S(t, a, o) && A(t, i) ? (c.setUTCFullYear(t, a, Math.max(i, o)), c) : new Date(NaN);
}
function f(e) {
    return e ? parseInt(e) : 1;
}
function h(e) {
    var t = e.match(u);
    if (!t) return NaN;
    var n = p(t[1]),
        i = p(t[2]),
        a = p(t[3]);
    return N(n, i, a) ? n * r.vh + i * r.yJ + 1000 * a : NaN;
}
function p(e) {
    return (e && parseFloat(e.replace(',', '.'))) || 0;
}
function m(e) {
    if ('Z' === e) return 0;
    var t = e.match(c);
    if (!t) return 0;
    var n = '+' === t[1] ? -1 : 1,
        i = parseInt(t[2]),
        a = (t[3] && parseInt(t[3])) || 0;
    return O(i, a) ? n * (i * r.vh + a * r.yJ) : NaN;
}
function I(e, t, n) {
    var r = new Date(0);
    r.setUTCFullYear(e, 0, 4);
    var i = (t - 1) * 7 + n + 1 - (r.getUTCDay() || 7);
    return r.setUTCDate(r.getUTCDate() + i), r;
}
var T = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function g(e) {
    return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0);
}
function S(e, t, n) {
    return t >= 0 && t <= 11 && n >= 1 && n <= (T[t] || (g(e) ? 29 : 28));
}
function A(e, t) {
    return t >= 1 && t <= (g(e) ? 366 : 365);
}
function v(e, t, n) {
    return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function N(e, t, n) {
    return 24 === e ? 0 === t && 0 === n : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function O(e, t) {
    return t >= 0 && t <= 59;
}
