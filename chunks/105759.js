"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var s = n("470079"),
  i = n("442837"),
  r = n("598077"),
  l = n("699516"),
  a = n("295226"),
  o = n("786397"),
  C = n("474936");

function u() {
  let e = (0, o.useTrialOffer)(C.PREMIUM_TIER_2_REFERRAL_TRIAL_ID),
    t = (0, i.useStateFromStores)([a.default], () => a.default.getReferrer(null == e ? void 0 : e.trial_id)),
    n = (0, i.useStateFromStores)([l.default], () => null == t || l.default.isBlocked(t.id));
  return s.useMemo(() => n || null == t ? null : new r.default(t), [t, n])
}