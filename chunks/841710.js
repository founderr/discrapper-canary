n.d(t, {
  Y: function() {
    return u
  },
  Z: function() {
    return c
  }
});
var i = n(735250);
n(470079);
var s = n(120356),
  l = n.n(s),
  a = n(481060),
  r = n(129861),
  o = n(759610);

function c(e) {
  let {
    user: t,
    status: n,
    isFocused: s,
    guildId: l
  } = e;
  return (0, i.jsxs)("div", {
    className: o.memberItem,
    children: [(0, i.jsx)(a.Avatar, {
      src: t.getAvatarURL(l, 24),
      className: o.avatar,
      "aria-label": t.username,
      size: a.AvatarSizes.SIZE_24,
      status: n,
      statusColor: s ? "currentColor" : void 0
    }), (0, i.jsx)(r.Z, {
      user: t,
      hideDiscriminator: !0
    })]
  })
}

function u(e) {
  let {
    label: t
  } = e;
  return (0, i.jsxs)("div", {
    className: o.memberItem,
    children: [(0, i.jsx)("div", {
      className: l()(o.avatar, o.unknown)
    }), (0, i.jsx)("div", {
      children: t
    })]
  })
}