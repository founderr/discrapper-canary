s.d(t, {
  B: function() {
    return u
  }
});
var n = s(470079),
  a = s(442837),
  i = s(594174),
  r = s(74538),
  l = s(140465),
  o = s(775412),
  c = s(276444),
  E = s(520540),
  _ = s(474936);
let u = function(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    s = (0, a.e7)([i.default], () => i.default.getCurrentUser()),
    u = (0, l.t7)(),
    d = (0, o._O)(),
    {
      eligibleToFetch: T
    } = E.g.useExperiment({
      location: e
    }, {
      autoTrackExposure: !1
    }),
    I = T && null != s && s.verified && (0, r.M5)(s, _.p9.TIER_2) && !u && !d;
  n.useEffect(() => {
    I && !t && c.Z.checkAndFetchReferralsRemaining()
  }, [I, t])
}