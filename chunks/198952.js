n.d(t, {
  r: function() {
    return d
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  a = n(204197),
  l = n(998502),
  r = n(689938),
  c = n(297676);
let o = l.ZP.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar,
  d = e => {
    let {
      user: t,
      avatarSize: n = i.AvatarSizes.SIZE_48
    } = e, {
      avatarSrc: l,
      avatarDecorationSrc: d,
      eventHandlers: u
    } = (0, a.Z)({
      user: t,
      size: n
    });
    return (0, s.jsx)("div", {
      ...u,
      children: (0, s.jsx)(o, {
        className: c.__invalid_avatar,
        src: l,
        avatarDecoration: d,
        size: n,
        "aria-label": r.Z.Messages.FAMILY_CENTER_AVATAR_ARIA.format({
          name: t.username
        })
      })
    })
  };
t.Z = e => {
  let {
    currentUser: t,
    otherUser: n,
    children: i
  } = e;
  return (0, s.jsx)("div", {
    className: c.avatarPairContainer,
    children: (0, s.jsxs)("div", {
      className: c.avatarPair,
      children: [(0, s.jsx)(d, {
        user: t
      }), i, (0, s.jsx)(d, {
        user: n
      })]
    })
  })
}