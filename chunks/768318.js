"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var s = n("470079"),
  a = n("584825");

function i(e, t) {
  let n = (0, a.useSubscriptionTrial)(t);
  return s.useMemo(() => {
    var e;
    return null != n && (null == n.max_num_active_trial_users || n.max_num_active_trial_users > (null !== (e = n.num_active_trial_users) && void 0 !== e ? e : 0))
  }, [n])
}