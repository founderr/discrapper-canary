n.d(t, {
    $X: function () {
        return d;
    },
    Co: function () {
        return S;
    },
    GK: function () {
        return v;
    },
    IH: function () {
        return a;
    },
    U2: function () {
        return E;
    },
    cW: function () {
        return T;
    },
    dW: function () {
        return p;
    },
    jH: function () {
        return u;
    },
    q_: function () {
        return _;
    },
    qr: function () {
        return y;
    },
    t8: function () {
        return f;
    },
    wC: function () {
        return A;
    },
    xC: function () {
        return b;
    },
    yG: function () {
        return g;
    }
});
var r = n(697),
    i = n(165352);
function a(e, t) {
    let n = e.copy(),
        r = 'hour' in n ? m(n, t) : 0;
    s(n, t.years || 0),
        n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e),
        (n.month += t.months || 0),
        o(n),
        l(n),
        (n.day += 7 * (t.weeks || 0)),
        (n.day += t.days || 0),
        (n.day += r),
        (function (e) {
            for (; e.day < 1; ) e.month--, o(e), (e.day += e.calendar.getDaysInMonth(e));
            for (; e.day > e.calendar.getDaysInMonth(e); ) (e.day -= e.calendar.getDaysInMonth(e)), e.month++, o(e);
        })(n),
        n.calendar.balanceDate && n.calendar.balanceDate(n),
        n.year < 1 && ((n.year = 1), (n.month = 1), (n.day = 1));
    let i = n.calendar.getYearsInEra(n);
    if (n.year > i) {
        var a, u;
        let e = null === (a = (u = n.calendar).isInverseEra) || void 0 === a ? void 0 : a.call(u, n);
        (n.year = i), (n.month = e ? 1 : n.calendar.getMonthsInYear(n)), (n.day = e ? 1 : n.calendar.getDaysInMonth(n));
    }
    n.month < 1 && ((n.month = 1), (n.day = 1));
    let c = n.calendar.getMonthsInYear(n);
    return n.month > c && ((n.month = c), (n.day = n.calendar.getDaysInMonth(n))), (n.day = Math.max(1, Math.min(n.calendar.getDaysInMonth(n), n.day))), n;
}
function s(e, t) {
    var n, r;
    (null === (n = (r = e.calendar).isInverseEra) || void 0 === n ? void 0 : n.call(r, e)) && (t = -t), (e.year += t);
}
function o(e) {
    for (; e.month < 1; ) s(e, -1), (e.month += e.calendar.getMonthsInYear(e));
    let t = 0;
    for (; e.month > (t = e.calendar.getMonthsInYear(e)); ) (e.month -= t), s(e, 1);
}
function l(e) {
    (e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month))), (e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day)));
}
function u(e) {
    e.calendar.constrainDate && e.calendar.constrainDate(e), (e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year))), l(e);
}
function c(e) {
    let t = {};
    for (let n in e) 'number' == typeof e[n] && (t[n] = -e[n]);
    return t;
}
function d(e, t) {
    return a(e, c(t));
}
function f(e, t) {
    let n = e.copy();
    return null != t.era && (n.era = t.era), null != t.year && (n.year = t.year), null != t.month && (n.month = t.month), null != t.day && (n.day = t.day), u(n), n;
}
function _(e, t) {
    let n = e.copy();
    return null != t.hour && (n.hour = t.hour), null != t.minute && (n.minute = t.minute), null != t.second && (n.second = t.second), null != t.millisecond && (n.millisecond = t.millisecond), p(n), n;
}
function p(e) {
    (e.millisecond = Math.max(0, Math.min(e.millisecond, 1000))), (e.second = Math.max(0, Math.min(e.second, 59))), (e.minute = Math.max(0, Math.min(e.minute, 59))), (e.hour = Math.max(0, Math.min(e.hour, 23)));
}
function h(e, t) {
    let n = e % t;
    return n < 0 && (n += t), n;
}
function m(e, t) {
    var n;
    let r;
    (e.hour += t.hours || 0), (e.minute += t.minutes || 0), (e.second += t.seconds || 0), (e.millisecond += t.milliseconds || 0);
    return (n = e), (n.second += Math.floor(n.millisecond / 1000)), (n.millisecond = h(n.millisecond, 1000)), (n.minute += Math.floor(n.second / 60)), (n.second = h(n.second, 60)), (n.hour += Math.floor(n.minute / 60)), (n.minute = h(n.minute, 60)), (r = Math.floor(n.hour / 24)), (n.hour = h(n.hour, 24)), r;
}
function g(e, t) {
    let n = e.copy();
    return m(n, t), n;
}
function E(e, t) {
    return g(e, c(t));
}
function v(e, t, n, r) {
    let i = e.copy();
    switch (t) {
        case 'era': {
            let t = e.calendar.getEras(),
                a = t.indexOf(e.era);
            if (a < 0) throw Error('Invalid era: ' + e.era);
            (a = I(a, n, 0, t.length - 1, null == r ? void 0 : r.round)), (i.era = t[a]), u(i);
            break;
        }
        case 'year':
            var a, s;
            (null === (a = (s = i.calendar).isInverseEra) || void 0 === a ? void 0 : a.call(s, i)) && (n = -n), (i.year = I(e.year, n, -1 / 0, 9999, null == r ? void 0 : r.round)), i.year === -1 / 0 && (i.year = 1), i.calendar.balanceYearMonth && i.calendar.balanceYearMonth(i, e);
            break;
        case 'month':
            i.month = I(e.month, n, 1, e.calendar.getMonthsInYear(e), null == r ? void 0 : r.round);
            break;
        case 'day':
            i.day = I(e.day, n, 1, e.calendar.getDaysInMonth(e), null == r ? void 0 : r.round);
            break;
        default:
            throw Error('Unsupported field ' + t);
    }
    return e.calendar.balanceDate && e.calendar.balanceDate(i), u(i), i;
}
function b(e, t, n, r) {
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
            i.hour = I(t, n, a, s, null == r ? void 0 : r.round);
            break;
        }
        case 'minute':
            i.minute = I(e.minute, n, 0, 59, null == r ? void 0 : r.round);
            break;
        case 'second':
            i.second = I(e.second, n, 0, 59, null == r ? void 0 : r.round);
            break;
        case 'millisecond':
            i.millisecond = I(e.millisecond, n, 0, 999, null == r ? void 0 : r.round);
            break;
        default:
            throw Error('Unsupported field ' + t);
    }
    return i;
}
function I(e, t, n, r, i = !1) {
    if (i) {
        (e += Math.sign(t)) < n && (e = r);
        let i = Math.abs(t);
        (e = t > 0 ? Math.ceil(e / i) * i : Math.floor(e / i) * i) > r && (e = n);
    } else (e += t) < n ? (e = r - (n - e - 1)) : e > r && (e = n + (e - r - 1));
    return e;
}
function T(e, t) {
    let n;
    if ((null != t.years && 0 !== t.years) || (null != t.months && 0 !== t.months) || (null != t.weeks && 0 !== t.weeks) || (null != t.days && 0 !== t.days)) {
        let i = a((0, r.IO)(e), {
            years: t.years,
            months: t.months,
            weeks: t.weeks,
            days: t.days
        });
        n = (0, r.xA)(i, e.timeZone);
    } else n = (0, r.ZI)(e) - e.offset;
    n += (t.milliseconds || 0) + 1000 * (t.seconds || 0) + 60000 * (t.minutes || 0) + 3600000 * (t.hours || 0);
    let i = (0, r.FD)(n, e.timeZone);
    return (0, r.Mw)(i, e.calendar);
}
function S(e, t) {
    return T(e, c(t));
}
function y(e, t, n, a) {
    switch (t) {
        case 'hour': {
            let t = 0,
                s = 23;
            if ((null == a ? void 0 : a.hourCycle) === 12) {
                let n = e.hour >= 12;
                (t = n ? 12 : 0), (s = n ? 23 : 11);
            }
            let o = (0, r.IO)(e),
                l = (0, r.Mw)(_(o, { hour: t }), new i.IQ()),
                u = [(0, r.xA)(l, e.timeZone, 'earlier'), (0, r.xA)(l, e.timeZone, 'later')].filter((t) => (0, r.FD)(t, e.timeZone).day === l.day)[0],
                c = (0, r.Mw)(_(o, { hour: s }), new i.IQ()),
                d = [(0, r.xA)(c, e.timeZone, 'earlier'), (0, r.xA)(c, e.timeZone, 'later')].filter((t) => (0, r.FD)(t, e.timeZone).day === c.day).pop(),
                f = (0, r.ZI)(e) - e.offset,
                p = Math.floor(f / 3600000),
                h = f % 3600000;
            return (f = 3600000 * I(p, n, Math.floor(u / 3600000), Math.floor(d / 3600000), null == a ? void 0 : a.round) + h), (0, r.Mw)((0, r.FD)(f, e.timeZone), e.calendar);
        }
        case 'minute':
        case 'second':
        case 'millisecond':
            return b(e, t, n, a);
        case 'era':
        case 'year':
        case 'month':
        case 'day': {
            let i = v((0, r.IO)(e), t, n, a),
                s = (0, r.xA)(i, e.timeZone);
            return (0, r.Mw)((0, r.FD)(s, e.timeZone), e.calendar);
        }
        default:
            throw Error('Unsupported field ' + t);
    }
}
function A(e, t, n) {
    let i = (0, r.IO)(e),
        a = _(f(i, t), t);
    if (0 === a.compare(i)) return e;
    let s = (0, r.xA)(a, e.timeZone, n);
    return (0, r.Mw)((0, r.FD)(s, e.timeZone), e.calendar);
}
