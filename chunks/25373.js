n.d(t, {
  Z: function() {
    return C
  }
});
var r = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  l = n(680295),
  o = n(318661),
  a = n(721987),
  c = n(438163),
  d = n(502762),
  u = n(204197),
  f = n(158776),
  m = n(654904),
  E = n(985425),
  p = n(813454),
  _ = n(826646),
  h = n(83429),
  I = n(981631),
  g = n(228168),
  v = n(493873);

function C(e) {
  let {
    user: t,
    guild: n,
    canUsePremiumCustomization: C,
    onUpsellClick: x,
    pendingBanner: Z,
    pendingBio: P,
    pendingPronouns: A,
    pendingAvatar: T,
    pendingAvatarDecoration: N,
    pendingNickname: S,
    pendingGlobalName: j,
    pendingThemeColors: R,
    pendingProfileEffectId: M,
    avatarClassName: O,
    isTryItOutFlow: b = !1,
    disabledInputs: y = !1,
    hideCustomStatus: B = !1,
    hideBioSection: L = !1,
    hideMessageInput: U = !0,
    hideExampleButton: D = !1
  } = e, k = (0, i.e7)([f.Z], () => f.Z.findActivity(t.id, e => {
    let {
      type: t
    } = e;
    return t === I.IIU.CUSTOM_STATUS
  })), w = (0, o.ZP)(t.id, null == n ? void 0 : n.id), {
    avatarSrc: G,
    avatarDecorationSrc: F
  } = (0, u.Z)({
    user: t,
    guildId: null == n ? void 0 : n.id,
    avatarDecorationOverride: N,
    avatarOverride: T,
    size: s.AvatarSizes.SIZE_80,
    showPending: !0
  }), H = (0, m.ZT)({
    pendingProfileEffectId: M,
    displayProfile: w
  }), {
    theme: z,
    primaryColor: W
  } = (0, a.Z)({
    user: t,
    displayProfile: w,
    pendingThemeColors: R,
    isPreview: C
  });
  return (0, r.jsxs)(d.Z, {
    user: t,
    displayProfile: w,
    profileType: g.y0.BITE_SIZE,
    pendingThemeColors: R,
    pendingProfileEffectId: H,
    className: v.container,
    forceShowPremium: C,
    children: [(0, r.jsxs)("header", {
      className: v.header,
      children: [(0, r.jsx)(p.Z, {
        user: t,
        displayProfile: w,
        guildId: null == n ? void 0 : n.id,
        canUsePremiumCustomization: C,
        pendingBanner: Z,
        hasProfileEffect: null != H,
        isTryItOutFlow: b,
        disabledInputs: y,
        onUpsellClick: () => null == x ? void 0 : x({
          object: I.qAy.EDIT_PROFILE_BANNER
        })
      }), (0, r.jsx)(E.Z, {
        user: t,
        guild: n,
        displayProfile: w,
        canUsePremiumCustomization: C,
        previewAvatar: G,
        previewAvatarDecoration: F,
        previewTheme: z,
        previewPrimaryColor: W,
        className: O,
        disabledInputs: y,
        isTryItOutFlow: b,
        onUpsellClick: () => null == x ? void 0 : x({
          object: I.qAy.AVATAR
        })
      }), !B && (0, r.jsx)(c.J, {
        user: t,
        profileType: g.y0.BITE_SIZE,
        statusActivity: k
      })]
    }), (0, r.jsx)(_.Z, {
      user: t,
      displayProfile: w,
      guild: n,
      pendingAvatar: T,
      pendingNickname: S,
      pendingGlobalName: j,
      pendingBio: P,
      pendingPronouns: A,
      isTryItOutFlow: b,
      hideBioSection: L
    }), (0, r.jsx)(h.Z, {
      user: t,
      hideMessageInput: U,
      hideExampleButton: D
    }), null != H && (0, r.jsx)(l.Z, {
      profileEffectId: H
    })]
  })
}