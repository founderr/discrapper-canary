var l = s(735250);
s(470079);
var t = s(442837),
  i = s(481060),
  r = s(809206),
  a = s(597688),
  o = s(884697),
  c = s(18438),
  u = s(778825),
  d = s(957730),
  E = s(25373),
  m = s(350327),
  f = s(318661),
  h = s(706454),
  p = s(695346),
  v = s(265159),
  I = s(25990),
  g = s(594174),
  C = s(74538),
  _ = s(689938),
  Z = s(838964);
let P = e => {
    var n;
    let {
      effectIsOwned: s,
      pendingProfileEffectRecord: r,
      product: c,
      purchase: u
    } = e, d = (0, t.e7)([g.default], () => g.default.getCurrentUser()), E = (0, t.e7)([a.Z], () => a.Z.getProduct(null == r ? void 0 : r.skuId)), m = (0, t.e7)([h.default], () => h.default.locale), f = C.ZP.canUseCollectibles(d), p = (0, o.qS)(u), v = (0, o.G1)(c), I = x(!f && p, v, f);
    return null != r ? (0, l.jsx)("div", {
      className: s ? Z.effectDescriptionNoGradient : Z.effectDescriptionBorderWithGradient,
      children: (0, l.jsxs)("div", {
        className: Z.effectDescriptionContainer,
        children: [(0, l.jsx)(i.Text, {
          color: "header-primary",
          variant: "text-sm/semibold",
          className: Z.effectName,
          children: null !== (n = null == u ? void 0 : u.name) && void 0 !== n ? n : null == E ? void 0 : E.name
        }), (0, l.jsx)(i.Text, {
          color: "text-normal",
          variant: "text-sm/normal",
          className: Z.effectDescription,
          children: null != u ? u.summary : I
        }), null != u && (0, l.jsxs)(i.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          className: Z.effectPurchasedAt,
          children: [_.Z.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
            date: u.purchasedAt.toLocaleDateString(m, {
              month: "long",
              year: "numeric"
            })
          }), p && (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("br", {}), _.Z.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
          })]
        })]
      })
    }) : null
  },
  x = (e, n, s) => e ? _.Z.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER_CHURNED : n && s ? _.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM : n && !s ? _.Z.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER : _.Z.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE_PREMIUM;
n.Z = e => {
  var n;
  let {
    user: s,
    pendingProfileEffectRecord: i,
    canApplySelectedChange: a,
    product: o,
    purchase: h,
    guild: g
  } = e, {
    pendingGlobalName: _,
    pendingNickname: x,
    pendingPronouns: A,
    pendingBio: T,
    pendingBanner: S,
    pendingAvatar: N,
    pendingAvatarDecoration: j,
    pendingThemeColors: R,
    pendingAccentColor: M
  } = (0, t.cj)([u.Z, I.Z], () => ({
    pendingNickname: void 0,
    pendingGlobalName: void 0,
    pendingAccentColor: void 0,
    ...null != g ? u.Z.getAllPending() : I.Z.getAllPending()
  })), O = C.ZP.isPremium(s), y = C.ZP.canUsePremiumProfileCustomization(s), L = (0, f.ZP)(s.id), U = !!(null == L ? void 0 : L.getPreviewBio(T).value), B = {
    user: s,
    guild: g,
    pendingGlobalName: _,
    pendingNickname: x,
    pendingPronouns: A,
    pendingBio: p.dN.useSetting() && null != T ? d.ZP.parse(void 0, T).content : T,
    pendingBanner: S,
    useLargeBanner: !0,
    pendingAvatar: N,
    pendingAvatarDecoration: j,
    pendingThemeColors: R,
    pendingAccentColor: M,
    pendingProfileEffectId: null !== (n = null == i ? void 0 : i.id) && void 0 !== n ? n : null,
    hideFakeActivity: U,
    canUsePremiumCustomization: y,
    onUpsellClick: v.Z,
    onAvatarChange: null != g ? c.I5 : r.I5,
    onBannerChange: m.g_
  };
  return (0, l.jsxs)("div", {
    className: Z.previewContainer,
    children: [(0, l.jsx)(E.Z, {
      ...B,
      disabledInputs: !0,
      hideCustomStatus: !0
    }), !1, (0, l.jsx)(P, {
      effectIsOwned: a,
      pendingProfileEffectRecord: i,
      product: o,
      purchase: h,
      userIsPremium: O
    })]
  })
}