n.d(t, {
  Kn: function() {
return _;
  },
  bD: function() {
return u;
  }
});
var s, a, r = n(442837),
  i = n(704215),
  l = n(605236),
  o = n(276444);
n(822070);
var c = n(520540),
  d = n(898997);
(s = a || (a = {}))[s.NOT_ELIGIBLE = 0] = 'NOT_ELIGIBLE', s[s.ELIGIBLE = 1] = 'ELIGIBLE', s[s.QUALIFIED = 2] = 'QUALIFIED', s[s.COOLDOWN = 3] = 'COOLDOWN';
let _ = e => {
let t = u(e),
  n = (0, l.wE)(i.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
return t && !n;
  },
  u = e => {
let {
  enabled: t,
  eligibleToFetch: n
} = c.g.useExperiment({
  location: e
}, {
  autoTrackExposure: !1
});
(0, d.B)(e, !n);
let s = (0, r.e7)([o.Z], () => o.Z.getIsEligibleToSendReferrals());
return t && s;
  };