t.d(n, {
  Z: function() {
    return s
  }
});
var i = t(470079),
  l = t(817460),
  r = t(293810),
  u = t(474936),
  o = t(689938);

function s(e) {
  return i.useMemo(() => {
    var n;
    let t = r.DN.map(e => ({
        value: e,
        label: e.interval === u.rV.DAY && 7 === e.interval_count ? o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_TRIAL_TIME_LIMIT_DEFAULT_OPTION.format({
          defaultLimit: (0, l.iG)(e)
        }) : (0, l.iG)(e),
        isDefault: e.interval === u.rV.DAY && 7 === e.interval_count
      })),
      i = null != e ? null === (n = t.find(n => null != n.value && n.value.interval === e.interval && n.value.interval_count === e.interval_count)) || void 0 === n ? void 0 : n.value : e;
    return {
      options: t,
      selectedOption: i
    }
  }, [e])
}