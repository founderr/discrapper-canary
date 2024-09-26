let r, i;
n.d(t, {
    CN: function () {
        return t$;
    },
    IO: function () {
        return ee;
    },
    IQ: function () {
        return E;
    },
    KC: function () {
        return h;
    },
    Lg: function () {
        return g;
    },
    Mb: function () {
        return x;
    },
    Mw: function () {
        return en;
    },
    N9: function () {
        return p;
    },
    Nm: function () {
        return R;
    },
    PA: function () {
        return b;
    },
    Vf: function () {
        return C;
    },
    WG: function () {
        return J;
    },
    ZB: function () {
        return et;
    },
    aw: function () {
        return eK;
    },
    em: function () {
        return y;
    },
    fW: function () {
        return er;
    },
    iT: function () {
        return O;
    },
    ji: function () {
        return I;
    },
    jx: function () {
        return L;
    },
    l7: function () {
        return G;
    },
    qp: function () {
        return eq;
    },
    vV: function () {
        return M;
    },
    zJ: function () {
        return D;
    },
    zO: function () {
        return T;
    },
    zk: function () {
        return m;
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
        return new eK(f, h, I, T);
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
    return (t = en(t, e.calendar)), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function p(e, t) {
    return e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function m(e, t) {
    return h(e, g(t));
}
function I(e, t) {
    let n = Math.ceil(e.calendar.toJulianDay(e) + 1 - w(t)) % 7;
    return n < 0 && (n += 7), n;
}
function T(e) {
    return X(Date.now(), e);
}
function g(e) {
    return J(T(e));
}
function S(e, t) {
    return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function A(e, t) {
    return v(e) - v(t);
}
function v(e) {
    return 3600000 * e.hour + 60000 * e.minute + 1000 * e.second + e.millisecond;
}
let N = null;
function O() {
    return null == N && (N = new Intl.DateTimeFormat().resolvedOptions().timeZone), N;
}
function R(e) {
    return e.subtract({ days: e.day - 1 });
}
function C(e) {
    return e.add({ days: e.calendar.getDaysInMonth(e) - e.day });
}
function y(e) {
    return R(e.subtract({ months: e.month - 1 }));
}
function L(e) {
    return e.calendar.getMinimumMonthInYear ? e.calendar.getMinimumMonthInYear(e) : 1;
}
function b(e) {
    return e.calendar.getMinimumDayInMonth ? e.calendar.getMinimumDayInMonth(e) : 1;
}
function D(e, t) {
    let n = I(e, t);
    return e.subtract({ days: n });
}
function M(e, t) {
    return D(e, t).add({ days: 6 });
}
let P = new Map();
function U(e) {
    if (Intl.Locale) {
        let t = P.get(e);
        return !t && (t = new Intl.Locale(e).maximize().region) && P.set(e, t), t;
    }
    let t = e.split('-')[1];
    return 'u' === t ? void 0 : t;
}
function w(e) {
    let t = U(e);
    return (t && f[t]) || 0;
}
function x(e, t) {
    return e && t ? (0 >= e.compare(t) ? e : t) : e || t;
}
function G(e, t) {
    return e && t ? (e.compare(t) >= 0 ? e : t) : e || t;
}
let k = null;
function B(e, t) {
    let n = Math.ceil(e.calendar.toJulianDay(e) + 1) % 7;
    n < 0 && (n += 7);
    let [r, i] = k[U(t)] || [6, 0];
    return n === r || n === i;
}
function F(e) {
    return Z(c((e = en(e, new E())).era, e.year), e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function Z(e, t, n, r, i, a, o) {
    let s = new Date();
    return s.setUTCHours(r, i, a, o), s.setUTCFullYear(e, t - 1, n), s.getTime();
}
function V(e, t) {
    if ('UTC' === t) return 0;
    if (e > 0 && t === O()) return -60000 * new Date(e).getTimezoneOffset();
    let { year: n, month: r, day: i, hour: a, minute: o, second: s } = Y(e, t);
    return Z(n, r, i, a, o, s, 0) - 1000 * Math.floor(e / 1000);
}
let H = new Map();
function Y(e, t) {
    let n = H.get(t);
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
        H.set(t, n));
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
let j = 86400000;
function W(e, t) {
    let n = F(e),
        r = n - V(n - j, t),
        i = n - V(n + j, t);
    return K(e, t, r, i);
}
function K(e, t, n, r) {
    return (n === r ? [n] : [n, r]).filter((n) => z(e, t, n));
}
function z(e, t, n) {
    let r = Y(n, t);
    return e.year === r.year && e.month === r.month && e.day === r.day && e.hour === r.hour && e.minute === r.minute && e.second === r.second;
}
function q(e, t, n = 'compatible') {
    let r = ee(e);
    if ('UTC' === t) return F(r);
    if (t === O() && 'compatible' === n) {
        r = en(r, new E());
        let e = new Date(),
            t = c(r.era, r.year);
        return e.setFullYear(t, r.month - 1, r.day), e.setHours(r.hour, r.minute, r.second, r.millisecond), e.getTime();
    }
    let i = F(r),
        a = V(i - j, t),
        o = V(i + j, t),
        s = K(r, t, i - a, i - o);
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
function Q(e, t, n = 'compatible') {
    return new Date(q(e, t, n));
}
function X(e, t) {
    let n = V(e, t),
        r = new Date(e + n);
    return new eJ(r.getUTCFullYear(), r.getUTCMonth() + 1, r.getUTCDate(), t, n, r.getUTCHours(), r.getUTCMinutes(), r.getUTCSeconds(), r.getUTCMilliseconds());
}
function $(e, t) {
    return X(e.getTime(), t);
}
function J(e) {
    return new eK(e.calendar, e.era, e.year, e.month, e.day);
}
function ee(e, t) {
    let n = 0,
        r = 0,
        i = 0,
        a = 0;
    if ('timeZone' in e) ({ hour: n, minute: r, second: i, millisecond: a } = e);
    else if ('hour' in e && !t) return e;
    return t && ({ hour: n, minute: r, second: i, millisecond: a } = t), new eX(e.calendar, e.era, e.year, e.month, e.day, n, r, i, a);
}
function et(e) {
    return new eq(e.hour, e.minute, e.second, e.millisecond);
}
function en(e, t) {
    if (e.calendar.identifier === t.identifier) return e;
    let n = t.fromJulianDay(e.calendar.toJulianDay(e)),
        r = e.copy();
    return (r.calendar = t), (r.era = n.era), (r.year = n.year), (r.month = n.month), (r.day = n.day), e_(r), r;
}
function er(e, t, n) {
    if (e instanceof eJ) return e.timeZone === t ? e : ea(e, t);
    return X(q(e, t, n), t);
}
function ei(e) {
    return new Date(F(e) - e.offset);
}
function ea(e, t) {
    return en(X(F(e) - e.offset, t), e.calendar);
}
let eo = 3600000;
function es(e, t) {
    let n = e.copy(),
        r = 'hour' in n ? eg(n, t) : 0;
    el(n, t.years || 0), n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e), (n.month += t.months || 0), eu(n), ed(n), (n.day += 7 * (t.weeks || 0)), (n.day += t.days || 0), (n.day += r), ec(n), n.calendar.balanceDate && n.calendar.balanceDate(n), n.year < 1 && ((n.year = 1), (n.month = 1), (n.day = 1));
    let i = n.calendar.getYearsInEra(n);
    if (n.year > i) {
        var a, o;
        let e = null === (a = (o = n.calendar).isInverseEra) || void 0 === a ? void 0 : a.call(o, n);
        (n.year = i), (n.month = e ? 1 : n.calendar.getMonthsInYear(n)), (n.day = e ? 1 : n.calendar.getDaysInMonth(n));
    }
    n.month < 1 && ((n.month = 1), (n.day = 1));
    let s = n.calendar.getMonthsInYear(n);
    return n.month > s && ((n.month = s), (n.day = n.calendar.getDaysInMonth(n))), (n.day = Math.max(1, Math.min(n.calendar.getDaysInMonth(n), n.day))), n;
}
function el(e, t) {
    var n, r;
    (null === (n = (r = e.calendar).isInverseEra) || void 0 === n ? void 0 : n.call(r, e)) && (t = -t), (e.year += t);
}
function eu(e) {
    for (; e.month < 1; ) el(e, -1), (e.month += e.calendar.getMonthsInYear(e));
    let t = 0;
    for (; e.month > (t = e.calendar.getMonthsInYear(e)); ) (e.month -= t), el(e, 1);
}
function ec(e) {
    for (; e.day < 1; ) e.month--, eu(e), (e.day += e.calendar.getDaysInMonth(e));
    for (; e.day > e.calendar.getDaysInMonth(e); ) (e.day -= e.calendar.getDaysInMonth(e)), e.month++, eu(e);
}
function ed(e) {
    (e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month))), (e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day)));
}
function e_(e) {
    e.calendar.constrainDate && e.calendar.constrainDate(e), (e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year))), ed(e);
}
function eE(e) {
    let t = {};
    for (let n in e) 'number' == typeof e[n] && (t[n] = -e[n]);
    return t;
}
function ef(e, t) {
    return es(e, eE(t));
}
function eh(e, t) {
    let n = e.copy();
    return null != t.era && (n.era = t.era), null != t.year && (n.year = t.year), null != t.month && (n.month = t.month), null != t.day && (n.day = t.day), e_(n), n;
}
function ep(e, t) {
    let n = e.copy();
    return null != t.hour && (n.hour = t.hour), null != t.minute && (n.minute = t.minute), null != t.second && (n.second = t.second), null != t.millisecond && (n.millisecond = t.millisecond), eI(n), n;
}
function em(e) {
    (e.second += Math.floor(e.millisecond / 1000)), (e.millisecond = eT(e.millisecond, 1000)), (e.minute += Math.floor(e.second / 60)), (e.second = eT(e.second, 60)), (e.hour += Math.floor(e.minute / 60)), (e.minute = eT(e.minute, 60));
    let t = Math.floor(e.hour / 24);
    return (e.hour = eT(e.hour, 24)), t;
}
function eI(e) {
    (e.millisecond = Math.max(0, Math.min(e.millisecond, 1000))), (e.second = Math.max(0, Math.min(e.second, 59))), (e.minute = Math.max(0, Math.min(e.minute, 59))), (e.hour = Math.max(0, Math.min(e.hour, 23)));
}
function eT(e, t) {
    let n = e % t;
    return n < 0 && (n += t), n;
}
function eg(e, t) {
    return (e.hour += t.hours || 0), (e.minute += t.minutes || 0), (e.second += t.seconds || 0), (e.millisecond += t.milliseconds || 0), em(e);
}
function eS(e, t) {
    let n = e.copy();
    return eg(n, t), n;
}
function eA(e, t) {
    return eS(e, eE(t));
}
function ev(e, t, n, r) {
    let i = e.copy();
    switch (t) {
        case 'era': {
            let t = e.calendar.getEras(),
                a = t.indexOf(e.era);
            if (a < 0) throw Error('Invalid era: ' + e.era);
            (a = eO(a, n, 0, t.length - 1, null == r ? void 0 : r.round)), (i.era = t[a]), e_(i);
            break;
        }
        case 'year':
            var a, o;
            (null === (a = (o = i.calendar).isInverseEra) || void 0 === a ? void 0 : a.call(o, i)) && (n = -n), (i.year = eO(e.year, n, -1 / 0, 9999, null == r ? void 0 : r.round)), i.year === -1 / 0 && (i.year = 1), i.calendar.balanceYearMonth && i.calendar.balanceYearMonth(i, e);
            break;
        case 'month':
            i.month = eO(e.month, n, 1, e.calendar.getMonthsInYear(e), null == r ? void 0 : r.round);
            break;
        case 'day':
            i.day = eO(e.day, n, 1, e.calendar.getDaysInMonth(e), null == r ? void 0 : r.round);
            break;
        default:
            throw Error('Unsupported field ' + t);
    }
    return e.calendar.balanceDate && e.calendar.balanceDate(i), e_(i), i;
}
function eN(e, t, n, r) {
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
            i.hour = eO(t, n, a, o, null == r ? void 0 : r.round);
            break;
        }
        case 'minute':
            i.minute = eO(e.minute, n, 0, 59, null == r ? void 0 : r.round);
            break;
        case 'second':
            i.second = eO(e.second, n, 0, 59, null == r ? void 0 : r.round);
            break;
        case 'millisecond':
            i.millisecond = eO(e.millisecond, n, 0, 999, null == r ? void 0 : r.round);
            break;
        default:
            throw Error('Unsupported field ' + t);
    }
    return i;
}
function eO(e, t, n, r, i = !1) {
    if (i) {
        (e += Math.sign(t)) < n && (e = r);
        let i = Math.abs(t);
        (e = t > 0 ? Math.ceil(e / i) * i : Math.floor(e / i) * i) > r && (e = n);
    } else (e += t) < n ? (e = r - (n - e - 1)) : e > r && (e = n + (e - r - 1));
    return e;
}
function eR(e, t) {
    let n;
    if ((null != t.years && 0 !== t.years) || (null != t.months && 0 !== t.months) || (null != t.weeks && 0 !== t.weeks) || (null != t.days && 0 !== t.days)) {
        let r;
        n = q(
            es(ee(e), {
                years: t.years,
                months: t.months,
                weeks: t.weeks,
                days: t.days
            }),
            e.timeZone
        );
    } else n = F(e) - e.offset;
    return en(X((n += (t.milliseconds || 0) + 1000 * (t.seconds || 0) + 60000 * (t.minutes || 0) + 3600000 * (t.hours || 0)), e.timeZone), e.calendar);
}
function eC(e, t) {
    return eR(e, eE(t));
}
function ey(e, t, n, r) {
    switch (t) {
        case 'hour': {
            let t = 0,
                i = 23;
            if ((null == r ? void 0 : r.hourCycle) === 12) {
                let n = e.hour >= 12;
                (t = n ? 12 : 0), (i = n ? 23 : 11);
            }
            let a = ee(e),
                o = en(ep(a, { hour: t }), new E()),
                s = [q(o, e.timeZone, 'earlier'), q(o, e.timeZone, 'later')].filter((t) => X(t, e.timeZone).day === o.day)[0],
                l = en(ep(a, { hour: i }), new E()),
                u = [q(l, e.timeZone, 'earlier'), q(l, e.timeZone, 'later')].filter((t) => X(t, e.timeZone).day === l.day).pop(),
                c = F(e) - e.offset,
                d = Math.floor(c / eo),
                _ = c % eo;
            return en(X((c = eO(d, n, Math.floor(s / eo), Math.floor(u / eo), null == r ? void 0 : r.round) * eo + _), e.timeZone), e.calendar);
        }
        case 'minute':
        case 'second':
        case 'millisecond':
            return eN(e, t, n, r);
        case 'era':
        case 'year':
        case 'month':
        case 'day':
            return en(X(q(ev(ee(e), t, n, r), e.timeZone), e.timeZone), e.calendar);
        default:
            throw Error('Unsupported field ' + t);
    }
}
function eL(e, t, n) {
    let r = ee(e),
        i = ep(eh(r, t), t);
    return 0 === i.compare(r) ? e : en(X(q(i, e.timeZone, n), e.timeZone), e.calendar);
}
let eb = /^(\d{2})(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/,
    eD = /^(\d{4})-(\d{2})-(\d{2})$/,
    eM = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/,
    eP = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:([+-]\d{2})(?::?(\d{2}))?)?\[(.*?)\]$/,
    eU = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:(?:([+-]\d{2})(?::?(\d{2}))?)|Z)$/,
    ew = /^((?<negative>-)|\+)?P((?<years>\d*)Y)?((?<months>\d*)M)?((?<weeks>\d*)W)?((?<days>\d*)D)?((?<time>T)((?<hours>\d*[.,]?\d{1,9})H)?((?<minutes>\d*[.,]?\d{1,9})M)?((?<seconds>\d*[.,]?\d{1,9})S)?)?$/,
    ex = ['hours', 'minutes', 'seconds'],
    eG = ['years', 'months', 'weeks', 'days', ...ex];
