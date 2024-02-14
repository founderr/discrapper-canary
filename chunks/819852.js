"use strict";
n.r(t), n.d(t, {
  CollectiblesMarketingVariant: function() {
    return s
  },
  CollectiblesDCToDisplayOptions: function() {
    return o
  }
});
var a, s, l = n("151426"),
  i = n("782340"),
  r = n("577151");
(a = s || (s = {}))[a.NONE = 0] = "NONE", a[a.TOOLTIP = 1] = "TOOLTIP", a[a.COACHTIP = 2] = "COACHTIP";
let o = {
  [l.DismissibleContent.COLLECTIBLES_SHOP_LUNARNEWYEAR_NEW_BADGE]: {
    type: 1,
    title: () => i.default.Messages.COLLECTIBLES_LUNAR_NEW_YEAR_TOOLTIP_TEXT,
    emojiName: "dragon"
  },
  [l.DismissibleContent.COLLECTIBLES_SHOP_ELEMENTS_TOOLTIP]: {
    type: 1,
    title: () => i.default.Messages.COLLECTIBLES_ELEMENTS_TOOLTIP_TITLE,
    emojiName: "fire"
  },
  [l.DismissibleContent.COLLECTIBLES_SHOP_ELEMENTS_COACHTIP]: {
    type: 2,
    title: () => i.default.Messages.COLLECTIBLES_ELEMENTS_COACHTIP_TITLE,
    body: () => i.default.Messages.COLLECTIBLES_ELEMENTS_COACHTIP_DISCRIPTION,
    imageSrc: r,
    assetIds: ["a_b9a64088e30fd3a6f2456c2e0f44f173", "a_ea8e2e628bacdddb1ef18cb382aa454c", "a_0f5d6c4dd8ae74662ee9c40722a56cbd"]
  }
}