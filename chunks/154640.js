"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("15542"),
  o = n("458960"),
  u = n("355262"),
  d = n("401642"),
  c = n("49111"),
  f = n("161950"),
  E = e => {
    let {
      userId: t,
      children: n,
      isLast: i,
      className: E
    } = e, [h, _] = s.useState(!1), C = s.useCallback(() => {
      (0, d.openUserProfileModal)({
        userId: t,
        analyticsLocation: {
          section: c.AnalyticsSections.FAMILY_CENTER
        }
      })
    }, [t]), I = () => {
      _(!0)
    }, S = () => {
      _(!1)
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
          className: l(f.rowItem, E, {
            [f.last]: i,
            [f.active]: h
          }),
          onMouseEnter: I,
          onMouseLeave: S,
          onClick: C,
          ...e,
          children: n(h)
        })
      })
    })
  }