"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("789978"),
  o = a("748780"),
  u = a("91192"),
  d = a("906732"),
  c = a("171368"),
  f = a("981631"),
  E = a("367019");
t.default = e => {
  let {
    userId: t,
    children: a,
    isLast: l,
    className: h
  } = e, [_, C] = s.useState(!1), {
    analyticsLocations: m
  } = (0, d.default)(), S = s.useCallback(() => {
    (0, c.openUserProfileModal)({
      userId: t,
      sourceAnalyticsLocations: m,
      analyticsLocation: {
        section: f.AnalyticsSections.FAMILY_CENTER
      }
    })
  }, [t, m]), p = () => {
    C(!0)
  }, I = () => {
    C(!1)
  };
  return (0, n.jsx)(u.ListNavigatorItem, {
    id: t,
    children: e => (0, n.jsx)(r.FocusRing, {
      offset: {
        left: -8,
        right: -8
      },
      children: (0, n.jsx)(o.default.div, {
        style: {
          opacity: 1
        },
        className: i()(E.rowItem, h, {
          [E.last]: l,
          [E.active]: _
        }),
        onMouseEnter: p,
        onMouseLeave: I,
        onClick: S,
        ...e,
        children: a(_)
      })
    })
  })
}