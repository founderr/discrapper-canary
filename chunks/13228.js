"use strict";
a.r(t), a.d(t, {
  default: function() {
    return E
  }
});
var n = a("442837"),
  s = a("594190"),
  l = a("836157"),
  i = a("480294"),
  r = a("131951"),
  o = a("924557"),
  u = a("435064"),
  d = a("779618"),
  c = a("356659"),
  f = a("981631");

function E(e) {
  let t = (0, o.useShouldSeeClipsPremiumEarlyAccessAnnouncementCoachmark)({
      autoTrackExposure: !0
    }),
    {
      enableDecoupledGameClipping: a
    } = l.default.useExperiment({
      location: "useShouldDisplayClipsGuildSidebarEducation"
    }, {
      autoTrackExposure: !1
    });
  return (0, n.useStateFromStores)([u.default, s.default, i.default, r.default], () => {
    if (!(0, d.default)(r.default) || !t || !a) return !1;
    if (null != u.default.getLastClipsError()) return !0;
    if (!i.default.hasConsented(f.Consents.PERSONALIZATION) || null == s.default.getVisibleGame()) return !1;
    let {
      clipsEducationState: {
        dismissedAt: n,
        numberOfGamesLaunchedSinceDismissal: l,
        numberOfTimesDismissed: E
      },
      hasTakenDecoupledClip: h,
      clipsSettings: {
        clipsEnabled: _
      }
    } = u.default.getState();
    if (null === n) return !0;
    if (!(null != e && (0, o.isUserPremiumTypeForClipsEarlyAccess)(e))) return !1;
    let C = Date.now() - n > c.CLIPS_EDUCATION_COOLDOWN,
      m = l >= c.CLIPS_EDUCATION_GAME_LAUNCH_THRESHOLD,
      S = _ ? c.CLIPS_EDUCATION_MAX_DISMISSALS_ENABLED : c.CLIPS_EDUCATION_MAX_DISMISSALS_DISABLED;
    return C && m && E < S && !h
  })
}