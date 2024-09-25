n.d(t, {
    Hg: function () {
        return g;
    },
    KC: function () {
        return E;
    },
    QX: function () {
        return v;
    },
    TD: function () {
        return A;
    },
    Xf: function () {
        return m;
    },
    Y4: function () {
        return p;
    },
    _w: function () {
        return f;
    },
    vc: function () {
        return h;
    }
});
var r = n(913527),
    i = n.n(r),
    a = n(232551),
    o = n(706454);
let s = 60000,
    l = 3600000,
    u = 86400000,
    c = Object.create(null);
function d(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = e.getTime();
    return !t && (n -= e.getTimezoneOffset() * s), Math.floor(n / u) * u;
}
function _(e, t) {
    return Math.floor((d(e, !1) - d(t, !1)) / u);
}
o.default.addChangeListener(() => {
    c = Object.create(null);
});
function E(e, t) {
    return Math.abs(+e - +t) <= u && e.getDate() === t.getDate();
}
function f(e, t, n) {
    return Math.abs(e.valueOf() - t.valueOf()) < n;
}
function h(e, t) {
    let n = I(e).locale(),
        r = ''.concat(n, ':').concat(t),
        i = c[r];
    return null == i && (i = c[r] = (0, a.Z)(t)), i(T(e));
}
function p(e) {
    let t;
    let n = i().localeData(),
        r = i()(),
        a = _(T(e), r.toDate());
    return a < -1 ? h(e, 'L LT') : ((t = a < 0 ? 'lastDay' : a < 1 ? 'sameDay' : a < 2 ? 'nextDay' : 'sameElse'), h(e, n.calendar(t, I(e), r)));
}
function m(e) {
    let t = i().localeData(),
        n = i()(),
        r = _(T(e), n.toDate());
    if (0 === r) return h(e, t.longDateFormat('LT'));
    if (-1 === r) return h(e, t.calendar('lastDay', I(e), n));
    if (r > -7) return h(e, 'dddd');
    return h(e, t.longDateFormat('l'));
}
function I(e) {
    return i().isMoment(e) ? e : i()(e);
}
function T(e) {
    return i().isMoment(e) ? e.toDate() : e;
}
function g(e) {
    let t;
    let n = i().localeData(),
        r = new Date(),
        a = _(e, r);
    return 'sameElse' == (t = a < -1 ? 'sameElse' : a < 0 ? 'lastDay' : a < 1 ? 'sameDay' : a < 2 ? 'nextDay' : 'sameElse') ? h(e, 'LLL') : h(e, n.calendar(t, i()(e), i()(r)));
}
let S = [
    {
        key: 'days',
        millisecondsInUnit: 86400000
    },
    {
        key: 'hours',
        millisecondsInUnit: 3600000
    },
    {
        key: 'minutes',
        millisecondsInUnit: 60000
    },
    {
        key: 'seconds',
        millisecondsInUnit: 1000
    }
];
function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: n ? 1 : 0
        };
    if (e > t || (n && Number(e) + 1200 > Number(t))) return r;
    let i = Number(t) - Number(e);
    return (
        S.forEach((e) => {
            let { key: t, millisecondsInUnit: n } = e;
            (r[t] = Math.floor(i / n)), (i -= r[t] * n);
        }),
        r
    );
}
function v(e, t) {
    return e.days > 0
        ? t.days.format({
              days: e.days,
              hours: e.hours
          })
        : e.hours > 0
          ? t.hours.format({
                hours: e.hours,
                minutes: e.minutes
            })
          : t.minutes.format({ minutes: Math.max(1, e.minutes) });
}
