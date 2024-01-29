"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var r = n("37983");
n("884691");
var l = n("446674"),
  i = n("77078"),
  s = n("152584"),
  a = n("853987"),
  o = n("491232"),
  u = n("884351"),
  c = n("184900"),
  d = n("783142"),
  f = n("217513"),
  C = n("915639"),
  E = n("845579"),
  h = n("415167"),
  p = n("790618"),
  I = n("697218");
n("550515");
var L = n("719923"),
  v = n("782340"),
  _ = n("146252");
let S = e => {
    var t;
    let {
      effectIsOwned: n,
      pendingProfileEffectRecord: s,
      product: u,
      purchase: c
    } = e, d = (0, l.useStateFromStores)([I.default], () => I.default.getCurrentUser()), f = (0, l.useStateFromStores)([a.default], () => a.default.getProduct(null == s ? void 0 : s.skuId)), E = (0, l.useStateFromStores)([C.default], () => C.default.locale), h = L.default.canUseCollectibles(d), p = (0, o.isPremiumCollectiblesPurchase)(c), S = (0, o.isPremiumCollectiblesProduct)(u), T = g(!h && p, S, h);
    return null != s ? (0, r.jsx)("div", {
      className: n ? _.effectDescriptionNoGradient : _.effectDescriptionBorderWithGradient,
      children: (0, r.jsxs)("div", {
        className: _.effectDescriptionContainer,
        children: [(0, r.jsx)(i.Text, {
          color: "header-primary",
          variant: "text-sm/semibold",
          className: _.effectName,
          children: null !== (t = null == c ? void 0 : c.name) && void 0 !== t ? t : null == f ? void 0 : f.name
        }), (0, r.jsx)(i.Text, {
          color: "text-normal",
          variant: "text-sm/normal",
          className: _.effectDescription,
          children: null != c ? c.summary : T
        }), null != c && (0, r.jsxs)(i.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: _.effectPurchasedAt,
          children: [v.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
            date: c.purchasedAt.toLocaleDateString(E, {
              month: "long",
              year: "numeric"
            })
          }), p && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("br", {}), v.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
          })]
        })]
      })
    }) : null
  },
  g = (e, t, n) => e ? v.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER_CHURNED : t && n ? v.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM : t && !n ? v.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER : v.default.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE_PREMIUM;
var T = e => {
  var t;
  let {
    user: n,
    pendingProfileEffectRecord: i,
    canApplySelectedChange: a,
    product: o,
    purchase: C
  } = e, {
    pendingAvatar: I,
    pendingBanner: v,
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
  }), P = L.default.isPremium(n), R = (0, f.default)(n.id), y = !!(null == R ? void 0 : R.getPreviewBio(g).value), x = E.UseLegacyChatInput.useSetting(), F = x && null != g ? u.default.parse(void 0, g).content : g, w = L.default.canUsePremiumProfileCustomization(n), M = (null == R ? void 0 : R.canUsePremiumProfileCustomization) || w, b = {
    user: n,
    canUsePremiumCustomization: w,
    onUpsellClick: h.default,
    onAvatarChange: s.setPendingAvatar,
    onBannerChange: d.setPendingBanner,
    pendingBanner: v,
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
  return (0, r.jsxs)("div", {
    className: M ? _.previewContainerWithTheme : _.previewContainerWithoutTheme,
    children: [(0, r.jsx)(c.default, {
      ...b,
      disabledInputs: !0,
      forProfileEffectModal: !0
    }), !1, (0, r.jsx)(S, {
      effectIsOwned: a,
      pendingProfileEffectRecord: i,
      product: o,
      purchase: C,
      userIsPremium: P
    })]
  })
}