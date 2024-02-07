"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var i = n("37983");
n("884691");
var l = n("446674"),
  r = n("77078"),
  s = n("152584"),
  a = n("853987"),
  o = n("491232"),
  u = n("884351"),
  c = n("184900"),
  d = n("783142"),
  f = n("217513"),
  h = n("915639"),
  C = n("845579"),
  E = n("415167"),
  p = n("790618"),
  v = n("697218");
n("550515");
var g = n("719923"),
  I = n("782340"),
  _ = n("146252");
let m = e => {
    var t;
    let {
      effectIsOwned: n,
      pendingProfileEffectRecord: s,
      product: u,
      purchase: c
    } = e, d = (0, l.useStateFromStores)([v.default], () => v.default.getCurrentUser()), f = (0, l.useStateFromStores)([a.default], () => a.default.getProduct(null == s ? void 0 : s.skuId)), C = (0, l.useStateFromStores)([h.default], () => h.default.locale), E = g.default.canUseCollectibles(d), p = (0, o.isPremiumCollectiblesPurchase)(c), m = (0, o.isPremiumCollectiblesProduct)(u), T = N(!E && p, m, E);
    return null != s ? (0, i.jsx)("div", {
      className: n ? _.effectDescriptionNoGradient : _.effectDescriptionBorderWithGradient,
      children: (0, i.jsxs)("div", {
        className: _.effectDescriptionContainer,
        children: [(0, i.jsx)(r.Text, {
          color: "header-primary",
          variant: "text-sm/semibold",
          className: _.effectName,
          children: null !== (t = null == c ? void 0 : c.name) && void 0 !== t ? t : null == f ? void 0 : f.name
        }), (0, i.jsx)(r.Text, {
          color: "text-normal",
          variant: "text-sm/normal",
          className: _.effectDescription,
          children: null != c ? c.summary : T
        }), null != c && (0, i.jsxs)(r.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: _.effectPurchasedAt,
          children: [I.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
            date: c.purchasedAt.toLocaleDateString(C, {
              month: "long",
              year: "numeric"
            })
          }), p && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("br", {}), I.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
          })]
        })]
      })
    }) : null
  },
  N = (e, t, n) => e ? I.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER_CHURNED : t && n ? I.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM : t && !n ? I.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER : I.default.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE_PREMIUM;
var T = e => {
  var t;
  let {
    user: n,
    pendingProfileEffectRecord: r,
    canApplySelectedChange: a,
    product: o,
    purchase: h
  } = e, {
    pendingAvatar: v,
    pendingBanner: I,
    pendingBio: N,
    pendingPronouns: T,
    pendingGlobalName: S,
    pendingAccentColor: L,
    pendingAvatarDecoration: A,
    pendingThemeColors: x
  } = (0, l.useStateFromStoresObject)([p.default], () => {
    let e = p.default.getAllPending(),
      t = p.default.getErrors();
    return {
      ...e,
      errors: t
    }
  }), P = g.default.isPremium(n), R = (0, f.default)(n.id), O = !!(null == R ? void 0 : R.getPreviewBio(N).value), M = C.UseLegacyChatInput.useSetting(), F = M && null != N ? u.default.parse(void 0, N).content : N, w = g.default.canUsePremiumProfileCustomization(n), j = (null == R ? void 0 : R.canUsePremiumProfileCustomization) || w, y = {
    user: n,
    canUsePremiumCustomization: w,
    onUpsellClick: E.default,
    onAvatarChange: s.setPendingAvatar,
    onBannerChange: d.setPendingBanner,
    pendingBanner: I,
    pendingBio: F,
    pendingPronouns: T,
    pendingAvatar: v,
    pendingGlobalName: S,
    pendingAvatarDecoration: A,
    pendingThemeColors: x,
    pendingAccentColor: L,
    pendingProfileEffectId: null !== (t = null == r ? void 0 : r.id) && void 0 !== t ? t : null,
    hideFakeActivity: O,
    useLargeBanner: !0
  };
  return (0, i.jsxs)("div", {
    className: j ? _.previewContainerWithTheme : _.previewContainerWithoutTheme,
    children: [(0, i.jsx)(c.default, {
      ...y,
      disabledInputs: !0,
      forProfileEffectModal: !0
    }), !1, (0, i.jsx)(m, {
      effectIsOwned: a,
      pendingProfileEffectRecord: r,
      product: o,
      purchase: h,
      userIsPremium: P
    })]
  })
}