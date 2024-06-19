S.d(e, {
  Z: function() {
    return I
  }
});
var _ = S(470079),
  t = S(817460),
  n = S(293810),
  i = S(474936),
  l = S(689938);

function I(E) {
  return _.useMemo(() => {
    var e;
    let S = n.DN.map(E => ({
        value: E,
        label: E.interval === i.rV.DAY && 7 === E.interval_count ? l.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_TRIAL_TIME_LIMIT_DEFAULT_OPTION.format({
          defaultLimit: (0, t.iG)(E)
        }) : (0, t.iG)(E),
        isDefault: E.interval === i.rV.DAY && 7 === E.interval_count
      })),
      _ = null != E ? null === (e = S.find(e => null != e.value && e.value.interval === E.interval && e.value.interval_count === E.interval_count)) || void 0 === e ? void 0 : e.value : E;
    return {
      options: S,
      selectedOption: _
    }
  }, [E])
}