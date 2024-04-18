"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
});
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("204197"),
  i = a("998502"),
  r = a("631885"),
  o = a("329242"),
  u = a("995302");
let d = i.default.getEnableHardwareAcceleration() ? s.AnimatedAvatar : s.Avatar;

function c(e) {
  let {
    otherUser: t,
    status: a
  } = e, i = (0, r.useLinkTimestampText)(t.id, a), {
    avatarSrc: c,
    avatarDecorationSrc: f,
    eventHandlers: E
  } = (0, l.default)({
    user: t,
    size: s.AvatarSizes.SIZE_40,
    animateOnHover: !0
  });
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("div", {
      ...E,
      children: (0, n.jsx)(d, {
        className: u.avatar,
        src: c,
        avatarDecoration: f,
        size: s.AvatarSizes.SIZE_40,
        "aria-label": t.username
      })
    }), (0, n.jsxs)("div", {
      className: u.userPreview,
      children: [(0, n.jsx)("div", {
        className: u.userContainerWithTimestamp,
        children: (0, n.jsx)(o.default, {
          user: t
        })
      }), (0, n.jsx)(s.Text, {
        className: u.__invalid_timestamp,
        color: "text-muted",
        variant: "text-xs/normal",
        children: i
      })]
    })]
  })
}