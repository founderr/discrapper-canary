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
  I = s("981631"),
  v = s("583483"),
  E = s("613398");

function x(e) {
  let {
    user: t
  } = e, s = (0, i.useStateFromStores)([u.default], () => null != u.default.getAnyStreamForUser(t.id)), x = (0, i.useStateFromStores)([d.default], () => d.default.getActivities(t.id)), _ = a.useMemo(() => x.filter(e => e.type !== I.ActivityTypes.CUSTOM_STATUS), [x]), T = x.some(e => e.type === I.ActivityTypes.HANG_STATUS), A = a.useMemo(() => s ? _.find(e => e.type === I.ActivityTypes.PLAYING) : null, [_, s]), N = a.useMemo(() => _.filter(e => e !== A), [A, _]), C = (0, m.useGetVoiceChannelInfoForVoiceActivitySection)(t.id), g = null != C && !s && !T, {
    showVoiceActivityInProfile: h
  } = S.VoiceActivityProfileExperiment.useExperiment({
    location: "user profile modal"
  }, {
    autoTrackExposure: g
  }), {
    analyticsLocations: U
  } = (0, o.default)(), {
    trackUserProfileAction: p,
    ...j
  } = (0, c.useUserProfileAnalyticsContext)(), R = {
    location: {
      page: I.AnalyticsPages.USER_PROFILE,
      section: I.AnalyticsSections.PROFILE_MODAL
    }
  };
  return (0, l.jsxs)(n.ScrollerThin, {
    className: E.listScroller,
    fade: !0,
    children: [h && g ? (0, l.jsx)("div", {
      className: v.voiceActivity,
      children: (0, l.jsx)(m.default, {
        ...C,
        color: v.actionColor
      })
    }) : null, s ? (0, l.jsx)(r.default, {
      type: r.UserActivityTypes.PROFILE_V2,
      user: t,
      source: "Profile Modal",
      className: v.userProfileActivity,
      activity: A,
      actionColor: v.actionColor,
      analyticsParams: R,
      onAction: () => {
        p({
          action: "JOIN_ACTIVITY"
        }), (0, f.trackUserProfileActivityJoined)({
          activity: A,
          analyticsLocations: U,
          ...j
        })
      }
    }) : null, N.map(e => (0, l.jsx)(r.default, {
      type: r.UserActivityTypes.PROFILE_V2,
      activity: e,
      user: t,
      useStoreStream: !1,
      source: "Profile Modal",
      className: v.userProfileActivity,
      actionColor: v.actionColor,
      analyticsParams: R,
      onAction: () => {
        p({
          action: "JOIN_ACTIVITY"
        }), (0, f.trackUserProfileActivityJoined)({
          activity: e,
          analyticsLocations: U,
          ...j
        })
      }
    }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name)))]
  })
}