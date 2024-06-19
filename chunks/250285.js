n(47120);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  l = n.n(i),
  r = n(789978),
  o = n(748780),
  c = n(91192),
  d = n(906732),
  u = n(171368),
  E = n(981631),
  _ = n(611726);
t.Z = e => {
  let {
    userId: t,
    children: n,
    isLast: i,
    className: h
  } = e, [m, T] = a.useState(!1), {
    analyticsLocations: C
  } = (0, d.ZP)(), g = a.useCallback(() => {
    (0, u.openUserProfileModal)({
      userId: t,
      sourceAnalyticsLocations: C,
      analyticsLocation: {
        section: E.jXE.FAMILY_CENTER
      }
    })
  }, [t, C]), p = () => {
    T(!0)
  }, N = () => {
    T(!1)
  };
  return (0, s.jsx)(c.mh, {
    id: t,
    children: e => (0, s.jsx)(r.tE, {
      offset: {
        left: -8,
        right: -8
      },
      children: (0, s.jsx)(o.Z.div, {
        style: {
          opacity: 1
        },
        className: l()(_.rowItem, h, {
          [_.last]: i,
          [_.active]: m
        }),
        onMouseEnter: p,
        onMouseLeave: N,
        onClick: g,
        ...e,
        children: n(m)
      })
    })
  })
}