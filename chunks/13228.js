n.d(t, {
  Z: function() {
    return h
  }
});
var i = n(442837),
  s = n(594190),
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
  return (0, i.e7)([c.Z, s.ZP, a.Z, r.Z], () => {
    if (!(0, u.Z)(r.Z) || !t || !n) return !1;
    if (null != c.Z.getLastClipsError()) return !0;
    if (!a.Z.hasConsented(E.pjP.PERSONALIZATION) || null == s.ZP.getVisibleGame()) return !1;
    let {
      clipsEducationState: {
        dismissedAt: i,
        numberOfGamesLaunchedSinceDismissal: l,
        numberOfTimesDismissed: h
      },
      hasTakenDecoupledClip: _,
      clipsSettings: {
        clipsEnabled: I
      }
    } = c.Z.getState();
    if (null === i) return !0;
    if (!(null != e && (0, o.xt)(e))) return !1;
    let m = Date.now() - i > d.xx,
      g = l >= d._U,
      p = I ? d.xd : d.A5;
    return m && g && h < p && !_
  })
}