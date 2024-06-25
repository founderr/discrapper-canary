n.d(t, {
  Z: function() {
    return l
  }
});
var s = n(470079),
  i = n(584825);

function l(e, t) {
  let n = (0, i.oC)(t);
  return s.useMemo(() => {
    var e;
    return null != n && (null == n.max_num_active_trial_users || n.max_num_active_trial_users > (null !== (e = n.num_active_trial_users) && void 0 !== e ? e : 0))
  }, [n])
}