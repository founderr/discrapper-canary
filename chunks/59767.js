"use strict";
E.r(t), E.d(t, {
  default: function() {
    return A
  }
});
var _ = E("884691"),
  s = E("577357"),
  a = E("677795"),
  T = E("646718"),
  n = E("782340");

function A(e) {
  return _.useMemo(() => {
    var t;
    let E = a.TIER_TRIAL_INTERVALS.map(e => ({
        value: e,
        label: e.interval === T.SubscriptionIntervalTypes.DAY && 7 === e.interval_count ? n.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_TRIAL_TIME_LIMIT_DEFAULT_OPTION.format({
          defaultLimit: (0, s.formatPlanIntervalDuration)(e)
        }) : (0, s.formatPlanIntervalDuration)(e),
        isDefault: e.interval === T.SubscriptionIntervalTypes.DAY && 7 === e.interval_count
      })),
      _ = null != e ? null === (t = E.find(t => null != t.value && t.value.interval === e.interval && t.value.interval_count === e.interval_count)) || void 0 === t ? void 0 : t.value : e;
    return {
      options: E,
      selectedOption: _
    }
  }, [e])
}