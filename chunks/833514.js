"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var a = n("884691"),
  s = n("446674"),
  i = n("151426"),
  l = n("384997"),
  r = n("697218"),
  o = n("158998"),
  u = n("351348"),
  d = n("801894"),
  c = n("994428"),
  f = () => {
    let e = (0, s.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
      {
        newBadgeEnabled: t
      } = (0, u.default)({
        location: "useCollectiblesShopTabNewBadge"
      }),
      {
        newBadgeEnabled: n
      } = (0, d.default)({
        location: "useCollectiblesShopTabNewBadge"
      }),
      f = a.useMemo(() => {
        if ((0, o.ageEligibleForPremiumUpsell)(e)) {
          if (n) return [i.DismissibleContent.COLLECTIBLES_SHOP_LUNARNEWYEAR_NEW_BADGE];
          if (t) return [i.DismissibleContent.COLLECTIBLES_SHOP_CYBERPUNK_NEW_BADGE]
        }
        return []
      }, [t, n, e]),
      [E, _] = (0, l.useSelectedDismissibleContent)(f, void 0, !0);
    return {
      collectiblesShopTabNewBadge: E,
      dismissCollectiblesShopTabNewBadge: () => {
        E && [i.DismissibleContent.COLLECTIBLES_SHOP_CYBERPUNK_NEW_BADGE, i.DismissibleContent.COLLECTIBLES_SHOP_LUNARNEWYEAR_NEW_BADGE].includes(E) && _(c.ContentDismissActionType.AUTO)
      }
    }
  }