t.d(A, {
  Z: function() {
    return c
  }
});
var n = t(735250),
  a = t(470079),
  s = t(120356),
  r = t.n(s),
  l = t(481060),
  o = t(741914),
  i = t(237475),
  d = t(622322);

function c(e) {
  let {
    color: A,
    className: t,
    variant: s,
    text: c,
    lineClamp: u
  } = e, C = (0, l.usePrivateHeadingLevel)(), g = a.useMemo(() => null == c ? null : (0, o.Z)(c, !0, {
    allowHeading: null == u,
    allowList: null == u,
    initialHeaderLevel: C
  }), [c, u, C]);
  return (0, n.jsx)(l.Text, {
    className: r()(t, d.markup, {
      [i.lineClamp2Plus]: null != u && u > 1,
      [i.lineClamp1]: 1 === u
    }),
    color: A,
    variant: s,
    lineClamp: u,
    children: g
  })
}