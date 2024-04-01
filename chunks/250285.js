"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("789978"),
  o = n("748780"),
  u = n("91192"),
  d = n("906732"),
  c = n("171368"),
  f = n("981631"),
  E = n("413934");
t.default = e => {
  let {
    userId: t,
    children: n,
    isLast: l,
    className: _
  } = e, [h, C] = s.useState(!1), {
    analyticsLocations: S
  } = (0, d.default)(), m = s.useCallback(() => {
    (0, c.openUserProfileModal)({
      userId: t,
      sourceAnalyticsLocations: S,
      analyticsLocation: {
        section: f.AnalyticsSections.FAMILY_CENTER
      }
    })
  }, [t, S]), I = () => {
    C(!0)
  }, p = () => {
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
        className: i()(E.rowItem, _, {
          [E.last]: l,
          [E.active]: h
        }),
        onMouseEnter: I,
        onMouseLeave: p,
        onClick: m,
        ...e,
        children: n(h)
      })
    })
  })
}