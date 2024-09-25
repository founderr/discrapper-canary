let r, i;
n.d(t, {
    KC: function () {
        return h;
    },
    Rn: function () {
        return M;
    },
    Vf: function () {
        return R;
    },
    YR: function () {
        return tj;
    },
    xj: function () {
        return p;
    }
});
var a = n(410914);
function o(e, t) {
    return e - t * Math.floor(e / t);
}
let s = 1721426;
function l(e, t, n, r) {
    let i = (t = c(e, t)) - 1,
        a = -2;
    return n <= 2 ? (a = 0) : u(t) && (a = -1), s - 1 + 365 * i + Math.floor(i / 4) - Math.floor(i / 100) + Math.floor(i / 400) + Math.floor((367 * n - 362) / 12 + a + r);
}
function u(e) {
    return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function c(e, t) {
    return 'BC' === e ? 1 - t : t;
}
function d(e) {
    let t = 'AD';
    return e <= 0 && ((t = 'BC'), (e = 1 - e)), [t, e];
}
let _ = {
    standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
};
class E {
    fromJulianDay(e) {
        let t = e,
            n = t - s,
            r = Math.floor(n / 146097),
            i = o(n, 146097),
            a = Math.floor(i / 36524),
            c = o(i, 36524),
            _ = Math.floor(c / 1461),
            E = Math.floor(o(c, 1461) / 365),
            [f, h] = d(400 * r + 100 * a + 4 * _ + E + (4 !== a && 4 !== E ? 1 : 0)),
            p = t - l(f, h, 1, 1),
            m = 2;
        t < l(f, h, 3, 1) ? (m = 0) : u(h) && (m = 1);
        let I = Math.floor(((p + m) * 12 + 373) / 367),
            T = t - l(f, h, I, 1) + 1;
        return new eZ(f, h, I, T);
    }
    toJulianDay(e) {
        return l(e.era, e.year, e.month, e.day);
    }
    getDaysInMonth(e) {
        return _[u(e.year) ? 'leapyear' : 'standard'][e.month - 1];
    }
    getMonthsInYear(e) {
        return 12;
    }
    getDaysInYear(e) {
        return u(e.year) ? 366 : 365;
    }
    getYearsInEra(e) {
        return 9999;
    }
    getEras() {
        return ['BC', 'AD'];
    }
    isInverseEra(e) {
        return 'BC' === e.era;
    }
    balanceDate(e) {
        e.year <= 0 && ((e.era = 'BC' === e.era ? 'AD' : 'BC'), (e.year = 1 - e.year));
    }
    constructor() {
        this.identifier = 'gregory';
    }
}
let f = {
    '001': 1,
    AD: 1,
    AE: 6,
    AF: 6,
    AI: 1,
    AL: 1,
    AM: 1,
    AN: 1,
    AR: 1,
    AT: 1,
    AU: 1,
    AX: 1,
    AZ: 1,
    BA: 1,
    BE: 1,
    BG: 1,
    BH: 6,
    BM: 1,
    BN: 1,
    BY: 1,
    CH: 1,
    CL: 1,
    CM: 1,
    CN: 1,
    CR: 1,
    CY: 1,
    CZ: 1,
    DE: 1,
    DJ: 6,
    DK: 1,
    DZ: 6,
    EC: 1,
    EE: 1,
    EG: 6,
    ES: 1,
    FI: 1,
    FJ: 1,
    FO: 1,
    FR: 1,
    GB: 1,
    GE: 1,
    GF: 1,
    GP: 1,
    GR: 1,
    HR: 1,
    HU: 1,
    IE: 1,
    IQ: 6,
    IR: 6,
    IS: 1,
    IT: 1,
    JO: 6,
    KG: 1,
    KW: 6,
    KZ: 1,
    LB: 1,
    LI: 1,
    LK: 1,
    LT: 1,
    LU: 1,
    LV: 1,
    LY: 6,
    MC: 1,
    MD: 1,
    ME: 1,
    MK: 1,
    MN: 1,
    MQ: 1,
    MV: 5,
    MY: 1,
    NL: 1,
    NO: 1,
    NZ: 1,
    OM: 6,
    PL: 1,
    QA: 6,
    RE: 1,
    RO: 1,
    RS: 1,
    RU: 1,
    SD: 6,
    SE: 1,
    SI: 1,
    SK: 1,
    SM: 1,
    SY: 6,
    TJ: 1,
    TM: 1,
    TR: 1,
    UA: 1,
    UY: 1,
    UZ: 1,
    VA: 1,
    VN: 1,
    XK: 1
};
function h(e, t) {
    return (t = Q(t, e.calendar)), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function p(e, t) {
    return (t = Q(t, e.calendar)), (e = O(e)), (t = O(t)), e.era === t.era && e.year === t.year && e.month === t.month;
}
function m(e, t) {
    let n = Math.ceil(e.calendar.toJulianDay(e) + 1 - D(t)) % 7;
    return n < 0 && (n += 7), n;
}
function I(e) {
    return W(Date.now(), e);
}
function T(e) {
    return z(I(e));
}
function g(e, t) {
    return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function S(e, t) {
    return A(e) - A(t);
}
function A(e) {
    return 3600000 * e.hour + 60000 * e.minute + 1000 * e.second + e.millisecond;
}
let v = null;
function N() {
    return null == v && (v = new Intl.DateTimeFormat().resolvedOptions().timeZone), v;
}
function O(e) {
    return e.subtract({ days: e.day - 1 });
}
function R(e) {
    return e.add({ days: e.calendar.getDaysInMonth(e) - e.day });
}
function C(e) {
    return O(e.subtract({ months: e.month - 1 }));
}
function y(e, t) {
    let n = m(e, t);
    return e.subtract({ days: n });
}
let b = new Map();
function L(e) {
    if (Intl.Locale) {
        let t = b.get(e);
        return !t && ((t = new Intl.Locale(e).maximize().region), b.set(e, t)), t;
    }
    let t = e.split('-')[1];
    return 'u' === t ? null : t;
}
function D(e) {
    return f[L(e)] || 0;
}
function M(e, t) {
    let n = e.calendar.getDaysInMonth(e);
    return Math.ceil((m(O(e), t) + n) / 7);
}
let P = null;
function U(e, t) {
    let n = Math.ceil(e.calendar.toJulianDay(e) + 1) % 7;
    n < 0 && (n += 7);
    let [r, i] = P[L(t)] || [6, 0];
    return n === r || n === i;
}
function w(e) {
    return x(c((e = Q(e, new E())).era, e.year), e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function x(e, t, n, r, i, a, o) {
    let s = new Date();
    return s.setUTCHours(r, i, a, o), s.setUTCFullYear(e, t - 1, n), s.getTime();
}
function G(e, t) {
    if ('UTC' === t) return 0;
    if (e > 0 && t === N()) return -60000 * new Date(e).getTimezoneOffset();
    let { year: n, month: r, day: i, hour: a, minute: o, second: s } = B(e, t);
    return x(n, r, i, a, o, s, 0) - 1000 * Math.floor(e / 1000);
}
let k = new Map();
function B(e, t) {
    let n = k.get(t);
    !n &&
        ((n = new Intl.DateTimeFormat('en-US', {
            timeZone: t,
            hour12: !1,
            era: 'short',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        })),
        k.set(t, n));
    let r = n.formatToParts(new Date(e)),
        i = {};
    for (let e of r) 'literal' !== e.type && (i[e.type] = e.value);
    return {
        year: 'BC' === i.era || 'B' === i.era ? -i.year + 1 : +i.year,
        month: +i.month,
        day: +i.day,
        hour: '24' === i.hour ? 0 : +i.hour,
        minute: +i.minute,
        second: +i.second
    };
}
let F = 86400000;
function Z(e, t) {
    let n = w(e),
        r = n - G(n - F, t),
        i = n - G(n + F, t);
    return V(e, t, r, i);
}
function V(e, t, n, r) {
    return (n === r ? [n] : [n, r]).filter((n) => H(e, t, n));
}
function H(e, t, n) {
    let r = B(n, t);
    return e.year === r.year && e.month === r.month && e.day === r.day && e.hour === r.hour && e.minute === r.minute && e.second === r.second;
}
function Y(e, t, n = 'compatible') {
    let r = q(e);
    if ('UTC' === t) return w(r);
    if (t === N() && 'compatible' === n) {
        r = Q(r, new E());
        let e = new Date(),
            t = c(r.era, r.year);
        return e.setFullYear(t, r.month - 1, r.day), e.setHours(r.hour, r.minute, r.second, r.millisecond), e.getTime();
    }
    let i = w(r),
        a = G(i - F, t),
        o = G(i + F, t),
        s = V(r, t, i - a, i - o);
    if (1 === s.length) return s[0];
    if (s.length > 1)
        switch (n) {
            case 'compatible':
            case 'earlier':
                return s[0];
            case 'later':
                return s[s.length - 1];
            case 'reject':
                throw RangeError('Multiple possible absolute times found');
        }
    switch (n) {
        case 'earlier':
            return Math.min(i - a, i - o);
        case 'compatible':
        case 'later':
            return Math.max(i - a, i - o);
        case 'reject':
            throw RangeError('No such absolute time found');
    }
}
function j(e, t, n = 'compatible') {
    return new Date(Y(e, t, n));
}
function W(e, t) {
    let n = G(e, t),
        r = new Date(e + n);
    return new eK(r.getUTCFullYear(), r.getUTCMonth() + 1, r.getUTCDate(), t, n, r.getUTCHours(), r.getUTCMinutes(), r.getUTCSeconds(), r.getUTCMilliseconds());
}
function K(e, t) {
    return W(e.getTime(), t);
}
function z(e) {
    return new eZ(e.calendar, e.era, e.year, e.month, e.day);
}
function q(e, t) {
    let n = 0,
        r = 0,
        i = 0,
        a = 0;
    if ('timeZone' in e) ({ hour: n, minute: r, second: i, millisecond: a } = e);
    else if ('hour' in e && !t) return e;
    return t && ({ hour: n, minute: r, second: i, millisecond: a } = t), new ej(e.calendar, e.era, e.year, e.month, e.day, n, r, i, a);
}
function Q(e, t) {
    if (e.calendar.identifier === t.identifier) return e;
    let n = t.fromJulianDay(e.calendar.toJulianDay(e)),
        r = e.copy();
    return (r.calendar = t), (r.era = n.era), (r.year = n.year), (r.month = n.month), (r.day = n.day), eo(r), r;
}
function X(e, t, n) {
    if (e instanceof eK) return e.timeZone === t ? e : J(e, t);
    return W(Y(e, t, n), t);
}
function $(e) {
    return new Date(w(e) - e.offset);
}
function J(e, t) {
    return Q(W(w(e) - e.offset, t), e.calendar);
}
let ee = 3600000;
function et(e, t) {
    let n = e.copy(),
        r = 'hour' in n ? ef(n, t) : 0;
    en(n, t.years || 0), n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e), (n.month += t.months || 0), er(n), ea(n), (n.day += 7 * (t.weeks || 0)), (n.day += t.days || 0), (n.day += r), ei(n), n.calendar.balanceDate && n.calendar.balanceDate(n), n.year < 1 && ((n.year = 1), (n.month = 1), (n.day = 1));
    let i = n.calendar.getYearsInEra(n);
    if (n.year > i) {
        var a, o;
        let e = null === (o = (a = n.calendar).isInverseEra) || void 0 === o ? void 0 : o.call(a, n);
        (n.year = i), (n.month = e ? 1 : n.calendar.getMonthsInYear(n)), (n.day = e ? 1 : n.calendar.getDaysInMonth(n));
    }
    n.month < 1 && ((n.month = 1), (n.day = 1));
    let s = n.calendar.getMonthsInYear(n);
    return n.month > s && ((n.month = s), (n.day = n.calendar.getDaysInMonth(n))), (n.day = Math.max(1, Math.min(n.calendar.getDaysInMonth(n), n.day))), n;
}
function en(e, t) {
    var n, r;
    (null === (r = (n = e.calendar).isInverseEra) || void 0 === r ? void 0 : r.call(n, e)) && (t = -t), (e.year += t);
}
function er(e) {
    for (; e.month < 1; ) en(e, -1), (e.month += e.calendar.getMonthsInYear(e));
    let t = 0;
    for (; e.month > (t = e.calendar.getMonthsInYear(e)); ) (e.month -= t), en(e, 1);
}
function ei(e) {
    for (; e.day < 1; ) e.month--, er(e), (e.day += e.calendar.getDaysInMonth(e));
    for (; e.day > e.calendar.getDaysInMonth(e); ) (e.day -= e.calendar.getDaysInMonth(e)), e.month++, er(e);
}
function ea(e) {
    (e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month))), (e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day)));
}
function eo(e) {
    e.calendar.constrainDate && e.calendar.constrainDate(e), (e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year))), ea(e);
}
function es(e) {
    let t = {};
    for (let n in e) 'number' == typeof e[n] && (t[n] = -e[n]);
    return t;
}
function el(e, t) {
    return et(e, es(t));
}
function eu(e, t) {
    let n = e.copy();
    return null != t.era && (n.era = t.era), null != t.year && (n.year = t.year), null != t.month && (n.month = t.month), null != t.day && (n.day = t.day), eo(n), n;
}
function ec(e, t) {
    let n = e.copy();
    return null != t.hour && (n.hour = t.hour), null != t.minute && (n.minute = t.minute), null != t.second && (n.second = t.second), null != t.millisecond && (n.millisecond = t.millisecond), e_(n), n;
}
function ed(e) {
    (e.second += Math.floor(e.millisecond / 1000)), (e.millisecond = eE(e.millisecond, 1000)), (e.minute += Math.floor(e.second / 60)), (e.second = eE(e.second, 60)), (e.hour += Math.floor(e.minute / 60)), (e.minute = eE(e.minute, 60));
    let t = Math.floor(e.hour / 24);
    return (e.hour = eE(e.hour, 24)), t;
}
function e_(e) {
    (e.millisecond = Math.max(0, Math.min(e.millisecond, 1000))), (e.second = Math.max(0, Math.min(e.second, 59))), (e.minute = Math.max(0, Math.min(e.minute, 59))), (e.hour = Math.max(0, Math.min(e.hour, 23)));
}
function eE(e, t) {
    let n = e % t;
    return n < 0 && (n += t), n;
}
function ef(e, t) {
    return (e.hour += t.hours || 0), (e.minute += t.minutes || 0), (e.second += t.seconds || 0), (e.millisecond += t.milliseconds || 0), ed(e);
}
function eh(e, t) {
    let n = e.copy();
    return ef(n, t), n;
}
function ep(e, t) {
    return eh(e, es(t));
}
function em(e, t, n, r) {
    let i = e.copy();
    switch (t) {
        case 'era': {
            let t = e.calendar.getEras(),
                a = t.indexOf(e.era);
            if (a < 0) throw Error('Invalid era: ' + e.era);
            (a = eT(a, n, 0, t.length - 1, null == r ? void 0 : r.round)), (i.era = t[a]), eo(i);
            break;
        }
        case 'year':
            var a, o;
            (null === (o = (a = i.calendar).isInverseEra) || void 0 === o ? void 0 : o.call(a, i)) && (n = -n), (i.year = eT(e.year, n, -1 / 0, 9999, null == r ? void 0 : r.round)), i.year === -1 / 0 && (i.year = 1), i.calendar.balanceYearMonth && i.calendar.balanceYearMonth(i, e);
            break;
        case 'month':
            i.month = eT(e.month, n, 1, e.calendar.getMonthsInYear(e), null == r ? void 0 : r.round);
            break;
        case 'day':
            i.day = eT(e.day, n, 1, e.calendar.getDaysInMonth(e), null == r ? void 0 : r.round);
            break;
        default:
            throw Error('Unsupported field ' + t);
    }
    return e.calendar.balanceDate && e.calendar.balanceDate(i), eo(i), i;
}
function eI(e, t, n, r) {
    let i = e.copy();
    switch (t) {
        case 'hour': {
            let t = e.hour,
                a = 0,
                o = 23;
            if ((null == r ? void 0 : r.hourCycle) === 12) {
                let e = t >= 12;
                (a = e ? 12 : 0), (o = e ? 23 : 11);
            }
            i.hour = eT(t, n, a, o, null == r ? void 0 : r.round);
            break;
        }
        case 'minute':
            i.minute = eT(e.minute, n, 0, 59, null == r ? void 0 : r.round);
            break;
        case 'second':
            i.second = eT(e.second, n, 0, 59, null == r ? void 0 : r.round);
            break;
        case 'millisecond':
            i.millisecond = eT(e.millisecond, n, 0, 999, null == r ? void 0 : r.round);
            break;
        default:
            throw Error('Unsupported field ' + t);
    }
    return i;
}
function eT(e, t, n, r, i = !1) {
    if (i) {
        (e += Math.sign(t)) < n && (e = r);
        let i = Math.abs(t);
        (e = t > 0 ? Math.ceil(e / i) * i : Math.floor(e / i) * i) > r && (e = n);
    } else (e += t) < n ? (e = r - (n - e - 1)) : e > r && (e = n + (e - r - 1));
    return e;
}
function eg(e, t) {
    let n;
    if ((null != t.years && 0 !== t.years) || (null != t.months && 0 !== t.months) || (null != t.weeks && 0 !== t.weeks) || (null != t.days && 0 !== t.days)) {
        let r;
        n = Y(
            et(q(e), {
                years: t.years,
                months: t.months,
                weeks: t.weeks,
                days: t.days
            }),
            e.timeZone
        );
    } else n = w(e) - e.offset;
    return Q(W((n += (t.milliseconds || 0) + 1000 * (t.seconds || 0) + 60000 * (t.minutes || 0) + 3600000 * (t.hours || 0)), e.timeZone), e.calendar);
}
function eS(e, t) {
    return eg(e, es(t));
}
function eA(e, t, n, r) {
    switch (t) {
        case 'hour': {
            let t = 0,
                i = 23;
            if ((null == r ? void 0 : r.hourCycle) === 12) {
                let n = e.hour >= 12;
                (t = n ? 12 : 0), (i = n ? 23 : 11);
            }
            let a = q(e),
                o = Q(ec(a, { hour: t }), new E()),
                s = [Y(o, e.timeZone, 'earlier'), Y(o, e.timeZone, 'later')].filter((t) => W(t, e.timeZone).day === o.day)[0],
                l = Q(ec(a, { hour: i }), new E()),
                u = [Y(l, e.timeZone, 'earlier'), Y(l, e.timeZone, 'later')].filter((t) => W(t, e.timeZone).day === l.day).pop(),
                c = w(e) - e.offset,
                d = Math.floor(c / ee),
                _ = c % ee;
            return Q(W((c = eT(d, n, Math.floor(s / ee), Math.floor(u / ee), null == r ? void 0 : r.round) * ee + _), e.timeZone), e.calendar);
        }
        case 'minute':
        case 'second':
        case 'millisecond':
            return eI(e, t, n, r);
        case 'era':
        case 'year':
        case 'month':
        case 'day':
            return Q(W(Y(em(q(e), t, n, r), e.timeZone), e.timeZone), e.calendar);
        default:
            throw Error('Unsupported field ' + t);
    }
}
function ev(e, t, n) {
    let r = q(e),
        i = ec(eu(r, t), t);
    return 0 === i.compare(r) ? e : Q(W(Y(i, e.timeZone, n), e.timeZone), e.calendar);
}
let eN = /^(\d{2})(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/,
    eO = /^(\d{4})-(\d{2})-(\d{2})$/,
    eR = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/,
    eC = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:([+-]\d{2})(?::?(\d{2}))?)?\[(.*?)\]$/,
    ey = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:(?:([+-]\d{2})(?::?(\d{2}))?)|Z)$/,
    eb = /^((?<negative>-)|\+)?P((?<years>\d*)Y)?((?<months>\d*)M)?((?<weeks>\d*)W)?((?<days>\d*)D)?((?<time>T)((?<hours>\d*[.,]?\d{1,9})H)?((?<minutes>\d*[.,]?\d{1,9})M)?((?<seconds>\d*[.,]?\d{1,9})S)?)?$/,
    eL = ['hours', 'minutes', 'seconds'],
    eD = ['years', 'months', 'weeks', 'days', ...eL];
