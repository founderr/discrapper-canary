"use strict";
n.r(t), n.d(t, {
  MAX_DAYS_AHEAD_AN_EVENT_CAN_START: function() {
    return s
  },
  MAX_DAYS_AHEAD_AN_EVENT_CAN_END: function() {
    return c
  },
  MAX_YEARS_AHEAD_RECURRING_EVENT: function() {
    return E
  },
  getInitialEventStartDate: function() {
    return T
  },
  getEventTimeData: function() {
    return v
  },
  getBaseScheduleForRecurrence: function() {
    return R
  },
  getScheduleForRecurrenceWithException: function() {
    return D
  },
  getScheduleFromEventData: function() {
    return I
  },
  areDatesIdentical: function() {
    return M
  },
  areSchedulesIdentical: function() {
    return A
  },
  getRRule: function() {
    return y
  },
  generateNextRecurrences: function() {
    return L
  },
  getNextRecurrenceIdInEvent: function() {
    return O
  },
  isValidRecurrence: function() {
    return p
  },
  recurrenceOptionToRecurrenceRule: function() {
    return U
  },
  recurrenceRuleToOption: function() {
    return w
  }
}), n("222007"), n("424973");
var l = n("917351"),
  u = n("866227"),
  r = n.n(u),
  i = n("614137"),
  a = n("249654"),
  d = n("718517"),
  o = n("757767");
n("745049");
let s = 365,
  c = s + 1,
  E = 4,
  f = [i.RRule.MO.weekday, i.RRule.TU.weekday, i.RRule.WE.weekday, i.RRule.TH.weekday, i.RRule.FR.weekday],
  _ = [i.RRule.SU.weekday, i.RRule.MO.weekday, i.RRule.TU.weekday, i.RRule.WE.weekday, i.RRule.TH.weekday],
  N = [i.RRule.TU.weekday, i.RRule.WE.weekday, i.RRule.TH.weekday, i.RRule.FR.weekday, i.RRule.SA.weekday],
  h = [i.RRule.SU.weekday, i.RRule.MO.weekday, i.RRule.TU.weekday, i.RRule.WE.weekday, i.RRule.TH.weekday, i.RRule.FR.weekday, i.RRule.SA.weekday],
  T = () => {
    let e = r().add(1, "hour"),
      t = e.hour();
    return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0)
  },
  S = (e, t) => e.format(e.get("years") === t.get("years") ? "ddd MMM Do \xb7 LT" : "ddd MMM Do, YYYY \xb7 LT"),
  m = (e, t) => {
    let n = e.diff(t, "days");
    return n > 1 ? S(e, t) : e.calendar(t)
  };

function v(e, t, n) {
  null == n && (n = r());
  let l = r(e),
    u = null != t && "" !== t ? r(t) : void 0,
    i = null != t && l.isSame(u, "day");
  return {
    startDateTimeString: m(l, n),
    endDateTimeString: null != u ? i ? u.format("LT") : S(u, n) : void 0,
    currentOrPastEvent: l <= n,
    upcomingEvent: l <= r().add(1, "hour"),
    withinStartWindow: l <= r().add(15, "minute"),
    diffMinutes: l.diff(n, "minutes")
  }
}

function C(e) {
  return new i.Weekday(h[e])
}

function g(e, t) {
  let n;
  return null != e && (n = {
    startDate: r(e),
    endDate: void 0
  }, null != t && (n.endDate = r(t))), n
}

function R(e, t) {
  let n = function(e) {
      return g(e.scheduled_start_time, e.scheduled_end_time)
    }(t),
    l = r(a.default.extractTimestamp(e)),
    u = (null == n ? void 0 : n.endDate) != null ? l.clone().add(n.endDate.diff(n.startDate)) : void 0;
  return {
    startDate: l,
    endDate: u
  }
}

function D(e, t) {
  var n;
  if (null == t) return e;
  let l = null !== (n = t.scheduled_end_time) && void 0 !== n ? n : e.endDate;
  return {
    startDate: null != t.scheduled_start_time ? r(t.scheduled_start_time) : e.startDate,
    endDate: null != l ? r(l) : void 0
  }
}

function I(e) {
  return g(e.scheduledStartTime, e.scheduledEndTime)
}

function M(e, t) {
  return null == e || null == t ? null == e && null == t : e.isSame(t)
}

function A(e, t) {
  return null == e || null == t ? null == e && null == t : M(e.startDate, t.startDate) && M(e.endDate, t.endDate)
}

