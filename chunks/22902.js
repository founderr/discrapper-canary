"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("470079"),
  n = s("817460"),
  i = s("293810"),
  E = s("474936"),
  l = s("689938");

function _(e) {
  return a.useMemo(() => {
    var t;
    let s = i.TIER_TRIAL_INTERVALS.map(e => ({
        value: e,
        label: e.interval === E.SubscriptionIntervalTypes.DAY && 7 === e.interval_count ? l.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_TRIAL_TIME_LIMIT_DEFAULT_OPTION.format({
          defaultLimit: (0, n.formatPlanIntervalDuration)(e)
        }) : (0, n.formatPlanIntervalDuration)(e),
        isDefault: e.interval === E.SubscriptionIntervalTypes.DAY && 7 === e.interval_count
      })),
      a = null != e ? null === (t = s.find(t => null != t.value && t.value.interval === e.interval && t.value.interval_count === e.interval_count)) || void 0 === t ? void 0 : t.value : e;
    return {
      options: s,
      selectedOption: a
    }
  }, [e])
}