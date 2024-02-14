"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var l = n("884691"),
  a = n("837008");

function s(e, t) {
  let n = (0, a.useSubscriptionTrial)(t);
  return l.useMemo(() => {
    var e;
    return null != n && (null == n.max_num_active_trial_users || n.max_num_active_trial_users > (null !== (e = n.num_active_trial_users) && void 0 !== e ? e : 0))
  }, [n])
}