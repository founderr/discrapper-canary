"use strict";
t.r(a), t.d(a, {
  default: function() {
    return T
  }
});
var l = t("735250");
t("470079");
var i = t("442837"),
  r = t("481060"),
  n = t("680295"),
  s = t("318661"),
  o = t("721987"),
  u = t("438163"),
  d = t("502762"),
  c = t("204197"),
  f = t("158776"),
  m = t("654904"),
  v = t("985425"),
  p = t("813454"),
  h = t("826646"),
  g = t("981631"),
  S = t("228168"),
  I = t("455108");

function T(e) {
  let {
    user: a,
    guild: t,
    canUsePremiumCustomization: T,
    onUpsellClick: A,
    pendingBanner: E,
    pendingBio: P,
    pendingPronouns: x,
    pendingAvatar: y,
    pendingAvatarDecoration: N,
    pendingNickname: j,
    pendingGlobalName: C,
    pendingThemeColors: U,
    pendingProfileEffectId: _,
    avatarClassName: b,
    isTryItOutFlow: M = !1,
    disabledInputs: w = !1,
    hideCustomStatus: R = !1,
    hideBioSection: B = !1,
    hideExampleButton: O = !1
  } = e, k = (0, i.useStateFromStores)([f.default], () => f.default.findActivity(a.id, e => {
    let {
      type: a
    } = e;
    return a === g.ActivityTypes.CUSTOM_STATUS
  })), z = (0, s.default)(a.id, null == t ? void 0 : t.id), {
    avatarSrc: L,
    avatarDecorationSrc: F
  } = (0, c.default)({
    user: a,
    guildId: null == t ? void 0 : t.id,
    avatarDecorationOverride: N,
    avatarOverride: y,
    size: r.AvatarSizes.SIZE_80,
    showPending: !0
  }), D = (0, m.getPreviewProfileEffectId)({
    pendingProfileEffectId: _,
    displayProfile: z
  }), {
    theme: G,
    primaryColor: W
  } = (0, o.default)({
    user: a,
    displayProfile: z,
    pendingThemeColors: U,
    isPreview: T
  });
  return (0, l.jsxs)(d.default, {
    user: a,
    displayProfile: z,
    profileType: S.UserProfileTypes.BITE_SIZE,
    pendingThemeColors: U,
    pendingProfileEffectId: D,
    className: I.container,
    forceShowPremium: T,
    children: [(0, l.jsxs)("header", {
      className: I.header,
      children: [(0, l.jsx)(p.default, {
        user: a,
        displayProfile: z,
        guildId: null == t ? void 0 : t.id,
        canUsePremiumCustomization: T,
        pendingBanner: E,
        hasProfileEffect: null != D,
        isTryItOutFlow: M,
        disabledInputs: w,
        onUpsellClick: () => null == A ? void 0 : A({
          object: g.AnalyticsObjects.EDIT_PROFILE_BANNER
        })
      }), (0, l.jsx)(v.default, {
        user: a,
        guild: t,
        displayProfile: z,
        canUsePremiumCustomization: T,
        previewAvatar: L,
        previewAvatarDecoration: F,
        previewTheme: G,
        previewPrimaryColor: W,
        className: b,
        disabledInputs: w,
        isTryItOutFlow: M,
        onUpsellClick: () => null == A ? void 0 : A({
          object: g.AnalyticsObjects.AVATAR
        })
      }), !R && (0, l.jsx)(u.UserProfileCustomStatusBubble, {
        profileType: S.UserProfileTypes.BITE_SIZE,
        statusActivity: k
      })]
    }), (0, l.jsx)(h.default, {
      user: a,
      displayProfile: z,
      guild: t,
      pendingAvatar: y,
      pendingNickname: j,
      pendingGlobalName: C,
      pendingBio: P,
      pendingPronouns: x,
      isTryItOutFlow: M,
      hideBioSection: B,
      hideExampleButton: O
    }), null != D && (0, l.jsx)(n.default, {
      profileEffectId: D
    })]
  })
}