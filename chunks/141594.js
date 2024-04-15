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
  E = n("925666"),
  h = n("888507"),
  _ = n("302800"),
  C = n("921944");
let m = "useCollectiblesShopTabNewBadge";
t.default = () => {
  let e = (0, s.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
    t = (0, c.default)(m) === c.CollectiblesShopMarketingVariants.SHY,
    {
      coachtipEnabled: n
    } = (0, E.default)({
      location: m
    }),
    {
      coachtipEnabled: S
    } = (0, h.default)({
      location: m
    }),
    {
      coachtipEnabled: I
    } = (0, f.default)({
      location: m
    }),
    {
      marketingEnabled: p,
      variant: T
    } = (0, u.default)({
      location: m
    }),
    {
      newBadgeEnabled: g
    } = (0, d.default)({
      location: m
    }),
    A = a.useMemo(() => {
      if ((0, o.ageEligibleForPremiumUpsell)(e)) {
        if (n) return [l.DismissibleContent.COLLECTIBLES_SHOP_LOFI_VIBES_COACHTIP];
        if (t) return [l.DismissibleContent.COLLECTIBLES_SHOP_SHY_COACHTIP];
        else if (S) return [l.DismissibleContent.COLLECTIBLES_SHOP_SPRINGTOONS_COACHTIP];
        else if (I) return [l.DismissibleContent.COLLECTIBLES_SHOP_ANIME_V2_COACHTIP];
        else if (p) switch (T) {
          case _.CollectiblesMarketingVariant.TOOLTIP:
            return [l.DismissibleContent.COLLECTIBLES_SHOP_ELEMENTS_TOOLTIP];
          case _.CollectiblesMarketingVariant.COACHTIP:
            return [l.DismissibleContent.COLLECTIBLES_SHOP_ELEMENTS_COACHTIP]
        } else if (g) return [l.DismissibleContent.COLLECTIBLES_SHOP_LUNARNEWYEAR_NEW_BADGE]
      }
      return []
    }, [g, p, T, e, I, S, t, n]),
    [N, v] = (0, i.useSelectedDismissibleContent)(A, void 0, !0),
    R = null != N ? _.CollectiblesDCToDisplayOptions[N] : null;
  return {
    collectiblesShopTabNewBadgeDisplayOptions: R,
    dismissCollectiblesShopTabNewBadge: () => {
      null != R && v(C.ContentDismissActionType.AUTO)
    }
  }
}