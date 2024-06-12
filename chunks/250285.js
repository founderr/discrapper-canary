"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("789978"),
  o = s("748780"),
  u = s("91192"),
  d = s("906732"),
  c = s("171368"),
  E = s("981631"),
  _ = s("611193");
t.default = e => {
  let {
    userId: t,
    children: s,
    isLast: l,
    className: f
  } = e, [h, C] = n.useState(!1), {
    analyticsLocations: m
  } = (0, d.default)(), T = n.useCallback(() => {
    (0, c.openUserProfileModal)({
      userId: t,
      sourceAnalyticsLocations: m,
      analyticsLocation: {
        section: E.AnalyticsSections.FAMILY_CENTER
      }
    })
  }, [t, m]), g = () => {
    C(!0)
  }, A = () => {
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
        className: i()(_.rowItem, f, {
          [_.last]: l,
          [_.active]: h
        }),
        onMouseEnter: g,
        onMouseLeave: A,
        onClick: T,
        ...e,
        children: s(h)
      })
    })
  })
}