r.d(n, {
    FD: function () {
        return E;
    },
    IO: function () {
        return T;
    },
    Mw: function () {
        return y;
    },
    WG: function () {
        return I;
    },
    ZB: function () {
        return b;
    },
    ZI: function () {
        return l;
    },
    ZU: function () {
        return g;
    },
    fW: function () {
        return S;
    },
    fk: function () {
        return A;
    },
    xA: function () {
        return m;
    }
});
var i = r(927521),
    a = r(570899),
    s = r(165352),
    o = r(328199);
function l(e) {
    return (e = y(e, new s.IQ())), u((0, s.J4)(e.era, e.year), e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function u(e, n, r, i, a, s, o) {
    let l = new Date();
    return l.setUTCHours(i, a, s, o), l.setUTCFullYear(e, n - 1, r), l.getTime();
}
function c(e, n) {
    if ('UTC' === n) return 0;
    if (e > 0 && n === (0, o.iT)()) return -60000 * new Date(e).getTimezoneOffset();
    let { year: r, month: i, day: a, hour: s, minute: l, second: c } = f(e, n);
    return u(r, i, a, s, l, c, 0) - 1000 * Math.floor(e / 1000);
}
let d = new Map();
function f(e, n) {
    let r = d.get(n);
    !r &&
        ((r = new Intl.DateTimeFormat('en-US', {
            timeZone: n,
            hour12: !1,
            era: 'short',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        })),
        d.set(n, r));
    let i = r.formatToParts(new Date(e)),
        a = {};
    for (let e of i) 'literal' !== e.type && (a[e.type] = e.value);
    return {
        year: 'BC' === a.era || 'B' === a.era ? -a.year + 1 : +a.year,
        month: +a.month,
        day: +a.day,
        hour: '24' === a.hour ? 0 : +a.hour,
        minute: +a.minute,
        second: +a.second
    };
}
let _ = 86400000;
function h(e, n, r, i) {
    return (r === i ? [r] : [r, i]).filter((r) => p(e, n, r));
}
function p(e, n, r) {
    let i = f(r, n);
    return e.year === i.year && e.month === i.month && e.day === i.day && e.hour === i.hour && e.minute === i.minute && e.second === i.second;
}
function m(e, n, r = 'compatible') {
    let i = T(e);
    if ('UTC' === n) return l(i);
    if (n === (0, o.iT)() && 'compatible' === r) {
        i = y(i, new s.IQ());
        let e = new Date(),
            n = (0, s.J4)(i.era, i.year);
        return e.setFullYear(n, i.month - 1, i.day), e.setHours(i.hour, i.minute, i.second, i.millisecond), e.getTime();
    }
    let a = l(i),
        u = c(a - _, n),
        d = c(a + _, n),
        f = h(i, n, a - u, a - d);
    if (1 === f.length) return f[0];
    if (f.length > 1)
        switch (r) {
            case 'compatible':
            case 'earlier':
                return f[0];
            case 'later':
                return f[f.length - 1];
            case 'reject':
                throw RangeError('Multiple possible absolute times found');
        }
    switch (r) {
        case 'earlier':
            return Math.min(a - u, a - d);
        case 'compatible':
        case 'later':
            return Math.max(a - u, a - d);
        case 'reject':
            throw RangeError('No such absolute time found');
    }
}
function g(e, n, r = 'compatible') {
    return new Date(m(e, n, r));
}
function E(e, n) {
    let r = c(e, n),
        a = new Date(e + r),
        s = a.getUTCFullYear(),
        o = a.getUTCMonth() + 1,
        l = a.getUTCDate(),
        u = a.getUTCHours(),
        d = a.getUTCMinutes(),
        f = a.getUTCSeconds(),
        _ = a.getUTCMilliseconds();
    return new i.AQ(s, o, l, n, r, u, d, f, _);
}
function v(e, n) {
    return E(e.getTime(), n);
}
function I(e) {
    return new i.aw(e.calendar, e.era, e.year, e.month, e.day);
}
function T(e, n) {
    let r = 0,
        a = 0,
        s = 0,
        o = 0;
    if ('timeZone' in e) ({ hour: r, minute: a, second: s, millisecond: o } = e);
    else if ('hour' in e && !n) return e;
    return n && ({ hour: r, minute: a, second: s, millisecond: o } = n), new i.oz(e.calendar, e.era, e.year, e.month, e.day, r, a, s, o);
}
function b(e) {
    return new i.qp(e.hour, e.minute, e.second, e.millisecond);
}
function y(e, n) {
    if (e.calendar.identifier === n.identifier) return e;
    let r = n.fromJulianDay(e.calendar.toJulianDay(e)),
        i = e.copy();
    return (i.calendar = n), (i.era = r.era), (i.year = r.year), (i.month = r.month), (i.day = r.day), (0, a.jH)(i), i;
}
function S(e, n, r) {
    if (e instanceof i.AQ) return e.timeZone === n ? e : N(e, n);
    return E(m(e, n, r), n);
}
function A(e) {
    return new Date(l(e) - e.offset);
}
function N(e, n) {
    return y(E(l(e) - e.offset, n), e.calendar);
}
