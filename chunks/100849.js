"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
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
  E = s("981631"),
  m = s("886140"),
  I = s("305944");

function _(e) {
  let {
    user: t,
    type: s
  } = e, _ = (0, i.useStateFromStores)([u.default], () => null != u.default.getAnyStreamForUser(t.id)), v = (0, i.useStateFromStores)([d.default], () => d.default.getActivities(t.id)), g = a.useMemo(() => v.filter(e => e.type !== E.ActivityTypes.CUSTOM_STATUS), [v]), T = a.useMemo(() => _ ? g.find(e => e.type === E.ActivityTypes.PLAYING) : null, [g, _]), A = a.useMemo(() => g.filter(e => e !== T), [T, g]), {
    analyticsLocations: x,
    newestAnalyticsLocation: U
  } = (0, o.default)(), {
    trackUserProfileAction: p,
    ...N
  } = (0, f.useUserProfileAnalyticsContext)(), C = {
    location: {
      page: E.AnalyticsPages.USER_PROFILE,
      section: E.AnalyticsSections.PROFILE_MODAL
    }
  };
  return (0, l.jsxs)(n.ScrollerThin, {
    className: I.listScroller,
    fade: !0,
    children: [_ ? (0, l.jsx)(r.default, {
      type: s,
      user: t,
      source: U,
      className: m.userProfileActivity,
      hideHeader: s === c.Types.SIMPLIFIED_PROFILE,
      showChannelDetails: s === c.Types.SIMPLIFIED_PROFILE,
      activity: T,
      actionColor: m.actionColor,
      analyticsParams: C,
      onAction: () => {
        p({
          action: "JOIN_ACTIVITY"
        }), (0, S.trackUserProfileActivityJoined)({
          activityType: E.ActivityTypes.STREAMING,
          activityName: null == T ? void 0 : T.name,
          activityPlatform: null == T ? void 0 : T.platform,
          activitySessionId: null == T ? void 0 : T.session_id,
          applicationId: null == T ? void 0 : T.application_id,
          analyticsLocations: x,
          ...N
        })
      }
    }) : null, A.map(e => (0, l.jsx)(r.default, {
      type: s,
      activity: e,
      user: t,
      useStoreStream: !1,
      source: U,
      className: m.userProfileActivity,
      hideHeader: s === c.Types.SIMPLIFIED_PROFILE,
      showChannelDetails: s === c.Types.SIMPLIFIED_PROFILE,
      actionColor: m.actionColor,
      analyticsParams: C,
      onAction: () => {
        p({
          action: "JOIN_ACTIVITY"
        }), (0, S.trackUserProfileActivityJoined)({
          activityType: e.type,
          activityName: e.name,
          activityPlatform: e.platform,
          activitySessionId: e.session_id,
          applicationId: e.application_id,
          analyticsLocations: x,
          ...N
        })
      }
    }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name)))]
  })
}