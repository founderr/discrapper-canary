"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var a = n("884691"),
  s = n("446674"),
  l = n("151426"),
  i = n("384997"),
  r = n("697218"),
  o = n("158998"),
  u = n("543557"),
  d = n("801894"),
  c = n("819852"),
  f = n("994428"),
  E = () => {
    let e = (0, s.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
      {
        marketingEnabled: t,
        variant: n
      } = (0, u.default)({
        location: "useCollectiblesShopTabNewBadge"
      }),
      {
        newBadgeEnabled: E
      } = (0, d.default)({
        location: "useCollectiblesShopTabNewBadge"
      }),
      h = a.useMemo(() => {
        if ((0, o.ageEligibleForPremiumUpsell)(e)) {
          if (t) switch (n) {
            case c.CollectiblesMarketingVariant.TOOLTIP:
              return [l.DismissibleContent.COLLECTIBLES_SHOP_ELEMENTS_TOOLTIP];
            case c.CollectiblesMarketingVariant.COACHTIP:
              return [l.DismissibleContent.COLLECTIBLES_SHOP_ELEMENTS_COACHTIP]
          } else if (E) return [l.DismissibleContent.COLLECTIBLES_SHOP_LUNARNEWYEAR_NEW_BADGE]
        }
        return []
      }, [E, t, n, e]),
      [_, C] = (0, i.useSelectedDismissibleContent)(h, void 0, !0),
      I = null != _ ? c.CollectiblesDCToDisplayOptions[_] : null;
    return {
      collectiblesShopTabNewBadgeDisplayOptions: I,
      dismissCollectiblesShopTabNewBadge: () => {
        null != I && C(f.ContentDismissActionType.AUTO)
      }
    }
  }