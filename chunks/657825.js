"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("399606"),
  l = s("481060"),
  i = s("594174"),
  r = s("51144"),
  u = s("546791"),
  o = s("198952"),
  d = s("619208");
t.default = e => {
  let {
    userId: t,
    timestamp: s,
    timestampFormatter: c
  } = e, E = (0, n.useStateFromStores)([i.default], () => i.default.getUser(t));
  return void 0 === E ? null : (0, a.jsxs)("div", {
    className: d.container,
    children: [(0, a.jsx)(o.FamilyCenterAvatar, {
      user: E,
      avatarSize: l.AvatarSizes.SIZE_40
    }), (0, a.jsx)("div", {
      children: (0, a.jsxs)("div", {
        className: d.descriptors,
        children: [(0, a.jsx)(l.Text, {
          variant: "text-md/semibold",
          children: r.default.getName(E)
        }), (0, a.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: (0, u.formatUserActivityTimestamp)(new Date(s).getTime(), c)
        })]
      })
    })]
  })
}