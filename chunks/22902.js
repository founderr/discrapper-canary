"use strict";
i.r(s), i.d(s, {
  default: function() {
    return o
  }
});
var t = i("470079"),
  n = i("817460"),
  E = i("293810"),
  r = i("474936"),
  S = i("689938");

function o(e) {
  return t.useMemo(() => {
    var s;
    let i = E.TIER_TRIAL_INTERVALS.map(e => ({
        value: e,
        label: e.interval === r.SubscriptionIntervalTypes.DAY && 7 === e.interval_count ? S.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_TRIAL_TIME_LIMIT_DEFAULT_OPTION.format({
          defaultLimit: (0, n.formatPlanIntervalDuration)(e)
        }) : (0, n.formatPlanIntervalDuration)(e),
        isDefault: e.interval === r.SubscriptionIntervalTypes.DAY && 7 === e.interval_count
      })),
      t = null != e ? null === (s = i.find(s => null != s.value && s.value.interval === e.interval && s.value.interval_count === e.interval_count)) || void 0 === s ? void 0 : s.value : e;
    return {
      options: i,
      selectedOption: t
    }
  }, [e])
}