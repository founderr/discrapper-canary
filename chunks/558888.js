"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
});
var l = s("735250"),
  a = s("470079"),
  i = s("442837"),
  n = s("717881"),
  r = s("906732"),
  o = s("199902"),
  u = s("158776"),
  d = s("785717"),
  c = s("221292"),
  f = s("981631"),
  S = s("181530");

function m(e) {
  let {
    user: t
  } = e, s = (0, i.useStateFromStores)([o.default], () => null != o.default.getAnyStreamForUser(t.id)), m = (0, i.useStateFromStores)([u.default], () => u.default.getActivities(t.id)), {
    streamingActivity: v,
    restActivities: I
  } = a.useMemo(() => {
    let e = m.filter(e => e.type !== f.ActivityTypes.CUSTOM_STATUS),
      t = s ? e.find(e => e.type === f.ActivityTypes.PLAYING) : null,
      l = e.filter(e => e !== t);
    return {
      streamingActivity: t,
      restActivities: l
    }
  }, [s, m]), {
    analyticsLocations: E,
    newestAnalyticsLocation: x
  } = (0, r.default)(), {
    trackUserProfileAction: A,
    ..._
  } = (0, d.useUserProfileAnalyticsContext)();
  return (0, l.jsxs)("div", {
    children: [s ? (0, l.jsx)(n.default, {
      type: n.UserActivityTypes.SIMPLIFIED_PROFILE,
      user: t,
      source: x,
      className: S.userProfileActivity,
      activity: v,
      actionColor: S.actionColor,
      hideHeader: !0,
      onAction: () => {
        A({
          action: "JOIN_ACTIVITY"
        }), (0, c.trackUserProfileActivityJoined)({
          activity: v,
          analyticsLocations: E,
          ..._
        })
      }
    }) : null, I.map(e => (0, l.jsx)(n.default, {
      type: n.UserActivityTypes.SIMPLIFIED_PROFILE,
      activity: e,
      user: t,
      useStoreStream: !1,
      source: x,
      className: S.userProfileActivity,
      actionColor: S.actionColor,
      hideHeader: !0,
      onAction: () => {
        A({
          action: "JOIN_ACTIVITY"
        }), (0, c.trackUserProfileActivityJoined)({
          activity: e,
          analyticsLocations: E,
          ..._
        })
      }
    }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name)))]
  })
}