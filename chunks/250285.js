"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  i = n("120356"),
  l = n.n(i),
  r = n("789978"),
  o = n("748780"),
  u = n("91192"),
  d = n("906732"),
  c = n("171368"),
  f = n("981631"),
  E = n("611193");
t.default = e => {
  let {
    userId: t,
    children: n,
    isLast: i,
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
  return (0, a.jsx)(u.ListNavigatorItem, {
    id: t,
    children: e => (0, a.jsx)(r.FocusRing, {
      offset: {
        left: -8,
        right: -8
      },
      children: (0, a.jsx)(o.default.div, {
        style: {
          opacity: 1
        },
        className: l()(E.rowItem, h, {
          [E.last]: i,
          [E.active]: _
        }),
        onMouseEnter: p,
        onMouseLeave: I,
        onClick: S,
        ...e,
        children: n(_)
      })
    })
  })
}