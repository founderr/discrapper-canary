n.d(t, {
  Z: function() {
    return h
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  a = n(607070),
  r = n(43267),
  o = n(933557),
  c = n(266076),
  u = n(204197),
  d = n(967128);

function h(e) {
  var t;
  let {
    channel: n,
    children: h,
    user: m
  } = e, E = (0, i.e7)([a.Z], () => a.Z.useReducedMotion), p = null !== (t = (0, o.ZP)(n)) && void 0 !== t ? t : "", {
    avatarDecorationSrc: g,
    eventHandlers: f,
    isAnimating: C
  } = (0, u.Z)({
    user: m,
    size: s.AvatarSizes.SIZE_80,
    animateOnHover: !0
  });
  return (0, l.jsxs)(d.ZP, {
    channelId: n.id,
    ...f,
    children: [(() => {
      let e = !E && C;
      return n.isMultiUserDM() ? (0, l.jsx)(c.Z, {
        channel: n,
        size: s.AvatarSizes.SIZE_80,
        experimentLocation: "empty_messages",
        animated: e,
        "aria-label": p
      }) : (0, l.jsx)(s.Avatar, {
        "aria-label": p,
        size: s.AvatarSizes.SIZE_80,
        src: (0, r.x)(n, 80, e),
        avatarDecoration: g
      })
    })(), (0, l.jsx)(d.Ot, {
      children: p
    }), (0, l.jsx)(d.jz, {
      children: h
    })]
  })
}