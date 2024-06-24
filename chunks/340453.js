n.d(t, {
  Z: function() {
    return u
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  a = n(204197),
  l = n(998502),
  r = n(631885),
  c = n(329242),
  o = n(333545);
let d = l.ZP.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;

function u(e) {
  let {
    otherUser: t,
    status: n
  } = e, l = (0, r.j_)(t.id, n), {
    avatarSrc: u,
    avatarDecorationSrc: E,
    eventHandlers: _
  } = (0, a.Z)({
    user: t,
    size: i.AvatarSizes.SIZE_40,
    animateOnHover: !0
  });
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)("div", {
      ..._,
      children: (0, s.jsx)(d, {
        className: o.avatar,
        src: u,
        avatarDecoration: E,
        size: i.AvatarSizes.SIZE_40,
        "aria-label": t.username
      })
    }), (0, s.jsxs)("div", {
      className: o.userPreview,
      children: [(0, s.jsx)("div", {
        className: o.userContainerWithTimestamp,
        children: (0, s.jsx)(c.Z, {
          user: t
        })
      }), (0, s.jsx)(i.Text, {
        className: o.__invalid_timestamp,
        color: "text-muted",
        variant: "text-xs/normal",
        children: l
      })]
    })]
  })
}