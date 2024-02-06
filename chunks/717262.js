"use strict";
r.r(t), r.d(t, {
  default: function() {
    return T
  }
});
var n = r("37983");
r("884691");
var l = r("446674"),
  i = r("77078"),
  s = r("152584"),
  a = r("853987"),
  u = r("491232"),
  o = r("884351"),
  c = r("184900"),
  d = r("783142"),
  f = r("217513"),
  C = r("915639"),
  E = r("845579"),
  h = r("415167"),
  p = r("790618"),
  I = r("697218");
r("550515");
var v = r("719923"),
  L = r("782340"),
  _ = r("146252");
let S = e => {
    var t;
    let {
      effectIsOwned: r,
      pendingProfileEffectRecord: s,
      product: o,
      purchase: c
    } = e, d = (0, l.useStateFromStores)([I.default], () => I.default.getCurrentUser()), f = (0, l.useStateFromStores)([a.default], () => a.default.getProduct(null == s ? void 0 : s.skuId)), E = (0, l.useStateFromStores)([C.default], () => C.default.locale), h = v.default.canUseCollectibles(d), p = (0, u.isPremiumCollectiblesPurchase)(c), S = (0, u.isPremiumCollectiblesProduct)(o), T = g(!h && p, S, h);
    return null != s ? (0, n.jsx)("div", {
      className: r ? _.effectDescriptionNoGradient : _.effectDescriptionBorderWithGradient,
      children: (0, n.jsxs)("div", {
        className: _.effectDescriptionContainer,
        children: [(0, n.jsx)(i.Text, {
          color: "header-primary",
          variant: "text-sm/semibold",
          className: _.effectName,
          children: null !== (t = null == c ? void 0 : c.name) && void 0 !== t ? t : null == f ? void 0 : f.name
        }), (0, n.jsx)(i.Text, {
          color: "text-normal",
          variant: "text-sm/normal",
          className: _.effectDescription,
          children: null != c ? c.summary : T
        }), null != c && (0, n.jsxs)(i.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: _.effectPurchasedAt,
          children: [L.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
            date: c.purchasedAt.toLocaleDateString(E, {
              month: "long",
              year: "numeric"
            })
          }), p && (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("br", {}), L.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
          })]
        })]
      })
    }) : null
  },
  g = (e, t, r) => e ? L.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER_CHURNED : t && r ? L.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM : t && !r ? L.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER : L.default.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE_PREMIUM;
var T = e => {
  var t;
  let {
    user: r,
    pendingProfileEffectRecord: i,
    canApplySelectedChange: a,
    product: u,
    purchase: C
  } = e, {
    pendingAvatar: I,
    pendingBanner: L,
    pendingBio: g,
    pendingPronouns: T,
    pendingGlobalName: m,
    pendingAccentColor: A,
    pendingAvatarDecoration: O,
    pendingThemeColors: N
  } = (0, l.useStateFromStoresObject)([p.default], () => {
    let e = p.default.getAllPending(),
      t = p.default.getErrors();
    return {
      ...e,
      errors: t
    }
  }), P = v.default.isPremium(r), R = (0, f.default)(r.id), y = !!(null == R ? void 0 : R.getPreviewBio(g).value), x = E.UseLegacyChatInput.useSetting(), F = x && null != g ? o.default.parse(void 0, g).content : g, w = v.default.canUsePremiumProfileCustomization(r), M = (null == R ? void 0 : R.canUsePremiumProfileCustomization) || w, b = {
    user: r,
    canUsePremiumCustomization: w,
    onUpsellClick: h.default,
    onAvatarChange: s.setPendingAvatar,
    onBannerChange: d.setPendingBanner,
    pendingBanner: L,
    pendingBio: F,
    pendingPronouns: T,
    pendingAvatar: I,
    pendingGlobalName: m,
    pendingAvatarDecoration: O,
    pendingThemeColors: N,
    pendingAccentColor: A,
    pendingProfileEffectId: null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : null,
    hideFakeActivity: y,
    useLargeBanner: !0
  };
  return (0, n.jsxs)("div", {
    className: M ? _.previewContainerWithTheme : _.previewContainerWithoutTheme,
    children: [(0, n.jsx)(c.default, {
      ...b,
      disabledInputs: !0,
      forProfileEffectModal: !0
    }), !1, (0, n.jsx)(S, {
      effectIsOwned: a,
      pendingProfileEffectRecord: i,
      product: u,
      purchase: C,
      userIsPremium: P
    })]
  })
}