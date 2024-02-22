"use strict";
E.r(t), E.d(t, {
  getEmptyActivityFormatter: function() {
    return u
  },
  getActivityWindowTimestampFormatter: function() {
    return r
  },
  formatUserActivityTimestamp: function() {
    return l
  },
  formatLinkTimestamp: function() {
    return C
  },
  isUserAction: function() {
    return d
  },
  isGuildAction: function() {
    return o
  },
  displayTypeFromString: function() {
    return N
  }
}), E("222007");
var _ = E("866227"),
  T = E.n(_),
  n = E("922832"),
  I = E("782340");
let s = 3600,
  a = 24 * s,
  A = 2 * a,
  i = 7 * a,
  u = () => ({
    today: I.default.Messages.FAMILY_CENTER_EMPTY_ACTIVITY_TODAY,
    yesterday: I.default.Messages.FAMILY_CENTER_EMPTY_ACTIVITY_YESTERDAY,
    days: I.default.Messages.FAMILY_CENTER_EMPTY_ACTIVITY_DAYS
  }),
  r = e => e ? {
    today: I.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_PARENT_TODAY,
    yesterday: I.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_PARENT_YESTERDAY,
    days: I.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_PARENT_DAYS
  } : {
    today: I.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_TEEN_TODAY,
    yesterday: I.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_TEEN_YESTERDAY,
    days: I.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_DESCRIPTION_TEEN_DAYS
  },
  l = (e, t, E) => {
    let _ = T().diff(T(e), "s"),
      n = t(),
      I = T(e).format("LL");
    return I = _ < a ? n.today : _ < A ? n.yesterday : n.days.format({
      days: Math.min(Math.floor(_ / a), null != E ? E : 999)
    })
  },
  C = (e, t) => {
    let E = T().diff(T(e), "s"),
      _ = t(),
      n = T(e).format("LL");
    return n = E < 60 ? _.seconds : E < s ? _.minutes.format({
      count: Math.floor(E / 60)
    }) : E < a ? _.hours.format({
      count: Math.floor(E / s)
    }) : E < A ? _.yesterday : E < i ? _.days.format({
      count: Math.floor(E / a)
    }) : _.date.format({
      date: n
    })
  },
  d = e => e.display_type === n.TeenActionDisplayType.USER_ADD || e.display_type === n.TeenActionDisplayType.USER_INTERACTION || e.display_type === n.TeenActionDisplayType.USER_CALLED,
  o = e => e.display_type === n.TeenActionDisplayType.GUILD_ADD || e.display_type === n.TeenActionDisplayType.GUILD_INTERACTION,
  N = e => {
    let t = Object.values(n.TeenActionDisplayType);
    for (let E of t)
      if (E.toString() === e) return E
  }