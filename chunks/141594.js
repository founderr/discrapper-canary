"use strict";
a.r(t), a("47120");
var n = a("470079"),
  s = a("442837"),
  l = a("524437"),
  i = a("243778"),
  r = a("594174"),
  o = a("51144"),
  u = a("190642"),
  d = a("680251"),
  c = a("410154"),
  f = a("727470"),
  E = a("925666"),
  h = a("888507"),
  _ = a("302800"),
  C = a("921944");
let m = "useCollectiblesShopTabNewBadge";
t.default = () => {
  let e = (0, s.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
    t = (0, c.default)(m) === c.CollectiblesShopMarketingVariants.SHY,
    {
      coachtipEnabled: a
    } = (0, E.default)({
      location: m
    }),
    {
      coachtipEnabled: S
    } = (0, h.default)({
      location: m
    }),
    {
      coachtipEnabled: p
    } = (0, f.default)({
      location: m
    }),
    {
      marketingEnabled: I,
      variant: T
    } = (0, u.default)({
      location: m
    }),
    {
      newBadgeEnabled: g
    } = (0, d.default)({
      location: m
    }),
    A = n.useMemo(() => {
      if ((0, o.ageEligibleForPremiumUpsell)(e)) {
        if (a) return [l.DismissibleContent.COLLECTIBLES_SHOP_LOFI_VIBES_COACHTIP];
        if (t) return [l.DismissibleContent.COLLECTIBLES_SHOP_SHY_COACHTIP];
        else if (S) return [l.DismissibleContent.COLLECTIBLES_SHOP_SPRINGTOONS_COACHTIP];
        else if (p) return [l.DismissibleContent.COLLECTIBLES_SHOP_ANIME_V2_COACHTIP];
        else if (I) switch (T) {
          case _.CollectiblesMarketingVariant.TOOLTIP:
            return [l.DismissibleContent.COLLECTIBLES_SHOP_ELEMENTS_TOOLTIP];
          case _.CollectiblesMarketingVariant.COACHTIP:
            return [l.DismissibleContent.COLLECTIBLES_SHOP_ELEMENTS_COACHTIP]
        } else if (g) return [l.DismissibleContent.COLLECTIBLES_SHOP_LUNARNEWYEAR_NEW_BADGE]
      }
      return []
    }, [g, I, T, e, p, S, t, a]),
    [N, v] = (0, i.useSelectedDismissibleContent)(A, void 0, !0),
    R = null != N ? _.CollectiblesDCToDisplayOptions[N] : null;
  return {
    collectiblesShopTabNewBadgeDisplayOptions: R,
    dismissCollectiblesShopTabNewBadge: () => {
      null != R && v(C.ContentDismissActionType.AUTO)
    }
  }
}