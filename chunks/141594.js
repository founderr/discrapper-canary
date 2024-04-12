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
  E = a("888507"),
  h = a("302800"),
  _ = a("921944");
let C = "useCollectiblesShopTabNewBadge";
t.default = () => {
  let e = (0, s.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
    t = (0, c.default)(C) === c.CollectiblesShopMarketingVariants.SHY,
    {
      coachtipEnabled: a
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
      variant: p
    } = (0, u.default)({
      location: C
    }),
    {
      newBadgeEnabled: I
    } = (0, d.default)({
      location: C
    }),
    T = n.useMemo(() => {
      if ((0, o.ageEligibleForPremiumUpsell)(e)) {
        if (t) return [l.DismissibleContent.COLLECTIBLES_SHOP_SHY_COACHTIP];
        if (a) return [l.DismissibleContent.COLLECTIBLES_SHOP_SPRINGTOONS_COACHTIP];
        else if (m) return [l.DismissibleContent.COLLECTIBLES_SHOP_ANIME_V2_COACHTIP];
        else if (S) switch (p) {
          case h.CollectiblesMarketingVariant.TOOLTIP:
            return [l.DismissibleContent.COLLECTIBLES_SHOP_ELEMENTS_TOOLTIP];
          case h.CollectiblesMarketingVariant.COACHTIP:
            return [l.DismissibleContent.COLLECTIBLES_SHOP_ELEMENTS_COACHTIP]
        } else if (I) return [l.DismissibleContent.COLLECTIBLES_SHOP_LUNARNEWYEAR_NEW_BADGE]
      }
      return []
    }, [I, S, p, e, m, a, t]),
    [g, A] = (0, i.useSelectedDismissibleContent)(T, void 0, !0),
    N = null != g ? h.CollectiblesDCToDisplayOptions[g] : null;
  return {
    collectiblesShopTabNewBadgeDisplayOptions: N,
    dismissCollectiblesShopTabNewBadge: () => {
      null != N && A(_.ContentDismissActionType.AUTO)
    }
  }
}