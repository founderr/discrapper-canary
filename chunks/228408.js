"use strict";
a.r(t), a.d(t, {
  useEmitAppealIngestionEvent: function() {
    return c
  }
});
var s = a("884691"),
  l = a("446674"),
  n = a("599110"),
  i = a("646356"),
  o = a("132206"),
  d = a("170213"),
  r = a("49111");
let c = () => {
  let e = (0, l.useStateFromStores)([i.default], () => i.default.getAppealClassificationId()),
    t = (0, o.useSafetyHubAccountStanding)(),
    a = (0, l.useStateFromStores)([i.default], () => i.default.getIsDsaEligible());
  return s.useCallback(s => {
    n.default.track(r.AnalyticEvents.SAFETY_HUB_ACTION, {
      action: s,
      account_standing: t.state,
      classification_ids: null != e ? [Number(e)] : null,
      source: d.SafetyHubAnalyticsActionSource.AppealIngestion,
      is_dsa_eligible: a
    })
  }, [t.state, e, a])
}