"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
});
var n = s("470079"),
  i = s("584825");

function l(e, t) {
  let s = (0, i.useSubscriptionTrial)(t);
  return n.useMemo(() => {
    var e;
    return null != s && (null == s.max_num_active_trial_users || s.max_num_active_trial_users > (null !== (e = s.num_active_trial_users) && void 0 !== e ? e : 0))
  }, [s])
}