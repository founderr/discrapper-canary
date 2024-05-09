"use strict";
s.r(t), s.d(t, {
  default: function() {
    return v
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
  c = s("543595"),
  f = s("785717"),
  S = s("221292"),
  m = s("981631"),
  E = s("886140"),
  I = s("305944");

function v(e) {
  let {
    user: t,
    type: s
  } = e, v = (0, i.useStateFromStores)([u.default], () => null != u.default.getAnyStreamForUser(t.id)), _ = (0, i.useStateFromStores)([d.default], () => d.default.getActivities(t.id)), g = a.useMemo(() => _.filter(e => e.type !== m.ActivityTypes.CUSTOM_STATUS), [_]), A = a.useMemo(() => v ? g.find(e => e.type === m.ActivityTypes.PLAYING) : null, [g, v]), T = a.useMemo(() => g.filter(e => e !== A), [A, g]), {
    analyticsLocations: x,
    newestAnalyticsLocation: N
  } = (0, o.default)(), {
    trackUserProfileAction: U,
    ...C
  } = (0, f.useUserProfileAnalyticsContext)(), h = {
    location: {
      page: m.AnalyticsPages.USER_PROFILE,
      section: m.AnalyticsSections.PROFILE_MODAL
    }
  };
  return (0, l.jsxs)(n.ScrollerThin, {
    className: I.listScroller,
    fade: !0,
    children: [v ? (0, l.jsx)(r.default, {
      type: s,
      user: t,
      source: N,
      className: E.userProfileActivity,
      hideHeader: s === c.Types.SIMPLIFIED_PROFILE,
      showChannelDetails: s === c.Types.SIMPLIFIED_PROFILE,
      activity: A,
      actionColor: E.actionColor,
      analyticsParams: h,
      onAction: () => {
        U({
          action: "JOIN_ACTIVITY"
        }), (0, S.trackUserProfileActivityJoined)({
          activityType: m.ActivityTypes.STREAMING,
          activityName: null == A ? void 0 : A.name,
          activityPlatform: null == A ? void 0 : A.platform,
          activitySessionId: null == A ? void 0 : A.session_id,
          applicationId: null == A ? void 0 : A.application_id,
          analyticsLocations: x,
          ...C
        })
      }
    }) : null, T.map(e => (0, l.jsx)(r.default, {
      type: s,
      activity: e,
      user: t,
      useStoreStream: !1,
      source: N,
      className: E.userProfileActivity,
      hideHeader: s === c.Types.SIMPLIFIED_PROFILE,
      showChannelDetails: s === c.Types.SIMPLIFIED_PROFILE,
      actionColor: E.actionColor,
      analyticsParams: h,
      onAction: () => {
        U({
          action: "JOIN_ACTIVITY"
        }), (0, S.trackUserProfileActivityJoined)({
          activityType: e.type,
          activityName: e.name,
          activityPlatform: e.platform,
          activitySessionId: e.session_id,
          applicationId: e.application_id,
          analyticsLocations: x,
          ...C
        })
      }
    }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name)))]
  })
}