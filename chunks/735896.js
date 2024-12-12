r.d(n, {
    Hk: function () {
        return d;
    },
    OI: function () {
        return f;
    },
    mr: function () {
        return c;
    },
    p6: function () {
        return u;
    },
    uE: function () {
        return _;
    }
});
var i = r(259630),
    a = r(52948),
    s = r(548097),
    o = ['formatMatcher', 'timeZone', 'hour12', 'weekday', 'era', 'year', 'month', 'day', 'hour', 'minute', 'second', 'timeZoneName', 'hourCycle', 'dateStyle', 'timeStyle', 'calendar', 'numberingSystem', 'fractionalSecondDigits'];
function l(e, n, r, s) {
    var l = e.locale,
        u = e.formats,
        c = e.onError,
        d = e.timeZone;
    void 0 === s && (s = {});
    var f = s.format,
        _ = (0, i.pi)((0, i.pi)({}, d && { timeZone: d }), f && (0, a.TB)(u, n, f, c)),
        h = (0, a.L6)(s, o, _);
    return (
        'time' === n &&
            !h.hour &&
            !h.minute &&
            !h.second &&
            !h.timeStyle &&
            !h.dateStyle &&
            (h = (0, i.pi)((0, i.pi)({}, h), {
                hour: 'numeric',
                minute: 'numeric'
            })),
        r(l, h)
    );
}
function u(e, n) {
    for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
    var a = r[0],
        o = r[1],
        u = void 0 === o ? {} : o,
        c = 'string' == typeof a ? new Date(a || 0) : a;
    try {
        return l(e, 'date', n, u).format(c);
    } catch (n) {
        e.onError(new s.Qe('Error formatting date.', e.locale, n));
    }
    return String(c);
}
function c(e, n) {
    for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
    var a = r[0],
        o = r[1],
        u = void 0 === o ? {} : o,
        c = 'string' == typeof a ? new Date(a || 0) : a;
    try {
        return l(e, 'time', n, u).format(c);
    } catch (n) {
        e.onError(new s.Qe('Error formatting time.', e.locale, n));
    }
    return String(c);
}
function d(e, n) {
    for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
    var l = r[0],
        u = r[1],
        c = r[2],
        d = void 0 === c ? {} : c,
        f = e.timeZone,
        _ = e.locale,
        h = e.onError,
        p = (0, a.L6)(d, o, f ? { timeZone: f } : {});
    try {
        return n(_, p).formatRange(l, u);
    } catch (n) {
        h(new s.Qe('Error formatting date time range.', e.locale, n));
    }
    return String(l);
}
function f(e, n) {
    for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
    var a = r[0],
        o = r[1],
        u = void 0 === o ? {} : o,
        c = 'string' == typeof a ? new Date(a || 0) : a;
    try {
        return l(e, 'date', n, u).formatToParts(c);
    } catch (n) {
        e.onError(new s.Qe('Error formatting date.', e.locale, n));
    }
    return [];
}
function _(e, n) {
    for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
    var a = r[0],
        o = r[1],
        u = void 0 === o ? {} : o,
        c = 'string' == typeof a ? new Date(a || 0) : a;
    try {
        return l(e, 'time', n, u).formatToParts(c);
    } catch (n) {
        e.onError(new s.Qe('Error formatting time.', e.locale, n));
    }
    return [];
}
