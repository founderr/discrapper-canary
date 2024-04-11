"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("470079"),
  i = s("442837"),
  r = s("598077"),
  l = s("699516"),
  n = s("295226"),
  o = s("786397"),
  u = s("474936");

function d() {
  let e = (0, o.useTrialOffer)(u.PREMIUM_TIER_2_REFERRAL_TRIAL_ID),
    t = (0, i.useStateFromStores)([n.default], () => n.default.getReferrer(null == e ? void 0 : e.trial_id)),
    s = (0, i.useStateFromStores)([l.default], () => null == t || l.default.isBlocked(t.id));
  return a.useMemo(() => s || null == t ? null : new r.default(t), [t, s])
}