t.d(n, {
  Z: function() {
    return s
  }
});
var i = t(470079),
  l = t(584825);

function s(e, n) {
  let t = (0, l.oC)(n);
  return i.useMemo(() => {
    var e;
    return null != t && (null == t.max_num_active_trial_users || t.max_num_active_trial_users > (null !== (e = t.num_active_trial_users) && void 0 !== e ? e : 0))
  }, [t])
}