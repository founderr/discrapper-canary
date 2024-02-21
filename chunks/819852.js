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
    assetIds: ["a_a065206df7b011a5510e4e5bca7d49be", "a_554b7c34f7b6c709f19535aacb128e7b", "a_250640ab00a8837a1d56f35879138177", "a_fa014594d4b2b4249e1098c0adc85b47"]
  }
}