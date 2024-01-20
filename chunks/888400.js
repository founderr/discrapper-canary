"use strict";
n.r(t), n.d(t, {
  isSameDay: function() {
    return c
  },
  isWithinInterval: function() {
    return f
  },
  dateFormat: function() {
    return _
  },
  calendarFormat: function() {
    return h
  },
  accessibilityLabelCalendarFormat: function() {
    return g
  },
  diffAsUnits: function() {
    return E
  },
  unitsAsStrings: function() {
    return p
  }
});
var i = n("866227"),
  s = n.n(i),
  r = n("432959"),
  a = n("915639");
let o = 864e5,
  l = Object.create(null);

function u(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = e.getTime();
  return !t && (n -= 6e4 * e.getTimezoneOffset()), Math.floor(n / o) * o
}

function d(e, t) {
  return Math.floor((u(e, !1) - u(t, !1)) / o)
}

function c(e, t) {
  let n = e.toDate(),
    i = t.toDate();
  return Math.abs(+n - +i) <= o && n.getDate() === i.getDate()
}

function f(e, t, n) {
  return Math.abs(e.valueOf() - t.valueOf()) < n
}

function _(e, t) {
  let n = "".concat(e.locale(), ":").concat(t),
    i = l[n];
  return null == i && (i = l[n] = (0, r.default)(t)), i(e.toDate())
}

function h(e) {
  let t;
  let n = s.localeData(),
    i = s(),
    r = d(e.toDate(), i.toDate());
  return r < -1 ? _(e, "L LT") : (t = r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : "sameElse", _(e, n.calendar(t, e, i)))
}

function g(e) {
  let t;
  let n = s.localeData(),
    i = s(),
    r = d(e.toDate(), i.toDate());
  return "sameElse" == (t = r < -1 ? "sameElse" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : "sameElse") ? _(e, "LLL") : _(e, n.calendar(t, e, i))
}
a.default.addChangeListener(() => {
  l = Object.create(null)
});
let m = [{
  key: "days",
  millisecondsInUnit: 864e5
}, {
  key: "hours",
  millisecondsInUnit: 36e5
}, {
  key: "minutes",
  millisecondsInUnit: 6e4
}, {
  key: "seconds",
  millisecondsInUnit: 1e3
}];

function E(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: n ? 1 : 0
    };
  if (e > t || n && Number(e) + 1200 > Number(t)) return i;
  let s = Number(t) - Number(e);
  return m.forEach(e => {
    let {
      key: t,
      millisecondsInUnit: n
    } = e;
    i[t] = Math.floor(s / n), s -= i[t] * n
  }), i
}

function p(e, t) {
  return e.days > 0 ? t.days.format({
    days: e.days,
    hours: e.hours
  }) : e.hours > 0 ? t.hours.format({
    hours: e.hours,
    minutes: e.minutes
  }) : t.minutes.format({
    minutes: Math.max(1, e.minutes)
  })
}