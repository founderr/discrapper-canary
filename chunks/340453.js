"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("735250");
n("470079");
var s = n("481060"),
  i = n("204197"),
  l = n("998502"),
  r = n("631885"),
  o = n("329242"),
  u = n("795454");
let d = l.default.getEnableHardwareAcceleration() ? s.AnimatedAvatar : s.Avatar;

function c(e) {
  let {
    otherUser: t,
    status: n
  } = e, l = (0, r.useLinkTimestampText)(t.id, n), {
    avatarSrc: c,
    avatarDecorationSrc: f,
    eventHandlers: E
  } = (0, i.default)({
    user: t,
    size: s.AvatarSizes.SIZE_40,
    animateOnHover: !0
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      ...E,
      children: (0, a.jsx)(d, {
        className: u.avatar,
        src: c,
        avatarDecoration: f,
        size: s.AvatarSizes.SIZE_40,
        "aria-label": t.username
      })
    }), (0, a.jsxs)("div", {
      className: u.userPreview,
      children: [(0, a.jsx)("div", {
        className: u.userContainerWithTimestamp,
        children: (0, a.jsx)(o.default, {
          user: t
        })
      }), (0, a.jsx)(s.Text, {
        className: u.__invalid_timestamp,
        color: "text-muted",
        variant: "text-xs/normal",
        children: l
      })]
    })]
  })
}