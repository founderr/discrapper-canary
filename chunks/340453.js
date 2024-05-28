"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("735250");
s("470079");
var n = s("481060"),
  l = s("204197"),
  i = s("998502"),
  r = s("631885"),
  u = s("329242"),
  o = s("110627");
let d = i.default.getEnableHardwareAcceleration() ? n.AnimatedAvatar : n.Avatar;

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
    size: n.AvatarSizes.SIZE_40,
    animateOnHover: !0
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      ..._,
      children: (0, a.jsx)(d, {
        className: o.avatar,
        src: c,
        avatarDecoration: E,
        size: n.AvatarSizes.SIZE_40,
        "aria-label": t.username
      })
    }), (0, a.jsxs)("div", {
      className: o.userPreview,
      children: [(0, a.jsx)("div", {
        className: o.userContainerWithTimestamp,
        children: (0, a.jsx)(u.default, {
          user: t
        })
      }), (0, a.jsx)(n.Text, {
        className: o.__invalid_timestamp,
        color: "text-muted",
        variant: "text-xs/normal",
        children: i
      })]
    })]
  })
}