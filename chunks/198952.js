"use strict";
a.r(t), a.d(t, {
  FamilyCenterAvatar: function() {
    return d
  }
});
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("204197"),
  i = a("998502"),
  r = a("689938"),
  o = a("666991");
let u = i.default.getEnableHardwareAcceleration() ? s.AnimatedAvatar : s.Avatar,
  d = e => {
    let {
      user: t,
      avatarSize: a = s.AvatarSizes.SIZE_48
    } = e, {
      avatarSrc: i,
      avatarDecorationSrc: d,
      eventHandlers: c
    } = (0, l.default)({
      user: t,
      size: a
    });
    return (0, n.jsx)("div", {
      ...c,
      children: (0, n.jsx)(u, {
        className: o.__invalid_avatar,
        src: i,
        avatarDecoration: d,
        size: a,
        "aria-label": r.default.Messages.FAMILY_CENTER_AVATAR_ARIA.format({
          name: t.username
        })
      })
    })
  };
t.default = e => {
  let {
    currentUser: t,
    otherUser: a,
    children: s
  } = e;
  return (0, n.jsx)("div", {
    className: o.avatarPairContainer,
    children: (0, n.jsxs)("div", {
      className: o.avatarPair,
      children: [(0, n.jsx)(d, {
        user: t
      }), s, (0, n.jsx)(d, {
        user: a
      })]
    })
  })
}