function y(e) {
  var t;
  let n = null != e.byWeekday ? [...e.byWeekday] : null,
    l = null === (t = e.byNWeekday) || void 0 === t ? void 0 : t.map(e => new(0, i.Weekday)(e.day).nth(e.n)),
    u = new Date(e.start);
  return u.setMilliseconds(0), new i.RRule({
    dtstart: u,
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

function L(e, t, n) {
  let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    u = [],
    r = n;
  r.setMilliseconds(0);
  let i = new Date;
  i.setFullYear(i.getFullYear() + E);
  for (let n = 0; n < e && r < i; n++) {
    let e = t.after(r, 0 === n && !l);
    if (null == e) break;
    r = e, u.push(e)
  }
  return u
}

function O(e) {
  var t;
  if (null == e) return null;
  let n = null == (t = e).recurrence_rule ? null : new Date(t.scheduled_start_time);
  return null != n ? a.default.fromTimestamp(Math.floor(n.getTime() / d.default.Millis.SECOND) * d.default.Millis.SECOND) : null
}

function p(e, t) {
  if (null == t || null == e) return !1;
  let n = new Date(e.start),
    l = a.default.extractTimestamp(t),
    u = new Date(l);
  if (n.getUTCHours() !== u.getUTCHours() || n.getUTCMinutes() !== u.getUTCMinutes() || n.getUTCSeconds() !== u.getUTCSeconds()) return !1;
  switch (e.frequency) {
    case i.RRule.WEEKLY:
      return n.getUTCDay() === u.getUTCDay();
    case i.RRule.YEARLY:
      return n.getUTCDate() === u.getUTCDate();
    default:
      return !0
  }
}

function G(e) {
  let t = C(e.toDate().getDay()),
    n = C(e.toDate().getUTCDay());
  return n.weekday - t.weekday > 0 ? N : n.weekday - t.weekday < 0 ? _ : f
}

function U(e, t) {
  let n = function(e, t) {
    let n = G(t),
      l = C(t.toDate().getDay()),
      u = Math.ceil(t.toDate().getDate() / 7),
      r = t.toDate();
    switch (r.setMilliseconds(0), e) {
      case o.RecurrenceOptions.NONE:
        return null;
      case o.RecurrenceOptions.WEEKLY:
        return new i.RRule({
          dtstart: r,
          freq: i.RRule.WEEKLY
        });
      case o.RecurrenceOptions.BIWEEKLY:
        return new i.RRule({
          dtstart: r,
          freq: i.RRule.WEEKLY,
          interval: 2
        });
      case o.RecurrenceOptions.MONTHLY:
        return new i.RRule({
          dtstart: r,
          freq: i.RRule.MONTHLY,
          byweekday: [l.nth(u)]
        });
      case o.RecurrenceOptions.YEARLY:
        return new i.RRule({
          dtstart: r,
          freq: i.RRule.YEARLY
        });
      case o.RecurrenceOptions.WEEKDAY_ONLY:
        return new i.RRule({
          dtstart: r,
          freq: i.RRule.DAILY,
          byweekday: n
        })
    }
  }(e, t);
  if (null == n) return null;
  let {
    dtstart: l,
    until: u,
    freq: r,
    interval: a,
    byweekday: d,
    bynweekday: s,
    bymonth: c,
    bymonthday: E,
    byyearday: f,
    count: _
  } = n.options, N = null == s ? void 0 : s.map(e => ({
    n: e[1],
    day: e[0]
  }));
  return {
    start: l.toISOString(),
    end: null == u ? void 0 : u.toISOString(),
    frequency: r,
    interval: a,
    byWeekday: d,
    byNWeekday: N,
    byMonth: c,
    byMonthDay: E,
    byYearDay: f,
    count: _
  }
}

function w(e, t) {
  if (null == t) return o.RecurrenceOptions.NONE;
  let n = y(t);
  switch (n.options.freq) {
    case i.RRule.WEEKLY:
      if (n.options.interval < 1 || n.options.interval > 2) return o.RecurrenceOptions.NONE;
      return 1 === n.options.interval ? o.RecurrenceOptions.WEEKLY : o.RecurrenceOptions.BIWEEKLY;
    case i.RRule.YEARLY:
      return o.RecurrenceOptions.YEARLY;
    case i.RRule.MONTHLY:
      return o.RecurrenceOptions.MONTHLY;
    case i.RRule.DAILY:
      if (!(0, l.isEqual)(n.options.byweekday, G(e))) return o.RecurrenceOptions.NONE;
      return o.RecurrenceOptions.WEEKDAY_ONLY;
    default:
      return o.RecurrenceOptions.NONE
  }
}