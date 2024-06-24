var s = n(735250);
n(470079);
var i = n(399606),
  a = n(481060),
  l = n(594174),
  r = n(51144),
  c = n(546791),
  o = n(198952),
  d = n(202211);
t.Z = e => {
  let {
    userId: t,
    timestamp: n,
    timestampFormatter: u
  } = e, E = (0, i.e7)([l.default], () => l.default.getUser(t));
  return void 0 === E ? null : (0, s.jsxs)("div", {
    className: d.container,
    children: [(0, s.jsx)(o.r, {
      user: E,
      avatarSize: a.AvatarSizes.SIZE_40
    }), (0, s.jsx)("div", {
      children: (0, s.jsxs)("div", {
        className: d.descriptors,
        children: [(0, s.jsx)(a.Text, {
          variant: "text-md/semibold",
          children: r.ZP.getName(E)
        }), (0, s.jsx)(a.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: (0, c.LI)(new Date(n).getTime(), u)
        })]
      })
    })]
  })
}