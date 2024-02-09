"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
});
var r = n("37983");
n("884691");
var s = n("446674"),
  i = n("77078"),
  l = n("152584"),
  a = n("853987"),
  o = n("491232"),
  u = n("884351"),
  c = n("184900"),
  d = n("783142"),
  f = n("217513"),
  h = n("915639"),
  C = n("845579"),
  v = n("415167"),
  p = n("790618"),
  E = n("697218");
n("550515");
var m = n("719923"),
  g = n("782340"),
  I = n("146252");
let L = e => {
    var t;
    let {
      effectIsOwned: n,
      pendingProfileEffectRecord: l,
      product: u,
      purchase: c
    } = e, d = (0, s.useStateFromStores)([E.default], () => E.default.getCurrentUser()), f = (0, s.useStateFromStores)([a.default], () => a.default.getProduct(null == l ? void 0 : l.skuId)), C = (0, s.useStateFromStores)([h.default], () => h.default.locale), v = m.default.canUseCollectibles(d), p = (0, o.isPremiumCollectiblesPurchase)(c), L = (0, o.isPremiumCollectiblesProduct)(u), M = x(!v && p, L, v);
    return null != l ? (0, r.jsx)("div", {
      className: n ? I.effectDescriptionNoGradient : I.effectDescriptionBorderWithGradient,
      children: (0, r.jsxs)("div", {
        className: I.effectDescriptionContainer,
        children: [(0, r.jsx)(i.Text, {
          color: "header-primary",
          variant: "text-sm/semibold",
          className: I.effectName,
          children: null !== (t = null == c ? void 0 : c.name) && void 0 !== t ? t : null == f ? void 0 : f.name
        }), (0, r.jsx)(i.Text, {
          color: "text-normal",
          variant: "text-sm/normal",
          className: I.effectDescription,
          children: null != c ? c.summary : M
        }), null != c && (0, r.jsxs)(i.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: I.effectPurchasedAt,
          children: [g.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
            date: c.purchasedAt.toLocaleDateString(C, {
              month: "long",
              year: "numeric"
            })
          }), p && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("br", {}), g.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
          })]
        })]
      })
    }) : null
  },
  x = (e, t, n) => e ? g.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER_CHURNED : t && n ? g.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM : t && !n ? g.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER : g.default.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE_PREMIUM;
var M = e => {
  var t;
  let {
    user: n,
    pendingProfileEffectRecord: i,
    canApplySelectedChange: a,
    product: o,
    purchase: h
  } = e, {
    pendingAvatar: E,
    pendingBanner: g,
    pendingBio: x,
    pendingPronouns: M,
    pendingGlobalName: _,
    pendingAccentColor: N,
    pendingAvatarDecoration: S,
    pendingThemeColors: O
  } = (0, s.useStateFromStoresObject)([p.default], () => {
    let e = p.default.getAllPending(),
      t = p.default.getErrors();
    return {
      ...e,
      errors: t
    }
  }), A = m.default.isPremium(n), P = (0, f.default)(n.id), R = !!(null == P ? void 0 : P.getPreviewBio(x).value), T = C.UseLegacyChatInput.useSetting(), w = T && null != x ? u.default.parse(void 0, x).content : x, j = m.default.canUsePremiumProfileCustomization(n), y = (null == P ? void 0 : P.canUsePremiumProfileCustomization) || j, b = {
    user: n,
    canUsePremiumCustomization: j,
    onUpsellClick: v.default,
    onAvatarChange: l.setPendingAvatar,
    onBannerChange: d.setPendingBanner,
    pendingBanner: g,
    pendingBio: w,
    pendingPronouns: M,
    pendingAvatar: E,
    pendingGlobalName: _,
    pendingAvatarDecoration: S,
    pendingThemeColors: O,
    pendingAccentColor: N,
    pendingProfileEffectId: null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : null,
    hideFakeActivity: R,
    useLargeBanner: !0
  };
  return (0, r.jsxs)("div", {
    className: y ? I.previewContainerWithTheme : I.previewContainerWithoutTheme,
    children: [(0, r.jsx)(c.default, {
      ...b,
      disabledInputs: !0,
      forProfileEffectModal: !0
    }), !1, (0, r.jsx)(L, {
      effectIsOwned: a,
      pendingProfileEffectRecord: i,
      product: o,
      purchase: h,
      userIsPremium: A
    })]
  })
}