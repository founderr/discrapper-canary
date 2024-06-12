"use strict";
t.r(a), t.d(a, {
  default: function() {
    return A
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
  g = t("83429"),
  S = t("981631"),
  I = t("228168"),
  T = t("455108");

function A(e) {
  let {
    user: a,
    guild: t,
    canUsePremiumCustomization: A,
    onUpsellClick: E,
    pendingBanner: x,
    pendingBio: P,
    pendingPronouns: y,
    pendingAvatar: N,
    pendingAvatarDecoration: j,
    pendingNickname: C,
    pendingGlobalName: U,
    pendingThemeColors: _,
    pendingProfileEffectId: b,
    avatarClassName: M,
    isTryItOutFlow: w = !1,
    disabledInputs: R = !1,
    hideCustomStatus: B = !1,
    hideBioSection: O = !1,
    hideMessageInput: k = !0,
    hideExampleButton: z = !1
  } = e, L = (0, i.useStateFromStores)([f.default], () => f.default.findActivity(a.id, e => {
    let {
      type: a
    } = e;
    return a === S.ActivityTypes.CUSTOM_STATUS
  })), F = (0, s.default)(a.id, null == t ? void 0 : t.id), {
    avatarSrc: D,
    avatarDecorationSrc: G
  } = (0, c.default)({
    user: a,
    guildId: null == t ? void 0 : t.id,
    avatarDecorationOverride: j,
    avatarOverride: N,
    size: r.AvatarSizes.SIZE_80,
    showPending: !0
  }), W = (0, m.getPreviewProfileEffectId)({
    pendingProfileEffectId: b,
    displayProfile: F
  }), {
    theme: Z,
    primaryColor: H
  } = (0, o.default)({
    user: a,
    displayProfile: F,
    pendingThemeColors: _,
    isPreview: A
  });
  return (0, l.jsxs)(d.default, {
    user: a,
    displayProfile: F,
    profileType: I.UserProfileTypes.BITE_SIZE,
    pendingThemeColors: _,
    pendingProfileEffectId: W,
    className: T.container,
    forceShowPremium: A,
    children: [(0, l.jsxs)("header", {
      className: T.header,
      children: [(0, l.jsx)(p.default, {
        user: a,
        displayProfile: F,
        guildId: null == t ? void 0 : t.id,
        canUsePremiumCustomization: A,
        pendingBanner: x,
        hasProfileEffect: null != W,
        isTryItOutFlow: w,
        disabledInputs: R,
        onUpsellClick: () => null == E ? void 0 : E({
          object: S.AnalyticsObjects.EDIT_PROFILE_BANNER
        })
      }), (0, l.jsx)(v.default, {
        user: a,
        guild: t,
        displayProfile: F,
        canUsePremiumCustomization: A,
        previewAvatar: D,
        previewAvatarDecoration: G,
        previewTheme: Z,
        previewPrimaryColor: H,
        className: M,
        disabledInputs: R,
        isTryItOutFlow: w,
        onUpsellClick: () => null == E ? void 0 : E({
          object: S.AnalyticsObjects.AVATAR
        })
      }), !B && (0, l.jsx)(u.UserProfileCustomStatusBubble, {
        profileType: I.UserProfileTypes.BITE_SIZE,
        statusActivity: L
      })]
    }), (0, l.jsx)(h.default, {
      user: a,
      displayProfile: F,
      guild: t,
      pendingAvatar: N,
      pendingNickname: C,
      pendingGlobalName: U,
      pendingBio: P,
      pendingPronouns: y,
      isTryItOutFlow: w,
      hideBioSection: O
    }), (0, l.jsx)(g.default, {
      user: a,
      hideMessageInput: k,
      hideExampleButton: z
    }), null != W && (0, l.jsx)(n.default, {
      profileEffectId: W
    })]
  })
}