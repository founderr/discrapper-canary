"use strict";
n.r(t), n.d(t, {
  MAX_DAYS_AHEAD_AN_EVENT_CAN_START: function() {
    return d
  },
  MAX_DAYS_AHEAD_AN_EVENT_CAN_END: function() {
    return f
  },
  MAX_YEARS_AHEAD_RECURRING_EVENT: function() {
    return E
  },
  getRecurrenceOptions: function() {
    return R
  },
  getInitialEventStartDate: function() {
    return m
  },
  getEventTimeData: function() {
    return N
  },
  getBaseScheduleForRecurrence: function() {
    return x
  },
  getScheduleForRecurrenceWithException: function() {
    return L
  },
  getScheduleFromEventData: function() {
    return A
  },
  areDatesIdentical: function() {
    return y
  },
  areSchedulesIdentical: function() {
    return D
  },
  getRRule: function() {
    return M
  },
  generateNextRecurrences: function() {
    return j
  },
  getNextRecurrenceIdInEvent: function() {
    return O
  },
  isValidRecurrence: function() {
    return w
  },
  recurrenceOptionToRecurrenceRule: function() {
    return G
  },
  recurrenceRuleToOption: function() {
    return U
  },
  hasScheduleChanges: function() {
    return B
  }
}), n("222007"), n("424973");
var l = n("917351"),
  a = n("866227"),
  r = n.n(a),
  s = n("614137"),
  i = n("718517"),
  u = n("299039"),
  o = n("757767");
n("745049");
var c = n("782340");
let d = 365,
  f = d + 1,
  E = 4,
  h = [s.RRule.MO.weekday, s.RRule.TU.weekday, s.RRule.WE.weekday, s.RRule.TH.weekday, s.RRule.FR.weekday],
  g = [s.RRule.SU.weekday, s.RRule.MO.weekday, s.RRule.TU.weekday, s.RRule.WE.weekday, s.RRule.TH.weekday],
  _ = [s.RRule.TU.weekday, s.RRule.WE.weekday, s.RRule.TH.weekday, s.RRule.FR.weekday, s.RRule.SA.weekday],
  v = [s.RRule.SU.weekday, s.RRule.MO.weekday, s.RRule.TU.weekday, s.RRule.WE.weekday, s.RRule.TH.weekday, s.RRule.FR.weekday, s.RRule.SA.weekday],
  S = new Set([0, 6]);

function R(e) {
  let t = e.toDate(),
    n = Math.ceil(t.getDate() / 7),
    l = e.format("dddd"),
    a = [{
      value: o.RecurrenceOptions.NONE,
      label: c.default.Messages.CREATE_EVENT_RECUR_NONE
    }, {
      value: o.RecurrenceOptions.WEEKLY,
      label: c.default.Messages.CREATE_EVENT_RECUR_WEEKLY.format({
        weekday: l
      })
    }, {
      value: o.RecurrenceOptions.BIWEEKLY,
      label: c.default.Messages.CREATE_EVENT_RECUR_BIWEEKLY.format({
        weekday: l
      })
    }, {
      value: o.RecurrenceOptions.MONTHLY,
      label: c.default.Messages.CREATE_EVENT_RECUR_MONTHLY.format({
        nth: n,
        weekday: l
      })
    }, {
      value: o.RecurrenceOptions.YEARLY,
      label: c.default.Messages.CREATE_EVENT_RECUR_YEARLY.format({
        date: t.toLocaleString(c.default.getLocale(), {
          month: "short",
          day: "2-digit"
        })
      })
    }];
  return !S.has(t.getDay()) && a.push({
    value: o.RecurrenceOptions.WEEKDAY_ONLY,
    label: c.default.Messages.CREATE_EVENT_RECUR_WEEKDAYS
  }), a
}
let m = () => {
    let e = r().add(1, "hour"),
      t = e.hour();
    return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0)
  },
  T = (e, t) => e.format(e.get("years") === t.get("years") ? "ddd MMM Do \xb7 LT" : "ddd MMM Do, YYYY \xb7 LT"),
  C = (e, t) => {
    let n = e.diff(t, "days");
    return n > 1 ? T(e, t) : e.calendar(t)
  };

function N(e, t, n) {
  null == n && (n = r());
  let l = r(e),
    a = null != t && "" !== t ? r(t) : void 0,
    s = null != t && l.isSame(a, "day");
  return {
    startDateTimeString: C(l, n),
    endDateTimeString: null != a ? s ? a.format("LT") : T(a, n) : void 0,
    currentOrPastEvent: l <= n,
    upcomingEvent: l <= r().add(1, "hour"),
    withinStartWindow: l <= r().add(15, "minute"),
    diffMinutes: l.diff(n, "minutes")
  }
}

function p(e) {
  return new s.Weekday(v[e])
}

function I(e, t) {
  let n;
  return null != e && (n = {
    startDate: r(e),
    endDate: void 0
  }, null != t && (n.endDate = r(t))), n
}

function x(e, t) {
  let n = function(e) {
      return I(e.scheduled_start_time, e.scheduled_end_time)
    }(t),
    l = r(u.default.extractTimestamp(e)),
    a = (null == n ? void 0 : n.endDate) != null ? l.clone().add(n.endDate.diff(n.startDate)) : void 0;
  return {
    startDate: l,
    endDate: a
  }
}

function L(e, t) {
  var n;
  if (null == t) return e;
  let l = null !== (n = t.scheduled_end_time) && void 0 !== n ? n : e.endDate;
  return {
    startDate: null != t.scheduled_start_time ? r(t.scheduled_start_time) : e.startDate,
    endDate: null != l ? r(l) : void 0
  }
}

