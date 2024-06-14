"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var n = s("735250");
s("470079");
var a = s("481060"),
  l = s("204197"),
  i = s("998502"),
  r = s("631885"),
  o = s("329242"),
  u = s("110627");
let d = i.default.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;

function c(e) {
  let {
    otherUser: t,
    status: s
  } = e, i = (0, r.useLinkTimestampText)(t.id, s), {
    avatarSrc: c,
    avatarDecorationSrc: E,
    eventHandlers: _
  } = (0, l.default)({
    user: t,
    size: a.AvatarSizes.SIZE_40,
    animateOnHover: !0
  });
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("div", {
      ..._,
      children: (0, n.jsx)(d, {
        className: u.avatar,
        src: c,
        avatarDecoration: E,
        size: a.AvatarSizes.SIZE_40,
        "aria-label": t.username
      })
    }), (0, n.jsxs)("div", {
      className: u.userPreview,
      children: [(0, n.jsx)("div", {
        className: u.userContainerWithTimestamp,
        children: (0, n.jsx)(o.default, {
          user: t
        })
      }), (0, n.jsx)(a.Text, {
        className: u.__invalid_timestamp,
        color: "text-muted",
        variant: "text-xs/normal",
        children: i
      })]
    })]
  })
}