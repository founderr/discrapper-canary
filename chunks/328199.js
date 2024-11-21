n.d(t, {
    KC: function () {
        return a;
    },
    Lg: function () {
        return u;
    },
    Mb: function () {
        return S;
    },
    N9: function () {
        return s;
    },
    Nm: function () {
        return h;
    },
    PA: function () {
        return v;
    },
    Vf: function () {
        return m;
    },
    Xi: function () {
        return d;
    },
    em: function () {
        return g;
    },
    iT: function () {
        return p;
    },
    ji: function () {
        return o;
    },
    jx: function () {
        return E;
    },
    l7: function () {
        return y;
    },
    rm: function () {
        return c;
    },
    vV: function () {
        return I;
    },
    zJ: function () {
        return b;
    },
    zO: function () {
        return l;
    }
});
var r = n(697),
    i = n(682367);
function a(e, t) {
    return (t = (0, r.Mw)(t, e.calendar)), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function s(e, t) {
    return e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function o(e, t) {
    let n =
        Math.ceil(
            e.calendar.toJulianDay(e) +
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
                    return (t && i.U[t]) || 0;
                })(t)
        ) % 7;
    return n < 0 && (n += 7), n;
}
function l(e) {
    return (0, r.FD)(Date.now(), e);
}
function u(e) {
    return (0, r.WG)(l(e));
}
function c(e, t) {
    return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function d(e, t) {
    return f(e) - f(t);
}
function f(e) {
    return 3600000 * e.hour + 60000 * e.minute + 1000 * e.second + e.millisecond;
}
let _ = null;
function p() {
    return null == _ && (_ = new Intl.DateTimeFormat().resolvedOptions().timeZone), _;
}
function h(e) {
    return e.subtract({ days: e.day - 1 });
}
function m(e) {
    return e.add({ days: e.calendar.getDaysInMonth(e) - e.day });
}
function g(e) {
    return h(e.subtract({ months: e.month - 1 }));
}
function E(e) {
    return e.calendar.getMinimumMonthInYear ? e.calendar.getMinimumMonthInYear(e) : 1;
}
function v(e) {
    return e.calendar.getMinimumDayInMonth ? e.calendar.getMinimumDayInMonth(e) : 1;
}
function b(e, t) {
    let n = o(e, t);
    return e.subtract({ days: n });
}
function I(e, t) {
    return b(e, t).add({ days: 6 });
}
let T = new Map();
function S(e, t) {
    return e && t ? (0 >= e.compare(t) ? e : t) : e || t;
}
function y(e, t) {
    return e && t ? (e.compare(t) >= 0 ? e : t) : e || t;
}
