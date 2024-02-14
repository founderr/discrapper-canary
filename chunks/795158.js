"use strict";
r.r(t), r.d(t, {
  default: function() {
    return o
  }
});
var n = r("37983");
r("884691");
var a = r("77078"),
  u = r("106435"),
  i = r("50885"),
  s = r("782340");
let l = i.default.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;
var o = e => {
  let {
    user: t,
    avatarDecorationOverride: r,
    status: i,
    avatarSize: o = a.AvatarSizes.SIZE_120,
    "aria-hidden": c = !1
  } = e, {
    avatarDecorationSrc: d,
    avatarSrc: f,
    eventHandlers: m
  } = (0, u.default)({
    user: t,
    size: o,
    showPending: !0,
    avatarDecorationOverride: r
  });
  return (0, n.jsx)(l, {
    avatarDecoration: d,
    src: f,
    size: o,
    status: i,
    "aria-label": c ? void 0 : s.default.Messages.USER_SETTINGS_AVATAR,
    "aria-hidden": c,
    ...m
  })
}