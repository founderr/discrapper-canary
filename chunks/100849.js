"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
  }
});
var l = s("735250"),
  a = s("470079"),
  i = s("442837"),
  n = s("481060"),
  r = s("717881"),
  o = s("906732"),
  u = s("199902"),
  d = s("158776"),
  c = s("785717"),
  f = s("221292"),
  S = s("895618"),
  m = s("58307"),
  v = s("981631"),
  I = s("583483"),
  E = s("613398");

function x(e) {
  let {
    user: t
  } = e, s = (0, i.useStateFromStores)([u.default], () => null != u.default.getAnyStreamForUser(t.id)), x = (0, i.useStateFromStores)([d.default], () => d.default.getActivities(t.id)), A = a.useMemo(() => x.filter(e => e.type !== v.ActivityTypes.CUSTOM_STATUS), [x]), _ = x.some(e => e.type === v.ActivityTypes.HANG_STATUS), T = a.useMemo(() => s ? A.find(e => e.type === v.ActivityTypes.PLAYING) : null, [A, s]), N = a.useMemo(() => A.filter(e => e !== T), [T, A]), U = (0, m.useGetVoiceChannelInfoForVoiceActivitySection)(t.id), C = null != U && !s && !_, {
    showVoiceActivityInProfile: g
  } = S.VoiceActivityProfileExperiment.useExperiment({
    location: "user profile modal"
  }, {
    autoTrackExposure: C
  }), {
    analyticsLocations: h
  } = (0, o.default)(), {
    trackUserProfileAction: p,
    ...j
  } = (0, c.useUserProfileAnalyticsContext)(), R = {
    location: {
      page: v.AnalyticsPages.USER_PROFILE,
      section: v.AnalyticsSections.PROFILE_MODAL
    }
  };
  return (0, l.jsxs)(n.ScrollerThin, {
    className: E.listScroller,
    fade: !0,
    children: [g && C ? (0, l.jsx)("div", {
      className: I.voiceActivity,
      children: (0, l.jsx)(m.default, {
        ...U,
        color: I.actionColor
      })
    }) : null, s ? (0, l.jsx)(r.default, {
      type: r.UserActivityTypes.PROFILE_V2,
      user: t,
      source: "Profile Modal",
      className: I.userProfileActivity,
      activity: T,
      actionColor: I.actionColor,
      analyticsParams: R,
      onAction: () => {
        p({
          action: "JOIN_ACTIVITY"
        }), (0, f.trackUserProfileActivityJoined)({
          activity: T,
          analyticsLocations: h,
          ...j
        })
      }
    }) : null, N.map(e => (0, l.jsx)(r.default, {
      type: r.UserActivityTypes.PROFILE_V2,
      activity: e,
      user: t,
      useStoreStream: !1,
      source: "Profile Modal",
      className: I.userProfileActivity,
      actionColor: I.actionColor,
      analyticsParams: R,
      onAction: () => {
        p({
          action: "JOIN_ACTIVITY"
        }), (0, f.trackUserProfileActivityJoined)({
          activity: e,
          analyticsLocations: h,
          ...j
        })
      }
    }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name)))]
  })
}