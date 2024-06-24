n(47120);
var s = n(735250),
  i = n(470079),
  a = n(120356),
  l = n.n(a),
  r = n(789978),
  c = n(748780),
  o = n(91192),
  d = n(906732),
  u = n(171368),
  E = n(981631),
  _ = n(611726);
t.Z = e => {
  let {
    userId: t,
    children: n,
    isLast: a,
    className: h
  } = e, [T, I] = i.useState(!1), {
    analyticsLocations: C
  } = (0, d.ZP)(), N = i.useCallback(() => {
    (0, u.openUserProfileModal)({
      userId: t,
      sourceAnalyticsLocations: C,
      analyticsLocation: {
        section: E.jXE.FAMILY_CENTER
      }
    })
  }, [t, C]), g = () => {
    I(!0)
  }, A = () => {
    I(!1)
  };
  return (0, s.jsx)(o.mh, {
    id: t,
    children: e => (0, s.jsx)(r.tE, {
      offset: {
        left: -8,
        right: -8
      },
      children: (0, s.jsx)(c.Z.div, {
        style: {
          opacity: 1
        },
        className: l()(_.rowItem, h, {
          [_.last]: a,
          [_.active]: T
        }),
        onMouseEnter: g,
        onMouseLeave: A,
        onClick: N,
        ...e,
        children: n(T)
      })
    })
  })
}