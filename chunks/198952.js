"use strict";
s.r(t), s.d(t, {
  FamilyCenterAvatar: function() {
    return d
  }
});
var a = s("735250");
s("470079");
var n = s("481060"),
  l = s("204197"),
  i = s("998502"),
  r = s("689938"),
  u = s("135473");
let o = i.default.getEnableHardwareAcceleration() ? n.AnimatedAvatar : n.Avatar,
  d = e => {
    let {
      user: t,
      avatarSize: s = n.AvatarSizes.SIZE_48
    } = e, {
      avatarSrc: i,
      avatarDecorationSrc: d,
      eventHandlers: c
    } = (0, l.default)({
      user: t,
      size: s
    });
    return (0, a.jsx)("div", {
      ...c,
      children: (0, a.jsx)(o, {
        className: u.__invalid_avatar,
        src: i,
        avatarDecoration: d,
        size: s,
        "aria-label": r.default.Messages.FAMILY_CENTER_AVATAR_ARIA.format({
          name: t.username
        })
      })
    })
  };
t.default = e => {
  let {
    currentUser: t,
    otherUser: s,
    children: n
  } = e;
  return (0, a.jsx)("div", {
    className: u.avatarPairContainer,
    children: (0, a.jsxs)("div", {
      className: u.avatarPair,
      children: [(0, a.jsx)(d, {
        user: t
      }), n, (0, a.jsx)(d, {
        user: s
      })]
    })
  })
}