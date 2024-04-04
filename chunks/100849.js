"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
});
var a = s("735250"),
  l = s("470079"),
  i = s("442837"),
  r = s("481060"),
  o = s("717881"),
  n = s("906732"),
  u = s("199902"),
  d = s("158776"),
  c = s("785717"),
  f = s("221292"),
  S = s("895618"),
  m = s("58307"),
  E = s("981631"),
  I = s("970903"),
  T = s("521170");

function N(e) {
  let {
    user: t
  } = e, s = (0, i.useStateFromStores)([u.default], () => null != u.default.getAnyStreamForUser(t.id)), N = (0, i.useStateFromStores)([d.default], () => d.default.getActivities(t.id)), x = l.useMemo(() => N.filter(e => e.type !== E.ActivityTypes.CUSTOM_STATUS), [N]), A = N.some(e => e.type === E.ActivityTypes.HANG_STATUS), _ = l.useMemo(() => s ? x.find(e => e.type === E.ActivityTypes.PLAYING) : null, [x, s]), p = l.useMemo(() => x.filter(e => e !== _), [_, x]), v = (0, m.useGetVoiceChannelInfoForVoiceActivitySection)(t.id), h = null != v && !s && !A, {
    showVoiceActivityInProfile: U
  } = S.VoiceActivityProfileExperiment.useExperiment({
    location: "user profile modal"
  }, {
    autoTrackExposure: h
  }), {
    analyticsLocations: C
  } = (0, n.default)(), {
    trackUserProfileAction: j,
    ...y
  } = (0, c.useUserProfileAnalyticsContext)(), M = {
    location: {
      page: E.AnalyticsPages.USER_PROFILE,
      section: E.AnalyticsSections.PROFILE_MODAL
    }
  };
  return (0, a.jsxs)(r.ScrollerThin, {
    className: T.listScroller,
    fade: !0,
    children: [U && h ? (0, a.jsx)("div", {
      className: I.voiceActivity,
      children: (0, a.jsx)(m.default, {
        ...v,
        color: I.actionColor
      })
    }) : null, s ? (0, a.jsx)(o.default, {
      type: o.UserActivityTypes.PROFILE_V2,
      user: t,
      source: "Profile Modal",
      className: I.userProfileActivity,
      activity: _,
      actionColor: I.actionColor,
      analyticsParams: M,
      onAction: () => {
        j({
          action: "JOIN_ACTIVITY"
        }), (0, f.trackUserProfileActivityJoined)({
          activity: _,
          analyticsLocations: C,
          ...y
        })
      }
    }) : null, p.map(e => (0, a.jsx)(o.default, {
      type: o.UserActivityTypes.PROFILE_V2,
      activity: e,
      user: t,
      useStoreStream: !1,
      source: "Profile Modal",
      className: I.userProfileActivity,
      actionColor: I.actionColor,
      analyticsParams: M,
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