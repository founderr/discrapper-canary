t.d(s, {
  B: function() {
    return u
  }
});
var n = t(470079),
  a = t(442837),
  r = t(594174),
  i = t(74538),
  l = t(140465),
  o = t(775412),
  _ = t(276444),
  c = t(520540),
  E = t(474936);
let u = function(e) {
  let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    t = (0, a.e7)([r.default], () => r.default.getCurrentUser()),
    u = (0, l.t7)(),
    R = (0, o._O)(),
    {
      eligibleToFetch: d
    } = c.g.useExperiment({
      location: e
    }, {
      autoTrackExposure: !1
    }),
    I = d && null != t && t.verified && (0, i.M5)(t, E.p9.TIER_2) && !u && !R;
  n.useEffect(() => {
    I && !s && _.Z.checkAndFetchReferralsRemaining()
  }, [I, s])
}