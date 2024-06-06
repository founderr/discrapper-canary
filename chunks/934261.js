"use strict";
l.r(t);
var s = l("735250");
l("470079");
var a = l("442837"),
  n = l("481060"),
  r = l("809206"),
  i = l("597688"),
  u = l("884697"),
  o = l("18438"),
  c = l("778825"),
  d = l("957730"),
  f = l("589266"),
  m = l("350327"),
  h = l("318661"),
  E = l("706454"),
  p = l("695346"),
  g = l("265159"),
  C = l("25990"),
  I = l("594174");
l("612418");
var P = l("74538"),
  S = l("689938"),
  x = l("951969");
let _ = e => {
    var t;
    let {
      effectIsOwned: l,
      pendingProfileEffectRecord: r,
      product: o,
      purchase: c
    } = e, d = (0, a.useStateFromStores)([I.default], () => I.default.getCurrentUser()), f = (0, a.useStateFromStores)([i.default], () => i.default.getProduct(null == r ? void 0 : r.skuId)), m = (0, a.useStateFromStores)([E.default], () => E.default.locale), h = P.default.canUseCollectibles(d), p = (0, u.isPremiumCollectiblesPurchase)(c), g = (0, u.isPremiumCollectiblesProduct)(o), C = v(!h && p, g, h);
    return null != r ? (0, s.jsx)("div", {
      className: l ? x.effectDescriptionNoGradient : x.effectDescriptionBorderWithGradient,
      children: (0, s.jsxs)("div", {
        className: x.effectDescriptionContainer,
        children: [(0, s.jsx)(n.Text, {
          color: "header-primary",
          variant: "text-sm/semibold",
          className: x.effectName,
          children: null !== (t = null == c ? void 0 : c.name) && void 0 !== t ? t : null == f ? void 0 : f.name
        }), (0, s.jsx)(n.Text, {
          color: "text-normal",
          variant: "text-sm/normal",
          className: x.effectDescription,
          children: null != c ? c.summary : C
        }), null != c && (0, s.jsxs)(n.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: x.effectPurchasedAt,
          children: [S.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
            date: c.purchasedAt.toLocaleDateString(m, {
              month: "long",
              year: "numeric"
            })
          }), p && (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)("br", {}), S.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
          })]
        })]
      })
    }) : null
  },
  v = (e, t, l) => e ? S.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER_CHURNED : t && l ? S.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM : t && !l ? S.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER : S.default.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE_PREMIUM;
t.default = e => {
  var t;
  let {
    user: l,
    pendingProfileEffectRecord: n,
    canApplySelectedChange: i,
    product: u,
    purchase: E,
    guild: I
  } = e, {
    pendingGlobalName: S,
    pendingNickname: v,
    pendingPronouns: A,
    pendingBio: N,
    pendingBanner: R,
    pendingAvatar: M,
    pendingAvatarDecoration: T,
    pendingThemeColors: j,
    pendingAccentColor: O
  } = (0, a.useStateFromStoresObject)([c.default, C.default], () => ({
    pendingNickname: void 0,
    pendingGlobalName: void 0,
    pendingAccentColor: void 0,
    ...null != I ? c.default.getAllPending() : C.default.getAllPending()
  })), U = P.default.isPremium(l), L = P.default.canUsePremiumProfileCustomization(l), F = (0, h.default)(l.id), b = !!(null == F ? void 0 : F.getPreviewBio(N).value), y = {
    user: l,
    guild: I,
    pendingGlobalName: S,
    pendingNickname: v,
    pendingPronouns: A,
    pendingBio: p.UseLegacyChatInput.useSetting() && null != N ? d.default.parse(void 0, N).content : N,
    pendingBanner: R,
    useLargeBanner: !0,
    pendingAvatar: M,
    pendingAvatarDecoration: T,
    pendingThemeColors: j,
    pendingAccentColor: O,
    pendingProfileEffectId: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : null,
    hideFakeActivity: b,
    canUsePremiumCustomization: L,
    onUpsellClick: g.default,
    onAvatarChange: null != I ? o.setPendingAvatar : r.setPendingAvatar,
    onBannerChange: m.setPendingBanner
  };
  return (0, s.jsxs)("div", {
    className: x.previewContainer,
    children: [(0, s.jsx)(f.default, {
      ...y,
      location: "ProfileEffectPreview",
      disabledInputs: !0,
      forProfileEffectModal: !0,
      hideCustomStatus: !0,
      hideRecentGames: !0
    }), !1, (0, s.jsx)(_, {
      effectIsOwned: i,
      pendingProfileEffectRecord: n,
      product: u,
      purchase: E,
      userIsPremium: U
    })]
  })
}