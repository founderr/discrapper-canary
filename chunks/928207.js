"use strict";
s.r(t);
var n = s("735250");
s("470079");
var a = s("613828"),
  r = s("442837"),
  l = s("481060"),
  i = s("410575"),
  u = s("730749"),
  o = s("666743"),
  d = s("100527"),
  c = s("906732"),
  I = s("984370"),
  T = s("299657"),
  E = s("594174"),
  f = s("285952"),
  _ = s("466111"),
  S = s("981631"),
  A = s("474936"),
  R = s("689938"),
  O = s("642642");
let h = r.default.connectStores([E.default], () => ({
  user: E.default.getCurrentUser()
}))((0, o.default)((0, u.default)(e => {
  let {
    analyticsLocations: t
  } = (0, c.default)(d.default.HOME_PAGE_PREMIUM_TAB), {
    isAuthenticated: s,
    user: r
  } = e;
  return s ? (0, n.jsxs)("div", {
    className: O.homeWrapperNormal,
    children: [(0, n.jsx)(i.default, {
      section: S.AnalyticsSections.NAVIGATION,
      children: (0, n.jsxs)(I.default, {
        isAuthenticated: s,
        className: O.headerBar,
        children: [(0, n.jsx)(I.default.Icon, {
          icon: _.default,
          "aria-hidden": !0
        }), (0, n.jsx)(I.default.Title, {
          children: R.default.Messages.PREMIUM
        })]
      })
    }), (0, n.jsx)(c.AnalyticsLocationProvider, {
      value: t,
      children: null == r ? (0, n.jsx)(f.default, {
        align: f.default.Align.CENTER,
        justify: f.default.Justify.CENTER,
        children: (0, n.jsx)(l.Spinner, {
          className: O.spinner
        })
      }) : (0, n.jsx)(T.default, {
        entrypoint: A.PremiumMarketingEntrypoints.ApplicationStoreHome
      })
    })]
  }) : (0, n.jsx)(a.Redirect, {
    to: S.Routes.LOGIN
  })
})));
t.default = h