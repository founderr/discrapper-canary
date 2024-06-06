"use strict";
t.r(a), t.d(a, {
  default: function() {
    return P
  }
});
var l = t("735250");
t("470079");
var i = t("120356"),
  r = t.n(i),
  n = t("442837"),
  s = t("481060"),
  o = t("680295"),
  u = t("318661"),
  d = t("721987"),
  c = t("438163"),
  f = t("502762"),
  m = t("204197"),
  v = t("158776"),
  p = t("654904"),
  h = t("985425"),
  g = t("813454"),
  S = t("826646"),
  I = t("981631"),
  T = t("228168"),
  A = t("455108");

function P(e) {
  let {
    user: a,
    guild: t,
    canUsePremiumCustomization: i,
    onUpsellClick: P,
    pendingBanner: E,
    pendingBio: y,
    pendingPronouns: x,
    pendingAvatar: U,
    pendingAvatarDecoration: j,
    pendingNickname: N,
    pendingGlobalName: C,
    pendingThemeColors: b,
    pendingProfileEffectId: w,
    avatarClassName: _,
    isTryItOutFlow: M = !1,
    disabledInputs: B = !1,
    hideCustomStatus: R = !1,
    hideBioSection: O = !1,
    hideExampleButton: k = !1,
    forProfileEffectModal: z = !1
  } = e, L = (0, n.useStateFromStores)([v.default], () => v.default.findActivity(a.id, e => {
    let {
      type: a
    } = e;
    return a === I.ActivityTypes.CUSTOM_STATUS
  })), F = (0, u.default)(a.id, null == t ? void 0 : t.id), {
    avatarSrc: D,
    avatarDecorationSrc: G
  } = (0, m.default)({
    user: a,
    guildId: null == t ? void 0 : t.id,
    avatarDecorationOverride: j,
    avatarOverride: U,
    size: s.AvatarSizes.SIZE_80,
    showPending: !0
  }), W = (0, p.getPreviewProfileEffectId)({
    pendingProfileEffectId: w,
    displayProfile: F
  }), {
    theme: Z,
    primaryColor: H
  } = (0, d.default)({
    user: a,
    displayProfile: F,
    pendingThemeColors: b,
    isPreview: i
  });
  return (0, l.jsxs)(f.default, {
    user: a,
    displayProfile: F,
    profileType: T.UserProfileTypes.BITE_SIZE,
    pendingThemeColors: b,
    pendingProfileEffectId: W,
    className: r()(A.container, {
      [A.profileEffectPreview]: z
    }),
    forceShowPremium: i,
    children: [(0, l.jsxs)("header", {
      className: A.header,
      children: [(0, l.jsx)(g.default, {
        user: a,
        displayProfile: F,
        guildId: null == t ? void 0 : t.id,
        canUsePremiumCustomization: i,
        pendingBanner: E,
        hasProfileEffect: null != W,
        isTryItOutFlow: M,
        disabledInputs: B,
        forProfileEffectModal: z,
        onUpsellClick: () => null == P ? void 0 : P({
          object: I.AnalyticsObjects.EDIT_PROFILE_BANNER
        })
      }), (0, l.jsx)(h.default, {
        user: a,
        guild: t,
        displayProfile: F,
        canUsePremiumCustomization: i,
        previewAvatar: D,
        previewAvatarDecoration: G,
        previewTheme: Z,
        previewPrimaryColor: H,
        className: _,
        disabledInputs: B,
        isTryItOutFlow: M,
        onUpsellClick: () => null == P ? void 0 : P({
          object: I.AnalyticsObjects.AVATAR
        })
      }), !R && (0, l.jsx)(c.UserProfileCustomStatusBubble, {
        profileType: T.UserProfileTypes.BITE_SIZE,
        statusActivity: L
      })]
    }), (0, l.jsx)(S.default, {
      user: a,
      displayProfile: F,
      guild: t,
      pendingAvatar: U,
      pendingNickname: N,
      pendingGlobalName: C,
      pendingBio: y,
      pendingPronouns: x,
      isTryItOutFlow: M,
      hideBioSection: O,
      hideExampleButton: k
    }), null != W && (0, l.jsx)(o.default, {
      profileEffectId: W
    })]
  })
}