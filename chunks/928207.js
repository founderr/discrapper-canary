"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("613828"),
  r = s("442837"),
  l = s("481060"),
  n = s("410575"),
  o = s("730749"),
  u = s("666743"),
  d = s("100527"),
  c = s("906732"),
  _ = s("984370"),
  E = s("299657"),
  C = s("594174"),
  f = s("285952"),
  T = s("466111"),
  I = s("981631"),
  R = s("474936"),
  S = s("689938"),
  p = s("507954");
let m = r.default.connectStores([C.default], () => ({
  user: C.default.getCurrentUser()
}))((0, u.default)((0, o.default)(e => {
  let {
    analyticsLocations: t
  } = (0, c.default)(d.default.HOME_PAGE_PREMIUM_TAB), {
    isAuthenticated: s,
    user: r
  } = e;
  return s ? (0, a.jsxs)("div", {
    className: p.homeWrapperNormal,
    children: [(0, a.jsx)(n.default, {
      section: I.AnalyticsSections.NAVIGATION,
      children: (0, a.jsxs)(_.default, {
        isAuthenticated: s,
        className: p.headerBar,
        children: [(0, a.jsx)(_.default.Icon, {
          icon: T.default,
          "aria-hidden": !0
        }), (0, a.jsx)(_.default.Title, {
          children: S.default.Messages.PREMIUM
        })]
      })
    }), (0, a.jsx)(c.AnalyticsLocationProvider, {
      value: t,
      children: null == r ? (0, a.jsx)(f.default, {
        align: f.default.Align.CENTER,
        justify: f.default.Justify.CENTER,
        children: (0, a.jsx)(l.Spinner, {
          className: p.spinner
        })
      }) : (0, a.jsx)(E.default, {
        entrypoint: R.PremiumMarketingEntrypoints.ApplicationStoreHome
      })
    })]
  }) : (0, a.jsx)(i.Redirect, {
    to: I.Routes.LOGIN
  })
})));
t.default = m