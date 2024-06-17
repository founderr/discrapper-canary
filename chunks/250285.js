"use strict";
s.r(t), s("47120");
var n = s("735250"),
  a = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("789978"),
  o = s("748780"),
  u = s("91192"),
  d = s("906732"),
  c = s("171368"),
  E = s("981631"),
  f = s("611193");
t.default = e => {
  let {
    userId: t,
    children: s,
    isLast: l,
    className: _
  } = e, [h, m] = a.useState(!1), {
    analyticsLocations: C
  } = (0, d.default)(), T = a.useCallback(() => {
    (0, c.openUserProfileModal)({
      userId: t,
      sourceAnalyticsLocations: C,
      analyticsLocation: {
        section: E.AnalyticsSections.FAMILY_CENTER
      }
    })
  }, [t, C]), g = () => {
    m(!0)
  }, p = () => {
    m(!1)
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
        className: i()(f.rowItem, _, {
          [f.last]: l,
          [f.active]: h
        }),
        onMouseEnter: g,
        onMouseLeave: p,
        onClick: T,
        ...e,
        children: s(h)
      })
    })
  })
}