"use strict";
s.r(t), s.d(t, {
  shouldForceQuestBarV2: function() {
    return l
  }
});
var n = s("918701"),
  a = s("46140");
let l = e => {
  let t = "1193992107035983872" === e.id,
    s = (0, n.hasVariant)(e, a.QuestVariants.IN_HOUSE_CONSOLE_QUEST),
    l = (0, n.hasVariant)(e, a.QuestVariants.MOBILE_CONSOLE_QUEST);
  return t || s || l
}