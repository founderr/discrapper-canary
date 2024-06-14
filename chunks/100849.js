"use strict";
l.r(t), l.d(t, {
  default: function() {
    return T
  }
});
var s = l("735250"),
  i = l("470079"),
  a = l("120356"),
  n = l.n(a),
  o = l("442837"),
  r = l("481060"),
  u = l("717881"),
  d = l("906732"),
  c = l("199902"),
  f = l("158776"),
  S = l("543595"),
  E = l("785717"),
  I = l("221292"),
  m = l("981631"),
  v = l("886140"),
  _ = l("305944");

function T(e) {
  let {
    user: t,
    type: l,
    showActions: a,
    onClose: T
  } = e, p = (0, o.useStateFromStores)([c.default], () => null != c.default.getAnyStreamForUser(t.id)), x = (0, o.useStateFromStores)([f.default], () => f.default.getActivities(t.id)), g = i.useMemo(() => x.filter(e => e.type !== m.ActivityTypes.CUSTOM_STATUS), [x]), A = i.useMemo(() => p ? g.find(e => e.type === m.ActivityTypes.PLAYING) : null, [g, p]), C = i.useMemo(() => g.filter(e => e !== A), [A, g]), {
    analyticsLocations: N,
    newestAnalyticsLocation: U
  } = (0, d.default)(), {
    trackUserProfileAction: P,
    ...h
  } = (0, E.useUserProfileAnalyticsContext)(), R = {
    location: {
      page: m.AnalyticsPages.USER_PROFILE,
      section: m.AnalyticsSections.PROFILE_MODAL
    }
  };
  return (0, s.jsxs)(r.ScrollerThin, {
    className: _.listScroller,
    fade: !0,
    children: [p ? (0, s.jsx)(u.default, {
      type: l,
      user: t,
      source: U,
      className: v.userProfileActivity,
      showChannelDetails: l === S.Types.SIMPLIFIED_PROFILE,
      activity: A,
      actionColor: v.actionColor,
      analyticsParams: R,
      showActions: a,
      onOpenGameProfile: T,
      onAction: () => {
        P({
          action: "JOIN_ACTIVITY"
        }), (0, I.trackUserProfileActivityJoined)({
          activityType: m.ActivityTypes.STREAMING,
          activityName: null == A ? void 0 : A.name,
          activityPlatform: null == A ? void 0 : A.platform,
          activitySessionId: null == A ? void 0 : A.session_id,
          applicationId: null == A ? void 0 : A.application_id,
          analyticsLocations: N,
          ...h
        })
      }
    }) : null, C.map(e => (0, s.jsx)(u.default, {
      type: l,
      activity: e,
      user: t,
      useStoreStream: !1,
      source: U,
      className: n()(v.userProfileActivity, l === S.Types.SIMPLIFIED_PROFILE && v.simplifiedProfileActivity),
      showChannelDetails: l === S.Types.SIMPLIFIED_PROFILE,
      actionColor: v.actionColor,
      analyticsParams: R,
      showActions: a,
      onOpenGameProfile: T,
      onAction: () => {
        P({
          action: "JOIN_ACTIVITY"
        }), (0, I.trackUserProfileActivityJoined)({
          activityType: e.type,
          activityName: e.name,
          activityPlatform: e.platform,
          activitySessionId: e.session_id,
          applicationId: e.application_id,
          analyticsLocations: N,
          ...h
        })
      }
    }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name)))]
  })
}