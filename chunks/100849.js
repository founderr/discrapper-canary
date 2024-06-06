"use strict";
l.r(t), l.d(t, {
  default: function() {
    return p
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
  _ = l("886140"),
  v = l("305944");

function p(e) {
  let {
    user: t,
    type: l,
    showActions: a
  } = e, p = (0, o.useStateFromStores)([c.default], () => null != c.default.getAnyStreamForUser(t.id)), T = (0, o.useStateFromStores)([f.default], () => f.default.getActivities(t.id)), g = i.useMemo(() => T.filter(e => e.type !== m.ActivityTypes.CUSTOM_STATUS), [T]), x = i.useMemo(() => p ? g.find(e => e.type === m.ActivityTypes.PLAYING) : null, [g, p]), A = i.useMemo(() => g.filter(e => e !== x), [x, g]), {
    analyticsLocations: U,
    newestAnalyticsLocation: N
  } = (0, d.default)(), {
    trackUserProfileAction: C,
    ...R
  } = (0, E.useUserProfileAnalyticsContext)(), h = {
    location: {
      page: m.AnalyticsPages.USER_PROFILE,
      section: m.AnalyticsSections.PROFILE_MODAL
    }
  };
  return (0, s.jsxs)(r.ScrollerThin, {
    className: v.listScroller,
    fade: !0,
    children: [p ? (0, s.jsx)(u.default, {
      type: l,
      user: t,
      source: N,
      className: _.userProfileActivity,
      showChannelDetails: l === S.Types.SIMPLIFIED_PROFILE,
      activity: x,
      actionColor: _.actionColor,
      analyticsParams: h,
      showActions: a,
      onAction: () => {
        C({
          action: "JOIN_ACTIVITY"
        }), (0, I.trackUserProfileActivityJoined)({
          activityType: m.ActivityTypes.STREAMING,
          activityName: null == x ? void 0 : x.name,
          activityPlatform: null == x ? void 0 : x.platform,
          activitySessionId: null == x ? void 0 : x.session_id,
          applicationId: null == x ? void 0 : x.application_id,
          analyticsLocations: U,
          ...R
        })
      }
    }) : null, A.map(e => (0, s.jsx)(u.default, {
      type: l,
      activity: e,
      user: t,
      useStoreStream: !1,
      source: N,
      className: n()(_.userProfileActivity, l === S.Types.SIMPLIFIED_PROFILE && _.simplifiedProfileActivity),
      showChannelDetails: l === S.Types.SIMPLIFIED_PROFILE,
      actionColor: _.actionColor,
      analyticsParams: h,
      showActions: a,
      onAction: () => {
        C({
          action: "JOIN_ACTIVITY"
        }), (0, I.trackUserProfileActivityJoined)({
          activityType: e.type,
          activityName: e.name,
          activityPlatform: e.platform,
          activitySessionId: e.session_id,
          applicationId: e.application_id,
          analyticsLocations: U,
          ...R
        })
      }
    }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name)))]
  })
}