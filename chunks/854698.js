"use strict";
n.d(t, {
  BP: function() {
    return Y
  },
  DK: function() {
    return B
  },
  G3: function() {
    return E
  },
  Ho: function() {
    return w
  },
  Ib: function() {
    return I
  },
  P8: function() {
    return R
  },
  PJ: function() {
    return x
  },
  Rp: function() {
    return k
  },
  Uq: function() {
    return b
  },
  Y4: function() {
    return G
  },
  hn: function() {
    return T
  },
  iA: function() {
    return P
  },
  ib: function() {
    return g
  },
  lh: function() {
    return j
  },
  mF: function() {
    return H
  },
  ub: function() {
    return L
  },
  v1: function() {
    return U
  },
  x6: function() {
    return y
  },
  zi: function() {
    return F
  }
}), n(47120), n(653041);
var i = n(392711),
  r = n(913527),
  s = n.n(r),
  o = n(859334),
  a = n(594174),
  l = n(70956),
  u = n(709054),
  _ = n(849464),
  c = n(765305),
  d = n(689938);
let E = 365,
  I = 366,
  T = 4,
  h = [o.Ci.MO.weekday, o.Ci.TU.weekday, o.Ci.WE.weekday, o.Ci.TH.weekday, o.Ci.FR.weekday],
  f = [o.Ci.SU.weekday, o.Ci.MO.weekday, o.Ci.TU.weekday, o.Ci.WE.weekday, o.Ci.TH.weekday],
  S = [o.Ci.TU.weekday, o.Ci.WE.weekday, o.Ci.TH.weekday, o.Ci.FR.weekday, o.Ci.SA.weekday],
  A = [o.Ci.SA.weekday, o.Ci.SU.weekday],
  N = [o.Ci.FR.weekday, o.Ci.SA.weekday],
  m = [o.Ci.SU.weekday, o.Ci.MO.weekday],
  O = [o.Ci.SU.weekday, o.Ci.MO.weekday, o.Ci.TU.weekday, o.Ci.WE.weekday, o.Ci.TH.weekday, o.Ci.FR.weekday, o.Ci.SA.weekday],
  p = new Set([0, 6]);

