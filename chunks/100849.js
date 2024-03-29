"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
});
var a = s("735250"),
  l = s("470079"),
  i = s("442837"),
  o = s("481060"),
  r = s("717881"),
  n = s("906732"),
  u = s("199902"),
  d = s("158776"),
  c = s("785717"),
  f = s("221292"),
  S = s("895618"),
  m = s("58307"),
  E = s("981631"),
  T = s("970903"),
  I = s("521170");

function N(e) {
  let {
    user: t
  } = e, s = (0, i.useStateFromStores)([u.default], () => null != u.default.getAnyStreamForUser(t.id)), N = (0, i.useStateFromStores)([d.default], () => d.default.getActivities(t.id)), p = l.useMemo(() => N.filter(e => e.type !== E.ActivityTypes.CUSTOM_STATUS), [N]), _ = N.some(e => e.type === E.ActivityTypes.HANG_STATUS), A = l.useMemo(() => s ? p.find(e => e.type === E.ActivityTypes.PLAYING) : null, [p, s]), v = l.useMemo(() => p.filter(e => e !== A), [A, p]), x = (0, m.useGetVoiceChannelInfoForVoiceActivitySection)(t.id), U = null != x && !s && !_, {
    showVoiceActivityInProfile: h
  } = S.VoiceActivityProfileExperiment.useExperiment({
    location: "user profile modal"
  }, {
    autoTrackExposure: U
  }), {
    analyticsLocations: C
  } = (0, n.default)(), {
    trackUserProfileAction: y,
    ...j
  } = (0, c.useUserProfileAnalyticsContext)(), R = {
    location: {
      page: E.AnalyticsPages.USER_PROFILE,
      section: E.AnalyticsSections.PROFILE_MODAL
    }
  };
  return (0, a.jsxs)(o.ScrollerThin, {
    className: I.listScroller,
    fade: !0,
    children: [h && U ? (0, a.jsx)("div", {
      className: T.voiceActivity,
      children: (0, a.jsx)(m.default, {
        ...x,
        color: T.actionColor
      })
    }) : null, s ? (0, a.jsx)(r.default, {
      type: r.UserActivityTypes.PROFILE_V2,
      user: t,
      source: "Profile Modal",
      className: T.userProfileActivity,
      activity: A,
      actionColor: T.actionColor,
      analyticsParams: R,
      onAction: () => {
        y({
          action: "JOIN_ACTIVITY"
        }), (0, f.trackUserProfileActivityJoined)({
          activityType: null == A ? void 0 : A.type,
          applicationId: null == A ? void 0 : A.application_id,
          analyticsLocations: C,
          ...j
        })
      }
    }) : null, v.map(e => (0, a.jsx)(r.default, {
      type: r.UserActivityTypes.PROFILE_V2,
      activity: e,
      user: t,
      useStoreStream: !1,
      source: "Profile Modal",
      className: T.userProfileActivity,
      actionColor: T.actionColor,
      analyticsParams: R,
      onAction: () => {
        y({
          action: "JOIN_ACTIVITY"
        }), (0, f.trackUserProfileActivityJoined)({
          activityType: e.type,
          applicationId: e.application_id,
          analyticsLocations: C,
          ...j
        })
      }
    }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name)))]
  })
}