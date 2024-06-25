var n = s(735250);
s(470079);
var a = s(399606),
  i = s(481060),
  r = s(594174),
  l = s(51144),
  o = s(546791),
  c = s(198952),
  E = s(202211);
t.Z = e => {
  let {
    userId: t,
    timestamp: s,
    timestampFormatter: _
  } = e, u = (0, a.e7)([r.default], () => r.default.getUser(t));
  return void 0 === u ? null : (0, n.jsxs)("div", {
    className: E.container,
    children: [(0, n.jsx)(c.r, {
      user: u,
      avatarSize: i.AvatarSizes.SIZE_40
    }), (0, n.jsx)("div", {
      children: (0, n.jsxs)("div", {
        className: E.descriptors,
        children: [(0, n.jsx)(i.Text, {
          variant: "text-md/semibold",
          children: l.ZP.getName(u)
        }), (0, n.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: (0, o.LI)(new Date(s).getTime(), _)
        })]
      })
    })]
  })
}