function R(e) {
  var t;
  let n = e.toDate(),
    i = Math.ceil(n.getDate() / 7),
    r = e.format("dddd"),
    s = [{
      value: _.z.NONE,
      label: d.Z.Messages.CREATE_EVENT_RECUR_NONE
    }, {
      value: _.z.WEEKLY,
      label: d.Z.Messages.CREATE_EVENT_RECUR_WEEKLY.format({
        weekday: r
      })
    }, {
      value: _.z.BIWEEKLY,
      label: d.Z.Messages.CREATE_EVENT_RECUR_BIWEEKLY.format({
        weekday: r
      })
    }, {
      value: _.z.MONTHLY,
      label: d.Z.Messages.CREATE_EVENT_RECUR_MONTHLY.format({
        nth: i,
        weekday: r
      })
    }, {
      value: _.z.YEARLY,
      label: d.Z.Messages.CREATE_EVENT_RECUR_YEARLY.format({
        date: n.toLocaleString(d.Z.getLocale(), {
          month: "short",
          day: "2-digit"
        })
      })
    }];
  return p.has(n.getDay()) ? (null === (t = a.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && s.push({
    value: _.z.WEEKEND_ONLY,
    label: d.Z.Messages.CREATE_EVENT_RECUR_WEEKENDS
  }) : s.push({
    value: _.z.WEEKDAY_ONLY,
    label: d.Z.Messages.CREATE_EVENT_RECUR_WEEKDAYS
  }), s
}
let g = () => {
    let e = s()().add(1, "hour"),
      t = e.hour();
    return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0)
  },
  C = (e, t) => e.format(e.get("years") === t.get("years") ? "ddd MMM Do \xb7 LT" : "ddd MMM Do, YYYY \xb7 LT"),
  v = (e, t) => e.diff(t, "days") > 1 ? C(e, t) : e.calendar(t);

function L(e, t, n) {
  null == n && (n = s()());
  let i = s()(e),
    r = null != t && "" !== t ? s()(t) : void 0,
    o = null != t && i.isSame(r, "day");
  return {
    startDateTimeString: v(i, n),
    endDateTimeString: null != r ? o ? r.format("LT") : C(r, n) : void 0,
    currentOrPastEvent: i <= n,
    upcomingEvent: i <= s()().add(1, "hour"),
    withinStartWindow: i <= s()().add(15, "minute"),
    diffMinutes: i.diff(n, "minutes")
  }
}

function D(e) {
  return new o.OG(O[e])
}

function M(e, t) {
  let n;
  return null != e && (n = {
    startDate: s()(e),
    endDate: void 0
  }, null != t && (n.endDate = s()(t))), n
}

function P(e, t) {
  let n = function(e) {
      return M(e.scheduled_start_time, e.scheduled_end_time)
    }(t),
    i = s()(u.default.extractTimestamp(e)),
    r = (null == n ? void 0 : n.endDate) != null ? i.clone().add(n.endDate.diff(n.startDate)) : void 0;
  return {
    startDate: i,
    endDate: r
  }
}

function y(e, t) {
  var n;
  if (null == t) return e;
  let i = null !== (n = t.scheduled_end_time) && void 0 !== n ? n : e.endDate;
  return {
    startDate: null != t.scheduled_start_time ? s()(t.scheduled_start_time) : e.startDate,
    endDate: null != i ? s()(i) : void 0
  }
}

function U(e) {
  return M(e.scheduledStartTime, e.scheduledEndTime)
}

function b(e, t) {
  return null == e || null == t ? null == e && null == t : e.isSame(t)
}

function G(e, t) {
  return null == e || null == t ? null == e && null == t : b(e.startDate, t.startDate) && b(e.endDate, t.endDate)
}

function w(e) {
  var t;
  let n = null != e.byWeekday ? [...e.byWeekday] : null,
    i = null === (t = e.byNWeekday) || void 0 === t ? void 0 : t.map(e => new o.OG(e.day, e.n)),
    r = new Date(e.start);
  return r.setMilliseconds(0), new o.Ci({
    dtstart: r,
    until: null != e.end ? new Date(e.end) : null,
    freq: e.frequency,
    interval: e.interval,
    byweekday: null != n ? n : i,
    bymonth: null != e.byMonth ? [...e.byMonth] : null,
    bymonthday: null != e.byMonthDay ? [...e.byMonthDay] : null,
    byyearday: null != e.byYearDay ? [...e.byYearDay] : null,
    count: e.count
  })
}

function x(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    r = [],
    s = n;
  s.setMilliseconds(0);
  let o = new Date;
  o.setFullYear(o.getFullYear() + T);
  for (let n = 0; n < e && s < o; n++) {
    let e = t.after(s, 0 === n && !i);
    if (null == e) break;
    s = e, r.push(e)
  }
  return r
}

function B(e) {
  var t;
  if (null == e) return null;
  let n = null == (t = e).recurrence_rule ? null : new Date(t.scheduled_start_time);
  return null != n ? u.default.fromTimestamp(Math.floor(n.getTime() / l.Z.Millis.SECOND) * l.Z.Millis.SECOND) : null
}

function k(e, t) {
  if (null == t || null == e) return !1;
  let n = new Date(e.start),
    i = new Date(u.default.extractTimestamp(t));
  if (n.getUTCHours() !== i.getUTCHours() || n.getUTCMinutes() !== i.getUTCMinutes() || n.getUTCSeconds() !== i.getUTCSeconds()) return !1;
  switch (e.frequency) {
    case o.Ci.WEEKLY:
      return n.getUTCDay() === i.getUTCDay();
    case o.Ci.YEARLY:
      return n.getUTCDate() === i.getUTCDate();
    default:
      return !0
  }
}

function V(e) {
  let t = D(e.toDate().getDay()),
    n = D(e.toDate().getUTCDay());
  return n.weekday - t.weekday > 0 ? S : n.weekday - t.weekday < 0 ? f : h
}

function Z(e) {
  let t = D(e.toDate().getDay()),
    n = D(e.toDate().getUTCDay());
  return n.weekday - t.weekday > 0 ? m : n.weekday - t.weekday < 0 ? N : A
}

function H(e, t) {
  let n = function(e, t) {
    let n = V(t),
      i = Z(t),
      r = D(t.toDate().getUTCDay()),
      s = Math.ceil(t.toDate().getUTCDate() / 7),
      a = t.toDate();
    switch (a.setMilliseconds(0), e) {
      case _.z.NONE:
        return null;
      case _.z.WEEKLY:
        return new o.Ci({
          dtstart: a,
          freq: o.Ci.WEEKLY
        });
      case _.z.BIWEEKLY:
        return new o.Ci({
          dtstart: a,
          freq: o.Ci.WEEKLY,
          interval: 2
        });
      case _.z.MONTHLY:
        return new o.Ci({
          dtstart: a,
          freq: o.Ci.MONTHLY,
          byweekday: [r.nth(s)]
        });
      case _.z.YEARLY:
        return new o.Ci({
          dtstart: a,
          freq: o.Ci.YEARLY
        });
      case _.z.WEEKDAY_ONLY:
        return new o.Ci({
          dtstart: a,
          freq: o.Ci.DAILY,
          byweekday: n
        });
      case _.z.WEEKEND_ONLY:
        return new o.Ci({
          dtstart: a,
          freq: o.Ci.DAILY,
          byweekday: i
        })
    }
  }(e, t);
  if (null == n) return null;
  let {
    dtstart: i,
    until: r,
    freq: s,
    interval: a,
    byweekday: l,
    bynweekday: u,
    bymonth: c,
    bymonthday: d,
    byyearday: E,
    count: I
  } = n.options, T = null == u ? void 0 : u.map(e => ({
    n: e[1],
    day: e[0]
  }));
  return {
    start: i.toISOString(),
    end: null == r ? void 0 : r.toISOString(),
    frequency: s,
    interval: a,
    byWeekday: l,
    byNWeekday: T,
    byMonth: c,
    byMonthDay: d,
    byYearDay: E,
    count: I
  }
}

function F(e, t) {
  if (null == t) return _.z.NONE;
  let n = w(t);
  switch (n.options.freq) {
    case o.Ci.WEEKLY:
      if (n.options.interval < 1 || n.options.interval > 2) return _.z.NONE;
      return 1 === n.options.interval ? _.z.WEEKLY : _.z.BIWEEKLY;
    case o.Ci.YEARLY:
      return _.z.YEARLY;
    case o.Ci.MONTHLY:
      return _.z.MONTHLY;
    case o.Ci.DAILY:
      if ((0, i.isEqual)(n.options.byweekday, V(e))) return _.z.WEEKDAY_ONLY;
      if ((0, i.isEqual)(n.options.byweekday, Z(e))) return _.z.WEEKEND_ONLY;
      return _.z.NONE;
    default:
      return _.z.NONE
  }
}

function Y(e, t) {
  return (null == e ? void 0 : e.scheduled_start_time) !== t.scheduledStartTime || e.scheduled_end_time !== t.scheduledEndTime || !(0, i.isEqual)(e.recurrence_rule, t.recurrenceRule)
}

function j(e, t, n) {
  return (null == e ? void 0 : e.is_canceled) ? c.p1.CANCELED : t < n ? c.p1.COMPLETED : null != e ? c.p1.SCHEDULED : null
}