n.d(t, {
  Y: function() {
    return u
  },
  Z: function() {
    return c
  }
});
var s = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  a = n(481060),
  r = n(129861),
  o = n(759610);

function c(e) {
  let {
    user: t,
    status: n,
    isFocused: i,
    guildId: l
  } = e;
  return (0, s.jsxs)("div", {
    className: o.memberItem,
    children: [(0, s.jsx)(a.Avatar, {
      src: t.getAvatarURL(l, 24),
      className: o.avatar,
      "aria-label": t.username,
      size: a.AvatarSizes.SIZE_24,
      status: n,
      statusColor: i ? "currentColor" : void 0
    }), (0, s.jsx)(r.Z, {
      user: t,
      hideDiscriminator: !0
    })]
  })
}

function u(e) {
  let {
    label: t
  } = e;
  return (0, s.jsxs)("div", {
    className: o.memberItem,
    children: [(0, s.jsx)("div", {
      className: l()(o.avatar, o.unknown)
    }), (0, s.jsx)("div", {
      children: t
    })]
  })
}