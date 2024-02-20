"use strict";
n.r(t), n.d(t, {
  IGNORE_ANALYTICS_BREADCRUMB_EVENTS: function() {
    return i
  },
  filterThrottle: function() {
    return o
  }
});
var r = n("49111");
let i = [r.AnalyticEvents.START_SPEAKING, r.AnalyticEvents.START_LISTENING, r.AnalyticEvents.APP_OPENED, r.AnalyticEvents.NOTIFICATION_CLICKED, r.AnalyticEvents.EXPERIMENT_USER_TRIGGERED, r.AnalyticEvents.EXPERIMENT_DM_TRIGGERED, r.AnalyticEvents.EXPERIMENT_GUILD_TRIGGERED];

function o(e) {
  let {
    maxBudgetMinute: t,
    maxBudgetHour: n
  } = e, r = {
    minute: {
      slot: 0,
      budgetUsed: 0
    },
    hour: {
      slot: 0,
      budgetUsed: 0
    }
  };
  return () => {
    let e = Date.now(),
      i = Math.round(e / 1e3 / 60),
      o = Math.round(e / 1e3 / 60 / 60);
    return r.minute.slot !== i && (r.minute.slot = i, r.minute.budgetUsed = 0), r.hour.slot !== o && (r.hour.slot = o, r.hour.budgetUsed = 0), !!(r.minute.budgetUsed < t) && (r.minute.budgetUsed++, !!(r.hour.budgetUsed < n)) && (r.hour.budgetUsed++, !0)
  }
}