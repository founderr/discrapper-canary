"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
  }
});
var l = s("735250"),
  a = s("470079"),
  i = s("442837"),
  r = s("481060"),
  n = s("717881"),
  o = s("906732"),
  u = s("199902"),
  d = s("158776"),
  c = s("785717"),
  f = s("221292"),
  S = s("895618"),
  m = s("58307"),
  E = s("981631"),
  I = s("970903"),
  v = s("521170");

function x(e) {
  let {
    user: t
  } = e, s = (0, i.useStateFromStores)([u.default], () => null != u.default.getAnyStreamForUser(t.id)), x = (0, i.useStateFromStores)([d.default], () => d.default.getActivities(t.id)), _ = a.useMemo(() => x.filter(e => e.type !== E.ActivityTypes.CUSTOM_STATUS), [x]), A = x.some(e => e.type === E.ActivityTypes.HANG_STATUS), N = a.useMemo(() => s ? _.find(e => e.type === E.ActivityTypes.PLAYING) : null, [_, s]), T = a.useMemo(() => _.filter(e => e !== N), [N, _]), U = (0, m.useGetVoiceChannelInfoForVoiceActivitySection)(t.id), h = null != U && !s && !A, {
    showVoiceActivityInProfile: p
  } = S.VoiceActivityProfileExperiment.useExperiment({
    location: "user profile modal"
  }, {
    autoTrackExposure: h
  }), {
    analyticsLocations: j
  } = (0, o.default)(), {
    trackUserProfileAction: g,
    ...R
  } = (0, c.useUserProfileAnalyticsContext)(), P = {
    location: {
      page: E.AnalyticsPages.USER_PROFILE,
      section: E.AnalyticsSections.PROFILE_MODAL
    }
  };
  return (0, l.jsxs)(r.ScrollerThin, {
    className: v.listScroller,
    fade: !0,
    children: [p && h ? (0, l.jsx)("div", {
      className: I.voiceActivity,
      children: (0, l.jsx)(m.default, {
        ...U,
        color: I.actionColor
      })
    }) : null, s ? (0, l.jsx)(n.default, {
      type: n.UserActivityTypes.PROFILE_V2,
      user: t,
      source: "Profile Modal",
      className: I.userProfileActivity,
      activity: N,
      actionColor: I.actionColor,
      analyticsParams: P,
      onAction: () => {
        g({
          action: "JOIN_ACTIVITY"
        }), (0, f.trackUserProfileActivityJoined)({
          activity: N,
          analyticsLocations: j,
          ...R
        })
      }
    }) : null, T.map(e => (0, l.jsx)(n.default, {
      type: n.UserActivityTypes.PROFILE_V2,
      activity: e,
      user: t,
      useStoreStream: !1,
      source: "Profile Modal",
      className: I.userProfileActivity,
      actionColor: I.actionColor,
      analyticsParams: P,
      onAction: () => {
        g({
          action: "JOIN_ACTIVITY"
        }), (0, f.trackUserProfileActivityJoined)({
          activity: e,
          analyticsLocations: j,
          ...R
        })
      }
    }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name)))]
  })
}