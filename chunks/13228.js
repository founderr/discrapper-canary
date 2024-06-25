n.d(t, {
  Z: function() {
    return h
  }
});
var s = n(442837),
  i = n(594190),
  l = n(836157),
  a = n(480294),
  r = n(131951),
  o = n(924557),
  c = n(435064),
  u = n(779618),
  d = n(356659),
  E = n(981631);

function h(e) {
  let t = (0, o.nM)({
      autoTrackExposure: !0
    }),
    {
      enableDecoupledGameClipping: n
    } = l.Z.useExperiment({
      location: "useShouldDisplayClipsGuildSidebarEducation"
    }, {
      autoTrackExposure: !1
    });
  return (0, s.e7)([c.Z, i.ZP, a.Z, r.Z], () => {
    if (!(0, u.Z)(r.Z) || !t || !n) return !1;
    if (null != c.Z.getLastClipsError()) return !0;
    if (!a.Z.hasConsented(E.pjP.PERSONALIZATION) || null == i.ZP.getVisibleGame()) return !1;
    let {
      clipsEducationState: {
        dismissedAt: s,
        numberOfGamesLaunchedSinceDismissal: l,
        numberOfTimesDismissed: h
      },
      hasTakenDecoupledClip: _,
      clipsSettings: {
        clipsEnabled: I
      }
    } = c.Z.getState();
    if (null === s) return !0;
    if (!(null != e && (0, o.xt)(e))) return !1;
    let m = Date.now() - s > d.xx,
      T = l >= d._U,
      g = I ? d.xd : d.A5;
    return m && T && h < g && !_
  })
}