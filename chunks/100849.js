"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var l = s("735250"),
  a = s("470079"),
  i = s("442837"),
  o = s("481060"),
  n = s("717881"),
  r = s("906732"),
  u = s("199902"),
  d = s("158776"),
  c = s("785717"),
  f = s("221292"),
  S = s("895618"),
  E = s("58307"),
  I = s("981631"),
  m = s("970903"),
  T = s("521170");

function _(e) {
  let {
    user: t
  } = e, s = (0, i.useStateFromStores)([u.default], () => null != u.default.getAnyStreamForUser(t.id)), _ = (0, i.useStateFromStores)([d.default], () => d.default.getActivities(t.id)), A = a.useMemo(() => _.filter(e => e.type !== I.ActivityTypes.CUSTOM_STATUS), [_]), p = _.some(e => e.type === I.ActivityTypes.HANG_STATUS), v = a.useMemo(() => s ? A.find(e => e.type === I.ActivityTypes.PLAYING) : null, [A, s]), N = a.useMemo(() => A.filter(e => e !== v), [v, A]), x = (0, E.useGetVoiceChannelInfoForVoiceActivitySection)(t.id), U = null != x && !s && !p, {
    showVoiceActivityInProfile: h
  } = S.VoiceActivityProfileExperiment.useExperiment({
    location: "user profile modal"
  }, {
    autoTrackExposure: U
  }), {
    analyticsLocations: C
  } = (0, r.default)(), {
    trackUserProfileAction: P,
    ...R
  } = (0, c.useUserProfileAnalyticsContext)(), M = {
    location: {
      page: I.AnalyticsPages.USER_PROFILE,
      section: I.AnalyticsSections.PROFILE_MODAL
    }
  };
  return (0, l.jsxs)(o.ScrollerThin, {
    className: T.listScroller,
    fade: !0,
    children: [h && U ? (0, l.jsx)("div", {
      className: m.voiceActivity,
      children: (0, l.jsx)(E.default, {
        ...x,
        color: m.actionColor
      })
    }) : null, s ? (0, l.jsx)(n.default, {
      type: n.UserActivityTypes.PROFILE_V2,
      user: t,
      source: "Profile Modal",
      className: m.userProfileActivity,
      activity: v,
      actionColor: m.actionColor,
      analyticsParams: M,
      onAction: () => {
        P({
          action: "JOIN_ACTIVITY"
        }), (0, f.trackUserProfileActivityJoined)({
          activity: v,
          analyticsLocations: C,
          ...R
        })
      }
    }) : null, N.map(e => (0, l.jsx)(n.default, {
      type: n.UserActivityTypes.PROFILE_V2,
      activity: e,
      user: t,
      useStoreStream: !1,
      source: "Profile Modal",
      className: m.userProfileActivity,
      actionColor: m.actionColor,
      analyticsParams: M,
      onAction: () => {
        P({
          action: "JOIN_ACTIVITY"
        }), (0, f.trackUserProfileActivityJoined)({
          activity: e,
          analyticsLocations: C,
          ...R
        })
      }
    }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name)))]
  })
}