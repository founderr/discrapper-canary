"use strict";
l.r(t), l.d(t, {
  default: function() {
    return _
  }
});
var s = l("735250"),
  a = l("470079"),
  i = l("442837"),
  n = l("481060"),
  r = l("717881"),
  o = l("906732"),
  u = l("199902"),
  d = l("158776"),
  c = l("543595"),
  f = l("785717"),
  S = l("221292"),
  E = l("981631"),
  m = l("886140"),
  I = l("305944");

function _(e) {
  let {
    user: t,
    type: l
  } = e, _ = (0, i.useStateFromStores)([u.default], () => null != u.default.getAnyStreamForUser(t.id)), v = (0, i.useStateFromStores)([d.default], () => d.default.getActivities(t.id)), g = a.useMemo(() => v.filter(e => e.type !== E.ActivityTypes.CUSTOM_STATUS), [v]), T = a.useMemo(() => _ ? g.find(e => e.type === E.ActivityTypes.PLAYING) : null, [g, _]), A = a.useMemo(() => g.filter(e => e !== T), [T, g]), {
    analyticsLocations: U,
    newestAnalyticsLocation: p
  } = (0, o.default)(), {
    trackUserProfileAction: x,
    ...N
  } = (0, f.useUserProfileAnalyticsContext)(), C = {
    location: {
      page: E.AnalyticsPages.USER_PROFILE,
      section: E.AnalyticsSections.PROFILE_MODAL
    }
  };
  return (0, s.jsxs)(n.ScrollerThin, {
    className: I.listScroller,
    fade: !0,
    children: [_ ? (0, s.jsx)(r.default, {
      type: l,
      user: t,
      source: p,
      className: m.userProfileActivity,
      hideHeader: l === c.Types.SIMPLIFIED_PROFILE,
      showChannelDetails: l === c.Types.SIMPLIFIED_PROFILE,
      activity: T,
      actionColor: m.actionColor,
      analyticsParams: C,
      onAction: () => {
        x({
          action: "JOIN_ACTIVITY"
        }), (0, S.trackUserProfileActivityJoined)({
          activityType: E.ActivityTypes.STREAMING,
          activityName: null == T ? void 0 : T.name,
          activityPlatform: null == T ? void 0 : T.platform,
          activitySessionId: null == T ? void 0 : T.session_id,
          applicationId: null == T ? void 0 : T.application_id,
          analyticsLocations: U,
          ...N
        })
      }
    }) : null, A.map(e => (0, s.jsx)(r.default, {
      type: l,
      activity: e,
      user: t,
      useStoreStream: !1,
      source: p,
      className: m.userProfileActivity,
      hideHeader: l === c.Types.SIMPLIFIED_PROFILE,
      showChannelDetails: l === c.Types.SIMPLIFIED_PROFILE,
      actionColor: m.actionColor,
      analyticsParams: C,
      onAction: () => {
        x({
          action: "JOIN_ACTIVITY"
        }), (0, S.trackUserProfileActivityJoined)({
          activityType: e.type,
          activityName: e.name,
          activityPlatform: e.platform,
          activitySessionId: e.session_id,
          applicationId: e.application_id,
          analyticsLocations: U,
          ...N
        })
      }
    }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name)))]
  })
}