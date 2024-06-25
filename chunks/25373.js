s.d(n, {
  Z: function() {
    return _
  }
});
var l = s(735250);
s(470079);
var t = s(442837),
  i = s(481060),
  r = s(680295),
  a = s(318661),
  o = s(721987),
  c = s(438163),
  u = s(502762),
  d = s(204197),
  E = s(158776),
  m = s(654904),
  f = s(985425),
  h = s(813454),
  p = s(826646),
  v = s(83429),
  I = s(981631),
  g = s(228168),
  C = s(493873);

function _(e) {
  let {
    user: n,
    guild: s,
    canUsePremiumCustomization: _,
    onUpsellClick: Z,
    pendingBanner: P,
    pendingBio: x,
    pendingPronouns: A,
    pendingAvatar: T,
    pendingAvatarDecoration: S,
    pendingNickname: N,
    pendingGlobalName: j,
    pendingThemeColors: R,
    pendingProfileEffectId: M,
    avatarClassName: O,
    isTryItOutFlow: y = !1,
    disabledInputs: L = !1,
    hideCustomStatus: U = !1,
    hideBioSection: B = !1,
    hideMessageInput: b = !0,
    hideExampleButton: D = !1
  } = e, k = (0, t.e7)([E.Z], () => E.Z.findActivity(n.id, e => {
    let {
      type: n
    } = e;
    return n === I.IIU.CUSTOM_STATUS
  })), F = (0, a.ZP)(n.id, null == s ? void 0 : s.id), {
    avatarSrc: w,
    avatarDecorationSrc: G
  } = (0, d.Z)({
    user: n,
    guildId: null == s ? void 0 : s.id,
    avatarDecorationOverride: S,
    avatarOverride: T,
    size: i.AvatarSizes.SIZE_80,
    showPending: !0
  }), H = (0, m.ZT)({
    pendingProfileEffectId: M,
    displayProfile: F
  }), {
    theme: z,
    primaryColor: V
  } = (0, o.Z)({
    user: n,
    displayProfile: F,
    pendingThemeColors: R,
    isPreview: _
  });
  return (0, l.jsxs)(u.Z, {
    user: n,
    displayProfile: F,
    profileType: g.y0.BITE_SIZE,
    pendingThemeColors: R,
    pendingProfileEffectId: H,
    className: C.container,
    forceShowPremium: _,
    children: [(0, l.jsxs)("header", {
      className: C.header,
      children: [(0, l.jsx)(h.Z, {
        user: n,
        displayProfile: F,
        guildId: null == s ? void 0 : s.id,
        canUsePremiumCustomization: _,
        pendingBanner: P,
        hasProfileEffect: null != H,
        isTryItOutFlow: y,
        disabledInputs: L,
        onUpsellClick: () => null == Z ? void 0 : Z({
          object: I.qAy.EDIT_PROFILE_BANNER
        })
      }), (0, l.jsx)(f.Z, {
        user: n,
        guild: s,
        displayProfile: F,
        canUsePremiumCustomization: _,
        previewAvatar: w,
        previewAvatarDecoration: G,
        previewTheme: z,
        previewPrimaryColor: V,
        className: O,
        disabledInputs: L,
        isTryItOutFlow: y,
        onUpsellClick: () => null == Z ? void 0 : Z({
          object: I.qAy.AVATAR
        })
      }), !U && (0, l.jsx)(c.J, {
        user: n,
        profileType: g.y0.BITE_SIZE,
        statusActivity: k
      })]
    }), (0, l.jsx)(p.Z, {
      user: n,
      displayProfile: F,
      guild: s,
      pendingAvatar: T,
      pendingNickname: N,
      pendingGlobalName: j,
      pendingBio: x,
      pendingPronouns: A,
      isTryItOutFlow: y,
      hideBioSection: B
    }), (0, l.jsx)(v.Z, {
      user: n,
      hideMessageInput: b,
      hideExampleButton: D
    }), null != H && (0, l.jsx)(r.Z, {
      profileEffectId: H
    })]
  })
}