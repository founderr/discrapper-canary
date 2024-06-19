var n = s(735250);
s(470079);
var t = s(442837),
  r = s(481060),
  i = s(809206),
  a = s(597688),
  o = s(884697),
  c = s(18438),
  u = s(778825),
  d = s(957730),
  m = s(589266),
  E = s(350327),
  h = s(318661),
  f = s(706454),
  p = s(695346),
  g = s(265159),
  I = s(25990),
  C = s(594174),
  x = s(74538),
  _ = s(689938),
  v = s(838964);
let P = e => {
    var l;
    let {
      effectIsOwned: s,
      pendingProfileEffectRecord: i,
      product: c,
      purchase: u
    } = e, d = (0, t.e7)([C.default], () => C.default.getCurrentUser()), m = (0, t.e7)([a.Z], () => a.Z.getProduct(null == i ? void 0 : i.skuId)), E = (0, t.e7)([f.default], () => f.default.locale), h = x.ZP.canUseCollectibles(d), p = (0, o.qS)(u), g = (0, o.G1)(c), I = N(!h && p, g, h);
    return null != i ? (0, n.jsx)("div", {
      className: s ? v.effectDescriptionNoGradient : v.effectDescriptionBorderWithGradient,
      children: (0, n.jsxs)("div", {
        className: v.effectDescriptionContainer,
        children: [(0, n.jsx)(r.Text, {
          color: "header-primary",
          variant: "text-sm/semibold",
          className: v.effectName,
          children: null !== (l = null == u ? void 0 : u.name) && void 0 !== l ? l : null == m ? void 0 : m.name
        }), (0, n.jsx)(r.Text, {
          color: "text-normal",
          variant: "text-sm/normal",
          className: v.effectDescription,
          children: null != u ? u.summary : I
        }), null != u && (0, n.jsxs)(r.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: v.effectPurchasedAt,
          children: [_.Z.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
            date: u.purchasedAt.toLocaleDateString(E, {
              month: "long",
              year: "numeric"
            })
          }), p && (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("br", {}), _.Z.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
          })]
        })]
      })
    }) : null
  },
  N = (e, l, s) => e ? _.Z.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER_CHURNED : l && s ? _.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM : l && !s ? _.Z.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER : _.Z.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE_PREMIUM;
l.Z = e => {
  var l;
  let {
    user: s,
    pendingProfileEffectRecord: r,
    canApplySelectedChange: a,
    product: o,
    purchase: f,
    guild: C
  } = e, {
    pendingGlobalName: _,
    pendingNickname: N,
    pendingPronouns: R,
    pendingBio: S,
    pendingBanner: A,
    pendingAvatar: Z,
    pendingAvatarDecoration: j,
    pendingThemeColors: M,
    pendingAccentColor: T
  } = (0, t.cj)([u.Z, I.Z], () => ({
    pendingNickname: void 0,
    pendingGlobalName: void 0,
    pendingAccentColor: void 0,
    ...null != C ? u.Z.getAllPending() : I.Z.getAllPending()
  })), O = x.ZP.isPremium(s), U = x.ZP.canUsePremiumProfileCustomization(s), L = (0, h.ZP)(s.id), F = !!(null == L ? void 0 : L.getPreviewBio(S).value), b = {
    user: s,
    guild: C,
    pendingGlobalName: _,
    pendingNickname: N,
    pendingPronouns: R,
    pendingBio: p.dN.useSetting() && null != S ? d.ZP.parse(void 0, S).content : S,
    pendingBanner: A,
    useLargeBanner: !0,
    pendingAvatar: Z,
    pendingAvatarDecoration: j,
    pendingThemeColors: M,
    pendingAccentColor: T,
    pendingProfileEffectId: null !== (l = null == r ? void 0 : r.id) && void 0 !== l ? l : null,
    hideFakeActivity: F,
    canUsePremiumCustomization: U,
    onUpsellClick: g.Z,
    onAvatarChange: null != C ? c.I5 : i.I5,
    onBannerChange: E.g_
  };
  return (0, n.jsxs)("div", {
    className: v.previewContainer,
    children: [(0, n.jsx)(m.Z, {
      ...b,
      location: "ProfileEffectPreview",
      disabledInputs: !0,
      forProfileEffectModal: !0,
      hideCustomStatus: !0
    }), !1, (0, n.jsx)(P, {
      effectIsOwned: a,
      pendingProfileEffectRecord: r,
      product: o,
      purchase: f,
      userIsPremium: O
    })]
  })
}