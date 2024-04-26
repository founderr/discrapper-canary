"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("399606"),
  l = a("481060"),
  i = a("594174"),
  r = a("51144"),
  o = a("546791"),
  u = a("198952"),
  d = a("960677");
t.default = e => {
  let {
    userId: t,
    timestamp: a,
    timestampFormatter: c
  } = e, f = (0, s.useStateFromStores)([i.default], () => i.default.getUser(t));
  return void 0 === f ? null : (0, n.jsxs)("div", {
    className: d.container,
    children: [(0, n.jsx)(u.FamilyCenterAvatar, {
      user: f,
      avatarSize: l.AvatarSizes.SIZE_40
    }), (0, n.jsx)("div", {
      children: (0, n.jsxs)("div", {
        className: d.descriptors,
        children: [(0, n.jsx)(l.Text, {
          variant: "text-md/semibold",
          children: r.default.getName(f)
        }), (0, n.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: (0, o.formatUserActivityTimestamp)(new Date(a).getTime(), c)
        })]
      })
    })]
  })
}