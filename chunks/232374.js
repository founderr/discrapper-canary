"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("424973"), n("222007");
var a = n("446674"),
  s = n("151426"),
  l = n("77078"),
  i = n("384997"),
  r = n("778588"),
  o = n("697218"),
  u = n("197881"),
  d = n("158998"),
  c = n("351348"),
  f = n("994428"),
  E = () => {
    let e = (0, a.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
      t = (0, a.useStateFromStores)([r.default], () => r.default.hasLayers()),
      n = (0, l.useModalsStore)(l.hasAnyModalOpenSelector),
      E = n || t || u.ProcessArgs.isDisallowPopupsSet(),
      {
        coachmarkEnabled: h
      } = (0, c.default)({
        location: "useCollectiblesShopTabCoachmarkDismissibleContent"
      }),
      _ = [];
    h && (0, d.ageEligibleForPremiumUpsell)(e) && _.push(s.DismissibleContent.COLLECTIBLES_SHOP_CYBERPUNK_COACHMARK);
    let [C, I] = (0, i.useSelectedDismissibleContent)(E ? [] : _, void 0, !0);
    return {
      collectiblesShopTabCoachmark: C,
      dismissCollectiblesShopTabCoachmark: () => {
        C === s.DismissibleContent.COLLECTIBLES_SHOP_CYBERPUNK_COACHMARK && I(f.ContentDismissActionType.AUTO)
      }
    }
  }