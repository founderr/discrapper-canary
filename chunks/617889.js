n.d(t, {
  B: function() {
    return o
  }
});
var s = n(470079),
  a = n(988303),
  i = n(658590),
  l = n(448018),
  r = n(46140);
let o = (e, t) => {
  let n = 2 === e.config.configVersion && e.config.features.includes(r.S7.QUEST_BAR_V2),
    o = (0, i.a)(e),
    {
      primaryVariant: c,
      progressVariant: d
    } = a.u.useExperiment({
      location: r.dr.QUESTS_BAR
    }, {
      autoTrackExposure: t && n
    });
  return s.useMemo(() => o ? (0, l.v)(e, a.P.V2, a.P.V2) : n ? (0, l.v)(e, c, d) : (0, l.v)(e, a.P.V1, a.P.V1), [o, c, d, e, n])
}