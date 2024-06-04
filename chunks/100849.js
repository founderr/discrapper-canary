"use strict";
l.r(t), l.d(t, {
  default: function() {
    return _
  }
});
var s = l("735250"),
  i = l("470079"),
  a = l("442837"),
  n = l("481060"),
  o = l("717881"),
  r = l("906732"),
  u = l("199902"),
  d = l("158776"),
  c = l("543595"),
  f = l("785717"),
  S = l("221292"),
  E = l("981631"),
  I = l("886140"),
  m = l("305944");

function _(e) {
  let {
    user: t,
    type: l
  } = e, _ = (0, a.useStateFromStores)([u.default], () => null != u.default.getAnyStreamForUser(t.id)), v = (0, a.useStateFromStores)([d.default], () => d.default.getActivities(t.id)), p = i.useMemo(() => v.filter(e => e.type !== E.ActivityTypes.CUSTOM_STATUS), [v]), T = i.useMemo(() => _ ? p.find(e => e.type === E.ActivityTypes.PLAYING) : null, [p, _]), g = i.useMemo(() => p.filter(e => e !== T), [T, p]), {
    analyticsLocations: x,
    newestAnalyticsLocation: A
  } = (0, r.default)(), {
    trackUserProfileAction: C,
    ...N
  } = (0, f.useUserProfileAnalyticsContext)(), U = {
    location: {
      page: E.AnalyticsPages.USER_PROFILE,
      section: E.AnalyticsSections.PROFILE_MODAL
    }
  };
  return (0, s.jsxs)(n.ScrollerThin, {
    className: m.listScroller,
    fade: !0,
    children: [_ ? (0, s.jsx)(o.default, {
      type: l,
      user: t,
      source: A,
      className: I.userProfileActivity,
      hideHeader: l === c.Types.SIMPLIFIED_PROFILE,
      showChannelDetails: l === c.Types.SIMPLIFIED_PROFILE,
      activity: T,
      actionColor: I.actionColor,
      analyticsParams: U,
      onAction: () => {
        C({
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
    }) : null, g.map(e => (0, s.jsx)(o.default, {
      type: l,
      activity: e,
      user: t,
      useStoreStream: !1,
      source: A,
      className: I.userProfileActivity,
      hideHeader: l === c.Types.SIMPLIFIED_PROFILE,
      showChannelDetails: l === c.Types.SIMPLIFIED_PROFILE,
      actionColor: I.actionColor,
      analyticsParams: U,
      onAction: () => {
        C({
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