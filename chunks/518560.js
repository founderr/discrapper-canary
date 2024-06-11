"use strict";
a.r(t), a.d(t, {
  default: function() {
    return g
  }
});
var n = a("735250"),
  i = a("470079"),
  s = a("286379"),
  l = a("481060"),
  u = a("797614"),
  r = a("626135"),
  o = a("103879"),
  c = a("451284"),
  d = a("802429"),
  _ = a("846488"),
  S = a("181211"),
  E = a("811085"),
  T = a("967254"),
  f = a("981631"),
  A = a("689938"),
  I = a("915307");

function g() {
  let e = (0, S.default)(),
    t = (0, _.useSafetyHubInitialized)(),
    a = (0, c.useSafetyHubAccountStanding)(),
    g = (0, d.useSafetyHubFetchError)();
  return (i.useEffect(() => {
    o.getSafetyHubData()
  }, []), i.useEffect(() => {
    t && (r.default.track(f.AnalyticEvents.SAFETY_HUB_VIEWED, {
      account_standing: a.state
    }), u.default.increment({
      name: s.MetricEvents.SAFETY_HUB_VIEW
    }))
  }, [t]), e) ? (0, n.jsx)("div", {
    children: (0, n.jsx)(l.Spinner, {})
  }) : null != g ? (0, n.jsxs)(l.Notice, {
    color: l.NoticeColors.DANGER,
    className: I.nagbar,
    children: [A.default.Messages.SAFETY_HUB_ERROR_MESSAGE, (0, n.jsx)(l.NoticeButton, {
      onClick: () => o.getSafetyHubData(),
      children: A.default.Messages.SAFETY_HUB_ERROR_ACTION_BUTTON
    })]
  }) : (0, n.jsxs)("div", {
    className: I.container,
    children: [(0, n.jsx)(E.default, {}), (0, n.jsx)(T.ConnectedSafetyHubViolationsContainer, {})]
  })
}