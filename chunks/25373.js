"use strict";
l.r(a), l.d(a, {
  default: function() {
    return E
  }
});
var t = l("735250");
l("470079");
var i = l("120356"),
  r = l.n(i),
  n = l("442837"),
  s = l("481060"),
  o = l("680295"),
  u = l("318661"),
  d = l("721987"),
  c = l("438163"),
  f = l("502762"),
  m = l("204197"),
  v = l("158776"),
  p = l("654904"),
  g = l("985425"),
  h = l("813454"),
  S = l("826646"),
  I = l("981631"),
  T = l("228168"),
  A = l("455108");

function E(e) {
  let {
    user: a,
    guild: l,
    canUsePremiumCustomization: i,
    onUpsellClick: E,
    onBannerChange: y,
    pendingAccentColor: P,
    pendingBanner: x,
    pendingBio: j,
    pendingPronouns: U,
    pendingAvatar: C,
    pendingAvatarDecoration: N,
    pendingNickname: b,
    pendingGlobalName: w,
    pendingThemeColors: _,
    pendingProfileEffectId: M,
    avatarClassName: B,
    isTryItOutFlow: R = !1,
    disabledInputs: k = !1,
    hideCustomStatus: O = !1,
    hideBioSection: z = !1,
    hideExampleButton: F = !1,
    forProfileEffectModal: L = !1
  } = e, D = (0, n.useStateFromStores)([v.default], () => v.default.findActivity(a.id, e => {
    let {
      type: a
    } = e;
    return a === I.ActivityTypes.CUSTOM_STATUS
  })), G = (0, u.default)(a.id, null == l ? void 0 : l.id), {
    avatarSrc: Z,
    avatarDecorationSrc: W
  } = (0, m.default)({
    user: a,
    guildId: null == l ? void 0 : l.id,
    avatarDecorationOverride: N,
    avatarOverride: C,
    size: s.AvatarSizes.SIZE_80,
    showPending: !0
  }), H = null == G ? void 0 : G.getPreviewBanner(x, !1), V = (0, p.getPreviewProfileEffectId)({
    pendingProfileEffectId: M,
    displayProfile: G
  }), {
    theme: Y,
    primaryColor: X
  } = (0, d.default)({
    user: a,
    displayProfile: G,
    pendingThemeColors: _,
    isPreview: i
  });
  return (0, t.jsxs)(f.default, {
    user: a,
    displayProfile: G,
    profileType: T.UserProfileTypes.BITE_SIZE,
    pendingThemeColors: _,
    pendingProfileEffectId: V,
    className: r()(A.container, {
      [A.profileEffectPreview]: L
    }),
    forceShowPremium: i,
    children: [(0, t.jsxs)("header", {
      className: A.header,
      children: [(0, t.jsx)(h.default, {
        displayProfile: G,
        canUsePremiumCustomization: i,
        previewAvatar: Z,
        previewBanner: H,
        previewPrimaryColor: X,
        previewProfileEffectId: V,
        pendingAccentColor: P,
        isTryItOutFlow: R,
        disabledInputs: k,
        forProfileEffectModal: L,
        onBannerChange: y,
        onUpsellClick: () => null == E ? void 0 : E({
          object: I.AnalyticsObjects.EDIT_PROFILE_BANNER
        })
      }), (0, t.jsx)(g.default, {
        user: a,
        guild: l,
        displayProfile: G,
        canUsePremiumCustomization: i,
        previewAvatar: Z,
        previewAvatarDecoration: W,
        previewTheme: Y,
        previewPrimaryColor: X,
        className: B,
        disabledInputs: k,
        isTryItOutFlow: R,
        onUpsellClick: () => null == E ? void 0 : E({
          object: I.AnalyticsObjects.AVATAR
        })
      }), !O && (0, t.jsx)(c.UserProfileCustomStatusBubble, {
        profileType: T.UserProfileTypes.BITE_SIZE,
        statusActivity: D
      })]
    }), (0, t.jsx)(S.default, {
      user: a,
      displayProfile: G,
      guild: l,
      pendingAvatar: C,
      pendingNickname: b,
      pendingGlobalName: w,
      pendingBio: j,
      pendingPronouns: U,
      isTryItOutFlow: R,
      hideBioSection: z,
      hideExampleButton: F
    }), null != V && (0, t.jsx)(o.default, {
      profileEffectId: V
    })]
  })
}