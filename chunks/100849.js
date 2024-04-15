"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
});
var l = s("735250"),
  a = s("470079"),
  i = s("442837"),
  n = s("481060"),
  o = s("717881"),
  r = s("906732"),
  u = s("199902"),
  d = s("158776"),
  c = s("785717"),
  f = s("221292"),
  S = s("895618"),
  E = s("58307"),
  I = s("981631"),
  m = s("970903"),
  _ = s("521170");

function T(e) {
  let {
    user: t
  } = e, s = (0, i.useStateFromStores)([u.default], () => null != u.default.getAnyStreamForUser(t.id)), T = (0, i.useStateFromStores)([d.default], () => d.default.getActivities(t.id)), p = a.useMemo(() => T.filter(e => e.type !== I.ActivityTypes.CUSTOM_STATUS), [T]), A = T.some(e => e.type === I.ActivityTypes.HANG_STATUS), N = a.useMemo(() => s ? p.find(e => e.type === I.ActivityTypes.PLAYING) : null, [p, s]), v = a.useMemo(() => p.filter(e => e !== N), [N, p]), x = (0, E.useGetVoiceChannelInfoForVoiceActivitySection)(t.id), U = null != x && !s && !A, {
    showVoiceActivityInProfile: h
  } = S.VoiceActivityProfileExperiment.useExperiment({
    location: "user profile modal"
  }, {
    autoTrackExposure: U
  }), {
    analyticsLocations: C
  } = (0, r.default)(), {
    trackUserProfileAction: R,
    ...P
  } = (0, c.useUserProfileAnalyticsContext)(), M = {
    location: {
      page: I.AnalyticsPages.USER_PROFILE,
      section: I.AnalyticsSections.PROFILE_MODAL
    }
  };
  return (0, l.jsxs)(n.ScrollerThin, {
    className: _.listScroller,
    fade: !0,
    children: [h && U ? (0, l.jsx)("div", {
      className: m.voiceActivity,
      children: (0, l.jsx)(E.default, {
        ...x,
        color: m.actionColor
      })
    }) : null, s ? (0, l.jsx)(o.default, {
      type: o.UserActivityTypes.PROFILE_V2,
      user: t,
      source: "Profile Modal",
      className: m.userProfileActivity,
      activity: N,
      actionColor: m.actionColor,
      analyticsParams: M,
      onAction: () => {
        R({
          action: "JOIN_ACTIVITY"
        }), (0, f.trackUserProfileActivityJoined)({
          activity: N,
          analyticsLocations: C,
          ...P
        })
      }
    }) : null, v.map(e => (0, l.jsx)(o.default, {
      type: o.UserActivityTypes.PROFILE_V2,
      activity: e,
      user: t,
      useStoreStream: !1,
      source: "Profile Modal",
      className: m.userProfileActivity,
      actionColor: m.actionColor,
      analyticsParams: M,
      onAction: () => {
        R({
          action: "JOIN_ACTIVITY"
        }), (0, f.trackUserProfileActivityJoined)({
          activity: e,
          analyticsLocations: C,
          ...P
        })
      }
    }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name)))]
  })
}