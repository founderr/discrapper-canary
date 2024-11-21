n.d(t, {
    FD: function () {
        return p;
    },
    IO: function () {
        return m;
    },
    Mw: function () {
        return E;
    },
    WG: function () {
        return h;
    },
    ZB: function () {
        return g;
    },
    ZI: function () {
        return o;
    },
    ZU: function () {
        return _;
    },
    fW: function () {
        return v;
    },
    fk: function () {
        return b;
    },
    xA: function () {
        return f;
    }
});
var r = n(927521),
    i = n(570899),
    a = n(165352),
    s = n(328199);
function o(e) {
    return (e = E(e, new a.IQ())), l((0, a.J4)(e.era, e.year), e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function l(e, t, n, r, i, a, s) {
    let o = new Date();
    return o.setUTCHours(r, i, a, s), o.setUTCFullYear(e, t - 1, n), o.getTime();
}
function u(e, t) {
    if ('UTC' === t) return 0;
    if (e > 0 && t === (0, s.iT)()) return -60000 * new Date(e).getTimezoneOffset();
    let { year: n, month: r, day: i, hour: a, minute: o, second: u } = d(e, t);
    return l(n, r, i, a, o, u, 0) - 1000 * Math.floor(e / 1000);
}
let c = new Map();
function d(e, t) {
    let n = c.get(t);
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
        c.set(t, n));
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
function f(e, t, n = 'compatible') {
    var r, i, l, c;
    let f = m(e);
    if ('UTC' === t) return o(f);
    if (t === (0, s.iT)() && 'compatible' === n) {
        f = E(f, new a.IQ());
        let e = new Date(),
            t = (0, a.J4)(f.era, f.year);
        return e.setFullYear(t, f.month - 1, f.day), e.setHours(f.hour, f.minute, f.second, f.millisecond), e.getTime();
    }
    let _ = o(f),
        p = u(_ - 86400000, t),
        h = u(_ + 86400000, t);
    let g =
        ((r = f),
        (i = t),
        ((l = _ - p) == (c = _ - h) ? [l] : [l, c]).filter((e) =>
            (function (e, t, n) {
                let r = d(n, t);
                return e.year === r.year && e.month === r.month && e.day === r.day && e.hour === r.hour && e.minute === r.minute && e.second === r.second;
            })(r, i, e)
        ));
    if (1 === g.length) return g[0];
    if (g.length > 1)
        switch (n) {
            case 'compatible':
            case 'earlier':
                return g[0];
            case 'later':
                return g[g.length - 1];
            case 'reject':
                throw RangeError('Multiple possible absolute times found');
        }
    switch (n) {
        case 'earlier':
            return Math.min(_ - p, _ - h);
        case 'compatible':
        case 'later':
            return Math.max(_ - p, _ - h);
        case 'reject':
            throw RangeError('No such absolute time found');
    }
}
function _(e, t, n = 'compatible') {
    return new Date(f(e, t, n));
}
function p(e, t) {
    let n = u(e, t),
        i = new Date(e + n),
        a = i.getUTCFullYear(),
        s = i.getUTCMonth() + 1,
        o = i.getUTCDate(),
        l = i.getUTCHours(),
        c = i.getUTCMinutes(),
        d = i.getUTCSeconds(),
        f = i.getUTCMilliseconds();
    return new r.AQ(a, s, o, t, n, l, c, d, f);
}
function h(e) {
    return new r.aw(e.calendar, e.era, e.year, e.month, e.day);
}
function m(e, t) {
    let n = 0,
        i = 0,
        a = 0,
        s = 0;
    if ('timeZone' in e) ({ hour: n, minute: i, second: a, millisecond: s } = e);
    else if ('hour' in e && !t) return e;
    return t && ({ hour: n, minute: i, second: a, millisecond: s } = t), new r.oz(e.calendar, e.era, e.year, e.month, e.day, n, i, a, s);
}
function g(e) {
    return new r.qp(e.hour, e.minute, e.second, e.millisecond);
}
function E(e, t) {
    if (e.calendar.identifier === t.identifier) return e;
    let n = t.fromJulianDay(e.calendar.toJulianDay(e)),
        r = e.copy();
    return (r.calendar = t), (r.era = n.era), (r.year = n.year), (r.month = n.month), (r.day = n.day), (0, i.jH)(r), r;
}
function v(e, t, n) {
    if (e instanceof r.AQ)
        return e.timeZone === t
            ? e
            : (function (e, t) {
                  return E(p(o(e) - e.offset, t), e.calendar);
              })(e, t);
    return p(f(e, t, n), t);
}
function b(e) {
    return new Date(o(e) - e.offset);
}
