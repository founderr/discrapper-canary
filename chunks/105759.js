"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("470079"),
  r = s("442837"),
  i = s("598077"),
  n = s("699516"),
  l = s("295226"),
  o = s("786397"),
  u = s("474936");

function d() {
  let e = (0, o.useTrialOffer)(u.PREMIUM_TIER_2_REFERRAL_TRIAL_ID),
    t = (0, r.useStateFromStores)([l.default], () => l.default.getReferrer(null == e ? void 0 : e.trial_id)),
    s = (0, r.useStateFromStores)([n.default], () => null == t || n.default.isBlocked(t.id));
  return a.useMemo(() => s || null == t ? null : new i.default(t), [t, s])
}