"use strict";
a.r(e), a.d(e, {
  default: function() {
    return N
  }
});
var n = a("37983"),
  s = a("884691"),
  i = a("432710"),
  l = a("77078"),
  r = a("155084"),
  u = a("489622"),
  o = a("599110"),
  c = a("781324"),
  d = a("132206"),
  _ = a("333781"),
  S = a("422671"),
  E = a("792105"),
  f = a("133479"),
  T = a("966677"),
  A = a("49111"),
  I = a("782340"),
  g = a("302713");

function N() {
  let t = (0, E.default)(),
    e = (0, S.useSafetyHubInitialized)(),
    a = (0, d.useSafetyHubAccountStanding)(),
    N = (0, _.useSafetyHubFetchError)();
  return (s.useEffect(() => {
    c.getSafetyHubData()
  }, []), s.useEffect(() => {
    e && (o.default.track(A.AnalyticEvents.SAFETY_HUB_VIEWED, {
      account_standing: a.state
    }), r.default.increment({
      name: i.MetricEvents.SAFETY_HUB_VIEW
    }))
  }, [e]), t) ? (0, n.jsx)("div", {
    children: (0, n.jsx)(l.Spinner, {})
  }) : null != N ? (0, n.jsxs)(u.default, {
    color: u.NoticeColors.DANGER,
    className: g.nagbar,
    children: [I.default.Messages.SAFETY_HUB_ERROR_MESSAGE, (0, n.jsx)(u.NoticeButton, {
      onClick: () => c.getSafetyHubData(),
      children: I.default.Messages.SAFETY_HUB_ERROR_ACTION_BUTTON
    })]
  }) : (0, n.jsxs)("div", {
    className: g.container,
    children: [(0, n.jsx)(f.default, {}), (0, n.jsx)(T.ConnectedSafetyHubViolationsContainer, {})]
  })
}