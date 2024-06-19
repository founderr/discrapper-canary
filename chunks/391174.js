n.d(t, {
  Z: function() {
    return o
  }
});
var s = n(735250),
  a = n(470079),
  r = n(120356),
  l = n.n(r),
  i = n(725436),
  u = n(942463),
  c = n(622322);

function o(e) {
  let {
    description: t,
    className: n,
    guildId: r,
    truncate: o = !0
  } = e, E = a.useMemo(() => (0, i.m)(t, !0, {
    guildId: r,
    allowLinks: !0,
    allowHeading: !0,
    allowList: !0
  }), [t, r]);
  return (0, s.jsx)("div", {
    className: l()(u.descriptionText, n, c.markup, {
      [u.truncate]: o
    }),
    children: E
  })
}