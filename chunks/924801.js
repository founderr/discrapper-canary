"use strict";
n.r(t), n.d(t, {
  convertPrimeTimeSelectionToRRule: function() {
    return g
  },
  formatTimesForServer: function() {
    return T
  },
  generateTimeOptions: function() {
    return c
  },
  getDayOptions: function() {
    return f
  },
  getTimeRangesInNextWeek: function() {
    return I
  },
  primetimeToString: function() {
    return p
  }
}), n("653041"), n("47120");
var a = n("913527"),
  s = n.n(a),
  l = n("859334"),
  i = n("854698"),
  r = n("563040"),
  o = n("227120"),
  u = n("308083"),
  d = n("689938");
let c = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30,
      t = [{
        label: d.default.Messages.CLAN_PRIMETIME_MORNING,
        value: o.ExtendedTimeOptions.MORNING
      }, {
        label: d.default.Messages.CLAN_PRIMETIME_AFTERNOON,
        value: o.ExtendedTimeOptions.AFTERNOON
      }, {
        label: d.default.Messages.CLAN_PRIMETIME_EVENING,
        value: o.ExtendedTimeOptions.EVENING
      }, {
        label: d.default.Messages.CLAN_PRIMETIME_LATE_NIGHT,
        value: o.ExtendedTimeOptions.LATE_NIGHT
      }],
      n = s()(u.ARBITRARY_MIDNIGHT),
      a = s()(n).add(1, "day"),
      l = s()(n);
    for (; l < a;) {
      let n = (0, r.timeAtSpecificDay)(u.ARBITRARY_MIDNIGHT, l.clone()).format(u.LOCALE_TIME_FORMAT);
      t.push({
        label: n,
        value: n
      }), l.add(e, "minutes")
    }
    return t
  },
  f = () => [{
    value: o.DayOptions.WEEKDAYS,
    label: d.default.Messages.CLAN_PRIMETIME_WEEKDAYS
  }, {
    value: o.DayOptions.WEEKENDS,
    label: d.default.Messages.CLAN_PRIMETIME_WEEKENDS
  }, {
    value: o.DayOptions.SUNDAY,
    label: d.default.Messages.CLAN_PRIMETIME_SUNDAY
  }, {
    value: o.DayOptions.MONDAY,
    label: d.default.Messages.CLAN_PRIMETIME_MONDAY
  }, {
    value: o.DayOptions.TUESDAY,
    label: d.default.Messages.CLAN_PRIMETIME_TUESDAY
  }, {
    value: o.DayOptions.WEDNESDAY,
    label: d.default.Messages.CLAN_PRIMETIME_WEDNESDAY
  }, {
    value: o.DayOptions.THURSDAY,
    label: d.default.Messages.CLAN_PRIMETIME_THURSDAY
  }, {
    value: o.DayOptions.FRIDAY,
    label: d.default.Messages.CLAN_PRIMETIME_FRIDAY
  }, {
    value: o.DayOptions.SATURDAY,
    label: d.default.Messages.CLAN_PRIMETIME_SATURDAY
  }],
  E = e => {
    switch (e) {
      case o.DayOptions.WEEKDAYS:
        return 1;
      case o.DayOptions.WEEKENDS:
        return 6;
      case o.DayOptions.SUNDAY:
        return 0;
      case o.DayOptions.MONDAY:
        return 1;
      case o.DayOptions.TUESDAY:
        return 2;
      case o.DayOptions.WEDNESDAY:
        return 3;
      case o.DayOptions.THURSDAY:
        return 4;
      case o.DayOptions.FRIDAY:
        return 5;
      case o.DayOptions.SATURDAY:
        return 6
    }
  },
  h = e => {
    switch (e) {
      case o.DayOptions.WEEKDAYS:
        return d.default.Messages.CLAN_PRIMETIME_WEEKDAYS;
      case o.DayOptions.WEEKENDS:
        return d.default.Messages.CLAN_PRIMETIME_WEEKENDS;
      case o.DayOptions.SUNDAY:
        return d.default.Messages.CLAN_PRIMETIME_SUNDAY;
      case o.DayOptions.MONDAY:
        return d.default.Messages.CLAN_PRIMETIME_MONDAY;
      case o.DayOptions.TUESDAY:
        return d.default.Messages.CLAN_PRIMETIME_TUESDAY;
      case o.DayOptions.WEDNESDAY:
        return d.default.Messages.CLAN_PRIMETIME_WEDNESDAY;
      case o.DayOptions.THURSDAY:
        return d.default.Messages.CLAN_PRIMETIME_THURSDAY;
      case o.DayOptions.FRIDAY:
        return d.default.Messages.CLAN_PRIMETIME_FRIDAY;
      case o.DayOptions.SATURDAY:
        return d.default.Messages.CLAN_PRIMETIME_SATURDAY;
      default:
        return null
    }
  },
  _ = e => {
    switch (e) {
      case o.ExtendedTimeOptions.MORNING:
        return d.default.Messages.CLAN_PRIMETIME_RECURRING_MORNING;
      case o.ExtendedTimeOptions.AFTERNOON:
        return d.default.Messages.CLAN_PRIMETIME_RECURRING_AFTERNOON;
      case o.ExtendedTimeOptions.EVENING:
        return d.default.Messages.CLAN_PRIMETIME_RECURRING_EVENING;
      case o.ExtendedTimeOptions.LATE_NIGHT:
        return d.default.Messages.CLAN_PRIMETIME_RECURRING_LATE_NIGHT;
      default:
        return null
    }
  },
  C = (e, t) => {
    let n;
    switch (e) {
      case o.DayOptions.WEEKDAYS:
        n = d.default.Messages.CLAN_PRIMETIME_RECURRING_WEEKDAY;
        break;
      case o.DayOptions.WEEKENDS:
        n = d.default.Messages.CLAN_PRIMETIME_RECURRING_WEEKEND;
        break;
      default:
        n = h(e)
    }
    return d.default.Messages.CLAN_PRIMETIME_FORMATTED_RECURRING_TIME.format({
      day: n,
      time: t
    })
  },
  m = e => {
    let t = s()().startOf("day");
    switch (e) {
      case o.ExtendedTimeOptions.MORNING:
        return [t.hour(8), 4];
      case o.ExtendedTimeOptions.AFTERNOON:
        return [t.hour(12), 6];
      case o.ExtendedTimeOptions.EVENING:
        return [t.hour(18), 5];
      case o.ExtendedTimeOptions.LATE_NIGHT:
        return [t.hour(23), 5];
      default:
        return [s()(e, u.LOCALE_TIME_FORMAT), 2]
    }
  },
  S = e => {
    if (null == e.day || null == e.time) return null;
    let t = s()(),
      n = t.clone().add(1, "day"),
      a = t.day() >= 1 && 5 >= t.day(),
      l = n.day() >= 1 && 5 >= n.day(),
      i = e.time.clone(),
      r = t.clone();
    return e.day === o.DayOptions.WEEKDAYS ? r = a ? t.isAfter(i) ? l ? i.day(n.weekday()) : i.day(1) : i.day(t.weekday()) : e.time.day(1) : e.day === o.DayOptions.WEEKENDS ? a ? r = i.day(6) : t.isAfter(i) && (r = l ? i.day(6) : i.day(n.weekday())) : r = i.day(E(e.day)), t.isAfter(r) && (r = r.add(1, "week")), r
  };

