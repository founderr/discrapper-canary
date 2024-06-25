s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  l = s(789978),
  o = s(748780),
  c = s(91192),
  E = s(906732),
  _ = s(171368),
  u = s(981631),
  d = s(611726);
t.Z = e => {
  let {
    userId: t,
    children: s,
    isLast: i,
    className: T
  } = e, [I, R] = a.useState(!1), {
    analyticsLocations: A
  } = (0, E.ZP)(), N = a.useCallback(() => {
    (0, _.openUserProfileModal)({
      userId: t,
      sourceAnalyticsLocations: A,
      analyticsLocation: {
        section: u.jXE.FAMILY_CENTER
      }
    })
  }, [t, A]), C = () => {
    R(!0)
  }, g = () => {
    R(!1)
  };
  return (0, n.jsx)(c.mh, {
    id: t,
    children: e => (0, n.jsx)(l.tE, {
      offset: {
        left: -8,
        right: -8
      },
      children: (0, n.jsx)(o.Z.div, {
        style: {
          opacity: 1
        },
        className: r()(d.rowItem, T, {
          [d.last]: i,
          [d.active]: I
        }),
        onMouseEnter: C,
        onMouseLeave: g,
        onClick: N,
        ...e,
        children: s(I)
      })
    })
  })
}