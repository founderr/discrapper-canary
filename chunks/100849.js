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
    showActions: a,
    onClose: p
  } = e, T = (0, o.useStateFromStores)([c.default], () => null != c.default.getAnyStreamForUser(t.id)), g = (0, o.useStateFromStores)([f.default], () => f.default.getActivities(t.id)), A = i.useMemo(() => g.filter(e => e.type !== m.ActivityTypes.CUSTOM_STATUS), [g]), C = i.useMemo(() => T ? A.find(e => e.type === m.ActivityTypes.PLAYING) : null, [A, T]), x = i.useMemo(() => A.filter(e => e !== C), [C, A]), {
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
    className: v.listScroller,
    fade: !0,
    children: [T ? (0, s.jsx)(u.default, {
      type: l,
      user: t,
      source: U,
      className: _.userProfileActivity,
      showChannelDetails: l === S.Types.SIMPLIFIED_PROFILE,
      activity: C,
      actionColor: _.actionColor,
      analyticsParams: R,
      showActions: a,
      onOpenGameProfile: p,
      onAction: () => {
        P({
          action: "JOIN_ACTIVITY"
        }), (0, I.trackUserProfileActivityJoined)({
          activityType: m.ActivityTypes.STREAMING,
          activityName: null == C ? void 0 : C.name,
          activityPlatform: null == C ? void 0 : C.platform,
          activitySessionId: null == C ? void 0 : C.session_id,
          applicationId: null == C ? void 0 : C.application_id,
          analyticsLocations: N,
          ...h
        })
      }
    }) : null, x.map(e => (0, s.jsx)(u.default, {
      type: l,
      activity: e,
      user: t,
      useStoreStream: !1,
      source: U,
      className: n()(_.userProfileActivity, l === S.Types.SIMPLIFIED_PROFILE && _.simplifiedProfileActivity),
      showChannelDetails: l === S.Types.SIMPLIFIED_PROFILE,
      actionColor: _.actionColor,
      analyticsParams: R,
      showActions: a,
      onOpenGameProfile: p,
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