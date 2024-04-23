"use strict";
s.r(t);
var a = s("735250");
s("470079");
var r = s("613828"),
  i = s("442837"),
  n = s("481060"),
  l = s("410575"),
  o = s("730749"),
  u = s("666743"),
  d = s("100527"),
  c = s("906732"),
  _ = s("984370"),
  E = s("299657"),
  T = s("594174"),
  I = s("285952"),
  R = s("466111"),
  f = s("981631"),
  S = s("474936"),
  m = s("689938"),
  A = s("507954");
let N = i.default.connectStores([T.default], () => ({
  user: T.default.getCurrentUser()
}))((0, u.default)((0, o.default)(e => {
  let {
    analyticsLocations: t
  } = (0, c.default)(d.default.HOME_PAGE_PREMIUM_TAB), {
    isAuthenticated: s,
    user: i
  } = e;
  return s ? (0, a.jsxs)("div", {
    className: A.homeWrapperNormal,
    children: [(0, a.jsx)(l.default, {
      section: f.AnalyticsSections.NAVIGATION,
      children: (0, a.jsxs)(_.default, {
        isAuthenticated: s,
        className: A.headerBar,
        children: [(0, a.jsx)(_.default.Icon, {
          icon: R.default,
          "aria-hidden": !0
        }), (0, a.jsx)(_.default.Title, {
          children: m.default.Messages.PREMIUM
        })]
      })
    }), (0, a.jsx)(c.AnalyticsLocationProvider, {
      value: t,
      children: null == i ? (0, a.jsx)(I.default, {
        align: I.default.Align.CENTER,
        justify: I.default.Justify.CENTER,
        children: (0, a.jsx)(n.Spinner, {
          className: A.spinner
        })
      }) : (0, a.jsx)(E.default, {
        entrypoint: S.PremiumMarketingEntrypoints.ApplicationStoreHome
      })
    })]
  }) : (0, a.jsx)(r.Redirect, {
    to: f.Routes.LOGIN
  })
})));
t.default = N