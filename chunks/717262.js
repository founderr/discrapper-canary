"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var s = n("37983");
n("884691");
var l = n("446674"),
  i = n("77078"),
  r = n("152584"),
  o = n("853987"),
  a = n("491232"),
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
      pendingProfileEffectRecord: r,
      product: u,
      purchase: c
    } = e, d = (0, l.useStateFromStores)([E.default], () => E.default.getCurrentUser()), f = (0, l.useStateFromStores)([o.default], () => o.default.getProduct(null == r ? void 0 : r.skuId)), C = (0, l.useStateFromStores)([h.default], () => h.default.locale), v = m.default.canUseCollectibles(d), p = (0, a.isPremiumCollectiblesPurchase)(c), L = (0, a.isPremiumCollectiblesProduct)(u), _ = x(!v && p, L, v);
    return null != r ? (0, s.jsx)("div", {
      className: n ? I.effectDescriptionNoGradient : I.effectDescriptionBorderWithGradient,
      children: (0, s.jsxs)("div", {
        className: I.effectDescriptionContainer,
        children: [(0, s.jsx)(i.Text, {
          color: "header-primary",
          variant: "text-sm/semibold",
          className: I.effectName,
          children: null !== (t = null == c ? void 0 : c.name) && void 0 !== t ? t : null == f ? void 0 : f.name
        }), (0, s.jsx)(i.Text, {
          color: "text-normal",
          variant: "text-sm/normal",
          className: I.effectDescription,
          children: null != c ? c.summary : _
        }), null != c && (0, s.jsxs)(i.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: I.effectPurchasedAt,
          children: [g.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
            date: c.purchasedAt.toLocaleDateString(C, {
              month: "long",
              year: "numeric"
            })
          }), p && (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)("br", {}), g.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
          })]
        })]
      })
    }) : null
  },
  x = (e, t, n) => e ? g.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER_CHURNED : t && n ? g.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM : t && !n ? g.default.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER : g.default.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE_PREMIUM;
var _ = e => {
  var t;
  let {
    user: n,
    pendingProfileEffectRecord: i,
    canApplySelectedChange: o,
    product: a,
    purchase: h
  } = e, {
    pendingAvatar: E,
    pendingBanner: g,
    pendingBio: x,
    pendingPronouns: _,
    pendingGlobalName: N,
    pendingAccentColor: S,
    pendingAvatarDecoration: M,
    pendingThemeColors: A
  } = (0, l.useStateFromStoresObject)([p.default], () => {
    let e = p.default.getAllPending(),
      t = p.default.getErrors();
    return {
      ...e,
      errors: t
    }
  }), R = m.default.isPremium(n), T = (0, f.default)(n.id), O = !!(null == T ? void 0 : T.getPreviewBio(x).value), P = C.UseLegacyChatInput.useSetting(), w = P && null != x ? u.default.parse(void 0, x).content : x, j = m.default.canUsePremiumProfileCustomization(n), y = (null == T ? void 0 : T.canUsePremiumProfileCustomization) || j, b = {
    user: n,
    canUsePremiumCustomization: j,
    onUpsellClick: v.default,
    onAvatarChange: r.setPendingAvatar,
    onBannerChange: d.setPendingBanner,
    pendingBanner: g,
    pendingBio: w,
    pendingPronouns: _,
    pendingAvatar: E,
    pendingGlobalName: N,
    pendingAvatarDecoration: M,
    pendingThemeColors: A,
    pendingAccentColor: S,
    pendingProfileEffectId: null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : null,
    hideFakeActivity: O,
    useLargeBanner: !0
  };
  return (0, s.jsxs)("div", {
    className: y ? I.previewContainerWithTheme : I.previewContainerWithoutTheme,
    children: [(0, s.jsx)(c.default, {
      ...b,
      disabledInputs: !0,
      forProfileEffectModal: !0
    }), !1, (0, s.jsx)(L, {
      effectIsOwned: o,
      pendingProfileEffectRecord: i,
      product: a,
      purchase: h,
      userIsPremium: R
    })]
  })
}