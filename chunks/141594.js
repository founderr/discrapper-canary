"use strict";
a.r(t), a("47120");
var n = a("470079"),
  s = a("442837"),
  l = a("524437"),
  i = a("243778"),
  r = a("594174"),
  o = a("51144"),
  u = a("410154"),
  d = a("683167"),
  c = a("302800"),
  f = a("921944");
let E = "useCollectiblesShopTabNewBadge";
t.default = () => {
  let e = (0, s.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
    t = (0, u.default)(E) === u.CollectiblesShopMarketingVariants.SHY,
    a = (0, d.useShopNewBadgeCoachtipEdition)(E),
    h = n.useMemo(() => {
      if ((0, o.ageEligibleForPremiumUpsell)(e)) {
        if (a === c.ShopCoachtipEditions.GALAXY) return [l.DismissibleContent.COLLECTIBLES_SHOP_GALAXY_COACHTIP];
        if (a === c.ShopCoachtipEditions.LOFI_VIBES) return [l.DismissibleContent.COLLECTIBLES_SHOP_LOFI_VIBES_COACHTIP];
        else if (t) return [l.DismissibleContent.COLLECTIBLES_SHOP_SHY_COACHTIP]
      }
      return []
    }, [e, a, t]),
    [_, C] = (0, i.useSelectedDismissibleContent)(h, void 0, !0),
    m = null != _ ? c.CollectiblesDCToDisplayOptions[_] : null;
  return {
    collectiblesShopTabNewBadgeDisplayOptions: m,
    dismissCollectiblesShopTabNewBadge: () => {
      null != m && C(f.ContentDismissActionType.AUTO)
    }
  }
}