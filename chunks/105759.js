"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var n = s("470079"),
  a = s("442837"),
  r = s("598077"),
  i = s("699516"),
  l = s("295226"),
  u = s("786397"),
  o = s("474936");

function c() {
  let e = (0, u.useTrialOffer)(o.PREMIUM_TIER_2_REFERRAL_TRIAL_ID),
    t = (0, a.useStateFromStores)([l.default], () => l.default.getReferrer(null == e ? void 0 : e.trial_id)),
    s = (0, a.useStateFromStores)([i.default], () => null == t || i.default.isBlocked(t.id));
  return n.useMemo(() => s || null == t ? null : new r.default(t), [t, s])
}