function I(e) {
  let t = [];
  return e.forEach(e => {
    if (null == e.day || null == e.time) return null;
    let [n, a] = m(e.time);
    if (e.day === o.DayOptions.WEEKENDS) {
      let e = S({
          day: o.DayOptions.SATURDAY,
          time: n
        }),
        s = S({
          day: o.DayOptions.SUNDAY,
          time: n
        });
      null != e && t.push({
        start: e,
        end: e.clone().add(a, "hour")
      }), null != s && t.push({
        start: s,
        end: s.clone().add(a, "hour")
      })
    } else if (e.day === o.DayOptions.WEEKDAYS) {
      let s = S({
        day: e.day,
        time: n
      });
      null != s && t.push({
        start: s,
        end: s.clone().add(a, "hour")
      })
    } else {
      let s = S({
        day: e.day,
        time: n
      });
      null != s && t.push({
        start: s,
        end: s.clone().add(a, "hour")
      })
    }
  }), t
}

function T(e) {
  let t = [];
  return e.forEach(e => {
    if (null == e.day || null == e.time) return null;
    let [n, a] = m(e.time);
    if (e.day === o.DayOptions.WEEKENDS) {
      let e = S({
          day: o.DayOptions.SATURDAY,
          time: n
        }),
        s = S({
          day: o.DayOptions.SUNDAY,
          time: n
        });
      null != e && t.push({
        scheduled_start_time: e.toISOString(),
        scheduled_end_time: e.clone().add(a, "hour").toISOString(),
        days: [(0, i.convertJSDayToRRuleDay)(e.toDate().getUTCDay()).weekday]
      }), null != s && t.push({
        scheduled_start_time: s.toISOString(),
        scheduled_end_time: s.clone().add(a, "hour").toISOString(),
        days: [(0, i.convertJSDayToRRuleDay)(s.toDate().getUTCDay()).weekday]
      })
    } else if (e.day === o.DayOptions.WEEKDAYS) {
      let s = S({
        day: e.day,
        time: n
      });
      null != s && t.push({
        scheduled_start_time: s.toISOString(),
        scheduled_end_time: s.clone().add(a, "hour").toISOString(),
        days: (0, i.getValidWeekdays)(s)
      })
    } else {
      let s = S({
        day: e.day,
        time: n
      });
      null != s && t.push({
        scheduled_start_time: s.toISOString(),
        scheduled_end_time: s.clone().add(a, "hour").toISOString(),
        days: [(0, i.convertJSDayToRRuleDay)(s.toDate().getUTCDay()).weekday]
      })
    }
  }), t
}

function p(e) {
  if (null == e.day || null == e.time) return null;
  let {
    day: t,
    time: n
  } = e, a = _(n);
  if (null != a) return C(t, a);
  let s = h(e.day);
  return "".concat(s, " ").concat(n)
}

function g(e) {
  return T(e).map(e => ({
    start: e.scheduled_start_time,
    frequency: e.days.length > 1 ? l.RRule.DAILY : l.RRule.WEEKLY,
    interval: 1,
    byWeekday: e.days
  }))
}