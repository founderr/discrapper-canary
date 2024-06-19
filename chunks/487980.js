t.d(s, {
  K: function() {
    return _
  },
  b: function() {
    return c
  }
});
var n = t(442837),
  a = t(704215),
  r = t(605236),
  i = t(276444),
  l = t(520540),
  o = t(898997);
let _ = e => {
    let s = c(e),
      t = (0, r.wE)(a.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
    return s && !t
  },
  c = e => {
    let {
      enabled: s,
      eligibleToFetch: t
    } = l.g.useExperiment({
      location: e
    }, {
      autoTrackExposure: !1
    });
    (0, o.B)(e, !t);
    let a = (0, n.e7)([i.Z], () => i.Z.getIsEligibleToSendReferrals());
    return s && a
  }