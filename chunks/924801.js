"use strict";
n.r(t), n.d(t, {
  formatTimesForServer: function() {
    return S
  },
  generateTimeOptions: function() {
    return d
  },
  getDayOptions: function() {
    return c
  },
  primetimeToString: function() {
    return I
  }
}), n("653041"), n("47120");
var a = n("913527"),
  s = n.n(a),
  l = n("854698"),
  i = n("563040"),
  r = n("227120"),
  o = n("308083"),
  u = n("689938");
let d = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30,
      t = [{
        label: u.default.Messages.CLAN_PRIMETIME_MORNING,
        value: r.ExtendedTimeOptions.MORNING
      }, {
        label: u.default.Messages.CLAN_PRIMETIME_AFTERNOON,
        value: r.ExtendedTimeOptions.AFTERNOON
      }, {
        label: u.default.Messages.CLAN_PRIMETIME_EVENING,
        value: r.ExtendedTimeOptions.EVENING
      }, {
        label: u.default.Messages.CLAN_PRIMETIME_LATE_NIGHT,
        value: r.ExtendedTimeOptions.LATE_NIGHT
      }],
      n = s()(o.ARBITRARY_MIDNIGHT),
      a = s()(n).add(1, "day"),
      l = s()(n);
    for (; l < a;) {
      let n = (0, i.timeAtSpecificDay)(o.ARBITRARY_MIDNIGHT, l.clone()).format(o.LOCALE_TIME_FORMAT);
      t.push({
        label: n,
        value: n
      }), l.add(e, "minutes")
    }
    return t
  },
  c = () => [{
    value: r.DayOptions.WEEKDAYS,
    label: u.default.Messages.CLAN_PRIMETIME_WEEKDAYS
  }, {
    value: r.DayOptions.WEEKENDS,
    label: u.default.Messages.CLAN_PRIMETIME_WEEKENDS
  }, {
    value: r.DayOptions.SUNDAY,
    label: u.default.Messages.CLAN_PRIMETIME_SUNDAY
  }, {
    value: r.DayOptions.MONDAY,
    label: u.default.Messages.CLAN_PRIMETIME_MONDAY
  }, {
    value: r.DayOptions.TUESDAY,
    label: u.default.Messages.CLAN_PRIMETIME_TUESDAY
  }, {
    value: r.DayOptions.WEDNESDAY,
    label: u.default.Messages.CLAN_PRIMETIME_WEDNESDAY
  }, {
    value: r.DayOptions.THURSDAY,
    label: u.default.Messages.CLAN_PRIMETIME_THURSDAY
  }, {
    value: r.DayOptions.FRIDAY,
    label: u.default.Messages.CLAN_PRIMETIME_FRIDAY
  }, {
    value: r.DayOptions.SATURDAY,
    label: u.default.Messages.CLAN_PRIMETIME_SATURDAY
  }],
  f = e => {
    switch (e) {
      case r.DayOptions.WEEKDAYS:
        return 1;
      case r.DayOptions.WEEKENDS:
        return 6;
      case r.DayOptions.SUNDAY:
        return 0;
      case r.DayOptions.MONDAY:
        return 1;
      case r.DayOptions.TUESDAY:
        return 2;
      case r.DayOptions.WEDNESDAY:
        return 3;
      case r.DayOptions.THURSDAY:
        return 4;
      case r.DayOptions.FRIDAY:
        return 5;
      case r.DayOptions.SATURDAY:
        return 6
    }
  },
  E = e => {
    switch (e) {
      case r.DayOptions.WEEKDAYS:
        return u.default.Messages.CLAN_PRIMETIME_WEEKDAYS;
      case r.DayOptions.WEEKENDS:
        return u.default.Messages.CLAN_PRIMETIME_WEEKENDS;
      case r.DayOptions.SUNDAY:
        return u.default.Messages.CLAN_PRIMETIME_SUNDAY;
      case r.DayOptions.MONDAY:
        return u.default.Messages.CLAN_PRIMETIME_MONDAY;
      case r.DayOptions.TUESDAY:
        return u.default.Messages.CLAN_PRIMETIME_TUESDAY;
      case r.DayOptions.WEDNESDAY:
        return u.default.Messages.CLAN_PRIMETIME_WEDNESDAY;
      case r.DayOptions.THURSDAY:
        return u.default.Messages.CLAN_PRIMETIME_THURSDAY;
      case r.DayOptions.FRIDAY:
        return u.default.Messages.CLAN_PRIMETIME_FRIDAY;
      case r.DayOptions.SATURDAY:
        return u.default.Messages.CLAN_PRIMETIME_SATURDAY;
      default:
        return null
    }
  },
  _ = e => {
    switch (e) {
      case r.ExtendedTimeOptions.MORNING:
        return u.default.Messages.CLAN_PRIMETIME_RECURRING_MORNING;
      case r.ExtendedTimeOptions.AFTERNOON:
        return u.default.Messages.CLAN_PRIMETIME_RECURRING_AFTERNOON;
      case r.ExtendedTimeOptions.EVENING:
        return u.default.Messages.CLAN_PRIMETIME_RECURRING_EVENING;
      case r.ExtendedTimeOptions.LATE_NIGHT:
        return u.default.Messages.CLAN_PRIMETIME_RECURRING_LATE_NIGHT;
      default:
        return null
    }
  },
  h = (e, t) => {
    let n;
    switch (e) {
      case r.DayOptions.WEEKDAYS:
        n = u.default.Messages.CLAN_PRIMETIME_RECURRING_WEEKDAY;
        break;
      case r.DayOptions.WEEKENDS:
        n = u.default.Messages.CLAN_PRIMETIME_RECURRING_WEEKEND;
        break;
      default:
        n = E(e)
    }
    return u.default.Messages.CLAN_PRIMETIME_FORMATTED_RECURRING_TIME.format({
      day: n,
      time: t
    })
  },
  C = e => {
    let t = s()().startOf("day");
    switch (e) {
      case r.ExtendedTimeOptions.MORNING:
        return [t.hour(8), 4];
      case r.ExtendedTimeOptions.AFTERNOON:
        return [t.hour(12), 6];
      case r.ExtendedTimeOptions.EVENING:
        return [t.hour(18), 5];
      case r.ExtendedTimeOptions.LATE_NIGHT:
        return [t.hour(23), 5];
      default:
        return [s()(e, o.LOCALE_TIME_FORMAT), 2]
    }
  },
  m = e => {
    if (null == e.day || null == e.time) return null;
    let t = s()(),
      n = t.clone().add(1, "day"),
      a = t.day() >= 1 && 5 >= t.day(),
      l = n.day() >= 1 && 5 >= n.day(),
      i = e.time.clone(),
      o = t.clone();
    return e.day === r.DayOptions.WEEKDAYS ? o = a ? t.isAfter(i) ? l ? i.day(n.weekday()) : i.day(1) : i.day(t.weekday()) : e.time.day(1) : e.day === r.DayOptions.WEEKENDS ? a ? o = i.day(6) : t.isAfter(i) && (o = l ? i.day(6) : i.day(n.weekday())) : o = i.day(f(e.day)), t.isAfter(o) && (o = o.add(1, "week")), o
  };