function eM(e, t) {
    var n;
    let r = e.match(ey);
    if (!r) throw Error('Invalid ISO 8601 date time string: ' + e);
    let i = new eK(eP(r[1], 1, 9999), eP(r[2], 1, 12), 1, t, 0, r[4] ? eP(r[4], 0, 23) : 0, r[5] ? eP(r[5], 0, 59) : 0, r[6] ? eP(r[6], 0, 59) : 0, r[7] ? 1000 * eP(r[7], 0, 1 / 0) : 0);
    return (i.day = eP(r[3], 0, i.calendar.getDaysInMonth(i))), r[8] && (i.offset = 3600000 * eP(r[8], -23, 23) + 60000 * eP(null !== (n = r[9]) && void 0 !== n ? n : '0', 0, 59)), J(i, t);
}
function eP(e, t, n) {
    let r = Number(e);
    if (r < t || r > n) throw RangeError(`Value out of range: ${t} <= ${r} <= ${n}`);
    return r;
}
function eU(e) {
    return `${String(e.hour).padStart(2, '0')}:${String(e.minute).padStart(2, '0')}:${String(e.second).padStart(2, '0')}${e.millisecond ? String(e.millisecond / 1000).slice(1) : ''}`;
}
function ew(e) {
    let t = Q(e, new E());
    return `${String(t.year).padStart(4, '0')}-${String(t.month).padStart(2, '0')}-${String(t.day).padStart(2, '0')}`;
}
function ex(e) {
    return `${ew(e)}T${eU(e)}`;
}
function eG(e) {
    let t = 0 > Math.sign(e) ? '-' : '+',
        n = Math.floor((e = Math.abs(e)) / 3600000),
        r = (e % 3600000) / 60000;
    return `${t}${String(n).padStart(2, '0')}:${String(r).padStart(2, '0')}`;
}
function ek(e) {
    return `${ex(e)}${eG(e.offset)}[${e.timeZone}]`;
}
function eB(e) {
    let t,
        n = 'object' == typeof e[0] ? e.shift() : new E();
    if ('string' == typeof e[0]) t = e.shift();
    else {
        let e = n.getEras();
        t = e[e.length - 1];
    }
    return [n, t, e.shift(), e.shift(), e.shift()];
}
var eF = new WeakMap();
class eZ {
    copy() {
        return this.era ? new eZ(this.calendar, this.era, this.year, this.month, this.day) : new eZ(this.calendar, this.year, this.month, this.day);
    }
    add(e) {
        return et(this, e);
    }
    subtract(e) {
        return el(this, e);
    }
    set(e) {
        return eu(this, e);
    }
    cycle(e, t, n) {
        return em(this, e, t, n);
    }
    toDate(e) {
        return j(this, e);
    }
    toString() {
        return ew(this);
    }
    compare(e) {
        return g(this, e);
    }
    constructor(...e) {
        (0, a._)(this, eF, {
            writable: !0,
            value: void 0
        });
        let [t, n, r, i, o] = eB(e);
        (this.calendar = t), (this.era = n), (this.year = r), (this.month = i), (this.day = o), eo(this);
    }
}
var eV = new WeakMap();
class eH {
    copy() {
        return new eH(this.hour, this.minute, this.second, this.millisecond);
    }
    add(e) {
        return eh(this, e);
    }
    subtract(e) {
        return ep(this, e);
    }
    set(e) {
        return ec(this, e);
    }
    cycle(e, t, n) {
        return eI(this, e, t, n);
    }
    toString() {
        return eU(this);
    }
    compare(e) {
        return S(this, e);
    }
    constructor(e = 0, t = 0, n = 0, r = 0) {
        $cUVuN$_(this, eV, {
            writable: !0,
            value: void 0
        }),
            (this.hour = e),
            (this.minute = t),
            (this.second = n),
            (this.millisecond = r),
            e_(this);
    }
}
var eY = new WeakMap();
class ej {
    copy() {
        return this.era ? new ej(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new ej(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
    }
    add(e) {
        return et(this, e);
    }
    subtract(e) {
        return el(this, e);
    }
    set(e) {
        return eu(ec(this, e), e);
    }
    cycle(e, t, n) {
        switch (e) {
            case 'era':
            case 'year':
            case 'month':
            case 'day':
                return em(this, e, t, n);
            default:
                return eI(this, e, t, n);
        }
    }
    toDate(e, t) {
        return j(this, e, t);
    }
    toString() {
        return ex(this);
    }
    compare(e) {
        let t = g(this, e);
        return 0 === t ? S(this, q(e)) : t;
    }
    constructor(...e) {
        (0, a._)(this, eY, {
            writable: !0,
            value: void 0
        });
        let [t, n, r, i, o] = eB(e);
        (this.calendar = t), (this.era = n), (this.year = r), (this.month = i), (this.day = o), (this.hour = e.shift() || 0), (this.minute = e.shift() || 0), (this.second = e.shift() || 0), (this.millisecond = e.shift() || 0), eo(this);
    }
}
var eW = new WeakMap();
class eK {
    copy() {
        return this.era ? new eK(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new eK(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
    }
    add(e) {
        return eg(this, e);
    }
    subtract(e) {
        return eS(this, e);
    }
    set(e, t) {
        return ev(this, e, t);
    }
    cycle(e, t, n) {
        return eA(this, e, t, n);
    }
    toDate() {
        return $(this);
    }
    toString() {
        return ek(this);
    }
    toAbsoluteString() {
        return this.toDate().toISOString();
    }
    compare(e) {
        return this.toDate().getTime() - X(e, this.timeZone).toDate().getTime();
    }
    constructor(...e) {
        $cUVuN$_(this, eW, {
            writable: !0,
            value: void 0
        });
        let [t, n, r, i, a] = eB(e),
            o = e.shift(),
            s = e.shift();
        (this.calendar = t), (this.era = n), (this.year = r), (this.month = i), (this.day = a), (this.timeZone = o), (this.offset = s), (this.hour = e.shift() || 0), (this.minute = e.shift() || 0), (this.second = e.shift() || 0), (this.millisecond = e.shift() || 0), eo(this);
    }
}
let ez = [
        [1868, 9, 8],
        [1912, 7, 30],
        [1926, 12, 25],
        [1989, 1, 8],
        [2019, 5, 1]
    ],
    eq = [
        [1912, 7, 29],
        [1926, 12, 24],
        [1989, 1, 7],
        [2019, 4, 30]
    ],
    eQ = [1867, 1911, 1925, 1988, 2018],
    eX = ['meiji', 'taisho', 'showa', 'heisei', 'reiwa'];
function e$(e) {
    let t = ez.findIndex(([t, n, r]) => !!(e.year < t) || (e.year === t && !!(e.month < n)) || (e.year === t && e.month === n && !!(e.day < r)) || !1);
    return -1 === t ? ez.length - 1 : 0 === t ? 0 : t - 1;
}
function eJ(e) {
    let t = eQ[eX.indexOf(e.era)];
    if (!t) throw Error('Unknown era: ' + e.era);
    return new eZ(e.year + t, e.month, e.day);
}
class e0 extends E {
    fromJulianDay(e) {
        let t = super.fromJulianDay(e),
            n = e$(t);
        return new eZ(this, eX[n], t.year - eQ[n], t.month, t.day);
    }
    toJulianDay(e) {
        return super.toJulianDay(eJ(e));
    }
    balanceDate(e) {
        let t = eJ(e),
            n = e$(t);
        eX[n] !== e.era && ((e.era = eX[n]), (e.year = t.year - eQ[n])), this.constrainDate(e);
    }
    constrainDate(e) {
        let t = eX.indexOf(e.era),
            n = eq[t];
        if (null != n) {
            let [r, i, a] = n,
                o = r - eQ[t];
            (e.year = Math.max(1, Math.min(o, e.year))), e.year === o && ((e.month = Math.min(i, e.month)), e.month === i && (e.day = Math.min(a, e.day)));
        }
        if (1 === e.year && t >= 0) {
            let [, n, r] = ez[t];
            (e.month = Math.max(n, e.month)), e.month === n && (e.day = Math.max(r, e.day));
        }
    }
    getEras() {
        return eX;
    }
    getYearsInEra(e) {
        let t = eX.indexOf(e.era),
            n = ez[t],
            r = ez[t + 1];
        if (null == r) return 9999 - n[0] + 1;
        let i = r[0] - n[0];
        return (e.month < r[1] || (e.month === r[1] && e.day < r[2])) && i++, i;
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(eJ(e));
    }
    getMinimumMonthInYear(e) {
        let t = e1(e);
        return t ? t[1] : 1;
    }
    getMinimumDayInMonth(e) {
        let t = e1(e);
        return t && e.month === t[1] ? t[2] : 1;
    }
    constructor(...e) {
        super(...e), (this.identifier = 'japanese');
    }
}
function e1(e) {
    if (1 === e.year) return ez[eX.indexOf(e.era)];
}
let e2 = -543;
class e3 extends E {
    fromJulianDay(e) {
        let t = super.fromJulianDay(e);
        return new eZ(this, c(t.era, t.year) - e2, t.month, t.day);
    }
    toJulianDay(e) {
        return super.toJulianDay(e4(e));
    }
    getEras() {
        return ['BE'];
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(e4(e));
    }
    balanceDate() {}
    constructor(...e) {
        super(...e), (this.identifier = 'buddhist');
    }
}
function e4(e) {
    let [t, n] = d(e.year + e2);
    return new eZ(t, n, e.month, e.day);
}
let e5 = 1911;
function e6(e) {
    return 'minguo' === e.era ? e.year + e5 : 1 - e.year + e5;
}
function e7(e) {
    let t = e - e5;
    return t > 0 ? ['minguo', t] : ['before_minguo', 1 - t];
}
class e8 extends E {
    fromJulianDay(e) {
        let t = super.fromJulianDay(e),
            [n, r] = e7(c(t.era, t.year));
        return new eZ(this, n, r, t.month, t.day);
    }
    toJulianDay(e) {
        return super.toJulianDay(e9(e));
    }
    getEras() {
        return ['before_minguo', 'minguo'];
    }
    balanceDate(e) {
        let [t, n] = e7(e6(e));
        (e.era = t), (e.year = n);
    }
    isInverseEra(e) {
        return 'before_minguo' === e.era;
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(e9(e));
    }
    getYearsInEra(e) {
        return 'before_minguo' === e.era ? 9999 : 9999 - e5;
    }
    constructor(...e) {
        super(...e), (this.identifier = 'roc');
    }
}
function e9(e) {
    let [t, n] = d(e6(e));
    return new eZ(t, n, e.month, e.day);
}
let te = 1948321;
function tt(e) {
    let t = o(e > 0 ? e - 474 : e - 473, 2820) + 474;
    return 31 > o((t + 38) * 31, 128);
}
function tn(e, t, n) {
    let r = e > 0 ? e - 474 : e - 473,
        i = o(r, 2820) + 474;
    return te - 1 + 1029983 * Math.floor(r / 2820) + 365 * (i - 1) + Math.floor((31 * i - 5) / 128) + (t <= 7 ? 31 * (t - 1) : 30 * (t - 1) + 6) + n;
}
class tr {
    fromJulianDay(e) {
        let t = e - tn(475, 1, 1),
            n = Math.floor(t / 1029983),
            r = o(t, 1029983),
            i = 474 + 2820 * n + (1029982 === r ? 2820 : Math.floor((128 * r + 46878) / 46751));
        i <= 0 && i--;
        let a = e - tn(i, 1, 1) + 1,
            s = a <= 186 ? Math.ceil(a / 31) : Math.ceil((a - 6) / 31),
            l = e - tn(i, s, 1) + 1;
        return new eZ(this, i, s, l);
    }
    toJulianDay(e) {
        return tn(e.year, e.month, e.day);
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInMonth(e) {
        return e.month <= 6 ? 31 : e.month <= 11 ? 30 : tt(e.year) ? 30 : 29;
    }
    getEras() {
        return ['AP'];
    }
    getYearsInEra() {
        return 9377;
    }
    constructor() {
        this.identifier = 'persian';
    }
}
let ti = 78,
    ta = 80;
class to extends E {
    fromJulianDay(e) {
        let t,
            n,
            r,
            i = super.fromJulianDay(e),
            a = i.year - ti,
            o = e - l(i.era, i.year, 1, 1);
        if ((o < ta ? (a--, (o += (t = u(i.year - 1) ? 31 : 30) + 155 + 90 + 10)) : ((t = u(i.year) ? 31 : 30), (o -= ta)), o < t)) (n = 1), (r = o + 1);
        else {
            let e = o - t;
            e < 155 ? ((n = Math.floor(e / 31) + 2), (r = (e % 31) + 1)) : ((e -= 155), (n = Math.floor(e / 30) + 7), (r = (e % 30) + 1));
        }
        return new eZ(this, a, n, r);
    }
    toJulianDay(e) {
        let t, n;
        let [r, i] = d(e.year + ti);
        return (u(i) ? ((t = 31), (n = l(r, i, 3, 21))) : ((t = 30), (n = l(r, i, 3, 22))), 1 === e.month) ? n + e.day - 1 : ((n += t + 31 * Math.min(e.month - 2, 5)), e.month >= 8 && (n += (e.month - 7) * 30), (n += e.day - 1));
    }
    getDaysInMonth(e) {
        return (1 === e.month && u(e.year + ti)) || (e.month >= 2 && e.month <= 6) ? 31 : 30;
    }
    getYearsInEra() {
        return 9919;
    }
    getEras() {
        return ['saka'];
    }
    balanceDate() {}
    constructor(...e) {
        super(...e), (this.identifier = 'indian');
    }
}
let ts = 1948440,
    tl = 1948439,
    tu = 1300,
    tc = 1600,
    td = 460322;
function t_(e, t, n, r) {
    return r + Math.ceil(29.5 * (n - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1;
}
function tE(e, t, n) {
    let r = Math.floor((30 * (n - t) + 10646) / 10631),
        i = Math.min(12, Math.ceil((n - (29 + t_(t, r, 1, 1))) / 29.5) + 1),
        a = n - t_(t, r, i, 1) + 1;
    return new eZ(e, r, i, a);
}
function tf(e) {
    return (14 + 11 * e) % 30 < 11;
}
class th {
    fromJulianDay(e) {
        return tE(this, ts, e);
    }
    toJulianDay(e) {
        return t_(ts, e.year, e.month, e.day);
    }
    getDaysInMonth(e) {
        let t = 29 + (e.month % 2);
        return 12 === e.month && tf(e.year) && t++, t;
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInYear(e) {
        return tf(e.year) ? 355 : 354;
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
class tp extends th {
    fromJulianDay(e) {
        return tE(this, tl, e);
    }
    toJulianDay(e) {
        return t_(tl, e.year, e.month, e.day);
    }
    constructor(...e) {
        super(...e), (this.identifier = 'islamic-tbla');
    }
}
let tm = 'qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=';
function tI(e) {
    return td + i[e - tu];
}
function tT(e, t) {
    let n = 1 << (11 - (t - 1));
    return (r[e - tu] & n) == 0 ? 29 : 30;
}
function tg(e, t) {
    let n = tI(e);
    for (let r = 1; r < t; r++) n += tT(e, r);
    return n;
}
function tS(e) {
    return i[e + 1 - tu] - i[e - tu];
}
class tA extends th {
    fromJulianDay(e) {
        let t = e - ts,
            n = tI(tu),
            r = tI(tc);
        if (t < n || t > r) return super.fromJulianDay(e);
        {
            let e = tu - 1,
                n = 1,
                r = 1;
            for (; r > 0; ) {
                r = t - tI(++e) + 1;
                let i = tS(e);
                if (r === i) {
                    n = 12;
                    break;
                }
                if (r < i) {
                    let t = tT(e, n);
                    for (n = 1; r > t; ) (r -= t), (t = tT(e, ++n));
                    break;
                }
            }
            return new eZ(this, e, n, t - tg(e, n) + 1);
        }
    }
    toJulianDay(e) {
        return e.year < tu || e.year > tc ? super.toJulianDay(e) : ts + tg(e.year, e.month) + (e.day - 1);
    }
    getDaysInMonth(e) {
        return e.year < tu || e.year > tc ? super.getDaysInMonth(e) : tT(e.year, e.month);
    }
    getDaysInYear(e) {
        return e.year < tu || e.year > tc ? super.getDaysInYear(e) : tS(e.year);
    }
    constructor() {
        if ((super(), (this.identifier = 'islamic-umalqura'), !r && (r = new Uint16Array(Uint8Array.from(atob(tm), (e) => e.charCodeAt(0)).buffer)), !i)) {
            i = new Uint32Array(tc - tu + 1);
            let e = 0;
            for (let t = tu; t <= tc; t++) {
                i[t - tu] = e;
                for (let n = 1; n <= 12; n++) e += tT(t, n);
            }
        }
    }
}
let tv = 347997,
    tN = 1080,
    tO = 25920,
    tR = 765433;
function tC(e) {
    return 7 > o(7 * e + 1, 19);
}
function ty(e) {
    let t = Math.floor((235 * e - 234) / 19),
        n = 12084 + 13753 * t,
        r = 29 * t + Math.floor(n / 25920);
    return 3 > o(3 * (r + 1), 7) && (r += 1), r;
}
function tb(e) {
    let t = ty(e - 1),
        n = ty(e);
    return ty(e + 1) - n == 356 ? 2 : n - t == 382 ? 1 : 0;
}
function tL(e) {
    return ty(e) + tb(e);
}
function tD(e) {
    return tL(e + 1) - tL(e);
}
function tM(e) {
    let t = tD(e);
    switch ((t > 380 && (t -= 30), t)) {
        case 353:
            return 0;
        case 354:
            return 1;
        case 355:
            return 2;
    }
}
function tP(e, t) {
    if ((t >= 6 && !tC(e) && t++, 4 === t || 7 === t || 9 === t || 11 === t || 13 === t)) return 29;
    let n = tM(e);
    return 2 === t ? (2 === n ? 30 : 29) : 3 === t ? (0 === n ? 29 : 30) : 6 === t ? (tC(e) ? 30 : 0) : 30;
}
class tU {
    fromJulianDay(e) {
        let t = e - tv,
            n = Math.floor((((t * tO) / tR) * 19 + 234) / 235) + 1,
            r = tL(n),
            i = Math.floor(t - r);
        for (; i < 1; ) i = Math.floor(t - (r = tL(--n)));
        let a = 1,
            o = 0;
        for (; o < i; ) (o += tP(n, a)), a++;
        let s = i - (o -= tP(n, --a));
        return new eZ(this, n, a, s);
    }
    toJulianDay(e) {
        let t = tL(e.year);
        for (let n = 1; n < e.month; n++) t += tP(e.year, n);
        return t + e.day + tv;
    }
    getDaysInMonth(e) {
        return tP(e.year, e.month);
    }
    getMonthsInYear(e) {
        return tC(e.year) ? 13 : 12;
    }
    getDaysInYear(e) {
        return tD(e.year);
    }
    getYearsInEra() {
        return 9999;
    }
    getEras() {
        return ['AM'];
    }
    balanceYearMonth(e, t) {
        t.year !== e.year && (tC(t.year) && !tC(e.year) && t.month > 6 ? e.month-- : !tC(t.year) && tC(e.year) && t.month > 6 && e.month++);
    }
    constructor() {
        this.identifier = 'hebrew';
    }
}
let tw = 1723856,
    tx = 1824665,
    tG = 5500;
function tk(e, t, n, r) {
    return e + 365 * t + Math.floor(t / 4) + 30 * (n - 1) + r - 1;
}
function tB(e, t) {
    let n = Math.floor((4 * (t - e)) / 1461),
        r = 1 + Math.floor((t - tk(e, n, 1, 1)) / 30),
        i = t + 1 - tk(e, n, r, 1);
    return [n, r, i];
}
function tF(e) {
    return Math.floor((e % 4) / 3);
}
function tZ(e, t) {
    return t % 13 != 0 ? 30 : tF(e) + 5;
}
class tV {
    fromJulianDay(e) {
        let [t, n, r] = tB(tw, e),
            i = 'AM';
        return t <= 0 && ((i = 'AA'), (t += tG)), new eZ(this, i, t, n, r);
    }
    toJulianDay(e) {
        let t = e.year;
        return 'AA' === e.era && (t -= tG), tk(tw, t, e.month, e.day);
    }
    getDaysInMonth(e) {
        return tZ(e.year, e.month);
    }
    getMonthsInYear() {
        return 13;
    }
    getDaysInYear(e) {
        return 365 + tF(e.year);
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
class tH extends tV {
    fromJulianDay(e) {
        let [t, n, r] = tB(tw, e);
        return new eZ(this, 'AA', (t += tG), n, r);
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
class tY extends tV {
    fromJulianDay(e) {
        let [t, n, r] = tB(tx, e),
            i = 'CE';
        return t <= 0 && ((i = 'BCE'), (t = 1 - t)), new eZ(this, i, t, n, r);
    }
    toJulianDay(e) {
        let t = e.year;
        return 'BCE' === e.era && (t = 1 - t), tk(tx, t, e.month, e.day);
    }
    getDaysInMonth(e) {
        let t = e.year;
        return 'BCE' === e.era && (t = 1 - t), tZ(t, e.month);
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
function tj(e) {
    switch (e) {
        case 'buddhist':
            return new e3();
        case 'ethiopic':
            return new tV();
        case 'ethioaa':
            return new tH();
        case 'coptic':
            return new tY();
        case 'hebrew':
            return new tU();
        case 'indian':
            return new to();
        case 'islamic-civil':
            return new th();
        case 'islamic-tbla':
            return new tp();
        case 'islamic-umalqura':
            return new tA();
        case 'japanese':
            return new e0();
        case 'persian':
            return new tr();
        case 'roc':
            return new e8();
        default:
            return new E();
    }
}
let tW = new Map(),
    tK = null;
function tz(e, t = {}) {
    if ('boolean' == typeof t.hour12 && tQ()) {
        let n = tK[String((t = { ...t }).hour12)][e.split('-')[0]],
            r = t.hour12 ? 'h12' : 'h23';
        (t.hourCycle = null != n ? n : r), delete t.hour12;
    }
    let n =
        e +
        (t
            ? Object.entries(t)
                  .sort((e, t) => (e[0] < t[0] ? -1 : 1))
                  .join()
            : '');
    if (tW.has(n)) return tW.get(n);
    let r = new Intl.DateTimeFormat(e, t);
    return tW.set(n, r), r;
}
let tq = null;
function tQ() {
    return (
        null == tq &&
            (tq =
                '24' ===
                new Intl.DateTimeFormat('en-US', {
                    hour: 'numeric',
                    hour12: !1
                }).format(new Date(2020, 2, 3, 0))),
        tq
    );
}
let tX = null;
function t$() {
    return (
        null == tX &&
            (tX =
                'h12' ===
                new Intl.DateTimeFormat('fr', {
                    hour: 'numeric',
                    hour12: !1
                }).resolvedOptions().hourCycle),
        tX
    );
}
function tJ(e, t) {
    if (!t.timeStyle && !t.hour) return;
    e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, '');
    let n = tz((e += (e.includes('-u-') ? '' : '-u') + '-nu-latn'), {
            ...t,
            timeZone: void 0
        }),
        r = parseInt(n.formatToParts(new Date(2020, 2, 3, 0)).find((e) => 'hour' === e.type).value, 10),
        i = parseInt(n.formatToParts(new Date(2020, 2, 3, 23)).find((e) => 'hour' === e.type).value, 10);
    if (0 === r && 23 === i) return 'h23';
    if (24 === r && 23 === i) return 'h24';
    if (0 === r && 11 === i) return 'h11';
    if (12 === r && 11 === i) return 'h12';
    throw Error('Unexpected hour cycle result');
}
