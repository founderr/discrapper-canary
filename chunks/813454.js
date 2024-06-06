"use strict";
t.r(a), t.d(a, {
  default: function() {
    return f
  }
});
var l = t("735250");
t("470079");
var i = t("481060"),
  r = t("78675"),
  n = t("586791"),
  s = t("654904"),
  o = t("486324"),
  u = t("228168"),
  d = t("689938"),
  c = t("361142");

function f(e) {
  let {
    user: a,
    displayProfile: t,
    guildId: f,
    canUsePremiumCustomization: m,
    pendingBanner: v,
    hasProfileEffect: p,
    isTryItOutFlow: h,
    disabledInputs: g,
    forProfileEffectModal: S,
    onUpsellClick: I
  } = e, T = m || (null == t ? void 0 : t.canUsePremiumProfileCustomization);
  return (0, l.jsx)(r.default, {
    user: a,
    displayProfile: t,
    guildId: f,
    profileType: u.UserProfileTypes.BITE_SIZE,
    pendingBanner: v,
    overrideBannerWidth: S ? 280 : void 0,
    hasProfileEffect: p,
    canUsePremiumCustomization: m,
    children: !g && (0, l.jsxs)(i.Clickable, {
      onClick: () => {
        if (!T) {
          null == I || I();
          return
        }(0, s.handleOpenSelectImageModal)(o.UploadTypes.BANNER, f, h)
      },
      className: c.clickable,
      children: [T && (0, l.jsx)(n.default, {
        width: 16,
        height: 16,
        color: "white"
      }), (0, l.jsx)(i.Heading, {
        variant: "text-sm/medium",
        color: "always-white",
        children: T ? d.default.Messages.CHANGE_BANNER : d.default.Messages.USER_SETTINGS_UNLOCK_BANNER
      })]
    })
  })
}