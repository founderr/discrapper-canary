"use strict";
n.r(t), n.d(t, {
  getEmptyActivityFormatter: function() {
    return c
  },
  getActivityWindowTimestampFormatter: function() {
    return f
  },
  formatUserActivityTimestamp: function() {
    return E
  },
  formatLinkTimestamp: function() {
    return _
  },
  isUserAction: function() {
    return h
  },
  isGuildAction: function() {
    return C
  },
  displayTypeFromString: function() {
    return I
  }
}), n("222007");
var a = n("866227"),
  s = n.n(a),
  l = n("922832"),
  i = n("782340");
let r = 3600,
  o = 24 * r,
  u = 2 * o,
  d = 7 * o,
  c = () => ({
    today: i.default.Messages.FAMILY_CENTER_EMPTY_ACTIVITY_TODAY,
    yesterday: i.default.Messages.FAMILY_CENTER_EMPTY_ACTIVITY_YESTERDAY,
    days: i.default.Messages.FAMILY_CENTER_EMPTY_ACTIVITY_DAYS
  }),
  f = e => e ? {
    today: i.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_PARENT_TODAY,
    yesterday: i.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_PARENT_YESTERDAY,
    days: i.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_PARENT_DAYS
  } : {
    today: i.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_TEEN_TODAY,
    yesterday: i.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_TEEN_YESTERDAY,
    days: i.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_TEEN_DAYS
  },
  E = (e, t, n) => {
    let a = s().diff(s(e), "s"),
      l = t(),
      i = s(e).format("LL");
    return i = a < o ? l.today : a < u ? l.yesterday : l.days.format({
      days: Math.min(Math.floor(a / o), null != n ? n : 999)
    })
  },
  _ = (e, t) => {
    let n = s().diff(s(e), "s"),
      a = t(),
      l = s(e).format("LL");
    return l = n < 60 ? a.seconds : n < r ? a.minutes.format({
      count: Math.floor(n / 60)
    }) : n < o ? a.hours.format({
      count: Math.floor(n / r)
    }) : n < u ? a.yesterday : n < d ? a.days.format({
      count: Math.floor(n / o)
    }) : a.date.format({
      date: l
    })
  },
  h = e => e.display_type === l.TeenActionDisplayType.USER_ADD || e.display_type === l.TeenActionDisplayType.USER_INTERACTION || e.display_type === l.TeenActionDisplayType.USER_CALLED,
  C = e => e.display_type === l.TeenActionDisplayType.GUILD_ADD || e.display_type === l.TeenActionDisplayType.GUILD_INTERACTION,
  I = e => {
    let t = Object.values(l.TeenActionDisplayType);
    for (let n of t)
      if (n.toString() === e) return n
  }