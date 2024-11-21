n.d(t, {
    CN: function () {
        return er;
    },
    KC: function () {
        return d;
    },
    Lg: function () {
        return p;
    },
    Mw: function () {
        return x;
    },
    N9: function () {
        return f;
    },
    Nm: function () {
        return v;
    },
    Vf: function () {
        return b;
    },
    aw: function () {
        return X;
    },
    zJ: function () {
        return I;
    },
    zk: function () {
        return _;
    }
});
var r = n(410914);
function i(e, t) {
    return e - t * Math.floor(e / t);
}
function a(e, t, n, r) {
    let i = (t = o(e, t)) - 1,
        a = -2;
    return n <= 2 ? (a = 0) : s(t) && (a = -1), 1721425 + 365 * i + Math.floor(i / 4) - Math.floor(i / 100) + Math.floor(i / 400) + Math.floor((367 * n - 362) / 12 + a + r);
}
function s(e) {
    return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function o(e, t) {
    return 'BC' === e ? 1 - t : t;
}
let l = {
    standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
};
class u {
    fromJulianDay(e) {
        var t;
        let n,
            r = e - 1721426,
            o = Math.floor(r / 146097),
            l = i(r, 146097),
            u = Math.floor(l / 36524),
            c = i(l, 36524),
            d = Math.floor(c / 1461),
            f = Math.floor(i(c, 1461) / 365);
        let [_, p] = ((n = 'AD'), (t = 400 * o + 100 * u + 4 * d + f + (4 !== u && 4 !== f ? 1 : 0)) <= 0 && ((n = 'BC'), (t = 1 - t)), [n, t]),
            h = e - a(_, p, 1, 1),
            m = 2;
        e < a(_, p, 3, 1) ? (m = 0) : s(p) && (m = 1);
        let g = Math.floor(((h + m) * 12 + 373) / 367),
            E = e - a(_, p, g, 1) + 1;
        return new X(_, p, g, E);
    }
    toJulianDay(e) {
        return a(e.era, e.year, e.month, e.day);
    }
    getDaysInMonth(e) {
        return l[s(e.year) ? 'leapyear' : 'standard'][e.month - 1];
    }
    getMonthsInYear(e) {
        return 12;
    }
    getDaysInYear(e) {
        return s(e.year) ? 366 : 365;
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
let c = {
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
function d(e, t) {
    return (t = x(t, e.calendar)), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function f(e, t) {
    return e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function _(e, t) {
    return d(e, p(t));
}
function p(e) {
    var t;
    return (function (e) {
        return new X(e.calendar, e.era, e.year, e.month, e.day);
    })(((t = e), D(Date.now(), t)));
}
function h(e, t) {
    return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function m(e) {
    return 3600000 * e.hour + 60000 * e.minute + 1000 * e.second + e.millisecond;
}
let g = null;
function E() {
    return null == g && (g = new Intl.DateTimeFormat().resolvedOptions().timeZone), g;
}
function v(e) {
    return e.subtract({ days: e.day - 1 });
}
function b(e) {
    return e.add({ days: e.calendar.getDaysInMonth(e) - e.day });
}
function I(e, t) {
    var n, r;
    let i;
    let a =
        ((n = e),
        (r = t),
        (i =
            Math.ceil(
                n.calendar.toJulianDay(n) +
                    1 -
                    (function (e) {
                        let t = (function (e) {
                            if (Intl.Locale) {
                                let t = T.get(e);
                                return !t && (t = new Intl.Locale(e).maximize().region) && T.set(e, t), t;
                            }
                            let t = e.split('-')[1];
                            return 'u' === t ? void 0 : t;
                        })(e);
                        return (t && c[t]) || 0;
                    })(r)
            ) % 7) < 0 && (i += 7),
        i);
    return e.subtract({ days: a });
}
let T = new Map();
function S(e) {
    return y(o((e = x(e, new u())).era, e.year), e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function y(e, t, n, r, i, a, s) {
    let o = new Date();
    return o.setUTCHours(r, i, a, s), o.setUTCFullYear(e, t - 1, n), o.getTime();
}
function A(e, t) {
    if ('UTC' === t) return 0;
    if (e > 0 && t === E()) return -60000 * new Date(e).getTimezoneOffset();
    let { year: n, month: r, day: i, hour: a, minute: s, second: o } = C(e, t);
    return y(n, r, i, a, s, o, 0) - 1000 * Math.floor(e / 1000);
}
let N = new Map();
function C(e, t) {
    let n = N.get(t);
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
        N.set(t, n));
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
function R(e, t, n = 'compatible') {
    var r, i, a, s;
    let l = L(e);
    if ('UTC' === t) return S(l);
    if (t === E() && 'compatible' === n) {
        l = x(l, new u());
        let e = new Date(),
            t = o(l.era, l.year);
        return e.setFullYear(t, l.month - 1, l.day), e.setHours(l.hour, l.minute, l.second, l.millisecond), e.getTime();
    }
    let c = S(l),
        d = A(c - 86400000, t),
        f = A(c + 86400000, t);
    let _ =
        ((r = l),
        (i = t),
        ((a = c - d) == (s = c - f) ? [a] : [a, s]).filter((e) =>
            (function (e, t, n) {
                let r = C(n, t);
                return e.year === r.year && e.month === r.month && e.day === r.day && e.hour === r.hour && e.minute === r.minute && e.second === r.second;
            })(r, i, e)
        ));
    if (1 === _.length) return _[0];
    if (_.length > 1)
        switch (n) {
            case 'compatible':
            case 'earlier':
                return _[0];
            case 'later':
                return _[_.length - 1];
            case 'reject':
                throw RangeError('Multiple possible absolute times found');
        }
    switch (n) {
        case 'earlier':
            return Math.min(c - d, c - f);
        case 'compatible':
        case 'later':
            return Math.max(c - d, c - f);
        case 'reject':
            throw RangeError('No such absolute time found');
    }
}
function O(e, t, n = 'compatible') {
    return new Date(R(e, t, n));
}
function D(e, t) {
    let n = A(e, t),
        r = new Date(e + n);
    return new et(r.getUTCFullYear(), r.getUTCMonth() + 1, r.getUTCDate(), t, n, r.getUTCHours(), r.getUTCMinutes(), r.getUTCSeconds(), r.getUTCMilliseconds());
}
function L(e, t) {
    let n = 0,
        r = 0,
        i = 0,
        a = 0;
    if ('timeZone' in e) ({ hour: n, minute: r, second: i, millisecond: a } = e);
    else if ('hour' in e && !t) return e;
    return t && ({ hour: n, minute: r, second: i, millisecond: a } = t), new $(e.calendar, e.era, e.year, e.month, e.day, n, r, i, a);
}
function x(e, t) {
    if (e.calendar.identifier === t.identifier) return e;
    let n = t.fromJulianDay(e.calendar.toJulianDay(e)),
        r = e.copy();
    return (r.calendar = t), (r.era = n.era), (r.year = n.year), (r.month = n.month), (r.day = n.day), U(r), r;
}
function w(e, t) {
    let n = e.copy(),
        r =
            'hour' in n
                ? (function (e, t) {
                      var n;
                      let r;
                      (e.hour += t.hours || 0), (e.minute += t.minutes || 0), (e.second += t.seconds || 0), (e.millisecond += t.milliseconds || 0);
                      return (n = e), (n.second += Math.floor(n.millisecond / 1000)), (n.millisecond = V(n.millisecond, 1000)), (n.minute += Math.floor(n.second / 60)), (n.second = V(n.second, 60)), (n.hour += Math.floor(n.minute / 60)), (n.minute = V(n.minute, 60)), (r = Math.floor(n.hour / 24)), (n.hour = V(n.hour, 24)), r;
                  })(n, t)
                : 0;
    M(n, t.years || 0),
        n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e),
        (n.month += t.months || 0),
        P(n),
        k(n),
        (n.day += 7 * (t.weeks || 0)),
        (n.day += t.days || 0),
        (n.day += r),
        (function (e) {
            for (; e.day < 1; ) e.month--, P(e), (e.day += e.calendar.getDaysInMonth(e));
            for (; e.day > e.calendar.getDaysInMonth(e); ) (e.day -= e.calendar.getDaysInMonth(e)), e.month++, P(e);
        })(n),
        n.calendar.balanceDate && n.calendar.balanceDate(n),
        n.year < 1 && ((n.year = 1), (n.month = 1), (n.day = 1));
    let i = n.calendar.getYearsInEra(n);
    if (n.year > i) {
        var a, s;
        let e = null === (a = (s = n.calendar).isInverseEra) || void 0 === a ? void 0 : a.call(s, n);
        (n.year = i), (n.month = e ? 1 : n.calendar.getMonthsInYear(n)), (n.day = e ? 1 : n.calendar.getDaysInMonth(n));
    }
    n.month < 1 && ((n.month = 1), (n.day = 1));
    let o = n.calendar.getMonthsInYear(n);
    return n.month > o && ((n.month = o), (n.day = n.calendar.getDaysInMonth(n))), (n.day = Math.max(1, Math.min(n.calendar.getDaysInMonth(n), n.day))), n;
}
function M(e, t) {
    var n, r;
    (null === (n = (r = e.calendar).isInverseEra) || void 0 === n ? void 0 : n.call(r, e)) && (t = -t), (e.year += t);
}
function P(e) {
    for (; e.month < 1; ) M(e, -1), (e.month += e.calendar.getMonthsInYear(e));
    let t = 0;
    for (; e.month > (t = e.calendar.getMonthsInYear(e)); ) (e.month -= t), M(e, 1);
}
function k(e) {
    (e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month))), (e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day)));
}
function U(e) {
    e.calendar.constrainDate && e.calendar.constrainDate(e), (e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year))), k(e);
}
function G(e) {
    let t = {};
    for (let n in e) 'number' == typeof e[n] && (t[n] = -e[n]);
    return t;
}
function B(e, t) {
    return w(e, G(t));
}
function Z(e, t) {
    let n = e.copy();
    return null != t.era && (n.era = t.era), null != t.year && (n.year = t.year), null != t.month && (n.month = t.month), null != t.day && (n.day = t.day), U(n), n;
}
function F(e, t) {
    let n = e.copy();
    return (
        null != t.hour && (n.hour = t.hour),
        null != t.minute && (n.minute = t.minute),
        null != t.second && (n.second = t.second),
        null != t.millisecond && (n.millisecond = t.millisecond),
        (function (e) {
            (e.millisecond = Math.max(0, Math.min(e.millisecond, 1000))), (e.second = Math.max(0, Math.min(e.second, 59))), (e.minute = Math.max(0, Math.min(e.minute, 59))), (e.hour = Math.max(0, Math.min(e.hour, 23)));
        })(n),
        n
    );
}
function V(e, t) {
    let n = e % t;
    return n < 0 && (n += t), n;
}
function j(e, t, n, r) {
    let i = e.copy();
    switch (t) {
        case 'era': {
            let t = e.calendar.getEras(),
                a = t.indexOf(e.era);
            if (a < 0) throw Error('Invalid era: ' + e.era);
            (a = Y(a, n, 0, t.length - 1, null == r ? void 0 : r.round)), (i.era = t[a]), U(i);
            break;
        }
        case 'year':
            var a, s;
            (null === (a = (s = i.calendar).isInverseEra) || void 0 === a ? void 0 : a.call(s, i)) && (n = -n), (i.year = Y(e.year, n, -1 / 0, 9999, null == r ? void 0 : r.round)), i.year === -1 / 0 && (i.year = 1), i.calendar.balanceYearMonth && i.calendar.balanceYearMonth(i, e);
            break;
        case 'month':
            i.month = Y(e.month, n, 1, e.calendar.getMonthsInYear(e), null == r ? void 0 : r.round);
            break;
        case 'day':
            i.day = Y(e.day, n, 1, e.calendar.getDaysInMonth(e), null == r ? void 0 : r.round);
            break;
        default:
            throw Error('Unsupported field ' + t);
    }
    return e.calendar.balanceDate && e.calendar.balanceDate(i), U(i), i;
}
function H(e, t, n, r) {
    let i = e.copy();
    switch (t) {
        case 'hour': {
            let t = e.hour,
                a = 0,
                s = 23;
            if ((null == r ? void 0 : r.hourCycle) === 12) {
                let e = t >= 12;
                (a = e ? 12 : 0), (s = e ? 23 : 11);
            }
            i.hour = Y(t, n, a, s, null == r ? void 0 : r.round);
            break;
        }
        case 'minute':
            i.minute = Y(e.minute, n, 0, 59, null == r ? void 0 : r.round);
            break;
        case 'second':
            i.second = Y(e.second, n, 0, 59, null == r ? void 0 : r.round);
            break;
        case 'millisecond':
            i.millisecond = Y(e.millisecond, n, 0, 999, null == r ? void 0 : r.round);
            break;
        default:
            throw Error('Unsupported field ' + t);
    }
    return i;
}
function Y(e, t, n, r, i = !1) {
    if (i) {
        (e += Math.sign(t)) < n && (e = r);
        let i = Math.abs(t);
        (e = t > 0 ? Math.ceil(e / i) * i : Math.floor(e / i) * i) > r && (e = n);
    } else (e += t) < n ? (e = r - (n - e - 1)) : e > r && (e = n + (e - r - 1));
    return e;
}
function W(e, t) {
    let n;
    if ((null != t.years && 0 !== t.years) || (null != t.months && 0 !== t.months) || (null != t.weeks && 0 !== t.weeks) || (null != t.days && 0 !== t.days)) {
        let r;
        n = R(
            w(L(e), {
                years: t.years,
                months: t.months,
                weeks: t.weeks,
                days: t.days
            }),
            e.timeZone
        );
    } else n = S(e) - e.offset;
    return x(D((n += (t.milliseconds || 0) + 1000 * (t.seconds || 0) + 60000 * (t.minutes || 0) + 3600000 * (t.hours || 0)), e.timeZone), e.calendar);
}
function K(e) {
    let t = x(e, new u());
    return `${String(t.year).padStart(4, '0')}-${String(t.month).padStart(2, '0')}-${String(t.day).padStart(2, '0')}`;
}
function z(e) {
    var t;
    return `${K(e)}T${((t = e), `${String(t.hour).padStart(2, '0')}:${String(t.minute).padStart(2, '0')}:${String(t.second).padStart(2, '0')}${t.millisecond ? String(t.millisecond / 1000).slice(1) : ''}`)}`;
}
function q(e) {
    let t,
        n = 'object' == typeof e[0] ? e.shift() : new u();
    if ('string' == typeof e[0]) t = e.shift();
    else {
        let e = n.getEras();
        t = e[e.length - 1];
    }
    return [n, t, e.shift(), e.shift(), e.shift()];
}
var Q = new WeakMap();
class X {
    copy() {
        return this.era ? new X(this.calendar, this.era, this.year, this.month, this.day) : new X(this.calendar, this.year, this.month, this.day);
    }
    add(e) {
        return w(this, e);
    }
    subtract(e) {
        var t;
        return (t = this), w(t, G(e));
    }
    set(e) {
        return Z(this, e);
    }
    cycle(e, t, n) {
        return j(this, e, t, n);
    }
    toDate(e) {
        return O(this, e);
    }
    toString() {
        return K(this);
    }
    compare(e) {
        return h(this, e);
    }
    constructor(...e) {
        (0, r._)(this, Q, {
            writable: !0,
            value: void 0
        });
        let [t, n, i, a, s] = q(e);
        (this.calendar = t), (this.era = n), (this.year = i), (this.month = a), (this.day = s), U(this);
    }
}
var J = new WeakMap();
class $ {
    copy() {
        return this.era ? new $(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new $(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
    }
    add(e) {
        return w(this, e);
    }
    subtract(e) {
        var t;
        return (t = this), w(t, G(e));
    }
    set(e) {
        return Z(F(this, e), e);
    }
    cycle(e, t, n) {
        switch (e) {
            case 'era':
            case 'year':
            case 'month':
            case 'day':
                return j(this, e, t, n);
            default:
                return H(this, e, t, n);
        }
    }
    toDate(e, t) {
        return O(this, e, t);
    }
    toString() {
        return z(this);
    }
    compare(e) {
        let t = h(this, e);
        if (0 === t) {
            var n, r;
            return (n = this), (r = L(e)), m(n) - m(r);
        }
        return t;
    }
    constructor(...e) {
        (0, r._)(this, J, {
            writable: !0,
            value: void 0
        });
        let [t, n, i, a, s] = q(e);
        (this.calendar = t), (this.era = n), (this.year = i), (this.month = a), (this.day = s), (this.hour = e.shift() || 0), (this.minute = e.shift() || 0), (this.second = e.shift() || 0), (this.millisecond = e.shift() || 0), U(this);
    }
}
var ee = new WeakMap();
class et {
    copy() {
        return this.era ? new et(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new et(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
    }
    add(e) {
        return W(this, e);
    }
    subtract(e) {
        var t;
        return (t = this), W(t, G(e));
    }
    set(e, t) {
        var n, r, i;
        let a, s;
        return (n = this), (r = e), (i = t), 0 === (s = F(Z((a = L(n)), r), r)).compare(a) ? n : x(D(R(s, n.timeZone, i), n.timeZone), n.calendar);
    }
    cycle(e, t, n) {
        return (function (e, t, n, r) {
            switch (t) {
                case 'hour': {
                    let t = 0,
                        i = 23;
                    if ((null == r ? void 0 : r.hourCycle) === 12) {
                        let n = e.hour >= 12;
                        (t = n ? 12 : 0), (i = n ? 23 : 11);
                    }
                    let a = L(e),
                        s = x(F(a, { hour: t }), new u()),
                        o = [R(s, e.timeZone, 'earlier'), R(s, e.timeZone, 'later')].filter((t) => D(t, e.timeZone).day === s.day)[0],
                        l = x(F(a, { hour: i }), new u()),
                        c = [R(l, e.timeZone, 'earlier'), R(l, e.timeZone, 'later')].filter((t) => D(t, e.timeZone).day === l.day).pop(),
                        d = S(e) - e.offset,
                        f = Math.floor(d / 3600000),
                        _ = d % 3600000;
                    return x(D((d = 3600000 * Y(f, n, Math.floor(o / 3600000), Math.floor(c / 3600000), null == r ? void 0 : r.round) + _), e.timeZone), e.calendar);
                }
                case 'minute':
                case 'second':
                case 'millisecond':
                    return H(e, t, n, r);
                case 'era':
                case 'year':
                case 'month':
                case 'day':
                    return x(D(R(j(L(e), t, n, r), e.timeZone), e.timeZone), e.calendar);
                default:
                    throw Error('Unsupported field ' + t);
            }
        })(this, e, t, n);
    }
    toDate() {
        var e;
        return (e = this), new Date(S(e) - e.offset);
    }
    toString() {
        var e, t;
        let n, r, i;
        return (e = this), `${z(e)}${((n = 0 > Math.sign((t = e.offset)) ? '-' : '+'), (r = Math.floor((t = Math.abs(t)) / 3600000)), (i = (t % 3600000) / 60000), `${n}${String(r).padStart(2, '0')}:${String(i).padStart(2, '0')}`)}[${e.timeZone}]`;
    }
    toAbsoluteString() {
        return this.toDate().toISOString();
    }
    compare(e) {
        return (
            this.toDate().getTime() -
            (function (e, t, n) {
                if (e instanceof et)
                    return e.timeZone === t
                        ? e
                        : (function (e, t) {
                              return x(D(S(e) - e.offset, t), e.calendar);
                          })(e, t);
                return D(R(e, t, void 0), t);
            })(e, this.timeZone)
                .toDate()
                .getTime()
        );
    }
    constructor(...e) {
        (0, r._)(this, ee, {
            writable: !0,
            value: void 0
        });
        let [t, n, i, a, s] = q(e),
            o = e.shift(),
            l = e.shift();
        (this.calendar = t), (this.era = n), (this.year = i), (this.month = a), (this.day = s), (this.timeZone = o), (this.offset = l), (this.hour = e.shift() || 0), (this.minute = e.shift() || 0), (this.second = e.shift() || 0), (this.millisecond = e.shift() || 0), U(this);
    }
}
let en = new Map();
class er {
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
        return (
            (function () {
                return (
                    null == eo &&
                        (eo =
                            'h12' ===
                            new Intl.DateTimeFormat('fr', {
                                hour: 'numeric',
                                hour12: !1
                            }).resolvedOptions().hourCycle),
                    eo
                );
            })() &&
                (!this.resolvedHourCycle &&
                    (this.resolvedHourCycle = (function (e, t) {
                        if (!t.timeStyle && !t.hour) return;
                        e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, '');
                        let n = ea((e += (e.includes('-u-') ? '' : '-u') + '-nu-latn'), {
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
                    })(e.locale, this.options)),
                (e.hourCycle = this.resolvedHourCycle),
                (e.hour12 = 'h11' === this.resolvedHourCycle || 'h12' === this.resolvedHourCycle)),
            'ethiopic-amete-alem' === e.calendar && (e.calendar = 'ethioaa'),
            e
        );
    }
    constructor(e, t = {}) {
        (this.formatter = ea(e, t)), (this.options = t);
    }
}
let ei = {
    true: { ja: 'h11' },
    false: {}
};
function ea(e, t = {}) {
    if (
        'boolean' == typeof t.hour12 &&
        (function () {
            return (
                null == es &&
                    (es =
                        '24' ===
                        new Intl.DateTimeFormat('en-US', {
                            hour: 'numeric',
                            hour12: !1
                        }).format(new Date(2020, 2, 3, 0))),
                es
            );
        })()
    ) {
        let n = ei[String((t = { ...t }).hour12)][e.split('-')[0]],
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
    if (en.has(n)) return en.get(n);
    let r = new Intl.DateTimeFormat(e, t);
    return en.set(n, r), r;
}
let es = null,
    eo = null;
