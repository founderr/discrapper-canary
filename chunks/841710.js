"use strict";
a.r(t), a.d(t, {
  NowPlayingUnknownMemberMenuItem: function() {
    return d
  },
  default: function() {
    return u
  }
});
var n = a("735250");
a("470079");
var s = a("120356"),
  l = a.n(s),
  i = a("481060"),
  r = a("129861"),
  o = a("773051");

function u(e) {
  let {
    user: t,
    status: a,
    isFocused: s,
    guildId: l
  } = e;
  return (0, n.jsxs)("div", {
    className: o.memberItem,
    children: [(0, n.jsx)(i.Avatar, {
      src: t.getAvatarURL(l, 24),
      className: o.avatar,
      "aria-label": t.username,
      size: i.AvatarSizes.SIZE_24,
      status: a,
      statusColor: s ? "currentColor" : void 0
    }), (0, n.jsx)(r.default, {
      user: t,
      hideDiscriminator: !0
    })]
  })
}

function d(e) {
  let {
    label: t
  } = e;
  return (0, n.jsxs)("div", {
    className: o.memberItem,
    children: [(0, n.jsx)("div", {
      className: l()(o.avatar, o.unknown)
    }), (0, n.jsx)("div", {
      children: t
    })]
  })
}