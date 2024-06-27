var s = n(735250);
n(470079);
var a = n(399606),
  i = n(481060),
  r = n(594174),
  l = n(51144),
  o = n(546791),
  c = n(198952),
  d = n(202211);
t.Z = e => {
  let {
    userId: t,
    timestamp: n,
    timestampFormatter: _
  } = e, E = (0, a.e7)([r.default], () => r.default.getUser(t));
  return void 0 === E ? null : (0, s.jsxs)("div", {
    className: d.container,
    children: [(0, s.jsx)(c.r, {
      user: E,
      avatarSize: i.AvatarSizes.SIZE_40
    }), (0, s.jsx)("div", {
      children: (0, s.jsxs)("div", {
        className: d.descriptors,
        children: [(0, s.jsx)(i.Text, {
          variant: "text-md/semibold",
          children: l.ZP.getName(E)
        }), (0, s.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: (0, o.LI)(new Date(n).getTime(), _)
        })]
      })
    })]
  })
}