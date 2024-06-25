var s = n(735250);
n(470079);
var i = n(266067),
  l = n(442837),
  a = n(481060),
  r = n(410575),
  o = n(730749),
  c = n(666743),
  u = n(100527),
  d = n(906732),
  E = n(984370),
  h = n(299657),
  _ = n(594174),
  I = n(285952),
  m = n(981631),
  T = n(474936),
  g = n(689938),
  p = n(171334);
let N = l.ZP.connectStores([_.default], () => ({
  user: _.default.getCurrentUser()
}))((0, c.Z)((0, o.Z)(e => {
  let {
    analyticsLocations: t
  } = (0, d.ZP)(u.Z.HOME_PAGE_PREMIUM_TAB), {
    isAuthenticated: n,
    user: l
  } = e;
  return n ? (0, s.jsxs)("div", {
    className: p.homeWrapperNormal,
    children: [(0, s.jsx)(r.Z, {
      section: m.jXE.NAVIGATION,
      children: (0, s.jsxs)(E.Z, {
        isAuthenticated: n,
        className: p.headerBar,
        children: [(0, s.jsx)(E.Z.Icon, {
          icon: a.NitroWheelIcon,
          "aria-hidden": !0
        }), (0, s.jsx)(E.Z.Title, {
          children: g.Z.Messages.PREMIUM
        })]
      })
    }), (0, s.jsx)(d.Gt, {
      value: t,
      children: null == l ? (0, s.jsx)(I.Z, {
        align: I.Z.Align.CENTER,
        justify: I.Z.Justify.CENTER,
        children: (0, s.jsx)(a.Spinner, {
          className: p.spinner
        })
      }) : (0, s.jsx)(h.Z, {
        entrypoint: T.EZ.ApplicationStoreHome
      })
    })]
  }) : (0, s.jsx)(i.l_, {
    to: m.Z5c.LOGIN
  })
})));
t.Z = N