function S(e) {
  let t = [];
  return e.forEach(e => {
    if (null == e.day || null == e.time) return null;
    let [n, a] = C(e.time);
    if (e.day === r.DayOptions.WEEKENDS) {
      let e = m({
          day: r.DayOptions.SATURDAY,
          time: n
        }),
        s = m({
          day: r.DayOptions.SUNDAY,
          time: n
        });
      null != e && t.push({
        scheduled_start_time: e.toISOString(),
        scheduled_end_time: e.clone().add(a, "hour").toISOString(),
        days: [(0, l.convertJSDayToRRuleDay)(e.toDate().getUTCDay()).weekday]
      }), null != s && t.push({
        scheduled_start_time: s.toISOString(),
        scheduled_end_time: s.clone().add(a, "hour").toISOString(),
        days: [(0, l.convertJSDayToRRuleDay)(s.toDate().getUTCDay()).weekday]
      })
    } else if (e.day === r.DayOptions.WEEKDAYS) {
      let s = m({
        day: e.day,
        time: n
      });
      null != s && t.push({
        scheduled_start_time: s.toISOString(),
        scheduled_end_time: s.clone().add(a, "hour").toISOString(),
        days: (0, l.getValidWeekdays)(s)
      })
    } else {
      let s = m({
        day: e.day,
        time: n
      });
      null != s && t.push({
        scheduled_start_time: s.toISOString(),
        scheduled_end_time: s.clone().add(a, "hour").toISOString(),
        days: [(0, l.convertJSDayToRRuleDay)(s.toDate().getUTCDay()).weekday]
      })
    }
  }), t
}

function I(e) {
  if (null == e.day || null == e.time) return null;
  let {
    day: t,
    time: n
  } = e, a = _(n);
  if (null != a) return h(t, a);
  let s = E(e.day);
  return "".concat(s, " ").concat(n)
}