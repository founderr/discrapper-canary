"use strict";
n.r(t), n("47120");
var a = n("470079"),
  s = n("442837"),
  l = n("524437"),
  i = n("243778"),
  r = n("594174"),
  o = n("51144"),
  u = n("190642"),
  d = n("680251"),
  c = n("410154"),
  f = n("727470"),
  E = n("888507"),
  _ = n("302800"),
  h = n("921944");
let C = "useCollectiblesShopTabNewBadge";
t.default = () => {
  let e = (0, s.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
    t = (0, c.default)(C) === c.CollectiblesShopMarketingVariants.SHY,
    {
      coachtipEnabled: n
    } = (0, E.default)({
      location: C
    }),
    {
      coachtipEnabled: m
    } = (0, f.default)({
      location: C
    }),
    {
      marketingEnabled: S,
      variant: I
    } = (0, u.default)({
      location: C
    }),
    {
      newBadgeEnabled: T
    } = (0, d.default)({
      location: C
    }),
    p = a.useMemo(() => {
      if ((0, o.ageEligibleForPremiumUpsell)(e)) {
        if (t) return [l.DismissibleContent.COLLECTIBLES_SHOP_SHY_COACHTIP];
        if (n) return [l.DismissibleContent.COLLECTIBLES_SHOP_SPRINGTOONS_COACHTIP];
        else if (m) return [l.DismissibleContent.COLLECTIBLES_SHOP_ANIME_V2_COACHTIP];
        else if (S) switch (I) {
          case _.CollectiblesMarketingVariant.TOOLTIP:
            return [l.DismissibleContent.COLLECTIBLES_SHOP_ELEMENTS_TOOLTIP];
          case _.CollectiblesMarketingVariant.COACHTIP:
            return [l.DismissibleContent.COLLECTIBLES_SHOP_ELEMENTS_COACHTIP]
        } else if (T) return [l.DismissibleContent.COLLECTIBLES_SHOP_LUNARNEWYEAR_NEW_BADGE]
      }
      return []
    }, [T, S, I, e, m, n, t]),
    [g, N] = (0, i.useSelectedDismissibleContent)(p, void 0, !0),
    A = null != g ? _.CollectiblesDCToDisplayOptions[g] : null;
  return {
    collectiblesShopTabNewBadgeDisplayOptions: A,
    dismissCollectiblesShopTabNewBadge: () => {
      null != A && N(h.ContentDismissActionType.AUTO)
    }
  }
}