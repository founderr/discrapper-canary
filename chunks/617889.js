n.d(t, {
  B: function() {
    return c
  }
});
var s = n(470079),
  o = n(918701),
  r = n(988303),
  a = n(658590),
  l = n(448018),
  i = n(46140);
let c = (e, t) => {
  let n = (0, o.zK)(e, i.S7.QUEST_BAR_V2),
    c = (0, a.a)(e),
    {
      primaryVariant: u,
      progressVariant: d
    } = r.u.useExperiment({
      location: i.dr.QUESTS_BAR
    }, {
      autoTrackExposure: t && n
    });
  return s.useMemo(() => c ? (0, l.v)(e, r.P.V2, r.P.V2) : n ? (0, l.v)(e, u, d) : (0, l.v)(e, r.P.V1, r.P.V1), [c, u, d, e, n])
}