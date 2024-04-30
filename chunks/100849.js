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
  } = e, s = (0, i.useStateFromStores)([u.default], () => null != u.default.getAnyStreamForUser(t.id)), x = (0, i.useStateFromStores)([d.default], () => d.default.getActivities(t.id)), _ = a.useMemo(() => x.filter(e => e.type !== v.ActivityTypes.CUSTOM_STATUS), [x]), A = x.some(e => e.type === v.ActivityTypes.HANG_STATUS), U = a.useMemo(() => s ? _.find(e => e.type === v.ActivityTypes.PLAYING) : null, [_, s]), T = a.useMemo(() => _.filter(e => e !== U), [U, _]), N = (0, m.useGetVoiceChannelInfoForVoiceActivitySection)(t.id), g = null != N && !s && !A, {
    showVoiceActivityInProfile: C
  } = S.VoiceActivityProfileExperiment.useExperiment({
    location: "user profile modal"
  }, {
    autoTrackExposure: g
  }), {
    analyticsLocations: h
  } = (0, o.default)(), {
    trackUserProfileAction: p,
    ...R
  } = (0, c.useUserProfileAnalyticsContext)(), j = {
    location: {
      page: v.AnalyticsPages.USER_PROFILE,
      section: v.AnalyticsSections.PROFILE_MODAL
    }
  };
  return (0, l.jsxs)(n.ScrollerThin, {
    className: E.listScroller,
    fade: !0,
    children: [C && g ? (0, l.jsx)("div", {
      className: I.voiceActivity,
      children: (0, l.jsx)(m.default, {
        ...N,
        color: I.actionColor
      })
    }) : null, s ? (0, l.jsx)(r.default, {
      type: r.UserActivityTypes.PROFILE_V2,
      user: t,
      source: "Profile Modal",
      className: I.userProfileActivity,
      activity: U,
      actionColor: I.actionColor,
      analyticsParams: j,
      onAction: () => {
        p({
          action: "JOIN_ACTIVITY"
        }), (0, f.trackUserProfileActivityJoined)({
          activity: U,
          analyticsLocations: h,
          ...R
        })
      }
    }) : null, T.map(e => (0, l.jsx)(r.default, {
      type: r.UserActivityTypes.PROFILE_V2,
      activity: e,
      user: t,
      useStoreStream: !1,
      source: "Profile Modal",
      className: I.userProfileActivity,
      actionColor: I.actionColor,
      analyticsParams: j,
      onAction: () => {
        p({
          action: "JOIN_ACTIVITY"
        }), (0, f.trackUserProfileActivityJoined)({
          activity: e,
          analyticsLocations: h,
          ...R
        })
      }
    }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name)))]
  })
}