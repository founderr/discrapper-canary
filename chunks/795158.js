"use strict";
r.r(t), r.d(t, {
  default: function() {
    return o
  }
});
var a = r("37983");
r("884691");
var s = r("77078"),
  n = r("106435"),
  i = r("50885"),
  l = r("782340");
let u = i.default.getEnableHardwareAcceleration() ? s.AnimatedAvatar : s.Avatar;
var o = e => {
  let {
    user: t,
    avatarDecorationOverride: r,
    status: i,
    avatarSize: o = s.AvatarSizes.SIZE_120,
    "aria-hidden": c = !1
  } = e, {
    avatarDecorationSrc: d,
    avatarSrc: f,
    eventHandlers: E
  } = (0, n.default)({
    user: t,
    size: o,
    showPending: !0,
    avatarDecorationOverride: r
  });
  return (0, a.jsx)(u, {
    avatarDecoration: d,
    src: f,
    size: o,
    status: i,
    "aria-label": c ? void 0 : l.default.Messages.USER_SETTINGS_AVATAR,
    "aria-hidden": c,
    ...E
  })
}