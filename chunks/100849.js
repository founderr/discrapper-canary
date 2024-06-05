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
    type: l
  } = e, a = (0, o.useStateFromStores)([c.default], () => null != c.default.getAnyStreamForUser(t.id)), p = (0, o.useStateFromStores)([f.default], () => f.default.getActivities(t.id)), T = i.useMemo(() => p.filter(e => e.type !== m.ActivityTypes.CUSTOM_STATUS), [p]), g = i.useMemo(() => a ? T.find(e => e.type === m.ActivityTypes.PLAYING) : null, [T, a]), x = i.useMemo(() => T.filter(e => e !== g), [g, T]), {
    analyticsLocations: U,
    newestAnalyticsLocation: A
  } = (0, d.default)(), {
    trackUserProfileAction: N,
    ...C
  } = (0, E.useUserProfileAnalyticsContext)(), R = {
    location: {
      page: m.AnalyticsPages.USER_PROFILE,
      section: m.AnalyticsSections.PROFILE_MODAL
    }
  };
  return (0, s.jsxs)(r.ScrollerThin, {
    className: v.listScroller,
    fade: !0,
    children: [a ? (0, s.jsx)(u.default, {
      type: l,
      user: t,
      source: A,
      className: _.userProfileActivity,
      showChannelDetails: l === S.Types.SIMPLIFIED_PROFILE,
      activity: g,
      actionColor: _.actionColor,
      analyticsParams: R,
      onAction: () => {
        N({
          action: "JOIN_ACTIVITY"
        }), (0, I.trackUserProfileActivityJoined)({
          activityType: m.ActivityTypes.STREAMING,
          activityName: null == g ? void 0 : g.name,
          activityPlatform: null == g ? void 0 : g.platform,
          activitySessionId: null == g ? void 0 : g.session_id,
          applicationId: null == g ? void 0 : g.application_id,
          analyticsLocations: U,
          ...C
        })
      }
    }) : null, x.map(e => (0, s.jsx)(u.default, {
      type: l,
      activity: e,
      user: t,
      useStoreStream: !1,
      source: A,
      className: n()(_.userProfileActivity, l === S.Types.SIMPLIFIED_PROFILE && _.simplifiedProfileActivity),
      showChannelDetails: l === S.Types.SIMPLIFIED_PROFILE,
      actionColor: _.actionColor,
      analyticsParams: R,
      onAction: () => {
        N({
          action: "JOIN_ACTIVITY"
        }), (0, I.trackUserProfileActivityJoined)({
          activityType: e.type,
          activityName: e.name,
          activityPlatform: e.platform,
          activitySessionId: e.session_id,
          applicationId: e.application_id,
          analyticsLocations: U,
          ...C
        })
      }
    }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name)))]
  })
}