function A(e) {
  return I(e.scheduledStartTime, e.scheduledEndTime)
}

function y(e, t) {
  return null == e || null == t ? null == e && null == t : e.isSame(t)
}

function D(e, t) {
  return null == e || null == t ? null == e && null == t : y(e.startDate, t.startDate) && y(e.endDate, t.endDate)
}

function M(e) {
  var t;
  let n = null != e.byWeekday ? [...e.byWeekday] : null,
    l = null === (t = e.byNWeekday) || void 0 === t ? void 0 : t.map(e => new(0, s.Weekday)(e.day).nth(e.n)),
    a = new Date(e.start);
  return a.setMilliseconds(0), new s.RRule({
    dtstart: a,
    until: null != e.end ? new Date(e.end) : null,
    freq: e.frequency,
    interval: e.interval,
    byweekday: null != n ? n : l,
    bymonth: null != e.byMonth ? [...e.byMonth] : null,
    bymonthday: null != e.byMonthDay ? [...e.byMonthDay] : null,
    byyearday: null != e.byYearDay ? [...e.byYearDay] : null,
    count: e.count
  })
}

function j(e, t, n) {
  let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    a = [],
    r = n;
  r.setMilliseconds(0);
  let s = new Date;
  s.setFullYear(s.getFullYear() + E);
  for (let n = 0; n < e && r < s; n++) {
    let e = t.after(r, 0 === n && !l);
    if (null == e) break;
    r = e, a.push(e)
  }
  return a
}

function O(e) {
  var t;
  if (null == e) return null;
  let n = null == (t = e).recurrence_rule ? null : new Date(t.scheduled_start_time);
  return null != n ? u.default.fromTimestamp(Math.floor(n.getTime() / i.default.Millis.SECOND) * i.default.Millis.SECOND) : null
}

function w(e, t) {
  if (null == t || null == e) return !1;
  let n = new Date(e.start),
    l = u.default.extractTimestamp(t),
    a = new Date(l);
  if (n.getUTCHours() !== a.getUTCHours() || n.getUTCMinutes() !== a.getUTCMinutes() || n.getUTCSeconds() !== a.getUTCSeconds()) return !1;
  switch (e.frequency) {
    case s.RRule.WEEKLY:
      return n.getUTCDay() === a.getUTCDay();
    case s.RRule.YEARLY:
      return n.getUTCDate() === a.getUTCDate();
    default:
      return !0
  }
}

function k(e) {
  let t = p(e.toDate().getDay()),
    n = p(e.toDate().getUTCDay());
  return n.weekday - t.weekday > 0 ? _ : n.weekday - t.weekday < 0 ? g : h
}

function G(e, t) {
  let n = function(e, t) {
    let n = k(t),
      l = p(t.toDate().getDay()),
      a = Math.ceil(t.toDate().getDate() / 7),
      r = t.toDate();
    switch (r.setMilliseconds(0), e) {
      case o.RecurrenceOptions.NONE:
        return null;
      case o.RecurrenceOptions.WEEKLY:
        return new s.RRule({
          dtstart: r,
          freq: s.RRule.WEEKLY
        });
      case o.RecurrenceOptions.BIWEEKLY:
        return new s.RRule({
          dtstart: r,
          freq: s.RRule.WEEKLY,
          interval: 2
        });
      case o.RecurrenceOptions.MONTHLY:
        return new s.RRule({
          dtstart: r,
          freq: s.RRule.MONTHLY,
          byweekday: [l.nth(a)]
        });
      case o.RecurrenceOptions.YEARLY:
        return new s.RRule({
          dtstart: r,
          freq: s.RRule.YEARLY
        });
      case o.RecurrenceOptions.WEEKDAY_ONLY:
        return new s.RRule({
          dtstart: r,
          freq: s.RRule.DAILY,
          byweekday: n
        })
    }
  }(e, t);
  if (null == n) return null;
  let {
    dtstart: l,
    until: a,
    freq: r,
    interval: i,
    byweekday: u,
    bynweekday: c,
    bymonth: d,
    bymonthday: f,
    byyearday: E,
    count: h
  } = n.options, g = null == c ? void 0 : c.map(e => ({
    n: e[1],
    day: e[0]
  }));
  return {
    start: l.toISOString(),
    end: null == a ? void 0 : a.toISOString(),
    frequency: r,
    interval: i,
    byWeekday: u,
    byNWeekday: g,
    byMonth: d,
    byMonthDay: f,
    byYearDay: E,
    count: h
  }
}

function U(e, t) {
  if (null == t) return o.RecurrenceOptions.NONE;
  let n = M(t);
  switch (n.options.freq) {
    case s.RRule.WEEKLY:
      if (n.options.interval < 1 || n.options.interval > 2) return o.RecurrenceOptions.NONE;
      return 1 === n.options.interval ? o.RecurrenceOptions.WEEKLY : o.RecurrenceOptions.BIWEEKLY;
    case s.RRule.YEARLY:
      return o.RecurrenceOptions.YEARLY;
    case s.RRule.MONTHLY:
      return o.RecurrenceOptions.MONTHLY;
    case s.RRule.DAILY:
      if (!(0, l.isEqual)(n.options.byweekday, k(e))) return o.RecurrenceOptions.NONE;
      return o.RecurrenceOptions.WEEKDAY_ONLY;
    default:
      return o.RecurrenceOptions.NONE
  }
}

function B(e, t) {
  return (null == e ? void 0 : e.scheduled_start_time) !== t.scheduledStartTime || e.scheduled_end_time !== t.scheduledEndTime || !(0, l.isEqual)(e.recurrence_rule, t.recurrenceRule)
}