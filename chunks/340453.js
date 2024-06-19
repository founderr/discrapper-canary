n.d(t, {
  Z: function() {
    return u
  }
});
var s = n(735250);
n(470079);
var a = n(481060),
  i = n(204197),
  l = n(998502),
  r = n(631885),
  o = n(329242),
  c = n(333545);
let d = l.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;

function u(e) {
  let {
    otherUser: t,
    status: n
  } = e, l = (0, r.j_)(t.id, n), {
    avatarSrc: u,
    avatarDecorationSrc: E,
    eventHandlers: _
  } = (0, i.Z)({
    user: t,
    size: a.AvatarSizes.SIZE_40,
    animateOnHover: !0
  });
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)("div", {
      ..._,
      children: (0, s.jsx)(d, {
        className: c.avatar,
        src: u,
        avatarDecoration: E,
        size: a.AvatarSizes.SIZE_40,
        "aria-label": t.username
      })
    }), (0, s.jsxs)("div", {
      className: c.userPreview,
      children: [(0, s.jsx)("div", {
        className: c.userContainerWithTimestamp,
        children: (0, s.jsx)(o.Z, {
          user: t
        })
      }), (0, s.jsx)(a.Text, {
        className: c.__invalid_timestamp,
        color: "text-muted",
        variant: "text-xs/normal",
        children: l
      })]
    })]
  })
}