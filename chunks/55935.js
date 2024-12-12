r.d(n, {
    Hg: function () {
        return y;
    },
    KC: function () {
        return m;
    },
    QX: function () {
        return N;
    },
    TD: function () {
        return A;
    },
    Xf: function () {
        return I;
    },
    Y4: function () {
        return v;
    },
    _w: function () {
        return g;
    },
    vc: function () {
        return E;
    },
    wY: function () {
        return p;
    }
});
var i = r(913527),
    a = r.n(i),
    s = r(232551),
    o = r(706454),
    l = r(695346),
    u = r(388032);
let c = 60000,
    d = 3600000,
    f = 86400000,
    _ = Object.create(null);
function h(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = e.getTime();
    return !n && (r -= e.getTimezoneOffset() * c), Math.floor(r / f) * f;
}
function p(e, n) {
    return Math.floor((h(e, !1) - h(n, !1)) / f);
}
o.default.addChangeListener(() => {
    _ = Object.create(null);
});
function m(e, n) {
    return Math.abs(+e - +n) <= f && e.getDate() === n.getDate();
}
function g(e, n, r) {
    return Math.abs(e.valueOf() - n.valueOf()) < r;
}
function E(e, n) {
    let r = T(e).locale(),
        i = l.hg.getSetting(),
        a = ''.concat(r, ':').concat(n, ':').concat(i),
        o = _[a];
    return null == o && (o = _[a] = (0, s.Z)(n)), o(b(e));
}
function v(e) {
    let n;
    let r = a().localeData(),
        i = a()(),
        s = p(b(e), i.toDate());
    return s < -1 ? E(e, 'L LT') : ((n = s < 0 ? 'lastDay' : s < 1 ? 'sameDay' : s < 2 ? 'nextDay' : 'sameElse'), E(e, r.calendar(n, T(e), i)));
}
function I(e) {
    let n = a().localeData(),
        r = a()(),
        i = p(b(e), r.toDate());
    if (0 === i) return E(e, 'LT');
    if (-1 === i) return E(e, n.calendar('lastDay', T(e), r));
    if (i > -7) return E(e, 'dddd');
    return E(e, 'L');
}
function T(e) {
    return a().isMoment(e) ? e : a()(e);
}
function b(e) {
    return a().isMoment(e) ? e.toDate() : e;
}
function y(e) {
    let n;
    let r = a().localeData(),
        i = new Date(),
        s = p(e, i);
    return 'sameElse' == (n = s < -1 ? 'sameElse' : s < 0 ? 'lastDay' : s < 1 ? 'sameDay' : s < 2 ? 'nextDay' : 'sameElse') ? E(e, 'LLL') : E(e, r.calendar(n, a()(e), a()(i)));
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
function A(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: r ? 1 : 0
        };
    if (e > n || (r && Number(e) + 1200 > Number(n))) return i;
    let a = Number(n) - Number(e);
    return (
        S.forEach((e) => {
            let { key: n, millisecondsInUnit: r } = e;
            (i[n] = Math.floor(a / r)), (a -= i[n] * r);
        }),
        i
    );
}
function N(e, n) {
    return e.days > 0
        ? u.intl.formatToPlainString(n.days, {
              days: e.days,
              hours: e.hours
          })
        : e.hours > 0
          ? u.intl.formatToPlainString(n.hours, {
                hours: e.hours,
                minutes: e.minutes
            })
          : u.intl.formatToPlainString(n.minutes, { minutes: Math.max(1, e.minutes) });
}
