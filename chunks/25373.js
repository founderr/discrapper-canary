i.d(a, {
  Z: function() {
    return P
  }
});
var n = i(735250);
i(470079);
var l = i(442837),
  r = i(481060),
  t = i(680295),
  s = i(318661),
  o = i(721987),
  u = i(438163),
  d = i(502762),
  c = i(204197),
  v = i(158776),
  m = i(654904),
  f = i(985425),
  p = i(813454),
  h = i(826646),
  g = i(83429),
  I = i(981631),
  Z = i(228168),
  x = i(493873);

function P(e) {
  let {
    user: a,
    guild: i,
    canUsePremiumCustomization: P,
    onUpsellClick: T,
    pendingBanner: S,
    pendingBio: A,
    pendingPronouns: E,
    pendingAvatar: N,
    pendingAvatarDecoration: j,
    pendingNickname: C,
    pendingGlobalName: y,
    pendingThemeColors: U,
    pendingProfileEffectId: _,
    avatarClassName: b,
    isTryItOutFlow: w = !1,
    disabledInputs: R = !1,
    hideCustomStatus: M = !1,
    hideBioSection: k = !1,
    hideMessageInput: B = !0,
    hideExampleButton: O = !1
  } = e, z = (0, l.e7)([v.Z], () => v.Z.findActivity(a.id, e => {
    let {
      type: a
    } = e;
    return a === I.IIU.CUSTOM_STATUS
  })), L = (0, s.ZP)(a.id, null == i ? void 0 : i.id), {
    avatarSrc: W,
    avatarDecorationSrc: D
  } = (0, c.Z)({
    user: a,
    guildId: null == i ? void 0 : i.id,
    avatarDecorationOverride: j,
    avatarOverride: N,
    size: r.AvatarSizes.SIZE_80,
    showPending: !0
  }), F = (0, m.ZT)({
    pendingProfileEffectId: _,
    displayProfile: L
  }), {
    theme: G,
    primaryColor: H
  } = (0, o.Z)({
    user: a,
    displayProfile: L,
    pendingThemeColors: U,
    isPreview: P
  });
  return (0, n.jsxs)(d.Z, {
    user: a,
    displayProfile: L,
    profileType: Z.y0.BITE_SIZE,
    pendingThemeColors: U,
    pendingProfileEffectId: F,
    className: x.container,
    forceShowPremium: P,
    children: [(0, n.jsxs)("header", {
      className: x.header,
      children: [(0, n.jsx)(p.Z, {
        user: a,
        displayProfile: L,
        guildId: null == i ? void 0 : i.id,
        canUsePremiumCustomization: P,
        pendingBanner: S,
        hasProfileEffect: null != F,
        isTryItOutFlow: w,
        disabledInputs: R,
        onUpsellClick: () => null == T ? void 0 : T({
          object: I.qAy.EDIT_PROFILE_BANNER
        })
      }), (0, n.jsx)(f.Z, {
        user: a,
        guild: i,
        displayProfile: L,
        canUsePremiumCustomization: P,
        previewAvatar: W,
        previewAvatarDecoration: D,
        previewTheme: G,
        previewPrimaryColor: H,
        className: b,
        disabledInputs: R,
        isTryItOutFlow: w,
        onUpsellClick: () => null == T ? void 0 : T({
          object: I.qAy.AVATAR
        })
      }), !M && (0, n.jsx)(u.J, {
        profileType: Z.y0.BITE_SIZE,
        statusActivity: z
      })]
    }), (0, n.jsx)(h.Z, {
      user: a,
      displayProfile: L,
      guild: i,
      pendingAvatar: N,
      pendingNickname: C,
      pendingGlobalName: y,
      pendingBio: A,
      pendingPronouns: E,
      isTryItOutFlow: w,
      hideBioSection: k
    }), (0, n.jsx)(g.Z, {
      user: a,
      hideMessageInput: B,
      hideExampleButton: O
    }), null != F && (0, n.jsx)(t.Z, {
      profileEffectId: F
    })]
  })
}