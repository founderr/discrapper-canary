"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
});
var a = s("735250"),
  l = s("470079"),
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
  m = s("981631"),
  I = s("970903"),
  T = s("521170");

function p(e) {
  let {
    user: t
  } = e, s = (0, i.useStateFromStores)([u.default], () => null != u.default.getAnyStreamForUser(t.id)), p = (0, i.useStateFromStores)([d.default], () => d.default.getActivities(t.id)), N = l.useMemo(() => p.filter(e => e.type !== m.ActivityTypes.CUSTOM_STATUS), [p]), A = p.some(e => e.type === m.ActivityTypes.HANG_STATUS), x = l.useMemo(() => s ? N.find(e => e.type === m.ActivityTypes.PLAYING) : null, [N, s]), _ = l.useMemo(() => N.filter(e => e !== x), [x, N]), v = (0, E.useGetVoiceChannelInfoForVoiceActivitySection)(t.id), C = null != v && !s && !A, {
    showVoiceActivityInProfile: h
  } = S.VoiceActivityProfileExperiment.useExperiment({
    location: "user profile modal"
  }, {
    autoTrackExposure: C
  }), {
    analyticsLocations: U
  } = (0, r.default)(), {
    trackUserProfileAction: R,
    ...j
  } = (0, c.useUserProfileAnalyticsContext)(), M = {
    location: {
      page: m.AnalyticsPages.USER_PROFILE,
      section: m.AnalyticsSections.PROFILE_MODAL
    }
  };
  return (0, a.jsxs)(n.ScrollerThin, {
    className: T.listScroller,
    fade: !0,
    children: [h && C ? (0, a.jsx)("div", {
      className: I.voiceActivity,
      children: (0, a.jsx)(E.default, {
        ...v,
        color: I.actionColor
      })
    }) : null, s ? (0, a.jsx)(o.default, {
      type: o.UserActivityTypes.PROFILE_V2,
      user: t,
      source: "Profile Modal",
      className: I.userProfileActivity,
      activity: x,
      actionColor: I.actionColor,
      analyticsParams: M,
      onAction: () => {
        R({
          action: "JOIN_ACTIVITY"
        }), (0, f.trackUserProfileActivityJoined)({
          activity: x,
          analyticsLocations: U,
          ...j
        })
      }
    }) : null, _.map(e => (0, a.jsx)(o.default, {
      type: o.UserActivityTypes.PROFILE_V2,
      activity: e,
      user: t,
      useStoreStream: !1,
      source: "Profile Modal",
      className: I.userProfileActivity,
      actionColor: I.actionColor,
      analyticsParams: M,
      onAction: () => {
        R({
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