function ek(e, t) {
    var n;
    let r = e.match(eU);
    if (!r) throw Error('Invalid ISO 8601 date time string: ' + e);
    let i = new eJ(eB(r[1], 1, 9999), eB(r[2], 1, 12), 1, t, 0, r[4] ? eB(r[4], 0, 23) : 0, r[5] ? eB(r[5], 0, 59) : 0, r[6] ? eB(r[6], 0, 59) : 0, r[7] ? 1000 * eB(r[7], 0, 1 / 0) : 0);
    return (i.day = eB(r[3], 0, i.calendar.getDaysInMonth(i))), r[8] && (i.offset = 3600000 * eB(r[8], -23, 23) + 60000 * eB(null !== (n = r[9]) && void 0 !== n ? n : '0', 0, 59)), ea(i, t);
}
function eB(e, t, n) {
    let r = Number(e);
    if (r < t || r > n) throw RangeError(`Value out of range: ${t} <= ${r} <= ${n}`);
    return r;
}
function eF(e) {
    return `${String(e.hour).padStart(2, '0')}:${String(e.minute).padStart(2, '0')}:${String(e.second).padStart(2, '0')}${e.millisecond ? String(e.millisecond / 1000).slice(1) : ''}`;
}
function eZ(e) {
    let t = en(e, new E());
    return `${String(t.year).padStart(4, '0')}-${String(t.month).padStart(2, '0')}-${String(t.day).padStart(2, '0')}`;
}
function eV(e) {
    return `${eZ(e)}T${eF(e)}`;
}
function eH(e) {
    let t = 0 > Math.sign(e) ? '-' : '+',
        n = Math.floor((e = Math.abs(e)) / 3600000),
        r = (e % 3600000) / 60000;
    return `${t}${String(n).padStart(2, '0')}:${String(r).padStart(2, '0')}`;
}
function eY(e) {
    return `${eV(e)}${eH(e.offset)}[${e.timeZone}]`;
}
function ej(e) {
    let t,
        n = 'object' == typeof e[0] ? e.shift() : new E();
    if ('string' == typeof e[0]) t = e.shift();
    else {
        let e = n.getEras();
        t = e[e.length - 1];
    }
    return [n, t, e.shift(), e.shift(), e.shift()];
}
var eW = new WeakMap();
class eK {
    copy() {
        return this.era ? new eK(this.calendar, this.era, this.year, this.month, this.day) : new eK(this.calendar, this.year, this.month, this.day);
    }
    add(e) {
        return es(this, e);
    }
    subtract(e) {
        return ef(this, e);
    }
    set(e) {
        return eh(this, e);
    }
    cycle(e, t, n) {
        return ev(this, e, t, n);
    }
    toDate(e) {
        return Q(this, e);
    }
    toString() {
        return eZ(this);
    }
    compare(e) {
        return S(this, e);
    }
    constructor(...e) {
        (0, a._)(this, eW, {
            writable: !0,
            value: void 0
        });
        let [t, n, r, i, o] = ej(e);
        (this.calendar = t), (this.era = n), (this.year = r), (this.month = i), (this.day = o), e_(this);
    }
}
var ez = new WeakMap();
class eq {
    copy() {
        return new eq(this.hour, this.minute, this.second, this.millisecond);
    }
    add(e) {
        return eS(this, e);
    }
    subtract(e) {
        return eA(this, e);
    }
    set(e) {
        return ep(this, e);
    }
    cycle(e, t, n) {
        return eN(this, e, t, n);
    }
    toString() {
        return eF(this);
    }
    compare(e) {
        return A(this, e);
    }
    constructor(e = 0, t = 0, n = 0, r = 0) {
        (0, a._)(this, ez, {
            writable: !0,
            value: void 0
        }),
            (this.hour = e),
            (this.minute = t),
            (this.second = n),
            (this.millisecond = r),
            eI(this);
    }
}
var eQ = new WeakMap();
class eX {
    copy() {
        return this.era ? new eX(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new eX(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
    }
    add(e) {
        return es(this, e);
    }
    subtract(e) {
        return ef(this, e);
    }
    set(e) {
        return eh(ep(this, e), e);
    }
    cycle(e, t, n) {
        switch (e) {
            case 'era':
            case 'year':
            case 'month':
            case 'day':
                return ev(this, e, t, n);
            default:
                return eN(this, e, t, n);
        }
    }
    toDate(e, t) {
        return Q(this, e, t);
    }
    toString() {
        return eV(this);
    }
    compare(e) {
        let t = S(this, e);
        return 0 === t ? A(this, ee(e)) : t;
    }
    constructor(...e) {
        (0, a._)(this, eQ, {
            writable: !0,
            value: void 0
        });
        let [t, n, r, i, o] = ej(e);
        (this.calendar = t), (this.era = n), (this.year = r), (this.month = i), (this.day = o), (this.hour = e.shift() || 0), (this.minute = e.shift() || 0), (this.second = e.shift() || 0), (this.millisecond = e.shift() || 0), e_(this);
    }
}
var e$ = new WeakMap();
class eJ {
    copy() {
        return this.era ? new eJ(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new eJ(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
    }
    add(e) {
        return eR(this, e);
    }
    subtract(e) {
        return eC(this, e);
    }
    set(e, t) {
        return eL(this, e, t);
    }
    cycle(e, t, n) {
        return ey(this, e, t, n);
    }
    toDate() {
        return ei(this);
    }
    toString() {
        return eY(this);
    }
    toAbsoluteString() {
        return this.toDate().toISOString();
    }
    compare(e) {
        return this.toDate().getTime() - er(e, this.timeZone).toDate().getTime();
    }
    constructor(...e) {
        (0, a._)(this, e$, {
            writable: !0,
            value: void 0
        });
        let [t, n, r, i, o] = ej(e),
            s = e.shift(),
            l = e.shift();
        (this.calendar = t), (this.era = n), (this.year = r), (this.month = i), (this.day = o), (this.timeZone = s), (this.offset = l), (this.hour = e.shift() || 0), (this.minute = e.shift() || 0), (this.second = e.shift() || 0), (this.millisecond = e.shift() || 0), e_(this);
    }
}
let e0 = [
        [1868, 9, 8],
        [1912, 7, 30],
        [1926, 12, 25],
        [1989, 1, 8],
        [2019, 5, 1]
    ],
    e1 = [
        [1912, 7, 29],
        [1926, 12, 24],
        [1989, 1, 7],
        [2019, 4, 30]
    ],
    e2 = [1867, 1911, 1925, 1988, 2018],
    e3 = ['meiji', 'taisho', 'showa', 'heisei', 'reiwa'];
function e4(e) {
    let t = e0.findIndex(([t, n, r]) => !!(e.year < t) || (e.year === t && !!(e.month < n)) || (e.year === t && e.month === n && !!(e.day < r)) || !1);
    return -1 === t ? e0.length - 1 : 0 === t ? 0 : t - 1;
}
function e5(e) {
    let t = e2[e3.indexOf(e.era)];
    if (!t) throw Error('Unknown era: ' + e.era);
    return new eK(e.year + t, e.month, e.day);
}
class e6 extends E {
    fromJulianDay(e) {
        let t = super.fromJulianDay(e),
            n = e4(t);
        return new eK(this, e3[n], t.year - e2[n], t.month, t.day);
    }
    toJulianDay(e) {
        return super.toJulianDay(e5(e));
    }
    balanceDate(e) {
        let t = e5(e),
            n = e4(t);
        e3[n] !== e.era && ((e.era = e3[n]), (e.year = t.year - e2[n])), this.constrainDate(e);
    }
    constrainDate(e) {
        let t = e3.indexOf(e.era),
            n = e1[t];
        if (null != n) {
            let [r, i, a] = n,
                o = r - e2[t];
            (e.year = Math.max(1, Math.min(o, e.year))), e.year === o && ((e.month = Math.min(i, e.month)), e.month === i && (e.day = Math.min(a, e.day)));
        }
        if (1 === e.year && t >= 0) {
            let [, n, r] = e0[t];
            (e.month = Math.max(n, e.month)), e.month === n && (e.day = Math.max(r, e.day));
        }
    }
    getEras() {
        return e3;
    }
    getYearsInEra(e) {
        let t = e3.indexOf(e.era),
            n = e0[t],
            r = e0[t + 1];
        if (null == r) return 9999 - n[0] + 1;
        let i = r[0] - n[0];
        return (e.month < r[1] || (e.month === r[1] && e.day < r[2])) && i++, i;
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(e5(e));
    }
    getMinimumMonthInYear(e) {
        let t = e7(e);
        return t ? t[1] : 1;
    }
    getMinimumDayInMonth(e) {
        let t = e7(e);
        return t && e.month === t[1] ? t[2] : 1;
    }
    constructor(...e) {
        super(...e), (this.identifier = 'japanese');
    }
}
function e7(e) {
    if (1 === e.year) return e0[e3.indexOf(e.era)];
}
let e8 = -543;
class e9 extends E {
    fromJulianDay(e) {
        let t = super.fromJulianDay(e);
        return new eK(this, c(t.era, t.year) - e8, t.month, t.day);
    }
    toJulianDay(e) {
        return super.toJulianDay(te(e));
    }
    getEras() {
        return ['BE'];
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(te(e));
    }
    balanceDate() {}
    constructor(...e) {
        super(...e), (this.identifier = 'buddhist');
    }
}
function te(e) {
    let [t, n] = d(e.year + e8);
    return new eK(t, n, e.month, e.day);
}
let tt = 1911;
function tn(e) {
    return 'minguo' === e.era ? e.year + tt : 1 - e.year + tt;
}
function tr(e) {
    let t = e - tt;
    return t > 0 ? ['minguo', t] : ['before_minguo', 1 - t];
}
class ti extends E {
    fromJulianDay(e) {
        let t = super.fromJulianDay(e),
            [n, r] = tr(c(t.era, t.year));
        return new eK(this, n, r, t.month, t.day);
    }
    toJulianDay(e) {
        return super.toJulianDay(ta(e));
    }
    getEras() {
        return ['before_minguo', 'minguo'];
    }
    balanceDate(e) {
        let [t, n] = tr(tn(e));
        (e.era = t), (e.year = n);
    }
    isInverseEra(e) {
        return 'before_minguo' === e.era;
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(ta(e));
    }
    getYearsInEra(e) {
        return 'before_minguo' === e.era ? 9999 : 9999 - tt;
    }
    constructor(...e) {
        super(...e), (this.identifier = 'roc');
    }
}
function ta(e) {
    let [t, n] = d(tn(e));
    return new eK(t, n, e.month, e.day);
}
let to = 1948321;
function ts(e) {
    let t = o(e > 0 ? e - 474 : e - 473, 2820) + 474;
    return 31 > o((t + 38) * 31, 128);
}
function tl(e, t, n) {
    let r = e > 0 ? e - 474 : e - 473,
        i = o(r, 2820) + 474;
    return to - 1 + 1029983 * Math.floor(r / 2820) + 365 * (i - 1) + Math.floor((31 * i - 5) / 128) + (t <= 7 ? 31 * (t - 1) : 30 * (t - 1) + 6) + n;
}
class tu {
    fromJulianDay(e) {
        let t = e - tl(475, 1, 1),
            n = Math.floor(t / 1029983),
            r = o(t, 1029983),
            i = 474 + 2820 * n + (1029982 === r ? 2820 : Math.floor((128 * r + 46878) / 46751));
        i <= 0 && i--;
        let a = e - tl(i, 1, 1) + 1,
            s = a <= 186 ? Math.ceil(a / 31) : Math.ceil((a - 6) / 31),
            l = e - tl(i, s, 1) + 1;
        return new eK(this, i, s, l);
    }
    toJulianDay(e) {
        return tl(e.year, e.month, e.day);
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInMonth(e) {
        return e.month <= 6 ? 31 : e.month <= 11 ? 30 : ts(e.year) ? 30 : 29;
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
let tc = 78,
    td = 80;
class t_ extends E {
    fromJulianDay(e) {
        let t,
            n,
            r,
            i = super.fromJulianDay(e),
            a = i.year - tc,
            o = e - l(i.era, i.year, 1, 1);
        if ((o < td ? (a--, (o += (t = u(i.year - 1) ? 31 : 30) + 155 + 90 + 10)) : ((t = u(i.year) ? 31 : 30), (o -= td)), o < t)) (n = 1), (r = o + 1);
        else {
            let e = o - t;
            e < 155 ? ((n = Math.floor(e / 31) + 2), (r = (e % 31) + 1)) : ((e -= 155), (n = Math.floor(e / 30) + 7), (r = (e % 30) + 1));
        }
        return new eK(this, a, n, r);
    }
    toJulianDay(e) {
        let t, n;
        let [r, i] = d(e.year + tc);
        return (u(i) ? ((t = 31), (n = l(r, i, 3, 21))) : ((t = 30), (n = l(r, i, 3, 22))), 1 === e.month) ? n + e.day - 1 : ((n += t + 31 * Math.min(e.month - 2, 5)), e.month >= 8 && (n += (e.month - 7) * 30), (n += e.day - 1));
    }
    getDaysInMonth(e) {
        return (1 === e.month && u(e.year + tc)) || (e.month >= 2 && e.month <= 6) ? 31 : 30;
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
let tE = 1948440,
    tf = 1948439,
    th = 1300,
    tp = 1600,
    tm = 460322;
function tI(e, t, n, r) {
    return r + Math.ceil(29.5 * (n - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1;
}
function tT(e, t, n) {
    let r = Math.floor((30 * (n - t) + 10646) / 10631),
        i = Math.min(12, Math.ceil((n - (29 + tI(t, r, 1, 1))) / 29.5) + 1),
        a = n - tI(t, r, i, 1) + 1;
    return new eK(e, r, i, a);
}
function tg(e) {
    return (14 + 11 * e) % 30 < 11;
}
class tS {
    fromJulianDay(e) {
        return tT(this, tE, e);
    }
    toJulianDay(e) {
        return tI(tE, e.year, e.month, e.day);
    }
    getDaysInMonth(e) {
        let t = 29 + (e.month % 2);
        return 12 === e.month && tg(e.year) && t++, t;
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInYear(e) {
        return tg(e.year) ? 355 : 354;
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
class tA extends tS {
    fromJulianDay(e) {
        return tT(this, tf, e);
    }
    toJulianDay(e) {
        return tI(tf, e.year, e.month, e.day);
    }
    constructor(...e) {
        super(...e), (this.identifier = 'islamic-tbla');
    }
}
let tv = 'qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=';
function tN(e) {
    return tm + i[e - th];
}
function tO(e, t) {
    let n = 1 << (11 - (t - 1));
    return (r[e - th] & n) == 0 ? 29 : 30;
}
function tR(e, t) {
    let n = tN(e);
    for (let r = 1; r < t; r++) n += tO(e, r);
    return n;
}
function tC(e) {
    return i[e + 1 - th] - i[e - th];
}
class ty extends tS {
    fromJulianDay(e) {
        let t = e - tE,
            n = tN(th),
            r = tN(tp);
        if (t < n || t > r) return super.fromJulianDay(e);
        {
            let e = th - 1,
                n = 1,
                r = 1;
            for (; r > 0; ) {
                r = t - tN(++e) + 1;
                let i = tC(e);
                if (r === i) {
                    n = 12;
                    break;
                }
                if (r < i) {
                    let t = tO(e, n);
                    for (n = 1; r > t; ) (r -= t), (t = tO(e, ++n));
                    break;
                }
            }
            return new eK(this, e, n, t - tR(e, n) + 1);
        }
    }
    toJulianDay(e) {
        return e.year < th || e.year > tp ? super.toJulianDay(e) : tE + tR(e.year, e.month) + (e.day - 1);
    }
    getDaysInMonth(e) {
        return e.year < th || e.year > tp ? super.getDaysInMonth(e) : tO(e.year, e.month);
    }
    getDaysInYear(e) {
        return e.year < th || e.year > tp ? super.getDaysInYear(e) : tC(e.year);
    }
    constructor() {
        if ((super(), (this.identifier = 'islamic-umalqura'), !r && (r = new Uint16Array(Uint8Array.from(atob(tv), (e) => e.charCodeAt(0)).buffer)), !i)) {
            i = new Uint32Array(tp - th + 1);
            let e = 0;
            for (let t = th; t <= tp; t++) {
                i[t - th] = e;
                for (let n = 1; n <= 12; n++) e += tO(t, n);
            }
        }
    }
}
let tL = 347997,
    tb = 1080,
    tD = 25920,
    tM = null;
function tP(e) {
    return 7 > o(7 * e + 1, 19);
}
function tU(e) {
    let t = Math.floor((235 * e - 234) / 19),
        n = 12084 + 13753 * t,
        r = 29 * t + Math.floor(n / 25920);
    return 3 > o(3 * (r + 1), 7) && (r += 1), r;
}
function tw(e) {
    let t = tU(e - 1),
        n = tU(e);
    return tU(e + 1) - n == 356 ? 2 : n - t == 382 ? 1 : 0;
}
function tx(e) {
    return tU(e) + tw(e);
}
function tG(e) {
    return tx(e + 1) - tx(e);
}
function tk(e) {
    let t = tG(e);
    switch ((t > 380 && (t -= 30), t)) {
        case 353:
            return 0;
        case 354:
            return 1;
        case 355:
            return 2;
    }
}
function tB(e, t) {
    if ((t >= 6 && !tP(e) && t++, 4 === t || 7 === t || 9 === t || 11 === t || 13 === t)) return 29;
    let n = tk(e);
    return 2 === t ? (2 === n ? 30 : 29) : 3 === t ? (0 === n ? 29 : 30) : 6 === t ? (tP(e) ? 30 : 0) : 30;
}
class tF {
    fromJulianDay(e) {
        let t = e - tL,
            n = Math.floor((((t * tD) / tM) * 19 + 234) / 235) + 1,
            r = tx(n),
            i = Math.floor(t - r);
        for (; i < 1; ) i = Math.floor(t - (r = tx(--n)));
        let a = 1,
            o = 0;
        for (; o < i; ) (o += tB(n, a)), a++;
        let s = i - (o -= tB(n, --a));
        return new eK(this, n, a, s);
    }
    toJulianDay(e) {
        let t = tx(e.year);
        for (let n = 1; n < e.month; n++) t += tB(e.year, n);
        return t + e.day + tL;
    }
    getDaysInMonth(e) {
        return tB(e.year, e.month);
    }
    getMonthsInYear(e) {
        return tP(e.year) ? 13 : 12;
    }
    getDaysInYear(e) {
        return tG(e.year);
    }
    getYearsInEra() {
        return 9999;
    }
    getEras() {
        return ['AM'];
    }
    balanceYearMonth(e, t) {
        t.year !== e.year && (tP(t.year) && !tP(e.year) && t.month > 6 ? e.month-- : !tP(t.year) && tP(e.year) && t.month > 6 && e.month++);
    }
    constructor() {
        this.identifier = 'hebrew';
    }
}
let tZ = 1723856,
    tV = 1824665,
    tH = 5500;
function tY(e, t, n, r) {
    return e + 365 * t + Math.floor(t / 4) + 30 * (n - 1) + r - 1;
}
function tj(e, t) {
    let n = Math.floor((4 * (t - e)) / 1461),
        r = 1 + Math.floor((t - tY(e, n, 1, 1)) / 30),
        i = t + 1 - tY(e, n, r, 1);
    return [n, r, i];
}
function tW(e) {
    return Math.floor((e % 4) / 3);
}
function tK(e, t) {
    return t % 13 != 0 ? 30 : tW(e) + 5;
}
class tz {
    fromJulianDay(e) {
        let [t, n, r] = tj(tZ, e),
            i = 'AM';
        return t <= 0 && ((i = 'AA'), (t += tH)), new eK(this, i, t, n, r);
    }
    toJulianDay(e) {
        let t = e.year;
        return 'AA' === e.era && (t -= tH), tY(tZ, t, e.month, e.day);
    }
    getDaysInMonth(e) {
        return tK(e.year, e.month);
    }
    getMonthsInYear() {
        return 13;
    }
    getDaysInYear(e) {
        return 365 + tW(e.year);
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
class tq extends tz {
    fromJulianDay(e) {
        let [t, n, r] = tj(tZ, e);
        return new eK(this, 'AA', (t += tH), n, r);
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
class tQ extends tz {
    fromJulianDay(e) {
        let [t, n, r] = tj(tV, e),
            i = 'CE';
        return t <= 0 && ((i = 'BCE'), (t = 1 - t)), new eK(this, i, t, n, r);
    }
    toJulianDay(e) {
        let t = e.year;
        return 'BCE' === e.era && (t = 1 - t), tY(tV, t, e.month, e.day);
    }
    getDaysInMonth(e) {
        let t = e.year;
        return 'BCE' === e.era && (t = 1 - t), tK(t, e.month);
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
let tX = new Map();
class t$ {
    format(e) {
        return this.formatter.format(e);
    }
    formatToParts(e) {
        return this.formatter.formatToParts(e);
    }
    formatRange(e, t) {
        if ('function' == typeof this.formatter.formatRange) return this.formatter.formatRange(e, t);
        if (t < e) throw RangeError('End date must be >= start date');
        return `${this.formatter.format(e)} \u{2013} ${this.formatter.format(t)}`;
    }
    formatRangeToParts(e, t) {
        if ('function' == typeof this.formatter.formatRangeToParts) return this.formatter.formatRangeToParts(e, t);
        if (t < e) throw RangeError('End date must be >= start date');
        let n = this.formatter.formatToParts(e),
            r = this.formatter.formatToParts(t);
        return [
            ...n.map((e) => ({
                ...e,
                source: 'startRange'
            })),
            {
                type: 'literal',
                value: ' \u2013 ',
                source: 'shared'
            },
            ...r.map((e) => ({
                ...e,
                source: 'endRange'
            }))
        ];
    }
    resolvedOptions() {
        let e = this.formatter.resolvedOptions();
        return t4() && (!this.resolvedHourCycle && (this.resolvedHourCycle = t5(e.locale, this.options)), (e.hourCycle = this.resolvedHourCycle), (e.hour12 = 'h11' === this.resolvedHourCycle || 'h12' === this.resolvedHourCycle)), 'ethiopic-amete-alem' === e.calendar && (e.calendar = 'ethioaa'), e;
    }
    constructor(e, t = {}) {
        (this.formatter = t0(e, t)), (this.options = t);
    }
}
let tJ = {
    true: { ja: 'h11' },
    false: {}
};
function t0(e, t = {}) {
    if ('boolean' == typeof t.hour12 && t2()) {
        let n = tJ[String((t = { ...t }).hour12)][e.split('-')[0]],
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
    if (tX.has(n)) return tX.get(n);
    let r = new Intl.DateTimeFormat(e, t);
    return tX.set(n, r), r;
}
let t1 = null;
function t2() {
    return (
        null == t1 &&
            (t1 =
                '24' ===
                new Intl.DateTimeFormat('en-US', {
                    hour: 'numeric',
                    hour12: !1
                }).format(new Date(2020, 2, 3, 0))),
        t1
    );
}
let t3 = null;
function t4() {
    return (
        null == t3 &&
            (t3 =
                'h12' ===
                new Intl.DateTimeFormat('fr', {
                    hour: 'numeric',
                    hour12: !1
                }).resolvedOptions().hourCycle),
        t3
    );
}
function t5(e, t) {
    if (!t.timeStyle && !t.hour) return;
    e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, '');
    let n = t0((e += (e.includes('-u-') ? '' : '-u') + '-nu-latn'), {
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
