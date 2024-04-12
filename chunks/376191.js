"use strict";
a.r(t), a.d(t, {
  default: function() {
    return p
  }
});
var n = a("735250");
a("470079");
var s = a("442837"),
  l = a("481060"),
  i = a("129861"),
  r = a("607070"),
  o = a("1585"),
  u = a("125988"),
  d = a("43267"),
  c = a("699516"),
  f = a("51144"),
  E = a("998502"),
  h = a("620924"),
  _ = a("81471"),
  C = a("689938"),
  m = a("548847");
let S = E.default.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;

function p(e) {
  var t;
  let {
    channel: a,
    otherUser: E,
    active: p
  } = e, I = (0, s.useStateFromStores)([r.default], () => r.default.useReducedMotion), T = (0, s.useStateFromStores)([c.default], () => null == E ? null : c.default.getNickname(E.id)), g = (0, h.useMessageRequestRelativeTimestampText)(a), {
    avatarDecorationSrc: A
  } = (0, u.default)({
    user: E,
    size: (0, o.getDecorationSizeForAvatarSize)(l.AvatarSizes.SIZE_40),
    animateOnHover: !0
  });
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(S, {
      className: m.avatar,
      src: (0, d.getChannelIconURL)(a, 40, !I && p),
      avatarDecoration: A,
      size: l.AvatarSizes.SIZE_40,
      "aria-label": null !== (t = null == E ? void 0 : E.username) && void 0 !== t ? t : C.default.Messages.UNKNOWN_USER
    }), (0, n.jsxs)("div", {
      className: m.userPreview,
      children: [(0, n.jsxs)("div", {
        className: m.userContainerWithPreview,
        children: [(0, n.jsx)(i.default, {
          nick: T,
          user: E,
          showAccountIdentifier: !0,
          className: m.tagContainer,
          usernameClass: m.username,
          discriminatorClass: null != f.default.getGlobalName(E) ? m.globalName : m.discriminator
        }), (0, n.jsx)(l.Text, {
          className: m.timestampWithPreview,
          color: "text-muted",
          variant: "text-xs/normal",
          children: g
        })]
      }), (0, n.jsx)("div", {
        className: m.messagePreview,
        children: (0, n.jsx)(_.default, {
          channel: a
        })
      })]
    })]
  })
}