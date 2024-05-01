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
  c = s("785717"),
  f = s("221292"),
  S = s("981631"),
  m = s("583483"),
  I = s("613398");

function v(e) {
  let {
    user: t
  } = e, s = (0, i.useStateFromStores)([u.default], () => null != u.default.getAnyStreamForUser(t.id)), v = (0, i.useStateFromStores)([d.default], () => d.default.getActivities(t.id)), E = a.useMemo(() => v.filter(e => e.type !== S.ActivityTypes.CUSTOM_STATUS), [v]), _ = a.useMemo(() => s ? E.find(e => e.type === S.ActivityTypes.PLAYING) : null, [E, s]), x = a.useMemo(() => E.filter(e => e !== _), [_, E]), {
    analyticsLocations: A
  } = (0, o.default)(), {
    trackUserProfileAction: U,
    ...T
  } = (0, c.useUserProfileAnalyticsContext)(), N = {
    location: {
      page: S.AnalyticsPages.USER_PROFILE,
      section: S.AnalyticsSections.PROFILE_MODAL
    }
  };
  return (0, l.jsxs)(n.ScrollerThin, {
    className: I.listScroller,
    fade: !0,
    children: [s ? (0, l.jsx)(r.default, {
      type: r.UserActivityTypes.PROFILE_V2,
      user: t,
      source: "Profile Modal",
      className: m.userProfileActivity,
      activity: _,
      actionColor: m.actionColor,
      analyticsParams: N,
      onAction: () => {
        U({
          action: "JOIN_ACTIVITY"
        }), (0, f.trackUserProfileActivityJoined)({
          activity: _,
          analyticsLocations: A,
          ...T
        })
      }
    }) : null, x.map(e => (0, l.jsx)(r.default, {
      type: r.UserActivityTypes.PROFILE_V2,
      activity: e,
      user: t,
      useStoreStream: !1,
      source: "Profile Modal",
      className: m.userProfileActivity,
      actionColor: m.actionColor,
      analyticsParams: N,
      onAction: () => {
        U({
          action: "JOIN_ACTIVITY"
        }), (0, f.trackUserProfileActivityJoined)({
          activity: e,
          analyticsLocations: A,
          ...T
        })
      }
    }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name)))]
  })
}