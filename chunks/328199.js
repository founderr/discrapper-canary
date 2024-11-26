n.d(t, {
    KC: function () {
        return a;
    },
    Lg: function () {
        return d;
    },
    Mb: function () {
        return N;
    },
    N9: function () {
        return o;
    },
    Nm: function () {
        return g;
    },
    PA: function () {
        return T;
    },
    Rn: function () {
        return A;
    },
    Vf: function () {
        return E;
    },
    Xi: function () {
        return _;
    },
    em: function () {
        return v;
    },
    iT: function () {
        return m;
    },
    ji: function () {
        return u;
    },
    jx: function () {
        return I;
    },
    l7: function () {
        return C;
    },
    rm: function () {
        return f;
    },
    vV: function () {
        return S;
    },
    xj: function () {
        return s;
    },
    zJ: function () {
        return b;
    },
    zO: function () {
        return c;
    },
    zk: function () {
        return l;
    }
});
var r = n(697),
    i = n(682367);
function a(e, t) {
    return (t = (0, r.Mw)(t, e.calendar)), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function s(e, t) {
    return (t = (0, r.Mw)(t, e.calendar)), (e = g(e)), (t = g(t)), e.era === t.era && e.year === t.year && e.month === t.month;
}
function o(e, t) {
    return e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function l(e, t) {
    return a(e, d(t));
}
function u(e, t) {
    let n =
        Math.ceil(
            e.calendar.toJulianDay(e) +
                1 -
                (function (e) {
                    let t = (function (e) {
                        if (Intl.Locale) {
                            let t = y.get(e);
                            return !t && (t = new Intl.Locale(e).maximize().region) && y.set(e, t), t;
                        }
                        let t = e.split('-')[1];
                        return 'u' === t ? void 0 : t;
                    })(e);
                    return (t && i.U[t]) || 0;
                })(t)
        ) % 7;
    return n < 0 && (n += 7), n;
}
function c(e) {
    return (0, r.FD)(Date.now(), e);
}
function d(e) {
    return (0, r.WG)(c(e));
}
function f(e, t) {
    return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function _(e, t) {
    return p(e) - p(t);
}
function p(e) {
    return 3600000 * e.hour + 60000 * e.minute + 1000 * e.second + e.millisecond;
}
let h = null;
function m() {
    return null == h && (h = new Intl.DateTimeFormat().resolvedOptions().timeZone), h;
}
function g(e) {
    return e.subtract({ days: e.day - 1 });
}
function E(e) {
    return e.add({ days: e.calendar.getDaysInMonth(e) - e.day });
}
function v(e) {
    return g(e.subtract({ months: e.month - 1 }));
}
function I(e) {
    return e.calendar.getMinimumMonthInYear ? e.calendar.getMinimumMonthInYear(e) : 1;
}
function T(e) {
    return e.calendar.getMinimumDayInMonth ? e.calendar.getMinimumDayInMonth(e) : 1;
}
function b(e, t) {
    let n = u(e, t);
    return e.subtract({ days: n });
}
function S(e, t) {
    return b(e, t).add({ days: 6 });
}
let y = new Map();
function A(e, t) {
    let n = e.calendar.getDaysInMonth(e);
    return Math.ceil((u(g(e), t) + n) / 7);
}
function N(e, t) {
    return e && t ? (0 >= e.compare(t) ? e : t) : e || t;
}
function C(e, t) {
    return e && t ? (e.compare(t) >= 0 ? e : t) : e || t;
}
