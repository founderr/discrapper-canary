s.d(t, {
  Z: function() {
    return _
  }
});
var n = s(735250);
s(470079);
var a = s(481060),
  i = s(204197),
  r = s(998502),
  l = s(631885),
  o = s(329242),
  c = s(333545);
let E = r.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;

function _(e) {
  let {
    otherUser: t,
    status: s
  } = e, r = (0, l.j_)(t.id, s), {
    avatarSrc: _,
    avatarDecorationSrc: u,
    eventHandlers: d
  } = (0, i.Z)({
    user: t,
    size: a.AvatarSizes.SIZE_40,
    animateOnHover: !0
  });
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("div", {
      ...d,
      children: (0, n.jsx)(E, {
        className: c.avatar,
        src: _,
        avatarDecoration: u,
        size: a.AvatarSizes.SIZE_40,
        "aria-label": t.username
      })
    }), (0, n.jsxs)("div", {
      className: c.userPreview,
      children: [(0, n.jsx)("div", {
        className: c.userContainerWithTimestamp,
        children: (0, n.jsx)(o.Z, {
          user: t
        })
      }), (0, n.jsx)(a.Text, {
        className: c.__invalid_timestamp,
        color: "text-muted",
        variant: "text-xs/normal",
        children: r
      })]
    })]
  })
}