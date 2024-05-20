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
  m = s("981631"),
  E = s("886140"),
  I = s("305944");

function _(e) {
  let {
    user: t,
    type: s
  } = e, _ = (0, i.useStateFromStores)([u.default], () => null != u.default.getAnyStreamForUser(t.id)), v = (0, i.useStateFromStores)([d.default], () => d.default.getActivities(t.id)), T = a.useMemo(() => v.filter(e => e.type !== m.ActivityTypes.CUSTOM_STATUS), [v]), A = a.useMemo(() => _ ? T.find(e => e.type === m.ActivityTypes.PLAYING) : null, [T, _]), g = a.useMemo(() => T.filter(e => e !== A), [A, T]), {
    analyticsLocations: U,
    newestAnalyticsLocation: x
  } = (0, o.default)(), {
    trackUserProfileAction: N,
    ...C
  } = (0, f.useUserProfileAnalyticsContext)(), p = {
    location: {
      page: m.AnalyticsPages.USER_PROFILE,
      section: m.AnalyticsSections.PROFILE_MODAL
    }
  };
  return (0, l.jsxs)(n.ScrollerThin, {
    className: I.listScroller,
    fade: !0,
    children: [_ ? (0, l.jsx)(r.default, {
      type: s,
      user: t,
      source: x,
      className: E.userProfileActivity,
      hideHeader: s === c.Types.SIMPLIFIED_PROFILE,
      showChannelDetails: s === c.Types.SIMPLIFIED_PROFILE,
      activity: A,
      actionColor: E.actionColor,
      analyticsParams: p,
      onAction: () => {
        N({
          action: "JOIN_ACTIVITY"
        }), (0, S.trackUserProfileActivityJoined)({
          activityType: m.ActivityTypes.STREAMING,
          activityName: null == A ? void 0 : A.name,
          activityPlatform: null == A ? void 0 : A.platform,
          activitySessionId: null == A ? void 0 : A.session_id,
          applicationId: null == A ? void 0 : A.application_id,
          analyticsLocations: U,
          ...C
        })
      }
    }) : null, g.map(e => (0, l.jsx)(r.default, {
      type: s,
      activity: e,
      user: t,
      useStoreStream: !1,
      source: x,
      className: E.userProfileActivity,
      hideHeader: s === c.Types.SIMPLIFIED_PROFILE,
      showChannelDetails: s === c.Types.SIMPLIFIED_PROFILE,
      actionColor: E.actionColor,
      analyticsParams: p,
      onAction: () => {
        N({
          action: "JOIN_ACTIVITY"
        }), (0, S.trackUserProfileActivityJoined)({
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