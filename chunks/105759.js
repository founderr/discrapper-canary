"use strict";
r.r(t), r.d(t, {
  default: function() {
    return d
  }
});
var s = r("470079"),
  n = r("442837"),
  i = r("598077"),
  l = r("699516"),
  a = r("295226"),
  o = r("786397"),
  u = r("474936");

function d() {
  let e = (0, o.useTrialOffer)(u.PREMIUM_TIER_2_REFERRAL_TRIAL_ID),
    t = (0, n.useStateFromStores)([a.default], () => a.default.getReferrer(null == e ? void 0 : e.trial_id)),
    r = (0, n.useStateFromStores)([l.default], () => null == t || l.default.isBlocked(t.id));
  return s.useMemo(() => r || null == t ? null : new i.default(t), [t, r])
}