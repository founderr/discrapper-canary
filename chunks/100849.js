"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
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
  N = s("521170");

function I(e) {
  let {
    user: t
  } = e, s = (0, i.useStateFromStores)([u.default], () => null != u.default.getAnyStreamForUser(t.id)), I = (0, i.useStateFromStores)([d.default], () => d.default.getActivities(t.id)), _ = l.useMemo(() => I.filter(e => e.type !== E.ActivityTypes.CUSTOM_STATUS), [I]), A = I.some(e => e.type === E.ActivityTypes.HANG_STATUS), x = l.useMemo(() => s ? _.find(e => e.type === E.ActivityTypes.PLAYING) : null, [_, s]), v = l.useMemo(() => _.filter(e => e !== x), [x, _]), p = (0, m.useGetVoiceChannelInfoForVoiceActivitySection)(t.id), U = null != p && !s && !A, {
    showVoiceActivityInProfile: h
  } = S.VoiceActivityProfileExperiment.useExperiment({
    location: "user profile modal"
  }, {
    autoTrackExposure: U
  }), {
    analyticsLocations: C
  } = (0, n.default)(), {
    trackUserProfileAction: j,
    ...y
  } = (0, c.useUserProfileAnalyticsContext)(), R = {
    location: {
      page: E.AnalyticsPages.USER_PROFILE,
      section: E.AnalyticsSections.PROFILE_MODAL
    }
  };
  return (0, a.jsxs)(o.ScrollerThin, {
    className: N.listScroller,
    fade: !0,
    children: [h && U ? (0, a.jsx)("div", {
      className: T.voiceActivity,
      children: (0, a.jsx)(m.default, {
        ...p,
        color: T.actionColor
      })
    }) : null, s ? (0, a.jsx)(r.default, {
      type: r.UserActivityTypes.PROFILE_V2,
      user: t,
      source: "Profile Modal",
      className: T.userProfileActivity,
      activity: x,
      actionColor: T.actionColor,
      analyticsParams: R,
      onAction: () => {
        j({
          action: "JOIN_ACTIVITY"
        }), (0, f.trackUserProfileActivityJoined)({
          activity: x,
          analyticsLocations: C,
          ...y
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
        j({
          action: "JOIN_ACTIVITY"
        }), (0, f.trackUserProfileActivityJoined)({
          activity: e,
          analyticsLocations: C,
          ...y
        })
      }
    }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name)))]
  })
}