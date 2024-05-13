"use strict";
n.r(t), n.d(t, {
  NowPlayingUnknownMemberMenuItem: function() {
    return d
  },
  default: function() {
    return u
  }
});
var a = n("735250");
n("470079");
var s = n("120356"),
  i = n.n(s),
  l = n("481060"),
  r = n("129861"),
  o = n("955124");

function u(e) {
  let {
    user: t,
    status: n,
    isFocused: s,
    guildId: i
  } = e;
  return (0, a.jsxs)("div", {
    className: o.memberItem,
    children: [(0, a.jsx)(l.Avatar, {
      src: t.getAvatarURL(i, 24),
      className: o.avatar,
      "aria-label": t.username,
      size: l.AvatarSizes.SIZE_24,
      status: n,
      statusColor: s ? "currentColor" : void 0
    }), (0, a.jsx)(r.default, {
      user: t,
      hideDiscriminator: !0
    })]
  })
}

function d(e) {
  let {
    label: t
  } = e;
  return (0, a.jsxs)("div", {
    className: o.memberItem,
    children: [(0, a.jsx)("div", {
      className: i()(o.avatar, o.unknown)
    }), (0, a.jsx)("div", {
      children: t
    })]
  })
}