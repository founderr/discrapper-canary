var n = t(735250);
t(470079);
var r = t(266067),
  i = t(442837),
  a = t(481060),
  l = t(410575),
  o = t(730749),
  c = t(666743),
  u = t(100527),
  I = t(906732),
  T = t(984370),
  d = t(299657),
  _ = t(594174),
  E = t(285952),
  S = t(981631),
  O = t(474936),
  A = t(689938),
  N = t(171334);
let R = i.ZP.connectStores([_.default], () => ({
  user: _.default.getCurrentUser()
}))((0, c.Z)((0, o.Z)(e => {
  let {
    analyticsLocations: s
  } = (0, I.ZP)(u.Z.HOME_PAGE_PREMIUM_TAB), {
    isAuthenticated: t,
    user: i
  } = e;
  return t ? (0, n.jsxs)("div", {
    className: N.homeWrapperNormal,
    children: [(0, n.jsx)(l.Z, {
      section: S.jXE.NAVIGATION,
      children: (0, n.jsxs)(T.Z, {
        isAuthenticated: t,
        className: N.headerBar,
        children: [(0, n.jsx)(T.Z.Icon, {
          icon: a.NitroWheelIcon,
          "aria-hidden": !0
        }), (0, n.jsx)(T.Z.Title, {
          children: A.Z.Messages.PREMIUM
        })]
      })
    }), (0, n.jsx)(I.Gt, {
      value: s,
      children: null == i ? (0, n.jsx)(E.Z, {
        align: E.Z.Align.CENTER,
        justify: E.Z.Justify.CENTER,
        children: (0, n.jsx)(a.Spinner, {
          className: N.spinner
        })
      }) : (0, n.jsx)(d.Z, {
        entrypoint: O.EZ.ApplicationStoreHome
      })
    })]
  }) : (0, n.jsx)(r.l_, {
    to: S.Z5c.LOGIN
  })
})));
s.Z = R