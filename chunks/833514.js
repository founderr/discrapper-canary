"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var a = n("884691"),
  s = n("446674"),
  l = n("151426"),
  i = n("384997"),
  r = n("697218"),
  o = n("158998"),
  u = n("351348"),
  d = n("543557"),
  c = n("801894"),
  f = n("819852"),
  E = n("994428"),
  h = () => {
    let e = (0, s.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
      {
        marketingEnabled: t,
        variant: n
      } = (0, d.default)({
        location: "useCollectiblesShopTabNewBadge"
      }),
      {
        newBadgeEnabled: h
      } = (0, u.default)({
        location: "useCollectiblesShopTabNewBadge"
      }),
      {
        newBadgeEnabled: _
      } = (0, c.default)({
        location: "useCollectiblesShopTabNewBadge"
      }),
      C = a.useMemo(() => {
        if ((0, o.ageEligibleForPremiumUpsell)(e)) {
          if (t) switch (n) {
              case f.CollectiblesMarketingVariant.TOOLTIP:
                return [l.DismissibleContent.COLLECTIBLES_SHOP_ELEMENTS_TOOLTIP];
              case f.CollectiblesMarketingVariant.COACHTIP:
                return [l.DismissibleContent.COLLECTIBLES_SHOP_ELEMENTS_COACHTIP]
            } else if (_) return [l.DismissibleContent.COLLECTIBLES_SHOP_LUNARNEWYEAR_NEW_BADGE];
            else if (h) return [l.DismissibleContent.COLLECTIBLES_SHOP_CYBERPUNK_NEW_BADGE]
        }
        return []
      }, [h, _, t, n, e]),
      [I, S] = (0, i.useSelectedDismissibleContent)(C, void 0, !0),
      m = null != I ? f.CollectiblesDCToDisplayOptions[I] : null;
    return {
      collectiblesShopTabNewBadgeDisplayOptions: m,
      dismissCollectiblesShopTabNewBadge: () => {
        null != m && S(E.ContentDismissActionType.AUTO)
      }
    }
  }