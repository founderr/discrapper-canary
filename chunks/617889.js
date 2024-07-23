n.d(t, {
  B: function() {
return m;
  },
  L: function() {
return C;
  }
});
var s = n(470079),
  o = n(626135),
  r = n(70956),
  a = n(617136),
  l = n(918701),
  i = n(988303),
  c = n(658590),
  d = n(448018),
  u = n(46140),
  p = n(981631);
let m = (e, t) => {
let n = (0, l.zK)(e, u.S7.QUEST_BAR_V2),
  o = (0, c.a)(e),
  {
    primaryVariant: r,
    progressVariant: a
  } = i.u.useExperiment({
    location: u.dr.QUESTS_BAR
  }, {
    autoTrackExposure: t && n
  });
return s.useMemo(() => o ? (0, d.v)(e, i.P.V2, i.P.V2) : n ? (0, d.v)(e, r, a) : (0, d.v)(e, i.P.V1, i.P.V1), [
  o,
  r,
  a,
  e,
  n
]);
  },
  x = 30 * r.Z.Millis.SECOND,
  f = 20 * r.Z.Millis.MINUTE,
  g = Date.now();

function C(e) {
  let t = s.useRef({
renderCount: 0,
renderCountResetAt: 0,
expandedAt: 0,
paintedAfterExpandAt: 0,
expandAnimationBeganAt: 0,
expandAnimationEndedAt: 0
  });
  return s.useEffect(() => {
let n = performance.now();
n - t.current.renderCountResetAt > x && (t.current.renderCount = 0, t.current.renderCountResetAt = n), t.current.renderCount++, ! function(e, t) {
  let n = Date.now();
  if (!(n - g < f))
    g = n, window.requestIdleCallback(() => {
      o.default.track(p.rMx.QUEST_BAR_RENDER_PERFORMANCE_MEASURED, {
        render_count_30s: e.renderCount,
        expanded_paint_duration_ms: e.paintedAfterExpandAt - e.expandedAt,
        expand_animation_duration_ms: e.expandAnimationEndedAt - e.expandAnimationBeganAt,
        ...(0, a.mH)(t)
      });
    });
}(t.current, e);
  }), t;
}