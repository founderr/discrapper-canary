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
  r = s("717881"),
  n = s("906732"),
  u = s("199902"),
  d = s("158776"),
  c = s("785717"),
  f = s("221292"),
  S = s("895618"),
  E = s("58307"),
  m = s("981631"),
  I = s("970903"),
  v = s("521170");

function _(e) {
  let {
    user: t
  } = e, s = (0, i.useStateFromStores)([u.default], () => null != u.default.getAnyStreamForUser(t.id)), _ = (0, i.useStateFromStores)([d.default], () => d.default.getActivities(t.id)), A = a.useMemo(() => _.filter(e => e.type !== m.ActivityTypes.CUSTOM_STATUS), [_]), T = _.some(e => e.type === m.ActivityTypes.HANG_STATUS), x = a.useMemo(() => s ? A.find(e => e.type === m.ActivityTypes.PLAYING) : null, [A, s]), N = a.useMemo(() => A.filter(e => e !== x), [x, A]), U = (0, E.useGetVoiceChannelInfoForVoiceActivitySection)(t.id), p = null != U && !s && !T, {
    showVoiceActivityInProfile: h
  } = S.VoiceActivityProfileExperiment.useExperiment({
    location: "user profile modal"
  }, {
    autoTrackExposure: p
  }), {
    analyticsLocations: C
  } = (0, n.default)(), {
    trackUserProfileAction: P,
    ...j
  } = (0, c.useUserProfileAnalyticsContext)(), M = {
    location: {
      page: m.AnalyticsPages.USER_PROFILE,
      section: m.AnalyticsSections.PROFILE_MODAL
    }
  };
  return (0, l.jsxs)(o.ScrollerThin, {
    className: v.listScroller,
    fade: !0,
    children: [h && p ? (0, l.jsx)("div", {
      className: I.voiceActivity,
      children: (0, l.jsx)(E.default, {
        ...U,
        color: I.actionColor
      })
    }) : null, s ? (0, l.jsx)(r.default, {
      type: r.UserActivityTypes.PROFILE_V2,
      user: t,
      source: "Profile Modal",
      className: I.userProfileActivity,
      activity: x,
      actionColor: I.actionColor,
      analyticsParams: M,
      onAction: () => {
        P({
          action: "JOIN_ACTIVITY"
        }), (0, f.trackUserProfileActivityJoined)({
          activity: x,
          analyticsLocations: C,
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
      analyticsParams: M,
      onAction: () => {
        P({
          action: "JOIN_ACTIVITY"
        }), (0, f.trackUserProfileActivityJoined)({
          activity: e,
          analyticsLocations: C,
          ...j
        })
      }
    }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name)))]
  })
}