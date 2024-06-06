"use strict";
t.r(a), t.d(a, {
  default: function() {
    return m
  }
});
var l = t("735250");
t("470079");
var i = t("873706"),
  r = t("481060"),
  n = t("78675"),
  s = t("586791"),
  o = t("654904"),
  u = t("486324"),
  d = t("228168"),
  c = t("689938"),
  f = t("361142");

function m(e) {
  let {
    user: a,
    displayProfile: t,
    guildId: m,
    canUsePremiumCustomization: v,
    pendingBanner: p,
    hasProfileEffect: h,
    isTryItOutFlow: g,
    disabledInputs: S,
    onUpsellClick: I
  } = e, T = v || (null == t ? void 0 : t.canUsePremiumProfileCustomization), A = T ? s.default : i.NitroWheelIcon;
  return (0, l.jsx)(n.default, {
    user: a,
    displayProfile: t,
    guildId: m,
    profileType: d.UserProfileTypes.BITE_SIZE,
    pendingBanner: p,
    hasProfileEffect: h,
    canUsePremiumCustomization: v,
    children: !S && (0, l.jsxs)(r.Clickable, {
      onClick: () => {
        if (!T) {
          null == I || I();
          return
        }(0, o.handleOpenSelectImageModal)(u.UploadTypes.BANNER, m, g)
      },
      className: f.clickable,
      children: [(0, l.jsx)(A, {
        width: 16,
        height: 16,
        color: "white"
      }), (0, l.jsx)(r.Heading, {
        variant: "text-sm/medium",
        color: "always-white",
        children: T ? c.default.Messages.CHANGE_BANNER : c.default.Messages.USER_SETTINGS_UNLOCK_BANNER
      })]
    })
  })
}