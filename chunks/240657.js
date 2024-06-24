n.d(t, {
  Z: function() {
    return d
  }
});
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(481060),
  o = n(741914),
  c = n(237475),
  u = n(622322);

function d(e) {
  let {
    color: t,
    className: n,
    variant: l,
    text: d,
    lineClamp: E
  } = e, _ = (0, r.usePrivateHeadingLevel)(), I = i.useMemo(() => null == d ? null : (0, o.Z)(d, !0, {
    allowHeading: null == E,
    allowList: null == E,
    initialHeaderLevel: _
  }), [d, E, _]);
  return (0, s.jsx)(r.Text, {
    className: a()(n, u.markup, {
      [c.lineClamp2Plus]: null != E && E > 1,
      [c.lineClamp1]: 1 === E
    }),
    color: t,
    variant: l,
    lineClamp: E,
    children: I
  })
}