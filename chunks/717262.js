"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var r = n("37983");
n("884691");
var i = n("446674"),
  s = n("77078"),
  l = n("152584"),
  a = n("853987"),
  o = n("491232"),
  u = n("884351"),
  c = n("184900"),
  d = n("783142"),
  f = n("217513"),
  h = n("915639"),
  E = n("845579"),
  C = n("415167"),
  p = n("790618"),
  v = n("697218");
n("550515");
var m = n("719923"),
  _ = n("782340"),
  S = n("619986");
let g = e => {
    var t;
    let {
      effectIsOwned: n,
      pendingProfileEffectRecord: l,
      product: u,
      purchase: c
    } = e, d = (0, i.useStateFromStores)([v.default], () => v.default.getCurrentUser()), f = (0, i.useStateFromStores)([a.default], () => a.default.getProduct(null == l ? void 0 : l.skuId)), E = (0, i.useStateFromStores)([h.default], () => h.default.locale), C = m.default.canUseCollectibles(d), p = (0, o.isPremiumCollectiblesPurchase)(c), g = (0, o.isPremiumCollectiblesProduct)(u), A = I(!C && p, g, C);
    return null != l ? (0, r.jsx)("div", {
      className: n ? S.effectDescriptionNoGradient : S.effectDescriptionBorderWithGradient,
      children: (0, r.jsxs)("div", {
        className: S.effectDescriptionContainer,
        children: [(0, r.jsx)(s.Text, {
          color: "header-primary",
          variant: "text-sm/semibold",
          className: S.effectName,
          children: null !== (t = null == c ? void 0 : c.name) && void 0 !== t ? t : null == f ? void 0 : f.name
        }), (0, r.jsx)(s.Text, {
          color: "text-normal",
          variant: "text-sm/normal",
          className: S.effectDescription,
          children: null != c ? c.summary : A
        }), null != c && (0, r.jsxs)(s.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: S.effectPurchasedAt,
          children: [_.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
            date: c.purchasedAt.toLocaleDateString(E, {
              month: "long",
              year: "numeric"
            })
          }), p && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("br", {}), _.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
          })]
        })]
      })
    }) : null
  },
  I = (e, t, n) => e ? _.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER_CHURNED : t && n ? _.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM : t && !n ? _.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER : _.default.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE_PREMIUM;
var A = e => {
  var t;
  let {
    user: n,
    pendingProfileEffectRecord: s,
    canApplySelectedChange: a,
    product: o,
    purchase: h
  } = e, {
    pendingAvatar: v,
    pendingBanner: _,
    pendingBio: I,
    pendingPronouns: A,
    pendingGlobalName: T,
    pendingAccentColor: N,
    pendingAvatarDecoration: P,
    pendingThemeColors: R
  } = (0, i.useStateFromStoresObject)([p.default], () => {
    let e = p.default.getAllPending(),
      t = p.default.getErrors();
    return {
      ...e,
      errors: t
    }
  }), L = m.default.isPremium(n), x = (0, f.default)(n.id), M = !!(null == x ? void 0 : x.getPreviewBio(I).value), O = E.UseLegacyChatInput.useSetting(), w = O && null != I ? u.default.parse(void 0, I).content : I, y = m.default.canUsePremiumProfileCustomization(n), b = (null == x ? void 0 : x.canUsePremiumProfileCustomization) || y, F = {
    user: n,
    canUsePremiumCustomization: y,
    onUpsellClick: C.default,
    onAvatarChange: l.setPendingAvatar,
    onBannerChange: d.setPendingBanner,
    pendingBanner: _,
    pendingBio: w,
    pendingPronouns: A,
    pendingAvatar: v,
    pendingGlobalName: T,
    pendingAvatarDecoration: P,
    pendingThemeColors: R,
    pendingAccentColor: N,
    pendingProfileEffectId: null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : null,
    hideFakeActivity: M,
    useLargeBanner: !0
  };
  return (0, r.jsxs)("div", {
    className: b ? S.previewContainerWithTheme : S.previewContainerWithoutTheme,
    children: [(0, r.jsx)(c.default, {
      ...F,
      disabledInputs: !0,
      forProfileEffectModal: !0
    }), !1, (0, r.jsx)(g, {
      effectIsOwned: a,
      pendingProfileEffectRecord: s,
      product: o,
      purchase: h,
      userIsPremium: L
    })]
  })
}