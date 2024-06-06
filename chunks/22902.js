"use strict";
i.r(s), i.d(s, {
  default: function() {
    return o
  }
});
var n = i("470079"),
  t = i("817460"),
  E = i("293810"),
  r = i("474936"),
  S = i("689938");

function o(e) {
  return n.useMemo(() => {
    var s;
    let i = E.TIER_TRIAL_INTERVALS.map(e => ({
        value: e,
        label: e.interval === r.SubscriptionIntervalTypes.DAY && 7 === e.interval_count ? S.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_TRIAL_TIME_LIMIT_DEFAULT_OPTION.format({
          defaultLimit: (0, t.formatPlanIntervalDuration)(e)
        }) : (0, t.formatPlanIntervalDuration)(e),
        isDefault: e.interval === r.SubscriptionIntervalTypes.DAY && 7 === e.interval_count
      })),
      n = null != e ? null === (s = i.find(s => null != s.value && s.value.interval === e.interval && s.value.interval_count === e.interval_count)) || void 0 === s ? void 0 : s.value : e;
    return {
      options: i,
      selectedOption: n
    }
  }, [e])
}