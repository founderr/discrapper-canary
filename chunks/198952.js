"use strict";
s.r(t), s.d(t, {
  FamilyCenterAvatar: function() {
    return d
  }
});
var n = s("735250");
s("470079");
var a = s("481060"),
  l = s("204197"),
  i = s("998502"),
  r = s("689938"),
  o = s("135473");
let u = i.default.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar,
  d = e => {
    let {
      user: t,
      avatarSize: s = a.AvatarSizes.SIZE_48
    } = e, {
      avatarSrc: i,
      avatarDecorationSrc: d,
      eventHandlers: c
    } = (0, l.default)({
      user: t,
      size: s
    });
    return (0, n.jsx)("div", {
      ...c,
      children: (0, n.jsx)(u, {
        className: o.__invalid_avatar,
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
    children: a
  } = e;
  return (0, n.jsx)("div", {
    className: o.avatarPairContainer,
    children: (0, n.jsxs)("div", {
      className: o.avatarPair,
      children: [(0, n.jsx)(d, {
        user: t
      }), a, (0, n.jsx)(d, {
        user: s
      })]
    })
  })
}