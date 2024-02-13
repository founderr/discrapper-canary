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
  u = n("351348"),
  d = n("801894"),
  c = n("408381"),
  f = n("994428"),
  E = () => {
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
      E = a.useMemo(() => {
        if ((0, o.ageEligibleForPremiumUpsell)(e)) {
          if (n) return [l.DismissibleContent.COLLECTIBLES_SHOP_LUNARNEWYEAR_NEW_BADGE];
          if (t) return [l.DismissibleContent.COLLECTIBLES_SHOP_CYBERPUNK_NEW_BADGE]
        }
        return []
      }, [t, n, e]),
      [h, _] = (0, i.useSelectedDismissibleContent)(E, void 0, !0),
      C = null != h ? c.CollectiblesDCToDisplayOptions[h] : null;
    return {
      collectiblesShopTabNewBadgeDisplayOptions: C,
      dismissCollectiblesShopTabNewBadge: () => {
        null != C && _(f.ContentDismissActionType.AUTO)
      }
    }
  }