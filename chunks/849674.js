"use strict";
n.r(t), n.d(t, {
  useShouldShowUserPopoutCollectiblesUpsell: function() {
    return E
  }
}), n("222007");
var l = n("884691"),
  i = n("627445"),
  a = n.n(i),
  s = n("65597"),
  r = n("151426"),
  o = n("327037"),
  u = n("875212"),
  d = n("619935"),
  c = n("411691"),
  f = n("384997"),
  p = n("697218"),
  m = n("217513"),
  h = n("627601");
let E = e => {
  let {
    popoutUser: t,
    source: n,
    guildId: i
  } = e, E = "useShouldShowUserPopoutCollectiblesUpsell";
  (0, u.useTriggerDebuggingAA)({
    location: E + "auto on",
    autoTrackExposure: !0
  }), (0, u.useTriggerDebuggingAA)({
    location: E + "auto off",
    autoTrackExposure: !1
  });
  let S = (0, c.default)(E),
    {
      upsellSource: g
    } = (0, h.useUserPopoutCollectiblesUpsellStore)(),
    C = (0, s.default)([p.default], () => p.default.getCurrentUser());
  a(null != C, "currentUser should not be null");
  let T = (0, d.useBlockedPaymentsConfig)(),
    v = (0, m.default)(C.id, i),
    I = (0, m.default)(t.id, i);
  l.useEffect(() => {
    null == v && (0, o.fetchProfile)(C.id)
  }, [v, C]);
  let _ = S !== c.CollectiblesShopMarketingVariants.DEFAULT && (null == C ? void 0 : C.id) !== t.id && !T && !(null != g && g !== n),
    y = _ && (null == C ? void 0 : C.avatarDecoration) == null && (null == t ? void 0 : t.avatarDecoration) != null,
    A = _ && null != v && null == v.profileEffectId && (null == I ? void 0 : I.profileEffectId) != null,
    [N, x] = (0, f.useSelectedDismissibleContent)((y, []), void 0, !0);
  return {
    shouldShow: N === r.DismissibleContent.SHOP_FOR_ALL_USER_POPOUT_UPSELL,
    canShowAvatarDecorationUpsell: y,
    canShowProfileEffectUpsell: A,
    onDismiss: x
  }
}