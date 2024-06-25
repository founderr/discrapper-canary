s.d(t, {
  K: function() {
    return c
  },
  b: function() {
    return E
  }
});
var n = s(442837),
  a = s(704215),
  i = s(605236),
  r = s(276444),
  l = s(520540),
  o = s(898997);
let c = e => {
    let t = E(e),
      s = (0, i.wE)(a.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
    return t && !s
  },
  E = e => {
    let {
      enabled: t,
      eligibleToFetch: s
    } = l.g.useExperiment({
      location: e
    }, {
      autoTrackExposure: !1
    });
    (0, o.B)(e, !s);
    let a = (0, n.e7)([r.Z], () => r.Z.getIsEligibleToSendReferrals());
    return t && a
  }