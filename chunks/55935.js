n.d(t, {
    Hg: function () {
        return I;
    },
    KC: function () {
        return _;
    },
    QX: function () {
        return S;
    },
    TD: function () {
        return b;
    },
    Xf: function () {
        return g;
    },
    Y4: function () {
        return m;
    },
    _w: function () {
        return p;
    },
    vc: function () {
        return h;
    }
});
var r = n(913527),
    i = n.n(r),
    a = n(232551),
    s = n(706454),
    o = n(695346),
    l = n(388032);
let u = 86400000,
    c = Object.create(null);
function d(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = e.getTime();
    return !t && (n -= 60000 * e.getTimezoneOffset()), Math.floor(n / u) * u;
}
function f(e, t) {
    return Math.floor((d(e, !1) - d(t, !1)) / u);
}
function _(e, t) {
    return Math.abs(+e - +t) <= u && e.getDate() === t.getDate();
}
function p(e, t, n) {
    return Math.abs(e.valueOf() - t.valueOf()) < n;
}
function h(e, t) {
    let n = E(e).locale(),
        r = o.hg.getSetting(),
        i = ''.concat(n, ':').concat(t, ':').concat(r),
        s = c[i];
    return null == s && (s = c[i] = (0, a.Z)(t)), s(v(e));
}
function m(e) {
    let t;
    let n = i().localeData(),
        r = i()(),
        a = f(v(e), r.toDate());
    return a < -1 ? h(e, 'L LT') : ((t = a < 0 ? 'lastDay' : a < 1 ? 'sameDay' : a < 2 ? 'nextDay' : 'sameElse'), h(e, n.calendar(t, E(e), r)));
}
function g(e) {
    let t = i().localeData(),
        n = i()(),
        r = f(v(e), n.toDate());
    if (0 === r) return h(e, 'LT');
    if (-1 === r) return h(e, t.calendar('lastDay', E(e), n));
    if (r > -7) return h(e, 'dddd');
    return h(e, 'L');
}
function E(e) {
    return i().isMoment(e) ? e : i()(e);
}
function v(e) {
    return i().isMoment(e) ? e.toDate() : e;
}
function I(e) {
    let t;
    let n = i().localeData(),
        r = new Date(),
        a = f(e, r);
    return 'sameElse' == (t = a < -1 ? 'sameElse' : a < 0 ? 'lastDay' : a < 1 ? 'sameDay' : a < 2 ? 'nextDay' : 'sameElse') ? h(e, 'LLL') : h(e, n.calendar(t, i()(e), i()(r)));
}
s.default.addChangeListener(() => {
    c = Object.create(null);
});
let T = [
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
function b(e, t) {
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
        T.forEach((e) => {
            let { key: t, millisecondsInUnit: n } = e;
            (r[t] = Math.floor(i / n)), (i -= r[t] * n);
        }),
        r
    );
}
function S(e, t) {
    return e.days > 0
        ? l.intl.formatToPlainString(t.days, {
              days: e.days,
              hours: e.hours
          })
        : e.hours > 0
          ? l.intl.formatToPlainString(t.hours, {
                hours: e.hours,
                minutes: e.minutes
            })
          : l.intl.formatToPlainString(t.minutes, { minutes: Math.max(1, e.minutes) });
}
