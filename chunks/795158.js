"use strict";
r.r(t), r.d(t, {
  default: function() {
    return l
  }
});
var a = r("37983");
r("884691");
var n = r("77078"),
  s = r("106435"),
  i = r("50885"),
  u = r("782340");
let o = i.default.getEnableHardwareAcceleration() ? n.AnimatedAvatar : n.Avatar;
var l = e => {
  let {
    user: t,
    avatarDecorationOverride: r,
    status: i,
    avatarSize: l = n.AvatarSizes.SIZE_120,
    "aria-hidden": c = !1
  } = e, {
    avatarDecorationSrc: d,
    avatarSrc: f,
    eventHandlers: E
  } = (0, s.default)({
    user: t,
    size: l,
    showPending: !0,
    avatarDecorationOverride: r
  });
  return (0, a.jsx)(o, {
    avatarDecoration: d,
    src: f,
    size: l,
    status: i,
    "aria-label": c ? void 0 : u.default.Messages.USER_SETTINGS_AVATAR,
    "aria-hidden": c,
    ...E
  })
}