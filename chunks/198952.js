s.d(t, {
  r: function() {
    return E
  }
});
var n = s(735250);
s(470079);
var a = s(481060),
  i = s(204197),
  r = s(998502),
  l = s(689938),
  o = s(297676);
let c = r.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar,
  E = e => {
    let {
      user: t,
      avatarSize: s = a.AvatarSizes.SIZE_48
    } = e, {
      avatarSrc: r,
      avatarDecorationSrc: E,
      eventHandlers: _
    } = (0, i.Z)({
      user: t,
      size: s
    });
    return (0, n.jsx)("div", {
      ..._,
      children: (0, n.jsx)(c, {
        className: o.__invalid_avatar,
        src: r,
        avatarDecoration: E,
        size: s,
        "aria-label": l.Z.Messages.FAMILY_CENTER_AVATAR_ARIA.format({
          name: t.username
        })
      })
    })
  };
t.Z = e => {
  let {
    currentUser: t,
    otherUser: s,
    children: a
  } = e;
  return (0, n.jsx)("div", {
    className: o.avatarPairContainer,
    children: (0, n.jsxs)("div", {
      className: o.avatarPair,
      children: [(0, n.jsx)(E, {
        user: t
      }), a, (0, n.jsx)(E, {
        user: s
      })]
    })
  })
}