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
  I = s("583483"),
  E = s("613398");

function v(e) {
  let {
    user: t,
    type: s
  } = e, v = (0, i.useStateFromStores)([u.default], () => null != u.default.getAnyStreamForUser(t.id)), _ = (0, i.useStateFromStores)([d.default], () => d.default.getActivities(t.id)), x = a.useMemo(() => _.filter(e => e.type !== m.ActivityTypes.CUSTOM_STATUS), [_]), T = a.useMemo(() => v ? x.find(e => e.type === m.ActivityTypes.PLAYING) : null, [x, v]), U = a.useMemo(() => x.filter(e => e !== T), [T, x]), {
    analyticsLocations: A,
    newestAnalyticsLocation: N
  } = (0, o.default)(), {
    trackUserProfileAction: g,
    ...C
  } = (0, f.useUserProfileAnalyticsContext)(), h = {
    location: {
      page: m.AnalyticsPages.USER_PROFILE,
      section: m.AnalyticsSections.PROFILE_MODAL
    }
  };
  return (0, l.jsxs)(n.ScrollerThin, {
    className: E.listScroller,
    fade: !0,
    children: [v ? (0, l.jsx)(r.default, {
      type: s,
      user: t,
      source: N,
      className: I.userProfileActivity,
      hideHeader: s === c.Types.SIMPLIFIED_PROFILE,
      activity: T,
      actionColor: I.actionColor,
      analyticsParams: h,
      onAction: () => {
        g({
          action: "JOIN_ACTIVITY"
        }), (0, S.trackUserProfileActivityJoined)({
          activity: T,
          analyticsLocations: A,
          ...C
        })
      }
    }) : null, U.map(e => (0, l.jsx)(r.default, {
      type: s,
      activity: e,
      user: t,
      useStoreStream: !1,
      source: N,
      className: I.userProfileActivity,
      hideHeader: s === c.Types.SIMPLIFIED_PROFILE,
      actionColor: I.actionColor,
      analyticsParams: h,
      onAction: () => {
        g({
          action: "JOIN_ACTIVITY"
        }), (0, S.trackUserProfileActivityJoined)({
          activity: e,
          analyticsLocations: A,
          ...C
        })
      }
    }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name)))]
  })
}